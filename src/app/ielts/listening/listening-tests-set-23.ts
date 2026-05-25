// ─── IELTS Academic Listening — practice test data (Set 23) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 questions, 10 per section = 40 marks) that mirror the real IELTS
// Listening paper, with topics deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a customer phoning a
//     catering company to arrange the food for an office anniversary party),
//     assessed with form / note completion + a multiple-choice item. A surname
//     is spelled and the guest number, menu choices, date and a per-head price
//     are dictated; the total cost depends on the stated guest number × the
//     stated price per head, so two Section 1 details connect.
//   • Section 2 — an everyday MONOLOGUE (here: a talk introducing a new city
//     cycle-hire scheme: how to hire, docking stations, costs and rules),
//     assessed with sentence completion, multiple choice and a matching task,
//     carrying signpost language ("first", "next", "finally") the questions
//     track.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor
//     reviewing a science lab report — aim, method, results, what went wrong and
//     the deadline), assessed with multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: ocean currents and
//     climate — how currents form, the "conveyor belt" and the effect on
//     weather), assessed with note/sentence completion + multiple choice,
//     including one True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched
//                  case-insensitively and trimmed by the marker. The official
//                  word-limit instruction lives in the prompt.
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'tfng'     → True / False / Not Given.
//   • 'matching' → each item scores ONE mark; container id is distinct from
//                  every item id (anti-collision).
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_23: ListeningTest[] = [
  {
    id: 'ls-academic-023',
    title:
      'Practice Test 23 — Arranging Catering for an Office Party, A City Cycle-Hire Scheme, Reviewing a Science Lab Report & Ocean Currents and Climate',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-023-s1',
        title: 'Section 1 — Arranging catering for an office party',
        // ~290 words. Transactional dialogue (Section 1 style): a customer phoning
        // a catering company to arrange the food for an office anniversary party. A
        // surname is spelled and the guest number, menu choices, date and a per-head
        // price are dictated; the total cost depends on the stated guest number ×
        // the stated price per head, mirroring the form-completion + multiple-choice
        // mix of a real Section 1.
        transcript: `WOMAN: Good afternoon, Greenfield Catering, Sophie speaking. How can I help you?

MAN: Hi there. I'm organising a party for my office and I'd like to arrange the food, please.

WOMAN: Of course. Let me take a few details. Could I have your name?

MAN: Yes, it's Martin Broso. That's B-R-O-S-O.

WOMAN: Sorry, could you spell that again for me?

MAN: B-R-O-S-O. Broso.

WOMAN: Got it, thank you. And what's the occasion?

MAN: It's our company's tenth anniversary, so we want something a bit special.

WOMAN: Lovely. How many guests are you expecting?

MAN: There'll be forty of us in total.

WOMAN: Right, forty. And do you have a date in mind?

MAN: Yes — Friday the twelfth of June.

WOMAN: That's free, good. Now, for a group that size I'd suggest our buffet rather than a sit-down meal. We have three menus: the Classic, the Vegetarian, and the Deluxe.

MAN: What's the difference in price?

WOMAN: The Classic is eighteen pounds a head, the Vegetarian is the same, and the Deluxe is twenty-two pounds a head.

MAN: Let's go with the Deluxe — it's a special occasion.

WOMAN: Excellent choice. So that's the Deluxe buffet for forty guests. I'll work the total out for you in a moment. Is there anything we should know about dietary needs?

MAN: Yes, three of the guests can't eat nuts, so please make sure there's a nut-free option.

WOMAN: Noted — we'll label everything clearly. One last thing: we ask for a deposit of fifty pounds to confirm the booking, and you can pay the balance on the day.

MAN: That's fine. Thank you very much.`,
        questions: [
          {
            id: 'ls-023-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Broso', 'broso'],
            explanation:
              'The caller gives his name as “Martin Broso” and spells the surname twice: B-R-O-S-O. In Section 1, an unusual surname is always spelled aloud — write it letter by letter.',
          },
          {
            id: 'ls-023-s1-q2',
            type: 'gap',
            prompt: 'Occasion: the company’s ____________ anniversary. Write ONE WORD.',
            acceptableAnswers: ['tenth', '10th'],
            explanation:
              'He says, “It’s our company’s tenth anniversary, so we want something a bit special.” The answer is “tenth”.',
          },
          {
            id: 'ls-023-s1-q3',
            type: 'gap',
            prompt: 'Number of guests expected: ____________. Write A NUMBER.',
            acceptableAnswers: ['40', 'forty'],
            explanation:
              'He says, “There’ll be forty of us in total.” The number of guests is 40. This figure is also used to calculate the total cost later — Section 1 details often connect.',
          },
          {
            id: 'ls-023-s1-q4',
            type: 'gap',
            prompt:
              'Date of the party: Friday the ____________ of June. Write A NUMBER (the date).',
            acceptableAnswers: ['12th', 'twelfth', '12'],
            explanation:
              'He says the date is “Friday the twelfth of June.” The answer is the twelfth (12th).',
          },
          {
            id: 'ls-023-s1-q5',
            type: 'mcq',
            prompt: 'What type of catering does the assistant recommend for a group of that size?',
            options: ['A sit-down meal', 'A buffet', 'A packed lunch', 'A barbecue'],
            correctIndex: 1,
            explanation:
              'She says, “for a group that size I’d suggest our buffet rather than a sit-down meal.” Option B matches; the sit-down meal is explicitly the option she advises against.',
          },
          {
            id: 'ls-023-s1-q6',
            type: 'gap',
            prompt: 'The customer chooses the ____________ buffet menu. Write ONE WORD.',
            acceptableAnswers: ['Deluxe', 'deluxe'],
            explanation:
              'He says, “Let’s go with the Deluxe — it’s a special occasion.” The answer is “Deluxe” (the Classic and Vegetarian menus are distractors).',
          },
          {
            id: 'ls-023-s1-q7',
            type: 'gap',
            prompt: 'The chosen menu costs ____________ pounds a head. Write A NUMBER.',
            acceptableAnswers: ['22', 'twenty-two'],
            explanation:
              'She says “the Deluxe is twenty-two pounds a head”, and he chooses the Deluxe. The price per head is 22 (eighteen is the price of the other two menus, a distractor).',
          },
          {
            id: 'ls-023-s1-q8',
            type: 'mcq',
            prompt: 'What is the total cost of the food for the party?',
            options: [
              'Seven hundred and twenty pounds',
              'Eight hundred and eighty pounds',
              'Nine hundred pounds',
              'Forty-four pounds',
            ],
            correctIndex: 1,
            explanation:
              'The Deluxe buffet is twenty-two pounds a head (Q7) for forty guests (Q3): 40 × £22 = £880. Option A (£720) uses the £18 menus; the other distractors misread the figures.',
          },
          {
            id: 'ls-023-s1-q9',
            type: 'gap',
            prompt:
              'For three guests, the caterer must provide a ____________ option (no nuts). Write ONE WORD (hyphenated).',
            acceptableAnswers: ['nut-free', 'nut free', 'nutfree'],
            explanation:
              'He says, “three of the guests can’t eat nuts, so please make sure there’s a nut-free option.” The answer is “nut-free”.',
          },
          {
            id: 'ls-023-s1-q10',
            type: 'gap',
            prompt:
              'To confirm the booking, the customer must pay a deposit of ____________ pounds. Write A NUMBER.',
            acceptableAnswers: ['50', 'fifty'],
            explanation:
              'She says, “we ask for a deposit of fifty pounds to confirm the booking, and you can pay the balance on the day.” The answer is 50.',
          },
        ],
      },
      {
        id: 'ls-academic-023-s2',
        title: 'Section 2 — A new city cycle-hire scheme',
        // ~300 words. Informational monologue (Section 2 style): a single speaker
        // introducing a new city cycle-hire scheme — how to hire a bike, where the
        // docking stations are, the costs and the rules. Uses sequencing/signpost
        // language ("first", "next", "finally") that the questions follow, with a
        // sentence-completion + multiple-choice + matching mix. The matching task
        // pairs three landmarks with the docking stations nearest them.
        transcript: `Hello, everyone, and thanks for coming along to find out about CityCycle, our brand-new bike-hire scheme, which launches across the city next month. I'm Tom from the transport team, and I'll explain how it all works.

So, how do you hire a bike? It couldn't be simpler. First, download the CityCycle app and create an account. Then, when you reach any docking station, you scan the code on the bike with your phone, the lock releases, and you ride away. When you've finished, you return the bike to any station — not necessarily the one you started from — and push it firmly into an empty dock until you hear it click.

Now, the cost. The first thirty minutes of every journey are completely free, which is plenty for most trips across the centre. After that, it's one pound for each additional half hour. There's also an annual membership at sixty pounds, which we'd recommend for daily commuters, as it removes all per-trip charges under two hours.

A word about where to find the bikes. We're opening sixty docking stations at launch, and I'd like to highlight three that are handy for popular destinations. For the railway station, your nearest dock is on Bridge Street. For the university campus, use the dock on Park Lane. And for the shopping centre, the closest one is in Market Square.

Finally, a few rules. Helmets aren't provided, but we strongly recommend bringing your own. You must be at least sixteen to hire a bike. And please don't lock the bikes to railings or leave them anywhere other than a docking station — you'll keep being charged until the bike is properly returned. That's it. Happy cycling!`,
        questions: [
          {
            id: 'ls-023-s2-q11',
            type: 'gap',
            prompt:
              'To hire a bike, you first download the CityCycle ____________ and create an account. Write ONE WORD.',
            acceptableAnswers: ['app', 'application'],
            explanation:
              'The speaker says, “First, download the CityCycle app and create an account.” The answer is “app”.',
          },
          {
            id: 'ls-023-s2-q12',
            type: 'gap',
            prompt:
              'At a docking station, you ____________ the code on the bike with your phone and the lock releases. Write ONE WORD.',
            acceptableAnswers: ['scan'],
            explanation:
              'He says, “you scan the code on the bike with your phone, the lock releases, and you ride away.” The answer is “scan”.',
          },
          {
            id: 'ls-023-s2-q13',
            type: 'mcq',
            prompt: 'What does the speaker say about returning a bike?',
            options: [
              'It must be returned to the station you started from',
              'It can be returned to any docking station',
              'It can be left anywhere in the city centre',
              'It must be returned within thirty minutes',
            ],
            correctIndex: 1,
            explanation:
              'He says you return the bike “to any station — not necessarily the one you started from.” Option B matches; the start-station option is explicitly ruled out.',
          },
          {
            id: 'ls-023-s2-q14',
            type: 'gap',
            prompt:
              'The first ____________ minutes of every journey are completely free. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'He says, “The first thirty minutes of every journey are completely free.” The answer is 30.',
          },
          {
            id: 'ls-023-s2-q15',
            type: 'gap',
            prompt:
              'After the free period, the charge is one pound for each additional ____________ hour. Write ONE WORD.',
            acceptableAnswers: ['half'],
            explanation:
              'He says, “After that, it’s one pound for each additional half hour.” The answer is “half”.',
          },
          {
            id: 'ls-023-s2-q16',
            type: 'gap',
            prompt:
              'Annual membership costs ____________ pounds and is recommended for daily commuters. Write A NUMBER.',
            acceptableAnswers: ['60', 'sixty'],
            explanation:
              'He says, “There’s also an annual membership at sixty pounds, which we’d recommend for daily commuters.” The answer is 60.',
          },
          {
            id: 'ls-023-s2-q17',
            type: 'matching',
            variant: 'features',
            prompt:
              'Which docking station is nearest to each destination? Choose the correct station (A–D) for each destination. You may use each station only once.',
            options: [
              { key: 'A', label: 'Bridge Street' },
              { key: 'B', label: 'Park Lane' },
              { key: 'C', label: 'Market Square' },
              { key: 'D', label: 'Station Road' },
            ],
            items: [
              { id: 's2-m-railway', text: 'The railway station', answer: 'A' },
              { id: 's2-m-university', text: 'The university campus', answer: 'B' },
              { id: 's2-m-shopping', text: 'The shopping centre', answer: 'C' },
            ],
            explanation:
              'The speaker pairs each destination with its nearest dock: “For the railway station, your nearest dock is on Bridge Street” (A); “For the university campus, use the dock on Park Lane” (B); “for the shopping centre, the closest one is in Market Square” (C). Station Road (D) is never mentioned — a distractor.',
          },
          {
            id: 'ls-023-s2-q20',
            type: 'mcq',
            prompt: 'What does the speaker say about helmets?',
            options: [
              'They are provided free with every bike',
              'They are available to rent at the docking station',
              'They are not provided, but riders are advised to bring their own',
              'They are compulsory by law',
            ],
            correctIndex: 2,
            explanation:
              'He says, “Helmets aren’t provided, but we strongly recommend bringing your own.” Option C matches; helmets are neither supplied nor rentable here.',
          },
        ],
      },
      {
        id: 'ls-academic-023-s3',
        title: 'Section 3 — Reviewing a science lab report',
        // ~300 words. Academic discussion (Section 3 style): two students (Hannah and
        // Oscar) and a tutor (Dr Park) review the students' science lab report — its
        // aim, method, results, what went wrong and the submission deadline. Speakers
        // discuss the experiment's purpose, the equipment, a measurement error, the
        // outcome and how to fix the write-up, so the questions mix multiple choice
        // (decisions/problems) with completion (concrete details).
        transcript: `DR PARK: Come in, Hannah and Oscar. Let's go through your lab report on the enzyme experiment. First, remind me of the aim.

HANNAH: The aim was to find out how temperature affects the rate of reaction of the enzyme — basically, at what temperature it works fastest.

DR PARK: Good. And what was your method, briefly?

OSCAR: We mixed the enzyme with hydrogen peroxide and measured how much oxygen gas was produced in two minutes, repeating it at five different temperatures.

DR PARK: How did you measure the gas?

OSCAR: With a gas syringe. We recorded the volume in millilitres.

DR PARK: Fine. Now, your results — what did you find?

HANNAH: The reaction was fastest at forty degrees, and then it dropped off sharply at higher temperatures, which fits the theory that the enzyme is denatured by heat.

DR PARK: That's a clear result. But I noticed something odd in your data table for the twenty-degree run.

OSCAR: Yes — that's the bit that went wrong. We think the water bath wasn't holding a steady temperature, so that one reading is too high. It doesn't fit the pattern at all.

DR PARK: So what will you do about it?

HANNAH: We'll repeat just that temperature next session to get a reliable figure, and explain the anomaly in the report.

DR PARK: Sensible. Don't simply delete it — discuss why it happened. Now, presentation. Your graph is good, but your conclusion is far too short. Expand it to link back to the aim properly. And remember the report is due on the fifteenth, so you've got just under a week.

OSCAR: Understood. We'll have it in by then.`,
        questions: [
          {
            id: 'ls-023-s3-q21',
            type: 'mcq',
            prompt: 'What was the aim of the students’ experiment?',
            options: [
              'To find out how temperature affects the enzyme’s rate of reaction',
              'To measure how much hydrogen peroxide the enzyme contained',
              'To compare two different enzymes',
              'To test how light affects the reaction',
            ],
            correctIndex: 0,
            explanation:
              'Hannah says the aim was “to find out how temperature affects the rate of reaction of the enzyme — basically, at what temperature it works fastest.” Option A matches.',
          },
          {
            id: 'ls-023-s3-q22',
            type: 'gap',
            prompt:
              'In the method, the students mixed the enzyme with hydrogen ____________. Write ONE WORD.',
            acceptableAnswers: ['peroxide'],
            explanation:
              'Oscar says, “We mixed the enzyme with hydrogen peroxide and measured how much oxygen gas was produced.” The answer is “peroxide”.',
          },
          {
            id: 'ls-023-s3-q23',
            type: 'gap',
            prompt:
              'The students measured how much ____________ gas was produced in two minutes. Write ONE WORD.',
            acceptableAnswers: ['oxygen'],
            explanation:
              'Oscar says they “measured how much oxygen gas was produced in two minutes.” The answer is “oxygen”.',
          },
          {
            id: 'ls-023-s3-q24',
            type: 'gap',
            prompt:
              'The students measured the volume of gas using a gas ____________. Write ONE WORD.',
            acceptableAnswers: ['syringe'],
            explanation:
              'When asked how they measured the gas, Oscar says, “With a gas syringe. We recorded the volume in millilitres.” The answer is “syringe”.',
          },
          {
            id: 'ls-023-s3-q25',
            type: 'gap',
            prompt: 'The reaction was fastest at ____________ degrees. Write A NUMBER.',
            acceptableAnswers: ['40', 'forty'],
            explanation:
              'Hannah says, “The reaction was fastest at forty degrees, and then it dropped off sharply at higher temperatures.” The answer is 40.',
          },
          {
            id: 'ls-023-s3-q26',
            type: 'mcq',
            prompt: 'Why did the reaction slow down at higher temperatures?',
            options: [
              'The enzyme ran out',
              'The enzyme was denatured by heat',
              'The gas syringe became blocked',
              'The peroxide evaporated',
            ],
            correctIndex: 1,
            explanation:
              'Hannah says the drop-off “fits the theory that the enzyme is denatured by heat.” Option B matches the explanation given.',
          },
          {
            id: 'ls-023-s3-q27',
            type: 'mcq',
            prompt: 'What does Oscar think went wrong with the twenty-degree run?',
            options: [
              'They forgot to record the result',
              'The water bath did not hold a steady temperature',
              'They used the wrong enzyme',
              'The timer stopped early',
            ],
            correctIndex: 1,
            explanation:
              'Oscar says, “We think the water bath wasn’t holding a steady temperature, so that one reading is too high.” Option B matches.',
          },
          {
            id: 'ls-023-s3-q28',
            type: 'mcq',
            prompt: 'What does the tutor advise the students to do about the anomalous reading?',
            options: [
              'Delete it from the report',
              'Repeat that temperature and explain why the anomaly happened',
              'Ignore it, as it does not matter',
              'Average it with the other readings',
            ],
            correctIndex: 1,
            explanation:
              'Hannah proposes repeating that temperature and explaining the anomaly, and Dr Park agrees: “Don’t simply delete it — discuss why it happened.” Option B matches; deleting it is explicitly discouraged.',
          },
          {
            id: 'ls-023-s3-q29',
            type: 'gap',
            prompt:
              'The tutor says the report’s ____________ is far too short and should be expanded. Write ONE WORD.',
            acceptableAnswers: ['conclusion'],
            explanation:
              'Dr Park says, “your conclusion is far too short. Expand it to link back to the aim properly.” The answer is “conclusion” (the graph is praised, a distractor).',
          },
          {
            id: 'ls-023-s3-q30',
            type: 'gap',
            prompt:
              'The report is due on the ____________ of the month. Write A NUMBER (the date).',
            acceptableAnswers: ['15th', 'fifteenth', '15'],
            explanation:
              'Dr Park says, “remember the report is due on the fifteenth, so you’ve got just under a week.” The answer is the fifteenth (15th).',
          },
        ],
      },
      {
        id: 'ls-academic-023-s4',
        title: 'Section 4 — Lecture: ocean currents and climate',
        // ~305 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on ocean currents and climate — how
        // currents form, the global "conveyor belt", and the effect on regional
        // weather. Dense, factual and signposted ("let me start", "next", "finally"),
        // with the note/sentence-completion + multiple-choice mix typical of Section
        // 4, including one True/False/Not Given item.
        transcript: `Good morning. Today we're looking at ocean currents and the powerful role they play in shaping our climate. The oceans are not still — vast rivers of water move constantly within them — and understanding why is key to understanding weather around the world.

Let me start with how surface currents form. The main driver is the wind. As steady winds blow across the sea, friction drags the surface water along with them, setting it in motion. The direction is then bent by the rotation of the Earth, an effect known as the Coriolis effect, which is why the great ocean currents curve into huge loops rather than flowing in straight lines.

Next, there's a second, deeper kind of circulation, driven not by wind but by differences in density. Cold, salty water is denser than warm, fresh water, so in the polar regions, where the sea is cold and salty, surface water sinks to the deep ocean. This sinking pulls in warmer water to replace it, creating a slow, planet-wide loop that scientists call the global conveyor belt. A single drop of water may take around a thousand years to complete the full circuit.

So why does this matter for climate? The conveyor belt carries warmth from the tropics towards the poles. The clearest example is the warm current that crosses the Atlantic and keeps north-western Europe far milder than its latitude alone would suggest. Without it, cities like London would have winters more like those of Canada.

Finally, a note of caution. There is concern that as polar ice melts and adds fresh water to the sea, the sinking process could weaken, slowing the whole conveyor belt. Next week, we'll examine the evidence for that in detail.`,
        questions: [
          {
            id: 'ls-023-s4-q31',
            type: 'gap',
            prompt: 'The main driver of surface currents is the ____________. Write ONE WORD.',
            acceptableAnswers: ['wind'],
            explanation:
              'The speaker says, “The main driver is the wind. As steady winds blow across the sea, friction drags the surface water along.” The answer is “wind”.',
          },
          {
            id: 'ls-023-s4-q32',
            type: 'gap',
            prompt:
              'Surface water is set in motion when ____________ from the wind drags it along. Write ONE WORD.',
            acceptableAnswers: ['friction'],
            explanation:
              'The speaker says, “friction drags the surface water along with them, setting it in motion.” The answer is “friction”.',
          },
          {
            id: 'ls-023-s4-q33',
            type: 'gap',
            prompt:
              'Currents are bent by the rotation of the Earth, an effect called the ____________ effect. Write ONE WORD.',
            acceptableAnswers: ['Coriolis', 'coriolis'],
            explanation:
              'The speaker says the direction “is then bent by the rotation of the Earth, an effect known as the Coriolis effect.” The answer is “Coriolis”.',
          },
          {
            id: 'ls-023-s4-q34',
            type: 'mcq',
            prompt: 'What drives the deeper kind of ocean circulation?',
            options: [
              'The wind',
              'Differences in water density',
              'The tides',
              'Underwater volcanoes',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the deeper circulation is “driven not by wind but by differences in density.” Option B matches; wind drives the surface currents, not this one.',
          },
          {
            id: 'ls-023-s4-q35',
            type: 'mcq',
            prompt: 'According to the lecture, where does surface water sink to the deep ocean?',
            options: [
              'In the tropics',
              'In the polar regions',
              'Near the equator',
              'Along the coast of Europe',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says that “in the polar regions, where the sea is cold and salty, surface water sinks to the deep ocean.” Option B matches.',
          },
          {
            id: 'ls-023-s4-q36',
            type: 'gap',
            prompt:
              'The slow, planet-wide loop of deep circulation is called the global ____________ belt. Write ONE WORD.',
            acceptableAnswers: ['conveyor'],
            explanation:
              'The speaker says this loop is one “scientists call the global conveyor belt.” The answer is “conveyor”.',
          },
          {
            id: 'ls-023-s4-q37',
            type: 'gap',
            prompt:
              'A single drop of water may take around ____________ years to complete the full circuit. Write A NUMBER.',
            acceptableAnswers: ['1000', 'a thousand', 'one thousand', 'thousand'],
            explanation:
              'The speaker says, “A single drop of water may take around a thousand years to complete the full circuit.” The answer is a thousand (1000).',
          },
          {
            id: 'ls-023-s4-q38',
            type: 'mcq',
            prompt: 'Why does the conveyor belt matter for climate?',
            options: [
              'It cools the tropics by removing warm water',
              'It carries warmth from the tropics towards the poles',
              'It has no measurable effect on weather',
              'It only affects the southern hemisphere',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “The conveyor belt carries warmth from the tropics towards the poles.” Option B matches.',
          },
          {
            id: 'ls-023-s4-q39',
            type: 'tfng',
            prompt:
              'The speaker says that without the warm Atlantic current, London would have winters similar to those of Canada.',
            answer: 'true',
            explanation:
              'The speaker states that without the warm current “cities like London would have winters more like those of Canada.” The statement matches the lecture, so it is True.',
          },
          {
            id: 'ls-023-s4-q40',
            type: 'mcq',
            prompt: 'What concern does the speaker raise at the end of the lecture?',
            options: [
              'That the oceans are becoming too salty',
              'That melting polar ice could weaken the sinking process and slow the conveyor belt',
              'That the wind is becoming too weak to drive surface currents',
              'That the Coriolis effect is reversing',
            ],
            correctIndex: 1,
            explanation:
              'The speaker warns that “as polar ice melts and adds fresh water to the sea, the sinking process could weaken, slowing the whole conveyor belt.” Option B matches.',
          },
        ],
      },
    ],
  },
]
