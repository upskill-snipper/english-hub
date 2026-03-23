# The English Hub -- Legal Compliance Report
## UK and Qatar Dual-Jurisdiction Requirements
### Platform: EdTech SaaS | GCSE/IGCSE English | Ages 14-18 | AI Essay Feedback | Stripe Payments | Affiliate Program

**Report Date:** 22 March 2026
**Status:** Pre-launch compliance checklist

---

## TABLE OF CONTENTS

1. [UK Legal Requirements](#1-uk-legal-requirements)
2. [Qatar Legal Requirements](#2-qatar-legal-requirements)
3. [Cross-Border Considerations](#3-cross-border-considerations)
4. [Master Action Item Checklist](#4-master-action-item-checklist)
5. [Estimated Total Costs](#5-estimated-total-costs)
6. [Recommended Timeline](#6-recommended-timeline)

---

## 1. UK LEGAL REQUIREMENTS

### 1.1 ICO Registration (Data Protection Fee)

**Requirement:** All organisations that process personal data must pay a data protection fee to the ICO, unless exempt.

**Fee Tiers (as of February 2025 increase of 29.8%):**
| Tier | Criteria | Annual Fee |
|------|----------|------------|
| Tier 1 (Micro) | Turnover < GBP 632,000 OR < 10 staff | GBP 52/year |
| Tier 2 (SME) | Turnover < GBP 36m OR < 250 staff | GBP 78/year |
| Tier 3 (Large) | Turnover > GBP 36m OR 250+ staff | GBP 3,763/year |

- GBP 5 discount for Direct Debit payment.
- **The English Hub will likely start at Tier 1 (GBP 52/year).**

**Action Items:**
- [ ] Register and pay the data protection fee online
- [ ] Set up Direct Debit for annual renewal

**Portal:** https://ico.org.uk/for-organisations/data-protection-fee/
**Processing Time:** Immediate upon online payment
**Estimated Cost:** GBP 47/year (Tier 1 with Direct Debit discount)

---

### 1.2 UK GDPR Compliance for Minors (Under 18)

**Key Rules:**
- Under UK GDPR, the age of consent for data processing via information society services (ISS) is **13 years old** in the UK.
- Since your users are 14-18, those aged 14+ can consent to data processing themselves without parental consent under UK GDPR Article 8.
- However, children still "merit specific protection" -- you must use clear, plain language in privacy notices.
- **You must NOT use children's data for marketing purposes or user profiling** unless there is a compelling justification.
- Automated decision-making (your AI essay feedback) must allow users to understand the logic behind it and request human review.

**AI Essay Feedback -- Specific Requirements (Data Use and Access Act 2025, in force 5 February 2026):**
- The UK has moved from a prohibition-based to permission-based regime for automated decision-making, but with safeguards.
- You must provide: (a) right to human intervention, (b) ability to contest the AI decision, (c) transparency about the logic and criteria used.
- A **Data Protection Impact Assessment (DPIA)** is **mandatory** because you are processing children's data via AI/automated means.

**Action Items:**
- [ ] Draft a child-friendly privacy notice in plain English
- [ ] Implement age verification at registration (self-declaration minimum; consider more robust methods)
- [ ] Conduct and document a full DPIA covering AI essay feedback, children's data, and cross-border transfers
- [ ] Build a "request human review" mechanism for AI essay feedback
- [ ] Implement transparency page explaining how the AI essay feedback works (logic, criteria, limitations)
- [ ] Ensure marketing/profiling of under-18 users is either disabled or strongly justified

**Portal:** https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/
**Estimated Cost:** GBP 0 (self-service) to GBP 2,000-5,000 if using a data protection consultant for DPIA

---

### 1.3 Age Appropriate Design Code (Children's Code)

**Requirement:** The ICO's Children's Code contains **15 mandatory standards** for online services likely to be accessed by children. EdTech platforms are explicitly in scope.

**The 15 Standards (key ones for The English Hub):**

1. **Best interests of the child** -- primary consideration in all design decisions
2. **Data Protection Impact Assessments** -- mandatory (see 1.2 above)
3. **Age-appropriate application** -- tailor data handling to the age range (14-18)
4. **Transparency** -- privacy info must be concise, prominent, and in clear language
5. **Detrimental use of data** -- do not use children's data in ways detrimental to their wellbeing
6. **Policies and community standards** -- uphold published T&Cs
7. **Default settings** -- must be "high privacy" by default
8. **Data minimisation** -- collect only what is strictly necessary
9. **Data sharing** -- do not share children's data unless there is a compelling reason
10. **Geolocation** -- switched off by default (likely N/A for The English Hub)
11. **Parental controls** -- provide age-appropriate controls
12. **Profiling** -- profiling must be off by default
13. **Nudge techniques** -- do not use dark patterns to weaken privacy settings
14. **Connected toys/devices** -- N/A
15. **Online tools** -- provide tools to help children exercise their data rights

**Note:** The Data (Use and Access) Act 2025 may lead to updates to this code. Guidance is under review as of mid-2025.

**Action Items:**
- [ ] Conduct a Children's Code conformance audit across all 15 standards
- [ ] Set all privacy/data settings to HIGH by default
- [ ] Disable profiling and personalised marketing by default for all users
- [ ] Ensure no nudge techniques or dark patterns in the UI (especially around data consent)
- [ ] Provide accessible tools for students to access, download, and delete their data
- [ ] Document your conformance with each of the 15 standards

**Portal:** https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/
**Estimated Cost:** GBP 0 (self-assessment) to GBP 3,000-8,000 (external Children's Code audit)

---

### 1.4 DBS Checks and Safeguarding

**Requirement:** While not strictly a legal mandate for SaaS EdTech (no direct 1:1 contact with children), DBS checks are industry best practice and expected by parents.

**Key Points:**
- From **January 2026**, the previous "safeguarding loophole" for private tutors has been closed.
- If any staff members provide direct interaction with students (e.g., live feedback sessions, messaging), an **Enhanced DBS check** is strongly recommended.
- For a purely AI-driven platform with no live human interaction, DBS checks are less critical but still advisable for trust/credibility.
- **Safeguarding training** (Level 1 minimum) is recommended for all staff.

**Costs:**
| Item | Cost |
|------|------|
| Enhanced DBS check (gov fee) | GBP 49.50 per person |
| Admin fee (umbrella body) | GBP 10-30 per person |
| Total per check | GBP 60-80 per person |
| Safeguarding training (Level 1) | Free (NSPCC/Educare) to GBP 20 |

**Action Items:**
- [ ] Obtain Enhanced DBS checks for any staff with student contact
- [ ] Complete Level 1 Safeguarding training (free via NSPCC)
- [ ] Draft and publish a Safeguarding Policy on the website
- [ ] Implement a reporting mechanism for safeguarding concerns

**Processing Time:** 7-14 days for Enhanced DBS checks
**Portal:** https://www.gov.uk/request-copy-criminal-record

---

### 1.5 Consumer Rights Act 2015 & Distance Selling

**Requirements for digital subscription services:**

**Consumer Contracts Regulations 2013:**
- 14-day cooling-off period from the date the contract is entered into.
- For digital content: if you want users to access content immediately, they must give explicit consent to waive the 14-day cooling-off period AND be informed they lose their right to cancel once the content is accessed.
- You must provide a model cancellation form.

**DMCC Act 2024 (Subscription Contract Rules -- expected Autumn 2026):**
- **Reminder notices** required before renewal payments.
- For monthly subscriptions: reminder before every 6th payment (twice per year).
- For annual subscriptions: reminder before each renewal (twice per year).
- Reminder must include: date due, amount, any price increase.
- Easy cancellation process must be provided (no dark patterns).
- Cooling-off period of 14 days applies to each renewal.

**Consumer Rights Act 2015 -- Digital Content:**
- Digital content must be of satisfactory quality, fit for purpose, and as described.
- If content is faulty, consumers have a right to repair or replacement.
- If repair/replacement is not possible, consumers can claim a price reduction.

**Action Items:**
- [ ] Implement 14-day free trial or explicit cooling-off waiver consent flow
- [ ] Create a model cancellation form and make it easily accessible
- [ ] Build automated renewal reminder emails (prepare for DMCC Act requirements)
- [ ] Ensure cancellation is easy and prominently accessible (no hidden steps)
- [ ] Draft T&Cs covering digital content quality guarantees
- [ ] Store records of consent to waive cooling-off period

**Estimated Cost:** GBP 500-1,500 (legal review of T&Cs and cancellation flow)

---

### 1.6 ASA Rules for Educational Claims

**Key Rules:**
- All advertising claims must be **substantiated with documentary evidence** held before publication.
- You **cannot** claim specific exam results improvements (e.g., "guaranteed grade 9") without robust evidence.
- Comparative claims (e.g., "better than other platforms") must cite the source, date, and basis.
- If offering a free trial that converts to a paid subscription, this must be clearly stated in the ad.
- Staff qualifications claimed in marketing must be verifiable.
- Testimonials must be genuine and reflect typical results, not exceptional cases.

**Action Items:**
- [ ] Audit all marketing materials for unsubstantiated claims
- [ ] Hold documentary evidence for every objective claim
- [ ] Add disclaimers to testimonials (e.g., "Results may vary")
- [ ] Ensure free trial terms are prominently disclosed in all ads
- [ ] Avoid absolute claims like "guaranteed results" unless backed by evidence

**Portal:** https://www.asa.org.uk/advice-and-resources/resource-library/advertising-guidance.html
**Estimated Cost:** GBP 0 (self-review) to GBP 500-1,000 (ASA Copy Advice service)

---

### 1.7 Ofqual / Exam Board Trademark & Copyright

**Critical Warning:** GCSE and IGCSE are trademarked terms owned by exam boards. Past papers, mark schemes, and specifications are copyrighted.

**Key Policies:**

| Exam Board | Policy |
|-----------|--------|
| **AQA** | Logo use not permitted by third parties. Copyrighted materials may not be reproduced without permission. |
| **Pearson Edexcel** | All materials protected by copyright. Third-party commercial use requires explicit permission. Centres cannot charge students for copied materials. |
| **Cambridge International** | Must apply for permission to use copyrighted material via their support portal. |

**What you CAN do:**
- Refer to "GCSE English" and "IGCSE English" descriptively (fair use of qualification names).
- Create original content aligned to the specifications (but not copy the specifications themselves).
- Link to freely available specification documents.

**What you CANNOT do:**
- Use exam board logos without permission.
- Reproduce past papers, mark schemes, or specification content.
- Imply endorsement by any exam board.
- Use "AQA", "Edexcel", "Cambridge" in your branding/domain in a way that implies affiliation.

**Action Items:**
- [ ] Add clear disclaimer: "The English Hub is not affiliated with or endorsed by AQA, Pearson Edexcel, Cambridge International, or any exam board"
- [ ] Ensure no copyrighted exam board content is reproduced without licence
- [ ] If using specification references, link to official sources rather than reproducing
- [ ] Consider applying for a formal content licence from relevant exam boards if needed
- [ ] Review all marketing to remove any implied endorsement

**Estimated Cost:** GBP 0 (for compliance) to significant licensing fees if reproducing exam board materials

---

### 1.8 Cookie Consent (PECR)

**Current Requirements:**
- Obtain **prior informed consent** before setting any non-essential cookies.
- "Strictly necessary" cookies are exempt.
- Consent must be freely given, specific, informed, and unambiguous.
- No pre-ticked boxes. No "cookie walls" that force acceptance.
- Must provide clear information about what each cookie does.
- Must be as easy to reject cookies as to accept them.

**Upcoming Changes (Data Use and Access Act 2025):**
- Increased maximum penalty from GBP 500,000 to GBP 17.5 million or 4% of global turnover.
- New exemptions being introduced for certain low-risk cookies (analytics).
- Final ICO guidance expected Spring 2026.

**Action Items:**
- [ ] Implement a compliant cookie consent banner (no dark patterns)
- [ ] Categorise all cookies (strictly necessary, analytics, marketing)
- [ ] Provide granular consent options (not just "accept all")
- [ ] Maintain a cookie policy page listing all cookies, purposes, and durations
- [ ] Ensure reject option is equally prominent to accept option
- [ ] Review and update once new ICO guidance is published (Spring 2026)

**Estimated Cost:** GBP 0 (free tools like Cookiebot free tier) to GBP 10-50/month (paid CMP tools)

---

### 1.9 Affiliate Marketing Disclosure (ASA/CMA)

**Legal Requirements:**
- Under the CAP Code and Consumer Protection from Unfair Trading Regulations 2008, affiliate content must be **obviously identifiable as advertising**.
- The DMCC Act 2024 gives the CMA direct enforcement powers with severe penalties.
- Each piece of affiliate content must include its own disclosure -- you cannot rely on a bio disclosure alone.

**Disclosure Rules:**
- Use clear labels: "#Ad", "Ad", "Advertisement", or "Paid partnership".
- Disclosure must be **prominent and upfront** (not hidden at the end or in small print).
- Platform disclosure tools (e.g., Instagram "Paid partnership" label) should be used where available.
- The brand (The English Hub) is **jointly responsible** for affiliate content, even if not directly controlling it.

**Action Items:**
- [ ] Draft affiliate marketing T&Cs requiring proper disclosure
- [ ] Create affiliate guidelines document with examples of compliant disclosures
- [ ] Include compliance clause in all affiliate agreements
- [ ] Monitor affiliate content for compliance (spot checks)
- [ ] Train affiliate partners on ASA/CMA requirements
- [ ] Include termination clause for non-compliant affiliates

**Portal:** https://www.asa.org.uk/advice-online/recognising-ads-social-media.html
**Estimated Cost:** GBP 0-500 (legal template for affiliate agreements)

---

### 1.10 Company Registration

**Options:**

| Structure | Cost | Pros | Cons |
|-----------|------|------|------|
| **Sole Trader** | Free (register with HMRC) | Simple, low cost, easy to set up | Unlimited personal liability, less credible |
| **Ltd Company** | GBP 100 (online, as of Feb 2026) | Limited liability, tax efficient, professional | More admin, accounts filing, confirmation statements |
| **LLP** | GBP 100 | Limited liability for partners | Requires 2+ members |

**Recommendation:** Register as a **Private Limited Company (Ltd)** for liability protection and credibility, especially when handling children's data and payment processing.

**Ongoing Costs:**
| Item | Cost |
|------|------|
| Companies House incorporation (online) | GBP 100 (one-off) |
| Same-day incorporation | GBP 156 (one-off) |
| Annual confirmation statement | GBP 50/year |
| Registered office address service (optional) | GBP 50-150/year |
| Annual accounts preparation | GBP 300-1,500/year (accountant) |

**Action Items:**
- [ ] Register a Ltd company via Companies House
- [ ] Appoint director(s) and file People with Significant Control (PSC) register
- [ ] Set up a business bank account
- [ ] Register for Corporation Tax with HMRC (within 3 months of starting to trade)

**Portal:** https://www.gov.uk/set-up-limited-company
**Processing Time:** Typically 24 hours for online incorporation

---

### 1.11 VAT Registration

**Current Thresholds (2025/26 tax year):**
- **Mandatory registration:** Taxable turnover exceeds GBP 90,000 in any rolling 12-month period.
- **Voluntary registration:** Can register below this threshold (allows recovery of input VAT).
- **Standard VAT rate:** 20% (applies to digital educational services).

**Digital Services VAT:**
- Educational digital subscriptions are standard-rated at 20% (not zero-rated like physical books).
- If selling to consumers in other countries, place-of-supply rules may apply.

**Action Items:**
- [ ] Monitor turnover against GBP 90,000 threshold
- [ ] Consider voluntary VAT registration if B2B sales are expected (to reclaim input VAT)
- [ ] Implement VAT-compliant invoicing in Stripe
- [ ] Determine VAT treatment for Qatar-based customers (likely outside scope of UK VAT)

**Portal:** https://www.gov.uk/vat-registration
**Estimated Cost:** GBP 0 to register; ongoing compliance costs GBP 200-500/year (accountant)

---

## 2. QATAR LEGAL REQUIREMENTS

### 2.1 Qatar Data Privacy Law (Law No. 13 of 2016 -- PDPPL)

**Key Provisions:**
- **Explicit consent** required before processing personal data (Article 4).
- Must adhere to principles of **transparency, fairness, and respect for human dignity**.
- Data must be kept up to date with adequate security measures.
- **Data breach notification** within **72 hours** to the National Cyber Governance and Assurance Affairs (NCGAA) and affected individuals.
- **DPIA recommended** by the PDPPL Guidelines -- failure to conduct one where required can attract a fine of up to **QAR 1,000,000 (approx. USD 275,000 / GBP 215,000)**.
- Records of Processing Activities (RoPA) must be maintained.

**Cross-Border Transfer (Article 15):**
- Data controllers must not take measures that limit cross-border data transfer.
- However, transfers that violate the law's provisions or could cause harm are prohibited.
- Consent from the data subject is required for cross-border transfers.
- Must demonstrate that the transfer is for a lawful purpose and complies with the PDPPL.

**Action Items:**
- [ ] Obtain explicit consent from Qatar-based users for data processing AND cross-border data transfer (to UK servers)
- [ ] Conduct a DPIA under Qatari law requirements (can be combined with UK DPIA)
- [ ] Maintain Records of Processing Activities
- [ ] Implement a 72-hour breach notification process
- [ ] Appoint a data protection contact accessible to Qatari users
- [ ] Draft a Qatar-specific privacy notice

**Enforcement Body:** National Cyber Security Agency (NCSA) / NCGAA
**Portal:** https://assurance.ncsa.gov.qa/en/privacy/law

---

### 2.2 Ministry of Education Approval

**Current Situation:**
- Qatar's Ministry of Education and Higher Education (MOEHE) regulates educational content and institutions.
- The Ministry has launched an **online licensing platform** for private educational institutions.
- **Distance learning** is subject to specific approval criteria including accreditation and ranking requirements.
- The National E-Learning Strategy (launched 2023) promotes digital educational approaches.

**Key Consideration:** The English Hub is a supplementary educational resource, not a formal educational institution. This distinction is important:
- If positioned as a **supplementary tutoring/revision platform**, it may not require formal MOEHE licensing.
- If positioned as a **replacement for formal education** or offering any form of certification, MOEHE approval is likely required.

**Action Items:**
- [ ] Seek legal advice in Qatar on whether the platform requires MOEHE licensing (strongly recommended)
- [ ] Position the platform clearly as "supplementary revision and practice" not "formal education"
- [ ] Include a disclaimer that the platform does not replace formal schooling
- [ ] Monitor any new regulations under Qatar's National E-Learning Strategy
- [ ] Consider engaging a Qatari education law firm for a formal opinion

**Portal:** https://www.edu.gov.qa/en/
**Estimated Cost:** GBP 1,000-3,000 for legal opinion from a Qatar-based firm

---

### 2.3 Commercial Registration

**Options for operating in Qatar:**

**Option A: Qatar Mainland (MoCI Registration)**
- Register with the Ministry of Commerce and Industry.
- **Minimum capital:** QAR 200,000 (approx. GBP 43,000).
- 100% foreign ownership now permitted in most sectors including IT and education services.
- Must identify the website through which commercial activity is conducted.
- **New e-commerce licensing regime** (Ministerial Decision No. 25 of 2026, in force 16 March 2026) requires an e-commerce licence from MoCI.

**Option B: Qatar Financial Centre (QFC)**
- Operates under **English common law** (advantageous for a UK-based founder).
- 100% foreign ownership permitted.
- 10% corporation tax on Qatar-sourced profits only.
- No withholding taxes on dividends, interest, or royalties.
- Lower or no minimum capital requirement.
- Access to Qatar's double taxation treaty network.
- **Limitation:** To sell directly to Qatari consumers, may need a mainland distributor or secondary registration.

**Option C: No Qatar Registration (Serve Qatar Remotely from UK)**
- Operate entirely from the UK and serve Qatar customers remotely.
- Risky under the new e-commerce Decision No. 25 of 2026.
- May still trigger Qatar tax obligations on Qatar-sourced income.
- **Not recommended** if actively marketing to Qatari students.

**Recommendation:** Start with **Option C** for initial launch, then move to **Option B (QFC)** if Qatar revenue justifies the setup costs, given the English common law framework and tax efficiency.

**Action Items:**
- [ ] Obtain legal advice on whether the new e-commerce Decision No. 25 of 2026 applies to foreign-operated platforms serving Qatar
- [ ] If registering: choose between mainland MoCI and QFC based on business model
- [ ] Open a Qatari corporate bank account (if registering locally)
- [ ] Comply with e-commerce licensing requirements

**Portal (MoCI):** https://www.moci.gov.qa/en/e-services/
**Portal (QFC):** https://www.qfc.qa/en
**Estimated Cost:** GBP 2,000-10,000+ (registration, legal, bank account setup)

---

### 2.4 Payment Processing

**Stripe in Qatar:**
- Stripe is **supported in Qatar** but is **not locally licensed** by the Qatar Central Bank (QCB).
- The QCB's Payment Services Regulation (September 2021) requires local licensing for payment service providers.
- Stripe can process payments from Qatari cards, but using a locally licensed gateway (e.g., Dibsy, QPay) may be required if you have a Qatar entity.

**Recommended Approach:**
- Use **Stripe** for all payments (UK entity processes payments globally).
- If/when establishing a Qatar entity, consider adding a locally licensed payment gateway.
- Ensure PCI DSS compliance (Stripe handles this for card payments).

**Action Items:**
- [ ] Set up Stripe account under UK Ltd company
- [ ] Enable multi-currency support (GBP and QAR)
- [ ] Implement Stripe's built-in SCA (Strong Customer Authentication) for UK/EU payments
- [ ] Research local payment gateway options if setting up a Qatar entity
- [ ] Ensure compliance with QCB information security regulations for PSPs

**Estimated Cost:** Stripe fees (1.5% + 20p UK cards; 3.25% + 20p international cards)

---

### 2.5 Content Moderation Requirements

**Qatar-Specific Content Rules:**
- All content must respect **Islamic traditions and local customs**.
- Content must not include anything deemed offensive or inappropriate (nudity, explicit language, graphic violence).
- Politically sensitive content is punishable by law.
- Media content must align with Qatari societal values and norms.

**For The English Hub specifically:**
- Literature texts used for GCSE/IGCSE may contain themes (e.g., violence, discrimination) that need careful framing.
- Essay prompts and AI feedback must not generate content that could be considered culturally inappropriate in Qatar.

**Action Items:**
- [ ] Review all platform content for cultural sensitivity in a Qatar context
- [ ] Implement content filters on AI essay feedback to prevent culturally inappropriate outputs
- [ ] Add content warnings where literature themes may be sensitive
- [ ] Draft a content moderation policy specific to Qatar
- [ ] Consider having a Qatar-based reviewer audit content periodically

**Estimated Cost:** GBP 500-2,000 (content review and policy drafting)

---

### 2.6 Arabic Language Requirements

**Legal Requirement:**
- Qatar's Law No. 7 of 2019 requires Arabic to be used in official contexts.
- Arabic must appear **equally prominently** to English in advertising materials (equal size and placement).
- Government-facing documents must be in Arabic.

**For The English Hub:**
- T&Cs and privacy policy should have **Arabic translations** if actively targeting Qatar.
- Marketing materials aimed at Qatar must include Arabic at equal prominence to English.
- The platform interface itself (being an English language learning tool) does not need to be in Arabic, but key legal documents should be bilingual.

**Action Items:**
- [ ] Translate Terms & Conditions into Arabic
- [ ] Translate Privacy Policy into Arabic
- [ ] Translate Cookie Policy into Arabic
- [ ] Ensure Qatar-targeted marketing materials include Arabic text at equal prominence
- [ ] Have translations certified by a professional legal translator

**Estimated Cost:** GBP 500-1,500 (professional legal translation of key documents)

---

## 3. CROSS-BORDER CONSIDERATIONS

### 3.1 Jurisdiction and Applicable Law

**Governing Principles:**
- If the company is registered in the UK, **English law** should be the governing law of your T&Cs.
- However, **mandatory consumer protection laws** of Qatar will still apply to Qatari users regardless of your T&Cs.
- The Qatar PDPPL applies to any processing of Qatari residents' data, regardless of where the processor is located.
- UK GDPR applies to all processing of UK residents' data.

**Action Items:**
- [ ] Draft T&Cs specifying English law as governing law, with acknowledgement that local mandatory laws apply
- [ ] Include jurisdiction clause (English courts, with Qatar arbitration option for Qatari users)
- [ ] Ensure compliance with BOTH UK and Qatar data protection laws simultaneously

---

### 3.2 Data Transfer Mechanisms (UK-Qatar)

**Current Position:**
- Qatar does NOT have a UK adequacy decision (it is not on the UK's list of approved countries for data transfers).
- No specific UK-Qatar data transfer agreement exists.
- Under the Data Use and Access Act 2025, the UK is adopting a "not materially lower" standard for international transfers (likely slightly easier than the EU standard).

**Transfer Mechanisms Available:**
1. **Standard Contractual Clauses (SCCs) / International Data Transfer Agreement (IDTA)** -- the UK's version of SCCs. This is the most practical mechanism.
2. **Explicit consent** -- obtain explicit consent from each user for the international transfer. Fragile as consent can be withdrawn.
3. **Binding Corporate Rules** -- only if you have entities in both jurisdictions.
4. **Transfer Risk Assessment (TRA)** -- required alongside SCCs/IDTA.

**Qatar Side:**
- Under PDPPL Article 15, cross-border transfers are generally permitted if lawful and with consent.
- Must demonstrate the transfer serves a lawful purpose.

**Recommended Approach:**
- Use the **UK IDTA** as your primary transfer mechanism.
- Supplement with **explicit user consent** at registration.
- Conduct a **Transfer Risk Assessment** for UK-to-Qatar and Qatar-to-UK data flows.

**Action Items:**
- [ ] Implement the UK International Data Transfer Agreement (IDTA)
- [ ] Conduct a Transfer Risk Assessment
- [ ] Obtain explicit consent for international data transfers at registration
- [ ] Document all cross-border data flows in your Record of Processing Activities
- [ ] Monitor for any future UK-Qatar adequacy decision

**Estimated Cost:** GBP 500-2,000 (legal drafting of IDTA and TRA)

---

### 3.3 Tax Implications

**UK Tax:**
| Tax | Details |
|-----|---------|
| Corporation Tax | 25% on profits (19% for profits up to GBP 50,000 -- small profits rate) |
| VAT | 20% on UK sales once threshold reached (GBP 90,000) |
| Digital Services Tax | 2% on UK revenues -- only applies if group global revenues exceed GBP 500m (unlikely to apply) |

**Qatar Tax:**
| Tax | Details |
|-----|---------|
| Corporate Income Tax | 10% on Qatar-sourced income (applies to foreign-owned entities) |
| QFC Tax | 10% on Qatar-sourced profits |
| No personal income tax | Qatar does not levy personal income tax |
| No VAT | Qatar does not currently have VAT |

**UK-Qatar Double Taxation Treaty:**
- In force since 14 October 2010.
- Provides tax credit relief: tax paid in one country is credited against tax due in the other.
- Prevents double taxation on the same income.

**Practical Approach:**
- If operating via UK Ltd only: UK Corporation Tax applies to worldwide profits, with credit for any Qatar tax paid.
- If also registered in Qatar: 10% Qatar tax on Qatar-sourced profits, with credit against UK tax.

**Action Items:**
- [ ] Register for Corporation Tax with HMRC within 3 months of trading
- [ ] Engage an accountant familiar with UK-Qatar cross-border taxation
- [ ] Determine whether Qatar-sourced income triggers Qatar tax obligations even without a local entity
- [ ] Structure pricing to account for VAT on UK sales but no VAT on Qatar sales
- [ ] Keep detailed records of income by jurisdiction

**Portal:** https://www.gov.uk/government/publications/qatar-tax-treaties
**Estimated Cost:** GBP 500-2,000/year (accountant fees for international tax)

---

## 4. MASTER ACTION ITEM CHECKLIST

### Priority 1 -- MUST DO BEFORE LAUNCH

| # | Action | Category | Est. Cost |
|---|--------|----------|-----------|
| 1 | Register a UK Ltd company | Company | GBP 100 |
| 2 | Pay ICO data protection fee | Data Protection | GBP 47/year |
| 3 | Conduct full DPIA (AI, children's data, cross-border) | Data Protection | GBP 0-5,000 |
| 4 | Draft child-friendly privacy notice | Data Protection | GBP 0-1,000 |
| 5 | Implement age verification at sign-up | Technical | GBP 0 (dev time) |
| 6 | Implement compliant cookie consent banner | Technical | GBP 0-50/month |
| 7 | Draft Terms & Conditions (English law) | Legal | GBP 500-2,000 |
| 8 | Draft Cancellation Policy with model form | Legal | Included above |
| 9 | Implement 14-day cooling-off / waiver consent flow | Technical | GBP 0 (dev time) |
| 10 | Set up Stripe with proper invoicing | Payments | GBP 0 (transaction fees only) |
| 11 | Add exam board non-affiliation disclaimer | Legal | GBP 0 |
| 12 | Build "request human review" for AI feedback | Technical | GBP 0 (dev time) |
| 13 | Document AI transparency (logic and criteria) | Technical | GBP 0 (dev time) |
| 14 | Set all privacy defaults to HIGH | Technical | GBP 0 (dev time) |

### Priority 2 -- SHOULD DO BEFORE LAUNCH

| # | Action | Category | Est. Cost |
|---|--------|----------|-----------|
| 15 | Enhanced DBS checks for staff with student contact | Safeguarding | GBP 60-80 each |
| 16 | Level 1 Safeguarding training for all staff | Safeguarding | GBP 0 (NSPCC free) |
| 17 | Draft and publish Safeguarding Policy | Safeguarding | GBP 0-500 |
| 18 | Audit all marketing claims for ASA compliance | Marketing | GBP 0-1,000 |
| 19 | Draft affiliate marketing guidelines and agreements | Marketing | GBP 0-500 |
| 20 | Children's Code conformance self-assessment | Data Protection | GBP 0 |
| 21 | Translate T&Cs and Privacy Policy into Arabic | Qatar | GBP 500-1,500 |
| 22 | Review content for Qatar cultural sensitivity | Qatar | GBP 500-2,000 |
| 23 | Implement content filters on AI for Qatar context | Technical | GBP 0 (dev time) |

### Priority 3 -- DO WITHIN 3 MONTHS OF LAUNCH

| # | Action | Category | Est. Cost |
|---|--------|----------|-----------|
| 24 | Register for VAT (if approaching GBP 90k threshold) | Tax | GBP 0 |
| 25 | Seek Qatar legal opinion on MOEHE licensing | Qatar | GBP 1,000-3,000 |
| 26 | Seek Qatar legal opinion on e-commerce Decision No. 25 of 2026 | Qatar | Included above |
| 27 | Implement UK IDTA for data transfers | Data Protection | GBP 500-2,000 |
| 28 | Conduct Transfer Risk Assessment | Data Protection | Included above |
| 29 | Engage cross-border tax accountant | Tax | GBP 500-2,000/year |
| 30 | Prepare for DMCC Act subscription rules (Autumn 2026) | Legal | GBP 0 (dev time) |

### Priority 4 -- DO WHEN QATAR REVENUE JUSTIFIES IT

| # | Action | Category | Est. Cost |
|---|--------|----------|-----------|
| 31 | Register Qatar entity (QFC recommended) | Company | GBP 2,000-10,000+ |
| 32 | Open Qatari corporate bank account | Finance | GBP 0-500 |
| 33 | Add locally licensed Qatar payment gateway | Payments | Variable |
| 34 | Appoint Qatar-based content reviewer | Content | GBP 1,000-3,000/year |

---

## 5. ESTIMATED TOTAL COSTS

### Pre-Launch Minimum (Self-Service Approach)
| Category | Cost |
|----------|------|
| Company registration (Ltd) | GBP 100 |
| ICO fee (year 1) | GBP 47 |
| Legal (T&Cs, Privacy Policy -- template/DIY) | GBP 0-500 |
| Cookie consent tool | GBP 0 |
| DBS checks (2 people) | GBP 120-160 |
| Arabic translations | GBP 500-1,500 |
| **TOTAL (minimum)** | **GBP 767 - 2,307** |

### Pre-Launch Recommended (With Professional Advice)
| Category | Cost |
|----------|------|
| Company registration (Ltd) | GBP 100 |
| ICO fee (year 1) | GBP 47 |
| Legal (T&Cs, policies, DPIA -- solicitor) | GBP 3,000-8,000 |
| Cookie consent tool | GBP 0-50/month |
| DBS checks (2 people) | GBP 120-160 |
| Arabic translations | GBP 500-1,500 |
| Qatar legal opinion | GBP 1,000-3,000 |
| Children's Code audit | GBP 3,000-8,000 |
| **TOTAL (recommended)** | **GBP 7,767 - 20,857** |

### Annual Ongoing Costs
| Category | Cost |
|----------|------|
| ICO fee | GBP 47-78 |
| Companies House confirmation statement | GBP 50 |
| Accountant (including international tax) | GBP 1,000-3,000 |
| Cookie consent tool | GBP 0-600 |
| Legal review / updates | GBP 500-2,000 |
| **TOTAL (annual)** | **GBP 1,597 - 5,728** |

---

## 6. RECOMMENDED TIMELINE

### Weeks 1-2: Foundation
- [ ] Register UK Ltd company (24 hours processing)
- [ ] Pay ICO data protection fee (immediate)
- [ ] Register for Corporation Tax with HMRC
- [ ] Set up Stripe under company name
- [ ] Begin drafting T&Cs, Privacy Policy, Cookie Policy

### Weeks 3-4: Data Protection
- [ ] Conduct DPIA (AI + children's data + cross-border transfers)
- [ ] Implement Children's Code conformance (privacy defaults, transparency, etc.)
- [ ] Build cookie consent mechanism
- [ ] Implement age verification flow
- [ ] Build AI transparency page and human review mechanism

### Weeks 5-6: Safeguarding & Content
- [ ] Complete DBS checks for relevant staff
- [ ] Complete safeguarding training
- [ ] Review and adapt content for Qatar cultural sensitivity
- [ ] Implement AI content filters for Qatar context
- [ ] Commission Arabic translations of legal documents

### Weeks 7-8: Marketing & Affiliates
- [ ] Audit all marketing materials for ASA compliance
- [ ] Draft affiliate guidelines and agreements
- [ ] Add exam board disclaimers
- [ ] Finalise cancellation flow and cooling-off compliance

### Weeks 9-10: Legal Review & Launch Prep
- [ ] Final legal review of all policies and T&Cs
- [ ] Test all compliance flows (consent, cancellation, data access requests)
- [ ] Publish all policies on the website
- [ ] Soft launch

### Months 3-6: Post-Launch
- [ ] Obtain Qatar legal opinion on MOEHE and e-commerce requirements
- [ ] Monitor VAT threshold
- [ ] Engage international tax accountant
- [ ] Prepare for DMCC Act subscription rules (Autumn 2026)
- [ ] Evaluate whether Qatar entity registration is needed

---

## KEY REGISTRATION PORTALS AND RESOURCES

| Resource | URL |
|----------|-----|
| ICO Data Protection Fee | https://ico.org.uk/for-organisations/data-protection-fee/ |
| ICO Children's Code | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/ |
| Companies House Registration | https://www.gov.uk/set-up-limited-company |
| HMRC VAT Registration | https://www.gov.uk/vat-registration |
| HMRC Corporation Tax | https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax |
| DBS Check Application | https://www.gov.uk/request-copy-criminal-record |
| ASA Copy Advice | https://www.asa.org.uk/advice-and-resources.html |
| ASA Influencer Guidance | https://www.asa.org.uk/advice-online/recognising-ads-social-media.html |
| Qatar PDPPL (Full Text) | https://www.almeezan.qa/EnglishLaws//132016.pdf |
| Qatar NCSA Privacy | https://assurance.ncsa.gov.qa/en/privacy/law |
| Qatar MoCI E-Services | https://www.moci.gov.qa/en/e-services/ |
| Qatar Financial Centre | https://www.qfc.qa/en |
| Qatar MOEHE | https://www.edu.gov.qa/en/ |
| UK-Qatar Double Tax Treaty | https://www.gov.uk/government/publications/qatar-tax-treaties |
| AQA Copyright Policy | https://www.aqa.org.uk/about-us/who-we-are/our-standards/copyright-and-intellectual-property-policy |
| Pearson Copyright Policy | https://qualifications.pearson.com/en/support/support-topics/exams/past-papers/pearson-copyright-policy.html |
| Cambridge Permissions | https://help.cambridgeinternational.org/hc/en-gb/articles/115004418469 |

---

## DISCLAIMER

This report is compiled from publicly available information as of March 2026 and is intended as a research summary to guide further professional legal and tax advice. It does not constitute legal advice. Laws and regulations change frequently -- particularly the DMCC Act subscription rules (expected Autumn 2026), the ICO's updated cookie guidance (expected Spring 2026), and Qatar's new e-commerce licensing framework (in force March 2026). You should engage qualified legal professionals in both the UK and Qatar before making final compliance decisions.

---

**Sources consulted during research:**

- [ICO Data Protection Fee](https://ico.org.uk/for-organisations/data-protection-fee/)
- [ICO Children and the UK GDPR](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/)
- [ICO Children's Code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/)
- [ICO DPIA Guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/)
- [ICO Cookie Guidance (PECR)](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/)
- [Companies House Fees (Feb 2026)](https://www.gov.uk/government/news/companies-house-fees-are-changing-from-1-february-2026)
- [ASA Influencer Guidance](https://www.asa.org.uk/advice-online/recognising-ads-social-media.html)
- [ASA Educational Advertising](https://www.asa.org.uk/news/learning-to-ensure-your-advertising-is-compliant.html)
- [DMCC Act Subscription Rules](https://www.hoganlovells.com/en/publications/uk-subscription-law-shakeup-new-rules-pushed-to-autumn-2026)
- [DBS Check Costs 2026](https://smartworkforce.co.uk/how-much-does-a-dbs-check-cost/)
- [Qatar PDPPL (Securiti)](https://securiti.ai/qatar-personal-data-protection-law/)
- [Qatar PDPPL (Full Text)](https://www.almeezan.qa/EnglishLaws//132016.pdf)
- [Qatar Data Protection (DLA Piper)](https://www.dlapiperdataprotection.com/countries/qatar/law.html)
- [Qatar Commercial Registration (Wafeq)](https://www.wafeq.com/en-qa/business-hub/for-business/obtaining-a-commercial-register-in-qatar)
- [Qatar E-Commerce Licensing (Crowell & Moring)](https://www.crowell.com/en/insights/client-alerts/qatar-introduces-licensing-framework-for-e-commerce-activities-without-a-physical-premises)
- [QFC Company Registration](https://www.qfc.qa/en)
- [QFC vs Mainland (Emerhub)](https://emerhub.com/qatar/)
- [Qatar Corporate Tax (PwC)](https://taxsummaries.pwc.com/qatar/corporate/taxes-on-corporate-income)
- [UK-Qatar Double Tax Treaty](https://www.gov.uk/government/publications/qatar-tax-treaties)
- [Stripe Middle East Payments](https://stripe.com/resources/more/payments-in-the-middle-east)
- [Qatar Arabic Language Law](https://www.sabaip.com/qatar-law-on-the-protection-of-the-arabic-language/)
- [Qatar MOEHE](https://www.edu.gov.qa/en/)
- [UK AI Regulation Tracker (Osborne Clarke)](https://www.osborneclarke.com/insights/regulatory-outlook-february-2026-artificial-intelligence)
- [UK VAT Threshold 2025/26](https://merrantiaccounting.com/vat-registration-threshold-what-will-happen-in-april-2026-and-how-to-prepare-now/)
- [Pearson Copyright Policy](https://qualifications.pearson.com/en/support/support-topics/exams/past-papers/pearson-copyright-policy.html)
- [AQA Copyright Policy](https://www.aqa.org.uk/about-us/who-we-are/our-standards/copyright-and-intellectual-property-policy)
- [ICO International Transfers Guide](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-transfers-a-guide/)
- [QFC Data Protection Transfers](https://www.qfc.qa/en/operating-with-qfc/data-protection/data-protection-and-international-data-transfers)
