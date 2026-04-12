import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/quotes",
  },
  title: "Macbeth Key Quotes — Edexcel IGCSE 4ET1",
  description:
    "20 key Macbeth quotations with speaker, scene reference and detailed analysis for the Edexcel IGCSE 4ET1 closed-book Shakespeare exam.",
};

const QUOTES = [
  {
    quote: '"Fair is foul, and foul is fair"',
    speaker: "Witches (1.1)",
    themes: ["Appearance vs reality", "Supernatural"],
    analysis:
      "The play's opening paradox. The chiasmus inverts moral categories, warning the audience that the world of Macbeth is one where nothing can be trusted. It also sets up the verbal equivocation that the witches will weaponise against Macbeth in Act 4.",
  },
  {
    quote: '"Brave Macbeth \u2014 well he deserves that name"',
    speaker: "Captain (1.2)",
    themes: ["Kingship", "Reputation"],
    analysis:
      "Macbeth's first appearance in the text is mediated through praise. Shakespeare establishes how noble Macbeth is <em>before</em> the fall so that the tragedy has something to fall from.",
  },
  {
    quote:
      '"Stars, hide your fires; let not light see my black and deep desires"',
    speaker: "Macbeth (1.4)",
    themes: ["Ambition", "Appearance vs reality"],
    analysis:
      "His first aside. The light/dark imagery binds goodness to sight and evil to concealment. The fact that Macbeth wants to hide even from the stars (and so from God) shows he already knows his intentions are sinful.",
  },
  {
    quote:
      '"Come, you spirits that tend on mortal thoughts, unsex me here"',
    speaker: "Lady Macbeth (1.5)",
    themes: ["Gender", "Supernatural", "Ambition"],
    analysis:
      "She calls on literal demons to strip her of her femininity, which she sees as an obstacle to murder. For a Jacobean audience this would have been deeply transgressive \u2014 both demonic invocation and rejection of the natural order.",
  },
  {
    quote: '"Look like the innocent flower, but be the serpent under\u2019t"',
    speaker: "Lady Macbeth (1.5)",
    themes: ["Appearance vs reality", "Gender"],
    analysis:
      "Biblical allusion to the serpent in Eden, framing Lady Macbeth as a temptress. The imperative verbs give her total control of her husband's performance of hospitality.",
  },
  {
    quote:
      '"I have no spur to prick the sides of my intent, but only vaulting ambition, which o\u2019erleaps itself"',
    speaker: "Macbeth (1.7)",
    themes: ["Ambition", "Fate vs free will"],
    analysis:
      "The equestrian metaphor of a horse leaping so high it throws its rider frames ambition as self-defeating. Macbeth himself names ambition as his only motive \u2014 there is no grievance, no justice, just appetite.",
  },
  {
    quote: '"When you durst do it, then you were a man"',
    speaker: "Lady Macbeth (1.7)",
    themes: ["Gender", "Masculinity"],
    analysis:
      "She weaponises masculinity. The past tense ('were') implies his manhood has already lapsed. Shakespeare is exposing how toxic definitions of masculinity can be manipulated into violence.",
  },
  {
    quote: '"Is this a dagger which I see before me?"',
    speaker: "Macbeth (2.1)",
    themes: ["Supernatural", "Guilt", "Fate vs free will"],
    analysis:
      "Either a supernatural sign or a projection of his diseased mind \u2014 Shakespeare keeps both readings open. The dagger points toward Duncan, externalising the temptation Macbeth has already surrendered to.",
  },
  {
    quote:
      '"Will all great Neptune\u2019s ocean wash this blood clean from my hand?"',
    speaker: "Macbeth (2.2)",
    themes: ["Guilt"],
    analysis:
      "Hyperbolic, classical imagery. Not even a sea god's ocean can cleanse him \u2014 the blood is a moral stain, not a physical one. This is the first of many moments where guilt is figured as indelible.",
  },
  {
    quote: '"A little water clears us of this deed"',
    speaker: "Lady Macbeth (2.2)",
    themes: ["Guilt", "Appearance vs reality"],
    analysis:
      "The direct counter to Macbeth's despair. Her diminutive 'a little' is chilling \u2014 but the line is also brutal dramatic irony, because her sleepwalking scene will echo it back at her.",
  },
  {
    quote: '"O, full of scorpions is my mind, dear wife!"',
    speaker: "Macbeth (3.2)",
    themes: ["Guilt", "Tyranny"],
    analysis:
      "The metaphor of scorpions suggests paranoia that stings from within. Note the intimacy of 'dear wife' \u2014 even as their partnership is falling apart, Macbeth still turns to her for comfort.",
  },
  {
    quote:
      '"I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o\u2019er"',
    speaker: "Macbeth (3.4)",
    themes: ["Guilt", "Tyranny"],
    analysis:
      "The river-of-blood metaphor makes his moral descent irrevocable. The monosyllables enact the slog. This is the exact turning point where Macbeth abandons guilt for resigned tyranny.",
  },
  {
    quote: '"Double, double, toil and trouble; fire burn and cauldron bubble"',
    speaker: "Witches (4.1)",
    themes: ["Supernatural"],
    analysis:
      "Rhyming trochaic tetrameter sets the witches linguistically apart from everyone else. The incantation creates an atmosphere of ritual and unnatural magic \u2014 designed to unsettle a Jacobean audience who believed in witchcraft.",
  },
  {
    quote: '"By the pricking of my thumbs, something wicked this way comes"',
    speaker: "Second Witch (4.1)",
    themes: ["Supernatural"],
    analysis:
      "The witches themselves now describe Macbeth as 'wicked' \u2014 he has passed even their moral threshold. Shakespeare uses the witches as a moral mirror to track how far Macbeth has fallen.",
  },
  {
    quote:
      '"All my pretty chickens and their dam at one fell swoop"',
    speaker: "Macduff (4.3)",
    themes: ["Tyranny", "Masculinity"],
    analysis:
      "The diminutive 'pretty chickens' and the maternal 'dam' feminise Macduff's grief \u2014 and that is the point. Against Lady Macbeth's toxic insistence that violence equals manhood, Shakespeare offers a father who grieves 'as a man'.",
  },
  {
    quote: '"Out, damned spot! Out, I say!"',
    speaker: "Lady Macbeth (5.1)",
    themes: ["Guilt", "Gender"],
    analysis:
      "The imperative verbs and fragmented syntax enact her broken mind. The blood she once dismissed as washable has become permanent. Her earlier claim that 'a little water' could cleanse them is turned into savage dramatic irony.",
  },
  {
    quote:
      '"My way of life is fallen into the sere, the yellow leaf"',
    speaker: "Macbeth (5.3)",
    themes: ["Ambition", "Tyranny"],
    analysis:
      "Autumnal imagery. Macbeth recognises that he has lost everything that makes life meaningful \u2014 'honour, love, obedience, troops of friends'. This is quiet tragedy after all the noise.",
  },
  {
    quote:
      '"Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day"',
    speaker: "Macbeth (5.5)",
    themes: ["Ambition", "Nihilism"],
    analysis:
      "The repetition and monosyllables create a weary, hopeless rhythm. Hearing of his wife's death, Macbeth collapses into nihilism: life is 'a tale told by an idiot, full of sound and fury, signifying nothing'. Ambition has delivered nothing.",
  },
  {
    quote:
      '"Macduff was from his mother\u2019s womb untimely ripped"',
    speaker: "Macduff (5.8)",
    themes: ["Fate vs free will", "Supernatural"],
    analysis:
      "The witches' equivocation is exposed. 'Not of woman born' turns out to be a technicality, not a guarantee \u2014 Macbeth has mistaken a half-truth for a promise, which is the play's final warning about trusting the supernatural.",
  },
  {
    quote: '"This dead butcher and his fiend-like queen"',
    speaker: "Malcolm (5.9)",
    themes: ["Kingship", "Gender"],
    analysis:
      "The play's final verdict. 'Butcher' reduces Macbeth from tragic hero to mindless killer; 'fiend-like' demonises Lady Macbeth. The new king's language restores moral order \u2014 but notice how neatly it flattens the complexity we've just watched.",
  },
];

export default async function MacbethQuotesPage() {
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
            Macbeth &mdash; 20 key quotes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            The Edexcel IGCSE Shakespeare exam is closed book. Memorise these
            20 quotations and you&rsquo;ll have evidence for every likely
            theme.
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
              Learn short, embeddable fragments &mdash; 3&ndash;6 words you can
              drop inside a sentence.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              For each quote, note at least{" "}
              <strong>two themes</strong> it can support.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Practise the single-word zoom: pick one word and explain its
              effect in two or three sentences.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Spread your chosen quotes across all five acts &mdash; the
              part&nbsp;(b) whole-play question rewards breadth.
            </li>
          </ul>
        </div>

        <section className="mt-10 space-y-4">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 shadow-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
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
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  );
}
