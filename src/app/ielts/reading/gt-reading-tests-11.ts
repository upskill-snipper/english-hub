// ─── IELTS General Training (GT) Reading - practice item bank (Set 11) ──────
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
//   • Section 1 - a notice for a town's new community library + an extract from
//     a new-employee induction handbook. Includes a Matching (features)
//     question worth 5 marks asking which service each statement describes;
//     options may be reused.
//   • Section 2 - a workplace induction handbook on probation, timekeeping,
//     leave requests and health & safety.
//   • Section 3 - a general-interest article on the benefits and practicalities
//     of volunteering. Includes a Matching (headings) question covering
//     paragraphs B-F with two distractor headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-011-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_11: ReadingTest[] = [
  {
    id: 'rd-general-011',
    title: 'General Training Reading - Practice Test 11',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - community library notice + library
      // services. A Matching (features) question (5 marks) asks which of the
      // five library services each statement describes; options may be reused.
      {
        id: 'rd-gen-011-p1',
        title: 'Maple Street Community Library: Opening Notice & Services Guide',
        body: `PART 1 - MAPLE STREET COMMUNITY LIBRARY: OPENING NOTICE

After two years of fundraising and building work, the new Maple Street Community Library opens to the public on the first of next month. The library stands on the corner of Maple Street and Canal Road, a short walk from the bus station. There is no car park of our own, but the public car park behind the town hall is a three-minute walk away and is free after 6 p.m.

OPENING HOURS
The library is open from 9 a.m. to 8 p.m. on Tuesday, Wednesday and Thursday, and from 9 a.m. to 5 p.m. on Friday and Saturday. We are closed all day on Sunday and Monday so that staff can sort returns and prepare displays for the week ahead. On public holidays the building does not open at all; notices of holiday closures are posted on the front door and on our website a fortnight beforehand.

MEMBERSHIP
Membership is free and is open to anyone, whether or not they live in the town. To join, come to the welcome desk with proof of your name and address, such as a recent bank letter or council tax bill. We cannot accept a mobile phone bill as proof of address. Children may join from birth, but anyone under fourteen must have the form signed by a parent or carer. Your card is printed while you wait and can be used straight away.

BORROWING
Members may take out up to twenty items at a time. Books are lent for four weeks and may be renewed twice unless someone else is waiting for them. Magazines and the audiobooks on the blue carousel are lent for one week only and cannot be renewed. We no longer charge fines for late returns; instead, your borrowing is paused until everything overdue is brought back. Please report a lost item promptly, as a replacement charge applies once an item is six weeks overdue.

PART 2 - SERVICES AT MAPLE STREET LIBRARY

The library offers five regular services in addition to lending. Each is listed below.

SERVICE 1 - The Quiet Reading Room
A silent room on the first floor for study and reading. No talking, music or phone calls are permitted, and the room must not be used for group work. Seats cannot be booked and are given on a first-come basis; at busy times a member of staff may ask you to share a table.

SERVICE 2 - The Children's Story Hour
A free session for under-fives and their carers, held every Wednesday and Saturday morning at half past ten. There is no need to book, but the room holds only thirty children, so please arrive early on busy days. Carers must stay with their child throughout the session.

SERVICE 3 - The Digital Help Desk
One-to-one help with computers, email and government websites, offered by trained volunteers. Sessions last forty-five minutes and must be booked at least one day ahead, either in person or by phone. Bring your own device if you have one, though we can lend a laptop for the session if you ask when booking.

SERVICE 4 - The Local History Archive
A collection of old maps, photographs and newspapers about the town. Material may be viewed in the archive room but may not be taken out of the building. You must wear the cotton gloves provided when handling original documents, and photography without flash is allowed for personal use only.

SERVICE 5 - The Seed Library
A free scheme that lets members borrow vegetable and flower seeds in spring and return a portion of the seeds they save at the end of the growing season. There is no charge and no obligation to return seeds, but doing so keeps the scheme going for others. Each member may take up to five packets per visit.`,
        questions: [
          {
            id: 'rd-gen-011-p1-q1',
            type: 'tfng',
            prompt: 'The library has its own car park for visitors.',
            answer: 'false',
            explanation:
              'The opening notice states "There is no car park of our own," directing visitors to the public car park behind the town hall. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p1-q2',
            type: 'tfng',
            prompt: 'The library is open on Mondays.',
            answer: 'false',
            explanation:
              'The Opening Hours section says "We are closed all day on Sunday and Monday." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p1-q3',
            type: 'tfng',
            prompt: 'Only people who live in the town are allowed to become members.',
            answer: 'false',
            explanation:
              'The Membership section says membership "is open to anyone, whether or not they live in the town." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p1-q4',
            type: 'tfng',
            prompt: 'The library now charges a fine when items are returned late.',
            answer: 'false',
            explanation:
              'The Borrowing section says "We no longer charge fines for late returns; instead, your borrowing is paused." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p1-q5',
            type: 'mcq',
            prompt: 'Which document is NOT accepted as proof of address when joining?',
            options: [
              'A recent bank letter',
              'A council tax bill',
              'A mobile phone bill',
              'A signed parental form',
            ],
            correctIndex: 2,
            explanation:
              'The Membership section says proof may be "a recent bank letter or council tax bill" but adds "We cannot accept a mobile phone bill as proof of address." Option C is the one not accepted.',
          },
          {
            id: 'rd-gen-011-p1-q6',
            type: 'mcq',
            prompt: 'What happens to a book that another member is waiting for?',
            options: [
              'It is lent for only one week',
              'It cannot be renewed',
              'It is moved to the blue carousel',
              'It can be renewed up to three times',
            ],
            correctIndex: 1,
            explanation:
              'The Borrowing section says books "may be renewed twice unless someone else is waiting for them." If another member is waiting, the book cannot be renewed, so Option B is correct.',
          },
          {
            id: 'rd-gen-011-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Members may take out up to _______ items at a time.',
            acceptableAnswers: ['twenty', '20'],
            explanation:
              'The Borrowing section states "Members may take out up to twenty items at a time." The answer is "twenty" (the number 20 is also accepted).',
          },
          {
            id: 'rd-gen-011-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A replacement charge applies once an item is _______ weeks overdue.',
            acceptableAnswers: ['six', '6'],
            explanation:
              'The Borrowing section says "a replacement charge applies once an item is six weeks overdue." The answer is "six" (the number 6 is also accepted).',
          },
          {
            id: 'rd-gen-011-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the five library services, 1-5. For each statement below, choose the service it describes. Write the correct number, 1-5. (Each service may be chosen more than once.)',
            options: [
              { key: '1', label: 'Service 1 - The Quiet Reading Room' },
              { key: '2', label: 'Service 2 - The Children’s Story Hour' },
              { key: '3', label: 'Service 3 - The Digital Help Desk' },
              { key: '4', label: 'Service 4 - The Local History Archive' },
              { key: '5', label: 'Service 5 - The Seed Library' },
            ],
            items: [
              {
                id: 'i1',
                text: 'You must book it at least a day in advance.',
                answer: '3',
              },
              {
                id: 'i2',
                text: 'Its materials may never be taken out of the building.',
                answer: '4',
              },
              {
                id: 'i3',
                text: 'It is the only listed service where talking is forbidden.',
                answer: '1',
              },
              {
                id: 'i4',
                text: 'A carer must remain with their child for the whole session.',
                answer: '2',
              },
              {
                id: 'i5',
                text: 'You may take a fixed number of packets on each visit.',
                answer: '5',
              },
            ],
            explanation:
              'i1: Service 3 (Digital Help Desk) sessions "must be booked at least one day ahead." i2: Service 4 (Local History Archive) material "may not be taken out of the building." i3: Service 1 (Quiet Reading Room) permits no talking, whereas the other services do not forbid it. i4: Service 2 (Children’s Story Hour) requires that "Carers must stay with their child throughout the session." i5: Service 5 (Seed Library) allows each member to "take up to five packets per visit."',
          },
        ],
      },
      // ── Section 2: WORKPLACE - new-employee induction handbook ──────────────
      {
        id: 'rd-gen-011-p2',
        title: 'New Employee Induction Handbook - Your First Months',
        body: `Welcome to the company. This extract from the induction handbook explains the rules that apply during your first months and the everyday procedures every member of staff is expected to follow. Keep it to hand; a full copy of all policies is available on the staff portal, and your line manager will go through anything that is unclear during your first week.

YOUR PROBATION PERIOD
All new employees begin on a six-month probation period. During this time we are getting to know you, and you are deciding whether the role suits you. Your line manager will meet you formally at the end of your first, third and fifth months to discuss how things are going. Either side may end the employment during probation by giving one week's written notice, rather than the longer notice that applies once probation is complete. Probation may, in some cases, be extended by up to three months, but only after a meeting at which the reasons are explained to you in writing.

TIMEKEEPING
Standard hours are 9 a.m. to 5 p.m., with an unpaid lunch break of one hour to be taken between noon and 2 p.m. You must record your arrival and departure each day using the card reader at the staff entrance; the system, not a paper sheet, is the official record of your hours. If you are going to be late or absent, telephone your team before 9.30 a.m. - a text message or email is not acceptable for reporting an unplanned absence, as it may not be seen in time.

REQUESTING LEAVE
Annual leave must be requested through the online portal and approved by your manager before you book any travel. Requests are dealt with in the order they arrive, so apply early for popular dates. No more than two members of a team may be on leave at the same time. Leave cannot normally be taken during the last week of any month, when the accounts are closed, except in an emergency agreed with your manager. Sick leave is different: you do not request it in advance, but you must follow the absence-reporting rule above and, for any absence longer than seven days, provide a doctor's note.

HEALTH AND SAFETY
Your safety, and that of your colleagues, comes before any task. You must complete the online fire-safety module before the end of your first week and attend the next available first-aid briefing. Report every accident, however minor, in the accident book kept at reception on the day it happens. If a fault makes a piece of equipment unsafe, label it clearly, stop using it and tell the facilities team at once; never attempt a repair yourself unless you are trained and authorised to do so. Fire drills are held twice a year and are not announced in advance, so always treat the alarm as real and leave by the nearest marked exit.`,
        questions: [
          {
            id: 'rd-gen-011-p2-q10',
            type: 'mcq',
            prompt: 'What notice is required to end employment during the probation period?',
            options: [
              'One week’s written notice',
              'One month’s written notice',
              'Three months’ written notice',
              'No notice at all',
            ],
            correctIndex: 0,
            explanation:
              'The Probation section says "Either side may end the employment during probation by giving one week’s written notice." Option A matches.',
          },
          {
            id: 'rd-gen-011-p2-q11',
            type: 'mcq',
            prompt: 'How must an employee report an unplanned absence?',
            options: [
              'By sending an email to the manager',
              'By sending a text message to the team',
              'By telephoning the team before 9.30 a.m.',
              'By recording it on the card reader',
            ],
            correctIndex: 2,
            explanation:
              'The Timekeeping section says to "telephone your team before 9.30 a.m." and that "a text message or email is not acceptable for reporting an unplanned absence." Option C is correct.',
          },
          {
            id: 'rd-gen-011-p2-q12',
            type: 'mcq',
            prompt: 'What should an employee do if a piece of equipment becomes unsafe?',
            options: [
              'Repair it themselves as quickly as possible',
              'Label it, stop using it and tell the facilities team at once',
              'Continue using it until the fire drill',
              'Record it only at the next monthly meeting',
            ],
            correctIndex: 1,
            explanation:
              'The Health and Safety section says to "label it clearly, stop using it and tell the facilities team at once," and "never attempt a repair yourself unless you are trained and authorised." Option B matches.',
          },
          {
            id: 'rd-gen-011-p2-q13',
            type: 'tfng',
            prompt:
              'The card reader at the staff entrance is the official record of working hours.',
            answer: 'true',
            explanation:
              'The Timekeeping section says staff must use the card reader and that "the system, not a paper sheet, is the official record of your hours." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-011-p2-q14',
            type: 'tfng',
            prompt: 'A manager may extend an employee’s probation without giving any reason.',
            answer: 'false',
            explanation:
              'The Probation section says probation may be extended "but only after a meeting at which the reasons are explained to you in writing." Reasons must be given, so the statement is False.',
          },
          {
            id: 'rd-gen-011-p2-q15',
            type: 'tfng',
            prompt: 'Employees should book their travel before their leave request is approved.',
            answer: 'false',
            explanation:
              'The Requesting Leave section says leave must be "approved by your manager before you book any travel." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p2-q16',
            type: 'tfng',
            prompt: 'Fire drills at the company are announced to staff beforehand.',
            answer: 'false',
            explanation:
              'The Health and Safety section says fire drills "are not announced in advance." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: All new employees begin on a _______-month probation period.',
            acceptableAnswers: ['six', '6'],
            explanation:
              'The Probation section states "All new employees begin on a six-month probation period." The answer is "six" (the number 6 is also accepted).',
          },
          {
            id: 'rd-gen-011-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: No more than _______ members of a team may be on leave at the same time.',
            acceptableAnswers: ['two', '2'],
            explanation:
              'The Requesting Leave section says "No more than two members of a team may be on leave at the same time." The answer is "two" (the number 2 is also accepted).',
          },
          {
            id: 'rd-gen-011-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A doctor’s note is needed for any sickness absence longer than _______ days.',
            acceptableAnswers: ['seven', '7'],
            explanation:
              'The Requesting Leave section says that "for any absence longer than seven days, provide a doctor’s note." The answer is "seven" (the number 7 is also accepted).',
          },
          {
            id: 'rd-gen-011-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Every accident, however minor, must be reported in the _______ kept at reception.',
            acceptableAnswers: ['accident book'],
            explanation:
              'The Health and Safety section says to "Report every accident, however minor, in the accident book kept at reception." The missing words are "accident book".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - the benefits of volunteering ───
      // Six labelled paragraphs (A-F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B-F and is worth 5 marks.
      {
        id: 'rd-gen-011-p3',
        title: 'Giving Time: The Quiet Rewards of Volunteering',
        body: `Paragraph A
Ask people why they volunteer and many will talk about wanting to help others, to repay a kindness, or to give something back to a place that has shaped their lives. All of this is true, and the work that volunteers do - staffing food banks, coaching children, sitting with the lonely, clearing rivers - keeps countless services running that no budget could otherwise afford. Yet there is another side to the story that is less often told: the people who give their time tend to gain a great deal in return, and not always the things they expected.

Paragraph B
Volunteering takes a surprising variety of forms, and the picture of an unpaid worker rattling a collection tin captures only a small part of it. Some roles are hands-on and physical, such as planting trees or sorting donations in a charity warehouse. Others draw on professional skills: an accountant might keep the books for a small charity, a designer might build its website, a retired teacher might help adults learn to read. A growing number of roles can even be done from home, from translating documents to answering a support line, which opens the door to people who cannot easily travel. There is, in short, something to suit almost anyone.

Paragraph C
For those who are not sure where to begin, the path is more straightforward than it looks. Most towns have a volunteer centre, online or on the high street, that matches people to local opportunities and asks only a few questions about your interests and the time you can spare. It is worth being honest about that time: a cause you care about will benefit far more from two reliable hours a week than from a burst of enthusiasm that fades within a month. Many organisations will also let you try a role once or twice before you commit, so that both sides can see whether it is a good fit.

Paragraph D
The benefits to the volunteer are real and well documented. Studies have repeatedly found that people who volunteer report lower levels of stress and a greater sense of purpose than those who do not, and the effect appears strongest among older people, for whom regular volunteering can ease the isolation that sometimes follows retirement. Part of the reason is simple: helping others lifts the mood and turns attention outward, away from one's own worries. Part of it is the structure and the company that a regular commitment brings to the week.

Paragraph E
There are practical rewards too, particularly for those early in their working lives. A young person with little paid experience can use voluntary work to build a history of showing up, taking responsibility and working in a team - the very qualities an employer looks for. Volunteers often pick up concrete skills, from first aid to public speaking, and just as importantly they meet people outside their usual circle. More than a few have found that a voluntary role led, in time, to a paid job, either with the same organisation or through someone they met while doing it.

Paragraph F
None of this means that volunteering is without its difficulties, and it is fairer to newcomers to say so plainly. A role can ask more of you than you first imagined, and it is easy to take on too much and burn out, especially for those who find it hard to say no. The work can be emotional, particularly when you are supporting people in real distress. The best organisations know this and offer training, support and a clear limit to what any one person is asked to give. Approached sensibly, with honesty about your own limits, volunteering can be one of the most rewarding things a person ever chooses to do.`,
        questions: [
          {
            id: 'rd-gen-011-p3-q21',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. The honest difficulties to be aware of' },
              { key: 'ii', label: 'ii. Many different ways to give your time' },
              { key: 'iii', label: 'iii. How giving time benefits the volunteer’s wellbeing' },
              { key: 'iv', label: 'iv. Why charities are short of money' },
              { key: 'v', label: 'v. A career boost for those just starting out' },
              { key: 'vi', label: 'vi. Taking the first step' },
              { key: 'vii', label: 'vii. The history of charitable giving' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'ii' },
              { id: 'pC', text: 'Paragraph C', answer: 'vi' },
              { id: 'pD', text: 'Paragraph D', answer: 'iii' },
              { id: 'pE', text: 'Paragraph E', answer: 'v' },
              { id: 'pF', text: 'Paragraph F', answer: 'i' },
            ],
            explanation:
              'Paragraph B describes the "surprising variety of forms" volunteering takes - heading ii. Paragraph C advises "those who are not sure where to begin" and the volunteer centre - heading vi (taking the first step). Paragraph D reports lower stress and greater purpose among volunteers - heading iii (benefits to wellbeing). Paragraph E covers "practical rewards... for those early in their working lives" and routes to paid work - heading v (a career boost for those starting out). Paragraph F states the "difficulties" and burnout plainly - heading i. Headings iv (why charities are short of money) and vii (the history of charitable giving) are distractors that are not used.',
          },
          {
            id: 'rd-gen-011-p3-q22',
            type: 'mcq',
            prompt: 'What is the "less often told" side of the story mentioned in Paragraph A?',
            options: [
              'That charities could easily pay for the work themselves',
              'That volunteers tend to gain a great deal in return',
              'That most volunteers quickly give up',
              'That volunteering is mainly about rattling a collection tin',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says the side "less often told" is that "the people who give their time tend to gain a great deal in return." Option B matches.',
          },
          {
            id: 'rd-gen-011-p3-q23',
            type: 'mcq',
            prompt:
              'According to Paragraph B, what kind of volunteering "opens the door to people who cannot easily travel"?',
            options: [
              'Planting trees and sorting donations',
              'Keeping the books for a small charity',
              'Roles that can be done from home',
              'Rattling a collection tin in the street',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B says "A growing number of roles can even be done from home... which opens the door to people who cannot easily travel." Option C matches.',
          },
          {
            id: 'rd-gen-011-p3-q24',
            type: 'mcq',
            prompt: 'What advice does Paragraph C give about the time a person offers?',
            options: [
              'Offer as many hours as possible in the first week',
              'Be honest, as steady, reliable hours help more than short-lived enthusiasm',
              'Avoid telling the volunteer centre how much time you have',
              'Commit fully to a role before trying it at all',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says "It is worth being honest about that time," because a cause benefits more "from two reliable hours a week than from a burst of enthusiasm that fades." Option B matches.',
          },
          {
            id: 'rd-gen-011-p3-q25',
            type: 'mcq',
            prompt:
              'According to Paragraph D, among whom does the wellbeing effect of volunteering appear strongest?',
            options: [
              'Young people starting their first job',
              'People who work from home',
              'Older people, who may face isolation after retirement',
              'Professionals who use their work skills',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says the effect "appears strongest among older people, for whom regular volunteering can ease the isolation that sometimes follows retirement." Option C matches.',
          },
          {
            id: 'rd-gen-011-p3-q26',
            type: 'tfng',
            prompt: 'Some volunteering roles can be carried out without leaving home.',
            answer: 'true',
            explanation:
              'Paragraph B says "A growing number of roles can even be done from home, from translating documents to answering a support line." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-011-p3-q27',
            type: 'tfng',
            prompt: 'Volunteer centres charge a fee to match people to local opportunities.',
            answer: 'not-given',
            explanation:
              'Paragraph C says a volunteer centre "matches people to local opportunities and asks only a few questions," but says nothing about whether any fee is charged. The answer is Not Given.',
          },
          {
            id: 'rd-gen-011-p3-q28',
            type: 'tfng',
            prompt:
              'The article claims that volunteering never causes any difficulties for those who do it.',
            answer: 'false',
            explanation:
              'Paragraph F says plainly that volunteering is not "without its difficulties," noting burnout and emotional strain. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-011-p3-q29',
            type: 'tfng',
            prompt: 'Some people have gone on to find paid work through a voluntary role.',
            answer: 'true',
            explanation:
              'Paragraph E says "More than a few have found that a voluntary role led, in time, to a paid job." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-011-p3-q30b',
            type: 'tfng',
            prompt:
              'Paragraph F says the best organisations set a clear limit on what any one person is asked to give.',
            answer: 'true',
            explanation:
              'Paragraph F says the best organisations "offer training, support and a clear limit to what any one person is asked to give." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-011-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Studies have found that people who volunteer report lower levels of _______ than those who do not.',
            acceptableAnswers: ['stress'],
            explanation:
              'Paragraph D says volunteers "report lower levels of stress and a greater sense of purpose." The missing word is "stress".',
          },
          {
            id: 'rd-gen-011-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Many organisations let a person try a role once or twice before they _______.',
            acceptableAnswers: ['commit'],
            explanation:
              'Paragraph C says "Many organisations will also let you try a role once or twice before you commit." The missing word is "commit".',
          },
        ],
      },
    ],
  },
]
