import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  WRITING_SKILLS,
  WAO1_GRID,
  WRITING_FORMS,
  WRITING_PURPOSES,
  WRITING_AUDIENCES,
  ASSESSMENT_OBJECTIVES,
  SECTIONS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const SKILL = WRITING_SKILLS.find((s) => s.code === '2.1')!
const WAO1 = ASSESSMENT_OBJECTIVES.WAO1
const SECTION_B = SECTIONS.B

export const metadata: Metadata = {
  title: 'Form, audience & purpose - KS3 iLowerSecondary English writing masterclass',
  description:
    'Decode the Section B extended writing task: identify form, audience and purpose, learn the conventions of every form, signposting language for every purpose, register choices for each audience, and an annotated worked example.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/writing/form-audience-purpose',
  },
  openGraph: {
    title: 'Form, audience & purpose - iLowerSecondary writing masterclass',
    description:
      'How to decode the Section B task and control form, audience and purpose for top WAO1 marks, with an original annotated worked example.',
  },
}

// ─── Form conventions (original guidance, mapped to WRITING_FORMS) ─────

const FORM_CONVENTIONS: Record<
  (typeof WRITING_FORMS)[number],
  { summary: string; conventions: string[] }
> = {
  autobiographical: {
    summary: 'You write about your own life and experiences.',
    conventions: [
      'First person ("I", "we") and mostly past tense for events that happened.',
      'A reflective voice: tell the reader what the experience taught you or how it changed you.',
      'Selected, vivid moments rather than a list of everything - depth over coverage.',
      'Honest, personal feeling; the reader should sense a real individual behind the words.',
    ],
  },
  biographical: {
    summary: "You write about someone else's life.",
    conventions: [
      'Third person ("she", "he", "they") and a clear time frame for the events you cover.',
      'Factual detail and concrete examples that show why the person matters.',
      'A shaping focus - a theme or achievement - rather than a flat chronology.',
      'A measured, informative tone that still conveys interest in the subject.',
    ],
  },
  descriptive: {
    summary: 'You build a picture of a place, person, object or moment.',
    conventions: [
      'Strong sensory detail: sight, sound, smell, touch and taste.',
      'Carefully chosen vocabulary and imagery (similes, metaphors) rather than plot.',
      'A controlling viewpoint or moment that organises the description.',
      'Varied sentence lengths to control pace and atmosphere.',
    ],
  },
  diary: {
    summary: 'A private, dated entry recording events and feelings.',
    conventions: [
      'A date or "Dear Diary" opening and a personal, confiding voice.',
      'First person and a mixture of past tense (what happened) and present feeling.',
      'Informal, expressive register - thoughts the writer would not say aloud.',
      'A reflective closing thought that looks back or forward.',
    ],
  },
  letter: {
    summary: 'A written message addressed to a named or defined reader.',
    conventions: [
      'An appropriate greeting and sign-off (formal: "Dear Sir or Madam" / "Yours faithfully"; informal: a first name).',
      'A clear reason for writing stated early.',
      'Register matched to the recipient - formal for a manufacturer, warmer for a friend.',
      'Logical paragraphs and a courteous, purposeful close.',
    ],
  },
  narrative: {
    summary: 'A story with characters and a sequence of events.',
    conventions: [
      'A clear narrative shape: an opening that hooks, development, and a resolution.',
      'A consistent narrative perspective and tense.',
      'Character and setting built through detail, action and (where useful) dialogue.',
      'Tension or change that gives the story a point.',
    ],
  },
  newsletter: {
    summary: 'A short informative bulletin for a group or community.',
    conventions: [
      'A headline or title and clearly separated, focused items.',
      'An informative, friendly tone aimed at the group it serves.',
      'Topic-led paragraphs, the most important news first.',
      'Practical detail (dates, names, what to do next) the reader can act on.',
    ],
  },
  recount: {
    summary: 'An ordered retelling of something that happened.',
    conventions: [
      'Chronological order, signalled by time connectives ("first", "later", "finally").',
      'Past tense and a clear orientation: who, what, where, when.',
      'Selected, relevant detail rather than every minor event.',
      'A closing comment that rounds the account off.',
    ],
  },
}

// ─── Purpose signposting & tone (original, mapped to WRITING_PURPOSES) ─

const PURPOSE_GUIDANCE: Record<
  (typeof WRITING_PURPOSES)[number],
  { tone: string; signposts: string[] }
> = {
  argue: {
    tone: 'Confident and reasoned; acknowledge the other side, then dismantle it.',
    signposts: [
      'However, the opposing view overlooks…',
      'It could be argued that… yet the evidence shows…',
      'For these reasons, it is clear that…',
    ],
  },
  describe: {
    tone: 'Evocative and controlled; show, do not simply tell.',
    signposts: ['In the distance…', 'Closer now, the…', 'What struck me most was…'],
  },
  entertain: {
    tone: 'Lively and engaging; vary pace and surprise the reader.',
    signposts: [
      'Just when everything seemed calm…',
      'Little did anyone know…',
      'And that was only the beginning.',
    ],
  },
  explain: {
    tone: 'Clear and orderly; one idea leads logically to the next.',
    signposts: ['This happens because…', 'As a result…', 'To understand why, consider…'],
  },
  'express an opinion': {
    tone: 'Personal but reasoned; make your stance unmistakable.',
    signposts: [
      'In my view…',
      'What I find hard to accept is…',
      'For me, the most important point is…',
    ],
  },
  inform: {
    tone: 'Neutral and precise; facts and detail, not feelings.',
    signposts: ['There are three key points to note…', 'In addition…', 'Importantly…'],
  },
  persuade: {
    tone: 'Direct and motivating; make the reader want to act.',
    signposts: ['Imagine if…', 'Surely no one would disagree that…', 'Now is the time to…'],
  },
}

// ─── Audience register guidance (original) ────────────────────────────

const AUDIENCE_REGISTERS = [
  {
    audience: 'Specific or generic adults',
    examples: 'a newspaper readership, a head teacher, a manufacturer, a local council',
    register:
      'Formal and respectful. Use standard English, full forms rather than contractions, precise vocabulary and a polite, controlled tone. Address the reader as someone whose time and judgement matter.',
  },
  {
    audience: 'Older children',
    examples: 'students in the years above, a school magazine read by Year 9-11',
    register:
      'Mostly standard English but warmer and more direct. You can use rhetorical questions and lively examples, while still showing structure and control.',
  },
  {
    audience: 'Children of their own age',
    examples: 'classmates, peers reading a club newsletter or a class blog',
    register:
      'Approachable and energetic. A slightly informal, inclusive voice ("we", "us", "let’s") works well, but keep grammar and spelling accurate - register is a choice, not an excuse for carelessness.',
  },
]

export default async function FormAudiencePurposePage() {
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
            name: 'Writing skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing',
          },
          {
            name: 'Form, audience & purpose',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing/form-audience-purpose',
          },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-primary">
                {await t('ks3.page.bc.home')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3" className="hover:text-primary">
                {await t('ks3.page.bc.ks3')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                {await t('ks3.page.bc.ils')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary/writing" className="hover:text-primary">
                {await t('ks3.page.bc.writing_skills')}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-muted-foreground" aria-current="page">
              {await t('ks3.page.writing.form_audience_purpose.bc')}
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            Writing skill {SKILL.code} · {WAO1.code} masterclass
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-foreground">
            Form, audience &amp; purpose
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The first thing a strong response does is decode the task. Before you write a single
            sentence, you must know exactly what <strong>form</strong> you are writing in,{' '}
            <strong>who</strong> you are writing for, and <strong>why</strong> you are writing.
            Skill {SKILL.code}, &ldquo;{SKILL.title}&rdquo;, is about exactly this:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
            {SKILL.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </header>

        <section
          aria-labelledby="the-task"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="the-task" className="mb-3 font-heading text-2xl font-semibold text-foreground">
            What the extended task asks of you
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            {SECTION_B.name} carries {SECTION_B.marks} marks. {SECTION_B.description} It is assessed
            against {SECTION_B.assessmentObjectives.join(' and ')}. The objective at the centre of
            this page, <strong>{WAO1.code}</strong>, asks you to{' '}
            <em>{WAO1.descriptor.toLowerCase()}</em>
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Because the task is <strong>related to the theme in Section A</strong>, your reading
            during the first part of the paper feeds your writing: the topic is handed to you, so
            your marks come from <em>how</em> you write, not from inventing a subject. Spend a short
            time planning before the recommended writing window of {SECTION_B.recommendedLabel}.
          </p>
        </section>

        <section aria-labelledby="decode" className="mb-12">
          <h2 id="decode" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Decoding the task in three questions
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Every Section B task hides three instructions inside the wording. Underline the words
            that answer each question before you plan.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                q: 'FORM',
                a: 'What kind of text? A letter, a diary entry, an article for a newsletter, a description? The form controls layout, voice and conventions.',
              },
              {
                q: 'AUDIENCE',
                a: 'Who reads it? An adult in authority, older students, or your own age group? The audience controls register and how direct you can be.',
              },
              {
                q: 'PURPOSE',
                a: 'Why are you writing? To argue, persuade, inform, describe, explain, entertain or express an opinion? The purpose controls tone and signposting.',
              },
            ].map((c) => (
              <div key={c.q} className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-2 font-mono text-sm font-semibold text-primary">{c.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="forms" className="mb-12">
          <h2 id="forms" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Forms and their conventions
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            These are the forms you may be asked to write in. Each one carries its own conventions;
            matching them is how the form is &ldquo;established and maintained&rdquo; in the mark
            grid below.
          </p>
          <div className="space-y-5">
            {WRITING_FORMS.map((form) => {
              const f = FORM_CONVENTIONS[form]
              return (
                <div key={form} className="rounded-lg bg-card p-5 border border-border/60">
                  <h3 className="mb-1 font-heading text-lg font-semibold capitalize text-foreground">
                    {form}
                  </h3>
                  <p className="mb-3 text-sm italic text-muted-foreground">{f.summary}</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {f.conventions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="purposes" className="mb-12">
          <h2 id="purposes" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Purposes: tone and signposting language
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            The purpose decides the tone you adopt and the phrases that signal your intention to the
            reader. Borrow these signposts and adapt them to the theme you are given.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border/60">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className="p-3 font-semibold">Purpose</th>
                  <th className="p-3 font-semibold">Tone to aim for</th>
                  <th className="p-3 font-semibold">Signposting language</th>
                </tr>
              </thead>
              <tbody>
                {WRITING_PURPOSES.map((purpose, i) => {
                  const g = PURPOSE_GUIDANCE[purpose]
                  return (
                    <tr key={purpose} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="p-3 align-top font-semibold capitalize text-foreground">
                        {purpose}
                      </td>
                      <td className="p-3 align-top text-muted-foreground">{g.tone}</td>
                      <td className="p-3 align-top text-muted-foreground">
                        <ul className="space-y-1">
                          {g.signposts.map((s) => (
                            <li key={s} className="italic">
                              &ldquo;{s}&rdquo;
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="audiences" className="mb-12">
          <h2 id="audiences" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Audiences and register choices
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            The audiences you may be asked to write for are:{' '}
            <span className="italic">{WRITING_AUDIENCES}</span> Your <strong>register</strong> - how
            formal your language is - must shift to suit them.
          </p>
          <div className="space-y-4">
            {AUDIENCE_REGISTERS.map((a) => (
              <div key={a.audience} className="rounded-lg bg-card p-5 border border-border/60">
                <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                  {a.audience}
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">e.g. {a.examples}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.register}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="grid" className="mb-12">
          <h2 id="grid" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            How form and audience control are rewarded ({WAO1.code})
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            This is the levelled grid your writing is judged against for {WAO1.code} (form,
            communication and purpose). Notice how each level rewards <em>tighter</em> control of
            audience and form - the journey from S1 to S4 is a journey from &ldquo;some
            awareness&rdquo; to &ldquo;sophisticated&rdquo; and &ldquo;adapted and
            controlled&rdquo;.
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
          aria-labelledby="worked-example"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="worked-example"
            className="mb-2 font-heading text-2xl font-semibold text-foreground"
          >
            Worked example
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            An original walkthrough. Imagine Section A explored texts about{' '}
            <strong>protecting local green spaces</strong>. Here is an invented Section B task in
            that theme, decoded and answered.
          </p>

          <div className="mb-6 rounded-lg border-l-4 border-primary/40 bg-card p-4">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Sample task (invented)
            </p>
            <p className="text-base italic leading-relaxed text-foreground">
              &ldquo;Your town council has proposed building on the meadow next to your school.
              Write a letter to the council persuading them to keep the meadow as a public green
              space.&rdquo;
            </p>
          </div>

          <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
            Step 1 - Decode it
          </h3>
          <ul className="mb-6 list-disc space-y-1 pl-6 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong>Form:</strong> a letter - so it needs a formal greeting, clear paragraphs and
              a sign-off.
            </li>
            <li>
              <strong>Audience:</strong> the town council - specific adults in authority, so the
              register is formal and respectful.
            </li>
            <li>
              <strong>Purpose:</strong> to persuade - so the tone is direct and motivating, using
              persuasive signposting.
            </li>
          </ul>

          <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
            Step 2 - A brief plan
          </h3>
          <ol className="mb-6 list-decimal space-y-1 pl-6 text-sm leading-relaxed text-muted-foreground">
            <li>Greeting + state the reason for writing.</li>
            <li>The meadow&rsquo;s value to students and families.</li>
            <li>Counter the council&rsquo;s likely argument (need for housing).</li>
            <li>A practical alternative + a call to act.</li>
            <li>Courteous, purposeful sign-off.</li>
          </ol>

          <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
            Step 3 - An opening that nails form, audience and purpose
          </h3>
          <div className="rounded-lg bg-card p-5 border border-border/60">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Dear Members of the Council,
            </p>
            <p className="text-base leading-relaxed text-foreground">
              I am writing as a student at Hillside School to urge you to reconsider the proposal to
              build on Marsh Meadow. Imagine the hundreds of pupils who cross that meadow every
              morning, the families who picnic there at weekends, and the swifts that return to it
              each summer. Surely a space that gives so much to so many is worth protecting. I
              understand that our town needs more housing, and I do not dismiss that need lightly;
              however, there are brownfield sites within a mile of the meadow that could be
              developed instead. Now is the moment to choose a future that has room for both homes
              and green space.
            </p>
          </div>

          <div className="mt-5 rounded-lg border-l-4 border-primary/40 bg-card p-4">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Why this earns marks - annotated
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong>Form:</strong> &ldquo;Dear Members of the Council&rdquo; and the stated
                reason for writing establish the letter form immediately.
              </li>
              <li>
                <strong>Audience:</strong> the register is formal and respectful (&ldquo;I do not
                dismiss that need lightly&rdquo;) - appropriate for adults in authority.
              </li>
              <li>
                <strong>Purpose:</strong> persuasive signposting (&ldquo;Imagine&hellip;&rdquo;,
                &ldquo;Surely&hellip;&rdquo;, &ldquo;Now is the moment&hellip;&rdquo;) and a
                pre-emptive concession make the argument hard to refuse.
              </li>
              <li>
                <strong>Control:</strong> acknowledging the opposing view and offering an
                alternative shows the &ldquo;adapted and controlled&rdquo; handling of form and
                purpose the top band rewards.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="checklist" className="mb-12">
          <h2 id="checklist" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Before you write - a 30-second checklist
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
            <li>
              I have underlined the words that name the <strong>form</strong>, the{' '}
              <strong>audience</strong> and the <strong>purpose</strong>.
            </li>
            <li>My opening makes the form unmistakable within the first two sentences.</li>
            <li>
              My register matches the reader - formal for adults, warmer for peers, accurate
              throughout.
            </li>
            <li>
              My tone and signposting match the purpose, and I keep them consistent to the end.
            </li>
            <li>The content stays tied to the Section A theme I was given.</li>
          </ul>
        </section>

        <footer className="mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{SPEC_ATTRIBUTION}</p>
          <p className="mt-3">
            This masterclass is provided for educational guidance (criticism and instruction). The
            sample task, plan and model paragraph are original works written by The English Hub and
            are not reproduced from any past paper or copyrighted source booklet. The English Hub is
            not affiliated with or endorsed by Pearson.
          </p>
        </footer>
      </article>
    </>
  )
}
