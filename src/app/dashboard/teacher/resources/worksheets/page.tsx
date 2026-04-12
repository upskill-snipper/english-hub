import Link from "next/link";

export const metadata = { title: "Printable Worksheets — Teacher Resources" };

/* ─── Example 3: Printable Quote Analysis Worksheet ─────────────── */

const QUOTES = [
  {
    character: "Mr Birling",
    quote: "a man has to mind his own business and look after himself and his own",
    act: "Act 1",
    technique: "Rule of three / declarative statement",
    effect: "Establishes Mr Birling's capitalist philosophy. The repetition of possessive pronouns ('his own') reveals his selfishness. Priestley positions this speech before the Inspector's arrival to create dramatic irony — the audience knows his worldview is about to be challenged.",
    theme: "Responsibility / Capitalism vs Socialism",
  },
  {
    character: "Inspector Goole",
    quote: "We are members of one body. We are responsible for each other.",
    act: "Act 3",
    technique: "Short declarative sentences / tricolon / collective pronoun 'we'",
    effect: "The Inspector's final speech directly contradicts Mr Birling's opening monologue. The shift from 'I' to 'we' mirrors the socialist message. The tricolon builds rhetorical power, echoing political oratory. 'Members of one body' has Christian undertones, giving moral authority to his socialist argument.",
    theme: "Collective responsibility / Socialism",
  },
  {
    character: "Sheila Birling",
    quote: "But these girls aren't cheap labour — they're people.",
    act: "Act 1",
    technique: "Antithesis / em dash for emphasis",
    effect: "Sheila's recognition of Eva's humanity contrasts sharply with her parents' dehumanising language. The antithesis between 'cheap labour' and 'people' highlights the class divide. This moment marks the beginning of Sheila's moral awakening — she is the first Birling to accept responsibility.",
    theme: "Class / Social responsibility / Gender",
  },
  {
    character: "Mrs Birling",
    quote: "Girls of that class—",
    act: "Act 2",
    technique: "Interrupted sentence / demonstrative pronoun 'that'",
    effect: "The dismissive demonstrative 'that class' reveals Mrs Birling's deep-rooted snobbery. The interrupted sentence (cut off by the Inspector) symbolises how the upper class's prejudiced views are being challenged. Priestley denies Mrs Birling the chance to complete her sentence, structurally silencing her classism.",
    theme: "Class prejudice / Gender",
  },
  {
    character: "Eric Birling",
    quote: "I was in that state when a chap easily turns nasty",
    act: "Act 3",
    technique: "Euphemism / third person distancing",
    effect: "Eric's use of 'that state' as a euphemism for drunkenness shows his inability to take direct ownership. The shift to third person ('a chap') distances himself from his actions. However, unlike his parents, Eric does ultimately accept guilt, suggesting the younger generation is capable of change.",
    theme: "Responsibility / Age & Generation",
  },
  {
    character: "Mr Birling",
    quote: "The Titanic — she sails next week... unsinkable, absolutely unsinkable.",
    act: "Act 1",
    technique: "Dramatic irony / superlative / repetition",
    effect: "This is Priestley's most famous use of dramatic irony. The 1945 audience knew the Titanic sank on its maiden voyage, making Birling look foolish and unreliable. The repetition of 'unsinkable' emphasises his arrogant certainty, undermining everything he says afterwards. It signals to the audience that his capitalist philosophy is equally doomed.",
    theme: "Dramatic irony / Arrogance",
  },
];

export default function WorksheetsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <Link
          href="/dashboard/teacher/resources"
          className="text-sm text-accent hover:text-primary mb-2 inline-block"
        >
          &larr; Back to Resources
        </Link>
        <h1 className="text-2xl font-bold text-primary">
          Quote Analysis Worksheet: An Inspector Calls
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pre-filled example worksheet with key quotes, techniques, and analysis.
          Use as a model answer or teacher reference. Print-friendly layout.
        </p>
      </div>

      {/* Instructions Box */}
      <div className="rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-4">
        <h2 className="font-semibold text-primary text-sm mb-2">How to Use This Worksheet</h2>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• <strong>As a model:</strong> Show students what detailed quote analysis looks like at Level 5-6.</li>
          <li>• <strong>As a scaffold:</strong> Give students the quotes and techniques columns, ask them to complete the effect and theme columns.</li>
          <li>• <strong>As revision:</strong> Students can use this as a reference when planning exam responses.</li>
          <li>• <strong>Differentiated:</strong> Lower-ability students complete character + quote only; higher-ability attempt all columns independently before comparing.</li>
        </ul>
      </div>

      {/* Quote Analysis Cards */}
      <div className="space-y-4">
        {QUOTES.map((q, i) => (
          <div key={i} className="card print:break-inside-avoid">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">{q.character}</p>
                <p className="text-xs text-muted-foreground">Act {q.act.replace('Act ', '')}</p>
              </div>
              <span className="ml-auto inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {q.theme}
              </span>
            </div>

            <blockquote className="border-l-4 border-primary/30 pl-4 py-2 mb-3 bg-background rounded-r">
              <p className="text-sm italic text-foreground">&ldquo;{q.quote}&rdquo;</p>
            </blockquote>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded bg-blue-500/10 p-3">
                <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">Technique(s)</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">{q.technique}</p>
              </div>
              <div className="rounded bg-emerald-500/10 p-3">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-1">Effect & Analysis</p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">{q.effect}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Student Task */}
      <div className="card border-2 border-accent/30">
        <h2 className="font-semibold text-foreground mb-2">Student Extension Task</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Using the model analyses above, complete the same process for these additional quotes:
        </p>
        <ol className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="font-bold text-primary">1.</span>
            Gerald: &ldquo;Everything&apos;s all right now, Sheila. What about this ring?&rdquo; (Act 3)
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-primary">2.</span>
            Sheila: &ldquo;You mustn&apos;t try to build up a kind of wall between us and that girl.&rdquo; (Act 2)
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-primary">3.</span>
            Inspector: &ldquo;Public men, Mr Birling, have responsibilities as well as privileges.&rdquo; (Act 1)
          </li>
        </ol>
      </div>
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.
      </p>
    </div>
  );
}
