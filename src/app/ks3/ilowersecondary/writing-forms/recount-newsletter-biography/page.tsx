import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  WRITING_FORMS,
  WRITING_PURPOSES,
  WAO1_GRID,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

// These three forms are a subset of the canonical WRITING_FORMS list.
const RECOUNT = WRITING_FORMS.find((f) => f === 'recount')!
const NEWSLETTER = WRITING_FORMS.find((f) => f === 'newsletter')!
const AUTOBIOGRAPHICAL = WRITING_FORMS.find((f) => f === 'autobiographical')!
const BIOGRAPHICAL = WRITING_FORMS.find((f) => f === 'biographical')!

export const metadata: Metadata = {
  title: 'Recount, newsletter & biography — KS3 iLowerSecondary English writing forms',
  description:
    'Structure, register, purpose and audience for three Section B writing forms — recount, newsletter and autobiographical/biographical writing — with original annotated models mapped to the WAO1 bands, a decision box and practice prompts.',
  alternates: {
    canonical:
      'https://theenglishhub.app/ks3/ilowersecondary/writing-forms/recount-newsletter-biography',
  },
  openGraph: {
    title: 'Recount, newsletter & biography — iLowerSecondary writing forms',
    description:
      'How to control recount chronology, the newsletter community voice and reflective auto/biographical writing for top WAO1 marks, with original annotated models.',
  },
}

// ─── Per-form guidance (original, mapped to WRITING_FORMS subset) ──────

type FormGuide = {
  key: (typeof WRITING_FORMS)[number]
  label: string
  summary: string
  structure: string[]
  register: string
  purposes: string
  audiences: string
}

const FORM_GUIDES: FormGuide[] = [
  {
    key: RECOUNT,
    label: 'Recount',
    summary: 'An ordered retelling of something that really happened.',
    structure: [
      'Orientation first: in one or two sentences set out who, what, where and when so the reader is grounded before events begin.',
      'Strict chronological order, signalled by time connectives ("first", "soon after", "by midday", "finally") so the sequence is never in doubt.',
      'Selected, relevant detail — the moments that mattered — rather than a minute-by-minute list of everything.',
      'A reorientation to close: a short comment that rounds the account off, often a reflection on the outcome or what it meant.',
    ],
    register:
      'Mostly past tense and a clear, controlled voice. First person if it happened to you, third person if you are reporting on others. The tone is steady and factual, but well-chosen verbs and detail keep it from reading like a flat list.',
    purposes: 'inform',
    audiences:
      'Often a generic adult readership (for example a school report read by staff and parents) or peers reading about a shared event. Match the formality to that reader.',
  },
  {
    key: NEWSLETTER,
    label: 'Newsletter',
    summary: 'A short informative bulletin written for a named community.',
    structure: [
      'A title or masthead, then a clear headline for each item so a reader can scan and find what matters to them.',
      'Separate, focused sections (each with its own sub-heading) rather than one unbroken block of text.',
      'The most important news first; each section is topic-led with a clear opening sentence.',
      'Practical detail the reader can act on — dates, names, places and what to do next — and a warm closing note to the community.',
    ],
    register:
      'A friendly, inclusive "community voice" that speaks to the group as members ("our club", "we", "thank you to everyone who…"). It is informative and positive, but still organised and accurate — the warmth never excuses careless writing.',
    purposes: 'inform',
    audiences:
      'The specific group the newsletter serves — a club, year group or local community. The voice assumes shared membership and shared interest.',
  },
  {
    key: AUTOBIOGRAPHICAL,
    label: 'Autobiographical & biographical',
    summary:
      'Reflective life-writing: your own life (autobiographical) or someone else’s (biographical).',
    structure: [
      'A reflective selection of significant moments, not a cradle-to-now list — choose the few events that carry meaning and explore them.',
      'A shaping focus or theme (a turning point, an achievement, a lesson) that gives the writing a point and links the chosen moments.',
      'Autobiographical: first person and a reflective voice that tells the reader what the experience taught or changed. Biographical: third person, a clear time frame and concrete factual detail showing why the person matters.',
      'An ending that looks back on the significance of what was selected, rather than simply stopping at the last event.',
    ],
    register:
      'Reflective and personal. Autobiographical writing carries honest individual feeling so a real person is sensed behind the words; biographical writing keeps a measured, informative tone that still conveys genuine interest in its subject.',
    purposes: 'inform',
    audiences:
      'Usually a general adult or older-student readership interested in a life and what it reveals. Keep the register considered and the reflection sincere.',
  },
]

// Confirm the purposes we cite are part of the canonical purpose list.
const INFORM = WRITING_PURPOSES.find((p) => p === 'inform')!
const ENTERTAIN = WRITING_PURPOSES.find((p) => p === 'entertain')!

// ─── Original annotated models (invented people and events) ────────────

type Model = {
  formLabel: string
  taskLabel: string
  task: string
  heading: string
  body: string
  annotations: { band: string; point: string }[]
}

const MODELS: Model[] = [
  {
    formLabel: 'Recount',
    taskLabel: 'Sample task (invented)',
    task: 'Write a recount for the school report describing the day Year 9 spent restoring the river path.',
    heading: 'A recount — “The Day We Cleared the River Path”',
    body: 'On a damp Friday in March, the whole of Year 9 set out from Brackenfield School to restore the overgrown path along the River Mell. We arrived at half past nine, splitting into teams before anyone had even pulled on their gloves. First, the digging team cut back the brambles that had swallowed the old footbridge, while a second group hauled three sacks of litter from the reeds. By midday, the path was visible for the first time in years, and Mr Oduya marked the route with new wooden posts. Soon after lunch the rain stopped, and a heron we had not noticed all morning lifted from the far bank, as if inspecting our work. We finished at three o’clock, mud to the elbows and quietly proud. Looking back, the path was only a short stretch of riverbank, yet leaving it better than we found it taught us that small, shared effort changes a place more than any of us expected.',
    annotations: [
      {
        band: 'S3 / S4 — WAO1',
        point:
          'Form established and maintained: a one-sentence orientation (who, what, where, when) before events, then strict chronology — “First… By midday… Soon after lunch… We finished at three o’clock.”',
      },
      {
        band: 'S4 — WAO1',
        point:
          'A controlled reorientation to close (“Looking back… taught us that…”) adapts the recount for purpose rather than simply stopping at the last event.',
      },
      {
        band: 'S3 / S4 — WAO1',
        point:
          'Stylistic features support purpose: the heron lifting “as if inspecting our work” adds interest without breaking the informative, factual register.',
      },
    ],
  },
  {
    formLabel: 'Newsletter',
    taskLabel: 'Sample task (invented)',
    task: 'Write a newsletter for the members of the Greenfield Allotment Society about the past month.',
    heading: 'GREENFIELD GROWERS — The Allotment Newsletter, Spring Edition',
    body: 'A warm welcome back to every plot-holder after the long winter. Our biggest news first: the new water butts are finally in. Thanks to a grant from Greenfield Parish, four 200-litre butts now stand at the top of each row, so no one has to lug cans from the gate again. Plot of the Month goes to Mrs Anwen Pryce, whose early broad beans are already knee-high — drop by Plot 14 if you want her secret. Looking ahead, our spring Seed Swap takes place on Saturday 11 April from ten until noon by the tool shed; bring any spare seed and a labelled jar, and we will sort the rest. A small reminder, too: please latch the main gate behind you, as the rabbits have discovered Row C. Whatever the weather brings, thank you for keeping our patch of Greenfield growing. See you among the rows.',
    annotations: [
      {
        band: 'S3 / S4 — WAO1',
        point:
          'Form established and maintained: a masthead title, the most important news first, and clearly separated topic-led items (water butts, Plot of the Month, Seed Swap, a reminder).',
      },
      {
        band: 'S4 — WAO1',
        point:
          'Sophisticated audience awareness: a sustained inclusive “community voice” (“our patch”, “see you among the rows”) speaks to members as a group.',
      },
      {
        band: 'S3 — WAO1',
        point:
          'Stylistic features support the informative purpose: concrete, actionable detail (date, time, place, what to bring) the reader can act on.',
      },
    ],
  },
  {
    formLabel: 'Autobiographical / biographical',
    taskLabel: 'Sample task (invented)',
    task: 'Write a biographical piece about a person whose work changed your local area.',
    heading: 'A biographical piece — “The Woman Who Mapped Our Marsh”',
    body: 'Few people in Tilbury Reach remember that the nature reserve they walk through each weekend began with one retired teacher and a notebook. For thirty years, Esther Calloway taught geography at the village school; when she retired in 1994, she did not stop walking the marsh — she started recording it. Every Sunday, in the same green raincoat, she counted birds, sketched the shifting channels and pressed the plants she could not name. By 2001 her notebooks ran to forty volumes, and it was that patient, unglamorous evidence that persuaded the council the marsh was worth protecting. She rarely spoke about the campaign itself; what she remembered, near the end, was the morning a bittern returned after a decade away. Esther died in 2010, but the reserve carries her name on a single modest sign. Her life is worth telling not because it was dramatic, but because it shows how steady, careful attention to one place can outlast the person who paid it.',
    annotations: [
      {
        band: 'S3 / S4 — WAO1',
        point:
          'Form established and maintained: third person, a clear time frame (1994, 2001, 2010) and a reflective selection of significant moments rather than a flat life-list.',
      },
      {
        band: 'S4 — WAO1',
        point:
          'Form adapted and controlled for purpose: a shaping theme — patient attention outlasting a person — links the chosen moments and gives the piece a point.',
      },
      {
        band: 'S3 / S4 — WAO1',
        point:
          'Stylistic features support purpose: the recurring “green raincoat” and the closing reflection convey genuine interest while keeping a measured, informative tone.',
      },
    ],
  },
]

// ─── “Which form when” decision rows (original) ────────────────────────

const DECISION_ROWS = [
  {
    cue: 'The task asks you to retell a single event in the order it happened.',
    form: 'Recount',
    why: 'Chronology and a clear orientation are the point; the reader wants the sequence, not a community bulletin or a whole life.',
  },
  {
    cue: 'The task names a group, club or community and asks you to update them.',
    form: 'Newsletter',
    why: 'It needs headlined, separated sections and an inclusive community voice — features a plain recount does not have.',
  },
  {
    cue: 'The task is about your own life and what an experience meant to you.',
    form: 'Autobiographical',
    why: 'First-person reflection on selected significant moments is rewarded; pure chronology would miss the “what it meant” focus.',
  },
  {
    cue: 'The task asks you to write about another person’s life and importance.',
    form: 'Biographical',
    why: 'Third person, a time frame and a shaping theme show why the person matters — more than a list of dates.',
  },
]

// ─── Original practice prompts ─────────────────────────────────────────

const PRACTICE_PROMPTS = [
  {
    form: 'Recount',
    prompt:
      'Write a recount for your school’s website describing the morning your class released the trout you had raised back into a local stream.',
  },
  {
    form: 'Newsletter',
    prompt:
      'Write the autumn newsletter for the members of the Harrowgate Cycling Club, reporting on the season and the road-safety evening ahead.',
  },
  {
    form: 'Autobiographical / biographical',
    prompt:
      'Write a biographical piece about a neighbour or relative whose quiet work made a difference to the people around them, focusing on the moments that reveal why their life is worth telling.',
  },
]

export default function RecountNewsletterBiographyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Writing forms',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms',
          },
          {
            name: 'Recount, newsletter & biography',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms/recount-newsletter-biography',
          },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-950/60">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-emerald-700">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3" className="hover:text-emerald-700">
                KS3
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-emerald-700">
                iLowerSecondary English
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary/writing-forms" className="hover:text-emerald-700">
                Writing forms
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-ink-950/80" aria-current="page">
              Recount, newsletter &amp; biography
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Section B writing forms · WAO1 guide
          </p>
          <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight text-ink-950">
            Recount, newsletter &amp; biography
          </h1>
          <p className="text-lg leading-relaxed text-ink-950/85">
            Three forms you may meet in the Section B writing task share a problem: each retells
            real events, so it is tempting to write the same flat account whichever form you are
            given. The marks come from handling each one&rsquo;s <strong>conventions</strong>,{' '}
            <strong>register</strong>, <strong>purpose</strong> and <strong>audience</strong> with
            control. This guide takes the <span className="capitalize">{RECOUNT}</span>,{' '}
            <span className="capitalize">{NEWSLETTER}</span>, and{' '}
            <span className="capitalize">{AUTOBIOGRAPHICAL}</span>/
            <span className="capitalize">{BIOGRAPHICAL}</span> forms in turn, with an original
            annotated model for each.
          </p>
        </header>

        <section aria-labelledby="forms" className="mb-12">
          <h2 id="forms" className="mb-4 font-serif text-2xl font-semibold text-ink-950">
            The three forms, side by side
          </h2>
          <p className="mb-6 text-base leading-relaxed text-ink-950/85">
            For each form, match the structure and register below; that is how the form is
            &ldquo;established and maintained&rdquo; in the WAO1 grid further down. Their dominant
            purpose is to <strong>{INFORM}</strong> — a recount or biography may also{' '}
            <strong>{ENTERTAIN}</strong>, but it should never abandon its informative backbone.
          </p>
          <div className="space-y-5">
            {FORM_GUIDES.map((g) => (
              <div key={g.key} className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
                <h3 className="mb-1 font-serif text-lg font-semibold text-ink-950">{g.label}</h3>
                <p className="mb-3 text-sm italic text-ink-950/70">{g.summary}</p>
                <p className="mb-1 text-sm font-semibold text-ink-950">
                  Structure &amp; layout conventions
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-950/85">
                  {g.structure.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mb-1 text-sm font-semibold text-ink-950">Register</p>
                <p className="mb-3 text-sm leading-relaxed text-ink-950/85">{g.register}</p>
                <p className="mb-1 text-sm font-semibold text-ink-950">Purpose</p>
                <p className="mb-3 text-sm leading-relaxed text-ink-950/85">
                  Primarily to <strong>{g.purposes}</strong>.
                </p>
                <p className="mb-1 text-sm font-semibold text-ink-950">Typical audience</p>
                <p className="text-sm leading-relaxed text-ink-950/85">{g.audiences}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="grid" className="mb-12">
          <h2 id="grid" className="mb-4 font-serif text-2xl font-semibold text-ink-950">
            What the examiner rewards (WAO1)
          </h2>
          <p className="mb-6 text-base leading-relaxed text-ink-950/85">
            All three forms are judged for form, communication and purpose against this levelled
            grid. Read the bands as a journey: from &ldquo;some awareness&rdquo; of audience and a
            form that is &ldquo;sometimes maintained&rdquo;, up to a &ldquo;sophisticated&rdquo;
            awareness of audience and a form &ldquo;adapted and controlled for purpose&rdquo;. The
            annotated models that follow point to exactly where they hit these bands.
          </p>
          <div className="space-y-4">
            {WAO1_GRID.map((row) => (
              <div key={row.level} className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-emerald-700">
                    {row.level}
                  </span>
                  <span className="text-sm text-ink-950/70">{row.marks} marks</span>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-950/85">
                  {row.descriptors.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="models"
          className="mb-12 rounded-lg bg-cream-100 p-6 ring-1 ring-ink-950/5 sm:p-8"
        >
          <h2 id="models" className="mb-2 font-serif text-2xl font-semibold text-ink-950">
            Three original annotated models
          </h2>
          <p className="mb-6 text-sm text-ink-950/75">
            Every task, person and event below is invented. Each model is short (around
            150&ndash;200 words) so you can see the whole shape of the form, then read why it earns
            marks against the WAO1 bands.
          </p>
          <div className="space-y-8">
            {MODELS.map((m) => (
              <div key={m.heading}>
                <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {m.formLabel}
                </p>
                <div className="mb-4 rounded-lg border-l-4 border-emerald-400 bg-cream-50 p-4">
                  <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    {m.taskLabel}
                  </p>
                  <p className="text-sm italic leading-relaxed text-ink-950">
                    &ldquo;{m.task}&rdquo;
                  </p>
                </div>
                <div className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
                  <p className="mb-3 font-serif text-base font-semibold text-ink-950">
                    {m.heading}
                  </p>
                  <p className="text-base leading-relaxed text-ink-950">{m.body}</p>
                </div>
                <div className="mt-4 rounded-lg border-l-4 border-emerald-400 bg-cream-50 p-4">
                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Why this earns marks — annotated to WAO1 bands
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-ink-950/85">
                    {m.annotations.map((a) => (
                      <li key={a.point}>
                        <span className="font-mono text-xs font-semibold text-emerald-700">
                          {a.band}:
                        </span>{' '}
                        {a.point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="which-form"
          className="mb-12 rounded-lg bg-cream-100 p-6 ring-1 ring-ink-950/5 sm:p-8"
        >
          <h2 id="which-form" className="mb-2 font-serif text-2xl font-semibold text-ink-950">
            Which form when? — a decision box
          </h2>
          <p className="mb-6 text-sm text-ink-950/75">
            The task wording names the form. If it is unclear, match the cue to the form before you
            plan a single line.
          </p>
          <div className="overflow-x-auto rounded-lg ring-1 ring-ink-950/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-cream-100 text-ink-950">
                  <th className="p-3 font-semibold">If the task&hellip;</th>
                  <th className="p-3 font-semibold">Write a&hellip;</th>
                  <th className="p-3 font-semibold">Because</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_ROWS.map((r, i) => (
                  <tr key={r.form} className={i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100/50'}>
                    <td className="p-3 align-top text-ink-950/85">{r.cue}</td>
                    <td className="p-3 align-top font-semibold text-ink-950">{r.form}</td>
                    <td className="p-3 align-top text-ink-950/85">{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="practice" className="mb-12">
          <h2 id="practice" className="mb-4 font-serif text-2xl font-semibold text-ink-950">
            Practice prompts
          </h2>
          <p className="mb-6 text-base leading-relaxed text-ink-950/85">
            Three original prompts, one per form. Plan briefly, write to time, then check your draft
            against the structure conventions and the WAO1 grid above.
          </p>
          <ol className="space-y-4">
            {PRACTICE_PROMPTS.map((p) => (
              <li key={p.form} className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {p.form}
                </p>
                <p className="text-base leading-relaxed text-ink-950/85">{p.prompt}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-16 border-t border-ink-950/10 pt-6 text-xs leading-relaxed text-ink-950/55">
          <p>{SPEC_ATTRIBUTION}</p>
          <p className="mt-3">
            This guide is provided for educational guidance (criticism and instruction). The sample
            tasks, models and practice prompts are original works written by The English Hub; every
            person and event in them is invented and is not reproduced from any past paper or
            copyrighted source booklet. The English Hub is not affiliated with or endorsed by
            Pearson.
          </p>
        </footer>
      </article>
    </>
  )
}
