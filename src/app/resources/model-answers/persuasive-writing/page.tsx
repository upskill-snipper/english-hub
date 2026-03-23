import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Model Persuasive & Transactional Writing | The English Hub",
  description:
    "Model articles, speeches, and letters for GCSE English Language with annotations highlighting rhetorical devices, structural choices, and persuasive techniques.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-primary/10 px-1 py-0.5 text-foreground border-b-2 border-dashed border-[#2E86C1]/40 cursor-help">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-60 -translate-x-1/2 rounded-lg bg-[#1A5276] px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#1A5276]" />
      </span>
    </span>
  );
}

/* ─── Examiner comment ───────────────────────────────────────── */

function ExaminerComment({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-[#2E86C1] bg-primary/5 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
        Examiner Commentary
      </p>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-[#2E86C1]/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PersuasiveWritingPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Persuasive &amp; Transactional Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Model articles, speeches, and letters with annotations showing you how to deploy
            rhetorical devices, structure an argument, and write with purpose and flair.
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
          <li><Link href="/resources/model-answers" className="hover:text-foreground transition-colors">Model Answers</Link></li>
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
                { id: "article", label: "Article" },
                { id: "speech", label: "Speech" },
                { id: "letter", label: "Letter" },
                { id: "techniques", label: "Key Techniques" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">

            {/* ─── ARTICLE ─────────────────────────────────────── */}
            <Section id="article" title="Model Article">
              <div className="rounded-xl border border-border bg-card p-6 shadow-md mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Task</p>
                <p className="text-foreground font-medium">
                  &lsquo;Young people spend too much time on their phones.&rsquo;
                  Write an article for a broadsheet newspaper in which you argue for or against this view.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <h3 className="text-lg font-bold text-foreground mt-0">
                    <Annotation note="Headline uses a rhetorical question and wordplay ('disconnected' has a double meaning). This immediately engages the reader and signals the article's argument.">
                      Are We Really the Disconnected Generation?
                    </Annotation>
                  </h3>
                  <p className="text-sm italic text-muted-foreground">
                    <Annotation note="Subheading establishes the article's stance clearly. This is a key convention of broadsheet journalism.">
                      Far from destroying communication, smartphones have transformed it &mdash; and it is time we stopped
                      blaming young people for adapting.
                    </Annotation>
                  </p>

                  <p>
                    <Annotation note="Direct address ('you') and an imperative ('picture') immediately involve the reader. Starting with a concrete scenario is more engaging than an abstract statement.">
                      Picture this: a family restaurant, Saturday evening.
                    </Annotation>{" "}
                    At the corner table, a teenager scrolls through her phone while her parents exchange weary glances.
                    The scene is familiar, almost cliched &mdash; and it is precisely this familiarity that should make us
                    suspicious of it. Because what the hand-wringing commentators never mention is what she is actually
                    <em>doing</em> on that phone:
                    <Annotation note="Rule of three (tricolon) with increasing significance — moves from personal to political to undermine the reader's assumptions.">
                      organising a fundraiser for her school&apos;s food bank, responding to a friend in crisis,
                      reading an article about climate policy
                    </Annotation>.
                    Not quite the zombie apocalypse we were promised.
                  </p>

                  <p>
                    <Annotation note="Topic sentence that clearly signals the paragraph's argument. Each paragraph should advance the argument, not just add another point.">
                      The charge that young people are &ldquo;addicted&rdquo; to their phones collapses under scrutiny.
                    </Annotation>{" "}
                    Research from the Oxford Internet Institute &mdash;
                    <Annotation note="Use of a specific, credible source adds authority. Naming the institution is more convincing than 'studies show.'">
                      hardly a bastion of teenage rebellion
                    </Annotation> &mdash;
                    found that the effect of screen time on wellbeing is roughly equivalent to that of eating potatoes.
                    <Annotation note="Humour used strategically to deflate the opposing argument. The comparison is memorable and undermining.">
                      Nobody is writing op-eds about the Potato Generation.
                    </Annotation>
                  </p>

                  <p>
                    <Annotation note="Counter-argument acknowledged and then rebutted. This is essential for a balanced, convincing argument.">
                      Of course, there are legitimate concerns.
                    </Annotation>{" "}
                    Social media can amplify anxiety; the dopamine loops of infinite scrolling are
                    deliberately engineered; cyberbullying is real and devastating. But to blame the phone is to
                    <Annotation note="Analogy strengthens the rebuttal by exposing the logical flaw in the opposing argument.">
                      blame the postbox for the poison pen letter
                    </Annotation>.
                    The issues are human, not technological. And it is worth noting that the adults who
                    designed these platforms are rarely subjected to the same moral panic they so eagerly
                    direct at their youngest users.
                  </p>

                  <p>
                    <Annotation note="Strong concluding paragraph that returns to the opening image (circular structure) and ends with a memorable, punchy final sentence.">
                      So the next time you see a teenager on their phone in a restaurant, resist the urge
                      to tut. Ask them what they are doing. You might be surprised. You might even learn something.
                    </Annotation>
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  An accomplished article that demonstrates all the conventions of broadsheet journalism: a compelling headline,
                  a clear subheading, a concrete opening scenario, and a sustained argument with evidence and counter-argument.
                  The tone is confident and assured without being aggressive, and the rhetorical devices (tricolon, analogy,
                  direct address, humour) are deployed with precision. The circular structure is satisfying, and the final
                  short sentences create a memorable ending. Marks: 40/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── SPEECH ──────────────────────────────────────── */}
            <Section id="speech" title="Model Speech">
              <div className="rounded-xl border border-border bg-card p-6 shadow-md mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Task</p>
                <p className="text-foreground font-medium">
                  Write a speech to deliver to your year group persuading them that volunteering should be
                  a compulsory part of the school curriculum.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <Annotation note="Direct address to the audience. Using their shared identity ('we') establishes rapport and positions the speaker as one of them, not above them.">
                      We have all sat through assemblies where someone tells us to &ldquo;give back to the community.&rdquo;
                    </Annotation>{" "}
                    We nod. We clap. We forget.
                    <Annotation note="Minor sentences in a tricolon create rhythm and humour. The pattern of decreasing engagement mirrors the audience's experience and builds trust through honesty.">
                      And nothing changes.
                    </Annotation>
                  </p>

                  <p>
                    I am not here to give you another one of those speeches.
                    <Annotation note="Metacommentary — the speaker acknowledges the genre and subverts it. This is a sophisticated way of maintaining audience attention.">
                      I am here to argue that volunteering should not be optional &mdash; not because it looks good on a
                      university application, not because adults say so, but because it is the single most
                      effective way of understanding a world that extends beyond these school gates.
                    </Annotation>
                  </p>

                  <p>
                    <Annotation note="Anecdote used as evidence. Personal stories are more persuasive than statistics in a speech because they create emotional connection.">
                      Last summer, I spent two weeks at a care home in town.
                    </Annotation>{" "}
                    I did not want to go. My parents made me. For the first three days, I counted the hours.
                    By the end of the first week, I had stopped counting.
                    <Annotation note="Structural shift from resistance to engagement mirrors the argument the speaker is making. The writing enacts its own thesis.">
                      A woman called Margaret told me about growing up during the war, about losing her brother,
                      about dancing at the Ritz on VE Day.
                    </Annotation>{" "}
                    In two weeks, I learned more about resilience, loss, and joy than I had in five years of PSHE lessons.
                  </p>

                  <p>
                    <Annotation note="Rhetorical question directed at the audience. The pause implied by the question mark creates space for reflection.">
                      Now, I know what some of you are thinking: &ldquo;I already have enough homework.
                      I already have enough pressure. Why add something else?&rdquo;
                    </Annotation>{" "}
                    And that is a fair point. But consider this:
                    <Annotation note="Statistic used strategically — placed after the emotional anecdote for maximum impact.">
                      a 2024 study by the National Youth Agency found that students who volunteer regularly
                      report higher levels of confidence, lower levels of anxiety, and better academic performance
                    </Annotation>.
                    Volunteering does not add to your burden. It
                    <Annotation note="Metaphor that reframes the argument. Instead of volunteering being 'another thing to do,' it becomes something that helps with everything else.">
                      lightens it
                    </Annotation>.
                  </p>

                  <p>
                    <Annotation note="Call to action — essential in any speech. The shift from 'I' to 'we' to 'you' creates a sense of shared purpose that narrows to personal responsibility.">
                      So here is what I am asking. Not that you sign up tomorrow. Not that you sacrifice your weekends.
                      Just that you consider it. Talk to someone who has done it. Give it one afternoon.
                    </Annotation>{" "}
                    Because the world outside these walls is messy, complicated, and sometimes heartbreaking &mdash;
                    and it needs people who have looked it in the eye and chosen to help anyway.
                    <Annotation note="Powerful final sentence that elevates the argument from practical to moral. The imagery ('looked it in the eye') is vivid and memorable.">
                      That is not a burden. That is a privilege.
                    </Annotation>
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  An engaging, well-structured speech that demonstrates clear awareness of audience and purpose. The opening
                  is honest and self-aware, which immediately builds credibility. The anecdote is specific and moving without
                  being sentimental. The counter-argument is addressed directly, and the call to action is measured rather
                  than aggressive. Rhetorical devices are used throughout but never feel forced. The shift in register from
                  conversational to impassioned in the final paragraph is particularly effective. Marks: 38/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── LETTER ──────────────────────────────────────── */}
            <Section id="letter" title="Model Letter">
              <div className="rounded-xl border border-border bg-card p-6 shadow-md mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Task</p>
                <p className="text-foreground font-medium">
                  Write a letter to your local council arguing that more green spaces should be created in your area.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p className="text-sm text-muted-foreground">
                    <Annotation note="Formal letter conventions: address and date. These are easy marks that students often forget. Always include them.">
                      14 Oakfield Road<br />
                      Prestbury<br />
                      GL52 3DL<br /><br />
                      23 March 2026
                    </Annotation>
                  </p>

                  <p>
                    <Annotation note="Formal salutation. 'Dear Councillor' is more specific and effective than 'Dear Sir/Madam' — it shows you know who you are writing to.">
                      Dear Councillor Hargreaves,
                    </Annotation>
                  </p>

                  <p>
                    <Annotation note="Opening paragraph states purpose clearly and formally. The tone is respectful but assertive — appropriate for writing to a figure of authority.">
                      I am writing to urge the council to prioritise the creation of additional green spaces
                      in the Prestbury and Bishops Cleeve area.
                    </Annotation>{" "}
                    As a resident of fourteen years, I have watched with growing concern as playing fields have been
                    sold to developers and community gardens left to deteriorate. I believe this trend is not only
                    damaging to public health but
                    <Annotation note="Framing the issue as both a health and an economic concern makes the argument harder to dismiss. Councillors respond to economic arguments.">
                      economically short-sighted
                    </Annotation>.
                  </p>

                  <p>
                    <Annotation note="Evidence-based paragraph. The specific statistic and named source add credibility. The logical structure (claim, evidence, implication) is clear.">
                      The evidence for the benefits of green spaces is overwhelming.
                    </Annotation>{" "}
                    A 2023 report by Public Health England found that access to green space reduces the risk of
                    cardiovascular disease by 16% and depression by 33%. In an area where GP waiting times
                    already exceed three weeks, investing in prevention is not a luxury &mdash; it is a necessity.
                    Every pound spent on a park is a pound saved by the NHS.
                  </p>

                  <p>
                    Moreover, green spaces foster the kind of community cohesion that
                    <Annotation note="Connects the argument to local concerns. This shows the writer understands their audience and tailors the argument accordingly.">
                      our area desperately needs
                    </Annotation>.
                    The closure of the Pittville youth centre last year left young people with nowhere to go &mdash;
                    a fact reflected in the 40% increase in anti-social behaviour reports logged by
                    Gloucestershire Police. A well-designed green space &mdash; with seating, shelter, and purpose &mdash;
                    offers an alternative:
                    <Annotation note="Rule of three with parallel structure. The final item ('a reason to stay') is the most emotionally resonant, creating a climactic effect.">
                      a place to meet, a place to play, a reason to stay
                    </Annotation>.
                  </p>

                  <p>
                    <Annotation note="Anticipates and addresses the likely counter-argument (cost). Providing a specific, practical alternative shows the writer is solution-oriented, not just complaining.">
                      I understand that budgets are constrained.
                    </Annotation>{" "}
                    However, I would respectfully point out that the council approved &pound;2.4 million for
                    a car park extension last quarter. If we can find money for cars, surely we can find it
                    for children. I would welcome the opportunity to discuss community-led funding models,
                    including the parish precept and Section 106 agreements, which could supplement council investment.
                  </p>

                  <p>
                    <Annotation note="Formal closing that restates the request and offers to continue the conversation. Polite but firm — the hallmark of effective formal writing.">
                      I look forward to your response and would be happy to meet at your convenience to
                      discuss this further.
                    </Annotation>
                  </p>

                  <p>
                    Yours sincerely,<br />
                    <Annotation note="'Yours sincerely' (not 'Yours faithfully') because the letter is addressed to a named person. This is a convention students must know.">
                      A. Morgan
                    </Annotation>
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  A polished formal letter that demonstrates sophisticated understanding of audience, purpose, and form.
                  The tone is consistently appropriate &mdash; respectful but assertive. The argument is logically structured
                  with evidence, counter-argument, and a practical alternative. The writer uses local detail convincingly,
                  and the formal conventions (address, salutation, sign-off) are all correct. The sentence about cars and
                  children is a particularly effective rhetorical moment. Marks: 39/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── KEY TECHNIQUES ──────────────────────────────── */}
            <Section id="techniques" title="Key Persuasive Techniques">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Master these techniques to elevate your transactional writing from competent to compelling.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "DAFOREST",
                    items: [
                      { label: "D", desc: "Direct address" },
                      { label: "A", desc: "Alliteration" },
                      { label: "F", desc: "Facts & figures" },
                      { label: "O", desc: "Opinions (presented as facts)" },
                      { label: "R", desc: "Rhetorical questions" },
                      { label: "E", desc: "Emotive language" },
                      { label: "S", desc: "Statistics" },
                      { label: "T", desc: "Tricolon (rule of three)" },
                    ],
                  },
                ].map((group) => (
                  <div key={group.name} className="col-span-full rounded-xl border border-border bg-card p-6 shadow-md">
                    <h4 className="font-bold text-foreground text-lg mb-4">{group.name}</h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {group.items.map((item) => (
                        <div key={item.label} className="flex items-start gap-3 rounded-lg bg-muted p-3">
                          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-sm font-bold text-white">
                            {item.label}
                          </span>
                          <span className="text-sm text-muted-foreground pt-1">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Know Your Form",
                    desc: "Articles need headlines and subheadings. Speeches need direct address and rhetorical questions. Letters need addresses and formal sign-offs. Missing conventions costs marks.",
                  },
                  {
                    name: "Counter-Argument",
                    desc: "Always acknowledge the other side before rebutting it. This shows maturity and makes your argument more convincing: 'While some may argue... however...'",
                  },
                  {
                    name: "Tone Matching",
                    desc: "A letter to a headteacher requires a different tone from a magazine article for teenagers. Always consider who is reading and adjust your register accordingly.",
                  },
                  {
                    name: "Strategic Structure",
                    desc: "Open with impact, build with evidence, close with a call to action. Your strongest point should be either first (for immediate impact) or last (for lasting impression).",
                  },
                ].map((tech) => (
                  <div key={tech.name} className="rounded-xl border border-border bg-card p-5 shadow-md">
                    <h4 className="font-bold text-foreground">{tech.name}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
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
