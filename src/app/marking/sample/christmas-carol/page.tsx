import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ─── Metadata ────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "A Christmas Carol Model Essays — Grade 5, 7 & 9 | The English Hub",
  description:
    "Three fully-annotated model essays answering 'How does Dickens present Scrooge's transformation?' at Grade 5, 7 and 9, with AO breakdowns, paragraph annotations and examiner commentary. AQA, Edexcel & Eduqas.",
  keywords: [
    "A Christmas Carol",
    "model essay",
    "GCSE English Literature",
    "Scrooge transformation",
    "grade 5 essay",
    "grade 7 essay",
    "grade 9 essay",
    "AQA",
    "Edexcel",
    "Eduqas",
    "Dickens",
    "exam revision",
  ],
};

/* ─── Types ───────────────────────────────────────────────── */

interface Annotation {
  quote: string;
  kind: "strength" | "improve" | "technique";
  comment: string;
}

interface AnnotatedParagraph {
  label: string;
  text: string;
  annotations: Annotation[];
}

interface ModelEssay {
  grade: 5 | 7 | 9;
  title: string;
  boards: string[];
  paper: string;
  question: string;
  wordCount: number;
  commentary: string;
  paragraphs: AnnotatedParagraph[];
  aos: { code: string; label: string; score: number; max: number }[];
  gradeJustification: string;
  improvements: string[];
}

/* ─── Board guard ─────────────────────────────────────────── */

const SUPPORTED_BOARDS = ["AQA", "Edexcel", "Eduqas"] as const;

/* ─── Essay data ──────────────────────────────────────────── */

const ESSAYS: ModelEssay[] = [
  /* ── Grade 5 ─────────────────────────────────────────────── */
  {
    grade: 5,
    title: "A Christmas Carol — Grade 5 response",
    boards: ["AQA", "Edexcel", "Eduqas"],
    paper: "English Literature",
    question:
      "How does Dickens present Scrooge's transformation in A Christmas Carol?",
    wordCount: 310,
    commentary:
      "A clear response that shows understanding of Scrooge's change and uses relevant quotations. Analysis tends to identify methods rather than explore their effects in depth. Context is present but bolted on rather than woven into the argument.",
    paragraphs: [
      {
        label: "Introduction",
        text: "In A Christmas Carol, Dickens presents Scrooge as a man who changes from being cold and mean to being kind and generous. At the start of the novella, Scrooge is described as 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!' This list of adjectives shows that Scrooge is a very unpleasant person who only cares about money. Dickens uses this long list to really emphasise how bad Scrooge is at the beginning.",
        annotations: [
          {
            quote: "'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!'",
            kind: "strength",
            comment:
              "Well-chosen quotation that is embedded accurately. To move higher, analyse individual word choices within this list rather than treating it as a single block.",
          },
          {
            quote: "This list of adjectives shows that Scrooge is a very unpleasant person",
            kind: "improve",
            comment:
              "Identifies the method (list) but the analysis is surface-level. Try: 'The accumulation of present participles creates a sense of relentless, mechanical greed — Scrooge is reduced to a series of grasping actions rather than a human being.'",
          },
        ],
      },
      {
        label: "Development — the Spirits",
        text: "The Ghost of Christmas Past shows Scrooge memories of when he was young and happy. He sees his old girlfriend Belle who left him because he loved money more than her. Belle says 'another idol has displaced me... a golden one.' This shows that Scrooge chose money over love. The Ghost of Christmas Present then shows Scrooge the Cratchit family and how happy they are even though they are poor. Tiny Tim is used by Dickens to make the reader feel sorry for poor people and to show Scrooge what he is missing.",
        annotations: [
          {
            quote: "'another idol has displaced me... a golden one'",
            kind: "technique",
            comment:
              "Good quotation selection. The word 'idol' is significant — it suggests Scrooge has made money into a false god, which connects to the novella's Christian moral framework. Exploring this would push into Grade 6+ territory.",
          },
          {
            quote: "Tiny Tim is used by Dickens to make the reader feel sorry for poor people",
            kind: "improve",
            comment:
              "This is a valid point but expressed too simply. Consider Dickens's political purpose: Tiny Tim is a sentimental device designed to humanise poverty statistics for a middle-class Victorian readership.",
          },
        ],
      },
      {
        label: "Conclusion — transformation",
        text: "By the end of the novella, Scrooge has completely changed. He says 'I am as light as a feather, I am as happy as an angel.' The similes show he is now a completely different person. He gives money to charity and buys the Cratchits a turkey. Dickens wrote this novella because he wanted rich Victorians to help the poor. At the time, many people believed in Malthusian ideas that the poor should not be helped, and Dickens disagreed with this view.",
        annotations: [
          {
            quote: "'I am as light as a feather, I am as happy as an angel'",
            kind: "strength",
            comment:
              "The parallel similes are well chosen and show the contrast with Stave One. To improve, note how the angelic comparison inverts the earlier demonic imagery of Scrooge.",
          },
          {
            quote: "Dickens wrote this novella because he wanted rich Victorians to help the poor",
            kind: "technique",
            comment:
              "Relevant AO3 context but it reads as an add-on. Try integrating it into analysis: 'Scrooge's transformation embodies Dickens's polemic against Malthusian indifference — the character arc is itself a political argument.'",
          },
        ],
      },
    ],
    aos: [
      { code: "AO1", label: "Read, understand, respond", score: 8, max: 12 },
      { code: "AO2", label: "Language, form, structure", score: 6, max: 12 },
      { code: "AO3", label: "Context", score: 3, max: 6 },
      { code: "AO4", label: "SPaG", score: 3, max: 4 },
    ],
    gradeJustification:
      "This response sits securely at Grade 5. It demonstrates clear understanding of the text and selects relevant quotations, but analysis tends to identify techniques ('This list of adjectives shows...') rather than exploring how and why Dickens uses them. Context is present but bolted on as a separate sentence rather than integrated into the argument. The essay would benefit from closer word-level analysis and a more sustained argument about Dickens's purpose.",
    improvements: [
      "Analyse individual words within quotations rather than treating whole phrases as single units — e.g. why 'clutching' specifically? What does the physicality of the verb suggest about Scrooge's relationship with money?",
      "Integrate contextual knowledge into analytical points rather than adding it as a separate sentence at the end of paragraphs.",
      "Move beyond identifying techniques ('Dickens uses a simile') to exploring their effects on the reader and connecting them to Dickens's wider purpose.",
      "Develop a clear thesis in the introduction that can be sustained and refined across the whole response.",
    ],
  },

  /* ── Grade 7 ─────────────────────────────────────────────── */
  {
    grade: 7,
    title: "A Christmas Carol — Grade 7 response",
    boards: ["AQA", "Edexcel", "Eduqas"],
    paper: "English Literature",
    question:
      "How does Dickens present Scrooge's transformation in A Christmas Carol?",
    wordCount: 410,
    commentary:
      "A thoughtful, well-organised response that analyses methods with some precision and integrates context into the argument. The essay sustains focus on transformation as a deliberate authorial strategy. To reach Grade 8/9, push into more conceptualised analysis and explore structural choices across the novella as a whole.",
    paragraphs: [
      {
        label: "Introduction — thesis",
        text: "Dickens presents Scrooge's transformation as a carefully orchestrated moral journey, using the novella's five-stave structure to mirror the arc of redemption. In Stave One, Scrooge is introduced through a sustained accumulation of negative imagery: 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!' The chain of present participles reduces Scrooge to a series of mechanical, predatory actions, stripping him of humanity before the narrative sets about restoring it. This opening catalogue is not merely descriptive; it establishes the moral baseline from which Dickens will measure Scrooge's eventual rebirth.",
        annotations: [
          {
            quote: "chain of present participles reduces Scrooge to a series of mechanical, predatory actions",
            kind: "strength",
            comment:
              "Precise grammatical terminology (present participles) combined with analysis of effect. This is confident AO2 work that moves beyond feature-spotting.",
          },
          {
            quote: "five-stave structure to mirror the arc of redemption",
            kind: "technique",
            comment:
              "Strong structural awareness. Could be pushed further by noting that the musical term 'stave' itself frames the novella as a song — linking transformation to harmony and discord.",
          },
        ],
      },
      {
        label: "Development — the Spirits as catalysts",
        text: "The three Spirits function as agents of Dickens's didactic purpose, each designed to dismantle a specific layer of Scrooge's emotional armour. The Ghost of Christmas Past forces Scrooge to confront the moment his avarice displaced love, dramatised through Belle's accusation that 'another idol has displaced me... a golden one.' The biblical register of 'idol' recasts Scrooge's wealth-worship as a form of blasphemy, aligning his personal failing with a sin recognisable to Dickens's predominantly Christian readership. The Ghost of Christmas Present, meanwhile, uses Tiny Tim as a sentimental counterweight to Malthusian logic — Dickens transforms an abstract policy debate about the 'surplus population' into the image of a vulnerable child, making indifference morally untenable.",
        annotations: [
          {
            quote: "biblical register of 'idol' recasts Scrooge's wealth-worship as a form of blasphemy",
            kind: "strength",
            comment:
              "Excellent integration of AO2 and AO3 — language analysis and context are working together rather than sitting in separate sentences.",
          },
          {
            quote: "sentimental counterweight to Malthusian logic",
            kind: "technique",
            comment:
              "Sophisticated conceptual vocabulary. To push higher, consider whether Dickens's sentimentality is itself a deliberate rhetorical strategy — and whether it has limitations.",
          },
        ],
      },
      {
        label: "Conclusion — the completed arc",
        text: "Scrooge's transformation reaches its climax in Stave Five, where his language shifts from the clipped, transactional register of Stave One to exuberant, childlike joy: 'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.' The tricolon of similes ascends from the physical ('feather') through the spiritual ('angel') to the social ('schoolboy'), charting a restoration that operates on every level of Scrooge's being. Dickens structures the novella so that this moment of personal redemption carries a broader social message: if the most hardened miser in London can change, then so can the reader. The transformation is ultimately Dickens's vehicle for his reformist agenda — Scrooge's rebirth is a call to action directed squarely at the comfortable middle classes of 1843.",
        annotations: [
          {
            quote: "tricolon of similes ascends from the physical through the spiritual to the social",
            kind: "strength",
            comment:
              "Perceptive structural reading of the quotation — the student has identified a pattern within the language rather than simply quoting it.",
          },
          {
            quote: "if the most hardened miser in London can change, then so can the reader",
            kind: "technique",
            comment:
              "Well-articulated understanding of Dickens's purpose. To reach Grade 9, explore the tension between this optimism and the novella's darker implications — does Dickens truly believe transformation is available to all?",
          },
        ],
      },
    ],
    aos: [
      { code: "AO1", label: "Read, understand, respond", score: 10, max: 12 },
      { code: "AO2", label: "Language, form, structure", score: 9, max: 12 },
      { code: "AO3", label: "Context", score: 5, max: 6 },
      { code: "AO4", label: "SPaG", score: 3, max: 4 },
    ],
    gradeJustification:
      "This response achieves Grade 7 through sustained analytical focus, precise method analysis ('chain of present participles', 'tricolon of similes'), and well-integrated context. The argument is organised around a clear thesis about transformation as authorial strategy. It falls short of Grade 8/9 because, while methods are analysed effectively, the essay does not consistently reach the level of conceptualised, original interpretation — it tends to explain what Dickens does rather than interrogating why or challenging the text's assumptions.",
    improvements: [
      "Push towards conceptualised analysis — instead of explaining what Dickens achieves, consider interrogating tensions within the text. For example, does Scrooge's overnight transformation undermine the novella's social realism?",
      "Explore alternative interpretations: a Marxist reading might argue that Scrooge's charity merely sustains an unjust system rather than challenging it.",
      "Develop structural analysis across the whole text — how does the five-stave structure create pace, symmetry, or contrast that reinforces meaning?",
      "Use more varied and precise critical vocabulary: 'didactic', 'polemic', 'allegory', 'parable' — each carries different implications about Dickens's method.",
    ],
  },

  /* ── Grade 9 ─────────────────────────────────────────────── */
  {
    grade: 9,
    title: "A Christmas Carol — Grade 9 response",
    boards: ["AQA", "Edexcel", "Eduqas"],
    paper: "English Literature",
    question:
      "How does Dickens present Scrooge's transformation in A Christmas Carol?",
    wordCount: 510,
    commentary:
      "A perceptive, conceptualised response that interrogates the text rather than merely explaining it. Language analysis operates at word level with sophisticated critical vocabulary. Context is woven into interpretation as a shaping force. The argument is original, sustained, and structurally controlled.",
    paragraphs: [
      {
        label: "Introduction — conceptual thesis",
        text: "Dickens constructs Scrooge's transformation not as a psychological journey but as a polemical demonstration: the novella does not ask whether a miser can change, but insists that he must. The five-stave structure, borrowing its terminology from the carol form, frames the narrative as a kind of secular hymn — a moral song designed to be heard, absorbed, and acted upon by Dickens's middle-class readership. From the opening line's categorical assertion that 'Marley was dead: to begin with,' Dickens establishes a narrator who is less storyteller than advocate, guiding the reader towards a predetermined verdict on wealth, responsibility, and human connection.",
        annotations: [
          {
            quote: "polemical demonstration",
            kind: "strength",
            comment:
              "Immediately establishes a conceptualised thesis that frames the entire argument. The student is not summarising — they are interpreting the text's function.",
          },
          {
            quote: "less storyteller than advocate",
            kind: "technique",
            comment:
              "Sophisticated observation about narrative voice that demonstrates genuine critical thinking. This is Grade 9 territory: the student is analysing how the text works, not just what it says.",
          },
        ],
      },
      {
        label: "Development — linguistic architecture of change",
        text: "The linguistic architecture of Scrooge's characterisation in Stave One is deliberately dehumanising. The famous accumulation — 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner' — does not simply describe Scrooge's character; it performs his reduction to pure acquisitive function. Each present participle is a grasping action, and the syntax itself enacts the relentlessness of greed: there is no pause, no subordination, no room for anything but the next verb of possession. The climactic adjective 'covetous' shifts the register from physical to moral, recasting Scrooge's behaviour as a violation of the Tenth Commandment and thereby conscripting the weight of Christian doctrine to Dickens's reformist argument. The transformation, when it comes, must therefore operate on every level that this opening degrades: physical, moral, social, and spiritual.",
        annotations: [
          {
            quote: "the syntax itself enacts the relentlessness of greed",
            kind: "strength",
            comment:
              "Outstanding AO2: form is analysed as meaning. The student demonstrates that how Dickens writes is inseparable from what he communicates.",
          },
          {
            quote: "conscripting the weight of Christian doctrine to Dickens's reformist argument",
            kind: "technique",
            comment:
              "Seamless AO3 integration — context is not background information but an active force in the interpretation. The verb 'conscripting' itself implies Dickens is strategically deploying religion as rhetorical weaponry.",
          },
        ],
      },
      {
        label: "Conclusion — the politics of redemption",
        text: "Scrooge's Stave Five rebirth — 'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy' — is structurally designed to invert the opening catalogue point by point. Where the Stave One list accumulated weight and darkness, this tricolon ascends through levity, divinity, and innocence, restoring precisely the qualities that avarice had crushed. Yet there is a tension at the heart of this resolution that Dickens either does not see or chooses to suppress: Scrooge's transformation is individual, not systemic. He buys the Cratchits a turkey; he does not abolish the workhouse. The novella's power — and its limitation — lies in its insistence that social reform can be achieved through personal moral awakening rather than structural change. For a twenty-first-century reader, this raises an uncomfortable question: is Dickens's carol of redemption a genuine call for justice, or a comforting fantasy that allows the privileged to believe that charity is enough? The genius of the novella is that it works regardless of the answer — Scrooge's joy is infectious precisely because Dickens refuses to let political complexity diminish emotional force.",
        annotations: [
          {
            quote: "Scrooge's transformation is individual, not systemic",
            kind: "strength",
            comment:
              "Original critical insight that interrogates the text rather than accepting its premise. This is the hallmark of Grade 9 writing: the student thinks with the text, not just about it.",
          },
          {
            quote: "Dickens refuses to let political complexity diminish emotional force",
            kind: "technique",
            comment:
              "Epigrammatic conclusion that holds two competing ideas in tension. Demonstrates conceptual control and the ability to sustain ambiguity — a key discriminator at the highest grade.",
          },
        ],
      },
    ],
    aos: [
      { code: "AO1", label: "Read, understand, respond", score: 12, max: 12 },
      { code: "AO2", label: "Language, form, structure", score: 12, max: 12 },
      { code: "AO3", label: "Context", score: 6, max: 6 },
      { code: "AO4", label: "SPaG", score: 4, max: 4 },
    ],
    gradeJustification:
      "This response achieves Grade 9 through sustained conceptualised analysis, original critical thinking, and precise word-level commentary. The student does not merely explain what Dickens does — they interrogate why, and hold competing interpretations in productive tension. Context is not background but an active analytical tool. The essay demonstrates genuine intellectual independence: the observation that Scrooge's transformation is 'individual, not systemic' shows a student thinking beyond the text's own assumptions. Language analysis operates at the level of syntax and grammar, not just vocabulary, and form is treated as meaning rather than decoration.",
    improvements: [
      "Even at this level, the essay could engage more with the novella's structural pacing — how does the compressed five-stave form create urgency that supports the didactic purpose?",
      "Consider engaging with critical perspectives explicitly (Marxist, feminist, postcolonial) to add further interpretive layers.",
      "The middle paragraph is dense — breaking the analysis across more paragraphs with transitional signposting would improve clarity without sacrificing sophistication.",
    ],
  },
];

/* ─── Colour helpers ──────────────────────────────────────── */

const ANNOTATION_COLOURS: Record<Annotation["kind"], string> = {
  strength:
    "border-l-green-500 bg-green-50 dark:bg-green-950/30",
  improve:
    "border-l-amber-500 bg-amber-50 dark:bg-amber-950/30",
  technique:
    "border-l-blue-500 bg-blue-50 dark:bg-blue-950/30",
};

const ANNOTATION_LABELS: Record<Annotation["kind"], string> = {
  strength: "Strength",
  improve: "To improve",
  technique: "Technique / AO link",
};

const GRADE_COLOUR: Record<number, string> = {
  5: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  7: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  9: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
};

/* ─── Page ────────────────────────────────────────────────── */

export default function ChristmasCarolEssayBankPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ──────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              Marking
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/marking/sample" className="hover:text-primary">
              Sample essays
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">A Christmas Carol</li>
        </ol>
      </nav>

      {/* ── Header ──────────────────────────────────────── */}
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          A Christmas Carol — Model Essay Bank
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Three original model essays answering &ldquo;How does Dickens present
          Scrooge&rsquo;s transformation?&rdquo; at Grade 5, 7 and 9. Each
          essay includes paragraph annotations, AO breakdown, grade
          justification, and targeted improvements.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUPPORTED_BOARDS.map((b) => (
            <Badge key={b} variant="outline">
              {b}
            </Badge>
          ))}
        </div>
      </header>

      {/* ── Jump links ──────────────────────────────────── */}
      <nav
        aria-label="Jump to grade"
        className="mb-10 flex flex-wrap gap-2"
      >
        {ESSAYS.map((e) => (
          <a
            key={e.grade}
            href={`#grade-${e.grade}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <span className="font-heading text-base font-extrabold">
              {e.grade}
            </span>
            <span>Grade {e.grade}</span>
          </a>
        ))}
      </nav>

      {/* ── Essays ──────────────────────────────────────── */}
      <div className="space-y-16">
        {ESSAYS.map((essay) => (
          <section
            key={essay.grade}
            id={`grade-${essay.grade}`}
            className="scroll-mt-24"
          >
            {/* Grade heading */}
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl font-heading text-xl font-extrabold ${GRADE_COLOUR[essay.grade]}`}
              >
                {essay.grade}
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {essay.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {essay.wordCount} words &middot;{" "}
                  {essay.boards.join(", ")}
                </p>
              </div>
            </div>

            {/* Question */}
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="py-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-semibold text-primary">Q:</span>{" "}
                  {essay.question}
                </p>
              </CardContent>
            </Card>

            {/* Examiner commentary */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">
                  Examiner commentary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground">
                  {essay.commentary}
                </p>
              </CardContent>
            </Card>

            {/* AO breakdown */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">AO Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {essay.aos.map((ao) => {
                    const pct = Math.round((ao.score / ao.max) * 100);
                    return (
                      <div key={ao.code} className="space-y-1">
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-semibold">{ao.code}</span>
                          <span className="text-muted-foreground">
                            {ao.score}/{ao.max}
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {ao.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs font-medium text-muted-foreground">
                  Total: {essay.aos.reduce((s, a) => s + a.score, 0)}/
                  {essay.aos.reduce((s, a) => s + a.max, 0)}
                </p>
              </CardContent>
            </Card>

            {/* Annotated paragraphs */}
            <div className="mb-6 space-y-6">
              {essay.paragraphs.map((para, pi) => (
                <Card key={pi}>
                  <CardHeader>
                    <CardDescription className="font-semibold uppercase tracking-wider">
                      {para.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-foreground">
                      {para.text}
                    </p>
                    {para.annotations.map((ann, ai) => (
                      <div
                        key={ai}
                        className={`rounded-md border-l-4 p-3 ${ANNOTATION_COLOURS[ann.kind]}`}
                      >
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider">
                          {ANNOTATION_LABELS[ann.kind]}
                        </p>
                        <p className="mb-1 text-sm italic text-muted-foreground">
                          &ldquo;{ann.quote}&rdquo;
                        </p>
                        <p className="text-sm text-foreground">
                          {ann.comment}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Grade justification */}
            <Card className="mb-6 border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base">
                  Grade justification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground">
                  {essay.gradeJustification}
                </p>
              </CardContent>
            </Card>

            {/* What would improve this */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">
                  What would improve this essay?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-foreground">
                  {essay.improvements.map((imp, i) => (
                    <li key={i} className="leading-relaxed">
                      {imp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      {/* ── Footer CTA ──────────────────────────────────── */}
      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button variant="outline" render={<Link href="/marking/sample" />}>
          Back to sample essays
        </Button>
        <Button render={<Link href="/marking/submit" />}>
          Mark your own essay
        </Button>
      </div>
    </div>
  );
}
