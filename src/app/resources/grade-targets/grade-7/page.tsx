import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/grade-targets/grade-7' },
  title: "Getting a Grade 7 | Grade Targets | The English Hub",
  description:
    "What separates a Grade 7 from a 5 or 6 in GCSE English. Advanced skills, example responses, and detailed advice for pushing from Grade 6 to Grade 7 in English Language and Literature.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const KEY_DIFFERENCES = [
  {
    area: "Analysis depth",
    grade56: "Identifies techniques and explains what they show",
    grade7: "Explores why the writer made specific choices and examines multiple possible effects on the reader",
  },
  {
    area: "Quotation use",
    grade56: "Selects relevant quotations and comments on them",
    grade7: "Selects precise, often single-word quotations and analyses them in forensic detail, embedding them fluently",
  },
  {
    area: "Vocabulary",
    grade56: "Uses appropriate analytical vocabulary (suggests, implies, shows)",
    grade7: "Uses ambitious, precise vocabulary that demonstrates conceptual thinking (subverts, undermines, encapsulates, epitomises)",
  },
  {
    area: "Structure awareness",
    grade56: "Comments on structural features (short paragraph, shift in focus)",
    grade7: "Analyses how structural choices shape the reader's experience and contribute to meaning across the whole text",
  },
  {
    area: "Context",
    grade56: "Mentions relevant historical or social context",
    grade7: "Integrates context into analysis, showing how it shapes the writer's intentions and the reader's interpretation",
  },
  {
    area: "Creative writing",
    grade56: "Uses a range of techniques with a clear structure",
    grade7: "Writes with a distinctive voice, ambitious vocabulary, varied and deliberate sentence structures, and compelling imagery",
  },
];

const ADVANCED_SKILLS = [
  {
    title: "Exploring alternative interpretations",
    description:
      "Grade 7 students don't just offer one reading of a text. They consider different ways a word, phrase, or scene could be interpreted. Use phrases like 'Alternatively, this could suggest...' or 'A contemporary audience might read this as...' to show sophisticated thinking.",
    example:
      "The ghost in 'A Christmas Carol' could represent Marley's genuine remorse, but it might also be read as a projection of Scrooge's own suppressed guilt -- Dickens perhaps suggesting that our conscience will find a way to speak, even if we try to silence it.",
  },
  {
    title: "Zooming in on individual words",
    description:
      "The best Grade 7 analysis takes a single word and unpacks its connotations, associations, and effects in detail. This is sometimes called 'word-level analysis' or 'micro-analysis.' One word, analysed deeply, is worth more than a paragraph of surface-level comments.",
    example:
      "The verb 'devoured' is particularly striking. Unlike 'ate' or 'consumed,' 'devoured' carries connotations of animalistic hunger and loss of control. It suggests the character has been reduced to something primal, stripping away the civilised facade they have maintained throughout the text.",
  },
  {
    title: "Commenting on the writer's craft",
    description:
      "Move beyond 'the writer uses...' to discuss why the writer made specific choices. What alternatives did they have? Why this word and not another? How does this technique serve the overall purpose of the text?",
    example:
      "Shakespeare's decision to place the 'Tomorrow and tomorrow' soliloquy after Lady Macbeth's death is crucial. A lesser playwright might have shown Macbeth's grief directly, but Shakespeare instead gives us nihilistic despair -- suggesting that Macbeth has moved beyond grief into a void where life itself has lost all meaning.",
  },
  {
    title: "Linking across the whole text",
    description:
      "Grade 7 responses demonstrate awareness of the whole text, not just the extract. Reference how themes develop, how characters change, and how the writer builds or subverts patterns across the text.",
    example:
      "This moment of vulnerability contrasts sharply with the Inspector's authoritative entrance in Act One, where his 'impression of massiveness' dominated the stage. Priestley charts a deliberate arc from power to fragility, mirroring the Birlings' own journey from complacency to (in Sheila's case) genuine moral awakening.",
  },
  {
    title: "Sophisticated sentence structures in writing",
    description:
      "Grade 7 creative and transactional writing uses sentence structures deliberately for effect: fragments for impact, long flowing sentences for description, rhetorical questions for engagement, tricolons for emphasis. The variety feels natural, not forced.",
    example:
      "The corridor stretched ahead. Endless. Suffocating. Each door identical to the last, each handle cold beneath trembling fingers, each room revealing nothing but the hollow echo of absence.",
  },
  {
    title: "Evaluative and critical vocabulary",
    description:
      "Build a repertoire of evaluative language that goes beyond 'effective' and 'powerful.' Words like 'compelling,' 'nuanced,' 'subversive,' 'poignant,' 'insidious,' 'visceral' demonstrate Grade 7 thinking.",
    example:
      "Shelley's portrayal of the creature is deliberately poignant; the reader's sympathy is carefully cultivated through the creature's eloquent narration, which subverts the monstrous exterior and forces us to question who the real 'monster' of the novel truly is.",
  },
];

const EXAMPLE_RESPONSES = [
  {
    type: "Language Analysis",
    question: "How does the writer use language to present a sense of unease?",
    extract:
      "\"The house watched them from the hill, its dark windows like the eyes of something patient. The path up to it was overgrown, the gate rusted half-open as if someone had left in a hurry and never come back.\"",
    response:
      "The writer immediately establishes unease through the personification of the house, which \"watched them,\" positioning it not as an inanimate building but as a conscious, observing presence. The simile \"like the eyes of something patient\" is particularly unsettling because \"something\" -- rather than \"someone\" -- implies a non-human intelligence, while \"patient\" suggests this entity has been waiting, perhaps deliberately, for the characters' arrival. This transforms the house from a setting into an implicit antagonist.\n\nThe detail of the path being \"overgrown\" and the gate \"rusted half-open\" creates a sense of abandonment, but it is the phrase \"as if someone had left in a hurry\" that introduces genuine menace. The writer leaves the reason for this departure unanswered, exploiting the reader's imagination -- what could have caused someone to flee so urgently? The final clause, \"and never come back,\" is devastating in its simplicity: the absence of return implies that whatever drove the previous occupant away was permanent and perhaps fatal. The writer's restraint here is key; by refusing to explain, they make the threat feel boundless.",
    annotation:
      "This is a strong Grade 7 response. It goes beyond identifying techniques to explore why specific word choices are effective ('something' vs 'someone'). It analyses the effect of what is not said (the unanswered question of why someone left). It uses ambitious analytical vocabulary ('implicit antagonist,' 'devastating in its simplicity'). The response also comments on the writer's craft ('the writer's restraint here is key').",
  },
  {
    type: "Creative Writing",
    question: "Write a description suggested by the image of an old library. (Opening)",
    response:
      "Nobody came here anymore. That much was obvious from the dust -- not the thin film that settles overnight, but the kind that takes years to accumulate, soft and grey as ash from a fire long since extinguished.\n\nThe shelves rose from floor to ceiling, dark oak warped by decades of damp, their contents sagging like tired soldiers at the end of a march. Books leaned into each other for support, their spines cracked and faded, titles rendered illegible by time's patient erasure. A copy of something -- Dickens, perhaps, or Hardy -- lay splayed open on a reading desk, its pages yellowed to the colour of old teeth, the words still sharp and black against decay.\n\nLight entered reluctantly through a single window, thick glass clouded by neglect, casting everything in a sepia wash that made the present feel like the past. Somewhere in the stacks, something shifted. The soft, deliberate sound of a page turning -- though no hand had touched a book in this place for years.",
    annotation:
      "This demonstrates Grade 7 writing through its distinctive voice, ambitious imagery ('soft and grey as ash from a fire long since extinguished'), and deliberate structural choices. The final line creates genuine unease through understatement. The vocabulary is precise and varied ('rendered illegible,' 'patient erasure,' 'splayed'). Sentences are varied in length and structure for effect, including the powerful fragment at the opening.",
  },
  {
    type: "Literature Essay",
    question: "How does Priestley present ideas about responsibility in An Inspector Calls?",
    response:
      "Priestley uses the character of the Inspector as a dramatic device to systematically dismantle the Birlings' refusal to accept responsibility for Eva Smith's death. The Inspector's assertion that \"we are members of one body\" articulates the play's central thesis: that individual actions have collective consequences. The metaphor of the \"body\" is significant -- it implies organic interconnection, suggesting that harming one person damages the entire social organism. For Priestley's 1945 audience, this resonated powerfully with the post-war spirit of collective responsibility that would lead to the creation of the welfare state.\n\nHowever, Priestley is careful to show that accepting responsibility is not straightforward. Sheila's journey from a girl who used her social privilege to have a shop worker dismissed (\"I was in a furious temper\") to someone who recognises her culpability (\"I know I'm to blame -- and I'm desperately sorry\") represents Priestley's hope for the younger generation. The shift from the self-centred \"I was\" to the outward-facing \"I'm to blame\" marks a crucial moral development. Yet even Sheila's transformation is complicated; her contrition is genuine, but it cannot undo the harm already done. Priestley perhaps suggests that responsibility is not just about feeling sorry but about changing the structures that allow such exploitation to occur.\n\nMr Birling, by contrast, represents the dangerous abdication of responsibility that Priestley is warning against. His capitalist mantra -- \"a man has to look after himself and his own\" -- directly contradicts the Inspector's collectivist message. The dramatic irony of Birling's confident predictions (that the Titanic is \"unsinkable\" and that war is impossible) undermines his authority from the outset, ensuring the audience distrusts his philosophy before the Inspector even arrives. Priestley structures the play so that Birling's worldview is discredited before it is challenged, making the Inspector's moral argument feel inevitable rather than imposed.",
    annotation:
      "This is a convincing Grade 7 Literature essay. It integrates context naturally (post-war audience, welfare state) rather than bolting it on. The analysis of language is detailed ('the shift from self-centred \"I was\" to outward-facing \"I'm to blame\"'). It engages with Priestley's craft as a playwright (dramatic irony, structural choices). It considers complexity ('even Sheila's transformation is complicated'). The response demonstrates conceptual thinking throughout.",
  },
];

const PUSHING_FROM_6 = [
  {
    step: 1,
    title: "Develop your analytical vocabulary",
    description:
      "Replace generic words with precise ones. Instead of 'effective,' say 'compelling,' 'visceral,' 'understated,' or 'subversive.' Instead of 'shows,' try 'encapsulates,' 'epitomises,' 'exposes,' or 'crystallises.' Keep a vocabulary journal and practise using new words in your essays.",
  },
  {
    step: 2,
    title: "Practise micro-analysis",
    description:
      "Take a single quotation and spend 5 minutes writing about just one or two words from it. What are the connotations? What alternative words could the writer have used? Why this specific choice? This depth of analysis is what separates Grade 6 from Grade 7.",
  },
  {
    step: 3,
    title: "Always offer a second interpretation",
    description:
      "After your main point, add an alternative reading. This shows examiners you understand that texts are complex and open to multiple interpretations. Use connectives like 'Alternatively,' 'Conversely,' 'However, it could also be argued that...'",
  },
  {
    step: 4,
    title: "Integrate context, don't bolt it on",
    description:
      "Don't write a separate paragraph about context. Weave it into your analysis: 'Dickens, writing in a period when the Poor Law forced the destitute into workhouses, uses Scrooge to embody the callous indifference of the Victorian middle class.'",
  },
  {
    step: 5,
    title: "Read widely and steal techniques",
    description:
      "Read high-quality fiction, journalism, and essays. When you find a sentence that impresses you, analyse why it works and try to replicate the technique in your own writing. Grade 7 writers read like writers.",
  },
  {
    step: 6,
    title: "Revise with mark schemes, not just notes",
    description:
      "Read the Grade 7 descriptors for every paper you sit. Words like 'perceptive,' 'detailed,' 'judicious,' and 'compelling' tell you exactly what examiners want. Write with these descriptors in mind.",
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

export default function Grade7Page() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/grade-targets"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Grade Targets
          </Link>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
              7
            </span>
            <div className="text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Getting a Grade 7
              </h1>
              <p className="text-sm font-medium text-white/80 uppercase tracking-wide">
                Distinction
              </p>
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Grade 7 is where competent becomes impressive. It requires
            perceptive analysis, ambitious writing, and the ability to think
            beyond the obvious.
          </p>
        </div>
      </section>

      {/* What makes Grade 7 different */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          What makes Grade 7 different from 5/6?
        </h2>
        <p className="mt-2 text-muted-foreground">
          The jump from 5/6 to 7 is not about knowing more -- it is about
          thinking more deeply and writing more precisely.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-border px-4 py-3 text-left text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Area
                </th>
                <th className="border-b-2 border-border px-4 py-3 text-left text-sm font-semibold text-[#27AE60] uppercase tracking-wide">
                  Grade 5/6
                </th>
                <th className="border-b-2 border-border px-4 py-3 text-left text-sm font-semibold text-primary uppercase tracking-wide">
                  Grade 7
                </th>
              </tr>
            </thead>
            <tbody>
              {KEY_DIFFERENCES.map((row, idx) => (
                <tr
                  key={row.area}
                  className={idx % 2 === 0 ? "bg-muted" : "bg-card"}
                >
                  <td className="border-b border-border px-4 py-3 text-sm font-semibold text-foreground">
                    {row.area}
                  </td>
                  <td className="border-b border-border px-4 py-3 text-sm text-muted-foreground">
                    {row.grade56}
                  </td>
                  <td className="border-b border-border px-4 py-3 text-sm text-muted-foreground font-medium">
                    {row.grade7}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Advanced skills */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Advanced skills for Grade 7
          </h2>
          <p className="mt-2 text-muted-foreground">
            These are the skills that examiners associate with top-band
            responses. Master them and you will consistently hit Grade 7.
          </p>

          <div className="mt-8 space-y-6">
            {ADVANCED_SKILLS.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
                <div className="mt-4 rounded-lg bg-primary/5 border border-primary/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example
                  </p>
                  <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
                    {skill.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example responses */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Example Grade 7 Responses
        </h2>
        <p className="mt-2 text-muted-foreground">
          Study these carefully. Notice the depth of analysis, the precision of
          vocabulary, and how context is woven into the argument.
        </p>

        <div className="mt-8 space-y-8">
          {EXAMPLE_RESPONSES.map((example) => (
            <div
              key={example.type}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-md"
            >
              <div className="border-b border-border bg-muted px-6 py-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {example.type}
                </span>
                <p className="mt-2 font-semibold text-foreground">
                  {example.question}
                </p>
                {example.extract && (
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    {example.extract}
                  </p>
                )}
              </div>

              <div className="px-6 py-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Student Response
                </h4>
                <div className="mt-2 rounded-lg bg-muted p-4">
                  {example.response.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="mt-3 first:mt-0 text-sm leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-primary/20 bg-primary/5 px-6 py-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Examiner Comment
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {example.annotation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to push from 6 to 7 */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            How to push from Grade 6 to Grade 7
          </h2>
          <p className="mt-2 text-muted-foreground">
            Six strategies to elevate your work from competent to compelling.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PUSHING_FROM_6.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-primary/20 bg-card p-6 shadow-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link
              href="/resources/grade-targets/grade-5"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Grade 5 Guide
            </Link>
            <Link
              href="/resources/grade-targets/grade-9"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#8E44AD] px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[#6C3483]"
            >
              Aiming for Grade 9? <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
