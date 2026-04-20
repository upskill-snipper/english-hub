-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'ADMIN', 'REVIEWER', 'TEACHER', 'PARENT');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'DELETED');

-- CreateEnum
CREATE TYPE "ConsentType" AS ENUM ('TERMS', 'PRIVACY', 'AI_PROCESSING', 'DATA_TRANSFER', 'MARKETING', 'COOLING_OFF_WAIVER', 'COOKIE_ANALYTICS', 'COOKIE_MARKETING');

-- CreateEnum
CREATE TYPE "ConsentMethod" AS ENUM ('ACTIVE_CHECKBOX', 'EXPLICIT');

-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('LANGUAGE', 'LITERATURE');

-- CreateEnum
CREATE TYPE "ExamBoard" AS ENUM ('AQA', 'EDEXCEL', 'OCR', 'EDUQAS', 'EDEXCEL_IGCSE', 'CAMBRIDGE_0500', 'CAMBRIDGE_0990');

-- CreateEnum
CREATE TYPE "SuggestionType" AS ENUM ('SUGGESTION', 'BUG_REPORT', 'FEEDBACK');

-- CreateEnum
CREATE TYPE "SuggestionStatus" AS ENUM ('PENDING', 'REVIEWED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "ReviewReason" AS ENUM ('DISAGREE_WITH_SCORE', 'FEEDBACK_UNCLEAR', 'TECHNICAL_ERROR', 'BIAS_CONCERN', 'OTHER');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'COMPLETED');

-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('MONTHLY', 'ANNUAL');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELLED', 'PAST_DUE', 'TRIALING');

-- CreateEnum
CREATE TYPE "ReminderType" AS ENUM ('MONTHLY_6TH', 'ANNUAL_RENEWAL', 'TRIAL_ENDING');

-- CreateEnum
CREATE TYPE "DataRequestType" AS ENUM ('ACCESS', 'PORTABILITY', 'ERASURE', 'RECTIFICATION');

-- CreateEnum
CREATE TYPE "DataRequestStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'REFUSED');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "ProfileVisibility" AS ENUM ('PRIVATE', 'SCHOOL_ONLY', 'PUBLIC');

-- CreateEnum
CREATE TYPE "AssignmentType" AS ENUM ('HOMEWORK', 'CLASSWORK', 'ASSESSMENT', 'REVISION');

-- CreateEnum
CREATE TYPE "AssignmentStatus" AS ENUM ('DRAFT', 'ACTIVE', 'CLOSED');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'SUBMITTED', 'GRADED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "supabaseUserId" UUID,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "school" TEXT,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "selectedExamBoard" "ExamBoard",
    "isMinor" BOOLEAN NOT NULL DEFAULT false,
    "country" TEXT NOT NULL,
    "accountStatus" "AccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "parentId" TEXT,
    "linkedTeacherId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "consentType" "ConsentType" NOT NULL,
    "version" TEXT NOT NULL,
    "granted" BOOLEAN NOT NULL,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "withdrawnAt" TIMESTAMP(3),
    "method" "ConsentMethod" NOT NULL,
    "ipAddress" TEXT NOT NULL,

    CONSTRAINT "Consent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CookieConsent" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "userId" TEXT,
    "choice" TEXT NOT NULL,
    "analytics" BOOLEAN NOT NULL DEFAULT false,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "ipHash" TEXT NOT NULL,
    "userAgent" TEXT,
    "consentedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" TEXT NOT NULL,

    CONSTRAINT "CookieConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Essay" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "subject" "Subject" NOT NULL,
    "examBoard" "ExamBoard" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Essay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIFeedback" (
    "id" TEXT NOT NULL,
    "essayId" TEXT NOT NULL,
    "overallScore" DOUBLE PRECISION NOT NULL,
    "grammarScore" DOUBLE PRECISION NOT NULL,
    "structureScore" DOUBLE PRECISION NOT NULL,
    "argumentScore" DOUBLE PRECISION NOT NULL,
    "vocabularyScore" DOUBLE PRECISION NOT NULL,
    "feedbackText" TEXT NOT NULL,
    "criteria" TEXT NOT NULL,
    "limitations" TEXT NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AIFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HumanReviewRequest" (
    "id" TEXT NOT NULL,
    "essayId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "aiFeedbackId" TEXT NOT NULL,
    "reason" "ReviewReason" NOT NULL,
    "reasonDetail" TEXT NOT NULL,
    "selfAssessment" TEXT,
    "status" "ReviewStatus" NOT NULL DEFAULT 'SUBMITTED',
    "referenceNumber" TEXT NOT NULL,
    "reviewerResponse" TEXT,
    "reviewedById" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),

    CONSTRAINT "HumanReviewRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stripeCustomerId" TEXT NOT NULL,
    "stripeSubscriptionId" TEXT NOT NULL,
    "plan" "SubscriptionPlan" NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'TRIALING',
    "currentPeriodStart" TIMESTAMP(3) NOT NULL,
    "currentPeriodEnd" TIMESTAMP(3) NOT NULL,
    "cancelledAt" TIMESTAMP(3),
    "coolingOffWaived" BOOLEAN NOT NULL DEFAULT false,
    "coolingOffWaivedAt" TIMESTAMP(3),
    "paymentCount" INTEGER NOT NULL DEFAULT 0,
    "isTeacherPlan" BOOLEAN NOT NULL DEFAULT false,
    "maxStudents" INTEGER,
    "teacherPriceId" TEXT,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RenewalReminder" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "ReminderType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "nextPaymentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RenewalReminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataAccessRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "DataRequestType" NOT NULL,
    "status" "DataRequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "responseDetails" TEXT,

    CONSTRAINT "DataAccessRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SafeguardingReport" (
    "id" TEXT NOT NULL,
    "reporterId" TEXT,
    "reportType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "severity" "Severity" NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedTo" TEXT,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "SafeguardingReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "details" JSONB,
    "ipAddress" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivacySettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "analyticsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "marketingEnabled" BOOLEAN NOT NULL DEFAULT false,
    "aiTrainingOptIn" BOOLEAN NOT NULL DEFAULT false,
    "aiOptOut" BOOLEAN NOT NULL DEFAULT false,
    "schoolSharingEnabled" BOOLEAN NOT NULL DEFAULT false,
    "researchDataEnabled" BOOLEAN NOT NULL DEFAULT false,
    "profileVisibility" "ProfileVisibility" NOT NULL DEFAULT 'PRIVATE',

    CONSTRAINT "PrivacySettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suggestion" (
    "id" TEXT NOT NULL,
    "type" "SuggestionType" NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "page" TEXT,
    "userId" TEXT,
    "email" TEXT,
    "status" "SuggestionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParentInvite" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),
    "usedByParentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParentInvite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "AssignmentType" NOT NULL,
    "status" "AssignmentStatus" NOT NULL DEFAULT 'ACTIVE',
    "courseId" TEXT,
    "moduleIds" TEXT[],
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssignmentSubmission" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING',
    "score" DOUBLE PRECISION,
    "feedback" TEXT,
    "submittedAt" TIMESTAMP(3),
    "gradedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssignmentSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeeklyReport" (
    "id" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "weekStarting" TIMESTAMP(3) NOT NULL,
    "essaysCompleted" INTEGER NOT NULL,
    "totalTimeSpent" INTEGER NOT NULL,
    "averageScore" DOUBLE PRECISION,
    "projectedGrade" TEXT,
    "strengths" JSONB,
    "weaknesses" JSONB,
    "recommendations" JSONB,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeeklyReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_supabaseUserId_key" ON "User"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_accountStatus_idx" ON "User"("accountStatus");

-- CreateIndex
CREATE INDEX "User_deletedAt_idx" ON "User"("deletedAt");

-- CreateIndex
CREATE INDEX "User_school_idx" ON "User"("school");

-- CreateIndex
CREATE INDEX "User_parentId_idx" ON "User"("parentId");

-- CreateIndex
CREATE INDEX "User_linkedTeacherId_idx" ON "User"("linkedTeacherId");

-- CreateIndex
CREATE INDEX "Consent_userId_idx" ON "Consent"("userId");

-- CreateIndex
CREATE INDEX "Consent_consentType_idx" ON "Consent"("consentType");

-- CreateIndex
CREATE INDEX "Consent_userId_consentType_idx" ON "Consent"("userId", "consentType");

-- CreateIndex
CREATE INDEX "CookieConsent_visitorId_idx" ON "CookieConsent"("visitorId");

-- CreateIndex
CREATE INDEX "CookieConsent_userId_idx" ON "CookieConsent"("userId");

-- CreateIndex
CREATE INDEX "CookieConsent_consentedAt_idx" ON "CookieConsent"("consentedAt");

-- CreateIndex
CREATE INDEX "Essay_userId_idx" ON "Essay"("userId");

-- CreateIndex
CREATE INDEX "Essay_subject_idx" ON "Essay"("subject");

-- CreateIndex
CREATE INDEX "Essay_examBoard_idx" ON "Essay"("examBoard");

-- CreateIndex
CREATE INDEX "Essay_deletedAt_idx" ON "Essay"("deletedAt");

-- CreateIndex
CREATE INDEX "Essay_userId_createdAt_idx" ON "Essay"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Essay_userId_deletedAt_createdAt_idx" ON "Essay"("userId", "deletedAt", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "AIFeedback_essayId_key" ON "AIFeedback"("essayId");

-- CreateIndex
CREATE INDEX "AIFeedback_essayId_idx" ON "AIFeedback"("essayId");

-- CreateIndex
CREATE UNIQUE INDEX "HumanReviewRequest_referenceNumber_key" ON "HumanReviewRequest"("referenceNumber");

-- CreateIndex
CREATE INDEX "HumanReviewRequest_essayId_idx" ON "HumanReviewRequest"("essayId");

-- CreateIndex
CREATE INDEX "HumanReviewRequest_userId_idx" ON "HumanReviewRequest"("userId");

-- CreateIndex
CREATE INDEX "HumanReviewRequest_aiFeedbackId_idx" ON "HumanReviewRequest"("aiFeedbackId");

-- CreateIndex
CREATE INDEX "HumanReviewRequest_status_idx" ON "HumanReviewRequest"("status");

-- CreateIndex
CREATE INDEX "HumanReviewRequest_referenceNumber_idx" ON "HumanReviewRequest"("referenceNumber");

-- CreateIndex
CREATE INDEX "HumanReviewRequest_reviewedById_idx" ON "HumanReviewRequest"("reviewedById");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_userId_key" ON "Subscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripeSubscriptionId_key" ON "Subscription"("stripeSubscriptionId");

-- CreateIndex
CREATE INDEX "Subscription_userId_idx" ON "Subscription"("userId");

-- CreateIndex
CREATE INDEX "Subscription_stripeCustomerId_idx" ON "Subscription"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "Subscription_stripeSubscriptionId_idx" ON "Subscription"("stripeSubscriptionId");

-- CreateIndex
CREATE INDEX "Subscription_status_idx" ON "Subscription"("status");

-- CreateIndex
CREATE INDEX "RenewalReminder_subscriptionId_idx" ON "RenewalReminder"("subscriptionId");

-- CreateIndex
CREATE INDEX "RenewalReminder_type_idx" ON "RenewalReminder"("type");

-- CreateIndex
CREATE INDEX "RenewalReminder_nextPaymentDate_idx" ON "RenewalReminder"("nextPaymentDate");

-- CreateIndex
CREATE INDEX "DataAccessRequest_userId_idx" ON "DataAccessRequest"("userId");

-- CreateIndex
CREATE INDEX "DataAccessRequest_status_idx" ON "DataAccessRequest"("status");

-- CreateIndex
CREATE INDEX "DataAccessRequest_type_idx" ON "DataAccessRequest"("type");

-- CreateIndex
CREATE INDEX "SafeguardingReport_reporterId_idx" ON "SafeguardingReport"("reporterId");

-- CreateIndex
CREATE INDEX "SafeguardingReport_severity_idx" ON "SafeguardingReport"("severity");

-- CreateIndex
CREATE INDEX "SafeguardingReport_status_idx" ON "SafeguardingReport"("status");

-- CreateIndex
CREATE INDEX "SafeguardingReport_assignedTo_idx" ON "SafeguardingReport"("assignedTo");

-- CreateIndex
CREATE INDEX "SafeguardingReport_createdAt_idx" ON "SafeguardingReport"("createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_userId_idx" ON "AuditLog"("userId");

-- CreateIndex
CREATE INDEX "AuditLog_action_idx" ON "AuditLog"("action");

-- CreateIndex
CREATE INDEX "AuditLog_resource_resourceId_idx" ON "AuditLog"("resource", "resourceId");

-- CreateIndex
CREATE INDEX "AuditLog_timestamp_idx" ON "AuditLog"("timestamp");

-- CreateIndex
CREATE INDEX "AuditLog_userId_timestamp_idx" ON "AuditLog"("userId", "timestamp" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "PrivacySettings_userId_key" ON "PrivacySettings"("userId");

-- CreateIndex
CREATE INDEX "PrivacySettings_userId_idx" ON "PrivacySettings"("userId");

-- CreateIndex
CREATE INDEX "Suggestion_userId_idx" ON "Suggestion"("userId");

-- CreateIndex
CREATE INDEX "Suggestion_type_idx" ON "Suggestion"("type");

-- CreateIndex
CREATE INDEX "Suggestion_status_idx" ON "Suggestion"("status");

-- CreateIndex
CREATE INDEX "Suggestion_createdAt_idx" ON "Suggestion"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ParentInvite_code_key" ON "ParentInvite"("code");

-- CreateIndex
CREATE INDEX "ParentInvite_code_idx" ON "ParentInvite"("code");

-- CreateIndex
CREATE INDEX "ParentInvite_studentId_idx" ON "ParentInvite"("studentId");

-- CreateIndex
CREATE INDEX "ParentInvite_expiresAt_idx" ON "ParentInvite"("expiresAt");

-- CreateIndex
CREATE INDEX "ParentInvite_usedByParentId_idx" ON "ParentInvite"("usedByParentId");

-- CreateIndex
CREATE INDEX "Assignment_classId_idx" ON "Assignment"("classId");

-- CreateIndex
CREATE INDEX "Assignment_teacherId_idx" ON "Assignment"("teacherId");

-- CreateIndex
CREATE INDEX "Assignment_status_idx" ON "Assignment"("status");

-- CreateIndex
CREATE INDEX "Assignment_dueDate_idx" ON "Assignment"("dueDate");

-- CreateIndex
CREATE INDEX "Assignment_classId_status_idx" ON "Assignment"("classId", "status");

-- CreateIndex
CREATE INDEX "AssignmentSubmission_assignmentId_idx" ON "AssignmentSubmission"("assignmentId");

-- CreateIndex
CREATE INDEX "AssignmentSubmission_studentId_idx" ON "AssignmentSubmission"("studentId");

-- CreateIndex
CREATE INDEX "AssignmentSubmission_status_idx" ON "AssignmentSubmission"("status");

-- CreateIndex
CREATE UNIQUE INDEX "AssignmentSubmission_assignmentId_studentId_key" ON "AssignmentSubmission"("assignmentId", "studentId");

-- CreateIndex
CREATE INDEX "WeeklyReport_parentId_idx" ON "WeeklyReport"("parentId");

-- CreateIndex
CREATE INDEX "WeeklyReport_studentId_idx" ON "WeeklyReport"("studentId");

-- CreateIndex
CREATE INDEX "WeeklyReport_weekStarting_idx" ON "WeeklyReport"("weekStarting");

-- CreateIndex
CREATE INDEX "WeeklyReport_parentId_weekStarting_idx" ON "WeeklyReport"("parentId", "weekStarting");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Essay" ADD CONSTRAINT "Essay_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIFeedback" ADD CONSTRAINT "AIFeedback_essayId_fkey" FOREIGN KEY ("essayId") REFERENCES "Essay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanReviewRequest" ADD CONSTRAINT "HumanReviewRequest_essayId_fkey" FOREIGN KEY ("essayId") REFERENCES "Essay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanReviewRequest" ADD CONSTRAINT "HumanReviewRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanReviewRequest" ADD CONSTRAINT "HumanReviewRequest_aiFeedbackId_fkey" FOREIGN KEY ("aiFeedbackId") REFERENCES "AIFeedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HumanReviewRequest" ADD CONSTRAINT "HumanReviewRequest_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RenewalReminder" ADD CONSTRAINT "RenewalReminder_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataAccessRequest" ADD CONSTRAINT "DataAccessRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafeguardingReport" ADD CONSTRAINT "SafeguardingReport_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafeguardingReport" ADD CONSTRAINT "SafeguardingReport_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivacySettings" ADD CONSTRAINT "PrivacySettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentInvite" ADD CONSTRAINT "ParentInvite_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentInvite" ADD CONSTRAINT "ParentInvite_usedByParentId_fkey" FOREIGN KEY ("usedByParentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignmentSubmission" ADD CONSTRAINT "AssignmentSubmission_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyReport" ADD CONSTRAINT "WeeklyReport_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyReport" ADD CONSTRAINT "WeeklyReport_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

