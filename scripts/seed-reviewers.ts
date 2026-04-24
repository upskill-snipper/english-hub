/**
 * seed-reviewers.ts
 *
 * Provision App Store / Play Store reviewer demo accounts with realistic
 * seeded data. Prisma-based alternative to scripts/seed-reviewers.sql — same
 * behaviour, same idempotency guarantees.
 *
 * Usage:
 *   pnpm tsx scripts/seed-reviewers.ts
 *   pnpm tsx scripts/seed-reviewers.ts --emails=a@b.com,c@d.com
 *
 * Preconditions:
 *   - Each email already has a User row (created via normal web sign-up).
 *   - This script never writes passwords and never grants ADMIN.
 */

import {
  PrismaClient,
  SubscriptionPlan,
  SubscriptionStatus,
  SubscriptionPlatform,
  Subject,
  ExamBoard,
  ConsentType,
  ConsentMethod,
  ProfileVisibility,
} from "@prisma/client"

const prisma = new PrismaClient()

// ─── Canonical reviewer emails ─────────────────────────────────────────────
const APPLE_EMAIL = "reviewer+apple@theenglishhub.app"
const GOOGLE_EMAIL = "reviewer+google@theenglishhub.app"
const DEFAULT_EMAILS: readonly string[] = [APPLE_EMAIL, GOOGLE_EMAIL]

// ─── Realistic essay content ───────────────────────────────────────────────
// Kept inline (not imported) so this script is self-contained and usable
// against any deployment of the schema.

interface SeedEssay {
  slug: "01" | "02"
  title: string
  content: string
  subject: Subject
  examBoard: ExamBoard
  feedback: SeedFeedback
}

interface SeedFeedback {
  overallScore: number
  grammarScore: number
  structureScore: number
  argumentScore: number
  vocabularyScore: number
  /** JSON-shaped summary for the app to parse. */
  feedbackText: string
  /** AO1..AO5 breakdown, JSON-shaped. */
  criteria: string
  limitations: string
  modelVersion: string
}

const ESSAY_1: SeedEssay = {
  slug: "01",
  title: "AQA Language Paper 1 — Descriptive writing: the abandoned pier",
  subject: Subject.LANGUAGE,
  examBoard: ExamBoard.AQA,
  content: [
    "The pier lay slumped against the tide like something the sea had tried to swallow and spat back out. Planks had gone soft at the edges, rotting into the salt, and the wrought-iron spine curved down towards the shingle in a slow, rusted grimace. Gulls wheeled above it, not hunting, just watching — the way an old dog watches a door it no longer expects to open.",
    "I walked the boardwalk in the last of the afternoon light. The wind came in thick bands off the water and every second one of them carried the smell of creosote and cold stone. Beneath my boots the wood gave a little, the sort of give you feel in a bridge that remembers being load-bearing. The slot machines at the far end still stood in their painted cabinets, their bulbs long since looted, their mirrored hoods catching the sun in flat, blind flashes.",
    "I stopped where the railings ended. Below, the sea moved like a great grey sheet being shaken out, and the shadow of the pier stretched across it, broken up by the missing slats into a bar code no one would scan. Somewhere further along a child was shouting at a kite; the wind took the sound and dropped it into the water before it reached me. This, I thought, was the proper kind of silence — not the absence of noise, but the noise of a place still finishing a conversation with the tide.",
    "I thought of my grandmother, who had once eaten chips here out of a paper cone, and who used to say that every seaside town is really a museum that charges on the way in and nothing on the way out. The pier was the exhibit and the empty promenade was the gift shop. I pushed my hands deeper into my pockets. The sun went behind a cloud and the whole structure, for a moment, looked less like a ruin and more like a question; one that the tide, endlessly patient, had been asking for a hundred years.",
  ].join("\n\n"),
  feedback: {
    overallScore: 32.0,
    grammarScore: 6.5,
    structureScore: 7.0,
    argumentScore: 7.0,
    vocabularyScore: 7.5,
    feedbackText: JSON.stringify({
      predictedGrade: "7",
      strengths: [
        'Controlled, evocative imagery ("bar code no one would scan") sustains a clear narrative voice.',
        "Varied sentence lengths create rhythm; short sentences land with weight after longer descriptive sweeps.",
        'Ambitious vocabulary used with precision ("creosote", "grimace", "load-bearing").',
      ],
      improvements: [
        "Push further with structural experimentation — consider a circular return to the opening image.",
        'Some metaphors ("museum that charges on the way in") are strong but unexplored; extend them by one beat.',
        "Dialogue or direct speech could widen tonal range in a piece otherwise dominated by narration.",
      ],
      nextSteps: [
        "Draft a 40-word opening that uses only sensory detail — no metaphor — and compare effect.",
        "Practise AO6 technical accuracy on semi-colon use: aim for three correct uses in your next piece.",
      ],
    }),
    criteria: JSON.stringify({
      AO5: {
        score: 17,
        max: 24,
        band: "Level 3 — Clear",
        note: "Clear, consistent tone; structural shifts could be more purposeful.",
      },
      AO6: {
        score: 15,
        max: 16,
        band: "Level 4 — Convincing",
        note: "Accurate spelling and punctuation; ambitious vocabulary used mostly correctly.",
      },
    }),
    limitations:
      "AI feedback is indicative and aligned to published AO descriptors. A human examiner may weight structural choices differently. Request a human review if the AO5 score feels low relative to your target grade.",
    modelVersion: "claude-opus-4-5-v1",
  },
}

const ESSAY_2: SeedEssay = {
  slug: "02",
  title:
    "Edexcel Literature Paper 2 — A Christmas Carol: how does Dickens present Scrooge's transformation?",
  subject: Subject.LITERATURE,
  examBoard: ExamBoard.EDEXCEL,
  content: [
    'Dickens presents Scrooge\'s transformation in A Christmas Carol as both spiritual reclamation and social correction — a man re-made not only for his own sake but for the sake of the poor whose suffering his greed had helped perpetuate. From the outset, Scrooge is drawn in a vocabulary of cold: he is "hard and sharp as flint", carrying "his own low temperature always about with him". The triadic list — "squeezing, wrenching, grasping, scraping, clutching, covetous" — refuses the reader any quarter: Dickens wants us in no doubt that Scrooge is the embodiment of 1840s laissez-faire capitalism as it appeared to the Victorian poor.',
    'The arrival of Marley\'s ghost, "captive, bound, and double-ironed", gives Scrooge\'s transformation its moral engine. The chains forged "link by link, and yard by yard" literalise the Christian idea that actions in life become burdens in death, and Dickens pointedly sets this warning in a commercial idiom — chains of "cash-boxes, keys, padlocks, ledgers" — so that the reader cannot miss the connection between Scrooge\'s ledger and Marley\'s fate.',
    'The transformation itself is staged across three stave-journeys. The Ghost of Christmas Past softens him through grief: the image of the "solitary child, neglected by his friends" reframes the miser as a victim of emotional poverty before he became an agent of economic poverty. The Ghost of Christmas Present widens the lens — Tiny Tim\'s "active little crutch" and the allegorical children Ignorance and Want compel Scrooge, and the reader, to recognise systemic cruelty. The Ghost of Yet To Come is silent, and Dickens\'s silence is deliberate: Scrooge must fill the vacuum himself, reading his own gravestone as a verdict he has earned.',
    'By stave five Dickens rewards the changed Scrooge not with private peace but with public action — a prize turkey for the Cratchits, a raise for Bob, a pledge to honour Christmas "in my heart". The transformation is therefore theological and political at once: Dickens uses the novella form to stage a conversion, but one whose proof is distribution, not prayer. In a society which, as the narrator drily notes, had "decreased" its surplus population through the workhouse, Dickens insists on a redemption measured in coal, food, and wages.',
  ].join("\n\n"),
  feedback: {
    overallScore: 34.0,
    grammarScore: 7.5,
    structureScore: 7.5,
    argumentScore: 8.0,
    vocabularyScore: 7.5,
    feedbackText: JSON.stringify({
      predictedGrade: "8",
      strengths: [
        "Confident integrated quotation; textual references chosen for analytical yield, not decoration.",
        "Consistent conceptual argument — reads Dickens politically as well as morally.",
        "Strong contextual interweaving (laissez-faire capitalism, workhouse, Malthus) tied to writer's craft rather than bolted on.",
      ],
      improvements: [
        "Occasional sweeping generalisations could be narrowed to specific effects on specific readers.",
        'AO2 could go deeper at word-level — e.g. unpack the verb "decreased" to expose Dickens\'s irony.',
        "Conclusion recapitulates argument; a final re-contextualisation would lift the grade further.",
      ],
      nextSteps: [
        "Re-read the Ignorance and Want passage and annotate five language features with precise effect.",
        "Rewrite the final paragraph to end on a single-sentence critical claim.",
      ],
    }),
    criteria: JSON.stringify({
      AO1: {
        score: 10,
        max: 12,
        band: "Level 5 — Convincing",
        note: "Informed personal response; well-chosen textual evidence.",
      },
      AO2: {
        score: 9,
        max: 12,
        band: "Level 4 — Thoughtful",
        note: "Analyses language and structure; could go further at word-level.",
      },
      AO3: {
        score: 5,
        max: 6,
        band: "Level 5",
        note: "Context integrated with interpretation, not listed.",
      },
      AO4: {
        score: 3,
        max: 4,
        band: "Level 4",
        note: "Accurate, varied expression.",
      },
    }),
    limitations:
      "AI feedback is indicative and benchmarked against the Edexcel 1ET0 generic grid. Context-led marks (AO3) are notoriously variable between examiners — treat this as a guide, not a ceiling.",
    modelVersion: "claude-opus-4-5-v1",
  },
}

const ESSAYS: readonly SeedEssay[] = [ESSAY_1, ESSAY_2]

// ─── Arg parsing ───────────────────────────────────────────────────────────

function parseEmails(argv: readonly string[]): string[] {
  const override = argv.find((a) => a.startsWith("--emails="))
  if (!override) return [...DEFAULT_EMAILS]
  const raw = override.slice("--emails=".length)
  const emails = raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter((e) => e.length > 0)
  if (emails.length === 0) {
    throw new Error("--emails= provided but empty")
  }
  return emails
}

function platformForEmail(email: string): SubscriptionPlatform {
  if (email.includes("google") || email.includes("android")) {
    return SubscriptionPlatform.ANDROID
  }
  return SubscriptionPlatform.IOS
}

// ─── Core seeding ──────────────────────────────────────────────────────────

async function seedReviewer(email: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw new Error(
      `User not found for email ${email}. Sign them up via the web first.`,
    )
  }

  const now = new Date()
  const start = new Date(now.getTime() - 24 * 60 * 60 * 1000) // 24h ago
  const end = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000) // +365d
  const platform = platformForEmail(email)

  await prisma.$transaction(async (tx) => {
    // a. Subscription — upsert keyed on unique userId
    await tx.subscription.upsert({
      where: { userId: user.id },
      create: {
        id: `sub_reviewer_${user.id}`,
        userId: user.id,
        plan: SubscriptionPlan.ANNUAL,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: start,
        currentPeriodEnd: end,
        paymentCount: 1,
        isTeacherPlan: false,
        platform,
        originalPurchaseDate: start,
        revenuecatAppUserId: user.id,
        revenuecatProductId:
          "com.upskillenergy.theenglishhub.student.annual",
      },
      update: {
        plan: SubscriptionPlan.ANNUAL,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: start,
        currentPeriodEnd: end,
        platform,
        originalPurchaseDate: start,
        revenuecatAppUserId: user.id,
        revenuecatProductId:
          "com.upskillenergy.theenglishhub.student.annual",
        cancelledAt: null,
        refundedAt: null,
      },
    })

    // b. Privacy settings — adult reviewer defaults
    await tx.privacySettings.upsert({
      where: { userId: user.id },
      create: {
        id: `prv_reviewer_${user.id}`,
        userId: user.id,
        analyticsEnabled: false,
        marketingEnabled: false,
        aiTrainingOptIn: false,
        aiOptOut: false,
        schoolSharingEnabled: false,
        researchDataEnabled: false,
        profileVisibility: ProfileVisibility.PRIVATE,
      },
      update: {
        analyticsEnabled: false,
        marketingEnabled: false,
        aiTrainingOptIn: false,
        aiOptOut: false,
        schoolSharingEnabled: false,
        researchDataEnabled: false,
        profileVisibility: ProfileVisibility.PRIVATE,
      },
    })

    // c. Consent — TERMS + PRIVACY at v1.0
    const consentTypes: ConsentType[] = [
      ConsentType.TERMS,
      ConsentType.PRIVACY,
    ]
    for (const consentType of consentTypes) {
      const consentId = `cns_reviewer_${user.id}_${consentType}`
      await tx.consent.upsert({
        where: { id: consentId },
        create: {
          id: consentId,
          userId: user.id,
          consentType,
          version: "1.0",
          granted: true,
          method: ConsentMethod.ACTIVE_CHECKBOX,
          ipAddress: "127.0.0.1",
        },
        update: {
          granted: true,
          grantedAt: new Date(),
          withdrawnAt: null,
          version: "1.0",
        },
      })
    }

    // d + e. Essays and their AIFeedback
    for (const seed of ESSAYS) {
      const essayId = `ess_reviewer_${user.id}_${seed.slug}`
      await tx.essay.upsert({
        where: { id: essayId },
        create: {
          id: essayId,
          userId: user.id,
          title: seed.title,
          content: seed.content,
          subject: seed.subject,
          examBoard: seed.examBoard,
        },
        update: {
          title: seed.title,
          content: seed.content,
          subject: seed.subject,
          examBoard: seed.examBoard,
          deletedAt: null,
        },
      })

      const feedbackId = `aif_reviewer_${essayId}`
      await tx.aIFeedback.upsert({
        where: { essayId },
        create: {
          id: feedbackId,
          essayId,
          overallScore: seed.feedback.overallScore,
          grammarScore: seed.feedback.grammarScore,
          structureScore: seed.feedback.structureScore,
          argumentScore: seed.feedback.argumentScore,
          vocabularyScore: seed.feedback.vocabularyScore,
          feedbackText: seed.feedback.feedbackText,
          criteria: seed.feedback.criteria,
          limitations: seed.feedback.limitations,
          modelVersion: seed.feedback.modelVersion,
        },
        update: {
          overallScore: seed.feedback.overallScore,
          grammarScore: seed.feedback.grammarScore,
          structureScore: seed.feedback.structureScore,
          argumentScore: seed.feedback.argumentScore,
          vocabularyScore: seed.feedback.vocabularyScore,
          feedbackText: seed.feedback.feedbackText,
          criteria: seed.feedback.criteria,
          limitations: seed.feedback.limitations,
          modelVersion: seed.feedback.modelVersion,
        },
      })
    }
  })

  // eslint-disable-next-line no-console
  console.log(
    `  ✓ ${email}  [${platform}]  sub=ACTIVE/ANNUAL  essays=${ESSAYS.length}`,
  )
}

async function verify(emails: readonly string[]): Promise<void> {
  for (const email of emails) {
    const u = await prisma.user.findUnique({
      where: { email },
      include: {
        subscription: true,
        essays: { include: { aiFeedback: true } },
        consents: true,
        privacySettings: true,
      },
    })
    if (!u) continue
    const feedbackCount = u.essays.filter((e) => e.aiFeedback !== null).length
    // eslint-disable-next-line no-console
    console.log(
      `  • ${u.email}  role=${u.role}  sub=${u.subscription?.status ?? "—"}/${u.subscription?.plan ?? "—"}/${u.subscription?.platform ?? "—"}  essays=${u.essays.length}  feedback=${feedbackCount}  consents=${u.consents.length}  privacy=${u.privacySettings ? "yes" : "no"}`,
    )
  }
}

// ─── Entry point ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const emails = parseEmails(process.argv.slice(2))

  // eslint-disable-next-line no-console
  console.log(`Seeding reviewer accounts: ${emails.join(", ")}\n`)

  for (const email of emails) {
    await seedReviewer(email)
  }

  // eslint-disable-next-line no-console
  console.log("\n────────────────────────────────────────────────")
  // eslint-disable-next-line no-console
  console.log(" Reviewer seed — verification")
  // eslint-disable-next-line no-console
  console.log("────────────────────────────────────────────────")
  await verify(emails)
  // eslint-disable-next-line no-console
  console.log(
    "\n Reviewer data ready. Sign in via each reviewer email and confirm\n the Home screen shows 2 pre-seeded essays and a Pro badge.\n",
  )
}

main()
  .catch((err: unknown) => {
    // eslint-disable-next-line no-console
    console.error("Reviewer seed failed:", err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
