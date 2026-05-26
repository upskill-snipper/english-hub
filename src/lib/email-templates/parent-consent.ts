/**
 * Parental Consent email templates - GDPR / UK Children's Code compliance.
 *
 * Used by the /api/school/consent route to notify parents/guardians of
 * consent requests and to confirm approval/denial back to them after a
 * decision is recorded.
 *
 * Style mirrors the school-access cron emails (brand colour #1A5276, the
 * same 600-wide centred table shell, grey footer). Every interpolated value
 * is HTML-escaped via the local escapeHtml helper - do NOT cross-import
 * the one from the parent-notify route, keep this module self-contained.
 */

const BRAND_COLOR = '#1A5276'
const DANGER_COLOR = '#c0392b'

// ─── HTML escape (mirrors the parent-notify route's implementation) ─────
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function footer(): string {
  return `
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.
              </p>
              <p style="margin:8px 0 0 0;font-size:11px;color:#aaaaaa;">
                &copy; ${new Date().getFullYear()} Upskill Energy Limited. All rights reserved.
              </p>
            </td>
          </tr>`
}

function header(): string {
  return `
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">The English Hub</h1>
            </td>
          </tr>`
}

function shell(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">${header()}
          <tr>
            <td style="padding:32px;">
${bodyHtml}
            </td>
          </tr>${footer()}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ───────────────────────────────────────────────────────────────────────
// 1. Consent-request email - sent to the parent when the student submits
//    a consent request. Contains the approval link with the token.
// ───────────────────────────────────────────────────────────────────────

export interface ParentConsentEmailParams {
  parentName?: string | null
  studentName: string
  schoolName: string
  consentUrl: string
  expiresAt?: Date | string | null
}

export interface BuiltEmail {
  subject: string
  html: string
  text: string
}

export function buildParentConsentEmail(params: ParentConsentEmailParams): BuiltEmail {
  const safeParentGreeting = params.parentName
    ? `Dear ${escapeHtml(params.parentName)},`
    : 'Dear Parent/Guardian,'
  const safeStudent = escapeHtml(params.studentName)
  const safeSchool = escapeHtml(params.schoolName)
  const safeUrl = escapeHtml(params.consentUrl)
  const expiresLine = params.expiresAt
    ? `<p style="font-size:14px;color:#666666;line-height:1.6;margin:8px 0 0 0;">This link will expire on <strong>${escapeHtml(formatDate(params.expiresAt))}</strong>.</p>`
    : ''

  const body = `
              <h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Parental Consent Required</h2>
              <p style="font-size:16px;line-height:1.6;">${safeParentGreeting}</p>
              <p style="font-size:16px;line-height:1.6;">
                Your child, <strong>${safeStudent}</strong>, has been invited to use <strong>The English Hub</strong> as part of their studies at <strong>${safeSchool}</strong>.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                Because they are under 16, UK data-protection law requires your consent before we can process their personal data. The English Hub collects only what's needed to deliver the learning experience:
              </p>
              <ul style="font-size:16px;line-height:1.6;padding-left:20px;">
                <li>Name and school email address</li>
                <li>Date of birth</li>
                <li>Learning progress and assessment results</li>
                <li>Usage data used to improve the learning experience</li>
              </ul>
              <p style="font-size:16px;line-height:1.6;">
                Data is stored securely, is never sold or shared for marketing, and you may withdraw consent at any time.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                To review our data practices and provide or decline consent, please use the secure link below:
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td align="center" style="background:${BRAND_COLOR};border-radius:6px;">
                    <a href="${safeUrl}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">Review and respond</a>
                  </td>
                </tr>
              </table>
              <p style="font-size:13px;color:#888888;line-height:1.6;">
                If the button doesn't work, copy and paste this URL into your browser:<br />
                <a href="${safeUrl}" style="color:${BRAND_COLOR};word-break:break-all;">${safeUrl}</a>
              </p>
              ${expiresLine}
              <p style="font-size:13px;color:#888888;line-height:1.6;margin-top:24px;">
                If you did not expect this email, you can safely ignore it - no account will be activated without your consent. For any questions, contact <a href="mailto:info@Upskillenergy.com" style="color:${BRAND_COLOR};">info@Upskillenergy.com</a>.
              </p>`

  const text = [
    'Parental Consent Required - The English Hub',
    '',
    params.parentName ? `Dear ${params.parentName},` : 'Dear Parent/Guardian,',
    '',
    `Your child, ${params.studentName}, has been invited to use The English Hub as part of their studies at ${params.schoolName}.`,
    '',
    'Because they are under 16, UK data-protection law requires your consent before we can process their personal data.',
    '',
    'To review our data practices and provide or decline consent, please open this secure link:',
    params.consentUrl,
    '',
    params.expiresAt ? `This link will expire on ${formatDate(params.expiresAt)}.` : '',
    '',
    'If you did not expect this email, you can safely ignore it - no account will be activated without your consent.',
    '',
    'Questions? info@Upskillenergy.com',
    '',
    'The English Hub Team',
  ]
    .filter(Boolean)
    .join('\n')

  return {
    subject: `Parental consent required for ${params.studentName} - The English Hub`,
    html: shell('Parental Consent Required', body),
    text,
  }
}

// ───────────────────────────────────────────────────────────────────────
// 2. Confirmation email after APPROVAL - sent to the parent once they
//    click "approve" so they have a record of their decision.
// ───────────────────────────────────────────────────────────────────────

export interface ParentConsentDecisionEmailParams {
  studentName: string
  schoolName: string
}

export function buildParentConsentApprovedEmail(
  params: ParentConsentDecisionEmailParams,
): BuiltEmail {
  const safeStudent = escapeHtml(params.studentName)
  const safeSchool = escapeHtml(params.schoolName)

  const body = `
              <h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Consent recorded - thank you</h2>
              <p style="font-size:16px;line-height:1.6;">Dear Parent/Guardian,</p>
              <p style="font-size:16px;line-height:1.6;">
                Thank you for granting consent for <strong>${safeStudent}</strong> to use The English Hub at <strong>${safeSchool}</strong>.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                Your decision has been recorded. Your child can now use the full features of The English Hub as part of their schoolwork.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                You may withdraw consent at any time by replying to this email or contacting <a href="mailto:info@Upskillenergy.com" style="color:${BRAND_COLOR};">info@Upskillenergy.com</a>. We will action any withdrawal request promptly and permanently delete your child's data within 30 days unless we're required to retain it by law.
              </p>
              <p style="font-size:13px;color:#888888;line-height:1.6;margin-top:24px;">
                Keep this email for your records.
              </p>`

  const text = [
    'Consent recorded - The English Hub',
    '',
    'Dear Parent/Guardian,',
    '',
    `Thank you for granting consent for ${params.studentName} to use The English Hub at ${params.schoolName}.`,
    '',
    'Your decision has been recorded. Your child can now use the full features of The English Hub.',
    '',
    'You may withdraw consent at any time by contacting info@Upskillenergy.com.',
    '',
    'Keep this email for your records.',
    '',
    'The English Hub Team',
  ].join('\n')

  return {
    subject: `Consent recorded for ${params.studentName} - The English Hub`,
    html: shell('Consent Recorded', body),
    text,
  }
}

// ───────────────────────────────────────────────────────────────────────
// 3. Confirmation email after DENIAL - sent to the parent once they
//    click "deny" so they have a record of their decision and know what
//    happens to their child's data.
// ───────────────────────────────────────────────────────────────────────

export function buildParentConsentDeniedEmail(
  params: ParentConsentDecisionEmailParams,
): BuiltEmail {
  const safeStudent = escapeHtml(params.studentName)
  const safeSchool = escapeHtml(params.schoolName)

  const body = `
              <h2 style="color:${DANGER_COLOR};margin:0 0 16px 0;">Consent declined</h2>
              <p style="font-size:16px;line-height:1.6;">Dear Parent/Guardian,</p>
              <p style="font-size:16px;line-height:1.6;">
                We have recorded your decision to decline consent for <strong>${safeStudent}</strong> to use The English Hub at <strong>${safeSchool}</strong>.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                Your child will not be able to use the school features of The English Hub, and we will not process their personal data for this purpose.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                If you change your mind, your child can request a new consent form at any time, or you can contact us directly at <a href="mailto:info@Upskillenergy.com" style="color:${BRAND_COLOR};">info@Upskillenergy.com</a>.
              </p>
              <p style="font-size:13px;color:#888888;line-height:1.6;margin-top:24px;">
                Keep this email for your records.
              </p>`

  const text = [
    'Consent declined - The English Hub',
    '',
    'Dear Parent/Guardian,',
    '',
    `We have recorded your decision to decline consent for ${params.studentName} to use The English Hub at ${params.schoolName}.`,
    '',
    'Your child will not be able to use the school features of The English Hub, and we will not process their personal data for this purpose.',
    '',
    'If you change your mind, your child can request a new consent form at any time, or contact us at info@Upskillenergy.com.',
    '',
    'Keep this email for your records.',
    '',
    'The English Hub Team',
  ].join('\n')

  return {
    subject: `Consent declined for ${params.studentName} - The English Hub`,
    html: shell('Consent Declined', body),
    text,
  }
}
