# Virtual Data Room — Recommended Structure

**Purpose:** The VDR is the live, buyer-accessible version of the data room. This file describes the folder structure to set up when you open the VDR for a specific buyer.

**Platforms:**

| Platform | Cost | When to use |
|----------|------|-------------|
| **Dropbox / Google Drive** | Free / low | Informal early conversations; 1-buyer at a time; you trust the buyer |
| **Box** | Low | Similar to Dropbox with better audit logs |
| **Ideals VDR** | £££ | Competitive process with multiple buyers; need granular permissions and watermarking |
| **Datasite (formerly Merrill)** | ££££ | Larger deals (£5m+); investment banker-led process |
| **Firmex, Intralinks, Drooms** | ££-£££ | Mid-market alternatives |

**For The English Hub's first acquisition conversation:** start with **Google Drive** or **Dropbox**. It's free, it's fast, and the deal size doesn't justify a paid VDR. Upgrade only if a competitive process emerges.

---

## Core principles

1. **Mirror your internal data room structure.** The folder numbering matches `data-room/00-overview/`, `01-financials/`, etc. This makes the internal-to-external sync trivial.
2. **One folder per topic, one PDF per document.** Buyers hate loose files. Consolidate.
3. **Consistent file naming.** `YYYY-MM-DD_topic_version.pdf` is the standard.
4. **Index every folder.** A `00_INDEX.md` at the top of each folder lists what's inside and when it was last updated.
5. **Version control.** Never let "final_v2_really_final.xlsx" into the VDR.
6. **Watermark sensitive docs** with the buyer's name if the VDR supports it.
7. **Log every access** — know who viewed what and when.

---

## Folder structure

```
/The English Hub — Data Room/
│
├── 00_INDEX.md                              ← Top-level index. First thing buyer sees.
├── 00_NDA_executed.pdf                      ← Countersigned NDA for this buyer
├── 00_README_for_buyer.md                   ← Orientation note (2 paragraphs)
│
├── 01_Company_and_Strategy/
│   ├── 00_INDEX.md
│   ├── 01_investor_deck.pdf
│   ├── 02_one_pager.pdf
│   ├── 03_founder_bio.pdf
│   ├── 04_company_history.pdf
│   ├── 05_market_thesis.pdf
│   ├── 06_competitive_landscape.pdf
│   ├── 07_icp.pdf
│   ├── 08_roadmap_12mo.pdf
│   └── 09_vision_5yr.pdf
│
├── 02_Financials/
│   ├── 00_INDEX.md
│   ├── 01_historical_P&L_YYYY.xlsx
│   ├── 02_management_accounts_trailing_12.pdf
│   ├── 03_cap_table.pdf
│   ├── 04_arr_mrr_dashboard.pdf
│   ├── 05_unit_economics.pdf
│   ├── 06_pipeline_snapshot.pdf
│   ├── 07_budget_forecast.xlsx
│   ├── 08_bank_statements_last_6_months.pdf
│   ├── 09_tax_filings_summary.pdf
│   └── 10_revenue_by_customer.pdf           ← Under MSA / higher gate
│
├── 03_Legal_and_Corporate/
│   ├── 00_INDEX.md
│   ├── 01_companies_house_record.pdf
│   ├── 02_articles_of_association.pdf
│   ├── 03_shareholder_agreement.pdf
│   ├── 04_board_minutes_folder/
│   ├── 05_standard_customer_contract.pdf
│   ├── 06_customer_contracts_executed/
│   ├── 07_supplier_contracts/
│   ├── 08_ip_assignments/
│   ├── 09_employment_contracts/
│   ├── 10_contractor_agreements/
│   ├── 11_insurance_schedule.pdf
│   ├── 12_trademarks_and_domains.pdf
│   └── 13_disputes_log.md                   ← Usually: "None"
│
├── 04_Privacy_and_Compliance/
│   ├── 00_INDEX.md
│   ├── 01_privacy_policy.pdf
│   ├── 02_cookie_policy.pdf
│   ├── 03_data_map.pdf
│   ├── 04_sub_processors_list.pdf
│   ├── 05_gdpr_compliance_memo.pdf
│   ├── 06_childrens_code_assessment.pdf
│   ├── 07_dpias/
│   ├── 08_security_policy.pdf
│   ├── 09_incident_log.pdf
│   ├── 10_ico_registration.pdf
│   ├── 11_safeguarding_policy.pdf
│   └── 12_accessibility_audit.pdf
│
├── 05_Product_and_Technology/
│   ├── 00_INDEX.md
│   ├── 01_architecture_diagram.pdf
│   ├── 02_tech_stack_summary.pdf
│   ├── 03_codebase_walkthrough_video_link.txt
│   ├── 04_dependency_register.pdf
│   ├── 05_backup_and_dr_policy.pdf
│   ├── 06_uptime_last_12_months.pdf
│   ├── 07_security_practices.pdf
│   ├── 08_ai_usage_memo.pdf
│   └── 09_key_person_risk_mitigation.pdf
│
├── 06_Customers_and_Commercial/
│   ├── 00_INDEX.md
│   ├── 01_customer_list_anonymized.pdf    ← Public; named list is in 02_
│   ├── 02_customer_list_named.pdf         ← Higher gate; reveal post-LOI only
│   ├── 03_cohort_retention_chart.pdf
│   ├── 04_churn_analysis.pdf
│   ├── 05_sales_pipeline.pdf
│   ├── 06_case_studies/
│   ├── 07_customer_references_list.pdf    ← Contact details NOT in VDR; shared 1:1
│   └── 08_support_metrics.pdf
│
├── 07_Marketing/
│   ├── 00_INDEX.md
│   ├── 01_web_analytics_summary.pdf
│   ├── 02_seo_rankings.pdf
│   ├── 03_content_calendar.pdf
│   ├── 04_email_list_stats.pdf
│   ├── 05_cac_by_channel.pdf
│   └── 06_brand_assets/
│
├── 08_Team_and_HR/
│   ├── 00_INDEX.md
│   ├── 01_org_chart.pdf
│   ├── 02_team_list_anonymized.pdf
│   ├── 03_compensation_bands.pdf
│   ├── 04_equity_plan.pdf
│   ├── 05_employee_handbook.pdf
│   └── 06_retention_history.pdf
│
├── 09_Due_Diligence_Support/
│   ├── 00_INDEX.md
│   ├── 01_dd_qa_master.pdf                 ← This becomes the Q&A bible for the deal
│   ├── 02_anticipated_red_flags.pdf
│   ├── 03_buyer_q_log_live.xlsx            ← Updated as the buyer asks questions
│   ├── 04_key_person_risk_mitigation.pdf
│   └── 05_diligence_checklist_status.pdf
│
└── 10_Archive/                               ← Old versions, superseded drafts
```

---

## Index file template (`00_INDEX.md` at folder level)

```markdown
# Folder: [Folder Name]

Last updated: YYYY-MM-DD

| # | Document | Last updated | Notes |
|---|----------|--------------|-------|
| 01 | investor_deck.pdf | YYYY-MM-DD | Current version |
| 02 | one_pager.pdf | YYYY-MM-DD | |
| ... | | | |
```

The top-level `00_INDEX.md` also includes an orientation note:

```markdown
# The English Hub — Data Room

Welcome. This data room is organised to mirror the structure of our internal diligence pack.

**Quickest path:**
- For business overview → `01_Company_and_Strategy/`
- For financials → `02_Financials/`
- For the pre-prepared Q&A → `09_Due_Diligence_Support/01_dd_qa_master.pdf`

**Contact for questions:** [founder email]
**Response time target:** 24h on weekdays
```

---

## Permissions model

Most VDRs support per-folder permissions. Suggested gating for a typical process:

| Folder | Stage to reveal |
|--------|-----------------|
| 01 Company & Strategy | Initial buyer meeting (after NDA) |
| 02 Financials (summary) | Initial diligence |
| 02 Financials (named customer revenue) | Post-LOI / IOI |
| 03 Legal (standard contracts) | Initial diligence |
| 03 Legal (executed customer contracts) | Post-LOI / IOI |
| 04 Privacy & Compliance | Initial diligence |
| 05 Product & Technology | Initial diligence (high level) / detail post-LOI |
| 06 Customers (anonymized) | Initial diligence |
| 06 Customers (named) | Post-LOI / IOI |
| 07 Marketing | Initial diligence |
| 08 Team & HR | Post-LOI / IOI |
| 09 DD Support | Initial diligence |

Never put personal data (employee names, customer personal details, home addresses) in the data room. The legal register refers to these by ID and sensitive details are shared under a separate signed confidentiality gate.

---

## Audit / activity log

Whatever VDR you use, set up the activity log from day one:

- Who accessed the VDR
- When
- Which files
- How long they spent
- Whether they downloaded anything

This is intelligence. A buyer who downloads everything on day 1 and then goes silent is different from one who asks thoughtful questions in week 2.

---

**Owner:** Founder
**Last reviewed:** FILL IN
