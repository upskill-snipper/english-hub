const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, TableOfContents,
} = require("docx");

// --- colours ---
const BRAND_BLUE = "1A5276";
const BRAND_LIGHT = "D6EAF8";
const ACCENT_GREY = "5D6D7E";
const TABLE_HEADER = "2C3E50";
const TABLE_ALT = "F2F4F4";
const BORDER_CLR = "BDC3C7";
const CALLOUT_BG = "EBF5FB";

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

function heading4(text) {
  return new Paragraph({
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 20, color: ACCENT_GREY })],
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

function numberedItem(text, opts = {}) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20, ...opts })],
  });
}

function richNumbered(runs) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 60 },
    children: runs.map(r => new TextRun({ font: "Arial", size: 20, ...r })),
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_LIGHT, space: 4 } },
    children: [],
  });
}

function emailHeader(subjectLine, previewText) {
  const items = [
    richPara([{ text: "Subject: ", bold: true }, { text: subjectLine }]),
  ];
  if (previewText) {
    items.push(richPara([{ text: "Preview: ", bold: true, italics: true, color: ACCENT_GREY }, { text: previewText, italics: true, color: ACCENT_GREY }]));
  }
  items.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  return items;
}

function signOff(line, name) {
  return [
    new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: line, font: "Arial", size: 20, italics: true, color: ACCENT_GREY })] }),
    para(name || "The English Hub Affiliate Team", { bold: true, color: BRAND_BLUE }),
  ];
}

// Callout block for social media posts / code blocks
function calloutBlock(lines) {
  return lines.map((line, i) => new Paragraph({
    spacing: { before: i === 0 ? 120 : 0, after: i === lines.length - 1 ? 120 : 40 },
    indent: { left: 360 },
    border: { left: { style: BorderStyle.SINGLE, size: 6, color: BRAND_BLUE, space: 8 } },
    shading: { fill: CALLOUT_BG, type: ShadingType.CLEAR },
    children: [new TextRun({ text: line, font: "Consolas", size: 18, color: "333333" })],
  }));
}

function spacer() {
  return new Paragraph({ spacing: { after: 80 }, children: [] });
}

// --- Table helper ---
function makeTable(headers, rows, colWidths) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0);
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) =>
      new TableCell({
        borders,
        width: { size: colWidths[i], type: WidthType.DXA },
        shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })],
      })
    ),
  });

  const dataRows = rows.map((row, ri) => new TableRow({
    children: row.map((cell, ci) => {
      const runs = typeof cell === "string"
        ? [new TextRun({ text: cell, font: "Arial", size: 20 })]
        : cell.map(r => new TextRun({ font: "Arial", size: 20, ...r }));
      return new TableCell({
        borders,
        width: { size: colWidths[ci], type: WidthType.DXA },
        shading: ri % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined,
        margins: cellMargins,
        children: [new Paragraph({ children: runs })],
      });
    }),
  }));

  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows],
  });
}

// ===================================================================
// Section 1: Affiliate Welcome Email
// ===================================================================
function buildSection1() {
  const items = [];
  items.push(heading1("1. Affiliate Welcome Email"));
  items.push(...emailHeader("Welcome to The English Hub Affiliate Programme \u2014 You're Approved!"));
  items.push(divider());

  items.push(para("Hi [First Name],"));
  items.push(para("Great news \u2014 your application to The English Hub Affiliate Programme has been approved! We're thrilled to have you on board."));
  items.push(para("Here's everything you need to start earning recurring commission straight away."));

  items.push(heading3("Your Unique Affiliate Link"));
  items.push(...calloutBlock(["https://theenglishhub.co.uk/?ref=[YOUR_AFFILIATE_ID]"]));
  items.push(para("Keep this link handy. Every student who signs up through it will be tracked to your account, and you'll earn commission on every payment they make \u2014 for as long as they remain a subscriber."));

  items.push(heading3("Your Commission at a Glance"));
  items.push(makeTable(
    ["Detail", "Info"],
    [
      [[{ text: "Commission rate", bold: true }], "20% recurring on every payment"],
      [[{ text: "Monthly plan", bold: true }], "\u00A39.99/mo \u2192 you earn \u00A32.00 per month, per subscriber"],
      [[{ text: "Annual plan", bold: true }], "\u00A379.99/yr \u2192 you earn \u00A316.00 per year, per subscriber"],
      [[{ text: "Cookie duration", bold: true }], "90 days"],
      [[{ text: "Payment schedule", bold: true }], "Monthly, via bank transfer or PayPal (\u00A325 minimum threshold)"],
    ],
    [3000, 6360]
  ));
  items.push(spacer());
  items.push(richPara([
    { text: "Because commission is " },
    { text: "recurring", bold: true },
    { text: ", a single referral can earn you income month after month. Ten subscribers on the monthly plan would earn you \u00A320 every month \u2014 and that compounds as your audience grows." },
  ]));

  items.push(heading3("Quick-Start Tips"));
  items.push(richNumbered([{ text: "Lead with the free trial. ", bold: true }, { text: "Every new user gets a 30-day free trial \u2014 no card required. This makes the sign-up decision effortless. Promote the trial rather than the price." }]));
  items.push(richNumbered([{ text: "Share your genuine experience. ", bold: true }, { text: "Audiences trust authenticity. If you've used The English Hub, tell them what you liked. If you're a teacher, explain how it helps your students. If you're a parent, share how your child uses it." }]));
  items.push(richNumbered([{ text: "Target key moments. ", bold: true }, { text: "Engagement spikes around mock exam season (November\u2013December), the January revision push, and the final run-up before summer exams (April\u2013May). Plan your content around these windows." }]));
  items.push(richNumbered([{ text: "Use our ready-made assets. ", bold: true }, { text: "We've prepared social media posts, email templates, and banner ad copy \u2014 all available in your affiliate dashboard. Copy, paste, personalise, and publish." }]));
  items.push(richNumbered([{ text: "Be consistent. ", bold: true }, { text: "A single post rarely moves the needle. Affiliates who share regularly \u2014 even once a week \u2014 see significantly better results." }]));

  items.push(heading3("Your Affiliate Dashboard"));
  items.push(richPara([{ text: "Log in at " }, { text: "https://theenglishhub.co.uk/affiliates/dashboard", bold: true }, { text: " to:" }]));
  items.push(bulletItem("Track clicks, sign-ups, and conversions in real time"));
  items.push(bulletItem("Download banners, logos, and promotional graphics"));
  items.push(bulletItem("View your earnings and payment history"));
  items.push(bulletItem("Access ready-made marketing templates"));

  items.push(heading3("Need Help?"));
  items.push(para("Our affiliate support team is here for you:"));
  items.push(richBullet([{ text: "Email: ", bold: true }, { text: "affiliates@theenglishhub.co.uk" }]));
  items.push(richBullet([{ text: "Response time: ", bold: true }, { text: "Within one working day" }]));
  items.push(para("Whether you have a question about tracking, need custom assets, or want to discuss a promotional idea, don't hesitate to reach out."));
  items.push(para("We're genuinely excited to partner with you. Let's help more students achieve their best in GCSE and IGCSE English."));
  items.push(...signOff("Warm regards,"));
  items.push(richPara([{ text: "affiliates@theenglishhub.co.uk", color: BRAND_BLUE }]));
  items.push(richPara([{ text: "https://theenglishhub.co.uk", color: BRAND_BLUE }]));

  return items;
}

// ===================================================================
// Section 2: Social Media Post Templates
// ===================================================================
function buildSection2() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("2. Social Media Post Templates"));
  items.push(divider());

  // 2.1
  items.push(heading2("2.1 Instagram / TikTok \u2014 Free Trial Promotion"));
  items.push(...calloutBlock([
    "Struggling with GCSE English?",
    "",
    "I found a platform called The English Hub that honestly makes",
    "revision so much easier. They've got:",
    "",
    "\u2705 Past paper walkthroughs with examiner-style feedback",
    "\u2705 Literature analysis for every set text",
    "\u2705 Language Paper 1 & 2 technique breakdowns",
    "\u2705 Practice questions graded by AI",
    "",
    "The best part? You can try it FREE for 30 days \u2014 no card needed.",
    "",
    "If you've got exams coming up and you're not sure where to start,",
    "this is it.",
    "",
    "\uD83D\uDC49 Link in bio to start your free trial",
    "",
    "#GCSEEnglish #GCSERevision #EnglishRevision #IGCSEEnglish",
    "#ExamSeason #StudyTips #TheEnglishHub #FreeRevision #GCSEs2026",
  ]));

  // 2.2
  items.push(heading2("2.2 Twitter / X \u2014 Exam Season"));
  items.push(...calloutBlock([
    "Exam season is coming and if you're still relying on last-minute",
    "revision, you need a better plan.",
    "",
    "The English Hub breaks GCSE & IGCSE English into manageable lessons",
    "with real exam practice and instant feedback.",
    "",
    "30-day free trial. No card needed. No catch.",
    "",
    "[YOUR AFFILIATE LINK]",
  ]));

  // 2.3
  items.push(heading2("2.3 Facebook \u2014 Parent Audience"));
  items.push(...calloutBlock([
    "Can I recommend something to any parents with children doing",
    "their GCSEs?",
    "",
    "My [son/daughter/student] has been using The English Hub for GCSE",
    "English revision and the difference has been remarkable. It's an",
    "online platform that covers both English Language and English",
    "Literature \u2014 all the set texts, exam techniques, practice",
    "questions, the lot.",
    "",
    "What I really like is that it gives detailed feedback on written",
    "answers, so they're not just practising \u2014 they're actually",
    "learning where they're going wrong and how to improve.",
    "",
    "It's \u00A39.99 a month (or \u00A379.99 for the year), but there's a",
    "30-day free trial so you can see if it works for your child",
    "before committing to anything.",
    "",
    "Worth a look if your child needs a bit of extra support:",
    "[YOUR AFFILIATE LINK]",
  ]));

  // 2.4
  items.push(heading2("2.4 Instagram Story \u2014 Swipe-Up Script"));
  items.push(heading3("Slide 1:"));
  items.push(...calloutBlock([
    "POV: You just found the revision tool you've been looking for",
  ]));
  items.push(heading3("Slide 2:"));
  items.push(...calloutBlock([
    "The English Hub = GCSE & IGCSE English revision that actually works",
    "",
    "\u2705 Every set text covered",
    "\u2705 Exam technique walkthroughs",
    "\u2705 AI-graded practice questions",
    "\u2705 Language AND Literature",
  ]));
  items.push(heading3("Slide 3:"));
  items.push(...calloutBlock([
    "30-day FREE trial",
    "No card needed",
    "No catch",
    "",
    "Swipe up to start",
    "",
    "[YOUR AFFILIATE LINK]",
  ]));

  // 2.5
  items.push(heading2("2.5 LinkedIn \u2014 Teacher Audience"));
  items.push(...calloutBlock([
    "I've been exploring The English Hub \u2014 an EdTech platform built",
    "specifically for GCSE and IGCSE English \u2014 and I wanted to share",
    "my thoughts with fellow educators.",
    "",
    "What stood out to me:",
    "",
    "\u2192 Curriculum-aligned content covering all major exam boards",
    "  (AQA, Edexcel, OCR, WJEC, CAIE)",
    "\u2192 AI-powered feedback on student responses, modelled on",
    "  examiner mark schemes",
    "\u2192 Comprehensive coverage of set texts with analysis, context,",
    "  and model answers",
    "\u2192 Language paper skills broken down into structured,",
    "  progressive lessons",
    "",
    "For teachers, the practical benefit is clear: students can",
    "complete independent practice and receive meaningful feedback",
    "without adding to your marking load. It complements classroom",
    "teaching rather than replacing it.",
    "",
    "There's a 30-day free trial for anyone who wants to evaluate it",
    "\u2014 students, parents, or fellow teachers.",
    "",
    "Worth a look: [YOUR AFFILIATE LINK]",
    "",
    "#EdTech #GCSEEnglish #EnglishTeacher #TeachingResources",
    "#Education #IGCSEEnglish #SecondaryEducation",
  ]));

  return items;
}

// ===================================================================
// Section 3: Email Templates for Affiliates
// ===================================================================
function buildSection3() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("3. Email Templates for Affiliates"));
  items.push(divider());

  // 3.1
  items.push(heading2("3.1 Student Audience \u2014 \"I found this amazing revision tool\""));
  items.push(...emailHeader(
    "The GCSE English revision tool I wish I'd found sooner"
  ));
  items.push(divider());
  items.push(para("Hi [First Name],"));
  items.push(para("I wanted to share something that I think could genuinely help with your GCSE (or IGCSE) English revision."));
  items.push(richPara([{ text: "It's called " }, { text: "The English Hub", bold: true }, { text: ", and it's an online platform built specifically for English Language and English Literature." }]));
  items.push(para("Here's what it includes:"));
  items.push(richBullet([{ text: "Set text analysis", bold: true }, { text: " \u2014 detailed breakdowns of every major set text, including themes, characters, context, and quotations worth memorising" }]));
  items.push(richBullet([{ text: "Exam technique guides", bold: true }, { text: " \u2014 step-by-step walkthroughs for every question type across Language Paper 1, Language Paper 2, and Literature" }]));
  items.push(richBullet([{ text: "Practice questions with AI feedback", bold: true }, { text: " \u2014 write your answers and get instant, examiner-style feedback showing you exactly where you'd gain (and lose) marks" }]));
  items.push(richBullet([{ text: "Revision plans", bold: true }, { text: " \u2014 structured schedules so you know what to study and when, rather than just re-reading your notes and hoping for the best" }]));
  items.push(para("The thing I really like is the feedback. It doesn't just tell you \"good effort\" \u2014 it shows you specifically what an examiner is looking for and how to hit the top mark bands."));
  items.push(richPara([{ text: "It's completely free to try for 30 days", bold: true }, { text: " \u2014 no card required. After that, it's \u00A39.99 a month or \u00A379.99 for the year." }]));
  items.push(para("If you've got exams coming up and you want to feel properly prepared rather than just hopeful, give it a go:"));
  items.push(richPara([{ text: "\uD83D\uDC49 [Start your free trial here \u2014 YOUR AFFILIATE LINK]", bold: true, color: BRAND_BLUE }]));
  items.push(para("Hope it helps as much as it's helped me!"));
  items.push(para("[Your Name]"));
  items.push(divider());

  // 3.2
  items.push(heading2("3.2 Parent Audience \u2014 \"Help your child ace their GCSEs\""));
  items.push(...emailHeader(
    "A revision tool that's actually making a difference for GCSE English"
  ));
  items.push(divider());
  items.push(para("Hi [First Name],"));
  items.push(richPara([{ text: "If your child is studying for their GCSE or IGCSE English exams, I wanted to let you know about a platform I've come across called " }, { text: "The English Hub", bold: true }, { text: "." }]));
  items.push(para("I know there are plenty of revision resources out there, so let me explain what makes this one different."));
  items.push(para("It gives real feedback on written work.", { bold: true }));
  items.push(para("Most revision tools offer quizzes or video lessons \u2014 which are fine \u2014 but they don't help with the skill that actually matters in English exams: writing. The English Hub lets students submit written responses to exam-style questions and receives detailed, examiner-style feedback powered by AI. It shows them exactly what they're doing well, where they're losing marks, and how to improve."));
  items.push(para("It covers everything in one place:", { bold: true }));
  items.push(bulletItem("All major set texts for English Literature (AQA, Edexcel, OCR, WJEC, CAIE)"));
  items.push(bulletItem("English Language Paper 1 and Paper 2 skills and techniques"));
  items.push(bulletItem("Structured revision plans and progress tracking"));
  items.push(bulletItem("Model answers and examiner commentary"));
  items.push(para("What it costs:", { bold: true }));
  items.push(richPara([{ text: "There's a " }, { text: "30-day free trial", bold: true }, { text: " with no card required \u2014 so your child can try it without any commitment. After that, it's " }, { text: "\u00A39.99 per month", bold: true }, { text: " or " }, { text: "\u00A379.99 for the year", bold: true }, { text: " (which works out at roughly \u00A36.67/month)." }]));
  items.push(para("For context, that's less than a single hour of private tutoring \u2014 and it's available whenever they need it."));
  items.push(richPara([{ text: "\uD83D\uDC49 [Start the free trial here \u2014 YOUR AFFILIATE LINK]", bold: true, color: BRAND_BLUE }]));
  items.push(para("If your child could use a bit of extra support with English \u2014 or if you just want them to feel more confident going into their exams \u2014 I'd recommend giving it a try."));
  items.push(para("Best wishes,"));
  items.push(para("[Your Name]"));
  items.push(divider());

  // 3.3
  items.push(heading2("3.3 Teacher Audience \u2014 \"A tool that saves me hours of marking\""));
  items.push(...emailHeader(
    "This platform gives my students examiner-level feedback (so I don't have to)"
  ));
  items.push(divider());
  items.push(para("Hi [First Name],"));
  items.push(richPara([{ text: "I wanted to share a tool that's been genuinely useful in my English teaching: " }, { text: "The English Hub", bold: true }, { text: "." }]));
  items.push(para("It's an online platform designed for GCSE and IGCSE English students, but the reason I'm writing is the practical difference it's made to my workload."));
  items.push(para("The marking problem we all know:", { bold: true }));
  items.push(para("We know students improve through writing practice. We also know that meaningful feedback on written work is what drives that improvement. The trouble is, with class sizes and curriculum demands, there simply aren't enough hours to provide that level of feedback as often as students need it."));
  items.push(para("What The English Hub does:", { bold: true }));
  items.push(para("Students complete exam-style questions on the platform \u2014 unseen extracts, essay responses, analytical paragraphs \u2014 and receive AI-generated feedback modelled on examiner mark schemes. The feedback is specific, referencing mark band descriptors, and shows students precisely where they'd gain or lose marks."));
  items.push(para("It doesn't replace teacher feedback \u2014 but it does mean students can practise independently between lessons and arrive better prepared. Several of my students have told me it's the first time they've understood what an examiner is actually looking for."));
  items.push(para("What it covers:", { bold: true }));
  items.push(bulletItem("All major exam boards (AQA, Edexcel, OCR, WJEC, CAIE)"));
  items.push(bulletItem("English Language Papers 1 & 2"));
  items.push(bulletItem("English Literature \u2014 every mainstream set text"));
  items.push(bulletItem("Structured revision plans and progress tracking"));
  items.push(para("For your students:", { bold: true }));
  items.push(richPara([{ text: "The platform offers a " }, { text: "30-day free trial", bold: true }, { text: " (no card required), which is enough time for students to complete a full cycle of practice and see genuine improvement. After that, it's " }, { text: "\u00A39.99/month", bold: true }, { text: " or " }, { text: "\u00A379.99/year", bold: true }, { text: "." }]));
  items.push(para("I've been recommending it to my classes and several colleagues have started doing the same."));
  items.push(richPara([{ text: "\uD83D\uDC49 [Try it free for 30 days \u2014 YOUR AFFILIATE LINK]", bold: true, color: BRAND_BLUE }]));
  items.push(para("Happy to answer any questions if you'd like to know more."));
  items.push(para("Best,"));
  items.push(para("[Your Name]"));

  return items;
}

// ===================================================================
// Section 4: Banner Ad Copy
// ===================================================================
function buildSection4() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("4. Banner Ad Copy"));
  items.push(divider());

  // Helper for banner ad options
  function bannerOption(label, fields) {
    const result = [];
    result.push(heading3(label));
    for (const [key, value] of fields) {
      result.push(richPara([{ text: key + ": ", bold: true, color: ACCENT_GREY }, { text: value }]));
    }
    return result;
  }

  // 4.1 Leaderboard
  items.push(heading2("4.1 Leaderboard (728\u00D790)"));
  items.push(...bannerOption("Option A", [
    ["Headline", "GCSE English Revision That Actually Works"],
    ["Body", "AI-powered feedback on every answer. All set texts. All exam boards. Try free for 30 days."],
    ["CTA", "Start Free Trial \u2192"],
  ]));
  items.push(...bannerOption("Option B", [
    ["Headline", "Stop Guessing. Start Improving."],
    ["Body", "The English Hub gives you examiner-level feedback on your GCSE English answers. Free for 30 days."],
    ["CTA", "Try It Free \u2192"],
  ]));
  items.push(...bannerOption("Option C", [
    ["Headline", "Your GCSE English Secret Weapon"],
    ["Body", "Practice questions, instant feedback, every set text covered. 30-day free trial \u2014 no card needed."],
    ["CTA", "Get Started Free \u2192"],
  ]));
  items.push(divider());

  // 4.2 Medium Rectangle
  items.push(heading2("4.2 Medium Rectangle (300\u00D7250)"));
  items.push(...bannerOption("Option A", [
    ["Headline", "GCSE English Sorted."],
    ["Sub-headline", "Language & Literature. Every exam board."],
    ["Body", "Get examiner-style feedback on your answers with AI-powered marking. Know exactly where you're gaining \u2014 and losing \u2014 marks."],
    ["CTA", "Start Your 30-Day Free Trial"],
  ]));
  items.push(...bannerOption("Option B", [
    ["Headline", "Ace Your GCSE English"],
    ["Sub-headline", "The smart way to revise."],
    ["Body", "Set text analysis. Exam technique guides. Practice questions with instant AI feedback. Everything you need in one place."],
    ["Price line", "From \u00A39.99/mo. Try free for 30 days."],
    ["CTA", "Start Free Trial \u2192"],
  ]));
  items.push(...bannerOption("Option C", [
    ["Headline", "Still Re-Reading Your Notes?"],
    ["Sub-headline", "There's a better way."],
    ["Body", "The English Hub gives you real exam practice with real feedback. Language & Literature. All major exam boards."],
    ["CTA", "Try Free for 30 Days \u2192"],
  ]));
  items.push(divider());

  // 4.3 Skyscraper
  items.push(heading2("4.3 Skyscraper (160\u00D7600)"));
  items.push(...bannerOption("Option A", [
    ["Headline", "GCSE English Revision"],
    ["Sub-headline", "That Actually Works"],
  ]));
  items.push(bulletItem("\u2713 Every set text covered"));
  items.push(bulletItem("\u2713 AI examiner feedback"));
  items.push(bulletItem("\u2713 Language & Literature"));
  items.push(bulletItem("\u2713 All major exam boards"));
  items.push(richPara([{ text: "Trial: ", bold: true }, { text: "30 Days Free" }]));
  items.push(richPara([{ text: "Price: ", bold: true }, { text: "Then \u00A39.99/mo" }]));
  items.push(richPara([{ text: "CTA: ", bold: true, color: ACCENT_GREY }, { text: "Start Free Trial \u2192" }]));
  items.push(spacer());

  items.push(...bannerOption("Option B", [
    ["Headline", "Exams Are Coming."],
    ["Sub-headline", "Are You Ready?"],
    ["Body", "The English Hub helps you master GCSE & IGCSE English with structured lessons, practice questions, and instant AI feedback."],
    ["Highlight", "30-Day Free Trial"],
    ["Detail", "No card required"],
    ["CTA", "Get Started \u2192"],
  ]));
  items.push(divider());

  // 4.4 Social Square
  items.push(heading2("4.4 Social Square (1080\u00D71080)"));
  items.push(...bannerOption("Option A \u2014 Free Trial Focus", [
    ["Headline", "30 Days Free"],
    ["Sub-headline", "GCSE & IGCSE English Revision"],
    ["Body", "Practice questions with AI examiner feedback. Every set text. Every exam board. One platform."],
    ["CTA", "Start Your Free Trial at theenglishhub.co.uk"],
    ["Design note", "Clean, bold typography. Brand colours. Minimal imagery \u2014 let the text breathe."],
  ]));
  items.push(...bannerOption("Option B \u2014 Student Focus", [
    ["Headline", "Know Exactly Where You're Losing Marks"],
    ["Sub-headline", "(And how to stop)"],
    ["Body", "The English Hub gives you examiner-level feedback on every answer. Language & Literature. GCSE & IGCSE."],
    ["CTA", "Try free for 30 days \u2192"],
    ["Design note", "Could work well with a student/revision desk lifestyle image in background with text overlay."],
  ]));
  items.push(...bannerOption("Option C \u2014 Results Focus", [
    ["Headline", "Revision \u2260 Re-Reading Your Notes"],
    ["Sub-headline", "Real practice. Real feedback. Real improvement."],
  ]));
  items.push(bulletItem("\u2713 Set text analysis & model answers"));
  items.push(bulletItem("\u2713 Exam technique walkthroughs"));
  items.push(bulletItem("\u2713 AI-graded practice questions"));
  items.push(richPara([{ text: "CTA: ", bold: true, color: ACCENT_GREY }, { text: "30-day free trial \u2014 theenglishhub.co.uk" }]));
  items.push(richPara([{ text: "Design note: ", bold: true, color: ACCENT_GREY }, { text: "Bold headline, structured layout with clear visual hierarchy. Works for both Instagram feed and paid social.", italics: true }]));

  return items;
}

// ===================================================================
// Section 5: Affiliate Landing Page Copy
// ===================================================================
function buildSection5() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("5. Affiliate Landing Page Copy"));
  items.push(richPara([{ text: "Page URL: ", bold: true, color: ACCENT_GREY }, { text: "/affiliates", italics: true }]));
  items.push(divider());

  // Hero
  items.push(heading2("Hero Section"));
  items.push(para("Earn Recurring Income Helping Students Succeed in GCSE English", { bold: true, size: 26, color: BRAND_BLUE }));
  items.push(para("Join The English Hub Affiliate Programme and earn 20% commission on every payment \u2014 for as long as your referrals stay subscribed."));
  items.push(richPara([{ text: "CTA Button: ", bold: true, color: ACCENT_GREY }, { text: "Apply Now \u2014 It's Free" }]));
  items.push(para("Trusted by thousands of GCSE and IGCSE students across the UK and beyond.", { italics: true, color: ACCENT_GREY }));
  items.push(divider());

  // Why Partner
  items.push(heading2("Why Partner With The English Hub?"));

  items.push(heading3("Recurring Commission That Compounds"));
  items.push(para("Unlike one-off referral fees, our programme pays you 20% on every single payment your referrals make. A student who subscribes for 12 months earns you 12 months of commission. As your referrals grow, so does your monthly income \u2014 without extra work."));

  items.push(heading3("A Product That Sells Itself"));
  items.push(para("The English Hub offers a 30-day free trial with no card required. That means there's virtually no friction when you recommend it. Your audience can try it, see the value, and convert \u2014 all without feeling pressured."));

  items.push(heading3("A Growing Market"));
  items.push(para("Every year, over 700,000 students sit GCSE English exams in England alone \u2014 plus hundreds of thousands more taking IGCSEs internationally. Demand for quality revision tools is enormous and growing, especially as AI-assisted learning goes mainstream."));

  items.push(heading3("Content People Actually Need"));
  items.push(para("This isn't another quiz app. The English Hub provides exam-style practice with AI-powered, examiner-level feedback. Students see precisely where they'd gain and lose marks. It's the kind of tool that parents pay for, students use, and teachers recommend."));
  items.push(divider());

  // How It Works
  items.push(heading2("How It Works"));
  items.push(richPara([{ text: "Step 1: Apply \u2014 ", bold: true }, { text: "Complete our short application form. We review every application and typically respond within 48 hours." }]));
  items.push(richPara([{ text: "Step 2: Get Your Link \u2014 ", bold: true }, { text: "Once approved, you'll receive a unique affiliate link and access to your personal dashboard with tracking, analytics, and ready-made promotional assets." }]));
  items.push(richPara([{ text: "Step 3: Share \u2014 ", bold: true }, { text: "Promote The English Hub to your audience using your link. Share it on social media, in emails, on your blog, in YouTube descriptions \u2014 wherever your audience is." }]));
  items.push(richPara([{ text: "Step 4: Earn \u2014 ", bold: true }, { text: "Every time someone signs up through your link, you earn 20% of every payment they make. Commission is tracked automatically and paid monthly." }]));
  items.push(divider());

  // Commission Breakdown
  items.push(heading2("Commission Breakdown"));
  items.push(makeTable(
    ["Plan", "Price", "Your Commission (20%)", "Recurring?"],
    [
      ["Monthly", "\u00A39.99/mo", "\u00A32.00/mo per subscriber", "Yes \u2014 every month"],
      ["Annual", "\u00A379.99/yr", "\u00A316.00/yr per subscriber", "Yes \u2014 every renewal"],
    ],
    [1800, 2200, 2800, 2560]
  ));
  items.push(spacer());
  items.push(para("Example:", { bold: true }));
  items.push(richPara([{ text: "Refer 50 students on the monthly plan \u2192 " }, { text: "\u00A3100/month recurring income.", bold: true }]));
  items.push(richPara([{ text: "Refer 50 students on the annual plan \u2192 " }, { text: "\u00A3800/year recurring income.", bold: true }]));
  items.push(para("And those numbers compound as you refer more people. There's no cap on what you can earn."));
  items.push(divider());

  // Who's It For?
  items.push(heading2("Who's It For?"));
  items.push(richPara([{ text: "Education Bloggers & Content Creators \u2014 ", bold: true }, { text: "If you create content about GCSEs, study tips, or education, The English Hub is a natural recommendation for your audience." }]));
  items.push(richPara([{ text: "Teachers & Tutors \u2014 ", bold: true }, { text: "Recommend a tool that genuinely helps your students \u2014 and earn from every referral. Many of our top affiliates are practicing teachers." }]));
  items.push(richPara([{ text: "Parents \u2014 ", bold: true }, { text: "If you're part of parent communities or forums, sharing a tool that helps children with their English revision is valuable to your network." }]));
  items.push(richPara([{ text: "Student Influencers \u2014 ", bold: true }, { text: "Study with me content, revision tips, exam vlogs \u2014 if you have a student audience, they'll want to know about this." }]));
  items.push(richPara([{ text: "Education Newsletters & Websites \u2014 ", bold: true }, { text: "If you reach students, parents, or educators through a newsletter, blog, or website, our programme is built for you." }]));
  items.push(divider());

  // What You'll Get
  items.push(heading2("What You'll Get"));
  items.push(richBullet([{ text: "20% recurring commission", bold: true }, { text: " on every payment, for every referral, for as long as they subscribe" }]));
  items.push(richBullet([{ text: "90-day cookie duration", bold: true }, { text: " \u2014 generous tracking window so you're credited even if visitors don't sign up immediately" }]));
  items.push(richBullet([{ text: "Real-time dashboard", bold: true }, { text: " \u2014 monitor clicks, conversions, and earnings as they happen" }]));
  items.push(richBullet([{ text: "Ready-made marketing assets", bold: true }, { text: " \u2014 email templates, social media copy, banner ads, and more" }]));
  items.push(richBullet([{ text: "Dedicated affiliate support", bold: true }, { text: " \u2014 a real person to answer your questions and help you succeed" }]));
  items.push(richBullet([{ text: "Monthly payments", bold: true }, { text: " via bank transfer or PayPal (\u00A325 minimum threshold)" }]));
  items.push(divider());

  // FAQ
  items.push(heading2("Frequently Asked Questions"));

  const faqs = [
    ["How much can I earn?", "There's no cap. You earn 20% of every payment made by every person you refer. The more people you refer, the more you earn \u2014 and because commission is recurring, your income grows over time."],
    ["How long does the cookie last?", "90 days. If someone clicks your link and signs up any time within the next 90 days, the referral is credited to you."],
    ["Do I earn commission during the free trial?", "Commission begins when the referred user makes their first payment. The 30-day free trial means users are genuinely engaged before they convert, which leads to higher retention and longer-term earnings for you."],
    ["How and when do I get paid?", "Payments are processed monthly, on the 15th of each month, for the previous month's confirmed earnings. We pay via bank transfer or PayPal. The minimum payout threshold is \u00A325."],
    ["What if a referral cancels and then resubscribes?", "If they resubscribe within 90 days using the same account, the referral remains attributed to you and you'll continue earning commission."],
    ["Can I promote The English Hub on paid advertising?", "Yes, with some restrictions. You may not bid on our brand terms (\u201CThe English Hub\u201D, \u201CEnglish Hub\u201D) in paid search campaigns, and you may not use ad copy that could be mistaken for an official advertisement from us. Full details are in our affiliate terms."],
    ["Do I need to be a teacher or educator to join?", "Not at all. Our affiliates include bloggers, content creators, students, parents, and education professionals. If you have an audience that includes GCSE or IGCSE students (or their parents), you're a great fit."],
    ["Is there a cost to join?", "No. The programme is completely free to join."],
  ];
  for (const [q, a] of faqs) {
    items.push(para(q, { bold: true }));
    items.push(para(a));
    items.push(spacer());
  }
  items.push(divider());

  // CTA
  items.push(heading2("Ready to Start Earning?"));
  items.push(para("Join The English Hub Affiliate Programme today and start earning 20% recurring commission on every referral."));
  items.push(richPara([{ text: "[Apply Now \u2014 It's Free]", bold: true, color: BRAND_BLUE, size: 24 }]));
  items.push(richPara([{ text: "Questions? Contact us at " }, { text: "affiliates@theenglishhub.co.uk", color: BRAND_BLUE }]));

  return items;
}

// ===================================================================
// Section 6: Affiliate Programme Terms & Conditions
// ===================================================================
function buildSection6() {
  const items = [];
  items.push(new Paragraph({ children: [new PageBreak()] }));
  items.push(heading1("6. Affiliate Programme Terms"));
  items.push(heading2("The English Hub \u2014 Affiliate Programme Terms and Conditions"));
  items.push(richPara([{ text: "Last updated: ", bold: true }, { text: "22 March 2026" }]));
  items.push(para("These terms govern your participation in The English Hub Affiliate Programme (\u201Cthe Programme\u201D). By applying to or participating in the Programme, you agree to these terms in full."));
  items.push(divider());

  // 1. Definitions
  items.push(heading3("1. Definitions"));
  items.push(richBullet([{ text: "\u201CWe\u201D, \u201Cus\u201D, \u201Cour\u201D", bold: true }, { text: " \u2014 The English Hub (operated by [Company Legal Name], registered in England and Wales, company number [NUMBER])." }]));
  items.push(richBullet([{ text: "\u201CYou\u201D, \u201Cyour\u201D", bold: true }, { text: " \u2014 the approved affiliate participating in the Programme." }]));
  items.push(richBullet([{ text: "\u201CReferred User\u201D", bold: true }, { text: " \u2014 an individual who clicks your unique affiliate link and subsequently creates a paid subscription to The English Hub." }]));
  items.push(richBullet([{ text: "\u201CCommission\u201D", bold: true }, { text: " \u2014 the payment you earn for each Referred User, as set out in Section 3." }]));
  items.push(richBullet([{ text: "\u201CAffiliate Link\u201D", bold: true }, { text: " \u2014 the unique tracking URL assigned to you upon approval." }]));
  items.push(divider());

  // 2. Programme Enrolment
  items.push(heading3("2. Programme Enrolment"));
  items.push(para("2.1. Participation in the Programme is by application only. We reserve the right to approve or reject any application at our sole discretion, without obligation to provide a reason."));
  items.push(para("2.2. You must provide accurate and complete information in your application. Providing false or misleading information is grounds for immediate termination."));
  items.push(para("2.3. You must be at least 18 years of age to participate in the Programme."));
  items.push(para("2.4. Approval is non-transferable. You may not allow another person or entity to use your Affiliate Link or account."));
  items.push(divider());

  // 3. Commission Structure
  items.push(heading3("3. Commission Structure"));
  items.push(richPara([{ text: "3.1. You will earn a commission of " }, { text: "20% of the net payment amount", bold: true }, { text: " (excluding VAT) for each Referred User, on every payment made by that Referred User for the duration of their subscription." }]));
  items.push(para("3.2. Commission applies to the following subscription plans:"));
  items.push(makeTable(
    ["Plan", "Price (inc. VAT)", "Commission per Payment"],
    [
      ["Monthly", "\u00A39.99", "20% of net amount"],
      ["Annual", "\u00A379.99", "20% of net amount"],
    ],
    [2400, 3200, 3760]
  ));
  items.push(spacer());
  items.push(richPara([{ text: "3.3. Commission is " }, { text: "recurring", bold: true }, { text: ". You will continue to earn commission on each renewal payment made by a Referred User, provided they remain subscribed and the referral attribution remains valid." }]));
  items.push(para("3.4. Commission is not earned during a Referred User's free trial period. Commission accrues only upon receipt of a paid subscription payment."));
  items.push(para("3.5. If a Referred User requests and receives a refund, any commission earned on that payment will be reversed."));
  items.push(para("3.6. We reserve the right to modify the commission rate with 30 days' written notice. Changes will apply to new referrals only; existing referral commission rates will be honoured for a minimum of 12 months from the date of the change."));
  items.push(divider());

  // 4. Tracking and Attribution
  items.push(heading3("4. Tracking and Attribution"));
  items.push(para("4.1. Referrals are tracked via your unique Affiliate Link using browser cookies."));
  items.push(richPara([{ text: "4.2. The cookie duration is " }, { text: "90 days", bold: true }, { text: ". If a visitor clicks your Affiliate Link and creates a paid subscription within 90 days, the referral will be attributed to you." }]));
  items.push(richPara([{ text: "4.3. Attribution operates on a " }, { text: "last-click", bold: true }, { text: " basis. If a visitor clicks multiple affiliate links, the referral is attributed to the affiliate whose link was clicked most recently before the subscription was created." }]));
  items.push(para("4.4. We are not responsible for tracking failures caused by the visitor's browser settings, ad blockers, VPNs, or other third-party software that may interfere with cookie placement."));
  items.push(divider());

  // 5. Payment
  items.push(heading3("5. Payment"));
  items.push(richPara([{ text: "5.1. Commission payments are processed " }, { text: "monthly, on or before the 15th of each calendar month", bold: true }, { text: ", covering confirmed earnings from the previous calendar month." }]));
  items.push(richPara([{ text: "5.2. The minimum payout threshold is " }, { text: "\u00A325", bold: true }, { text: ". If your accrued commission is below this threshold, it will roll over to the following month." }]));
  items.push(richPara([{ text: "5.3. Payments are made via " }, { text: "bank transfer (BACS)", bold: true }, { text: " or " }, { text: "PayPal", bold: true }, { text: ", at your election. You are responsible for providing accurate payment details." }]));
  items.push(para("5.4. You are solely responsible for any tax obligations arising from commission payments. We may request tax documentation (such as a self-assessment UTR or VAT registration number) and may withhold payments until such documentation is provided."));
  items.push(para("5.5. If a payment is returned or fails due to incorrect details provided by you, we will attempt to re-process the payment once notified of corrected details. We are not liable for delays caused by incorrect payment information."));
  items.push(divider());

  // 6. Promotional Guidelines
  items.push(heading3("6. Promotional Guidelines"));
  items.push(para("6.1. You may promote The English Hub through your website, blog, social media accounts, email lists, YouTube channel, podcast, or other channels you own or control."));
  items.push(richPara([{ text: "6.2. All promotional content must be " }, { text: "accurate, truthful, and not misleading", bold: true }, { text: ". You must not make claims about The English Hub that are false, unsubstantiated, or exaggerated." }]));
  items.push(para("6.3. You must clearly disclose your affiliate relationship in accordance with applicable advertising standards and regulations, including the UK Advertising Standards Authority (ASA) Code and the Competition and Markets Authority (CMA) guidance on online endorsements. At a minimum, you must include a clear disclosure such as \u201Caffiliate link\u201D or \u201Cad\u201D in any content containing your Affiliate Link."));
  items.push(para("6.4. You must comply with all applicable laws, regulations, and platform-specific policies when promoting The English Hub."));
  items.push(divider());

  // 7. Prohibited Practices
  items.push(heading3("7. Prohibited Practices"));
  items.push(para("You must NOT:", { bold: true }));
  items.push(richPara([{ text: "7.1. Bid on our brand terms \u2014 ", bold: true }, { text: "You may not bid on \u201CThe English Hub\u201D, \u201CEnglish Hub\u201D, \u201Ctheenglishhub\u201D, or any close variations in paid search (PPC) campaigns on any platform (including Google Ads, Bing Ads, and social media advertising platforms)." }]));
  items.push(richPara([{ text: "7.2. Impersonate us \u2014 ", bold: true }, { text: "You may not create websites, social media accounts, email addresses, or any other assets that could reasonably be mistaken for official English Hub properties." }]));
  items.push(richPara([{ text: "7.3. Use spam or unsolicited messaging \u2014 ", bold: true }, { text: "You may not promote your Affiliate Link through unsolicited emails, direct messages, SMS, or any form of spam. All email marketing must be sent to recipients who have given their prior consent to receive communications from you." }]));
  items.push(richPara([{ text: "7.4. Engage in cookie stuffing \u2014 ", bold: true }, { text: "You may not use hidden iframes, forced clicks, automatic redirects, or any other technique designed to place tracking cookies without the visitor's knowledge or genuine intent to visit The English Hub." }]));
  items.push(richPara([{ text: "7.5. Incentivise clicks or sign-ups artificially \u2014 ", bold: true }, { text: "You may not offer cash, gift cards, or other direct incentives in exchange for clicking your Affiliate Link or creating an account, unless explicitly approved by us in writing." }]));
  items.push(richPara([{ text: "7.6. Generate fraudulent referrals \u2014 ", bold: true }, { text: "You may not refer yourself, create fake accounts, or use any method to artificially inflate referral counts or commission." }]));
  items.push(richPara([{ text: "7.7. Promote on inappropriate content \u2014 ", bold: true }, { text: "You may not place your Affiliate Link on websites or alongside content that is unlawful, offensive, defamatory, discriminatory, sexually explicit, or otherwise inappropriate for an education-focused audience." }]));
  items.push(richPara([{ text: "7.8. Modify your Affiliate Link \u2014 ", bold: true }, { text: "You may not alter, redirect, or cloak your Affiliate Link in a way that interferes with accurate tracking and attribution." }]));
  items.push(divider());

  // 8. Intellectual Property
  items.push(heading3("8. Intellectual Property"));
  items.push(para("8.1. We grant you a limited, non-exclusive, revocable licence to use The English Hub name, logo, and approved marketing assets solely for the purpose of promoting The English Hub as part of the Programme."));
  items.push(para("8.2. You may not modify our logo, trademarks, or branding assets except as permitted in our brand guidelines."));
  items.push(para("8.3. All intellectual property rights in The English Hub platform, content, and brand remain exclusively ours."));
  items.push(divider());

  // 9. Limitation of Liability
  items.push(heading3("9. Limitation of Liability"));
  items.push(para("9.1. We provide the Programme on an \u201Cas is\u201D basis. We make no guarantees regarding the level of income you will earn, the conversion rate of referrals, or the continued availability of the Programme."));
  items.push(para("9.2. Our total liability to you in connection with the Programme shall not exceed the total commission payments made to you in the 12 months preceding any claim."));
  items.push(para("9.3. We shall not be liable for any indirect, incidental, consequential, or special damages arising from your participation in the Programme."));
  items.push(divider());

  // 10. Termination
  items.push(heading3("10. Termination"));
  items.push(richPara([{ text: "10.1. By you: ", bold: true }, { text: "You may terminate your participation in the Programme at any time by written notice to affiliates@theenglishhub.co.uk. Outstanding commission above the minimum threshold will be paid in the next payment cycle." }]));
  items.push(richPara([{ text: "10.2. By us: ", bold: true }, { text: "We may terminate your participation at any time for any reason with 14 days' written notice. Outstanding commission earned in good faith before the termination date will be paid." }]));
  items.push(richPara([{ text: "10.3. Immediate termination: ", bold: true }, { text: "We may terminate your participation immediately, without notice, if you breach any of these terms \u2014 in particular (but not limited to) the Prohibited Practices set out in Section 7. In the event of termination for breach, we reserve the right to withhold any unpaid commission." }]));
  items.push(para("10.4. Upon termination, you must immediately cease using your Affiliate Link and remove all English Hub branding and marketing materials from your channels."));
  items.push(divider());

  // 11. Modifications
  items.push(heading3("11. Modifications to These Terms"));
  items.push(para("11.1. We may update these terms at any time. We will notify you of material changes by email at least 14 days before they take effect."));
  items.push(para("11.2. Your continued participation in the Programme after changes take effect constitutes acceptance of the updated terms."));
  items.push(divider());

  // 12. Governing Law
  items.push(heading3("12. Governing Law"));
  items.push(para("12.1. These terms are governed by the laws of England and Wales."));
  items.push(para("12.2. Any dispute arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales."));
  items.push(divider());

  // 13. Contact
  items.push(heading3("13. Contact"));
  items.push(para("For any questions about these terms or the Programme:"));
  items.push(richPara([{ text: "Email: ", bold: true }, { text: "affiliates@theenglishhub.co.uk" }]));
  items.push(richPara([{ text: "Website: ", bold: true }, { text: "https://theenglishhub.co.uk/affiliates" }]));
  items.push(divider());
  items.push(para("End of Affiliate Programme Terms and Conditions", { italics: true, color: ACCENT_GREY }));

  return items;
}

// ===================================================================
// Assemble document
// ===================================================================
async function main() {
  const doc = new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 20 } } },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: BRAND_BLUE },
          paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 },
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: BRAND_BLUE },
          paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 1 },
        },
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
            children: [new TextRun({ text: "The English Hub \u2014 Affiliate Marketing Assets", font: "Arial", size: 16, color: ACCENT_GREY, italics: true })],
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
        // ---- Title page ----
        new Paragraph({ spacing: { before: 2400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "The English Hub", bold: true, font: "Arial", size: 48, color: BRAND_BLUE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Affiliate Marketing Assets", font: "Arial", size: 32, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_BLUE, space: 8 } },
          children: [new TextRun({ text: "Complete, Ready-to-Use Affiliate Marketing Collateral", font: "Arial", size: 22, color: ACCENT_GREY, italics: true })],
        }),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "All copy in British English | Tone: professional but approachable", font: "Arial", size: 18, italics: true, color: ACCENT_GREY })],
        }),
        new Paragraph({ spacing: { after: 120 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Date: March 2026", font: "Arial", size: 18, color: ACCENT_GREY })] }),

        // ---- Table of Contents ----
        new Paragraph({ children: [new PageBreak()] }),
        heading1("Table of Contents"),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: "1.  Affiliate Welcome Email", font: "Arial", size: 22, color: BRAND_BLUE })],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: "2.  Social Media Post Templates", font: "Arial", size: 22, color: BRAND_BLUE })],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: "3.  Email Templates for Affiliates", font: "Arial", size: 22, color: BRAND_BLUE })],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: "4.  Banner Ad Copy", font: "Arial", size: 22, color: BRAND_BLUE })],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: "5.  Affiliate Landing Page Copy", font: "Arial", size: 22, color: BRAND_BLUE })],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: "6.  Affiliate Programme Terms", font: "Arial", size: 22, color: BRAND_BLUE })],
        }),

        // ---- Sections ----
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection1(),
        ...buildSection2(),
        ...buildSection3(),
        ...buildSection4(),
        ...buildSection5(),
        ...buildSection6(),
      ],
    }],
  });

  const outDir = "D:/Coding/english-hub/docs";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const buffer = await Packer.toBuffer(doc);
  const outPath = `${outDir}/Affiliate_Marketing_Assets.docx`;
  fs.writeFileSync(outPath, buffer);
  console.log(`Created: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch(console.error);
