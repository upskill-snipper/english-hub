import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/much-ado/themes",
  },
  title: "Much Ado About Nothing Themes — Edexcel IGCSE 4ET1",
  description:
    "Detailed themes guide for Much Ado About Nothing for Edexcel IGCSE 4ET1: love, deception, honour, marriage and gender, with quotes and analysis.",
};

const THEMES = [
  {
    theme: "Love",
    summary:
      "The play sets two contrasting couples side by side. Claudio and Hero fall in love almost without speaking \u2014 Claudio asks another man to woo her on his behalf. Beatrice and Benedick, by contrast, have been sparring with each other for years, and come together only when they are both tricked into admitting it. Shakespeare seems to argue that the love that can take the weight of the play's events is the one built on words, wit and equal footing.",
    how_it_develops:
      "Act 1: Claudio falls silently for Hero; Beatrice and Benedick begin their 'merry war'. Act 2: the two plots are set in motion. Act 3: the eavesdropping scenes convert Beatrice and Benedick into lovers. Act 4: Claudio's thin love breaks under one piece of gossip; Beatrice and Benedick's stronger love is tested by 'Kill Claudio'. Act 5: two weddings.",
    quotes: [
      '"In faith, lady, you have a merry heart" (2.1)',
      '"I do love nothing in the world so well as you" (4.1)',
      '"Kill Claudio" (4.1)',
      '"I will live in thy heart, die in thy lap, and be buried in thy eyes" (5.2)',
    ],
  },
  {
    theme: "Deception",
    summary:
      "Every major turn of the plot depends on somebody being tricked. Don Pedro woos Hero in disguise on Claudio's behalf. Don John twice tricks Claudio about Hero. Beatrice and Benedick are both tricked by their friends into falling in love. The Friar stages Hero's fake death. Shakespeare divides deception into three kinds: <strong>loving</strong> (the friends' matchmaking), <strong>protective</strong> (the Friar's plan), and <strong>malicious</strong> (Don John's plot) \u2014 and asks whether we can tell them apart from the inside.",
    how_it_develops:
      "Act 1: Don John declares himself a 'plain-dealing villain'. Act 2: the masked ball enables mistaken identities. Act 3: twin eavesdropping scenes produce the comic couple; the window trick frames Hero. Act 4: the Friar's loving deception saves Hero. Act 5: Dogberry finally reveals the truth.",
    quotes: [
      '"I am a plain-dealing villain" (1.3)',
      '"Some Cupid kills with arrows, some with traps" (3.1)',
      '"I will assume thy part in some disguise" (1.1)',
      '"O, what men dare do! what men may do! what men daily do, not knowing what they do!" (4.1)',
    ],
  },
  {
    theme: "Honour",
    summary:
      "In Messina, male honour depends entirely on the sexual reputation of the women attached to them. One rumour about Hero is enough to make Claudio, Don Pedro and even Leonato turn on her instantly. Leonato's reaction \u2014 'Death is the fairest cover for her shame' \u2014 is catastrophic, because it shows a father preferring his daughter's death to the survival of gossip. Shakespeare exposes that system as both lethal and fragile, because the men who rely on it can be fooled by any plausible lie.",
    how_it_develops:
      "Act 1: Leonato introduces Hero proudly as his only heir. Act 2: Claudio's honour is briefly wobbled when he thinks Don Pedro has stolen Hero. Act 4: the public shaming at the altar; Leonato's collapse. Act 5: Benedick challenges Claudio, and honour is only restored by Hero's staged return.",
    quotes: [
      '"O, she is fallen into a pit of ink" (4.1)',
      '"Death is the fairest cover for her shame" (4.1)',
      '"Give not this rotten orange to your friend" (4.1)',
      '"A very even hand, a very pretty hand" (3.4)',
    ],
  },
  {
    theme: "Marriage",
    summary:
      "Marriage in Much Ado is simultaneously a romance, a contract and, for Beatrice, a cage. Beatrice jokes early on that she will 'sit in a corner and cry heigh-ho for a husband' rather than be pushed into a bad match. Claudio's match with Hero is almost entirely transactional \u2014 he is as interested in her inheritance as in her. The play ends with two weddings, but Shakespeare is careful to keep the earlier scepticism audible underneath the celebration.",
    how_it_develops:
      "Act 2: Beatrice's resistance to marriage; Claudio and Hero's rapid engagement. Act 3: Benedick converts from anti-marriage to pro-marriage in a single soliloquy. Act 4: the broken wedding. Act 5: Beatrice and Benedick's reluctant, witty acceptance \u2014 'I take thee for pity' \u2014 ends the play.",
    quotes: [
      '"I had rather hear my dog bark at a crow than a man swear he loves me" (1.1)',
      '"The world must be peopled" (2.3)',
      '"I yield upon great persuasion; and partly to save your life" (5.4)',
      '"I take thee for pity" (5.4)',
    ],
  },
  {
    theme: "Gender",
    summary:
      "Much Ado is unusually direct about how little real power women have in its world. Hero barely speaks in the first three acts. When she is slandered, she has no legal or social recourse \u2014 only the Friar's pretence that she has died. Beatrice rages in Act 4 that if she were a man she would 'eat Claudio's heart in the market-place'. Because she cannot act herself, she asks Benedick to do it for her. Shakespeare frames the play's comedy very carefully around this fact.",
    how_it_develops:
      "Act 1: Beatrice's early independence and refusal of marriage. Act 2: Hero is silent during her own engagement. Act 3: the trick scenes. Act 4: the public shaming, Hero's silence, Beatrice's 'Kill Claudio' and the 'O, that I were a man!' speech. Act 5: Hero returns only when her honour can be restored on male terms.",
    quotes: [
      '"O God, that I were a man! I would eat his heart in the market-place" (4.1)',
      '"Manhood is melted into curtsies, valour into compliment" (4.1)',
      '"I had rather hear my dog bark at a crow than a man swear he loves me" (1.1)',
      '"I am gone, though I am here; there is no love in you" (4.1)',
    ],
  },
];

export default async function MuchAdoThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
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
            Edexcel IGCSE 4ET1
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Much Ado About Nothing &mdash; Themes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Love, deception, honour, marriage and gender &mdash; tracked
            across the whole play.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {THEMES.map((t) => (
              <li key={t.theme}>
                <a
                  href={`#${t.theme.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className="text-primary hover:underline"
                >
                  {t.theme}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 space-y-8">
          {THEMES.map((t) => (
            <article
              key={t.theme}
              id={t.theme.toLowerCase().replace(/[^a-z]/g, "-")}
              className="scroll-mt-20 rounded-2xl border-l-4 border-primary bg-muted p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground">
                {t.theme}
              </h2>
              <p
                className="mt-3 text-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.summary }}
              />
              <div className="mt-5 rounded-lg border border-border bg-card p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  How it develops
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {t.how_it_develops}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Supporting quotes
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {t.quotes.map((q) => (
                    <li
                      key={q}
                      className="text-sm italic text-muted-foreground"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>

      <ExamBoardDisclaimer
        variant="content"
        className="mx-auto max-w-5xl px-4 py-8"
      />
    </main>
  );
}
