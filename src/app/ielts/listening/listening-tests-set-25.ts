// ─── IELTS Academic Listening - practice test data (Set 25) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 marks) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a customer phoning a
//     theatre box office to book tickets for a show), assessed with form / note
//     completion + multiple choice. A surname is spelled, a date and seat numbers
//     are dictated, and the total price depends on a stated choice (the number of
//     tickets and the seating area).
//   • Section 2 - an everyday MONOLOGUE (here: a talk introducing a community
//     allotment and gardening scheme), assessed with sentence completion,
//     multiple choice and a matching task, carrying signpost language that the
//     questions follow in order.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor planning
//     a marketing group project), assessed with multiple choice, completion and a
//     role-matching task.
//   • Section 4 - an academic LECTURE / monologue (here: how weather is
//     forecast, from data collection to computer models and forecast error),
//     assessed with note/sentence completion, multiple choice and a matching task.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched case-insensitively
//                  and trimmed by the marker. The official word-limit instruction lives
//                  in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'matching' → match each item to ONE option key; each item scores one mark.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_25: ListeningTest[] = [
  {
    id: 'ls-academic-025',
    title:
      'Practice Test 25 - Booking Theatre Tickets, A Community Allotment Scheme, Planning a Marketing Group Project & How Weather Is Forecast',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-025-s1',
        title: 'Section 1 - Booking theatre tickets',
        // Transactional dialogue (Section 1 style): a customer phoning a theatre box
        // office to book tickets for a show. A surname is spelled and seat numbers
        // are dictated; one detail (the total price) depends on a stated choice (the
        // number of tickets and the seating area), mirroring the form/note-completion
        // plus multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good afternoon, Riverside Theatre box office, Priya speaking. How can I help?

MAN: Hello, I'd like to book some tickets for a show, if there are still seats available.

WOMAN: Of course. Which show were you interested in?

MAN: The Saturday performance of the musical, "Sunlight". Is that the right title?

WOMAN: It is, yes. We have two performances on a Saturday, a matinee and an evening show. Which would you prefer?

MAN: The evening one, please. That starts at half past seven, doesn't it?

WOMAN: That's correct, seven thirty. And can I take the date? We have it running for three weeks.

MAN: The fourteenth of March, please.

WOMAN: Lovely. Could I have a name for the booking?

MAN: Yes, it's under Foster. That's F-O-S-T-E-R.

WOMAN: Thank you, Mr Foster. And how many tickets would you like?

MAN: Four, please. Two adults and two children.

WOMAN: Right. We have seats in three areas - the stalls at the front, the circle above, and the balcony at the very top. The stalls are thirty pounds each, the circle is twenty-two, and the balcony is fifteen.

MAN: We'll take the circle, I think. A good view without the top price.

WOMAN: A sensible choice. So that's four seats in the circle. Your seats will be row F, numbers nine to twelve.

MAN: Perfect.

WOMAN: One thing to note - latecomers are not admitted until the interval, so please arrive in good time. The doors open thirty minutes before the show.

MAN: Understood. How do I pay?

WOMAN: I can take a card over the phone now, or you can pay when you collect the tickets. They'll be at the desk under your name.

MAN: I'll pay on collection, thanks.`,
        questions: [
          {
            id: 'ls-025-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nName of show: "____________"',
            acceptableAnswers: ['Sunlight', 'sunlight'],
            explanation:
              'The caller asks about “the musical, ‘Sunlight’,” and the assistant confirms the title. The answer is “Sunlight”.',
          },
          {
            id: 'ls-025-s1-q2',
            type: 'mcq',
            prompt: 'Which performance does the caller choose?',
            options: [
              'The Saturday matinee',
              'The Saturday evening show',
              'The Friday evening show',
              'The Sunday matinee',
            ],
            correctIndex: 1,
            explanation:
              'Offered “a matinee and an evening show” on the Saturday, he says, “The evening one, please.” Option B matches; the matinee is the rejected alternative.',
          },
          {
            id: 'ls-025-s1-q3',
            type: 'gap',
            prompt:
              'The evening performance starts at ____________. Write the time as you hear it.',
            acceptableAnswers: [
              '7.30',
              '7:30',
              'half past seven',
              'half past 7',
              '19:30',
              '7.30pm',
              '7:30 pm',
              'seven thirty',
            ],
            explanation:
              "He checks, “That starts at half past seven, doesn't it?” and she confirms, “seven thirty.” The answer is 7.30.",
          },
          {
            id: 'ls-025-s1-q4',
            type: 'gap',
            prompt: 'Date of performance: ____________ of March. Write A NUMBER (the date).',
            acceptableAnswers: ['14th', '14', 'fourteenth', 'the fourteenth'],
            explanation: 'He asks for “The fourteenth of March, please.” The answer is the 14th.',
          },
          {
            id: 'ls-025-s1-q5',
            type: 'gap',
            prompt: 'Name on the booking: Mr ____________. Write ONE WORD.',
            acceptableAnswers: ['Foster', 'foster'],
            explanation:
              "He gives the name as “Foster. That's F-O-S-T-E-R.” In Section 1, surnames are usually spelled aloud - write them letter by letter. The answer is “Foster”.",
          },
          {
            id: 'ls-025-s1-q6',
            type: 'gap',
            prompt: 'Total number of tickets booked: ____________. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'He asks for “Four, please. Two adults and two children.” The total number of tickets is 4. This figure also drives the total-price question below.',
          },
          {
            id: 'ls-025-s1-q7',
            type: 'gap',
            prompt:
              'The party choose to sit in the ____________, above the stalls. Write ONE WORD.',
            acceptableAnswers: ['circle'],
            explanation:
              "He says, “We'll take the circle, I think,” choosing the area between the stalls and the balcony. The answer is “circle”.",
          },
          {
            id: 'ls-025-s1-q8',
            type: 'mcq',
            prompt: 'How much will the caller pay in total for the tickets?',
            options: [
              'Sixty pounds, for four balcony seats',
              'Eighty-eight pounds, for four seats in the circle',
              'One hundred and twenty pounds, for four seats in the stalls',
              'Twenty-two pounds, for one seat in the circle',
            ],
            correctIndex: 1,
            explanation:
              'The circle is “twenty-two” pounds each (Q7) and he books four tickets (Q6), so the total is 4 × £22 = £88. The distractors apply the balcony price, the stalls price, or only one ticket.',
          },
          {
            id: 'ls-025-s1-q9',
            type: 'mcq',
            prompt: 'What does the assistant say about latecomers?',
            options: [
              'They are refused entry altogether',
              'They are not admitted until the interval',
              'They are given seats in the balcony',
              'They must pay an extra charge',
            ],
            correctIndex: 1,
            explanation:
              'She says, “latecomers are not admitted until the interval, so please arrive in good time.” Option B matches.',
          },
          {
            id: 'ls-025-s1-q10',
            type: 'gap',
            prompt: 'The doors open ____________ minutes before the show begins. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'She says, “The doors open thirty minutes before the show.” The answer is 30.',
          },
        ],
      },
      {
        id: 'ls-academic-025-s2',
        title: 'Section 2 - A community allotment and gardening scheme',
        // Informational monologue (Section 2 style): a single speaker introducing a
        // community allotment scheme - the plots, costs, rules and events. Uses
        // sequencing/signpost language that the questions follow in order, with a
        // sentence-completion, multiple-choice and matching mix. The matching task
        // (events to days) carries four marks (Questions 17-20).
        transcript: `Hello, everyone, and thank you for coming along to find out about the Meadowbank Community Allotments. My name is George, and I'm the volunteer who looks after new members, so I'll explain how the scheme works.

Let me start with the plots themselves. We have forty plots in total, and at the moment, I'm pleased to say, we have six standing empty, so there really is space for newcomers. A full plot is quite large, but if that sounds daunting, you can rent a half plot instead, which is what most first-time growers choose.

Now, the cost. A full plot is forty pounds a year, and a half plot is exactly half that, twenty pounds. That fee includes your water, which is supplied from a tank at the top of the site, so please don't bring a hosepipe - watering is by can only.

A few rules. The most important one is that the scheme is completely organic, so chemical weedkillers and pesticides are strictly forbidden. We also ask that you keep your plot reasonably tidy; if a plot is clearly abandoned, we may, after warnings, offer it to someone on the waiting list. And dogs, I'm afraid, must be kept on a lead at all times.

Finally, the social side, which is really the heart of the scheme. We run several regular events. Our plant sale, where members swap and sell seedlings, takes place on a Monday. The shared composting workshop, which I'd really recommend to beginners, runs on a Wednesday. Our main work day, when we all tidy the communal paths together, is on a Friday. And the harvest celebration, with a shared lunch, is held on a Sunday. Do come to as many as you can - that's how you learn.`,
        questions: [
          {
            id: 'ls-025-s2-q11',
            type: 'gap',
            prompt: 'The allotment site has ____________ plots in total. Write A NUMBER.',
            acceptableAnswers: ['40', 'forty'],
            explanation:
              'George says, “We have forty plots in total.” The answer is 40 (six of these are currently empty, a separate detail).',
          },
          {
            id: 'ls-025-s2-q12',
            type: 'gap',
            prompt:
              'At present, ____________ plots are standing empty and available to newcomers. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation:
              'He says, “we have six standing empty, so there really is space for newcomers.” The answer is 6.',
          },
          {
            id: 'ls-025-s2-q13',
            type: 'mcq',
            prompt: 'What does the speaker say most first-time growers choose?',
            options: [
              'A full plot',
              'A half plot',
              'Two plots together',
              'A shared plot with a friend',
            ],
            correctIndex: 1,
            explanation:
              'He says you can rent a half plot, “which is what most first-time growers choose.” Option B matches; a full plot is described as possibly daunting for newcomers.',
          },
          {
            id: 'ls-025-s2-q14',
            type: 'gap',
            prompt: 'The annual fee for a half plot is ____________ pounds. Write A NUMBER.',
            acceptableAnswers: ['20', 'twenty'],
            explanation:
              'He says a full plot is forty pounds and a half plot is “exactly half that, twenty pounds.” The answer is 20.',
          },
          {
            id: 'ls-025-s2-q15',
            type: 'gap',
            prompt:
              'Water is supplied from a ____________ at the top of the site and is included in the fee. Write ONE WORD.',
            acceptableAnswers: ['tank'],
            explanation:
              'He says the fee “includes your water, which is supplied from a tank at the top of the site.” The answer is “tank”.',
          },
          {
            id: 'ls-025-s2-q16',
            type: 'mcq',
            prompt: 'Which rule does the speaker describe as the most important?',
            options: [
              'Keeping every plot tidy',
              'The scheme being completely organic, with no chemical weedkillers or pesticides',
              'Keeping dogs on a lead',
              'Watering by can only',
            ],
            correctIndex: 1,
            explanation:
              'He says, “The most important one is that the scheme is completely organic, so chemical weedkillers and pesticides are strictly forbidden.” Option B matches; the other points are mentioned but not called the most important.',
          },
          {
            id: 'ls-025-s2-q17',
            type: 'matching',
            variant: 'features',
            prompt:
              'On which day does each regular event take place? Choose your answer from the list and match it to each event (Questions 17-20).',
            options: [
              { key: 'monday', label: 'Monday' },
              { key: 'wednesday', label: 'Wednesday' },
              { key: 'friday', label: 'Friday' },
              { key: 'sunday', label: 'Sunday' },
            ],
            items: [
              { id: 's2-day-plantsale', text: 'The plant sale', answer: 'monday' },
              { id: 's2-day-composting', text: 'The composting workshop', answer: 'wednesday' },
              { id: 's2-day-workday', text: 'The main work day', answer: 'friday' },
              { id: 's2-day-harvest', text: 'The harvest celebration', answer: 'sunday' },
            ],
            explanation:
              'George lists the days: the plant sale “takes place on a Monday”; the composting workshop “runs on a Wednesday”; the main work day “is on a Friday”; and the harvest celebration “is held on a Sunday.” Each item is worth one mark (Questions 17, 18, 19 and 20).',
          },
        ],
      },
      {
        id: 'ls-academic-025-s3',
        title: 'Section 3 - Tutorial: planning a marketing group project',
        // Academic discussion (Section 3 style): two students (Hannah and Tom) and a
        // tutor (Dr Reid) plan a marketing group project. Speakers settle on the
        // brief, divide the roles, design a survey and agree a deadline, so the
        // questions mix multiple choice (decisions), completion (details) and a
        // role-matching task. The matching task (who does what) carries three marks
        // (Questions 24-26).
        transcript: `DR REID: So, Hannah and Tom, let's plan your marketing project. Have you understood the brief?

HANNAH: I think so. We've been asked to design a marketing campaign for a fictional product, and the one we've chosen is a reusable coffee cup aimed at students.

DR REID: Good choice - relevant to your audience. And who is the campaign aimed at?

TOM: Students specifically, on this campus. We thought it was sensible to focus on a group we can actually research.

DR REID: Sensible indeed. Now, how will you divide the work between the two of you?

HANNAH: We've talked about that. Tom is good with figures, so he'll handle the budget and the costings. I enjoy writing, so I'll take charge of the slogan and the advertising text. And we agreed we'd design the questionnaire together, since that's the foundation of everything.

DR REID: That's a fair split. Tell me about this questionnaire.

TOM: We want to find out how much students would pay for the cup, and whether the environmental angle actually influences them.

DR REID: Useful. How will you reach people?

HANNAH: We were going to stop students in the canteen, but we worried they'd feel rushed, so instead we'll send the survey out as an online link through the student newsletter.

DR REID: Much better - you'll get more considered answers. How many responses are you hoping for?

TOM: We'd like at least a hundred to be confident in the results.

DR REID: A good target. And when is the whole project due?

HANNAH: The presentation is in week ten, but you asked for the written report a week earlier, so that's week nine.

DR REID: Correct, week nine. Don't leave the report until the last minute - that's where groups usually come unstuck.`,
        questions: [
          {
            id: 'ls-025-s3-q21',
            type: 'mcq',
            prompt: 'What product have the students chosen for their campaign?',
            options: [
              'A reusable coffee cup',
              'A brand of bottled water',
              'A student travel card',
              'A mobile phone app',
            ],
            correctIndex: 0,
            explanation:
              'Hannah says the product they have chosen is “a reusable coffee cup aimed at students.” Option A matches.',
          },
          {
            id: 'ls-025-s3-q22',
            type: 'gap',
            prompt:
              'The campaign is aimed specifically at ____________ on this campus. Write ONE WORD.',
            acceptableAnswers: ['students'],
            explanation:
              'Tom says it is aimed at “Students specifically, on this campus.” The answer is “students”.',
          },
          {
            id: 'ls-025-s3-q23',
            type: 'gap',
            prompt:
              'The students agree to design the ____________ together, as it is the foundation of everything. Write ONE WORD.',
            acceptableAnswers: ['questionnaire'],
            explanation:
              "Hannah says, “we agreed we'd design the questionnaire together, since that's the foundation of everything.” The answer is “questionnaire”.",
          },
          {
            id: 'ls-025-s3-q24',
            type: 'matching',
            variant: 'features',
            prompt:
              'Who will be responsible for each part of the project? Choose your answer from the list and match it to each task (Questions 24-26).',
            options: [
              { key: 'hannah', label: 'Hannah alone' },
              { key: 'tom', label: 'Tom alone' },
              { key: 'both', label: 'Hannah and Tom together' },
            ],
            items: [
              { id: 's3-role-budget', text: 'The budget and costings', answer: 'tom' },
              { id: 's3-role-slogan', text: 'The slogan and advertising text', answer: 'hannah' },
              { id: 's3-role-questionnaire', text: 'The questionnaire', answer: 'both' },
            ],
            explanation:
              "Hannah says, “Tom is good with figures, so he'll handle the budget and the costings. I enjoy writing, so I'll take charge of the slogan and the advertising text. And we agreed we'd design the questionnaire together.” Each item is worth one mark (Questions 24, 25 and 26).",
          },
          {
            id: 'ls-025-s3-q27',
            type: 'mcq',
            prompt: 'How did the students decide to distribute their survey?',
            options: [
              'By stopping students in the canteen',
              'As an online link in the student newsletter',
              'By posting paper forms to halls of residence',
              'Through face-to-face interviews',
            ],
            correctIndex: 1,
            explanation:
              "Hannah says they worried canteen respondents would feel rushed, so “instead we'll send the survey out as an online link through the student newsletter.” Option B matches; the canteen plan was rejected.",
          },
          {
            id: 'ls-025-s3-q28',
            type: 'gap',
            prompt:
              'The students hope to collect at least ____________ responses to be confident in their results. Write A NUMBER.',
            acceptableAnswers: ['100', 'a hundred', 'one hundred', 'hundred'],
            explanation:
              "Tom says, “We'd like at least a hundred to be confident in the results.” The answer is 100.",
          },
          {
            id: 'ls-025-s3-q29',
            type: 'mcq',
            prompt: 'What is the main thing the questionnaire is designed to find out?',
            options: [
              'Which colour of cup students prefer',
              'How much students would pay and whether the environmental angle influences them',
              'How often students drink coffee each day',
              'Where students usually buy their coffee',
            ],
            correctIndex: 1,
            explanation:
              'Tom says they want to find out “how much students would pay for the cup, and whether the environmental angle actually influences them.” Option B matches.',
          },
          {
            id: 'ls-025-s3-q30',
            type: 'gap',
            prompt:
              'The written report must be submitted in week ____________, a week before the presentation. Write A NUMBER.',
            acceptableAnswers: ['9', 'nine'],
            explanation:
              "Hannah says the presentation is in week ten “but you asked for the written report a week earlier, so that's week nine,” and the tutor confirms “week nine.” The answer is 9.",
          },
        ],
      },
      {
        id: 'ls-academic-025-s4',
        title: 'Section 4 - Lecture: how weather is forecast',
        // Academic lecture / monologue (Section 4 style): a single speaker explains
        // how weather is forecast - the data that is collected, the computer models
        // that process it, and why forecasts can still be wrong. Dense, factual and
        // signposted, with a note/sentence-completion, matching and multiple-choice
        // mix. The matching task (instrument to what it measures) carries four marks
        // (Questions 33-36).
        transcript: `Good morning. Today I want to explain how a modern weather forecast is actually produced - a process that combines a vast amount of data with some of the most powerful computers on the planet. I'll move from collecting the data, to processing it, and finally to why forecasts sometimes still go wrong.

Let me begin with the raw material: observations. A forecast is only as good as the data fed into it, and that data comes from all over the globe. Ground stations record conditions at the surface. Weather balloons, released twice a day, drift upwards and measure the atmosphere at different heights. Ships and buoys report from the oceans. And, increasingly, satellites watch the whole planet from above. Each source has its job: the balloons, for instance, are especially valuable because they sample the air high above us, where surface stations cannot reach.

Once collected, all these millions of readings are fed into what we call a numerical weather model. This is essentially a giant set of equations, based on the physics of the atmosphere, that calculates how conditions will change hour by hour. The model divides the atmosphere into a three-dimensional grid of boxes, and the smaller those boxes, the more detailed - and the more accurate - the forecast can be. The catch is that smaller boxes demand far more computing power.

So why do forecasts go wrong? The key reason is that the atmosphere is what scientists call chaotic. A tiny error in the starting conditions - and there are always small gaps in the data - grows larger and larger as the forecast runs forward. This is why a forecast for tomorrow is usually reliable, but one for ten days ahead is much less so. To manage this, forecasters now run the model many times with slightly different starting points, a technique known as ensemble forecasting, which tells them how confident they can be.`,
        questions: [
          {
            id: 'ls-025-s4-q31',
            type: 'gap',
            prompt:
              'The lecturer stresses that a forecast is only as good as the ____________ fed into it. Write ONE WORD.',
            acceptableAnswers: ['data'],
            explanation:
              'He says, “A forecast is only as good as the data fed into it.” The answer is “data”.',
          },
          {
            id: 'ls-025-s4-q32',
            type: 'gap',
            prompt:
              'Weather balloons are released ____________ a day and drift upwards through the atmosphere. Write ONE WORD (how often per day).',
            acceptableAnswers: ['twice'],
            explanation:
              'He says balloons are “released twice a day” and “drift upwards.” The answer is “twice”.',
          },
          {
            id: 'ls-025-s4-q33',
            type: 'matching',
            variant: 'features',
            prompt:
              'Match each source of weather data to what the lecturer says about it (Questions 33-36).',
            options: [
              { key: 'surface', label: 'Records conditions at the surface' },
              { key: 'heights', label: 'Measures the atmosphere at different heights' },
              { key: 'oceans', label: 'Reports from the oceans' },
              { key: 'whole', label: 'Watches the whole planet from above' },
            ],
            items: [
              { id: 's4-src-stations', text: 'Ground stations', answer: 'surface' },
              { id: 's4-src-balloons', text: 'Weather balloons', answer: 'heights' },
              { id: 's4-src-buoys', text: 'Ships and buoys', answer: 'oceans' },
              { id: 's4-src-satellites', text: 'Satellites', answer: 'whole' },
            ],
            explanation:
              'He says, “Ground stations record conditions at the surface. Weather balloons … measure the atmosphere at different heights. Ships and buoys report from the oceans. And … satellites watch the whole planet from above.” Each item is worth one mark (Questions 33, 34, 35 and 36).',
          },
          {
            id: 'ls-025-s4-q37',
            type: 'gap',
            prompt:
              'The collected readings are fed into a numerical weather ____________, a giant set of equations. Write ONE WORD.',
            acceptableAnswers: ['model'],
            explanation:
              'He says the readings “are fed into what we call a numerical weather model … essentially a giant set of equations.” The answer is “model”.',
          },
          {
            id: 'ls-025-s4-q38',
            type: 'mcq',
            prompt: "What does the lecturer say about the size of the boxes in the model's grid?",
            options: [
              'Larger boxes give a more accurate forecast',
              'Smaller boxes give a more detailed forecast but need more computing power',
              'The size of the boxes makes no difference to accuracy',
              'Smaller boxes reduce the need for computing power',
            ],
            correctIndex: 1,
            explanation:
              'He says, “the smaller those boxes, the more detailed - and the more accurate - the forecast can be,” but “smaller boxes demand far more computing power.” Option B matches.',
          },
          {
            id: 'ls-025-s4-q39',
            type: 'mcq',
            prompt: 'According to the lecturer, why do forecasts go wrong?',
            options: [
              'The equations of physics are not yet understood',
              'The atmosphere is chaotic, so small starting errors grow over time',
              'Forecasters deliberately exaggerate the uncertainty',
              'There are too few computers in the world',
            ],
            correctIndex: 1,
            explanation:
              'He says “the atmosphere is what scientists call chaotic. A tiny error in the starting conditions … grows larger and larger as the forecast runs forward.” Option B matches.',
          },
          {
            id: 'ls-025-s4-q40',
            type: 'gap',
            prompt:
              'Running the model many times with slightly different starting points is known as ____________ forecasting. Write ONE WORD.',
            acceptableAnswers: ['ensemble'],
            explanation:
              'He says forecasters “run the model many times with slightly different starting points, a technique known as ensemble forecasting.” The answer is “ensemble”.',
          },
        ],
      },
    ],
  },
]
