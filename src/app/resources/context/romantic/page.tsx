'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* ─── Expandable Section ─────────────────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = 'bg-primary',
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  badge?: string
  colour?: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5">
          {children}
        </div>
      )}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomanticContextPage() {
  const t = useT()
  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8"
        aria-label={t('study.shared.aria.breadcrumb')}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {[
            { href: '/', label: t('study.shared.crumb.home') },
            { href: '/resources', label: t('study.shared.crumb.resources') },
            { href: '/resources/context', label: t('study.shared.crumb.context') },
          ].map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              <Link href={crumb.href} className="hover:text-primary transition-colors">
                {crumb.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-primary">
              {t('study.context.era.romantic.crumb')}
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
              1780 -- 1850
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Poetry Anthology
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('study.context.era.romantic.title')}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {t('study.context.era.romantic.intro')}
          </p>
        </div>

        {/* Industrial Revolution Response */}
        <Section
          id="industry"
          title="Response to the Industrial Revolution"
          defaultOpen
          colour="bg-muted"
        >
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The Romantic movement arose in direct opposition to the{' '}
              <strong>Industrial Revolution</strong>. As factories replaced fields, cities swallowed
              villages, and machines replaced craftsmanship, the Romantics mourned the loss of a
              simpler, more natural way of life.
            </p>
            <p>
              William Blake wrote of &ldquo;dark satanic mills&rdquo; and the spiritual destruction
              caused by industrialisation. Wordsworth left London for the Lake District, arguing
              that city life deadened the soul. The Romantics saw industrialisation not as progress
              but as a form of <strong>spiritual pollution</strong> that separated humanity from
              nature and from itself.
            </p>
            <p>
              This is relevant to the poetry anthology because many poems explore the tension
              between the <strong>natural world</strong> (associated with freedom, beauty, and
              truth) and the <strong>man-made world</strong> (associated with oppression, ugliness,
              and artifice). When a poet turns to nature for solace, inspiration, or moral guidance,
              they are drawing on a Romantic tradition.
            </p>
          </div>
        </Section>

        <div className="mt-5 space-y-5">
          {/* Key Romantic Ideals */}
          <Section id="ideals" title="Key Romantic Ideals" colour="bg-primary">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    ideal: 'Emotion over Reason',
                    detail:
                      "The Romantics rejected the Enlightenment's emphasis on logic and rationality. They believed that deep feeling -- joy, awe, grief, love -- was a more authentic guide to truth than cold reason. Poetry was the supreme art form because it expressed emotion directly.",
                  },
                  {
                    ideal: 'The Individual',
                    detail:
                      'Romantics celebrated the unique individual against the conformity of society. The poet was seen as a visionary, a prophet who could perceive truths hidden from ordinary people. Personal experience and subjective feeling mattered more than social convention.',
                  },
                  {
                    ideal: 'Nature as Teacher',
                    detail:
                      "Nature was not just scenery but a source of moral and spiritual wisdom. Wordsworth argued that nature could 'teach more of moral evil and of good than all the sages can.' Connecting with nature was seen as essential for human wellbeing.",
                  },
                  {
                    ideal: 'The Sublime',
                    detail:
                      "The Romantics were fascinated by experiences of overwhelming power and beauty -- vast mountains, terrifying storms, raging seas. The 'sublime' was a mix of awe and terror that made humans feel small but spiritually elevated.",
                  },
                  {
                    ideal: 'Imagination',
                    detail:
                      "For the Romantics, imagination was the highest human faculty. It allowed people to transcend their material circumstances and access deeper truths. Coleridge called imagination 'the living Power and prime Agent of all human Perception.'",
                  },
                  {
                    ideal: 'Revolution and Freedom',
                    detail:
                      'Many Romantics initially supported the French Revolution (1789) as a triumph of liberty. Although they became disillusioned with the violence, the ideal of freedom -- political, personal, and spiritual -- remained central to the movement.',
                  },
                ].map((item) => (
                  <div
                    key={item.ideal}
                    className="rounded-lg bg-primary/5 border border-primary/20 p-4"
                  >
                    <h3 className="text-sm font-bold text-foreground">{item.ideal}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Nature and the Sublime */}
          <Section id="nature" title="Nature & the Sublime" colour="bg-primary">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                For the Romantics, <strong>nature</strong> was not merely a backdrop but an active,
                living force. It was a source of <strong>consolation</strong> in times of grief,
                <strong> inspiration</strong> for creative work, and a <strong>moral guide</strong>{' '}
                that could teach humanity how to live well.
              </p>
              <p>
                Wordsworth described poetry as &ldquo;the spontaneous overflow of powerful
                feelings&rdquo; and argued that the best poetry came from contemplating nature in
                &ldquo;tranquillity.&rdquo; His poems often begin with a natural scene that triggers
                a profound emotional or philosophical insight.
              </p>
              <p>
                The concept of the <strong>sublime</strong> was central.{' '}
                <strong>Edmund Burke</strong> (in{' '}
                <em>
                  A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful
                </em>
                , 1757) defined the sublime as an experience that combined
                <strong> terror and awe</strong> -- standing before a thunderstorm, a vast mountain,
                or a churning sea. <strong>Immanuel Kant</strong> (<em>Critique of Judgement</em>,
                1790) refined this idea, arguing that the sublime arises when the mind confronts
                something so vast that imagination is overwhelmed yet reason is ultimately affirmed.
                The sublime reminded humans of their smallness before nature&apos;s power, creating
                a paradoxical feeling of fear and exhilaration.
              </p>
              <p>
                In the poetry anthology, look for moments where nature is presented as
                <strong> powerful, beautiful, or overwhelming</strong>. These are Romantic tropes. A
                poet who uses a storm to represent emotional turmoil, or who finds peace in a
                natural landscape, is working within the Romantic tradition.
              </p>
            </div>
          </Section>

          {/* Individual Freedom */}
          <Section id="freedom" title="Individual Freedom & Rebellion" colour="bg-primary">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The Romantics championed the <strong>rights of the individual</strong> against the
                power of institutions -- the state, the church, social convention. They were drawn
                to rebels, outcasts, and visionaries who defied the established order.
              </p>
              <p>
                <strong>Byron</strong> created the archetype of the &ldquo;Byronic hero&rdquo; -- a
                brooding, passionate, morally complex figure who lives by his own code. This figure
                influenced literature for generations, from Heathcliff to Batman.
              </p>
              <p>
                <strong>Shelley</strong> (Percy Bysshe) was a political radical who was expelled
                from Oxford for atheism and who wrote passionately against tyranny. His poem
                <em> Ozymandias</em> is a meditation on the futility of power and the inevitable
                fall of tyrants -- a theme found across the poetry anthology.
              </p>
              <p>
                The Romantic emphasis on <strong>personal freedom</strong> connects to poems about
                power, conflict, and resistance. When a poet challenges authority, celebrates the
                outsider, or asserts their right to think and feel independently, they are drawing
                on Romantic values.
              </p>
            </div>
          </Section>

          {/* Key Poets */}
          <Section id="poets" title="Key Poets & Their Beliefs" colour="bg-primary">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: 'William Wordsworth (1770-1850)',
                  detail:
                    "The father of English Romanticism. Believed nature was the greatest teacher and that poetry should use 'the real language of men.' Co-wrote the Lyrical Ballads (1798) with Coleridge, launching the Romantic movement.",
                },
                {
                  name: 'Samuel Taylor Coleridge (1772-1834)',
                  detail:
                    "Master of supernatural and imaginative poetry. Wrote The Rime of the Ancient Mariner and Kubla Khan. Believed imagination was humanity's highest power, connecting the finite mind to the infinite.",
                },
                {
                  name: 'William Blake (1757-1827)',
                  detail:
                    "Poet, painter, and radical visionary. Attacked industrialisation, child labour, and organised religion. His 'Songs of Innocence and Experience' contrast childhood purity with adult corruption.",
                },
                {
                  name: 'Percy Bysshe Shelley (1792-1822)',
                  detail:
                    'Political radical and idealist. Expelled from Oxford for atheism. Wrote Ozymandias (a set poem in many anthologies), championing freedom and exposing the futility of tyrannical power.',
                },
                {
                  name: 'John Keats (1795-1821)',
                  detail:
                    'Celebrated beauty, sensation, and mortality. His odes explore the tension between the permanence of art and the transience of life. Died of tuberculosis at just 25.',
                },
                {
                  name: 'Lord Byron (1788-1824)',
                  detail:
                    "Scandalous, charismatic, and wildly popular. Created the 'Byronic hero' -- a passionate, rebellious outsider. Died fighting for Greek independence, embodying Romantic idealism.",
                },
                {
                  name: 'Mary Shelley (1797-1851)',
                  detail:
                    'Daughter of Mary Wollstonecraft. Wrote Frankenstein (1818) at age 18, exploring the dangers of unchecked ambition and scientific overreach -- key Romantic concerns.',
                },
                {
                  name: 'Mary Wollstonecraft (1759-1797)',
                  detail:
                    'Pioneer of feminist thought. Wrote A Vindication of the Rights of Woman (1792), arguing women deserved equal education. Her ideas challenged Romantic-era gender norms.',
                },
              ].map((poet) => (
                <div key={poet.name} className="rounded-lg bg-muted p-4">
                  <h3 className="text-sm font-bold text-foreground">{poet.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{poet.detail}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* How to use in poetry essays */}
          <Section
            id="linking"
            title="How to Link Romantic Context to Poetry"
            badge="Exam skill"
            colour="bg-accent"
          >
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                When analysing poetry from the anthology, look for{' '}
                <strong>Romantic influences</strong>
                and consider how the poet engages with or challenges Romantic traditions.
              </p>

              <h3 className="text-base font-bold text-foreground pt-2">Key questions to ask</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Does the poem use <strong>nature</strong> as a symbol, setting, or source of
                    meaning?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Does the poet celebrate <strong>individual feeling</strong> over social
                    convention?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Is there an encounter with the <strong>sublime</strong> -- something vast,
                    terrifying, or awe-inspiring?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Does the poem challenge <strong>authority or power</strong>? Does it side with
                    the outsider or rebel?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Is the poet reacting against{' '}
                    <strong>industrialisation, war, or social injustice</strong>?
                  </span>
                </li>
              </ul>

              <h3 className="text-base font-bold text-foreground pt-4">
                Example: Ozymandias by Percy Bysshe Shelley
              </h3>
              <div className="rounded-lg border-l-4 border-accent bg-primary/10/40 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Poetry Anthology
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Shelley uses the ruined statue to embody Romantic anti-tyrannical ideals
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  As a Romantic radical who opposed all forms of tyranny, Shelley uses the crumbling
                  statue of Ozymandias to argue that power is inherently temporary. The &ldquo;lone
                  and level sands&rdquo; that surround the ruin represent nature&apos;s ultimate
                  triumph over human arrogance -- a quintessentially Romantic idea. The poem&apos;s
                  message that &ldquo;nothing beside remains&rdquo; would have resonated with
                  readers in the aftermath of the French Revolution and Napoleonic Wars, when
                  empires had risen and fallen within living memory.
                </p>
              </div>

              <h3 className="text-base font-bold text-foreground pt-4">
                Example: The Prelude (Extract) by William Wordsworth (AQA: 1850, posthumous)
              </h3>
              <div className="rounded-lg border-l-4 border-accent bg-primary/10/40 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Poetry Anthology
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Wordsworth presents nature as a sublime, transformative force
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The extract from The Prelude dramatises a Romantic encounter with the sublime. The
                  &ldquo;huge peak, black and huge&rdquo; that &ldquo;Strode after&rdquo; the young
                  Wordsworth fills him with awe and terror -- the defining Burkean&ndash;Kantian
                  Romantic experience. Nature is not a gentle backdrop but an overwhelming power
                  that reshapes the speaker&apos;s understanding of himself and his place in the
                  world. Wordsworth believed such formative encounters &mdash; his &ldquo;spots of
                  time&rdquo; &mdash; were essential for spiritual growth, reflecting the Romantic
                  conviction that nature is humanity&apos;s greatest teacher.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Version note: AQA prescribes the 1850 published <em>Prelude</em>; OCR prescribes
                  the 1799 two-part <em>Prelude</em>. Wording differs between versions &mdash; quote
                  from the AQA 1850 text on this page.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-5">
                <h3 className="text-sm font-bold text-foreground">
                  Sentence starters for Romantic context
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      &ldquo;Writing in the Romantic tradition, [poet] uses nature to
                      suggest...&rdquo;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      &ldquo;This reflects the Romantic belief that individual feeling is more
                      important than...&rdquo;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      &ldquo;The poet evokes the sublime through imagery of... creating a sense
                      of...&rdquo;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      &ldquo;As a Romantic poet, [name] would have seen [topic] as...&rdquo;
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/resources/context/twentieth-century"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground shadow-md transition hover:bg-muted"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            {t('study.context.era.nav.twentieth')}
          </Link>
          <Link
            href="/resources/context"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            {t('study.context.era.nav.all_eras')}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
