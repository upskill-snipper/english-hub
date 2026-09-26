// @ts-nocheck
/**
 * Key Stage 3 mock papers, Years 7 to 9. Nothing imports this file, so no page
 * or loader serves these papers; it is still in a public repository, and
 * scripts/check-mock-exam-extracts.mjs reads it.
 *
 * WHAT WAS WRONG (found by that script on 26 September 2026, fixed on the
 * 27th). The four prose passages were written for these papers, and nothing
 * said so. The Year 9 story was printed as an 'Extract from "The Glass Girl"'
 * and a question asked what happens next "in the novel"; the Year 8 article
 * was introduced as "from a non-fiction article" and printed inside quotation
 * marks, as if quoted from one. Each passage is now a constant below with a
 * _SOURCE label saying it was specially written, carried by every question as
 * extractSource, and the papers say "story", not "novel".
 *
 * The model answers quoted words the passages do not contain: nine quotations
 * of four words or more in five questions, and shorter ones besides. Among
 * them "those hunting grounds are disappearing" (the story says "were"), "each
 * year there is less ice", "ice-free summers within this century", "we
 * weren't trying anything", "not based on wanting him to change" (the passage
 * says "wasn't based"), "paces" and "kindness" for "paced" and "kindly", and
 * in a Year 7 answer "long I stood", which is Robert Frost's, not the forest
 * passage's. Other claims were untrue of the words quoted: a simile called a
 * metaphor, three times; a staccato "She took a deep breath. She stepped
 * forward." that the passage never prints; "triple negations" where there is
 * one; an article said to refute "competing explanations" it never mentions.
 * Each answer now quotes only its passage and says only what those words bear
 * out.
 * Three questions about "this extract" or "both texts" printed no passage, and
 * one about the polar-bear story printed only the article; each now prints
 * what it asks about.
 *
 * The passages used unspaced hyphens as dashes ("hungry-so hungry", "him-his").
 * Unspaced, a hyphen joins two words into one, so a correct quotation could
 * not be matched to the passage; they are now spaced.
 *
 * The Year 9 Shakespeare answers said Puck anointed Lysander knowingly, that
 * Oberon ordered Bottom's transformation, that Puck anointed Demetrius and
 * that Hermia fell under the magic. Act 3 Scene 2 of the held edition
 * (src/data/full-texts/a-midsummer-nights-dream.ts) says otherwise: Puck
 * protests "I mistook", Oberon anoints Demetrius himself, the ass's head is
 * Puck's own idea, and Hermia is never enchanted. The answers now follow the
 * play, and every line they quote is in that edition.
 *
 * A SECOND READ, THE SAME DAY, found what that fix left. The same passages
 * and most of these questions are in src/data/mock-exams-ks3.ts, where most
 * of the faults below had already been found; this file had not been brought
 * into line.
 *
 *   - The Year 9 poetry paper was left "for the founder's decision on rights".
 *     It is not his decision: only printing more than the house rule allows
 *     is. Its answers quoted, as Frost's, three lines about wanting wear and a
 *     phrase ("as it were") that are not in The Road Not Taken, and a line
 *     made by joining two of his; the mark scheme listed "black leaves", where
 *     the poem's leaves are the ones no step had darkened. The form answer
 *     said the poem has five stanzas, that the rhyme scheme changes after the
 *     first and that the last stanza is shorter: the 1916 text (Mountain
 *     Interval, Gutenberg #29345) has four stanzas of five lines, every one
 *     rhymed ABAAB. The extract quoted 31 of the poem's 144 words, over the
 *     15% house cap, spelt "less travelled" where Frost wrote "traveled",
 *     gave two words of the middle stanzas, on which the answers about the
 *     speaker's circular thinking depend, and sent
 *     the student to "the Edexcel/board-issued anthology", though of Frost's
 *     poems src/lib/board/set-texts.ts lists only "Out, Out-". The paper now
 *     prints FROST_SUMMARY, which quotes 20 words (14%), paraphrases all four
 *     stanzas and describes the form; the instructions and the form question
 *     say so, and the four answers quote only what it quotes.
 *   - The Arctic passage said the region warms "twice as fast as the global
 *     average"; a widely cited 2022 study puts it at nearly four times since
 *     1979, so it now says "more than twice". It defined an ice-free summer as
 *     one in which no sea ice persists; scientists call the Arctic ice-free
 *     below one million square kilometres, so it now says "almost no sea ice".
 *   - The Year 8 Q4 answer, asked for "detailed reference to both texts",
 *     quoted nothing from Extract B. It now does, and makes its choice at the
 *     start rather than in its last lines.
 *   - Year 9 Q3 still called "the simple fact of him" the final phrase; the
 *     passage goes on past it to "unconditional". The same answer called
 *     Elena's change a move "into adult love", though the passage gives
 *     neither sibling's age.
 *   - The Dream answers said the play's conflicts are "created by magic" (it
 *     opens with Egeus and the law of Athens, and a fairy quarrel over a
 *     changeling boy), that "the magic is undone" by the end (Demetrius is
 *     left enchanted), that characters do not choose their partners (Hermia
 *     defies her father to choose Lysander), and that Titania treats Bottom
 *     differently "based on his appearance" (the love juice, not his looks,
 *     makes her dote on him). Twice they called the juice's work
 *     "love-making", which is not a phrase for a Year 9 paper. Three answers
 *     quoted nothing, although the instructions ask for quotations; each now
 *     quotes lines checked against the held edition.
 *   - The persistence essay said Einstein "struggled with formal education"
 *     and that scientists "deemed his theories absurd", a myth; credited
 *     Edison with "the light bulb", which others had made before his workshop
 *     made it practical; called persistence "necessary and sufficient" two
 *     sentences after conceding that some fields need natural ability; and
 *     said "surveys consistently show" that founders fail first, naming none.
 *   - The Year 7 model letter opens "Dear Mr/Mrs [Headteacher's name]" and
 *     closed "Yours respectfully". A letter to a named person closes "Yours
 *     sincerely", and the mark scheme marks the closing.
 *   - The answers mixed American and British spelling, and set a dash as an
 *     unspaced hyphen in more than fifty places. Both are now the house style.
 */
export interface MockExamPaper {
  id: string
  title: string
  board: string
  subject: string
  tier?: string
  duration: number
  totalMarks: number
  sections: MockExamSection[]
}

export interface MockExamSection {
  id: string
  title: string
  instructions: string
  questions: MockExamQuestion[]
}

export interface MockExamQuestion {
  id: string
  questionNumber: number
  marks: number
  questionText: string
  extract?: string
  /** Where the extract comes from, or that it was written for this paper. */
  extractSource?: string
  bulletPoints?: string[]
  markScheme: string
  modelAnswer?: string
}

const FOREST_EXTRACT =
  "Maya stood at the edge of the forest, her heart beating fast. The trees seemed to tower above her, their branches reaching like dark fingers towards the grey sky. She had promised to come here alone, but now that she was actually standing at the entrance, doubts crept into her mind. What if something went wrong? What if she couldn't find her way back? She took a deep breath, clutched her father's old compass tighter, and stepped forward into the shadows."
const FOREST_EXTRACT_SOURCE = 'Specially written for this paper; not taken from a published book'

const ARCTIC_ARTICLE_EXTRACT =
  'Extract A - Non-Fiction:\nThe Arctic is warming more than twice as fast as the global average, a phenomenon known as Arctic amplification. This accelerated warming has profound consequences for sea ice coverage. Satellite data collected over the past four decades reveals a consistent and alarming pattern: the extent of summer sea ice in the Arctic has declined by approximately 13% per decade. This means that each summer, the frozen ocean surface covering the Arctic is shrinking. Scientists project that within this century, the Arctic Ocean may experience ice-free summers, in which almost no sea ice survives to the end of the season. The loss of sea ice has cascading ecological consequences, disrupting ecosystems that have evolved over millennia.'
const ARCTIC_ARTICLE_EXTRACT_SOURCE =
  'Extract A: specially written for this paper; not taken from a published article'

const POLAR_BEAR_STORY_EXTRACT =
  'Extract B - Fiction:\nKali pulled herself onto the ice floe, her massive paws dripping with saltwater. She was hungry - so hungry that her ribs showed beneath her thick white fur. The ice was thinner than it used to be, breaking more easily under her weight. Summer had come earlier than usual, and with it, the dreadful melting. She remembered her mother teaching her to hunt seals on the stable ice, but those hunting grounds were disappearing. Each year, there seemed to be less ice, and each year she had to swim farther to find it. The ice floes stretched before her, fewer and more fragile, while the dark ocean beneath waited like an empty throat.'
const POLAR_BEAR_STORY_EXTRACT_SOURCE =
  'Extract B: specially written for this paper; not taken from a published book'

const BOTH_ARCTIC_EXTRACTS = `${ARCTIC_ARTICLE_EXTRACT}\n\n${POLAR_BEAR_STORY_EXTRACT}`
const BOTH_ARCTIC_EXTRACTS_SOURCE = 'Extracts A and B: both specially written for this paper'

const GLASS_GIRL_EXTRACT =
  'From "The Glass Girl", a story written for this paper:\n\nElena had always been the quiet one - the one who listened rather than spoke, who observed the world\'s chaos from behind glass, even when she was in the middle of it. Marcus, her older brother by four years, existed in that chaos as if he\'d been born for it. He animated every room he entered, filled silences with laughter that seemed to cost him nothing. Where she was interior, he was exterior.\n\nThat evening, as rain drummed against the old library windows, Elena sat curled in the leather armchair while Marcus paced in front of the fireplace, gesturing wildly as he talked about his new venture. "It\'s foolproof," he was saying, though Elena had learned long ago that Marcus\'s "foolproof" plans frequently required foolish luck to succeed. "You just need to believe in it, Elena. You\'re always so cautious, so afraid. Sometimes you have to take risks."\n\nHe said it kindly, even with affection, but the words struck something deep. She wasn\'t afraid, exactly. She was careful. She was thoughtful. She was... She couldn\'t finish the thought. Instead, she asked quietly, "What if it fails?"\n\nMarcus stopped pacing. For a moment, the only sound was the rain and the fire. "Then we fail," he said simply. "But at least we tried."\n\nElena wanted to point out that "we" wasn\'t trying anything - he was - but she didn\'t. Instead, she found herself leaning forward, asking him to tell her more. And as he talked, animated and passionate, she realised something about her love for him: it wasn\'t based on wanting him to change, or on trying to change herself for him. It was based on the simple fact of him - his particular way of moving through the world, his particular way of loving her despite their fundamental differences. It was, she understood finally, unconditional.'
const GLASS_GIRL_EXTRACT_SOURCE =
  'Specially written for this paper; not taken from any published book'

/**
 * Year 9 poetry: a summary of Robert Frost's The Road Not Taken, not the poem.
 * The poem is in UK copyright until the end of 2033, so this quotes 20 of its
 * 144 words (14%), none more than one line at a time, under the 15% house cap
 * in src/lib/study-guides/fair-dealing.ts, and paraphrases the rest. The form
 * is described, not quoted. The model answers quote nothing that is not
 * quoted here. Checked against the 1916 text (Mountain Interval, Gutenberg
 * #29345). See the docblock at the top.
 */
const FROST_SUMMARY =
  'The Road Not Taken (1916) - Robert Frost\n\n[UK rights notice: Frost died in 1963, so under UK law (CDPA 1988 s.12: life plus 70 years) the poem is in copyright until 31 December 2033. It is not printed here: this is a summary with a few short quotations, as fair dealing allows. The poem is in the public domain in the United States but not in the UK. To read it whole, use a printed anthology or a library copy.]\n\nOpening stanza (summary, with short quotations): two roads have "diverged" in a "yellow wood". The speaker, "sorry I could not travel both", stands for a long while gazing down one of them until it curves away among the bushes.\n\nMiddle stanzas (paraphrase): the speaker takes the other road, giving as a reason that it looked grassier and less used, then admits that walkers had worn both of them to much the same degree. That morning both "equally lay" under fallen leaves that no one had walked on. The speaker means to come back to the first road some other time, but, aware that each path opens into others, suspects that this will never happen.\n\nClosing stanza (paraphrase): years later, the speaker imagines telling the story "with a sigh", claiming to have taken the road that fewer people had walked, and saying that this "has made all the difference". Set beside the earlier admission that the two roads looked alike, this produces the poem\'s central irony.\n\nForm (description): four stanzas of five lines, twenty lines in all. Every stanza has the same rhyme scheme, ABAAB, built on only two rhyme sounds. Each line has four stressed beats, mostly iambic but with extra unstressed syllables, so the rhythm is steady but loose. The first three stanzas tell the story in the past tense; the last looks ahead to a retelling far in the future. In that last stanza a sentence breaks off with a dash at the end of one line, and the next line begins by repeating the word "I" that ended the line before.'
const FROST_SUMMARY_SOURCE =
  'A summary of Robert Frost, "The Road Not Taken" (1916), with short quotations; the poem is not printed'

export const ks3MockExams: MockExamPaper[] = [
  {
    id: 'ks3-y7-reading-001',
    title: 'Year 7 Reading Assessment - Fiction Extract',
    board: 'All',
    subject: 'English Literature',
    duration: 45,
    totalMarks: 40,
    sections: [
      {
        id: 'ks3-y7-reading-section-1',
        title: 'Reading Comprehension: Fiction Extract',
        instructions:
          'Read the extract carefully. Answer all questions in this section. You may refer back to the extract at any time. Use your own words where possible. This assessment tests your understanding of character, setting, atmosphere, and language techniques.',
        questions: [
          {
            id: 'ks3-y7-reading-q1',
            questionNumber: 1,
            marks: 4,
            questionText:
              "What does the extract tell us about the main character's feelings at the beginning?",
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: 1 mark for identifying one emotional state (nervous/scared/excited/anxious). 1 mark for identifying a second contrasting or additional emotional state (determination/courage). 1 mark for providing relevant supporting detail from the text that demonstrates this emotion. 1 mark for explaining how the quoted text creates or reveals this feeling. Common misconceptions: Students often list only one emotion or provide generic answers. Ensure they use specific textual evidence and explain the connection between the evidence and the emotion. Grade boundaries: 4 marks = sophisticated interpretation showing multiple emotions and strong textual analysis; 3 marks = clear identification with good support; 2 marks = basic identification with some support; 1 mark = minimal response.',
            modelAnswer:
              'Maya feels both nervous and scared at the beginning of the extract. The writer shows her nervousness through physical description: "her heart beating fast" is a physiological response to anxiety and fear. Her internal thoughts reveal her emotional state clearly. We are told that "doubts crept into her mind", suggesting anxiety, and she asks herself alarming questions: "What if something went wrong?" and "What if she couldn\'t find her way back?" These rhetorical questions demonstrate her fearful state of mind. However, beneath this fear lies determination. Despite her doubts and fears, she takes action: "She took a deep breath, clutched her father\'s old compass tighter, and stepped forward into the shadows." This shows courage overcoming fear. The compass also has emotional significance - by gripping it "tighter," she is drawing strength from it, suggesting emotional resilience beneath her fear. The extract is notable for showing psychological complexity: the character feels multiple, sometimes contradictory emotions simultaneously. This makes her feel realistic and three-dimensional.',
          },
          {
            id: 'ks3-y7-reading-q2',
            questionNumber: 2,
            marks: 4,
            questionText:
              'Find three words or phrases from the extract that create a tense or frightening atmosphere.',
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: Award 1 mark for each valid phrase identified (maximum 3 marks). Phrases must be accurately copied or closely paraphrased from the extract. 1 mark for explanation of how each phrase creates tension/fear (maximum 4 marks total, but can carry over if student provides excellent explanations). Guidance: Look for descriptive language, verbs, adjectives, and figurative language that convey unease. Accept valid alternatives that serve the same function. Grade boundaries: 4 marks = three phrases with detailed, insightful explanations; 3 marks = three phrases with clear explanations; 2 marks = two phrases with explanations; 1 mark = one phrase or minimal explanation.',
            modelAnswer:
              '"Dark fingers" - The branches reach "like dark fingers": this simile personifies them as something sinister and threatening. Fingers are normally associated with human touch and can suggest reaching out to grab something. Dark has negative connotations. Together, the phrase suggests the forest itself is alive, sentient, and dangerous. "Doubts crept into her mind" - The verb "crept" is particularly effective. It suggests something unwanted and sneaky entering without permission, like an intruder moving silently through a house. The word choice emphasises that her fear is not a rational decision but something that infiltrates her mind. The word "crept" is commonly used for frightening scenarios. "Into the shadows" - Shadows are the opposite of light, and darkness is traditionally associated with danger, the unknown, and fear. The prepositional phrase "into the shadows" suggests the character is entering a space where vision is limited and danger could be hidden. Shadows obscure reality and create uncertainty, which is intrinsically frightening.',
          },
          {
            id: 'ks3-y7-reading-q3',
            questionNumber: 3,
            marks: 5,
            questionText:
              'Why do you think the author mentions that Maya is carrying "her father\'s old compass"? What does this object suggest about Maya\'s relationship with her father?',
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: 1-2 marks: Identifies a plausible literal reason (navigation/practical purpose). 2-3 marks: Explains how it serves a practical purpose AND discusses emotional significance. 3-5 marks: Sophisticated analysis discussing sentimental value, parental support, symbolism, confidence, courage. Also explores how the specific detail "old" and "her father\'s" enriches interpretation. Grade boundaries: 5 marks = excellent response showing deep understanding of symbolism and emotional significance; 4 marks = clear analysis of multiple functions; 3 marks = identifies emotional significance; 2 marks = basic practical explanation; 1 mark = minimal response.',
            modelAnswer:
              'The mention of the compass serves multiple purposes that enrich our understanding of Maya and her family. On a practical level, a compass will help her navigate through the forest and find her way back, addressing her specific fear about getting lost. However, the description provides much more emotional depth than a compass strictly requires. The fact that it\'s "her father\'s old compass" - emphasising both the possession and the object\'s age - suggests this is not just any compass but a meaningful family heirloom. This implies Maya has a close or significant relationship with her father, and she is carrying something precious to him with her into the forest. The detail "old" suggests this object has history, perhaps suggesting the father once undertook his own adventures. By carrying it, Maya is metaphorically carrying her father\'s support and perhaps his courage into her challenge. The action of gripping it "tighter" becomes emotionally significant - under pressure and fear, Maya reflexively holds the object more firmly, seeking comfort and emotional support from this connection to her father. The compass thus represents both literal guidance (physical navigation) and emotional guidance (parental support). This is a sophisticated narrative technique: by grounding Maya\'s emotional state in a concrete object, the author makes her internal emotional world tangible and visible to the reader. The compass becomes a symbol of the support systems and relationships that help us face our fears.',
          },
          {
            id: 'ks3-y7-reading-q4',
            questionNumber: 4,
            marks: 4,
            questionText:
              'Choose one adjective to describe Maya based on this extract. Support your choice with evidence from the text.',
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: 1 mark for choosing an appropriate adjective (brave, fearful, determined, cautious, resolute, ambitious, anxious, etc.). 1 mark for providing relevant supporting detail. 1 mark for explaining how this detail supports the chosen adjective. Maximum 4 marks. Grade boundaries: 4 marks = sophisticated adjective with excellent explanatory analysis; 3 marks = appropriate adjective with clear support; 2 marks = reasonable adjective with basic support; 1 mark = adjective or evidence only.',
            modelAnswer:
              'Maya is brave. Although she experiences significant fear, as evidenced by her "heart beating fast" and her anxious questions ("What if something went wrong?"), she overcomes this fear to take action. Bravery is not the absence of fear but the ability to act despite it. The extract clearly demonstrates this. She "had promised to come here alone", and although "doubts crept into her mind", she follows through on that commitment. The final action - "She took a deep breath, clutched her father\'s old compass tighter, and stepped forward into the shadows" - shows her consciously summoning courage. The deep breath is a deliberate calming technique, the tighter grip on the compass shows her seeking support, but crucially, she steps forward. She enters the shadows despite the frightening atmosphere and her internal doubts. This is the definition of bravery: doing something difficult and frightening because it matters, because you\'ve committed to it, and because the goal is worth the fear.',
          },
          {
            id: 'ks3-y7-reading-q5',
            questionNumber: 5,
            marks: 5,
            questionText:
              'Write a paragraph explaining how the writer creates tension in this extract. In your answer, refer to specific words, phrases and techniques.',
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: 1 mark: Basic identification of tension-creating elements. 2 marks: Identifies one specific technique with evidence. 3 marks: Explains effect of identified technique; begins to show understanding of how technique creates tension. 4 marks: Discusses multiple techniques and their combined/cumulative effect. 5 marks: Well-developed, sophisticated analysis with nuanced discussion of techniques, precise evidence, clear explanation of effects, and discussion of how elements work together. Grade boundaries: Use of subject terminology (metaphor, personification, imagery, narrative technique) is expected at this level.',
            modelAnswer:
              'The writer creates tension through several interlocking techniques that build the reader\'s anxiety alongside Maya\'s. Firstly, the imagery makes the forest threatening: the simile "branches reaching like dark fingers" personifies the trees as something alive that could grab her, which creates immediate unease. Secondly, Maya\'s thoughts are given to us directly as questions - "What if something went wrong?" and "What if she couldn\'t find her way back?" - which expose her anxious thought process. Questions left unanswered are more unsettling than statements, and they invite the reader into her worried mind. Thirdly, the setting closes in on her: the trees "seemed to tower above her", the sky is "grey" and the way ahead leads "into the shadows", so everything suggests she will not be able to see what is waiting for her. Fourthly, the pacing contributes to tension. After three longer sentences of description and explanation, the two short questions, each beginning "What if", quicken the pace as her worries crowd in. The final sentence then strings three actions together - she "took a deep breath, clutched her father\'s old compass tighter, and stepped forward" - so that the hesitation breaks into movement one step at a time. Finally, the writer tells us she "had promised to come here alone", which emphasises her vulnerability. The extract ends as she steps into the shadows, leaving the reader uncertain about what happens next. This unresolved tension leaves the reader wanting to know more, creating engagement and suspense.',
          },
          {
            id: 'ks3-y7-reading-q6',
            questionNumber: 6,
            marks: 6,
            questionText:
              "The passage presents a moment of internal conflict for Maya. Explain what the conflict is and discuss the writer's methods for showing this psychological struggle.",
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: 1 mark: Clearly identifies the internal conflict (duty/promise vs. fear/self-preservation). 1 mark: Identifies physical manifestations of conflict. 1 mark: Identifies rhetorical questions as a technique. 1 mark: Discusses how this technique reveals inner conflict. 1 mark: Notes contrast between hesitation and action. 1 mark: Synthesises analysis into coherent response. Grade boundaries: 6 marks = sophisticated, nuanced analysis showing deep understanding; 5 marks = clear identification of conflict with good technique analysis; 4 marks = identifies conflict and explains some techniques; 3 marks = basic identification; below 3 = incomplete response.',
            modelAnswer:
              'Maya faces a profound internal conflict between a promise she has made (she "had promised to come here alone", though we are not told to whom) and her survival instinct (fear of danger). This is not a simple good-versus-evil conflict but a realistic human dilemma: doing what you\'ve committed to despite legitimate concerns about safety. The writer reveals this conflict through multiple layered techniques. Physical manifestations appear immediately: "her heart beating fast" and "doubts crept into her mind" show her body and conscious mind both responding to fear. These aren\'t separate sensations but aspects of the same psychological state. The series of rhetorical questions - "What if something went wrong? What if she couldn\'t find her way back?" - represent her anxious thought process directly. Unlike statements, questions express uncertainty and create a circular, self-feeding anxiety. The repeated "What if" structure emphasises obsessive, circular thinking rather than rational deliberation. The writer also holds her still at the threshold: she "stood at the edge of the forest" and is "actually standing at the entrance", and she does not move until the last sentence, so the reader waits with her while her mind races. The sharp contrast between her hesitation and her final action creates dramatic tension. She thinks, doubts, questions - but then "took a deep breath, clutched her father\'s old compass tighter, and stepped forward." The progression suggests conscious effort to overcome fear. The deep breath is a deliberate technique to calm herself; the tighter grip seeks emotional support; stepping forward is the commitment to action despite doubt. The writer brilliantly captures the messy psychological reality of facing a difficult decision: anxiety and determination coexisting, not in neat sequence, but simultaneously.',
          },
          {
            id: 'ks3-y7-reading-q7',
            questionNumber: 7,
            marks: 4,
            questionText:
              'Based on the extract, what do you predict will happen next in the story? Use evidence from the text to support your prediction.',
            extract: FOREST_EXTRACT,
            extractSource: FOREST_EXTRACT_SOURCE,
            markScheme:
              'Mark allocation: 1 mark: Makes a plausible prediction about future events. 1 mark: Provides textual evidence to support prediction. 1 mark: Explains the connection between evidence and prediction. 1 mark: Shows sophisticated understanding of character/narrative patterns. Grade boundaries: 4 marks = thoughtful, well-reasoned prediction with strong textual support; 3 marks = plausible prediction with clear support; 2 marks = basic prediction with some support; 1 mark = prediction only or minimal support.',
            modelAnswer:
              'Based on this extract, I predict Maya will encounter something significant in the forest, likely something initially frightening or mysterious. My prediction is based on several contextual clues. Firstly, she "had promised to come here alone", suggesting this journey has purpose and meaning. She wouldn\'t go through such anxiety without a goal. Secondly, the emphasis on the compass and her father\'s connection suggests the forest expedition relates to discovering something about herself or testing her courage. Thirdly, the ominous atmosphere - the "dark fingers" of branches, the "shadows" - suggests something dramatic or at least emotionally significant will occur. The careful psychological work showing her fear and courage suggests the narrative is building towards a moment where these qualities matter. However, I also predict Maya will find she is stronger than she believes. The fact that she moves forward despite fear suggests she may discover capability or resilience she didn\'t expect. Given that the narrative has invested so much in her internal struggle and her ultimate decision to proceed, the story likely rewards her courage with some form of success, discovery, or growth, rather than pure disaster. The compass, carrying her father\'s support, suggests she won\'t be entirely alone or powerless in whatever she encounters.',
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y7-writing-001',
    title: 'Year 7 Writing Assessment - Creative & Transactional',
    board: 'All',
    subject: 'English Language',
    duration: 45,
    totalMarks: 40,
    sections: [
      {
        id: 'ks3-y7-writing-section-1',
        title: 'Transactional Writing (Formal Letter)',
        instructions:
          'You have received a letter from your school about changes to the lunch facilities. Write a formal letter of response to the headteacher expressing your views. You should aim for 150-200 words. Formal letters follow a specific structure and tone appropriate for communicating with authority figures. (20 marks)',
        questions: [
          {
            id: 'ks3-y7-writing-q1',
            questionNumber: 1,
            marks: 20,
            questionText:
              'Write a formal letter to your headteacher responding to proposed changes in the school lunch system. You may be in favour of or against the changes, or have mixed views.',
            bulletPoints: [
              'Structure your letter correctly with date, address, greeting, and sign-off',
              'Use a formal tone throughout - no slang, abbreviations, or casual language',
              'Give at least two reasons for your viewpoint with supporting detail',
              'Use paragraphs to organise your ideas logically (introduction, body paragraphs, conclusion)',
              'Write approximately 150-200 words for this section',
            ],
            markScheme:
              'Spelling and punctuation (5 marks): Spell words correctly including subject-specific vocabulary; use full stops, commas, apostrophes, and other punctuation accurately; consistent use of standard English conventions. Grammar and syntax (5 marks): Use complete sentences with varied structures; match subjects and verbs correctly; maintain consistent tense throughout; use appropriate verb forms for formal register. Vocabulary and register (5 marks): Use formal language appropriate for letter to headteacher; select ambitious vocabulary choices; avoid slang, contractions, or colloquialisms; sustain formal tone throughout. Structure and organisation (5 marks): Correct letter format with date, addresses, greeting, body paragraphs, and closing; logical paragraph structure; clear introduction and conclusion; ideas presented clearly and coherently. Grade boundaries: 18-20 marks = excellent formal writing with virtually no errors; 15-17 marks = secure understanding with few errors; 12-14 marks = sound writing with occasional errors; 9-11 marks = generally competent with some errors; below 9 marks = developing skills with frequent errors.',
            modelAnswer:
              "[Your address]\nLondon\nSW15 4PR\n\n[Date: 27th March 2026]\n\nDear Mr/Mrs [Headteacher's name],\n\nI am writing to express my views regarding the proposed changes to our school lunch facilities.\n\nI support the planned improvements because they will provide healthier meal options. Currently, the canteen serves limited vegetarian and vegan choices, which is unfair to students with dietary requirements or preferences. The new menu will include a wider variety of nutritious options, benefiting students' health and wellbeing during the school day.\n\nAdditionally, the proposed extended lunch break will give students adequate time to eat properly and rest. This will reduce stress and improve our focus and concentration in afternoon lessons. Students will not feel rushed, and lunchtime will become a genuine break from academic pressure.\n\nHowever, I am concerned about the increased meal prices. Many families will find the cost increase difficult to manage. I would appreciate reassurance that financial support or subsidies will be available for students who need assistance.\n\nOverall, I believe the changes are positive and will significantly improve our school experience. I thank you for considering this matter.\n\nYours sincerely,\n[Your name]\nYear 7",
          },
        ],
      },
      {
        id: 'ks3-y7-writing-section-2',
        title: 'Creative Writing',
        instructions:
          'Write a creative short story based on the prompt provided. Aim for 250-300 words. Use interesting vocabulary, varied sentence structures, and effective narrative techniques. Consider using dialogue, description, and character development. (20 marks)',
        questions: [
          {
            id: 'ks3-y7-writing-q2',
            questionNumber: 2,
            marks: 20,
            questionText:
              'Write a creative short story beginning with this opening line: "The box had been sitting in the attic for fifty years, and nobody knew what was inside."',
            bulletPoints: [
              'Develop a clear narrative with beginning, middle, and end',
              'Use vivid descriptions to engage the reader',
              'Include at least one moment of tension or surprise',
              'Use varied sentence lengths and structures for effect',
              'Write approximately 250-300 words for this section',
              'Remember to use dialogue if appropriate to enhance the story',
            ],
            markScheme:
              "Narrative and content (5 marks): Clear narrative structure with discernible beginning, middle, and end; engaging story with developed plot; characters shown through action and/or dialogue; meaningful content throughout. Descriptive language and imagery (5 marks): Vivid descriptions engaging reader's senses; effective use of similes, metaphors, or personification; precise word choices; creates atmosphere and mood. Sentence variety and fluency (5 marks): Varied sentence lengths create pace and effect; complex sentences demonstrate control; smooth transitions between ideas; sophisticated use of conjunctions and connectives. Technical accuracy (5 marks): Accurate spelling including ambitious vocabulary; consistent and correct punctuation; standard English grammar; few errors that don't impede meaning. Grade boundaries: 18-20 marks = sophisticated, engaging narrative with excellent technique; 15-17 marks = well-developed story with good descriptive language; 12-14 marks = clear story with adequate description; 9-11 marks = basic story with some technique; below 9 marks = developing narrative with limited technical control.",
            modelAnswer:
              "The box had been sitting in the attic for fifty years, and nobody knew what was inside. It was Grandpa's secret, he'd always said, one he'd take to his grave.\n\nWhen he passed, twelve-year-old Emma found herself exploring the dusty attic, searching for old photographs. The wooden box caught her eye - ornately carved, locked with a brass clasp. She felt like a detective on an adventure.\n\nAfter an hour of searching, Emma discovered the tarnished key in Grandpa's desk drawer. Her hands trembled as she climbed back to the attic. The lock clicked open, releasing decades-old dust.\n\nInside lay not treasure or secrets, but memories. Letters tied with faded ribbon, photographs of Grandpa as a young man with an unfamiliar woman, ticket stubs from London in 1973, and a journal. As Emma read, a hidden story emerged: Grandpa's life before he married Grandma. A love story cut short by circumstance, a woman he'd never stopped thinking about, dreams deferred but never forgotten.\n\nEmma sat among the boxes, tears streaming down her face - not from sadness, but from the realisation that Grandpa had been more than just her grandfather. He'd been a young man with passions, heartbreak, and unfulfilled dreams. The box wasn't a secret he'd wanted to hide; it was a part of himself he'd carefully preserved and protected.\n\nEmma carefully returned everything to the box, now understanding why it had been sealed for fifty years. Some memories are too precious to forget, but sometimes too painful to share. She would keep his secret - not out of obligation, but out of love.",
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y8-reading-001',
    title: 'Year 8 Reading Assessment - Non-Fiction & Fiction Comparison',
    board: 'All',
    subject: 'English Literature',
    duration: 50,
    totalMarks: 50,
    sections: [
      {
        id: 'ks3-y8-reading-section-1',
        title: 'Reading Comprehension: Dual Text Analysis',
        instructions:
          'Read both extracts carefully. Both were written for this paper: the first is a short non-fiction piece about climate change; the second is a short story about a polar bear. You will answer questions comparing these texts. You may refer back to both extracts at any time.',
        questions: [
          {
            id: 'ks3-y8-reading-q1',
            questionNumber: 1,
            marks: 4,
            questionText:
              'According to the non-fiction extract, what is happening to Arctic sea ice? Provide two pieces of evidence from the text.',
            extract: ARCTIC_ARTICLE_EXTRACT,
            extractSource: ARCTIC_ARTICLE_EXTRACT_SOURCE,
            markScheme:
              '1 mark for identifying that sea ice is declining/shrinking. 1 mark for first piece of evidence (either the 13% per decade statistic or the warming rate). 1 mark for second piece of evidence (scientist projections OR mention of "ice-free summers"). 1 mark for showing understanding that this has serious/ecological consequences.',
            modelAnswer:
              'According to the extract, Arctic sea ice is declining at an alarming rate. The first piece of evidence is the statistic that summer sea ice extent "has declined by approximately 13% per decade" over the past forty years. This shows a consistent, measurable loss of ice. The second piece of evidence is that scientists project the Arctic Ocean "may experience ice-free summers" within this century, suggesting the situation is becoming increasingly severe. The extract emphasises the serious consequences of this loss: "cascading ecological consequences, disrupting ecosystems that have evolved over millennia." The rapid decline of sea ice is presented as an urgent environmental crisis.',
          },
          {
            id: 'ks3-y8-reading-q2',
            questionNumber: 2,
            marks: 5,
            questionText:
              'Compare how the two extracts present the Arctic environment and the impact on wildlife.',
            extract: BOTH_ARCTIC_EXTRACTS,
            extractSource: BOTH_ARCTIC_EXTRACTS_SOURCE,
            markScheme:
              '1 mark: Identifies that both extracts discuss declining Arctic ice. 1 mark: Notes that non-fiction uses scientific/objective language; fiction uses emotional/descriptive language. 1 mark: Compares their perspectives on environmental change - science treats as ecological crisis; fiction shows personal/individual impact. 1 mark: Discusses impact on wildlife - non-fiction mentions general "ecosystems"; fiction shows specific consequences for individual polar bear. 1 mark: Evaluates effectiveness of different approaches (perhaps noting that fiction creates emotional engagement while non-fiction creates urgency through data).',
            modelAnswer:
              'Both extracts address the Arctic environmental crisis and its impact on wildlife, but they use markedly different approaches. The non-fiction extract presents the crisis through scientific evidence: specific statistics (13% per decade decline), scientific terminology ("Arctic amplification"), and projections of future scenarios (ice-free summers). It discusses impact on wildlife in general terms: "cascading ecological consequences, disrupting ecosystems." This creates urgency and credibility through objective data. The fiction extract presents the same environmental crisis through the experience of an individual polar bear, Kali. Rather than statistics, we get sensory details: Kali\'s hunger, her dripping paws, the feeling of ice "breaking more easily." The fiction extract emphasises personal consequences: Kali remembers healthier times ("her mother teaching her"), notes the loss of traditional hunting grounds, and struggles with the practical reality of needing to "swim farther to find" ice. The simile "like an empty throat" conveys danger and desperation emotionally. Whereas non-fiction discusses abstract "ecosystems," fiction shows a specific individual animal struggling to survive. The non-fiction approach is authoritative and alarming; the fiction approach is emotionally engaging and empathetic. Together, they present the crisis both as a scientific reality and as a personal tragedy, appealing to both reason and emotion.',
          },
          {
            id: 'ks3-y8-reading-q3',
            questionNumber: 3,
            marks: 6,
            questionText:
              "How does the fiction writer use language to make the reader sympathise with Kali's situation?",
            extract: POLAR_BEAR_STORY_EXTRACT,
            extractSource: POLAR_BEAR_STORY_EXTRACT_SOURCE,
            markScheme:
              '2 marks: Identifies techniques (personification, physical descriptions, simile, memory, repetition). 2 marks: Explains how specific techniques create sympathy (e.g., visible hunger=physical suffering; memory=emotional depth; repetition of decline=hopelessness). 2 marks: Discusses overall emotional effect and effectiveness.',
            modelAnswer:
              'The fiction writer uses several language techniques to make the reader sympathise with Kali. Physical descriptions of suffering come first: she "pulled herself onto the ice floe", a verb of effort that suggests how tiring the swim has been, and she is "so hungry that her ribs showed beneath her thick white fur", an image of starvation. The adjective "massive" makes this more affecting: we expect polar bears to be powerful, yet here she is diminished and desperate. The writer uses memory to add emotional depth. Kali "remembered her mother teaching her to hunt seals on the stable ice", which suggests lost security and a bond with her mother. The clause that follows, "but those hunting grounds were disappearing", turns the memory into loss: what her mother taught her depends on ice that is no longer there. The repetition of "each year ... each year" emphasises the relentless, ongoing nature of her struggle. It is not a single crisis but a steady deterioration she is helpless to stop. The simile "the dark ocean beneath waited like an empty throat" is particularly effective. A throat suggests being swallowed; an empty throat suggests hunger, like Kali\'s own; and the verb "waited" personifies the ocean as something patient and predatory. This turns the environment itself into an antagonist. Finally, the words "dreadful", "fewer" and "more fragile" create a tone of hopelessness. Kali keeps going, but she has no power to change what is happening to her world, and this helplessness, combined with her visible suffering, generates deep sympathy: the reader recognises Kali as a victim of forces beyond her control.',
          },
          {
            id: 'ks3-y8-reading-q4',
            questionNumber: 4,
            marks: 5,
            questionText:
              'Which extract do you find more effective in communicating the seriousness of Arctic climate change and why? Justify your response with detailed reference to both texts.',
            extract: BOTH_ARCTIC_EXTRACTS,
            extractSource: BOTH_ARCTIC_EXTRACTS_SOURCE,
            markScheme:
              '2 marks: Makes a clear choice with justification. 2 marks: Provides detailed reference to chosen text and comparison. 1 mark: Discusses effectiveness in communicating urgency/seriousness. Accepts either choice if well-reasoned. High-level response recognises that different texts serve different purposes and communicates meaning to different audiences effectively.',
            modelAnswer:
              'I find the non-fiction extract more effective in communicating the seriousness of Arctic climate change, although the fiction extract makes that seriousness felt. The non-fiction extract is scientifically persuasive. The specific statistic - a decline of "13% per decade" - is concrete and verifiable. The term "Arctic amplification" and the reference to "Satellite data collected over the past four decades" establish credibility through authoritative language. The projection that "within this century" the Arctic Ocean "may experience ice-free summers" gives a tangible future consequence that demands action. The fiction extract works differently, through emotion. Kali is "so hungry that her ribs showed beneath her thick white fur", the ice is "thinner than it used to be", and "each year she had to swim farther to find it", which turns a statistic about shrinking ice into one animal\'s growing struggle. The closing simile, "the dark ocean beneath waited like an empty throat", leaves a sense of threat that no percentage can create, and this may move some readers more than data. Even so, I find the non-fiction more effective, for three reasons. Firstly, it gives a measured rate of loss rather than an impression, and says what the measurement is based on. Secondly, it projects the future, helping readers understand consequences they cannot yet observe. Thirdly, on a scientific matter, credibility and verifiable evidence matter most: a reader could dismiss a story about one bear as imagined, but not four decades of satellite measurements. The fiction is the article\'s best companion, because it makes the urgency feel real, but it is the article that shows how serious the problem is.',
          },
          {
            id: 'ks3-y8-reading-q5',
            questionNumber: 5,
            marks: 6,
            questionText:
              'Both extracts discuss loss. Write an analytical paragraph examining how loss is presented in each text and what different effects this creates.',
            extract: BOTH_ARCTIC_EXTRACTS,
            extractSource: BOTH_ARCTIC_EXTRACTS_SOURCE,
            markScheme:
              '1 mark: Identifies loss as central theme in both texts. 1 mark: Analyses how loss is presented in non-fiction (as ecological crisis, measured statistically). 1 mark: Analyses how loss is presented in fiction (as personal tragedy, experienced individually). 1 mark: Discusses different emotional effects (non-fiction creates intellectual concern; fiction creates empathetic sadness). 1 mark: Uses specific evidence from both texts. 1 mark: Synthesises analysis into coherent response showing sophisticated understanding.',
            modelAnswer:
              'Loss functions as the central concern in both extracts, though each text frames and presents loss differently to create distinct effects. The non-fiction extract quantifies loss systematically: sea ice is lost at a measurable rate (13% per decade); within this century whole summers may be ice-free; ecosystems that evolved "over millennia" are being disrupted. This quantification creates intellectual urgency - readers understand loss as a large-scale, systemic crisis affecting not individual creatures but entire ecological systems. The language is detached and analytical, which paradoxically makes the loss feel more serious because it\'s presented as objective reality rather than emotional assertion. The fiction extract, conversely, personalises loss. Kali is watching her hunting grounds disappear and struggles against ongoing scarcity. The narrative emphasises what is missing: Kali "remembered her mother teaching her," suggesting not only lost habitat but lost knowledge now useless in changed conditions. The word "dreadful" attached to "melting" reveals emotional response to loss. Memory further emphasises loss: each reference to past stability ("the stable ice," "those hunting grounds") heightens awareness of what is gone. The fiction creates sadness and empathy through recognition of Kali\'s helplessness. Whereas the non-fiction article invokes concern through data, the fiction invokes compassion through identified suffering. The non-fiction asks readers to rationally grasp the scale of ecological loss; the fiction asks readers to emotionally identify with loss and its individual consequences. Neither approach is more "true," but they create very different reader responses to the same underlying crisis: intellectual alarm versus emotional devastation.',
          },
          {
            id: 'ks3-y8-reading-q6',
            questionNumber: 6,
            marks: 4,
            questionText:
              'Identify three pieces of information or details from the non-fiction extract that could have been used to make the fiction extract even more powerful or convincing.',
            extract: BOTH_ARCTIC_EXTRACTS,
            extractSource: BOTH_ARCTIC_EXTRACTS_SOURCE,
            markScheme:
              '1 mark for each valid identification of a detail that could strengthen the fiction (maximum 3). 1 mark for explaining how each detail could enhance the narrative. Detail must come from the non-fiction text and must logically connect to narrative power.',
            modelAnswer:
              'Three details from the non-fiction extract could powerfully enhance the fiction narrative. First, the statistic that the Arctic is warming "more than twice as fast as the global average" could be reflected in the story, perhaps through an older bear\'s memories, to establish how unprecedented and accelerated the change is. Rather than only noting that "there seemed to be less ice", the fiction could show that the Arctic is changing faster than the rest of the world - making the crisis feel sudden and genuinely catastrophic. Second, the detail about "ecosystems that have evolved over millennia" could be woven into Kali\'s narrative through inherited knowledge. The fiction could show how Kali\'s instincts and learned behaviours were developed over thousands of years but are now useless - an irony in which ancient evolutionary adaptation is made obsolete by rapid modern change. Third, the projection that "within this century" the Arctic Ocean "may experience ice-free summers" could provide future context. The fiction could end with Kali\'s awareness that her offspring, if she has them, may never experience stable ice - transforming her present struggle into a family tragedy spanning generations. These details would ground the emotional narrative in scientific urgency, making Kali\'s personal suffering feel part of a larger, measured crisis.',
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y8-writing-001',
    title: 'Year 8 Writing Assessment - Argument & Narrative',
    board: 'All',
    subject: 'English Language',
    duration: 50,
    totalMarks: 50,
    sections: [
      {
        id: 'ks3-y8-writing-section-1',
        title: 'Persuasive Article Writing',
        instructions:
          'Write a persuasive article arguing for or against the proposition that social media should be banned in schools during the school day. Your article should be approximately 300 words, use rhetorical devices, and have a clear argument structure. (25 marks)',
        questions: [
          {
            id: 'ks3-y8-writing-q1',
            questionNumber: 1,
            marks: 25,
            questionText:
              'Write a persuasive article for a school newspaper arguing either for or against banning social media use during the school day.',
            bulletPoints: [
              'Have a clear opening that introduces your argument',
              'Use rhetorical devices such as rhetorical questions, repetition, and statistics',
              'Provide at least three distinct reasons supporting your position',
              'Address a possible counter-argument',
              'Write in a style appropriate for a school newspaper',
              'Aim for approximately 300 words',
              'Use a strong conclusion that reinforces your argument',
            ],
            markScheme:
              "Argument and persuasion (8 marks): Clear position stated; logical, well-developed arguments; effective use of rhetorical devices and persuasive techniques; addresses counter-arguments. Evidence and examples (7 marks): Supports claims with specific examples or statistics; evidence is relevant and credible; demonstrates research or knowledge. Language and style (5 marks): Appropriate tone for persuasive writing; varied vocabulary; engaging writing that sustains reader interest; appropriate for target audience (school newspaper). Technical accuracy (5 marks): Spelling, punctuation, and grammar mostly accurate; few errors that don't impede meaning; uses standard English appropriately. Grade boundaries: 23-25 marks = excellent persuasive writing with strong rhetoric; 20-22 marks = secure argument with good technique; 17-19 marks = sound argument with adequate technique; below 17 marks = developing persuasive skills.",
            modelAnswer:
              "Social Media Ban Would Damage Student Wellbeing\n\nSchools across the country are implementing total bans on social media during school hours. While well-intentioned, this approach is misguided and counterproductive. Rather than banning social media entirely, schools should teach digital literacy and responsible use. A total ban would damage student wellbeing and ignore the genuine benefits of social media.\n\nFirst, social media is essential for many students' mental health. For students with anxiety, depression, or loneliness, social platforms provide community and support. LGBTQ+ students often find crucial support networks through social media that they cannot access locally. A ban would isolate vulnerable students precisely when they need connection most. Research shows students who feel socially isolated experience worse academic performance and mental health outcomes.\n\nSecond, social media has legitimate educational purposes. Classroom accounts share educational content; peer study groups use messaging platforms; students participate in global collaborative projects. A blanket ban eliminates these benefits because administrators cannot distinguish educational from recreational use. Nuanced policies are more effective than absolute prohibitions.\n\nThird, teaching digital literacy is more valuable than bans. Students will use social media regardless of school policies. Rather than prohibition, schools should teach critical thinking about social media: recognising misinformation, understanding algorithmic feeds, managing screen time, and protecting privacy. Students who understand these concepts become safer, more thoughtful users.\n\nSome argue that bans reduce distraction. However, evidence suggests this effect is minimal and temporary. When schools lift bans, students return to normal usage patterns, suggesting bans don't change underlying behaviour.\n\nSchools should replace absolute bans with comprehensive digital literacy programmes. Students need guidance navigating digital spaces, not punishment for using normal adolescent communication tools. Responsible restriction, combined with education, better serves student development than blanket prohibition.",
          },
        ],
      },
      {
        id: 'ks3-y8-writing-section-2',
        title: 'Narrative Writing',
        instructions:
          'Write a narrative story based on the scenario provided. Your story should be approximately 300-350 words. Use narrative techniques such as dialogue, pacing, and descriptive language. (25 marks)',
        questions: [
          {
            id: 'ks3-y8-writing-q2',
            questionNumber: 2,
            marks: 25,
            questionText:
              'Write a narrative story about a character who discovers something unexpected that forces them to reconsider their assumptions about someone they thought they knew well.',
            bulletPoints: [
              'Establish the character and their relationship quickly',
              'Use narrative techniques: dialogue, description, pacing',
              'Include a clear moment of discovery or realisation',
              "Show the character's emotional response and reflection",
              'Use varied sentence structures and vocabulary',
              'Aim for approximately 300-350 words',
              'Ensure clear beginning, middle, and end',
            ],
            markScheme:
              "Narrative craft (8 marks): Clear character development; engaging plot structure; effective use of narrative techniques (dialogue, description, pacing); strong sense of story progression. Characterisation and emotion (7 marks): Characters feel real and distinct; emotional journey clear; discovery feels earned and significant; reader understands character's transformation. Descriptive language and style (5 marks): Vivid descriptions; varied sentence structures create effect; engaging voice; word choices enhance meaning. Technical accuracy (5 marks): Strong spelling and punctuation; few errors; grammar supports clarity; appropriate register maintained. Grade boundaries: 23-25 marks = sophisticated narrative with excellent technique and characterisation; 20-22 marks = well-developed story with good characterisation; 17-19 marks = clear story with adequate technique; below 17 marks = developing narrative skills.",
            modelAnswer:
              'The Volunteer\n\nI\'d known Mrs Chen for three years. She came to our community centre every Tuesday to teach English to new immigrants, always impeccably dressed, always composed. I admired her reliability, her precision, her seemingly effortless competence.\n\n"You\'re quiet today," she observed while we organised materials after class.\n\n"Just tired," I replied, folding chairs.\n\nThen I noticed it: her hands shaking slightly as she gripped the stack of papers. I\'d never seen Mrs Chen uncertain about anything.\n\n"Are you okay?" I asked.\n\nShe paused, seeming to deliberate. "I\'m nervous," she finally admitted. "My daughter is arriving from Taiwan tomorrow. I haven\'t seen her in five years."\n\nI was stunned. Mrs Chen, who always seemed so self-assured, was anxious? Vulnerable?\n\n"Five years?" I asked gently.\n\n"I left Taiwan to build a better life for her," Mrs Chen explained quietly. "But that meant we were apart. Now she\'s leaving school and coming to live with me at last. What if she resents me for leaving? What if I don\'t know her anymore?"\n\nSuddenly, I understood something fundamental about Mrs Chen. Her perfect appearance, her composed demeanour, her dedication to helping others - these weren\'t signs of someone who had everything figured out. They were coping mechanisms of someone carrying deep loneliness and regret. Her teaching wasn\'t just volunteer work; it was how she processed her separation from her daughter by helping other families connect.\n\nThe next week, Mrs Chen brought her daughter to class. They laughed together, slightly awkward initially, then with genuine warmth. Watching them, I realised I\'d made an assumption about Mrs Chen\'s completeness that said more about me than her. I\'d imagined her as finished, polished, whole - rather than human, struggling, growing.\n\nThat Tuesday, I helped Mrs Chen differently: with authentic presence instead of admiration. And she seemed, finally, less alone.',
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y9-reading-001',
    title: 'Year 9 End of Year Reading Assessment - GCSE Preparation Level',
    board: 'All',
    subject: 'English Literature',
    duration: 60,
    totalMarks: 60,
    sections: [
      {
        id: 'ks3-y9-reading-section-1',
        title: 'Extended Extract Analysis - GCSE Preparation',
        instructions:
          'Read the extract carefully. It is from a story written for this paper. This assessment requires GCSE-level analysis of language, form, and structure. Answer all questions, referring constantly to the text. You may use the extract to support all of your answers. (60 marks)',
        questions: [
          {
            id: 'ks3-y9-reading-q1',
            questionNumber: 1,
            marks: 6,
            questionText:
              'How is the relationship between the two characters presented in this extract?',
            extract: GLASS_GIRL_EXTRACT,
            extractSource: GLASS_GIRL_EXTRACT_SOURCE,
            markScheme:
              "2 marks: Identifies key aspect of relationship (contrasting personalities, mutual respect despite differences, sibling bond). 2 marks: Provides specific textual evidence supporting analysis. 2 marks: Explains how language/textual features reveal relationship dynamics. Sophisticated response recognises complexity: that love exists despite incompleteness in each other, that they understand one another's fundamental natures.",
            modelAnswer:
              'The relationship between Elena and Marcus is one of fundamental contrasting personalities united by unconditional love. The writer establishes their differences immediately through parallel structure and antithesis: Elena is "the quiet one" who "observed the world\'s chaos from behind glass" and is "interior"; Marcus "existed in that chaos", fills silences with laughter and is "exterior". The writer presents these as settled natures rather than passing moods: Elena "had always been the quiet one", while Marcus lives in chaos "as if he\'d been born for it". Despite these differences, the text shows genuine affection. Marcus speaks "kindly, even with affection," and Elena\'s ultimate revelation shows she loves him not by wanting change but by accepting his "particular way of moving through the world." This maturation in Elena\'s perspective is significant: she moves from a criticism she keeps to herself (she "wanted to point out that \'we\' wasn\'t trying anything - he was - but she didn\'t") to acceptance. The extract suggests that their relationship\'s strength lies precisely in their differences. Marcus needs Elena\'s caution to balance his recklessness; Elena needs Marcus\'s encouragement to break her careful patterns. The final realisation - that love is "based on the simple fact of him" - presents love as unconditional acceptance rather than conditional admiration. The writer uses setting effectively: the rain and fire create intimacy, allowing the emotional revelation to occur in a contained, protected space. Their relationship, presented as strong precisely because it accommodates difference rather than demanding conformity, is fundamentally about accepting one another as they are.',
          },
          {
            id: 'ks3-y9-reading-q2',
            questionNumber: 2,
            marks: 8,
            questionText:
              "Analyse the writer's use of language to reveal Elena's character and internal state. In your answer, refer to specific words and phrases, exploring their connotations and effects.",
            extract: GLASS_GIRL_EXTRACT,
            extractSource: GLASS_GIRL_EXTRACT_SOURCE,
            markScheme:
              "2 marks: Identifies appropriate language features (metaphor, word choice, sentence structure, repetition). 2 marks: Quotes or references specific words/phrases; explains connotations. 2 marks: Connects language choices to Elena's character and emotional state. 2 marks: Synthesises analysis, discussing overall effect of language choices on reader understanding of Elena. High-level response recognises how form reinforces content - how Elena's careful nature is mirrored in careful narration.",
            modelAnswer: `The writer\'s language choices cumulatively reveal Elena as introspective, careful, and self-aware. The metaphor "observed the world\'s chaos from behind glass" is particularly resonant. Glass is transparent yet creates distance; Elena is present but separated, watching rather than participating. The word "glass" also suggests fragility, subtly implying Elena\'s apparent composure may be delicate. This metaphor establishes her fundamental relationship to experience: mediated, observed rather than lived. The writer\'s characterisation of Elena\'s personality uses comparative structure: "Where she was interior, he was exterior." The words "interior" and "exterior" suggest psychological depth but also isolation for Elena. She is interior - contained, private, reflective - while Marcus is exterior - expressive, visible, outward-facing. The contrast emphasises not superiority but difference: both are necessary perspectives. Elena\'s self-correction - "She wasn\'t afraid, exactly. She was careful. She was thoughtful. She was..." - reveals her self-knowledge and mental precision. She refuses the label "afraid" but can\'t quite settle on an alternative. The ellipsis suggests her thoughts trail away, unable to fully articulate her identity. This very precision, this careful thinking, characterises Elena throughout the extract. Later, "she asked quietly" uses the adverb "quietly" not just to describe volume but to capture her essential nature: she operates at low volume, intensity, visibility. Her desire to contradict Marcus - "Elena wanted to point out that 'we' wasn\'t trying anything" - shows logical precision and potential defensiveness, yet she suppresses this impulse. The final revelation uses repetition of "particular" - "his particular way of moving," "his particular way of loving" - suggesting Elena\'s acceptance of specificity and difference. The phrase "simple fact of him" is striking: Elena moves from analysing and categorising (interior/exterior, careful/reckless) to simple presence. The language progression suggests Elena\'s emotional and psychological journey within the extract itself.`,
          },
          {
            id: 'ks3-y9-reading-q3',
            questionNumber: 3,
            marks: 8,
            questionText:
              "The extract ends with Elena's realisation about unconditional love. How does the writer prepare the reader for this conclusion? Discuss the significance of this ending.",
            extract: GLASS_GIRL_EXTRACT,
            extractSource: GLASS_GIRL_EXTRACT_SOURCE,
            markScheme:
              "2 marks: Identifies specific moments/language that prepare reader for conclusion (the contradiction, her emotional response, Marcus's kindness). 2 marks: Explains how these moments build towards the realisation. 2 marks: Discusses significance of the ending (what it reveals about Elena's growth, about love, about relationship dynamics). 2 marks: Evaluates overall effectiveness of the narrative arc. Sophisticated response recognises how the entire extract is structured as Elena's journey towards this understanding.",
            modelAnswer:
              'The writer prepares readers for Elena\'s realisation about unconditional love through a carefully constructed arc that moves Elena from defensive criticism to accepting embrace. Initially, Elena maintains critical distance: she thinks Marcus\'s plans "frequently required foolish luck" rather than genuine viability. This establishes her tendency to analyse and judge. When Marcus suggests she\'s "always so cautious, so afraid," Elena experiences a moment of emotional vulnerability - "the words struck something deep." This moment, though Marcus delivers it "kindly, even with affection," pierces Elena\'s careful defences. Her immediate response - the defensive correction she considers but suppresses - shows her habitually protective patterns. However, the turning point comes when she consciously chooses not to correct him: "she didn\'t." This small act of restraint is significant. Rather than defending herself with logic, she "found herself leaning forward, asking him to tell her more." The physical movement mirrors emotional movement: she literally closes the distance between them, an embodiment of her internal shift. The writer emphasises Marcus "animated and passionate" - Elena is drawn towards the very energy she had been quietly judging. The realisation itself is built as a negation followed by an affirmation: her love "wasn\'t based on wanting him to change, or on trying to change herself for him." This one negation, covering two conditions, clears away the idea that love must be earned or arranged, establishing what love is not before "It was based on" reveals what it is. The phrase "the simple fact of him" is remarkable. "Simple" contrasts with Elena\'s typical over-analysis; "fact" is concrete, undeniable. The significance of this ending is profound: Elena moves from wanting to understand, change or improve the people she loves to simply accepting them. This represents a move from judgement to acceptance, a more mature kind of love. The ending validates both characters: Elena\'s caution is accepted as equally valid as Marcus\'s risk-taking; neither needs to change for love to exist. The writer suggests mature love is not fusion or transformation but coexistence - accepting the other\'s fundamental nature completely.',
          },
          {
            id: 'ks3-y9-reading-q4',
            questionNumber: 4,
            marks: 8,
            questionText:
              "Compare the way the writer presents Marcus to the way the writer presents Elena. What does this comparison reveal about the writer's themes or values?",
            extract: GLASS_GIRL_EXTRACT,
            extractSource: GLASS_GIRL_EXTRACT_SOURCE,
            markScheme:
              "2 marks: Identifies contrasting presentations (Marcus energetic/action-oriented vs. Elena reflective/cautious). 2 marks: Provides specific evidence from text showing these contrasts. 2 marks: Analyses how the writer uses language/structure to emphasise differences. 2 marks: Explains what these differences reveal about writer's values/themes (acceptance of diversity, value of both perspectives, integrated wholeness). Excellent response recognises the writer values both perspectives equally despite surface value judgements.",
            modelAnswer:
              'The writer presents Marcus and Elena as almost archetypal opposites, yet with remarkable balance that reveals the writer\'s values: both perspectives are equally necessary and valuable. Marcus is presented through kinetic language: he "paced in front of the fireplace", is "gesturing wildly" and "animated and passionate", and fills rooms with laughter that "seemed to cost him nothing". The language used of him emphasises ease, naturalness, unthinking action, though "seemed" hints that the ease may be only how it looks to Elena. He leaps to action and belief without apparent deliberation. The writer characterises his "foolproof" plans with subtle irony - Marcus thinks in absolutes and enthusiasms, not nuances. Elena, conversely, is presented through static positioning: she "sat curled in the leather armchair", and she is the one who "listened rather than spoke" and "observed the world\'s chaos". The language used of her emphasises interiority and thought. She asks "What if it fails?" - a question that reveals her habit of anticipating consequences. The writer initially might seem to prefer Marcus: his characteristics are presented as effortless, energising, animating. Elena\'s carefulness could read as weakness or timidity. However, the extract\'s arc reveals the writer\'s actual values: both approaches are incomplete. Marcus\'s willingness to act despite risk is admirable but leaves him, the text suggests, requiring "foolish luck" to succeed. Elena\'s caution is protective but risks becoming paralysis. The writer\'s theme - visible in Elena\'s final realisation - is that wholeness requires accepting both perspectives. Neither Elena nor Marcus needs to change, but together they represent complementary approaches to life. The writer also values emotional warmth over action: that Marcus speaks "kindly, even with affection" matters more to Elena than his philosophy of risk-taking. The writer seems to believe that unconditional acceptance and emotional authenticity - Elena\'s gifts - are ultimately more valuable than bold action. The final revelation privileges Elena\'s emotional understanding over Marcus\'s action-orientation. The writer\'s values, expressed through this comparison, suggest that maturity and wholeness come not from choosing one approach but integrating both, and crucially, accepting others as they fundamentally are rather than trying to reshape them.',
          },
          {
            id: 'ks3-y9-reading-q5',
            questionNumber: 5,
            marks: 4,
            questionText:
              'Based on the extract, predict what might happen next in the story. What do you think Elena might do with her newfound understanding of unconditional love?',
            extract: GLASS_GIRL_EXTRACT,
            extractSource: GLASS_GIRL_EXTRACT_SOURCE,
            markScheme:
              "1 mark: Makes plausible prediction based on textual evidence. 1 mark: References specific textual details to support prediction. 1 mark: Discusses how Elena's character growth would manifest in action. 1 mark: Shows understanding of how her realisation might affect her relationships or self-perception.",
            modelAnswer:
              "Based on this extract, I predict Elena will undergo significant personal growth in the story, likely moving beyond her role as observer. Her realisation about unconditional love suggests she's transitioning from evaluative judgement to acceptance. Next steps might involve Elena supporting Marcus's venture despite her doubts, becoming more actively involved in his life rather than just watching from the \"glass\" distance. She's literally \"leaning forward\" by the extract's end - this physical movement likely foreshadows emotional and social movement. I predict Elena will apply her newfound understanding to other relationships. Her revelation that love isn't about wanting people to change suggests she might also examine how she judges others - parents, friends, potential romantic interests - and move towards acceptance. The story may explore whether Elena can maintain her thoughtful, cautious nature while also taking risks and engaging more actively with life. Her understanding that she doesn't need to become like Marcus (risk-taking and extroverted) suggests she'll find her own way to engage with the world more fully, using her particular gifts rather than adopting his. The story might also test Elena's unconditional acceptance: what happens when Marcus's venture genuinely fails? Will she maintain her acceptance, or return to judgement? The extract suggests she's developed significant emotional maturity, but genuine growth is tested by challenge. I predict future sections will complicate and deepen her understanding, showing that unconditional love is not passive acceptance but active commitment even during disappointment and failure.",
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y9-writing-001',
    title: 'Year 9 End of Year Writing Assessment - GCSE Preparation Level',
    board: 'All',
    subject: 'English Language',
    duration: 60,
    totalMarks: 60,
    sections: [
      {
        id: 'ks3-y9-writing-section-1',
        title: 'Persuasive Essay - GCSE Level',
        instructions:
          'Write a persuasive essay responding to the statement: "The most important quality for success is not talent, but persistence." Write approximately 400-450 words. Use sophisticated persuasive techniques, structured arguments, and formal register. (30 marks)',
        questions: [
          {
            id: 'ks3-y9-writing-q1',
            questionNumber: 1,
            marks: 30,
            questionText:
              'Write a persuasive essay responding to the statement: "The most important quality for success is not talent, but persistence."',
            bulletPoints: [
              'Use a clear thesis statement that takes a definitive position',
              'Develop at least three separate arguments in distinct paragraphs',
              'Use evidence and examples to support each argument',
              'Use sophisticated persuasive devices (rhetorical questions, parallel structure, antithesis, etc.)',
              'Address and refute counter-arguments',
              'Maintain formal, sophisticated register throughout',
              'Write approximately 400-450 words',
            ],
            markScheme:
              "Persuasive technique and argument (10 marks): Clear, compelling thesis; multiple well-developed arguments; sophisticated use of rhetorical devices; counter-arguments addressed; logical reasoning progression. Evidence and examples (10 marks): Specific, relevant examples; historical, scientific, or contemporary references; evidence supports claims credibly; demonstrates knowledge or research. Language and register (5 marks): Sophisticated vocabulary; varied sentence structures; formal register maintained; sentences constructed for persuasive effect; word choices precise and emphatic. Technical accuracy (5 marks): Spelling, punctuation, grammar largely accurate; few errors that don't impede meaning; standard English throughout.",
            modelAnswer:
              "Persistence: The True Measure of Success\n\nWhile talent provides initial advantage, the evidence overwhelmingly suggests persistence - not talent - is the ultimate predictor of genuine, lasting success. History demonstrates repeatedly that determined individuals with modest talents frequently surpass more naturally gifted contemporaries who abandon effort when challenges arise.\n\nConsider the scientific field. After graduating, Einstein failed to find a university post and took a job in a patent office, where he wrote the papers of 1905 that changed physics; he then worked for another ten years, until 1915, to complete his general theory of relativity. Persistence through those years, not an easy start, is what made the breakthrough. Conversely, history buries countless mathematically gifted individuals whose talents yielded no contribution because they lacked persistence to develop and refine their insights. This pattern repeats across disciplines: persistence transforms potential into achievement; talent without persistence remains potential forever.\n\nThe mechanism is psychological, not mysterious. Talent provides comfort and early success, often fostering complacency. Individuals blessed with natural ability frequently plateau because they've never required sustained effort. Persistence, conversely, builds resilience and psychological strength. Neuroscientific research confirms that neural pathways strengthen through repeated effort - practice literally rewires brains. The persistent individual who practises deliberately for 10,000 hours accumulates expertise that innate talent cannot match without equivalent commitment.\n\nFurthermore, persistence navigates inevitable failure. Talent-dependent individuals often crumble when they encounter domain where natural ability proves insufficient. Persistent individuals perceive failure as feedback rather than termination. Thomas Edison's workshop tested thousands of materials before finding a filament that made the electric light bulb practical; his persistence, not initial brilliance, produced results. Modern entrepreneurship offers the same pattern: many successful founders describe failed businesses that came before their breakthrough.\n\nSome argue talent provides necessary foundation, and they possess partial truth. Certain domains - elite athletics, certain musical performances - do require baseline natural ability. However, this argument ultimately supports the persistence thesis: talent alone is insufficient, and even where talent is needed, persistence decides who succeeds. The talented athlete who doesn't train loses to persistent competitors. The musically gifted child who practises minimally underperforms persistent peers.\n\nSuccess requires deliberate, sustained effort over years. Talent accelerates initial progress but guarantees nothing. Persistence guarantees that effort continues despite obstacle, difficulty, and failure. In a world where talent distribution is random and unequal, persistence remains within every individual's control and within reach of anyone willing to commit. That commitment - that deliberate, determined persistence - ultimately separates success from failure, achievement from potential, and the remarkable from the forgotten.",
          },
        ],
      },
      {
        id: 'ks3-y9-writing-section-2',
        title: 'Narrative Writing - Extended',
        instructions:
          'Write a narrative story based on the scenario provided. Your story should be approximately 400-450 words. Use sophisticated narrative techniques and develop character and conflict meaningfully. (30 marks)',
        questions: [
          {
            id: 'ks3-y9-writing-q2',
            questionNumber: 2,
            marks: 30,
            questionText:
              'Write a narrative story with the title: "The Last Train." Consider how your protagonist might experience a moment that changes everything.',
            bulletPoints: [
              'Create a protagonist with clear motivations and emotional complexity',
              'Establish setting and atmosphere that supports the narrative',
              'Develop meaningful conflict - internal, external, or both',
              'Use narrative techniques: dialogue, pacing, perspective shifts, sensory details',
              'Include a significant moment of revelation or realisation',
              'Ensure character development throughout the narrative',
              'Write approximately 400-450 words',
            ],
            markScheme:
              'Narrative structure and characterisation (10 marks): Clear narrative arc; developed protagonist with complexity; meaningful conflict; emotional journey evident; character growth shown. Setting and atmosphere (7 marks): Vivid sensory details; setting integral to story; atmosphere supports emotional tone; description purposeful and evocative. Language and technique (8 marks): Sophisticated vocabulary; varied sentence structures create effect; dialogue authentic; narrative perspective controlled; show rather than tell emotions. Technical accuracy (5 marks): Strong spelling and punctuation; grammar supports meaning; few errors; register appropriate throughout.',
            modelAnswer:
              "The Last Train\n\nDavid had been running from something so long he'd forgotten what: his father's disappointment, his own failures, or simply the person he'd become. Thirty-two, divorced, estranged from his daughter - he'd constructed a life of excellent reasons to not be present. Work consumed him; travel became escape; relationships became complications avoided. He was very good at leaving.\n\nThe train platform was nearly empty on a Tuesday morning. He was heading to Singapore, another conference, another city where nobody knew his history. A young girl - maybe eight - stood with her mother, waving to someone departing on the opposite platform. The girl held a small sign: \"Come Back Soon, Daddy.\" She held it with both hands, as if the effort mattered, as if her small gesture might pull him back.\n\nDavid had received similar signs once. From Sophie, his daughter. Fifteen years ago, before the divorce crystallised everything into logistics and shame.\n\nHe boarded. Found his seat. Opened his laptop because work was safer than thought. But he couldn't focus. The girl's sign replayed behind his eyes. That desperate hope, so small and absolute. The way children believe their love might be sufficient to hold someone.\n\nHe thought of Sophie - twenty-three now, living with her mother's new family, knowing him only through birthday calls he frequently forgot. He thought of the school play he'd missed because a conference seemed important. The field trip. The times she'd asked about his work, genuinely wanting to understand her father, and he'd replied with monosyllables and distraction.\n\nThe train hadn't departed. Something technical, the announcement said. Delay of unknown duration.\n\nDavid closed his laptop. His hands felt strange. He'd spent two decades becoming someone efficient, impressive, accomplished - and simultaneously invisible to the people who might have actually known him. Running so fast he'd disappeared.\n\nHe got off the train.\n\nThe ticket agent asked his destination. He wasn't sure. Not Singapore. He searched his phone for addresses he barely used. His ex-wife's house. Sophie's university. Neither was adequate.\n\nInstead, he sat on the platform bench, in the centre of his life's displacement, and called his daughter. She didn't answer - of course she didn't. He left a voice message, awkward and honest:\n\n\"Sophie. I'm at a train station. I was leaving. I'm sorry for always leaving. I'd like to try... staying. With you. I don't know how, but I'd like to try.\"\n\nThe phone felt heavy in his hand. The platform was quiet. The train would leave eventually, with or without him.\n\nFor the first time in years, David waited.",
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y9-shakespeare-001',
    title: "Year 9 Shakespeare Assessment - A Midsummer Night's Dream",
    board: 'All',
    subject: 'English Literature',
    duration: 45,
    totalMarks: 30,
    sections: [
      {
        id: 'ks3-y9-shakespeare-section-1',
        title: 'Shakespeare Analytical Essay',
        instructions:
          "Answer all questions about A Midsummer Night's Dream. You must support all claims with evidence from the play text. Refer to specific scenes and quotations where possible.",
        questions: [
          {
            id: 'ks3-y9-shakespeare-q1',
            questionNumber: 1,
            marks: 5,
            questionText:
              'How does Shakespeare present the theme of love through the romantic relationships in the play?',
            markScheme:
              "1 mark: Identifies at least two romantic relationships (Hermia/Lysander, Titania/Oberon, Helena/Demetrius). 1 mark: Notes variation in how love is presented (magical, tragic, comic, transformative). 1 mark: Provides specific evidence from play. 1 mark: Explains effect of magical intervention on relationships. 1 mark: Discusses Shakespeare's overall message about love. Accept that Shakespeare presents love as both beautiful and irrational, powerful and changeable, comic and serious simultaneously.",
            modelAnswer:
              "Shakespeare presents love as a transformative, irrational, and ultimately ridiculous force that affects all characters regardless of age, status, or intention. Hermia and Lysander represent youthful, romantic love - passionate and willing to sacrifice everything (elopement) for connection. Their love is portrayed as genuine but also impulsive and immature, and Lysander's \"The course of true love never did run smooth\" (1.1) warns from the start that it will be tested. Helena and Demetrius represent unrequited love's desperation: Helena's pursuit becomes humiliating, transforming love into comedy. Her own reflection that \"Love looks not with the eyes, but with the mind\" (1.1) suggests that love sees what it wishes to see. Titania and Oberon's relationship demonstrates how love can be weaponised: Oberon uses magic specifically to manipulate Titania's affections, suggesting love's vulnerability to external forces. Crucially, when the love juice is put on Lysander's eyes by Puck and then on Demetrius's by Oberon, the play suggests that magically induced love and \"genuine\" love may be indistinguishable - a radical and unsettling implication. By the play's resolution, the lovers' tangle has been \"resolved\" largely through magic rather than through their own decisions: Lysander is released from the charm, but Demetrius is never released from the love juice, so his love for Helena is never shown to be his own choice. The play's comic tone masks a deeper suggestion: love is irrational and hard to control. Hermia chooses Lysander against her father's will, but once the lovers are in the wood none of them controls whom they love: they find themselves attracted, either through magic or through equally mysterious natural forces. Shakespeare presents love as simultaneously the highest human experience and the most ridiculous - we are all, under love's influence, temporarily mad.",
          },
          {
            id: 'ks3-y9-shakespeare-q2',
            questionNumber: 2,
            marks: 5,
            questionText:
              "Analyse Shakespeare's use of magic and the supernatural in the play. What purpose does magic serve in the narrative?",
            markScheme:
              '1 mark: Identifies magical elements (fairy realm, Puck, love potion, transformation). 1 mark: Notes that magic tangles the central conflict and helps to resolve it (the quarrels that open the play are not magical). 1 mark: Discusses how magic is used to manipulate human characters. 1 mark: Explains that magic allows character exploration and social commentary. 1 mark: Discusses the blurred line between magic and genuine emotion. Accept sophisticated reading that suggests magic is metaphor for uncontrollable emotional/psychological forces.',
            modelAnswer:
              "Magic serves multiple functions in A Midsummer Night's Dream: it is plot device, metaphor, and commentary on human nature. The fairy world operates as a parallel universe with its own rules and hierarchies, separate from Athens but continuously intersecting with it. Puck's magical interventions - applying the love juice to the wrong Athenian, transforming Bottom - drive the plot. The quarrels that begin the play are not magical: Egeus calls on the law of Athens against Hermia, and Oberon and Titania have fallen out over a changeling boy. But magic tangles the lovers in the wood, sustains their confusion and does much to end it, though it is Theseus who finally overrules Egeus. Shakespeare uses magic deliberately to explore how little control humans have over their emotions, especially love. Oberon's motivation is possessiveness masked as romance; he uses Titania's temporary enchantment to achieve his will regarding the Indian boy. The love juice does not wait for an existing desire: Lysander, who has run away from Athens with Hermia, wakes and immediately claims to love Helena, and Titania dotes on a weaver with an ass's head. The magic reveals how changeable and superficial love can be. Puck's \"Lord, what fools these mortals be!\" (3.2) turns the lovers' confusion into a show. This raises unsettling questions: if magically induced love is indistinguishable from genuine affection, how much of human emotion is truly our own? The transformation of Bottom's head suggests the grotesque nature of human desire itself - Titania loves a man-donkey-creature, yet her affection is portrayed as genuine within the magical context. This suggests that love, magic, and illusion are fundamentally entangled. By the play's end most of the magic is undone, yet relationships remain altered: Demetrius is left enchanted, and says that his love for Hermia \"Melted as the snow\" (4.1). Yet Shakespeare seems less interested in what magic changes than in what it reveals about human nature. The supernatural framework allows Shakespeare to explore psychology metaphorically: characters under magical influence behave as humans actually behave when passion overrides reason.",
          },
          {
            id: 'ks3-y9-shakespeare-q3',
            questionNumber: 3,
            marks: 8,
            questionText:
              'Examine the character of Puck. What is his function in the play, and what does he reveal about the themes Shakespeare explores?',
            markScheme:
              "2 marks: Identifies Puck as servant to Oberon, agent of chaos/magic, comic relief, intermediary between fairy and human worlds. 2 marks: Discusses his specific actions (potion application errors, Bottom transformation) and their consequences. 2 marks: Analyses his character - his perspective, his attitudes towards humans, his motivations. 2 marks: Explains what Puck reveals about major themes (love's irrationality, human foolishness, power dynamics, reality vs. illusion). High-level response recognises Puck as Shakespeare's spokesperson, expressing implicit criticism of human behaviour.",
            modelAnswer:
              'Puck functions simultaneously as plot device, comic relief, and thematic voice for Shakespeare. Physically, Puck is Oberon\'s servant who implements the magical machinations: he applies the love potion (incorrectly at first), transforms Bottom, and sets things right by play\'s end. His mistakes drive much of the action, and his eventual corrections provide resolution. However, Puck is more than servant; he represents controlled chaos and the arbitrary nature of magic. His first mistake is a genuine one: told he will know the man "By the Athenian garments he hath on", he anoints Lysander instead of Demetrius, and tells Oberon, "Believe me, king of shadows, I mistook." But he is not sorry for the confusion it causes; he finds it funny, saying "this their jangling I esteem a sport". This reveals Puck\'s fundamental perspective: humans are silly, easily manipulated, and laughably self-deluded. His line "Lord, what fools these mortals be!" encapsulates his attitude and serves as Shakespeare\'s implicit critique. Puck\'s power over humans - through magic and mischief - mirrors the play\'s larger concern with power dynamics. Despite being supernatural and immortal, Puck is ultimately subordinate to Oberon; similarly, the "lovers" believe they have agency while actually being puppets of magical forces beyond their control. Oberon never ordered Bottom\'s transformation: Puck gives him the ass\'s head on his own initiative, for entertainment, and Oberon is delighted with the result ("This falls out better than I could devise") - suggesting that even magical beings operate under competing motivations: duty, mischief, and amusement. Most significantly, Puck represents the boundary between reality and illusion, between the magical fairy world and quotidian human existence. He moves freely between realms, suggesting these worlds are more permeable and similar than humans recognise. By play\'s end, Puck addresses the audience, blurring the line between theatrical performance and reality, between fiction and life - a meta-theatrical moment suggesting that all human experience, like Shakespeare\'s play, might be illusion or dream. Puck embodies Shakespeare\'s exploration of how little humans understand their own motivations and how easily they are manipulated by forces - magic, emotion, circumstance - beyond their control.',
          },
          {
            id: 'ks3-y9-shakespeare-q4',
            questionNumber: 4,
            marks: 6,
            questionText:
              'How does Shakespeare use the theme of transformation in the play? Discuss both literal and metaphorical transformations.',
            extract:
              "Specific scenes to consider: Bottom's transformation into an ass; the lovers' changed feelings; Titania's infatuation with Bottom; the movement from Athens to the fairy forest and back.",
            markScheme:
              "1 mark: Identifies literal transformation (Bottom's head). 1 mark: Notes metaphorical transformations (emotional/romantic changes in the lovers). 1 mark: Discusses environmental transformation (city to forest and back). 1 mark: Explains how transformation affects character understanding or development. 1 mark: Connects transformations to larger themes (confusion, love's irrationality, identity). 1 mark: Synthesises analysis showing how transformation functions throughout the play.",
            modelAnswer:
              "Transformation operates on multiple levels in A Midsummer Night's Dream - literal, emotional, spatial, and metaphorical - all serving to explore identity and the fluidity of selfhood. The most obvious transformation is Bottom's metamorphosis into an ass: \"Thou art translated\", Quince tells him (3.1), using \"translated\" in its old sense of changed. This literal transformation is grotesque and comic, yet Titania's genuine (if magically induced) affection for the ass-headed Bottom suggests that identity is contingent and constructed. Bottom retains his personality and voice; only his external form changes. Yet his fellow workmen flee from him in terror, judging him by his appearance alone. This critiques human judgement and reveals how much of identity is external and socially constructed. The transformation is reversed, yet Bottom himself seems changed by the experience: waking, he says \"I have had a most rare vision\" (4.1), and cannot put into words what he has seen. The lovers undergo emotional/romantic transformation: Hermia's love for Lysander never changes, but Lysander, under the love juice, abandons her for Helena, creating confusion of loyalty and identity. Demetrius's transformation from indifference to passionate love demonstrates how completely emotions can reverse. Most importantly, Lysander and Demetrius cannot distinguish their genuine preferences from magically induced emotions - suggesting human emotions are inherently unstable and transformable. The geographic transformation from Athens (ordered, hierarchical, rational) to the fairy forest (chaotic, magical, irrational) and back again mirrors the lovers' emotional journeys. The forest is liminal space where normal rules don't apply, where identity becomes fluid. By the play's end, characters return to Athens, yet they are changed - their experiences in the magical realm have transformed them permanently. Hermia and Lysander's journey from despair (their love forbidden) to joy (their marriage blessed) represents narrative transformation of circumstance and emotion. Even Oberon and Titania are transformed by their conflict and reconciliation; Titania's magical thralldom and Oberon's jealous manipulation both shift by play's end. The play suggests that transformation is constant, inevitable, and frequently beyond human control. Whether through magic, emotion, or circumstance, human identity is fluid, malleable, and context-dependent. Shakespeare uses transformation to explore the fundamental uncertainty of selfhood and the human need to construct stable identity despite continuous internal and external change.",
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-y9-poetry-001',
    title: 'Year 9 Poetry Assessment - Unseen Poem Analysis',
    board: 'All',
    subject: 'English Literature',
    duration: 30,
    totalMarks: 30,
    sections: [
      {
        id: 'ks3-y9-poetry-section-1',
        title: 'Unseen Poetry Analysis',
        instructions:
          "The poem is in UK copyright, so it is not printed here. Read the summary carefully: it quotes a few short phrases, paraphrases the rest and describes the poem's form. You will then answer questions about the poem's language, themes, form and effects. You may refer back to the summary at any time. This assessment tests your ability to analyse poetry without prior preparation.",
        questions: [
          {
            id: 'ks3-y9-poetry-q1',
            questionNumber: 1,
            marks: 4,
            questionText:
              "What is the poem's central theme or main idea? Support your answer with evidence from the poem.",
            extract: FROST_SUMMARY,
            extractSource: FROST_SUMMARY_SOURCE,
            markScheme:
              '1 mark: Identifies central theme (choice, life decisions, individuality, uncertainty, consequence). 1 mark: Identifies secondary theme (ambivalence, retrospective meaning-making, or self-deception). 1 mark: Provides relevant textual evidence. 1 mark: Explains how evidence supports interpretation. Accept multiple valid interpretations if well-supported.',
            modelAnswer:
              'The poem\'s central theme is the significance of life choices and the uncertainty surrounding them. Two roads that "diverged" in a "yellow wood" become a metaphor for a major life decision, and the speaker is "sorry I could not travel both": choosing one path means giving up the other. The speaker admits that both paths "equally lay" that morning, suggesting that life choices often offer no clear right answer. A secondary theme is self-deception, and meaning made after the event. Years later, the speaker imagines telling the story "with a sigh", claiming to have taken the road that fewer people had walked, and that this "has made all the difference", although the roads had looked alike. This contradiction suggests that people invest choices with a significance they did not have at the moment of choosing. The theme, then, takes in both the importance of choice and the human tendency to tell a meaningful story about a choice that was not as deliberate as it later seems. Frost explores how people build identity and meaning through the stories they tell about their decisions.',
          },
          {
            id: 'ks3-y9-poetry-q2',
            questionNumber: 2,
            marks: 6,
            questionText:
              "How does the poet use imagery and language to convey the speaker's hesitation or uncertainty?",
            extract: FROST_SUMMARY,
            extractSource: FROST_SUMMARY_SOURCE,
            markScheme:
              '1 mark: Identifies language of hesitation or regret (for example "sorry I could not travel both"). 1 mark: Notes visual imagery (the "yellow wood"; the road curving out of sight). 1 mark: Discusses limited sight (the speaker cannot see where the road leads). 1 mark: Analyses effect on reader (creates atmosphere of indecision, limited knowledge). 1 mark: Discusses circular thinking (a reason given and then taken back; a return planned and then doubted) as a technique conveying uncertainty. 1 mark: Synthesises analysis.',
            modelAnswer:
              'Frost conveys hesitation through imagery and word choice. The "yellow wood" sets the choice in autumn, a season of change, and roads that "diverged" make the decision physical: the speaker cannot go both ways at once. The words "sorry I could not travel both" show regret before any choice is made, so uncertainty is felt as loss. The speaker stands a long time looking down one road until it curves out of sight, which suggests the limits of sight and of foresight: the outcome of a choice cannot be seen. In the middle of the poem the speaker gives a reason to prefer the second road and then takes it back, conceding that walkers had worn both roads to much the same degree, and promises to return to the first road another day, only to doubt that this will ever happen. This circular thinking shows a mind that keeps reopening its own decision. The admission that both paths "equally lay" that morning removes any clear reason to prefer one. Even the ending is uncertain: the story will be told "with a sigh", which may express satisfaction, regret or both, so the claim that the choice "has made all the difference" is left open. Through regret, limited sight and self-correction, Frost captures the psychological reality of facing a significant decision with incomplete information and uncertain consequences.',
          },
          {
            id: 'ks3-y9-poetry-q3',
            questionNumber: 3,
            marks: 8,
            questionText:
              "Using the description of the poem's form in the summary, analyse its structure and form. How do the form choices contribute to the poem's meaning?",
            extract: FROST_SUMMARY,
            extractSource: FROST_SUMMARY_SOURCE,
            markScheme:
              '2 marks: Identifies formal elements (four five-line stanzas; the same ABAAB rhyme scheme in every stanza; four-beat, mostly iambic lines loosened by extra unstressed syllables; the turn from past to future in the last stanza). 2 marks: Discusses how the regular form contrasts with, or contains, the uncertain content. 2 marks: Analyses a specific structural feature and its effect (for example the shift to a future retelling, or the dash and the repeated "I" in the last stanza). 2 marks: Evaluates effectiveness of form choices in reinforcing meaning.',
            modelAnswer:
              'Frost\'s formal choices reinforce the poem\'s themes of choice and uncertainty through a tension between orderly form and uncertain content. The poem has four stanzas of five lines, and every stanza follows the same rhyme scheme, ABAAB, on only two rhyme sounds. Keeping so demanding a pattern exactly across twenty lines gives the poem a sense of control. Yet the speaker\'s thinking is anything but controlled: a reason for choosing the second road is given and then taken back, and a plan to return is made and then doubted. The regular form contains an irregular mind, much as the story the speaker will tell later imposes order on a choice that was close to arbitrary. The rhythm works in a similar way. Each line has four stressed beats, mostly iambic but loosened by extra unstressed syllables, so the poem moves at something like a walking pace: steady, but not mechanical, suiting a traveller who pauses and looks before moving on. The structure also turns in time. The first three stanzas tell the story in the past tense; the last looks ahead to a retelling "with a sigh" far in the future. This shift is where the irony lies: the speaker who admitted that both paths "equally lay" imagines claiming, later, that the choice "has made all the difference". Finally, in the last stanza a sentence breaks off with a dash at the end of one line and the next line repeats the word "I". The hesitation is built into the layout: even in the confident retelling, the speaker falters at the very moment of choosing. The form, then, does more than decorate the poem. Its order mirrors the neat story people tell about their choices, while the reversals and the stumble on "I" let the reader see the uncertainty underneath.',
          },
          {
            id: 'ks3-y9-poetry-q4',
            questionNumber: 4,
            marks: 6,
            questionText:
              "The poem's final lines are often interpreted as expressing the speaker's confidence in their choice. However, what do the earlier stanzas suggest about this interpretation? Is there ambiguity in the poem's meaning?",
            extract: FROST_SUMMARY,
            extractSource: FROST_SUMMARY_SOURCE,
            markScheme:
              '2 marks: Acknowledges ambiguity and irony present in final lines. 2 marks: Provides textual evidence showing the apparent contradiction between roads that "equally lay" and the later claim to have taken the road fewer people had walked. 2 marks: Discusses how final lines might represent self-deception or retrospective mythmaking rather than genuine certainty.',
            modelAnswer:
              'The poem contains deliberate ambiguity that complicates any reading of the final lines as simple confidence. The middle of the poem insists that the two roads are essentially the same. The speaker gives a reason for preferring the second road, that it looked grassier and less used, and then takes it back, admitting that walkers had worn both to much the same degree; that morning both "equally lay" under leaves no one had walked on. Yet in the final stanza the speaker imagines claiming, years later, to have taken the road that fewer people had walked, and that this "has made all the difference". The claim contradicts what the speaker saw at the time. This contradiction is not accidental; it is Frost\'s central insight. The speaker imagines a future story of bold, individual choice, when the poem\'s evidence suggests the choice was close to arbitrary. The words "with a sigh" are particularly revealing. A sigh can express satisfaction, but it can equally express regret, resignation or weariness, so the reader cannot tell whether the speaker will be proud of the choice or sorry about it. Even "has made all the difference" is open: it says that the choice mattered, not whether the difference was for better or worse. The poem can therefore be read in two ways. Read quickly, it celebrates the courage to choose the unusual path. Read carefully, it shows how people build meaningful stories about choices that were a matter of chance, and how a story told often enough comes to feel like the truth. The ambiguity is productive: it asks readers to notice their own habit of giving their decisions a significance they may not have had at the time.',
          },
        ],
      },
    ],
  },
]
