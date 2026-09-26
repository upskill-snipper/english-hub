// @ts-nocheck
/**
 * Edexcel GCSE English Language Paper 1 (1EN0/01), Fiction and Imaginative
 * Writing: six mock papers, each built on a specially written extract.
 * Each paper: 1h 45min (105 mins), 64 marks, split here as Section A Reading
 * 32 and Section B Writing 32.
 *
 * WHAT WAS WRONG (26 September 2026). None of the six extracts is by a real
 * author: all six were written for these papers, so there was no attribution
 * to correct and no genuine text to restore. The fault was in the answers.
 * scripts/check-mock-exam-extracts.mjs flagged eight model-answer quotations
 * of four words or more; checking every quotation of any length found 25
 * that were not the extract's words. Some changed a tense, a name or a
 * pronoun ("clanks at precisely 9:47" for "clanked", "she had trained
 * herself" for "Mrs Chen had trained herself", "his brother's voice" where
 * the extract says "her brother's"). Some were invented ("I have remembered
 * you", "grief had looked different to each of them", a radiator described
 * as "cracked"). Three were borrowed from other papers in this file: "far
 * more valuable" (Mock 2's letter) and "too late" (Mocks 2 and 5) were cited
 * as Mock 4's words, and "out of place" (Mock 1's plastic leaf) as Mock 3's.
 * One answer opened with a stray quotation mark that turned its own prose
 * into four false quotations. A model answer is where a student learns what
 * accurate quotation looks like, so every quotation is now the extract's
 * words, whole, with no silent cuts.
 *
 * The analysis around each quotation was reread against the extract, and
 * where it asserted what the extract does not say it was corrected: the Mock
 * 1 answer calling "as if ... some other dimension" a literal claim (it is a
 * simile); Mock 5 answers declaring Michael dead (his letter says he "might
 * already be dead") and forgiveness "already accomplished" (the extract says
 * the separation "could, perhaps, be mended"); a Mock 4 answer making the
 * thief and Marcus both "trapped by the painting's absence" (the thief had
 * the painting); a Mock 6 answer placing Eleanor's near-invisibility at the
 * height of her tears (it comes after "the crying stopped"); and smaller
 * misreadings, such as letters called "undated" that carry future dates, the
 * narrator's words given to the grandfather, and the station's abandonment
 * given to the town. Three questions sent the student to "the final
 * paragraph" for lines that are not in it (Mock 3 Q4, Mock 5 Q4, Mock 6 Q4)
 * and now say where the lines are.
 *
 * Also corrected: the paper code, which said 1EN0/02 (Paper 2, non-fiction)
 * on a fiction paper; Mock 1's source label, "Contemporary literary fiction,
 * 2024", which read like a published novel and now says, as the other five
 * do, that the passage is original; Mock 4's extract calling the curator the
 * painting's "owner"; American spellings in the answers.
 *
 * SECOND READING (27 September 2026). Every quotation was by then verbatim,
 * but a review against the extracts found claims still untrue of them. Mock
 * 1 Q4 told the student Mrs Chen walks "with no fear", a premise the
 * extract's "artificial concern" and "the weight of the waiting itself"
 * complicate and the model answers themselves dispute; it now quotes her
 * "trained herself not to feel afraid" and asks about her emotional state.
 * Its answers had her walk "through the door" (she walks towards it) and
 * called the watching occupants the "final image" (the last sentence is the
 * weight of the waiting). Other corrections: Mock 2's first letter treated
 * as proof of what all fifty contain, the grandfather's death called
 * "recent", the box (not the letter he holds) said to "collapse time", and
 * the narrator's "when the world became too loud" given to the grandfather;
 * Mock 4's letter said to tell Marcus "it was not his fault" (it asks the
 * museum to), a "for forty-three years" refrain that occurs twice (the
 * refrain is "forty-three years", six times), the painting's significance
 * called "personal, not universal" in an extract that ends with the world
 * able to see it, and the theft itself turned into a gift; Mock 5's letter
 * called "communication achieved across the boundary of death" and "the
 * distance across death" credited with the confession, although Michael
 * wrote it alive and may still be; Mock 6's snow said to make Eleanor
 * remember (the extract says she had forgotten while looking at it), and a
 * Grade 8-9 answer saying she "exists as trace" when the extract says "She
 * had left no trace." Also "nighttime" and "toward" in the answers' own
 * prose; "toward" stays inside quotations, because the extracts use it.
 *
 * NOT CORRECTED, and to be settled before any of these papers is served: the
 * real Paper 1 sets one unseen nineteenth-century fiction extract, with
 * Section A worth 24 marks over questions of 1, 2, 6 and 15, and Section B
 * worth 40. These papers use modern original fiction and split 32/32 over
 * questions of 4, 8, 8 and 12. No page serves this file today: it is not in
 * allMockExamPapers in src/data/mock-exams.ts.
 *
 *   node scripts/check-mock-exam-extracts.mjs --file edexcel-lang-p1
 */

import { MockExamPaper, MockExamQuestion, MockExamSection } from './mock-exams'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM 1: THE WAITING ROOM
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_MOCK_1_EXTRACT = `The waiting room had been waiting longer than its occupants. The carpet was grey, the colour of compromise, worn smooth in a pattern that suggested countless shoes had paced this same rectangle day after day. The light came from three sources: a window that looked onto a brick wall, a fluorescent strip on the ceiling, and - mysteriously - a small lamp on the corner table that was never switched off, even in daylight.

Mrs Chen sat in the third chair from the left. She had been coming here for six months, and she knew the waiting room the way archaeologists know their digs. The radiator clanked at precisely 9:47 every morning. The receptionist, Margaret, always arrived late on Tuesdays. Someone had torn a corner from a 2019 magazine and left it on the shelf. The artificial plant on the window ledge had a single plastic leaf that was slightly out of place.

She was not waiting for good news. The doctor had been clear about that. She was waiting for time to do what it would do. She was waiting for her body to make its slow decisions. And in the meantime, she sat here, among the others who were waiting, watching the clock move through the hours as if time itself had slowed down, as if the waiting room existed in some other dimension where the normal rules no longer applied.

A man sat two chairs to her right, coughing quietly. A young woman kept checking her phone, then looking up with an expression of disappointed hope, as though the phone might have suddenly changed its mind and offered her something different in the three seconds she had looked away. An elderly man had brought a crossword and worked through it with the focus of someone defusing a bomb.

The door opened. A name was called. The man with the crossword stood, gathered his pencil, and followed the nurse through the inner door. The waiting room contracted. The remaining occupants shifted slightly, as though they had been waiting not for a doctor but for space, and now that some had been freed, they could breathe a little more easily.

"Mrs Chen?" The receptionist was holding the door open. "Doctor Walsh is ready for you."

Mrs Chen had trained herself not to feel afraid. Fear, she had learned, was a luxury item, something you could not afford if you were going to survive. So she felt nothing. She felt the artificial concern of her own empty face as she stood and walked toward the door. She felt the eyes of the remaining occupants following her, wondering what was on the other side, whether it was their turn next. She felt the weight of the waiting itself, the collective weight of all those hours spent suspended between what had been and what would be.`

const EDEXCEL_P1_MOCK_1_SOURCE = 'Original contemporary fiction, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM 2: THE INHERITANCE
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_MOCK_2_EXTRACT = `Thomas did not inherit money. He inherited a box. It was not a remarkable box - cardboard, slightly water-stained, with "FRAGILE" written in fading marker across the top - but it had been his grandfather's, and his grandfather had left specific instructions that it was to be given to him on his twenty-first birthday, unopened.

He sat in his mother's kitchen, holding the box while she made tea. The kettle steamed. The spoon clinked against the cup. The radiator ticked through its evening cycle. All the familiar sounds of home, and yet the box in his hands made everything seem foreign, as though his entire life had been a waiting room and he had only just now been called through the door.

"Aren't you going to open it?" his mother asked.

"I'm reading the letter first," Thomas said. The letter was long, written in his grandfather's wavering hand, dated the year before he died.

Thomas, the letter began, I am leaving you something. It is not gold or silver. It is not a house or a car. It is something far more valuable, though you will not believe this at first. Inside this box is the answer to a question you will one day ask yourself. You will not know you have been searching for this answer until you find it. This is the nature of inheritance - it comes from someone you have lost, and it always arrives too late to ask them whether you have understood correctly.

Thomas opened the box. Inside was a stack of letters, perhaps fifty of them, tied with a ribbon. They were addressed in his grandfather's hand, and they were addressed to Thomas - but there were dates on the envelopes, dates that were yet to come. Instructions on the top letter: "Read one letter on each of your birthdays, starting with your twenty-first. Not before. Not after."

Thomas pulled out the first letter and opened it carefully. It was dated his twenty-first birthday, though it had been written years ago. Inside, his grandfather had written about the first time Thomas had met him - a memory Thomas himself had almost forgotten. He had been four years old. His grandfather had taken him to the park and taught him how to skip stones across the lake, counting each skip aloud. Thomas could taste the memory: the sharp cold of the water, the weight of the stone in his small hand, the pride of achieving a score of four.

He looked up at his mother. "He remembered," Thomas said.

"He remembered everything," his mother replied.

Thomas felt something shift in his chest - something that had been waiting a long time to move. He held the letter carefully, aware that he was holding far more than paper and ink. He was holding time itself, compressed. He was holding a connection to someone who had loved him enough to engineer an inheritance that would unfold across his entire life. He was holding the answer to a question he had not yet asked himself, but would ask, eventually, when the world became too loud and he needed to remember that he had once been known completely, by someone he had loved.`

const EDEXCEL_P1_MOCK_2_SOURCE = 'Original contemporary fiction, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM 3: THE NIGHT TRAIN
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_MOCK_3_EXTRACT = `The train was not meant to stop here. Officially, it never did. According to the timetable - which Maya held in her hand, torn from a customer service desk somewhere in Prague - this train did not acknowledge the existence of Mala Zdar as a destination. And yet here it was, pulling into a station that seemed to exist in a state of permanent abandonment, platform cracked, shelter collapsed, a single light bulb casting everything in a sickly yellow.

Maya was the only passenger to disembark. The guard had looked at her with something approaching concern when she'd told him where she was going. "You're sure?" he had asked, in English that carried the weight of experience - of having seen people make terrible mistakes at train stations in the small hours of the morning.

But Maya was sure. She had the address: Ulica Petra Negy, number 14. She had the letter, written in her aunt's careful hand, arrived three weeks after the funeral with instructions she was now following like a pilgrim following a map to a holy place.

The station was empty except for the stationmaster's office, lit and apparently inhabited, though nobody emerged from it. The town beyond the station was dark - genuinely dark, the kind of dark that existed in places before electricity had arrived, or after it had left. Maya switched on her phone's torch and began walking.

The streets had names, but no signs. The buildings had windows, but no lights. It was as though she had travelled not just geographically but temporally, stepping off the train into a place that had been paused, waiting for someone to arrive and press play.

The address led her to a house that looked like every other house on the street: three storeys, yellowed stone, paint peeling from the window frames. There was a key taped to the underside of a pot that had presumably been meant to contain flowers sometime in the previous decade. The key was modern, at odds with everything else about the place, as though hope itself was anachronistic.

Inside, the house smelled of dust and time. Of something else, too - something floral that might have been her aunt, might have been the ghost of her aunt, might have been a memory of her aunt that had somehow become solid enough to have a scent. Maya stood in the dark hallway and understood, for the first time since the funeral, that her aunt had left her something. Not money. Not objects, though there would be objects - furniture, paintings, books. She had left her a puzzle, a mystery, a reason to travel to a place that didn't officially exist to open a door that had been waiting.

She climbed the stairs slowly, her phone's beam cutting through the darkness. At the top of the stairs was a door, and on that door, an envelope with her name written in her aunt's handwriting. Maya's hands shook as she opened it.

"My dear," it began, "I have left you a house, but more importantly, I have left you a choice. Inside this house is everything I could not say. Everything I was afraid to tell you while I was alive. Read what is here. Make of it what you will. But know this: I loved you enough to trust you with my secrets."

Maya sat down on the top step and began to cry.`

const EDEXCEL_P1_MOCK_3_SOURCE = 'Original contemporary fiction, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM 4: THE GALLERY
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_MOCK_4_EXTRACT = `The painting had been missing for forty-three years. Its keeper - a museum curator named Marcus - knew this the way other people knew the weather: as a constant, unchangeable fact that shaped the landscape of daily life. The painting was a Chagall, worth perhaps a quarter of a million pounds, and it had vanished from a travelling exhibition in Brussels in 1981. Since then, it had been a ghost in the museum's collection - listed on the inventory, referenced in academic papers, mourned in the way art institutions mourn their lost pieces.

And now, it was back.

Marcus stood in front of it - he had paid to stand in front of it, paid to have the moment alone, before the public opening, before the insurance assessors and the news cameras and the other museum professionals who would want to explain it, contextualise it, transform it from a mystery into a narrative with a beginning, middle, and solution.

But standing in front of it, Marcus found that he did not want a narrative. He wanted mystery. He wanted the forty-three years of absence to remain intact, part of the painting's story, part of what made it precious.

The painting was small - "Lovers in the Night" - just seventy centimetres square, acrylic on canvas. It showed two figures flying through a starlit sky, their bodies intertwined, their faces serene. One was red, one was blue, and between them, a crescent moon hung like a promise. It was not Chagall's most famous work. It had not been exhibited in major retrospectives. Most people had never heard of it.

But Marcus had spent forty-three years thinking about it.

He had been twenty-two when it went missing - a junior curator at the Brussels exhibition, tasked with ensuring the safety of the pieces in his section. He had failed. He had stepped away to make a phone call. The painting had been taken in the seven minutes he was gone. Nobody had ever been caught. Nobody had ever claimed responsibility. It had simply vanished, the way some things do, as though they had decided the world no longer deserved to see them.

For decades, Marcus had carried this failure. He had become meticulous in his work, obsessive in his attention to security, treating every piece as though it were the Chagall, as though one moment of inattention might cause the loss of something irreplaceable. He had, in a sense, been haunted by the painting for forty-three years.

And now it was here.

The letter that had accompanied its return was brief: "I took this painting because I was young and stupid and angry at the world. I have kept it because it was the most beautiful thing I have ever owned. I am returning it now because I am old and I want to know what it's like to have something you love belong to everyone instead of just to you. The world deserves to see it. So does the young man who failed to protect it - I have followed his career. Tell him: it was not his fault."

Marcus traced the edge of the frame with his fingers, not quite touching the paint. Forty-three years of loss, and now this. Forty-three years of carrying a failure that had, it turned out, never been his to carry. The painting hung on the white wall, and for the first time since 1981, the world could see it, and Marcus could finally let go.`

const EDEXCEL_P1_MOCK_4_SOURCE = 'Original contemporary fiction, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM 5: THE LAST LETTER
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_MOCK_5_EXTRACT = `The post office clerk handed over the letter without comment - a small mercy, because Diane did not think she could bear sympathy at that moment. The envelope was postmarked two months ago, the handwriting unmistakably her brother's: careful, deliberate, the hand of someone who had thought about what he was writing.

She had not seen Michael in fifteen years. They had not had a fight, exactly. Fighting would have suggested some dramatic rupture, some moment of impact. Instead, there had been a slow drift, like continents separating, like the gradual distance that occurs when people decide they no longer have enough in common to maintain the effort of connection.

There were practical reasons: he had moved to Australia; she had stayed in London. There were emotional reasons: their parents had died (his grief had looked like distance, like a refusal to acknowledge the shared loss; hers had looked like an inability to stop speaking about it). There were the reasons people don't usually admit: he had become someone she didn't quite recognise, and she suspected she had become someone he didn't quite recognise either.

The letter was short.

"Dear Diane," it began. "I don't know how to write this, so I'm just going to write it. I'm sick. The prognosis is not good. The doctors are being kind about it, which means it's bad. I have perhaps six months. By the time you read this, depending on how long this letter has taken to arrive, I might already be dead.

I'm telling you this not to ask for anything - it's too late for that - but to tell you something I should have told you years ago, before we became people who didn't know each other. I'm sorry. I'm sorry for the distance. I'm sorry for the way your grief frightened me so much that I had to turn away from it, turn away from you. I was a coward. I was a child, really, even when I was a man.

But more than that, I want you to know that I never stopped thinking of you. Even when we didn't speak, you were my sister. That's the kind of thing that doesn't change, the kind of thing that persists even when everything else falls away.

I went through my things before I got too sick, and I found something. Do you remember when we were children, maybe eight and ten, and we made a list of all the things we were going to do together when we grew up? You had terrible handwriting even then, and I still remember trying to read your entry about sailing around the world. I'm enclosing that list. I've kept it all this time.

By now, we will have done none of those things. We will have lived separate lives. But I wanted you to have it, as a reminder of when we still believed we would always be connected.

I am not afraid of death. But I am sad about this. I am sad about the years we wasted being angry or hurt or distant when we could have been knowing each other.

If you find it in yourself to forgive me, write back. Or don't. Either way, you will always be my sister.

Michael"

The list fell out of the envelope - yellowed paper, children's handwriting, carefully preserved for forty years. Diane read it, though she could barely see through her tears.

Sail around the world.
Climb a mountain.
Learn to play the violin together.
Have an adventure.
Never stop being friends.

Diane folded the list carefully and held it against her chest. In her other hand, she held her brother's voice - arriving too late, arriving just in time, arriving at the only moment it could have arrived, when she was finally ready to hear that the separation had not been inevitable, had not been deserved, and could, perhaps, be mended.

Even if he was already gone.`

const EDEXCEL_P1_MOCK_5_SOURCE = 'Original contemporary fiction, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM 6: THE WINTER WALK
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_MOCK_6_EXTRACT = `The snow had not stopped falling for three days. It fell quietly, the way heavy things sometimes do, as though gravity itself was tired and had decided to be gentle about the work. The town had become a different place - softened, quieted, transformed into something that resembled peace though it was actually just the absence of sound.

Eleanor had not expected to be grieving still. It had been two years since her husband died, and grief was supposed to have a timeline, wasn't it? You were supposed to move through the stages, arrive at acceptance, begin again. The therapist had explained this to her. The widow self-help books had flowcharts about it. But grief, Eleanor was learning, was not obedient to timelines. It returned when you least expected it, in the middle of a random Tuesday, on a morning when you'd forgotten to be sad.

This morning, looking out at the snow, she had forgotten. And then she had remembered.

She put on her coat - his coat, really, the heavy wool one he'd bought in Scotland, the one that still carried the faint smell of his aftershave - and she walked out into the white silence.

The park was empty. It was the kind of morning when most people stayed inside, but Eleanor had learned that grief was worst indoors, where it could concentrate, could gather weight. Outside, in the snow, it diffused. It became part of something larger.

She walked without direction, her footprints appearing behind her like proof that she had existed, that she had been here. The snow covered everything - the grass, the benches, the path that she was following though she couldn't see it. The world was simplified. All the complications of the world had been smoothed away, and there was only this: the falling snow, the walking body, the breath that appeared and disappeared in the cold air.

She found herself at the frozen pond. They had come here years ago, when he was still alive, and skated across this same expanse of ice. She had not been a good skater, and he had held her hand, pulling her along, the two of them laughing, sliding, nearly falling. The memory was so vivid that she could almost feel the ice under her feet, almost feel the weight of his hand in hers.

But when she looked down, she realised she was standing on snow, not ice. The pond had frozen, but the snow was too thick to see the ice beneath it. The pond was hidden. The past was buried.

Eleanor sat down in the snow - which was not a wise thing to do, probably; she was sixty-three years old, and the snow was cold, and she had no one waiting for her at home, no one who would wonder where she was - and she let herself cry. She cried the way she had not cried in months, the way that people cry when something inside them breaks open. She cried for the life she had had and lost. She cried for the man she had loved, now turned into memory. She cried for the cold, and for the snow, and for the fact that grief does not respect timelines.

Eventually - she did not know how long she had been sitting - the crying stopped. She was very cold. Her hands were numb. The snow had accumulated on her coat, on her hair, until she was nearly invisible, nearly indistinguishable from the landscape itself.

She stood up slowly, her joints protesting. She turned around, expecting to see her footprints, but the snow had already covered them. She had left no trace. She had been there, and now there was no evidence that she had ever existed, except inside her own body, inside the weight of memory that no amount of snow could cover.

Eleanor began walking back toward the world - back toward the town, toward the house, toward the coat she would hang on the hook, toward the next day, and the next. She did not walk quickly. She did not walk with purpose. She simply walked, one foot in front of the other, and slowly, as she walked, the tears froze on her face, and she became, for a moment, part of the snow itself.`

const EDEXCEL_P1_MOCK_6_SOURCE = 'Original contemporary fiction, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT MOCK EXAMS
// ═══════════════════════════════════════════════════════════════════════════

export const edexcelLangP1Mocks: MockExamPaper[] = [
  // ═════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 1: THE WAITING ROOM
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-mock-1',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0 - Mock Exam 1: The Waiting Room',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-mock-1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_MOCK_1_SOURCE}`,
        totalMarks: 32,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-mock-1-q1',
            questionNumber: 1,
            questionText:
              "What do you understand from the extract about Mrs Chen's feelings towards her time spent in the waiting room?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_MOCK_1_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Mrs Chen has been coming to the waiting room for six months. She knows it very well because she has spent so much time there. She is not waiting for good news - the doctor has been clear about that. She seems familiar with waiting and accepts that she must wait for time to pass. She seems calm about the situation even though it is difficult.',
              'Grade 6-7':
                'Mrs Chen\'s relationship with the waiting room is one of resigned familiarity. She has developed an intimate knowledge of its details - the radiator\'s schedule, the receptionist\'s patterns, the displaced plastic leaf - which suggests she has processed her anxiety through obsessive attention to the space\'s minutiae. This cataloguing represents a form of control in an uncontrollable situation. Her reflection that she is "not waiting for good news" signals her emotional preparation for the worst. The statement that she "had trained herself not to feel afraid" indicates a deliberate psychological strategy of emotional suppression. The waiting room has become her liminal space of suspension - not fully in life, not yet facing its conclusions.',
            },
            markScheme: [
              'Identifies key contextual details (six months, not good news)',
              'Understands emotional state through evidence',
              'References specific textual details',
              'Explains significance of waiting',
            ],
          },
          {
            id: 'edexcel-p1-mock-1-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer presents the waiting room and its atmosphere. Comment on language choices and their effects.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_1_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the carpet as "grey, the colour of compromise." This is effective because grey is a dull, empty colour, and comparing it to compromise suggests the waiting room is not a place of hope or clarity. The fluorescent strip light makes it sound artificial and unwelcoming. The "mysteriously" never-switched-off lamp adds to the sense that time works differently in this place. The writer says the room "had been waiting longer than its occupants," which personifies the room as if it\'s alive and patient. The verb "clanked" describing the radiator suggests something old and mechanical, making the same noise at the same time every day. Overall, the language creates an atmosphere of stagnation and emptiness.',
              'Grade 6-7':
                'The writer establishes the waiting room as a space of temporal distortion and existential suspension. The opening personification - "The waiting room had been waiting longer than its occupants" - inverts the expected relationship between space and inhabitant, suggesting the space itself has agency and patience that exceeds that of its temporary occupants. The colour grey, explicitly described as "the colour of compromise," functions as a symbol of the neutrality enforced by institutional spaces - a space designed to make no claims, provoke no emotions, assert no values. The multiple light sources create a kind of artificial perpetuity; the lamp that is "never switched off, even in daylight" suggests the suspension of natural temporal rhythms. The accumulation of specific, seemingly arbitrary details - the corner torn from a 2019 magazine, the misplaced plastic leaf - serves to establish Mrs Chen\'s coping mechanism: the transformation of trauma\'s unbearability into obsessive documentation of minutiae. This cataloguing represents an attempt to assert control and meaning in a space designed to deny both.',
            },
            markScheme: [
              'Identifies language techniques (personification, colour symbolism, imagery)',
              'Explains the effect of specific words on atmosphere',
              'Understands how language reflects emotional state',
              'Uses relevant textual evidence',
              "Analyses writer's purpose and intention",
            ],
          },
          {
            id: 'edexcel-p1-mock-1-q3',
            questionNumber: 3,
            questionText:
              'The extract suggests that the waiting room is "some other dimension where the normal rules no longer applied." What does the writer mean by this and how is it suggested?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_1_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer means that time moves differently in the waiting room compared to the outside world. Instead of feeling normal passing time, it feels like time has slowed down. This is suggested by the image of time itself slowing down. The waiting room is described in ways that make it seem separate from normal life. People are waiting in a state of suspension - they are not really living their normal lives while they wait. The lamp that is "never switched off, even in daylight" suggests that normal rules about day and night don\'t apply. Mrs Chen\'s detailed knowledge of the routine suggests she experiences time differently here - she can notice patterns that most people would miss.',
              'Grade 6-7':
                'The writer constructs the waiting room as a liminal space where temporal and ontological certainties collapse. The phrase "as if time itself had slowed down" suggests that causality and forward momentum are suspended; the waiting room becomes a temporal bubble detached from linear progression. The sentence continues "as if the waiting room existed in some other dimension", and the repeated "as if" matters: the writer does not claim the room is literally outside reality, only that it feels so to the people suspended in it, which makes the dislocation psychological rather than supernatural. The writer suggests this through several techniques: the ritual of the radiator, which "clanked at precisely 9:47 every morning", creates a sense of mechanical repetition, time measured not by meaningful events but by the recurrence of meaningless actions. The description of the other occupants - the young woman looking up from her phone "with an expression of disappointed hope", the elderly man absorbed in his crossword - suggests people existing in a state of psychological suspension, neither in the past nor future but in an eternal present of waiting. The lamp that was "never switched off, even in daylight" violates the natural temporal order, suggesting the waiting room exists outside the normal cycles of day and night, activity and rest. The final clause, "where the normal rules no longer applied," explicitly acknowledges that institutional spaces operate according to a different temporal logic, one where personal agency and individual time are surrendered to institutional time.',
            },
            markScheme: [
              'Identifies the concept of temporal dislocation',
              'Explains why waiting spaces create this experience',
              'Analyses specific textual techniques',
              'Shows understanding of suspension and liminality',
              'Uses relevant evidence throughout',
            ],
          },
          {
            id: 'edexcel-p1-mock-1-q4',
            questionNumber: 4,
            questionText:
              'In the final paragraph, Mrs Chen walks towards the doctor\'s door, having "trained herself not to feel afraid". Analyse how the writer shows her emotional state through language and detail.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_1_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_1_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer says Mrs Chen "had trained herself not to feel afraid," which shows she has deliberately prepared herself emotionally. She feels "nothing" and has an "artificial concern." The phrase "empty face" suggests she has shut down her emotions. She walks towards the door with no resistance. The contrast with the other occupants who watch her creates a sense that she is moving with purpose while others remain stuck. The verb choices are controlled and measured - she "stood and walked" - suggesting deliberation rather than panic. She is accepting rather than resisting what comes next.',
              'Grade 6-7':
                'The writer employs a rhetoric of emotional anaesthetisation to convey Mrs Chen\'s psychological response to the bad news she expects. The statement that she "had trained herself not to feel afraid" looks back over six months of emotional labour - she has deliberately constructed an affective architecture designed to withstand the anticipated trauma. This self-consciousness ("she felt nothing") is not numbness as involuntary symptom but as deliberate achievement, even if the achievement is incomplete: she "felt the artificial concern of her own empty face," suggesting a consciousness of her own performance. The verb "trained" carries military or athletic connotations - fear is constructed as an adversary to be overcome through discipline. Paradoxically, this emotional suppression becomes a form of resistance and agency; by refusing to feel fear, she asserts control in a situation designed to deny control. The closing image of her walking towards the door, followed by the eyes of the other waiting occupants, transforms her into an object of projected anxiety - they see in her movement a preview of their own imminent summons. The asymmetry is crucial: they remain trapped in waiting while she moves, yet the last sentence has her feel "the weight of the waiting itself", so the stoic grace she achieves is hard-won and incomplete, carried with her rather than left behind.',
              'Grade 8-9':
                'The writer\'s final paragraph enacts a complex negotiation between volition and inevitability, agency and surrender. The temporal structure - "had trained herself," retrospective - suggests that Mrs Chen\'s current composure is the product of deliberate, sustained psychological work extending across the six months she has been coming here. The phrase "she felt nothing" contains a productive paradox: one must feel absence in order to report it, suggesting a layering of consciousness (the observer self observing the emotionally deadened self). This metacognitive awareness complicates any reading of simple numbness; her emotional suppression is performative, possibly even therapeutic. The adjective "artificial" regarding her concern marks her awareness of the performance; she knows she is performing concern and knows she is doing so inadequately ("empty face"). The verbs "stood and walked" are monosyllabic, deliberate, suggesting action stripped of hesitation or emotional excess. Architecturally, the closing images - the eyes of the other occupants following her passage - create what might be called a narrative of contagion: her stoicism becomes a kind of mirror in which they must view their own inevitable summons. In this reading, Mrs Chen\'s emotional restraint functions not as denial but as a form of existential honesty, a refusal of the false comfort of fear and hope alike.',
            },
            markScheme: [
              'Identifies emotional state from textual clues',
              'Explains effect of specific language choices',
              'Shows understanding of psychological state',
              'Analyses verb choices and their significance',
              'Considers contrast with other characters',
              'Develops sophisticated interpretation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-mock-1-writing',
        title: 'Section B: Writing',
        description: `Write a creative piece of fiction in response to one of the prompts below. You should aim to write between 450-600 words. Focus on creating vivid characters, convincing setting, and compelling narrative tension.`,
        totalMarks: 32,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-mock-1-w1',
            questionNumber: 1,
            questionText:
              'Write a story with the title "The Appointment".\n\nYour story could involve someone arriving to meet someone, arriving at a location, or arriving at a moment of decision.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear narrative with a beginning, middle, and end. Characters and setting are established. There is some attempt at creating atmosphere and building tension. Vocabulary is generally appropriate and varied. Sentences are mostly correctly structured. The piece has a clear voice, though it may be straightforward rather than sophisticated. The story engages with the prompt and creates a sense of purpose or meaning.',
              'Grade 6-7':
                'A well-developed narrative with distinct characters who are shown through action and dialogue as well as description. The setting is evoked through precise, selective detail rather than heavy description. There is effective building of tension and pacing is controlled. Language choices are deliberate and varied, with effective use of figurative language or stylistic techniques. Sentences are well-constructed and varied in length and structure for effect. The piece has a distinctive voice and engages the reader. The story develops the prompt in unexpected or sophisticated ways.',
              'Grade 8-9':
                'A fully realised narrative world with complex, psychologically convincing characters. The setting is evoked through economical but precise detail that serves the emotional or thematic purpose of the narrative. Tension builds through structural choices (pacing, withholding information, juxtaposition). Language is controlled and sophisticated, with subtle use of imagery, symbolism, or thematic patterns. Syntax is varied and purposeful, with sentence construction serving the narrative effect. The piece has a compelling and distinctive voice. The story engages deeply with the prompt and creates layers of meaning or implication beyond the surface narrative.',
            },
            markScheme: [
              'Content & Narrative: Clear engagement with prompt, developed narrative arc',
              'Character: Convincing characterisation, revealed through action/dialogue/detail',
              'Setting: Evoked through selective, purposeful detail',
              'Language & Style: Vocabulary range, figurative language, stylistic choices',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Coherence, originality, engagement with reader',
            ],
          },
          {
            id: 'edexcel-p1-mock-1-w2',
            questionNumber: 2,
            questionText:
              'Write a story with the title "The Waiting".\n\nYour story should explore someone waiting for news, for a person, for a moment, or for something to change.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear narrative exploring the emotional experience of waiting. The piece establishes why the character is waiting and conveys their emotional state. There is some use of descriptive language to create atmosphere. The narrative has a clear structure and reaches a conclusion or moment of significance. Vocabulary is generally appropriate; sentences are mostly correct. The piece shows understanding of the emotional dimensions of the prompt.',
              'Grade 6-7':
                "A compelling exploration of waiting as both internal and external experience. The character's emotional state is conveyed through physical details, sensory language, and psychological insight. The passage of time is manipulated through pacing and structural choices. Language is precise and evocative, with effective use of techniques like repetition or fragmentation to convey the experience of waiting. Sentences are varied and controlled. The piece develops thematic possibilities of the prompt.",
              'Grade 8-9':
                'A sophisticated, layered exploration of waiting that goes beyond the literal to examine themes of hope, fear, acceptance, or transformation. The internal experience of waiting is rendered with psychological authenticity. Time becomes a formal element of the narrative; the piece enacts waiting through its structure. Language is nuanced and precise, with subtle use of imagery and symbolism. The piece has philosophical depth and thematic resonance. It engages the reader at both emotional and intellectual levels.',
            },
            markScheme: [
              'Content & Narrative: Clear exploration of waiting, emotional authenticity',
              'Character: Internal state rendered convincingly',
              'Time/Structure: Effective manipulation of pacing and temporal experience',
              'Language & Style: Evocative vocabulary, control of tone and mood',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic depth, originality, emotional impact',
            ],
          },
        ],
      },
    ],
  },
  // ═════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 2: THE INHERITANCE
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-mock-2',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0 - Mock Exam 2: The Inheritance',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-mock-2-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_MOCK_2_SOURCE}`,
        totalMarks: 32,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-mock-2-q1',
            questionNumber: 1,
            questionText:
              'What do you understand from the extract about the significance of the box and the letters it contains?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_MOCK_2_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "The box contains letters from Thomas's grandfather that are to be read one per year on each birthday. The first letter contains a memory of Thomas's childhood that his grandfather wanted to share with him. The grandfather left instructions that the box was to be given to Thomas \"on his twenty-first birthday, unopened,\" which shows he carefully planned this gift. The letters represent a way for the grandfather to stay connected to Thomas even after he has died. They show love and knowledge of Thomas's past.",
              'Grade 6-7':
                'The letters function as a form of temporal bridge, connecting past and present through a deliberately engineered future. The grandfather\'s instructions - "Read one letter on each of your birthdays, starting with your twenty-first. Not before. Not after" - establish a precise temporal contract that extends beyond his death, ensuring his presence in Thomas\'s life across decades. The contents of the first letter reveal that the grandfather possessed detailed knowledge of Thomas\'s childhood and has encoded this knowledge into the letters as a form of profound validation, which Thomas grasps at once: "He remembered," he says, and his mother answers, "He remembered everything." The inheritance operates on two levels simultaneously: materially, it is paper and ink; existentially, it is recognition and continuity of identity. The box transforms inheritance from financial transaction into emotional archaeology, with the grandfather serving as archaeologist of his grandson\'s childhood self.',
            },
            markScheme: [
              'Identifies the nature of the inheritance',
              'Understands the temporal structure of the gift',
              'Recognises emotional significance',
              'References textual details',
            ],
          },
          {
            id: 'edexcel-p1-mock-2-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer uses time and memory to create emotional impact in this extract.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_2_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows time working in many different ways. Thomas is opening a box from his grandfather on his twenty-first birthday, but the letters inside are dated for future birthdays. This creates a connection between past, present, and future. The first letter contains a memory from when Thomas was four years old - the detail about skipping stones shows how specific the grandfather\'s memory is, even though Thomas himself had almost forgotten it. The writer says Thomas "could taste the memory" to show how vivid and sensory it is. The phrase "something that had been waiting a long time to move" shows that feelings Thomas has held for years are finally released. Time is not linear but connected.',
              'Grade 6-7':
                'The writer manipulates temporal layering to create emotional resonance. The narrative moves through multiple timeframes simultaneously: the present moment (Thomas at twenty-one opening the box), a later past (his grandfather\'s last years: the letter is "dated the year before he died"), the distant past (his childhood at four), and the future (the letters awaiting him, with "dates that were yet to come"). This temporal complexity mirrors the essential experience of the inheritance: the grandfather speaks from beyond death through a carefully constructed temporal apparatus. The phrase "a memory Thomas himself had almost forgotten" suggests that memory is unreliable until externally verified; the grandfather\'s act of remembering resurrects the memory in Thomas, making the past present again. The sensory intensity of the recovered memory is synaesthetic: Thomas "could taste the memory", and what he tastes is "the sharp cold of the water, the weight of the stone in his small hand" - touch and weight rendered as taste, so that the past arrives as a physical sensation in the present. The metaphor "holding time itself, compressed" gives this temporal disruption a physical shape: the letter in his hands collapses time, making presence and absence, life and death, immediate and distant, simultaneously real. The final phrase, "when the world became too loud and he needed to remember that he had once been known completely," projects into an imagined future, suggesting that this moment of reading is itself a preparation for other moments, other needs for connection.',
            },
            markScheme: [
              'Identifies multiple temporal layers',
              'Explains the function of memory in the narrative',
              'Analyses sensory language and its effect',
              'Understands emotional impact of temporal structure',
              'Uses relevant evidence',
            ],
          },
          {
            id: 'edexcel-p1-mock-2-q3',
            questionNumber: 3,
            questionText:
              'How does the writer present the relationship between Thomas and his grandfather through the language used in this extract?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_2_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The grandfather is not present in the extract but his presence is felt throughout. The letter shows he cares deeply about Thomas by remembering specific details from the past. The writer describes the grandfather as someone who loved Thomas enough to "engineer an inheritance that would unfold across his entire life," which shows he has thought carefully about Thomas and wanted to stay connected to him. The mother says "He remembered everything," which shows the grandfather\'s love and attention. The relationship is one of care and knowledge rather than presence - the grandfather showed love through remembering and planning.',
              'Grade 6-7':
                'The relationship is constructed through absence and architecture. The grandfather is dead but linguistically present through the letter; he speaks in imperative ("Read one letter on each of your birthdays") and in reminiscence. The letter exhibits a form of radical attentiveness: the grandfather recalls the first time they met, the trip to the park and teaching a four-year-old to skip stones, "counting each skip aloud", details that suggest he was a fully present observer during that encounter. The metaphor "engineer an inheritance" elevates the grandfather\'s action from gift-giving to architectural design: the inheritance is not passive but deliberately constructed to create a specific temporal experience. Crucially, the grandfather\'s love is demonstrated not through presence (he is dead) but through forethought and memory - he has anticipated what Thomas will need and when he will need it. The mother\'s statement "He remembered everything" suggests that the grandfather\'s essential characteristic was his capacity for attention and documentation. The relationship thus becomes one where death interrupts presence but not continuity; the grandfather extends himself into the future through meticulous construction of a temporal apparatus designed to connect with his grandson across time.',
            },
            markScheme: [
              'Identifies how the absent grandfather is presented',
              'Understands love expressed through memory and planning',
              "Analyses the grandfather's attentiveness",
              'Shows understanding of connection across death',
              'Uses relevant textual support',
            ],
          },
          {
            id: 'edexcel-p1-mock-2-q4',
            questionNumber: 4,
            questionText:
              'The final paragraph contains the phrase "the answer to a question he had not yet asked himself." Analyse this phrase and its significance in the extract.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_2_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_2_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "This phrase means that the letters contain something important that Thomas will need to know in the future, even though he doesn't know he needs to know it yet. It echoes the grandfather's own letter, which promises \"the answer to a question you will one day ask yourself\". The grandfather is saying that Thomas will eventually ask a question about his past, his identity, or his relationships, and the letters will provide the answer. This is significant because it shows the grandfather understands that Thomas will go through difficulties in the future and will need to be reminded of his childhood and of being loved. The phrase suggests the inheritance is more than just memories - it's a kind of guidebook for the future.",
              'Grade 6-7':
                'The phrase embodies a paradox that is central to the grandfather\'s philosophy of inheritance. His letter suggests that needs precede consciousness - "You will not know you have been searching for this answer until you find it" - and the narrator\'s final sentence imagines that moment arriving "when the world became too loud" and Thomas requires grounding in remembered love. The question is latent rather than articulated - it exists as a potential rather than an actual need. The grandfather\'s genius is in recognising that his grandson will, at some future point, experience a crisis of identity or meaning, and that the medicine for this crisis is not advice but memory. The phrase "question you will one day ask yourself" presupposes that adulthood involves questions one cannot anticipate, that the self fragments under pressure and needs to be reassembled through connection to a continuous past. The grandfather positions himself as the guardian of this continuity, the one who has observed and documented the moments that will later become anchors. This is a form of radical futural thinking: the gift is addressed to a future self that the grandfather will never meet, anticipated and provided for across time.',
            },
            markScheme: [
              'Identifies the paradox of unanticipated need',
              "Explains the grandfather's understanding of future development",
              'Analyses the function of memory as response to future crisis',
              'Shows sophisticated understanding of temporality',
              'Uses precise textual reference',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-mock-2-writing',
        title: 'Section B: Writing',
        description: `Write a creative piece of fiction in response to one of the prompts below. You should aim to write between 450-600 words. Focus on creating vivid characters, convincing setting, and compelling narrative tension.`,
        totalMarks: 32,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-mock-2-w1',
            questionNumber: 1,
            questionText:
              'Write a story with the title "The Box".\n\nYour story could involve discovering a box, opening a box, being given a box, or a box revealing a secret.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear narrative that engages with the concept of the box as a container of meaning. There is a sense of purpose and mystery. Characters and settings are established. The language creates atmosphere and builds towards a moment of revelation. Vocabulary is appropriate and varied. Sentences are mostly well-constructed. The piece shows understanding of the prompt and creates a satisfying conclusion.',
              'Grade 6-7':
                'A well-crafted narrative that uses the box as a vehicle for exploring themes of discovery, inheritance, secrecy, or identity. The writing is precise and evocative, with careful control of pacing and reveal. Characters are developed through action and detail. The setting enhances the emotional tone. Imagery and symbolism are employed effectively. Sentences are varied and purposeful. The narrative has depth and resonance beyond the surface level.',
              'Grade 8-9':
                'An accomplished narrative that transforms the prompt into a vehicle for sophisticated exploration of theme and meaning. The box functions as symbol, catalyst, and metaphor. The writing demonstrates mastery of narrative technique (foreshadowing, juxtaposition, structural irony). Language is precise and layered, with effective use of imagery and symbolic resonance. The piece has psychological depth and thematic complexity. It engages the reader intellectually and emotionally.',
            },
            markScheme: [
              'Content & Narrative: Clear engagement with prompt, developed narrative arc, sense of meaning',
              'Character: Convincing development through action and detail',
              'The box: Used as meaningful element, not merely container',
              'Language & Style: Precise vocabulary, figurative language, control of tone',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic resonance, originality, depth',
            ],
          },
          {
            id: 'edexcel-p1-mock-2-w2',
            questionNumber: 2,
            questionText:
              'Write a story with the title "The Memory".\n\nYour story should explore someone trying to preserve, recover, or share an important memory.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A narrative that explores the importance of memory and its place in human connection. The piece shows why the memory matters and how it is preserved or shared. There is emotional engagement and clear characterisation. The language conveys the significance of the memory through sensory detail. The narrative reaches a meaningful conclusion. Sentences are generally well-constructed and varied.',
              'Grade 6-7':
                'A compelling exploration of memory as both personal and relational. The narrative examines how memories are constructed, distorted, shared, and valued. Sensory details create the texture of remembered experience. The psychological dimensions of memory are explored. Language is controlled and evocative, with effective use of technique. The piece has thematic depth. Pacing and structure serve the narrative purpose.',
              'Grade 8-9':
                'A sophisticated narrative that interrogates the nature of memory and its role in identity and connection. The piece explores the gap between lived experience and memory, the unreliability and persistence of the remembered past. Language is precise and layered, with subtle use of imagery. The narrative structure enacts the workings of memory (fragmentation, association, recursion). The piece has philosophical depth and emotional authenticity.',
            },
            markScheme: [
              'Content & Narrative: Clear exploration of memory and its significance',
              'Character: Internal consciousness rendered convincingly',
              'Memory: Used as central element, explored for meaning',
              'Language & Style: Sensory language, evocative vocabulary, control of tone',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Depth of exploration, emotional resonance, originality',
            ],
          },
        ],
      },
    ],
  },
  // ═════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 3: THE NIGHT TRAIN
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-mock-3',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0 - Mock Exam 3: The Night Train',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-mock-3-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_MOCK_3_SOURCE}`,
        totalMarks: 32,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-mock-3-q1',
            questionNumber: 1,
            questionText:
              "What do you understand about Maya's journey and her emotional state as she arrives at the station?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_MOCK_3_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Maya is travelling to a place called Mala Zdar, which is not officially on the train timetable. She has been given instructions by her aunt, who has died. Maya is sure about her journey even though the guard thinks it might be a mistake. She has the address and her aunt's letter, which arrived three weeks after the funeral. She seems determined and purposeful, though she is on a journey alone. Her aunt has left her a mystery to solve.",
              'Grade 6-7':
                'Maya\'s journey is constructed as a pilgrimage, explicitly compared to "a pilgrim following a map to a holy place." Her emotional state combines determination with a kind of pious acceptance; she is "sure" in a way that transcends rational justification - she has only a letter, an address, and the dead aunt\'s instructions. The guard\'s concern ("You\'re sure?") marks Maya as an anomaly, someone choosing to travel to places that the official world does not recognise. This suggests her journey is both literal (geographical) and metaphorical (a quest for understanding or connection with the dead). The description of the station as existing "in a state of permanent abandonment" suggests that her destination mirrors the emotional terrain she is navigating: a place suspended between life and death, presence and absence, where time operates according to different rules.',
            },
            markScheme: [
              'Identifies purpose of the journey',
              'Understands emotional commitment despite uncertainty',
              "Recognises significance of the aunt's death",
              'References relevant details',
            ],
          },
          {
            id: 'edexcel-p1-mock-3-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer creates a sense of mystery and otherworldliness in the extract.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_3_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates mystery through the description of the place. The train "did not acknowledge the existence of Mala Zdar," which is strange and puzzling. The station seems to exist "in a state of permanent abandonment" and looks neglected. The description of the town as "genuinely dark" - the kind of dark "before electricity" or "after it had left" - makes it seem separated from normal time. The streets have names but no signs, and the buildings have windows but no lights. This repetition creates a pattern of absence. The key hidden under a pot is "modern, at odds with everything else about the place" - suggesting time works strangely here. All these details create an uncanny, ghostly atmosphere.',
              'Grade 6-7':
                'The writer constructs an atmosphere of ontological displacement through repeated inversions and absences. The train\'s non-acknowledgment of the station - "this train did not acknowledge the existence of Mala Zdar as a destination" - suggests that official reality (the timetable) has declared the place non-existent, yet it materially persists. The station is described with accumulating details of dilapidation (platform cracked, shelter collapsed) that suggest abandonment and temporal dislocation. The crucial phrase - "as though she had travelled not just geographically but temporally" - explicitly articulates the shift from literal to metaphorical space. The town itself is constructed through absences and inversions: "streets had names, but no signs"; "buildings had windows, but no lights." These balanced negations create a kind of grammatical doubling that enacts the uncanny - we have the expected forms (streets, buildings) with their expected contents (signs, lights) removed. The description of darkness as preceding or following electricity suggests time is non-linear, that the town exists outside the arc of modern civilisation. The key, "modern, at odds with everything else about the place," prompts the simile "as though hope itself was anachronistic", which makes an explicit link between temporal displacement and emotion. Inside the house, the floral scent that "might have been her aunt, might have been the ghost of her aunt, might have been a memory of her aunt" deliberately collapses categories of presence and absence, leaving it uncertain whether the aunt is there at all.',
            },
            markScheme: [
              'Identifies techniques creating otherworldliness',
              'Analyses inversions and absences',
              'Explains effects on reader',
              'Shows understanding of temporal dislocation',
              'Uses relevant textual evidence',
            ],
          },
          {
            id: 'edexcel-p1-mock-3-q3',
            questionNumber: 3,
            questionText:
              'How does the writer use light and darkness in this extract to create meaning?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_3_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The darkness is very significant in the extract. The "single light bulb" at the station casts a "sickly yellow" light, which is unpleasant and unhealthy. The town is described as "genuinely dark," which is more than just night-time darkness. The writer explains that this darkness is the kind that existed "before electricity had arrived, or after it had left." This suggests the place is primitive or abandoned, cut off from modern civilisation. Maya uses her phone\'s torch to light the way, showing that once she leaves the station, modern light is the only source of illumination. The light is used to show isolation and otherness - this place lacks normal electricity and light.',
              'Grade 6-7':
                'Light functions as a marker of civilisation, temporality, and presence; its absence signals the town\'s liminal status. The "single light bulb" producing "sickly yellow" light suggests light here is diseased or corrupted, not the wholesome illumination of normal spaces. The narrator\'s elaboration of darkness - "the kind of dark that existed in places before electricity had arrived, or after it had left" - is temporally ambiguous: it could be primitivity or post-civilisational decay. This uncertainty is productive, suggesting the town exists outside progressive temporal narratives. Maya\'s phone torch becomes the intrusion of modern consciousness into this space; its "beam cutting through the darkness" enacts a kind of violence, the imposition of contemporary understanding onto something that resists it. The lack of lights in buildings signals absence of habitation or consciousness. The overall effect is to construct light not as presence but as an intruder, a temporary illumination of fundamentally dark spaces that cannot be domesticated by ordinary light. This supports the implicit suggestion that Maya\'s journey is into a space of death or deep interiority.',
            },
            markScheme: [
              'Identifies symbolic function of light/darkness',
              'Explains temporal implications',
              'Analyses effect on atmosphere and meaning',
              'Shows sophisticated understanding',
              'Uses textual support',
            ],
          },
          {
            id: 'edexcel-p1-mock-3-q4',
            questionNumber: 4,
            questionText:
              'Analyse the ending of the extract, from the moment Maya climbs the stairs. What is the emotional and narrative significance of the letter she finds?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_3_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_3_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Maya finds an envelope with her name written by her aunt. The letter tells her that the house is hers and that it contains "everything I could not say." This is significant because it shows the aunt has left Maya more than a building - she has left her secrets and explanations. Maya begins to cry, which shows she is emotionally affected by this discovery. The letter says the aunt loved her "enough to trust you with my secrets," which shows the importance of the inheritance. The crying suggests this is a moment of emotional release and understanding.',
              'Grade 6-7':
                'The letter functions as the narrative\'s pivot point, transforming the physical journey into an emotional and psychological quest. The aunt\'s statement - "I have left you a house, but more importantly, I have left you a choice" - reframes the inheritance from property to responsibility and freedom. The phrase "everything I could not say" suggests that death and distance have enabled a form of communication that proximity prevented. The trust ("loved you enough to trust you with my secrets") positions Maya as the custodian of the aunt\'s hidden life. The final action - Maya sits down and cries - marks a collapse of the emotional restraint that has characterised her journey. The tears suggest a recognition: the pilgrimage has not been to a house or even to secrets, but to an understanding of love expressed through posthumous revelation. The ambiguity matters - we do not know what the secrets are, what lies waiting in the house. The narrative ends in tears and incompleteness, suggesting that some forms of knowledge or connection cannot be made fully intelligible.',
            },
            markScheme: [
              "Identifies the letter's role in narrative structure",
              'Understands emotional significance of revelation',
              'Explains the concept of posthumous communication',
              'Analyses the meaning of the final image',
              'Shows understanding of narrative development',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-mock-3-writing',
        title: 'Section B: Writing',
        description: `Write a creative piece of fiction in response to one of the prompts below. You should aim to write between 450-600 words. Focus on creating vivid characters, convincing setting, and compelling narrative tension.`,
        totalMarks: 32,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-mock-3-w1',
            questionNumber: 1,
            questionText:
              'Write a story with the title "The Journey".\n\nYour story could involve a physical journey, an emotional journey, a journey to an unexpected destination, or a journey that changes the character.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear narrative with a sense of progression and change. The journey is established and its purpose is understood. Setting details make the destination vivid. The character is affected by the journey, showing some transformation or understanding. Language is varied and appropriate. Sentences are mostly well-constructed. The piece shows understanding of the prompt and has narrative purpose.',
              'Grade 6-7':
                "A well-developed narrative in which the journey serves as both literal and metaphorical structure. The destination is rendered through precise, selective detail. The character's internal experience is conveyed alongside external action. The journey enacts psychological or emotional transformation. Language is controlled and evocative. Pacing and structure serve the narrative. The piece has thematic depth and originality.",
              'Grade 8-9':
                "An accomplished narrative in which journey becomes a vehicle for exploring identity, transformation, or understanding. The setting is rendered with poetic precision. The character's internal landscape mirrors external terrain. Language is sophisticated and layered, with effective use of symbolic resonance. The narrative structure enacts the journey's arc. The piece has philosophical depth and emotional authenticity.",
            },
            markScheme: [
              'Content & Narrative: Clear engagement with journey as concept, developed arc',
              'Setting: Evoked through precise, purposeful detail',
              'Character: Transformation shown through action and reflection',
              'Language & Style: Vocabulary range, control of tone, figurative language',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic resonance, originality, depth',
            ],
          },
          {
            id: 'edexcel-p1-mock-3-w2',
            questionNumber: 2,
            questionText:
              'Write a story titled "The House".\n\nYour story could involve discovering a house, inheriting a house, exploring a house, or a house revealing secrets.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A narrative that uses the house as setting and potentially as symbolic element. The house is described in vivid detail. Characters interact with the space meaningfully. There is a sense of mystery or significance. The language creates atmosphere and mood. Sentences are varied and mostly well-constructed. The piece engages clearly with the prompt.',
              'Grade 6-7':
                'A sophisticated narrative in which the house functions as more than setting - as character, symbol, or repository of meaning. The description of space serves emotional and thematic purpose. The narrative explores the relationship between space and consciousness. Language is precise and evocative. The piece demonstrates control of tone and pacing. There is thematic complexity and originality.',
              'Grade 8-9':
                'An accomplished narrative in which the house becomes a metaphor for interiority, history, or identity. The description of space is economical but precise, serving multiple narrative purposes. The narrative enacts exploration of consciousness through exploration of physical space. Language is sophisticated and layered. The piece has psychological depth and thematic resonance.',
            },
            markScheme: [
              'Content & Narrative: Clear engagement with house concept, developed narrative',
              'Setting: House rendered as meaningful element, not merely location',
              'Character: Interaction with space shows character development',
              'Language & Style: Evocative language, control of atmosphere, figurative language',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Symbolic resonance, originality, emotional impact',
            ],
          },
        ],
      },
    ],
  },
  // ═════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 4: THE GALLERY
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-mock-4',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0 - Mock Exam 4: The Gallery',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-mock-4-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_MOCK_4_SOURCE}`,
        totalMarks: 32,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-mock-4-q1',
            questionNumber: 1,
            questionText:
              "What do you understand about Marcus's relationship to the painting and why its return is significant to him?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_MOCK_4_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Marcus has spent forty-three years thinking about the painting because he was responsible for it when it went missing. He was a junior curator who stepped away for seven minutes, and in that time the painting was stolen. He blames himself for this failure. When the painting returns, it is significant because it finally allows Marcus to let go of his guilt. The letter that accompanies the painting asks the museum to tell him "it was not his fault", which gives him peace. The painting\'s return is about Marcus\'s emotional resolution, not just about recovering art.',
              'Grade 6-7':
                'Marcus\'s relationship to the painting is one of haunting and melancholic responsibility. He has internalised the loss as a personal failure, a moment when his inattention resulted in irreplaceable absence. The painting functions as both literal artwork and psychological burden - Marcus has constructed his entire professional identity around the vigilance required to prevent recurrence of that catastrophic moment. The return of the painting thus operates on multiple levels: it is the restoration of lost cultural property; it is the external validation that absolves Marcus of guilt ("it was not his fault"); and it is the opportunity for closure, the release from decades of psychological torment structured around a single moment of failure. The letter\'s revelation that the thief has "followed his career" reframes the relationship - instead of carrying his guilt alone, Marcus discovers that someone else has watched his working life and knows what the loss cost him. The final clause, in which Marcus "could finally let go," suggests that the painting\'s return enables emotional resolution not through recovery but through reframing - guilt is transformed into understanding.',
            },
            markScheme: [
              "Identifies Marcus's responsibility for the loss",
              'Understands psychological burden of failure',
              "Recognises significance of the letter's absolution",
              'References relevant details',
            ],
          },
          {
            id: 'edexcel-p1-mock-4-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer uses time and loss in this extract to create meaning.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_4_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Time is very important in this extract. The painting has been missing for "forty-three years," which is a very long time. The specific number emphasises how long Marcus has been affected by its loss. The text mentions "seven minutes" - the time Marcus was away when the painting was taken - showing that this short moment has defined the rest of Marcus\'s life. The phrase "haunted by the painting for forty-three years" suggests that loss operates across time and shapes the present. The return cannot give Marcus back those years, and the writer counts them again at the end: "Forty-three years of loss, and now this." But it still frees him: Marcus "could finally let go."',
              'Grade 6-7':
                'The writer structures the extract around temporal asymmetry: a seven-minute lapse in attention generates forty-three years of psychological consequence. The specificity of numbers - "forty-three," "seven," "twenty-two" - anchors abstract temporal experience in concrete measure, making loss quantifiable yet overwhelming. The phrase "forty-three years", which recurs six times, functions as refrain, emphasising how profoundly a single moment can restructure a life. Paradoxically, the loss becomes simultaneously the most real and most impossible thing - real in its material consequence, impossible in its absence (for four decades the painting existed only as memory and loss). The metaphor "haunted by the painting" treats loss as spectral presence, as something that persists precisely through its absence. The writer emphasises the belatedness of restoration: Marcus had "spent forty-three years thinking about it" before its return, meaning the internal work of mourning precedes and exceeds the external recovery. The final phrase - "finally let go" - suggests that closure arrives not when the lost object is recovered but when meaning can be reframed. The letter\'s statement, "it was not his fault," operates as a kind of temporal intervention, reaching backward through decades to modify the meaning of that original seven-minute failure.',
            },
            markScheme: [
              'Identifies the structure of temporal asymmetry',
              'Understands how a moment generates decades of consequence',
              'Analyses the paradox of loss as haunting',
              'Explains belatedness and closure',
              'Uses relevant textual evidence',
            ],
          },
          {
            id: 'edexcel-p1-mock-4-q3',
            questionNumber: 3,
            questionText:
              'How does the writer present the nature and significance of the painting itself?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_4_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The painting is small - "just seventy centimetres square" - and, although it is "worth perhaps a quarter of a million pounds", the writer shows that its value to Marcus has nothing to do with money. It shows two figures flying through a starlit sky, one red and one blue, and a crescent moon. The writer emphasises that it is "not Chagall\'s most famous work" and "Most people had never heard of it." This is significant because it shows that its value to Marcus is not about its fame or importance to the art world, but about what it has meant to him personally. The painting is beautiful but not grand. Its significance to Marcus is personal, but the thief wants it to "belong to everyone", and by the end the world can see it again, so it matters beyond one man as well.',
              'Grade 6-7':
                'The painting is presented as simultaneously modest and profound. Its small scale - "seventy centimetres square" - contradicts its enormous psychological weight, suggesting that significance is not proportional to physical magnitude. The writer emphasises its obscurity: it is neither Chagall\'s most famous work nor widely known. This obscurity is crucial: the museum listed the painting and "mourned" it as institutions do, but because so few people knew it, its loss has weighed most heavily on one man, and its significance becomes personal and emotional. The imagery of the painting - its title, "Lovers in the Night," the bodies "intertwined," a "crescent moon hung like a promise" - suggests themes of connection, devotion, and hope. But the writer does not sentimentalise these details; instead, they remain slightly distant, observed rather than effused over. The painting\'s value is thus separated from its monetary worth or cultural importance and located entirely in its capacity to carry human meaning. The thief\'s statement that it is "the most beautiful thing I have ever owned" confirms this: the painting\'s beauty is not objective but relational, existing in the relationship between object and observer.',
            },
            markScheme: [
              "Identifies the painting's modest scale and obscurity",
              'Understands the separation of significance from fame',
              'Analyses the symbolic imagery',
              'Explains how meaning is relational rather than objective',
              'Uses relevant textual support',
            ],
          },
          {
            id: 'edexcel-p1-mock-4-q4',
            questionNumber: 4,
            questionText:
              'The letter from the thief expresses a philosophy about ownership and beauty. Analyse this philosophy and its importance to the extract.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_4_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_4_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The thief says the painting was kept because it was "the most beautiful thing I have ever owned," but now wants to "know what it\'s like to have something you love belong to everyone instead of just to you." This is a philosophy about sharing beauty and love. The thief suggests that private ownership of beautiful things might be selfish, and that beauty is meant to be shared. By returning the painting, the thief shows an understanding that love can mean letting go. This philosophy is important because it explains the thief\'s motivation and also shows that the painting can now belong to the public. It turns the return of a stolen painting into a kind of gift, though the thief does not pretend the theft was right: "I was young and stupid and angry at the world."',
              'Grade 6-7':
                'The thief\'s philosophy operates as a kind of corrective to both the institution (which mourns the loss as loss of cultural property) and to Marcus (who has internalised guilt). The thief articulates a paradox: that possessing beauty privately is a diminishment, while sharing it is a form of completion. The phrase "what it\'s like to have something you love belong to everyone instead of just to you" suggests that love and beauty increase through distribution rather than diminish. This inversion of typical capitalist logic - where exclusive possession increases value - is crucial. The thief\'s age ("I am old") suggests wisdom gained through time, through having lived with the consequences of possession. The philosophy reframes theft as temporary stewardship, a form of care that ultimately releases the object. The thief\'s admission, "I have followed his career," transforms the dynamic: instead of simply victim and perpetrator, they are revealed as two people bound for decades by the same seven minutes - the thief keeping the painting, Marcus keeping the failure - and the letter releases both. The return of the painting becomes a gift not from thief to institution but from one human to another - a communication across decades and moral boundaries.',
            },
            markScheme: [
              'Identifies the philosophy of shared vs. private ownership',
              'Explains the inversion of capitalist value logic',
              "Understands the thief's wisdom and transformation",
              'Analyses the reframing of relationships',
              'Shows sophisticated interpretation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-mock-4-writing',
        title: 'Section B: Writing',
        description: `Write a creative piece of fiction in response to one of the prompts below. You should aim to write between 450-600 words. Focus on creating vivid characters, convincing setting, and compelling narrative tension.`,
        totalMarks: 32,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-mock-4-w1',
            questionNumber: 1,
            questionText:
              'Write a story titled "The Return".\n\nYour story could involve something or someone returning after a long absence, or the moment when something lost is recovered.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A narrative that explores the significance of return and recovery. The piece establishes what has been lost and why it matters. The return is presented as meaningful. Characters respond emotionally to the return. The language conveys the importance of the moment. Sentences are varied and mostly correct. The piece engages with the prompt and shows clear narrative purpose.',
              'Grade 6-7':
                'A well-developed narrative in which return becomes a vehicle for exploring themes of forgiveness, closure, change, or redemption. The emotional complexity of return is rendered through precise detail and psychological insight. The piece explores what has changed in the absence. Language is controlled and evocative. The narrative has thematic depth and originality.',
              'Grade 8-9':
                'An accomplished narrative in which return functions as metaphor and catalyst for profound transformation. The piece explores the paradox that what is returned is never what was lost. Language is sophisticated and layered. The narrative structure creates multiple meanings. The piece has philosophical depth and emotional authenticity.',
            },
            markScheme: [
              'Content & Narrative: Clear engagement with return as concept, developed arc',
              'Loss and recovery: What is lost and its emotional significance',
              'Character: Response to return shows depth and development',
              'Language & Style: Precise vocabulary, control of emotion and tone',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic depth, originality, emotional impact',
            ],
          },
          {
            id: 'edexcel-p1-mock-4-w2',
            questionNumber: 2,
            questionText:
              'Write a story titled "The Letter".\n\nYour story could involve writing a letter, receiving a letter, or a letter revealing something important.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                "A narrative that uses a letter as a significant element. The letter's contents are meaningful and affect the character. There is a clear reason why the letter matters. The piece shows the emotional impact of written communication. Language is varied and appropriate. Sentences are mostly well-constructed. The piece engages clearly with the prompt.",
              'Grade 6-7':
                'A sophisticated narrative in which the letter functions as more than plot device - as revelation, confession, or bridge between past and present. The writing explores the power of written communication. The piece shows how letters can change meaning or understanding. Language is precise and controlled. The narrative has emotional resonance and originality.',
              'Grade 8-9':
                'An accomplished narrative that explores the unique power of written communication and its ability to bridge time, absence, and silence. The letter becomes a site of complex meaning-making. Language is sophisticated and serves multiple narrative purposes. The piece has philosophical depth and emotional authenticity.',
            },
            markScheme: [
              'Content & Narrative: Clear engagement with letter as meaningful element',
              'The letter: Used purposefully, its contents significant',
              'Communication: Shows power of written word',
              'Language & Style: Precise vocabulary, control of tone and emotion',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic resonance, originality, depth',
            ],
          },
        ],
      },
    ],
  },
  // ═════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 5: THE LAST LETTER
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-mock-5',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0 - Mock Exam 5: The Last Letter',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-mock-5-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_MOCK_5_SOURCE}`,
        totalMarks: 32,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-mock-5-q1',
            questionNumber: 1,
            questionText:
              'What do you understand about the relationship between Diane and her brother Michael, and how the letter changes her understanding of this relationship?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_MOCK_5_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Diane and Michael had not seen each other for fifteen years. Their separation was not caused by a dramatic fight but by a slow drift. Michael moved to Australia while Diane stayed in London, and when their parents died they grieved in different ways and gradually lost connection. The letter reveals that Michael was sorry about the distance and that he always thought of her as his sister. The letter changes Diane's understanding because she learns that Michael's distance was caused by fear, not rejection. She learns that he never stopped thinking of her, and that forgiveness is possible even though he may already be dead.",
              'Grade 6-7':
                'The relationship is constructed as a tragically attenuated sibling bond that has been severed not by dramatic rupture but by "a slow drift": distance, change, and above all grief that the two of them handled so differently that it pushed them apart. The narrator\'s bracketed explanation, that "his grief had looked like distance" while hers "had looked like an inability to stop speaking about it", reveals how emotional responses can create isolation even when rooted in shared loss. The fifteen-year separation thus represents not rejection but the failure of emotional language to bridge divergent responses to trauma. The letter functions as retrospective translation: what looked to Diane like distance is reframed as Michael\'s fear, since he admits that "your grief frightened me so much that I had to turn away from it." The crucial revelation is "I never stopped thinking of you," which transforms the temporal narrative: the fifteen years of absence are revealed to be simultaneously filled with an invisible presence of continued connection. The list of childhood dreams becomes the evidence that connection predates the separation and persists beneath it.',
            },
            markScheme: [
              'Identifies the separation and its causes',
              "Understands Michael's emotional state",
              "Recognises the letter's reframing of the past",
              'References relevant details',
            ],
          },
          {
            id: 'edexcel-p1-mock-5-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer uses the childhood list to create emotional significance.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_5_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The list shows the dreams Diane and Michael had together when they were young. It includes things like sailing around the world, climbing a mountain, and learning to play the violin together. Michael remembers that Diane "had terrible handwriting even then," which makes the memory specific and real. The list is important because it represents a time when Diane and Michael were connected and believed they "would always be connected." The letter writer, Michael, has kept this list for forty years, which shows it meant a lot to him. Diane reads it though she "could barely see through her tears," because it represents what they lost - the friendship and shared dreams.',
              'Grade 6-7':
                "The list functions as a palimpsest of unfulfilled potential and as material evidence of a shared imagined future that the present has failed to realise. The children's aspirations - sailing, climbing, musical collaboration - are simple but ambitious, and they share a common feature: they are collaborative activities, not individual achievements. The detail about Diane's \"terrible handwriting even then\" creates specificity and establishes memory's particularity; it is a small observation that only someone who had been paying careful attention could preserve. Michael's preservation of the list across forty years represents a form of active remembrance, a refusal to let the shared past disappear. The contrast between the list's optimism and the adult reality of separation becomes poignant: the children who made these plans have not sailed together, climbed mountains together, or played violin together. Yet the list's very existence, preserved and transmitted through Michael's letter, becomes a different kind of connection: the list becomes proof that connection once existed. Diane's tears represent the collision of what was promised (eternal friendship) with what transpired (fifteen years of separation), mediated by the revelation that Michael held the promise constant across those years.",
            },
            markScheme: [
              'Identifies the content and significance of the list',
              'Understands its function as evidence of past connection',
              'Analyses its effect on Diane',
              'Explains the contrast between promise and reality',
              'Uses relevant textual support',
            ],
          },
          {
            id: 'edexcel-p1-mock-5-q3',
            questionNumber: 3,
            questionText:
              "How does the writer use Michael's voice and perspective in the letter to create emotional impact?",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_5_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The letter is written in Michael\'s voice directly to Diane. He says "I don\'t know how to write this," which shows his difficulty and honesty. He uses simple, direct sentences when talking about his illness: "The prognosis is not good." This makes it very real and not sentimental. He apologises directly and admits his failure: "I was a coward. I was a child, really, even when I was a man." This honesty is powerful. He also says "I am not afraid of death" which is brave and meaningful. The letter is deeply personal and sincere, which makes it emotionally powerful. Michael speaks directly to Diane with love and regret.',
              'Grade 6-7':
                'Michael\'s voice in the letter is characterised by hard-won honesty and undefended vulnerability. The opening statement - "I don\'t know how to write this, so I\'m just going to write it" - enacts a deliberate rejection of protective rhetorical strategies; he performs his struggle rather than concealing it. The direct address ("Dear Diane") and second-person pronouns create intimacy across the temporal and geographical distance. Michael\'s analysis of his own emotional failure is remarkably clear-eyed: he does not excuse his behaviour but explains it ("the way your grief frightened me so much that I had to turn away from it"). This explanation is not absolution - it is contextual understanding that stops short of excuse. The statement "I was a child, really, even when I was a man" suggests a form of emotional immaturity that he recognises only in retrospect. The pairing "I am not afraid of death. But I am sad about this." separates existential acceptance from relational grief: what saddens Michael is not dying but the loss of connection, "the years we wasted." The letter\'s fundamental movement is from confession (I was wrong) to assertion (you will always be my sister) - the assertion that relationship is not contingent on presence or behaviour but ontological, unchanging.',
            },
            markScheme: [
              'Identifies voice as direct and confessional',
              'Understands self-awareness and honesty',
              'Analyses emotional register and tone',
              'Explains relationship between confession and assertion',
              'Uses relevant textual evidence',
            ],
          },
          {
            id: 'edexcel-p1-mock-5-q4',
            questionNumber: 4,
            questionText:
              'Near the end of the extract, Diane holds the list in one hand and the letter in the other. Analyse the significance of this image and what it suggests about forgiveness and closure.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_5_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_5_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Diane holds the letter in one hand and the list in the other. The letter is Michael\'s voice and his apology and love. The list is the physical evidence of their shared past. Together, they represent past and present, what was and what is. The phrase "her brother\'s voice - arriving too late, arriving just in time, arriving at the only moment it could have arrived" is important because it shows that the timing is paradoxical. The letter is late because Michael may already have died, but it arrives at exactly the right moment because Diane is finally ready to hear it. Forgiveness is suggested because Diane is holding both objects with care and emotion. The final line, "Even if he was already gone," suggests that the relationship might be mended even across death.',
              'Grade 6-7':
                'The image of Diane holding the list in one hand and the letter in the other creates a physical embodiment of temporal paradox. One hand holds the present (the letter, arriving now), the other holds the past (the list, preserved across forty years). Her body becomes a site where past and present, absence and presence, meet. The phrase "her brother\'s voice" is crucial: the letter is not merely paper but voice, presence, communication that may already have crossed the boundary of death. The temporal paradox is expressed as "arriving too late, arriving just in time, arriving at the only moment it could have arrived" - Michael\'s letter is too late and yet perfectly timed. The phrase suggests a form of narrative inevitability: as if all the years of separation were necessary preconditions for understanding the letter\'s contents. Diane\'s forgiveness is never stated - Michael can only ask for it: "If you find it in yourself to forgive me, write back" - but her emotional response (tears) and her careful holding of both objects suggest she is moving towards it, while the narrator\'s "could, perhaps, be mended" keeps the outcome tentative. The final line, "Even if he was already gone," leaves his death uncertain and refuses to let it close the story: the mending the narrator imagines does not depend on Michael being alive to see it. It is the approach of death that makes him honest - "I\'m sick" comes before "I\'m sorry" - so the prospect of dying, not the fact of it, is what permits the confession.',
            },
            markScheme: [
              'Identifies the dual image of letter and list',
              'Understands temporal paradox',
              'Analyses the significance of holding both',
              'Explains forgiveness in the face of death',
              'Shows sophisticated interpretation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-mock-5-writing',
        title: 'Section B: Writing',
        description: `Write a creative piece of fiction in response to one of the prompts below. You should aim to write between 450-600 words. Focus on creating vivid characters, convincing setting, and compelling narrative tension.`,
        totalMarks: 32,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-mock-5-w1',
            questionNumber: 1,
            questionText:
              'Write a story titled "The Confession".\n\nYour story could involve someone confessing something, revealing a secret, or speaking a truth that has been hidden.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A narrative that explores the significance of confession or revelation. The piece establishes what needs to be confessed and why. The confession is presented as emotionally significant. Characters respond meaningfully to the revelation. Language conveys the importance of truth-telling. Sentences are varied and mostly correct. The piece engages clearly with the prompt.',
              'Grade 6-7':
                'A well-developed narrative in which confession becomes a vehicle for exploring themes of guilt, forgiveness, honesty, or connection. The emotional complexity of confession is rendered through dialogue and internal reflection. The piece explores what prevents and enables confession. Language is controlled and precise. The narrative has thematic depth and originality.',
              'Grade 8-9':
                'An accomplished narrative that explores confession as both moral and relational act. The piece examines how truth-telling changes relationships and consciousness. Language is sophisticated and serves emotional and thematic purposes. The narrative structure creates multiple meanings. The piece has philosophical depth.',
            },
            markScheme: [
              'Content & Narrative: Clear exploration of confession, developed arc',
              'Truth-telling: What is confessed and its significance',
              'Character: Internal state and response to confession',
              'Language & Style: Control of tone, precision of language',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic depth, originality, emotional impact',
            ],
          },
          {
            id: 'edexcel-p1-mock-5-w2',
            questionNumber: 2,
            questionText:
              'Write a story titled "Forgiveness".\n\nYour story could explore forgiveness between people, forgiveness of oneself, or whether forgiveness is possible.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'A narrative that explores the complexity of forgiveness. The piece establishes what needs forgiving and why. The emotional significance of forgiveness or its absence is clear. Characters respond authentically to forgiveness or its denial. Language conveys emotional complexity. Sentences are varied and mostly correct. The piece engages meaningfully with the prompt.',
              'Grade 6-7':
                'A sophisticated narrative that explores forgiveness as both individual and relational process. The piece examines what forgiveness requires and what it enables. The emotional subtlety of forgiveness is rendered through precise detail. The narrative avoids sentimentality while maintaining emotional authenticity. Language is controlled and precise. The piece has thematic resonance.',
              'Grade 8-9':
                'An accomplished narrative that examines forgiveness as both impossible and necessary. The piece explores the paradox that forgiveness changes the forgiver more than the forgiven. Language is sophisticated and layered. The narrative structure creates complexity of meaning. The piece has philosophical depth and emotional authenticity.',
            },
            markScheme: [
              'Content & Narrative: Clear exploration of forgiveness, developed complexity',
              'Emotional authenticity: How forgiveness feels explored honestly',
              'Character: Development through forgiveness or its denial',
              'Language & Style: Control of emotion, precision of language',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic resonance, originality, depth',
            ],
          },
        ],
      },
    ],
  },
  // ═════════════════════════════════════════════════════════════════════════
  // MOCK EXAM 6: THE WINTER WALK
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-mock-6',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0 - Mock Exam 6: The Winter Walk',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-mock-6-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_MOCK_6_SOURCE}`,
        totalMarks: 32,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-mock-6-q1',
            questionNumber: 1,
            questionText:
              "What do you understand from the opening of the extract about Eleanor's emotional state and her relationship with grief?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_MOCK_6_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "Eleanor has not expected to still be grieving two years after her husband's death. She thought grief would follow a timeline with stages, but she has learned that grief does not follow timelines. It comes unexpectedly. That is what happens in the opening: looking out at the snow, she had forgotten to be sad, and then she remembered. She puts on his coat, which shows she is still connected to him through objects. Grief is something she has to manage and live with, not something she can complete.",
              'Grade 6-7':
                'Eleanor\'s relationship with grief is characterised by dissonance between theoretical understanding (the staged, processual model implied by therapy and self-help literature) and lived experience (grief\'s unpredictability, its return despite the passage of time). The opening establishes that she has internalised narratives of grief as something with determinate temporal structure - "You were supposed to move through the stages, arrive at acceptance, begin again" - but her actual experience reveals grief as temporally unmoored. The phrase "grief was worst indoors, where it could concentrate, could gather weight" suggests that she understands grief spatially and materially, not abstractly. The putting-on of her husband\'s coat is a deliberate choice to inhabit his presence; the coat retains "the faint smell of his aftershave," suggesting that sensory memory persists where temporal distance has not yet healed emotional wounds. Two years of elapsed time has not produced acceptance but a fragile equilibrium, broken on a snowy morning when she "had forgotten" and then "had remembered".',
            },
            markScheme: [
              "Identifies Eleanor's expectation of grief as linear",
              "Understands the unpredictability of grief's return",
              'Recognises the significance of sensory memory',
              'References relevant details',
            ],
          },
          {
            id: 'edexcel-p1-mock-6-q2',
            questionNumber: 2,
            questionText:
              "Analyse how the writer uses snow and winter imagery to create atmosphere and reflect Eleanor's emotional state.",
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_6_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The snow is described as falling "quietly", as though gravity "had decided to be gentle about the work," which creates a peaceful atmosphere. However, the writer also says it "covered everything," which suggests that the snow is erasing or hiding the world. The world is described as "simplified" - all complications removed. This mirrors Eleanor\'s emotional state: outside in the snow, her grief "diffused" and became "part of something larger." The image of footprints being "covered" by new snow is significant because it suggests that even evidence of Eleanor\'s presence is erased. This reflects how grief can make you feel invisible or like you don\'t exist. The cold and numbness are both physical and emotional.',
              'Grade 6-7':
                'The writer establishes snow as simultaneously obliterating and consoling. The opening image - snow falling "quietly, the way heavy things sometimes do" - leads into a gentle personification, gravity "tired" and deciding "to be gentle about the work", which suggests compassion from the natural world. The phrase "transformed into something that resembled peace though it was actually just the absence of sound" is crucial: it distinguishes apparent peace from mere silence, and invites the reader to ask the same of Eleanor, whose outward calm may be not resolution but psychological shutdown. The statement that "The snow covered everything" functions as a visual correlate to emotional suppression: grief is not processed but buried under layers. The detail about footprints being "covered" creates a temporal paradox: Eleanor leaves traces of her passage, but the snow erases them, suggesting both the compulsion to mark presence and the futility of that marking. The frozen pond becomes a central symbol: it should be transparent (ice visible beneath surface), but snow occludes it, so that "The pond was hidden. The past was buried." This spatial configuration externalises Eleanor\'s internal predicament: the past is accessible but concealed, present but invisible.',
            },
            markScheme: [
              'Identifies snow as multivalent symbol',
              'Understands the paradox of peace and absence',
              'Analyses the significance of erasure and covering',
              'Explains how landscape mirrors internal state',
              'Uses relevant textual evidence',
            ],
          },
          {
            id: 'edexcel-p1-mock-6-q3',
            questionNumber: 3,
            questionText:
              'The extract contains a memory of Eleanor and her husband skating. How does the writer use this memory to create meaning?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_6_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Eleanor remembers skating with her husband on the same frozen pond. He held her hand and helped her because she was not a good skater. They laughed together and nearly fell. The memory is "so vivid" that Eleanor "could almost feel the ice under her feet." But then she realises that she is standing on snow, not ice. The ice is hidden beneath the snow. This is significant because the memory is vivid but inaccessible, like the past. The memory reminds Eleanor of her husband\'s presence and care, but it is also painful because he is no longer there.',
              'Grade 6-7':
                'The memory of skating functions as the extract\'s emotional centre. It is characterised by tactile vividness - Eleanor can "almost feel the ice under her feet" - which creates the illusion of temporal collapse: past and present threaten to merge. The memory of his "hand in hers," his steadying presence as she negotiated the uncertainty of ice, becomes the physical embodiment of the relationship\'s essential quality: mutual support, vulnerability made safe by presence. The temporal marker "years ago, when he was still alive" emphasises the past\'s closure. But the crucial turn occurs in the present: Eleanor is standing on snow, believing she is on ice, only to realise that the two are distinct, that the surface has changed. This realisation becomes metaphorical: the past is accessible in memory but occluded by time\'s accumulation (snow covering ice). What Eleanor wanted was not merely to remember but to inhabit the past, to feel the ice, to have his hand in hers. The collapse of memory and present, of desire and reality, generates the emotional crisis that follows.',
            },
            markScheme: [
              "Identifies the memory's emotional significance",
              'Understands the vividness of the memory and the collapse it suggests',
              'Analyses the symbolic meaning of ice and snow',
              'Explains the failure of temporal collapse',
              'Uses relevant textual support',
            ],
          },
          {
            id: 'edexcel-p1-mock-6-q4',
            questionNumber: 4,
            questionText:
              'Near the end of the extract, the writer describes Eleanor becoming "nearly invisible, nearly indistinguishable from the landscape itself." Analyse this image and its significance for understanding Eleanor\'s experience of grief.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EDEXCEL_P1_MOCK_6_EXTRACT,
            extractSource: EDEXCEL_P1_MOCK_6_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Eleanor becomes so covered with snow that she is nearly invisible. The image suggests that grief is consuming her identity; she is merging with the landscape. However, the writer says she becomes "part of the snow itself," which is not entirely negative. The phrase "except inside her own body, inside the weight of memory" is important because it shows that even though Eleanor is invisible externally, internally she is still aware and still carrying the memory of her husband. The final image of her walking back towards the world shows she is still moving forward despite the grief. The frozen tears suggest both sadness and a kind of transformation or acceptance.',
              'Grade 6-7':
                'The image of Eleanor becoming "nearly invisible, nearly indistinguishable from the landscape" represents a kind of dissolution of self into environment. The near-total merge with snow suggests not death but a form of unbeing, a surrender to the external landscape once her tears are spent. The repeated qualifier "nearly" is crucial: the dissolution is incomplete, always on the verge but never fully realised. This captures the peculiar experience of profound grief: the self persists even when it wishes to dissolve, even when it feels unmade. The phrase "except inside her own body, inside the weight of memory" creates a crucial distinction: externally, with her footprints covered, there is "no evidence that she had ever existed"; internally, she remains a repository of memory and sensation. This formulation suggests that grief operates as a form of internal amplification even as external presence diminishes. The image of her walking back "toward the world" - back towards the town, the house, the next day - is not triumph but continuation. The final image of tears freezing on her face suggests a kind of crystallisation: emotion becomes literal (crystallised water), integrated into the landscape not through erasure but through transformation.',
              'Grade 8-9':
                'The image enacts a paradox: Eleanor becomes nearly indistinguishable from the landscape just after her moment of greatest emotional intensity, once "the crying stopped" and she has sat so long that the snow has "accumulated on her coat, on her hair." This collapse of self into environment is not annihilation but a strange form of presence - she is still there beneath the snow, a shape the landscape holds even as it covers her, although once she stands the extract insists "She had left no trace." The qualifying "nearly" is essential: it suggests that absolute dissolution is impossible, that consciousness and memory persist as remainder even when everything else seems to have dissolved. The phrase "inside the weight of memory" positions memory not as transcendent or ethereal but as physical, as weight that the body carries. Her return is not passive but described through a sequence of deliberate actions ("She stood up slowly," "She turned around," "Eleanor began walking back"). This agency-in-dissolution complicates any simple reading of surrender or defeat. The final transformation - tears freezing to ice - completes a cycle: water (tears, emotion) becomes solid (ice), becomes indistinguishable from the landscape\'s own substance. Eleanor does not escape grief through walking back to the town; rather, she has been fundamentally transformed by her encounter with it. She returns not as the person who left but as someone who has been crystallised by the experience of loss.',
            },
            markScheme: [
              'Identifies the paradox of dissolution',
              'Understands the significance of "nearly"',
              'Analyses the persistence of memory and consciousness',
              'Explains the final transformation of tears to ice',
              "Shows sophisticated interpretation of grief's transformation",
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-mock-6-writing',
        title: 'Section B: Writing',
        description: `Write a creative piece of fiction in response to one of the prompts below. You should aim to write between 450-600 words. Focus on creating vivid characters, convincing setting, and compelling narrative tension.`,
        totalMarks: 32,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-mock-6-w1',
            questionNumber: 1,
            questionText:
              'Write a story titled "The Walk".\n\nYour story could involve someone taking a significant journey on foot, discovering something through walking, or walking as a form of escape or processing.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                "A narrative that uses walking as a significant element. The piece shows why the walk is important to the character. The landscape is described vividly. The character's internal experience is conveyed. The language creates atmosphere. Sentences are varied and mostly correct. The piece engages clearly with the prompt.",
              'Grade 6-7':
                "A well-developed narrative in which walking becomes a vehicle for internal exploration. The piece uses landscape to externalise emotional experience. The character's journey is both physical and psychological. Language is precise and evocative. The narrative has thematic depth and originality.",
              'Grade 8-9':
                'An accomplished narrative that uses walking and landscape as metaphor for emotional or existential journey. The piece explores how movement through space correlates with movement through consciousness. Language is sophisticated and layered. The narrative has philosophical depth.',
            },
            markScheme: [
              'Content & Narrative: Clear engagement with walk as meaningful element',
              'Setting: Landscape used to reflect internal state',
              'Character: Internal journey rendered convincingly',
              'Language & Style: Evocative language, precise vocabulary',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic resonance, originality, depth',
            ],
          },
          {
            id: 'edexcel-p1-mock-6-w2',
            questionNumber: 2,
            questionText:
              'Write a story titled "The Absence".\n\nYour story could explore the presence of absence, loss, or how people live with what or who is gone.',
            marks: 32,
            suggestedTimeMinutes: 50,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                "A narrative that explores loss and absence meaningfully. The piece establishes what is absent and why it matters. The character's relationship to absence is shown through detail and action. The language conveys emotional significance. Sentences are varied and mostly correct. The piece engages clearly with the prompt.",
              'Grade 6-7':
                'A sophisticated narrative in which absence becomes a presence, in which what is missing structures the narrative. The piece explores how people construct lives around emptiness. Sensory and emotional details render absence tangibly. The narrative has thematic complexity and originality.',
              'Grade 8-9':
                'An accomplished narrative that examines absence as paradoxical presence, as something that shapes consciousness and experience. The piece explores how memory and imagination make absence persist. Language is sophisticated and layered. The narrative has philosophical depth.',
            },
            markScheme: [
              'Content & Narrative: Clear exploration of absence and loss',
              'Character: Relationship to absence shown authentically',
              'Thematic depth: How absence structures experience',
              'Language & Style: Precise vocabulary, control of emotion',
              'Technical accuracy: Spelling, punctuation, grammar',
              'Overall effect: Thematic resonance, originality, depth',
            ],
          },
        ],
      },
    ],
  },
]
