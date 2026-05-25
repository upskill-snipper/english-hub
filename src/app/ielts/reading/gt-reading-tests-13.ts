// ─── IELTS General Training (GT) Reading - practice item bank (Set 13) ──────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary/note completion, and Matching). Framed as "IELTS
// preparation" only - no official affiliation is implied. General Training.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, timetables, advertise-
// ments, instructions) and WORKPLACE texts (handbooks, policies, programmes),
// plus one longer general-interest article. This file ships ONE complete,
// carefully-checked GT test scaled to a full sitting (~40 marks):
//   • Section 1 - a notice and timetable for a leisure centre's swimming pool
//     and fitness classes. Includes a Matching (features) question worth 5
//     marks asking which session each statement describes; options may be
//     reused.
//   • Section 2 - a workplace travel & expenses policy covering what can be
//     claimed, receipts, approval and submission deadlines.
//   • Section 3 - a general-interest article on the benefits of reading for
//     pleasure. Includes a Matching (headings) question covering paragraphs
//     B-F with two distractor headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-013-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_13: ReadingTest[] = [
  {
    id: 'rd-general-013',
    title: 'General Training Reading - Practice Test 13',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - leisure-centre pool & fitness notice +
      // a timetable of classes. A Matching (features) question (5 marks) asks
      // which of the five fitness classes each statement describes; options may
      // be reused.
      {
        id: 'rd-gen-013-p1',
        title: 'Riverbank Leisure Centre: Swimming Pool & Fitness Class Notice',
        body: `PART 1 - RIVERBANK LEISURE CENTRE: USING THE POOL

The pool at Riverbank Leisure Centre is open every day except Christmas Day. From Monday to Friday the pool opens at 6.30 a.m. and closes at 9 p.m.; at the weekend it opens later, at 8 a.m., and closes at 6 p.m. The last swimmers are asked to leave the water fifteen minutes before closing so that the lifeguards can clear the pool on time.

LANE SWIMMING
Three of the pool's six lanes are set aside for lane swimming every weekday morning until 9 a.m., and again from 7 p.m. to 8 p.m. The lanes are marked slow, medium and fast; please choose the lane that matches your pace and let faster swimmers pass at the end of the pool rather than in the middle of a length. Lane swimming is for ages sixteen and over only.

FAMILY AND PUBLIC SESSIONS
During the school holidays the whole pool is given over to family swimming from 10 a.m. to 4 p.m. Children under the age of eight must be kept within arm's reach of an adult at all times, and one adult may supervise no more than two such children. Inflatable toys are allowed only during the Saturday afternoon fun session, when the wave machine is also switched on.

WHAT TO BRING AND FEES
A single swim costs £4.50 for an adult and £2.50 for a child; under-threes swim free. Lockers take a £1 coin, which is returned when you collect your belongings. Please bring your own padlock for the lockers in the dry changing village, as we no longer sell them at reception. Outdoor shoes must be left in the lobby, and a swimming cap is required in the lane-swimming lanes but not during family sessions.

PART 2 - FITNESS CLASS TIMETABLE

The centre runs five regular fitness classes each week, listed below. All classes must be booked through the centre's app or at reception; a place is held for ten minutes after the start time, after which it may be given to someone on the waiting list. Members pay nothing extra for classes; non-members pay £6 per class.

CLASS 1 - AQUA FIT
A gentle workout in the shallow end of the pool, set to music, suitable for all ages and abilities. Held on Monday and Thursday at 11 a.m. No swimming ability is needed, as your feet stay on the pool floor throughout, but please bring a towel and a water bottle.

CLASS 2 - SUNRISE YOGA
A calm stretching and breathing class in Studio 1, held on Tuesday and Friday at 7 a.m. Mats are provided, though you may bring your own. The room is kept warm, so light clothing is best. The class is not suitable in the later stages of pregnancy without a doctor's note.

CLASS 3 - SPIN
A fast indoor cycling class in Studio 2, held on Wednesday and Saturday at 6 p.m. The bikes are adjusted for you by the instructor at your first class, so arrive ten minutes early if it is your first time. This class is for ages eighteen and over.

CLASS 4 - CIRCUIT TRAINING
A series of strength and fitness stations in the main hall, held on Monday and Wednesday at 6.30 p.m. Trainers must be clean indoor shoes; you will be turned away in outdoor footwear. The class is busy, so booking ahead is strongly advised.

CLASS 5 - STEADY STEPS
A low-impact class designed for older adults and anyone returning to exercise, held on Tuesday and Thursday at 2 p.m. in Studio 1. A chair is available for anyone who needs support, and the pace is set by the group. Carers may attend with a participant free of charge.`,
        questions: [
          {
            id: 'rd-gen-013-p1-q1',
            type: 'tfng',
            prompt: 'The pool opens at the same time every day of the week.',
            answer: 'false',
            explanation:
              'The notice says the pool opens at 6.30 a.m. on weekdays but "at the weekend it opens later, at 8 a.m." The opening time differs, so the statement is False.',
          },
          {
            id: 'rd-gen-013-p1-q2',
            type: 'tfng',
            prompt: 'Lane swimming is open to swimmers of any age.',
            answer: 'false',
            explanation:
              'The Lane Swimming section states "Lane swimming is for ages sixteen and over only." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p1-q3',
            type: 'tfng',
            prompt: 'Reception sells padlocks for the changing-village lockers.',
            answer: 'false',
            explanation:
              'The notice says to "bring your own padlock... as we no longer sell them at reception." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p1-q4',
            type: 'tfng',
            prompt: 'A swimming cap must be worn during family swimming sessions.',
            answer: 'false',
            explanation:
              'The notice says a swimming cap "is required in the lane-swimming lanes but not during family sessions." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p1-q5',
            type: 'mcq',
            prompt: 'When are inflatable toys allowed in the pool?',
            options: [
              'At any family swimming session',
              'Only during the Saturday afternoon fun session',
              'During weekday lane swimming',
              'Whenever the wave machine is switched off',
            ],
            correctIndex: 1,
            explanation:
              'The notice says "Inflatable toys are allowed only during the Saturday afternoon fun session, when the wave machine is also switched on." Option B matches.',
          },
          {
            id: 'rd-gen-013-p1-q6',
            type: 'mcq',
            prompt:
              'How long is a class place held after the start time before it may be given away?',
            options: ['Five minutes', 'Ten minutes', 'Fifteen minutes', 'Thirty minutes'],
            correctIndex: 1,
            explanation:
              'The timetable section says "a place is held for ten minutes after the start time, after which it may be given to someone on the waiting list." Option B matches.',
          },
          {
            id: 'rd-gen-013-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with a number from the text: A single swim for an adult costs £_______.',
            acceptableAnswers: ['4.50', '4.5'],
            explanation:
              'The fees section states "A single swim costs £4.50 for an adult." The answer is "4.50".',
          },
          {
            id: 'rd-gen-013-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Lockers take a £_______ coin, which is returned when you collect your belongings.',
            acceptableAnswers: ['1', 'one'],
            explanation:
              'The fees section says "Lockers take a £1 coin, which is returned when you collect your belongings." The answer is "1".',
          },
          {
            id: 'rd-gen-013-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the five fitness classes, 1-5. For each statement below, choose the class it describes. Write the correct number, 1-5. (Each class may be chosen more than once.)',
            options: [
              { key: '1', label: 'Class 1 - Aqua Fit' },
              { key: '2', label: 'Class 2 - Sunrise Yoga' },
              { key: '3', label: 'Class 3 - Spin' },
              { key: '4', label: 'Class 4 - Circuit Training' },
              { key: '5', label: 'Class 5 - Steady Steps' },
            ],
            items: [
              {
                id: 'i1',
                text: 'It takes place in the shallow end of the pool.',
                answer: '1',
              },
              {
                id: 'i2',
                text: 'A carer may take part with a participant at no cost.',
                answer: '5',
              },
              {
                id: 'i3',
                text: 'You will be refused entry if you wear outdoor footwear.',
                answer: '4',
              },
              {
                id: 'i4',
                text: 'First-timers should arrive early to have equipment adjusted.',
                answer: '3',
              },
              {
                id: 'i5',
                text: 'It may be unsuitable late in pregnancy without medical advice.',
                answer: '2',
              },
            ],
            explanation:
              'i1: Aqua Fit (Class 1) is "in the shallow end of the pool." i2: Steady Steps (Class 5) says "Carers may attend with a participant free of charge." i3: Circuit Training (Class 4) warns "you will be turned away in outdoor footwear." i4: Spin (Class 3) says the bikes are adjusted at the first class, so "arrive ten minutes early if it is your first time." i5: Sunrise Yoga (Class 2) is "not suitable in the later stages of pregnancy without a doctor’s note."',
          },
        ],
      },
      // ── Section 2: WORKPLACE - travel & expenses policy ─────────────────────
      {
        id: 'rd-gen-013-p2',
        title: 'Travel and Expenses Policy - Staff Guide',
        body: `This guide explains how staff should arrange business travel and claim back the money they spend while working away from their usual place of work. It applies to everyone, whatever their grade. A full copy of the policy, including the current mileage and meal rates, is on the staff portal, and the finance team is happy to answer questions before you travel rather than after.

BEFORE YOU TRAVEL
All business travel costing more than £100 must be approved by your line manager in advance, using the travel request form on the portal. Wherever possible, book trains and accommodation through the company's booking system, which secures lower rates and means you do not have to pay first and wait to be repaid. Standard-class rail travel is the norm; first-class tickets are not refunded unless they were genuinely cheaper than the standard fare at the time of booking, and you must keep proof of that. Taxis should be used only where public transport is not practical, for example late at night or when carrying heavy equipment.

WHAT YOU CAN CLAIM
You may claim the actual cost of travel, accommodation and meals while away on business, within the daily limits set out on the portal. If you drive your own car, you may claim a fixed rate for each mile rather than the cost of fuel. Meals are reimbursed up to a daily cap, but alcoholic drinks are never refunded, even as part of a meal. Personal costs such as newspapers, films in a hotel room, or fines for parking in the wrong place cannot be claimed. Where a meal is already provided - for instance, breakfast included with your room - you cannot also claim for buying one elsewhere.

RECEIPTS AND PROOF
Every claim must be supported by an itemised receipt; a card statement on its own is not enough, as it does not show what was bought. Photograph or scan each receipt and attach it to your online claim. The only exception is mileage, for which you record the journey and the distance instead of a receipt. If a receipt is genuinely lost, complete the missing-receipt form and have your manager sign it; this should be the rare exception, not a habit.

SUBMITTING YOUR CLAIM AND BEING PAID
Claims must be submitted within thirty days of the date you spent the money. A claim sent in after that may still be paid, but only with the written agreement of a head of department. Approved claims are paid into your bank account with the next salary run, provided they are submitted at least five working days before pay day. Claims that arrive later than that will normally be carried over to the following month.`,
        questions: [
          {
            id: 'rd-gen-013-p2-q10',
            type: 'mcq',
            prompt: 'When must business travel be approved by a line manager in advance?',
            options: [
              'For every trip, however small',
              'Only when it involves an overnight stay',
              'When it costs more than £100',
              'Only when a taxi is used',
            ],
            correctIndex: 2,
            explanation:
              'The "Before you travel" section says "All business travel costing more than £100 must be approved by your line manager in advance." Option C matches.',
          },
          {
            id: 'rd-gen-013-p2-q11',
            type: 'mcq',
            prompt: 'Under what condition is a first-class rail ticket refunded?',
            options: [
              'Whenever the journey is over two hours long',
              'Only if it was genuinely cheaper than the standard fare at the time of booking',
              'Whenever the manager travels in first class too',
              'It is always refunded for senior staff',
            ],
            correctIndex: 1,
            explanation:
              'The policy says first-class tickets "are not refunded unless they were genuinely cheaper than the standard fare at the time of booking, and you must keep proof." Option B matches.',
          },
          {
            id: 'rd-gen-013-p2-q12',
            type: 'mcq',
            prompt: 'Why is a card statement on its own not accepted as proof of a purchase?',
            options: [
              'Because it can easily be forged',
              'Because it does not show what was bought',
              'Because it is not signed by a manager',
              'Because it does not include the date',
            ],
            correctIndex: 1,
            explanation:
              'The "Receipts and proof" section says a card statement "on its own is not enough, as it does not show what was bought." Option B matches.',
          },
          {
            id: 'rd-gen-013-p2-q13',
            type: 'tfng',
            prompt:
              'Staff who drive their own car may claim a fixed rate for each mile rather than the cost of fuel.',
            answer: 'true',
            explanation:
              'The "What you can claim" section says "If you drive your own car, you may claim a fixed rate for each mile rather than the cost of fuel." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-013-p2-q14',
            type: 'tfng',
            prompt: 'Alcoholic drinks may be claimed when they are part of an evening meal.',
            answer: 'false',
            explanation:
              'The policy states "alcoholic drinks are never refunded, even as part of a meal." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p2-q15',
            type: 'tfng',
            prompt: 'A receipt is required in order to claim mileage for using your own car.',
            answer: 'false',
            explanation:
              'The "Receipts and proof" section says the only exception to the receipt rule is mileage, "for which you record the journey and the distance instead of a receipt." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p2-q16',
            type: 'tfng',
            prompt: 'A claim submitted after the normal deadline can never be paid.',
            answer: 'false',
            explanation:
              'The policy says a late claim "may still be paid, but only with the written agreement of a head of department." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with a number from the text: Business travel costing more than £_______ must be approved in advance.',
            acceptableAnswers: ['100'],
            explanation:
              'The policy states travel "costing more than £100 must be approved by your line manager in advance." The answer is "100".',
          },
          {
            id: 'rd-gen-013-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Claims must be submitted within _______ days of the date the money was spent.',
            acceptableAnswers: ['thirty', '30'],
            explanation:
              'The submitting section says "Claims must be submitted within thirty days of the date you spent the money." The answer is "thirty" (the number 30 is also accepted).',
          },
          {
            id: 'rd-gen-013-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: An approved claim is paid with the next salary run if it is submitted at least _______ working days before pay day.',
            acceptableAnswers: ['five', '5'],
            explanation:
              'The policy says approved claims are paid "provided they are submitted at least five working days before pay day." The answer is "five" (the number 5 is also accepted).',
          },
          {
            id: 'rd-gen-013-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: If a receipt is genuinely lost, complete the _______ form and have your manager sign it.',
            acceptableAnswers: ['missing-receipt', 'missing receipt'],
            explanation:
              'The "Receipts and proof" section says to "complete the missing-receipt form and have your manager sign it." The missing words are "missing-receipt".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - the benefits of reading for
      // pleasure. Six labelled paragraphs (A-F). A Matching Headings question
      // (with two distractor headings) covers paragraphs B-F and is worth 5
      // marks.
      {
        id: 'rd-gen-013-p3',
        title: 'Lost in a Book: Why Reading for Pleasure Matters',
        body: `Paragraph A
For many people, reading is something done out of necessity - a report at work, the instructions on a packet, the news on a screen. Reading for pleasure is different. It is the reading we choose freely, for no reward beyond the experience itself, whether that means a novel, a magazine about cycling, or the long article we save for a quiet evening. It can look like an idle pastime, easily squeezed out by busier-seeming demands. Yet a growing body of research suggests that this freely chosen reading does us a surprising amount of good, in ways that reach well beyond the hour we spend with the book.

Paragraph B
The clearest benefit, and the easiest to measure, is the effect on language. People who read widely for pleasure meet far more words, and a far greater variety of them, than they ever would in everyday speech, and they meet those words in context, which is how vocabulary is best learned. This matters at every age. Children who read for pleasure tend to have larger vocabularies and to do better at school across all subjects, not only in English, because so much of learning depends on the ability to read and understand. The gain is quiet and cumulative: no single book transforms a reader, but the habit, kept up over years, builds a richer command of language than schooling alone can provide.

Paragraph C
Reading also turns out to be unusually good at calming the mind. In one often-quoted study, volunteers who were made stressed and then asked to read silently for a few minutes showed a sharper drop in heart rate and muscle tension than those who listened to music or went for a walk. The likely reason is that following a story demands just enough attention to crowd out anxious thoughts, while making no physical demand at all. Unlike a screen, a book does not interrupt itself with alerts and notifications. Many readers know this without being told: the last few pages before sleep are, for them, the most reliable way to leave the day behind.

Paragraph D
Perhaps the most intriguing finding concerns other people. Fiction, in particular, asks us to spend hours inside the thoughts and feelings of characters quite unlike ourselves, and several studies suggest that regular readers of fiction are better than non-readers at sensing what others are feeling and seeing a situation from another point of view. This is not the same as saying that readers are kinder, and the research is still young. But it makes a certain sense: a habit of imagining your way into other minds, page after page, may be quiet practice for doing the same in real life.

Paragraph E
Given all this, it is worth asking why so many adults who once read for pleasure have stopped. The usual answer is a lack of time, but the deeper problem is often the sense that reading must be earned, fitted in only once everything else is done - by which point the day is gone. The reader who waits for a free hour rarely finds one. Those who keep the habit tend to be the ones who treat reading not as a reward but as an ordinary part of the day, like a meal, and who keep a book within easy reach.

Paragraph F
Building the habit back is more a matter of small, practical changes than of willpower. Choose books you actually want to read rather than the ones you feel you ought to, and give yourself full permission to abandon any book that bores you. Carry something to read, on paper or on a phone, so that the minutes spent waiting become reading time. Set a modest, regular slot - ten minutes before sleep is plenty to begin with - and protect it. Joining a library or a reading group helps too, less for the books than for the gentle expectation that you will turn up with something to talk about. None of these steps is dramatic, but together, over a few weeks, they can turn reading from a good intention into a settled pleasure.`,
        questions: [
          {
            id: 'rd-gen-013-p3-q21',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. Practical ways to rebuild the habit' },
              { key: 'ii', label: 'ii. A boost to vocabulary and learning' },
              { key: 'iii', label: 'iii. Why so many adults give it up' },
              { key: 'iv', label: 'iv. The decline of the printed book' },
              { key: 'v', label: 'v. Understanding other people better' },
              { key: 'vi', label: 'vi. A proven way to ease stress' },
              { key: 'vii', label: 'vii. How publishers choose what to print' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'ii' },
              { id: 'pC', text: 'Paragraph C', answer: 'vi' },
              { id: 'pD', text: 'Paragraph D', answer: 'v' },
              { id: 'pE', text: 'Paragraph E', answer: 'iii' },
              { id: 'pF', text: 'Paragraph F', answer: 'i' },
            ],
            explanation:
              'Paragraph B is about "the effect on language" - larger vocabularies and doing better at school - heading ii. Paragraph C reports the study showing reading is "unusually good at calming the mind" and easing stress - heading vi. Paragraph D concerns sensing what others feel and seeing another point of view - heading v (understanding other people). Paragraph E asks "why so many adults who once read for pleasure have stopped" - heading iii. Paragraph F gives "small, practical changes" to build the habit back - heading i. Headings iv (the decline of the printed book) and vii (how publishers choose what to print) are distractors that are not used.',
          },
          {
            id: 'rd-gen-013-p3-q22',
            type: 'mcq',
            prompt: 'How does Paragraph A define reading for pleasure?',
            options: [
              'Reading done as part of paid work',
              'Reading we choose freely, for no reward beyond the experience itself',
              'Reading only of novels rather than magazines',
              'Reading that always takes place in the evening',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says reading for pleasure "is the reading we choose freely, for no reward beyond the experience itself." Option B matches.',
          },
          {
            id: 'rd-gen-013-p3-q23',
            type: 'mcq',
            prompt:
              'According to Paragraph B, why do children who read for pleasure do better across all school subjects?',
            options: [
              'Because reading replaces the need for teaching',
              'Because so much of learning depends on being able to read and understand',
              'Because they read only English-language books',
              'Because they spend less time on other subjects',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says such children "do better at school across all subjects, not only in English, because so much of learning depends on the ability to read and understand." Option B matches.',
          },
          {
            id: 'rd-gen-013-p3-q24',
            type: 'mcq',
            prompt:
              'In the study described in Paragraph C, what did reading do compared with music or walking?',
            options: [
              'It produced a sharper drop in heart rate and muscle tension',
              'It had no measurable effect on the volunteers',
              'It raised the volunteers’ heart rate',
              'It worked only for people who read every day',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph C says readers "showed a sharper drop in heart rate and muscle tension than those who listened to music or went for a walk." Option A matches.',
          },
          {
            id: 'rd-gen-013-p3-q25',
            type: 'mcq',
            prompt:
              'What does Paragraph E suggest is the deeper reason adults stop reading for pleasure?',
            options: [
              'They can no longer afford to buy books',
              'They feel reading must be earned and fitted in only once everything else is done',
              'They find modern books too difficult',
              'They prefer listening to music',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says the deeper problem "is often the sense that reading must be earned, fitted in only once everything else is done." Option B matches.',
          },
          {
            id: 'rd-gen-013-p3-q26',
            type: 'tfng',
            prompt:
              'Reading widely for pleasure exposes people to more words than everyday speech does.',
            answer: 'true',
            explanation:
              'Paragraph B says people who read widely "meet far more words, and a far greater variety of them, than they ever would in everyday speech." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-013-p3-q27',
            type: 'tfng',
            prompt: 'The study in Paragraph C measured how long volunteers slept after reading.',
            answer: 'not-given',
            explanation:
              'Paragraph C describes measurements of heart rate and muscle tension after reading but says nothing about how long volunteers slept. The answer is Not Given.',
          },
          {
            id: 'rd-gen-013-p3-q28',
            type: 'tfng',
            prompt:
              'The article claims that research has firmly proved readers of fiction are kinder people.',
            answer: 'false',
            explanation:
              'Paragraph D says explicitly "This is not the same as saying that readers are kinder, and the research is still young." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p3-q29',
            type: 'tfng',
            prompt: 'The article advises readers to finish every book they begin.',
            answer: 'false',
            explanation:
              'Paragraph F tells readers to "give yourself full permission to abandon any book that bores you." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-013-p3-q30',
            type: 'tfng',
            prompt:
              'Paragraph F suggests that joining a reading group can create a helpful expectation to keep reading.',
            answer: 'true',
            explanation:
              'Paragraph F says joining a reading group helps "for the gentle expectation that you will turn up with something to talk about." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-013-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Following a story demands just enough attention to crowd out _______ thoughts.',
            acceptableAnswers: ['anxious'],
            explanation:
              'Paragraph C says following a story "demands just enough attention to crowd out anxious thoughts." The missing word is "anxious".',
          },
          {
            id: 'rd-gen-013-p3-q32',
            type: 'gap',
            prompt:
              'Complete the phrase with ONE word from the passage: The writer advises setting a modest, regular _______ for reading and protecting it.',
            acceptableAnswers: ['slot'],
            explanation:
              'Paragraph F says to "Set a modest, regular slot... and protect it." The missing word is "slot".',
          },
        ],
      },
    ],
  },
]
