import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'

// Static page - renders the same HTML on every request.
// Served via Next.js default static caching.

// RE-MARKED 10 October 2026. Two of the three cards marked this essay against
// schemes those boards do not use. The Edexcel card marked it out of 24 for
// AO1, AO2 and AO4, said AO3 was not assessed and told students not to add
// context. Pearson sets Shakespeare in Paper 1 Section A, and its nearest
// question to a whole-play essay is part (b): 20 marks, AO1 15 and AO3 5 on one
// grid, context required, neither AO2 nor AO4 assessed (1ET0 specification
// Issue 2; 1ET0/01 mark scheme, June 2024). The OCR card called J352/02 "Paper 1" and marked out
// of 30; OCR marks AO1 14, AO2 14 and AO3 8 together out of 36 and AO4 out of 4
// (J352/02 mark scheme, June 2018). Every card also gave a grade for one answer,
// which no board does, and the essay was labelled as a pupil's timed work when
// it was written for this page. Keep the cards to level and mark.

export const metadata: Metadata = {
  title: 'AQA vs Edexcel vs OCR: One Macbeth Essay',
  description:
    'A Macbeth essay we wrote at Year 10 standard, marked against the AQA, Pearson Edexcel and OCR mark schemes to show how marks and next steps differ by board.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head' },
  openGraph: {
    title: 'AI Essay Feedback: AQA vs Edexcel vs OCR - Same Macbeth Essay',
    description:
      'One 372-word Macbeth essay, marked against the AQA, Pearson Edexcel and OCR mark schemes: three different marks and three different sets of next steps.',
    url: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head',
    type: 'article',
    siteName: 'The English Hub',
    images: [
      {
        url: '/api/og?title=AI+Essay+Feedback%3A+AQA+vs+Edexcel+vs+OCR+-+Same+Macbeth+Essay',
        width: 1200,
        height: 630,
        alt: 'AI Essay Feedback: AQA vs Edexcel vs OCR - Same Macbeth Essay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Essay Feedback: AQA vs Edexcel vs OCR',
    description:
      'One Macbeth essay, written by us at Year 10 standard and marked against three boards’ mark schemes.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Essay Feedback - AQA vs Edexcel vs OCR on the Same Macbeth Essay',
  author: {
    '@type': 'Organization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
  },
  description:
    'A Macbeth essay written by The English Hub at Year 10 standard, marked against the AQA 8702/1, Pearson Edexcel 1ET0/01 and OCR J352/02 mark schemes, showing how each board’s weighting and question change the mark and the feedback.',
  mainEntityOfPage: 'https://theenglishhub.app/analysis/ai-feedback-head-to-head',
  about: 'Macbeth',
  educationalLevel: 'GCSE',
  inLanguage: 'en-GB',
  datePublished: '2026-04-19',
  dateModified: '2026-10-10',
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
  // English - that's literary/exam-board content, not chrome.
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
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
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
          One essay on <em>Macbeth</em> as a tragic figure, written by us at Year 10 standard for
          this comparison, then marked three times. Each mark follows a different board&rsquo;s mark
          scheme: how it weights the assessment objectives, how it sets the question and how its
          levels are worded. The same 372 words earn{' '}
          <strong className="text-foreground">
            three different marks and three different sets of next steps
          </strong>{' '}
          - which is why marking to your own board matters.
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
          {_tr(`The essay (identical across all three marks)`)}
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Question:</strong> How does Shakespeare present the character of Macbeth as a
          tragic figure in the play <em>Macbeth</em>?
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Response:</strong> a Year 10 standard answer, written by The English Hub for this
          comparison, not by a pupil. 372 words.
        </p>
        <blockquote className="border-s-2 border-primary/50 ps-5 py-2 text-muted-foreground italic space-y-3 leading-relaxed text-[15px]">
          <p>
            Shakespeare presents Macbeth as a tragic figure whose downfall is caused by his own
            ambition and the manipulation of others around him. At the start of the play, Macbeth is
            described as &ldquo;brave&rdquo; and a &ldquo;worthy gentleman&rdquo;, suggesting he is
            a hero. The Captain&rsquo;s line, &ldquo;For brave Macbeth - well he deserves that
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
            blunt sentence structure emphasises his shock. This is classic tragic hero behaviour -
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
          <h2 className="text-2xl font-semibold text-foreground">{_tr(`Level 5 · 27/34`)}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AO weighting: AO1 (12) · AO2 (12) · AO3 (6), marked together on six levels (24/30 here)
            · AO4 (4), marked on its own grid (3/4 here)
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO1 - Read, understand, respond`)}
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;thoughtful, developed response&rdquo;
              </p>
              <p className="mt-2">
                Your response is a <em>thoughtful, developed response</em> to the task. You track
                Macbeth&rsquo;s tragic arc from &ldquo;brave&rdquo; soldier through ambitious
                regicide to hollow tyrant, and you select well-judged evidence at each stage
                (&ldquo;brave Macbeth&rdquo;, &ldquo;stars, hide your fires&rdquo;,
                &ldquo;life&rsquo;s but a walking shadow&rdquo;). Your overall argument - ambition +
                manipulation = downfall - is clear from the outset.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">
                  {_tr(`To push from Level 5 to Level 6`)}
                </strong>{' '}
                (&ldquo;critical, exploratory, conceptualised response&rdquo;): your conclusion
                restates the opening rather than complicating it. Strong Level 6 answers return to
                the opening reading and <em>unsettle</em> it - for instance, ask whether Shakespeare
                wants us to see Macbeth as a tragic victim of the witches&rsquo; prophecy or whether
                the prophecy only reveals a flaw that was always there.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO2 - Language, form, structure`)}
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;examination of writer&rsquo;s methods&rdquo;
              </p>
              <p className="mt-2">
                Good <em>examination of writer&rsquo;s methods</em> with subject terminology used
                accurately (imperative, contrast, metaphor, sentence structure). The
                &ldquo;hide/light/black&rdquo; analysis is the strongest moment - you identify the
                contrast and you explain what it tells us about Macbeth&rsquo;s moral awareness.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To reach Level 6:`)}</strong> two fixes.{' '}
                <em>First,</em> zoom into word-level analysis more often - &ldquo;durst&rdquo; is
                doing more work than you acknowledge (archaic, challenging, provocative).{' '}
                <em>Second,</em> address <em>form</em> (soliloquy vs dialogue) and{' '}
                <em>structure</em> (where in the play each quote sits, and why Shakespeare placed it
                there). AQA&rsquo;s AO2 covers language, form and structure, not language alone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{_tr(`AO3 - Context`)}</h3>
              <p className="mt-2">
                <em>{_tr(`Contextual factors`)}</em> are integrated (&ldquo;classic tragic
                hero&rdquo;, &ldquo;hubris&rdquo;) rather than bolted on, which is exactly what AQA
                rewards. You could strengthen this by naming the Jacobean context once - James
                I&rsquo;s interest in witchcraft (<em>Daemonologie</em>, 1597) and the Gunpowder
                Plot of 1605 - to anchor why regicide was such a loaded act for Shakespeare&rsquo;s
                first audience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO4 - Accuracy · 3/4`)}
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
              <ol className="list-decimal ps-5 text-sm space-y-1">
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
            Mark 2 · Pearson Edexcel GCSE English Literature (1ET0) · Paper 1 Section A, part (b)
          </p>
          <h2 className="text-2xl font-semibold text-foreground">{_tr(`Level 3 · 11/20`)}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AO weighting on part (b): AO1 (15) · AO3 (5), marked together on one grid of five levels
            ·{' '}
            <strong className="text-foreground">{_tr(`AO2 and AO4 are not assessed here`)}</strong>
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`How Pearson sets this question`)}
              </h3>
              <p className="mt-2">
                Pearson does not set a stand-alone Shakespeare essay. Section A has two parts on the
                same play: part (a), on a printed extract, is 20 marks for AO2 alone; part (b) asks
                how a theme from the extract is explored elsewhere in the play, for 20 marks, AO1 15
                and AO3 5. This essay covers the whole play, so we have marked it as the nearest
                Pearson equivalent, a part (b) answer. That changes what counts. Context is
                required: Pearson&rsquo;s part (b) questions end with the instruction &ldquo;You
                must refer to the context of the play in your answer.&rdquo; It is worth 5 of the 20
                marks. Close language analysis earns no marks of its own in part (b): it counts only
                as far as it supports your argument and your use of references.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO1 - Read, understand, respond`)}
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;a developed personal response and thorough
                engagement&rdquo;
              </p>
              <p className="mt-2">
                This is the strength of the answer, and on its own it reads as Level 4: a developed
                personal response that follows Macbeth from &ldquo;brave&rdquo; soldier to
                &ldquo;walking shadow&rdquo;, with well-chosen references from across the play
                supporting a range of points.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To move into Level 5`)}</strong> (an
                assured personal response with perceptive interpretation): argue a position rather
                than trace the plot. Decide, for example, how far Macbeth chooses his fall and how
                far he is pushed, and let each reference test that judgement. Your conclusion
                restates the opening; make it the point where the argument lands.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{_tr(`AO3 - Context`)}</h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;little awareness of context&rdquo;
              </p>
              <p className="mt-2">
                This is what holds the mark down. Beyond the conventions of tragedy (&ldquo;tragic
                hero&rdquo;, &ldquo;hubris&rdquo;), the essay says nothing about the world the play
                was written for: kingship and regicide, belief in witchcraft, what a Jacobean
                audience expected of a husband and wife. Pearson&rsquo;s grid has a context bullet
                at every level, and the examiner places the answer at the level that best fits all
                four bullets together, so strong AO1 only partly makes up for missing context. That
                is why an answer that reads as Level 4 for AO1 lands in Level 3, at 11.
              </p>
              <p className="mt-2">
                Pearson&rsquo;s June 2024 and June 2025 examiner reports both say that the part (b)
                answers which did well wove context through each paragraph, fitted to the point
                being made, rather than adding it at the end.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO2 - Language, form, structure`)}
              </h3>
              <p className="mt-2">
                Not assessed in part (b). Your reading of the imperative &ldquo;hide&rdquo; and the
                light/black contrast is good analysis, but here it earns marks only as support for
                your argument. Pearson rewards close analysis in part (a), on the printed extract,
                where AO2 is the only objective. AO4 is not assessed in Section A either: Pearson
                marks spelling, punctuation and grammar only in Section B of this paper, on the
                post-1914 text.
              </p>
            </div>
            <div className="mt-5 rounded-md bg-background p-4 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">
                {_tr(`Next moves for Edexcel:`)}
              </p>
              <ol className="list-decimal ps-5 text-sm space-y-1">
                <li>
                  <strong>{_tr(`Add relevant context to every paragraph.`)}</strong> Duncan&rsquo;s
                  murder as a crime against a king believed to rule by divine right, for example,
                  gives &ldquo;I am afraid to think what I have done&rdquo; its full weight for
                  Shakespeare&rsquo;s first audience.
                </li>
                <li>
                  <strong>{_tr(`Tie each context point to a quotation.`)}</strong> Use it to explain
                  the moment in front of you, not as a closing sentence.
                </li>
                <li>
                  <strong>{_tr(`Save close analysis for part (a).`)}</strong> In part (b), let your
                  quotations support the argument and spend the time you save on context.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border border-border p-6 sm:p-8 bg-muted/20">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-primary">
            Mark 3 · OCR GCSE English Literature (J352) · Component 02 Section B
          </p>
          <h2 className="text-2xl font-semibold text-foreground">{_tr(`Level 4 · 25/40`)}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AO weighting: AO1 (14) · AO2 (14) · AO3 (8), marked together on six levels (22/36 here)
            · AO4 (4), marked on its own grid (3/4 here)
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO1 - Read, understand, respond`)}
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;credible critical style in a detailed personal
                response&rdquo;
              </p>
              <p className="mt-2">
                A detailed personal response with a clear line of argument and relevant references
                from across the play, which is OCR&rsquo;s Level 4. OCR offers a choice of an
                extract-based question and a discursive one, and this essay works as the discursive
                option. OCR&rsquo;s mark scheme caps a discursive answer that uses only one moment
                of the play, or adds only a brief second one; yours ranges from Act 1 to Act 5, so
                no cap applies.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To move into Level 5`)}</strong> (a
                convincing critical style with some insightful understanding): push your reading
                further. For example, argue that Macbeth is <em>more</em> tragic because Lady
                Macbeth&rsquo;s manipulation only succeeds by exploiting an insecurity he already
                holds.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO2 - Language, form, structure`)}
              </h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;some analytical comments&rdquo;
              </p>
              <p className="mt-2">
                Some analytical comments on language, with competent use of terminology (imperative,
                contrast, metaphor, sentence structure): Level 4. AO2 is worth as much as AO1 here,
                and Level 5 asks for thoughtful examination of language, form and structure. Your
                analysis says what a method shows about Macbeth but less often what it does to the
                audience, and it does not yet use form: &ldquo;Stars, hide your fires&rdquo; is an
                aside, so the audience hears the ambition that Duncan&rsquo;s court cannot.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">{_tr(`To push higher:`)}</strong> after each
                method, add what it makes the audience think or feel. OCR&rsquo;s indicative content
                for a June 2018 <em>Macbeth</em> question points the same way: the soliloquies let
                the audience into Macbeth&rsquo;s private doubts, which helps make him a tragic
                figure rather than simply a villain.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{_tr(`AO3 - Context`)}</h3>
              <p className="mt-1 text-sm italic">
                Mark-scheme lexis: &ldquo;some relevant comments about context&rdquo;
              </p>
              <p className="mt-2">
                Your tragic-hero framing and &ldquo;hubris&rdquo; are relevant comments on context,
                which is Level 3, but they stay with the genre. OCR&rsquo;s Level 4 asks for a clear
                understanding of context that informs the reading, and its indicative content for{' '}
                <em>Macbeth</em> looks to the play&rsquo;s own time: why killing a king who is also
                a guest and a kinsman would shock its first audience, and what that audience
                believed about sin and damnation. One such point, tied to a quotation, would change
                how that moment reads.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {_tr(`AO4 - Accuracy · 3/4`)}
              </h3>
              <p className="mt-2">
                OCR&rsquo;s AO4 grid is worded as AQA&rsquo;s is, so the judgement matches: accurate
                spelling and punctuation with a considerable range of vocabulary and sentence
                structures, which is the middle band (2-3 marks). For 4, replace the informal
                phrases (&ldquo;big role&rdquo;, &ldquo;really begins&rdquo;) and vary your sentence
                openings - five sentences begin with &ldquo;This&rdquo;.
              </p>
            </div>
            <div className="mt-5 rounded-md bg-background p-4 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">
                {_tr(`Next moves for OCR:`)}
              </p>
              <ol className="list-decimal ps-5 text-sm space-y-1">
                <li>
                  <strong>{_tr(`Analyse form and audience effect.`)}</strong> After each language
                  point, say what it does to the audience, and use the asides and soliloquies.
                </li>
                <li>
                  <strong>{_tr(`Add one point of period context.`)}</strong> Tie it to a quotation,
                  as the AO3 note above suggests.
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
          {_tr(`What the three marks show`)}
        </h2>
        <p className="text-muted-foreground mb-6">
          The same 372 words earn{' '}
          <strong className="text-foreground">
            three different marks and three different sets of next steps
          </strong>
          :
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-3 pe-4 font-semibold text-foreground">
                  {_tr(`Dimension`)}
                </th>
                <th className="text-start py-3 pe-4 font-semibold text-foreground">AQA 8702/1</th>
                <th className="text-start py-3 pe-4 font-semibold text-foreground">
                  {_tr(`Edexcel 1ET0/01`)}
                </th>
                <th className="text-start py-3 font-semibold text-foreground">OCR J352/02</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 pe-4 font-medium text-foreground">
                  {_tr(`Level and mark on this answer`)}
                </td>
                <td className="py-3 pe-4">{_tr(`Level 5 · 27/34`)}</td>
                <td className="py-3 pe-4">{_tr(`Level 3 · 11/20`)}</td>
                <td className="py-3">{_tr(`Level 4 · 25/40`)}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pe-4 font-medium text-foreground">{_tr(`Context (AO3)`)}</td>
                <td className="py-3 pe-4">{_tr(`6 of 34 marks`)}</td>
                <td className="py-3 pe-4 text-primary font-semibold">
                  {_tr(`5 of 20 marks · required`)}
                </td>
                <td className="py-3">{_tr(`8 of 40 marks`)}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pe-4 font-medium text-foreground">
                  {_tr(`Language analysis (AO2)`)}
                </td>
                <td className="py-3 pe-4">{_tr(`12 of 34 marks`)}</td>
                <td className="py-3 pe-4 text-primary font-semibold">
                  {_tr(`Not assessed in part (b)`)}
                </td>
                <td className="py-3">{_tr(`14 of 40 marks`)}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pe-4 font-medium text-foreground">{_tr(`Top improvement`)}</td>
                <td className="py-3 pe-4">{_tr(`Add form + structure`)}</td>
                <td className="py-3 pe-4">{_tr(`Add relevant context`)}</td>
                <td className="py-3">{_tr(`Form and audience effect`)}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pe-4 font-medium text-foreground">{_tr(`Mistake to avoid`)}</td>
                <td className="py-3 pe-4">-</td>
                <td className="py-3 pe-4 text-amber-500 font-semibold">
                  {_tr(`Bolting context on at the end`)}
                </td>
                <td className="py-3">{_tr(`Using only one or two moments`)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-lg border border-primary/40 bg-primary/5 p-6">
          <p className="text-foreground font-medium mb-2">{_tr(`In short`)}</p>
          <p className="text-muted-foreground">
            The same essay earns a different mark, and different next steps, from each board. That
            is because each board weights the assessment objectives differently and sets its
            Shakespeare question differently: Pearson&rsquo;s part (b) requires context and gives
            language analysis no marks of its own, while AQA and OCR reward both. So the right next
            step depends on the exam you are sitting.
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
          These are worked examples, marked by The English Hub against each board&rsquo;s published
          mark scheme: AQA 8702/1 (Paper 1, Section A), Pearson Edexcel 1ET0/01 (Paper 1, Section A,
          part (b)) and OCR J352/02 (Component 02, Section B). Level wording is paraphrased, not
          quoted; where a card quotes a board directly, as in the mark-scheme lexis lines, the words
          are the board&rsquo;s own. The essay was written by us for this comparison, at Year 10
          standard; it is not a real pupil&rsquo;s work. Boards award grades for a whole
          qualification, not for one answer, so each mark is shown as a level and a mark only.
        </p>
      </section>
    </div>
  )
}
