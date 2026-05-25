// ─── IELTS General Training Reading - practice item bank (GT Set 3) ─────────
// ORIGINAL content written for The English Hub. These are NOT reproductions of
// any official IELTS past paper; every notice, advertisement, handbook extract
// and article below is invented purely to practise the General Training Reading
// question formats (MCQ, True/False/Not Given, and sentence/summary completion).
// Framed as "IELTS preparation" only - no official affiliation is implied.
//
// GT Reading differs from Academic: instead of academic journal extracts, the
// texts are everyday/social (Section 1: leisure-centre notices + a volunteering
// advert), workplace (Section 2: a new-employee induction and safety handbook)
// and a longer general-interest article (Section 3: taking up a craft in adult
// life), with difficulty rising across the sections. This file ships ONE full
// GT test (3 passages, 40 questions) and is deliberately DISTINCT in topic and
// source from its sibling GT tests (Sets 1 and 2).
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_3: ReadingTest[] = [
  {
    id: 'rd-general-003',
    title: 'General Training Reading - Practice Test 3',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - leisure-centre notices + a volunteering advert
      {
        id: 'rd-general-003-p1',
        title: 'Maple Park Leisure Centre - Member Notices & Volunteering',
        body: `OFF-PEAK MEMBERSHIP - NEW RATES
From the first of next month, our off-peak membership will cost £29 a month, a small rise from the current £27. Off-peak members may use the gym, the pool and the studio classes on weekdays between 10 a.m. and 4 p.m., and at any time over the weekend. Please note that off-peak membership does not give access to the centre during the early-morning period (6 a.m. to 10 a.m.), which remains reserved for full members. If you wish to upgrade to full membership, you may do so at reception at any time; the difference is charged from the start of the following month, never backdated.

POOL TIMETABLE - IMPORTANT CHANGE
The Tuesday evening public swim has moved. Lane swimming on Tuesdays now finishes at 7 p.m. rather than 8 p.m., because the far end of the pool is needed for the junior water-polo squad, which trains from 7 p.m. The Thursday family session is unaffected and still runs from 4 p.m. until 6 p.m. During school holidays an extra afternoon session is added on Wednesdays, but this is not available during term time.

BOOKING STUDIO CLASSES
All studio classes must be booked in advance through the centre's app; we no longer keep a paper sign-up sheet at the studio door. Booking opens exactly seven days before each class and closes one hour before it begins. If you book a place and then find you cannot attend, please cancel through the app at least two hours ahead so that the place can be offered to someone on the waiting list. Members who fail to cancel three times in a single month will lose the right to advance booking for the following four weeks.

CAFÉ REFURBISHMENT
The poolside café will be closed for refurbishment for two weeks from Monday the 14th. During this period a small refreshment trolley will be available in the main foyer, serving hot drinks and a limited range of snacks. The vending machines by the changing rooms will continue to operate as normal throughout.

VOLUNTEER POOLSIDE HELPERS WANTED
We are looking for friendly, reliable volunteers to support our weekend learn-to-swim programme for children. You do not need to be a strong swimmer yourself, as helpers remain on the poolside and never enter the water; your role is to greet families, hand out floats and encourage the young swimmers. Full training is given, and a free off-peak membership is offered to anyone who volunteers for at least one session a fortnight over six months. Volunteers must be aged sixteen or over, and all applicants will be asked to provide two references. To express interest, collect a form from reception or email the programme coordinator, Dervla Quinn, before the end of the month.`,
        questions: [
          {
            id: 'rd-gen-003-p1-q1',
            type: 'tfng',
            prompt: 'The new off-peak membership rate is higher than the current rate.',
            answer: 'true',
            explanation:
              'The first notice says the off-peak membership "will cost £29 a month, a small rise from the current £27." £29 is higher than £27, so the statement is True.',
          },
          {
            id: 'rd-gen-003-p1-q2',
            type: 'tfng',
            prompt: 'Off-peak members may use the centre between 6 a.m. and 10 a.m. on weekdays.',
            answer: 'false',
            explanation:
              'The notice states off-peak membership "does not give access to the centre during the early-morning period (6 a.m. to 10 a.m.), which remains reserved for full members." Off-peak members are excluded then, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p1-q3',
            type: 'tfng',
            prompt:
              'When a member upgrades to full membership, the extra charge is applied to previous months as well.',
            answer: 'false',
            explanation:
              'The notice says the difference for an upgrade "is charged from the start of the following month, never backdated." Backdating to previous months is explicitly ruled out, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p1-q4',
            type: 'mcq',
            prompt: 'Why has lane swimming on Tuesday evenings been made shorter?',
            options: [
              'Because the café needs the space for an evening event',
              'Because the far end of the pool is needed for water-polo training',
              'Because there are not enough lifeguards after 7 p.m.',
              'Because the pool is cleaned every Tuesday evening',
            ],
            correctIndex: 1,
            explanation:
              'The Pool Timetable notice explains that Tuesday lane swimming now finishes at 7 p.m. "because the far end of the pool is needed for the junior water-polo squad, which trains from 7 p.m." Option B matches; the other reasons are not given.',
          },
          {
            id: 'rd-gen-003-p1-q5',
            type: 'tfng',
            prompt: 'The extra Wednesday afternoon swimming session runs all year round.',
            answer: 'false',
            explanation:
              'The notice says the extra Wednesday session is added "during school holidays" but "is not available during term time." Because it does not run all year, the statement is False.',
          },
          {
            id: 'rd-gen-003-p1-q6',
            type: 'mcq',
            prompt: 'How can a member now reserve a place in a studio class?',
            options: [
              'By signing a paper sheet at the studio door',
              'By telephoning the reception desk',
              "Through the centre's app, up to seven days in advance",
              'By turning up one hour before the class begins',
            ],
            correctIndex: 2,
            explanation:
              'The Booking Studio Classes notice says all classes "must be booked in advance through the centre’s app" and that "Booking opens exactly seven days before each class." Option C is correct; the paper sign-up sheet is no longer kept.',
          },
          {
            id: 'rd-gen-003-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE number from the text: To free up a place for someone on the waiting list, a member should cancel a class booking at least _______ hours before it starts.',
            acceptableAnswers: ['two', '2'],
            explanation:
              'The notice asks members who cannot attend to "cancel through the app at least two hours ahead so that the place can be offered to someone on the waiting list." The answer is "two" (the number 2 is also accepted).',
          },
          {
            id: 'rd-gen-003-p1-q8',
            type: 'tfng',
            prompt:
              'A member who repeatedly fails to cancel bookings may temporarily lose the right to book in advance.',
            answer: 'true',
            explanation:
              'The notice warns that members who "fail to cancel three times in a single month will lose the right to advance booking for the following four weeks." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-003-p1-q9',
            type: 'mcq',
            prompt: 'What will be available while the poolside café is closed for refurbishment?',
            options: [
              'A full hot-food menu served in the studio',
              'A refreshment trolley in the main foyer with hot drinks and a few snacks',
              'Free meals for all members in the staff room',
              'Nothing, as no food or drink will be sold anywhere',
            ],
            correctIndex: 1,
            explanation:
              'The Café Refurbishment notice says that during the closure "a small refreshment trolley will be available in the main foyer, serving hot drinks and a limited range of snacks." Option B matches; the vending machines also continue, so option D is wrong.',
          },
          {
            id: 'rd-gen-003-p1-q10',
            type: 'tfng',
            prompt: 'Poolside volunteer helpers are required to be confident swimmers.',
            answer: 'false',
            explanation:
              'The volunteering advert states "You do not need to be a strong swimmer yourself, as helpers remain on the poolside and never enter the water." Being a confident swimmer is not required, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p1-q11',
            type: 'mcq',
            prompt:
              'What is offered to volunteers who commit to at least one session a fortnight for six months?',
            options: [
              'A paid weekend wage',
              'A free off-peak membership',
              'A free family swimming pass',
              'A discount on studio classes',
            ],
            correctIndex: 1,
            explanation:
              'The advert says "a free off-peak membership is offered to anyone who volunteers for at least one session a fortnight over six months." Option B is correct.',
          },
          {
            id: 'rd-gen-003-p1-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE number from the text: To volunteer as a poolside helper, an applicant must be at least _______ years old.',
            acceptableAnswers: ['sixteen', '16'],
            explanation:
              'The advert states "Volunteers must be aged sixteen or over." The answer is "sixteen" (the number 16 is also accepted).',
          },
          {
            id: 'rd-gen-003-p1-q13',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Anyone wishing to volunteer must supply two _______ along with their application.',
            acceptableAnswers: ['references'],
            explanation:
              'The advert says "all applicants will be asked to provide two references." The missing word is "references".',
          },
        ],
      },
      // ── Section 2: WORKPLACE - new-employee induction & safety handbook ───────
      {
        id: 'rd-general-003-p2',
        title: 'New Employee Induction - Harborne Distribution Warehouse',
        body: `YOUR FIRST WEEK
Every new member of warehouse staff completes an induction during their first week. On day one you will be issued with your security pass, locker key and protective equipment, and shown the layout of the site by your team leader. You cannot begin work on the warehouse floor until you have watched the safety video and signed to confirm that you understand it; this usually takes place on the morning of your second day. Office-based staff follow a slightly different induction, arranged separately by the human resources team.

PROTECTIVE EQUIPMENT
You will be provided with steel-toed boots, a high-visibility vest and protective gloves. These must be worn at all times when you are on the warehouse floor, even if you are only passing through. The high-visibility vest is especially important in the loading bay, where vehicles are constantly moving; staff seen in the loading bay without a vest will be asked to leave the area immediately. If any item of your equipment is damaged or lost, report it to your team leader, who will arrange a replacement at no cost to you. Wearing your own footwear in place of the steel-toed boots is not permitted under any circumstances.

OPERATING THE FORKLIFT TRUCKS
Only staff who hold a current forklift licence and have been added to the site register may operate a forklift truck. Holding a licence from a previous employer is not enough on its own; you must also complete a short familiarisation session with our equipment before your name is added to the register. Forklifts must never be left with the engine running while unattended, and the keys must be returned to the supervisor's cabinet at the end of each shift. The speed limit for all vehicles inside the building is eight kilometres per hour.

REPORTING ACCIDENTS AND NEAR MISSES
Any accident, however minor, must be recorded in the accident book kept in the supervisor's office on the same day it occurs. We also ask you to report "near misses" - incidents where no one was hurt but someone could have been. Reporting a near miss is never treated as an admission of fault; on the contrary, it helps us prevent a more serious accident later. The first-aid room is next to the canteen, and a list of trained first-aiders is displayed on the noticeboard there.

FIRE PROCEDURE
If you discover a fire, raise the alarm at the nearest call point and leave the building by the nearest marked exit. Do not stop to collect personal belongings. The assembly point is the far corner of the staff car park, beside the cycle racks. Lifts must not be used during an evacuation. A full fire drill is held twice a year, and you are expected to take part even if you are in the middle of a task.`,
        questions: [
          {
            id: 'rd-gen-003-p2-q14',
            type: 'tfng',
            prompt:
              'New warehouse staff may begin working on the warehouse floor before watching the safety video.',
            answer: 'false',
            explanation:
              'The "Your First Week" section states "You cannot begin work on the warehouse floor until you have watched the safety video and signed to confirm that you understand it." Working before watching it is not allowed, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p2-q15',
            type: 'tfng',
            prompt:
              'Office-based employees follow exactly the same induction programme as warehouse staff.',
            answer: 'false',
            explanation:
              'The text says "Office-based staff follow a slightly different induction, arranged separately by the human resources team." Because their induction differs, the statement is False.',
          },
          {
            id: 'rd-gen-003-p2-q16',
            type: 'mcq',
            prompt:
              'What happens to a worker who is seen in the loading bay without a high-visibility vest?',
            options: [
              'They are given a written warning by HR',
              'They are asked to leave the area immediately',
              'They must pay for a replacement vest',
              'They are sent home for the rest of the day',
            ],
            correctIndex: 1,
            explanation:
              'The Protective Equipment section says "staff seen in the loading bay without a vest will be asked to leave the area immediately." Option B matches exactly; the other consequences are not mentioned.',
          },
          {
            id: 'rd-gen-003-p2-q17',
            type: 'tfng',
            prompt: 'Staff who lose an item of protective equipment must pay for its replacement.',
            answer: 'false',
            explanation:
              'The text says that if equipment is damaged or lost, the team leader "will arrange a replacement at no cost to you." There is no charge, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p2-q18',
            type: 'tfng',
            prompt:
              'A forklift licence obtained at a previous workplace is by itself enough to operate the warehouse forklifts.',
            answer: 'false',
            explanation:
              'The forklift section states that "Holding a licence from a previous employer is not enough on its own; you must also complete a short familiarisation session with our equipment." A previous licence alone is insufficient, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p2-q19',
            type: 'mcq',
            prompt: 'What must be done with the forklift keys at the end of a shift?',
            options: [
              'They must be left in the forklift ignition',
              'They must be handed to the next driver',
              "They must be returned to the supervisor's cabinet",
              'They must be taken home for safekeeping',
            ],
            correctIndex: 2,
            explanation:
              'The forklift section instructs that "the keys must be returned to the supervisor’s cabinet at the end of each shift." Option C is correct.',
          },
          {
            id: 'rd-gen-003-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE number from the text: The speed limit for all vehicles inside the warehouse building is _______ kilometres per hour.',
            acceptableAnswers: ['eight', '8'],
            explanation:
              'The forklift section states "The speed limit for all vehicles inside the building is eight kilometres per hour." The answer is "eight" (the number 8 is also accepted).',
          },
          {
            id: 'rd-gen-003-p2-q21',
            type: 'mcq',
            prompt: 'How does the handbook describe the reporting of a "near miss"?',
            options: [
              'As an admission that the worker was at fault',
              'As something that helps prevent a more serious accident later',
              'As optional and rarely worth the effort',
              'As a matter for the police rather than the supervisor',
            ],
            correctIndex: 1,
            explanation:
              'The accidents section says reporting a near miss "is never treated as an admission of fault; on the contrary, it helps us prevent a more serious accident later." Option B matches; option A is explicitly rejected.',
          },
          {
            id: 'rd-gen-003-p2-q22',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Every accident, no matter how minor, must be written in the _______ kept in the supervisor’s office on the day it happens.',
            acceptableAnswers: ['accident book'],
            explanation:
              'The text says any accident "must be recorded in the accident book kept in the supervisor’s office on the same day it occurs." The two words filling the gap are "accident book".',
          },
          {
            id: 'rd-gen-003-p2-q23',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: During a fire evacuation, the _______ must not be used to leave the building.',
            acceptableAnswers: ['lifts', 'lift'],
            explanation:
              'The Fire Procedure section states "Lifts must not be used during an evacuation." The required word is "lifts" (the singular "lift" is also accepted).',
          },
          {
            id: 'rd-gen-003-p2-q24',
            type: 'mcq',
            prompt: 'Where is the assembly point in the event of a fire?',
            options: [
              'Outside the main reception doors',
              'In the staff canteen',
              'The far corner of the staff car park, by the cycle racks',
              'Next to the loading bay',
            ],
            correctIndex: 2,
            explanation:
              'The Fire Procedure section says "The assembly point is the far corner of the staff car park, beside the cycle racks." Option C matches exactly.',
          },
          {
            id: 'rd-gen-003-p2-q25',
            type: 'tfng',
            prompt:
              'Employees are expected to join a fire drill even if they are busy with a task.',
            answer: 'true',
            explanation:
              'The text says a fire drill is held twice a year and "you are expected to take part even if you are in the middle of a task." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-003-p2-q26',
            type: 'tfng',
            prompt: 'The first-aid room is located beside the canteen.',
            answer: 'true',
            explanation:
              'The accidents section states "The first-aid room is next to the canteen." This directly supports the statement, so it is True.',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST article - taking up a craft as an adult
      {
        id: 'rd-general-003-p3',
        title: 'Learning a Craft in Later Life',
        body: `There is a widespread belief that the ability to acquire a practical skill belongs chiefly to the young, and that an adult who has never thrown a pot or planed a piece of wood has somehow missed the window in which such things can be learned. Teachers of traditional crafts hear this anxiety constantly, usually phrased as an apology: I should have started years ago. Yet their experience tells a different and more encouraging story. The adult beginner, they insist, brings advantages that more than compensate for a later start.

The first of these is patience. A child learning to carve may rush towards a finished object, abandoning the work the moment it stops being fun. Adults, by contrast, have generally learned to tolerate the slow, unglamorous middle of a project - the hours of sanding, the repeated false starts - because adult life has already taught them that worthwhile results rarely arrive quickly. This willingness to stay with a difficulty, rather than flee from it, turns out to be far more valuable in craft work than youthful quickness of hand.

A second advantage is the freedom that comes with low stakes. Most adults take up a craft for pleasure rather than as a livelihood, and this changes their relationship to failure. A ruined first attempt is not a catastrophe but simply part of the process, to be examined and learned from. Several instructors observe that their most anxious students are often the most capable ones, paralysed by a fear of making something imperfect, while those who shrug off their early mistakes tend to progress fastest. The lesson is not that skill does not matter, but that the fear of failing can be a heavier burden than the failing itself.

There are, of course, genuine obstacles. The body of a sixty-year-old does not always do what the mind asks of it, and conditions such as stiff joints can make fine handwork tiring. Good teachers respond not by lowering their expectations but by adapting their methods - suggesting a lighter tool here, a different grip there, more frequent rests. Far from being a reason to give up, these adjustments are simply part of meeting each learner where they are. A skill pursued sensibly, at a pace that respects the body, can be sustained for decades.

Perhaps the least expected benefit is social. Workshops and evening classes draw together people who might otherwise never meet - a retired engineer beside a young parent, a shop assistant beside a former teacher - united only by a shared wish to make something with their hands. In an age when much of life is conducted alone in front of a screen, the quiet companionship of a workshop, where strangers lend one another tools and advice, answers a need that has little to do with the craft itself. Many who enrol expecting to learn woodwork or weaving find that what they value most, after a few months, is the company.

None of this is to pretend that learning a craft in later life is effortless. Progress can be frustratingly slow, and the gap between what one imagines making and what one actually produces can be discouraging. But the teachers who spend their days with adult beginners are almost unanimous on one point: the people who flourish are not the naturally gifted, but the ones who keep turning up. Talent, they suggest, is overrated; persistence is everything. And persistence, unlike youth, is something an adult can choose.`,
        questions: [
          {
            id: 'rd-gen-003-p3-q27',
            type: 'mcq',
            prompt:
              'What common belief about learning a craft does the article begin by describing?',
            options: [
              'That practical skills are best learned in a formal college',
              'That the ability to learn a practical skill belongs mainly to the young',
              'That traditional crafts are no longer worth learning',
              'That adults learn crafts faster than children do',
            ],
            correctIndex: 1,
            explanation:
              'The opening sentence describes "a widespread belief that the ability to acquire a practical skill belongs chiefly to the young." Option B captures this belief, which the article then challenges.',
          },
          {
            id: 'rd-gen-003-p3-q28',
            type: 'tfng',
            prompt:
              'According to craft teachers, adult beginners have advantages that make up for starting later.',
            answer: 'true',
            explanation:
              'The first paragraph says teachers insist that "The adult beginner... brings advantages that more than compensate for a later start." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-003-p3-q29',
            type: 'mcq',
            prompt:
              'Why, according to the article, is patience more common in adult learners than in children?',
            options: [
              'Because adults are taught patience in craft classes',
              'Because adult life has taught them that worthwhile results rarely come quickly',
              'Because children are not interested in finishing their work',
              'Because adults have more free time than children',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph explains that adults tolerate the slow middle of a project "because adult life has already taught them that worthwhile results rarely arrive quickly." Option B matches this reasoning.',
          },
          {
            id: 'rd-gen-003-p3-q30',
            type: 'tfng',
            prompt:
              'The article states that most adults take up a craft in order to earn a living from it.',
            answer: 'false',
            explanation:
              'The third paragraph says "Most adults take up a craft for pleasure rather than as a livelihood." This is the opposite of earning a living, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p3-q31',
            type: 'mcq',
            prompt: 'What do several instructors observe about their most anxious students?',
            options: [
              'They are usually the least talented in the class',
              'They give up sooner than other students',
              'They are often the most capable but are held back by a fear of imperfection',
              'They prefer to work alone rather than in a group',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph notes that "their most anxious students are often the most capable ones, paralysed by a fear of making something imperfect." Option C reflects this observation.',
          },
          {
            id: 'rd-gen-003-p3-q32',
            type: 'tfng',
            prompt: 'The article claims that skill is unimportant in craft work.',
            answer: 'false',
            explanation:
              'The third paragraph states explicitly that "The lesson is not that skill does not matter, but that the fear of failing can be a heavier burden than the failing itself." The article does not claim skill is unimportant, so the statement is False.',
          },
          {
            id: 'rd-gen-003-p3-q33',
            type: 'mcq',
            prompt:
              'How do good teachers respond when an older learner finds fine handwork tiring?',
            options: [
              'They lower their expectations of what the learner can achieve',
              'They advise the learner to take up a different hobby',
              'They adapt their methods, suggesting lighter tools, different grips and more rests',
              'They ask the learner to practise for longer each day',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph says good teachers respond "not by lowering their expectations but by adapting their methods - suggesting a lighter tool here, a different grip there, more frequent rests." Option C matches; option A is explicitly rejected.',
          },
          {
            id: 'rd-gen-003-p3-q34',
            type: 'tfng',
            prompt:
              'The article suggests that physical difficulties always force older learners to abandon a craft.',
            answer: 'false',
            explanation:
              'The fourth paragraph says that adjustments for physical difficulties are "Far from being a reason to give up" and that a craft "can be sustained for decades." This contradicts "always force... to abandon," so the statement is False.',
          },
          {
            id: 'rd-gen-003-p3-q35',
            type: 'tfng',
            prompt:
              'The article reports the average age at which most adults begin learning a craft.',
            answer: 'not-given',
            explanation:
              'Although the article mentions a "sixty-year-old" as an example, it never states the average age at which adults take up a craft. No such figure is given, so the answer is Not Given.',
          },
          {
            id: 'rd-gen-003-p3-q36',
            type: 'mcq',
            prompt:
              'What does the article describe as the least expected benefit of learning a craft in later life?',
            options: [
              'The money that can be saved by making things at home',
              'The social companionship found in workshops and classes',
              'The improvement in physical fitness',
              'The chance to sell finished work at markets',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph states "Perhaps the least expected benefit is social," and describes "the quiet companionship of a workshop." Option B matches this benefit.',
          },
          {
            id: 'rd-gen-003-p3-q37',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Many people enrol expecting to learn a craft but find that, after a few months, what they value most is the _______.',
            acceptableAnswers: ['company'],
            explanation:
              'The fifth paragraph says many "find that what they value most, after a few months, is the company." The missing word is "company".',
          },
          {
            id: 'rd-gen-003-p3-q38',
            type: 'tfng',
            prompt:
              'The article admits that progress in learning a craft can feel discouragingly slow.',
            answer: 'true',
            explanation:
              'The final paragraph acknowledges that "Progress can be frustratingly slow, and the gap between what one imagines making and what one actually produces can be discouraging." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-003-p3-q39',
            type: 'mcq',
            prompt: 'According to the teachers quoted at the end, which learners tend to flourish?',
            options: [
              'Those who are naturally gifted',
              'Those who started learning when they were young',
              'Those who keep turning up and persist',
              'Those who buy the most expensive tools',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph says the people who flourish "are not the naturally gifted, but the ones who keep turning up," and that "persistence is everything." Option C captures this.',
          },
          {
            id: 'rd-gen-003-p3-q40',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: The teachers conclude that talent is overrated and that _______ is everything.',
            acceptableAnswers: ['persistence'],
            explanation:
              'The final paragraph states "Talent, they suggest, is overrated; persistence is everything." The required word is "persistence".',
          },
        ],
      },
    ],
  },
]
