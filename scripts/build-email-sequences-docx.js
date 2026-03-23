const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, ExternalHyperlink,
} = require("docx");

// ─── colours ───
const BRAND_BLUE = "1A5276";
const BRAND_LIGHT = "D6EAF8";
const ACCENT_GREY = "5D6D7E";
const TABLE_HEADER = "2C3E50";
const TABLE_ALT = "F2F4F4";
const BORDER_CLR = "BDC3C7";

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER_CLR };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 32, color: BRAND_BLUE })],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 160 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 26, color: BRAND_BLUE })],
  });
}

function heading3(text) {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 22, color: ACCENT_GREY })],
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 20, ...opts })],
  });
}

function richPara(runs) {
  return new Paragraph({
    spacing: { after: 120 },
    children: runs.map(r => new TextRun({ font: "Arial", size: 20, ...r })),
  });
}

function bulletItem(text, opts = {}) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20, ...opts })],
  });
}

function richBullet(runs) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: runs.map(r => new TextRun({ font: "Arial", size: 20, ...r })),
  });
}

function numberedItem(text) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20 })],
  });
}

function emailHeader(subjectLine, previewText) {
  return [
    richPara([{ text: "Subject: ", bold: true }, { text: subjectLine }]),
    richPara([{ text: "Preview: ", bold: true, italics: true, color: ACCENT_GREY }, { text: previewText, italics: true, color: ACCENT_GREY }]),
    new Paragraph({ spacing: { after: 80 }, children: [] }),
  ];
}

function quote(text, attribution) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    indent: { left: 720 },
    border: { left: { style: BorderStyle.SINGLE, size: 6, color: BRAND_BLUE, space: 8 } },
    children: [
      new TextRun({ text: `"${text}"`, font: "Arial", size: 20, italics: true }),
      new TextRun({ text: ` \u2014 ${attribution}`, font: "Arial", size: 20, bold: true }),
    ],
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_LIGHT, space: 4 } },
    children: [],
  });
}

function signOff(line) {
  return [
    new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: line, font: "Arial", size: 20, italics: true, color: ACCENT_GREY })] }),
    para("The English Hub Team", { bold: true, color: BRAND_BLUE }),
  ];
}

// ─── Build sequences ───
function buildSequence1() {
  const items = [];
  items.push(heading1("Sequence 1: Free Trial Onboarding"));
  items.push(para("7 emails \u2022 Trigger: User starts free trial \u2022 Days 0, 1, 3, 5, 7, 14, 27", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // Email 1.1
  items.push(heading3("Email 1.1 \u2014 Day 0: Welcome + Getting Started"));
  items.push(...emailHeader("Welcome to The English Hub!", "Your 30-day free trial starts now \u2014 here\u2019s how to get the most from it."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Welcome aboard! Your 30-day free trial is now active, and we\u2019re genuinely chuffed to have you here."));
  items.push(para("The English Hub is built specifically for GCSE and IGCSE English students, so everything you\u2019ll find inside is designed to help you get better grades."));
  items.push(para("Here\u2019s how to get started in under five minutes:", { bold: true }));
  items.push(numberedItem("Set your exam board \u2014 we\u2019ll tailor your content automatically"));
  items.push(numberedItem("Choose your first topic \u2014 Literature or Language, your call"));
  items.push(numberedItem("Bookmark your weak areas \u2014 so we can focus your revision where it matters most"));
  items.push(para("Your dashboard is ready and waiting. Everything is unlocked for the next 30 days, so have a proper explore."));
  items.push(para("If you get stuck at any point, just reply to this email. A real person will get back to you."));
  items.push(richPara([{ text: "[Get Started Now \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Speak soon,"));
  items.push(divider());

  // Email 1.2
  items.push(heading3("Email 1.2 \u2014 Day 1: Complete Your First Module"));
  items.push(...emailHeader("Ready for your first module?", "It only takes 15 minutes \u2014 and you\u2019ll feel the difference straight away."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("How\u2019s it going? If you haven\u2019t dived into a module yet, today\u2019s the day. We\u2019d recommend starting with one of these popular picks:"));
  items.push(richBullet([{ text: "Unseen Poetry Made Simple", bold: true }, { text: " \u2014 the topic most students dread, broken down step by step" }]));
  items.push(richBullet([{ text: "Crafting a Grade 9 Essay", bold: true }, { text: " \u2014 learn exactly what examiners are looking for" }]));
  items.push(richBullet([{ text: "Key Quotes: Macbeth", bold: true }, { text: " \u2014 bite-sized revision that actually sticks" }]));
  items.push(para("Each module takes around 15 minutes and includes quick-fire questions to test your understanding as you go."));
  items.push(para("The students who complete their first module within 48 hours are 3x more likely to improve their predicted grade. That could be you."));
  items.push(richPara([{ text: "[Start Your First Module \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("You\u2019ve got this,"));
  items.push(divider());

  // Email 1.3
  items.push(heading3("Email 1.3 \u2014 Day 3: Try the AI Essay Feedback"));
  items.push(...emailHeader("Get instant feedback on your essays", "Our AI marker gives you examiner-level feedback in seconds."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Here\u2019s something most students wish they\u2019d found sooner: our AI Essay Feedback tool. Here\u2019s how it works:"));
  items.push(numberedItem("Write or paste in your essay"));
  items.push(numberedItem("Select your exam board and question type"));
  items.push(numberedItem("Hit submit \u2014 and get detailed feedback in under 30 seconds"));
  items.push(para("You\u2019ll receive a predicted grade, specific comments on your argument structure, language use, and textual references, plus clear suggestions for improvement."));
  items.push(para("It\u2019s like having a private tutor available 24/7, without the awkward small talk."));
  items.push(para("Students who use the essay feedback tool regularly see an average improvement of one full grade boundary. No exaggeration."));
  items.push(richPara([{ text: "[Try AI Essay Feedback \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Happy writing,"));
  items.push(divider());

  // Email 1.4
  items.push(heading3("Email 1.4 \u2014 Day 5: Take a Mock Exam"));
  items.push(...emailHeader("Fancy a mock exam? No stress.", "Timed practice in real exam conditions \u2014 results and feedback included."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Mock exams aren\u2019t anyone\u2019s idea of fun, but they\u2019re genuinely one of the best ways to prepare. And ours are designed to be as painless as possible."));
  items.push(para("What you\u2019ll get:", { bold: true }));
  items.push(richBullet([{ text: "Timed conditions", bold: true }, { text: " that mirror the real exam" }]));
  items.push(richBullet([{ text: "Auto-marked responses", bold: true }, { text: " where applicable" }]));
  items.push(richBullet([{ text: "Detailed breakdowns", bold: true }, { text: " showing exactly where you gained and lost marks" }]));
  items.push(richBullet([{ text: "Examiner-style commentary", bold: true }, { text: " on your extended answers" }]));
  items.push(para("You can pause and resume if life gets in the way, and every attempt is saved so you can track your improvement over time."));
  items.push(richPara([{ text: "[Take a Mock Exam \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Good luck (not that you\u2019ll need it),"));
  items.push(divider());

  // Email 1.5
  items.push(heading3("Email 1.5 \u2014 Day 7: Your Progress So Far"));
  items.push(...emailHeader("Your first week \u2014 here\u2019s how it went", "A quick look at what you\u2019ve achieved so far."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("You\u2019ve been with us for a week now, so here\u2019s a quick snapshot of your progress:"));
  items.push(richBullet([{ text: "Modules completed: ", bold: true }, { text: "{{modules_completed}}" }]));
  items.push(richBullet([{ text: "Questions answered: ", bold: true }, { text: "{{questions_answered}}" }]));
  items.push(richBullet([{ text: "Time spent revising: ", bold: true }, { text: "{{time_spent}}" }]));
  items.push(richBullet([{ text: "Strongest topic: ", bold: true }, { text: "{{strongest_topic}}" }]));
  items.push(para("{{#if active_user}} Brilliant work. You\u2019re building a proper revision habit. {{else}} We\u2019ve noticed you haven\u2019t had much chance to explore yet. Your trial still has 23 days left. {{/if}}", { italics: true, color: ACCENT_GREY }));
  items.push(richPara([{ text: "Your next recommended step: ", bold: true }, { text: "{{next_recommendation}}" }]));
  items.push(richPara([{ text: "[View Your Full Dashboard \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Keep it up,"));
  items.push(divider());

  // Email 1.6
  items.push(heading3("Email 1.6 \u2014 Day 14: Halfway Through Your Trial"));
  items.push(...emailHeader("You\u2019re halfway through your trial", "16 days left \u2014 here\u2019s how to make the most of them."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Your free trial is at the halfway point. Here\u2019s what we\u2019d suggest focusing on over the next two weeks:"));
  items.push(para("If you\u2019re studying Literature:", { bold: true }));
  items.push(bulletItem("Complete at least two text-specific modules"));
  items.push(bulletItem("Submit one essay through the AI feedback tool"));
  items.push(bulletItem("Try a past paper section under timed conditions"));
  items.push(para("If you\u2019re studying Language:", { bold: true }));
  items.push(bulletItem("Work through the Unseen Texts techniques module"));
  items.push(bulletItem("Practise a creative writing piece with AI feedback"));
  items.push(bulletItem("Attempt a full Paper 1 or Paper 2 mock"));
  items.push(para("When your trial ends, you can continue with full access for just \u00A39.99/month or save with our annual plan at \u00A379.99/year (that\u2019s over 30% off)."));
  items.push(richPara([{ text: "[Continue Revising \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Halfway there,"));
  items.push(divider());

  // Email 1.7
  items.push(heading3("Email 1.7 \u2014 Day 27: Trial Ending in 3 Days"));
  items.push(...emailHeader("Your trial ends in 3 days", "Keep your progress and full access \u2014 plans start from \u00A39.99/mo."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Just a heads-up: your free trial ends in 3 days. Here\u2019s what you\u2019ve achieved so far:"));
  items.push(richBullet([{ text: "{{modules_completed}} modules", bold: true }, { text: " completed" }]));
  items.push(richBullet([{ text: "{{mock_exams_taken}} mock exams", bold: true }, { text: " attempted" }]));
  items.push(richBullet([{ text: "{{essays_submitted}} essays", bold: true }, { text: " submitted for AI feedback" }]));
  items.push(para("Choose your plan:", { bold: true }));
  items.push(richBullet([{ text: "Monthly: ", bold: true }, { text: "\u00A39.99/mo \u2014 cancel anytime, no commitment" }]));
  items.push(richBullet([{ text: "Annual: ", bold: true }, { text: "\u00A379.99/yr \u2014 save over 30%, works out at just \u00A36.67/mo" }]));
  items.push(para("Both plans include unlimited access to every module, mock exam, and the AI essay feedback tool."));
  items.push(richPara([{ text: "[Subscribe Now \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("We\u2019d love to keep you,"));

  return items;
}

function buildSequence2() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("Sequence 2: Abandoned Signup"));
  items.push(para("3 emails \u2022 Trigger: User begins but doesn\u2019t complete signup \u2022 1hr, 24hr, 72hr", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // 2.1
  items.push(heading3("Email 2.1 \u2014 1 Hour After: Still Thinking About It?"));
  items.push(...emailHeader("Still thinking about it?", "Your free trial is ready to go \u2014 no card details needed to start."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("We noticed you started signing up for The English Hub but didn\u2019t quite finish. No worries \u2014 your spot is saved."));
  items.push(bulletItem("It\u2019s completely free for 30 days \u2014 no payment details required upfront"));
  items.push(bulletItem("It takes under 2 minutes to set up your account"));
  items.push(bulletItem("Everything is unlocked from day one"));
  items.push(richPara([{ text: "[Complete Your Signup \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("No rush,"));
  items.push(divider());

  // 2.2
  items.push(heading3("Email 2.2 \u2014 24 Hours: Social Proof + Benefits"));
  items.push(...emailHeader("Join 15,000+ students revising smarter", "See why students and parents rate us 4.8 out of 5."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Still on the fence? Here\u2019s what other students are saying:"));
  items.push(quote("I went from a Grade 5 to a Grade 8 in English Lit. The essay feedback tool is unreal.", "Priya, Year 11"));
  items.push(quote("I actually look forward to revising now, which I never thought I\u2019d say.", "James, Year 10"));
  items.push(quote("My daughter\u2019s confidence has completely transformed since she started using it.", "Sarah, parent"));
  items.push(para("Here\u2019s what makes The English Hub different:", { bold: true }));
  items.push(richBullet([{ text: "AI essay feedback", bold: true }, { text: " that gives you examiner-level comments in seconds" }]));
  items.push(richBullet([{ text: "Exam-board-specific content", bold: true }, { text: " \u2014 AQA, Edexcel, OCR, WJEC, CAIE" }]));
  items.push(richBullet([{ text: "Full mock exams", bold: true }, { text: " with detailed mark schemes and breakdowns" }]));
  items.push(richBullet([{ text: "Progress tracking", bold: true }, { text: " so you can see yourself improving" }]));
  items.push(richPara([{ text: "[Start Your Free Trial \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Hope to see you inside,"));
  items.push(divider());

  // 2.3
  items.push(heading3("Email 2.3 \u2014 72 Hours: Limited Time Offer"));
  items.push(...emailHeader("20% off \u2014 just for you", "Start your free trial today and lock in a discounted rate when you subscribe."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("We really think The English Hub could make a difference to your results, so here\u2019s a little extra nudge:"));
  items.push(richPara([{ text: "Sign up for your free trial today, and if you choose to subscribe afterwards, you\u2019ll get 20% off your first 3 months.", bold: true }]));
  items.push(para("That\u2019s just \u00A37.99/mo instead of \u00A39.99/mo."));
  items.push(richPara([{ text: "Use code: GETSTARTED20", bold: true, color: BRAND_BLUE }]));
  items.push(para("This offer expires in 48 hours."));
  items.push(richPara([{ text: "[Claim Your 20% Off \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(para("This is our last email about this \u2014 we promise we won\u2019t keep pestering you.", { italics: true, color: ACCENT_GREY }));
  items.push(...signOff("All the best,"));

  return items;
}

function buildSequence3() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("Sequence 3: Post-Purchase Nurture"));
  items.push(para("4 emails \u2022 Trigger: User converts to paid plan \u2022 Days 1, 7, 14, 30", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // 3.1
  items.push(heading3("Email 3.1 \u2014 Day 1: Thank You + Pro Tips"));
  items.push(...emailHeader("You\u2019re in! Here are our top tips.", "Welcome to the full English Hub experience \u2014 make the most of it."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Thanks for subscribing \u2014 we\u2019re really pleased you\u2019ve decided to stick with us. Here are three pro tips from our top-performing students:"));
  items.push(richPara([{ text: "1. Set a weekly revision schedule \u2014 ", bold: true }, { text: "Consistency beats cramming every time. Even 20 minutes, four times a week, makes a measurable difference." }]));
  items.push(richPara([{ text: "2. Use the essay feedback tool after every practice essay \u2014 ", bold: true }, { text: "The more you submit, the faster you\u2019ll learn what examiners want." }]));
  items.push(richPara([{ text: "3. Redo mock exams you\u2019ve already attempted \u2014 ", bold: true }, { text: "Your second attempt will almost always score higher, and that\u2019s exactly the point." }]));
  items.push(richPara([{ text: "[Go to Your Dashboard \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Welcome aboard properly,"));
  items.push(divider());

  // 3.2
  items.push(heading3("Email 3.2 \u2014 Day 7: Feature Spotlight (Mock Exams)"));
  items.push(...emailHeader("Getting the most from mock exams", "Our mock exam suite is more powerful than you might think."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("This week, we wanted to spotlight the mock exam suite:"));
  items.push(richBullet([{ text: "Custom mock exams", bold: true }, { text: " \u2014 pick specific topics or papers" }]));
  items.push(richBullet([{ text: "Timed and untimed modes", bold: true }, { text: " \u2014 build confidence gradually" }]));
  items.push(richBullet([{ text: "Detailed mark breakdowns", bold: true }, { text: " \u2014 see exactly where marks were gained and lost" }]));
  items.push(richBullet([{ text: "Progress comparison", bold: true }, { text: " \u2014 track how your scores improve" }]));
  items.push(richBullet([{ text: "Examiner commentary", bold: true }, { text: " \u2014 understand the \u2018why\u2019 behind every mark" }]));
  items.push(richPara([{ text: "Recommendation: ", bold: true }, { text: "Attempt one full mock exam per fortnight. Review the feedback, then revisit the relevant modules." }]));
  items.push(richPara([{ text: "[Browse Mock Exams \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Happy revising,"));
  items.push(divider());

  // 3.3
  items.push(heading3("Email 3.3 \u2014 Day 14: Share with Friends (Referral Programme)"));
  items.push(...emailHeader("Give your mates a month free", "Share The English Hub and you\u2019ll both get rewarded."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Enjoying The English Hub? Your friends might too. We\u2019ve just launched our referral programme:"));
  items.push(numberedItem("Share your unique referral link (found on your dashboard)"));
  items.push(numberedItem("When a friend signs up, they get their first month completely free"));
  items.push(numberedItem("You get a \u00A35 credit on your next billing cycle per friend who subscribes"));
  items.push(para("There\u2019s no limit \u2014 refer 10 friends and that\u2019s \u00A350 in credit."));
  items.push(richPara([{ text: "Your unique referral link: ", bold: true }, { text: "{{referral_link}}" }]));
  items.push(richPara([{ text: "[Share Your Link \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Thanks for spreading the word,"));
  items.push(divider());

  // 3.4
  items.push(heading3("Email 3.4 \u2014 Day 30: How\u2019s Your Progress?"));
  items.push(...emailHeader("One month in \u2014 how\u2019s it going?", "Let\u2019s take stock of your first month as a subscriber."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("It\u2019s been a month since you subscribed. Here\u2019s how you\u2019re getting on:"));
  items.push(richBullet([{ text: "Modules completed: ", bold: true }, { text: "{{modules_completed}}" }]));
  items.push(richBullet([{ text: "Mock exams attempted: ", bold: true }, { text: "{{mock_exams_taken}}" }]));
  items.push(richBullet([{ text: "Essays submitted: ", bold: true }, { text: "{{essays_submitted}}" }]));
  items.push(richBullet([{ text: "Estimated grade improvement: ", bold: true }, { text: "{{grade_improvement}}" }]));
  items.push(richPara([{ text: "Based on your activity, we\u2019d recommend: ", bold: true }, { text: "{{personalised_recommendations}}" }]));
  items.push(richPara([{ text: "[Leave a Quick Review \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Here\u2019s to month two,"));

  return items;
}

function buildSequence4() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("Sequence 4: Exam Season Campaign"));
  items.push(para("3 emails \u2022 Trigger: Calendar-based (all subscribers + leads) \u2022 January, March, May", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // 4.1
  items.push(heading3("Email 4.1 \u2014 January: New Year, New Grades"));
  items.push(...emailHeader("New year, new grades", "Start 2026 with a revision plan that actually works."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("New year, fresh start. January is the perfect time to get ahead."));
  items.push(para("Your January game plan:", { bold: true }));
  items.push(richBullet([{ text: "Week 1\u20132: ", bold: true }, { text: "Identify your weakest topics using our diagnostic quiz" }]));
  items.push(richBullet([{ text: "Week 3\u20134: ", bold: true }, { text: "Work through targeted modules on those areas" }]));
  items.push(richBullet([{ text: "Ongoing: ", bold: true }, { text: "Submit one practice essay per week for AI feedback" }]));
  items.push(para("Starting early means less stress later \u2014 shorter revision sessions, more free time, and walking into the exam hall feeling properly prepared."));
  items.push(richPara([{ text: "[Start Your Free Trial \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Here\u2019s to a brilliant year,"));
  items.push(divider());

  // 4.2
  items.push(heading3("Email 4.2 \u2014 March: Mock Exam Season Prep"));
  items.push(...emailHeader("Mock season is here \u2014 are you ready?", "Prepare for your school mocks with full exam practice and instant feedback."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Mock exam season is upon us. Mocks matter more than most students realise \u2014 they often determine your predicted grades."));
  items.push(para("How The English Hub can help right now:", { bold: true }));
  items.push(richBullet([{ text: "Full past papers", bold: true }, { text: " tailored to your exam board, with mark schemes" }]));
  items.push(richBullet([{ text: "Timed exam practice", bold: true }, { text: " that mirrors real conditions" }]));
  items.push(richBullet([{ text: "AI essay feedback", bold: true }, { text: " so you can polish your technique" }]));
  items.push(richBullet([{ text: "Topic-by-topic revision", bold: true }, { text: " to fill any remaining gaps" }]));
  items.push(richPara([{ text: "Quick tip: ", bold: true }, { text: "Focus on the topics that make you uncomfortable \u2014 that\u2019s where the biggest gains are." }]));
  items.push(richPara([{ text: "[Prepare for Mocks \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("You\u2019ve got this,"));
  items.push(divider());

  // 4.3
  items.push(heading3("Email 4.3 \u2014 May: Final Push \u2014 Exam Countdown"));
  items.push(...emailHeader("Exams start soon \u2014 final push time", "Last-minute revision that actually makes a difference."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("This is it. Exams are just around the corner, and everything you do now counts. Don\u2019t panic. Here\u2019s your final revision checklist:", { bold: true }));
  items.push(bulletItem("Review your weakest topics one more time"));
  items.push(bulletItem("Complete at least one full mock exam under timed conditions"));
  items.push(bulletItem("Re-read your AI essay feedback and note the recurring suggestions"));
  items.push(bulletItem("Memorise 3\u20135 key quotes per text (quality over quantity)"));
  items.push(bulletItem("Practise your timing \u2014 know how long to spend on each question"));
  items.push(para("Last-minute do\u2019s:", { bold: true }));
  items.push(bulletItem("Short, focused sessions (25 minutes on, 5 minutes off)"));
  items.push(bulletItem("Practise writing introductions and conclusions"));
  items.push(bulletItem("Get a good night\u2019s sleep before each exam"));
  items.push(para("Last-minute don\u2019ts:", { bold: true }));
  items.push(bulletItem("Don\u2019t try to learn entirely new content"));
  items.push(bulletItem("Don\u2019t compare your revision to anyone else\u2019s"));
  items.push(para("You\u2019ve put the work in. Trust it.", { bold: true, italics: true }));
  items.push(richPara([{ text: "[Final Revision Dashboard \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("We believe in you,"));

  return items;
}

function buildSequence5() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("Sequence 5: Win-back"));
  items.push(para("3 emails \u2022 Trigger: User cancels subscription \u2022 Days 1, 7, 30", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // 5.1
  items.push(heading3("Email 5.1 \u2014 Day 1: We\u2019re Sorry to See You Go"));
  items.push(...emailHeader("We\u2019re sorry to see you go", "Your account is closed, but your progress is saved for 90 days."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("We\u2019re sorry you\u2019ve decided to leave The English Hub. We hope it was useful while you were with us."));
  items.push(richBullet([{ text: "Your progress data is saved for 90 days.", bold: true }, { text: " If you resubscribe within that window, everything picks up right where you left off." }]));
  items.push(richBullet([{ text: "Your essays and mock exam results", bold: true }, { text: " are still accessible if you\u2019d like to download them." }]));
  items.push(richBullet([{ text: "If something wasn\u2019t working for you,", bold: true }, { text: " we\u2019d genuinely love to know." }]));
  items.push(richPara([{ text: "[Share Your Feedback (2 minutes) \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Warmly,"));
  items.push(divider());

  // 5.2
  items.push(heading3("Email 5.2 \u2014 Day 7: Here\u2019s What You\u2019re Missing"));
  items.push(...emailHeader("Here\u2019s what\u2019s new since you left", "We\u2019ve added new features and content you might want to see."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("It\u2019s been a week since you left, and we\u2019ve been busy. Here\u2019s what\u2019s new:"));
  items.push(richBullet([{ text: "{{new_feature_1}}", bold: true }, { text: " \u2014 {{new_feature_1_description}}" }]));
  items.push(richBullet([{ text: "{{new_feature_2}}", bold: true }, { text: " \u2014 {{new_feature_2_description}}" }]));
  items.push(richBullet([{ text: "New modules added: ", bold: true }, { text: "{{new_modules_list}}" }]));
  items.push(para("Your progress is still saved and waiting for you."));
  items.push(richPara([{ text: "[Reactivate Your Account \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("The door\u2019s always open,"));
  items.push(divider());

  // 5.3
  items.push(heading3("Email 5.3 \u2014 Day 30: Come Back for 20% Off"));
  items.push(...emailHeader("Come back for 20% off", "We\u2019d love to have you back \u2014 here\u2019s an exclusive discount."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("It\u2019s been a month since you left The English Hub, and we\u2019d love to welcome you back."));
  items.push(richPara([{ text: "20% off any plan for your first 3 months:", bold: true }]));
  items.push(richBullet([{ text: "Monthly: ", bold: true }, { text: "\u00A37.99/mo (was \u00A39.99)" }]));
  items.push(richBullet([{ text: "Annual: ", bold: true }, { text: "\u00A363.99/yr (was \u00A379.99)" }]));
  items.push(richPara([{ text: "Use code: WELCOMEBACK20", bold: true, color: BRAND_BLUE }]));
  items.push(para("This offer is valid for the next 14 days."));
  items.push(richPara([{ text: "[Come Back for 20% Off \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("We hope to see you again,"));

  return items;
}

function buildSequence6() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("Sequence 6: Parent-Specific"));
  items.push(para("3 emails \u2022 Trigger: User identified as parent \u2022 Days 0, 3, 7", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // 6.1
  items.push(heading3("Email 6.1 \u2014 Your Child\u2019s Revision Sorted"));
  items.push(...emailHeader("Your child\u2019s revision, sorted", "The English Hub gives your child structured, exam-focused revision they\u2019ll actually use."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Getting your child to revise English can be a battle. We get it. The English Hub takes the guesswork out of revision:"));
  items.push(richBullet([{ text: "Exam-board-specific modules", bold: true }, { text: " for AQA, Edexcel, OCR, WJEC, and CAIE" }]));
  items.push(richBullet([{ text: "AI essay feedback", bold: true }, { text: " that acts like a personal tutor, available any time" }]));
  items.push(richBullet([{ text: "Full mock exams", bold: true }, { text: " with detailed mark schemes and grade predictions" }]));
  items.push(richBullet([{ text: "Progress tracking", bold: true }, { text: " so they (and you) can see real improvement" }]));
  items.push(para("Pricing:", { bold: true }));
  items.push(bulletItem("\u00A39.99/month (cancel anytime)"));
  items.push(bulletItem("\u00A379.99/year (save over 30%)"));
  items.push(bulletItem("30-day free trial \u2014 no payment details needed"));
  items.push(richPara([{ text: "[Start a Free Trial for Your Child \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("All the best,"));
  items.push(divider());

  // 6.2
  items.push(heading3("Email 6.2 \u2014 See Their Progress Dashboard"));
  items.push(...emailHeader("Track your child\u2019s revision progress", "Our parent dashboard shows you exactly how their revision is going."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("One of the most common things parents tell us is: \u201CI have no idea if they\u2019re actually revising.\u201D That\u2019s why we built the Parent Progress Dashboard."));
  items.push(para("Here\u2019s what you can see:", { bold: true }));
  items.push(richBullet([{ text: "Time spent", bold: true }, { text: " revising each week (and which days)" }]));
  items.push(richBullet([{ text: "Modules completed", bold: true }, { text: " and topics covered" }]));
  items.push(richBullet([{ text: "Mock exam scores", bold: true }, { text: " and grade predictions" }]));
  items.push(richBullet([{ text: "Essay submissions", bold: true }, { text: " and feedback summaries" }]));
  items.push(richBullet([{ text: "Streak tracking", bold: true }, { text: " \u2014 how many consecutive days they\u2019ve revised" }]));
  items.push(para("You\u2019ll get a weekly summary email every Sunday evening. No nagging required."));
  items.push(richPara([{ text: "[See a Sample Dashboard \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("Peace of mind, delivered,"));
  items.push(divider());

  // 6.3
  items.push(heading3("Email 6.3 \u2014 Gift a Subscription"));
  items.push(...emailHeader("Gift them better grades", "Give The English Hub as a gift \u2014 the revision present they\u2019ll actually use."));
  items.push(para("Hi {{first_name}},"));
  items.push(para("Looking for a gift that\u2019s genuinely useful? Our gift subscriptions include:", { bold: true }));
  items.push(richBullet([{ text: "3 months: ", bold: true }, { text: "\u00A329.97" }]));
  items.push(richBullet([{ text: "6 months: ", bold: true }, { text: "\u00A349.99 (save 16%)" }]));
  items.push(richBullet([{ text: "12 months: ", bold: true }, { text: "\u00A379.99 (save 33%)" }]));
  items.push(para("Every gift subscription comes with full access, a personalised digital gift card, and parent dashboard access."));
  items.push(para("Gift subscriptions don\u2019t auto-renew, so there\u2019s no awkward ongoing charge.", { italics: true }));
  items.push(richPara([{ text: "[Send a Gift Subscription \u2192]", bold: true, color: BRAND_BLUE }]));
  items.push(...signOff("A gift that keeps on giving (grades),"));

  return items;
}

function buildMergeTagsTable() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("Quick Reference"));
  items.push(heading2("Merge Tags Used"));

  const tags = [
    ["{{first_name}}", "Recipient\u2019s first name"],
    ["{{modules_completed}}", "Number of modules completed"],
    ["{{questions_answered}}", "Total questions answered"],
    ["{{time_spent}}", "Total revision time"],
    ["{{strongest_topic}}", "Highest-scoring topic"],
    ["{{next_recommendation}}", "Personalised next step"],
    ["{{mock_exams_taken}}", "Number of mock exams attempted"],
    ["{{essays_submitted}}", "Number of essays submitted"],
    ["{{grade_improvement}}", "Estimated grade improvement"],
    ["{{personalised_recommendations}}", "AI-generated revision suggestions"],
    ["{{referral_link}}", "Unique referral URL"],
    ["{{new_feature_1/2}}", "Latest feature additions"],
    ["{{new_modules_list}}", "Recently added modules"],
    ["{{total_modules_this_week}}", "Platform-wide weekly modules"],
    ["{{total_essays_this_week}}", "Platform-wide weekly essays"],
    ["{{average_improvement}}", "Platform-wide average score gain"],
  ];

  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      new TableCell({ borders, width: { size: 3200, type: WidthType.DXA }, shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "Tag", bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })] }),
      new TableCell({ borders, width: { size: 6160, type: WidthType.DXA }, shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "Description", bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })] }),
    ],
  });

  const rows = tags.map((t, i) => new TableRow({
    children: [
      new TableCell({ borders, width: { size: 3200, type: WidthType.DXA }, shading: i % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: t[0], font: "Consolas", size: 18 })] })] }),
      new TableCell({ borders, width: { size: 6160, type: WidthType.DXA }, shading: i % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: t[1], font: "Arial", size: 20 })] })] }),
    ],
  }));

  items.push(new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: [3200, 6160], rows: [headerRow, ...rows] }));

  // Sequence trigger summary
  items.push(new Paragraph({ spacing: { before: 400 }, children: [] }));
  items.push(heading2("Sequence Trigger Summary"));

  const triggers = [
    ["1. Free Trial Onboarding", "User starts free trial", "7", "Days 0,1,3,5,7,14,27"],
    ["2. Abandoned Signup", "Begins but doesn\u2019t complete signup", "3", "1hr, 24hr, 72hr"],
    ["3. Post-Purchase Nurture", "Converts to paid plan", "4", "Days 1, 7, 14, 30"],
    ["4. Exam Season Campaign", "Calendar-based", "3", "Jan, Mar, May"],
    ["5. Win-back", "Cancels subscription", "3", "Days 1, 7, 30"],
    ["6. Parent-Specific", "Identified as parent", "3", "Days 0, 3, 7"],
  ];

  const thRow = new TableRow({
    tableHeader: true,
    children: ["Sequence", "Trigger", "#", "Timing"].map((h, i) => {
      const widths = [2800, 3200, 560, 2800];
      return new TableCell({ borders, width: { size: widths[i], type: WidthType.DXA }, shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })] });
    }),
  });

  const tRows = triggers.map((t, i) => new TableRow({
    children: t.map((cell, j) => {
      const widths = [2800, 3200, 560, 2800];
      return new TableCell({ borders, width: { size: widths[j], type: WidthType.DXA }, shading: i % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: cell, font: "Arial", size: 20 })] })] });
    }),
  }));

  items.push(new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: [2800, 3200, 560, 2800], rows: [thRow, ...tRows] }));

  return items;
}

// ─── Assemble document ───
async function main() {
  const doc = new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 20 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: BRAND_BLUE },
          paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: BRAND_BLUE },
          paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 1 } },
      ],
    },
    numbering: {
      config: [
        { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      ],
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ text: "The English Hub \u2014 Email Marketing Sequences", font: "Arial", size: 16, color: ACCENT_GREY, italics: true })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "Page ", font: "Arial", size: 16, color: ACCENT_GREY }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: ACCENT_GREY }),
            ],
          })],
        }),
      },
      children: [
        // Title page
        new Paragraph({ spacing: { before: 2400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "The English Hub", bold: true, font: "Arial", size: 48, color: BRAND_BLUE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Email Marketing Sequences", font: "Arial", size: 32, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_BLUE, space: 8 } },
          children: [new TextRun({ text: "23 Emails Across 6 Automated Sequences", font: "Arial", size: 22, color: ACCENT_GREY, italics: true })],
        }),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "All emails: British English | Friendly, encouraging tone | Body text under 200 words | Subject lines under 50 characters", font: "Arial", size: 18, italics: true, color: ACCENT_GREY })],
        }),
        new Paragraph({ spacing: { after: 120 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Date: March 2026", font: "Arial", size: 18, color: ACCENT_GREY })] }),

        // Sequences
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSequence1(),
        ...buildSequence2(),
        ...buildSequence3(),
        ...buildSequence4(),
        ...buildSequence5(),
        ...buildSequence6(),
        ...buildMergeTagsTable(),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync("D:/Coding/english-hub/email-marketing-sequences.docx", buffer);
  console.log(`Created: email-marketing-sequences.docx (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch(console.error);
