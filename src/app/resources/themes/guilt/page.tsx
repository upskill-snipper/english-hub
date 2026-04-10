import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/themes/guilt' },
  title: "Guilt Theme Across Texts | GCSE English Literature",
  description:
    "Explore the theme of guilt across GCSE set texts: Macbeth, An Inspector Calls, Remains, and A Christmas Carol. Key quotes, analysis, and comparison essay ideas.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const TEXTS = [
  {
    title: "Macbeth",
    subtitle: "Guilt and Consequences",
    author: "William Shakespeare",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    analysis: [
      "Macbeth experiences guilt immediately after Duncan's murder -- the hallucinated dagger and the voice crying 'sleep no more' show guilt as a supernatural, inescapable force.",
      "Lady Macbeth's guilt is delayed but devastating. Her sleepwalking in Act 5 reveals that suppressed guilt eventually overwhelms even the most determined willpower.",
      "Shakespeare uses guilt to reinforce the moral order: those who violate it are destroyed from within, even before external justice catches up with them.",
    ],
    quotes: [
      {
        text: "\"Will all great Neptune's ocean wash this blood clean from my hand?\"",
        analysis: "The hyperbole suggests guilt is permanent and all-consuming -- no external force can remove the internal stain of murder.",
      },
      {
        text: "\"Out, damned spot! Out, I say!\"",
        analysis: "The imagined bloodstain externalises Lady Macbeth's guilt. The imperative verbs show her desperate, futile attempts to rid herself of responsibility.",
      },
      {
        text: "\"Macbeth shall sleep no more\"",
        analysis: "Sleep represents innocence and a clear conscience. Shakespeare suggests that guilt permanently destroys inner peace.",
      },
    ],
  },
  {
    title: "An Inspector Calls",
    subtitle: "Collective Guilt",
    author: "J.B. Priestley",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    analysis: [
      "Priestley distributes guilt across the entire Birling family, showing that social injustice is a collective rather than individual failure.",
      "The generational divide in guilt response is crucial: Sheila and Eric accept responsibility while Mr and Mrs Birling deny it, reflecting Priestley's hope for the younger post-war generation.",
      "The Inspector functions as a guilt-figure -- part police officer, part moral conscience -- forcing each character to confront their role in Eva's death.",
    ],
    quotes: [
      {
        text: "\"We are members of one body. We are responsible for each other\"",
        analysis: "The Inspector's final speech redefines guilt as a social concept: failing to care for others is as morally culpable as direct harm.",
      },
      {
        text: "\"If men will not learn that lesson, then they will be taught it in fire and blood and anguish\"",
        analysis: "The biblical imagery elevates guilt from personal emotion to prophetic warning -- collective irresponsibility leads to collective suffering (the World Wars).",
      },
      {
        text: "\"I behaved badly too. I know I did. I'm ashamed of it\"",
        analysis: "Sheila's acceptance of guilt represents the moral transformation Priestley wants his audience to undergo.",
      },
    ],
  },
  {
    title: "Remains",
    subtitle: "PTSD and Guilt",
    author: "Simon Armitage",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    analysis: [
      "Armitage presents guilt as an inescapable psychological wound. The looter's death replays endlessly in the soldier's mind, blurring past and present.",
      "The colloquial, conversational tone makes the guilt feel raw and authentic -- this is not literary guilt but lived, traumatic experience.",
      "The poem's structure mirrors PTSD: the narrative loops back, unable to move past the moment of killing, just as the soldier cannot process his guilt.",
    ],
    quotes: [
      {
        text: "\"his bloody life in my bloody hands\"",
        analysis: "The dual meaning of 'bloody' (literal blood and the expletive) captures both the physical reality and the emotional weight of guilt.",
      },
      {
        text: "\"he's here in my head when I close my eyes\"",
        analysis: "The present tense and intimate 'my head' show guilt as a permanent, internal haunting -- the dead man has become part of the soldier's consciousness.",
      },
      {
        text: "\"I blink and he bursts again through the doors of the bank\"",
        analysis: "The violent verb 'bursts' and the cyclical structure show that guilt forces the traumatic moment to repeat endlessly.",
      },
    ],
  },
  {
    title: "A Christmas Carol",
    subtitle: "Scrooge's Guilt",
    author: "Charles Dickens",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    analysis: [
      "Dickens uses the supernatural visits to force Scrooge to confront his guilt -- each ghost reveals a different dimension of his moral failure.",
      "The Ghost of Christmas Past triggers guilt about personal relationships Scrooge sacrificed for wealth, particularly his broken engagement to Belle.",
      "The Ghost of Christmas Yet to Come presents guilt's ultimate consequence: a lonely, unmourned death that transforms Scrooge's understanding of his own life.",
    ],
    quotes: [
      {
        text: "\"Are there no prisons? Are there no workhouses?\"",
        analysis: "Scrooge's callous dismissal is designed to provoke guilt in Dickens' wealthy readers, who shared these attitudes toward the poor.",
      },
      {
        text: "\"I will honour Christmas in my heart, and try to keep it all the year\"",
        analysis: "Scrooge's redemption shows that guilt, when properly confronted, can be a catalyst for genuine moral transformation.",
      },
      {
        text: "\"The common welfare was my business... charity, mercy, forbearance, and benevolence\"",
        analysis: "Marley's ghost redefines guilt in social terms -- neglecting others is as damning as active cruelty.",
      },
    ],
  },
];

const COMPARISON_IDEAS = [
  {
    title: "Individual vs. collective guilt",
    description:
      "Macbeth and the soldier in Remains bear personal guilt for specific acts, while An Inspector Calls and A Christmas Carol present guilt as a shared social failing.",
  },
  {
    title: "Guilt and redemption",
    description:
      "Scrooge achieves redemption through confronting guilt, but Macbeth and Lady Macbeth are destroyed by it. Compare what determines whether guilt leads to growth or destruction.",
  },
  {
    title: "How guilt is presented",
    description:
      "Shakespeare uses supernatural hallucinations, Armitage uses fragmented structure and colloquial voice, Priestley uses the Inspector as external conscience, and Dickens uses ghostly visitations.",
  },
  {
    title: "Guilt and time",
    description:
      "In Remains, guilt traps the speaker in an eternal present. In A Christmas Carol, guilt spans past, present, and future. In Macbeth, guilt intensifies over the course of the play.",
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

export default function GuiltThemePage() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/themes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/80 hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Theme Explorer
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Guilt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            How writers present guilt, remorse, and moral responsibility across
            your GCSE set texts. Includes key quotes, analysis, and comparison
            ideas.
          </p>
        </div>
      </section>

      {/* Texts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Guilt across texts</h2>
        <p className="mt-2 text-muted-foreground">
          Each text presents guilt differently -- as psychological torment,
          social critique, or a catalyst for change.
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
          <h2 className="text-2xl font-bold text-foreground">
            Comparison ideas
          </h2>
          <p className="mt-2 text-muted-foreground">
            Use these as starting points for thematic comparison paragraphs on guilt.
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
            { label: "Social Responsibility", href: "/resources/themes/social-responsibility" },
            { label: "Conflict", href: "/resources/themes/conflict" },
            { label: "Love", href: "/resources/themes/love" },
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

    </>
  );
}
