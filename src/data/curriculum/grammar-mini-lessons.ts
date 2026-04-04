export interface GrammarMiniLesson {
  id: string;
  title: string;
  category: 'punctuation' | 'grammar' | 'sentence-structure' | 'vocabulary' | 'style';
  yearGroup: string;
  duration: string;
  learningObjective: string;
  explanation: string;
  examples: { correct: string; incorrect?: string; explanation: string }[];
  practiceExercises: { instruction: string; task: string; answer: string }[];
  commonErrors: string[];
  teacherTip: string;
}

export const grammarMiniLessons: GrammarMiniLesson[] = [

  // ── Y7 ─────────────────────────────────────────────────────────────────────

  {
    id: 'y7-01',
    title: 'Full Stops and Capital Letters',
    category: 'punctuation',
    yearGroup: 'Year 7',
    duration: '15 minutes',
    learningObjective:
      'Use full stops to end sentences correctly and apply capital letters for proper nouns, the pronoun "I", and sentence openings.',
    explanation:
      'A full stop marks the end of a statement or command. Every new sentence begins with a capital letter. Capital letters are also used for proper nouns (names of specific people, places, months, and days), the word "I", and titles. Omitting these signals to the reader that a sentence has not ended, making writing hard to follow.',
    examples: [
      {
        incorrect: 'we went to london on monday it was amazing',
        correct: 'We went to London on Monday. It was amazing.',
        explanation:
          'The sentence opening, the proper noun "London", and the day "Monday" all need capitals. A full stop separates two complete thoughts.',
      },
      {
        incorrect: 'my friend and i love reading',
        correct: 'My friend and I love reading.',
        explanation:
          '"I" is always capitalised regardless of position. The sentence must start with a capital and end with a full stop.',
      },
      {
        correct: 'Dr Hassan teaches Year 7 every Tuesday.',
        explanation:
          'Title "Dr", proper name "Hassan", year group label, and day "Tuesday" are all capitalised correctly.',
      },
      {
        incorrect: 'the cat sat on the mat. it was happy',
        correct: 'The cat sat on the mat. It was happy.',
        explanation:
          'The word after a full stop begins a new sentence and requires a capital letter.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Rewrite the passage adding full stops and capital letters where needed.',
        task: 'last tuesday my sister sarah and i visited the british museum in london. we saw ancient egyptian artefacts. i thought the mummies were incredible',
        answer:
          'Last Tuesday my sister Sarah and I visited the British Museum in London. We saw ancient Egyptian artefacts. I thought the mummies were incredible.',
      },
      {
        instruction: 'Identify and correct the three capital-letter errors in this sentence.',
        task: 'on friday, mrs jones told the class that we would study shakespeare in january.',
        answer:
          'On Friday, Mrs Jones told the class that we would study Shakespeare in January.',
      },
      {
        instruction: 'Add full stops and capital letters to turn this run-on into two correct sentences.',
        task: 'the wind howled outside the windows rattled all night',
        answer: 'The wind howled outside. The windows rattled all night.',
      },
    ],
    commonErrors: [
      'Forgetting to capitalise "I" when it appears mid-sentence.',
      'Using capital letters randomly for emphasis rather than following the rules.',
      'Running two sentences together with only a comma instead of a full stop.',
      'Omitting the capital letter after a full stop when starting a new sentence.',
    ],
    teacherTip:
      'Ask students to read their work aloud and tap the desk each time their voice drops at the end of a thought -- that drop usually marks where a full stop is needed.',
  },

  {
    id: 'y7-02',
    title: 'Commas in Lists and Clauses',
    category: 'punctuation',
    yearGroup: 'Year 7',
    duration: '15 minutes',
    learningObjective:
      'Use commas correctly to separate items in a list and to mark introductory or subordinate clauses.',
    explanation:
      'Commas have two core uses at KS3. First, they separate items in a list of three or more: place a comma after each item except the last (the Oxford comma before "and" is optional but acceptable). Second, a comma follows an introductory word, phrase, or clause that comes before the main clause of a sentence. Commas help the reader pause and process information without breaking the sentence completely.',
    examples: [
      {
        incorrect: 'I bought apples oranges bananas and grapes.',
        correct: 'I bought apples, oranges, bananas and grapes.',
        explanation: 'Commas separate each item in the list; no comma is needed before "and" here, though adding one is also acceptable.',
      },
      {
        incorrect: 'After the heavy rain the streets flooded.',
        correct: 'After the heavy rain, the streets flooded.',
        explanation:
          'A comma follows the introductory prepositional phrase "After the heavy rain" to separate it from the main clause.',
      },
      {
        correct: 'Although she was tired, she finished her homework.',
        explanation:
          'The subordinate clause "Although she was tired" is separated from the main clause by a comma.',
      },
      {
        incorrect: 'The dog was, large, fluffy and brown.',
        correct: 'The dog was large, fluffy and brown.',
        explanation:
          'No comma is needed between the verb "was" and the first adjective in the list.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Insert commas in the correct places in this list sentence.',
        task: 'The explorer packed a tent sleeping bag compass torch and water bottle.',
        answer: 'The explorer packed a tent, sleeping bag, compass, torch and water bottle.',
      },
      {
        instruction: 'Add a comma after the introductory clause.',
        task: 'Because the match was cancelled the students went back to class.',
        answer: 'Because the match was cancelled, the students went back to class.',
      },
      {
        instruction: 'Rewrite the sentence inserting commas where needed and removing any incorrect ones.',
        task: 'Running quickly down the corridor she tripped dropped her bag and scattered, her books everywhere.',
        answer:
          'Running quickly down the corridor, she tripped, dropped her bag and scattered her books everywhere.',
      },
    ],
    commonErrors: [
      'Placing a comma between the subject and verb: "The tall man, ran fast."',
      'Omitting the comma after an introductory clause of more than three words.',
      'Using commas instead of full stops to join two independent clauses (comma splice).',
      'Adding a comma before every "and" even in a two-item pair: "She smiled, and waved."',
    ],
    teacherTip:
      'Use the "breath test": read the sentence aloud -- natural pauses after introductory phrases are where commas belong. Pairs ("red and blue") rarely need a comma before "and".',
  },

  {
    id: 'y7-03',
    title: 'Apostrophes for Possession and Contraction',
    category: 'punctuation',
    yearGroup: 'Year 7',
    duration: '15 minutes',
    learningObjective:
      "Distinguish between the apostrophe for contraction (replacing a missing letter) and for possession (showing ownership), and apply each correctly.",
    explanation:
      "An apostrophe does two jobs. (1) Contraction: it replaces one or more missing letters when two words are merged (e.g. do not = don't). (2) Possession: it shows that something belongs to a noun. For singular nouns, add 's (the dog's collar). For plural nouns already ending in s, add only the apostrophe (the dogs' collars). The word \"its\" as a possessive has NO apostrophe; \"it's\" always means \"it is\" or \"it has\".",
    examples: [
      {
        incorrect: "The girls bag was left on the bus.",
        correct: "The girl's bag was left on the bus.",
        explanation: "Singular possession: one girl owns the bag, so apostrophe + s after 'girl'.",
      },
      {
        incorrect: "The three teacher's cars were parked outside.",
        correct: "The three teachers' cars were parked outside.",
        explanation: "Plural possession: more than one teacher, plural already ends in s, so apostrophe after the s.",
      },
      {
        incorrect: "I can't believe it's collar is missing.",
        correct: "I can't believe its collar is missing.",
        explanation: "\"it's\" = it is; the possessive form is \"its\" with no apostrophe.",
      },
      {
        correct: "They're going to their grandmother's house for the weekend.",
        explanation: "\"They're\" = they are (contraction); \"their\" = possessive pronoun (no apostrophe needed); \"grandmother's\" = singular possession.",
      },
    ],
    practiceExercises: [
      {
        instruction: "Add apostrophes where needed and remove any that are incorrect.",
        task: "The childrens' playground was rebuilt after the storm's damage destroyed it's equipment.",
        answer: "The children's playground was rebuilt after the storm's damage destroyed its equipment.",
      },
      {
        instruction: "Expand these contractions into their full forms.",
        task: "She hasn't finished. They won't come. It's raining heavily.",
        answer: "She has not finished. They will not come. It is raining heavily.",
      },
      {
        instruction: "Rewrite the phrase using an apostrophe for possession.",
        task: "the essays belonging to the students / the coat belonging to James / the toys belonging to the babies",
        answer: "the students' essays / James's coat / the babies' toys",
      },
    ],
    commonErrors: [
      "Using an apostrophe to form a plural: \"apple's for sale\" should be \"apples for sale\".",
      "Writing \"it's\" when the possessive \"its\" is needed.",
      "Placing the apostrophe before the s for plural nouns: \"the teachers's\" instead of \"the teachers'\".",
      "Omitting the apostrophe from contractions entirely: \"dont\", \"cant\", \"wont\".",
    ],
    teacherTip:
      "For \"its / it's\", teach students to substitute \"it is\": if the substitution makes sense, use the apostrophe; if not, use \"its\" without one.",
  },

  {
    id: 'y7-04',
    title: 'Basic Paragraph Structure',
    category: 'sentence-structure',
    yearGroup: 'Year 7',
    duration: '20 minutes',
    learningObjective:
      'Organise writing into focused paragraphs using a topic sentence, supporting detail, and a linking or concluding sentence.',
    explanation:
      'A paragraph is a group of sentences about ONE idea. It usually begins with a topic sentence that introduces the main point. The middle sentences provide evidence, explanation, or examples. The final sentence may evaluate, conclude, or link to the next paragraph. In non-fiction and essay writing, this structure helps the reader follow the argument. A new paragraph is signalled by either indentation or a line break.',
    examples: [
      {
        correct:
          'London is one of the most visited cities in the world. Millions of tourists arrive each year to see landmarks such as the Tower of London and Buckingham Palace. The city also offers world-class museums, many of which are free to enter. This combination of history and culture makes London a compelling destination.',
        explanation:
          'Topic sentence states the main point; two middle sentences give evidence and detail; the final sentence concludes and evaluates.',
      },
      {
        incorrect:
          'London is great. I went there once. The food was good. Big Ben is a clock. There are lots of red buses.',
        correct:
          'London is a vibrant capital city with much to offer visitors. Its iconic landmarks, such as Big Ben and the red double-decker buses, are immediately recognisable. The city also boasts a diverse food scene influenced by cultures from across the world.',
        explanation:
          'The incorrect version is a list of disconnected facts. The correct version groups related ideas under a clear topic sentence.',
      },
      {
        correct:
          'Exercise has significant benefits for mental health. Research shows that physical activity releases endorphins, which reduce feelings of stress and anxiety. Even a 20-minute walk can improve mood noticeably. Regular exercise, therefore, should be considered a key component of mental wellbeing.',
        explanation:
          'Paragraph follows: topic sentence -> evidence -> example -> evaluative conclusion.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Write a topic sentence for a paragraph about the importance of reading.',
        task: 'Topic: reading regularly improves vocabulary and imagination.',
        answer:
          'Reading regularly is one of the most effective ways to expand vocabulary and stimulate the imagination.',
      },
      {
        instruction: 'Arrange these sentences into a logical paragraph order.',
        task:
          '(A) For example, the school library stocks over 5,000 titles across all genres. (B) Having access to a wide range of books encourages students to read for pleasure. (C) When students read for pleasure, their writing skills and general knowledge improve significantly. (D) Our school recognises this, which is why it has invested in its library.',
        answer:
          'B, A, D, C -- Topic sentence (B) introduces the idea; specific example (A) supports it; linking sentence (D) connects to school context; evaluative conclusion (C) explains the impact.',
      },
      {
        instruction: 'Identify the weakness in this paragraph and rewrite the final sentence to improve it.',
        task:
          'Deforestation is a serious global problem. Trees absorb carbon dioxide, helping to regulate the climate. When forests are destroyed, biodiversity is lost. Also, it is bad.',
        answer:
          '"Also, it is bad" is vague and does not evaluate. Improved ending: "The cumulative effect of deforestation therefore threatens both ecological balance and human survival."',
      },
    ],
    commonErrors: [
      'Including more than one main idea in a single paragraph.',
      'Beginning with a vague opener such as "This paragraph is about..." instead of a focused topic sentence.',
      'Listing facts without explaining or evaluating their significance.',
      'Failing to start a new paragraph when the topic shifts.',
    ],
    teacherTip:
      'Use the PEEL acronym (Point, Evidence, Explanation, Link) as a scaffold for early attempts, then gradually remove the scaffold as students internalise the structure.',
  },

  {
    id: 'y7-05',
    title: 'Adjectives and Adverbs',
    category: 'grammar',
    yearGroup: 'Year 7',
    duration: '15 minutes',
    learningObjective:
      'Identify adjectives and adverbs, understand what each modifies, and use them accurately to add precision and detail to writing.',
    explanation:
      'An adjective modifies a noun or pronoun, describing its quality, quantity, or type (e.g. "a dark, narrow alley"). An adverb modifies a verb, an adjective, or another adverb, often telling us how, when, where, or to what extent (e.g. "She spoke quietly"; "extremely cold"). Many adverbs end in -ly, but not all (e.g. "fast", "hard", "well"). Confusing adjectives and adverbs is a common error: "He ran quick" should be "He ran quickly."',
    examples: [
      {
        incorrect: 'She danced beautiful on the stage.',
        correct: 'She danced beautifully on the stage.',
        explanation:
          '"Beautifully" is an adverb modifying the verb "danced". "Beautiful" is an adjective and cannot modify a verb.',
      },
      {
        correct: 'The ancient, crumbling castle loomed over the silent valley.',
        explanation:
          '"Ancient" and "crumbling" are adjectives modifying the noun "castle"; "silent" is an adjective modifying "valley".',
      },
      {
        incorrect: 'He did good in the exam.',
        correct: 'He did well in the exam.',
        explanation:
          '"Well" is the adverb form modifying the verb "did". "Good" is an adjective and is used with nouns or after linking verbs: "He is a good student."',
      },
      {
        correct: 'The remarkably tall building cast an unusually long shadow.',
        explanation:
          '"Remarkably" modifies the adjective "tall"; "unusually" modifies the adjective "long" -- both are adverbs.',
      },
    ],
    practiceExercises: [
      {
        instruction:
          'Label each underlined word A (adjective) or Adv (adverb) and explain what it modifies.',
        task: 'The (fierce) wind blew (relentlessly) through the (empty) streets.',
        answer:
          '"fierce" -- A, modifies the noun "wind"; "relentlessly" -- Adv, modifies the verb "blew"; "empty" -- A, modifies the noun "streets".',
      },
      {
        instruction: 'Correct the adjective/adverb error in each sentence.',
        task:
          '(1) The athlete ran incredible fast. (2) She felt badly about the mistake. (3) The music sounded beautiful.',
        answer:
          '(1) incredibly fast -- adverb modifying adjective. (2) She felt bad (adjective after linking verb "felt"). (3) The music sounded beautiful -- correct as written; "beautiful" is a predicate adjective after the linking verb "sounded".',
      },
      {
        instruction:
          'Rewrite this plain sentence by adding two adjectives and one adverb to make it more vivid.',
        task: 'The dog ran across the field.',
        answer:
          'Example: The shaggy, mud-caked dog sprinted frantically across the open field. (Other valid answers accepted.)',
      },
    ],
    commonErrors: [
      'Using "good" as an adverb: "She sings good" instead of "She sings well".',
      'Double marking degree: "more faster", "most brightest" -- choose -er/-est OR more/most, not both.',
      'Overloading sentences with adjectives, reducing impact rather than enhancing it.',
      'Confusing "hard" (correct adverb) with "hardly" (meaning scarcely): "He worked hardly" vs "He worked hard".',
    ],
    teacherTip:
      'Challenge students to replace generic adjectives ("nice", "good", "bad") with precise alternatives. Create a classroom word wall of "banned" vague adjectives to encourage richer vocabulary choices.',
  },

  // ── Y8 ─────────────────────────────────────────────────────────────────────

  {
    id: 'y8-01',
    title: 'Semicolons and Colons',
    category: 'punctuation',
    yearGroup: 'Year 8',
    duration: '15 minutes',
    learningObjective:
      'Use a semicolon to link closely related independent clauses and a colon to introduce a list, explanation, or quotation.',
    explanation:
      'A semicolon (;) connects two independent clauses that are closely related in meaning, creating a stronger link than a full stop but a harder break than a comma. A colon (:) signals that what follows directly expands or explains what precedes it. Colons introduce lists, explanations, examples, or quotations. The clause before a colon must be a complete sentence; the material after it need not be. Neither mark should be used randomly or in place of the other.',
    examples: [
      {
        incorrect: 'The storm was severe, the roof collapsed.',
        correct: 'The storm was severe; the roof collapsed.',
        explanation:
          'Two independent clauses with a close causal relationship are linked by a semicolon, avoiding a comma splice.',
      },
      {
        correct: 'She had one ambition: to become a surgeon.',
        explanation:
          'The colon introduces a direct explanation of "one ambition". The clause before the colon is complete.',
      },
      {
        correct: 'The bag contained the following items: a torch, a map, a compass and a flask.',
        explanation:
          'Colon introduces a list after a complete introductory clause containing "the following".',
      },
      {
        incorrect: 'He loved sport; especially football.',
        correct: 'He loved sport, especially football.',
        explanation:
          '"Especially football" is not an independent clause, so a semicolon is wrong here. A comma is the appropriate mark.',
      },
    ],
    practiceExercises: [
      {
        instruction:
          'Replace the comma splice with a semicolon or rewrite with a colon where appropriate.',
        task: 'The library was silent, everyone was reading.',
        answer:
          'The library was silent; everyone was reading. (Semicolon links two related independent clauses.)',
      },
      {
        instruction: 'Insert a colon to introduce the list and punctuate the sentence correctly.',
        task:
          'The recipe requires the following ingredients flour sugar butter eggs and vanilla extract.',
        answer:
          'The recipe requires the following ingredients: flour, sugar, butter, eggs and vanilla extract.',
      },
      {
        instruction:
          'Decide whether each sentence needs a semicolon or a colon and insert the correct mark.',
        task:
          '(1) There was only one problem the key was missing. (2) The match ended in disappointment the team had played brilliantly but lost.',
        answer:
          '(1) There was only one problem: the key was missing. (Colon introduces an explanation.) (2) The match ended in disappointment; the team had played brilliantly but lost. (Semicolon links two related independent clauses.)',
      },
    ],
    commonErrors: [
      'Using a semicolon after an incomplete clause: "He was tired; having run ten miles" -- the second part is not independent.',
      'Placing a colon after a verb or preposition: "The bag contains: books..." -- the colon should follow a complete clause.',
      'Using a colon to introduce a single-word or very short object: "He ate: lunch" -- no colon needed.',
      'Confusing the semicolon with a colon and using one where the other is needed.',
    ],
    teacherTip:
      'Teach the semicolon as a "full stop with a bridge" -- both sides must be able to stand alone as sentences. Show students that swapping it for a full stop should always make grammatical sense.',
  },

  {
    id: 'y8-02',
    title: 'Complex and Compound Sentences',
    category: 'sentence-structure',
    yearGroup: 'Year 8',
    duration: '20 minutes',
    learningObjective:
      'Construct compound sentences using coordinating conjunctions and complex sentences using subordinating conjunctions, understanding the difference in emphasis each creates.',
    explanation:
      'A simple sentence has one independent clause. A compound sentence joins two independent clauses with a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so). Both clauses carry equal weight. A complex sentence has one main clause and at least one subordinate clause introduced by a subordinating conjunction (because, although, when, if, since, while, unless, after, before, etc.). The subordinate clause depends on the main clause for its meaning and shifts emphasis onto the main clause.',
    examples: [
      {
        correct: 'She studied hard, but she still found the exam difficult.',
        explanation:
          'Compound sentence: two independent clauses joined by the coordinating conjunction "but". Both clauses are equally weighted.',
      },
      {
        correct: 'Although she studied hard, she still found the exam difficult.',
        explanation:
          'Complex sentence: the subordinate clause "Although she studied hard" depends on the main clause. The emphasis falls on finding the exam difficult.',
      },
      {
        correct:
          'The factory closed because demand had fallen, yet the workers remained hopeful.',
        explanation:
          'Compound-complex sentence: one subordinate clause ("because demand had fallen") inside a compound structure joined by "yet".',
      },
      {
        incorrect:
          'Because she was cold. She put on her coat.',
        correct: 'Because she was cold, she put on her coat.',
        explanation:
          '"Because she was cold" is a subordinate clause and cannot stand alone. It must be attached to a main clause.',
      },
    ],
    practiceExercises: [
      {
        instruction:
          'Label each sentence S (simple), Cp (compound), Cx (complex) or CpCx (compound-complex).',
        task:
          '(1) The bell rang. (2) The bell rang and the students left. (3) When the bell rang, the students left. (4) When the bell rang, the students left, but the teacher stayed behind.',
        answer:
          '(1) S -- one clause. (2) Cp -- two independent clauses joined by "and". (3) Cx -- one subordinate and one main clause. (4) CpCx -- subordinate clause plus two main clauses joined by "but".',
      },
      {
        instruction:
          'Combine these simple sentences into one complex sentence using a subordinating conjunction.',
        task: 'The river flooded. The village was evacuated.',
        answer:
          'Because the river flooded, the village was evacuated. / After the river flooded, the village was evacuated. (Other valid conjunctions accepted.)',
      },
      {
        instruction:
          'Rewrite this compound sentence as a complex sentence and explain how the meaning changes.',
        task: 'He worked overtime, so he missed dinner.',
        answer:
          'Because he worked overtime, he missed dinner. The compound version gives equal weight to both events; the complex version emphasises missing dinner as the consequence, subordinating the overtime.',
      },
    ],
    commonErrors: [
      'Writing a subordinate clause as a standalone sentence (subordinate clause fragment).',
      'Using "and" as the default connector, producing strings of compound sentences with no variety.',
      'Confusing coordinating and subordinating conjunctions: "but" cannot introduce a subordinate clause.',
      'Omitting the comma after a fronted subordinate clause: "When the storm ended the town was silent."',
    ],
    teacherTip:
      'Ask students to take a paragraph from their own writing and highlight all sentence types. If most are simple or compound, challenge them to subordinate two sentences to vary the rhythm and show causal relationships more precisely.',
  },

  {
    id: 'y8-03',
    title: 'Active and Passive Voice',
    category: 'grammar',
    yearGroup: 'Year 8',
    duration: '15 minutes',
    learningObjective:
      'Distinguish between active and passive voice, transform sentences between the two, and understand when each is appropriate.',
    explanation:
      'In the active voice, the subject performs the action: "The dog bit the man." In the passive voice, the subject receives the action: "The man was bitten by the dog." The passive is formed with the verb "to be" + past participle. The agent (the doer) may be omitted in the passive: "Mistakes were made." The active voice is generally more direct and energetic; the passive is used in formal/scientific writing, when the agent is unknown, or to deliberately shift emphasis.',
    examples: [
      {
        correct: 'The scientist conducted three experiments. (Active)',
        explanation:
          'The scientist (subject) performed the action (conducted). Direct and clear.',
      },
      {
        correct: 'Three experiments were conducted by the scientist. (Passive)',
        explanation:
          'The object "three experiments" becomes the subject. The agent is introduced with "by".',
      },
      {
        correct: 'Errors were found in the report. (Passive, agentless)',
        explanation:
          'The agent is omitted -- useful when the doer is unknown, unimportant, or when the writer wishes to avoid assigning blame.',
      },
      {
        incorrect: 'The trophy was won the team. (Passive, malformed)',
        correct: 'The trophy was won by the team.',
        explanation:
          'The passive requires "by" before the agent when the agent is mentioned.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Convert these active sentences to passive voice.',
        task:
          '(1) The chef prepared a magnificent meal. (2) The builders demolished the old warehouse.',
        answer:
          '(1) A magnificent meal was prepared by the chef. (2) The old warehouse was demolished by the builders.',
      },
      {
        instruction: 'Convert these passive sentences to active voice.',
        task:
          '(1) The letter was written by the student. (2) The decision was made by the committee.',
        answer:
          '(1) The student wrote the letter. (2) The committee made the decision.',
      },
      {
        instruction:
          'Explain why the passive voice is the better choice in this context and rewrite the sentence in the passive.',
        task:
          'Context: a science report. Active: "We heated the solution to 80 degrees and then we observed a colour change."',
        answer:
          'Passive: "The solution was heated to 80 degrees, and a colour change was observed." The passive is preferred in science writing because it focuses on the process rather than the individual, creating an objective, impersonal tone.',
      },
    ],
    commonErrors: [
      'Believing the passive is always wrong or always weaker -- it has important stylistic uses.',
      'Failing to include the correct form of "to be" in the passive construction.',
      'Using the past tense of the main verb instead of the past participle: "was wrote" instead of "was written".',
      'Switching between active and passive voice inconsistently within the same paragraph.',
    ],
    teacherTip:
      'Show students a newspaper report and a science report side by side. Ask them to find examples of active and passive voice in each and discuss why each genre favours its dominant voice.',
  },

  {
    id: 'y8-04',
    title: 'Direct and Indirect Speech',
    category: 'punctuation',
    yearGroup: 'Year 8',
    duration: '15 minutes',
    learningObjective:
      "Punctuate direct speech correctly using inverted commas and convert between direct and indirect (reported) speech.",
    explanation:
      "Direct speech reproduces the exact words spoken, enclosed in inverted commas (speech marks). The punctuation at the end of the spoken words goes inside the closing inverted comma. A new speaker requires a new line. Indirect (reported) speech paraphrases what was said without inverted commas; tenses typically shift back (present -> past, past -> past perfect), and pronouns change to reflect the reporter's perspective.",
    examples: [
      {
        incorrect: 'She said, I am going home.',
        correct: '"I am going home," she said.',
        explanation:
          'Direct speech requires inverted commas around the spoken words. The comma goes inside the closing speech mark when a reporting clause follows.',
      },
      {
        correct: '"Where are you going?" he asked.',
        explanation:
          'The question mark goes inside the closing speech mark. The reporting clause is not followed by a full stop -- the question mark serves that function.',
      },
      {
        correct:
          'Direct: "I will finish the project tomorrow," she promised.\nIndirect: She promised that she would finish the project the following day.',
        explanation:
          '"Will" becomes "would"; "tomorrow" becomes "the following day"; inverted commas are removed in indirect speech.',
      },
      {
        incorrect: '"The train is late" said the announcer.',
        correct: '"The train is late," said the announcer.',
        explanation:
          'A comma (not a full stop) is needed inside the closing speech mark when a reporting clause follows the spoken words.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Punctuate these direct speech sentences correctly.',
        task:
          '(1) I have no idea where the keys are said Dad. (2) Can you help me with this she asked nervously.',
        answer:
          '(1) "I have no idea where the keys are," said Dad. (2) "Can you help me with this?" she asked nervously.',
      },
      {
        instruction: 'Convert this direct speech to indirect speech.',
        task: '"We are leaving early tomorrow," the teacher told the class.',
        answer:
          'The teacher told the class that they were leaving early the following day.',
      },
      {
        instruction: 'Convert this indirect speech to direct speech.',
        task: 'He explained that he had forgotten his homework and would bring it the next lesson.',
        answer:
          '"I forgot my homework. I will bring it next lesson," he explained. (Exact wording may vary; key changes: past perfect -> simple past in direct, "the next lesson" -> "next lesson".)',
      },
    ],
    commonErrors: [
      'Putting the comma or full stop outside the closing inverted comma.',
      'Using double inverted commas inconsistently with single inverted commas within the same piece.',
      'Forgetting to start a new line for each new speaker in dialogue.',
      'Leaving tenses and pronouns unchanged when converting to indirect speech.',
    ],
    teacherTip:
      'Use a short extract from a novel students are reading, delete all punctuation from the dialogue, and ask students to restore it. Seeing speech punctuation in a real literary context reinforces its purpose.',
  },

  {
    id: 'y8-05',
    title: 'Formal and Informal Register',
    category: 'style',
    yearGroup: 'Year 8',
    duration: '20 minutes',
    learningObjective:
      'Identify the features of formal and informal register and adapt writing appropriately for audience and purpose.',
    explanation:
      'Register refers to the level of formality in language. Informal register is used with friends or in casual contexts: it may include contractions, colloquialisms, slang, first-person address, and short sentences. Formal register is used in academic essays, letters, reports, and professional contexts: it avoids contractions and slang, uses more complex vocabulary and syntax, prefers third person or impersonal constructions, and maintains an objective tone. Choosing the wrong register for an audience undermines communication and, in exams, can cost marks.',
    examples: [
      {
        incorrect: 'Dear Sir/Madam, I wanna apply for the job cos it looks well good.',
        correct: 'Dear Sir/Madam, I am writing to express my interest in the advertised position.',
        explanation:
          '"Wanna", "cos", and "well good" are informal contractions and slang. The formal version uses a polite, impersonal opening and avoids contractions.',
      },
      {
        correct:
          'Informal: "The new policy is a total disaster and everyone hates it."\nFormal: "The new policy has proved deeply unpopular and is widely regarded as ineffective."',
        explanation:
          'The informal version uses hyperbole ("total disaster") and vague quantifier ("everyone"). The formal version is measured and precise.',
      },
      {
        correct:
          'Informal: "You should eat more veg -- it is really good for you!"\nFormal: "Research suggests that increasing vegetable consumption has significant health benefits."',
        explanation:
          'Formal writing avoids direct address ("you") and uses impersonal constructions ("research suggests"). Exclamation marks are rare in formal prose.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Identify five features of informal register in this text and label each.',
        task:
          "Hey! So I reckon the government's got it all wrong about this. It's a big mess and loads of people are dead unhappy. tbh no-one really knows what's gonna happen next.",
        answer:
          '"Hey!" -- informal greeting/exclamation; "I reckon" -- colloquial hedging; "It\'s" -- contraction; "loads of" -- informal quantifier; "tbh" -- text abbreviation; "gonna" -- informal contraction; "dead unhappy" -- colloquial intensifier. (Five of these accepted.)',
      },
      {
        instruction: 'Rewrite this informal passage in a formal register suitable for a report.',
        task:
          'The school canteen is a total state. The food is pretty rubbish and loads of kids just bin it anyway.',
        answer:
          'The school canteen presents significant concerns regarding standards of cleanliness and food quality. Evidence suggests that a substantial proportion of students discard their meals, indicating low satisfaction with current provision.',
      },
      {
        instruction: 'Identify which register each sentence belongs to and explain one feature that signals this.',
        task:
          '(1) "It is evident that climate change poses an existential threat to global biodiversity." (2) "Climate change is literally destroying the planet and it is terrifying."',
        answer:
          '(1) Formal -- "it is evident that" is an impersonal, hedged construction; no contractions; complex vocabulary. (2) Informal -- "literally" used as an intensifier; "terrifying" is emotive/personal; direct address implied.',
      },
    ],
    commonErrors: [
      'Using contractions ("it\'s", "they\'re") in formal essays or letters.',
      'Using first-person opinion markers ("I think", "I believe") in impersonal reports.',
      'Mixing registers inconsistently within the same piece of writing.',
      'Assuming formal writing means long, convoluted sentences -- clarity is still essential.',
    ],
    teacherTip:
      'Bring in two short texts on the same topic -- one from a tabloid, one from a broadsheet editorial -- and ask students to list register differences. This shows that register exists on a spectrum and is not simply "slang vs. posh".',
  },

  // ── Y9 ─────────────────────────────────────────────────────────────────────

  {
    id: 'y9-01',
    title: 'Dashes and Parentheses',
    category: 'punctuation',
    yearGroup: 'Year 9',
    duration: '15 minutes',
    learningObjective:
      'Use dashes and brackets (parentheses) to insert additional information, asides, or clarifications, and understand the stylistic difference between them.',
    explanation:
      'Parenthetical information can be inserted using three marks: commas (subtle, low interruption), brackets/parentheses () (clearly separate, factual aside), or dashes -- (emphatic, dramatic, often used in creative and persuasive writing). A single dash introduces a sharp interruption or afterthought at the end of a clause. A pair of dashes encloses a parenthetical insert in the middle of a sentence -- like this -- and the sentence must still make sense if you remove the material between the dashes. Brackets carry a similar function but feel more detached and clinical.',
    examples: [
      {
        correct:
          'The prime minister -- after weeks of delay -- finally announced the decision.',
        explanation:
          'A pair of dashes encloses the parenthetical phrase "after weeks of delay". Removing it leaves a complete sentence.',
      },
      {
        correct: 'The population of the city (estimated at 2.4 million) has grown rapidly.',
        explanation:
          'Brackets enclose a precise factual aside. Brackets feel more neutral and reference-like than dashes.',
      },
      {
        correct:
          'She reached the summit at last -- exhausted, exhilarated, and speechless.',
        explanation:
          'A single dash introduces a dramatic afterthought, creating a rhetorical pause before the list of adjectives.',
      },
      {
        incorrect:
          'He finished the race (despite the injury but he was still smiling).',
        correct: 'He finished the race -- despite the injury -- and he was still smiling.',
        explanation:
          'The bracketed material contains a conjunction ("but") that disrupts the grammar. Dashes work better here, and the conjunction is revised to maintain flow.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Insert a pair of dashes to add a parenthetical comment to this sentence.',
        task: 'The headteacher after a long career in education announced her retirement.',
        answer: 'The headteacher -- after a long career in education -- announced her retirement.',
      },
      {
        instruction:
          'Rewrite this sentence twice: once using brackets, once using dashes. Explain the different effects.',
        task: 'The experiment which took three weeks to complete produced surprising results.',
        answer:
          'Brackets: The experiment (which took three weeks to complete) produced surprising results. -- Feels neutral, factual.\nDashes: The experiment -- which took three weeks to complete -- produced surprising results. -- Feels more emphatic, draws attention to the duration.',
      },
      {
        instruction: 'Add a single dash to create a dramatic afterthought at the end of this sentence.',
        task: 'She opened the envelope slowly and read the result.',
        answer:
          'She opened the envelope slowly and read the result -- she had passed. (Or similar dramatic addition.)',
      },
    ],
    commonErrors: [
      'Using a single hyphen (-) instead of a dash (--) in formal/literary writing.',
      'Forgetting to close a pair of dashes, leaving the sentence structurally incomplete.',
      'Overusing dashes so that every sentence feels breathless or interrupted.',
      'Placing brackets around essential information -- brackets signal information is supplementary.',
    ],
    teacherTip:
      'Show students examples from good journalism and literary non-fiction where dashes create pace. Ask them to compare the same sentence with commas, brackets, and dashes and discuss how each changes the reading experience.',
  },

  {
    id: 'y9-02',
    title: 'Subordinate and Relative Clauses',
    category: 'sentence-structure',
    yearGroup: 'Year 9',
    duration: '20 minutes',
    learningObjective:
      'Identify and write subordinate clauses (introduced by subordinating conjunctions) and relative clauses (introduced by relative pronouns), and use each to add detail and complexity.',
    explanation:
      'A subordinate clause cannot stand alone; it depends on a main clause. Subordinate clauses are introduced by subordinating conjunctions (because, although, when, if, since, while, etc.). A relative clause is a type of subordinate clause that modifies a noun. It is introduced by a relative pronoun: who (for people), which (for things), that (for people or things in defining clauses). A defining (restrictive) relative clause identifies which noun is meant and needs no commas. A non-defining (non-restrictive) relative clause adds extra information about a noun already identified and is set off by commas.',
    examples: [
      {
        correct: 'The student who works hardest will succeed.',
        explanation:
          'Defining relative clause -- "who works hardest" identifies which student. No commas needed: remove it and the meaning changes.',
      },
      {
        correct: 'Amara, who had studied all weekend, felt confident before the exam.',
        explanation:
          'Non-defining relative clause -- "who had studied all weekend" adds extra information about Amara, already identified by name. Commas required.',
      },
      {
        correct: 'Although the weather was terrible, the outdoor event continued.',
        explanation:
          'Subordinate clause fronted and separated by a comma. The main clause follows.',
      },
      {
        incorrect:
          'The book which I borrowed it from the library was fascinating.',
        correct: 'The book which I borrowed from the library was fascinating.',
        explanation:
          '"It" is redundant: the relative pronoun "which" already performs the role of the object.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Identify each underlined clause as SR (subordinate) or R (relative) and state whether each relative clause is defining or non-defining.',
        task:
          '(1) [Because she arrived late], she missed the introduction. (2) The scientist [who discovered penicillin] changed medicine. (3) My brother, [who lives in Paris], visits every Christmas.',
        answer:
          '(1) SR -- subordinate clause introduced by "because". (2) R -- defining relative clause (identifies which scientist; no commas). (3) R -- non-defining relative clause (adds extra information about a named person; commas required).',
      },
      {
        instruction: 'Combine these sentences using a relative clause.',
        task: 'The painting sold for one million pounds. The painting had been stored in an attic for decades.',
        answer:
          'The painting, which had been stored in an attic for decades, sold for one million pounds.',
      },
      {
        instruction: 'Add a fronted subordinate clause to this sentence to make it complex.',
        task: 'The team celebrated loudly.',
        answer:
          'After scoring the winning goal in the final minute, the team celebrated loudly. / Although exhausted, the team celebrated loudly. (Other valid answers accepted.)',
      },
    ],
    commonErrors: [
      'Using "which" for people: "the girl which won" should be "the girl who won".',
      'Omitting commas around non-defining relative clauses.',
      'Adding a pronoun duplicate inside the relative clause: "the car that I drove it."',
      'Writing the subordinate clause as a sentence fragment.',
    ],
    teacherTip:
      'Use a "clause surgery" activity: give students a paragraph with all subordinate and relative clauses highlighted. Ask them to remove each one and note how the meaning changes -- this demonstrates the difference between essential (defining) and additional (non-defining) information.',
  },

  {
    id: 'y9-03',
    title: 'Varying Sentence Openings',
    category: 'style',
    yearGroup: 'Year 9',
    duration: '15 minutes',
    learningObjective:
      'Open sentences in at least five different ways to vary rhythm, create emphasis, and avoid repetitive subject-first constructions.',
    explanation:
      'Skilled writers avoid beginning every sentence with a noun/pronoun subject. Varying sentence openings creates rhythm, controls emphasis, and signals sophistication. Common alternatives include: fronted adverbial (time, manner, place), present or past participle phrase, adjective or noun in apposition, subordinate clause, adverb, prepositional phrase, and the expletive construction ("It is...", "There are..."). In formal analysis and creative writing, varied openings are a key marker of quality.',
    examples: [
      {
        correct: 'Reluctantly, he signed the papers.',
        explanation:
          'Adverb opener -- the single adverb creates immediate intrigue about the character\'s feelings.',
      },
      {
        correct: 'Trembling with exhaustion, the climber reached the summit.',
        explanation:
          'Present participle phrase opener -- establishes physical state before the main action.',
      },
      {
        correct: 'Despite fierce opposition, the bill was passed.',
        explanation:
          'Prepositional phrase opener -- immediately signals contrast.',
      },
      {
        correct: 'A dedicated teacher, she had spent forty years in the classroom.',
        explanation:
          'Noun phrase in apposition -- characterises the subject before the main clause.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Rewrite each sentence with the specified type of opening.',
        task:
          'Original: "The hero defeated the dragon." (1) Rewrite with a fronted adverbial. (2) Rewrite with a participle phrase. (3) Rewrite with a subordinate clause.',
        answer:
          '(1) Against all odds, the hero defeated the dragon. (2) Drawing his sword with steady hands, the hero defeated the dragon. (3) Although gravely wounded, the hero defeated the dragon. (Other valid answers accepted.)',
      },
      {
        instruction:
          'Identify the six different sentence openings in this paragraph.',
        task:
          'Exhausted, she slumped into the chair. It had been the longest day of her career. Without warning, the phone rang again. Reaching for it slowly, she answered. "Another crisis," she murmured. Since joining the firm, she had rarely had a moment of peace.',
        answer:
          '(1) Adjective -- "Exhausted". (2) Expletive "It had been..." (3) Prepositional phrase -- "Without warning". (4) Participle phrase -- "Reaching for it slowly". (5) Direct speech / short sentence. (6) Subordinate clause -- "Since joining the firm".',
      },
      {
        instruction:
          'Rewrite this monotonous paragraph using at least three different sentence openings.',
        task:
          'The rain started suddenly. The players ran off the pitch. The coaches covered the equipment quickly. The spectators looked for shelter.',
        answer:
          'Example: Suddenly, the rain started. Sprinting off the pitch, the players sought cover. The coaches, working quickly, covered the equipment. Meanwhile, spectators scrambled for shelter under the grandstand.',
      },
    ],
    commonErrors: [
      'Beginning every sentence with "The" or a character\'s name, creating a monotonous rhythm.',
      'Using a participle phrase that dangles: "Running down the road, the bus drove past" (the bus was not running).',
      'Confusing variety for its own sake -- the opening should suit the meaning and tone.',
      'Fronting an adverbial without a comma: "Slowly the fog descended" should have a comma after "Slowly".',
    ],
    teacherTip:
      'Give students a colour-coding task: highlight sentence-opening words/phrases in their own writing using different colours for each type. A sea of one colour signals a lack of variety and provides a concrete revision target.',
  },

  {
    id: 'y9-04',
    title: 'Embedded Quotations',
    category: 'style',
    yearGroup: 'Year 9',
    duration: '15 minutes',
    learningObjective:
      'Embed short quotations smoothly into analytical sentences so that grammar and syntax are preserved, avoiding "quote-drop".',
    explanation:
      'In literary analysis, quotations should flow naturally within the grammatical structure of your own sentence. "Quote-dropping" -- inserting a quotation with no integration -- weakens analysis. To embed effectively: (1) introduce with a colon or relative clause, (2) blend the quotation grammatically so the sentence reads as a whole, (3) use only the most relevant words (a few key words are often stronger than a full sentence), and (4) follow with a comment on specific language. Square brackets [ ] can modify a word in the quotation to fit your grammar without altering meaning.',
    examples: [
      {
        incorrect:
          'Macbeth is ambitious. "I have no spur / To prick the sides of my intent, but only / Vaulting ambition." This shows he is ambitious.',
        correct:
          'Macbeth reveals the dangerous nature of his ambition when he admits he has "only / Vaulting ambition" driving him forward, with no rational justification.',
        explanation:
          'The correct version integrates the key phrase grammatically, provides context, and moves immediately to analysis.',
      },
      {
        correct:
          'Dickens describes the fog as "cruelly pinching" the toes of pedestrians, using the verb "pinching" to personify the cold as an agent of deliberate suffering.',
        explanation:
          'The quotation is embedded mid-sentence; analysis of a specific word follows immediately.',
      },
      {
        correct:
          'The narrator describes how Gatsby\'s guests "came and went like moths among the whisperings and the champagne", the simile suggesting the characters are drawn to glittering surfaces but lack substance.',
        explanation:
          'A longer embedded quotation introduced with "how". The analysis follows in the same sentence, creating a fluid analytical unit.',
      },
      {
        incorrect: 'The writer uses the word "cold". This is effective.',
        correct:
          'The writer\'s use of "cold" carries connotations of emotional distance as well as physical discomfort, suggesting the setting mirrors the protagonist\'s psychological state.',
        explanation:
          '"This is effective" says nothing. The corrected version unpacks connotation and links word choice to meaning.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Embed this quotation into an analytical sentence about mood.',
        task:
          'Quotation from "The Strange Case of Dr Jekyll and Mr Hyde": "all of a sudden". Context: Utterson\'s sense of threat.',
        answer:
          'Stevenson generates a sense of sudden, uncontrollable threat when Utterson describes events occurring "all of a sudden", the phrase\'s colloquial urgency reflecting the breakdown of rational Victorian order.',
      },
      {
        instruction: 'Rewrite this quote-drop as a smooth embedded analytical sentence.',
        task:
          '"Out, damned spot!" This shows Lady Macbeth feels guilty.',
        answer:
          'Lady Macbeth\'s anguished command to the imagined bloodstain -- "Out, damned spot!" -- reveals a guilt so overwhelming that it has fractured her grip on reality.',
      },
      {
        instruction:
          'Use square brackets to adapt this quotation so it fits grammatically in the sentence provided.',
        task:
          'Quotation: "She was tall and graceful". Sentence to complete: "Fitzgerald presents Daisy as _______, a physical embodiment of the old-money ideal."',
        answer:
          'Fitzgerald presents Daisy as "[tall and] graceful", a physical embodiment of the old-money ideal. (Brackets show the adapted word; only the essential adjective is kept.)',
      },
    ],
    commonErrors: [
      'Quote-dropping: inserting a block quotation with no integration or analysis.',
      'Using "This shows that..." without specifying which word or technique creates the effect.',
      'Quoting more than is necessary -- shorter embedded quotations force closer analysis.',
      'Altering the words of a quotation without using square brackets to signal the change.',
    ],
    teacherTip:
      'Model the "shrinking quotation" technique live: start with a three-line quote, then challenge students to reduce it to one line, then to five words, forcing them to identify the most analytically potent language.',
  },

  {
    id: 'y9-05',
    title: 'Discourse Markers for Essays',
    category: 'vocabulary',
    yearGroup: 'Year 9',
    duration: '15 minutes',
    learningObjective:
      'Use a range of discourse markers to signal the logical relationship between ideas in an essay, moving beyond "firstly/secondly/finally".',
    explanation:
      'Discourse markers (also called connectives or signposting language) guide the reader through an argument by signalling the relationship between ideas. They can signal: addition (furthermore, moreover, in addition), contrast (however, nevertheless, conversely, by contrast), causality (consequently, therefore, as a result, hence), concession (although, admittedly, granted that), exemplification (for instance, to illustrate, as evidenced by), and conclusion (ultimately, in conclusion, to summarise). Repeating "firstly/secondly/finally" or "also" signals mechanical rather than analytical thinking.',
    examples: [
      {
        correct:
          'The imagery throughout the poem is bleak. Furthermore, the metre becomes increasingly fragmented in the final stanza, mirroring the speaker\'s psychological collapse.',
        explanation:
          '"Furthermore" signals addition of a related, supporting point rather than a new separate idea.',
      },
      {
        correct:
          'Dickens presents Scrooge as irredeemably misanthropic in the opening chapters. However, the ghost sequences gradually reveal the social and emotional causes of his behaviour.',
        explanation:
          '"However" signals contrast and introduces a qualification of the previous point.',
      },
      {
        correct:
          'The government introduced the policy to reduce carbon emissions; consequently, industrial output fell by 12 per cent in the first year.',
        explanation:
          '"Consequently" signals a direct causal relationship between the two clauses.',
      },
      {
        correct:
          'Admittedly, some critics argue that the novel endorses colonial values. Nevertheless, a closer reading reveals the author\'s subversive irony undermining the narrator\'s authority.',
        explanation:
          '"Admittedly" concedes the counterargument; "Nevertheless" pivots back to the main argument -- a sophisticated pattern of reasoning.',
      },
    ],
    practiceExercises: [
      {
        instruction:
          'Choose the most appropriate discourse marker for each gap and explain why.',
        task:
          '(1) The character is presented as heroic. _______, there are moments where his actions are morally ambiguous. (2) The metaphor creates tension. _______, the short, fragmented sentences accelerate the pace. (3) The study lacked a control group. _______, its conclusions must be treated with caution.',
        answer:
          '(1) However / Nevertheless -- signals contrast. (2) Moreover / Furthermore / In addition -- signals addition of a supporting point. (3) Consequently / Therefore / As a result -- signals causality.',
      },
      {
        instruction:
          'Rewrite this basic paragraph using three varied discourse markers to improve its analytical flow.',
        task:
          'The poet uses dark imagery. Also, the tone is pessimistic. Also, the ending is ambiguous. This makes the poem effective.',
        answer:
          'The poet employs pervasive dark imagery throughout. Furthermore, the consistently pessimistic tone reinforces the sense of entrapment. Crucially, the ambiguous ending refuses to offer resolution, leaving the reader unsettled and, ultimately, implicated in the poem\'s despair.',
      },
      {
        instruction:
          'Write the opening of an essay paragraph on a novel or poem you are studying, using at least two different discourse markers.',
        task: 'Topic: how a writer creates sympathy for a character.',
        answer:
          'Model: Steinbeck generates profound sympathy for Lennie by presenting him as fundamentally childlike and unable to comprehend the consequences of his actions. Moreover, by filtering events through George\'s protective care, the reader comes to understand Lennie through the lens of a devoted friend rather than a detached observer. Consequently, when disaster strikes, the emotional impact is heightened by the contrast between innocence and tragedy.',
      },
    ],
    commonErrors: [
      'Using "Also" as the default connective at the start of every new point.',
      'Using "In conclusion" to introduce a genuinely new idea rather than a summary.',
      'Placing "However" or "Therefore" in the middle of a sentence where a comma or semicolon is needed instead.',
      'Using discourse markers mechanically without the ideas they are supposed to connect actually being related in the stated way.',
    ],
    teacherTip:
      'Create a "discourse marker bank" grouped by function (addition, contrast, causality, concession, conclusion) and display it in the classroom. Challenge students to use at least one from each category in a full essay, then mark the markers in different colours to check coverage.',
  },

  // ── IGCSE / IAL ────────────────────────────────────────────────────────────

  {
    id: 'igcse-01',
    title: 'Subject-Verb Agreement',
    category: 'grammar',
    yearGroup: 'IGCSE/IAL',
    duration: '15 minutes',
    learningObjective:
      'Ensure the verb always agrees in number with its subject, including in sentences with complex noun phrases, collective nouns, and inverted word order.',
    explanation:
      'A verb must agree with its subject in number (singular or plural). The rule is straightforward in simple sentences but becomes difficult when: (1) a phrase separates subject and verb ("The quality of the results was impressive"); (2) the subject is a collective noun ("the government is" / "the government are" -- both acceptable depending on whether acting as a unit or individuals); (3) subjects are joined by "neither...nor" or "either...or" (the verb agrees with the nearest subject); (4) the sentence is inverted ("There are many reasons..."). Common errors occur when writers agree the verb with the nearest noun rather than the actual subject.',
    examples: [
      {
        incorrect: 'The range of topics covered in the module are extensive.',
        correct: 'The range of topics covered in the module is extensive.',
        explanation:
          '"Range" is the subject (singular), not "topics". The intervening phrase "of topics covered in the module" does not affect agreement.',
      },
      {
        correct: 'Neither the students nor the teacher was aware of the change.',
        explanation:
          '"Neither...nor" with a singular final subject takes a singular verb. If the nearest subject were plural, the verb would be plural.',
      },
      {
        incorrect: 'There is several explanations for this phenomenon.',
        correct: 'There are several explanations for this phenomenon.',
        explanation:
          'In inverted sentences beginning with "There", the verb must agree with the real subject: "explanations" is plural, so "are" is required.',
      },
      {
        correct: 'Each of the chapters addresses a different theme.',
        explanation:
          '"Each" is always singular; the verb is singular regardless of the plural noun in the prepositional phrase.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Select the correct verb form and explain your choice.',
        task:
          '(1) The committee (has / have) reached a decision. (2) The list of requirements (seem / seems) daunting. (3) Either the manager or the staff members (is / are) responsible.',
        answer:
          '(1) has -- "committee" acting as a single unit; also acceptable: "have" if treated as individuals (British English). (2) seems -- the subject is "list" (singular); "requirements" is part of the prepositional phrase. (3) are -- "either...or": verb agrees with the nearest subject, "staff members" (plural).',
      },
      {
        instruction: 'Correct the subject-verb agreement error in each sentence.',
        task:
          '(1) The impact of these policies have been widely debated. (2) There was a number of significant errors in the report. (3) The data collected from both experiments are inconclusive.',
        answer:
          '(1) has been -- "impact" is the subject. (2) were -- "a number of" takes a plural verb. (3) is inconclusive -- "data" in formal academic writing is often treated as a singular mass noun; acceptable as plural in some contexts, but the singular is preferred here.',
      },
      {
        instruction:
          'Write three sentences with complex noun phrase subjects, each demonstrating correct subject-verb agreement.',
        task: 'Use: (1) a collective noun, (2) an "each of the..." construction, (3) an inverted sentence with "there".',
        answer:
          '(1) The jury has delivered its verdict after three days of deliberation. (2) Each of the proposed solutions presents its own set of challenges. (3) There are numerous factors contributing to the increase in urban poverty.',
      },
    ],
    commonErrors: [
      'Agreeing the verb with the nearest noun rather than the actual subject.',
      'Treating "none" as always singular -- "none of the reports are" is acceptable.',
      'Using "there is" before a list: "There is bread, milk and eggs" should be "There are...".',
      'Using plural agreement with collective nouns inconsistently within the same passage.',
    ],
    teacherTip:
      'For complex noun phrases, teach the "cross out" strategy: draw a line through any prepositional phrase between subject and verb, then check agreement with what remains. "The quality [of the results] was/were" becomes clearly "The quality was".',
  },

  {
    id: 'igcse-02',
    title: 'Nominalisation for Academic Writing',
    category: 'vocabulary',
    yearGroup: 'IGCSE/IAL',
    duration: '15 minutes',
    learningObjective:
      'Convert verbs and adjectives into noun forms (nominalisation) to achieve a more formal, condensed, and impersonal academic style.',
    explanation:
      'Nominalisation is the process of converting a verb or adjective into a noun form. For example: "decide" -> "decision"; "analyse" -> "analysis"; "significant" -> "significance". Academic and formal writing favours nominalisation because it: (1) creates an impersonal, objective tone by removing actors from the sentence; (2) allows ideas to become subjects of sentences; (3) compresses information. However, overuse can produce dense, lifeless prose, so it should be balanced with active verbs. Nominalisations are often formed with suffixes: -tion, -sion, -ment, -ity, -ness, -ance, -ence, -al.',
    examples: [
      {
        incorrect: 'We analysed the data and found that there was a significant improvement.',
        correct: 'Analysis of the data revealed a significant improvement.',
        explanation:
          'The verb "analysed" becomes the noun "analysis"; the actor "we" is removed; the sentence is more concise and impersonal.',
      },
      {
        correct:
          'The development of new technologies has transformed global communication.',
        explanation:
          '"Develop" -> "development"; the nominalised form allows "development" to be the subject, lending the sentence gravity and abstraction appropriate for academic writing.',
      },
      {
        correct:
          'An investigation into the decline of insect populations is urgently required.',
        explanation:
          '"Investigate" -> "investigation"; "decline" (already a noun here derived from the verb "decline") serves as the object of the preposition.',
      },
      {
        incorrect: 'They were not certain about the results.',
        correct: 'Uncertainty about the results remained.',
        explanation:
          '"Uncertain" -> "uncertainty"; the new nominal subject "uncertainty" feels more detached and analytical.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Convert the underlined verb or adjective into a nominalised form and rewrite the sentence.',
        task:
          '(1) Scientists have "discovered" that the climate is warming. (2) The government "failed" to act quickly. (3) The results were "ambiguous".',
        answer:
          '(1) The discovery that the climate is warming has been confirmed by scientists. (2) The government\'s failure to act quickly proved costly. (3) The ambiguity of the results complicated interpretation.',
      },
      {
        instruction:
          'Identify all nominalisations in this passage and list the verb or adjective each derived from.',
        task:
          'The introduction of stricter regulations led to a reduction in pollution levels. The significance of this development was widely acknowledged.',
        answer:
          '"introduction" <- introduce; "regulations" <- regulate; "reduction" <- reduce; "significance" <- significant; "development" <- develop; "acknowledgement" (implied in "acknowledged") -- though here used as a verb.',
      },
      {
        instruction:
          'Rewrite this informal paragraph using nominalisation to make it suitable for an academic report.',
        task:
          'We looked at how people behave when they are stressed. We found that they perform poorly. We recommend that companies should improve their support systems.',
        answer:
          'An examination of behaviour under conditions of stress revealed a significant decline in performance. It is recommended that companies improve their support systems accordingly.',
      },
    ],
    commonErrors: [
      'Overusing nominalisation until every sentence becomes abstract and impenetrable.',
      'Incorrect suffix: "analysation" instead of "analysis"; "judgement" and "judgment" are both acceptable but be consistent.',
      'Retaining an unnecessary actor after nominalising: "The analysis by us showed..." should simply be "The analysis showed...".',
      'Nominalising when a strong active verb would communicate more clearly and powerfully.',
    ],
    teacherTip:
      'Give students a page from a broadsheet newspaper and a page from a tabloid. Ask them to count nominalisations in each. The broadsheet will have significantly more -- this concretely demonstrates how nominalisation is a register marker, not simply an academic trick.',
  },

  {
    id: 'igcse-03',
    title: 'Hedging Language',
    category: 'style',
    yearGroup: 'IGCSE/IAL',
    duration: '15 minutes',
    learningObjective:
      'Use hedging language to qualify claims appropriately in analytical and academic writing, signalling degree of certainty without undermining the argument.',
    explanation:
      'Hedging means presenting claims with an appropriate degree of caution. In academic and analytical writing, it is rarely appropriate to state claims as absolute facts without evidence. Hedging: (1) shows intellectual honesty; (2) avoids overstating what the evidence supports; (3) is expected in high-level essay writing. Tools for hedging include: modal verbs (may, might, could, would, should); adverbs of degree (perhaps, possibly, arguably, seemingly, apparently); verbs of assertion (suggests, implies, indicates, appears to, seems to); and noun phrases ("there is a possibility that", "evidence suggests"). Avoid underhedging (asserting too much) and overhedging (so cautious the argument loses force).',
    examples: [
      {
        incorrect: 'This poem is about death.',
        correct: 'This poem appears to engage with themes of mortality, arguably exploring the speaker\'s fear of oblivion.',
        explanation:
          '"Appears to" and "arguably" signal interpretation rather than fact; "exploring" is more specific and analytical than the vague "about".',
      },
      {
        correct:
          'The data suggests a correlation between social media use and anxiety, though causal claims remain difficult to substantiate.',
        explanation:
          '"Suggests" hedges the finding; "difficult to substantiate" acknowledges the limits of the evidence -- sophisticated academic hedging.',
      },
      {
        correct:
          'It could be argued that the writer uses the motif of water to symbolise renewal, though an equally compelling reading might interpret it as a symbol of threat.',
        explanation:
          '"Could be argued" and "might interpret" both hedge; the counterargument is acknowledged, strengthening the overall analysis.',
      },
      {
        incorrect: 'Shakespeare definitely wanted audiences to feel sorry for Shylock.',
        correct: 'Shakespeare arguably invites a degree of audience sympathy for Shylock, though the extent of this sympathy remains a matter of critical debate.',
        explanation:
          'Authorial intent cannot be known with certainty. "Arguably" and "a matter of critical debate" hedge appropriately.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Add hedging language to make these claims more appropriately qualified.',
        task:
          '(1) The character represents greed. (2) The writer wants us to feel angry. (3) Economic inequality causes crime.',
        answer:
          '(1) The character could be read as embodying the dangers of unchecked greed. (2) The writer arguably positions the reader to feel a degree of moral outrage. (3) Research suggests a correlation between economic inequality and crime rates, though the causal relationship is complex.',
      },
      {
        instruction: 'Identify the hedging devices used in this sentence and explain the effect of each.',
        task:
          'It seems plausible that Austen may have intended the character of Mr Bennet to represent the limitations of ironic detachment.',
        answer:
          '"It seems plausible" -- epistemic verb phrase, signals this is an interpretive judgement; "may have intended" -- modal verb "may" hedges the claim about authorial intent; "to represent" -- infinitive construction avoids an overly definitive assertion. Combined, they mark the statement as a sophisticated critical interpretation.',
      },
      {
        instruction: 'Rewrite this overhedged sentence so the argument has more force while remaining appropriately qualified.',
        task:
          'It might perhaps be possible that in some cases Dickens could possibly have been trying to perhaps suggest something about poverty.',
        answer:
          'Dickens arguably uses Fagin\'s underworld to expose the systemic poverty that drives children into crime.',
      },
    ],
    commonErrors: [
      'Stating interpretations as facts: "The writer means..." or "This shows that...".',
      'Overhedging with multiple qualifiers in one clause, making the argument seem tentative and unclear.',
      'Using "I think" or "I feel" in formal analytical writing -- replace with "it could be argued" or "arguably".',
      'Hedging the evidence itself rather than the interpretation: "The data perhaps shows 40%..." -- the data shows what it shows; hedge only the interpretation.',
    ],
    teacherTip:
      'Mark two versions of the same paragraph -- one with no hedging, one with appropriate hedging -- and ask students to decide which gets the higher mark and why. This makes the abstract concept concrete and examinable.',
  },

  {
    id: 'igcse-04',
    title: 'Sentence Combining for Effect',
    category: 'sentence-structure',
    yearGroup: 'IGCSE/IAL',
    duration: '20 minutes',
    learningObjective:
      'Combine short sentences into longer, rhythmically varied structures, and understand how sentence length controls pace, emphasis, and reader engagement.',
    explanation:
      'Sentence length is a powerful stylistic tool. Short sentences (five words or fewer) create impact, shock, or urgency. Long, flowing sentences build momentum, layering ideas and drawing the reader along. Skilled writers alternate between the two for effect -- what is sometimes called "long-short" contrast. Techniques for combining sentences include: coordination (using conjunctions), subordination (subordinate clauses), participial phrases, apposition, and absolute phrases. Equally important is the deliberate short sentence after a long one: the contrast creates emphasis on whatever the short sentence says.',
    examples: [
      {
        incorrect: 'She ran. She was tired. She kept going. She reached the finish line.',
        correct:
          'Although exhausted, she kept running, driven by nothing but sheer willpower -- until, finally, she reached the finish line.',
        explanation:
          'Four choppy simple sentences combined using a fronted adjectival, a participial phrase, and a dash-introduced adverbial, creating rhythm and building to a climax.',
      },
      {
        correct:
          'The city had been magnificent once -- towers of glass and steel, parks threaded through with light, a skyline that promised everything. Now it was rubble.',
        explanation:
          'A long, cumulative sentence building a rich picture is immediately followed by a three-word short sentence. The contrast makes the devastation land with maximum impact.',
      },
      {
        correct:
          'Rising early each morning, running regardless of weather, and eating with monastic discipline, he had dedicated three years to the attempt.',
        explanation:
          'Three parallel participial phrases create a sense of accumulation before the main clause delivers the key information.',
      },
      {
        incorrect:
          'The evidence was weak and the methodology was flawed and the sample was too small and the conclusions were therefore unreliable.',
        correct:
          'The evidence was weak, the methodology flawed, and the sample inadequately small; consequently, the conclusions lacked reliability.',
        explanation:
          'Repeated "and" is replaced by a more sophisticated structure: asyndeton for the first two items, then a semicoloned causal connective.',
      },
    ],
    practiceExercises: [
      {
        instruction: 'Combine these sentences into one long sentence using at least two of the following: a subordinate clause, a participial phrase, an appositive.',
        task: 'The novelist was born in Lagos. She later moved to London. She has written four acclaimed books. She won the Booker Prize in 2019.',
        answer:
          'Born in Lagos and later transplanted to London, the novelist -- a Booker Prize winner in 2019 -- has produced four critically acclaimed works. (Other valid combinations accepted.)',
      },
      {
        instruction:
          'Add a short sentence after this long one to create maximum impact.',
        task:
          'For years, the scientists had worked in near isolation, collecting samples in conditions of extraordinary hardship, processing data through long nights, and presenting their findings to a world that largely ignored them.',
        answer:
          'Then, one morning, the phone rang. / Nobody listened. / Until now. (Any short, punchy sentence that creates contrast by delivering a new development or stark summary.)',
      },
      {
        instruction: 'Analyse the sentence rhythm in this passage and explain what effect it creates.',
        task:
          '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness..." (Dickens, A Tale of Two Cities)',
        answer:
          'Dickens uses anaphora ("it was the...") and parallelism to create a rhythmic, incantatory effect, the balanced pairs of opposites mimicking the contradictions of the age. The extended, accumulative sentence refuses to resolve, suggesting the period was defined by irresolvable tension.',
      },
    ],
    commonErrors: [
      'Stringing clauses together with repeated "and" or "but" rather than using more precise connectives.',
      'Writing exclusively long sentences in the belief that length signals sophistication -- short sentences are often more powerful.',
      'Creating a periodic sentence so long that the subject-verb relationship becomes obscured.',
      'Using sentence variation decoratively rather than purposefully -- the structure should match the meaning.',
    ],
    teacherTip:
      'Read a student\'s paragraph aloud, clapping on each sentence boundary. A rapid sequence of claps signals choppy short sentences; a long gap signals a sentence that may need breaking up. Rhythm is physical as well as intellectual.',
  },

  {
    id: 'igcse-05',
    title: 'Metalanguage for Language Analysis',
    category: 'vocabulary',
    yearGroup: 'IGCSE/IAL',
    duration: '20 minutes',
    learningObjective:
      'Use precise metalanguage (the terminology of language analysis) accurately when writing about literary and linguistic techniques, moving beyond vague feature-spotting.',
    explanation:
      'Metalanguage is language used to describe language. In literary and language analysis, it includes: (1) literary/rhetoric devices (metaphor, simile, personification, hyperbole, euphemism, alliteration, sibilance, assonance, anaphora, juxtaposition, oxymoron, pathetic fallacy, bathos); (2) grammatical terms (noun, verb, adjective, adverb, modal, passive voice, syntactic parallelism, polysyndeton, asyndeton); (3) semantic terms (connotation, denotation, semantic field, register, tone, lexical choice). Accurate metalanguage is expected at IGCSE and IAL. Crucially, naming a technique earns no marks -- explaining its effect does.',
    examples: [
      {
        incorrect: 'The writer uses a simile. This is effective.',
        correct:
          'The simile "like a wolf among sheep" carries connotations of predatory violence, positioning the antagonist as a natural threat to the vulnerable community around him.',
        explanation:
          'The term "simile" is named, the quotation is embedded, and -- crucially -- the effect on meaning and characterisation is analysed.',
      },
      {
        correct:
          'Wilfred Owen\'s use of sibilance in "the stuttering rifles\' rapid rattle" creates an onomatopoeic mimicry of gunfire, implicating the very sound of the language in the poem\'s critique of war.',
        explanation:
          '"Sibilance" and "onomatopoeic" are used precisely; the analysis explains auditory effect and thematic purpose.',
      },
      {
        correct:
          'The semantic field of illness and decay -- "fever", "rot", "wasting" -- pervades the opening stanza, establishing the poem\'s central metaphor of a society in moral decline.',
        explanation:
          '"Semantic field" groups the lexical choices analytically, showing pattern rather than isolated feature-spotting.',
      },
      {
        correct:
          'The polysyndeton of "and fear and grief and loss" slows the syntactic pace, forcing the reader to dwell on each successive weight of emotion.',
        explanation:
          '"Polysyndeton" (many conjunctions) is distinguished from the more commonly taught asyndeton (absence of conjunctions); both syntactic effect and reader response are addressed.',
      },
    ],
    practiceExercises: [
      {
        instruction:
          'Match each metalanguage term to the correct example and write one sentence explaining the effect of the technique in that example.',
        task:
          'Terms: juxtaposition, euphemism, bathos, pathetic fallacy. Examples: (A) "He passed away peacefully." (B) "The sky wept as the funeral procession passed." (C) "She was both saint and sinner." (D) "He climbed Everest, swam the Channel, and then popped to Tesco."',
        answer:
          '(A) euphemism -- "passed away" avoids the bluntness of "died", softening the emotional impact for the reader. (B) pathetic fallacy -- the weeping sky projects human grief onto nature, intensifying the mood of mourning. (C) juxtaposition -- the opposition of "saint" and "sinner" captures the character\'s moral complexity. (D) bathos -- the comedic deflation of "popped to Tesco" after heroic feats creates ironic humour.',
      },
      {
        instruction:
          'Write a two-sentence analysis of this extract using at least two metalanguage terms precisely.',
        task:
          '"The fog comes / on little cat feet. / It sits looking / over harbor and city / on silent haunches / and then moves on." (Carl Sandburg)',
        answer:
          'Sandburg\'s extended personification of fog as a cat moving on "little cat feet" and "silent haunches" creates a tone of quiet, unannounced arrival, the domestic familiarity of the image defamiliarising what might otherwise seem threatening. The free verse form, stripped of regular metre, mirrors the fog\'s unhurried, formless movement, reinforcing the semantic field of stealth and transience.',
      },
      {
        instruction:
          'Identify and correct the imprecise metalanguage use in this student response.',
        task:
          '"The author uses lots of language techniques in this paragraph. There is alliteration and other effects which make it more interesting and impactful for the reader."',
        answer:
          'Problems: "lots of language techniques" is vague; "other effects" names nothing; "interesting and impactful" are generic evaluations. Improved: "The writer employs alliteration in [specific quotation], the repeated plosive consonants creating a percussive rhythm that intensifies the sense of urgency in this pivotal scene."',
      },
    ],
    commonErrors: [
      'Feature-spotting without analysis: naming a technique and writing "this makes it more interesting."',
      'Confusing metaphor and simile: a simile uses "like" or "as"; a metaphor asserts equivalence directly.',
      'Using "imagery" as a catch-all term instead of specifying the type (visual imagery, tactile imagery, etc.).',
      'Attributing effects to the wrong level of language: a comma is a punctuation choice, not a "language technique."',
    ],
    teacherTip:
      'Run a "technique auction": give students a list of 10 metalanguage terms and ask them to bid points on which ones they are confident using with accuracy. Terms no one bids on become the focus of the lesson.',
  },
];
