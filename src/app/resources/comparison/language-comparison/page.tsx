import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/comparison/language-comparison' },
  title: "Language Paper 2 Comparison Guide | The English Hub",
  description:
    "Master Language Paper 2 comparison skills for GCSE and IGCSE English. How to compare writers' methods across two non-fiction texts with annotated example responses and key comparison phrases.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-primary/10 px-1 py-0.5 text-foreground border-b-2 border-dashed border-primary/40">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-primary px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[primary]" />
      </span>
    </span>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-primary/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── TOC data ───────────────────────────────────────────────── */

const TOC = [
  { id: "how-to-compare", label: "How to Compare Methods" },
  { id: "structure", label: "Response Structure" },
  { id: "example-response", label: "Annotated Example" },
  { id: "key-phrases", label: "Key Comparison Phrases" },
];

/* ─── Key phrases data ───────────────────────────────────────── */

const PHRASE_CATEGORIES = [
  {
    heading: "Introducing a Comparison",
    colour: "border-primary/30 bg-primary/5",
    phrases: [
      "Both writers...",
      "Both sources present...",
      "The two writers share...",
      "Each writer approaches...",
      "Writer A and Writer B both...",
    ],
  },
  {
    heading: "Highlighting Similarities",
    colour: "border-[success]/30 bg-success/5",
    phrases: [
      "Similarly, Source B...",
      "In the same way, the writer of Source B...",
      "This idea is echoed in Source B, where...",
      "Like Source A, Source B also...",
      "Both writers employ... to...",
      "This mirrors Source A's use of...",
      "Equally, the writer of Source B...",
    ],
  },
  {
    heading: "Highlighting Differences",
    colour: "border-destructive/30 bg-destructive/5",
    phrases: [
      "However, Source B takes a different approach...",
      "In contrast to Source A, the writer of Source B...",
      "Whereas Source A uses..., Source B instead...",
      "While both writers address..., their methods differ significantly.",
      "Unlike Source A, Source B...",
      "Conversely, the writer of Source B...",
      "Where Source A relies on..., Source B opts for...",
      "The tone shifts markedly in Source B, where...",
    ],
  },
  {
    heading: "Analysing Methods",
    colour: "border-secondary/30 bg-secondary/5",
    phrases: [
      "The writer uses... to convey...",
      "Through the use of..., the writer creates...",
      "The effect of this is to...",
      "This technique serves to...",
      "The writer's choice of... suggests...",
      "By employing..., the writer positions the reader to...",
      "The deliberate use of... functions to...",
    ],
  },
  {
    heading: "Evaluating Impact",
    colour: "border-accent/30 bg-accent/5",
    phrases: [
      "Perhaps the most striking difference is...",
      "Arguably, Source A is more effective because...",
      "The cumulative effect of these methods is...",
      "What is most compelling about Source B's approach is...",
      "This makes Source A's argument more/less persuasive because...",
      "Ultimately, while both writers..., Source B's approach is more...",
    ],
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function LanguageComparisonPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Comparison Skills
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Language Paper 2 Comparison
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            How to compare writers&rsquo; methods across two non-fiction texts.
            Clear structures, annotated example responses, and key phrases to
            elevate your comparative writing.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/comparison" className="hover:text-foreground transition-colors">Comparison Skills</Link></li>
          <li>/</li>
          <li className="font-medium text-foreground">Language Comparison</li>
        </ol>
      </nav>

      {/* TOC + Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">

          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                On this page
              </p>
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">

            {/* ── How to Compare Methods ──────────────────────── */}
            <Section id="how-to-compare" title="How to Compare Writers' Methods Across Two Texts">
              <p className="text-muted-foreground leading-relaxed">
                Language Paper 2 comparison questions ask you to compare how two writers convey their perspectives on a shared theme. The key word is <strong>methods</strong> -- you must focus on the techniques writers use, not just what they say.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <h3 className="font-bold text-foreground">What Are &ldquo;Writers&rsquo; Methods&rdquo;?</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      { method: "Language choices", example: "Emotive language, figurative language, word connotations, rhetorical devices" },
                      { method: "Tone and register", example: "Formal/informal, sarcastic, passionate, detached, conversational" },
                      { method: "Sentence structures", example: "Short sentences for impact, listing, rhetorical questions, exclamations" },
                      { method: "Structural choices", example: "Opening hooks, paragraph organisation, shift in focus, conclusion strategies" },
                      { method: "Use of evidence", example: "Statistics, anecdotes, expert opinions, examples, case studies" },
                      { method: "Direct address", example: "Second person ('you'), inclusive 'we', commands, personal appeals" },
                    ].map((item) => (
                      <div key={item.method} className="rounded-lg bg-muted p-3">
                        <p className="text-sm font-semibold text-foreground">{item.method}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border-2 border-destructive/30 bg-destructive/5 p-5">
                  <h3 className="font-bold text-destructive">The Most Common Error</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Students often write about what the writers say (their opinions) rather than how they say it (their methods). Compare this:
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="rounded-lg bg-card p-3">
                      <p className="text-sm"><span className="font-bold text-destructive">Weak:</span> &ldquo;Source A thinks school uniforms are good. Source B thinks they are bad.&rdquo;</p>
                    </div>
                    <div className="rounded-lg bg-card p-3">
                      <p className="text-sm"><span className="font-bold text-success">Strong:</span> &ldquo;Source A uses an anecdote to engage the reader&rsquo;s sympathy, whereas Source B relies on statistics to build a logical, evidence-based argument.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* ── Response Structure ──────────────────────────── */}
            <Section id="structure" title="Structure for a Comparison Response">
              <p className="text-muted-foreground leading-relaxed">
                Use this paragraph-by-paragraph structure for a Language Paper 2 comparison question. Aim for 3-4 comparative paragraphs plus a brief introduction and conclusion.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    para: "Introduction",
                    time: "1-2 minutes",
                    detail: "Briefly state the shared topic and signal the key difference in approach. No need for a long introduction -- get straight into comparison.",
                    colour: "bg-primary",
                  },
                  {
                    para: "Paragraph 1",
                    time: "5-6 minutes",
                    detail: "Compare how both writers open their texts. What methods do they use to engage the reader? Do they use a hook, a question, a bold statement, an anecdote? Analyse specific language choices.",
                    colour: "bg-primary",
                  },
                  {
                    para: "Paragraph 2",
                    time: "5-6 minutes",
                    detail: "Compare the writers' use of language and persuasive techniques. Focus on the most significant language difference between the two sources. Use short quotations and name techniques.",
                    colour: "bg-primary",
                  },
                  {
                    para: "Paragraph 3",
                    time: "5-6 minutes",
                    detail: "Compare tone, register, or structural choices. How does each writer's tone contribute to their purpose? Do they shift tone at any point? How do they structure their argument?",
                    colour: "bg-primary",
                  },
                  {
                    para: "Paragraph 4 (if time)",
                    time: "4-5 minutes",
                    detail: "Compare how the writers conclude or use evidence. Do they end with a call to action, a warning, an emotional appeal? This is an opportunity to discuss the overall effect of each text.",
                    colour: "bg-accent",
                  },
                  {
                    para: "Conclusion",
                    time: "1-2 minutes",
                    detail: "A brief evaluative statement: which writer's methods are more effective for the intended audience and purpose? Keep it to 2-3 sentences.",
                    colour: "bg-secondary",
                  },
                ].map((item) => (
                  <div key={item.para} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-md">
                    <div className={`flex h-10 shrink-0 items-center justify-center rounded-lg ${item.colour} px-3 text-xs font-bold text-white`}>
                      {item.time}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.para}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Annotated Example ───────────────────────────── */}
            <Section id="example-response" title="Example Comparison Response with Annotations">
              <div className="rounded-xl border border-border bg-muted p-4 mb-6">
                <p className="text-sm font-semibold text-foreground">Question:</p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  Compare how the writers of Source A and Source B convey their different perspectives on city life.
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Source A:</span> A modern newspaper article arguing that cities are vibrant, exciting places to live.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Source B:</span> A 19th-century letter describing the squalor and misery of industrial London.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border-2 border-primary/30 bg-card p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Model Response</p>

                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <Annotation note="Brief introduction immediately identifying the key contrast in method.">Both writers present strong perspectives on city life, but they employ strikingly different methods to convey their views.</Annotation>{" "}
                    While Source A adopts an enthusiastic, celebratory tone to persuade the reader that cities are thriving cultural hubs, Source B uses vivid, sensory imagery to expose the harsh realities of urban poverty.
                  </p>

                  <p>
                    <Annotation note="Para 1: comparing openings. Names techniques and analyses effects.">Both writers use their openings strategically to establish their perspectives, though their approaches differ markedly.</Annotation>{" "}
                    Source A opens with a rhetorical question -- <Annotation note="Short embedded quotation.">&ldquo;Where else can you find world-class theatre, cutting-edge cuisine, and a community of like-minded dreamers all within a ten-minute walk?&rdquo;</Annotation> -- which immediately positions the reader to agree with the writer&rsquo;s enthusiastic vision of city life. The listing of &ldquo;world-class theatre, cutting-edge cuisine, and a community of like-minded dreamers&rdquo; creates a sense of abundance, and the hyperbolic modifier &ldquo;world-class&rdquo; elevates city life to something exceptional. <Annotation note="Comparative connective transitioning to Source B.">In contrast, Source B opens with a blunt declarative:</Annotation> <Annotation note="Quotation from Source B.">&ldquo;The streets are choked with filth.&rdquo;</Annotation> The verb &ldquo;choked&rdquo; personifies the streets as suffocating, immediately creating a visceral sense of disgust and claustrophobia. Where Source A&rsquo;s opening invites the reader in, Source B&rsquo;s repels -- yet both are equally effective at establishing their contrasting tones.
                  </p>

                  <p>
                    <Annotation note="Para 2: comparing language and persuasive techniques.">The writers also use contrasting language techniques to influence the reader&rsquo;s emotions.</Annotation>{" "}
                    Source A relies heavily on positive semantic fields of energy and opportunity: <Annotation note="Semantic field analysis.">&ldquo;buzzing,&rdquo; &ldquo;pulsing,&rdquo; &ldquo;alive with possibility.&rdquo;</Annotation> These dynamic verbs and noun phrases create an infectious sense of momentum, positioning the city as a living organism brimming with potential. The writer also uses direct address -- &ldquo;you&rsquo;ll never look back&rdquo; -- to create a personal, conversational register that draws the reader into shared excitement. <Annotation note="Transition with 'However'.">However, Source B employs an entirely different semantic field</Annotation> -- one of decay, disease, and suffering. The writer describes <Annotation note="Analysis of Source B's imagery.">&ldquo;wretched figures huddled in doorways, their hollow eyes speaking of hunger and hopelessness.&rdquo;</Annotation> The adjectives &ldquo;wretched&rdquo; and &ldquo;hollow&rdquo; connote emptiness and despair, while the personification of eyes &ldquo;speaking&rdquo; suggests that suffering is so overwhelming it communicates without words. Where Source A&rsquo;s language energises, Source B&rsquo;s language haunts.
                  </p>

                  <p>
                    <Annotation note="Para 3: comparing tone and structure.">Furthermore, the writers&rsquo; tones and structural choices reflect their different purposes and contexts.</Annotation>{" "}
                    Source A maintains a consistently upbeat, persuasive tone throughout, building towards a concluding call to action: &ldquo;Make the move. The city is waiting for you.&rdquo; The imperative &ldquo;Make the move&rdquo; and the personification of the city &ldquo;waiting&rdquo; create urgency and excitement. The short sentences at the end mirror the decisiveness the writer wants the reader to feel. <Annotation note="Contrast with Source B's structure.">Conversely, Source B&rsquo;s tone shifts from disgust to anger to sorrow,</Annotation> reflecting the writer&rsquo;s journey through the city streets. The letter form allows for a personal, confessional register -- &ldquo;I confess I could barely endure the sight&rdquo; -- which creates intimacy and positions the reader as a trusted confidant. This structural progression from observation to emotional response makes Source B feel like a lived experience rather than a polished argument.
                  </p>

                  <p>
                    <Annotation note="Brief evaluative conclusion.">Ultimately, both writers use methods suited to their purpose and audience.</Annotation>{" "}
                    Source A&rsquo;s modern, energetic approach is designed to persuade a contemporary audience to embrace city living, while Source B&rsquo;s raw, emotive account seeks to expose injustice and provoke social change. Arguably, Source B is the more powerful piece of writing: its unflinching honesty and vivid imagery linger in the reader&rsquo;s mind long after reading, whereas Source A&rsquo;s polished enthusiasm, while engaging, feels more superficial by comparison.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-primary/5 p-5">
                <h4 className="font-bold text-foreground">What Makes This Response Effective</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>- Focuses on methods (language, tone, structure) not just opinions</li>
                  <li>- Every paragraph compares both sources directly</li>
                  <li>- Short, embedded quotations analysed for specific effects</li>
                  <li>- Techniques are named precisely (rhetorical question, semantic field, personification, imperative)</li>
                  <li>- Comparative connectives used throughout (&ldquo;In contrast&rdquo;, &ldquo;However&rdquo;, &ldquo;Conversely&rdquo;, &ldquo;Where...&rdquo;)</li>
                  <li>- Evaluative conclusion making a personal judgement</li>
                </ul>
              </div>
            </Section>

            {/* ── Key Phrases ─────────────────────────────────── */}
            <Section id="key-phrases" title="Key Phrases for Comparing Writers' Methods">
              <p className="text-muted-foreground leading-relaxed">
                Use these phrases to signal comparison, analysis, and evaluation throughout your response. Varying your vocabulary will make your writing more sophisticated.
              </p>

              <div className="mt-6 space-y-6">
                {PHRASE_CATEGORIES.map((category) => (
                  <div key={category.heading}>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{category.heading}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.phrases.map((phrase) => (
                        <span
                          key={phrase}
                          className={`rounded-lg border px-3 py-1.5 text-sm font-medium text-muted-foreground ${category.colour}`}
                        >
                          {phrase}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick-reference table */}
              <div className="mt-10">
                <h3 className="mb-4 text-lg font-bold text-foreground">Quick-Reference: Comparison Sentence Starters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-[primary]/20">
                        <th className="py-3 pr-4 text-left font-bold text-foreground">Purpose</th>
                        <th className="py-3 text-left font-bold text-foreground">Sentence Starter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { purpose: "Compare openings", starter: "Both writers open by..., yet Source A uses... whereas Source B..." },
                        { purpose: "Compare language", starter: "While Source A employs [technique] to create [effect], Source B instead uses..." },
                        { purpose: "Compare tone", starter: "The tone of Source A is [adjective], which serves to... In contrast, Source B adopts a more [adjective] register..." },
                        { purpose: "Compare structure", starter: "Structurally, Source A builds towards... whereas Source B is organised around..." },
                        { purpose: "Compare purpose", starter: "Source A's primary purpose is to [persuade/inform/entertain], and the writer achieves this through... Source B, however, aims to..." },
                        { purpose: "Evaluate", starter: "Arguably, Source [A/B]'s use of... is more effective because..." },
                      ].map((row) => (
                        <tr key={row.purpose}>
                          <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">{row.purpose}</td>
                          <td className="py-3 text-muted-foreground italic">{row.starter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Section>

          </div>
        </div>
      </div>

    </>
  );
}
