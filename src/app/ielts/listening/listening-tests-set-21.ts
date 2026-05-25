// ─── IELTS Academic Listening — practice test data (Set 21) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, … LISTENING_SET_21) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 marks) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a customer phoning
//     a garage to book a car service), assessed with form / note completion +
//     multiple choice. A surname is spelled and a registration is dictated, and
//     one detail (the total cost) depends on the optional extras the caller
//     chooses, mirroring a real Section 1.
//   • Section 2 — an everyday MONOLOGUE (here: an announcement introducing a
//     community sports festival), assessed with a MATCHING task (events → the
//     venue where each is held) plus sentence completion + multiple choice,
//     carrying signpost language the questions follow.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two engineering students and a
//     tutor discussing a bridge-design project — brief, materials, testing,
//     deadline and who does what), assessed with multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: wind power — how a
//     turbine works, onshore versus offshore, advantages and limitations),
//     assessed with note/sentence completion + multiple choice, including one
//     True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched
//                  case-insensitively and trimmed by the marker. The official
//                  word-limit instruction lives in the prompt.
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'matching' → one mark PER item; the container id is distinct from every
//                  item id (no collisions); each item.answer is a valid option key.
//   • 'tfng'     → True / False / Not Given.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_21: ListeningTest[] = [
  {
    id: 'ls-academic-021',
    title:
      'Practice Test 21 — Booking a Car Service, A Community Sports Festival, A Bridge-Design Engineering Project & Wind Power',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-021-s1',
        title: 'Section 1 — Booking a car service at a garage',
        // ~300 words. Transactional dialogue (Section 1 style): a customer phoning a
        // garage to book a service. A surname is spelled and a registration is
        // dictated; the total cost depends on the optional extras the caller chooses
        // (she adds the air-conditioning check at £35 but declines the £25 valet),
        // mirroring the form/note-completion + multiple-choice mix of a real Section 1.
        transcript: `MAN: Good morning, Maple Road Garage, Sam speaking. How can I help?

WOMAN: Hi, I'd like to book my car in for a service, please.

MAN: Of course. Let me take a few details. Can I start with your name?

WOMAN: Yes, it's Helen Pickford. Pickford is spelled P-I-C-K-F-O-R-D.

MAN: Thank you. And what make and model is the car?

WOMAN: It's a Vauxhall Astra, the 2017 model.

MAN: Lovely. Could you read me the registration number?

WOMAN: Sure, it's L-J-six-eight, then K-W-R. So LJ68 KWR.

MAN: Got it. And what seems to be the trouble, or is it just a routine service?

WOMAN: Mostly routine, but there's one thing — there's a rattling noise from the front when I go over a bump.

MAN: Right, a rattle over bumps — we'll check the suspension while it's in. Now, a full service is one hundred and twenty pounds. We also offer two optional extras: an air-conditioning check for thirty-five pounds, and an interior valet for twenty-five.

WOMAN: I'll have the air-conditioning check — it hasn't been cold lately. But I'll skip the valet this time.

MAN: No problem. So that's the full service plus the air-con check. When would suit you?

WOMAN: Could I bring it in on Wednesday?

MAN: Wednesday… I can do the morning. If you drop it off at eight, it'll be ready by half past four.

WOMAN: Perfect. And do you have a courtesy car?

MAN: We do, but you'd need to book it separately — give us a ring the day before. We'll send a text reminder the night before your appointment anyway.

WOMAN: Great, thanks very much.`,
        questions: [
          {
            id: 'ls-021-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Pickford', 'pickford'],
            explanation:
              'The caller gives her name as “Helen Pickford” and spells the surname: P-I-C-K-F-O-R-D. In Section 1, surnames are almost always spelled aloud — write them down letter by letter.',
          },
          {
            id: 'ls-021-s1-q2',
            type: 'gap',
            prompt: 'Car make and model: Vauxhall ____________. Write ONE WORD.',
            acceptableAnswers: ['Astra', 'astra'],
            explanation: 'She says, “It’s a Vauxhall Astra, the 2017 model.” The model is “Astra”.',
          },
          {
            id: 'ls-021-s1-q3',
            type: 'gap',
            prompt:
              'Registration number: ____________. Write the registration exactly as you hear it.',
            acceptableAnswers: ['LJ68 KWR', 'LJ68KWR', 'lj68 kwr', 'lj68kwr'],
            explanation:
              'She reads it out as “L-J-six-eight, then K-W-R. So LJ68 KWR.” Spacing is not penalised, but every character must be correct.',
          },
          {
            id: 'ls-021-s1-q4',
            type: 'gap',
            prompt:
              'Reported fault: a ____________ noise from the front when going over a bump. Write ONE WORD.',
            acceptableAnswers: ['rattling', 'rattle'],
            explanation:
              'She says, “there’s a rattling noise from the front when I go over a bump.” The answer is “rattling” (“rattle” accepted).',
          },
          {
            id: 'ls-021-s1-q5',
            type: 'gap',
            prompt:
              'While the car is in, the mechanic will also check the ____________. Write ONE WORD.',
            acceptableAnswers: ['suspension'],
            explanation:
              'In response to the rattle over bumps, Sam says, “we’ll check the suspension while it’s in.” The answer is “suspension”.',
          },
          {
            id: 'ls-021-s1-q6',
            type: 'gap',
            prompt: 'A full service costs ____________ pounds. Write A NUMBER.',
            acceptableAnswers: ['120', 'one hundred and twenty', '£120'],
            explanation:
              'Sam says, “a full service is one hundred and twenty pounds.” The answer is 120 (the £35 and £25 extras are separate, optional charges).',
          },
          {
            id: 'ls-021-s1-q7',
            type: 'mcq',
            prompt: 'How much will the customer pay in total?',
            options: [
              '£120, for the full service only',
              '£145, for the service plus the valet',
              '£155, for the service plus the air-conditioning check',
              '£180, for the service plus both extras',
            ],
            correctIndex: 2,
            explanation:
              'The full service is £120; she adds the air-conditioning check (£35) but says, “I’ll skip the valet” (£25). So the total is £120 + £35 = £155. The distractors apply the wrong extra or both extras.',
          },
          {
            id: 'ls-021-s1-q8',
            type: 'gap',
            prompt:
              'The customer will bring the car in on ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Wednesday', 'wednesday'],
            explanation:
              'She asks, “Could I bring it in on Wednesday?” and Sam confirms the morning. The answer is “Wednesday”.',
          },
          {
            id: 'ls-021-s1-q9',
            type: 'gap',
            prompt:
              'If she drops the car off at eight, it will be ready by ____________. Write the time as you hear it.',
            acceptableAnswers: [
              '4.30',
              '4:30',
              'half past four',
              'half past 4',
              '16:30',
              '4.30pm',
              '4:30 pm',
            ],
            explanation:
              'Sam says, “If you drop it off at eight, it’ll be ready by half past four.” That is 4.30 (eight o’clock is the drop-off time, a distractor).',
          },
          {
            id: 'ls-021-s1-q10',
            type: 'mcq',
            prompt: 'What does Sam say about the courtesy car?',
            options: [
              'It is included free with every service',
              'It must be booked separately by phoning the day before',
              'It is not available on Wednesdays',
              'It can only be collected after half past four',
            ],
            correctIndex: 1,
            explanation:
              'Sam says, “you’d need to book it separately — give us a ring the day before.” Option B matches; the text reminder is a separate detail.',
          },
        ],
      },
      {
        id: 'ls-academic-021-s2',
        title: 'Section 2 — A community sports festival',
        // ~300 words. Informational monologue (Section 2 style): a single speaker
        // introduces the programme for a community sports festival. A MATCHING task
        // pairs five events with the venue where each is held, followed by a
        // sentence-completion + multiple-choice mix. Uses signpost language the
        // questions follow.
        transcript: `Hello everyone, and welcome to the planning briefing for this year's Riverside Community Sports Festival. My name's Dev, and I'm the events coordinator. The festival runs across one busy Saturday in June, and I'll talk you through where everything happens, how to take part, and what's on offer.

Let me start with the main events and their locations, because we're spread across several venues this year. The five-kilometre fun run sets off from the High Street, right outside the town hall — that's our starting line. The swimming gala, of course, takes place at the leisure centre pool. The football tournament will be held on the school playing fields, which have plenty of space for the eight teams. Our brand-new event, the climbing wall, has been set up in the sports hall — it's portable, but it needs a roof over it. And finally, the cycling time trial uses the old airfield, where there's a long, flat, traffic-free track.

Now, how do you enter? Most events are free and you simply turn up on the day. The one exception is the fun run, which costs five pounds, and for that you must register in advance online — we can't take entries on the morning.

A quick word on what you can win. Every finisher in the fun run gets a medal, but the overall festival prize — awarded to the club with the most points across all events — is a trophy that the winning club keeps for the year.

One practical note: parking at the leisure centre is very limited, so if you can, please walk or cycle. The festival office, by the way, is in the library, and that's where you collect your race number and ask any questions on the day.`,
        questions: [
          {
            id: 'ls-021-s2-q11',
            type: 'matching',
            variant: 'features',
            prompt:
              'Questions 11–15. Match each festival event with the venue where it is held. Write the correct letter, A–F, next to each event. (There is one extra venue you will not need.)',
            options: [
              { key: 'A', label: 'the High Street / outside the town hall' },
              { key: 'B', label: 'the leisure centre pool' },
              { key: 'C', label: 'the school playing fields' },
              { key: 'D', label: 'the sports hall' },
              { key: 'E', label: 'the old airfield' },
              { key: 'F', label: 'the library' },
            ],
            items: [
              { id: 's2-m-a', text: '11. The five-kilometre fun run', answer: 'A' },
              { id: 's2-m-b', text: '12. The swimming gala', answer: 'B' },
              { id: 's2-m-c', text: '13. The football tournament', answer: 'C' },
              { id: 's2-m-d', text: '14. The climbing wall', answer: 'D' },
              { id: 's2-m-e', text: '15. The cycling time trial', answer: 'E' },
            ],
            explanation:
              'The speaker places each event in turn: the fun run “sets off from the High Street, right outside the town hall” (A); the swimming gala is “at the leisure centre pool” (B); the football tournament is “on the school playing fields” (C); the climbing wall is “in the sports hall” (D); and the cycling time trial “uses the old airfield” (E). The library (F) is the festival office, not an event venue, so it is the extra option.',
          },
          {
            id: 'ls-021-s2-q16',
            type: 'gap',
            prompt:
              'The festival takes place on one Saturday in ____________. Write ONE WORD (a month).',
            acceptableAnswers: ['June', 'june'],
            explanation:
              'The coordinator says, “The festival runs across one busy Saturday in June.” The answer is “June”.',
          },
          {
            id: 'ls-021-s2-q17',
            type: 'gap',
            prompt: 'The football tournament has space for ____________ teams. Write A NUMBER.',
            acceptableAnswers: ['8', 'eight'],
            explanation:
              'He says the playing fields “have plenty of space for the eight teams.” The answer is 8.',
          },
          {
            id: 'ls-021-s2-q18',
            type: 'mcq',
            prompt: 'How do people enter the fun run?',
            options: [
              'By turning up on the day, free of charge',
              'By registering in advance online and paying five pounds',
              'By signing up at the festival office on the morning',
              'By being nominated by their sports club',
            ],
            correctIndex: 1,
            explanation:
              'He says the fun run “costs five pounds, and for that you must register in advance online — we can’t take entries on the morning.” Option B matches; turning up free applies to the other events.',
          },
          {
            id: 'ls-021-s2-q19',
            type: 'mcq',
            prompt: 'What is awarded to the club with the most points across all events?',
            options: [
              'A medal for every finisher',
              'A cash prize',
              'A trophy the winning club keeps for the year',
              'Free entry to next year’s festival',
            ],
            correctIndex: 2,
            explanation:
              'He says the overall prize, “awarded to the club with the most points across all events — is a trophy that the winning club keeps for the year.” Option C matches; the medal goes to every fun-run finisher.',
          },
          {
            id: 'ls-021-s2-q20',
            type: 'gap',
            prompt:
              'On the day, you collect your race number from the festival office, which is in the ____________. Write ONE WORD.',
            acceptableAnswers: ['library'],
            explanation:
              'He says, “The festival office … is in the library, and that’s where you collect your race number.” The answer is “library”.',
          },
        ],
      },
      {
        id: 'ls-academic-021-s3',
        title: 'Section 3 — Tutorial: a bridge-design engineering project',
        // ~300 words. Academic discussion (Section 3 style): two engineering students
        // (Leo and Priya) and a tutor (Dr Khan) discuss their design project — the
        // brief, the materials, how they will test the model, the deadline and who
        // does what. Questions mix multiple choice (decisions/opinions) with
        // completion (concrete details).
        transcript: `DR KHAN: So, Leo and Priya, let's review your design project. Remind me of the brief.

LEO: We have to design and build a model bridge that spans forty centimetres, and it has to hold as much weight as possible while using as little material as we can.

DR KHAN: Good — so it's really a strength-to-weight challenge. What material are you using?

PRIYA: We considered balsa wood, but in the end we chose card — corrugated card, specifically. It's cheap, and surprisingly strong when you fold it into triangles.

DR KHAN: Triangles — so you've gone for a truss design rather than an arch?

LEO: Yes. We read that triangles don't deform under load the way squares do, so a truss should be stiffer for the same weight.

DR KHAN: Exactly right. Now, how will you test it?

PRIYA: We'll hang a bucket from the centre and add sand gradually until the bridge fails. We record the maximum load it held just before it broke.

DR KHAN: Sensible. And make sure you do more than one run — a single test tells you very little. When is this all due?

LEO: The build is due in three weeks, but the written report comes a week after that.

DR KHAN: So plan backwards from those two dates. How are you splitting the work?

PRIYA: Leo's doing the construction, and I'm writing up the method and results. We'll do the analysis together.

DR KHAN: That's a fair split. One last tip: photograph each stage as you build. Examiners love to see how a failure actually happened, and you can't reconstruct that afterwards.`,
        questions: [
          {
            id: 'ls-021-s3-q21',
            type: 'gap',
            prompt: 'The model bridge must span ____________ centimetres. Write A NUMBER.',
            acceptableAnswers: ['40', 'forty'],
            explanation:
              'Leo says they must “design and build a model bridge that spans forty centimetres.” The answer is 40.',
          },
          {
            id: 'ls-021-s3-q22',
            type: 'mcq',
            prompt: 'According to the brief, what is the main goal of the design?',
            options: [
              'To look as realistic as possible',
              'To hold as much weight as possible while using as little material as possible',
              'To be built as quickly as possible',
              'To span the longest possible distance',
            ],
            correctIndex: 1,
            explanation:
              'Leo says the bridge “has to hold as much weight as possible while using as little material as we can,” which Dr Khan calls “a strength-to-weight challenge.” Option B matches; the span is fixed at 40 cm.',
          },
          {
            id: 'ls-021-s3-q23',
            type: 'mcq',
            prompt: 'Which material did the students finally choose, and why?',
            options: [
              'Balsa wood, because it is the lightest',
              'Corrugated card, because it is cheap and strong when folded into triangles',
              'Steel wire, because it does not bend',
              'Plastic, because it is waterproof',
            ],
            correctIndex: 1,
            explanation:
              'Priya says they “considered balsa wood, but in the end we chose card — corrugated card,” which is “cheap, and surprisingly strong when you fold it into triangles.” Option B matches; balsa was rejected.',
          },
          {
            id: 'ls-021-s3-q24',
            type: 'gap',
            prompt:
              'The students have chosen a ____________ design rather than an arch. Write ONE WORD.',
            acceptableAnswers: ['truss'],
            explanation:
              'Dr Khan asks if they have “gone for a truss design rather than an arch,” and Leo confirms, “Yes.” The answer is “truss”.',
          },
          {
            id: 'ls-021-s3-q25',
            type: 'mcq',
            prompt:
              'Why do the students believe triangles are better than squares for the structure?',
            options: [
              'Triangles are cheaper to cut from card',
              'Triangles do not deform under load the way squares do',
              'Triangles look more impressive to examiners',
              'Triangles use more material for extra safety',
            ],
            correctIndex: 1,
            explanation:
              'Leo says, “triangles don’t deform under load the way squares do, so a truss should be stiffer for the same weight.” Option B matches.',
          },
          {
            id: 'ls-021-s3-q26',
            type: 'gap',
            prompt:
              'To test the bridge, the students will hang a bucket from the centre and gradually add ____________. Write ONE WORD.',
            acceptableAnswers: ['sand'],
            explanation:
              'Priya says, “We’ll hang a bucket from the centre and add sand gradually until the bridge fails.” The answer is “sand”.',
          },
          {
            id: 'ls-021-s3-q27',
            type: 'mcq',
            prompt: 'What does the tutor advise about testing?',
            options: [
              'To test the bridge only once to save material',
              'To do more than one run, because a single test tells you very little',
              'To test it without recording any numbers',
              'To let another group carry out the test',
            ],
            correctIndex: 1,
            explanation:
              'Dr Khan says, “make sure you do more than one run — a single test tells you very little.” Option B matches.',
          },
          {
            id: 'ls-021-s3-q28',
            type: 'gap',
            prompt: 'The build is due in ____________ weeks. Write A NUMBER.',
            acceptableAnswers: ['3', 'three'],
            explanation:
              'Leo says, “The build is due in three weeks, but the written report comes a week after that.” The build deadline is 3 weeks.',
          },
          {
            id: 'ls-021-s3-q29',
            type: 'mcq',
            prompt: 'How are the students dividing the work?',
            options: [
              'Leo writes the report and Priya builds the bridge',
              'Leo builds the bridge and Priya writes up the method and results',
              'They each build a separate bridge',
              'The tutor will write up the results for them',
            ],
            correctIndex: 1,
            explanation:
              'Priya says, “Leo’s doing the construction, and I’m writing up the method and results. We’ll do the analysis together.” Option B matches.',
          },
          {
            id: 'ls-021-s3-q30',
            type: 'gap',
            prompt:
              'The tutor’s final tip is to ____________ each stage as they build. Write ONE WORD.',
            acceptableAnswers: ['photograph'],
            explanation:
              'Dr Khan says, “photograph each stage as you build,” because you cannot reconstruct a failure afterwards. The answer is “photograph”.',
          },
        ],
      },
      {
        id: 'ls-academic-021-s4',
        title: 'Section 4 — Lecture: wind power',
        // ~310 words. Academic lecture / monologue (Section 4 style): a single speaker
        // explains how a wind turbine works, contrasts onshore and offshore wind, and
        // sets out the advantages and limitations of wind power. Dense, factual and
        // signposted, with the note/sentence-completion + multiple-choice mix typical
        // of Section 4, including one True/False/Not Given item.
        transcript: `Good afternoon. Today's lecture is on wind power — how we turn moving air into electricity, the two main settings in which we do it, and where the real strengths and weaknesses of the technology lie.

Let's begin with how a turbine actually works. The wind pushes against the blades, making them spin. The blades are connected to a central shaft, and that rotating shaft drives a generator, which is the component that produces the electricity. Modern turbines also turn to face the wind: a small motor rotates the whole top section, the nacelle, so the blades always meet the wind head-on. One key figure to remember is that the energy captured rises sharply with wind speed — in fact, it's proportional to the cube of the wind speed, so doubling the wind gives roughly eight times the power.

Now, where do we put these turbines? Broadly, there are two options: onshore, meaning on land, and offshore, meaning out at sea. Onshore wind is cheaper to build and easier to connect to the grid. Offshore wind, by contrast, is more expensive to install, but it has a major advantage — the wind at sea is stronger and far steadier, so the turbines generate more consistently.

Let me turn to the limitations, because wind power isn't a complete answer on its own. The obvious one is that it's intermittent: when the wind drops, output falls, so we need either storage or back-up sources to keep supply steady. People often raise noise and the effect on birds as objections, and these are taken seriously in planning. What I'd stress, though, is that wind turbines produce no carbon dioxide while running, which is precisely why they're central to cutting emissions. Next week, we'll examine how engineers forecast the wind to manage that intermittency.`,
        questions: [
          {
            id: 'ls-021-s4-q31',
            type: 'gap',
            prompt: 'The wind pushes against the ____________, making them spin. Write ONE WORD.',
            acceptableAnswers: ['blades', 'blade'],
            explanation:
              'The lecturer says, “The wind pushes against the blades, making them spin.” The answer is “blades”.',
          },
          {
            id: 'ls-021-s4-q32',
            type: 'gap',
            prompt:
              'The rotating shaft drives a ____________, which produces the electricity. Write ONE WORD.',
            acceptableAnswers: ['generator'],
            explanation:
              'He says “that rotating shaft drives a generator, which is the component that produces the electricity.” The answer is “generator”.',
          },
          {
            id: 'ls-021-s4-q33',
            type: 'gap',
            prompt:
              'A small motor rotates the whole top section, called the ____________, so the blades face the wind. Write ONE WORD.',
            acceptableAnswers: ['nacelle'],
            explanation:
              'He says “a small motor rotates the whole top section, the nacelle, so the blades always meet the wind head-on.” The answer is “nacelle”.',
          },
          {
            id: 'ls-021-s4-q34',
            type: 'mcq',
            prompt:
              'What does the lecturer say about the relationship between power and wind speed?',
            options: [
              'Power is unrelated to wind speed',
              'Power is proportional to wind speed itself',
              'Power is proportional to the cube of the wind speed, so doubling the wind gives about eight times the power',
              'Power falls as wind speed rises',
            ],
            correctIndex: 2,
            explanation:
              'He says the captured energy “is proportional to the cube of the wind speed, so doubling the wind gives roughly eight times the power.” Option C matches.',
          },
          {
            id: 'ls-021-s4-q35',
            type: 'mcq',
            prompt: 'What advantage does the lecturer give for onshore wind?',
            options: [
              'The wind is stronger and steadier on land',
              'It is cheaper to build and easier to connect to the grid',
              'It produces no carbon dioxide, unlike offshore wind',
              'It never stops generating',
            ],
            correctIndex: 1,
            explanation:
              'He says, “Onshore wind is cheaper to build and easier to connect to the grid.” Option B matches; stronger, steadier wind is the offshore advantage.',
          },
          {
            id: 'ls-021-s4-q36',
            type: 'gap',
            prompt:
              'Compared with onshore, the wind at sea is stronger and far ____________. Write ONE WORD.',
            acceptableAnswers: ['steadier'],
            explanation:
              'He says “the wind at sea is stronger and far steadier, so the turbines generate more consistently.” The answer is “steadier”.',
          },
          {
            id: 'ls-021-s4-q37',
            type: 'mcq',
            prompt: 'Why is offshore wind described as having a major advantage despite its cost?',
            options: [
              'Because it is the cheapest option overall',
              'Because the stronger, steadier sea wind means the turbines generate more consistently',
              'Because it needs no maintenance',
              'Because it can be connected to the grid more easily',
            ],
            correctIndex: 1,
            explanation:
              'He says offshore wind “is more expensive to install, but it has a major advantage — the wind at sea is stronger and far steadier, so the turbines generate more consistently.” Option B matches.',
          },
          {
            id: 'ls-021-s4-q38',
            type: 'gap',
            prompt:
              'The main limitation of wind power is that it is ____________: when the wind drops, output falls. Write ONE WORD.',
            acceptableAnswers: ['intermittent'],
            explanation:
              'He says, “The obvious one is that it’s intermittent: when the wind drops, output falls.” The answer is “intermittent”.',
          },
          {
            id: 'ls-021-s4-q39',
            type: 'mcq',
            prompt: 'How does the lecturer suggest the intermittency problem can be managed?',
            options: [
              'By building turbines only offshore',
              'By using storage or back-up sources to keep supply steady',
              'By making the blades larger',
              'By ignoring it, as the wind rarely drops',
            ],
            correctIndex: 1,
            explanation:
              'He says that when the wind drops, “we need either storage or back-up sources to keep supply steady.” Option B matches.',
          },
          {
            id: 'ls-021-s4-q40',
            type: 'tfng',
            prompt:
              'The lecturer states that wind turbines produce no carbon dioxide while they are running.',
            answer: 'true',
            explanation:
              'He says “wind turbines produce no carbon dioxide while running, which is precisely why they’re central to cutting emissions.” The statement matches the lecture, so it is True.',
          },
        ],
      },
    ],
  },
]
