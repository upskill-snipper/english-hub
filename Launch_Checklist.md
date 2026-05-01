# The English Hub — Pre-Launch Checklist

**Platform:** Next.js (Vercel) + Express (Azure App Service) + PostgreSQL (Azure) + Supabase Auth + Stripe + Rewardful
**Pricing:** £9.99/mo | £79.99/yr | 7-day free trial
**Date Created:** 2026-03-22

---

## How to Use This Checklist

Each item is tagged with a priority level:

- **CRITICAL** — Blocks launch. Do not go live without this.
- **IMPORTANT** — Should have at launch. Causes real problems if missing.
- **NICE TO HAVE** — Can follow up in Week 1–2 post-launch.

---

## 1. Technical Readiness

### Infrastructure & Security

- [ ] **All API endpoints tested and working** — CRITICAL
  - **Why:** Broken endpoints mean broken features for paying customers.
  - **Verify:** Run your full Postman/Newman collection against the production Azure App Service URL. Every endpoint should return expected status codes.

- [ ] **SSL certificates valid on all domains** — CRITICAL
  - **Why:** Browsers will block the site without valid HTTPS. Stripe requires it.
  - **Verify:** Visit every domain/subdomain and confirm the padlock icon. Run `curl -vI https://yourdomain.com` and check certificate expiry.

- [ ] **Error monitoring (Sentry) configured for both frontend and backend** — CRITICAL
  - **Why:** Without this you will not know when things break. Users will churn silently.
  - **Verify:** Throw a deliberate test error in both the Next.js app and the Express API. Confirm both appear in Sentry with correct source maps and environment tags.

- [ ] **Database backups scheduled** — CRITICAL
  - **Why:** Data loss is catastrophic and unrecoverable without backups.
  - **Verify:** In Azure Portal, navigate to PostgreSQL > Backups. Confirm automated backups with at least 7-day retention. Perform a test restore.

- [ ] **Rate limiting active on all public API routes** — CRITICAL
  - **Why:** Without rate limiting, a single bad actor can bring down your API or run up your Azure bill.
  - **Verify:** Send 200 rapid requests to login/signup endpoints. Confirm 429 responses after threshold.

- [ ] **CORS configured for production domain only** — CRITICAL
  - **Why:** Misconfigured CORS either blocks your frontend or allows any origin to call your API.
  - **Verify:** From production domain, make a fetch request — it should succeed. From a different domain, confirm rejection.

- [ ] **All environment variables verified in production** — CRITICAL
  - **Why:** A single missing env var can cause silent failures or route payments to the wrong account.
  - **Verify:** Go through each one manually in Vercel and Azure App Service. Confirm no values point to localhost or test keys.

- [ ] **Load testing performed** — IMPORTANT
  - **Why:** You need to know your breaking point before real users find it.
  - **Verify:** Simulate 100–500 concurrent users. Monitor Azure metrics. Document capacity ceiling.

### Frontend Quality

- [ ] **Mobile responsiveness verified on real devices** — CRITICAL
  - **Why:** The majority of student users will access this on phones.
  - **Verify:** Test on iPhone (Safari), Android (Chrome), iPad. Check every page.

- [ ] **Browser compatibility (Chrome, Safari, Firefox, Edge)** — IMPORTANT
  - **Why:** Safari handles things differently. Edge is common in schools.
  - **Verify:** Walk through the critical user journey on each browser.

- [ ] **PWA manifest and icons configured** — NICE TO HAVE
  - **Why:** Allows users to "install" the app on their home screen.
  - **Verify:** Run Lighthouse PWA audit. Test "Add to Home Screen" on Android.

- [ ] **Sitemap.xml and robots.txt deployed** — IMPORTANT
  - **Why:** Without these, Google may not index your public pages.
  - **Verify:** Visit `/sitemap.xml` and `/robots.txt`. Submit sitemap in Search Console.

- [ ] **Open Graph images for social sharing** — IMPORTANT
  - **Why:** Missing preview images kill click-through when shared.
  - **Verify:** Paste URL into Facebook Sharing Debugger, Twitter Card Validator.

- [ ] **404 and error pages styled and helpful** — IMPORTANT
  - **Why:** Default error pages look broken and unprofessional.
  - **Verify:** Visit a nonsense URL. Confirm branded 404 page with navigation.

- [ ] **Core Web Vitals passing** — IMPORTANT
  - **Why:** Google ranking signal. Slow pages kill conversions.
  - **Verify:** Run PageSpeed Insights. Target: LCP < 2.5s, INP < 200ms, CLS < 0.1.

---

## 2. Payment & Billing

- [ ] **Stripe live mode keys configured** — CRITICAL
  - **Why:** Test mode keys mean no real payments are processed.
  - **Verify:** Confirm `STRIPE_SECRET_KEY` starts with `sk_live_` and publishable key with `pk_live_`.

- [ ] **All Stripe webhook events registered and handled** — CRITICAL
  - **Why:** Webhooks are how Stripe tells your system about payments, cancellations, and failures.
  - **Verify:** Minimum events: `checkout.session.completed`, `customer.subscription.created/updated/deleted`, `invoice.payment_succeeded/failed`, `customer.subscription.trial_will_end`.

- [ ] **Test a real purchase flow end-to-end** — CRITICAL
  - **Why:** This is how you make money. If this is broken, nothing else matters.
  - **Verify:** Using a real card, complete: sign up → start trial → payment → confirm subscription active. Refund yourself after.

- [ ] **Subscription upgrade and downgrade works** — IMPORTANT
  - **Why:** Users will want to switch plans.
  - **Verify:** Subscribe monthly, upgrade to annual. Confirm proration. Then downgrade.

- [ ] **Cancellation flow works correctly** — CRITICAL
  - **Why:** A broken cancellation flow violates consumer rights and generates chargebacks.
  - **Verify:** Cancel a subscription. Confirm access retained until period end. Stripe shows `cancel_at_period_end`.

- [ ] **7-day trial period configured correctly** — CRITICAL
  - **Why:** This is your conversion funnel.
  - **Verify:** Confirm `trial_period_days: 7` (sourced from `PRICING.TRIAL_DAYS`) in Stripe. Create new account, verify no payment taken and correct end date.

- [ ] **Invoices and receipts sent automatically** — IMPORTANT
  - **Why:** Customers expect receipts. Required for tax purposes.
  - **Verify:** Enable receipt emails in Stripe Settings. Make a test payment and confirm receipt arrives.

- [ ] **Failed payment retry logic configured** — IMPORTANT
  - **Why:** Cards fail for innocent reasons. Without retries, you lose paying customers.
  - **Verify:** Configure Smart Retries in Stripe. Set up dunning emails.

- [ ] **Stripe Customer Portal accessible** — IMPORTANT
  - **Why:** Lets users update payment method and manage subscription.
  - **Verify:** Configure Customer Portal in Stripe. Add "Manage Billing" button in settings page.

- [ ] **VAT / tax handling** — IMPORTANT
  - **Why:** UK businesses must charge VAT once above threshold.
  - **Verify:** Determine VAT status. If registered, enable Stripe Tax. Track revenue toward £90,000 threshold.

---

## 3. Legal & Compliance

- [ ] **Terms of Service published and linked** — CRITICAL
  - **Why:** Without ToS, you have no legal agreement with users.
  - **Verify:** Published at `/terms`. Linked in footer and shown during signup. Have a solicitor review.

- [ ] **Privacy Policy published (GDPR compliant)** — CRITICAL
  - **Why:** UK GDPR requires this. Fines up to £17.5 million.
  - **Verify:** Published at `/privacy`. Includes: data collected, lawful basis, third parties, retention, user rights, ICO registration number.

- [ ] **Cookie Policy and consent banner implemented** — CRITICAL
  - **Why:** UK PECR requires consent before setting non-essential cookies.
  - **Verify:** Visit site incognito. Banner appears before any analytics cookies set.

- [ ] **Refund Policy published** — CRITICAL
  - **Why:** UK Consumer Contracts Regulations give 14-day cooling-off period.
  - **Verify:** Published at `/refund-policy`. Linked from footer, pricing, and checkout.

- [ ] **Age verification / parental consent for under-16s** — CRITICAL
  - **Why:** UK GDPR digital consent age is 13. Children's Code applies to under-18s.
  - **Verify:** Signup asks for age. Under-13s blocked. Age-appropriate privacy notices for 13-17.

- [ ] **Data Processing Agreements with all sub-processors** — IMPORTANT
  - **Why:** GDPR requires written agreements with anyone processing data on your behalf.
  - **Verify:** DPAs from Supabase, Stripe, Azure, Vercel, Sentry, email provider.

- [ ] **Accessibility statement published** — IMPORTANT
  - **Why:** Equality Act 2010 applies. Schools will ask about this.
  - **Verify:** Published at `/accessibility`. Lighthouse score 90+. Keyboard navigation works.

- [ ] **ICO registration (UK data protection)** — CRITICAL
  - **Why:** Processing personal data requires ICO registration. Failure is a criminal offence.
  - **Verify:** Register at ico.org.uk. Fee: £40-52/year. Add registration number to privacy policy.

- [ ] **Company registration and business details visible** — IMPORTANT
  - **Why:** UK regulations require business information on your website.
  - **Verify:** Footer includes: legal business name, company number (if Ltd), address, contact email.

---

## 4. Content & Quality

- [ ] **All course content reviewed for accuracy** — CRITICAL
  - **Why:** Inaccurate educational content destroys credibility.
  - **Verify:** Subject matter expert reviews every lesson, quiz, and explanation. Sign-off sheet per module.

- [ ] **No exam board copyright violations** — CRITICAL
  - **Why:** AQA, Edexcel, OCR, WJEC aggressively protect IP. Legal action for reproduction.
  - **Verify:** Audit all content for direct reproduction of past papers, mark schemes. Use original "in the style of" questions.

- [ ] **Spelling and grammar checked across all pages** — IMPORTANT
  - **Why:** You are selling an English language product. Errors destroy credibility.
  - **Verify:** Run every page through Grammarly/LanguageTool. Human proofread all public copy.

- [ ] **All internal links working** — IMPORTANT
  - **Why:** Broken links frustrate users and hurt SEO.
  - **Verify:** Use a link checker tool to crawl entire site. Fix all 404s.

- [ ] **Images optimized and loading** — IMPORTANT
  - **Why:** Unoptimized images slow page loads.
  - **Verify:** All images use Next.js `<Image>`. No 404s. Landing page under 2MB total.

- [ ] **Empty states handled gracefully** — IMPORTANT
  - **Why:** New users see empty dashboards. Without proper empty states, app looks broken.
  - **Verify:** Create fresh account, navigate every section. Helpful messages and CTAs everywhere.

---

## 5. Marketing & Launch

- [ ] **Landing page optimized for conversion** — CRITICAL
  - **Why:** This is your front door.
  - **Verify:** Clearly answers: What? Who? Why? How much? CTA visible above fold. Under 3s load time.

- [ ] **Social media accounts created and branded** — IMPORTANT
  - **Why:** Establishes legitimacy. Parents and teachers will search for you.
  - **Verify:** Twitter/X, Instagram, LinkedIn, TikTok. Consistent branding. At least a few posts.

- [ ] **Email list / waitlist ready** — IMPORTANT
  - **Why:** Warmest leads convert on launch day.
  - **Verify:** Email platform configured. Launch email drafted. Sender domain authenticated (SPF, DKIM, DMARC).

- [ ] **Analytics configured (GA4 + Vercel Analytics)** — CRITICAL
  - **Why:** Without analytics, you are flying blind.
  - **Verify:** GA4 tracking code installed (respecting consent). Key events tracked: signup, trial start, payment.

- [ ] **UTM tracking set up** — IMPORTANT
  - **Why:** Need to know which channels drive signups.
  - **Verify:** UTM convention document. All marketing links use UTMs. Parameters appear in GA4.

- [ ] **Rewardful affiliate program configured and tested** — IMPORTANT
  - **Why:** Broken affiliate system means affiliates don't get paid and stop promoting.
  - **Verify:** Connected to Stripe live. Test affiliate → referral link → purchase → commission tracked.

- [ ] **Launch announcement drafted and scheduled** — NICE TO HAVE
  - **Why:** Coordinated launch maximizes initial impact.
  - **Verify:** Blog post, social posts, email blast prepared and scheduled.

- [ ] **Press kit / media assets ready** — NICE TO HAVE
  - **Why:** Easy coverage for journalists and bloggers.
  - **Verify:** Logo (SVG, PNG), brand colours, description, key stats, contact details.

---

## 6. Support & Operations

- [ ] **Contact form working and delivering emails** — CRITICAL
  - **Why:** If users cannot reach you, they churn.
  - **Verify:** Submit form. Confirm email arrives. Success message shown.

- [ ] **Support email set up and monitored** — CRITICAL
  - **Why:** Users will email directly. Stripe sends dispute notifications.
  - **Verify:** support@theenglishhub.app configured and monitored daily.

- [ ] **FAQ page covers common questions** — IMPORTANT
  - **Why:** Reduces support burden.
  - **Verify:** Covers: free trial, cancellation, exam boards, refunds, data safety, password reset, school discounts.

- [ ] **Onboarding flow guides new users** — IMPORTANT
  - **Why:** Users who don't understand the product in 5 minutes leave forever.
  - **Verify:** Sign up as new user. First "aha moment" within 2-3 minutes.

- [ ] **Admin dashboard for user management** — IMPORTANT
  - **Why:** Handle support issues without SQL queries.
  - **Verify:** View all users, search by email, see subscription status, manage accounts.

- [ ] **Monitoring and alerting configured** — CRITICAL
  - **Why:** Know immediately when site goes down.
  - **Verify:** Uptime monitoring on frontend + API health. SMS/push alerts. Sentry error rate alerts. Azure CPU/memory alerts.

- [ ] **Incident response plan documented** — NICE TO HAVE
  - **Why:** Written plan prevents mistakes during panic.
  - **Verify:** Document: check if down, access logs, rollback deploys, maintenance page, contacts.

- [ ] **Backup and recovery tested** — CRITICAL
  - **Why:** Untested backups are just hopes.
  - **Verify:** Full PostgreSQL restore from Azure backup. Confirm data intact. Document procedure.

---

## 7. SEO

- [ ] **Meta titles and descriptions on all public pages** — IMPORTANT
  - **Why:** These appear in Google search results.
  - **Verify:** Every public page has unique title (50-60 chars) and description (120-160 chars).

- [ ] **JSON-LD structured data implemented** — IMPORTANT
  - **Why:** Enables rich results in Google.
  - **Verify:** Organization, Product, FAQPage schemas. Validate with Rich Results Test.

- [ ] **Google Search Console verified and sitemap submitted** — CRITICAL
  - **Why:** How you know if Google can find your site.
  - **Verify:** Verify ownership. Submit sitemap. Check crawl errors. Request indexing.

- [ ] **Bing Webmaster Tools configured** — NICE TO HAVE
  - **Why:** Schools often use Edge (defaults to Bing).
  - **Verify:** Import from Search Console. Submit sitemap.

- [ ] **Page speed optimized** — IMPORTANT
  - **Why:** Direct Google ranking factor.
  - **Verify:** Images in WebP/AVIF, JS code-split, fonts preloaded.

- [ ] **Internal linking strategy in place** — NICE TO HAVE
  - **Why:** Distributes page authority and helps discovery.
  - **Verify:** Landing page links to key pages. Breadcrumbs on nested pages. No orphan pages.

---

## Pre-Launch Day Sequence

### 3 Days Before Launch

- [ ] Final content freeze
- [ ] Full regression test of signup → trial → lesson → payment flow
- [ ] Email launch announcement scheduled
- [ ] Social media posts drafted and scheduled
- [ ] Confirm team knows incident response plan

### 1 Day Before Launch

- [ ] Switch Stripe to live keys (if not already)
- [ ] Verify all environment variables one final time
- [ ] Run smoke tests against production
- [ ] Confirm monitoring and alerting active
- [ ] Confirm backup ran in last 24 hours

### Launch Day

- [ ] Deploy final production build
- [ ] Run smoke test: signup, login, access content, start trial
- [ ] Make a real purchase with your own card
- [ ] Send launch email
- [ ] Publish social media announcements
- [ ] Monitor Sentry, analytics, uptime for first 4 hours
- [ ] Respond to support queries within 1 hour

### 1 Day After Launch

- [ ] Review Sentry for new errors
- [ ] Check Stripe for payments and failures
- [ ] Review analytics: traffic, signups, trial starts
- [ ] Address user-reported issues
- [ ] Celebrate 🎉

---

## Summary by Priority

| Priority         | Count | Guideline                                       |
| ---------------- | ----- | ----------------------------------------------- |
| **CRITICAL**     | 24    | Must be complete before accepting payments      |
| **IMPORTANT**    | 22    | Complete before launch or within first 48 hours |
| **NICE TO HAVE** | 6     | Target for Week 1–2 post-launch                 |
