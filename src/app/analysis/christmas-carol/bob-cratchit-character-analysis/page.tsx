import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bob Cratchit Character Analysis — A Christmas Carol',
  description:
    'GCSE character analysis of Bob Cratchit in A Christmas Carol. Examiner notes on his loyalty, poverty, family and Dickens\'s political purpose.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/christmas-carol/bob-cratchit-character-analysis',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bob Cratchit — Character Analysis',
  description:
    'GCSE examiner character analysis of Bob Cratchit, Scrooge\'s clerk in A Christmas Carol.',
  author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
  publisher: {
    '@type': 'Organization',
    name: 'The English Hub',
    logo: { '@type': 'ImageObject', url: 'https://theenglishhub.app/icon.svg' },
  },
  datePublished: '2025-11-01',
  dateModified: '2026-01-15',
  mainEntityOfPage:
    'https://theenglishhub.app/analysis/christmas-carol/bob-cratchit-character-analysis',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-muted-foreground">
        <Link href="/analysis/christmas-carol" className="hover:text-primary">
          A Christmas Carol Analysis
        </Link>
      </nav>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Character Analysis
        </p>
        <h1 className="text-4xl font-heading font-bold text-foreground">
          Bob Cratchit — Character Analysis
        </h1>
        <p className="text-sm text-muted-foreground">
          Written by GCSE examiners · A Christmas Carol, Charles Dickens (1843)
        </p>
      </header>

      <article className="space-y-6 text-base leading-relaxed text-foreground/90">
        <h2 className="text-2xl font-heading font-bold">Who is Bob Cratchit?</h2>
        <p>
          Bob Cratchit is Ebenezer Scrooge&rsquo;s clerk, the father of six children
          (including Tiny Tim), and the patient face of Victorian working-class poverty.
          Dickens uses him throughout the novella as a direct human contrast to Scrooge
          — where Scrooge has wealth without joy, Cratchit has joy without wealth. Bob
          is introduced in Stave One as a silent, shivering figure in his own private
          &ldquo;tank&rdquo; at the counting-house, warming himself on a single coal.
        </p>

        <h2 className="text-2xl font-heading font-bold">Stave One: the patient clerk</h2>
        <p>
          Dickens introduces Bob through careful spatial imagery. The clerk&rsquo;s
          office is described as so small it resembles a &ldquo;tank&rdquo;, and
          Scrooge&rsquo;s fire is so low Bob has to try to warm himself with a candle.
          The phrase &ldquo;in which he failed&rdquo; captures the indignity of his
          position. Despite this, Bob still wishes Scrooge a merry Christmas, and when
          Scrooge refuses him an extra sixpence on Christmas Day, Bob accepts it
          meekly. Dickens uses this obedience to show how economic necessity forces the
          poor to perform gratitude.
        </p>
        <p>
          There is one small moment of rebellion. When Fred is mocked by Scrooge, Bob
          &ldquo;involuntarily applauded&rdquo; and is then almost fired for it.
          Dickens gives the verb &ldquo;involuntarily&rdquo; to show that Bob&rsquo;s
          true opinions are buried — they escape him only when he forgets himself. It
          is a quiet window into the clerk&rsquo;s inner life.
        </p>

        <h2 className="text-2xl font-heading font-bold">Stave Three: the father and host</h2>
        <p>
          In Stave Three Dickens shifts Bob&rsquo;s setting from the office to the home,
          and his character fills out. We see him carrying Tiny Tim on his shoulder,
          running down the pavement with his family, toasting &ldquo;Mr Scrooge, the
          Founder of the Feast&rdquo;. This toast is the scene&rsquo;s most powerful
          moment because Mrs Cratchit objects, calling Scrooge &ldquo;an odious, stingy,
          hard, unfeeling man&rdquo;. Bob answers with the forgiving line: &ldquo;My
          dear, the children! Christmas Day.&rdquo; Dickens gives Bob an almost
          impossible grace here. He will not let Christmas be poisoned by resentment.
        </p>
        <p>
          The feast itself is carefully modest — &ldquo;a small pudding for a large
          family&rdquo; — but every detail is described as if it were a banquet. Dickens
          wants the reader to feel how little is made to seem like much through love.
          The Cratchit dinner is one of the novella&rsquo;s most famous scenes because
          it refuses to let poverty rob the family of joy.
        </p>

        <h2 className="text-2xl font-heading font-bold">Stave Four: the grieving father</h2>
        <p>
          The stave in which Tiny Tim dies is where Bob reaches his most heartbreaking.
          Dickens strips his speech down to plain, almost broken sentences: &ldquo;I
          have known him walk with Tiny Tim upon his shoulder, very fast indeed.&rdquo;
          The repetition and simplicity of this line are the voice of grief. Bob then
          kisses the child&rsquo;s small face and becomes &ldquo;reconciled&rdquo;. The
          word is carefully chosen: Dickens does not let him become resigned, only
          reconciled, which preserves his dignity while acknowledging his loss.
        </p>

        <h2 className="text-2xl font-heading font-bold">Stave Five: the rewarded clerk</h2>
        <p>
          In Stave Five Scrooge arrives at Bob&rsquo;s office eighteen and a half
          minutes late and pretends to be angry before promising to raise his salary
          and help his struggling family. Dickens gives Bob a moment of stunned
          disbelief — he briefly thinks Scrooge has gone mad — before the clerk accepts
          the gift. The scene is structurally satisfying because the man who was
          humiliated in Stave One is publicly rewarded in Stave Five, closing the
          novella&rsquo;s economic loop.
        </p>

        <h2 className="text-2xl font-heading font-bold">Context</h2>
        <p>
          Clerks in 1840s London were among the lowest-paid white-collar workers. Bob&rsquo;s
          wage of fifteen shillings a week was just above subsistence level for a
          family of eight. Dickens, who had worked in a blacking factory as a child and
          whose father had been imprisoned for debt, knew the financial cliff-edge that
          families like the Cratchits lived on. Bob is not a sentimental invention;
          he is a documentary figure.
        </p>

        <h2 className="text-2xl font-heading font-bold">Top-grade reading</h2>
        <p>
          The strongest essays note that Dickens uses Bob as a moral measuring-stick
          for Scrooge without ever making him resent his boss. Bob could easily have
          been written as an angry victim or a complaining radical. Instead, Dickens
          makes him patient to the point of saintliness. This is a calculated
          political choice. Bob&rsquo;s forgiveness raises the bar: if the poor can
          forgive, how can the rich refuse to act? A Grade 9 student might argue that
          Bob&rsquo;s dignity is itself an indictment of Scrooge&rsquo;s behaviour —
          an argument Dickens delivers without ever making Bob give a speech.
        </p>
      </article>

      <aside className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-heading font-bold">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/analysis/christmas-carol/tiny-tim-character-analysis"
              className="text-primary hover:underline"
            >
              Tiny Tim — Character Analysis
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/family-theme-analysis"
              className="text-primary hover:underline"
            >
              Family Theme
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/poverty-theme-analysis"
              className="text-primary hover:underline"
            >
              Poverty Theme
            </Link>
          </li>
          <li>
            <Link
              href="/analysis/christmas-carol/good-old-fezziwig"
              className="text-primary hover:underline"
            >
              &ldquo;Good old Fezziwig&rdquo;
            </Link>
          </li>
        </ul>
      </aside>

      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-muted-foreground">
          Pair these analyses with the full study guide and quiz bank.
        </p>
        <Link
          href="/revision/texts"
          className="mt-3 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Open the Revision Hub
        </Link>
      </div>
    </div>
  )
}
