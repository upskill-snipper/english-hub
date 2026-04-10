# 30 Common MAT Procurement Questions — Prepared Answers

**Purpose**: Ready answers for the 30 questions most frequently asked by MAT finance, procurement, IT, legal, and education teams. Share as a PDF with every serious prospect. Verify any numbers marked **[VERIFY]** before sending.

**Format**: Question · Who typically asks · Prepared answer · Internal notes for the rep.

---

## Commercial and financial

### Q1. "What is your pricing model?"

**Who asks**: CFO, Head of Finance, Procurement Lead.

**Answer**: Per-student annual pricing, banded by total students across the trust. The more students across the trust, the lower the per-student rate. A 3-year term carries a 10% discount. One annual invoice to the trust, or per-school order forms under a single framework — whichever the trust prefers.

**Internal note**: Point them to `mat-pricing-model.md` detail. Never quote a specific number without understanding their student count first.

---

### Q2. "Can you guarantee the price for the full term?"

**Who asks**: CFO, Procurement.

**Answer**: Yes. For the initial framework term (typically 3 years) the per-student price is locked. If you grow into a more favourable band, the lower price applies automatically at the next anniversary. Price does not increase during the initial term.

---

### Q3. "What's included in the price and what isn't?"

**Who asks**: Procurement, CFO.

**Answer**: Included: platform access for all pupils and staff at activated schools, curriculum content, assessment engine, analytics dashboards (school and trust level), SSO with Google and Microsoft, standard integrations, UK-based email support, and the central MAT dashboard. Not included: bespoke curriculum branding (£5,000 one-off), write-back of data to MIS (£2,000/year per school, optional), custom bespoke reporting (£8,000 one-off), and dedicated onboarding project management (£5,000 flat).

**Internal note**: Match to `mat-pricing-model.md` add-ons table.

---

### Q4. "What are your payment terms?"

**Who asks**: CFO, AP team.

**Answer**: Standard terms are annual in advance, 30 days net. We also support quarterly or monthly invoicing at a small premium, and annual-in-arrears on commercial review. We do not offer 90-day terms without finance sign-off.

---

### Q5. "Can you evidence return on investment?"

**Who asks**: CFO, Head of Finance.

**Answer**: Yes. For a trust of your size, our customers typically see three tangible financial benefits: licence consolidation saving of 30–45% against fragmented current spend; an estimated 0.2–0.3 FTE of central team time released from manual data collection; and teacher workload reduction of 4–6 hours per week per English teacher, directly contributing to retention (each retained teacher worth £10–15k in recruitment and onboarding savings). We can provide a tailored ROI model for your specific trust during scoping.

**Internal note**: Have the spreadsheet ready before the meeting.

---

### Q6. "What is the total cost of ownership over 5 years?"

**Who asks**: CFO.

**Answer**: For a trust of [N] secondary students on a 3-year + 2-year extension, TCV is approximately £[X]. This includes licence, onboarding, and standard support — no hidden year-on-year uplifts. We provide a 5-year TCO model as part of any serious commercial conversation.

---

### Q7. "What discount can we get?"

**Who asks**: Procurement, CFO.

**Answer**: Discount comes from two places: banded pricing (automatic, based on your trust size) and term length (10% for 3 years, 15% for 5 years). We do not negotiate on the per-student rate outside of these bands because it would be unfair to our other MAT customers. Where we can be flexible is phased rollout, payment terms, and the scope of included add-ons.

**Internal note**: This is a deliberate answer. Do not freelance on discounts.

---

### Q8. "Do you offer a pilot?"

**Who asks**: Director of Education, Head of English, Procurement.

**Answer**: Yes. Our standard pilot is two schools for 12 weeks, at no cost, with a structured evaluation at week 12. We do not offer longer or larger free pilots — the pilot is designed to give you a defensible go/no-go decision in one term, not to be an indefinite free trial.

---

## Data protection and security

### Q9. "Where is our data hosted?"

**Who asks**: DPO, IT Lead.

**Answer**: All production pupil data is hosted in the United Kingdom, on [VERIFY — typically AWS eu-west-2 London or Azure UK South]. No production pupil data leaves the UK in routine operations.

---

### Q10. "Who owns the data?"

**Who asks**: DPO, Trust Legal.

**Answer**: You do. The trust (and each school) is the Data Controller; we act as Data Processor. Your data is your data — we never claim "derived insights" or "training data" as ours. On termination, we return all data in machine-readable format and delete our copies within 90 days.

---

### Q11. "Do you have a Data Processing Agreement ready?"

**Who asks**: DPO.

**Answer**: Yes. We provide a MAT-ready DPA as part of every proposal. It's designed to be signed once at trust level and cover all activated schools — your DPO reviews once, not every time a school joins. Happy to send it to your DPO in advance of the scoping meeting so review can start in parallel with pilot planning.

---

### Q12. "Are you Cyber Essentials certified?"

**Who asks**: IT Lead, DPO.

**Answer**: [VERIFY current status — do not claim certification you do not hold.] If certified: yes, and our certificate is available on request. If not: we meet the Cyber Essentials controls and are on a current path to certification, with expected completion by [date].

**Internal note**: Never misrepresent certification status. A single false claim will end the deal and damage reputation across the sector.

---

### Q13. "What is your approach to pupil data in AI/ML?"

**Who asks**: DPO, Director of Education.

**Answer**: We do not use identifiable pupil data to train machine learning models. Where anonymised, aggregate data is used for product improvement, it is fully and irreversibly anonymised. No pupil-identifiable data leaves our production environment for model training. This is written into our DPA.

---

### Q14. "How do you handle a data breach?"

**Who asks**: DPO, IT Lead.

**Answer**: We have a documented incident response plan. In the event of a confirmed personal data breach affecting your data, we will notify you within 72 hours with the initial information available. You remain the Data Controller responsible for ICO notification if required. Our plan is tested at least annually via tabletop exercise.

---

### Q15. "What's your approach to safeguarding and KCSIE compliance?"

**Who asks**: DSL, Director of Education.

**Answer**: The platform is designed in line with Keeping Children Safe in Education guidance. All pupil-facing content is curated by our curriculum team or by the school — pupils cannot access arbitrary external content through the platform. Administrative logs support filtering and monitoring expectations. Any concerning pupil-generated content can be surfaced through our flagging system. Full KCSIE-alignment statement available on request.

---

## Technical and integration

### Q16. "What MIS systems do you integrate with?"

**Who asks**: IT Lead, Head of English, Data Lead.

**Answer**: Out of the box: SIMS, Arbor, Bromcom via [Wonde and direct integrations — VERIFY current list]. We read pupil data (names, year groups, classes, UPN) so teachers don't need to set up accounts manually. Write-back of assessment data to MIS is available as a chargeable add-on for schools that want it.

---

### Q17. "Do you support single sign-on?"

**Who asks**: IT Lead.

**Answer**: Yes. Google Workspace, Microsoft 365, and SAML 2.0 out of the box. Custom SSO available on request. MFA can be enforced for administrative accounts.

---

### Q18. "What about accessibility?"

**Who asks**: SEND Lead, Director of Education, IT Lead.

**Answer**: We target WCAG 2.1 AA conformance. Our accessibility statement is published on the product site [VERIFY up to date]. We test with automated tools in CI and with periodic manual assistive-technology testing. Where accessibility gaps are identified, they are logged and addressed. Happy to share our latest audit summary with your SEND team.

---

### Q19. "What devices do pupils need?"

**Who asks**: IT Lead, Head of English.

**Answer**: The platform runs in any modern web browser on desktop, laptop, Chromebook, iPad, or Android tablet. No native app install required. Minimum supported browsers: [VERIFY current list]. We are designed to work on the typical device mix in English state secondary schools.

---

### Q20. "What's your uptime record?"

**Who asks**: IT Lead, CFO, Director of Education.

**Answer**: Our target is 99.5% monthly uptime (99.9% for flagship trusts). Our rolling 12-month average is [VERIFY — provide actual number]. We publish a public status page [VERIFY URL]. Service credits apply where we miss monthly targets.

---

### Q21. "What support do you offer?"

**Who asks**: Head of English, Director of Education, IT Lead.

**Answer**: UK-based support during school hours (07:30–18:00 GMT, Monday to Friday) via email, in-product, and telephone. Response SLA: priority 1 under 1 hour, priority 2 under 4 hours, priority 3 under 1 business day. All MATs with 10+ schools get a named Customer Success Manager. Smaller trusts share a pooled CSM team.

---

### Q22. "What's included in onboarding?"

**Who asks**: Director of Education, Head of English.

**Answer**: For each school: 2 days of teacher training (usually on INSET day or after-school), content import assistance, data setup, and access configuration. For MATs doing bulk onboarding, we offer a fixed £7,500 package covering up to [verify] schools in one rollout wave. A dedicated onboarding project manager is available for £5,000 flat regardless of trust size.

---

## Contractual and legal

### Q23. "What are your termination rights?"

**Who asks**: Trust Legal, Procurement.

**Answer**: Either party may terminate for material unremedied breach on 30 days' written notice. Our multi-year frameworks are committed for the full term — early exit costs the remainder of the current annual period plus 50% of the next annual period. Individual schools can leave without penalty if the school transfers out of the trust (the school's data moves with them and your invoice adjusts at the next anniversary).

---

### Q24. "What happens if you go out of business?"

**Who asks**: CFO, Procurement, Trust Legal.

**Answer**: A fair question. We maintain a source code escrow arrangement [VERIFY — implement if not already in place] so that in the unlikely event of insolvency, customers retain access to a documented copy of the code and data export scripts. Our financials are available under NDA if your trust board wants to assess our going concern.

---

### Q25. "Will you sign our standard T&Cs?"

**Who asks**: Procurement, Trust Legal.

**Answer**: We work with standard MAT and public-sector procurement terms wherever possible. Our framework agreement has been written to be compatible with typical trust procurement requirements. Where a trust has non-negotiable bespoke clauses, we negotiate in good faith. We can't sign anything that creates uncapped liability, asymmetric indemnities, or most-favoured-nation clauses — these break the economics of our business.

---

### Q26. "Do you have professional indemnity and cyber insurance?"

**Who asks**: Procurement.

**Answer**: Yes. Professional indemnity £[VERIFY]m and cyber liability £[VERIFY]m per claim and in the aggregate. Certificates of insurance available on request.

---

### Q27. "Does TUPE apply?"

**Who asks**: Procurement, Trust Legal.

**Answer**: In almost all cases, no. We are a SaaS provider — our staff are not assigned to your trust, they work across the whole customer base. TUPE is an employment-law regime that applies to labour-intensive service transfers, not asset-based software supply. Full reasoning in our TUPE notes, available on request.

**Internal note**: Refer to `tupe-considerations.md`.

---

## Sector and outcomes

### Q28. "Who else is using this?"

**Who asks**: Director of Education, CEO, Head of English.

**Answer**: [VERIFY — provide honest current customer footprint.] We can provide references from [N] schools and [M] MATs. Our longest-standing customer has been with us for [X] years. References are named customers with signed consent — happy to put you in touch directly.

---

### Q29. "What's your evidence base / research foundation?"

**Who asks**: Director of Education, Head of English.

**Answer**: Our curriculum is designed by teachers and curriculum specialists with direct classroom experience, and is explicitly grounded in the Ofsted research review for English and the Education Endowment Foundation's guidance reports on literacy. We don't claim our platform is a miracle — what we do claim is that the underlying pedagogy reflects current best evidence, and the analytics layer lets trusts measure impact honestly over time.

---

### Q30. "What are your differentiators vs. [competitor]?"

**Who asks**: Everyone.

**Answer**: (Tailor to the specific competitor named.) Our answer always has three layers: (1) we're built for the MAT layer, not the single-school layer — our data model, pricing, and procurement approach were designed for trust-wide operation from day one; (2) we cover curriculum, assessment, and analytics in one platform, replacing a typical fragmented stack of 3–5 tools; (3) we are transparent about what we are and aren't — we don't claim to be a revision tool, a behaviour platform, or a replacement for qualified teaching. We do one thing well: trust-wide secondary English.

**Internal note**: Refer to `competitor-comparison.md` for specific answers against named competitors.

---

## How to use this document

- **Send as a PDF** titled "MAT Procurement Questions — The English Hub" with the specific trust name on the cover.
- **Review it before every sales cycle** to make sure all [VERIFY] items are current.
- **Add new questions** that come up in live procurement cycles, so the next deal is easier.
- **Offer a 30-minute call** with our operational lead or CFO for any question the prospect isn't satisfied with in writing.
- **Never bluff.** If we don't have a confident answer, say so, commit to a date, and follow up.

---

## Questions to add to the next version

(Update this list as new questions arrive from live deals.)

- [ ]
- [ ]
- [ ]
