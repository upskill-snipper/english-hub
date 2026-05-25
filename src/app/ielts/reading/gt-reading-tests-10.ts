// ─── IELTS General Training (GT) Reading - practice item bank (Set 10) ──────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/note completion, and Matching). Framed as "IELTS preparation"
// only - no official affiliation is implied. General Training track.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (Section 1), WORKPLACE texts
// (Section 2) and one longer GENERAL-INTEREST article (Section 3). This file
// ships ONE complete, carefully-checked GT test:
//   Section 1 - a sports-club membership guide + a kerbside recycling notice
//   Section 2 - a staff data-security training guide (incl. a Matching question)
//   Section 3 - a general-interest article on the benefits of walking
// Total: 40 marks. Every gap answer appears verbatim in its passage and obeys
// the stated word limit; every matching item's answer is a valid option key.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_10: ReadingTest[] = [
  {
    id: 'rd-general-010',
    title: 'General Training Reading - Practice Test 10',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL ───────────────────────────────────────
      // Two short real-world texts: a sports-club membership guide and a
      // kerbside recycling / collection notice. 13 questions (13 marks).
      {
        id: 'rd-general-010-p1',
        title: 'Oakmere Sports Club - Membership Guide & Lindale Kerbside Collection Notice',
        body: `TEXT A - OAKMERE SPORTS CLUB: A GUIDE FOR NEW MEMBERS

Thank you for joining Oakmere Sports Club. This guide explains how your membership works so that you can make the most of the courts, the gym and the swimming pool from your very first week.

JOINING AND PAYMENT
There is no joining fee for members who pay by monthly direct debit; a single one-off payment of £30 applies only to those who choose to pay for a full year in advance. Monthly membership costs £34 for an adult and £20 for a junior aged between eight and seventeen. Children under eight cannot hold their own membership but may use the pool free of charge when accompanied by a paying adult. Your membership begins on the day your first payment clears, not on the day you complete the form.

YOUR MEMBERSHIP CARD
Every member is issued with a plastic membership card that must be tapped on the reader at the main entrance on each visit. The card is the property of the club and remains so for as long as you are a member. If your card is lost or damaged, reception will print a replacement, for which a charge of £5 is made. Please do not lend your card to anyone else: cards are checked against our records, and a card used by a non-member may be withdrawn.

BOOKING COURTS AND CLASSES
Tennis and squash courts may be booked up to seven days ahead, either through the club's app or by telephoning reception. Fitness classes open for booking five days before they take place. If you are unable to attend a class you have booked, please cancel at least four hours beforehand; members who fail to cancel three times in a single month will be unable to book classes for the following two weeks.

USING THE POOL
The pool is reserved for lane swimming before 9.00 a.m. on weekdays. Family sessions, during which children may use floats and other equipment, run from 4.00 p.m. to 6.00 p.m. on weekends only. For reasons of hygiene, swimmers are asked to shower before entering the water.

TEXT B - LINDALE DISTRICT COUNCIL: KERBSIDE COLLECTION NOTICE

From Monday 1 June, the way your household waste is collected in the Lindale district will change. Please read this notice carefully and keep it for reference.

YOUR NEW BINS
Each household will receive three containers: a green bin for garden waste, a blue bin for paper, card and clean plastic, and a small brown caddy for food waste. Your existing black bin will continue to be used for anything that cannot be recycled. The new containers will be delivered during the last week of May. If you have not received them by 31 May, telephone the council rather than putting the wrong items in your black bin.

WHAT GOES WHERE
The blue bin should contain only dry, clean recycling. Cardboard must be flattened, and please remember to rinse bottles and jars before placing them inside. Greasy pizza boxes, drinking glasses and plastic bags cannot be recycled in the blue bin and should go in the black bin instead. Food waste, including bones and small amounts of cooked food, goes in the brown caddy, which is lined with the bags provided.

COLLECTION DAYS
The blue bin and the brown caddy are emptied every week. The green garden-waste bin and the black bin are collected on alternate weeks, so each is emptied once a fortnight. Please place your bins at the kerb by 7.00 a.m. on your collection day, with the handles facing the road. Bins put out the night before may be removed by the council if they cause an obstruction. Garden-waste collection is suspended for the whole of January and February, when no green bins are emptied.`,
        questions: [
          {
            id: 'rd-gen-010-p1-q1',
            type: 'tfng',
            prompt: 'Members who pay monthly by direct debit do not have to pay a joining fee.',
            answer: 'true',
            explanation:
              'Text A states that "There is no joining fee for members who pay by monthly direct debit," and that the £30 one-off payment applies only to those paying a year in advance. The statement is therefore True.',
          },
          {
            id: 'rd-gen-010-p1-q2',
            type: 'tfng',
            prompt: 'A child of six can hold a junior membership in their own name.',
            answer: 'false',
            explanation:
              'Junior membership is for those "aged between eight and seventeen," and "Children under eight cannot hold their own membership." A six-year-old is under eight, so the statement is False.',
          },
          {
            id: 'rd-gen-010-p1-q3',
            type: 'tfng',
            prompt: 'Your membership starts on the day you fill in the form.',
            answer: 'false',
            explanation:
              'The guide says membership "begins on the day your first payment clears, not on the day you complete the form." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-010-p1-q4',
            type: 'mcq',
            prompt: 'What happens if a member loses their membership card?',
            options: [
              'They are given a new card free of charge',
              'They must pay £5 for a replacement card',
              'Their membership is cancelled immediately',
              'They can no longer enter the building',
            ],
            correctIndex: 1,
            explanation:
              'The text says that if a card "is lost or damaged, reception will print a replacement, for which a charge of £5 is made." Option B is correct.',
          },
          {
            id: 'rd-gen-010-p1-q5',
            type: 'mcq',
            prompt: 'How far in advance can a member book a squash court?',
            options: [
              'Up to four hours ahead',
              'Up to five days ahead',
              'Up to seven days ahead',
              'Only on the day of play',
            ],
            correctIndex: 2,
            explanation:
              'The booking section states that "Tennis and squash courts may be booked up to seven days ahead." Five days (B) refers to fitness classes, not courts. Option C is correct.',
          },
          {
            id: 'rd-gen-010-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from Text A: A member who fails to cancel a booked class three times in one month cannot book classes for the next _______ weeks.',
            acceptableAnswers: ['two', '2'],
            explanation:
              'The text says such members "will be unable to book classes for the following two weeks." The answer is "two" (the number 2 is also accepted).',
          },
          {
            id: 'rd-gen-010-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from Text A: Before entering the water, swimmers are asked to _______ for reasons of hygiene.',
            acceptableAnswers: ['shower'],
            explanation:
              'The "Using the pool" section states that "swimmers are asked to shower before entering the water." The single missing word is "shower".',
          },
          {
            id: 'rd-gen-010-p1-q8',
            type: 'tfng',
            prompt: 'Households should put greasy pizza boxes in the blue bin.',
            answer: 'false',
            explanation:
              'Text B lists "Greasy pizza boxes" among the items that "cannot be recycled in the blue bin and should go in the black bin instead." The statement is therefore False.',
          },
          {
            id: 'rd-gen-010-p1-q9',
            type: 'tfng',
            prompt: 'The brown caddy may be used for small amounts of cooked food.',
            answer: 'true',
            explanation:
              'The notice says food waste "including bones and small amounts of cooked food, goes in the brown caddy." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-010-p1-q10',
            type: 'mcq',
            prompt: 'What should a resident do if their new bins have not arrived by 31 May?',
            options: [
              'Use the black bin for all their waste until the bins arrive',
              'Telephone the council',
              'Collect the bins from the council depot',
              'Wait until the first collection day in June',
            ],
            correctIndex: 1,
            explanation:
              'The notice advises that if the containers have not arrived by 31 May, residents should "telephone the council rather than putting the wrong items in your black bin." Option B is correct.',
          },
          {
            id: 'rd-gen-010-p1-q11',
            type: 'mcq',
            prompt: 'How often is the green garden-waste bin emptied?',
            options: [
              'Every week',
              'Once a fortnight',
              'Twice a month in summer only',
              'Every day during the growing season',
            ],
            correctIndex: 1,
            explanation:
              'The text says the green bin and the black bin "are collected on alternate weeks, so each is emptied once a fortnight." Option B is correct; weekly collection (A) applies to the blue bin and brown caddy.',
          },
          {
            id: 'rd-gen-010-p1-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE number from Text B: Residents must place their bins at the kerb by _______ a.m. on the collection day.',
            acceptableAnswers: ['7.00', '7', '7am', '7.00am'],
            explanation:
              'The "Collection days" section instructs residents to "place your bins at the kerb by 7.00 a.m. on your collection day." The answer is the time "7.00" (a.m.).',
          },
          {
            id: 'rd-gen-010-p1-q13',
            type: 'tfng',
            prompt: 'Garden-waste bins are emptied throughout the whole year.',
            answer: 'false',
            explanation:
              'The notice states that "Garden-waste collection is suspended for the whole of January and February, when no green bins are emptied." Because there are two months with no collection, the statement is False.',
          },
        ],
      },
      // ── Section 2: WORKPLACE ───────────────────────────────────────────────
      // A staff data-security training guide. 13 questions (13 marks), including
      // ONE Matching question (variant 'features', 5 items = 5 marks).
      {
        id: 'rd-general-010-p2',
        title: 'Staff Data-Security Training Guide',
        body: `This guide forms part of the data-security training that every member of staff must complete within their first month. It explains, in plain terms, how to keep the information we hold safe. Protecting the personal details of our customers and colleagues is a duty shared by everyone, not only by the IT team.

CHOOSING AND PROTECTING PASSWORDS
A strong password is your first line of defence. We require every work password to be at least twelve characters long and to combine letters, numbers and symbols. You should never reuse a password that you also use for a personal account, and you must change your work password the moment you suspect that someone else may know it. Writing passwords on paper or storing them in an unprotected file is not permitted; if you struggle to remember them, the approved password manager will store them securely on your behalf.

HANDLING EMAILS AND LINKS
Most security incidents begin with a single careless click. Be cautious with any email that asks you to act urgently, that comes from an address you do not recognise, or that contains spelling mistakes in what claims to be an official message. Never open an attachment you were not expecting, and hover over a link to check where it really leads before clicking. If an email seems suspicious, do not forward it to colleagues to ask their opinion; instead, report it using the "Report Phishing" button in your mail program, which sends it straight to the security team.

WORKING AWAY FROM THE OFFICE
When you work in a public place such as a train or a cafe, be aware that others may be able to see your screen. A privacy filter, available free from the IT helpdesk, makes the screen difficult to read from an angle. Never connect to confidential systems over public wireless networks without first switching on the company VPN, which encrypts the information travelling to and from your device. Paper documents containing personal data must not be left on view and should be carried in a closed bag.

REPORTING A PROBLEM
If you lose a device, send information to the wrong person, or believe that data may have been seen by someone who should not have access to it, you must report it within one hour of noticing. Reports are made to the data-protection officer, and you will never be blamed for raising the alarm in good faith. The sooner a problem is known, the sooner it can be contained; delay almost always makes the consequences worse.

DISPOSING OF INFORMATION
Information must not be kept for longer than it is needed. Paper records that are no longer required should be placed in the locked confidential-waste bins, never in an ordinary recycling bin. When equipment such as a laptop or phone reaches the end of its life, it must be returned to the IT team, who will wipe it properly; staff must not sell, give away or throw out any device themselves.`,
        questions: [
          {
            id: 'rd-gen-010-p2-q14',
            type: 'tfng',
            prompt:
              'According to the guide, keeping information safe is the responsibility of the IT team alone.',
            answer: 'false',
            explanation:
              'The opening paragraph states that protecting information "is a duty shared by everyone, not only by the IT team." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-010-p2-q15',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE number from the passage: A work password must be at least _______ characters long.',
            acceptableAnswers: ['twelve', '12'],
            explanation:
              'The passwords section says "We require every work password to be at least twelve characters long." The answer is "twelve" (the number 12 is also accepted).',
          },
          {
            id: 'rd-gen-010-p2-q16',
            type: 'tfng',
            prompt: 'Staff may use the same password for work and for a personal account.',
            answer: 'false',
            explanation:
              'The guide instructs: "You should never reuse a password that you also use for a personal account." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-gen-010-p2-q17',
            type: 'mcq',
            prompt: 'What should an employee do if they receive an email that looks suspicious?',
            options: [
              'Forward it to colleagues to ask what they think',
              'Open the attachment to find out what it contains',
              'Report it using the "Report Phishing" button',
              'Delete it and tell no one',
            ],
            correctIndex: 2,
            explanation:
              'The email section says staff should not forward a suspicious email to colleagues but should "report it using the \'Report Phishing\' button in your mail program." Option C is correct.',
          },
          {
            id: 'rd-gen-010-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Staff should hover over a _______ to check where it really leads before clicking.',
            acceptableAnswers: ['link'],
            explanation:
              'The guide advises staff to "hover over a link to check where it really leads before clicking." The single missing word is "link".',
          },
          {
            id: 'rd-gen-010-p2-q19',
            type: 'mcq',
            prompt: 'What does the company VPN do?',
            options: [
              'It makes the screen difficult to read from an angle',
              'It encrypts the information travelling to and from the device',
              "It stores passwords securely on the user's behalf",
              'It wipes a device at the end of its life',
            ],
            correctIndex: 1,
            explanation:
              'The "Working away from the office" section says the company VPN "encrypts the information travelling to and from your device." Option A describes the privacy filter and C describes the password manager, so B is correct.',
          },
          {
            id: 'rd-gen-010-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A privacy _______, available free from the IT helpdesk, makes the screen hard to read from an angle.',
            acceptableAnswers: ['filter'],
            explanation:
              'The passage refers to "A privacy filter, available free from the IT helpdesk." The single missing word is "filter".',
          },
          {
            id: 'rd-gen-010-p2-q21',
            type: 'tfng',
            prompt: 'A data problem should be reported within one hour of being noticed.',
            answer: 'true',
            explanation:
              'The "Reporting a problem" section states that staff "must report it within one hour of noticing." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-010-p2-q22',
            type: 'tfng',
            prompt:
              'Staff may be punished for reporting a possible data problem that turns out to be harmless.',
            answer: 'false',
            explanation:
              'The guide reassures staff that "you will never be blamed for raising the alarm in good faith." This contradicts the idea of being punished for an honest report, so the statement is False.',
          },
          {
            id: 'rd-gen-010-p2-q23',
            type: 'matching',
            variant: 'features',
            prompt:
              'The training guide describes five tools or methods, A-E. For each statement below, choose the tool or method it describes. Write the correct letter, A-E. (Each option is used once.)',
            options: [
              { key: 'A', label: 'A - The approved password manager' },
              { key: 'B', label: 'B - The "Report Phishing" button' },
              { key: 'C', label: 'C - A privacy filter' },
              { key: 'D', label: 'D - The company VPN' },
              { key: 'E', label: 'E - The locked confidential-waste bins' },
            ],
            items: [
              {
                id: 'i1',
                text: 'It encrypts data on public wireless networks.',
                answer: 'D',
              },
              {
                id: 'i2',
                text: 'It is where paper records that are no longer needed should be placed.',
                answer: 'E',
              },
              {
                id: 'i3',
                text: 'It stores your passwords securely if you find them hard to remember.',
                answer: 'A',
              },
              {
                id: 'i4',
                text: 'It sends a suspicious message straight to the security team.',
                answer: 'B',
              },
              {
                id: 'i5',
                text: 'It stops people nearby from reading your screen at an angle.',
                answer: 'C',
              },
            ],
            explanation:
              'D (the VPN) "encrypts the information travelling to and from your device" on public networks. E (the locked confidential-waste bins) is where paper records "no longer required should be placed." A (the password manager) "will store them securely on your behalf" for staff who struggle to remember passwords. B (the "Report Phishing" button) "sends it straight to the security team." C (a privacy filter) "makes the screen difficult to read from an angle." Each option is used exactly once.',
          },
        ],
      },
      // ── Section 3: GENERAL-INTEREST ARTICLE ────────────────────────────────
      // Six labelled paragraphs (A-F) so a Matching Headings question can cover
      // B-F. 14 questions (14 marks): headings matching (5) + mcq + tfng + gap.
      {
        id: 'rd-general-010-p3',
        title: 'One Foot in Front of the Other: The Quiet Power of Walking',
        body: `Paragraph A
Of all the ways in which people try to look after their health, walking is among the least celebrated. It requires no special clothing, no monthly fee and no instruction, and perhaps for that very reason it is easy to overlook. Yet a growing body of research suggests that the simple act of putting one foot in front of the other, done regularly, may do as much good as activities that demand far more time, money and effort. The humble walk, it turns out, has been hiding in plain sight.

Paragraph B
The effects on the body are wide-ranging. Brisk walking raises the heart rate enough to strengthen the heart and improve the flow of blood, while placing far less strain on the knees and ankles than running does. Because the movement is gentle and weight-bearing, it also helps to keep bones strong, which matters greatly as people grow older. Doctors point out that walking can be taken up by those who have done no exercise for years, and that the risk of injury is low compared with more vigorous pursuits. For many patients, it is the first form of activity a doctor will recommend.

Paragraph C
Less obvious, but just as important, are the effects on the mind. Walking has been shown to ease feelings of anxiety and low mood, partly through the chemicals that physical activity releases in the brain, and partly through the simple change of scene that leaving the house provides. A short walk outdoors can lift a person's spirits more reliably than many had assumed, and the benefit appears within minutes rather than weeks. Some employers now encourage staff to hold meetings on the move, having noticed that conversations often flow more freely when people are walking side by side rather than facing one another across a desk.

Paragraph D
There is also evidence that walking sharpens the way we think. Studies in which people were set a creative task have found that they produce more and better ideas while walking, or shortly afterwards, than while sitting still. The reason is not fully understood, but researchers suspect that the steady, undemanding rhythm of walking frees the mind to wander productively. Writers and thinkers have long known this instinctively: many have described the daily walk not as a break from their work but as the very time when their best thinking is done.

Paragraph E
What makes walking unusual among healthy habits is how easily it folds into an ordinary day. It need not be set aside as a separate activity at all. Getting off the bus a stop early, taking the stairs, or walking to a shop instead of driving all add up, and the total distance covered in these small ways can rival a deliberate trip to the gym. This is why public-health campaigns increasingly stress everyday movement over formal exercise: a habit that costs nothing and fits around work and family is one that people are far more likely to keep.

Paragraph F
None of this means that walking is a cure for every ill, and its champions are careful not to overstate the case. A gentle stroll will not, by itself, undo the effects of a poor diet or long hours spent sitting. But as one part of a fuller picture of good health, its appeal is hard to beat. It is free, it is available to almost everyone, and it can be done at any age and in almost any place. In a world that often equates being healthy with spending money, the most powerful tool of all may be the one we were born with.`,
        questions: [
          {
            id: 'rd-gen-010-p3-q24',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-viii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. A boost to clear and creative thought' },
              { key: 'ii', label: 'ii. The high cost of staying fit' },
              { key: 'iii', label: 'iii. Good for the body, and gentle with it' },
              { key: 'iv', label: 'iv. Honest about what walking cannot do' },
              { key: 'v', label: 'v. A lift for the mood and the mind' },
              { key: 'vi', label: 'vi. How to choose the right walking shoes' },
              { key: 'vii', label: 'vii. Easily woven into everyday life' },
              { key: 'viii', label: 'viii. A race against younger competitors' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'iii' },
              { id: 'pC', text: 'Paragraph C', answer: 'v' },
              { id: 'pD', text: 'Paragraph D', answer: 'i' },
              { id: 'pE', text: 'Paragraph E', answer: 'vii' },
              { id: 'pF', text: 'Paragraph F', answer: 'iv' },
            ],
            explanation:
              'Paragraph B describes the physical benefits while stressing that walking places "far less strain on the knees and ankles than running" - heading iii (good for the body, and gentle with it). Paragraph C covers the effects on mood and the mind - heading v. Paragraph D argues that walking "sharpens the way we think" and aids creativity - heading i. Paragraph E explains how walking "folds into an ordinary day" - heading vii. Paragraph F warns that "walking is not a cure for every ill" and is "careful not to overstate the case" - heading iv. Headings ii, vi and viii are distractors that are not used.',
          },
          {
            id: 'rd-gen-010-p3-q25',
            type: 'mcq',
            prompt:
              'According to Paragraph A, why is walking often overlooked as a way to stay healthy?',
            options: [
              'It is too difficult for most people to do',
              'It requires no special clothing, fee or instruction',
              'It has only recently been studied by researchers',
              'It is more expensive than other forms of exercise',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says walking "requires no special clothing, no monthly fee and no instruction, and perhaps for that very reason it is easy to overlook." Option B matches this directly.',
          },
          {
            id: 'rd-gen-010-p3-q26',
            type: 'mcq',
            prompt: 'In Paragraph B, how does walking compare with running?',
            options: [
              'It places less strain on the knees and ankles',
              'It raises the heart rate much more',
              'It carries a higher risk of injury',
              'It does nothing to strengthen the bones',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph B states that brisk walking strengthens the heart "while placing far less strain on the knees and ankles than running does," and that the risk of injury is low. Option A is correct.',
          },
          {
            id: 'rd-gen-010-p3-q27',
            type: 'tfng',
            prompt:
              'A doctor may recommend walking to someone who has not exercised for many years.',
            answer: 'true',
            explanation:
              'Paragraph B notes that walking "can be taken up by those who have done no exercise for years" and is often "the first form of activity a doctor will recommend." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-010-p3-q28',
            type: 'tfng',
            prompt: 'The improvement in mood from a walk takes several weeks to appear.',
            answer: 'false',
            explanation:
              'Paragraph C says the benefit to mood "appears within minutes rather than weeks." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-010-p3-q29',
            type: 'tfng',
            prompt: 'Some employers have started holding meetings while staff walk together.',
            answer: 'true',
            explanation:
              'Paragraph C states that "Some employers now encourage staff to hold meetings on the move," having noticed conversations flow more freely. The statement is therefore True.',
          },
          {
            id: 'rd-gen-010-p3-q30',
            type: 'tfng',
            prompt: 'Scientists fully understand why walking helps people think more creatively.',
            answer: 'false',
            explanation:
              'Paragraph D says "The reason is not fully understood," and that researchers only "suspect" the cause. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-010-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Researchers suspect that the steady, undemanding _______ of walking frees the mind to wander productively.',
            acceptableAnswers: ['rhythm'],
            explanation:
              'Paragraph D refers to "the steady, undemanding rhythm of walking." The single missing word is "rhythm".',
          },
          {
            id: 'rd-gen-010-p3-q32',
            type: 'mcq',
            prompt: 'What point does Paragraph E make about walking?',
            options: [
              'It must be treated as a separate activity to be effective',
              'Small amounts of everyday walking can add up to a worthwhile total',
              'It is only useful for people who do not go to a gym',
              'It works best when planned weeks in advance',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E explains that small actions such as getting off the bus early or taking the stairs "all add up, and the total distance covered in these small ways can rival a deliberate trip to the gym." Option B captures this.',
          },
          {
            id: 'rd-gen-010-p3-q33',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Public-health campaigns increasingly stress _______ _______ over formal exercise.',
            acceptableAnswers: ['everyday movement'],
            explanation:
              'Paragraph E says these campaigns "increasingly stress everyday movement over formal exercise." The two missing words are "everyday movement".',
          },
          {
            id: 'rd-gen-010-p3-q34',
            type: 'tfng',
            prompt: 'The article claims that walking alone can undo the effects of a poor diet.',
            answer: 'false',
            explanation:
              'Paragraph F states that "A gentle stroll will not, by itself, undo the effects of a poor diet or long hours spent sitting." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-010-p3-q35',
            type: 'mcq',
            prompt: 'What is the main idea of Paragraph F?',
            options: [
              'Walking should replace all other forms of healthcare',
              'Walking is valuable as one part of a fuller picture of good health',
              'Walking is only worthwhile for wealthy people',
              'Walking becomes less useful as people get older',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F is careful "not to overstate the case" but argues that "as one part of a fuller picture of good health, its appeal is hard to beat" - free, widely available and possible at any age. Option B reflects this balanced conclusion.',
          },
          {
            id: 'rd-gen-010-p3-q36',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The writer suggests that, in a world that equates health with spending money, the most powerful _______ of all may be the one we were born with.',
            acceptableAnswers: ['tool'],
            explanation:
              'The final sentence of Paragraph F refers to "the most powerful tool of all may be the one we were born with." The single missing word is "tool".',
          },
        ],
      },
    ],
  },
]
