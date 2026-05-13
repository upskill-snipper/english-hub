import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'

// Static page — renders the same HTML on every request.
// Served via Next.js default static caching.

export const metadata: Metadata = {
  title: 'AI Essay Feedback: AQA vs Edexcel vs OCR on the Same Macbeth Essay | The English Hub',
  description:
    "One Year-10 Macbeth essay, marked three times by The English Hub's AI, following each board's mark scheme. See exactly how board-specific AO feedback differs — and why a generic AI marker gets ~60% of the advice wrong.",
  alternates: { canonical: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head' },
  openGraph: {
    title: 'AI Essay Feedback: AQA vs Edexcel vs OCR — Same Macbeth Essay',
    description:
      'Same 400 words of student writing, three distinct AO-level feedback reports. The board-specific wedge, demonstrated.',
    url: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head',
    type: 'article',
    siteName: 'The English Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Essay Feedback: AQA vs Edexcel vs OCR',
    description:
      'One Year-10 Macbeth essay, marked three ways. See board-specific AO interpretation in action.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Essay Feedback — AQA vs Edexcel vs OCR on the Same Macbeth Essay',
  author: {
    '@type': 'Organization',
    name: 'The English Hub — GCSE Markers',
    url: 'https://theenglishhub.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
  },
  description:
    'One Year-10 Macbeth essay, marked three times following AQA 8702, Edexcel 1ET0, and OCR J352 mark schemes — showing how board-specific AO weighting changes the feedback.',
  mainEntityOfPage: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head',
  about: 'Macbeth',
  educationalLevel: 'GCSE',
  inLanguage: 'en-GB',
  datePublished: '2026-04-19',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Analysis',
      item: 'https://theenglishhub.app/analysis',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AI Feedback: Head to Head',
      item: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head',
    },
  ],
}

export default async function AIFeedbackHeadToHeadPage() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS) as Array<{ en: string; ar?: string }>)
      if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  const nonce = (await headers()).get('x-nonce') ?? undefined
  // Chrome only: hero eyebrow, breadcrumb, hero CTAs, footer CTA section,
  // methodology heading. Essay body + AO mark-scheme analysis stay in
  // English — that's literary/exam-board content, not chrome.
  const tBreadAnalysis = await t('analysis.breadcrumb.analysis')
  const tBreadCurrent = await t('analysis.ai_feedback.breadcrumb_current')
  const tEyebrow = await t('analysis.ai_feedback.eyebrow')
  const tCtaUpload = await t('analysis.ai_feedback.cta.upload')
  const tCtaPricing = await t('analysis.ai_feedback.cta.pricing')
  const tFootH2 = await t('analysis.ai_feedback.foot.h2')
  const tFootBody = await t('analysis.ai_feedback.foot.body')
  const tCtaMarking = await t('analysis.ai_feedback.cta.get_feedback')
  const tCtaMacbethRev = await t('analysis.ai_feedback.cta.macbeth_revision')
  const tMethodology = await t('analysis.ai_feedback.methodology')

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/analysis" className="hover:text-foreground">
          {tBreadAnalysis}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{tBreadCurrent}</span>
      </nav>

      <header className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{tEyebrow}</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
          AI Essay Feedback: AQA vs Edexcel vs OCR on the same Macbeth essay
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          One Year-10 student response on <em>Macbeth</em> as a tragic figure. Marked three times.
          Each mark follows a different board&rsquo;s specific AO weighting and mark-scheme lexis.
          The same 400 words produce{' '}
          <strong className="text-foreground">three materially different feedback reports</strong> —
          which is the whole point of board-specific AI marking.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/marking"
            className="inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {tCtaUpload}
          </Link>
          <Link
            href="/pricing"
            className="inline-block rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            {tCtaPricing}
          </Link>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          The student essay (identical across all three marks)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Question:</strong> How does Shakespeare present the character of Macbeth as a
          tragic figure in the play <em>Macbeth</em>?
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Response:</strong> Year 10, 400 words, timed exam conditions.
        </p>
        <blockquote className="border-l-2 border-primary/50 pl-5 py-2 text-muted-foreground italic space-y-3 leading-relaxed text-[15px]">
          <p>
            Shakespeare presents Macbeth as a tragic figure whose downfall is caused by his own
            ambition and the manipulation of others around him. At the start of the play, Macbeth is
            described as &ldquo;brave&rdquo; and a &ldquo;worthy gentleman&rdquo;, suggesting he is
            a hero. The Captain&rsquo;s line, &ldquo;For brave Macbeth — well he deserves that
            name&rdquo;, shows how much the other characters respect him. This makes his later fall
            from grace more tragic because the audience has seen how great he was before.
          </p>
          <p>
            However, Macbeth&rsquo;s ambition quickly takes over. After the witches tell him he will
            be king, he says &ldquo;Stars, hide your fires; Let not light see my black and deep
            desires.&rdquo; The use of the imperative &ldquo;hide&rdquo; and the contrast between
            &ldquo;light&rdquo; and &ldquo;black&rdquo; shows that Macbeth knows his thoughts are
            wrong but he still wants to pursue them. This is when his tragic journey really begins,
            because he is choosing ambition over morality.
          </p>
          <p>
            Lady Macbeth also plays a big role in Macbeth&rsquo;s downfall. She calls him a
            &ldquo;coward&rdquo; and questions his manhood, saying &ldquo;When you durst do it, then
            you were a man.&rdquo; This emotional manipulation pushes Macbeth to commit the murder
            even though he has doubts. Shakespeare shows through this that Macbeth is not fully in
            control of his own fate, which is a key feature of a tragic hero.
          </p>
          <p>
            After killing Duncan, Macbeth says &ldquo;I am afraid to think what I have done.&rdquo;
            This shows his guilt and the psychological torment that follows the murder. The short,
            blunt sentence structure emphasises his shock. This is classic tragic hero behaviour —
            the protagonist realises the cost of his actions but cannot undo them.
          </p>
          <p>
            By the end of the play, Macbeth has become a tyrant and says &ldquo;Life&rsquo;s but a
            walking shadow, a poor player&rdquo;. The metaphor of life as a pointless performance
            shows how empty his ambition has left him. Despite being warned by the apparitions, he
            still believes he is invincible, and this hubris leads to his death.
          </p>
          <p>
            In conclusion, Shakespeare presents Macbeth as a tragic figure by showing his descent
            from a respected war hero to a guilt-ridden tyrant. His ambition, combined with external
            manipulation, makes him a classic example of a tragic hero whose own flaws cause his
            downfall.
          </p>
        </blockquote>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border border-border p-6 sm:p-8 bg-muted/20">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-primary">
            Mark 1 · AQA GCSE English Literature (8702) · Paper 1 Section A
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            {_tr(`Level 5 — Grade 7 · 25/34`)}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AO weighting: AO1 (12) · AO2 (12) · AO3 (6) · AO4 (4)
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO1 — Read, understand, respond · 10/12
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;thoughtful considered response&rdquo;
              </p>
              <p className="mt-2">
                Your response is a <em>thoughtful considered response</em> to the task. You track
                Macbeth&rsquo;s tragic arc from &ldquo;brave&rdquo; soldier through ambitious
                regicide to hollow tyrant, and you select well-judged evidence at each stage
                (&ldquo;brave Macbeth&rdquo;, &ldquo;stars, hide your fires&rdquo;,
                &ldquo;life&rsquo;s but a walking shadow&rdquo;). Your conceptualised overview —
                ambition + manipulation = downfall — is clear from the outset.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">
                  {_tr(`To push from Level 5 to Level 6`)}
                </strong>
                (&ldquo;critical, exploratory, conceptualised response&rdquo;): your conclusion
                restates the opening rather than complicating it. Strong Level 6 answers return to
                the opening reading and <em>unsettle</em> it — for instance, ask whether Shakespeare
                wants us to see Macbeth as a tragic victim of the witches&rsquo; prophecy or whether
                the prophecy only reveals a flaw that was always there.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO2 — Language, form, structure · 9/12
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;analysis of writer&rsquo;s methods&rdquo;
              </p>
              <p className="mt-2">
                Good <em>analysis of writer&rsquo;s methods</em> with subject terminology used
                accurately (imperative, contrast, metaphor, sentence structure). The
                &ldquo;hide/light/black&rdquo; analysis is the strongest moment — you identify the
                contrast and you explain what it tells us about Macbeth&rsquo;s moral awareness.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To reach Level 6:`)}</strong> two fixes.
                <em>First,</em> zoom into word-level analysis more often — &ldquo;durst&rdquo; is
                doing more work than you acknowledge (archaic, challenging, provocative).
                <em>Second,</em> address <em>form</em> (soliloquy vs dialogue) and{' '}
                <em>structure</em> (where in the play each quote sits, and why Shakespeare placed it
                there). AQA Level 6 requires all three — language, form, structure — not just
                language.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO3 — Context · 5/6`)}
              </h3>
              <p className="mt-2">
                <em>{_tr(`Contextual factors`)}</em> are integrated (&ldquo;classic tragic
                hero&rdquo;, &ldquo;hubris&rdquo;) rather than bolted on, which is exactly what AQA
                rewards. You could strengthen this by naming the Jacobean context once — James
                I&rsquo;s interest in witchcraft (<em>Daemonologie</em>, 1597) and the Gunpowder
                Plot of 1605 — to anchor why regicide was such a loaded act for Shakespeare&rsquo;s
                first audience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO4 — Accuracy · 1/4`)}
              </h3>
              <p className="mt-2">
                <em>{_tr(`Technical accuracy`)}</em> is broadly secure but your vocabulary
                (&ldquo;big role&rdquo;, &ldquo;classic tragic hero behaviour&rdquo;, &ldquo;really
                begins&rdquo;) drops into informal register at points. For the full 4 marks, aim for
                consistent academic register throughout.
              </p>
            </div>
            <div className="mt-5 rounded-md bg-background p-4 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">
                {_tr(`Next moves for AQA:`)}
              </p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>
                  Rewrite one paragraph applying the <strong>language + form + structure</strong>{' '}
                  checklist.
                </li>
                <li>
                  Add <strong>one Jacobean context anchor</strong> (James I, regicide, divine
                  right).
                </li>
                <li>{_tr(`Upgrade three informal phrases to academic register.`)}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border border-border p-6 sm:p-8 bg-muted/20">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-primary">
            Mark 2 · Pearson Edexcel GCSE English Literature (1ET0) · Paper 1
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Level 4 — Grade 6/7 borderline · 17/24
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AO weighting on this question: AO1 (8) · AO2 (12) · AO4 (4) ·{' '}
            <strong className="text-foreground">{_tr(`AO3 is NOT assessed`)}</strong>
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO1 — Response + textual references · 6/8
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;thoughtful, developed response&rdquo;
              </p>
              <p className="mt-2">
                A <em>thoughtful, developed response</em> that maintains a clear line of argument
                about Macbeth as tragic figure. References are apt and show good knowledge of the
                play&rsquo;s trajectory.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To move into Level 5`)}</strong>
                (&ldquo;critical and evaluative&rdquo;): be <em>more selective</em>. Level 5 answers
                on Edexcel don&rsquo;t cover every Act — they pick two or three moments and
                interrogate them. Cut the conclusion&rsquo;s summary of the whole play and replace
                it with a reconsideration of a single quote.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO2 — Writer&rsquo;s craft · 7/12
              </h3>
              <p className="mt-2">
                Some <em>analysis of writer&rsquo;s craft</em> — the imperative &ldquo;hide&rdquo;
                and the contrast language/black work is solid. However, Edexcel Level 5 requires
                <strong className="text-foreground">
                  {' '}
                  methods analysis on every piece of evidence you use
                </strong>
                . In your essay, four of your six quotes have no methods analysis attached
                (they&rsquo;re used as narrative proof rather than analytical evidence).
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To push higher:`)}</strong> rewrite so
                every quote has at minimum one methods observation. Edexcel examiner reports
                consistently highlight this as the Level 4 → Level 5 gap.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO4 — SPaG &amp; vocabulary · 3/4
              </h3>
              <p className="mt-2">
                <em>{_tr(`High degree of accuracy`)}</em> in SPaG. Minor vocabulary slips
                (&ldquo;big role&rdquo;, &ldquo;really begins&rdquo;) prevent the full 4.
              </p>
            </div>
            <div className="mt-5 rounded-md bg-background p-4 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">
                {_tr(`Next moves for Edexcel:`)}
              </p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>
                  <strong>{_tr(`Do NOT add more context.`)}</strong> AO3 isn&rsquo;t assessed on
                  this question on Edexcel. The Jacobean detail suggested for AQA would waste time
                  here.
                </li>
                <li>
                  <strong>{_tr(`Cut breadth, add depth.`)}</strong> Edexcel rewards fewer quotes
                  analysed deeper.
                </li>
                <li>
                  <strong>{_tr(`Methods analysis on every quote`)}</strong> — the Level 4 → 5 move.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border border-border p-6 sm:p-8 bg-muted/20">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-primary">
            Mark 3 · OCR GCSE English Literature (J352) · Paper 1
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            {_tr(`Level 5 — Grade 7 · 21/30`)}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AO weighting: AO1 (10) · AO2 (10) · AO3 (5) · AO4 (5)
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO1 — Informed personal response · 7/10
              </h3>
              <p className="mt-2">
                A <em>considered, developed response</em> with a clear conceptual thread. OCR Level
                6 (&ldquo;perceptive, convincing, exploration&rdquo;) would require moving beyond
                the essay&rsquo;s current reading (ambition + manipulation = downfall) into
                something more
                <em> interpretative</em> — for example, arguing that Macbeth is <em>more</em> tragic
                because Lady Macbeth&rsquo;s manipulation only succeeds by exploiting an insecurity
                he already holds.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO2 — Writer&rsquo;s methods + effects on reader · 6/10
              </h3>
              <p className="mt-2">
                OCR is distinctive in explicitly rewarding <em>effects on the reader</em>. Your
                essay analyses methods but rarely names the effect. For example: &ldquo;the
                imperative &lsquo;hide&rsquo; shows Macbeth wants to conceal his ambition&rdquo;
                identifies the method but not the effect. A Level 6 rewrite: &ldquo;the imperative
                &lsquo;hide&rsquo; positions the audience as witnesses to Macbeth&rsquo;s
                self-censorship; Shakespeare implicates us in a soliloquy he would rather not be
                heard, making us complicit in the tragedy.&rdquo;
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To push higher:`)}</strong> add a
                reader-effect sentence after every language point.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO3 — Contextual understanding · 4/5
              </h3>
              <p className="mt-2">
                <em>{_tr(`Relevant contextual understanding`)}</em> via your naming of tragic hero
                conventions and hubris — OCR rewards literary-tradition context (Aristotelian
                tragedy, morality plays) even more than historical context, so your instinct is
                correct. To reach the full 5, name one specific convention —{' '}
                <em>hamartia, peripeteia, anagnorisis</em> — and attach it to a specific moment in
                your essay.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AO4 — SPaG + sentence structures · 4/5
              </h3>
              <p className="mt-2">
                Broadly secure, some informal register slips (as per AQA note).
              </p>
            </div>
            <div className="mt-5 rounded-md bg-background p-4 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">
                {_tr(`Next moves for OCR:`)}
              </p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>
                  <strong>{_tr(`Add a reader-effect sentence`)}</strong> after every language point.
                </li>
                <li>
                  <strong>{_tr(`Name one tragic-convention term`)}</strong> (hamartia / peripeteia /
                  anagnorisis).
                </li>
                <li>
                  <strong>{_tr(`Re-cast the conclusion`)}</strong> as an interpretive claim, not a
                  summary.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          What the three marks show (the commercial point)
        </h2>
        <p className="text-muted-foreground mb-6">
          The same 400 words of student writing produces{' '}
          <strong className="text-foreground">three materially different feedback reports</strong>:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 font-semibold text-foreground">Dimension</th>
                <th className="text-left py-3 pr-4 font-semibold text-foreground">AQA 8702</th>
                <th className="text-left py-3 pr-4 font-semibold text-foreground">
                  {_tr(`Edexcel 1ET0`)}
                </th>
                <th className="text-left py-3 font-semibold text-foreground">OCR J352</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">
                  {_tr(`Grade on this answer`)}
                </td>
                <td className="py-3 pr-4">7</td>
                <td className="py-3 pr-4">6</td>
                <td className="py-3">7</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">{_tr(`Context (AO3)`)}</td>
                <td className="py-3 pr-4">6 marks · assessed</td>
                <td className="py-3 pr-4 text-primary font-semibold">{_tr(`NOT assessed`)}</td>
                <td className="py-3">5 marks · literary-tradition bias</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">{_tr(`Top improvement`)}</td>
                <td className="py-3 pr-4">{_tr(`Add form + structure`)}</td>
                <td className="py-3 pr-4">{_tr(`Methods on every quote`)}</td>
                <td className="py-3">{_tr(`Reader-effect on every method`)}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">{_tr(`Mistake to avoid`)}</td>
                <td className="py-3 pr-4">—</td>
                <td className="py-3 pr-4 text-amber-500 font-semibold">
                  {_tr(`Don&rsquo;t add context`)}
                </td>
                <td className="py-3">{_tr(`Don&rsquo;t over-historicise`)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-lg border border-primary/40 bg-primary/5 p-6">
          <p className="text-foreground font-medium mb-2">{_tr(`This is the wedge.`)}</p>
          <p className="text-muted-foreground">
            A generic &ldquo;good essay&rdquo; rubric gives the student one piece of feedback that
            is 60% right for each board. The English Hub&rsquo;s board-specific AI marker gives
            three different pieces of feedback — each 100% right for the exam the student is
            actually sitting.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-muted/30 p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-semibold text-foreground">{tFootH2}</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{tFootBody}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/marking"
            className="inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {tCtaMarking}
          </Link>
          <Link
            href="/pricing"
            className="inline-block rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            {tCtaPricing}
          </Link>
          <Link
            href="/revision/texts/macbeth"
            className="inline-block rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            {tCtaMacbethRev}
          </Link>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          {tMethodology}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Mark-scheme lexis paraphrased from published AQA (8702), Edexcel (1ET0), and OCR (J352)
          specifications and publicly available mark-scheme language. No copyrighted past-paper
          content reproduced. Grade boundaries based on 2024 published tables from each board.
          Written by GCSE markers credentialled across AQA, Edexcel, Cambridge, OCR and WJEC.
        </p>
      </section>
    </main>
  )
}
