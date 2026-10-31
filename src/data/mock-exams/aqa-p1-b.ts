// @ts-nocheck

/**
 * WHAT WAS WRONG (fixed 27 September 2026). On 26 September
 * scripts/check-mock-exam-extracts.mjs flagged three of the quotations below;
 * everything else here was found by reading every answer and question 1 key
 * against its extract, which the checker does not do.
 *
 * The five extracts are specially written for this bank and labelled as such;
 * none claims to be a published writer's words, and none was changed. These
 * papers are served (mock-exam-loader chunk 'aqa-p1-b', and allMockExamPapers
 * through ./index), so what follows was in front of students.
 *
 * The model answers were not in step with the extracts:
 *   - quotations that are not in the extract: "dull, ceaseless hum of the
 *     generators" (the text says "low"), "up and down the street with
 *     practised alertness" (a silent cut: the text has "the practised
 *     alertness of someone..."), reds "crashing like cymbals" (they "crashed"),
 *     and "looked" in a list of the man's verbs (the text has "looking");
 *   - the answer's own term printed in quotation marks as if it were the
 *     writer's: "pathetic fallacy of objects", which also misuses the term
 *     (pathetic fallacy gives human feeling to nature or weather). The
 *     sentence now says what it means in plain words;
 *   - evidence from outside the lines a question sets: Paper 6 question 4
 *     asks about the second half and both answers cited Maren counting to
 *     thirty, which is in the first. They now cite her pausing at the
 *     stairwell door and pushing it open;
 *   - claims the text does not bear out: Paper 8 question 3 put the man
 *     stepping out of the car in the final paragraph (it is the one before);
 *     Paper 9 question 2 gave its long sentence a "deferred main verb" (its
 *     main verbs come early);
 *   - wrong terms: "the colour of old jade" called a simile (it has no "like"
 *     or "as") and "as though the tree were improvising a symphony" called a
 *     metaphor (it is the simile); "quiet, deliberate precision" called three
 *     adjectives ("precision" is a noun); Paper 7 question 2 credited the
 *     voyage paragraph with "long, compound sentence structure" (it has no
 *     compound sentence, and its first sentence is eight words long: the
 *     answer now sets that short opening against the long closing list); Paper 10
 *     question 2 called "Not slammed - that would have been easier to
 *     interpret" a parenthetical (it is a sentence of its own; the true aside
 *     is "- the one they always meant to fix -"); Paper 10 question 4 called
 *     a noun phrase "the final clause";
 *   - question 1 keys with five true statements for "choose four": Papers 7,
 *     9 and 10 each had a true H, and each key conceded that H was also
 *     correct. Each H was made a statement the extract makes false, and every
 *     keyed letter was kept.
 *
 * Every double-quoted span in those answers and mark schemes was then in its
 * own extract, or was the question's own words ("completely real", quoting
 * the student's statement), and the checker passed the file.
 *
 * SET AS AQA SETS 8700/1 FROM SUMMER 2026 (31 October 2026). This replaces
 * the questions, answers and question 1 keys described above; the extracts
 * are the same, byte for byte.
 *
 * WHAT WAS WRONG. The marks were AQA's, but from summer 2026 AQA reworded
 * several questions on this paper while keeping their marks, and these
 * papers still set the old forms, largely in AQA's own rubric. Question 1
 * asked for four true statements from eight, where AQA now sets four
 * multiple-choice parts, 1.1 to 1.4, each with one right answer. Question 3
 * asked how the source was structured "to interest you as a reader", or for
 * aims of its own (two effects at once, or to reveal a character), where AQA
 * names one effect. Question 4 asked "To what extent do you agree?" about a
 * view of the second half, and had 22 minutes where AQA's timing advice
 * gives 20. Question 5 asked for "a description suggested by this picture"
 * for a competition.
 *
 * WHAT THEY ARE NOW, as src/data/mark-scheme-guides/aqa-lang-paper1.ts
 * describes the paper (checked twice against AQA's 2026 sample question
 * paper and mark scheme):
 *   - Question 1 (label "1.1 to 1.4") names one paragraph, or two, and asks
 *     four questions on different details, with three options each, one of
 *     them right and checkable from those lines alone. Each paper has at
 *     least one wrong option that repeats a word of the source, and the right
 *     letters run 06 CABA, 07 BCAC, 08 BACB, 09 ABCB, 10 CBAA. Both answer
 *     keys give the letters with the words that settle them;
 *   - Question 2 is reworded and its answers kept, except that their dashes
 *     are gone, "blistered and peeled" is no longer said to personify the
 *     building, and Paper 8's answer no longer calls Nolan a detective, which
 *     the source never says;
 *   - Question 3 names one effect the source creates: tension (06), a sense
 *     of being trapped (07), mystery (08), wonder (09), a sense of loss (10);
 *   - Question 4 names its part of the source and gives a new view of it; the
 *     student says how far they agree and/or disagree, and both answers weigh
 *     the view rather than simply agreeing;
 *   - Question 5 is a description, with the picture described in words and
 *     given for ideas only, or the opening of a story, for a reader each
 *     paper names (library visitors, families at a museum, a school
 *     magazine's readers, readers aged eleven to fourteen, radio listeners).
 *     Its Grade 6-7 answer is now a full piece, where it was a list of
 *     qualities; its Grade 4-5 answer still describes a response at that level.
 * The wording, and the notes at the head of each section, are the site's own.
 * Questions name paragraphs, not line numbers, which the mock-exam page does
 * not print. Every double-quoted span in the answers and mark schemes was
 * checked by script against its extract, word for word and with case, and
 * each one in Questions 1, 2 and 4 against the lines its question names.
 *
 * SECOND READ (31 October 2026), by a checker who did not write them. Every
 * Question 1 part has one defensible letter and the keys above are right;
 * every reference, quotation and length was right. These claims were not:
 *   - 06 Q3 answer: tension was "finally broken", then left at its height; now the silence breaks.
 *   - 06 Q4 scheme: the walls had "blistered and peeled"; it was the paint, and now it says so.
 *   - 07 Q2 answer: "her only anchor" tied her sense of herself; it is an anchor to time, now so.
 *   - 07 Q3 answer: three "She thought of" sentences carried her home; the third does not, now two.
 *   - 07 Q4 answer and scheme: called those sentences short; the first has 24 words, so not now.
 *   - 08 Q1 answer: refuted A as standing in the entrance; A says "Just inside", now answered so.
 *   - 08 Q4 view: it granted "nothing violent", the scheme's case against it; now "everything".
 *   - 09 Q4 answer: likened her solitude to breathing; the source likens keeping secrets, now so.
 *   - 09 Q4: the "gentle" morning "boomed" and is not in Q4's lines; now fig tree, "By evening".
 *   - 10 Q3 answers, scheme: each sound further away, yet he comes downstairs; now through and out.
 *   - 10 Q3 answer: the reader "arrives, like Claire", but she was in the argument; now cut.
 */

import type { MockExamPaper } from './types'

// ─── Extracts ────────────────────────────────────────────────────────────────

const EXTRACT_DYSTOPIAN = `The sirens had not sounded for three days, and that was the most frightening thing of all. In the months since the Transition, the people of Sector Nine had learned to measure their safety by the regularity of the alarms - two blasts at dawn meant water rations, three at noon meant a patrol was passing through, and a long, unbroken wail at sunset meant curfew. Silence meant the Authority had stopped watching. Silence meant you were on your own.

Maren pressed her back against the concrete wall of the stairwell and listened. Somewhere far below, a door slammed. Footsteps - quick, purposeful - echoed up through the building and then stopped. She counted to thirty, her lips moving without sound, before she dared to breathe again.

The corridor outside her apartment was dark. The overhead strip lights had failed weeks ago, and no one came to fix them any more. She moved by memory, trailing her fingertips along the wall where the paint had blistered and peeled, feeling the cold dampness seep through the plaster beneath. At the end of the corridor, a window looked out over what had once been the park. Now it was a flat expanse of churned mud, crisscrossed with tyre tracks and bordered by coils of razor wire that glinted dully in the grey half-light.

She reached the stairwell door and paused. Through the reinforced glass panel, she could see the stairs descending into blackness. There was no sound now - no footsteps, no voices, nothing but the low, ceaseless hum of the generators buried somewhere deep beneath the building. She pushed the door open. The hinges screamed.`

const EXTRACT_DYSTOPIAN_SOURCE = 'Original literary fiction composition - dystopian genre'

const EXTRACT_HISTORICAL = `The ship tilted violently to starboard and Martha grabbed the edge of the bunk with both hands, her knuckles white against the rough wood. Around her in the darkness of the hold, other women cried out - sharp, breathless sounds swallowed immediately by the groan of the timbers and the thunderous crash of water against the hull. The single oil lamp that hung from a beam above them swung in wide, sickening arcs, throwing wild shadows across the low ceiling.

They had been at sea for forty-seven days. Martha knew this because she had scratched a mark into the wooden frame of her bunk each morning, a ritual that had become her only anchor to the passage of time. Everything else had dissolved into a grey, heaving blur of nausea and confinement. The hold smelled of unwashed bodies, of damp wool, of the vinegar they used to scrub the floors each Sunday, and beneath it all, the deep, salty, ancient smell of the ocean itself.

The woman in the bunk below hers was praying - a low, rapid murmur in a language Martha did not recognise. Across the narrow aisle, old Mrs Garrick lay perfectly still with her eyes open, staring at the ceiling with an expression of absolute calm, as though she had already arrived at some private accommodation with death and was simply waiting for it to keep its appointment.

Martha closed her eyes. She thought of the kitchen at home - the scrubbed table, the kettle on the range, the cat sleeping in the chair by the window. She thought of her mother's hands kneading bread. She thought of solid, unmoving ground.`

const EXTRACT_HISTORICAL_SOURCE = 'Original literary fiction composition - historical fiction genre'

const EXTRACT_CRIME_NOIR = `Rain hammered the windscreen and Nolan sat in the car with the engine off, watching the entrance to the warehouse across the street. The neon sign above the door - PACIFIC STORAGE - buzzed and flickered, casting a sickly pink glow across the wet pavement. It was half past eleven. He had been waiting for two hours.

The coffee in the paper cup on the dashboard had gone cold long ago. He picked it up anyway and drank, grimacing at the bitter, lukewarm taste. His neck ached from the awkward angle of the seat, and his left knee - the one he had twisted in the fall last November - throbbed with the dull, persistent insistence of an old grievance that refused to be forgotten.

A car turned into the street, its headlights sweeping across the facades of the buildings opposite. Nolan slid lower in his seat. The car - a black saloon, recent model, no plates - pulled up directly outside the warehouse. For a long moment, nothing happened. The engine idled. The wipers swept back and forth. Then the driver's door opened and a figure stepped out into the rain.

The man was tall, wearing a dark overcoat with the collar turned up. He stood for a moment, looking up and down the street with the practised alertness of someone who had spent a lifetime checking for watchers. Then he reached into the car and pulled out a holdall - heavy, from the way he adjusted his grip - and walked to the warehouse door. He did not knock. He entered a code on the keypad, and the door opened with a soft click. He stepped inside. The door closed behind him. The street was empty again.`

const EXTRACT_CRIME_NOIR_SOURCE = 'Original literary fiction composition - crime noir genre'

const EXTRACT_MAGICAL_REALISM = `On the morning of her sixty-third birthday, Alma Reyes discovered that she could hear colours. It began with the geraniums on the kitchen windowsill - a low, warm hum, somewhere between a cello and a purring cat - and by lunchtime the whole garden was singing to her. The lavender whispered in a silvery soprano. The sunflowers boomed like tubas. Even the brown earth had its own sound, a deep and patient drone that seemed to vibrate up through the soles of her slippers.

She told no one. She had lived alone since Eduardo's death four years ago, and the habit of keeping extraordinary things to herself was by now so deeply ingrained that it felt less like secrecy and more like breathing. Instead, she sat on the wooden bench beneath the fig tree and listened to the world remake itself in music.

The fig tree's leaves were the colour of old jade, and they sang in harmonies so complex that Alma felt tears prick her eyes. Each leaf carried its own note, but together they produced something that was more than the sum of their parts - a chord that shifted and swelled with every breath of wind, as though the tree were improvising a symphony that had been playing, unheard, since the day it was planted.

By evening, the colours of the sunset had become almost unbearable. Reds crashed like cymbals. The deepening purple of the sky throbbed with the slow, heavy pulse of a bass drum. Alma gripped the arms of her chair and closed her eyes, but it made no difference - the sound poured through her eyelids, through her skin, through the thin walls of her veins.`

const EXTRACT_MAGICAL_REALISM_SOURCE =
  'Original literary fiction composition - magical realism genre'

const EXTRACT_DOMESTIC_DRAMA = `The argument had ended twenty minutes ago but its residue hung in the kitchen like smoke. Claire stood at the sink, washing the same plate for the third time, her hands moving in slow, mechanical circles beneath the hot water. Through the window, she could see the garden - the lawn that needed mowing, the fence panel that Tom had promised to fix last summer, the trampoline the children had outgrown but which neither of them had dismantled because dismantling it would mean admitting that a certain kind of childhood was over.

Upstairs, a door closed. Not slammed - that would have been easier to interpret. Just closed, with a quiet, deliberate precision that said more than any amount of shouting. She heard Tom's footsteps cross the landing, the creak of the third stair - the one they always meant to fix - and then the front door opened and shut and his car started in the drive.

She turned off the tap and stood in the sudden silence, holding the plate. Water dripped from her fingers onto the floor. The kitchen clock ticked - an old-fashioned sound, absurdly loud in the emptiness. On the table behind her, the two mugs of tea she had made before the argument sat untouched, a thin film forming on their surfaces.

She put the plate on the rack and dried her hands on the towel that hung from the oven door. The towel was damp and smelled faintly of toast. Such a small, ordinary detail - the smell of toast on a Tuesday morning - and yet it threatened to undo her completely, because it belonged to the version of this morning where everything was still all right.`

const EXTRACT_DOMESTIC_DRAMA_SOURCE = 'Original literary fiction composition - domestic drama genre'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const aqaP1B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 6 - Dystopian Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-06',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-06-reading',
        title: 'Section A: Reading',
        description: `Read the source below, then answer all four questions in this section. Allow about 15 minutes to read the source and the questions, and about 45 minutes to answer them.\n\nSource: ${EXTRACT_DYSTOPIAN_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-06-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText:
              'Look again at the first paragraph of the source, from "The sirens had not sounded" to "you were on your own."\n\nQuestion 1 has four parts, 1.1 to 1.4. Each asks about one detail in that paragraph and gives three answers, A, B and C, only one of which is right. Choose one letter for each part, and write it next to the part number.\n\n1.1 What does the writer call "the most frightening thing of all"?\nA) The long wail that meant curfew\nB) A patrol passing through at noon\nC) Three days going by without a single alarm\n\n1.2 What did two blasts at dawn tell the people?\nA) That water would be handed out\nB) That a patrol was coming through\nC) That curfew was about to begin\n\n1.3 How had the people learned to judge whether they were safe?\nA) By how loud the alarms were\nB) By whether the signals came at their usual times\nC) By how often patrols passed their homes\n\n1.4 What did silence mean to the people of Sector Nine?\nA) That nobody was watching over them any more\nB) That the Authority was watching more closely than ever\nC) That it was safe to go outside',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 C, 1.2 A, 1.3 B, 1.4 A.\n\n1.1 C: "The sirens had not sounded for three days, and that was the most frightening thing of all."\n1.2 A: "two blasts at dawn meant water rations".\n1.3 B: the people learned to "measure their safety by the regularity of the alarms".\n1.4 A: "Silence meant the Authority had stopped watching. Silence meant you were on your own."',
              'Grade 6-7':
                '1.1 C, 1.2 A, 1.3 B, 1.4 A.\n\n1.1 C: the paragraph opens "The sirens had not sounded for three days, and that was the most frightening thing of all". The curfew wail and the patrol are signals the people know, not what frightens them.\n1.2 A: "two blasts at dawn meant water rations". Three blasts at noon meant a patrol, and a wail at sunset meant curfew.\n1.3 B: the people learned to "measure their safety by the regularity of the alarms", so what mattered was whether the alarms came when they were expected. A uses the word "alarms" but is wrong: how loud they were is never mentioned.\n1.4 A: "Silence meant the Authority had stopped watching. Silence meant you were on your own." B uses the word "watching" but says the opposite.',
            },
            markScheme: [
              '1.1 C: the first sentence says the sirens had not sounded for three days and calls this "the most frightening thing of all".',
              '1.2 A: "two blasts at dawn meant water rations".',
              '1.3 B: the people measured their safety "by the regularity of the alarms", not by how loud they were.',
              '1.4 A: silence meant "the Authority had stopped watching", so the people were on their own.',
              'One mark for each part answered with the right letter, 4 marks in all. The paper asks for one letter in each part.',
            ],
          },
          {
            id: 'aqa-p1-06-q2',
            questionNumber: 2,
            questionText:
              'Look closely at the third paragraph of the source, from "The corridor outside her apartment was dark" to "the grey half-light."\n\nHow does the writer use language in this paragraph to show a place that is falling into ruin?\n\nYou could comment on single words and phrases, on techniques such as imagery, and on how the sentences are shaped. Use only this paragraph in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the corridor as "dark", which creates an atmosphere of danger. The paint had "blistered and peeled", which shows the building is falling apart. The phrase "cold dampness" uses sensory language to make us feel uncomfortable. The park is now "a flat expanse of churned mud", which shows how the world has been destroyed. The "razor wire" that "glinted dully" suggests danger and imprisonment.',
              'Grade 6-7':
                'The writer presents this place as one of steady neglect and entrapment. The detail that "no one came to fix them any more" implies not just disrepair but the collapse of the society around it, since repairs need people who still care. Maren moves "by memory", which suggests that the darkness is a lasting condition, not a passing one. The verbs "blistered and peeled" make the walls sound like sore, diseased skin, as if the building itself were sick, while "cold dampness seep through the plaster" uses the verb "seep" to convey slow, unstoppable decay. The park has become "churned mud, crisscrossed with tyre tracks", so something living has been replaced by the marks of machines, and the razor wire that "glinted dully in the grey half-light" joins a flash of light to dullness, suggesting a world where even the threat of harm has become routine.',
            },
            markScheme: [
              'Identifies relevant language features (metaphor, sensory detail, verb choices)',
              'Analyses the effect of specific words and phrases on the reader',
              'Comments on how language conveys decay and oppression',
              'Uses subject terminology accurately',
              'Embeds quotations effectively',
              'Uses only the third paragraph: an answer only about other parts of the source cannot go above Level 2',
            ],
          },
          {
            id: 'aqa-p1-06-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first line to its last.\n\nHow does the writer build tension through the way the source is structured?\n\nYou could write about how the source opens, where the writer moves your attention as it goes on and why, and how it ends. Link each point you make to tension.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer builds tension from the very first sentence, which tells us that the sirens had stopped and that this was "the most frightening thing of all". The rest of the first paragraph explains what each alarm meant, so we understand why the silence is so worrying. The focus then moves from the people of Sector Nine to Maren alone in the stairwell. We hear that "a door slammed", and footsteps echo up through the building and then stop, so we wait with her while she counts to thirty. The third paragraph slows things down as she feels her way along the dark corridor, which makes us wait even longer for something to happen. At the end the writer goes back to silence, "There was no sound now", just before Maren opens the door. The last sentence, "The hinges screamed", is short and sudden. The source stops there, so we never find out whether anyone heard, and the tension is left hanging.',
              'Grade 6-7':
                'The writer structures the source so that tension grows out of silence, and the silence is finally broken by a single sound.The opening sentence begins with an absence, "The sirens had not sounded for three days", and at once calls it "the most frightening thing of all", so the reader feels the threat before anything has happened. The rest of the paragraph explains the rules of the alarms. This seems to pause the story, but it teaches us to read silence as danger, and the two short, repeated sentences that close it narrow the focus from "the Authority" to "you", as if the reader were alone too. The second paragraph zooms in from the whole of Sector Nine to Maren, hiding against the stairwell wall. Sound enters for the first time with "a door slammed", and the footsteps that "echoed up through the building and then stopped" end on the most unsettling word, because we do not know where they stopped or why. Her counting to thirty stretches those seconds out. The third paragraph slows the pace further. Maren feels her way "by memory" along the dark corridor, and the view through the window widens to what was once a park, now mud ringed with razor wire. This delay makes the reader wait, and it shows that there is nowhere safe to run to. The last paragraph returns to the stairwell and to silence, "There was no sound now", which echoes the opening: the quiet that frightened the people at the start now surrounds Maren. Then the sentences shorten: "She pushed the door open. The hinges screamed." After so much silence the noise is a shock, and because the source ends at that moment, the reader is left at the height of the tension, not knowing who might have heard.',
            },
            markScheme: [
              'Reward points about structure that show how it builds tension, covering the source from its opening to its last sentence.',
              'Opening: the source begins with an absence, the silent sirens, and calls it "the most frightening thing of all"; explaining the alarms then teaches the reader to fear the silence.',
              'Shift of focus: from the people of Sector Nine to Maren alone in the stairwell, where a slammed door and footsteps that stop bring the threat close.',
              'Change of pace: the third paragraph slows down as Maren moves along the dark corridor, delaying what happens next and widening the view to a ruined park with no way out.',
              'Ending: a return to silence ("There was no sound now"), then short sentences and "The hinges screamed"; the source stops at that moment and leaves the tension unresolved.',
              'Retelling the events in order, or writing about single words rather than structure, stays in the lower levels: each point should link back to tension.',
            ],
          },
          {
            id: 'aqa-p1-06-q4',
            questionNumber: 4,
            questionText:
              'This question is about the last two paragraphs of the source, from "The corridor outside her apartment was dark" to the end.\n\nOne reader said: "In this part of the story, the writer creates a world without hope. Nothing that Maren sees or hears gives her any comfort."\n\nHow far do you agree or disagree with this view? You can agree, disagree or do some of both. Write about what happens in these paragraphs and the methods the writer uses, and support your view with evidence from these lines.',
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_DYSTOPIAN,
            extractSource: EXTRACT_DYSTOPIAN_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I mostly agree with the reader. The corridor is "dark" because the lights failed weeks ago and "no one came to fix them any more", which suggests that nobody cares about the people who live there. The park has become "a flat expanse of churned mud" with "coils of razor wire" round it, so even the view from the window looks like a prison. The only sound left is "the low, ceaseless hum of the generators", and the word "ceaseless" makes it sound as if it will never stop. However, I do not completely agree that there is no hope. Maren still knows her way and moves "by memory", and she is careful: she pauses at the door and looks through the glass before she goes on. She is brave enough to push the door open even though the stairs go down "into blackness". So the place seems hopeless, but Maren herself has not given up.',
              'Grade 6-7':
                'I agree that the place Maren moves through offers her no comfort, but I disagree that the writer creates a world entirely without hope, because hope survives in Maren herself. The setting is stripped of everything that might reassure her. The lights "had failed weeks ago, and no one came to fix them any more", and the words "any more" imply that people once did, so the reader senses a society that has given up on itself. Even the walls seem sick, with paint that "had blistered and peeled" and a "cold dampness" seeping through the plaster. The view from the window turns what "had once been the park" into mud "bordered by coils of razor wire": by placing a memory of something pleasant beside the wire that has replaced it, the writer makes the loss feel sharper. In the last paragraph the stairs descend "into blackness", and the only sound is "the low, ceaseless hum of the generators", where "ceaseless" suggests a machine that will outlast everyone. So far, the reader\'s view holds. Yet the writer keeps us close to Maren, and what she does tells a different story. She moves "by memory", trailing her fingertips along the wall, so she has learned this dark place well enough to cross it. At the door she "paused" and looks through the glass before she acts, which is caution, not despair, and the short sentence "She pushed the door open" shows her choosing to go on into the unknown. The final sentence, "The hinges screamed", threatens to give her away, so the source ends with danger rather than comfort, but it is a danger she has walked towards on purpose. I would say that the world is without comfort, as the reader says, but not without hope, because a character who keeps moving forward has not given up.',
            },
            markScheme: [
              'A clear judgement on the view: agreeing, disagreeing or doing some of both are all valid, if the case is argued from the last two paragraphs.',
              'Evidence for the view: lights that "no one came to fix", paint that had "blistered and peeled", the park turned to mud and razor wire, stairs "descending into blackness" and the ceaseless hum of the generators.',
              'Evidence against it: Maren moves "by memory", pauses and looks before she acts, and pushes the door open, so she has not given up.',
              'Methods: the choice of detail and imagery, the contrast between the park and what replaced it, the short sentences at the end, and a narrative that stays close to Maren.',
              'The strongest answers weigh the view, showing where the text supports it and where it does not. Evidence from the first two paragraphs does not answer this question.',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-06-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking your work. Write in full sentences.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-06-q5',
            questionNumber: 5,
            questionText:
              'Your town library is putting together a booklet of new writing by young people, to be given free to everyone who visits, adults and children alike. You have been asked to send in a piece.\n\nChoose one of these two tasks.\n\nEither:\nDescribe a city street late at night, when everyone else has gone home.\nOn the real paper a picture is printed here. It shows an empty city street at night, lit only by a single flickering streetlamp. You can use it for ideas, but you do not have to describe exactly what it shows.\n\nOr:\nWrite the opening of a story about someone who breaks a rule. You do not need to finish the story.\n\nThis question is worth 40 marks: 24 for what you write and how you organise it, and 16 for accurate sentences, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                "A Grade 4-5 response to either task does what the task asks and keeps the library's readers, adults and children, in mind. It uses some well-chosen vocabulary and a few techniques, such as simile and details of light and sound, and it is organised in paragraphs with some links between them. A story opening sets up a character and a rule worth breaking. Its sentences are mostly accurate, with some variety in length, and some punctuation beyond full stops and commas is used correctly.",
              'Grade 6-7':
                "The description\n\nAt two o'clock in the morning, Carver Street belongs to no one.\n\nThe shops have pulled down their shutters like heavy eyelids. The café on the corner has stacked its chairs on the tables, legs in the air, as if they had given up waiting for customers and fallen asleep where they stood. Above the bakery a window is open a crack, and a curtain breathes in and out, in and out, as slow as a sleeper.\n\nHalfway along, a single streetlamp is doing its best. It flickers. Its light stutters on, holds for a moment, then fails again, so that the pavement beneath it appears and disappears like a stage between scenes. When it shines, every puddle turns to hammered copper. When it dies, the dark rushes in from the edges, and the street seems to hold its breath until the lamp remembers what it is for.\n\nThe silence here is not empty. It is made of small sounds that the daytime drowns: the hum of a fridge behind the newsagent's window, the tick of cooling metal on a parked van, the faraway sigh of the ring road, where a lorry is carrying somebody else's breakfast to another town. A sheet of newspaper slides along the gutter, pauses, and slides again, as though it is looking for an address it cannot find.\n\nThen a fox steps out of the alley beside the launderette. It is thinner than I expected, its coat the colour of rust and embers, and it moves with the calm confidence of a landlord inspecting his property. It stops beneath the flickering lamp and looks straight at me. For three beats of the light we are both lit, both caught, both strangers in a place that does not really belong to us. Then it trots on, unhurried, and the dark folds around it.\n\nI notice the smells now. Wet stone. Diesel. The sweet, warm ghost of bread from the bakery, where the first loaves are already rising in their tins. The street is not dead at all. It is resting, the way a person rests between one long day and the next.\n\nAt the far end, above the rooftops, the sky has begun to change. It is not light yet, only a thinning of the black into a deep, bruised blue. The streetlamp gives one last stammer and then, as if it has made up its mind, holds steady: a small gold circle on the wet pavement.\n\nSoon the shutters will rattle up and the chairs will come down. Buses will groan round the corner, and Carver Street will fill with footsteps and voices and the ordinary hurry of the day. Nobody will think about the fox, or the curtain, or the lamp that kept watch all night. But for now, for a few more minutes, the street and I are keeping its secrets together.",
            },
            markScheme: [
              'AO5, content and organisation (24 marks): writing that does what the chosen task asks and suits its readers, visitors to a town library, adults and children alike. Writing that does not address the task cannot score more than 12 of these 24 marks.',
              'AO5: vocabulary and techniques chosen for effect, and a shaped piece, with a strong opening, paragraphs that move the reader on, changes of pace and a deliberate ending or stopping point.',
              'The description: the picture is there for ideas only. A description need not show exactly what it shows, and listing its contents one by one is not what the task asks.',
              'The story: the task asks for an opening, so the story need not be finished. Reward a gripping start and a clear sense of where it might go.',
              'AO6, technical accuracy (16 marks): sentences that begin and end in the right place, a range of punctuation used accurately, a variety of sentence types for effect, ambitious vocabulary spelt correctly, and Standard English throughout.',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 7 - Historical Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-07',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-07-reading',
        title: 'Section A: Reading',
        description: `Read the source below, then answer all four questions in this section. Allow about 15 minutes to read the source and the questions, and about 45 minutes to answer them.\n\nSource: ${EXTRACT_HISTORICAL_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-07-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText:
              'Look again at the first paragraph of the source, from "The ship tilted violently" to "the low ceiling."\n\nQuestion 1 has four parts, 1.1 to 1.4. Each asks about one detail in that paragraph and gives three answers, A, B and C, only one of which is right. Choose one letter for each part, and write it next to the part number.\n\n1.1 What is the ship doing as the source opens?\nA) Lying calmly at anchor\nB) Leaning sharply over to one side\nC) Sinking beneath the waves\n\n1.2 How is Martha holding on?\nA) With one hand, to a beam above her\nB) By clinging to the woman next to her\nC) With both hands, so tightly that her knuckles turn pale\n\n1.3 What happens to the other women\'s cries?\nA) They are lost at once in the noise of the ship and the sea\nB) They go on for a long time\nC) They stop when the lamp goes out\n\n1.4 How does the lamp move?\nA) It hangs perfectly still\nB) It falls from its hook\nC) It swings to and fro in wide curves, making shadows leap across the ceiling',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 B, 1.2 C, 1.3 A, 1.4 C.\n\n1.1 B: "The ship tilted violently to starboard".\n1.2 C: Martha "grabbed the edge of the bunk with both hands, her knuckles white".\n1.3 A: the cries were "swallowed immediately by the groan of the timbers and the thunderous crash of water against the hull".\n1.4 C: the lamp "swung in wide, sickening arcs, throwing wild shadows across the low ceiling".',
              'Grade 6-7':
                '1.1 B, 1.2 C, 1.3 A, 1.4 C.\n\n1.1 B: "The ship tilted violently to starboard", so it is leaning hard to one side. Nothing in the paragraph says that it is at anchor or sinking.\n1.2 C: she "grabbed the edge of the bunk with both hands, her knuckles white against the rough wood". A uses the word "beam", but the beam is where the lamp hangs.\n1.3 A: the cries were "swallowed immediately" by the groan of the timbers and the crash of the water, so they did not go on.\n1.4 C: the lamp "swung in wide, sickening arcs, throwing wild shadows across the low ceiling". It neither hangs still nor falls, and since it throws shadows, it has not gone out either.',
            },
            markScheme: [
              '1.1 B: "The ship tilted violently to starboard".',
              '1.2 C: she held the bunk "with both hands, her knuckles white"; the beam in A is where the lamp hangs.',
              '1.3 A: the cries were "swallowed immediately" by the noise of the timbers and the water.',
              '1.4 C: the lamp "swung in wide, sickening arcs", throwing shadows across the ceiling.',
              'One mark for each part answered with the right letter, 4 marks in all. The paper asks for one letter in each part.',
            ],
          },
          {
            id: 'aqa-p1-07-q2',
            questionNumber: 2,
            questionText:
              'Look closely at the second paragraph of the source, from "They had been at sea for forty-seven days" to "the ocean itself."\n\nHow does the writer use language in this paragraph to show what the long voyage has been like for Martha?\n\nYou could comment on single words and phrases, on techniques such as imagery, and on how the sentences are shaped. Use only this paragraph in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the number "forty-seven days" to show how long and difficult the journey has been. Martha scratches marks into the bunk "each morning", which shows routine and monotony. The list of smells, "unwashed bodies", "damp wool" and "vinegar", uses sensory language to make us imagine the unpleasant conditions. The phrase "grey, heaving blur" describes how time has lost its meaning. The word "ancient" to describe the smell of the ocean makes the sea seem powerful and timeless.',
              'Grade 6-7':
                'The writer presents the voyage as an experience in which time and the senses dissolve. The precise detail "forty-seven days" contrasts sharply with the metaphor "a grey, heaving blur of nausea and confinement", setting Martha\'s careful counting against time\'s refusal to be measured in any way that matters. Her scratching of marks into the wood is a ritual of survival, and "her only anchor" is a nautical metaphor that ironically ties her sense of time to the very vessel that imprisons her. The list of smells, "unwashed bodies", "damp wool" and "vinegar", builds up claustrophobically, each smell layered on the last, before the final phrase "the deep, salty, ancient smell of the ocean itself" changes the tone entirely. The three adjectives raise the ocean from a setting to something almost sacred, and "ancient" gives it a permanence that dwarfs human suffering. The paragraph opens with a short, flat statement of fact and ends on its longest sentence, a list of smells built on the repeated "of" that goes on even "beneath it all", and that length mirrors the relentlessness of the experience, denying the reader any respite, just as the voyage denies Martha.',
            },
            markScheme: [
              'Identifies relevant language features (listing, metaphor, sensory detail)',
              'Analyses the effect of specific words and phrases',
              'Comments on how language conveys monotony, discomfort, and endurance',
              'Uses subject terminology accurately',
              'Embeds quotations rather than bolting them on',
              'Uses only the second paragraph: an answer only about other parts of the source cannot go above Level 2',
            ],
          },
          {
            id: 'aqa-p1-07-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first line to its last.\n\nHow does the writer create a sense of being trapped through the way the source is structured?\n\nYou could write about how the source opens, where the writer moves your attention as it goes on and why, and how it ends. Link each point you make to the sense of being trapped.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer makes us feel trapped from the start by putting us straight into the storm, "in the darkness of the hold", where the women\'s cries are "swallowed immediately". The second paragraph moves away from the action to tell us that they have been at sea for "forty-seven days". Martha has scratched a mark for each day, like a prisoner counting the days in a cell, which shows how long she has been shut in. The third paragraph focuses on the women nearest to her, one in the bunk below and one across the narrow aisle, so we never see anything outside the hold. At the end Martha closes her eyes and thinks about home. This is the only way she can escape, and it is only in her head. The last sentence, "She thought of solid, unmoving ground", reminds us that she is still on the moving ship, so the source ends with her still trapped.',
              'Grade 6-7':
                'The writer structures the source so that the reader is shut inside the ship\'s hold with Martha from the first line to the last. The opening drops us into a storm without explanation: the ship "tilted violently", Martha grips her bunk, and we are placed "in the darkness of the hold", where the women\'s cries are "swallowed immediately". Even sound cannot escape, and the "low ceiling" closes the scene in from above. The second paragraph changes the pace. The action stops and the focus moves to time: "They had been at sea for forty-seven days." This short statement reveals that the storm is only one moment in a long confinement, and the mark Martha scratches "each morning" makes her sound like a prisoner counting days in a cell. The paragraph\'s longest sentence then piles smell upon smell, "of unwashed bodies, of damp wool, of the vinegar", so the reader, like Martha, is given no fresh air. In the third paragraph the focus narrows to the people nearest her, the woman in the bunk below and Mrs Garrick across the narrow aisle. Each shows a way of enduring a place that cannot be left, one in prayer and one in stillness, and the reader\'s view never rises above the deck. The final paragraph turns inward. Martha "closed her eyes", and the first two of three sentences that begin "She thought of" carry her home to a kitchen, a cat and her mother\'s hands. This is the only escape the structure allows, and it happens in her mind alone. The last sentence, "She thought of solid, unmoving ground", names the one thing she does not have, so the ending sends the reader back to the heaving ship. The source ends with no arrival and no rescue, and the sense of being trapped is complete.',
            },
            markScheme: [
              'Reward points about structure that show how it creates a sense of being trapped, covering the source from its opening to its last sentence.',
              'Opening: the reader is dropped into the storm, "in the darkness of the hold", where even the cries are "swallowed immediately".',
              'Change of pace and focus: the action stops for time and routine, forty-seven days and a mark scratched each morning, showing how long the confinement has lasted; the long list of smells gives the reader no relief.',
              'Narrowing focus: the third paragraph shows only the people nearest Martha, and the view never leaves the hold.',
              'Ending: Martha escapes only in her mind, through three sentences beginning "She thought of"; her last thought, of "solid, unmoving ground", sends the reader back to the ship, and there is no arrival.',
              'Retelling the events in order, or writing about single words rather than structure, stays in the lower levels: each point should link back to the sense of being trapped.',
            ],
          },
          {
            id: 'aqa-p1-07-q4',
            questionNumber: 4,
            questionText:
              'This question is about the last two paragraphs of the source, from "The woman in the bunk below hers" to the end.\n\nA reader wrote: "In these paragraphs, Martha escapes the misery of the voyage by thinking of home."\n\nHow far do you agree or disagree with this view? You can agree, disagree or do some of both. Write about what happens in these paragraphs and the methods the writer uses, and support your view with evidence from these lines.',
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_HISTORICAL,
            extractSource: EXTRACT_HISTORICAL_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. In the last paragraph Martha "closed her eyes" and thinks of "the kitchen at home", with "the kettle on the range" and "the cat sleeping in the chair by the window". These are warm, safe, ordinary things, so for a moment she does escape the dark, crowded hold. Thinking of "her mother\'s hands kneading bread" brings someone who loves her into her mind. However, I do not think she escapes completely. Just before this, the writer shows the woman below her praying in a language Martha does not know, and Mrs Garrick lying "perfectly still with her eyes open", so the misery of the voyage is all around her. Also, the last thing she thinks of is "solid, unmoving ground". She only thinks of this because the ship is moving under her, so even her escape reminds her of where she really is. She escapes in her mind, but her body is still trapped on the ship.',
              'Grade 6-7':
                'I agree that Martha\'s thoughts of home are an escape, but I think the writer makes it a fragile and incomplete one, so the misery of the voyage is never really left behind. The escape is set up by contrast. The third paragraph surrounds Martha with other people\'s ways of enduring the voyage: the woman below her is praying in "a low, rapid murmur" in a language Martha cannot understand, and Mrs Garrick lies "perfectly still" with "an expression of absolute calm", only staring at the ceiling. Neither offers Martha any company, so when she "closed her eyes" the reader understands why. What she pictures is ordered and still: "the scrubbed table", "the kettle on the range" and "the cat sleeping in the chair by the window". The list moves slowly from object to object, and the sleeping cat in particular brings a peace that nothing on the ship has. Her thought of "her mother\'s hands kneading bread" adds warmth, care and steady work. To this extent the reader is right: for three sentences she is somewhere else. Yet the writer\'s structure undercuts the escape. Each memory comes in a sentence beginning "She thought of", and the repetition makes her effort to hold on to home feel deliberate, almost desperate, rather than restful. Her last thought is not of a room at all but of "solid, unmoving ground", a phrase that only makes sense beside the heaving ship, so the voyage breaks into the very thought that was meant to shut it out. Her eyes are closed, but the ground beneath her is still moving. I agree that she escapes, then, but only in her mind and only for a moment, and the writer makes the reader feel the distance between where she is and where she longs to be.',
            },
            markScheme: [
              'A clear judgement on the view: agreeing, disagreeing or doing some of both are all valid, if the case is argued from the last two paragraphs.',
              'Evidence for the view: Martha "closed her eyes" and pictures a warm, ordered home, the scrubbed table, the kettle, the sleeping cat and her mother\'s hands kneading bread, a world away from the hold.',
              'Evidence against it: the third paragraph keeps her among others enduring the voyage; the repeated "She thought of" makes the escape an effort; and her last thought, of "solid, unmoving ground", reminds the reader of the ship.',
              'Methods: the contrast between the hold and the kitchen, the list of homely details, the repeated opening "She thought of", and an ending that returns to the voyage.',
              'The strongest answers weigh the view rather than simply agreeing. Evidence from the first two paragraphs does not answer this question.',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-07-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking your work. Write in full sentences.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-07-q5',
            questionNumber: 5,
            questionText:
              'A museum in a harbour town is planning an exhibition about journeys. It will print short pieces of writing by young people on its walls, for families to read as they walk round, and you have been invited to write one.\n\nChoose one of these two tasks.\n\nEither:\nDescribe a harbour early in the morning, when the tide is out.\nOn the real paper a picture is printed here. It shows an old harbour at dawn, with fishing boats resting on the mud at low tide. You can use it for ideas, but you do not have to describe exactly what it shows.\n\nOr:\nWrite the opening of a story about a journey that changes everything. You do not need to finish the story.\n\nThis question is worth 40 marks: 24 for what you write and how you organise it, and 16 for accurate sentences, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A Grade 4-5 response to either task does what the task asks and remembers that families will read it on a museum wall. It uses some well-chosen vocabulary and a few techniques, such as simile and sensory detail, and it is organised in paragraphs with some links between them. A story opening makes clear who is travelling and hints at how the journey might change things. Its sentences are mostly accurate, with some variety in length, and some punctuation beyond full stops and commas is used correctly.',
              'Grade 6-7':
                "The story opening\n\nThe ferry left at six, and by ten past, the only home Nadia had ever known was a grey smudge on the horizon.\n\nShe stood at the back rail with her rucksack still on her shoulders, as though she might need to run for it. Beneath her feet the deck shivered with the engine's steady growl. Gulls hung above the wake, white and weightless, crying to one another in voices that sounded almost human. The wind tasted of salt and diesel, and it dragged her hair across her face until she gave up pushing it away.\n\nHer mother had gone inside as soon as they cast off, to the café with its plastic chairs and its smell of burnt toast, but Nadia could not bring herself to follow. Down there, everything would feel real. Up here, with the island shrinking to nothing behind her, she could still pretend that this was a day trip, and that by teatime she would be back in her own bedroom, with the window that stuck and the poster that would never stay up in one corner.\n\nIt was not a day trip. Everything they owned was packed into eleven boxes in the back of a van that had gone ahead on the early boat. Eleven boxes. Nadia had counted them twice, because it did not seem possible that fourteen years could be folded so small.\n\nThe sea changed colour as they moved further out. Near the harbour it had been the dull green of old glass; now it was a deep, restless blue, scattered with flashes of light whenever the sun broke through. A boy of about her own age was leaning on the rail a few metres away, sketching the waves in a battered notebook. Every so often he glanced up, frowned at the water as if it were refusing to keep still for him, and went back to his pencil.\n\nNadia looked away. She had not come to make friends. She had come because there had been no choice, and she intended to spend the whole of the journey, and possibly the whole of the next year, being quietly and determinedly miserable.\n\nThen the boy's notebook slipped.\n\nIt happened in a second. A gust caught the pages, and the book leapt from his hands, skidded across the wet deck and came to rest against her trainer, flapping like a trapped bird. She bent to pick it up without thinking. On the open page was the island, her island, drawn in quick, sure lines: the lighthouse, the harbour wall, the row of white cottages and, in a window halfway along, a tiny figure looking out to sea.\n\nIt was her house. It was her window.\n\nShe looked up. The boy was already walking towards her, and he did not look surprised at all.",
            },
            markScheme: [
              'AO5, content and organisation (24 marks): writing that does what the chosen task asks and suits its readers, families reading it on the walls of a museum. Writing that does not address the task cannot score more than 12 of these 24 marks.',
              'AO5: vocabulary and techniques chosen for effect, and a shaped piece, with a strong opening, paragraphs that move the reader on, changes of pace and a deliberate ending or stopping point.',
              'The description: the picture is there for ideas only. A description need not show exactly what it shows, and listing its contents one by one is not what the task asks.',
              'The story: the task asks for an opening, so the story need not be finished. Reward a gripping start and a clear sense of where the journey might lead.',
              'AO6, technical accuracy (16 marks): sentences that begin and end in the right place, a range of punctuation used accurately, a variety of sentence types for effect, ambitious vocabulary spelt correctly, and Standard English throughout.',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 8 - Crime Noir
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-08',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-08-reading',
        title: 'Section A: Reading',
        description: `Read the source below, then answer all four questions in this section. Allow about 15 minutes to read the source and the questions, and about 45 minutes to answer them.\n\nSource: ${EXTRACT_CRIME_NOIR_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-08-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText:
              'Look again at the first two paragraphs of the source, from "Rain hammered the windscreen" to "refused to be forgotten."\n\nQuestion 1 has four parts, 1.1 to 1.4. Each asks about one detail in those paragraphs and gives three answers, A, B and C, only one of which is right. Choose one letter for each part, and write it next to the part number.\n\n1.1 Where is Nolan while he waits?\nA) Just inside the entrance to the warehouse\nB) In a parked car on the other side of the street\nC) In the doorway beneath the neon sign\n\n1.2 What is the light from the sign like?\nA) It flickers, giving off an unhealthy-looking pink\nB) It is a steady pink glow\nC) It is a harsh white glare\n\n1.3 What does Nolan do with his coffee?\nA) He leaves it untouched on the dashboard\nB) He pours it away\nC) He drinks it, even though it tastes unpleasant\n\n1.4 What do these paragraphs tell you about Nolan\'s left knee?\nA) He hurt it climbing out of the car that night\nB) An old injury still makes it ache\nC) It stopped hurting after last November',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 B, 1.2 A, 1.3 C, 1.4 B.\n\n1.1 B: "Nolan sat in the car with the engine off, watching the entrance to the warehouse across the street."\n1.2 A: the sign "buzzed and flickered, casting a sickly pink glow".\n1.3 C: "He picked it up anyway and drank, grimacing at the bitter, lukewarm taste."\n1.4 B: his left knee, "the one he had twisted in the fall last November", still "throbbed".',
              'Grade 6-7':
                '1.1 B, 1.2 A, 1.3 C, 1.4 B.\n\n1.1 B: Nolan "sat in the car with the engine off", watching the warehouse "across the street". A uses the words "entrance" and "warehouse", but he is watching the entrance, not waiting inside it.\n1.2 A: the sign "buzzed and flickered, casting a sickly pink glow". B is wrong because the light flickers, so it is not steady.\n1.3 C: "He picked it up anyway and drank", grimacing at the taste. The cup was on the dashboard, but he does not leave it there.\n1.4 B: the knee he "had twisted in the fall last November" still "throbbed", so it is an old injury that still hurts. He has not left the car, and the knee has not stopped hurting.',
            },
            markScheme: [
              '1.1 B: Nolan "sat in the car with the engine off", watching the warehouse "across the street".',
              '1.2 A: the sign "buzzed and flickered, casting a sickly pink glow", so it is not steady.',
              '1.3 C: "He picked it up anyway and drank", grimacing at the taste.',
              '1.4 B: the knee "he had twisted in the fall last November" still throbbed.',
              'One mark for each part answered with the right letter, 4 marks in all. The paper asks for one letter in each part.',
            ],
          },
          {
            id: 'aqa-p1-08-q2',
            questionNumber: 2,
            questionText:
              'Look closely at the last two paragraphs of the source, from "A car turned into the street" to the end.\n\nHow does the writer use language in these paragraphs to create suspense and a sense of menace?\n\nYou could comment on single words and phrases, on techniques such as imagery, and on how the sentences are shaped. Use only these two paragraphs in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates suspense by describing the car as having "no plates", which suggests criminal activity. The phrase "For a long moment, nothing happened" builds tension by making us wait. The man looks "up and down the street with the practised alertness of someone who had spent a lifetime checking for watchers", which shows that he is experienced and secretive. The holdall is described as "heavy", which makes us wonder what is inside. The short final sentence, "The street was empty again", creates an eerie sense of disappearance.',
              'Grade 6-7':
                'The writer creates suspense through a language of concealment and deliberate omission. The car is described through negation, "no plates", which defines it by what is missing and at once suggests that someone wants it to go untraced. The sentence "For a long moment, nothing happened" is tense precisely because of its emptiness: "long" stretches the "moment" uncomfortably, so the reader waits along with Nolan. The man\'s collar is "turned up", a detail that is both practical in the rain and a sign of concealment. The phrase "practised alertness" is revealing, because "practised" implies repetition, a life lived in habitual suspicion. The aside about the holdall, "heavy, from the way he adjusted his grip", shows Nolan\'s watchful eye at work: we learn about the object only by inference, as he does. The final three sentences are short, plain statements with no figurative language at all: "He stepped inside. The door closed behind him. The street was empty again." Their bareness leaves the reader with nothing to hold on to, and the scene closes as cleanly as the warehouse door.',
            },
            markScheme: [
              'Identifies relevant language features (short sentences, negation, detail)',
              'Analyses how specific words create suspense and imply criminality',
              'Comments on how language creates atmosphere through omission and inference',
              'Uses subject terminology accurately',
              'Embeds quotations effectively within analysis',
              'Uses only the last two paragraphs: an answer only about other parts of the source cannot go above Level 2',
            ],
          },
          {
            id: 'aqa-p1-08-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first line to its last.\n\nHow does the writer create a sense of mystery through the way the source is structured?\n\nYou could write about how the source opens, where the writer moves your attention as it goes on and why, and how it ends. Link each point you make to the sense of mystery.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'From the start the writer makes us ask questions. Nolan is "watching the entrance to the warehouse", but we are never told why he is there, only that he has been waiting "for two hours". The second paragraph focuses on small details about Nolan, his cold coffee and his aching knee, which makes us wait longer without finding anything out. In the third paragraph the focus changes when a car arrives. It has "no plates", so we cannot tell whose it is, and then "For a long moment, nothing happened", which keeps us waiting. In the last paragraph we see the man only from the outside, through Nolan\'s eyes. We never learn his name or what is in the "heavy" holdall. The last sentence, "The street was empty again", takes us back to the empty street of the opening, so the source ends with all the questions still unanswered.',
              'Grade 6-7':
                'The writer builds mystery by giving the reader a great deal to look at and almost nothing to explain it. The source opens in the middle of a situation: Nolan is already "watching the entrance to the warehouse" and has "been waiting for two hours", yet we are never told what he is waiting for. The neon sign, "PACIFIC STORAGE", names the building without saying what is stored there, so the first question is planted before any action begins. The second paragraph turns inward, to cold coffee, an aching neck and a knee twisted "in the fall last November". These details delay the action and hint at a past that is never explained, so even the watcher is a mystery. The turning point comes in the third paragraph, when a car arrives and Nolan "slid lower in his seat". His need to hide raises a new question, and the car itself is defined by what it lacks: "no plates". At the very moment the reader expects answers, the writer inserts a pause: "For a long moment, nothing happened." The final paragraph is limited to what Nolan can see. The man is described only from the outside, with his collar "turned up" and the "practised alertness" of someone checking for watchers, and the holdall is "heavy", though we never learn why. A string of short sentences then closes every door at once: "He stepped inside. The door closed behind him. The street was empty again." That ending returns the street to the emptiness of the opening, so the structure is circular, but the reader now holds more questions than at the start: who the man is, what he carried and why Nolan is watching.',
            },
            markScheme: [
              'Reward points about structure that show how it creates mystery, covering the source from its opening to its last sentence.',
              'Opening: the source begins in the middle of a watch. Nolan has waited two hours, but his purpose is never given, and the sign names the building without explaining it.',
              "Delay: the second paragraph turns to Nolan's discomforts and an unexplained past injury, holding back the action and keeping his purpose hidden.",
              'Turning point: the car arrives and Nolan hides; the car has "no plates", and "For a long moment, nothing happened" withholds what the reader expects.',
              'Ending and viewpoint: the man is seen only from outside, through what Nolan can see; short sentences close the scene, and the empty street echoes the opening, leaving every question open.',
              'Retelling the events in order, or writing about single words rather than structure, stays in the lower levels: each point should link back to mystery.',
            ],
          },
          {
            id: 'aqa-p1-08-q4',
            questionNumber: 4,
            questionText:
              'This question is about the last two paragraphs of the source, from "A car turned into the street" to the end.\n\nOne reader\'s view is: "In this part of the story, everything about the man makes him seem dangerous."\n\nHow far do you agree or disagree with this view? You can agree, disagree or do some of both. Write about what happens in these paragraphs and the methods the writer uses, and support your view with evidence from these lines.',
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_CRIME_NOIR,
            extractSource: EXTRACT_CRIME_NOIR_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I mostly agree. The car the man arrives in has "no plates", which makes it sound as if he does not want to be traced. He wears a coat with "the collar turned up", as if he is hiding his face, and he looks "up and down the street" like "someone who had spent a lifetime checking for watchers". This makes him seem like a criminal who is used to being careful. The holdall is "heavy", and because we do not know what is inside it, we imagine the worst. Nolan "slid lower in his seat" when the car arrived, which shows that even he is wary of the man. However, the man does not actually do anything violent. He "did not knock" because he knows the code, and the door opens "with a soft click", which sounds calm and ordinary. So I think the writer makes him seem dangerous through what is hinted at, not through what he does.',
              'Grade 6-7':
                'I agree that the man seems dangerous, but I would argue that the writer creates this impression almost entirely through suggestion, and that a careful reader can see how little he actually does. The danger begins before he appears. Nolan "slid lower in his seat" as the car arrived, so the reader takes a cue from a character who clearly fears being seen. The car is then defined by what it lacks, "no plates", and the pause "For a long moment, nothing happened" makes the reader expect the worst. When the man steps out he is called only "a figure", and even his description conceals him: the "dark overcoat" with "the collar turned up" hides his face, and the "practised alertness of someone who had spent a lifetime checking for watchers" suggests a life spent avoiding notice. The word "lifetime" makes his caution sound like a habit, which is more unsettling than a single nervous glance. The holdall, "heavy, from the way he adjusted his grip", is left unexplained, so the reader fills the gap with their own fears. In these ways I agree with the view. However, every action the man takes is calm and ordinary. He "did not knock", but only because he knows the code; the door opens "with a soft click", and he simply walks inside. Nothing he does is violent, and he could be the owner of the warehouse working late. The sense of danger comes from the way the writer filters everything through Nolan\'s suspicious watching, and from what is withheld. So I agree that he seems dangerous, but the writer\'s real skill is to make the reader supply that danger, which is why the final image, "The street was empty again", feels more unsettling than any act of violence would.',
            },
            markScheme: [
              'A clear judgement on the view: agreeing, disagreeing or doing some of both are all valid, if the case is argued from the last two paragraphs.',
              'Evidence for the view: Nolan hides as the car arrives; the car has "no plates"; the man\'s turned-up collar and "practised alertness"; the unexplained, heavy holdall.',
              'Evidence against it: nothing he does is violent; he uses a code, the door opens "with a soft click", and he could have every right to be there.',
              'Methods: a scene seen only through what Nolan notices, the pause before the man appears, details that suggest more than they state, and the short sentences at the end.',
              'The strongest answers weigh the view, showing how the writer makes the reader supply the danger. Evidence from the first two paragraphs does not answer this question.',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-08-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking your work. Write in full sentences.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-08-q5',
            questionNumber: 5,
            questionText:
              "Your school is publishing a magazine of suspense writing, which will go home to students' families, and the editor has asked you for a piece.\n\nChoose one of these two tasks.\n\nEither:\nDescribe a city alleyway on a rainy night.\nOn the real paper a picture is printed here. It shows a rain-soaked city alleyway at night, with a single figure walking away from the camera. You can use it for ideas, but you do not have to describe exactly what it shows.\n\nOr:\nWrite the opening of a story about someone who sees something they were not meant to see. You do not need to finish the story.\n\nThis question is worth 40 marks: 24 for what you write and how you organise it, and 16 for accurate sentences, spelling and punctuation.",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                "A Grade 4-5 response to either task does what the task asks and keeps the magazine's readers, students and their families, in mind. It uses some well-chosen vocabulary and a few techniques, such as simile and details of sound and light, and it creates some tension or mystery. It is organised in paragraphs with some links between them. Its sentences are mostly accurate, with some variety in length, and some punctuation beyond full stops and commas is used correctly.",
              'Grade 6-7':
                "The description\n\nRain has been falling on Cooper's Lane since teatime, and by midnight the alley has given up trying to stay dry.\n\nIt runs between the backs of two old buildings, so narrow that a tall person could almost touch both walls at once. The brickwork is dark with water and streaked with green where the gutters have overflowed for years. High above, a broken drainpipe pours a steady silver rope onto the cobbles, and the sound of it, a hollow, endless drumming, fills the whole length of the lane.\n\nThe cobbles themselves have become a mirror. Every light is doubled in them: the yellow square of a kitchen window three floors up, the red glow of an exit sign, the cold blue flicker of a television in a flat where someone cannot sleep. When a drop lands, the reflection shivers and breaks, then gathers itself together again, as patient as a puzzle that solves itself.\n\nThere are smells down here that the high street never admits to. Wet cardboard, softening in a doorway. Old chip fat from the vent behind the takeaway. Something green and earthy, too, from the weeds that have pushed up between the stones, as if the alley were slowly and quietly turning back into a field.\n\nAnd there is a figure.\n\nHe is walking away from me, towards the far end, where the lane opens onto the high street and its smeared orange lights. His coat is long and dark, his collar is up and his hands are deep in his pockets. He does not hurry. He does not look back. Each step lands with a small, flat splash, and the sound seems to arrive a moment after the step, as though the alley were repeating everything he does a little too late.\n\nI do not know who he is. Perhaps he is a baker on his way to an early shift, or a nurse going home from a long one. Perhaps he has simply been out walking because the rain helps him think. The alley gives nothing away. It keeps its secrets the way it keeps its puddles, in hollows that no one bothers to look into.\n\nAt the corner he pauses, a dark shape against the brightness. For a moment he seems to be listening to something only he can hear. Then he turns left and is gone, and the space where he stood fills up with rain.\n\nThe drainpipe goes on drumming. The reflections go on shivering and mending. Somewhere above me a window closes, and the blue light of the television goes out. Cooper's Lane settles back into itself, wet and watchful, waiting for the next person who needs a quicker way home.",
            },
            markScheme: [
              'AO5, content and organisation (24 marks): writing that does what the chosen task asks and suits its readers, students and their families reading a school magazine. Writing that does not address the task cannot score more than 12 of these 24 marks.',
              'AO5: vocabulary and techniques chosen for effect, and a shaped piece, with a strong opening, paragraphs that move the reader on, changes of pace and a deliberate ending or stopping point.',
              'The description: the picture is there for ideas only. A description need not show exactly what it shows, and listing its contents one by one is not what the task asks.',
              'The story: the task asks for an opening, so the story need not be finished. Reward a gripping start and a clear sense of where it might go.',
              'AO6, technical accuracy (16 marks): sentences that begin and end in the right place, a range of punctuation used accurately, a variety of sentence types for effect, ambitious vocabulary spelt correctly, and Standard English throughout.',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 9 - Magical Realism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-09',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-09-reading',
        title: 'Section A: Reading',
        description: `Read the source below, then answer all four questions in this section. Allow about 15 minutes to read the source and the questions, and about 45 minutes to answer them.\n\nSource: ${EXTRACT_MAGICAL_REALISM_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-09-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText:
              'Look again at the first paragraph of the source, from "On the morning of her sixty-third birthday" to "the soles of her slippers."\n\nQuestion 1 has four parts, 1.1 to 1.4. Each asks about one detail in that paragraph and gives three answers, A, B and C, only one of which is right. Choose one letter for each part, and write it next to the part number.\n\n1.1 When did Alma find out that she could hear colours?\nA) On the morning she turned sixty-three\nB) At lunchtime, out in the garden\nC) On the evening before her birthday\n\n1.2 Where did the first sound come from?\nA) The sunflowers in the garden\nB) Some flowers on her kitchen windowsill\nC) The earth beneath her feet\n\n1.3 What does the lavender sound like?\nA) Deep and booming, like a tuba\nB) A warm hum, like a purring cat\nC) A soft, high singing voice\n\n1.4 How does Alma become aware of the sound of the earth?\nA) She hears it through an open window\nB) She feels it coming up through the bottom of her slippers\nC) She sees the brown soil tremble',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 A, 1.2 B, 1.3 C, 1.4 B.\n\n1.1 A: "On the morning of her sixty-third birthday, Alma Reyes discovered that she could hear colours."\n1.2 B: "It began with the geraniums on the kitchen windowsill".\n1.3 C: "The lavender whispered in a silvery soprano."\n1.4 B: the drone "seemed to vibrate up through the soles of her slippers".',
              'Grade 6-7':
                '1.1 A, 1.2 B, 1.3 C, 1.4 B.\n\n1.1 A: it happened "On the morning of her sixty-third birthday". B uses the words "lunchtime" and "garden", but by lunchtime the whole garden was already singing, so the discovery came earlier.\n1.2 B: "It began with the geraniums on the kitchen windowsill". The sunflowers and the earth come later in the paragraph.\n1.3 C: "The lavender whispered in a silvery soprano": a whisper is soft, and a soprano is a high voice. The booming tubas are the sunflowers, and the purring hum is the geraniums.\n1.4 B: the drone of the earth "seemed to vibrate up through the soles of her slippers", so she feels it. C uses the word "brown", but nothing is seen to move.',
            },
            markScheme: [
              '1.1 A: it happened "On the morning of her sixty-third birthday"; by lunchtime the whole garden was singing, so B is a later moment.',
              '1.2 B: "It began with the geraniums on the kitchen windowsill".',
              '1.3 C: "The lavender whispered in a silvery soprano"; the tubas are the sunflowers and the purring hum is the geraniums.',
              '1.4 B: the drone of the earth "seemed to vibrate up through the soles of her slippers"; nothing is seen to move.',
              'One mark for each part answered with the right letter, 4 marks in all. The paper asks for one letter in each part.',
            ],
          },
          {
            id: 'aqa-p1-09-q2',
            questionNumber: 2,
            questionText:
              'Look closely at the third paragraph of the source, from "The fig tree\'s leaves" to "since the day it was planted."\n\nHow does the writer use language in this paragraph to describe what Alma hears in the fig tree?\n\nYou could comment on single words and phrases, on techniques such as imagery, and on how the sentences are shaped. Use only this paragraph in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer compares the colour of the leaves to "old jade", which makes them sound precious and beautiful. The word "harmonies" compares the tree to music, which links to the idea of hearing colours. The phrase "tears prick her eyes" shows that the experience is overwhelming and emotional. The writer says it was "as though the tree were improvising a symphony", a simile suggesting the music is complex and beautiful. The long sentence structure mirrors the flowing, continuous nature of the sound.',
              'Grade 6-7':
                'The writer uses synaesthesia as both subject and technique in this paragraph, blurring the boundaries between the senses to convey an experience beyond ordinary perception. The leaves are "the colour of old jade": the adjective "old" gives the colour depth in time, suggesting not merely green but green that has aged and deepened. The musical vocabulary is precisely chosen. The phrase "harmonies so complex" raises the natural world to the status of art, while the difference between each leaf\'s single note and the chord they make together mirrors the idea of a whole that is greater than its parts. The personification of the tree as an improviser is significant: "improvising" implies spontaneity and intelligence, giving the fig tree a creative life of its own. The clause "that had been playing, unheard, since the day it was planted" is revealing, because it suggests the music was always there, and it is human perception, not the world, that has changed. The long, complex sentence, with its chain of clauses running on after the dash, enacts the building and layering of sound.',
            },
            markScheme: [
              'Identifies relevant language features (synaesthesia, metaphor, personification)',
              'Analyses the effect of specific words and musical imagery',
              'Comments on how language conveys wonder and sensory transformation',
              'Uses subject terminology accurately',
              'Embeds quotations within analysis effectively',
              'Uses only the third paragraph: an answer only about other parts of the source cannot go above Level 2',
            ],
          },
          {
            id: 'aqa-p1-09-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first line to its last.\n\nHow does the writer create a sense of wonder through the way the source is structured?\n\nYou could write about how the source opens, where the writer moves your attention as it goes on and why, and how it ends. Link each point you make to the sense of wonder.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates wonder from the first sentence, which tells us that Alma "discovered that she could hear colours" on an ordinary birthday morning. The first paragraph then grows from one plant to "the whole garden", so the magic spreads. The second paragraph slows down. The short sentence "She told no one" turns our attention to Alma\'s quiet life, and she sits and listens "to the world remake itself in music", which makes the moment feel special and private. The third paragraph focuses on just one thing, the fig tree, and the music is so beautiful that Alma "felt tears prick her eyes". At the end, the writer moves on to the evening, and the wonder becomes so strong that it is "almost unbearable". Alma closes her eyes, but the sound still comes through, so the source ends at its most intense moment, and we are left asking what this gift will mean for her.',
              'Grade 6-7':
                'The writer structures the source around a single day, and the movement from morning to evening lets the sense of wonder grow until it is almost too much for Alma to bear. The opening sentence presents the impossible as plain fact: on her "sixty-third birthday" Alma "discovered that she could hear colours". Placing the miracle in an ordinary morning, with geraniums on a windowsill, makes it all the more wonderful, and the paragraph then widens its focus from one plant to "the whole garden" and finally to "the brown earth", as if the whole world were waking up around her. The second paragraph changes the pace. "She told no one" is the shortest sentence so far, and it turns the focus from the garden to Alma\'s private life: she has lived alone since Eduardo\'s death, and keeping things to herself has become "like breathing". This pause makes the wonder personal and secret, and it ends with her settling beneath the fig tree to listen, which prepares the reader for what comes next. The third paragraph narrows to that single tree and slows right down. Its two long, flowing sentences build note upon note until the chord is "more than the sum of their parts", and the closing idea of a symphony "playing, unheard, since the day it was planted" makes the reader see that this music was always there. The final paragraph jumps to "By evening", a time shift that brings the day to its climax. Wonder turns into something closer to awe: the sunset is "almost unbearable", the short sentence "Reds crashed like cymbals" lands like the noise it describes, and closing her eyes "made no difference". The last sentence carries the sound "through her eyelids, through her skin, through the thin walls of her veins", moving ever further inside her, and the source stops there, at the height of the experience, leaving the reader as amazed and overwhelmed as Alma.',
            },
            markScheme: [
              'Reward points about structure that show how it creates a sense of wonder, covering the source from its opening to its last sentence.',
              'Opening: the extraordinary is stated as plain fact on an ordinary morning, then the focus widens from one plant to the whole garden and the earth itself.',
              'Change of pace: "She told no one" turns the focus to Alma\'s solitary life, making the wonder private and preparing for the fig tree.',
              'Narrowing focus: the third paragraph slows down on a single tree, building to the idea that its music was always there, unheard.',
              'Time shift and ending: "By evening" brings the day to a climax; the wonder becomes "almost unbearable", and the source ends with the sound moving inside her.',
              'Retelling the events in order, or writing about single words rather than structure, stays in the lower levels: each point should link back to the sense of wonder. An answer may argue that the wonder turns into something more overwhelming at the end.',
            ],
          },
          {
            id: 'aqa-p1-09-q4',
            questionNumber: 4,
            questionText:
              'This question is about the source from the second paragraph, beginning "She told no one", to the end.\n\nA reader suggested: "In this part of the story, Alma\'s gift seems more like a burden than a blessing."\n\nHow far do you agree or disagree with this view? You can agree, disagree or do some of both. Write about what happens in these paragraphs and the methods the writer uses, and support your view with evidence from these lines.',
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_MAGICAL_REALISM,
            extractSource: EXTRACT_MAGICAL_REALISM_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. At the end of the source the gift does seem like a burden. The colours of the sunset have become "almost unbearable", the reds "crashed like cymbals", and Alma "gripped the arms of her chair", which shows that she is struggling. Even when she closes her eyes, "it made no difference", so she cannot escape it. She also "told no one", so she has to cope with it on her own. However, for most of this part the gift is a blessing. Sitting under the fig tree, she listens to "the world remake itself in music", and the harmonies are so beautiful that she feels "tears prick her eyes". She has lived alone since Eduardo died, so the music keeps her company in a quiet life. I think the gift is mostly a blessing, but by the evening it has become too much for her.',
              'Grade 6-7':
                'I disagree with the view for most of this part of the story, but I agree that by its end the gift has become a burden, and I think the writer makes that change deliberately. The second paragraph links the gift to Alma\'s loneliness. She "told no one", and the writer explains that keeping extraordinary things to herself has become "less like secrecy and more like breathing". The comparison with breathing suggests that keeping things to herself, alone since Eduardo\'s death, has become as natural to her as staying alive, which is sad, but it also means that the gift arrives in a life that has been quiet for four years. When she "listened to the world remake itself in music", the verb "remake" suggests renewal, as if the world were being made fresh for her. The third paragraph is the strongest evidence against the view. The leaves sing "in harmonies so complex" that Alma feels "tears prick her eyes", and these seem to be tears of being moved, not of pain. The image of a symphony "playing, unheard, since the day it was planted" presents the gift as a privilege: she is the first to hear what was always there. Yet the final paragraph shifts the balance. "By evening" the colours are "almost unbearable", and the forceful verbs "crashed" and "throbbed" replace the gentle harmonies of the fig tree. She "gripped the arms of her chair", and closing her eyes "made no difference": the repeated "through" in "through her eyelids, through her skin, through the thin walls of her veins" shows the sound invading her body. So I would say that the gift is a blessing that becomes a burden as the day goes on. The writer\'s structure lets the reader feel both, and the word "almost" leaves open whether Alma can learn to bear it.',
            },
            markScheme: [
              'A clear judgement on the view: agreeing, disagreeing or doing some of both are all valid, if the case is argued from the second paragraph to the end.',
              'Evidence for the view: she "told no one" and bears it alone; by evening the sunset is "almost unbearable", the verbs grow forceful, and closing her eyes "made no difference".',
              'Evidence against it: she listens to the world "remake itself in music", the harmonies of the fig tree move her to tears, and she hears a symphony that had been playing unheard.',
              'Methods: the comparison with breathing, the musical imagery, the change from gentle to forceful verbs, the repeated "through", and the time shift to "By evening".',
              'The strongest answers weigh the view, and may track how the balance shifts during the day. Evidence from the first paragraph does not answer this question.',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-09-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking your work. Write in full sentences.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-09-q5',
            questionNumber: 5,
            questionText:
              'A website that publishes writing by young people is gathering pieces for a collection called Ordinary Magic, and you have decided to send one in. Most of its readers are pupils aged eleven to fourteen.\n\nChoose one of these two tasks.\n\nEither:\nDescribe a meadow in the last few minutes before a storm.\nOn the real paper a picture is printed here. It shows a wildflower meadow stretching to the horizon under a sky heavy with storm clouds. You can use it for ideas, but you do not have to describe exactly what it shows.\n\nOr:\nWrite the opening of a story about someone who discovers they can do something extraordinary. You do not need to finish the story.\n\nThis question is worth 40 marks: 24 for what you write and how you organise it, and 16 for accurate sentences, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A Grade 4-5 response to either task does what the task asks and suits readers aged eleven to fourteen. It uses some well-chosen vocabulary and a few techniques, such as simile and sensory detail, and it is organised in paragraphs with some links between them. A story opening introduces the character and the extraordinary thing they can do. Its sentences are mostly accurate, with some variety in length, and some punctuation beyond full stops and commas is used correctly.',
              'Grade 6-7':
                "The story opening\n\nThe first time it happened, Theo was late for the bus and furious with his left shoe.\n\nThe lace had snapped as he pulled it tight, and he was kneeling on the hall floor, trying to knot the two frayed ends together, when he heard his grandmother's voice from the kitchen. That in itself was not strange. Gran talked all the time: to the radio, to the cat, to the tomato plants on the windowsill. What was strange was that her mouth, as he could see through the open door, was not moving at all.\n\nShe was standing at the worktop with her back half turned, buttering toast, her lips pressed together in concentration. And yet, as clearly as if she had bent down and whispered it in his ear, Theo heard her say that the boy would need his coat today, whatever he thought, because the clouds over the hill had that heavy look about them.\n\nHe stayed exactly where he was, one hand still clutching the broken lace.\n\nIt had to be the radio, he decided. Except that the radio was off. Its little red light, which normally glowed like a sleepy eye, was dark. The cat was asleep on top of the boiler cupboard. There was nobody else in the house.\n\nGran glanced up and smiled at him. Out loud, in her ordinary voice, she told him he had better get a move on. Behind the words, softer, like music playing in another room, Theo heard something else: a worry about her bad hip, a half-remembered tune from long ago and, warm and bright beneath it all, a feeling so full of love for him that it made his face go hot.\n\nHe grabbed his coat. He did not even argue.\n\nOn the bus it happened again, and this time it was louder. Thirty people were packed onto the top deck, and every one of them was thinking. The girl beside him was going over her French verbs. The man across the aisle was trying to remember whether he had locked his car. A small boy at the front was thinking, simply and endlessly, about dinosaurs. The thoughts drifted over one another like voices in a crowded hall, rising and falling, until Theo pressed his forehead against the cold window and closed his eyes.\n\nIt did not help. You cannot close your ears to a thought.\n\nBy the time the bus pulled up outside school, he had made two decisions. The first was that he was not imagining it, because nobody could imagine a stranger worrying about whether he had locked his car. The second was that he could not, under any circumstances, tell anyone.\n\nThen Mr Okafor, the head of Year 9, looked straight at him across the playground, and Theo heard, quite distinctly, a single calm thought.\n\nSo it has started, then.",
            },
            markScheme: [
              'AO5, content and organisation (24 marks): writing that does what the chosen task asks and suits its readers, pupils aged eleven to fourteen. Writing that does not address the task cannot score more than 12 of these 24 marks.',
              'AO5: vocabulary and techniques chosen for effect, and a shaped piece, with a strong opening, paragraphs that move the reader on, changes of pace and a deliberate ending or stopping point.',
              'The description: the picture is there for ideas only. A description need not show exactly what it shows, and listing its contents one by one is not what the task asks.',
              'The story: the task asks for an opening, so the story need not be finished. Reward a gripping start and a clear sense of where it might go.',
              'AO6, technical accuracy (16 marks): sentences that begin and end in the right place, a range of punctuation used accurately, a variety of sentence types for effect, ambitious vocabulary spelt correctly, and Standard English throughout.',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 10 - Domestic Drama
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-10',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-10-reading',
        title: 'Section A: Reading',
        description: `Read the source below, then answer all four questions in this section. Allow about 15 minutes to read the source and the questions, and about 45 minutes to answer them.\n\nSource: ${EXTRACT_DOMESTIC_DRAMA_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-10-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText:
              'Look again at the first paragraph of the source, from "The argument had ended" to "a certain kind of childhood was over."\n\nQuestion 1 has four parts, 1.1 to 1.4. Each asks about one detail in that paragraph and gives three answers, A, B and C, only one of which is right. Choose one letter for each part, and write it next to the part number.\n\n1.1 What is Claire doing at the sink?\nA) Washing a whole pile of dishes\nB) Filling the kettle\nC) Cleaning a single plate again and again\n\n1.2 How are her hands moving?\nA) Quickly, in rough circles\nB) Slowly and steadily, round and round, like a machine\nC) Not at all: they are resting on the edge of the sink\n\n1.3 What had Tom promised to do last summer?\nA) Mend a panel in the fence\nB) Mow the lawn\nC) Take down the trampoline\n\n1.4 Why has the trampoline not been taken down?\nA) Taking it down would mean admitting that a stage of the children\'s lives had ended\nB) The children still play on it every day\nC) Tom promised last summer that he would dismantle it',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 C, 1.2 B, 1.3 A, 1.4 A.\n\n1.1 C: "washing the same plate for the third time".\n1.2 B: "her hands moving in slow, mechanical circles".\n1.3 A: "the fence panel that Tom had promised to fix last summer".\n1.4 A: "dismantling it would mean admitting that a certain kind of childhood was over".',
              'Grade 6-7':
                '1.1 C, 1.2 B, 1.3 A, 1.4 A.\n\n1.1 C: she is "washing the same plate for the third time", so it is one plate, not a pile of dishes.\n1.2 B: her hands move "in slow, mechanical circles": slowly, and like a machine. A uses the word "circles", but says they are quick.\n1.3 A: the promise was about "the fence panel that Tom had promised to fix last summer". The lawn "needed mowing", but no one had promised to mow it.\n1.4 A: "dismantling it would mean admitting that a certain kind of childhood was over". The children "had outgrown" it, and C borrows the words of the promise about the fence.',
            },
            markScheme: [
              '1.1 C: she is "washing the same plate for the third time".',
              '1.2 B: her hands move "in slow, mechanical circles", not quickly.',
              '1.3 A: it is the fence panel "that Tom had promised to fix last summer"; the lawn needs mowing, but no one promised to mow it.',
              '1.4 A: "dismantling it would mean admitting that a certain kind of childhood was over"; the promise in C was about the fence.',
              'One mark for each part answered with the right letter, 4 marks in all. The paper asks for one letter in each part.',
            ],
          },
          {
            id: 'aqa-p1-10-q2',
            questionNumber: 2,
            questionText:
              'Look closely at the second and third paragraphs of the source, from "Upstairs, a door closed" to "a thin film forming on their surfaces."\n\nHow does the writer use language in these paragraphs to show the atmosphere in the house after the argument?\n\nYou could comment on single words and phrases, on techniques such as imagery, and on how the sentences are shaped. Use only these two paragraphs in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer says the door was "Not slammed" but closed with "quiet, deliberate precision", which shows controlled anger. The phrase "said more than any amount of shouting" tells us that silence can be more powerful than noise. The "creak of the third stair" is a small detail that makes the scene feel real and tense. In the third paragraph, "sudden silence" shows how empty the house feels after Tom leaves. The "two mugs of tea" sitting "untouched" symbolise the broken connection between them.',
              'Grade 6-7':
                'The writer uses the language of small domestic details to carry great emotional weight. The correction "Not slammed - that would have been easier to interpret" is striking: the fragment "Not slammed" denies the reader the sound they expect, and the comparative "easier" reveals Claire\'s anxiety as she reads Tom\'s actions for meaning, since controlled silence is harder to decode than anger. The noun phrase "quiet, deliberate precision" turns the closing of a door into a message, and the adjective "deliberate" is the key word, because it implies intention, a conscious choice to show anger through restraint. The detail of "the third stair - the one they always meant to fix" is powerful in its ordinariness. The habitual "always meant to" points to a pattern of putting things off that reaches beyond the stair to the relationship itself. In the third paragraph, sound fills the space Tom has left: "The kitchen clock ticked", and the tick is "absurdly loud in the emptiness", the adverb "absurdly" revealing Claire\'s awareness that her perception has been distorted by emotion. The "two mugs of tea" with "a thin film forming on their surfaces" is a precisely observed image of stagnation, the film a visible marker of time passing with nothing resolved.',
            },
            markScheme: [
              'Identifies relevant language features (symbolism, detail, parenthetical commentary)',
              'Analyses how ordinary domestic details carry emotional weight',
              'Comments on how language conveys silence, absence, and emotional tension',
              'Uses subject terminology accurately',
              'Embeds quotations within analysis effectively',
              'Uses only the second and third paragraphs: an answer only about other parts of the source cannot go above Level 2',
            ],
          },
          {
            id: 'aqa-p1-10-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first line to its last.\n\nHow does the writer create a sense of loss through the way the source is structured?\n\nYou could write about how the source opens, where the writer moves your attention as it goes on and why, and how it ends. Link each point you make to the sense of loss.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The source begins after the argument has already finished, so the first thing we feel is that something has gone wrong and cannot be undone. Its "residue hung in the kitchen like smoke", and Claire keeps washing the same plate. When she looks out of the window, the list of things in the garden ends with the trampoline and the thought that "a certain kind of childhood was over", so the first paragraph ends with a loss. In the second paragraph the focus moves to sounds as Tom leaves: a door, the stairs, the front door and finally "his car started in the drive". Each sound takes him a step nearer to leaving, so we feel him going. The third paragraph is about stillness and "sudden silence", and the mugs of tea made "before the argument" sit untouched. At the end, the smell of toast reminds Claire of "the version of this morning where everything was still all right". The last words look back to a happier time that has gone, which leaves a strong sense of loss.',
              'Grade 6-7':
                'The writer structures the source as an aftermath, so that the sense of loss grows from what has already happened rather than from anything we see. The opening sentence tells us "The argument had ended twenty minutes ago": the event itself is withheld, and the reader arrives when it is already too late to change it. Her attention then drifts out of the window, and the garden is presented as a list that moves from an everyday job, the lawn that needs mowing, to an unkept promise, the fence, to the trampoline, and ends on "a certain kind of childhood was over". The first paragraph therefore closes on a loss that has nothing to do with the argument, and it prepares us for the larger one to come. The second paragraph shifts from sight to sound. We follow Tom only through what Claire hears: a door, footsteps, the third stair, "the front door opened and shut", and "his car started in the drive". The sequence follows him through the house and out of it, so his departure is felt as a series of small losses until he is gone. The third paragraph then stops the action altogether. In the "sudden silence" the writer lingers on a still scene, dripping water, a ticking clock and two mugs made "before the argument", which point back to a time that already feels far away. The final paragraph returns to small, practical actions, such as drying her hands, before the smell of toast brings the climax. The source ends by setting two versions of the same day side by side, the present and "the version of this morning where everything was still all right". By placing this realisation in the last sentence, the writer leaves the reader with the loss fully named and nothing after it to soften it.',
            },
            markScheme: [
              'Reward points about structure that show how it creates a sense of loss, covering the source from its opening to its last sentence.',
              'Opening: the source begins after the argument has ended, withholding it; the list of what Claire sees in the garden ends on a childhood that "was over".',
              "Shift of focus: from sight to sound, as Tom's departure is heard as a sequence that follows him through the house and out of it, ending with his car starting.",
              'Change of pace: the third paragraph stops the action in silence and stillness, and the untouched mugs made before the argument point back to a time already lost.',
              'Ending: the smell of toast brings the climax, and the last sentence sets the present beside "the version of this morning where everything was still all right", naming the loss at the very end.',
              'Retelling the events in order, or writing about single words rather than structure, stays in the lower levels: each point should link back to the sense of loss.',
            ],
          },
          {
            id: 'aqa-p1-10-q4',
            questionNumber: 4,
            questionText:
              'This question is about the last two paragraphs of the source, from "She turned off the tap" to the end.\n\nOne reader commented: "In these last two paragraphs, Claire stays calm and in control of her feelings."\n\nHow far do you agree or disagree with this view? You can agree, disagree or do some of both. Write about what happens in these paragraphs and the methods the writer uses, and support your view with evidence from these lines.',
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_DOMESTIC_DRAMA,
            extractSource: EXTRACT_DOMESTIC_DRAMA_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. On the surface Claire does seem calm. She "turned off the tap", then "put the plate on the rack and dried her hands", which are ordinary, sensible actions, and she does not cry or shout. However, I think she is less in control than she looks. She "stood in the sudden silence, holding the plate", as if she cannot move, and "Water dripped from her fingers onto the floor", which she does not seem to notice. The clock sounds "absurdly loud", which suggests that she is very tense. At the end the smell of toast "threatened to undo her completely", so she is close to breaking down. The word "threatened" shows that she just manages to hold on. So she keeps control on the outside, but inside she is struggling.',
              'Grade 6-7':
                'I agree that Claire appears calm, but I would argue that the writer uses that calm to show how close she is to losing control, so the view is only half true. Her actions are orderly. She "turned off the tap", and in the final paragraph she "put the plate on the rack and dried her hands on the towel", a sentence as neat and practical as the tasks it describes. She does not cry or speak at all, and the writer never names a feeling. In this sense the reader\'s view holds. However, the writer\'s methods reveal a different state beneath the surface. She "stood in the sudden silence, holding the plate", a pause in which she seems unable to move, and "Water dripped from her fingers onto the floor", a small loss of control that she does not seem to notice. Her senses are strained: the clock is "absurdly loud in the emptiness", and "absurdly" suggests that she knows her reaction is out of proportion but cannot stop it. The untouched mugs, with "a thin film forming on their surfaces", show time passing while she stands still. The final paragraph brings this to a crisis. The towel "smelled faintly of toast", and the writer stresses how slight this is, "Such a small, ordinary detail", before the turn of "and yet". The phrase "threatened to undo her completely" is the key: the verb "threatened" shows that she has not broken down, but only just, and "completely" shows how much is at stake. The calm, then, is real, but it is the calm of someone holding herself together. I would say that she is in control of her actions but not of her feelings, and the writer makes the reader feel the effort it costs her.',
            },
            markScheme: [
              'A clear judgement on the view: agreeing, disagreeing or doing some of both are all valid, if the case is argued from the last two paragraphs.',
              'Evidence for the view: her ordered, practical actions, turning off the tap, putting the plate on the rack and drying her hands; she does not cry or speak, and no feeling is named.',
              'Evidence against it: she stands frozen, "holding the plate", while water drips unnoticed; the clock is "absurdly loud"; the smell of toast "threatened to undo her completely".',
              'Methods: actions in place of named feelings, sound and stillness, the turn on "and yet", and the verb "threatened", which shows her only just holding on.',
              'The strongest answers weigh the view, perhaps separating control of her actions from control of her feelings. Evidence from the first two paragraphs does not answer this question.',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-10-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking your work. Write in full sentences.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-10-q5',
            questionNumber: 5,
            questionText:
              'Your local radio station is asking listeners to send in short pieces of writing, to be read aloud on a Sunday evening programme. Most of the people who listen are adults.\n\nChoose one of these two tasks.\n\nEither:\nDescribe a kitchen table after a family meal, once everyone has left the room.\nOn the real paper a picture is printed here. It shows a kitchen table after a family meal, with plates pushed back, chairs at angles and a candle burned down to nothing. You can use it for ideas, but you do not have to describe exactly what it shows.\n\nOr:\nWrite the opening of a story about a family who receive some unexpected news. You do not need to finish the story.\n\nThis question is worth 40 marks: 24 for what you write and how you organise it, and 16 for accurate sentences, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A Grade 4-5 response to either task does what the task asks and would make sense to someone hearing it read aloud. It uses some well-chosen vocabulary and a few techniques, such as simile and sensory detail, and it is organised in paragraphs with some links between them. A story opening introduces the family and the news, or the moment just before it arrives. Its sentences are mostly accurate, with some variety in length, and some punctuation beyond full stops and commas is used correctly.',
              'Grade 6-7':
                "The description\n\nEveryone has gone, and the table is left to tell the story of the evening on its own.\n\nThe plates have been pushed back towards the middle, as if the meal ended with one shared, contented sigh. Smears of gravy have dried into shining brown maps. On my brother's plate a single roast potato sits untouched, rejected at the last moment, golden on one side and pale on the other, like a small moon caught half in shadow. Someone has balanced a fork across a glass. Someone else has folded a paper napkin into a tight, careful square, the way people do when they are listening hard to a conversation and need something to do with their hands.\n\nThe chairs tell their own story. None of them is straight. Grandad's is pushed far back from the table and angled towards the garden door, because he always turns that way when he laughs. My aunt's is tucked neatly in, as if she left in a hurry but would not leave without being tidy. One chair lies on its side by the radiator, where my little cousin abandoned it to chase the dog.\n\nIn the centre, the candle has burned down to nothing. It began the evening as a tall white column, and now it is a pool of wax gone cloudy and hard, with a curl of black wick lying in it like a full stop at the end of a long sentence. A thin thread of smoke still rises from it, wavers, and vanishes into the warm air above the table.\n\nThe room smells of rosemary and roast chicken, of the coffee nobody finished and the faint sweetness of the trifle my mother makes only twice a year. Beneath it all is the smell of a house that has been full of people: coats and perfume and the rain they brought in with them.\n\nFrom the living room comes the murmur of the television and then my grandfather's laugh, deep and sudden, the same laugh he has had for as long as I can remember. The dog's claws click across the hall. Water gurgles in the pipes as somebody starts the washing up after all.\n\nI should clear the table, and in a few minutes I will. The plates will go into the sink, the cloth will be shaken out over the back step, and tomorrow this will be an ordinary kitchen again, with bills and keys and cereal boxes. But for now I leave it exactly as it is, the way you might keep a photograph, because one day I will want to remember an evening when every chair was full.",
            },
            markScheme: [
              'AO5, content and organisation (24 marks): writing that does what the chosen task asks and suits its audience, adults listening to the radio, so it must work when it is heard rather than read. Writing that does not address the task cannot score more than 12 of these 24 marks.',
              'AO5: vocabulary and techniques chosen for effect, and a shaped piece, with a strong opening, paragraphs that move the listener on, changes of pace and a deliberate ending or stopping point.',
              'The description: the picture is there for ideas only. A description need not show exactly what it shows, and listing its contents one by one is not what the task asks.',
              'The story: the task asks for an opening, so the story need not be finished. Reward a gripping start and a clear sense of where it might go.',
              'AO6, technical accuracy (16 marks): sentences that begin and end in the right place, a range of punctuation used accurately, a variety of sentence types for effect, ambitious vocabulary spelt correctly, and Standard English throughout.',
            ],
          },
        ],
      },
    ],
  },
]
