"use client";

import Link from "next/link";
import { useState } from "react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-foreground hover:bg-muted transition-colors"
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-6 py-6 text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Paper2Page() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/20">
            AQA GCSE English Language &middot; 8700/2
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: Writers&rsquo; Viewpoints and Perspectives
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            1 hour 45 minutes &middot; 80 marks &middot; 50% of the GCSE
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/english-language/aqa" className="hover:text-primary transition-colors">
              AQA English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">Paper 2</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">

        {/* Overview */}
        <div className="rounded-xl border border-primary/20 bg-primary/10/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">Paper overview</h2>
          <p className="mt-3 text-muted-foreground">
            Paper 2 tests your ability to <strong>read and compare</strong> two
            non-fiction texts (one from the 19th century and one from the 21st
            century, or one from the 20th century and one from the 21st century)
            and to produce a piece of <strong>transactional/persuasive writing</strong>.
            The texts will be linked by theme.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-4">
              <h3 className="font-bold text-primary">Section A: Reading</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                4 questions on two linked non-fiction texts &middot; 40 marks &middot;
                recommended 1 hour
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-card p-4">
              <h3 className="font-bold text-primary">Section B: Writing</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1 question: persuasive / argumentative writing &middot; 40 marks &middot;
                recommended 45 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Timing */}
        <Section title="Recommended timing strategy" defaultOpen>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Task</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 pr-4">Read both texts carefully</td><td className="py-2 pr-4">-</td><td className="py-2 pr-4">10-15 mins</td></tr>
                <tr><td className="py-2 pr-4">Question 1 (true/false)</td><td className="py-2 pr-4">4</td><td className="py-2 pr-4">5 mins</td></tr>
                <tr><td className="py-2 pr-4">Question 2 (summary/synthesis)</td><td className="py-2 pr-4">8</td><td className="py-2 pr-4">8-10 mins</td></tr>
                <tr><td className="py-2 pr-4">Question 3 (language analysis)</td><td className="py-2 pr-4">12</td><td className="py-2 pr-4">12-15 mins</td></tr>
                <tr><td className="py-2 pr-4">Question 4 (comparison)</td><td className="py-2 pr-4">16</td><td className="py-2 pr-4">18-20 mins</td></tr>
                <tr><td className="py-2 pr-4">Question 5 (writing)</td><td className="py-2 pr-4">40</td><td className="py-2 pr-4">45 mins</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Q1 */}
        <Section title="Question 1: Choose four true statements (4 marks)">
          <h3 className="font-bold text-primary">What the question asks</h3>
          <p>
            You are given eight statements about <strong>Source A</strong> (one of the
            two texts, usually the 21st-century one). You must shade the boxes
            next to the <strong>four</strong> statements that are true according
            to the text.
          </p>

          <h3 className="mt-4 font-bold text-primary">How to answer</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Read the specified section of the text carefully before looking at the statements.</li>
            <li>Go through each statement one at a time and check it against the text. Be precise &mdash; a statement might be <em>almost</em> true but contain a subtle inaccuracy.</li>
            <li>If you shade more than four boxes, you will receive zero marks. Make sure you only select exactly four.</li>
            <li>This is the easiest question on the paper. Do not overthink it, but do not rush through it carelessly either.</li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">Common traps</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Statements that are true in general but not supported by the text.</li>
            <li>Statements that change a small detail (e.g., &ldquo;three children&rdquo; when the text says &ldquo;two children&rdquo;).</li>
            <li>Statements that go beyond what the text actually says &mdash; they add an interpretation that is not in the source.</li>
          </ul>
        </Section>

        {/* Q2 */}
        <Section title="Question 2: Summary and synthesis (8 marks)">
          <h3 className="font-bold text-primary">What the question asks</h3>
          <p>
            You must write a <strong>summary</strong> of the differences (or
            similarities) between the two sources on a given topic. For example:
            &ldquo;Use details from both sources. Write a summary of the
            differences between the children&rsquo;s experiences of school.&rdquo;
          </p>
          <p className="mt-2">
            This assesses <strong>AO1</strong>: Identify and interpret explicit
            and implicit information and ideas. Select and synthesise evidence
            from different texts.
          </p>

          <h3 className="mt-4 font-bold text-primary">Mark scheme summary</h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 pr-4 font-semibold">Level 4</td><td className="py-2 pr-4">7-8</td><td className="py-2 pr-4">Perceptive synthesis and interpretation of both sources. Judicious references.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 3</td><td className="py-2 pr-4">5-6</td><td className="py-2 pr-4">Clear synthesis and interpretation. Relevant references from both sources.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 2</td><td className="py-2 pr-4">3-4</td><td className="py-2 pr-4">Some ability to link ideas between sources. Some appropriate references.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 1</td><td className="py-2 pr-4">1-2</td><td className="py-2 pr-4">Simple, limited cross-reference of ideas. Simple references.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">How to structure your answer</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Write <strong>3-4 comparative points</strong>. Each point should
              reference <em>both</em> sources.
            </li>
            <li>
              Use connectives of comparison: &ldquo;In contrast,&rdquo;
              &ldquo;Similarly,&rdquo; &ldquo;Whereas,&rdquo; &ldquo;On the
              other hand,&rdquo; &ldquo;Both writers suggest that&hellip;&rdquo;
            </li>
            <li>
              <strong>Infer, do not just describe.</strong> The difference
              between Level 2 and Level 4 is inference. Do not just say what
              each text says; explain what this <em>suggests</em> about the
              writers&rsquo; experiences or attitudes.
            </li>
            <li>
              You do not need to analyse language here &mdash; that is Q3. Focus
              on <strong>what</strong> is said, not <strong>how</strong> it is
              said.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">Example paragraph</h3>
          <div className="rounded-lg bg-muted p-4 text-sm">
            <p>
              Both writers present differing attitudes to city life. In Source A,
              the writer describes London as &ldquo;suffocating&rdquo; and
              recalls feeling &ldquo;trapped by the noise and the crowds,&rdquo;
              suggesting that urban living was an oppressive, overwhelming
              experience. In contrast, the writer of Source B celebrates the
              &ldquo;electric energy&rdquo; of the city and explains that
              &ldquo;every corner offered a new possibility,&rdquo; implying
              that the city represented opportunity and excitement rather than
              confinement.
            </p>
          </div>
        </Section>

        {/* Q3 */}
        <Section title="Question 3: How does the writer use language...? (12 marks)">
          <h3 className="font-bold text-primary">What the question asks</h3>
          <p>
            This is similar to Paper 1 Question 2, but it is worth{" "}
            <strong>12 marks</strong> (not 8) and focuses on{" "}
            <strong>one source only</strong> (usually Source B, the older text).
            You are asked how the writer uses language to achieve a specific
            effect (e.g., to describe a place, to convey their feelings).
          </p>
          <p className="mt-2">
            This assesses <strong>AO2</strong>: Explain, comment on and analyse
            how writers use language and structure to achieve effects and
            influence readers.
          </p>

          <h3 className="mt-4 font-bold text-primary">Mark scheme summary</h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 pr-4 font-semibold">Level 4</td><td className="py-2 pr-4">10-12</td><td className="py-2 pr-4">Perceptive, detailed analysis. Analyses effects of writer&rsquo;s language choices. Judicious examples. Sophisticated, accurate subject terminology.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 3</td><td className="py-2 pr-4">7-9</td><td className="py-2 pr-4">Clear, relevant explanation. Clearly explains effects. Relevant examples. Accurate subject terminology.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 2</td><td className="py-2 pr-4">4-6</td><td className="py-2 pr-4">Some understanding. Attempts to comment on effect. Some appropriate examples. Some subject terminology.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 1</td><td className="py-2 pr-4">1-3</td><td className="py-2 pr-4">Simple, limited comment. Simple references. Simple subject terminology.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">How to answer</h3>
          <p>
            Use the same <strong>What &rarr; How &rarr; Why</strong> approach as
            Paper 1 Q2. Aim for <strong>4-5 well-developed analytical points</strong>.
          </p>
          <ul className="ml-5 list-disc space-y-2 mt-2">
            <li>Embed short quotations into your sentences rather than quoting large blocks of text.</li>
            <li>Zoom in on specific word choices and explore their connotations.</li>
            <li>Name techniques accurately &mdash; but only when you can explain their effect.</li>
            <li>
              Because the text is often from the 19th century, you may encounter
              unfamiliar vocabulary. Use context clues to work out meaning, and
              comment on how the formality or archaic quality of the language
              contributes to the tone.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">Dealing with 19th-century texts</h3>
          <p>
            Many students find the older source more challenging. Here are some tips:
          </p>
          <ul className="ml-5 list-disc space-y-2 mt-2">
            <li>Do not panic if you do not understand every word. Focus on the words and phrases you <em>can</em> analyse.</li>
            <li>Look for rhetorical devices common in Victorian non-fiction: tricolon (lists of three), direct address, emotive language, religious references, appeals to morality.</li>
            <li>Consider the social and historical context. A 19th-century text about poverty, for example, was written in a society with very different attitudes to social welfare.</li>
            <li>Comment on the formality of the register and what this tells us about the writer&rsquo;s purpose and intended audience.</li>
          </ul>
        </Section>

        {/* Q4 */}
        <Section title="Question 4: Compare how the two writers convey their perspectives (16 marks)">
          <h3 className="font-bold text-primary">What the question asks</h3>
          <p>
            You must compare the <strong>methods</strong> (language and
            structural techniques) that the two writers use to convey their
            viewpoints or perspectives on a shared topic. You need to refer to
            both sources and comment on both <strong>similarities and
            differences</strong>.
          </p>
          <p className="mt-2">
            This assesses <strong>AO3</strong>: Compare writers&rsquo; ideas and
            perspectives, as well as how these are conveyed, across two or more
            texts.
          </p>

          <h3 className="mt-4 font-bold text-primary">Mark scheme summary</h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 pr-4 font-semibold">Level 4</td><td className="py-2 pr-4">13-16</td><td className="py-2 pr-4">Perceptive understanding of both writers&rsquo; viewpoints. Detailed, perceptive analysis of how methods are used. Perceptive comparison. Judicious references from both texts.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 3</td><td className="py-2 pr-4">9-12</td><td className="py-2 pr-4">Clear understanding of both viewpoints. Clear, relevant analysis of methods. Clear comparison. Relevant references from both texts.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 2</td><td className="py-2 pr-4">5-8</td><td className="py-2 pr-4">Some understanding of viewpoints. Some comment on methods. Some comparison. Some references.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Level 1</td><td className="py-2 pr-4">1-4</td><td className="py-2 pr-4">Simple, limited understanding. Simple identification of methods. Simple, limited comparison. Simple references.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">How to structure your answer</h3>
          <p>
            You can use either an <strong>alternating</strong> or a{" "}
            <strong>block</strong> structure. The alternating structure
            (comparing within each paragraph) is generally more effective:
          </p>

          <div className="mt-3 rounded-lg border border-border p-4">
            <h4 className="font-bold text-accent">Alternating structure (recommended)</h4>
            <p className="mt-2 text-sm">
              Each paragraph discusses a shared point of comparison, referring
              to both sources:
            </p>
            <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
              <li>Point about viewpoint/perspective &rarr; Source A evidence + method analysis &rarr; Link to Source B with comparison connective &rarr; Source B evidence + method analysis &rarr; Comment on overall effect of the difference/similarity</li>
            </ul>
          </div>

          <h3 className="mt-4 font-bold text-primary">Comparison connectives</h3>
          <div className="grid gap-4 mt-2 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-sm text-muted-foreground">For similarities:</p>
              <p className="mt-1 text-sm">Similarly, Likewise, In the same way, Both writers, Equally, This is echoed by</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-muted-foreground">For differences:</p>
              <p className="mt-1 text-sm">In contrast, However, Whereas, On the other hand, Conversely, Unlike Source A</p>
            </div>
          </div>

          <h3 className="mt-4 font-bold text-primary">Critical difference from Q2</h3>
          <p>
            Q2 asks you to compare <strong>what</strong> the writers say
            (content/ideas). Q4 asks you to compare <strong>how</strong> they
            say it (methods/techniques). In Q4 you must analyse language,
            structure, and tone, not simply summarise the content.
          </p>

          <h3 className="mt-4 font-bold text-primary">Common mistakes</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Writing about each source separately without making direct comparisons.</li>
            <li>Summarising content instead of analysing methods.</li>
            <li>Only comparing one aspect (e.g., only language) and ignoring structure, tone, and purpose.</li>
            <li>Spending too long on this and not leaving enough time for Q5.</li>
          </ul>
        </Section>

        {/* Q5 */}
        <Section title="Question 5: Persuasive / argumentative writing (40 marks)">
          <h3 className="font-bold text-primary">What the question asks</h3>
          <p>
            You are given a statement related to the theme of the reading texts
            and asked to write your own text expressing your viewpoint. The task
            will specify a <strong>form</strong> (e.g., article, letter, speech,
            essay, leaflet) and a <strong>purpose</strong> (e.g., to argue, to
            persuade, to advise).
          </p>
          <p className="mt-2">
            This assesses <strong>AO5</strong> (24 marks: content and
            organisation) and <strong>AO6</strong> (16 marks: technical
            accuracy). The mark scheme is the same as Paper 1 Q5 but the
            writing genre is different.
          </p>

          <h3 className="mt-4 font-bold text-primary">Understanding different forms</h3>
          <div className="space-y-3 mt-2">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Article (newspaper/magazine)</h4>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>Include a headline (can be witty, provocative, or informative)</li>
                <li>Optional subheading or strapline</li>
                <li>Engaging opening that hooks the reader</li>
                <li>Can use a slightly more informal, journalistic tone</li>
                <li>Paragraphs tend to be shorter than in an essay</li>
                <li>May address the reader directly</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Letter (formal)</h4>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>Include addresses (top right: yours; below left: recipient&rsquo;s) and date</li>
                <li>&ldquo;Dear Sir/Madam&rdquo; or &ldquo;Dear [Name]&rdquo;</li>
                <li>&ldquo;Yours faithfully&rdquo; (if you used Sir/Madam) or &ldquo;Yours sincerely&rdquo; (if you used a name)</li>
                <li>Formal register throughout</li>
                <li>State the purpose of your letter in the opening paragraph</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Speech</h4>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>Address the audience directly: &ldquo;Ladies and gentlemen,&rdquo; or &ldquo;Fellow students,&rdquo;</li>
                <li>Use rhetorical questions, tricolon, and direct address throughout</li>
                <li>Consider the spoken quality: vary sentence length, use pauses (short sentences/paragraphs), build to a powerful conclusion</li>
                <li>End with a call to action or a memorable final statement</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Essay</h4>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>Formal, measured tone</li>
                <li>Clear introduction stating your position</li>
                <li>Well-developed paragraphs with topic sentences</li>
                <li>Consider and counter opposing arguments</li>
                <li>Conclusion that summarises and reinforces your main argument</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-4 font-bold text-primary">Persuasive techniques to use</h3>
          <p>
            You should aim to use a range of rhetorical and persuasive
            techniques. Here are the key ones, with the mnemonic{" "}
            <strong>AFOREST</strong> plus additional devices:
          </p>
          <ul className="ml-5 list-disc space-y-2 mt-2">
            <li><strong>A &mdash; Alliteration:</strong> &ldquo;Dangerous, destructive, and deeply damaging.&rdquo;</li>
            <li><strong>F &mdash; Facts (or statistics):</strong> &ldquo;According to recent research, 73% of teenagers report feeling stressed about exams.&rdquo; (You can make these up in the exam.)</li>
            <li><strong>O &mdash; Opinions (presented as facts):</strong> &ldquo;It is undeniable that&hellip;&rdquo;</li>
            <li><strong>R &mdash; Rhetorical questions:</strong> &ldquo;How can we, as a society, continue to ignore this?&rdquo;</li>
            <li><strong>E &mdash; Emotive language:</strong> &ldquo;Innocent children are being failed by a system that has abandoned them.&rdquo;</li>
            <li><strong>S &mdash; Statistics:</strong> See Facts above.</li>
            <li><strong>T &mdash; Tricolon (rule of three):</strong> &ldquo;We need action, accountability, and ambition.&rdquo;</li>
            <li><strong>Anecdote:</strong> A brief personal story to make your argument relatable.</li>
            <li><strong>Direct address:</strong> &ldquo;You know this is wrong.&rdquo;</li>
            <li><strong>Counter-argument:</strong> &ldquo;Some may argue that&hellip; However,&hellip;&rdquo;</li>
            <li><strong>Hyperbole:</strong> Deliberate exaggeration for emphasis.</li>
            <li><strong>Imperative verbs:</strong> &ldquo;Consider this.&rdquo; &ldquo;Imagine a world where&hellip;&rdquo;</li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">Planning your response (5 minutes)</h3>
          <ol className="ml-5 list-decimal space-y-2 mt-2">
            <li>Decide your viewpoint &mdash; you must take a clear position.</li>
            <li>Plan 4-5 paragraphs, each with a distinct argument or point.</li>
            <li>Note the form and adapt your tone, layout, and register accordingly.</li>
            <li>Plan a strong opening (hook) and a powerful conclusion (call to action or memorable statement).</li>
            <li>Think about one counter-argument you can acknowledge and refute.</li>
          </ol>

          <h3 className="mt-4 font-bold text-primary">Example opening (article, Grade 8-9)</h3>
          <div className="rounded-lg bg-muted p-4 text-sm">
            <p className="font-bold text-foreground">
              Screen time is rotting our children&rsquo;s brains &mdash; and we are
              handing them the device
            </p>
            <p className="mt-2 italic">
              Picture this: a family sitting around the dinner table. Nobody is
              talking. Four faces, four screens, four separate worlds colliding
              in silence. Sound familiar? If it does, you are not alone &mdash;
              and that, frankly, is the problem. We have sleepwalked into a
              digital dependency so profound that the average British teenager
              now spends more time staring at a phone than they spend in the
              classroom. The question is no longer whether screen time is
              harmful. The question is whether we have the courage to do
              anything about it.
            </p>
          </div>

          <h3 className="mt-4 font-bold text-primary">Common mistakes</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Ignoring the form. If the question says &ldquo;Write a speech,&rdquo; your response must read like a speech, with direct address and rhetorical features.</li>
            <li>Not taking a clear position. Sitting on the fence earns fewer marks than a well-argued viewpoint.</li>
            <li>Overusing one technique (e.g., rhetorical questions in every paragraph).</li>
            <li>Forgetting technical accuracy. AO6 is worth 16 marks &mdash; proofread carefully.</li>
            <li>Not planning, which leads to repetitive or disorganised arguments.</li>
          </ul>
        </Section>

        {/* Key differences from Paper 1 */}
        <Section title="Key differences between Paper 1 and Paper 2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Feature</th>
                  <th className="py-2 pr-4">Paper 1</th>
                  <th className="py-2 pr-4">Paper 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 pr-4 font-semibold">Text type</td><td className="py-2 pr-4">Fiction (literary prose)</td><td className="py-2 pr-4">Non-fiction (articles, letters, speeches, essays, journals)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Number of texts</td><td className="py-2 pr-4">One</td><td className="py-2 pr-4">Two (linked by theme)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Period</td><td className="py-2 pr-4">Post-1900</td><td className="py-2 pr-4">One 19th century + one 20th/21st century</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Writing task</td><td className="py-2 pr-4">Descriptive or narrative</td><td className="py-2 pr-4">Persuasive, argumentative, or advisory (in a specified form)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Comparison</td><td className="py-2 pr-4">Not required</td><td className="py-2 pr-4">Required in Q2 and Q4</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Structure question</td><td className="py-2 pr-4">Q3 (8 marks)</td><td className="py-2 pr-4">No separate structure question</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">Evaluation question</td><td className="py-2 pr-4">Q4 (20 marks)</td><td className="py-2 pr-4">No separate evaluation question</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/aqa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to AQA English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
