/**
 * GRAMMAR LAB — original skill-builder reference data for LEH11.
 *
 * Supports the spec's grammar, punctuation and spelling expectations
 * (RAO3/RAO4 reading; WAO2 / writing skill 2.3). Every definition is
 * accurate and written in UK English; every example sentence is an
 * original work composed for The English Hub and is not reproduced from
 * any past paper or copyrighted source.
 *
 * Spec figures, AO codes and skill descriptors are NOT restated here —
 * the consumer page imports those from '@/lib/ilowersecondary/spec'.
 */

// ─── (a) Word-class reference ─────────────────────────────────────────

export interface WordClassEntry {
  /** Stable anchor / key. */
  id: string
  /** Display name of the word class (or sub-class). */
  name: string
  definition: string
  /** Two original example sentences; the target word(s) noted in note. */
  examples: [string, string]
  /** Short clarifying note (e.g. how to spot it, sub-type behaviour). */
  note: string
}

export interface WordClassGroup {
  id: string
  /** Parent class, e.g. "Verbs". */
  name: string
  summary: string
  entries: WordClassEntry[]
}

export const WORD_CLASSES: WordClassGroup[] = [
  {
    id: 'nouns',
    name: 'Nouns',
    summary:
      'A noun names a person, place, thing, idea or feeling. Nouns can be common, proper, abstract or collective.',
    entries: [
      {
        id: 'noun-common',
        name: 'Common noun',
        definition:
          'A common noun names a general type of person, place or thing rather than a specific one, and is not capitalised unless it begins a sentence.',
        examples: [
          'The librarian stacked every returned book onto a wooden trolley.',
          'A cold wind chased the leaves across the empty playground.',
        ],
        note: 'Common nouns here: librarian, book, trolley, wind, leaves, playground.',
      },
      {
        id: 'noun-proper',
        name: 'Proper noun',
        definition:
          'A proper noun names one specific person, place, organisation or title and always begins with a capital letter.',
        examples: [
          'Priya travelled from Manchester to visit the British Library on Saturday.',
          'The charity Riverwatch cleaned the banks of the River Tame in March.',
        ],
        note: 'Proper nouns: Priya, Manchester, British Library, Saturday, Riverwatch, River Tame, March.',
      },
      {
        id: 'noun-abstract',
        name: 'Abstract noun',
        definition:
          'An abstract noun names something that cannot be touched or seen, such as an idea, quality, state or emotion.',
        examples: [
          'Her courage during the storm earned the crew’s lasting respect.',
          'Honesty matters more to him than the comfort of an easy answer.',
        ],
        note: 'Abstract nouns: courage, respect, honesty, comfort.',
      },
      {
        id: 'noun-collective',
        name: 'Collective noun',
        definition:
          'A collective noun names a group of people, animals or things considered as a single unit.',
        examples: [
          'A flock of starlings twisted above the harbour like dark smoke.',
          'The committee finally agreed on a single date for the fair.',
        ],
        note: 'Collective nouns: flock, committee. They usually take a singular verb in UK English when treated as one unit.',
      },
    ],
  },
  {
    id: 'pronouns',
    name: 'Pronouns',
    summary:
      'A pronoun stands in place of a noun to avoid repetition. Types include personal, possessive, relative, demonstrative and reflexive.',
    entries: [
      {
        id: 'pronoun-personal',
        name: 'Personal pronoun',
        definition:
          'A personal pronoun replaces the name of a person or thing (for example I, you, he, she, it, we, they).',
        examples: [
          'When Daniel finished the race, he could barely lift his arms.',
          'The twins laughed because they had given identical answers.',
        ],
        note: 'Personal pronouns: he, they (replacing Daniel and the twins).',
      },
      {
        id: 'pronoun-possessive',
        name: 'Possessive pronoun',
        definition:
          'A possessive pronoun shows ownership and stands alone without a following noun (mine, yours, his, hers, ours, theirs).',
        examples: [
          'That muddy bicycle by the gate is definitely mine.',
          'We compared the two essays and decided ours was clearer.',
        ],
        note: 'Possessive pronouns: mine, ours. Note: no apostrophe is ever used in these words.',
      },
      {
        id: 'pronoun-relative',
        name: 'Relative pronoun',
        definition:
          'A relative pronoun (who, whom, whose, which, that) introduces a relative clause that gives more information about a noun.',
        examples: [
          'The scientist who discovered the leak alerted the whole village.',
          'I returned the umbrella that I had borrowed last winter.',
        ],
        note: 'Relative pronouns: who, that. Use "who" for people and "which" for things; "that" works for either in defining clauses.',
      },
      {
        id: 'pronoun-reflexive',
        name: 'Reflexive pronoun',
        definition:
          'A reflexive pronoun ends in -self or -selves and refers back to the subject of the same clause.',
        examples: [
          'She taught herself to read sheet music over one summer.',
          'The robots powered themselves down at midnight.',
        ],
        note: 'Reflexive pronouns: herself, themselves. They cannot be used as the subject of a sentence.',
      },
    ],
  },
  {
    id: 'verbs',
    name: 'Verbs',
    summary:
      'A verb expresses an action, an event or a state of being. Verbs can be regular or irregular, and include auxiliary, modal, imperative and infinitive forms.',
    entries: [
      {
        id: 'verb-regular',
        name: 'Regular verb',
        definition:
          'A regular verb forms its past tense and past participle by adding -ed (or -d) to the base form.',
        examples: [
          'Yesterday the gardener planted forty bulbs along the fence.',
          'They have walked this coastal path many times before.',
        ],
        note: 'Regular verbs: plant → planted, walk → walked.',
      },
      {
        id: 'verb-irregular',
        name: 'Irregular verb',
        definition:
          'An irregular verb does not follow the -ed pattern; its past tense and past participle change in unpredictable ways.',
        examples: [
          'She brought a torch because the power had gone out.',
          'The river froze solid and the children ran across it.',
        ],
        note: 'Irregular verbs: bring → brought, go → gone, freeze → froze, run → ran.',
      },
      {
        id: 'verb-auxiliary',
        name: 'Auxiliary (helping) verb',
        definition:
          'An auxiliary verb (be, have, do) is used with a main verb to form tenses, questions or negatives.',
        examples: [
          'The engineers are testing the new bridge before it opens.',
          'Did the postman deliver the parcel to the wrong house again?',
        ],
        note: 'Auxiliaries: are (with testing), did (with deliver).',
      },
      {
        id: 'verb-modal',
        name: 'Modal verb',
        definition:
          'A modal verb (can, could, may, might, must, shall, should, will, would) expresses possibility, ability, permission or obligation.',
        examples: [
          'Visitors must wear a helmet inside the working quarry.',
          'You should check the timetable before you leave for the station.',
        ],
        note: 'Modals: must (obligation), should (advice). They are followed by the base form of the verb.',
      },
      {
        id: 'verb-imperative',
        name: 'Imperative verb',
        definition:
          'An imperative verb gives a command, instruction or request, and usually begins the sentence with the subject "you" understood.',
        examples: [
          'Stir the mixture gently until the sugar dissolves.',
          'Please close the gate so the sheep cannot escape.',
        ],
        note: 'Imperatives: Stir, close. Common in instructions and recipes.',
      },
      {
        id: 'verb-infinitive',
        name: 'Infinitive',
        definition:
          'The infinitive is the base form of a verb, usually preceded by "to", and does not show tense by itself.',
        examples: [
          'She wanted to learn the violin before she turned thirteen.',
          'To finish the marathon was his only goal that morning.',
        ],
        note: 'Infinitives: to learn, To finish. The "to" form contrasts with finite, tensed verbs.',
      },
    ],
  },
  {
    id: 'adjectives',
    name: 'Adjectives',
    summary:
      'An adjective describes or modifies a noun or pronoun, giving information about its qualities.',
    entries: [
      {
        id: 'adjective',
        name: 'Adjective',
        definition:
          'An adjective adds detail to a noun or pronoun, describing qualities such as size, colour, number or opinion. Comparative (-er / more) and superlative (-est / most) forms compare things.',
        examples: [
          'A thick, grey fog swallowed the narrow lane completely.',
          'This is the steepest hill on the entire route, and the longest.',
        ],
        note: 'Adjectives: thick, grey, narrow (describing nouns); steepest and longest are superlatives.',
      },
    ],
  },
  {
    id: 'adverbs',
    name: 'Adverbs',
    summary:
      'An adverb modifies a verb, an adjective or another adverb, often telling how, when, where or to what degree.',
    entries: [
      {
        id: 'adverb',
        name: 'Adverb',
        definition:
          'An adverb modifies a verb, adjective or another adverb, showing manner, time, place, frequency or degree. Many (but not all) end in -ly.',
        examples: [
          'The cat crept silently along the top of the fence.',
          'We almost never visit the museum, although it is nearby.',
        ],
        note: 'Adverbs: silently (manner), almost and never (degree/frequency), nearby (place).',
      },
    ],
  },
  {
    id: 'prepositions',
    name: 'Prepositions',
    summary:
      'A preposition shows the relationship between a noun or pronoun and another word, often in terms of place, time or direction.',
    entries: [
      {
        id: 'preposition',
        name: 'Preposition',
        definition:
          'A preposition links a noun or pronoun to the rest of the sentence, indicating position, time, direction or means (for example in, on, under, before, through).',
        examples: [
          'The keys were hidden beneath a loose tile near the door.',
          'We waited on the platform until after midnight.',
        ],
        note: 'Prepositions: beneath, near (place), on, until, after (place/time).',
      },
    ],
  },
  {
    id: 'conjunctions',
    name: 'Conjunctions',
    summary:
      'A conjunction joins words, phrases or clauses. Coordinating conjunctions join equal parts; subordinating conjunctions begin a dependent clause.',
    entries: [
      {
        id: 'conjunction-coordinating',
        name: 'Coordinating conjunction',
        definition:
          'A coordinating conjunction (and, but, or, nor, for, so, yet) joins two words, phrases or clauses of equal grammatical weight.',
        examples: [
          'The lamp flickered, but the room stayed warm.',
          'You can take the bus or walk along the canal.',
        ],
        note: 'Coordinating conjunctions: but, or. Remember the set with FANBOYS.',
      },
      {
        id: 'conjunction-subordinating',
        name: 'Subordinating conjunction',
        definition:
          'A subordinating conjunction (because, although, while, if, when, since, unless) introduces a subordinate clause and links it to a main clause.',
        examples: [
          'Although the path was icy, the postwoman kept her pace.',
          'We will cancel the trip if the river rises any higher.',
        ],
        note: 'Subordinating conjunctions: Although, if. The clause they begin cannot stand alone.',
      },
    ],
  },
  {
    id: 'determiners',
    name: 'Determiners',
    summary:
      'A determiner comes before a noun to clarify what the noun refers to — including articles, demonstratives, possessives and quantifiers.',
    entries: [
      {
        id: 'determiner',
        name: 'Determiner',
        definition:
          'A determiner introduces a noun and specifies which or how many: articles (a, an, the), demonstratives (this, those), possessives (my, their) and quantifiers (some, several, many).',
        examples: [
          'Those engineers checked several cables before the storm arrived.',
          'My neighbour lent me an old map and some rope.',
        ],
        note: 'Determiners: Those, several, the, My, an, some.',
      },
    ],
  },
]

// ─── (b) Sentence types ───────────────────────────────────────────────

export interface SentenceType {
  id: string
  name: string
  definition: string
  /** Two original example sentences. */
  examples: [string, string]
  /** When and why a writer chooses this type. */
  whenToUse: string
}

export const SENTENCE_TYPES: SentenceType[] = [
  {
    id: 'simple',
    name: 'Simple sentence',
    definition:
      'A simple sentence has one main (independent) clause containing a single subject and verb, and expresses one complete idea.',
    examples: ['The alarm rang.', 'Three exhausted climbers reached the summit at dawn.'],
    whenToUse:
      'Use a short simple sentence for clarity, emphasis or to create tension and pace, especially after a longer sentence.',
  },
  {
    id: 'compound',
    name: 'Compound sentence',
    definition:
      'A compound sentence joins two or more main clauses of equal weight using a coordinating conjunction (and, but, or, so) or a semicolon.',
    examples: [
      'The tide was rising, so we hurried back across the sand.',
      'She knocked twice; nobody answered.',
    ],
    whenToUse:
      'Use a compound sentence to balance two related ideas of equal importance or to show contrast and consequence.',
  },
  {
    id: 'complex',
    name: 'Complex sentence',
    definition:
      'A complex sentence has one main clause and at least one subordinate clause introduced by a subordinating conjunction or a relative pronoun.',
    examples: [
      'Because the lift was broken, the visitors climbed nine flights of stairs.',
      'The detective, who never missed a detail, noticed the open window.',
    ],
    whenToUse:
      'Use a complex sentence to develop ideas, add detail or show how ideas relate; vary the position of the subordinate clause for effect.',
  },
  {
    id: 'minor',
    name: 'Minor sentence',
    definition:
      'A minor sentence is a deliberately incomplete sentence (lacking a main verb or subject) used for effect; it is grammatically irregular but communicatively complete.',
    examples: ['Silence.', 'No way back now.'],
    whenToUse:
      'Use a minor sentence sparingly in narrative or persuasive writing for dramatic emphasis or a punchy, conversational tone — not in formal writing.',
  },
]

// ─── (c) Punctuation reference ────────────────────────────────────────

export interface PunctuationEntry {
  id: string
  name: string
  /** True for the five marks explicitly named in the spec's skill 2.3. */
  specNamed: boolean
  rule: string
  /** One original example sentence using the mark correctly. */
  example: string
  /** A common mistake learners make with this mark. */
  commonError: string
}

export const PUNCTUATION: PunctuationEntry[] = [
  {
    id: 'capital-letters',
    name: 'Capital letters',
    specNamed: true,
    rule: 'Use a capital letter to start every sentence, for the pronoun "I", and for proper nouns (names of people, places, days, months, titles).',
    example: 'On Friday, Amara and I drove north towards the Lake District.',
    commonError:
      'Capitalising common nouns for emphasis (e.g. "my School"), or forgetting the capital after a full stop.',
  },
  {
    id: 'end-punctuation',
    name: 'End punctuation (. ? !)',
    specNamed: true,
    rule: 'End a statement with a full stop, a direct question with a question mark, and an exclamatory or forceful utterance with an exclamation mark.',
    example: 'Did you lock the shed? I am certain I did. Watch out!',
    commonError:
      'Using a comma where a sentence should end (a comma splice) instead of a full stop or semicolon.',
  },
  {
    id: 'commas',
    name: 'Commas',
    specNamed: true,
    rule: 'Use commas to separate items in a list, to mark off a subordinate clause or a fronted adverbial, and to enclose extra (parenthetical) information.',
    example: 'After the storm, the volunteers, who had worked all night, cleared the road.',
    commonError:
      'The comma splice — joining two complete sentences with only a comma, e.g. "It rained, we stayed in."',
  },
  {
    id: 'speech-marks',
    name: 'Speech marks (inverted commas)',
    specNamed: true,
    rule: 'Enclose the exact words spoken in speech marks; the punctuation that belongs to the spoken words sits inside the closing mark, and a new speaker starts a new line.',
    example: '“Stay close to the wall,” the guide warned.',
    commonError:
      'Putting the comma or full stop outside the speech marks, or forgetting to start a new line for a new speaker.',
  },
  {
    id: 'apostrophes',
    name: 'Apostrophes',
    specNamed: true,
    rule: 'Use an apostrophe for omission in contractions (do not → don’t) and for possession (the dog’s lead; the girls’ team).',
    example: 'It’s clear that the witness’s account changed the jury’s mind.',
    commonError:
      'Confusing "its" (possessive) with "it’s" (it is), and adding an apostrophe to ordinary plurals (e.g. "apple’s for sale").',
  },
  {
    id: 'colon',
    name: 'Colon',
    specNamed: false,
    rule: 'Use a colon to introduce a list, an explanation or an example, where what follows expands on the complete clause before it.',
    example: 'The expedition needed three things: rope, water and a reliable map.',
    commonError:
      'Using a colon after an incomplete clause, e.g. "The things we need are: rope, water…".',
  },
  {
    id: 'semicolon',
    name: 'Semicolon',
    specNamed: false,
    rule: 'Use a semicolon to link two closely related independent clauses without a conjunction, or to separate complex list items that already contain commas.',
    example: 'The path was washed away; the bridge was the only way across.',
    commonError:
      'Using a semicolon where a comma belongs, or joining a fragment to a clause with one.',
  },
  {
    id: 'dash',
    name: 'Dash',
    specNamed: false,
    rule: 'Use a pair of dashes to enclose an interruption or aside, or a single dash to add a dramatic afterthought or summary.',
    example: 'The cellar held one thing — and it was not the treasure they expected.',
    commonError:
      'Overusing dashes in place of all other punctuation, which makes writing feel breathless.',
  },
  {
    id: 'brackets',
    name: 'Brackets (parentheses)',
    specNamed: false,
    rule: 'Use brackets to enclose extra information or a clarification that the sentence would still make sense without.',
    example: 'The festival (now in its tenth year) attracted record crowds.',
    commonError:
      'Forgetting the closing bracket, or placing essential information inside brackets where it should not be optional.',
  },
  {
    id: 'ellipsis',
    name: 'Ellipsis',
    specNamed: false,
    rule: 'Use an ellipsis (three dots) to show an unfinished thought, a trailing pause, or words omitted from a quotation.',
    example: 'She opened the door slowly, expecting the worst …',
    commonError:
      'Using more than three dots, or using an ellipsis to end every sentence for effect, which weakens its impact.',
  },
]

// ─── (d) UK spelling traps ────────────────────────────────────────────

export interface SpellingTrap {
  word: string
  whyTricky: string
  tip: string
}

export const SPELLING_TRAPS: SpellingTrap[] = [
  {
    word: 'separate',
    whyTricky: 'Often misspelled "seperate" — the unstressed middle vowel sounds like "er".',
    tip: 'There is "a rat" in sep-a-rat-e.',
  },
  {
    word: 'definitely',
    whyTricky: 'Frequently written "definately"; the vowel before "ly" is an i, not an a.',
    tip: 'There is no "a" — it contains the word "finite".',
  },
  {
    word: 'necessary',
    whyTricky: 'The single c and double s are easy to swap.',
    tip: 'One Collar, two Socks: one c, two s.',
  },
  {
    word: 'accommodate',
    whyTricky: 'Needs double c and double m, which are often dropped.',
    tip: 'It is big enough to accommodate two c’s and two m’s.',
  },
  {
    word: 'embarrass',
    whyTricky: 'Double r and double s are commonly reduced to single letters.',
    tip: 'You go really red and seriously stressed: double r, double s.',
  },
  {
    word: 'rhythm',
    whyTricky: 'No obvious vowels; the silent h after the r is missed.',
    tip: 'Rhythm Helps Your Two Hips Move.',
  },
  {
    word: 'occasion',
    whyTricky: 'Double c but only a single s — the reverse is a common error.',
    tip: 'Two c’s but only one s for the occasion.',
  },
  {
    word: 'beginning',
    whyTricky: 'The n is doubled before -ing because the stress is on the final syllable.',
    tip: 'Be-GIN-ning: stressed last syllable means double the n.',
  },
  {
    word: 'believe',
    whyTricky: 'The i/e order is easily reversed.',
    tip: 'Never beLIEve a LIE — the lie is in the middle.',
  },
  {
    word: 'weird',
    whyTricky: 'Breaks the "i before e" guide, so it looks wrong when correct.',
    tip: 'It is weird, so it is spelled the weird way: e before i.',
  },
  {
    word: 'conscience',
    whyTricky: 'The "sci" cluster makes an unexpected "sh" sound.',
    tip: 'Your conscience is science with a con in front.',
  },
  {
    word: 'government',
    whyTricky: 'The first n is silent and often dropped.',
    tip: 'A government should govern — keep the "n" you can hear in "govern".',
  },
  {
    word: 'February',
    whyTricky: 'The first r is rarely pronounced and so gets left out.',
    tip: 'Remember Feb-ROO-ary: there is an r before the u.',
  },
  {
    word: 'Wednesday',
    whyTricky: 'The d is silent in speech.',
    tip: 'Say it in your head as "Wed-nes-day" to keep the d.',
  },
  {
    word: 'colleague',
    whyTricky: 'The double l and the silent -ue ending are easy to miss.',
    tip: 'A colleague is in your league — keep "league" at the end.',
  },
  {
    word: 'privilege',
    whyTricky: 'Contains no d and no t, despite sounding like it might.',
    tip: 'It is vile to lose a privilege — spot "vile" inside (privi-lege).',
  },
  {
    word: 'definite',
    whyTricky: 'Often spelled with an a; the ending is "-ite".',
    tip: 'A "finite" thing is definite — both end "-ite".',
  },
  {
    word: 'lightning',
    whyTricky: 'Confused with "lightening" (making lighter); the weather word has no e.',
    tip: 'Lightning strikes fast — it is too quick for an extra "e".',
  },
  {
    word: 'argument',
    whyTricky: 'The e of "argue" is dropped before -ment.',
    tip: 'You lose the "e" when you start an argument.',
  },
  {
    word: 'queue',
    whyTricky: 'Four silent letters after the q make it look odd.',
    tip: 'Q with a queue waiting behind it: just one letter, then "ueue".',
  },
  {
    word: 'tomorrow',
    whyTricky: 'One m but double r — frequently reversed.',
    tip: 'Tomorrow you will row, row: one m, two r’s.',
  },
  {
    word: 'disappear',
    whyTricky: 'One s, double p — the opposite is a common error.',
    tip: 'Dis + appear: "appear" still has its double p when it disappears.',
  },
  {
    word: 'until',
    whyTricky: 'Only one l, unlike "till" or "fulfil" assumptions.',
    tip: 'Wait until — just one l at the end.',
  },
  {
    word: 'forty',
    whyTricky: 'Drops the u of "four", unlike "fourteen".',
    tip: 'There is no "u" in forty, even though there is in four.',
  },
  {
    word: 'truly',
    whyTricky: 'Drops the e of "true" before -ly.',
    tip: 'Truly loses the "e" — it is true.',
  },
  {
    word: 'foreign',
    whyTricky: 'The "eig" breaks the i-before-e guide and the g is silent.',
    tip: 'A foreign reign: both have "eig".',
  },
  {
    word: 'mischievous',
    whyTricky: 'Often given an extra i ("mischievious"); there are only three syllables.',
    tip: 'Mis-chie-vous: no "i" before the final "ous".',
  },
  {
    word: 'pronunciation',
    whyTricky: 'Differs from "pronounce" — there is no "ou" in the middle.',
    tip: 'You pro-NUN-ciate it: keep "nun", drop the "ou" of pronounce.',
  },
  {
    word: 'recommend',
    whyTricky: 'One c, double m — frequently reversed.',
    tip: 'Re + commend: "commend" keeps its single c and double m.',
  },
  {
    word: 'parliament',
    whyTricky: 'The hidden "ia" before the m is often missed.',
    tip: 'Parliament has "I AM" hidden inside: parl-IA-ment.',
  },
]

// ─── (e) Self-test items ──────────────────────────────────────────────

export type SelfTestKind = 'identify-class' | 'fix-punctuation' | 'correct-spelling'

export interface SelfTestItem {
  id: number
  kind: SelfTestKind
  prompt: string
  answer: string
}

export const SELF_TEST: SelfTestItem[] = [
  {
    id: 1,
    kind: 'identify-class',
    prompt:
      'Name the word class of the underlined word: "The hikers walked QUICKLY before the storm broke."',
    answer: 'Adverb — "quickly" modifies the verb "walked", describing how they walked.',
  },
  {
    id: 2,
    kind: 'identify-class',
    prompt: 'Name the word class of the underlined word: "She MUST finish the report before noon."',
    answer: 'Modal verb — "must" expresses obligation and is followed by the base verb "finish".',
  },
  {
    id: 3,
    kind: 'identify-class',
    prompt: 'Name the word class of the underlined word: "A FLOCK of geese landed on the pond."',
    answer: 'Collective noun — "flock" names a group treated as one unit.',
  },
  {
    id: 4,
    kind: 'identify-class',
    prompt: 'Name the word class of the underlined word: "We waited BENEATH the bridge."',
    answer: 'Preposition — "beneath" shows the position of "we" in relation to the bridge.',
  },
  {
    id: 5,
    kind: 'identify-class',
    prompt:
      'Name the word class of the underlined word: "ALTHOUGH it was late, they kept working."',
    answer: 'Subordinating conjunction — "although" introduces a subordinate clause.',
  },
  {
    id: 6,
    kind: 'identify-class',
    prompt: 'Name the word class of the underlined word: "Those keys are MINE."',
    answer: 'Possessive pronoun — "mine" shows ownership and stands alone (no apostrophe).',
  },
  {
    id: 7,
    kind: 'identify-class',
    prompt: 'Is "Stir the sauce gently" a command? Name the class of "Stir".',
    answer:
      'Yes — it is a command. "Stir" is an imperative verb (the subject "you" is understood).',
  },
  {
    id: 8,
    kind: 'identify-class',
    prompt: 'Name the word class of the underlined word: "She wanted TO LEARN Arabic."',
    answer: 'Infinitive — "to learn" is the base form of the verb preceded by "to".',
  },
  {
    id: 9,
    kind: 'identify-class',
    prompt: 'Regular or irregular verb? "The vase BROKE when it fell."',
    answer: 'Irregular verb — "break" becomes "broke" (it does not add -ed).',
  },
  {
    id: 10,
    kind: 'identify-class',
    prompt: 'Name the word class of the underlined word: "SEVERAL volunteers arrived early."',
    answer: 'Determiner (a quantifier) — "several" comes before the noun and tells how many.',
  },
  {
    id: 11,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: It was raining, we cancelled the match.',
    answer:
      'Comma splice. Correct: "It was raining, so we cancelled the match." or "It was raining; we cancelled the match."',
  },
  {
    id: 12,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: The dogs lead was on the hook.',
    answer: 'Missing possessive apostrophe: "The dog’s lead was on the hook." (one dog).',
  },
  {
    id: 13,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: "Wait here" she said.',
    answer: 'A comma is needed inside the speech marks: “Wait here,” she said.',
  },
  {
    id: 14,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: Its going to be a long night.',
    answer: '"Its" should be "It’s" (a contraction of "it is"): "It’s going to be a long night."',
  },
  {
    id: 15,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: We packed the essentials, rope, water and a map.',
    answer: 'Use a colon to introduce the list: "We packed the essentials: rope, water and a map."',
  },
  {
    id: 16,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: on monday we visited the science museum in london.',
    answer:
      'Capital letters needed: "On Monday we visited the Science Museum in London." (sentence start and proper nouns).',
  },
  {
    id: 17,
    kind: 'fix-punctuation',
    prompt: 'Fix the punctuation: The bridge was closed the river was the only way across.',
    answer:
      'Two independent clauses run together. Use a semicolon or full stop: "The bridge was closed; the river was the only way across."',
  },
  {
    id: 18,
    kind: 'correct-spelling',
    prompt: 'Correct the spelling: They could not seperate the twins.',
    answer: '"seperate" → "separate" (there is "a rat" in sep-a-rat-e).',
  },
  {
    id: 19,
    kind: 'correct-spelling',
    prompt: 'Correct the spelling: It was definately the right choice.',
    answer: '"definately" → "definitely" (it contains "finite").',
  },
  {
    id: 20,
    kind: 'correct-spelling',
    prompt: 'Correct the spelling: A hotel big enough to accomodate the whole team is neccessary.',
    answer:
      '"accomodate" → "accommodate" (double c, double m); "neccessary" → "necessary" (one c, two s).',
  },
]
