import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
  Quote,
  GraduationCap,
} from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/much-ado",
  },
  title: "Much Ado About Nothing — Edexcel IGCSE 4ET1 Study Guide",
  description:
    "Much Ado About Nothing study hub for Edexcel IGCSE English Literature 4ET1: plot, characters, themes overview and exam technique.",
};

const PLOT = [
  {
    act: "Act 1",
    title: "The soldiers return",
    text: "Don Pedro and his soldiers arrive in Messina, fresh from war. Claudio falls immediately for Hero, the daughter of the governor Leonato. Benedick and Beatrice resume their 'merry war' of witty insults. Don Pedro agrees to woo Hero on Claudio's behalf at the masked ball. Don John, Don Pedro's bitter half-brother, plans to spoil the match.",
  },
  {
    act: "Act 2",
    title: "Two couples plotted together",
    text: "At the ball, Don John briefly convinces Claudio that Don Pedro is wooing Hero for himself. The misunderstanding is cleared up and Claudio and Hero are engaged. Don Pedro proposes a second plot: to trick Benedick and Beatrice into falling for each other. Don John plans a darker counter-plot to destroy Hero's reputation.",
  },
  {
    act: "Act 3",
    title: "Eavesdropping and slander",
    text: "Benedick and Beatrice each overhear (staged) conversations revealing that the other is secretly in love with them. Both fall instantly. Meanwhile, Don John arranges for Claudio to see Hero's attendant Margaret at Hero's window, disguised and mistaken for Hero herself. Claudio swears to shame her at the wedding.",
  },
  {
    act: "Act 4",
    title: "The broken wedding",
    text: "At the altar, Claudio publicly rejects Hero, accusing her of infidelity. Leonato believes the accusation. Hero faints. Friar Francis proposes that they pretend Hero has died until the truth comes out. Alone, Beatrice asks Benedick to prove his love by killing Claudio. He agrees. Meanwhile the constable Dogberry's bumbling watchmen stumble onto evidence of Don John's plot.",
  },
  {
    act: "Act 5",
    title: "Truth and reconciliation",
    text: "Dogberry finally delivers the evidence to Leonato. Claudio, believing Hero dead, agrees to marry a 'niece' Leonato will produce. At the second wedding, the masked 'niece' is revealed to be Hero herself. Benedick and Beatrice admit their love in front of everyone and also marry. Don John has been captured and will be punished.",
  },
];

const CHARACTERS = [
  {
    name: "Beatrice",
    text: "Leonato's sharp-tongued niece and Hero's cousin. She has sworn never to marry and engages Benedick in a 'merry war' of wit. But she is also the play's fiercest moral voice \u2014 her Act 4 demand that Benedick 'Kill Claudio' is one of Shakespeare's most startling lines. Beatrice refuses to be silent about Hero's mistreatment.",
  },
  {
    name: "Benedick",
    text: "A soldier and confirmed bachelor who matches Beatrice's wit word for word. After being tricked by his friends into believing Beatrice loves him, he transforms \u2014 shaving, writing poetry, and agreeing to challenge Claudio for Beatrice's sake. Shakespeare shows that his pride is easier to puncture than he pretends.",
  },
  {
    name: "Hero",
    text: "Leonato's gentle, obedient daughter and Claudio's love. She is largely silent for the first half of the play, then brutally slandered and publicly humiliated at her own wedding. Her 'death' and resurrection function almost like a ritual \u2014 she returns only when her honour can be publicly restored.",
  },
  {
    name: "Claudio",
    text: "A young soldier who falls in love with Hero at first sight. He is easily manipulated: Don John fools him twice, first into believing Don Pedro has stolen his bride and then into believing Hero is unfaithful. His willingness to shame Hero in public shows how fragile male honour is.",
  },
  {
    name: "Don Pedro",
    text: "Prince of Aragon, Claudio's patron, and the play's fixer. He arranges the wooing of Hero, engineers the trick that brings Beatrice and Benedick together, and is the last character to be paired off (he stands alone at the end). Shakespeare gently asks what happens to a man who solves everyone else's love lives.",
  },
  {
    name: "Don John",
    text: "Don Pedro's bastard half-brother. He declares himself 'a plain-dealing villain' in Act 1 Scene 3 and spends the play trying to wreck others' happiness out of pure malice. He is the play's shadow \u2014 the reminder that the comedy exists only because the tragedy doesn't quite come off.",
  },
  {
    name: "Leonato",
    text: "Governor of Messina, Hero's father and Beatrice's uncle. He is hospitable and affectionate in the first half, but when Claudio accuses Hero he immediately believes the accusation and wishes his daughter dead. His failure is the play's sharpest indictment of patriarchal honour culture.",
  },
  {
    name: "Dogberry",
    text: "The bumbling constable whose malapropisms provide comic relief \u2014 but whose watchmen are the ones who actually uncover Don John's plot. Shakespeare uses him to argue that truth does not always come from the articulate, powerful or clever.",
  },
];

const THEMES_PREVIEW = [
  {
    theme: "Love",
    text: "Two couples, two opposite paths to love. Claudio and Hero fall in love silently and at a distance; Beatrice and Benedick spar their way to each other in public. Shakespeare weighs the two against each other.",
  },
  {
    theme: "Deception",
    text: "Almost every major plot point turns on someone being tricked. Some deceptions are well-meaning (the eavesdropping scenes), some are malicious (Don John), some are protective (the Friar). Shakespeare asks whether deception is compatible with love.",
  },
  {
    theme: "Honour",
    text: "Male honour in Messina depends on the sexual reputation of the women attached to them. One rumour about Hero's chastity is enough to make her father wish her dead. The play exposes how fragile \u2014 and how lethal \u2014 that system is.",
  },
  {
    theme: "Marriage",
    text: "Marriage is a social contract, a religious sacrament, and (for Beatrice) a cage. Shakespeare gives us a rushed arranged marriage, a broken wedding, a faked marriage and two real ones \u2014 all in five acts.",
  },
  {
    theme: "Gender",
    text: "Hero is silenced, slandered and abandoned. Beatrice is the only character who speaks up for her \u2014 and to do so she has to ask a man to commit murder on her behalf. Shakespeare is unusually direct about women's lack of real power.",
  },
];

export default async function MuchAdoHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Shakespeare hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE 4ET1
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Much Ado About Nothing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Shakespeare&rsquo;s sharpest romantic comedy &mdash; and its
            hardest-edged examination of honour, reputation and how women
            are judged.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Plot ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground">Plot overview</h2>
          <div className="mt-6 space-y-4">
            {PLOT.map((act) => (
              <article
                key={act.act}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {act.act}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {act.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {act.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Characters ──────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Characters</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CHARACTERS.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-base font-bold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Themes preview ──────────────────────────────────── */}
        <section className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-foreground">
              Themes overview
            </h2>
            <Link href="/igcse/edexcel/shakespeare/much-ado/themes" className={buttonVariants({ variant: "outline", size: "sm" })}>
                Full themes guide
                <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {THEMES_PREVIEW.map((t) => (
              <div
                key={t.theme}
                className="rounded-xl border-l-4 border-primary bg-muted p-5"
              >
                <h3 className="text-base font-bold text-foreground">
                  {t.theme}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick links ─────────────────────────────────────── */}
        <section className="mt-14 grid gap-4 sm:grid-cols-2">
          <Link
            href="/igcse/edexcel/shakespeare/much-ado/themes"
            className="group rounded-xl border border-border bg-card p-6 shadow-md transition-colors hover:border-primary/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Themes</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Love, deception, honour, marriage and gender &mdash; with key
              quotations for each.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
              Read the themes guide
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/igcse/edexcel/shakespeare/much-ado/quotes"
            className="group rounded-xl border border-border bg-card p-6 shadow-md transition-colors hover:border-primary/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Quote className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Key quotes</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              15 essential quotations with speaker, scene reference and
              detailed analysis.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
              Read the quotes guide
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </section>

        {/* ── Study tip ───────────────────────────────────────── */}
        <section className="mt-14 rounded-2xl border-2 border-primary/40 bg-primary/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-primary">
            <Lightbulb className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Study tip
            </span>
          </div>
          <h2 className="mt-2 text-xl font-bold text-foreground">
            How the IGCSE Much Ado question differs from GCSE
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The Edexcel IGCSE 4ET1 Shakespeare question has two linked
            parts:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                a
              </span>
              <span>
                <strong>Extract</strong> &mdash; a printed passage (often a
                verbal sparring scene or a confrontation) inviting close
                reading. Analyse language, imagery, prose vs verse, and
                dramatic method.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                b
              </span>
              <span>
                <strong>Whole play</strong> &mdash; the same idea across the
                rest of the play, using <em>your own</em> memorised quotes.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Much Ado rewards IGCSE candidates who can move smoothly between
            the play&rsquo;s two tones. The comic wit of Beatrice and
            Benedick and the dark seriousness of the broken wedding are{" "}
            <em>connected</em>, not contradictory &mdash; examiners love
            answers that see both registers working together. Because the
            plot depends on misunderstandings, pay particular attention to
            who knows what at any given moment, and to the difference
            between prose and verse in the characters&rsquo; speech.
          </p>
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
