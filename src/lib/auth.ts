import bcrypt from "bcryptjs";
import { z } from "zod";

// ─── Constants ──────────────────────────────────────────────────────────
const SALT_ROUNDS = 12;
const SESSION_EXPIRY_HOURS = 24;
const MIN_AGE = 14;
const MINOR_AGE_THRESHOLD = 18;

// ─── Schemas ────────────────────────────────────────────────────────────

export const registrationSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name is too long"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name is too long"),
    dobDay: z.number().int().min(1).max(31),
    dobMonth: z.number().int().min(1).max(12),
    dobYear: z.number().int().min(1900).max(new Date().getFullYear()),
    country: z.enum(["UK", "QA", "OTHER"]),
    school: z.string().max(200).optional(),

    // Required consents
    consentTerms: z.literal(true, "You must accept the Terms & Conditions"),
    consentPrivacy: z.literal(true, "You must accept the Privacy Policy"),
    consentAiAnalysis: z.literal(true, "You must consent to AI essay analysis to use this service"),
    consentDataTransfer: z.boolean().optional(),

    // Minor-specific consents
    consentParentalAware: z.boolean().optional(),

    // Optional
    consentMarketing: z.boolean().optional(),
    coolingOffWaiver: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      if (data.country === "QA") {
        return data.consentDataTransfer === true;
      }
      return true;
    },
    {
      message:
        "You must consent to international data transfer for Qatar users",
      path: ["consentDataTransfer"],
    }
  )
  .refine(
    (data) => {
      const age = calculateAge(data.dobYear, data.dobMonth, data.dobDay);
      if (age >= MIN_AGE && age < MINOR_AGE_THRESHOLD) {
        return data.consentParentalAware === true;
      }
      return true;
    },
    {
      message:
        "Minors must confirm a parent/guardian is aware of this registration",
      path: ["consentParentalAware"],
    }
  );

// ─── Role type ───────────────────────────────────────────────────────────
export type UserRole = "student" | "teacher" | "parent";

// ─── Teacher registration schema ─────────────────────────────────────────
export const teacherRegistrationSchema = z
  .object({
    role: z.literal("teacher"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name is too long"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name is too long"),
    country: z.enum(["UK", "QA", "OTHER"]),
    schoolName: z
      .string()
      .min(1, "School name is required")
      .max(200, "School name is too long"),
    schoolEmail: z.string().email("Please enter a valid school email").optional().or(z.literal("")),
    studentCount: z.enum(["1-10", "11-30", "31-60", "61-100", "100+"], "Please select how many students you have"),
    subjectTaught: z
      .string()
      .min(1, "Subject taught is required")
      .max(100, "Subject is too long"),

    // Required consents
    consentTerms: z.literal(true, "You must accept the Terms & Conditions"),
    consentPrivacy: z.literal(true, "You must accept the Privacy Policy"),
    consentDataTransfer: z.boolean().optional(),

    // Optional
    consentMarketing: z.boolean().optional(),
    coolingOffWaiver: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      if (data.country === "QA") {
        return data.consentDataTransfer === true;
      }
      return true;
    },
    {
      message:
        "You must consent to international data transfer for Qatar users",
      path: ["consentDataTransfer"],
    }
  );

// ─── Parent registration schema ──────────────────────────────────────────
export const parentRegistrationSchema = z
  .object({
    role: z.literal("parent"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name is too long"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name is too long"),
    country: z.enum(["UK", "QA", "OTHER"]),
    studentEmailOrCode: z
      .string()
      .min(1, "Please enter your child's email or link code"),
    consentProgressReports: z.literal(true, "You must consent to receive weekly progress reports"),

    // Required consents
    consentTerms: z.literal(true, "You must accept the Terms & Conditions"),
    consentPrivacy: z.literal(true, "You must accept the Privacy Policy"),
    consentDataTransfer: z.boolean().optional(),

    // Optional
    consentMarketing: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      if (data.country === "QA") {
        return data.consentDataTransfer === true;
      }
      return true;
    },
    {
      message:
        "You must consent to international data transfer for Qatar users",
      path: ["consentDataTransfer"],
    }
  );

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

// ─── Age helpers ────────────────────────────────────────────────────────

export function calculateAge(year: number, month: number, day: number): number {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export function isMinor(year: number, month: number, day: number): boolean {
  return calculateAge(year, month, day) < MINOR_AGE_THRESHOLD;
}

export function isTooYoung(year: number, month: number, day: number): boolean {
  return calculateAge(year, month, day) < MIN_AGE;
}

// ─── Password helpers ───────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// ─── Session helpers ────────────────────────────────────────────────────

export function generateSessionToken(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const tokenLength = 64;
  let token = "";
  const array = new Uint8Array(tokenLength);
  crypto.getRandomValues(array);
  for (let i = 0; i < tokenLength; i++) {
    token += chars[array[i] % chars.length];
  }
  return token;
}

export function getSessionExpiry(): Date {
  return new Date(Date.now() + SESSION_EXPIRY_HOURS * 60 * 60 * 1000);
}

// ─── Consent record builder ────────────────────────────────────────────

export interface ConsentRecord {
  type: string;
  granted: boolean;
  version: string;
  timestamp: Date;
  ip?: string;
}

export function buildConsentRecords(
  data: z.infer<typeof registrationSchema>
): ConsentRecord[] {
  const now = new Date();
  const records: ConsentRecord[] = [
    {
      type: "TERMS_AND_CONDITIONS",
      granted: data.consentTerms as boolean,
      version: "1.0",
      timestamp: now,
    },
    {
      type: "PRIVACY_POLICY",
      granted: data.consentPrivacy as boolean,
      version: "1.0",
      timestamp: now,
    },
    {
      type: "AI_ESSAY_ANALYSIS",
      granted: data.consentAiAnalysis as boolean,
      version: "1.0",
      timestamp: now,
    },
    {
      type: "MARKETING_EMAILS",
      granted: data.consentMarketing ?? false,
      version: "1.0",
      timestamp: now,
    },
    {
      type: "COOLING_OFF_WAIVER",
      granted: data.coolingOffWaiver ?? false,
      version: "1.0",
      timestamp: now,
    },
  ];

  if (data.country === "QA") {
    records.push({
      type: "INTERNATIONAL_DATA_TRANSFER",
      granted: data.consentDataTransfer ?? false,
      version: "1.0",
      timestamp: now,
    });
  }

  if (data.consentParentalAware) {
    records.push({
      type: "PARENTAL_AWARENESS",
      granted: true,
      version: "1.0",
      timestamp: now,
    });
  }

  return records;
}

// ─── Default privacy settings ───────────────────────────────────────────

export interface PrivacySettings {
  essayVisibility: "HIGH";
  profileVisibility: "HIGH";
  analyticsSharing: "OFF";
  teacherAccess: "OFF";
}

export function getDefaultPrivacySettings(): PrivacySettings {
  return {
    essayVisibility: "HIGH",
    profileVisibility: "HIGH",
    analyticsSharing: "OFF",
    teacherAccess: "OFF",
  };
}
