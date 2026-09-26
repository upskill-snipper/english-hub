import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * To Kill a Mockingbird, Harper Lee (1960). A SUPPLEMENT: the page at
 * /revision/texts/to-kill-a-mockingbird is kept, and already holds the overview,
 * context, themes, characters and key quotations. This file adds what it lacked:
 * passages for close reading, language analysis, structure and form, vocabulary,
 * exam practice and a model answer, plus the timeline and character map for the
 * animated visuals.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here. Every quotation
 * below was instead found, word for word, in scanned editions of the novel
 * itself through the Internet Archive's full-text search (Open Library "search
 * inside", queried as an exact phrase): Lippincott (Philadelphia, 1960),
 * Heinemann (London, 1960), Popular Library (1962), Penguin (Harmondsworth,
 * 1963), Grand Central and Warner (1982), Mandarin (London, 1990), HarperLuxe,
 * the Folio Society (1996), HarperLargePrint, Harper (2010) and Arrow Books
 * (London, 2015), Arrow being the imprint Pearson recommends for 4ET1. Each
 * quotation was matched in at least three editions, and the surrounding words in
 * each hit were read to confirm the speaker and the chapter break.
 *
 * RE-VERIFIED 26 September 2026, every quotation and plot fact, in a second
 * pass. The first draft of this file had three errors, fixed here: it said Scout
 * fights Cecil Jacobs in Chapter 9 (she drops her fists and walks away, and it is
 * Francis she hits at Christmas); it set the mad dog on a hot afternoon (it is
 * February: Miss Stephanie wonders who would have thought of a mad dog then);
 * and it had the balcony rise "in silence" after the verdict, which the passage
 * does not state.
 *
 * AN ADVERSARIAL THIRD PASS, the same day, found more, fixed here. The juror who
 * first wanted to acquit is not "a Cunningham": Jem asks "One of the
 * Cunninghams?" and Atticus answers "One of their connections" (Chapter 23). The
 * verdict comes after the clock strikes eleven at night, not "late in the day".
 * Atticus does follow "Seventeen bullet holes in him." with a comment of his own,
 * so the analysis no longer says he cannot bring himself to add one. Judge
 * Taylor's prowler is seen only as a shadow, not identified as Ewell, and the
 * attack is no longer placed under the Radley oak, which could not be confirmed.
 *
 * EDITIONS DIFFER in punctuation and spelling. British editions print "Mr
 * Cunningham" without a full stop and use single quotation marks; American ones
 * print "Mr." and double marks. The Folio Society edition prints "Neighbours" in
 * Chapter 31 where the others print "Neighbors". Quotations here avoid words that
 * vary.
 *
 * THE PAGE ABOVE HAS ATTRIBUTION ERRORS, recorded in the audit and not repeated
 * here: "It's a sin to kill a mockingbird" is Atticus's rule in Chapter 10, which
 * Miss Maudie then explains; "People generally see what they look for" is Judge
 * Taylor's line in Chapter 17, not Atticus's; the Chapter 9 line continues "no
 * reason for us not to try to win"; and Heck Tate's Chapter 30 speech is worded
 * differently from the paraphrase printed there. The exam tips below teach the
 * correct forms. Dill's "I'm little but I'm old" is Chapter 1.
 */
export const guide: StudyGuide = {
  slug: 'to-kill-a-mockingbird',
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  form: 'novel',
  scope:
    'The whole novel (1960), thirty-one chapters in two parts: Part One is Chapters 1 to 11 and Part Two is Chapters 12 to 31. For Pearson Edexcel International GCSE English Literature (4ET1) it is a modern prose text in Component 1, Section C: you answer one essay question from a choice of two, the examination is closed book, and you are expected to show close knowledge of the novel and an understanding of its context. Pearson recommends, but does not require, the Arrow 50th anniversary edition of June 2010 (ISBN 9780099549482). For Cambridge IGCSE Literature in English (0475) it is a set text in Paper 1, Section B (Prose), for 2026 and 2027: there is a choice of two questions on each text, relevant passages are printed on the question paper, and you may not take the novel into the exam room. Page numbers differ between editions, so this guide locates every moment by chapter.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Harper Lee 1960. First published in the United States by J. B. Lippincott in 1960. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 100000,
    basis:
      'Estimated, not counted: no licensed copy is held to count. The novel is usually given as about 100,000 words over thirty-one chapters, and the page above gives the same figure. Any length above 3,000 words puts it under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  native: {
    overview: '/revision/texts/to-kill-a-mockingbird',
    context: '/revision/texts/to-kill-a-mockingbird',
    themes: '/revision/texts/to-kill-a-mockingbird',
    characters: '/revision/texts/to-kill-a-mockingbird',
    keyQuotes: '/revision/texts/to-kill-a-mockingbird',
  },

  extracts: [
    {
      title: 'The mob at the jail',
      where: 'Chapter 15',
      pointer:
        'From the cars drawing up outside the Maycomb jail, where Atticus sits reading in one of his office chairs, to the men climbing back into their cars and driving away.',
      summary:
        'Tom Robinson has been moved to the Maycomb jail shortly before his trial, and Atticus sits outside it at night. A group of men arrives by car and tells him to stand aside. Scout, Jem and Dill, who have followed him into town, push into the circle. Jem refuses to go home when his father orders him to, and Scout kicks a man who grabs her brother. Then she recognises Mr Cunningham, the father of her schoolfellow Walter, and chats to him about Walter and about his legal troubles. Her friendly talk meets a long silence, until Mr Cunningham crouches down, promises to pass on her greeting, and tells the men to leave. Afterwards it emerges that Mr Underwood had been watching from a nearby window with a gun.',
      annotations: [
        {
          phrase: 'Son, I said go home.',
          note: 'Atticus does not argue or explain; he simply repeats the order. The bare repetition of a command a son refuses in front of a hostile crowd tells us how much danger Atticus believes the children are in, and how little he can do about it.',
        },
        {
          phrase: 'Mutual defiance made them alike.',
          note: "Scout has just noticed how little Jem looks like Atticus, and the narration then finds the likeness that matters: father and son standing their ground in the same way. The short, balanced sentence turns a moment of disobedience into a sign that Jem has inherited his father's courage.",
        },
        {
          phrase: "How's your entailment gettin' along?",
          note: "A long legal word dropped into a child's Southern speech. Scout is only making polite conversation, but by treating one man in the mob as a neighbour with private worries, she reminds him that he is a father and a client, not a face in a crowd.",
        },
        {
          phrase: "I'll tell him you said hey, little lady",
          note: "Mr Cunningham's answer comes after the silence Scout cannot read. By speaking to her as a person, he breaks the mob's anonymity; his next act is to send the men home. The whole crisis turns on a greeting.",
        },
      ],
      question:
        'How does Lee make this such a tense and dramatic moment in the novel? Consider what Scout understands and what the reader understands.',
    },
    {
      title: 'The verdict',
      where: 'Chapter 21',
      pointer:
        'From Scout watching the jury file back into the courtroom, after hours of waiting in the balcony, to Reverend Sykes telling her to stand as her father passes.',
      summary:
        "Scout, Jem and Dill have waited for hours in the balcony with the town's Black spectators and Reverend Sykes. When the jury returns, Scout sees something only a lawyer's daughter would notice: not one juror looks at Tom. Judge Taylor polls the jury, and each juror answers guilty. Atticus gathers his papers, speaks to Tom, and walks down the aisle and out. Scout, in a daze, realises that everyone in the balcony has risen to their feet, and Reverend Sykes tells her to stand for her father.",
      annotations: [
        {
          phrase: "something only a lawyer's child could be expected to see",
          note: "Scout's position is exact: she is inside the adult world by knowledge but outside it by age. The reader is warned of the verdict a moment before it is read, which makes the formal announcement feel like a confirmation of dread rather than a surprise.",
        },
        {
          phrase: 'knowing that the gun was empty',
          note: 'Scout says that seeing the jury was like watching Atticus raise a rifle and pull the trigger, knowing all the time that the gun was empty. The image recalls the mad dog of Chapter 10. There his single shot saved the street; here his aim is just as true, but the law gives him nothing to fire.',
        },
        {
          phrase: 'not one of them looked at Tom Robinson',
          note: 'The jurors cannot meet the eyes of the man they have condemned, so their guilt is shown in a gesture before the word guilty is spoken. Lee lets body language carry the moral judgement.',
        },
        {
          phrase: 'Judge Taylor was polling the jury',
          note: 'The legal procedure is reported flatly, and the repeated verdicts that follow fall like blows. Scout has just shut her eyes, so the scene is heard rather than seen, which keeps the reader inside her shock.',
        },
        {
          phrase: "Miss Jean Louise, stand up. Your father's passin'.",
          note: 'The chapter ends on a quiet act of respect from the people with the least power in the courtroom. They stand for the man who lost, and Scout is given her full name, as if the moment has made her part of something adult and solemn.',
        },
      ],
      question:
        'How does Lee make this moment in the novel so moving? Refer closely to the passage in your answer.',
    },
    {
      title: 'On the Radley porch',
      where: 'Chapter 31',
      pointer:
        'From Boo asking Scout, almost in a whisper, to take him home, to Scout standing alone on the Radley porch before she walks back home to Atticus.',
      summary:
        "After the attack, Boo quietly asks Scout to take him home. She has him bend his arm so that she can hold it, and walks him down the street as a lady would be escorted by a gentleman, so that any neighbour watching would see nothing odd. At his door he goes inside, and she never sees him again. Standing on his porch, she sees the street as he must have seen it, season by season: the children he watched and the gifts he left them. She understands at last what Atticus meant about seeing from another person's point of view, and walks home.",
      annotations: [
        {
          phrase: 'in the voice of a child afraid of the dark',
          note: 'The man the children imagined as a monster now sounds like a frightened child himself. Lee reverses the roles of the whole novel: the small girl who once feared Boo becomes the one who leads him home.',
        },
        {
          phrase: 'bend your arm down here',
          note: "Scout arranges a small piece of theatre to protect Boo's dignity. It echoes Aunt Alexandra's lessons in being a lady, now used for kindness rather than show, and it is an act of the empathy Atticus has taught her.",
        },
        {
          phrase: 'bring food with death and flowers with sickness',
          note: 'Scout sets out what neighbours owe each other, in a balanced pattern of giving. The rhythm is gentle, but the point is sharp: Boo gave the children everything and they gave him nothing back.',
        },
        {
          phrase: 'We never put back into the tree what we took out of it',
          note: 'The knot-hole gifts of Part One return as a debt. The sentence is plain and guilty, the adult narrator admitting a failure her child self never noticed.',
        },
      ],
      question:
        "How does Lee make this ending to the story of Boo Radley so satisfying? Refer to this passage and to Boo's part in the novel as a whole.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Retrospective first-person narration',
      example:
        'Chapter 1 opens with the grown-up Scout and Jem, years later, discussing “the events leading to his accident”, and remembering that “Somehow, it was hotter then”.',
      effect:
        'Two voices share one “I”: the child who lived through the events and the adult Jean Louise who understands them. The adverbs “Somehow” and “then” announce that this is memory, softened and heightened by time. The double view lets Lee show racism through the eyes of a child who half understands it, while the adult voice supplies the judgement, so the novel can condemn Maycomb without lecturing the reader.',
    },
    {
      technique: 'Sensory imagery and comic simile',
      example:
        'Chapter 1: by nightfall the ladies of Maycomb were “like soft teacakes with frostings of sweat and sweet talcum”.',
      effect:
        "The simile is affectionate and funny, turning respectable ladies into cakes melting in the heat. Food, sweetness and stickiness make the reader feel Maycomb's slow summer on the skin. The gentle mockery matters: Lee first makes us love the town, so that its failure at the trial is a betrayal we feel rather than a fact we are told.",
    },
    {
      technique: 'Allusion',
      example:
        'Chapter 1: Maycomb County had “recently been told that it had nothing to fear but fear itself”.',
      effect:
        "The line echoes President Franklin D. Roosevelt's inaugural address of 4 March 1933, fixing the opening in the Depression. It is also quietly ironic. The novel is full of fear: of Boo, of a Black man accused by a white woman, of change. In the years the novel covers, Maycomb fears the wrong people, and the allusion suggests that fear itself is exactly the danger.",
    },
    {
      technique: 'Dialect and idiolect',
      example:
        "Scout at the jail: “How's your entailment gettin' along?” (Chapter 15); Jem after the verdict: “It ain't right, Atticus” (Chapter 22).",
      effect:
        "Lee writes Maycomb's speech as it sounds, with dropped endings and Southern grammar, so that every character is placed by class, race and age as they speak. Scout's mix of a lawyer's word with a child's dialect is comic and exactly why it works on Mr Cunningham. Jem's plain “ain't” shows grief stripping away his attempts to sound grown up. Calpurnia's two ways of speaking, at home and at First Purchase church in Chapter 12, show that language is also a way of belonging.",
    },
    {
      technique: 'Symbolism',
      example:
        "Atticus: “remember it's a sin to kill a mockingbird” (Chapter 10); Mr Underwood's editorial on “the senseless slaughter of songbirds by hunters and children” (Chapter 25); Scout: “sort of like shootin' a mockingbird” (Chapter 30).",
      effect:
        "Miss Maudie explains the rule: “Mockingbirds don't do one thing but make music for us to enjoy”. Lee plants the symbol early, when it seems to be about air rifles, and then attaches it to two people. Tom's death is the sin committed; Boo's protection is the sin avoided. The symbol lets the novel end with a kind of justice for Boo even though it could not give justice to Tom, and a strong answer notices that uneven balance.",
    },
    {
      technique: 'Foreshadowing and irony',
      example:
        'Judge Taylor, explaining why he will let the spectators stay: “People generally see what they look for, and hear what they listen for” (Chapter 17).',
      effect:
        'The judge is refusing a request to clear the courtroom of spectators, or at least of women and children, but the reader hears a prediction of the verdict. Twelve jurors will see what they came to see, whatever the evidence. The line is often credited to Atticus; giving it to the judge is more unsettling, since it shows that the man presiding over the trial understands its injustice and cannot prevent it.',
    },
    {
      technique: 'Blunt, verbless sentences',
      example: "Atticus, reporting Tom's death: “Seventeen bullet holes in him.” (Chapter 24).",
      effect:
        'The sentence has no verb and no comment, just a number. Atticus follows it with one plain judgement, that the guards did not have to shoot Tom that much, but the bare count comes first and does most of the work. From a man who chooses his words carefully, the number alone shows how far the guards went against a man with one working arm, and Lee lets the reader do the adding up.',
    },
    {
      technique: 'Euphemism and understatement',
      example:
        'Heck Tate: “Bob Ewell fell on his knife.” and “Let the dead bury the dead this time” (Chapter 30).',
      effect:
        "The sheriff's official story is a deliberate softening of the truth, and the second line echoes Jesus's words in Matthew's Gospel, “let the dead bury their dead”. Tate chooses a merciful lie over a legal truth that would drag Boo into public view, and Lee lets it stand. It is the clearest point in the novel where the law bends in favour of the innocent, and readers still argue about whether that is justice or its absence.",
    },
    {
      technique: 'Echo and repetition across the novel',
      example:
        'Atticus in Chapter 3: you understand a person only when you “climb into his skin and walk around in it”; Scout in Chapter 31: “Just standing on the Radley porch was enough.”',
      effect:
        "Lee repeats the lesson at the start and the end, and the second time it is made literal: Scout stands where Boo stood and sees his view of the street. The echo gives the novel its moral shape, from instruction to understanding, and shows that the novel measures Scout's growth by whether she can do what her father only described.",
    },
  ],

  structureForm: [
    {
      heading: 'Two parts, one design',
      body: "Part One (Chapters 1 to 11) covers about two years of childhood: games about Boo Radley, school, neighbours, a mad dog and Mrs Dubose. Part Two (Chapters 12 to 31) is the year of Tom Robinson's trial and its aftermath. Some readers find Part One slow, but it is where the lessons are taught that Part Two tests. The mockingbird rule of Chapter 10 is broken with Tom and kept with Boo. The skin-and-shoes lesson of Chapter 3 is finally lived on the Radley porch. Atticus's definition of courage in Chapter 11, given over the death of a bad-tempered old woman, becomes the only way to understand why he takes a case he knows he will lose. The more convincing reading is that Part One is the moral education and Part Two the examination.",
    },
    {
      heading: 'A circular frame',
      body: 'The novel begins with its ending. Its first sentence tells us that Jem broke his arm when he was nearly thirteen, and the adult Scout and Jem argue about the events leading up to it: Scout blames the Ewells, while Jem says it began the summer Dill arrived and they tried to make Boo come out. Chapters 28 to 31 deliver that injury, and both of them turn out to be right, because Bob Ewell is the attacker and Boo is the rescuer. The whole book is therefore an answer to a question asked on its first page, which gives even the lazy summer chapters a quiet sense of something approaching.',
    },
    {
      heading: 'A child seeing, an adult telling',
      body: "Scout is almost six when the story begins, and Atticus calls her an eight-year-old after the night at the jail, but she tells it as a grown woman looking back. The gap between the two is Lee's most useful tool. Scout often misunderstands what she sees, as at the jail, where she thinks she is making conversation while the reader sees a lynch mob. That dramatic irony creates tension and lets Lee show the ugliest things obliquely. The adult voice then adds the judgement a child could not make, sometimes in a single sentence, which keeps the novel's moral argument sharp without turning it into a sermon.",
    },
    {
      heading: 'Two plots that meet',
      body: "The novel runs two stories side by side: the children's fascination with Boo Radley and Atticus's defence of Tom Robinson. For most of the book they seem separate, one a Gothic mystery on the children's own street, the other a courtroom drama in town. In Chapter 28 they collide, when Bob Ewell, humiliated by the trial, attacks the children and Boo saves them. The structure invites a reading: that the private fear of an outsider and the public persecution of one are the same prejudice, and that the two men Maycomb misjudged are linked by the mockingbird.",
    },
    {
      heading: 'Time slows for the trial',
      body: "Part One moves through about two years in eleven chapters. The trial fills Chapters 16 to 21, six chapters for a single case, and the evidence is given almost in full, witness by witness: Heck Tate, Bob Ewell, Mayella, Tom, and then Atticus's closing speech. Slowing the pace this much makes the reader sit through the evidence as the jury does, so that when the verdict comes the reader knows exactly how much has been ignored. It is a courtroom drama placed inside a childhood memoir.",
    },
    {
      heading: 'Scenes that mirror each other',
      body: "Lee builds meaning by pairing scenes. In Chapter 10 Atticus stands alone in the street to face a mad dog; in Chapter 15 he sits alone outside the jail to face a mob, and in Chapter 21 Scout says that watching the jury return was like watching him walk into the street, raise a rifle and pull the trigger, knowing all the time that the gun was empty. Scout greets a feared man by name twice: Mr Cunningham at the jail, and Boo in Chapter 29, when she recognises him with a simple hello. The gifts left in the knot-hole in Part One are listed again in Chapter 31. These echoes let a reader track how the children's understanding grows, and they reward an essay that moves across the whole novel.",
    },
    {
      heading: 'Chapter endings as hinges',
      body: 'Lee often closes a chapter on a quiet line that turns the story. Chapter 21 ends with Reverend Sykes telling Scout to stand for her father. Chapter 23 ends with Jem suspecting that Boo stays inside because he wants to. Chapter 27 ends with the line “Thus began our longest journey together.”, which reads at first like a joke about a short walk to a school pageant and becomes ominous in hindsight, because Chapter 28 is the attack. Noticing these endings is a good way to write about structure in a closed-book exam, because each one is short enough to remember.',
    },
    {
      heading: 'Genre: a novel in several forms at once',
      body: "The book is a Bildungsroman, following Scout's moral growth from fear and prejudice towards understanding. It is a courtroom drama, with a trial at its centre. It draws on the Southern Gothic, with its shut-up house, its rumoured monster, a fire, a rabid dog and an attack in the dark. And it is a regional comedy of small-town manners. The mixture is part of its argument: the cosy world of the comedy and the violent world of the Gothic turn out to be the same town.",
    },
  ],

  vocabulary: [
    {
      term: 'entailment',
      definition:
        'A legal restriction on how land may be inherited or sold. At the jail in Chapter 15 Scout asks Mr Cunningham about his, a subject she first heard discussed when he came to see Atticus, as she recalls in Chapter 2.',
    },
    {
      term: 'chiffarobe',
      definition:
        'A piece of furniture combining a wardrobe and a chest of drawers. Tom testifies in Chapter 19 that Mayella asked him inside the fence to “bust up a chiffarobe” for her.',
    },
    {
      term: 'Jim Crow laws',
      definition:
        'State and local laws in the American South, from the late nineteenth century to the mid-twentieth, that enforced racial segregation. Most were overturned by the Civil Rights Act of 1964 and the Voting Rights Act of 1965. They explain the segregated courtroom and church in the novel.',
    },
    {
      term: 'lynch mob',
      definition:
        'A crowd that sets out to kill someone, usually by hanging, without a trial. The men who come to the jail in Chapter 15 are one, although Scout does not realise it.',
    },
    {
      term: 'cross-examination',
      definition:
        'The questioning of a witness by the lawyer for the other side. Atticus cross-examines Heck Tate, Bob Ewell and Mayella; the prosecutor, Mr Gilmer, cross-examines Tom in Chapter 19, and his contempt for Tom makes Dill cry.',
    },
    {
      term: 'polling the jury',
      definition:
        'Asking each juror in turn to confirm the verdict aloud. In Chapter 21 Judge Taylor does this, so the word guilty is heard again and again.',
    },
    {
      term: 'cotton gin',
      definition:
        "A machine that separates cotton fibres from the seeds. Tom Robinson's left arm was damaged in one when he was a boy, which is central to Atticus's defence.",
    },
    {
      term: 'First Purchase',
      definition:
        "Calpurnia's church, First Purchase African M.E. Church, which the children visit in Chapter 12. It was paid for with the first earnings of freed slaves. The collection taken there for Tom's wife, Helen, shows a community supporting its own.",
    },
    {
      term: 'relief',
      definition:
        'In 1930s America, public assistance paid to the poor. Bob Ewell spends his relief money on whiskey while his children go hungry, and hunts out of season to feed them.',
    },
    {
      term: 'WPA',
      definition:
        'The Works Progress Administration, a government programme set up by President Roosevelt in 1935 to give jobs to the unemployed during the Depression. Bob Ewell gets a WPA job after the trial and loses it (Chapter 27).',
    },
    {
      term: 'missionary circle',
      definition:
        "A group of church women who raise money for missions abroad. At Aunt Alexandra's meeting in Chapter 24 they pity the Mrunas, a people in Africa, while speaking with contempt of the Black people who work in their own kitchens.",
    },
    {
      term: 'the Radley Place',
      definition:
        "The shuttered house on the Finches' street where Boo Radley lives unseen. In Chapter 1 the children believe that inside it lived “a malevolent phantom”.",
    },
    {
      term: 'Bildungsroman',
      definition:
        "A novel that follows a young person's growth from childhood towards maturity. Scout's moral education, from fearing Boo to seeing the street from his porch, makes this one.",
    },
    {
      term: 'Southern Gothic',
      definition:
        "A style of American fiction set in the South that uses dark, strange or grotesque elements to expose a community's hidden cruelties. The Radley house, the mad dog and the attack in the dark are Gothic touches.",
    },
    {
      term: 'retrospective narration',
      definition:
        "Telling a story from a later point in time, looking back. The adult Jean Louise narrates her childhood, so the novel holds both a child's view and an adult's understanding.",
    },
    {
      term: 'dramatic irony',
      definition:
        'When the reader understands more than a character does. At the jail in Chapter 15 Scout thinks she is being sociable; the reader knows the men have come to kill Tom.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Re-read Chapter 15, from the cars arriving at the jail to the men driving away. How does Lee make this such a tense and dramatic moment in the novel?',
        skill: 'Passage-based question (Cambridge style): close reading of language and structure',
        guidance: [
          'Open with the situation in a sentence: a group of men has come for Tom, and Atticus is alone between them and the jail door.',
          'Show how the tension rises through what Scout does not understand. She treats the scene as a social occasion; the reader sees a lynch mob. Name this dramatic irony and explain its effect.',
          "Analyse the stand-off between father and son: the repeated “Son, I said go home.” and the adult narrator's comment “Mutual defiance made them alike.”",
          "Analyse the turning point: Scout's “How's your entailment gettin' along?” and the silence after it. Explain how Lee slows time as Scout grows uncomfortable.",
          'Analyse the release: Mr Cunningham crouching to speak to her, and the men leaving. What has changed? He has been made to see himself as an individual.',
          "End with a brief link beyond the passage, such as Atticus's comment the next morning, in Chapter 16, that “A mob's always made up of people, no matter what”, and say what you think Lee is showing about crowds and conscience.",
        ],
      },
      {
        question:
          'Re-read Chapter 21, from the jury returning to Reverend Sykes telling Scout to stand. How does Lee make this moment in the novel so moving?',
        skill:
          'Passage-based question (Cambridge style): language, structure and personal response',
        guidance: [
          'Explain where the reader stands: after the evidence of Chapters 17 to 20, the reader knows Tom is innocent, so the question is how Lee makes an expected verdict still painful.',
          "Analyse Scout's narration of the jury: “something only a lawyer's child could be expected to see” and the empty-gun comparison, linking it to the mad dog in Chapter 10.",
          'Show how the verdict is delivered: Scout shuts her eyes, and the polling of the jury is heard rather than seen.',
          "Analyse the ending: the balcony rising to its feet and Reverend Sykes's words to Scout. Why does Lee end the chapter on respect rather than anger?",
          'Give your own response: is this a moment of defeat, or of a different kind of victory? Support it from the passage.',
        ],
      },
      {
        question:
          'To what extent does Lee present Maycomb as a community that is capable of change?',
        skill: 'Essay question (Cambridge style): whole-text argument',
        guidance: [
          'Set out your answer in the first paragraph: a clear view, for example that Lee shows change as possible but tiny and slow.',
          "Evidence of change: Miss Maudie's point that the jury stayed out for hours, “it's just a baby-step” (Chapter 22); Atticus's news in Chapter 23 that one juror, a connection of the Cunninghams, at first wanted to acquit; Mr Underwood's editorial on Tom's death; Link Deas speaking up for Tom in court; Mr Cunningham leading the mob away from the jail.",
          "Evidence against: the verdict itself; Tom's death; the missionary circle's hypocrisy in Chapter 24; Miss Gates condemning Hitler's persecution of the Jews in Chapter 26, when Scout has heard her outside the courthouse saying Maycomb's Black people needed to be taught a lesson; Scout's bleak reflection in Chapter 25 that Tom was condemned from the moment Mayella screamed.",
          "Consider the children as the change: Jem's “It ain't right, Atticus” and Scout's “I think there's just one kind of folks. Folks.” (Chapter 23). The future may lie with them.",
          'Use context: the novel was published in 1960, in the years of the civil rights movement, so a reader then would read the baby-step against real change beginning in the South.',
          'Conclude with a judgement that answers “to what extent”, not a summary.',
        ],
      },
      {
        question: 'How far does Lee encourage you to feel sympathy for Mayella Ewell?',
        skill: 'Essay question (Cambridge style): character and personal response',
        guidance: [
          'Give your view at once: most strong answers argue for a divided response, sympathy for her situation and condemnation of what she does.',
          "Reasons for sympathy: her poverty, the evidence that her left-handed father beat her, her isolation, and Scout's realisation in Chapter 19 that she must be the loneliest person in the world.",
          "Reasons against: her false accusation, repeated under oath, which costs Tom his life, and her outburst at the end of Atticus's questioning in Chapter 18, after which she answers no more questions from anyone.",
          "Consider Atticus's closing speech in Chapter 20, which pities her and blames her in the same argument, and whether Lee shares his view.",
          "Use context: explain how a white woman's word against a Black man's decided a trial in 1930s Alabama, and how Mayella is both a victim and a user of that system.",
        ],
      },
      {
        question:
          'Explore how Lee presents justice and the law in To Kill a Mockingbird. You must consider the context of the novel in your answer.',
        skill: 'Essay question (Pearson Edexcel 4ET1 style): whole-text argument with context',
        guidance: [
          'Introduce the tension your essay will explore: the difference between the law as an ideal and the law as Maycomb practises it.',
          "The ideal: Atticus's closing speech in Chapter 20, “in our courts all men are created equal” and his plea “In the name of God, do your duty.”",
          "The practice: the verdict, Tom's death with seventeen bullet holes, and Scout's judgement in Chapter 25 that “in the secret courts of men's hearts” Atticus had no case.",
          "Justice outside the law: the jail in Chapter 15, where a child stops a mob, and Heck Tate's decision in Chapter 30 to report that Bob Ewell fell on his knife.",
          'Weave in context rather than bolting it on: Jim Crow segregation, all-white juries, the Scottsboro trials of the 1930s, and the 1960 publication during the civil rights movement.',
          "Conclude by weighing the ending: is Tate's lie justice, or proof that justice in Maycomb has to be done outside the law?",
        ],
      },
      {
        question:
          'How is Boo Radley important in To Kill a Mockingbird? You must consider the context of the novel in your answer.',
        skill: 'Essay question (Pearson Edexcel 4ET1 style): character, structure and context',
        guidance: [
          'Argue first that Boo matters more than his few pages suggest: he frames the novel, opening and closing it.',
          "The legend: Jem's Gothic description of Boo in Chapter 1, in which he “dined on raw squirrels and any cats he could catch”, shows prejudice born of rumour and fear.",
          'The reality: the gifts in the tree, the mended trousers, the blanket during the fire in Chapter 8, and the rescue in Chapter 28.',
          "The meaning: Boo as a second mockingbird, protected in Chapter 30 as Tom was not, and the Radley porch in Chapter 31 as the completion of Scout's education.",
          "Context: small-town Southern society and its enforcement of respectability, which helps explain the Radleys' isolation, and the way gossip works in a closed community.",
          "Conclude on what Boo shows about the whole novel's view of prejudice.",
        ],
      },
    ],
    tips: [
      'Both exams are closed book, so learn short quotations of three to eight words, each with its speaker and chapter. A phrase you can quote exactly is worth more than a long line you half remember.',
      "Check your attributions, because several famous lines are often credited to the wrong person. Atticus states the mockingbird rule in Chapter 10 and Miss Maudie explains it. “People generally see what they look for” is Judge Taylor in Chapter 17. Atticus's Chapter 9 line ends “no reason for us not to try to win”.",
      'Keep the setting and the publication date apart. The story is set in the Depression, in the mid-1930s; the novel was published in 1960. Strong answers use both: what the events show about the 1930s, and why a 1960 reader would feel their force.',
      "Write about the narrator. Examiners reward answers that notice the adult Jean Louise telling the child Scout's story, and explain what the double view lets Lee do.",
      'In a Cambridge passage question, stay mostly inside the printed passage and analyse its words closely. Move beyond it only briefly, to show where the moment fits. Cambridge asks for an informed personal response, so say what you think and why.',
      "Know what each board is asking for. Pearson's prose question is an essay with no printed passage, and it ends “You must consider the context of the novel in your answer.” Its specification says this section assesses close knowledge of the novel, a critical style, informed personal engagement and context. Cambridge prints the relevant passages on the question paper, and its syllabus asks for a response to the writer's use of language as well as knowledge and personal response. So for Pearson, range across the whole novel and weave in context; for a Cambridge passage question, stay close to the words on the page.",
      "In a 4ET1 essay, context is part of the task, not an extra paragraph. Tie each piece of context to a moment: Jim Crow to the segregated balcony, the Depression to the Cunninghams paying Atticus in produce, the civil rights movement to the ending's cautious hope.",
      'Do not write as if Atticus were flawless. He is heroic, but he also underestimates Bob Ewell and cannot save Tom. An answer that weighs his limits against his courage is more convincing than one that only praises him.',
      "The novel's characters use the racist language of the 1930s. In your essay, describe it as racist language and analyse its effect; there is no need to repeat the words themselves.",
    ],
  },

  modelAnswer: {
    question:
      'Re-read Chapter 21, from the jury returning to Reverend Sykes telling Scout to stand. How does Lee make this moment in the novel so moving?',
    paragraph:
      "Lee makes the verdict moving by letting Scout see it coming before she hears it. As the jury returns she notices “something only a lawyer's child could be expected to see”, and says it was like watching Atticus raise a rifle and fire it, “knowing that the gun was empty”. The simile recalls Chapter 10, when Atticus killed the mad dog with a single shot; here his aim is just as true, since the evidence has proved Tom innocent, but the law has left him nothing to fire. The detail that “not one of them looked at Tom Robinson” turns the jurors' guilt into a gesture, and Scout's shut eyes mean the polling of the jury reaches us as sound alone, each guilty falling like a blow. Most movingly, Lee ends not on the verdict but on the balcony rising to its feet and Reverend Sykes's “Miss Jean Louise, stand up. Your father's passin'.” The people with least power in the courtroom honour the man who lost, which suggests that Lee measures victory by conscience rather than by verdicts. For a reader in 1960, when the civil rights movement was challenging exactly this kind of courtroom, that quiet respect would have felt like a judgement on the whole town.",
    commentary: [
      'It answers the question in its first sentence and keeps the focus on how Lee creates the effect, not on retelling what happens.',
      "Every quotation is short and embedded in the student's own sentence, which is what a closed-book exam needs.",
      'It links the passage to an earlier chapter, the mad dog in Chapter 10, to show structural awareness without leaving the passage for long.',
      "It analyses method precisely: the simile, the gesture of the jurors, the sound of the polling and the placing of the chapter's final line.",
      'It offers a personal interpretation, that Lee measures victory by conscience, and supports it rather than asserting it.',
      'It ends with a sentence of context tied directly to the moment, rather than a detached paragraph of history.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'Dill arrives and the Radley legend',
      summary:
        'Scout, almost six, and her brother Jem meet Dill, who is spending the summer with his aunt, Miss Rachel Haverford, next door. Dill becomes fascinated by the shut-up Radley Place and its unseen occupant, Boo, and the summer ends with Jem touching the Radley house on a dare.',
      setting: "The Finches' street in Maycomb, Alabama, in summer",
      who: ['Scout Finch', 'Jem Finch', 'Dill', 'Boo Radley'],
      quote: "I'm little but I'm old",
      themes: ['Childhood innocence and its loss', 'Class and social hierarchy'],
      tension: 1,
      significance:
        'The Boo Radley plot begins here, and it is this plot, not the trial, that closes the novel.',
    },
    {
      where: 'Chapters 2-3',
      title: "Scout's first day at school",
      summary:
        "Scout offends her new teacher, Miss Caroline, by already being able to read, and tries to explain why Walter Cunningham will not accept a loan of lunch money. At lunch with the Finches, Walter pours syrup over his food and Calpurnia scolds Scout for mocking her guest. That evening Atticus teaches her to see things from another person's point of view.",
      setting: "Maycomb's school and the Finches' kitchen",
      who: ['Scout Finch', 'Atticus Finch', 'Calpurnia', 'Walter Cunningham'],
      quote: 'climb into his skin and walk around in it',
      themes: ['Childhood innocence and its loss', 'Class and social hierarchy'],
      tension: 2,
      significance:
        "The novel's central lesson is given early, and the rest of the book tests whether Scout can live it.",
    },
    {
      where: 'Chapters 4-7',
      title: 'Gifts in the knot-hole',
      summary:
        'Scout and Jem find gifts in a knot-hole of an oak on the edge of the Radley land: chewing gum, polished pennies, then soap figures of a boy and a girl and a broken watch. After Jem loses his trousers escaping from the Radley yard, he finds them mended and folded. Then Nathan Radley fills the knot-hole with cement.',
      setting: 'The Radley oak and the Radley yard',
      who: ['Scout Finch', 'Jem Finch', 'Dill', 'Boo Radley', 'Nathan Radley'],
      themes: ['Childhood innocence and its loss'],
      tension: 2,
      significance:
        'Someone in the Radley house is reaching out to the children, and a family decision cuts him off.',
    },
    {
      where: 'Chapter 8',
      title: 'Snow, fire and a blanket',
      summary:
        "Maycomb has a rare snowfall, and that night Miss Maudie's house burns down. As Scout stands watching in the cold, someone puts a blanket around her shoulders without her noticing, and Atticus works out that it was Boo.",
      setting: "The street outside Miss Maudie's burning house, at night in winter",
      who: ['Scout Finch', 'Jem Finch', 'Atticus Finch', 'Miss Maudie', 'Boo Radley'],
      themes: ['Childhood innocence and its loss'],
      tension: 3,
      significance:
        'Boo moves from legend to protector, a quiet rehearsal for the night he saves the children.',
    },
    {
      where: 'Chapter 9',
      title: 'Atticus takes the case',
      summary:
        "Atticus explains to Scout that he must defend Tom Robinson, and admits that he does not expect to win. When Cecil Jacobs taunts her at school, she remembers what Atticus asked of her and walks away. At Christmas at Finch's Landing her cousin Francis insults Atticus, and this time she hits him.",
      setting: "Maycomb, and Finch's Landing at Christmas",
      who: ['Scout Finch', 'Atticus Finch', 'Jem Finch'],
      quote: "couldn't hold up my head in town",
      themes: ['Racial injustice', 'Moral courage'],
      tension: 2,
      significance:
        "The trial enters the children's lives as fighting words before they understand it as a case.",
    },
    {
      where: 'Chapter 10',
      title: 'The mockingbird rule and the mad dog',
      summary:
        "Atticus gives the children air rifles and forbids them to shoot mockingbirds, and Miss Maudie explains why. Then, one day in February, a rabid dog, Tim Johnson, comes down the street. The sheriff, Heck Tate, hands Atticus the rifle, and he kills it with one shot, to the children's amazement.",
      setting: "The Finches' street, deserted, on a day in February",
      who: ['Atticus Finch', 'Jem Finch', 'Scout Finch', 'Miss Maudie', 'Heck Tate'],
      quote: "remember it's a sin to kill a mockingbird",
      themes: ['The mockingbird symbol', 'Moral courage'],
      tension: 3,
      significance:
        'The title symbol is planted, and the children learn that their father hides a skill he could boast of.',
    },
    {
      where: 'Chapter 11',
      title: 'Mrs Dubose',
      summary:
        'After Mrs Dubose insults Atticus, Jem destroys her camellias, and his punishment is to read to her every afternoon for a month. When she dies, Atticus reveals that she was breaking her addiction to morphine and calls her the bravest person he ever knew.',
      setting: "Mrs Dubose's house, down the street",
      who: ['Jem Finch', 'Scout Finch', 'Atticus Finch', 'Mrs Dubose'],
      quote: 'licked before you begin',
      themes: ['Moral courage'],
      tension: 2,
      significance:
        'Part One ends with a definition of courage that the trial will put to the test.',
    },
    {
      where: 'Chapter 12',
      title: 'First Purchase church',
      summary:
        "Part Two opens. With Atticus away, Calpurnia takes Scout and Jem to her church, First Purchase, where most of the congregation welcome them and a collection is taken for Tom Robinson's wife, Helen. The children discover that Calpurnia speaks differently among her own people.",
      setting: 'First Purchase African M.E. Church, in the Quarters outside town',
      who: ['Calpurnia', 'Scout Finch', 'Jem Finch'],
      themes: ['Racial injustice', 'Class and social hierarchy'],
      tension: 2,
      significance:
        "The children see Maycomb's Black community from inside for the first time, and Calpurnia as a person with a life of her own.",
    },
    {
      where: 'Chapter 15',
      title: 'The mob at the jail',
      summary:
        'Atticus sits outside the jail at night to guard Tom. A group of men arrives to take him, and the children push into the circle. Scout, not understanding the danger, chats to Mr Cunningham about his son and his legal troubles, until he tells the men to leave.',
      setting: 'Outside the Maycomb jail, at night',
      who: ['Atticus Finch', 'Scout Finch', 'Jem Finch', 'Dill', 'Mr Cunningham', 'Tom Robinson'],
      quote: "How's your entailment gettin' along?",
      themes: ['Racial injustice', 'Moral courage', 'Childhood innocence and its loss'],
      tension: 4,
      significance:
        'A child succeeds where argument would fail, by making one man in a mob see himself as an individual.',
    },
    {
      where: 'Chapters 17-19',
      title: 'The evidence',
      summary:
        "Heck Tate testifies that Mayella's injuries were on the right side of her face, and Bob Ewell is shown to be left-handed. Tom, whose left arm was crippled in a cotton gin, explains that he often helped Mayella with chores and that she kissed him before her father saw. Mr Gilmer's scornful cross-examination makes Dill cry.",
      setting: 'The Maycomb County courthouse, watched from the balcony',
      who: ['Atticus Finch', 'Bob Ewell', 'Mayella Ewell', 'Tom Robinson', 'Heck Tate', 'Dill'],
      quote: 'I felt right sorry for her',
      themes: ['Racial injustice', 'Class and social hierarchy'],
      tension: 4,
      significance:
        "Mr Gilmer seizes on Tom's pity for a white woman, and the reader sees that Tom is on trial for crossing a racial line as much as for any crime.",
    },
    {
      where: 'Chapter 20',
      title: "Atticus's closing speech",
      summary:
        'Outside, Dolphus Raymond shows Dill and Scout that his paper bag holds only Coca-Cola, and explains why he lets the town think he drinks. Inside, Atticus points out that no medical evidence was offered and asks the jury to believe Tom.',
      setting: 'The courthouse and the square outside',
      who: ['Atticus Finch', 'Dill', 'Scout Finch', 'Dolphus Raymond'],
      quote: 'in our courts all men are created equal',
      themes: ['Racial injustice', 'Moral courage'],
      tension: 4,
      significance:
        "The novel's ideal of the law is stated at full strength just before it is betrayed.",
    },
    {
      where: 'Chapter 21',
      title: 'The verdict',
      summary:
        'After hours of waiting the jury returns and convicts Tom. As Atticus leaves the courtroom, the Black spectators in the balcony rise to their feet, and Reverend Sykes tells Scout to stand.',
      setting: 'The courthouse balcony, late at night, after the clock has struck eleven',
      who: [
        'Atticus Finch',
        'Tom Robinson',
        'Scout Finch',
        'Jem Finch',
        'Reverend Sykes',
        'Judge Taylor',
      ],
      quote: "Miss Jean Louise, stand up. Your father's passin'.",
      themes: ['Racial injustice', 'Moral courage'],
      tension: 5,
      significance:
        'The expected injustice happens, and the novel answers it with an act of respect.',
    },
    {
      where: 'Chapters 22-23',
      title: 'After the verdict',
      summary:
        "Jem weeps with anger, and Maycomb's Black community leaves food for Atticus. Bob Ewell spits in Atticus's face and threatens him. Jem tries to sort Maycomb into kinds of people, and Scout replies that there is only one kind.",
      setting: 'The Finch house and the street',
      who: ['Jem Finch', 'Atticus Finch', 'Scout Finch', 'Miss Maudie', 'Bob Ewell'],
      quote: "I think there's just one kind of folks. Folks.",
      themes: ['Childhood innocence and its loss', 'Class and social hierarchy'],
      tension: 3,
      significance:
        "The children begin to understand their town, and Bob Ewell's threat is set up for later.",
    },
    {
      where: 'Chapter 24',
      title: "The missionary tea and Tom's death",
      summary:
        "At Aunt Alexandra's missionary circle, the ladies pity the Mrunas in Africa and complain about their own servants. Atticus arrives to say that Tom has been shot dead trying to escape from the prison farm. Alexandra and Miss Maudie compose themselves and go back to serving tea.",
      setting: "The Finches' living room, during a church ladies' meeting",
      who: ['Scout Finch', 'Aunt Alexandra', 'Miss Maudie', 'Atticus Finch', 'Calpurnia'],
      quote: 'if Aunty could be a lady at a time like this, so could I',
      themes: ['Racial injustice', 'Class and social hierarchy'],
      tension: 4,
      significance:
        'Scout finds a new kind of courage in the women she thought were only about manners.',
    },
    {
      where: 'Chapter 25',
      title: "Mr Underwood's editorial",
      summary:
        "Maycomb talks about Tom's death for two days. Mr Underwood writes an editorial condemning it, and Scout, looking back, understands that Tom was doomed from the start.",
      setting: 'Maycomb, in late summer',
      who: ['Scout Finch', 'Jem Finch', 'Mr Underwood', 'Tom Robinson'],
      quote: 'the senseless slaughter of songbirds by hunters and children',
      themes: ['The mockingbird symbol', 'Racial injustice'],
      tension: 3,
      significance:
        'The mockingbird symbol is attached to Tom by Mr Underwood, a man Atticus says despises Black people, which makes his outrage count for more.',
    },
    {
      where: 'Chapters 27-28',
      title: 'The walk home from the pageant',
      summary:
        "Bob Ewell loses his WPA job, a prowler is glimpsed only as a shadow at Judge Taylor's house, and Ewell frightens Helen Robinson until Link Deas warns him off. On Halloween, Jem walks Scout, dressed as a ham, to and from the school pageant. In the dark on the way home they are attacked; Jem's arm is broken, and a man carries him home.",
      setting: 'The dark road home past the Radley Place, on Halloween night',
      who: ['Scout Finch', 'Jem Finch', 'Bob Ewell', 'Boo Radley'],
      quote: 'Thus began our longest journey together.',
      themes: ['Childhood innocence and its loss'],
      tension: 5,
      significance:
        "The novel's two plots collide, and the injury promised in the first sentence arrives.",
    },
    {
      where: 'Chapters 29-30',
      title: "Heck Tate's decision",
      summary:
        "Heck Tate has found Bob Ewell dead under the tree with a kitchen knife under his ribs. Scout recognises the pale man in the corner of Jem's room as Boo and greets him. On the porch Atticus first believes Jem killed Ewell, but Heck Tate insists that Ewell fell on his knife, and Scout sees why.",
      setting: "Jem's bedroom and the Finches' porch, that night",
      who: ['Scout Finch', 'Atticus Finch', 'Heck Tate', 'Boo Radley', 'Jem Finch'],
      quote: "Well, it'd be sort of like shootin' a mockingbird, wouldn't it?",
      themes: ['The mockingbird symbol', 'Moral courage'],
      tension: 4,
      significance:
        'The mockingbird rule is kept for Boo as it was not kept for Tom, and the law bends to do it.',
    },
    {
      where: 'Chapter 31',
      title: 'The Radley porch',
      summary:
        'Scout walks Boo home and never sees him again. From his porch she sees the street as he saw it through the years, and understands at last what Atticus taught her. At home, Atticus reads to her until she falls asleep.',
      setting: 'The Radley porch and the Finch house, late at night',
      who: ['Scout Finch', 'Boo Radley', 'Atticus Finch'],
      quote: 'Just standing on the Radley porch was enough.',
      themes: ['Childhood innocence and its loss', 'The mockingbird symbol'],
      tension: 2,
      significance:
        "Scout's moral education is complete: she sees a feared outsider from his own point of view.",
    },
  ],

  relationships: [
    {
      from: 'Atticus Finch',
      to: 'Scout Finch',
      kind: 'father and daughter',
      note: 'He teaches through conversation rather than punishment, and the novel is largely a record of his lessons. The ending shows she has learned the hardest one.',
    },
    {
      from: 'Atticus Finch',
      to: 'Jem Finch',
      kind: 'father and son',
      note: 'Like Scout, Jem thinks his father too old to admire until the mad dog. He defies him at the jail and is broken by the verdict, which shakes his faith in Maycomb rather than in Atticus.',
    },
    {
      from: 'Jem Finch',
      to: 'Scout Finch',
      kind: 'brother and sister',
      note: 'Jem leads their games and protects her, but as he grows up he pulls away and she feels shut out. On Halloween he walks her home and is injured protecting her.',
    },
    {
      from: 'Dill',
      to: 'Jem Finch',
      kind: 'summer friends',
      note: "Dill starts the Boo Radley games and runs away to the Finches in Chapter 14. His tears at the trial show a child's clear sense of cruelty that the adults have trained out of themselves.",
    },
    {
      from: 'Boo Radley',
      to: 'Scout Finch',
      kind: 'unseen neighbour and protector',
      note: 'He watches, leaves gifts, drapes a blanket round her at the fire and saves her life. The story ends when she leads him home and sees the street from his porch.',
    },
    {
      from: 'Boo Radley',
      to: 'Jem Finch',
      kind: 'secret friend',
      note: 'He mends the trousers Jem left behind, and after the attack carries Jem home. Jem is the first to guess why Boo stays inside.',
    },
    {
      from: 'Atticus Finch',
      to: 'Tom Robinson',
      kind: 'defence lawyer and client',
      note: 'Appointed to defend Tom, Atticus defends him properly, which Maycomb does not forgive. He proves as much as the law allows and still cannot save him.',
    },
    {
      from: 'Bob Ewell',
      to: 'Atticus Finch',
      kind: 'enemies',
      note: "Exposed in court, Ewell spits in Atticus's face and takes his revenge on the children. Atticus underestimates him, one of his few serious mistakes.",
    },
    {
      from: 'Bob Ewell',
      to: 'Mayella Ewell',
      kind: 'father and daughter',
      note: "The evidence at the trial points to Ewell, who is left-handed, as the one who beat her. She is trapped between his violence and the town's contempt.",
    },
    {
      from: 'Mayella Ewell',
      to: 'Tom Robinson',
      kind: 'accuser and accused',
      note: 'Tom helped her with chores out of pity. By his account she kissed him, and after her father saw she accused Tom, and her word was believed over his.',
    },
    {
      from: 'Calpurnia',
      to: 'Scout Finch',
      kind: 'cook and second mother',
      note: "Strict and loving, she corrects Scout's manners and in Chapter 12 shows her another world. Scout slowly learns to see her as a person, not only as the household's help.",
    },
    {
      from: 'Miss Maudie',
      to: 'Scout Finch',
      kind: 'neighbour and confidante',
      note: "She explains the mockingbird rule and Atticus's hidden skill, and after the verdict offers the hope of a baby-step. She is the adult who treats Scout most as an equal.",
    },
    {
      from: 'Heck Tate',
      to: 'Atticus Finch',
      kind: 'sheriff and lawyer',
      note: "He hands Atticus the rifle in Chapter 10, testifies at the trial, and in Chapter 30 overrules him to protect Boo. Their disagreement stages the novel's last argument about law and justice.",
    },
    {
      from: 'Aunt Alexandra',
      to: 'Scout Finch',
      kind: 'aunt and niece',
      note: "She arrives in Chapter 13 to make Scout a lady and clashes with her. In Chapter 24 Scout sees her compose herself after the news of Tom's death and learns that being a lady can take courage.",
    },
    {
      from: 'Mr Cunningham',
      to: 'Scout Finch',
      kind: "client's family and schoolfellow's father",
      note: 'He pays Atticus in produce because he cannot pay in money. At the jail her greeting reminds him who he is, and he leads the mob away.',
    },
  ],

  compareWith: [
    {
      title: 'Of Mice and Men',
      href: '/revision/texts/of-mice-and-men',
      reason:
        'Also on the 4ET1 modern prose list and set in 1930s America: both novels show how poverty and prejudice fall hardest on those least able to defend themselves, including a Black man isolated by racism.',
    },
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        "On both the 4ET1 and the Cambridge 0475 prose lists: like Lee, Achebe shows a whole community's values from inside, and asks what it does to those it judges as outsiders.",
    },
    {
      title: 'Klara and the Sun',
      href: '/revision/texts/klara-and-the-sun',
      reason:
        'Also on the 4ET1 modern prose list: a narrator who sees more than she understands, in a society divided by prejudice that she only gradually grasps.',
    },
  ],

  contentGuidance: [
    'discrimination',
    'crime_injustice',
    'violence',
    'mortality',
    'addiction',
    'intimate_relationships',
  ],

  quotesFromElsewhere: [
    'let the dead bury their dead',
    'You must consider the context of the novel in your answer.',
    'to what extent',
  ],

  sources: [
    {
      label:
        "Internet Archive / Open Library full-text search inside scanned editions of the novel, queried by exact phrase through its JSON endpoint on 26 September 2026: Lippincott (Philadelphia, 1960), Heinemann (London, 1960), International Collectors Library (1960), Popular Library (1962), Penguin (Harmondsworth, 1963), Grand Central and Warner (1982), Mandarin (London, 1990), HarperLuxe, Folio Society (London, 1996), HarperLargePrint Classics (1999), Harper (2010), Harper Perennial Modern Classics and Arrow Books (London, 2015). Every quotation on this page was matched in at least three editions, and the words around each hit were read to confirm speaker and chapter. Plot facts checked the same way: Scout walking away from Cecil Jacobs and hitting Francis (Chapter 9), the February date of the mad dog (Chapter 10), Mr Underwood at the window with a shotgun (Chapter 15), the juror whom Atticus calls one of the Cunninghams' connections (Chapter 23), the verdict coming after the clock strikes eleven (Chapter 21), the Enfield Prison Farm (Chapter 24), Bob Ewell and the WPA (Chapter 27), and Ewell found under the tree at the end of Chapter 28.",
      url: 'https://openlibrary.org/search/inside.json?q=%22Just%20standing%20on%20the%20Radley%20porch%20was%20enough%22',
    },
    {
      label:
        'Published critical guides returned by the same search, used only as secondary corroboration and never as the source of a quotation: Penguin Passnotes (Graham Handley, 1985), York Notes (Rosamund Metcalf, 1981), and the Holt, Rinehart and Winston study guide (Donna Reardon, 1989) on the right-side injuries',
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) Specification, Issue 3, August 2025: Component 1 Section C modern prose, one essay question from a choice of two, closed book, context assessed; Appendix 3 recommended edition Arrow 50th Anniversary Edition, June 2010, ISBN 9780099549482',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature 4ET1/01 question paper, November 2023: the wording of the To Kill a Mockingbird questions, each ending "You must consider the context of the novel in your answer."',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20231107.pdf',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2026 (Version 2): Paper 1 Section B prose list, choice of two questions on each text, relevant passages printed, set texts may not be taken into the exam room',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027: the same Paper 1 rules and the novel on the prose list',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        'Wikipedia, To Kill a Mockingbird: first publication by J. B. Lippincott on 11 July 1960, Pulitzer Prize 1961, setting 1933 to 1935',
      url: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird',
    },
    {
      label:
        'Wikipedia, First inauguration of Franklin D. Roosevelt: 4 March 1933, the line about fear',
      url: 'https://en.wikipedia.org/wiki/First_inauguration_of_Franklin_D._Roosevelt',
    },
    {
      label: 'Wikipedia, Jim Crow laws: definition and period',
      url: 'https://en.wikipedia.org/wiki/Jim_Crow_laws',
    },
    {
      label: 'Wikipedia, Works Progress Administration: established 6 May 1935',
      url: 'https://en.wikipedia.org/wiki/Works_Progress_Administration',
    },
    {
      label: 'Bible Gateway, Matthew 8:22 (King James Version), for the saying Heck Tate echoes',
      url: 'https://www.biblegateway.com/passage/?search=Matthew%208%3A21-22&version=KJV',
    },
  ],
}
