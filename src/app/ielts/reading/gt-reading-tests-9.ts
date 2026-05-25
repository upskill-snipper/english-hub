// ─── IELTS General Training (GT) Reading - practice item bank (Set 9) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary completion, and Matching). Framed as "IELTS
// preparation" only - no official affiliation is implied. General Training.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, timetables, advertise-
// ments, instructions) and WORKPLACE texts (handbooks, policies, programmes),
// plus one longer general-interest article. This file ships ONE complete,
// carefully-checked GT test scaled to a full sitting (~40 marks):
//   • Section 1 - a local food-festival programme + a library membership guide.
//     Includes a Matching (features) question worth 5 marks asking which event
//     each statement describes; options may be reused.
//   • Section 2 - a workplace wellbeing programme for staff.
//   • Section 3 - a general-interest article on the comeback of board games.
//     Includes a Matching (headings) question covering paragraphs B-F with two
//     distractor headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-009-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_9: ReadingTest[] = [
  {
    id: 'rd-general-009',
    title: 'General Training Reading - Practice Test 9',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - festival programme + library guide ──
      // Two short texts. A Matching (features) question (5 marks) asks which of
      // the five festival events each statement describes; options may be reused.
      {
        id: 'rd-gen-009-p1',
        title: 'Hartley Vale Food Festival Programme & Riverbank Library Membership Guide',
        body: `PART 1 - HARTLEY VALE FOOD FESTIVAL: WEEKEND PROGRAMME

The Hartley Vale Food Festival returns to Market Square this weekend. Entry to the square is free, but five of the events listed below must be booked in advance because places are strictly limited. Book online or at the information tent by the main gate. Please read each description carefully, as the events differ in price, location and who they are suitable for.

EVENT 1 - Bread-Making Workshop
Learn to mix, knead and bake a simple farmhouse loaf with baker Tom Ellis. The class is held in the heated Marquee A and lasts two hours. It costs £12, which includes all ingredients and an apron to borrow. You take home everything you bake. Beginners are especially welcome, and no previous experience is needed. Please tell us when booking if you cannot eat wheat, as a gluten-free option can be arranged with three days' notice.

EVENT 2 - Children's Cookery Corner
A free drop-in session for children aged five to ten, who decorate biscuits and build fruit skewers under supervision. It runs continuously from 10 a.m. to 4 p.m. in the Family Tent. Children must be accompanied by an adult, who stays for the whole visit but does not need to book. Aprons and all materials are provided, and there is no charge.

EVENT 3 - Cheese and Cider Tasting
An afternoon of local cheeses paired with cider from the Hartley Vale orchards, led by a regional producer. Held in the Old Granary at 3 p.m., it lasts ninety minutes and costs £18. Because cider is served, this event is open only to those aged eighteen and over, and proof of age may be requested at the door. Soft drinks are available for anyone who prefers not to drink alcohol.

EVENT 4 - Street-Food Cook-Off (Spectator Seats)
Watch six local chefs compete to create the best dish from a surprise box of ingredients, with a live commentary. The cook-off takes place on the Main Stage at 1 p.m. and lasts about an hour. A seat costs £5, though you are also welcome to stand at the back for free. The dishes are judged by the audience, so every ticket holder receives a voting card.

EVENT 5 - Foraging Walk
A guided walk along the river path with naturalist Dr Priya Shah, who shows you which wild plants are safe to pick and how to use them in the kitchen. The walk leaves from the festival gate at 11 a.m. and lasts two and a half hours, so sturdy footwear is essential. It costs £10 and is limited to twelve people. The route is uneven in places and is not suitable for pushchairs or wheelchairs.

PART 2 - RIVERBANK LIBRARY: MEMBERSHIP GUIDE

Joining Riverbank Library is free and open to anyone who lives, works or studies in the borough. To register, bring one document showing your name and current address, such as a utility bill or tenancy agreement, to the front desk. Children under sixteen may join, but a parent or guardian must sign the application on their behalf. Once you have joined, your card is ready to use the same day.

What you can borrow: Members may borrow up to fifteen items at once. Most books may be kept for three weeks, while DVDs and items from the "Quick Reads" shelf are loaned for one week only. You can renew an item twice, either online or by phone, unless another member has reserved it. There is no charge for borrowing, but a fee of 20p per day applies to items returned late, up to a maximum of £8 per item.

Using the computers and study rooms: The public computers are free to use for up to one hour a day; simply log in with your library card number. The two bookable study rooms are intended for quiet group work and can be reserved up to a week ahead, for a maximum of two hours per session. Hot food may not be eaten anywhere in the building, although drinks in a sealed container are allowed.`,
        questions: [
          {
            id: 'rd-gen-009-p1-q1',
            type: 'tfng',
            prompt: 'Entry to Market Square during the festival is free of charge.',
            answer: 'true',
            explanation:
              'Part 1 opens by stating "Entry to the square is free, but five of the events listed below must be booked in advance." Entry itself is free, so the statement is True.',
          },
          {
            id: 'rd-gen-009-p1-q2',
            type: 'tfng',
            prompt: 'The Children’s Cookery Corner must be booked before the festival.',
            answer: 'false',
            explanation:
              'Event 2 is described as "A free drop-in session," and the accompanying adult "does not need to book." It is therefore not a booked event, so the statement is False.',
          },
          {
            id: 'rd-gen-009-p1-q3',
            type: 'tfng',
            prompt: 'A library member can keep borrowing an item as many times as they wish.',
            answer: 'false',
            explanation:
              'The "What you can borrow" section says "You can renew an item twice... unless another member has reserved it." Renewals are limited to two, so borrowing indefinitely is not allowed and the statement is False.',
          },
          {
            id: 'rd-gen-009-p1-q4',
            type: 'tfng',
            prompt: 'You may drink from a sealed container inside the library building.',
            answer: 'true',
            explanation:
              'The final section states "Hot food may not be eaten anywhere in the building, although drinks in a sealed container are allowed." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-009-p1-q5',
            type: 'mcq',
            prompt: 'What does a ticket holder at the Street-Food Cook-Off receive?',
            options: [
              'A free sample of every dish',
              'A voting card to judge the dishes',
              'A two-hour cookery lesson',
              'A refund if they choose to stand',
            ],
            correctIndex: 1,
            explanation:
              'Event 4 says "The dishes are judged by the audience, so every ticket holder receives a voting card." Option B matches; standing at the back is free, not refunded.',
          },
          {
            id: 'rd-gen-009-p1-q6',
            type: 'mcq',
            prompt: 'What must a new member bring in order to register at Riverbank Library?',
            options: [
              'A passport photograph',
              'A payment for the first year’s membership',
              'One document showing their name and current address',
              'A letter from their employer',
            ],
            correctIndex: 2,
            explanation:
              'The membership guide says to register you must "bring one document showing your name and current address, such as a utility bill or tenancy agreement." Option C matches; joining is free, so no payment is required.',
          },
          {
            id: 'rd-gen-009-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Members may borrow up to _______ items at any one time.',
            acceptableAnswers: ['fifteen', '15'],
            explanation:
              'The "What you can borrow" section states "Members may borrow up to fifteen items at once." The answer is "fifteen" (the number 15 is also accepted).',
          },
          {
            id: 'rd-gen-009-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Items returned late are charged at _______ per day, up to a maximum of £8 per item.',
            acceptableAnswers: ['20p', '20'],
            explanation:
              'The text says "a fee of 20p per day applies to items returned late, up to a maximum of £8 per item." The answer is "20p" (the figure 20 is also accepted).',
          },
          {
            id: 'rd-gen-009-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the five festival events, 1-5. For each statement below, choose the event it describes. Write the correct number, 1-5. (Each event may be chosen more than once.)',
            options: [
              { key: '1', label: 'Event 1 - Bread-Making Workshop' },
              { key: '2', label: 'Event 2 - Children’s Cookery Corner' },
              { key: '3', label: 'Event 3 - Cheese and Cider Tasting' },
              { key: '4', label: 'Event 4 - Street-Food Cook-Off (Spectator Seats)' },
              { key: '5', label: 'Event 5 - Foraging Walk' },
            ],
            items: [
              {
                id: 'i1',
                text: 'It is open only to people above a certain age.',
                answer: '3',
              },
              {
                id: 'i2',
                text: 'You are warned that you need strong footwear to take part.',
                answer: '5',
              },
              {
                id: 'i3',
                text: 'A special version can be provided if you give enough notice.',
                answer: '1',
              },
              {
                id: 'i4',
                text: 'It is a free drop-in session that runs all day and needs no booking.',
                answer: '2',
              },
              {
                id: 'i5',
                text: 'You can take part without paying, but a seat is also available for a fee.',
                answer: '4',
              },
            ],
            explanation:
              'i1: Event 3 (Cheese and Cider Tasting) is "open only to those aged eighteen and over." i2: Event 5 (Foraging Walk) says "sturdy footwear is essential." i3: Event 1 (Bread-Making) says a "gluten-free option can be arranged with three days’ notice." i4: Event 2 (Children’s Cookery Corner) is described as "A free drop-in session" that "runs continuously from 10 a.m. to 4 p.m." and whose accompanying adult "does not need to book." i5: Event 4 (Street-Food Cook-Off) lets you "stand at the back for free" while a seat costs £5.',
          },
        ],
      },
      // ── Section 2: WORKPLACE - staff wellbeing programme ───────────────────
      {
        id: 'rd-gen-009-p2',
        title: 'Staff Wellbeing Programme - A Guide for Employees',
        body: `Our new Staff Wellbeing Programme brings together the support already on offer and adds several new services. This guide explains what is available and how to take part. Everything described here is open to all employees, whether full time or part time, and using these services will never appear on your work record.

THE EMPLOYEE ASSISTANCE LINE
The assistance line is a confidential telephone service you can call at any hour of the day or night, every day of the year. Trained advisers offer support on personal matters such as stress, money worries, family difficulties and bereavement. The advisers are employed by an outside organisation, not by the company, so nothing you say is shared with your manager or with the human resources team. If you wish, an adviser can arrange up to six counselling sessions for you at no cost.

ACTIVE-TRAVEL AND EXERCISE SUPPORT
To encourage staff to build movement into the working day, the company now offers an interest-free loan to buy a bicycle, repaid in small amounts from your salary over twelve months. Showers and secure cycle racks have been installed at the main entrance. In addition, we have negotiated a reduced rate at three local gyms; to claim it, ask the wellbeing team for a membership letter rather than approaching the gym yourself, as the discount cannot be applied afterwards.

MENTAL-HEALTH FIRST AIDERS
A number of colleagues from across the business have been trained as Mental-Health First Aiders. They are not therapists, and they will not try to solve your problems for you; their role is simply to listen, without judgement, and to point you towards the right professional help. A list of first aiders, with photographs, is displayed on each floor and on the staff intranet. A conversation with a first aider is private and is not recorded anywhere.

QUIET ROOMS AND BREAKS
Each building now has a quiet room set aside for rest, prayer or a few minutes away from a busy desk. These rooms may be used by anyone and do not need to be booked, but they are not meeting rooms and should be kept silent. Staff are also reminded that the law entitles them to a break of at least twenty minutes once they have worked more than six hours, and managers are asked to make sure these breaks are actually taken rather than skipped.

TAKING PART
You do not need your manager's permission to use any part of this programme, and you are not required to give a reason. We do ask, however, that where a service must be arranged during working hours - such as a counselling appointment - you agree the timing with your team in advance so that work can be covered. Feedback on the programme is welcome and can be left anonymously through the box on the intranet.`,
        questions: [
          {
            id: 'rd-gen-009-p2-q10',
            type: 'mcq',
            prompt:
              'Why is information shared with the Employee Assistance Line kept private from managers?',
            options: [
              'Calls are automatically deleted after each conversation',
              'The advisers work for an outside organisation, not the company',
              'Managers are not allowed to contact the wellbeing team',
              'Employees must sign a confidentiality form before calling',
            ],
            correctIndex: 1,
            explanation:
              'The text says the advisers "are employed by an outside organisation, not by the company, so nothing you say is shared with your manager or with the human resources team." Option B matches directly.',
          },
          {
            id: 'rd-gen-009-p2-q11',
            type: 'mcq',
            prompt: 'How should an employee claim the reduced gym rate?',
            options: [
              'By paying the gym directly and then asking for a refund',
              'By showing their staff identity card at the gym',
              'By asking the wellbeing team for a membership letter first',
              'By joining the gym during a special open week',
            ],
            correctIndex: 2,
            explanation:
              'The Active-Travel section says to claim the reduced rate "ask the wellbeing team for a membership letter rather than approaching the gym yourself, as the discount cannot be applied afterwards." Option C is correct.',
          },
          {
            id: 'rd-gen-009-p2-q12',
            type: 'mcq',
            prompt: 'What is described as the role of a Mental-Health First Aider?',
            options: [
              'To provide long-term therapy to colleagues',
              'To solve colleagues’ personal problems for them',
              'To listen without judgement and signpost professional help',
              'To report concerns to the human resources team',
            ],
            correctIndex: 2,
            explanation:
              'The text says first aiders "are not therapists" and that their role "is simply to listen, without judgement, and to point you towards the right professional help." Option C matches.',
          },
          {
            id: 'rd-gen-009-p2-q13',
            type: 'tfng',
            prompt: 'The Employee Assistance Line can only be reached during normal office hours.',
            answer: 'false',
            explanation:
              'The text describes the line as one "you can call at any hour of the day or night, every day of the year." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-009-p2-q14',
            type: 'tfng',
            prompt: 'Both full-time and part-time employees can use the wellbeing services.',
            answer: 'true',
            explanation:
              'The opening paragraph states everything described is "open to all employees, whether full time or part time." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-009-p2-q15',
            type: 'tfng',
            prompt: 'The quiet rooms must be booked before they can be used.',
            answer: 'false',
            explanation:
              'The "Quiet Rooms and Breaks" section says the rooms "may be used by anyone and do not need to be booked." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-009-p2-q16',
            type: 'tfng',
            prompt:
              'Employees need their manager’s permission before using any part of the programme.',
            answer: 'false',
            explanation:
              'The "Taking Part" section states "You do not need your manager’s permission to use any part of this programme." This directly contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-009-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: An adviser can arrange up to _______ counselling sessions at no cost.',
            acceptableAnswers: ['six', '6'],
            explanation:
              'The Employee Assistance Line section says "an adviser can arrange up to six counselling sessions for you at no cost." The answer is "six" (the number 6 is also accepted).',
          },
          {
            id: 'rd-gen-009-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: The bicycle loan is interest-free and is repaid from salary over _______ months.',
            acceptableAnswers: ['twelve', '12'],
            explanation:
              'The Active-Travel section describes "an interest-free loan to buy a bicycle, repaid in small amounts from your salary over twelve months." The answer is "twelve" (the number 12 is also accepted).',
          },
          {
            id: 'rd-gen-009-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Staff are entitled to a break of at least _______ minutes after working more than six hours.',
            acceptableAnswers: ['twenty', '20'],
            explanation:
              'The "Quiet Rooms and Breaks" section says the law entitles staff "to a break of at least twenty minutes once they have worked more than six hours." The answer is "twenty" (the number 20 is also accepted).',
          },
          {
            id: 'rd-gen-009-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Feedback on the programme can be left _______ through the box on the intranet.',
            acceptableAnswers: ['anonymously'],
            explanation:
              'The "Taking Part" section says feedback "is welcome and can be left anonymously through the box on the intranet." The missing word is "anonymously".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - the comeback of board games ───
      // Six labelled paragraphs (A-F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B-F and is worth 5 marks.
      {
        id: 'rd-gen-009-p3',
        title: 'Rolling the Dice Again: Why Board Games Are Booming',
        body: `Paragraph A
Not so long ago, the board game seemed destined for the cupboard under the stairs. Faced with video consoles, smartphones and an endless stream of films to watch at home, few people expected a hobby that involves cardboard, dice and the patience to read a rulebook to do anything but fade away. Yet the opposite has happened. Sales of board games have climbed year after year, new titles appear by the thousand, and cafes devoted entirely to playing them have opened in cities around the world. The humble board game, it turns out, was not dying at all; it was waiting for its moment.

Paragraph B
The revival did not begin in the toy shops most people knew. For decades, the games on sale in supermarkets were the same familiar titles, many of them decided largely by luck and capable of dragging on until only the winner was still enjoying themselves. The new wave came instead from designers, often based in Germany, who built games around clever decisions rather than the roll of a single dice. In these games every player stays involved until the end, turns are short, and a beginner can win as often as an expert. Word of these titles spread slowly at first, passed between enthusiasts, long before the wider public took notice.

Paragraph C
What truly carried the hobby to a mass audience, however, was the internet. Online platforms allowed designers with an idea but no factory to raise money directly from the people who wanted to play their game, sometimes gathering enough in a few weeks to fund a print run that no traditional publisher would have risked. At the same time, video reviewers built large followings by filming themselves explaining and playing new releases, so that a curious newcomer could watch a game in action before spending a penny. A hobby that had once depended on knowing the right person now lay open to anyone with a screen.

Paragraph D
Part of the appeal, paradoxically, is precisely that a board game is not a screen. After a working day spent staring at glowing rectangles, many people find something restful in an activity that asks them to sit around a table, handle physical pieces and look one another in the eye. Parents see a rare chance to spend an evening with their children that does not involve separate devices in separate rooms. The board game offers company of an old-fashioned kind, and in an age of constant digital distraction that has become, for many, its chief attraction.

Paragraph E
The boom has reshaped the places where games are played and sold. Specialist shops, once rare and often intimidating to the casual visitor, now run friendly evenings where strangers are matched at tables and shown how to play. Board-game cafes charge a small fee for a few hours at a table stacked with hundreds of titles, and earn most of their money from the coffee and cake that keep players in their seats. Libraries and community centres have begun lending games as they lend books, reasoning that a shelf of games draws people through the door and gives them a reason to stay.

Paragraph F
Whether the boom can last is a fair question. Some in the trade worry that too many new titles are now competing for the same shelf space and the same free evenings, and that buyers may grow weary of choice. Others point out that a well-made game, unlike a gadget, does not go out of date: a clever design played today will be just as good in twenty years, and can be handed on to the next person who fancies a turn. If they are right, the recent surge may settle into something quieter and more lasting - not a craze that burns out, but a pastime that has simply rediscovered why people enjoyed it in the first place.`,
        questions: [
          {
            id: 'rd-gen-009-p3-q21',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. A break from life lived through screens' },
              { key: 'ii', label: 'ii. How the web opened the hobby to everyone' },
              { key: 'iii', label: 'iii. The high cost of producing a modern game' },
              { key: 'iv', label: 'iv. A new style of game built on smart choices' },
              { key: 'v', label: 'v. Changing the places where games are bought and played' },
              { key: 'vi', label: 'vi. Will the boom last?' },
              { key: 'vii', label: 'vii. Teaching children the rules of fair play' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'iv' },
              { id: 'pC', text: 'Paragraph C', answer: 'ii' },
              { id: 'pD', text: 'Paragraph D', answer: 'i' },
              { id: 'pE', text: 'Paragraph E', answer: 'v' },
              { id: 'pF', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'Paragraph B contrasts old luck-based titles with games "built around clever decisions rather than the roll of a single dice" - heading iv (a new style built on smart choices). Paragraph C explains how online funding and video reviewers meant the hobby "now lay open to anyone with a screen" - heading ii (the web opened it to everyone). Paragraph D argues the appeal is that a board game "is not a screen," a rest from digital distraction - heading i. Paragraph E describes how shops, cafes and libraries have changed - heading v (the places where games are bought and played). Paragraph F asks "Whether the boom can last" - heading vi. Headings iii (the high cost of producing a game) and vii (teaching children fair play) are distractors that are not used.',
          },
          {
            id: 'rd-gen-009-p3-q22',
            type: 'mcq',
            prompt:
              'According to Paragraph A, what had many people expected to happen to board games?',
            options: [
              'That they would become more expensive than video games',
              'That they would fade away in the face of digital entertainment',
              'That they would only survive in specialist cafes',
              'That they would be redesigned to use less cardboard',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says that, faced with consoles, smartphones and films, "few people expected a hobby that involves cardboard, dice and... a rulebook to do anything but fade away." Option B matches this expectation.',
          },
          {
            id: 'rd-gen-009-p3-q23',
            type: 'mcq',
            prompt: 'How does Paragraph B describe the older games sold in supermarkets?',
            options: [
              'They were designed mainly around clever decisions',
              'They kept every player involved until the very end',
              'They were often decided largely by luck and could drag on',
              'They were created mostly by German designers',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B says the familiar supermarket titles were "many of them decided largely by luck and capable of dragging on until only the winner was still enjoying themselves." Option C matches; the clever-decision design belongs to the new wave.',
          },
          {
            id: 'rd-gen-009-p3-q24',
            type: 'mcq',
            prompt: 'According to Paragraph C, how did online platforms help new game designers?',
            options: [
              'They printed the games in the designers’ own factories',
              'They let designers raise money directly from people who wanted to play',
              'They guaranteed that traditional publishers would buy each game',
              'They paid reviewers to promote every new release',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says online platforms "allowed designers with an idea but no factory to raise money directly from the people who wanted to play their game." Option B matches directly.',
          },
          {
            id: 'rd-gen-009-p3-q25',
            type: 'mcq',
            prompt:
              'What does Paragraph D suggest is now the chief attraction of board games for many people?',
            options: [
              'They are cheaper than digital entertainment',
              'They can be played alone without any company',
              'They offer old-fashioned company away from screens',
              'They teach useful skills for the workplace',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says the board game "offers company of an old-fashioned kind, and in an age of constant digital distraction that has become, for many, its chief attraction." Option C matches.',
          },
          {
            id: 'rd-gen-009-p3-q26',
            type: 'tfng',
            prompt:
              'The new wave of board games allows beginners to win as often as experienced players.',
            answer: 'true',
            explanation:
              'Paragraph B says of the new games that "a beginner can win as often as an expert." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-009-p3-q27',
            type: 'tfng',
            prompt: 'Board-game cafes earn most of their income from the fee charged for a table.',
            answer: 'false',
            explanation:
              'Paragraph E says cafes "charge a small fee for a few hours at a table" but "earn most of their money from the coffee and cake." The table fee is not their main income, so the statement is False.',
          },
          {
            id: 'rd-gen-009-p3-q28',
            type: 'tfng',
            prompt:
              'Everyone in the games trade agrees that the current boom will soon come to an end.',
            answer: 'not-given',
            explanation:
              'Paragraph F reports that "some in the trade worry" about too many titles, while "others point out" that good games last. The article presents differing views but never says everyone agrees the boom will end, so the answer is Not Given.',
          },
          {
            id: 'rd-gen-009-p3-q29',
            type: 'tfng',
            prompt:
              'Some libraries have started lending board games in the same way they lend books.',
            answer: 'true',
            explanation:
              'Paragraph E states that "Libraries and community centres have begun lending games as they lend books." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-009-p3-q30b',
            type: 'tfng',
            prompt:
              'Paragraph C says video reviewers let newcomers watch a game being played before buying it.',
            answer: 'true',
            explanation:
              'Paragraph C says reviewers filmed themselves "explaining and playing new releases, so that a curious newcomer could watch a game in action before spending a penny." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-009-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The new wave of games came largely from designers, often based in _______, who built games around clever decisions.',
            acceptableAnswers: ['germany'],
            explanation:
              'Paragraph B says the new wave came "from designers, often based in Germany, who built games around clever decisions." The missing word is "Germany".',
          },
          {
            id: 'rd-gen-009-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Supporters argue that, unlike a gadget, a well-made game does not go out of _______.',
            acceptableAnswers: ['date'],
            explanation:
              'Paragraph F says "a well-made game, unlike a gadget, does not go out of date." The missing word is "date".',
          },
        ],
      },
    ],
  },
]
