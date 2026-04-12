import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/characters",
  },
  title: "Macbeth Characters — Edexcel IGCSE 4ET1",
  description:
    "Character analysis for Macbeth, Lady Macbeth, Banquo, Duncan, Macduff and the Witches for Edexcel IGCSE English Literature 4ET1.",
};

const CHARACTERS = [
  {
    name: "Macbeth",
    role: "Tragic protagonist — Scottish general, then king, then tyrant",
    description:
      "Macbeth begins the play as a 'brave' and 'noble' war hero, praised by Duncan as 'valiant cousin, worthy gentleman'. But his 'vaulting ambition' — activated by the witches' prophecy and weaponised by his wife — drives him to regicide. As king he becomes paranoid and tyrannical, ordering the murder of Banquo, Fleance and Macduff's family. By Act 5 he is emotionally hollow, clinging to the witches' equivocations. Shakespeare frames him as a classical tragic hero: a noble figure destroyed by a single fatal flaw (hamartia).",
    arc: "Loyal warrior \u2192 reluctant murderer \u2192 tyrant \u2192 nihilist \u2192 dead",
    key_quotes: [
      '"I have no spur to prick the sides of my intent, but only vaulting ambition, which o\'erleaps itself" (1.7)',
      '"Is this a dagger which I see before me?" (2.1)',
      '"Will all great Neptune\'s ocean wash this blood clean from my hand?" (2.2)',
      '"O, full of scorpions is my mind, dear wife!" (3.2)',
      '"Tomorrow, and tomorrow, and tomorrow" (5.5)',
    ],
  },
  {
    name: "Lady Macbeth",
    role: "Macbeth's wife — the architect of Duncan's murder",
    description:
      "In her first scene Lady Macbeth calls on 'spirits that tend on mortal thoughts' to 'unsex' her and fill her 'from the crown to the toe top-full of direst cruelty'. She is initially the stronger partner, shaming Macbeth into committing regicide by questioning his manhood. But the partnership reverses. As Macbeth hardens, she is excluded from his plans — 'be innocent of the knowledge, dearest chuck' — and her suppressed guilt erupts in the sleepwalking scene: 'Out, damned spot!' Her implied suicide is a dark mirror of Macbeth's soldierly death.",
    arc: "Ruthless plotter \u2192 sidelined accomplice \u2192 sleepwalking ghost \u2192 suicide",
    key_quotes: [
      '"Come, you spirits that tend on mortal thoughts, unsex me here" (1.5)',
      '"Look like the innocent flower, but be the serpent under\'t" (1.5)',
      '"When you durst do it, then you were a man" (1.7)',
      '"A little water clears us of this deed" (2.2)',
      '"Out, damned spot! Out, I say!" (5.1)',
    ],
  },
  {
    name: "Banquo",
    role: "Macbeth's fellow general — a moral foil",
    description:
      "Banquo hears the same prophecy as Macbeth — that his descendants will be kings — but resists temptation. He is cautious: he warns that 'instruments of darkness' can tell 'truths' only to betray us. After Duncan's murder he suspects Macbeth of foul play but does nothing. Macbeth has him murdered, but Banquo's ghost returns to haunt the banquet — a symbol of Macbeth's inescapable guilt. Banquo was also believed to be an ancestor of James I, which is why Shakespeare flatters him.",
    arc: "Loyal companion \u2192 silent suspicion \u2192 victim \u2192 ghost",
    key_quotes: [
      '"\u2019Tis strange; and oftentimes to win us to our harm, the instruments of darkness tell us truths" (1.3)',
      '"Thou hast it now: King, Cawdor, Glamis, all... and I fear thou play\'dst most foully for\'t" (3.1)',
      '"Let your highness command upon me" (3.1)',
    ],
  },
  {
    name: "Duncan",
    role: "King of Scotland — the victim",
    description:
      "Duncan is the ideal Jacobean monarch: trusting, grateful, generous. He showers Macbeth with rewards and praises his wife's 'great love'. Shakespeare deliberately makes him gentle so that his murder feels monstrous. To a Jacobean audience, killing a king was not just a political crime but a sin against God — regicide disturbs the natural order, which is why the play is flooded with omens.",
    arc: "Gracious king \u2192 trusting guest \u2192 murdered",
    key_quotes: [
      '"This castle hath a pleasant seat" (1.6)',
      '"He was a gentleman on whom I built an absolute trust" (1.4, of the previous Thane of Cawdor — dramatic irony)',
      '"More is thy due than more than all can pay" (1.4, to Macbeth)',
    ],
  },
  {
    name: "Macduff",
    role: "Thane of Fife — Macbeth's avenger",
    description:
      "Macduff is the moral counterweight to Macbeth. He refuses to attend Macbeth's coronation at Scone, flees to England, and joins Malcolm. His grief at the slaughter of his wife and children — 'all my pretty chickens and their dam at one fell swoop' — is one of the play's rawest moments, and Shakespeare uses it to model healthy masculine grief against the toxic version Lady Macbeth demanded of her husband. Being 'from his mother's womb untimely ripped', he fulfils the prophecy and kills Macbeth.",
    arc: "Suspicious nobleman \u2192 exile \u2192 grieving father \u2192 avenger",
    key_quotes: [
      '"O horror, horror, horror!" (2.3)',
      '"He has no children" (4.3)',
      '"I shall do so; but I must also feel it as a man" (4.3)',
      '"Turn, hell-hound, turn!" (5.8)',
      '"Macduff was from his mother\'s womb untimely ripped" (5.8)',
    ],
  },
  {
    name: "The Witches",
    role: "Supernatural agents — the catalysts",
    description:
      "The three weird sisters open the play and set its tragedy in motion. They are ambiguous figures: do they <em>control</em> Macbeth, or merely see and name what he already desires? They speak in riddles and rhyming trochees, separating them linguistically from everyone else. For a Jacobean audience steeped in James I's <em>Daemonologie</em>, they would have been genuinely terrifying agents of the devil. Shakespeare uses them to probe the question of fate versus free will.",
    arc: "Prophecy \u2192 temptation \u2192 equivocation \u2192 destruction",
    key_quotes: [
      '"Fair is foul, and foul is fair" (1.1)',
      '"All hail, Macbeth, that shalt be king hereafter!" (1.3)',
      '"Double, double, toil and trouble; fire burn and cauldron bubble" (4.1)',
      '"By the pricking of my thumbs, something wicked this way comes" (4.1)',
    ],
  },
];

export default async function MacbethCharactersPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/macbeth"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Macbeth hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE 4ET1
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Macbeth &mdash; Characters
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Arcs, motivations and key quotations for the play&rsquo;s central
            figures.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ───────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {CHARACTERS.map((c) => (
              <li key={c.name}>
                <a
                  href={`#${c.name.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className="text-primary hover:underline"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 space-y-8">
          {CHARACTERS.map((c) => (
            <article
              key={c.name}
              id={c.name.toLowerCase().replace(/[^a-z]/g, "-")}
              className="scroll-mt-20 rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground">{c.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {c.role}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {c.description}
              </p>
              <div className="mt-5 rounded-lg border border-primary/30 bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Character arc
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {c.arc}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Key quotes
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {c.key_quotes.map((q) => (
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

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  );
}
