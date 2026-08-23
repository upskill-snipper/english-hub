// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'grammar-terms',
  title: 'Grammar Terms',
  description: '30 essential grammar terms',
  category: 'Grammar',
  board: 'All',
  cards: [
    {
      id: 'gt-1',
      front: 'Noun',
      back: `A word that names a person, place, thing, or idea.\n\nTypes: Proper (London), Common (city), Abstract (love), Collective (flock).`,
    },
    {
      id: 'gt-2',
      front: 'Verb',
      back: `A word that describes an action, state, or occurrence.\n\nTypes: Dynamic (run), Stative (believe), Modal (can, should), Auxiliary (is, have).`,
    },
    {
      id: 'gt-3',
      front: 'Adjective',
      back: `A word that describes a noun.\n\nExample: "The tall, dark stranger."\n\nComparative: taller. Superlative: tallest.`,
    },
    {
      id: 'gt-4',
      front: 'Adverb',
      back: `A word that modifies a verb, adjective, or another adverb.\n\nExample: "She ran quickly." "It was extremely cold."\n\nNot all end in -ly: very, well, fast, never.`,
    },
    {
      id: 'gt-5',
      front: 'Pronoun',
      back: `A word that replaces a noun.\n\nTypes: Personal (I, he, she), Possessive (my, his), Relative (who, which), Demonstrative (this, that).`,
    },
    {
      id: 'gt-6',
      front: 'Preposition',
      back: `A word that shows the relationship between a noun and another word.\n\nExamples: in, on, at, under, between, through, during.`,
    },
    {
      id: 'gt-7',
      front: 'Conjunction',
      back: `A word that joins clauses or sentences.\n\nCoordinating: and, but, or, so (FANBOYS)\nSubordinating: because, although, when, if, while.`,
    },
    {
      id: 'gt-8',
      front: 'Determiner',
      back: `A word that comes before a noun to identify it.\n\nArticles: a, an, the\nDemonstratives: this, that, these, those\nPossessives: my, your, their.`,
    },
    {
      id: 'gt-9',
      front: 'Simple Sentence',
      back: `One main clause with a subject and verb.\n\nExample: "The dog barked."\n\nEffect: Clear, direct, punchy. Good for impact.`,
    },
    {
      id: 'gt-10',
      front: 'Compound Sentence',
      back: `Two main clauses joined by a coordinating conjunction (and, but, or, so).\n\nExample: "The sun rose and the birds began to sing."`,
    },
    {
      id: 'gt-11',
      front: 'Complex Sentence',
      back: `A main clause + one or more subordinate clauses.\n\nExample: "Although it was raining, they went outside."\n\nThe subordinate clause cannot stand alone.`,
    },
    {
      id: 'gt-12',
      front: 'Main Clause',
      back: `A clause that can stand alone as a complete sentence.\n\nExample: "She laughed." (This makes sense on its own.)`,
    },
    {
      id: 'gt-13',
      front: 'Subordinate Clause',
      back: `A clause that adds information but cannot stand alone.\n\nExample: "...because she was happy" - needs a main clause.\n\nOften starts with: because, although, when, if, while, who, which.`,
    },
    {
      id: 'gt-14',
      front: 'Relative Clause',
      back: `A subordinate clause starting with who, which, that, where, whose.\n\nExample: "The teacher, who was new, smiled nervously."\n\nAdds extra information about a noun.`,
    },
    {
      id: 'gt-15',
      front: 'Active Voice',
      back: `The subject performs the action.\n\nExample: "The cat chased the mouse."\n\nEffect: Direct, clear, dynamic.`,
    },
    {
      id: 'gt-16',
      front: 'Subject',
      back: `The person or thing performing the action in a sentence.\n\nExample: "The girl ran home." (The girl = subject).`,
    },
    {
      id: 'gt-17',
      front: 'Object',
      back: `The person or thing receiving the action.\n\nExample: "She kicked the ball." (the ball = object)\n\nDirect object: receives the action. Indirect object: benefits from it.`,
    },
    {
      id: 'gt-18',
      front: 'Tense',
      back: `When an action takes place.\n\nPast: "She walked." Present: "She walks." Future: "She will walk."\n\nPerfect: "She had walked." Progressive: "She was walking."`,
    },
    {
      id: 'gt-19',
      front: 'Apostrophe (Punctuation)',
      back: `Used for:\n1. Possession: "the dog\'s bone" / "the dogs\' bones"\n2. Contraction: "don\'t" = "do not"\n\nNEVER for plurals: "apple\'s" is wrong.`,
    },
    {
      id: 'gt-20',
      front: 'Semicolon',
      back: `Joins two closely related main clauses without a conjunction.\n\nExample: "The rain stopped; the sun came out."\n\nBoth sides must be complete sentences.`,
    },
    {
      id: 'gt-21',
      front: 'Colon',
      back: `Introduces a list, explanation, or elaboration.\n\nExample: "She had one goal: survival."\n\nThe part before the colon must be a complete sentence.`,
    },
    {
      id: 'gt-22',
      front: 'Parenthesis',
      back: `Extra information inserted into a sentence using brackets, dashes, or commas.\n\nExample: "My brother - the tall one - is a doctor."\n\nThe sentence should still make sense without it.`,
    },
    {
      id: 'gt-23',
      front: 'Ellipsis',
      back: `Three dots (...) used to show:\n1. Something has been left out\n2. A trailing off of speech\n3. Suspense or hesitation\n\nExample: "She opened the door and saw..."`,
    },
    {
      id: 'gt-24',
      front: 'Clause',
      back: `A group of words containing a subject and a verb.\n\nMain clause: can stand alone. Subordinate clause: cannot.\n\nEvery sentence has at least one clause.`,
    },
    {
      id: 'gt-25',
      front: 'Phrase',
      back: `A group of words that does NOT contain both a subject and a verb.\n\nExamples: "in the garden" (prepositional phrase), "the old house" (noun phrase).`,
    },
    {
      id: 'gt-26',
      front: 'Noun Phrase',
      back: `A group of words built around a noun.\n\nExample: "the extremely heavy, leather-bound book"\n\nUsing expanded noun phrases adds detail and sophistication to writing.`,
    },
    {
      id: 'gt-27',
      front: 'Modal Verb',
      back: `A verb that expresses possibility, necessity, or permission.\n\nExamples: can, could, may, might, will, would, shall, should, must.\n\nEffect: "You must leave" is more forceful than "You should leave."`,
    },
    {
      id: 'gt-28',
      front: 'Infinitive',
      back: `The base form of a verb, usually with "to."\n\nExample: "to run," "to be," "to think."\n\nSplit infinitive: "to boldly go" (adverb between "to" and verb).`,
    },
    {
      id: 'gt-29',
      front: 'Participle',
      back: `A verb form used as an adjective or to form tenses.\n\nPresent: running, singing (-ing)\nPast: broken, forgotten (-ed/-en)\n\nExample: "The broken vase lay on the floor."`,
    },
    {
      id: 'gt-30',
      front: 'Standard English',
      back: `The formal, grammatically "correct" form of English used in education, business, and formal writing.\n\nNon-standard: "We was going" → Standard: "We were going."\n\nExpected in exam writing but characters may use non-standard English for realism.`,
    },
    {
      id: 'gt-31',
      front: 'Gerund',
      back: `A noun form of a verb, ending in -ing.\n\nExample: "Running is good exercise." (Running = gerund, the subject)\n\nDifference from participle: gerunds function as nouns; participles function as adjectives or verbs.`,
    },
    {
      id: 'gt-32',
      front: 'Transitive Verb',
      back: `A verb that requires a direct object.\n\nExample: "He ate an apple." (ate = transitive, apple = object)\n\nWithout an object, the sentence is incomplete.`,
    },
    {
      id: 'gt-33',
      front: 'Intransitive Verb',
      back: `A verb that does not require a direct object.\n\nExample: "She smiled." (smiled = intransitive)\n\nAdds its own meaning without needing an object.`,
    },
    {
      id: 'gt-34',
      front: 'Linking Verb',
      back: `A verb that connects the subject to a description of itself.\n\nExamples: be, appear, seem, become, feel, smell, sound, taste.\n\nExample: "She seems happy." (happy describes she)`,
    },
    {
      id: 'gt-35',
      front: 'Collective Noun',
      back: `A noun referring to a group as a single unit.\n\nExamples: team, flock, herd, crew, family, audience.\n\n"The team is playing well" (singular) or "The team are playing well" (plural) - both correct depending on context.`,
    },
    {
      id: 'gt-36',
      front: 'Abstract Noun',
      back: `A noun representing an idea, quality, or state that cannot be perceived by the senses.\n\nExamples: love, fear, justice, beauty, freedom, courage.\n\nContrast with concrete nouns: book, table, dog.`,
    },
    {
      id: 'gt-37',
      front: 'Concrete Noun',
      back: `A noun referring to something tangible that can be perceived by the senses.\n\nExamples: book, table, rain, music (can be heard), flower.\n\nContrast with abstract nouns: love, justice.`,
    },
    {
      id: 'gt-38',
      front: 'Countable Noun',
      back: `A noun that can be counted and has both singular and plural forms.\n\nExamples: cat/cats, book/books, idea/ideas.\n\nUse "a/an" with singular; "many" or "several" with plural.`,
    },
    {
      id: 'gt-39',
      front: 'Uncountable Noun',
      back: `A noun that cannot be counted and typically has no plural form.\n\nExamples: water, furniture, information, advice, luggage.\n\nUse "some" rather than "many"; "a piece of furniture" not "a furniture."`,
    },
    {
      id: 'gt-40',
      front: 'Comparative Adjective',
      back: `Compares two things, usually ending in -er.\n\nExample: "This book is longer than that one."\n\nWith longer adjectives: "more beautiful," not "beautifuller."`,
    },
    {
      id: 'gt-41',
      front: 'Superlative Adjective',
      back: `Describes the extreme of a quality, usually ending in -est.\n\nExample: "This is the longest book I have read."\n\nWith longer adjectives: "most beautiful," not "beautifulest."`,
    },
    {
      id: 'gt-42',
      front: 'Demonstrative Pronoun',
      back: `Points to something specific.\n\nExamples: this, that, these, those.\n\n"This is beautiful" (this = pronoun)\n"This book is beautiful" (this = determiner)`,
    },
    {
      id: 'gt-43',
      front: 'Reflexive Pronoun',
      back: `Shows an action done to oneself, ending in -self or -selves.\n\nExamples: myself, yourself, himself, herself, themselves.\n\nExample: "She dressed herself." Emphasises the subject doing the action.`,
    },
    {
      id: 'gt-44',
      front: 'Reciprocal Pronoun',
      back: `Shows a mutual action between two or more people.\n\nExamples: each other, one another.\n\nExample: "They helped each other."`,
    },
    {
      id: 'gt-45',
      front: 'Indefinite Pronoun',
      back: `Refers to a person or thing without being specific.\n\nExamples: someone, anybody, everyone, no one, something.\n\nExample: "Someone left their umbrella."`,
    },
    {
      id: 'gt-46',
      front: 'Interrogative Pronoun',
      back: `Used to ask questions.\n\nExamples: who, whom, whose, what, which.\n\nExample: "What is that?"`,
    },
    {
      id: 'gt-47',
      front: 'Relative Adverb',
      back: `Introduces a relative clause and shows a relationship.\n\nExamples: where, when, why.\n\nExample: "This is the house where I grew up." (where = relative adverb introducing the relative clause)`,
    },
    {
      id: 'gt-48',
      front: 'Coordinating Conjunction',
      back: `Joins words, phrases, or clauses of equal importance. (FANBOYS)\n\nFor, And, Nor, But, Or, Yet, So.\n\nExample: "I wanted to go, but it was raining."`,
    },
    {
      id: 'gt-49',
      front: 'Subordinating Conjunction',
      back: `Joins a main clause to a subordinate clause, showing a relationship.\n\nExamples: because, although, if, when, since, while.\n\nExample: "Although it was raining, they went outside."`,
    },
    {
      id: 'gt-50',
      front: 'Correlative Conjunction',
      back: `Works in pairs to join words or phrases.\n\nExamples: both...and, either...or, neither...nor, not only...but also.\n\nExample: "Both the student and the teacher agreed."`,
    },
    {
      id: 'gt-51',
      front: 'Adverbial Phrase',
      back: `A group of words functioning as an adverb.\n\nExample: "He ran as fast as he could." (as fast as he could = adverbial phrase modifying "ran")`,
    },
    {
      id: 'gt-52',
      front: 'Prepositional Phrase',
      back: `A preposition + object of the preposition.\n\nExample: "in the garden" (in = preposition, the garden = object)\n\nFunctions as an adjective or adverb in a sentence.`,
    },
    {
      id: 'gt-53',
      front: 'Past Progressive Tense',
      back: `Describes an ongoing action in the past.\n\nForm: was/were + -ing.\n\nExample: "She was reading when the phone rang." (was reading = past progressive)`,
    },
    {
      id: 'gt-54',
      front: 'Present Perfect Tense',
      back: `Describes an action in the past with a connection to the present.\n\nForm: have/has + past participle.\n\nExample: "I have lived here for five years." (have lived = present perfect)`,
    },
    {
      id: 'gt-55',
      front: 'Past Perfect Tense',
      back: `Shows which of two past actions happened first.\n\nForm: had + past participle.\n\nExample: "By the time she arrived, he had already left."`,
    },
    {
      id: 'gt-56',
      front: 'Future Perfect Tense',
      back: `Shows an action that will be completed before a specific future time.\n\nForm: will have + past participle.\n\nExample: "By next year, I will have finished my degree."`,
    },
    {
      id: 'gt-57',
      front: 'Conditional Clause',
      back: `An if-clause that sets a condition for something happening.\n\nExamples:\n• Zero: "If you heat water to 100°C, it boils."\n• First: "If you study hard, you will pass."\n• Second: "If I had money, I would travel."\n• Third: "If I had studied, I would have passed."`,
    },
    {
      id: 'gt-58',
      front: 'Agreement (Concord)',
      back: `Grammatical consistency between related words.\n\nSubject-verb agreement: "She runs" (not "She run")\nPronoun-antecedent: "The student finished his work" (his matches student).\n\nErrors: "The team are" (British) vs "The team is" (American) - both correct depending on dialect.`,
    },
    {
      id: 'gt-59',
      front: 'Ambiguous Pronoun',
      back: `A pronoun with an unclear antecedent - it is not clear what the pronoun refers to.\n\nExample: "Sarah told Jennifer that she was brilliant." (Who is "she"? Sarah or Jennifer?)\n\nUsually considered a grammatical error. Clarify by using the person\'s name.`,
    },
    {
      id: 'gt-60',
      front: 'Dangling Modifier',
      back: `A modifying word or phrase that doesn\'t clearly relate to what it modifies.\n\nIncorrect: "Running through the park, the dog chased a squirrel." (Seems like the dog was running through the park intentionally.)\nCorrect: "Running through the park, I saw a dog chasing a squirrel."`,
    },
    {
      id: 'gt-61',
      front: 'Misplaced Modifier',
      back: `A modifier placed in the wrong position, causing confusion.\n\nMisplaced: "I almost drove the whole distance without stopping." (Almost I drove? Or almost the whole distance?)\nClear: "I drove almost the whole distance without stopping."`,
    },
    {
      id: 'gt-62',
      front: 'Fragment',
      back: `An incomplete sentence - lacks a subject or verb (or both).\n\nExample: "Running through the rain." (No main verb)\nShould be: "Running through the rain, he reached home."`,
    },
    {
      id: 'gt-63',
      front: 'Run-on Sentence',
      back: `Two or more independent clauses joined without proper punctuation or conjunction.\n\nIncorrect: "The rain stopped the sun came out."\nCorrect: "The rain stopped; the sun came out." or "The rain stopped, and the sun came out."`,
    },
    {
      id: 'gt-64',
      front: 'Comma Splice',
      back: `Two independent clauses joined only by a comma (without a coordinating conjunction).\n\nIncorrect: "The weather was cold, we stayed inside."\nCorrect: "The weather was cold, so we stayed inside." or "The weather was cold; we stayed inside."`,
    },
    {
      id: 'gt-65',
      front: 'Conditional Sentence Type Zero',
      back: `States a general truth or scientific fact.\n\nForm: If + present tense, + present tense (imperative).\n\nExample: "If you heat water to 100°C, it boils."\n\nThe condition and result are both always true.`,
    },
    {
      id: 'gt-66',
      front: 'Conditional Sentence Type One',
      back: `Describes a likely future scenario.\n\nForm: If + present tense, + will + base verb.\n\nExample: "If you study hard, you will pass the exam."\n\nThis is realistic and possibly true.`,
    },
    {
      id: 'gt-67',
      front: 'Conditional Sentence Type Two',
      back: `Describes an unlikely or hypothetical present situation.\n\nForm: If + past tense, + would/could + base verb.\n\nExample: "If I had money, I would travel the world."\n\nImplies the condition does not actually exist.`,
    },
    {
      id: 'gt-68',
      front: 'Conditional Sentence Type Three',
      back: `Describes an impossible past situation (cannot be changed).\n\nForm: If + past perfect, + would/could have + past participle.\n\nExample: "If I had studied harder, I would have passed."\n\nExpresses regret about the past.`,
    },
  ],
}

export default deck
