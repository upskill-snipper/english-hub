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

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER_CLR };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// --- helpers ---
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

function richPara(runs, paraOpts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...paraOpts,
    children: runs.map(r => new TextRun({ font: "Arial", size: 20, ...r })),
  });
}

function bulletItem(text, opts = {}, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20, ...opts })],
  });
}

function richBullet(runs, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 60 },
    children: runs.map(r => new TextRun({ font: "Arial", size: 20, ...r })),
  });
}

function numberedItem(text, opts = {}, level = 0) {
  return new Paragraph({
    numbering: { reference: "numbers", level },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20, ...opts })],
  });
}

function richNumbered(runs, level = 0) {
  return new Paragraph({
    numbering: { reference: "numbers", level },
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

function calloutBox(lines) {
  // Styled blockquote with left border and light background
  return lines.map((line, i) => new Paragraph({
    spacing: { before: i === 0 ? 120 : 40, after: i === lines.length - 1 ? 120 : 40 },
    indent: { left: 720 },
    border: { left: { style: BorderStyle.SINGLE, size: 6, color: BRAND_BLUE, space: 8 } },
    shading: { fill: BRAND_LIGHT, type: ShadingType.CLEAR },
    children: [new TextRun({ text: line, font: "Arial", size: 20, italics: true, color: ACCENT_GREY })],
  }));
}

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

  const dataRows = rows.map((row, ri) =>
    new TableRow({
      children: row.map((cell, ci) =>
        new TableCell({
          borders,
          width: { size: colWidths[ci], type: WidthType.DXA },
          shading: ri % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined,
          margins: cellMargins,
          children: [new Paragraph({ children: parseCellRuns(cell) })],
        })
      ),
    })
  );

  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows],
  });
}

function parseCellRuns(text) {
  // Handle **bold** in table cells
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map(p => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return new TextRun({ text: p.slice(2, -2), font: "Arial", size: 20, bold: true });
    }
    return new TextRun({ text: p, font: "Arial", size: 20 });
  });
}

// ================================================================
// SECTION BUILDERS
// ================================================================

function buildSection1() {
  const items = [];

  items.push(heading1("1. Market Analysis"));

  // 1.1 Target Market Size
  items.push(heading2("1.1 Target Market Size"));

  items.push(para("UK Market (Primary)", { bold: true }));
  items.push(bulletItem("~1,019,000 students sat GCSEs in Summer 2025 (Ofqual data)"));
  items.push(bulletItem("801,787 entries for GCSE English Language alone in Summer 2025"));
  items.push(bulletItem("English Language + English Literature are compulsory -- virtually every GCSE student is a potential customer"));
  items.push(bulletItem("Year 10 students (pre-exam year) add another ~550,000 who are actively revising"));
  items.push(richBullet([{ text: "Total addressable UK market: ~1.5 million students in Years 10-11 at any given time", bold: true }]));
  items.push(bulletItem("At 2% penetration = 30,000 subscribers = ~GBP 300K ARR (monthly plan) to ~GBP 2.4M ARR (annual plan)"));

  items.push(para("International Market (Qatar, UAE, Saudi Arabia, Kuwait, Bahrain, Oman)", { bold: true }));
  items.push(bulletItem("784 international schools in UAE alone; 52+ British curriculum schools in Qatar"));
  items.push(bulletItem("ISC Research records 14,833 K-12 international schools globally; British/Cambridge curriculum is the most common"));
  items.push(bulletItem("Estimated 200,000+ students taking IGCSE English across GCC countries"));
  items.push(bulletItem("British curriculum schools in the region charge GBP 8,000-25,000/year in fees -- parents have high willingness to pay for supplementary resources"));
  items.push(richBullet([{ text: "Total addressable international market: ~200,000 IGCSE English students in GCC", bold: true }]));
  items.push(bulletItem("At 3% penetration (higher due to less competition) = 6,000 subscribers = ~GBP 480K ARR"));

  items.push(richPara([{ text: "Combined TAM estimate: ~1.7 million students, SAM: ~GBP 3M ARR at modest penetration", bold: true }]));

  // 1.2 Competitor Landscape
  items.push(heading2("1.2 Competitor Landscape"));

  items.push(makeTable(
    ["Competitor", "Pricing", "Strengths", "Weaknesses"],
    [
      ["**Seneca Learning**", "Free tier + Premium ~GBP 17/mo seasonal, ~GBP 9/mo annual", "Huge user base, free tier drives adoption, covers all subjects, memory science approach", "Generic -- not English-specialist. AI marking is basic. No dedicated IGCSE content."],
      ["**Save My Exams**", "~GBP 9-15/mo (7-day trial)", "Excellent exam-board-specific notes, past paper solutions, strong SEO", "Static content -- notes/PDFs, no AI feedback, no interactive modules, no essay marking"],
      ["**Mr Bruff**", "Free YouTube (430K subs, 86M views) + eBooks (GBP 3-8 each)", "Massive brand recognition, trusted by students, free content funnel", "One teacher's perspective only, no platform/interactivity, no mock exams, no AI, no progress tracking"],
      ["**CGP Books**", "One-off purchases GBP 5-12 per book, CGP+ digital subscription", "Ubiquitous in UK schools, trusted brand, physical+digital", "Traditional publisher -- limited interactivity, no AI, no personalisation, not subscription-focused"],
      ["**York Notes (Pearson)**", "GBP 5-7 per text guide", "Exam board aligned, available in shops", "Static guides only, no technology integration"],
      ["**Tutorful/MyTutor**", "GBP 20-50/hr for 1:1 tutoring", "Personalised, human interaction", "20-50x more expensive, not scalable, no self-paced option"],
    ],
    [2000, 2400, 2500, 2460]
  ));

  // 1.3 Positioning & USP
  items.push(heading2("1.3 Positioning & USP"));

  items.push(richPara([
    { text: "Positioning statement: ", bold: true },
    { text: "The English Hub is the only GCSE/IGCSE English platform that combines exam-board-specific courses (AQA, Edexcel, OCR, WJEC, Cambridge IGCSE) with AI-powered essay feedback, giving students a personal English tutor at 1/50th the cost." },
  ]));

  items.push(para("Core differentiators vs. each competitor:", { bold: true }));
  items.push(richNumbered([{ text: "vs. Seneca: ", bold: true }, { text: "English-specialist depth (every text, every question type) vs. Seneca's broad-but-shallow coverage" }]));
  items.push(richNumbered([{ text: "vs. Save My Exams: ", bold: true }, { text: "Interactive modules + AI essay feedback vs. static PDFs" }]));
  items.push(richNumbered([{ text: "vs. Mr Bruff: ", bold: true }, { text: "Structured learning path with progress tracking + mock exams vs. unstructured YouTube videos" }]));
  items.push(richNumbered([{ text: "vs. CGP: ", bold: true }, { text: "Digital-first with AI personalisation vs. traditional publishing" }]));
  items.push(richNumbered([{ text: "vs. Tutors: ", bold: true }, { text: "GBP 9.99/mo vs. GBP 120+/mo for weekly sessions, available 24/7" }]));

  items.push(richPara([{ text: "One-line pitch for marketing: ", bold: true }, { text: "\"Your AI English tutor. Exam-board specific. GBP 9.99/month.\"", italics: true }]));

  items.push(divider());
  return items;
}

function buildSection2() {
  const items = [];

  items.push(heading1("2. Go-To-Market Strategy"));

  // Phase 1
  items.push(heading2("Phase 1: Pre-Launch (Weeks 1-2)"));
  items.push(richPara([{ text: "Objective: ", bold: true }, { text: "Build a waiting list of 500+ email subscribers and recruit first 20 affiliates." }]));
  items.push(para("Tactics:", { bold: true }));

  items.push(richNumbered([{ text: "Landing page with waitlist ", bold: true }, { text: "(if not already live)" }]));
  items.push(bulletItem("Hero: \"GCSE English revision that actually marks your essays. Join the waitlist for early access + 50% off your first 3 months.\"", {}, 1));
  items.push(bulletItem("Collect: name, email, year group, exam board", {}, 1));
  items.push(bulletItem("Use this data to segment email nurture from day one", {}, 1));

  items.push(richNumbered([{ text: "Affiliate recruitment sprint ", bold: true }, { text: "(details in Section 3)" }]));
  items.push(bulletItem("Personally reach out to 50 micro-influencers and education creators", {}, 1));
  items.push(bulletItem("Target: 20 signed up with Rewardful links by end of week 2", {}, 1));
  items.push(bulletItem("Provide early access to the platform so they can create authentic content", {}, 1));

  items.push(richNumbered([{ text: "Social media setup and content banking", bold: true }]));
  items.push(bulletItem("Create accounts: TikTok, Instagram, YouTube (Shorts), Twitter/X", {}, 1));
  items.push(bulletItem("Bank 20 short-form videos: essay tips, exam technique, \"grade 9 vs grade 5\" comparisons", {}, 1));
  items.push(bulletItem("Schedule first 2 weeks of daily posts", {}, 1));

  items.push(richNumbered([{ text: "Teacher outreach (warm leads)", bold: true }]));
  items.push(bulletItem("Email 100 English HoDs at UK schools (scrape from school websites or use TES Jobs contacts)", {}, 1));
  items.push(bulletItem("Offer free school dashboard trial for the rest of the academic year", {}, 1));
  items.push(bulletItem("Target: 10 schools trialling by end of pre-launch", {}, 1));

  items.push(richNumbered([{ text: "SEO foundation", bold: true }]));
  items.push(bulletItem("Publish 10 cornerstone blog posts targeting high-volume keywords (see Section 5)", {}, 1));
  items.push(bulletItem("Ensure all course pages are indexed with proper schema markup", {}, 1));

  items.push(para("Deliverables by end of week 2:", { bold: true }));
  items.push(bulletItem("500+ waitlist emails"));
  items.push(bulletItem("20 affiliates onboarded with Rewardful"));
  items.push(bulletItem("40+ social media posts scheduled"));
  items.push(bulletItem("10 blog posts live"));
  items.push(bulletItem("10 schools in trial pipeline"));

  // Phase 2
  items.push(heading2("Phase 2: Soft Launch (Weeks 3-4)"));
  items.push(richPara([{ text: "Objective: ", bold: true }, { text: "Convert waitlist to 100 free trials, achieve 30%+ trial-to-paid conversion, gather testimonials." }]));
  items.push(para("Tactics:", { bold: true }));

  items.push(richNumbered([{ text: "Waitlist launch email sequence", bold: true }]));
  items.push(bulletItem("Email 1 (Day 1): \"We're live -- claim your 50% off\" (scarcity: first 200 sign-ups only)", {}, 1));
  items.push(bulletItem("Email 2 (Day 3): Feature walkthrough + 60-second demo video", {}, 1));
  items.push(bulletItem("Email 3 (Day 7): Social proof -- \"Here's what beta users are saying\"", {}, 1));
  items.push(bulletItem("Email 4 (Day 14): Trial ending reminder + annual plan pitch", {}, 1));

  items.push(richNumbered([{ text: "Affiliate activation", bold: true }]));
  items.push(bulletItem("Notify all affiliates that the platform is live", {}, 1));
  items.push(bulletItem("Provide each with a unique discount code (e.g., BRUFF15 for 15% off) stacked on top of the launch offer", {}, 1));
  items.push(bulletItem("Run a \"first 10 sales\" bonus: GBP 50 extra for affiliates who drive 10 conversions in the first 2 weeks", {}, 1));

  items.push(richNumbered([{ text: "Content blitz", bold: true }]));
  items.push(bulletItem("Affiliates and in-house team post coordinated content during launch week", {}, 1));
  items.push(bulletItem("Target: 50+ pieces of content across all channels in 2 weeks", {}, 1));
  items.push(bulletItem("Host one live \"GCSE English Masterclass\" on YouTube/TikTok to drive sign-ups", {}, 1));

  items.push(richNumbered([{ text: "Feedback loop", bold: true }]));
  items.push(bulletItem("In-app survey after first 7 days: NPS score + \"What would make this worth paying for?\"", {}, 1));
  items.push(bulletItem("Personally email the first 50 users asking for video testimonials (offer 1 month free for a 30-second clip)", {}, 1));

  items.push(richNumbered([{ text: "Reddit and Student Room seeding", bold: true }]));
  items.push(bulletItem("Post genuinely helpful English revision content on r/GCSE, The Student Room", {}, 1));
  items.push(bulletItem("Not overt promotion -- become a valued contributor, mention the platform when relevant", {}, 1));
  items.push(bulletItem("Target subreddits: r/GCSE (45K members), r/6thForm, r/TeachingUK", {}, 1));

  items.push(para("Deliverables by end of week 4:", { bold: true }));
  items.push(bulletItem("100+ free trial sign-ups"));
  items.push(bulletItem("30+ paid conversions"));
  items.push(bulletItem("5+ testimonials (text or video)"));
  items.push(bulletItem("3+ affiliate-driven sign-ups validated"));

  // Phase 3
  items.push(heading2("Phase 3: Growth (Months 2-3)"));
  items.push(richPara([{ text: "Objective: ", bold: true }, { text: "Reach 300 paying subscribers. Establish affiliate channel as primary growth driver." }]));
  items.push(para("Tactics:", { bold: true }));

  items.push(richNumbered([{ text: "Scale affiliate program to 50 active affiliates", bold: true }]));
  items.push(bulletItem("Tier-based outreach (see Section 3 for full breakdown)", {}, 1));
  items.push(bulletItem("Launch affiliate leaderboard with monthly prizes", {}, 1));
  items.push(bulletItem("Host monthly affiliate webinar showing top-performing content/strategies", {}, 1));

  items.push(richNumbered([{ text: "Paid advertising (test budget)", bold: true }]));
  items.push(bulletItem("Google Ads: Target \"GCSE English revision\" keywords (GBP 2-4 CPC estimated)", {}, 1));
  items.push(bulletItem("TikTok Ads: Spark Ads boosting best-performing organic content (GBP 5-10/day test)", {}, 1));
  items.push(bulletItem("Facebook/Instagram: Retargeting website visitors + lookalike audiences from converters", {}, 1));
  items.push(bulletItem("Total test budget: GBP 300-500/month", {}, 1));

  items.push(richNumbered([{ text: "School partnerships push", bold: true }]));
  items.push(bulletItem("Attend 2-3 education conferences/expos (e.g., Bett Show, Education Show)", {}, 1));
  items.push(bulletItem("Offer \"class licence\" pricing to schools (see Section 4)", {}, 1));
  items.push(bulletItem("Target: 5 schools with paid subscriptions", {}, 1));

  items.push(richNumbered([{ text: "Content scaling", bold: true }]));
  items.push(bulletItem("Publish 2 blog posts/week (SEO-driven)", {}, 1));
  items.push(bulletItem("Weekly YouTube video (full essay walkthrough or exam technique)", {}, 1));
  items.push(bulletItem("Daily TikTok/Shorts (reuse blog content as micro-content)", {}, 1));

  items.push(richNumbered([{ text: "International market entry", bold: true }]));
  items.push(bulletItem("Reach out to 20 British curriculum schools in Qatar and UAE directly", {}, 1));
  items.push(bulletItem("Partner with 5 Middle East education influencers/tutors", {}, 1));
  items.push(bulletItem("Localise marketing for exam season differences (IGCSE exams May/June and Oct/Nov)", {}, 1));

  items.push(para("Deliverables by end of month 3:", { bold: true }));
  items.push(bulletItem("300 paying subscribers (~GBP 3K MRR)"));
  items.push(bulletItem("50 active affiliates"));
  items.push(bulletItem("5+ school partnerships"));
  items.push(bulletItem("10,000+ monthly website visitors"));

  // Phase 4
  items.push(heading2("Phase 4: Scale (Months 4-6)"));
  items.push(richPara([{ text: "Objective: ", bold: true }, { text: "Reach 1,000 paying subscribers. Establish sustainable growth engine." }]));
  items.push(para("Tactics:", { bold: true }));

  items.push(richNumbered([{ text: "Double down on what works", bold: true }]));
  items.push(bulletItem("Analyse months 1-3 data: which channels, affiliates, and content types drive best LTV:CAC", {}, 1));
  items.push(bulletItem("Shift 80% of budget to top 2 performing channels", {}, 1));

  items.push(richNumbered([{ text: "Affiliate program expansion to 100+ affiliates", bold: true }]));
  items.push(bulletItem("Open self-serve affiliate sign-up page", {}, 1));
  items.push(bulletItem("Launch \"Teacher Ambassador\" programme (teachers earn commissions + free premium access)", {}, 1));
  items.push(bulletItem("Target: 30 teacher ambassadors actively recommending to students", {}, 1));

  items.push(richNumbered([{ text: "Exam season campaign (January-May)", bold: true }]));
  items.push(bulletItem("This is the critical window. Every piece of marketing should reference exam dates", {}, 1));
  items.push(bulletItem("\"100 days to your GCSE\" countdown campaign starting in January", {}, 1));
  items.push(bulletItem("Offer \"Exam Season Pass\" -- 5-month subscription at GBP 29.99 (covers Jan-May)", {}, 1));
  items.push(bulletItem("Ramp ad spend 2x during this period", {}, 1));

  items.push(richNumbered([{ text: "Referral programme (distinct from affiliate)", bold: true }]));
  items.push(bulletItem("Students refer friends: both get 1 month free", {}, 1));
  items.push(bulletItem("Viral loop: shareable progress badges, mock exam results cards for social media", {}, 1));

  items.push(richNumbered([{ text: "B2B sales pipeline", bold: true }]));
  items.push(bulletItem("Hire part-time sales rep or allocate founder time for school sales", {}, 1));
  items.push(bulletItem("Target: 20 schools by end of month 6", {}, 1));
  items.push(bulletItem("School pipeline for September intake (new academic year)", {}, 1));

  items.push(para("Deliverables by end of month 6:", { bold: true }));
  items.push(bulletItem("1,000 paying subscribers (~GBP 10K MRR)"));
  items.push(bulletItem("100+ affiliates, 30+ teacher ambassadors"));
  items.push(bulletItem("20+ school partnerships"));
  items.push(bulletItem("25,000+ monthly website visitors"));
  items.push(bulletItem("Clear path to GBP 20K MRR by month 12"));

  items.push(divider());
  return items;
}

function buildSection3() {
  const items = [];

  items.push(heading1("3. Affiliate Marketing Campaign (PRIMARY CHANNEL)"));

  // 3.1
  items.push(heading2("3.1 Why Affiliates First"));
  items.push(para("For a bootstrapped EdTech platform at GBP 9.99/month, affiliate marketing is the optimal primary channel because:"));
  items.push(richBullet([{ text: "Zero upfront cost", bold: true }, { text: " -- you only pay when revenue is generated" }]));
  items.push(richBullet([{ text: "Trust transfer", bold: true }, { text: " -- education purchases are trust-driven; a teacher's recommendation converts 5-10x better than an ad" }]));
  items.push(richBullet([{ text: "Recurring revenue alignment", bold: true }, { text: " -- 20% recurring commission incentivises affiliates to promote retention, not just sign-ups" }]));
  items.push(richBullet([{ text: "Compound growth", bold: true }, { text: " -- each affiliate is a permanent acquisition channel that grows over time" }]));

  // 3.2
  items.push(heading2("3.2 Tier Structure"));

  // Tier 1
  items.push(heading3("Tier 1: Education Micro-Influencers (TikTok/YouTube/Instagram, 1K-50K followers)"));
  items.push(makeTable(
    ["Detail", "Specification"],
    [
      ["**Target count**", "30 by month 3, 60 by month 6"],
      ["**Commission**", "20% recurring (standard)"],
      ["**Bonus**", "GBP 50 bonus for first 10 conversions within 30 days"],
      ["**Profile**", "Student study accounts, GCSE revision creators, \"study with me\" channels"],
      ["**Where to find**", "TikTok search \"GCSE revision\" / \"GCSE English\" / \"study with me GCSE\"; Instagram hashtags #GCSErevision #GCSEEnglish; YouTube search \"GCSE English walkthrough\""],
      ["**Outreach method**", "DM with personalised message + free premium access + unique discount code"],
      ["**Expected conversion**", "5-15 sign-ups per active micro-influencer per month"],
    ],
    [2400, 7000]
  ));

  items.push(para("Example outreach DM:", { bold: true }));
  items.push(...calloutBox([
    "Hi [Name]! I love your GCSE revision content -- especially your [specific video/post].",
    "We've just launched The English Hub, an AI-powered GCSE English platform that gives",
    "essay feedback in seconds. Would you like free lifetime access + earn 20% recurring",
    "commission for every student you refer? I'd love to send you a demo. No pressure at all!",
  ]));

  // Tier 2
  items.push(heading3("Tier 2: Teachers & Tutors"));
  items.push(makeTable(
    ["Detail", "Specification"],
    [
      ["**Target count**", "30 by month 3, 50 by month 6"],
      ["**Commission**", "20% recurring + \"Teacher Ambassador\" badge + free premium access"],
      ["**Bonus**", "GBP 100 bonus at 25 conversions; featured on \"Recommended by Teachers\" page"],
      ["**Profile**", "English teachers with online presence (blog, YouTube, TES resources), private tutors"],
      ["**Where to find**", "TES Resources (search English GCSE -- top uploaders), TeachIt, Twitter/X #TeamEnglish #EnglishTeacher, Tutorful/MyTutor tutor profiles, Mr Bruff-style creators"],
      ["**Outreach method**", "Email (professional tone), offering free school dashboard access + personal affiliate link"],
      ["**Expected conversion**", "10-30 sign-ups per active teacher per month (they have captive audiences)"],
    ],
    [2400, 7000]
  ));

  items.push(para("Example outreach email:", { bold: true }));
  items.push(...calloutBox([
    "Subject: Free AI essay feedback tool for your students",
    "",
    "Hi [Name],",
    "",
    "I'm [Your Name], founder of The English Hub. I noticed your excellent [GCSE",
    "resource/YouTube channel/blog] and wanted to reach out.",
    "",
    "We've built an AI-powered GCSE English platform that gives students instant essay",
    "feedback on AQA/Edexcel/OCR/WJEC papers. I'd love to offer you:",
    "",
    "\u2022 Free lifetime premium access",
    "\u2022 Free school dashboard for your classes",
    "\u2022 20% recurring commission on any students you refer",
    "",
    "Would you be open to a 15-minute demo? Happy to work around your schedule.",
  ]));

  // Tier 3
  items.push(heading3("Tier 3: Education Bloggers & Parent Influencers"));
  items.push(makeTable(
    ["Detail", "Specification"],
    [
      ["**Target count**", "15 by month 3, 30 by month 6"],
      ["**Commission**", "20% recurring"],
      ["**Bonus**", "Sponsored post fee (GBP 50-150) for dedicated review posts"],
      ["**Profile**", "Parenting bloggers (kids in Year 10-11), education review sites, homeschool communities"],
      ["**Where to find**", "Google \"best GCSE revision resources\" (approach site owners), Mumsnet education forum, parent blogger networks (Tots100, BritMums), homeschool Facebook groups"],
      ["**Outreach method**", "Email offering free access + affiliate opportunity + optional paid review"],
      ["**Expected conversion**", "3-8 sign-ups per blogger per month (lower volume, higher intent)"],
    ],
    [2400, 7000]
  ));

  // Tier 4
  items.push(heading3("Tier 4: Strategic Partners (Schools, Tuition Centres, Education Charities)"));
  items.push(makeTable(
    ["Detail", "Specification"],
    [
      ["**Target count**", "10 by month 3, 25 by month 6"],
      ["**Commission**", "15% recurring (lower rate, higher volume) or bulk licensing deal"],
      ["**Profile**", "Tuition centres (Kumon, Explore Learning, independents), education charities (Sutton Trust, IntoUniversity), homeschool co-ops"],
      ["**Where to find**", "Direct outreach, LinkedIn, education directories"],
      ["**Outreach method**", "Partnership proposal with co-branded landing page"],
      ["**Expected conversion**", "20-100 sign-ups per partner (batch referrals)"],
    ],
    [2400, 7000]
  ));

  // 3.3
  items.push(heading2("3.3 Commission Structure Summary"));
  items.push(makeTable(
    ["Element", "Details"],
    [
      ["**Standard commission**", "20% recurring for the lifetime of the customer"],
      ["**Cookie duration**", "30 days"],
      ["**Minimum payout**", "GBP 25"],
      ["**Payment frequency**", "Monthly (net 30)"],
      ["**Payment method**", "PayPal or bank transfer via Rewardful"],
      ["**First-sale bonus**", "GBP 5 bonus on first referred conversion (activation incentive)"],
      ["**Volume bonus**", "GBP 50 at 10 conversions/month; GBP 150 at 25 conversions/month"],
      ["**Annual plan bonus**", "Additional 5% one-time bonus when a referral chooses the annual plan (GBP 79.99)"],
    ],
    [2400, 7000]
  ));

  items.push(para("Commission economics:", { bold: true }));
  items.push(bulletItem("Monthly subscriber at GBP 9.99: affiliate earns GBP 2.00/month recurring"));
  items.push(bulletItem("Annual subscriber at GBP 79.99: affiliate earns GBP 16.00/year + GBP 4.00 annual bonus = GBP 20.00"));
  items.push(bulletItem("A teacher ambassador referring 50 annual subscribers = GBP 1,000/year passive income"));
  items.push(richBullet([{ text: "Your effective CAC via affiliates: GBP 0 upfront, ~20% of revenue ongoing (vs. 50-100% of first-year revenue for paid ads)", bold: true }]));

  // 3.4
  items.push(heading2("3.4 Recruitment Strategy & Targets"));

  items.push(para("Month 1 target: 25 affiliates", { bold: true }));
  items.push(bulletItem("10 micro-influencers (DM outreach, 50 contacted, 20% conversion)"));
  items.push(bulletItem("10 teachers (email outreach, 40 contacted, 25% conversion)"));
  items.push(bulletItem("5 bloggers/parents (email outreach, 20 contacted, 25% conversion)"));

  items.push(para("Month 3 target: 75 affiliates", { bold: true }));
  items.push(bulletItem("30 micro-influencers"));
  items.push(bulletItem("30 teachers"));
  items.push(bulletItem("15 bloggers/partners"));

  items.push(para("Month 6 target: 150 affiliates", { bold: true }));
  items.push(bulletItem("60 micro-influencers"));
  items.push(bulletItem("50 teachers"));
  items.push(bulletItem("30 bloggers/partners"));
  items.push(bulletItem("10 strategic partners"));

  items.push(para("Recruitment channels:", { bold: true }));
  items.push(richNumbered([{ text: "Manual DM/email outreach", bold: true }, { text: " -- highest conversion, most time-intensive. Budget 1 hour/day." }]));
  items.push(richNumbered([{ text: "\"Become an affiliate\" page", bold: true }, { text: " on website -- passive inbound. Promote in footer, blog posts, social bios." }]));
  items.push(richNumbered([{ text: "Affiliate directories", bold: true }, { text: " -- List on affiliate networks (ShareASale, PartnerStack marketplace) for inbound discovery." }]));
  items.push(richNumbered([{ text: "Existing customer referrals", bold: true }, { text: " -- Email all paying customers at month 2: \"Love The English Hub? Earn 20% by sharing it.\"" }]));
  items.push(richNumbered([{ text: "Conference/event networking", bold: true }, { text: " -- Education conferences, TeachMeets, English teacher meetups." }]));

  // 3.5
  items.push(heading2("3.5 Onboarding Flow"));
  items.push(para("Automated sequence (via Rewardful + email):", { bold: true }));

  items.push(para("Step 1: Sign-up confirmation (immediate)", { bold: true }));
  items.push(bulletItem("Welcome email with Rewardful dashboard login"));
  items.push(bulletItem("Unique affiliate link + how it works"));
  items.push(bulletItem("Commission structure summary"));

  items.push(para("Step 2: Resource pack (Day 1)", { bold: true }));
  items.push(bulletItem("Email with link to affiliate resource hub containing:"));
  items.push(bulletItem("5 banner ads (728x90, 300x250, 160x600, 1080x1080, 1080x1920)", {}, 1));
  items.push(bulletItem("3 pre-written email templates (for teachers, parents, students)", {}, 1));
  items.push(bulletItem("5 social media post templates with images", {}, 1));
  items.push(bulletItem("2 short demo videos (30s and 60s) for sharing", {}, 1));
  items.push(bulletItem("Product fact sheet (features, pricing, exam boards covered)", {}, 1));
  items.push(bulletItem("Unique discount code (AFFILIATE15 = 15% off first 3 months)", {}, 1));

  items.push(para("Step 3: Platform walkthrough (Day 2)", { bold: true }));
  items.push(bulletItem("Email with 5-minute Loom video tour of the platform"));
  items.push(bulletItem("Encourage them to use the product themselves first"));
  items.push(bulletItem("\"The best affiliates are genuine users\""));

  items.push(para("Step 4: First promotion prompt (Day 5)", { bold: true }));
  items.push(bulletItem("\"Ready to start earning? Here are 3 quick ways to share The English Hub today\""));
  items.push(bulletItem("Suggest: Instagram story, blog mention, or email to their list"));
  items.push(bulletItem("Include copy-paste content for each"));

  items.push(para("Step 5: Check-in (Day 14)", { bold: true }));
  items.push(bulletItem("Personal email (from founder, not automated-feeling)"));
  items.push(bulletItem("\"How's it going? Any questions? Here's what's working for our top affiliates...\""));
  items.push(bulletItem("Share a real example of a successful promotion"));

  items.push(para("Step 6: Monthly performance email (ongoing)", { bold: true }));
  items.push(bulletItem("Commission earned, clicks, conversions"));
  items.push(bulletItem("New resources/content available"));
  items.push(bulletItem("Upcoming promotions they can leverage"));

  // 3.6
  items.push(heading2("3.6 Affiliate Resources to Provide"));
  items.push(para("Creative assets (hosted on dedicated affiliate portal page):", { bold: true }));

  items.push(richNumbered([{ text: "Banner ads", bold: true }, { text: " -- 5 sizes, 3 variants each (15 total)" }]));
  items.push(bulletItem("Variant A: \"AI Essay Feedback -- Try Free for 30 Days\"", {}, 1));
  items.push(bulletItem("Variant B: \"GCSE English Sorted. GBP 9.99/month.\"", {}, 1));
  items.push(bulletItem("Variant C: \"Your Students Will Thank You\" (teacher-targeted)", {}, 1));

  items.push(richNumbered([{ text: "Social media templates", bold: true }, { text: " -- Canva-editable" }]));
  items.push(bulletItem("Instagram carousel: \"5 things I wish I knew before my GCSE English exam\"", {}, 1));
  items.push(bulletItem("TikTok script: \"POV: You get instant AI feedback on your essay\"", {}, 1));
  items.push(bulletItem("Twitter thread template: \"Here's how I'm revising for GCSE English...\"", {}, 1));

  items.push(richNumbered([{ text: "Email swipe copy", bold: true }, { text: " -- 3 versions" }]));
  items.push(bulletItem("For teachers emailing students/parents", {}, 1));
  items.push(bulletItem("For bloggers emailing their list", {}, 1));
  items.push(bulletItem("For influencers emailing their community", {}, 1));

  items.push(richNumbered([{ text: "Video assets", bold: true }]));
  items.push(bulletItem("30-second product demo (screen recording)", {}, 1));
  items.push(bulletItem("60-second \"why The English Hub\" explainer", {}, 1));
  items.push(bulletItem("B-roll footage affiliates can use in their own videos", {}, 1));

  items.push(richNumbered([{ text: "Discount codes", bold: true }]));
  items.push(bulletItem("Each affiliate gets a unique code: [NAME]15 = 15% off first 3 months", {}, 1));
  items.push(bulletItem("Stackable with free trial (30-day trial + 15% off when they convert)", {}, 1));

  items.push(richNumbered([{ text: "Comparison content", bold: true }]));
  items.push(bulletItem("\"The English Hub vs. Seneca\" one-pager", {}, 1));
  items.push(bulletItem("\"The English Hub vs. Save My Exams\" one-pager", {}, 1));
  items.push(bulletItem("\"The English Hub vs. Private Tutoring\" cost comparison", {}, 1));

  // 3.7
  items.push(heading2("3.7 Performance Tracking & Optimisation"));

  items.push(para("Rewardful dashboard metrics to monitor weekly:", { bold: true }));
  items.push(bulletItem("Clicks per affiliate"));
  items.push(bulletItem("Click-to-trial conversion rate (target: 15-25%)"));
  items.push(bulletItem("Trial-to-paid conversion rate (target: 25-35%)"));
  items.push(bulletItem("Revenue per affiliate"));
  items.push(bulletItem("Customer LTV by affiliate source"));

  items.push(para("Monthly optimisation actions:", { bold: true }));
  items.push(richNumbered([{ text: "Identify top 10% of affiliates", bold: true }, { text: " -- give them exclusive early access to new features, higher commission tier (25%), priority support" }]));
  items.push(richNumbered([{ text: "Identify inactive affiliates", bold: true }, { text: " (0 clicks in 30 days) -- re-engagement email with new content pack + \"what's holding you back?\" survey" }]));
  items.push(richNumbered([{ text: "A/B test affiliate landing pages", bold: true }, { text: " -- test different headlines, social proof, and CTA copy" }]));
  items.push(richNumbered([{ text: "Analyse which content types drive conversions", bold: true }, { text: " -- if TikTok videos convert 3x better than blog posts, shift resources accordingly" }]));
  items.push(richNumbered([{ text: "Fraud monitoring", bold: true }, { text: " -- watch for self-referrals, cookie stuffing, or incentivised clicks via Rewardful's built-in detection" }]));

  items.push(para("Quarterly affiliate programme review:", { bold: true }));
  items.push(bulletItem("Is 20% the right commission? (Benchmark: Coursera 15-45%, Teachable 30%, industry average 20-25%)"));
  items.push(bulletItem("Are bonuses driving behaviour? Adjust thresholds if too easy/hard"));
  items.push(bulletItem("Should we add a second tier at 25% for affiliates generating 50+/month?"));

  items.push(divider());
  return items;
}

function buildSection4() {
  const items = [];

  items.push(heading1("4. Pricing Strategy"));

  // 4.1
  items.push(heading2("4.1 Core Pricing"));
  items.push(makeTable(
    ["Plan", "Price", "Effective monthly", "Discount vs. monthly"],
    [
      ["Monthly", "GBP 9.99/month", "GBP 9.99", "--"],
      ["Annual", "GBP 79.99/year", "GBP 6.67", "33% off"],
    ],
    [2000, 2500, 2500, 2360]
  ));

  items.push(para("Pricing rationale:", { bold: true }));
  items.push(bulletItem("GBP 9.99/month is below the psychological GBP 10 threshold"));
  items.push(bulletItem("Undercuts Seneca Premium (~GBP 17/month seasonal) by 41%"));
  items.push(bulletItem("Comparable to Save My Exams but with significantly more features (AI feedback, interactivity)"));
  items.push(bulletItem("1/20th the cost of a single tutoring session -- easy ROI argument for parents"));
  items.push(bulletItem("Annual plan at GBP 79.99 is aggressive enough to drive annual uptake (target: 40% of subscribers on annual)"));

  // 4.2
  items.push(heading2("4.2 Launch Offers"));
  items.push(makeTable(
    ["Offer", "Details", "Duration", "Purpose"],
    [
      ["**Early Bird**", "50% off first 3 months (GBP 4.99/mo)", "First 200 sign-ups", "Drive initial adoption, create urgency"],
      ["**Affiliate discount**", "15% off first 3 months (GBP 8.49/mo)", "Ongoing via affiliate codes", "Incentivise affiliate sharing"],
      ["**Annual launch special**", "GBP 59.99/year (25% off annual price)", "First month only", "Lock in annual subscribers early"],
      ["**Student discount**", "Free for students on free school meals (verified via school)", "Ongoing", "Social impact, press coverage, school goodwill"],
    ],
    [2000, 2800, 2200, 2360]
  ));

  // 4.3
  items.push(heading2("4.3 School/Bulk Pricing"));
  items.push(makeTable(
    ["Package", "Price", "Per-student equivalent", "Includes"],
    [
      ["**Class Licence** (up to 35 students)", "GBP 199/year", "GBP 5.69/student/year", "Dashboard, progress reports, teacher admin"],
      ["**Department Licence** (up to 150 students)", "GBP 599/year", "GBP 3.99/student/year", "All above + department analytics, multiple teacher accounts"],
      ["**Whole School Licence** (up to 500 students)", "GBP 1,499/year", "GBP 3.00/student/year", "All above + priority support, custom onboarding"],
      ["**MAT/Group Licence** (500+ students)", "Custom pricing", "Target GBP 2.00-2.50/student/year", "Volume negotiated, dedicated account manager"],
    ],
    [2600, 1800, 2200, 2760]
  ));

  items.push(richPara([{ text: "School sales pitch: ", bold: true }, { text: "\"For less than the cost of one CGP revision guide per student, your entire Year 10 and 11 get AI-powered essay feedback, mock exams, and progress tracking all year.\"", italics: true }]));

  // 4.4
  items.push(heading2("4.4 Seasonal Campaigns"));
  items.push(makeTable(
    ["Campaign", "Timing", "Offer", "Rationale"],
    [
      ["**Back to School**", "September", "30-day extended trial (60 days free)", "New academic year, students choosing revision tools"],
      ["**Mock Exam Prep**", "November-December", "\"Mock Ready\" bundle -- GBP 14.99 for 2 months", "Mock exams typically in December/January"],
      ["**New Year Resolution**", "January", "20% off annual plan", "\"New year, new grades\" messaging"],
      ["**100 Days to GCSEs**", "Late January", "\"Exam Season Pass\" GBP 29.99 for 5 months (Jan-May)", "Covers the entire revision period at a discount"],
      ["**Easter Revision**", "March-April", "7-day intensive free trial + flash sale", "Easter revision is peak study period"],
      ["**Results Day**", "August", "\"Retake Ready\" campaign targeting resit students", "November resit entries surged 5.8% in 2025"],
      ["**IGCSE Oct/Nov session**", "August-September", "Targeted campaign for international students", "Different exam season for IGCSE"],
    ],
    [2200, 1800, 2800, 2560]
  ));

  items.push(divider());
  return items;
}

function buildSection5() {
  const items = [];

  items.push(heading1("5. Content Marketing Strategy"));

  // 5.1
  items.push(heading2("5.1 Blog/SEO Topics"));
  items.push(para("Priority keywords (high volume, achievable difficulty):", { bold: true }));

  items.push(makeTable(
    ["Keyword cluster", "Example blog posts", "Monthly search volume (est.)"],
    [
      ["**GCSE English revision**", "\"The Ultimate GCSE English Language Revision Guide 2026\"", "12,000+"],
      ["**GCSE English tips**", "\"How to Get a Grade 9 in GCSE English Language\"", "8,000+"],
      ["**Specific texts**", "\"An Inspector Calls Quotes and Analysis for GCSE\"", "15,000+"],
      ["**Essay technique**", "\"How to Write a GCSE English Language Paper 1 Response\"", "6,000+"],
      ["**Exam board specific**", "\"AQA GCSE English Literature Paper 2 Guide\"", "4,000+"],
      ["**Comparison/review**", "\"Best GCSE English Revision Websites 2026 (Compared)\"", "3,000+"],
      ["**Parent-targeted**", "\"How to Help Your Child Revise for GCSE English\"", "2,000+"],
      ["**IGCSE specific**", "\"Cambridge IGCSE English First Language 0500 Revision Guide\"", "1,500+"],
    ],
    [2600, 4200, 2560]
  ));

  items.push(para("Content calendar: 2 posts per week", { bold: true }));
  items.push(bulletItem("Monday: SEO-driven revision guide (targeting a specific keyword cluster)"));
  items.push(bulletItem("Thursday: \"Exam technique\" or \"text analysis\" post (shareable, affiliate-friendly)"));

  items.push(para("Content format priority:", { bold: true }));
  items.push(numberedItem("Long-form guides (2,000+ words) for SEO"));
  items.push(numberedItem("Listicles (\"10 quotes from Macbeth you must know\") for social sharing"));
  items.push(numberedItem("Comparison posts (\"The English Hub vs. Save My Exams\") for bottom-of-funnel conversion"));

  // 5.2
  items.push(heading2("5.2 Social Proof & Testimonials"));
  items.push(para("Collection strategy:", { bold: true }));
  items.push(makeTable(
    ["Timing", "Method", "Incentive"],
    [
      ["After 7 days of use", "In-app NPS survey + \"Would you recommend us?\"", "None (friction-free)"],
      ["After 30 days", "Email: \"Share your experience, get 1 month free\"", "1 month free"],
      ["After mock exams", "Email: \"Did your mock grades improve? Tell us!\"", "Featured on website"],
      ["After GCSE results", "Email: \"Congratulations! Share your results story\"", "Amazon voucher prize draw"],
      ["Ongoing", "Twitter/TikTok monitoring for organic mentions", "Repost + free subscription extension"],
    ],
    [2200, 3800, 3360]
  ));

  items.push(para("Social proof placement:", { bold: true }));
  items.push(bulletItem("Homepage: 3 rotating student testimonials + aggregate rating"));
  items.push(bulletItem("Pricing page: \"Join X students already improving their English grades\""));
  items.push(bulletItem("Checkout page: \"Students using The English Hub improved by an average of X grades\" (once data available)"));
  items.push(bulletItem("Blog sidebar: Teacher endorsement quote"));
  items.push(bulletItem("Affiliate resources: Testimonial graphics for affiliates to share"));

  // 5.3
  items.push(heading2("5.3 Email Nurture Sequences"));

  items.push(para("Sequence 1: Free trial onboarding (7 emails over 30 days)", { bold: true }));
  items.push(makeTable(
    ["Day", "Subject line", "Content", "CTA"],
    [
      ["0", "Welcome to The English Hub!", "Account setup guide, first lesson recommendation", "Complete your profile"],
      ["1", "Your first AI essay feedback in 5 minutes", "Quick tutorial: submit a practice essay", "Try AI feedback"],
      ["3", "How [Exam Board] Paper 1 is really marked", "Exam technique content specific to their board", "Start Paper 1 module"],
      ["7", "You've been revising for a week -- here's your progress", "Progress summary, areas to focus on", "View your dashboard"],
      ["14", "\"I went from a 5 to an 8\" -- [Student name]'s story", "Testimonial + feature highlight", "Share with a friend"],
      ["21", "Your trial is ending in 9 days", "Value recap, what they'll lose, annual plan pitch", "Subscribe now (annual)"],
      ["28", "Last 48 hours of your free trial", "Urgency, discount offer for immediate conversion", "Subscribe now (15% off)"],
    ],
    [600, 3000, 3000, 2760]
  ));

  items.push(para("Sequence 2: Paid subscriber retention (monthly)", { bold: true }));
  items.push(makeTable(
    ["Month", "Subject line", "Purpose"],
    [
      ["1", "Your first month report", "Progress summary, encourage deeper usage"],
      ["2", "New: [Feature/content] just added", "Show ongoing value, reduce churn"],
      ["3", "Refer a friend, both get 1 month free", "Activate referral programme"],
      ["4", "Exam season is coming -- here's your plan", "Seasonal urgency, recommend mock exams"],
      ["5", "Your exam prep checklist", "High-value content, reinforce retention"],
    ],
    [1200, 3800, 4360]
  ));

  items.push(para("Sequence 3: Win-back (churned users, 3 emails)", { bold: true }));
  items.push(makeTable(
    ["Day after churn", "Subject line", "Offer"],
    [
      ["1", "We're sorry to see you go", "Feedback survey, no offer"],
      ["7", "We've improved since you left", "Highlight new features, 20% off to return"],
      ["30", "Final offer: come back for GBP 4.99/month", "Deep discount for 3 months"],
    ],
    [2000, 3600, 3760]
  ));

  items.push(divider());
  return items;
}

function buildSection6() {
  const items = [];

  items.push(heading1("6. Budget Allocation"));

  // 6.1
  items.push(heading2("6.1 Budget Level: GBP 500/month (Bootstrap)"));
  items.push(makeTable(
    ["Category", "Monthly spend", "Allocation"],
    [
      ["Affiliate bonuses/incentives", "GBP 150", "First-sale bonuses, volume bonuses"],
      ["Paid social (TikTok/Meta)", "GBP 150", "Spark Ads boosting organic content"],
      ["Content creation tools", "GBP 50", "Canva Pro, video editing, stock images"],
      ["Email marketing platform", "GBP 30", "Mailchimp or ConvertKit"],
      ["SEO tools", "GBP 50", "Ahrefs Lite or SE Ranking"],
      ["Sponsored blog posts/reviews", "GBP 70", "1-2 paid reviews from parent bloggers"],
      ["**Total**", "**GBP 500**", ""],
    ],
    [3200, 2400, 3760]
  ));

  items.push(para("Expected ROI at GBP 500/month:", { bold: true }));
  items.push(bulletItem("Month 3: 150 paying subscribers, ~GBP 1,500 MRR. Marketing spend: GBP 1,500 total. Payback period: ~3 months."));
  items.push(bulletItem("Month 6: 500 paying subscribers, ~GBP 5,000 MRR. Cumulative marketing spend: GBP 3,000. ROI: 10:1 annualised."));

  // 6.2
  items.push(heading2("6.2 Budget Level: GBP 1,000/month (Growth)"));
  items.push(makeTable(
    ["Category", "Monthly spend", "Allocation"],
    [
      ["Affiliate bonuses/incentives", "GBP 250", "Increased volume bonuses, sponsored content fees"],
      ["Paid social (TikTok/Meta/Google)", "GBP 350", "Broader ad testing, retargeting"],
      ["Content creation (freelance)", "GBP 150", "4 blog posts/month from freelance writers"],
      ["Email marketing platform", "GBP 50", "Upgraded plan for automation"],
      ["SEO tools", "GBP 50", "Ahrefs Lite or SE Ranking"],
      ["Influencer gifting/sponsorships", "GBP 100", "2 sponsored posts from micro-influencers"],
      ["PR/education press", "GBP 50", "Press release distribution for launch"],
      ["**Total**", "**GBP 1,000**", ""],
    ],
    [3200, 2400, 3760]
  ));

  items.push(para("Expected ROI at GBP 1,000/month:", { bold: true }));
  items.push(bulletItem("Month 3: 300 paying subscribers, ~GBP 3,000 MRR. Marketing spend: GBP 3,000 total. Payback: ~2 months."));
  items.push(bulletItem("Month 6: 1,000 paying subscribers, ~GBP 10,000 MRR. Cumulative marketing: GBP 6,000. ROI: 20:1 annualised."));

  // 6.3
  items.push(heading2("6.3 Budget Level: GBP 2,000/month (Accelerate)"));
  items.push(makeTable(
    ["Category", "Monthly spend", "Allocation"],
    [
      ["Affiliate bonuses/incentives", "GBP 400", "Aggressive bonuses, tiered rewards, affiliate events"],
      ["Paid social (TikTok/Meta/Google)", "GBP 600", "Full funnel: awareness + retargeting + search"],
      ["Content creation (freelance + video)", "GBP 350", "8 blog posts + 4 videos/month"],
      ["Email marketing platform", "GBP 75", "Advanced automation, segmentation"],
      ["SEO tools", "GBP 75", "Full Ahrefs or Semrush"],
      ["Influencer sponsorships", "GBP 250", "3-5 sponsored posts/videos from mid-tier creators"],
      ["PR & education press", "GBP 100", "Ongoing press coverage, education media pitches"],
      ["Events/conferences", "GBP 150", "Attend 1 education event per quarter"],
      ["**Total**", "**GBP 2,000**", ""],
    ],
    [3200, 2400, 3760]
  ));

  items.push(para("Expected ROI at GBP 2,000/month:", { bold: true }));
  items.push(bulletItem("Month 3: 500 paying subscribers, ~GBP 5,000 MRR. Marketing spend: GBP 6,000 total. Payback: ~2 months."));
  items.push(bulletItem("Month 6: 1,500 paying subscribers, ~GBP 15,000 MRR. Cumulative marketing: GBP 12,000. ROI: 15:1 annualised."));

  items.push(para("Note on affiliate commission costs:", { bold: true }));
  items.push(para("The 20% recurring commission is NOT included in the marketing budget above -- it's a cost-of-revenue item that scales automatically. At 1,000 subscribers, affiliate commissions would be ~GBP 2,000/month (assuming all subscribers came via affiliates, which they won't). Realistically, 40-50% of subscribers will come via affiliates, making the commission cost ~GBP 800-1,000/month at that scale.", { italics: true, color: ACCENT_GREY }));

  items.push(divider());
  return items;
}

function buildSection7() {
  const items = [];

  items.push(heading1("7. KPIs and Milestones"));

  // 7.1
  items.push(heading2("7.1 Month 1 Targets"));
  items.push(makeTable(
    ["Metric", "Target", "How to track"],
    [
      ["Website visitors", "3,000", "Google Analytics"],
      ["Free trial sign-ups", "150", "Stripe/Supabase"],
      ["Trial-to-paid conversion", "25%", "Stripe"],
      ["Paying subscribers", "40", "Stripe"],
      ["MRR", "GBP 400", "Stripe"],
      ["Affiliates recruited", "25", "Rewardful"],
      ["Active affiliates (1+ click)", "15", "Rewardful"],
      ["Blog posts published", "10", "CMS"],
      ["Social media followers (total)", "500", "Platform analytics"],
      ["Email list size", "600", "Email platform"],
    ],
    [3200, 2400, 3760]
  ));

  // 7.2
  items.push(heading2("7.2 Month 3 Targets"));
  items.push(makeTable(
    ["Metric", "Target", "How to track"],
    [
      ["Website visitors", "10,000/month", "Google Analytics"],
      ["Free trial sign-ups", "500 cumulative", "Stripe/Supabase"],
      ["Paying subscribers", "300", "Stripe"],
      ["MRR", "GBP 3,000", "Stripe"],
      ["Annual plan subscribers", "100 (33% of total)", "Stripe"],
      ["Affiliates recruited", "75", "Rewardful"],
      ["Active affiliates", "40", "Rewardful"],
      ["Affiliate-driven revenue", "40% of MRR", "Rewardful"],
      ["School partnerships", "5", "CRM"],
      ["Blog posts published", "30 cumulative", "CMS"],
      ["Social media followers", "2,000", "Platform analytics"],
      ["Email list size", "2,000", "Email platform"],
      ["Monthly churn rate", "< 8%", "Stripe"],
      ["NPS score", "> 40", "In-app survey"],
    ],
    [3200, 2400, 3760]
  ));

  // 7.3
  items.push(heading2("7.3 Month 6 Targets"));
  items.push(makeTable(
    ["Metric", "Target", "How to track"],
    [
      ["Website visitors", "25,000/month", "Google Analytics"],
      ["Paying subscribers", "1,000", "Stripe"],
      ["MRR", "GBP 10,000", "Stripe"],
      ["ARR run-rate", "GBP 120,000", "Stripe"],
      ["Annual plan subscribers", "400 (40% of total)", "Stripe"],
      ["Affiliates recruited", "150", "Rewardful"],
      ["Active affiliates", "80", "Rewardful"],
      ["Top affiliate monthly earning", "GBP 200+", "Rewardful"],
      ["School partnerships", "20", "CRM"],
      ["International subscribers (GCC)", "100", "Stripe (geo)"],
      ["Blog posts published", "60 cumulative", "CMS"],
      ["Domain authority", "25+", "Ahrefs"],
      ["Organic search traffic", "5,000/month", "Google Analytics"],
      ["Social media followers", "5,000", "Platform analytics"],
      ["Email list size", "5,000", "Email platform"],
      ["Monthly churn rate", "< 6%", "Stripe"],
      ["LTV:CAC ratio", "> 5:1", "Calculated"],
      ["NPS score", "> 50", "In-app survey"],
    ],
    [3200, 2400, 3760]
  ));

  // 7.4
  items.push(heading2("7.4 Key Metrics to Track Weekly"));

  items.push(para("Acquisition metrics:", { bold: true }));
  items.push(bulletItem("Website visitors (by source)"));
  items.push(bulletItem("Free trial sign-ups (by source)"));
  items.push(bulletItem("Trial-to-paid conversion rate"));
  items.push(bulletItem("Cost per acquisition (by channel)"));

  items.push(para("Revenue metrics:", { bold: true }));
  items.push(bulletItem("MRR and MRR growth rate"));
  items.push(bulletItem("New MRR vs. churned MRR"));
  items.push(bulletItem("Average revenue per user (ARPU)"));
  items.push(bulletItem("Annual vs. monthly plan mix"));

  items.push(para("Affiliate metrics:", { bold: true }));
  items.push(bulletItem("New affiliates recruited"));
  items.push(bulletItem("Active affiliate rate (% with 1+ click in last 30 days)"));
  items.push(bulletItem("Clicks, trials, and conversions per affiliate"));
  items.push(bulletItem("Revenue per affiliate"));
  items.push(bulletItem("Top 10 affiliate performance"));

  items.push(para("Engagement metrics:", { bold: true }));
  items.push(bulletItem("Daily active users (DAU)"));
  items.push(bulletItem("Lessons completed per user per week"));
  items.push(bulletItem("AI essay submissions per user per month"));
  items.push(bulletItem("Mock exams taken"));
  items.push(bulletItem("Session duration"));

  items.push(para("Retention metrics:", { bold: true }));
  items.push(bulletItem("Monthly churn rate"));
  items.push(bulletItem("7-day, 14-day, 30-day trial engagement rates"));
  items.push(bulletItem("NPS score"));
  items.push(bulletItem("Support ticket volume"));

  items.push(divider());
  return items;
}

function buildAppendix() {
  const items = [];

  items.push(heading1("Appendix: Quick-Start Action Checklist (First 14 Days)"));

  const checklist = [
    ["Day 1-2:", "Finalise launch landing page with waitlist/trial sign-up"],
    ["Day 1-2:", "Set up Google Analytics 4, Stripe dashboard, Rewardful tracking"],
    ["Day 1-3:", "Create affiliate resource hub page (banners, copy, discount codes)"],
    ["Day 1-3:", "Write and schedule 10 cornerstone blog posts"],
    ["Day 3-5:", "Send 50 personalised DMs to GCSE English micro-influencers on TikTok/Instagram"],
    ["Day 3-5:", "Email 40 English teachers with online presence (TES, YouTube, Twitter)"],
    ["Day 3-5:", "Email 20 education/parenting bloggers"],
    ["Day 5-7:", "Set up TikTok, Instagram, YouTube accounts; schedule first 2 weeks of content"],
    ["Day 5-7:", "Set up email automation (trial onboarding sequence of 7 emails)"],
    ["Day 7-10:", "Onboard first 20 affiliates; ensure Rewardful links are working and tracked"],
    ["Day 7-10:", "Email 100 English HoDs at UK schools with free trial offer"],
    ["Day 10-12:", "Post in r/GCSE, The Student Room with genuinely helpful content"],
    ["Day 10-12:", "Launch paid social test (GBP 5/day on TikTok Spark Ads)"],
    ["Day 12-14:", "Send waitlist launch email sequence (4 emails over 14 days)"],
    ["Day 14:", "Review first 2-week metrics; adjust outreach and content strategy"],
  ];

  checklist.forEach(([day, task]) => {
    items.push(richBullet([{ text: day + " ", bold: true }, { text: task }]));
  });

  items.push(divider());
  return items;
}

function buildSources() {
  const items = [];

  items.push(heading1("Sources"));

  const sources = [
    "Ofqual GCSE Results 2025 -- ofqual.blog.gov.uk",
    "Provisional GCSE Entries Summer 2025 -- gov.uk",
    "GCSE Grade Comparison by Exam Board -- Summer 2025 -- arcexams.co.uk",
    "UK EdTech Market Size & Forecast -- IMARC Group",
    "ISC Research International Schools Market 2025 -- iscresearch.com",
    "Seneca Learning Pricing -- help.senecalearning.com",
    "Save My Exams vs Seneca Comparison -- savemyexams.com",
    "Rewardful SaaS Affiliate Benchmarks -- rewardful.com",
    "Rewardful Affiliate Onboarding Guide -- rewardful.com",
    "Rewardful Affiliate Compensation Guide -- rewardful.com",
    "Education Affiliate Programs -- Authority Hacker",
    "Best British Schools in Qatar -- Edarabia",
    "Saudi Arabia New International Schools 2025-2027 -- education-saudi.com",
    "GCSE November 2025 Entries -- gov.uk",
  ];

  sources.forEach(s => {
    items.push(numberedItem(s));
  });

  return items;
}

// ================================================================
// ASSEMBLE DOCUMENT
// ================================================================
async function main() {
  const doc = new Document({
    features: { updateFields: true },
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
        {
          reference: "bullets",
          levels: [
            { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
            { level: 1, format: LevelFormat.BULLET, text: "-", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
          ],
        },
        {
          reference: "numbers",
          levels: [
            { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
            { level: 1, format: LevelFormat.DECIMAL, text: "%2.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
          ],
        },
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
            children: [new TextRun({ text: "The English Hub \u2014 Go-To-Market Strategy & Affiliate Marketing Campaign Plan", font: "Arial", size: 16, color: ACCENT_GREY, italics: true })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "CONFIDENTIAL  |  Page ", font: "Arial", size: 16, color: ACCENT_GREY }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: ACCENT_GREY }),
            ],
          })],
        }),
      },
      children: [
        // ---- TITLE PAGE ----
        new Paragraph({ spacing: { before: 1800 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "CONFIDENTIAL", bold: true, font: "Arial", size: 24, color: "CC0000" })],
        }),
        new Paragraph({ spacing: { after: 600 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "The English Hub", bold: true, font: "Arial", size: 52, color: BRAND_BLUE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Go-To-Market Strategy &", font: "Arial", size: 32, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Affiliate Marketing Campaign Plan", font: "Arial", size: 32, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_BLUE, space: 8 } },
          children: [],
        }),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [new TextRun({ text: "Prepared: March 2026", font: "Arial", size: 22, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "7 Sections  |  750+ Lines of Strategy  |  Actionable Playbook", font: "Arial", size: 18, italics: true, color: ACCENT_GREY })],
        }),

        // ---- TABLE OF CONTENTS ----
        new Paragraph({ children: [new PageBreak()] }),
        heading1("Table of Contents"),
        new TableOfContents("Table of Contents", {
          hyperlink: true,
          headingStyleRange: "1-2",
        }),

        // ---- CONTENT SECTIONS ----
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection1(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection2(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection3(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection4(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection5(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection6(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection7(),
        new Paragraph({ children: [new PageBreak()] }),
        ...buildAppendix(),
        ...buildSources(),
      ],
    }],
  });

  const outDir = "D:/Coding/english-hub/docs";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const buffer = await Packer.toBuffer(doc);
  const outPath = `${outDir}/GTM_Strategy_The_English_Hub.docx`;
  fs.writeFileSync(outPath, buffer);
  console.log(`Created: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch(console.error);
