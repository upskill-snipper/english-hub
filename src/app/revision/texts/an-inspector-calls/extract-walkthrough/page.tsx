'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Eye,
  MessageSquare,
  Telescope,
  Lightbulb,
  Sparkles,
} from 'lucide-react'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data — fragments of the Inspector's final speech (Act 3)             */
/*  Each direct quotation is ≤15 words, used under fair-dealing for      */
/*  criticism, review and educational study (CDPA 1988 s.30).            */
/* ────────────────────────────────────────────────────────────────────── */

type Fragment = {
  id: number
  quote: string
  wordCount: number
  bridge: string
  notice: string
  say: string
  zoomOut: string
}

const FRAGMENTS: Fragment[] = [
  {
    id: 1,
    // VERIFIED: Heinemann 1992 edn., Inspector Goole, Act 3, final speech. 6 words (We/are/members/of/one/body).
    quote: '"We are members of one body."',
    wordCount: 6,
    bridge:
      'The speech opens with the Inspector’s thesis statement, distilled into a single declarative sentence.',
    notice:
      'A short, balanced declarative. No qualifiers, no conditionals — just the simple present tense “are.” The metaphor of the “one body” casts the audience as a single organism rather than a crowd of separate individuals.',
    say: 'Priestley borrows the cadence of St Paul’s First Letter to the Corinthians, lending socialist ethics the moral weight of scripture. The collective pronoun "we" silently enrols the 1945 audience in the Inspector’s argument before they have agreed to it.',
    zoomOut:
      'Compare this to Birling’s Act 1 creed that "a man has to look after himself and his own." Priestley structurally bookends the play with two opposing definitions of selfhood: atomised individual versus connected member.',
  },
  {
    id: 2,
    // VERIFIED: Heinemann 1992 edn., Inspector Goole, Act 3, final speech. 6 words.
    quote: '"We are responsible for each other."',
    wordCount: 6,
    bridge: 'The thesis is restated in plainer, secular language so nobody can mistake it.',
    notice:
      'The repetition of the "We are…" structure creates anaphora; the message is the same ethical claim translated from religious metaphor into civic obligation. "Responsible" is abstract but inescapable — there is no opt-out clause.',
    say: 'By stating the same idea twice in different registers, Priestley closes the escape route a sceptical audience member might use ("that’s religion, not me"). Whether you read the line through Christianity or through citizenship, the conclusion is identical.',
    // VERIFIED: Heinemann 1992 edn., Act 3 — the line "what we all did to her that matters" is spoken by ERIC ("It's still the same rotten story whether it's been told to a police inspector or to somebody else... It's what happened to the girl and what we all did to her that matters"), NOT Sheila. Corrected here.
    zoomOut:
      'Eric echoes the same ethic moments later in the same act, insisting it is "what we all did to her that matters." Priestley dramatises the Inspector’s message being received and re-spoken by the next generation in real time.',
  },
  {
    id: 3,
    // VERIFIED: Heinemann 1992 edn., Inspector Goole, Act 3, final speech. 10 words.
    quote: '"And I tell you that the time will soon come"',
    wordCount: 10,
    bridge: 'The Inspector pivots from ethical statement to prophecy.',
    notice:
      'The phrase "I tell you" is the rhetorical posture of a preacher or prophet, not a policeman. The future tense ("will soon come") makes a prediction that the 1945 audience already knows has been fulfilled twice over.',
    say: 'Priestley grants the Inspector a knowledge the 1912 characters cannot possess. The dramatic irony is total: the audience has lived through what the Inspector merely foretells, which converts his authority from theatrical to historical.',
    zoomOut:
      'This prophetic mode aligns the Inspector with Old Testament figures (Isaiah, Amos) who warn complacent ruling classes of judgement. Priestley’s socialism is delivered in the cadence of righteous wrath, not policy debate.',
  },
  {
    id: 4,
    // VERIFIED: Heinemann 1992 edn., Inspector Goole, Act 3, final speech. 7 words.
    quote: '"if men will not learn that lesson"',
    wordCount: 7,
    bridge: 'The conditional names the price of refusing the speech’s argument.',
    notice:
      'The conditional "if" places the choice on the audience’s shoulders. "Men" is generalising — not just the Birlings but humanity. "Lesson" frames the entire play as pedagogy, with the audience as pupils and the stage as classroom.',
    say: 'Priestley’s diction reframes theatre as moral instruction. The play is not entertainment that happens to have a message; it is a lesson with dramatised illustrations. The Inspector is the teacher; failure to learn carries consequences.',
    zoomOut:
      'This didactic register is consistent with Priestley’s Postscripts broadcasts (1940–41), which reached around 16 million listeners and openly advocated collective responsibility as the post-war settlement.',
  },
  {
    id: 5,
    // VERIFIED: Heinemann 1992 edn., Inspector Goole, Act 3, final speech. Order is fire-blood-anguish (NOT blood-fire-anguish). 12 words.
    quote: '"then they will be taught it in fire and blood and anguish."',
    wordCount: 12,
    bridge: 'The consequences arrive as a tricolon of escalating violence.',
    notice:
      'A tricolon ("fire … blood … anguish") that escalates from physical destruction (fire) through bodily suffering (blood) to psychological torment (anguish). The passive "will be taught" suggests the lesson will be inflicted, not chosen.',
    say: 'Priestley’s 1945 audience hears this list and recognises the Blitz, the trenches, the camps. The metaphor of teaching becomes terrifyingly literal: history itself becomes the schoolmaster, and the curriculum is suffering.',
    zoomOut:
      'Written months after VE Day with the play premiering in Moscow before London, Priestley addresses an audience for whom "fire and blood and anguish" is not abstract rhetoric but recent personal memory. The line lands with documentary force.',
  },
  {
    id: 6,
    // VERIFIED: Heinemann 1992 edn., Inspector Goole, Act 3 — exit line immediately after the prophecy. 2 words.
    quote: '"Good night."',
    wordCount: 2,
    bridge: 'The Inspector exits on a chillingly civil two-word coda.',
    notice:
      'After apocalyptic prophecy, the Inspector signs off with the polite formula of a departing dinner guest. The juxtaposition of register is jarring — prophetic thunder collapsing into bourgeois courtesy.',
    say: 'Priestley closes the speech with deliberate anti-climax. The Inspector refuses the dignity of a grand exit because the moral burden has been transferred entirely to the audience. There is nothing more to say; the question is what the listeners will do.',
    zoomOut:
      'Goole’s departure leaves a vacuum that the Birlings immediately try to fill with denial ("a hoax", "a fake"). Priestley uses the silence after "good night" to test which characters — and which audience members — will hold the lesson.',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function ExtractWalkthroughPage() {
  return (
    <div className="min-h-screen bg-background font-heading">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'An Inspector Calls',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls',
          },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls/extract-walkthrough',
          },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.06] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/an-inspector-calls"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
          >
            <ArrowLeft className="size-3.5" />
            Back to An Inspector Calls
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              <BookOpen className="size-3" />
              Extract walkthrough
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-clay-500/30 px-3 py-1 text-xs text-clay-700 dark:text-clay-300">
              <Sparkles className="size-3" />
              AQA / Edexcel / OCR / Eduqas
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Inspector&rsquo;s Final Speech &mdash; A Close Reading
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            An Inspector Calls, Act 3 &mdash; J.B. Priestley
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A fragment-by-fragment walkthrough of the play&rsquo;s didactic climax. We work through
            the speech in short, fair-dealing extracts &mdash; each followed by{' '}
            <strong>notice</strong>, <strong>say</strong>, and <strong>zoom-out</strong> cards that
            mirror the moves a strong AQA / Edexcel essay must make.
          </p>
        </section>

        {/* How to use */}
        <section className="mt-8 rounded-xl border border-clay-500/20 bg-clay-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-600 dark:text-clay-300" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-bold text-foreground">How to read this page</p>
              <p>
                Don&rsquo;t skim. For each fragment, read the quotation aloud, then work through{' '}
                <strong>Notice</strong> (what the words do mechanically), <strong>Say</strong> (your
                argument about authorial method), and <strong>Zoom out</strong> (the AO3 context
                that makes the choice meaningful in 1945). This is the AO1 &rarr; AO2 &rarr; AO3
                spine of a top-band paragraph.
              </p>
            </div>
          </div>
        </section>

        {/* Fragments */}
        <div className="mt-10 space-y-8">
          {FRAGMENTS.map((f) => (
            <article key={f.id} className="rounded-2xl border border-border/60 bg-muted p-5 sm:p-6">
              {/* Bridge */}
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Fragment {f.id} of {FRAGMENTS.length}
              </p>
              <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
                {f.bridge}
              </p>

              {/* Quotation */}
              <blockquote className="mt-4 border-l-4 border-teal-500/40 bg-card p-4">
                <p className="text-lg font-medium italic text-foreground">{f.quote}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Inspector Goole, Act 3 &mdash; {f.wordCount} words (fair dealing)
                </p>
              </blockquote>

              {/* Notice card */}
              <div className="mt-4 rounded-xl border border-teal-500/15 bg-teal-500/[0.04] p-4">
                <div className="flex items-center gap-2">
                  <Eye className="size-4 text-teal-600 dark:text-teal-300" />
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                    Notice &mdash; what the words do
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{f.notice}</p>
              </div>

              {/* Say card */}
              <div className="mt-3 rounded-xl border border-clay-500/20 bg-clay-500/[0.08] p-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="size-4 text-clay-600 dark:text-clay-300" />
                  <p className="text-xs font-bold uppercase tracking-wider text-clay-600 dark:text-clay-300">
                    Say &mdash; your AO2 argument
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{f.say}</p>
              </div>

              {/* Zoom-out card */}
              <div className="mt-3 rounded-xl border border-border/60 bg-card p-4">
                <div className="flex items-center gap-2">
                  <Telescope className="size-4 text-muted-foreground" />
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Zoom out &mdash; AO3 context
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{f.zoomOut}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Model paragraph */}
        <section className="mt-12 rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/[0.06] to-card p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="size-4 text-teal-600 dark:text-teal-300" />
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              Model paragraph &mdash; ~250 words
            </p>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            The final speech as Priestley&rsquo;s didactic climax
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground sm:text-base">
            <p>
              The Inspector&rsquo;s final speech is the structural and ideological climax of the
              play because it transposes Priestley&rsquo;s socialist argument into a prophetic
              register that the audience cannot easily refuse. Priestley begins with a balanced
              declarative &mdash; the claim that the Birlings are &ldquo;members of one body&rdquo;
              &mdash; whose Pauline cadence borrows the ethical authority of scripture, then
              immediately re-translates the same idea into the secular vocabulary of being
              &ldquo;responsible for each other.&rdquo; The doubling closes the escape route a
              sceptical viewer might use: whether received as Christian conscience or civic duty,
              the conclusion is identical. From this twin-stated thesis Priestley pivots into
              prophecy. The Inspector announces that &ldquo;the time will soon come&rdquo; when men
              who refuse the lesson will be taught it &ldquo;in fire and blood and anguish&rdquo;
              &mdash; a tricolon that escalates from physical destruction through bodily suffering
              to psychological torment, and which an audience watching in 1945 could only hear as a
              documentary description of the two world wars they had just lived through. The passive
              &ldquo;will be taught&rdquo; converts history itself into the disciplinarian.
              Priestley then deflates the rhetoric to a clipped, civil &ldquo;Good night,&rdquo;
              transferring the moral weight onto the audience by refusing the catharsis of a grand
              exit. Across roughly forty seconds of stage time, Priestley moves the play from
              drawing-room investigation to political sermon, leaving the audience &mdash; not the
              Birlings &mdash; as the people on whom the verdict still depends.
            </p>
          </div>
        </section>

        {/* Continue studying */}
        <section className="mt-12 rounded-xl border border-teal-500/20 bg-teal-500/5 p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">Continue studying</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Take this close-reading method into the rest of An Inspector Calls.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/an-inspector-calls/key-quotes"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Key quotes
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/themes"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              Themes
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/characters"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              Characters
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/essay-plans"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              Essay plans
            </Link>
          </div>
        </section>

        {/* Fair-dealing footer */}
        <footer className="mt-12 rounded-xl border border-border/60 bg-muted p-5 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2 font-bold uppercase tracking-wider text-foreground">
            Fair dealing &amp; copyright
          </p>
          <p>
            <em>An Inspector Calls</em> by J.B. Priestley remains in copyright (Heinemann editions;
            &copy; the Estate of J.B. Priestley). All quotations on this page are short extracts of
            fifteen words or fewer, reproduced under the fair-dealing provisions of the{' '}
            <strong>Copyright, Designs and Patents Act 1988, sections 30(1) and 30(1ZA)</strong> for
            the purposes of criticism, review and quotation, with sufficient acknowledgement of the
            author and work. No continuous block extract is reproduced. Students should consult a
            licensed edition of the play (Heinemann, 1992 or later) for the complete text.
          </p>
        </footer>
      </div>
    </div>
  )
}
