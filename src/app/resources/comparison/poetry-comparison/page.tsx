import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/comparison/poetry-comparison' },
  title: "Poetry Comparison Guide | The English Hub",
  description:
    "Master poetry comparison for GCSE and IGCSE English. Step-by-step method, alternating and block structures, 50+ comparative connectives, full example comparisons, and examiner insights.",
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
  { id: "step-by-step", label: "Step-by-Step Method" },
  { id: "structures", label: "Structural Approaches" },
  { id: "connectives", label: "Comparative Connectives" },
  { id: "example-ozymandias", label: "Example: Ozymandias vs MLD" },
  { id: "example-remains", label: "Example: Remains vs Exposure" },
  { id: "examiners", label: "What Examiners Want" },
  { id: "mistakes", label: "Common Mistakes" },
];

/* ─── Connectives data ───────────────────────────────────────── */

const CONNECTIVE_GROUPS = [
  {
    heading: "Similarity",
    colour: "bg-success/10 border-[success]/30",
    phrases: [
      "Similarly,",
      "In the same way,",
      "Likewise,",
      "Both poets...",
      "Equally,",
      "In a similar vein,",
      "Correspondingly,",
      "Just as... so too...",
      "This is echoed in...",
      "This mirrors...",
      "Parallel to this,",
      "Along the same lines,",
      "Comparably,",
    ],
  },
  {
    heading: "Difference",
    colour: "bg-destructive/10 border-destructive/30",
    phrases: [
      "In contrast,",
      "However,",
      "Whereas...",
      "On the other hand,",
      "Conversely,",
      "Unlike...",
      "While... the other...",
      "By contrast,",
      "Nevertheless,",
      "Despite this,",
      "Alternatively,",
      "On the contrary,",
      "Diverging from this,",
    ],
  },
  {
    heading: "Developing a Point",
    colour: "bg-primary/10 border-primary/30",
    phrases: [
      "Furthermore,",
      "Moreover,",
      "Additionally,",
      "Building on this,",
      "To extend this comparison,",
      "What is more,",
      "This is further reinforced by...",
      "Taking this further,",
      "In addition to this,",
    ],
  },
  {
    heading: "Evaluative / Analytical",
    colour: "bg-secondary/10 border-secondary/30",
    phrases: [
      "Perhaps more significantly,",
      "Arguably,",
      "It could be suggested that...",
      "This implies that...",
      "This is particularly striking because...",
      "What is most revealing is...",
      "The most significant difference is...",
      "Crucially,",
      "It is worth noting that...",
      "Interestingly,",
      "Most compellingly,",
      "The distinction here is subtle but important:",
      "This subtle difference reveals...",
      "The key contrast lies in...",
      "Ultimately,",
      "Above all,",
    ],
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function PoetryComparisonPage() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Comparison Skills
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How to Compare Poems
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete guide to poetry comparison. Step-by-step methods, structural
            approaches, 50+ comparative connectives, and full annotated example essays.
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
          <li className="font-medium text-foreground">Poetry Comparison</li>
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

            {/* ── Step-by-Step Method ──────────────────────────── */}
            <Section id="step-by-step" title="Step-by-Step Method for Comparing Poems">
              <p className="text-muted-foreground leading-relaxed">
                Follow this proven five-step method every time you approach a poetry comparison question. It works for any exam board and any pair of poems.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    step: 1,
                    title: "Identify the Focus of the Question",
                    detail: "Underline the key word in the question (e.g. power, conflict, nature, loss). Everything you write must connect back to this focus. Do not simply write about both poems generally.",
                  },
                  {
                    step: 2,
                    title: "Find Your Argument",
                    detail: "Before you write, decide: do these poems present the theme similarly or differently? Your argument is the thread that holds your essay together. Write it as a single sentence at the top of your plan.",
                  },
                  {
                    step: 3,
                    title: "Select 3-4 Key Quotations from Each Poem",
                    detail: "Choose quotations that are rich in language techniques. Short quotations (2-5 words) are easier to embed fluently. For each quotation, note the technique and its effect.",
                  },
                  {
                    step: 4,
                    title: "Plan Your Paragraphs Around Comparison Points",
                    detail: "Each paragraph should make one comparison point, drawing on both poems. Do not write all about Poem A and then all about Poem B (unless using the block method deliberately).",
                  },
                  {
                    step: 5,
                    title: "Write with Comparative Connectives Throughout",
                    detail: "Use connectives like 'similarly', 'in contrast', 'whereas', and 'however' to signal to the examiner that you are comparing, not just describing. Aim for at least two connectives per paragraph.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Structural Approaches ───────────────────────── */}
            <Section id="structures" title="Structural Approaches">
              <p className="text-muted-foreground leading-relaxed">
                There are two main ways to structure a poetry comparison essay. Both can achieve top marks -- choose the one that suits you best.
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {/* Alternating */}
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-6">
                  <h3 className="text-lg font-bold text-foreground">Alternating (Recommended)</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Each paragraph discusses both poems, moving between them to make direct comparisons. This approach makes your comparison feel integrated and sophisticated.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-foreground">Para 1:</span> Point about Poem A + comparison to Poem B
                    </div>
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-foreground">Para 2:</span> New point about Poem B + comparison back to Poem A
                    </div>
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-foreground">Para 3:</span> Deeper point about Poem A + link to Poem B
                    </div>
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-foreground">Conclusion:</span> Evaluate both -- which is more effective and why?
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-success/10 px-4 py-3">
                    <p className="text-sm font-semibold text-success">Best for: sustained, integrated comparison that flows naturally.</p>
                  </div>
                </div>

                {/* Block */}
                <div className="rounded-xl border-2 border-accent bg-accent/5 p-6">
                  <h3 className="text-lg font-bold text-foreground">Block</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Write about Poem A in the first half, then Poem B in the second half, making links back to Poem A as you go. Simpler to plan but harder to make comparative.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-accent">Section 1:</span> Analyse Poem A in full (3-4 paragraphs)
                    </div>
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-accent">Section 2:</span> Analyse Poem B, linking back to Poem A throughout
                    </div>
                    <div className="rounded-lg bg-card p-3 text-sm">
                      <span className="font-semibold text-accent">Conclusion:</span> Draw together the key similarities and differences
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-destructive/10 px-4 py-3">
                    <p className="text-sm font-semibold text-destructive">Warning: you MUST link back to Poem A in Section 2, or it reads as two separate essays.</p>
                  </div>
                </div>
              </div>
            </Section>

            {/* ── Comparative Connectives ─────────────────────── */}
            <Section id="connectives" title="Comparative Connectives (50+ Phrases)">
              <p className="text-muted-foreground leading-relaxed">
                These phrases signal to the examiner that you are actively comparing, not just describing two poems separately. Aim to use a variety throughout your essay.
              </p>

              <div className="mt-6 space-y-6">
                {CONNECTIVE_GROUPS.map((group) => (
                  <div key={group.heading}>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{group.heading}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.phrases.map((phrase) => (
                        <span
                          key={phrase}
                          className={`rounded-lg border px-3 py-1.5 text-sm font-medium text-muted-foreground ${group.colour}`}
                        >
                          {phrase}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Example 1: Ozymandias vs MLD ────────────────── */}
            <Section id="example-ozymandias" title="Example Comparison: Ozymandias vs My Last Duchess">
              <div className="rounded-xl border border-border bg-muted p-4 mb-6">
                <p className="text-sm font-semibold text-foreground">Question:</p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  Compare how poets present the theme of power in &lsquo;Ozymandias&rsquo; by Percy Bysshe Shelley and &lsquo;My Last Duchess&rsquo; by Robert Browning.
                </p>
              </div>

              <div className="rounded-xl border-2 border-primary/30 bg-card p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Full Model Essay</p>

                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <Annotation note="Opens with a clear comparative argument linking both poems to the question focus.">Both Shelley in &lsquo;Ozymandias&rsquo; and Browning in &lsquo;My Last Duchess&rsquo; explore the corrupting nature of power, yet they do so through strikingly different lenses.</Annotation>{" "}
                    Shelley presents power as ultimately transient and futile, using the ruined statue as a symbol of how even the mightiest rulers are humbled by time. Browning, however, depicts power as something deeply personal and controlling, revealing a Duke whose authority extends even beyond his wife&rsquo;s death.
                  </p>

                  <p>
                    <Annotation note="Comparative connective 'Both poets' immediately signals integrated comparison.">Both poets use dramatic irony to undermine their powerful figures.</Annotation>{" "}
                    In &lsquo;Ozymandias&rsquo;, the inscription <Annotation note="Short embedded quotation -- easy for the examiner to see.">&ldquo;Look on my Works, ye Mighty, and despair!&rdquo;</Annotation> is rendered absurd by the &ldquo;boundless and bare&rdquo; desert that surrounds the broken statue. The imperative verb &ldquo;look&rdquo; and the commanding tone reveal Ozymandias&rsquo;s arrogance, while the alliterative &ldquo;boundless and bare&rdquo; emphasises the vast emptiness that mocks his legacy. <Annotation note="Moves to the second poem with 'Similarly' -- classic alternating structure.">Similarly, Browning uses dramatic irony</Annotation> as the Duke unwittingly reveals his tyrannical nature while believing he is merely displaying his art collection. His casual remark that he &ldquo;gave commands; / Then all smiles stopped together&rdquo; chills the reader, yet the Duke delivers it with disturbing nonchalance. The euphemistic language conceals what is likely murder, showing how power corrupts moral awareness.
                  </p>

                  <p>
                    <Annotation note="New comparison point -- moves from irony to structure/form.">However, the poets use contrasting structures to present power.</Annotation>{" "}
                    Shelley employs a sonnet -- traditionally associated with love -- to write about a tyrant, which itself subverts expectations. The disrupted rhyme scheme and enjambment mirror the fragmentation of Ozymandias&rsquo;s empire. <Annotation note="Contrast connective signals a difference.">In contrast,</Annotation> Browning uses a dramatic monologue in rhyming couplets, giving the Duke uninterrupted control of the narrative. The couplets create a sense of order and control, reflecting the Duke&rsquo;s desire to dominate everything, including the listener. Where Shelley&rsquo;s form enacts decay, Browning&rsquo;s enacts obsessive control.
                  </p>

                  <p>
                    <Annotation note="Third comparison point introduces context to deepen the comparison.">Furthermore, both poems reflect their historical contexts.</Annotation>{" "}
                    Shelley, a Romantic poet writing in 1818, was critical of tyranny and monarchy; &lsquo;Ozymandias&rsquo; can be read as a political warning that no regime lasts forever. The poem&rsquo;s focus on nature reclaiming the desert -- &ldquo;lone and level sands stretch far away&rdquo; -- aligns with the Romantic belief that nature is more powerful than human ambition. <Annotation note="Links back with 'Whereas' for contrast.">Whereas Shelley critiques power from a political standpoint,</Annotation> Browning explores power at a domestic level. Set in Renaissance Italy, the poem exposes patriarchal control: the Duchess is reduced from a living woman to a painting on a wall, literally objectified by the Duke&rsquo;s possessiveness. The phrase &ldquo;That&rsquo;s my last Duchess painted on the wall&rdquo; reduces her to an object he can control -- pulling the curtain open or closed at will.
                  </p>

                  <p>
                    <Annotation note="Evaluative conclusion weighing both poems -- this is what top-band responses do.">Ultimately, both poems reveal the destructive nature of unchecked power, but they offer different warnings.</Annotation>{" "}
                    Shelley suggests that power is inherently temporary -- no matter how great a ruler&rsquo;s achievements, time will erase them. Browning&rsquo;s message is arguably more disturbing: power is not only destructive but also seductive, and those who wield it may never recognise its corruption. The Duke, unlike the shattered Ozymandias, remains intact and in control, which makes his abuse of power all the more chilling. In this sense, while Shelley offers comfort that tyranny will end, Browning offers no such reassurance.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-primary/5 p-5">
                <h4 className="font-bold text-foreground">Why This Works</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>- Every paragraph compares both poems (alternating structure)</li>
                  <li>- Comparative connectives used throughout (&ldquo;Similarly&rdquo;, &ldquo;In contrast&rdquo;, &ldquo;Whereas&rdquo;, &ldquo;However&rdquo;)</li>
                  <li>- Short, embedded quotations analysed for language and effect</li>
                  <li>- Structural and form analysis, not just language</li>
                  <li>- Context integrated naturally, not bolted on</li>
                  <li>- Evaluative conclusion weighing both poems against each other</li>
                </ul>
              </div>
            </Section>

            {/* ── Example 2: Remains vs Exposure ──────────────── */}
            <Section id="example-remains" title="Example Comparison: Remains vs Exposure">
              <div className="rounded-xl border border-border bg-muted p-4 mb-6">
                <p className="text-sm font-semibold text-foreground">Question:</p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  Compare how poets present the effects of conflict in &lsquo;Remains&rsquo; by Simon Armitage and &lsquo;Exposure&rsquo; by Wilfred Owen.
                </p>
              </div>

              <div className="rounded-xl border-2 border-primary/30 bg-card p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Full Model Essay</p>

                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <Annotation note="Clear comparative thesis from the very first sentence.">Both Armitage in &lsquo;Remains&rsquo; and Owen in &lsquo;Exposure&rsquo; present conflict as psychologically devastating, yet they focus on different aspects of its impact.</Annotation>{" "}
                    Armitage explores the lasting guilt and trauma experienced by a modern soldier who has killed a looter, while Owen portrays the slow, grinding suffering of soldiers in World War I who are destroyed not by enemy fire but by the relentless cold. Together, these poems reveal that the true enemy in conflict is often not the opposing force, but the lasting damage war inflicts on the human mind.
                  </p>

                  <p>
                    <Annotation note="First comparison point: the speaker's psychological state.">Both poets present speakers who are haunted by their experiences, though the nature of their torment differs.</Annotation>{" "}
                    In &lsquo;Remains&rsquo;, the soldier cannot escape the memory of the man he killed. The image &ldquo;his blood-Loss{" "}
                    shadow stays on the street&rdquo; becomes an inescapable stain on the speaker&rsquo;s conscience, with the metaphorical &ldquo;shadow&rdquo; suggesting the dead man follows him everywhere. The colloquial tone -- &ldquo;probably armed, possibly not&rdquo; -- reveals the uncertainty that fuels his guilt. <Annotation note="Smooth transition to Owen with 'By contrast'.">By contrast, Owen&rsquo;s soldiers</Annotation> are not haunted by a single event but by the continuous, monotonous suffering of exposure to the elements. The repeated refrain &ldquo;But nothing happens&rdquo; captures the agonising emptiness of waiting, suggesting that the absence of action is itself a form of psychological torture. Where Armitage&rsquo;s speaker is tormented by something he did, Owen&rsquo;s soldiers are tormented by a relentless nothingness.
                  </p>

                  <p>
                    <Annotation note="Second point: use of form and structure.">The poets also use contrasting structures to mirror their speakers&rsquo; experiences.</Annotation>{" "}
                    &lsquo;Remains&rsquo; begins with an anecdotal, almost casual tone -- &ldquo;On another occasion&rdquo; -- mimicking how a soldier might recount an event. However, the poem&rsquo;s structure deteriorates as the speaker&rsquo;s mental state unravels: the final stanzas fragment, the tone shifts from conversational to desperate, and the closing image of the memory being &ldquo;dug in behind enemy lines&rdquo; uses a military metaphor to show that the trauma has literally invaded his mind. <Annotation note="Links to Owen with 'In contrast'.">In contrast, &lsquo;Exposure&rsquo;</Annotation> maintains a rigid, controlled structure throughout -- eight stanzas of regular length with a consistent rhyme scheme. This regularity mirrors the unrelenting, cyclical nature of the soldiers&rsquo; suffering. The half-rhymes (&ldquo;knive us... nervous&rdquo;, &ldquo;wire... war&rdquo;) create a sense of unease, as though even the form itself cannot fully resolve, just as the soldiers&rsquo; suffering has no resolution.
                  </p>

                  <p>
                    <Annotation note="Third point: language and imagery.">Furthermore, both poets use powerful imagery to convey the physical and emotional impact of conflict.</Annotation>{" "}
                    Armitage&rsquo;s description of the dead man &ldquo;sort of inside out&rdquo; is deliberately imprecise, reflecting the speaker&rsquo;s inability to process what he has seen. The understated, almost euphemistic language reveals a mind in denial. The verb &ldquo;tosses&rdquo; in &ldquo;he tosses his guts back into his body&rdquo; is shockingly casual, highlighting how soldiers are forced to normalise the grotesque. <Annotation note="Comparative link back to Owen.">Owen similarly uses visceral imagery,</Annotation> but his focus is on the natural world as aggressor. The wind is personified as having &ldquo;merciless iced east winds that knive us,&rdquo; where the verb &ldquo;knive&rdquo; transforms nature into a weapon more deadly than the enemy. The sibilance in &ldquo;sudden successive flights of bullets&rdquo; mimics the sound of gunfire, yet significantly, it is the cold -- not bullets -- that ultimately kills.
                  </p>

                  <p>
                    <Annotation note="Evaluative conclusion -- weighs up both poems with a personal judgement.">Ultimately, both poems powerfully convey the devastating effects of conflict, but they highlight different tragedies.</Annotation>{" "}
                    Armitage suggests that the most damaging consequence of war is the moral injury it inflicts -- the guilt of having taken a life that can never be undone. Owen argues that war is devastating not because of dramatic acts of violence, but because of the slow, dehumanising attrition of body and spirit. Both poets, separated by a century, arrive at the same conclusion: war destroys from within, and its effects extend far beyond the battlefield. Perhaps Owen&rsquo;s poem is ultimately the more harrowing because his soldiers have no single event to point to -- their suffering is constant, purposeless, and without end.
                  </p>
                </div>
              </div>
            </Section>

            {/* ── What Examiners Want ─────────────────────────── */}
            <Section id="examiners" title="What Examiners Want in Comparisons">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    label: "Sustained comparison",
                    detail: "Every paragraph must reference both poems. Do not write about them in isolation.",
                    level: "Essential",
                    levelColour: "bg-destructive text-white",
                  },
                  {
                    label: "Analytical language terminology",
                    detail: "Name techniques (metaphor, enjambment, caesura) and explain their effects.",
                    level: "Essential",
                    levelColour: "bg-destructive text-white",
                  },
                  {
                    label: "Embedded quotations",
                    detail: "Weave short quotations into your sentences rather than copying out long passages.",
                    level: "Essential",
                    levelColour: "bg-destructive text-white",
                  },
                  {
                    label: "Comparative connectives",
                    detail: "Use words like 'similarly', 'however', 'whereas', 'in contrast' consistently.",
                    level: "Essential",
                    levelColour: "bg-destructive text-white",
                  },
                  {
                    label: "Form and structure analysis",
                    detail: "Go beyond language: discuss how the poets use form, structure, and rhythm.",
                    level: "Top Band",
                    levelColour: "bg-secondary text-white",
                  },
                  {
                    label: "Context (where relevant)",
                    detail: "Link to the poet's life, era, or movement -- but only when it deepens your analysis.",
                    level: "Top Band",
                    levelColour: "bg-secondary text-white",
                  },
                  {
                    label: "Evaluative conclusion",
                    detail: "End by weighing up which poem is more effective or offers a more powerful message.",
                    level: "Top Band",
                    levelColour: "bg-secondary text-white",
                  },
                  {
                    label: "Personal response / alternative readings",
                    detail: "Offer 'perhaps' or 'alternatively' to show critical thinking and multiple interpretations.",
                    level: "Top Band",
                    levelColour: "bg-secondary text-white",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-card p-5 shadow-md">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${item.levelColour}`}>
                        {item.level}
                      </span>
                      <h4 className="font-bold text-foreground">{item.label}</h4>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Common Mistakes ─────────────────────────────── */}
            <Section id="mistakes" title="Common Mistakes to Avoid">
              <div className="space-y-4">
                {[
                  {
                    mistake: "Writing about each poem separately",
                    fix: "Use the alternating structure. Every paragraph must mention both poems.",
                  },
                  {
                    mistake: "Retelling the poem's story instead of analysing",
                    fix: "Focus on HOW the poet creates meaning (techniques, structure, word choices), not WHAT happens.",
                  },
                  {
                    mistake: "Using long, unembedded quotations",
                    fix: "Keep quotations short (2-5 words) and weave them into your sentences grammatically.",
                  },
                  {
                    mistake: "Listing techniques without explaining their effect",
                    fix: "Always follow identification with analysis: name the technique, then explain its effect on the reader.",
                  },
                  {
                    mistake: "Bolting on context as a separate paragraph",
                    fix: "Integrate context naturally into your analysis. It should deepen your point, not sit apart from it.",
                  },
                  {
                    mistake: "Ignoring form and structure",
                    fix: "Discuss the poem's form (sonnet, dramatic monologue), rhyme scheme, enjambment, caesura, and stanza structure.",
                  },
                  {
                    mistake: "Vague comparative language ('both poems are about power')",
                    fix: "Be specific: explain HOW each poem presents the theme differently, using precise language.",
                  },
                  {
                    mistake: "No conclusion or a weak summary",
                    fix: "Write an evaluative conclusion that weighs up both poems and gives a personal judgement.",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-md">
                    <div className="flex flex-col sm:flex-row sm:gap-6">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-destructive">
                          <span className="mr-1">&#10007;</span> {item.mistake}
                        </p>
                      </div>
                      <div className="mt-2 flex-1 sm:mt-0">
                        <p className="text-sm font-bold text-success">
                          <span className="mr-1">&#10003;</span> {item.fix}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </div>
      </div>

    </>
  );
}
