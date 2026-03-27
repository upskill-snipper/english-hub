import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/ocr/writing-skills' },
  title: "OCR Writing Skills Guide | The English Hub",
  description:
    "OCR-specific writing guidance for GCSE English Language. Master transactional writing, creative writing, SPaG, and learn how to hit the top band.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRWritingSkillsPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-language/ocr"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; OCR English Language
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Writing Skills
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            OCR-specific guidance for both transactional and creative writing.
            Learn what examiners are looking for and how to hit the top band.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Understanding the mark scheme */}
        <section aria-labelledby="markscheme-heading">
          <h2
            id="markscheme-heading"
            className="text-2xl font-bold text-foreground"
          >
            Understanding the OCR Writing Mark Scheme
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              OCR assesses writing through two assessment objectives. Both are
              assessed in Paper 1 (transactional writing) and Paper 2
              (creative writing):
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">AO5: Content and Organisation</h3>
                <p className="mt-2 text-sm">
                  Communicate clearly, effectively, and imaginatively,
                  selecting and adapting tone, style, and register for
                  different forms, purposes, and audiences. Organise
                  information and ideas using structural and grammatical
                  features to support coherence and cohesion.
                </p>
                <p className="mt-2 text-sm font-medium text-accent">
                  Typically 24 marks per task
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">AO6: Technical Accuracy</h3>
                <p className="mt-2 text-sm">
                  Use a range of vocabulary and sentence structures for
                  clarity, purpose, and effect, with accurate spelling and
                  punctuation.
                </p>
                <p className="mt-2 text-sm font-medium text-accent">
                  Typically 16 marks per task
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Top band descriptors */}
        <section aria-labelledby="topband-heading">
          <h2
            id="topband-heading"
            className="text-2xl font-bold text-foreground"
          >
            What Does a Top-Band Response Look Like?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Understanding the top-band descriptors tells you exactly what
              the examiner is rewarding. Here is what separates a grade
              8&ndash;9 response:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-success/30 bg-success-50 p-5">
                <h3 className="font-semibold text-success-700">Top Band &mdash; AO5</h3>
                <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Communication is convincing and compelling throughout</li>
                  <li>Tone, style, and register are assuredly matched to purpose, form, and audience</li>
                  <li>Extensive and ambitious vocabulary with sustained crafting of linguistic devices</li>
                  <li>Writing is highly engaging with a range of connected ideas</li>
                  <li>Fluent use of varied structural features: paragraphing, discourse markers, cohesive devices</li>
                  <li>Ideas are shaped and developed with originality and flair</li>
                </ul>
              </div>

              <div className="rounded-lg border border-success/30 bg-success-50 p-5">
                <h3 className="font-semibold text-success-700">Top Band &mdash; AO6</h3>
                <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Sentence demarcation is consistently secure and accurate</li>
                  <li>Wide range of punctuation used with a high level of accuracy</li>
                  <li>Full range of sentence forms used for effect</li>
                  <li>Standard English is consistently used correctly</li>
                  <li>Extensive and ambitious vocabulary is used with accuracy</li>
                  <li>Spelling (including complex and irregular words) is highly accurate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Transactional Writing ──────────────────────────── */}
        <section aria-labelledby="transactional-heading">
          <h2
            id="transactional-heading"
            className="text-2xl font-bold text-foreground"
          >
            Transactional Writing (Paper 1, Section B)
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Transactional writing means writing for a real-world purpose and
              audience. You are communicating ideas, information, or a
              viewpoint in a specific form. The key to success is matching
              your writing precisely to the task requirements.
            </p>

            {/* Planning */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Planning Your Response (5 Minutes)
              </h3>
              <p className="mt-2">
                Spend five minutes planning before you write. A planned
                response is always better structured and more convincing.
              </p>
              <ol className="ml-6 mt-3 list-decimal space-y-2">
                <li>
                  <strong>Identify PAF</strong> &mdash; Circle or underline the
                  Purpose, Audience, and Form in the question.
                </li>
                <li>
                  <strong>Brainstorm ideas</strong> &mdash; Write down
                  5&ndash;6 key points or arguments you want to make.
                </li>
                <li>
                  <strong>Order your points</strong> &mdash; Decide on the most
                  logical or impactful order. Consider starting with your
                  second-strongest point and ending with your strongest.
                </li>
                <li>
                  <strong>Plan your opening and closing</strong> &mdash; These
                  are the most important parts. Your opening must hook the
                  reader; your closing must leave a lasting impression.
                </li>
              </ol>
            </div>

            {/* Openings */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Crafting Powerful Openings
              </h3>
              <p className="mt-2">
                Your opening paragraph sets the tone for the entire response.
                Here are six strategies for compelling openings:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-foreground">1. Bold statement</p>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &ldquo;Social media is the defining crisis of our
                    generation &mdash; and we are sleepwalking into disaster.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-foreground">2. Rhetorical question</p>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &ldquo;When was the last time you looked up from your phone
                    and truly noticed the world around you?&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-foreground">3. Anecdote</p>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &ldquo;Last Tuesday, I watched a group of teenagers sitting
                    together in a cafe. Not one of them spoke. Every face was
                    lit by a screen.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-foreground">4. Shocking statistic</p>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &ldquo;According to recent research, the average teenager
                    spends seven hours a day on their phone. Seven hours.
                    Almost a full working day.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-foreground">5. Contrast</p>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &ldquo;Fifty years ago, children played in the streets
                    until dark. Today, they sit in their bedrooms, scrolling
                    through a digital world that promises connection but
                    delivers isolation.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-foreground">6. Direct address</p>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &ldquo;Imagine waking up tomorrow and your phone has
                    disappeared. No notifications. No messages. No feed to
                    scroll. How would you feel?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraphing */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Effective Paragraphing
              </h3>
              <p className="mt-2">
                Strong paragraphing is essential for AO5. Each paragraph
                should:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>
                  <strong>Begin with a clear topic sentence</strong> that
                  introduces the main idea of the paragraph.
                </li>
                <li>
                  <strong>Develop the idea</strong> with evidence, examples,
                  explanation, or elaboration.
                </li>
                <li>
                  <strong>Link to the next paragraph</strong> using discourse
                  markers or thematic connections.
                </li>
              </ul>
              <p className="mt-3">
                Use a range of discourse markers to signal transitions:
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Adding</p>
                  <p className="mt-1 text-sm">Furthermore, Moreover, In addition, Similarly</p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Contrasting</p>
                  <p className="mt-1 text-sm">However, Conversely, On the other hand, Nevertheless</p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Cause/effect</p>
                  <p className="mt-1 text-sm">Consequently, Therefore, As a result, Thus</p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Concluding</p>
                  <p className="mt-1 text-sm">Ultimately, In conclusion, Above all, To summarise</p>
                </div>
              </div>
            </div>

            {/* Counter-arguments */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Handling Counter-Arguments
              </h3>
              <p className="mt-2">
                Top-band argumentative writing always addresses the opposing
                view. This shows maturity, balance, and sophistication. Use
                this structure:
              </p>
              <ol className="ml-6 mt-3 list-decimal space-y-2">
                <li>
                  <strong>Acknowledge</strong> the counter-argument fairly:
                  &ldquo;Admittedly, some would argue that&hellip;&rdquo;
                </li>
                <li>
                  <strong>Concede</strong> a partial point if appropriate:
                  &ldquo;While there is some merit in this view&hellip;&rdquo;
                </li>
                <li>
                  <strong>Rebut</strong> with a stronger argument:
                  &ldquo;However, this fails to account for&hellip;&rdquo;
                </li>
              </ol>
              <div className="mt-3 rounded border border-accent/20 bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Example counter-argument paragraph</p>
                <p className="mt-2 text-sm italic text-primary">
                  &ldquo;Of course, some would argue that technology has
                  enhanced communication, allowing us to stay connected with
                  loved ones across the globe. There is undeniable truth in
                  this. However, what we have gained in quantity of
                  communication, we have lost in quality. A quick text message
                  will never replicate the warmth of a face-to-face
                  conversation, the nuance of a handwritten letter, or the
                  simple joy of sitting together in comfortable silence.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Creative Writing ───────────────────────────────── */}
        <section aria-labelledby="creative-heading">
          <h2
            id="creative-heading"
            className="text-2xl font-bold text-foreground"
          >
            Creative Writing (Paper 2, Section B)
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Creative writing on Paper 2 tests your ability to write
              imaginatively. The examiner is looking for crafted, deliberate
              writing that demonstrates control over language, structure, and
              tone.
            </p>

            {/* Show don't tell */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Show, Don&rsquo;t Tell
              </h3>
              <p className="mt-2">
                The single most important principle in creative writing.
                Instead of telling the reader what a character feels or what a
                place is like, show them through action, dialogue, sensory
                detail, and body language.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-warn/30 bg-warn-50 p-4">
                  <p className="text-sm font-semibold text-warn-700">Telling (weak)</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;She was really scared.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-success/30 bg-success-50 p-4">
                  <p className="text-sm font-semibold text-success-700">Showing (strong)</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;Her fingers tightened around the banister, knuckles
                    white. Each creak of the staircase sent her heart lurching
                    into her throat.&rdquo;
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-warn/30 bg-warn-50 p-4">
                  <p className="text-sm font-semibold text-warn-700">Telling (weak)</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The house was old and neglected.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-success/30 bg-success-50 p-4">
                  <p className="text-sm font-semibold text-success-700">Showing (strong)</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;Paint peeled from the window frames like sunburnt
                    skin. The garden gate hung from a single hinge, swaying in
                    the wind with a rhythmic, mournful creak.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Vocabulary */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Ambitious Vocabulary
              </h3>
              <p className="mt-2">
                Top-band writing uses precise, vivid vocabulary. Replace
                generic words with specific alternatives:
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary/20 text-left">
                      <th className="py-3 pr-4 font-semibold text-foreground">Generic</th>
                      <th className="py-3 font-semibold text-foreground">Precise Alternatives</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 pr-4">Walked</td>
                      <td className="py-3">Trudged, ambled, strode, shuffled, marched, sauntered, crept</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Said</td>
                      <td className="py-3">Murmured, exclaimed, whispered, snapped, muttered, announced, stammered</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Happy</td>
                      <td className="py-3">Elated, jubilant, content, euphoric, radiant, buoyant</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Sad</td>
                      <td className="py-3">Melancholy, despondent, forlorn, wistful, desolate, bereft</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Big</td>
                      <td className="py-3">Vast, immense, towering, sprawling, colossal, cavernous</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Small</td>
                      <td className="py-3">Cramped, diminutive, compact, minute, modest, poky</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Looked</td>
                      <td className="py-3">Glanced, peered, scrutinised, gazed, surveyed, squinted</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Nice</td>
                      <td className="py-3">Delightful, charming, agreeable, idyllic, welcoming, inviting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded border border-accent/20 bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Important note</p>
                <p className="mt-1 text-sm text-primary">
                  Ambitious vocabulary must be used accurately. Using a
                  complex word incorrectly is worse than using a simple word
                  correctly. Only use words you are confident about.
                </p>
              </div>
            </div>

            {/* Sentence variety */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Sentence Variety for Effect
              </h3>
              <p className="mt-2">
                Varying your sentence structures is one of the quickest ways
                to improve your writing. Here are techniques to practise:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Start with an adverbial</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;Cautiously, she pushed open the door.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fronted adverbials add variety and can set the tone for the
                    sentence.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Start with a present participle (-ing)</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;Gripping the railing, he leaned over the edge.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Creates a sense of simultaneous action and adds fluency.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Use a subordinate clause first</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;Although the sun was shining, the air carried a
                    bitter chill.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Creates contrast and sophistication within a single
                    sentence.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Use a one-word or short sentence for impact</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;Silence.&rdquo; / &ldquo;She ran.&rdquo; /
                    &ldquo;Nothing.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    After a long, descriptive sentence, a sudden short sentence
                    creates dramatic impact.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Use a colon to extend or explain</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;There was only one thing left to do: run.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A colon creates anticipation and delivers a punch at the
                    end of the sentence.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Use a semicolon to link related ideas</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    &ldquo;The house was empty; the silence confirmed what she
                    already knew.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Demonstrates sophisticated punctuation and creates a
                    balanced, connected pair of clauses.
                  </p>
                </div>
              </div>
            </div>

            {/* Punctuation guide */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Punctuation for Effect
              </h3>
              <p className="mt-2">
                Accurate, varied punctuation is essential for AO6. Here is how
                to use each mark correctly:
              </p>
              <div className="mt-3 space-y-3">
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-medium text-foreground">Semicolon ( ; )</p>
                  <p className="mt-1 text-sm">
                    Links two closely related independent clauses. Both sides
                    must be complete sentences. &ldquo;The rain fell
                    relentlessly; the streets were rivers within minutes.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-medium text-foreground">Colon ( : )</p>
                  <p className="mt-1 text-sm">
                    Introduces an explanation, list, or elaboration of the
                    preceding clause. &ldquo;She had one rule: never look
                    back.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-medium text-foreground">Dash ( &mdash; )</p>
                  <p className="mt-1 text-sm">
                    Creates a dramatic pause, interruption, or afterthought.
                    Can be used in pairs for parenthetical information.
                    &ldquo;The door opened &mdash; and there she stood.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-medium text-foreground">Ellipsis ( &hellip; )</p>
                  <p className="mt-1 text-sm">
                    Suggests trailing off, hesitation, or the passage of time.
                    &ldquo;She wanted to say something, but&hellip;&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-medium text-foreground">Exclamation mark ( ! )</p>
                  <p className="mt-1 text-sm">
                    Use sparingly. One well-placed exclamation mark is
                    effective; five in a paragraph is not. Reserve for genuine
                    surprise, urgency, or emotion.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-medium text-foreground">Brackets / parentheses ( )</p>
                  <p className="mt-1 text-sm">
                    Used for additional information, asides, or clarification.
                    Can create an informal, conversational tone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Proofreading ───────────────────────────────────── */}
        <section aria-labelledby="proofread-heading">
          <h2
            id="proofread-heading"
            className="text-2xl font-bold text-foreground"
          >
            Proofreading Checklist
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Always leave 3&ndash;5 minutes at the end of each writing task
              to proofread. Check for the following:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Every sentence ends with a full stop, question mark, or exclamation mark</li>
              <li>Capital letters at the start of every sentence and for proper nouns</li>
              <li>Apostrophes used correctly for possession (the dog&rsquo;s lead) and contraction (don&rsquo;t)</li>
              <li>Commas used correctly (not comma splices &mdash; two full sentences joined only by a comma)</li>
              <li>Homophones: their/there/they&rsquo;re, your/you&rsquo;re, its/it&rsquo;s, to/too/two, where/were/we&rsquo;re</li>
              <li>Subject-verb agreement: &ldquo;The group of students <em>was</em>&rdquo; not &ldquo;were&rdquo;</li>
              <li>Tense consistency: don&rsquo;t switch between past and present unintentionally</li>
              <li>Paragraphs are clearly separated</li>
              <li>Form conventions are correct (e.g., letter has &ldquo;Yours sincerely&rdquo;)</li>
            </ul>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
