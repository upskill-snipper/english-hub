import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
  Quote,
  GraduationCap,
} from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet",
  },
  title: "Romeo and Juliet — Edexcel IGCSE 4ET1 Study Guide",
  description:
    "Romeo and Juliet study hub for Edexcel IGCSE English Literature 4ET1: plot, characters, themes overview, and exam technique for the two-part Shakespeare question.",
};

const PLOT = [
  {
    act: "Act 1",
    title: "The ancient grudge",
    text: "The Prince of Verona ends a street brawl between the Montagues and Capulets and warns that any future disturbance will be punished by death. Romeo, lovesick for Rosaline, is persuaded by Benvolio to crash the Capulets' masked ball. There he meets Juliet. They fall in love instantly \u2014 before either realises who the other is.",
  },
  {
    act: "Act 2",
    title: "The secret marriage",
    text: "After the famous balcony scene, Romeo and Juliet agree to marry. Friar Lawrence agrees to perform the ceremony in secret, hoping the union will reconcile the two families. They marry the next day.",
  },
  {
    act: "Act 3",
    title: "Banishment",
    text: "Tybalt, furious at Romeo's presence at the ball, challenges him. Romeo refuses to fight. Mercutio steps in and is killed. Romeo kills Tybalt in rage and is banished to Mantua. Juliet is ordered to marry Paris. She turns to Friar Lawrence in desperation.",
  },
  {
    act: "Act 4",
    title: "The desperate plan",
    text: "Friar Lawrence gives Juliet a potion that will make her appear dead for 42 hours. He sends a letter to Romeo explaining the plan. Juliet drinks the potion and is placed in the Capulet tomb.",
  },
  {
    act: "Act 5",
    title: "The tomb",
    text: "The Friar's letter never reaches Romeo. Hearing only that Juliet is dead, Romeo buys poison, travels to the tomb, and takes his life beside her. Juliet wakes, sees Romeo's body, and stabs herself with his dagger. The grieving families are finally reconciled over their children's bodies.",
  },
];

const CHARACTERS = [
  {
    name: "Romeo",
    text: "A Montague and a romantic idealist. He swings between extremes \u2014 lovesick despair over Rosaline in Act 1, ecstatic love for Juliet from Act 1 Scene 5, vengeful rage after Mercutio's death, and suicidal grief at the tomb. Shakespeare uses him to ask whether passionate love is a form of youthful recklessness.",
  },
  {
    name: "Juliet",
    text: "A Capulet, almost fourteen years old. She begins as an obedient daughter ('It is an honour that I dream not of') and transforms into a decisive young woman who defies her parents, fakes her own death and chooses suicide over a life without Romeo. She is arguably the play's most developed character.",
  },
  {
    name: "Friar Lawrence",
    text: "A Franciscan friar who agrees to marry the couple secretly, hoping to end the feud. His plans are well-meaning but disastrously over-engineered. Shakespeare leaves open whether he is a wise counsellor or a meddling adult who treats young lovers like a chemistry experiment.",
  },
  {
    name: "The Nurse",
    text: "Juliet's surrogate mother. Warm, bawdy and practical, she is initially the Nurse who helps Juliet marry Romeo. But in Act 3 she pragmatically advises Juliet to marry Paris instead \u2014 a betrayal that isolates Juliet and pushes her toward the Friar.",
  },
  {
    name: "Mercutio",
    text: "Romeo's best friend and cousin of the Prince. Witty, profane and restless, he is the play's verbal fireworks display. His death \u2014 'A plague o\u2019 both your houses!' \u2014 marks the tonal switch from comedy to tragedy.",
  },
  {
    name: "Tybalt",
    text: "Juliet's hot-headed cousin. Tybalt embodies the feud in its purest, most unreasoning form. His killing of Mercutio and subsequent death at Romeo's hands is the engine of the second half of the play.",
  },
  {
    name: "Lord and Lady Capulet",
    text: "Juliet's parents. Lord Capulet is initially fond of his daughter but flies into a terrifying rage when she refuses Paris. Lady Capulet is distant and formal. Together they exemplify the patriarchal assumption that a daughter's marriage is her father's business.",
  },
  {
    name: "Paris",
    text: "A young nobleman, kinsman to the Prince, who wants to marry Juliet. Paris is not villainous \u2014 he is courteous and genuinely mournful at the tomb \u2014 but he represents the socially correct marriage Juliet's parents demand.",
  },
];

const THEMES_PREVIEW = [
  {
    theme: "Love",
    text: "Shakespeare stages multiple kinds of love: the Petrarchan posturing of Act 1 Romeo, the instant all-consuming love of the balcony scene, the bawdy pragmatism of the Nurse, and the socially correct match Paris offers.",
  },
  {
    theme: "Fate",
    text: "The prologue calls the lovers 'star-cross'd'. Shakespeare then seeds the play with premonitions, bad timing and narrowly missed messages \u2014 so that the ending feels both inevitable and avoidable.",
  },
  {
    theme: "Conflict",
    text: "The 'ancient grudge' between Montagues and Capulets sits behind every scene. The feud poisons love, corrupts adults, and ultimately kills the children it was supposed to protect.",
  },
  {
    theme: "Youth vs age",
    text: "The young characters act fast and feel everything at full intensity. The older characters plot, delay, lecture and fail. Shakespeare is sharp-eyed about how adults betray the young who trust them.",
  },
  {
    theme: "Honour",
    text: "Honour is a trap. It forces Mercutio to fight Tybalt, Romeo to avenge Mercutio, and the families to maintain the feud. The play suggests that rigid codes of honour produce unnecessary deaths.",
  },
];

export default function RomeoAndJulietHubPage() {
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
            Romeo and Juliet
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Shakespeare&rsquo;s most famous tragedy: two teenagers, a
            poisonous feud, and a love that burns too hot to survive.
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
            <Button asChild variant="outline" size="sm">
              <Link href="/igcse/edexcel/shakespeare/romeo-and-juliet/themes">
                Full themes guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
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
            href="/igcse/edexcel/shakespeare/romeo-and-juliet/themes"
            className="group rounded-xl border border-border bg-card p-6 shadow-md transition-colors hover:border-primary/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Themes</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Love, fate, conflict, youth vs age and honour &mdash; with key
              quotations for each.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
              Read the themes guide
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/igcse/edexcel/shakespeare/romeo-and-juliet/quotes"
            className="group rounded-xl border border-border bg-card p-6 shadow-md transition-colors hover:border-primary/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Quote className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Key quotes</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              20 essential quotations with speaker, scene reference and
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
            How the IGCSE Romeo and Juliet question differs from GCSE
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The Edexcel IGCSE 4ET1 Shakespeare question comes in{" "}
            <strong>two linked parts</strong>:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                a
              </span>
              <span>
                <strong>Extract</strong> &mdash; a printed passage asking you
                to explore how Shakespeare presents a character, mood or
                idea. Stay tightly within the extract: zoom in on language,
                imagery and form.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                b
              </span>
              <span>
                <strong>Whole play</strong> &mdash; the same idea, traced
                across the rest of the play using <em>your own</em> memorised
                quotes. The extract is not reprinted, so your mental map must
                cover Acts 1 through 5.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Most GCSE boards give a single essay tied to one extract. IGCSE
            demands close reading <em>and</em> a longer comparison-style
            response. For Romeo and Juliet, that means you must be able to
            discuss the same theme from the opening brawl, the balcony, the
            wedding, Tybalt&rsquo;s death, the Friar&rsquo;s plot and the
            tomb &mdash; not just your favourite scene.
          </p>
        </section>
      </div>

      <ExamBoardDisclaimer
        variant="content"
        className="mx-auto max-w-5xl px-4 py-8"
      />
    </main>
  );
}
