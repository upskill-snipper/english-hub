import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/edexcel/writing-skills' },
  title: "Transactional Writing Masterclass",
  description:
    "Complete guide to transactional writing for Edexcel English Language Paper 2. Article, letter, speech, review, and essay writing conventions, formats, and techniques.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function WritingSkillsPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/english-language/edexcel"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Back to Edexcel Hub
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Transactional Writing Masterclass
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Master every writing form you could face in Paper 2 Section B. Conventions, formats, example openings,
            and mark-winning techniques for articles, letters, speeches, reviews, and essays.
          </p>
        </div>
      </section>

      {/* ── Quick nav ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card px-4 py-4 sticky top-0 z-10 shadow-md">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {["Articles", "Letters", "Speeches", "Reviews", "Essays", "Universal Tips"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(" ", "-")}`}
              className="rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:bg-primary/15 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ARTICLES */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="articles" className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Article Writing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Articles are one of the most common forms in Paper 2. They appear in newspapers, magazines, or online publications
            and can inform, persuade, argue, or entertain.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-primary">Essential Conventions</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">1</span>
                <div>
                  <p className="font-semibold text-foreground">Headline</p>
                  <p className="text-sm text-muted-foreground">
                    Short, punchy, and attention-grabbing. Can use alliteration, wordplay, or a provocative statement.
                    Write it in bold or underlined.
                  </p>
                  <p className="mt-1 text-sm italic text-primary">Example: &ldquo;Screen Time: The Silent Thief of Childhood&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">2</span>
                <div>
                  <p className="font-semibold text-foreground">Subheading (optional)</p>
                  <p className="text-sm text-muted-foreground">
                    A secondary line that expands on the headline or gives context.
                  </p>
                  <p className="mt-1 text-sm italic text-primary">Example: &ldquo;Why experts say our children are spending too long on devices &mdash; and what parents can do about it&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">3</span>
                <div>
                  <p className="font-semibold text-foreground">Byline (optional)</p>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;By [Your Name]&rdquo; &mdash; shows awareness of form conventions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">4</span>
                <div>
                  <p className="font-semibold text-foreground">Engaging Opening</p>
                  <p className="text-sm text-muted-foreground">
                    Hook the reader immediately. Use a rhetorical question, a shocking statistic, a bold statement, or an anecdote.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">5</span>
                <div>
                  <p className="font-semibold text-foreground">Structured Body</p>
                  <p className="text-sm text-muted-foreground">
                    Clear paragraphs with topic sentences. Use discourse markers (&ldquo;Furthermore,&rdquo; &ldquo;However,&rdquo; &ldquo;On the other hand&rdquo;).
                    Include a range of evidence: statistics (real or plausible), expert opinions, anecdotes, examples.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">6</span>
                <div>
                  <p className="font-semibold text-foreground">Strong Conclusion</p>
                  <p className="text-sm text-muted-foreground">
                    Return to your main argument. End with a call to action, a thought-provoking question, or a memorable final line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-accent bg-primary/10 p-6">
            <h3 className="font-bold text-primary">Example Article Opening</h3>
            <div className="mt-3 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-bold text-lg text-foreground">The Library Is Dying &mdash; And Nobody Seems to Care</p>
              <p className="text-xs italic text-muted-foreground">By J. Carter</p>
              <p>
                Picture this. It is a Tuesday afternoon and the local library &mdash; the one your grandmother used,
                the one where you read your first chapter book, the one with the creaky floorboards and the smell of
                decades &mdash; is empty. Not just quiet. Empty. The shelves are still there, but the council has already
                decided their fate. By March, this building will be a car park.
              </p>
              <p>
                Across the country, 800 libraries have closed since 2010. Eight hundred. That is not a statistic; it is
                a cultural catastrophe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* LETTERS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="letters" className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Letter Writing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Letters can be formal or informal depending on the audience. In exams, you are usually writing a formal letter
            to someone in authority (headteacher, MP, newspaper editor, council leader).
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Formal letter */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-primary">Formal Letter Format</h3>
              <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-foreground font-mono leading-relaxed space-y-2">
                <p>[Your address]</p>
                <p>[Town/City]</p>
                <p>[Postcode]</p>
                <p className="mt-2">[Date]</p>
                <p className="mt-2">[Recipient&rsquo;s name/title]</p>
                <p>[Their address]</p>
                <p className="mt-2">Dear Mr/Mrs/Ms [Surname],</p>
                <p className="mt-2 italic text-muted-foreground">[Body paragraphs]</p>
                <p className="mt-2">Yours sincerely,</p>
                <p>[Your name]</p>
              </div>
              <div className="mt-4 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Key rules:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; If you know the name: &ldquo;Dear Mr Smith&rdquo; &rarr; &ldquo;Yours sincerely&rdquo;</li>
                  <li>&bull; If you don&rsquo;t: &ldquo;Dear Sir/Madam&rdquo; &rarr; &ldquo;Yours faithfully&rdquo;</li>
                  <li>&bull; Formal register throughout &mdash; no slang, no contractions ideally</li>
                  <li>&bull; State your purpose in the first paragraph</li>
                </ul>
              </div>
            </div>

            {/* Informal letter */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-accent">Informal Letter Format</h3>
              <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-foreground font-mono leading-relaxed space-y-2">
                <p>[Your address]</p>
                <p>[Date]</p>
                <p className="mt-2">Dear [First name],</p>
                <p className="mt-2 italic text-muted-foreground">[Body paragraphs &mdash; personal, warm tone]</p>
                <p className="mt-2">Best wishes / Love / See you soon,</p>
                <p>[Your name]</p>
              </div>
              <div className="mt-4 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Key rules:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Conversational but still well-written</li>
                  <li>&bull; Contractions are acceptable (&ldquo;I&rsquo;m,&rdquo; &ldquo;don&rsquo;t&rdquo;)</li>
                  <li>&bull; Personal anecdotes and humour are welcome</li>
                  <li>&bull; Still needs clear paragraphing and varied sentences</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/10 p-6">
            <h3 className="font-bold text-primary">Example Formal Letter Opening</h3>
            <div className="mt-3 text-sm text-foreground leading-relaxed space-y-2">
              <p>Dear Ms Thornton,</p>
              <p>
                I am writing to express my deep concern regarding the proposed closure of Greenfield Community Centre.
                As a resident of Greenfield for over fifteen years and a regular user of the centre&rsquo;s facilities,
                I feel compelled to outline the devastating impact this decision would have on our community.
              </p>
              <p>
                The centre is far more than a building. It is the heartbeat of our neighbourhood &mdash; a place where
                elderly residents gather for companionship, where young people find safe spaces after school, and where
                families from all backgrounds come together. To close it would be to sever the very connections that make
                Greenfield a community rather than merely a collection of houses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SPEECHES */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="speeches" className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Speech Writing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A speech is written to be <strong>heard</strong>, not read. It needs to sound natural, use rhetorical devices,
            and engage the audience directly. Think of it as a conversation with a large group &mdash; you need rhythm,
            emotion, and a clear call to action.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-primary">Speech Writing Toolkit</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  technique: "Direct Address",
                  how: "Use 'you', 'we', 'us' throughout. Open with 'Ladies and gentlemen,' or address the specific audience.",
                },
                {
                  technique: "Rhetorical Questions",
                  how: "Ask questions that make the audience think: 'Is this really the world we want to leave our children?'",
                },
                {
                  technique: "Anaphora (Repetition)",
                  how: "Repeat a phrase at the start of sentences: 'We deserve better. We deserve fairness. We deserve a voice.'",
                },
                {
                  technique: "Tricolon (Rule of Three)",
                  how: "Group ideas in threes: 'It is unjust, it is unnecessary, and it is unacceptable.'",
                },
                {
                  technique: "Emotive Language",
                  how: "Choose words that provoke feelings: 'abandoned', 'neglected', 'betrayed', 'silenced'.",
                },
                {
                  technique: "Personal Anecdotes",
                  how: "Share a story: 'I remember the day my younger brother came home from school in tears...'",
                },
                {
                  technique: "Counter-Arguments",
                  how: "Acknowledge the other side then refute it: 'Some will say... but I ask you this...'",
                },
                {
                  technique: "Call to Action",
                  how: "End with a clear instruction: 'Stand up. Speak out. Make your voices heard.'",
                },
              ].map((item) => (
                <div key={item.technique} className="rounded-lg bg-muted p-4">
                  <p className="font-semibold text-foreground">{item.technique}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.how}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-accent bg-primary/10 p-6">
            <h3 className="font-bold text-primary">Example Speech Opening</h3>
            <div className="mt-3 text-sm text-foreground leading-relaxed space-y-2">
              <p className="italic text-muted-foreground">Task: Write a speech to your year group arguing that social media does more harm than good.</p>
              <p className="mt-3">
                Good morning, everyone. Before I begin, I want you to do something for me. Look at the person sitting next
                to you. Go on &mdash; actually look at them. Notice their expression. Are they paying attention? Are they here,
                in this moment, with us? Or &mdash; and be honest &mdash; are they thinking about their phone?
              </p>
              <p>
                I am not judging. I am guilty of it too. We all are. Because the truth is, we have become a generation that
                is more connected than ever and yet more lonely than we have ever been. We have a thousand followers and no
                one to talk to. We curate our lives for strangers and forget to live them for ourselves.
              </p>
              <p>
                And I think it is time we talked about why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* REVIEWS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="reviews" className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Review Writing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Reviews evaluate something &mdash; a film, book, restaurant, product, or event &mdash; and offer a personal opinion
            supported by evidence. The key is a <strong>distinctive voice</strong> that balances opinion with description.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-primary">Review Structure</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                <div>
                  <p className="font-semibold text-foreground">Headline</p>
                  <p className="text-sm text-muted-foreground">Catchy title that hints at your overall opinion.</p>
                  <p className="mt-1 text-sm italic text-primary">Example: &ldquo;A Feast for the Eyes, a Famine for the Taste Buds&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                <div>
                  <p className="font-semibold text-foreground">Introduction</p>
                  <p className="text-sm text-muted-foreground">Briefly introduce what you are reviewing and give an overall impression.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                <div>
                  <p className="font-semibold text-foreground">Detailed Evaluation</p>
                  <p className="text-sm text-muted-foreground">
                    Discuss specific aspects (e.g., atmosphere, service, acting, plot, design). Use descriptive language and
                    give your opinion on each. Include positives and negatives for balance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                <div>
                  <p className="font-semibold text-foreground">Personal Voice</p>
                  <p className="text-sm text-muted-foreground">
                    Use first person (&ldquo;I&rdquo;), share your personal experience, and let your personality come through.
                    Humour, wit, and vivid descriptions are welcome.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">5</span>
                <div>
                  <p className="font-semibold text-foreground">Conclusion &amp; Recommendation</p>
                  <p className="text-sm text-muted-foreground">
                    Summarise your overall verdict. Would you recommend it? To whom? A star rating is optional but shows form awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/10 p-6">
            <h3 className="font-bold text-primary">Example Review Opening</h3>
            <div className="mt-3 text-sm text-foreground leading-relaxed space-y-2">
              <p className="font-bold text-lg text-foreground">More Style Than Substance: A Review of The Jade Dragon</p>
              <p className="text-xs text-muted-foreground">Rating: 3/5</p>
              <p>
                The Jade Dragon wants you to be impressed, and for the first five minutes, you are. The restaurant is
                stunning &mdash; all exposed brick, hanging lanterns, and the kind of moody lighting that makes everyone
                look like a film star. The menu is a work of art, hand-printed on textured card with descriptions that
                read like love letters to each dish. &ldquo;Pan-seared sea bass with a whisper of yuzu and micro herbs
                foraged from the Kentish hillside.&rdquo; It sounds extraordinary.
              </p>
              <p>
                The problem is, it tastes ordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ESSAYS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="essays" className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Essay Writing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            An essay presents a structured argument or discussion on a given topic. Unlike articles, essays do not need
            headlines or bylines &mdash; they are structured around a clear thesis, developed paragraphs, and a conclusion.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-primary">Essay Structure</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-semibold text-foreground">Introduction</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Open with a hook: a question, a quotation, or a bold statement</li>
                  <li>&bull; Introduce the topic and its relevance</li>
                  <li>&bull; State your thesis &mdash; your main argument or position</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="font-semibold text-foreground">Body Paragraphs (3-4)</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Each paragraph = one main point supporting your thesis</li>
                  <li>&bull; Use the <strong>PEEL</strong> structure: Point, Evidence, Explain, Link</li>
                  <li>&bull; Include counter-arguments and rebut them</li>
                  <li>&bull; Use discourse markers: &ldquo;Furthermore,&rdquo; &ldquo;However,&rdquo; &ldquo;Consequently,&rdquo; &ldquo;In addition&rdquo;</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="font-semibold text-foreground">Conclusion</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Summarise your key arguments (do not introduce new points)</li>
                  <li>&bull; Restate your thesis in a new way</li>
                  <li>&bull; End with a thought-provoking final line or call to reflection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-accent bg-primary/10 p-6">
            <h3 className="font-bold text-primary">Example Essay Opening</h3>
            <div className="mt-3 text-sm text-foreground leading-relaxed space-y-2">
              <p className="italic text-muted-foreground">Task: &ldquo;School uniform stifles individuality.&rdquo; Write an essay in which you argue for or against this statement.</p>
              <p className="mt-3">
                Every morning, millions of students across the country perform the same ritual: they pull on the same
                blazer, knot the same tie, and step out of the door looking indistinguishable from the person next door.
                School uniform, its defenders argue, creates equality, discipline, and a sense of belonging. But at what cost?
              </p>
              <p>
                I would argue that the cost is too high. While uniform may create the illusion of equality, it does so by
                suppressing the very thing that education should celebrate: the individual. In an age where we teach students
                to think independently, to express themselves, and to challenge the status quo, it is deeply contradictory
                to begin each day by demanding they all look the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* UNIVERSAL TIPS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="universal-tips" className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Universal Writing Tips</h2>
          <p className="mt-3 text-muted-foreground">
            These principles apply to every form of transactional writing and will help you hit the top mark-scheme levels.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-primary">Planning (5 minutes)</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Identify the <strong>form</strong>, <strong>audience</strong>, and <strong>purpose</strong> (FAP)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Brainstorm 4-5 key points or arguments
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Plan your opening and closing lines
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Note any techniques you want to include (tricolon, anecdote, statistics)
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-accent">Vocabulary (AO6)</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Use ambitious vocabulary but only words you are confident spelling
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Replace basic words: &ldquo;good&rdquo; &rarr; &ldquo;commendable&rdquo;, &ldquo;bad&rdquo; &rarr; &ldquo;detrimental&rdquo;, &ldquo;big&rdquo; &rarr; &ldquo;substantial&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Use subject-specific vocabulary where relevant
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Avoid repetition &mdash; use synonyms
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-success">Sentence Variety (AO6)</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  <strong>Simple:</strong> &ldquo;Education matters.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  <strong>Compound:</strong> &ldquo;Education matters, and yet we continue to underfund it.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  <strong>Complex:</strong> &ldquo;Although funding has increased on paper, the reality in classrooms tells a different story.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  <strong>Minor:</strong> &ldquo;Unacceptable.&rdquo; (one-word sentence for impact)
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-warn">Punctuation Variety (AO6)</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Semicolons:</strong> link related clauses &mdash; &ldquo;The sun set; the city held its breath.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Colons:</strong> introduce a list or explanation &mdash; &ldquo;There was one problem: nobody was listening.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Dashes:</strong> for parenthetical asides &mdash; &ldquo;The school &mdash; once a beacon of hope &mdash; now stood empty.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Ellipsis:</strong> create suspense or trailing thought &mdash; &ldquo;And then she realised...&rdquo;
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="text-lg font-bold text-foreground">Proofreading Checklist (Final 5 Minutes)</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Capital letters at the start of every sentence",
                "Full stops, question marks, or exclamation marks at the end of every sentence",
                "Commas used correctly (not comma splicing)",
                "Paragraphs for each new point or topic shift",
                "Homophones correct: their/there/they're, your/you're, its/it's, affect/effect",
                "Consistent tense (do not switch between past and present)",
                "Subject-verb agreement (\"the group was\" not \"the group were\")",
                "Form conventions present (headline for article, addresses for letter, etc.)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border bg-card" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
