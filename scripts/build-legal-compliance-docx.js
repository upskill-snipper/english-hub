const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, ExternalHyperlink,
  TableOfContents,
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
    heading: HeadingLevel.HEADING_3,
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
    children: runs.map(r => {
      if (r.link) {
        return new ExternalHyperlink({
          link: r.link,
          children: [new TextRun({ text: r.text, font: "Arial", size: 20, color: BRAND_BLUE, underline: { type: "single" }, ...r })],
        });
      }
      return new TextRun({ font: "Arial", size: 20, ...r });
    }),
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
    children: runs.map(r => {
      if (r.link) {
        return new ExternalHyperlink({
          link: r.link,
          children: [new TextRun({ text: r.text, font: "Arial", size: 20, color: BRAND_BLUE, underline: { type: "single" } })],
        });
      }
      return new TextRun({ font: "Arial", size: 20, ...r });
    }),
  });
}

function checkboxItem(text, checked = false) {
  const prefix = checked ? "\u2611 " : "\u2610 ";
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text: prefix + text, font: "Arial", size: 20 })],
  });
}

function numberedItem(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "numbers", level },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20 })],
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_LIGHT, space: 4 } },
    children: [],
  });
}

function linkPara(label, url) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: label + " ", font: "Arial", size: 20, bold: true }),
      new ExternalHyperlink({
        link: url,
        children: [new TextRun({ text: url, font: "Arial", size: 20, color: BRAND_BLUE, underline: { type: "single" } })],
      }),
    ],
  });
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
          children: [new Paragraph({ children: [new TextRun({ text: cell, font: "Arial", size: 20 })] })],
        })
      ),
    })
  );

  return new Table({ width: { size: totalWidth, type: WidthType.DXA }, columnWidths: colWidths, rows: [headerRow, ...dataRows] });
}

function makeBoldFirstColTable(headers, rows, colWidths) {
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
          children: [new Paragraph({ children: [new TextRun({ text: cell, font: "Arial", size: 20, bold: ci === 0 })] })],
        })
      ),
    })
  );

  return new Table({ width: { size: totalWidth, type: WidthType.DXA }, columnWidths: colWidths, rows: [headerRow, ...dataRows] });
}

// --- Section builders ---

function buildSection1_1() {
  const items = [];
  items.push(heading2("1.1 ICO Registration (Data Protection Fee)"));
  items.push(richPara([{ text: "Requirement: ", bold: true }, { text: "All organisations that process personal data must pay a data protection fee to the ICO, unless exempt." }]));
  items.push(richPara([{ text: "Fee Tiers (as of February 2025 increase of 29.8%):", bold: true }]));
  items.push(makeTable(
    ["Tier", "Criteria", "Annual Fee"],
    [
      ["Tier 1 (Micro)", "Turnover < GBP 632,000 OR < 10 staff", "GBP 52/year"],
      ["Tier 2 (SME)", "Turnover < GBP 36m OR < 250 staff", "GBP 78/year"],
      ["Tier 3 (Large)", "Turnover > GBP 36m OR 250+ staff", "GBP 3,763/year"],
    ],
    [2400, 4500, 2460]
  ));
  items.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  items.push(bulletItem("GBP 5 discount for Direct Debit payment."));
  items.push(richBullet([{ text: "The English Hub will likely start at Tier 1 (GBP 52/year).", bold: true }]));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Register and pay the data protection fee online"));
  items.push(checkboxItem("Set up Direct Debit for annual renewal"));
  items.push(linkPara("Portal:", "https://ico.org.uk/for-organisations/data-protection-fee/"));
  items.push(para("Processing Time: Immediate upon online payment"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 47/year (Tier 1 with Direct Debit discount)" }]));
  items.push(divider());
  return items;
}

function buildSection1_2() {
  const items = [];
  items.push(heading2("1.2 UK GDPR Compliance for Minors (Under 18)"));
  items.push(para("Key Rules:", { bold: true }));
  items.push(bulletItem("Under UK GDPR, the age of consent for data processing via information society services (ISS) is 13 years old in the UK."));
  items.push(bulletItem("Since your users are 14-18, those aged 14+ can consent to data processing themselves without parental consent under UK GDPR Article 8."));
  items.push(bulletItem("However, children still \"merit specific protection\" -- you must use clear, plain language in privacy notices."));
  items.push(richBullet([{ text: "You must NOT use children\u2019s data for marketing purposes or user profiling", bold: true }, { text: " unless there is a compelling justification." }]));
  items.push(bulletItem("Automated decision-making (your AI essay feedback) must allow users to understand the logic behind it and request human review."));
  items.push(richPara([{ text: "AI Essay Feedback -- Specific Requirements (Data Use and Access Act 2025, in force 5 February 2026):", bold: true }]));
  items.push(bulletItem("The UK has moved from a prohibition-based to permission-based regime for automated decision-making, but with safeguards."));
  items.push(bulletItem("You must provide: (a) right to human intervention, (b) ability to contest the AI decision, (c) transparency about the logic and criteria used."));
  items.push(richBullet([{ text: "A Data Protection Impact Assessment (DPIA) is mandatory", bold: true }, { text: " because you are processing children\u2019s data via AI/automated means." }]));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Draft a child-friendly privacy notice in plain English"));
  items.push(checkboxItem("Implement age verification at registration (self-declaration minimum; consider more robust methods)"));
  items.push(checkboxItem("Conduct and document a full DPIA covering AI essay feedback, children\u2019s data, and cross-border transfers"));
  items.push(checkboxItem("Build a \"request human review\" mechanism for AI essay feedback"));
  items.push(checkboxItem("Implement transparency page explaining how the AI essay feedback works (logic, criteria, limitations)"));
  items.push(checkboxItem("Ensure marketing/profiling of under-18 users is either disabled or strongly justified"));
  items.push(linkPara("Portal:", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0 (self-service) to GBP 2,000-5,000 if using a data protection consultant for DPIA" }]));
  items.push(divider());
  return items;
}

function buildSection1_3() {
  const items = [];
  items.push(heading2("1.3 Age Appropriate Design Code (Children\u2019s Code)"));
  items.push(richPara([{ text: "Requirement: ", bold: true }, { text: "The ICO\u2019s Children\u2019s Code contains 15 mandatory standards for online services likely to be accessed by children. EdTech platforms are explicitly in scope." }]));
  items.push(richPara([{ text: "The 15 Standards (key ones for The English Hub):", bold: true }]));
  const standards = [
    "Best interests of the child -- primary consideration in all design decisions",
    "Data Protection Impact Assessments -- mandatory (see 1.2 above)",
    "Age-appropriate application -- tailor data handling to the age range (14-18)",
    "Transparency -- privacy info must be concise, prominent, and in clear language",
    "Detrimental use of data -- do not use children\u2019s data in ways detrimental to their wellbeing",
    "Policies and community standards -- uphold published T&Cs",
    "Default settings -- must be \u201Chigh privacy\u201D by default",
    "Data minimisation -- collect only what is strictly necessary",
    "Data sharing -- do not share children\u2019s data unless there is a compelling reason",
    "Geolocation -- switched off by default (likely N/A for The English Hub)",
    "Parental controls -- provide age-appropriate controls",
    "Profiling -- profiling must be off by default",
    "Nudge techniques -- do not use dark patterns to weaken privacy settings",
    "Connected toys/devices -- N/A",
    "Online tools -- provide tools to help children exercise their data rights",
  ];
  standards.forEach((s, i) => {
    items.push(numberedItem(`${s}`));
  });
  items.push(richPara([{ text: "Note: ", bold: true, italics: true }, { text: "The Data (Use and Access) Act 2025 may lead to updates to this code. Guidance is under review as of mid-2025.", italics: true }]));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Conduct a Children\u2019s Code conformance audit across all 15 standards"));
  items.push(checkboxItem("Set all privacy/data settings to HIGH by default"));
  items.push(checkboxItem("Disable profiling and personalised marketing by default for all users"));
  items.push(checkboxItem("Ensure no nudge techniques or dark patterns in the UI (especially around data consent)"));
  items.push(checkboxItem("Provide accessible tools for students to access, download, and delete their data"));
  items.push(checkboxItem("Document your conformance with each of the 15 standards"));
  items.push(linkPara("Portal:", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0 (self-assessment) to GBP 3,000-8,000 (external Children\u2019s Code audit)" }]));
  items.push(divider());
  return items;
}

function buildSection1_4() {
  const items = [];
  items.push(heading2("1.4 DBS Checks and Safeguarding"));
  items.push(richPara([{ text: "Requirement: ", bold: true }, { text: "While not strictly a legal mandate for SaaS EdTech (no direct 1:1 contact with children), DBS checks are industry best practice and expected by parents." }]));
  items.push(para("Key Points:", { bold: true }));
  items.push(bulletItem("From January 2026, the previous \"safeguarding loophole\" for private tutors has been closed."));
  items.push(bulletItem("If any staff members provide direct interaction with students (e.g., live feedback sessions, messaging), an Enhanced DBS check is strongly recommended."));
  items.push(bulletItem("For a purely AI-driven platform with no live human interaction, DBS checks are less critical but still advisable for trust/credibility."));
  items.push(richBullet([{ text: "Safeguarding training", bold: true }, { text: " (Level 1 minimum) is recommended for all staff." }]));
  items.push(para("Costs:", { bold: true }));
  items.push(makeTable(
    ["Item", "Cost"],
    [
      ["Enhanced DBS check (gov fee)", "GBP 49.50 per person"],
      ["Admin fee (umbrella body)", "GBP 10-30 per person"],
      ["Total per check", "GBP 60-80 per person"],
      ["Safeguarding training (Level 1)", "Free (NSPCC/Educare) to GBP 20"],
    ],
    [5000, 4360]
  ));
  items.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Obtain Enhanced DBS checks for any staff with student contact"));
  items.push(checkboxItem("Complete Level 1 Safeguarding training (free via NSPCC)"));
  items.push(checkboxItem("Draft and publish a Safeguarding Policy on the website"));
  items.push(checkboxItem("Implement a reporting mechanism for safeguarding concerns"));
  items.push(para("Processing Time: 7-14 days for Enhanced DBS checks"));
  items.push(linkPara("Portal:", "https://www.gov.uk/request-copy-criminal-record"));
  items.push(divider());
  return items;
}

function buildSection1_5() {
  const items = [];
  items.push(heading2("1.5 Consumer Rights Act 2015 & Distance Selling"));
  items.push(para("Requirements for digital subscription services:", { bold: true }));
  items.push(heading3("Consumer Contracts Regulations 2013"));
  items.push(bulletItem("14-day cooling-off period from the date the contract is entered into."));
  items.push(bulletItem("For digital content: if you want users to access content immediately, they must give explicit consent to waive the 14-day cooling-off period AND be informed they lose their right to cancel once the content is accessed."));
  items.push(bulletItem("You must provide a model cancellation form."));
  items.push(heading3("DMCC Act 2024 (Subscription Contract Rules -- expected Autumn 2026)"));
  items.push(richBullet([{ text: "Reminder notices", bold: true }, { text: " required before renewal payments." }]));
  items.push(bulletItem("For monthly subscriptions: reminder before every 6th payment (twice per year)."));
  items.push(bulletItem("For annual subscriptions: reminder before each renewal (twice per year)."));
  items.push(bulletItem("Reminder must include: date due, amount, any price increase."));
  items.push(bulletItem("Easy cancellation process must be provided (no dark patterns)."));
  items.push(bulletItem("Cooling-off period of 14 days applies to each renewal."));
  items.push(heading3("Consumer Rights Act 2015 -- Digital Content"));
  items.push(bulletItem("Digital content must be of satisfactory quality, fit for purpose, and as described."));
  items.push(bulletItem("If content is faulty, consumers have a right to repair or replacement."));
  items.push(bulletItem("If repair/replacement is not possible, consumers can claim a price reduction."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Implement 14-day free trial or explicit cooling-off waiver consent flow"));
  items.push(checkboxItem("Create a model cancellation form and make it easily accessible"));
  items.push(checkboxItem("Build automated renewal reminder emails (prepare for DMCC Act requirements)"));
  items.push(checkboxItem("Ensure cancellation is easy and prominently accessible (no hidden steps)"));
  items.push(checkboxItem("Draft T&Cs covering digital content quality guarantees"));
  items.push(checkboxItem("Store records of consent to waive cooling-off period"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 500-1,500 (legal review of T&Cs and cancellation flow)" }]));
  items.push(divider());
  return items;
}

function buildSection1_6() {
  const items = [];
  items.push(heading2("1.6 ASA Rules for Educational Claims"));
  items.push(para("Key Rules:", { bold: true }));
  items.push(bulletItem("All advertising claims must be substantiated with documentary evidence held before publication."));
  items.push(richBullet([{ text: "You cannot ", bold: true }, { text: "claim specific exam results improvements (e.g., \"guaranteed grade 9\") without robust evidence." }]));
  items.push(bulletItem("Comparative claims (e.g., \"better than other platforms\") must cite the source, date, and basis."));
  items.push(bulletItem("If offering a free trial that converts to a paid subscription, this must be clearly stated in the ad."));
  items.push(bulletItem("Staff qualifications claimed in marketing must be verifiable."));
  items.push(bulletItem("Testimonials must be genuine and reflect typical results, not exceptional cases."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Audit all marketing materials for unsubstantiated claims"));
  items.push(checkboxItem("Hold documentary evidence for every objective claim"));
  items.push(checkboxItem("Add disclaimers to testimonials (e.g., \"Results may vary\")"));
  items.push(checkboxItem("Ensure free trial terms are prominently disclosed in all ads"));
  items.push(checkboxItem("Avoid absolute claims like \"guaranteed results\" unless backed by evidence"));
  items.push(linkPara("Portal:", "https://www.asa.org.uk/advice-and-resources/resource-library/advertising-guidance.html"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0 (self-review) to GBP 500-1,000 (ASA Copy Advice service)" }]));
  items.push(divider());
  return items;
}

function buildSection1_7() {
  const items = [];
  items.push(heading2("1.7 Ofqual / Exam Board Trademark & Copyright"));
  items.push(richPara([{ text: "Critical Warning: ", bold: true, color: "CC0000" }, { text: "GCSE and IGCSE are trademarked terms owned by exam boards. Past papers, mark schemes, and specifications are copyrighted." }]));
  items.push(para("Key Policies:", { bold: true }));
  items.push(makeTable(
    ["Exam Board", "Policy"],
    [
      ["AQA", "Logo use not permitted by third parties. Copyrighted materials may not be reproduced without permission."],
      ["Pearson Edexcel", "All materials protected by copyright. Third-party commercial use requires explicit permission. Centres cannot charge students for copied materials."],
      ["Cambridge International", "Must apply for permission to use copyrighted material via their support portal."],
    ],
    [2400, 6960]
  ));
  items.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  items.push(para("What you CAN do:", { bold: true }));
  items.push(bulletItem("Refer to \"GCSE English\" and \"IGCSE English\" descriptively (fair use of qualification names)."));
  items.push(bulletItem("Create original content aligned to the specifications (but not copy the specifications themselves)."));
  items.push(bulletItem("Link to freely available specification documents."));
  items.push(para("What you CANNOT do:", { bold: true }));
  items.push(bulletItem("Use exam board logos without permission."));
  items.push(bulletItem("Reproduce past papers, mark schemes, or specification content."));
  items.push(bulletItem("Imply endorsement by any exam board."));
  items.push(bulletItem("Use \"AQA\", \"Edexcel\", \"Cambridge\" in your branding/domain in a way that implies affiliation."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Add clear disclaimer: \"The English Hub is not affiliated with or endorsed by AQA, Pearson Edexcel, Cambridge International, or any exam board\""));
  items.push(checkboxItem("Ensure no copyrighted exam board content is reproduced without licence"));
  items.push(checkboxItem("If using specification references, link to official sources rather than reproducing"));
  items.push(checkboxItem("Consider applying for a formal content licence from relevant exam boards if needed"));
  items.push(checkboxItem("Review all marketing to remove any implied endorsement"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0 (for compliance) to significant licensing fees if reproducing exam board materials" }]));
  items.push(divider());
  return items;
}

function buildSection1_8() {
  const items = [];
  items.push(heading2("1.8 Cookie Consent (PECR)"));
  items.push(para("Current Requirements:", { bold: true }));
  items.push(bulletItem("Obtain prior informed consent before setting any non-essential cookies."));
  items.push(bulletItem("\"Strictly necessary\" cookies are exempt."));
  items.push(bulletItem("Consent must be freely given, specific, informed, and unambiguous."));
  items.push(bulletItem("No pre-ticked boxes. No \"cookie walls\" that force acceptance."));
  items.push(bulletItem("Must provide clear information about what each cookie does."));
  items.push(bulletItem("Must be as easy to reject cookies as to accept them."));
  items.push(richPara([{ text: "Upcoming Changes (Data Use and Access Act 2025):", bold: true }]));
  items.push(bulletItem("Increased maximum penalty from GBP 500,000 to GBP 17.5 million or 4% of global turnover."));
  items.push(bulletItem("New exemptions being introduced for certain low-risk cookies (analytics)."));
  items.push(bulletItem("Final ICO guidance expected Spring 2026."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Implement a compliant cookie consent banner (no dark patterns)"));
  items.push(checkboxItem("Categorise all cookies (strictly necessary, analytics, marketing)"));
  items.push(checkboxItem("Provide granular consent options (not just \"accept all\")"));
  items.push(checkboxItem("Maintain a cookie policy page listing all cookies, purposes, and durations"));
  items.push(checkboxItem("Ensure reject option is equally prominent to accept option"));
  items.push(checkboxItem("Review and update once new ICO guidance is published (Spring 2026)"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0 (free tools like Cookiebot free tier) to GBP 10-50/month (paid CMP tools)" }]));
  items.push(divider());
  return items;
}

function buildSection1_9() {
  const items = [];
  items.push(heading2("1.9 Affiliate Marketing Disclosure (ASA/CMA)"));
  items.push(para("Legal Requirements:", { bold: true }));
  items.push(bulletItem("Under the CAP Code and Consumer Protection from Unfair Trading Regulations 2008, affiliate content must be obviously identifiable as advertising."));
  items.push(bulletItem("The DMCC Act 2024 gives the CMA direct enforcement powers with severe penalties."));
  items.push(bulletItem("Each piece of affiliate content must include its own disclosure -- you cannot rely on a bio disclosure alone."));
  items.push(para("Disclosure Rules:", { bold: true }));
  items.push(bulletItem("Use clear labels: \"#Ad\", \"Ad\", \"Advertisement\", or \"Paid partnership\"."));
  items.push(richBullet([{ text: "Disclosure must be prominent and upfront", bold: true }, { text: " (not hidden at the end or in small print)." }]));
  items.push(bulletItem("Platform disclosure tools (e.g., Instagram \"Paid partnership\" label) should be used where available."));
  items.push(richBullet([{ text: "The brand (The English Hub) is jointly responsible", bold: true }, { text: " for affiliate content, even if not directly controlling it." }]));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Draft affiliate marketing T&Cs requiring proper disclosure"));
  items.push(checkboxItem("Create affiliate guidelines document with examples of compliant disclosures"));
  items.push(checkboxItem("Include compliance clause in all affiliate agreements"));
  items.push(checkboxItem("Monitor affiliate content for compliance (spot checks)"));
  items.push(checkboxItem("Train affiliate partners on ASA/CMA requirements"));
  items.push(checkboxItem("Include termination clause for non-compliant affiliates"));
  items.push(linkPara("Portal:", "https://www.asa.org.uk/advice-online/recognising-ads-social-media.html"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0-500 (legal template for affiliate agreements)" }]));
  items.push(divider());
  return items;
}

function buildSection1_10() {
  const items = [];
  items.push(heading2("1.10 Company Registration"));
  items.push(para("Options:", { bold: true }));
  items.push(makeTable(
    ["Structure", "Cost", "Pros", "Cons"],
    [
      ["Sole Trader", "Free (register with HMRC)", "Simple, low cost, easy to set up", "Unlimited personal liability, less credible"],
      ["Ltd Company", "GBP 100 (online, as of Feb 2026)", "Limited liability, tax efficient, professional", "More admin, accounts filing, confirmation statements"],
      ["LLP", "GBP 100", "Limited liability for partners", "Requires 2+ members"],
    ],
    [2000, 2400, 2500, 2460]
  ));
  items.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  items.push(richPara([{ text: "Recommendation: ", bold: true }, { text: "Register as a Private Limited Company (Ltd) for liability protection and credibility, especially when handling children\u2019s data and payment processing." }]));
  items.push(para("Ongoing Costs:", { bold: true }));
  items.push(makeTable(
    ["Item", "Cost"],
    [
      ["Companies House incorporation (online)", "GBP 100 (one-off)"],
      ["Same-day incorporation", "GBP 156 (one-off)"],
      ["Annual confirmation statement", "GBP 50/year"],
      ["Registered office address service (optional)", "GBP 50-150/year"],
      ["Annual accounts preparation", "GBP 300-1,500/year (accountant)"],
    ],
    [5000, 4360]
  ));
  items.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Register a Ltd company via Companies House"));
  items.push(checkboxItem("Appoint director(s) and file People with Significant Control (PSC) register"));
  items.push(checkboxItem("Set up a business bank account"));
  items.push(checkboxItem("Register for Corporation Tax with HMRC (within 3 months of starting to trade)"));
  items.push(linkPara("Portal:", "https://www.gov.uk/set-up-limited-company"));
  items.push(para("Processing Time: Typically 24 hours for online incorporation"));
  items.push(divider());
  return items;
}

function buildSection1_11() {
  const items = [];
  items.push(heading2("1.11 VAT Registration"));
  items.push(para("Current Thresholds (2025/26 tax year):", { bold: true }));
  items.push(richBullet([{ text: "Mandatory registration: ", bold: true }, { text: "Taxable turnover exceeds GBP 90,000 in any rolling 12-month period." }]));
  items.push(richBullet([{ text: "Voluntary registration: ", bold: true }, { text: "Can register below this threshold (allows recovery of input VAT)." }]));
  items.push(richBullet([{ text: "Standard VAT rate: ", bold: true }, { text: "20% (applies to digital educational services)." }]));
  items.push(para("Digital Services VAT:", { bold: true }));
  items.push(bulletItem("Educational digital subscriptions are standard-rated at 20% (not zero-rated like physical books)."));
  items.push(bulletItem("If selling to consumers in other countries, place-of-supply rules may apply."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Monitor turnover against GBP 90,000 threshold"));
  items.push(checkboxItem("Consider voluntary VAT registration if B2B sales are expected (to reclaim input VAT)"));
  items.push(checkboxItem("Implement VAT-compliant invoicing in Stripe"));
  items.push(checkboxItem("Determine VAT treatment for Qatar-based customers (likely outside scope of UK VAT)"));
  items.push(linkPara("Portal:", "https://www.gov.uk/vat-registration"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 0 to register; ongoing compliance costs GBP 200-500/year (accountant)" }]));
  items.push(divider());
  return items;
}

function buildSection2_1() {
  const items = [];
  items.push(heading2("2.1 Qatar Data Privacy Law (Law No. 13 of 2016 -- PDPPL)"));
  items.push(para("Key Provisions:", { bold: true }));
  items.push(richBullet([{ text: "Explicit consent", bold: true }, { text: " required before processing personal data (Article 4)." }]));
  items.push(bulletItem("Must adhere to principles of transparency, fairness, and respect for human dignity."));
  items.push(bulletItem("Data must be kept up to date with adequate security measures."));
  items.push(richBullet([{ text: "Data breach notification within 72 hours", bold: true }, { text: " to the National Cyber Governance and Assurance Affairs (NCGAA) and affected individuals." }]));
  items.push(richBullet([{ text: "DPIA recommended", bold: true }, { text: " by the PDPPL Guidelines -- failure to conduct one where required can attract a fine of up to QAR 1,000,000 (approx. USD 275,000 / GBP 215,000)." }]));
  items.push(bulletItem("Records of Processing Activities (RoPA) must be maintained."));
  items.push(para("Cross-Border Transfer (Article 15):", { bold: true }));
  items.push(bulletItem("Data controllers must not take measures that limit cross-border data transfer."));
  items.push(bulletItem("However, transfers that violate the law\u2019s provisions or could cause harm are prohibited."));
  items.push(bulletItem("Consent from the data subject is required for cross-border transfers."));
  items.push(bulletItem("Must demonstrate that the transfer is for a lawful purpose and complies with the PDPPL."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Obtain explicit consent from Qatar-based users for data processing AND cross-border data transfer (to UK servers)"));
  items.push(checkboxItem("Conduct a DPIA under Qatari law requirements (can be combined with UK DPIA)"));
  items.push(checkboxItem("Maintain Records of Processing Activities"));
  items.push(checkboxItem("Implement a 72-hour breach notification process"));
  items.push(checkboxItem("Appoint a data protection contact accessible to Qatari users"));
  items.push(checkboxItem("Draft a Qatar-specific privacy notice"));
  items.push(richPara([{ text: "Enforcement Body: ", bold: true }, { text: "National Cyber Security Agency (NCSA) / NCGAA" }]));
  items.push(linkPara("Portal:", "https://assurance.ncsa.gov.qa/en/privacy/law"));
  items.push(divider());
  return items;
}

function buildSection2_2() {
  const items = [];
  items.push(heading2("2.2 Ministry of Education Approval"));
  items.push(para("Current Situation:", { bold: true }));
  items.push(bulletItem("Qatar\u2019s Ministry of Education and Higher Education (MOEHE) regulates educational content and institutions."));
  items.push(bulletItem("The Ministry has launched an online licensing platform for private educational institutions."));
  items.push(bulletItem("Distance learning is subject to specific approval criteria including accreditation and ranking requirements."));
  items.push(bulletItem("The National E-Learning Strategy (launched 2023) promotes digital educational approaches."));
  items.push(richPara([{ text: "Key Consideration: ", bold: true }, { text: "The English Hub is a supplementary educational resource, not a formal educational institution. This distinction is important:" }]));
  items.push(bulletItem("If positioned as a supplementary tutoring/revision platform, it may not require formal MOEHE licensing."));
  items.push(bulletItem("If positioned as a replacement for formal education or offering any form of certification, MOEHE approval is likely required."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Seek legal advice in Qatar on whether the platform requires MOEHE licensing (strongly recommended)"));
  items.push(checkboxItem("Position the platform clearly as \"supplementary revision and practice\" not \"formal education\""));
  items.push(checkboxItem("Include a disclaimer that the platform does not replace formal schooling"));
  items.push(checkboxItem("Monitor any new regulations under Qatar\u2019s National E-Learning Strategy"));
  items.push(checkboxItem("Consider engaging a Qatari education law firm for a formal opinion"));
  items.push(linkPara("Portal:", "https://www.edu.gov.qa/en/"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 1,000-3,000 for legal opinion from a Qatar-based firm" }]));
  items.push(divider());
  return items;
}

function buildSection2_3() {
  const items = [];
  items.push(heading2("2.3 Commercial Registration"));
  items.push(para("Options for operating in Qatar:", { bold: true }));
  items.push(heading3("Option A: Qatar Mainland (MoCI Registration)"));
  items.push(bulletItem("Register with the Ministry of Commerce and Industry."));
  items.push(richBullet([{ text: "Minimum capital: ", bold: true }, { text: "QAR 200,000 (approx. GBP 43,000)." }]));
  items.push(bulletItem("100% foreign ownership now permitted in most sectors including IT and education services."));
  items.push(bulletItem("Must identify the website through which commercial activity is conducted."));
  items.push(richBullet([{ text: "New e-commerce licensing regime", bold: true }, { text: " (Ministerial Decision No. 25 of 2026, in force 16 March 2026) requires an e-commerce licence from MoCI." }]));
  items.push(heading3("Option B: Qatar Financial Centre (QFC)"));
  items.push(richBullet([{ text: "Operates under English common law", bold: true }, { text: " (advantageous for a UK-based founder)." }]));
  items.push(bulletItem("100% foreign ownership permitted."));
  items.push(bulletItem("10% corporation tax on Qatar-sourced profits only."));
  items.push(bulletItem("No withholding taxes on dividends, interest, or royalties."));
  items.push(bulletItem("Lower or no minimum capital requirement."));
  items.push(bulletItem("Access to Qatar\u2019s double taxation treaty network."));
  items.push(richBullet([{ text: "Limitation: ", bold: true }, { text: "To sell directly to Qatari consumers, may need a mainland distributor or secondary registration." }]));
  items.push(heading3("Option C: No Qatar Registration (Serve Qatar Remotely from UK)"));
  items.push(bulletItem("Operate entirely from the UK and serve Qatar customers remotely."));
  items.push(bulletItem("Risky under the new e-commerce Decision No. 25 of 2026."));
  items.push(bulletItem("May still trigger Qatar tax obligations on Qatar-sourced income."));
  items.push(richBullet([{ text: "Not recommended", bold: true }, { text: " if actively marketing to Qatari students." }]));
  items.push(richPara([{ text: "Recommendation: ", bold: true }, { text: "Start with Option C for initial launch, then move to Option B (QFC) if Qatar revenue justifies the setup costs, given the English common law framework and tax efficiency." }]));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Obtain legal advice on whether the new e-commerce Decision No. 25 of 2026 applies to foreign-operated platforms serving Qatar"));
  items.push(checkboxItem("If registering: choose between mainland MoCI and QFC based on business model"));
  items.push(checkboxItem("Open a Qatari corporate bank account (if registering locally)"));
  items.push(checkboxItem("Comply with e-commerce licensing requirements"));
  items.push(linkPara("Portal (MoCI):", "https://www.moci.gov.qa/en/e-services/"));
  items.push(linkPara("Portal (QFC):", "https://www.qfc.qa/en"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 2,000-10,000+ (registration, legal, bank account setup)" }]));
  items.push(divider());
  return items;
}

function buildSection2_4() {
  const items = [];
  items.push(heading2("2.4 Payment Processing"));
  items.push(para("Stripe in Qatar:", { bold: true }));
  items.push(bulletItem("Stripe is supported in Qatar but is not locally licensed by the Qatar Central Bank (QCB)."));
  items.push(bulletItem("The QCB\u2019s Payment Services Regulation (September 2021) requires local licensing for payment service providers."));
  items.push(bulletItem("Stripe can process payments from Qatari cards, but using a locally licensed gateway (e.g., Dibsy, QPay) may be required if you have a Qatar entity."));
  items.push(para("Recommended Approach:", { bold: true }));
  items.push(bulletItem("Use Stripe for all payments (UK entity processes payments globally)."));
  items.push(bulletItem("If/when establishing a Qatar entity, consider adding a locally licensed payment gateway."));
  items.push(bulletItem("Ensure PCI DSS compliance (Stripe handles this for card payments)."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Set up Stripe account under UK Ltd company"));
  items.push(checkboxItem("Enable multi-currency support (GBP and QAR)"));
  items.push(checkboxItem("Implement Stripe\u2019s built-in SCA (Strong Customer Authentication) for UK/EU payments"));
  items.push(checkboxItem("Research local payment gateway options if setting up a Qatar entity"));
  items.push(checkboxItem("Ensure compliance with QCB information security regulations for PSPs"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "Stripe fees (1.5% + 20p UK cards; 3.25% + 20p international cards)" }]));
  items.push(divider());
  return items;
}

function buildSection2_5() {
  const items = [];
  items.push(heading2("2.5 Content Moderation Requirements"));
  items.push(para("Qatar-Specific Content Rules:", { bold: true }));
  items.push(bulletItem("All content must respect Islamic traditions and local customs."));
  items.push(bulletItem("Content must not include anything deemed offensive or inappropriate (nudity, explicit language, graphic violence)."));
  items.push(bulletItem("Politically sensitive content is punishable by law."));
  items.push(bulletItem("Media content must align with Qatari societal values and norms."));
  items.push(para("For The English Hub specifically:", { bold: true }));
  items.push(bulletItem("Literature texts used for GCSE/IGCSE may contain themes (e.g., violence, discrimination) that need careful framing."));
  items.push(bulletItem("Essay prompts and AI feedback must not generate content that could be considered culturally inappropriate in Qatar."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Review all platform content for cultural sensitivity in a Qatar context"));
  items.push(checkboxItem("Implement content filters on AI essay feedback to prevent culturally inappropriate outputs"));
  items.push(checkboxItem("Add content warnings where literature themes may be sensitive"));
  items.push(checkboxItem("Draft a content moderation policy specific to Qatar"));
  items.push(checkboxItem("Consider having a Qatar-based reviewer audit content periodically"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 500-2,000 (content review and policy drafting)" }]));
  items.push(divider());
  return items;
}

function buildSection2_6() {
  const items = [];
  items.push(heading2("2.6 Arabic Language Requirements"));
  items.push(para("Legal Requirement:", { bold: true }));
  items.push(bulletItem("Qatar\u2019s Law No. 7 of 2019 requires Arabic to be used in official contexts."));
  items.push(richBullet([{ text: "Arabic must appear equally prominently", bold: true }, { text: " to English in advertising materials (equal size and placement)." }]));
  items.push(bulletItem("Government-facing documents must be in Arabic."));
  items.push(para("For The English Hub:", { bold: true }));
  items.push(bulletItem("T&Cs and privacy policy should have Arabic translations if actively targeting Qatar."));
  items.push(bulletItem("Marketing materials aimed at Qatar must include Arabic at equal prominence to English."));
  items.push(bulletItem("The platform interface itself (being an English language learning tool) does not need to be in Arabic, but key legal documents should be bilingual."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Translate Terms & Conditions into Arabic"));
  items.push(checkboxItem("Translate Privacy Policy into Arabic"));
  items.push(checkboxItem("Translate Cookie Policy into Arabic"));
  items.push(checkboxItem("Ensure Qatar-targeted marketing materials include Arabic text at equal prominence"));
  items.push(checkboxItem("Have translations certified by a professional legal translator"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 500-1,500 (professional legal translation of key documents)" }]));
  items.push(divider());
  return items;
}

function buildSection3_1() {
  const items = [];
  items.push(heading2("3.1 Jurisdiction and Applicable Law"));
  items.push(para("Governing Principles:", { bold: true }));
  items.push(bulletItem("If the company is registered in the UK, English law should be the governing law of your T&Cs."));
  items.push(richBullet([{ text: "However, mandatory consumer protection laws of Qatar will still apply", bold: true }, { text: " to Qatari users regardless of your T&Cs." }]));
  items.push(bulletItem("The Qatar PDPPL applies to any processing of Qatari residents\u2019 data, regardless of where the processor is located."));
  items.push(bulletItem("UK GDPR applies to all processing of UK residents\u2019 data."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Draft T&Cs specifying English law as governing law, with acknowledgement that local mandatory laws apply"));
  items.push(checkboxItem("Include jurisdiction clause (English courts, with Qatar arbitration option for Qatari users)"));
  items.push(checkboxItem("Ensure compliance with BOTH UK and Qatar data protection laws simultaneously"));
  items.push(divider());
  return items;
}

function buildSection3_2() {
  const items = [];
  items.push(heading2("3.2 Data Transfer Mechanisms (UK-Qatar)"));
  items.push(para("Current Position:", { bold: true }));
  items.push(bulletItem("Qatar does NOT have a UK adequacy decision (it is not on the UK\u2019s list of approved countries for data transfers)."));
  items.push(bulletItem("No specific UK-Qatar data transfer agreement exists."));
  items.push(bulletItem("Under the Data Use and Access Act 2025, the UK is adopting a \"not materially lower\" standard for international transfers (likely slightly easier than the EU standard)."));
  items.push(para("Transfer Mechanisms Available:", { bold: true }));
  items.push(numberedItem("Standard Contractual Clauses (SCCs) / International Data Transfer Agreement (IDTA) -- the UK\u2019s version of SCCs. This is the most practical mechanism."));
  items.push(numberedItem("Explicit consent -- obtain explicit consent from each user for the international transfer. Fragile as consent can be withdrawn."));
  items.push(numberedItem("Binding Corporate Rules -- only if you have entities in both jurisdictions."));
  items.push(numberedItem("Transfer Risk Assessment (TRA) -- required alongside SCCs/IDTA."));
  items.push(para("Qatar Side:", { bold: true }));
  items.push(bulletItem("Under PDPPL Article 15, cross-border transfers are generally permitted if lawful and with consent."));
  items.push(bulletItem("Must demonstrate the transfer serves a lawful purpose."));
  items.push(para("Recommended Approach:", { bold: true }));
  items.push(richBullet([{ text: "Use the UK IDTA", bold: true }, { text: " as your primary transfer mechanism." }]));
  items.push(richBullet([{ text: "Supplement with explicit user consent", bold: true }, { text: " at registration." }]));
  items.push(richBullet([{ text: "Conduct a Transfer Risk Assessment", bold: true }, { text: " for UK-to-Qatar and Qatar-to-UK data flows." }]));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Implement the UK International Data Transfer Agreement (IDTA)"));
  items.push(checkboxItem("Conduct a Transfer Risk Assessment"));
  items.push(checkboxItem("Obtain explicit consent for international data transfers at registration"));
  items.push(checkboxItem("Document all cross-border data flows in your Record of Processing Activities"));
  items.push(checkboxItem("Monitor for any future UK-Qatar adequacy decision"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 500-2,000 (legal drafting of IDTA and TRA)" }]));
  items.push(divider());
  return items;
}

function buildSection3_3() {
  const items = [];
  items.push(heading2("3.3 Tax Implications"));
  items.push(para("UK Tax:", { bold: true }));
  items.push(makeTable(
    ["Tax", "Details"],
    [
      ["Corporation Tax", "25% on profits (19% for profits up to GBP 50,000 -- small profits rate)"],
      ["VAT", "20% on UK sales once threshold reached (GBP 90,000)"],
      ["Digital Services Tax", "2% on UK revenues -- only applies if group global revenues exceed GBP 500m (unlikely to apply)"],
    ],
    [3000, 6360]
  ));
  items.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  items.push(para("Qatar Tax:", { bold: true }));
  items.push(makeTable(
    ["Tax", "Details"],
    [
      ["Corporate Income Tax", "10% on Qatar-sourced income (applies to foreign-owned entities)"],
      ["QFC Tax", "10% on Qatar-sourced profits"],
      ["No personal income tax", "Qatar does not levy personal income tax"],
      ["No VAT", "Qatar does not currently have VAT"],
    ],
    [3000, 6360]
  ));
  items.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  items.push(para("UK-Qatar Double Taxation Treaty:", { bold: true }));
  items.push(bulletItem("In force since 14 October 2010."));
  items.push(bulletItem("Provides tax credit relief: tax paid in one country is credited against tax due in the other."));
  items.push(bulletItem("Prevents double taxation on the same income."));
  items.push(para("Practical Approach:", { bold: true }));
  items.push(bulletItem("If operating via UK Ltd only: UK Corporation Tax applies to worldwide profits, with credit for any Qatar tax paid."));
  items.push(bulletItem("If also registered in Qatar: 10% Qatar tax on Qatar-sourced profits, with credit against UK tax."));
  items.push(para("Action Items:", { bold: true }));
  items.push(checkboxItem("Register for Corporation Tax with HMRC within 3 months of trading"));
  items.push(checkboxItem("Engage an accountant familiar with UK-Qatar cross-border taxation"));
  items.push(checkboxItem("Determine whether Qatar-sourced income triggers Qatar tax obligations even without a local entity"));
  items.push(checkboxItem("Structure pricing to account for VAT on UK sales but no VAT on Qatar sales"));
  items.push(checkboxItem("Keep detailed records of income by jurisdiction"));
  items.push(linkPara("Portal:", "https://www.gov.uk/government/publications/qatar-tax-treaties"));
  items.push(richPara([{ text: "Estimated Cost: ", bold: true }, { text: "GBP 500-2,000/year (accountant fees for international tax)" }]));
  items.push(divider());
  return items;
}

function buildSection4() {
  const items = [];
  items.push(heading1("4. Master Action Item Checklist"));

  // Priority 1
  items.push(heading2("Priority 1 -- MUST DO BEFORE LAUNCH"));
  items.push(makeTable(
    ["#", "Action", "Category", "Est. Cost"],
    [
      ["1", "Register a UK Ltd company", "Company", "GBP 100"],
      ["2", "Pay ICO data protection fee", "Data Protection", "GBP 47/year"],
      ["3", "Conduct full DPIA (AI, children\u2019s data, cross-border)", "Data Protection", "GBP 0-5,000"],
      ["4", "Draft child-friendly privacy notice", "Data Protection", "GBP 0-1,000"],
      ["5", "Implement age verification at sign-up", "Technical", "GBP 0 (dev time)"],
      ["6", "Implement compliant cookie consent banner", "Technical", "GBP 0-50/month"],
      ["7", "Draft Terms & Conditions (English law)", "Legal", "GBP 500-2,000"],
      ["8", "Draft Cancellation Policy with model form", "Legal", "Included above"],
      ["9", "Implement 14-day cooling-off / waiver consent flow", "Technical", "GBP 0 (dev time)"],
      ["10", "Set up Stripe with proper invoicing", "Payments", "GBP 0 (transaction fees only)"],
      ["11", "Add exam board non-affiliation disclaimer", "Legal", "GBP 0"],
      ["12", "Build \"request human review\" for AI feedback", "Technical", "GBP 0 (dev time)"],
      ["13", "Document AI transparency (logic and criteria)", "Technical", "GBP 0 (dev time)"],
      ["14", "Set all privacy defaults to HIGH", "Technical", "GBP 0 (dev time)"],
    ],
    [600, 4600, 1800, 2360]
  ));

  items.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  // Priority 2
  items.push(heading2("Priority 2 -- SHOULD DO BEFORE LAUNCH"));
  items.push(makeTable(
    ["#", "Action", "Category", "Est. Cost"],
    [
      ["15", "Enhanced DBS checks for staff with student contact", "Safeguarding", "GBP 60-80 each"],
      ["16", "Level 1 Safeguarding training for all staff", "Safeguarding", "GBP 0 (NSPCC free)"],
      ["17", "Draft and publish Safeguarding Policy", "Safeguarding", "GBP 0-500"],
      ["18", "Audit all marketing claims for ASA compliance", "Marketing", "GBP 0-1,000"],
      ["19", "Draft affiliate marketing guidelines and agreements", "Marketing", "GBP 0-500"],
      ["20", "Children\u2019s Code conformance self-assessment", "Data Protection", "GBP 0"],
      ["21", "Translate T&Cs and Privacy Policy into Arabic", "Qatar", "GBP 500-1,500"],
      ["22", "Review content for Qatar cultural sensitivity", "Qatar", "GBP 500-2,000"],
      ["23", "Implement content filters on AI for Qatar context", "Technical", "GBP 0 (dev time)"],
    ],
    [600, 4600, 1800, 2360]
  ));

  items.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  // Priority 3
  items.push(heading2("Priority 3 -- DO WITHIN 3 MONTHS OF LAUNCH"));
  items.push(makeTable(
    ["#", "Action", "Category", "Est. Cost"],
    [
      ["24", "Register for VAT (if approaching GBP 90k threshold)", "Tax", "GBP 0"],
      ["25", "Seek Qatar legal opinion on MOEHE licensing", "Qatar", "GBP 1,000-3,000"],
      ["26", "Seek Qatar legal opinion on e-commerce Decision No. 25 of 2026", "Qatar", "Included above"],
      ["27", "Implement UK IDTA for data transfers", "Data Protection", "GBP 500-2,000"],
      ["28", "Conduct Transfer Risk Assessment", "Data Protection", "Included above"],
      ["29", "Engage cross-border tax accountant", "Tax", "GBP 500-2,000/year"],
      ["30", "Prepare for DMCC Act subscription rules (Autumn 2026)", "Legal", "GBP 0 (dev time)"],
    ],
    [600, 4600, 1800, 2360]
  ));

  items.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  // Priority 4
  items.push(heading2("Priority 4 -- DO WHEN QATAR REVENUE JUSTIFIES IT"));
  items.push(makeTable(
    ["#", "Action", "Category", "Est. Cost"],
    [
      ["31", "Register Qatar entity (QFC recommended)", "Company", "GBP 2,000-10,000+"],
      ["32", "Open Qatari corporate bank account", "Finance", "GBP 0-500"],
      ["33", "Add locally licensed Qatar payment gateway", "Payments", "Variable"],
      ["34", "Appoint Qatar-based content reviewer", "Content", "GBP 1,000-3,000/year"],
    ],
    [600, 4600, 1800, 2360]
  ));

  items.push(divider());
  return items;
}

function buildSection5() {
  const items = [];
  items.push(heading1("5. Estimated Total Costs"));

  items.push(heading2("Pre-Launch Minimum (Self-Service Approach)"));
  items.push(makeBoldFirstColTable(
    ["Category", "Cost"],
    [
      ["Company registration (Ltd)", "GBP 100"],
      ["ICO fee (year 1)", "GBP 47"],
      ["Legal (T&Cs, Privacy Policy -- template/DIY)", "GBP 0-500"],
      ["Cookie consent tool", "GBP 0"],
      ["DBS checks (2 people)", "GBP 120-160"],
      ["Arabic translations", "GBP 500-1,500"],
      ["TOTAL (minimum)", "GBP 767 - 2,307"],
    ],
    [5000, 4360]
  ));

  items.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  items.push(heading2("Pre-Launch Recommended (With Professional Advice)"));
  items.push(makeBoldFirstColTable(
    ["Category", "Cost"],
    [
      ["Company registration (Ltd)", "GBP 100"],
      ["ICO fee (year 1)", "GBP 47"],
      ["Legal (T&Cs, policies, DPIA -- solicitor)", "GBP 3,000-8,000"],
      ["Cookie consent tool", "GBP 0-50/month"],
      ["DBS checks (2 people)", "GBP 120-160"],
      ["Arabic translations", "GBP 500-1,500"],
      ["Qatar legal opinion", "GBP 1,000-3,000"],
      ["Children\u2019s Code audit", "GBP 3,000-8,000"],
      ["TOTAL (recommended)", "GBP 7,767 - 20,857"],
    ],
    [5000, 4360]
  ));

  items.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  items.push(heading2("Annual Ongoing Costs"));
  items.push(makeBoldFirstColTable(
    ["Category", "Cost"],
    [
      ["ICO fee", "GBP 47-78"],
      ["Companies House confirmation statement", "GBP 50"],
      ["Accountant (including international tax)", "GBP 1,000-3,000"],
      ["Cookie consent tool", "GBP 0-600"],
      ["Legal review / updates", "GBP 500-2,000"],
      ["TOTAL (annual)", "GBP 1,597 - 5,728"],
    ],
    [5000, 4360]
  ));

  items.push(divider());
  return items;
}

function buildSection6() {
  const items = [];
  items.push(heading1("6. Recommended Timeline"));

  items.push(heading2("Weeks 1-2: Foundation"));
  items.push(checkboxItem("Register UK Ltd company (24 hours processing)"));
  items.push(checkboxItem("Pay ICO data protection fee (immediate)"));
  items.push(checkboxItem("Register for Corporation Tax with HMRC"));
  items.push(checkboxItem("Set up Stripe under company name"));
  items.push(checkboxItem("Begin drafting T&Cs, Privacy Policy, Cookie Policy"));

  items.push(heading2("Weeks 3-4: Data Protection"));
  items.push(checkboxItem("Conduct DPIA (AI + children\u2019s data + cross-border transfers)"));
  items.push(checkboxItem("Implement Children\u2019s Code conformance (privacy defaults, transparency, etc.)"));
  items.push(checkboxItem("Build cookie consent mechanism"));
  items.push(checkboxItem("Implement age verification flow"));
  items.push(checkboxItem("Build AI transparency page and human review mechanism"));

  items.push(heading2("Weeks 5-6: Safeguarding & Content"));
  items.push(checkboxItem("Complete DBS checks for relevant staff"));
  items.push(checkboxItem("Complete safeguarding training"));
  items.push(checkboxItem("Review and adapt content for Qatar cultural sensitivity"));
  items.push(checkboxItem("Implement AI content filters for Qatar context"));
  items.push(checkboxItem("Commission Arabic translations of legal documents"));

  items.push(heading2("Weeks 7-8: Marketing & Affiliates"));
  items.push(checkboxItem("Audit all marketing materials for ASA compliance"));
  items.push(checkboxItem("Draft affiliate guidelines and agreements"));
  items.push(checkboxItem("Add exam board disclaimers"));
  items.push(checkboxItem("Finalise cancellation flow and cooling-off compliance"));

  items.push(heading2("Weeks 9-10: Legal Review & Launch Prep"));
  items.push(checkboxItem("Final legal review of all policies and T&Cs"));
  items.push(checkboxItem("Test all compliance flows (consent, cancellation, data access requests)"));
  items.push(checkboxItem("Publish all policies on the website"));
  items.push(checkboxItem("Soft launch"));

  items.push(heading2("Months 3-6: Post-Launch"));
  items.push(checkboxItem("Obtain Qatar legal opinion on MOEHE and e-commerce requirements"));
  items.push(checkboxItem("Monitor VAT threshold"));
  items.push(checkboxItem("Engage international tax accountant"));
  items.push(checkboxItem("Prepare for DMCC Act subscription rules (Autumn 2026)"));
  items.push(checkboxItem("Evaluate whether Qatar entity registration is needed"));

  items.push(divider());
  return items;
}

function buildKeyPortals() {
  const items = [];
  items.push(heading1("Key Registration Portals and Resources"));

  const portals = [
    ["ICO Data Protection Fee", "https://ico.org.uk/for-organisations/data-protection-fee/"],
    ["ICO Children\u2019s Code", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/"],
    ["Companies House Registration", "https://www.gov.uk/set-up-limited-company"],
    ["HMRC VAT Registration", "https://www.gov.uk/vat-registration"],
    ["HMRC Corporation Tax", "https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax"],
    ["DBS Check Application", "https://www.gov.uk/request-copy-criminal-record"],
    ["ASA Copy Advice", "https://www.asa.org.uk/advice-and-resources.html"],
    ["ASA Influencer Guidance", "https://www.asa.org.uk/advice-online/recognising-ads-social-media.html"],
    ["Qatar PDPPL (Full Text)", "https://www.almeezan.qa/EnglishLaws//132016.pdf"],
    ["Qatar NCSA Privacy", "https://assurance.ncsa.gov.qa/en/privacy/law"],
    ["Qatar MoCI E-Services", "https://www.moci.gov.qa/en/e-services/"],
    ["Qatar Financial Centre", "https://www.qfc.qa/en"],
    ["Qatar MOEHE", "https://www.edu.gov.qa/en/"],
    ["UK-Qatar Double Tax Treaty", "https://www.gov.uk/government/publications/qatar-tax-treaties"],
    ["AQA Copyright Policy", "https://www.aqa.org.uk/about-us/who-we-are/our-standards/copyright-and-intellectual-property-policy"],
    ["Pearson Copyright Policy", "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers/pearson-copyright-policy.html"],
    ["Cambridge Permissions", "https://help.cambridgeinternational.org/hc/en-gb/articles/115004418469"],
  ];

  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      new TableCell({ borders, width: { size: 3600, type: WidthType.DXA }, shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "Resource", bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })] }),
      new TableCell({ borders, width: { size: 5760, type: WidthType.DXA }, shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "URL", bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })] }),
    ],
  });

  const rows = portals.map((p, i) => new TableRow({
    children: [
      new TableCell({ borders, width: { size: 3600, type: WidthType.DXA }, shading: i % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: p[0], font: "Arial", size: 20, bold: true })] })] }),
      new TableCell({ borders, width: { size: 5760, type: WidthType.DXA }, shading: i % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined, margins: cellMargins, children: [new Paragraph({ children: [new ExternalHyperlink({ link: p[1], children: [new TextRun({ text: p[1], font: "Arial", size: 18, color: BRAND_BLUE, underline: { type: "single" } })] })] })] }),
    ],
  }));

  items.push(new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: [3600, 5760], rows: [headerRow, ...rows] }));

  items.push(divider());
  return items;
}

function buildDisclaimer() {
  const items = [];
  items.push(heading1("Disclaimer"));
  items.push(para("This report is compiled from publicly available information as of March 2026 and is intended as a research summary to guide further professional legal and tax advice. It does not constitute legal advice. Laws and regulations change frequently -- particularly the DMCC Act subscription rules (expected Autumn 2026), the ICO\u2019s updated cookie guidance (expected Spring 2026), and Qatar\u2019s new e-commerce licensing framework (in force March 2026). You should engage qualified legal professionals in both the UK and Qatar before making final compliance decisions.", { italics: true }));
  items.push(divider());
  return items;
}

function buildSources() {
  const items = [];
  items.push(heading1("Sources"));

  const sources = [
    ["ICO Data Protection Fee", "https://ico.org.uk/for-organisations/data-protection-fee/"],
    ["ICO Children and the UK GDPR", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/"],
    ["ICO Children\u2019s Code", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/"],
    ["ICO DPIA Guidance", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/"],
    ["ICO Cookie Guidance (PECR)", "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/"],
    ["Companies House Fees (Feb 2026)", "https://www.gov.uk/government/news/companies-house-fees-are-changing-from-1-february-2026"],
    ["ASA Influencer Guidance", "https://www.asa.org.uk/advice-online/recognising-ads-social-media.html"],
    ["ASA Educational Advertising", "https://www.asa.org.uk/news/learning-to-ensure-your-advertising-is-compliant.html"],
    ["DMCC Act Subscription Rules", "https://www.hoganlovells.com/en/publications/uk-subscription-law-shakeup-new-rules-pushed-to-autumn-2026"],
    ["DBS Check Costs 2026", "https://smartworkforce.co.uk/how-much-does-a-dbs-check-cost/"],
    ["Qatar PDPPL (Securiti)", "https://securiti.ai/qatar-personal-data-protection-law/"],
    ["Qatar PDPPL (Full Text)", "https://www.almeezan.qa/EnglishLaws//132016.pdf"],
    ["Qatar Data Protection (DLA Piper)", "https://www.dlapiperdataprotection.com/countries/qatar/law.html"],
    ["Qatar Commercial Registration (Wafeq)", "https://www.wafeq.com/en-qa/business-hub/for-business/obtaining-a-commercial-register-in-qatar"],
    ["Qatar E-Commerce Licensing (Crowell & Moring)", "https://www.crowell.com/en/insights/client-alerts/qatar-introduces-licensing-framework-for-e-commerce-activities-without-a-physical-premises"],
    ["QFC Company Registration", "https://www.qfc.qa/en"],
    ["QFC vs Mainland (Emerhub)", "https://emerhub.com/qatar/"],
    ["Qatar Corporate Tax (PwC)", "https://taxsummaries.pwc.com/qatar/corporate/taxes-on-corporate-income"],
    ["UK-Qatar Double Tax Treaty", "https://www.gov.uk/government/publications/qatar-tax-treaties"],
    ["Stripe Middle East Payments", "https://stripe.com/resources/more/payments-in-the-middle-east"],
    ["Qatar Arabic Language Law", "https://www.sabaip.com/qatar-law-on-the-protection-of-the-arabic-language/"],
    ["Qatar MOEHE", "https://www.edu.gov.qa/en/"],
    ["UK AI Regulation Tracker (Osborne Clarke)", "https://www.osborneclarke.com/insights/regulatory-outlook-february-2026-artificial-intelligence"],
    ["UK VAT Threshold 2025/26", "https://merrantiaccounting.com/vat-registration-threshold-what-will-happen-in-april-2026-and-how-to-prepare-now/"],
    ["Pearson Copyright Policy", "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers/pearson-copyright-policy.html"],
    ["AQA Copyright Policy", "https://www.aqa.org.uk/about-us/who-we-are/our-standards/copyright-and-intellectual-property-policy"],
    ["ICO International Transfers Guide", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-transfers-a-guide/"],
    ["QFC Data Protection Transfers", "https://www.qfc.qa/en/operating-with-qfc/data-protection/data-protection-and-international-data-transfers"],
  ];

  sources.forEach(s => {
    items.push(new Paragraph({
      numbering: { reference: "bullets", level: 0 },
      spacing: { after: 60 },
      children: [
        new ExternalHyperlink({
          link: s[1],
          children: [new TextRun({ text: s[0], font: "Arial", size: 20, color: BRAND_BLUE, underline: { type: "single" } })],
        }),
      ],
    }));
  });

  return items;
}

// --- Assemble document ---
async function main() {
  const doc = new Document({
    features: { updateFields: true },
    styles: {
      default: { document: { run: { font: "Arial", size: 20 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: BRAND_BLUE },
          paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: BRAND_BLUE },
          paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 22, bold: true, font: "Arial", color: ACCENT_GREY },
          paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } },
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
            children: [new TextRun({ text: "The English Hub \u2014 Legal Compliance Report", font: "Arial", size: 16, color: ACCENT_GREY, italics: true })],
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
        // --- Title page ---
        new Paragraph({ spacing: { before: 2400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "The English Hub", bold: true, font: "Arial", size: 48, color: BRAND_BLUE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Legal Compliance Report", font: "Arial", size: 32, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "UK and Qatar Dual-Jurisdiction Requirements", font: "Arial", size: 24, color: ACCENT_GREY, italics: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_BLUE, space: 8 } },
          children: [new TextRun({ text: "EdTech SaaS | GCSE/IGCSE English | Ages 14-18 | AI Essay Feedback | Stripe Payments | Affiliate Program", font: "Arial", size: 18, color: ACCENT_GREY, italics: true })],
        }),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Report Date: 22 March 2026", font: "Arial", size: 22, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Status: Pre-launch compliance checklist", font: "Arial", size: 22, color: BRAND_BLUE, bold: true })],
        }),

        // --- Table of Contents ---
        new Paragraph({ children: [new PageBreak()] }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 300 },
          children: [new TextRun({ text: "Table of Contents", bold: true, font: "Arial", size: 32, color: BRAND_BLUE })],
        }),
        new TableOfContents("Table of Contents", {
          hyperlink: true,
          headingStyleRange: "1-3",
        }),

        // --- Section 1: UK Legal Requirements ---
        new Paragraph({ children: [new PageBreak()] }),
        heading1("1. UK Legal Requirements"),
        ...buildSection1_1(),
        ...buildSection1_2(),
        ...buildSection1_3(),
        ...buildSection1_4(),
        ...buildSection1_5(),
        ...buildSection1_6(),
        ...buildSection1_7(),
        ...buildSection1_8(),
        ...buildSection1_9(),
        ...buildSection1_10(),
        ...buildSection1_11(),

        // --- Section 2: Qatar Legal Requirements ---
        new Paragraph({ children: [new PageBreak()] }),
        heading1("2. Qatar Legal Requirements"),
        ...buildSection2_1(),
        ...buildSection2_2(),
        ...buildSection2_3(),
        ...buildSection2_4(),
        ...buildSection2_5(),
        ...buildSection2_6(),

        // --- Section 3: Cross-Border Considerations ---
        new Paragraph({ children: [new PageBreak()] }),
        heading1("3. Cross-Border Considerations"),
        ...buildSection3_1(),
        ...buildSection3_2(),
        ...buildSection3_3(),

        // --- Section 4: Master Checklist ---
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection4(),

        // --- Section 5: Costs ---
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection5(),

        // --- Section 6: Timeline ---
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection6(),

        // --- Key Portals ---
        new Paragraph({ children: [new PageBreak()] }),
        ...buildKeyPortals(),

        // --- Disclaimer ---
        ...buildDisclaimer(),

        // --- Sources ---
        ...buildSources(),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  const outPath = "D:/Coding/english-hub/docs/Legal_Compliance_Report.docx";
  fs.writeFileSync(outPath, buffer);
  console.log(`Created: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch(console.error);
