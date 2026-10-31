import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Vocabulary Builder: words a GCSE English answer uses, asked four ways, each
 * with four options. A word answered wrongly comes back at the end of the
 * round.
 *
 * Moved out of src/app/games/vocabulary-builder/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Two
 * distractors were defensible definitions of their own word, so a student who
 * knew the word well could be marked wrong for it:
 *
 *   - Anachronism offered "An old-fashioned word that has fallen out of use".
 *     That is an archaism, but dictionaries also define an anachronism as a
 *     thing that is old-fashioned or out of date. It is now "A newly invented
 *     word that is not yet in common use", a neologism.
 *   - Sanguine offered "Relating to blood or the circulatory system". Sanguine
 *     comes from the Latin for blood, and dictionaries still give "blood-red"
 *     among its meanings. It is now "Deeply jealous of the success of other
 *     people". (The old one was also shorter than the page's own length guard
 *     allows; the new one is within it.)
 *
 * REBUILT FOR DEPTH ON 24 OCTOBER 2026. The bank was 52 words, each asked
 * only for its meaning. The right meaning was the longest option in 38 of
 * them (73 per cent) and 19 failed the page's own length guard
 * (assertBalancedOptions: every wrong option within a quarter of the
 * answer's length), so picking the longest option scored well without
 * knowing the word. It is now 364 questions, every one within the guard, the
 * answer the unique longest option in 20 per cent and the unique shortest in
 * 22 per cent:
 *
 *   tier 1, meaning       152: the 52 words and 100 more: terms for methods,
 *                         structure, form, drama and argument, tone words,
 *                         analysis verbs, and words for character and context;
 *   tier 2, in-context     99: a set-text word in its own sentence, copied
 *                         exactly from a public-domain text held in
 *                         src/data/full-texts/ or quoted in a study guide,
 *                         with the source shown;
 *   tier 3, precise-word   75: a sentence of analysis with a gap, and the
 *                         verb or adjective that says most among near
 *                         neighbours (55 of them built round a real line);
 *   paired-terms           38: a gap that one of two terms students confuse
 *                         fits (simile and metaphor, analepsis and
 *                         prolepsis), with the partner among the options:
 *                         17 at tier 3, a real line whose method is named
 *                         with its effect, and 21 at tier 2, a described
 *                         case to name (moved there by the check below).
 *
 * Every quotation was checked word for word against the held edition, and no
 * text still in copyright is quoted. No meaning contains the word it defines.
 * `facts` is the word, with `also` for a partner term, a word of the same
 * family, or a word another question's explanation teaches, so a round never
 * asks one word twice or answers one question in another.
 *
 * WHAT CHANGED IN THE 52 WORDS. Keys are unchanged and nothing was removed.
 * Catharsis, Colloquial, Rhetoric, Denouement and Denounce stand as they
 * were. The other 47:
 *
 *   - Failed the length guard, so the wrong options were rewritten to the
 *     answer's length as near neighbours: Ambiguity, Hubris, Evocative,
 *     Visceral, Exposition, Euphemism, Polysyllabic, Avarice, Austere,
 *     Benevolent, Insidious, Microcosm, Subversive, Didacticism, Magnanimous,
 *     Melancholic, Pragmatic, Sanguine, Pedantic. Six meanings were also
 *     tightened (Ambiguity, Visceral, Insidious, Microcosm, Didacticism,
 *     Sanguine); Visceral now says the feeling is in the body, which is
 *     where the word comes from.
 *   - The answer was the longest option, or the wrong options were not near
 *     neighbours of the word and could be ruled out without knowing it
 *     ("Extremely heavy and difficult to lift" for Ephemeral, a rhyme scheme
 *     for Verisimilitude): Juxtaposition, Ominous, Didactic, Pathos,
 *     Connotation, Denotation, Allegory, Soliloquy, Duality, Motif, Polemical,
 *     Pejorative, Hyperbolic, Verisimilitude, Hamartia, Imperious,
 *     Sycophantic, Utilitarian, Ephemeral, Sardonic, Antithesis. They now
 *     offer what students confuse with the word: aside and monologue for
 *     soliloquy, ethos for pathos, theme for motif, imperial and impervious
 *     for imperious, ethereal for ephemeral, paradox for antithesis.
 *   - A wrong option lengthened by a word or two, so that where the answer
 *     sits by length gives nothing away: Anachronism, Semantic, Syntax,
 *     Analepsis, Prolepsis, Foreboding, Reticent.
 *   - Connotation said a word "invokes" an idea; to invoke is to call on.
 *     It now says "suggests".
 *
 * CHECKED BY A SECOND READER, 24 OCTOBER 2026, as the founder decided
 * (src/lib/games/explanations/types.ts). Every question and explanation was
 * read against its options, and every quoted line against the held edition,
 * punctuation and capitals included (all 176 in the sentences are exact).
 * Tiers are now 152 / 120 / 92. What was wrong, and what changed:
 *
 *   - Register offered "The range of notes a speaker's voice can reach",
 *     which register also means, of a singing voice. It is now tone, "The
 *     attitude a writer shows towards the subject".
 *   - Complacent offered "Willing to agree in order to please others", a
 *     sense Merriam-Webster still gives (the sense of complaisant). It is
 *     now complicit.
 *   - Archetype offered "The original handwritten draft of a story before it
 *     is printed", close to the dictionary sense of an original that later
 *     copies follow. It is now an anti-hero.
 *   - In context, soft ("But soft, what light"): "Gently; tenderly" was too
 *     near glossaries that give "gently, wait a moment". It is now "Faint;
 *     muted", the misreading that soft describes the light.
 *   - In context, common ("a common labouring-boy"): "Ordinary and often
 *     found" could be argued, since a common boy is an ordinary one. It is
 *     now "Widespread and frequent".
 *   - In context, mean ("a woman of mean understanding"): "Average or
 *     middle" is an old sense of mean, and a middling understanding is near
 *     the answer. It is now "Clever or skilled", the informal sense.
 *   - In context, incarnadine: "Fill it with salt" was a misreading nobody
 *     makes. It is now "Stir into storms".
 *   - In context, brave: the sentence said Miranda was seeing other people
 *     for the first time, but she has met Ferdinand and Caliban. It now says
 *     she sees the King of Naples and his lords.
 *   - Tier: the 21 paired-terms questions with no real line (protagonist,
 *     theme, logos, first-person and the rest) ask which of two near
 *     neighbours names a described case, which is tier 2, not the exam
 *     skill. They are now tier 2, which leaves 92 of 364 at tier 3, just
 *     over the quarter a rebuilt bank must hold.
 *
 * In the explanations: absolute (The Sign of Four) printed the everyday
 * saying about exceptions in quotation marks beside Holmes's "An exception
 * disproves the rule", and src/__tests__/every-quotation-is-the-held-text.test.ts
 * took it for a misquotation of Holmes; it is now said without them. Blank
 * verse said the second line of Macbeth's dagger speech is short, but the
 * line runs on; it now points to the first line's eleventh syllable.
 * Dismissive said the Martians land within days of Ogilvy's remark, which
 * the novel never says. Hubris called the pride the cause of the fall "not
 * what brings it about". Conveys gave the Latin as "to carry along a road".
 * The tip for vilifies said Birling vilifies Eva, which overstates him; it
 * now uses Napoleon and Snowball. Constant (Sonnet 116) dropped the comma
 * after "ever-fixed mark". Every changed wrong option has a new "why not".
 */

/**
 * The four kinds of question. The page asks each its own way and hides the
 * word where the word is the answer.
 *
 *   meaning       tier 1: the word, and its meaning;
 *   in-context    tier 2: the word in a sentence, and what it means there;
 *   precise-word  tier 3: a sentence of analysis with a gap, and the word
 *                 that fits it exactly;
 *   paired-terms  tier 3 round a real line, else tier 2: a gap that one of
 *                 two terms students confuse fits, with the other among the
 *                 options.
 */
export type VocabKind = 'meaning' | 'in-context' | 'precise-word' | 'paired-terms'

export interface VocabWord {
  /** The word the question tests. For a gap, the word that fills it. */
  word: string
  /** The right answer as the student sees it: a meaning, or the word for a gap. */
  definition: string
  distractors: string[]
  /** 1 recall, 2 meaning in context, 3 the exam skill (GameBank.tier). */
  tier: 1 | 2 | 3
  /** Absent for the first kind, the meaning of a word. */
  kind?: VocabKind
  /** The sentence shown above the options: the word in use, or a gap ("___"). */
  sentence?: string
  /** Where a quoted sentence comes from: a held public-domain text, as printed. */
  source?: string
  /** The area of English the word belongs to, so a round is spread across them. */
  group: string
  /**
   * Other words, lower case, whose question this one would give away or be
   * given away by: a partner term, a word from the same family, a meaning
   * its explanation teaches. No two questions sharing one are dealt together.
   */
  also?: string[]
}

export const VOCAB_BANK: VocabWord[] = [
  // ─── Tier 1: what a word means ─────────────────────────────────────────────
  {
    word: 'Ambiguity',
    tier: 1,
    group: 'word choice',
    also: ['ambivalent'],
    definition: 'Being open to more than one possible interpretation',
    distractors: [
      'Having mixed or conflicting feelings about something',
      'Saying the opposite of what is really meant',
      'Leaving out words that a reader can easily supply',
    ],
  },
  {
    word: 'Juxtaposition',
    tier: 1,
    group: 'imagery',
    also: ['antithesis'],
    definition: 'Placing two things side by side for striking contrast',
    distractors: [
      'A pause in the middle of a line used for emphasis',
      'Repeating the same consonant sound at the start of words',
      'Comparing two things to show how much they are alike',
    ],
  },
  {
    word: 'Ominous',
    tier: 1,
    group: 'tone',
    definition: 'Giving the impression something bad is about to happen',
    distractors: [
      'Filled with a quiet sadness about something now lost',
      'Looking back fondly at a happier time in the past',
      'Cheerfully confident that everything will turn out well',
    ],
  },
  {
    word: 'Didactic',
    tier: 1,
    group: 'rhetoric',
    definition: 'Intended to teach or instruct, especially morally',
    distractors: [
      'Mocking people’s faults in order to criticise them',
      'Attacking an opinion forcefully to provoke debate',
      'Telling a story whose characters stand for ideas',
    ],
  },
  {
    word: 'Pathos',
    tier: 1,
    group: 'rhetoric',
    also: ['logos', 'ethos'],
    definition: 'A quality in writing that evokes pity or sadness',
    distractors: [
      'An appeal based on the speaker’s trustworthy character',
      'A carefully reasoned argument based on facts and logic',
      'A humorous moment used to ease the tension in a scene',
    ],
  },
  {
    word: 'Connotation',
    tier: 1,
    group: 'word choice',
    also: ['denotation'],
    definition: 'An idea or feeling a word suggests beyond its literal meaning',
    distractors: [
      'The dictionary definition of a word in its plainest sense',
      'The history of a word: where it came from and how it has changed',
      'A figure of speech that compares two unlike things directly',
    ],
  },
  {
    word: 'Denotation',
    tier: 1,
    group: 'word choice',
    definition: 'The literal or dictionary definition of a word',
    distractors: [
      'The emotional associations a word carries with it',
      'The history of where a word came from',
      'The level of formality a writer chooses',
    ],
  },
  {
    word: 'Allegory',
    tier: 1,
    group: 'genre',
    definition: 'A story with a hidden moral or political meaning',
    distractors: [
      'A single object that stands for a larger idea',
      'A comic imitation that mocks another writer’s style',
      'A short, true story told to illustrate a point',
    ],
  },
  {
    word: 'Soliloquy',
    tier: 1,
    group: 'drama',
    also: ['aside', 'monologue'],
    definition: 'A speech where a character speaks their thoughts aloud, alone on stage',
    distractors: [
      'A brief remark to the audience that others on stage cannot hear',
      'A long speech that one character delivers to the others listening on stage',
      'A back-and-forth conversation between two stage characters',
    ],
  },
  {
    word: 'Anachronism',
    tier: 1,
    group: 'ideas and context',
    definition: 'Something placed in the wrong historical period',
    distractors: [
      'A phrase repeated for emphasis throughout a text',
      'A newly invented word that is not yet in common use',
      'A particular type of stanza used in lyric poetry',
    ],
  },
  {
    word: 'Catharsis',
    tier: 1,
    group: 'drama',
    definition: 'The release of strong emotions through art or drama',
    distractors: [
      'The highest point of tension in a narrative arc',
      'A type of irony where outcomes contradict expectations',
      'A persuasive technique that appeals to logic',
    ],
  },
  {
    word: 'Duality',
    tier: 1,
    group: 'ideas and context',
    also: ['theme'],
    definition: 'The state of having two contrasting aspects or qualities',
    distractors: [
      'Having mixed or uncertain feelings about a person or idea',
      'A ghostly double or lookalike of a person who is still alive',
      'A character whose qualities contrast with another character’s',
    ],
  },
  {
    word: 'Hubris',
    tier: 1,
    group: 'drama',
    definition: 'Excessive pride or self-confidence, often leading to downfall',
    distractors: [
      'The punishment or rival that brings about a proud hero’s downfall',
      'A strong desire to gain power, success or high status',
      'Deep regret and guilt for a wrong one has committed',
    ],
  },
  {
    word: 'Motif',
    tier: 1,
    group: 'imagery',
    also: ['theme'],
    definition: 'A recurring element that has symbolic significance',
    distractors: [
      'The central idea or message that a text explores',
      'The most important character in a given narrative',
      'The time and place in which a story is set',
    ],
  },
  {
    word: 'Polemical',
    tier: 1,
    group: 'rhetoric',
    also: ['tone'],
    definition: 'Strongly critical or controversial in tone',
    distractors: [
      'Quietly reflective and gently introspective',
      'Humorous and light-hearted in approach',
      'Carefully balanced between both sides',
    ],
  },
  {
    word: 'Semantic',
    tier: 1,
    group: 'word choice',
    also: ['mood'],
    definition: 'Relating to meaning in language',
    distractors: [
      'Relating to the sound of language',
      'Relating to the rules of grammar',
      'Relating to the spelling of words',
    ],
  },
  {
    word: 'Pejorative',
    tier: 1,
    group: 'word choice',
    definition: 'Expressing contempt or disapproval',
    distractors: [
      'Expressing admiration or respect',
      'Completely neutral in tone',
      'Softening something harsh or unpleasant',
    ],
  },
  {
    word: 'Hyperbolic',
    tier: 1,
    group: 'rhetoric',
    definition: 'Deliberately exaggerated for emphasis',
    distractors: [
      'Understated and deliberately subtle',
      'Completely accurate and factual',
      'Comparing one thing directly to another',
    ],
  },
  {
    word: 'Evocative',
    tier: 1,
    group: 'tone',
    also: ['mood'],
    definition: 'Bringing strong images, memories, or feelings to mind',
    distractors: [
      'Extremely difficult to understand on first reading',
      'Deliberately stirring up anger, debate or a strong reaction',
      'Short and factual, giving the reader little detail',
    ],
  },
  {
    word: 'Colloquial',
    tier: 1,
    group: 'word choice',
    also: ['tone'],
    definition: 'Informal language used in everyday conversation',
    distractors: [
      'Extremely formal language used in legal writing',
      'Old English vocabulary used in early literature',
      'Technical terminology used in scientific writing',
    ],
  },
  {
    word: 'Syntax',
    tier: 1,
    group: 'word choice',
    also: ['semantic'],
    definition: 'The arrangement of words and phrases in a sentence',
    distractors: [
      'The meaning of the individual words in a sentence',
      'The sound and rhythm that words make when spoken aloud',
      'The spelling and lettering of words in a sentence',
    ],
  },
  {
    word: 'Rhetoric',
    tier: 1,
    group: 'rhetoric',
    definition: 'The art of persuasive speaking or writing',
    distractors: [
      'The systematic study of grammatical rules',
      'A type of poem with a regular rhyme scheme',
      'A dramatic monologue performed on stage',
    ],
  },
  {
    word: 'Visceral',
    tier: 1,
    group: 'tone',
    definition: 'Felt deeply in the body, as an instinctive gut reaction',
    distractors: [
      'Relating to vision and the way that things appear to the eye',
      'Intellectual and reasoned rather than emotional',
      'Abstract and vague rather than physical or concrete',
    ],
  },
  {
    word: 'Exposition',
    tier: 1,
    group: 'structure',
    also: ['denouement', 'climax'],
    definition: 'The part of a narrative that introduces background information',
    distractors: [
      'The point of greatest tension, where the conflict comes to a head',
      'The final part of a story, where loose ends are tied up',
      'A struggle between two opposing forces that drives the plot',
    ],
  },
  {
    word: 'Denouement',
    tier: 1,
    group: 'structure',
    definition: 'The final resolution or outcome of a story',
    distractors: [
      'The opening scene that introduces the setting',
      'A point of rising tension before the climax',
      'A secondary plot running alongside the main one',
    ],
  },
  {
    word: 'Euphemism',
    tier: 1,
    group: 'word choice',
    also: ['hyperbolic'],
    definition: 'A mild expression used to replace something harsh or blunt',
    distractors: [
      'A deliberate exaggeration used to make a point more forcefully',
      'A blunt word or phrase used to shock or offend the listener',
      'Saying the opposite of what you mean, usually to mock someone',
    ],
  },
  {
    word: 'Analepsis',
    tier: 1,
    group: 'structure',
    also: ['prolepsis'],
    definition: 'A flashback to an earlier point in the narrative',
    distractors: [
      'A sudden jump forward in time to show a future event',
      'A deliberate pause in the flow of the narrative',
      'A change in the perspective of the narrator',
    ],
  },
  {
    word: 'Prolepsis',
    tier: 1,
    group: 'structure',
    definition: 'A flash-forward to a future point in the narrative',
    distractors: [
      'A flashback to an event that happened in earlier times',
      'A dream sequence revealing a character’s mind',
      'A secondary plot running beside the main story',
    ],
  },
  {
    word: 'Verisimilitude',
    tier: 1,
    group: 'narrative voice',
    definition: 'The appearance of being true or real',
    distractors: [
      'The writer’s honesty about their own life',
      'A close likeness between two similar things',
      'Something that is obviously a fantasy',
    ],
  },
  {
    word: 'Hamartia',
    tier: 1,
    group: 'drama',
    also: ['tragic hero'],
    definition: 'A tragic flaw leading to the downfall of a hero',
    distractors: [
      'The audience’s release of pity and fear at the end',
      'The force of punishment that brings a hero down',
      'A sudden reversal in a hero’s fortunes',
    ],
  },
  {
    word: 'Polysyllabic',
    tier: 1,
    group: 'sound',
    definition: 'Having many syllables',
    distractors: [
      'Having only one syllable',
      'Having just two syllables',
      'Rhyming on two syllables',
    ],
  },
  {
    word: 'Imperious',
    tier: 1,
    group: 'character',
    also: ['impetuous', 'tone'],
    definition: 'Arrogant and domineering in manner',
    distractors: [
      'Relating to an empire or an emperor',
      'Unaffected and unmoved by any criticism',
      'Acting quickly without thinking first',
    ],
  },
  {
    word: 'Avarice',
    tier: 1,
    group: 'character',
    definition: 'Extreme greed for wealth or material gain',
    distractors: [
      'Resentful longing for what another person has',
      'Greedy overindulgence in food and drink',
      'Great generosity towards people in need',
    ],
  },
  {
    word: 'Austere',
    tier: 1,
    group: 'character',
    definition: 'Severe or strict in appearance or manner',
    distractors: [
      'Warm, relaxed and friendly in manner',
      'Richly decorated with ornaments and colour',
      'Light-hearted and playful in tone',
    ],
  },
  {
    word: 'Benevolent',
    tier: 1,
    group: 'character',
    also: ['malevolent'],
    definition: 'Well-meaning and kindly towards others',
    distractors: [
      'Cruel and wishing harm on other people',
      'Indifferent and emotionally cold',
      'Secretive and cunning by nature',
    ],
  },
  {
    word: 'Insidious',
    tier: 1,
    group: 'tone',
    definition: 'Gradually and secretly causing harm',
    distractors: [
      'Loudly and openly causing great damage',
      'Unfair and likely to cause resentment',
      'Quickly causing harm that soon fades away',
    ],
  },
  {
    word: 'Denounce',
    tier: 1,
    group: 'analysis verbs',
    definition: 'To publicly declare something as wrong or evil',
    distractors: [
      'To quietly agree without raising any objection',
      'To offer praise publicly to draw attention',
      'To ignore something completely without comment',
    ],
  },
  {
    word: 'Foreboding',
    tier: 1,
    group: 'tone',
    also: ['ominous'],
    definition: 'A feeling that something bad is about to happen',
    distractors: [
      'A feeling of great joy and rising excitement',
      'A peaceful sense of calm and quiet contentment',
      'A sudden memory of something that happened long ago',
    ],
  },
  {
    word: 'Microcosm',
    tier: 1,
    group: 'ideas and context',
    definition: 'A small world that represents a much larger one',
    distractors: [
      'An extremely large version of something much smaller',
      'An instrument used for viewing very tiny objects',
      'A small detail that has no wider significance at all',
    ],
  },
  {
    word: 'Subversive',
    tier: 1,
    group: 'ideas and context',
    also: ['undermines'],
    definition: 'Seeking to undermine an established system or institution',
    distractors: [
      'Strongly supporting the existing order and those in power',
      'Lacking any clear opinion either way on the matter',
      'Mocking a writer’s style in a light-hearted way',
    ],
  },
  {
    word: 'Didacticism',
    tier: 1,
    group: 'rhetoric',
    also: ['didactic'],
    definition: 'Using literature to teach a moral or practical lesson',
    distractors: [
      'The practice of writing entirely without any message',
      'The practice of mocking people’s faults to correct them',
      'The deliberate use of regional dialect in writing',
    ],
  },
  {
    word: 'Sycophantic',
    tier: 1,
    group: 'character',
    definition: 'Behaving in a servile way to gain advantage',
    distractors: [
      'Arrogant and boastful about one’s own success',
      'Rude and openly disrespectful to superiors',
      'Honest and direct even with powerful people',
    ],
  },
  {
    word: 'Ephemeral',
    tier: 1,
    group: 'tone',
    definition: 'Lasting for only a very short time',
    distractors: [
      'Lasting forever and never fading away',
      'Delicate, light and heavenly in quality',
      'Difficult to understand or interpret',
    ],
  },
  {
    word: 'Magnanimous',
    tier: 1,
    group: 'character',
    definition: 'Generous or forgiving, especially towards a rival',
    distractors: [
      'Petty and spiteful towards people who have wronged you',
      'Agreed on by every single person involved',
      'Impressively large in size or importance',
    ],
  },
  {
    word: 'Sardonic',
    tier: 1,
    group: 'tone',
    also: ['cynical', 'mocking', 'tone'],
    definition: 'Grimly mocking or cynical in tone',
    distractors: [
      'Genuinely cheerful and warm-hearted',
      'Deeply romantic, loving and tender',
      'Gently teasing in an affectionate way',
    ],
  },
  {
    word: 'Melancholic',
    tier: 1,
    group: 'tone',
    also: ['sanguine', 'tone', 'mood'],
    definition: 'Feeling or expressing pensive sadness',
    distractors: [
      'Extremely excited and enthusiastic',
      'Angry, volatile, and short-tempered',
      'Calm, unemotional and very hard to excite',
    ],
  },
  {
    word: 'Pragmatic',
    tier: 1,
    group: 'character',
    definition: 'Dealing with things sensibly and realistically',
    distractors: [
      'Guided by ideals rather than by what is practical',
      'Driven by feelings rather than by careful thought',
      'Interested in theories rather than real situations',
    ],
  },
  {
    word: 'Utilitarian',
    tier: 1,
    group: 'ideas and context',
    definition: 'Designed to be useful rather than attractive',
    distractors: [
      'Made purely to look beautiful or decorative',
      'Expensive, luxurious and made to impress visitors',
      'Old-fashioned and no longer fit for use',
    ],
  },
  {
    word: 'Sanguine',
    tier: 1,
    group: 'character',
    also: ['dramatic irony'],
    definition: 'Optimistic, especially in a difficult situation',
    distractors: [
      'Extremely pessimistic and always expecting the worst',
      'Deeply jealous of the success of other people',
      'Angry and bitter towards other people',
    ],
  },
  {
    word: 'Pedantic',
    tier: 1,
    group: 'character',
    definition: 'Excessively concerned with minor details or rules',
    distractors: [
      'Dull and ordinary, showing no imagination at all',
      'Relaxed and carefree about rules and small details',
      'Immature and childish in a silly, annoying way',
    ],
  },
  {
    word: 'Antithesis',
    tier: 1,
    group: 'imagery',
    definition: 'A contrast or opposition between two things',
    distractors: [
      'A close similarity between two related things',
      'A statement that seems absurd but may be true',
      'A dramatic pause in a line, used for emphasis',
    ],
  },
  {
    word: 'Reticent',
    tier: 1,
    group: 'character',
    definition: 'Not revealing thoughts or feelings readily',
    distractors: [
      'Talkative and very open about their feelings',
      'Loud, forceful, and aggressive in speech',
      'Quick to anger and prone to outbursts',
    ],
  },
  // Added 24 October 2026: the terms a GCSE answer uses.
  {
    word: 'Foreshadowing',
    tier: 1,
    group: 'structure',
    also: ['foreboding'],
    definition: 'Hints early in a text about what will happen later',
    distractors: [
      'A scene that jumps back to show an earlier event',
      'The point where the tension in a story is at its peak',
      'An ending that leaves the main question unanswered',
    ],
  },
  {
    word: 'Ambivalent',
    tier: 1,
    group: 'tone',
    definition: 'Having mixed feelings about something',
    distractors: [
      'Open to more than one interpretation',
      'Showing no interest or concern at all',
      'Passionately in favour of something',
    ],
  },
  {
    word: 'Enjambment',
    tier: 1,
    group: 'poetic form',
    definition: 'A sentence running on from one line of poetry into the next',
    distractors: [
      'A pause in the middle of a line, marked by punctuation',
      'A pair of rhyming lines that sit next to each other',
      'A group of lines that forms one section of a poem',
    ],
  },
  {
    word: 'Caesura',
    tier: 1,
    group: 'poetic form',
    also: ['bleak'],
    definition: 'A pause in the middle of a line of poetry',
    distractors: [
      'A line that runs on into the next without a pause',
      'A turn in the argument partway through a poem',
      'A line that is repeated at the end of each stanza',
    ],
  },
  {
    word: 'Sibilance',
    tier: 1,
    group: 'sound',
    definition: 'The repetition of soft ‘s’ and ‘sh’ sounds',
    distractors: [
      'The repetition of harsh ‘b’, ‘p’ and ‘t’ sounds',
      'The repetition of vowel sounds inside nearby words',
      'Words that imitate the sounds they describe',
    ],
  },
  {
    word: 'Plosive',
    tier: 1,
    group: 'sound',
    definition: 'A hard consonant sound made by a burst of air, such as ‘p’ or ‘b’',
    distractors: [
      'A soft, hissing consonant sound, such as ‘s’ or ‘sh’',
      'A vowel sound repeated inside a group of neighbouring words',
      'A word that imitates the sound of the thing that it names',
    ],
  },
  {
    word: 'Assonance',
    tier: 1,
    group: 'sound',
    also: ['mood'],
    definition: 'The repetition of vowel sounds in nearby words',
    distractors: [
      'The repetition of consonant sounds at the start of words',
      'The repetition of a word at the start of each line',
      'The repetition of ‘s’ sounds to create a hissing effect',
    ],
  },
  {
    word: 'Volta',
    tier: 1,
    group: 'poetic form',
    also: ['mood'],
    definition: 'A turn in thought or argument within a poem',
    distractors: [
      'A pause in the middle of a line of poetry',
      'The two rhyming lines that end a Shakespearean sonnet',
      'The pattern of stressed beats in each line',
    ],
  },
  {
    word: 'Iambic pentameter',
    tier: 1,
    group: 'poetic form',
    definition: 'A line of five beats, each an unstressed then a stressed syllable',
    distractors: [
      'Unrhymed lines that follow no regular rhythm or metre',
      'A line of four beats, each a stressed then an unstressed syllable',
      'A pair of rhyming lines with ten syllables in each',
    ],
  },
  {
    word: 'Blank verse',
    tier: 1,
    group: 'poetic form',
    also: ['iambic pentameter'],
    definition: 'Unrhymed lines written in iambic pentameter',
    distractors: [
      'Lines with no regular rhyme scheme or rhythm',
      'Rhyming lines arranged in pairs throughout',
      'Ordinary writing not arranged in lines',
    ],
  },
  {
    word: 'Dramatic irony',
    tier: 1,
    group: 'drama',
    definition: 'When the audience knows something a character does not',
    distractors: [
      'When a character says the opposite of what they mean',
      'When events turn out the opposite of what was expected',
      'When a character speaks their thoughts alone on stage',
    ],
  },
  {
    word: 'Pathetic fallacy',
    tier: 1,
    group: 'imagery',
    definition: 'Weather or nature that mirrors a character’s mood',
    distractors: [
      'Giving human qualities to an object or animal',
      'Describing a setting in rich sensory detail',
      'A writer’s attempt to make the reader feel pity for someone',
    ],
  },
  {
    word: 'Oxymoron',
    tier: 1,
    group: 'imagery',
    definition: 'Two contradictory words placed side by side',
    distractors: [
      'A statement that seems absurd but contains a truth',
      'A deliberate exaggeration for emphasis',
      'Two similar words used for extra emphasis',
    ],
  },
  {
    word: 'Paradox',
    tier: 1,
    group: 'imagery',
    also: ['oxymoron', 'echoed'],
    definition: 'A statement that seems to contradict itself but holds a truth',
    distractors: [
      'Two words with opposite meanings placed side by side in a phrase',
      'Saying the opposite of what is really meant, often to mock',
      'An argument that weighs up both sides before deciding',
    ],
  },
  {
    word: 'Protagonist',
    tier: 1,
    group: 'character',
    definition: 'The main character, at the centre of the story',
    distractors: [
      'The character who opposes the main character',
      'A character whose qualities contrast with the hero’s',
      'The voice that tells the story to the reader',
    ],
  },
  {
    word: 'Antagonist',
    tier: 1,
    group: 'character',
    also: ['protagonist'],
    definition: 'A character who opposes or works against the hero',
    distractors: [
      'The central character the story is mainly about',
      'A minor character who brings comic relief to a tragedy',
      'A character who changes by the end of the story',
    ],
  },
  {
    word: 'Archetype',
    tier: 1,
    group: 'character',
    also: ['stereotype', 'archetypes'],
    definition: 'A typical character or pattern found again and again in stories',
    distractors: [
      'An oversimplified and often unfair idea of what a group is like',
      'A central character who lacks the usual qualities of a hero',
      'A character based closely on a real historical person',
    ],
  },
  {
    word: 'Satire',
    tier: 1,
    group: 'genre',
    also: ['satirises', 'subversive'],
    definition: 'Using humour to expose and criticise people’s faults',
    distractors: [
      'Gentle comedy in which everything ends happily',
      'An imitation of a work, exaggerated for comic effect',
      'A story in which the characters stand for ideas or people',
    ],
  },
  {
    word: 'Epistolary',
    tier: 1,
    group: 'narrative voice',
    definition: 'Told through letters, diaries or other documents',
    distractors: [
      'Told by a narrator who knows every character’s thoughts',
      'Told in a long series of flashbacks to earlier events',
      'Told through a single character’s private thoughts',
    ],
  },
  {
    word: 'Bildungsroman',
    tier: 1,
    group: 'genre',
    definition: 'A novel following a character’s growth from youth to adulthood',
    distractors: [
      'A novel that tells a story through a series of letters',
      'A novel set in a gloomy, frightening, supernatural world',
      'A novel set in an imagined future where society has gone badly wrong',
    ],
  },
  {
    word: 'Gothic',
    tier: 1,
    group: 'genre',
    definition: 'A genre of mystery, horror and gloomy, often supernatural settings',
    distractors: [
      'A genre that shows everyday life as truthfully and accurately as possible',
      'A genre that celebrates nature, feeling and imagination',
      'A genre that mocks people’s faults to criticise them',
    ],
  },
  {
    word: 'Foil',
    tier: 1,
    group: 'character',
    also: ['sceptical'],
    definition: 'A character who contrasts with another to highlight their qualities',
    distractors: [
      'A character who opposes the hero and tries to block their goals at every turn',
      'A character who narrates the whole story from the inside',
      'A character who is a typical example of a familiar type',
    ],
  },
  {
    word: 'Aside',
    tier: 1,
    group: 'drama',
    also: ['dramatic irony'],
    definition: 'A short remark to the audience that other characters cannot hear',
    distractors: [
      'A long speech spoken by a character who is alone on the stage',
      'A brief conversation between two minor characters at the side of the stage',
      'A note in the script that tells the actors how to move',
    ],
  },
  {
    word: 'Allusion',
    tier: 1,
    group: 'imagery',
    also: ['alludes'],
    definition: 'A brief reference to another text, person or event',
    distractors: [
      'A false idea or belief, or a trick of the eye',
      'A comparison that uses the words ‘like’ or ‘as’',
      'A long story in which the characters stand for ideas or people',
    ],
  },
  {
    word: 'Anaphora',
    tier: 1,
    group: 'rhetoric',
    definition: 'Repeating the same word at the start of each line or clause',
    distractors: [
      'Repeating the same consonant sound at the beginning of nearby words',
      'Repeating the same word at the end of each line or clause',
      'Listing three things together for a memorable effect',
    ],
  },
  // The verbs for writing about a writer's methods.
  {
    word: 'Conveys',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Communicates an idea or feeling to the reader',
    distractors: [
      'Hides an idea so the reader misses it',
      'Changes an idea into something new',
      'Copies an idea word for word from a source',
    ],
  },
  {
    word: 'Undermines',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Gradually weakens or damages something, often unnoticed',
    distractors: [
      'Openly attacks something in the strongest possible terms',
      'Supports something by adding more evidence for it',
      'Draws attention to something by placing it first',
    ],
  },
  {
    word: 'Foregrounds',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Makes something prominent so the reader notices it',
    distractors: [
      'Hints at something that will happen later in the story',
      'Moves something out of the reader’s sight',
      'Weakens something gradually from within',
    ],
  },
  {
    word: 'Implies',
    tier: 1,
    group: 'analysis verbs',
    also: ['infers'],
    definition: 'Suggests something without saying it directly',
    distractors: [
      'Works out a meaning from the clues that someone gives',
      'States something openly so that no doubt is left',
      'Repeats something several times to give it emphasis',
    ],
  },
  {
    word: 'Critiques',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Examines something closely and judges its faults',
    distractors: [
      'Praises something warmly and without doubts',
      'Describes something without giving an opinion',
      'Copies something in order to mock it',
    ],
  },
  {
    word: 'Reinforces',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Strengthens an idea that is already there',
    distractors: [
      'Challenges an idea that has come before it',
      'Hides an idea beneath the surface of the text',
      'Introduces an idea for the very first time',
    ],
  },
  {
    word: 'Epitomises',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Is a perfect example of a quality or type',
    distractors: [
      'Is a poor or very unusual example of a type',
      'Is the exact opposite of a quality or type',
      'Is an early version a later type grew out of',
    ],
  },
  {
    word: 'Encapsulates',
    tier: 1,
    group: 'analysis verbs',
    also: ['theme'],
    definition: 'Expresses the essence of something in brief',
    distractors: [
      'Expands on an idea at great length',
      'Hides an idea beneath layers of detail',
      'Repeats an idea several times for emphasis',
    ],
  },
  {
    word: 'Vilifies',
    tier: 1,
    group: 'analysis verbs',
    also: ['propaganda'],
    definition: 'Portrays someone as wicked or worthless',
    distractors: [
      'Portrays someone as perfect and admirable',
      'Portrays someone as weak and deserving pity',
      'Portrays someone as a figure of fun to mock',
    ],
  },
  {
    word: 'Idealises',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Presents something as better than it really is',
    distractors: [
      'Presents something as worse than it really is',
      'Presents something exactly as it really is',
      'Presents something as an idea, not a thing',
    ],
  },
  {
    word: 'Dehumanises',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Takes away someone’s human qualities or dignity',
    distractors: [
      'Gives human qualities to an object or an animal',
      'Shows deep sympathy for someone’s suffering',
      'Makes someone appear more powerful than they are',
    ],
  },
  {
    word: 'Interrogates',
    tier: 1,
    group: 'analysis verbs',
    definition: 'Questions an idea closely to test whether it holds',
    distractors: [
      'Accepts an idea without questioning it in any way at all',
      'Repeats an idea to make it more memorable',
      'Mocks an idea to make the audience laugh',
    ],
  },
  // Words for tone and atmosphere.
  {
    word: 'Poignant',
    tier: 1,
    group: 'tone',
    definition: 'Evoking a keen sense of sadness or regret',
    distractors: [
      'Sharply funny in a way that mocks someone else',
      'Deliberately shocking in order to cause offence',
      'Calm, peaceful and free from all worry and care',
    ],
  },
  {
    word: 'Bleak',
    tier: 1,
    group: 'tone',
    also: ['mood'],
    definition: 'Cold, bare and without hope',
    distractors: [
      'Cold, bright and full of energy',
      'Dark, mysterious and exciting',
      'Quiet, peaceful and very restful',
    ],
  },
  {
    word: 'Nostalgic',
    tier: 1,
    group: 'tone',
    definition: 'Longing fondly for a happier time in the past',
    distractors: [
      'Fearful about what might happen in the future',
      'Bitterly regretting a mistake from the past',
      'Bored by the dull routine of everyday life',
    ],
  },
  {
    word: 'Scathing',
    tier: 1,
    group: 'tone',
    also: ['tone'],
    definition: 'Bitterly and harshly critical',
    distractors: [
      'Gently critical but kindly meant',
      'Openly admiring and full of praise',
      'Coldly unfeeling and cruel to others',
    ],
  },
  {
    word: 'Cynical',
    tier: 1,
    group: 'tone',
    definition: 'Believing people act only out of self-interest',
    distractors: [
      'Believing that everything will turn out well in the end',
      'Doubting a claim until there is proof for it',
      'Believing that life has no meaning at all',
    ],
  },
  {
    word: 'Sentimental',
    tier: 1,
    group: 'tone',
    also: ['manipulative'],
    definition: 'Showing tender feelings in an exaggerated way',
    distractors: [
      'Showing no feelings at all in any situation, ever',
      'Showing strong feelings of anger and bitterness',
      'Showing feelings that change from moment to moment',
    ],
  },
  {
    word: 'Grotesque',
    tier: 1,
    group: 'tone',
    definition: 'Strangely ugly or distorted in a disturbing way',
    distractors: [
      'Strikingly beautiful in an unusual way',
      'Strange and unexplained in a ghostly way',
      'Large, grand and impressive in scale',
    ],
  },
  {
    word: 'Claustrophobic',
    tier: 1,
    group: 'tone',
    definition: 'Uncomfortably enclosed and confining',
    distractors: [
      'Frighteningly wide open and exposed to view',
      'Gloomily dark, damp and cold',
      'Strangely silent and very still',
    ],
  },
  {
    word: 'Wry',
    tier: 1,
    group: 'tone',
    also: ['sardonic', 'tone'],
    definition: 'Dryly humorous, often with a hint of mockery',
    distractors: [
      'Loudly and openly cheerful in every way',
      'Bitterly angry and quite unforgiving',
      'Shyly nervous and lacking in confidence',
    ],
  },
  {
    word: 'Contemptuous',
    tier: 1,
    group: 'tone',
    also: ['tone'],
    definition: 'Showing that you think someone is worthless',
    distractors: [
      'Showing that you feel sorry for someone',
      'Deserving to be treated as worthless',
      'Showing that you are very pleased with yourself',
    ],
  },
  {
    word: 'Archaic',
    tier: 1,
    group: 'word choice',
    definition: 'Old-fashioned and no longer in everyday use',
    distractors: [
      'Newly invented and not yet widely used by anyone',
      'Used only by the people living in one local area',
      'Used only by experts working in one particular field',
    ],
  },
  {
    word: 'Uncanny',
    tier: 1,
    group: 'tone',
    definition: 'Strange in a way that is unsettling and hard to explain',
    distractors: [
      'Strange in a way that is charming and old-fashioned',
      'Strange in a way that is funny and quite absurd',
      'Strange in a way that is fresh and exciting',
    ],
  },
  {
    word: 'Sublime',
    tier: 1,
    group: 'tone',
    definition: 'So grand or beautiful that it fills you with awe',
    distractors: [
      'So small and delicate that it seems fragile',
      'So hidden that it works below the level of conscious thought',
      'So ordinary that it seems dull and lifeless',
    ],
  },
  // Terms for structure, voice, drama and argument.
  {
    word: 'Tricolon',
    tier: 1,
    group: 'rhetoric',
    definition: 'A group of three words or phrases used for effect',
    distractors: [
      'Repeating the same word at the start of each sentence',
      'Two contrasting ideas placed side by side in balanced phrases',
      'A question asked for effect, with no answer expected',
    ],
  },
  {
    word: 'Epiphany',
    tier: 1,
    group: 'structure',
    definition: 'A sudden moment of insight or realisation',
    distractors: [
      'A sudden reversal in a character’s fortunes',
      'A dream that predicts what will happen later',
      'A turning point in a poem’s line of thought',
    ],
  },
  {
    word: 'Zoomorphism',
    tier: 1,
    group: 'imagery',
    definition: 'Giving animal qualities to a person or thing',
    distractors: [
      'Using an animal to stand for a nation',
      'Describing a place as if it were alive',
      'Comparing a person to a figure from myth',
    ],
  },
  {
    word: 'Elegy',
    tier: 1,
    group: 'poetic form',
    definition: 'A poem of mourning, usually for someone who has died',
    distractors: [
      'A formal poem written in praise of a person, object or idea',
      'A poem that tells a story, often in short verses',
      'A poem of fourteen lines with a set rhyme scheme',
    ],
  },
  {
    word: 'Dramatic monologue',
    tier: 1,
    group: 'poetic form',
    also: ['stoop', 'euphemism', 'monologue'],
    definition: 'A poem in which one character speaks to a silent listener',
    distractors: [
      'A speech made by a character alone on stage',
      'A poem in which two speakers take turns to talk',
      'A poem written in the poet’s own voice about their life',
    ],
  },
  {
    word: 'Persona',
    tier: 1,
    group: 'narrative voice',
    definition: 'A character or voice the poet adopts to speak through',
    distractors: [
      'The poet speaking directly as themselves',
      'The person to whom the whole poem seems to be addressed',
      'The main character in a novel, play or poem',
    ],
  },
  {
    word: 'Cyclical structure',
    tier: 1,
    group: 'structure',
    definition: 'A shape in which a story ends where it began',
    distractors: [
      'A shape in which events are told in time order',
      'A shape in which a story opens in the middle of events',
      'A shape in which a story moves between two timelines',
    ],
  },
  {
    word: 'Omniscient narrator',
    tier: 1,
    group: 'narrative voice',
    definition: 'A storyteller who knows every character’s thoughts',
    distractors: [
      'A storyteller who is a character in the story',
      'A storyteller whose account cannot be trusted',
      'A storyteller who reports only what can be seen',
    ],
  },
  {
    word: 'Unreliable narrator',
    tier: 1,
    group: 'narrative voice',
    definition: 'A storyteller whose account the reader cannot fully trust',
    distractors: [
      'A storyteller who knows everything about every single character',
      'A storyteller who addresses the reader directly as ‘you’ throughout',
      'A storyteller who tells the story many years after it happened',
    ],
  },
  {
    word: 'Register',
    tier: 1,
    group: 'word choice',
    also: ['tone'],
    definition: 'The level of formality suited to an audience and purpose',
    distractors: [
      'The attitude a writer shows towards the subject',
      'The regional words and grammar used by people in a local area',
      'The way a word is pronounced in a particular area',
    ],
  },
  {
    word: 'Tragic hero',
    tier: 1,
    group: 'drama',
    also: ['catharsis', 'hamartia'],
    definition: 'A great figure whose flaw brings about their downfall',
    distractors: [
      'An ordinary person who wins against all the odds',
      'A villain who is punished at the end of the play',
      'A comic character who survives the tragedy',
    ],
  },
  {
    word: 'Personification',
    tier: 1,
    group: 'imagery',
    definition: 'Giving human qualities to something not human',
    distractors: [
      'Giving animal qualities to a human being or thing',
      'Describing a person as if they were a kind of machine',
      'Speaking directly to a person or thing that is absent',
    ],
  },
  {
    word: 'Frame narrative',
    tier: 1,
    group: 'structure',
    definition: 'A story told within another story',
    distractors: [
      'A story told entirely through letters',
      'A story told in strict time order',
      'A story told from many viewpoints',
    ],
  },
  {
    word: 'Monologue',
    tier: 1,
    group: 'drama',
    also: ['dramatic monologue'],
    definition: 'A long speech by one character to others',
    distractors: [
      'A speech by a character alone on stage',
      'A brief remark heard only by the audience',
      'A conversation between two characters',
    ],
  },
  {
    word: 'Hypophora',
    tier: 1,
    group: 'rhetoric',
    definition: 'Asking a question and then answering it yourself',
    distractors: [
      'Asking a question that needs no answer at all',
      'Repeating the same question to make it sound stronger',
      'Answering a question with another question',
    ],
  },
  {
    word: 'Counter-argument',
    tier: 1,
    group: 'rhetoric',
    definition: 'An opposing view that a writer raises in order to answer it',
    distractors: [
      'A series of different reasons that all support the very same view',
      'A final paragraph that repeats and sums up the writer’s main point',
      'A question asked for effect, which needs no answer from anyone',
    ],
  },
  {
    word: 'Anecdote',
    tier: 1,
    group: 'rhetoric',
    definition: 'A short personal story used to make a point',
    distractors: [
      'A fact or number used as evidence',
      'The opinion of an expert used as evidence',
      'A short tale with animals teaching a moral',
    ],
  },
  // Words for character, and for the ideas and context of the set texts.
  {
    word: 'Misanthropic',
    tier: 1,
    group: 'character',
    also: ['philanthropist', 'misogyny'],
    definition: 'Disliking and distrusting other people in general',
    distractors: [
      'Disliking and distrusting women in particular',
      'Loving humanity and giving generously to others',
      'Fearing and distrusting anything new or unfamiliar',
    ],
  },
  {
    word: 'Parsimonious',
    tier: 1,
    group: 'character',
    definition: 'Extremely unwilling to spend money',
    distractors: [
      'Extremely willing to give money away',
      'Extremely careless about spending money',
      'Extremely skilled at making money grow',
    ],
  },
  {
    word: 'Philanthropist',
    tier: 1,
    group: 'character',
    definition: 'A person who gives money and time to help others',
    distractors: [
      'A person who dislikes and avoids other people',
      'A person who studies the meaning of life',
      'A person who hoards money and spends none',
    ],
  },
  {
    word: 'Malevolent',
    tier: 1,
    group: 'character',
    definition: 'Wishing to do evil or harm to others',
    distractors: [
      'Wishing to do good for others',
      'Unwilling to take sides in a dispute',
      'Unable to tell right from wrong',
    ],
  },
  {
    word: 'Tyrannical',
    tier: 1,
    group: 'character',
    definition: 'Ruling cruelly and unfairly with total power',
    distractors: [
      'Ruling fairly with the full consent of the people',
      'Ruling weakly and letting others make the decisions',
      'Ruling by long tradition and by inherited right',
    ],
  },
  {
    word: 'Duplicitous',
    tier: 1,
    group: 'character',
    also: ['double-dealer'],
    definition: 'Deceitful, saying one thing and doing another',
    distractors: [
      'Honest and straightforward in every dealing',
      'Having two different jobs at the same time',
      'Repeating one mistake again and again',
    ],
  },
  {
    word: 'Regicide',
    tier: 1,
    group: 'ideas and context',
    definition: 'The killing of a king',
    distractors: ['The overthrow of a king', 'The killing of a brother', 'The crowning of a king'],
  },
  {
    word: 'Usurper',
    tier: 1,
    group: 'ideas and context',
    definition: 'Someone who seizes a throne without the right to it',
    distractors: [
      'Someone who inherits a throne by right of birth',
      'Someone who lends money at very high interest',
      'Someone who rules on behalf of a young king',
    ],
  },
  {
    word: 'Equivocation',
    tier: 1,
    group: 'ideas and context',
    also: ['ambiguity'],
    definition: 'Using ambiguous words to hide the truth',
    distractors: [
      'Telling an outright lie with complete confidence',
      'Treating every single person as exactly equal',
      'Refusing to give any answer to a question',
    ],
  },
  {
    word: 'Complacent',
    tier: 1,
    group: 'character',
    definition: 'Smugly satisfied, and blind to dangers ahead',
    distractors: [
      'Anxious, and alert to every danger ahead',
      'Involved with others in doing something wrong',
      'Unhappy, and always finding fault',
    ],
  },
  {
    word: 'Patriarchal',
    tier: 1,
    group: 'ideas and context',
    definition: 'Controlled by men, with women kept below them',
    distractors: [
      'Controlled by women, with men kept below them',
      'Proud of one’s country and its traditions',
      'Ruled by priests in the name of religion',
    ],
  },
  {
    word: 'Misogyny',
    tier: 1,
    group: 'ideas and context',
    definition: 'Hatred of or prejudice against women',
    distractors: [
      'Hatred or distrust of people in general',
      'Hatred of or prejudice against marriage',
      'Prejudice against people from other lands',
    ],
  },
  {
    word: 'Hypocrisy',
    tier: 1,
    group: 'character',
    also: ['double-dealer'],
    definition: 'Claiming moral standards that you do not live up to',
    distractors: [
      'Admitting faults openly and honestly to others',
      'Exaggerating to make a story more dramatic',
      'Being too critical of other people’s mistakes',
    ],
  },
  {
    word: 'Propaganda',
    tier: 1,
    group: 'ideas and context',
    definition: 'Biased information spread to promote a cause',
    distractors: [
      'Balanced information that weighs both sides',
      'Secret information passed to an enemy',
      'Official information kept from the public',
    ],
  },
  {
    word: 'Superstition',
    tier: 1,
    group: 'ideas and context',
    definition: 'A belief in luck, magic or signs without evidence',
    distractors: [
      'A belief based on careful scientific evidence',
      'A belief that one group is better than others',
      'A belief that hard work is always rewarded',
    ],
  },
  {
    word: 'Impetuous',
    tier: 1,
    group: 'character',
    definition: 'Acting quickly without thinking first',
    distractors: [
      'Acting slowly and only after careful thought',
      'Acting cruelly towards those beneath you',
      'Acting proudly, as if you ruled others',
    ],
  },
  {
    word: 'Fickle',
    tier: 1,
    group: 'character',
    definition: 'Changing loyalties or feelings often',
    distractors: [
      'Loyal through every difficulty',
      'Feeling nothing for anyone at all',
      'Feeling jealous of every rival',
    ],
  },
  {
    word: 'Remorse',
    tier: 1,
    group: 'character',
    also: ['tormented'],
    definition: 'Deep regret for a wrong you have done',
    distractors: [
      'Deep anger at a wrong done to you',
      'Deep fear of a punishment to come',
      'Deep pride in a success you have worked for',
    ],
  },
  {
    word: 'Redemption',
    tier: 1,
    group: 'ideas and context',
    definition: 'Being saved from sin, or making up for past wrongs',
    distractors: [
      'Being punished for every sin with no hope of change',
      'Being rewarded with money for doing good for others',
      'Being forced to repeat the same mistakes for all time',
    ],
  },
  {
    word: 'Culpable',
    tier: 1,
    group: 'character',
    definition: 'Deserving blame for a wrong',
    distractors: [
      'Deserving praise for a good deed',
      'Able to be very easily forgiven',
      'Unable to tell right from wrong',
    ],
  },
  {
    word: 'Exploitation',
    tier: 1,
    group: 'ideas and context',
    definition: 'Treating someone unfairly to benefit from their work',
    distractors: [
      'Paying someone fairly for the work that they do',
      'Exploring a new place for the first time',
      'Encouraging someone to develop their talents',
    ],
  },
  {
    word: 'Repression',
    tier: 1,
    group: 'ideas and context',
    definition: 'Holding back thoughts or desires, often unhealthily',
    distractors: [
      'Speaking openly about every thought and desire one has',
      'Forgetting a memory because it is unimportant',
      'Copying the behaviour of others to fit in',
    ],
  },
  {
    word: 'Socialism',
    tier: 1,
    group: 'ideas and context',
    definition: 'A belief that wealth and industry should be shared by the community',
    distractors: [
      'A belief that industry should be privately owned to make a profit',
      'A belief that one strong leader should hold all the power',
      'A belief that there should be no government of any kind',
    ],
  },
  {
    word: 'Totalitarian',
    tier: 1,
    group: 'ideas and context',
    definition: 'A state that controls every part of people’s lives',
    distractors: [
      'A state run by elected leaders who can be voted out',
      'A state with no government or laws of any kind at all',
      'A state ruled by a king or a queen who inherits the crown',
    ],
  },
  {
    word: 'Propriety',
    tier: 1,
    group: 'ideas and context',
    definition: 'Correct behaviour that follows accepted rules',
    distractors: [
      'Ownership of land, houses and other goods',
      'Rude behaviour that ignores social rules',
      'Behaviour that is natural and unplanned',
    ],
  },
  {
    word: 'Providence',
    tier: 1,
    group: 'ideas and context',
    definition: 'God’s care and guidance over events',
    distractors: [
      'Blind chance that controls all events',
      'The punishment of wrongdoing by fate',
      'A region or area within a single country',
    ],
  },
  {
    word: 'Alienation',
    tier: 1,
    group: 'ideas and context',
    also: ['elicits'],
    definition: 'Feeling isolated and cut off from others',
    distractors: [
      'Feeling welcomed into a close community',
      'Feeling envious of other people’s success',
      'Arriving in a country from abroad',
    ],
  },
  {
    word: 'Savagery',
    tier: 1,
    group: 'ideas and context',
    definition: 'Fierce, cruel and uncivilised behaviour',
    distractors: [
      'Calm, ordered and civilised behaviour',
      'Brave and heroic behaviour in battle',
      'Wild, noisy and playful behaviour in children',
    ],
  },
  {
    word: 'Ostracised',
    tier: 1,
    group: 'character',
    definition: 'Excluded and shut out by a group',
    distractors: [
      'Welcomed and warmly included by a group',
      'Chosen to be the leader of a group',
      'Punished by the law for a serious crime',
    ],
  },
  {
    word: 'Usury',
    tier: 1,
    group: 'ideas and context',
    also: ['usurper'],
    definition: 'Lending money at unfairly high interest',
    distractors: [
      'Taking a throne without the right to it',
      'Giving money freely to those in need',
      'Borrowing money without paying it back',
    ],
  },
  {
    word: 'Pompous',
    tier: 1,
    group: 'character',
    definition: 'Self-important and showily solemn',
    distractors: [
      'Modest and quietly unassuming',
      'Cheerful and noisily excited',
      'Nervous and easily embarrassed',
    ],
  },
  {
    word: 'Treacherous',
    tier: 1,
    group: 'character',
    definition: 'Betraying the trust that others place in you',
    distractors: [
      'Loyal to others even when it is dangerous',
      'Afraid of being betrayed by those close to you',
      'Cruel to those who are weaker than you',
    ],
  },
  {
    word: 'Prophecy',
    tier: 1,
    group: 'ideas and context',
    also: ['foreboding', 'foreshadowing'],
    definition: 'A prediction of what will happen in the future',
    distractors: [
      'A memory of something that happened very long ago',
      'A curse that brings bad luck to a family for years',
      'A secret plan to seize power from a rightful king',
    ],
  },

  // ─── Tier 2: what a word means in its sentence ─────────────────────────────
  // From the set texts: each quotation exactly as the held public-domain
  // edition in src/data/full-texts/ prints it, verse line breaks as " / ".
  {
    kind: 'in-context',
    word: 'covetous',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Dickens calls Scrooge “a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner”.',
    source: 'A Christmas Carol, Stave One',
    definition: 'Greedily longing for more wealth',
    distractors: [
      'Cruel to those weaker than himself',
      'Secretive about his private affairs',
      'Bitterly regretful about his past',
    ],
  },
  {
    kind: 'in-context',
    word: 'business',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'When Scrooge praises him as a good man of business, Marley’s Ghost cries: “Mankind was my business.”',
    source: 'A Christmas Carol, Stave One',
    definition: 'His proper concern and his duty',
    distractors: [
      'His trade and way of earning',
      'His firm’s customers and clients',
      'His hobby and favourite pastime',
    ],
  },
  {
    kind: 'in-context',
    word: 'Want',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'The Spirit reveals two ragged children beneath its robe: “This boy is Ignorance. This girl is Want.”',
    source: 'A Christmas Carol, Stave Three',
    definition: 'Poverty: lacking the basic needs of life',
    distractors: [
      'Greedy desire for luxuries one does not need',
      'Hopeful longing for a better and fairer future',
      'Envy of those who are rich and comfortable',
    ],
  },
  {
    kind: 'in-context',
    word: 'surplus',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Scrooge says that if the poor would rather die, “they had better do it, and decrease the surplus population.”',
    source: 'A Christmas Carol, Stave One',
    definition: 'Extra, beyond what is needed',
    distractors: [
      'Poorest and most desperate',
      'Growing far too quickly',
      'Ignorant and badly behaved',
    ],
  },
  {
    kind: 'in-context',
    word: 'word',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'After promising to raise Bob Cratchit’s salary, “Scrooge was better than his word.”',
    source: 'A Christmas Carol, Stave Five',
    definition: 'What he had promised to do',
    distractors: [
      'What he had said in anger',
      'The way he spoke to others',
      'His good name in the city',
    ],
  },
  {
    kind: 'in-context',
    word: 'forged',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Marley’s Ghost tells Scrooge: “I wear the chain I forged in life”.',
    source: 'A Christmas Carol, Stave One',
    definition: 'Made, link by link, by his own actions',
    distractors: [
      'Faked or copied in order to deceive',
      'Broke free from at the end of his life',
      'Was forced to carry as a punishment',
    ],
  },
  {
    kind: 'in-context',
    word: 'submissively',
    tier: 2,
    group: 'Victorian prose',
    sentence: '“Spirit,” said Scrooge submissively, “conduct me where you will.”',
    source: 'A Christmas Carol, Stave Three',
    definition: 'Meekly and ready to obey',
    distractors: [
      'Fearfully, ready to run away',
      'Angrily, ready to argue back',
      'Slyly, hoping to trick him',
    ],
  },
  {
    kind: 'in-context',
    word: 'render',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Scrooge says that Fezziwig “has the power to render us happy or unhappy”.',
    source: 'A Christmas Carol, Stave Two',
    definition: 'To make or cause to become',
    distractors: [
      'To pay or reward with money',
      'To hide or keep secret',
      'To pretend or act as if',
    ],
  },
  {
    kind: 'in-context',
    word: 'Vaulting',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Macbeth admits he has no reason to kill Duncan, “but only / Vaulting ambition, which o’erleaps itself”.',
    source: 'Macbeth, Act 1 Scene 7',
    definition: 'Leaping too high, so that it overreaches',
    distractors: [
      'Locked away and kept hidden from view',
      'Growing slowly and steadily over time',
      'Proud, loud and openly boastful',
    ],
  },
  {
    kind: 'in-context',
    word: 'Infirm',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'When Macbeth refuses to go back to the murdered king, Lady Macbeth calls him “Infirm of purpose”.',
    source: 'Macbeth, Act 2 Scene 2',
    definition: 'Weak and lacking resolve',
    distractors: ['Ill and in need of rest', 'Firm and unshakeable', 'Unsure of the facts'],
  },
  {
    kind: 'in-context',
    word: 'art',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Duncan, betrayed by the old Thane of Cawdor, says: “There’s no art / To find the mind’s construction in the face”.',
    source: 'Macbeth, Act 1 Scene 4',
    definition: 'Skill or method',
    distractors: ['A painted picture', 'Magic or spells', 'A secret plan'],
  },
  {
    kind: 'in-context',
    word: 'temper',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Macbeth fears Banquo’s courage and “that dauntless temper of his mind”.',
    source: 'Macbeth, Act 3 Scene 1',
    definition: 'Character or nature',
    distractors: ['Sudden burst of anger', 'Changeable bad moods', 'Habit of hiding things'],
  },
  {
    kind: 'in-context',
    word: 'beguile',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Lady Macbeth advises her husband: “To beguile the time, / Look like the time”.',
    source: 'Macbeth, Act 1 Scene 5',
    definition: 'To deceive or trick',
    distractors: ['To hurry or speed up', 'To forget about', 'To waste or lose'],
  },
  {
    kind: 'in-context',
    word: 'Signifying',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Macbeth says life is “a tale / Told by an idiot, full of sound and fury, / Signifying nothing.”',
    source: 'Macbeth, Act 5 Scene 5',
    definition: 'Meaning or standing for',
    distractors: ['Signing or agreeing to', 'Achieving or earning', 'Hiding or holding back'],
  },
  {
    kind: 'in-context',
    word: 'wherefore',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Alone on her balcony, Juliet sighs: “O Romeo, Romeo, wherefore art thou Romeo?”',
    source: 'Romeo and Juliet, Act 2 Scene 2',
    definition: 'For what reason',
    distractors: ['In which place', 'At what moment', 'In whose company'],
  },
  {
    kind: 'in-context',
    word: 'dignity',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['foretells'],
    sentence:
      'The Prologue opens: “Two households, both alike in dignity, / In fair Verona, where we lay our scene”.',
    source: 'Romeo and Juliet, Prologue',
    definition: 'Rank and social standing',
    distractors: [
      'Calm, serious self-control',
      'Wealth and their grand houses',
      'Pride and hatred of rivals',
    ],
  },
  {
    kind: 'in-context',
    word: 'houses',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Wounded by Tybalt, Mercutio curses: “A plague o’ both your houses.”',
    source: 'Romeo and Juliet, Act 3 Scene 1',
    definition: 'Families and their followers',
    distractors: [
      'Buildings where they live',
      'Servants and their noble masters',
      'Swords and fighting skills',
    ],
  },
  {
    kind: 'in-context',
    word: 'fool',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'After killing Tybalt, Romeo cries: “O, I am fortune’s fool”.',
    source: 'Romeo and Juliet, Act 3 Scene 1',
    definition: 'A plaything, mocked by fate',
    distractors: [
      'A jester who entertains',
      'A favourite and lucky one',
      'A sworn and bitter enemy',
    ],
  },
  {
    kind: 'in-context',
    word: 'soft',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['figuratively'],
    sentence:
      'In the orchard below Juliet’s window, Romeo whispers: “But soft, what light through yonder window breaks?”',
    source: 'Romeo and Juliet, Act 2 Scene 2',
    definition: 'Wait; be quiet',
    distractors: ['Faint; muted', 'Weak; feeble', 'Smooth; silky'],
  },
  {
    kind: 'in-context',
    word: 'bounty',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Juliet tells Romeo: “My bounty is as boundless as the sea, / My love as deep”.',
    source: 'Romeo and Juliet, Act 2 Scene 2',
    definition: 'Her generous power to give',
    distractors: [
      'A reward offered for a capture',
      'Her beauty and her great charm',
      'Her family’s wealth and land',
    ],
  },
  {
    kind: 'in-context',
    word: 'countenance',
    tier: 2,
    group: 'Victorian prose',
    also: ['discourse'],
    sentence:
      'Stevenson introduces Utterson as “a man of a rugged countenance that was never lighted by a smile”.',
    source: 'Jekyll and Hyde, Story of the Door',
    definition: 'Face and its expression',
    distractors: ['Manner of speaking', 'Way of walking and standing', 'Body and its build'],
  },
  {
    kind: 'in-context',
    word: 'troglodytic',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'After meeting Hyde, Utterson struggles to describe him: “Something troglodytic, shall we say?”',
    source: 'Jekyll and Hyde, Search for Mr Hyde',
    definition: 'Primitive, like a cave-dweller',
    distractors: [
      'Gigantic and brutal, like an ogre',
      'Magical, like an old wizard',
      'Deformed, like a hunchback',
    ],
  },
  {
    kind: 'in-context',
    word: 'discourse',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Utterson is “cold, scanty and embarrassed in discourse; backward in sentiment”.',
    source: 'Jekyll and Hyde, Story of the Door',
    definition: 'Conversation and speech',
    distractors: [
      'Business and money matters',
      'Dress and outward appearance',
      'Friendship and love affairs',
    ],
  },
  {
    kind: 'in-context',
    word: 'pallor',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Jekyll wakes to find his own hand “lean, corded, knuckly, of a dusky pallor and thickly shaded with a swart growth of hair”.',
    source: 'Jekyll and Hyde, Henry Jekyll’s Full Statement of the Case',
    definition: 'Paleness of the skin',
    distractors: ['Smoothness of the skin', 'Strength and size', 'Warmth to the touch'],
  },
  {
    kind: 'in-context',
    word: 'fiend',
    tier: 2,
    group: 'Victorian prose',
    also: ['benevolent'],
    sentence: 'The creature tells Victor: “I was benevolent and good; misery made me a fiend.”',
    source: 'Frankenstein, Chapter 10',
    definition: 'An evil, devilish being',
    distractors: [
      'A lonely, rejected outcast',
      'A loyal, faithful servant',
      'A fearless, mighty warrior',
    ],
  },
  {
    kind: 'in-context',
    word: 'ardour',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Victor recalls his work: “I had desired it with an ardour that far exceeded moderation”.',
    source: 'Frankenstein, Chapter 5',
    definition: 'Passionate eagerness',
    distractors: ['Calm and quiet patience', 'Secret shame and guilt', 'Careful, slow planning'],
  },
  {
    kind: 'in-context',
    word: 'afforded',
    tier: 2,
    group: 'Victorian prose',
    also: ['sublime'],
    sentence:
      'Grieving, Victor finds that “These sublime and magnificent scenes afforded me the greatest consolation that I was capable of receiving.”',
    source: 'Frankenstein, Chapter 10',
    definition: 'Gave or provided',
    distractors: ['Could pay for', 'Took away from', 'Hid away from'],
  },
  {
    kind: 'in-context',
    word: 'infuse',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Victor gathers his instruments “that I might infuse a spark of being into the lifeless thing that lay at my feet.”',
    source: 'Frankenstein, Chapter 5',
    definition: 'Put into; fill with',
    distractors: ['Draw out of; take from', 'Light; set on fire', 'Join together; fuse'],
  },
  {
    kind: 'in-context',
    word: 'inarticulate',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'The newly made creature “muttered some inarticulate sounds, while a grin wrinkled his cheeks.”',
    source: 'Frankenstein, Chapter 5',
    definition: 'Not formed into clear words',
    distractors: [
      'Loud, angry and threatening',
      'Gentle, soft and soothing',
      'In a strange foreign tongue',
    ],
  },
  {
    kind: 'in-context',
    word: 'coarse',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Estella sneers at Pip as they play cards: “And what coarse hands he has”.',
    source: 'Great Expectations, Chapter 8',
    definition: 'Rough and common-looking',
    distractors: ['Dirty and unwashed', 'Large, heavy and clumsy', 'Cold, pale and bony'],
  },
  {
    kind: 'in-context',
    word: 'common',
    tier: 2,
    group: 'Victorian prose',
    also: ['coarse'],
    sentence: 'Estella scorns her new playmate: “Why, he is a common labouring-boy”.',
    source: 'Great Expectations, Chapter 8',
    definition: 'Low-born and lower-class',
    distractors: ['Shared by everyone', 'Widespread and frequent', 'Kind and good-natured'],
  },
  {
    kind: 'in-context',
    word: 'welded',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Joe tells Pip: “life is made of ever so many partings welded together”.',
    source: 'Great Expectations, Chapter 27',
    definition: 'Joined firmly together',
    distractors: ['Torn roughly apart', 'Hidden carefully away', 'Hammered flat and smooth'],
  },
  {
    kind: 'in-context',
    word: 'want',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Austen begins: “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”',
    source: 'Pride and Prejudice, Chapter 1',
    definition: 'In need of; lacking',
    distractors: ['Afraid of meeting', 'Already engaged to', 'Wishing to impress'],
  },
  {
    kind: 'in-context',
    word: 'tolerable',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'At the ball, Darcy says of Elizabeth: “She is tolerable”.',
    source: 'Pride and Prejudice, Chapter 3',
    definition: 'Just about acceptable',
    distractors: ['Very patient and kind', 'Strikingly beautiful', 'Easy to talk with'],
  },
  {
    kind: 'in-context',
    word: 'condescension',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Mr Collins, full of praise, admires Lady Catherine’s “affability and condescension”.',
    source: 'Pride and Prejudice, Chapter 14',
    definition: 'Gracious kindness to those below her',
    distractors: [
      'Treating others as if they were fools',
      'Strict control of her household',
      'Generous gifts of money to the poor',
    ],
  },
  {
    kind: 'in-context',
    word: 'mean',
    tier: 2,
    group: 'Victorian prose',
    also: ['mood'],
    sentence:
      'Austen describes Mrs Bennet as “a woman of mean understanding, little information, and uncertain temper.”',
    source: 'Pride and Prejudice, Chapter 1',
    definition: 'Limited or poor',
    distractors: ['Unkind and cruel', 'Selfish with money', 'Clever or skilled'],
  },
  {
    kind: 'in-context',
    word: 'parts',
    tier: 2,
    group: 'Victorian prose',
    also: ['mood'],
    sentence:
      'Mr Bennet is “so odd a mixture of quick parts, sarcastic humour, reserve, and caprice”.',
    source: 'Pride and Prejudice, Chapter 1',
    definition: 'Abilities and talents',
    distractors: ['Roles played in a drama', 'Pieces of a whole', 'Places and regions'],
  },
  {
    kind: 'in-context',
    word: 'officious',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Elizabeth tells Darcy he was “sick of civility, of deference, of officious attention.”',
    source: 'Pride and Prejudice, Chapter 60',
    definition: 'Too eager to help or please',
    distractors: [
      'Formal and businesslike',
      'Rude and quite unwelcoming',
      'Shy, quiet and hesitant',
    ],
  },
  {
    kind: 'in-context',
    word: 'obscure',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Jane asks Rochester: “Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?”',
    source: 'Jane Eyre, Chapter 23',
    definition: 'Unknown and unimportant',
    distractors: [
      'Very difficult to understand',
      'Hidden away in deep shadow',
      'Gloomy and very miserable',
    ],
  },
  {
    kind: 'in-context',
    word: 'discord',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Jane remembers her childhood: “I was a discord in Gateshead Hall”.',
    source: 'Jane Eyre, Chapter 2',
    definition: 'Something out of harmony with the rest',
    distractors: [
      'A servant who was paid no wages at all',
      'A treasured favourite of the family',
      'A prisoner locked inside one room',
    ],
  },
  {
    kind: 'in-context',
    word: 'allow',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Mrs Reed tells Jane: “you are passionate, Jane, that you must allow”.',
    source: 'Jane Eyre, Chapter 4',
    definition: 'Admit; accept as true',
    distractors: ['Permit; let happen', 'Forgive or excuse', 'Control or hold back'],
  },
  {
    kind: 'in-context',
    word: 'stagnation',
    tier: 2,
    group: 'Victorian prose',
    sentence: '“My mind,” says Holmes, “rebels at stagnation.”',
    source: 'The Sign of Four, Chapter 1',
    definition: 'Having nothing active to do',
    distractors: [
      'Being told exactly what to think',
      'Sudden noise and confusion',
      'Slow decay through illness',
    ],
  },
  {
    kind: 'in-context',
    word: 'exaltation',
    tier: 2,
    group: 'Victorian prose',
    also: ['stagnation'],
    sentence: 'Holmes declares: “I crave for mental exaltation.”',
    source: 'The Sign of Four, Chapter 1',
    definition: 'Intense excitement of the mind',
    distractors: [
      'Complete rest and calm quiet',
      'Praise from other people',
      'Escape from all thought',
    ],
  },
  {
    kind: 'in-context',
    word: 'complacency',
    tier: 2,
    group: 'Victorian prose',
    also: ['complacent'],
    sentence:
      'Wells writes: “With infinite complacency men went to and fro over this globe about their little affairs”.',
    source: 'The War of the Worlds, Book One, Chapter 1',
    definition: 'Smug, untroubled self-satisfaction',
    distractors: [
      'Busy, hard-working, restless energy',
      'Fearful and nervous watchfulness of others',
      'Warm and kindly concern for one another',
    ],
  },
  {
    kind: 'in-context',
    word: 'unsympathetic',
    tier: 2,
    group: 'Victorian prose',
    also: ['complacency'],
    sentence: 'The Martians’ minds are “intellects vast and cool and unsympathetic”.',
    source: 'The War of the Worlds, Book One, Chapter 1',
    definition: 'Without any feeling for others',
    distractors: [
      'Unable to understand our language',
      'Too slow to understand us',
      'Uninterested in learning',
    ],
  },
  {
    kind: 'in-context',
    word: 'brave',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Seeing the King of Naples and his lords, Miranda cries: “O brave new world / That has such people in ’t”.',
    source: 'The Tempest, Act 5 Scene 1',
    definition: 'Splendid and wonderful',
    distractors: [
      'Bold and very courageous',
      'Dangerous and frightening',
      'Young and quite untested',
    ],
  },
  {
    kind: 'in-context',
    word: 'profit',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Caliban tells Prospero: “You taught me language, and my profit on ’t / Is, I know how to curse.”',
    source: 'The Tempest, Act 1 Scene 2',
    definition: 'Benefit; what I gain',
    distractors: ['Money that I earned', 'Payment I owe you', 'Punishment for it'],
  },
  {
    kind: 'in-context',
    word: 'art',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Prospero recalls the wonders he has worked “By my so potent art.”',
    source: 'The Tempest, Act 5 Scene 1',
    definition: 'Magic power',
    distractors: ['Fine painting', 'Musical skill', 'Speech-making'],
  },
  {
    kind: 'in-context',
    word: 'strained',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Portia tells Shylock: “The quality of mercy is not strain’d, / It droppeth as the gentle rain from heaven”.',
    source: 'The Merchant of Venice, Act 4 Scene 1',
    definition: 'Forced or compelled',
    distractors: ['Tired or worn out', 'Weakened by overuse', 'Tense and nervous'],
  },
  {
    kind: 'in-context',
    word: 'sooth',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['mood'],
    sentence: 'Antonio opens the play: “In sooth I know not why I am so sad”.',
    source: 'The Merchant of Venice, Act 1 Scene 1',
    definition: 'In truth',
    distractors: ['In secret', 'In comfort', 'In summary'],
  },
  {
    kind: 'in-context',
    word: 'impediments',
    tier: 2,
    group: 'poetry',
    sentence:
      'Shakespeare’s sonnet opens: “Let me not to the marriage of true minds / Admit impediments.”',
    source: 'Sonnet 116',
    definition: 'Obstacles or barriers',
    distractors: ['Doubts and fears', 'Rules and customs', 'Witnesses or guests'],
  },
  {
    kind: 'in-context',
    word: 'vestige',
    tier: 2,
    group: 'poetry',
    also: ['corruption'],
    sentence:
      'Rossetti’s speaker writes: “For if the darkness and corruption leave / A vestige of the thoughts that once I had”.',
    source: 'Remember',
    definition: 'A small trace that remains',
    distractors: ['A full, clear memory', 'A written record kept', 'A secret, hidden wish'],
  },
  {
    kind: 'in-context',
    word: 'corruption',
    tier: 2,
    group: 'poetry',
    sentence:
      'Rossetti’s speaker imagines her death: “For if the darkness and corruption leave / A vestige of the thoughts that once I had”.',
    source: 'Remember',
    definition: 'Bodily decay after death',
    distractors: ['Dishonesty for money', 'Sickness of the mind', 'Spreading of cruel rumours'],
  },
  {
    kind: 'in-context',
    word: 'stoop',
    tier: 2,
    group: 'poetry',
    sentence: 'The Duke explains why he never corrected his wife: “and I choose / Never to stoop.”',
    source: 'My Last Duchess',
    definition: 'Lower himself in dignity',
    distractors: ['Bend low to the ground', 'Lose his temper in anger', 'Hurry into a decision'],
  },
  {
    kind: 'in-context',
    word: 'sojourn',
    tier: 2,
    group: 'poetry',
    sentence:
      'The knight ends his tale: “And this is why I sojourn here / Alone and palely loitering”.',
    source: 'La Belle Dame sans Merci',
    definition: 'Stay for a while',
    distractors: ['Suffer in silence', 'Hide away in shame', 'Pray for some help'],
  },
  {
    kind: 'in-context',
    word: 'fearful',
    tier: 2,
    group: 'poetry',
    sentence: 'Blake asks what immortal hand or eye “Could frame thy fearful symmetry?”',
    source: 'The Tyger',
    definition: 'Causing fear; terrifying',
    distractors: ['Feeling afraid; nervous', 'Perfectly balanced', 'Wild and quite untamed'],
  },
  {
    kind: 'in-context',
    word: 'Betrays',
    tier: 2,
    group: 'poetry',
    also: ['sibilance', 'insidious'],
    sentence:
      'Lawrence writes: “In spite of myself, the insidious mastery of song / Betrays me back, till the heart of me weeps to belong”.',
    source: 'Piano',
    definition: 'Leads me back against my will',
    distractors: [
      'Reveals my private secret to others',
      'Breaks a promise made to me',
      'Forgives me for the past',
    ],
  },
  {
    kind: 'in-context',
    word: 'impostors',
    tier: 2,
    group: 'poetry',
    sentence:
      'Kipling advises: “If you can meet with Triumph and Disaster / And treat those two impostors just the same”.',
    source: 'If',
    definition: 'Deceivers pretending to be real',
    distractors: [
      'Enemies who attack without warning',
      'Visitors who arrive unexpectedly',
      'Rivals competing for the same prize',
    ],
  },
  {
    kind: 'in-context',
    word: 'hungry',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Caesar warns Antony: “Yond Cassius has a lean and hungry look; / He thinks too much: such men are dangerous.”',
    source: 'Julius Caesar, Act 1 Scene 2',
    definition: 'Greedy for power',
    distractors: ['In need of a meal', 'Thin from an illness', 'Tired and too sleepy'],
  },
  {
    kind: 'in-context',
    word: 'underlings',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Cassius tells Brutus: “The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings.”',
    source: 'Julius Caesar, Act 1 Scene 2',
    definition: 'Lowly people under another’s rule',
    distractors: [
      'Unlucky people born under bad stars',
      'Secret plotters against the state',
      'Young and inexperienced men',
    ],
  },
  {
    kind: 'in-context',
    word: 'sterner',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Antony asks the crowd whether Caesar was ambitious: “Ambition should be made of sterner stuff”.',
    source: 'Julius Caesar, Act 3 Scene 2',
    definition: 'Harder and more ruthless',
    distractors: ['Softer, gentler and kinder', 'Older and much wiser', 'Richer and more costly'],
  },
  {
    kind: 'in-context',
    word: 'rated',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Shylock reminds Antonio: “many a time and oft / In the Rialto you have rated me / About my moneys and my usances.”',
    source: 'The Merchant of Venice, Act 1 Scene 3',
    definition: 'Scolded; told off',
    distractors: ['Judged; given a score', 'Charged; made to pay', 'Avoided and ignored'],
  },
  {
    kind: 'in-context',
    word: 'poniards',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Benedick complains of Beatrice: “She speaks poniards, and every word stabs”.',
    source: 'Much Ado About Nothing, Act 2 Scene 1',
    definition: 'Small daggers',
    distractors: ['Short riddles', 'Quiet prayers', 'Clever puzzles'],
  },
  {
    kind: 'in-context',
    word: 'hoard',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Eliot describes men “whose imaginations, even in the very beginning of their hoard, showed them no purpose beyond it.”',
    source: 'Silas Marner, Chapter 2',
    definition: 'Secret store of saved wealth',
    distractors: ['Crowd of noisy people', 'Daily work at the loom', 'Large family to support'],
  },
  {
    kind: 'in-context',
    word: 'mortify',
    tier: 2,
    group: 'Victorian prose',
    also: ['austere'],
    sentence:
      'Utterson “was austere with himself; drank gin when he was alone, to mortify a taste for vintages”.',
    source: 'Jekyll and Hyde, Story of the Door',
    definition: 'To curb by self-denial',
    distractors: [
      'To embarrass or humiliate',
      'To satisfy and indulge it',
      'To share with his friends',
    ],
  },
  {
    kind: 'in-context',
    word: 'austere',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Stevenson writes of the lawyer Utterson: “He was austere with himself”.',
    source: 'Jekyll and Hyde, Story of the Door',
    definition: 'Strict, denying himself pleasures',
    distractors: [
      'Gentle and forgiving to himself',
      'Proud and pleased with himself',
      'Honest and open about himself',
    ],
  },
  {
    kind: 'in-context',
    word: 'engrosses',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Belle tells the young Scrooge: “I have seen your nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you.”',
    source: 'A Christmas Carol, Stave Two',
    definition: 'Absorbs you completely',
    distractors: ['Disgusts and sickens you', 'Makes you very rich', 'Bores you terribly'],
  },
  {
    kind: 'in-context',
    word: 'genial',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'The Ghost of Christmas Present’s curls are “free as its genial face, its sparkling eye, its open hand, its cheery voice”.',
    source: 'A Christmas Carol, Stave Three',
    definition: 'Friendly and cheerful',
    distractors: ['Clever and cunning', 'Stern and serious', 'Pale and ghostly'],
  },
  {
    kind: 'in-context',
    word: 'incarnadine',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['allusion', 'ironic'],
    sentence:
      'Macbeth says his bloody hand will rather “The multitudinous seas incarnadine, / Making the green one red.”',
    source: 'Macbeth, Act 2 Scene 2',
    definition: 'Turn blood-red',
    distractors: ['Calm and quieten', 'Stir into storms', 'Wash quite clean'],
  },
  {
    kind: 'in-context',
    word: 'even-handed',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['soliloquy'],
    sentence:
      'Macbeth fears that “This even-handed justice / Commends th’ ingredience of our poison’d chalice / To our own lips.”',
    source: 'Macbeth, Act 1 Scene 7',
    definition: 'Fair, treating all alike',
    distractors: ['Quick and merciless', 'Hidden from all eyes', 'Skilled with both hands'],
  },
  {
    kind: 'in-context',
    word: 'sticking-place',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence:
      'Lady Macbeth tells her husband: “But screw your courage to the sticking-place, / And we’ll not fail.”',
    source: 'Macbeth, Act 1 Scene 7',
    definition: 'The point where it holds firm',
    distractors: [
      'The place where they will meet',
      'The moment of greatest danger',
      'The spot where Duncan sleeps',
    ],
  },
  {
    kind: 'in-context',
    word: 'automaton',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Watson, shocked by Holmes’s coldness, says: “You really are an automaton”.',
    source: 'The Sign of Four, Chapter 2',
    definition: 'A machine-like person without feeling',
    distractors: [
      'A genius who solves every problem',
      'A fussy person obsessed with detail',
      'A lonely person who avoids company',
    ],
  },
  {
    kind: 'in-context',
    word: 'disillusionment',
    tier: 2,
    group: 'Victorian prose',
    also: ['complacency', 'unsympathetic'],
    sentence:
      'After describing the Martians’ plans, Wells writes: “And early in the twentieth century came the great disillusionment.”',
    source: 'The War of the Worlds, Book One, Chapter 1',
    definition: 'Losing a comforting false belief',
    distractors: [
      'A time of magic and wonder',
      'A sudden burst of new hope for all',
      'A great feeling of confusion',
    ],
  },
  {
    kind: 'in-context',
    word: 'wretch',
    tier: 2,
    group: 'Victorian prose',
    also: ['inarticulate'],
    sentence: 'By the light of the moon, Victor writes, “I beheld the wretch” he had created.',
    source: 'Frankenstein, Chapter 5',
    definition: 'A miserable, despised creature',
    distractors: [
      'A powerful, noble and gentle being',
      'A sleeping, helpless baby',
      'A ghost from his own past',
    ],
  },
  {
    kind: 'in-context',
    word: 'regard',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['tormented', 'ironic'],
    sentence:
      'Lady Macbeth tells her husband: “Things without all remedy / Should be without regard: what’s done is done.”',
    source: 'Macbeth, Act 3 Scene 2',
    definition: 'Thought or attention',
    distractors: ['Respect or admiration', 'A kind and warm greeting', 'Proper punishment for it'],
  },
  {
    kind: 'in-context',
    word: 'Ides',
    tier: 2,
    group: 'Shakespeare’s English',
    also: ['dramatic irony'],
    sentence: 'A soothsayer calls out to Caesar in the crowd: “Beware the Ides of March.”',
    source: 'Julius Caesar, Act 1 Scene 2',
    definition: 'The fifteenth day of March',
    distractors: ['The first day of spring', 'A day of public mourning', 'The last day of winter'],
  },
  {
    kind: 'in-context',
    word: 'fathom',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Ariel sings to Ferdinand of his father: “Full fathom five thy father lies.”',
    source: 'The Tempest, Act 1 Scene 2',
    definition: 'A unit of depth in water',
    distractors: ['A great sadness or grief', 'A way of understanding', 'A ghost or a spirit'],
  },
  {
    kind: 'in-context',
    word: 'cite',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Antonio warns Bassanio: “The devil can cite Scripture for his purpose.”',
    source: 'The Merchant of Venice, Act 1 Scene 3',
    definition: 'Quote to back up a point',
    distractors: ['Twist into nonsense', 'Read aloud in church', 'Sight or see clearly'],
  },
  {
    kind: 'in-context',
    word: 'glisters',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'The scroll in the gold casket warns: “All that glisters is not gold”.',
    source: 'The Merchant of Venice, Act 2 Scene 7',
    definition: 'Shines or sparkles',
    distractors: ['Costs a huge amount', 'Is very heavy to lift', 'Is kept locked away'],
  },
  {
    kind: 'in-context',
    word: 'disgust',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'At first Darcy is admired, “till his manners gave a disgust which turned the tide of his popularity”.',
    source: 'Pride and Prejudice, Chapter 3',
    definition: 'Strong dislike and disapproval',
    distractors: [
      'Physical sickness and nausea',
      'Sudden sharp embarrassment',
      'Quiet, respectful admiration',
    ],
  },
  {
    kind: 'in-context',
    word: 'sanguine',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Planning Herbert’s future, Pip writes that he was glad for his friend, “Without being sanguine as to my own part in those bright plans”.',
    source: 'Great Expectations, Chapter 52',
    definition: 'Hopeful and optimistic',
    distractors: ['Jealous and very resentful', 'Proud and boastful', 'Anxious and fearful'],
  },
  {
    kind: 'in-context',
    word: 'imperious',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Jane says of Rochester: “yet he was imperious sometimes still; but I did not mind that; I saw it was his way.”',
    source: 'Jane Eyre, Chapter 15',
    definition: 'Proud and commanding',
    distractors: ['Rude and clumsy', 'Shy and awkward', 'Gloomy and hard to read'],
  },
  {
    kind: 'in-context',
    word: 'melancholy',
    tier: 2,
    group: 'Victorian prose',
    also: ['melancholic'],
    sentence:
      'Walton describes the stranger he has rescued from the ice: “But he is generally melancholy and despairing”.',
    source: 'Frankenstein, Letter 4',
    definition: 'Deeply and quietly sad',
    distractors: ['Angry, bitter and resentful', 'Calm and contented', 'Ill and very feverish'],
  },
  {
    kind: 'in-context',
    word: 'magnanimity',
    tier: 2,
    group: 'Victorian prose',
    also: ['magnanimous'],
    sentence:
      'Rochester tells Jane: “I should have appealed to your nobleness and magnanimity at first, as I do now”.',
    source: 'Jane Eyre, Chapter 27',
    definition: 'Generosity of spirit',
    distractors: ['Love of great wealth', 'Quickness of mind', 'Strength of body'],
  },
  {
    kind: 'in-context',
    word: 'hypocrisy',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Hyde’s housekeeper, Stevenson writes, “had an evil face, smoothed by hypocrisy: but her manners were excellent.”',
    source: 'Jekyll and Hyde, The Carew Murder Case',
    definition: 'A false show of goodness',
    distractors: [
      'Deep and very honest sorrow',
      'A habit of telling many jokes',
      'A fear of being found out',
    ],
  },
  {
    kind: 'in-context',
    word: 'cynical',
    tier: 2,
    group: 'Victorian prose',
    also: ['sardonic'],
    sentence:
      'Benjamin the donkey, Orwell writes, “seldom talked, and when he did, it was usually to make some cynical remark”.',
    source: 'Animal Farm, Chapter 1',
    definition: 'Expecting the worst of everyone',
    distractors: [
      'Cheerful and full of hope',
      'Cruel and deliberately hurtful',
      'Puzzling and hard to follow',
    ],
  },
  {
    kind: 'in-context',
    word: 'obstinate',
    tier: 2,
    group: 'Victorian prose',
    also: ['cynical'],
    sentence:
      "After the Rebellion, Benjamin “did his work in the same slow obstinate way as he had done it in Jones's time”.",
    source: 'Animal Farm, Chapter 3',
    definition: 'Stubborn and unwilling to change',
    distractors: [
      'Careless and full of mistakes',
      'Cheerful and full of energy',
      'Secretive and rather sly',
    ],
  },
  {
    kind: 'in-context',
    word: 'maxim',
    tier: 2,
    group: 'Victorian prose',
    sentence: 'Snowball says the Seven Commandments can be “reduced to a single maxim”.',
    source: 'Animal Farm, Chapter 3',
    definition: 'A short rule or saying',
    distractors: [
      'A long and formal speech',
      'A written law of the land',
      'A secret password or code',
    ],
  },
  {
    kind: 'in-context',
    word: 'unanimous',
    tier: 2,
    group: 'Victorian prose',
    also: ['magnanimous'],
    sentence:
      'Orwell writes: “A unanimous resolution was passed on the spot that the farmhouse should be preserved as a museum.”',
    source: 'Animal Farm, Chapter 2',
    definition: 'Agreed by everyone',
    distractors: ['Proposed by the pigs', 'Passed by a majority', 'Kept secret from all'],
  },
  {
    kind: 'in-context',
    word: 'tyranny',
    tier: 2,
    group: 'Victorian prose',
    also: ['tyrannical'],
    sentence:
      'Old Major tells the animals that “all the evils of this life of ours spring from the tyranny of human beings”.',
    source: 'Animal Farm, Chapter 1',
    definition: 'Cruel and unjust rule',
    distractors: [
      'Laziness and long neglect',
      'Greed for all good things',
      'Foolishness and errors',
    ],
  },
  {
    kind: 'in-context',
    word: 'vivacious',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'Orwell writes: “Snowball was a more vivacious pig than Napoleon, quicker in speech and more inventive”.',
    source: 'Animal Farm, Chapter 2',
    definition: 'Lively and full of energy',
    distractors: ['Violent and dangerous', 'Greedy and quite selfish', 'Quiet and thoughtful'],
  },
  {
    kind: 'in-context',
    word: 'indefatigable',
    tier: 2,
    group: 'Victorian prose',
    also: ['vivacious'],
    sentence: 'Organising the animals into committees, Snowball “was indefatigable at this.”',
    source: 'Animal Farm, Chapter 3',
    definition: 'Tireless and never giving up',
    distractors: [
      'Clumsy and quite unsuccessful',
      'Bored and quite unwilling',
      'Proud and rather boastful',
    ],
  },
  {
    kind: 'in-context',
    word: 'ruthlessly',
    tier: 2,
    group: 'Victorian prose',
    sentence:
      'When the hens rebel by smashing their eggs, “Napoleon acted swiftly and ruthlessly.”',
    source: 'Animal Farm, Chapter 7',
    definition: 'Without mercy or pity',
    distractors: ['With great care and skill', 'Without any planning', 'With deep regret'],
  },
  {
    kind: 'in-context',
    word: 'apathy',
    tier: 2,
    group: 'Victorian prose',
    also: ['pathos'],
    sentence: 'At first, the pigs’ secret meetings “met with much stupidity and apathy.”',
    source: 'Animal Farm, Chapter 2',
    definition: 'Lack of interest or concern',
    distractors: [
      'Anger and very open hostility',
      'Fear of being punished',
      'Excited, eager enthusiasm',
    ],
  },
  {
    kind: 'in-context',
    word: 'loitering',
    tier: 2,
    group: 'poetry',
    also: ['sojourn', 'saturates', 'complements'],
    sentence:
      'Keats’s speaker asks the knight what ails him, seeing him “Alone and palely loitering”.',
    source: 'La Belle Dame sans Merci',
    definition: 'Lingering without purpose',
    distractors: ['Hurrying away very anxiously', 'Hiding away in fear', 'Weeping very quietly'],
  },
  {
    kind: 'in-context',
    word: 'insidious',
    tier: 2,
    group: 'poetry',
    also: ['betrays', 'sibilance', 'surrenders'],
    sentence: 'Lawrence feels “the insidious mastery of song” drawing him back to childhood.',
    source: 'Piano',
    definition: 'Working secretly and harmfully',
    distractors: [
      'Loud, sudden and forceful',
      'Sweet, gentle and wholly comforting',
      'Clumsy and badly played',
    ],
  },
  {
    kind: 'in-context',
    word: 'Present',
    tier: 2,
    group: 'Shakespeare’s English',
    sentence: 'Macbeth admits in an aside: “Present fears / Are less than horrible imaginings.”',
    source: 'Macbeth, Act 1 Scene 3',
    definition: 'Real and in front of him now',
    distractors: [
      'Offered to him as gifts',
      'Shown openly to other people',
      'Absent but remembered',
    ],
  },
  {
    kind: 'in-context',
    word: 'double-dealer',
    tier: 2,
    group: 'Victorian prose',
    also: ['hypocrisy', 'duality', 'encapsulates'],
    sentence:
      'Jekyll insists: “Though so profound a double-dealer, I was in no sense a hypocrite”.',
    source: 'Jekyll and Hyde, Henry Jekyll’s Full Statement of the Case',
    definition: 'Someone who deceives by acting two ways',
    distractors: [
      'Someone who trades in two cities',
      'Someone who doubles every bet at cards',
      'Someone who works two jobs at once',
    ],
  },
  {
    kind: 'in-context',
    word: 'rime',
    tier: 2,
    group: 'Victorian prose',
    also: ['covetous', 'impenetrable', 'connotation'],
    sentence:
      'Dickens writes of Scrooge: “A frosty rime was on his head, and on his eyebrows, and his wiry chin.”',
    source: 'A Christmas Carol, Stave One',
    definition: 'A coating of white frost',
    distractors: ['A short rhyming poem', 'A shabby old woollen hat', 'A thin scattering of hair'],
  },

  // ─── Tier 3: the precise word for a sentence of analysis ───────────────────
  // The word is the answer, so the page shows only the sentence. Each wrong
  // option is a real word students reach for that does not fit THIS sentence:
  // a vague verb, a near neighbour with the wrong meaning, or a word it is
  // confused with (precede and proceed, imply and infer, affect and effect).
  // Copyright texts are described in the site's own words, never quoted.
  {
    kind: 'precise-word',
    word: 'exposes',
    tier: 3,
    group: 'analysis verbs',
    also: ['dramatic irony', 'sardonic', 'satire'],
    sentence:
      'Priestley ___ Birling’s arrogance through dramatic irony: the audience already knows that the Titanic sank.',
    definition: 'exposes',
    distractors: ['excuses', 'narrates', 'states'],
  },
  {
    kind: 'precise-word',
    word: 'undermined',
    tier: 3,
    group: 'analysis verbs',
    also: ['undermines'],
    sentence:
      'Mrs Birling insists that the father of Eva’s child should be made an example of; her certainty is ___ when that father turns out to be her own son.',
    definition: 'undermined',
    distractors: ['underlined', 'overlooked', 'confirmed'],
  },
  {
    kind: 'precise-word',
    word: 'foregrounds',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'By showing one goose, “Eked out by apple-sauce and mashed potatoes”, feeding the whole family, Dickens ___ the Cratchits’ poverty.',
    source: 'A Christmas Carol, Stave Three',
    definition: 'foregrounds',
    distractors: ['foreshadows', 'forewarns', 'overlooks'],
  },
  {
    kind: 'precise-word',
    word: 'conveys',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'The short, broken sentences ___ the narrator’s rising panic far better than any description of it could.',
    definition: 'conveys',
    distractors: ['conceals', 'consoles', 'confines'],
  },
  {
    kind: 'precise-word',
    word: 'callous',
    tier: 3,
    group: 'character',
    also: ['tone'],
    sentence:
      'Scrooge’s ___ question, “Are there no prisons?”, shows how little he cares whether the poor live or die.',
    source: 'A Christmas Carol, Stave One',
    definition: 'callous',
    distractors: ['cautious', 'curious', 'cordial'],
  },
  {
    kind: 'precise-word',
    word: 'parallels',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'Sheila’s growing guilt ___ Eric’s: both children accept their part in Eva’s death while their parents refuse to.',
    definition: 'parallels',
    distractors: ['contrasts', 'reverses', 'resolves'],
  },
  {
    kind: 'precise-word',
    word: 'foreshadows',
    tier: 3,
    group: 'structure',
    also: ['foreshadowing', 'ominous', 'foreboding'],
    sentence:
      'The bloody dagger Macbeth sees before he kills Duncan ___ the murder he is about to commit.',
    definition: 'foreshadows',
    distractors: ['recollects', 'postpones', 'prohibits'],
  },
  {
    kind: 'precise-word',
    word: 'critiques',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'Priestley ___ the Edwardian class system by showing how easily the Birlings ruin a working-class girl’s life.',
    definition: 'critiques',
    distractors: ['celebrates', 'preserves', 'imitates'],
  },
  {
    kind: 'precise-word',
    word: 'dehumanises',
    tier: 3,
    group: 'analysis verbs',
    sentence: 'Stevenson’s description of Hyde’s “ape-like fury” ___ him.',
    source: 'Jekyll and Hyde, The Carew Murder Case',
    definition: 'dehumanises',
    distractors: ['humanises', 'personifies', 'glamorises'],
  },
  {
    kind: 'precise-word',
    word: 'reinforces',
    tier: 3,
    group: 'analysis verbs',
    also: ['undercuts', 'explicit'],
    sentence:
      'The Inspector’s final speech ___ Priestley’s message: what the questioning has shown, he now states as a warning.',
    definition: 'reinforces',
    distractors: ['undercuts', 'contradicts', 'disguises'],
  },
  {
    kind: 'precise-word',
    word: 'precedes',
    tier: 3,
    group: 'structure',
    sentence:
      'The family’s celebration dinner ___ the Inspector’s arrival, so his visit shatters their happy evening.',
    definition: 'precedes',
    distractors: ['proceeds', 'succeeds', 'recedes'],
  },
  {
    kind: 'precise-word',
    word: 'implies',
    tier: 3,
    group: 'analysis verbs',
    also: ['infers'],
    sentence:
      'By describing the empty chair at the dinner table, the writer ___ that someone is missing from the family.',
    definition: 'implies',
    distractors: ['infers', 'insists', 'ignores'],
  },
  {
    kind: 'precise-word',
    word: 'infers',
    tier: 3,
    group: 'analysis verbs',
    also: ['reticent'],
    sentence:
      'From the way she talks to anyone who will listen, the reader ___ that Curley’s wife is desperately lonely.',
    definition: 'infers',
    distractors: ['implies', 'informs', 'intends'],
  },
  {
    kind: 'precise-word',
    word: 'alludes',
    tier: 3,
    group: 'imagery',
    also: ['allusion'],
    sentence:
      'When the boys first find their island, full of ripe fruit and untouched by adults, Golding ___ to the Garden of Eden.',
    definition: 'alludes',
    distractors: ['eludes', 'deludes', 'intrudes'],
  },
  {
    kind: 'precise-word',
    word: 'evokes',
    tier: 3,
    group: 'analysis verbs',
    also: ['evocative'],
    sentence:
      'Stevenson’s “The fog still slept on the wing above the drowned city” ___ a London that feels sinister and half-dead.',
    source: 'Jekyll and Hyde, Incident of the Letter',
    definition: 'evokes',
    distractors: ['invokes', 'revokes', 'erodes'],
  },
  {
    kind: 'precise-word',
    word: 'complements',
    tier: 3,
    group: 'analysis verbs',
    also: ['mood'],
    sentence:
      'Keats’s bare landscape, where “The sedge is withered from the lake, / And no birds sing”, ___ the knight’s despair.',
    source: 'La Belle Dame sans Merci',
    definition: 'complements',
    distractors: ['compliments', 'contradicts', 'comprises'],
  },
  {
    kind: 'precise-word',
    word: 'affects',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'Fear of what the Inspector knows ___ each member of the Birling family in a different way.',
    definition: 'affects',
    distractors: ['effects', 'deflects', 'reflects'],
  },
  {
    kind: 'precise-word',
    word: 'cautious',
    tier: 3,
    group: 'character',
    also: ['tone'],
    sentence:
      'Juliet’s ___ plea, “O swear not by the moon, th’inconstant moon”, shows she fears that Romeo’s love may prove changeable.',
    source: 'Romeo and Juliet, Act 2 Scene 2',
    definition: 'cautious',
    distractors: ['careless', 'caustic', 'boastful'],
  },
  {
    kind: 'precise-word',
    word: 'scornful',
    tier: 3,
    group: 'character',
    also: ['sardonic'],
    sentence:
      'Lady Macbeth’s ___ question, “Was the hope drunk / Wherein you dress’d yourself?”, shames her husband into keeping his promise.',
    source: 'Macbeth, Act 1 Scene 7',
    definition: 'scornful',
    distractors: ['sincere', 'soothing', 'pleading'],
  },
  {
    kind: 'precise-word',
    word: 'destructive',
    tier: 3,
    group: 'ideas and context',
    sentence:
      'Shelley presents Victor’s ambition as ___: his wish to conquer death leads only to the deaths of those he loves.',
    definition: 'destructive',
    distractors: ['constructive', 'obstructive', 'restrictive'],
  },
  {
    kind: 'precise-word',
    word: 'idealises',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'Dickens ___ Fezziwig’s Christmas party, with its music, dancing and kindness, as a model of how an employer should treat his staff.',
    definition: 'idealises',
    distractors: ['satirises', 'condemns', 'dismisses'],
  },
  {
    kind: 'precise-word',
    word: 'satirises',
    tier: 3,
    group: 'analysis verbs',
    also: ['satire', 'cyclical structure'],
    sentence:
      'Orwell ___ the leaders of the Russian Revolution by turning them into pigs who end up walking on two legs.',
    definition: 'satirises',
    distractors: ['idealises', 'flatters', 'sanctifies'],
  },
  {
    kind: 'precise-word',
    word: 'complacent',
    tier: 3,
    group: 'character',
    also: ['complacency'],
    sentence:
      'Birling’s ___ claim, in 1912, that there will be no war invites the audience to laugh at him.',
    definition: 'complacent',
    distractors: ['compliant', 'competent', 'contented'],
  },
  {
    kind: 'precise-word',
    word: 'penitent',
    tier: 3,
    group: 'character',
    sentence:
      'Unlike her parents, Sheila ends the play ___: she accepts her share of the blame and refuses to forget it.',
    definition: 'penitent',
    distractors: ['petulant', 'pertinent', 'prudent'],
  },
  {
    kind: 'precise-word',
    word: 'defiant',
    tier: 3,
    group: 'character',
    sentence:
      'Eva Smith’s ___ part in the strike for higher wages gets her sacked from Birling’s works.',
    definition: 'defiant',
    distractors: ['docile', 'devious', 'dutiful'],
  },
  // On a line from a text out of UK copyright, quoted as the held edition prints it.
  {
    kind: 'precise-word',
    word: 'impenetrable',
    tier: 3,
    group: 'character',
    sentence: 'Dickens’s simile “solitary as an oyster” presents Scrooge as closed and ___.',
    source: 'A Christmas Carol, Stave One',
    definition: 'impenetrable',
    distractors: ['impressionable', 'impressive', 'imperceptible'],
  },
  {
    kind: 'precise-word',
    word: 'adopted',
    tier: 3,
    group: 'analysis verbs',
    also: ['beguile'],
    sentence:
      'Macbeth’s closing couplet, “False face must hide what the false heart doth know”, shows that he has now ___ his wife’s way of thinking.',
    source: 'Macbeth, Act 1 Scene 7',
    definition: 'adopted',
    distractors: ['adapted', 'deserted', 'rejected'],
  },
  {
    kind: 'precise-word',
    word: 'assertive',
    tier: 3,
    group: 'character',
    sentence:
      'Jane’s ___ reply to Rochester, “I am no bird; and no net ensnares me”, insists on her freedom.',
    source: 'Jane Eyre, Chapter 23',
    definition: 'assertive',
    distractors: ['submissive', 'evasive', 'apologetic'],
  },
  {
    kind: 'precise-word',
    word: 'snobbish',
    tier: 3,
    group: 'character',
    also: ['welded'],
    sentence:
      'Embarrassed by Joe’s manners in front of Herbert, Pip treats him in a ___ way, which shows how ambition has changed him.',
    definition: 'snobbish',
    distractors: ['generous', 'patient', 'grateful'],
  },
  {
    kind: 'precise-word',
    word: 'manipulative',
    tier: 3,
    group: 'character',
    also: ['propaganda'],
    sentence: 'The animals say that Squealer “could turn black into white”: he is a ___ speaker.',
    source: 'Animal Farm, Chapter 2',
    definition: 'manipulative',
    distractors: ['transparent', 'inarticulate', 'hesitating'],
  },
  {
    kind: 'precise-word',
    word: 'unquestioning',
    tier: 3,
    group: 'character',
    also: ['exploitation'],
    sentence:
      'Boxer’s ___ loyalty, summed up in his motto “I will work harder”, makes his fate all the more tragic.',
    source: 'Animal Farm, Chapter 3',
    definition: 'unquestioning',
    distractors: ['ungrateful', 'unexpected', 'unpredictable'],
  },
  {
    kind: 'precise-word',
    word: 'tormented',
    tier: 3,
    group: 'character',
    also: ['ironic'],
    sentence:
      'Sleepwalking, Lady Macbeth says “all the perfumes of Arabia will not sweeten this little hand”: a mind ___ by guilt.',
    source: 'Macbeth, Act 5 Scene 1',
    definition: 'tormented',
    distractors: ['tempted', 'trained', 'tolerated'],
  },
  {
    kind: 'precise-word',
    word: 'enacts',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'The slow repetition of “Tomorrow, and tomorrow, and tomorrow” ___ the weary sameness of Macbeth’s days.',
    source: 'Macbeth, Act 5 Scene 5',
    definition: 'enacts',
    distractors: ['erases', 'excuses', 'escapes'],
  },
  {
    kind: 'precise-word',
    word: 'elicits',
    tier: 3,
    group: 'analysis verbs',
    also: ['fiend'],
    sentence:
      'The creature’s lament that he is “irrevocably excluded” from the joy he sees everywhere ___ the reader’s sympathy.',
    source: 'Frankenstein, Chapter 10',
    definition: 'elicits',
    distractors: ['evades', 'erases', 'exhausts'],
  },
  {
    kind: 'precise-word',
    word: 'encapsulates',
    tier: 3,
    group: 'analysis verbs',
    also: ['duality'],
    sentence:
      'Jekyll’s conclusion “that man is not truly one, but truly two” ___ the novel’s central idea of a divided self.',
    source: 'Jekyll and Hyde, Henry Jekyll’s Full Statement of the Case',
    definition: 'encapsulates',
    distractors: ['exaggerates', 'contradicts', 'complicates'],
  },
  {
    kind: 'precise-word',
    word: 'self-absorbed',
    tier: 3,
    group: 'character',
    also: ['repression'],
    sentence:
      'Darcy opens his first proposal with “In vain have I struggled. It will not do”, a strikingly ___ beginning.',
    source: 'Pride and Prejudice, Chapter 34',
    definition: 'self-absorbed',
    distractors: ['self-effacing', 'light-hearted', 'tongue-tied'],
  },
  {
    kind: 'precise-word',
    word: 'antithetical',
    tier: 3,
    group: 'ideas and context',
    also: ['antithesis'],
    sentence:
      'Fred’s view of Christmas as “a kind, forgiving, charitable, pleasant time” is ___ to Scrooge’s “a time for paying bills without money”.',
    source: 'A Christmas Carol, Stave One',
    definition: 'antithetical',
    distractors: ['sympathetic', 'incidental', 'identical'],
  },
  {
    kind: 'precise-word',
    word: 'prophetic',
    tier: 3,
    group: 'structure',
    sentence:
      'Friar Laurence’s ___ warning, “These violent delights have violent ends”, proves tragically accurate.',
    source: 'Romeo and Juliet, Act 2 Scene 6',
    definition: 'prophetic',
    distractors: ['pathetic', 'prosaic', 'paradoxical'],
  },
  {
    kind: 'precise-word',
    word: 'sceptical',
    tier: 3,
    group: 'character',
    also: ['cynical'],
    sentence:
      'Banquo’s ___ response, that “instruments of darkness tell us truths” to lead us to harm, contrasts with Macbeth’s eagerness.',
    source: 'Macbeth, Act 1 Scene 3',
    definition: 'sceptical',
    distractors: ['spiteful', 'sentimental', 'submissive'],
  },
  {
    kind: 'precise-word',
    word: 'instinctive',
    tier: 3,
    group: 'character',
    also: ['visceral'],
    sentence:
      'Enfield’s ___ reaction to Hyde, “I never saw a man I so disliked, and yet I scarce know why”, makes his evil seem beyond explanation.',
    source: 'Jekyll and Hyde, Story of the Door',
    definition: 'instinctive',
    distractors: ['indifferent', 'insincere', 'intellectual'],
  },
  {
    kind: 'precise-word',
    word: 'selfless',
    tier: 3,
    group: 'poetry',
    also: ['vestige', 'corruption', 'volta'],
    sentence:
      'Rossetti’s ending, “Better by far you should forget and smile / Than that you should remember and be sad”, makes the speaker’s love ___.',
    source: 'Remember',
    definition: 'selfless',
    distractors: ['selfish', 'spiteful', 'sarcastic'],
  },
  {
    kind: 'precise-word',
    word: 'poses',
    tier: 3,
    group: 'analysis verbs',
    also: ['fearful'],
    sentence:
      'Blake’s question “Did he who made the lamb make thee?” ___ the problem of how one creator could make both gentleness and terror.',
    source: 'The Tyger',
    definition: 'poses',
    distractors: ['solves', 'hides', 'mocks'],
  },
  {
    kind: 'precise-word',
    word: 'euphemism',
    tier: 3,
    group: 'word choice',
    also: ['stoop', 'enjambment'],
    sentence:
      'The Duke’s chilling ___, “I gave commands; / Then all smiles stopped together”, hints at murder without naming it.',
    source: 'My Last Duchess',
    definition: 'euphemism',
    distractors: ['hyperbole', 'oxymoron', 'paradox'],
  },
  {
    kind: 'precise-word',
    word: 'saturates',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'The repeated “pale” in “Pale warriors, death-pale were they all” ___ the knight’s dream with death.',
    source: 'La Belle Dame sans Merci',
    definition: 'saturates',
    distractors: ['separates', 'celebrates', 'satisfies'],
  },
  {
    kind: 'precise-word',
    word: 'surrenders',
    tier: 3,
    group: 'analysis verbs',
    also: ['betrays', 'sibilance'],
    sentence: 'Lawrence ___ his adult pride when he admits “I weep like a child for the past.”',
    source: 'Piano',
    definition: 'surrenders',
    distractors: ['celebrates', 'conceals', 'reinforces'],
  },
  {
    kind: 'precise-word',
    word: 'rebellious',
    tier: 3,
    group: 'character',
    sentence:
      'Dragged to the red-room, Jane says she “resisted all the way: a new thing for me”, the moment she first turns ___.',
    source: 'Jane Eyre, Chapter 2',
    definition: 'rebellious',
    distractors: ['obedient', 'grateful', 'forgetful'],
  },
  {
    kind: 'precise-word',
    word: 'absolute',
    tier: 3,
    group: 'character',
    sentence: 'Holmes’s claim, “An exception disproves the rule”, shows his ___ faith in logic.',
    source: 'The Sign of Four, Chapter 2',
    definition: 'absolute',
    distractors: ['absent', 'amused', 'anxious'],
  },
  {
    kind: 'precise-word',
    word: 'bleak',
    tier: 3,
    group: 'tone',
    sentence:
      'In the last stanza, “Now, he will spend a few sick years in Institutes” gives the soldier a ___ future.',
    source: 'Disabled',
    definition: 'bleak',
    distractors: ['bright', 'jolly', 'grand'],
  },
  {
    kind: 'precise-word',
    word: 'juxtaposes',
    tier: 3,
    group: 'analysis verbs',
    also: ['juxtaposition', 'beguile', 'adopted'],
    sentence:
      'Lady Macbeth’s advice to “look like the innocent flower, / But be the serpent under’t” ___ appearance and reality.',
    source: 'Macbeth, Act 1 Scene 5',
    definition: 'juxtaposes',
    distractors: ['justifies', 'jeopardises', 'generalises'],
  },
  {
    kind: 'precise-word',
    word: 'substitute',
    tier: 3,
    group: 'ideas and context',
    also: ['hoard'],
    sentence: 'Eliot presents Silas’s hoard of gold as a ___ for the love and faith he has lost.',
    definition: 'substitute',
    distractors: ['sacrifice', 'stimulus', 'safeguard'],
  },
  {
    kind: 'precise-word',
    word: 'conceals',
    tier: 3,
    group: 'analysis verbs',
    also: ['aside'],
    sentence:
      'Macbeth’s aside, “Let not light see my black and deep desires”, shows the audience the ambition he ___ from Duncan’s court.',
    source: 'Macbeth, Act 1 Scene 4',
    definition: 'conceals',
    distractors: ['confesses', 'concedes', 'conveys'],
  },
  {
    kind: 'precise-word',
    word: 'paradoxical',
    tier: 3,
    group: 'imagery',
    also: ['paradox'],
    sentence:
      'Juliet’s cry, “My only love sprung from my only hate”, is ___: love and hatred are bound into one line.',
    source: 'Romeo and Juliet, Act 1 Scene 5',
    definition: 'paradoxical',
    distractors: ['predictable', 'patronising', 'proverbial'],
  },
  {
    kind: 'precise-word',
    word: 'exuberant',
    tier: 3,
    group: 'tone',
    sentence:
      'Scrooge’s ___ similes on Christmas morning, “I am as light as a feather, I am as happy as an angel”, show how completely he has changed.',
    source: 'A Christmas Carol, Stave Five',
    definition: 'exuberant',
    distractors: ['exhausted', 'embittered', 'evasive'],
  },
  {
    kind: 'precise-word',
    word: 'heighten',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'The slow adverbs in “Phantom slowly, gravely, silently, approached” ___ the reader’s sense of dread.',
    source: 'A Christmas Carol, Stave Four',
    definition: 'heighten',
    distractors: ['lighten', 'loosen', 'shorten'],
  },
  {
    kind: 'precise-word',
    word: 'identifies',
    tier: 3,
    group: 'analysis verbs',
    also: ['fearful', 'coarse'],
    sentence:
      'Pip’s first sight of Magwitch, “A fearful man, all in coarse grey, with a great iron on his leg”, ___ him at once as an escaped convict.',
    source: 'Great Expectations, Chapter 1',
    definition: 'identifies',
    distractors: ['disguises', 'glorifies', 'forgives'],
  },
  {
    kind: 'precise-word',
    word: 'epiphany',
    tier: 3,
    group: 'structure',
    sentence:
      'Elizabeth’s cry after reading Darcy’s letter, “Till this moment, I never knew myself”, marks her ___.',
    source: 'Pride and Prejudice, Chapter 36',
    definition: 'epiphany',
    distractors: ['prophecy', 'nemesis', 'denouement'],
  },
  {
    kind: 'precise-word',
    word: 'intimate',
    tier: 3,
    group: 'narrative voice',
    sentence:
      'The ___ address of “Reader, I married him” draws us close to Jane at the very end of her story.',
    source: 'Jane Eyre, Chapter 38',
    definition: 'intimate',
    distractors: ['impersonal', 'indirect', 'ironic'],
  },
  {
    kind: 'precise-word',
    word: 'menacing',
    tier: 3,
    group: 'tone',
    sentence:
      'The creature’s ___ warning, “Beware; for I am fearless, and therefore powerful”, shows how rejection has turned to threat.',
    source: 'Frankenstein, Chapter 20',
    definition: 'menacing',
    distractors: ['merciful', 'mournful', 'modest'],
  },
  {
    kind: 'precise-word',
    word: 'deductive',
    tier: 3,
    group: 'character',
    also: ['infers'],
    sentence:
      'Holmes’s rule, that “when you have eliminated the impossible whatever remains” must be the truth, shows his ___ method.',
    source: 'The Sign of Four, Chapter 6',
    definition: 'deductive',
    distractors: ['seductive', 'destructive', 'defective'],
  },
  {
    kind: 'precise-word',
    word: 'dismissive',
    tier: 3,
    group: 'tone',
    also: ['complacency', 'disillusionment'],
    sentence:
      'Ogilvy’s ___ remark, “The chances against anything manlike on Mars are a million to one”, is soon proved wrong.',
    source: 'The War of the Worlds, Book One, Chapter 1',
    definition: 'dismissive',
    distractors: ['desperate', 'deceitful', 'delighted'],
  },
  {
    kind: 'precise-word',
    word: 'paradox',
    tier: 3,
    group: 'imagery',
    sentence:
      'The last Commandment, “ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS”, uses a ___ to dress up privilege as equality.',
    source: 'Animal Farm, Chapter 10',
    definition: 'paradox',
    distractors: ['parable', 'proverb', 'prologue'],
  },
  {
    kind: 'precise-word',
    word: 'softens',
    tier: 3,
    group: 'word choice',
    also: ['euphemism', 'vestige', 'corruption', 'selfless'],
    sentence: 'Rossetti’s phrase “the silent land” ___ death, making it sound peaceful.',
    source: 'Remember',
    definition: 'softens',
    distractors: ['sharpens', 'shortens', 'stiffens'],
  },
  {
    kind: 'precise-word',
    word: 'possession',
    tier: 3,
    group: 'ideas and context',
    also: ['stoop', 'euphemism', 'dramatic monologue'],
    sentence:
      "The Duke’s opening, “That's my last Duchess painted on the wall”, treats his dead wife as a ___.",
    source: 'My Last Duchess',
    definition: 'possession',
    distractors: ['profession', 'procession', 'permission'],
  },
  {
    kind: 'precise-word',
    word: 'resentful',
    tier: 3,
    group: 'character',
    also: ['profit'],
    sentence:
      'Caliban’s ___ claim, “This island’s mine, by Sycorax my mother”, challenges Prospero’s right to rule.',
    source: 'The Tempest, Act 1 Scene 2',
    definition: 'resentful',
    distractors: ['grateful', 'playful', 'hopeful'],
  },
  {
    kind: 'precise-word',
    word: 'antithesis',
    tier: 3,
    group: 'rhetoric',
    also: ['antithetical'],
    sentence:
      'Brutus’s balanced line, “Not that I loved Caesar less, but that I loved Rome more”, uses ___ to justify the murder.',
    source: 'Julius Caesar, Act 3 Scene 2',
    definition: 'antithesis',
    distractors: ['hyperbole', 'onomatopoeia', 'euphemism'],
  },
  {
    kind: 'precise-word',
    word: 'assert',
    tier: 3,
    group: 'analysis verbs',
    sentence:
      'Shylock’s questions, such as “If you prick us, do we not bleed?”, ___ that Jews and Christians share one humanity.',
    source: 'The Merchant of Venice, Act 3 Scene 1',
    definition: 'assert',
    distractors: ['dispute', 'neglect', 'conceal'],
  },
  {
    kind: 'precise-word',
    word: 'mocking',
    tier: 3,
    group: 'tone',
    also: ['poniards'],
    sentence:
      'Beatrice’s ___ boast, “I had rather hear my dog bark at a crow than a man swear he loves me”, hides feelings she later admits.',
    source: 'Much Ado About Nothing, Act 1 Scene 1',
    definition: 'mocking',
    distractors: ['tender', 'fearful', 'humble'],
  },
  {
    kind: 'precise-word',
    word: 'passive',
    tier: 3,
    group: 'character',
    also: ['bleak'],
    sentence:
      'Owen’s opening, “He sat in a wheeled chair, waiting for dark”, makes the young man seem ___.',
    source: 'Disabled',
    definition: 'passive',
    distractors: ['powerful', 'playful', 'pompous'],
  },
  {
    kind: 'precise-word',
    word: 'contemptuous',
    tier: 3,
    group: 'tone',
    also: ['coarse', 'common'],
    sentence:
      'Estella’s ___ remark, “He calls the knaves, Jacks, this boy”, makes Pip ashamed of how he was brought up.',
    source: 'Great Expectations, Chapter 8',
    definition: 'contemptuous',
    distractors: ['affectionate', 'sympathetic', 'apologetic'],
  },
  {
    kind: 'precise-word',
    word: 'fickle',
    tier: 3,
    group: 'character',
    also: ['impetuous'],
    sentence:
      'Romeo’s question on first seeing Juliet, “Did my heart love till now?”, suggests that his heart is ___, since he loved Rosaline that morning.',
    source: 'Romeo and Juliet, Act 1 Scene 5',
    definition: 'fickle',
    distractors: ['fearful', 'fretful', 'forlorn'],
  },
  {
    kind: 'precise-word',
    word: 'fundamental',
    tier: 3,
    group: 'ideas and context',
    also: ['duality', 'encapsulates', 'double-dealer'],
    sentence:
      'Jekyll’s claim that he learned to recognise “the thorough and primitive duality of man” makes the divided self seem ___ to human nature.',
    source: 'Jekyll and Hyde, Henry Jekyll’s Full Statement of the Case',
    definition: 'fundamental',
    distractors: ['incidental', 'accidental', 'ornamental'],
  },
  {
    kind: 'precise-word',
    word: 'constant',
    tier: 3,
    group: 'poetry',
    also: ['impediments', 'personification'],
    sentence:
      'Shakespeare’s image of love as “the star to every wandering bark” makes love a ___ guide.',
    source: 'Sonnet 116',
    definition: 'constant',
    distractors: ['careless', 'costly', 'clumsy'],
  },
  {
    kind: 'precise-word',
    word: 'radiant',
    tier: 3,
    group: 'poetry',
    also: ['fearful', 'poses'],
    sentence: 'Blake’s opening, “Tyger, tyger, burning bright”, makes the tiger seem ___.',
    source: 'The Tyger',
    definition: 'radiant',
    distractors: ['ragged', 'restful', 'rotten'],
  },
  {
    kind: 'precise-word',
    word: 'limits',
    tier: 3,
    group: 'character',
    sentence:
      'Macbeth’s reply, “I dare do all that may become a man; / Who dares do more is none”, shows he still knows the ___ of a decent man.',
    source: 'Macbeth, Act 1 Scene 7',
    definition: 'limits',
    distractors: ['lusts', 'loves', 'looks'],
  },
  {
    kind: 'precise-word',
    word: 'indignant',
    tier: 3,
    group: 'tone',
    sentence:
      'Lady Catherine’s ___ question, “Are the shades of Pemberley to be thus polluted?”, shows her pride in rank.',
    source: 'Pride and Prejudice, Chapter 56',
    definition: 'indignant',
    distractors: ['innocent', 'inquisitive', 'indifferent'],
  },

  // ─── Tier 3: two terms students confuse, applied to a case ─────────────────
  // The partner term is always among the options, so a student who mixes the
  // pair up is caught; a sentence in single quotation marks is the site's own.
  {
    kind: 'paired-terms',
    word: 'connotation',
    tier: 3,
    group: 'word choice',
    also: ['denotation'],
    sentence:
      'Beyond its plain meaning of low temperature, “cold” carries a ___ of cruelty when Dickens writes that “The cold within him froze his old features”.',
    source: 'A Christmas Carol, Stave One',
    definition: 'connotation',
    distractors: ['denotation', 'onomatopoeia', 'alliteration'],
  },
  {
    kind: 'paired-terms',
    word: 'denotation',
    tier: 2,
    group: 'word choice',
    also: ['connotation'],
    sentence:
      'The ___ of ‘dove’ is simply a kind of bird; peace and gentleness are only what the word suggests.',
    definition: 'denotation',
    distractors: ['connotation', 'etymology', 'inflection'],
  },
  {
    kind: 'paired-terms',
    word: 'analepsis',
    tier: 2,
    group: 'structure',
    also: ['prolepsis', 'frame narrative'],
    sentence:
      'Most of Frankenstein is Victor telling Walton about his past, so the novel’s main story is one long ___.',
    definition: 'analepsis',
    distractors: ['prolepsis', 'epiphany', 'exposition'],
  },
  {
    kind: 'paired-terms',
    word: 'prolepsis',
    tier: 2,
    group: 'structure',
    also: ['analepsis'],
    sentence:
      'In Stave Four, Scrooge is shown a Christmas after his own death: Dickens uses ___ to show what his future holds.',
    definition: 'prolepsis',
    distractors: ['analepsis', 'anaphora', 'catharsis'],
  },
  {
    kind: 'paired-terms',
    word: 'a metaphor',
    tier: 3,
    group: 'imagery',
    also: ['a simile'],
    sentence:
      'Macbeth’s “full of scorpions is my mind” is ___ for the guilt and fear that sting him.',
    source: 'Macbeth, Act 3 Scene 2',
    definition: 'a metaphor',
    distractors: ['a simile', 'a paradox', 'an oxymoron'],
  },
  {
    kind: 'paired-terms',
    word: 'a simile',
    tier: 3,
    group: 'imagery',
    also: ['a metaphor'],
    sentence:
      'Dickens’s “Hard and sharp as flint” is ___ that makes Scrooge’s meanness seem as unyielding as stone.',
    source: 'A Christmas Carol, Stave One',
    definition: 'a simile',
    distractors: ['a metaphor', 'an idiom', 'a symbol'],
  },
  {
    kind: 'paired-terms',
    word: 'pathetic fallacy',
    tier: 3,
    group: 'imagery',
    also: ['personification', 'mood', 'bleak'],
    sentence:
      'On the night his unknown benefactor returns, Pip begins: “It was wretched weather; stormy and wet, stormy and wet”, an example of ___.',
    source: 'Great Expectations, Chapter 39',
    definition: 'pathetic fallacy',
    distractors: ['personification', 'dramatic irony', 'juxtaposition'],
  },
  {
    kind: 'paired-terms',
    word: 'personification',
    tier: 3,
    group: 'imagery',
    also: ['pathetic fallacy', 'fool'],
    sentence:
      'In “Love’s not Time’s fool, though rosy lips and cheeks / Within his bending sickle’s compass come”, Shakespeare uses ___.',
    source: 'Sonnet 116',
    definition: 'personification',
    distractors: ['pathetic fallacy', 'onomatopoeia', 'dramatic irony'],
  },
  {
    kind: 'paired-terms',
    word: 'enjambment',
    tier: 3,
    group: 'poetic form',
    also: ['caesura'],
    sentence:
      'Rossetti’s line break in “you understand / It will be late to counsel then or pray” is an example of ___.',
    source: 'Remember',
    definition: 'enjambment',
    distractors: ['a caesura', 'end-stopping', 'a refrain'],
  },
  {
    kind: 'paired-terms',
    word: 'sibilance',
    tier: 3,
    group: 'sound',
    also: ['plosives', 'mood'],
    sentence:
      'In his opening line, “Softly, in the dusk, a woman is singing to me”, Lawrence uses ___ to create a hushed mood.',
    source: 'Piano',
    definition: 'sibilance',
    distractors: ['plosives', 'assonance', 'enjambment'],
  },
  {
    kind: 'paired-terms',
    word: 'plosives',
    tier: 3,
    group: 'sound',
    also: ['plosive', 'sibilance'],
    sentence:
      'In “Though bladed corn be lodg’d, and trees blown down”, Shakespeare uses ___ to make Macbeth’s demand sound violent.',
    source: 'Macbeth, Act 4 Scene 1',
    definition: 'plosives',
    distractors: ['sibilance', 'assonance', 'enjambment'],
  },
  {
    kind: 'paired-terms',
    word: 'assonance',
    tier: 2,
    group: 'sound',
    also: ['mood'],
    sentence: 'In ‘the slow road home’, the poet uses ___ to stretch the line out wearily.',
    definition: 'assonance',
    distractors: ['consonance', 'sibilance', 'caesuras'],
  },
  {
    kind: 'paired-terms',
    word: 'dramatic irony',
    tier: 3,
    group: 'drama',
    also: ['situational irony'],
    sentence:
      'When Duncan praises Macbeth’s home, “This castle hath a pleasant seat”, the audience, who know of the murder plot, feel the ___.',
    source: 'Macbeth, Act 1 Scene 6',
    definition: 'dramatic irony',
    distractors: ['situational irony', 'verbal irony', 'pathetic fallacy'],
  },
  {
    kind: 'paired-terms',
    word: 'situational irony',
    tier: 2,
    group: 'drama',
    also: ['dramatic irony'],
    sentence:
      'After ten years of hardship to pay for a borrowed diamond necklace that she lost, Mathilde learns it was fake: a classic example of ___.',
    definition: 'situational irony',
    distractors: ['dramatic irony', 'foreshadowing', 'pathetic fallacy'],
  },
  {
    kind: 'paired-terms',
    word: 'antagonist',
    tier: 2,
    group: 'character',
    also: ['protagonist', 'foil'],
    sentence:
      'In the final act, Macduff becomes the ___, the force that rises against the tyrant and defeats him.',
    definition: 'antagonist',
    distractors: ['protagonist', 'comic relief', 'tragic hero'],
  },
  {
    kind: 'paired-terms',
    word: 'protagonist',
    tier: 2,
    group: 'character',
    also: ['antagonist'],
    sentence:
      'Pip, whose journey from blacksmith’s boy to gentleman the novel follows, is the ___ of Great Expectations.',
    definition: 'protagonist',
    distractors: ['antagonist', 'archetype', 'stereotype'],
  },
  {
    kind: 'paired-terms',
    word: 'stereotype',
    tier: 2,
    group: 'character',
    also: ['archetype', 'archetypes'],
    sentence:
      'Presenting every working-class character as lazy and dishonest would rely on a ___, not on observing real people.',
    definition: 'stereotype',
    distractors: ['archetype', 'prototype', 'allegory'],
  },
  {
    kind: 'paired-terms',
    word: 'archetypes',
    tier: 2,
    group: 'character',
    also: ['archetype', 'stereotype'],
    sentence:
      'The wise old mentor who guides a young hero, like Merlin or Gandalf, is one of the oldest ___ in storytelling.',
    definition: 'archetypes',
    distractors: ['stereotypes', 'allegories', 'anachronisms'],
  },
  {
    kind: 'paired-terms',
    word: 'motif',
    tier: 2,
    group: 'imagery',
    also: ['theme'],
    sentence:
      'Images of light in darkness recur throughout Romeo and Juliet, from torches to stars: together they form a ___.',
    definition: 'motif',
    distractors: ['theme', 'genre', 'scene'],
  },
  {
    kind: 'paired-terms',
    word: 'theme',
    tier: 2,
    group: 'imagery',
    also: ['motif'],
    sentence:
      'Love that defies family hatred is a central ___ of Romeo and Juliet, an idea the whole play explores.',
    definition: 'theme',
    distractors: ['motif', 'genre', 'scene'],
  },
  {
    kind: 'paired-terms',
    word: 'mood',
    tier: 3,
    group: 'tone',
    also: ['tone'],
    sentence:
      'Dickens’s “The fog came pouring in at every chink and keyhole” helps to create a gloomy ___ in the reader.',
    source: 'A Christmas Carol, Stave One',
    definition: 'mood',
    distractors: ['tone', 'theme', 'plot'],
  },
  {
    kind: 'paired-terms',
    word: 'tone',
    tier: 3,
    group: 'tone',
    also: ['mood', 'mean'],
    sentence:
      'In “The business of her life was to get her daughters married”, the narrator’s ___ is quietly mocking.',
    source: 'Pride and Prejudice, Chapter 1',
    definition: 'tone',
    distractors: ['mood', 'theme', 'form'],
  },
  {
    kind: 'paired-terms',
    word: 'denouement',
    tier: 2,
    group: 'structure',
    also: ['exposition'],
    sentence:
      'In the final chapter, every secret is revealed and each character’s fate is settled: this is the novel’s ___.',
    definition: 'denouement',
    distractors: ['exposition', 'prologue', 'epiphany'],
  },
  {
    kind: 'paired-terms',
    word: 'bathos',
    tier: 2,
    group: 'tone',
    also: ['pathos'],
    sentence:
      'After the hero’s long, solemn speech about duty, he trips over his own sword in front of everyone: the scene ends in ___.',
    definition: 'bathos',
    distractors: ['pathos', 'climax', 'hubris'],
  },
  {
    kind: 'paired-terms',
    word: 'pathos',
    tier: 3,
    group: 'rhetoric',
    also: ['bathos'],
    sentence:
      'The Spirit’s vision of “a vacant seat” by the Cratchits’ fire, and a crutch kept without its owner, is a moment of ___.',
    source: 'A Christmas Carol, Stave Three',
    definition: 'pathos',
    distractors: ['bathos', 'hubris', 'satire'],
  },
  {
    kind: 'paired-terms',
    word: 'logos',
    tier: 2,
    group: 'rhetoric',
    also: ['ethos', 'pathos'],
    sentence:
      'The writer’s argument rests on statistics and step-by-step reasoning: an appeal to ___.',
    definition: 'logos',
    distractors: ['pathos', 'ethos', 'bathos'],
  },
  {
    kind: 'paired-terms',
    word: 'ethos',
    tier: 2,
    group: 'rhetoric',
    also: ['logos', 'pathos'],
    sentence:
      'The writer opens by mentioning her twenty years as a nurse, so that readers will trust what she says: an appeal to ___.',
    definition: 'ethos',
    distractors: ['logos', 'pathos', 'bathos'],
  },
  {
    kind: 'paired-terms',
    word: 'implicit',
    tier: 2,
    group: 'word choice',
    also: ['explicit'],
    sentence: 'The writer never says the boy is afraid, but his trembling hands make his fear ___.',
    definition: 'implicit',
    distractors: ['explicit', 'literal', 'ironic'],
  },
  {
    kind: 'paired-terms',
    word: 'explicit',
    tier: 2,
    group: 'word choice',
    also: ['implicit'],
    sentence:
      'When Birling says outright that a man must look after himself and his own, his selfishness becomes ___.',
    definition: 'explicit',
    distractors: ['implicit', 'ironic', 'symbolic'],
  },
  {
    kind: 'paired-terms',
    word: 'figuratively',
    tier: 3,
    group: 'imagery',
    also: ['soft'],
    sentence: 'When Romeo says “Juliet is the sun”, he is speaking ___, not stating a fact.',
    source: 'Romeo and Juliet, Act 2 Scene 2',
    definition: 'figuratively',
    distractors: ['literally', 'ironically', 'sarcastically'],
  },
  {
    kind: 'paired-terms',
    word: 'first-person',
    tier: 2,
    group: 'narrative voice',
    also: ['protagonist', 'unreliable'],
    sentence:
      'Great Expectations is told by Pip himself, looking back on his life, so the novel uses ___ narration.',
    definition: 'first-person',
    distractors: ['third-person', 'second-person', 'omniscient'],
  },
  {
    kind: 'paired-terms',
    word: 'omniscient',
    tier: 2,
    group: 'narrative voice',
    also: ['unreliable', 'omniscient narrator'],
    sentence:
      'The narrator moves freely between the private thoughts of every character in the village: this narrator is ___.',
    definition: 'omniscient',
    distractors: ['unreliable', 'first-person', 'objective'],
  },
  {
    kind: 'paired-terms',
    word: 'unreliable',
    tier: 2,
    group: 'narrative voice',
    also: ['omniscient', 'unreliable narrator'],
    sentence:
      'The narrator insists that he is perfectly calm, yet he hears his heart pounding and plans revenge in every line: he is ___.',
    definition: 'unreliable',
    distractors: ['omniscient', 'objective', 'impersonal'],
  },
  {
    kind: 'paired-terms',
    word: 'allusion',
    tier: 3,
    group: 'imagery',
    also: ['alludes', 'ironic'],
    sentence:
      'When Macbeth asks whether “all great Neptune’s ocean” could wash the blood from his hand, Shakespeare makes an ___ to the Roman god of the sea.',
    source: 'Macbeth, Act 2 Scene 2',
    definition: 'allusion',
    distractors: ['illusion', 'allegory', 'analogy'],
  },
  {
    kind: 'paired-terms',
    word: 'blank verse',
    tier: 3,
    group: 'poetic form',
    also: ['iambic pentameter', 'foreshadows'],
    sentence:
      'In Macbeth’s “Is this a dagger which I see before me, / The handle toward my hand?”, Shakespeare writes in ___.',
    source: 'Macbeth, Act 2 Scene 1',
    definition: 'blank verse',
    distractors: ['free verse', 'sonnet form', 'ballad metre'],
  },
  {
    kind: 'paired-terms',
    word: 'soliloquy',
    tier: 3,
    group: 'drama',
    also: ['monologue'],
    sentence:
      'Lady Macbeth’s “Come, you spirits / That tend on mortal thoughts, unsex me here”, spoken when she is alone on stage, is a ___.',
    source: 'Macbeth, Act 1 Scene 5',
    definition: 'soliloquy',
    distractors: ['monologue', 'prologue', 'dialogue'],
  },
  {
    kind: 'paired-terms',
    word: 'monologue',
    tier: 2,
    group: 'drama',
    also: ['soliloquy', 'explicit'],
    sentence:
      'Birling’s long speech to Gerald and Eric about how a man must look after himself, while they listen at the table, is a ___.',
    definition: 'monologue',
    distractors: ['soliloquy', 'prologue', 'dialogue'],
  },
  {
    kind: 'paired-terms',
    word: 'understatement',
    tier: 3,
    group: 'tone',
    sentence:
      'Fatally wounded, Mercutio calls his injury “a scratch, a scratch”: a grim ___ of how serious it is.',
    source: 'Romeo and Juliet, Act 3 Scene 1',
    definition: 'understatement',
    distractors: ['exaggeration', 'alliteration', 'onomatopoeia'],
  },
]

const KIND_LABEL: Record<Exclude<VocabKind, 'meaning'>, string> = {
  'in-context': 'In context',
  'precise-word': 'Precise word',
  'paired-terms': 'Paired terms',
}

export const BANK: GameBank<VocabWord> = {
  slug: 'vocabulary-builder',
  items: VOCAB_BANK,
  // A word's meaning is keyed by the word, as it always was: the key names
  // the question in students' saved results. Every other kind names the kind
  // and the word, so one word can be asked more than one way, and a sentence
  // from a set text names the text as well.
  key: (w) =>
    !w.kind || w.kind === 'meaning'
      ? w.word
      : `${KIND_LABEL[w.kind]}: ${w.word}${w.source ? ` (${w.source.split(',')[0]})` : ''}`,
  answer: (w) => w.definition,
  // The page shows these four in a new order each time.
  options: (w) => [w.definition, ...w.distractors],
  tier: (w) => w.tier,
  // The word and the words tied to it, so a round never asks one word twice
  // or a pair of terms in two questions.
  facts: (w) => [w.word.toLowerCase(), ...(w.also ?? [])],
  group: (w) => w.group,
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
