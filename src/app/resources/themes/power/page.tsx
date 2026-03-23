import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Power Theme Across Texts | GCSE English Literature",
  description:
    "Explore the theme of power across GCSE set texts: Macbeth, An Inspector Calls, Animal Farm, Ozymandias, and My Last Duchess. Key quotes, analysis, and comparison essay planning.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const TEXTS = [
  {
    title: "Macbeth",
    subtitle: "Power and Ambition",
    author: "William Shakespeare",
    colour: "border-[#C0392B]",
    tagColour: "bg-[#C0392B]/10 text-[#C0392B]",
    analysis: [
      "Macbeth's unchecked ambition transforms him from a loyal thane into a tyrannical king, illustrating how the pursuit of power corrupts moral judgment.",
      "Lady Macbeth's initial dominance over her husband subverts Jacobean gender roles, but her eventual madness shows that illegitimate power is unsustainable.",
      "The play's structure mirrors Macbeth's rise and fall -- the turning point at the banquet scene marks the moment power begins to destroy him.",
    ],
    quotes: [
      {
        text: "\"I have no spur to prick the sides of my intent, but only vaulting ambition\"",
        analysis: "The metaphor of horse-riding suggests ambition without moral justification -- Macbeth knows his desire for power lacks legitimate cause.",
      },
      {
        text: "\"Will all great Neptune's ocean wash this blood clean from my hand?\"",
        analysis: "Hyperbole reveals that seizing power through murder leaves an indelible stain on the conscience.",
      },
      {
        text: "\"Out, damned spot! Out, I say!\"",
        analysis: "Lady Macbeth's sleepwalking shows power gained through violence leads to psychological destruction.",
      },
    ],
  },
  {
    title: "An Inspector Calls",
    subtitle: "Power and Class",
    author: "J.B. Priestley",
    colour: "border-[#2E86C1]",
    tagColour: "bg-[#2E86C1]/10 text-[#2E86C1]",
    analysis: [
      "Birling represents the abuse of capitalist power -- he fires Eva Smith for requesting a modest pay rise, prioritising profit over humanity.",
      "Priestley uses the Inspector as a mouthpiece for socialist values, wielding moral authority to challenge the Birlings' economic and social power.",
      "Sheila's transformation suggests that acknowledging misused power is the first step toward social change -- a message aimed directly at the 1945 audience.",
    ],
    quotes: [
      {
        text: "\"If you don't come down sharply on some of these people, they'd soon be asking for the earth\"",
        analysis: "Birling's dismissive tone reveals how the powerful dehumanise workers, reducing them to a collective threat rather than individuals.",
      },
      {
        text: "\"We are members of one body. We are responsible for each other\"",
        analysis: "The Inspector's collective pronoun challenges the individualism of the powerful, insisting on shared accountability.",
      },
      {
        text: "\"But these girls aren't cheap labour -- they're people\"",
        analysis: "Sheila's awakening demonstrates that recognising the humanity of the powerless is essential to moral growth.",
      },
    ],
  },
  {
    title: "Animal Farm",
    subtitle: "Power and Corruption",
    author: "George Orwell",
    colour: "border-[#27AE60]",
    tagColour: "bg-[#27AE60]/10 text-[#27AE60]",
    analysis: [
      "Orwell uses the allegorical farm to show how revolutionary ideals are corrupted when power is concentrated in the hands of the few.",
      "Napoleon's gradual accumulation of power mirrors Stalin's rise -- from collective leadership to totalitarian control through propaganda, fear, and rewritten history.",
      "The final scene, where pigs become indistinguishable from humans, suggests that power itself corrupts, regardless of the ideology behind it.",
    ],
    quotes: [
      {
        text: "\"All animals are equal, but some animals are more equal than others\"",
        analysis: "The paradox exposes how those in power manipulate language to justify inequality while maintaining the illusion of fairness.",
      },
      {
        text: "\"Napoleon is always right\"",
        analysis: "Boxer's blind loyalty shows how the powerful exploit the trust of the uneducated to maintain control.",
      },
      {
        text: "\"The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which\"",
        analysis: "The cyclical ending suggests that revolutions against power often recreate the very tyranny they sought to overthrow.",
      },
    ],
  },
  {
    title: "Ozymandias",
    subtitle: "Power and Time",
    author: "Percy Bysshe Shelley",
    colour: "border-[#D35400]",
    tagColour: "bg-[#D35400]/10 text-[#D35400]",
    analysis: [
      "Shelley presents human power as ultimately futile in the face of time -- Ozymandias' empire has been reduced to rubble in an empty desert.",
      "The irony of the inscription juxtaposed with the ruined statue is the poem's central device, mocking the arrogance of absolute rulers.",
      "The sonnet form itself is subverted -- the irregular rhyme scheme mirrors the decay of Ozymandias' ordered empire.",
    ],
    quotes: [
      {
        text: "\"Look on my Works, ye Mighty, and despair!\"",
        analysis: "Dramatic irony: the boastful command now invites despair not at Ozymandias' greatness, but at the inevitable destruction of all human power.",
      },
      {
        text: "\"Nothing beside remains\"",
        analysis: "The blunt caesura emphasises total obliteration -- all traces of power have been erased by time.",
      },
      {
        text: "\"The lone and level sands stretch far away\"",
        analysis: "Sibilance and the vast imagery of the desert underscore nature's indifference to human authority.",
      },
    ],
  },
  {
    title: "My Last Duchess",
    subtitle: "Power and Control",
    author: "Robert Browning",
    colour: "border-[#8E44AD]",
    tagColour: "bg-[#8E44AD]/10 text-[#8E44AD]",
    analysis: [
      "The Duke's dramatic monologue reveals his obsessive need to control -- he could not tolerate his wife's democratic affection for others.",
      "Browning uses enjambment to suggest the Duke's speech is barely controlled, hinting at the violent reality beneath his polished exterior.",
      "The painting becomes the ultimate symbol of male ownership: the Duchess is finally perfectly controlled, silent, and available only at his command.",
    ],
    quotes: [
      {
        text: "\"I gave commands; then all smiles stopped together\"",
        analysis: "The chilling euphemism implies murder, revealing the extreme lengths to which the powerful will go to maintain control.",
      },
      {
        text: "\"She had a heart -- how shall I say? -- too soon made glad\"",
        analysis: "The Duke frames his wife's kindness as a flaw, exposing how power distorts perception of generosity.",
      },
      {
        text: "\"since none puts by the curtain I have drawn for you, but I\"",
        analysis: "The curtain symbolises the Duke's absolute control -- even in death, the Duchess exists only at his pleasure.",
      },
    ],
  },
];

const COMPARISON_POINTS = [
  {
    title: "Legitimate vs. illegitimate power",
    description:
      "Compare Duncan's divinely ordained kingship with Macbeth's usurped throne, or Old Major's democratic ideals with Napoleon's dictatorship.",
  },
  {
    title: "Power and gender",
    description:
      "Lady Macbeth and the Duchess are both controlled by patriarchal power structures, but Lady Macbeth initially subverts them while the Duchess is silenced entirely.",
  },
  {
    title: "The permanence of power",
    description:
      "Ozymandias and Macbeth both suggest power is temporary, while the Inspector's message implies that moral authority endures beyond individual lifetimes.",
  },
  {
    title: "Power and language",
    description:
      "Squealer in Animal Farm and Birling in An Inspector Calls both use language to maintain power -- through propaganda and dismissive rhetoric respectively.",
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

export default function PowerThemePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/themes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E86C1]/80 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Theme Explorer
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Power
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            How writers present power, ambition, authority, and control across
            your GCSE set texts. Includes key quotes, analysis, and comparison
            essay planning.
          </p>
        </div>
      </section>

      {/* Texts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Power across texts</h2>
        <p className="mt-2 text-gray-600">
          Each text explores power from a different angle. Click into any section
          for key quotes and analysis you can use in your essays.
        </p>

        <div className="mt-8 space-y-10">
          {TEXTS.map((text) => (
            <article
              key={text.title}
              className={`rounded-2xl border-2 ${text.colour} bg-white p-6 shadow-sm sm:p-8`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {text.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {text.subtitle} &middot; {text.author}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${text.tagColour}`}>
                  {text.quotes.length} key quotes
                </span>
              </div>

              {/* Analysis points */}
              <ul className="mt-5 space-y-3">
                {text.analysis.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1A5276]/10 text-xs font-bold text-[#1A5276]">
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Key quotes */}
              <div className="mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Key Quotes
                </h4>
                <div className="mt-3 space-y-4">
                  {text.quotes.map((q, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <p className="font-medium text-gray-900">{q.text}</p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
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

      {/* Comparison essay planning */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Comparison essay planning
          </h2>
          <p className="mt-2 text-gray-600">
            Use these comparison points as paragraph starters for a thematic
            comparison essay on power.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {COMPARISON_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other themes */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Explore other themes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Guilt", href: "/resources/themes/guilt" },
            { label: "Social Responsibility", href: "/resources/themes/social-responsibility" },
            { label: "Conflict", href: "/resources/themes/conflict" },
            { label: "Love", href: "/resources/themes/love" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#2E86C1]/40"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                {link.label}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1] group-hover:text-[#1A5276] transition-colors">
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
