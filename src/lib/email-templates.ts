// ─── Email Templates for The English Hub ─────────────────────────────────
// All templates are DMCC Act, UK GDPR and consumer-rights compliant.
// Language is kept clear and plain for a 14-18 year-old audience.

const BASE_URL = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
const BRAND_COLOR = "#1A5276";
const BRAND_LIGHT = "#D6EAF8";
const CANCEL_URL = `${BASE_URL}/account/cancel`;
const UNSUBSCRIBE_URL = `${BASE_URL}/account/email-preferences`;
const TERMS_URL = `${BASE_URL}/terms`;
const PRIVACY_URL = `${BASE_URL}/privacy-policy`;
const CANCELLATION_POLICY_URL = `${BASE_URL}/legal/cancellation`;

// ─── Layout wrapper ──────────────────────────────────────────────────────

function layout(title: string, body: string, options?: { isMarketing?: boolean; isSubscription?: boolean }): string {
  const showUnsubscribe = options?.isMarketing ?? false;
  const showCancel = options?.isSubscription ?? false;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">The English Hub</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.<br />
                Company registration number: [COMPANY_NUMBER]<br />
                Registered address: [REGISTERED_ADDRESS]
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${TERMS_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Terms &amp; Conditions</a> &nbsp;|&nbsp;
                <a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Privacy Policy</a> &nbsp;|&nbsp;
                <a href="${CANCELLATION_POLICY_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Cancellation Policy</a>
              </p>
              ${showCancel ? `<p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${CANCEL_URL}" style="color:${BRAND_COLOR};text-decoration:underline;font-weight:600;">Cancel your subscription</a>
              </p>` : ""}
              ${showUnsubscribe ? `<p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${UNSUBSCRIBE_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Unsubscribe from marketing emails</a>
              </p>` : ""}
              <p style="margin:0;font-size:11px;color:#aaaaaa;">
                &copy; ${new Date().getFullYear()} Upskill Energy Limited. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Helper: CTA button ──────────────────────────────────────────────────

function ctaButton(text: string, href: string, color?: string): string {
  const bg = color || BRAND_COLOR;
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
  <tr>
    <td align="center" style="background:${bg};border-radius:6px;">
      <a href="${href}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">${text}</a>
    </td>
  </tr>
</table>`;
}

// ─── Helper: format date for display ─────────────────────────────────────

function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════

// ─── a. Welcome / Subscription confirmation ──────────────────────────────

export function welcomeEmail(name: string, plan: string): string {
  return layout(
    "Welcome to The English Hub!",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Welcome, ${name}!</h2>
<p style="font-size:16px;line-height:1.6;">
  Thanks for subscribing to The English Hub <strong>${plan}</strong> plan. We're really glad to have you here.
</p>
<p style="font-size:16px;line-height:1.6;">
  You now have full access to AI-powered essay feedback for your English Language and Literature studies.
</p>
<p style="font-size:16px;line-height:1.6;">
  Before you get started, here are some important links:
</p>
<ul style="font-size:15px;line-height:1.8;padding-left:20px;">
  <li><a href="${TERMS_URL}" style="color:${BRAND_COLOR};">Terms &amp; Conditions</a> &mdash; the rules for using the service</li>
  <li><a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};">Privacy Policy</a> &mdash; how we look after your data</li>
  <li><a href="${CANCELLATION_POLICY_URL}" style="color:${BRAND_COLOR};">Cancellation Policy</a> &mdash; how to cancel and get a refund</li>
</ul>
<p style="font-size:16px;line-height:1.6;">
  You can cancel your subscription at any time from your account settings.
</p>
${ctaButton("Go to your dashboard", `${BASE_URL}/dashboard`)}`,
    { isSubscription: true }
  );
}

// ─── b. Trial started ────────────────────────────────────────────────────

export function trialStartEmail(name: string, trialEndDate: Date | string): string {
  return layout(
    "Your free trial has started",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Your free trial is live, ${name}!</h2>
<p style="font-size:16px;line-height:1.6;">
  Your free trial of The English Hub is now active. You have full access to all features until <strong>${formatDate(trialEndDate)}</strong>.
</p>
<p style="font-size:16px;line-height:1.6;">
  After your trial ends, your subscription will start and you'll be charged automatically. If you don't want to continue, you can cancel before the trial ends and you won't be charged anything.
</p>
<p style="font-size:16px;line-height:1.6;font-weight:600;">
  How to cancel:
</p>
<p style="font-size:16px;line-height:1.6;">
  Go to <a href="${CANCEL_URL}" style="color:${BRAND_COLOR};font-weight:600;">Account Settings &gt; Cancel Subscription</a> at any time before ${formatDate(trialEndDate)}.
</p>
${ctaButton("Start exploring", `${BASE_URL}/dashboard`)}`,
    { isSubscription: true }
  );
}

// ─── c. Trial ending (2 days before) ─────────────────────────────────────

export function trialEndingEmail(
  name: string,
  trialEndDate: Date | string,
  amount: string
): string {
  return layout(
    "Your free trial ends soon",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Heads up, ${name} &mdash; your trial ends soon</h2>
<p style="font-size:16px;line-height:1.6;">
  Your free trial of The English Hub ends on <strong>${formatDate(trialEndDate)}</strong>.
</p>
<p style="font-size:16px;line-height:1.6;">
  After that date you'll be charged <strong>${amount}</strong>. If you'd like to keep using The English Hub, you don't need to do anything &mdash; your subscription will start automatically.
</p>
<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;">
  <p style="margin:0;font-size:16px;line-height:1.6;font-weight:600;color:${BRAND_COLOR};">
    Don't want to continue?
  </p>
  <p style="margin:8px 0 0 0;font-size:16px;line-height:1.6;">
    Cancel before ${formatDate(trialEndDate)} and you won't be charged.
  </p>
</div>
${ctaButton("Cancel subscription", CANCEL_URL, "#c0392b")}
<p style="font-size:13px;color:#888888;line-height:1.5;">
  You can also cancel from <a href="${CANCEL_URL}" style="color:${BRAND_COLOR};">Account Settings &gt; Cancel Subscription</a>.
</p>`,
    { isSubscription: true }
  );
}

// ─── d. Renewal reminder (DMCC Act compliant) ───────────────────────────

export function renewalReminderEmail(
  name: string,
  nextDate: Date | string,
  amount: string,
  plan: string,
  priceChanged?: boolean
): string {
  const priceNotice = priceChanged
    ? `<div style="background:#FDEDEC;border-left:4px solid #c0392b;padding:16px;margin:16px 0;border-radius:4px;">
  <p style="margin:0;font-size:16px;line-height:1.6;font-weight:600;color:#c0392b;">
    Important: your price has changed
  </p>
  <p style="margin:8px 0 0 0;font-size:16px;line-height:1.6;">
    The amount shown below is different from what you've been paying. Please check the new price and decide if you'd like to continue.
  </p>
</div>`
    : "";

  return layout(
    "Your subscription is renewing soon",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Subscription renewal reminder</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, this is a reminder that your <strong>${plan}</strong> subscription to The English Hub will renew on <strong>${formatDate(nextDate)}</strong>.
</p>
${priceNotice}
<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="font-size:15px;color:#555;padding:4px 0;">Plan</td>
      <td style="font-size:15px;font-weight:600;text-align:right;padding:4px 0;">${plan}</td>
    </tr>
    <tr>
      <td style="font-size:15px;color:#555;padding:4px 0;">Amount</td>
      <td style="font-size:15px;font-weight:600;text-align:right;padding:4px 0;">${amount}</td>
    </tr>
    <tr>
      <td style="font-size:15px;color:#555;padding:4px 0;">Next payment date</td>
      <td style="font-size:15px;font-weight:600;text-align:right;padding:4px 0;">${formatDate(nextDate)}</td>
    </tr>
  </table>
</div>
<p style="font-size:16px;line-height:1.6;">
  If you'd like to continue, you don't need to do anything. If you'd prefer to cancel, please do so before your renewal date.
</p>
${ctaButton("Cancel subscription", CANCEL_URL, "#c0392b")}
<p style="font-size:13px;color:#888888;line-height:1.5;">
  This reminder is sent in accordance with the Digital Markets, Competition and Consumers Act 2024.
  You can manage your subscription at any time from <a href="${BASE_URL}/account" style="color:${BRAND_COLOR};">your account settings</a>.
</p>`,
    { isSubscription: true }
  );
}

// ─── e. Cancellation confirmed ───────────────────────────────────────────

export function cancellationConfirmEmail(
  name: string,
  accessEndDate: Date | string,
  refundInfo?: string
): string {
  const refundBlock = refundInfo
    ? `<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;">
  <p style="margin:0;font-size:16px;line-height:1.6;font-weight:600;color:${BRAND_COLOR};">Refund information</p>
  <p style="margin:8px 0 0 0;font-size:16px;line-height:1.6;">${refundInfo}</p>
</div>`
    : "";

  return layout(
    "Subscription cancelled",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Your subscription has been cancelled</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, we've cancelled your subscription as requested.
</p>
<p style="font-size:16px;line-height:1.6;">
  You'll still have access to The English Hub until <strong>${formatDate(accessEndDate)}</strong>. After that date you won't be charged again.
</p>
${refundBlock}
<p style="font-size:16px;line-height:1.6;">
  If you change your mind, you can resubscribe at any time from your account.
</p>
${ctaButton("Resubscribe", `${BASE_URL}/pricing`)}
<p style="font-size:13px;color:#888888;line-height:1.5;">
  We'd love to hear why you cancelled. If you have feedback, reply to this email or visit our <a href="${BASE_URL}/contact" style="color:${BRAND_COLOR};">contact page</a>.
</p>`,
    { isSubscription: false }
  );
}

// ─── f. Payment failed ───────────────────────────────────────────────────

export function paymentFailedEmail(
  name: string,
  reason: string,
  retryDate: Date | string,
  gracePeriodEnd: Date | string
): string {
  return layout(
    "Payment failed",
    `<h2 style="color:#c0392b;margin:0 0 16px 0;">There was a problem with your payment</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, we tried to charge your payment method but it didn't go through.
</p>
<div style="background:#FDEDEC;border-radius:8px;padding:20px;margin:20px 0;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="font-size:15px;color:#555;padding:4px 0;">Reason</td>
      <td style="font-size:15px;font-weight:600;text-align:right;padding:4px 0;">${reason}</td>
    </tr>
    <tr>
      <td style="font-size:15px;color:#555;padding:4px 0;">We'll try again on</td>
      <td style="font-size:15px;font-weight:600;text-align:right;padding:4px 0;">${formatDate(retryDate)}</td>
    </tr>
    <tr>
      <td style="font-size:15px;color:#555;padding:4px 0;">Access ends if not resolved by</td>
      <td style="font-size:15px;font-weight:600;text-align:right;padding:4px 0;color:#c0392b;">${formatDate(gracePeriodEnd)}</td>
    </tr>
  </table>
</div>
<p style="font-size:16px;line-height:1.6;">
  To make sure you don't lose access, please update your payment method before <strong>${formatDate(gracePeriodEnd)}</strong>.
</p>
${ctaButton("Update payment method", `${BASE_URL}/account/billing`)}`,
    { isSubscription: true }
  );
}

// ─── g. Data export ready ────────────────────────────────────────────────

export function dataExportReadyEmail(name: string, downloadLink: string): string {
  return layout(
    "Your data export is ready",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Your data export is ready to download</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, we've finished putting together the data you asked for. You can download it using the button below.
</p>
${ctaButton("Download your data", downloadLink)}
<p style="font-size:16px;line-height:1.6;">
  For your security, this download link will expire in <strong>7 days</strong>. If the link has expired, you can request a new export from your account settings.
</p>
<p style="font-size:13px;color:#888888;line-height:1.5;">
  This export was generated in response to your data subject access request under UK GDPR.
  If you didn't make this request, please <a href="${BASE_URL}/contact" style="color:${BRAND_COLOR};">contact us</a> immediately.
</p>`,
    { isSubscription: false }
  );
}

// ─── h. Account deletion scheduled ──────────────────────────────────────

export function accountDeletionEmail(name: string, deletionDate: Date | string): string {
  return layout(
    "Account deletion scheduled",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Your account is scheduled for deletion</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, as you requested, your account will be permanently deleted on <strong>${formatDate(deletionDate)}</strong>.
</p>
<p style="font-size:16px;line-height:1.6;">
  During the next 30 days you can still log in and cancel the deletion if you change your mind. After ${formatDate(deletionDate)}, all your data will be permanently removed and cannot be recovered.
</p>
<p style="font-size:16px;line-height:1.6;font-weight:600;">
  What will be deleted:
</p>
<ul style="font-size:15px;line-height:1.8;padding-left:20px;">
  <li>Your account and profile</li>
  <li>All essays and feedback</li>
  <li>Subscription and payment records (except where we are legally required to keep them)</li>
</ul>
${ctaButton("Cancel deletion", `${BASE_URL}/account/cancel-deletion`)}
<p style="font-size:13px;color:#888888;line-height:1.5;">
  If you didn't request this, please <a href="${BASE_URL}/contact" style="color:${BRAND_COLOR};">contact us</a> immediately.
</p>`,
    { isSubscription: false }
  );
}

// ─── i. Human review submitted ───────────────────────────────────────────

export function humanReviewSubmittedEmail(name: string, referenceNumber: string): string {
  return layout(
    "Human review request received",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">We've received your human review request</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, your request for a human review of your AI feedback has been submitted.
</p>
<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;text-align:center;">
  <p style="margin:0 0 4px 0;font-size:14px;color:#555;">Your reference number</p>
  <p style="margin:0;font-size:22px;font-weight:700;color:${BRAND_COLOR};letter-spacing:1px;">${referenceNumber}</p>
</div>
<p style="font-size:16px;line-height:1.6;">
  A qualified reviewer will look at your essay and the AI feedback. We'll email you when the review is complete. This usually takes up to <strong>5 working days</strong>.
</p>
<p style="font-size:16px;line-height:1.6;">
  Please keep your reference number safe &mdash; you'll need it if you contact us about this review.
</p>
${ctaButton("View your reviews", `${BASE_URL}/reviews`)}`,
    { isSubscription: false }
  );
}

// ─── j. Human review completed ───────────────────────────────────────────

export function humanReviewCompletedEmail(name: string, referenceNumber: string): string {
  return layout(
    "Human review completed",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Your human review is complete</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, the human review for request <strong>${referenceNumber}</strong> has been completed.
</p>
<p style="font-size:16px;line-height:1.6;">
  A reviewer has looked at your essay and the AI feedback. You can now see their comments and any changes to your feedback.
</p>
${ctaButton("View review result", `${BASE_URL}/reviews`)}
<p style="font-size:13px;color:#888888;line-height:1.5;">
  If you have questions about the review outcome, please <a href="${BASE_URL}/contact" style="color:${BRAND_COLOR};">contact us</a> quoting reference <strong>${referenceNumber}</strong>.
</p>`,
    { isSubscription: false }
  );
}

// ─── k. Password reset ──────────────────────────────────────────────────

export function passwordResetEmail(name: string, resetLink: string): string {
  return layout(
    "Reset your password",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Password reset request</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, we received a request to reset your password for The English Hub.
</p>
<p style="font-size:16px;line-height:1.6;">
  Click the button below to choose a new password. This link will expire in <strong>1 hour</strong>.
</p>
${ctaButton("Reset your password", resetLink)}
<p style="font-size:16px;line-height:1.6;">
  If you didn't ask to reset your password, you can safely ignore this email. Your password won't be changed.
</p>
<p style="font-size:13px;color:#888888;line-height:1.5;">
  If the button doesn't work, copy and paste this link into your browser:<br />
  <a href="${resetLink}" style="color:${BRAND_COLOR};word-break:break-all;">${resetLink}</a>
</p>`,
    { isSubscription: false }
  );
}

// ─── l. DSAR acknowledgement ─────────────────────────────────────────────

export function dsarAcknowledgementEmail(
  name: string,
  requestType: string,
  referenceNumber: string
): string {
  const typeLabels: Record<string, string> = {
    ACCESS: "access your personal data",
    PORTABILITY: "export your personal data in a portable format",
    ERASURE: "erase your personal data",
    RECTIFICATION: "correct your personal data",
  };
  const typeDescription = typeLabels[requestType] || requestType.toLowerCase();

  return layout(
    "Data request received",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">We've received your data request</h2>
<p style="font-size:16px;line-height:1.6;">
  Hi ${name}, we've received your request to <strong>${typeDescription}</strong>.
</p>
<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;text-align:center;">
  <p style="margin:0 0 4px 0;font-size:14px;color:#555;">Your reference number</p>
  <p style="margin:0;font-size:22px;font-weight:700;color:${BRAND_COLOR};letter-spacing:1px;">${referenceNumber}</p>
</div>
<p style="font-size:16px;line-height:1.6;">
  Under UK GDPR, we have <strong>30 days</strong> to respond to your request. We'll email you when it's done, or if we need any more information from you.
</p>
<p style="font-size:16px;line-height:1.6;">
  Please keep your reference number safe &mdash; you'll need it if you contact us about this request.
</p>
<p style="font-size:13px;color:#888888;line-height:1.5;">
  If you didn't make this request, please <a href="${BASE_URL}/contact" style="color:${BRAND_COLOR};">contact us</a> immediately.
</p>`,
    { isSubscription: false }
  );
}

// ─── m. Parent linked confirmation (sent to parent) ─────────────────────

export function parentLinkedEmail(
  parentName: string,
  studentFirstName: string
): string {
  return layout(
    "You are now linked to your child's account",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">You're all set, ${parentName}!</h2>
<p style="font-size:16px;line-height:1.6;">
  You have been successfully linked to <strong>${studentFirstName}</strong>'s account on The English Hub.
</p>
<p style="font-size:16px;line-height:1.6;">
  You can now monitor their progress, view weekly reports, and stay up to date with their English studies &mdash; all for free.
</p>
<p style="font-size:16px;line-height:1.6;font-weight:600;">
  What you can access:
</p>
<ul style="font-size:15px;line-height:1.8;padding-left:20px;">
  <li>Weekly progress reports delivered to your email</li>
  <li>Overview of essays completed and scores</li>
  <li>Projected grades and improvement areas</li>
</ul>
${ctaButton("View your dashboard", `${BASE_URL}/dashboard`)}
<p style="font-size:13px;color:#888888;line-height:1.5;">
  You can manage your parent link at any time from <a href="${BASE_URL}/dashboard/settings/parent-link" style="color:${BRAND_COLOR};">your settings</a>.
</p>`,
    { isSubscription: false }
  );
}

// ─── n. Student linked notification (sent to student) ───────────────────

export function studentLinkedNotificationEmail(
  studentName: string,
  parentFirstName: string
): string {
  return layout(
    "A parent has been linked to your account",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Hi ${studentName},</h2>
<p style="font-size:16px;line-height:1.6;">
  <strong>${parentFirstName}</strong> has been linked to your account as a parent. They will be able to view your progress reports and scores.
</p>
<p style="font-size:16px;line-height:1.6;">
  They will <strong>not</strong> be able to read your essays or access your account directly. Your work remains private.
</p>
<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;">
  <p style="margin:0;font-size:16px;line-height:1.6;font-weight:600;color:${BRAND_COLOR};">
    Didn't expect this?
  </p>
  <p style="margin:8px 0 0 0;font-size:16px;line-height:1.6;">
    If you did not share an invite code, you can remove this link from your account settings.
  </p>
</div>
${ctaButton("Manage parent links", `${BASE_URL}/dashboard/settings/parent-link`)}`,
    { isSubscription: false }
  );
}

// ─── o. Parent invite email (sent when invite is created) ───────────────

export function parentInviteEmail(
  studentFirstName: string,
  inviteCode: string,
  inviteUrl: string
): string {
  return layout(
    "You have been invited to The English Hub",
    `<h2 style="color:${BRAND_COLOR};margin:0 0 16px 0;">Your child wants to connect with you</h2>
<p style="font-size:16px;line-height:1.6;">
  <strong>${studentFirstName}</strong> has invited you to The English Hub so you can monitor their English study progress.
</p>
<p style="font-size:16px;line-height:1.6;">
  As a parent, you get <strong>free access</strong> to view progress reports and scores. No subscription required.
</p>
<div style="background:${BRAND_LIGHT};border-radius:8px;padding:20px;margin:20px 0;text-align:center;">
  <p style="margin:0 0 4px 0;font-size:14px;color:#555;">Your invite code</p>
  <p style="margin:0;font-size:28px;font-weight:700;color:${BRAND_COLOR};letter-spacing:3px;">${inviteCode}</p>
</div>
${ctaButton("Accept invitation", inviteUrl)}
<p style="font-size:16px;line-height:1.6;">
  This invite expires in <strong>7 days</strong>. If the link above doesn't work, you can enter the code manually at <a href="${BASE_URL}/dashboard/settings/parent-link" style="color:${BRAND_COLOR};">The English Hub</a>.
</p>`,
    { isSubscription: false }
  );
}
