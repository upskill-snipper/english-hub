import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/themes/social-responsibility' },
  title: "Social Responsibility Theme Across Texts | GCSE English Literature",
  description:
    "Explore the theme of social responsibility across GCSE set texts: An Inspector Calls, A Christmas Carol, and London by William Blake. Key quotes, analysis, and comparison ideas.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const TEXTS = [
  {
    title: "An Inspector Calls",
    subtitle: "Social Responsibility and Socialism",
    author: "J.B. Priestley",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    analysis: [
      "Priestley wrote the play in 1945 but set it in 1912, allowing the audience to see how the Birlings' refusal to accept social responsibility contributed to two World Wars.",
      "The Inspector embodies Priestley's socialist message: that we cannot live as isolated individuals, and that the comfortable classes have a duty to those they exploit.",
      "The cyclical ending -- the phone call announcing a real inspector -- suggests that society will keep being confronted with its failures until it learns the lesson of collective responsibility.",
    ],
    quotes: [
      {
        text: "\"We are members of one body. We are responsible for each other\"",
        analysis: "The organic metaphor of 'one body' presents society as interconnected -- harm to one part damages the whole. This is Priestley's central thesis.",
      },
      {
        text: "\"A man has to mind his own business and look after himself and his own\"",
        analysis: "Birling's individualist philosophy is positioned early in the play so the audience can watch it be systematically dismantled.",
      },
      {
        text: "\"If men will not learn that lesson, then they will be taught it in fire and blood and anguish\"",
        analysis: "The prophetic warning gains dramatic irony from the 1912/1945 time gap -- the audience knows the 'fire and blood' of two World Wars proved the Inspector right.",
      },
    ],
  },
  {
    title: "A Christmas Carol",
    subtitle: "Social Responsibility and Victorian Poverty",
    author: "Charles Dickens",
    colour: "border-[#27AE60]",
    tagColour: "bg-[#27AE60]/10 text-[#27AE60]",
    analysis: [
      "Dickens wrote the novella as a direct response to the conditions exposed in government reports on child labour and urban poverty in the 1840s.",
      "Scrooge's transformation from miserly isolation to generous community member embodies Dickens' argument that the wealthy have a moral duty to help the poor.",
      "The allegorical children Ignorance and Want represent the consequences of social neglect -- Dickens warns that society's failure to care for the vulnerable will ultimately destroy it.",
    ],
    quotes: [
      {
        text: "\"Are there no prisons? Are there no workhouses?\"",
        analysis: "Scrooge echoes the callous rhetoric of the Victorian establishment. Dickens forces his middle-class readers to hear their own indifference spoken aloud.",
      },
      {
        text: "\"This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy\"",
        analysis: "The Ghost of Christmas Present warns that ignorance of poverty is more dangerous than poverty itself -- it prevents the compassion needed for social change.",
      },
      {
        text: "\"Mankind was my business. The common welfare was my business\"",
        analysis: "Marley's ghost redefines 'business' from commercial profit to social obligation, directly challenging the capitalist values of Dickens' audience.",
      },
    ],
  },
  {
    title: "London",
    subtitle: "Social Responsibility and Systemic Oppression",
    author: "William Blake",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    analysis: [
      "Blake presents London as a city where institutions -- the Church, the monarchy, and the state -- have systematically failed their social responsibilities.",
      "The poem's relentless repetition of 'every' and 'marks' creates a sense of universal suffering, implying that no one in this society escapes the consequences of institutional neglect.",
      "Blake writes as a radical outsider, using poetry to hold the powerful accountable for the misery they cause through inaction and exploitation.",
    ],
    quotes: [
      {
        text: "\"I wander thro' each charter'd street, near where the charter'd Thames does flow\"",
        analysis: "The repetition of 'charter'd' suggests everything -- even the river -- has been commodified and controlled by the powerful, stripping ordinary people of freedom.",
      },
      {
        text: "\"The mind-forg'd manacles I hear\"",
        analysis: "The metaphor suggests oppression is both external (institutional) and internal (psychological). Society's failures have imprisoned people's very thoughts.",
      },
      {
        text: "\"How the chimney-sweeper's cry / Every black'ning church appalls\"",
        analysis: "The Church is literally and metaphorically 'blackened' by its failure to protect child labourers -- a direct accusation of institutional hypocrisy.",
      },
    ],
  },
];

const COMPARISON_IDEAS = [
  {
    title: "Institutional failure",
    description:
      "All three texts criticise institutions for failing the vulnerable: Priestley targets capitalism, Dickens targets the Poor Laws, and Blake targets the Church and monarchy.",
  },
  {
    title: "The role of the individual",
    description:
      "Scrooge's personal transformation suggests individual change can make a difference. The Inspector argues for collective change. Blake implies the system itself must be overthrown.",
  },
  {
    title: "Writers as social commentators",
    description:
      "All three writers use literature as a vehicle for social criticism -- compare how each uses genre (drama, prose, poetry) to deliver their message about responsibility.",
  },
  {
    title: "Hope vs. despair",
    description:
      "A Christmas Carol ends optimistically with Scrooge's redemption. An Inspector Calls offers conditional hope through the younger generation. London offers no resolution, only relentless critique.",
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

export default function SocialResponsibilityThemePage() {
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
            Social Responsibility
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            How writers challenge their audiences to consider their duty to
            society. Includes key quotes, analysis, and comparison ideas.
          </p>
        </div>
      </section>

      {/* Texts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Social responsibility across texts
        </h2>
        <p className="mt-2 text-muted-foreground">
          Three writers from different centuries, all asking the same question:
          what do we owe each other?
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
            social responsibility.
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

      <ExamBoardDisclaimer />
    </>
  );
}
