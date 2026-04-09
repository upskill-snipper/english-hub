import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/caie/writing-skills' },
  title: "Writing Skills | Cambridge IGCSE English Language",
  description:
    "Master every writing format for Cambridge IGCSE English Language. Directed writing formats (letters, reports, speeches, articles, journals, interviews), summary writing technique, and narrative/descriptive composition guidance.",
  keywords: [
    "IGCSE writing skills",
    "IGCSE directed writing",
    "IGCSE summary writing",
    "Cambridge narrative writing",
    "IGCSE formal letter format",
    "IGCSE report writing",
    "IGCSE speech writing",
    "IGCSE descriptive writing tips",
  ],
};

/* ─── Page component ─────────────────────────────────────────── */

export default function WritingSkillsPage() {
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
            Writing Skills
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Directed Writing, Summary Technique &amp; Composition
          </p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A comprehensive guide to every writing skill you need for the
            Cambridge IGCSE English Language examination, with format templates,
            worked examples, and examiner-approved techniques.
          </p>
        </div>
      </section>

      {/* ── Quick nav ───────────────────────────────────────────── */}
      <nav className="border-b border-border bg-card px-4 py-3 sticky top-0 z-10">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
          {[
            { href: "#directed", label: "Directed Writing Formats" },
            { href: "#summary", label: "Summary Writing" },
            { href: "#narrative", label: "Narrative Writing" },
            { href: "#descriptive", label: "Descriptive Writing" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">

        {/* ═══════════════════════════════════════════════════════
            SECTION 1: DIRECTED WRITING FORMATS
            ═══════════════════════════════════════════════════════ */}
        <section id="directed" className="scroll-mt-16" aria-labelledby="directed-heading">
          <h2 id="directed-heading" className="text-2xl font-bold text-foreground">
            Directed Writing Formats
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            In directed writing, you must write in a specific format using
            ideas from a provided passage <strong>and</strong> your own ideas.
            Getting the format right is the foundation &mdash; examiners will
            immediately notice if you use the wrong conventions.
          </p>

          {/* ── Formal Letter ──────────────────────────────────── */}
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">1. Formal Letter</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Used when writing to someone you do not know, or in a professional
              or official capacity (e.g. to a headteacher, local council, editor
              of a newspaper, or company).
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p className="text-right">Your Address Line 1<br/>Your Address Line 2<br/>Date</p>
                <p className="mt-4">Recipient&rsquo;s Name<br/>Their Address Line 1<br/>Their Address Line 2</p>
                <p className="mt-4">Dear Mr/Mrs/Ms [Surname],</p>
                <p className="italic text-muted-foreground mt-2">[Subject line &mdash; optional but useful]</p>
                <p className="italic text-muted-foreground mt-2">[Opening paragraph: state your purpose clearly]</p>
                <p className="italic text-muted-foreground">[Middle paragraphs: develop your points with detail and evidence]</p>
                <p className="italic text-muted-foreground">[Closing paragraph: summarise and state what action you expect]</p>
                <p className="mt-4">Yours sincerely,<br/>[Your full name]</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key points to remember:</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Use &ldquo;Yours sincerely&rdquo; when you know the name; &ldquo;Yours faithfully&rdquo; when you wrote &ldquo;Dear Sir/Madam&rdquo;</li>
                <li>&bull; Formal register throughout &mdash; no slang, no contractions (&ldquo;don&rsquo;t&rdquo; &rarr; &ldquo;do not&rdquo;)</li>
                <li>&bull; Each paragraph should have a clear topic</li>
                <li>&bull; Be polite but firm; avoid emotional outbursts</li>
              </ul>
            </div>
          </div>

          {/* ── Informal Letter ────────────────────────────────── */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">2. Informal Letter</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Used when writing to a friend, family member, or someone you have
              a close relationship with.
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p className="text-right">Date</p>
                <p className="mt-4">Dear [First name] / Hi [Name],</p>
                <p className="italic text-muted-foreground mt-2">[Opening: reference to shared experience or reason for writing]</p>
                <p className="italic text-muted-foreground">[Body: share your thoughts, advice, news &mdash; conversational tone]</p>
                <p className="italic text-muted-foreground">[Closing: look forward to hearing from them]</p>
                <p className="mt-4">Best wishes / Take care / Love,<br/>[Your first name]</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key points to remember:</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Warm, friendly tone &mdash; contractions, rhetorical questions, and exclamation marks are fine</li>
                <li>&bull; Personal anecdotes make it feel authentic</li>
                <li>&bull; Still needs clear paragraphs and coherent structure</li>
                <li>&bull; Do NOT be so informal that your writing becomes sloppy &mdash; you are still being assessed on language quality</li>
              </ul>
            </div>
          </div>

          {/* ── Report ─────────────────────────────────────────── */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">3. Report</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A factual, structured document presenting findings and
              recommendations to a specific audience (e.g. a headteacher,
              committee, or council).
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p className="font-bold">REPORT ON [TOPIC]</p>
                <p>Prepared by: [Your name / role]<br/>Date: [Date]<br/>Prepared for: [Audience]</p>
                <p className="mt-4 font-bold">1. Introduction</p>
                <p className="italic text-muted-foreground">[State the purpose of the report]</p>
                <p className="mt-2 font-bold">2. Findings</p>
                <p className="italic text-muted-foreground">[Present your evidence and observations under clear subheadings]</p>
                <p className="mt-2 font-bold">3. Recommendations</p>
                <p className="italic text-muted-foreground">[Suggest actions based on your findings]</p>
                <p className="mt-2 font-bold">4. Conclusion</p>
                <p className="italic text-muted-foreground">[Brief summary of key points]</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key points to remember:</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Formal, impersonal tone &mdash; third person preferred (&ldquo;It was found that&hellip;&rdquo;)</li>
                <li>&bull; Use subheadings to organise &mdash; this is expected in report format</li>
                <li>&bull; Evidence-based: use facts, data, or observations from the passage</li>
                <li>&bull; Recommendations should be practical and specific</li>
                <li>&bull; Numbered sections look professional</li>
              </ul>
            </div>
          </div>

          {/* ── Article ────────────────────────────────────────── */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">4. Newspaper / Magazine Article</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              An engaging piece for a general readership, typically for a school
              or community publication.
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p className="font-bold text-lg">[EYE-CATCHING HEADLINE]</p>
                <p className="italic">[Optional subheading / strapline]</p>
                <p>By [Your name]</p>
                <p className="italic text-muted-foreground mt-2">[Hook opening &mdash; grab the reader&rsquo;s attention immediately]</p>
                <p className="italic text-muted-foreground">[Body paragraphs: present information, opinions, expert views]</p>
                <p className="italic text-muted-foreground">[Concluding paragraph: strong final statement or call to action]</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key points to remember:</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Headline should be short, punchy, and engaging (alliteration, puns, or wordplay can work well)</li>
                <li>&bull; Engage the reader from the first sentence &mdash; a question, statistic, or surprising statement</li>
                <li>&bull; Balance facts and opinions</li>
                <li>&bull; Can include &ldquo;expert quotes&rdquo; or viewpoints from different perspectives</li>
                <li>&bull; Relatively formal but accessible language &mdash; write for a broad audience</li>
              </ul>
            </div>
          </div>

          {/* ── Speech ─────────────────────────────────────────── */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">5. Speech</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Written to be delivered aloud to a specific audience. Must feel
              natural when spoken and use persuasive techniques.
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p>Good morning/afternoon, [audience] &mdash;</p>
                <p className="italic text-muted-foreground mt-2">[Opening: introduce yourself and your topic. Hook the audience.]</p>
                <p className="italic text-muted-foreground">[Body: develop 3&ndash;4 key arguments. Use rhetorical questions, tricolon, anecdotes.]</p>
                <p className="italic text-muted-foreground">[Conclusion: powerful closing statement or call to action.]</p>
                <p className="mt-2">Thank you.</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key rhetorical devices for speeches:</p>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Rhetorical questions</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Rule of three (tricolon)</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Repetition / Anaphora</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Direct address (&ldquo;you&rdquo;, &ldquo;we&rdquo;)</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Emotive language</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Personal anecdotes</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Imperatives</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Statistics / facts</span>
                <span className="rounded bg-card px-2 py-1 text-xs text-muted-foreground shadow-md">Inclusive pronouns</span>
              </div>
            </div>
          </div>

          {/* ── Journal / Diary ────────────────────────────────── */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">6. Journal / Diary Entry</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A personal, reflective piece written from a character&rsquo;s
              perspective. The most personal of all the directed writing formats.
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p>[Date]</p>
                <p className="italic text-muted-foreground mt-2">[Opening: set the scene or reflect on what has happened]</p>
                <p className="italic text-muted-foreground">[Body: explore thoughts, feelings, and reactions in detail]</p>
                <p className="italic text-muted-foreground">[Closing: look ahead, express hopes or fears, or reflect on lessons learned]</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key points to remember:</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; First person throughout &mdash; &ldquo;I&rdquo;, &ldquo;my&rdquo;, &ldquo;me&rdquo;</li>
                <li>&bull; Deeply reflective &mdash; share honest thoughts and feelings</li>
                <li>&bull; Can use informal language, incomplete sentences, and stream of consciousness</li>
                <li>&bull; Show emotional responses to events &mdash; not just what happened, but how it felt</li>
                <li>&bull; Still needs to be well-written and engaging despite the informal format</li>
              </ul>
            </div>
          </div>

          {/* ── Interview ──────────────────────────────────────── */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">7. Interview (Q&amp;A Format)</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Less common but sometimes appears. You write both the questions
              and the answers, typically for a magazine or newspaper feature.
            </p>

            <div className="mt-4 rounded bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Template</p>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p className="font-bold">[Headline / Title]</p>
                <p className="italic">[Brief introduction to the interviewee and context]</p>
                <p className="mt-2"><strong>Q:</strong> [Question from interviewer]</p>
                <p><strong>A:</strong> [Detailed answer from interviewee]</p>
                <p className="mt-2"><strong>Q:</strong> [Follow-up question]</p>
                <p><strong>A:</strong> [Response with detail and personality]</p>
                <p className="italic text-muted-foreground mt-2">[Continue for 5&ndash;7 questions]</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-accent/5 border border-accent/20 p-4">
              <p className="text-sm font-semibold text-primary">Key points to remember:</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Questions should be varied &mdash; open-ended, probing, and relevant</li>
                <li>&bull; Answers should reveal personality and include specific details</li>
                <li>&bull; Build from general questions to more personal or probing ones</li>
                <li>&bull; Include an introduction that sets the context for the reader</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ═══════════════════════════════════════════════════════
            SECTION 2: SUMMARY WRITING
            ═══════════════════════════════════════════════════════ */}
        <section id="summary" className="scroll-mt-16" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="text-2xl font-bold text-foreground">
            Summary Writing Technique
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Summary writing is a core skill for the Cambridge IGCSE reading
            paper. You must demonstrate the ability to identify relevant
            information, select key points, and organise them into fluent,
            concise prose in your own words.
          </p>

          <div className="mt-8 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
            <h3 className="text-lg font-semibold text-primary">
              The ISO Method: Identify &rarr; Select &rarr; Organise
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  I
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Identify</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Read the question carefully. What exactly are you being asked
                    to summarise? Underline the focus words. Then go through the
                    passage and underline or highlight every piece of information
                    that is relevant to that specific focus.
                  </p>
                  <div className="mt-2 rounded bg-card p-3 text-xs text-muted-foreground">
                    <strong>Tip:</strong> Number each relevant point as you find
                    it. Aim for 12&ndash;15 points. More points = more content marks.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Select</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Review your underlined points and discard any that are:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Repetitions of the same idea in different words</li>
                    <li>&bull; Examples or illustrations (you want the main idea, not the example)</li>
                    <li>&bull; Only loosely relevant to the question focus</li>
                  </ul>
                  <div className="mt-2 rounded bg-card p-3 text-xs text-muted-foreground">
                    <strong>Tip:</strong> If two points are very similar, combine
                    them into one concise point.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  O
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Organise</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Group related points together and decide on a logical order.
                    Then write your summary in <strong>continuous prose</strong>
                    (not bullet points), using your own words. Link your points
                    with appropriate connectives:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Furthermore",
                      "In addition",
                      "Moreover",
                      "However",
                      "On the other hand",
                      "Similarly",
                      "In contrast",
                      "As a result",
                      "Consequently",
                      "Another factor is",
                      "Equally important",
                    ].map((word) => (
                      <span
                        key={word}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary mark scheme */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl font-bold text-primary">15</p>
              <p className="text-sm font-semibold text-foreground">Content Marks</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                1 mark for each relevant content point identified from the
                passage. The mark scheme lists specific points &mdash; you get
                credit for each distinct idea you include, up to 15.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl font-bold text-accent">10</p>
              <p className="text-sm font-semibold text-foreground">Writing Quality Marks</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Assessed on: use of own words (not lifting), fluency and
                coherence of writing, accuracy of grammar and spelling, and
                appropriate use of connectives to link ideas.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ═══════════════════════════════════════════════════════
            SECTION 3: NARRATIVE WRITING
            ═══════════════════════════════════════════════════════ */}
        <section id="narrative" className="scroll-mt-16" aria-labelledby="narrative-heading">
          <h2 id="narrative-heading" className="text-2xl font-bold text-foreground">
            Narrative Writing
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Narrative writing tells a story. For Cambridge IGCSE, you need to
            demonstrate control of plot, character, setting, and language to
            create an engaging piece of creative writing.
          </p>

          {/* Opening techniques */}
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Opening Techniques
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your opening is crucial &mdash; it sets the tone and determines
            whether the examiner is engaged from the start.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">In Medias Res</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Start in the middle of the action. Drop the reader into a
                dramatic moment with no preamble.
              </p>
              <p className="mt-2 text-xs italic text-muted-foreground">
                &ldquo;The glass shattered. Before I could move, a hand grabbed
                my shoulder.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Atmospheric Description</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Begin with vivid setting description that establishes mood and
                foreshadows events.
              </p>
              <p className="mt-2 text-xs italic text-muted-foreground">
                &ldquo;The mist clung to the river like a shroud, thick and
                unrelenting, swallowing the last traces of daylight.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Dialogue</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Open with a piece of speech that immediately reveals character
                or creates intrigue.
              </p>
              <p className="mt-2 text-xs italic text-muted-foreground">
                &ldquo;&lsquo;Whatever you do,&rsquo; she whispered, &lsquo;don&rsquo;t
                look behind you.&rsquo;&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Prolepsis (Flash-forward)</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Hint at a future event to create suspense, then go back to tell
                the story.
              </p>
              <p className="mt-2 text-xs italic text-muted-foreground">
                &ldquo;If I had known what that single phone call would lead to,
                I would never have answered.&rdquo;
              </p>
            </div>
          </div>

          {/* Narrative techniques */}
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Essential Narrative Techniques
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Show, Don&rsquo;t Tell</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Instead of stating emotions directly, reveal them through
                actions, dialogue, and physical details.
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <div className="rounded bg-warn-50 p-2">
                  <p className="text-xs font-semibold text-warn-700">Telling (weak)</p>
                  <p className="text-xs text-muted-foreground">&ldquo;He was nervous.&rdquo;</p>
                </div>
                <div className="rounded bg-success-50 p-2">
                  <p className="text-xs font-semibold text-success-700">Showing (strong)</p>
                  <p className="text-xs text-muted-foreground">&ldquo;His fingers drummed against the desk. He checked his watch for the fifth time.&rdquo;</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Varied Pace</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Control the speed of your story. Slow down for important moments
                (use detailed description, sensory language). Speed up for action
                (use short sentences, rapid dialogue).
              </p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Foreshadowing</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Drop subtle hints about what will happen later. This creates
                suspense and shows sophistication in your planning.
              </p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-primary">Effective Endings</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Avoid clich&eacute;d endings (&ldquo;it was all a dream&rdquo;,
                &ldquo;I woke up&rdquo;). Instead, try: a circular ending that
                mirrors the opening; a moment of realisation or change; an
                ambiguous ending that leaves the reader thinking; or a single
                powerful image that lingers.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ═══════════════════════════════════════════════════════
            SECTION 4: DESCRIPTIVE WRITING
            ═══════════════════════════════════════════════════════ */}
        <section id="descriptive" className="scroll-mt-16" aria-labelledby="descriptive-heading">
          <h2 id="descriptive-heading" className="text-2xl font-bold text-foreground">
            Descriptive Writing
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Descriptive writing is about creating a vivid, immersive experience
            for the reader. There is <strong>no plot</strong> &mdash; the entire
            focus is on using language to bring a scene, person, or place to life.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Structure for Descriptive Writing
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Even without a plot, your description needs structure. Try one of
            these approaches:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-4 text-center">
              <p className="font-semibold text-primary">Zoom Technique</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Wide shot &rarr; medium shot &rarr; close-up &rarr; wide shot.
                Move from a panoramic view to tiny details, then pull back.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <p className="font-semibold text-primary">Senses Journey</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Structure your description around the five senses, moving from
                sight to sound to touch to smell to taste.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <p className="font-semibold text-primary">Time Progression</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Describe the same scene at different times &mdash; dawn to dusk,
                or season to season &mdash; showing how it changes.
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Descriptive Writing Checklist
          </h3>
          <div className="mt-4 rounded-lg border border-border bg-card p-5">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Have I used at least three different senses (not just sight)?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Have I used a range of imagery (simile, metaphor, personification)?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Is my vocabulary precise and varied (not repeating the same adjectives)?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Have I varied my sentence lengths and structures?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Is there a consistent mood or atmosphere throughout?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Have I avoided telling a story (no plot, just description)?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Does my description have a clear structure (zoom, senses, or time-based)?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Is my opening strong enough to immediately engage the reader?
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent text-xs text-accent">&#10003;</span>
                Have I checked spelling, punctuation, and grammar?
              </li>
            </ul>
          </div>
        </section>

        {/* ── Disclaimer ────────────────────────────────────────── */}
        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
