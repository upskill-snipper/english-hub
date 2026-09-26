import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A View from the Bridge, Arthur Miller. A supplement: the page at
 * /revision/texts/a-view-from-the-bridge keeps its overview, context, themes,
 * characters, key quotations, notes on structure and model writing, and this
 * file adds what it lacked (passages for close reading, language analysis,
 * vocabulary and exam practice) together with the timeline and character map
 * the visuals draw.
 *
 * EDITION. Pearson prescribes two editions for the open-book 4ET1 Paper 2: the
 * Penguin Modern Classics edition of March 2010 (ISBN 9780141189963) and the
 * Bloomsbury edition of June 2022 (ISBN 9781350245785) (specification Issue 3,
 * August 2025, Appendix 3). Every quotation here, and its speaker, was checked
 * on 26 September 2026 against the Internet Archive's scan of that Penguin
 * edition, through the Archive's full-text search (which returns a few words
 * either side of a match, never the book), and against a second scan, the
 * Bloomsbury Methuen Drama student edition of 2010. Both print the same words
 * for every line used here; where punctuation differs, the Penguin's is given.
 *
 * PAGE NUMBERS are the Penguin's. Its contents page gives Act One, p. 1 and Act
 * Two, p. 47. The rest were fixed by searching for the running heads ("42 ACT
 * ONE", "A VIEW FROM THE BRIDGE 43") and reading which lines sit either side of
 * them. A moment that could not be pinned that way is located by act and scene,
 * or by "from p. N", rather than by a guessed page.
 *
 * THE PAGE ABOVE THIS SUPPLEMENT. Checked against the same two scans, it carries
 * errors, none repeated here. It prints Alfieri's "Most of the time now we
 * settle for half" as his OPENING line: that sentence opens his closing speech,
 * and the opening reads "Now we settle for half, and I like it better." It gives
 * Beatrice "It's your fault, Eddie. Everything.", a garbled form of Rodolpho's
 * apology "It is my fault, Eddie. Everything." It gives Marco's "Animal! You go
 * on your knees to me!" to Eddie. It dates Catherine's "I'm not gonna be a baby
 * any more" to Act One as well as Act Two: it is said once, in Act Two (p. 52).
 * The extract walkthrough prints "dead by now" under a comment calling it
 * verified, where both editions read "In my country he would be dead now." And
 * three of its lines were not found in either edition: Catherine's "You don't
 * know anything", Louis's "Marco goes around shakin' hands", and "He's like a
 * weird... he ain't right", which splices two separate speeches.
 *
 * SECOND CHECK, same day, same two scans. Fixed here, so that no one puts them
 * back: Marco spits in Eddie's face inside the room, after he "dashes into the
 * room", and accuses him in the street afterwards; only one of the two other
 * immigrants is Lipari's nephew; the Vinny Bolzano story, "snitched" and the
 * beating included, is told by Beatrice at Eddie's prompting ("Tell her about
 * Vinny"), not by Eddie; Rodolpho's "I will not marry you to live in Italy"
 * comes before Catherine's "I'm afraid of Eddie here", not in answer to it; the
 * passport talk is in the street, but Beatrice's advice to Catherine follows in
 * the apartment ("They enter the apartment"). When its backend fails, the search
 * service answers HTTP 200 with no hits, flagged only by "succeeded": false in
 * the JSON, so a zero-hit search proves nothing: every line here had a positive
 * match.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; longer passages
 * are pointed to by page and summarised. The song Rodolpho sings is named, never
 * quoted.
 */
export const guide: StudyGuide = {
  slug: 'a-view-from-the-bridge',
  title: 'A View from the Bridge',
  author: 'Arthur Miller',
  form: 'play',
  scope:
    "The whole play, in two acts. For Pearson Edexcel International GCSE English Literature (4ET1) it is one of five modern drama texts. It is examined in Paper 2, Section A, where you write one essay on the whole play from a choice of two questions, or it can be studied for the coursework option instead. Paper 2 is open book: you may take a clean, completely unmarked copy of a prescribed edition into the exam. Page numbers in this guide are those of the prescribed Penguin Modern Classics edition (March 2010, ISBN 9780141189963), where Act One begins on page 1 and Act Two on page 47. The other prescribed edition, Bloomsbury's (June 2022, ISBN 9781350245785), is paged differently, so use the act and the moment to find a passage in it.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Arthur Miller 1955. The copyright page of the prescribed Penguin Modern Classics edition reads 1955, 1957, 1960, renewed 1983, 1985, 1988; that edition was first published in Great Britain by Penguin Classics in 2010 (ISBN 9780141189963), and quotations and page numbers here follow it. Quoted for criticism and review.',
  },
  workLength: {
    words: 18000,
    basis:
      'Estimated, not counted: the play runs from page 1 to the early seventies of the prescribed Penguin edition (Act Two begins on page 47 by its contents page, and page 70 is still in the final scene by its running head), at a rough 250 words to a page of dialogue and stage directions. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  native: {
    overview: '/revision/texts/a-view-from-the-bridge',
    context: '/revision/texts/a-view-from-the-bridge',
    themes: '/revision/texts/a-view-from-the-bridge',
    characters: '/revision/texts/a-view-from-the-bridge',
    keyQuotes: '/revision/texts/a-view-from-the-bridge',
    structureForm: '/revision/texts/a-view-from-the-bridge',
    modelAnswer: '/revision/texts/a-view-from-the-bridge',
  },

  extracts: [
    {
      title: "Alfieri's opening speech",
      where: 'Act One, the opening (pp. 1 to 3)',
      pointer:
        'From the opening stage directions and the entrance of Alfieri, a lawyer in his fifties, to the moment he names the man at the centre of the case, at the top of page 3: “This one’s name was Eddie Carbone”.',
      summary:
        'Before any of the story is shown, Alfieri, a local lawyer, speaks directly to the audience. He explains that his neighbours are uneasy with lawyers, because in Sicily, where their fathers came from, the law was never on their side. He describes Red Hook as the slum facing the bay, says that people there now settle for half and that he prefers it, and then admits that every few years a case still comes to him that makes him think of some lawyer in ancient Italy, just as powerless, who could only watch a tragedy happen. He ends by naming Eddie Carbone.',
      annotations: [
        {
          phrase: 'three thousand years of distrust',
          note: "The first thing Alfieri tells us is that his profession is distrusted, and the time scale is epic. Miller sets a Brooklyn family quarrel inside the long history of Sicily, so the audience expects something larger than a domestic drama. The distrust of official law also prepares the play's central crime: in this community, going to the authorities means going over to the enemy.",
        },
        {
          phrase: 'the law has not been a friendly idea since the Greeks were beaten',
          note: 'The sentence makes the law an occupying power, something imposed by conquerors, and reaches back to ancient Greece, the home of tragedy. Two ideas the whole play turns on arrive together: a community that keeps its own rules, and a story shaped like a Greek tragedy. Remember it when Marco says the law is not all in a book.',
        },
        {
          phrase: 'the gullet of New York swallowing the tonnage of the world',
          note: "A bodily, violent metaphor: the docks are a throat, and the city eats the world's cargo. The image makes Red Hook a place of appetite and heavy labour rather than of polite society, and it quietly suits a play whose hero is consumed by an appetite he cannot name. It also places these men at the bottom of the city, doing its hardest work.",
        },
        {
          phrase: 'Now we settle for half, and I like it better.',
          note: 'The idea the whole play tests. Compromise is presented as modern and civilised, and the short, calm sentence sounds content. But "settle" can also mean giving up, and Eddie is the man who will not accept half of anything. Miller brings the phrase back twice in the final speech, where Alfieri ends up having to insist on it, which is the best evidence that the play doubts it.',
        },
        {
          phrase: 'watched it run its bloody course',
          note: 'Foreshadowing of the most direct kind: before we have met Eddie, Alfieri tells us that a case like this ended in blood and that the lawyer who heard it was powerless. Miller removes suspense on purpose. The audience, like the audience of a Greek tragedy, watches for how the disaster arrives, and every warning in the play gains weight from knowing it will fail.',
        },
        {
          phrase: 'in some Caesar’s year',
          note: "Alfieri imagines an earlier lawyer in Roman times, in Calabria or on the cliff at Syracuse, hearing the same complaint. The phrase makes Eddie's story feel timeless and repeated, as if it belonged to history rather than to one man, and it gives the narrator a double role: a modern lawyer and something like the chorus of an ancient play.",
        },
      ],
      question:
        "Using Alfieri's opening speech as your starting point, explore how Miller uses Alfieri to prepare the audience for the tragedy. You must consider language, form and structure in your answer.",
    },
    {
      title: 'The boxing lesson and the chair',
      where: 'Act One, the closing scene (pp. 42 to 46)',
      pointer:
        'From Catherine, “flushed with revolt”, asking Rodolpho to dance, on page 42, to the curtain that ends Act One on page 46.',
      summary:
        "After dinner, with Eddie reading his paper in his rocker and a record playing on the phonograph, Catherine defiantly asks Rodolpho to dance. Eddie's remarks about Rodolpho's singing and cooking grow sharper, and he turns the talk to boxing and offers to teach him. The lesson looks friendly until Eddie feints with his left and lands with his right, and the blow mildly staggers Rodolpho. Rodolpho asks Catherine to dance again. Marco answers Eddie without a word of complaint: he asks whether Eddie can lift a chair by the bottom of one leg. Eddie kneels and fails. Marco kneels and slowly raises it high over Eddie's head, and the act ends on a look between the two men.",
      annotations: [
        {
          phrase: 'flushed with revolt',
          note: "A three-word stage direction that tells the actor Catherine knows exactly what she is doing. Inviting Rodolpho to dance in front of Eddie is her first open act of defiance, and the direction that follows has Eddie freeze. Miller gives the conflict to the actors' bodies before anyone says a hostile word.",
        },
        {
          phrase: 'He sings, he cooks, he could make dresses',
          note: 'Eddie introduces this as praise ("It’s wonderful") but it is sarcasm. Every skill on the list is one his world treats as unmanly, so the compliment is an accusation in disguise, and the trailing ellipsis in the text lets the insinuation hang. It is the charge he has already made privately to Alfieri, that Rodolpho "ain’t right", now made in front of the family.',
        },
        {
          phrase: 'Can you lift this chair?',
          note: "Marco rarely speaks, and when he does it is short and plain. He answers Eddie's punch with a polite question rather than a threat, which is more unsettling: it turns a family evening into a contest of strength that Eddie cannot refuse and cannot win. The question keeps Marco's dignity while showing that he has understood exactly what the boxing lesson meant.",
        },
        {
          phrase: 'the chair raised like a weapon over EDDIE’s head',
          note: 'The simile is in the stage directions, not the dialogue. Nothing threatening is said, but the audience sees a weapon held over Eddie, and Miller trusts the image to do the work. It also foreshadows the ending, when a real weapon is turned back on Eddie by the same man, in another scene of kneeling and strength.',
        },
        {
          phrase: 'a glare of warning into a smile of triumph',
          note: 'Marco turns the warning into a smile, so the others can read the moment as a game while Eddie reads it as a message. The antithesis of glare and smile shows how much of this play happens beneath polite surfaces. Honour is defended without a word being spoken, which is exactly the code Eddie will later break.',
        },
        {
          phrase: 'grin vanishes as he absorbs his look',
          note: 'The last words of Act One are a stage direction. The man who has controlled the room all evening is silenced, and the act ends on a look rather than a line. Ending the first half this way carries the tension across the interval, and it is a reminder to write about the play as something staged, where silence and gesture carry meaning.',
        },
      ],
      question:
        'How does Miller use action and stage directions, as well as dialogue, to present the conflict between Eddie and the cousins at the end of Act One?',
    },
    {
      title: "Eddie's death and Alfieri's last speech",
      where: 'Act Two, the final scene (from p. 69 to the end of the play)',
      pointer:
        "From Eddie's cry “I want my name!” at the foot of page 69, through the fight in the street, to Alfieri's last words and the final curtain.",
      summary:
        "Eddie has refused Rodolpho's apology, and says Marco must give him back his name in front of the neighbourhood. Beatrice finally says aloud what Eddie wants, and Catherine cries out in horror. Marco appears in the street; Eddie calls out his own name and goes out to meet him. In front of the neighbours Eddie demands his name back; Marco strikes him and calls him an animal; Eddie pulls a knife, and when he lunges, Marco turns the blade inward. Catherine tells him she never meant to hurt him, and Eddie dies in Beatrice's arms. Alfieri then speaks to the audience for the last time, admitting a love for Eddie he cannot quite justify, and repeating, far less comfortably than before, that it is better to settle for half.",
      annotations: [
        {
          phrase: 'Wipin’ the neighborhood with my name like a dirty rag!',
          note: "A domestic simile for a public disgrace: Eddie's name has become a rag for wiping things clean, soiled and passed around. He blames Marco for the stain, but the audience knows he stained it himself with the phone call. The Brooklyn speech, with its dropped ending, keeps him in his own world even at his most desperate.",
        },
        {
          phrase: 'Animal! You go on your knees to me!',
          note: "Marco's cry denies that Eddie is human at all, and his command demands the humiliation Eddie tried to inflict on Rodolpho. It recalls the chair at the end of Act One, where both men knelt and Marco won. Now the code of honour Marco represents takes its revenge in public, in the street where the neighbours are watching.",
        },
        {
          phrase: 'Then why— Oh, B.!',
          note: "Eddie's question to Catherine breaks off unanswered, and he turns instead to his wife; his last words are a cry to Beatrice. One reading finds a late recognition that she was the person who stayed loyal to him. The more cautious reading notices that the question is never finished, so Eddie dies without ever saying what he wanted.",
        },
        {
          phrase: 'Most of the time now we settle for half and I like it better.',
          note: 'Alfieri begins his last speech by repeating, almost word for word, the sentence from his first. The frame closes, and the audience hears the same calm claim again after watching what refusing it has cost. The next words, which call the truth holy, begin to pull against it.',
        },
        {
          phrase: 'not purely good, but himself purely',
          note: 'A reversal of word order, a chiasmus, that separates goodness from integrity. Alfieri does not pretend Eddie was good; he admires him for being entirely himself. That distinction is how the play claims tragic stature for an ordinary longshoreman whose actions it condemns.',
        },
        {
          phrase: 'it is better to settle for half, it must be!',
          note: 'The idea returns a third time, but now Alfieri has to argue for it, and "it must be" sounds like a man persuading himself. Set beside the calm version a few lines earlier, the exclamation changes its meaning: Alfieri cannot entirely wish Eddie had settled.',
        },
        {
          phrase: 'with a certain... alarm',
          note: 'The ellipsis holds a hesitation before the last word. Alfieri mourns Eddie, but the word he chooses is alarm, not grief or pity, so the audience leaves disturbed rather than comforted. The play refuses a tidy verdict, which is why the strongest answers argue about Eddie rather than simply condemning him.',
        },
      ],
      question:
        "How does Miller present Eddie's death and Alfieri's response to it? Explore what the ending suggests about Eddie as a tragic hero.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Vernacular speech, and a hero without words',
      example:
        'Eddie tells Alfieri, "I mean he ain’t right" (Act One, Alfieri\'s office, pp. 33 to 38), and on his second visit insists again that "he ain’t right" (Act Two, p. 54). He tells Catherine she is "walkin’ wavy".',
      effect:
        "Miller gives Eddie the grammar of the Brooklyn waterfront: double negatives, dropped endings, gonna and ain't. It makes him real, and it makes his tragedy one of language as well as feeling. He cannot say what is wrong with Rodolpho because the real reason is something he cannot admit, so a vague phrase has to carry an accusation. Set against Alfieri's formal, almost poetic speech, Eddie's short, repeated phrases sound like a man circling a truth he refuses to reach.",
    },
    {
      technique: 'Direct address, and a narrator who knows the ending',
      example:
        'Alfieri tells the audience, before the story starts, that a lawyer once "watched it run its bloody course", and after Eddie\'s first visit he says "I could see every step coming" (Act One, p. 38).',
      effect:
        "Alfieri stands outside the action as well as inside it: he is a character Eddie consults and a narrator who speaks to us in the past tense. His speeches divide the play into episodes, like the chorus of a Greek tragedy, and they make the ending feel fixed. The effect is dread rather than suspense. It also makes the law itself a spectator, knowledgeable and powerless, which is one of the play's bleakest ideas.",
    },
    {
      technique: 'Simile and natural imagery',
      example:
        'As Eddie first walks into his office, Alfieri says "His eyes were like tunnels" (Act One, p. 33), an image he uses twice. On the second visit he warns Eddie that "the law is nature" and that "a river will drown you if you buck it now" (Act Two, p. 54).',
      effect:
        "The tunnel simile makes Eddie's gaze dark, narrow and one-directional: he can see only one thing, and there is no light at the end of it. The river image goes further, turning Catherine's marriage into a natural force and Eddie's resistance into a fight against nature itself. Alfieri's language tells the audience what Eddie cannot hear: that he is not fighting Rodolpho but something far bigger, and that he will lose.",
    },
    {
      technique: 'Dramatic irony and foreshadowing',
      example:
        'Early in Act One Eddie warns Catherine to tell no one about the cousins and has Beatrice tell her about Vinny Bolzano, who "snitched" to the Immigration on his own uncle; nothing, Eddie says, is harder to get back than "a word that you gave away".',
      effect:
        'Eddie condemns the informer in his own words, and the story he makes Beatrice tell spells out the punishment: the boy was dragged down the stairs by his own family and spat on in the street. When he phones the Immigration Bureau in Act Two, the audience remembers every word, so his betrayal is judged by the standard he set. Miller builds the tragedy on this irony: Eddie is not ignorant of the code, he preached it.',
    },
    {
      technique: 'Stage directions that show what cannot be said',
      example:
        'In Act Two, when Eddie comes home drunk and Catherine says she is leaving, the stage directions state that he "kisses her on the mouth" and then that he pins Rodolpho\'s arms and "suddenly kisses him" (p. 52).',
      effect:
        "The play's most shocking actions are written as stage directions, not as speech, because Eddie has no words for what he feels. The kiss on Catherine exposes the desire he has denied; the kiss on Rodolpho is, on most readings, meant to humiliate him and to show Catherine that he is not, by Eddie's standards, a real man. Both are acts of domination, not affection. After this moment nobody in the family can pretend not to know, which is why it opens the way to the phone call.",
    },
    {
      technique: 'Lighting and staging: the phone booth',
      example:
        'While Alfieri is still pleading with Eddie to let Catherine go, the stage direction reads "A phone booth begins to glow" on the other side of the stage (Act Two, p. 54). By the top of page 55 Eddie is at the phone, asking for the Immigration Bureau.',
      effect:
        "Miller lights the phone booth before Eddie has decided anything aloud, so the audience sees the betrayal waiting for him while the lawyer is still talking. Reason and temptation share the stage at the same moment. The effect is to make the phone call feel both chosen and inevitable, which is the double pressure of tragedy, and to show how little Alfieri's words can do.",
    },
    {
      technique: 'Euphemism, and then plain speech',
      example:
        'Alfieri warns Eddie that love can go too far: "There’s too much, and it goes where it mustn’t" (Act One, Alfieri\'s office). In the final scene Beatrice says it outright: "You want somethin’ else, Eddie, and you can never have her!"',
      effect:
        "Alfieri talks around the taboo, with the vague pronoun it doing the work of a word he will not use. For most of the play everyone speaks this way, in hints, silences and sideways remarks. Beatrice's line breaks the pattern in the plainest language in the play, and Catherine's horrified cry of her name shows the shock of hearing it said. The movement from euphemism to naming is the movement of the whole tragedy.",
    },
    {
      technique: 'A motif: the word name',
      example:
        'In the final scene Eddie cries "I want my name!" (p. 69), then insists "Marco’s got my name" (p. 70). When Marco comes for him, Eddie answers, in the stage direction\'s words "as though flinging his challenge", with his own name three times, "Eddie Carbone. Eddie Carbone. Eddie Carbone.", then goes out to face him and demands "I want my name, Marco."',
      effect:
        "In Eddie's community a man's name is his reputation, his honour and his place among his neighbours. The repetition shows an obsession, and the irony is that he destroyed his own name by informing, then demands it back from the man he informed on. Shouting his own name three times in the street is a man trying to reclaim it by force of voice. The play opened with Alfieri naming him; it ends with Eddie naming himself. Tracking the word lets you connect the honour code of Act One to the killing at the end.",
    },
    {
      technique: "Contrasting voices: Marco's plain, formal English",
      example:
        'In the prison, Marco answers Alfieri: "All the law is not in a book." and "In my country he would be dead now." (Act Two, pp. 65 to 67).',
      effect:
        "Marco speaks in short, complete sentences, careful and slightly unidiomatic, as a man speaking a language that is not his own. That plainness gives his words moral weight: there is no argument to decode, only a verdict. Against Alfieri's reasoning, Miller sets a code of justice that is older than American law and cannot be written down, and the audience feels the force of both.",
    },
    {
      technique: 'Religious imagery',
      example:
        'In the scene where Catherine tells him about her job, Eddie tells her that with her hair that way she looks "like a madonna" (Act One).',
      effect:
        "A madonna is an image of the Virgin Mary. Eddie's compliment casts Catherine as holy and untouchable, which is how he justifies keeping other men away from her. The idealised image hides possession, and it becomes harder to believe as the play goes on. One reading sees tenderness; the more convincing reading, given what follows, sees a man describing his niece in terms that let him avoid seeing her as an adult.",
    },
  ],

  vocabulary: [
    {
      term: 'Longshoreman',
      definition:
        'A dock worker who loads and unloads ships. Eddie and his friends Louis and Mike are longshoremen on the Brooklyn waterfront, and Louis notices that the cousins are getting work all the time.',
    },
    {
      term: 'Submarine',
      definition:
        'The play\'s slang for an illegal immigrant, smuggled into the country aboard a ship. Louis asks Eddie about his "two submarines".',
    },
    {
      term: 'Immigration Bureau',
      definition:
        'The government office that dealt with immigration. Eddie phones it in Act Two to report the cousins (p. 55), the act of informing that his community regards as unforgivable.',
    },
    {
      term: 'Red Hook',
      definition:
        'The waterfront district of Brooklyn, New York, where the play is set. Alfieri calls it "the slum that faces the bay" and reminds us that it is not Sicily.',
    },
    {
      term: 'Tenement',
      definition:
        'A large, crowded block of rented flats in a poor district. The opening stage direction sets the whole play in the street outside one, and the Carbones live inside it.',
    },
    {
      term: 'Stenographer',
      definition:
        "An office worker who takes down letters in shorthand and types them up. Catherine is offered a stenographer's job at a big plumbing company on Nostrand Avenue, her first step towards independence.",
    },
    {
      term: 'Recourse',
      definition:
        'A legal means of getting help or putting a wrong right. Alfieri tells Eddie he has "no recourse in the law" against Rodolpho.',
    },
    {
      term: 'Madonna',
      definition:
        'The Virgin Mary, or a painting or statue of her. Eddie tells Catherine she is "the madonna type", an ideal of purity that says as much about him as about her.',
    },
    {
      term: 'Snitch',
      definition:
        'Slang for informing on someone to the authorities. In Act One Beatrice, at Eddie\'s prompting, tells Catherine how Vinny Bolzano "snitched" on his own uncle; in Act Two Eddie informs, and the neighbourhood judges him by the same rule.',
    },
    {
      term: 'Bail',
      definition:
        'Release from custody until a hearing, on a promise to return. In Act Two Alfieri will bail Marco out until his hearing only if Marco promises not to harm Eddie.',
    },
    {
      term: 'Chorus',
      definition:
        "In ancient Greek tragedy, a group who comment on the action and speak to the audience without being able to change events. Alfieri plays a similar role, and Pearson's examiners have noted answers comparing him with it.",
    },
    {
      term: 'Tragic hero',
      definition:
        'The central figure of a tragedy, whose downfall comes from a flaw or error of his own, and who arouses both pity and fear. Whether an ordinary longshoreman can be one is a question the play invites.',
    },
    {
      term: 'Hamartia',
      definition:
        'The tragic flaw or fatal error that brings a hero down. For Eddie it is often identified as his inability to admit his feelings for Catherine, which leads him to the phone call.',
    },
    {
      term: 'Foreshadowing',
      definition:
        "Hints of what is to come. Alfieri's warnings, the story of Vinny Bolzano and the chair raised over Eddie's head all foreshadow Eddie's fate.",
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the audience knows more than a character, or hears a line differently because of what they know. Eddie's condemnation of informers in Act One becomes dramatic irony once he informs.",
    },
    {
      term: 'Stage direction',
      definition:
        "The playwright's instructions for action, movement, lighting and tone, printed apart from the dialogue. Miller's are unusually full, and several of the play's key moments, the chair, the kisses and the glowing phone booth, happen only in them.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How is Beatrice presented as loyal to her husband in the play? You must consider language, form and structure in your answer. (Pearson, May 2024)',
        skill: 'Whole-play essay on a character and a relationship',
        guidance: [
          "Open with an argument, not a summary: for example, that Beatrice's loyalty is real but not blind, and that Miller tests it by making her the person who sees Eddie most clearly.",
          'Act One: she welcomes her cousins and backs Catherine\'s job against Eddie, managing him gently rather than defying him. Use her question "When am I gonna be a wife again, Eddie?" to show a loyalty that is already costing her.',
          'The final scene, first: when Catherine calls Eddie a rat, Beatrice answers "Whatever happened we all done it", sharing the blame to shield him. Analyse why she includes herself.',
          'Then her loyalty and her honesty collide in "You want somethin’ else, Eddie, and you can never have her!" Argue that the plainest line in the play is also an act of love: she tells him the truth nobody else will.',
          'Form and structure: Eddie dies in her arms and his last words are to her. Discuss what Miller suggests by ending the action there, before Alfieri speaks.',
          'Conclude with a judgement: is Beatrice loyal to Eddie, to Catherine, or to the truth? The strongest answers argue that she tries to be loyal to all three and that the play makes that impossible.',
        ],
      },
      {
        question:
          '‘At the time the play is set, men were expected to behave in certain ways.’ Explore the roles of men in A View from the Bridge. You must consider language, form and structure in your answer. (Pearson, May 2024)',
        skill: 'Whole-play essay on a theme, across several characters',
        guidance: [
          "Define the expectations the play shows: to work and provide, to protect the women of the family, to be physically strong, and to keep the community's silence.",
          'Eddie as provider and protector (Act One): his control of Catherine ("walkin’ wavy") and his sarcasm about Rodolpho, "He sings, he cooks, he could make dresses".',
          'Rodolpho as a challenge to those expectations: singing, cooking, his blond hair and his wish to become an American. Show how Eddie reads difference as unmanliness.',
          'Marco as a different model of manhood: quiet, strong and devoted to his wife and children. Analyse the chair at the end of Act One and its stage directions.',
          "Alfieri as a man of words rather than strength, and the longshoremen of the neighbourhood as judges of a man's reputation.",
          "Conclude on the ending: Eddie dies demanding his name, killed in a fight over honour. Argue whether Miller criticises the expectations themselves or only Eddie's version of them.",
        ],
      },
      {
        question:
          "How is Marco's relationship with his family presented in the play? You must consider language, form and structure in your answer. (Pearson, May 2024, alternative paper)",
        skill: 'Whole-play essay on a character and a relationship',
        guidance: [
          "Thesis: Marco's family is the reason he is in America and the reason he fights. Miller makes his love for them the source of both his dignity and his violence.",
          'Act One, the arrival: he tells Beatrice he has three children and that "The older one is sick in his chest", and wants to send money home at once. Analyse the plain, simple sentences.',
          'His relationship with Rodolpho: an older brother who keeps him in line ("You come home early now, Rodolpho.") and who rises when Eddie\'s blow staggers him, then answers with the chair.',
          'The arrest (Act Two, pp. 63 to 65): "That one! He killed my children!" Explain why Marco sees the phone call as an attack on his family, not just on himself.',
          'The prison scene: "He degraded my brother. My blood." and "In my country he would be dead now." Link family, honour and the law.',
          'Conclude by weighing the ending: Marco fights for his family, and in doing so may lose the chance to support them. Argue whether the play admires him or pities him.',
        ],
      },
      {
        question: 'In what ways is Alfieri significant in the play? (Pearson, November 2024)',
        skill: "Whole-play essay on a character's role and dramatic function",
        guidance: [
          "Write about significance, not just character: Pearson's examiners noted that the stronger answers on this question focused on what Alfieri does in the play, including that the audience sees the action from his perspective.",
          'His role as narrator and chorus: the opening speech, "watched it run its bloody course", and his narration between episodes. Analyse how he makes the ending feel inevitable.',
          'His role as the law: Eddie\'s two visits (Act One, pp. 33 to 38; Act Two, pp. 53 to 55). Use "You have no recourse in the law" and his warning "You won’t have a friend in the world, Eddie!"',
          'His powerlessness: he says he could see every step coming and he cannot stop any of them. Discuss what Miller suggests about the limits of law and reason.',
          'His role at the end: the prison scene with Marco ("Only God makes justice.") and the final speech. Analyse the return of "settle for half" and the final word, alarm.',
          'Alfieri is above all a device of form, so structure should be at the centre of this answer: where he appears, what he interrupts, and what he knows that the characters do not.',
        ],
      },
      {
        question:
          'Explore the theme of romantic love in A View from the Bridge. (Pearson, November 2024)',
        skill: 'Whole-play essay on a theme',
        guidance: [
          "Define the kinds of love the play shows: Catherine and Rodolpho's courtship, Marco's love for his wife at home, the strained marriage of Eddie and Beatrice, and Eddie's forbidden feeling for his niece.",
          'Catherine and Rodolpho (Act Two, pp. 47 to 51): when she asks whether they could live in Italy, he answers "I will not marry you to live in Italy", and moments later she admits "I’m afraid of Eddie here". Show how their love is shadowed by Eddie from the start.',
          'Eddie and Beatrice: "When am I gonna be a wife again, Eddie?" and the ending in her arms. Argue whether their marriage survives.',
          "Eddie's feelings for Catherine: the madonna image, Alfieri's euphemism, the kiss in Act Two and Beatrice's final naming of the truth. Handle this carefully and precisely.",
          "Pearson's examiners noted that stronger answers traced the early, subtle signs of Eddie's jealousy in the stage directions and then his increasingly direct and aggressive language. Do the same.",
          'Conclude on what the play suggests: love that is allowed to grow survives, while love that cannot be admitted destroys.',
        ],
      },
      {
        question:
          '‘There are many ways in which people are expected to behave, in the community and in the home.’ Explore the significance of expected behaviour in A View from the Bridge. You must consider language, form and structure in your answer. (Pearson, May 2024, alternative paper)',
        skill: 'Whole-play essay on an idea, across home and community',
        guidance: [
          'Split the question: expectations in the home (husband, wife, guardian, niece, guest) and in the community (silence, loyalty, respect).',
          'The community\'s code: the Vinny Bolzano story in Act One and "a word that you gave away". Show that Eddie knows the rules better than anyone.',
          "The home: Eddie's demand, in the final scene, \"I want my respect.\", aimed at his wife; Beatrice's duties as a wife; Catherine's wish to grow up.",
          'Breaking expectations: the kisses in Act Two, the phone call, the arrest in front of the neighbours, and Lipari the butcher turning away from Eddie with his arm around his wife.',
          "Alfieri's framing: the law and the community's code are different systems. Use Marco's \"All the law is not in a book.\"",
          'Conclude by arguing what the play suggests: that expected behaviour holds the community together, and that Eddie is destroyed by the expectations he enforced on others.',
        ],
      },
      {
        question:
          'In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure. (Pearson specification, example coursework title)',
        skill: 'Whole-play essay on an idea, tracing it through the structure',
        guidance: [
          'Sort the conflicts before you write: Eddie against Rodolpho, Eddie against Marco, Eddie against Catherine and Beatrice, and Eddie against himself. Decide which one you think drives the others.',
          'Hidden conflict in Act One: the sarcasm of "He sings, he cooks, he could make dresses", the boxing lesson, and "Can you lift this chair?". Show how Miller keeps violence under a polite surface.',
          'Conflict with the law and the community: Alfieri\'s "You have no recourse in the law", the phone call, and Marco\'s public accusation, "That one! I accuse that one!"',
          'Conflict inside Eddie: his refusal to hear what Alfieri and Beatrice tell him. Use the euphemism of "it goes where it mustn’t" against Beatrice\'s plain final line.',
          'Structure: every conflict converges on the street in the final scene, in front of the neighbours. Show how the two acts build the pressure.',
          'Conclude with a judgement: argue that the fight with Marco is the outward form of a conflict Eddie never admits, the one within himself.',
        ],
      },
    ],
    tips: [
      'Paper 2 is open book. Take a clean, completely unmarked copy of a prescribed edition, and know where the key moments are: the page references in this guide are to the Penguin Modern Classics edition. Use the book to check short quotations, not to copy long ones.',
      "Plan for about 45 minutes, the time the paper tells you to spend on your Section A question. Pearson's examiners recommend spending the first few minutes on a plan, and an argument planned in advance is much easier to keep focused.",
      "In the modern drama section, Pearson's examiners look for a broad balance between your knowledge of the whole play and your analysis of language, form and structure. Context is assessed in Section B, on the literary heritage text, not here, so use context only where it sharpens a point about the play.",
      "Write about it as a play. Examiners have praised answers that treat the text as drama. Miller puts crucial moments into stage directions (the chair, the kisses, the glowing phone booth, the knife) and into Alfieri's direct address, and those are the easiest places to show you understand form.",
      "Do not retell the story. Pearson's examiners describe narrative detail as a feature of lower-level answers. Every paragraph should make a point about the question and support it with analysed evidence.",
      'Use Alfieri\'s frame for structure. "Settle for half" is in his first speech and twice in his last, the second time as "it must be!", and comparing the calm and the anxious versions is one of the quickest ways to show whole-play understanding.',
      'Quote accurately, because several lines circulate in the wrong form or with the wrong speaker. Marco\'s line is "In my country he would be dead now". "It is my fault, Eddie. Everything." is Rodolpho\'s apology, not an accusation from Beatrice. "Animal! You go on your knees to me!" is Marco\'s, not Eddie\'s. Check any quotation in your own copy before you learn it.',
    ],
  },

  timeline: [
    {
      where: 'Act One, the opening (pp. 1 to 3)',
      title: "Alfieri's warning",
      summary:
        'Alfieri, a local lawyer, steps out to speak to the audience. He describes Red Hook and its distrust of the law, says that people there now settle for half, and warns that cases like the one he is about to tell have ended in blood.',
      setting: "Red Hook, Brooklyn: the street outside a tenement, and Alfieri's office",
      who: ['Alfieri', 'Eddie'],
      quote: 'watched it run its bloody course',
      themes: ['Tragedy and inevitability', 'Justice: law versus community code'],
      tension: 2,
      significance:
        'The ending is announced before the story begins, so the audience watches for how the tragedy comes, not whether.',
    },
    {
      where: "Act One, the Carbones' apartment (from p. 3)",
      title: "Catherine's new job",
      summary:
        'Eddie comes home to find Catherine in a new skirt with her hair done differently, and criticises the way she walks. She has been offered a job as a stenographer at a plumbing company, and Eddie gives way only reluctantly, with Beatrice taking her side.',
      setting: "The Carbones' apartment in a Red Hook tenement",
      who: ['Eddie', 'Catherine', 'Beatrice'],
      quote: 'Katie, you are walkin’ wavy!',
      themes: ['Desire, taboo and self-deception'],
      tension: 2,
      significance:
        "Eddie's protectiveness already sounds like jealousy, and Catherine's first step towards independence is the first threat to him.",
    },
    {
      where: "Act One, the Carbones' apartment (from p. 12)",
      title: 'The story of Vinny Bolzano',
      summary:
        'Eddie warns Catherine to tell nobody about the cousins and gets Beatrice to tell her about Vinny Bolzano, a boy who informed on his own uncle to the Immigration and was dragged down the stairs by his own family and spat on in the street.',
      setting: "The Carbones' apartment",
      who: ['Eddie', 'Catherine', 'Beatrice'],
      quote: 'a word that you gave away',
      themes: ['Justice: law versus community code', 'Tragedy and inevitability'],
      tension: 2,
      significance:
        'Eddie condemns an informer in his own words, so the audience will judge him by them when he makes his phone call.',
    },
    {
      where: "Act One, the Carbones' apartment (from p. 16)",
      title: 'The cousins arrive',
      summary:
        "That night Marco and Rodolpho, Beatrice's cousins, arrive from Italy as illegal immigrants. Marco has a wife and three children at home and has come to earn money for them. Rodolpho, the younger brother, wants to stay forever and become an American, and sings for the family until Eddie cuts him short.",
      setting: "The Carbones' apartment, late at night",
      who: ['Marco', 'Rodolpho', 'Eddie', 'Beatrice', 'Catherine'],
      quote: 'The older one is sick in his chest.',
      themes: ['Immigration and the American Dream'],
      tension: 2,
      significance:
        "Miller sets up two different immigrants, one who came to feed a family and one who wants a new life, and Eddie's hostility to the second begins at once.",
    },
    {
      where: 'Act One, outside the building (pp. 24 to 25)',
      title: "Beatrice's question",
      summary:
        'As Catherine and Rodolpho grow close, Eddie complains to Beatrice about him and says he is worried about Catherine. Beatrice, neglected, asks Eddie when their marriage will be a real one again, and he avoids the question, saying he has not been feeling well.',
      setting: "The street outside the Carbones' building",
      who: ['Eddie', 'Beatrice'],
      quote: 'When am I gonna be a wife again, Eddie?',
      themes: ['Desire, taboo and self-deception'],
      tension: 3,
      significance:
        'The marriage at the centre of the home is empty, and Beatrice sees the cause long before Eddie will admit it.',
    },
    {
      where: 'Act One (pp. 28 to 33)',
      title: 'A passport',
      summary:
        'Out in the street, Eddie tells Catherine that Rodolpho only wants to marry her to become a citizen, and that his respect for her is really respect for the papers she can give him. Catherine is left sobbing, and when they go back into the apartment Beatrice tells her that she is grown up now and must stop behaving like a child in front of Eddie.',
      setting: "The street outside the Carbones' building, then the apartment",
      who: ['Eddie', 'Catherine', 'Beatrice'],
      quote: 'Katie, he’s only bowin’ to his passport.',
      themes: ['Desire, taboo and self-deception', 'Immigration and the American Dream'],
      tension: 3,
      significance:
        'Eddie turns the law of immigration into a weapon in words before he turns it into one in deeds.',
    },
    {
      where: "Act One, Alfieri's office (pp. 33 to 38)",
      title: 'Eddie goes to the law',
      summary:
        'Eddie asks Alfieri whether the law can stop Catherine marrying Rodolpho, insisting that Rodolpho is not right. Alfieri tells him the law offers no remedy and warns him that his love for his niece has gone too far. Eddie leaves angry, and Alfieri tells the audience he could see every step coming.',
      setting: "Alfieri's office",
      who: ['Eddie', 'Alfieri'],
      quote: 'She can’t marry you, can she?',
      themes: ['Justice: law versus community code', 'Desire, taboo and self-deception'],
      tension: 3,
      significance:
        "Alfieri says aloud what Eddie cannot admit, and the law's failure to help pushes Eddie towards another remedy.",
    },
    {
      where: "Act One, the Carbones' apartment (pp. 38 to 46)",
      title: 'The boxing lesson and the chair',
      summary:
        "After dinner Catherine dances with Rodolpho and Eddie mocks his talents, then offers him a boxing lesson and lands a blow that staggers him. Marco challenges Eddie to lift a chair by the bottom of one leg; Eddie fails, and Marco raises it over Eddie's head as Act One ends.",
      setting: "The Carbones' apartment, after dinner",
      who: ['Eddie', 'Rodolpho', 'Marco', 'Catherine', 'Beatrice'],
      quote: 'Can you lift this chair?',
      themes: ['Masculinity and honour'],
      tension: 4,
      significance:
        'A silent warning ends the first act, and the weapon held over Eddie foreshadows the one that kills him.',
    },
    {
      where: "Act Two, the Carbones' apartment (pp. 47 to 53)",
      title: 'Eddie comes home drunk',
      summary:
        'On 23 December Catherine and Rodolpho are alone in the apartment, and she admits she is afraid of Eddie. Eddie comes home drunk, finds them together and orders Rodolpho out. When Catherine says she is leaving too, he kisses her, then pins Rodolpho and kisses him to humiliate him.',
      setting: "The Carbones' apartment, two days before Christmas",
      who: ['Catherine', 'Rodolpho', 'Eddie'],
      quote: 'Eddie, I’m not gonna be a baby any more!',
      themes: ['Desire, taboo and self-deception', 'Masculinity and honour'],
      tension: 5,
      significance:
        'The feelings Eddie has denied become actions everyone can see, and the family can no longer pretend not to know.',
    },
    {
      where: "Act Two, Alfieri's office and a phone booth (pp. 53 to 55)",
      title: 'The phone call',
      summary:
        'Eddie returns to Alfieri, who tells him again that the law cannot help and urges him to let Catherine go. As Eddie turns to leave, Alfieri warns him that he will not have a friend in the world. Eddie goes straight to a phone booth and reports the cousins to the Immigration Bureau.',
      setting: "Alfieri's office, then a phone booth in the street",
      who: ['Eddie', 'Alfieri'],
      quote: 'You won’t have a friend in the world, Eddie!',
      themes: ['Justice: law versus community code', 'Tragedy and inevitability'],
      tension: 4,
      significance:
        'The turning point of the tragedy: Eddie breaks the code he preached in Act One, having been told exactly what it will cost.',
    },
    {
      where: 'Act Two, the apartment and the street (pp. 56 to 65)',
      title: 'The arrest',
      summary:
        "Eddie learns that the cousins have been moved upstairs, where two more illegal immigrants, one of them the nephew of Lipari the butcher, have just arrived. Immigration officers come and take all four. Marco breaks away, dashes back into the room and spits in Eddie's face. Then, in the street in front of the neighbours, he accuses Eddie, and Lipari turns away from him with his arm around his wife.",
      setting: 'The apartment building and the street outside',
      who: ['Eddie', 'Marco', 'Rodolpho', 'Beatrice', 'Catherine'],
      quote: 'That one! I accuse that one!',
      themes: ['Justice: law versus community code', 'Masculinity and honour'],
      tension: 5,
      significance:
        "Eddie's betrayal becomes public, and the community's verdict on him is passed before any court's.",
    },
    {
      where: 'Act Two, the prison (pp. 65 to 67)',
      title: "Marco's promise",
      summary:
        'Alfieri can bail Marco out until his hearing only if Marco promises not to harm Eddie. Marco argues that the law does not cover what Eddie has done and that in his own country Eddie would already be dead. Alfieri answers that only God makes justice, and Marco gives his word.',
      setting: 'The reception room of a prison',
      who: ['Alfieri', 'Marco', 'Rodolpho', 'Catherine'],
      quote: 'In my country he would be dead now.',
      themes: ['Justice: law versus community code'],
      tension: 3,
      significance:
        'Two systems of justice meet head on, and the promise Marco gives is one the audience already doubts he can keep.',
    },
    {
      where: 'Act Two, the final scene (p. 67 to the end)',
      title: 'Eddie demands his name',
      summary:
        "Eddie tells Beatrice that if she goes to Catherine's wedding she is not to come back, and stays at home waiting for Marco. He refuses Rodolpho's apology, and Beatrice finally says aloud what he wants. In the street Eddie demands his name back; Marco strikes him, Eddie pulls a knife, and Marco turns the blade on him. Eddie dies in Beatrice's arms.",
      setting: "The Carbones' apartment and the street, in front of the neighbours",
      who: ['Eddie', 'Beatrice', 'Catherine', 'Rodolpho', 'Marco'],
      quote: 'I want my name, Marco.',
      themes: [
        'Masculinity and honour',
        'Tragedy and inevitability',
        'Desire, taboo and self-deception',
      ],
      tension: 5,
      significance:
        'Eddie dies fighting for the reputation he destroyed himself, and the knife he draws is turned against him.',
    },
    {
      where: 'Act Two, the final speech',
      title: "Alfieri's farewell",
      summary:
        "Alfieri speaks to the audience over the scene of Eddie's death. He admits he will love Eddie more than all his sensible clients, because Eddie was wholly himself, yet insists that it is better to settle for half, and says he mourns him with alarm.",
      setting: 'The street, as the lights fade',
      who: ['Alfieri'],
      quote: 'he allowed himself to be wholly known',
      themes: ['Tragedy and inevitability'],
      tension: 2,
      significance:
        'The frame closes on the opening idea, now doubted, and the audience is left to judge Eddie for itself.',
    },
  ],

  relationships: [
    {
      from: 'Eddie',
      to: 'Beatrice',
      kind: 'husband and wife',
      note: "A marriage emptied by Eddie's obsession. Beatrice sees the truth first, says it last, and holds him as he dies.",
    },
    {
      from: 'Eddie',
      to: 'Catherine',
      kind: 'uncle and the niece he has raised',
      note: 'Protective love that becomes possessive and then forbidden. Catherine moves from adoring him to defying him as she grows up.',
    },
    {
      from: 'Beatrice',
      to: 'Catherine',
      kind: 'aunt and niece',
      note: "Beatrice backs Catherine's job, tells her she must behave as a grown woman, and tries to protect her from Eddie without betraying him.",
    },
    {
      from: 'Catherine',
      to: 'Rodolpho',
      kind: 'sweethearts, then engaged',
      note: "A courtship that grows under Eddie's claim that Rodolpho wants only a passport. The final scene takes place on the afternoon of their wedding.",
    },
    {
      from: 'Marco',
      to: 'Rodolpho',
      kind: 'brothers',
      note: "Marco is the older, steadier brother who keeps Rodolpho in line and defends him. He sees Eddie's treatment of Rodolpho as an insult to his blood.",
    },
    {
      from: 'Eddie',
      to: 'Marco',
      kind: 'host and guest, then enemies',
      note: "Respect turns to rivalry at the chair, and to open hatred after the phone call. Their conflict over honour ends in Eddie's death.",
    },
    {
      from: 'Eddie',
      to: 'Rodolpho',
      kind: 'host and rival',
      note: 'Eddie mocks and humiliates Rodolpho and refuses his apology in the final scene. Rodolpho is the rival Eddie cannot admit is a rival.',
    },
    {
      from: 'Eddie',
      to: 'Alfieri',
      kind: 'client and lawyer',
      note: 'Eddie comes to Alfieri twice for a legal remedy. Alfieri warns him each time, and each time can do nothing.',
    },
    {
      from: 'Alfieri',
      to: 'Marco',
      kind: 'lawyer and client',
      note: 'Alfieri bails Marco on his promise not to harm Eddie, and argues that the law, not revenge, must decide.',
    },
    {
      from: 'Beatrice',
      to: 'Marco',
      kind: 'cousins',
      note: "It is Beatrice's family that Eddie takes in and then betrays, which sets her loyalty to her husband against her loyalty to her own blood.",
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Also on the 4ET1 modern drama list: a play in which a figure standing partly outside the action, the Inspector as Alfieri here, makes the audience judge what a household has refused to admit.',
    },
    {
      title: 'Kindertransport',
      href: '/revision/texts/kindertransport',
      reason:
        'Another 4ET1 modern drama about arriving in a new country and what belonging costs, and about the adults who raise a young woman struggling to let her leave home.',
    },
    {
      title: "Death and the King's Horseman",
      href: '/revision/texts/death-and-the-kings-horseman',
      reason:
        "Also on the 4ET1 modern drama list: a tragedy in which a community's code of duty and honour meets the law of an outsider, and ends in death, though Soyinka warned against reading it simply as a clash of cultures.",
    },
    {
      title: 'Macbeth',
      href: '/revision/texts/macbeth',
      reason:
        "A literary heritage choice on the same paper, and the classic tragic hero destroyed by a desire he cannot master, which makes it a useful comparison for Miller's idea of a modern, working-class tragedy.",
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'intimate_relationships',
    'discrimination',
  ],

  quotesFromElsewhere: [],

  sources: [
    {
      label:
        "A View from the Bridge, Penguin Modern Classics edition (2010, ISBN 9780141189963, a prescribed edition), Internet Archive scan, read only through the Archive's full-text search (services/search/beta/page_production with service_backend=fts), which returns a few words either side of each match: the exact wording and speaker of every quotation and stage direction used; the copyright page (1955, 1957, 1960, renewed 1983, 1985, 1988; this edition first published in Great Britain by Penguin Classics 2010); the contents page (Act One, p. 1; Act Two, p. 47); page numbers from searches for the running heads.",
      url: 'https://archive.org/details/viewfrombridge0000mill_f4p0',
    },
    {
      label:
        "A View from the Bridge, Bloomsbury Methuen Drama student edition (2010), Internet Archive scan, same full-text search: a second, independent check of every quotation and speaker. Its editorial notes confirm Catherine as the daughter of Beatrice's sister; nothing else rests on them.",
      url: 'https://archive.org/details/viewfrombridge0000mill_k2z9',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) Specification, Issue 3, August 2025: the play on the modern drama list for Components 2 and 3; the open-book rule (prescribed editions, completely unmarked); Appendix 3, the prescribed editions (Penguin Modern Classics, March 2010, ISBN 9780141189963; Bloomsbury, June 2022, ISBN 9781350245785); the example coursework title on conflict.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson 4ET1/02 question paper, 20 May 2024: Questions 1 (Beatrice as loyal to her husband) and 2 (the roles of men), the note that clean copies of set texts may be taken into the examination, and the 45 minutes suggested for Section A.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-que-20240521.pdf',
    },
    {
      label:
        "Pearson 4ET1/02R question paper, 20 May 2024 (the alternative paper): Questions 1 (expected behaviour) and 2 (Marco's relationship with his family).",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02r-que-20240521.pdf',
    },
    {
      label:
        "Pearson Principal Examiner Feedback, 4ET1 Paper 02, November 2024: the questions on romantic love and on Alfieri's significance, and what stronger answers did on each (Alfieri's perspective, the Greek chorus comparison, jealousy traced through stage directions); the balance of knowledge and analysis in Section A; context assessed in Section B; narrative detail as a lower-level feature; treating the texts as drama; the advice to plan.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-pef-20250123.pdf',
    },
    {
      label:
        "Wikipedia, A View from the Bridge: first staged as a one-act play at the Coronet Theatre, New York, on 29 September 1955, and in two acts in London on 11 October 1956, directed by Peter Brook; Catherine as Beatrice's orphaned niece. Used for orientation only; no fact on this page rests on it alone.",
      url: 'https://en.wikipedia.org/wiki/A_View_from_the_Bridge',
    },
    {
      label:
        "The site's own verified guides to Kindertransport and Death and the King's Horseman (src/data/study-guides), for the comparison notes.",
    },
  ],
}
