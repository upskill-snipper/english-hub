import type { GameBank } from '@/lib/games/explanations/types'
import type { GCSEGrade } from '@/lib/grades'

/**
 * Grade Climber: questions on method, meaning and analysis, each set on a rung
 * of the ladder from 3 to 9, many of them on the GCSE and International GCSE
 * set texts.
 *
 * Moved out of src/app/games/grade-climber/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * REBUILT FOR DEPTH (24 October 2026). From 156 questions to 486: 121 on
 * rungs 3 and 4 (tier 1), 136 on rungs 5 and 6 (tier 2) and 229 on rungs 7
 * to 9 (tier 3), as they stand since the check of 31 October 2026 (below)
 * moved six questions. The tier is now set from the rung (tierOfRung), and the
 * rung headings in AUTHORED say what each rung asks. The 330 new questions
 * are of eight kinds, named in `kind` and labelled on the page: a method's
 * effect, the word that does the work, the best evidence for a claim, which
 * of two readings a text supports, the context behind a choice, the
 * strongest sentence of analysis, a critic's claim to weigh, and the
 * judgement that given evidence supports. Every board now meets rungs 6 to
 * 9: a question on a set text names its title for the page's filter, and
 * one on an unseen line names none, so a board with no set texts (KS3,
 * Cambridge 0500 and 0990) is shown 15, 15, 12 and 15 on those rungs.
 *
 * REAL TEXT FIRST. Where a question needs a line it is a writer's own,
 * copied from the held edition in src/data/full-texts and named in `source`,
 * and in `from` where it stands as an unseen line. The founder decided on
 * 24 October 2026 that the site works to UK copyright law, so works out of
 * copyright here are quoted freely; a work still in copyright is quoted only
 * as far as its study guide quotes it. Dylan Thomas's villanelle is left out
 * by decision. Austen's held text marks emphasis with underscores, so lines
 * that carry it ("tempt _me_") are not used.
 *
 * THE 156 ALREADY HERE. Every one was checked and nothing was removed; 37
 * prompts changed. Ten were sound and are kept as they were. Each of the
 * other 146 had at least one of these faults, often several:
 *   - the answer was the one long sentence among short wrong options (96 of
 *     them, up to 330 characters), so its length gave it away. Every set of
 *     options is now one form and one length band, and each wrong option's
 *     explanation was rewritten to match;
 *   - a wrong option was a joke (20: "Shakespeare forgot about the murder",
 *     "Shelley was too lazy to visit the desert"). Each is now a misreading a
 *     student might really make;
 *   - "To what extent" with only one possible conclusion (5: Animal Farm, A
 *     Christmas Carol, Frankenstein, Remains, Romeo and Juliet). Each now
 *     gives the evidence and asks which judgement it supports;
 *   - no title the board filter could find, so every board was shown it (6:
 *     Animal Farm, Lord of the Flies, A Christmas Carol, An Inspector Calls,
 *     Of Mice and Men, and Blake's "London", whose needle is '"London" by
 *     Blake'). Each now names it;
 *   - the six personification questions were near copies ("The stars danced
 *     in the sky"). Four became real lines (Stevenson's fog, Romeo's moon,
 *     Brontë's chestnut tree, Kipling's Triumph and Disaster) and two now ask
 *     what one word in the line does;
 *   - six lines were invented; they became real ones, from Dickens,
 *     Lawrence, Wells, Blake, King Lear and Romeo and Juliet (one of them,
 *     "Never, never, never give up", was close to a speech still in
 *     copyright). Two quoted works in copyright beyond what may be quoted:
 *     "The fog crept in on little cat feet" misquoted Sandburg and became
 *     Dickens's fog, and War Photographer's "a hundred agonies" gave way to
 *     a phrase its guide quotes;
 *   - five asked about Ozymandias. One claimed what no line showed and now
 *     asks about the metre of a line of Romeo's, and one is now a critic's
 *     claim to weigh, so the four left each ask something different;
 *   - the rest had a weak, arguable or unrelated option, replaced by a
 *     misreading of the same form.
 *
 * CHECKED (31 October 2026) by a second, independent reader, as the founder
 * decided: every question and explanation read against its held text, guide
 * or poem page. 51 questions were changed and none removed; six moved rung.
 * One line each:
 *   - "as brave as a lion": the more quoted another question's line and
 *     answer ("He was a lion in battle"); it now uses animals of its own.
 *   - "the eels creep": the why-not for Sibilance said only "sea" has an s,
 *     but "eels" ends in one; it now says so.
 *   - Shylock's "If you prick us": the answer was twice as long as any
 *     option; "Imperative" became "Imperative sentence".
 *   - "Friends, Romans, countrymen": the more had Antony win the crowd before
 *     naming Caesar, whom his next line names; rewritten.
 *   - "empty, silent, lifeless": the more gave another question's answer (a
 *     list of three feels complete); rewritten.
 *   - Donalbain's "daggers in men's smiles": "Smiling is forbidden at a
 *     funeral" fitted nothing in the scene; now "Their friends here will
 *     keep them safe".
 *   - The noodle slogan: a why-not gave alliteration a fixed effect; it now
 *     argues from the slogan.
 *   - Kipling's Triumph and Disaster: the answer was the longest option and
 *     Simile the weakest; Simile became Pathetic fallacy.
 *   - Why "Montagues" and "Capulets": the more's Dante is in no guide or
 *     page; rewritten from the context page (Brooke's poem, the Italian tales).
 *   - Romeo's "my mind misgives": the more said the speech ends on "untimely
 *     death"; it goes on, so the more now says the sentence does.
 *   - Antony's "honourable man": "For Brutus is" comes once, the refrain is
 *     "And Brutus is"; the prompt now quotes "Brutus is an honourable man",
 *     and the more no longer says he never speaks against Brutus.
 *   - "He wolfed down his dinner": an invented line; now Stevenson's "The
 *     other snarled aloud into a savage laugh" ("Search for Mr. Hyde").
 *   - The mayor's "bit of rain": an invented line; now Mercutio's "Ay, ay, a
 *     scratch, a scratch", and Oxymoron replaces Onomatopoeia, since
 *     "scratch" is often taken for a sound word.
 *   - La Belle Dame's withered sedge: the more called the setting wintry; it
 *     is late autumn, the harvest in.
 *   - Lear's "serpent's tooth": a why-not put the line mid-curse, which it
 *     ends, and the more had him say it to Goneril, not to nature; corrected.
 *   - The foghorn line: the why gave "foghorn" a long o; the four are low,
 *     moan, old and rolled.
 *   - "warm, crusty and golden": two options named the same two senses;
 *     "Smell and hearing" became "Smell and taste".
 *   - Caesar's "Cowards die many times": Hyperbole could be argued; it
 *     became Rhetorical question.
 *   - The volta, the caesura, free verse and extended metaphor: definitions
 *     to recall on rung 5 (tier 2); moved to rung 4. Free verse also lost a
 *     pun ("free for anyone to read") for blank verse's definition, and the
 *     extended metaphor's more made Romeo, not his hand, the pilgrim.
 *   - Blood in Macbeth: the why said neither Macbeth believes the stain will
 *     go, though she says "A little water clears us of this deed", and it
 *     gave away the sleepwalking question; rewritten.
 *   - "It was the best of times": A Tale of Two Cities is not held, so the
 *     line could not be checked; now Jekyll's "man is not truly one, but
 *     truly two", sharing an about with the rung 9 question on his statement.
 *   - Light and dark in Romeo and Juliet: "To tell the actors when to light
 *     the torches" was a joke; now "To show the lovers are only safe by day".
 *   - "mind-forged manacles": the more read as Blake attacking the soldiers;
 *     he blames the Church and the monarchy for their suffering.
 *   - Romeo's iambic line: the prompt defined iambic pentameter, so "five
 *     beats" gave it away; it now asks the line's metre, among near neighbours.
 *   - Bayonet Charge: "hot khaki" is not quoted on the poem's page (it is in
 *     copyright and has no guide); now "raw-seamed", which the page quotes.
 *   - Satis House: "Hope, wealth and a fresh start for Pip" is what the house
 *     means to Pip, and "The happy future Pip will share there" was near it;
 *     now "Honest work and the warmth of family" and "Wealth that brings
 *     happiness to its owner".
 *   - "I am no bird": every option was a bird she refuses to be; it now asks
 *     what she claims.
 *   - Kipling's "keep your head": the more said the conditions run to the
 *     last line; the main clause is line 31 of 32.
 *   - "Something is rotten": "An officer on watch" is in neither text nor
 *     guide; now "A sentry".
 *   - Prospero's "such stuff / As dreams": he did not speak to "his guests"
 *     but to his daughter and her betrothed; the prompt says so.
 *   - The War of the Worlds dodo: the why ended on a claim with no basis,
 *     that the reader has just trusted the narrator; replaced.
 *   - Exposure's "knive us": the why quoted "knives" as Owen's word.
 *   - Mercutio's "A plague o' both your houses": now shares an about with
 *     his "scratch", so the two are never dealt in one session.
 *   - Hooper's "it is ours": a why-not had his grandfather dying when
 *     Kingshaw arrives; by Chapter 2 he has died.
 *   - The glowing phone booth: a why-not cited "the top of page 55" of one
 *     edition; it now gives the order of events.
 *   - Ignorance and Want: the answer had "An 1843 report" on children "in
 *     mines"; the mines report was 1842, and the one Dickens read in 1843 was
 *     on child labour, which the answer now says.
 *   - Lady Macbeth's "serpent under't": the more's Gunpowder Plot medal is
 *     in no guide or page; now Macbeth's "False face must hide what the false
 *     heart doth know".
 *   - Poor Tom: the answer had released Bedlam patients "feigning madness";
 *     now beggars from Bedlam, real or feigned, as the guide has them.
 *   - Wells's "apostles of mercy": now shares an about with the question on
 *     the novel and empire, whose prompt gives its answer.
 *   - The rewritten commandments: the more cited an Orwell letter on
 *     revolutions that the guide does not record; now his remark, which it
 *     does, that the milk and apples are the story's turning point.
 *   - Mr Bennet's "insufficient": the stem ("not enough") defined the
 *     answer; it now asks which word carries the narrator's verdict on the
 *     wife.
 *   - The jurors who will not look at Tom Robinson: the tip spoke to "a
 *     Cambridge passage question", but Edexcel students meet it too.
 *   - The letter as "a spell", and "custom stale": the meaning of a word,
 *     not the exam skill of rung 8; both moved to rung 5.
 *   - Hamlet's nutshell: the why garbled the line; corrected.
 *   - Blake's "chartered": the more's Thomas Paine is in none of the site's
 *     London pages; replaced from the page (the Thames, 1794, the French
 *     Revolution).
 *   - Jekyll's "primitive duality": the more said he "adds" a phrase that
 *     comes before it; corrected.
 *   - Cassius's "The fault, dear Brutus": the more said he "adds" a line that
 *     comes just before it; corrected.
 *
 * THE PROMPTS CARRY THE BOARD FILTER. The page shows a question about a set
 * text only to a student whose exam board sets that text, and it knows the
 * text by finding its title in the prompt (TEXT_REFERENCES in the page). A
 * prompt edited here must keep the title it names, and a question on a set
 * text names it in `text` as well, by its slug in src/lib/board/set-texts.ts.
 * A question with no `text` is on a line of the site's own, and every board
 * is shown it.
 *
 * A text with no row in the register therefore reaches no student who has
 * chosen a board. Measured on 31 October 2026: 36 questions, 32 of them on
 * ten of AQA's Power and Conflict poems (Ozymandias, London, Bayonet Charge,
 * The Charge of the Light Brigade, Poppies, Remains, Exposure, Checking Out
 * Me History, Tissue, The Émigrée) and four on Dulce et Decorum Est. War
 * Photographer and My Last Duchess have rows, so AQA students meet those.
 *
 * WHAT WAS WRONG BEFORE (16 October 2026, found writing the explanations,
 * and by the readers who checked them). 38 of the 156 questions were changed.
 *
 * Ten marked answers, or the prompts they answered, said something false:
 *
 *   - Checking Out Me History (form and structure): the answer said the poem
 *     alternates standard English, for colonial history, with Creole, for the
 *     Caribbean heroes. The whole poem is in Caribbean English; what alternates
 *     is mocking, nursery-rhyme stanzas on British history and reverent stanzas
 *     on Toussaint, Nanny and Mary Seacole. The answer now says that.
 *   - Checking Out Me History (the two histories): the answer called Dick
 *     Whittington a nursery rhyme. He is a folk tale and a pantomime; the
 *     answer now speaks of "folk-tale and nursery-rhyme triviality".
 *   - Poppies (domestic imagery): the answer had the mother smoothing "a
 *     blazer collar" and touching "a door handle". She pins a poppy to his
 *     blazer and smooths his shirt collar, and the poem has no door handle.
 *   - Great Expectations (bildungsroman): the answer called Pip's expectations
 *     "founded on criminal wealth". Magwitch made the money lawfully, as a
 *     sheep-farmer and stock-breeder in New South Wales; it is now "a convict's
 *     money".
 *   - Romeo and Juliet (why the families are called Montagues and Capulets):
 *     the marked answer, that the names stress a feud between whole
 *     households, is no reason for the names, and "They are named after real
 *     families" was near the truth (Dante names the Montecchi and Cappelletti).
 *     The answer is now that Shakespeare took the names from the story he
 *     adapted (Arthur Brooke's poem of 1562), and that option is replaced.
 *   - The Charge of the Light Brigade (rhythm): the answer called the metre
 *     "anapaestic dimeter with a dactylic refrain". It is dactylic dimeter,
 *     as the poem's own page says
 *     (src/app/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade).
 *   - The Charge of the Light Brigade (obedience): the answer called "Some one
 *     had blunder'd" a refrain. The line appears once; it is now "the line".
 *   - Macbeth (the Porter): the answer said the castle "has literally become
 *     hell". It is now "a kind of hell".
 *   - Dulce et Decorum Est (tense): the prompt put the shift to the present
 *     tense in the second stanza, which is told in the past ("I saw him
 *     drowning"). The present arrives in the two-line third stanza ("He
 *     plunges at me"). The prompt now says the third stanza, and the answer
 *     says what that shift does: the dying man returns in every dream.
 *   - The Émigrée (light as a motif): the answer had her memory survive "no
 *     matter how the city is invaded or renamed". Nothing in the poem renames
 *     the city; the threats it names are war and tyranny, so the answer now
 *     says "invaded or oppressed".
 *
 * One prompt misquoted: Tennyson's "valley of Death" was printed "Valley of
 * Death"; it now has his lower-case v, as AQA prints it.
 *
 * In 29 questions a wrong option was also right, or near enough to argue, so
 * a student who knew the text could be marked wrong. Each such option was
 * replaced by one that is plainly wrong for that question:
 *
 *   - devices that the example also contains: Alliteration in "Tick tock,
 *     tick tock", "Never, never, never", "Alone, alone, all all alone" and
 *     "The buzzing bees" (a word in an alliterative pair); "Rhyme and rhythm"
 *     in "She sells sea shells" (sells, shells); Hyperbole in "The classroom
 *     was a zoo"; Metaphor for the whispering leaves, since personification is
 *     a kind of metaphor;
 *   - effects the device can have: Humour and Confusion for short sentences
 *     (comic timing, and the broken thoughts of a confused mind), so both
 *     went; "They are cold" for trembling hands; "It shows the soldiers are
 *     bored" for Exposure's refrain, which is the monotony the answer names;
 *   - things true of the text: Macbeth's blood as "Loyalty and honour" (the
 *     bleeding Captain, the sword that "smok'd with bloody execution"); Satis
 *     House as "Wealth and success"; the "valley of Death" as a valley in the
 *     Crimea, where the charge took place; the Duke as an art collector; Pip
 *     not recognising Magwitch, which at first he does not; the darkroom as a
 *     place of death, since Duffy likens it to a church; the Émigrée's memory
 *     as unreliable, which the poem allows; Lady Macbeth "praying", since she
 *     invokes spirits; the humour of Birling's dramatic irony; the Creature
 *     seeming educated, which he is; the dream in Of Mice and Men being "about
 *     buying a farm", which it is; An Inspector Calls being "set in real
 *     time", which it is; Victor as a figure of the Enlightenment, a reading
 *     critics argue; Pip improving himself, which morally he does; "Hyde
 *     exercises more" and "Jekyll takes too much potion", both near Jekyll's
 *     own account ("much exercised and nourished", the doubled doses); Romeo
 *     "confused", which his oxymorons show; the Creature lonely because
 *     ugly, which is why he is shunned; "He is talking to his friend", when
 *     Owen's last stanza says "My friend"; and "Paper represents strength",
 *     close to Tissue's own claim for paper.
 */

export type GradeKind =
  /** A method in a line of the site's own, and what it does to a reader. */
  | 'effect'
  /** Which one word in a line does the work. */
  | 'word'
  /** Which quotation best supports a claim. */
  | 'evidence'
  /** Which of two readings the text supports, and why. */
  | 'reading'
  /** The context that explains a writer's choice. */
  | 'context'
  /** Which sentence analyses, rather than describes or retells. */
  | 'sentence'
  /** Weighing a critic's or an examiner's claim. */
  | 'critic'
  /** The judgement that the evidence given supports. */
  | 'judgement'

export interface GradeQuestion {
  grade: GCSEGrade
  type: 'technique' | 'meaning' | 'analysis'
  prompt: string
  options: string[]
  correctIndex: number
  /**
   * How hard it is: 1 recall and recognition (rungs 3 and 4), 2 understanding
   * (rungs 5 and 6), 3 the exam skill (rungs 7 to 9). Set from the rung.
   */
  tier: 1 | 2 | 3
  /** What the question asks the student to do, where it is one of the newer kinds. */
  kind?: GradeKind
  /** The set text it is on, by its slug in src/lib/board/set-texts.ts. */
  text?: string
  /** The quotation it turns on, as the text prints it. */
  quote?: string
  /** The scene, symbol or idea it turns on, where another question turns on it too. */
  about?: string
  /**
   * Where a real line in the prompt comes from, shown under it: "Charles
   * Dickens, A Christmas Carol (1843), Stave 1". Added 24 October 2026, when
   * the lines the lower rungs had invented gave way to writers' own words.
   */
  source?: string
  /**
   * The held text a real line is from, by its slug, where the question uses
   * it as an unseen line and so names no title for the board filter.
   */
  from?: string
}

type AuthoredQuestion = Omit<GradeQuestion, 'tier'>

/** The tier of a rung: the ladder climbs from recall to the exam skill. */
export function tierOfRung(rung: GCSEGrade): 1 | 2 | 3 {
  return rung <= 4 ? 1 : rung <= 6 ? 2 : 3
}

const AUTHORED: AuthoredQuestion[] = [
  // ──── Rung 3: a method in a line, and what it does ────────────────────────────────────────────
  {
    grade: 3,
    type: 'technique',
    quote: 'Hard and sharp as flint',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 1',
    from: 'a-christmas-carol',
    prompt: 'Dickens describes Scrooge as "Hard and sharp as flint". What technique is used?',
    options: ['Simile', 'Metaphor', 'Alliteration', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'The fog still slept on the wing above the drowned city',
    about: 'fog',
    source:
      'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), "Incident of the Letter"',
    from: 'jekyll-and-hyde',
    prompt:
      'Stevenson writes: "The fog still slept on the wing above the drowned city". What technique is "slept"?',
    options: ['Simile', 'Hyperbole', 'Personification', 'Onomatopoeia'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does "cold-hearted" suggest about a character?',
    options: [
      'They have a weak heart',
      'They are unkind and uncaring',
      'They stay calm under pressure',
      'They live somewhere cold',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'Clash, clang, hammer; ding, dong, bell',
    about: 'onomatopoeia',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 5',
    from: 'a-christmas-carol',
    prompt:
      'On Christmas morning Scrooge hears the church bells: "Clash, clang, hammer; ding, dong, bell." What technique is used?',
    options: ['Onomatopoeia', 'Simile', 'Metaphor', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    about: 'short sentences',
    prompt: 'If a writer uses short sentences, what effect might this create?',
    options: [
      'A relaxed mood',
      'Tension or urgency',
      'A slow, lingering pace',
      'Rich, detailed description',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Peter Piper picked a peck." What technique is used?',
    options: ['Sibilance', 'Assonance', 'Alliteration', 'Onomatopoeia'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'Arise fair sun and kill the envious moon',
    source: 'William Shakespeare, Romeo and Juliet, Act 2, Scene 2',
    from: 'romeo-and-juliet',
    prompt:
      'Romeo, looking up at Juliet\'s window, says: "Arise fair sun and kill the envious moon". What does "envious" suggest about the moon?',
    options: [
      "It is jealous of Juliet's beauty",
      'It is shining more brightly than her',
      'It is full and about to set',
      'It is a friend that watches over her',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"He was as brave as a lion." What technique is this?',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does an exclamation mark at the end of a sentence usually show?',
    options: [
      'A pause before the next idea',
      'Strong emotion or surprise',
      'A question with no answer',
      'Words left out of a quotation',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'Softly, in the dusk, a woman is singing to me',
    about: 'sibilance: mood',
    source: 'D. H. Lawrence, "Piano" (1918)',
    from: 'piano',
    prompt:
      'D. H. Lawrence\'s poem opens: "Softly, in the dusk, a woman is singing to me". Which sound technique runs through the line?',
    options: ['Sibilance', 'Assonance', 'Onomatopoeia', 'Plosive sounds'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a character is described as having "a heart of stone", what does this mean?',
    options: [
      'They have a medical condition',
      'They are brave and fearless',
      'They are unfeeling and cruel',
      'They are calm and patient',
    ],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'Ulla, ulla, ulla, ulla',
    source: 'H. G. Wells, The War of the Worlds (1898), Book 2, Chapter 8',
    from: 'the-war-of-the-worlds',
    prompt:
      'In H. G. Wells\'s novel, a strange cry carries across empty London: "Ulla, ulla, ulla, ulla". What technique is used to write it down?',
    options: ['Onomatopoeia', 'Personification', 'Simile', 'Metaphor'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'I loved her against reason, against promise, against peace, against hope',
    source: 'Charles Dickens, Great Expectations (1861), Chapter 29',
    from: 'great-expectations',
    prompt:
      'Pip says of Estella: "I loved her against reason, against promise, against peace, against hope". What does repeating "against" create?',
    options: [
      'A love that defies every reason to stop',
      'A love that is calm, sensible and wise',
      'A sense that he is unsure of his feelings',
      'A sense of his anger towards Estella',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'it writhed and groaned',
    source: 'Charlotte Brontë, Jane Eyre (1847), Chapter 23',
    from: 'jane-eyre',
    prompt:
      'On the night Rochester proposes, Jane notices the chestnut tree in the orchard: "it writhed and groaned". What does this suggest?',
    options: [
      'Nature itself seems to be in pain',
      'The night is calm and perfectly still',
      'The tree is bending to greet the lovers',
      'The tree is simply growing in the rain',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'Could frame thy fearful symmetry',
    source: 'William Blake, "The Tyger" (1794)',
    from: 'the-tyger',
    prompt:
      'Blake asks what immortal hand "Could frame thy fearful symmetry". Which technique links "frame" and "fearful"?',
    options: ['Alliteration', 'Sibilance', 'Onomatopoeia', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a poem uses words like "dark", "shadow" and "cold", what mood is created?',
    options: [
      'Calm and peaceful',
      'Gloomy and threatening',
      'Lively and full of energy',
      'Bright and cheerful',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt: '"Her smile was like sunshine." What does the simile suggest about her smile?',
    options: [
      "It is warm and lifts people's spirits",
      'It is so dazzling that it hurts the eyes',
      'It is cold and keeps people away',
      'It is fake and hides her feelings',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does an ellipsis (...) at the end of a sentence usually suggest?',
    options: [
      'Something left unsaid or unfinished',
      'A firm, final end to the thought',
      'A change of speaker in the dialogue',
      'A list of items of equal weight',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt: '"The thunder grumbled in the distance." What does "grumbled" suggest about the storm?',
    options: [
      'It is low and quietly threatening',
      'It is right overhead and deafening',
      'It is cheerful and playful',
      'It is soothing and gentle',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a character is described as having "fiery eyes", what does this suggest?',
    options: [
      'They are red and sore from crying',
      'They are angry or passionate',
      'They are calm and thoughtful',
      'They are tired and heavy',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The buzzing bees flew by." Which technique is "buzzing" an example of?',
    options: ['Personification', 'Simile', 'Onomatopoeia', 'Metaphor'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    about: 'crept',
    prompt: 'What does the word "crept" suggest about how someone is moving?',
    options: [
      'Quickly and loudly',
      'Slowly and secretly',
      'Happily and openly',
      'Clumsily and noisily',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Time is money." What technique is this?',
    options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Deep in the green sea, the eels creep." What technique is used?',
    options: ['Assonance', 'Alliteration', 'Sibilance', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'Stiffen the sinews, summon up the blood',
    about: 'imperatives',
    source: 'William Shakespeare, Henry V, Act 3, Scene 1',
    from: 'henry-v',
    prompt:
      'King Henry urges his soldiers on: "Stiffen the sinews, summon up the blood". What technique is used?',
    options: ['Imperative verbs', 'Rhetorical questions', 'Similes', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'If you prick us, do we not bleed?',
    source: 'William Shakespeare, The Merchant of Venice, Act 3, Scene 1',
    from: 'the-merchant-of-venice',
    prompt: 'Shylock asks: "If you prick us, do we not bleed?" What technique is used?',
    options: ['Rhetorical question', 'Hyperbole', 'Imperative sentence', 'Oxymoron'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'Friends, Romans, countrymen, lend me your ears',
    about: 'Julius Caesar funeral speeches',
    source: 'William Shakespeare, Julius Caesar, Act 3, Scene 2',
    from: 'julius-caesar',
    prompt:
      'Antony opens his funeral speech: "Friends, Romans, countrymen, lend me your ears". What technique opens the line?',
    options: ['Direct address', 'Rhetorical question', 'Onomatopoeia', 'Oxymoron'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: "Life's but a walking shadow",
    about: "Macbeth's tomorrow speech",
    source: 'William Shakespeare, Macbeth, Act 5, Scene 5',
    from: 'macbeth',
    prompt:
      'Told that his wife is dead, a king says: "Life\'s but a walking shadow". What technique is used?',
    options: ['Metaphor', 'Simile', 'Hyperbole', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    prompt:
      '"This is the cheapest, fastest and greenest way to travel." Which kind of word is repeated to persuade?',
    options: [
      'Superlative adjectives',
      'Comparative adjectives',
      'Imperative verbs',
      'Personal pronouns',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: 'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 1',
    from: 'a-christmas-carol',
    prompt:
      'Dickens calls Scrooge "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner". What links "squeezing", "grasping" and "clutching"?',
    options: [
      'They all describe holding on tightly',
      'They all imitate the sound of coins',
      'They all describe a generous, kind man',
      'They all begin with the very same sound',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    quote: "Will all great Neptune's ocean wash this blood",
    source: 'William Shakespeare, Macbeth, Act 2, Scene 2',
    from: 'macbeth',
    prompt:
      'Just after killing the king, a murderer asks: "Will all great Neptune\'s ocean wash this blood / Clean from my hand?" Which technique is used?',
    options: ['Hyperbole', 'Simile', 'Euphemism', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    kind: 'word',
    about: 'onomatopoeia',
    prompt:
      '"The bacon sizzled in the pan while Grandad read the newspaper." Which word is onomatopoeia?',
    options: ['sizzled', 'Grandad', 'newspaper', 'bacon'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    kind: 'word',
    quote: 'Let not light see my black and deep desires',
    about: 'darkness hiding evil',
    source: 'William Shakespeare, Macbeth, Act 1, Scene 4',
    from: 'macbeth',
    prompt:
      'A nobleman who has begun to dream of murder says in an aside: "Let not light see my black and deep desires." Which word gives the light a human power?',
    options: ['see', 'black', 'deep', 'desires'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    kind: 'word',
    prompt: '"All night, rain lashed the bedroom windows." Which word makes the rain seem violent?',
    options: ['lashed', 'bedroom', 'windows', 'night'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    kind: 'word',
    quote: 'Sounds, and sweet airs, that give delight, and hurt not',
    source: 'William Shakespeare, The Tempest, Act 3, Scene 2',
    from: 'the-tempest',
    prompt:
      'Caliban says the island is full of "Sounds, and sweet airs, that give delight, and hurt not." Which sound creates the sibilance?',
    options: ["the 's' sound", "the 't' sound", "the 'd' sound", "the 'l' sound"],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'word',
    prompt:
      '"Mia froze as the footsteps came closer." Which word shows how Mia reacts to her fear?',
    options: ['froze', 'footsteps', 'closer', 'came'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'word',
    prompt: '"The fox darted across the frozen field." Which word shows the fox moves quickly?',
    options: ['darted', 'frozen', 'across', 'field'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'word',
    prompt:
      '"The room was warm and bright, but outside the wind screamed." Which connective signals the contrast?',
    options: ['but', 'and', 'outside', 'bright'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'word',
    prompt:
      '"Thousands of innocent animals suffer every year." Which adjective is chosen to make readers feel sympathy?',
    options: ['innocent', 'thousands', 'suffer', 'every'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'Tomorrow, and tomorrow, and tomorrow',
    about: "Macbeth's tomorrow speech",
    source: 'William Shakespeare, Macbeth, Act 5, Scene 5',
    from: 'macbeth',
    prompt:
      'Weary of life, a king says: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day". What does repeating "tomorrow" do?',
    options: [
      'It makes time feel endless and dragging',
      'It makes the future sound bright and exciting',
      'It shows that time is running out quickly',
      'It makes the line sound light and playful',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    about: 'imperatives',
    prompt: '"Buy now. Save more. Live better." What effect do the commands have on a reader?',
    options: [
      'They push the reader to act at once',
      'They describe the product in detail',
      'They ask the reader for an opinion',
      'They warn the reader about a danger',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'O, full of scorpions is my mind, dear wife',
    source: 'William Shakespeare, Macbeth, Act 3, Scene 2',
    from: 'macbeth',
    prompt:
      'A new king, afraid of his rivals, tells his wife: "O, full of scorpions is my mind, dear wife". What does the metaphor suggest about his mind?',
    options: [
      'It is tormented by stinging thoughts',
      'It is calm and settled now he is king',
      'It is sharp, clever and ready for battle',
      'It is fascinated by dangerous creatures',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    about: 'list of three',
    prompt:
      '"The streets were empty, silent, lifeless." What effect does the list of three adjectives create?',
    options: [
      'It builds a bleak, deserted mood',
      'It makes the streets sound busy',
      'It creates a cheerful, lively feel',
      'It shows the narrator is excited',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    about: 'onomatopoeia',
    prompt:
      '"Pop, crackle, fizz went the fireworks." What does the onomatopoeia help the reader do?',
    options: [
      'Hear the noise of the display',
      'See the colours in the sky',
      'Feel the cold of the night air',
      'Smell the smoke from the bonfire',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    about: 'sibilance: mood',
    prompt: '"The sweet, soft scent of summer roses." What mood does the sibilance help to create?',
    options: ['Calm and soothing', 'Harsh and violent', 'Tense and fearful', 'Loud and lively'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt: '"Bang. The door slammed shut." What is the effect of opening with "Bang"?',
    options: [
      'It jolts the reader with sudden noise',
      'It slowly builds a calm and quiet mood',
      'It introduces the main character',
      'It explains why the door was shut',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'It is the star to every wandering bark',
    source: 'William Shakespeare, Sonnet 116 (1609)',
    from: 'sonnet-116',
    prompt:
      'Shakespeare writes that true love "is the star to every wandering bark", a bark being a ship. What does the metaphor suggest about love?',
    options: [
      'It guides people through life',
      'It is distant and hard to reach',
      'It only shines for a short time',
      'It is cold and has no feeling',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"The lake was a mirror, still and silver." What does the metaphor suggest about the water?',
    options: [
      'It is calm and perfectly smooth',
      'It is choppy and rough in the wind',
      'It is dirty and murky',
      'It is deep and dangerous',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: '"I trudged home through the rain." What does "trudged" suggest?',
    options: [
      'Walking slowly and wearily',
      'Running home in excitement',
      'Skipping along happily',
      'Marching proudly and fast',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    about: 'short sentences',
    prompt: '"Silence. Then a scream." What does the one-word sentence "Silence." create?',
    options: [
      'A tense pause before something happens',
      'A peaceful, relaxed end to the scene',
      'A long and detailed piece of description',
      'A cheerful change of mood',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: 'We few, we happy few, we band of brothers',
    about: 'pronouns: involving the audience',
    source: 'William Shakespeare, Henry V, Act 4, Scene 3',
    from: 'henry-v',
    prompt:
      'Before the battle, King Henry tells his army: "We few, we happy few, we band of brothers." What does repeating "we" do?',
    options: [
      'It makes the soldiers feel united',
      'It makes the king sound lonely and apart',
      'It describes the army in great detail',
      'It asks the soldiers a direct question',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt: '"The old man\'s face was a map of wrinkles." What does the metaphor suggest?',
    options: [
      'His face is lined from a long life',
      'He has travelled all over the world',
      'He is lost and cannot find his way',
      'His face is young and smooth',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    quote: "There's daggers in men's smiles",
    source: 'William Shakespeare, Macbeth, Act 2, Scene 3',
    from: 'macbeth',
    prompt:
      "After his father's murder, Donalbain warns: \"There's daggers in men's smiles\". What does he mean?",
    options: [
      'Friendly faces may hide murderers',
      'Everyone at court carries a knife',
      'Their friends here will keep them safe',
      'The killers have been caught smiling',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt: '"Our town is drowning in litter." What does "drowning" suggest about the litter?',
    options: [
      'The town is overwhelmed by the amount',
      'The litter is floating in the local river',
      'The town has been flooded by heavy rain',
      'A small amount of litter is easy to clear',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    about: 'list of three',
    prompt:
      '"The cake was a masterpiece, a work of art, a thing of beauty." What effect do the three phrases create?',
    options: [
      'They pile up praise for the cake',
      'They list what the cake is made of',
      'They suggest the cake has gone wrong',
      'They show the speaker is unsure of it',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"The match was cancelled. Again." What does the one-word sentence "Again." suggest about the speaker?',
    options: [
      'They are tired of it happening',
      'They are shocked by a new event',
      'They are glad to have a free day',
      'They are unsure what has happened',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"Fresh, fast and full of flavour: try our new noodles." What does the alliteration do?',
    options: [
      'It makes the slogan catchy',
      'It slows the reader right down',
      'It makes the noodles sound risky',
      'It hides what the noodles are like',
    ],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    kind: 'effect',
    prompt: '"I glanced at the letter. My stomach dropped." What does "My stomach dropped" show?',
    options: [
      'Sudden dread at what the letter says',
      'That the narrator has not eaten',
      'That the narrator dropped the letter',
      'Relief that the news is good',
    ],
    correctIndex: 0,
  },
  // ──── Rung 4: a method and its effect, near neighbours told apart ─────────────────────────────
  {
    grade: 4,
    type: 'technique',
    prompt: '"He was a lion in battle." What technique is this?',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: '"The room fell silent." What does "fell" suggest?',
    options: [
      'The ceiling caved in',
      'The talking stopped at once',
      'A person tripped and fell over',
      'Night had begun to fall',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    about: 'rhetorical question',
    prompt: 'Why might a writer use a rhetorical question?',
    options: [
      'To get a written answer from the reader',
      'To make the reader think about it',
      'To give the reader new facts and figures',
      'To mark the end of a paragraph',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"I\'ve told you a million times to tidy your room." What technique is used?',
    options: ['Metaphor', 'Irony', 'Hyperbole', 'Understatement'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    about: 'pathetic fallacy',
    prompt: '"The weather wept." What does this suggest?',
    options: [
      'Rain is falling and the mood is sad',
      'A person is crying out in the rain',
      'The sun is out and the day is bright',
      'A strong wind is blowing hard',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"She sells sea shells on the sea shore." This contains which two techniques?',
    options: [
      'Metaphor and simile',
      'Alliteration and sibilance',
      'Personification and hyperbole',
      'Oxymoron and irony',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"Life is a rollercoaster." What does the metaphor suggest about life?',
    options: [
      'It has sudden highs and lows',
      'It is fun from start to finish',
      'It goes round and round in circles',
      'It is short and soon over',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    text: 'romeo-and-juliet',
    quote: "star-cross'd lovers",
    prompt: 'In Romeo and Juliet, what does "star-cross\'d lovers" mean?',
    options: [
      'Fate works against their love',
      'They quarrel and cross each other',
      'They are blessed with good luck',
      'They first met under the stars',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Never, never, never, never, never',
    source: 'William Shakespeare, King Lear, Act 5, Scene 3',
    from: 'king-lear',
    prompt:
      'Holding his dead daughter Cordelia, Lear says: "Never, never, never, never, never". What technique is used?',
    options: ['Personification', 'Repetition', 'Simile', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What does the word "lurking" suggest about a character?',
    options: [
      'They wait out of sight to do harm',
      'They are shy and keep to themselves',
      'They are lost and looking for help',
      'They are resting after a long day',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"The classroom was a zoo." What does the metaphor suggest about the class?',
    options: [
      'They are noisy and out of control',
      'They are learning all about animals',
      'They are quiet and well behaved',
      'They are bored and half asleep',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'If a poem has a regular rhyme scheme (ABAB), what effect does this create?',
    options: [
      'A sense of order and musicality',
      'A sense of chaos and disorder',
      'A natural, chatty speaking voice',
      'A sense of rising tension',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'analysis',
    about: 'list of three',
    prompt: 'Why might a writer use a list of three (tricolon)?',
    options: [
      'To make an idea stick and sound complete',
      'To give every example the writer knows',
      'To show the writer cannot choose one',
      'To break a long sentence into short parts',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'If you can meet with Triumph and Disaster',
    source: 'Rudyard Kipling, "If" (1910)',
    from: 'if',
    prompt:
      'A poem gives this advice: "If you can meet with Triumph and Disaster / And treat those two impostors just the same". What technique turns Triumph and Disaster into impostors?',
    options: ['Oxymoron', 'Personification', 'Pathetic fallacy', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    about: 'pathetic fallacy',
    prompt: 'What is pathetic fallacy?',
    options: [
      'Weather or nature reflecting human feelings',
      'A character who is feeling sorry for themselves',
      'Animals given human speech and actions',
      'An argument that is weak and illogical',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Parting is such sweet sorrow',
    source: 'William Shakespeare, Romeo and Juliet, Act 2, Scene 2',
    from: 'romeo-and-juliet',
    prompt:
      'Juliet says goodnight to Romeo: "Parting is such sweet sorrow". What technique is "sweet sorrow"?',
    options: ['Simile', 'Oxymoron', 'Personification', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Double, double, toil and trouble',
    source: 'William Shakespeare, Macbeth, Act 4, Scene 1',
    from: 'macbeth',
    prompt:
      'The witches chant over their cauldron: "Double, double, toil and trouble". Which technique opens the line?',
    options: ['Simile', 'Repetition', 'Metaphor', 'Personification'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What does it mean if a writer describes a character\'s hands as "trembling"?',
    options: [
      'They are frightened or nervous',
      'They are confident and in control',
      'They are waving to a friend',
      'They are bored and restless',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a flashback?',
    options: [
      'To reveal past events behind the present',
      'To give hints about what will happen later',
      'To speed the story on towards its ending',
      'To describe the setting in much more detail',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The silence was deafening." What technique is this?',
    options: ['Simile', 'Personification', 'Oxymoron', 'Alliteration'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    text: 'romeo-and-juliet',
    prompt: 'In Romeo and Juliet, why are the families called "Montagues" and "Capulets"?',
    options: [
      'They came from the story he adapted',
      'They were names of London theatres',
      'He made them up to sound Italian',
      'They are the Italian words for love',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The road stretched endlessly before them." What technique is used?',
    options: ['Personification', 'Hyperbole', 'Simile', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    about: 'rhetorical question',
    prompt: 'What is the effect of a writer using a question as the opening of a text?',
    options: [
      'It shows the writer does not know the answer',
      'It hooks the reader and makes them curious',
      'It sums up the whole text in one line',
      'It makes the opening calm and slow',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The rich man\'s palace stood beside the beggar\'s hut." What technique is used?',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Cowards die many times before their deaths',
    source: 'William Shakespeare, Julius Caesar, Act 2, Scene 2',
    from: 'julius-caesar',
    prompt: 'Caesar says: "Cowards die many times before their deaths". What technique is used?',
    options: ['Paradox', 'Oxymoron', 'Rhetorical question', 'Euphemism'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Then all smiles stopped together. There she stands / As if alive.',
    source: 'Robert Browning, "My Last Duchess" (1842)',
    from: 'my-last-duchess',
    prompt:
      'A duke says of his dead wife\'s portrait: "Then all smiles stopped together. There she stands / As if alive." Which technique carries the sentence over the line break?',
    options: ['Enjambment', 'Caesura', 'End-stopping', 'Refrain'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Some consequence yet hanging in the stars',
    about: 'stars as fate',
    source: 'William Shakespeare, Romeo and Juliet, Act 1, Scene 4',
    from: 'romeo-and-juliet',
    prompt:
      'On his way to the Capulets\' feast, Romeo says: "my mind misgives / Some consequence yet hanging in the stars". What technique is used?',
    options: ['Foreshadowing', 'Flashback', 'Cliffhanger', 'Pathetic fallacy'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt:
      '"Four out of five teenagers say they feel tired at school." Which persuasive method is this?',
    options: ['Statistic', 'Anecdote', 'Expert opinion', 'Emotive language'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt:
      '"Last winter, my neighbour slipped on the icy path outside the library." Which persuasive method is this?',
    options: ['Anecdote', 'Statistic', 'Expert opinion', 'Rhetorical question'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt:
      '"Dr Patel, a sleep scientist, says teenagers need far more sleep than adults." Which persuasive method is this?',
    options: ['Expert opinion', 'Statistic', 'Anecdote', 'Direct address'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt:
      '"Some people say homework builds discipline. However, too much of it leaves no time for rest." What is the first sentence doing?',
    options: [
      'Raising a counter-argument',
      "Quoting an expert's opinion",
      'Telling a short anecdote',
      'Giving a statistic as proof',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    quote: 'Brutus is an honourable man',
    about: 'Julius Caesar funeral speeches',
    source: 'William Shakespeare, Julius Caesar, Act 3, Scene 2',
    from: 'julius-caesar',
    prompt:
      'At Caesar\'s funeral, Antony keeps saying of Caesar\'s killer that "Brutus is an honourable man". What tone does the repetition build?',
    options: ['Ironic', 'Admiring', 'Frightened', 'Uncertain'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'He was a gentleman on whom I built / An absolute trust.',
    source: 'William Shakespeare, Macbeth, Act 1, Scene 4',
    from: 'macbeth',
    prompt:
      'A king says of a traitor he trusted: "He was a gentleman on whom I built / An absolute trust." At that moment the man who will murder him walks in. What technique is this?',
    options: ['Dramatic irony', 'Verbal irony', 'Flashback', 'Pathetic fallacy'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt:
      'A chapter ends: "Then, from downstairs, came the sound of the front door opening." What technique is this ending?',
    options: ['Cliffhanger', 'Flashback', 'Resolution', 'Circular structure'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'The other snarled aloud into a savage laugh',
    source:
      'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), "Search for Mr. Hyde"',
    from: 'jekyll-and-hyde',
    prompt:
      'Utterson rebukes Hyde, and Stevenson writes: "The other snarled aloud into a savage laugh". What technique is used?',
    options: ['Zoomorphism', 'Personification', 'Simile', 'Pathetic fallacy'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Remember me when I am gone away',
    source: 'Christina Rossetti, "Remember" (written 1849, published 1862)',
    from: 'remember',
    prompt:
      'A Victorian sonnet opens: "Remember me when I am gone away, / Gone far away into the silent land". Which technique is "gone away"?',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Ay, ay, a scratch, a scratch',
    about: "Mercutio's death",
    source: 'William Shakespeare, Romeo and Juliet, Act 3, Scene 1',
    from: 'romeo-and-juliet',
    prompt:
      'Fatally wounded by Tybalt, Mercutio is asked if he is hurt. He replies: "Ay, ay, a scratch, a scratch." What technique is used?',
    options: ['Understatement', 'Hyperbole', 'Personification', 'Oxymoron'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'The sedge is withered from the lake, / And no birds sing',
    about: 'pathetic fallacy',
    source: 'John Keats, "La Belle Dame sans Merci" (1819)',
    from: 'la-belle-dame-sans-merci',
    prompt:
      'A pale knight wanders by a lake where "The sedge is withered from the lake, / And no birds sing". What is it called when a setting mirrors a character\'s state like this?',
    options: ['Pathetic fallacy', 'Personification', 'Simile', 'Extended metaphor'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    quote: 'Not that I loved Caesar less, but that I loved Rome more',
    about: 'Julius Caesar funeral speeches',
    source: 'William Shakespeare, Julius Caesar, Act 3, Scene 2',
    from: 'julius-caesar',
    prompt:
      'Brutus explains why he killed Caesar: "Not that I loved Caesar less, but that I loved Rome more." What technique is used?',
    options: ['Antithesis', 'Simile', 'Onomatopoeia', 'Oxymoron'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"I run. The ground shakes. The dog is right behind me." What does the present tense do?',
    options: [
      'It makes the danger feel immediate',
      'It shows the events happened long ago',
      'It makes the narrator seem calm',
      'It shows the events are imagined',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      'A story begins: "I never told anyone what I saw that night." What does the first-person narrator do?',
    options: [
      'It draws the reader into a secret',
      "It shows every character's thoughts",
      'It keeps the reader at a distance',
      'It shows the narrator is a liar',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"Outside, children laughed in the sunshine. Inside, the old man sat alone in the dark." What does the juxtaposition do?',
    options: [
      'It makes his loneliness more striking',
      'It shows the children are unkind to him',
      'It describes the weather in detail',
      'It shows the old man is content',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    quote: 'The night has been unruly',
    about: 'nature in disorder',
    source: 'William Shakespeare, Macbeth, Act 2, Scene 3',
    from: 'macbeth',
    prompt:
      'On the night Duncan is murdered, Lennox reports: "The night has been unruly: where we lay, / Our chimneys were blown down". What does the wild weather suggest?',
    options: [
      'Nature itself is in uproar at the crime',
      'The storm itself was what killed the king',
      'The night was peaceful, calm and still',
      'Winter has come early this year to Scotland',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"Pick up your pens, put down your phones and pay attention." What do the repeated \'p\' sounds do?',
    options: [
      'They make the orders sound sharp and firm',
      'They make the orders sound soft and gentle',
      'They make the speaker sound unsure',
      'They slow the sentence into a dreamy pace',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"The road went on and on, past fields and farms and empty barns, past the river and the mill, until at last the village appeared." What does the long sentence do?',
    options: [
      'It mirrors the long, tiring journey',
      'It creates a moment of sudden shock',
      'It shows the journey was quick and easy',
      'It makes the village seem frightening',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"Honestly, mate, it was a total nightmare." What does the informal language do?',
    options: [
      'It makes the speaker sound casual and real',
      'It makes the speaker sound formal and distant',
      'It makes the speaker sound old-fashioned',
      'It makes the speaker sound like an expert',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"We regret to inform you that your application has been unsuccessful." What tone does the formal wording create?',
    options: ['Polite but distant', 'Warm and chatty', 'Angry and rude', 'Excited and cheerful'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"I just... I can\'t... I\'m sorry." What do the ellipses show about the speaker?',
    options: [
      'She is struggling to get the words out',
      'She is calmly listing all of her reasons',
      'She is shouting at the listener',
      'She is reading from a script',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    quote: "How sharper than a serpent's tooth it is / To have a thankless child",
    source: 'William Shakespeare, King Lear, Act 1, Scene 4',
    from: 'king-lear',
    prompt:
      'Lear cries: "How sharper than a serpent\'s tooth it is / To have a thankless child". What does the comparison suggest?',
    options: [
      'Ingratitude from a child hurts most of all',
      'He has been bitten by a snake at the palace',
      'His daughter has given him a generous gift',
      'He is calm and forgiving towards his child',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'word',
    prompt:
      '"The minister gave a slippery answer to the reporter\'s question." What does "slippery" suggest?',
    options: [
      'He is being evasive',
      'He is clumsy and falls over',
      'He is speaking very fast',
      'He is warm and friendly',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    quote: 'Out, out, brief candle',
    about: "Macbeth's tomorrow speech",
    source: 'William Shakespeare, Macbeth, Act 5, Scene 5',
    from: 'macbeth',
    prompt:
      'Hearing that his wife is dead, a king says: "Out, out, brief candle". What does the candle stand for?',
    options: [
      'A life that is short and easily ended',
      'A light that guides him through the dark',
      'A celebration of his victory in battle',
      'A fire that will burn his enemies',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'word',
    prompt: '"The head teacher marched into the hall." What does "marched" suggest about her?',
    options: [
      'She is determined and in charge',
      'She is shy and uncertain of herself',
      'She is tired and slow',
      'She is lost and confused',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"It was a cramped, airless flat with one small window." What impression do the adjectives create?',
    options: [
      'It feels uncomfortable and trapping',
      'It feels spacious and bright',
      'It feels cosy and welcoming',
      'It feels grand, expensive and stylish',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"Where was she? Why hadn\'t she called?" What do these questions in a story show?',
    options: [
      "The character's growing worry",
      'A quiz for the reader to answer',
      'That the character is calm',
      'That the story has ended',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      '"The low moan of the old foghorn rolled across the bay." What does the repeated long \'o\' sound create?',
    options: [
      'A slow, mournful mood',
      'A quick, cheerful rhythm',
      'A sharp, sudden noise',
      'A light, playful mood',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"The rumour spread like wildfire." What does the simile suggest about the rumour?',
    options: [
      'It moved fast and could not be stopped',
      'It was hot and dangerous to touch',
      'It was bright and beautiful to see',
      'It started in a forest far away from town',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'word',
    prompt:
      '"School uniform is expensive. However, it stops pupils judging each other\'s clothes." What does "However" do?',
    options: [
      'It turns to the opposing side',
      'It adds another reason for the same view',
      'It sums up the whole argument',
      'It introduces an example',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt:
      'In a story, one paragraph is a single short line: "Nobody came." What is the effect of giving it a paragraph of its own?',
    options: [
      'It makes the moment stand alone',
      'It adds many details at once',
      'It introduces a new character',
      'It moves the story back in time',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'meaning',
    kind: 'effect',
    prompt: '"The bread was warm, crusty and golden." Which senses does the description appeal to?',
    options: ['Touch and sight', 'Sound and smell', 'Taste and hearing', 'Smell and taste'],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: 'What is a volta in a sonnet?',
    options: [
      'A turn in the argument or mood',
      'The title at the head of the poem',
      'A line that is repeated as a refrain',
      'The pattern of the rhyme scheme',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: 'What is a caesura?',
    options: [
      'A pause in the middle of a line',
      'A line that runs on into the next',
      'A pair of rhyming lines together',
      'The final line of a stanza',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: 'What is free verse?',
    options: [
      'Poetry with no regular rhyme or metre',
      'Poetry with strict metre but no rhyme',
      'A sonnet that breaks the usual rules',
      'Poetry set out in paragraphs, not lines',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: 'What is an extended metaphor?',
    options: [
      'A metaphor kept going over several lines',
      'A very long sentence with many clauses',
      'Two different metaphors placed side by side',
      'A metaphor that everyone understands',
    ],
    correctIndex: 0,
  },
  // ──── Rung 5: a quoted line from a set text, and what one word or image does ──────────────────
  {
    grade: 5,
    type: 'analysis',
    text: 'macbeth',
    about: 'blood and guilt',
    prompt: 'In Macbeth, what does blood symbolise?',
    options: [
      'Power and ambition',
      'Guilt and violence',
      'Love and passion',
      'Peace and innocence',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'The fog came pouring in at every chink and keyhole',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 1',
    from: 'a-christmas-carol',
    prompt:
      'On Christmas Eve, Dickens writes: "The fog came pouring in at every chink and keyhole". What does "pouring" suggest about the fog?',
    options: [
      'It flows in thickly, like a liquid',
      'It drifts in lightly and will soon lift',
      'It is turning into a heavy, freezing rain',
      'It warms the office like steam from a kettle',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'It was on a dreary night of November',
    about: 'pathetic fallacy',
    source: 'Mary Shelley, Frankenstein (1818), Chapter 5',
    from: 'frankenstein',
    prompt:
      'A scientist recalls the night he brought his creation to life: "a dreary night of November", when "the rain pattered dismally against the panes". What does the weather add to the moment?',
    options: [
      'A gloom that hints his triumph is a horror',
      'A sense that nature is celebrating with him',
      'A reason why the experiment fails at first',
      'A calm that shows he is proud and content',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'technique',
    quote: 'man is not truly one, but truly two',
    about: "Jekyll's statement on duality",
    source:
      'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), "Henry Jekyll\'s Full Statement of the Case"',
    from: 'jekyll-and-hyde',
    prompt:
      'A doctor writes in his final statement: "man is not truly one, but truly two." This is an example of:',
    options: ['Oxymoron', 'Juxtaposition', 'Irony', 'Personification'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'a-christmas-carol',
    quote: 'solitary as an oyster',
    prompt: 'In "A Christmas Carol", why does Dickens present Scrooge as "solitary as an oyster"?',
    options: [
      'He is shut inside himself, by choice',
      'He lives alone in a cottage by the sea',
      'He has made his fortune trading at sea',
      'He is slippery and hard to pin down',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'Why might a poet use enjambment?',
    options: [
      'To let a sentence run on, creating flow',
      'To make the reader stop at each line end',
      'To make the rhyme scheme easier to fit',
      'To mark a change of speaker in the poem',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    text: 'romeo-and-juliet',
    about: 'light and dark in Romeo and Juliet',
    prompt: 'In Romeo and Juliet, why does Shakespeare use light and dark imagery?',
    options: [
      "To set love's beauty against danger",
      'To show which family each person is from',
      'To describe the hot summer weather in Verona',
      'To show the lovers are only safe by day',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'ozymandias',
    quote: 'shattered visage',
    prompt: 'In "Ozymandias", what does the "shattered visage" represent?',
    options: [
      'Even great power crumbles with time',
      'A mirror broken by the king in anger',
      "The sculptor's failure to finish his work",
      'A face damaged by grave robbers',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    about: 'doors',
    prompt: 'In Jekyll and Hyde, what does the locked door of the laboratory represent?',
    options: [
      'The secrets that respectability hides',
      "The poor state of Jekyll's old house",
      "The laboratory's danger to visitors",
      "Jekyll's wish to work in peace and quiet",
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'london',
    quote: 'mind-forged manacles',
    prompt: 'In "London" by Blake, what does the phrase "mind-forged manacles" suggest?',
    options: [
      'People are trapped by ideas they accept',
      "People are chained up in London's prisons",
      'People are free to think as they choose',
      "London's blacksmiths make chains for ships",
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'technique',
    quote: 'But soft, what light through yonder window breaks?',
    source: 'William Shakespeare, Romeo and Juliet, Act 2, Scene 2',
    from: 'romeo-and-juliet',
    prompt:
      'Romeo says: "But soft, what light through yonder window breaks?" What is the metre of this line?',
    options: ['Iambic pentameter', 'Trochaic pentameter', 'Iambic tetrameter', 'Free verse'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'bayonet-charge',
    quote: 'raw-seamed',
    prompt:
      'In "Bayonet Charge" by Hughes, the soldier runs in a "raw-seamed" uniform. What does "raw-seamed" suggest?',
    options: [
      'His uniform chafes him sore as he runs',
      'His uniform is smart, neat and stylish',
      'His uniform has been ripped by bullets',
      'His uniform makes him proud to serve',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    text: 'great-expectations',
    about: 'Satis House',
    prompt: 'In Great Expectations, what does Satis House symbolise?',
    options: [
      'Frozen time, decay and a stalled life',
      'Honest work and the warmth of family',
      'A typical, comfortable Victorian home',
      'Wealth that brings happiness to its owner',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'the-charge-of-the-light-brigade',
    quote: 'valley of Death',
    prompt: 'In "The Charge of the Light Brigade", what does "valley of Death" allude to?',
    options: [
      'Psalm 23, giving the ride a solemn weight',
      'A Shakespeare play about a doomed army',
      'A Greek myth of the road to the underworld',
      'A hymn sung by the soldiers as they rode',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    text: 'macbeth',
    about: 'blood and guilt',
    prompt: 'In Macbeth, why does Lady Macbeth sleepwalk and try to wash her hands?',
    options: [
      'Her buried guilt breaks out at night',
      'She is ill with a fever from the cold castle',
      'She is rehearsing a spell from the witches',
      'She is pretending, to fool the doctor',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'poppies',
    prompt: 'In "Poppies" by Weir, what do poppies symbolise?',
    options: [
      'Remembrance of those killed in war',
      'The joy of spring in the garden',
      'The bright colour red and nothing more',
      'Victory and celebration after war',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    text: 'animal-farm',
    about: 'the windmill',
    prompt: 'In Animal Farm, what does the windmill represent?',
    options: [
      'A promised future used to make them toil',
      'A real mill that makes the farm rich for all',
      "Napoleon's own idea from the very start",
      'The power of nature over the farm',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'war-photographer',
    quote: 'spools of suffering',
    prompt:
      'In "War Photographer" by Duffy, the photographer\'s rolls of film are called "spools of suffering". What does the phrase suggest?',
    options: [
      "Each roll of film holds real people's pain",
      'The photographer is suffering from illness',
      'The films are old, damaged and worn out',
      'The camera is broken and hard to use',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    prompt: 'In Jekyll and Hyde, why does Hyde become progressively harder to control?',
    options: [
      'Evil, once indulged, grows stronger',
      "Jekyll's body grows physically stronger",
      'Utterson secretly protects Hyde',
      'Lanyon gives Hyde a stronger drug',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    quote: 'the miserable monster whom I had created',
    source: 'Mary Shelley, Frankenstein (1818), Chapter 5',
    from: 'frankenstein',
    prompt:
      'A scientist describes the being he has brought to life: "the miserable monster whom I had created". Which word shows he cannot escape responsibility for it?',
    options: ['created', 'miserable', 'monster', 'whom'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'I am no bird; and no net ensnares me',
    source: 'Charlotte Brontë, Jane Eyre (1847), Chapter 23',
    from: 'jane-eyre',
    prompt: 'Jane tells Rochester: "I am no bird; and no net ensnares me". What is she claiming?',
    options: [
      'She is free, and no one can trap or keep her',
      'She is a wild bird that he must set free',
      'She is trapped, too weak to escape his hold',
      'She will trap him, as a hunter traps birds',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    quote: "this world was being watched keenly and closely by intelligences greater than man's",
    source: 'H. G. Wells, The War of the Worlds (1898), Book 1, Chapter 1',
    from: 'the-war-of-the-worlds',
    prompt:
      'A novel opens: "No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man\'s". Which word first makes the reader feel spied on?',
    options: ['watched', 'believed', 'nineteenth', 'greater'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter 9',
    from: 'the-great-gatsby',
    prompt:
      'A novel ends: "So we beat on, boats against the current, borne back ceaselessly into the past." What does the image suggest about people?',
    options: [
      'They strain forward but are pulled back',
      'They sail calmly towards a bright future',
      'They stop trying and drift with the tide',
      'They are sailors on their voyage home',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    quote: 'If you can keep your head when all about you',
    source: 'Rudyard Kipling, "If" (1910)',
    from: 'if',
    prompt:
      'A poem begins: "If you can keep your head when all about you / Are losing theirs and blaming it on you". What does "keep your head" mean here?',
    options: [
      'Stay calm when others panic',
      'Stay alive when others die',
      'Keep your thoughts to yourself',
      'Stay proud and look down on others',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'If music be the food of love, play on',
    source: 'William Shakespeare, Twelfth Night, Act 1, Scene 1',
    from: 'twelfth-night',
    prompt:
      'A play opens with a lovesick duke saying: "If music be the food of love, play on". What does the metaphor suggest?',
    options: [
      'Music feeds his love and keeps it alive',
      'Music makes him feel angry and restless',
      'He is hungry and wants his dinner served',
      'Love is a song that he wants to write',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'The course of true love never did run smooth',
    source: "William Shakespeare, A Midsummer Night's Dream, Act 1, Scene 1",
    from: 'a-midsummer-nights-dream',
    prompt:
      'A young lover sighs: "The course of true love never did run smooth". What does the image suggest about love?',
    options: [
      'It always meets obstacles along the way',
      'It always flows calmly once it starts',
      'It is a race that the fastest lover will win',
      'It ends as soon as the lovers marry',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote: 'It droppeth as the gentle rain from heaven',
    source: 'William Shakespeare, The Merchant of Venice, Act 4, Scene 1',
    from: 'the-merchant-of-venice',
    prompt:
      'Portia says: "The quality of mercy is not strain\'d, / It droppeth as the gentle rain from heaven". What does the simile suggest about mercy?',
    options: [
      'It falls freely, like a gift from above',
      'It must be forced out of people with effort',
      'It is rare and falls only now and then',
      'It is cold and harsh, like a winter storm',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    quote: 'Something is rotten in the state of Denmark',
    source: 'William Shakespeare, Hamlet, Act 1, Scene 4',
    from: 'hamlet',
    prompt:
      'A sentry on watch, having just seen a ghost, says: "Something is rotten in the state of Denmark." What does "rotten" suggest?',
    options: [
      'Corruption is spreading from the top',
      "The castle's food stores have gone bad",
      'The weather has turned damp and cold',
      'The country is poor after a long war',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'technique',
    quote: "Some are born great, some achieve greatness, and some have greatness thrust upon 'em",
    source: 'William Shakespeare, Twelfth Night, Act 2, Scene 5',
    from: 'twelfth-night',
    prompt:
      'A forged letter tells its reader: "Some are born great, some achieve greatness, and some have greatness thrust upon \'em". Which technique shapes the sentence?',
    options: ['A list of three', 'Personification', 'An oxymoron', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    quote:
      'We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep.',
    source: 'William Shakespeare, The Tempest, Act 4, Scene 1',
    from: 'the-tempest',
    prompt:
      'A magician, ending the show he has staged for his daughter and her betrothed, says: "We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep." What does he suggest about life?',
    options: [
      'It is brief and unreal, soon over',
      'It is long and full of great adventures',
      'It is a nightmare full of fear and pain',
      'It goes round in circles, year after year',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'macbeth',
    quote: 'A little water clears us of this deed',
    about: 'blood and guilt',
    prompt:
      'In Macbeth, Lady Macbeth says "A little water clears us of this deed". Which word shows how lightly she treats the murder?',
    options: ['little', 'water', 'clears', 'deed'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    text: 'a-christmas-carol',
    quote: 'Darkness is cheap, and Scrooge liked it.',
    prompt:
      'In A Christmas Carol, as Scrooge climbs his dark stairs, the narrator remarks: "Darkness is cheap, and Scrooge liked it." What does this short sentence suggest?',
    options: [
      'He loves the dark because it costs nothing',
      'He is afraid of the dark and hides from it',
      'He cannot afford candles because he is poor',
      'He enjoys the dark because it helps him sleep',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'an-inspector-calls',
    quote: 'community and all that nonsense',
    prompt:
      'In An Inspector Calls, Birling sneers at people who talk of "community and all that nonsense". Which word shows his contempt?',
    options: ['nonsense', 'community', 'all', 'that'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'pride-and-prejudice',
    quote: 'It is a truth universally acknowledged',
    prompt:
      'Pride and Prejudice opens: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." Which word exaggerates how widely the idea is believed?',
    options: ['universally', 'truth', 'single', 'fortune'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'jekyll-and-hyde',
    quote: 'Something troglodytic',
    prompt:
      'In Jekyll and Hyde, Utterson struggles to describe Hyde, who seems "hardly human": "Something troglodytic, shall we say?" Which word makes Hyde seem primitive?',
    options: ['troglodytic', 'human', 'hardly', 'Something'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    text: 'romeo-and-juliet',
    quote: 'These violent delights have violent ends',
    prompt:
      'In Romeo and Juliet, just before the secret wedding, Friar Lawrence warns: "These violent delights have violent ends". What does the line suggest?',
    options: [
      'Love this fierce and fast may end in disaster',
      'The lovers will soon grow bored of each other',
      'The wedding party will turn into a brawl',
      'Their love is calm and will last a lifetime',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    text: 'animal-farm',
    quote: 'Four legs good, two legs bad',
    prompt:
      'In Animal Farm, the sheep learn to bleat "Four legs good, two legs bad" for hours on end. What does the slogan do?',
    options: [
      'It replaces thought with a simple chant',
      'It explains the rules of Animalism in full',
      'It shows the sheep are the cleverest animals',
      'It welcomes humans back on to the farm',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'effect',
    text: 'great-expectations',
    quote: 'to look at my coarse hands and my common boots',
    prompt:
      'In Great Expectations, after his first visit to Satis House, Pip goes off alone "to look at my coarse hands and my common boots". What has Estella taught him to feel?',
    options: [
      'Shame at being working class',
      'Pride in his strong, working hands',
      'Worry that his boots are worn out',
      'Delight that Estella noticed him',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'the-explorers-daughter',
    quote: 'my heart leapt for both hunter and narwhal',
    prompt:
      'In The Explorer\'s Daughter, Kari Herbert writes "my heart leapt for both hunter and narwhal" as a hunter raises his harpoon. Which word shows that she will not take sides?',
    options: ['heart', 'leapt', 'both', 'narwhal'],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'young-and-dyslexic',
    quote: "Us dyslexic people, we've got it going on",
    prompt:
      'Near the end of Young and dyslexic? You\'ve got it going on, Benjamin Zephaniah tells children "Us dyslexic people, we\'ve got it going on". Which word breaks formal grammar, so the line sounds like everyday speech?',
    options: ['Us', 'dyslexic', 'people', 'going'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'out-out',
    quote: 'saws knew what supper meant',
    prompt:
      'In Robert Frost\'s "Out, Out", the accident comes just as the boy\'s sister announces supper, as if "saws knew what supper meant". Which word gives the machine a mind of its own?',
    options: ['saws', 'knew', 'supper', 'meant'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'an-unknown-girl',
    quote: 'I have new brown veins',
    prompt:
      'In An Unknown Girl by Moniza Alvi, the speaker looks at the henna pattern on her hand and says "I have new brown veins". Which word quietly admits that this belonging has only just been acquired?',
    options: ['have', 'new', 'brown', 'veins'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'chinese-cinderella',
    quote: 'summoned by Father to enter the Holy of Holies',
    prompt:
      'In Chinese Cinderella, Adeline is "summoned by Father to enter the Holy of Holies", a room she has never been invited into. What does this image suggest about Father?',
    options: [
      'He is a devout man who spends his evenings praying alone in a chapel at home',
      'He is a warm, open father, and his room is the busy heart of family life',
      'He is a remote, god-like figure, and his private room is a forbidden place',
      'He is a priest, given the title Father, who runs the boarding school she attends',
    ],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'to-kill-a-mockingbird',
    quote: 'Thus began our longest journey together.',
    prompt:
      'In To Kill a Mockingbird, Chapter 27 ends as Jem sets off to walk Scout, dressed as a ham, to the school pageant: "Thus began our longest journey together." Which word jokes about the distance, when the school is only a short walk away?',
    options: ['Thus', 'began', 'longest', 'together'],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'things-fall-apart',
    quote: 'like a drunken giant walking with the limbs of a mosquito',
    prompt:
      'In Things Fall Apart, in the days after Ikemefuna\'s death, Okonkwo feels "like a drunken giant walking with the limbs of a mosquito". What does this image suggest about him?',
    options: [
      'He has caught a fever from the mosquitoes of the forest and is too weak to work',
      'The greatest wrestler in the villages has been undone by a grief he will not admit',
      "He is proud of a giant's strength that makes all the other men look small beside him",
      "He has been drinking palm-wine with Obierika to celebrate the Oracle's decision",
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'a-midsummer-nights-dream',
    quote: 'And though she be but little, she is fierce.',
    prompt:
      'In A Midsummer Night\'s Dream, as the two friends turn on each other in the wood, Helena says of Hermia "And though she be but little, she is fierce." Which word holds a grudging respect inside the insult?',
    options: ['though', 'but', 'little', 'fierce'],
    correctIndex: 3,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'blues-for-an-alabama-sky',
    quote: "that Alabama sky where the stars are so thick it's bright as day",
    prompt:
      'In Blues for an Alabama Sky, Leland proposes to Angel by recalling the night he first saw her, when Harlem\'s sky looked like "that Alabama sky where the stars are so thick it\'s bright as day". What does this image suggest about him?',
    options: [
      'He fears the dark streets of Harlem and wants to leave New York as soon as he can',
      'He dreams of the bright lights of Paris, where Josephine Baker is already a star',
      'He is tender and homesick, in love with an idea of home that he pins on her',
      'He despises the South he left behind and means never to go back to Alabama',
    ],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'what-it-means-when-a-man-falls-from-the-sky',
    quote: 'she is his brightest ember and he would not have her dimmed',
    prompt:
      'In What it Means When a Man Falls from the Sky, in the story \'Light\', Enebeli will not punish his bold daughter after her headmaster complains, because "she is his brightest ember and he would not have her dimmed". Which word makes her both warm and fragile, a light that could easily go out?',
    options: ['brightest', 'ember', 'dimmed', 'would'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'fire-on-the-mountain',
    quote: 'The care of others was a habit Nanda Kaul had mislaid.',
    prompt:
      'In Fire on the Mountain, as Nanda Kaul waits unwillingly for her great-granddaughter Raka to arrive, the narrator says "The care of others was a habit Nanda Kaul had mislaid." What does the verb "mislaid" suggest about her?',
    options: [
      'She has let a lifetime of mothering slip away, as casually as losing a key',
      'She has deliberately destroyed every memory of the many children she raised',
      'She still treasures caring for others and secretly longs for Raka to need her',
      'She was forced by her husband to care for no one except his dinner guests',
    ],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'of-mice-and-men',
    quote: 'A silent head and beak lanced down',
    prompt:
      'In Of Mice and Men, Chapter 6 opens at the pool, where a heron stands in the shallows and "A silent head and beak lanced down" on a water snake. Which word gives the heron\'s strike the action of a spear?',
    options: ['silent', 'head', 'beak', 'lanced'],
    correctIndex: 3,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'kindertransport',
    quote: 'Germany spat me out. England took me in.',
    prompt:
      'In Kindertransport, Evelyn sums up her life for Faith in two short sentences: "Germany spat me out. England took me in." Which word shows that she has come to see herself as something disgusting, to be got rid of?',
    options: ['Germany', 'spat', 'England', 'took'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'remember',
    quote: 'Remember me when no more, day by day, / You tell me of our future that you planned',
    prompt:
      'In "Remember" by Christina Rossetti, the speaker asks: "Remember me when no more, day by day, / You tell me of our future that you planned". Which word puts the lovers\' future in the past, as if it were already over?',
    options: ['Remember', 'tell', 'future', 'planned'],
    correctIndex: 3,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'hide-and-seek',
    quote: 'hold their breath',
    prompt:
      'In Hide and Seek by Vernon Scannell, the child comes out of the shed to claim the win and finds that the bushes "hold their breath". What does this image suggest?',
    options: [
      'The seekers are crouching behind the bushes, ready to jump out on the child',
      'A storm is coming, and the bushes have gone still before the wind arrives',
      "The garden has taken over the child's own tactic, as if it were hiding now",
      'The garden is kind to the child, sheltering the hider from the cold night air',
    ],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'the-whale-rider',
    quote: 'Let this be the one to flower when the people are troubled',
    prompt:
      'In The Whale Rider, the last spear will not leave the whale rider\'s hand, so he prays over it: "Let this be the one to flower when the people are troubled". What does the prayer suggest about this spear?',
    options: [
      "It will be thrown at the tribe's enemies in a war that is soon to come",
      "It will be planted on the rider's grave, so that flowers grow there for ever",
      'It is a weapon turned into a seed, to grow into a rescuer in a time of need',
      'It carries a curse that will bring trouble on whoever finds it in years to come',
    ],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'blessing',
    quote: 'kindly god',
    prompt:
      'In "Blessing" by Imtiaz Dharker, the reader is told to picture a single drop falling into a cup, and its echo is heard as a "kindly god" speaking. What does this image suggest?',
    options: [
      'The people fear an angry god who has kept the rain away from the city',
      'The speaker hears a real call to prayer, ringing out from a temple nearby',
      'Water is so scarce that even one imagined drip seems holy and generous',
      'The monsoon has come at last, and this drop is the first of a downpour',
    ],
    correctIndex: 2,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'blood-brothers',
    quote: "I couldn't afford to keep both of you.",
    prompt:
      'In Blood Brothers, in the final scene, Mrs Johnstone at last tells the twins the truth: "I couldn\'t afford to keep both of you." Which word turns her choice between her sons into a question of money?',
    options: ["couldn't", 'afford', 'keep', 'both'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'dna',
    quote: "This is a bad situation. We didn't want this situation.",
    prompt:
      'In "DNA" by Dennis Kelly, Phil lays a hand on Brian\'s shoulder and calmly tells him: "This is a bad situation. We didn\'t want this situation." Which word turns a boy\'s death and an innocent man\'s arrest into a problem to be managed?',
    options: ['bad', 'situation', 'We', 'want'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'journeys-end',
    quote: 'And we shall be in the front row of the stalls.',
    prompt:
      'In Journey\'s End, after hearing that the German attack is expected on Thursday, Stanhope tells Osborne: "And we shall be in the front row of the stalls." What does this image suggest?',
    options: [
      'Stanhope looks forward to a night at a London theatre once the company is relieved and sent on leave',
      'The company will see the whole attack from close up, with no way to leave, as if trapped at a show',
      'The company will be held far back, watching other battalions do the fighting from a safe distance',
      'Stanhope expects his men to be decorated for bravery in front of the whole regiment after the attack',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    kind: 'word',
    text: 'telling-tales',
    quote: 'Her eyes investigated, quick as mice.',
    prompt:
      'In \'The Darkness Out There\' from Telling Tales, Mrs Rutter welcomes Sandra and Kerry warmly, but "Her eyes investigated, quick as mice." Which word makes this kindly old woman a watcher who weighs up her visitors?',
    options: ['eyes', 'investigated', 'quick', 'mice'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'refugee-boy',
    quote: 'In England the stars have to sleep. They take it in turns to shine.',
    prompt:
      'In Refugee Boy, in the play\'s first scene, Mr Kelo tells Alem about England: "In England the stars have to sleep. They take it in turns to shine." What does this image suggest?',
    options: [
      'England is so cloudy and grey that hardly any stars can be seen above its cities at night',
      'England is a fair and orderly country, where every person can expect a share of the light',
      'England is a frightening place, where the nights are long and dark and the people sleep',
      'Alem must take turns with his father to stay awake through the night, keeping watch',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'the-sign-of-four',
    quote: 'This Agra treasure intervened like an impassable barrier between us.',
    prompt:
      'In The Sign of Four, Watson hides his love for Mary Morstan, since she may soon be an heiress: "This Agra treasure intervened like an impassable barrier between us." What does this image suggest?',
    options: [
      'The treasure is locked in an iron box so heavy and strong that no one will be able to open it',
      'A fortune would make his love look like greed, so his sense of honour keeps him silent',
      'Holmes has forbidden Watson to court a client until the mystery of the pearls is solved',
      "Mary's family would never let her marry a man of Watson's lower rank and smaller means",
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    text: 'the-war-of-the-worlds',
    quote: 'So some respectable dodo in the Mauritius might have lorded it in his nest',
    prompt:
      'In The War of the Worlds, the narrator recalls his confident dinner after predicting that one shell will kill the Martians: "So some respectable dodo in the Mauritius might have lorded it in his nest". What does the dodo image suggest?',
    options: [
      "The Martians are like dodos, far too slow and heavy under Earth's gravity to survive for long",
      "His comfort was as blind as a bird's that never imagined the sailors who would end its kind",
      'He was a fool whom the Martians would mock, as sailors once laughed at the clumsy dodo',
      'He felt as safe in his home as a bird in its nest, and the Martians never reach his house',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    kind: 'word',
    quote:
      'It had the effect of a spell, taking her out of the ordinary relations with humanity, and enclosing her in a sphere by herself.',
    source: 'Nathaniel Hawthorne, The Scarlet Letter (1850), Chapter 2',
    from: 'the-scarlet-letter',
    prompt:
      'A narrator describes the letter of shame a woman must wear: "It had the effect of a spell, taking her out of the ordinary relations with humanity, and enclosing her in a sphere by herself." Which word suggests the letter\'s power is almost magical?',
    options: ['spell', 'sphere', 'enclosing', 'ordinary'],
    correctIndex: 0,
  },
  {
    grade: 5,
    type: 'analysis',
    kind: 'word',
    quote: 'Age cannot wither her, nor custom stale / Her infinite variety',
    source: 'William Shakespeare, Antony and Cleopatra, Act 2, Scene 2',
    from: 'antony-and-cleopatra',
    prompt:
      'A soldier says of a queen: "Age cannot wither her, nor custom stale / Her infinite variety". Which word suggests that habit usually dulls what we love?',
    options: ['custom', 'wither', 'infinite', 'variety'],
    correctIndex: 0,
  },
  // ──── Rung 6: a quoted line in its text, and the method behind it ─────────────────────────────
  {
    grade: 6,
    type: 'analysis',
    text: 'an-inspector-calls',
    prompt: 'How does Priestley use the Inspector as a dramatic device in "An Inspector Calls"?',
    options: [
      "As the voice of the play's message",
      'As comic relief between tense scenes',
      "As a symbol of the Birlings' capitalism",
      'As a love interest who unsettles Sheila',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    text: 'macbeth',
    quote: 'Fair is foul, and foul is fair',
    prompt: '"Fair is foul, and foul is fair." How does this relate to themes in Macbeth?',
    options: [
      'It sets up deception and moral confusion',
      'It describes the stormy weather on the heath',
      'It praises the battle Macbeth has just won',
      'It is about how ugly the witches look',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    about: 'fog',
    prompt: "In Jekyll and Hyde, what does Stevenson's London fog symbolise?",
    options: [
      'Secrecy and a blurring of good and evil',
      'The beauty of the great city at night',
      'The smoke of the new Victorian factories',
      'The dull weather of a London winter',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'technique',
    text: 'a-christmas-carol',
    prompt:
      'What structural technique does Dickens use by dividing "A Christmas Carol" into staves?',
    options: [
      'Chapters named like the verses of a song',
      'A story told only through a set of letters',
      "A narrator's unbroken stream of thoughts",
      'A flashback in each and every chapter',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'lord-of-the-flies',
    about: 'the conch',
    prompt: 'In "Lord of the Flies", what does the conch symbolise?',
    options: [
      'Order, rules and fair debate',
      'Nature and the untamed wild',
      'Violence and the thrill of the hunt',
      'Isolation, fear and loneliness',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    text: 'animal-farm',
    quote: 'The creatures outside looked from pig to man, and from man to pig',
    about: 'pigs become human',
    prompt:
      'In Animal Farm, "The creatures outside looked from pig to man, and from man to pig". What does Orwell suggest?',
    options: [
      'The pigs now mirror the humans they overthrew',
      'The pigs and the humans are now true friends',
      'The animals can at last read the commandments',
      'The revolution has made every animal equal',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'remains',
    prompt:
      'In "Remains" by Armitage, how does the poet present the psychological impact of conflict?',
    options: [
      'A casual voice that cracks under guilt',
      'A soldier who has forgotten the shooting',
      'A poem that celebrates army service',
      'A speaker who feels no guilt at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'romeo-and-juliet',
    prompt:
      'How does Shakespeare present the Nurse in Romeo and Juliet as a contrast to Lady Capulet?',
    options: [
      'She gives the warmth that her mother lacks',
      'She is wealthier than Lady Capulet',
      'She is better educated than Lady Capulet',
      'She is just as cold and formal as Lady Capulet',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'word',
    text: 'exposure',
    quote: 'merciless iced east winds that knive us',
    prompt:
      'In "Exposure" by Owen, the soldiers face "merciless iced east winds that knive us". Which word makes the wind a weapon?',
    options: ['knive', 'merciless', 'iced', 'east'],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'jane-eyre',
    prompt: "In Jane Eyre, how does Bronte use the Red Room to develop Jane's character?",
    options: [
      'Its injustice fires her need for freedom',
      'It shows she loves the colour red',
      'It is simply the bedroom where she sleeps',
      'It shows she enjoys being left alone',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'my-last-duchess',
    prompt:
      'In "My Last Duchess" by Browning, what does the Duke\'s control over the painting reveal?',
    options: [
      'His need to own and silence her, even now',
      'His wish for everyone to see her portrait',
      'His grief for the wife he still misses',
      'His plan to sell the painting for money',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    text: 'frankenstein',
    prompt: "In Frankenstein, why does Shelley frame the narrative with Walton's letters?",
    options: [
      'It layers voices, so we judge whom to trust',
      'It makes the novel long enough to publish',
      'It adds a love story between Walton and Victor',
      "It records Shelley's own travels in the Arctic",
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'checking-out-me-history',
    prompt:
      'In "Checking Out Me History" by Agard, why does the poet use phonetic spelling and dialect?',
    options: [
      'To assert a Caribbean voice schools ignored',
      'To show the speaker never went to school',
      'To make the poem easier for anyone to read',
      'To copy the nursery rhymes he learned at school',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'tissue',
    prompt: 'In "Tissue" by Dharker, what does paper symbolise?',
    options: [
      'Fragile life and its paper records',
      'The cost of trees cut down to make paper',
      'The school homework the speaker resents',
      "The poet's own private diary entries",
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    text: 'great-expectations',
    prompt: "In Great Expectations, why does Dickens present Magwitch's return as a shock to Pip?",
    options: [
      'It wrecks his dream of a genteel benefactor',
      'He had forgotten the convict he once helped',
      'He had been told that Magwitch was dead',
      'He had been expecting Magwitch for weeks',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'romeo-and-juliet',
    quote: 'O loving hate',
    prompt:
      'In Romeo and Juliet, how does the oxymoron "loving hate" reflect the play\'s central conflict?',
    options: [
      'The feud binds love and hate together',
      'Romeo is describing his love for Juliet',
      "It describes Tybalt's quarrelsome nature",
      'It shows Romeo is bored with the fighting',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'exposure',
    quote: 'But nothing happens',
    prompt: 'In "Exposure" by Owen, how does the refrain "But nothing happens" create meaning?',
    options: [
      'Endless waiting as the cold kills them',
      'The soldiers are safe and comfortable',
      'The war has ended and peace has come',
      'The enemy has crept away in the night',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    text: 'animal-farm',
    about: 'pigs become human',
    prompt: 'In Animal Farm, why does Orwell have the pigs learn to walk on two legs?',
    options: [
      "Walking upright, they take the humans' place",
      'Real pigs can be trained to walk upright',
      'The pigs are only playing a joke on the others',
      'The pigs need to exercise their back legs',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'the-charge-of-the-light-brigade',
    prompt: 'In "The Charge of the Light Brigade", how does Tennyson use rhythm to create meaning?',
    options: [
      'A galloping beat that drives the riders on',
      'A random rhythm that follows no pattern',
      'A rhythm that slows down to a halt at the end',
      'A gentle beat like a lullaby for the dead',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'macbeth',
    about: "Banquo's ghost",
    prompt:
      "In Macbeth, how does Shakespeare use the banquet scene to reveal Macbeth's psychological state?",
    options: [
      'A ghost only he can see exposes his guilt',
      'It shows he is a calm and gracious new host',
      'It shows the lords plotting to poison him',
      'It shows he fears the witches will attend',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    text: 'frankenstein',
    about: "the creature's misery",
    prompt:
      "In Frankenstein, what does the Creature's request for a companion reveal about his character?",
    options: [
      'He longs for connection, not for power',
      'He wants a servant who will obey him',
      'He wants to build an army of creatures',
      'He wants revenge on the cottagers who fled',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'dulce-et-decorum-est',
    prompt:
      'In "Dulce et Decorum Est", what effect does Owen create by directly addressing "you" in the final stanza?',
    options: [
      'It accuses the reader of repeating the lie',
      "It praises the reader's own courage in war",
      'It speaks only to the soldiers who were gassed',
      'It thanks the reader for their support',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'great-expectations',
    prompt: 'In Great Expectations, what does the marshland at the opening of the novel symbolise?',
    options: [
      'A bleak, lonely world where danger waits',
      'A pleasant stretch of English countryside',
      'The rich farmland Pip will one day own',
      'The beauty of nature that Pip loves',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'As flies to wanton boys are we to the gods',
    source: 'William Shakespeare, King Lear, Act 4, Scene 1',
    from: 'king-lear',
    prompt:
      'A blinded old man says: "As flies to wanton boys are we to the gods, / They kill us for their sport." What does the simile suggest about the gods?',
    options: [
      'They are cruel and careless with human life',
      'They protect people as a father guards his son',
      'They punish only those who deserve it',
      'They are too busy to notice humans at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'How weary, stale, flat, and unprofitable',
    source: 'William Shakespeare, Hamlet, Act 1, Scene 2',
    from: 'hamlet',
    prompt:
      'A grieving prince, alone, says: "How weary, stale, flat, and unprofitable / Seem to me all the uses of this world". What does the list of adjectives create?',
    options: [
      'A deep despair at a world without value',
      'A cheerful, eager hope for the years ahead',
      'A calm and balanced view of the world',
      'An angry demand for revenge on his foes',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'intellects vast and cool and unsympathetic, regarded this earth with envious eyes',
    about: 'War of the Worlds opening',
    source: 'H. G. Wells, The War of the Worlds (1898), Book 1, Chapter 1',
    from: 'the-war-of-the-worlds',
    prompt:
      'A novel describes the watchers on Mars: "intellects vast and cool and unsympathetic, regarded this earth with envious eyes". What do the adjectives suggest about them?',
    options: [
      'They are superior, cold and pitiless',
      'They are kind, wise and eager to help',
      'They are small, weak and easily beaten',
      'They are angry, wild and out of control',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'I was benevolent and good; misery made me a fiend',
    about: "the creature's misery",
    source: 'Mary Shelley, Frankenstein (1818), Chapter 10',
    from: 'frankenstein',
    prompt:
      'A being rejected by everyone it meets tells its maker: "I was benevolent and good; misery made me a fiend." What does the line claim?',
    options: [
      'Suffering, not nature, has made it cruel',
      'It was born evil and has always been so',
      'It has chosen cruelty for its own pleasure',
      'Its maker was kind and treated it well',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'Reader, I married him.',
    source: 'Charlotte Brontë, Jane Eyre (1847), Chapter 38',
    from: 'jane-eyre',
    prompt:
      'A novel\'s last chapter opens: "Reader, I married him." What is the effect of the direct address?',
    options: [
      'It tells the reader the news as a friend',
      'It asks the reader whether she chose well',
      'It reminds the reader the story is invented',
      'It hands control of the story to the husband',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'life is made of ever so many partings welded together',
    source: 'Charles Dickens, Great Expectations (1861), Chapter 27',
    from: 'great-expectations',
    prompt:
      'A blacksmith tells the young man he raised: "life is made of ever so many partings welded together". What does the metaphor suggest?',
    options: [
      'Life is built out of many goodbyes',
      'Life is full of hard work at the forge',
      'Life breaks apart when friends say goodbye',
      'Life is easy once you learn a trade',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'I wear the chain I forged in life',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 1',
    from: 'a-christmas-carol',
    prompt:
      'A ghost bound in heavy chains tells his old partner: "I wear the chain I forged in life". What does the metaphor suggest?',
    options: [
      'His greed in life is now his punishment',
      'He was a blacksmith before he became a ghost',
      'Someone else has chained him up unfairly',
      'The chain is a gift from his old partner',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'Never to stoop',
    source: 'Robert Browning, "My Last Duchess" (1842)',
    from: 'my-last-duchess',
    prompt:
      'A duke explains why he never told his wife what displeased him: "and I choose / Never to stoop." What does this reveal about him?',
    options: [
      'His pride matters more to him than his wife',
      'He was far too gentle ever to criticise her',
      'He was afraid of upsetting her family',
      'He was too tired to argue with her',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'Yond Cassius has a lean and hungry look',
    source: 'William Shakespeare, Julius Caesar, Act 1, Scene 2',
    from: 'julius-caesar',
    prompt:
      'A ruler says of one of his senators: "Yond Cassius has a lean and hungry look; / He thinks too much: such men are dangerous." What does "lean and hungry" suggest?',
    options: [
      'He is restless with ambition and wants more',
      'He is ill and has not eaten properly for days',
      'He is poor and cannot afford to buy food',
      'He is fit, lean and trains hard for battle',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    quote: 'Nothing will come of nothing',
    source: 'William Shakespeare, King Lear, Act 1, Scene 1',
    from: 'king-lear',
    prompt:
      'When his youngest daughter will not flatter him, a king warns her: "Nothing will come of nothing". What does he mean?',
    options: [
      'Say nothing, and you will inherit nothing',
      'Nothing she could say would change his mind',
      'He has nothing left to give any daughter',
      'Silence is the best answer to a king',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'a single green light, minute and far away',
    source: 'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter 1',
    from: 'the-great-gatsby',
    prompt:
      'A narrator watches his neighbour stretch out his arms, across dark water, towards "a single green light, minute and far away". What might the light stand for?',
    options: [
      'A longed-for dream that is out of reach',
      'A signal that it is safe to sail across',
      'The bright lights of a busy city party',
      'A warning that danger is very close',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'What the hammer? what the chain? / In what furnace was thy brain?',
    source: 'William Blake, "The Tyger" (1794)',
    from: 'the-tyger',
    prompt:
      'A poet asks of a tiger\'s maker: "What the hammer? what the chain? / In what furnace was thy brain?" What does the imagery suggest about the maker?',
    options: [
      'A mighty smith who forges something fearsome',
      'A gentle gardener who grows living things',
      'A careless child who breaks what he makes',
      'A scientist who works in a modern laboratory',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: 'Are there no prisons?',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 1',
    from: 'a-christmas-carol',
    prompt:
      'Asked to give to the poor at Christmas, a rich man replies: "Are there no prisons?" What does the question show?',
    options: [
      'He sees the poor as criminals, not people',
      'He wants to visit the prisons himself to help',
      'He is worried that the prisons are too full',
      'He truly does not know where the prisons are',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: "Ask no questions, and you'll be told no lies.",
    source: 'Charles Dickens, Great Expectations (1861), Chapter 2',
    from: 'great-expectations',
    prompt:
      'When a small boy asks who is firing the guns on the marshes, his sister snaps: "Ask no questions, and you\'ll be told no lies." What does this show about how he is treated?',
    options: [
      'His curiosity is shut down, not met',
      'He is taught that honesty matters most',
      'He is trusted to find out for himself',
      'He is praised for asking good questions',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'effect',
    quote: "You taught me language, and my profit on 't / Is, I know how to curse.",
    source: 'William Shakespeare, The Tempest, Act 1, Scene 2',
    from: 'the-tempest',
    prompt:
      'An enslaved islander tells the master who taught him to speak: "You taught me language, and my profit on \'t / Is, I know how to curse." What does his reply suggest?',
    options: [
      "He turns his master's gift into a weapon",
      'He is truly grateful for every lesson he was given',
      'He has never learned to speak properly',
      'He curses only because he is in pain',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'animal-farm',
    quote: 'BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS',
    about: 'the commandments',
    prompt:
      'In Animal Farm, the single commandment left on the barn wall reads "ALL ANIMALS ARE EQUAL / BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS". What does the change show?',
    options: [
      'Equality has been emptied of all meaning',
      'The pigs have finally made the farm fair',
      'The animals have learned to count better',
      'Every animal now has an equal share of food',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'macbeth',
    quote: 'I am in blood',
    about: 'blood and guilt',
    prompt:
      'In Macbeth, after the banquet, Macbeth says: "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er." What does the image suggest?',
    options: [
      'He is so deep in murder there is no way back',
      'He wants to stop killing and make amends',
      'He is crossing a real river to fight Macduff',
      'He feels clean now that Banquo is dead',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'romeo-and-juliet',
    quote: "A plague o' both your houses",
    about: "Mercutio's death",
    prompt:
      'In Romeo and Juliet, the dying Mercutio cries "A plague o\' both your houses" again and again. What does the curse show?',
    options: [
      'He blames both families for his death',
      'He blames Romeo alone for not fighting',
      'He hopes a real plague will end the fighting',
      'He is joking, as he does in every scene',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'lord-of-the-flies',
    quote: 'The mask compelled them.',
    prompt:
      'In Lord of the Flies, once Jack has painted his face, Golding writes: "The mask compelled them." What does this sentence show?',
    options: [
      'Power has passed from the boy to the mask',
      'The twins refuse to obey Jack any longer',
      'Jack is ashamed of the paint and hides',
      'The mask frightens Jack more than the others',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'much-ado-about-nothing',
    quote: 'There is a kind of merry war betwixt Signior Benedick and her',
    prompt:
      'In Much Ado About Nothing, Leonato explains that "There is a kind of merry war betwixt Signior Benedick and her". What does the oxymoron suggest?',
    options: [
      'Their quarrels are a game they both enjoy',
      'They are deadly enemies who hate each other',
      'They are soldiers who fought side by side',
      'Their arguments are rare and quickly over',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'the-merchant-of-venice',
    quote: 'Hath not a Jew eyes?',
    about: "Shylock's speech",
    prompt: 'In The Merchant of Venice, Shylock asks: "Hath not a Jew eyes?" What is he arguing?',
    options: [
      'He is as human as any Christian',
      'He has better eyesight than his enemies',
      'He wants pity as a blind old man',
      'He is proud of being unlike other men',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'othello',
    quote: "the green-ey'd monster which doth mock",
    prompt:
      'In Othello, Iago warns: "beware, my lord, of jealousy; / It is the green-ey\'d monster which doth mock / The meat it feeds on". What does the metaphor suggest?',
    options: [
      'Jealousy devours the person who feels it',
      'Jealousy is a sign of true and loyal love',
      'Jealousy is a disease of the eyes and sight',
      'Jealousy is a beast that guards the home',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'twelfth-night',
    quote: 'I am not that I play',
    prompt:
      'In Twelfth Night, Viola, disguised as a young man, admits to Olivia: "I am not that I play." What does the line show?',
    options: [
      'Her role hides who she really is',
      'She is a poor actor and wants to stop',
      'She will not play music for Olivia',
      'She is too ill to perform her part',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'an-inspector-calls',
    quote: "it's better to ask for the earth than to take it",
    prompt:
      'In An Inspector Calls, Birling fears that workers will soon be "asking for the earth". The Inspector replies: "it\'s better to ask for the earth than to take it". What does he imply?',
    options: [
      'Those who take are worse than those who ask',
      'The workers should have taken what they wanted',
      'Birling was right to sack the strikers',
      'Nobody should ever ask for higher wages',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'meaning',
    kind: 'word',
    text: 'jekyll-and-hyde',
    quote: "trampled calmly over the child's body",
    prompt:
      'In Jekyll and Hyde, Enfield describes how Hyde "trampled calmly over the child\'s body". Which word shows Hyde feels nothing as he does it?',
    options: ['calmly', 'trampled', "child's", 'body'],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'whistle-and-ill-come-to-you',
    quote: 'steady as a lighthouse',
    prompt:
      'In Whistle and I\'ll Come to You, the narrator, woken by a gale, first feels the house is "like a ship at sea", then a few lines later sees it as "steady as a lighthouse". What does the change of simile show at this point?',
    options: [
      'The storm has died away, so the house is no longer being battered by the wind',
      'He is reasoning his way back to calm, trading an image of danger for one of safety',
      'He can see a real lighthouse on the coast from his bedroom window over the marsh',
      'He realises that the house is in even greater danger now, as the storm grows stronger',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'h-is-for-hawk',
    quote: 'She is a conjuring trick. A reptile. A fallen angel.',
    prompt:
      'In H is for Hawk, moments after the breeder pulls the first goshawk from its box, Helen Macdonald writes "She is a conjuring trick. A reptile. A fallen angel." What is the effect of these metaphors here?',
    options: [
      'Together they build one steady picture of the hawk as cruel and evil',
      'The fragments show Macdonald is bored, listing things while she waits',
      'Each image cancels the one before, as if no single picture can hold her',
      'They are similes comparing the hawk to things she can see on the quayside',
    ],
    correctIndex: 2,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'beyond-the-sky-and-the-earth',
    quote: 'his face rubbed with wet dough',
    prompt:
      'In Beyond the Sky and the Earth, Jamie Zeppa tells how the British envoy Ashley Eden fared in Bhutan in 1864, ending his list of indignities with "his face rubbed with wet dough". What is the effect of this detail?',
    options: [
      'The cruel detail presents the Bhutanese as savage torturers whom Zeppa condemns',
      "The absurd last insult turns a diplomatic disaster into farce, on Bhutan's side",
      "It voices Zeppa's anger at the British Empire, demanding that its envoy be punished",
      'It makes the reader admire Eden as a brave hero who bore every insult without complaint',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'the-necklace',
    quote: 'They lived like this for ten years.',
    prompt:
      'In The Necklace, Maupassant spends over forty lines on the night of the ball and the loss, then gives a paragraph of its own to "They lived like this for ten years." What is the effect of this sentence?',
    options: [
      "Seven flat words cover a decade, so one evening's cost feels out of all proportion",
      'It is a flashback to the comfortable years before Mathilde married her husband',
      'It slows the story right down, describing each day of paying off the debt in detail',
      'It shows the Loisels settling into a calm, contented life once the debt is paid',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'the-story-of-an-hour',
    quote: 'the tops of trees that were all aquiver with the new spring life',
    prompt:
      'In The Story of an Hour, Mrs Mallard, alone in her room after hearing of her husband\'s death, sits facing the open window and sees "the tops of trees that were all aquiver with the new spring life". What does this view suggest?',
    options: [
      'The trembling trees mirror her grief, shaking as she weeps for her husband',
      'The world outside hints at the new life about to stir in her, not at mourning',
      'The trees warn that a storm is coming, foreshadowing the train accident',
      "The spring scene shows that a whole year has now passed since her husband's death",
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'to-kill-a-mockingbird',
    quote: 'Seventeen bullet holes in him.',
    prompt:
      'In To Kill a Mockingbird, Atticus brings the news that Tom Robinson has been shot dead trying to escape from the prison farm: "Seventeen bullet holes in him." What is the effect of this sentence at this point?',
    options: [
      'With no verb and no comment, the bare count shows how far the guards went, and lets the reader add it up',
      "The precise number shows that Atticus has read the official report and accepts the guards' own account of it",
      "The short sentence shows that Atticus is too shocked to say anything more at all about Tom's death",
      'Atticus exaggerates the number on purpose, to shock the missionary circle out of its hypocrisy',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'antony-and-cleopatra',
    quote: 'The barge she sat in, like a burnished throne, / Burned on the water.',
    prompt:
      'In Antony and Cleopatra, left with Agrippa and Maecenas, Enobarbus describes Cleopatra\'s first meeting with Antony: "The barge she sat in, like a burnished throne, / Burned on the water." What is the effect of these lines?',
    options: [
      'Enobarbus reports that the barge really did catch fire on the river Cydnus, a bad omen for the lovers',
      "The simile mocks Cleopatra's vanity, and so reveals the plain Roman soldier's contempt for Egyptian luxury",
      "The lines show off Antony's wealth, since he had the barge gilded as a gift to win the queen's favour",
      'A simile makes the boat a royal seat, and its blaze sets the river alight, as if she could overturn nature',
    ],
    correctIndex: 3,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'a-midsummer-nights-dream',
    quote: 'I am your spaniel; and, Demetrius, / The more you beat me, I will fawn on you.',
    prompt:
      'In A Midsummer Night\'s Dream, Helena follows Demetrius into the wood and tells him "I am your spaniel; and, Demetrius, / The more you beat me, I will fawn on you." What is the effect of this metaphor at this point?',
    options: [
      'It is a clever trick: Helena flatters Demetrius so that he will take her back to Athens with him',
      'It is a warning: like a dog that has been beaten, Helena will turn and bite if Demetrius leaves her',
      'It can make an audience laugh, but the self-abasement is painful and shows what her love costs her',
      "It shows the love-juice at work, since Puck's flower has made Helena dote on the first man she sees",
    ],
    correctIndex: 2,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'a-taste-of-honey',
    quote: "there's a lovely view of the gasworks",
    prompt:
      'In A Taste of Honey, listing the attractions of their comfortless new flat to Jo, Helen says "there\'s a lovely view of the gasworks". What does this line show about Helen at this point?',
    options: [
      'She truly admires the gasworks, which remind her of the town she grew up in',
      'She is trying to persuade Peter that the flat is worth paying the rent for',
      "She is mocking Jo's drawings, which she has just found and thinks are ugly",
      'She uses irony to admit how grim the flat is, but without having to feel it',
    ],
    correctIndex: 3,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'hullaballoo-in-the-guava-orchard',
    quote: 'No, I do not want an egg ... I want my freedom.',
    prompt:
      'In Hullaballoo in the Guava Orchard, after Sampath is sacked from his job at the post office, Kulfi offers him comfort, and the chapter ends with his reply: "No, I do not want an egg ... I want my freedom." What is the effect of this line?',
    options: [
      'It shows Sampath refusing food in protest at the poverty that the long drought has brought on his family',
      'It is the first of the riddling sayings that will soon make the pilgrims believe that he is a holy man',
      'The bathos of an egg against a grand demand is comic, yet it marks the moment he decides to leave',
      "It shows Sampath asking his mother to help him plan his escape from his father's crowded little house",
    ],
    correctIndex: 2,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'im-the-king-of-the-castle',
    quote: 'We live here, it is ours, we belong. Kingshaw has nowhere.',
    prompt:
      'In I\'m the King of the Castle, standing in Kingshaw\'s room on the day he arrives at Warings, Hooper thinks "We live here, it is ours, we belong. Kingshaw has nowhere." What does this show about Hooper at this point?',
    options: [
      'A boy not yet eleven has learned the adult logic of property and turned it into a weapon',
      'He pities Kingshaw for having no home, and secretly decides to share the house with him',
      'He is proud of Warings because his family have lived there for the whole of his life',
      'He is repeating the words of welcome his father taught him, to help Kingshaw settle in at Warings',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'a-view-from-the-bridge',
    quote: 'A phone booth begins to glow',
    prompt:
      'In A View from the Bridge, while Alfieri is still urging Eddie to let Catherine go, a stage direction reads "A phone booth begins to glow" on the other side of the stage. What is the effect of this direction at this moment?',
    options: [
      'It shows that Eddie has already phoned the Immigration Bureau before this visit',
      'It lets the audience see the betrayal waiting for Eddie while the lawyer talks',
      'It marks a jump forward to the next morning, when the cousins are taken away',
      'It shows that Alfieri means to ring the police himself, to keep Catherine safe',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'the-scarlet-letter',
    quote: 'It was the scarlet letter in another form: the scarlet letter endowed with life',
    prompt:
      'In The Scarlet Letter, Hester dresses three-year-old Pearl in a "crimson velvet tunic" embroidered with gold, and the narrator comments: "It was the scarlet letter in another form: the scarlet letter endowed with life". What does this show about Pearl?',
    options: [
      'The magistrates have ordered the child to wear a scarlet letter of her own',
      "Hester's punishment is over, since the letter has passed from her to her child",
      "Pearl is the sign of Hester's sin come alive, a child who matches the letter",
      'Pearl is a cheerful child, and her fine clothes show that the town accepts her',
    ],
    correctIndex: 2,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'piano',
    quote: 'my manhood is cast / Down in the flood of remembrance',
    prompt:
      'In "Piano" by D. H. Lawrence, the last stanza ends with "my manhood is cast / Down in the flood of remembrance, I weep like a child for the past". What is the effect of ending line 11 on "cast"?',
    options: [
      'The pause holds him upright for a moment, so his manhood stands firm against the song',
      'The break acts out the fall: Down drops to a new line as his self-control gives way',
      'It begins a new stanza, so the poem moves on to a happier memory of his mother',
      'It slows the poem down to show that he is calmly choosing to stay in the present',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'half-past-two',
    quote: 'click its language',
    prompt:
      'In Half-past Two by U. A. Fanthorpe, the boy told to stay in the classroom until half-past two knows the clock\'s face well, yet he cannot "click its language". What does this phrase show about him?',
    options: [
      'He has learned to read the clock at last, and is proud of what he knows now',
      'He hears and sees the clock, but its meaning never falls into place for him',
      'He is bored, and keeps clicking his fingers at the clock to annoy the teacher',
      'He has broken the clock by fiddling with its hands while his teacher was out',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'sonnet-116',
    quote: 'it is an ever-fixed mark, / That looks on tempests and is never shaken',
    prompt:
      'In Sonnet 116, Shakespeare turns from what love is not to what it is: love "is an ever-fixed mark, / That looks on tempests and is never shaken". What does this image show about love?',
    options: [
      'Love is a small ship tossed by storms that somehow always reaches harbour',
      'Love is a scar the lover carries for life, a mark that no time can ever heal',
      'Love is a beacon that sailors steer by, watching storms without being moved',
      'Love is a target that the storms of jealousy aim at and keep on missing',
    ],
    correctIndex: 2,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'search-for-my-tongue',
    quote: 'the other tongue in knots',
    prompt:
      'In Search For My Tongue, after the lines in Gujarati, the mother tongue grows back and ties "the other tongue in knots". What does this image show at this point in the poem?',
    options: [
      'Her mother tongue is rotting in her mouth, just as the opening section warned',
      'She can no longer speak either language, and gives up the struggle in despair',
      'English is now the tongue that cannot move freely, while her first one rules',
      'She has learned English so well that it now ties her thoughts together neatly',
    ],
    correctIndex: 2,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'anita-and-me',
    quote: 'This is our patch.',
    prompt:
      'In Anita and Me, at the Spring Fete, Sam Lowbridge begins with a grievance about where the fete money will go and ends by shouting: "This is our patch." What does this line show at this point?',
    options: [
      'Sam is speaking for the whole village, which cheers his complaint about the new church roof',
      'A complaint about cash turns into a claim that the village belongs to its white people alone',
      'Sam is defending the Kumars, whom he still counts as good neighbours and part of the village',
      'Sam is boasting that his gang has taken over the field where the Spring Fete is always held',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'never-let-me-go',
    quote: 'the same way someone might be afraid of spiders',
    prompt:
      'In Never Let Me Go, when six girls test Ruth\'s theory by walking out around Madame all at once, Kathy says Madame was afraid of them "the same way someone might be afraid of spiders". What does this simile show at this point?',
    options: [
      'Madame is afraid the girls will hurt her, just as a spider might bite someone who comes too close',
      "Madame's fear is the recoil people feel from another kind of creature, not a fear of being harmed",
      'The girls have hidden spiders in the doorway as a prank, to give Madame a fright when she arrives',
      'The girls are afraid of Madame, who seems as cold and as strange to them as a spider would',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'pigeon-english',
    quote: 'In England nobody helps you if you fall over.',
    prompt:
      'In Pigeon English, after Mr Frimpong complains at church that in England nobody helps a stranger in trouble, Harri agrees: "In England nobody helps you if you fall over." What does this line show at this point?',
    options: [
      'Harri has fallen over in the playground at school, and nobody came over to help him up',
      "Harri's verdict on England also convicts him, since he took part in the robbery and ran",
      'Harri is warning Mr Frimpong that the Crew plan to rob him on his way home from church',
      'Harri is praising England, where people are too polite to stare at someone who has fallen',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'boys-dont-cry',
    quote: 'I turned round and walked away',
    prompt:
      'In Boys Don\'t Cry, having sworn revenge and gone after Josh, Dante stops himself: "I turned round and walked away". What does this moment show at this point in the novel?',
    options: [
      "Dante is too frightened of Josh's friends to fight, and runs from the danger to save himself",
      "Walking away, until now what people do when they abandon others, becomes Dante's strength",
      'Dante abandons Emma to his father, repeating what Melanie did at the start of the novel',
      'Dante leaves the hospital to go home, because his father has ordered him to man up',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'the-sign-of-four',
    quote: 'like those of a trained blood-hound picking out a scent',
    prompt:
      'In The Sign of Four, as Holmes searches the room where Bartholomew Sholto lies dead, Watson writes that his movements were "like those of a trained blood-hound picking out a scent". What does this simile show about Holmes at this point?',
    options: [
      'Detection is a hunt by instinct and nose, and his powers could serve either side of the law',
      'Holmes has lost his reason under the drug, and scrabbles about the floor without any method',
      'Holmes is a loyal servant, as eager to please Athelney Jones of Scotland Yard as a pet dog',
      'Holmes is clumsy and slow, unlike the clean, cold science of detection that he claims to follow',
    ],
    correctIndex: 0,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'silas-marner',
    quote: 'He seemed to weave, like the spider, from pure impulse, without reflection.',
    prompt:
      'In Silas Marner, describing the life Silas makes at his loom in Raveloe after Lantern Yard, the narrator says: "He seemed to weave, like the spider, from pure impulse, without reflection." What does this simile show about him at this point?',
    options: [
      'He is cunning and patient, spinning his plans to trap the villagers who have shunned him',
      'Isolation and toil have shrunk him into a creature that works by instinct, not by choice',
      'He is a proud artist, delighting in the delicate patterns that he designs for his customers',
      'He is plotting a slow revenge on William Dane for the theft he was blamed for at Lantern Yard',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    text: 'out-out',
    quote: 'Neither refused the meeting',
    prompt:
      'In Robert Frost\'s "Out, Out", after the saw seems to leap at the boy\'s hand, the speaker concludes: "Neither refused the meeting". What does this phrase show at this point?',
    options: [
      'It shows that the boy refused to stop work, though the speaker had begged him to finish early',
      'It gives the boy and saw an equal will, so the blame for the injury is shared, not settled',
      'It shows that the sister had arranged for the boy to meet the doctor at the house at supper',
      'It blames the saw alone, a wild animal that sprang at the boy before he had time to move',
    ],
    correctIndex: 1,
  },
  // ──── Rung 7: the context that explains a writer's choice ─────────────────────────────────────
  {
    grade: 7,
    type: 'analysis',
    text: 'macbeth',
    about: 'darkness hiding evil',
    prompt: 'How does Shakespeare use the motif of darkness in Macbeth to convey moral corruption?',
    options: [
      'Darkness hides crime and marks inner decay',
      'Darkness only shows the scenes are at night',
      'Darkness stands for sadness and grief',
      'Darkness was a lighting trick of the stage',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'an-inspector-calls',
    prompt: 'In "An Inspector Calls", how does the generational divide serve Priestley\'s message?',
    options: [
      'The young change; their parents do not',
      'The older characters are wiser than the young',
      'There is no real divide between the generations',
      'The young are punished more than their parents',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'lord-of-the-flies',
    about: 'Simon',
    prompt:
      'In Lord of the Flies, Golding presents Simon as a Christ-like figure. What does this suggest?',
    options: [
      'The good are killed by those they would save',
      'He provides comic relief between the violence',
      'He stands for the power of democracy and votes',
      'He represents the soldiers of the adult war',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'meaning',
    kind: 'context',
    text: 'of-mice-and-men',
    prompt: 'In "Of Mice and Men", why does Steinbeck set the novella near Soledad?',
    options: [
      'Its name means "solitude" in Spanish',
      "It was Steinbeck's own birthplace",
      'It was the most famous ranch in America',
      'It had the best farming weather in California',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'a-christmas-carol',
    prompt:
      "In A Christmas Carol, how does Dickens use Scrooge's transformation to criticise Victorian society?",
    options: [
      'If the rich change, the poor can be helped',
      'It shows that all wealth is wicked in itself',
      'It promotes the Church above all charity',
      'It proves to readers that ghosts are real',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'exposure',
    prompt: 'How does Owen use sensory imagery in "Exposure" to present the soldiers\' war?',
    options: [
      'The cold, not the enemy, is what kills them',
      'It makes the trenches seem colourful',
      'It describes a beautiful, peaceful winter landscape',
      'It entertains the reader with adventure',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'romeo-and-juliet',
    prompt: 'In Romeo and Juliet, how does the Prologue function as a dramatic device?',
    options: [
      'Knowing the end, we watch how and why',
      'It introduces each of the actors by name',
      'It sums up the plot for any latecomers',
      'It was written later by another author',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'ozymandias',
    prompt:
      'In "Ozymandias", how does the use of a second-hand account affect the poem\'s message about power?',
    options: [
      'Even his fame survives only in retellings',
      "It proves the traveller's story is false",
      'It shows the king is still remembered by all',
      'It shows the statue is still standing whole',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'jane-eyre',
    prompt: 'How does Bronte use Bertha Mason in Jane Eyre as a Gothic double for Jane?',
    options: [
      'She embodies the rage Jane must contain',
      "She is Jane's long-lost elder sister",
      'She only exists to set fire to the house',
      'She looks exactly like Jane, a true twin',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'london',
    prompt: 'In "London" by Blake, how does the repetition of "every" create meaning?',
    options: [
      'It leaves no one outside the suffering',
      'It gives the poem a cheerful, bouncy beat',
      'It lists only the richest people of London',
      'It counts the people Blake met that day',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'war-photographer',
    prompt:
      'In "War Photographer" by Duffy, how does the domestic setting of the darkroom contrast with the war zones?',
    options: [
      'Safe England beside the suffering abroad',
      'The photographer prefers being at home',
      'The darkroom is a cheerful, noisy place',
      'Duffy writes only of her own war travels',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    prompt: 'How does Stevenson use Mr Utterson as a narrative device in Jekyll and Hyde?',
    options: [
      "His slow discovery mirrors the reader's",
      'He is secretly the real villain of the story',
      'He is a minor figure who appears only once',
      'He provides comic relief in a dark tale',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'the-emigree',
    prompt: 'In "The Émigrée" by Rumens, how does the poet present memory as resistance?',
    options: [
      'Her bright memory refuses to be erased',
      'Her memory is poor and keeps failing her',
      'She has returned to live in the city now',
      'She wants to forget the city completely',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'frankenstein',
    prompt: "In Frankenstein, how does Shelley use the Arctic setting to frame the novel's themes?",
    options: [
      'The ice mirrors where wild ambition leads',
      'The Arctic was a popular holiday destination',
      'Shelley wanted a cheerful, festive backdrop',
      "It shows Shelley's own love of cold weather",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'great-expectations',
    prompt: 'In Great Expectations, how does Dickens use Estella to explore the theme of class?',
    options: [
      'Taught to scorn, she shows class is learned',
      'She is a kind, warm, middle-class friend to Pip',
      'She stands for the honest working class',
      'She is a servant hired by Miss Havisham',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'poppies',
    prompt: 'In "Poppies" by Weir, how does the poet use time to structure the mother\'s grief?',
    options: [
      'Memories blur past and present for her',
      'The poem follows a strict, clear and simple timeline',
      'The poem is set entirely in the future',
      'Time does not matter at all in the poem',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'animal-farm',
    prompt: 'In Animal Farm, how does Orwell use Boxer to represent the working class?',
    options: [
      'Loyal workers are used up, then discarded',
      'Boxer is clever and questions the pigs',
      'Boxer stands for the comfortable middle class',
      'Boxer leads a successful rebellion',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'bayonet-charge',
    prompt:
      'In "Bayonet Charge" by Hughes, how does the shift from "he" to describing a "yellow hare" create meaning?',
    options: [
      "Its terror mirrors the soldier's own panic",
      'The soldier breaks off the charge to hunt it',
      'It is a sign that the battle is now won',
      "The hare stands for the enemy's cowardice",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'macbeth',
    prompt:
      'In Macbeth, how does Shakespeare present the relationship between Macbeth and Lady Macbeth as a reversal of gender expectations?',
    options: [
      'She leads, then breaks as he hardens',
      'She obeys her husband from first to last',
      'Their marriage is ordinary and calm',
      'Gender plays no part in the play at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'checking-out-me-history',
    prompt:
      'In "Checking Out Me History" by Agard, how does the contrast between colonial and Caribbean histories serve the poem\'s argument?',
    options: [
      'Trivial rhymes mock the history he learned',
      'Both histories are given equal respect',
      'Agard shows he prefers British history',
      'The poem makes no political argument at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    prompt:
      'In Jekyll and Hyde, how does Stevenson use the physical contrast between Jekyll and Hyde to explore Victorian anxieties?',
    options: [
      "Hyde's small body shows a stunted self",
      'Jekyll and Hyde look exactly the same',
      'The contrast is only physical, not moral',
      'Hyde is simply drawn to look frightening',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    text: 'dulce-et-decorum-est',
    prompt:
      'In "Dulce et Decorum Est", how does Owen\'s use of the present tense in the third stanza create impact?',
    options: [
      'The dying man returns in every dream',
      'It shows the attack is happening as he writes',
      'Poems are always written in the present tense',
      'It shows the soldier has survived the gas',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'macbeth',
    about: 'nature in disorder',
    prompt:
      "In Macbeth, after Duncan's murder, day turns dark and his horses eat each other. Which piece of context best explains why Shakespeare makes nature react?",
    options: [
      'Kings were thought chosen by God, so regicide upset all creation',
      'Scotland had no kings in 1606, so the story was pure fantasy',
      'Shakespeare wrote it for Elizabeth I, who had just been murdered',
      'Horses really were known to eat meat in times of great famine',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'macbeth',
    about: 'the witches',
    prompt:
      'In Macbeth, the witches are real and powerful, not foolish old women. Which piece of context best explains this choice?',
    options: [
      'King James had written a book against witches, and feared them',
      'By 1606 most people saw witches as harmless village healers',
      'The play was banned for showing witchcraft until the 1800s',
      "Shakespeare's own mother had been tried as a witch in Stratford",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'an-inspector-calls',
    quote: 'unsinkable, absolutely unsinkable',
    prompt:
      'In An Inspector Calls, Birling calls the Titanic "unsinkable, absolutely unsinkable". Which piece of context best explains Priestley\'s choice?',
    options: [
      'The Titanic sank in April 1912, so his audience knows he is wrong',
      'The Titanic sank in 1945, the year the play was first staged',
      'Priestley had sailed on the Titanic and survived the wreck',
      'In 1912 the Titanic was still being built, so nobody knew of it at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'a-christmas-carol',
    quote: 'This boy is Ignorance. This girl is Want.',
    prompt:
      "In A Christmas Carol, the Ghost of Christmas Present reveals two starving children, Ignorance and Want. Which piece of context best explains Dickens's choice?",
    options: [
      'A report in 1843 had exposed the labour of poor children',
      'Dickens wrote it in 1900, long after all child labour had ended',
      'Victorian law gave every poor child free food and schooling',
      'Dickens grew up rich and never once saw real poverty himself',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'pride-and-prejudice',
    about: 'the entail',
    prompt:
      'In Pride and Prejudice, Mrs Bennet is desperate to see her five daughters married. Which piece of context best explains her anxiety?',
    options: [
      'The estate passes to a male cousin, so the girls get nothing',
      'Daughters could inherit freely, so the girls were already rich',
      'Mr Bennet has gambled the family fortune away in London',
      'Unmarried women in 1813 were made to leave England at thirty',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'great-expectations',
    prompt:
      'In Great Expectations, Magwitch risks his life by returning from New South Wales. Which piece of context best explains the danger?',
    options: [
      'Convicts transported for life faced death if they came back',
      'New South Wales was at war with Britain in the 1820s',
      'Convicts had to serve in the navy for the rest of their lives',
      'Anyone who had been to Australia was banned from London',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'jane-eyre',
    prompt:
      'In Jane Eyre, Lowood school is cold, hungry and riddled with disease, and Helen Burns dies there. Which piece of context best explains this portrait?',
    options: [
      "Brontë's two eldest sisters fell fatally ill at such a school",
      'Brontë had run a happy school of her own before writing it',
      'Victorian law made every girl attend a boarding school by ten',
      'Schools in 1847 were run by the state and inspected weekly',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'frankenstein',
    quote: 'spark of being',
    prompt:
      'In Frankenstein, Victor brings his creature to life with a "spark of being". Which piece of context best explains the science behind the scene?',
    options: [
      'Experiments had made dead animals twitch with electricity',
      'Doctors in 1818 had already brought dead patients back to life',
      'Shelley trained as a surgeon at a hospital in Geneva',
      "Electric light had just been invented and lit Europe's cities",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'lord-of-the-flies',
    quote: 'Jolly good show. Like the Coral Island.',
    prompt:
      'At the end of Lord of the Flies, the naval officer says: "Jolly good show. Like the Coral Island." Which piece of context best explains Golding\'s choice?',
    options: [
      'It names a Victorian tale of good boys that he wrote against',
      'It was the name of the cruiser that had come to rescue them all',
      'Golding himself had written The Coral Island as a young boy',
      'It was a film about the war that the officer had just seen',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'animal-farm',
    about: 'Snowball',
    prompt:
      "In Animal Farm, Napoleon's dogs chase Snowball off the farm, and he is blamed for every disaster after. Which piece of context best explains this?",
    options: [
      'Stalin forced out his rival Trotsky, then made him a scapegoat',
      'Snowball stands for Churchill, whom Hitler drove out of Britain',
      'Lenin had exiled Stalin from Russia in 1924 after a farm quarrel',
      "Snowball is based on Mr Jones, the farm's first and cruel owner",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-merchant-of-venice',
    prompt:
      "In The Merchant of Venice, Shylock earns his living lending money at interest. Which piece of context best explains why Shakespeare's Jewish character has this trade?",
    options: [
      'Christian teaching banned usury, so Jews took up the trade',
      'Jews ran every bank in London when the play was first staged',
      'Venetian law ordered all moneylenders to be Jewish by birth',
      'Shakespeare himself had borrowed money from a Jewish lender',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-tempest',
    prompt:
      "The Tempest opens with a ship wrecked on a strange island in a storm. Which piece of context best explains Shakespeare's choice?",
    options: [
      'Reports of a 1609 shipwreck off Bermuda had just reached London',
      'Shakespeare had been shipwrecked on a Greek island in his youth',
      'The Spanish Armada had been wrecked off Bermuda in 1588',
      "The play was written for a sailors' guild in Bristol",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'julius-caesar',
    prompt:
      'Julius Caesar, first staged in 1599, shows Rome falling into civil war after its leader is killed. Which piece of context best explains why this would grip its audience?',
    options: [
      'The ageing Elizabeth I had no heir, and many feared chaos',
      'Elizabeth I had just been killed by a group of her nobles',
      'England had become a republic ruled by its own senate in 1590',
      "The Pope had crowned Elizabeth's successor in Rome that year",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'twelfth-night',
    about: "Viola's disguise",
    prompt:
      "In Twelfth Night, Viola disguises herself as a young man and Olivia falls for her. Which piece of context adds a further twist for Shakespeare's first audience?",
    options: [
      "Boys played women's parts, so a boy played a girl playing a boy",
      'Women had just been allowed to act, and Viola was the first role',
      'Disguise was banned on stage, so the play caused a famous riot',
      'Shakespeare himself played Viola in the very first performance',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'much-ado-about-nothing',
    prompt:
      'In Much Ado About Nothing, Claudio shames Hero at the altar over a false report that she has been unfaithful. Which piece of context best explains why one accusation ruins her?',
    options: [
      "A woman's chastity was her honour, and her family's too",
      'Women in Messina could be jailed for speaking to any soldier',
      'Hero had already broken her engagement to another prince',
      "Claudio was Hero's brother and had to protect the family",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    source: 'William Shakespeare, King Lear (first performed about 1606), Act 1, Scene 1',
    from: 'king-lear',
    prompt:
      'A play first performed about 1606, when James I was urging the union of England and Scotland, opens with an old king dividing his kingdom between his daughters. Which sentence uses that context best?',
    options: [
      'To a court hearing James argue for union, a king carving up his realm would look reckless from the first scene.',
      'The play was written by Shakespeare in about 1606, at a time when James I was the king of both England and Scotland.',
      'In Jacobean times kings were very powerful and people did not like them, so this king is shown as a bad, cruel ruler.',
      'In the first scene the king asks his daughters how much they love him, then divides his kingdom between two of them.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Once more unto the breach, dear friends, once more',
    source: 'William Shakespeare, Henry V (first staged 1599), Act 3, Scene 1',
    from: 'henry-v',
    prompt:
      'A history play was first staged in 1599, as the Earl of Essex led an English army into Ireland. Its king urges his men: "Once more unto the breach, dear friends, once more". Which sentence uses that context best?',
    options: [
      "With soldiers really at war that year, a king calling his men 'dear friends' offered a stirring picture of war.",
      'The play is about a real king who won the Battle of Agincourt in 1415, and Shakespeare wrote it about him in 1599.',
      'In Elizabethan times everyone loved war and wanted to fight, so the speech would have made the whole audience happy.',
      'The king tells his soldiers to go back into the gap in the town walls and fight again, calling them his dear friends.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    quote: 'I gave commands',
    source: 'Robert Browning, "My Last Duchess" (1842)',
    from: 'my-last-duchess',
    prompt:
      'A poem of 1842 is spoken by a Renaissance duke, probably based on a Duke of Ferrara whose young wife died in 1561. He says: "I gave commands; / Then all smiles stopped together." Which sentence uses that context best?',
    options: [
      "In a court where a duke's word was law, Browning can make 'I gave commands' sound as chilling as murder.",
      'Robert Browning was a Victorian poet who married Elizabeth Barrett in 1846 and wrote many dramatic monologues.',
      'In the past all husbands were cruel to their wives, so the Duke is just a normal man of his own time and place.',
      'The Duke says he gave some orders, and after that his wife stopped smiling at people, which made him much happier.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Did he who made the Lamb make thee?',
    source: 'William Blake, "The Tyger", Songs of Experience (1794)',
    from: 'the-tyger',
    prompt:
      'Blake printed one poem in Songs of Experience (1794) as a partner to "The Lamb" in Songs of Innocence. Its speaker asks a tiger: "Did he who made the Lamb make thee?" Which sentence uses that context best?',
    options: [
      "Read beside 'The Lamb', the question asks how one creator could make both gentleness and fearsome power.",
      'William Blake was born in London in 1757, and he was a poet, a painter and an engraver as well as a printer of books.',
      'In the eighteenth century people believed in God much more than now, so the poem is simply about religion and faith.',
      'The speaker asks whether the same maker who made the lamb also made the frightening tiger that he describes in the poem.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    quote: 'valley of ashes',
    source: 'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter 2',
    from: 'the-great-gatsby',
    prompt:
      'A novel of 1925 is set in the boom years of the 1920s. Between the rich suburbs and New York lies "a valley of ashes". Which sentence uses that context best?',
    options: [
      "Setting a wasteland of ash beside the mansions, Fitzgerald shows the poverty that the boom's glitter hides.",
      'F. Scott Fitzgerald was born in Minnesota in 1896 and married Zelda Sayre, who inspired many of his characters.',
      'In the 1920s everyone in America was rich and happy, so the valley of ashes is just a dull place to drive through.',
      'The characters drive through the valley of ashes on their way to New York, past a garage owned by George Wilson.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    about: 'War of the Worlds and empire',
    source: 'H. G. Wells, The War of the Worlds (1898)',
    from: 'the-war-of-the-worlds',
    prompt:
      "H. G. Wells's novel of 1898, in which Martians invade and conquer southern England, appeared when Britain ruled the largest empire in the world. Which sentence uses that context best?",
    options: [
      "Showing the English overrun by a stronger race, Wells makes readers feel what the empire's subjects felt.",
      'H. G. Wells was born in Kent in 1866 and also wrote The Time Machine and The Invisible Man in the same decade.',
      'In Victorian times people were very afraid of Martians, so the novel would have frightened its readers very much.',
      'In the novel the Martians land on Horsell Common, attack Woking with the Heat-Ray and then march on London.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    text: 'jane-eyre',
    quote: 'women feel just as men feel',
    prompt:
      'In Jane Eyre (1847), which Charlotte Brontë first published under the name Currer Bell, Jane says that "women feel just as men feel". Which sentence uses that context best?',
    options: [
      'Writing as Currer Bell because women writers were judged differently, Brontë has Jane demand equal rules.',
      'Charlotte Brontë was born in Yorkshire in 1816 and had two sisters, Emily and Anne, who were also novelists.',
      'In Victorian times women were not allowed to have any feelings, so Jane is breaking the law when she speaks.',
      'Jane says that women have the same feelings as men and need to use their minds, just as their brothers do.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    text: 'romeo-and-juliet',
    quote: "star-cross'd lovers",
    about: 'stars as fate',
    prompt:
      'In Romeo and Juliet, the Prologue calls the lovers "star-cross\'d". Many Elizabethans believed the stars shaped human lives. Which sentence uses that context best?',
    options: [
      "To an audience who trusted the stars to rule a life, 'star-cross'd' dooms the lovers before they meet.",
      'Romeo and Juliet was written by William Shakespeare in about 1595 and first performed by his company in London.',
      'Elizabethans believed everything was in the stars, so nobody in the play is responsible for anything that happens.',
      'The Chorus tells the audience at the start that two lovers from two feuding families will both die by the end.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'sentence',
    text: 'macbeth',
    quote: "look like the innocent flower, / But be the serpent under't",
    prompt:
      'Macbeth was written soon after the Gunpowder Plot of 1605, a hidden attempt to kill the king. Lady Macbeth tells her husband to "look like the innocent flower, / But be the serpent under\'t". Which sentence uses that context best?',
    options: [
      'After a plot concealed behind loyal faces, the audience would hear her advice as the treachery they had just escaped.',
      'The Gunpowder Plot took place in 1605, when a group of Catholics planned to blow up King James I and Parliament.',
      'In Jacobean times everybody was a traitor and nobody could be trusted, so Lady Macbeth is a normal woman of her time.',
      'Lady Macbeth tells her husband to look innocent and welcoming to Duncan while secretly planning to murder him.',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote: 'The spirit that I have seen / May be the devil',
    source: 'William Shakespeare, Hamlet, Act 2, Scene 2',
    from: 'hamlet',
    prompt:
      'A prince who has seen his father\'s ghost wonders: "The spirit that I have seen / May be the devil". Which piece of context best explains his doubt?',
    options: [
      'Protestants held that a ghost might be a devil in disguise',
      'Everyone in 1600 knew that ghosts were harmless and kind',
      'The law of Denmark said that only priests could see ghosts',
      'His father had been a famous magician who raised devils',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote: 'Why bastard? wherefore base?',
    source: 'William Shakespeare, King Lear, Act 1, Scene 2',
    from: 'king-lear',
    prompt:
      'A nobleman\'s younger, illegitimate son complains: "Why bastard? wherefore base?" Which piece of context best explains his anger?',
    options: [
      'A son born outside marriage could not inherit land',
      'Illegitimate sons were the only ones allowed to inherit land',
      "Younger sons always inherited everything in Shakespeare's day",
      'It was a crime to be born outside marriage, punished by exile',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    about: "Gatsby's fortune",
    source: 'F. Scott Fitzgerald, The Great Gatsby (1925)',
    from: 'the-great-gatsby',
    prompt:
      'In a novel set in New York in 1922, guests whisper that their host, Gatsby, made his fortune in some shady way. Which piece of context best explains the rumours?',
    options: [
      'Alcohol was banned, and selling it illegally made fortunes',
      'Every rich man in 1922 had inherited his money from parents',
      'The banks had just been closed, so all money was suspicious',
      'Gatsby had openly won his fortune in a national lottery',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    about: 'War of the Worlds ending',
    source: 'H. G. Wells, The War of the Worlds (1898), Book 2, Chapter 8',
    from: 'the-war-of-the-worlds',
    prompt:
      "In H. G. Wells's novel, the Martians who have crushed every army are finally killed by earthly bacteria. Which piece of context best explains this ending?",
    options: [
      'Scientists had recently shown that germs cause disease',
      'Victorians believed that illness came only from bad luck',
      'The British army had used germs as weapons in 1890',
      'Wells had trained as a doctor and cured many plagues',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote: 'Poor Tom',
    source: 'William Shakespeare, King Lear, Act 3, Scene 4',
    from: 'king-lear',
    prompt:
      'In a play of about 1606, a nobleman on the run disguises himself as "Poor Tom", a mad beggar, half naked in a storm. Which piece of context best explains the disguise?',
    options: [
      'Mad beggars from Bedlam, real or feigned, roamed the roads',
      'Mad people were treated as saints and given money freely in 1606',
      'The law ordered every nobleman to beg once a year, dressed in rags',
      'Poor Tom was a famous jester at the court of King James',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-danger-of-a-single-story',
    quote: 'Stories matter. Many stories matter.',
    prompt:
      'In The Danger of a Single Story, Adichie follows a long sentence with "Stories matter. Many stories matter." Which piece of context best explains why she puts her remedy in two short, repeated sentences?',
    options: [
      "She wrote it as a newspaper essay in 1960, for readers marking Nigeria's independence",
      'She gave it as a talk at TEDGlobal in Oxford, to listeners who could not reread it',
      'It began as a chapter of a memoir written in 1999 about a childhood in Hong Kong',
      'It was a television report she sent from Somalia in 1992, written to a tight deadline',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'between-a-rock-and-a-hard-place',
    quote: "Time dilates, as if I'm dreaming, and my reactions decelerate.",
    prompt:
      'In Between a Rock and a Hard Place, Aron Ralston writes "Time dilates, as if I\'m dreaming, and my reactions decelerate." Which piece of context best explains his choice of scientific verbs at this moment?',
    options: [
      'He trained as a doctor, so he described his own body in the language of the hospital',
      'He wrote these words as a script for the actors in the 2010 film of his ordeal',
      'He trained as a mechanical engineer and worked for Intel before climbing full time',
      'He was a television reporter, used to describing violent events fast for the news',
    ],
    correctIndex: 2,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'night',
    quote: 'there must have been a cloud around that word',
    prompt:
      'In Alice Munro\'s "Night", the narrator says "there must have been a cloud around that word". Which piece of context best explains why she reasons about her past, with words like "must have", rather than simply recalling it?',
    options: [
      'She wrote it at fourteen, in a diary she kept on the nights when she could not sleep',
      'It was first printed in 1894 in a fashionable New York magazine, under another title',
      'It is one of four late works that she called true in feeling, not always in fact',
      'It first appeared in a Paris newspaper in 1884, for readers who knew its streets',
    ],
    correctIndex: 2,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-bright-lights-of-sarajevo',
    quote: 'I think',
    prompt:
      'In The Bright Lights of Sarajevo by Tony Harrison, the speaker picks out one couple and adds "I think" before saying what the boy is about to do. Which piece of context best explains this hedge?',
    options: [
      'Harrison grew up in Sarajevo and was the boy in the poem, recalling his own first love',
      'Harrison went to Bosnia in 1995 on a commission from The Guardian, and writes as a reporter',
      'Harrison wrote it in 1917 as a soldier, sending verses home from a hospital in Edinburgh',
      'Harrison wrote it as a talk for a live audience in a theatre, to be heard once and not reread',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'a-game-of-polo-with-a-headless-goat',
    quote: 'Formula One without rules, or a city-centre rush hour gone anarchic',
    prompt:
      'In A Game of Polo with a Headless Goat, Emma Levine calls the donkey race "Formula One without rules, or a city-centre rush hour gone anarchic". Which piece of context best explains why she reaches for comparisons like these?',
    options: [
      'She had driven in Formula One herself before she set off on her travels across Asia',
      'She grew up in Karachi and wrote for local readers who bet on the donkey races',
      'She wrote her travel book for English-speaking readers a long way from Karachi',
      'She wrote it in 1968, while the cartoon she mentions was first being shown',
    ],
    correctIndex: 2,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'things-fall-apart',
    quote: 'The Pacification of the Primitive Tribes of the Lower Niger',
    prompt:
      'Things Fall Apart ends with the title the District Commissioner has chosen for his planned book, "The Pacification of the Primitive Tribes of the Lower Niger". Which piece of context best explains why Achebe gives the coloniser the last word?',
    options: [
      'Achebe had served as a British District Commissioner on the Niger, and the title is the one he gave to his own report',
      'The novel was first published in 1970, ten years after Nigeria won its independence from British colonial rule',
      'Achebe said Mister Johnson, a British novel about Nigeria, seemed superficial and helped form his resolve to write',
      "Achebe wrote the novel in Igbo, and its English translator added the Commissioner's book title as the very last line",
    ],
    correctIndex: 2,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'antony-and-cleopatra',
    quote: 'Some squeaking Cleopatra boy my greatness',
    prompt:
      'In Antony and Cleopatra, fearing what Rome will make of her, Cleopatra imagines that she will see "Some squeaking Cleopatra boy my greatness". Which piece of context best explains the joke Shakespeare makes about his own theatre here?',
    options: [
      "On Shakespeare's stage every woman's part, Cleopatra's included, was played by a male actor, most likely a boy",
      'Women had acted on the London stage since the 1580s, and the part of Cleopatra was written for a famous actress',
      'The play was written in 1623 for the First Folio, to be read aloud in schools rather than acted in a theatre',
      "Only the queen was played by a boy: Charmian and Iras were acted by girls in Shakespeare's own company",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'princess-and-the-hustler',
    quote: "Ar soldier. Fight far King an' country.",
    prompt:
      'In Princess & The Hustler, Wendell tells his son Junior "Ar soldier. Fight far King an\' country." Which piece of context best explains the bitterness in these words?',
    options: [
      'Jamaica had won its independence in 1948, so by 1963 he had fought for a country no longer his own',
      "Caribbean men and women served in Britain's forces in the Second World War, then met hostility here",
      "The play was first staged in 1963, the year of the boycott, before an audience of Bristol's war veterans",
      'His words echo Martin Luther King, who gave his most famous speech in America in August 1963',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'blues-for-an-alabama-sky',
    quote: 'Everybody in Harlem is singing the blues.',
    prompt:
      'In Blues for an Alabama Sky, when Guy tells the newly sacked Angel that she can still sing the blues, she answers "Everybody in Harlem is singing the blues." Which piece of context best explains her bleak joke?',
    options: [
      "Prohibition had just been lifted in 1929, so Harlem's clubs were full and singers were easy to hire",
      'Cleage wrote the play in 1930 for the Cotton Club, whose white audiences paid to hear sad songs',
      'The Harlem Renaissance was only beginning, and the blues had not yet travelled north from the South',
      "The Wall Street Crash of 1929 had begun the Great Depression, and Harlem's nightclubs were closing",
    ],
    correctIndex: 3,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'fire-on-the-mountain',
    quote: 'The little town went native.',
    prompt:
      'In Fire on the Mountain, the narrator mimics the departing English and then remarks "The little town went native." Which piece of context best explains the irony of these words?',
    options: [
      'The British made Kasauli a hill cantonment, and the phrase is their colonial cliché turned on them',
      'Kasauli was a French trading port on the coast of India until it was handed back in the late 1970s',
      'Desai published the novel in 1947, the year of Independence, just as the English were leaving',
      'The English stayed on in Kasauli long after Independence, and still ran its club and its institute',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'hullaballoo-in-the-guava-orchard',
    quote: "This was the way of riches and this was a king's life",
    prompt:
      'In Hullaballoo in the Guava Orchard, sitting in the tree with nothing but fruit, leaves and quiet, Sampath thinks "This was the way of riches and this was a king\'s life". Which piece of context best explains why the town soon takes him for a holy man?',
    options: [
      'In the Ramayana, the hero Rama spends all the years of his exile living high in a guava tree in the forest',
      'Indian tradition honours holy men who renounce home and live apart, often under trees, like the Buddha',
      'Kiran Desai spent a year living as a hermit in a tree in India before she began to write the novel',
      'The novel is set in 1947, when the holy men of small towns led the struggle to end British rule in India',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'prayer-before-birth',
    quote: 'dragoon me into a lethal automaton',
    prompt:
      'In Prayer Before Birth, the unborn child fears that others will "dragoon me into a lethal automaton". Which piece of context best explains MacNeice\'s choice of this image?',
    options: [
      'He wrote it in neutral Ireland in 1944, far from the war that he refused to take part in',
      'He wrote it in London in 1944, when conscription reached men up to 51 and women too',
      'He wrote it in 1914, as the first volunteers marched off to the trenches of France',
      'It was published in May 1939, before the war began, as his long poem on the Munich crisis',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'curious-incident',
    quote: 'I do not tell lies.',
    prompt:
      'In The Curious Incident of the Dog in the Night-Time, the boy\'s own written words, "I do not tell lies", are read aloud by his teacher Siobhan while he stands silent before a policeman. Which piece of context best explains why Stephens gives his words to her?',
    options: [
      "Haddon's novel is told by Christopher himself, a first-person voice hard to stage",
      "Haddon's novel is told in the letters that Judy sends her son from her London flat",
      'Stephens first wrote the play for BBC radio, where every scene needed a narrator',
      "Siobhan narrates Haddon's novel too, so Stephens kept the narrator Haddon chose",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'death-and-the-kings-horseman',
    quote: 'Turn your mind only to the unborn.',
    prompt:
      "Death and the King's Horseman ends with Iyaloja's command to the Bride, \"Turn your mind only to the unborn.\" Which piece of context best explains Soyinka's choice of this last line?",
    options: [
      'He wrote the play in prison in 1967, after his arrest early in the Nigerian Civil War',
      'The play is based on events in Lagos in 1960, the year that Nigeria became independent',
      'His Note describes three Yoruba realms: the living, the dead and the yet to be born',
      'His Note asks producers to present the play as a clash between two equal cultures',
    ],
    correctIndex: 2,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'poem-at-thirty-nine',
    quote: 'bits of paper',
    prompt:
      'In Poem at Thirty-Nine, Alice Walker remembers her father showing her how to fill in bank forms, and the "bits of paper" of banking become her way out of the life he had known. Which piece of context best explains why such slight papers matter so much?',
    options: [
      'Her father managed a bank in Atlanta, and trained her for a career in his own branch',
      'She wrote the poem in 1965, the year she turned thirty-nine and opened an account',
      'Her parents were sharecroppers, whose debts were kept in books they could rarely check',
      'Her family fled to New York in the 1930s, when a bank crash took their farm and savings',
    ],
    correctIndex: 2,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-scarlet-letter',
    quote: 'under the footsteps of the sainted Ann Hutchinson',
    prompt:
      'In The Scarlet Letter, the narrator says the wild rose-bush by the prison door may have sprung up "under the footsteps of the sainted Ann Hutchinson". Which piece of context best explains why Hawthorne links her to this prison?',
    options: [
      'She was hanged as a witch on Boston Common in 1656, after a trial in the colony',
      'She challenged the Boston ministers, and in 1637 she was tried and banished',
      "She was Hawthorne's own ancestor, who questioned the accused at Salem in 1692",
      "She founded the colony's first prison in 1630, arriving with the Winthrop Fleet",
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'kindertransport',
    quote: 'Because any good parent would want to protect their child.',
    prompt:
      'In Kindertransport, Helga tells Eva why she must go to England: "Because any good parent would want to protect their child." Which piece of context best explains why Samuels has Helga send her daughter alone?',
    options: [
      'After Kristallnacht, Britain agreed to take unaccompanied children up to seventeen',
      'Britain gave refuge to whole Jewish families, so long as all of them came from Hamburg',
      'The first trains left Germany in 1945, once British troops had liberated the camps',
      'Each parent needed a guarantee of fifty pounds before leaving Germany with a child',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'blood-brothers',
    quote: 'It disappeared.',
    prompt:
      'In Blood Brothers, when Edward, home from university at Christmas, asks Mickey about his job at the box factory, Mickey answers "It disappeared." Which piece of context best explains Russell\'s choice of this answer?',
    options: [
      'In January 1982 unemployment in Britain passed three million for the first time since the 1930s',
      'Russell wrote the musical in 1963, when the docks and factories of Liverpool were booming',
      'The play names Margaret Thatcher as the boss who sacks Mickey in the song about redundancy',
      "Liverpool's docks and factories had their busiest year since the war in 1981, with work for all",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-woman-in-black',
    quote: 'he is mine, mine, he can never be yours',
    prompt:
      'In The Woman in Black, Arthur reads a letter that Jennet wrote to her sister about the son she has been made to give up: "he is mine, mine, he can never be yours". Which piece of context best explains why she had to part with him?',
    options: [
      'An unmarried mother was widely seen as disgraced, and her child was often passed on to relatives',
      'Victorian mourning customs required a widow to give up her children for the four years she wore black',
      'The Adoption Act of 1926 ordered that every child of an unmarried mother be taken away at birth',
      "Jennet had been widowed young, and a widow could not keep a child without her husband's family's consent",
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'journeys-end',
    quote: 'Better die of the pain than be shot for deserting.',
    prompt:
      'In Journey\'s End, when Hibbert tries to go sick with neuralgia, Stanhope tells him: "Better die of the pain than be shot for deserting." Which piece of context best explains why Sherriff makes the threat so stark?',
    options: [
      'Leaving the line without being passed as ill could count as desertion, which could end at a firing squad',
      'Sherriff was court-martialled for leaving his post at Passchendaele, which ended his own service in 1917',
      "The army had ended the death penalty for desertion in 1915, so Stanhope's threat is an empty bluff",
      'Neuralgia was so rare in the trenches that any officer who claimed it was shot without a trial',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'my-name-is-leon',
    quote: "Because he's a baby, a white baby. And you're not.",
    prompt:
      "In My Name is Leon, Maureen tells Leon plainly why his baby brother has been adopted and he has not: \"Because he's a baby, a white baby. And you're not.\" Which piece of context best explains de Waal's choice to make this the novel's central injustice?",
    options: [
      'De Waal has served on adoption panels, and says brothers and sisters are separated too often',
      "Lord Scarman's report of 1981 found that adoption panels had treated Black children unfairly",
      'De Waal wrote the novel in 1981, while she was working as a social worker in Handsworth',
      'De Waal was adopted as a baby by a white family, and was parted from her own older brother',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'hobsons-choice',
    quote: 'his father was a workhouse brat.',
    prompt:
      'In Hobson\'s Choice, at the end of Act One, Hobson forbids Maggie to marry Will with the sneer that "his father was a workhouse brat." Which piece of context best explains the force of this insult?',
    options: [
      'Workhouses were first opened in 1915, the year the play was first staged, so the insult was new',
      'After the Poor Law of 1834, to have been a child of the workhouse was a lasting mark of shame',
      "The Married Women's Property Act of 1882 barred wives from marrying men born in a workhouse",
      'Brighouse had grown up in a Salford workhouse himself, and left it at seventeen to make boots',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-war-of-the-worlds',
    quote:
      'Are we such apostles of mercy as to complain if the Martians warred in the same spirit?',
    about: 'War of the Worlds and empire',
    prompt:
      'In The War of the Worlds, the first chapter recalls how European settlers wiped out the Tasmanians, then asks: "Are we such apostles of mercy as to complain if the Martians warred in the same spirit?" Which piece of context best explains Wells\'s choice of this question?',
    options: [
      "Britain's empire was justified by a belief that the 'civilised' had a right to rule other peoples",
      'The Battle of Dorking, published in 1871, had imagined Martians invading Britain and losing in Surrey',
      'Schiaparelli had proved in 1877 that the Martians were digging canals to prepare an attack on Earth',
      'Wells wrote the novel in 1919, just after Britain had lost most of its empire in the Great War',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    text: 'the-empress',
    quote: 'equal pay with the white sailors',
    prompt:
      'In The Empress, Hari\'s list of the lascars\' demands begins with "equal pay with the white sailors". Which piece of context best explains why Gupta puts this demand first?',
    options: [
      'The Royal Titles Act of 1876 had already given Indian sailors the same pay as British crews',
      'Lascars were hired on separate Asiatic Articles, on lower pay than the European sailors',
      'Lascars were the best-paid seamen in the Empire, and their unions were the strongest at sea',
      "Dadabhai Naoroji's book of 1901 argued that lascars were paid more than British sailors",
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote: 'I stood already committed to a profound duplicity of life',
    source:
      'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), "Henry Jekyll\'s Full Statement of the Case"',
    from: 'jekyll-and-hyde',
    prompt:
      'A respected doctor confesses that, wishing to "wear a more than commonly grave countenance before the public", he hid his pleasures, until "I stood already committed to a profound duplicity of life". Which piece of context best explains his double life?',
    options: [
      'Victorian gentlemen were judged by a strict code of respectability',
      'Victorian doctors were forbidden by law to enjoy any pleasures at all',
      'Most Victorians openly admired men who led secret lives',
      'Victorian London had no rules about how gentlemen behaved',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote: 'the world outside their own direct experience was a region of vagueness and mystery',
    source: 'George Eliot, Silas Marner (1861), Chapter 1',
    from: 'silas-marner',
    prompt:
      'A novel set in the early 1800s explains why villagers distrust a weaver from elsewhere: "To the peasants of old times, the world outside their own direct experience was a region of vagueness and mystery". Which piece of context best explains this distrust?',
    options: [
      'Before railways, few villagers travelled or met strangers',
      'Weavers were known to be criminals throughout rural England',
      'The village had been invaded by foreign soldiers the year before',
      'Country people of the time read widely about distant lands',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote:
      'allot a portion of the virgin soil as a cemetery, and another portion as the site of a prison',
    source: 'Nathaniel Hawthorne, The Scarlet Letter (1850), Chapter 1',
    from: 'the-scarlet-letter',
    prompt:
      'A novel about a strict religious colony in 1640s New England begins by saying that the founders of a new colony "have invariably recognised it among their earliest practical necessities to allot a portion of the virgin soil as a cemetery, and another portion as the site of a prison". Which piece of context best explains the irony?',
    options: [
      'These settlers had sailed to build a perfect, godly society',
      'The colonists had been sent to America as convicts',
      'New England had no laws or punishments at that time',
      'The settlers expected to die soon after they arrived',
    ],
    correctIndex: 0,
  },
  {
    grade: 7,
    type: 'analysis',
    kind: 'context',
    quote: 'Dost thou think, because thou art virtuous, there shall be no more cakes and ale?',
    source: 'William Shakespeare, Twelfth Night, Act 2, Scene 3',
    from: 'twelfth-night',
    prompt:
      'A merry knight, told by a stern steward to stop his late-night singing, replies: "Dost thou think, because thou art virtuous, there shall be no more cakes and ale?" Which piece of context best explains the clash?',
    options: [
      'Puritans of the time attacked feasting and plays as sinful',
      "Cakes and ale had been banned by law in Shakespeare's England",
      'Elizabethan knights were expected never to sing or dance',
      "Shakespeare's audience disliked all forms of merrymaking",
    ],
    correctIndex: 0,
  },
  // ──── Rung 8: the best evidence for a claim, and which reading the text supports ──────────────
  {
    grade: 8,
    type: 'analysis',
    text: 'macbeth',
    quote: 'unsex me here',
    prompt: 'How might a feminist critic interpret Lady Macbeth\'s "unsex me here" speech?',
    options: [
      'Her world ties womanhood to weakness, so she rejects it',
      'She longs to be reborn as a man and leave her marriage behind',
      'She is confused about who she is, and nothing more',
      'She prays to become gentler and kinder to Duncan',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'judgement',
    text: 'animal-farm',
    about: 'the commandments',
    prompt:
      'In Animal Farm, the Seven Commandments are rewritten one by one, and in the last chapter the animals cannot tell pig from man. Which judgement does this evidence best support?',
    options: [
      'Ideals are corrupted step by step by those who seize power',
      'The revolution succeeds once the clever pigs take charge',
      'The animals agree to each change with their eyes wide open',
      'The humans alone are to blame for all that goes wrong',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    prompt: 'How does Stevenson use the novella form in "Jekyll and Hyde" to explore duality?',
    options: [
      'The story comes in fragments, like his split self',
      'Short books were easier for Victorians to read',
      'Novellas were the only kind of book Stevenson could write',
      'A single narrator tells the whole story calmly',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'an-inspector-calls',
    prompt:
      'In An Inspector Calls, evaluate how Priestley uses dramatic irony when the characters dismiss the Inspector.',
    options: [
      'Knowing the wars came, the audience condemns their ease',
      'It makes the audience side with the relieved older Birlings',
      'It shows the Inspector was wrong about everything',
      'It makes the plot too confusing to follow clearly',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'my-last-duchess',
    prompt:
      'How does Browning use the dramatic monologue form in "My Last Duchess" to expose the Duke\'s character?',
    options: [
      'His unbroken voice betrays the tyrant he hides',
      'The Duke is honest and fully aware of himself throughout',
      'The poem is spoken straight to the reader',
      'Browning had no room for other speakers',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'dulce-et-decorum-est',
    prompt: 'Evaluate how Owen subverts traditional war poetry in "Dulce et Decorum Est".',
    options: [
      'Graphic horror turns the Latin title into a lie',
      'Owen celebrates war as glorious and noble',
      'Owen follows the traditions of war poetry closely',
      'The Latin title is meant sincerely by Owen',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'romeo-and-juliet',
    prompt:
      "How does Shakespeare use Juliet's soliloquies to challenge patriarchal expectations in Romeo and Juliet?",
    options: [
      'Her speeches show a will her father never sees',
      'Juliet obeys her father from first to last',
      'Her speeches add very little to the meaning of the play',
      'Shakespeare gave no woman a soliloquy',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'frankenstein',
    prompt:
      "In Frankenstein, evaluate how Shelley uses the Creature's eloquence to challenge reader expectations.",
    options: [
      'His eloquence makes us ask who the real monster is',
      'The Creature cannot speak at all in the novel',
      "He simply copies Victor's words, thoughts and feelings",
      'His eloquence makes him seem less human',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'checking-out-me-history',
    prompt:
      'How does Agard use form and structure in "Checking Out Me History" to mirror his argument?',
    options: [
      'Mocking and reverent stanzas act out his case',
      'The poem follows a strict fourteen-line sonnet form',
      'The structure is random and has no pattern',
      'Agard writes in prose paragraphs, not verse',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'a-christmas-carol',
    prompt:
      'Evaluate how Dickens uses the Ghost of Christmas Yet to Come as a departure from the other spirits in "A Christmas Carol".',
    options: [
      'Its silence makes death terrifying',
      'It is the friendliest of the three spirits',
      'It speaks more than any other spirit',
      'It brings Scrooge good news about his future',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'bayonet-charge',
    prompt:
      'How does Hughes use irregular rhythm in "Bayonet Charge" to convey the experience of combat?',
    options: [
      'Uneven lines stumble like the charging man',
      'The rhythm is perfectly regular throughout',
      'The rhythm follows a cheerful marching song',
      'The rhythm slows into a calm, gentle close',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'great-expectations',
    prompt:
      'In Great Expectations, evaluate how Dickens uses first-person retrospective narration to explore self-deception.',
    options: [
      'The older Pip exposes the snob he was',
      'Pip tells the truth and hides nothing at all',
      'The narration is in the third person',
      'Dickens chose first person at random',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'tissue',
    prompt:
      'How does Dharker use the extended metaphor of paper in "Tissue" to explore human fragility?',
    options: [
      'Paper that seems lasting tears as easily as life',
      'The poem is mainly about recycling paper',
      'Paper stands for the things that last for ever and ever',
      'Dharker is describing the art of origami',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'poppies',
    prompt:
      'In "Poppies" by Weir, how does the domestic imagery create a powerful anti-war statement?',
    options: [
      'Tiny acts of care show a grief that ceremony misses',
      'The poem is mainly about gardening and flowers',
      'The imagery is decorative, with no wider purpose at all',
      'Weir avoids any mention of war or soldiers',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'jane-eyre',
    prompt:
      "How does Bronte use the character of St John Rivers in Jane Eyre to test Jane's values?",
    options: [
      'His cold proposal shows she needs love between equals',
      'St John is the ideal husband the novel wants Jane to marry',
      'Jane accepts his proposal at once and gladly',
      'St John is a minor figure with little purpose',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'the-charge-of-the-light-brigade',
    prompt:
      'How does Tennyson simultaneously celebrate and question military obedience in "The Charge of the Light Brigade"?',
    options: [
      'It honours the men but hints the order was a blunder',
      "Tennyson only celebrates the soldiers' courage and skill",
      'Tennyson blames the soldiers for the disaster',
      'The poem has no political side to it at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'the-emigree',
    prompt:
      'In "The Émigrée" by Rumens, evaluate how the poet uses light as a motif to resist political oppression.',
    options: [
      'The sunlit memory is a defiance no tyrant can conquer',
      'Light only describes the sunny weather in her old city',
      'The light fades away as the poem goes on',
      'Light stands for the danger she escaped',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'macbeth',
    prompt:
      'In Macbeth, evaluate how Shakespeare uses the Porter scene to both relieve and intensify dramatic tension.',
    options: [
      'Its jokes amuse, yet they make the castle a hell',
      "It shows the castle's servants plotting against Macbeth",
      'The scene is purely funny, with no darker meaning',
      'It gives the actor playing Duncan time to change',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'poppies',
    prompt: 'How does Weir use the absence of the soldier\'s voice in "Poppies" to create meaning?',
    options: [
      'His silence keeps us inside her grief and doubt',
      'The soldier speaks in the final stanza',
      'His silence shows he has stopped loving his mother',
      'He is too young to speak for himself',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'tissue',
    prompt: 'In "Tissue" by Dharker, evaluate how the final stanza shifts the poem\'s meaning.',
    options: [
      'Paper becomes skin, so the poem was about life',
      'The last stanza is unrelated to the rest',
      'The last stanza repeats the first word for word',
      'Dharker changes the subject by accident',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    text: 'lord-of-the-flies',
    prompt:
      "In Lord of the Flies, evaluate how Golding uses Piggy's glasses as a symbol that evolves throughout the novel.",
    options: [
      'Their theft and breaking track the fall of reason',
      'They are only for reading and carry no meaning at all',
      'Golding wore glasses as a boy, just like Piggy',
      "They stand for the hunters' strength and skill",
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'macbeth',
    quote: "Here's the smell of the blood still",
    about: 'blood and guilt',
    prompt: "In Macbeth, which line best shows Lady Macbeth's guilt breaking through?",
    options: [
      "Here's the smell of the blood still",
      'unsex me here',
      'A little water clears us of this deed',
      'look like the innocent flower',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'macbeth',
    quote: "Vaulting ambition, which o'erleaps itself",
    prompt:
      'In Macbeth, which line best shows Macbeth admitting that he has no motive to kill Duncan except his own wish to rise?',
    options: [
      "Vaulting ambition, which o'erleaps itself",
      'Is this a dagger which I see before me',
      "Will all great Neptune's ocean wash this blood",
      'I am in blood',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'romeo-and-juliet',
    quote: "And I'll no longer be a Capulet",
    prompt:
      'In Romeo and Juliet, which line best shows Juliet willing to give up her family for Romeo?',
    options: [
      "And I'll no longer be a Capulet",
      'Parting is such sweet sorrow',
      "A plague o' both your houses",
      'These violent delights have violent ends',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'a-christmas-carol',
    quote: 'I will honour Christmas in my heart, and try to keep it all the year',
    prompt: 'In A Christmas Carol, which line best shows Scrooge promising to change for good?',
    options: [
      'I will honour Christmas in my heart, and try to keep it all the year',
      'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner',
      'A merry Christmas, uncle',
      'The cold within him froze his old features',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'jekyll-and-hyde',
    quote: 'spring headlong into the sea of liberty',
    prompt:
      'In Jekyll and Hyde, which quotation best shows Jekyll enjoying the freedom of becoming Hyde?',
    options: [
      'spring headlong into the sea of liberty',
      "trampled calmly over the child's body",
      'The fog still slept on the wing above the drowned city',
      'with ape-like fury',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'an-inspector-calls',
    quote: "I'll never, never do it again to anybody.",
    prompt:
      'In An Inspector Calls, which quotation best shows Sheila taking responsibility for what she did?',
    options: [
      "I'll never, never do it again to anybody.",
      'He should be made an example of.',
      "it's better to ask for the earth than to take it",
      'community and all that nonsense',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'an-inspector-calls',
    quote: "You began to learn something. And now you've stopped.",
    prompt:
      'In An Inspector Calls, Reading A says Sheila truly changes; Reading B says her change is skin-deep. Which reading does her late line "You began to learn something. And now you\'ve stopped." better support?',
    options: [
      'A, because she keeps learning when her parents stop',
      'A, because she agrees at once to marry Gerald as planned',
      'B, because she joins her father in laughing off the hoax',
      "B, because she mocks the Inspector's final speech herself",
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'pride-and-prejudice',
    quote: 'Till this moment, I never knew myself.',
    prompt:
      'In Pride and Prejudice, which line best shows Elizabeth recognising her own prejudice?',
    options: [
      'Till this moment, I never knew myself.',
      'It is a truth universally acknowledged',
      'the proudest, most disagreeable man in the world',
      'Are the shades of Pemberley to be thus polluted?',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'great-expectations',
    quote: 'It is a most miserable thing to feel ashamed of home.',
    prompt:
      'In Great Expectations, which line best shows Pip looking down on the forge and the life he was born to?',
    options: [
      'It is a most miserable thing to feel ashamed of home.',
      'I loved her against reason, against promise, against peace',
      "Ask no questions, and you'll be told no lies.",
      'life is made of ever so many partings welded together',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'jane-eyre',
    quote: 'I care for myself',
    prompt:
      'In Jane Eyre, Jane leaves Rochester when she learns he is married. Reading A: she leaves out of pride. Reading B: she leaves out of self-respect. Which reading does "I care for myself" better support, and why?',
    options: [
      'B, because she ties leaving to respecting herself',
      'A, because she wants to punish Rochester for lying',
      'A, because she cares more for her pride than for love',
      'B, because she no longer loves Rochester at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'frankenstein',
    quote: 'breathless horror and disgust filled my heart',
    prompt:
      "In Frankenstein, which quotation best shows Victor's revulsion at the moment his creature comes to life?",
    options: [
      'breathless horror and disgust filled my heart',
      'I was benevolent and good; misery made me a fiend',
      'pour a torrent of light into our dark world',
      'that I might infuse a spark of being into the lifeless thing',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'lord-of-the-flies',
    quote: "I'm part of you",
    prompt:
      'In Lord of the Flies, which quotation best supports the claim that the "beast" is inside the boys themselves?',
    options: [
      "I'm part of you",
      "We're English; and the English are best at everything.",
      'You let the fire go out.',
      'Seems to me we ought to have a chief to decide things.',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'animal-farm',
    quote: 'Napoleon is always right',
    prompt:
      "In Animal Farm, which line best shows Boxer's blind trust in the leaders who will betray him?",
    options: [
      'Napoleon is always right',
      'All animals are equal.',
      'Four legs good, two legs bad',
      'The creatures outside looked from pig to man',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'much-ado-about-nothing',
    quote: 'Kill Claudio.',
    prompt:
      'In Much Ado About Nothing, after Hero is shamed, Beatrice tells Benedick: "Kill Claudio." Reading A: Beatrice is simply cruel. Reading B: her fury is loyalty to her wronged cousin. Which reading does the scene better support?',
    options: [
      'B, because she is furious that no one will defend Hero',
      'A, because she has always hated Claudio and wanted him dead',
      'A, because she wants Benedick to prove he is a killer',
      'B, because she knows Claudio is innocent of any wrong',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'the-merchant-of-venice',
    quote: 'The villainy you teach me I will execute',
    about: "Shylock's speech",
    prompt:
      'In The Merchant of Venice, Reading A says Shylock is simply a villain. Reading B says the play shows his cruelty learned from Christian hatred. Which reading does "The villainy you teach me I will execute" better support?',
    options: [
      'B, because he says the Christians taught him revenge',
      'A, because he admits he was born wicked and enjoys it',
      'A, because he wants to lend money to every Christian',
      'B, because he forgives Antonio at the end of the line',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'twelfth-night',
    quote: "I'll be revenged on the whole pack of you",
    prompt:
      "In Twelfth Night, which line best shows that the play's comedy leaves one character bitter?",
    options: [
      "I'll be revenged on the whole pack of you",
      'If music be the food of love, play on',
      'I am not that I play',
      'Some are born great, some achieve greatness',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    quote:
      'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait',
    source: 'Charles Dickens, A Christmas Carol (1843), Stave 1',
    from: 'a-christmas-carol',
    prompt:
      'A narrator describes a miser: "The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait". Which phrase best shows the coldness comes from inside him?',
    options: [
      'The cold within him',
      'nipped his pointed nose',
      'shrivelled his cheek',
      'stiffened his gait',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    quote: 'as the maid described it',
    source:
      'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), "The Carew Murder Case"',
    from: 'jekyll-and-hyde',
    prompt:
      'A novel reports an attack seen from a window: "And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman." Which words show the account is second-hand?',
    options: [
      'as the maid described it',
      'a great flame of anger',
      'stamping with his foot, brandishing the cane',
      'all of a sudden',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    quote: 'the bride within the bridal dress had withered like the dress',
    about: 'Satis House',
    source: 'Charles Dickens, Great Expectations (1861), Chapter 8',
    from: 'great-expectations',
    prompt:
      'A boy describes a jilted bride who has never taken off her wedding dress: "everything within my view which ought to be white, had been white long ago, and had lost its lustre, and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress". Which phrase shows that she herself, not just her things, has decayed?',
    options: [
      'withered like the dress',
      'had been white long ago',
      'had lost its lustre',
      'faded and yellow',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    quote:
      'Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance',
    about: 'War of the Worlds Martians',
    source: 'H. G. Wells, The War of the Worlds (1898), Book 1, Chapter 4',
    from: 'the-war-of-the-worlds',
    prompt:
      'A narrator sees his first Martian: "Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance." Which words admit that language cannot capture the sight?',
    options: [
      'can scarcely imagine',
      'Those who have never seen',
      'a living Martian',
      'the strange horror',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    quote: 'The animals had assumed as a matter of course that these would be shared out equally',
    source: 'George Orwell, Animal Farm (1945), Chapter 3',
    from: 'animal-farm',
    prompt:
      'In a fable of 1945, the farm\'s windfall apples ripen: "The animals had assumed as a matter of course that these would be shared out equally; one day, however, the order went forth that all the windfalls were to be collected and brought to the harness-room for the use of the pigs." Which words show the animals never thought to question the sharing?',
    options: [
      'as a matter of course',
      'shared out equally',
      'the order went forth',
      'for the use of the pigs',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'word',
    quote: 'had been insufficient to make his wife understand his character',
    source: 'Jane Austen, Pride and Prejudice (1813), Chapter 1',
    from: 'pride-and-prejudice',
    prompt:
      'A novel introduces a married couple: the husband was "so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character". Which word carries the narrator\'s quiet verdict on the wife?',
    options: ['insufficient', 'three-and-twenty', 'caprice', 'mixture'],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    quote: "More sinn'd against than sinning",
    source: 'William Shakespeare, King Lear, Act 3, Scene 2',
    from: 'king-lear',
    prompt:
      'Out in the storm, an old king cries: "I am a man / More sinn\'d against than sinning." Reading A: he admits his own faults. Reading B: he sees himself mainly as a victim. Which reading does the line support, and why?',
    options: [
      'B, because he feels more wronged than wrong',
      'A, because he confesses he has sinned more than anyone',
      'A, because he begs his daughter for forgiveness here',
      'B, because he says he has never done anything wrong',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    quote: 'O brave new world',
    source: 'William Shakespeare, The Tempest, Act 5, Scene 1',
    from: 'the-tempest',
    prompt:
      'Seeing strangers for the first time, a young woman cries "O brave new world / That has such people in \'t". Her father answers: "\'Tis new to thee." Reading A: the play shares her wonder. Reading B: the play questions it. Which reading does her father\'s reply support?',
    options: [
      'B, because his flat words hint that they only seem fine',
      'A, because he agrees that every one of them is good',
      'A, because he cries out with the same delight as she does',
      'B, because he says that none of the strangers are real',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'a-passage-to-africa',
    quote: 'In the ghoulish manner of journalists',
    prompt:
      'In A Passage to Africa, which quotation best shows George Alagiah turning a harsh judgement on his own profession?',
    options: [
      'a thousand hungry, lean, scared and betrayed faces',
      'In the ghoulish manner of journalists',
      'I owe you one',
      'between the rich world and the poor world',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'significant-cigarettes',
    quote: 'his own guilt at still being alive',
    prompt:
      'In Significant Cigarettes, which quotation best shows that Lev feels somehow to blame for outliving his wife?',
    options: [
      'They ran out of trees',
      'aching for the comfort of nicotine or oblivion',
      'his own guilt at still being alive',
      'make them share it with me: their infernal luck',
    ],
    correctIndex: 2,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'explorers-or-boys-messing-about',
    quote: 'plucked from the icy water',
    prompt:
      'In Explorers, or boys messing about?, which quotation best shows Steven Morris making the men passive at the moment of their rescue?',
    options: [
      'claims to have been flying since the age of five',
      'ended in farce',
      'plucked from the icy water',
      'hit the headlines for the wrong reasons',
    ],
    correctIndex: 2,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'disabled',
    quote: 'Passed from him to the strong men that were whole',
    prompt:
      'In "Disabled" by Wilfred Owen, the soldier notices how "the women\'s eyes / Passed from him to the strong men that were whole". Reading A: Owen presents the women as shallow. Reading B: Owen shows the women only through the soldier\'s shame. Which reading does the poem better support?',
    options: [
      'A, because the women tell him to his face that a wounded man is not worth a look',
      'B, because the women never speak: we see only what he believes their eyes are doing',
      'A, because Meg, the girl he joined up to please, turns away from him at his homecoming',
      'B, because the women weep openly for him, though he mistakes their tears for disgust',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'still-i-rise',
    quote: 'the dream and the hope of the slave',
    prompt:
      "Reading A says Maya Angelou's Still I Rise is one woman's personal boast; Reading B says it speaks for a whole people's history. Which reading do the final two stanzas better support?",
    options: [
      'A, because the last stanza turns back to the "you" for one final personal taunt',
      'B, because in the end she names herself "the dream and the hope of the slave"',
      'A, because she never mentions any past except her own unhappy childhood',
      'B, because every stanza from the first line onwards names slavery outright',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'to-kill-a-mockingbird',
    quote: 'not one of them looked at Tom Robinson',
    prompt:
      "In To Kill a Mockingbird, which quotation from the verdict scene in Chapter 21 best shows the jurors' guilt in their body language, before the verdict is read?",
    options: [
      'Judge Taylor was polling the jury',
      'not one of them looked at Tom Robinson',
      'knowing that the gun was empty',
      "Miss Jean Louise, stand up. Your father's passin'.",
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'things-fall-apart',
    quote: 'proverbs are the palm-oil with which words are eaten',
    prompt:
      'In Things Fall Apart, which quotation best shows the narrator presenting the talk of Umuofia as an art to be savoured?',
    options: [
      'their love of superfluous words',
      'Okonkwo was provoked to justifiable anger',
      'proverbs are the palm-oil with which words are eaten',
      'among these people a man was judged according to his worth',
    ],
    correctIndex: 2,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'antony-and-cleopatra',
    quote: 'Authority melts from me',
    prompt:
      'In Antony and Cleopatra, which quotation best shows Antony feeling his own power drain away from him?',
    options: [
      'Let Rome in Tiber melt',
      'Melt Egypt into Nile',
      "The crown o' th' earth doth melt.",
      'Authority melts from me',
    ],
    correctIndex: 3,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'a-midsummer-nights-dream',
    quote: 'And this same progeny of evils comes / From our debate, from our dissension;',
    prompt:
      "In A Midsummer Night's Dream, which quotation best shows a ruler taking the blame for the disorder of the natural world?",
    options: [
      "Hippolyta, I woo'd thee with my sword, / And won thy love doing thee injuries;",
      'And this same progeny of evils comes / From our debate, from our dissension;',
      'If we shadows have offended, / Think but this, and all is mended,',
      'To whom you are but as a form in wax / By him imprinted',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'im-the-king-of-the-castle',
    quote: 'It was Kingshaw, it was Kingshaw, he pushed me in the water.',
    prompt:
      'In I\'m the King of the Castle, Hooper\'s first words to the adults after Kingshaw has dragged him from the stream are "It was Kingshaw, it was Kingshaw, he pushed me in the water." Reading A: Hill shows the stronger boy winning. Reading B: Hill shows the boy who understands adults winning. Which reading does the novel better support?',
    options: [
      'A, because in Hang Wood it is Hooper who takes charge, while Kingshaw panics in the storm',
      "B, because Mrs Kingshaw sees through the lie at once and takes her own son's side",
      'A, because Kingshaw really did push Hooper into the stream, as the adults rightly decide',
      "B, because Kingshaw is braver and abler, yet the adults believe Hooper's lie at once",
    ],
    correctIndex: 3,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'a-taste-of-honey',
    quote: "If you don't watch it, you'll turn out exactly like her.",
    prompt:
      "In A Taste of Honey, Geof warns Jo \"If you don't watch it, you'll turn out exactly like her.\" Reading A: Delaney presents Helen as simply a selfish mother, Jo's opposite. Reading B: Delaney shows mother and daughter as more alike than either can bear. Which reading does the play better support?",
    options: [
      "A, because Jo never repeats any of Helen's choices and turns away every man she meets",
      'B, because Jo answers Helen\'s "You\'re man mad." at once with "I\'m like you."',
      "A, because Helen never shows any concern for Jo, even when she finds Jimmie's ring",
      'B, because Helen insists that she has always been a proper mother who cooked for Jo',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'of-mice-and-men',
    quote: "Crooks' face lighted with pleasure in his torture.",
    prompt:
      "In Of Mice and Men, which quotation best shows that Steinbeck will not make the ranch's outsiders simply innocent victims?",
    options: [
      'a mauled copy of the California civil code for 1905',
      "Crooks' face lighted with pleasure in his torture.",
      "A guy goes nuts if he ain't got nobody.",
      'He did not look down at the dog at all.',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'a-view-from-the-bridge',
    quote: 'it is better to settle for half, it must be',
    prompt:
      'In A View from the Bridge, Alfieri\'s last speech returns to the idea of his first, that it is better to "settle for half". Reading A: the ending confirms his faith in compromise. Reading B: the ending shows him doubting it. Which reading does the final speech better support?',
    options: [
      'A, because he repeats his opening words exactly and ends the play calm and content',
      'B, because he has to insist "it must be", like a man trying to persuade himself',
      'A, because he condemns Eddie as wholly bad, a warning to all who will not compromise',
      'B, because he admits he told Eddie to fight Marco, and now regrets that advice',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'the-joy-luck-club',
    quote: 'the best combination: American circumstances and Chinese character',
    prompt:
      'In The Joy Luck Club, which quotation best shows a mother hoping that her children can hold two cultures together at once?',
    options: [
      'If you show one, you must always sacrifice the other.',
      'the best combination: American circumstances and Chinese character',
      'My mother believed you could be anything you wanted to be in America.',
      'They see daughters who grow impatient when their mothers talk in Chinese',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'klara-and-the-sun',
    quote: 'proved as effective for Josie as it had for Beggar Man',
    prompt:
      'In Klara and the Sun, Reading A says the novel shows that the Sun healed Josie. Reading B says the novel leaves open what healed her. Which reading does the novel better support?',
    options: [
      'A, because Josie recovers the moment Klara destroys the Cootings Machine in Part Four',
      'B, because Klara reports the cure as fact, yet Rick had thought it "AF superstition"',
      "A, because Mr Capaldi's tests on Klara in Part Six prove that sunlight cured Josie",
      'B, because Josie dies at the end of Part Five, so the Sun never heals anyone at all',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'la-belle-dame-sans-merci',
    quote: 'I love thee true',
    prompt:
      "In La Belle Dame sans Merci, Reading A says Keats presents the lady as a cruel enchantress. Reading B says Keats lets us see her only through the knight's own account. Which reading does the poem better support?",
    options: [
      'A, because she tells the knight plainly that she means to trap him and never let him go',
      'B, because her only words, "I love thee true", come in a language he calls strange',
      'A, because the questioner saw her lure the knight away to her elfin grot by the lake',
      'B, because the pale kings in his dream praise her kindness and beg him to go back',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'curious-incident',
    quote: 'I see everything. Most other people are lazy.',
    prompt:
      'In The Curious Incident of the Dog in the Night-Time, which quotation best shows Christopher turning the usual view of him upside down, so that it is everyone else who falls short?',
    options: [
      'Does that mean I can do anything, do you think?',
      'I see everything. Most other people are lazy.',
      'I can because I went to London on my own.',
      "It's a book and it's for me and not everybody, just for me",
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'anita-and-me',
    quote: 'the grey area between all categories felt increasingly like home',
    prompt:
      'In Anita and Me, which quotation best shows Meena beginning to find comfort in fitting neither the Indian nor the Tollington idea of a girl?',
    options: [
      'I wanted to shed my body like a snake slithering out of its skin',
      'worse than they already think we are. You prove you are better. Always.',
      'the grey area between all categories felt increasingly like home',
      'my childhood would begin ebbing away with the fall of the autumn leaves',
    ],
    correctIndex: 2,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'the-woman-in-black',
    quote: 'desperate, yearning malevolence',
    prompt:
      'In The Woman in Black, which quotation best shows Hill making the woman a figure of pity and of menace at the same time?',
    options: [
      'some terrible wasting disease',
      'It pierced me through.',
      'desperate, yearning malevolence',
      'Those who have suffered worst say least',
    ],
    correctIndex: 2,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'telling-tales',
    quote: 'they had met in the dark and had fought in the dark',
    prompt:
      "In 'Odour of Chrysanthemums' from Telling Tales, which quotation best shows Elizabeth recognising, over her husband's body, that the failure of their marriage was not his fault alone?",
    options: [
      'Her face was calm and set, her mouth was closed with disillusionment.',
      "He'll come home when they carry him.",
      'they had met in the dark and had fought in the dark',
      'It was chrysanthemums when I married him, and chrysanthemums when you were born',
    ],
    correctIndex: 2,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    text: 'oranges-are-not-the-only-fruit',
    quote: 'She said he was a devil, but she still took the mince.',
    prompt:
      "In Oranges are not the Only Fruit, which quotation best shows the narrator exposing her mother's hypocrisy without ever stating it?",
    options: [
      'She had never heard of mixed feelings. There were friends and there were enemies.',
      'She said he was a devil, but she still took the mince.',
      "I'm not havin' demons here.",
      'To the pure all things are pure',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'coram-boy',
    quote: 'He must accept his status and birth',
    prompt:
      'In Coram Boy, when Alexander\'s sister begs their mother to stop what is being done to him, Lady Ashbrook replies "He must accept his status and birth". Reading A: the pressure on Alexander is one man\'s temper. Reading B: it belongs to his whole family and class. Which reading does this line better support?',
    options: [
      'A, because Lady Ashbrook goes on to beg Sir William to let the boy keep his music',
      'B, because his mother says it, and she puts three centuries of Ashbrook first',
      'B, because Isobel agrees with her mother that Alexander must give up his music',
      'A, because it is Sir William, not his wife, who says this to their daughter',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'silas-marner',
    quote: 'this child was somehow a message come to him from that far-off life',
    prompt:
      'In Silas Marner, Silas finds a child asleep on his hearth and "had a dreamy feeling that this child was somehow a message come to him from that far-off life". Reading A: Eliot presents the child\'s arrival as a miracle. Reading B: Eliot gives it ordinary causes and leaves the reader between providence and chance. Which reading does the chapter better support?',
    options: [
      'A, because the narrator states plainly that God sent the child to Silas to replace his gold',
      'B, because she comes in during one of his fits, and his blurred eyes take her hair for gold',
      'A, because Silas sees an angel carry the child across the snow and lay her by his fire',
      "B, because Silas knows at once that the child is Godfrey's, and decides to keep it secret",
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    text: 'the-war-of-the-worlds',
    quote: 'the useless and cumbersome and mischievous have to die',
    prompt:
      "In The War of the Worlds, the artilleryman on Putney Hill declares humanity beaten and plans to live in the drains and one day seize the Martians' machines. Reading A: Wells offers the plan as humanity's real hope. Reading B: Wells shows it as a fantasy that turns cruel. Which reading does the chapter better support?",
    options: [
      'A, because his men capture a fighting-machine and turn its own Heat-Ray against the Martians',
      'B, because he says "the useless and cumbersome and mischievous have to die", yet digs little',
      'A, because the narrator stays with him underground until the day the Martians are found dead',
      'B, because the curate denounces the whole plan as a sin and talks the narrator out of joining',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'word',
    quote: 'It was one of those rare smiles with a quality of eternal reassurance in it',
    source: 'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter 3',
    from: 'the-great-gatsby',
    prompt:
      'A narrator describes his mysterious host\'s smile: "It was one of those rare smiles with a quality of eternal reassurance in it". Which word suggests the smile promises more than any person could give?',
    options: ['eternal', 'rare', 'reassurance', 'quality'],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'evidence',
    quote:
      'The gold had kept his thoughts in an ever-repeated circle, leading to nothing beyond itself',
    source: 'George Eliot, Silas Marner (1861), Chapter 14',
    from: 'silas-marner',
    prompt:
      'A novel compares a weaver\'s hoarded gold with the child he now cares for: "The gold had kept his thoughts in an ever-repeated circle, leading to nothing beyond itself; but Eppie was an object compacted of changes and hopes that forced his thoughts onward". Which phrase best shows what the child gives him that the gold never could?',
    options: [
      'forced his thoughts onward',
      'an ever-repeated circle',
      'leading to nothing beyond itself',
      'kept his thoughts',
    ],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'word',
    quote:
      "Love looks not with the eyes, but with the mind; / And therefore is wing'd Cupid painted blind",
    source: "William Shakespeare, A Midsummer Night's Dream, Act 1, Scene 1",
    from: 'a-midsummer-nights-dream',
    prompt:
      'A young woman whose love is not returned says: "Love looks not with the eyes, but with the mind; / And therefore is wing\'d Cupid painted blind". Which word suggests love is flighty and quick to change?',
    options: ["wing'd", 'blind', 'mind', 'painted'],
    correctIndex: 0,
  },
  {
    grade: 8,
    type: 'analysis',
    kind: 'reading',
    quote:
      'I could be bounded in a nutshell, and count myself a king of infinite space, were it not that I have bad dreams',
    source: 'William Shakespeare, Hamlet, Act 2, Scene 2',
    from: 'hamlet',
    prompt:
      'A grieving prince calls his country a prison. Told that his ambition makes it one, he replies: "I could be bounded in a nutshell, and count myself a king of infinite space, were it not that I have bad dreams." Reading A: his trouble is his situation. Reading B: his trouble is in his own mind. Which reading does the reply support, and why?',
    options: [
      "B, because only his 'bad dreams' spoil even a nutshell",
      "A, because a 'nutshell' is all the space he is given",
      'A, because he wants to rule over a much larger kingdom',
      'B, because his dreams show that he longs for the crown',
    ],
    correctIndex: 0,
  },
  // ──── Rung 9: weighing a critic's claim, and the strongest sentence of analysis ───────────────
  {
    grade: 9,
    type: 'analysis',
    text: 'macbeth',
    prompt:
      'How does Shakespeare present the supernatural in Macbeth as both a dramatic and thematic device?',
    options: [
      'It voices his hidden ambition and asks: fate, or choice?',
      'It frightens the audience, and has no further purpose',
      'It shows that the witches control every single choice he makes',
      'It proves that Shakespeare himself believed in witches',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'lord-of-the-flies',
    prompt:
      'Critically evaluate whether Golding presents civilisation as merely a veneer in "Lord of the Flies".',
    options: [
      'Mostly, but Ralph and Simon resist a wholly bleak reading',
      'No: the boys build a fair society that lasts until their rescue',
      'Yes, and every boy is savage from the very first day',
      'No: the island, not human nature, drives them mad',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'of-mice-and-men',
    prompt:
      'In Of Mice and Men, how does Steinbeck use the American Dream as both a motivating force and a destructive illusion?',
    options: [
      'It gives hope, but men so poor could never reach it',
      'It comes true once George and Lennie save enough',
      'Only George believes in it, so it drives no one else',
      'It is a dream of city life, far from ranch work',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'a-christmas-carol',
    about: 'Ignorance and Want',
    prompt:
      'In A Christmas Carol, Dickens shows the starving children Ignorance and Want, yet asks only that rich men like Scrooge change their hearts. Which judgement does this evidence best support?',
    options: [
      'Radical in what it shows, cautious in what it asks',
      'Wholly radical: it calls for the state to be overthrown',
      'Not radical at all: it never shows the suffering poor',
      'Only a ghost story, with no social purpose behind it',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'macbeth',
    prompt:
      'Evaluate how Shakespeare uses the structure of the tragedy to present Macbeth as both perpetrator and victim.',
    options: [
      'His rise and fall, told in soliloquies, wins pity and blame',
      'The rise and fall shows a purely evil man punished',
      "The structure shows him as nothing more than the witches' victim",
      'The structure was left to chance and carries no meaning',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'ozymandias',
    prompt:
      'How does Shelley use the sonnet form ironically in "Ozymandias" to reinforce the poem\'s message?',
    options: [
      'A form for lasting fame tells of fame crumbling to sand',
      'Shelley chose the sonnet because it is the easiest form',
      "The form follows Shakespeare's rhyme scheme exactly",
      "The form has no bearing on the poem's meaning",
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'an-inspector-calls',
    prompt:
      'Critically evaluate how Priestley uses time in "An Inspector Calls" to construct his political argument.',
    options: [
      'Set in 1912, seen in 1945: hindsight condemns the Birlings',
      'The play is set in 1945, the year it was first staged',
      'Time is irrelevant, since the action could happen anywhere',
      'Priestley chose 1912 at random, for no clear reason',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'frankenstein',
    about: "Victor's ambition",
    prompt:
      'In Frankenstein, Victor works alone and in secret, and his creation destroys those he loves, yet the Alps and their beauty soothe and restore him. Which judgement does this evidence best support?',
    options: [
      'It attacks the lone genius, not every Romantic value',
      'It praises Victor as a hero whose genius justifies all',
      'It attacks all love of nature as dangerous and wrong',
      'It shows that his ruin comes from bad luck, not from him',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'dulce-et-decorum-est',
    prompt:
      'How does Owen use the gap between the title and the content of "Dulce et Decorum Est" to create a sustained rhetorical argument?',
    options: [
      "Each stanza is evidence against the title's claim",
      "The title is simply a label for the poem's subject",
      'The poem agrees with the patriotic Latin phrase',
      'The title was chosen by the publisher, not Owen',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'jane-eyre',
    prompt:
      'Evaluate how Bronte uses the Gothic genre in Jane Eyre both to satisfy and to critique Victorian readerly expectations.',
    options: [
      'Gothic thrills become a way to show women confined',
      'Bronte follows Gothic conventions without any change',
      'The Gothic elements are purely there for decoration',
      'Jane Eyre has no Gothic features of any kind at all',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'my-last-duchess',
    prompt:
      'How does Browning construct dramatic irony through the Duke\'s self-presentation in "My Last Duchess"?',
    options: [
      'He means to seem refined, but shows us a jealous tyrant',
      'He is fully aware of how his words make him sound',
      'There is no irony, since he tells the plain truth',
      'He is shown throughout as a gentle, wronged and loving husband',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'great-expectations',
    prompt:
      'Critically assess how Dickens uses the bildungsroman structure of Great Expectations to interrogate the Victorian myth of self-improvement.',
    options: [
      "Pip's rise, paid for by a convict, makes him worse",
      'Pip earns his fortune through his own hard work and talent',
      'The novel has no clear structure to speak of',
      "Dickens admires Pip's snobbery and holds it up",
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'war-photographer',
    prompt:
      'How does Duffy use the metaphor of developing photographs in "War Photographer" to explore the ethics of representing suffering?',
    options: [
      'Images of pain surface slowly, then are cut for readers',
      'The poem is mainly about the techniques of developing photographs',
      'Duffy simply celebrates the work of photojournalists',
      'The darkroom is purely a setting, with no meaning',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'romeo-and-juliet',
    prompt:
      'Evaluate how Shakespeare uses the Friar in Romeo and Juliet as both a figure of hope and a structural instrument of tragedy.',
    options: [
      'His kind plans fail, so goodwill cannot beat the feud',
      'The Friar is purely a villain who secretly plots their deaths',
      'The Friar is irrelevant to the plot of the play',
      'He is shown as wise, and never makes a mistake',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'london',
    prompt:
      'In "London" by Blake, how does the word "chartered" build a critique of institutional power?',
    options: [
      'It implies streets and river are owned and controlled',
      'It simply means that the streets have been mapped',
      "It shows Blake's pride in a well-run, orderly city",
      'It is an ordinary word with no special significance in the poem',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'remains',
    about: "the speaker's two voices",
    prompt:
      'In "Remains", the speaker first tells of a killing like a casual anecdote, but by the end he cannot stop seeing the man. Which judgement does this evidence best support?',
    options: [
      "He is split between a soldier's shrug and a haunted mind",
      'He feels no guilt, since he was only doing his duty',
      'He has fully recovered by the time the poem ends',
      'His voice stays casual and unchanged from the start to the end',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'ozymandias',
    about: 'the sculptor',
    prompt:
      'A critic argues that the real hero of "Ozymandias" is the sculptor, not the king. Which response weighs this claim best?',
    options: [
      'Partly: his art outlasts the king, yet it too lies broken',
      "Fully: the sculptor's statue stands unharmed for ever",
      'Not at all: the sculptor is never mentioned in the poem',
      "Not at all: the poem's only interest is the king's great power",
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'exposure',
    prompt:
      'Critically evaluate how Owen uses the form of "Exposure" to embody the soldiers\' experience.',
    options: [
      "Half-rhymes never resolve, like the men's endless wait",
      'The form is conventional, with perfect rhymes throughout',
      "Each stanza grows longer as the soldiers' hope grows",
      "The form has no connection to the poem's meaning",
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'romeo-and-juliet',
    about: 'fate and choice',
    prompt:
      "In Romeo and Juliet, the Prologue foretells the lovers' deaths, yet Tybalt's anger, Romeo's haste and the Friar's risky plans all drive events. Which judgement does this evidence best support?",
    options: [
      'Fate frames the story, but human choices carry it out',
      'The characters have complete free will, and fate is absent',
      "Fate alone decides, so no character's choice matters",
      'Only Romeo believes in fate, and the play mocks him',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'bayonet-charge',
    prompt:
      'How does Hughes use the disruption of patriotic language in "Bayonet Charge" to deconstruct war propaganda?',
    options: [
      'King, honour and dignity fall away in raw terror',
      'Hughes supports patriotism and the glory of war',
      'The poem contains no patriotic language at all',
      'Hughes wrote it as propaganda to recruit soldiers',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    text: 'jekyll-and-hyde',
    prompt:
      'Critically assess how Stevenson uses the will and testament in Jekyll and Hyde as both a legal and symbolic device.',
    options: [
      'Leaving all to Hyde hints he will hand himself over',
      'The will is a minor detail with no wider purpose',
      'The will is straightforward and raises no questions',
      'The will is there only for realism, to show the law at work',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'macbeth',
    about: "Lady Macbeth's influence",
    prompt:
      "A critic argues that in Macbeth, Lady Macbeth is the real driving force behind Duncan's murder. Which response weighs this claim best?",
    options: [
      'Partly: she pushes him, but the idea of murder was his first',
      'Partly: she plans it, but the witches order the murder',
      'Fully: he never thinks of murder until she suggests it',
      "Not at all: she plays no part at all in planning Duncan's death",
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'a-christmas-carol',
    about: "Scrooge's change",
    prompt:
      'A critic says that in A Christmas Carol, Scrooge changes too suddenly to be believable. Which response weighs this claim best?',
    options: [
      'Not really: Stave 2 already shows him starting to soften',
      'Fully: nothing in the story prepares us for his change',
      'Partly: he softens, but turns mean again in Stave 5',
      'Fully: Dickens shows no feeling in Scrooge until Stave 5',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'an-inspector-calls',
    about: 'the Inspector',
    prompt:
      "A critic argues that in An Inspector Calls the Inspector is less a character than Priestley's mouthpiece. Which response weighs this claim best?",
    options: [
      'Largely, though his mystery makes him more than a voice',
      'Not at all: the Inspector has no views on society',
      'Partly: he speaks for Priestley, but only in the first act',
      'Not at all: he agrees with Birling on every point',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'jekyll-and-hyde',
    quote: 'sold a slave to my original evil',
    prompt:
      "A critic argues that in Jekyll and Hyde, Hyde is not a separate being but Jekyll's hidden self set free. Which response weighs this claim best?",
    options: [
      'Strongly: Jekyll calls Hyde his own evil, set free',
      'Not at all: Hyde is a stranger whom Jekyll never meets',
      'Partly: Hyde is Jekyll, but the potion adds new evil',
      "Strongly, because Hyde is Jekyll's long-lost brother",
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'frankenstein',
    about: 'the Creature',
    prompt:
      "A critic argues that in Frankenstein the Creature, not Victor, is the novel's true victim. Which response weighs this claim best?",
    options: [
      'Largely: rejected by all, he suffers, though he also kills',
      'Not at all: the Creature is evil from the very moment he wakes',
      'Fully: the Creature never harms anyone in the novel',
      'Partly: he suffers, but Victor cares for him at first',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'pride-and-prejudice',
    about: 'money and marriage',
    prompt:
      'A critic argues that Pride and Prejudice is really about money, not love. Which response weighs this claim best?',
    options: [
      'Partly: money shapes every match, but Elizabeth resists it',
      'Fully: Elizabeth marries Darcy only for his fortune',
      'Not at all: money is never mentioned in the novel',
      'Partly: love matters, but only Lydia and Wickham marry for it',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'great-expectations',
    about: 'Magwitch',
    prompt:
      "A critic argues that in Great Expectations Magwitch, not Miss Havisham, is the true shaper of Pip's life. Which response weighs this claim best?",
    options: [
      'Largely: his money makes Pip, but she shapes his heart',
      'Not at all: Magwitch never gives Pip anything at all',
      "Fully: Miss Havisham plays no part in Pip's story",
      'Partly: he shapes Pip, but only once Pip is poor again',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'jane-eyre',
    about: 'the ending',
    prompt:
      'A critic argues that the ending of Jane Eyre, in which Jane marries a blinded Rochester, makes her his carer rather than his equal. Which response weighs this claim best?',
    options: [
      'Not really: she comes back rich and free, and chooses him',
      'Fully: Jane is made to marry him by her cousins',
      'Fully: Jane gives up her whole fortune in order to marry him',
      'Not really: Rochester is the one who nurses Jane',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'animal-farm',
    about: "the animals' blame",
    prompt:
      'A critic argues that in Animal Farm the animals are as much to blame for their fate as the pigs. Which response weighs this claim best?',
    options: [
      'Partly: their silence helps, but the pigs deceive them',
      'Fully: the animals choose to be ruled by the pigs',
      'Not at all: the animals question every new order',
      'Partly: they are fooled, but only Boxer trusts the pigs',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'lord-of-the-flies',
    about: 'where evil comes from',
    prompt:
      'A critic argues that Lord of the Flies shows evil is learned from adult society, not born in us. Which response weighs this claim best?',
    options: [
      'Partly: adults are at war, but the evil grows in the boys',
      'Fully: the boys copy the cruelty they were taught at school',
      'Not at all: there are no adults anywhere in the story',
      'Fully, since the boys behave well until adults arrive',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'julius-caesar',
    about: 'Brutus as tragic hero',
    prompt:
      'A critic argues that Brutus, not Caesar, is the true tragic hero of Julius Caesar. Which response weighs this claim best?',
    options: [
      'Strong: his noble motives lead him to ruin, as in tragedy',
      'Weak: Brutus kills Caesar purely for his own gain',
      "Weak: Brutus plays no part in Caesar's murder",
      'Partly: he is noble, but he goes on to win the war at Philippi',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'the-tempest',
    about: "Prospero's power",
    prompt:
      'A critic argues that in The Tempest Prospero is a tyrant, not a wise ruler. Which response weighs this claim best?',
    options: [
      'Partly: he enslaves Caliban, yet chooses mercy at the end',
      'Fully: he takes revenge on every one of his enemies',
      'Not at all: he treats both Ariel and Caliban as his true equals',
      'Fully: he refuses to free Ariel even at the very end',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'much-ado-about-nothing',
    quote: 'There is a kind of merry war betwixt Signior Benedick and her',
    prompt:
      'A critic argues that in Much Ado About Nothing the trick on Beatrice and Benedick only reveals a love they already felt. Which response weighs this claim best?',
    options: [
      'Persuasive: their sparring shows strong feeling from the start',
      'Unconvincing: they have never met before the play',
      'Unconvincing: the trick makes them hate each other',
      'Persuasive, because they confess their love to each other at once',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'othello',
    about: "Iago and Othello's fall",
    prompt:
      'A critic argues that Othello falls because of Iago alone, not because of any flaw of his own. Which response weighs this claim best?',
    options: [
      'Partly: Iago plots, but Othello believes him far too easily',
      "Fully: Iago's lies would fool any husband, however wise he was",
      'Not at all: Iago is loyal and tries to protect Othello',
      'Not at all: Othello sees through Iago from the start',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'the-merchant-of-venice',
    quote: 'Hath not a Jew eyes?',
    prompt:
      'In The Merchant of Venice, Shylock asks "Hath not a Jew eyes?" after years of Christian insults, yet in court he insists on his pound of flesh. Which judgement does this evidence best support?',
    options: [
      'He is both wronged and vengeful, which makes him complex',
      'He is a simple villain whom the play asks us to hate',
      'He is wholly innocent, and his bond is only a joke',
      'The Christians treat him with kindness and fairness throughout',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'macbeth',
    quote: 'Thou hast it now: King, Cawdor, Glamis, all',
    prompt:
      'In Macbeth, Banquo says of the new king: "Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promis\'d". Which is the strongest sentence of analysis about this line?',
    options: [
      'Listed backwards, the titles retrace the road to murder',
      'Banquo lists three titles, which is called a list of three',
      'Banquo is glad that his friend has now become the king',
      'This shows that Banquo knows the titles Macbeth now has',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'a-christmas-carol',
    quote: 'Mankind was my business. The common welfare was my business',
    prompt:
      'In A Christmas Carol, Marley\'s Ghost cries: "Mankind was my business. The common welfare was my business". Which is the strongest sentence of analysis about this line?',
    options: [
      "Marley turns 'business' from money-making into care for all",
      'Marley explains that he once ran a large business with Scrooge',
      "Dickens repeats the word 'business' twice in this line",
      'This shows that the Ghost of Marley is angry and upset',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'romeo-and-juliet',
    quote: 'My only love sprung from my only hate',
    prompt:
      'In Romeo and Juliet, learning who Romeo is, Juliet says: "My only love sprung from my only hate". Which is the strongest sentence of analysis about this line?',
    options: [
      'Antithesis puts her love inside the hate that will destroy it',
      'Juliet says she loves Romeo and hates him at the same time',
      "The line repeats the word 'only' twice, which is called repetition",
      'Shakespeare shows that Juliet has fallen in love with Romeo',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'I learned to recognise the thorough and primitive duality of man',
    about: "Jekyll's statement on duality",
    source:
      'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), "Henry Jekyll\'s Full Statement of the Case"',
    from: 'jekyll-and-hyde',
    prompt:
      'A doctor writes in his final statement: "I learned to recognise the thorough and primitive duality of man". Which is the strongest sentence of analysis?',
    options: [
      "'Primitive' places the split in human nature from the start",
      'The doctor has two names, which is why he talks of duality',
      'The writer uses long words to make the doctor sound very clever',
      'The doctor blames a potion for making him two people',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.',
    source: 'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter 2',
    from: 'the-great-gatsby',
    prompt:
      'A narrator at a party in a city flat says: "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life." Which is the strongest sentence of analysis?',
    options: [
      'The paradox makes him both a guest and a judge of the party',
      'The narrator is inside the flat and then goes outside it',
      "The narrator uses grand words like 'inexhaustible' to impress us",
      'This shows that the narrator is enjoying the party a lot',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: "and the hand may be a little child's",
    source: 'George Eliot, Silas Marner (1861), Chapter 14',
    from: 'silas-marner',
    prompt:
      'A novel says of a lonely miser, changed by an orphan who wanders into his home: "a hand is put into theirs, which leads them forth gently towards a calm and bright land, so that they look no more backward; and the hand may be a little child\'s." Which is the strongest sentence of analysis?',
    options: [
      'Holding back whose hand it is makes a child the surprise saviour',
      'The writer describes a hand that belongs to a small child',
      'The child holds his hand because she is afraid of the dark night',
      'The sentence is very long, which makes it hard to follow',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'On the breast of her gown, in fine red cloth, surrounded with an elaborate embroidery and fantastic flourishes of gold thread, appeared the letter A.',
    source: 'Nathaniel Hawthorne, The Scarlet Letter (1850), Chapter 2',
    from: 'the-scarlet-letter',
    prompt:
      'A woman whose town has sentenced her to wear a mark of shame steps out of prison: "On the breast of her gown, in fine red cloth, surrounded with an elaborate embroidery and fantastic flourishes of gold thread, appeared the letter A." Which is the strongest sentence of analysis?',
    options: [
      "Her fine needlework turns the town's punishment into defiance",
      'The letter A is described in a great deal of detail here',
      'The gold thread shows that she is rich and greatly enjoys fashion',
      'The colour red is used, which is often the colour of love',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'A monstrous tripod, higher than many houses, striding over the young pine trees, and smashing them aside in its career',
    source: 'H. G. Wells, The War of the Worlds (1898), Book 1, Chapter 10',
    from: 'the-war-of-the-worlds',
    prompt:
      'A narrator, caught in a storm, sees an invader\'s machine: "A monstrous tripod, higher than many houses, striding over the young pine trees, and smashing them aside in its career". Which is the strongest sentence of analysis?',
    options: [
      'Set against houses and trees, the familiar world shrinks',
      'The machine is described as a tripod, which has three legs',
      'The writer uses the word monstrous to show it is very big',
      'The houses and pine trees simply set the scene for the reader',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Better by far you should forget and smile / Than that you should remember and be sad',
    source: 'Christina Rossetti, "Remember" (1862)',
    from: 'remember',
    prompt:
      'A speaker, picturing the time after her death, ends her poem: "Better by far you should forget and smile / Than that you should remember and be sad." Which is the strongest sentence of analysis?',
    options: [
      'The turn sets his happiness above her own wish to live on',
      'The speaker wants to be forgotten because she is angry',
      'The lines rhyme, which makes the poem sound like a song',
      'The words smile and sad are opposites, which is called contrast',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Love is not love / Which alters when it alteration finds',
    source: 'William Shakespeare, Sonnet 116 (1609)',
    from: 'sonnet-116',
    prompt:
      'A sonnet declares: "Love is not love / Which alters when it alteration finds". Which is the strongest sentence of analysis?',
    options: [
      "Echoing 'love' and 'alters' makes true love refuse to change",
      'The poet says that love is not real, and that it does not exist',
      'The poet uses the word love twice, which is repetition',
      'The lines show that love changes as people grow older',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'the heart of me weeps to belong / To the old Sunday evenings at home',
    source: 'D. H. Lawrence, "Piano" (1918)',
    from: 'piano',
    prompt:
      'A grown man hears a woman singing softly and remembers childhood: "the heart of me weeps to belong / To the old Sunday evenings at home". Which is the strongest sentence of analysis?',
    options: [
      "'The heart of me' makes the longing rise against his will",
      'The speaker is sad because he does not like Sunday evenings',
      "The poet uses the word 'heart', which is about emotions",
      'The speaker wants to go home because it is winter outside',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts',
    source: 'Charles Dickens, Great Expectations (1861), Chapter 19',
    from: 'great-expectations',
    prompt:
      'A young man leaving home for London says: "Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts." Which is the strongest sentence of analysis?',
    options: [
      'The rain image makes crying a cleansing, not a weakness',
      'The speaker is crying only because the weather is bad that day',
      'The writer uses a metaphor to compare tears to the rain',
      'The speaker feels ashamed of crying and tries to stop it',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Make me a willow cabin at your gate, / And call upon my soul within the house',
    source: 'William Shakespeare, Twelfth Night, Act 1, Scene 5',
    from: 'twelfth-night',
    prompt:
      'A young woman disguised as a man, wooing a countess for her master, says she would: "Make me a willow cabin at your gate, / And call upon my soul within the house". Which is the strongest sentence of analysis?',
    options: [
      'The willow, a sign of lost love, hints at her own hidden pain',
      'The speaker really wants to build a small house out of willow wood',
      "The speaker uses the verb 'Make', which gives a command",
      'The speaker is mocking the countess she is talking to',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'a-passage-to-africa',
    quote: 'The journalist observes, the subject is observed.',
    prompt:
      'In A Passage to Africa, George Alagiah sets out the unspoken rule of his work: "The journalist observes, the subject is observed." Which sentence analyses this line best?',
    options: [
      'Alagiah sets "observes" against "is observed" in an antithesis, with a comma placed exactly in the middle of the line.',
      'Turning "observes" into the passive "is observed" makes the grammar enact who holds power, which the smile then reverses.',
      'Alagiah explains that a journalist observes people, such as the starving in Somalia, who are the subjects of his reports.',
      "The line shows Alagiah's pride in his job: he observes from a safe distance, which makes him a hero of compassion for the poor.",
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'the-danger-of-a-single-story',
    quote: 'I too am just as guilty',
    prompt:
      "A critic argues that Adichie's talk, The Danger of a Single Story, persuades by accusing outsiders of ignorance about Africa. Which response weighs this claim best?",
    options: [
      'Fully: anger at the roommate fills the whole talk, and Adichie never once admits to any fault of her own',
      'Partly: she exposes the roommate\'s assumptions, but "I too am just as guilty" puts herself in the dock',
      'Not at all: the talk never shows an outsider misunderstanding Africa, only her own reading',
      'Fully: she closes by demanding that her listeners feel ashamed of every story they have read',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'disabled',
    quote: 'Smiling they wrote his lie',
    prompt:
      'In "Disabled" by Wilfred Owen, the soldier remembers that "He asked to join", and the next line begins "Smiling they wrote his lie". Which judgement does this evidence best support?',
    options: [
      'Owen blames only the boy, who lied about his age to recruiters who never suspected',
      'Owen shares the blame: the boy volunteered, and the recruiters were complicit',
      'Owen blames only the recruiters, who forced an unwilling boy into the army',
      'Owen shows the boy was called up by law and had no say in the matter at all',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'the-necklace',
    quote: 'But it was only an imitation necklace.',
    prompt:
      'A critic claims that the revelation at the end of The Necklace, that it was "only an imitation necklace", is a cheap trick the story never prepares for. Which response weighs this claim best?',
    options: [
      'Convincing: nothing earlier hints that the jewels might be false, so the ending is a shock for its own sake',
      'Unconvincing: the jeweller supplied only the case, a clue in plain sight, so the twist is earned',
      'Convincing: the narrator then explains at length how Madame Forestier deceived her old school friend',
      'Unconvincing: Mathilde guesses the truth at the ball itself, so the reader knows long before the end',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'to-kill-a-mockingbird',
    quote: "sort of like shootin' a mockingbird",
    prompt:
      'In To Kill a Mockingbird, Mr Underwood\'s editorial on Tom\'s death condemns "the senseless slaughter of songbirds by hunters and children" (Chapter 25), and Scout says that dragging Boo into public view would be "sort of like shootin\' a mockingbird" (Chapter 30). Which judgement does this evidence best support?',
    options: [
      'Lee shows that Maycomb has learned the mockingbird rule, since by the end it protects both men',
      'Lee keeps the mockingbird a lesson about air rifles, and never fixes it to any person in the whole novel',
      "Lee ties the symbol to two men: Tom's killing is the sin committed, Boo's protection the sin avoided",
      'Lee blames the town\'s children for Tom\'s death, since the editorial accuses "hunters and children"',
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'things-fall-apart',
    quote: 'He was afraid of being thought weak.',
    prompt:
      'In Things Fall Apart, after the killing of Ikemefuna, the narrator explains Okonkwo\'s part in it in a single sentence: "He was afraid of being thought weak." Which sentence analyses this line best?',
    options: [
      'Achebe writes a short, plain sentence of seven words, being careful to place the adjective "weak" right at its very end.',
      'The passive "being thought" shows Okonkwo dreading other men\'s judgement more than the act, so the tragedy begins in him.',
      'This tells us that Okonkwo killed Ikemefuna in the forest because he did not want any of the other men to think he was weak.',
      'Achebe shows that Okonkwo is a coward at heart, a man who runs from danger without a single thought for those left to fight.',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'antony-and-cleopatra',
    quote: 'The breaking of so great a thing should make / A greater crack.',
    prompt:
      "A critic argues that in Antony and Cleopatra Antony is great only in Cleopatra's words, never in what the rest of the play shows. Which response weighs this claim best?",
    options: [
      'Fully: Antony loses every great battle he fights, and no one but Cleopatra ever speaks well of him',
      'Not at all: Cleopatra never praises Antony once he is dead, and leaves his memory to the Romans',
      'Partly: her dream enlarges him, but Caesar too says that his fall "should make / A greater crack"',
      'Fully: even Enobarbus mocks him to the end and dies cursing the general who drove him to desert',
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'a-midsummer-nights-dream',
    quote: 'The lunatic, the lover, and the poet',
    prompt:
      'A critic argues that in A Midsummer Night\'s Dream Theseus speaks for Shakespeare when he groups "The lunatic, the lover, and the poet" as people who see what is not there. Which response weighs this claim best?',
    options: [
      'Convincing: the play reveals in the end that the fairies were only a dream that the lovers shared',
      'Unconvincing: Theseus admits in the same speech that he once saw the fairies himself, in the wood',
      'Convincing: Hippolyta agrees at once that the lovers\' story is "More strange than true"',
      'Unconvincing: the audience has seen the fairies, and his words describe what the play has done',
    ],
    correctIndex: 3,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'princess-and-the-hustler',
    quote: 'Hustle nuh win anything far mi',
    prompt:
      'In Princess & The Hustler, Mavis asks Margot "If a whole city can try to change, why not one simple man?" (Act 2, Scene 4), and later Wendell tells Mavis "Hustle nuh win anything far mi" (Act 3, Scene 4). Which judgement does this evidence best support?',
    options: [
      'Odimba shows that Wendell has not changed at all, and that Mavis is fooled again by his charm',
      "Odimba keeps the family's story apart from the boycott, which the characters never discuss",
      "Odimba makes Wendell's change mirror Bristol's, while leaving it a hope still to be proved",
      'Odimba shows Bristol refusing to change, so Wendell must leave the city to make a fresh start',
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'what-it-means-when-a-man-falls-from-the-sky',
    quote: 'when the time came, I ran',
    prompt:
      "In What it Means When a Man Falls from the Sky, in 'War Stories', Nwando's father, a Biafran veteran, ends his last war story with \"when the time came, I ran\". Which sentence analyses this line best?",
    options: [
      'Azike tells his daughter that when his lieutenant and his comrades died in the war, he ran away and so survived.',
      "The line shows Azike's pride in his own quick thinking, a soldier's cunning that he hopes to pass on to Nwando.",
      'After tales that each carried a lesson, six plain words admit the least heroic truth, and it still haunts him.',
      'Arimah writes this line in the first person and in the past tense, using six short words and a single comma.',
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'of-mice-and-men',
    quote: "You can talk to people, but I can't talk to nobody but Curley.",
    prompt:
      'In Of Mice and Men, Curley\'s wife first appears when "the rectangle of sunshine in the doorway was cut off". In Chapter 5 she tells Lennie: "You can talk to people, but I can\'t talk to nobody but Curley." Which judgement does this evidence best support?',
    options: [
      'Steinbeck shows her first as the men see her, as trouble, and then as she sees herself',
      'Steinbeck presents her as a danger from first to last, darkening every room that she enters',
      'Steinbeck shows that the men all welcome her company and talk to her whenever they can',
      'Steinbeck blames Curley alone for her death, since he forbids her to leave the house',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'a-view-from-the-bridge',
    quote: "Katie, he's only bowin' to his passport.",
    prompt:
      'In A View from the Bridge, Eddie tells Catherine, out in the street, "Katie, he\'s only bowin\' to his passport." Which sentence analyses this line best?',
    options: [
      'Eddie tells Catherine out in the street that Rodolpho only wants to marry her so that he can get his papers and stay in America.',
      'Miller gives Eddie the dropped ending of "bowin\'" and the pet name "Katie", which are both features of Brooklyn speech in the play.',
      '"Bowin\'" turns Rodolpho\'s courtesy into calculation, as Miller shows Eddie making immigration law a weapon in words before deeds.',
      "The line shows Eddie's admiration for Rodolpho's good manners, since a bow is the respect he wants every man to show Catherine.",
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'the-tyger',
    quote: 'Dare frame thy fearful symmetry?',
    prompt:
      'In The Tyger, Blake\'s last stanza repeats his first, except that "Could frame" in line 4 becomes "Dare frame thy fearful symmetry?" in the final line. Which sentence analyses this change best?',
    options: [
      'In the final stanza the speaker asks again who could have made the tiger, so the poem ends with the same question it began with.',
      'Swapping "Could" for "Dare" turns ability into nerve, so the poem ends not with an answer but with deeper dread of the maker.',
      'The last stanza repeats the first, using a rhetorical question and a circular structure, techniques found throughout Songs of Experience.',
      'The word "Dare" shows the speaker daring the tiger to fight the immortal hand that made it, so the poem ends on a challenge.',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'if',
    quote: 'And never breathe a word about your loss',
    prompt:
      'A critic argues that Kipling\'s "If" teaches the son to feel nothing at all. Which response weighs this claim best?',
    options: [
      'Fully: every line forbids emotion, and the son must treat all people with the same cold indifference',
      'Partly: most verbs master feeling, but "never breathe a word about your loss" asks for silence',
      'Not at all: the poem urges the son to share every loss openly, as the true mark of being a Man',
      'Fully: the son may not even dream, because the poem forbids dreams and thoughts as dangerous',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'half-caste',
    quote: 'half-caste till dem overcast',
    prompt:
      "A critic argues that the jokes in Agard's Half-caste soften its challenge to the label. Which response weighs this claim best?",
    options: [
      'Convincing: the jokes keep the listener comfortable, and the poem never lets any anger show',
      'Unconvincing: jokes like "half-caste till dem overcast" are the attack, mocking the label',
      'Convincing: the poem ends by apologising to the listener, as its opening "Excuse me" promised',
      'Unconvincing: the poem never jokes, and calls the label half-caste only in solemn Standard English',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'western-lane',
    quote: 'The effort to speak made him wince',
    prompt:
      'In Western Lane, Pa tells his daughters "I want you to become interested in something you can do your whole life", and later Gopi sees that "The effort to speak made him wince". Which judgement does this evidence best support?',
    options: [
      'Pa cares more about winning squash matches than about how his daughters are grieving',
      'Pa turns his love into a training plan because talking about the loss is beyond him',
      "Pa is only following Aunt Ranjan's orders and has no feelings of his own about it",
      "Pa is too ill to work, so he needs his daughters to earn the family's money at squash",
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'blood-brothers',
    quote: 'And do we blame superstition for what came to pass?',
    prompt:
      'In Blood Brothers, with the twins dead on stage, the Narrator asks the audience "And do we blame superstition for what came to pass?" Which sentence analyses this line best?',
    options: [
      'With the twins dead on stage, the Narrator asks the audience whether superstition was to blame for what happened to them.',
      'Russell gives the Narrator a rhetorical question, direct address and a rhyme, which are three common features of musicals.',
      "The pronoun 'we' puts the audience in the society on trial, so Russell turns the blame away from fate and towards class.",
      'The question shows that Russell wants us to believe in the curse, since the twins die exactly as Mrs Lyons had foretold.',
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'dna',
    quote: "the man who kidnapped Adam doesn't actually exist, does he.",
    prompt:
      'A critic argues that Leah is simply the good one in "DNA" by Dennis Kelly. Which response weighs this claim best?',
    options: [
      'Fully: she refuses the cover-up from the very start, and she goes to the police to free the postman',
      'Partly: she says the invented man "doesn\'t actually exist", yet she tells no one outside the group',
      "Not at all: it is Leah who tracks down a real postman and gets his DNA on to Adam's jumper",
      'Fully: she is the only character who feels any guilt, while Brian never shows any remorse at all',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    text: 'never-let-me-go',
    quote: 'You were lucky pawns.',
    prompt:
      'In Never Let Me Go, Miss Emily tells Kathy and Tommy: "You were lucky pawns." Which sentence analyses this line best?',
    options: [
      'Miss Emily admits to Kathy and Tommy that the students were pawns in a game, though she says they were lucky ones.',
      'Ishiguro uses a metaphor taken from chess and a short, simple sentence, which are both typical features of his style.',
      "'Lucky' tries to console, yet a lucky pawn is still sacrificed: Ishiguro lets Miss Emily condemn herself in her own words.",
      'The line shows that Miss Emily now regrets Hailsham completely, and admits that it treated students as badly as anywhere else.',
    ],
    correctIndex: 2,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'leave-taking',
    quote: 'Nobody see you, nobody hear you',
    prompt:
      'A critic argues that Enid, in Leave Taking, cannot see the racism her daughters face. Which response weighs this claim best?',
    options: [
      'Fully: she defends England to the very end of the play, and never once admits to any hardship there',
      'Partly: Del says she does not see it, but "Nobody see you, nobody hear you" shows she has lived it',
      'Not at all: it is Enid who says, in Scene Two, that the police vans are "hunting us down"',
      "Not at all: she reads her daughter's palm in Scene Eight, and sees all of Del's future there",
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'the-history-boys',
    quote: 'Think charm. Think polish. Think Renaissance Man.',
    prompt:
      'In The History Boys, the Headmaster urges Mrs Lintott, "Think charm. Think polish. Think Renaissance Man.", and Irwin later tells the boys, "Think bored examiners." Which judgement does this evidence best support?',
    options: [
      "Irwin teaches the boys to see through the Headmaster's slogans and to love learning for itself",
      'Irwin, however he scorns the Headmaster, serves the same idea of education as presentation',
      "Both men share Hector's belief that examinations, even for Oxbridge, are the enemy of education",
      'The Headmaster copies his slogans from Irwin, the young teacher he has hired for Oxbridge',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'critic',
    text: 'the-sign-of-four',
    quote: 'there still remains the cocaine-bottle',
    prompt:
      "A critic argues that The Sign of Four admires Holmes's cold reason without any doubt at all. Which response weighs this claim best?",
    options: [
      'Fully: Watson praises the method from first to last, and Holmes ends the novel content and at rest',
      'Partly: reason solves the case, but Watson calls him "an automaton", and he ends with his drug',
      'Not at all: Holmes gives up reason for feeling at the end, and he is the one who marries Mary',
      "Not at all: Athelney Jones's stern facts solve the case, and Holmes is shown to have been wrong",
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'judgement',
    text: 'silas-marner',
    quote: 'God gave her to me because you turned your back upon her',
    prompt:
      'In Silas Marner, Chapter 1 records the verdict at Lantern Yard: "The lots declared that Silas Marner was guilty." In Chapter 19 Silas tells Godfrey: "God gave her to me because you turned your back upon her". Which judgement does this evidence best support?',
    options: [
      'Silas has lost his faith for good, and now trusts only in what he can earn and count',
      "Silas's faith returns changed: he finds God's will in what people do, not in drawing lots",
      'Silas still trusts the lots, and draws them again to decide whether Eppie should stay',
      'Eliot shows that Silas was wrong to curse God at Lantern Yard, since the lots told the truth',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Blow, winds, and crack your cheeks',
    source: 'William Shakespeare, King Lear, Act 3, Scene 2',
    from: 'king-lear',
    prompt:
      'Raging at a storm, an old king commands it: "Blow, winds, and crack your cheeks" and "You cataracts and hurricanoes, spout / Till you have drench\'d our steeples". Which is the strongest sentence of analysis?',
    options: [
      'Ordering the storm about, he shows a power he has lost',
      'The king is describing the bad weather around him',
      "The speaker uses imperatives such as 'Blow' and 'spout'",
      'The king wants the storm to stop so he can find shelter',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote: 'Beware; for I am fearless, and therefore powerful.',
    source: 'Mary Shelley, Frankenstein (1818), Chapter 20',
    from: 'frankenstein',
    prompt:
      'A creature, rejected by his maker, warns him: "Beware; for I am fearless, and therefore powerful." Which is the strongest sentence of analysis?',
    options: [
      "'Therefore' turns despair into a cold, logical threat",
      'The creature warns him because he wants to be his friend',
      'The semicolon separates the warning from its reason',
      'The creature is boasting that he is strong and brave',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be',
    source: 'Charles Dickens, Great Expectations (1861), Chapter 59',
    from: 'great-expectations',
    prompt:
      'At the end of a novel, a once-cold woman tells the man who loved her that "suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be". Which is the strongest sentence of analysis?',
    options: [
      'Calling suffering a teacher makes her pain an education',
      'She is saying that she went to school and had many teachers',
      "The word 'suffering' shows that she has been very sad",
      'She is telling him she still does not understand him',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?',
    source: 'Charlotte Brontë, Jane Eyre (1847), Chapter 23',
    from: 'jane-eyre',
    prompt:
      'A governess, believing her employer will marry another woman, demands: "Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?" Which is the strongest sentence of analysis?',
    options: [
      'Listing how society judges her, she claims an equal soul',
      'The governess is saying that she is poor and small',
      'The question is rhetorical, which makes the reader stop and think',
      'She agrees that being poor has made her heartless',
    ],
    correctIndex: 0,
  },
  {
    grade: 9,
    type: 'analysis',
    kind: 'sentence',
    quote:
      'The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings',
    source: 'William Shakespeare, Julius Caesar, Act 1, Scene 2',
    from: 'julius-caesar',
    prompt:
      'Trying to win a friend to a plot against a ruler, a nobleman says: "The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings." Which is the strongest sentence of analysis?',
    options: [
      "Blaming 'ourselves', not the stars, makes action seem a duty",
      'The nobleman says that the stars are to blame for their low rank',
      'The speaker uses the name Brutus, so we know who he means',
      'This shows that the nobleman is unhappy with his position',
    ],
    correctIndex: 0,
  },
]

export const QUESTION_BANK: GradeQuestion[] = AUTHORED.map((q) => ({
  ...q,
  tier: tierOfRung(q.grade),
}))

export const BANK: GameBank<GradeQuestion> = {
  slug: 'grade-climber',
  items: QUESTION_BANK,
  // No two prompts are the same, and the prompt is what the student sees.
  key: (q) => q.prompt,
  answer: (q) => q.options[q.correctIndex],
  options: (q) => q.options,
  tag: (q) => q.type,
  tier: (q) => q.tier,
  // The set text and the quotation (or scene) a question is on, so that two
  // questions on one quotation are never dealt in one session.
  facts: (q) =>
    [q.quote, q.about]
      .filter((x): x is string => !!x)
      .map((x) => `${q.text ?? q.from ?? 'unseen'}: ${x}`),
  // `tag` is the question's type, not what it tests: the text, else the device.
  group: (q) =>
    q.text ??
    q.from ??
    q.about ??
    (q.type === 'technique' ? q.options[q.correctIndex] : (q.kind ?? q.type)),
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
