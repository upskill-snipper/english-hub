import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/themes/love' },
  title: "Love Theme Across Texts | GCSE English Literature",
  description:
    "Explore the theme of love across GCSE set texts: Romeo and Juliet, Love and Relationships poetry, and Pride and Prejudice. Key quotes, analysis, and comparison ideas.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const TEXTS = [
  {
    title: "Romeo and Juliet",
    subtitle: "Types of Love",
    author: "William Shakespeare",
    colour: "border-[#E74C3C]",
    tagColour: "bg-[#E74C3C]/10 text-[#E74C3C]",
    analysis: [
      "Shakespeare presents multiple types of love: Romeo's infatuation with Rosaline (courtly love), the Nurse's bawdy humour (physical love), Capulet's possessive parental love, and the intense, transformative love between Romeo and Juliet.",
      "The religious imagery used by Romeo and Juliet in their first meeting (the shared sonnet) elevates their love above the ordinary, presenting it as sacred and destined.",
      "Shakespeare deliberately contrasts the purity of the lovers' private world with the violence of the public feud, suggesting that love and hate are inseparable forces in Verona.",
    ],
    quotes: [
      {
        text: "\"Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night\"",
        analysis: "Romeo's immediate rejection of his previous 'love' for Rosaline raises the question of whether this new passion is equally superficial -- or genuinely different.",
      },
      {
        text: "\"My only love sprung from my only hate! Too early seen unknown, and known too late!\"",
        analysis: "Juliet's antithesis captures the play's central paradox: love and hate are born from the same source, and the timing of recognition is tragically wrong.",
      },
      {
        text: "\"These violent delights have violent ends\"",
        analysis: "Friar Lawrence's warning foreshadows the tragedy and suggests that passionate, impulsive love contains the seeds of its own destruction.",
      },
    ],
  },
  {
    title: "Love and Relationships Poetry",
    subtitle: "Diverse Perspectives on Love",
    author: "Various poets",
    colour: "border-[#8E44AD]",
    tagColour: "bg-[#8E44AD]/10 text-[#8E44AD]",
    analysis: [
      "The anthology explores love in all its complexity: romantic (Sonnet 29), familial (Mother Any Distance, Before You Were Mine), obsessive (Porphyria's Lover), and enduring (When We Two Parted).",
      "Many poems examine how love changes over time -- Eden Rock presents love as a bridge between life and death, while Winter Swans uses nature to show a relationship's fragile reconciliation.",
      "The anthology challenges idealised notions of love by including darker perspectives: Porphyria's Lover explores love as possession, and Singh Song! presents love as joyful rebellion against cultural expectation.",
    ],
    quotes: [
      {
        text: "\"Sonnet 29: 'I think of thee!--my thoughts do twine and bud about thee'\"",
        analysis: "Barrett Browning's extended metaphor of growing vines presents love as a natural, living force that grows uncontrollably from thought and imagination.",
      },
      {
        text: "\"Mother Any Distance: 'You at the zero-end, me with the spool of tape'\"",
        analysis: "Armitage uses the measuring tape as an extended metaphor for the parent-child bond: love stretches but must eventually break to allow independence.",
      },
      {
        text: "\"Winter Swans: 'They mate for life, said the guide'\"",
        analysis: "Sheers uses the swans as a symbol of enduring love, offering quiet hope that damaged relationships can heal through shared experience.",
      },
    ],
  },
  {
    title: "Pride and Prejudice",
    subtitle: "Love and Social Convention",
    author: "Jane Austen",
    colour: "border-[#27AE60]",
    tagColour: "bg-[#27AE60]/10 text-[#27AE60]",
    analysis: [
      "Austen presents love as inseparable from social reality: marriage in Regency England was an economic transaction, and Elizabeth's refusal to marry for money alone is both romantic and radical.",
      "The novel charts the evolution of mature love through Darcy and Elizabeth's mutual growth -- both must overcome pride and prejudice to see each other clearly.",
      "Austen contrasts genuine love (Darcy and Elizabeth) with pragmatic marriage (Charlotte and Collins), passionate impulsiveness (Lydia and Wickham), and idealised romance (Jane and Bingley) to show love's many forms.",
    ],
    quotes: [
      {
        text: "\"In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you\"",
        analysis: "Darcy's first proposal reveals love entangled with class prejudice -- he loves Elizabeth despite her social inferiority, and his language reveals the internal conflict.",
      },
      {
        text: "\"Till this moment I never knew myself\"",
        analysis: "Elizabeth's moment of self-awareness after reading Darcy's letter shows that genuine love requires honest self-examination and the humility to change.",
      },
      {
        text: "\"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife\"",
        analysis: "Austen's ironic opening sentence exposes society's equation of love with economics, setting up the novel's exploration of whether love can transcend material concerns.",
      },
    ],
  },
];

const COMPARISON_IDEAS = [
  {
    title: "Love and social barriers",
    description:
      "Romeo and Juliet face family opposition; Elizabeth and Darcy face class prejudice. Compare how social context shapes the possibility and expression of love in each text.",
  },
  {
    title: "Idealised vs. realistic love",
    description:
      "Romeo and Juliet's love is intense but brief; Darcy and Elizabeth's develops slowly through mutual understanding. The poetry anthology includes both perspectives. Compare what each text values most in love.",
  },
  {
    title: "Love and self-knowledge",
    description:
      "Elizabeth Bennet and Juliet both grow through love -- compare how love forces characters to confront uncomfortable truths about themselves and their worlds.",
  },
  {
    title: "The language of love",
    description:
      "Shakespeare uses religious imagery, Austen uses ironic wit, and the anthology poets use diverse forms from sonnets to free verse. Compare how literary form shapes the presentation of love.",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function LoveThemePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/themes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/80 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Theme Explorer
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Love
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            How writers present romantic, familial, and unrequited love across
            your GCSE set texts. Includes key quotes, analysis, and comparison
            ideas.
          </p>
        </div>
      </section>

      {/* Texts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Love across texts</h2>
        <p className="mt-2 text-muted-foreground">
          From star-crossed tragedy to slow-burn romance to the complexity of
          family bonds -- love takes many forms across the GCSE canon.
        </p>

        <div className="mt-8 space-y-10">
          {TEXTS.map((text) => (
            <article
              key={text.title}
              className={`rounded-2xl border-2 ${text.colour} bg-card p-6 shadow-md sm:p-8`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {text.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {text.subtitle} &middot; {text.author}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${text.tagColour}`}>
                  {text.quotes.length} key quotes
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {text.analysis.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-foreground">
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Key Quotes
                </h4>
                <div className="mt-3 space-y-4">
                  {text.quotes.map((q, i) => (
                    <div key={i} className="rounded-xl border border-border bg-muted p-4">
                      <p className="font-medium text-foreground">{q.text}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison ideas */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Comparison ideas</h2>
          <p className="mt-2 text-muted-foreground">
            Use these as starting points for thematic comparison paragraphs on
            love.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {COMPARISON_IDEAS.map((point) => (
              <div key={point.title} className="rounded-xl border border-border bg-card p-6 shadow-md">
                <h3 className="text-base font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other themes */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Explore other themes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Power", href: "/resources/themes/power" },
            { label: "Guilt", href: "/resources/themes/guilt" },
            { label: "Social Responsibility", href: "/resources/themes/social-responsibility" },
            { label: "Conflict", href: "/resources/themes/conflict" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-primary/40"
            >
              <h3 className="font-bold text-foreground group-hover:text-foreground transition-colors">
                {link.label}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-foreground transition-colors">
                Explore <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
