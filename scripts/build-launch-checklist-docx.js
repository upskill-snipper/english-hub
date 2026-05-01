const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat,
} = require("docx");

// ─── colours ───
const BRAND_BLUE = "1A5276";
const BRAND_LIGHT = "D6EAF8";
const ACCENT_GREY = "5D6D7E";
const TABLE_HEADER = "2C3E50";
const TABLE_ALT = "F2F4F4";
const BORDER_CLR = "BDC3C7";

const PRIORITY_COLORS = {
  CRITICAL: "C0392B",
  IMPORTANT: "D4770B",
  "NICE TO HAVE": "27AE60",
};

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER_CLR };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// ─── helpers ───
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

function richPara(runs, pOpts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...pOpts,
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

function checklistItem(title, priority) {
  const color = PRIORITY_COLORS[priority] || ACCENT_GREY;
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 160, after: 60 },
    children: [
      new TextRun({ text: "\u2610  ", font: "Arial", size: 22 }),
      new TextRun({ text: title + "  ", font: "Arial", size: 20, bold: true }),
      new TextRun({ text: priority, font: "Arial", size: 18, bold: true, color }),
    ],
  });
}

function subItem(label, text) {
  return new Paragraph({
    spacing: { after: 40 },
    indent: { left: 1080 },
    children: [
      new TextRun({ text: label + ": ", font: "Arial", size: 18, bold: true, color: ACCENT_GREY }),
      new TextRun({ text, font: "Arial", size: 18, color: ACCENT_GREY }),
    ],
  });
}

function timelineCheckbox(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 40 },
    children: [
      new TextRun({ text: "\u2610  ", font: "Arial", size: 20 }),
      new TextRun({ text, font: "Arial", size: 20 }),
    ],
  });
}

// ─── section builders ───
function buildSection1() {
  const items = [];
  items.push(heading1("1. Technical Readiness"));

  items.push(heading3("Infrastructure & Security"));

  items.push(checklistItem("All API endpoints tested and working", "CRITICAL"));
  items.push(subItem("Why", "Broken endpoints mean broken features for paying customers."));
  items.push(subItem("Verify", "Run your full Postman/Newman collection against the production Azure App Service URL. Every endpoint should return expected status codes."));

  items.push(checklistItem("SSL certificates valid on all domains", "CRITICAL"));
  items.push(subItem("Why", "Browsers will block the site without valid HTTPS. Stripe requires it."));
  items.push(subItem("Verify", "Visit every domain/subdomain and confirm the padlock icon. Run `curl -vI https://yourdomain.com` and check certificate expiry."));

  items.push(checklistItem("Error monitoring (Sentry) configured for both frontend and backend", "CRITICAL"));
  items.push(subItem("Why", "Without this you will not know when things break. Users will churn silently."));
  items.push(subItem("Verify", "Throw a deliberate test error in both the Next.js app and the Express API. Confirm both appear in Sentry with correct source maps and environment tags."));

  items.push(checklistItem("Database backups scheduled", "CRITICAL"));
  items.push(subItem("Why", "Data loss is catastrophic and unrecoverable without backups."));
  items.push(subItem("Verify", "In Azure Portal, navigate to PostgreSQL > Backups. Confirm automated backups with at least 7-day retention. Perform a test restore."));

  items.push(checklistItem("Rate limiting active on all public API routes", "CRITICAL"));
  items.push(subItem("Why", "Without rate limiting, a single bad actor can bring down your API or run up your Azure bill."));
  items.push(subItem("Verify", "Send 200 rapid requests to login/signup endpoints. Confirm 429 responses after threshold."));

  items.push(checklistItem("CORS configured for production domain only", "CRITICAL"));
  items.push(subItem("Why", "Misconfigured CORS either blocks your frontend or allows any origin to call your API."));
  items.push(subItem("Verify", "From production domain, make a fetch request \u2014 it should succeed. From a different domain, confirm rejection."));

  items.push(checklistItem("All environment variables verified in production", "CRITICAL"));
  items.push(subItem("Why", "A single missing env var can cause silent failures or route payments to the wrong account."));
  items.push(subItem("Verify", "Go through each one manually in Vercel and Azure App Service. Confirm no values point to localhost or test keys."));

  items.push(checklistItem("Load testing performed", "IMPORTANT"));
  items.push(subItem("Why", "You need to know your breaking point before real users find it."));
  items.push(subItem("Verify", "Simulate 100\u2013500 concurrent users. Monitor Azure metrics. Document capacity ceiling."));

  items.push(heading3("Frontend Quality"));

  items.push(checklistItem("Mobile responsiveness verified on real devices", "CRITICAL"));
  items.push(subItem("Why", "The majority of student users will access this on phones."));
  items.push(subItem("Verify", "Test on iPhone (Safari), Android (Chrome), iPad. Check every page."));

  items.push(checklistItem("Browser compatibility (Chrome, Safari, Firefox, Edge)", "IMPORTANT"));
  items.push(subItem("Why", "Safari handles things differently. Edge is common in schools."));
  items.push(subItem("Verify", "Walk through the critical user journey on each browser."));

  items.push(checklistItem("PWA manifest and icons configured", "NICE TO HAVE"));
  items.push(subItem("Why", "Allows users to \u201Cinstall\u201D the app on their home screen."));
  items.push(subItem("Verify", "Run Lighthouse PWA audit. Test \u201CAdd to Home Screen\u201D on Android."));

  items.push(checklistItem("Sitemap.xml and robots.txt deployed", "IMPORTANT"));
  items.push(subItem("Why", "Without these, Google may not index your public pages."));
  items.push(subItem("Verify", "Visit `/sitemap.xml` and `/robots.txt`. Submit sitemap in Search Console."));

  items.push(checklistItem("Open Graph images for social sharing", "IMPORTANT"));
  items.push(subItem("Why", "Missing preview images kill click-through when shared."));
  items.push(subItem("Verify", "Paste URL into Facebook Sharing Debugger, Twitter Card Validator."));

  items.push(checklistItem("404 and error pages styled and helpful", "IMPORTANT"));
  items.push(subItem("Why", "Default error pages look broken and unprofessional."));
  items.push(subItem("Verify", "Visit a nonsense URL. Confirm branded 404 page with navigation."));

  items.push(checklistItem("Core Web Vitals passing", "IMPORTANT"));
  items.push(subItem("Why", "Google ranking signal. Slow pages kill conversions."));
  items.push(subItem("Verify", "Run PageSpeed Insights. Target: LCP < 2.5s, INP < 200ms, CLS < 0.1."));

  items.push(divider());
  return items;
}

function buildSection2() {
  const items = [];
  items.push(heading1("2. Payment & Billing"));

  items.push(checklistItem("Stripe live mode keys configured", "CRITICAL"));
  items.push(subItem("Why", "Test mode keys mean no real payments are processed."));
  items.push(subItem("Verify", "Confirm `STRIPE_SECRET_KEY` starts with `sk_live_` and publishable key with `pk_live_`."));

  items.push(checklistItem("All Stripe webhook events registered and handled", "CRITICAL"));
  items.push(subItem("Why", "Webhooks are how Stripe tells your system about payments, cancellations, and failures."));
  items.push(subItem("Verify", "Minimum events: `checkout.session.completed`, `customer.subscription.created/updated/deleted`, `invoice.payment_succeeded/failed`, `customer.subscription.trial_will_end`."));

  items.push(checklistItem("Test a real purchase flow end-to-end", "CRITICAL"));
  items.push(subItem("Why", "This is how you make money. If this is broken, nothing else matters."));
  items.push(subItem("Verify", "Using a real card, complete: sign up \u2192 start trial \u2192 payment \u2192 confirm subscription active. Refund yourself after."));

  items.push(checklistItem("Subscription upgrade and downgrade works", "IMPORTANT"));
  items.push(subItem("Why", "Users will want to switch plans."));
  items.push(subItem("Verify", "Subscribe monthly, upgrade to annual. Confirm proration. Then downgrade."));

  items.push(checklistItem("Cancellation flow works correctly", "CRITICAL"));
  items.push(subItem("Why", "A broken cancellation flow violates consumer rights and generates chargebacks."));
  items.push(subItem("Verify", "Cancel a subscription. Confirm access retained until period end. Stripe shows `cancel_at_period_end`."));

  items.push(checklistItem("7-day trial period configured correctly", "CRITICAL"));
  items.push(subItem("Why", "This is your conversion funnel."));
  items.push(subItem("Verify", "Confirm `trial_period_days: 7` (sourced from `PRICING.TRIAL_DAYS`) in Stripe. Create new account, verify no payment taken and correct end date."));

  items.push(checklistItem("Invoices and receipts sent automatically", "IMPORTANT"));
  items.push(subItem("Why", "Customers expect receipts. Required for tax purposes."));
  items.push(subItem("Verify", "Enable receipt emails in Stripe Settings. Make a test payment and confirm receipt arrives."));

  items.push(checklistItem("Failed payment retry logic configured", "IMPORTANT"));
  items.push(subItem("Why", "Cards fail for innocent reasons. Without retries, you lose paying customers."));
  items.push(subItem("Verify", "Configure Smart Retries in Stripe. Set up dunning emails."));

  items.push(checklistItem("Stripe Customer Portal accessible", "IMPORTANT"));
  items.push(subItem("Why", "Lets users update payment method and manage subscription."));
  items.push(subItem("Verify", "Configure Customer Portal in Stripe. Add \u201CManage Billing\u201D button in settings page."));

  items.push(checklistItem("VAT / tax handling", "IMPORTANT"));
  items.push(subItem("Why", "UK businesses must charge VAT once above threshold."));
  items.push(subItem("Verify", "Determine VAT status. If registered, enable Stripe Tax. Track revenue toward \u00A390,000 threshold."));

  items.push(divider());
  return items;
}

function buildSection3() {
  const items = [];
  items.push(heading1("3. Legal & Compliance"));

  items.push(checklistItem("Terms of Service published and linked", "CRITICAL"));
  items.push(subItem("Why", "Without ToS, you have no legal agreement with users."));
  items.push(subItem("Verify", "Published at `/terms`. Linked in footer and shown during signup. Have a solicitor review."));

  items.push(checklistItem("Privacy Policy published (GDPR compliant)", "CRITICAL"));
  items.push(subItem("Why", "UK GDPR requires this. Fines up to \u00A317.5 million."));
  items.push(subItem("Verify", "Published at `/privacy`. Includes: data collected, lawful basis, third parties, retention, user rights, ICO registration number."));

  items.push(checklistItem("Cookie Policy and consent banner implemented", "CRITICAL"));
  items.push(subItem("Why", "UK PECR requires consent before setting non-essential cookies."));
  items.push(subItem("Verify", "Visit site incognito. Banner appears before any analytics cookies set."));

  items.push(checklistItem("Refund Policy published", "CRITICAL"));
  items.push(subItem("Why", "UK Consumer Contracts Regulations give 14-day cooling-off period."));
  items.push(subItem("Verify", "Published at `/refund-policy`. Linked from footer, pricing, and checkout."));

  items.push(checklistItem("Age verification / parental consent for under-16s", "CRITICAL"));
  items.push(subItem("Why", "UK GDPR digital consent age is 13. Children\u2019s Code applies to under-18s."));
  items.push(subItem("Verify", "Signup asks for age. Under-13s blocked. Age-appropriate privacy notices for 13-17."));

  items.push(checklistItem("Data Processing Agreements with all sub-processors", "IMPORTANT"));
  items.push(subItem("Why", "GDPR requires written agreements with anyone processing data on your behalf."));
  items.push(subItem("Verify", "DPAs from Supabase, Stripe, Azure, Vercel, Sentry, email provider."));

  items.push(checklistItem("Accessibility statement published", "IMPORTANT"));
  items.push(subItem("Why", "Equality Act 2010 applies. Schools will ask about this."));
  items.push(subItem("Verify", "Published at `/accessibility`. Lighthouse score 90+. Keyboard navigation works."));

  items.push(checklistItem("ICO registration (UK data protection)", "CRITICAL"));
  items.push(subItem("Why", "Processing personal data requires ICO registration. Failure is a criminal offence."));
  items.push(subItem("Verify", "Register at ico.org.uk. Fee: \u00A340-52/year. Add registration number to privacy policy."));

  items.push(checklistItem("Company registration and business details visible", "IMPORTANT"));
  items.push(subItem("Why", "UK regulations require business information on your website."));
  items.push(subItem("Verify", "Footer includes: legal business name, company number (if Ltd), address, contact email."));

  items.push(divider());
  return items;
}

function buildSection4() {
  const items = [];
  items.push(heading1("4. Content & Quality"));

  items.push(checklistItem("All course content reviewed for accuracy", "CRITICAL"));
  items.push(subItem("Why", "Inaccurate educational content destroys credibility."));
  items.push(subItem("Verify", "Subject matter expert reviews every lesson, quiz, and explanation. Sign-off sheet per module."));

  items.push(checklistItem("No exam board copyright violations", "CRITICAL"));
  items.push(subItem("Why", "AQA, Edexcel, OCR, WJEC aggressively protect IP. Legal action for reproduction."));
  items.push(subItem("Verify", "Audit all content for direct reproduction of past papers, mark schemes. Use original \u201Cin the style of\u201D questions."));

  items.push(checklistItem("Spelling and grammar checked across all pages", "IMPORTANT"));
  items.push(subItem("Why", "You are selling an English language product. Errors destroy credibility."));
  items.push(subItem("Verify", "Run every page through Grammarly/LanguageTool. Human proofread all public copy."));

  items.push(checklistItem("All internal links working", "IMPORTANT"));
  items.push(subItem("Why", "Broken links frustrate users and hurt SEO."));
  items.push(subItem("Verify", "Use a link checker tool to crawl entire site. Fix all 404s."));

  items.push(checklistItem("Images optimized and loading", "IMPORTANT"));
  items.push(subItem("Why", "Unoptimized images slow page loads."));
  items.push(subItem("Verify", "All images use Next.js `<Image>`. No 404s. Landing page under 2MB total."));

  items.push(checklistItem("Empty states handled gracefully", "IMPORTANT"));
  items.push(subItem("Why", "New users see empty dashboards. Without proper empty states, app looks broken."));
  items.push(subItem("Verify", "Create fresh account, navigate every section. Helpful messages and CTAs everywhere."));

  items.push(divider());
  return items;
}

function buildSection5() {
  const items = [];
  items.push(heading1("5. Marketing & Launch"));

  items.push(checklistItem("Landing page optimized for conversion", "CRITICAL"));
  items.push(subItem("Why", "This is your front door."));
  items.push(subItem("Verify", "Clearly answers: What? Who? Why? How much? CTA visible above fold. Under 3s load time."));

  items.push(checklistItem("Social media accounts created and branded", "IMPORTANT"));
  items.push(subItem("Why", "Establishes legitimacy. Parents and teachers will search for you."));
  items.push(subItem("Verify", "Twitter/X, Instagram, LinkedIn, TikTok. Consistent branding. At least a few posts."));

  items.push(checklistItem("Email list / waitlist ready", "IMPORTANT"));
  items.push(subItem("Why", "Warmest leads convert on launch day."));
  items.push(subItem("Verify", "Email platform configured. Launch email drafted. Sender domain authenticated (SPF, DKIM, DMARC)."));

  items.push(checklistItem("Analytics configured (GA4 + Vercel Analytics)", "CRITICAL"));
  items.push(subItem("Why", "Without analytics, you are flying blind."));
  items.push(subItem("Verify", "GA4 tracking code installed (respecting consent). Key events tracked: signup, trial start, payment."));

  items.push(checklistItem("UTM tracking set up", "IMPORTANT"));
  items.push(subItem("Why", "Need to know which channels drive signups."));
  items.push(subItem("Verify", "UTM convention document. All marketing links use UTMs. Parameters appear in GA4."));

  items.push(checklistItem("Rewardful affiliate program configured and tested", "IMPORTANT"));
  items.push(subItem("Why", "Broken affiliate system means affiliates don\u2019t get paid and stop promoting."));
  items.push(subItem("Verify", "Connected to Stripe live. Test affiliate \u2192 referral link \u2192 purchase \u2192 commission tracked."));

  items.push(checklistItem("Launch announcement drafted and scheduled", "NICE TO HAVE"));
  items.push(subItem("Why", "Coordinated launch maximizes initial impact."));
  items.push(subItem("Verify", "Blog post, social posts, email blast prepared and scheduled."));

  items.push(checklistItem("Press kit / media assets ready", "NICE TO HAVE"));
  items.push(subItem("Why", "Easy coverage for journalists and bloggers."));
  items.push(subItem("Verify", "Logo (SVG, PNG), brand colours, description, key stats, contact details."));

  items.push(divider());
  return items;
}

function buildSection6() {
  const items = [];
  items.push(heading1("6. Support & Operations"));

  items.push(checklistItem("Contact form working and delivering emails", "CRITICAL"));
  items.push(subItem("Why", "If users cannot reach you, they churn."));
  items.push(subItem("Verify", "Submit form. Confirm email arrives. Success message shown."));

  items.push(checklistItem("Support email set up and monitored", "CRITICAL"));
  items.push(subItem("Why", "Users will email directly. Stripe sends dispute notifications."));
  items.push(subItem("Verify", "support@theenglishhub.app configured and monitored daily."));

  items.push(checklistItem("FAQ page covers common questions", "IMPORTANT"));
  items.push(subItem("Why", "Reduces support burden."));
  items.push(subItem("Verify", "Covers: free trial, cancellation, exam boards, refunds, data safety, password reset, school discounts."));

  items.push(checklistItem("Onboarding flow guides new users", "IMPORTANT"));
  items.push(subItem("Why", "Users who don\u2019t understand the product in 5 minutes leave forever."));
  items.push(subItem("Verify", "Sign up as new user. First \u201Caha moment\u201D within 2-3 minutes."));

  items.push(checklistItem("Admin dashboard for user management", "IMPORTANT"));
  items.push(subItem("Why", "Handle support issues without SQL queries."));
  items.push(subItem("Verify", "View all users, search by email, see subscription status, manage accounts."));

  items.push(checklistItem("Monitoring and alerting configured", "CRITICAL"));
  items.push(subItem("Why", "Know immediately when site goes down."));
  items.push(subItem("Verify", "Uptime monitoring on frontend + API health. SMS/push alerts. Sentry error rate alerts. Azure CPU/memory alerts."));

  items.push(checklistItem("Incident response plan documented", "NICE TO HAVE"));
  items.push(subItem("Why", "Written plan prevents mistakes during panic."));
  items.push(subItem("Verify", "Document: check if down, access logs, rollback deploys, maintenance page, contacts."));

  items.push(checklistItem("Backup and recovery tested", "CRITICAL"));
  items.push(subItem("Why", "Untested backups are just hopes."));
  items.push(subItem("Verify", "Full PostgreSQL restore from Azure backup. Confirm data intact. Document procedure."));

  items.push(divider());
  return items;
}

function buildSection7() {
  const items = [];
  items.push(heading1("7. SEO"));

  items.push(checklistItem("Meta titles and descriptions on all public pages", "IMPORTANT"));
  items.push(subItem("Why", "These appear in Google search results."));
  items.push(subItem("Verify", "Every public page has unique title (50-60 chars) and description (120-160 chars)."));

  items.push(checklistItem("JSON-LD structured data implemented", "IMPORTANT"));
  items.push(subItem("Why", "Enables rich results in Google."));
  items.push(subItem("Verify", "Organization, Product, FAQPage schemas. Validate with Rich Results Test."));

  items.push(checklistItem("Google Search Console verified and sitemap submitted", "CRITICAL"));
  items.push(subItem("Why", "How you know if Google can find your site."));
  items.push(subItem("Verify", "Verify ownership. Submit sitemap. Check crawl errors. Request indexing."));

  items.push(checklistItem("Bing Webmaster Tools configured", "NICE TO HAVE"));
  items.push(subItem("Why", "Schools often use Edge (defaults to Bing)."));
  items.push(subItem("Verify", "Import from Search Console. Submit sitemap."));

  items.push(checklistItem("Page speed optimized", "IMPORTANT"));
  items.push(subItem("Why", "Direct Google ranking factor."));
  items.push(subItem("Verify", "Images in WebP/AVIF, JS code-split, fonts preloaded."));

  items.push(checklistItem("Internal linking strategy in place", "NICE TO HAVE"));
  items.push(subItem("Why", "Distributes page authority and helps discovery."));
  items.push(subItem("Verify", "Landing page links to key pages. Breadcrumbs on nested pages. No orphan pages."));

  items.push(divider());
  return items;
}

function buildPreLaunchSequence() {
  const items = [];
  items.push(heading1("Pre-Launch Day Sequence"));

  // 3 Days Before
  items.push(heading2("3 Days Before Launch"));
  items.push(timelineCheckbox("Final content freeze"));
  items.push(timelineCheckbox("Full regression test of signup \u2192 trial \u2192 lesson \u2192 payment flow"));
  items.push(timelineCheckbox("Email launch announcement scheduled"));
  items.push(timelineCheckbox("Social media posts drafted and scheduled"));
  items.push(timelineCheckbox("Confirm team knows incident response plan"));

  // 1 Day Before
  items.push(heading2("1 Day Before Launch"));
  items.push(timelineCheckbox("Switch Stripe to live keys (if not already)"));
  items.push(timelineCheckbox("Verify all environment variables one final time"));
  items.push(timelineCheckbox("Run smoke tests against production"));
  items.push(timelineCheckbox("Confirm monitoring and alerting active"));
  items.push(timelineCheckbox("Confirm backup ran in last 24 hours"));

  // Launch Day
  items.push(heading2("Launch Day"));
  items.push(timelineCheckbox("Deploy final production build"));
  items.push(timelineCheckbox("Run smoke test: signup, login, access content, start trial"));
  items.push(timelineCheckbox("Make a real purchase with your own card"));
  items.push(timelineCheckbox("Send launch email"));
  items.push(timelineCheckbox("Publish social media announcements"));
  items.push(timelineCheckbox("Monitor Sentry, analytics, uptime for first 4 hours"));
  items.push(timelineCheckbox("Respond to support queries within 1 hour"));

  // 1 Day After
  items.push(heading2("1 Day After Launch"));
  items.push(timelineCheckbox("Review Sentry for new errors"));
  items.push(timelineCheckbox("Check Stripe for payments and failures"));
  items.push(timelineCheckbox("Review analytics: traffic, signups, trial starts"));
  items.push(timelineCheckbox("Address user-reported issues"));
  items.push(timelineCheckbox("Celebrate!"));

  items.push(divider());
  return items;
}

function buildSummaryTable() {
  const items = [];
  items.push(heading1("Summary by Priority"));

  const headerRow = new TableRow({
    tableHeader: true,
    children: ["Priority", "Count", "Guideline"].map(text =>
      new TableCell({
        borders,
        shading: { fill: TABLE_HEADER, type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 20, bold: true, color: "FFFFFF" })] })],
      })
    ),
  });

  const data = [
    ["CRITICAL", "24", "Must be complete before accepting payments"],
    ["IMPORTANT", "22", "Complete before launch or within first 48 hours"],
    ["NICE TO HAVE", "6", "Target for Week 1\u20132 post-launch"],
  ];

  const dataRows = data.map((row, i) =>
    new TableRow({
      children: row.map((cell, j) => {
        const runs = [];
        if (j === 0) {
          runs.push(new TextRun({ text: cell, font: "Arial", size: 20, bold: true, color: PRIORITY_COLORS[cell] || "000000" }));
        } else {
          runs.push(new TextRun({ text: cell, font: "Arial", size: 20 }));
        }
        return new TableCell({
          borders,
          shading: i % 2 ? { fill: TABLE_ALT, type: ShadingType.CLEAR } : undefined,
          margins: cellMargins,
          children: [new Paragraph({ children: runs })],
        });
      }),
    })
  );

  items.push(new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2200, 1200, 5960],
    rows: [headerRow, ...dataRows],
  }));

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
            children: [new TextRun({ text: "The English Hub \u2014 Pre-Launch Checklist", font: "Arial", size: 16, color: ACCENT_GREY, italics: true })],
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
        // ── Title page ──
        new Paragraph({ spacing: { before: 2400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "The English Hub", bold: true, font: "Arial", size: 48, color: BRAND_BLUE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Pre-Launch Checklist", font: "Arial", size: 32, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_BLUE, space: 8 } },
          children: [new TextRun({ text: "52 Items Across 7 Sections", font: "Arial", size: 22, color: ACCENT_GREY, italics: true })],
        }),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          children: [new TextRun({ text: "Next.js (Vercel) + Express (Azure App Service) + PostgreSQL (Azure) + Supabase Auth + Stripe + Rewardful", font: "Arial", size: 18, italics: true, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          children: [new TextRun({ text: "Pricing: \u00A39.99/mo  |  \u00A379.99/yr  |  30-day free trial", font: "Arial", size: 18, color: ACCENT_GREY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Date Created: 22 March 2026", font: "Arial", size: 18, color: ACCENT_GREY })],
        }),

        // ── Priority legend ──
        new Paragraph({ spacing: { before: 400, after: 120 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Priority Legend", font: "Arial", size: 22, bold: true, color: BRAND_BLUE })] }),
        richPara([
          { text: "CRITICAL", bold: true, color: PRIORITY_COLORS.CRITICAL },
          { text: " \u2014 Blocks launch. Do not go live without this.    " },
          { text: "IMPORTANT", bold: true, color: PRIORITY_COLORS.IMPORTANT },
          { text: " \u2014 Should have at launch.    " },
          { text: "NICE TO HAVE", bold: true, color: PRIORITY_COLORS["NICE TO HAVE"] },
          { text: " \u2014 Can follow up in Week 1\u20132." },
        ], { alignment: AlignmentType.CENTER }),

        // ── Sections ──
        new Paragraph({ children: [new PageBreak()] }),
        ...buildSection1(),
        ...buildSection2(),
        ...buildSection3(),
        ...buildSection4(),
        ...buildSection5(),
        ...buildSection6(),
        ...buildSection7(),
        ...buildPreLaunchSequence(),
        ...buildSummaryTable(),
      ],
    }],
  });

  const outDir = "D:/Coding/english-hub/docs";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, "Launch_Checklist.docx");
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buffer);
  console.log(`Created: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch(console.error);
