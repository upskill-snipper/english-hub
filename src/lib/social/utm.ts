/**
 * Build a tagged outbound link, or refuse.
 *
 * WHY THIS IS CODE AND NOT A HABIT (ANA-4 / AUTO-7, 19 September 2026). The KPI
 * framework's §8 sets five rules and two closed vocabularies. Nothing enforced
 * them, and the consequence is already in the database: of the 11 profiles
 * carrying an attribution, one arrived as `ig` - a value that is in no list,
 * that will never join to `instagram` in any report, and that nobody will
 * notice because it looks almost right.
 *
 * The capture chain itself works. `src/lib/utm.ts` stores the parameters for 30
 * days, the register page writes them into the signup metadata, and the
 * `handle_new_user` trigger copies them onto `profiles.utm_*` - verified
 * against production. What was missing was anything stopping a wrong value
 * being put into a link in the first place.
 *
 * RULE 2 IS A SAFEGUARDING RULE, NOT A TIDINESS ONE. A UTM sits in the address
 * bar, in browser history, in referrer headers, in forwarded links, in
 * screenshots and in every analytics export. This product's users are children.
 * `assertNoIdentifier` below refuses anything that looks like a person, a
 * school or an email, and it refuses rather than sanitising - a silently
 * stripped name is a name somebody believed was sent.
 */

/** `utm_medium` - exactly these (KPI framework §8.2). */
export const UTM_MEDIUMS = [
  'email',
  'newsletter',
  'dm',
  'social-organic',
  'social-paid',
  'cpc',
  'referral',
  'affiliate',
  'pdf',
  'qr',
  'profile',
] as const

/** `utm_campaign` - exactly these, mapped to the campaign folders. */
export const UTM_CAMPAIGNS = [
  'launch-2026-09',
  'founding-schools',
  'parents-autumn',
  'ielts-band',
  'gulf-igcse',
  'seo-evergreen',
  'creators-2026',
] as const

/**
 * `utm_source` - the specific property the click came from.
 *
 * Open-ended by design, because `partner-{shortname}`, `affiliate-{code}`,
 * `pdf-{asset}` and `qr-{placement}` are generated per placement. The prefixes
 * are what is closed, so a typo like `ig` is still refused.
 */
export const UTM_SOURCES = [
  'linkedin',
  'instagram',
  'tiktok',
  'youtube',
  'facebook',
  'x',
  'newsletter',
  'email-sequence',
  'google-ads',
  'meta-ads',
] as const

const SOURCE_PREFIXES = ['partner-', 'affiliate-', 'pdf-', 'qr-'] as const

export type UtmMedium = (typeof UTM_MEDIUMS)[number]
export type UtmCampaign = (typeof UTM_CAMPAIGNS)[number]

export const SITE_ORIGIN = 'https://theenglishhub.app'

/** Rule 1: lowercase, letters, digits and hyphens only. */
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export interface TaggedLinkInput {
  /** Path on theenglishhub.app, e.g. `/schools` or `/ar`. Leading slash required. */
  destination: string
  source: string
  medium: UtmMedium
  campaign: UtmCampaign
  /** The asset or variant slug. This is what tells carousel A from carousel B. */
  content: string
  /** Paid search only. Empty everywhere else. */
  term?: string
}

export class UtmError extends Error {}

/**
 * Rule 2. Refuses a value that looks like it names a person, a school or an
 * address, rather than quietly removing it.
 */
function assertNoIdentifier(field: string, value: string): void {
  if (value.includes('@')) {
    throw new UtmError(`utm_${field}: an email address must never appear in a link (KPI rule 2)`)
  }
  // A school name in a UTM is the same disclosure as a pupil's, and both are
  // the kind of thing that reads as harmless when you are in a hurry.
  if (/\b(school|academy|college|grammar|comprehensive)\b/.test(value)) {
    throw new UtmError(
      `utm_${field}: "${value}" names an institution; personalisation belongs in the message, ` +
        `never in the link (KPI rule 2)`,
    )
  }
}

function assertSlug(field: string, value: string): void {
  if (!SLUG.test(value)) {
    throw new UtmError(
      `utm_${field}: "${value}" is not lowercase letters, digits and hyphens (KPI rule 1). ` +
        `Capitals, spaces and underscores fragment every report.`,
    )
  }
  assertNoIdentifier(field, value)
}

function assertSource(source: string): void {
  assertSlug('source', source)
  const known =
    (UTM_SOURCES as readonly string[]).includes(source) ||
    SOURCE_PREFIXES.some((prefix) => source.startsWith(prefix) && source.length > prefix.length)
  if (!known) {
    throw new UtmError(
      `utm_source: "${source}" is outside the vocabulary. ` +
        `Production already holds "ig", which will never join to "instagram" in any report. ` +
        `Use one of: ${UTM_SOURCES.join(', ')}, or a ${SOURCE_PREFIXES.join('/')} prefix.`,
    )
  }
}

/**
 * Build the tagged URL.
 *
 * Throws on anything the framework forbids. It does not correct and continue:
 * a link that is silently repaired is a link whose author never learns the
 * rule, and the next one is wrong too.
 */
export function buildTaggedUrl(input: TaggedLinkInput): string {
  if (!input.destination.startsWith('/')) {
    throw new UtmError(
      `destination "${input.destination}" must be a path on ${SITE_ORIGIN} beginning with "/". ` +
        `Rule 3: never tag an internal link, and never tag somebody else's site.`,
    )
  }

  assertSource(input.source)
  assertSlug('content', input.content)
  if (!(UTM_MEDIUMS as readonly string[]).includes(input.medium)) {
    throw new UtmError(`utm_medium: "${input.medium}" is not in the closed list (KPI rule 4)`)
  }
  if (!(UTM_CAMPAIGNS as readonly string[]).includes(input.campaign)) {
    throw new UtmError(`utm_campaign: "${input.campaign}" is not in the closed list (KPI rule 4)`)
  }
  if (input.term !== undefined) {
    if (input.medium !== 'cpc') {
      throw new UtmError('utm_term is for paid search only; leave it empty everywhere else')
    }
    assertSlug('term', input.term)
  }

  const url = new URL(input.destination, SITE_ORIGIN)
  url.searchParams.set('utm_source', input.source)
  url.searchParams.set('utm_medium', input.medium)
  url.searchParams.set('utm_campaign', input.campaign)
  url.searchParams.set('utm_content', input.content)
  if (input.term) url.searchParams.set('utm_term', input.term)
  return url.toString()
}

/** One row of `09 Measurement/Link-Register.csv`, in the order §8.1 rule 5 sets. */
export interface LinkRegisterRow {
  date_created: string
  channel: string
  asset_file: string
  destination_path: string
  full_url: string
  campaign: string
  source: string
  medium: string
  content: string
  notes: string
}

export const LINK_REGISTER_COLUMNS: readonly (keyof LinkRegisterRow)[] = [
  'date_created',
  'channel',
  'asset_file',
  'destination_path',
  'full_url',
  'campaign',
  'source',
  'medium',
  'content',
  'notes',
]

/**
 * Build the register row for a link.
 *
 * `dateCreated` is passed in rather than read from the clock so the same input
 * always produces the same row - a register that rewrites itself on every run
 * is a register whose diff tells you nothing.
 */
export function toRegisterRow(
  input: TaggedLinkInput & { channel: string; assetFile: string; notes?: string },
  dateCreated: string,
): LinkRegisterRow {
  return {
    date_created: dateCreated,
    channel: input.channel,
    asset_file: input.assetFile,
    destination_path: input.destination,
    full_url: buildTaggedUrl(input),
    campaign: input.campaign,
    source: input.source,
    medium: input.medium,
    content: input.content,
    notes: input.notes ?? '',
  }
}

/** Minimal CSV escaping: quote when the value contains a comma, quote or newline. */
export function toCsvValue(value: string): string {
  if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, '""')}"`
  return value
}

export function toCsv(rows: LinkRegisterRow[]): string {
  const lines = [LINK_REGISTER_COLUMNS.join(',')]
  for (const row of rows) {
    lines.push(LINK_REGISTER_COLUMNS.map((c) => toCsvValue(row[c])).join(','))
  }
  return lines.join('\n') + '\n'
}
