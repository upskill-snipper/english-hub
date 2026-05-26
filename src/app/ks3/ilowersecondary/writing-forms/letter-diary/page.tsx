import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  WRITING_FORMS,
  WRITING_PURPOSES,
  WAO1_GRID,
  ASSESSMENT_OBJECTIVES,
  SECTIONS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

// Pull the two forms this guide covers straight from the canonical list so
// the page can never drift from the specification's wording.
const LETTER = WRITING_FORMS.find((f) => f === 'letter')!
const DIARY = WRITING_FORMS.find((f) => f === 'diary')!
const WAO1 = ASSESSMENT_OBJECTIVES.WAO1
const SECTION_B = SECTIONS.B

export const metadata: Metadata = {
  title: 'Letter & diary - KS3 iLowerSecondary English writing-form guide',
  description:
    'Master the letter and diary forms for Section B: formal vs informal letter openings and sign-offs, dated reflective diary entries, register, purposes and audiences, two original annotated models and a form-conventions checklist.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms/letter-diary',
  },
  openGraph: {
    title: 'Letter & diary - iLowerSecondary writing-form guide',
    description:
      'Conventions, register, purposes and audiences for the letter and diary forms, with two original examiner-annotated models and a checklist.',
  },
}

// ─── Form profiles (original guidance, mapped to WRITING_FORMS) ────────

type FormProfile = {
  form: (typeof WRITING_FORMS)[number]
  summary: string
  structure: { label: string; detail: string }[]
  register: string
  purposes: (typeof WRITING_PURPOSES)[number][]
  audiences: string[]
}

const LETTER_PROFILE: FormProfile = {
  form: LETTER,
  summary:
    'A written message addressed to a defined reader. The single biggest decision is whether the situation is formal or informal - everything else follows from that.',
  structure: [
    {
      label: 'Informal opening',
      detail:
        'A first name after "Dear" (e.g. "Dear Sam,"). The first line is warm and personal, often referring to the reader directly ("It feels like ages since we last spoke").',
    },
    {
      label: 'Formal opening',
      detail:
        'Either a named title ("Dear Mr Okafor,") or, where the name is unknown, "Dear Sir or Madam,". The first paragraph states the precise reason for writing in plain, courteous language.',
    },
    {
      label: 'Body',
      detail:
        'One clear idea per paragraph, sequenced logically and linked so the reader is led from the reason for writing to what you want to happen.',
    },
    {
      label: 'Informal sign-off',
      detail:
        'A warm close such as "Take care," or "Write back soon," followed by your first name only.',
    },
    {
      label: 'Formal sign-off',
      detail:
        'Pair the close with the opening: "Dear Sir or Madam" → "Yours faithfully"; a named recipient → "Yours sincerely". Then your full name.',
    },
  ],
  register:
    'The register is chosen, not fixed. To a friend it is relaxed and may use contractions and direct address. To an adult in authority it is formal: standard English, full forms instead of contractions, precise vocabulary and a controlled, polite tone - even when the purpose is to complain.',
  purposes: ['argue', 'persuade', 'inform', 'explain', 'express an opinion'],
  audiences: [
    'Specific or generic adults - a head teacher, a manufacturer, an editor, a local council.',
    'A friend or relative of the writer’s own age or older (an informal letter).',
  ],
}

const DIARY_PROFILE: FormProfile = {
  form: DIARY,
  summary:
    'A private, dated entry recording what happened and how the writer felt about it. The reader is, in effect, the writer’s future self, so the voice is confiding and honest.',
  structure: [
    {
      label: 'Date line',
      detail:
        'Begin with a date (and sometimes a day or time): "Tuesday 14 March - late". This signals the diary form instantly and frames the entry as one moment in time.',
    },
    {
      label: 'Optional address',
      detail:
        'An opening such as "Dear Diary," is conventional but optional; many strong entries simply launch into the writer’s thoughts.',
    },
    {
      label: 'Recount of events',
      detail:
        'Mostly past tense: what happened today, told selectively rather than minute by minute.',
    },
    {
      label: 'Reflection',
      detail:
        'A shift into present feeling and thought - the worries, hopes and second-guessing the writer would not say aloud. This is the heart of the form.',
    },
    {
      label: 'Forward or backward look',
      detail:
        'A closing thought that anticipates tomorrow or reconsiders the day, often a single short, resonant sentence.',
    },
  ],
  register:
    'Informal and expressive but still controlled. The voice is intimate - fragments, dashes, rhetorical questions to the self and emotive vocabulary are all natural here - yet spelling and punctuation must stay accurate, because register is a deliberate choice rather than an excuse for carelessness.',
  purposes: ['express an opinion', 'describe', 'entertain', 'explain'],
  audiences: [
    'The writer themselves - there is no external reader, which licenses the confiding, unguarded tone.',
    'In an exam, an examiner reading over the writer’s shoulder, so clarity must survive the informal voice.',
  ],
}

const PROFILES: FormProfile[] = [LETTER_PROFILE, DIARY_PROFILE]

// ─── Original annotated models ────────────────────────────────────────

type Annotation = { point: string; band: string }

const LETTER_MODEL = {
  scenario:
    'An invented, neutral task: "Your school is considering ending its after-school clubs to save money. Write a letter to the head teacher giving your opinion." Audience: an adult in authority. Purpose: to express an opinion and persuade.',
  greeting: 'Dear Mrs Hartley,',
  body: [
    'I am writing to share my concern about the proposal to close all after-school clubs at the end of this term. I understand that the school must manage its budget carefully, and I do not pretend that this is an easy decision; however, I believe the clubs give back far more than they cost.',
    'For many students, the hour after the final bell is the most valuable of the day. The debating club taught me to plan an argument before I spoke, and the gardening club gave a quieter group of pupils a place where they clearly belonged. These are not luxuries - they are where confidence is built.',
    'It could be argued that lessons alone should be enough. Yet a school is more than its timetable, and the skills clubs teach rarely fit inside one. If the cost is the obstacle, might a small voluntary contribution, or a parent-run rota, keep the most popular clubs open?',
    'I hope you will consider these points before a final decision is made. Thank you for taking the time to read my letter.',
  ],
  signoff: 'Yours sincerely,',
  name: 'Priya Anand, Year 9',
  annotations: [
    {
      point:
        'The named greeting and "Yours sincerely" are correctly paired, and the reason for writing is stated in the first sentence - the form is established and maintained throughout.',
      band: 'WAO1 S3: "Form established and maintained throughout."',
    },
    {
      point:
        'The register stays formal and respectful even while disagreeing ("I do not pretend that this is an easy decision"), showing a secure sense of an adult-in-authority reader.',
      band: 'WAO1 S3: "Appropriate to task with secure awareness of audience."',
    },
    {
      point:
        'Each paragraph carries one idea and is linked to the next (concern → value → counter-argument → close), so the sections are organised with clear control that supports coherence throughout.',
      band: 'WAO1 S3: "Organised with clear control of paragraphs or sections that supports coherence throughout."',
    },
    {
      point:
        'The concession ("It could be argued that…") followed by a practical alternative adapts the letter for its persuasive purpose rather than just listing reasons - the move that reaches for the top band.',
      band: 'WAO1 S4: "Form adapted and controlled for purpose."',
    },
  ] satisfies Annotation[],
}

const DIARY_MODEL = {
  scenario:
    'An invented, neutral task: "Write a diary entry about a day when something did not go as you had planned." Purpose: to express an opinion and entertain through an honest, reflective voice.',
  dateLine: 'Thursday 9 October - almost midnight',
  body: [
    'Well, that is not how I imagined today would go. I had rehearsed my science presentation in front of the mirror for a week - every slide, every pause, even the joke I was sure would land.',
    'And then the projector died. Just like that, halfway through, the screen went black and forty faces turned to me instead of the diagram I was hiding behind. For about three seconds I genuinely considered pretending to faint.',
    'But I did not. I do not really know where it came from, but I closed the laptop, walked to the front, and just explained the experiment with my hands and a whiteboard pen. It was messier. It was also, I think, better. People actually asked questions afterwards, which never happens when I read from slides.',
    'So the thing I had planned for collapsed, and the thing I had not planned for is the part I am proud of. That is annoying and strangely comforting at the same time. Maybe tomorrow I will leave a slide out on purpose. Maybe not. Either way, I am going to sleep before I overthink this any further.',
  ],
  annotations: [
    {
      point:
        'The dated, time-stamped opening and the confiding voice ("Well, that is not how I imagined today would go") establish the diary form at once.',
      band: 'WAO1 S3: "Form established and maintained throughout."',
    },
    {
      point:
        'The intimate, unguarded register ("I genuinely considered pretending to faint") is exactly right for an audience of the writer’s future self, showing a secure awareness of who the form is for.',
      band: 'WAO1 S3: "Appropriate to task with secure awareness of audience."',
    },
    {
      point:
        'The entry moves cleanly from recount (the projector failing) to reflection (what the writer learned), with controlled paragraphing that keeps the account coherent.',
      band: 'WAO1 S3: "Organised with clear control of paragraphs or sections that supports coherence throughout."',
    },
    {
      point:
        'The closing turn - "the thing I had not planned for is the part I am proud of" - uses the reflective convention of the form confidently to land the purpose, reaching for the top band.',
      band: 'WAO1 S4: "Stylistic features used confidently fully supporting purpose."',
    },
  ] satisfies Annotation[],
}

// ─── Form conventions checklist (original) ────────────────────────────

const CHECKLIST = [
  'Letter: my greeting and sign-off are paired correctly (Dear Sir or Madam → Yours faithfully; a name → Yours sincerely; a friend → first name only).',
  'Letter: my reason for writing is clear within the first two sentences.',
  'Letter: my register matches the reader - formal and controlled for an adult in authority, relaxed for a friend - and stays consistent to the end.',
  'Diary: I have opened with a date (and the entry reads as one moment in time).',
  'Diary: I have written mostly in the first person and past tense, then shifted into present reflection.',
  'Diary: my voice is confiding and honest, but my spelling and punctuation are still accurate.',
  'Both: each paragraph or section carries one idea and is linked to the next so the whole piece is coherent.',
  'Both: the form is unmistakable from the opening line and is maintained right to the close.',
]

// ─── Original practice prompts ────────────────────────────────────────

const PRACTICE_PROMPTS = [
  {
    form: 'Letter',
    prompt:
      'A local library is reducing its opening hours. Write a letter to the library manager giving your opinion on the change and suggesting an alternative. Decide on a formal register, pair your greeting and sign-off, and aim for around 200 words.',
  },
  {
    form: 'Diary',
    prompt:
      'Write a dated diary entry about an evening when you had to make a decision on your own for the first time. Recount what happened, then reflect honestly on how you felt and what you might do differently. Aim for around 200 words.',
  },
]

export default function LetterDiaryPage() {
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
            name: 'Letter & diary',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-forms/letter-diary',
          },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3" className="hover:text-primary">
                KS3
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                iLowerSecondary English
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary/writing-forms" className="hover:text-primary">
                Writing forms
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-foreground" aria-current="page">
              Letter &amp; diary
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            Writing-form guide · {WAO1.code}
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-foreground">
            Letter &amp; diary
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The <strong>letter</strong> and the <strong>diary</strong> are two of the{' '}
            {WRITING_FORMS.length} forms you may be set in {SECTION_B.name}. They look simple, but
            their marks live in the details: a letter that pairs its greeting and sign-off correctly
            and a diary that genuinely reflects rather than just lists. This guide covers the
            conventions, register, purposes and audiences of each, with an original
            examiner-annotated model for both.
          </p>
        </header>

        <section
          aria-labelledby="the-task"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="the-task" className="mb-3 font-heading text-2xl font-semibold text-foreground">
            Where these forms sit
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            {SECTION_B.name} carries {SECTION_B.marks} marks. {SECTION_B.description} It is assessed
            against {SECTION_B.assessmentObjectives.join(' and ')}.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            The objective that rewards getting the form right is <strong>{WAO1.code}</strong>, which
            asks you to <em>{WAO1.descriptor.toLowerCase()}</em> Choosing the right conventions for
            a letter or a diary is precisely how you show the examiner the form is
            &ldquo;established and maintained&rdquo;.
          </p>
        </section>

        {PROFILES.map((p) => (
          <section key={p.form} aria-labelledby={`form-${p.form}`} className="mb-12">
            <h2
              id={`form-${p.form}`}
              className="mb-2 font-heading text-2xl font-semibold capitalize text-foreground"
            >
              The {p.form} form
            </h2>
            <p className="mb-6 text-base italic leading-relaxed text-muted-foreground">
              {p.summary}
            </p>

            <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
              Layout &amp; structure conventions
            </h3>
            <div className="mb-6 space-y-3">
              {p.structure.map((s) => (
                <div key={s.label} className="rounded-lg bg-card p-4 border border-border/60">
                  <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                    {s.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-2 font-mono text-sm font-semibold text-primary">Register</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.register}</p>
              </div>
              <div className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-2 font-mono text-sm font-semibold text-primary">
                  Typical purposes
                </h3>
                <ul className="list-disc space-y-1 pl-4 text-sm capitalize leading-relaxed text-muted-foreground">
                  {p.purposes.map((purpose) => (
                    <li key={purpose}>{purpose}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-2 font-mono text-sm font-semibold text-primary">
                  Common audiences
                </h3>
                <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {p.audiences.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <section aria-labelledby="grid" className="mb-12">
          <h2 id="grid" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            What examiners reward ({WAO1.code})
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            This is the levelled grid your letter or diary is judged against for {WAO1.code} (form,
            communication and purpose). The journey from S1 to S4 is a journey from form
            &ldquo;sometimes maintained&rdquo; to form &ldquo;adapted and controlled for
            purpose&rdquo;. The annotations on the models below point to exactly these descriptors.
          </p>
          <div className="space-y-4">
            {WAO1_GRID.map((row) => (
              <div key={row.level} className="rounded-lg bg-card p-5 border border-border/60">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-primary">{row.level}</span>
                  <span className="text-sm text-muted-foreground">{row.marks} marks</span>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {row.descriptors.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="model-letter"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="model-letter"
            className="mb-2 font-heading text-2xl font-semibold text-foreground"
          >
            Model - a formal letter
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">{LETTER_MODEL.scenario}</p>

          <div className="rounded-lg bg-card p-5 border border-border/60">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {LETTER_MODEL.greeting}
            </p>
            {LETTER_MODEL.body.map((para, i) => (
              <p key={i} className="mb-3 text-base leading-relaxed text-foreground">
                {para}
              </p>
            ))}
            <p className="mt-4 text-sm font-medium text-muted-foreground">{LETTER_MODEL.signoff}</p>
            <p className="text-sm font-medium text-muted-foreground">{LETTER_MODEL.name}</p>
          </div>

          <div className="mt-5 rounded-lg border-l-4 border-primary/40 bg-card p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Why this earns marks - examiner annotations
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {LETTER_MODEL.annotations.map((a) => (
                <li key={a.band}>
                  <span>{a.point}</span>
                  <span className="mt-1 block font-mono text-xs text-primary">{a.band}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="model-diary"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="model-diary" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Model - a diary entry
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">{DIARY_MODEL.scenario}</p>

          <div className="rounded-lg bg-card p-5 border border-border/60">
            <p className="mb-3 text-sm font-medium text-muted-foreground">{DIARY_MODEL.dateLine}</p>
            {DIARY_MODEL.body.map((para, i) => (
              <p key={i} className="mb-3 text-base leading-relaxed text-foreground">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-5 rounded-lg border-l-4 border-primary/40 bg-card p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Why this earns marks - examiner annotations
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {DIARY_MODEL.annotations.map((a) => (
                <li key={a.band}>
                  <span>{a.point}</span>
                  <span className="mt-1 block font-mono text-xs text-primary">{a.band}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="checklist" className="mb-12">
          <h2 id="checklist" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Form-conventions checklist
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Run through this before you hand the paper in. Each line maps to a {WAO1.code}{' '}
            descriptor about form being established, maintained and controlled.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
            {CHECKLIST.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="practice" className="mb-12">
          <h2 id="practice" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Practice prompts
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Two original prompts - one for each form. Plan briefly, then write to time, applying the
            conventions and checklist above.
          </p>
          <div className="space-y-4">
            {PRACTICE_PROMPTS.map((p) => (
              <div key={p.form} className="rounded-lg border-l-4 border-primary/40 bg-card p-5">
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                  {p.form}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">{p.prompt}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{SPEC_ATTRIBUTION}</p>
          <p className="mt-3">
            This writing-form guide is provided for educational guidance (criticism and
            instruction). The sample tasks, model letter, model diary entry, annotations and
            practice prompts are original works written by The English Hub and are not reproduced
            from any past paper or copyrighted source booklet. The English Hub is not affiliated
            with or endorsed by Pearson.
          </p>
        </footer>
      </article>
    </>
  )
}
