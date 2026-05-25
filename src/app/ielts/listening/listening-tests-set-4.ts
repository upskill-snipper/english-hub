// ─── IELTS Academic Listening — practice test data (Set 4) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, LISTENING_SET_4, …)
// downstream.
//
// Unlike the earlier shorter warm-up sets, this set ships ONE *full-length*
// original practice test that mirrors the real four-section IELTS Listening
// paper (4 sections / ~40 questions, ~30 minutes):
//   • Section 1 — an everyday TRANSACTIONAL DIALOGUE (here: booking a holiday
//     cottage by phone). A surname is spelled and several numbers are dictated
//     so spelling/number gap answers have a clear basis in the audio.
//   • Section 2 — an everyday MONOLOGUE (here: a museum visitor-centre
//     announcement / tour briefing) with signpost language the questions track.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor
//     planning a field-study report), assessed with note completion + MCQ.
//   • Section 4 — an academic LECTURE (here: a talk on the science of sleep).
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER"). Number answers list
//              both digit and word variants (e.g. ['12','twelve']).
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given; used sparingly.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only; it has
// no affiliation with or endorsement by the official IELTS test owners.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_4: ListeningTest[] = [
  {
    id: 'ls-academic-4',
    title:
      'Practice Test 4 — Holiday Cottage Booking, Museum Tour, Field Study & The Science of Sleep',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-4-s1',
        title: 'Section 1 — Booking a holiday cottage',
        // ~290 words. Transactional dialogue (Section 1 style): a customer phoning
        // a holiday-letting agency. A surname is spelled, a phone number, a date,
        // a number of nights and a deposit are all dictated, and one detail (the
        // total price) depends on a stated choice — mirroring the form/note
        // completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good morning, Lakeview Cottage Lettings, Sophie speaking. How can I help?

MAN: Hello, I'd like to book one of your cottages for a short break, please.

WOMAN: Of course. Let me take a few details. Could I have your full name?

MAN: Yes, it's Gregory Whitlock. The surname is spelled W-H-I-T-L-O-C-K.

WOMAN: Thank you, Mr Whitlock. And a contact telephone number?

MAN: It's oh-seven-eight-one-double-three, four-double-six, oh-two.

WOMAN: Let me read that back: zero-seven-eight-one-three-three-four-six-six-zero-two.

MAN: That's the one.

WOMAN: Lovely. Now, which property were you interested in?

MAN: The one called Willow Barn, if it's free.

WOMAN: Let me check… Yes, Willow Barn is available. When would you like to arrive?

MAN: We'd come on Friday the ninth, and stay for four nights.

WOMAN: Friday the ninth, four nights. That cottage sleeps up to six, so it should be plenty of room. Now, there are two rates. The standard rate is ninety pounds a night. But if you book for four nights or more, the midweek rate applies, which is seventy pounds a night.

MAN: We'll definitely be staying four nights, so the lower rate, please.

WOMAN: Perfect, so that's seventy a night. To secure the booking we ask for a deposit of fifty pounds, with the balance due on arrival.

MAN: That's fine. Is there parking?

WOMAN: Yes, there's space for two cars in the courtyard. One more thing — the nearest shop is a fifteen-minute drive away, so do bring supplies with you.

MAN: Good to know. Thank you very much.

WOMAN: You're welcome. I'll email your confirmation today.`,
        questions: [
          {
            id: 'ls-004-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Whitlock', 'whitlock'],
            explanation:
              'The caller gives his name as “Gregory Whitlock” and spells the surname: W-H-I-T-L-O-C-K. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-004-s1-q2',
            type: 'gap',
            prompt:
              'Contact telephone number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['07813346602', '0781 334 6602', '07813 346602', '0781334 6602'],
            explanation:
              'He dictates “oh-seven-eight-one-double-three, four-double-six, oh-two”, which the assistant reads back as “zero-seven-eight-one-three-three-four-six-six-zero-two” = 07813346602. Note that “double three” means two threes and “double six” means two sixes; spacing is not penalised.',
          },
          {
            id: 'ls-004-s1-q3',
            type: 'gap',
            prompt: 'Property booked: ____________. Write TWO WORDS.',
            acceptableAnswers: ['Willow Barn', 'willow barn'],
            explanation:
              'He asks for “The one called Willow Barn”, and the assistant confirms “Willow Barn is available.” The answer is the cottage name, “Willow Barn”.',
          },
          {
            id: 'ls-004-s1-q4',
            type: 'gap',
            prompt: 'Arrival date: Friday the ____________. Write A NUMBER.',
            acceptableAnswers: ['9', 'ninth', '9th'],
            explanation:
              'He says they would “come on Friday the ninth”, so the arrival date is the 9th. Ordinal numbers said aloud (ninth) map to the digits 9.',
          },
          {
            id: 'ls-004-s1-q5',
            type: 'gap',
            prompt: 'Number of nights: ____________. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'He plans to “stay for four nights”, so the answer is 4. This figure also triggers the cheaper midweek rate in the next question — Section 1 details often connect.',
          },
          {
            id: 'ls-004-s1-q6',
            type: 'mcq',
            prompt: 'How much per night will the man actually pay?',
            options: [
              'Ninety pounds, the standard rate',
              'Seventy pounds, the midweek rate for four nights or more',
              'Ninety pounds, because the cottage sleeps six',
              'Fifty pounds, the deposit rate',
            ],
            correctIndex: 1,
            explanation:
              'The standard rate is ninety pounds, but “if you book for four nights or more, the midweek rate applies, which is seventy pounds a night.” Because he stays four nights (Q5), he pays seventy. The distractors reuse real numbers (ninety, fifty, six) with the wrong reason — listen for the condition, not just the keyword.',
          },
          {
            id: 'ls-004-s1-q7',
            type: 'gap',
            prompt: 'Deposit required to secure the booking: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['50', 'fifty'],
            explanation:
              'She says, “we ask for a deposit of fifty pounds, with the balance due on arrival.” The deposit is £50; the rest is paid on arrival.',
          },
          {
            id: 'ls-004-s1-q8',
            type: 'gap',
            prompt:
              'There is parking space for ____________ cars in the courtyard. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'She confirms, “there’s space for two cars in the courtyard.” The answer is 2.',
          },
          {
            id: 'ls-004-s1-q9',
            type: 'gap',
            prompt:
              'The nearest ____________ is a fifteen-minute drive away, so guests should bring supplies. Write ONE WORD.',
            acceptableAnswers: ['shop', 'store', 'supermarket'],
            explanation:
              'She advises, “the nearest shop is a fifteen-minute drive away, so do bring supplies with you.” The answer is “shop” (store/supermarket accepted as synonyms).',
          },
          {
            id: 'ls-004-s1-q10',
            type: 'gap',
            prompt:
              'The assistant will send the man his ____________ by email today. Write ONE WORD.',
            acceptableAnswers: ['confirmation'],
            explanation:
              'She finishes, “I’ll email your confirmation today.” The document sent is the booking “confirmation”.',
          },
        ],
      },
      {
        id: 'ls-academic-4-s2',
        title: 'Section 2 — Museum visitor-centre briefing',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // briefing visitors at a museum. Uses sequencing/signpost language
        // ("to begin", "next", "after that", "finally") that the questions follow
        // in order, with a sentence-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and a warm welcome to the Harbourton Maritime Museum. My name is Owen, and I'm one of the visitor guides. Before you explore, let me give you a quick briefing so you make the most of your visit.

To begin with, a note about tickets. Your wristband covers all the permanent galleries, but the temporary exhibition on the top floor — currently a display of antique diving equipment — requires a separate ticket, which you can buy at the desk for an extra four pounds.

Next, the layout. We're standing in the entrance hall on the ground floor. The largest gallery, which holds our restored fishing boats, is straight ahead. I'd suggest starting there, because it gets very busy after about eleven o'clock when the school groups arrive.

After that, take the stairs or the lift to the first floor, where you'll find the exhibition on local trade and the interactive map room — that's especially popular with children, who can steer a virtual ship across the bay.

A word about photography: you're very welcome to take photos throughout the museum, but please switch off your flash in the model gallery, as the bright light can damage the delicate paintwork on the older models.

Finally, if you'd like a guided talk, these run every day at half past two and last around forty minutes; just gather by the ship's wheel near the café. And speaking of the café — it serves hot lunches until two o'clock, so do plan around that if you're hungry. Enjoy your visit, and please don't hesitate to ask any of our guides if you need directions.`,
        questions: [
          {
            id: 'ls-004-s2-q11',
            type: 'mcq',
            prompt: 'What does the speaker say about the temporary exhibition on the top floor?',
            options: [
              'It is included in the standard wristband.',
              'It needs a separate ticket costing an extra four pounds.',
              'It is closed to visitors this week.',
              'It is only open to school groups.',
            ],
            correctIndex: 1,
            explanation:
              'He explains the wristband covers the permanent galleries, but the top-floor temporary exhibition “requires a separate ticket, which you can buy at the desk for an extra four pounds.” Option B matches; the others are not stated.',
          },
          {
            id: 'ls-004-s2-q12',
            type: 'gap',
            prompt:
              'The largest gallery, straight ahead on the ground floor, holds the museum’s restored fishing ____________. Write ONE WORD.',
            acceptableAnswers: ['boats', 'boat'],
            explanation:
              'He describes “The largest gallery, which holds our restored fishing boats, is straight ahead.” The answer is “boats”.',
          },
          {
            id: 'ls-004-s2-q13',
            type: 'mcq',
            prompt: 'Why does the speaker suggest visiting the largest gallery first?',
            options: [
              'Because it closes earliest in the day',
              'Because it becomes very busy after about eleven o’clock',
              'Because photography is not allowed there later',
              'Because the guided talk begins there',
            ],
            correctIndex: 1,
            explanation:
              'He advises starting there “because it gets very busy after about eleven o’clock when the school groups arrive.” Option B is the stated reason.',
          },
          {
            id: 'ls-004-s2-q14',
            type: 'gap',
            prompt:
              'On the first floor, children can steer a virtual ship across the bay in the interactive ____________ room. Write ONE WORD.',
            acceptableAnswers: ['map'],
            explanation:
              'He mentions “the interactive map room — that’s especially popular with children, who can steer a virtual ship across the bay.” The answer is “map”.',
          },
          {
            id: 'ls-004-s2-q15',
            type: 'gap',
            prompt:
              'Visitors must switch off their ____________ in the model gallery to protect the paintwork. Write ONE WORD.',
            acceptableAnswers: ['flash'],
            explanation:
              'He says photography is welcome, “but please switch off your flash in the model gallery, as the bright light can damage the delicate paintwork.” The answer is “flash”.',
          },
          {
            id: 'ls-004-s2-q16',
            type: 'mcq',
            prompt: 'What is the rule about photography in the museum?',
            options: [
              'Photography is banned everywhere.',
              'Photos are allowed throughout, but flash must be off in the model gallery.',
              'Only the café area may be photographed.',
              'A photo permit must be bought at the desk.',
            ],
            correctIndex: 1,
            explanation:
              'He states you are “very welcome to take photos throughout the museum, but please switch off your flash in the model gallery.” Option B captures both the permission and the single restriction.',
          },
          {
            id: 'ls-004-s2-q17',
            type: 'gap',
            prompt:
              'The free guided talks run every day at ____________ in the afternoon. Write the time you hear.',
            acceptableAnswers: ['half past two', '2.30', '2:30', '2.30pm', '2:30pm', 'two thirty'],
            explanation:
              'He says guided talks “run every day at half past two and last around forty minutes.” The start time is 2.30 (half past two).',
          },
          {
            id: 'ls-004-s2-q18',
            type: 'gap',
            prompt: 'Each guided talk lasts around ____________ minutes. Write A NUMBER.',
            acceptableAnswers: ['40', 'forty'],
            explanation:
              'The talks “last around forty minutes”, so the answer is 40. Note the distinction from the start time in the previous question — Section 2 often pairs a time with a duration.',
          },
          {
            id: 'ls-004-s2-q19',
            type: 'gap',
            prompt:
              'To join a guided talk, visitors should gather by the ship’s ____________ near the café. Write ONE WORD.',
            acceptableAnswers: ['wheel'],
            explanation:
              'He directs people to “gather by the ship’s wheel near the café.” The meeting point is the “wheel”.',
          },
          {
            id: 'ls-004-s2-q20',
            type: 'gap',
            prompt: 'The café serves hot lunches until ____________ o’clock. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'He notes the café “serves hot lunches until two o’clock, so do plan around that if you’re hungry.” The answer is 2.',
          },
        ],
      },
      {
        id: 'ls-academic-4-s3',
        title: 'Section 3 — Planning a field-study report',
        // ~300 words. Academic discussion (Section 3 style): two students and a
        // tutor planning a coastal field-study report. Multiple speakers, with the
        // mix of opinion/agreement and procedural detail that Section 3 favours;
        // assessed with note completion + multiple choice. Names are introduced so
        // attribution questions have a clear basis.
        transcript: `TUTOR: So, Maya and Daniel, you've both been out to the estuary for your field study. How are you finding the data so far?

MAYA: Good, mostly. We measured water salinity at six points along the channel, and the readings were more varied than I expected.

DANIEL: Yes — I think that's actually our most interesting finding. The salinity dropped sharply near the river mouth, much more than the textbook suggested.

TUTOR: That's a promising angle. Have you thought about what's driving that variation?

MAYA: We think it's the freshwater inflow after the recent rain. But we only sampled on one day, so we can't be sure it's typical.

TUTOR: A fair point. For the report, I'd recommend you're upfront about that limitation rather than overstating your conclusions.

DANIEL: Agreed. Maya, should we add a second sampling day before the deadline?

MAYA: I'd love to, but the tide times next week are awkward — we'd have to be there before six in the morning.

TUTOR: It would strengthen the study, but don't let it derail you. A clearly discussed single-day data set is better than a rushed second visit.

DANIEL: Okay. Then let's focus on the analysis. I'll handle the graphs, since I've got the spreadsheet set up.

MAYA: And I'll draft the methods section — I took the most detailed field notes.

TUTOR: Good division of labour. One more thing: your introduction should set out a clear research question. At the moment it reads more like a general description.

MAYA: That makes sense. We'll rewrite it as a question about how salinity changes along the estuary.

TUTOR: Perfect. And remember the word limit is two thousand words, so be selective. Send me a draft by Friday and I'll give you feedback over the weekend.

DANIEL: Great, thank you. We'll have it to you by Friday.`,
        questions: [
          {
            id: 'ls-004-s3-q21',
            type: 'gap',
            prompt:
              'The students measured water ____________ at six points along the channel. Write ONE WORD.',
            acceptableAnswers: ['salinity', 'saltiness'],
            explanation:
              'Maya says, “We measured water salinity at six points along the channel.” The answer is “salinity” (saltiness accepted as a synonym).',
          },
          {
            id: 'ls-004-s3-q22',
            type: 'gap',
            prompt: 'They took readings at ____________ points along the channel. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation:
              'The readings were taken “at six points along the channel,” so the answer is 6.',
          },
          {
            id: 'ls-004-s3-q23',
            type: 'mcq',
            prompt: 'What do the students consider their most interesting finding?',
            options: [
              'That the water was warmer than expected',
              'That salinity dropped sharply near the river mouth',
              'That the textbook figures were exactly right',
              'That there was no variation in the readings',
            ],
            correctIndex: 1,
            explanation:
              'Daniel calls it “our most interesting finding” that “the salinity dropped sharply near the river mouth, much more than the textbook suggested.” Option B matches; option C is the opposite of what he says.',
          },
          {
            id: 'ls-004-s3-q24',
            type: 'mcq',
            prompt: 'What is the main limitation of their study, according to Maya?',
            options: [
              'They used the wrong measuring equipment.',
              'They only sampled on one day, so it may not be typical.',
              'They forgot to record the tide times.',
              'They sampled too many points to analyse.',
            ],
            correctIndex: 1,
            explanation:
              'Maya says, “we only sampled on one day, so we can’t be sure it’s typical.” Option B states this limitation, which the tutor advises them to be upfront about.',
          },
          {
            id: 'ls-004-s3-q25',
            type: 'mcq',
            prompt: 'Why do the students decide NOT to add a second sampling day?',
            options: [
              'The tutor forbids any further fieldwork.',
              'The awkward early tide times make a rushed second visit unwise.',
              'They have already collected enough data for a full year.',
              'The estuary will be closed to the public next week.',
            ],
            correctIndex: 1,
            explanation:
              'Maya notes the tide times “are awkward — we’d have to be there before six in the morning,” and the tutor advises, “A clearly discussed single-day data set is better than a rushed second visit.” Option B captures the reasoning; the tutor permits but does not forbid a second visit.',
          },
          {
            id: 'ls-004-s3-q26',
            type: 'gap',
            prompt:
              'In the analysis, Daniel will be responsible for producing the ____________. Write ONE WORD.',
            acceptableAnswers: ['graphs', 'charts'],
            explanation:
              'Daniel says, “I’ll handle the graphs, since I’ve got the spreadsheet set up.” The answer is “graphs” (charts accepted as a synonym).',
          },
          {
            id: 'ls-004-s3-q27',
            type: 'gap',
            prompt: 'Maya will write the ____________ section of the report. Write ONE WORD.',
            acceptableAnswers: ['methods', 'methodology', 'method'],
            explanation:
              'Maya says, “I’ll draft the methods section — I took the most detailed field notes.” The answer is “methods” (methodology accepted).',
          },
          {
            id: 'ls-004-s3-q28',
            type: 'mcq',
            prompt: 'What does the tutor say the introduction currently lacks?',
            options: [
              'A list of references',
              'A clear research question',
              'A summary of the results',
              'A description of the equipment',
            ],
            correctIndex: 1,
            explanation:
              'The tutor advises, “your introduction should set out a clear research question. At the moment it reads more like a general description.” Option B is correct.',
          },
          {
            id: 'ls-004-s3-q29',
            type: 'gap',
            prompt: 'The word limit for the report is ____________ words. Write A NUMBER.',
            acceptableAnswers: ['2000', '2,000', 'two thousand'],
            explanation:
              'The tutor reminds them, “the word limit is two thousand words, so be selective.” The answer is 2000.',
          },
          {
            id: 'ls-004-s3-q30',
            type: 'gap',
            prompt:
              'The students must send the tutor a draft by ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Friday', 'friday'],
            explanation:
              'The tutor asks them to “Send me a draft by Friday,” and Daniel confirms “We’ll have it to you by Friday.” The deadline is Friday.',
          },
        ],
      },
      {
        id: 'ls-academic-4-s4',
        title: 'Section 4 — Lecture: the science of sleep',
        // ~300 words. Academic lecture (Section 4 style): a single speaker
        // delivering a structured talk on sleep science. Dense factual content with
        // signpost language ("first", "in addition", "finally"); assessed mostly
        // with note/sentence completion plus a couple of MCQs, matching the
        // completion-heavy profile of a real Section 4.
        transcript: `Today I want to explore what actually happens when we sleep, and why it matters far more than many people assume. We tend to think of sleep as simply switching off, but the sleeping brain is remarkably active.

Let's start with the structure of a night's sleep. Rather than being uniform, sleep cycles through several stages, and one full cycle lasts roughly ninety minutes. Within each cycle we move from light sleep into deep sleep, and then into a stage called REM, which stands for rapid eye movement. It's during REM that most vivid dreaming occurs.

Each stage seems to serve a different purpose. Deep sleep, which dominates the earlier part of the night, is when the body carries out most of its physical repair — tissue is rebuilt and the immune system is strengthened. REM sleep, which becomes longer towards morning, appears to be especially important for memory. In particular, the brain seems to consolidate, or store, what we have learned during the day.

In addition, there's growing evidence about waste removal. Recent research suggests that during deep sleep the brain clears out certain harmful proteins that build up while we are awake. A long-term shortage of sleep may therefore be linked to a higher risk of memory disorders later in life.

So how much do we need? For most adults, the recommended amount is between seven and nine hours a night, though the exact figure varies from person to person. What matters is not only the quantity but the regularity — going to bed at roughly the same time each night helps the body's internal clock.

Finally, a practical point. One of the biggest disruptors of sleep is light from screens in the evening, because it suppresses melatonin, the hormone that signals to the body that it's time to rest.`,
        questions: [
          {
            id: 'ls-004-s4-q31',
            type: 'gap',
            prompt: 'One full sleep cycle lasts roughly ____________ minutes. Write A NUMBER.',
            acceptableAnswers: ['90', 'ninety'],
            explanation:
              'The lecturer says “one full cycle lasts roughly ninety minutes.” The answer is 90.',
          },
          {
            id: 'ls-004-s4-q32',
            type: 'gap',
            prompt: 'The letters REM stand for rapid eye ____________. Write ONE WORD.',
            acceptableAnswers: ['movement', 'movements'],
            explanation:
              'He explains REM “stands for rapid eye movement.” The missing word is “movement”.',
          },
          {
            id: 'ls-004-s4-q33',
            type: 'mcq',
            prompt: 'During which stage does most vivid dreaming occur?',
            options: ['Light sleep', 'Deep sleep', 'REM sleep', 'The moment of falling asleep'],
            correctIndex: 2,
            explanation:
              'He states, “It’s during REM that most vivid dreaming occurs.” Option C (REM sleep) is correct.',
          },
          {
            id: 'ls-004-s4-q34',
            type: 'gap',
            prompt:
              'Deep sleep is when the body carries out most of its physical ____________. Write ONE WORD.',
            acceptableAnswers: ['repair', 'repairs'],
            explanation:
              'He says deep sleep “is when the body carries out most of its physical repair — tissue is rebuilt and the immune system is strengthened.” The answer is “repair”.',
          },
          {
            id: 'ls-004-s4-q35',
            type: 'gap',
            prompt:
              'REM sleep appears to be especially important for ____________. Write ONE WORD.',
            acceptableAnswers: ['memory'],
            explanation:
              'He notes REM sleep “appears to be especially important for memory,” as the brain consolidates what we have learned. The answer is “memory”.',
          },
          {
            id: 'ls-004-s4-q36',
            type: 'mcq',
            prompt: 'According to recent research, what does the brain do during deep sleep?',
            options: [
              'It produces extra melatonin for the next day.',
              'It clears out certain harmful proteins that build up while awake.',
              'It permanently deletes unimportant memories.',
              'It slows the immune system to save energy.',
            ],
            correctIndex: 1,
            explanation:
              'He reports that “during deep sleep the brain clears out certain harmful proteins that build up while we are awake.” Option B matches the research described.',
          },
          {
            id: 'ls-004-s4-q37',
            type: 'tfng',
            prompt:
              'The lecturer states that a long-term shortage of sleep may be linked to a higher risk of memory disorders.',
            answer: 'true',
            explanation:
              'He says, “A long-term shortage of sleep may therefore be linked to a higher risk of memory disorders later in life.” This makes the statement TRUE.',
          },
          {
            id: 'ls-004-s4-q38',
            type: 'gap',
            prompt:
              'Most adults are recommended to get between ____________ and nine hours of sleep a night. Write A NUMBER.',
            acceptableAnswers: ['7', 'seven'],
            explanation:
              'He says the recommended amount “is between seven and nine hours a night.” The lower figure is 7.',
          },
          {
            id: 'ls-004-s4-q39',
            type: 'gap',
            prompt:
              'Besides quantity, the lecturer stresses the importance of ____________ — going to bed at roughly the same time each night. Write ONE WORD.',
            acceptableAnswers: ['regularity', 'consistency', 'routine'],
            explanation:
              'He says “What matters is not only the quantity but the regularity — going to bed at roughly the same time each night helps the body’s internal clock.” The answer is “regularity” (consistency/routine accepted as synonyms).',
          },
          {
            id: 'ls-004-s4-q40',
            type: 'gap',
            prompt:
              'Light from screens disrupts sleep because it suppresses ____________, the hormone that signals it is time to rest. Write ONE WORD.',
            acceptableAnswers: ['melatonin'],
            explanation:
              'He explains that screen light in the evening “suppresses melatonin, the hormone that signals to the body that it’s time to rest.” The answer is “melatonin”.',
          },
        ],
      },
    ],
  },
]
