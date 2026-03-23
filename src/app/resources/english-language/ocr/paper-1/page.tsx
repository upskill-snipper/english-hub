import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "OCR Paper 1: Communicating Information and Ideas | The English Hub",
  description:
    "Complete guide to OCR GCSE English Language Component 01 — Communicating Information and Ideas. Non-fiction reading and transactional writing revision.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRPaper1Page() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-language/ocr"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; OCR English Language
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Communicating Information and Ideas
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Component 01 &middot; 2 hours &middot; 80 marks &middot; 50% of
            GCSE
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Paper structure */}
        <section aria-labelledby="structure-heading">
          <h2
            id="structure-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Paper Structure
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              OCR Component 01 tests your ability to read and understand
              non-fiction and literary non-fiction texts, and to write
              effectively for transactional purposes. The paper is split into
              two sections:
            </p>
            <div className="overflow-x-auto">
              <table className="mt-2 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20 text-left">
                    <th className="py-3 pr-4 font-semibold text-gray-900">Section</th>
                    <th className="py-3 pr-4 font-semibold text-gray-900">Focus</th>
                    <th className="py-3 pr-4 font-semibold text-gray-900">Marks</th>
                    <th className="py-3 font-semibold text-gray-900">Time Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium">A &mdash; Reading</td>
                    <td className="py-3 pr-4">Non-fiction / literary non-fiction</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">1 hour</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">B &mdash; Writing</td>
                    <td className="py-3 pr-4">Writing to present information and ideas</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">1 hour</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* ── SECTION A: Reading ─────────────────────────────── */}
        <section aria-labelledby="reading-heading">
          <h2
            id="reading-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Section A: Reading Non-Fiction and Literary Non-Fiction
          </h2>

          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            {/* Types of text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                What Types of Text Will You Encounter?
              </h3>
              <p className="mt-2">
                Section A presents you with two unseen non-fiction or literary
                non-fiction texts. These could include:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Newspaper and magazine articles (broadsheet and tabloid)</li>
                <li>Travel writing, diaries, and journals</li>
                <li>Autobiography and biography extracts</li>
                <li>Letters (personal and formal)</li>
                <li>Speeches and essays</li>
                <li>Reviews and blogs</li>
                <li>Reportage and investigative journalism</li>
                <li>Literary non-fiction from the 19th, 20th, or 21st century</li>
              </ul>
              <p className="mt-3">
                At least one text will be from the 19th century or the literary
                heritage, so practising with older, more complex texts is
                essential.
              </p>
            </div>

            {/* Question types */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Understanding the Question Types
              </h3>
              <p className="mt-2">
                The reading section typically contains questions that test the
                following skills:
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">
                    Retrieval and Inference (AO1)
                  </h4>
                  <p className="mt-2 text-sm">
                    You will be asked to identify explicit information from the
                    text and make inferences. &ldquo;Explicit&rdquo; means
                    information that is directly stated, while
                    &ldquo;implicit&rdquo; means information that is suggested
                    or implied.
                  </p>
                  <div className="mt-3 rounded border border-accent/20 bg-accent-50 p-3">
                    <p className="text-sm font-medium text-accent-700">Top tip</p>
                    <p className="mt-1 text-sm text-accent-800">
                      When making inferences, always support your point with a
                      short, embedded quotation from the text. Use the
                      Point-Evidence-Explain (PEE) structure to keep your
                      answers focused.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">
                    Language and Structure Analysis (AO2)
                  </h4>
                  <p className="mt-2 text-sm">
                    These questions ask you to analyse <em>how</em> the writer
                    uses language and/or structure to achieve effects. You must
                    identify specific techniques and explain their impact on
                    the reader. Subject terminology (e.g., metaphor, hyperbole,
                    anaphora) should be used where relevant.
                  </p>
                  <div className="mt-3 rounded border border-accent/20 bg-accent-50 p-3">
                    <p className="text-sm font-medium text-accent-700">Top tip</p>
                    <p className="mt-1 text-sm text-accent-800">
                      Don&rsquo;t just spot techniques &mdash; explain
                      <em> why</em> the writer used them and what effect they
                      have on the reader. Always link back to the
                      writer&rsquo;s purpose.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">
                    Comparison (AO3)
                  </h4>
                  <p className="mt-2 text-sm">
                    You will need to compare the two texts, focusing on
                    writers&rsquo; ideas, perspectives, and methods. This is
                    typically the highest-mark question in Section A. You must
                    compare <strong>both</strong> what the writers say and
                    <strong> how</strong> they say it.
                  </p>
                  <div className="mt-3 rounded border border-accent/20 bg-accent-50 p-3">
                    <p className="text-sm font-medium text-accent-700">Top tip</p>
                    <p className="mt-1 text-sm text-accent-800">
                      Use comparative connectives: &ldquo;Similarly&rdquo;,
                      &ldquo;In contrast&rdquo;, &ldquo;Whereas&rdquo;,
                      &ldquo;On the other hand&rdquo;. Integrate comparison
                      throughout your answer rather than writing about each
                      text separately.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">
                    Evaluation (AO4)
                  </h4>
                  <p className="mt-2 text-sm">
                    You may be asked to evaluate a statement or viewpoint about
                    one of the texts. This requires you to critically assess
                    the text and decide how far you agree with a given
                    interpretation, supporting your answer with evidence.
                  </p>
                  <div className="mt-3 rounded border border-accent/20 bg-accent-50 p-3">
                    <p className="text-sm font-medium text-accent-700">Top tip</p>
                    <p className="mt-1 text-sm text-accent-800">
                      Show a nuanced response. Consider multiple
                      interpretations and weigh up evidence for and against the
                      statement. Top-band answers demonstrate critical
                      evaluation, not just agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reading strategies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Effective Reading Strategies
              </h3>
              <ol className="ml-6 mt-2 list-decimal space-y-2">
                <li>
                  <strong>Read the questions first</strong> &mdash; this helps
                  you know what to look for when you read the texts.
                </li>
                <li>
                  <strong>Annotate as you read</strong> &mdash; underline key
                  words, circle techniques, and note your initial reactions in
                  the margin.
                </li>
                <li>
                  <strong>Consider the context</strong> &mdash; when was the
                  text written? Who was the intended audience? What was the
                  writer&rsquo;s purpose?
                </li>
                <li>
                  <strong>Track the writer&rsquo;s argument</strong> &mdash;
                  especially in non-fiction, identify the main argument and how
                  the writer builds and supports it.
                </li>
                <li>
                  <strong>Note shifts in tone or focus</strong> &mdash; these
                  structural choices are important for analysis questions.
                </li>
              </ol>
            </div>

            {/* Model paragraph */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Model Analysis Paragraph
              </h3>
              <p className="mt-2">
                Here is an example of a strong analytical paragraph responding
                to an AO2 question about a travel writing extract:
              </p>
              <div className="mt-3 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm italic text-gray-700">
                  The writer uses the simile &ldquo;the mountains loomed like
                  ancient sentinels guarding the valley&rdquo; to personify the
                  landscape and create a sense of awe and reverence. The verb
                  &ldquo;loomed&rdquo; suggests something imposing and
                  slightly threatening, while the metaphor of
                  &ldquo;sentinels&rdquo; implies that the mountains have a
                  protective, watchful quality. This dual effect reflects the
                  writer&rsquo;s ambivalence towards the wilderness &mdash;
                  both drawn to its grandeur and respectful of its power. The
                  use of the adjective &ldquo;ancient&rdquo; further
                  reinforces the timelessness of the natural world, making the
                  human traveller seem small and transient by comparison.
                </p>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Notice how this paragraph: identifies a technique; quotes
                precisely; explains the effect of individual words; explores
                multiple interpretations; and links back to the writer&rsquo;s
                broader purpose.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* ── SECTION B: Writing ─────────────────────────────── */}
        <section aria-labelledby="writing-heading">
          <h2
            id="writing-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Section B: Writing to Present Information and Ideas
          </h2>

          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                What Are You Asked to Write?
              </h3>
              <p className="mt-2">
                In Section B, you will complete <strong>two</strong> writing
                tasks. These are transactional writing tasks where you write
                for a specific purpose, audience, and form. You might be asked
                to write:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>A letter (formal or informal)</li>
                <li>An article for a newspaper or magazine</li>
                <li>A speech or talk</li>
                <li>A review</li>
                <li>A leaflet or guide</li>
                <li>A blog post or online article</li>
                <li>A report</li>
              </ul>
              <p className="mt-3">
                One task is typically shorter (worth fewer marks) and the other
                is a longer, extended response.
              </p>
            </div>

            {/* PAF */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Purpose, Audience, and Form (PAF)
              </h3>
              <p className="mt-2">
                Before you begin writing, identify the PAF from the question:
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Purpose</p>
                  <p className="mt-1 text-sm">
                    Why are you writing? To argue, persuade, inform, advise,
                    explain, or review?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Audience</p>
                  <p className="mt-1 text-sm">
                    Who are you writing for? Teenagers, adults, a headteacher,
                    a local council, a general readership?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Form</p>
                  <p className="mt-1 text-sm">
                    What format? A letter, article, speech, leaflet, report, or
                    blog?
                  </p>
                </div>
              </div>
            </div>

            {/* Form conventions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Form Conventions You Must Know
              </h3>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">Formal Letter</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Your address (top right), their address (left), date</li>
                    <li>&ldquo;Dear Sir/Madam&rdquo; or &ldquo;Dear Mr/Mrs [Name]&rdquo;</li>
                    <li>Formal register throughout</li>
                    <li>&ldquo;Yours faithfully&rdquo; (if Dear Sir/Madam) or &ldquo;Yours sincerely&rdquo; (if named)</li>
                    <li>Clear paragraphs with logical progression</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">Article</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Engaging headline</li>
                    <li>Optional subheading or strapline</li>
                    <li>Opening hook to grab attention</li>
                    <li>Short paragraphs with clear topic sentences</li>
                    <li>Can include rhetorical questions and direct address</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">Speech</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Address the audience directly (&ldquo;Ladies and gentlemen&rdquo;)</li>
                    <li>Rhetorical devices: tricolon, anaphora, rhetorical questions</li>
                    <li>Emotive language and personal anecdotes</li>
                    <li>Strong, memorable conclusion with a call to action</li>
                    <li>Varied sentence lengths for impact when spoken aloud</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">Review</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Clear subject of the review stated early</li>
                    <li>Balanced opinions (both positive and negative points)</li>
                    <li>Descriptive language to bring the experience alive</li>
                    <li>A recommendation or overall judgement</li>
                    <li>Possible star rating or summary verdict</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Persuasive techniques */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Key Persuasive and Rhetorical Techniques
              </h3>
              <p className="mt-2">
                For tasks that require you to argue or persuade, deploy these
                techniques strategically:
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary/20 text-left">
                      <th className="py-3 pr-4 font-semibold text-gray-900">Technique</th>
                      <th className="py-3 pr-4 font-semibold text-gray-900">Definition</th>
                      <th className="py-3 font-semibold text-gray-900">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 pr-4 font-medium">Rhetorical question</td>
                      <td className="py-3 pr-4">A question asked for effect, not expecting an answer</td>
                      <td className="py-3 italic">&ldquo;Can we really afford to ignore this crisis?&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Tricolon (rule of three)</td>
                      <td className="py-3 pr-4">Three parallel words, phrases, or clauses</td>
                      <td className="py-3 italic">&ldquo;We need courage, commitment, and compassion.&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Anaphora</td>
                      <td className="py-3 pr-4">Repetition of a word or phrase at the start of successive clauses</td>
                      <td className="py-3 italic">&ldquo;We will fight. We will persevere. We will succeed.&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Direct address</td>
                      <td className="py-3 pr-4">Speaking directly to the reader using &ldquo;you&rdquo;</td>
                      <td className="py-3 italic">&ldquo;You have the power to make a difference.&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Statistics / evidence</td>
                      <td className="py-3 pr-4">Using data to support an argument</td>
                      <td className="py-3 italic">&ldquo;Studies show that 73% of young people&hellip;&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Counter-argument</td>
                      <td className="py-3 pr-4">Acknowledging the opposing view before dismissing it</td>
                      <td className="py-3 italic">&ldquo;Some may argue&hellip; however, this ignores&hellip;&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Emotive language</td>
                      <td className="py-3 pr-4">Words chosen to provoke an emotional response</td>
                      <td className="py-3 italic">&ldquo;Innocent children are suffering needlessly.&rdquo;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SPaG */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Spelling, Punctuation, and Grammar (AO6)
              </h3>
              <p className="mt-2">
                Accurate SPaG is assessed as part of AO6. To reach the top
                band:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>
                  <strong>Vary your sentence structures</strong> &mdash; use
                  simple, compound, and complex sentences. Start some sentences
                  with adverbials, subordinate clauses, or participial phrases.
                </li>
                <li>
                  <strong>Use ambitious vocabulary</strong> &mdash; avoid
                  generic words like &ldquo;good&rdquo;, &ldquo;bad&rdquo;, or
                  &ldquo;nice&rdquo;. Choose precise, vivid alternatives.
                </li>
                <li>
                  <strong>Punctuate accurately</strong> &mdash; use full stops,
                  commas, apostrophes, colons, semicolons, and dashes
                  correctly. A well-placed semicolon shows confidence.
                </li>
                <li>
                  <strong>Paragraph effectively</strong> &mdash; each paragraph
                  should have a clear focus. Use discourse markers to link
                  paragraphs (&ldquo;Furthermore&rdquo;, &ldquo;In
                  addition&rdquo;, &ldquo;Conversely&rdquo;).
                </li>
                <li>
                  <strong>Proofread</strong> &mdash; leave 3&ndash;5 minutes at
                  the end to check for errors. Correct mistakes neatly with a
                  single line through the error.
                </li>
              </ul>
            </div>

            {/* Timing */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Recommended Timing
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary/20 text-left">
                      <th className="py-3 pr-4 font-semibold text-gray-900">Task</th>
                      <th className="py-3 font-semibold text-gray-900">Suggested Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 pr-4">Reading the texts and annotating</td>
                      <td className="py-3">10&ndash;15 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Section A: Reading questions</td>
                      <td className="py-3">45&ndash;50 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Section B: Shorter writing task</td>
                      <td className="py-3">20&ndash;25 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Section B: Longer writing task</td>
                      <td className="py-3">30&ndash;35 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Proofreading</td>
                      <td className="py-3">5 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Common mistakes */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Common Mistakes to Avoid
              </h3>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>
                  <strong>Feature-spotting without analysis</strong> &mdash;
                  naming a technique without explaining its effect will not
                  earn high marks. Always explain the &ldquo;so what?&rdquo;.
                </li>
                <li>
                  <strong>Retelling the text</strong> &mdash; paraphrasing
                  what the writer says rather than analysing how and why they
                  say it.
                </li>
                <li>
                  <strong>Ignoring the form conventions</strong> &mdash; if the
                  question asks for a letter, your response must look like a
                  letter with appropriate openings, closings, and register.
                </li>
                <li>
                  <strong>Writing one-sided arguments</strong> &mdash; top-band
                  answers acknowledge counter-arguments before rebutting them.
                </li>
                <li>
                  <strong>Poor time management</strong> &mdash; spending too
                  long on Section A and rushing Section B, or vice versa.
                </li>
                <li>
                  <strong>Weak openings and endings</strong> &mdash; your first
                  and last paragraphs leave the strongest impression on the
                  examiner.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
