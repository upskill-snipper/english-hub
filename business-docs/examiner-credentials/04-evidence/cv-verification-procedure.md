# Procedure for verifying examiner credentials

**Audience:** CEO, Head of Content, whoever onboards examiner contributors.
**Purpose:** To ensure every claim we make about an examiner's credentials is supported by primary evidence held on file.

> **The test:** For every person on the examiner register (`examiner-register.csv`), we should be able to hand a buyer's diligence lawyer a file within five minutes that contains at least three of the five items in section 3 below. If we cannot, the person should not be named in marketing, full stop.

---

## 1. Why verification matters

A contributor may tell us, in good faith, that they are "an AQA examiner". What that actually means varies enormously:

- They mark scripts once a year for a single GCSE paper.
- They are a senior examiner setting questions and chairing standardisation.
- They were an examiner five years ago but have since stepped down.
- They applied to be an examiner, trained, but never actually marked.
- They are a teacher who has colleagues who are examiners and describes themselves loosely.

All five of those people might honestly answer "yes" to "are you an AQA examiner?" but only the first three can be safely described to our customers as such. Only the first two are currently examiners. None of them can be described as an "AQA-approved author". And none of them can describe the *board* as endorsing us.

Verification is about catching these distinctions **before** they end up in marketing copy, not after.

## 2. Who verifies

- **First pass:** the person onboarding the contributor (typically the Head of Content or, at early stage, the CEO).
- **Second pass:** before the contributor is named in any public marketing, a **different** person re-checks the file. Two pairs of eyes, always.
- **Annual refresh:** the whole register is reviewed every 12 months and out-of-date entries are flagged.

## 3. The evidence file — what to collect

For every contributor, assemble an electronic file containing as many of the following as possible. **A minimum of three items is required before the contributor may be named publicly.**

### 3.1 CV (required)

- Received **from the contributor directly** (not scraped from a website).
- Preferably on letterhead or as a PDF with the contributor's signature.
- Must list:
 - Full legal name
 - Academic qualifications (with institutions and dates)
 - Professional teaching qualifications (QTS, PGCE, etc.)
 - Employment history including any school or university roles
 - **Explicit statement** of examiner appointments: board, subject, specification, year range, role level
- If the CV is more than 12 months old, request an updated version.

### 3.2 Copy of appointment letter or examiner contract (strongly preferred)

- Many boards issue annual appointment letters when an examiner is re-contracted for a season. A current or recent letter is the best single piece of evidence.
- We accept a redacted copy if the contract contains commercially sensitive information; redaction should leave the board name, subject, role and dates visible.
- **Do not ask for or accept** a letter that contains confidential details of unreleased papers, confidential mark schemes or candidate data. If redaction is needed to protect that material, ask for it.

### 3.3 Exam board reference letter (ideal but not always available)

- Some contributors can request a short confirmation letter from the board's examiner liaison team confirming they hold an appointment.
- We do not pressure contributors to request this; it is an inconvenience for them. But where it exists, it is the strongest evidence.

### 3.4 LinkedIn profile screenshot (supporting evidence only)

- Save a screenshot of the contributor's LinkedIn profile dated the day of verification, showing examiner experience listed.
- This is **supporting evidence**. It is not sufficient on its own because LinkedIn profiles are self-declared.
- Check for internal consistency with the CV: if the CV says "senior examiner 2018–present" and LinkedIn says "examiner 2021–", flag the discrepancy and resolve with the contributor before proceeding.

### 3.5 Published examiner report, paper authorship credit, or similar public footprint

- Many senior examiners are publicly identifiable — chief examiner reports are published with names, past paper authorship is sometimes credited, and academic publications may mention their board role.
- A reference to the contributor on an awarding organisation's public website is strong corroboration.

### 3.6 Photograph and written biography (for marketing use)

- Collect a professional photograph and a written biography from the contributor **with written permission to use them** (covered by the marketing clause in the contributor agreement).
- The biography should match the verified CV — if the CV says "former AQA examiner" and the biography says "AQA examiner" (present tense), reconcile before publishing.

## 4. Red flags

If any of the following appear, escalate before proceeding.

- **Reluctance to share a CV.** Legitimate examiners are proud of their experience. Unwillingness is a signal.
- **Vague answers about which board or which subject.** Specific appointments are specific.
- **LinkedIn profile significantly inflated compared to CV.** A common pattern: "Senior examiner, AQA" on LinkedIn; "marked scripts for a couple of seasons" in reality.
- **Contributor claims to have "seen" unreleased papers or mark schemes.** This is a confidentiality red flag and a potential fabrication red flag at the same time. Disengage and refer back to `exam-board-confidentiality-notes.md`.
- **Contributor claims the board "endorses" their work.** This is nonsense — boards do not endorse individual examiners' commercial activities. If the contributor is claiming endorsement, the claim is wrong or they misunderstand their role.
- **Contributor cannot remember their line manager or standardisation lead at the board.** Real examiners remember these people.
- **Contributor provides a reference letter on plain paper with no verifiable contact details.** Fake.
- **Contributor demands payment upfront before providing verification documents.** Disengage.

## 5. The verification steps, in order

1. **CV request.** Send the template letter in `sample-cv-request-letter.md`. Ask for a signed CV and any appointment letters.
2. **CV review.** Read the CV carefully. Note the claimed board(s), subject(s), specification(s), role level(s) and date range. If anything is vague, email back and ask for clarification **in writing**.
3. **Cross-check LinkedIn.** Load the LinkedIn profile, screenshot it, compare. Any discrepancy: email the contributor and ask them to reconcile.
4. **Cross-check public sources.** Google the contributor's name plus "examiner" plus the board. Look for chief examiner reports, paper authorship, conference bios.
5. **Cross-check qualifications.** Where possible, verify the claimed academic/professional qualifications — university alumni directories, teaching registers, published theses.
6. **Seek board confirmation (optional).** Where the contributor is willing, ask them to request a short confirmation letter from the board.
7. **Log the verification in the register.** Fill in the relevant columns in `examiner-register.csv` — `verification_method`, `verification_date`, `verified_by`, `cv_on_file`, etc.
8. **File the evidence.** Store everything in a single folder per contributor, named `EH-nnn-lastname-firstname`, in the secure contributor evidence area. Access controlled to named staff only.
9. **Second pair of eyes.** Before the contributor is named publicly, a second person reviews the file and countersigns the register entry.
10. **Calendar a refresh.** Set a recurring task to review the file in 12 months.

## 6. What to do if verification fails

If the contributor cannot or will not provide sufficient evidence:

- **Do not name them in marketing.** Ever, under any circumstances.
- **They may still contribute content** under the Freelance Writer Agreement (not the Examiner Contributor Agreement). Their contributions will be credited, if at all, generically (e.g. "written by a qualified English teacher").
- **Do not backfill the register** with optimistic placeholder entries. Leave the cells blank and move on.
- **Inform the contributor** politely that until verification is complete we will not be able to describe them using the examiner framing. Most legitimate contributors respond by producing the missing evidence.

## 7. Data protection

The evidence file contains personal data and, in some cases, information about a third-party (the awarding organisation). Handle it accordingly:

- Store in a controlled-access folder.
- Keep the retention period limited — seven years beyond the end of the contributor relationship is a reasonable default, aligned with the limitation period for contract claims.
- Delete photographs and biographies on written request if the contributor withdraws permission (subject to the practical lead time allowed in the contributor agreement).
- Include the contributor in the company's privacy notice for contributors.

## 8. Records for diligence

Maintain a one-page summary per contributor that a buyer's lawyer can read in two minutes:

- Name, role, board, role level, date range
- Verification method(s) used
- Documents held
- Agreement signed, date, IP assignment in place
- Marketing rights granted, photograph/bio on file
- Verifier 1 and verifier 2 initials
- Date of last review

A ring-bound or PDF-compiled version of these summaries — kept up to date — is the single best thing to have ready for data-room day one.

---

**See also:**

- `examiner-register.csv` — the register itself
- `sample-cv-request-letter.md` — the outreach template
- `../02-agreements/examiner-contributor-agreement-template.md` — the agreement that follows verification
