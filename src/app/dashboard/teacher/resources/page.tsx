import Link from "next/link";

/* ─── Mock data ─────────────────────────────────────────────────────────
   TODO: Replace with real API/CMS data:
   - GET /api/teacher/resources — categorised resource list
   - Resources could come from a headless CMS or database
   - Printable worksheets could be stored in cloud storage (S3/GCS)
   ───────────────────────────────────────────────────────────────────── */

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "lesson-plan" | "assessment" | "exam-board" | "worksheet";
  examBoard?: string;
  downloadUrl?: string;
  detailUrl?: string;
}

const LESSON_PLANS: Resource[] = [
  {
    id: "lp1",
    title: "An Inspector Calls: 5-Lesson Scheme",
    description: "Complete scheme of work covering themes, characters, and exam-style questions. Includes starter activities and plenaries.",
    type: "lesson-plan",
    detailUrl: "/dashboard/teacher/resources/lesson-plans",
  },
  {
    id: "lp2",
    title: "Creative Writing Masterclass (3 Lessons)",
    description: "Structured lesson plans for teaching descriptive and narrative writing. Focus on sensory language and varied sentence structures.",
    type: "lesson-plan",
    detailUrl: "/dashboard/teacher/resources/creative-writing",
  },
  {
    id: "lp3",
    title: "Poetry Anthology: Conflict Cluster",
    description: "Lesson-by-lesson guide to teaching the conflict poetry cluster. Includes comparative analysis templates.",
    type: "lesson-plan",
  },
  {
    id: "lp4",
    title: "Persuasive Writing Workshop",
    description: "Two-lesson plan covering rhetorical techniques, AFOREST, and timed practice with peer assessment.",
    type: "lesson-plan",
  },
];

const ASSESSMENT_GUIDES: Resource[] = [
  {
    id: "ag1",
    title: "AQA English Literature Mark Scheme Guide",
    description: "Simplified mark scheme breakdown for AO1-AO4. Includes student-friendly assessment criteria and example annotations.",
    type: "assessment",
    examBoard: "AQA",
    detailUrl: "/dashboard/teacher/resources/mark-scheme",
  },
  {
    id: "ag2",
    title: "Edexcel English Language Assessment Criteria",
    description: "Detailed rubric for Paper 1 and Paper 2 writing tasks. Includes band descriptors and examiner commentary.",
    type: "assessment",
    examBoard: "Edexcel",
  },
  {
    id: "ag3",
    title: "Differentiation Guide for English",
    description: "Practical strategies for PP, SEND, and EAL students. Includes differentiated tasks, questioning frameworks, and Ofsted-aligned approaches.",
    type: "assessment",
    detailUrl: "/dashboard/teacher/resources/differentiation",
  },
  {
    id: "ag4",
    title: "Self-Assessment Checklist",
    description: "Student-facing checklist to evaluate their own writing before submission. Covers structure, language, and accuracy.",
    type: "assessment",
  },
];

const EXAM_BOARD_RESOURCES: Resource[] = [
  {
    id: "eb1",
    title: "AQA GCSE English Literature Specification Overview",
    description: "Key dates, text list, and assessment objectives for AQA English Literature 8702.",
    type: "exam-board",
    examBoard: "AQA",
  },
  {
    id: "eb2",
    title: "Edexcel GCSE English Language Specification Guide",
    description: "Paper structure, question types, and timing guidance for Edexcel English Language 1EN0.",
    type: "exam-board",
    examBoard: "Edexcel",
  },
  {
    id: "eb3",
    title: "OCR GCSE English Literature Set Texts",
    description: "Complete list of set texts and poetry anthology for OCR J352. Includes suggested teaching order.",
    type: "exam-board",
    examBoard: "OCR",
  },
  {
    id: "eb4",
    title: "CIE IGCSE English Coursework Guidance",
    description: "Coursework portfolio requirements and moderation guidance for CIE 0500/0990.",
    type: "exam-board",
    examBoard: "CIE",
  },
];

const WORKSHEETS: Resource[] = [
  {
    id: "ws1",
    title: "Quote Analysis Grid (Literature)",
    description: "Printable grid for students to record key quotes with analysis columns: technique, effect, and link to theme.",
    type: "worksheet",
    detailUrl: "/dashboard/teacher/resources/worksheets",
  },
  {
    id: "ws2",
    title: "Persuasive Writing Planning Frame",
    description: "A3-printable planning template for structuring persuasive writing with AFOREST technique boxes.",
    type: "worksheet",
    downloadUrl: "#",
  },
  {
    id: "ws3",
    title: "Character Development Tracker",
    description: "Table for tracking character development across acts/chapters. Suitable for any set text.",
    type: "worksheet",
    downloadUrl: "#",
  },
  {
    id: "ws4",
    title: "Spelling, Punctuation & Grammar Practice",
    description: "Mixed SPaG exercises with answer key. Three difficulty levels for differentiation.",
    type: "worksheet",
    downloadUrl: "#",
  },
];

function typeIcon(type: Resource["type"]) {
  switch (type) {
    case "lesson-plan":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      );
    case "assessment":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-accent">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
      );
    case "exam-board":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
      );
    case "worksheet":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warn-50 text-warn">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      );
  }
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="card flex gap-4 hover:border-accent/40 hover:shadow-md transition-all">
      {typeIcon(resource.type)}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-medium text-foreground">{resource.title}</h3>
          {resource.examBoard && (
            <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {resource.examBoard}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {resource.description}
        </p>
        <div className="mt-2">
          {resource.downloadUrl ? (
            <Link
              href={resource.downloadUrl}
              className="text-xs font-medium text-accent hover:text-primary"
            >
              Download PDF
            </Link>
          ) : resource.detailUrl ? (
            <Link
              href={resource.detailUrl}
              className="text-xs font-medium text-accent hover:text-primary"
            >
              View Details
            </Link>
          ) : (
            <span className="text-xs font-medium text-accent hover:text-accent-600 cursor-pointer">
              View Details
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export const metadata = { title: "Teaching Resources" };

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-primary">Teaching Resources</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Lesson plans, assessment guides, exam board resources, and printable
          worksheets to support your teaching.
        </p>
      </div>

      {/* ── Lesson Plan Templates ───────────────────────────────── */}
      <section aria-labelledby="lesson-plans-heading">
        <h2 id="lesson-plans-heading" className="text-lg font-semibold text-foreground mb-4">
          Lesson Plan Templates
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {LESSON_PLANS.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>

      {/* ── Assessment Criteria Guides ──────────────────────────── */}
      <section aria-labelledby="assessment-heading">
        <h2 id="assessment-heading" className="text-lg font-semibold text-foreground mb-4">
          Assessment Criteria Guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {ASSESSMENT_GUIDES.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>

      {/* ── Exam Board Specific Resources ───────────────────────── */}
      <section aria-labelledby="exam-board-heading">
        <h2 id="exam-board-heading" className="text-lg font-semibold text-foreground mb-4">
          Exam Board Specific Resources
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {EXAM_BOARD_RESOURCES.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>

      {/* ── Printable Worksheets ────────────────────────────────── */}
      <section aria-labelledby="worksheets-heading">
        <h2 id="worksheets-heading" className="text-lg font-semibold text-foreground mb-4">
          Printable Worksheets
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {WORKSHEETS.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
