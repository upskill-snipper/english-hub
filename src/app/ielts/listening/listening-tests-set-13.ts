// ─── IELTS Academic Listening — practice test data (Set 13) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a phone call to
//     report a lost item for an insurance claim), assessed with form / note
//     completion + a multiple-choice item. A surname is spelled and a claim
//     reference is dictated, and one detail (the payout figure) depends on a
//     stated choice (the cover level on the policy).
//   • Section 2 — an everyday MONOLOGUE (here: a welcome talk to visitors at a
//     farmers' market), assessed with sentence completion + multiple choice,
//     carrying signpost language ("first", "next", "finally") that the
//     questions track in order.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor going
//     through the method for a chemistry experiment), assessed with multiple
//     choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: glaciers), assessed
//     with note/sentence completion + multiple choice.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_13: ListeningTest[] = [
  {
    id: 'ls-academic-13',
    title:
      'Practice Test 13 — Reporting a Lost Item, A Farmers’ Market, A Chemistry Experiment & Glaciers',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-13-s1',
        title: 'Section 1 — Reporting a lost item for an insurance claim',
        // ~285 words. Transactional dialogue (Section 1 style): a caller phoning
        // her insurer to report a lost camera and open a claim. A surname is
        // spelled and a claim reference is dictated; one detail (the payout
        // figure) depends on a stated choice (the cover level recorded on the
        // policy), mirroring the form/note-completion + multiple-choice mix of a
        // real Section 1.
        transcript: `MAN: Good morning, Westgate Insurance claims line, this is Ryan speaking. How can I help you?

WOMAN: Hello, I need to report a lost item and start a claim, please. I lost it yesterday.

MAN: I'm sorry to hear that. I can open the claim now. Could I start with your full name?

WOMAN: Yes, it's Helen Asquith. Asquith is spelled A-S-Q-U-I-T-H.

MAN: Thank you, Ms Asquith. And which item are you claiming for?

WOMAN: It's a camera. A digital camera — I left it on a train.

MAN: Right. Can you tell me roughly what it was worth?

WOMAN: I bought it last year for three hundred and forty pounds.

MAN: Noted. Now, your policy records standard cover, which means a single item is paid out at its current value rather than the original price, so that would be two hundred and ten pounds in this case.

WOMAN: I see — that's less than I'd hoped, but I understand.

MAN: I'll give you your claim reference now. Please write it down: it's J as in Juliet, then four seven two nine.

WOMAN: J four seven two nine. Got it.

MAN: To process the claim, we'll need two things from you. First, any proof of purchase — a receipt is ideal. And second, you must report the loss to the train company and get a reference from them too.

WOMAN: That's fine. How long will the claim take?

MAN: Once we have both documents, payment is usually made within ten working days, straight into your bank account.

WOMAN: Wonderful. Thank you so much for your help.

MAN: You're welcome. We'll be in touch by email.`,
        questions: [
          {
            id: 'ls-013-s1-q1',
            type: 'gap',
            prompt:
              'Complete the claim form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Asquith', 'asquith'],
            explanation:
              'The caller gives her name as “Helen Asquith” and spells the surname out: A-S-Q-U-I-T-H. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-013-s1-q2',
            type: 'gap',
            prompt: 'Item being claimed for: a digital ____________. Write ONE WORD.',
            acceptableAnswers: ['camera'],
            explanation:
              'She says, “It’s a camera. A digital camera — I left it on a train.” The lost item is a camera.',
          },
          {
            id: 'ls-013-s1-q3',
            type: 'gap',
            prompt: 'Original purchase price of the item: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['340', 'three hundred and forty'],
            explanation:
              'She states, “I bought it last year for three hundred and forty pounds.” The original price is 340 — numbers said as words still count, but writing the digits is safest.',
          },
          {
            id: 'ls-013-s1-q4',
            type: 'mcq',
            prompt: 'Why is the payout lower than the original purchase price?',
            options: [
              'Because the policy charges an excess on every claim',
              'Because standard cover pays the item’s current value, not the original price',
              'Because the item was lost rather than stolen',
              'Because the camera was bought more than a year ago',
            ],
            correctIndex: 1,
            explanation:
              'He explains the policy “records standard cover, which means a single item is paid out at its current value rather than the original price.” Option B matches; the distractors reuse plausible insurance words but none is the reason he gives.',
          },
          {
            id: 'ls-013-s1-q5',
            type: 'gap',
            prompt: 'Amount that will be paid out: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['210', 'two hundred and ten'],
            explanation:
              'Because the policy has standard cover (Q4), the camera is paid at its current value: “that would be two hundred and ten pounds in this case.” The payout is 210 — Section 1 often makes one figure depend on an earlier detail.',
          },
          {
            id: 'ls-013-s1-q6',
            type: 'gap',
            prompt:
              'Claim reference number: ____________. Write the reference exactly as you hear it.',
            acceptableAnswers: ['J4729', 'J 4729', 'j4729', 'j 4729'],
            explanation:
              'He dictates it as “J as in Juliet, then four seven two nine”, and she reads it back as “J four seven two nine”, giving J4729. Spacing is not penalised, but every character must be correct.',
          },
          {
            id: 'ls-013-s1-q7',
            type: 'gap',
            prompt:
              'To support the claim, the customer should send a proof of purchase — ideally a ____________. Write ONE WORD.',
            acceptableAnswers: ['receipt'],
            explanation:
              'He asks for “any proof of purchase — a receipt is ideal.” The specific example requested is a receipt.',
          },
          {
            id: 'ls-013-s1-q8',
            type: 'gap',
            prompt:
              'The customer must also report the loss to the ____________ company and get a reference. Write ONE WORD.',
            acceptableAnswers: ['train'],
            explanation:
              'He says she “must report the loss to the train company and get a reference from them too.” The answer is “train”.',
          },
          {
            id: 'ls-013-s1-q9',
            type: 'gap',
            prompt:
              'Once both documents are received, payment is usually made within ____________ working days. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'He says, “payment is usually made within ten working days, straight into your bank account.” The answer is 10.',
          },
          {
            id: 'ls-013-s1-q10',
            type: 'mcq',
            prompt: 'How will the insurer contact the customer about the claim?',
            options: ['By telephone', 'By email', 'By text message', 'By letter'],
            correctIndex: 1,
            explanation:
              'He ends the call with “We’ll be in touch by email.” Option B matches; the other contact methods are not mentioned.',
          },
        ],
      },
      {
        id: 'ls-academic-13-s2',
        title: 'Section 2 — A welcome talk at a farmers’ market',
        // ~265 words. Informational monologue (Section 2 style): a single speaker
        // welcoming shoppers to a weekly farmers' market. Uses sequencing/signpost
        // language ("to start", "next", "finally") that the questions follow in
        // order, with a sentence-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and welcome to Ashfield Farmers' Market. My name is Grace, and I'm the market manager. Before you start exploring, let me share a few things that will help you make the most of your visit.

To start with, a word about who sells here. Every stallholder must grow, bake, or make their goods within thirty miles of this town — that's our golden rule. So when you buy here, you really are buying local, and your money stays in the community.

Next, let me point you towards the layout. As you came in, you'll have noticed the fruit and vegetable stalls on your left. Straight ahead, beyond the flower stand, you'll find the bakery and the cheese counter, which are always the busiest, so I'd suggest visiting those early before the queues build up.

A quick note on payment. Most stalls now take cards, but a few of the smaller producers still prefer cash, so it's worth carrying a little with you. There's a cash machine just outside the main entrance if you need one.

I should also mention that we don't provide plastic bags any more. We're trying to cut down on waste, so please do bring your own bag, or you can buy a reusable cloth one from the information desk for a pound.

Finally, if you have children with you, there's a free face-painting tent at the far end, running until one o'clock. And every Saturday at eleven, one of our farmers gives a short cookery demonstration using market produce. That's all from me — please enjoy the market.`,
        questions: [
          {
            id: 'ls-013-s2-q11',
            type: 'mcq',
            prompt: 'What is the market’s “golden rule” for stallholders?',
            options: [
              'They must sell only organic produce',
              'They must grow, bake, or make their goods within thirty miles',
              'They must donate part of their profits to the community',
              'They must use only reusable packaging',
            ],
            correctIndex: 1,
            explanation:
              'She says, “Every stallholder must grow, bake, or make their goods within thirty miles of this town — that’s our golden rule.” Option B matches; the other ideas are not stated as the rule.',
          },
          {
            id: 'ls-013-s2-q12',
            type: 'gap',
            prompt:
              'Stallholders must produce their goods within ____________ miles of the town. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'The golden rule is that goods are made “within thirty miles of this town.” The answer is 30.',
          },
          {
            id: 'ls-013-s2-q13',
            type: 'gap',
            prompt:
              'As visitors enter, the fruit and vegetable stalls are on their ____________. Write ONE WORD.',
            acceptableAnswers: ['left'],
            explanation:
              'She says, “you’ll have noticed the fruit and vegetable stalls on your left.” The answer is “left”.',
          },
          {
            id: 'ls-013-s2-q14',
            type: 'mcq',
            prompt: 'Why does the speaker suggest visiting the bakery and cheese counter early?',
            options: [
              'They sell out of stock by mid-morning',
              'They are always the busiest, so queues build up later',
              'They are the furthest from the entrance',
              'They only accept cash before midday',
            ],
            correctIndex: 1,
            explanation:
              'She describes the bakery and cheese counter as “always the busiest, so I’d suggest visiting those early before the queues build up.” Option B matches the reason she gives.',
          },
          {
            id: 'ls-013-s2-q15',
            type: 'gap',
            prompt:
              'Some smaller producers still prefer ____________, so visitors should carry a little with them. Write ONE WORD.',
            acceptableAnswers: ['cash'],
            explanation:
              'She notes, “a few of the smaller producers still prefer cash, so it’s worth carrying a little with you.” The answer is “cash”.',
          },
          {
            id: 'ls-013-s2-q16',
            type: 'mcq',
            prompt: 'What does the speaker say about bags at the market?',
            options: [
              'Plastic bags are available at every stall',
              'No plastic bags are provided; visitors should bring their own or buy a cloth one',
              'Reusable bags are given away free at the entrance',
              'Bags can only be bought from the bakery',
            ],
            correctIndex: 1,
            explanation:
              'She says, “we don’t provide plastic bags any more … please do bring your own bag, or you can buy a reusable cloth one from the information desk for a pound.” Option B matches; the others contradict the talk.',
          },
          {
            id: 'ls-013-s2-q17',
            type: 'gap',
            prompt:
              'A reusable cloth bag can be bought from the information desk for ____________ pound. Write A NUMBER.',
            acceptableAnswers: ['1', 'one', 'a'],
            explanation:
              'She says shoppers “can buy a reusable cloth one from the information desk for a pound.” The price is one pound, so the answer is 1.',
          },
          {
            id: 'ls-013-s2-q18',
            type: 'gap',
            prompt:
              'For children, there is a free ____________ tent at the far end until one o’clock. Write TWO WORDS.',
            acceptableAnswers: ['face-painting', 'face painting'],
            explanation:
              'She says, “there’s a free face-painting tent at the far end, running until one o’clock.” The answer is “face-painting” (the spaced form is accepted).',
          },
          {
            id: 'ls-013-s2-q19',
            type: 'gap',
            prompt:
              'Every Saturday at eleven, a farmer gives a short cookery ____________ using market produce. Write ONE WORD.',
            acceptableAnswers: ['demonstration', 'demo'],
            explanation:
              'She mentions, “every Saturday at eleven, one of our farmers gives a short cookery demonstration using market produce.” The answer is “demonstration”.',
          },
          {
            id: 'ls-013-s2-q20',
            type: 'tfng',
            prompt: 'The speaker says there is a cash machine just outside the main entrance.',
            answer: 'true',
            explanation:
              'She states, “There’s a cash machine just outside the main entrance if you need one.” The statement matches the audio exactly, so it is True.',
          },
        ],
      },
      {
        id: 'ls-academic-13-s3',
        title: 'Section 3 — Planning a chemistry experiment',
        // ~290 words. Academic discussion (Section 3 style): two students and a
        // tutor going through the method for a titration experiment before they
        // run it. Assessed with multiple choice + completion, with opinions and
        // decisions signalled by discussion markers ("I think", "we decided",
        // "make sure").
        transcript: `TUTOR: Right, Priya and Sam — let's go through your plan for the titration before you start in the lab. What exactly are you measuring?

PRIYA: We're finding the concentration of an unknown acid by reacting it with sodium hydroxide of a known concentration.

TUTOR: Good. And which indicator have you chosen?

SAM: We were going to use litmus at first, but we decided on phenolphthalein instead, because the colour change at the end point is much sharper.

TUTOR: Sensible choice. Now, a common mistake — how will you make sure your readings are accurate?

PRIYA: We'll rinse the burette with the acid before we fill it, so any water left inside doesn't dilute the solution.

TUTOR: Exactly right. What about the conical flask?

SAM: We just rinse that one with distilled water. The volume in the flask doesn't affect the result, so a little water there is fine.

TUTOR: Correct. Now, you mustn't rely on a single reading. How many titrations are you planning?

PRIYA: We'll do one rough run first to find the approximate volume, and then three accurate ones, and take an average of those.

TUTOR: Good. And remember, the readings should agree within nought point one of a millilitre, or you repeat them. One more thing — safety. What are you wearing?

SAM: Goggles, obviously, and a lab coat. The sodium hydroxide is corrosive.

TUTOR: Quite. If any gets on your skin, rinse it with plenty of water straight away and tell me. Finally, when you write this up, don't just list the numbers — explain any sources of error.

PRIYA: We will. Mainly judging the exact moment of the colour change.

TUTOR: Precisely. That's the hardest part. Off you go.`,
        questions: [
          {
            id: 'ls-013-s3-q21',
            type: 'gap',
            prompt:
              'The students are finding the concentration of an unknown ____________ by reacting it with sodium hydroxide. Write ONE WORD.',
            acceptableAnswers: ['acid'],
            explanation:
              'Priya says, “We’re finding the concentration of an unknown acid by reacting it with sodium hydroxide of a known concentration.” The answer is “acid”.',
          },
          {
            id: 'ls-013-s3-q22',
            type: 'mcq',
            prompt: 'Which indicator did the students finally choose, and why?',
            options: [
              'Litmus, because it is cheaper to use',
              'Phenolphthalein, because the colour change at the end point is sharper',
              'Litmus, because it is safer to handle',
              'Phenolphthalein, because it works with any acid',
            ],
            correctIndex: 1,
            explanation:
              'Sam says, “We were going to use litmus at first, but we decided on phenolphthalein instead, because the colour change at the end point is much sharper.” Litmus is the rejected first idea.',
          },
          {
            id: 'ls-013-s3-q23',
            type: 'gap',
            prompt:
              'To avoid diluting the solution, the students will rinse the ____________ with the acid before filling it. Write ONE WORD.',
            acceptableAnswers: ['burette', 'buret'],
            explanation:
              'Priya says, “We’ll rinse the burette with the acid before we fill it, so any water left inside doesn’t dilute the solution.” The answer is “burette”.',
          },
          {
            id: 'ls-013-s3-q24',
            type: 'mcq',
            prompt: 'Why is it acceptable to leave a little distilled water in the conical flask?',
            options: [
              'Because distilled water reacts with the indicator',
              'Because the volume in the flask does not affect the result',
              'Because the flask is rinsed again afterwards',
              'Because the water speeds up the reaction',
            ],
            correctIndex: 1,
            explanation:
              'Sam explains, “The volume in the flask doesn’t affect the result, so a little water there is fine.” Option B matches the reasoning.',
          },
          {
            id: 'ls-013-s3-q25',
            type: 'gap',
            prompt:
              'After one rough run, the students will do ____________ accurate titrations and take an average. Write A NUMBER.',
            acceptableAnswers: ['3', 'three'],
            explanation:
              'Priya says, “We’ll do one rough run first … and then three accurate ones, and take an average of those.” The answer is 3.',
          },
          {
            id: 'ls-013-s3-q26',
            type: 'gap',
            prompt:
              'The accurate readings should agree within ____________ of a millilitre, or be repeated. Write A NUMBER.',
            acceptableAnswers: ['0.1', '.1', 'nought point one', 'point one', '0·1'],
            explanation:
              'The tutor says, “the readings should agree within nought point one of a millilitre, or you repeat them.” Nought point one is written 0.1.',
          },
          {
            id: 'ls-013-s3-q27',
            type: 'mcq',
            prompt: 'What safety equipment do the students confirm they are wearing?',
            options: [
              'Gloves and a face mask',
              'Goggles and a lab coat',
              'A lab coat only',
              'Goggles and gloves',
            ],
            correctIndex: 1,
            explanation:
              'Sam says, “Goggles, obviously, and a lab coat. The sodium hydroxide is corrosive.” Option B matches the items named.',
          },
          {
            id: 'ls-013-s3-q28',
            type: 'gap',
            prompt:
              'If sodium hydroxide gets on the skin, the student should rinse it with plenty of ____________ straight away. Write ONE WORD.',
            acceptableAnswers: ['water'],
            explanation:
              'The tutor advises, “If any gets on your skin, rinse it with plenty of water straight away and tell me.” The answer is “water”.',
          },
          {
            id: 'ls-013-s3-q29',
            type: 'mcq',
            prompt: 'What does the tutor want the students to include in their write-up?',
            options: [
              'A diagram of the apparatus',
              'An explanation of any sources of error',
              'A comparison with other groups’ results',
              'A list of every reading only',
            ],
            correctIndex: 1,
            explanation:
              'The tutor says, “when you write this up, don’t just list the numbers — explain any sources of error.” Option B matches; listing the numbers alone is what he tells them NOT to do.',
          },
          {
            id: 'ls-013-s3-q30',
            type: 'gap',
            prompt:
              'Priya says the main source of error is judging the exact moment of the ____________ change. Write TWO WORDS.',
            acceptableAnswers: ['colour change', 'color change'],
            explanation:
              'Priya identifies the main error as “judging the exact moment of the colour change,” which the tutor calls “the hardest part.” The answer is “colour change”.',
          },
        ],
      },
      {
        id: 'ls-academic-13-s4',
        title: 'Section 4 — A lecture on glaciers',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // lecturer presenting on glaciers — how they form, how they move, the
        // landforms they create, and why they are studied today. Densely factual,
        // with note/sentence completion + multiple choice. Signpost phrases
        // ("firstly", "another", "finally") help the listener track the structure.
        transcript: `Good morning. In today's lecture we'll turn to glaciers — vast, slow-moving rivers of ice that have shaped much of the landscape we live in. I'll look at how they form, how they move, the landforms they leave behind, and why scientists study them so closely today.

Let's begin with how a glacier is born. It starts not with ice but with snow. Where more snow falls each winter than melts in summer, layers build up year after year. The weight of the upper layers gradually compresses the snow beneath, squeezing out the air until, after many decades, it turns into dense glacial ice. So the key condition is simple: accumulation must exceed melting.

Next, how do glaciers move? Although they appear motionless, glaciers flow steadily downhill under their own weight. There are two mechanisms. The first is internal deformation, where the ice itself slowly bends and slides. The second, and often the faster, is basal sliding, where a thin film of meltwater at the base lets the whole glacier slip over the bedrock. Most glaciers advance only a few metres a year, though a few surge much more quickly.

Now, the landforms. As a glacier moves, it acts like a giant sheet of sandpaper, scraping rock from the valley floor and sides. This carves the steep, U-shaped valleys that are so characteristic of glaciated regions, quite unlike the V-shaped valleys cut by rivers. When the ice finally melts, it dumps the rock and debris it was carrying in ridges called moraines.

Finally, why study them? Glaciers are sensitive indicators of climate. By measuring how far they have retreated, scientists can track warming with great precision — which is the theme we'll develop next week.`,
        questions: [
          {
            id: 'ls-013-s4-q31',
            type: 'mcq',
            prompt: 'According to the lecturer, what is the key condition for a glacier to form?',
            options: [
              'The temperature must stay below freezing all year',
              'The amount of snow that accumulates must exceed the amount that melts',
              'The ground beneath must be permanently frozen',
              'Heavy rainfall must fall throughout the winter',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer states, “the key condition is simple: accumulation must exceed melting.” Option B matches; the other conditions are not given as the essential one.',
          },
          {
            id: 'ls-013-s4-q32',
            type: 'gap',
            prompt:
              'A glacier starts not with ice but with ____________, which builds up year after year. Write ONE WORD.',
            acceptableAnswers: ['snow'],
            explanation:
              'The lecturer says a glacier “starts not with ice but with snow … layers build up year after year.” The answer is “snow”.',
          },
          {
            id: 'ls-013-s4-q33',
            type: 'gap',
            prompt:
              'The weight of the upper layers compresses the snow and squeezes out the ____________. Write ONE WORD.',
            acceptableAnswers: ['air'],
            explanation:
              'The lecturer explains the weight “gradually compresses the snow beneath, squeezing out the air until … it turns into dense glacial ice.” The answer is “air”.',
          },
          {
            id: 'ls-013-s4-q34',
            type: 'mcq',
            prompt:
              'Which of the two mechanisms of glacier movement is often the faster, according to the lecturer?',
            options: [
              'Internal deformation, as the ice bends and slides',
              'Basal sliding, where meltwater lets the glacier slip over the bedrock',
              'Surging caused by earthquakes',
              'Wind pushing the surface ice downhill',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer names two mechanisms and says the second, “basal sliding, where a thin film of meltwater at the base lets the whole glacier slip over the bedrock,” is “often the faster.” Option B matches.',
          },
          {
            id: 'ls-013-s4-q35',
            type: 'gap',
            prompt:
              'In basal sliding, a thin film of ____________ at the base lets the glacier slip over the bedrock. Write ONE WORD.',
            acceptableAnswers: ['meltwater', 'melt-water', 'water'],
            explanation:
              'The lecturer describes “a thin film of meltwater at the base” enabling basal sliding. The answer is “meltwater”.',
          },
          {
            id: 'ls-013-s4-q36',
            type: 'gap',
            prompt: 'Most glaciers advance only a few ____________ a year. Write ONE WORD.',
            acceptableAnswers: ['metres', 'meters'],
            explanation:
              'The lecturer says, “Most glaciers advance only a few metres a year, though a few surge much more quickly.” The answer is “metres” (the American spelling “meters” is accepted).',
          },
          {
            id: 'ls-013-s4-q37',
            type: 'gap',
            prompt:
              'Glaciers carve valleys with a characteristic ____________ shape, unlike the V-shaped valleys cut by rivers. Write ONE LETTER.',
            acceptableAnswers: ['U', 'u', 'U-shaped', 'u-shaped'],
            explanation:
              'The lecturer says glaciers carve “the steep, U-shaped valleys … quite unlike the V-shaped valleys cut by rivers.” The shape is U.',
          },
          {
            id: 'ls-013-s4-q38',
            type: 'gap',
            prompt:
              'When the ice melts, it dumps the rock and debris it carried in ridges called ____________. Write ONE WORD.',
            acceptableAnswers: ['moraines', 'moraine'],
            explanation:
              'The lecturer says, “When the ice finally melts, it dumps the rock and debris it was carrying in ridges called moraines.” The answer is “moraines”.',
          },
          {
            id: 'ls-013-s4-q39',
            type: 'tfng',
            prompt: 'The lecturer says glaciers are completely motionless.',
            answer: 'false',
            explanation:
              'The lecturer says glaciers only “appear motionless” but in fact “flow steadily downhill under their own weight.” The statement contradicts the audio, so it is False.',
          },
          {
            id: 'ls-013-s4-q40',
            type: 'mcq',
            prompt: 'Why does the lecturer say scientists study glaciers closely?',
            options: [
              'Because glaciers are a major source of drinking water',
              'Because measuring their retreat lets scientists track climate warming precisely',
              'Because glaciers reveal the age of the surrounding rock',
              'Because glaciers contain trapped prehistoric organisms',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer concludes that glaciers “are sensitive indicators of climate. By measuring how far they have retreated, scientists can track warming with great precision.” Option B matches; the other uses are not mentioned.',
          },
        ],
      },
    ],
  },
]
