// ─── IELTS Academic Listening — practice test data (Set 19) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 questions, 10 per section) that mirror the real IELTS Listening paper,
// with topics deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a prospective
//     tenant phoning a letting/rental agency about a flat), assessed with form /
//     note completion + multiple choice. A surname is spelled and a mobile
//     number is dictated, and one detail (the deposit) depends on a stated
//     choice (the monthly rent), so the figures stay internally consistent.
//   • Section 2 — an everyday MONOLOGUE (here: a talk introducing a city's
//     recycling & waste scheme — which bin takes what, collection days, drop-off
//     points), assessed with a MATCHING block (items → bins) + sentence
//     completion + multiple choice.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor
//     planning a business-studies group project — topic, roles, sources,
//     deadline), assessed with multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: how coffee is grown and
//     processed, from climate and cultivation through harvesting, drying and
//     roasting), assessed with note/sentence completion + multiple choice,
//     including one True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched
//                  case-insensitively and trimmed by the marker. The official
//                  word-limit instruction lives in the prompt.
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'tfng'     → True / False / Not Given.
//   • 'matching' → each item scores ONE mark; `item.answer` is an option `key`.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_19: ListeningTest[] = [
  {
    id: 'ls-academic-019',
    title:
      'Practice Test 19 — Enquiring About a Flat Through a Letting Agency, A City Recycling & Waste Scheme, Planning a Business-Studies Group Project & How Coffee Is Grown and Processed',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-019-s1',
        title: 'Section 1 — Enquiring about a flat through a letting agency',
        // ~300 words. Transactional dialogue (Section 1 style): a prospective tenant
        // phoning a letting/rental agency about a flat. A surname is spelled and a
        // mobile number is dictated; one figure (the deposit, one month's rent)
        // depends on a stated choice (the monthly rent), so the price and total stay
        // internally consistent. Form/note-completion + multiple-choice mix.
        transcript: `WOMAN: Good afternoon, Bridgford Lettings, Hannah speaking. How can I help?

MAN: Hi. I saw a one-bedroom flat advertised on your website, on Maple Road, and I'd like to ask a few questions about it.

WOMAN: Of course. That one's still available. Let me take a few details first. Could I have your name?

MAN: Yes, it's Peter Crowley. Crowley is spelled C-R-O-W-L-E-Y.

WOMAN: Thank you. And the best number to reach you on?

MAN: My mobile — oh-seven-nine-three-three, five-double-one, four-eight-two.

WOMAN: Got that. Now, the Maple Road flat. The rent is six hundred and fifty pounds a month, and that includes water, but not gas or electricity.

MAN: That's within my budget. What about a deposit?

WOMAN: The deposit is the equivalent of one month's rent, so the same figure again, held in a government-backed scheme and returned when you leave.

MAN: Understood. When would it be available to move into?

WOMAN: The current tenant leaves at the end of June, so the flat is free from the first of July.

MAN: That timing works well for me. Could I arrange to see it?

WOMAN: Certainly. We do viewings on weekdays. Would Wednesday at five-thirty suit you?

MAN: Wednesday's fine, thanks.

WOMAN: Lovely. Before a viewing, we do ask everyone to fill in a short application form — it's mainly so we can run a reference check with your current employer.

MAN: No problem. Where do I find the form?

WOMAN: I'll email you the link today. Oh, and one thing people often ask — the flat comes furnished, so you won't need to bring any large items of your own.

MAN: That's very helpful. Thank you, Hannah.`,
        questions: [
          {
            id: 'ls-019-s1-q1',
            type: 'gap',
            prompt:
              'Complete the enquiry form. Write ONE WORD for the answer.\n\nApplicant surname: ____________',
            acceptableAnswers: ['Crowley', 'crowley'],
            explanation:
              'The caller gives his name as “Peter Crowley” and spells the surname: C-R-O-W-L-E-Y. In Section 1, surnames are almost always spelled aloud — write them down letter by letter.',
          },
          {
            id: 'ls-019-s1-q2',
            type: 'gap',
            prompt: 'Contact mobile number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: [
              '07933 511482',
              '0793351 1482',
              '07933511482',
              '07933 511 482',
              '07933 51 1482',
            ],
            explanation:
              'He dictates “oh-seven-nine-three-three, five-double-one, four-eight-two” — that is 07933 511482. “Double one” means two 1s and “oh” is zero; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-019-s1-q3',
            type: 'gap',
            prompt:
              'The advertised flat is on ____________ Road. Write ONE WORD (the name of the road).',
            acceptableAnswers: ['Maple', 'maple'],
            explanation:
              'He says he saw “a one-bedroom flat advertised on your website, on Maple Road.” The answer is “Maple”.',
          },
          {
            id: 'ls-019-s1-q4',
            type: 'gap',
            prompt: 'The monthly rent is £____________. Write A NUMBER.',
            acceptableAnswers: ['650', 'six hundred and fifty'],
            explanation:
              'The agent says, “The rent is six hundred and fifty pounds a month.” The answer is 650.',
          },
          {
            id: 'ls-019-s1-q5',
            type: 'mcq',
            prompt: 'Which utility is included in the rent?',
            options: ['Gas', 'Electricity', 'Water', 'Internet'],
            correctIndex: 2,
            explanation:
              'The agent says the rent “includes water, but not gas or electricity.” Option C matches; gas and electricity are explicitly excluded, and internet is never mentioned.',
          },
          {
            id: 'ls-019-s1-q6',
            type: 'mcq',
            prompt: 'How much deposit will the tenant need to pay?',
            options: [
              'Three hundred and twenty-five pounds, half a month’s rent',
              'Six hundred and fifty pounds, the equivalent of one month’s rent',
              'One thousand three hundred pounds, two months’ rent',
              'No deposit is required',
            ],
            correctIndex: 1,
            explanation:
              'The agent says the deposit is “the equivalent of one month’s rent, so the same figure again.” As the rent is £650 (Q4), the deposit is £650. The distractors apply the wrong multiple of the stated rent.',
          },
          {
            id: 'ls-019-s1-q7',
            type: 'gap',
            prompt:
              'The flat will be available to move into from the first of ____________. Write ONE WORD (a month).',
            acceptableAnswers: ['July', 'july'],
            explanation:
              'The agent says the current tenant leaves at the end of June, “so the flat is free from the first of July.” The answer is “July” (June is when the tenant leaves, a distractor).',
          },
          {
            id: 'ls-019-s1-q8',
            type: 'gap',
            prompt:
              'A viewing has been arranged for ____________ at five-thirty. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Wednesday', 'wednesday'],
            explanation:
              'The agent asks, “Would Wednesday at five-thirty suit you?” and the caller agrees. The answer is “Wednesday”.',
          },
          {
            id: 'ls-019-s1-q9',
            type: 'gap',
            prompt:
              'Before a viewing, every applicant must complete a short application ____________. Write ONE WORD.',
            acceptableAnswers: ['form'],
            explanation:
              'The agent says, “we do ask everyone to fill in a short application form.” The answer is “form”.',
          },
          {
            id: 'ls-019-s1-q10',
            type: 'mcq',
            prompt: 'Why does the agency ask applicants to complete the form?',
            options: [
              'To take a holding payment for the flat',
              'To run a reference check with the applicant’s employer',
              'To confirm the applicant’s identity at the bank',
              'To arrange for the furniture to be removed',
            ],
            correctIndex: 1,
            explanation:
              'The agent says the form is “mainly so we can run a reference check with your current employer.” Option B matches; no payment, bank check or furniture removal is mentioned (the flat in fact comes furnished).',
          },
        ],
      },
      {
        id: 'ls-academic-019-s2',
        title: 'Section 2 — A city recycling and waste scheme',
        // ~300 words. Informational monologue (Section 2 style): a single speaker
        // introduces a city's household recycling and waste scheme — which bin takes
        // what, collection days and drop-off points. A MATCHING block (items → bins,
        // 5 marks) is followed by sentence-completion + multiple-choice items, so the
        // section totals 10 marks. The bin allocations are each stated directly.
        transcript: `Hello, and thank you for coming to this short session on our city's new household recycling and waste scheme. I'm Marcus from the council's environment team, and I'll explain which bin takes what, when each one is collected, and where you can take the things that don't go in any bin.

Let me start with the colours, because we've kept it simple — there are three wheelie bins. The green bin is for general rubbish, the things that can't be recycled. The blue bin is your main recycling bin, and that's where paper, cardboard and clean tins go. The brown bin is purely for garden waste — grass cuttings, leaves and hedge trimmings.

Now, a few items people always ask about. Glass bottles do not go in the blue bin, despite being recyclable — please put glass in the green bin for now, as our sorting machines can't yet handle it. Food scraps, on the other hand, should go in the brown bin, together with the garden waste; they break down well together. And plastic bottles go in the blue recycling bin with the paper and tins.

As for collection days, the green and blue bins are collected on alternating weeks, always on a Tuesday. The brown garden bin, though, is collected fortnightly on a Friday.

For anything that doesn't fit our bins — old furniture, electrical goods, paint tins — we have a recycling centre on Carlton Way, open seven days a week. And finally, for clothing and shoes, there are textile banks in most supermarket car parks. Please don't put textiles in any of your home bins. Thank you, and please pick up a leaflet on your way out.`,
        questions: [
          {
            id: 'ls-019-s2-q11',
            type: 'matching',
            variant: 'features',
            prompt:
              'Which bin should each item go in? Choose the correct bin for each item from the list A–C. You may use any letter more than once.',
            options: [
              { key: 'A', label: 'the green bin' },
              { key: 'B', label: 'the blue bin' },
              { key: 'C', label: 'the brown bin' },
            ],
            items: [
              { id: 'ls-019-s2-q11-i1', text: 'Cardboard', answer: 'B' },
              { id: 'ls-019-s2-q11-i2', text: 'Glass bottles', answer: 'A' },
              { id: 'ls-019-s2-q11-i3', text: 'Grass cuttings', answer: 'C' },
              { id: 'ls-019-s2-q11-i4', text: 'Food scraps', answer: 'C' },
              { id: 'ls-019-s2-q11-i5', text: 'Plastic bottles', answer: 'B' },
            ],
            explanation:
              'The speaker assigns each item directly: “paper, cardboard and clean tins” go in the blue bin; glass goes “in the green bin for now” as the machines “can’t yet handle it”; the brown bin is for “grass cuttings, leaves and hedge trimmings”; “food scraps … should go in the brown bin”; and “plastic bottles go in the blue recycling bin.”',
          },
          {
            id: 'ls-019-s2-q16',
            type: 'mcq',
            prompt: 'What is the green bin used for?',
            options: [
              'Recyclable paper and tins',
              'Garden waste only',
              'General rubbish that cannot be recycled',
              'Clothing and shoes',
            ],
            correctIndex: 2,
            explanation:
              'The speaker says, “The green bin is for general rubbish, the things that can’t be recycled.” Option C matches; paper and tins go in the blue bin, garden waste in the brown.',
          },
          {
            id: 'ls-019-s2-q17',
            type: 'gap',
            prompt:
              'The green and blue bins are collected on alternating weeks, always on a ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Tuesday', 'tuesday'],
            explanation:
              'The speaker says “the green and blue bins are collected on alternating weeks, always on a Tuesday.” The answer is “Tuesday”.',
          },
          {
            id: 'ls-019-s2-q18',
            type: 'gap',
            prompt:
              'The brown garden bin is collected fortnightly on a ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Friday', 'friday'],
            explanation:
              'The speaker says “The brown garden bin, though, is collected fortnightly on a Friday.” The answer is “Friday” (Tuesday is for the green and blue bins, a distractor).',
          },
          {
            id: 'ls-019-s2-q19',
            type: 'gap',
            prompt:
              'Large or hazardous items can be taken to the recycling centre on ____________ Way. Write ONE WORD (the name of the road).',
            acceptableAnswers: ['Carlton', 'carlton'],
            explanation:
              'The speaker says “we have a recycling centre on Carlton Way, open seven days a week.” The answer is “Carlton”.',
          },
          {
            id: 'ls-019-s2-q20',
            type: 'mcq',
            prompt: 'Where should residents take old clothing and shoes?',
            options: [
              'In the green home bin',
              'To the recycling centre on Carlton Way',
              'To textile banks in supermarket car parks',
              'To the council environment office',
            ],
            correctIndex: 2,
            explanation:
              'The speaker says “for clothing and shoes, there are textile banks in most supermarket car parks” and adds, “Please don’t put textiles in any of your home bins.” Option C matches.',
          },
        ],
      },
      {
        id: 'ls-academic-019-s3',
        title: 'Section 3 — Tutorial: planning a business-studies group project',
        // ~300 words. Academic discussion (Section 3 style): two students (Sophie and
        // Ben) and a tutor (Dr Akande) plan a business-studies group project. They
        // settle on the topic, divide the roles, agree their sources and confirm the
        // deadline, so the questions mix multiple choice (decisions) with completion
        // (concrete details). Numbering runs q21–q30 for ten marks.
        transcript: `DR AKANDE: So, Sophie and Ben, let's plan your business-studies group project. Have you chosen a topic?

SOPHIE: We have. We want to look at how a local independent bookshop has survived against the online retailers — what's kept it in business.

DR AKANDE: A nice case study. Specific, and you can actually visit it. Will it be just description, or are you arguing something?

BEN: We're arguing that its survival comes down to customer loyalty rather than price — it can't compete on price, so it competes on service and community events.

DR AKANDE: Good — a clear thesis. Now, how will you split the work between you?

SOPHIE: I'll do the interview with the owner and write up the findings. Ben is stronger with numbers, so he'll handle the financial side — the sales figures and so on.

DR AKANDE: That plays to your strengths. What sources are you drawing on?

BEN: Three, really. The interview with the owner, the shop's own sales data, which she's agreed to share, and some published industry reports on high-street retail.

DR AKANDE: Make sure you reference those industry reports properly. A common mistake is quoting a statistic with no source. Now — the deadline. You know the report is due in week ten?

SOPHIE: Yes. We've set ourselves an internal deadline of the end of week eight, to leave time for editing.

DR AKANDE: Very sensible — always build in a buffer. One last thing: keep the report itself focused. The word limit is three thousand words, and it's easy to go over.

BEN: We'll watch that. Thanks, Dr Akande.`,
        questions: [
          {
            id: 'ls-019-s3-q21',
            type: 'mcq',
            prompt: 'What is the topic of the students’ group project?',
            options: [
              'How online retailers have grown over the past decade',
              'How a local independent bookshop has survived against online retailers',
              'Why high-street shops are closing nationwide',
              'How to set up an online bookselling business',
            ],
            correctIndex: 1,
            explanation:
              'Sophie says they want to look at “how a local independent bookshop has survived against the online retailers — what’s kept it in business.” Option B matches the chosen topic.',
          },
          {
            id: 'ls-019-s3-q22',
            type: 'mcq',
            prompt: 'What is the students’ central argument?',
            options: [
              'The shop survives mainly because its prices are lower than online',
              'The shop survives because of customer loyalty rather than price',
              'The shop will have to close within a year',
              'The shop should move its business entirely online',
            ],
            correctIndex: 1,
            explanation:
              'Ben says “its survival comes down to customer loyalty rather than price — it can’t compete on price, so it competes on service and community events.” Option B matches; the shop explicitly cannot compete on price.',
          },
          {
            id: 'ls-019-s3-q23',
            type: 'gap',
            prompt:
              'Sophie will carry out the ____________ with the owner and write up the findings. Write ONE WORD.',
            acceptableAnswers: ['interview'],
            explanation:
              'Sophie says, “I’ll do the interview with the owner and write up the findings.” The answer is “interview”.',
          },
          {
            id: 'ls-019-s3-q24',
            type: 'mcq',
            prompt: 'Why will Ben handle the financial side of the project?',
            options: [
              'Because Sophie refused to do it',
              'Because he is stronger with numbers',
              'Because the tutor assigned it to him',
              'Because he owns the shop’s accounts',
            ],
            correctIndex: 1,
            explanation:
              'Sophie says, “Ben is stronger with numbers, so he’ll handle the financial side — the sales figures and so on.” Option B matches the stated reason.',
          },
          {
            id: 'ls-019-s3-q25',
            type: 'gap',
            prompt:
              'One of the three sources is the shop’s own sales ____________, which the owner has agreed to share. Write ONE WORD.',
            acceptableAnswers: ['data'],
            explanation:
              'Ben lists “the shop’s own sales data, which she’s agreed to share.” The answer is “data”.',
          },
          {
            id: 'ls-019-s3-q26',
            type: 'gap',
            prompt:
              'A third source is some published ____________ reports on high-street retail. Write ONE WORD.',
            acceptableAnswers: ['industry'],
            explanation:
              'Ben mentions “some published industry reports on high-street retail.” The answer is “industry”.',
          },
          {
            id: 'ls-019-s3-q27',
            type: 'mcq',
            prompt: 'What does the tutor warn the students about regarding their sources?',
            options: [
              'Using too many sources at once',
              'Quoting a statistic with no source',
              'Relying only on the interview',
              'Using sources that are too old',
            ],
            correctIndex: 1,
            explanation:
              'Dr Akande says, “A common mistake is quoting a statistic with no source.” Option B matches the warning.',
          },
          {
            id: 'ls-019-s3-q28',
            type: 'gap',
            prompt: 'The final report is due in week ____________. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'Dr Akande says, “the report is due in week ten.” The answer is 10 (week eight is the students’ own internal deadline, a distractor).',
          },
          {
            id: 'ls-019-s3-q29',
            type: 'gap',
            prompt:
              'The students have set an internal deadline of the end of week ____________ to leave time for editing. Write A NUMBER.',
            acceptableAnswers: ['8', 'eight'],
            explanation:
              'Sophie says, “We’ve set ourselves an internal deadline of the end of week eight, to leave time for editing.” The answer is 8.',
          },
          {
            id: 'ls-019-s3-q30',
            type: 'gap',
            prompt: 'The word limit for the report is ____________ words. Write A NUMBER.',
            acceptableAnswers: ['3000', 'three thousand', '3,000'],
            explanation:
              'Dr Akande says, “The word limit is three thousand words.” The answer is 3000.',
          },
        ],
      },
      {
        id: 'ls-academic-019-s4',
        title: 'Section 4 — Lecture: how coffee is grown and processed',
        // ~315 words. Academic lecture / monologue (Section 4 style): a single speaker
        // delivers a structured lecture on how coffee is grown and processed, moving
        // from climate and cultivation through harvesting, drying and roasting. Dense,
        // factual and signposted ("let me begin", "next", "finally"), with the
        // note/sentence-completion + multiple-choice mix typical of Section 4,
        // including one True/False/Not Given item. Numbering runs q31–q40.
        transcript: `Good morning. Today I'm going to take you through the journey of coffee — from the plant growing on a hillside to the roasted beans you brew at home. It's a longer and more delicate process than most people realise.

Let me begin with where coffee grows. The plant is fussy about climate. It thrives in a band around the equator often called the "coffee belt", and it needs a frost-free environment — even a single frost can destroy a crop. The finest beans, particularly the Arabica variety, are grown at high altitude, because cooler mountain temperatures slow the ripening and concentrate the flavour.

Next, cultivation. Coffee grows on a shrub, and it takes a surprisingly long time to become productive — a new plant yields no usable fruit for the first three or four years. The fruit itself is a small red berry, commonly known as a "cherry", and inside each cherry are usually two seeds, which are the coffee beans.

Now, harvesting. On the best estates the cherries are picked by hand, because they don't all ripen at once, and only the ripe red ones should be taken. Machine picking is cheaper and faster, but it strips everything from the branch, including unripe fruit.

After picking, the beans must be dried. In the traditional method, the cherries are simply spread out in the sun and turned regularly, which can take several weeks.

Finally, roasting — and this is where the flavour is really created. The green beans are heated, and as the temperature climbs the beans darken and the familiar aroma develops. It's worth stressing that roasting is a skilled job: a few seconds too long can turn a delicate batch bitter. Next week we'll follow the beans from the roastery to the cup.`,
        questions: [
          {
            id: 'ls-019-s4-q31',
            type: 'gap',
            prompt:
              'Coffee thrives in a band around the equator often called the "coffee ____________". Write ONE WORD.',
            acceptableAnswers: ['belt'],
            explanation:
              'The speaker says coffee “thrives in a band around the equator often called the ‘coffee belt’.” The answer is “belt”.',
          },
          {
            id: 'ls-019-s4-q32',
            type: 'mcq',
            prompt: 'Why are the finest beans grown at high altitude?',
            options: [
              'Because the soil is richer on mountains',
              'Because cooler temperatures slow ripening and concentrate the flavour',
              'Because there is more rainfall at altitude',
              'Because the plants grow taller there',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the finest beans “are grown at high altitude, because cooler mountain temperatures slow the ripening and concentrate the flavour.” Option B matches.',
          },
          {
            id: 'ls-019-s4-q33',
            type: 'tfng',
            prompt: 'According to the speaker, a single frost can destroy a coffee crop.',
            answer: 'true',
            explanation:
              'The speaker says coffee “needs a frost-free environment — even a single frost can destroy a crop.” The statement matches the lecture, so it is True.',
          },
          {
            id: 'ls-019-s4-q34',
            type: 'mcq',
            prompt: 'How long before a new coffee plant produces usable fruit?',
            options: [
              'Within the first year',
              'After about three or four years',
              'After ten years',
              'It produces fruit immediately',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says “a new plant yields no usable fruit for the first three or four years.” Option B matches.',
          },
          {
            id: 'ls-019-s4-q35',
            type: 'gap',
            prompt:
              'The coffee fruit is a small red berry commonly known as a ____________. Write ONE WORD.',
            acceptableAnswers: ['cherry'],
            explanation:
              'The speaker says “The fruit itself is a small red berry, commonly known as a ‘cherry’.” The answer is “cherry”.',
          },
          {
            id: 'ls-019-s4-q36',
            type: 'gap',
            prompt:
              'Inside each cherry there are usually ____________ seeds, which are the coffee beans. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'The speaker says “inside each cherry are usually two seeds, which are the coffee beans.” The answer is 2.',
          },
          {
            id: 'ls-019-s4-q37',
            type: 'mcq',
            prompt: 'Why are the cherries on the best estates picked by hand?',
            options: [
              'Because hand picking is cheaper than using machines',
              'Because the cherries do not all ripen at once, so only ripe ones are taken',
              'Because machines are not available in those regions',
              'Because hand picking dries the beans at the same time',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the cherries “are picked by hand, because they don’t all ripen at once, and only the ripe red ones should be taken,” whereas machine picking “strips everything from the branch, including unripe fruit.” Option B matches.',
          },
          {
            id: 'ls-019-s4-q38',
            type: 'gap',
            prompt:
              'In the traditional drying method, the cherries are spread out in the ____________ and turned regularly. Write ONE WORD.',
            acceptableAnswers: ['sun'],
            explanation:
              'The speaker says the cherries “are simply spread out in the sun and turned regularly.” The answer is “sun”.',
          },
          {
            id: 'ls-019-s4-q39',
            type: 'gap',
            prompt:
              'Before roasting, the unroasted beans are described as ____________ beans. Write ONE WORD (a colour).',
            acceptableAnswers: ['green'],
            explanation:
              'The speaker says, “The green beans are heated, and as the temperature climbs the beans darken.” The unroasted beans are “green”.',
          },
          {
            id: 'ls-019-s4-q40',
            type: 'mcq',
            prompt: 'What does the speaker emphasise about roasting?',
            options: [
              'It is a simple step that anyone can do',
              'It removes the coffee’s flavour',
              'It is a skilled job, as over-roasting can turn a batch bitter',
              'It must be done before the beans are dried',
            ],
            correctIndex: 2,
            explanation:
              'The speaker stresses that “roasting is a skilled job: a few seconds too long can turn a delicate batch bitter.” Option C matches; roasting is described as where the flavour is created, not removed.',
          },
        ],
      },
    ],
  },
]
