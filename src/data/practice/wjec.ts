// @ts-nocheck
// ─── Practice question bank: WJEC / Eduqas ────────────────────────────────────────
//
// Split out of the former single 636 KB `src/data/practice-data.ts` (Aug 2026).
// That file was imported at module scope by the 'use client' /practice page, so
// the ENTIRE cross-board bank was shipped in that route's First Load JS before
// the student had even chosen a board. Each board now lives in its own module
// and is pulled in on demand by `loadPracticeQuestions()` in ./load.ts.
//
// INVARIANT: every question in this file must be tagged with a board this
// slice covers. `load.ts` decides which slice a student's exam board needs,
// and `matchesPracticeBoard()` still filters afterwards, so a mis-filed
// question silently disappears from the student's pool rather than leaking.

import type { PracticeQuestion } from './types'

export const wjecPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'wjec-c1-lang-1',
    board: 'WJEC',
    paper: 1,
    questionType: 'Language and Structure Analysis (Q2)',
    difficulty: 'Foundation',
    extract: `The factory whistle blew at six. By ten past, the street was full of men - a dark river of caps and boots flowing downhill towards the gates. Thomas walked among them with his hands in his pockets and his collar turned up against the cold. He was eighteen and had worked at the mill for four years, since the day after his fourteenth birthday, when his father had shaken his hand and said, "You're a man now," as if manhood were a door you stepped through rather than a thing that grew on you slowly, like moss on a wall.\n\nThe mill loomed ahead, its chimney drawing a black line against the pale sky. The noise reached him before the building did - a low, mechanical hum that he felt in his teeth before he heard it in his ears. Inside, the air was thick with cotton dust that coated your throat and settled in your lungs like snow filling a ditch. The machines were already running. They were always already running. Thomas took his place at the loom and became, as he did every morning, a small moving part in a large, indifferent engine.`,
    extractSource: 'Original composition in the style of early 20th-century realism',
    question:
      "How does the writer use language to present working life in this extract? You should write about the effects of the writer's language choices and use examples from the text. (10 marks)",
    modelAnswers: {
      'Grade 4-5': `The writer uses language to show that working life is hard and dehumanising. The men going to work are described as "a dark river of caps and boots," which is a metaphor that makes them seem like a mass rather than individuals. The words "caps and boots" reduce them to items of clothing, as if they have no personal identity. The factory is presented negatively through the description of the noise as "a low, mechanical hum that he felt in his teeth," which sounds uncomfortable and invasive. The cotton dust "settled in your lungs like snow filling a ditch," which is a simile comparing something harmful to something natural, making it seem like the damage is just part of everyday life. The final sentence is the most powerful, where Thomas "became a small moving part in a large, indifferent engine." The metaphor of the factory as an "engine" and Thomas as just a "part" shows how the work takes away his humanity. The adjective "indifferent" means the factory does not care about the workers at all.`,
      'Grade 6-7': `The writer constructs working life as a process of depersonalisation, using language that systematically strips individuality from the workers. The opening metaphor - "a dark river of caps and boots" - reduces the men to a collective flow, the synecdoche of "caps and boots" replacing human identity with industrial uniform. The adjective "dark" functions both literally and symbolically, encoding the pre-dawn grimness and the bleak prospects of their labour. Thomas's father's assertion that "you're a man now" is immediately undercut by the narrator's observation that manhood is "a thing that grew on you slowly, like moss on a wall" - a simile that reframes this rite of passage as something organic and gradual rather than the abrupt, economically driven threshold it actually is. The mill itself is characterised through sensory assault: the noise is "felt in his teeth" before it is heard, the synaesthetic description suggesting a physical violation. The simile of cotton dust settling "like snow filling a ditch" is quietly devastating - it naturalises occupational harm, while "ditch" implies both the trench of industry and the grave. The culminating metaphor of Thomas as "a small moving part in a large, indifferent engine" completes the dehumanisation, the adjective "indifferent" attributing to the factory a cold absence of concern that makes exploitation structural rather than personal.`,
      'Grade 8-9': `The extract performs the very process it describes: the language systematically converts a human being into a component. The opening image of workers as "a dark river of caps and boots" establishes the governing logic - the men are not named, not individualised, not even fully embodied. They are reduced to the metonymic fragments that contact the industrial world: headwear and footwear, the points where body meets labour. That this river flows "downhill towards the gates" encodes both geography and metaphor; the direction is always down, and the gates suggest containment as much as entry. Thomas's father's claim that "you're a man now" performs a rhetorical violence that the narrator immediately exposes through the counter-simile of manhood as "moss on a wall" - something that accumulates imperceptibly, organically, and by implication, parasitically. The father's handshake is an economic transaction disguised as a paternal ceremony: at fourteen, the boy becomes a unit of production. The mill's physical presence is rendered through a careful escalation of sensory invasion. It is first visual - the chimney's "black line against the pale sky," a mark of pollution encoded as calligraphy. Then auditory and somatic - the hum "felt in his teeth" - before becoming respiratory: cotton dust that "settled in your lungs like snow filling a ditch." The shift to the second person "your" at this point is structurally significant; it universalises the experience, implicating every worker (and potentially every reader) in the bodily harm. The simile's beauty - snow, filling, the soft sibilance - is in grotesque tension with its meaning, enacting how the aesthetic of labour can disguise its lethality. The final sentence achieves the text's complete transformation: Thomas "became a small moving part in a large, indifferent engine." The copular verb "became" marks a metamorphosis. He is no longer a person operating a machine; he is a machine component. And the comma-separated "indifferent" - placed where one might expect "efficient" or "productive" - reveals the text's moral argument: the engine does not hate its workers; it simply does not register their existence.`,
    },
    markScheme: [
      'Analyses specific language choices and their effects',
      'Comments on how language presents the theme of working life',
      'Uses well-selected quotations embedded in analysis',
      'Considers connotations and implications beyond surface meaning',
      'Uses subject terminology appropriately (not just listing techniques)',
    ],
    examinerTips: [
      'WJEC Eduqas gives you 10 marks for this question - be concise but analytical.',
      'Focus on the effects of language choices, not just identification of techniques.',
      'Consider how word choices build up to create an overall impression.',
      'Always move from quotation to analysis - what does this word/phrase suggest?',
    ],
  },
  {
    id: 'wjec-c1-write-1',
    board: 'WJEC',
    paper: 1,
    questionType: 'Narrative Writing (Q6)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question:
      'Write about a time when someone had to make a difficult decision. You may write from any perspective. (20 marks for communication and organisation, 20 marks for writing accuracy)',
    modelAnswers: {
      'Grade 4-5': `The letter sat on the kitchen table for three days before she opened it. Everyone knew what it was. The envelope was brown and official-looking, with a typed address and a postmark from London. Her mother walked past it every morning, pretending not to notice.\n\nWhen she finally opened it, her hands were shaking. She read it twice, put it down, picked it up, and read it again. The offer was everything she had worked for: a place at a university three hundred miles away, studying the subject she loved. It should have been the happiest moment of her life.\n\nBut her mother was ill. Not seriously ill - not yet - but the kind of ill that meant someone needed to be around. To check the medication. To drive to appointments. To sit in the kitchen in the evenings and make things feel normal. Her brother had already left. Her father had left long before that.\n\nShe sat at the table for a long time, the letter in front of her. The kitchen clock ticked loudly. Outside, a bird was singing. She picked up her phone, found the number, and dialled. When the voice at the other end answered, she took a breath and said the words she had practised in her head all morning.`,
      'Grade 6-7': `He told himself he would decide by Friday. On Friday he told himself he would decide by Monday. On Monday he told himself that some decisions make themselves if you leave them long enough, and he went to work and did not think about it, except that he thought about nothing else.\n\nThe facts were simple. His father needed help. Not the kind of help that could be delivered from two hundred miles away via weekly phone calls and guilt - the physical, daily, undramatic help of someone being present. Meals prepared. Bills opened. The slow bureaucracy of aging navigated by someone who could still read the small print.\n\nThe facts on the other side were also simple. He had a life. A flat. A job he had spent five years building. A relationship that was beginning, cautiously, to use the word "we" instead of "I." None of these things were portable.\n\nHe drove up on Saturday. The house smelled of toast and loneliness - that particular combination of unwashed dishes and drawn curtains that means someone has stopped performing the rituals of order. His father was in the kitchen, attempting to change a lightbulb from a chair that wobbled. He was not frail. That was the difficult thing. He was not frail, not helpless, not incapable. He was just old enough that the distance between managing and not managing had narrowed to a margin that could be erased by a fall, a flu, a letter left unopened.\n\n"You didn't need to come," his father said, which was the sentence that settled it.`,
      'Grade 8-9': `The morning the consultant used the word "progressive," Ruth left the hospital and sat in her car for forty minutes without starting the engine. She did not cry. She was, she realised later, performing triage on her own future - sorting what could be saved from what could not, and discovering, with clinical clarity, that the categories were not as distinct as she had assumed.\n\nHer mother had eleven months. Perhaps fourteen, if the particular cruelty of this disease decided to be slow rather than swift. The consultant had delivered this information with the practised gentleness of someone who ruins lives on a professional basis, and Ruth had nodded and asked sensible questions because that is what you do when the world contracts to a small, bright room with a box of tissues placed at a conspicuous angle.\n\nThe PhD could wait. That was the obvious answer, and everyone said it, and Ruth hated them for saying it because it was true. Three years of research. A supervisor who had called her work "genuinely original," which, in the restrained vocabulary of academia, was practically a declaration of love. A funded position that would not be held, because funding is a river and you swim in it when it flows or you do not swim at all.\n\nShe made two lists. This was her methodology for everything - two columns, evidence weighed, conclusion drawn. The left column said: career, independence, the future she had earned. The right column said: her mother's name. Just the name. No justification required.\n\nThe lists were not equal. They had never been equal. Ruth had known the answer before she made them, just as she suspected the consultant had known the diagnosis before the scans confirmed it. Some decisions are not choices at all but recognitions - moments when you discover what you have already decided, and the only task remaining is to say it aloud.\n\nShe started the car. She drove, not to the university, but home.`,
    },
    markScheme: [
      'Creates a convincing narrative with a clear sense of the decision and its difficulty',
      'Develops character through action, dialogue, and interior thought',
      'Uses language ambitiously and precisely',
      'Structures the narrative effectively (pacing, withholding, climax)',
      'Demonstrates sustained technical accuracy',
      'Maintains a consistent and appropriate narrative voice',
    ],
    examinerTips: [
      'WJEC Eduqas allocates equal marks for content/organisation and accuracy - do not neglect either.',
      'The prompt says "a time when someone had to make a difficult decision" - you can write about yourself or a character.',
      "Show the difficulty of the decision through the character's thought process, not just by telling the reader it was difficult.",
      'A strong ending that resonates is more valuable than a dramatic plot twist.',
    ],
  },
  {
    id: 'wjec-c2-comp-1',
    board: 'WJEC',
    paper: 2,
    questionType: 'Reading Across Centuries Comparison (Q4)',
    difficulty: 'Foundation',
    extract: `Text A (1847): "The governess occupies a position of peculiar difficulty. She is not a servant, yet she is not family. She eats alone in her room or, if permitted to join the family table, sits in a silence that is expected rather than chosen. She educates the children, yet her own education - often superior to that of her employer - earns her no respect, only suspicion. She is, in short, a gentlewoman who must earn her bread without ever appearing to need it."\n- Adapted from a Victorian essay on women's employment\n\nText B (2023): "Teaching assistants are the invisible infrastructure of the education system. They arrive before the teachers, leave after them, and spend the hours between managing behaviour, supporting SEND pupils, running interventions, and performing a hundred daily acts of patience that never appear on any data spreadsheet. Their average salary is £18,000. Their average level of commitment is immeasurable. We talk endlessly about teacher retention while the people who hold classrooms together are paid less than supermarket shelf-stackers."`,
    extractSource:
      'Text A: Adapted from a Victorian essay, 1847; Text B: Adapted from a 2023 education article',
    question:
      "Both texts present people who work in education but are undervalued. Compare how the two writers convey their attitudes towards the people they describe. You should compare the writers' use of language and the ways they try to influence the reader. (10 marks)",
    modelAnswers: {
      'Grade 4-5': `Both writers argue that certain education workers are not valued properly. Text A describes the governess as being in "a position of peculiar difficulty" because she does not belong to any clear social group - "not a servant, yet not family." Similarly, Text B calls teaching assistants "the invisible infrastructure," meaning they are essential but unnoticed. Both writers use contrast to show unfairness. Text A contrasts the governess's education with the lack of respect she receives, while Text B contrasts the high commitment of TAs with their low salary of "£18,000." Text A uses formal language and the word "gentlewoman" to emphasise the governess's social status, while Text B uses more modern, direct language and statistics. Both writers want to make the reader feel sympathy. Text A does this by showing the governess's loneliness - eating "alone in her room" - while Text B uses the comparison with "supermarket shelf-stackers" to make the reader feel that TAs' pay is unfair.`,
      'Grade 6-7': `Both texts advocate for undervalued educators, but their rhetorical strategies reflect their different historical contexts. Text A constructs the governess's predicament through the language of paradox: she is "not a servant, yet not family"; her education "earns her no respect, only suspicion." The antithetical structures enact the impossible position she occupies, caught between categories that refuse to accommodate her. The concluding paradox - a "gentlewoman who must earn her bread without ever appearing to need it" - captures the Victorian double bind of gendered class expectation with devastating economy. Text B employs a more contemporary rhetoric of quantification and indignation. The metaphor of "invisible infrastructure" borrows from engineering to argue that TAs are structurally essential, while the tricolon of "managing behaviour, supporting SEND pupils, running interventions" catalogues their labour to make it visible. The juxtaposition of the statistical ("£18,000") with the abstract ("immeasurable") creates a rhetorical contrast that highlights the gap between value and remuneration. Where Text A's influence is achieved through the reader's sympathy - the lonely meals, the enforced silence - Text B's is achieved through provocation, the comparison with "supermarket shelf-stackers" designed to produce outrage. Both writers position their subjects as essential yet expendable, though Text A's tone is one of resigned observation while Text B's is one of active protest.`,
      'Grade 8-9': `These texts are separated by 176 years, yet they prosecute the same argument: that a society's commitment to education can be measured by how it treats its least visible educators. The rhetorical architectures, however, are shaped by profoundly different conceptions of injustice. Text A operates within a discourse of social taxonomy: the governess's suffering is produced by her categorical illegibility - she fits neither "servant" nor "family," and the repeated negatives ("not… yet not") syntactically perform the erasure she experiences socially. The Victorian writer's critique is implicitly gendered: the governess's "education - often superior to that of her employer" - is parenthetically enclosed, as if the writer is smuggling this subversive comparison past a readership that might not wish to confront it. The final formulation - "earn her bread without ever appearing to need it" - exposes the performative economy of Victorian femininity, where the governess must simultaneously labour and deny that labour. Text B translates this structural invisibility into contemporary terms: TAs are "invisible infrastructure," a metaphor that argues for their necessity while acknowledging their erasure. The rhetorical force of Text B derives from accumulation and juxtaposition - the itemised list of duties followed by the blunt "£18,000," then the abstractly vast "immeasurable," creating a gap between economic and human value that the reader is invited to find intolerable. The final comparison with "supermarket shelf-stackers" is deliberately provocative: it is not a criticism of retail workers but an exposure of the irrational economics of care work. Where Text A influences through pathos - the solitary meal, the imposed silence - Text B influences through logos, marshalling evidence toward an unanswerable conclusion. Yet both texts share a structural irony: they give voice to the voiceless using the very rhetorical and literary competencies that their subjects taught to others.`,
    },
    markScheme: [
      "Compares the writers' attitudes and methods across both texts",
      'Analyses how language is used to influence the reader in each text',
      'Considers differences in historical context and how they shape the writing',
      'Uses embedded textual references from both texts',
      'Maintains a comparative rather than sequential structure',
    ],
    examinerTips: [
      'WJEC Eduqas Component 2 often pairs a 19th-century text with a modern one - consider how context shapes both argument and method.',
      'Compare HOW the writers try to influence you, not just WHAT they think.',
      'Find points of similarity AND difference between the texts.',
      'The best answers treat differences in time period as something that explains differences in method.',
    ],
  },
  {
    id: 'wjec-c2-write-1',
    board: 'WJEC',
    paper: 2,
    questionType: 'Persuasive/Discursive Writing (Q6)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question:
      '"Every young person should spend a year doing voluntary or community work before starting university or full-time employment." Write an article for a newspaper giving your views on this proposal. (20 marks for communication and organisation, 20 marks for writing accuracy)',
    modelAnswers: {
      'Grade 4-5': `Should every young person spend a year doing community work before going to university or starting a job? Some people think this is a great idea, but I think it is more complicated than it sounds.\n\nOn the one hand, community work could be very beneficial. Young people would gain real-world experience that they cannot get in a classroom. They would learn skills like teamwork, communication, and problem-solving. They would also get to help other people, which could make them feel more confident and mature.\n\nHowever, there are problems with making this compulsory. Not every family can afford for their child to spend a year without earning money. Some young people need to start working straight away to support themselves or their families. Making everyone do voluntary work could actually make inequality worse, because richer students would find it easy while poorer students would struggle.\n\nAlso, forced volunteering is a contradiction. The whole point of voluntary work is that it is freely chosen. If you make it compulsory, you take away the thing that makes it valuable.\n\nIn conclusion, while community work is a good thing, I do not believe it should be forced on all young people. Instead, it should be encouraged and made accessible, with financial support for those who need it.`,
      'Grade 6-7': `There is something seductive about the idea of a national service year for young people. It promises to fix everything we worry about: a generation staring at screens, communities coming apart, graduates who can write essays but cannot change a tyre. One year of "real" work, the argument goes, and they will emerge as responsible, empathetic, employable adults. It is a compelling narrative. It is also, I would suggest, a fantasy.\n\nLet me be clear: I am not against voluntary work. I spent six months working in a food bank after my A-levels, and it taught me more about the country I live in than three years of university managed. But the key word in that sentence is "I." I chose it. I had parents who could support me financially while I did it. I had a university place waiting for me afterwards. These are not universally available conditions.\n\nThe proposal to make a service year compulsory ignores the single most important fact about young people in this country: they are not all the same. For a middle-class student with a safety net, a gap year of volunteering is an enriching experience. For a care leaver, a young carer, or someone from a family where every adult wage matters, it is a year of financial hardship imposed by people who have never experienced financial hardship.\n\nThere is also the philosophical objection, which is simple and, I think, unanswerable: compulsory volunteering is an oxymoron. The value of voluntary work lies precisely in its voluntariness - in the decision to give your time freely. Mandate it and you do not create a culture of service; you create a culture of resentment.\n\nThe instinct behind this proposal is a good one. We should want young people to engage with their communities. But we should do so by removing barriers - funding gap-year placements, offering bursaries, creating meaningful opportunities - not by adding another compulsory hoop to a generation that is already over-tested, over-examined, and under-trusted.`,
      'Grade 8-9': `Whenever a society does not know what to do with its young people, it proposes to make them useful. National service, gap year schemes, voluntary work mandates - the specifics change, but the underlying impulse remains constant: the suspicion that eighteen-year-olds, left to their own devices, will squander themselves, and that the solution is to give them purpose before they have had the chance to find their own.\n\nThe current proposal - a compulsory year of voluntary or community work before university or employment - has the sleek plausibility of a conference keynote. It sounds progressive: service, community, real-world experience. It sounds fair: everyone does it, so nobody is disadvantaged. It sounds, most importantly, like it costs nothing, since the labour is unpaid. It is, of course, precisely the people for whom it would cost the most who have the least say in whether it happens.\n\nConsider two eighteen-year-olds. One lives in a four-bedroom house in Surrey, with parents who will fund her year of community work as cheerfully as they funded her Duke of Edinburgh expedition. She will volunteer at a heritage charity, develop her communication skills, and mention it in her personal statement. The other lives in a two-bedroom flat in Middlesbrough with a single parent who works nights. He needs to earn. Not wants to - needs to. For him, a compulsory unpaid year is not an opportunity but a punishment, administered by a political class that has confused its own privileged experience of youth with a universal one.\n\nThe deepest flaw in the proposal is conceptual. Volunteering, by definition, requires consent. Strip that consent away and you do not have volunteering; you have conscription with better branding. The psychological evidence is unambiguous: intrinsic motivation - the kind that produces genuine civic engagement - is destroyed by external compulsion. You will not create a generation that cares about community by forcing them to perform community service. You will create a generation that associates community with coercion.\n\nNone of this means the impulse is wrong. It means the mechanism is. If we want young people to volunteer, we should make volunteering attractive, accessible, and financially viable. Fund it. Recognise it. Build it into the structures of education and employment as an option, not an obligation. Trust young people to make good decisions when good decisions are available to them - and acknowledge that many of them already do, without being asked, in food banks and care homes and mentoring programmes that operate on goodwill and receive considerably less political attention than compulsory schemes that do not yet exist.\n\nThe desire to shape the young is understandable. The refusal to let them shape themselves is not.`,
    },
    markScheme: [
      'Presents a clear and sustained viewpoint on the proposal',
      'Addresses the form and audience (newspaper article)',
      'Uses a range of persuasive and/or discursive techniques effectively',
      'Organises ideas coherently with effective paragraphing and discourse markers',
      'Demonstrates ambitious and accurate use of vocabulary and sentence structures',
      'Achieves a high standard of technical accuracy throughout',
    ],
    examinerTips: [
      'WJEC Eduqas allocates 20 marks for accuracy - careful proofreading is essential.',
      'A discursive article can argue a position while acknowledging complexity - you do not have to be one-sided.',
      'Use concrete examples and hypothetical scenarios to make abstract arguments vivid.',
      'The strongest writing has a distinctive voice - let your personality come through while maintaining appropriate register.',
    ],
  },
  {
    id: 'wjec-5',
    board: 'WJEC',
    type: 'Information Retrieval',
    tier: 'GCSE',
    title: 'Component 1 Section A Q1 Information Retrieval',
    extract: `The village school had twelve pupils when it closed in 1987. Miss Griffiths, who had taught there for thirty-one years, locked the door for the last time on a Friday afternoon in July and posted the key through the letterbox of the county education office the following Monday. She did not attend the closure meeting. She said afterwards that she saw no point in watching people who had never set foot in a classroom decide the fate of one.

The building stood empty for six years. Rain found its way through the slate roof. Vandals broke three windows and spray-painted something on the back wall that Miss Griffiths, walking past on her way to the post office, described as "illiterate, which rather proves my point." The parish council discussed its future intermittently but could not agree on a use. A developer offered to convert it into holiday apartments. A local farmer wanted to use it for storage. Neither proposal attracted a majority.

In 1993, a woman called Helen Rhys moved to the village from Cardiff and, within six months, had persuaded the council to let her reopen the building as a community centre. She raised fourteen thousand pounds through bake sales, sponsored walks, and what she called "the systematic exploitation of middle-class guilt." The centre opened on September 3rd, 1994. Miss Griffiths cut the ribbon. She was eighty-two years old and used the occasion to deliver a short speech about the importance of education that the local newspaper described as "moving" and the parish councillor seated nearest to her described as "fifteen minutes too long."`,
    extractSource: 'Original composition in the style of local history writing',
    question:
      'Read lines 1-15 carefully. Choose five statements below which are true. Write the correct letter in each box. (5 marks)\n\n(a) The school had twelve pupils when it closed.\n(b) Miss Griffiths taught at the school for over forty years.\n(c) Miss Griffiths posted the key through the education office letterbox.\n(d) The building was empty for ten years.\n(e) Vandals damaged the building.\n(f) The parish council quickly agreed on a new use.\n(g) Helen Rhys was originally from Cardiff.\n(h) The community centre opened in 1993.\n(i) Miss Griffiths cut the ribbon at the opening.\n(j) The local newspaper called Miss Griffiths\'s speech "fifteen minutes too long."',
    marks: 5,
    timing: '10 minutes',
    markScheme: [
      'Correctly identifies true statements: (a), (c), (e), (g), (i)',
      'Award one mark for each correct answer, up to five marks',
      'No marks deducted for incorrect answers',
    ],
    examinerTips: [
      'Read each statement carefully and check it against the text.',
      'Watch out for statements that are almost true but change a key detail.',
      'If unsure, go back to the exact line in the text to verify.',
      'This question tests close reading, not interpretation.',
    ],
    modelAnswers: {
      'Grade 4-5': `The five true statements are (a), (c), (e), (g), and (i). Statement (a) is true because the text says "the village school had twelve pupils when it closed." Statement (c) is confirmed by "posted the key through the letterbox of the county education office." Statement (e) is true because "vandals broke three windows and spray-painted something on the back wall." Statement (g) is true as the text says Helen Rhys "moved to the village from Cardiff." Statement (i) is correct because "Miss Griffiths cut the ribbon."`,
      'Grade 6-7': `The correct answers are (a), (c), (e), (g), and (i). The distractors are carefully designed: (b) is false because she taught for thirty-one years, not over forty; (d) is false because the building was empty for six years, not ten; (f) is the opposite of what happened, as the council "could not agree"; (h) is false because the centre opened in 1994, not 1993; and (j) attributes the "fifteen minutes too long" comment to the newspaper, when it was actually said by the parish councillor.`,
      'Grade 8-9': `The correct answers are (a), (c), (e), (g), and (i). Each false statement contains a specific distortion: (b) inflates thirty-one years to "over forty"; (d) doubles the vacancy period from six to ten years; (f) reverses the council's indecision; (h) confuses Helen Rhys's arrival date (1993) with the centre's opening date (1994); and (j) misattributes a quotation, assigning the councillor's remark to the newspaper. The question tests precision of reading rather than inference.`,
    },
  },
  {
    id: 'wjec-6',
    board: 'WJEC',
    type: 'Persuasive Writing',
    tier: 'GCSE',
    title: 'Component 2 Section B Persuasive Writing',
    extract: '',
    question:
      'Your local park is threatened with being sold for housing development. Write a letter to the local newspaper persuading readers that the park must be saved. (20 marks for communication and organisation, 20 marks for writing accuracy)',
    marks: 40,
    timing: '30 minutes',
    markScheme: [
      'Matches the conventions of a letter to a newspaper',
      'Presents a clear, sustained persuasive argument',
      'Uses a range of rhetorical techniques effectively',
      'Organises ideas coherently with effective discourse markers',
      'Demonstrates ambitious vocabulary and varied sentence structures',
      'Maintains a high standard of technical accuracy',
    ],
    examinerTips: [
      'WJEC gives equal marks for content and accuracy. Proofread carefully.',
      'A letter to a newspaper is semi-formal: passionate but controlled.',
      'Use concrete local details to make your argument feel real and specific.',
      'The best persuasive writing acknowledges the opposing view before dismantling it.',
    ],
    modelAnswers: {
      'Grade 4-5': `Dear Editor,

I am writing to express my concern about the proposal to sell Brynmoor Park for housing development. I believe this would be a terrible loss for our community.

Brynmoor Park has been part of this town for over eighty years. Generations of families have played there, walked their dogs there, and enjoyed the green space. My own children learned to ride their bikes on the path by the duck pond. If we sell this park, where will people go?

The council says we need more housing. I understand this, but building on the park is not the answer. There are brownfield sites on the old industrial estate that could be developed instead. Why destroy something irreplaceable when alternatives exist?

Parks are not luxuries. Research shows that access to green space improves mental and physical health. Our town already has fewer parks per person than the national average. Removing Brynmoor would make this worse. The NHS spends millions treating illnesses that could be prevented by outdoor exercise. Selling the park to save money now will cost us more in the long term.

I urge every reader who values this park to attend the council meeting on March 25th and make their voice heard. Once the park is gone, it is gone forever.

Yours faithfully,
A Concerned Resident`,
      'Grade 6-7': `Dear Editor,

I should like to draw your readers' attention to a proposal that has, so far, attracted remarkably little attention for something that would permanently alter the character of our town. The council intends to sell Brynmoor Park - all four acres of it, including the memorial garden, the children's playground, and the avenue of horse chestnuts that has lined the eastern boundary since 1938 - to a property developer.

The financial logic is, I suppose, defensible. Land has value. Housing is needed. A park generates no revenue. But this reasoning treats a community asset as though it were a derelict warehouse, and it reveals a particular kind of poverty - not financial, but imaginative. A council that cannot conceive of value beyond the balance sheet is a council that has forgotten what it exists to protect.

Let me offer some figures that do not appear in the proposal. Brynmoor Park is used by an estimated three thousand residents every week. The Saturday morning parkrun attracts over a hundred runners. The Friends of Brynmoor group - volunteers who maintain the flowerbeds, clear litter, and organise seasonal events - donate approximately two thousand hours of unpaid labour annually. This is not a neglected space waiting to be repurposed. It is a thriving civic resource that the council is proposing to destroy because someone has offered to buy it.

The housing argument is a distraction. There are fourteen acres of brownfield land on the former Trevithick Works site, less than half a mile from the park, that have been earmarked for development for over a decade. The reason they remain undeveloped is not a shortage of land but a shortage of political will. It is cheaper and easier to sell a park than to remediate a contaminated industrial site, and the council has chosen accordingly. This is not a housing policy. It is a path of least resistance.

I ask your readers to consider what kind of town they wish to live in - one that protects its green spaces or one that sells them. The consultation closes on April 12th. I hope we are not too late.

Yours faithfully,
D. Morgan`,
      'Grade 8-9': `Dear Editor,

There is a test that every town faces sooner or later, and it is this: when money is short and land is valuable, do you sell the park? The answer reveals everything about a community's understanding of what it is for. Our council has chosen its answer. I am writing to suggest that it is the wrong one.

Brynmoor Park is four acres. In the language of the proposal document, it is "an underperforming asset with significant development potential." In the language of everyone who has ever used it, it is the place where your children take their first unsupervised steps away from you, where the elderly walk circuits that keep them mobile for another year, where the bereaved sit on the bench by the memorial garden because grief needs somewhere to go that is not a living room. These uses do not appear on a spreadsheet. They are, nonetheless, the reason the park exists.

I have read the proposal. I note that it quantifies the revenue from the land sale but does not quantify the cost of losing the park. This is not an oversight. It is a strategy. The benefits of green space - reduced GP visits, improved mental health, lower rates of childhood obesity, stronger social cohesion - are extensively documented but diffuse, accruing across budgets and timescales that exceed the electoral cycle. The revenue from selling the park, by contrast, arrives in a single, legible figure that can be placed in a column marked "income." The council has chosen the legible option, which is understandable. It is also cowardly.

The housing argument deserves engagement, because it is not frivolous. We do need housing. But the implicit claim - that this park is the only available land - is false, and the council knows it is false. The Trevithick Works brownfield site, three hundred metres to the south, has been designated for residential development since 2014. It remains undeveloped because remediation is expensive and complicated, and because a park is easier to sell than a problem is to solve. The choice being presented as necessity is, in reality, a preference - a preference for the simple over the right.

I do not think the councillors who approved this proposal are malicious. I think they are tired, and that tired people reach for the nearest solution rather than the best one. But this is a decision that cannot be undone. Houses, once built, do not revert to grass. The chestnuts, once felled, do not regrow in our lifetimes. Every generation inherits the irreversible decisions of the one before it, and if we permit this sale, our children will inherit a town that chose concrete over canopy, revenue over refuge, and the expedient over the enduring.

The consultation closes on April 12th. I would urge every reader who has ever walked through Brynmoor Park to respond - not because it will definitely make a difference, but because silence, in these matters, is always interpreted as consent.

Yours faithfully,
D. Morgan`,
    },
  },
  {
    id: 'wjec-7',
    board: 'WJEC',
    type: 'Shakespeare Analysis',
    tier: 'GCSE',
    title: 'Literature Component 1 Shakespeare',
    extract: `PROSPERO:
Our revels now are ended. These our actors,
As I foretold you, were all spirits and
Are melted into air, into thin air;
And, like the baseless fabric of this vision,
The cloud-capped towers, the gorgeous palaces,
The solemn temples, the great globe itself,
Yea, all which it inherit, shall dissolve,
And, like this insubstantial pageant faded,
Leave not a rack behind. We are such stuff
As dreams are made on, and our little life
Is rounded with a sleep.

(The Tempest, Act 4 Scene 1)`,
    question:
      'How does Shakespeare use this speech to explore ideas about power, illusion, and the nature of life? You should consider the language and imagery used, the significance of the speech in the play as a whole, and relevant context. (20 marks)',
    marks: 20,
    timing: '30 minutes',
    markScheme: [
      'Analyses how language and imagery convey ideas about power and impermanence',
      'Explores the significance of the speech within the wider play',
      'Uses well-selected quotations analysed in close detail',
      "Considers relevant context (Shakespeare's late career, theatre, colonialism)",
      'Shows understanding of how the speech functions as a dramatic moment',
      'Develops a coherent and sustained argument',
    ],
    examinerTips: [
      'This speech operates on multiple levels. Consider the character, the play, and the playwright.',
      'Think about what Prospero is saying about his own magic - and what Shakespeare might be saying about theatre.',
      'Analyse specific words and images, not just general themes.',
      'Context should illuminate your interpretation, not be bolted on as a separate paragraph.',
    ],
    modelAnswers: {
      'Grade 4-5': `In this speech, Prospero tells the other characters that the magical show he created is over. He says the actors "were all spirits" that have "melted into air," which shows his power to create and dismiss illusions. This links to the rest of the play where Prospero uses magic to control everyone on the island.

Prospero then says that everything - "the cloud-capped towers, the gorgeous palaces, the solemn temples" - will eventually disappear. The listing of grand buildings creates an image of the most impressive things humans can create, and then Prospero says even these "shall dissolve." This is about the temporary nature of everything, including power itself.

The most famous line is "We are such stuff as dreams are made on." This compares human life to a dream, suggesting that life is fragile and unreal. The word "little" in "our little life" makes human existence seem small and unimportant. The phrase "rounded with a sleep" means life is surrounded by sleep - the sleep before birth and the sleep of death.

This speech is significant because Prospero is Shakespeare's last great character, and many people believe Shakespeare is speaking through him. When Prospero says the show is over, Shakespeare may be saying goodbye to the theatre. The "great globe" could refer to the Globe Theatre as well as the world, which would make this a very personal speech about Shakespeare's own career ending.`,
      'Grade 6-7': `Prospero's speech marks the moment when Shakespeare's most powerful magician confronts the limits of his own art, and in doing so, articulates a vision of universal impermanence that extends far beyond the immediate dramatic context.

The opening - "Our revels now are ended" - operates on three simultaneous levels: Prospero dismisses the masque he has conjured for Ferdinand and Miranda; Shakespeare signals the approaching end of the play; and the ageing playwright, in what is widely considered his final solo work, contemplates the conclusion of his theatrical career. The word "revels" carries connotations of festivity and indulgence, but its proximity to "ended" immediately introduces the theme of cessation.

The actors who "were all spirits" have "melted into air, into thin air" - the repetition of "air" with the qualifying "thin" enacts the process of dissolution it describes, the phrase becoming lighter and less substantial with each word. This is Prospero describing his magic, but it is also Shakespeare describing theatre: actors who embody characters for two hours and then cease to exist. The "baseless fabric of this vision" uses textile imagery - "fabric" - to suggest both construction and fragility, while "baseless" denies even the illusion of permanence.

The asyndetic listing of "cloud-capped towers," "gorgeous palaces," "solemn temples," "the great globe itself" creates a crescendo of human achievement before the devastating verb "dissolve" reduces it all to nothing. The "great globe" is Shakespeare's most celebrated double meaning: simultaneously the Earth and the Globe Theatre, collapsing the distinction between the world and the stage that The Tempest has been exploring throughout. The adjective "great" is quietly ironic when applied to a wooden playhouse in Southwark, yet the irony cuts both ways - if the globe is a theatre, then the theatre is a globe, and what happens on stage is as real as what happens in the world.

"We are such stuff as dreams are made on" is the speech's philosophical centre. The noun "stuff" - material, substance - is deliberately prosaic, grounding the metaphysical claim in the language of craft. Dreams are "made on," not "made of," a preposition that suggests construction rather than composition, reinforcing the theatrical metaphor. Human life is not merely dreamlike; it is manufactured, performed, and temporary. The final image - "our little life / Is rounded with a sleep" - wraps existence in oblivion, the verb "rounded" suggesting both completeness and enclosure. We emerge from unconsciousness and return to it, and everything between is performance.`,
      'Grade 8-9': `This speech is Shakespeare's most extraordinary act of dramatic ventriloquism: a character who commands spirits tells us that everything - including the art that commands spirits - is ephemeral. The result is a passage that dismantles its own medium, using the resources of theatrical illusion to argue for the illusoriness of theatre, and by extension, of existence itself.

Prospero begins with closure: "Our revels now are ended." The possessive "our" is inclusive, drawing the audience into complicity with a theatrical event that is about to declare itself unreal. The actors "were all spirits" - the past tense is immediate, performative, the transformation from presence to absence happening in the speaking of it. "Melted into air, into thin air" is Shakespeare's most precisely engineered diminuendo: the repetition strips away substance syllable by syllable, the adjective "thin" further attenuating what "air" has already rendered intangible. The line performs its own argument - by the time we reach the second "air," the spirits have vanished linguistically as well as dramatically.

The subsequent catalogue - "the cloud-capped towers, the gorgeous palaces, / The solemn temples, the great globe itself" - constructs a hierarchy of human civilisation only to subject it to a single verb: "dissolve." The progression from architectural to cosmic is significant. Shakespeare moves from the edifices of secular power ("towers"), through wealth ("gorgeous palaces") and religion ("solemn temples"), to the totality of the physical world ("the great globe"), and annihilates them equally. The "great globe" is, of course, the play's most celebrated pun - simultaneously the planet and the theatre on Bankside where these words were first spoken. This dual reference is not merely clever; it is structurally essential. By identifying the world with the theatre, Shakespeare collapses the ontological distinction between reality and representation. If the Globe is the globe, then the dissolution of one is the dissolution of the other, and the audience watching the play is implicated in the impermanence it describes.

"We are such stuff / As dreams are made on" - the line's fame has perhaps dulled our awareness of its radicalism. The word "stuff" is a textile term: fabric, material for construction. Human beings are not compared to dreams but identified as the raw material from which dreams are manufactured. The preposition "on" (rather than the later emendation "of") preserves the sense of fabrication - dreams are "made on" us as garments are made on a loom. We are simultaneously the dreamer, the dream, and the material of dreaming, a triple identity that Shakespeare leaves deliberately unresolved.

The concluding image - "our little life / Is rounded with a sleep" - is the speech's quietest and most devastating moment. "Little" is devastating after the grandeur of towers and palaces, reducing the individual human span to a diminutive in a sentence about eternity. "Rounded" has been debated for four centuries: does it mean "surrounded," implying that sleep (oblivion, death) encloses life on both sides? Or "completed," implying that sleep gives life its shape, its fullness? Shakespeare, characteristically, means both. Life is bounded by unconsciousness - the sleep before birth, the sleep after death - and it is only within this frame that it achieves whatever form it has. The sleep does not diminish life; it defines it.

Contextually, this speech represents Shakespeare's most direct engagement with his own art's mortality. Writing The Tempest around 1611, near the end of his career, Shakespeare creates a magician who renounces his power - and in doing so, writes the most powerful speech in the canon. The paradox is the point: Prospero's relinquishment of magic is itself the supreme act of magic, just as Shakespeare's farewell to the theatre is his most theatrically accomplished moment. The speech does not mourn impermanence; it transfigures it, making the transience of art not a failure but its defining condition.`,
    },
  },
  {
    id: 'wjec-lit-macbeth-1',
    board: 'WJEC',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth - The Dagger Soliloquy',
    extract: `Is this a dagger which I see before me,\nThe handle toward my hand? Come, let me clutch thee.\nI have thee not, and yet I see thee still.\nArt thou not, fatal vision, sensible\nTo feeling as to sight? Or art thou but\nA dagger of the mind, a false creation,\nProceeding from the heat-oppressed brain?`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 2 Scene 1",
    question:
      'Look at how Macbeth speaks and behaves here. What does it reveal about his state of mind at this point in the play? How does Shakespeare make this a dramatic and significant moment? (15 marks)',
    marks: 15,
    timing: '20 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Macbeth is about to murder King Duncan, and his state of mind is confused and frightened. He sees a dagger floating in front of him but cannot tell if it is real or imagined. The question "Is this a dagger which I see before me?" shows he is uncertain about what he is seeing. When he says "Come, let me clutch thee" he tries to grab it, which shows he wants to confirm whether it is real.

The phrase "I have thee not, and yet I see thee still" shows his confusion - he cannot touch it but he can still see it. He calls it "a dagger of the mind, a false creation" which shows he thinks his brain might be tricking him. The phrase "heat-oppressed brain" suggests his mind is overheated with stress and guilt about what he is about to do.

Shakespeare makes this dramatic by putting Macbeth alone on stage, talking to himself. The audience can see his inner struggle. The dagger pointing towards Duncan\'s chamber shows that Macbeth is being drawn towards the murder even though part of him does not want to do it. This makes the audience feel tense because they know the murder is about to happen.

This is significant because it shows that even before the murder, Macbeth\'s mind is already disturbed. It foreshadows the guilt and madness that will get worse throughout the play, like when he sees Banquo\'s ghost later.`,
      'Grade 6-7': `The dagger soliloquy reveals Macbeth\'s state of mind as fractured between rational self-awareness and hallucinatory compulsion. The opening question - "Is this a dagger which I see before me?" - dramatises the breakdown of empirical certainty: Macbeth cannot trust his own senses, and the interrogative form externalises his internal crisis. The sequence of contradictions that follows - "I have thee not, and yet I see thee still" - stages a battle between the evidence of touch (which denies the dagger\'s existence) and sight (which confirms it), and Macbeth\'s inability to resolve this contradiction reveals a mind in which the normal hierarchy of perception has collapsed.

Shakespeare makes this moment dramatically significant through the soliloquy form itself. Macbeth is alone on stage in the dark, addressing a vision that the audience may or may not see (productions make different choices about staging the dagger). This ambiguity places the audience in the same epistemological position as Macbeth - uncertain whether the supernatural is real or whether they are witnessing the projections of a guilty mind. The dagger\'s handle turns "toward my hand," suggesting invitation, as though the hallucination is guiding Macbeth towards the murder and his own will is being supplanted by an external force.

The self-diagnosis - "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain" - is remarkably lucid. Macbeth correctly identifies the hallucination as a psychological phenomenon, the compound adjective "heat-oppressed" suggesting a mind feverish with anticipation and moral pressure. Yet this lucidity is dramatically ironic: the man who can diagnose his own hallucination will proceed to act on it regardless, demonstrating that self-knowledge is no defence against compulsion. This paradox - seeing clearly and acting destructively - defines Macbeth\'s tragic character.

The moment is also structurally significant within the play\'s pattern of visions and hallucinations. It establishes that Macbeth\'s guilt manifests as sensory disturbance before the crime is committed, foreshadowing the voice that cries "Sleep no more" and the ghost of Banquo. Shakespeare constructs a psychological trajectory in which each crime deepens the sensory disruption, suggesting that violence does not merely damage the victim but fundamentally alters the perpetrator\'s relationship with reality.`,
      'Grade 8-9': `Shakespeare constructs the dagger soliloquy as a dramatisation of the moment when the will capitulates to desire - the instant before action in which the self confronts its own capacity for destruction and recognises that knowledge will not prevent it.

The opening question - "Is this a dagger which I see before me, / The handle toward my hand?" - is not merely about epistemology but about agency. The dagger\'s handle is oriented towards Macbeth, an invitation that transforms the hallucination from a passive image into an active solicitation. The directional detail is crucial: in sword-fighting, presenting the handle is a gesture of offering - the dagger is not threatening Macbeth but arming him, and the question of whether it is real or imagined becomes secondary to its functional significance. Whether the dagger exists or not, it points the way; whether it is supernatural or psychological, its effect is the same.

The imperative "Come, let me clutch thee" enacts the reaching of the will towards the act. The verb "clutch" is more violent than "grasp" or "hold" - it implies desperation, the tightening of fingers around something that might escape, and its failure ("I have thee not") creates a moment of grotesque physical comedy: a man grasping at empty air in the darkness. But the conjunction "and yet I see thee still" refuses to let the failure dismiss the vision. Shakespeare constructs a hierarchy of senses in which sight overrules touch, and this inversion mirrors the larger epistemological collapse the play performs: in Macbeth\'s world, what you see (prophecy, hallucination, the appearance of innocence) carries more weight than what you can verify.

The self-diagnosis - "a dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain" - is the soliloquy\'s most analytically sophisticated passage. Macbeth proposes a materialist explanation for his vision: the brain, overheated by psychological pressure, has produced a "false creation." The medical vocabulary - "heat-oppressed" derives from the humoral theory in which excessive heat produces delirium - positions Macbeth as his own physician, diagnosing the symptom while unable to treat the underlying condition. The word "false" resonates throughout the play: the "false face" that must hide the "false heart," the "false" Thane of Cawdor, the equivocating witches. The dagger is "false" in the sense of unreal, but it is also "false" in the sense of treacherous - it leads Macbeth towards a murder that will destroy him.

Shakespeare makes this moment dramatically significant by staging the soliloquy as a threshold scene. Macbeth stands between the world of intention and the world of action, and the soliloquy occupies the temporal space in which retreat is still possible. The audience knows - because they have witnessed his vacillation, Lady Macbeth\'s persuasion, and his eventual resolution - that Macbeth will cross this threshold, and the dramatic tension derives not from uncertainty about the outcome but from the excruciating proximity to a decision that cannot be undone. The dagger, whether real or imagined, is the last image Macbeth sees before he enters Duncan\'s chamber, and its ambiguous status - suspended between reality and hallucination, invitation and warning - captures the play\'s fundamental insight: that the most consequential actions are performed in a state of radical uncertainty, by minds that cannot fully distinguish between what they see and what they desire to see.`,
    },
    markScheme: [
      "Analyses what the extract reveals about Macbeth's state of mind",
      'Explores specific language choices and their dramatic effects',
      'Comments on how Shakespeare makes this a dramatic and significant moment',
      "Shows understanding of the extract's significance within the play as a whole",
      'Uses well-selected quotations from the extract',
      'Writes with clarity and analytical precision',
    ],
    examinerTips: [
      'WJEC extract questions are shorter (15 marks) - keep your response focused and concise.',
      'Focus on the extract itself rather than ranging widely across the play.',
      'Consider dramatic effect: how does this work on stage? What does the audience experience?',
      'Comment on the soliloquy as a form - what does speaking alone reveal?',
    ],
  },
  {
    id: 'wjec-lit-macbeth-2',
    board: 'WJEC',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'Macbeth - The Decline of Macbeth',
    extract: `I am in blood\nStepped in so far that, should I wade no more,\nReturning were as tedious as go o\'er.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 3 Scene 4",
    question:
      "How does Shakespeare present Macbeth's moral decline? Write about the presentation of Macbeth in this extract and elsewhere in the play. (15 marks + essay 25 marks)",
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Macbeth says he has gone so far in committing murder that he might as well continue. The metaphor "I am in blood stepped in so far" compares his crimes to wading through a river of blood. This is a powerful image that shows he has committed so many murders that he is surrounded by the consequences.

The word "tedious" is surprising because it means boring or tiring, not horrifying. This shows that Macbeth no longer feels shock at what he has done - murder has become routine to him. This is part of his moral decline: he has gone from being a loyal soldier to someone who sees killing as merely inconvenient.

At the beginning of the play, Macbeth is a brave and respected warrior. He is called "brave Macbeth" and "noble Macbeth" by the other characters. King Duncan rewards him with the title Thane of Cawdor. He seems like a good person, although the witches\' prophecies start to corrupt his thinking.

His first major decline comes when he murders Duncan. Even then, he feels terrible guilt, saying "Will all great Neptune\'s ocean wash this blood clean from my hand?" This shows he knows what he has done is wrong. But after this, his decline accelerates. He has Banquo murdered, and then attacks Macduff\'s innocent wife and children. Each crime shows him becoming more ruthless and less human.

By the end of the play, Macbeth seems almost numb. He says "I have supped full with horrors" meaning he is so used to terrible things that they no longer affect him. When he hears Lady Macbeth has died, he says "She should have died hereafter" - he barely reacts. Shakespeare presents this numbness as the final stage of moral decline: Macbeth has not just become evil, he has lost the ability to feel anything at all.`,
      'Grade 6-7': `Shakespeare presents Macbeth\'s moral decline through a carefully structured sequence of psychological states: initial resistance, tormented action, desperate escalation, and finally emotional numbness. This extract captures the pivotal moment where Macbeth abandons the possibility of redemption and commits to continued violence.

The blood metaphor - "in blood / Stepped in so far" - transforms cumulative murder into a physical landscape. The verb "stepped" implies gradual immersion rather than a single plunge, suggesting that moral decline is not a dramatic fall but an incremental process - each crime taking Macbeth deeper into a river he did not initially intend to cross. The enjambment across "in blood / Stepped" forces the reader to wade through the line break as Macbeth wades through blood, creating a formal equivalent of the experience it describes.

The word "tedious" is the extract\'s most devastating choice. Macbeth reduces the moral calculation between continued murder and repentance to a question of effort - both directions are equally "tedious," equally tiresome, and the distinction between them is logistical rather than ethical. This represents a catastrophic failure of moral vocabulary: the man who once asked whether "all great Neptune\'s ocean" could clean his hands now treats the same blood with weary indifference. Shakespeare tracks moral decline not through increasing horror but through decreasing affect - Macbeth becomes more dangerous precisely as he becomes less horrified.

The play\'s opening establishes Macbeth as a figure of martial virtue. The Captain\'s account of the battle - Macbeth\'s sword that "smoked with bloody execution" - presents violence as heroic when sanctioned by legitimate authority. This is significant because it establishes that Macbeth is not naturally peaceful: his capacity for violence pre-exists his corruption, and the witches\' prophecies redirect rather than create his destructive potential. The soliloquy in Act 1 Scene 7 demonstrates his moral awareness at its most acute - he catalogues every reason not to kill Duncan, recognises the justice of his own arguments, and proceeds regardless, making his crime one of knowledge rather than ignorance.

The murder of Banquo marks a qualitative shift. Where Duncan\'s murder was performed reluctantly, in anguished awareness of its consequences, Banquo\'s is commissioned pragmatically - Macbeth hires murderers, distances himself from the act, and frames the decision in the language of political necessity. The decline from personal anguish to administrative efficiency is Shakespeare\'s most chilling insight into the mechanics of tyranny. By Act 4, the attack on Macduff\'s family represents pure tactical violence - Macbeth no longer even pretends to moral justification but acts on impulse: "The firstlings of my heart shall be the firstlings of my hand."

By Act 5, Shakespeare completes the arc with the "Tomorrow, and tomorrow, and tomorrow" soliloquy, in which Macbeth arrives at a nihilism so complete that life itself is "a tale told by an idiot, full of sound and fury, signifying nothing." This is not philosophical wisdom but the endpoint of moral decline: a consciousness so thoroughly emptied by violence that it can no longer perceive meaning in anything. Shakespeare presents Macbeth\'s tragedy not as punishment for a single crime but as the progressive self-destruction of a complex moral intelligence - the loss not merely of goodness but of the capacity to recognise goodness, which is the more terrible deprivation.`,
      'Grade 8-9': `Shakespeare architecturally designs Macbeth\'s moral decline as a study in the erosion of interiority - the progressive emptying of a rich psychological landscape until nothing remains but the mechanical repetition of violence. This extract captures the precise moment at which moral reasoning is replaced by strategic calculation, and the metaphor Shakespeare chooses to dramatise this transition is one of the most formally perfect in English literature.

"I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o\'er" constructs moral experience as topography - a river of blood through which Macbeth has waded to the midpoint, where forward and backward are equidistant and therefore, in his calculus, equivalent. The geographical metaphor performs a philosophical operation: it converts a moral question (should I continue killing?) into a spatial one (which direction is shorter?), and this conversion is itself the moral decline the speech describes. The ethical distinction between continuing to murder and ceasing to murder - which should be absolute - has been dissolved into a quantitative assessment of effort. The word "tedious" consummates this dissolution: it belongs to the vocabulary of inconvenience, not morality, and its presence in a sentence about mass murder constitutes a form of linguistic atrocity - the violence done to language mirrors the violence done to human life.

Shakespeare establishes Macbeth\'s starting point with characteristic precision. The battlefield report in Act 1 Scene 2 presents a man whose violence is not only acceptable but celebrated - Macbeth "unseamed" Macdonwald "from the nave to the chops," a description of extraordinary brutality that is narrated with heroic relish. This establishes that the distinction between legitimate and illegitimate violence in the play\'s moral universe is not a matter of degree but of authorisation: the same act that makes Macbeth "brave" on the battlefield makes him a "butcher" in the bedchamber. The play interrogates this distinction rather than simply endorsing it, asking whether a man whose profession is killing can meaningfully be said to "decline" when he redirects that capacity from state-sanctioned to self-interested targets.

The soliloquy in Act 1 Scene 7 represents the high-water mark of Macbeth\'s moral consciousness. His enumeration of reasons against the murder - Duncan\'s kinship, his hospitality, his virtue - demonstrates a sophisticated moral intelligence capable of weighing competing obligations. The imagery is cosmically scaled: angels "trumpet-tongued," pity as a "naked new-born babe / Striding the blast." This linguistic richness is itself significant - Macbeth\'s moral imagination at this point is so fertile that it produces some of the most complex figurative language in Shakespeare. The subsequent decline can be measured not only in the escalation of violence but in the impoverishment of language: compare the baroque complexity of Act 1 Scene 7 with the deadened monosyllables of "She should have died hereafter" in Act 5. Moral decline is, in Shakespeare\'s dramatisation, a form of linguistic decline - the progressive loss of the vocabulary through which ethical distinctions are made.

The murder of Banquo introduces the bureaucratisation of violence that the blood-wading metaphor will later describe. Macbeth does not kill Banquo himself but hires proxies, and his conversation with the murderers is conducted in the language of employment negotiation rather than moral deliberation. This distancing - from personal to delegated violence - mirrors the political structures of tyranny, in which the ruler maintains power through a chain of command that diffuses moral responsibility. The attack on Macduff\'s family completes the transition from reluctant murderer to systematic tyrant - these are not rivals or threats but innocents, and their destruction serves no strategic purpose beyond the expression of power itself.

The "Tomorrow" soliloquy in Act 5 is the terminus of the decline, and its nihilism is not a philosophical position but a psychological condition. When Macbeth declares life "a tale told by an idiot, full of sound and fury, signifying nothing," he is describing his own experience with devastating accuracy: his life has become a tale of sound and fury - battles, murders, hauntings - that has been emptied of significance by the very violence that was supposed to secure his ambition. The circular irony is complete: Macbeth killed to gain meaning (kingship, power, legacy) and the killing itself has destroyed his capacity to experience meaning. This is Shakespeare\'s profoundest insight into the psychology of violence: it does not merely damage others but annihilates the perpetrator\'s inner world, leaving a figure who can describe the emptiness of existence with poetic precision but can no longer feel anything at all - a consciousness that has become its own tomb.`,
    },
    markScheme: [
      "Analyses how Shakespeare presents Macbeth's moral decline through language and imagery",
      'Closely examines specific words and images in the extract',
      'Traces the decline across the whole play with well-chosen references',
      'Considers relevant context (Jacobean attitudes, the moral order, tragedy)',
      'Uses precisely embedded quotations to support a sustained argument',
      'Develops a conceptualised response to the nature of moral decline',
    ],
    examinerTips: [
      'WJEC splits marks between extract analysis and the wider essay - address both carefully.',
      'Track the decline as a process with distinct stages, not a single event.',
      "Pay close attention to changes in Macbeth's language - how his vocabulary changes reflects his moral change.",
      'Consider what makes Macbeth a tragic figure rather than simply a villain.',
    ],
  },
  {
    id: 'wjec-lit-prose-19c-1',
    board: 'WJEC',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol - The Ghost of Christmas Yet to Come',
    extract: `The Phantom slowly, gravely, silently, approached. When it came near him, Scrooge bent down upon his knee; for in the very air through which this Spirit moved it seemed to scatter gloom and mystery.\nIt was shrouded in a deep black garment, which concealed its head, its face, its form, and left nothing of it visible save one outstretched hand.`,
    extractSource: "Written in the style of Charles Dickens's A Christmas Carol, Stave 4",
    question:
      'How does Dickens use the Ghost of Christmas Yet to Come to create fear and to change Scrooge? Write about this extract and the novella as a whole. (20 marks)',
    marks: 20,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens creates fear through the way the Ghost is described. It approaches "slowly, gravely, silently," and the three adverbs build up a sense of something terrifying. Unlike the other ghosts who speak and interact with Scrooge, this Ghost says nothing, which makes it even more frightening because Scrooge cannot reason with it.

The Ghost is "shrouded in a deep black garment" which hides everything about it. The word "shrouded" connects to death because shrouds are used to wrap dead bodies. The only visible part is "one outstretched hand," which is pointing, directing Scrooge to look at scenes of his future. The darkness and mystery make the Ghost seem like death itself.

Scrooge\'s reaction shows his fear - he "bent down upon his knee," which means he is kneeling in submission. The phrase "scatter gloom and mystery" shows the Ghost brings darkness wherever it goes. This is the most powerful ghost because it represents the future, which Scrooge can still change.

The Ghost of Christmas Yet to Come changes Scrooge by showing him the worst possible future. It shows people stealing from his dead body, his lonely grave, and the Cratchit family mourning Tiny Tim. These scenes terrify Scrooge because he sees that if he does not change, he will die alone and unmourned while innocent people like Tiny Tim will also die.

Dickens uses this Ghost to deliver the final shock that completes Scrooge\'s transformation. After the emotional memories of the Ghost of Christmas Past and the social lessons of the Ghost of Christmas Present, the Ghost of Christmas Yet to Come provides the fear that finally makes Scrooge determined to change his ways.`,
      'Grade 6-7': `Dickens constructs the Ghost of Christmas Yet to Come as the novella\'s most psychologically effective agent of transformation, using its silence and concealment to force both Scrooge and the reader into an active, interpretive role that the previous ghosts\' verbosity precluded.

The extract\'s adverbial tricolon - "slowly, gravely, silently" - establishes the Ghost\'s approach as ritualistic and inevitable. Each adverb reduces a different quality: "slowly" eliminates haste, "gravely" eliminates levity, "silently" eliminates communication. The Ghost arrives not as a character but as an absence - a figure defined by what it withholds. The verb "scatter" in "seemed to scatter gloom and mystery" suggests the Ghost does not merely possess these qualities but disperses them, contaminating the atmosphere it moves through. The passive construction - "it seemed" - introduces uncertainty, as if the narrator is unsure whether the effect is real or projected.

The description of the garment - "concealed its head, its face, its form" - uses anaphoric repetition to catalogue what cannot be seen, and the effect is paradoxical: the more Dickens describes the concealment, the more vivid our sense of what is concealed. The "one outstretched hand" is the only point of contact between the Ghost and the visible world, and its gesture of pointing becomes the stave\'s controlling image - the Ghost does not speak but directs, forcing Scrooge to look at what he would rather not see.

The Ghost\'s silence is its most powerful attribute. The Ghost of Christmas Past engages Scrooge in dialogue; the Ghost of Christmas Present challenges and instructs. The Ghost of Christmas Yet to Come simply presents evidence and waits. This method is more terrifying because it requires Scrooge to draw his own conclusions - there is no spirit to argue with, no interpretation to reject. The silence also connects the Ghost to death itself, which is similarly non-negotiable and inarticulate.

Dickens designs the three ghosts as a pedagogical sequence. The Ghost of Christmas Past teaches through emotion (nostalgia, regret); the Ghost of Christmas Present teaches through empathy (the Cratchits, Ignorance and Want); the Ghost of Christmas Yet to Come teaches through fear (death, oblivion). Each appeals to a different psychological faculty, and together they dismantle every defence Scrooge has constructed against moral feeling. The final ghost is positioned last because fear is the most primitive and powerful motivator - Dickens understood that sustained behavioural change requires not just intellectual conviction but visceral dread.

Contextually, the Ghost draws on the memento mori tradition - the medieval artistic convention of representing death as a hooded, skeletal figure - and the Victorian fascination with mortality that produced elaborate funeral customs, mourning dress, and deathbed scenes. Dickens appropriates this cultural preoccupation to serve his social argument: the fear of death, properly directed, becomes the catalyst for a transformed life.`,
      'Grade 8-9': `Dickens constructs the Ghost of Christmas Yet to Come as the novella\'s most sophisticated rhetorical instrument - a figure whose power derives not from what it reveals but from the interpretive labour it demands of its subject. Where the previous Ghosts are pedagogues, this one is a mirror: it presents images without commentary and forces Scrooge to supply the meaning, a process that constitutes the final stage of his moral education.

The extract\'s formal properties are carefully calibrated to produce dread through restraint. The triple adverb sequence - "slowly, gravely, silently" - performs a rhythmic deceleration that mimics the Ghost\'s approach, each word longer than the last (two syllables, two syllables, three syllables), the tempo broadening as the figure draws near. The absence of a main verb in the descriptive passage - we are told what the Ghost conceals but not what it does - creates a grammatical vacuum that corresponds to the Ghost\'s ontological ambiguity. The verb "shrouded" is Dickens\'s most loaded choice: it belongs to the lexical field of burial, but "shroud" also means "to hide," and the double meaning collapses the distinction between death and concealment, suggesting that what the garment hides is not a body but its absence - the Ghost may be not a figure but a void, a shape made of darkness.

The "one outstretched hand" operates as a metonymic concentration of the Ghost\'s power. In a figure that is otherwise entirely concealed, this single visible element carries the full weight of the Ghost\'s agency. The hand points but does not speak, directs but does not explain, and this combination of purposeful gesture and absolute silence creates what might be called authoritarian pedagogy - instruction that permits no questioning. Scrooge, who has throughout the novella resisted, argued, and pleaded with the spirits, is here reduced to obedience: he "bent down upon his knee" not because the Ghost commands it but because its presence makes resistance inconceivable.

The Ghost\'s method - showing Scrooge scenes from a possible future without identifying him as the dead man until the final moment - is a narrative technique borrowed from parable. By withholding the revelation that the unmourned corpse is Scrooge himself, Dickens forces Scrooge (and the reader) to develop empathy for the anonymous dead before discovering that the object of pity is the self. This is morally transformative because it breaks the circuit of self-interest: Scrooge learns to feel compassion for a stranger before learning that the stranger is him, and this sequence cannot be reversed - the compassion, once felt, cannot be unfelt merely because its object turns out to be the self.

Dickens positions the Ghost of Christmas Yet to Come as the culmination of a carefully structured sequence in which each ghost dismantles a specific psychological defence. The Ghost of Christmas Past penetrates Scrooge\'s temporal defence - his refusal to acknowledge the past that made him who he is. The Ghost of Christmas Present penetrates his spatial defence - his refusal to acknowledge the suffering that exists beyond his counting house. The Ghost of Christmas Yet to Come penetrates his ultimate defence - the assumption that the future is not his concern. Together, the three ghosts reconstruct Scrooge\'s moral world by forcing him to inhabit temporal and spatial dimensions he has spent decades excluding.

The novella\'s fairy-tale structure is essential to understanding the Ghost\'s function. In realist fiction, death is final; in the fairy tale, it is conditional. The Ghost shows Scrooge a future that can be avoided, and this conditionality is what makes fear productive rather than paralysing. Dickens understood that despair is the enemy of reform - if the future is fixed, there is no motivation to change - and the Ghost\'s silence on the question of whether these shadows "are" or merely "may be" preserves the possibility of agency that makes Scrooge\'s transformation both credible and morally instructive. The reader, like Scrooge, is left with a choice: to dismiss the vision and continue as before, or to accept its implications and live differently. The Ghost\'s outstretched hand points at Scrooge, but it also points at us.`,
    },
    markScheme: [
      'Analyses how Dickens uses the Ghost to create fear through language and imagery',
      'Explores specific words and phrases in the extract and their effects',
      "Discusses the Ghost's role in Scrooge's transformation across the novella",
      "Considers relevant context (Victorian attitudes to death, Dickens's social purpose)",
      'Uses well-integrated quotations to support the argument',
      "Develops a sustained response about the Ghost's significance",
    ],
    examinerTips: [
      'WJEC expects you to cover both the extract and the wider text.',
      'Consider the Ghost in relation to the other two ghosts - the sequence matters.',
      "The Ghost's silence is as important as what the other ghosts say.",
      "Connect the Ghost's function to Dickens's purpose: why does he use fear to promote social change?",
    ],
  },
  {
    id: 'wjec-lit-prose-19c-2',
    board: 'WJEC',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol - Poverty and Wealth',
    extract: `Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.`,
    extractSource: "Written in the style of Charles Dickens's A Christmas Carol, Stave 1",
    question:
      'How does Dickens present ideas about poverty and wealth in A Christmas Carol? Write about this extract and the novella as a whole. (20 marks)',
    marks: 20,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens describes Scrooge as extremely greedy and unkind. The list of adjectives "squeezing, wrenching, grasping, scraping, clutching, covetous" all describe someone who holds onto their money tightly and takes from others. Each word is about grabbing and keeping, which shows Scrooge represents the worst qualities of wealth.

The simile "hard and sharp as flint" compares Scrooge to a stone, suggesting he has no warmth or softness. Flint cannot produce "generous fire," meaning Scrooge cannot be generous. The word "solitary as an oyster" is another simile that shows he has closed himself off from everyone, like an oyster in its shell.

Throughout the novella, Dickens contrasts Scrooge\'s wealth with the poverty of others. The Cratchit family is poor but happy and loving. They share a small goose for Christmas dinner and enjoy it together. Tiny Tim is ill because they cannot afford proper medical care, but he is cheerful and kind. This contrast shows that wealth does not bring happiness but poverty does not destroy it either.

Dickens also shows the suffering caused by poverty. The Ghost of Christmas Present reveals two children called Ignorance and Want, who represent the problems in society. The charity collectors describe people who would "rather die" than go to the workhouse. These details show how terrible poverty was in Victorian England.

Dickens wrote this novella in 1843 to make rich people feel responsible for the poor. He believed that wealthy people like Scrooge could change society if they chose to be generous. The transformation at the end - where Scrooge raises Bob Cratchit\'s wages, sends a turkey to the Cratchits, and donates to charity - shows Dickens\'s vision of what individual generosity could achieve.`,
      'Grade 6-7': `Dickens opens the novella by constructing Scrooge as wealth itself personified - not merely a wealthy man but the embodiment of acquisition as a way of being. The heptad of predatory participles - "squeezing, wrenching, grasping, scraping, clutching, covetous" - escalates through increasingly violent physical actions, each one describing a different mode of taking. The grammatical choice is significant: these are present participles, suggesting ongoing, habitual action rather than completed events. Scrooge does not merely have money; he is perpetually in the process of acquiring it, and this perpetuity is itself a form of moral stasis.

The simile "hard and sharp as flint, from which no steel had ever struck out generous fire" operates on several levels. Literally, flint produces fire when struck by steel - it requires external force to generate warmth. The past perfect "had ever" establishes that no such force has been successfully applied, but the conditional structure implies that it could be - that even Scrooge possesses the latent capacity for generosity, awaiting the right catalyst. The three ghosts become that catalyst, and Dickens\'s structural genius is to make the same material (Scrooge\'s character) produce both the hardness of Stave 1 and the warmth of Stave 5.

Dickens presents poverty and wealth not as neutral economic conditions but as moral states with spiritual consequences. The Cratchit family demonstrates that material poverty need not produce spiritual poverty - their celebration of Christmas is richer in love, gratitude, and connection than anything in Scrooge\'s empty house. Bob Cratchit toasts his employer despite his exploitation, an act of grace that shames Scrooge more effectively than any accusation. Conversely, Scrooge\'s wealth has produced a poverty of human connection - he is "solitary as an oyster," enclosed in a shell of accumulated capital that insulates him from the human world.

The allegorical children, Ignorance and Want, universalise the argument from individual to systemic. Priestley\'s critique is not simply that Scrooge is mean but that he represents a class whose philosophy - articulated in his endorsement of prisons, workhouses, and the treadmill - produces and perpetuates poverty. The Ghost\'s warning to "beware this boy" (Ignorance) implies that the greater danger is not poverty itself but the refusal to acknowledge it - the wilful blindness of a wealthy class that has constructed ideological justifications for the suffering it produces.

Contextually, Dickens was responding to the political economy of Malthus and the utilitarian philosophy that underpinned the 1834 Poor Law. Scrooge\'s language - "decrease the surplus population" - directly echoes Malthusian arguments about overpopulation, and Dickens returns this language to Scrooge later in the novella when the Ghost of Christmas Present quotes it back to him. By making Scrooge speak the language of political economy, Dickens demonstrates that economic theory, stripped of its abstractions, produces specific, identifiable human suffering - and that the transformation of society begins with the transformation of the heart.`,
      'Grade 8-9': `Dickens opens A Christmas Carol with a prose style that performs the very critique it articulates. The description of Scrooge is not analytical but incantatory - the seven-fold catalogue of participles ("squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner") builds through rhythmic accumulation rather than logical argument, overwhelming the reader with the sheer excess of Scrooge\'s avarice. The stylistic excess is deliberate: Dickens fights accumulation with accumulation, deploying a surplus of language to combat a surplus of capital. The shift from physical participles (squeezing through clutching) to the abstract adjective "covetous" marks a progression from action to disposition, from what Scrooge does to what he is, and the appositional "old sinner" introduces the theological register that will govern the novella\'s moral logic.

The simile "solitary as an oyster" condenses the novella\'s central argument about wealth into a single image. The oyster produces a pearl - the most valuable object in the Elizabethan imagination - but only by sealing itself off from the world, converting irritation into treasure through a process of organic isolation. Scrooge\'s wealth operates by the same logic: it is produced by closing off every channel of human connection, and the pearl he has generated - his fortune - exists within a shell that makes it inaccessible to anyone, including himself. The transformation Dickens narrates is the cracking of this shell, and the subsequent redistribution of its contents - money, warmth, connection - to the community from which they were extracted.

Dickens structures the novella so that poverty and wealth are not simply opposed but causally connected. The Cratchits are not poor by accident; they are poor because Scrooge pays Bob Cratchit fifteen shillings a week - a wage he could easily increase, given that he "had his name painted up on the warehouse." The causal chain is explicit: Scrooge\'s wealth is extracted from the labour of people like Cratchit, and the Cratchits\' poverty is the direct product of Scrooge\'s business practices. Dickens does not present this as a structural analysis of capitalism (he was not Marx), but the novella\'s emotional logic arrives at a similar conclusion: wealth that is accumulated through the exploitation of labour is not legitimate prosperity but institutional theft.

The novella\'s treatment of poverty is, however, more complex than simple sympathy. The Cratchit family is idealised - their poverty is picturesque, their suffering ennobling, and their gratitude unfailing - and this idealisation has been criticised as condescending, a middle-class fantasy of the "deserving poor." But Dickens\'s purpose is rhetorical rather than documentary: the Cratchits must be sympathetic because Dickens is writing for an audience that needs to be moved, not informed. The allegorical children - Ignorance and Want - operate at a different register entirely: they are not lovable but monstrous, "yellow, meagre, ragged, scowling, wolfish," and their appearance beneath the Ghost\'s robes suggests that the pleasant surface of prosperous society conceals a feral underclass that civilisation has created and refuses to acknowledge.

The transformation in Stave 5 raises the question of whether individual generosity is adequate to systemic poverty. Scrooge raises Cratchit\'s wages, saves Tiny Tim, and donates to charity - but these are acts of personal benevolence within a system that produced the conditions necessitating them. Dickens was aware of this limitation - his journalism and novels consistently argue for institutional reform as well as individual charity - but the novella\'s form (the fairy tale, the redemption narrative) demands a resolution that is personal rather than political. The tension between the systemic diagnosis and the individual solution is the novella\'s productive contradiction: it makes the reader feel that change is possible (through Scrooge\'s example) while implicitly acknowledging that feeling is not enough (through the scale of suffering the Ghosts reveal). The novella\'s enduring power lies precisely in this unresolved tension - it moves us to generosity while leaving the structural causes of poverty untouched, a combination that explains both its enormous cultural influence and its ultimate political limitations.`,
    },
    markScheme: [
      'Analyses how Dickens presents poverty and wealth through language, character, and structure',
      'Explores specific words and phrases in the extract and their effects',
      'Discusses poverty and wealth across the whole novella',
      "Considers relevant context (Victorian poverty, the Poor Law, Dickens's social purpose)",
      'Uses well-integrated quotations to support the argument',
      'Develops a sustained, conceptualised response to the theme',
    ],
    examinerTips: [
      'WJEC expects close reading of the extract - spend time on individual words and images.',
      'Connect poverty to specific characters and scenes across the novella.',
      "Consider Dickens's purpose: why did he write this novella? What response did he want?",
      "The best responses recognise complexity - Dickens's treatment of poverty is not simple.",
    ],
  },
  {
    id: 'wjec-lit-poetry-1',
    board: 'WJEC',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Poetry Comparison - Loss and Grief',
    extract: `Poem A - "Funeral Blues" by W. H. Auden (1940 revised version; four quatrains, AABB rhyme, iambic-pentameter dominant) - extract:\n"Stop all the clocks, cut off the telephone,\nPrevent the dog from barking with a juicy bone,\nSilence the pianos and with muffled drum\nBring out the coffin, let the mourners come.\n\nHe was my North, my South, my East, my West,\nMy working week and my Sunday rest,\nMy noon, my midnight, my talk, my song;\nI thought that love would last for ever: I was wrong."\n\nNote: This is the 1940 revised four-stanza version (the version used in the Cambridge IGCSE 0475 Songs of Ourselves Vol 1 Part 4 anthology and the version recited in Four Weddings and a Funeral, 1994), not the longer five-stanza 1936 Twelve Songs IX original written for The Ascent of F6.\n\nRights: Auden d.1973 - UK copyright expires 2044. © Faber & Faber. Treat as restricted; quote short extracts only.\n\nCompare with one other poem about loss.`,
    extractSource:
      'Poetry extract - W. H. Auden, "Funeral Blues" (1940 revised version), © Faber & Faber. UK in copyright until 2044; short quotation under fair-dealing for criticism/study.',
    question:
      'Compare how the poets present grief and loss in "Funeral Blues" and one other poem you have studied. (25 marks)',
    marks: 25,
    timing: '40 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Funeral Blues" by W.H. Auden and "Do Not Go Gentle into That Good Night" by Dylan Thomas present strong feelings of grief and loss, but they express them in different ways.

In "Funeral Blues," Auden presents grief as wanting to stop the entire world. The opening commands - "Stop all the clocks, cut off the telephone" - are imperatives that show the speaker wants everything to halt because the person they love has died. The metaphor "He was my North, my South, my East, my West" uses compass directions to show that the dead person was everything - they gave the speaker\'s life direction and meaning. The final line "I thought that love would last for ever: I was wrong" is simple and devastating. The colon creates a pause before the blunt admission "I was wrong," which makes the reader feel the speaker\'s shock.

In "Do Not Go Gentle into That Good Night," Thomas presents grief differently - not as mourning someone who has already died but as desperately trying to prevent death. The repeated refrain "Rage, rage against the dying of the light" is addressed to his dying father, urging him to fight death. The verb "rage" suggests anger and energy, which contrasts with Auden\'s stillness and silence.

Both poems present grief as overwhelming, but they respond to it in opposite ways. Auden wants the world to stop and be quiet; Thomas wants his father to fight and rage. Auden accepts the loss but is devastated by it; Thomas refuses to accept it at all. Both poets use structured forms - Auden\'s regular rhyming couplets and Thomas\'s villanelle - to contain emotions that might otherwise be uncontrollable.`,
      'Grade 6-7': `Auden and Thomas present grief as an experience that disrupts the fundamental order of the world, but their responses to this disruption are diametrically opposed: Auden demands that the world acknowledge its collapse; Thomas demands that the dying refuse to complete it.

Auden\'s opening stanza uses a sequence of imperatives - "Stop," "cut off," "Prevent," "Silence" - that attempt to impose the speaker\'s grief onto external reality. The commands escalate from the mechanical (clocks, telephones) to the organic (the dog) to the artistic (pianos), suggesting that grief demands the cessation of all activity, whether functional, natural, or creative. The "muffled drum" introduces a military funeral register that elevates private loss to public ceremony, and the final command - "let the mourners come" - shifts from prohibition to permission, acknowledging that grief requires witnesses.

The second stanza transforms the dead person into the speaker\'s entire coordinate system. The compass metaphor - "my North, my South, my East, my West" - constructs the beloved as the reference point by which the speaker navigated the world, and the subsequent temporal pairs ("My working week and my Sunday rest, / My noon, my midnight") extend this to time itself. The anaphoric "My" asserts possession while simultaneously cataloguing loss: each claim of ownership is also an inventory of what has been taken. The final line - "I thought that love would last for ever: I was wrong" - achieves its devastating effect through simplicity. After the elaborate figurative language of the preceding lines, the monosyllabic admission "I was wrong" strips away rhetoric, and the colon that precedes it creates a silence in which the reader feels the full weight of disillusionment.

Thomas\'s "Do Not Go Gentle into That Good Night" adopts the opposite strategy: where Auden accepts loss and demands that the world respond to it, Thomas refuses loss and demands that the dying resist it. The villanelle form - with its obsessive repetition of two refrains - formally enacts the poem\'s emotional compulsion: the repeated "Do not go gentle" and "Rage, rage against the dying of the light" return like the speaker\'s refusal to accept mortality, each recurrence carrying additional emotional weight. The euphemism "that good night" makes death sound gentle and welcoming, and the poem\'s fury is directed not just at death but at the temptation of acceptance.

The four central stanzas catalogue different types of men - "wise men," "good men," "wild men," "grave men" - who all resist death, regardless of how they have lived. Thomas argues that the impulse to resist is universal, not a function of character or achievement. The paradox "Grave men, near death, who see with blinding sight" transforms the physical limitations of dying into a form of enhanced perception - even at the point of death, clarity is possible, and this clarity itself is an argument against submission.

Both poets ultimately use formal constraint to manage overwhelming emotion. Auden\'s regular rhyming couplets and quatrain structure contain his grief within a predictable acoustic pattern, while Thomas\'s villanelle - one of the most restrictive forms in English poetry - channels desperation into an intricate arrangement of repeated lines and interlocking rhymes. The formal discipline of both poems argues implicitly that grief, however devastating, can be shaped into art, and that this shaping is itself a form of resistance to the chaos that loss threatens to impose.`,
      'Grade 8-9': `Auden and Thomas articulate competing philosophies of grief that illuminate a fundamental question: is the appropriate response to loss acceptance or resistance? Both poets write from positions of extremity - Auden from the aftermath of death, Thomas from its approach - and the temporal difference between their positions generates formally and philosophically distinct treatments of the same emotional territory.

Auden\'s "Funeral Blues" opens with a series of imperatives that attempt to restructure reality around the fact of loss. "Stop all the clocks, cut off the telephone" - these are not hyperbolic expressions of sorrow but literal demands for the cessation of the mechanisms by which ordinary time is measured and transmitted. The clock and the telephone are instruments of social coordination, and their silencing is a demand that the social world acknowledge its own inadequacy in the face of individual loss. The escalation to "Prevent the dog from barking" extends the command to the natural world, and "Silence the pianos" extends it to the aesthetic - grief, in Auden\'s formulation, is so total that it invalidates function, nature, and art simultaneously.

The compass metaphor in the second stanza - "He was my North, my South, my East, my West" - performs the rhetorical operation that is the poem\'s most formally ambitious move. By identifying the beloved with all four cardinal directions, the speaker establishes that the dead person was not merely important but constitutive - not a feature of the speaker\'s world but its coordinate system, the framework within which all other positions were defined. The death of such a person does not merely create a gap in the world but collapses the world\'s structure, making navigation impossible. The subsequent temporal coordinates ("working week and Sunday rest, / noon, midnight") extend the metaphor into time, suggesting that the beloved organised not just space but duration - and the loss of this temporal structure is what gives the poem\'s opening its logic: if the person who gave time its meaning is dead, then clocks must stop because time itself has become meaningless.

Thomas\'s villanelle occupies the opposite emotional position: where Auden accepts death and demands that the world accommodate it, Thomas refuses death and demands that the dying defy it. The villanelle form is the poem\'s most profound formal choice: its two refrains - "Do not go gentle into that good night" and "Rage, rage against the dying of the light" - return with the mechanical inevitability of a ticking clock, and this formal inexorability mirrors the biological inevitability that the poem\'s content resists. The tension between the form\'s deterministic structure and the speaker\'s insistence on agency is the poem\'s tragic engine: the words demand freedom while the form demonstrates constraint, and the reader experiences both simultaneously.

The four central stanzas construct a taxonomy of resistance that is philosophically crucial. Thomas argues that rage against death is not contingent on how one has lived - wise men, good men, wild men, and grave men all resist, regardless of their relationship to wisdom, goodness, freedom, or solemnity. This universalisation of resistance is itself an argument: if death is resisted by all types of men, then resistance is not a personal choice but a natural imperative, and to "go gentle" is to act against nature, not in accordance with it. The paradox "Grave men, near death, who see with blinding sight" crystallises this argument: proximity to death produces not resignation but perception, a clarity so intense it is experienced as blindness, and this paradoxical seeing-through-loss is the poem\'s closest approach to a philosophy of grief.

The poems\' respective endings reveal their deepest divergence. Auden\'s "I thought that love would last for ever: I was wrong" arrives at a truth that is simultaneously devastating and clarifying - the recognition of error is painful, but it is also knowledge, a form of understanding that, however bitter, replaces illusion with reality. Thomas\'s final stanza - "And you, my father, there on the sad height, / Curse, bless, me now with your fierce tears, I pray" - refuses closure entirely: the oxymoron "Curse, bless" and the compound plea demand from the dying father a response that contains contradiction, an emotional state that is simultaneously hostile and loving, rejecting and embracing. Where Auden\'s grief resolves into acceptance, Thomas\'s remains permanently unresolved, suspended between rage and supplication, and the poem\'s final word - "pray" - introduces a religious register that the poem\'s secular fury has consistently resisted, as though grief, at its most extreme, collapses even the distinction between belief and unbelief.`,
    },
    markScheme: [
      'Compares how both poets present grief and loss through language, form, and imagery',
      'Analyses specific poetic techniques and their effects in both poems',
      'Maintains a comparative structure throughout',
      'Considers relevant contextual factors for both poets',
      'Uses well-integrated quotations from both poems',
      'Develops a sustained, original argument about both texts',
    ],
    examinerTips: [
      'WJEC values sustained comparison - write about both poems together, not one then the other.',
      'Consider form and structure: why does each poet choose their particular form?',
      'Compare how the poems end as well as how they begin.',
      'Personal engagement with the poems is valued - what do they make you feel and think?',
    ],
  },
  {
    id: 'wjec-lit-poetry-2',
    board: 'WJEC',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry - Nature and Change',
    extract: `Late October\n\nThe trees are giving everything away -\ntheir savings, all of them, in reds and golds,\nscattered like coins across the pavement\nfor anyone to pick up, or not.\n\nThe wind is generous with what it takes.\nIt carries a leaf past my window\nthe way a river carries a boat\nthat has slipped its mooring.\n\nSoon the branches will stand with nothing,\nhonest at last, their shape revealed\nlike the truth you see in someone\'s face\nwhen they have stopped pretending to be fine.`,
    extractSource: 'Original poem written for this exercise',
    question:
      'How does the poet use language and imagery to present ideas about nature and change in "Late October"? (20 marks)',
    marks: 20,
    timing: '25 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet uses autumn as a way to talk about change and honesty. In the first stanza, the trees are "giving everything away," which personifies them as generous people. Their leaves are compared to "savings" in "reds and golds," which uses the colours of autumn leaves and also makes them sound like treasure. The simile "scattered like coins across the pavement" continues this idea of money, suggesting the trees are spending all their wealth.

The phrase "for anyone to pick up, or not" at the end of the stanza is casual, as if the trees do not care what happens to their leaves. This adds to the idea that autumn is about letting go without worrying.

In the second stanza, the wind is described as "generous with what it takes," which is a clever paradox because you would not normally call taking something generous. The leaf carried past the window is compared to "a boat that has slipped its mooring," which means a boat that has come loose from where it was tied. This suggests the leaf is drifting freely, which connects to the idea of things being released and changing.

The final stanza is the most powerful. The branches will "stand with nothing, honest at last," which suggests that losing leaves is like becoming honest - taking away the covering reveals the truth underneath. The simile comparing bare branches to "the truth you see in someone\'s face when they have stopped pretending to be fine" makes the poem suddenly feel personal and emotional. It suggests that sometimes losing things reveals who we really are, and that this honesty, even though it looks bare and exposed, is something valuable.`,
      'Grade 6-7': `The poet constructs autumn as an extended metaphor for emotional honesty, using the progressive shedding of leaves to explore the paradox that loss can reveal rather than diminish.

The opening line - "The trees are giving everything away" - establishes the central conceit through personification that operates in two registers simultaneously. Literally, the trees are dropping leaves; figuratively, they are performing an act of radical generosity, divesting themselves of accumulated wealth. The economic metaphor - "their savings, all of them, in reds and golds" - is sustained with precision: "savings" implies long accumulation (the entire growing season), and "reds and golds" are simultaneously autumnal colours and the colours of currency. The simile "scattered like coins across the pavement" extends the analogy to its physical conclusion, but the qualifying phrase "for anyone to pick up, or not" introduces an indifference that complicates the metaphor - this is generosity without concern for the recipient, giving without attachment to outcome. The casual comma before "or not" creates a shrug in the poem\'s tone, a nonchalance that will later be revealed as a form of wisdom.

The second stanza introduces the paradox that structures the poem\'s argument: "The wind is generous with what it takes." Generosity and taking are normally antithetical, but the oxymoron suggests that in the context of natural change, removal is itself a gift - the wind disperses what the trees have released, and this dispersal is a form of redistribution. The simile of the leaf as "a boat that has slipped its mooring" transforms loss into freedom: the boat has not been stolen but released, and the passive construction "has slipped" suggests that the separation is natural rather than violent, an organic loosening rather than a forced break.

The final stanza achieves the poem\'s emotional climax through a revelation that the preceding imagery has been preparing. The bare branches "stand with nothing, honest at last" - the adverbial "at last" implies that the previous state (leafy, full, apparently thriving) was a form of concealment, and that the branches\' true nature is revealed only through loss. The closing simile - "like the truth you see in someone\'s face / when they have stopped pretending to be fine" - ruptures the nature poem\'s pastoral register with a suddenly intimate, human observation. The phrase "pretending to be fine" is deliberately colloquial, almost painfully contemporary, and its insertion into a poem about autumn creates a tonal dissonance that is the poem\'s most effective device: the reader is confronted, unexpectedly, with the recognition that the poem has been about human vulnerability all along.

The three-stanza structure traces a movement from extravagance (giving away) through transition (drifting) to exposure (standing with nothing), and this progression mirrors the process of emotional unburdening. The poem argues, through its sustained natural metaphor, that the state we most fear - vulnerability, exposure, the loss of what we have accumulated - is also the state in which we are most truthful, and that this truthfulness, like the bare branch, possesses a beauty that concealment, however lush, cannot match.`,
      'Grade 8-9': `The poem constructs autumn as an epistemology of loss - a sustained argument that the process of shedding reveals more than the process of accumulation, and that what we call "nothing" (bare branches, empty hands, exposed feeling) may be the precondition for a form of truth that fullness obscures.

The opening stanza establishes an extended economic metaphor whose implications unfold with the precision of a logical proof. "The trees are giving everything away" personifies shedding as voluntary divestment, transforming a biological process into a moral act. The word "everything" is crucial: it insists on completeness, distinguishing this from selective generosity. The subsequent metaphor - "their savings, all of them, in reds and golds" - performs a complex operation on the reader\'s conceptual framework. "Savings" implies deferred gratification, wealth accumulated over time through restraint, and the revelation that the trees are surrendering these savings reframes autumn not as decay but as the decision to spend what has been stored. The colour-words "reds and golds" function doubly, signifying both natural beauty and monetary value, and this duality is the stanza\'s argumentative engine: beauty and value are being released simultaneously, and the question of who receives them ("for anyone to pick up, or not") is answered with a syntactic shrug that implies indifference to reception. The comma before "or not" creates a pause that is philosophically loaded - it suggests that the act of giving is sufficient in itself, independent of gratitude or utility.

The second stanza introduces the poem\'s central paradox through a single, compressed line: "The wind is generous with what it takes." This oxymoron requires the reader to reconcile generosity with appropriation, and the resolution lies in the poem\'s implicit argument that in a system of natural change, taking and giving are not opposed but continuous - the wind takes from the tree and gives to the air, the ground, the world beyond the tree\'s reach. The simile of the leaf as "a boat / that has slipped its mooring" extends this logic: "slipped" is reflexive, suggesting that the leaf released itself rather than being torn, and "mooring" implies that the attachment was always temporary, a provisional tethering rather than a permanent bond. The image of a boat drifting on a river introduces movement and direction into what might otherwise seem random, suggesting that loss has its own trajectory, its own destination.

The final stanza consummates the poem\'s argument with an image that retrospectively reorganises everything that has preceded it. "Soon the branches will stand with nothing, / honest at last" - the temporal adverb "soon" introduces anticipation rather than observation, and the adverbial "at last" is the poem\'s most revealing word. It implies that the branches\' summer foliage was not merely beautiful but concealing - a form of display that, like all display, was partially dishonest. The bare branch is "honest" because it shows its actual structure without ornament: every fork, every bend, every point of growth and breakage is visible. The closing simile - "like the truth you see in someone\'s face / when they have stopped pretending to be fine" - detonates the poem\'s pastoral surface to expose the human substrate beneath. The phrase "pretending to be fine" is the most emotionally loaded in the poem precisely because of its casualness - it belongs to everyday speech, to the vocabulary of social interaction, and its eruption into a poem about autumn creates a recognition that is physically startling. The reader realises that the poem has been about human concealment and human revelation all along, and that the trees, the wind, the drifting leaf were vehicles for a truth that could only be approached obliquely: that our fullest, most decorated states may be our least honest, and that the stripping away of what we thought we needed may be the beginning, not the end, of what we are.`,
    },
    markScheme: [
      'Analyses how the poet uses language and imagery to present nature and change',
      'Explores the effects of specific metaphors, similes, and word choices',
      "Comments on structure and the poem's development across its three stanzas",
      "Develops a personal interpretation of the poem's deeper meanings",
      'Uses well-selected, embedded quotations',
      'Writes with analytical precision and genuine engagement',
    ],
    examinerTips: [
      'For unseen poetry, spend time absorbing the poem before writing.',
      'WJEC values personal engagement - show what the poem means to you as well as analysing technique.',
      'Track how the poem builds its argument from stanza to stanza.',
      "The shift to human emotion in the final stanza is the poem's key moment - make sure you analyse it fully.",
    ],
  },
  {
    id: 'wjec-p2-comp-1',
    board: 'WJEC',
    paper: 2,
    questionType: 'Comparative Reading',
    difficulty: 'Higher',
    extract: `Source A - Urban commute:\n\nThe train car smelled of synthetic fabrics and human fatigue. By 7:45 a.m., every seat was occupied, and standing room was at a premium. A businessman checked his phone for the third time in two minutes. A young mother gripped a shopping bag with one hand and her daughter\'s wrist with the other. An elderly man clutched a newspaper as though it were a life raft. Everyone faced forward, eyes fixed on the door at the far end. No one spoke. The fluorescent lights hummed their constant, nerve-testing song.\n\nSource B - Rural journey:\n\nThe bus wound through the Cotswolds, and time seemed to slow. The passengers - perhaps fifteen in total - seemed to know one another. An old woman offered the woman next to her a boiled sweet from a tin. Two farmers discussed the autumn planting in voices suggesting a conversation ongoing for decades. The driver knew everyone by name. When we stopped at a village of perhaps a hundred people, he called out: "Mrs Hartwell, your stop!" As if the entire vehicle were a social apparatus designed to move people not efficiently, but together.`,
    extractSource: 'Original compositions',
    question:
      'Compare the presentations of transport and community in these two sources. What values does each prioritise? (30 marks)',
    marks: 30,
    timing: '35 minutes',
    modelAnswers: {
      'Grade 4-5': `Source A shows a modern city where people travel together but feel alone. "Every seat was occupied, and standing room was at a premium" shows the train is crowded, but "No one spoke" shows people avoid each other. The businessman checks his phone repeatedly, the mother grips her daughter, and the elderly man clutches his newspaper "as though it were a life raft," suggesting people are protecting themselves from each other. The fluorescent lights create an unpleasant "nerve-testing" atmosphere. Source A values efficiency and speed - getting people somewhere fast.\n\nSource B is different. The bus "wound through the Cotswolds, and time seemed to slow," which makes the journey seem peaceful. Passengers "seemed to know one another," and people are caring: the woman offers sweets, farmers talk together, the driver knows everyone by name. The final phrase says the bus is designed "to move people not efficiently, but together." Source B values community and relationships over speed. Both sources are about transport, but Source A values efficiency while Source B values connection.`,
      'Grade 6-7': `The two sources present contrasting visions of transport as either isolating or communal. Source A constructs the urban train as an experience of enforced proximity without genuine connection. The opening sensory detail - "the train car smelled of synthetic fabrics and human fatigue" - establishes both physical and affective environment; "fatigue" suggests exhaustion and emotional disconnection rather than mere tiredness. The writer catalogues passengers by functional role ("businessman," "mother," "elderly man") rather than by name or relationship, fragmenting the group into isolated subjects. Key structural contrast: crowding (every seat occupied) versus isolation (no one speaks, eyes fixed forward). The metaphor of the newspaper as "a life raft" suggests passengers use objects as barriers against connection. The simile about fluorescent lights creating a "nerve-testing song" conveys oppressive sensory environment through synesthesia.\n\nSource B inverts nearly every element. The bus "wound through the Cotswolds, and time seemed to slow" - verbs "wound" and "slow" create organic, leisurely movement rather than urgent transit. Small number of passengers ("perhaps fifteen in total") establishes pre-existing community. Writer records acts of care: old woman offering sweets, farmers in ongoing conversation, driver calling passengers by name. These details construct transport as vehicle for relationships. The final statement - "as if the entire vehicle were a social apparatus designed to move people not efficiently, but together" - explicitly contrasts efficiency with togetherness. The comparison reveals fundamentally different philosophies: urban transport processes individuals; rural transport maintains community bonds.`,
      'Grade 8-9': `These sources articulate competing theories of transport embedded within larger arguments about modernity, community, and social life organisation. Source A constructs the urban train as a space of enforced proximity that paradoxically isolates, whilst Source B constructs the rural bus as a space of deliberate connection. The comparison reveals that transport infrastructure is never merely functional; it is always already ideological, encoding values about efficiency, individuality, community, and temporal experience.\n\nSource A\'s opening - "The train car smelled of synthetic fabrics and human fatigue" - performs olfactory characterisation registering the space as fundamentally unnatural, as constructed environment animated by human exhaustion. The sensory detail grounds the reader in bodily experience whilst simultaneously registering alienation. The writer\'s cataloguing of passengers by functional role ("businessman," "mother," "elderly man") employs a sociological grammar - passengers identified not by individuality but by role in apparatus of reproduction and consumption. The structural irony is central: physical crowding ("every seat was occupied") exists alongside affective isolation ("No one spoke"). This paradox of crowded solitude is the source\'s central argument: modern transport produces what we might call "presence without connection." The metaphor of the newspaper as "a life raft" transforms information delivery into survival mechanism, suggesting public transit is inherently threatening. The final image - fluorescent lights creating a "nerve-testing song" - registers sensory oppression through synesthesia, transforming light into sound, involuntary into something that "tests" the nervous system.\n\nSource B constructs an almost Edenic alternative. The bus "wound through the Cotswolds, and time seemed to slow" - lexicon of organic movement ("wound") and temporal deceleration ("slow") establishes this as anti-modern space. Passengers "seemed to know one another," foregrounding not efficiency but care: the old woman offering sweets "from a tin," the farmers in conversation "suggested to be ongoing" (temporally extended, part of established pattern), the driver calling passengers by name. Each detail constructs the bus as "social infrastructure" - a mechanism that does not abstract individuals into a system but rather embeds them in networks of recognition and relationship. The closing statement - "as if the entire vehicle were a social apparatus designed to move people not efficiently, but together" - repositions what transport does: from moving bodies efficiently to moving people as members of a community. The phrase "as if" is crucial: it suggests the bus achieves this not through explicit design but through conditions of rural life (smaller population, longer cohabitation histories, driver\'s embodied knowledge of passengers).\n\nThe comparison reveals that transport infrastructure is never neutral. Source A\'s train encodes modernity\'s fundamental alienation - the proliferation of connections that paradoxically produce isolation. Source B\'s bus encodes anti-modern values - the belief that movement should be relational rather than transactional. What is at stake is not merely how we travel, but what kind of social life travel enables or prevents. The contrast between the train\'s "nerve-testing" lights and the bus driver\'s personal recognition of each passenger encapsulates the central tension: modern efficiency produces stress and isolation; older forms of social organisation produce connection and care. Yet the writer\'s use of "as if" suggests this alternative is increasingly unavailable - that the rural bus\'s model represents a disappearing rather than emerging form of modernity.`,
    },
    markScheme: [
      'Identifies key differences in presentation of transport',
      'Analyses values implicit in each source',
      'Selects specific textual evidence supporting comparison',
      'Explains how language and imagery create contrasting impressions',
      'Develops sustained comparative argument',
      'Uses precise terminology and sophisticated analysis',
    ],
    examinerTips: [
      'Address the comparison directly - avoid analysing one source then the other.',
      'Look for contrasts in vocabulary, tone, imagery, structure.',
      'Consider what values each writer prioritises, even if unstated.',
      'Use comparative phrases: "whereas," "in contrast," "similarly."',
    ],
  },
]
