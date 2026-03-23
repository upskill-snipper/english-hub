import { z } from "zod";

// ─── Validation Schemas ───────────────────────────────────────────────
// Zod schemas for all API inputs. These complement the registration
// schema in auth.ts — the schemas here cover the broader API surface.

// ─── Helpers ───────────────────────────────────────────────────────────

/** Count words in a string (splitting on whitespace). */
function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ─── Auth Schemas ──────────────────────────────────────────────────────

export const registerSchema = z
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
    dob: z.string().refine(
      (val) => {
        const date = new Date(val);
        return !isNaN(date.getTime()) && date < new Date();
      },
      { message: "Please enter a valid date of birth" }
    ),
    country: z.enum(["UK", "QA", "OTHER"], {
      message: "Please select a valid country",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

// ─── Essay Schemas ─────────────────────────────────────────────────────

export const essaySchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be 200 characters or fewer"),
  content: z
    .string()
    .min(1, "Essay content is required")
    .refine((val) => wordCount(val) <= 10_000, {
      message: "Essay must be 10,000 words or fewer",
    }),
  subject: z.enum(
    ["ENGLISH_LANGUAGE", "ENGLISH_LITERATURE"],
    { message: "Please select a valid subject" }
  ),
  examBoard: z.enum(
    ["AQA", "EDEXCEL", "OCR", "WJEC", "SQA", "CCEA", "CIE", "OTHER"],
    { message: "Please select a valid exam board" }
  ),
});

// ─── Review Request ────────────────────────────────────────────────────

export const reviewRequestSchema = z.object({
  essayId: z.string().min(1, "Essay ID is required"),
  reason: z.enum(
    ["INACCURATE_GRADE", "MISSING_FEEDBACK", "INAPPROPRIATE_CONTENT", "TECHNICAL_ERROR", "OTHER"],
    { message: "Please select a valid reason" }
  ),
  reasonDetail: z
    .string()
    .min(10, "Please provide at least 10 characters of detail")
    .max(2000, "Detail must be 2,000 characters or fewer"),
  selfAssessment: z
    .string()
    .max(1000, "Self-assessment must be 1,000 characters or fewer")
    .optional(),
});

// ─── Privacy Settings ──────────────────────────────────────────────────

export const privacySettingsSchema = z.object({
  analyticsEnabled: z.boolean(),
  marketingEnabled: z.boolean(),
  dataSharingEnabled: z.boolean(),
  profileVisibleToTeachers: z.boolean(),
  essayHistoryVisible: z.boolean(),
});

// ─── Consent ───────────────────────────────────────────────────────────

export const consentSchema = z.object({
  consentType: z.enum(
    [
      "TERMS",
      "PRIVACY",
      "AI_ANALYSIS",
      "DATA_TRANSFER",
      "MARKETING",
      "PARENTAL_AWARE",
      "COOLING_OFF_WAIVER",
    ],
    { message: "Invalid consent type" }
  ),
  version: z.string().min(1, "Consent version is required"),
  granted: z.boolean(),
});

// ─── Cancellation ──────────────────────────────────────────────────────

export const cancellationSchema = z.object({
  reason: z
    .string()
    .max(1000, "Reason must be 1,000 characters or fewer")
    .optional(),
});

// ─── Safeguarding Report ───────────────────────────────────────────────

export const safeguardingReportSchema = z.object({
  reportType: z.enum(
    ["SELF_HARM", "ABUSE", "BULLYING", "EXPLOITATION", "OTHER"],
    { message: "Please select a valid report type" }
  ),
  description: z
    .string()
    .min(10, "Please provide at least 10 characters")
    .max(5000, "Description must be 5,000 characters or fewer"),
  essayId: z.string().optional(),
  urgency: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]).optional(),
});

// ─── Breach Report ─────────────────────────────────────────────────────

export const breachReportSchema = z.object({
  breachDate: z.string().refine(
    (val) => !isNaN(new Date(val).getTime()),
    { message: "Please enter a valid date" }
  ),
  discoveryDate: z.string().refine(
    (val) => !isNaN(new Date(val).getTime()),
    { message: "Please enter a valid date" }
  ),
  breachType: z.enum(
    [
      "UNAUTHORISED_ACCESS",
      "DATA_LOSS",
      "DATA_THEFT",
      "ACCIDENTAL_DISCLOSURE",
      "SYSTEM_COMPROMISE",
      "OTHER",
    ],
    { message: "Please select a valid breach type" }
  ),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters")
    .max(10000, "Description must be 10,000 characters or fewer"),
  dataSubjectsAffected: z
    .number()
    .int()
    .min(0, "Must be zero or a positive number"),
  categoriesOfData: z
    .array(z.string())
    .min(1, "Select at least one category of data affected"),
  childrenAffected: z.boolean(),
  containmentActions: z
    .string()
    .max(5000, "Containment actions must be 5,000 characters or fewer")
    .optional(),
  notifiedICO: z.boolean(),
  notifiedSubjects: z.boolean(),
  reportedBy: z.string().min(1, "Reporter name is required"),
});

// ─── DSAR (Data Subject Access Request) ────────────────────────────────

export const dsarSchema = z.object({
  requestType: z.enum(
    ["ACCESS", "PORTABILITY", "ERASURE", "RECTIFICATION"],
    { message: "Please select a valid request type" }
  ),
  details: z
    .string()
    .max(2000, "Details must be 2,000 characters or fewer")
    .optional(),
});

// ─── Type Exports ──────────────────────────────────────────────────────

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type EssayInput = z.infer<typeof essaySchema>;
export type ReviewRequestInput = z.infer<typeof reviewRequestSchema>;
export type PrivacySettingsInput = z.infer<typeof privacySettingsSchema>;
export type ConsentInput = z.infer<typeof consentSchema>;
export type CancellationInput = z.infer<typeof cancellationSchema>;
export type SafeguardingReportInput = z.infer<typeof safeguardingReportSchema>;
export type BreachReportInput = z.infer<typeof breachReportSchema>;
export type DSARInput = z.infer<typeof dsarSchema>;
