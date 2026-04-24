# The English Hub — Completion Checklist

**Everything outstanding, with direct links and Claude-for-Chrome prompts.**

Sorted by priority × leverage. Most items under 15 minutes. Full execution = ~4 hours your time + £590 hard spend.

How to use the Claude prompts: install [Claude for Chrome](https://claude.ai/chrome) (or use claude.ai in a second tab), open the target page first, then paste the prompt. Claude sees the page and walks you through each field.

---

## 🔴 TIER 1 — Today (45 min, £0)

These three unlock everything else downstream.

### 1.1 · Run the Supabase migration for Trustpilot dedup table

**Time:** 2 min · **Cost:** £0 · **Unlocks:** Trustpilot audit trail starts recording

**Link:** https://supabase.com/dashboard/project/_/sql/new

**What to do:** Open your Supabase project → SQL Editor → New query → paste the SQL below → Run.

**SQL to paste** (from `supabase/migrations/20260419_trustpilot_invites.sql`):

```sql
create table if not exists public.trustpilot_invite (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trigger text not null check (
    trigger in (
      'student_first_mark',
      'student_first_mark_followup_7d',
      'student_first_mock',
      'student_90d_retention',
      'teacher_first_bulk_mark',
      'parent_30d_dashboard'
    )
  ),
  status text not null default 'sent' check (status in ('sent', 'skipped', 'failed')),
  sent_at timestamptz not null default now(),
  message_id text,
  error text,
  skipped_reason text,
  unique (user_id, trigger)
);

create index if not exists trustpilot_invite_user_idx on public.trustpilot_invite(user_id);
create index if not exists trustpilot_invite_trigger_idx on public.trustpilot_invite(trigger);
create index if not exists trustpilot_invite_sent_at_idx on public.trustpilot_invite(sent_at desc);

alter table public.trustpilot_invite enable row level security;

create policy "service role manages trustpilot_invite"
  on public.trustpilot_invite
  for all
  to service_role
  using (true)
  with check (true);
```

**Claude prompt** (if the SQL errors):

> I just ran this Supabase migration and got the error shown on screen. Help me diagnose what's wrong. The migration creates a `trustpilot_invite` table. Show me the exact fix — I'll paste it back into the SQL editor.

---

### 1.2 · Set `CRON_SECRET` in Vercel

**Time:** 3 min · **Cost:** £0 · **Unlocks:** ALL Vercel cron jobs including the two new Trustpilot crons

**Link:** https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables

**What to do:**

1. Click **"Add Another"**
2. Key: `CRON_SECRET`
3. Value: a long random string — generate one at https://1password.com/password-generator/ (64 chars, letters + digits, no symbols)
4. Environments: **Production only** (leave Preview + Development unchecked)
5. Save

**Claude prompt:**

> I'm on the Vercel env vars page for my project `english-hub`. I need to add `CRON_SECRET` as a Production-only secret with a 64-character random value. Walk me through clicking the right buttons. The value field accepts any string — I want to use the strongest random string possible.

**Then redeploy** — Vercel env var changes don't apply to existing deployments. Trigger a redeploy from the Deployments tab → latest deploy → three dots → **Redeploy**.

---

### 1.3 · Cloudflare Email Routing (8 aliases)

**Status: Complete 2026-04-21** — all 8 aliases live and forwarding to `info@upskillenergy.com`.

**Time:** 15 min · **Cost:** £0 · **Unlocks:** `dpo@`, `security@`, `legal@`, `reviews@`, `privacy@`, `safeguarding@`, `accessibility@`, `press@` all working

**Full walkthrough:** [`business-docs/CLOUDFLARE-EMAIL-SETUP.md`](./CLOUDFLARE-EMAIL-SETUP.md)

**Key links:**
- Cloudflare signup: https://dash.cloudflare.com/sign-up
- Namecheap domain panel: https://ap.www.namecheap.com/domains/list (find `theenglishhub.app` → Manage → Nameservers)

**Aliases (all forward to `info@upskillenergy.com`):**

| Alias | Purpose |
|---|---|
| `dpo@theenglishhub.app` | Data Protection Officer / ICO correspondence |
| `security@theenglishhub.app` | Cyber Essentials / security issues |
| `legal@theenglishhub.app` | UKIPO / contracts / legal |
| `privacy@theenglishhub.app` | GDPR data-subject rights |
| `safeguarding@theenglishhub.app` | KCSIE / child-safety reports |
| `reviews@theenglishhub.app` | Trustpilot invitations from |
| `accessibility@theenglishhub.app` | WCAG / a11y feedback |
| `press@theenglishhub.app` | Media enquiries |

**Claude prompt (while on Cloudflare dashboard):**

> I'm setting up Cloudflare Email Routing for `theenglishhub.app`. My current DNS is on Namecheap. I want these 8 aliases all forwarding to `info@upskillenergy.com`: dpo, security, legal, privacy, safeguarding, reviews, accessibility, press. Walk me through exactly what to click — I'm on [whatever screen I'm on]. Also enable the catch-all.

---

## 🟠 TIER 2 — This week (90 min total, £590)

### 2.1 · File Cyber Essentials certification

**Time:** 20 min + 2–3 hr self-assessment · **Cost:** £320 · **Unlocks:** £150k–£300k valuation (school procurement)

**Link:** https://iasme.co.uk/cyber-essentials/apply-for-cyber-essentials/

**Pre-filled answers:** [`business-docs/compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md`](./compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md)

**Authoritative values (paste exactly):**
- Legal name: **Upskill Energy Limited**
- Companies House: **16511479**
- Registered office: **110 Harington Road, Formby, Liverpool, L37 1PZ**
- Security contact: **security@theenglishhub.app** (create via Cloudflare Routing first — step 1.3)
- Sector: **Education**
- Size: **Micro (< 10 employees, < £632k turnover)**

**Claude prompt (while on IASME SAQ form):**

> I'm filling in the Cyber Essentials IASME self-assessment questionnaire for Upskill Energy Limited (Co. 16511479, trading as The English Hub). I have all my pre-filled answers in a markdown file I'll paste. For each question, tell me which pre-filled answer matches and confirm I'm answering consistently. My tech stack: Next.js on Vercel + Supabase + Stripe + Anthropic/OpenAI APIs + Cloudflare DNS + SendGrid + Sentry + PostHog + GitHub. Windows 11 laptop + iPhone + home router.

---

### 2.2 · File UKIPO trademark "THE ENGLISH HUB"

**Time:** 45 min + 5-min clearance search first · **Cost:** £270 · **Unlocks:** £30k de-risk

**Clearance search first:** https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1?searchTerm=the+english+hub (screenshot results — should be clean)

**Filing link:** https://www.gov.uk/how-to-register-a-trade-mark → click "Start now"

**Pre-filled application:** [`data-room/02-legal/ukipo-trademark-application-prefilled.md`](../data-room/02-legal/ukipo-trademark-application-prefilled.md)

**Authoritative values:**
- Applicant: **Upskill Energy Limited**, Co. **16511479**
- Address: **110 Harington Road, Formby, Liverpool, L37 1PZ**
- Mark: **THE ENGLISH HUB** (word mark, standard characters)
- Classes: **9, 41, 42** (software · education · SaaS)
- Email for correspondence: **legal@theenglishhub.app**

**Claude prompt (on UKIPO "Apply for a trade mark" form):**

> I'm filing a UK trademark for "THE ENGLISH HUB" as a word mark, owned by Upskill Energy Limited (Co. 16511479). Classes 9, 41, 42. I have pre-filled specifications for each class in a markdown file I'll paste. For each field on the UKIPO form, tell me exactly which pre-filled value to paste. My registered address is 110 Harington Road, Formby, Liverpool, L37 1PZ. Total fee should be £270.

---

### 2.3 · Send ICO address-change email

**Time:** 5 min · **Cost:** £0 · **Unlocks:** ICO + Companies House address alignment (claim-time risk mitigation)

**Preferred route (faster):** https://ico.org.uk/make-a-change/ (online form)

**Email backup route:**
- **To:** `casework@ico.org.uk`
- **CC:** `mail@ico.org.uk`
- **Subject:** `Change of registered address — Upskill Energy Limited — ICO ref ZC016690`

**Pre-drafted email:** [`business-docs/address-correction-emails.md`](./address-correction-emails.md) § Email 1

**Authoritative values:**
- ICO reference: **ZC016690**
- Companies House: **16511479**
- Current (correct) address: **110 Harington Road, Formby, Liverpool, L37 1PZ**
- Previous (to replace): **8 Lindford Drive, Norwich, NR4 6LT**

**Claude prompt (while composing the email or on the ICO form):**

> I need to update the registered address on my ICO data protection record. ICO reference ZC016690, Upskill Energy Limited (Co. 16511479), trading as The English Hub. Previous address on ICO: 8 Lindford Drive, Norwich, NR4 6LT. New address (matches Companies House): 110 Harington Road, Formby, Liverpool, L37 1PZ. Also want to confirm processing purposes cover online EdTech + AI-assisted essay feedback + students aged 14+ + international transfers to US sub-processors. Draft me the exact email body or fill in the ICO form fields I'm looking at.

---

### 2.4 · Call AXA about PII profession description

**Time:** 15 min · **Cost:** £0 · **Unlocks:** PII claim-denial protection

**Phone:** **0330 024 1272** (AXA Commercial Lines, Mon–Fri 09:00–17:00)

**Email fallback:** `commercial.customerservice@axa-insurance.co.uk`

**Policy details to quote:**
- Policy number: **550.295.859**
- Named insured: **Upskill Energy** (update to **Upskill Energy Limited** at renewal)
- Current profession on record: **Training consultancy**
- Policy dates: **15 Nov 2025 – 14 Nov 2026**

**Requested change:** Update profession to:

> *"Online educational technology platform providing GCSE and IGCSE English revision and AI-assisted essay feedback. Subscription SaaS. Users include students aged 14+, teachers, parents, and schools. Trading as The English Hub (theenglishhub.app)."*

**Also ask:** quote for upgrading £500k limit to £1m and £2m at renewal.

**Pre-drafted email:** [`business-docs/address-correction-emails.md`](./address-correction-emails.md) § Email 2

**Claude prompt (if they push back):**

> I'm on the phone with AXA about my PII policy 550.295.859 for Upskill Energy Limited. They have "Training consultancy" as my profession but I trade as The English Hub, an AI-EdTech SaaS for children aged 14+. The underwriter seems hesitant. Help me explain why this is a reasonable midterm adjustment: (1) same business activity economically, (2) clearer description of actual operations, (3) non-disclosure risk if left as-is. Also prep me for likely pushback and what counter to give.

---

## 🟡 TIER 3 — This month (varies, unlocks Trustpilot + testimonials)

### 3.1 · SendGrid domain authentication for theenglishhub.app

**Time:** 10 min · **Cost:** £0 (free tier) · **Requires:** Cloudflare Email Routing done first (step 1.3)

**Link:** https://app.sendgrid.com/settings/sender_auth (log into your existing SendGrid account — you already have `SENDGRID_API_KEY` per the env check)

**What to do:**

1. **Authenticate Your Domain** → Choose `theenglishhub.app`
2. SendGrid generates 3 CNAME records → paste those into Cloudflare DNS (now that nameservers are Cloudflare)
3. Click Verify

**Claude prompt (on SendGrid sender auth wizard):**

> I'm setting up domain authentication in SendGrid for `theenglishhub.app`. My DNS is on Cloudflare (just migrated from Namecheap). SendGrid is asking me to add 3 CNAME records. I'll paste the values SendGrid gives me — walk me through adding them to Cloudflare DNS without breaking my existing email routing MX records.

---

### 3.2 · Claim Trustpilot Business profile

**Status: Complete 2026-04-21.** Profile claimed; BCC-invite email live at `theenglishhub.app+45777e1d0c@invite.trustpilot.com` (stored in `TRUSTPILOT_INVITE_EMAIL`); InviteJS integration key `v5nUhdVBgegtcCLG` (stored in `NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY`); Business Unit ID `69e9a869c2bb1d03a6752578` (stored in `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` web + `EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` mobile EAS secret). Verification ID pending.

**Time:** 10 min · **Cost:** £0 (free tier) · **Unlocks:** Trustpilot rating on site + Google review rich snippets

**Link:** https://business.trustpilot.com/signup

**What to do:**

1. Sign up with `reviews@theenglishhub.app` (now live via Cloudflare Routing)
2. Claim the profile for `theenglishhub.app`
3. Admin panel → **Settings → Company Info** → copy the **Business Unit ID**

**Claude prompt:**

> I'm claiming the Trustpilot Business profile for `theenglishhub.app` at business.trustpilot.com. I want to (1) find my Business Unit ID, (2) set up the BGL invitation link template (not the paid AFS — free tier only), (3) configure the company info (name: The English Hub, entity: Upskill Energy Limited, Co. 16511479, based in UK). Walk me through the admin panel.

---

### 3.3 · Switch on Trustpilot in Vercel

**Status: Complete 2026-04-21** — env vars captured in `.env.example` with real values; production Vercel values populated from the same source.

**Time:** 5 min · **Cost:** £0 · **Unlocks:** Review invitations start sending

**Link:** https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables

**Env vars to set (all Production):**

| Key | Value |
|---|---|
| `TRUSTPILOT_ENABLED` | `true` |
| `TRUSTPILOT_BUSINESS_UNIT_ID` | `<from Trustpilot admin, step 3.2>` |
| `TRUSTPILOT_API_KEY` | `<leave blank for free tier>` |
| `SENDGRID_SANDBOX` | `false` |

After saving, redeploy. First scheduled run: 03:45 UTC tomorrow.

**Claude prompt:**

> I'm setting Trustpilot env vars in Vercel for my production environment. `TRUSTPILOT_ENABLED=true`, `TRUSTPILOT_BUSINESS_UNIT_ID=<value>`, `SENDGRID_SANDBOX=false`. Walk me through adding each one via the Vercel env vars UI. Only Production — I want Preview and Development to stay disabled so preview deployments never send real emails.

---

### 3.4 · Cyber insurance — 3 quotes

**Time:** 15 min · **Cost:** £300–£800/yr (once bound) · **Unlocks:** School procurement DPIA checkmark

**Parallel links:**
- **Hiscox** — https://www.hiscox.co.uk/business-insurance/cyber-insurance (online quote in 10 min)
- **CFC Underwriting** — https://www.cfcunderwriting.com/en-gb/products/cyber/ (broker-placed only — email `enquiries@cfcunderwriting.com`)
- **Markel** — https://www.markel.com/uk/business-insurance/cyber-data (email `newbusiness@markeluk.com`)

**Pre-drafted email:** [`business-docs/address-correction-emails.md`](./address-correction-emails.md) § Email 3

**Quote parameters:**
- Limit: **£250,000 and £500,000 each claim** (quote both)
- Retroactive date: **15 November 2025** (align with PII)
- Excess: **£500–£2,500**

**Claude prompt (on Hiscox quote form):**

> I'm requesting a cyber insurance quote on Hiscox for Upskill Energy Limited, Co. 16511479, trading as The English Hub. Online EdTech SaaS for GCSE English, serving students aged 14+, UK-only. Turnover <£50k currently, projecting <£500k Year 1. Sub-processors: Stripe, Anthropic, OpenAI, Supabase, Vercel, Cloudflare, SendGrid, Sentry, PostHog, GitHub. I want quotes at £250k and £500k limits. Walk me through each field and tell me which answer to pick for an EdTech SaaS of my profile.

---

## 🟢 TIER 4 — Nice-to-have (unlocks Breakout path)

### 4.1 · Send me 5 advisor target names

**Time:** 20 min · **Cost:** £0 · **Unlocks:** £80k–£200k valuation (reduces founder-dependency discount)

**What I need from you** — 5 real people you want to approach for your Academic Advisory Board. For each:

| Field | Example |
|---|---|
| Full name | Dr Ruth Taylor |
| Role + school | Head of English, St Paul's School |
| The hook | Her Team English thread about AQA Paper 2 Q5 pedagogy, 14 Mar 2026 |
| Route | LinkedIn DM / work email / warm intro via [name] |

**Where to find candidates:**
- Team English hashtag on X: https://twitter.com/search?q=%23TeamEnglish
- EMC editorial board: https://www.englishandmedia.co.uk/about-us
- NATE committee: https://www.nate.org.uk/about-nate/
- PTI (Prince's Teaching Institute): https://www.princes-ti.org.uk/
- LinkedIn search: "Head of English" + "AQA" or "Edexcel"

Once you send me the 5 names + hooks, I'll return 5 bespoke 140-word emails + 7-day follow-ups, ready for you to paste from your Gmail account.

**Claude prompt (while searching Team English / LinkedIn):**

> I'm looking for 5 Heads of English or senior examiners to approach for an Academic Advisory Board at The English Hub. Criteria: (1) serving HoD or recent examiner at AQA/Edexcel/OCR/CIE; (2) published voice (Team English, PTI, NATE, book, Tes article, conference talk); (3) not already advising a competing platform; (4) UK-based. Help me find 10 names and filter down to the strongest 5 based on these criteria. For each, find me (a) full name, (b) current role + school, (c) a specific recent piece of their work I can cite as the hook, (d) how to reach them (LinkedIn handle / work email / mutual connection).

---

### 4.2 · Capture 3 named + photographed testimonials

**Time:** 2–3 weeks · **Cost:** £0–£500 (photos optional) · **Unlocks:** £100k–£250k valuation

**Consent form ready:** [`data-room/03-privacy/testimonial-consent-form.md`](../data-room/03-privacy/testimonial-consent-form.md)
**Photo release ready:** [`data-room/03-privacy/testimonial-photo-release.md`](../data-room/03-privacy/testimonial-photo-release.md)

**Target mix:**
- 1 Head of English at a real UK secondary (highest credibility)
- 1 teacher currently using the platform
- 3 students (consented parents if under 16)

**Claude prompt (for the outreach email):**

> Draft me an outreach email to a current English Hub user asking if they'd be willing to share a named, photographed testimonial for our homepage + /for-schools page. They'd need to fill in our GDPR consent form + photo release (linked in the email). In exchange, offer them a 3-month premium subscription extension and named recognition. 150 words, friendly + honest, British English.

---

### 4.3 · Register defensive domains

**Time:** 10 min · **Cost:** £30–£80/yr total

**Link:** https://www.namecheap.com/domains/registration/results/?domain=theenglishhub (you already use Namecheap)

**Domains to check + register if available:**
- `theenglishhub.co.uk` (UK SMB credibility)
- `theenglishhub.com` (if available)
- `the-english-hub.com` (typo-squat defence)
- `theenglish-hub.app` (typo-squat defence)

**Claude prompt:**

> I'm at Namecheap checking availability for defensive domain registrations for my brand "The English Hub". Already own `theenglishhub.app`. Want to acquire: `.co.uk`, `.com`, `the-english-hub.com`, `theenglish-hub.app`. Check availability for each, tell me which to prioritise buying based on SEO + typo-squat defence, and confirm total annual renewal cost.

---

## 📋 Master tracker

Mark each as you complete:

- [ ] 1.1 Supabase migration (2 min)
- [ ] 1.2 CRON_SECRET in Vercel (3 min)
- [x] 1.3 Cloudflare Email Routing — 8 aliases (completed 2026-04-21)
- [ ] 2.1 Cyber Essentials filed (£320, 20 min submit + self-assess)
- [ ] 2.2 UKIPO trademark filed (£270, 45 min)
- [ ] 2.3 ICO address update sent (5 min)
- [ ] 2.4 AXA profession updated (15 min call)
- [ ] 3.1 SendGrid domain auth (10 min, after 1.3)
- [x] 3.2 Trustpilot Business profile claimed (completed 2026-04-21; BCC invite, InviteJS key, Business Unit ID all captured)
- [x] 3.3 Trustpilot env vars + `TRUSTPILOT_ENABLED=true` (completed 2026-04-21)
- [ ] 3.4 Cyber insurance — 3 quotes requested (15 min)
- [ ] 4.1 Five advisor names sent to me (20 min)
- [ ] 4.2 First 3 testimonials captured (2–3 weeks)
- [ ] 4.3 Defensive domains registered (10 min)

**Hard spend to complete Tiers 1–3: £590 + £300–£800/yr cyber insurance**
**Valuation uplift once all done: +£400k–£900k vs v3 baseline**

---

## When you finish each item, tell me

Ping me with the relevant confirmation and I'll do the downstream codebase updates in one sweep:

- "Supabase migration done" → I verify table + add a dashboard widget
- "CRON_SECRET set" → I smoke-test both Trustpilot crons end-to-end
- "Email routing live" → I update ToS + privacy policy + sub-processor list to cite the new aliases
- "CE certified" → I add the badge to footer + `/for-schools` + `/pricing`
- "TM filed — app no ____" → I update trademark-register.md
- "TM registered" → I change ™ to ® site-wide
- "Here are 5 advisor names" → I write 5 bespoke first emails + follow-ups

Everything is scaffolded. The remaining work is almost entirely external — services, filings, humans. I handle the codebase updates.
