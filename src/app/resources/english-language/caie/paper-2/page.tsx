import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/caie/paper-2' },
  title: "Paper 2: Directed Writing & Composition | Cambridge IGCSE English Language",
  description:
    "Complete guide to Cambridge IGCSE English Language directed writing and composition. Covers letters, reports, articles, speeches, journals, narrative and descriptive writing, with full band descriptors.",
  keywords: [
    "IGCSE directed writing",
    "IGCSE composition",
    "Cambridge English narrative writing",
    "IGCSE descriptive writing",
    "CAIE Paper 2",
    "IGCSE band descriptors",
    "IGCSE formal letter",
    "IGCSE speech writing",
  ],
};

/* ─── Page component ─────────────────────────────────────────── */

export default function Paper2Page() {
  return (
    <>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/resources/english-language/caie"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to CAIE English Language
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: Directed Writing &amp; Composition
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">Extended Tier</p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This paper tests your ability to write for specific purposes and
            audiences (directed writing) and to produce creative writing in
            narrative or descriptive form (composition).
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">

        {/* Paper structure */}
        <section aria-labelledby="structure-heading">
          <h2 id="structure-heading" className="text-2xl font-bold text-foreground">
            Paper Structure
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-3 pr-4 font-semibold text-foreground">Section</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Task</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Marks</th>
                  <th className="py-3 font-semibold text-foreground">Suggested Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-3 pr-4 font-medium">Section 1</td>
                  <td className="py-3 pr-4">Directed Writing &mdash; write in a specified format using ideas from a passage and your own ideas</td>
                  <td className="py-3 pr-4">40 (25 content + 15 language)</td>
                  <td className="py-3">45 minutes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Section 2</td>
                  <td className="py-3 pr-4">Composition &mdash; choose one from a selection of narrative OR descriptive titles</td>
                  <td className="py-3 pr-4">40 (16 content/structure + 24 language/style)</td>
                  <td className="py-3">60 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Total: 80 marks in approximately 2 hours. Quality of written
            communication (grammar, spelling, punctuation, vocabulary) is
            assessed throughout both sections.
          </p>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section 1: Directed Writing ─────────────────────── */}
        <section aria-labelledby="directed-heading">
          <h2 id="directed-heading" className="text-2xl font-bold text-foreground">
            Section 1: Directed Writing
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            You will be given a short reading passage and asked to write a
            response in a specific format (e.g. a letter, report, speech,
            article, or journal entry). You must use ideas from the passage
            <strong> and </strong> include your own ideas and opinions.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Directed Writing Formats
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Each format has its own conventions. Using the correct format and
            register is essential for top marks.
          </p>

          <div className="mt-6 space-y-6">
            {/* Formal letter */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-semibold text-primary">Formal Letter</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Used for writing to officials, companies, or people you do not
                know well.
              </p>
              <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Format requirements:</p>
                <ul className="space-y-1">
                  <li>&bull; Your address (top right)</li>
                  <li>&bull; Date below your address</li>
                  <li>&bull; Recipient&rsquo;s name and address (top left, below the date)</li>
                  <li>&bull; Salutation: &ldquo;Dear Mr/Mrs [Name]&rdquo; or &ldquo;Dear Sir/Madam&rdquo;</li>
                  <li>&bull; Subject line (optional but useful)</li>
                  <li>&bull; Formal register throughout &mdash; no slang, contractions, or colloquialisms</li>
                  <li>&bull; Sign off: &ldquo;Yours sincerely&rdquo; (if you used their name) or &ldquo;Yours faithfully&rdquo; (Dear Sir/Madam)</li>
                </ul>
              </div>
            </div>

            {/* Informal letter */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-semibold text-primary">Informal Letter</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Used for writing to friends, family, or people you know well.
              </p>
              <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Format requirements:</p>
                <ul className="space-y-1">
                  <li>&bull; Your address (top right) &mdash; optional in exam conditions</li>
                  <li>&bull; Date</li>
                  <li>&bull; Salutation: &ldquo;Dear [first name]&rdquo; or &ldquo;Hi [name]&rdquo;</li>
                  <li>&bull; Warm, conversational tone &mdash; contractions are acceptable</li>
                  <li>&bull; May include personal anecdotes, humour, rhetorical questions</li>
                  <li>&bull; Sign off: &ldquo;Best wishes&rdquo;, &ldquo;Love&rdquo;, &ldquo;Take care&rdquo;</li>
                </ul>
              </div>
            </div>

            {/* Report */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-semibold text-primary">Report</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Written for a specific audience (e.g. a headteacher, a council)
                to present findings and make recommendations.
              </p>
              <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Format requirements:</p>
                <ul className="space-y-1">
                  <li>&bull; Title: &ldquo;Report on [topic]&rdquo;</li>
                  <li>&bull; &ldquo;Prepared by: [your name/role]&rdquo; and &ldquo;Date: [date]&rdquo;</li>
                  <li>&bull; Subheadings to organise sections (Introduction, Findings, Recommendations, Conclusion)</li>
                  <li>&bull; Formal, impersonal tone &mdash; third person preferred</li>
                  <li>&bull; Evidence-based &mdash; use facts and data from the passage</li>
                  <li>&bull; Clear recommendations at the end</li>
                </ul>
              </div>
            </div>

            {/* Article */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-semibold text-primary">Newspaper / Magazine Article</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Written for a general readership, typically for a school
                magazine or local newspaper.
              </p>
              <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Format requirements:</p>
                <ul className="space-y-1">
                  <li>&bull; Eye-catching headline</li>
                  <li>&bull; Optional subheading or strapline</li>
                  <li>&bull; Byline: &ldquo;By [your name]&rdquo;</li>
                  <li>&bull; Engaging opening &mdash; hook the reader immediately</li>
                  <li>&bull; Relatively formal but accessible language</li>
                  <li>&bull; May include expert opinions, statistics, rhetorical questions</li>
                  <li>&bull; Strong concluding paragraph</li>
                </ul>
              </div>
            </div>

            {/* Speech */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-semibold text-primary">Speech</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Written to be spoken aloud to a specific audience (e.g.
                classmates, a school assembly, a community meeting).
              </p>
              <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Format requirements:</p>
                <ul className="space-y-1">
                  <li>&bull; Address the audience directly: &ldquo;Good morning, everyone&rdquo; / &ldquo;Ladies and gentlemen&rdquo;</li>
                  <li>&bull; Rhetorical questions, tricolon (rule of three), repetition for emphasis</li>
                  <li>&bull; First person (&ldquo;I believe&rdquo;, &ldquo;We must&rdquo;)</li>
                  <li>&bull; Inclusive language (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)</li>
                  <li>&bull; Emotive language and personal anecdotes</li>
                  <li>&bull; Strong call to action at the end</li>
                  <li>&bull; Register depends on audience &mdash; formal for adults, semi-formal for peers</li>
                </ul>
              </div>
            </div>

            {/* Journal / Diary */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-semibold text-primary">Journal / Diary Entry</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A personal, reflective piece written from a specific character&rsquo;s
                perspective.
              </p>
              <div className="mt-3 rounded bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Format requirements:</p>
                <ul className="space-y-1">
                  <li>&bull; Date at the top</li>
                  <li>&bull; First person throughout</li>
                  <li>&bull; Personal, reflective tone &mdash; share thoughts, feelings, opinions</li>
                  <li>&bull; Can include informal language and incomplete sentences for authenticity</li>
                  <li>&bull; Should show emotional responses to events</li>
                  <li>&bull; May look forward to future events or reflect on past ones</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Directed writing mark scheme */}
          <div className="mt-8 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
            <h3 className="text-lg font-semibold text-primary">
              Directed Writing Mark Scheme
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              The 40 marks are split into two Assessment Objectives:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded bg-card p-4 shadow-md">
                <p className="text-2xl font-bold text-primary">25</p>
                <p className="text-sm font-semibold text-foreground">Reading (Content)</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  How well you use ideas from the passage and develop your own
                  relevant ideas. Top band: thorough and perceptive
                  understanding with ideas developed and supported.
                </p>
              </div>
              <div className="rounded bg-card p-4 shadow-md">
                <p className="text-2xl font-bold text-accent">15</p>
                <p className="text-sm font-semibold text-foreground">Writing (Language)</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  How effectively you write &mdash; format, register, tone,
                  vocabulary, sentence structures, accuracy of grammar and
                  spelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section 2: Composition ──────────────────────────── */}
        <section aria-labelledby="composition-heading">
          <h2 id="composition-heading" className="text-2xl font-bold text-foreground">
            Section 2: Composition
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            You choose <strong>one</strong> composition from a selection of
            titles. These are split into two categories: narrative (story
            writing) and descriptive. You must choose one from either category.
          </p>

          {/* Narrative writing */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground">Narrative Writing</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Narrative writing tells a story. Cambridge examiners are looking
              for a well-structured story with engaging characters, a clear
              plot, and effective use of language.
            </p>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-border p-5">
                <h4 className="font-semibold text-primary">Story Structure</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Opening / Exposition</span>
                  <span className="text-muted-foreground">&rarr;</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Rising Action</span>
                  <span className="text-muted-foreground">&rarr;</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Climax</span>
                  <span className="text-muted-foreground">&rarr;</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Falling Action</span>
                  <span className="text-muted-foreground">&rarr;</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Resolution</span>
                </div>
              </div>

              <div className="rounded-lg border border-border p-5">
                <h4 className="font-semibold text-primary">Top Tips for Narrative</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Start in the middle of the action</strong> (in medias res) &mdash;
                    avoid boring openings like &ldquo;One day I woke up and...&rdquo;
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Limit your characters</strong> &mdash; 2 or 3 characters is
                    enough. Give them names and distinct personalities.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Focus on a single event</strong> &mdash; do not try to cover
                    an entire life story. A well-told small moment is better than
                    a rushed epic.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Show, don&rsquo;t tell</strong> &mdash; instead of &ldquo;She
                    was scared&rdquo;, write &ldquo;Her hands trembled as she reached
                    for the handle&rdquo;.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Use dialogue sparingly</strong> &mdash; a few well-placed
                    lines of dialogue can reveal character, but too much turns
                    your story into a script.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>End with impact</strong> &mdash; avoid clich&eacute; endings like
                    &ldquo;it was all a dream&rdquo;. Leave the reader with
                    something to think about.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Descriptive writing */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground">Descriptive Writing</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Descriptive writing creates a vivid picture using language. There
              is no plot &mdash; the focus is entirely on using your senses
              and language techniques to bring a scene to life.
            </p>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-border p-5">
                <h4 className="font-semibold text-primary">The Five Senses Framework</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strong descriptive writing appeals to multiple senses, not
                  just sight:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  <div className="rounded bg-primary/5 p-3 text-center">
                    <p className="text-lg">&#128065;</p>
                    <p className="text-xs font-semibold text-primary">Sight</p>
                    <p className="mt-1 text-xs text-muted-foreground">Colours, shapes, light, movement</p>
                  </div>
                  <div className="rounded bg-primary/5 p-3 text-center">
                    <p className="text-lg">&#128066;</p>
                    <p className="text-xs font-semibold text-primary">Sound</p>
                    <p className="mt-1 text-xs text-muted-foreground">Volume, rhythm, silence, echoes</p>
                  </div>
                  <div className="rounded bg-primary/5 p-3 text-center">
                    <p className="text-lg">&#129345;</p>
                    <p className="text-xs font-semibold text-primary">Touch</p>
                    <p className="mt-1 text-xs text-muted-foreground">Texture, temperature, pressure</p>
                  </div>
                  <div className="rounded bg-primary/5 p-3 text-center">
                    <p className="text-lg">&#128067;</p>
                    <p className="text-xs font-semibold text-primary">Smell</p>
                    <p className="mt-1 text-xs text-muted-foreground">Aromas, odours, fragrances</p>
                  </div>
                  <div className="rounded bg-primary/5 p-3 text-center">
                    <p className="text-lg">&#128069;</p>
                    <p className="text-xs font-semibold text-primary">Taste</p>
                    <p className="mt-1 text-xs text-muted-foreground">Flavours, textures in the mouth</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-5">
                <h4 className="font-semibold text-primary">Top Tips for Descriptive</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Zoom in and out</strong> &mdash; start with a wide
                    panoramic view, then focus on specific details, then pull
                    back again.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Use varied sentence structures</strong> &mdash; mix
                    short, punchy sentences with longer, flowing ones.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Choose precise vocabulary</strong> &mdash; &ldquo;crimson&rdquo;
                    is more effective than &ldquo;red&rdquo;; &ldquo;trudged&rdquo;
                    is more evocative than &ldquo;walked&rdquo;.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Create atmosphere</strong> &mdash; use pathetic
                    fallacy (weather reflecting mood), light/dark contrasts, and
                    sensory details to build a mood.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Avoid telling a story</strong> &mdash; if the title
                    is descriptive, do not write a narrative. Focus on painting
                    the scene.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Full band descriptors ───────────────────────────── */}
        <section aria-labelledby="bands-heading">
          <h2 id="bands-heading" className="text-2xl font-bold text-foreground">
            Composition Band Descriptors
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Understanding the band descriptors is essential. Here is what
            Cambridge examiners are looking for at each level. The composition
            is marked out of 40: up to 16 for content and structure, and up
            to 24 for style and accuracy.
          </p>

          <div className="mt-6 space-y-4">
            {/* Band 6 */}
            <div className="rounded-lg border-2 border-accent/30 bg-accent/5 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">6</span>
                <div>
                  <p className="font-semibold text-foreground">Outstanding (35&ndash;40 marks)</p>
                  <p className="text-xs text-primary">A* / Grade 9 standard</p>
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Content &amp; Structure</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Highly effective, engaging content with a confident personal voice</li>
                    <li>&bull; Complex ideas developed with sophistication</li>
                    <li>&bull; Structure is varied, purposeful, and wholly convincing</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Style &amp; Accuracy</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Wide range of ambitious vocabulary, precisely used</li>
                    <li>&bull; Sentence structures are varied, controlled, and used for deliberate effect</li>
                    <li>&bull; Spelling, punctuation, and grammar are virtually flawless</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Band 5 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">5</span>
                <div>
                  <p className="font-semibold text-foreground">Very Good (29&ndash;34 marks)</p>
                  <p className="text-xs text-primary">A / Grade 7&ndash;8 standard</p>
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Content &amp; Structure</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Effective content that is well-developed and sustained</li>
                    <li>&bull; Clear sense of purpose and audience awareness</li>
                    <li>&bull; Well-organised with effective structural choices</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Style &amp; Accuracy</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Wide vocabulary used with some precision</li>
                    <li>&bull; Varied and effective sentence structures</li>
                    <li>&bull; Generally accurate with occasional minor errors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Band 4 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-sm font-bold text-white">4</span>
                <div>
                  <p className="font-semibold text-foreground">Good (22&ndash;28 marks)</p>
                  <p className="text-xs text-muted-foreground">B / Grade 5&ndash;6 standard</p>
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Content &amp; Structure</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Relevant content that is developed with some detail</li>
                    <li>&bull; Awareness of purpose and audience</li>
                    <li>&bull; Structured with some variety &mdash; clear beginning, middle, and end</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Style &amp; Accuracy</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Reasonable range of vocabulary, sometimes effective</li>
                    <li>&bull; Some variety in sentence structures</li>
                    <li>&bull; Mostly accurate &mdash; errors do not impede communication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Band 3 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-foreground">3</span>
                <div>
                  <p className="font-semibold text-foreground">Adequate (15&ndash;21 marks)</p>
                  <p className="text-xs text-muted-foreground">C / Grade 4 standard</p>
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Content &amp; Structure</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Some relevant content but may lack development</li>
                    <li>&bull; Some awareness of purpose</li>
                    <li>&bull; Straightforward structure with limited variation</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Style &amp; Accuracy</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Limited vocabulary &mdash; simple but functional</li>
                    <li>&bull; Mostly simple sentence structures</li>
                    <li>&bull; Errors are noticeable but meaning is still clear</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Band 2 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-foreground">2</span>
                <div>
                  <p className="font-semibold text-foreground">Limited (8&ndash;14 marks)</p>
                  <p className="text-xs text-muted-foreground">D&ndash;E / Grade 2&ndash;3 standard</p>
                </div>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                <p>
                  Content is thin or partially relevant. Limited vocabulary and
                  simple structures dominate. Errors in grammar and spelling
                  are frequent and may occasionally impede meaning.
                </p>
              </div>
            </div>

            {/* Band 1 */}
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-foreground">1</span>
                <div>
                  <p className="font-semibold text-foreground">Poor (1&ndash;7 marks)</p>
                  <p className="text-xs text-muted-foreground">F&ndash;G / Grade 1 standard</p>
                </div>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                <p>
                  Content is largely irrelevant or very brief. Very limited
                  vocabulary. Persistent errors seriously impede communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continue studying */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">Continue studying</h2>
          <p className="mt-2 text-muted-foreground">
            Strengthen your directed writing and composition skills further.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/resources/english-language/caie/paper-1"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 1: Reading Passages
            </Link>
            <Link
              href="/resources/english-language/caie/techniques"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Language Techniques Guide
            </Link>
            <Link
              href="/resources/writing-skills"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Writing Skills
            </Link>
            <Link
              href="/practice"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Practice Questions
            </Link>
            <Link
              href="/revision"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Revision Hub
            </Link>
          </div>
        </div>

        {/* ── Disclaimer ────────────────────────────────────────── */}
        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
