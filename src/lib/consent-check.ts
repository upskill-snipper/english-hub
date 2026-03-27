import { prisma } from "@/lib/prisma";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { hasConsent, CONSENT_TYPES } from "@/lib/consent";

// ─── Types ──────────────────────────────────────────────────────────────

export interface ConsentCheckResult {
  allowed: boolean;
  reason?: string;
}

// ─── checkParentalConsent ───────────────────────────────────────────────

/**
 * Checks whether a minor user has the required parental consent to access
 * a feature. A minor is considered to have parental consent if:
 *
 * 1. They have a linked parent (via parentId in the User model), OR
 * 2. They have an approved record in the parental_consents table
 *    (used by the school consent flow).
 *
 * Non-minor users always pass this check.
 */
export async function checkParentalConsent(
  userId: string
): Promise<ConsentCheckResult> {
  // Look up the user to determine if they are a minor and if they have a linked parent
  const user = await prisma.user.findUnique({
    where: { id: userId, accountStatus: "ACTIVE" },
    select: {
      isMinor: true,
      parentId: true,
    },
  });

  if (!user) {
    return { allowed: false, reason: "User not found." };
  }

  // Non-minor users do not require parental consent
  if (!user.isMinor) {
    return { allowed: true };
  }

  // Check 1: User has a linked parent via the parent-linking system
  if (user.parentId) {
    return { allowed: true };
  }

  // Check 2: User has an approved parental consent via the school consent flow
  const admin = createServiceRoleClient();
  const { data: approvedConsent } = await admin
    .from("parental_consents")
    .select("id")
    .eq("student_user_id", userId)
    .eq("status", "approved")
    .limit(1)
    .single();

  if (approvedConsent) {
    return { allowed: true };
  }

  return {
    allowed: false,
    reason:
      "Parental consent is required before you can use this feature. Please ask your parent or guardian to complete the consent process.",
  };
}

// ─── checkMinorAIConsent ────────────────────────────────────────────────

/**
 * Combined check for minor users accessing AI-powered features.
 * Verifies both:
 * 1. The user has AI_PROCESSING consent (required for all users)
 * 2. If the user is a minor, they have parental consent
 *
 * Returns { allowed: true } if all checks pass, or { allowed: false, reason }
 * with a user-facing message if any check fails.
 */
export async function checkMinorAIConsent(
  userId: string
): Promise<ConsentCheckResult> {
  // Check AI processing consent first (applies to all users)
  const hasAIConsent = await hasConsent(userId, CONSENT_TYPES.AI_PROCESSING);
  if (!hasAIConsent) {
    return {
      allowed: false,
      reason:
        "You must consent to AI processing before using this feature. Please update your consent preferences in settings.",
    };
  }

  // Check parental consent for minors
  return checkParentalConsent(userId);
}
