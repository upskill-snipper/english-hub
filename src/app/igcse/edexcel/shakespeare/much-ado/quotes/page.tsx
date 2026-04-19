import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/much-ado/quotes",
  },
  title: "Much Ado About Nothing Key Quotes — Edexcel IGCSE IGCSE Literature",
  description:
    "15 key Much Ado About Nothing quotations with speaker, scene and analysis for the Edexcel IGCSE IGCSE Literature closed-book Shakespeare exam.",
};

const QUOTES = [
  {
    quote:
      '"I had rather hear my dog bark at a crow than a man swear he loves me"',
    speaker: "Beatrice (1.1)",
    themes: ["Love", "Gender", "Marriage"],
    analysis:
      "Our first real taste of Beatrice. The comparison is wilfully absurd \u2014 barking dogs and crows vs love vows \u2014 and the sharpness of it establishes her as someone who refuses romantic clich\u00e9. The line sets up the enormous distance her character will have to travel.",
  },
  {
    quote: '"He is no less than a stuff\u2019d man"',
    speaker: "Beatrice (1.1)",
    themes: ["Love"],
    analysis:
      "Beatrice on Benedick. A 'stuffed man' is a mannequin \u2014 all surface, no insides. But the very specificity of the insult suggests she's been paying close attention. Shakespeare loves this trick: scorn that sounds exactly like interest.",
  },
  {
    quote: '"I am a plain-dealing villain"',
    speaker: "Don John (1.3)",
    themes: ["Deception"],
    analysis:
      "A self-diagnosis. Don John has none of Iago's hidden motives \u2014 he is bad because he wants to be bad. The 'plain' is grim comedy: in a play where everyone else lies stylishly, the one open declaration of villainy is itself almost a kind of honesty.",
  },
  {
    quote: '"Speak low, if you speak love"',
    speaker: "Don Pedro (2.1)",
    themes: ["Love", "Deception"],
    analysis:
      "Don Pedro wooing Hero in disguise on Claudio's behalf. The imperative sets the tone for a whole play of secrets, staged conversations and eavesdropping. Love in Much Ado is rarely private \u2014 it is almost always overheard.",
  },
  {
    quote: '"The world must be peopled"',
    speaker: "Benedick (2.3)",
    themes: ["Love", "Marriage"],
    analysis:
      "Benedick's comic conversion in a single soliloquy. After being tricked into believing Beatrice loves him, he instantly finds moral grounds for marriage. The flat, pragmatic reason is the joke: love has already arrived, he just needs an excuse.",
  },
  {
    quote: '"Some Cupid kills with arrows, some with traps"',
    speaker: "Hero (3.1)",
    themes: ["Love", "Deception"],
    analysis:
      "Hero in her own eavesdropping trick on Beatrice. The couplet contrasts the classical image of Cupid's arrow with the more honest, less glamorous reality of the play: people fall in love because their friends trick them into it.",
  },
  {
    quote: '"Disdain and scorn ride sparkling in her eyes"',
    speaker: "Hero (3.1)",
    themes: ["Love", "Gender"],
    analysis:
      "Hero describing the (staged) Beatrice so that Beatrice will overhear. The verb 'sparkling' is telling \u2014 disdain is not ugly, it's attractive. Shakespeare is showing that Beatrice's wit is the very thing that makes her loveable.",
  },
  {
    quote: '"O, she is fallen into a pit of ink"',
    speaker: "Leonato (4.1)",
    themes: ["Honour", "Gender"],
    analysis:
      "Leonato about his own daughter, seconds after the accusation. The metaphor of ink \u2014 writing, stain, permanence \u2014 is devastating. Her father's first instinct is not to defend her but to imagine her as irredeemably marked.",
  },
  {
    quote: '"Death is the fairest cover for her shame"',
    speaker: "Leonato (4.1)",
    themes: ["Honour", "Gender"],
    analysis:
      "The superlative 'fairest' is horrifying. Leonato would rather his daughter be dead than living under suspicion \u2014 because his honour depends on hers. Shakespeare lets the audience feel exactly how lethal this system is.",
  },
  {
    quote: '"I do love nothing in the world so well as you"',
    speaker: "Benedick (4.1)",
    themes: ["Love"],
    analysis:
      "Benedick's declaration, immediately after the wedding collapses. Shakespeare deliberately places this line inside the play's worst moment \u2014 so we see that love can arrive not through romance but through shared outrage and moral clarity.",
  },
  {
    quote: '"Kill Claudio"',
    speaker: "Beatrice (4.1)",
    themes: ["Love", "Honour", "Gender"],
    analysis:
      "Two monosyllables. Probably the most shocking line in the play. Beatrice cannot avenge Hero herself \u2014 so she asks the man who has just declared his love to prove it by killing his best friend. Shakespeare folds love, gender, honour and friendship into three beats.",
  },
  {
    quote: '"O God, that I were a man! I would eat his heart in the market-place"',
    speaker: "Beatrice (4.1)",
    themes: ["Gender", "Honour"],
    analysis:
      "The most direct feminist line in any Shakespeare comedy. Beatrice does not merely want retribution \u2014 she wants it publicly, physically, and in the exact social space where Hero was shamed. The play's repressed rage breaks through the wit.",
  },
  {
    quote: '"Manhood is melted into curtsies, valour into compliment"',
    speaker: "Beatrice (4.1)",
    themes: ["Gender", "Honour"],
    analysis:
      "Same scene. Beatrice diagnoses the failure of the men around her: they are all mannered, all polite, all useless when a woman's life is on the line. The verbs 'melted' and 'curtsies' feminise them \u2014 Shakespeare lets Beatrice turn their own honour-language against them.",
  },
  {
    quote: '"Peace! I will stop your mouth"',
    speaker: "Benedick (5.4)",
    themes: ["Love", "Marriage"],
    analysis:
      "Benedick ends the 'merry war' not with a witticism but with a kiss, silencing Beatrice's objections. Readers disagree about whether this is a tender comic punchline or a worrying reassertion of male control \u2014 which is exactly the kind of ambiguity the IGCSE mark scheme rewards you for noticing.",
  },
  {
    quote: '"I take thee for pity"',
    speaker: "Beatrice (5.4)",
    themes: ["Love", "Marriage"],
    analysis:
      "The play's last great joke. Beatrice and Benedick agree to marry but refuse to pretend it was romantic destiny. The line preserves their pride and their wit at exactly the moment the plot is trying to flatten them into a conventional comic ending.",
  },
];

export default async function MuchAdoQuotesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "IGCSE", url: "https://theenglishhub.app/igcse" },
          { name: "Edexcel IGCSE Literature", url: "https://theenglishhub.app/igcse/edexcel" },
          { name: "Shakespeare", url: "https://theenglishhub.app/igcse/edexcel/shakespeare" },
          { name: "Much Ado About Nothing", url: "https://theenglishhub.app/igcse/edexcel/shakespeare/much-ado" },
          { name: "Key Quotations", url: "https://theenglishhub.app/igcse/edexcel/shakespeare/much-ado/quotes" },
        ]}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/much-ado"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Much Ado hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Much Ado About Nothing &mdash; 15 key quotes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Short, embeddable quotations covering the play&rsquo;s wit and
            its darker moral edge, ready for a closed-book exam.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">
            How to revise these
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Learn short fragments (3&ndash;6 words) that you can drop
              inside a sentence.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Pair quotes: every comic line has a darker echo later in the
              play, and vice versa.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Mark which quotes are in <strong>verse</strong> and which in{" "}
              <strong>prose</strong> &mdash; the switch is often meaningful.
            </li>
          </ul>
        </div>

        <section className="mt-10 space-y-4">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 shadow-md sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-base italic font-semibold text-foreground">
                    {q.quote}
                  </p>
                  <p className="mt-1 text-xs font-medium text-primary">
                    &mdash; {q.speaker}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {q.themes.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p
                    className="mt-3 text-sm text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: q.analysis }}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <ExamBoardDisclaimer
        variant="content"
        className="mx-auto max-w-5xl px-4 py-8"
      />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Much Ado About Nothing by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  );
}
