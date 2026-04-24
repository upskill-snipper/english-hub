// ─── DMCC Act Compliant Renewal Reminders ────────────────────────────────
// Digital Markets, Competition and Consumers Act 2024 requires:
//   - Reminder before every 6th consecutive monthly payment
//   - Reminder before each annual renewal (30 days notice)
//   - Clear cancellation information in every reminder

import { SubscriptionPlan, SubscriptionStatus, ReminderType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "./email";
import { renewalReminderEmail, trialEndingEmail } from "./email-templates";

// ─── Types ───────────────────────────────────────────────────────────────

interface ReminderResult {
  sent: number;
  failed: number;
  errors: string[];
}

// ─── Main: check and send all due reminders ──────────────────────────────

export async function checkAndSendReminders(): Promise<ReminderResult> {
  const result: ReminderResult = { sent: 0, failed: 0, errors: [] };

  try {
    await sendMonthly6thReminders(result);
    await sendAnnualRenewalReminders(result);
    await sendTrialEndingReminders(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    result.errors.push(`Fatal error in checkAndSendReminders: ${message}`);
    console.error("[renewal-reminders] Fatal error:", err);
  }

  return result;
}

// ─── Monthly: before every 6th payment ──────────────────────────────────
// DMCC Act requires a reminder before each 6th consecutive auto-renewal
// for monthly subscriptions (i.e. at payment 6, 12, 18, etc.)

async function sendMonthly6thReminders(result: ReminderResult): Promise<void> {
  // Find active monthly subscriptions where paymentCount is 5, 11, 17, ...
  // (next payment will be the 6th, 12th, 18th, etc.)
  const subscriptions = await prisma.subscription.findMany({
    where: {
      plan: SubscriptionPlan.MONTHLY,
      status: SubscriptionStatus.ACTIVE,
    },
    include: {
      user: true,
      renewalReminders: {
        orderBy: { sentAt: "desc" },
        take: 1,
        where: { type: ReminderType.MONTHLY_6TH },
      },
    },
  });

  for (const sub of subscriptions) {
    // Check if the next payment is a 6th (paymentCount is 0-indexed after current period)
    // paymentCount tracks completed payments; reminder is due when (paymentCount + 1) % 6 === 0
    if ((sub.paymentCount + 1) % 6 !== 0) continue;

    // Check we haven't already sent a reminder for this period
    const lastReminder = sub.renewalReminders[0];
    if (lastReminder && lastReminder.nextPaymentDate >= sub.currentPeriodEnd) {
      continue;
    }

    // Only send if within 7 days of the next payment
    const now = new Date();
    const daysUntilRenewal = daysBetween(now, sub.currentPeriodEnd);
    if (daysUntilRenewal > 7 || daysUntilRenewal < 0) continue;

    await sendReminderAndRecord(sub, ReminderType.MONTHLY_6TH, result);
  }
}

// ─── Annual: 30 days before renewal ──────────────────────────────────────

async function sendAnnualRenewalReminders(result: ReminderResult): Promise<void> {
  const subscriptions = await prisma.subscription.findMany({
    where: {
      plan: SubscriptionPlan.ANNUAL,
      status: SubscriptionStatus.ACTIVE,
    },
    include: {
      user: true,
      renewalReminders: {
        orderBy: { sentAt: "desc" },
        take: 1,
        where: { type: ReminderType.ANNUAL_RENEWAL },
      },
    },
  });

  for (const sub of subscriptions) {
    // Check we haven't already sent a reminder for this period
    const lastReminder = sub.renewalReminders[0];
    if (lastReminder && lastReminder.nextPaymentDate >= sub.currentPeriodEnd) {
      continue;
    }

    // Send 30 days before renewal
    const now = new Date();
    const daysUntilRenewal = daysBetween(now, sub.currentPeriodEnd);
    if (daysUntilRenewal > 30 || daysUntilRenewal < 0) continue;

    await sendReminderAndRecord(sub, ReminderType.ANNUAL_RENEWAL, result);
  }
}

// ─── Trial ending: 2 days before trial ends ──────────────────────────────

async function sendTrialEndingReminders(result: ReminderResult): Promise<void> {
  const subscriptions = await prisma.subscription.findMany({
    where: {
      status: SubscriptionStatus.TRIALING,
    },
    include: {
      user: true,
      renewalReminders: {
        orderBy: { sentAt: "desc" },
        take: 1,
        where: { type: ReminderType.TRIAL_ENDING },
      },
    },
  });

  for (const sub of subscriptions) {
    // Check we haven't already sent a reminder for this trial
    const lastReminder = sub.renewalReminders[0];
    if (lastReminder) continue;

    // Send 2 days before trial ends
    const now = new Date();
    const daysUntilEnd = daysBetween(now, sub.currentPeriodEnd);
    if (daysUntilEnd > 2 || daysUntilEnd < 0) continue;

    // For trial ending we use a different template
    try {
      const amount = await getSubscriptionAmount(sub.stripeSubscriptionId);
      const emailResult = await sendEmail(
        sub.user.email,
        "Your free trial ends soon - The English Hub",
        trialEndingEmail(sub.user.firstName, sub.currentPeriodEnd, amount)
      );

      if (emailResult.success) {
        await prisma.renewalReminder.create({
          data: {
            subscriptionId: sub.id,
            type: ReminderType.TRIAL_ENDING,
            amount: parseFloat(amount.replace(/[^0-9.]/g, "")) || 0,
            currency: "GBP",
            nextPaymentDate: sub.currentPeriodEnd,
          },
        });
        result.sent++;
      } else {
        result.failed++;
        result.errors.push(
          `Trial ending email failed for user ${sub.userId}: ${emailResult.error}`
        );
      }
    } catch (err) {
      result.failed++;
      const message = err instanceof Error ? err.message : "Unknown error";
      result.errors.push(
        `Trial ending reminder error for user ${sub.userId}: ${message}`
      );
    }
  }
}

// ─── Shared: send a renewal reminder and record it ───────────────────────

async function sendReminderAndRecord(
  sub: {
    id: string;
    userId: string;
    plan: SubscriptionPlan;
    // Nullable since 20260420_02_stripe_columns_nullable: mobile-originated
    // (RevenueCat) Subscription rows carry `null` here. For renewal
    // reminders we only need the ID to look up the Stripe amount; without
    // one, we fall back to a generic per-plan price string.
    stripeSubscriptionId: string | null;
    currentPeriodEnd: Date;
    user: { email: string; firstName: string };
  },
  type: ReminderType,
  result: ReminderResult
): Promise<void> {
  try {
    const amount = await getSubscriptionAmount(sub.stripeSubscriptionId);
    const planLabel = sub.plan === SubscriptionPlan.MONTHLY ? "Monthly" : "Annual";

    const emailResult = await sendEmail(
      sub.user.email,
      `Subscription renewal reminder - The English Hub`,
      renewalReminderEmail(sub.user.firstName, sub.currentPeriodEnd, amount, planLabel)
    );

    if (emailResult.success) {
      await prisma.renewalReminder.create({
        data: {
          subscriptionId: sub.id,
          type,
          amount: parseFloat(amount.replace(/[^0-9.]/g, "")) || 0,
          currency: "GBP",
          nextPaymentDate: sub.currentPeriodEnd,
        },
      });
      result.sent++;
    } else {
      result.failed++;
      result.errors.push(
        `Renewal email failed for user ${sub.userId}: ${emailResult.error}`
      );
    }
  } catch (err) {
    result.failed++;
    const message = err instanceof Error ? err.message : "Unknown error";
    result.errors.push(
      `Renewal reminder error for user ${sub.userId}: ${message}`
    );
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((b.getTime() - a.getTime()) / msPerDay);
}

/**
 * Fetches the upcoming invoice amount from Stripe.
 * Falls back to a placeholder if Stripe is unavailable.
 */
async function getSubscriptionAmount(
  stripeSubscriptionId: string | null,
): Promise<string> {
  // Mobile (RevenueCat) rows have no Stripe subscription; Stripe's invoice
  // preview API requires one, so skip the call and return the generic label.
  if (!stripeSubscriptionId) {
    return "your subscription amount";
  }
  try {
    // Dynamic import to avoid loading Stripe when not needed
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
    });

    const invoice = await stripe.invoices.createPreview({
      subscription: stripeSubscriptionId,
    });

    const amount = (invoice.amount_due / 100).toFixed(2);
    const currency = (invoice.currency || "gbp").toUpperCase();
    const symbol = currency === "GBP" ? "\u00A3" : currency === "USD" ? "$" : `${currency} `;

    return `${symbol}${amount}`;
  } catch (err) {
    console.error(
      `[renewal-reminders] Failed to fetch Stripe amount for ${stripeSubscriptionId}:`,
      err
    );
    return "your subscription amount";
  }
}
