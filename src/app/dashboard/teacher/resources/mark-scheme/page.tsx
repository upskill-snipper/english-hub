import Link from 'next/link'
import { t } from '@/lib/i18n/t'

export const metadata = { title: 'Marking Guide — Teacher Resources' }

/* ─── Example 2: AQA English Literature Marking Guide Breakdown ───── */

const BANDS = [
  {
    level: 6,
    marks: '26-30',
    label: 'Convincing, critical',
    colour: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
    ao1: 'Critical, exploratory, conceptualised response. Judicious use of precise references to support interpretation(s).',
    ao2: "Analysis of writer's methods with subject terminology used judiciously. Sophisticated exploration of effects of language/structure.",
    ao3: 'Exploration of ideas/perspectives/contextual factors shown across the text. Detailed, perceptive understanding of relationships between text and context.',
    studentExample: `Priestley's stagecraft in the Inspector's final speech serves a dual function: it operates as a dramatic monologue that breaks the fourth wall, directly implicating the 1945 audience in the social failures of 1912. The tricolon "fire and blood and anguish" carries biblical resonance, positioning the Inspector as a prophetic figure whose warnings transcend the play's temporal setting. This deliberate anachronism — a character in 1912 predicting both World Wars — is Priestley's most powerful structural device, collapsing the distance between past and present to force his audience into moral reckoning.`,
  },
  {
    level: 5,
    marks: '21-25',
    label: 'Thoughtful, developed',
    colour: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
    ao1: 'Thoughtful, developed response. Apt references integrated into interpretation(s).',
    ao2: "Examination of writer's methods with subject terminology used effectively. Thoughtful consideration of effects.",
    ao3: 'Thoughtful consideration of ideas/perspectives/contextual factors shown across the text.',
    studentExample: `Priestley presents the Inspector as a mouthpiece for socialist ideas through his language and behaviour. The Inspector's statement that "We are members of one body" directly references socialist ideology, suggesting that society has a collective responsibility. Priestley uses the metaphor of "one body" to imply that harming one person — like Eva Smith — damages everyone. This was particularly relevant to the 1945 audience who had experienced the collective effort of WWII and were considering the creation of the welfare state.`,
  },
  {
    level: 4,
    marks: '16-20',
    label: 'Clear, relevant',
    colour: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-700',
    ao1: 'Clear, explained response. Effective use of references to support explanation.',
    ao2: "Clear explanation of writer's methods with appropriate use of subject terminology. Understanding of effects.",
    ao3: 'Clear understanding of ideas/perspectives/contextual factors.',
    studentExample: `The Inspector is presented as someone who cares about people like Eva Smith. He says "We are members of one body" which shows he believes everyone is connected and should look after each other. This is different from Mr Birling who only cares about money and business. Priestley uses the Inspector to show that socialism is better than capitalism because it means caring about others. The 1945 audience would have agreed with this after the war.`,
  },
  {
    level: 3,
    marks: '11-15',
    label: 'Some, relevant',
    colour: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-clay-600',
    ao1: 'Some explained response. References used to support a range of relevant comments.',
    ao2: "Some understanding of writer's methods. Some reference to subject terminology.",
    ao3: 'Some understanding of contextual factors.',
    studentExample: `The Inspector talks about how everyone should be responsible for each other. He tells the Birlings that they need to think about other people. He says they are "members of one body." This shows that Priestley wanted people to be nicer to each other and not just think about themselves. The Inspector is different from Mr Birling because he actually cares.`,
  },
]

const COMMON_ERRORS = [
  {
    error: 'Retelling the story instead of analysing',
    fix: "Remind students: 'What does the writer DO?' not 'What happens?'",
    example:
      "Instead of 'Sheila gives the ring back', write 'Priestley uses Sheila's return of the ring as a symbolic rejection of her privileged lifestyle'",
  },
  {
    error: 'Feature spotting without analysing effect',
    fix: "Use the 'So what?' test after every technique identification",
    example:
      "Instead of 'Priestley uses a metaphor here', write 'Priestley's metaphor of \"one body\" implies interconnectedness, suggesting that individual suffering has collective consequences'",
  },
  {
    error: "Bolted-on context that doesn't connect to the question",
    fix: 'Context should explain WHY the writer made a choice, not just WHEN the text was written',
    example:
      "Instead of 'This was written in 1945 after WWII', write 'Writing for a post-war audience who had experienced collective sacrifice, Priestley uses the Inspector to argue that this spirit of shared responsibility must extend beyond wartime'",
  },
  {
    error: 'Using quotes without embedding them',
    fix: 'Practise weaving quotes into sentences as evidence, not standalone blocks',
    example: `Instead of 'He says "fire and blood and anguish"', write 'The Inspector's apocalyptic warning of "fire and blood and anguish" carries biblical weight, positioning him as a prophetic figure'`,
  },
]

export default async function MarkSchemePage() {
  const [
    backLabel,
    pageTitle,
    pageSubtitle,
    aoGlanceTitle,
    bandDescriptorsTitle,
    commonErrorsTitle,
    markingTipsTitle,
  ] = await Promise.all([
    t('dashboard.mark_scheme.back'),
    t('dashboard.mark_scheme.title'),
    t('dashboard.mark_scheme.subtitle'),
    t('dashboard.mark_scheme.ao_glance_title'),
    t('dashboard.mark_scheme.band_descriptors_title'),
    t('dashboard.mark_scheme.common_errors_title'),
    t('dashboard.mark_scheme.marking_tips_title'),
  ])
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/dashboard/teacher/resources"
          className="text-sm text-accent hover:text-primary mb-2 inline-block"
        >
          &larr; {backLabel}
        </Link>
        <h1 className="text-2xl font-bold text-primary">{pageTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{pageSubtitle}</p>
      </div>

      {/* Quick Reference */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-3">{aoGlanceTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-3">
            <p className="font-bold text-primary text-sm">AO1 (12 marks)</p>
            <p className="text-xs text-muted-foreground mt-1">
              Read, understand, respond. Use evidence and quotes.
            </p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="font-bold text-primary text-sm">AO2 (12 marks)</p>
            <p className="text-xs text-muted-foreground mt-1">
              Analyse language, form, structure. Use terminology.
            </p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="font-bold text-primary text-sm">AO3 (6 marks)</p>
            <p className="text-xs text-muted-foreground mt-1">
              Context: social, historical, literary. Link to writer&apos;s purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Band Descriptors with Examples */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">{bandDescriptorsTitle}</h2>
        <div className="space-y-6">
          {BANDS.map((band) => (
            <div key={band.level} className={`rounded-lg border-2 p-5 ${band.colour}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">
                  Level {band.level}: {band.label}
                </h3>
                <span className="rounded-full bg-background/80 px-3 py-1 text-sm font-bold">
                  {band.marks} marks
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 mb-4">
                <div className="rounded bg-background/60 p-2.5">
                  <p className="text-xs font-bold mb-1">AO1</p>
                  <p className="text-xs">{band.ao1}</p>
                </div>
                <div className="rounded bg-background/60 p-2.5">
                  <p className="text-xs font-bold mb-1">AO2</p>
                  <p className="text-xs">{band.ao2}</p>
                </div>
                <div className="rounded bg-background/60 p-2.5">
                  <p className="text-xs font-bold mb-1">AO3</p>
                  <p className="text-xs">{band.ao3}</p>
                </div>
              </div>

              <div className="rounded bg-background/80 p-3">
                <p className="text-xs font-bold mb-1">
                  Example Student Response (An Inspector Calls)
                </p>
                <p className="text-xs italic leading-relaxed">{band.studentExample}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Errors */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-4">{commonErrorsTitle}</h2>
        <div className="space-y-4">
          {COMMON_ERRORS.map((item, i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-600 text-xs font-bold">
                  !
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm">{item.error}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-medium text-primary">Fix:</span> {item.fix}
                  </p>
                  <div className="mt-2 rounded bg-muted p-2">
                    <p className="text-xs text-muted-foreground italic">{item.example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marking Tips */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-3">{markingTipsTitle}</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary font-bold">1.</span>
            Read the whole response first before marking — get an overall impression of the band.
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">2.</span>
            Use a &apos;best fit&apos; approach — if a response straddles two bands, consider which
            band best describes the majority.
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">3.</span>
            Mark positively — reward what students CAN do, not penalise what they can&apos;t.
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">4.</span>
            AO1 and AO2 carry equal weight. A response strong on quotes but weak on analysis should
            not score higher than Level 4.
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">5.</span>
            Context (AO3) should be woven in, not bolted on. A paragraph-long history lesson at the
            start does not demonstrate understanding.
          </li>
        </ul>
      </section>
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under
        the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of
        criticism and review.
      </p>
    </div>
  )
}
