// ─── IELTS Academic Listening - practice test data (Set 26) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (exactly 40 marks) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a traveller phoning
//     a company to book an airport taxi / transfer), assessed with form / note
//     completion + multiple choice. A surname is spelled and a mobile number is
//     dictated, and the total fare depends on a stated choice (vehicle size).
//   • Section 2 - an everyday MONOLOGUE (here: a radio feature on a local food
//     festival - stalls, events, parking and times), assessed with sentence
//     completion + multiple choice, carrying signpost language the questions
//     follow in order.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial planning an architecture-history essay), assessed with multiple
//     choice + completion + a Matching task (one mark per item).
//   • Section 4 - an academic LECTURE / monologue (here: solar power - how
//     photovoltaic cells work, their advantages, limitations and storage),
//     assessed with note/sentence completion + multiple choice, including one
//     True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched
//                  case-insensitively and trimmed by the marker. The official
//                  word-limit instruction lives in the prompt.
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'tfng'     → True / False / Not Given.
//   • 'matching' → match each item to ONE option; scores one mark per item.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// Marks: Section 1 = 10, Section 2 = 10, Section 3 = 10, Section 4 = 10 (40).
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_26: ListeningTest[] = [
  {
    id: 'ls-academic-026',
    title:
      'Practice Test 26 - Booking an Airport Taxi, A Local Food Festival, Planning an Architecture-History Essay & How Solar Power Works',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-026-s1',
        title: 'Section 1 - Booking an airport taxi transfer',
        // ~300 words. Transactional dialogue (Section 1 style): a traveller phoning
        // a private-hire company to book an airport transfer. A surname is spelled
        // and a mobile number is dictated; the total fare depends on a stated choice
        // (which vehicle is needed), mirroring the form/note-completion + multiple-
        // choice mix of a real Section 1.
        transcript: `WOMAN: Good afternoon, Greenway Cars, Priya speaking. How can I help?

MAN: Hello, I'd like to book a taxi to take me to the airport next week, please.

WOMAN: Of course. Let me take your details. Could I have your name?

MAN: Yes, it's Martin Halliday. Halliday is spelled H-A-L-L-I-D-A-Y.

WOMAN: Thank you. And the best number to reach you on?

MAN: It's my mobile - oh-seven-six-three-three, double four, one-oh-nine.

WOMAN: Lovely. Now, where are we picking you up from?

MAN: From my home. It's number forty-two, Maple Avenue.

WOMAN: And which airport are you flying from?

MAN: Stansted, please. My flight is at twenty past nine in the morning.

WOMAN: For a morning flight like that we'd usually recommend leaving three hours before, so I'd suggest a pickup at half past six. Does that suit you?

MAN: Yes, half past six is fine.

WOMAN: How many passengers, and how much luggage?

MAN: There'll be four of us, and we've got a lot of cases - six in total.

WOMAN: In that case a standard saloon car won't be big enough. I'd recommend the estate car, which seats four with plenty of boot space, or for groups with extra luggage some people prefer the people carrier.

MAN: The estate sounds right for us.

WOMAN: The estate to Stansted is a fixed fare of fifty-five pounds. The people carrier would have been seventy. Now, how would you like to pay?

MAN: Can I pay the driver on the day?

WOMAN: You can, by card or cash. And just so you know, the driver will text you when he arrives, rather than ringing the doorbell.

MAN: Perfect. Thank you very much.`,
        questions: [
          {
            id: 'ls-026-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Halliday', 'halliday'],
            explanation:
              'The caller gives his name as ‘Martin Halliday’ and spells the surname: H-A-L-L-I-D-A-Y. In Section 1, names are almost always spelled aloud - write them down letter by letter.',
          },
          {
            id: 'ls-026-s1-q2',
            type: 'gap',
            prompt: 'Contact mobile number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: [
              '07633 44109',
              '0763344109',
              '07633 441 09',
              '07633441 09',
              '07633 44 109',
            ],
            explanation:
              'He dictates the number as ‘oh-seven-six-three-three, double four, one-oh-nine’ - that is 07633 44109. ‘Double four’ means two 4s and ‘oh’ is zero; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-026-s1-q3',
            type: 'gap',
            prompt: 'Pickup address: number ____________, Maple Avenue. Write A NUMBER.',
            acceptableAnswers: ['42', 'forty-two', 'forty two'],
            explanation:
              'He says the pickup is ‘from my home. It’s number forty-two, Maple Avenue.’ The answer is 42.',
          },
          {
            id: 'ls-026-s1-q4',
            type: 'gap',
            prompt: 'The customer is flying from ____________ airport. Write ONE WORD.',
            acceptableAnswers: ['Stansted', 'stansted'],
            explanation:
              'When asked which airport, he replies ‘Stansted, please.’ The answer is Stansted.',
          },
          {
            id: 'ls-026-s1-q5',
            type: 'gap',
            prompt:
              'The agreed pickup time is half past ____________ in the morning. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation:
              'The assistant suggests ‘a pickup at half past six’ and he agrees, ‘half past six is fine.’ The answer is 6 (the 9.20 flight time is a distractor).',
          },
          {
            id: 'ls-026-s1-q6',
            type: 'gap',
            prompt: 'Number of passengers travelling: ____________. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation: 'He says, ‘There’ll be four of us.’ The number of passengers is 4.',
          },
          {
            id: 'ls-026-s1-q7',
            type: 'gap',
            prompt: 'The group is travelling with ____________ cases in total. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation: 'He says they have ‘a lot of cases - six in total.’ The answer is 6.',
          },
          {
            id: 'ls-026-s1-q8',
            type: 'mcq',
            prompt: 'Which vehicle does the customer choose?',
            options: ['A standard saloon car', 'An estate car', 'A people carrier', 'A minibus'],
            correctIndex: 1,
            explanation:
              'The assistant says a saloon ‘won’t be big enough’ and offers the estate or the people carrier; he replies, ‘The estate sounds right for us.’ Option B matches.',
          },
          {
            id: 'ls-026-s1-q9',
            type: 'mcq',
            prompt: 'How much will the customer pay for the transfer to the airport?',
            options: [
              'Fifty-five pounds, the fixed fare for the estate car',
              'Seventy pounds, the fixed fare for the people carrier',
              'Fifty-five pounds per passenger',
              'Seventy pounds for the estate car',
            ],
            correctIndex: 0,
            explanation:
              'Having chosen the estate (Q8), the relevant fare is ‘a fixed fare of fifty-five pounds.’ The seventy-pound figure is the people carrier price, a distractor; the fare is fixed, not per passenger.',
          },
          {
            id: 'ls-026-s1-q10',
            type: 'mcq',
            prompt: 'What will the driver do on arrival?',
            options: [
              'Ring the doorbell',
              'Send the customer a text message',
              'Telephone the customer',
              'Wait at the end of the street',
            ],
            correctIndex: 1,
            explanation:
              'The assistant says ‘the driver will text you when he arrives, rather than ringing the doorbell.’ Option B matches; ringing the doorbell is what the driver will not do.',
          },
        ],
      },
      {
        id: 'ls-academic-026-s2',
        title: 'Section 2 - A radio feature on a local food festival',
        // ~290 words. Informational monologue (Section 2 style): a single radio
        // presenter previewing a local food festival - the stalls, events, parking
        // and opening times. Uses sequencing/signpost language (‘first’, ‘after
        // that’, ‘finally’) that the questions follow in order, with a sentence-
        // completion + multiple-choice mix.
        transcript: `Hello, and welcome back to the show. This Saturday sees the return of one of my favourite events of the year, the Riverside Food Festival, held in Bewley Park, and I've got all the details you need.

Let me start with the food itself, because that's why we're all going. There will be more than sixty stalls this year, a record number, ranging from local cheese-makers and bakers to street-food vans from all over the world. The organisers tell me the most popular stall last year, by a clear margin, was the wood-fired pizza van, so do get there early if that's what you're after.

As well as the stalls, there's a full programme of events. The main draw is the cookery theatre, where well-known chefs give live demonstrations throughout the day. This year's headline guest is the television cook Sara Bennett, and her demonstration starts at one o'clock on the main stage.

For families, there's a children's cookery tent where youngsters can learn to make their own bread, and that's completely free, though you do need to book a slot on arrival.

Now, a word about getting there. The car park at the park itself is small and fills up very quickly, so I'd strongly advise leaving the car at home and coming by bus - the number 12 stops right outside. If you must drive, there's a larger overflow car park at the leisure centre, a ten-minute walk away.

Finally, the times. The festival opens at ten in the morning and runs until six, but the stalls do start packing up around half past five, so don't leave your shopping too late. Admission, by the way, is free.`,
        questions: [
          {
            id: 'ls-026-s2-q11',
            type: 'gap',
            prompt: 'The Riverside Food Festival is held in ____________ Park. Write ONE WORD.',
            acceptableAnswers: ['Bewley', 'bewley'],
            explanation:
              'The presenter says the festival is ‘held in Bewley Park.’ The answer is Bewley.',
          },
          {
            id: 'ls-026-s2-q12',
            type: 'gap',
            prompt:
              'This year there will be more than ____________ stalls, a record number. Write A NUMBER.',
            acceptableAnswers: ['60', 'sixty'],
            explanation:
              'He says ‘There will be more than sixty stalls this year, a record number.’ The answer is 60.',
          },
          {
            id: 'ls-026-s2-q13',
            type: 'mcq',
            prompt: 'According to the presenter, which stall was the most popular last year?',
            options: [
              'A local cheese-maker',
              'The wood-fired pizza van',
              'A bakery stall',
              'A street-food van serving curry',
            ],
            correctIndex: 1,
            explanation:
              'He says ‘the most popular stall last year, by a clear margin, was the wood-fired pizza van.’ Option B matches.',
          },
          {
            id: 'ls-026-s2-q14',
            type: 'gap',
            prompt:
              'Well-known chefs give live demonstrations in the cookery ____________. Write ONE WORD.',
            acceptableAnswers: ['theatre', 'theater'],
            explanation:
              'He calls the main draw ‘the cookery theatre, where well-known chefs give live demonstrations throughout the day.’ The answer is theatre.',
          },
          {
            id: 'ls-026-s2-q15',
            type: 'gap',
            prompt:
              'This year’s headline guest is the television cook ____________ Bennett. Write ONE WORD (a first name).',
            acceptableAnswers: ['Sara', 'sara'],
            explanation:
              'He says ‘This year’s headline guest is the television cook Sara Bennett.’ The answer is Sara.',
          },
          {
            id: 'ls-026-s2-q16',
            type: 'gap',
            prompt:
              'The headline guest’s demonstration starts at ____________ o’clock. Write A NUMBER.',
            acceptableAnswers: ['1', 'one'],
            explanation:
              'He says ‘her demonstration starts at one o’clock on the main stage.’ The answer is 1.',
          },
          {
            id: 'ls-026-s2-q17',
            type: 'mcq',
            prompt: 'What does the presenter say about the children’s cookery tent?',
            options: [
              'It costs a small fee to enter',
              'It is free, but you must book a slot on arrival',
              'It is only open in the afternoon',
              'It is for adults as well as children',
            ],
            correctIndex: 1,
            explanation:
              'He says the tent is ‘completely free, though you do need to book a slot on arrival.’ Option B matches.',
          },
          {
            id: 'ls-026-s2-q18',
            type: 'mcq',
            prompt: 'How does the presenter advise getting to the festival?',
            options: [
              'By car, parking at the park itself',
              'By bus, as the car park fills up quickly',
              'By train to the nearest station',
              'By bicycle along the river path',
            ],
            correctIndex: 1,
            explanation:
              'He says the park car park ‘fills up very quickly, so I’d strongly advise leaving the car at home and coming by bus - the number 12 stops right outside.’ Option B matches.',
          },
          {
            id: 'ls-026-s2-q19',
            type: 'gap',
            prompt:
              'Drivers can use a larger overflow car park at the ____________ centre. Write ONE WORD.',
            acceptableAnswers: ['leisure'],
            explanation:
              'He says ‘there’s a larger overflow car park at the leisure centre, a ten-minute walk away.’ The answer is leisure.',
          },
          {
            id: 'ls-026-s2-q20',
            type: 'gap',
            prompt:
              'The festival opens at ten in the morning and runs until ____________. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation:
              'He says the festival ‘opens at ten in the morning and runs until six.’ The closing time is 6 (the stalls start packing up at half past five, a distractor).',
          },
        ],
      },
      {
        id: 'ls-academic-026-s3',
        title: 'Section 3 - Tutorial: planning an architecture-history essay',
        // ~310 words. Academic discussion (Section 3 style): two students (Hannah and
        // Tom) and a tutor (Dr Okafor) plan an architecture-history essay - choosing
        // the topic, the sources, the structure and the deadline. Includes a Matching
        // task (one mark per item) on which student is responsible for each section,
        // plus multiple choice and completion.
        transcript: `DR OKAFOR: Right, Hannah and Tom, let's plan your architecture-history essay. Have you chosen a focus?

HANNAH: We have. We're writing about the Gothic cathedrals of northern France, and specifically how new engineering allowed them to build so much higher than before.

DR OKAFOR: A strong topic. And what's the central argument?

TOM: That it was really the flying buttress, more than anything else, that made those soaring walls of glass possible.

DR OKAFOR: Good - a clear thesis. Now, sources. What have you found?

HANNAH: For the engineering side, we're relying mainly on a recent book by Professor Reynolds, which is very technical but excellent.

DR OKAFOR: Reynolds is sound. Just be careful - one warning - his dating of the earliest examples has been challenged, so cross-check those dates against another source.

TOM: We will. We've also found a useful set of original building accounts from the period, which tell us how much the work actually cost.

DR OKAFOR: Primary sources like that will really lift the essay. Avoid leaning too heavily on websites, though. Now, how are you structuring it, and who's writing what?

HANNAH: We thought three main sections. I'll take the historical background - the social and religious context. Tom is doing the engineering analysis, the buttresses and vaults. And then we'll write the conclusion together.

DR OKAFOR: And the introduction?

TOM: Hannah's writing that as well, since it leads into her background section.

DR OKAFOR: That makes sense. One tip: write the introduction last, once you know what you're actually introducing. Finally, the deadline. The essay is due on the fifteenth of March, but I'd ask for a draft a week earlier so I can give you feedback.

HANNAH: So a draft by the eighth. We'll manage that.`,
        questions: [
          {
            id: 'ls-026-s3-q21',
            type: 'mcq',
            prompt: 'What is the focus of the students’ essay?',
            options: [
              'The Gothic cathedrals of northern France and how engineering let them build higher',
              'The decoration of medieval English churches',
              'The cost of building cathedrals across Europe',
              'The training of stonemasons in the Middle Ages',
            ],
            correctIndex: 0,
            explanation:
              'Hannah says they are ‘writing about the Gothic cathedrals of northern France, and specifically how new engineering allowed them to build so much higher.’ Option A matches.',
          },
          {
            id: 'ls-026-s3-q22',
            type: 'gap',
            prompt:
              'The essay’s central argument is that the flying ____________ made the soaring walls of glass possible. Write ONE WORD.',
            acceptableAnswers: ['buttress', 'buttresses'],
            explanation:
              'Tom says ‘it was really the flying buttress, more than anything else, that made those soaring walls of glass possible.’ The answer is buttress.',
          },
          {
            id: 'ls-026-s3-q23',
            type: 'gap',
            prompt:
              'For the engineering side, the students rely mainly on a recent book by Professor ____________. Write ONE WORD (a surname).',
            acceptableAnswers: ['Reynolds', 'reynolds'],
            explanation:
              'Hannah says they are ‘relying mainly on a recent book by Professor Reynolds, which is very technical but excellent.’ The answer is Reynolds.',
          },
          {
            id: 'ls-026-s3-q24',
            type: 'mcq',
            prompt: 'What warning does the tutor give about Professor Reynolds’ book?',
            options: [
              'It is too old to be reliable',
              'His dating of the earliest examples has been challenged',
              'It does not discuss engineering at all',
              'It is only available as a website',
            ],
            correctIndex: 1,
            explanation:
              'Dr Okafor says ‘his dating of the earliest examples has been challenged, so cross-check those dates against another source.’ Option B matches.',
          },
          {
            id: 'ls-026-s3-q25',
            type: 'gap',
            prompt:
              'As a primary source, the students have found a set of original building ____________ showing how much the work cost. Write ONE WORD.',
            acceptableAnswers: ['accounts'],
            explanation:
              'Tom says they found ‘a useful set of original building accounts from the period, which tell us how much the work actually cost.’ The answer is accounts.',
          },
          {
            id: 'ls-026-s3-q26',
            type: 'matching',
            variant: 'features',
            prompt:
              'Who will write each part of the essay? Match each section (Questions 26-28) to the correct person from the list. You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Hannah only' },
              { key: 'B', label: 'Tom only' },
              { key: 'C', label: 'Hannah and Tom together' },
            ],
            items: [
              {
                id: 'ls-026-s3-q26-i1',
                text: 'The historical background (social and religious context)',
                answer: 'A',
              },
              {
                id: 'ls-026-s3-q26-i2',
                text: 'The engineering analysis (buttresses and vaults)',
                answer: 'B',
              },
              {
                id: 'ls-026-s3-q26-i3',
                text: 'The conclusion',
                answer: 'C',
              },
            ],
            explanation:
              'Hannah says ‘I’ll take the historical background’ (A), ‘Tom is doing the engineering analysis, the buttresses and vaults’ (B), and ‘we’ll write the conclusion together’ (C).',
          },
          {
            id: 'ls-026-s3-q29',
            type: 'gap',
            prompt:
              'Hannah will also write the ____________, as it leads into her background section. Write ONE WORD.',
            acceptableAnswers: ['introduction', 'intro'],
            explanation:
              'Tom says ‘Hannah’s writing that as well’, referring to the introduction, ‘since it leads into her background section.’ The answer is introduction.',
          },
          {
            id: 'ls-026-s3-q30',
            type: 'gap',
            prompt:
              'The completed essay is due on the ____________ of March. Write A NUMBER (a date).',
            acceptableAnswers: ['15th', '15', 'fifteenth'],
            explanation:
              'Dr Okafor says ‘The essay is due on the fifteenth of March.’ The answer is the 15th (the draft, due on the eighth, is a distractor).',
          },
        ],
      },
      {
        id: 'ls-academic-026-s4',
        title: 'Section 4 - Lecture: how solar power works',
        // ~310 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on solar power - how photovoltaic
        // cells turn sunlight into electricity, the advantages, the limitations and
        // the problem of storage. Dense, factual and signposted (‘let me begin’,
        // ‘next’, ‘finally’), with the note/sentence-completion + multiple-choice
        // mix typical of Section 4, including one True/False/Not Given item.
        transcript: `Good morning. Today we're looking at solar power - specifically, how we turn sunlight directly into electricity, and what still holds the technology back.

Let me begin with the basic device, the photovoltaic cell, usually just called the solar cell. Most cells are made from thin slices of silicon, which is one of the most common materials in the Earth's crust. When particles of light, called photons, strike the silicon, they knock electrons loose, and the design of the cell forces those electrons to flow in one direction. That flow of electrons is, quite simply, an electric current.

A single cell produces only a tiny amount of power, so in practice many cells are wired together into a panel, and panels are combined into larger arrays.

Now, the advantages. The great attraction is that the fuel - sunlight - is free and effectively unlimited, and once a panel is installed it produces electricity with no moving parts, which means very little maintenance and no direct emissions.

But there are real limitations, and I want to be honest about these. The first is efficiency: a typical commercial panel converts only about twenty per cent of the sunlight that hits it into electricity, with the rest lost mostly as heat. The second, and more fundamental, is that the sun does not always shine. Output drops on cloudy days and falls to zero at night.

This brings us to the biggest challenge of all: storage. Because supply and demand rarely match, surplus daytime electricity has to be stored, and at present that mostly means batteries, which remain expensive. Solving storage cheaply is, in my view, the key to the whole future of solar. Next week, we'll examine wind power for comparison.`,
        questions: [
          {
            id: 'ls-026-s4-q31',
            type: 'gap',
            prompt:
              'The basic device that turns sunlight into electricity is the ____________ cell. Write ONE WORD.',
            acceptableAnswers: ['photovoltaic', 'solar'],
            explanation:
              'The speaker introduces ‘the photovoltaic cell, usually just called the solar cell.’ The answer is photovoltaic (solar accepted).',
          },
          {
            id: 'ls-026-s4-q32',
            type: 'gap',
            prompt: 'Most solar cells are made from thin slices of ____________. Write ONE WORD.',
            acceptableAnswers: ['silicon'],
            explanation:
              'The speaker says ‘Most cells are made from thin slices of silicon, which is one of the most common materials in the Earth’s crust.’ The answer is silicon.',
          },
          {
            id: 'ls-026-s4-q33',
            type: 'gap',
            prompt:
              'Particles of light, called ____________, strike the silicon and knock electrons loose. Write ONE WORD.',
            acceptableAnswers: ['photons', 'photon'],
            explanation:
              'The speaker says ‘When particles of light, called photons, strike the silicon, they knock electrons loose.’ The answer is photons.',
          },
          {
            id: 'ls-026-s4-q34',
            type: 'mcq',
            prompt: 'According to the lecture, what is an electric current?',
            options: [
              'The heat produced by the silicon',
              'The flow of electrons in one direction',
              'The light striking the panel',
              'The number of cells in a panel',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the cell forces the electrons ‘to flow in one direction. That flow of electrons is, quite simply, an electric current.’ Option B matches.',
          },
          {
            id: 'ls-026-s4-q35',
            type: 'gap',
            prompt:
              'Because one cell makes little power, many cells are wired together into a ____________. Write ONE WORD.',
            acceptableAnswers: ['panel'],
            explanation:
              'The speaker says ‘many cells are wired together into a panel, and panels are combined into larger arrays.’ The answer is panel.',
          },
          {
            id: 'ls-026-s4-q36',
            type: 'mcq',
            prompt: 'What does the speaker give as a key advantage of solar power?',
            options: [
              'Panels never need to be installed',
              'The fuel is free and the panels have no moving parts',
              'Panels work equally well at night',
              'It is the cheapest technology available',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the fuel ‘is free and effectively unlimited’ and that a panel ‘produces electricity with no moving parts.’ Option B matches.',
          },
          {
            id: 'ls-026-s4-q37',
            type: 'gap',
            prompt:
              'A typical commercial panel converts only about ____________ per cent of the sunlight into electricity. Write A NUMBER.',
            acceptableAnswers: ['20', 'twenty'],
            explanation:
              'The speaker says ‘a typical commercial panel converts only about twenty per cent of the sunlight that hits it into electricity.’ The answer is 20.',
          },
          {
            id: 'ls-026-s4-q38',
            type: 'tfng',
            prompt:
              'The speaker says that solar panels continue to produce the same amount of electricity at night as during the day.',
            answer: 'false',
            explanation:
              'The speaker says output ‘drops on cloudy days and falls to zero at night.’ The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-026-s4-q39',
            type: 'gap',
            prompt:
              'Surplus daytime electricity currently has to be stored mostly in ____________, which remain expensive. Write ONE WORD.',
            acceptableAnswers: ['batteries'],
            explanation:
              'The speaker says surplus electricity ‘has to be stored, and at present that mostly means batteries, which remain expensive.’ The answer is batteries.',
          },
          {
            id: 'ls-026-s4-q40',
            type: 'mcq',
            prompt:
              'What does the speaker consider the biggest challenge for the future of solar power?',
            options: [
              'Finding enough silicon',
              'Solving electricity storage cheaply',
              'Reducing the maintenance of panels',
              'Building larger arrays',
            ],
            correctIndex: 1,
            explanation:
              'The speaker calls storage ‘the biggest challenge of all’ and says ‘Solving storage cheaply is, in my view, the key to the whole future of solar.’ Option B matches.',
          },
        ],
      },
    ],
  },
]
