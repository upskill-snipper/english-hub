import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { WRITING_SKILLS, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reference/spelling-punctuation'

export const metadata: Metadata = {
  title: 'Spelling & punctuation reference',
  description:
    'A quick, accurate reference for the punctuation the iLowerSecondary ' +
    'English specification names explicitly, plus the spelling patterns ' +
    'that most often cost marks in Section B (WAO2).',
  alternates: { canonical: PAGE_URL },
}

// WAO2 (skill 2.3) names these five marks explicitly: capital letters,
// end punctuation, commas, speech marks, apostrophes. UK English.
const PUNCTUATION: { mark: string; rule: string; example: string; error: string }[] = [
  {
    mark: 'Capital letters',
    rule: 'Open every sentence and every proper noun (names, places, days, months, titles) with a capital.',
    example: 'On Monday, Aisha visited the National Museum in Cairo.',
    error: 'Lower-case sentence openings; “i” for the pronoun “I”.',
  },
  {
    mark: 'End punctuation',
    rule: 'Close every sentence with a full stop, question mark or exclamation mark - one idea, one demarcated sentence.',
    example: 'Why did she stop? The path had vanished. Run!',
    error: 'The comma splice: joining two sentences with only a comma.',
  },
  {
    mark: 'Commas',
    rule: 'Use commas to separate items in a list, to mark off a subordinate clause, and around parenthesis (a pair of commas).',
    example: 'My bag, which was soaked through, held a torch, a map and some food.',
    error: 'A single comma splitting a subject from its verb, or splicing two sentences.',
  },
  {
    mark: 'Speech marks',
    rule: 'Open and close speech marks around the exact words spoken; punctuation that belongs to the speech goes inside.',
    example: '“We have to leave now,” she whispered.',
    error: 'Missing the closing speech mark, or punctuation drifting outside it.',
  },
  {
    mark: 'Apostrophes',
    rule: 'Use for omission (do not → don’t) and for possession (the dog’s lead; the dogs’ leads for plural).',
    example: 'It’s late, and the children’s coats are still on the boats’ deck.',
    error: 'Confusing its/it’s; an apostrophe in a simple plural (“apple’s 50p”).',
  },
]

const EXTRA_MARKS: { mark: string; rule: string; example: string }[] = [
  {
    mark: 'Colon ( : )',
    rule: 'Introduces a list, an explanation or an example after a complete clause.',
    example: 'She packed one thing above all: her grandmother’s letters.',
  },
  {
    mark: 'Semicolon ( ; )',
    rule: 'Links two closely related complete sentences without a connective.',
    example: 'The rain stopped; the silence felt louder than the storm.',
  },
  {
    mark: 'Dash ( - )',
    rule: 'Adds a dramatic pause or an aside; a pair works like brackets.',
    example: 'There was only one route left - the one nobody used.',
  },
  {
    mark: 'Brackets ( ( ) )',
    rule: 'Encloses extra, non-essential information.',
    example: 'The lighthouse (built in 1881) still works every night.',
  },
  {
    mark: 'Ellipsis ( … )',
    rule: 'Signals trailing off, suspense or an unfinished thought.',
    example: 'She opened the door and …',
  },
]

const SPELLING: { word: string; why: string; tip: string }[] = [
  { word: 'separate', why: 'Often spelt “seperate”.', tip: 'There’s “a rat” in sep-a-rat-e.' },
  { word: 'definitely', why: 'No “a”; ends “-itely”.', tip: 'Contains the word “finite”.' },
  { word: 'necessary', why: 'One c, two s.', tip: 'One Collar, two Sleeves.' },
  { word: 'beginning', why: 'Double n before -ing.', tip: 'Short vowel → double the consonant.' },
  { word: 'embarrass', why: 'Two r, two s.', tip: 'Really Red, So Shy.' },
  { word: 'rhythm', why: 'No true vowels.', tip: 'Rhythm Helps Your Two Hips Move.' },
  { word: 'occasion', why: 'Two c, one s.', tip: 'Two cars, one snake.' },
  { word: 'believe', why: 'i before e here.', tip: 'Never beLIEve a LIE.' },
  { word: 'weird', why: 'Exception to i-before-e.', tip: '“We” are weird.' },
  { word: 'argument', why: 'Drops the “e” of argue.', tip: 'No “e” after the “u”.' },
  {
    word: 'conscience',
    why: 'Silent c; ends “-ience”.',
    tip: 'Your conSCIENCE knows science.',
  },
  { word: 'environment', why: 'Hidden “n” before -ment.', tip: 'enviro-N-ment.' },
  { word: 'February', why: 'Silent first r.', tip: 'Feb-R-uary has two r’s.' },
  { word: 'grammar', why: 'Ends “-ar”, not “-er”.', tip: 'Bad grammar mars writing.' },
  { word: 'island', why: 'Silent s.', tip: 'An island IS land.' },
  {
    word: 'privilege',
    why: 'No “d”; ends “-lege”.',
    tip: 'A privilege, not a “priviledge”.',
  },
  {
    word: 'recommend',
    why: 'One c, two m.',
    tip: 'I can reCommend the two M&M’s.',
  },
  { word: 'until', why: 'One l (unlike “till”).', tip: 'Wait unti-L, single L.' },
  {
    word: 'truly',
    why: 'Drops the “e” of true.',
    tip: 'Truly has no “e”.',
  },
  {
    word: 'tomorrow',
    why: 'One m, two r.',
    tip: 'To-Morrow: one M, then borrow two R’s.',
  },
]

export default async function SpellingPunctuationReference() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Spelling & punctuation', url: PAGE_URL },
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
        <span>{await t('ks3.page.reference.spelling_punctuation.bc')}</span>
      </p>

      <h1>Spelling &amp; punctuation reference</h1>
      <p className="lead">
        {WRITING_SKILLS[2].title}. This is the quick reference for the marks that most often cost
        easy WAO2 credit. The specification names five punctuation marks explicitly - get these
        right and demarcate every sentence cleanly.
      </p>

      <h2>The five named punctuation marks</h2>
      <div className="not-prose my-6 space-y-3">
        {PUNCTUATION.map((p) => (
          <div key={p.mark} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-semibold text-foreground">{p.mark}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.rule}</p>
            <p className="mt-2 text-sm text-foreground">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                Example:{' '}
              </span>
              <em>{p.example}</em>
            </p>
            <p className="mt-1 text-sm text-destructive">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em]">
                Common error:{' '}
              </span>
              {p.error}
            </p>
          </div>
        ))}
      </div>

      <h2>Marks that lift you to the top bands</h2>
      <p>
        Used accurately and for effect, these signal a confident, ambitious writer (WAO2 S3-S4).
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {EXTRA_MARKS.map((p) => (
          <div key={p.mark} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-semibold text-foreground">{p.mark}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.rule}</p>
            <p className="mt-2 text-sm text-foreground">
              <em>{p.example}</em>
            </p>
          </div>
        ))}
      </div>

      <h2>Twenty spelling traps</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-4 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Word
              </th>
              <th className="py-2 pr-4 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Why it’s tricky
              </th>
              <th className="py-2 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Memory tip
              </th>
            </tr>
          </thead>
          <tbody>
            {SPELLING.map((s) => (
              <tr key={s.word} className="border-b border-border/50 align-top">
                <td className="py-2 pr-4 font-semibold text-foreground">{s.word}</td>
                <td className="py-2 pr-4 text-muted-foreground">{s.why}</td>
                <td className="py-2 text-muted-foreground">{s.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Want this drilled with self-tests? Use the{' '}
        <Link href="/ks3/ilowersecondary/grammar-lab">grammar lab</Link>, and see how punctuation
        earns reading marks on the{' '}
        <Link href="/ks3/ilowersecondary/question-types/punctuation-effect">
          punctuation-effect
        </Link>{' '}
        page.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
