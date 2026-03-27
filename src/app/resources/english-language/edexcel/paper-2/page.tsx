import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/edexcel/paper-2' },
  title: "Edexcel Paper 2: Non-Fiction & Transactional Writing",
  description:
    "Complete revision guide for Edexcel English Language Paper 2 (1EN0/02). Two linked non-fiction texts, transactional writing, mark schemes, AOs, and example responses.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function Paper2Page() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-accent to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/english-language/edexcel"
            className="mb-4 inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Back to Edexcel Hub
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: Non-Fiction &amp; Transactional Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            2 hours 5 minutes &bull; 64 marks &bull; 60% of your GCSE
          </p>
        </div>
      </section>

      {/* ── Paper overview ────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Paper Overview</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Paper 2 is worth <strong>60% of your GCSE</strong> &mdash; the single most important paper. It tests your ability to
            read and compare two linked non-fiction texts (one from the 19th century, one from the 21st century) and then
            produce a piece of transactional writing. You should spend approximately <strong>1 hour 15 minutes on Section A</strong> (reading)
            and <strong>50 minutes on Section B</strong> (writing).
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm">A</div>
              <h3 className="mt-3 text-lg font-bold text-foreground">Section A: Reading</h3>
              <p className="mt-1 text-sm text-muted-foreground">24 marks &bull; ~1 hr 15 min</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Two linked non-fiction texts on the same theme
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Text 1: 19th-century non-fiction (e.g., diary, letter, speech, travel writing, journalism)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Text 2: 21st-century non-fiction (e.g., article, blog, autobiography, report)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Six compulsory questions testing AO1, AO2, AO3, and AO4
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">B</div>
              <h3 className="mt-3 text-lg font-bold text-foreground">Section B: Transactional Writing</h3>
              <p className="mt-1 text-sm text-muted-foreground">40 marks &bull; ~50 min</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Choice of two tasks (pick one)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Forms: article, letter, speech, review, or essay
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Topic linked to the reading texts&rsquo; theme
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Assessed on AO5 (24 marks) and AO6 (16 marks)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section A: Reading questions ──────────────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Section A: Reading &mdash; Question Breakdown</h2>

          <div className="mt-8 space-y-6">
            {/* Q1 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-foreground">Short Retrieval &mdash; Text 1 (1 mark)</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>AO1</strong> &mdash; Retrieve one piece of explicit information from the 19th-century text.
              </p>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Same as Paper 1 Q1. Copy the exact phrase. 1 minute maximum. Do not waste time.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-foreground">Short Retrieval &mdash; Text 2 (2 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>AO1</strong> &mdash; Identify two things from the 21st-century text.
              </p>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Two clear, separate points. Keep it concise &mdash; no analysis needed.
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-foreground">Language Analysis &mdash; Text 1 (6 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>AO2</strong> &mdash; Analyse how the 19th-century writer uses language to convey a particular idea, feeling, or impression.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">Example question:</p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;In lines 8-18 of Text 1, how does the writer use language to convey their feelings about city life?&rdquo;
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary">Mark scheme levels:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li><strong>Level 1 (1-2):</strong> Simple comments on language. Limited or no terminology.</li>
                  <li><strong>Level 2 (3-4):</strong> Some analysis of language with appropriate examples.</li>
                  <li><strong>Level 3 (5-6):</strong> Detailed, perceptive analysis. Precise terminology. Well-chosen examples with effect on reader.</li>
                </ul>
              </div>
            </div>

            {/* Q4 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-foreground">Language Analysis &mdash; Text 2 (6 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>AO2</strong> &mdash; Analyse how the 21st-century writer uses language in a specified section.
              </p>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Key difference from Q3:</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The 21st-century text may use more informal or modern language features: rhetorical questions, direct address,
                  humour, colloquialisms, or statistics. Identify how these choices shape the reader&rsquo;s response.
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-foreground">Critical Evaluation &mdash; Text 2 (15 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>AO4</strong> &mdash; Evaluate how effectively the 21st-century text achieves its purpose. You will be given a statement and asked to what extent you agree.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">Example question:</p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;A student said: &lsquo;The writer successfully persuades the reader that climate change is the most important issue of our time.&rsquo;
                  To what extent do you agree? You should comment on the writer&rsquo;s use of language and structure.&rdquo;
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary">Mark scheme levels:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li><strong>Level 1 (1-3):</strong> Limited evaluation with little reference to text.</li>
                  <li><strong>Level 2 (4-6):</strong> Some evaluation; attempts to respond to the statement.</li>
                  <li><strong>Level 3 (7-9):</strong> Clear evaluation with relevant examples and some analysis.</li>
                  <li><strong>Level 4 (10-12):</strong> Detailed, developed evaluation across the text.</li>
                  <li><strong>Level 5 (13-15):</strong> Perceptive, sophisticated evaluation with precisely selected evidence.</li>
                </ul>
              </div>
            </div>

            {/* Q6 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">6</span>
                <h3 className="text-lg font-bold text-foreground">Comparison (10 marks) &mdash; UNIQUE TO PAPER 2</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>AO3</strong> &mdash; Compare the writers&rsquo; viewpoints and perspectives across <em>both</em> texts.
                This is the only place in the entire English Language GCSE where you must compare.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">Example question:</p>
                <p className="mt-1 text-sm italic text-foreground">
                  &ldquo;Compare how the writers of Text 1 and Text 2 present their ideas and perspectives about education.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">How to structure your comparison:</p>
                <ol className="mt-2 space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Identify each writer&rsquo;s viewpoint clearly (&ldquo;Writer 1 believes... whereas Writer 2 argues...&rdquo;)</li>
                  <li>Compare using connectives: &ldquo;Similarly,&rdquo; &ldquo;In contrast,&rdquo; &ldquo;However,&rdquo; &ldquo;Conversely&rdquo;</li>
                  <li>Support each point with evidence from <em>both</em> texts</li>
                  <li>Analyse how each writer&rsquo;s methods differ (e.g., one uses emotive language while the other uses statistics)</li>
                  <li>Consider the historical context &mdash; a 19th-century perspective vs a modern one</li>
                </ol>
              </div>
              <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary">Mark scheme levels:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li><strong>Level 1 (1-2):</strong> Simple, limited cross-reference. May only discuss one text.</li>
                  <li><strong>Level 2 (3-4):</strong> Some comparison with relevant references from both texts.</li>
                  <li><strong>Level 3 (5-6):</strong> Clear comparison of viewpoints with supporting evidence from both texts.</li>
                  <li><strong>Level 4 (7-8):</strong> Detailed comparison with analysis of how methods shape different perspectives.</li>
                  <li><strong>Level 5 (9-10):</strong> Perceptive comparison; sophisticated understanding of how context influences viewpoints.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section B: Transactional Writing ──────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Section B: Transactional Writing (40 marks)</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            You choose <strong>one task from two options</strong>. The task will specify a form (article, letter, speech, review, or essay),
            a purpose (argue, persuade, advise, inform, explain), and an audience. You <strong>must</strong> follow the conventions of the
            specified form.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { form: "Article", conventions: "Headline, optional subheading, byline, paragraphs, engaging opening, quotations (optional)" },
              { form: "Letter", conventions: "Addresses, date, Dear..., formal/informal register, sign-off (Yours sincerely/faithfully)" },
              { form: "Speech", conventions: "Direct address (\"Ladies and gentlemen\"), rhetorical devices, repetition, call to action" },
              { form: "Review", conventions: "Headline, star rating (optional), balanced opinion, personal voice, recommendation" },
              { form: "Essay", conventions: "Introduction with thesis, structured paragraphs, counter-arguments, conclusion" },
            ].map((item) => (
              <div key={item.form} className="rounded-xl border border-border bg-card p-5 shadow-md">
                <h3 className="font-bold text-primary">{item.form}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.conventions}</p>
              </div>
            ))}
          </div>

          {/* Writing mark scheme */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Level</th>
                  <th className="px-4 py-3 font-semibold">AO5 (24)</th>
                  <th className="px-4 py-3 font-semibold">Descriptor</th>
                  <th className="px-4 py-3 font-semibold">AO6 (16)</th>
                  <th className="px-4 py-3 font-semibold">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">1</td>
                  <td className="px-4 py-3 text-muted-foreground">1-6</td>
                  <td className="px-4 py-3 text-muted-foreground">Simple awareness of purpose and audience; limited structural features; basic vocabulary.</td>
                  <td className="px-4 py-3 text-muted-foreground">1-4</td>
                  <td className="px-4 py-3 text-muted-foreground">Simple vocabulary; limited sentence structures; frequent errors.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">2</td>
                  <td className="px-4 py-3 text-muted-foreground">7-12</td>
                  <td className="px-4 py-3 text-muted-foreground">Attempts to match purpose and audience; some use of form conventions; developing paragraphs.</td>
                  <td className="px-4 py-3 text-muted-foreground">5-8</td>
                  <td className="px-4 py-3 text-muted-foreground">Some varied vocabulary; attempts at sentence variety; mostly accurate basic spelling.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">3</td>
                  <td className="px-4 py-3 text-muted-foreground">13-18</td>
                  <td className="px-4 py-3 text-muted-foreground">Clear, sustained awareness of purpose and audience; effective use of form conventions; coherent paragraphing with discourse markers.</td>
                  <td className="px-4 py-3 text-muted-foreground">9-12</td>
                  <td className="px-4 py-3 text-muted-foreground">Varied vocabulary chosen for effect; secure sentence control; generally accurate spelling and punctuation.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-bold text-foreground">4</td>
                  <td className="px-4 py-3 text-muted-foreground">19-24</td>
                  <td className="px-4 py-3 text-muted-foreground">Compelling, convincing writing fully matched to purpose and audience; sophisticated use of form; assured, distinctive voice.</td>
                  <td className="px-4 py-3 text-muted-foreground">13-16</td>
                  <td className="px-4 py-3 text-muted-foreground">Extensive, ambitious vocabulary; full range of sentence forms; virtually faultless accuracy.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Example responses ─────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Example Responses</h2>

          {/* Q6 Comparison example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">Question 6 &mdash; Comparison (Level 4-5 / 9-10 marks)</h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Question:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;Compare how the writers of Text 1 and Text 2 present their ideas about the importance of travel.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-50 p-4">
              <p className="text-sm font-semibold text-accent-700">Example paragraph:</p>
              <div className="mt-2 text-sm text-foreground leading-relaxed">
                <p>
                  Both writers share an enthusiasm for travel, yet their perspectives differ significantly due to their
                  historical contexts. The 19th-century writer in Text 1 presents travel as a transformative, almost spiritual
                  experience, describing the Italian landscape as &ldquo;a revelation that stirred the very foundations of my
                  soul.&rdquo; The noun &ldquo;revelation&rdquo; carries religious connotations, elevating travel beyond mere
                  leisure into something profound and enlightening. This reflects the Romantic-era belief that exposure to
                  nature and foreign cultures could enrich the inner self.
                </p>
                <p className="mt-3">
                  In contrast, the 21st-century writer in Text 2 adopts a more pragmatic and self-deprecating tone, admitting
                  that &ldquo;most of my so-called adventures involved getting lost and arguing over Google Maps.&rdquo; The
                  colloquial phrase &ldquo;so-called adventures&rdquo; undercuts the Romantic ideal, using humour to present travel
                  as imperfect yet still valuable. Where Text 1&rsquo;s writer seeks transcendence, Text 2&rsquo;s writer finds
                  value in the mundane and the human connection. Both, however, ultimately argue that travel expands one&rsquo;s
                  understanding of the world, even if they disagree on how.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-4">
              <p className="text-sm font-medium text-primary">Why this works:</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Directly compares both texts throughout (never just discusses one in isolation)</li>
                <li>&bull; Uses comparison connectives: &ldquo;In contrast,&rdquo; &ldquo;Where... Text 2&rsquo;s writer...&rdquo;</li>
                <li>&bull; Embeds short quotations from both texts and analyses word choices</li>
                <li>&bull; Considers historical context (Romantic era vs modern)</li>
                <li>&bull; Identifies both similarities and differences</li>
              </ul>
            </div>
          </div>

          {/* Transactional writing example */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">Section B &mdash; Speech Writing (Level 4 opening)</h3>
            <div className="mt-3 rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-muted-foreground">Task:</p>
              <p className="mt-1 text-sm italic text-foreground">
                &ldquo;Your headteacher is considering removing art and music from the curriculum. Write a speech to deliver at a school
                assembly arguing against this decision.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-50 p-4">
              <p className="text-sm font-semibold text-accent-700">Example opening:</p>
              <div className="mt-2 text-sm text-foreground leading-relaxed">
                <p>
                  Good morning, everyone. I want you to imagine something for me. Imagine walking through these corridors
                  next September and hearing nothing. No choir rehearsals drifting through the hall. No paint-splattered
                  Year 9s laughing on their way to the art block. No drumbeat from the music rooms that makes you tap your
                  foot even when you are trying to concentrate on quadratic equations.
                </p>
                <p className="mt-3">
                  Silence. That is what this school will sound like if we allow art and music to be stripped from our curriculum.
                </p>
                <p className="mt-3">
                  Now, I understand the argument. Budgets are tight. Exam results matter. Universities want to see
                  grades in maths and science and English. And yes, those subjects are important &mdash; nobody is denying that.
                  But to suggest that art and music are luxuries we can afford to lose is not just short-sighted; it is
                  fundamentally wrong.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-4">
              <p className="text-sm font-medium text-primary">Techniques demonstrated:</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>&bull; <strong>Direct address:</strong> &ldquo;I want you to imagine&rdquo;</li>
                <li>&bull; <strong>Anaphora:</strong> &ldquo;No choir... No paint-splattered... No drumbeat&rdquo;</li>
                <li>&bull; <strong>Sensory imagery:</strong> sound, sight, touch</li>
                <li>&bull; <strong>Short sentence for impact:</strong> &ldquo;Silence.&rdquo;</li>
                <li>&bull; <strong>Counter-argument acknowledged</strong> then rebutted</li>
                <li>&bull; <strong>Tricolon:</strong> &ldquo;maths and science and English&rdquo;</li>
                <li>&bull; <strong>Emotive language:</strong> &ldquo;stripped,&rdquo; &ldquo;fundamentally wrong&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exam strategy ─────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Exam Strategy &amp; Timing</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">AO</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                  <th className="px-4 py-3 font-semibold">Suggested Time</th>
                  <th className="px-4 py-3 font-semibold">Key Advice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q1 (Text 1)</td>
                  <td className="px-4 py-3">AO1</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">1 min</td>
                  <td className="px-4 py-3">Copy exact phrase.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q2 (Text 2)</td>
                  <td className="px-4 py-3">AO1</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">2-3 min</td>
                  <td className="px-4 py-3">Two separate points. No analysis needed.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q3 (Text 1)</td>
                  <td className="px-4 py-3">AO2</td>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3">8-10 min</td>
                  <td className="px-4 py-3">What-How-Why. 2-3 points with terminology.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q4 (Text 2)</td>
                  <td className="px-4 py-3">AO2</td>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3">8-10 min</td>
                  <td className="px-4 py-3">Same approach. Note modern language features.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q5 (Text 2)</td>
                  <td className="px-4 py-3">AO4</td>
                  <td className="px-4 py-3">15</td>
                  <td className="px-4 py-3">20-25 min</td>
                  <td className="px-4 py-3">Evaluate effectiveness. Address the statement. Balanced.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q6 (Both)</td>
                  <td className="px-4 py-3">AO3</td>
                  <td className="px-4 py-3">10</td>
                  <td className="px-4 py-3">15-20 min</td>
                  <td className="px-4 py-3">Compare throughout. Evidence from both texts. Context.</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium">Q7 (Writing)</td>
                  <td className="px-4 py-3">AO5/6</td>
                  <td className="px-4 py-3">40</td>
                  <td className="px-4 py-3">50 min</td>
                  <td className="px-4 py-3">5 min plan, 40 min write, 5 min proofread. Follow form conventions.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-warn-200 bg-warn-50 p-6">
            <h3 className="font-bold text-warn-700">Common Mistakes to Avoid on Paper 2</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Q6:</strong> Discussing one text then the other (the &ldquo;block&rdquo; method). Instead, compare point-by-point throughout.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Section B:</strong> Ignoring form conventions. If the task says &ldquo;letter,&rdquo; you must include addresses and a salutation.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Section B:</strong> Writing in the wrong register. A formal letter to a headteacher should not use slang.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>Timing:</strong> Spending too long on Q1-Q2 (only 3 marks combined) and rushing Q5-Q6 (25 marks combined).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                <strong>19th-century text:</strong> Not adapting your analysis to account for archaic vocabulary or historical context.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
