import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SECTIONS, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/practice/writing-tasks'

export const metadata: Metadata = {
  title: 'Writing task bank',
  description:
    'A large bank of original Section B extended-writing prompts for the ' +
    'iLowerSecondary English exam, mapped to every form, audience and ' +
    'purpose on the specification, each with a planning steer.',
  alternates: { canonical: PAGE_URL },
}

type Task = {
  theme: string
  form: string
  audience: string
  purpose: string
  prompt: string
  steer: string
}

// All prompts are original works written for The English Hub. None is
// reproduced from any real past paper. Each is tied to the
// specification's writing forms, purposes and audiences.
const TASKS: Task[] = [
  {
    theme: 'Survival',
    form: 'Letter',
    audience: 'A friend',
    purpose: 'Recount / describe',
    prompt:
      'You spent a night lost on a hillside before being found safe. Write a letter to your best friend explaining what happened and how you felt.',
    steer:
      'Open with the situation, move chronologically, and let feeling build - fear, then relief. Sign off warmly.',
  },
  {
    theme: 'Journeys',
    form: 'Diary',
    audience: 'Yourself (private)',
    purpose: 'Express an opinion / reflect',
    prompt:
      'Write a diary entry for the day you moved to a new country, town or school. Capture what you noticed and how you felt.',
    steer:
      'Dated, first person, reflective. Use a present-then-looking-back voice; end on a small hope or worry.',
  },
  {
    theme: 'The Natural World',
    form: 'Article',
    audience: 'Readers of a school magazine',
    purpose: 'Inform / persuade',
    prompt: 'Write a magazine article about a local green space and why it should be protected.',
    steer:
      'Headline, lively standfirst, evidence-led paragraphs, a clear call to action at the end.',
  },
  {
    theme: 'Courage',
    form: 'Narrative',
    audience: 'A general reader',
    purpose: 'Entertain',
    prompt:
      'Write the opening of a story that begins: “The door was already open when she got there.”',
    steer:
      'Hook fast, control pace with sentence variety, show don’t tell, leave a question hanging.',
  },
  {
    theme: 'Change',
    form: 'Speech',
    audience: 'Your year group',
    purpose: 'Argue / persuade',
    prompt:
      'Write a speech persuading your year group to support one change you believe would improve your school.',
    steer:
      'Direct address, rhetorical questions, a rule of three, a confident close. Keep it balanced and credible.',
  },
  {
    theme: 'Discovery',
    form: 'Recount',
    audience: 'A newspaper readership',
    purpose: 'Inform / entertain',
    prompt:
      'Recount the day you (or a character) discovered something unexpected. Make the reader want to keep reading.',
    steer:
      'Orientation → events in order → reorientation. Strong verbs; one vivid detail per paragraph.',
  },
  {
    theme: 'Survival',
    form: 'Leaflet',
    audience: 'Visitors to a wild place',
    purpose: 'Inform / persuade',
    prompt:
      'Design the words for a safety leaflet for people visiting a remote coastline or mountain.',
    steer: 'Headings, imperative verbs, short scannable sections, a reassuring but firm tone.',
  },
  {
    theme: 'Journeys',
    form: 'Autobiographical writing',
    audience: 'A general reader',
    purpose: 'Describe / reflect',
    prompt:
      'Write about a journey that changed how you see something. It can be a short, ordinary journey.',
    steer: 'Select a few significant moments, not everything. Use hindsight: what you know now.',
  },
  {
    theme: 'The Natural World',
    form: 'Descriptive writing',
    audience: 'A general reader',
    purpose: 'Describe / entertain',
    prompt: 'Describe a storm arriving and passing over a place you know well.',
    steer:
      'Move through the scene (before / during / after). Sensory imagery; control your figurative language.',
  },
  {
    theme: 'Courage',
    form: 'Letter',
    audience: 'A younger child',
    purpose: 'Explain / encourage',
    prompt:
      'Write a letter to a younger student who is nervous about something, explaining how to find courage.',
    steer: 'Warm, simple register for the audience. Practical steps; an encouraging close.',
  },
  {
    theme: 'Change',
    form: 'Newsletter',
    audience: 'A local community',
    purpose: 'Inform',
    prompt:
      'Write a community newsletter piece announcing and explaining an upcoming change in your area.',
    steer: 'Masthead-style heading, clear sections, community voice, useful practical detail.',
  },
  {
    theme: 'Discovery',
    form: 'Biographical writing',
    audience: 'A general reader',
    purpose: 'Inform / entertain',
    prompt:
      'Write a short biographical piece about someone (real or invented) whose curiosity led to a discovery.',
    steer:
      'Third person, selected significant moments, a shaping idea (e.g. persistence) running through.',
  },
  {
    theme: 'Survival',
    form: 'Narrative',
    audience: 'A general reader',
    purpose: 'Entertain',
    prompt: 'Write a story in which a character must make a hard decision to stay safe.',
    steer: 'Build tension; one clear turning point; a controlled, satisfying ending.',
  },
  {
    theme: 'Journeys',
    form: 'Article',
    audience: 'A travel website',
    purpose: 'Describe / persuade',
    prompt: 'Write an article persuading readers to visit a place you find special.',
    steer:
      'Appeal to the senses and the imagination; honest, not just glossy. End with a reason to go now.',
  },
  {
    theme: 'The Natural World',
    form: 'Letter',
    audience: 'A decision-maker (adult)',
    purpose: 'Argue / persuade',
    prompt:
      'Write a formal letter to a local council arguing for action on an environmental issue near you.',
    steer:
      'Formal layout and register, a clear line of argument, evidence, a polite but firm request.',
  },
  {
    theme: 'Courage',
    form: 'Diary',
    audience: 'Yourself (private)',
    purpose: 'Reflect',
    prompt: 'Write a diary entry for the night before something you were dreading.',
    steer: 'Honest, present-tense feeling; a small resolution by the end of the entry.',
  },
  {
    theme: 'Change',
    form: 'Descriptive writing',
    audience: 'A general reader',
    purpose: 'Describe',
    prompt: 'Describe the same place in two different seasons, so the contrast does the work.',
    steer:
      'Mirror your structure across the two halves; let one precise detail change carry the meaning.',
  },
  {
    theme: 'Discovery',
    form: 'Recount',
    audience: 'Classmates',
    purpose: 'Entertain / inform',
    prompt: 'Recount an experiment, project or hobby where you learned something by accident.',
    steer: 'Clear sequence, a moment of surprise, a reflective reorientation at the end.',
  },
  {
    theme: 'Survival',
    form: 'Speech',
    audience: 'A community group',
    purpose: 'Persuade',
    prompt: 'Write a speech persuading people to learn one practical life-saving skill.',
    steer: 'Open with a vivid scenario; use direct address; finish with a single clear ask.',
  },
  {
    theme: 'Journeys',
    form: 'Narrative',
    audience: 'A general reader',
    purpose: 'Entertain',
    prompt: 'Write a story that takes place entirely during one bus, train or boat journey.',
    steer:
      'Confined setting; reveal character through small actions; end at the destination - literal or emotional.',
  },
]

export default async function WritingTaskBankPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Practice papers',
      url: 'https://theenglishhub.app/ks3/ilowersecondary/practice',
    },
    { name: 'Writing task bank', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {await t('ks3.page.bc.home')}
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/practice" className="hover:text-foreground">
          {await t('ks3.page.bc.practice_papers')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.practice.writing_tasks.bc')}</span>
      </p>

      <h1>Section B writing task bank</h1>
      <p className="lead">
        {TASKS.length} original extended-writing prompts to drill Section B on its own. Each is
        mapped to a form, audience and purpose from the specification, with a quick planning steer.
        Give yourself about {SECTIONS.B.recommendedLabel} - the recommended Section B time - and
        mark with the <Link href="/ks3/ilowersecondary/mark-scheme">writing grids</Link>.
      </p>

      <div className="not-prose my-6 space-y-4">
        {TASKS.map((tk, i) => (
          <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">{tk.theme}</span>
              <span className="rounded border border-border/60 px-2 py-0.5">Form: {tk.form}</span>
              <span className="rounded border border-border/60 px-2 py-0.5">
                Audience: {tk.audience}
              </span>
              <span className="rounded border border-border/60 px-2 py-0.5">
                Purpose: {tk.purpose}
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground">{tk.prompt}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Planning steer: </span>
              {tk.steer}
            </p>
          </div>
        ))}
      </div>

      <h2>Before you start any task</h2>
      <ul>
        <li>
          Decode the prompt: identify the <strong>form</strong>, <strong>audience</strong> and{' '}
          <strong>purpose</strong> before you write a word.
        </li>
        <li>
          Spend three minutes planning - see{' '}
          <Link href="/ks3/ilowersecondary/writing/planning-proofreading">
            planning &amp; proofreading
          </Link>
          .
        </li>
        <li>
          Vary your sentences and openings (
          <Link href="/ks3/ilowersecondary/writing/sentence-variety">sentence variety</Link>) and
          keep punctuation accurate (
          <Link href="/ks3/ilowersecondary/writing/grammar-punctuation-spelling">GPS</Link>
          ).
        </li>
        <li>Leave three minutes to proofread against the WAO2 checklist.</li>
      </ul>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        All prompts are original works written by The English Hub and are not reproduced from any
        past paper. {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
