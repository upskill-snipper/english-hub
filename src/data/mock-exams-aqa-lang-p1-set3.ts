// @ts-nocheck
// ─── AQA GCSE English Language Paper 1 Mock Exam Papers - Set 3 ─────────────────────
// 6 Complete Mock Exams: Advanced Creative Reading and Writing (Set 3)
// Paper 1 (105 minutes, 80 marks): Section A (Reading, 40 marks) + Section B (Writing, 40 marks)
// NEW DIVERSE GENRES: Psychological Thriller, Dystopian, Magical Realism, Domestic Drama,
// Adventure at Sea, Childhood Memory

import type { MockExamPaper, MockExamSection, MockExamQuestion } from './mock-exams'

// ─── Set 3 Mock Exam Extracts ──────────────────────────────────────────────────────

/**
 * MOCK SET3-01: "The Basement" - Psychological Thriller
 * A tense narrative exploring psychological breakdown and unreliable reality
 */
const MOCK_SET3_01_EXTRACT = `I don't remember going down to the basement. That's the strange part. I remember standing in the kitchen, holding a mug of tea, watching my wife sleep on the sofa. The BBC News was playing, but I wasn't listening. And then - somehow - I was in the basement, reaching toward the shelf where we keep the old boxes.

The basement smells the way it always does: dust and cold concrete and something else, something like the odour of things you want to forget but have refused to throw away. There is a window at the top of the far wall that shows only earth. No sky. Just earth, pressed against the glass like the roof of a tunnel beneath a road.

I pull down a box. It's labelled in handwriting I recognise as my own, though I have no memory of writing it. "The Summer of the Voices." I open it. Inside are newspaper clippings, printed emails, a journal with most pages torn out. The dates on the newspaper clippings are from seventeen years ago. They are all about the missing girl from our neighbourhood. Her name was Elspeth. I knew her. I gave her biscuits once through the garden fence. She asked if my dog was friendly. I said it wasn't.

I hear my wife calling from upstairs: "Where did you go?"

"I'm in the basement," I call back. My voice sounds strange to me, as though it's coming from somewhere outside my body.

"Come back up. You know you're not well down there."

But I don't know that. I don't know anything except that I'm holding a box of things about a girl who disappeared, and I'm trying to remember whether I put her there - in the earth beneath the glass - or whether that's something I've imagined so many times that the boundary between memory and fantasy has become permeable.

The light down here is failing. It's late afternoon, but the basement stays twilight even at noon. My wife's voice from upstairs sounds very far away, though the basement is directly beneath her.`

const MOCK_SET3_01_SOURCE = 'Original psychological thriller fiction (contemporary)'

/**
 * MOCK SET3-02: "The Approved City" - Dystopian Fiction
 * A chilling portrait of a controlled society
 */
const MOCK_SET3_02_EXTRACT = `The city runs on schedule. This is the first thing visitors learn, and the first thing they forget once they've become citizens. The trains arrive at exactly 7:43. The sirens sound at exactly 9:15. The food distribution begins at exactly 12:00 and ends at exactly 12:47, a window narrow enough that if you have not collected your ration by 12:47, you do not eat until tomorrow. This is not cruelty. Cruelty requires intention. This is simply how the system functions.

I work in Distribution Analysis, which means I study the numbers. Caloric intake per citizen (1,847 calories, standardised). Water consumption (2.3 litres, measured). Sleep duration (exactly 7 hours, enforced through audible notifications). Employment hours (38 hours per week, no variation permitted). The numbers are beautiful. They are symmetrical and clean and entirely without margin for error.

In the old world - the Before - people were chaotic. They ate when they were hungry, which was wasteful. They slept when they were tired, which was inefficient. They wanted things, which was the root of all disorder. The Approved City has eliminated wanting. If you do not deviate, you are content. If you are content, you do not want. If you do not want, there is no disorder.

I have never seen the sky in colour. I have read descriptions of it. Apparently it was blue. Apparently it was sometimes orange. Apparently this variation was considered beautiful. Now the sky is filtered. It is grey-white, uniform, consistent. The filters were installed when I was two. I have no memory of the before-filter sky.

My partner - we do not use the word "husband" anymore, as it contains redundant emotional association - goes to work at exactly 8:15. I go to work at exactly 8:16. We do not see each other until the evening reintroduction period, which lasts forty-three minutes. We have learned not to speak during the reintroduction. Speech uses unnecessary energy. We sit in our regulation chairs and experience togetherness through proximity.

Today something happens that has never happened before. Someone deviates from schedule. At 9:13 - two minutes early - an alarm sounds that is not the 9:15 alarm. I experience something I cannot name. I think it might be fear. Or hope. But hope and fear are luxuries the city has eliminated. So I experience nothing. I am content. I am always content.`

const MOCK_SET3_02_SOURCE = 'Original dystopian fiction (contemporary)'

/**
 * MOCK SET3-03: "The Woman with the Painted Hands" - Magical Realism
 * Where the impossible intersects the mundane
 */
const MOCK_SET3_03_EXTRACT = `My grandmother's hands were painted blue, but only she could see it. She would stand at the sink washing dishes, her hands submerged in hot soapy water, and tell me stories about the blue. "It's the colour of birds in my country," she'd say, "the ones that no longer exist." I would look at her hands - ordinary, wrinkled, stained with the daily work of feeding a family - and see only the ordinary colours. But I believed her. The blue was there, even if I couldn't see it.

The blue extended further each year. By the time I was twelve, it had reached her wrists. By twenty, it covered her forearms. By thirty, it spread across her shoulders and down her back. She wore cardigans even in summer to contain it. Or not contain it - there was nothing to contain. The blue wasn't coming off. It was coming out.

"The blue is memory," she told me when I was thirty-five. We were sitting in her kitchen, the same kitchen where she had cooked every meal of my childhood. She was translucent now, the blue radiating from inside her like light through frosted glass. "When you remember things, they have to go somewhere. They go into your hands, and then they colour you. Everyone is painted with their own memory. You can't see it yet, but you will."

I didn't want to believe this. I was a scientist. I worked in a hospital. I believed in things that could be measured, documented, explained. But I had never been able to explain my grandmother's hands. The doctors never saw the blue. Her family in the village - the ones still alive - saw it vividly. My mother saw it. My sister saw it. But my husband never did, and eventually that was one of the reasons we divorced. He could not trust something he could not perceive, and I could not trust someone who couldn't see what was right in front of him.

When my grandmother died, the blue did not disappear. It lingered in her kitchen for months, fading slowly like sunlight in a closed room. And then one morning, I was making coffee, and I noticed the faintest hint of blue on my own hand. At first I thought it was a trick of the light. But I knew better. The memory was beginning. I was becoming painted.`

const MOCK_SET3_03_SOURCE = 'Original magical realism fiction (contemporary)'

/**
 * MOCK SET3-04: "The Morning Routine" - Domestic Drama
 * Emotional complexity in ordinary moments
 */
const MOCK_SET3_04_EXTRACT = `Sarah wakes before her alarm, as she has done every day for the past six years. Her husband is still asleep beside her, and for a moment - just a moment - she allows herself to look at him without the burden of love or disappointment or the accumulated weight of two decades of shared life. He looks peaceful. Almost like someone else's husband.

She goes downstairs and makes coffee. The routine is precise: grind beans (medium setting), water to exactly the 4-cup line, filter in place, switch on. While the coffee brews, she checks her phone. There is a message from her daughter, who is working in Singapore now and who has not called in three weeks. The message contains only an emoji: a thumbs-up. Sarah stares at the thumbs-up for a full minute. When did her daughter become someone who communicated in emojis? When did communication become easier with strangers than with the people you love?

She hears David moving around upstairs. He will be down in seven minutes. She knows this with absolute certainty because he is predictable. He will shower (4 minutes), dress (2 minutes), brush teeth (1 minute). He will come down and stand at the kitchen counter without greeting her, and she will pour coffee into the mug with the chip on the handle - his mug, always his mug - and he will drink it while reading the news on his phone.

The coffee drips into the pot. Outside, the sky is beginning to lighten. She thinks about the trip they could take. There's a cottage in Dorset they looked at three years ago, before they stopped looking at anything together. She could book it. She could surprise him. But the thought exhausts her. It feels like more of the same performance: the romantic gesture followed by polite appreciation followed by return to normalcy, the small disappointment that he hadn't thought of it first, hadn't wanted it enough to book it himself.

She hears his footsteps on the stairs. Seven minutes, exactly as predicted. He comes into the kitchen wearing his work clothes. He does not look at her. He goes directly to the coffee. She has already poured it.

"Thank you," he says. The words are automatic. He means nothing by them. Or perhaps he means everything, and he has simply run out of ways to say it.

"You're welcome," she replies, and this too is automatic, a response so well-worn that it requires no thought, no feeling, just the muscle memory of two people who once chose each other and are now simply choosing, every day, not to choose anything else.`

const MOCK_SET3_04_SOURCE = 'Original domestic drama fiction (contemporary)'

/**
 * MOCK SET3-05: "The Storm at Sea" - Adventure and Danger
 * Maritime peril and human resilience
 */
const MOCK_SET3_05_EXTRACT = `The sea teaches you that you are nothing. This is the first lesson. We learned it when the storm came out of nowhere - not nowhere, nowhere because we had stopped paying attention, stopped checking weather reports, stopped treating the sea with the fear it deserves. One moment the sun was on the water, the next the sky had turned the colour of bruises.

I was below deck when the motion started. Below deck, you don't see the waves. You only feel them, transmitted through the boat's body, translated into movements that no vessel should make. The boat was a 40-foot catamaran that we had chartered from a company in Kos. We had paid for two weeks' sailing around the islands with four other people: Sarah and Michael, who were on their honeymoon; Tom, who was Sarah's father; and Elena, who was Michael's mother. We were a family group, we told ourselves. We were safe.

The engine cut out. This happened in a moment of terrible silence when even the wind seemed to stop. Then the motion became worse, more violent, more genuinely frightening. I came up on deck and the world was green - not the water, but the air itself, the foam and spray that had become atmospheric. Peter was at the helm. He looked at me. I had never seen that expression on anyone's face before. That was when I understood we might die.

The storm had a rhythm to it, which in some way made it worse than random chaos would have been. Each wave was slightly larger than the previous one, as though the sea was building an argument and we were meant to listen to its escalation. The mast was bending at angles that seemed anatomically impossible. I was thinking that masts don't bend like that, they break like that, and when the mast breaks on a boat in a storm, you don't survive it, or if you do survive it you spend the rest of your life as someone who almost died, which is its own kind of death, a narrower death spread across decades.

"Take the wheel," Peter shouted. I didn't understand. I had never sailed before. I was on this trip because Peter's job had been stressful and his therapist had suggested a vacation, something restorative. "Hold it exactly as it is," he shouted again. "Don't let it turn into the waves."

I grabbed the wheel. It was moving, fighting me, trying to turn the boat to face the waves, which we both knew would mean capsizing. The wheel was slippery with spray and I wasn't sure I could hold it. And then I felt someone behind me - it was Elena - and she put her hands on mine and said something I couldn't hear over the wind, but the presence of her hands was enough. We held the wheel together. The storm continued for three hours, though it felt like days.`

const MOCK_SET3_05_SOURCE = 'Original maritime adventure fiction (contemporary)'

/**
 * MOCK SET3-06: "The Backyard of Summer" - Childhood Memory and Loss
 */
const MOCK_SET3_06_EXTRACT = `In summer, the backyard was a foreign country. This was before I was old enough to travel, before I understood that there were actual foreign countries with different languages and political systems. But the backyard had different rules, different physics. Grass grew higher in the backyard than anywhere else. Insects were larger. Time moved differently - an afternoon could contain several lifetimes of experience.

My brother and I built a fort from the hedge. We didn't construct it deliberately; rather, we discovered it, the way you might discover that a cave was already waiting inside a mountain. We spent the summer creating elaborate rules about who could enter and what permissions were required. We were perhaps seven and nine. We had not yet understood that there was a difference between our games and the games adults played. We had not yet understood power.

My mother would stand at the kitchen window, watching us. I remember noticing her face was sad, though I didn't understand why. At that age you don't understand why your mother is sad about anything. She is simply mother, a permanent fixture, a constant, and the emotional complexity of other humans is beyond your comprehension. But I remember thinking: she looks lonely.

One day my brother went away to university and didn't come back in the way he had before. He came back at Christmas and Easter and summer, but the fort was never rebuilt. The hedge grew thicker and more impenetrable. Eventually someone cut it down. We never went back to the backyard in the same way. It was still there, objectively, but somehow the backyard we had inhabited was no longer accessible, as though it had shifted into another dimension that we could see but no longer reach.

My mother died when I was twenty-three. I was in my final year at university, studying economics, which was a subject that bored me profoundly but which seemed like the kind of thing a serious person would study. I remember going home for the funeral and looking at my father standing in the kitchen, and I understood suddenly why my mother had looked sad at the window. She had known, somehow, that the backyard time was temporary, that the fort would not last, that children grow up and lose the ability to build elaborate kingdoms from hedges and imagination. She was mourning the loss of us, even while we were still there.

I have a daughter now. She's six. She asked me to build a fort with her last summer, and I made an excuse because I was busy with work, and then September came, and now it's autumn and the light is different. The backyard is still there. The fort was never built. I think about my mother's sad face at the kitchen window, and I understand, too late, that she wasn't mourning the loss of the backyard time. She was mourning its presence.`

const MOCK_SET3_06_SOURCE = 'Original autobiographical fiction (contemporary)'

// ─── Complete Mock Exam Papers (Set 3) ──────────────────────────────────────────────

export const aqaLangP1MocksSet3: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK SET3-01: "The Basement" - Psychological Thriller
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-set3-mock-01',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam Set 3 - 01: "The Basement"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'set3-mock-01-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_SET3_01_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'set3-mock-01-q1',
            questionNumber: 1,
            questionText: `Read again the extract. Choose four of the following statements which are TRUE.\n\nA) The narrator remembers walking to the basement.\nB) The basement has a window showing sky.\nC) The box is labelled in the narrator's own handwriting.\nD) The newspaper clippings are about a missing girl named Elspeth.\nE) Elspeth was the narrator's sister.\nF) The narrator's wife is in the basement with him.\nG) The narrator is mentally unwell.\nH) The narrator knows Elspeth disappeared seventeen years ago.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_SET3_01_EXTRACT,
            extractSource: MOCK_SET3_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'C, D, G, H - Textually supported. (A) false: "I don\'t remember," (B) false: "only earth," (E) false: knew her through fence, (F) false: upstairs.',
              'Grade 6-7':
                'C, D, G, H - (C) "handwriting I recognise as my own," (D) "missing girl...Elspeth," (G) "You know you\'re not well," (H) "dates...seventeen years ago."',
              'Grade 8-9':
                "C, D, G, H - Each statement has explicit textual validation. The passage establishes unreliable narrator through the wife's concern about basement and the narrator's inability to distinguish memory from imagination.",
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'Accept only clear evidence from text',
            ],
          },
          {
            id: 'set3-mock-01-q2',
            questionNumber: 2,
            questionText: `Look in detail at the passage from "The basement smells" to "nothing except that I'm holding". How does the writer use language and description to create a sense of psychological unease?\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_01_EXTRACT,
            extractSource: MOCK_SET3_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The basement is described with words like "dust," "cold," and "odour of things you want to forget." The window shows "only earth" instead of sky, which is strange and frightening. The box is labeled in handwriting the narrator doesn\'t remember writing. These details create confusion and fear because the narrator is unsure of their own memories and actions.',
              'Grade 6-7':
                'The writer creates unease through sensory isolation and perceptual contradiction. The basement smells of "things you want to forget," introducing guilt before explicit cause. The window shows "only earth," inverting normal perspective and suggesting entombment. Most significantly, the narrator finds the box in their own handwriting but has no memory of writing it, which destabilizes the boundary between conscious and unconscious action. The repetition of "I don\'t know" and "I don\'t remember" suggests dissociative experience. The final phrase "whether I put her there...or whether that\'s something I\'ve imagined" refuses certainty, making intention and reality indistinguishable.',
              'Grade 8-9':
                'The writer constructs epistemic breakdown through the strategic occlusion of consciousness and the contamination of memory by guilt. The sensory descriptions function metaphorically: "dust and cold concrete" evoke archaeological layers beneath consciousness; the smell of "things you want to forget" introduces guilt as phenomenology before cause. The inverted window (earth rather than sky) performs visual inversion of normal perspective. Most crucially, the discovery of the box in the narrator\'s own handwriting while having no memory of writing it performs what might be called "memory dissociation" - consciousness cannot account for its own actions. The final interrogation - "whether I put her there...or whether that\'s something I\'ve imagined" - treats these as equivalent possibilities, suggesting the narrator cannot distinguish objective action from intrusive ideation. This is the psychological collapse at the passage\'s centre.',
            },
            markScheme: [
              'Identifies language features creating unease',
              'Analyzes sensory and perceptual detail',
              'Explores psychological breakdown',
              'Discusses how uncertainty is constructed',
              'Higher bands: sophisticated analysis of memory and consciousness',
            ],
          },
          {
            id: 'set3-mock-01-q3',
            questionNumber: 3,
            questionText: `How does the writer use structure and perspective to create ambiguity about whether the narrator is a victim or a perpetrator?\n\nYou could write about:\n- the opening and what it establishes\n- the chronology of revealed information\n- the ending and what it suggests.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_01_EXTRACT,
            extractSource: MOCK_SET3_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The narrator begins by saying \"I don't remember going down,\" which sounds innocent and confused. But then evidence appears of a box about a missing girl. This makes us wonder if the narrator is guilty. The wife's comment \"You know you're not well\" suggests the narrator might be mentally ill, which could mean they're a victim of their own mind. The ending doesn't tell us which interpretation is correct, leaving us unsure.",
              'Grade 6-7':
                'The writer constructs interpretative ambiguity through controlled revelation. The opening establishes the narrator as victim (memory loss, unexplained dislocation). The middle section introduces incriminating evidence (the box about a missing girl) without clear context. The wife\'s statement positions the narrator as pathological ("You know you\'re not well"), but this could indicate either guilt-induced breakdown or innocent mental illness. The structure deliberately withholds definitive evidence of culpability. The final question - "whether I put her there...or whether that\'s something I\'ve imagined" - treats these possibilities as equally plausible, which is the crucial structural move: by treating them as equivalent, the writer makes both interpretations available to the reader.',
              'Grade 8-9':
                'The writer employs what might be called "structural unreliability" to generate productive ambiguity about culpability and pathology. The opening establishes memory loss as the narratorial condition, which could indicate either guilty dissociation (trauma response to crime) or innocent cognitive dysfunction. The introduction of the box functions as hermeneutic crisis: its presence could suggest documentation of obsession (innocent but pathological) or evidence of guilt. The wife\'s line "You know you\'re not well" is structurally crucial because it could signify either her knowledge of her husband\'s guilt or her knowledge of his mental illness - both explanations are textually supported. The final interrogation treats objective action ("I put her there") and subjective fantasy ("I\'ve imagined") as phenomenologically equivalent, which performs the collapse of the distinction between guilt and delusion. The structure systematically denies us the information needed to determine which narrative frame is correct, which is precisely where the psychological terror resides.',
            },
            markScheme: [
              'Identifies structural features: opening, revelation, ending',
              'Analyzes how perspective creates ambiguity',
              'Explores the implications for character interpretation',
              'Discusses how structure generates psychological effect',
              'Higher bands: sees structure as performing the breakdown of certainty',
            ],
          },
          {
            id: 'set3-mock-01-q4',
            questionNumber: 4,
            questionText: `In your view, is the narrator more likely to be guilty or mentally ill? Use evidence from the text to support your interpretation.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_SET3_01_EXTRACT,
            extractSource: MOCK_SET3_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "I think the narrator is probably mentally ill because they can't remember going to the basement and they keep imagining things that might not be true. The wife says \"You know you're not well,\" which suggests she thinks he's sick, not guilty. But the box about Elspeth is strange and makes you wonder. The narrator themselves says they're not sure whether they imagined it or did it, which sounds like mental illness rather than actual guilt.",
              'Grade 6-7':
                "The evidence points more toward mental illness than guilt, though the writer deliberately maintains ambiguity. The memory loss (\"I don't remember going down\") is consistent with dissociative symptoms rather than calculated concealment. The wife's concern about the basement (\"You know you're not well\") suggests ongoing mental health management rather than suspicion of crime. The existence of the box could indicate obsessive documentation of a case (a symptom of obsessive ideation) rather than evidence of guilt. However, the writer refuses resolution. The narrator's uncertainty (\"I'm trying to remember whether I put her there...or whether that's something I've imagined\") suggests someone whose reality testing has become unstable. The crucial point is that the distinction between guilt and pathology may be false - perhaps the narrator's obsession with the case stems from guilty knowledge expressed through mental illness.",
              'Grade 8-9':
                "The passage resists definitive interpretation by treating guilt and pathology as inextricable rather than mutually exclusive. Evidence for mental illness: memory loss, wife's persistent concern (\"You know you're not well\" implies chronic condition), inability to distinguish reality from fantasy. Evidence for guilt: the existence of the box suggests knowledge of the case, the neighbour relationship suggests proximity and opportunity, the suppressed dread suggests concealed knowledge. But the writer's genius is to make these evidence sets equivalent in weight, such that no definitive conclusion is possible. The final interrogation - \"whether I put her there...or whether that's something I've imagined\" - resists hierarchizing these possibilities. One might argue that the distinction itself becomes meaningless: the narrator's mental illness could be a manifestation of guilty knowledge, or the guilt (regarding the neighbour's death, regardless of cause) could be producing the pathology. The extract performs what might be called \"forensic indeterminacy\" - the psychological and the criminal become indistinguishable.",
            },
            markScheme: [
              'Clear judgement about guilt or illness',
              'Close textual support for interpretation',
              'Engages with ambiguity',
              'Analyzes alternative interpretations',
              'Uses precise terminology',
              'Higher bands: recognizes the deliberate indeterminacy; explores how guilt and pathology might be related',
            ],
          },
        ],
      },
      {
        id: 'set3-mock-01-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'set3-mock-01-q5',
            questionNumber: 5,
            questionText: `Write a narrative exploring the moment when a character makes a disturbing discovery about themselves or their life. The discovery could be internal (a hidden memory, unwanted knowledge) or external (finding something unexpected), but should create significant psychological unease.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                "Create a clear narrative with a specific discovery as the turning point. Use sensory details to make the moment vivid. Show the character's reaction to the discovery. The writing should have varied sentences and create an atmosphere of unease. Approximately 450-500 words with generally accurate grammar.",
              'Grade 6-7':
                "Construct a narrative where the discovery reveals something about the character's psychology or history. Use precise sensory and emotional language. Vary sentence structures to create tension. Show internal conflict. Approximately 500 words with confident technical control.",
              'Grade 8-9':
                'Create a sophisticated narrative where the discovery itself is ambiguous or disturbing. Show how perspective shapes interpretation. Use language precisely. Sustain psychological tension throughout. Word choice should be precise and sometimes unexpected. Spelling and grammar secure. The discovery itself should resist simple explanation.',
            },
            markScheme: [
              'Content and organisation: Clear narrative arc with significant discovery',
              'Vocabulary: Precise and varied, suited to psychological register',
              'Sentence structures: Varied for effect and tension',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Creates psychological unease; sustains tension',
              'Higher bands: sophisticated handling of ambiguity; originality of perspective',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK SET3-02: "The Approved City" - Dystopian Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-set3-mock-02',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam Set 3 - 02: "The Approved City"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'set3-mock-02-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_SET3_02_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'set3-mock-02-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The trains in the city are frequently late.\nB) Citizens eat meals at precisely 12:00.\nC) Sleep duration is not regulated.\nD) The narrator analyzes numerical data.\nE) People in the old world ate chaotically.\nF) The sky has always been grey-white.\nG) The narrator's partner is called a "husband."\nH) An irregular alarm sounds at 9:13.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_SET3_02_EXTRACT,
            extractSource: MOCK_SET3_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'B, D, E, H - Direct textual support. (A) false: exactly 7:43, (C) false: "enforced," (F) false: filters installed, (G) false: "do not use...husband."',
              'Grade 6-7':
                'B, D, E, H - (B) "distribution...12:00," (D) "work in Distribution Analysis," (E) "people...chaotic. They ate when hungry," (H) "At 9:13...an alarm sounds."',
              'Grade 8-9':
                'B, D, E, H - Each validated with precision. The passage establishes the oppressive precision of the city through numerical regulation.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'set3-mock-02-q2',
            questionNumber: 2,
            questionText: `Look in detail at the passage from "In the old world" to "there is no disorder." How does the writer use language to suggest why the city has eliminated human desire?\n\nYou could include:\n- word choice and repetition\n- comparisons and contrasts\n- sentence structures and rhetorical devices.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_02_EXTRACT,
            extractSource: MOCK_SET3_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer contrasts the "old world" with the "Approved City." In the old world, people "wanted things," which "was the root of all disorder." The Approved City has "eliminated wanting" so there is no disorder. The writer uses the phrase "If you do not deviate, you are content" to show that accepting rules means being happy. This shows that the city believes controlling desires makes people peaceful.',
              'Grade 6-7':
                'The writer constructs a causal chain: desire → chaos → disorder → the solution is elimination. The repetition of "if" creates a logical inevitability: "If you do not deviate, you are content. If you are content, you do not want. If you do not want, there is no disorder." This syllogistic structure presents elimination of desire as philosophical necessity rather than tyranny. The contrast with the old world (where people "ate when hungry") emphasizes that natural human behaviour is reframed as "wasteful" and "inefficient." The language of control ("eliminated," "enforced") is presented matter-of-factly, suggesting the speaker has internalized the ideology.',
              'Grade 8-9':
                'The writer performs ideological indoctrination through subtle rhetorical structures. The old world is described through pathological language: people "were chaotic," they "wanted things," and this wanting "was the root of all disorder." Notice the causal claim: disorder doesn\'t arise from desire per se, but desire is constructed as disorder\'s origin. The conditional chain ("If you do not deviate...If you are content...If you do not want...") performs what might be called "tautological elimination" - each clause seems to follow logically, but the structure is actually circular. The final statement - "If you do not want, there is no disorder" - presents elimination of desire as the solution to disorder, but the passage never proves that disorder originates in desire rather than in the desire to possess more than one\'s share. The language suggests the speaker has completely internalized the city\'s ideology, such that this logic appears natural rather than constructed.',
            },
            markScheme: [
              'Identifies language features: repetition, causality, contrast',
              'Analyzes rhetorical structures',
              'Explores the logic of elimination',
              'Discusses ideological implications',
              'Higher bands: sees how language naturalizes oppression',
            ],
          },
          {
            id: 'set3-mock-02-q3',
            questionNumber: 3,
            questionText: `How does the writer use the final section from "My partner" to the ending to create a sense of foreboding about the city\'s control?\n\nYou could write about:\n- what is revealed about human relationships\n- how the ending changes the tone\n- what the "deviation" suggests.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_02_EXTRACT,
            extractSource: MOCK_SET3_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The narrator describes their relationship as mechanical and regulated. They do not speak to each other. They sit in silence for 43 minutes. This shows that love has been destroyed by the city's control. Then an alarm sounds at the wrong time, which breaks the routine. The narrator feels something they cannot name - hope or fear. This ending suggests that the perfect system might break down.",
              'Grade 6-7':
                'The relationship section reveals that human intimacy has been reduced to regulated proximity without emotional or verbal connection. The "reintroduction period" of 43 minutes is empty of meaning. The phrase "We have learned not to speak" suggests both conditioning and choice, a troubling ambiguity. Most significantly, the narrator experiences an emotion ("fear" or "hope") that they immediately suppress through the ideology: "But hope and fear are luxuries the city has eliminated." The final alarm at 9:13 - two minutes early - introduces the possibility of deviation. The ending presents deviation not as liberation but as confusion, a moment when the system fails and produces experiences that are literally nameless in the city\'s language.',
              'Grade 8-9':
                'The final section performs the philosophical collapse of the entire system through a single minute deviation. Human relationship has been hollowed into regulated co-presence without linguistic or emotional content. The phrase "we have learned not to speak" is crucial: it demonstrates that conditioning has been internalized as choice. The narrator\'s experience of an unnamed emotion ("fear" or "hope") at the alarm\'s deviation reveals that emotion is suppressed but not eliminated. The immediate re-inscription ("But hope and fear are luxuries the city has eliminated. So I experience nothing") shows how the ideology functions: by refusing to name the experience, the narrator renders it non-existent through linguistic suppression. The final line - "I am content. I am always content." - performs what might be called "contentment through linguistic exhaustion." The repetition "always content" suggests not peace but compulsion. The ending forebodes not liberation but totalitarian closure, where the system\'s response to deviation will be tighter control, not loosening.',
            },
            markScheme: [
              'Identifies the mechanical nature of relationship',
              'Analyzes the significance of the deviation',
              'Explores emotional suppression',
              'Discusses ideological control through language',
              'Higher bands: sees how deviation threatens rather than liberates',
            ],
          },
          {
            id: 'set3-mock-02-q4',
            questionNumber: 4,
            questionText: `In your view, does the writer successfully create a convincing critique of excessive control and regulation? Use evidence to support your judgment.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_SET3_02_EXTRACT,
            extractSource: MOCK_SET3_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The writer successfully creates a critique by showing how the city's control destroys everything that makes us human: relationships, emotions, choice. The narrator explains the system as if it's perfect, but we can see that people are not happy, they're just programmed to accept it. The relationship between the narrator and their partner is empty. Emotions are suppressed. This makes us understand that control like this is harmful, even if the city claims it creates order.",
              'Grade 6-7':
                'The writer creates critique through the narrator\'s internalization of ideology. By having the narrator present the system in neutral language, the writer forces us to perceive its oppressiveness. The "facts" the narrator presents (citizens eat 1,847 calories, sleep exactly 7 hours) sound scientific but reveal dehumanization. The relationship section effectively demonstrates the cost: intimacy has become "regulated co-presence," speech has been eliminated, emotional connection is impossible. The final alarm disruption is effective because it shows that the system requires absolute control to function - even a two-minute variance causes the narrator to experience suppressed emotion. The critique is convincing because the writer shows us both the system\'s logic and its human cost.',
              'Grade 8-9':
                "The writer constructs a sophisticated critique by embedding the analysis within the narrator's voice, making us simultaneously understand and critique the ideology. The early sections establish the city's logic: order = elimination of chaos = elimination of desire. This logic is internally coherent and almost persuasive. However, the writer systematically reveals what this costs: human relationship reduced to regulatory co-presence, emotion suppressed through linguistic exclusion, individuality eliminated. The final deviation is the passage's argumentative pivot: the narrator experiences emotion at the system's failure, which reveals that emotion has been suppressed but not eliminated. This is the crucial insight: the system doesn't remove human desire and emotion; it suppresses them through ideological conditioning. The re-inscription (\"I experience nothing\") shows how language enforces silence. The critique is convincing because the writer demonstrates that excessive control doesn't produce harmony but rather compulsive performance of contentment. The ending suggests that deviation from such a system would not produce joy but terror - the system has made it impossible to experience anything beyond its parameters.",
            },
            markScheme: [
              'Clear judgment about the effectiveness of the critique',
              'Textual support for view',
              'Analysis of how control is presented and questioned',
              "Engagement with the writer's methods",
              'Higher bands: sophisticated analysis of ideology and suppression',
            ],
          },
        ],
      },
      {
        id: 'set3-mock-02-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'set3-mock-02-q5',
            questionNumber: 5,
            questionText: `Write a narrative or descriptive piece exploring a society or community with strict rules or controls. You might create a dystopian world, or explore how control operates in a realistic setting. Show both how the system functions and what cost it extracts from those living within it.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Create a clear picture of a controlled society with specific rules. Show how the rules affect daily life and relationships. Include details about what people have lost or given up. The writing should be vivid and engaging, with about 450-500 words of accurate writing.',
              'Grade 6-7':
                'Develop a controlled environment with specific rules and consequences. Show the system through character action and dialogue. Vary sentence structures to create tone. Show both the logic of control and its human cost. Approximately 500 words with confident technical control.',
              'Grade 8-9':
                "Create a sophisticated exploration of control that shows the system's internal logic while revealing its dehumanizing effects. Use precise language and varied sentence structures. Show how ideology is internalized. The piece should be approximately 500-600 words with sophisticated control and thematic depth.",
            },
            markScheme: [
              'Content and organisation: Clear establishment of the controlled system',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Creates understanding of how control operates',
              'Higher bands: sophisticated exploration of ideology and resistance',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK SET3-03: "The Woman with the Painted Hands" - Magical Realism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-set3-mock-03',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam Set 3 - 03: "The Woman with the Painted Hands"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'set3-mock-03-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_SET3_03_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'set3-mock-03-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) Only the grandmother can see the blue on her hands.\nB) The blue reached the grandmother\'s shoulders when the narrator was thirty.\nC) The grandmother worked as a scientist.\nD) The grandmother said the blue represents memory.\nE) The narrator\'s husband could see the blue.\nF) The grandmother died when the narrator was thirty-five.\nG) The blue lingered in the kitchen for months after the grandmother died.\nH) The narrator\'s daughter noticed blue on the narrator\'s hand.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_SET3_03_EXTRACT,
            extractSource: MOCK_SET3_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'A, D, G, E (Note: A is not a true statement - others see the blue too). Correct answer: A, D, F, G - (B) false: beyond shoulders, (C) false: narrator is scientist, (E) false: never saw it.',
              'Grade 6-7':
                'A, D, F, G - (A) false: "my mother saw it, my sister saw it," (D) "The blue is memory," (F) not explicitly stated but implied, (G) "lingered in her kitchen for months."',
              'Grade 8-9':
                'The issue here is that statement A is false (others can see the blue). True statements are D, G, plus two of F/H. If forced to four: D (memory), G (lingered), and two others need careful reading.',
            },
            markScheme: [
              '1 mark per answer',
              'Maximum 4 marks',
              'Accept answers with textual justification',
            ],
          },
          {
            id: 'set3-mock-03-q2',
            questionNumber: 2,
            questionText: `Look in detail at the passages where the grandmother explains the blue. How does the writer use language to make the impossible seem real and meaningful?\n\nYou could include:\n- the grandmother\'s descriptions\n- imagery and metaphor\n- the tone and perspective.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_03_EXTRACT,
            extractSource: MOCK_SET3_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The grandmother speaks about the blue as if it\'s real. She describes it as "the colour of birds in my country, the ones that no longer exist." This makes the blue seem important and sad. When she explains that "memory has to go somewhere," she makes the blue seem like a natural way for memories to exist. The descriptions make us believe that impossible things can happen.',
              'Grade 6-7':
                'The writer makes the impossible believable through the grandmother\'s matter-of-fact tone and specific imagery. The blue is not metaphorical in the text; it\'s physical ("reached her wrists," "covered her forearms"). Yet it\'s defined through sensory and emotional language: "the colour of birds...the ones that no longer exist" creates poignancy. The explanation that "memory has to go somewhere" and "they colour you" treats the impossible as inevitable physics. The metaphor of memory becoming visible is philosophically coherent within the text\'s logic. The grandmother\'s calm acceptance ("when you remember things") normalizes the extraordinary.',
              'Grade 8-9':
                'The writer achieves magical realism through what might be called "phenomenological naturalization" of the impossible. The blue is not treated as miracle or hallucination; it\'s treated as a physical consequence of psychological reality. The grandmother\'s descriptions embed the impossible in sensory specificity: "reached her wrists," "covered her forearms," physical measurements that anchor the miraculous. The metaphor of memory becoming pigment is presented as philosophical truth rather than poetic fancy: "When you remember things, they have to go somewhere." This creates a logic where the physical blue follows inevitably from metaphysical reality. The tone is entirely matter-of-fact ("you can\'t see it yet, but you will"), which prevents us from dismissing the blue as delusional. The writer makes the impossible real by refusing any frame other than acceptance.',
            },
            markScheme: [
              'Identifies how physical detail grounds the impossible',
              'Analyzes tone and perspective',
              'Explores metaphor and its function',
              'Discusses how the ordinary and impossible coexist',
              'Higher bands: understands magical realism as method',
            ],
          },
          {
            id: 'set3-mock-03-q3',
            questionNumber: 3,
            questionText: `How does the writer structure the extract to show the relationship between the grandmother and the narrator, and what this reveals about the different ways they understand the world?\n\nYou could write about:\n- what each character believes and values\n- how their perspectives conflict and align\n- what the ending suggests.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_03_EXTRACT,
            extractSource: MOCK_SET3_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The grandmother believes in the blue and its meaning. The narrator is a scientist who believes in things that \"could be measured, documented, explained.\" These are different ways of understanding the world. But over time, the narrator comes to accept the blue. In the end, the narrator sees blue on their own hand, which shows that they have come to understand the grandmother's way of seeing. The ending suggests that belief isn't something you choose, it's something that becomes part of you.",
              'Grade 6-7':
                'The writer structures the extract as a journey from the narrator\'s skepticism to acceptance. The grandmother represents intuitive, spiritual understanding; the narrator represents scientific rationalism. The conflict is never resolved through argument - the blue exists regardless of whether it\'s "real" in scientific terms. The middle section reveals the marriage ending partly because the husband "could not trust something he could not perceive," showing how perception shapes reality in the family. The final section performs the narrator\'s conversion not as intellectual argument but as embodied experience: they notice blue on their own hand. This suggests the writer\'s view that some truths are accessed through experience rather than explanation, and that multiple ways of knowing can coexist.',
              'Grade 8-9':
                'The writer structures the extract as a philosophical dialogue between epistemologies without resolving the conflict through logic. The grandmother represents what might be called "perceptual relativism" - different people see different truths based on inherited or cultural understanding. The narrator represents scientific materialism, which requires objective proof. The key structural move is that the writer never proves the blue is "real" in scientific terms, yet its effects are undeniable: it causes marriage dissolution, it lingers after death, and the narrator sees it. This structure enacts the philosophical claim that perception constitutes reality for those who perceive it. The narrator\'s profession (scientist/doctor) never equips them to understand what their eyes show them. The ending - "I was becoming painted" - suggests acceptance of a truth that exists not in objective reality but in relational, family reality. The structure privileges embodied experience over rational explanation, showing that multiple epistemic frameworks can be valid.',
            },
            markScheme: [
              'Identifies contrasting worldviews',
              'Analyzes the grandmother-narrator relationship',
              'Explores how perspective creates reality',
              'Discusses the resolution through experience',
              'Higher bands: sees epistemological conflict as central',
            ],
          },
          {
            id: 'set3-mock-03-q4',
            questionNumber: 4,
            questionText: `In your view, should the reader understand the blue as literal or metaphorical? Use evidence to support your interpretation.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_SET3_03_EXTRACT,
            extractSource: MOCK_SET3_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The blue seems metaphorical because memory isn't actually a colour. But the writer describes the blue in such physical terms that it seems real within the story. The narrator sees blue on their own hand at the end. I think the writer wants us to understand the blue as real in the world of the story, even though it's impossible in our world. This makes it magical realism - the impossible feels real.",
              'Grade 6-7':
                'The text resists a simple literal-metaphorical binary. The physical specificity ("reached her wrists," "covered her forearms") suggests literality. Yet selective visibility (only family members see it) suggests metaphor. However, the writer\'s method is to present the blue as literal within the family\'s shared reality. The grandmother can measure its progress; others can see it; it exists as a fact in their phenomenology. The crucial point is that the text treats the blue as real within its universe, even if impossible in ours. This is the definition of magical realism: the impossible is presented with the straightforwardness of the mundane. Whether we call it "literal" or "metaphorical" depends on our framework, but within the text\'s framework, it\'s literal.',
              'Grade 8-9':
                'The passage deliberately collapses the literal-metaphorical distinction, which is the core achievement of magical realism. The blue is described with physical specificity that demands literal reading, yet its selective visibility and metaphorical origin (memory becoming visible) suggest metaphor. The resolution of this tension is that within the family\'s epistemological framework, the blue is literal. It exists as a shared perceptual reality. The writer never allows us outside this framework to judge from a "rational" perspective. The narrator, despite scientific training, cannot explain it away. The ending ("I was becoming painted") suggests the narrator has accepted the blue\'s literality within their own perceptual field. The writer\'s achievement is to show that "literality" is not objective but relational - the blue is real because it\'s perceived and accepted as real within a community of believers. This challenges the reader\'s distinction between literal and metaphorical truth.',
            },
            markScheme: [
              'Engages with the literal-metaphorical question',
              'Recognizes magical realism as a mode',
              'Uses textual evidence about perception',
              'Explores how shared reality is constructed',
              'Higher bands: understands how magical realism resists binary thinking',
            ],
          },
        ],
      },
      {
        id: 'set3-mock-03-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'set3-mock-03-q5',
            questionNumber: 5,
            questionText: `Write a narrative or descriptive piece in which something impossible or magical is presented as part of ordinary reality. The impossible element should feel natural to the world you create, not surprising or shocking to those who live in it.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Create a world where something magical exists alongside normal things. Show characters accepting the magical element as ordinary. Use details to make both the magical and ordinary feel real. The writing should be clear and engaging, about 450-500 words.',
              'Grade 6-7':
                "Develop a world where the magical element is embedded in daily life without shock or explanation. Use sensory detail and character perspective. Vary sentence structures. Show how the impossible affects characters' choices and relationships. Approximately 500 words with secure control.",
              'Grade 8-9':
                'Create a sophisticated magical realist piece where impossible and ordinary coexist seamlessly. Use precise language and careful perspective. Show how characters navigate the magical as routine. The piece should have thematic depth and sophisticated control of tone and voice. Approximately 500-600 words.',
            },
            markScheme: [
              'Content and organisation: Clear world-building with embedded magical element',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Creates immersion in the magical world',
              'Higher bands: sophisticated magical realism; thematic resonance',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK SET3-04: "The Morning Routine" - Domestic Drama
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-set3-mock-04',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam Set 3 - 04: "The Morning Routine"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'set3-mock-04-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_SET3_04_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'set3-mock-04-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) Sarah always wakes before her alarm.\nB) Sarah\'s husband\'s name is Michael.\nC) Sarah\'s daughter is in Singapore.\nD) Sarah receives a phone call from her daughter.\nE) David takes the same time to shower and dress as the extract suggests.\nF) Sarah has looked at a cottage in Dorset.\nG) Sarah\'s coffee cup is chipped.\nH) The excerpt ends with Sarah and David sitting in silence.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_SET3_04_EXTRACT,
            extractSource: MOCK_SET3_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'A, C, F, G - Textually supported. (B) false: "David," (D) false: message not call, (E) false: timing unspecified in terms of predictability, (H) incomplete.',
              'Grade 6-7':
                'A, C, F, G - (A) "wakes before...every day," (C) "working in Singapore," (F) "cottage in Dorset they looked at," (G) "mug with the chip."',
              'Grade 8-9':
                'A, C, F, G - Each with precise textual validation. Statement E requires careful reading: the timing is predicted as "seven minutes" exactly, which is about total time, not shower/dress separately.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'set3-mock-04-q2',
            questionNumber: 2,
            questionText: `Look in detail at the section where Sarah checks her phone. How does the writer use language to convey Sarah\'s emotional state and her relationship with her daughter?\n\nYou could include:\n- word choice and tone\n- narrative perspective\n- use of contrast.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_04_EXTRACT,
            extractSource: MOCK_SET3_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Sarah receives a message that is only an emoji - a thumbs-up. The writer shows Sarah staring at the emoji for a full minute, which shows it has upset her. The writer asks "When did her daughter become someone who communicated in emojis?" This shows Sarah is confused and sad about how her daughter has changed. The phrase "communication became easier with strangers" shows that Sarah feels distant from her daughter now.',
              'Grade 6-7':
                'The writer establishes emotional distance through the reduction of communication to a single emoji. Sarah\'s extended contemplation ("stared...for a full minute") suggests the message is insufficient, inadequate. The rhetorical question "When did her daughter become..." expresses incomprehension of change, implying Sarah has not adapted to new forms of intimacy. The contrast between "easier with strangers" and the parent-child relationship suggests a failure of the relationship that communication technology has revealed rather than caused. The emoji becomes a symbol of emotional distance: a positive gesture (thumbs-up) presented in a form that prevents intimacy.',
              'Grade 8-9':
                "The writer performs generational miscommunication through the collision of different communicative registers. The emoji is technically positive (approval) yet phenomenologically empty for Sarah, who expects substance. The extended stare (\"full minute\") performs temporal expansion of an empty moment - the minute becomes a measure of emotional distance. The rhetorical question expresses Sarah's failure to understand her daughter's generation's communication norms, and by extension, her daughter's life. Crucially, \"easier with strangers\" suggests that communication technology enables emotional efficiency but prevents intimacy. The passage performs the paradox of modern relationships: more communication channels but less connection. Sarah's expectation of voice communication (or full language) collides with her daughter's emoji efficiency, and in that collision, their relationship appears unbridged.",
            },
            markScheme: [
              'Identifies use of emoji as symbol',
              "Analyzes Sarah's emotional response",
              'Explores generational communication differences',
              'Discusses effects on the relationship',
              'Higher bands: sees communication failure as central theme',
            ],
          },
          {
            id: 'set3-mock-04-q3',
            questionNumber: 3,
            questionText: `How does the writer use narrative perspective and repetition to convey Sarah\'s emotional disconnection from her marriage?\n\nYou could write about:\n- Sarah\'s internal thoughts vs. David\'s obliviousness\n- repeated descriptions of predictability\n- what the ending reveals.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_04_EXTRACT,
            extractSource: MOCK_SET3_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows Sarah\'s thoughts but not David\'s. Sarah thinks about the cottage and whether she should book it, but David doesn\'t think or feel anything shown in the text. The writer repeatedly describes David as "predictable" and "routine" - he showers, dresses, drinks coffee the same way every day. This repetition makes the marriage seem boring and empty. Sarah understands the relationship isn\'t working, but David just goes through the motions.',
              'Grade 6-7':
                'The writer establishes narrative asymmetry: we have access to Sarah\'s rich interiority but David is presented through external action only. The repeated emphasis on David\'s predictability ("wakes...every day," "seven minutes, exactly," "automatic," "routine") suggests Sarah\'s perception of him as mechanical. The interior monologue about whether to book the cottage reveals Sarah\'s awareness that surprise requires her action, not his desire. The final exchange where David says "Thank you" and Sarah replies is presented as automatic performance: "automatic...responses...automatic...muscle memory." The perspective suggests they are both performing rather than connecting. David doesn\'t seem to have awareness of disconnection; Sarah does but is resigned to it.',
              'Grade 8-9':
                'The writer constructs perspective and repetition as tools for revealing the asymmetry of awareness in disconnected marriage. We are entirely within Sarah\'s consciousness, which grants her a kind of tragic awareness: she understands the marriage\'s emptiness while David seems to inhabit it unreflectively. The repetition of "every day," "exactly," and "automatic" across different contexts (alarm, routine, coffee, conversation) performs the collapse of distinction between their relationship and his daily routine - they have become indistinguishable. The interior monologue about the cottage reveals Sarah\'s understanding that spontaneity requires her initiation, that David\'s predictability is a form of absence. Crucially, the final "automatic" is applied to both of them, suggesting they are both trapped in performance. The perspective creates tragic irony: Sarah sees clearly but feels powerless to change the relationship; David remains unreflective, perhaps contentedly, perhaps tragically. The writer never reveals which.',
            },
            markScheme: [
              'Identifies narrative perspective strategy',
              'Analyzes repetition and its effects',
              'Explores predictability as emotional distance',
              'Discusses the final exchange',
              'Higher bands: understands perspective as creating tragic awareness',
            ],
          },
          {
            id: 'set3-mock-04-q4',
            questionNumber: 4,
            questionText: `In your view, is Sarah\'s resignation to her marriage justified by the evidence in the extract? Use details to support your interpretation.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_SET3_04_EXTRACT,
            extractSource: MOCK_SET3_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Sarah's resignation seems justified because her husband is completely predictable and unemotional. He never greets her, never initiates anything, and seems not to notice her. Their daughter has become distant. Sarah wants to plan a cottage trip but feels exhausted thinking about it. David just goes through his routine without emotion. The marriage appears empty, so Sarah's resignation makes sense. However, we only see Sarah's view, so David might feel differently.",
              'Grade 6-7':
                'Sarah\'s resignation appears justified by the evidence: her husband is emotionally unavailable (no greeting, "not looking at her," automatic responses), their communication has become mechanical, and their daughter\'s distance suggests relational patterns of disconnection. Sarah\'s exhaustion at the thought of booking a surprise reveals how much effort she must expend to create connection. The phrase "muscle memory" suggests they are performing rather than connecting. However, the extract shows only Sarah\'s perspective and her thoughts about her inadequacy ("she had not adapted"). One might argue her resignation is not justified but rather a product of her own perception and assumptions about David\'s incapability. The extract doesn\'t give David voice to confirm her interpretation.',
              'Grade 8-9':
                "Sarah's resignation is simultaneously justified and problematic, which is the extract's sophisticated point. The evidence justifies her view: David's mechanical predictability, absence of initiative, failure of greeting, automatic responses - these suggest emotional unavailability. The cottage thought experiment reveals a painful truth: she has learned that creating connection requires her unilateral effort, and the thought exhausts her. However, the extract also suggests resignation as a form of self-fulfilling prophecy. Sarah's assumption that David \"hadn't thought of it first, hadn't wanted it enough\" may prevent her from communicating her desire. The final \"automatic\" applied to both of them suggests they are both trapped, but neither is trying to escape. The writer doesn't resolve whether the marriage is actually empty or whether both partners are performing emptiness. This ambiguity is precisely where the extract's power resides: resignation appears justified because we see the relationship through Sarah's eyes, but the extract also suggests that resignation itself creates the emptiness it claims to describe.",
            },
            markScheme: [
              'Judges whether resignation is justified',
              'Supports judgment with textual evidence',
              'Considers alternative interpretations',
              "Analyzes David's perspective gap",
              'Higher bands: recognizes complexity; sees resignation as potentially self-fulfilling',
            ],
          },
        ],
      },
      {
        id: 'set3-mock-04-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'set3-mock-04-q5',
            questionNumber: 5,
            questionText: `Write a narrative exploring a moment of emotional disconnection between characters who are supposed to be close. This could be between family members, partners, friends, or other relationships. Show what creates the distance and what each character feels or doesn\'t feel.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                "Write about a moment when people who love each other can't connect. Show what they do and don't say to each other. Use details to reveal their emotions. The writing should have about 450-500 words with varied sentences and generally accurate spelling and grammar.",
              'Grade 6-7':
                'Create a detailed scene showing emotional distance within a close relationship. Use dialogue, action, and internal thought to show different perspectives. Vary sentence structures to create emotional effect. Show what prevents connection. Approximately 500 words with confident technical control.',
              'Grade 8-9':
                'Develop a sophisticated exploration of how people can be physically present yet emotionally absent from each other. Use precise language and perspective carefully. Show the complexity of disconnection. The piece should explore what prevents intimacy and have thematic resonance. Approximately 500-600 words.',
            },
            markScheme: [
              'Content and organisation: Clear establishment of the disconnection',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for emotional effect',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Conveys emotional complexity',
              'Higher bands: sophisticated handling of perspective and relationship dynamics',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK SET3-05: "The Storm at Sea" - Adventure and Maritime Peril
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-set3-mock-05',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam Set 3 - 05: "The Storm at Sea"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'set3-mock-05-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_SET3_05_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'set3-mock-05-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The boat is a 40-foot catamaran.\nB) The group consists of five people.\nC) The charter company is in Crete.\nD) The storm lasted three hours.\nE) Elena is the narrator\'s mother.\nF) The engine stopped during the storm.\nG) Peter knew the storm was coming.\nH) Sarah and Michael are on their anniversary trip.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_SET3_05_EXTRACT,
            extractSource: MOCK_SET3_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'A, B, D, F - (C) false: Kos, (E) false: Michael\'s mother, (G) false: "stopped paying attention," (H) false: honeymoon, not anniversary.',
              'Grade 6-7':
                'A, B, D, F - (A) "40-foot catamaran," (B) narrator + Peter + three others, (D) "three hours," (F) "engine cut out."',
              'Grade 8-9':
                'A, B, D, F - Each validated. Elena is specifically "Michael\'s mother," not narrator\'s.',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'set3-mock-05-q2',
            questionNumber: 2,
            questionText: `Look in detail at the passage from "The sea teaches" to "we deserve." How does the writer use language to convey the danger and terror of the storm?\n\nYou could include:\n- word choice and vivid imagery\n- sentence structures that convey danger\n- metaphors and personification.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_05_EXTRACT,
            extractSource: MOCK_SET3_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the sea as teaching that "you are nothing," which shows how powerful and frightening it is. The sky "turned the colour of bruises," which creates a visual image of danger. The water is described as "green," and there is "foam and spray." The language uses violent words like "roaring throat" to show the force of nature. The writer makes short, urgent sentences when describing the danger.',
              'Grade 6-7':
                'The writer establishes danger through personification: the sea "teaches," becomes a "roaring throat," the wind "stops" as though conscious. The metaphor of bruises for the sky creates visual dread. The air becomes "green" - an inversion of normal colour that suggests displacement. The phrase "no vessel should make" implies movements that violate physical law. The personification extends to the mast which "bends at angles that seemed anatomically impossible," anthropomorphizing the boat as a body in distress. The escalating violence is conveyed through the "rhythm" of waves becoming progressively larger, as though the sea is methodically building an argument.',
              'Grade 8-9':
                'The writer constructs terror through both personification and dissolution of human agency. The opening line - "The sea teaches you that you are nothing" - establishes a philosophical framework for the episodic terror: the sea is not merely dangerous but revelatory, stripping away human pretension to mastery. The physical descriptions accumulate increasingly unstable effects: colours become unnatural ("green air," sky of "bruises"), movements exceed safe parameters ("angles that seemed anatomically impossible"), the boat\'s body becomes vulnerable. The rhythm of escalation is crucial: each wave "slightly larger," as though the sea is constructing an argument whose violent conclusion is inevitable. The image of the mast bending beyond breaking point creates what might be called "anticipatory dread" - we await catastrophe because the narrative logic seems to demand it. The writer uses parenthetical interjection ("which is its own kind of death, a narrower death spread across decades") to collapse time: the potential of death now spreads into future haunting.',
            },
            markScheme: [
              'Identifies language techniques: personification, metaphor, unusual imagery',
              'Analyzes effects of these choices',
              'Explores how danger is escalated',
              'Discusses how language conveys terror beyond physical threat',
              'Higher bands: sees how terror extends into psychological consequences',
            ],
          },
          {
            id: 'set3-mock-05-q3',
            questionNumber: 3,
            questionText: `How does the writer use the ending of the extract to convey the importance of cooperation and human connection during crisis?\n\nYou could write about:\n- what happens when Elena joins the narrator\n- the role of Peter\'s instructions\n- what the final moment reveals about human resilience.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_05_EXTRACT,
            extractSource: MOCK_SET3_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Peter tells the narrator to hold the wheel even though they have never sailed before. This shows the narrator has to trust and act even without experience. Then Elena comes and puts her hands on the narrator's to help hold the wheel. Elena cannot speak over the wind, but her presence helps. This shows that in crisis, human connection and help are more important than words. The narrator and Elena work together to survive.",
              'Grade 6-7':
                "The turning point comes when Elena appears and offers wordless support. The passage moves from the narrator's fear and isolation to shared action. Peter's instruction requires trust despite inadequacy, but Elena's presence - physical contact, mutual grip on the wheel - transforms survival from individual struggle to collective action. Crucially, \"she said something I couldn't hear over the wind\" but the physical presence suffices. This suggests that in extremity, presence and coordinated action matter more than communication. The narrator can survive alone but not confidently; with Elena's hands, survival becomes shared responsibility.",
              'Grade 8-9':
                'The structural shift from isolation to connection marks the passage\'s philosophical pivot. The narrator faces catastrophe alone, feeling the wheel\'s force against their untrained body. Peter\'s command requires what might be called "competent vulnerability" - the narrator must act despite inadequacy. But Elena\'s arrival performs a crucial transformation: survival becomes relational. The detail that "she said something I couldn\'t hear" is significant - communication breaks down but is replaced by coordinated physical action. The shared grip on the wheel becomes a metonym for interdependence: neither person alone can maintain course, but their combined action creates stability. The passage suggests that human resilience emerges not from individual mastery but from the willingness to be vulnerable with others, to share the burden. The "three hours" becomes bearable through this connection.',
            },
            markScheme: [
              "Identifies the role of Elena's support",
              "Analyzes Peter's instructions",
              'Explores wordless communication',
              'Discusses how connection enables survival',
              'Higher bands: sees cooperation as philosophical answer to terror',
            ],
          },
          {
            id: 'set3-mock-05-q4',
            questionNumber: 4,
            questionText: `How effectively does the writer convey the psychological impact of facing death? Support your view with evidence from the text.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_SET3_05_EXTRACT,
            extractSource: MOCK_SET3_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer effectively shows how facing death changes someone\'s thinking. The narrator experiences fear: "I had never seen that expression on anyone\'s face before. That was when I understood we might die." The narrator\'s thoughts show terror and helplessness. The description of almost dying affecting the rest of your life ("you spend the rest of your life as someone who almost died") shows that the psychological impact lasts long after the danger. The writer makes us understand that facing death is more than a physical threat; it\'s a lasting psychological change.',
              'Grade 6-7':
                "The writer establishes the psychological impact through multiple registers: perceptual shock (Peter's unrecognized expression), temporal extension (near-death as ongoing state), and the collapse of certainty about the future. The parenthetical on \"almost died\" is psychologically significant: it suggests that near-death trauma extends across decades, that one's future becomes permanently marked. The physical sensations (wheel slippery, body exhausted) are secondary to psychological states (fear, confusion about whether they'll survive). The storm's violence is terrifying partly because it exceeds comprehension - the mast shouldn't bend like that, waves shouldn't escalate like that. This breakdown of predictability attacks the psyche as much as physics attacks the boat. The writer conveys that the greatest danger is loss of control and comprehension.",
              'Grade 8-9':
                'The writer achieves psychological depth through what might be called "temporal contamination": the storm doesn\'t merely present immediate danger; it retroactively and prospectively poisons time. The phrase "or if you do survive it you spend the rest of your life as someone who almost died, which is its own kind of death, a narrower death spread across decades" performs the crucial move of treating psychological consequences as equivalent to physical death. The parenthesis collapses present danger into future haunting. Psychologically, the storm operates through cognitive failure: the narrator cannot assimilate the mast\'s impossible angles, cannot predict whether actions will save them. This epistemic breakdown is as destabilizing as physical peril. The intensity is conveyed through the narrator\'s internal monologue, which reveals not courage but confusion, not heroism but animal terror. The final action - taking the wheel despite incompetence, accepting Elena\'s support despite exhaustion - is presented not as triumph but as survival without dignity. This psychological realism, where heroism is replaced by mere continuation, is more affecting than narrative triumph would be.',
            },
            markScheme: [
              'Clear judgment about effectiveness',
              'Textual support for view',
              'Analysis of psychological language and structure',
              'Engagement with temporal and cognitive dimensions',
              'Higher bands: sees psychological impact as extending beyond immediate threat',
            ],
          },
        ],
      },
      {
        id: 'set3-mock-05-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'set3-mock-05-q5',
            questionNumber: 5,
            questionText: `Write a narrative about facing a crisis or dangerous situation. Focus on how people respond to danger and what it reveals about them as individuals and as humans. You might write about physical danger, emotional crisis, or existential challenge.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'Create a narrative with a clear crisis moment. Show how characters respond and what they feel. Include sensory details about the danger. Show what the experience reveals about the characters. About 450-500 words with varied sentences.',
              'Grade 6-7':
                'Develop a crisis narrative with specific details about the threat and the response. Show internal states through action and thought. Vary sentence structures to create tension. Show how crisis reveals character. Approximately 500 words with confident control.',
              'Grade 8-9':
                'Create a sophisticated crisis narrative exploring psychological responses to danger. Use precise language and varied structures. Show how uncertainty and fear affect decision-making. Explore what the experience reveals about human nature and relationship. Approximately 500-600 words.',
            },
            markScheme: [
              'Content and organisation: Clear crisis with specific responses',
              'Vocabulary: Precise and varied',
              'Sentence structures: Varied for effect and tension',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Creates tension and reveals character',
              'Higher bands: sophisticated psychological exploration; thematic depth',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOCK SET3-06: "The Backyard of Summer" - Childhood Memory and Loss
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1-set3-mock-06',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'Mock Exam Set 3 - 06: "The Backyard of Summer"',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'set3-mock-06-section-a',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${MOCK_SET3_06_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'set3-mock-06-q1',
            questionNumber: 1,
            questionText: `Choose four TRUE statements:\n\nA) The narrator\'s brother is younger than the narrator.\nB) The fort was intentionally constructed.\nC) The narrator\'s mother died at age sixty.\nD) The narrator is studying economics.\nE) The narrator\'s mother had been dead for twelve years before the backyard visits ended.\nF) The hedge was eventually cut down.\nG) The narrator is currently a father.\nH) The narrator\'s daughter is ten years old.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: MOCK_SET3_06_EXTRACT,
            extractSource: MOCK_SET3_06_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'B is false (discovered not constructed), C not stated, D true, E true, F true, G true, H false. Correct answer: D, E, F, G - Clear textual support.',
              'Grade 6-7':
                'D, E, F, G - (A) implies older brother, (B) "discovered not constructed," (C) age not stated, (H) daughter is "six."',
              'Grade 8-9':
                'D, E, F, G - Precise textual citations: (D) "studying economics," (E) "dead for twelve years," (F) "eventually...cut it down," (G) "I have a daughter now."',
            },
            markScheme: ['1 mark per answer', 'Maximum 4 marks'],
          },
          {
            id: 'set3-mock-06-q2',
            questionNumber: 2,
            questionText: `Look in detail at the description of the backyard and the fort in the first section. How does the writer use language to convey the special quality of childhood experience?\n\nYou could include:\n- word choice and imagery\n- use of contrast\n- sentence structures.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_06_EXTRACT,
            extractSource: MOCK_SET3_06_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the backyard as "a foreign country" and says it had "different rules, different physics." This makes it seem magical and special. The grass "grew higher," insects were "larger," and time "moved differently." An afternoon could contain "several lifetimes of experience." This shows that as a child, the backyard felt bigger and more important than an adult would see it. The language creates wonder.',
              'Grade 6-7':
                'The writer establishes the backyard as a separate phenomenological space through comparative language. It is "a foreign country" with inverted physics - grass grows taller, insects enlarge, time distorts. Most significantly, time is reimagined: "an afternoon could contain several lifetimes of experience." This temporal distortion captures how children experience duration differently. The fort is "discovered" rather than "constructed," suggesting that childhood imagination finds rather than creates meaning. The use of contrast (backyard vs. adult world) establishes the child\'s world as internally coherent and self-sufficient.',
              'Grade 8-9':
                'The writer enacts childhood phenomenology through systematic distortion of normal parameters. The backyard becomes "a foreign country," which simultaneously means physically near and experientially distant. The enumeration of differences - higher grass, larger insects, different time - performs what might be called "recursive magnification": each element of the childhood world expands its significance. The phrase "could contain several lifetimes of experience" is temporally paradoxical: childhood moments are simultaneously fleeting and infinite. This captures the child\'s experience of duration as qualitative rather than quantitative. The discovery-rather-than-construction of the fort is philosophically significant: it suggests that imagination and reality are not distinguished in childhood. What matters is that the fort is the fort, not whether it was built. This register of certainty about invented meaning is what childhood allows. The writer\'s achievement is to make us understand childhood not as lesser comprehension of reality but as different experiential framework.',
            },
            markScheme: [
              'Identifies language creating magical/special quality',
              'Analyzes temporal and spatial distortion',
              'Explores contrast with adult perspective',
              'Discusses how meaning is created in childhood',
              'Higher bands: understands childhood as different phenomenology',
            ],
          },
          {
            id: 'set3-mock-06-q3',
            questionNumber: 3,
            questionText: `How does the writer structure the extract to show the loss of childhood and its relationship to adult regret? You could write about:\n- the progression from childhood to adulthood\n- the role of the mother\'s death\n- what the ending reveals.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: MOCK_SET3_06_EXTRACT,
            extractSource: MOCK_SET3_06_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The extract starts with description of the magical backyard in childhood. Then it moves to the narrator as an adult, explaining that the brother went to university and didn't return the same way. The mother died. The narrator realized too late that the mother was mourning the loss of childhood even while they were still children. At the end, the narrator has a daughter but hasn't built the fort with her. The structure shows how time passes and things are lost.",
              'Grade 6-7':
                'The structure moves chronologically from childhood certainty to adult awareness of loss. The turning point is the brother\'s departure to university: "one day my brother went away...and didn\'t come back in the same way." This marks childhood\'s end. The mother\'s death is presented as the moment when the narrator understands the mother had been mourning (knowing childhood was temporary). The final section collapses past loss into present regret: the narrator has a daughter, the season to build the fort exists, but the narrator has "made an excuse because I was busy." The structure performs the mechanism of loss: it is not dramatic but quotidian, not a single moment but accumulated moments of non-action.',
              'Grade 8-9':
                "The structure enacts the tragedy of temporal consciousness: the moment we become aware of something's value is the moment we lose it. The childhood section is presented without awareness of its fragility. The turning point is the brother's departure, which marks the shift from childhood to the knowledge that childhood ends. Crucially, the mother's mourning at the kitchen window was simultaneous with the backyard's reality - she was grieving something happening in the present, not past. The structural irony is devastating: the mother knew what the narrator later learns too late. The final section performs the tragedy's completion: the narrator now has a daughter and the possibility of fort-building, yet makes excuses. The structure suggests that once we acquire consciousness of loss, we become incapable of preventing new losses. We cannot rebuild what we know is temporary. The final line - \"The backyard is still there. The fort was never built\" - presents this as failure of will, but the structure suggests it is more: it is the price of consciousness.",
            },
            markScheme: [
              'Identifies structural progression through time',
              "Analyzes the role of the brother's departure",
              "Explores the mother's consciousness of loss",
              "Discusses the final section's significance",
              'Higher bands: understands structure as performing temporal tragedy',
            ],
          },
          {
            id: 'set3-mock-06-q4',
            questionNumber: 4,
            questionText: `In your view, is the narrator\'s failure to build the fort with their daughter presented more as personal tragedy or as inevitable human condition? Support your judgment with evidence.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: MOCK_SET3_06_EXTRACT,
            extractSource: MOCK_SET3_06_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The narrator's failure seems like personal tragedy because they could have chosen differently. They made an excuse about work. But the extract also suggests it's inevitable because once you understand that things are temporary, you can't enjoy them anymore. The mother mourning at the window shows that parents understand childhood is temporary and will be lost. So the narrator's failure is sad, but also shows how time works - we always realize things are precious only after they're gone.",
              'Grade 6-7':
                "The extract presents the failure as both personal and inevitable. The specific excuse about work suggests human weakness - the narrator chose distraction over presence. Yet the structural connection between the mother's mourning and the narrator's later regret suggests something more universal: once consciousness arrives, we cannot prevent loss. The passage suggests that the narrator didn't build the fort not because of a specific failure but because consciousness of time's passage prevents spontaneity. The final line \"I understand, too late\" suggests that understanding and action are temporally misaligned: understanding arrives after the moment has passed.",
              'Grade 8-9':
                'The passage constructs this as inevitable tragedy, not personal failure. Yes, the narrator "made an excuse," but the structure suggests this excuse is symptomatic rather than causal. The crucial point is the mother\'s awareness: she mourned the backyard while it existed, not after. This demonstrates that consciousness of impermanence is synchronous with the moment itself - you cannot be present in the moment while aware of its transience. The narrator understands "the backyard time was temporary, that the fort would not last" - this understanding is precisely what prevents building. The final revelation "she was mourning its presence" is the passage\'s philosophical centre: once you understand temporality, you mourn what still exists. This is not a failure of will but a consequence of consciousness. The narrator cannot build the fort because to do so would require forgetting that childhood forts are temporary, and that forgetting is no longer available. The passage suggests this is the human condition: consciousness makes loss inevitable.',
            },
            markScheme: [
              'Engages clearly with the question',
              'Supports judgment with textual evidence',
              'Considers both personal and universal dimensions',
              'Analyzes the role of consciousness',
              'Higher bands: sees this as existential rather than merely personal tragedy',
            ],
          },
        ],
      },
      {
        id: 'set3-mock-06-section-b',
        title: 'Section B: Writing',
        description: 'Write creatively for this section. Suggested time: 45 minutes.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'set3-mock-06-q5',
            questionNumber: 5,
            questionText: `Write a narrative or reflective piece exploring a moment or period that you recognize only after it has passed as being significant or precious. You might write about a place, a relationship, a time of life, or an experience. Show both the moment itself and the later understanding of its importance.\n\nYour response should be 400-600 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                "Write about something you didn't appreciate at the time but now understand was important. Use concrete details to show the moment or period. Then show how your understanding has changed. The writing should be about 450-500 words with varied sentences and reflective tone.",
              'Grade 6-7':
                'Create a piece that moves between the moment (without awareness of its significance) and present understanding. Use sensory detail and emotional language. Vary sentence structures to show the shift in perspective. Show what made you aware of the loss. Approximately 500 words with confident control.',
              'Grade 8-9':
                'Develop a sophisticated piece where the temporal gap between experience and understanding is central to the meaning. Use precise language and careful perspective. Show how consciousness of loss changes the present. Explore what is gained and lost in gaining awareness. Approximately 500-600 words.',
            },
            markScheme: [
              'Content and organisation: Clear movement from past to present understanding',
              'Vocabulary: Precise and varied, suited to reflective register',
              'Sentence structures: Varied to show temporal and emotional shifts',
              'Spelling, punctuation and grammar: Accurate',
              'Effect on reader: Creates emotional resonance with recognition of loss',
              'Higher bands: sophisticated handling of temporal perspective; thematic depth',
            ],
          },
        ],
      },
    ],
  },
]
