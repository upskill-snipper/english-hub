// ─── IELTS General Training Reading — practice item bank (GT Set 2) ─────────
// ORIGINAL content written for The English Hub. These are NOT reproductions of
// any official IELTS past paper; every notice, handbook extract and article
// below is invented purely to practise the General Training Reading question
// formats (MCQ, True/False/Not Given, and sentence/summary completion).
// Framed as "IELTS preparation" only — no official affiliation is implied.
//
// GT Reading differs from Academic: instead of academic journal extracts, the
// texts are everyday/social (Section 1), workplace (Section 2) and a longer
// general-interest article (Section 3), with difficulty rising across sections.
// This test is deliberately DISTINCT from sibling GT tests in topic and source.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_2: ReadingTest[] = [
  {
    id: 'gt-rd-s2-001',
    title: 'General Training Reading — Practice Test (Set 2)',
    track: 'general',
    estimatedMinutes: 20,
    passages: [
      // ── Section 1: social survival — community notices + leisure listings ──
      {
        id: 'gt-rd-s2-001-p1',
        title: 'Riverside Community Centre — Notices and What’s On',
        body: `WEEKEND MARKET — NEW STALLHOLDERS WELCOME
The Saturday market in the main hall is now open to new stallholders. A standard table costs £12 for the morning session (8 a.m.–1 p.m.) or £18 for the full day. Tables must be booked by the Thursday beforehand at the reception desk; bookings cannot be taken over the telephone. Stallholders selling hot food must bring their own fire blanket and will be asked to set up away from the children's play corner. Please note that the car park behind the hall is reserved for traders only on Saturdays.

POTTERY CLASSES — SPRING TERM
Our popular evening pottery course returns on 6 April and runs for eight weeks. Beginners are welcome; no experience is needed, and all tools and clay are provided. The fee of £80 covers the full term but does not include the cost of firing finished pieces in the kiln, which is charged separately at £2 per item. Places are limited to ten people per class, so early booking is advised. Anyone who misses a session may attend the equivalent class in the daytime group at no extra charge.

LOST PROPERTY
Items left at the centre are kept for one month and then donated to a local charity. The lost property box is held in the office, not at reception. Please describe any missing item to a member of staff rather than searching the box yourself.

MINIBUS HIRE
The centre's eight-seat minibus may be hired by local groups at weekends. The driver must be over 25 and hold a clean licence. Fuel is not included in the daily rate and the vehicle must be returned with a full tank.`,
        questions: [
          {
            id: 'gt-rd-s2-001-p1-q1',
            type: 'tfng',
            prompt:
              'New stallholders can reserve a market table by telephoning the reception desk.',
            answer: 'false',
            explanation:
              'The Weekend Market notice says tables must be booked at the reception desk and that "bookings cannot be taken over the telephone." Telephoning is specifically ruled out, so the statement is False.',
          },
          {
            id: 'gt-rd-s2-001-p1-q2',
            type: 'tfng',
            prompt:
              'People with no previous experience are allowed to join the spring pottery course.',
            answer: 'true',
            explanation:
              'The Pottery Classes notice states "Beginners are welcome; no experience is needed." This directly supports the statement, so it is True.',
          },
          {
            id: 'gt-rd-s2-001-p1-q3',
            type: 'tfng',
            prompt:
              'The pottery course fee includes the cost of firing finished pieces in the kiln.',
            answer: 'false',
            explanation:
              'The notice says the £80 fee "does not include the cost of firing finished pieces in the kiln, which is charged separately at £2 per item." Firing is an extra charge, so the statement is False.',
          },
          {
            id: 'gt-rd-s2-001-p1-q4',
            type: 'mcq',
            prompt: 'What should you do if you have lost an item at the centre?',
            options: [
              'Look through the lost property box yourself at reception',
              'Describe the item to a member of staff',
              'Wait one month and then collect it from a local charity',
              'Telephone the office to arrange a search',
            ],
            correctIndex: 1,
            explanation:
              'The Lost Property notice asks visitors to "describe any missing item to a member of staff rather than searching the box yourself." Option B matches; the box is in the office (not reception), and you are told not to search it yourself.',
          },
          {
            id: 'gt-rd-s2-001-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: To hire the minibus, the driver must be over 25 and hold a clean _______.',
            acceptableAnswers: ['licence', 'license'],
            explanation:
              'The Minibus Hire notice states the driver "must be over 25 and hold a clean licence." The required word is "licence" (the American spelling "license" is also accepted).',
          },
          {
            id: 'gt-rd-s2-001-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: A pottery student who misses a class may attend the equivalent _______ group in the daytime at no extra charge.',
            acceptableAnswers: ['daytime'],
            explanation:
              'The notice says anyone who misses a session "may attend the equivalent class in the daytime group at no extra charge." The word that fits the gap is "daytime".',
          },
        ],
      },
      // ── Section 2: workplace — a staff handbook / induction guide ──────────
      {
        id: 'gt-rd-s2-001-p2',
        title: 'New Staff Handbook — Working at Brightleaf Garden Centre',
        body: `WELCOME AND PROBATION
All new employees begin on a three-month probationary period. During this time your line manager will meet you each fortnight to review your progress and answer any questions. Your role is confirmed in writing once probation has been completed successfully; until then, either side may end the employment by giving one week's notice.

UNIFORM AND APPEARANCE
You will be issued with two branded polo shirts and a fleece on your first day. These remain the property of the company and must be returned if you leave. Closed-toe footwear is required at all times in the planting areas and the loading yard for safety reasons; sandals are not permitted there, although they may be worn in the office. Aprons for the till area are kept by the staff entrance and should be hung up at the end of each shift, not taken home.

BREAKS AND TIMEKEEPING
Staff working more than six hours are entitled to a paid break of thirty minutes. Breaks are taken in the staff room upstairs and not on the shop floor, so that customers are always attended to. If you are going to be late, telephone the duty manager before your shift starts; sending a text message is not sufficient.

REQUESTING TIME OFF
Holiday requests must be submitted through the online rota system at least two weeks in advance. During the busy spring period, from March to May, no more than two members of any team may be on leave at the same time, so requests are granted in the order they are received. Unplanned absence due to illness should be reported by telephone as early as possible, and a self-certification form completed on your return.`,
        questions: [
          {
            id: 'gt-rd-s2-001-p2-q7',
            type: 'tfng',
            prompt:
              'During the probationary period, either the employee or the company can end the employment with one week’s notice.',
            answer: 'true',
            explanation:
              'The Welcome and Probation section states that until probation is completed, "either side may end the employment by giving one week\'s notice." This matches the statement, so it is True.',
          },
          {
            id: 'gt-rd-s2-001-p2-q8',
            type: 'tfng',
            prompt:
              'Staff are allowed to take the branded uniform home permanently when they leave.',
            answer: 'false',
            explanation:
              'The Uniform section says the shirts and fleece "remain the property of the company and must be returned if you leave." Keeping them is not allowed, so the statement is False.',
          },
          {
            id: 'gt-rd-s2-001-p2-q9',
            type: 'mcq',
            prompt: 'Where are staff permitted to wear sandals?',
            options: [
              'In the planting areas',
              'In the loading yard',
              'In the office',
              'Anywhere, as long as they are comfortable',
            ],
            correctIndex: 2,
            explanation:
              'The Uniform section says closed-toe footwear is required in the planting areas and loading yard and that sandals "are not permitted there, although they may be worn in the office." Option C is correct.',
          },
          {
            id: 'gt-rd-s2-001-p2-q10',
            type: 'mcq',
            prompt: 'What should an employee do if they are going to be late for a shift?',
            options: [
              'Send a text message to the duty manager',
              'Telephone the duty manager before the shift starts',
              'Complete a self-certification form in advance',
              'Tell a colleague on the shop floor',
            ],
            correctIndex: 1,
            explanation:
              'The Breaks and Timekeeping section instructs staff to "telephone the duty manager before your shift starts; sending a text message is not sufficient." Option B is correct, and option A is explicitly rejected.',
          },
          {
            id: 'gt-rd-s2-001-p2-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Breaks must be taken in the staff room upstairs rather than on the shop _______.',
            acceptableAnswers: ['floor'],
            explanation:
              'The text says breaks "are taken in the staff room upstairs and not on the shop floor." The missing word is "floor".',
          },
          {
            id: 'gt-rd-s2-001-p2-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: During spring, holiday requests are granted in the _______ they are received.',
            acceptableAnswers: ['order they', 'the order'],
            explanation:
              'The Requesting Time Off section states that in the busy spring period "requests are granted in the order they are received." The phrase filling the gap is "order they" (here taken as the two words after "in the").',
          },
        ],
      },
      // ── Section 3: a longer general-interest article ───────────────────────
      {
        id: 'gt-rd-s2-001-p3',
        title: 'The Slow Comeback of the Public Library',
        body: `A decade ago, many commentators were ready to write the obituary of the public library. Why, they asked, would anyone walk to a building full of paper books when almost any text could be summoned to a screen in seconds? Funding was being cut in town after town, opening hours were shrinking, and a steady trickle of branches closed their doors for good. The library, it seemed, belonged to a vanishing world.

The numbers since then have told a more complicated story. While the borrowing of printed novels has indeed fallen in many places, overall visits to libraries that survived the cuts have in several regions begun to climb again. The reason has little to do with books in the traditional sense. People are coming through the doors for something the internet, for all its convenience, struggles to provide: a warm, quiet, public space that costs nothing to enter and asks nothing of those who use it.

Librarians describe the modern branch as less a warehouse for books than a kind of community living room. On a single weekday a library may host a job-search workshop in the morning, a parent-and-toddler reading group at lunchtime, and a class teaching older residents how to use a tablet in the afternoon. Many now lend out far more than books — board games, musical instruments, even tools and seeds. The shift reflects a recognition that what a community lacks is often not information, which is abundant, but a trusted place in which to gather.

This broadening of purpose has not been without tension. Some long-standing users complain that the hush they once valued has given way to noise, and that staff trained to recommend novels now spend their days helping people fill in forms or fix their phones. There is a fair question buried in the grumbling: if a library does everything, does it risk doing nothing especially well? Defenders answer that the institution has always adapted, and that a library which refused to change would simply be an emptier one.

Funding, however, remains precarious. A building that is busy is not necessarily a building that is safe, because the services that draw people in are rarely the ones that generate income, and councils under pressure look first at what can be measured. A reading group does not appear on a balance sheet. The challenge for the next decade, many in the profession argue, is to find ways of describing the library's value that capture what actually happens inside it — the quiet hour, the first job application, the lonely afternoon made less so — rather than simply counting the books that leave the shelves.`,
        questions: [
          {
            id: 'gt-rd-s2-001-p3-q13',
            type: 'mcq',
            prompt: 'According to the article, why are visits to surviving libraries rising again?',
            options: [
              'Because the borrowing of printed novels has increased sharply',
              'Because libraries offer a free, quiet public space to gather',
              'Because the internet has become more expensive to use',
              'Because councils have increased library funding',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph says people come for "a warm, quiet, public space that costs nothing to enter," and adds that the rise has "little to do with books in the traditional sense." Option B captures this; novel borrowing has fallen (not risen), and the other options are not given.',
          },
          {
            id: 'gt-rd-s2-001-p3-q14',
            type: 'tfng',
            prompt: 'The article says some modern libraries lend out items other than books.',
            answer: 'true',
            explanation:
              'The third paragraph states that many libraries "now lend out far more than books — board games, musical instruments, even tools and seeds." This supports the statement, so it is True.',
          },
          {
            id: 'gt-rd-s2-001-p3-q15',
            type: 'tfng',
            prompt:
              'Every librarian quoted in the article believes the move away from books is a mistake.',
            answer: 'not-given',
            explanation:
              'The article presents complaints from "some long-standing users" and replies from "defenders," but it does not report the opinions of every librarian, nor claim they all see the change as a mistake. There is no information to support this, so the answer is Not Given.',
          },
          {
            id: 'gt-rd-s2-001-p3-q16',
            type: 'mcq',
            prompt: 'What concern do some long-standing users raise about the modern library?',
            options: [
              'That it has become too quiet for group activities',
              'That it no longer lends any printed books at all',
              'That its broad range of services may mean nothing is done especially well',
              'That it charges too much for entry',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph raises the "fair question": "if a library does everything, does it risk doing nothing especially well?" Option C reflects this concern; the library is described as noisier, not quieter, and entry costs nothing.',
          },
          {
            id: 'gt-rd-s2-001-p3-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Librarians describe the modern branch as a kind of community _______.',
            acceptableAnswers: ['living room'],
            explanation:
              'The third paragraph describes the modern branch as "a kind of community living room." The two words filling the gap are "living room".',
          },
          {
            id: 'gt-rd-s2-001-p3-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: The article warns that library funding remains _______, because the services that attract people rarely generate income.',
            acceptableAnswers: ['precarious'],
            explanation:
              'The final paragraph opens "Funding, however, remains precarious" and explains that popular services "are rarely the ones that generate income." The required word is "precarious".',
          },
        ],
      },
    ],
  },
]
