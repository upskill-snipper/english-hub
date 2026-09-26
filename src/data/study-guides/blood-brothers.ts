import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Blood Brothers, Willy Russell (the musical version, first performed at the
 * Liverpool Playhouse on 8 January 1983). A supplement: the page at
 * /revision/texts/blood-brothers keeps its overview (intro and four-paragraph
 * plot summary) and its character profiles, which live in full on
 * /revision/texts/blood-brothers/characters. This file adds context, themes,
 * key quotations, passages for close reading, language analysis, structure and
 * form, vocabulary, exam practice and a model paragraph, together with the
 * timeline and character map the visuals draw.
 *
 * THE SELF-AUDIT (26 September 2026), section by section, against the rubric.
 * - overview: SUBSTANTIVE. Intro plus a four-paragraph plot summary, checked
 *   against BBC Bitesize and the edition below and accurate in outline.
 * - characters: SUBSTANTIVE. Six profiles on the page and seven developed ones
 *   (overview, arc, exam tip) on the characters subpage. The subpage's
 *   quotations are another matter: see below.
 * - context: written here. Four paragraphs, but the central political claim,
 *   that Russell names Margaret Thatcher in the play, is false: "Thatcher" does
 *   not occur in any of the three editions searched.
 * - themes: written here. Five themes of 30 to 40 words, under the bar for a
 *   developed theme, and one ("Thatcher's Britain") rests on the false claim.
 * - keyQuotes: written here. Seven quotations, two of them placeholders for
 *   song lyrics, one a sung line presented as speech, one misplaced, each with
 *   a one-sentence analysis.
 * - extracts, languageAnalysis, structureForm, vocabulary, modelAnswer: absent.
 * - examPractice: five essay prompts with no guidance.
 *
 * EDITION. Quotations follow the Methuen Drama Student Edition (introduction
 * and teaching notes by Jim Mulligan, first published in this edition 1995,
 * reissued 2005 and 2009). They were checked with the Internet Archive
 * full-text search against that edition, the Methuen collection Educating
 * Rita, Stags and Hens and Blood Brothers (1986) and the Samuel French acting
 * edition (1985). Pearson's own question papers cite the Methuen Drama
 * edition. From the curse speech only "they shall both immediately die" is
 * quoted, the words all three printings share.
 *
 * SECOND CHECK (26 September 2026, an adversarial verifier). Every quotation
 * and every quoted phrase in the prose was searched again as an exact phrase:
 * each was found, words in order, in at least two of the three printings
 * (most in all three; the misses look like OCR). Speakers were confirmed by
 * walking back from each line to the nearest speaker name. Findings that
 * changed this file:
 * - Page numbers. The contents page (Act One, p. 3; Act Two, p. 46) was
 *   confirmed, and the teaching notes support the pact ending about p. 13,
 *   the locket about p. 40, the redundancy about p. 68 and the final scene
 *   about p. 82. The notes place Mr Lyons's merger, which is in the bogey man
 *   scene, on p. 35, not p. 27 as first written, so the p. 21 and p. 27
 *   references were removed. Pages that could not be corroborated now give
 *   the act and moment only, and the rest say "around".
 * - The prologue. In both Methuen printings the stage direction describing
 *   the re-enactment of the deaths comes after the Narrator's first spoken
 *   verse, not before it, and the Narrator's second verse (the "stone" line)
 *   follows it with no new direction, so it is still spoken. The guide no
 *   longer says which comes first, and no longer says the final speech
 *   returns to "the story of the Johnstone twins", which could not be found.
 * - Unconfirmed plot details were removed: Edward offering Mickey money at
 *   Christmas, Edward proposing to Linda (he tells her he loves her), Linda telephoning Edward, Mrs Johnstone arriving as Mickey takes the
 *   gun, Linda in the council chamber, the policeman docking pocket money, a
 *   "kitchen" knife, Mickey playing at shooting his mother, Mr Lyons as the
 *   giver of the toy gun, and Mrs Lyons's husband calling her fears depression.
 * - Songs: the Marilyn Monroe song returns twice (Marilyn Monroe 2 and 3), not
 *   three times, and Easy Terms is tied to the handover rather than to a
 *   repossession that could not be confirmed.
 * - Russell's return to education is given as "at about twenty" (Wikipedia),
 *   not 1969, which could not be confirmed.
 *
 * THIRD CHECK (26 September 2026, a second adversarial verifier, working
 * independently of the two passes above). Every quotation, timeline quote,
 * annotation phrase and curly-quoted phrase in the prose (130 in all) was
 * searched again as an exact phrase in the three printings, with negative
 * controls (a near-miss of a real line, and invented lines) returning no hits;
 * each was found as a contiguous run in at least two printings, and the
 * ellipses and dashes inside quotations were confirmed as printed, nothing
 * dropped between. Speakers were confirmed by walking back to the nearest
 * speaker label. Changes:
 * - 1969 IS confirmed: the Student Edition's chronology has him leaving school
 *   for hairdressing in 1962 and returning to education as a mature student in
 *   1969; Wikipedia has him deciding at twenty and training as a teacher at
 *   St Katharine's. The context now says "in 1969, in his early twenties" and
 *   "trained as a teacher" (not "qualified", which neither source states).
 * - The first-meeting line is printed with a leading apostrophe, so the
 *   language example now quotes it that way. The prologue's "stone" line is a
 *   question in all three printings, so the key quotation keeps its question
 *   mark.
 * - Settings that no source places were made neutral: the handover (the text
 *   does not say whose house), the Christmas scene (no street is named) and
 *   Mrs Lyons pointing out Linda and Edward to Mickey. The final scene is at
 *   the town hall with Edward addressing a meeting from a platform; the words
 *   "council chamber" are BBC Bitesize's, not the play's, and are kept only as
 *   a label for the place.
 * - The pact summary now says Mrs Lyons suggests giving a baby away would stop
 *   some of the children being taken into care, which is how her line is
 *   framed, rather than that care could not be avoided.
 * - The toy gun in the Lyons house was checked: the direction sits in the
 *   bogey man scene with Mr and Mrs Lyons and Edward on stage; who produces
 *   the gun was not settled, so no giver is named here. The bogey man
 *   scene order (Mr Lyons leaves for the merger, the superstition speech, then
 *   Mickey at the door) was confirmed against the BBC Bitesize extract.
 *
 * SONG LYRICS. Nothing sung is quoted. The edition marks sung passages
 * "(singing)" and the prologue "(speaking)"; every quotation here is spoken
 * dialogue, spoken verse or a stage direction. The line about the country at
 * the end of Act One is marked "(speaking)". The Narrator's closing lines
 * carry no singing direction in either Methuen printing.
 *
 * NOTES ON THE PAGES ABOVE THIS SUPPLEMENT, for whoever fixes them. The first
 * writer reported these; the second check corrected two of them:
 * - Thatcher is said to be named in the play (page context, theme five, quiz
 *   question bb-12, and the themes subpage). She is not: the name occurs in
 *   none of the printings searched.
 * - "Give one to me." and "Give one of them to me." BOTH occur, each spoken by
 *   Mrs Lyons, so the page's line is not wrong in itself; check that it is
 *   placed at the right moment. (The first writer said it was misquoted.)
 * - "never put new shoes on a table" and "you never put new shoes on the
 *   table" BOTH occur in the Methuen printings, so the extract walkthrough's
 *   wording is not wrong either. (The first writer said it was.)
 * - "I wanna kiss y'" is placed after prison, with Mickey "numbed by
 *   antidepressants". The first writer places it with the teenage Mickey,
 *   early in Act Two; not re-checked.
 * - "I wish I was our Sammy" is called a song. The first writer found it
 *   marked "(reciting)"; not re-checked.
 * - Several quotations on the page and subpages are sung lines from the songs
 *   Easy Terms and the Narrator's songs, presented as speech.
 * - The essay-plans subpage says Russell "studied Brecht"; no source for that
 *   was found, and it is not repeated here.
 * - "If you'd been born here..." and "I'll get y' after." were not found in
 *   any of the three editions. "I thought we always stuck together." WAS found,
 *   in all three (third check); its speaker was not checked here.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; longer passages
 * are pointed to by page and summarised.
 */
export const guide: StudyGuide = {
  slug: 'blood-brothers',
  title: 'Blood Brothers',
  author: 'Willy Russell (b. 1947)',
  form: 'play',
  scope:
    'The whole play: Willy Russell’s musical version of Blood Brothers, in two acts, with songs. For AQA GCSE English Literature (8702) it is a modern prose or drama text in Paper 2, Section A, where you answer one essay question on the whole play from a choice of two. For Pearson Edexcel GCSE English Literature (1ET0) it is a post-1914 British play in Paper 1, Section B: one essay from a choice of two, each opening with a short quotation from the play and each asking you to refer to the play’s context. For Eduqas GCSE English Literature it is a post-1914 drama text in Component 2, Section A, where you answer on a printed extract and on the play as a whole. The exams are closed book, so learn short quotations. The play has no numbered scenes, so this guide gives the act, the moment and, where it could be confirmed, the page in the Methuen Drama Student Edition (introduction and notes by Jim Mulligan), where Act One begins on page 3 and Act Two on page 46. Other editions are paged differently: use the act and the moment to find a passage in yours.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Willy Russell 1985 (book) and 1983 (lyrics, Timeact Ltd t/a Willy Russell Music). Published by Methuen Drama; quotations and page numbers follow the Methuen Drama Student Edition, with an introduction and teaching notes by Jim Mulligan (first published in this edition 1995). Quoted for criticism and review. No song lyrics are reproduced.',
  },
  workLength: {
    words: 20000,
    basis:
      'Estimated, not counted: the play text runs from page 3 of the Methuen Drama Student Edition into the early eighties (its contents page gives Act One, p. 3, and Act Two, p. 46, and its notes refer to the final scene at p. 82), about eighty pages of dialogue, songs and stage directions at roughly 250 words a page. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  native: {
    overview: '/revision/texts/blood-brothers',
    characters: '/revision/texts/blood-brothers/characters',
  },

  context: [
    {
      heading: 'Willy Russell and Liverpool',
      body: 'Willy Russell was born on 23 August 1947 in Whiston, just outside Liverpool. He left school at fifteen and became a women’s hairdresser, then went back into education in 1969, in his early twenties, and trained as a teacher. His best-known plays, Educating Rita (1980) and Shirley Valentine (1986), are, like Blood Brothers, about working-class people whose lives are shaped by what education and money allow them. One reading is that the play’s anger about wasted potential comes from experience: Russell left school with few prospects and found his way back through education, a second chance that Mickey is never offered.',
    },
    {
      heading: 'From a school play to a West End musical',
      body: 'Russell first wrote Blood Brothers as a short play for Merseyside Young People’s Theatre, a company that took plays into schools. It opened at Fazakerley Comprehensive in Liverpool in 1981, ran for about seventy minutes and had no music, and Russell has said he began writing the full musical the day it opened. The musical was first performed at the Liverpool Playhouse on 8 January 1983 and moved to the Lyric Theatre in London on 11 April 1983, where it won the Olivier Award for Best New Musical. A West End revival opened in 1988 and ran until November 2012. You can use this history in an essay: the play was rebuilt for a mass audience, and one reading is that this is why its politics arrive through songs, jokes and a love story rather than through speeches.',
    },
    {
      heading: 'Rehousing and the new towns',
      body: 'Families from Liverpool’s crowded inner city were rehoused in new towns outside it: Skelmersdale, for example, was designated a new town in 1961 to take overspill population from the north Liverpool conurbation. The council’s letter near the end of Act One, moving the Johnstones out of the city, dramatises this, and Mrs Johnstone greets it as a fresh start. Act Two shows that the problems travelled with them. Rich and poor streets could sit close together in the city, and the staging keeps the Lyons house and the Johnstone house on one stage, a few steps apart and a world away.',
    },
    {
      heading: 'Schools and class',
      body: 'The play’s schools divide by class. As a teenager Mickey attends a secondary modern, the kind of school for pupils who had not won a grammar-school place, which Russell’s stage direction sketches as “all boredom and futility”; Edward is at boarding school and goes on to university. Both boys are suspended in the same stretch of Act Two, Mickey for being rude to a teacher and Edward for refusing to hand over the locket. One reading is that the parallel shows the same rebellion costing Mickey far more than it costs Edward, whose future carries on regardless. Use this when you argue about nature and nurture: the play gives the twins the same wit and loyalty, and then gives them different schools.',
    },
    {
      heading: 'Unemployment in the early 1980s',
      body: 'In January 1982, with Margaret Thatcher as Prime Minister, official unemployment in the United Kingdom rose above three million for the first time since the 1930s: about one person in eight, and fifteen or sixteen per cent in most of the North West. The musical opened in Liverpool a year later. The play never names Thatcher, but Mickey’s path from the box factory to redundancy, the dole and crime reflects what was happening to many young men in the region. In Act Two the redundancies arrive in a song, Miss Jones, led by Mr Lyons as a company boss, which ties the comfortable family to the economy that throws Mickey out of work.',
    },
  ],

  themes: [
    {
      title: 'Class and inequality',
      body: 'Class is the play’s argument and the twins are its evidence. Two boys born on the same day to the same mother are divided between a comfortable house and a crowded one, and almost every difference that follows can be traced to money: schools, the police, work, prison. The plainest proof is the policeman, who tells Mrs Johnstone that her son was “about to commit a serious crime” and tells Mr Lyons that the same act was “more of a prank”. The most convincing reading is that Russell shows class as a system rather than a set of bad individuals: even kind Edward cannot understand why a job matters. A counter-reading is that the play romanticises the poor, making the Johnstones warm and the Lyonses cold; but Mrs Lyons’s loneliness and Mr Lyons’s absences are drawn with sympathy too, which supports the systemic reading.',
    },
    {
      title: 'Superstition and fate',
      body: 'From the prologue the audience knows the twins will die, and superstition seems to drive the plot: the new shoes on the table, the oath on the Bible, and Mrs Lyons’s story that separated twins who learn the truth “shall both immediately die”. Yet Mrs Lyons makes that story up, and later tells Edward that superstition is the kind of thing “a silly mother” says. Russell presents superstition as a tool the powerful use on the powerless. The Narrator’s last speech asks whether we should blame superstition or “class”, and the plot has already answered: the deaths come from a gun, a prison sentence, unemployment and a secret kept because a poor woman was frightened. A reader who takes the curse literally misses the point, though the Narrator’s menace keeps a sense of doom alive to the end.',
    },
    {
      title: 'Nature and nurture',
      body: 'Because the twins are identical, the play works like an experiment: change the upbringing and watch what changes in the boy. At seven they are equals, with the same birthday and the same eagerness, and Edward thinks Mickey knows “the most smashing things”. By their twenties one is a councillor and the other is on tablets after prison, and in the final scene Mickey makes the argument explicit when he sees that he “could have been him”. The strongest essays notice what the experiment keeps constant: loyalty, humour and love for Linda belong to both twins, while confidence, polish and opportunity are learned. You could also argue that Russell weights the experiment, since Edward’s kindness is never tested by hardship and we never see what poverty would have done to him.',
    },
    {
      title: 'Mothers and motherhood',
      body: 'Both mothers love Edward, and the plot turns on their different kinds of power. Mrs Johnstone is warm, funny and generous, but poverty forces her into the pact; Mrs Lyons can offer comfort, space and money, but her language is possessive from the start (“I must have my baby”), and her fear of losing Edward grows into paranoia and violence. It is easy to call Mrs Lyons the villain, but a stronger answer notices that Russell makes her lonely and unheard: her husband brushes her fears aside and hurries off to work. Mrs Johnstone’s final confession, that she could not “afford to keep both” twins, makes money rather than wickedness the cause of the separation, and answers the Narrator’s opening charge that she was cruel.',
    },
    {
      title: 'Friendship and brotherhood',
      body: 'Mickey and Edward choose each other before they know they are brothers. In the blood-brother oath they promise that they “always have to stand by each other”, a child’s game that dramatic irony makes true in a way neither boy understands. The friendship survives years apart and Edward’s hidden love for Linda, but not the gap between a job and no job. At Christmas Mickey wishes he could “still believe in all that blood brother stuff”, and the word “stuff” shows how childish the promise now seems to him. One reading is that class destroys the friendship; another is that secrecy does, since the truth arrives only when it is too late to help. The two combine well in an essay, because the secret exists only because of class.',
    },
    {
      title: 'Growing up',
      body: 'The same actors play the children and the adults, so the audience watches the characters age while they keep the same hopes. Act One’s childhood is comic and energetic; Act Two races through adolescence into adult life and loses its jokes as it goes. Mickey tells Edward that “while no one was looking I grew up”, which suggests that growing up is something done to the poor rather than something they choose, while Edward, who can afford to stay young, imagines unemployment as a chance to “live like a bohemian”. Linda grows up fastest of all, pregnant and married while Edward is still a student, and then the one who tries to hold her family together, even asking Edward for the house and the job. Russell’s point is that childhood ends at different ages for different classes.',
    },
  ],

  keyQuotes: [
    {
      text: 'So did y’ hear the story of the Johnstone twins?',
      where: 'The Narrator, speaking: the opening of the prologue, Act 1 (p. 3)',
      analysis:
        'The Narrator opens like a ballad singer telling a tale the audience is supposed to know already, and within moments the prologue and a re-enactment on stage have shown how the twins die. Because the ending is given away, suspense moves from what happens to why it happens, and every childhood joke that follows carries a shadow. The dropped letter in “y’” gives the storyteller a Liverpool voice, so the tragedy belongs to a real city, not only to myth.',
    },
    {
      text: 'There’s a stone in place of her heart?',
      where: 'The Narrator, speaking: the prologue, Act 1 (around p. 3)',
      analysis:
        'Framed as a question, the line invites the audience to judge Mrs Johnstone as a mother without feeling, her heart turned to stone. The play then spends two acts showing a woman who is warm, funny and desperate, so the metaphor is set up to be disproved. Russell is testing us: the quick judgement of the poor mother is exactly the prejudice the play attacks, and the Narrator, who sounds so certain, turns out to be an unreliable judge.',
    },
    {
      text: 'Give one of them to me.',
      where: 'Mrs Lyons to Mrs Johnstone, Act 1, the pact (pp. 10 to 13)',
      analysis:
        'The stage direction says Mrs Lyons speaks while “containing her excitement”, and the line is short and blunt: an imperative in which the unborn babies become “them”, one of a pair to be shared out. Mrs Johnstone’s stunned reply repeats the request back to her as a question, so the audience hears how shocking it is. The class relationship is laid bare: the employer asks, and the cleaner is expected to give.',
    },
    {
      text: 'you never put new shoes on the table',
      where: 'Mrs Johnstone to Mrs Lyons, Act 1, in Mrs Lyons’s house, just before the pact',
      analysis:
        'Mrs Johnstone’s alarm over a pair of new shoes introduces superstition as part of working-class home life, sincere and a little comic. Mrs Lyons laughs at it, yet she has seen how strongly Mrs Johnstone believes, and she later turns that belief into a weapon by inventing a curse. An ordinary household object becomes the first warning of the tragedy, and the Narrator keeps returning to it in his songs.',
    },
    {
      text: 'You do know what they say about twins, secretly parted, don’t you?',
      where: 'Mrs Lyons to Mrs Johnstone, Act 1, after dismissing her',
      analysis:
        'The tag question (“don’t you?”) pressures Mrs Johnstone to agree with a belief Mrs Lyons has only just made up. The vague “they say” borrows the authority of folk wisdom, and “secretly parted” shapes the curse to fit their secret exactly. Because the audience watches the lie being built, we know when the prophecy seems to come true at the end that its author was a frightened woman, not fate.',
    },
    {
      text: 'You know the most smashing things. Will you be my best friend?',
      where: 'Edward to Mickey, Act 1, their first meeting',
      analysis:
        'Edward is dazzled by Mickey’s street knowledge, rude words included, and he asks for friendship with no embarrassment at all. His polite, eager speech sounds nothing like Mickey’s street slang, yet each boy is fascinated by the other’s world. The scene suggests that seven-year-olds do not see class; they see someone interesting. It is also dramatic irony, since the audience knows these strangers are twins and knows how the friendship ends.',
    },
    {
      text: 'it was more of a prank, really, Mr Lyons',
      where: 'The Policeman to Mr Lyons, Act 1, after the children are caught throwing stones',
      analysis:
        'Moments earlier the same policeman has told Mrs Johnstone that her son was “about to commit a serious crime, love”, a threat softened into condescension by that final word. To Mr Lyons, over the same offence, he calls it a prank and adds a respectful “Mr Lyons”. Russell stages the two conversations back to back so the audience sees the law applied by class, and the scene is one of the play’s most direct pieces of evidence for the theme of inequality.',
    },
    {
      text: 'I curse the day I met you. You ruined me.',
      where: 'Mrs Lyons to Mrs Johnstone, Act 2, when her offer of money is refused',
      analysis:
        'The line reverses the truth: Mrs Lyons was the one who asked for the baby. Guilt has turned into blame and fear into paranoia, and within moments she is calling Mrs Johnstone a witch and reaching for a knife. She now speaks the language of curses she once used as a tactic. Some readers see simple villainy here; a more convincing reading is that she has been destroyed by her own bargain and trapped by the secret she created.',
    },
    {
      text: 'I don’t wear a hat that I could tilt at the world.',
      where: 'Mickey to Edward, Act 2, the Christmas scene (around pp. 70 to 71)',
      analysis:
        'Edward has just said that without a job he would “live like a bohemian” and “tilt my hat to the world”. Mickey takes Edward’s carefree image and turns it into a metaphor for class: the hat stands for the money and confidence that let Edward imagine unemployment as an adventure. The plain, bitter sentence shows how far apart the twins have grown, and it is Edward’s innocence, not any malice, that wounds.',
    },
    {
      text: 'while no one was looking I grew up',
      where: 'Mickey to Edward, Act 2, the Christmas scene (around p. 71)',
      analysis:
        'Mickey is explaining why he can no longer believe in the blood-brother promise. “No one was looking” suggests neglect: nobody, not school, employer or state, noticed him being forced into adulthood. Earlier in the scene he has called Edward a kid, and Edward has answered that they are exactly the same age, so the line makes growing up a product of hardship rather than age: class, not time, has made them different.',
    },
    {
      text: 'You sorted it out. You an’ Councillor Eddie Lyons.',
      where: 'Mickey to Linda, Act 2, after his release from prison (around pp. 75 to 77)',
      analysis:
        'Mickey has realised that their new house and his job came through Edward, arranged by Linda without telling him. The title “Councillor” is bitter: his twin now holds power over his life, and the favour humiliates him. The clipped sentences sound like an accusation rather than a question, and they show a marriage under strain. Mickey’s wounded pride, as much as jealousy, is what makes Linda’s turn to Edward so explosive.',
    },
    {
      text: 'An’ what about what I need? I need you.',
      where: 'Linda to Mickey, Act 2, the same scene',
      analysis:
        'Linda turns Mickey’s “I need them”, said of his tablets, back on him. The repetition of “need” sets her love against his dependence, and the plain one-syllable words make the plea painfully direct. Russell does not present Linda’s later turn to Edward as simple betrayal: this line shows a woman asking for her husband back and being refused. It is strong evidence for an answer on Linda, on women’s choices, or on what prison and depression do.',
    },
    {
      text: 'I could have been... I could have been him!',
      where: 'Mickey to Mrs Johnstone, Act 2, the final scene (around p. 82)',
      analysis:
        'Mickey has just learned that he and Edward are twins, and his rage here is at the chance that decided which of them was given away. The broken first attempt and the repetition show him struggling to take in the size of what he has lost. A stage direction then has him wave at Edward with his gun hand, and the gun goes off: the line and the shooting are one movement, so the play’s argument and its catastrophe arrive together.',
    },
    {
      text: 'I couldn’t afford to keep both of you.',
      where: 'Mrs Johnstone to Mickey and Edward, Act 2, the final scene (around pp. 81 to 82)',
      analysis:
        'Mrs Johnstone’s confession is plain and unpoetic, and it names the cause of everything: money. The verb “afford” turns a choice between her children into a question of budget. Coming just before the shooting, it answers the prologue, which called her cruel. Russell gives her no excuse beyond poverty, and the audience is left to decide whether that is an excuse at all or an indictment of the society that forced the choice.',
    },
    {
      text: 'And do we blame superstition for what came to pass?',
      where: 'The Narrator, the final speech, Act 2',
      analysis:
        'After two acts of warnings about bad luck and the devil, the Narrator puts the question to the audience directly, and the pronoun “we” makes the spectators part of the society on trial. The next line gives the alternative, “what we, the English, have come to know as class”, and the rhyme of “pass” with “class” clinches it. The question is rhetorical but not decorative: it asks us to leave blaming something that could be changed.',
    },
  ],

  extracts: [
    {
      title: 'The pact',
      where: 'Act 1, in Mrs Lyons’s house (pp. 10 to 13)',
      pointer:
        'From Mrs Johnstone telling Mrs Lyons that she is expecting twins to the end of the oath on the Bible, around pp. 10 to 13.',
      summary:
        'Mrs Johnstone, already struggling to feed her children, tells her employer that she is expecting twins. Mrs Lyons, who cannot have children and whose husband is away on business, asks her for one of the babies. She suggests that giving one away would stop some of Mrs Johnstone’s children being taken into care, and promises that she would still see the child every day at work. Mrs Johnstone agrees, uneasily, and Mrs Lyons makes her swear on the Bible to keep the secret.',
      annotations: [
        {
          phrase: 'containing her excitement',
          note: 'A stage direction, and a revealing one. Mrs Lyons’s words are calm, but the direction shows that she has been waiting for this chance and must hide how much she wants it. It makes the request calculated rather than impulsive, and an actor who plays it this way turns Mrs Lyons into a planner from her first big moment.',
        },
        {
          phrase: 'Give one of them to me.',
          note: 'A bare imperative from employer to cleaner. The babies are “them”, a pair from which one can be spared, and the flat monosyllables leave no room for feeling. Mrs Johnstone’s reply echoes the words back as a question, which lets the audience hear the request as shocking before Mrs Lyons dresses it up in reasons.',
        },
        {
          phrase: 'avoid some of them being put into care',
          note: 'Mrs Lyons’s strongest argument is a threat disguised as concern. She uses the power of the authorities, who could take children from a poor family, to make giving one away sound like the kinder choice. The fear works because it is realistic for a woman in Mrs Johnstone’s position, and it shows how poverty narrows every choice.',
        },
        {
          phrase: 'you’d be able to see him every day',
          note: 'The promise that persuades Mrs Johnstone, and the promise Mrs Lyons breaks within weeks by dismissing her. The audience may hear it as sincere at the time; knowing what follows, it reads as the first lie of many. It also reveals Mrs Johnstone’s priority: not money or comfort, but still being near her son.',
        },
        {
          phrase: 'at first reluctant',
          note: 'The stage direction for the oath on the Bible. Mrs Johnstone hesitates before she swears, and the pause matters: she knows this is wrong, but she believes an oath binds her. Mrs Lyons chooses the Bible because she understands that belief, the first sign that she will use Mrs Johnstone’s faith and superstition against her.',
        },
      ],
      question:
        'Using this extract and your knowledge of the whole play, write about how Russell presents Mrs Lyons and the power she holds over Mrs Johnstone.',
    },
    {
      title: 'Mickey and Edward at Christmas',
      where: 'Act 2, at Christmas (around pp. 70 to 71)',
      pointer:
        'From Edward’s return from university for Christmas, when he finds Mickey in a bitter mood, to Mickey telling him that he does not blame him for it.',
      summary:
        'Edward, home from university, wants to celebrate, but Mickey is sour and short with him. Mickey has lost his job at the box factory and has spent months looking for work. Edward cannot see why a job matters so much and says that he would happily live on the dole. Mickey tells Edward that he is still a kid and that he no longer believes in the blood-brother promise, but adds that he does not blame him.',
      annotations: [
        {
          phrase: 'It disappeared.',
          note: 'Mickey’s answer when Edward asks about his job. The verb makes redundancy sound like something that happened by itself, with nobody responsible, which is how the loss of work felt to many people in the early 1980s. The short sentence closes the subject, and the pause that follows lets the audience feel what Edward does not.',
        },
        {
          phrase: 'live like a bohemian',
          note: 'Edward’s idea of unemployment is romantic: freedom from routine, art and adventure. The word “bohemian” belongs to a university student’s world, not to Mickey’s, and it shows that Edward has never had to imagine being without money. Russell makes him likeable even here, which makes his ignorance more painful than any insult would be.',
        },
        {
          phrase: 'I’m exactly the same age as you, Mickey.',
          note: 'Edward answers literally when Mickey calls him a kid, and the audience hears a dramatic irony he cannot: they are twins, born on the same day. The word “exactly” is truer than Edward knows. Set it beside Mickey’s later claim that he grew up while no one was looking: in this scene growing up is not about age at all, but about what life has forced on you.',
        },
        {
          phrase: 'while no one was looking I grew up',
          note: 'The emotional centre of the passage. “No one was looking” suggests a society that did not notice or care as Mickey was pushed into adulthood, and the plain phrasing makes it sound like a fact he has long accepted. It explains why the childhood oath now seems empty to him, and it turns the scene from a quarrel into an argument about class.',
        },
        {
          phrase: 'I don’t blame y’ for it Eddie',
          note: 'Mickey’s generosity in the middle of his bitterness. He does not hate Edward; he hates the gap between them, and he recognises that Edward did not create it. This complicates any reading of the ending as jealousy alone, and it keeps both twins sympathetic, which is exactly what the tragedy needs.',
        },
      ],
      question:
        'Starting with this extract, write about how Russell presents the effects of unemployment on Mickey, in this extract and in the play as a whole.',
    },
    {
      title: 'The final scene',
      where: 'Act 2, the council chamber (around pp. 80 to 82, and the Narrator’s last speech)',
      pointer:
        'From Mickey’s entrance with the gun while Edward, on a platform at the town hall, is addressing a meeting, to the Narrator’s final question to the audience about superstition and class.',
      summary:
        'Mickey, carrying the gun Sammy hid, confronts Edward in the council chamber while police gather and call to him through a loudhailer. He accuses Edward over Linda and asks why Edward got everything while he got nothing. Mrs Johnstone arrives and, to stop him, tells them that they are twins and that she gave one away because she could not afford both. Mickey rages that he could have been Edward; as he gestures at Edward, the gun goes off and kills him, and the police shoot Mickey. The Narrator then asks the audience whether superstition or class is to blame.',
      annotations: [
        {
          phrase: 'how come you got everything... an’ I got nothin’?',
          note: 'Mickey states the play’s argument in the plainest words he has. The contrast of “everything” and “nothin’” is absolute, and the dropped letter keeps it in his own voice. It is a real question, not only an accusation, and the play has spent two acts supplying the answer that Mickey is about to hear.',
        },
        {
          phrase: 'Why didn’t you give me away!',
          note: 'Mickey’s first reaction to the truth is not joy at finding a brother but fury at his mother for keeping him. The exclamation shows that he now sees his whole life as the worse of two possible lives. It is devastating for Mrs Johnstone, whose one comfort was keeping Mickey, and it shows how completely poverty has poisoned what should have been love.',
        },
        {
          phrase: 'waves at EDWARD with his gun hand',
          note: 'The stage direction makes the shooting almost accidental: Mickey gestures at Edward as he shouts, and the gun goes off. Russell keeps it ambiguous so that no single person, not even Mickey, can simply be blamed. Directors and readers disagree about how deliberate it is, and a strong answer can weigh both readings.',
        },
        {
          phrase: 'four guns explode',
          note: 'The police response is immediate and overwhelming, the state’s violence answering Mickey’s. The number matters: one man’s gun against four. Placed straight after Edward’s death, it ends both lives within seconds of each other, fulfilling the prologue exactly and leaving the audience with the image the play began with.',
        },
      ],
      question:
        'Starting with this extract, explore how Russell presents the ending of Blood Brothers as both tragic and avoidable. Refer to the extract and to the play as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Dialect and non-standard speech',
      example:
        'When the boys first meet, Mickey demands “’Gis a sweet”; Edward, all politeness, soon asks, “Will you be my best friend?”',
      effect:
        'Russell writes the Johnstones in Liverpool speech, with dropped letters (“y’”, “nothin’”) and local grammar, and the Lyonses in standard English. The difference is heard before it is understood, which is how class works on the twins: at seven they are fascinated by each other’s words, and by the Christmas scene the same differences have become a wall. Analyse what the voices do, rather than only labelling them.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'Edward says his birthday is “July the eighteenth”, and Mickey answers, “So is mine.” Soon after, they promise they “always have to stand by each other”.',
      effect:
        'The boys treat the shared birthday as a delightful coincidence, which makes their friendship feel meant to be; the audience, who watched the babies divided, know it is no coincidence. Russell uses this gap between what characters know and what we know throughout, so that every innocent promise is heard as a warning and the audience watches with dread rather than suspense.',
    },
    {
      technique: 'Juxtaposition of parallel scenes',
      example:
        'The policeman tells Mrs Johnstone that Mickey was “about to commit a serious crime, love”, then tells Mr Lyons that it was “more of a prank, really”.',
      effect:
        'Placing the two conversations side by side lets the audience judge the double standard without a word from the Narrator. The method runs through the play: two mothers, two schools, two suspensions, two reactions to unemployment. Parallel scenes are how Russell proves his argument, because with twins the only thing that changes is class.',
    },
    {
      technique: 'Motif: guns',
      example:
        'In Act 1 the seven-year-olds play at shooting each other in the street, and even in the Lyons house a stage direction “produces a toy gun”; in Act 2 Sammy carries a real gun in the robbery, and at the end Mickey takes the gun Sammy has hidden to the town hall.',
      effect:
        'Guns begin as play, childish and funny, and each return is more serious, so the final shooting feels like the end of a long pattern rather than a sudden accident. The motif links childhood games to adult violence and suggests how quickly play turns real for young men with nothing else. It also connects the two homes: toy guns turn up in the comfortable house as well as in the Johnstones’ street.',
    },
    {
      technique: 'Stage directions',
      example:
        'Mrs Lyons asks for the baby while “containing her excitement”; the secondary modern class is “all boredom and futility”; at the end Mickey “waves at EDWARD with his gun hand”.',
      effect:
        'Russell’s directions tell actors and readers what the dialogue hides. Mrs Lyons speaks calmly while the direction reveals her eagerness; the school direction is openly judgemental, a playwright’s comment on an education system that expected little of boys like Mickey; the final direction keeps the shooting ambiguous. In an extract question, quote directions as evidence just as you would dialogue.',
    },
    {
      technique: 'Hesitation and broken sentences',
      example:
        'Mrs Lyons tells Edward there is no bogey man: “It’s a — a superstition.” At the end Mickey cries, “I could have been... I could have been him!”',
      effect:
        'Russell marks hesitation with dashes and ellipses. Mrs Lyons stumbles over the word superstition, and the audience knows why: she has already used an invented one to silence Mrs Johnstone, so her scorn for what “a silly mother” says is hypocritical. Mickey’s broken sentence shows a man overwhelmed by a truth too large to say in one breath. Pauses show what characters cannot say easily.',
    },
    {
      technique: 'Direct address and rhetorical question',
      example: 'The Narrator’s last speech: “And do we blame superstition for what came to pass?”',
      effect:
        'The Narrator steps out of the story and speaks to the audience, as he did in the prologue. The question is rhetorical, since the next line supplies the answer, class, but asking it forces the audience to judge rather than simply mourn. The pronoun “we” includes the spectators in the society on trial. Direct address is how Russell turns a tragedy into an argument.',
    },
    {
      technique: 'Metaphor drawn from everyday objects',
      example:
        'Mickey’s “I don’t wear a hat that I could tilt at the world”, turning Edward’s casual phrase into an image of privilege; Mrs Johnstone’s fear of new shoes on the table.',
      effect:
        'Russell’s characters rarely use grand imagery; their metaphors come from ordinary things, which keeps the play rooted in real homes. When Mickey seizes Edward’s hat image, an everyday object becomes a symbol of the confidence that money buys. The domestic scale is the point: the tragedy happens in kitchens and on doorsteps, not on a battlefield.',
    },
  ],

  structureForm: [
    {
      heading: 'A circular structure: the ending first',
      body: 'The play begins with its ending: the Narrator’s prologue tells the audience that the twins will die, and the stage shows a re-enactment of their deaths. It closes on the same deaths and on the Narrator’s last speech. This circular shape makes the ending feel inevitable and removes suspense about what happens, so the audience’s attention goes to how and why. It also makes the play feel like a story that is told again and again, as if the same tragedy keeps happening to real families.',
    },
    {
      heading: 'Two acts: hope, then collapse',
      body: 'Act One covers the pact and the twins’ childhood and ends in hope, as the Johnstones are rehoused out of the city and set off for a fresh start. Act Two opens with Mrs Johnstone singing again and then moves much faster, through adolescence, marriage, redundancy, prison and depression, often skipping years between scenes. The acceleration mirrors the way adult life overtakes Mickey, and the contrast between the acts makes the collapse feel steeper because the audience has been allowed to hope.',
    },
    {
      heading: 'The Narrator',
      body: 'The Narrator is on stage throughout, watching and commenting, speaking and singing in rhyming verse, and the other characters do not show that they see him. He works like the chorus of a Greek tragedy, telling us the ending and warning of doom, and he can be played as sinister or as a detached observer. His role changes across the play: in the prologue he invites us to judge Mrs Johnstone as cruel, but by the end he is asking whether the real cause was class. Tracking that shift is a strong way to write about him.',
    },
    {
      heading: 'Songs and reprises',
      body: 'Blood Brothers is a musical, and the songs do dramatic work: they reveal what characters feel, compress years into minutes and repeat ideas. Russell wanted music with the feel of the songs heard in working men’s clubs, the entertainment of the Johnstones’ own world. Songs return with new meanings. The song called Marilyn Monroe, in which Mrs Johnstone first remembers her dancing days, comes back twice in Act Two, and by its last return it is about the pills Mickey depends on. Mrs Lyons persuades Mrs Johnstone in a duet called My Child; Mrs Johnstone’s Easy Terms, which belongs to the moment she gives up her baby, sets the loss of a child beside things bought on credit; and Mr Lyons sings the redundancy song, Miss Jones. Referring to a song by its title and saying what it does shows that you understand the form.',
    },
    {
      heading: 'Staging: two houses on one stage',
      body: 'Russell’s production note asks for an open stage and no cumbersome scene changes, with two semi-permanent areas: the Lyons house and the Johnstone house. Locations change with light rather than scenery, so the story flows quickly, and the two homes stay in view of each other throughout. The effect is to keep the comparison in front of the audience at every moment: the families are never far apart physically, only socially, which is the play’s point about a divided city.',
    },
    {
      heading: 'The same actors at every age',
      body: 'The same actors play Mickey, Edward, Linda and Sammy as children, teenagers and adults. Adults playing seven-year-olds creates much of Act One’s comedy, and watching the same performers age makes the losses of Act Two sharper, because the audience still sees the children inside the adults. When Mickey says he grew up while no one was looking, the audience has watched it happen.',
    },
    {
      heading: 'A working-class tragedy',
      body: 'The play borrows the shape of classical tragedy: deaths foretold, an oath and a curse, a chorus-like Narrator, and a catastrophe the audience sees coming. But its central figures are a factory worker and his twin, not kings, and the force that destroys them is social rather than divine. One reading is that Russell uses tragic form to give ordinary lives the dignity of tragedy; another is that he uses it ironically, setting up fate so that the final speech can knock it down. Both readings can be argued from the text.',
    },
  ],

  vocabulary: [
    {
      term: 'Narrator',
      definition:
        'A character who tells the story to the audience. In Blood Brothers he is on stage throughout, comments in rhyming verse and song, and is not acknowledged by the other characters.',
    },
    {
      term: 'Prologue',
      definition:
        'An opening speech that introduces a play. Here it gives away the ending and asks the audience to judge the mother.',
    },
    {
      term: 'Chorus',
      definition:
        'In ancient Greek tragedy, a group who comment on the action and speak to the audience. The Narrator plays a similar role.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something the characters do not, such as the fact that Mickey and Edward are twins while they swear to be blood brothers.',
    },
    {
      term: 'Foreshadowing',
      definition:
        'A hint of what is to come, such as the children’s games with guns or the Narrator’s warnings of bad luck.',
    },
    {
      term: 'Motif',
      definition:
        'A detail, image or idea that recurs through a text and gathers meaning, such as guns, shoes on the table or the locket.',
    },
    {
      term: 'Reprise',
      definition:
        'A song, or part of one, that returns later in a musical, often with a changed meaning. The Marilyn Monroe song is reprised twice in Act Two.',
    },
    {
      term: 'Superstition',
      definition:
        'A belief that certain actions or objects bring good or bad luck. Mrs Johnstone believes sincerely; Mrs Lyons invents one to control her.',
    },
    {
      term: 'Dialect',
      definition:
        'The words, grammar and pronunciation of a region or social group. The Johnstones speak with a Liverpool accent and dialect, often called Scouse.',
    },
    {
      term: 'Secondary modern',
      definition:
        'A type of state secondary school in the mid-twentieth century for pupils who had not won a grammar-school place, offering a less academic education. Mickey attends one.',
    },
    {
      term: 'Redundancy',
      definition:
        'Losing your job because the employer no longer needs the post, not because of anything you did. Mickey is made redundant from the box factory.',
    },
    {
      term: 'The dole',
      definition:
        'Everyday British slang for unemployment benefit; to be on the dole is to be out of work and claiming it.',
    },
    {
      term: 'Overspill',
      definition:
        'People rehoused from an overcrowded city to new estates or new towns outside it, as the Johnstones are at the end of Act One.',
    },
    {
      term: 'Councillor',
      definition:
        'An elected member of a local council. Edward becomes one, which gives him the power to find Linda a house and Mickey a job.',
    },
    {
      term: 'Blood brother',
      definition:
        'A friend who has sworn loyalty in a ritual, traditionally by mixing blood. The title is ironic, because the boys are brothers by blood already.',
    },
    {
      term: 'Nature and nurture',
      definition:
        'The debate over whether who we become is decided by what we are born with (nature) or by how we are brought up (nurture). The twins make the play a test case.',
    },
    {
      term: 'Social mobility',
      definition:
        'Moving between social classes, usually upwards through education or work. Edward has it; Mickey’s chances of it close early.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How far does Russell present Mrs Lyons as a villain in Blood Brothers? Write about: what Mrs Lyons says and does; how far Russell presents her as a villain by the ways he writes.',
        skill: 'Whole-play essay on a character, in the style of AQA',
        guidance: [
          'Thesis: Mrs Lyons does villainous things, but Russell presents her as lonely, frightened and finally broken, so the play blames the system that let her take a poor woman’s child more than it blames her.',
          'Act 1, the pact (pp. 10 to 13): analyse “Give one of them to me.” and the stage direction “containing her excitement”. What power does she hold as an employer?',
          'Act 1, the curse: “You do know what they say about twins, secretly parted, don’t you?” Show that she uses Mrs Johnstone’s superstition deliberately, then set it against her telling Edward that superstition is what “a silly mother” says, in the bogey man scene.',
          'Act 1, her marriage, in the bogey man scene: Mr Lyons hurries off to a merger while she asks him to spend time with Edward. Use this to show her isolation.',
          'Act 2, at Mrs Johnstone’s new house: the offer of money, “I curse the day I met you. You ruined me.” and the knife. Is this villainy or breakdown?',
          'Act 2, near the end: she tells Mickey about his wife and Edward, which leads straight to the ending. Weigh her responsibility for the deaths.',
          'Conclude by judging how far: a strong conclusion might argue that she is a villain in her actions but a victim in her motives, and that the deeper villain is a society in which a child can be traded for security.',
        ],
      },
      {
        question:
          '“MRS LYONS: You do know what they say about twins, secretly parted, don’t you?” Explore the significance of superstition in Blood Brothers. You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay with context, in the style of Pearson Edexcel',
        guidance: [
          'Thesis: superstition seems to drive the plot, but Russell presents it as a cover for the real cause, class, and the Narrator’s final question says so.',
          'Folk superstition: Mrs Johnstone’s horror that “you never put new shoes on the table” (Act 1). Show that her fear is sincere and belongs to her world.',
          'Invented superstition: Mrs Lyons’s curse after the dismissal. Analyse the tag question and “secretly parted”, and link it to her power as an employer.',
          'Hypocrisy: the bogey man scene in Act 1, where she stumbles over the word (“It’s a — a superstition”) and calls such beliefs the talk of a silly mother.',
          'The Narrator: his prologue, his warnings of bad luck through both acts, and the final “And do we blame superstition for what came to pass?”, answered by “class”.',
          'Context: the musical opened in January 1983, a year after UK unemployment passed three million for the first time since the 1930s, with rates of fifteen or sixteen per cent in much of the North West. Argue that Russell replaces fate with economics so the audience cannot shrug the deaths off as bad luck.',
          'Conclude with a judgement: is superstition the cause, a symptom or a smokescreen? The smokescreen reading is the most convincing, but acknowledge that the Narrator’s menace keeps the audience feeling that fate is real.',
        ],
      },
      {
        question:
          'Using the Christmas scene between Mickey and Edward (Act 2, around pp. 70 to 71) and your knowledge of the whole play, write about how Russell presents growing up in Blood Brothers. In your response you should refer to the extract and the play as a whole, and show your understanding of characters and events in the play.',
        skill: 'Extract and whole-play response, in the style of Eduqas',
        guidance: [
          'Begin with the extract: Mickey’s “while no one was looking I grew up” and Edward’s reply that they are exactly the same age. Analyse how growing up is presented as something hardship forces.',
          'Still in the extract: Edward’s “live like a bohemian” against Mickey’s hat metaphor. Two ideas of adulthood, one chosen and one imposed.',
          'Back to Act 1: the seven-year-olds’ games, the blood-brother oath, the toy guns. Show what innocence looked like, and how dramatic irony shadows it.',
          'Adolescence in Act 2: both boys suspended from very different schools, the secondary modern described as “all boredom and futility”.',
          'After the extract: prison, the tablets and Linda’s “An’ what about what I need?”; then the ending, where growing up has cost Mickey everything.',
          'Form: the same actors play the characters at every age, and Act 2 speeds through the years, so growing up feels rushed. Cover the beginning, middle and end of the extract, then end with a clear judgement.',
        ],
      },
      {
        question:
          'How does Russell use the Narrator to shape the audience’s response to the events of Blood Brothers?',
        skill: 'Whole-play essay on a dramatic device',
        guidance: [
          'Thesis: the Narrator makes the audience feel the tragedy is fated and then asks them to reject fate, so he both creates the play’s dread and exposes its cause.',
          'The prologue (p. 3): the re-enactment, “So did y’ hear the story of the Johnstone twins?”, and the judgement of the mother as having “a stone in place of her heart”. Show how he frames the story and misleads us about Mrs Johnstone.',
          'His presence: on stage throughout, unseen by the characters, turning up at moments of danger with warnings about bad luck and the devil. Discuss how this builds tension and dramatic irony.',
          'His songs and reprises: refer to them by what they do and where they come, without needing to quote them, to show you understand the musical form.',
          'The final speech: “And do we blame superstition for what came to pass?” and the alternative, class. Explain how the direct question turns grief into argument.',
          'Conclude: is he a voice of fate, a chorus, or Russell’s own voice? Argue for one reading and acknowledge the others.',
        ],
      },
    ],
    tips: [
      'Quote short. The best evidence in this play is a few words of dialogue or a stage direction, and the exams are closed book: learn fifteen short quotations spread across both acts, not five long ones.',
      'Use the twins as Russell’s method, not just his plot. The strongest answers point to the pairings (two mothers, two schools, two suspensions, one policeman’s two tones of voice) and explain that with identical twins the only variable is class.',
      'Do not call Mrs Lyons simply evil or Linda simply unfaithful. Examiners reward the answer that shows how each is shaped by circumstance, and then still makes a judgement.',
      'Make context part of the argument, not a paragraph of history. One precise fact, such as UK unemployment passing three million in January 1982, linked to Mickey’s redundancy is worth more than a page on the 1980s. The play never names Thatcher, so do not claim that it does.',
      'Question the Narrator. His prologue calls Mrs Johnstone cruel and the play proves him wrong; noticing that he is not neutral is a mark of a strong answer.',
      'The songs are part of the text. You can write about what a song does and where it comes, and naming it (Easy Terms, Miss Jones, the returning Marilyn Monroe song) shows you understand that this is a musical, not a play with music added.',
      'In an extract question, cover the beginning, middle and end of the passage, treat stage directions as evidence, and then range across the whole play with precise references to the act and the moment.',
      'Place your evidence precisely. Knowing that the pact, the blood-brother oath, the policeman and the locket belong to Act 1, and the knife, Christmas, prison and the council chamber to Act 2, shows whole-play knowledge.',
    ],
  },

  modelAnswer: {
    question:
      '“MRS LYONS: You do know what they say about twins, secretly parted, don’t you?” Explore the significance of superstition in Blood Brothers. You must refer to the context of the play in your answer.',
    paragraph:
      'Russell makes superstition look like the engine of the tragedy and then exposes it as a tool of the powerful. Mrs Johnstone’s horror that “you never put new shoes on the table” is sincere, a fear rooted in the working-class world she comes from. Mrs Lyons, by contrast, borrows that world’s authority when she needs it: the tag question “don’t you?” in her warning about twins “secretly parted” pressures Mrs Johnstone into accepting a curse Mrs Lyons has just invented, and the threat that the twins “shall both immediately die” silences the one person who could tell the truth. Russell makes the hypocrisy plain in the bogey man scene, where Mrs Lyons tells Edward that such beliefs are what “a silly mother” says, stumbling over the word itself: “It’s a — a superstition.” The powerful, the play suggests, do not believe in curses; they use them. That is why the Narrator’s final question, “And do we blame superstition for what came to pass?”, is answered in the next line by “class”. For an audience in 1983, a year after unemployment in Britain passed three million for the first time since the 1930s, that answer would have been pointed: the twins die because a poor woman could not afford to keep both of her sons, not because of bad luck.',
    commentary: [
      'It opens with an argument, not a plot point: the topic sentence tells the examiner what the paragraph will prove, and every sentence after it serves that claim.',
      'Every quotation is short and embedded in the sentence, and each is analysed at word level: the tag question, “secretly parted”, the stumble over “superstition”.',
      'It contrasts two characters’ uses of superstition, sincere belief against cynical use, which shows knowledge of the whole play and turns description into argument.',
      'Context arrives as one precise, dated fact tied directly to the Narrator’s question, which is what a question asking you to refer to context rewards.',
      'It ends with a judgement, which is what a question about significance asks for, returning to the cause the play itself names rather than listing more moments.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, the prologue (p. 3)',
      title: 'The ending, shown first',
      summary:
        'The play begins with its ending. In rhyming speech the Narrator invites the audience to hear the story of the Johnstone twins, the stage shows a re-enactment of the twins’ deaths, and he asks the audience to judge the mother who gave one away.',
      setting: 'The open stage',
      who: ['The Narrator', 'Mrs Johnstone', 'Mickey', 'Edward'],
      quote: 'So did y’ hear the story of the Johnstone twins?',
      themes: ['Superstition and fate', 'Class and inequality'],
      tension: 3,
      significance:
        'Giving away the ending moves the audience’s attention from what happens to why it happens.',
    },
    {
      where: 'Act 1, Mrs Lyons’s house (around pp. 7 to 9)',
      title: 'New shoes on the table',
      summary:
        'Mrs Johnstone, left by her husband with seven children, has started work cleaning for Mrs Lyons, whose husband is away on business. When a new pair of shoes ends up on the table, Mrs Johnstone is horrified, and the Narrator turns her fear into a warning.',
      setting: 'Mrs Lyons’s comfortable house',
      who: ['Mrs Johnstone', 'Mrs Lyons', 'The Narrator'],
      quote: 'you never put new shoes on the table',
      themes: ['Superstition and fate', 'Class and inequality'],
      tension: 2,
      significance:
        'Superstition enters the play as part of Mrs Johnstone’s world, and Mrs Lyons sees how strongly she believes.',
    },
    {
      where: 'Act 1, the pact (pp. 10 to 13)',
      title: 'The pact',
      summary:
        'Mrs Johnstone learns she is expecting twins and fears she cannot feed them. Mrs Lyons, who longs for a child, asks her for one, promising she would still see him every day at work, and makes her swear on the Bible to keep the secret.',
      setting: 'Mrs Lyons’s house',
      who: ['Mrs Johnstone', 'Mrs Lyons'],
      quote: 'Give one of them to me.',
      themes: ['Mothers and motherhood', 'Class and inequality', 'Superstition and fate'],
      tension: 4,
      significance: 'Poverty and power make the choice that the rest of the play pays for.',
    },
    {
      where: 'Act 1, after the birth',
      title: 'The handover and the curse',
      summary:
        'When the twins are born Mrs Lyons insists on taking one; Mrs Johnstone keeps Mickey and gives up the baby who becomes Edward. Back at work she cannot stop fussing over him, so Mrs Lyons dismisses her and then, to frighten her into keeping the secret, invents the superstition that twins parted at birth will die if they learn the truth.',
      setting: 'The two households',
      who: ['Mrs Lyons', 'Mrs Johnstone'],
      quote: 'they shall both immediately die',
      themes: ['Superstition and fate', 'Mothers and motherhood'],
      tension: 4,
      significance:
        'The lie that silences Mrs Johnstone becomes the prophecy the play appears to fulfil.',
    },
    {
      where: 'Act 1, seven years later',
      title: 'Blood brothers',
      summary:
        'Mickey, nearly eight, meets a boy from the big house who shares his sweets, his birthday and his delight in rude words. The two swear to be blood brothers, not knowing they are twins, and both mothers, recognising the other boy, try to keep them apart.',
      setting: 'The street outside the Johnstones’ house',
      who: ['Mickey', 'Edward', 'Mrs Johnstone', 'Mrs Lyons'],
      quote: 'we always have to stand by each other',
      themes: ['Friendship and brotherhood', 'Nature and nurture', 'Growing up'],
      tension: 2,
      significance:
        'The chosen bond mirrors the real one, and the audience’s knowledge turns every promise into irony.',
    },
    {
      where: 'Act 1, the Lyons house, after the first meeting',
      title: 'The bogey man',
      summary:
        'Mr Lyons hurries off to work on a business merger. Mrs Lyons tells Edward that the bogey man is only a superstition, the kind of thing a silly mother says, and then Mickey calls at the door to ask whether Eddie is coming out to play.',
      setting: 'The Lyonses’ living room',
      who: ['Mr Lyons', 'Mrs Lyons', 'Edward', 'Mickey'],
      quote: 'It’s a — a superstition.',
      themes: ['Superstition and fate', 'Mothers and motherhood'],
      tension: 2,
      significance:
        'Mrs Lyons scorns the kind of belief she has already used as a weapon, and Mickey’s arrival shows she cannot keep the twins apart.',
    },
    {
      where: 'Act 1, the children’s games',
      title: 'Stones and a policeman',
      summary:
        'Mickey, Edward and Linda play together and are caught throwing stones at windows. The policeman warns Mrs Johnstone that her family could end up in court, but tells Mr Lyons, over the same offence, that it was a prank.',
      setting: 'The street, then both houses',
      who: ['Mickey', 'Edward', 'Linda', 'The Policeman', 'Mrs Johnstone', 'Mr Lyons'],
      quote: 'it was more of a prank, really, Mr Lyons',
      themes: ['Class and inequality', 'Growing up'],
      tension: 3,
      significance:
        'The law treats the twins differently for the same act, the play’s plainest picture of class.',
    },
    {
      where: 'Act 1, the move (around pp. 39 to 40)',
      title: 'The locket',
      summary:
        'Frightened of losing Edward, Mrs Lyons persuades her husband to move the family out to the country. Edward comes to say goodbye, and Mrs Johnstone gives him a locket holding a picture of herself and Mickey.',
      setting: 'The Johnstones’ front door',
      who: ['Mrs Lyons', 'Mr Lyons', 'Edward', 'Mrs Johnstone'],
      themes: ['Mothers and motherhood', 'Friendship and brotherhood'],
      tension: 2,
      significance:
        'The locket ties Edward to his birth mother, and in Act 2 it gets him suspended from school.',
    },
    {
      where: 'Act 1, the end of the act',
      title: 'Rehoused',
      summary:
        'A letter from the council tells Mrs Johnstone that the family is being rehoused outside the city. She and her children set off full of hope for a fresh start, and the act ends on their optimism.',
      setting: 'A new council house out of Liverpool',
      who: ['Mrs Johnstone', 'Mickey', 'Sammy'],
      quote: 'It’s like the country, isn’t it, mam?',
      themes: ['Class and inequality', 'Growing up'],
      tension: 1,
      significance: 'The hope is real, but Act 2 shows that poverty moves with them.',
    },
    {
      where: 'Act 2, the teenage years (from p. 46)',
      title: 'Suspended',
      summary:
        'At fourteen, Mickey is suspended from his secondary modern for being rude to a teacher, and Edward from his boarding school for refusing to hand over the locket. Home at the same time, they meet again and pick up their friendship, while Mickey is too shy to tell Linda how he feels.',
      setting: 'A classroom, a boarding school, and the countryside near both homes',
      who: ['Mickey', 'Edward', 'Linda', 'Mrs Johnstone'],
      themes: ['Growing up', 'Friendship and brotherhood', 'Class and inequality'],
      tension: 2,
      significance:
        'Two schools punish the twins for similar defiance, and their bond survives years apart.',
    },
    {
      where: 'Act 2, Mrs Johnstone’s new house',
      title: 'Mrs Lyons’s offer',
      summary:
        'Desperate to keep Edward away from the Johnstones, Mrs Lyons offers Mrs Johnstone money to move away. Refused, she curses her, calls her a witch and threatens her with a knife.',
      setting: 'Mrs Johnstone’s new house',
      who: ['Mrs Lyons', 'Mrs Johnstone'],
      quote: 'I curse the day I met you. You ruined me.',
      themes: ['Mothers and motherhood', 'Superstition and fate'],
      tension: 4,
      significance:
        'Guilt and fear have turned Mrs Lyons from a manipulator into a danger, and she now speaks the language of curses herself.',
    },
    {
      where: 'Act 2, growing up together',
      title: 'Three friends',
      summary:
        'Mickey, Edward and Linda spend their teenage years together. Mickey leaves school for a job making cardboard boxes, and before Edward leaves for university he urges Mickey to ask Linda out, although he secretly loves her himself.',
      setting: 'Around the new estate',
      who: ['Mickey', 'Edward', 'Linda'],
      themes: ['Friendship and brotherhood', 'Growing up'],
      tension: 2,
      significance:
        'The last carefree time the three share, and Edward’s hidden feelings for Linda plant the final conflict.',
    },
    {
      where: 'Act 2, marriage and redundancy (around p. 68)',
      title: 'Laid off',
      summary:
        'Linda is pregnant and she and Mickey marry. Soon afterwards Mickey is made redundant, one of many workers laid off in a song sung by Mr Lyons as a company boss dictating letters to his secretary.',
      setting: 'The factory, then the streets',
      who: ['Mickey', 'Linda', 'Mr Lyons'],
      themes: ['Class and inequality', 'Growing up'],
      tension: 3,
      significance:
        'Giving the song to Mr Lyons links the comfortable family to the economy that throws Mickey out of work.',
    },
    {
      where: 'Act 2, Christmas (around pp. 70 to 71)',
      title: 'Still a kid',
      summary:
        'Edward, home from university, wants to celebrate, but Mickey has been out of work for months and turns on him. Afterwards Edward tells Linda that he loves her and learns that she has married Mickey and is expecting a baby.',
      setting: 'Christmas, with Edward home from university',
      who: ['Mickey', 'Edward', 'Linda'],
      quote: 'while no one was looking I grew up',
      themes: ['Growing up', 'Class and inequality', 'Friendship and brotherhood'],
      tension: 4,
      significance:
        'The twins’ lives have split: one is still a student, the other is already worn down.',
    },
    {
      where: 'Act 2, the robbery and prison',
      title: 'The look-out',
      summary:
        'Desperate for money, Mickey agrees to keep look-out while Sammy robs a filling station. Sammy shoots a man, both brothers are caught, and Mickey is sentenced to seven years in prison, where he becomes depressed and is given tablets.',
      setting: 'A filling station, then prison',
      who: ['Mickey', 'Sammy'],
      themes: ['Class and inequality', 'Growing up'],
      tension: 5,
      significance: 'Unemployment pushes Mickey into the crime that breaks him.',
    },
    {
      where: 'Act 2, after prison (around pp. 75 to 77)',
      title: 'The tablets',
      summary:
        'Released early, Mickey still depends on his tablets. Linda has secretly asked Edward, now a councillor, for help, and he has found them a house and Mickey a job. When Mickey realises, he is humiliated; Linda pleads with him and then turns to Edward, and a romance between them begins.',
      setting: 'Mickey and Linda’s new house',
      who: ['Mickey', 'Linda', 'Edward'],
      quote: 'An’ what about what I need? I need you.',
      themes: ['Class and inequality', 'Friendship and brotherhood', 'Growing up'],
      tension: 4,
      significance: 'Pride, depression and loneliness drive the three friends towards the ending.',
    },
    {
      where: 'Act 2, Mrs Lyons tells Mickey (around p. 79)',
      title: 'The gun',
      summary:
        'Mrs Lyons, bitter and unbalanced, reveals to Mickey that his wife and Edward are seeing each other. Furious, Mickey takes the gun Sammy has hidden and sets off to find Edward at the town hall.',
      setting: 'Several places in quick succession',
      who: ['Mrs Lyons', 'Mickey', 'Edward', 'Linda'],
      themes: ['Friendship and brotherhood', 'Mothers and motherhood'],
      tension: 5,
      significance: 'The mother who began the secret sets the ending in motion.',
    },
    {
      where: 'Act 2, the council chamber (around pp. 80 to 82)',
      title: 'The twins learn the truth',
      summary:
        'Mickey confronts Edward in the council chamber as the police arrive. Mrs Johnstone tells them they are twins. In his rage Mickey waves the gun at Edward, it goes off and kills him, and the police shoot Mickey dead.',
      setting: 'The town hall council chamber',
      who: ['Mickey', 'Edward', 'Mrs Johnstone'],
      quote: 'I could have been... I could have been him!',
      themes: ['Class and inequality', 'Nature and nurture', 'Superstition and fate'],
      tension: 5,
      significance:
        'The prophecy seems fulfilled, but the truth that destroys them is about money, not magic.',
    },
    {
      where: 'Act 2, the final speech',
      title: 'Superstition or class?',
      summary:
        'With the twins dead on stage, the Narrator asks the audience whether superstition is to blame, or what the English have come to know as class. The play closes on the same deaths it showed at the start.',
      setting: 'The council chamber, with the twins dead on stage',
      who: ['The Narrator', 'Mrs Johnstone'],
      quote: 'And do we blame superstition for what came to pass?',
      themes: ['Superstition and fate', 'Class and inequality'],
      tension: 3,
      significance: 'The play ends by handing the question to the audience.',
    },
  ],

  relationships: [
    {
      from: 'Mickey',
      to: 'Edward',
      kind: 'twins and blood brothers',
      note: 'Separated at birth, they choose each other as friends at seven, drift apart as money divides their lives, and learn they are twins only minutes before both die.',
    },
    {
      from: 'Mrs Johnstone',
      to: 'Mickey',
      kind: 'mother and son',
      note: 'She keeps him and loves him, but cannot protect him from poverty; at the end he rages that she did not give him away instead.',
    },
    {
      from: 'Mrs Johnstone',
      to: 'Edward',
      kind: 'birth mother and son, in secret',
      note: 'She promises him away before he is born and hands him over as a newborn, is warm to him whenever they meet, and gives him the locket; he never knows why until the last scene.',
    },
    {
      from: 'Mrs Lyons',
      to: 'Edward',
      kind: 'adoptive mother and son',
      note: 'She loves him possessively, and her fear of losing him to the Johnstones grows into paranoia and violence.',
    },
    {
      from: 'Mrs Lyons',
      to: 'Mrs Johnstone',
      kind: 'employer and cleaner, then enemies',
      note: 'A pact between them turns to dismissal, an invented curse, an attempted bribe and a knife: the play’s central bond of power.',
    },
    {
      from: 'Mr Lyons',
      to: 'Mrs Lyons',
      kind: 'husband and wife',
      note: 'He is often away at work and dismisses her fears, leaving her alone with the secret she has kept from him since the pact.',
    },
    {
      from: 'Mickey',
      to: 'Linda',
      kind: 'childhood friends, then husband and wife',
      note: 'Linda defends him from the start and marries him, but prison and his tablets shut her out.',
    },
    {
      from: 'Edward',
      to: 'Linda',
      kind: 'friends, then a secret romance',
      note: 'He loves her from his teens but steps aside for Mickey; when she turns to him for help, their romance brings on the ending.',
    },
    {
      from: 'Sammy',
      to: 'Mickey',
      kind: 'older brother',
      note: 'The brother Mickey admires as a child, who later draws him into the robbery that sends him to prison.',
    },
    {
      from: 'The Narrator',
      to: 'Mrs Johnstone',
      kind: 'storyteller and accused',
      note: 'He introduces her as a cruel mother and haunts her with warnings, yet the play he tells proves his first judgement wrong.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Set by all three of this play’s boards, it also puts a comfortable family on trial for what happens to a working-class young woman and asks who is responsible for the poor.',
    },
    {
      title: 'A Taste of Honey',
      href: '/revision/texts/a-taste-of-honey',
      reason:
        'Another AQA modern play about a poor single mother in the north-west of England, which also mixes realism with music and moments that speak to the audience.',
    },
    {
      title: 'Hobson’s Choice',
      href: '/revision/texts/hobsons-choice',
      reason:
        'A Pearson Edexcel choice set in Salford in 1880, it explores class, work and family power in a northern working town from a very different, comic angle.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'intimate_relationships',
  ],

  quotesFromElsewhere: [],

  sources: [
    {
      label:
        'Blood Brothers, Methuen Drama Student Edition, with an introduction and teaching notes by Jim Mulligan (first published in this edition 1995, reissued 2005 and 2009), Internet Archive lending copy, searched with the full-text search only: exact wording, speaker and stage direction for every quotation; the contents page (Act One, p. 3; Act Two, p. 46); page numbers from running heads and from the page list in the teaching notes; the copyright line (book © 1985, lyrics © 1983 Timeact Ltd); the production note; the singing and speaking directions; the introduction on the Merseyside Young People’s Theatre version, which had no music; the chronology of Russell’s life (born Whiston 1947, left school for hairdressing 1962, returned to education 1969); the first performance at the Liverpool Playhouse on 8 January 1983 and the Lyric Theatre on 11 April 1983.',
      url: 'https://archive.org/details/bloodbrothers0000russ',
    },
    {
      label:
        'Educating Rita, Stags and Hens and Blood Brothers (Methuen, 1986), Internet Archive lending copy, full-text search: second check of every quotation and speaker.',
      url: 'https://archive.org/details/educatingritasta0000russ',
    },
    {
      label:
        'Blood Brothers: a musical (Samuel French acting edition, 1985), Internet Archive lending copy, full-text search: third check of every quotation; the list of musical numbers (the Marilyn Monroe song and its reprises, Easy Terms, Kids Game, That Guy, Miss Jones, Light Romance); the one variant found, in the curse speech.',
      url: 'https://archive.org/details/bloodbrothersmus0000russ',
    },
    {
      label:
        'Internet Archive full-text search service used for the three checks above (the per-book search-inside endpoint returned 403 on 26 September 2026).',
      url: 'https://archive.org/services/search/beta/page_production/?service_backend=fts',
    },
    {
      label:
        'BBC Bitesize, Blood Brothers plot summary (AQA): order of events; Mrs Johnstone a single mother of seven; the dismissal; the policeman’s warning of court; the locket; the rehousing; the suspensions; the box factory; the redundancy in Mr Lyons’s song; the filling-station robbery, Sammy shooting a man, the seven-year sentence and early release; Edward as councillor finding the house and job; Mrs Lyons revealing the romance; the ending.',
      url: 'https://www.bbc.co.uk/bitesize/guides/zw8s2p3/revision/1',
    },
    {
      label:
        'BBC Bitesize, Dramatisation of Blood Brothers (AQA): the same actors play the characters at every age; the Narrator on stage throughout and unseen by the characters; the production note on staging; Russell’s wish for music like that of working men’s clubs.',
      url: 'https://www.bbc.co.uk/bitesize/guides/ztpdbk7/revision/1',
    },
    {
      label:
        'BBC Bitesize, Blood Brothers extract question (WJEC): the Lyons household and bogey man passage, checked word for word against the editions above before use.',
      url: 'https://www.bbc.co.uk/bitesize/guides/z3qv6fr/revision/1',
    },
    {
      label:
        'On Magazine, interview with Willy Russell (16 March 2016): the short version for Merseyside Young People’s Theatre, opened at Fazakerley Comprehensive, about seventy minutes long; Russell beginning the full musical the day it opened.',
      url: 'https://www.on-magazine.co.uk/arts/arts-interviews/willy-russell-blood-brothers/',
    },
    {
      label:
        'Wikipedia, Blood Brothers (musical): the school version first performed in November 1981; the Lyric transfer; the 1988 revival and its closing on 10 November 2012.',
      url: 'https://en.wikipedia.org/wiki/Blood_Brothers_(musical)',
    },
    {
      label:
        'Wikipedia, 1983 Laurence Olivier Awards: Best New Musical, Blood Brothers at the Lyric.',
      url: 'https://en.wikipedia.org/wiki/1983_Laurence_Olivier_Awards',
    },
    {
      label:
        'Wikipedia, Willy Russell: born 23 August 1947 in Whiston; hairdresser from fifteen; qualified as a teacher; Educating Rita (1980), Shirley Valentine (1986). Agrees with the chronology in the Student Edition.',
      url: 'https://en.wikipedia.org/wiki/Willy_Russell',
    },
    {
      label:
        'BBC On This Day, 26 January 1982, UK unemployment tops three million: the first time since the 1930s, one in eight, 15 or 16 per cent in most of the North West; Margaret Thatcher as Prime Minister.',
      url: 'http://news.bbc.co.uk/onthisday/hi/dates/stories/january/26/newsid_2506000/2506335.stm',
    },
    {
      label:
        'Wikipedia, Skelmersdale: designated a new town in 1961 to house overspill population from the north Liverpool conurbation.',
      url: 'https://en.wikipedia.org/wiki/Skelmersdale',
    },
    {
      label:
        'AQA GCSE English Literature 8702/2 specimen paper: Blood Brothers in Section A, modern prose or drama, with a choice of two questions in the form used for the first practice question.',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-87022-SQP.PDF',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0/01, June 2018 question paper: Blood Brothers questions opening with a short quotation and requiring reference to context; the paper cites the Methuen Drama edition.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1ET0_01_que_20180523.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature, Component 2 Section A guidance with the specimen Blood Brothers question: an extract and the whole play; closed-book teaching; advice to use the beginning, middle and end of the extract and the stage directions.',
      url: 'https://www.eduqas.co.uk/media/qatnaki2/component-2-section-a-post-1914-prose-drama.pdf',
    },
  ],
}
