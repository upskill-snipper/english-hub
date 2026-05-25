// ─── IELTS General Training (GT) Reading — practice item bank (Set 12) ──────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary/note completion, and Matching). Framed as "IELTS
// preparation" only — no official affiliation is implied. General Training.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, timetables, advertise-
// ments, instructions) and WORKPLACE texts (handbooks, policies, programmes),
// plus one longer general-interest article. This file ships ONE complete,
// carefully-checked GT test scaled to a full sitting (~40 marks):
//   • Section 1 — a leisure-centre class timetable + notice covering class
//     times, booking, what to bring and the cancellation policy. Includes a
//     Matching (features) question worth 5 marks asking which class each
//     statement describes; options may be reused.
//   • Section 2 — a workplace extract from a company internet & email
//     acceptable-use policy (permitted use, monitoring, passwords, reporting).
//   • Section 3 — a general-interest article on the benefits of learning a
//     language as an adult. Includes a Matching (headings) question covering
//     paragraphs B–F with two distractor headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-012-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_12: ReadingTest[] = [
  {
    id: 'rd-general-012',
    title: 'General Training Reading — Practice Test 12',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL — leisure-centre class timetable + notice.
      // A Matching (features) question (5 marks) asks which of the five classes
      // each statement describes; options may be reused.
      {
        id: 'rd-gen-012-p1',
        title: 'Riverside Leisure Centre: Term Class Timetable & Notice',
        body: `PART 1 — RIVERSIDE LEISURE CENTRE: NOTICE FOR THE SPRING TERM

The spring term of group classes begins on Monday the sixth of April and runs for ten weeks. All classes are held in the studio on the upper floor, except for swimming, which takes place in the main pool. Please read this notice carefully, as several rules have changed since last term.

HOW TO BOOK
Every class must be booked in advance; we no longer accept people who simply turn up at the door. Members may book online up to fourteen days ahead, while non-members must book by telephone and may book only seven days ahead. A place is held for you until five minutes before the class starts, after which it may be given to someone on the waiting list. You may hold no more than three future bookings at any one time.

WHAT TO BRING
For all studio classes, bring your own water bottle and a small towel; mats are provided and need not be brought from home. Wear soft indoor shoes or clean trainers, as outdoor footwear is not allowed in the studio. For the swimming class, a swimming cap must be worn, and these are sold at reception if you do not have one. Lockers in the changing rooms take a returnable one-pound coin.

IF YOU NEED TO CANCEL
If you cannot attend a class you have booked, please cancel it at least four hours beforehand, either online or by telephone, so that your place can be offered to someone else. Members who fail to cancel three times in a single term will lose the right to book online for the rest of that term and must book by telephone instead. There is no charge for cancelling in good time.

PART 2 — SPRING TERM CLASS TIMETABLE

Five group classes run this term. Each is described below.

CLASS 1 — Morning Yoga
A gentle class suitable for complete beginners, held on Tuesday and Friday at 7 a.m. The pace is slow and the focus is on breathing and stretching. Please arrive ten minutes early, as latecomers cannot be admitted once the relaxation has begun. The class lasts one hour.

CLASS 2 — Circuit Training
A fast, energetic workout for those who already exercise regularly; it is not recommended for first-timers. It runs on Monday and Thursday evenings at 6 p.m. and lasts forty-five minutes. The instructor sets each station to your own level, so you work as hard as you choose.

CLASS 3 — Parent and Baby Movement
A relaxed session for parents and carers with babies under one year old. Held on Wednesday mornings at half past nine, it combines gentle exercise with songs and play. Babies must stay with their carer at all times, and there is space for only twelve pairs.

CLASS 4 — Lane Swimming Skills
A coached session in the main pool for adults who can already swim one length unaided. It is held on Tuesday and Thursday at 8 p.m. The coach works on improving your stroke rather than on teaching you to swim from the beginning. A swimming cap is required.

CLASS 5 — Over-60s Keep Fit
A friendly, low-impact class designed for older adults, held on Monday and Friday afternoons at 2 p.m. Chairs are available for any exercise you prefer to do seated, and the first session of the term is free so that you can try it before booking the rest.`,
        questions: [
          {
            id: 'rd-gen-012-p1-q1',
            type: 'tfng',
            prompt: 'People can join a class by turning up at the door without booking.',
            answer: 'false',
            explanation:
              'The How to Book section says "we no longer accept people who simply turn up at the door" and that every class must be booked in advance. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p1-q2',
            type: 'tfng',
            prompt: 'Members may book classes further in advance than non-members.',
            answer: 'true',
            explanation:
              'The How to Book section says members may book "up to fourteen days ahead," while non-members "may book only seven days ahead." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-012-p1-q3',
            type: 'tfng',
            prompt: 'You must bring your own exercise mat to studio classes.',
            answer: 'false',
            explanation:
              'The What to Bring section says "mats are provided and need not be brought from home." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p1-q4',
            type: 'tfng',
            prompt: 'There is a charge for cancelling a class in good time.',
            answer: 'false',
            explanation:
              'The If You Need to Cancel section states "There is no charge for cancelling in good time." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p1-q5',
            type: 'mcq',
            prompt: 'What happens if a member fails to cancel a booking three times in one term?',
            options: [
              'They are charged a fee for each missed class',
              'They lose the right to book online for the rest of that term',
              'They are removed from the centre altogether',
              'They must pay a deposit before their next booking',
            ],
            correctIndex: 1,
            explanation:
              'The If You Need to Cancel section says such members "will lose the right to book online for the rest of that term and must book by telephone instead." Option B is correct.',
          },
          {
            id: 'rd-gen-012-p1-q6',
            type: 'mcq',
            prompt: 'What is required to use a locker in the changing rooms?',
            options: [
              'A swimming cap',
              'A small towel',
              'A returnable one-pound coin',
              'A membership card',
            ],
            correctIndex: 2,
            explanation:
              'The What to Bring section says "Lockers in the changing rooms take a returnable one-pound coin." Option C matches.',
          },
          {
            id: 'rd-gen-012-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A booked place is held for you until _______ minutes before the class starts.',
            acceptableAnswers: ['five', '5'],
            explanation:
              'The How to Book section says "A place is held for you until five minutes before the class starts." The answer is "five" (the number 5 is also accepted).',
          },
          {
            id: 'rd-gen-012-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A booked class should be cancelled at least _______ hours beforehand.',
            acceptableAnswers: ['four', '4'],
            explanation:
              'The If You Need to Cancel section says to "cancel it at least four hours beforehand." The answer is "four" (the number 4 is also accepted).',
          },
          {
            id: 'rd-gen-012-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the five classes, 1–5. For each statement below, choose the class it describes. Write the correct number, 1–5. (Each class may be chosen more than once.)',
            options: [
              { key: '1', label: 'Class 1 — Morning Yoga' },
              { key: '2', label: 'Class 2 — Circuit Training' },
              { key: '3', label: 'Class 3 — Parent and Baby Movement' },
              { key: '4', label: 'Class 4 — Lane Swimming Skills' },
              { key: '5', label: 'Class 5 — Over-60s Keep Fit' },
            ],
            items: [
              {
                id: 'i1',
                text: 'Latecomers cannot be let in once it has begun.',
                answer: '1',
              },
              {
                id: 'i2',
                text: 'It is the only listed class that takes place in the pool.',
                answer: '4',
              },
              {
                id: 'i3',
                text: 'It is not recommended for people who are new to exercise.',
                answer: '2',
              },
              {
                id: 'i4',
                text: 'Its first session of the term can be tried free of charge.',
                answer: '5',
              },
              {
                id: 'i5',
                text: 'Places are limited to a fixed number of carer-and-child pairs.',
                answer: '3',
              },
            ],
            explanation:
              'i1: Class 1 (Morning Yoga) states "latecomers cannot be admitted once the relaxation has begun." i2: Class 4 (Lane Swimming Skills) is the only class held "in the main pool." i3: Class 2 (Circuit Training) "is not recommended for first-timers." i4: Class 5 (Over-60s Keep Fit) offers that "the first session of the term is free." i5: Class 3 (Parent and Baby Movement) has "space for only twelve pairs."',
          },
        ],
      },
      // ── Section 2: WORKPLACE — internet & email acceptable-use policy ───────
      {
        id: 'rd-gen-012-p2',
        title: 'Acceptable Use Policy: Company Internet and Email',
        body: `This extract from the staff handbook sets out how the company's internet connection, email accounts and devices may be used. It applies to everyone who is given a login, including temporary staff and contractors. By using a company account you agree to these rules; if anything is unclear, ask the IT help desk before you act, not afterwards.

PERMITTED USE
Company systems are provided mainly for work. We do allow reasonable personal use — for example, reading the news at lunchtime or sending a short private email — provided it is occasional, does not interfere with your duties, and does not cost the company money. Some activities are never allowed on company equipment: downloading films or music, running a private business, gambling, and visiting sites that are offensive or illegal. Streaming video for entertainment is also not permitted during working hours, as it slows the connection for everyone.

MONITORING
Staff should not expect their use of company systems to be private. We keep automatic records of the websites that are visited and the emails that are sent and received, and these records may be examined if there is a good reason, such as a security alert or an investigation into misuse. We do not read the content of personal messages as a matter of routine, and any check of an individual's activity must first be approved by a manager. Records are kept for twelve months and are then deleted.

PASSWORDS
Your password is the key to your account, and you are responsible for keeping it secret. Never write it down where others can see it, and never share it with a colleague, not even with your own manager; if someone genuinely needs access to your files while you are away, the IT help desk can arrange this properly. Choose a password of at least twelve characters that you do not use for any personal account, and change it at once if you think someone else may have learned it. The system will, in any case, ask you to set a new password every ninety days.

REPORTING PROBLEMS
If you receive a suspicious email — for instance, one that asks for your password or urges you to click a link in a hurry — do not reply and do not click anything. Instead, forward it to the help desk and then delete it. Report a lost or stolen laptop or phone immediately, by telephone if it is outside office hours, so that the device can be locked remotely. Acting quickly limits the harm; a problem reported within the hour can often be contained, while one hidden for a day may not.`,
        questions: [
          {
            id: 'rd-gen-012-p2-q10',
            type: 'mcq',
            prompt: 'Which activity does the policy say is allowed on company systems?',
            options: [
              'Running a private business',
              'Occasional, reasonable personal use such as a short private email',
              'Streaming video for entertainment during working hours',
              'Downloading films and music',
            ],
            correctIndex: 1,
            explanation:
              'The Permitted Use section allows "reasonable personal use... provided it is occasional," giving "sending a short private email" as an example, while the other options are listed as never allowed. Option B is correct.',
          },
          {
            id: 'rd-gen-012-p2-q11',
            type: 'mcq',
            prompt: 'Before an individual employee’s activity is checked, what must happen?',
            options: [
              'The employee must give written consent',
              'The records must be older than twelve months',
              'A manager must first approve the check',
              'The IT help desk must delete the records',
            ],
            correctIndex: 2,
            explanation:
              'The Monitoring section says "any check of an individual’s activity must first be approved by a manager." Option C matches.',
          },
          {
            id: 'rd-gen-012-p2-q12',
            type: 'mcq',
            prompt: 'What does the policy tell staff to do with a suspicious email?',
            options: [
              'Reply to it to find out who sent it',
              'Click the link to see where it leads',
              'Forward it to the help desk and then delete it',
              'Keep it in the inbox for twelve months',
            ],
            correctIndex: 2,
            explanation:
              'The Reporting Problems section says "do not reply and do not click anything. Instead, forward it to the help desk and then delete it." Option C is correct.',
          },
          {
            id: 'rd-gen-012-p2-q13',
            type: 'tfng',
            prompt:
              'Employees should expect their use of company systems to be completely private.',
            answer: 'false',
            explanation:
              'The Monitoring section states "Staff should not expect their use of company systems to be private." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p2-q14',
            type: 'tfng',
            prompt: 'It is acceptable to share your password with your own manager.',
            answer: 'false',
            explanation:
              'The Passwords section says "never share it with a colleague, not even with your own manager." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p2-q15',
            type: 'tfng',
            prompt:
              'The company reads the content of all personal messages as a matter of routine.',
            answer: 'false',
            explanation:
              'The Monitoring section says "We do not read the content of personal messages as a matter of routine." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p2-q16',
            type: 'tfng',
            prompt: 'The acceptable-use policy applies to temporary staff and contractors.',
            answer: 'true',
            explanation:
              'The opening paragraph says the policy "applies to everyone who is given a login, including temporary staff and contractors." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-012-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Monitoring records are kept for _______ months and then deleted.',
            acceptableAnswers: ['twelve', '12'],
            explanation:
              'The Monitoring section says "Records are kept for twelve months and are then deleted." The answer is "twelve" (the number 12 is also accepted).',
          },
          {
            id: 'rd-gen-012-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A password should be at least _______ characters long.',
            acceptableAnswers: ['twelve', '12'],
            explanation:
              'The Passwords section says to "Choose a password of at least twelve characters." The answer is "twelve" (the number 12 is also accepted).',
          },
          {
            id: 'rd-gen-012-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: The system asks staff to set a new password every _______ days.',
            acceptableAnswers: ['ninety', '90'],
            explanation:
              'The Passwords section says the system "will... ask you to set a new password every ninety days." The answer is "ninety" (the number 90 is also accepted).',
          },
          {
            id: 'rd-gen-012-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: A suspicious email should be reported by forwarding it to the _______.',
            acceptableAnswers: ['help desk'],
            explanation:
              'The Reporting Problems section says to "forward it to the help desk and then delete it." The missing words are "help desk".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST — learning a language as an adult.
      // Six labelled paragraphs (A–F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B–F and is worth 5 marks.
      {
        id: 'rd-gen-012-p3',
        title: 'Never Too Late: The Rewards of Learning a Language as an Adult',
        body: `Paragraph A
There is a stubborn belief that languages are best left to the young, and that an adult who takes up French or Mandarin has somehow missed the boat. It is easy to see where the idea comes from: children seem to soak up speech effortlessly, while grown-ups labour over verb tables and still stumble over their words. Yet the science tells a more encouraging story, and so do the millions of adults who have learned a second language well, often beginning long after they left school. The picture is not that adults cannot learn, but that they learn differently.

Paragraph B
The most persistent myth is that there is a fixed "window" after which the brain can no longer take in a new language. It is true that very young children pick up a flawless accent more easily, and that pronunciation is the hardest area for an older learner to perfect. But in almost every other respect, adults have the advantage. They already understand how language works, can study grammar deliberately, and can use their wider knowledge of the world to guess meaning from context. Far from being shut out, the adult brain simply approaches the task with different tools.

Paragraph C
Those tools come with real cognitive rewards. Researchers studying people who speak more than one language have found that the mental effort of switching between them appears to strengthen the parts of the brain that manage attention and self-control. Some long-term studies suggest that this lifelong exercise may even delay the onset of memory problems in later life by several years. Learning a language is not a cure for anything, but as a way of keeping the mind active and challenged, few hobbies ask so much of it or give back so much in return.

Paragraph D
The benefits are not only private and mental; they are also deeply social. A traveller who can order a meal, ask for directions or exchange a few sentences with a stranger sees a country from the inside rather than through glass. Closer to home, learning the language of a neighbour or a colleague is a powerful way of showing respect and building trust. Many adult learners say that the friendships formed in a weekly class, united by the shared struggle of getting the words out, matter to them as much as the language itself.

Paragraph E
So how should a busy adult go about it? The single most important habit is regularity: twenty minutes every day will carry you further than a three-hour session once a fortnight, because a language is built slowly, by frequent contact. It also helps to make the learning enjoyable, by choosing material you actually like — a favourite kind of music, a cookery channel, a series with subtitles — so that practice does not feel like a chore. Above all, speak from the very first week, however badly; the learners who progress are the ones who are willing to make mistakes out loud.

Paragraph F
None of this should suggest that learning a language as an adult is quick or easy. Progress can feel painfully slow, and there will be long stretches when you seem to make none at all; these plateaus are normal and pass with persistence. The goal, too, is worth keeping modest and human: very few adult learners will ever be mistaken for a native speaker, and that was never the point. To be understood, to make a connection, to open a door that was previously closed — these are prizes well within reach of anyone prepared to keep at it.`,
        questions: [
          {
            id: 'rd-gen-012-p3-q21',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A–F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i–vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. The honest truth about effort and pace' },
              { key: 'ii', label: 'ii. Practical habits that make learning work' },
              { key: 'iii', label: 'iii. Sharper thinking and a healthier mind' },
              { key: 'iv', label: 'iv. Why schools should teach more languages' },
              { key: 'v', label: 'v. Connecting with other people' },
              { key: 'vi', label: 'vi. Exposing the myth of the closing window' },
              { key: 'vii', label: 'vii. The best age to begin a language' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'vi' },
              { id: 'pC', text: 'Paragraph C', answer: 'iii' },
              { id: 'pD', text: 'Paragraph D', answer: 'v' },
              { id: 'pE', text: 'Paragraph E', answer: 'ii' },
              { id: 'pF', text: 'Paragraph F', answer: 'i' },
            ],
            explanation:
              'Paragraph B attacks "the most persistent myth... that there is a fixed window" — heading vi. Paragraph C describes "cognitive rewards" and a mind kept "active and challenged" — heading iii (sharper thinking and a healthier mind). Paragraph D says the benefits are "deeply social" and about friendships and trust — heading v (connecting with other people). Paragraph E answers "how should a busy adult go about it?" with habits like regularity — heading ii (practical habits that make learning work). Paragraph F states plainly that learning is not "quick or easy" and addresses pace — heading i. Headings iv (why schools should teach more languages) and vii (the best age to begin a language) are distractors that are not used.',
          },
          {
            id: 'rd-gen-012-p3-q22',
            type: 'mcq',
            prompt: 'According to Paragraph A, what does the science suggest about adult learners?',
            options: [
              'That adults cannot learn a second language well',
              'That adults learn differently rather than being unable to learn',
              'That only children can ever become fluent',
              'That adults should not bother starting after school',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says "the picture is not that adults cannot learn, but that they learn differently." Option B matches.',
          },
          {
            id: 'rd-gen-012-p3-q23',
            type: 'mcq',
            prompt:
              'According to Paragraph B, in which single area do very young children have a clear advantage?',
            options: [
              'Studying grammar deliberately',
              'Guessing meaning from context',
              'Picking up a flawless accent and pronunciation',
              'Using a wide knowledge of the world',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B says young children "pick up a flawless accent more easily, and that pronunciation is the hardest area for an older learner to perfect," while adults hold the advantage elsewhere. Option C matches.',
          },
          {
            id: 'rd-gen-012-p3-q24',
            type: 'mcq',
            prompt: 'What do some long-term studies suggest, according to Paragraph C?',
            options: [
              'That bilingual people never develop memory problems',
              'That learning a language cures illness',
              'That the mental exercise may delay memory problems by several years',
              'That switching languages weakens attention',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C says studies "suggest that this lifelong exercise may even delay the onset of memory problems in later life by several years," while noting it "is not a cure." Option C is correct.',
          },
          {
            id: 'rd-gen-012-p3-q25',
            type: 'mcq',
            prompt: 'According to Paragraph E, what is "the single most important habit"?',
            options: [
              'Studying for three hours once a fortnight',
              'Regularity, such as twenty minutes every day',
              'Avoiding speaking until you are fluent',
              'Choosing only difficult study material',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says "The single most important habit is regularity: twenty minutes every day will carry you further than a three-hour session once a fortnight." Option B matches.',
          },
          {
            id: 'rd-gen-012-p3-q26',
            type: 'tfng',
            prompt:
              'The article says that pronunciation is the hardest area for an older learner to perfect.',
            answer: 'true',
            explanation:
              'Paragraph B states "pronunciation is the hardest area for an older learner to perfect." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-012-p3-q27',
            type: 'tfng',
            prompt: 'Learning a second language is described as a cure for memory problems.',
            answer: 'false',
            explanation:
              'Paragraph C says "Learning a language is not a cure for anything," only that it may delay memory problems. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p3-q28',
            type: 'tfng',
            prompt: 'Learning a language as an adult is a fast and easy process.',
            answer: 'false',
            explanation:
              'Paragraph F says plainly that learning a language as an adult is not "quick or easy" and that progress "can feel painfully slow." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-012-p3-q29',
            type: 'tfng',
            prompt: 'Online language classes are cheaper than lessons with a private tutor.',
            answer: 'not-given',
            explanation:
              'The article discusses methods, benefits and habits but says nothing about the cost of online classes compared with private tutors. The answer is Not Given.',
          },
          {
            id: 'rd-gen-012-p3-q30b',
            type: 'tfng',
            prompt:
              'According to the article, periods of seemingly no progress are a normal part of learning.',
            answer: 'true',
            explanation:
              'Paragraph F says there "will be long stretches when you seem to make none at all; these plateaus are normal and pass with persistence." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-012-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: According to Paragraph E, the learners who progress are willing to make _______ out loud.',
            acceptableAnswers: ['mistakes'],
            explanation:
              'Paragraph E says "the learners who progress are the ones who are willing to make mistakes out loud." The missing word is "mistakes".',
          },
          {
            id: 'rd-gen-012-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Switching between languages appears to strengthen the parts of the brain that manage attention and _______.',
            acceptableAnswers: ['self-control'],
            explanation:
              'Paragraph C says the effort of switching "appears to strengthen the parts of the brain that manage attention and self-control." The missing word is "self-control".',
          },
        ],
      },
    ],
  },
]
