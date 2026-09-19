/**
 * Types for `claim-lint.mjs`.
 *
 * The lint is plain JavaScript so that ONE implementation serves both the app
 * and the drafting script. There is no TypeScript runner in this repository
 * (no tsx, no ts-node), so a `.ts` lint would have forced the script to carry
 * a second copy of every rule - and a second copy of a rule list is exactly how
 * `utm_source=ig` and the thirteen wrong commission figures happened.
 */

export type ClaimRuleId =
  | 'fabricated-proof'
  | 'grade-promise'
  | 'unsourced-statistic'
  | 'em-dash'
  | 'hype'
  | 'abbreviation'
  | 'trial-mechanic'
  | 'commission-rate'
  | 'price-mismatch'
  | 'mojibake'
  | 'missing-demo-label'
  | 'missing-spec-check'
  | 'length'
  | 'emoji'
  /**
   * Over the house hashtag ceiling for the platform (SOC-4). Not a platform
   * limit: the numbers come from section 6 of 01-Content-Pillars-and-Voice.md,
   * which describes itself as a starting hypothesis.
   */
  | 'hashtags'
  | 'missing-approval-header'

export interface ClaimFinding {
  rule: ClaimRuleId
  /** The offending text, quoted so the author can find it. */
  quote: string
  why: string
}

export interface ClaimReport {
  ok: boolean
  findings: ClaimFinding[]
  /** Stored on the row as `claim_report`, so an approval has evidence behind it. */
  checkedRules: ClaimRuleId[]
}

export interface LintInput {
  body: string
  platform: string
  /** Set false for an already-approved row being re-checked. */
  requireApprovalHeader?: boolean
  /**
   * Every price the product is permitted to quote, as plain strings.
   *
   * Injected rather than imported, because this module runs under plain Node
   * as well as inside the app. TypeScript callers derive it from
   * `src/constants/pricing.ts`; the script reads the same file. A test asserts
   * the two produce the same set.
   */
  permittedPrices?: string[]
}

export const PLATFORM_LIMITS: Record<string, number>

export function splitPosts(body: string): { label: string; text: string }[]

export function lintClaims(input: LintInput): ClaimReport
