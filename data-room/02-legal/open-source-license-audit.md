# Open Source Licence Audit

> **TEMPLATE ONLY — NOT LEGAL ADVICE.** This is a working template for The English Hub Ltd to audit open-source software used in its product and internal tooling. A qualified technology / IP solicitor should review any questions about copyleft obligations or the distribution of modified OSS in a commercial product.

---

## Purpose

Open source licences carry obligations — some are almost trivial (attribution), others can be material (copyleft source disclosure). Investors, acquirers, and customers now routinely ask for an OSS audit as part of technical due diligence.

This document captures:

1. The OSS dependencies used in the product and key supporting tools.
2. The licence each is released under.
3. The obligations that licence creates for The English Hub.
4. Whether any action is required (attribution file, source disclosure, notice, etc.).

## Licence categories

| Category | Examples | Key obligations | Typical risk |
|---|---|---|---|
| **Permissive** | MIT, Apache 2.0, BSD-2-Clause, BSD-3-Clause, ISC | Attribution; include licence text; (Apache 2.0) include NOTICE file; no modification source disclosure | Low |
| **Weak copyleft** | LGPL, MPL 2.0 | Source disclosure for modified files of the licensed component itself; dynamic linking usually OK | Medium |
| **Strong copyleft** | GPL 2.0, GPL 3.0 | Distribution of linked/derived works must be offered under the same licence, including source code | High — often incompatible with closed-source SaaS that is _distributed_ |
| **Network copyleft** | AGPL 3.0 | Strong copyleft that is triggered by providing network access to a modified version | High for SaaS — triggers even without binary distribution |
| **Creative Commons** | CC-BY, CC-BY-SA, CC0 | Attribution (and Share-Alike where applicable) | Usually content not code |
| **Non-standard / custom** | Elastic, Commons Clause, SSPL, BSL | Often restrict SaaS use | Read carefully |

> **Rule of thumb:** GPL and AGPL dependencies should be flagged. SaaS distribution generally avoids the GPL's distribution trigger, but AGPL is explicitly designed to apply to SaaS.

---

## Inventory template

Populate one row per direct dependency at minimum. Transitive dependencies should be captured via an SBOM (e.g. `cyclonedx`, `syft`, `license-checker`) and referenced.

| # | Package | Version | Used in | Licence | Licence category | Modified? | Obligations triggered | Action required | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | REPLACE WITH PACKAGE | REPLACE | Web app | REPLACE | Permissive | No | Attribution | Add to NOTICES | REPLACE | Open |
| 2 | REPLACE WITH PACKAGE | REPLACE | Backend API | REPLACE | Strong copyleft | No | Distribution / source | Remove or isolate | REPLACE | Open |
| 3 | REPLACE WITH PACKAGE | REPLACE | Mobile app | REPLACE | Weak copyleft | No | LGPL dynamic link | Verify dynamic | REPLACE | Open |
| 4 | REPLACE WITH PACKAGE | REPLACE | Curriculum content | CC-BY 4.0 | Creative Commons | Yes | Attribution | Add credit in footer | REPLACE | Open |
| 5 | REPLACE WITH PACKAGE | REPLACE | Internal tooling | REPLACE | Permissive | No | Attribution | Internal use only | REPLACE | Closed |

---

## Audit workflow

1. **Generate an SBOM** for each repo in the product (`npm ls --all`, `pip freeze`, `go mod graph`, or use an SBOM tool).
2. **Run a licence checker** (e.g. `license-checker` for npm, `pip-licenses` for Python, `go-licenses` for Go).
3. **Export to CSV** and reconcile against this file.
4. **Flag strong copyleft and network copyleft** dependencies for review.
5. **For each flagged item:**
   - Confirm the licence from the upstream source (package registries are not authoritative).
   - Check whether it is actually used at runtime (some dev-only deps are not distributed).
   - Decide whether to keep, replace, or isolate the dependency.
6. **Add required attribution** to a `NOTICES.md` / third-party notices page in the product.
7. **Keep a dated audit log** — investors will ask for it.

## Red flag checklist

- [ ] No GPL / AGPL dependencies in any shipped binary or SaaS service without specific legal review.
- [ ] All permissive licences have attribution in a user-accessible NOTICES file.
- [ ] No "custom" or "non-OSI" licences without review.
- [ ] Content (images, audio, fonts, translations) has the same audit applied — CC-BY-SA and ND licences are often missed.
- [ ] Fonts are licensed for web embedding / app use.
- [ ] AI-generated training data provenance and licensing is documented.
- [ ] No licence-changed projects (e.g. former-Apache-now-BSL) being used in a way inconsistent with the new licence.

## Audit log

| Date | Auditor | Scope | Summary | Issues found | Remediation |
|---|---|---|---|---|---|
| REPLACE WITH DATE | REPLACE | Full product stack | REPLACE | REPLACE | REPLACE |

## Version

Template version: 1.0.
Last updated: REPLACE WITH DATE.
