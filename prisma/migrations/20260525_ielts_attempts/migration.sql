-- IELTS Academic learning loop — server-side attempt persistence (2026-05-25).
-- Additive only: creates one new table. No existing table is altered, so this
-- is safe to apply to production at any time. Apply with your usual process
-- (e.g. `prisma migrate deploy`, or run this SQL via the Supabase SQL editor).

-- CreateTable
CREATE TABLE "ielts_attempts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "band" DOUBLE PRECISION NOT NULL,
    "testId" TEXT,
    "rawScore" INTEGER,
    "total" INTEGER,
    "taskType" TEXT,
    "promptId" TEXT,
    "responseText" TEXT,
    "criteria" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ielts_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ielts_attempts_userId_skill_idx" ON "ielts_attempts"("userId", "skill");

-- CreateIndex
CREATE INDEX "ielts_attempts_userId_createdAt_idx" ON "ielts_attempts"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "ielts_attempts" ADD CONSTRAINT "ielts_attempts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
