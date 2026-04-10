import type { Metadata } from "next";
import Link from "next/link";
import {
  TeacherResourceCard,
  TeacherResourceGrid,
} from "@/components/teacher/ResourceCard";

export const metadata: Metadata = {
  title: "Homework Tasks — Teacher Library",
  description:
    "A library of meaningful GCSE English homework tasks that extend learning without creating a marking mountain.",
  alternates: {
    canonical:
      "https://theenglishhub.app/resources/teacher-library/homework",
  },
};

const HOMEWORK = [
  {
    title: "Quote Learning Log",
    description:
      "Students learn 5 new quotations each week. Self-test and log progress in a tracking sheet.",
    yearGroup: "Year 10–11",
  },
  {
    title: "Weekly Analytical Paragraph",
    description:
      "One PEE paragraph per week on a given question. 20 minutes maximum. Self-assessed against a checklist.",
    yearGroup: "Year 11",
  },
  {
    title: "Poetry Recital Task",
    description:
      "Learn an anthology poem by heart and annotate it for meaning, methods, and effect.",
    yearGroup: "Year 10",
  },
  {
    title: "Character Journal Entry",
    description:
      "Write a diary entry in the voice of a character from the set text after a key event.",
    yearGroup: "Year 10",
  },
  {
    title: "Context Research Task",
    description:
      "Research and summarise one aspect of the historical context for the current set text in 200 words.",
    yearGroup: "Year 11",
  },
  {
    title: "Vocabulary Builder (Tier 2)",
    description:
      "Learn 10 new academic words per week, use them in sentences, and quiz in class the next lesson.",
    yearGroup: "KS3",
  },
  {
    title: "Reading Log",
    description:
      "Track 20 minutes of daily reading. Students note a new word, a quotation they like, and a prediction.",
    yearGroup: "KS3",
  },
  {
    title: "Seneca Revision Session",
    description:
      "Complete one assigned Seneca unit on a current topic. Screenshot progress.",
    yearGroup: "Year 10–11",
  },
  {
    title: "Mini Essay: Character Analysis",
    description:
      "Write 300 words on how a character is presented at a key moment. Submit for in-class feedback.",
    yearGroup: "Year 11",
  },
  {
    title: "Model Answer Annotation",
    description:
      "Annotate a provided model answer using the mark scheme. Identify AO1, AO2, AO3 evidence.",
    yearGroup: "Year 11",
  },
  {
    title: "Creative Writing Response",
    description:
      "Respond to a stimulus image or phrase with a 400-word descriptive or narrative opening.",
    yearGroup: "Year 10",
  },
  {
    title: "Knowledge Organiser Self-Quiz",
    description:
      "Cover half the knowledge organiser and recall from memory. Check and log mistakes.",
    yearGroup: "KS3–KS4",
  },
];

export default function HomeworkPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/resources/teacher-library"
              className="hover:text-primary"
            >
              Teacher Library
            </Link>
            <span>/</span>
            <span className="text-foreground">Homework Tasks</span>
          </div>
          <span className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
            For Teachers
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            Homework Tasks
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Meaningful homework that extends classroom learning — without
            creating a marking mountain. Each task is designed to be
            self-checked or lightly assessed in class.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeacherResourceGrid>
          {HOMEWORK.map((h) => (
            <TeacherResourceCard
              key={h.title}
              title={h.title}
              description={h.description}
              kind="Homework"
              yearGroup={h.yearGroup}
              tag="Task card"
              href="/resources/teacher-library/homework"
            />
          ))}
        </TeacherResourceGrid>
      </section>
    </main>
  );
}
