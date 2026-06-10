import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  WRITING_SKILLS,
  WAO2_GRID,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const WAO2 = ASSESSMENT_OBJECTIVES.WAO2
const SKILL_2_3 = WRITING_SKILLS.find((s) => s.code === '2.3')!

export const metadata: Metadata = {
  alternates: { canonical: '/ks3/ilowersecondary/writing/grammar-punctuation-spelling' },
  title: 'Grammar, punctuation & spelling (WAO2) - convey meaning accurately',
  description:
    `A masterclass on ${WAO2.code}: ${WAO2.descriptor} Learn sentence ` +
    'demarcation, the five punctuation marks the spec names, complex ' +
    'connectives, ambitious-but-accurate vocabulary and spelling. Includes ' +
    'the WAO2 mark grid, an error-riddled paragraph with every fix labelled, ' +
    'a punctuation-for-effect bank and a top-20 KS3 spelling-trap list.',
}

// ─── Band translations: spec descriptor → "what your writing must do" ──

type BandTranslation = {
  level: string
  marks: string
  mustDo: string[]
}

const BAND_TRANSLATIONS: BandTranslation[] = [
  {
    level: 'S1',
    marks: WAO2_GRID[0].marks,
    mustDo: [
      'Get the basics of grammar right in at least some sentences, and try a few complex connectives such as “although” or “because”.',
      'Put a capital letter and a full stop on at least some sentences - examiners must be able to see where most sentences begin and end.',
      'Spell ordinary, everyday words (the, was, they, said) correctly even if longer words slip.',
    ],
  },
  {
    level: 'S2',
    marks: WAO2_GRID[1].marks,
    mustDo: [
      'Make most sentences grammatically sound and reach for a widening range of connectives to extend ideas, not just join them.',
      'Demarcate most sentences correctly and use commas, speech marks and apostrophes mostly correctly inside them.',
      'Spell accurately most of the time, with a clear attempt at more ambitious words.',
    ],
  },
  {
    level: 'S3',
    marks: WAO2_GRID[2].marks,
    mustDo: [
      'Write grammatically secure sentences and use complex connectives deliberately to develop a point across the sentence.',
      'Demarcate every sentence correctly and choose punctuation that suits the meaning - a colon to introduce, a dash for an aside.',
      'Spell accurately, including ambitious vocabulary chosen because it is the right word, not to show off.',
    ],
  },
  {
    level: 'S4',
    marks: WAO2_GRID[3].marks,
    mustDo: [
      'Control grammar so fully that sentence shape becomes a tool - short for impact, long and layered for build-up.',
      'Demarcate flawlessly and use punctuation with sophistication: the semicolon, colon, dash and bracket all earn their place.',
      'Spell accurately and confidently, with ambitious choices that land precisely and never feel forced.',
    ],
  },
]

// ─── Original error-riddled paragraph + labelled corrections ──────────

type Fix = {
  n: number
  label: string
  was: string
  now: string
  why: string
}

const FAULTY_PARAGRAPH =
  'the storm arrived without warning, the fishermen had not expected it ' +
  'they ran for the harbour wall. captain morrow shouted "hold the ' +
  'ropes she will not last." the boats were tossed against the stones ' +
  'and there hulls began to crack. it was the worst night anyone could ' +
  'of remembered, the villages oldest woman watched from her window she ' +
  'new the sea would take something before dawn. by morning two boats ' +
  'were definately gone but every fisherman, somehow, had survived'

const CORRECTED_PARAGRAPH =
  'The storm arrived without warning. The fishermen had not expected it, ' +
  'so they ran for the harbour wall. Captain Morrow shouted, “Hold the ' +
  'ropes - she will not last!” The boats were tossed against the stones, ' +
  'and their hulls began to crack. It was the worst night anyone could ' +
  'have remembered. The village’s oldest woman watched from her window; ' +
  'she knew the sea would take something before dawn. By morning, two ' +
  'boats were definitely gone, but every fisherman, somehow, had survived.'

const FIXES: Fix[] = [
  {
    n: 1,
    label: 'Capital letter - sentence start & proper noun',
    was: 'the storm … captain morrow',
    now: 'The storm … Captain Morrow',
    why: 'Every sentence must open with a capital letter, and names of people (Morrow) are proper nouns that always take one.',
  },
  {
    n: 2,
    label: 'Comma splice fixed',
    was: 'expected it they ran',
    now: 'expected it, so they ran',
    why: 'Two complete sentences were joined with only a comma (a comma splice). Adding the connective “so” turns it into one correctly linked sentence.',
  },
  {
    n: 3,
    label: 'Sentence demarcation - missing full stop',
    was: 'without warning, the fishermen',
    now: 'without warning. The fishermen',
    why: 'These were two separate ideas. A full stop ends the first sentence so the reader knows where it stops.',
  },
  {
    n: 4,
    label: 'Speech marks & punctuation of speech',
    was: 'shouted "hold the ropes she will not last."',
    now: 'shouted, “Hold the ropes - she will not last!”',
    why: 'Spoken words need a comma before the opening speech mark, a capital letter to start, and the end punctuation kept inside the closing speech mark.',
  },
  {
    n: 5,
    label: 'Homophone - there / their',
    was: 'there hulls',
    now: 'their hulls',
    why: '“Their” shows possession (the hulls belonging to the boats). “There” refers to a place.',
  },
  {
    n: 6,
    label: 'Grammar - “could of” → “could have”',
    was: 'could of remembered',
    now: 'could have remembered',
    why: '“Could of” is never correct; the modal verb “could” is followed by “have”. It only sounds like “of” when spoken.',
  },
  {
    n: 7,
    label: 'Apostrophe for possession',
    was: 'the villages oldest woman',
    now: 'The village’s oldest woman',
    why: 'The woman belongs to the village, so a possessive apostrophe is needed: village’s.',
  },
  {
    n: 8,
    label: 'Homophone - knew / new',
    was: 'she new the sea',
    now: 'she knew the sea',
    why: '“Knew” is the past tense of “to know”. “New” means recently made.',
  },
  {
    n: 9,
    label: 'Spelling - definately → definitely',
    was: 'definately gone',
    now: 'definitely gone',
    why: 'A classic spelling trap. The word is built on “finite”: de-fin-ite-ly.',
  },
  {
    n: 10,
    label: 'Semicolon & comma for clarity',
    was: 'her window she knew … gone but every',
    now: 'her window; she knew … gone, but every',
    why: 'A semicolon links two closely related complete ideas elegantly; a comma before “but” correctly separates the contrasting clause.',
  },
]

// ─── Punctuation-for-effect mini-bank ─────────────────────────────────

type EffectEntry = {
  mark: string
  use: string
  example: string
}

const EFFECT_BANK: EffectEntry[] = [
  {
    mark: 'Full stop (short sentence)',
    use: 'Cuts the rhythm for emphasis or shock after a longer build-up.',
    example:
      'The crowd surged, the gates strained, the chant rose to a roar - and then the lights went out. Silence.',
  },
  {
    mark: 'Capital letters',
    use: 'A proper noun or a deliberately capitalised word can signal importance or a turning point.',
    example: 'She had been told to wait for the Signal, and only the Signal, before she moved.',
  },
  {
    mark: 'Exclamation mark (used sparingly)',
    use: 'Conveys sudden alarm, command or strong feeling - one is powerful, several lose impact.',
    example: '“Get back from the edge!” the guide called, her voice splitting the calm.',
  },
  {
    mark: 'Question mark (rhetorical)',
    use: 'Pulls the reader into the writing and creates a moment of doubt or reflection.',
    example: 'How could a town this small hide something so large for so long?',
  },
  {
    mark: 'Comma (parenthetical pair)',
    use: 'Drops in extra detail without breaking the sentence, slowing the pace for the reader.',
    example: 'The lighthouse, weathered and half-forgotten, still turned its light across the bay.',
  },
  {
    mark: 'Speech marks',
    use: 'A single line of dialogue can break a description and reveal character in an instant.',
    example: '“We don’t go past the old fence,” the boy said, and would not explain why.',
  },
  {
    mark: 'Apostrophe (possession for tone)',
    use: 'A possessive can make an idea feel intimate or owned, sharpening the image.',
    example: 'It was the city’s secret, kept in the river’s slow brown water.',
  },
  {
    mark: 'Colon (introducing / revealing)',
    use: 'Builds anticipation, then delivers the explanation or list with weight.',
    example: 'There was only one thing left in the tin: a key, rusted almost to nothing.',
  },
  {
    mark: 'Semicolon (balancing ideas)',
    use: 'Links two related complete ideas, suggesting cause, contrast or rhythm.',
    example: 'The plan had worked perfectly; the silence afterwards was almost unbearable.',
  },
  {
    mark: 'Dash (interruption / aside)',
    use: 'Creates a sharp break for an afterthought, a surprise or a sudden change of direction.',
    example: 'He reached for the handle - and froze, because the door was already open.',
  },
]

// ─── Complex connectives bank ─────────────────────────────────────────

const CONNECTIVES: { group: string; words: string }[] = [
  {
    group: 'Cause & consequence',
    words: 'because, since, as, so that, therefore, consequently, in order that',
  },
  {
    group: 'Contrast & concession',
    words: 'although, even though, whereas, while, despite the fact that, nevertheless',
  },
  {
    group: 'Condition',
    words: 'if, unless, provided that, as long as, in case, whether',
  },
  {
    group: 'Time & sequence',
    words: 'before, after, until, as soon as, by the time, once, meanwhile',
  },
  {
    group: 'Adding & developing',
    words: 'moreover, furthermore, in addition, not only … but also',
  },
]

// ─── Top-20 KS3 spelling traps (UK spellings) ─────────────────────────

const SPELLING_TRAPS: { wrong: string; right: string; tip: string }[] = [
  { wrong: 'definately', right: 'definitely', tip: 'Built on “finite”: de-fin-ite-ly.' },
  { wrong: 'seperate', right: 'separate', tip: 'There is “a rat” in sep-a-rate.' },
  { wrong: 'neccessary', right: 'necessary', tip: 'One collar, two sleeves: 1 c, 2 s.' },
  { wrong: 'occured', right: 'occurred', tip: 'Double the r before -ed: occurred.' },
  { wrong: 'embarass', right: 'embarrass', tip: 'Two r’s and two s’s: embarrass.' },
  { wrong: 'rythm', right: 'rhythm', tip: 'Rhythm Helps Your Two Hips Move.' },
  { wrong: 'arguement', right: 'argument', tip: 'Drop the e from “argue”: argu-ment.' },
  { wrong: 'enviroment', right: 'environment', tip: 'There is “iron” in the env-iron-ment.' },
  { wrong: 'goverment', right: 'government', tip: 'Govern + ment - keep the hidden n.' },
  { wrong: 'beleive', right: 'believe', tip: 'Never beLIEve a LIE: i before e.' },
  { wrong: 'recieve', right: 'receive', tip: 'i before e, except after c: receive.' },
  { wrong: 'wierd', right: 'weird', tip: 'Weird breaks the rule - e before i.' },
  { wrong: 'untill', right: 'until', tip: 'Only one l at the end of “until”.' },
  { wrong: 'tommorow', right: 'tomorrow', tip: 'One m, two r’s: to-morrow.' },
  { wrong: 'begining', right: 'beginning', tip: 'Double the n: begin-ning.' },
  { wrong: 'grammer', right: 'grammar', tip: 'Grammar ends in -ar, not -er.' },
  { wrong: 'concious', right: 'conscious', tip: 'There is “science” hiding: con-sci-ous.' },
  { wrong: 'priviledge', right: 'privilege', tip: 'No d: priv-i-lege.' },
  { wrong: 'maintainance', right: 'maintenance', tip: 'You main-TEN-ance, not main-TAIN.' },
  {
    wrong: 'pronounciation',
    right: 'pronunciation',
    tip: 'It loses the “noun”: pro-nun-ci-a-tion.',
  },
]

export default async function GrammarPunctuationSpellingPage() {
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
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-skills',
          },
          {
            name: 'Grammar, punctuation & spelling',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing/grammar-punctuation-spelling',
          },
        ]}
      />

      <nav aria-label="Breadcrumb" className="not-prose mb-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-foreground">
              {await t('ks3.page.bc.home')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/ks3" className="hover:text-foreground">
              {await t('ks3.page.bc.ks3')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
              {await t('ks3.page.bc.ils')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/ks3/ilowersecondary/writing-skills" className="hover:text-foreground">
              {await t('ks3.page.bc.writing_skills')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground" aria-current="page">
            {await t('ks3.page.writing.grammar_punctuation_spelling.bc')} ({WAO2.code})
          </li>
        </ol>
      </nav>

      <header className="not-prose mb-10">
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
          Writing masterclass &middot; {WAO2.code} &middot; Skill {SKILL_2_3.code}
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Grammar, punctuation &amp; spelling: conveying meaning accurately
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {WAO2.code} asks you to{' '}
          <span className="text-foreground">
            {WAO2.descriptor.toLowerCase().replace(/\.$/, '')}
          </span>
          . It is the second of the two writing objectives and the one you can improve fastest
          &mdash; accuracy is a skill you can train, not a talent you are born with. Get it right
          and your ideas reach the reader exactly as you intended.
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Assessment objective</dt>
            <dd className="text-foreground font-medium">{WAO2.code}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Writing skill</dt>
            <dd className="text-foreground font-medium">
              {SKILL_2_3.code} {SKILL_2_3.title}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Weighting</dt>
            <dd className="text-foreground font-medium">{WAO2.weightPct}% of the qualification</dd>
          </div>
        </dl>
      </header>

      <section aria-labelledby="what" className="mb-12">
        <h2 id="what" className="text-2xl font-semibold text-foreground">
          What this objective is really testing
        </h2>
        <p>
          {WAO2.code} is not about decoration. It rewards{' '}
          <strong>technical accuracy in the service of meaning</strong>: can a reader follow your
          ideas without stumbling, and can you bend grammar and punctuation to create a deliberate
          effect? The skill descriptor sets out five things to master:
        </p>
        <ul>
          {SKILL_2_3.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p>
          This page works through the four that matter most under exam pressure:{' '}
          <strong>sentence demarcation</strong>, the{' '}
          <strong>five punctuation marks the spec names explicitly</strong> used for effect,{' '}
          <strong>complex connectives</strong> to develop sentences, and{' '}
          <strong>ambitious-but-accurate vocabulary and spelling</strong>.
        </p>
      </section>

      <section aria-labelledby="demarcation" className="mb-12">
        <h2 id="demarcation" className="text-2xl font-semibold text-foreground">
          Sentence demarcation: the non-negotiable foundation
        </h2>
        <p>
          Demarcation simply means showing where each sentence <strong>begins and ends</strong>. It
          rests on three rules that the mark grid checks before anything else:
        </p>
        <ul>
          <li>
            <strong>Capital letter to start.</strong> Every sentence opens with one, and so does
            every proper noun (a name, a place, a day).
          </li>
          <li>
            <strong>End punctuation to finish.</strong> A full stop, question mark or exclamation
            mark closes the sentence so the reader knows it is complete.
          </li>
          <li>
            <strong>No comma splice.</strong> You cannot join two complete sentences with only a
            comma. Use a full stop, a connective, a semicolon or a colon instead.
          </li>
        </ul>
        <p>
          A comma splice is the single most common accuracy error at KS3.{' '}
          <em>&ldquo;The tide was rising, the children kept playing&rdquo;</em> is two sentences
          glued with a comma. Fix it four ways: <em>&ldquo;rising. The children&rdquo;</em> (full
          stop), <em>&ldquo;rising, but the children&rdquo;</em> (connective),{' '}
          <em>&ldquo;rising; the children&rdquo;</em> (semicolon), or recast the sentence entirely.
        </p>
      </section>

      <section aria-labelledby="connectives" className="mb-12">
        <h2 id="connectives" className="text-2xl font-semibold text-foreground">
          Complex connectives that develop a sentence
        </h2>
        <p>
          Every band of the mark grid mentions complex connectives. They are the words that let you{' '}
          <strong>develop</strong> an idea inside one sentence rather than just stacking short ones.
          Reaching beyond <em>and</em>, <em>but</em> and <em>so</em> is the quickest way to move up
          a band.
        </p>
        <div className="not-prose mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-semibold text-foreground">Purpose</th>
                <th className="py-2 font-semibold text-foreground">Connectives to use</th>
              </tr>
            </thead>
            <tbody>
              {CONNECTIVES.map((c) => (
                <tr key={c.group} className="border-b border-border/60">
                  <td className="py-2 pr-4 font-medium text-foreground">{c.group}</td>
                  <td className="py-2 text-foreground/90">{c.words}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Used well, a connective subordinates one idea to another:{' '}
          <em>
            &ldquo;Although the harbour looked calm, the captain refused to leave port until the
            wind dropped.&rdquo;
          </em>{' '}
          One sentence now carries concession, a main point and a time condition &mdash; far more
          controlled than three short statements.
        </p>
      </section>

      <section aria-labelledby="effect" className="mb-12">
        <h2 id="effect" className="text-2xl font-semibold text-foreground">
          Punctuation for effect and impact: a mini-bank
        </h2>
        <p>
          The skill descriptor asks for the five named marks &mdash;{' '}
          <strong>capital letters, end punctuation, commas, speech marks and apostrophes</strong>{' '}
          &mdash; to be used not just correctly but <em>for effect and impact</em>. The top bands
          reward punctuation that shapes meaning. Every example below is original; study what each
          mark <em>does</em> to the reader.
        </p>
        <div className="not-prose mt-6 space-y-3">
          {EFFECT_BANK.map((e) => (
            <div key={e.mark} className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="text-sm font-semibold text-foreground">{e.mark}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.use}</p>
              <p className="mt-2 text-[15px] italic leading-relaxed text-foreground/90">
                {e.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="grid" className="mb-12">
        <h2 id="grid" className="text-2xl font-semibold text-foreground">
          The WAO2 mark grid, translated
        </h2>
        <p>
          Section B writing is marked on two objectives; WAO2 carries{' '}
          <strong>12 of the available marks</strong>. The official descriptors are below, each
          paired with a plain-English translation of <em>what your writing must actually do</em> to
          reach that band.
        </p>
        <div className="not-prose mt-6 space-y-4">
          {WAO2_GRID.map((band, i) => (
            <div key={band.level} className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-sm font-semibold text-foreground">
                  {band.level}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{band.marks} marks</span>
              </div>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                    Spec descriptor
                  </p>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    {band.descriptors.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                    What your writing must do
                  </p>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    {BAND_TRANSLATIONS[i].mustDo.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="errors" className="mb-12">
        <h2 id="errors" className="text-2xl font-semibold text-foreground">
          Spot the errors: an original worked example
        </h2>
        <p>
          The paragraph below was written for this page and deliberately riddled with realistic KS3
          mistakes. Read it, find the errors, then compare it with the corrected version. Every fix
          is numbered and explained underneath.
        </p>

        <div className="not-prose mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Before &mdash; ten errors
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">{FAULTY_PARAGRAPH}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              After &mdash; corrected
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">{CORRECTED_PARAGRAPH}</p>
          </div>
        </div>

        <ol className="not-prose mt-6 space-y-4">
          {FIXES.map((f) => (
            <li key={f.n} className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="text-sm font-semibold text-foreground">
                <span className="font-mono text-muted-foreground">{f.n}. </span>
                {f.label}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Was: </span>
                <span className="line-through">{f.was}</span> <span aria-hidden>&rarr;</span>{' '}
                <span className="font-semibold text-foreground">Now: </span>
                {f.now}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Why: </span>
                {f.why}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="spelling" className="mb-12">
        <h2 id="spelling" className="text-2xl font-semibold text-foreground">
          Top-20 KS3 spelling traps (UK spellings)
        </h2>
        <p>
          The top bands reward spelling that is accurate even when the vocabulary is ambitious.
          These twenty words trip up KS3 writers most often. Learn the correct UK spelling and the
          memory tip beside it.
        </p>
        <div className="not-prose mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-semibold text-foreground">Not&hellip;</th>
                <th className="py-2 pr-4 font-semibold text-foreground">But&hellip;</th>
                <th className="py-2 font-semibold text-foreground">Memory tip</th>
              </tr>
            </thead>
            <tbody>
              {SPELLING_TRAPS.map((s) => (
                <tr key={s.right} className="border-b border-border/60">
                  <td className="py-2 pr-4 text-muted-foreground line-through">{s.wrong}</td>
                  <td className="py-2 pr-4 font-medium text-foreground">{s.right}</td>
                  <td className="py-2 text-foreground/90">{s.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="vocab" className="mb-12">
        <h2 id="vocab" className="text-2xl font-semibold text-foreground">
          Ambitious but accurate: the golden rule
        </h2>
        <p>
          The mark grid never rewards long words for their own sake. It rewards{' '}
          <strong>ambitious choices used appropriately</strong> &mdash; the right word, spelled
          correctly, in the right place. A precise <em>everyday</em> word always beats an impressive
          word used wrongly.
        </p>
        <p>
          Before you reach for a bigger word, ask: do I know exactly what it means, can I spell it,
          and does it fit this sentence? If the answer to any of those is no, choose the accurate
          alternative. Accuracy is the floor every WAO2 mark stands on.
        </p>
      </section>

      <footer className="not-prose mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
        <p>{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
