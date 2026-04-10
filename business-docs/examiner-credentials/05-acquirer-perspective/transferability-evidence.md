# Evidencing transferability — what the data room must contain

**Audience:** Founders, company secretary, deal team, and whoever owns the data room when an exit process is running.
**Purpose:** A concrete checklist of the documents, indexes and structures a data room must contain so that a buyer can satisfy themselves that the examiner credentials transfer with the company on a share sale (or on an asset sale, with appropriate adaptations).

> The underlying principle is simple: an asset **transfers** if, after completion, the buyer can use it without the cooperation of any third party. The evidence in the data room needs to demonstrate exactly that for every element of the examiner credential.

---

## 1. The four things that must transfer

Recall the four components of the examiner credential (from the `README.md`):

| # | Component | Transfer mechanism |
|---|---|---|
| A | The content itself | Written IP assignment in the contributor agreement |
| B | The right to describe the contributor | Perpetual, irrevocable, transferable marketing licence in the contributor agreement |
| C | Evidence of the credential | Evidence file stored by the company (not the founder personally) |
| D | The ongoing relationship | Not essential; helpful if it continues but not a deal-breaker if it doesn't |

The data room must evidence (A), (B) and (C). (D) is a nice-to-have and is addressed through informal contributor introductions during the sale process.

## 2. Data room structure for the examiner credential stream

Inside the main data room, create a dedicated top-level folder, for example `08-Examiner-Credentials/`. Inside it, mirror the structure of this `examiner-credentials/` working folder, with clear separation between templates and signed instances.

```
08-Examiner-Credentials/
├── 00-Overview/
│   ├── Programme-summary-memo.pdf        (a short CEO memo — see section 5 below)
│   ├── Register-extract.pdf              (the current examiner register, export)
│   └── Transferability-statement.pdf     (a one-page legal confirmation — see section 6)
├── 01-Templates/
│   ├── Examiner-Contributor-Agreement-Template.pdf
│   ├── Examiner-Advisor-Agreement-Template.pdf
│   ├── Historic-Retrospective-Assignment-Template.pdf
│   └── Freelance-Writer-Agreement-Template.pdf
├── 02-Signed-Agreements/
│   ├── Contributors/
│   │   ├── EH-001-[lastname]-[firstname]-Contributor.pdf
│   │   ├── EH-002-[lastname]-[firstname]-Contributor.pdf
│   │   └── ...
│   ├── Retrospective-Assignments/
│   │   ├── EH-005-[lastname]-[firstname]-Retrospective.pdf
│   │   └── ...
│   ├── Advisors/
│   │   └── ...
│   └── Freelance-Writers/
│       └── ...
├── 03-Verification-Files/
│   ├── EH-001/
│   │   ├── CV.pdf
│   │   ├── Appointment-letter-(redacted).pdf
│   │   ├── LinkedIn-snapshot-YYYY-MM-DD.pdf
│   │   ├── Biography.docx
│   │   ├── Photograph.jpg
│   │   └── Verification-summary.pdf
│   ├── EH-002/
│   └── ...
├── 04-Marketing-Claims-Reviews/
│   ├── Published-assets-index.xlsx
│   └── Reviews/
│       ├── Landing-page-gcse-English.pdf
│       ├── Blog-post-how-to-band-6.pdf
│       └── ...
└── 05-Incidents-and-Disputes/
    └── (empty if clean; otherwise one folder per incident with the complaint and resolution)
```

## 3. The register extract

The register is the navigational heart of the stream. The extract in `00-Overview/` should be the CSV exported as a polished PDF table with columns optimised for the buyer's lawyer:

- Internal ID
- Full name
- Role (contributor / advisor / freelance writer)
- Board(s) and subject(s)
- Role level and years
- Agreement type
- Agreement signed? (Y/N, date)
- Retrospective assignment? (Y/N, date)
- IP assignment in place (Y/N)
- Verification complete (Y/N)
- Marketing rights granted (Y/N)
- Currently active in marketing (Y/N)
- Last reviewed date

**Every entry in the register must have a cross-reference to its signed agreement folder and its verification folder.** A buyer's lawyer will sample rows at random and ask to see the underlying files. The lookup must take under a minute.

## 4. The verification file per contributor

For each contributor folder in `03-Verification-Files/`, the contents should be:

- **CV.pdf** — received directly from the contributor
- **Appointment-letter-(redacted).pdf** — if available
- **LinkedIn-snapshot-YYYY-MM-DD.pdf** — dated screenshot
- **Biography.docx** — approved biography text
- **Photograph.jpg** — approved marketing photograph
- **Verification-summary.pdf** — a short one-pager completed by the verifying staff member, with:
 - Contributor name and internal ID
 - Claimed credentials (copied from CV)
 - Methods used to verify (tick-list)
 - Discrepancies found (and how resolved)
 - Verifier 1 name, signature and date
 - Verifier 2 name, signature and date
 - Marketing rights confirmation (i.e. biography and photograph are authorised for use)
 - Next review date

The verification summary is the single page a buyer's lawyer will take away and file in their own review notes. Make it clean and professional.

## 5. The programme summary memo

A short memo — ideally under three pages — from the CEO (or General Counsel once appointed) covering:

1. **Scope.** What the examiner credential programme covers.
2. **Population.** How many contributors total, broken down by agreement type and by current/historic status.
3. **Agreement coverage.** What percentage of contributors have a signed agreement. If less than 100%, an explanation for each gap.
4. **Verification coverage.** What percentage have a complete verification file. If less than 100%, an explanation for each gap.
5. **Process.** The marketing review process, with a reference to the review template and a note that records are retained for six years.
6. **Incidents.** Any incidents or complaints, with their resolution. If none, say so explicitly.
7. **Forward plan.** Any remediation in progress and the timeline for completion.
8. **Management representation.** A statement that the CEO believes the population and agreements on file to be complete and accurate to the best of their knowledge as at the date of the memo.

This memo is the first document the buyer's lawyer reads in this stream. Get it right and the rest of the diligence flows smoothly.

## 6. The transferability statement

A one-page document confirming, in plain legal English, that:

- All contributor agreements contain a present-tense, irrevocable assignment of IP in favour of The English Hub Ltd.
- All contributor agreements contain a perpetual, irrevocable, transferable marketing rights licence in favour of The English Hub Ltd.
- None of the agreements contain a change-of-control termination right that would trigger on a share sale of The English Hub Ltd.
- The rights and licences granted under the agreements will continue in full force and effect after a share sale without the need for any third-party consent.
- All personal data processed under the agreements is processed lawfully under an appropriate lawful basis and the transfer of that data to a successor is lawful under the UK GDPR.

Ideally, this statement is signed by the company's solicitor on letterhead. If budget does not allow that at the stage the data room is built, the CEO may sign it in draft form and the solicitor can formalise it during the exclusivity period.

## 7. What a share sale changes — and what it doesn't

Under a share sale, the company itself (the legal entity, The English Hub Ltd) changes hands. The company remains the same contracting party for every contributor agreement. No assignment of the agreement is required. The IP assignment clauses are already complete — the company already owns the IP and continues to own it. The marketing rights licence is granted to "the Company", which remains the same legal person.

Under an **asset sale**, by contrast, the contracts themselves would need to be novated or assigned to the buyer. The contributor agreement in this pack includes a company-side assignment clause (clause 13.3) that permits this without contributor consent, but a sophisticated buyer will still prefer a share sale for this reason. If an asset sale is proposed, the deal team should flag early that additional novation admin will be required.

## 8. What happens during exclusivity

Between signing and completion, the deal team should expect the buyer's lawyers to:

- Sample 5–15 contributor files at random for full review.
- Ask questions about any gaps in the register.
- Request the verification summaries as a bundle for internal circulation.
- Possibly seek direct confirmation from one or two named contributors that they are comfortable with the relationship (this is sensitive — it must happen under NDA and under the founder's control).
- Confirm the transferability statement with the company's solicitor.

If the programme has been maintained properly, this phase takes a few hours of the deal team's time. If the programme has not, it can take weeks and can precipitate a renegotiation.

## 9. Post-completion

Immediately after completion, the buyer should be handed:

- A fresh export of the register as at the completion date.
- Confirmation that no new contributor engagements have occurred in the period between signing and completion that have not been disclosed.
- A handover note explaining who owns the register going forward in the combined business.
- The login credentials or access permissions to the contributor evidence storage system.

None of this is the founder's job after completion, strictly speaking, but offering it proactively signals a clean handover and helps preserve the goodwill that makes earnouts and integration work.

---

**See also:**

- `why-buyers-care.md` — the rationale
- `diligence-questions-anticipated.md` — the questions the data room is answering
- `../04-evidence/cv-verification-procedure.md` — how the verification files are built
- `../01-why-this-matters.md` — the valuation case
