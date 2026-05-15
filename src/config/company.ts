/**
 * Central source of truth for company / legal / contact details.
 *
 * Previously these strings were duplicated across:
 *   - src/lib/i18n/dictionary.ts (footer.company_registration, etc.)
 *   - src/lib/email-templates.ts (registration footer)
 *   - src/lib/email/affiliate-welcome.ts (entity footer)
 *   - src/lib/weekly-report.ts (operator footer)
 *   - Multiple individual page.tsx files
 *
 * Every public-facing reference to legal name, company number, ICO
 * registration, or contact email should import from here. If any of
 * these values change (e.g. registered office is later disclosed), one
 * edit cascades everywhere.
 *
 * VERIFIED 2026-05-15:
 *   - Companies House 16511479 is the ONLY company number used in the
 *     codebase. The 16254656 number referenced in early audit prompts
 *     does NOT appear anywhere in src/ and is not a real conflict.
 *   - ICO registration ZC016690 is consistent across all email and
 *     legal copy.
 *
 * TODO(founder): confirm registered-office disclosure policy. Currently
 *   the office is "available via Companies House" / "available on request"
 *   to keep the founder's home address off the public site. If the
 *   business takes a registered office address (e.g. a serviced-office
 *   provider), set `registeredOfficePublic` and surface it.
 */

export interface CompanyConfig {
  /** Legal entity registered at Companies House. */
  legalName: string
  /** Public-facing trading brand. */
  tradingName: string
  /** Companies House registration number. */
  companyNumber: string
  /** Pre-formatted "Company No. NNNN" string, ready to paste into footers. */
  companyNumberLabel: string
  /** ICO (Information Commissioner's Office) data-protection registration. */
  icoRegistration: string
  /** Jurisdiction of registration — for press / legal copy. */
  registeredCountry: string
  /** Friendly description of where the registered office is disclosed. */
  registeredOfficePolicy: string
  /**
   * If/when a public registered office address is adopted, set this and
   * pages that today say "on request" will switch automatically.
   */
  registeredOfficePublic: string | null
  /** Year the company was founded. */
  foundedYear: number
  /** Trading website canonical URL. */
  websiteUrl: string

  // ── Contact addresses ───────────────────────────────────────────
  /** General contact / sales / schools enquiry. */
  contactEmail: string
  /** Customer support / product questions. */
  supportEmail: string
  /** Press / media enquiries. */
  pressEmail: string
  /** Privacy / data-protection enquiries (used in legal pages). */
  privacyEmail: string
  /** Legal / compliance pack requests. */
  legalEmail: string
  /** Founder-routed mailbox (current operator contact). */
  operatorEmail: string

  // ── Pre-formatted strings for direct paste into JSX/templates ──
  /** Single-line footer string for emails: "Upskill Energy Limited · Co. 16511479 · ICO ZC016690". */
  emailFooterLine: string
  /** Long-form sentence: "Upskill Energy Limited · Co. 16511479 · ICO ZC016690 · Registered in England & Wales · Registered office on request". */
  fullDisclosureLine: string
}

export const COMPANY: CompanyConfig = {
  legalName: 'Upskill Energy Limited',
  tradingName: 'The English Hub',
  companyNumber: '16511479',
  companyNumberLabel: 'Company No. 16511479',
  icoRegistration: 'ZC016690',
  registeredCountry: 'England & Wales',
  registeredOfficePolicy: 'Registered office address available via Companies House',
  registeredOfficePublic: null,
  foundedYear: 2024,
  websiteUrl: 'https://theenglishhub.app',

  contactEmail: 'info@upskillenergy.com',
  supportEmail: 'support@theenglishhub.app',
  pressEmail: 'press@theenglishhub.app',
  privacyEmail: 'privacy@theenglishhub.app',
  legalEmail: 'legal@theenglishhub.app',
  operatorEmail: 'info@upskillenergy.com',

  emailFooterLine: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
  fullDisclosureLine:
    'Upskill Energy Limited · Co. 16511479 · ICO ZC016690 · Registered in England & Wales · Registered office available via Companies House',
} as const

/** 80–120-word company boilerplate for press releases and partner-pack pages. */
export const COMPANY_BOILERPLATE = `The English Hub is an independent English learning platform for GCSE, IGCSE, KS3 and EAL students, teachers and schools. It combines verified English resources, AI-assisted feedback, exam-style practice, teacher tools, class analytics, mock exams, reading and writing support, and school-level progress reporting. The platform is exam-board aligned, not exam-board endorsed, and supports AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. The English Hub is a trading brand of Upskill Energy Limited (Companies House 16511479), registered in England & Wales and registered with the ICO under ZC016690.`

/**
 * Founder quote used on the Press page and Pilot Pack. Single source so
 * if it changes, every page picks up the update.
 */
export const FOUNDER_QUOTE = {
  body: `English support should be clearer, more targeted and easier for teachers to act on. The English Hub is being built to help students practise with confidence and help schools see where support is needed earlier.`,
  attribution: 'Calum Johnson, Founder, The English Hub',
} as const
