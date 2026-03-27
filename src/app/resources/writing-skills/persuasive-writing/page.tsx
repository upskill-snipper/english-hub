import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/writing-skills/persuasive-writing' },
  title: "Persuasive Writing Masterclass | The English Hub",
  description:
    "Complete guide to persuasive and argumentative writing for GCSE and IGCSE English. AFOREST techniques, counter-arguments, tone, register, format conventions for articles, speeches, letters, reports, and reviews. Full annotated model responses, structural approaches, and vocabulary for persuasion.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-accent/10 px-1 py-0.5 text-foreground border-b-2 border-dashed border-accent/40">
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
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-accent/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Technique card ─────────────────────────────────────────── */

function TechniqueCard({ name, definition, example, effect }: { name: string; definition: string; example: string; effect: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-md">
      <h4 className="font-bold text-foreground">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{definition}</p>
      <div className="mt-3 rounded-lg bg-muted px-4 py-3">
        <p className="text-sm italic text-muted-foreground">{example}</p>
      </div>
      <p className="mt-2 text-sm text-accent">
        <span className="font-semibold">Effect:</span> {effect}
      </p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PersuasiveWritingPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent/80">
            Writing Skills Masterclass
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Persuasive &amp; Argumentative Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Master the art of persuasion. Learn AFOREST techniques, counter-arguments,
            format conventions, and see full annotated model articles and speeches.
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
          <li><Link href="/resources/writing-skills" className="hover:text-foreground transition-colors">Writing Skills</Link></li>
          <li>/</li>
          <li className="font-medium text-foreground">Persuasive Writing</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-foreground uppercase tracking-wider text-xs">Contents</p>
              {[
                { id: "aforest", label: "AFOREST Techniques" },
                { id: "counter-arguments", label: "Counter-Arguments" },
                { id: "tone-register", label: "Tone & Register" },
                { id: "structural-approaches", label: "Structural Approaches" },
                { id: "format-conventions", label: "Format Conventions" },
                { id: "format-templates", label: "Format Templates" },
                { id: "vocabulary", label: "Vocabulary for Persuasion" },
                { id: "model-article", label: "Model: Article" },
                { id: "model-speech", label: "Model: Speech" },
                { id: "common-mistakes", label: "Common Mistakes" },
              ].map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:bg-accent/10 hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">

            {/* ─── AFOREST ────────────────────────────────────────── */}
            <Section id="aforest" title="AFOREST Techniques">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                AFOREST is a mnemonic for the seven core persuasive techniques. These are your bread-and-butter
                tools. Every persuasive piece you write should use most (if not all) of them -- but
                the key is to use them <strong>naturally</strong>, not mechanically.
              </p>

              <div className="space-y-4">
                {[
                  {
                    letter: "A",
                    name: "Alliteration",
                    definition: "Repeating the same consonant sound at the beginning of consecutive or nearby words.",
                    example: '"Cruel, callous, and utterly careless -- that is what this policy represents."',
                    effect: "Makes phrases memorable and punchy. Creates rhythm that reinforces your point. The repetition of harsh sounds (like /k/) can make criticism feel more aggressive; softer sounds (like /s/) can feel more persuasive.",
                    topTip: "Do not overuse it. One alliterative phrase per paragraph is plenty. When used sparingly, it feels like emphasis. When overused, it feels like a tongue twister.",
                  },
                  {
                    letter: "F",
                    name: "Facts (or Factual-Sounding Statements)",
                    definition: "Presenting information as established truth to build credibility.",
                    example: '"According to a 2024 study by the World Health Organisation, one in four teenagers reports feeling anxious every single day."',
                    effect: "Gives your argument authority. Readers trust writers who appear informed. Even invented statistics in creative exam conditions should sound specific and plausible.",
                    topTip: 'In exams, you can invent statistics -- but make them sound real. "73% of students" is more convincing than "most students" because specificity implies research.',
                  },
                  {
                    letter: "O",
                    name: "Opinions (Presented as Fact)",
                    definition: "Stating your opinion with such confidence that it sounds indisputable.",
                    example: '"It is beyond question that our education system is failing an entire generation of young people."',
                    effect: 'The phrases "it is beyond question" and "it is undeniable" close down debate. They make the reader feel that disagreeing would be unreasonable.',
                    topTip: 'Power phrases: "It is self-evident that...", "No reasonable person could deny...", "The evidence is overwhelming..."',
                  },
                  {
                    letter: "R",
                    name: "Rhetorical Questions",
                    definition: "Questions asked for effect, not expecting an answer, designed to make the reader think.",
                    example: '"How many more young people must struggle in silence before we accept that something must change?"',
                    effect: "Forces the reader to engage with your argument internally. The implied answer reinforces your point. Creates a conversational, direct tone.",
                    topTip: "Place rhetorical questions at the end of paragraphs for maximum impact, or at the beginning to introduce a new idea. Avoid using more than 2-3 in a single piece.",
                  },
                  {
                    letter: "E",
                    name: "Emotive Language",
                    definition: "Choosing words specifically for their emotional impact -- to make the reader feel something.",
                    example: '"Children as young as ten are being abandoned by a system that was supposed to protect them. Left to navigate a hostile world with no support, no guidance, and no hope."',
                    effect: 'Words like "abandoned," "hostile," and "no hope" trigger an emotional response. The reader feels sympathy, outrage, or guilt -- and that emotion drives them toward your position.',
                    topTip: 'Emotive language works best when mixed with facts. Emotion alone can feel manipulative; emotion supported by evidence feels compelling. Compare: "It\'s really sad" (weak) vs. "Children are suffering in silence" (strong).',
                  },
                  {
                    letter: "S",
                    name: "Statistics",
                    definition: "Numerical data that supports your argument and adds credibility.",
                    example: '"A staggering 87% of teachers surveyed said they had witnessed students in their classrooms struggling with their mental health -- and felt powerless to help."',
                    effect: "Numbers feel objective and scientific. They ground your argument in evidence and make it harder to dismiss. The adjective 'staggering' frames the statistic emotionally.",
                    topTip: "Combine statistics with emotive commentary. The number alone is cold -- the framing makes it persuasive. In exams, invent plausible figures with specific percentages.",
                  },
                  {
                    letter: "T",
                    name: "Three (Rule of Three / Tricolon)",
                    definition: "Grouping ideas, adjectives, or phrases in sets of three for rhetorical power.",
                    example: '"This is a matter of fairness, of decency, and of basic human rights."',
                    effect: "Three items feel complete and satisfying. Two feels insufficient; four feels like a list. Three creates rhythm, emphasis, and a sense of finality.",
                    topTip: 'Build to the most powerful item last. "It is wrong, it is harmful, and it is destroying lives." -- the final item carries the most weight.',
                  },
                ].map((item) => (
                  <div key={item.letter} className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                    <div className="flex items-stretch">
                      <div className="flex w-16 shrink-0 items-center justify-center bg-accent text-3xl font-black text-white">
                        {item.letter}
                      </div>
                      <div className="flex-1 p-5">
                        <h4 className="font-bold text-foreground text-lg">{item.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{item.definition}</p>
                        <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                          <p className="text-sm italic text-muted-foreground">{item.example}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-accent">Effect:</span> {item.effect}
                        </p>
                        <div className="mt-3 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-2">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Top Tip:</span> {item.topTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── COUNTER-ARGUMENTS ─────────────────────────────── */}
            <Section id="counter-arguments" title="Counter-Argument Technique">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                A counter-argument is when you acknowledge the opposing viewpoint -- and then dismantle
                it. This is one of the most powerful persuasive techniques because it shows you have
                considered the other side and still believe your position is stronger.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">The Three-Step Structure</h3>
              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-5 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">1</span>
                  <p className="mt-3 font-bold text-foreground">Acknowledge</p>
                  <p className="mt-1 text-sm text-muted-foreground">Show you understand the opposing view</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">&ldquo;Some may argue that...&rdquo;</p>
                </div>
                <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-5 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">2</span>
                  <p className="mt-3 font-bold text-foreground">Challenge</p>
                  <p className="mt-1 text-sm text-muted-foreground">Explain why it is flawed, limited, or misguided</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">&ldquo;However, this fails to account for...&rdquo;</p>
                </div>
                <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-5 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">3</span>
                  <p className="mt-3 font-bold text-foreground">Reassert</p>
                  <p className="mt-1 text-sm text-muted-foreground">Return to your own argument, now strengthened</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">&ldquo;The reality is...&rdquo;</p>
                </div>
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">Full Example</h3>
              <div className="rounded-xl border border-border bg-card p-5 shadow-md space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">[Acknowledge]</span> Some may argue that social media has brought people closer together, enabling friendships across continents and giving young people a voice they never had before.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">[Challenge]</span> However, this argument conveniently ignores the overwhelming evidence that social media use is directly linked to rising rates of anxiety, depression, and loneliness among teenagers. A connection made through a screen is not the same as a connection made through shared experience.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">[Reassert]</span> The reality is that while social media may offer the illusion of connection, it is, for many young people, a substitute for the real thing -- and a poor one at that.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-lg font-bold text-foreground">Useful Counter-Argument Phrases</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { category: "Acknowledging", phrases: ["Some may argue that...", "Critics might suggest...", "It is true that, on the surface,...", "Admittedly,...", "There are those who believe..."] },
                    { category: "Challenging", phrases: ["However, this overlooks...", "Yet this argument fails to account for...", "This is, at best, a half-truth.", "While this may appear reasonable, the reality is...", "But scratch beneath the surface and..."] },
                    { category: "Reasserting", phrases: ["The evidence clearly shows...", "In truth,...", "What this argument ignores is...", "The reality, however, is far more troubling.", "Ultimately,..."] },
                    { category: "Dismissing with confidence", phrases: ["This is, frankly, nonsense.", "Such arguments simply do not withstand scrutiny.", "This is a comforting fiction, nothing more.", "To suggest otherwise is to ignore the facts.", "This argument crumbles under examination."] },
                  ].map((group) => (
                    <div key={group.category} className="rounded-xl border border-border bg-muted p-4">
                      <p className="font-bold text-foreground text-sm mb-2">{group.category}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {group.phrases.map((phrase, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {phrase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* ─── TONE & REGISTER ───────────────────────────────── */}
            <Section id="tone-register" title="Tone and Register">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                <strong>Register</strong> is the level of formality in your writing (formal, informal, semi-formal).
                <strong> Tone</strong> is the emotional quality or attitude (angry, compassionate, sarcastic, urgent).
                Matching the right tone and register to your purpose, audience, and form is essential.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold">Form</th>
                      <th className="px-4 py-3 text-left font-semibold">Register</th>
                      <th className="px-4 py-3 text-left font-semibold">Typical Tone</th>
                      <th className="px-4 py-3 text-left font-semibold">Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { form: "Newspaper article", register: "Semi-formal", tone: "Authoritative, measured", features: "Third person, balanced but opinionated, evidence-based" },
                      { form: "Speech", register: "Semi-formal to formal", tone: "Passionate, urgent, direct", features: "First/second person, direct address, repetition, pauses" },
                      { form: "Formal letter", register: "Formal", tone: "Polite but firm, measured", features: "Third person or first person, no contractions, respectful language" },
                      { form: "Blog post", register: "Informal to semi-formal", tone: "Conversational, personal", features: "First person, anecdotes, contractions allowed, humour" },
                      { form: "Report", register: "Formal", tone: "Objective, professional", features: "Third person, impersonal, recommendations, data-driven" },
                      { form: "Review", register: "Semi-formal", tone: "Evaluative, balanced, witty", features: "First person, opinion supported by evidence, star ratings optional" },
                      { form: "Leaflet", register: "Semi-formal", tone: "Encouraging, informative", features: "Second person, imperatives, bullet points, subheadings" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                        <td className="px-4 py-3 font-medium text-foreground">{row.form}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.register}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.tone}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                <p className="font-bold text-foreground">Common Mistake: One-Note Tone</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Weaker responses maintain the same angry or sarcastic tone throughout. Strong responses
                  vary their tone strategically: they might open with measured authority, shift to
                  passionate outrage in the middle, and close with a calm, hopeful appeal. This tonal
                  variety shows emotional range and rhetorical control.
                </p>
              </div>
            </Section>

            {/* ─── STRUCTURAL APPROACHES ─────────────────────────── */}
            <Section id="structural-approaches" title="Structural Approaches">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                How you organise your argument matters as much as what you say. Here are proven
                structures for different persuasive forms and situations.
              </p>

              <div className="space-y-6">
                {/* Article Structure */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground">Article Structure (5-6 paragraphs)</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { para: "1. Opening", desc: "Hook the reader. State your position clearly. Use a striking fact, question, or bold statement." },
                      { para: "2. Strongest argument", desc: "Lead with your most compelling point. Support with evidence, statistics, or an example." },
                      { para: "3. Second argument", desc: "Develop a different angle. Use emotive language and a real-world example." },
                      { para: "4. Counter-argument", desc: "Acknowledge the opposition, then dismantle it. Show you have considered both sides." },
                      { para: "5. Third argument / Personal appeal", desc: "An anecdote, direct address, or emotional appeal to re-engage the reader." },
                      { para: "6. Conclusion", desc: "Return to your opening image or phrase (circular structure). End with a call to action or a powerful final statement." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{item.para}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Speech Structure */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground">Speech Structure (5-6 paragraphs)</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { para: "1. Address & hook", desc: '"Ladies and gentlemen..." or "Fellow students..." followed by a provocative question or bold claim.' },
                      { para: "2. The problem", desc: "Paint a vivid picture of the issue. Use emotive language and statistics. Make the audience feel the urgency." },
                      { para: "3. Your solution / argument", desc: "Present your position with evidence. Use the rule of three and repetition for impact." },
                      { para: "4. Counter & rebuttal", desc: 'Anticipate objections: "I know some of you are thinking..." Then counter them firmly.' },
                      { para: "5. Emotional appeal", desc: "Personal anecdote or vivid scenario. This is where you make it personal and human." },
                      { para: "6. Call to action", desc: "End with a direct, memorable instruction. Tell the audience what to DO. Use imperative verbs and repetition." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{item.para}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Point-Counterpoint */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground">Point-Counterpoint (Debate Style)</h3>
                  <p className="mt-2 text-sm text-muted-foreground mb-4">
                    Each paragraph presents an opposing argument and immediately dismantles it. This creates
                    a back-and-forth rhythm that feels like a live debate -- and shows the examiner that you
                    can engage with multiple perspectives.
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { para: "1. Opening", desc: "State the issue and your position. Signal that there is a debate to be had." },
                      { para: "2. Opposition point A + your rebuttal", desc: '"Critics claim X. However, this ignores Y."' },
                      { para: "3. Opposition point B + your rebuttal", desc: '"Others suggest X. Yet the evidence shows Y."' },
                      { para: "4. Opposition point C + your rebuttal", desc: '"Perhaps the most common objection is X. But consider Y."' },
                      { para: "5. Your strongest positive argument", desc: "After dismantling the opposition, present your most powerful standalone point." },
                      { para: "6. Conclusion", desc: "Summarise why your position withstands all challenges. End with a decisive statement." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{item.para}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Best for:</span> Balanced argument tasks, &ldquo;discuss both sides&rdquo; questions, and topics where the opposition has strong points you need to address.
                    </p>
                  </div>
                </div>

                {/* Building Argument */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground">Building Argument (Crescendo)</h3>
                  <p className="mt-2 text-sm text-muted-foreground mb-4">
                    Start with your weakest point and build to your most powerful. Each paragraph is more
                    compelling than the last, creating a sense of momentum that carries the reader toward
                    your conclusion. Think of it like a wave building before it crashes.
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { para: "1. Opening", desc: "Introduce the topic with a hook. Hint at the gravity of your argument without revealing everything." },
                      { para: "2. Least powerful argument", desc: "A reasonable but fairly mild point. Establishes the foundation." },
                      { para: "3. Stronger argument", desc: "Introduce evidence, statistics, or expert opinion. The stakes feel higher." },
                      { para: "4. Counter-argument + rebuttal", desc: "Address the opposition here, in the middle, so you can build past it." },
                      { para: "5. Most powerful argument", desc: "Your knockout punch. Emotive language, a devastating statistic, or a vivid anecdote." },
                      { para: "6. Conclusion", desc: "The climax. Call to action. The reader should feel that the argument is irresistible." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-xs font-bold text-success">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{item.para}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-[success] bg-success/5 px-4 py-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Best for:</span> Speeches, passionate opinion pieces, and tasks where you want to create an emotional crescendo.
                    </p>
                  </div>
                </div>

                {/* Most-to-Least Important */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground">Most-to-Least Important (Inverted Pyramid)</h3>
                  <p className="mt-2 text-sm text-muted-foreground mb-4">
                    Lead with your strongest point and work downward. This is the structure used by
                    journalists and is ideal for articles. It hooks the reader immediately and frontloads
                    the most compelling evidence, ensuring even a reader who stops halfway has encountered
                    your best material.
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { para: "1. Opening + strongest argument", desc: "Hit the reader with your most powerful point immediately. Bold claim, shocking statistic, or provocative question." },
                      { para: "2. Supporting evidence", desc: "Expand on your strongest point with detail, examples, and expert opinion." },
                      { para: "3. Second argument", desc: "A strong but secondary point. Still compelling, but serves to reinforce rather than lead." },
                      { para: "4. Counter-argument + rebuttal", desc: "Acknowledge and dismiss the opposition. By this point, your argument already feels established." },
                      { para: "5. Broader context / implications", desc: "Widen the lens. What happens if nothing changes? Why does this matter beyond the immediate issue?" },
                      { para: "6. Conclusion", desc: "Decisive close. Circular reference to opening. Call to action." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{item.para}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-secondary bg-secondary/5 px-4 py-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Best for:</span> Newspaper articles, reports, and any task where you want to establish authority from the very first line.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* ─── FORMAT CONVENTIONS ────────────────────────────── */}
            <Section id="format-conventions" title="Format Conventions">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Each form has specific format features that examiners expect to see. Getting these right
                shows awareness of audience, purpose, and form -- and it is easy marks.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Article */}
                <div className="rounded-xl border-2 border-primary/30 bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground mb-4">Article</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-primary">Headline</p>
                      <p className="text-muted-foreground">Bold, attention-grabbing, often using alliteration, a pun, or a provocative statement.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;Screen Time, Lost Time: Why Our Children Are Paying the Price&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Strapline / Standfirst</p>
                      <p className="text-muted-foreground">A one-sentence summary that expands on the headline. Sits below it in smaller text.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;As screen addiction rises, experts warn of a generation losing the ability to connect, concentrate, and cope.&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Subheadings</p>
                      <p className="text-muted-foreground">Break up the text and guide the reader. Should be informative, not vague.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;The Science Behind the Scroll&rdquo; / &ldquo;What Parents Can Do&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Byline</p>
                      <p className="text-muted-foreground">The author&apos;s name. Optional in exams but shows form awareness.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;By [Your Name]&rdquo;</p>
                    </div>
                  </div>
                </div>

                {/* Letter */}
                <div className="rounded-xl border-2 border-[success]/30 bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground mb-4">Formal Letter</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-success">Addresses</p>
                      <p className="text-muted-foreground">Your address (top right), recipient&apos;s address (left, below yours), date below that.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-success">Greeting</p>
                      <p className="text-muted-foreground">&ldquo;Dear Sir/Madam,&rdquo; (if name unknown) or &ldquo;Dear Mr/Mrs [Name],&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-success">Sign-off</p>
                      <p className="text-muted-foreground">&ldquo;Yours faithfully,&rdquo; (if Dear Sir/Madam) or &ldquo;Yours sincerely,&rdquo; (if you used their name).</p>
                    </div>
                    <div>
                      <p className="font-semibold text-success">Tone</p>
                      <p className="text-muted-foreground">Formal, polite, but can be firm. No contractions, no slang, no exclamation marks.</p>
                    </div>
                  </div>
                </div>

                {/* Speech */}
                <div className="rounded-xl border-2 border-accent/30 bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground mb-4">Speech</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Direct Address</p>
                      <p className="text-muted-foreground">Address your audience directly throughout. &ldquo;You,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our.&rdquo;</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;I stand before you today because I believe we can do better.&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Rhetorical Pauses</p>
                      <p className="text-muted-foreground">Short sentences, fragments, or dashes to create natural pauses for emphasis.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;This is not a distant problem. This is our problem. Right here. Right now.&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Inclusive Language</p>
                      <p className="text-muted-foreground">Use &ldquo;we&rdquo; and &ldquo;together&rdquo; to unite the audience with the speaker.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Repetition / Anaphora</p>
                      <p className="text-muted-foreground">Repeat a phrase at the start of consecutive sentences for rhythmic, memorable impact.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;We deserve better. We demand better. We will be better.&rdquo;</p>
                    </div>
                  </div>
                </div>

                {/* Report */}
                <div className="rounded-xl border-2 border-secondary/30 bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold text-foreground mb-4">Report</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-secondary">Title</p>
                      <p className="text-muted-foreground">Clear and factual: &ldquo;Report on [Topic] for [Audience]&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Formal Tone</p>
                      <p className="text-muted-foreground">Third person, impersonal, no emotional language. &ldquo;It was observed that...&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Subheadings</p>
                      <p className="text-muted-foreground">Organise findings clearly: Introduction, Findings, Conclusion, Recommendations.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Recommendations</p>
                      <p className="text-muted-foreground">End with actionable suggestions: &ldquo;It is recommended that...&rdquo;</p>
                    </div>
                  </div>
                </div>

                {/* Review */}
                <div className="rounded-xl border-2 border-destructive/30 bg-card p-6 shadow-md sm:col-span-2">
                  <h3 className="text-lg font-bold text-foreground mb-4">Review</h3>
                  <div className="grid gap-3 sm:grid-cols-2 text-sm">
                    <div>
                      <p className="font-semibold text-destructive">Balanced Opinion</p>
                      <p className="text-muted-foreground">Present both positives and negatives, but make your overall verdict clear. Avoid fence-sitting.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive">Star Rating / Verdict</p>
                      <p className="text-muted-foreground">Optional but shows form awareness. A clear final verdict: &ldquo;Worth seeing&rdquo; or &ldquo;Give it a miss.&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive">Descriptive Detail</p>
                      <p className="text-muted-foreground">Describe what you are reviewing vividly so the reader can picture or imagine it.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;The opening scene plunges you into a soundscape of crashing waves and whispered dialogue.&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive">Personal Voice</p>
                      <p className="text-muted-foreground">First person is expected. Your personality, wit, and style should come through. Reviews can be humorous or sharp.</p>
                      <p className="mt-1 italic text-muted-foreground">&ldquo;If you enjoy films that make you question every life choice you have ever made, this one is for you.&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive">Recommendation</p>
                      <p className="text-muted-foreground">End with a clear recommendation to a specific audience: &ldquo;Perfect for fans of...&rdquo; or &ldquo;Avoid if you...&rdquo;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive">Comparison</p>
                      <p className="text-muted-foreground">Compare to similar products, films, books, or restaurants to give the reader a frame of reference.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* ─── FORMAT TEMPLATES ──────────────────────────────── */}
            <Section id="format-templates" title="Format Templates &amp; Example Openings">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Below are full templates for each format, including key conventions checklists and example
                opening paragraphs you can adapt.
              </p>

              <div className="space-y-8">
                {/* Article Template */}
                <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                  <div className="bg-primary px-6 py-4">
                    <h3 className="text-lg font-bold text-white">Article Template</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="rounded-lg bg-muted p-5 font-mono text-sm text-foreground space-y-3">
                      <p className="text-xl font-black text-foreground">[HEADLINE: Punchy, attention-grabbing]</p>
                      <p className="italic text-muted-foreground">[Strapline: One-sentence summary expanding the headline]</p>
                      <p className="text-xs text-muted-foreground">By [Your Name]</p>
                      <hr className="border-border" />
                      <p>[Opening paragraph: Hook the reader with a striking fact, rhetorical question, or bold claim. State your position.]</p>
                      <p className="font-bold text-muted-foreground">[Subheading]</p>
                      <p>[Body paragraphs: Each with a clear point, evidence, and technique. Include one counter-argument paragraph.]</p>
                      <p className="font-bold text-muted-foreground">[Subheading]</p>
                      <p>[Continue arguments with varied techniques. Use direct address to engage the reader.]</p>
                      <p>[Concluding paragraph: Return to opening image (circular structure). Call to action or powerful final statement.]</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm mb-2">Key Conventions Checklist</p>
                      <ul className="grid gap-1 sm:grid-cols-2 text-sm text-muted-foreground">
                        {["Headline (alliteration, pun, or provocation)", "Strapline / standfirst", "Byline", "At least one subheading", "Semi-formal register", "Third person (mostly) with occasional direct address", "Evidence and statistics", "Paragraphs of varied length"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 text-primary">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3">
                      <p className="font-semibold text-foreground text-sm">Example Opening Paragraph</p>
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        &ldquo;Every morning, 1.4 million British teenagers reach for their phones before
                        they reach for their toothbrushes. Before a single word of homework is read,
                        before a single conversation is had, they have already scrolled through two
                        hundred images of lives more glamorous, more exciting, and more perfect than their
                        own. And every morning, without realising it, they feel a little worse about
                        themselves. This is not a coincidence. It is a crisis.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Letter Template */}
                <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                  <div className="bg-success px-6 py-4">
                    <h3 className="text-lg font-bold text-white">Formal Letter Template</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="rounded-lg bg-muted p-5 font-mono text-sm text-foreground space-y-3">
                      <div className="text-right">
                        <p>[Your Address]</p>
                        <p>[Town/City]</p>
                        <p>[Postcode]</p>
                        <p className="mt-2">[Date]</p>
                      </div>
                      <div>
                        <p>[Recipient&apos;s Name]</p>
                        <p>[Their Title / Organisation]</p>
                        <p>[Their Address]</p>
                      </div>
                      <p>Dear [Mr/Mrs/Ms Surname / Sir or Madam],</p>
                      <p>[Opening paragraph: State the purpose of the letter clearly and concisely.]</p>
                      <p>[Body paragraphs: Develop your argument with evidence. Maintain formal register throughout. No contractions.]</p>
                      <p>[Counter-argument paragraph: Acknowledge the other side politely before countering.]</p>
                      <p>[Concluding paragraph: Restate your position. Request specific action.]</p>
                      <p>Yours [faithfully/sincerely],</p>
                      <p>[Your Name]</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm mb-2">Key Conventions Checklist</p>
                      <ul className="grid gap-1 sm:grid-cols-2 text-sm text-muted-foreground">
                        {["Your address (top right)", "Recipient's address (left)", "Date", "Dear Sir/Madam or Dear Mr/Mrs [Name]", "Yours faithfully (unknown name) / sincerely (known name)", "Formal register -- no contractions", "First person (\"I am writing to...\")", "Polite but firm tone"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 text-success">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-[success] bg-success/5 px-4 py-3">
                      <p className="font-semibold text-foreground text-sm">Example Opening Paragraph</p>
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        &ldquo;I am writing to express my deep concern regarding the proposed closure
                        of Greenfield Community Library. As a resident of this area for over fifteen
                        years, and as a parent of two children who rely on the library for their
                        education and wellbeing, I feel compelled to urge you to reconsider this
                        decision before irreversible damage is done to our community.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Speech Template */}
                <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                  <div className="bg-accent px-6 py-4">
                    <h3 className="text-lg font-bold text-white">Speech Template</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="rounded-lg bg-muted p-5 font-mono text-sm text-foreground space-y-3">
                      <p>[Direct address: &ldquo;Good morning, teachers, students, and staff.&rdquo;]</p>
                      <p>[Opening hook: Bold personal statement, provocative question, or striking fact.]</p>
                      <p>[Problem paragraph: Paint a vivid picture. Use &ldquo;we&rdquo; and &ldquo;our&rdquo; to include the audience. Statistics and emotive language.]</p>
                      <p>[Argument paragraph: Present your solution/position. Rule of three. Repetition/anaphora for rhythm.]</p>
                      <p>[Counter-argument: &ldquo;I know some of you are thinking...&rdquo; Acknowledge and rebut.]</p>
                      <p>[Emotional appeal: Personal anecdote or vivid hypothetical scenario.]</p>
                      <p>[Call to action: Imperative verbs. Tell the audience exactly what to do. End with a memorable final line.]</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm mb-2">Key Conventions Checklist</p>
                      <ul className="grid gap-1 sm:grid-cols-2 text-sm text-muted-foreground">
                        {["Direct address to audience", "Inclusive pronouns (we, us, our)", "Rhetorical questions (2-3 maximum)", "Pauses: short sentences, fragments, dashes", "Tricolon / rule of three", "Anaphora (repeated sentence starters)", "Personal anecdote", "Call to action with imperative verbs"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 text-accent">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-accent bg-accent/5 px-4 py-3">
                      <p className="font-semibold text-foreground text-sm">Example Opening Paragraph</p>
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        &ldquo;Ladies and gentlemen, I want you to imagine something. Imagine waking up
                        tomorrow to discover that the air you breathe, the water you drink, and the
                        food you eat have all been contaminated -- not by accident, but by choice.
                        By the choices of companies who knew the risks and chose profit over people.
                        That is not a dystopian fantasy. That is happening. Right now. In our
                        communities. To our families.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Report Template */}
                <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                  <div className="bg-secondary px-6 py-4">
                    <h3 className="text-lg font-bold text-white">Report Template</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="rounded-lg bg-muted p-5 font-mono text-sm text-foreground space-y-3">
                      <p className="font-bold">Report on [Topic]</p>
                      <p className="text-xs text-muted-foreground">Prepared for: [Audience] | Date: [Date] | Prepared by: [Your Name]</p>
                      <hr className="border-border" />
                      <p className="font-bold text-muted-foreground">1. Introduction</p>
                      <p>[State the purpose of the report and how the information was gathered.]</p>
                      <p className="font-bold text-muted-foreground">2. Findings</p>
                      <p>[Present your findings under clear subheadings. Use data and evidence. Remain impersonal and objective.]</p>
                      <p className="font-bold text-muted-foreground">3. Conclusion</p>
                      <p>[Summarise the key findings. Do not introduce new information.]</p>
                      <p className="font-bold text-muted-foreground">4. Recommendations</p>
                      <p>[Actionable suggestions: &ldquo;It is recommended that...&rdquo; / &ldquo;The school should consider...&rdquo;]</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm mb-2">Key Conventions Checklist</p>
                      <ul className="grid gap-1 sm:grid-cols-2 text-sm text-muted-foreground">
                        {["Clear title with audience stated", "Numbered or named sections", "Formal, impersonal register", "Third person throughout", "Data and evidence (not emotion)", "Subheadings for each section", "Recommendations section at the end", "No contractions, no slang"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 text-secondary">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-secondary bg-secondary/5 px-4 py-3">
                      <p className="font-semibold text-foreground text-sm">Example Opening Paragraph</p>
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        &ldquo;This report was commissioned to investigate the impact of reduced
                        break times on student wellbeing at Riverside Academy. Data was collected
                        through a survey of 320 students across Years 7 to 11, interviews with
                        six members of teaching staff, and analysis of attendance and behaviour
                        records from the past two academic years.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review Template */}
                <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                  <div className="bg-destructive px-6 py-4">
                    <h3 className="text-lg font-bold text-white">Review Template</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="rounded-lg bg-muted p-5 font-mono text-sm text-foreground space-y-3">
                      <p className="font-bold text-foreground">[HEADLINE: Witty or evaluative]</p>
                      <p className="text-xs text-muted-foreground">Reviewed by [Your Name] | Rating: [Stars or verdict]</p>
                      <hr className="border-border" />
                      <p>[Opening paragraph: Set the scene. What are you reviewing? First impressions. Hook the reader with a vivid detail or a provocative opinion.]</p>
                      <p>[Positives paragraph(s): What works well? Use descriptive, specific detail. Avoid vague praise like &ldquo;it was good.&rdquo;]</p>
                      <p>[Negatives paragraph: What could be improved? Be fair but honest. Use humour or wit if appropriate.]</p>
                      <p>[Comparison paragraph (optional): How does it compare to similar things? This adds authority.]</p>
                      <p>[Concluding paragraph: Clear verdict and recommendation. Who would enjoy this? Who should avoid it?]</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm mb-2">Key Conventions Checklist</p>
                      <ul className="grid gap-1 sm:grid-cols-2 text-sm text-muted-foreground">
                        {["Engaging headline", "First person throughout", "Balanced: positives AND negatives", "Specific descriptive detail (not vague)", "Personal voice -- wit, humour, or personality", "Comparison to similar products/works", "Clear final verdict / recommendation", "Target audience identified"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 text-destructive">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-[destructive] bg-destructive/5 px-4 py-3">
                      <p className="font-semibold text-foreground text-sm">Example Opening Paragraph</p>
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        &ldquo;I walked into The Olive Garden expecting the usual: plastic menus,
                        lukewarm pasta, and a waiter who would rather be anywhere else. What I got
                        instead was a revelation. From the moment the door swung open to the smell
                        of freshly baked focaccia and the warm hum of Italian jazz, I knew this
                        was going to be something different. And I was right -- mostly.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* ─── VOCABULARY FOR PERSUASION ─────────────────────── */}
            <Section id="vocabulary" title="Vocabulary for Persuasion">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                The difference between a good persuasive piece and a great one often comes down to
                word choice. Below are categorised vocabulary banks you can draw from. The key is to
                use these words <strong>naturally</strong> -- do not shoehorn them in.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    category: "Expressing Urgency",
                    colour: "accent",
                    words: ["immediately", "critical", "pressing", "imperative", "paramount", "dire", "escalating", "unprecedented", "alarmingly", "without delay"],
                  },
                  {
                    category: "Expressing Certainty",
                    colour: "primary",
                    words: ["undeniably", "irrefutably", "indisputably", "unequivocally", "categorically", "beyond doubt", "self-evidently", "overwhelmingly", "conclusively", "demonstrably"],
                  },
                  {
                    category: "Expressing Outrage",
                    colour: "destructive",
                    words: ["unacceptable", "disgraceful", "shameful", "appalling", "inexcusable", "deplorable", "scandalous", "intolerable", "reprehensible", "unconscionable"],
                  },
                  {
                    category: "Expressing Empathy",
                    colour: "success",
                    words: ["vulnerable", "overlooked", "silenced", "marginalised", "abandoned", "neglected", "struggling", "powerless", "invisible", "unheard"],
                  },
                  {
                    category: "Dismissing Opposition",
                    colour: "secondary",
                    words: ["naive", "short-sighted", "misguided", "superficial", "complacent", "blinkered", "simplistic", "ill-informed", "reductive", "hollow"],
                  },
                  {
                    category: "Calling to Action",
                    colour: "primary",
                    words: ["demand", "insist", "refuse", "challenge", "confront", "champion", "mobilise", "transform", "reclaim", "revolutionise"],
                  },
                ].map((group) => (
                  <div key={group.category} className="rounded-xl border border-border bg-card p-5 shadow-md">
                    <p className="font-bold text-sm mb-3" style={{ color: group.colour }}>{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.words.map((word, i) => (
                        <span key={i} className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground border" style={{ borderColor: `${group.colour}40`, backgroundColor: `${group.colour}08` }}>
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold text-foreground">Connectives for Persuasion</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { purpose: "Adding weight", connectives: ["Furthermore,", "Moreover,", "In addition,", "What is more,", "Crucially,", "Perhaps most importantly,"] },
                    { purpose: "Contrasting / Countering", connectives: ["However,", "Nevertheless,", "On the other hand,", "Conversely,", "Yet,", "Despite this,"] },
                    { purpose: "Showing cause / effect", connectives: ["Consequently,", "As a result,", "Therefore,", "It follows that...", "This inevitably leads to...", "The impact of this is..."] },
                    { purpose: "Concluding", connectives: ["Ultimately,", "In conclusion,", "The evidence is clear:", "It is beyond question that...", "We must, therefore,...", "The time has come to..."] },
                  ].map((group) => (
                    <div key={group.purpose} className="rounded-xl border border-border bg-muted p-4">
                      <p className="font-bold text-foreground text-sm mb-2">{group.purpose}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {group.connectives.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                <p className="font-bold text-foreground">Word Choice: Weak vs. Strong</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-4 py-2 text-left font-semibold text-destructive">Weak (avoid)</th>
                        <th className="px-4 py-2 text-left font-semibold text-success">Strong (use instead)</th>
                        <th className="px-4 py-2 text-left font-semibold text-foreground">Why it works</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { weak: "Bad", strong: "Devastating / harmful / destructive", why: "Specific emotional impact" },
                        { weak: "Good", strong: "Vital / essential / transformative", why: "Conveys importance, not just quality" },
                        { weak: "A lot of people", strong: "A significant majority / countless individuals", why: "Sounds researched and authoritative" },
                        { weak: "I think", strong: "It is clear that / The evidence shows", why: "Removes uncertainty, sounds objective" },
                        { weak: "Very sad", strong: "Heartbreaking / devastating / tragic", why: "Single powerful word beats weak modifier" },
                        { weak: "Should", strong: "Must / is obligated to / has a duty to", why: "Stronger imperative; harder to ignore" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                          <td className="px-4 py-2 text-muted-foreground line-through">{row.weak}</td>
                          <td className="px-4 py-2 font-medium text-foreground">{row.strong}</td>
                          <td className="px-4 py-2 text-muted-foreground">{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Section>

            {/* ─── MODEL ARTICLE ─────────────────────────────────── */}
            <Section id="model-article" title="Model Response: Persuasive Article">
              <div className="mb-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
                <p className="font-bold text-foreground">Task</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Write an article for a national newspaper arguing that social media is doing more
                  harm than good to young people.
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">Hover over highlighted text for annotations</span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-md space-y-5 text-[15px] leading-[1.9] text-foreground">
                {/* Headline */}
                <div className="border-b-2 border-foreground pb-4">
                  <h3 className="text-2xl font-black text-foreground leading-tight">
                    <Annotation note="Headline uses alliteration ('Screen Steal') and a provocative metaphor. It's punchy and memorable.">The Screen That Steals: How Social Media Is Robbing a Generation</Annotation>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground italic">
                    <Annotation note="Strapline: expands the headline with specific detail and sets up the argument.">As likes replace friendships and scrolling replaces sleeping, experts warn we are sleepwalking into a mental health catastrophe.</Annotation>
                  </p>
                </div>

                <p>
                  <Annotation note="Opens with a striking statistic -- immediately establishes authority and urgency.">By the time the average British teenager turns 18, they will have spent approximately 35,000 hours staring at a screen.</Annotation> Thirty-five thousand hours. That is four full years -- four years that could have been spent learning, playing, talking, sleeping. Instead, they are spent{" "}
                  <Annotation note="Rule of three with deliberately mundane, repetitive verbs. The rhythm mimics the mindless repetition of scrolling.">scrolling, comparing, and performing</Annotation> for an audience of strangers who could not care less.
                </p>

                <p>
                  <Annotation note="Rhetorical question: forces the reader to engage. The implied answer is 'no.'">Can we really call this progress?</Annotation> In the last decade, rates of anxiety among 11-to-16-year-olds have{" "}
                  <Annotation note="Factual-sounding statistic. In exam conditions, this could be invented but sounds plausible and specific.">risen by 48%</Annotation>. Self-harm referrals have doubled. Eating disorders among teenage girls have increased by a{" "}
                  <Annotation note="Emotive adjective 'staggering' frames the statistic emotionally, making it feel more shocking.">staggering 67%</Annotation>. These are not abstract numbers. These are{" "}
                  <Annotation note="Emotive language: 'children' is more emotive than 'teenagers' or 'young people'. Deliberate word choice.">children</Annotation> -- our children -- and they are drowning in a digital ocean we built for them.
                </p>

                <p className="font-bold text-foreground text-lg">
                  <Annotation note="Subheading breaks up the article and signals a new angle. Professional article format.">The Comparison Trap</Annotation>
                </p>
                <p>
                  Social media does not simply occupy young people&apos;s time; it{" "}
                  <Annotation note="Personification of social media as an active, malicious force. Makes it feel like a villain.">colonises their self-worth</Annotation>. Every post is a performance. Every photograph is filtered, angled, and curated to present a version of life that does not exist. And yet, despite knowing this intellectually, teenagers{" "}
                  <Annotation note="Contrast between intellectual knowledge and emotional reality -- a sophisticated point.">cannot stop measuring themselves against it</Annotation>. The result? A generation that feels permanently inadequate,{" "}
                  <Annotation note="Rule of three building to a climax: 'inadequate' < 'permanently anxious' < 'terrifyingly alone'.">permanently anxious, and -- most heartbreakingly of all -- terrifyingly alone</Annotation>, even when surrounded by hundreds of online &ldquo;friends.&rdquo;
                </p>

                <p>
                  <Annotation note="Counter-argument: acknowledges the opposition before dismantling it. Shows balanced, mature reasoning.">Of course, defenders of social media will point to its benefits. It connects people across continents. It gives marginalised voices a platform. It has, undeniably, enabled extraordinary movements for change.</Annotation>{" "}
                  <Annotation note="Pivotal 'But' -- the transition word that signals the rebuttal is coming.">But</Annotation> to focus on these achievements while ignoring the{" "}
                  <Annotation note="Metaphor: 'wreckage' implies destruction, devastation -- far stronger than 'problems'.">wreckage</Annotation> left in their wake is not optimism. It is{" "}
                  <Annotation note="Three-part dismissal, building in intensity. 'Wilful blindness' is the most damning.">negligence. It is denial. It is wilful blindness.</Annotation>
                </p>

                <p>
                  <Annotation note="Direct address: 'you' -- breaks the fourth wall and speaks directly to the reader. Creates intimacy.">If you are a parent reading this</Annotation>, ask yourself: do you know what your child sees when they open their phone at midnight? Do you know the comments they read, the images they compare themselves to, the conversations they are too ashamed to show you?{" "}
                  <Annotation note="Accumulation of rhetorical questions -- builds pressure on the reader. Each question is harder to answer.">Do you know how they feel when they put the phone down and lie in the dark?</Annotation>
                </p>

                <p>
                  <Annotation note="Call to action in the final paragraph. Uses imperative verbs: 'demand', 'set'. Tells the reader what to DO.">The time for hand-wringing is over.</Annotation> We need regulation with teeth -- not guidelines, not suggestions, but{" "}
                  <Annotation note="Rule of three: 'enforceable, specific, immediate' -- three crisp adjectives that create a sense of decisive action.">enforceable, specific, immediate legislation</Annotation> that holds social media companies accountable for the damage they cause. We need digital literacy taught in every school from age seven. We need parents to{" "}
                  <Annotation note="Emotive verb choice: 'reclaim' implies something has been taken from them -- ties back to the 'stealing' metaphor in the headline.">reclaim</Annotation> the conversations that screens have silenced.
                </p>

                <p>
                  <Annotation note="Circular ending: returns to the 'four years' from the opening. The repetition gives the piece structural cohesion.">Thirty-five thousand hours is four years.</Annotation> We cannot give those years back. But we can{" "}
                  <Annotation note="Ends on a note of agency and hope -- avoids despair. The final phrase is forward-looking and empowering.">make sure the next four are different</Annotation>.
                </p>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-[success] bg-success/5 p-5">
                <p className="font-bold text-foreground">Why This Response Works</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Correct article format: headline, strapline, subheading, byline-ready</li>
                  <li>All AFOREST techniques deployed naturally (not forced)</li>
                  <li>Counter-argument acknowledged and dismantled</li>
                  <li>Varied tone: authoritative (opening), passionate (middle), urgent (closing)</li>
                  <li>Circular structure: opens and closes with the &ldquo;35,000 hours&rdquo; statistic</li>
                  <li>Direct address shifts the argument from abstract to personal</li>
                  <li>Vocabulary is precise and ambitious without being overwrought</li>
                </ul>
              </div>
            </Section>

            {/* ─── MODEL SPEECH ──────────────────────────────────── */}
            <Section id="model-speech" title="Model Response: Speech">
              <div className="mb-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
                <p className="font-bold text-foreground">Task</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Write a speech to your school arguing that the school day should start later.
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">Hover over highlighted text for annotations</span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-md space-y-5 text-[15px] leading-[1.9] text-foreground">
                <p>
                  <Annotation note="Direct address: names the audience specifically. Establishes the context immediately.">Good morning, teachers, students, and staff.</Annotation>{" "}
                  <Annotation note="Bold, provocative opening statement. Immediately challenges the status quo.">I want to start with a confession: I am tired. Not the kind of tired that a good night&apos;s sleep will fix -- the kind of tired that comes from being forced, five days a week, fifty weeks a year, to fight against my own biology.</Annotation>
                </p>

                <p>
                  <Annotation note="Statistic from a credible source. Grounds the argument in science, not just opinion.">The science is unambiguous.</Annotation> Research from the University of Oxford, Harvard Medical School, and the American Academy of Pediatrics all agree: teenagers&apos; circadian rhythms shift during puberty, making it biologically impossible for most adolescents to fall asleep before 11 p.m. and wake feeling rested before 8 a.m.{" "}
                  <Annotation note="Short, punchy fragment. Creates emphasis after the longer, evidence-heavy sentence.">The evidence is not new. The evidence is not disputed. And yet here we are, dragging ourselves through the gates at 8:30 every morning, expected to learn, to focus, to perform -- on four or five hours of sleep.</Annotation>
                </p>

                <p>
                  <Annotation note="Inclusive pronoun 'we' -- unites the speaker with the audience. They are on the same side.">We have all felt it.</Annotation> That fog that settles behind your eyes in period one. The words on the whiteboard that blur and swim. The teacher&apos;s voice that fades in and out like a{" "}
                  <Annotation note="Simile: vivid and relatable. Every student recognises this feeling.">radio losing signal</Annotation>. This is not laziness. This is not a lack of effort.{" "}
                  <Annotation note="Anaphora (repetition of 'This is not') creates rhythm and emphasis. The pattern leads to the climactic assertion.">This is science being ignored because tradition is more convenient than change.</Annotation>
                </p>

                <p>
                  <Annotation note="Counter-argument: anticipates the most obvious objection and addresses it head-on.">I know what some of you are thinking.</Annotation> &ldquo;If we start later, we finish later.&rdquo; &ldquo;What about parents who work?&rdquo; &ldquo;What about after-school clubs?&rdquo; These are{" "}
                  <Annotation note="Respectful acknowledgment before the rebuttal. Shows maturity and balanced reasoning.">fair questions</Annotation>. But consider this: schools in over 40 countries have already implemented later start times, and the results are overwhelming.{" "}
                  <Annotation note="Specific statistics add authority. The variety (grades, wellbeing, attendance) shows broad evidence.">Grades improve. Attendance rises. Reports of anxiety and depression drop by up to 20%.</Annotation> These schools did not crumble. They adapted. And so can we.
                </p>

                <p>
                  <Annotation note="Personal anecdote: shifts from evidence to emotional appeal. Makes the argument human and relatable.">Last month, I sat next to my friend during a maths test. She had been up since six. She had revised until midnight. She had done everything right -- everything we tell students to do. And halfway through the exam, she put her head on the desk and cried.</Annotation> Not because she didn&apos;t know the material. Because she was{" "}
                  <Annotation note="Repetition of 'too tired' -- simple, devastating. The repetition mirrors the exhaustion itself.">too tired. Too exhausted. Too broken by a system that demands she function on fumes.</Annotation>
                </p>

                <p>
                  <Annotation note="Shift to a direct, commanding tone. The speech moves from persuasion to action.">We are not asking for less work.</Annotation> We are not asking for an easier ride. We are asking for{" "}
                  <Annotation note="Anaphora: 'We are not asking... We are asking' -- the parallel structure makes the argument feel irrefutable.">the bare minimum of common sense</Annotation>: let us start the school day at a time when we are actually capable of learning.
                </p>

                <p>
                  <Annotation note="Powerful closing: uses the rule of three and imperative verbs. Ends with agency and action.">So I ask you -- all of you -- to{" "}
                  support this proposal. Talk about it. Write to the governors. Raise it at every meeting until someone listens.</Annotation>{" "}
                  <Annotation note="Final sentence returns to the personal, reflective opening ('I am tired'). Circular structure with a twist -- now tired has become a rallying cry.">Because we are tired. And we deserve better.</Annotation>
                </p>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-[success] bg-success/5 p-5">
                <p className="font-bold text-foreground">Why This Response Works</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Correct speech conventions: direct address, inclusive language, rhetorical devices</li>
                  <li>Clear structure: hook &rarr; evidence &rarr; shared experience &rarr; counter-argument &rarr; anecdote &rarr; call to action</li>
                  <li>AFOREST techniques woven in naturally: statistics, rhetorical questions, emotive language, rule of three</li>
                  <li>Counter-argument handled respectfully but firmly</li>
                  <li>Personal anecdote provides emotional grounding</li>
                  <li>Anaphora and repetition create a speech-like rhythm that works when read aloud</li>
                  <li>Circular structure: &ldquo;I am tired&rdquo; opens and closes the speech, but the meaning deepens</li>
                  <li>Ends with imperative verbs and a call to action -- the audience is told what to do</li>
                </ul>
              </div>
            </Section>

            {/* ─── COMMON MISTAKES ──────────────────────────────── */}
            <Section id="common-mistakes" title="Common Mistakes to Avoid">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Even strong writers fall into these traps. Being aware of them is the first step to
                avoiding them.
              </p>

              <div className="space-y-4">
                {[
                  {
                    mistake: "Listing techniques without using them naturally",
                    explanation: 'Weaker responses feel like a checklist: "Here is my rhetorical question. Here is my statistic. Here is my rule of three." Strong responses weave techniques into the argument so seamlessly that the reader does not notice them -- they just feel persuaded.',
                    fix: "Write your argument first, then check which techniques you have used. Add any missing ones by reworking existing sentences, not by bolting on new ones.",
                  },
                  {
                    mistake: "Ranting instead of arguing",
                    explanation: "An angry, one-note piece that shouts at the reader for six paragraphs is not persuasion -- it is a rant. Persuasion requires control, variety, and strategy. The reader should feel guided, not attacked.",
                    fix: "Vary your tone deliberately. Use the pattern: measured opening, passionate middle, calm and hopeful close.",
                  },
                  {
                    mistake: "Forgetting format conventions",
                    explanation: "Writing a speech with no direct address, an article with no headline, or a letter with no sign-off. These are easy marks lost for no reason.",
                    fix: "Before you start writing, spend 30 seconds listing the format features you need. Check them off as you write.",
                  },
                  {
                    mistake: "Using weak vocabulary",
                    explanation: '"I think this is really bad and something should be done about it." This is vague, uncertain, and forgettable. It sounds like a first draft, not a polished piece.',
                    fix: '"It is beyond question that this represents a catastrophic failure, and immediate action is not just desirable -- it is essential." Be specific. Be bold. Be precise.',
                  },
                  {
                    mistake: "No counter-argument",
                    explanation: "Ignoring the opposition makes your argument look one-sided and naive. Examiners specifically reward students who engage with the other side.",
                    fix: "Include at least one counter-argument paragraph. Use the Acknowledge-Challenge-Reassert structure.",
                  },
                  {
                    mistake: "Weak openings and endings",
                    explanation: 'Starting with "In this essay I will argue that..." or ending with "In conclusion, I think that..." These are functional but uninspired. They signal a writer who has nothing interesting to say.',
                    fix: "Open with a striking fact, a provocative question, or a bold claim. Close with a call to action, a circular reference, or a powerful final image.",
                  },
                  {
                    mistake: "Too many rhetorical questions",
                    explanation: "Three or four rhetorical questions in a row is not persuasive -- it is exhausting. It feels like the writer cannot make a statement and is hiding behind questions.",
                    fix: "Use 2-3 rhetorical questions in the entire piece, placed strategically. Follow each one with a strong declarative statement.",
                  },
                  {
                    mistake: "Ignoring the audience",
                    explanation: "Writing the same piece regardless of whether the audience is students, parents, politicians, or a general newspaper readership. Each audience needs a different approach.",
                    fix: "Before writing, ask: Who am I writing for? What do they care about? What tone and register will they respond to? What evidence will they find convincing?",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
                    <div className="flex items-stretch">
                      <div className="flex w-2 shrink-0 bg-destructive" />
                      <div className="flex-1 p-5">
                        <h4 className="font-bold text-destructive">{item.mistake}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{item.explanation}</p>
                        <div className="mt-3 rounded-lg border-l-4 border-[success] bg-success/5 px-4 py-2">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-success">Fix:</span> {item.fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Back to hub */}
            <div className="flex justify-center pt-8">
              <Link href="/resources/writing-skills" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90">
                &larr; Back to Writing Skills Hub
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
