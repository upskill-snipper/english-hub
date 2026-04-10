import type { Metadata } from "next";
import Link from "next/link";
import {
  TeacherResourceCard,
  TeacherResourceGrid,
} from "@/components/teacher/ResourceCard";

export const metadata: Metadata = {
  title: "Starter Activities — Teacher Library",
  description:
    "20 quick 5-minute English lesson starters. Retrieval practice, vocabulary warm-ups, and analysis hooks.",
  alternates: {
    canonical: "https://theenglishhub.app/resources/teacher-library/starters",
  },
};

const STARTERS = [
  {
    id: "literary-device-speed-round",
    title: "Literary Device Speed Round",
    description:
      "10 quick-fire definitions in 5 minutes. Students match the device to the definition and provide an example.",
    tag: "Full starter",
  },
  { id: "word-of-the-day", title: "Word of the Day", description: "Introduce a Tier 2 vocabulary word, define it, and challenge students to use it in a sentence.", tag: "Coming soon" },
  { id: "quote-scramble", title: "Quote Scramble", description: "Students unscramble a jumbled key quotation and identify the speaker and context.", tag: "Coming soon" },
  { id: "silent-sentence-edit", title: "Silent Sentence Edit", description: "A weak sentence on the board — students rewrite it silently for impact and variety.", tag: "Coming soon" },
  { id: "last-lesson-retrieval", title: "Last Lesson Retrieval", description: "Five questions from the previous lesson, one from last week, one from last term.", tag: "Coming soon" },
  { id: "image-as-opening", title: "Image as Opening", description: "Project a striking image. Students write the first line of a story inspired by it.", tag: "Coming soon" },
  { id: "guess-the-character", title: "Guess the Character", description: "Read three clues about a character from a set text. Students guess and justify.", tag: "Coming soon" },
  { id: "odd-one-out", title: "Odd One Out", description: "Three words, one odd one out. Students explain their reasoning — all answers can be correct.", tag: "Coming soon" },
  { id: "theme-speed-write", title: "Theme Speed-Write", description: "2 minutes to write everything they know about a theme. Pair, share, add.", tag: "Coming soon" },
  { id: "quote-of-the-day", title: "Quote of the Day", description: "A single quotation on the board. Students annotate methods in 3 minutes.", tag: "Coming soon" },
  { id: "find-the-error", title: "Find the Error", description: "A SPaG paragraph riddled with mistakes. Students find and correct them.", tag: "Coming soon" },
  { id: "synonym-ladder", title: "Synonym Ladder", description: "Start with a basic word (e.g. 'sad'). Students build a ladder of increasingly sophisticated synonyms.", tag: "Coming soon" },
  { id: "three-sentence-summary", title: "Three-Sentence Summary", description: "Summarise the plot so far in exactly three sentences — no more, no less.", tag: "Coming soon" },
  { id: "context-connections", title: "Context Connections", description: "A historical fact on the board. Students link it to a set text or a specific quotation.", tag: "Coming soon" },
  { id: "opening-line-analysis", title: "Opening Line Analysis", description: "A famous opening line. Students write one sentence on what makes it effective.", tag: "Coming soon" },
  { id: "character-ranking", title: "Character Ranking", description: "Rank a set of characters by power, morality, or sympathy. Justify your ranking to a partner.", tag: "Coming soon" },
  { id: "picture-vocabulary", title: "Picture Vocabulary", description: "Five images on the board. Students label each with a precise, sophisticated adjective.", tag: "Coming soon" },
  { id: "fact-opinion-bias", title: "Fact, Opinion, or Bias?", description: "Five sentences from a news article — sort into fact, opinion, or bias.", tag: "Coming soon" },
  { id: "sentence-expansion", title: "Sentence Expansion", description: "A simple 4-word sentence. Students expand it into a 20-word complex sentence.", tag: "Coming soon" },
  { id: "true-or-false", title: "True or False: Set Text", description: "Ten statements about the current set text. Students vote true or false.", tag: "Coming soon" },
];

export default function StartersPage() {
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
            <span className="text-foreground">Starter Activities</span>
          </div>
          <span className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
            For Teachers
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            5-Minute Starter Activities
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            20 quick, classroom-ready starters to hook your class. Retrieval
            practice, vocabulary, analysis, and creative writing warm-ups that
            need no printing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeacherResourceGrid>
          {STARTERS.map((s) => (
            <TeacherResourceCard
              key={s.id}
              title={s.title}
              description={s.description}
              kind="Starter"
              duration="5 mins"
              tag={s.tag}
              href={
                s.id === "literary-device-speed-round"
                  ? `/resources/teacher-library/starters/${s.id}`
                  : "/resources/teacher-library/starters"
              }
            />
          ))}
        </TeacherResourceGrid>
      </section>
    </main>
  );
}
