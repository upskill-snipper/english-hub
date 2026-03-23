import { prisma } from "@/lib/prisma";
import type { Subscription, RenewalReminder } from "@prisma/client";

// ─── Types ───────────────────────────────────────────────────────────────

export type SubscriptionWithReminders = Subscription & {
  renewalReminders: RenewalReminder[];
};

// ─── Constants ───────────────────────────────────────────────────────────

/** DMCC Act s.252: remind monthly subscribers before every 6th payment. */
const MONTHLY_REMINDER_INTERVAL = 6;

/** DMCC Act: remind annual subscribers 30 days before renewal. */
const ANNUAL_REMINDER_DAYS_BEFORE = 30;

/** UK Consumer Contracts Regulations: 14-day cooling-off period. */
const COOLING_OFF_DAYS = 14;

// ─── getSubscription ─────────────────────────────────────────────────────

export async function getSubscription(
  userId: string
): Promise<SubscriptionWithReminders | null> {
  return prisma.subscription.findUnique({
    where: { userId },
    include: { renewalReminders: { orderBy: { sentAt: "desc" } } },
  });
}

// ─── shouldSendRenewalReminder ───────────────────────────────────────────
/**
 * Determines whether a renewal reminder should be sent based on DMCC Act
 * requirements.
 *
 * Monthly plans: a reminder is due before every 6th payment. We check
 * whether the *next* payment (paymentCount + 1) would be a multiple of 6.
 *
 * Annual plans: a reminder is due 30 days before the currentPeriodEnd.
 * We check whether we are within 30 days AND have not already sent a
 * reminder for this billing period.
 */
export function shouldSendRenewalReminder(
  subscription: Subscription,
  existingReminders?: RenewalReminder[]
): boolean {
  if (subscription.status === "CANCELLED") return false;

  if (subscription.plan === "MONTHLY") {
    // Trigger before every 6th payment: after payments 5, 11, 17 ...
    const nextPayment = subscription.paymentCount + 1;
    return nextPayment % MONTHLY_REMINDER_INTERVAL === 0;
  }

  if (subscription.plan === "ANNUAL") {
    // Trigger when within 30 days of renewal
    const now = new Date();
    const renewalDate = subscription.currentPeriodEnd;
    const daysUntilRenewal = Math.ceil(
      (renewalDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysUntilRenewal > ANNUAL_REMINDER_DAYS_BEFORE || daysUntilRenewal < 0) {
      return false;
    }

    // Don't send duplicate reminders for the same period
    if (existingReminders && existingReminders.length > 0) {
      const latestReminder = existingReminders[0]; // sorted desc by sentAt
      // If the latest reminder's nextPaymentDate matches the current period end,
      // we already sent one for this cycle.
      const sameDay =
        latestReminder.nextPaymentDate.toISOString().slice(0, 10) ===
        renewalDate.toISOString().slice(0, 10);
      if (sameDay) return false;
    }

    return true;
  }

  return false;
}

// ─── recordRenewalReminder ───────────────────────────────────────────────

export async function recordRenewalReminder(
  subscriptionId: string,
  type: "MONTHLY_6TH" | "ANNUAL_RENEWAL" | "TRIAL_ENDING",
  amount: number,
  currency: string,
  nextPaymentDate: Date
): Promise<RenewalReminder> {
  return prisma.renewalReminder.create({
    data: {
      subscriptionId,
      type,
      amount,
      currency: currency.toUpperCase(),
      nextPaymentDate,
    },
  });
}

// ─── calculateNextReminderDate ───────────────────────────────────────────
/**
 * Returns the approximate date the next DMCC-mandated renewal reminder
 * should be sent.
 *
 * Monthly plans: the date of the 5th payment in the current 6-payment
 * cycle (i.e. when the invoice.paid event for that payment fires).
 *
 * Annual plans: 30 days before currentPeriodEnd.
 */
export function calculateNextReminderDate(
  subscription: Subscription
): Date | null {
  if (subscription.status === "CANCELLED") return null;

  if (subscription.plan === "MONTHLY") {
    const nextPayment = subscription.paymentCount + 1;
    // How many payments until the next reminder trigger?
    const paymentsUntilReminder =
      MONTHLY_REMINDER_INTERVAL -
      (nextPayment % MONTHLY_REMINDER_INTERVAL);
    // If 0, the reminder is due NOW (on the next payment)
    const paymentsToAdd =
      paymentsUntilReminder === MONTHLY_REMINDER_INTERVAL
        ? 0
        : paymentsUntilReminder;

    // Rough estimate: each payment is ~1 month apart
    const reminderDate = new Date(subscription.currentPeriodEnd);
    reminderDate.setMonth(reminderDate.getMonth() + paymentsToAdd);
    return reminderDate;
  }

  if (subscription.plan === "ANNUAL") {
    const reminderDate = new Date(subscription.currentPeriodEnd);
    reminderDate.setDate(
      reminderDate.getDate() - ANNUAL_REMINDER_DAYS_BEFORE
    );
    return reminderDate;
  }

  return null;
}

// ─── isInCoolingOffPeriod ────────────────────────────────────────────────
/**
 * Returns true if the subscription is still within the 14-day cooling-off
 * period (UK Consumer Contracts Regulations 2013) AND the customer has NOT
 * waived the cooling-off right.
 */
export function isInCoolingOffPeriod(subscription: Subscription): boolean {
  // If the customer explicitly waived cooling-off, they are not in the period
  if (subscription.coolingOffWaived) return false;

  const now = new Date();
  const subscriptionStart = subscription.currentPeriodStart;
  const daysSinceStart = Math.floor(
    (now.getTime() - subscriptionStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  return daysSinceStart <= COOLING_OFF_DAYS;
}
