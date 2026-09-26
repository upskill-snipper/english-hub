import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Never Let Me Go, Kazuo Ishiguro (2005). A supplement to the existing guide at
 * /revision/texts/never-let-me-go, which keeps its overview, context, themes
 * and characters.
 *
 * THE SELF-AUDIT (26 September 2026). The primary page was graded section by
 * section against the rubric. Overview (an introduction and four plot
 * paragraphs), context (four developed paragraphs), themes (six, each well over
 * forty words) and characters (eight) are rendered and substantive, so they stay
 * native, with factual errors listed below for correction. Its seventeen
 * quotations were not substantive in the sense that matters: five are not in the
 * novel at all, two are misquoted, two are given to the wrong speaker or
 * chapter, one is a song lyric the site must not print, and one is listed
 * twice. There is no extract, language, structure, vocabulary, exam or
 * model-answer section. Everything from key quotations onwards is written here.
 *
 * HOW THE WORDING WAS CHECKED. The novel is in copyright and no licensed copy is
 * held here. Every quotation below was confirmed word for word in a full-text
 * copy of the Faber edition found online (British spellings throughout), which
 * also fixed each chapter number and speaker; that copy does not appear to be
 * authorised, so it is used only as a check and is not linked. Each quotation
 * was then found in at least one further independent source recorded in
 * `sources`: OCR's own question papers, mark schemes and delivery guide, which
 * print passages by permission of Faber; the publisher's excerpt; LitCharts,
 * Shmoop and GradeSaver; reviews in the Guardian, the LRB and the New Yorker;
 * and, for corroboration only, Goodreads quotation pages and Kindle highlights.
 * Words that differ between editions or between online copies were avoided:
 * "co-ordinator" (Faber) is "coordinator" in OCR's 2025 paper, and Goodreads
 * users print "The memories I value most" with two different word orders.
 *
 * DO NOT COPY QUOTATIONS FROM THE PRIMARY PAGE WITHOUT CHECKING THEM. None of
 * these is in the novel: "I kept thinking about all the things that could have
 * happened and didn't", "I can't remember whether we were punished or not",
 * "Tommy, in his rage, seemed not to see me at all", "We had the Gallery to see
 * if you had souls at all", "Hailsham shut down a couple of years ago". It
 * gives Madame's "a new world coming rapidly" to Miss Emily (twice more, in its
 * themes and characters, as "a new world came rapidly"), puts "Poor creatures.
 * What did we do to you?" in Chapter 22 when it is Chapter 21, and misquotes
 * Chapter 17 ("It never occurred to me that our lives ... could unravel and
 * separate over a thing like that") and Chapter 23 (see above).
 *
 * PLOT FACTS ON THE PRIMARY PAGE THIS GUIDE CORRECTS. Ruth's FIRST donation
 * goes badly (Chapter 18) and she dies after her SECOND (Chapter 19; OCR's June
 * 2025 paper prints the scene), not the second and third. The boat is stranded
 * in marshes near the Kingsfield, not in a Norfolk field. Keffers does not run
 * the Cottages: he is a grumbling old man who calls two or three times a week.
 * Ruth's possible is seen in Cromer, on the north Norfolk coast. Kathy, not
 * Tommy, finds the replacement tape (Chapter 15). The page is also labelled for
 * AQA, which examined the novel for the last time in summer 2024.
 */
export const guide: StudyGuide = {
  slug: 'never-let-me-go',
  title: 'Never Let Me Go',
  author: 'Kazuo Ishiguro',
  form: 'novel',
  scope:
    'The whole novel: twenty-three chapters in three parts (Faber and Faber, 2005). For OCR GCSE English Literature (J352) it is a modern prose text on paper J352/01, where part (a) compares a printed extract from the novel with an unseen extract and part (b) asks you to explore another moment in the novel; OCR’s paper is closed book. In Pearson Edexcel A level English Literature it is one of the two post-1900 texts in the Science and Society theme of Paper 2 (Prose), compared with a pre-1900 text; the June 2024 paper allowed clean copies of the texts. Its place on the Pearson Edexcel International A level was not checked for this guide, so confirm the details with your own specification.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Kazuo Ishiguro 2005. Published by Faber and Faber. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 96000,
    basis:
      'About 96,000 words: a count of a full-text copy of the Faber edition, Chapters One to Twenty-Three with part headings, gives about 96,400. The primary page’s figure of about 85,000 is too low. Either figure is far above 3,000 words, so the long-work limit applies.',
  },

  native: {
    overview: '/revision/texts/never-let-me-go',
    context: '/revision/texts/never-let-me-go',
    themes: '/revision/texts/never-let-me-go',
    characters: '/revision/texts/never-let-me-go',
  },

  keyQuotes: [
    {
      text: 'the same way someone might be afraid of spiders',
      where: 'Kathy, on Madame, Chapter 3',
      analysis:
        'Ruth was right that Madame is afraid of the children, but this simile names the kind of fear: not fear of a threat but the recoil people feel from another species. Kathy then turns the image round and imagines “being the spiders”, the first time the students see themselves from outside. The fear belongs to a calm, cultured adult rather than a villain, and the novel keeps finding prejudice in decent people.',
    },
    {
      text: 'None of you will go to America, none of you will be film stars.',
      where: 'Miss Lucy, to the class in the pavilion, Chapter 7',
      analysis:
        'The repeated “none of you” shuts one door after another, and the examples come straight from what she has just overheard, two boys daydreaming about acting. She goes on to rule out ordinary work in supermarkets too, so the students lose not only fame but an everyday future. Her plainness is the exception at Hailsham, and the fact that almost nothing changes afterwards can be read as the novel’s bleakest comment on how little the truth alone can do.',
    },
    {
      text: 'We’re modelled from trash.',
      where: 'Ruth, after the gallery in Cromer, Chapter 14',
      analysis:
        'Ruth says this when the woman she hoped was her possible, seen close up in the gallery, seems less and less like her. The verb “modelled” reduces a person to a copy made from a pattern, and the list of outcasts she adds borrows the outside world’s contempt for the poor and the marginal. One reading is that this is only Ruth’s wounded pride; the more convincing one is that she voices what every student fears, and the novel never contradicts her.',
    },
    {
      text: 'Something in me just gave up.',
      where: 'Kathy, in the churchyard, Chapter 16',
      analysis:
        'When Ruth tells Tommy that Kathy laughs at his animal drawings, Kathy could deny it and does not. Her grammar hands the decision to a part of herself she cannot control, so the failure feels like something that happens to her rather than something she does. This is the novel’s passivity on the smallest scale, inside a friendship, and it lets you argue that the students’ acceptance of their fate is rehearsed in ordinary moments like this one.',
    },
    {
      text: 'powerful tides tugging us apart',
      where: 'Kathy, looking back on the break-up at the Cottages, Chapter 17',
      analysis:
        'Looking back, Kathy explains the break-up of the three friends as a force of nature rather than a choice. The water metaphor excuses everyone, herself included, and it anticipates Tommy’s river in Chapter 23, so the novel’s image for separation is always a current nobody can swim against. A sharp answer notices the evasion as well as the sadness: Kathy did decide to leave, as she admits a few pages later, and the metaphor spreads that responsibility thinly.',
    },
    {
      text: 'That was the worst thing I did.',
      where: 'Ruth, in the car after the boat, Chapter 19',
      analysis:
        'Out of everything she has done, Ruth chooses keeping Kathy and Tommy apart as her worst act, so the novel measures a life by love given or withheld rather than by anything grander. The sentence is flat and unadorned, like most speech in the book, which makes it more moving. Her apology comes with a practical gift, Madame’s address, turning regret into action; it is arguably the nearest thing to redemption the novel allows.',
    },
    {
      text: 'You were lucky pawns.',
      where: 'Miss Emily, to Kathy and Tommy, Chapter 22',
      analysis:
        'Miss Emily admits the students might look like pawns in a game and then tries to console them with an adjective. The phrase exposes her whole position: Hailsham was kinder than the alternatives and she wants that recognised, but a lucky pawn is still sacrificed. Strong answers judge her rather than describe her; one reading sees a reformer who did real good, another a woman who made an unjust system easier to bear.',
    },
    {
      text: 'But for us, it’s our life.',
      where: 'Kathy, to Miss Emily, Chapter 22',
      analysis:
        'After Miss Emily has explained Hailsham’s fall as a change in the climate of opinion, Kathy concedes it might be just a passing trend and then adds these six words. The pronouns carry the argument: what was a cause for the guardians was everything the students had. Use it to challenge the idea that Kathy never protests. Her protest is real, but it is spoken quietly, to people who cannot change anything, and nothing follows from it.',
    },
    {
      text: 'holding to her breast the old kind world',
      where: 'Madame, explaining why she cried, Chapter 22',
      analysis:
        'Madame reads the dance from Chapter 6 in a way Kathy never imagined: not a woman clutching a longed-for baby, but a child clutching a gentler world that science is about to end. The phrase “old kind world” is simple, almost childlike, and that is its force. Two readings are open: that Madame truly grieves for the students, or that she grieves for her own lost world and uses the child as its symbol. The second is harder to dismiss, since she still calls them “creatures”.',
    },
    {
      text: 'The current’s too strong. They’ve got to let go, drift apart.',
      where: 'Tommy, at the Kingsfield, Chapter 23',
      analysis:
        'After asking for a different carer, Tommy sums up why they must part through an image of two people in a fast river. The short sentences sound resigned rather than angry, and the image moves from holding on as hard as they can to letting go, the reverse of the plea in the novel’s title. Set it against his rage in the field in Chapter 22: the anger has been spent, and what remains is acceptance, which is exactly what the reader is left to question.',
    },
    {
      text: 'the spot where everything I’d ever lost since my childhood had washed up',
      where: 'Kathy, in Norfolk, the final page, Chapter 23',
      analysis:
        'The childhood joke from Chapter 6, that Norfolk is the lost corner of England where lost things end up, becomes a real place of mourning. The sea imagery of “washed up” turns the rubbish on the fence into a shoreline of memory. Kathy lets herself believe it only with her eyes half closed and only for a moment, and that restraint is the most moving thing about it: she grieves, then goes back to work.',
    },
  ],

  extracts: [
    {
      title: 'Miss Lucy in the pavilion',
      where: 'Chapter 7',
      pointer:
        'Early in Chapter 7: the rainy afternoon when the class, now fifteen and in their last year, shelters in the sports pavilion before a game of rounders. Start where Miss Lucy overhears Peter J. telling Gordon about becoming an actor, and read to the end of her speech, when she suggests they all go out into the rain.',
      summary:
        'Sheltering from a downpour, the students are chatting about the futures they imagine. Miss Lucy, who has been leaning on the rail staring out at the rain, turns and tells them plainly that they have been given the facts without being helped to understand them, that none of the lives they talk about will be theirs, and that they were brought into being to donate their vital organs before they reach middle age. Then she turns back to the rain and suggests they all go out and play.',
      annotations: [
        {
          phrase: 'you’ve been told and not told',
          note: 'A paradox that names Hailsham’s whole method: facts handed out in pieces too small to feel, so the students both know and do not know. It is also how the novel treats its own reader.',
        },
        {
          phrase: 'Your lives are set out for you',
          note: 'The passive voice hides who has done the setting out. No person or government is ever named, and that facelessness is how the system survives in every chapter of the book.',
        },
        {
          phrase: 'That’s what each of you was created to do',
          note: 'The verb is the one the school has spent years avoiding. It turns children into products made for a purpose, and it answers the question Kathy and Tommy have been circling since their talk by the pond.',
        },
        {
          phrase: 'know and know properly',
          note: 'The repetition shows what Miss Lucy wants: not information but understanding. Her belief that decent lives need full knowledge is exactly the view Miss Emily dismisses as impractical in Chapter 22.',
        },
      ],
      question:
        'How does Ishiguro present Miss Lucy’s outburst as both a turning point and a moment that changes almost nothing?',
    },
    {
      title: 'Miss Emily and the deferral rumour',
      where: 'Chapter 22',
      pointer:
        'The passage OCR printed in its June 2023 GCSE paper: from Miss Emily’s “When we still had Hailsham, we’d get two or three couples each year” to her “But there it is.” Kathy asks her directly, part way through, whether the rumour is true.',
      summary:
        'Miss Emily explains that couples used to try to reach Hailsham to ask for deferrals, that she stamped the rumour out inside the school, and that she came to believe it springs up again wherever it is suppressed. She reports Madame’s colder view, admits that she herself stopped worrying about it, and then turns to Kathy and Tommy: their case is different because they are serious, she regrets it, and she must disappoint them.',
      annotations: [
        {
          phrase: 'it’s not just a single rumour',
          note: 'She describes hope as something that keeps starting again however often it is stamped out, and treats it as a problem to be managed rather than a need to be met.',
        },
        {
          phrase: 'If they’re so foolish, let them believe it',
          note: 'Madame’s view, reported by Miss Emily. The contempt in “foolish” sits oddly with Madame’s tears elsewhere, and quoting it lets Miss Emily look gentler by comparison.',
        },
        {
          phrase: 'It’s something for them to dream about, a little fantasy. What harm is there?',
          note: 'The diminutive “little” shrinks the students’ one hope of more life into a harmless toy, and the rhetorical question asks for agreement she has no right to. OCR’s mark scheme singles out this language of self-justification.',
        },
        {
          phrase: 'You’ve hoped carefully',
          note: 'Praise that works as a verdict: the adverb honours their seriousness and in the same breath confirms that seriousness will not save them. It is kind and devastating at once.',
        },
        {
          phrase: 'It gives me no pleasure at all to disappoint you',
          note: 'The formal, almost official phrasing keeps her at a distance from the news. “Disappoint” is a small word for what she means, which is that nothing will delay Tommy’s fourth donation.',
        },
      ],
      question:
        'How does Ishiguro use Miss Emily’s speech in this passage to reveal her attitude to the students?',
    },
    {
      title: 'The ending in Norfolk',
      where: 'Chapter 23, the final pages',
      pointer:
        'The final paragraph of the novel, from “I found I was standing before acres of ploughed earth” to the last words; the paragraph before it describes the drive. OCR’s delivery guide for teachers names the opening and this ending as the two key passages to study.',
      summary:
        'A couple of weeks after hearing that Tommy has completed, Kathy drives to Norfolk with no real reason to go. She stops by a few trees at the edge of a ploughed field, where rubbish and torn plastic have blown against a barbed-wire fence. She allows herself one small fantasy, that this is where everything she has lost has washed up and that Tommy might appear on the horizon, then cries quietly, stops the fantasy herself, and drives on.',
      annotations: [
        {
          phrase: 'all sorts of rubbish had caught and tangled',
          note: 'The debris held by the wire can be read as a mirror of the students themselves, caught in a structure and discarded by the wider world, and Kathy describes it with her usual plainness rather than any poetic lift.',
        },
        {
          phrase: 'the spot where everything I’d ever lost since my childhood had washed up',
          note: 'The Norfolk joke from Chapter 6 comes true in the only way it can, as an act of imagination, and the verb turns a ploughed field into a shoreline where the lost can be found.',
        },
        {
          phrase: 'a tiny figure would appear on the horizon across the field',
          note: 'The conditional “would” keeps Tommy’s return firmly in fantasy. Kathy lets the picture go no further than a wave from a distance, and the limit she sets is where the grief shows.',
        },
        {
          phrase: 'to drive off to wherever it was I was supposed to be',
          note: 'The last clause hands Kathy’s life back to someone else’s schedule. “Supposed to be” sounds like duty, even obedience, and the vagueness of “wherever” suggests the destination no longer matters.',
        },
      ],
      question: 'How does Ishiguro make the ending of Never Let Me Go both consoling and bleak?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Euphemism and institutional vocabulary',
      example:
        'Chapter 1: Kathy is a carer, her patients are donors, and she is proud that few of hers have been classed as agitated “even before fourth donation”. Dying is called completing throughout.',
      effect:
        'The polite, bureaucratic words make organ removal sound like a routine service, which is how the society in the novel lives with it. Because Kathy uses them without comment, the reader has to decode them, and the moment we understand them we realise we have been accepting them too. Pearson’s own mark scheme names Ishiguro’s euphemism and elliptical style as a narrative method worth analysing.',
    },
    {
      technique: 'Direct address to a listener who shares her world',
      example:
        'Chapter 2: “I don’t know how it was where you were”, before Kathy describes the weekly medicals at Hailsham. The same phrase returns in later chapters.',
      effect:
        'Kathy assumes her listener is another carer or donor, someone raised somewhere other than Hailsham. That makes the novel feel like testimony passed between clones, and it quietly places the reader inside the system rather than safely outside it. It also explains why she never stops to explain the basics: she thinks we already know.',
    },
    {
      technique: 'Understatement and self-correction',
      example:
        'Chapter 1: after describing the girls watching Tommy’s humiliation coolly, Kathy wonders whether she is remembering it wrong and felt a stab of pain after all. Chapter 23: she cries in Norfolk but insists she was not sobbing or out of control.',
      effect:
        'The hedges and corrections make Kathy sound honest and careful, and they also keep strong feeling at arm’s length. Readers learn to watch for what she plays down. The restraint is not coldness: the effect is that the grief the narration refuses to state lands harder on the reader.',
    },
    {
      technique: 'Simile',
      example:
        'Chapter 3: Madame is afraid of the girls “the same way someone might be afraid of spiders”, and Kathy imagines “being the spiders”.',
      effect:
        'An everyday comparison carries a dehumanising idea: the students are feared as a different kind of creature. Reversing the simile, so that the girls see themselves as the spiders, marks the moment they first absorb how outsiders see them. OCR’s 2023 mark scheme picks out this simile as dehumanising.',
    },
    {
      technique: 'Water imagery and extended metaphor',
      example:
        'Kathy’s “powerful tides tugging us apart” (Chapter 17), Tommy’s two people in a fast river (Chapter 23), and the rubbish “washed up” on the Norfolk fence (Chapter 23).',
      effect:
        'Water in the novel is always a force stronger than the people in it. The imagery turns separation and death into something natural and unstoppable, which is both consoling and dangerous: it comforts the characters, and it also lets everyone, readers included, stop asking who made the current.',
    },
    {
      technique: 'Motif and symbol',
      example:
        'The Judy Bridgewater tape, lost in Chapter 6 and found again in Cromer in Chapter 15; Norfolk as the “lost corner” of England (Chapters 6, 15 and 23); fences, from the class joke about electrified fences earlier in Chapter 7 to the barbed wire on the last page.',
      effect:
        'The recurring objects hold the novel together as Kathy’s memory jumps about. The tape stands for what the students can never have and briefly recover; Norfolk for the hope that nothing is lost for good; the fences for limits so familiar that nobody tries to cross them. Pearson’s 2024 mark scheme names barriers and fences as symbols of isolation in the novel.',
    },
    {
      technique: 'Rhetorical questions and self-justifying speech',
      example:
        'Chapter 22: Miss Emily calls the deferral rumour “a little fantasy” and asks “What harm is there?”',
      effect:
        'Miss Emily’s long speeches are full of questions that expect agreement and phrases that shrink the harm done. Ishiguro lets her condemn herself in her own words: the more reasonable she sounds, the clearer it becomes that her reasonableness has made the system easier to live with.',
    },
  ],

  structureForm: [
    {
      heading: 'Three parts and one retrospective voice',
      body: 'Part One (Chapters 1-9) is Hailsham, Part Two (Chapters 10-17) the Cottages, and Part Three (Chapters 18-23) the years of caring, donating and completing. The novel is dated “England, late 1990s” and told by Kathy at thirty-one, looking back. The shape is a coming-of-age story, a bildungsroman, but the adulthood it leads to is an ending rather than a beginning, and that inversion is the structural heart of the book.',
    },
    {
      heading: 'Memory, not chronology',
      body: 'Kathy moves by association: one memory reminds her of another, she announces digressions and returns from them, and she often admits she may have things wrong. Chapter 1 already tells us she chose to care for Ruth, and that choosing her donors is how she got close again to Ruth and Tommy, so we glimpse how the relationships end before we see them begin. The suspense is not about what will happen but about when we, and the students, will understand what it means.',
    },
    {
      heading: 'The reader is told and not told',
      body: 'The words carer, donor and fourth donation appear on the first page; Miss Lucy says the truth aloud only in Chapter 7; the purpose of Hailsham and the Gallery is explained only in Chapter 22. Ishiguro gives the reader the facts in the same drip-fed way Hailsham gives them to the students, so every reader has to ask at what point they knew. That is why answers on structure should discuss delayed revelation and dramatic irony, not just plot order.',
    },
    {
      heading: 'Who is being spoken to',
      body: 'Kathy addresses a “you” who seems to be another carer or donor from somewhere other than Hailsham. The novel is therefore framed as one clone speaking to another, which explains what she leaves unexplained and turns her story into testimony. It also draws the actual reader into the position of someone who already accepts the system.',
    },
    {
      heading: 'Genre: school story, love story, dystopia',
      body: 'The first part borrows the English boarding-school story, with its dorms, games and favourite teachers; the whole novel is a love story; and its world makes it a dystopia. In an interview Ishiguro granted that it has a dystopian or science-fiction dimension but said he thinks of it more as an alternative history, and in a 2006 Guardian essay he wrote that he was never tempted to set it in the future. What is missing is the escape or rebellion most dystopias depend on, and that absence is the most discussed feature of the book.',
    },
    {
      heading: 'An ending that returns to the beginning',
      body: 'The novel ends as it began, with Kathy driving alone between places she is supposed to be. The Norfolk joke from Chapter 6 and the tape found in Cromer in Chapter 15 are gathered into the last image of the lost things at the fence, and Kathy’s refusal to let the fantasy run on mirrors the restraint of the whole narration. The circle is not closure: her own donations are still to come.',
    },
    {
      heading: 'The title',
      body: 'Never Let Me Go is the name of a song on a tape by a singer, Judy Bridgewater, who exists only in the novel. Kathy, at eleven, imagines it is about a woman holding a longed-for baby; Madame, in Chapter 22, sees in the same dance a child clinging to a disappearing world; and readers hear it as the students’ plea to the society that uses them. One title, three readings, and the novel does not choose between them.',
    },
  ],

  vocabulary: [
    {
      term: 'carer',
      definition:
        'A former student who looks after donors in recovery centres before becoming a donor. Kathy has been one for almost twelve years, far longer than most.',
    },
    {
      term: 'donor, donation',
      definition:
        'A donor is a clone whose vital organs are removed in a series of operations; each operation is a donation. The fourth donation is expected to be the last, and some donors, like Ruth and Chrissie, complete sooner.',
    },
    {
      term: 'to complete',
      definition:
        'The novel’s word for a donor’s death. It sounds like finishing a task, which is exactly how the system wants it to sound.',
    },
    {
      term: 'guardian',
      definition:
        'A teacher at Hailsham. The word suggests protection, and the guardians do protect the children, while also preparing them for their purpose.',
    },
    {
      term: 'the Exchanges',
      definition:
        'Four times a year the students exhibit their paintings, poems and models and buy one another’s work with Exchange Tokens, which the guardians award for each piece put in. They are how the students build up possessions, and why creativity decides status.',
    },
    {
      term: 'the Sales',
      definition:
        'Once a month a van brings goods from outside, such as clothes and toys, which the students buy with tokens. Tommy’s polo shirt comes from a Sale.',
    },
    {
      term: 'collection chest',
      definition:
        'The chest under each student’s bed where they keep their few possessions. Kathy’s tape lives in hers before it disappears.',
    },
    {
      term: 'the Gallery',
      definition:
        'Where the students believe Madame takes their best work. Tommy thinks it lets couples prove their love; Miss Emily reveals in Chapter 22 that it was evidence to show a doubting public that the students had souls.',
    },
    {
      term: 'possible',
      definition:
        'The person a student might have been copied from. The students search for theirs hoping to learn who they are or might have been.',
    },
    {
      term: 'veterans',
      definition:
        'The students already living at the Cottages when the Hailsham group arrive. Many grew up elsewhere; Chrissie and Rodney are veterans.',
    },
    {
      term: 'deferral',
      definition:
        'A rumoured postponement of donations for a few years, granted to a couple who could prove they were truly in love. Miss Emily tells Kathy and Tommy it never existed.',
    },
    {
      term: 'the lost corner',
      definition:
        'The students’ name for Norfolk, from a childhood misunderstanding of one of Miss Emily’s lessons, and their belief that everything lost in England ends up there. It returns in Cromer (Chapter 15) and on the last page.',
    },
    {
      term: 'the Morningdale scandal',
      definition:
        'In Chapter 22, the case of a scientist in a remote part of Scotland who tried to offer parents children with enhanced abilities. Miss Emily says it turned public feeling against movements like Hailsham, which then closed.',
    },
    {
      term: 'euphemism',
      definition:
        'A mild word used in place of a harsh one, as completing replaces dying. The novel’s whole vocabulary of care is built from euphemism.',
    },
    {
      term: 'bildungsroman',
      definition:
        'A novel that follows a character from childhood to adulthood. Never Let Me Go uses the form and empties it, because its characters are denied a real adulthood.',
    },
    {
      term: 'alternative history',
      definition:
        'Fiction set in a version of the past that went differently. Here, Miss Emily dates the medical breakthroughs to the early fifties, after the war, and says the world came to want the cures too much to ask where the organs came from.',
    },
    {
      term: 'retrospective first-person narrator',
      definition:
        'A narrator telling their own story after the events, as Kathy does at thirty-one. The gap between the younger self and the older teller lets her judge, correct and withhold.',
    },
    {
      term: 'dramatic irony',
      definition:
        'When the reader understands more than a character does. Once the truth is clear, every hopeful plan in the novel, from the possible to the deferral, carries it.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore another moment in Never Let Me Go where a character is made to face the truth about their future.',
        skill: 'Whole-text response on one chosen moment, in the style of OCR GCSE part (b)',
        guidance: [
          'Choose one moment and name it precisely: Miss Lucy in the pavilion (Chapter 7), Ruth after the gallery in Cromer (Chapter 14), Miss Emily in Littlehampton (Chapter 22) or Tommy asking for a different carer (Chapter 23) all work.',
          'Open by placing the moment: what the character believed beforehand, and what they now have to face.',
          'Analyse two or three short quotations at word level, for example the repeated “none of you” and the passive “Your lives are set out for you” in Chapter 7.',
          'Explain how Ishiguro shapes the moment: who speaks, who stays silent, and how Kathy’s calm narration holds back the shock.',
          'Bring in context only where it explains the moment, for instance Ishiguro’s interest in how children are given the truth about the adult world in small pieces.',
          'Finish with a judgement: does facing the truth change the character, and what does the novel suggest about knowledge without any power to act on it?',
        ],
      },
      {
        question:
          'Read the passage in Chapter 22 in which Miss Emily talks about the deferral rumour, from “When we still had Hailsham, we’d get two or three couples each year” to “But there it is.” How does Ishiguro present Miss Emily’s attitude to the students in this passage?',
        skill:
          'Close analysis of an extract (in the OCR paper, this would be compared with an unseen extract)',
        guidance: [
          'Track the shift in her tone: from brisk talk of couples breaking the rules, to her theory that the rumour cannot be stamped out, to regret addressed directly to Kathy and Tommy.',
          'Analyse her self-justification: the diminutive in “a little fantasy”, the question that follows it, and her distance from Madame’s harsher “If they’re so foolish, let them believe it”.',
          'Weigh the praise in “You’ve hoped carefully”: does it comfort them, or does it patronise them?',
          'Notice what is not said: the passage is almost all Miss Emily; Kathy asks one question and Tommy is silent. Ask what that imbalance of voices shows about power.',
          'Conclude on her mixture of real regret and self-protection, using the shrug of the closing words.',
        ],
      },
      {
        question:
          'Compare the ways in which the writers of your two chosen texts present the human cost of scientific progress. You must relate your discussion to relevant contextual factors.',
        skill:
          'Comparative essay, in the style of Pearson Edexcel A level Paper 2 (Science and Society)',
        guidance: [
          'Pair Never Let Me Go with a pre-1900 text from the theme, such as Frankenstein or The War of the Worlds; on Pearson’s paper one of your two texts must be pre-1900.',
          'Write one comparative argument, not two essays. For example: Shelley places the cost on a single creator and his creation, while Ishiguro spreads it across a whole society that has quietly agreed to pay with other people’s lives.',
          'Compare narrative methods: a novel of several narrating voices against Kathy’s single euphemistic one, and Miss Emily’s history lesson in Chapter 22 as the only account of the science Ishiguro gives.',
          'Keep context attached to the texts: for Ishiguro, the cloning debate after Dolly the sheep and the United Nations declaration on human cloning in 2005, which Pearson’s own mark scheme cites; for the older text, the scientific debates of its own time.',
          'Weigh alternative readings: Ishiguro’s 2025 introduction asks whether the novel is a warning about man-made systems or a metaphor for the human condition, and says it may be trying to be both.',
          'End with a comparative judgement, for example about which text makes its reader more complicit.',
        ],
      },
      {
        question:
          '‘The real horror of Never Let Me Go is not what is done to the students but how calmly they accept it.’ How far do you agree?',
        skill: 'Whole-text argument with alternative interpretations (A level)',
        guidance: [
          'Define your terms: what counts as acceptance in this novel, and what counts as protest?',
          'Build the case for agreeing: Kathy’s euphemistic narration, the absence of any escape attempt, her silence in the churchyard (Chapter 16) and Tommy’s river image (Chapter 23).',
          'Build the case against: Tommy’s rages (Chapters 1 and 22), Miss Lucy’s outburst (Chapter 7), Ruth’s search for her possible (Chapters 12 to 14) and Kathy’s “But for us, it’s our life” (Chapter 22) all show feeling the system cannot erase.',
          'Turn to the reader: Ishiguro reveals the system so gradually that we accept it too. Is our calm part of the horror?',
          'Use authorial and critical views briefly: Ishiguro has written that one of the two questions readers most often ask him is why the students do not run away, and M John Harrison’s 2005 Guardian review said the novel is about “the steady erosion of hope”.',
          'Reach a clear, qualified judgement and hold to it through the conclusion.',
        ],
      },
    ],
    tips: [
      'Quote short and exactly. A two- to six-word phrase you can analyse closely, such as “lucky pawns” or “old kind world”, is worth more than a long quotation half remembered. Several lines attributed to this novel online are not in it, so check any quotation against your own copy before you learn it.',
      'Get the speakers right. It is Madame, not Miss Emily, who describes the harsh new world and the little girl holding the old kind one; it is Tommy, not Kathy, who imagines the two people in the river; Kathy, not Tommy, finds the replacement tape.',
      'Locate every moment by chapter or scene: Madame in the courtyard is Chapter 3, the dance Chapter 6, Miss Lucy in the pavilion Chapter 7, Ruth’s apology Chapter 19, Littlehampton Chapters 21 and 22. Precise reference is one of the clearest signs of whole-text knowledge.',
      'Treat Kathy’s calm as Ishiguro’s choice, not a flaw in the book. The strongest answers ask what the restraint makes the reader feel and do, rather than complaining that she does not rebel.',
      'Never call the students robots or say they have no feelings. The novel argues the opposite, through jealousy, love, art and grief, and an answer that misses this misreads the book.',
      'Use context that explains the text: the late-1990s cloning debate, Ishiguro’s decision to set the novel in a recent past rather than the future, and his own description of the boarding school as a metaphor for how all children learn about the adult world.',
      'Know your paper. OCR’s GCSE paper is closed book, so learn short phrases; Pearson’s A level prose paper in June 2024 allowed clean copies, so the credit there goes to analysis and comparison rather than recall.',
    ],
  },

  modelAnswer: {
    question:
      '‘The real horror of Never Let Me Go is not what is done to the students but how calmly they accept it.’ How far do you agree?',
    paragraph:
      'Ishiguro makes the students’ acceptance disturbing, but he does not make it complete, and the difference matters. In Chapter 22 Miss Emily tells Kathy and Tommy that they were “lucky pawns”, an image that admits they were sacrificed while asking them to be grateful for the manner of it. Kathy’s reply, “But for us, it’s our life”, is quiet, yet its pronouns reject Miss Emily’s whole historical view: for the guardians Hailsham was a cause that rose and fell with public opinion, for the students it was everything they had. Ishiguro then withholds any action that might follow from this protest. On the drive back Tommy’s rage in the dark field, “flinging his fists and kicking out”, is as violent as anything in the novel, yet it ends with Kathy holding him until he is still, and they drive on. The feeling is real; the system is untouched. This suggests that the horror lies less in the students’ calm than in a world arranged so that their protest has nowhere to go, and the reader, who has absorbed the truth as gradually as they have, is drawn into the same calm.',
    commentary: [
      'It answers “how far” at once with a qualified position, disturbing but not complete, and then argues for it rather than simply describing the plot.',
      'Each quotation is short, given to the right speaker and chapter, and analysed at word level: the image of pawns, the pronouns “us” and “our”.',
      'It uses structure as well as language, moving from a spoken protest to a physical one and noticing that the novel gives neither any consequence.',
      'The last sentence turns to the reader, which is the evaluative, whole-text move that separates the strongest answers from competent ones.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1, the opening',
      title: 'A carer looks back',
      summary:
        'Kathy H., thirty-one, has been a carer for over eleven years and will stop at the end of the year. Because she is good at the work she may choose some of her donors, which is how she came to care for Ruth and to get close again to Tommy. A dying donor who wanted to hear everything about Hailsham turned her back towards her own memories.',
      setting: 'Recovery centres and the roads between them, England, late 1990s',
      who: ['Kathy H.'],
      quote: 'I’ve been a carer now for over eleven years',
      themes: ['Memory, time and narrative', 'Mortality and acceptance'],
      tension: 1,
      significance:
        'The calm, professional voice and the unexplained words carer and donor set the method: the horror is in plain sight long before it is understood.',
    },
    {
      where: 'Chapter 1, the football',
      title: 'Tommy’s rage on the playing field',
      summary:
        'When Kathy’s year are about twelve, the boys deliberately leave Tommy until last when picking football teams, and he erupts in a rage in the field while the girls watch from the pavilion. Kathy goes out to him, is caught on the face by his flailing arm, and calms him by pointing out the mud on his favourite polo shirt.',
      setting: 'The sports pavilion and the playing field at Hailsham',
      who: ['Tommy D.', 'Kathy H.', 'Ruth'],
      quote: 'thunderous bellowing',
      themes: ['Love, friendship and loss', 'Education, institutions and indoctrination'],
      tension: 3,
      significance:
        'Kathy’s first act in the story is to look after Tommy, and his rage is the first feeling Hailsham cannot contain. It returns, in an adult, in Chapter 22.',
    },
    {
      where: 'Chapter 3, the pond',
      title: 'Miss Lucy’s secret',
      summary:
        'By the pond, Tommy tells Kathy that Miss Lucy called him to her study and told him it did not matter if he was not creative. The conversation sets Kathy asking why Madame comes, what her Gallery is, and why Hailsham values the students’ art so highly.',
      setting: 'The pond to the south of the main house, Hailsham',
      who: ['Tommy D.', 'Kathy H.'],
      themes: ['Education, institutions and indoctrination', 'Identity, soul and personhood'],
      tension: 2,
      significance:
        'The first crack in Hailsham’s story about itself, and the start of the long private investigation Kathy and Tommy carry on for the rest of the novel.',
    },
    {
      where: 'Chapter 3, Madame’s visit',
      title: 'Madame is afraid of them',
      summary:
        'To test Ruth’s theory that Madame is scared of the students, six girls wait for her by the main doorway and walk out around her all at once. She freezes, and Kathy sees her hold back a shudder of real dread at the thought of being touched. The girls walk away badly shaken.',
      setting: 'The courtyard in front of the main house, Hailsham',
      who: ['Kathy H.', 'Ruth', 'Madame (Marie-Claude)'],
      quote: 'the same way someone might be afraid of spiders',
      themes: ['Identity, soul and personhood'],
      tension: 3,
      significance:
        'The first time the children see themselves as outsiders see them, as something other than human, long before anyone tells them why.',
    },
    {
      where: 'Chapter 6',
      title: 'Madame watches Kathy dance',
      summary:
        'At eleven, alone in her dorm one sunny afternoon, Kathy sways to her favourite song on a Judy Bridgewater tape, holding a pillow as if it were a baby, and opens her eyes to find Madame in the doorway, crying. A couple of months later the tape disappears, and the friends’ in-joke says it has gone to Norfolk, where lost things end up.',
      setting: 'A six-bed dorm in the huts at Hailsham',
      who: ['Kathy H.', 'Madame (Marie-Claude)'],
      quote: 'lost corner',
      themes: ['Love, friendship and loss', 'Memory, time and narrative'],
      tension: 3,
      significance:
        'The scene the novel is named after, and a riddle not solved until Madame gives her own reading of it in Chapter 22.',
    },
    {
      where: 'Chapter 7',
      title: 'Miss Lucy tells them the truth',
      summary:
        'At fifteen, in their last year, the class shelters from the rain in the pavilion before rounders. Overhearing two boys talk about becoming actors in America, Miss Lucy tells them plainly that none of them will have such lives: they will begin to donate their vital organs before they are even middle-aged.',
      setting: 'The sports pavilion in a downpour',
      who: ['Miss Lucy', 'Kathy H.'],
      quote: 'you’ve been told and not told',
      themes: ['Education, institutions and indoctrination', 'Mortality and acceptance'],
      tension: 4,
      significance:
        'The truth is spoken aloud at Hailsham for the only time, and almost nothing changes, which is the novel’s point about how knowledge is absorbed.',
    },
    {
      where: 'Chapter 9',
      title: 'Miss Lucy disappears',
      summary:
        'Miss Lucy tells Tommy she was wrong to say creativity did not matter and that he must make up for lost time. Soon afterwards Miss Emily breaks off in the middle of a class to announce that Miss Lucy has left Hailsham and will not be coming back, and Tommy and Ruth become a couple again.',
      setting: 'Hailsham, the final year',
      who: ['Miss Lucy', 'Tommy D.', 'Miss Emily', 'Ruth', 'Kathy H.'],
      themes: ['Education, institutions and indoctrination', 'Love, friendship and loss'],
      tension: 3,
      significance:
        'The one adult who insisted on the whole truth is quietly removed, and the students turn to one another for security.',
    },
    {
      where: 'Chapter 10',
      title: 'The Cottages',
      summary:
        'At sixteen the Hailsham group move to the Cottages, the converted buildings of an old farm, where they live with the older students, the veterans, and no guardians, visited only by Keffers, a grumbling old man who calls two or three times a week. Kathy notices the veteran couples copy their gestures from television, and that Ruth copies the veterans.',
      setting: 'The Cottages, a converted farm',
      who: ['Kathy H.', 'Ruth', 'Tommy D.', 'Chrissie and Rodney'],
      themes: ['Identity, soul and personhood', 'Love, friendship and loss'],
      tension: 2,
      significance:
        'Freedom without a future: the young people imitate adult life from television because no adult life is waiting for them.',
    },
    {
      where: 'Chapter 13',
      title: 'The deferral rumour',
      summary:
        'Chrissie and Rodney drive Kathy, Ruth and Tommy to Cromer on the north Norfolk coast, where Rodney thinks he has seen Ruth’s possible. In a seafront café they press the Hailsham three about a rumour that couples who can prove they are truly in love may have their donations put back by three or four years.',
      setting: 'A seafront café in Cromer, Norfolk',
      who: ['Chrissie and Rodney', 'Ruth', 'Kathy H.', 'Tommy D.'],
      themes: ['Love, friendship and loss', 'Mortality and acceptance'],
      tension: 2,
      significance:
        'Hope arrives as a rumour, and the rest of the plot is driven by a belief the reader may already suspect is false.',
    },
    {
      where: 'Chapter 14',
      title: 'Ruth’s possible',
      summary:
        'The group follow the woman from her office to a small art gallery, where, close up, she seems less and less like Ruth. Out in the street afterwards, Ruth turns on the others and insists that the students are copied from the lowest people in society.',
      setting: 'The Portway Studios gallery and the streets of Cromer',
      who: ['Ruth', 'Kathy H.', 'Tommy D.', 'Chrissie and Rodney'],
      quote: 'We’re modelled from trash.',
      themes: ['Identity, soul and personhood'],
      tension: 4,
      significance:
        'The search for an origin ends in self-contempt, and shows how deeply the students have absorbed the world’s view of them.',
    },
    {
      where: 'Chapter 15',
      title: 'The tape is found',
      summary:
        'Left to themselves in Cromer, Kathy and Tommy search the second-hand shops, and Kathy finds a copy of her lost tape. Tommy then explains his theory that the Gallery holds students’ art so couples asking for a deferral can prove their love, and admits he has secretly begun drawing imaginary animals.',
      setting: 'A second-hand shop in Cromer',
      who: ['Kathy H.', 'Tommy D.'],
      themes: ['Love, friendship and loss', 'Memory, time and narrative'],
      tension: 2,
      significance:
        'The novel’s happiest hour: Norfolk briefly gives back what was lost, and Tommy’s theory ties art, love and survival together.',
    },
    {
      where: 'Chapter 16',
      title: 'Ruth turns on Tommy’s animals',
      summary:
        'In a churchyard, Ruth mocks Tommy’s animal drawings and claims that Kathy laughs at them too. Too stunned to deny it, Kathy says nothing, and Tommy is left believing the worst of her.',
      setting: 'A churchyard',
      who: ['Ruth', 'Tommy D.', 'Kathy H.'],
      quote: 'Something in me just gave up.',
      themes: ['Love, friendship and loss'],
      tension: 4,
      significance:
        'Kathy’s silence is a turning point in the friendship, and a small model of the passivity readers argue about.',
    },
    {
      where: 'Chapter 17',
      title: 'Kathy leaves the Cottages',
      summary:
        'After Ruth suggests that Tommy would never want Kathy because of her past relationships, the friendship sours, and one morning Kathy tells Keffers she wants to begin training as a carer. She leaves without settling anything with Ruth or Tommy.',
      setting: 'The Cottages',
      who: ['Kathy H.', 'Ruth', 'Tommy D.'],
      quote: 'powerful tides tugging us apart',
      themes: ['Love, friendship and loss', 'Mortality and acceptance'],
      tension: 3,
      significance: 'Kathy takes the only road open to her, and the three are separated for years.',
    },
    {
      where: 'Chapter 18',
      title: 'Hailsham is closing',
      summary:
        'Years later Kathy is driving between centres as a carer. She hears that Hailsham is closing, hears again from Laura, met in a service-station car park, the rumour that Ruth’s first donation went badly, and becomes Ruth’s carer at a recovery centre in Dover.',
      setting: 'Car parks and recovery centres, and a centre in Dover',
      who: ['Kathy H.', 'Ruth'],
      themes: ['Memory, time and narrative', 'Mortality and acceptance'],
      tension: 2,
      significance:
        'With Hailsham gone, the past can survive only in memory, and Kathy begins to gather what is left of it.',
    },
    {
      where: 'Chapter 19, the boat',
      title: 'The boat and Ruth’s apology',
      summary:
        'Kathy drives Ruth to collect Tommy from the Kingsfield centre, and the three walk through thin woods to a boat stranded in the marshes. In the car afterwards Ruth confesses that she kept Kathy and Tommy apart, urges them to ask for a deferral, and gives them Madame’s address.',
      setting: 'A beached boat in open marshland, then the car home',
      who: ['Ruth', 'Kathy H.', 'Tommy D.'],
      quote: 'That was the worst thing I did.',
      themes: ['Love, friendship and loss'],
      tension: 4,
      significance:
        'Ruth’s apology is the most generous act in the novel, and it sets up the final hope.',
    },
    {
      where: 'Chapter 19, Ruth’s last hours',
      title: 'Ruth after her second donation',
      summary:
        'After her second donation it is clear Ruth will not survive. Kathy sits holding her hand for hours; for a few seconds Ruth looks straight at her and knows her, and Kathy quietly promises to become Tommy’s carer. Ruth completes.',
      setting: 'A room in a recovery centre, in the small hours',
      who: ['Ruth', 'Kathy H.'],
      themes: ['Mortality and acceptance', 'Love, friendship and loss'],
      tension: 5,
      significance:
        'The friendship ends in understanding without words, and Kathy’s promise drives the last part of the novel.',
    },
    {
      where: 'Chapter 20',
      title: 'Kathy becomes Tommy’s carer',
      summary:
        'Almost a year after the boat trip, and not long after Tommy’s third donation, Kathy becomes his carer at the Kingsfield. They become lovers at last, and Tommy works on his animal drawings in front of her, preparing to take them to Madame.',
      setting: 'Tommy’s room at the Kingsfield recovery centre',
      who: ['Kathy H.', 'Tommy D.'],
      themes: ['Love, friendship and loss', 'Mortality and acceptance'],
      tension: 2,
      significance:
        'What Ruth kept from them arrives too late, with the fourth donation already in view.',
    },
    {
      where: 'Chapter 21',
      title: 'Madame’s house',
      summary:
        'Carrying Tommy’s notebooks, Kathy and Tommy follow Madame through Littlehampton to her house near the seafront and speak to her at her gate; she lets them in. As they explain why they have come, a frail figure in a wheelchair is wheeled into the room: Miss Emily.',
      setting: 'Madame’s house in Littlehampton, on the south coast',
      who: ['Kathy H.', 'Tommy D.', 'Madame (Marie-Claude)', 'Miss Emily'],
      quote: 'Poor creatures. What did we do to you? With all our schemes and plans?',
      themes: ['Identity, soul and personhood', 'Love, friendship and loss'],
      tension: 4,
      significance:
        'The two adults who shaped the students’ childhood are found together, living with the results of their own project.',
    },
    {
      where: 'Chapter 22, the revelation',
      title: 'There are no deferrals',
      summary:
        'Miss Emily tells them deferrals never existed. Hailsham was part of a movement to raise students humanely and to show they had souls, and the Gallery was evidence for a doubting public; after the Morningdale scandal, support vanished and Hailsham closed.',
      setting: 'Madame’s front room in Littlehampton',
      who: ['Miss Emily', 'Madame (Marie-Claude)', 'Kathy H.', 'Tommy D.'],
      quote: 'we did it to prove you had souls at all',
      themes: [
        'Identity, soul and personhood',
        'Ethics of biotechnology',
        'Education, institutions and indoctrination',
      ],
      tension: 5,
      significance:
        'Every mystery of Hailsham is solved at once, and the answer is worse than any of the students’ theories.',
    },
    {
      where: 'Chapter 22, the dance explained',
      title: 'Madame’s reading of the dance',
      summary:
        'Kathy asks Madame why she cried when she watched her dance years before. Madame says she saw a harsh, efficient new world arriving and a little girl with her eyes closed clinging to the gentler old one, pleading not to be let go.',
      setting: 'The pavement outside Madame’s house, as they leave',
      who: ['Madame (Marie-Claude)', 'Kathy H.', 'Tommy D.'],
      quote: 'holding to her breast the old kind world',
      themes: ['Ethics of biotechnology', 'Love, friendship and loss'],
      tension: 4,
      significance:
        'The title’s meaning widens from one child’s longing to a whole world’s loss, seen by an adult who helped bring it about.',
    },
    {
      where: 'Chapter 22, the drive back',
      title: 'Tommy’s last rage',
      summary:
        'On the dark road back, Tommy asks Kathy to stop the car, disappears into a field and rages as he did as a boy. Kathy runs to him and holds him until he is still; later, driving on, she suggests that perhaps at some level he always knew.',
      setting: 'A windswept field beside a dark country road',
      who: ['Tommy D.', 'Kathy H.'],
      quote: 'flinging his fists and kicking out',
      themes: ['Mortality and acceptance', 'Love, friendship and loss'],
      tension: 5,
      significance:
        'The childhood tantrum of Chapter 1 returns as an adult’s grief, and it changes nothing.',
    },
    {
      where: 'Chapter 23, the Kingsfield',
      title: 'Tommy lets Kathy go',
      summary:
        'After the notice for his fourth donation arrives, Tommy asks for a different carer. He tells Kathy about two people in a fast river who cannot keep hold of each other, and they part. Kathy later hears that he has completed.',
      setting: 'The Kingsfield recovery centre',
      who: ['Tommy D.', 'Kathy H.'],
      quote: 'The current’s too strong. They’ve got to let go, drift apart.',
      themes: ['Love, friendship and loss', 'Mortality and acceptance'],
      tension: 4,
      significance:
        'The lovers separate by choice rather than by force, and the choice is itself a form of acceptance.',
    },
    {
      where: 'Chapter 23, the last page',
      title: 'Kathy in Norfolk',
      summary:
        'A couple of weeks after hearing Tommy has completed, Kathy drives to Norfolk and stops by a fence where rubbish has blown against the wire. She lets herself imagine that everything she has lost has washed up there and that Tommy might appear across the field, then returns to her car.',
      setting: 'A barbed-wire fence at the edge of a ploughed field in Norfolk',
      who: ['Kathy H.'],
      quote: 'the spot where everything I’d ever lost since my childhood had washed up',
      themes: [
        'Memory, time and narrative',
        'Mortality and acceptance',
        'Love, friendship and loss',
      ],
      tension: 3,
      significance:
        'The lost-corner joke of Chapter 6 becomes the last image, and Kathy allows herself one fantasy before returning to duty.',
    },
  ],

  relationships: [
    {
      from: 'Kathy H.',
      to: 'Tommy D.',
      kind: 'childhood friends, then lovers; carer and donor',
      note: 'From calming his rage in Chapter 1 to his request for a different carer in Chapter 23, Kathy looks after Tommy. Others, Ruth included, can see what they mean to each other, and it is fulfilled only when there is no time left.',
    },
    {
      from: 'Kathy H.',
      to: 'Ruth',
      kind: 'best friends and rivals',
      note: 'Ruth usually leads and Kathy usually gives way, from Hailsham to the Cottages, and their quarrels are usually about Tommy or about who remembers Hailsham truly. At the end Kathy becomes Ruth’s carer and Ruth apologises.',
    },
    {
      from: 'Ruth',
      to: 'Tommy D.',
      kind: 'a couple, on and off',
      note: 'A couple at Hailsham and the Cottages, though Ruth mocks his animals in front of Kathy (Chapter 16). Ruth later admits she kept him from Kathy and tries to put it right.',
    },
    {
      from: 'Miss Lucy',
      to: 'Tommy D.',
      kind: 'guardian and student',
      note: 'She tells him it does not matter if he is not creative (Chapter 3), then takes it back before she leaves Hailsham (Chapter 9). After Littlehampton Tommy decides she was right and Miss Emily wrong.',
    },
    {
      from: 'Miss Emily',
      to: 'Madame (Marie-Claude)',
      kind: 'partners in the Hailsham project',
      note: 'They started out together on the project that became Hailsham and now live together in Littlehampton. Miss Emily calls her darling, and reports Madame’s colder view of the students’ hopes, which makes her own sound kinder.',
    },
    {
      from: 'Miss Emily',
      to: 'Miss Lucy',
      kind: 'head guardian and dismissed guardian',
      note: 'In Chapter 22 Miss Emily calls Lucy Wainright idealistic but with no grasp of practicalities, and says her honesty would have shattered the students’ happiness.',
    },
    {
      from: 'Madame (Marie-Claude)',
      to: 'Kathy H.',
      kind: 'watcher and watched',
      note: 'Madame recoils from the girls in Chapter 3 and weeps at Kathy’s dance in Chapter 6. Only in Chapter 22 does Kathy learn what Madame saw.',
    },
    {
      from: 'Chrissie and Rodney',
      to: 'Ruth',
      kind: 'veterans and admirer',
      note: 'Ruth copies the older couple at the Cottages. They bring the story of her possible and the deferral rumour, and drive the group to Cromer.',
    },
  ],

  compareWith: [
    {
      title: 'Frankenstein',
      href: '/revision/texts/frankenstein',
      reason:
        'A pre-1900 partner in Pearson Edexcel A level’s Science and Society theme: both ask what is owed to a being made for a purpose, one through a creature who rebels and one through students who do not.',
    },
    {
      title: 'The War of the Worlds',
      href: '/revision/texts/the-war-of-the-worlds',
      reason:
        'The other pre-1900 text in the same Pearson theme: Wells shows a society devastated from outside, Ishiguro one that has quietly done the damage to itself.',
    },
    {
      title: 'Klara and the Sun',
      href: '/revision/texts/klara-and-the-sun',
      reason:
        'Ishiguro’s 2021 novel is again told by a made being in a calm, limited voice, and again asks whether anything in a person cannot be copied.',
    },
  ],

  contentGuidance: ['mortality', 'crime_injustice', 'discrimination', 'intimate_relationships'],

  quotesFromElsewhere: [
    // M John Harrison, review, the Guardian, 26 February 2005.
    'the steady erosion of hope',
    // The wording of the essay question the model answer addresses.
    'how far',
  ],

  sources: [
    {
      label:
        'A full-text copy of the Faber edition found online (British spellings; Parts One to Three, Chapters One to Twenty-Three). Used to confirm the exact wording, speaker and chapter of every quotation and plot detail in this guide, and to estimate the word count. Not linked: it does not appear to be an authorised copy. No quotation rests on it alone.',
    },
    {
      label:
        'OCR, GCSE English Literature J352/01 question paper, June 2023. Prints the Chapter 22 passage on the deferral rumour, by permission; source for “When we still had Hailsham, we’d get two or three couples each year”, “it’s not just a single rumour”, “If they’re so foolish, let them believe it”, “It’s something for them to dream about, a little fantasy. What harm is there?”, “You’ve hoped carefully”, “It gives me no pleasure at all to disappoint you” and “But there it is.”',
      url: 'https://www.ocr.org.uk/Images/705069-question-paper-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR, J352/01 mark scheme, June 2023: Madame’s “someone might be afraid of spiders” as a dehumanising simile; Miss Emily’s language of self-justification; chapter locations of Miss Lucy (7 to 9), the possible (12), the first mention of deferrals (13), the news of Hailsham closing (18) and Ruth’s confession (19).',
      url: 'https://www.ocr.org.uk/Images/705075-mark-scheme-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR, J352/01 question paper and mark scheme, June 2024. The paper prints the Chapter 2 passage on Tommy’s art (“deliberately childish pictures”); the mark scheme quotes “thunderous bellowing” and places Kathy’s visit to Ruth after her second donation in Chapter 19.',
      url: 'https://www.ocr.org.uk/Images/727830-question-paper-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label: 'OCR, J352/01 mark scheme, June 2024.',
      url: 'https://www.ocr.org.uk/Images/727832-mark-scheme-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR, J352/01 question paper and mark scheme, June 2025. The paper prints Kathy’s visit to Ruth after her second donation, which fixes Ruth’s death at the second donation, not the third.',
      url: 'https://www.ocr.org.uk/Images/753564-question-paper-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label: 'OCR, J352/01 mark scheme, June 2025.',
      url: 'https://www.ocr.org.uk/Images/753566-mark-scheme-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR (Cambridge OCR), J352/01 sample assessment materials, version 1, April 2026: the question format for part (a) and part (b), the Chapter 7 elbow extract, and the mark scheme’s “little leap” and list of moments between Tommy and Kathy. Credits the text as published by Faber and Faber.',
      url: 'https://www.ocr.org.uk/Images/169188-unit-j352-01-exploring-modern-and-literary-heritage-texts-sample-assessment-materials.pdf',
    },
    {
      label:
        'OCR, GCSE (9-1) Delivery Guide: Never Let Me Go, April 2015. The dateline “England, late 1990s”; Judy Bridgewater as a fictional singer; the opening and the ending as the two key passages, with “I found I was standing before acres of ploughed earth”, “a tiny figure would appear on the horizon across the field” and “to drive off to wherever it was I was supposed to be”; Ishiguro’s BookBrowse interview on alternative history. Its own plot summary says Kathy cares for Tommy until he dies, which the novel contradicts, so it was not used for plot.',
      url: 'https://www.ocr.org.uk/Images/208646-never-let-me-go-delivery-guide.pdf',
    },
    {
      label:
        'Pearson Edexcel A level English Literature 9ET0/02 question paper, 5 June 2024: Science and Society texts (Frankenstein, The War of the Worlds, Never Let Me Go, The Handmaid’s Tale), one text to be pre-1900, clean copies allowed, and the question form “Compare the ways in which the writers of your two chosen texts present …”.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A-Level/English-Literature/2015/Exam-materials/9et0-02-que-20240606.pdf',
    },
    {
      label:
        'Pearson Edexcel 9ET0/02 mark scheme, summer 2024: barriers and fences as symbols of isolation; euphemism and elliptical style; passivity and acceptance; the 2005 United Nations declaration on human cloning as context.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A-Level/English-Literature/2015/Exam-materials/9et0-02-rms-20240815.pdf',
    },
    {
      label:
        'Publisher’s excerpt of Chapter 1 (by permission of Knopf), on BookBrowse: “I’ve been a carer now for over eleven years” and “even before fourth donation”.',
      url: 'https://www.bookbrowse.com/excerpts/index.cfm/book_number/1556/never-let-me-go',
    },
    {
      label:
        'Penguin Random House reading guide: “the spot where everything I’d ever lost since my childhood had washed up”, “all sorts of rubbish had caught and tangled”, “even before fourth donation” and “I don’t know how it was where you were”.',
      url: 'https://www.penguinrandomhouse.com/books/85609/never-let-me-go-by-kazuo-ishiguro-with-a-new-introduction/9781400078776',
    },
    {
      label:
        'LitCharts, Miss Lucy character page (read through a fetch tool): the Chapter 7 speech, including “you’ve been told and not told”, “know and know properly”, “Your lives are set out for you” and “That’s what each of you was created to do”, and Tommy’s report of Miss Lucy in Chapter 2.',
      url: 'https://www.litcharts.com/lit/never-let-me-go/characters/miss-lucy',
    },
    {
      label:
        'Shmoop, quotation pages for Miss Lucy, Miss Emily and Tommy, and chapter summaries: “None of you will go to America, none of you will be film stars”, “You were lucky pawns”, “we did it to prove you had souls at all”, “The current’s too strong. They’ve got to let go, drift apart”, “the same way someone might be afraid of spiders”, “lost corner”, “flinging his fists and kicking out”, “Something in me just gave up” and “to drive off to wherever it was I was supposed to be”.',
      url: 'https://www.shmoop.com/study-guides/never-let-me-go/miss-emily-quotes.html',
    },
    {
      label:
        'GradeSaver, quotes and analysis: “We’re modelled from trash”, “Something in me just gave up”, “powerful tides tugging us apart”, “You were lucky pawns” and “I don’t know how it was where you were”. One GradeSaver quotation (“If you’re to live decent lives …”) does not match the novel, so nothing rests on GradeSaver alone.',
      url: 'https://www.gradesaver.com/never-let-me-go/study-guide/quotes',
    },
    {
      label:
        'Education Quizzes, GCSE Never Let Me Go illustrating and supporting points: corroborates “the same way someone might be afraid of spiders”, “being the spiders” and “We’re modelled from trash”.',
      url: 'https://www.educationquizzes.com/gcse/english-literature/never-let-me-go-illustrating-and-supporting-points/',
    },
    {
      label:
        'The Center for Bioethics and Human Dignity, review “The Banality of Evil”: prints Madame’s Chapter 22 speech, including “holding to her breast the old kind world”.',
      url: 'https://www.cbhd.org/cbhd-resources/the-banality-of-evil-a-review-of-kazuo-ishiguros-never-let-me-go',
    },
    {
      label:
        'Goodreads quotation pages and readers’ Kindle highlights, used for corroboration only: “That was the worst thing I did”, “But for us, it’s our life”, “holding to her breast the old kind world” and others. Goodreads users print some lines in more than one version, which is why variant lines were avoided.',
      url: 'https://www.goodreads.com/work/quotes/1499998-never-let-me-go',
    },
    {
      label:
        'Kazuo Ishiguro, “Future imperfect”, the Guardian, 25 March 2006: the students novel attempted through the 1990s, the radio discussion of biotechnology, never setting it in the future, and the boarding school as a metaphor for how children are drip-fed information about the adult world.',
      url: 'https://www.theguardian.com/books/2006/mar/25/featuresreviews.guardianreview36',
    },
    {
      label:
        'Kazuo Ishiguro, introduction to the twentieth-anniversary edition, as published by Literary Hub, 5 May 2025: attempts in 1990 and 1995; the first of the two kinds of question readers most often ask, why the students do not run away; the novel as a metaphor for man-made systems or for the human condition, or both.',
      url: 'https://lithub.com/kazuo-ishiguro-reflects-on-never-let-me-go-20-years-later/',
    },
    {
      label:
        'M John Harrison, “Clone alone”, review, the Guardian, 26 February 2005: the novel as being about the steady erosion of hope rather than cloning.',
      url: 'https://www.theguardian.com/books/2005/feb/26/bookerprize2005.bookerprize',
    },
    {
      label:
        'Frank Kermode, “Outrageous Game”, London Review of Books, 21 April 2005: the dateline, the lost corner, and Madame’s “You poor creatures”.',
      url: 'https://www.lrb.co.uk/the-paper/v27/n08/frank-kermode/outrageous-game',
    },
    {
      label:
        'Louis Menand, “Something About Kathy”, the New Yorker, 28 March 2005 issue: the dateline and the vocabulary of carers and donations.',
      url: 'https://www.newyorker.com/magazine/2005/03/28/something-about-kathy',
    },
    {
      label:
        'Rachel Cusk, “Rereading: Never Let Me Go”, the Guardian, 29 January 2011: the opening sentence and the dying donor in Chapter 1.',
      url: 'https://www.theguardian.com/books/2011/jan/29/never-let-me-go-kazuo-ishiguro',
    },
    {
      label:
        'Wikipedia, Never Let Me Go (novel): Faber and Faber, 2005, 288 pages; shortlisted for the 2005 Booker Prize; Ishiguro’s sixth novel. Its plot summary was not used.',
      url: 'https://en.wikipedia.org/wiki/Never_Let_Me_Go_(novel)',
    },
  ],
}
