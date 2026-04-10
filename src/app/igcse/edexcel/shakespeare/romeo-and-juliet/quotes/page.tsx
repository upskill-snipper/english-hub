import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/quotes",
  },
  title: "Romeo and Juliet Key Quotes — Edexcel IGCSE 4ET1",
  description:
    "20 key Romeo and Juliet quotations with speaker, scene reference and analysis, for the Edexcel IGCSE 4ET1 closed-book Shakespeare exam.",
};

const QUOTES = [
  {
    quote: '"A pair of star-cross\u2019d lovers take their life"',
    speaker: "Chorus (Prologue)",
    themes: ["Fate", "Love"],
    analysis:
      "The play announces its ending before it begins. 'Star-cross'd' puts the blame on the heavens, but the rest of the play will show plenty of human mistakes. Shakespeare is framing the tragedy as both fated and avoidable.",
  },
  {
    quote: '"Do you bite your thumb at us, sir?"',
    speaker: "Abram (1.1)",
    themes: ["Conflict", "Honour"],
    analysis:
      "The feud is so deeply rooted that an insulting gesture escalates to a sword fight within seconds. Shakespeare opens by showing that the 'ancient grudge' has soaked into the smallest, most trivial moments of daily life.",
  },
  {
    quote: '"O brawling love, O loving hate"',
    speaker: "Romeo (1.1)",
    themes: ["Love"],
    analysis:
      "Classic Petrarchan oxymorons. Romeo loves being in love. This is love as a performance \u2014 and it makes the shift in Act 1 Scene 5 feel seismic, because suddenly he stops speaking in clich\u00e9s.",
  },
  {
    quote: '"My only love sprung from my only hate!"',
    speaker: "Juliet (1.5)",
    themes: ["Love", "Conflict"],
    analysis:
      "Discovering Romeo is a Montague. The chiasmus folds love and hate into a single structure \u2014 her fate is already conjoined with the feud. The exclamation mark is almost helpless.",
  },
  {
    quote: '"But soft! What light through yonder window breaks?"',
    speaker: "Romeo (2.2)",
    themes: ["Love"],
    analysis:
      "Romeo's language transforms. The Petrarchan clich\u00e9s are gone; he reaches for natural imagery. Juliet is the sun, and 'the envious moon' is already sick with grief. This is love as a remaking of the world.",
  },
  {
    quote: '"Wherefore art thou Romeo?"',
    speaker: "Juliet (2.2)",
    themes: ["Love", "Conflict"],
    analysis:
      "Not 'where are you?' but 'why are you Romeo?' \u2014 why do you have to be the one name I cannot love? Juliet is already asking whether identity is a matter of name or self.",
  },
  {
    quote: '"Good night, good night! Parting is such sweet sorrow"',
    speaker: "Juliet (2.2)",
    themes: ["Love"],
    analysis:
      "The oxymoron 'sweet sorrow' captures the contradiction of early love: the joy of feeling it and the pain of being separated from its object. One of Shakespeare's quietest, most accurate lines about being young.",
  },
  {
    quote: '"These violent delights have violent ends"',
    speaker: "Friar Lawrence (2.6)",
    themes: ["Love", "Fate"],
    analysis:
      "The Friar's explicit warning. The alliteration binds delight and violence together as if they were inevitable partners. Shakespeare is also winking at the audience: we know the ending and now so, it seems, does the Friar.",
  },
  {
    quote: '"A plague o\u2019 both your houses!"',
    speaker: "Mercutio (3.1)",
    themes: ["Conflict", "Honour"],
    analysis:
      "Mercutio \u2014 a neutral character, kinsman to the Prince \u2014 dies cursing both families. His death is the tonal pivot from romantic comedy to tragedy. The curse is also a prophecy: both houses will indeed be wiped out by this feud.",
  },
  {
    quote: '"O, I am fortune\u2019s fool!"',
    speaker: "Romeo (3.1)",
    themes: ["Fate"],
    analysis:
      "After killing Tybalt, Romeo blames fortune rather than his own rage. Shakespeare lets the audience see both possibilities \u2014 that Romeo is fate's victim, and that he has made his own disaster.",
  },
  {
    quote: '"O serpent heart, hid with a flowering face!"',
    speaker: "Juliet (3.2)",
    themes: ["Love", "Appearance vs reality"],
    analysis:
      "On learning Romeo has killed Tybalt, Juliet lists paradoxes for twenty lines. The serpent-and-flower imagery echoes the Garden of Eden \u2014 but also recalls Lady Macbeth's 'serpent under't'. Shakespeare keeps returning to the idea that beauty can house cruelty.",
  },
  {
    quote: '"Hang thee, young baggage! disobedient wretch!"',
    speaker: "Capulet (3.5)",
    themes: ["Youth vs age", "Honour"],
    analysis:
      "Capulet's switch is terrifying. Moments before he had described Juliet as 'the hopeful lady of my earth'. Her refusal to marry Paris is read as a personal insult to his honour \u2014 the feud is smaller than his ego.",
  },
  {
    quote: '"I think it best you married with the County"',
    speaker: "Nurse (3.5)",
    themes: ["Youth vs age"],
    analysis:
      "The Nurse's betrayal is quiet and devastating. She was Juliet's surrogate mother; now she advises her to commit bigamy and forget Romeo. Juliet is left with no adult ally, which pushes her toward the Friar's desperate plan.",
  },
  {
    quote: '"My only love sprung from my only hate"',
    speaker: "Juliet (1.5)",
    themes: ["Love", "Conflict"],
    analysis:
      "Worth memorising twice. The structure collapses Juliet's identity (Capulet) and her desire (Montague) into a single sentence, so that loving Romeo <em>is</em> an act of defiance against her own family.",
  },
  {
    quote: '"If all else fail, myself have power to die"',
    speaker: "Juliet (3.5)",
    themes: ["Youth vs age", "Love"],
    analysis:
      "Juliet discovers agency through the threat of self-harm. In a patriarchal world that will not let her say no to Paris, suicide becomes a weapon. Shakespeare uses this to expose how little power young women have inside the Capulet household.",
  },
  {
    quote: '"Romeo, Romeo, Romeo! Here\u2019s drink \u2014 I drink to thee"',
    speaker: "Juliet (4.3)",
    themes: ["Love", "Fate"],
    analysis:
      "Drinking the Friar's potion. The triple repetition of 'Romeo' echoes her earlier 'Wherefore art thou Romeo?' \u2014 and binds this most dangerous act to the very first moment of their love.",
  },
  {
    quote: '"Then I defy you, stars!"',
    speaker: "Romeo (5.1)",
    themes: ["Fate"],
    analysis:
      "Hearing (false) news of Juliet's death, Romeo turns against fate itself. The imperative is defiant \u2014 but also tragic, because the audience knows his defiance will only seal the tragedy.",
  },
  {
    quote: '"Eyes, look your last! Arms, take your last embrace!"',
    speaker: "Romeo (5.3)",
    themes: ["Love", "Fate"],
    analysis:
      "Inside the tomb. The imperatives to his own body parts dramatise the splitting of the self in grief. Every repetition of 'last' tightens the knot. Note that Juliet is not actually dead \u2014 Romeo is moments too early.",
  },
  {
    quote: '"Thus with a kiss I die"',
    speaker: "Romeo (5.3)",
    themes: ["Love", "Fate"],
    analysis:
      "The play's most famous line of finality. Six monosyllables and a kiss. Shakespeare refuses any grand rhetorical flourish \u2014 Romeo's end is quiet and tender, which is why it hurts.",
  },
  {
    quote: '"For never was a story of more woe / Than this of Juliet and her Romeo"',
    speaker: "Prince (5.3)",
    themes: ["Love", "Fate", "Conflict"],
    analysis:
      "Rhyming couplet closes the play. The Prince orders the feuding families by naming Juliet first, reframing the story as hers. It's also a metatheatrical wink: Shakespeare is claiming his version will eclipse all the earlier retellings of the Romeo legend.",
  },
];

export default function RomeoAndJulietQuotesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/romeo-and-juliet"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Romeo and Juliet hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE 4ET1
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Romeo and Juliet &mdash; 20 key quotes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Short, embeddable quotations spread across every act, ready for
            the closed-book Shakespeare question.
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
              Learn short fragments you can embed inside a sentence of
              analysis.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Tag each quote with <strong>at least two themes</strong> so you
              can redeploy it flexibly.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Cover Acts 1 through 5 &mdash; the part (b) whole-play question
              rewards breadth.
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
    </main>
  );
}
