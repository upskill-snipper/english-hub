'use client'

import { useState } from 'react'

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-foreground">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

function QuoteCard({
  quote,
  speaker,
  analysis,
}: {
  quote: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
        &ldquo;{quote}&rdquo;
      </p>
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4 mb-3">
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10/30 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function CuriousIncidentPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            21st-Century Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            CIE / IGCSE
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Curious Incident of the Dog in the Night-Time &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Mark Haddon, 2003 (novel)</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your GCSE / IGCSE English Literature exam on Haddon&apos;s
          prize-winning first-person novel. Plot structure, character profiles, themes, key
          quotations with analysis, symbols, narrative form (the prime-numbered chapters), context,
          and exam-style essay questions with planning notes. <strong>Note:</strong> this guide is
          on the 2003 novel. Simon Stephens&apos;s stage adaptation (2012, National Theatre) makes
          some structural changes &mdash; details that come only from the play are flagged in
          context.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Key Quotations',
            'Symbols',
            'Context',
            'Narrative Form',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── PLOT SUMMARY */}
        <div id="plot-summary">
          <Section
            title="Plot Summary &mdash; The Structure of Christopher's Investigation"
            icon="📖"
            defaultOpen
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The novel is narrated by Christopher John Francis Boone, a fifteen-year-old boy
                living in Swindon with his father, Ed. Christopher tells us he is writing &ldquo;a
                murder mystery novel&rdquo; and presents the book itself as that novel. The chapters
                are numbered using only prime numbers (2, 3, 5, 7, 11, 13&hellip; up to 233) because
                Christopher likes prime numbers. The narrative divides naturally into three
                movements: the investigation in Swindon, the discovery of the letters, and the
                journey to London.
              </p>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  The dog Wellington and the start of the investigation
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At seven minutes past midnight, Christopher finds Mrs Shears&apos;s large black
                  poodle Wellington dead on her front lawn, killed with a garden fork. He hugs the
                  dog. When Mrs Shears comes out and screams, the police are called. A policeman
                  touches Christopher; Christopher hits him and is arrested. His father Ed collects
                  him from the police station. Inspired by his love of Sherlock Holmes, Christopher
                  decides to investigate Wellington&apos;s murder and to write a book about it. His
                  teacher Siobhan at his special school encourages him to write down what he is
                  doing and what he is feeling, which becomes the book itself.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The opening image: Christopher kneeling beside Wellington&apos;s body
                    </li>
                    <li>
                      &bull; Father&apos;s explicit forbidding: &ldquo;don&apos;t go around sticking
                      your nose into other people&apos;s business&rdquo;
                    </li>
                    <li>
                      &bull; Christopher&apos;s decision to investigate &mdash; and disobey &mdash;
                      in pursuit of truth
                    </li>
                    <li>
                      &bull; The book frames itself as a murder mystery in the Sherlock Holmes
                      tradition
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Door-to-door enquiries and Mrs Alexander
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher knocks on neighbours&apos; doors asking about Wellington. Most people
                  are unhelpful, but he befriends an elderly neighbour, Mrs Alexander. In a
                  conversation in the park, she inadvertently reveals that Christopher&apos;s mother
                  had had an affair with Mr Shears (Mrs Shears&apos;s estranged husband) before she
                  died. Christopher had previously been told by his father that his mother died of a
                  heart attack in hospital two years earlier. He records Mrs Alexander&apos;s
                  revelation but does not yet act on it. The chapters interleave the investigation
                  with Christopher&apos;s digressions on prime numbers, the solar system, the Monty
                  Hall problem, and his memory.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Christopher conquers his anxiety to speak to strangers</li>
                    <li>&bull; Mrs Alexander&apos;s slip lets the affair into the narrative</li>
                    <li>
                      &bull; The reader, ahead of Christopher, begins to question Ed&apos;s honesty
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  The discovery of the letters
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Father, angry that Christopher is still investigating, confiscates his book and
                  hides it. Christopher searches Ed&apos;s bedroom and finds the book inside a shirt
                  box in the wardrobe. Inside the same box he finds a stack of letters addressed to
                  him in his mother&apos;s handwriting, postmarked after the date Ed told him she
                  had died. Reading them, Christopher learns that his mother Judy did not die: she
                  left Ed and ran away to London with Mr Shears. The letters describe her new life
                  in Willesden and her continued love for Christopher. The shock makes Christopher
                  physically ill; he vomits and curls into a ball on the bed. When Ed comes home he
                  confesses everything.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The letters &mdash; written evidence overturning Ed&apos;s lie</li>
                    <li>&bull; Christopher&apos;s collapse: order has broken down</li>
                    <li>
                      &bull; Ed&apos;s confession: he killed Wellington in a row with Mrs Shears
                    </li>
                    <li>&bull; The mystery solved &mdash; but the family destroyed</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  The journey to London
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Knowing his father killed Wellington, Christopher reasons that Ed could murder him
                  too. He resolves to escape and find his mother. With his pet rat Toby in a box, he
                  navigates Swindon station, buys a ticket, and takes the train to Paddington. The
                  London chapters are the novel&apos;s most distressing: the noise, signs, and
                  crowds of the Underground overwhelm him, and he hides on a track ledge while a
                  train passes. He eventually reaches his mother&apos;s flat in Willesden. Judy and
                  Mr Shears are stunned. Mr Shears resents Christopher&apos;s presence; Judy decides
                  to leave him and return to Swindon with Christopher.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Christopher&apos;s solo journey &mdash; an extraordinary feat for him
                    </li>
                    <li>&bull; The Tube as sensory hell; Toby almost lost on the track</li>
                    <li>&bull; Reunion with mother &mdash; she returns with him to Swindon</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  The A-level Maths exam and the open ending
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Despite the upheaval, Christopher takes his A-level Maths exam, tutored by
                  Reverend Peters. He gets an A grade. The novel ends with Christopher resolving to
                  take A-level Further Maths and Physics, go to university, become a scientist,
                  &ldquo;and I know I can do this because I went to London on my own.&rdquo; An
                  appendix gives the full solution to question A7 from the paper (the proof of
                  Pythagoras&apos;s theorem). His parents are now living separately; his
                  relationship with Ed remains fragile. The novel does not provide a tidy emotional
                  resolution &mdash; Christopher&apos;s confidence is mathematical and behavioural
                  rather than relational.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Christopher gets his A in Maths &mdash; the order of numbers reasserted
                    </li>
                    <li>
                      &bull; Father gives him a golden retriever puppy, Sandy, as a peace offering
                    </li>
                    <li>&bull; Toby the rat dies of old age</li>
                    <li>&bull; The final assertion: &ldquo;I went to London on my own&rdquo;</li>
                    <li>
                      &bull; The Pythagoras proof appendix &mdash; mathematics as the book&apos;s
                      last word
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Character Profiles" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Christopher John Francis Boone"
                description="The fifteen-year-old narrator and protagonist. Christopher attends a special school in Swindon, has an extraordinary gift for mathematics and logic, and finds social and emotional life baffling. He hates being touched, loud noises, the colours yellow and brown, and metaphors; he loves prime numbers, lists, the colours red, the night sky, and his pet rat Toby. He narrates with literal-minded honesty, recording precisely what people say and do without inferring feelings. Haddon never names a diagnosis, but Christopher's narration conveys a sensory and cognitive world that many readers identify with autism spectrum profiles. His investigation of Wellington's death is, in effect, an investigation of his own family and of the limits of what logic can solve."
              />
              <CharacterCard
                name="Ed Boone (Father)"
                description="Christopher's father, a self-employed heating engineer, and Christopher's primary carer since his mother left. Ed is shown as patient, exhausted, and capable of explosive frustration. He has lied to Christopher for two years &mdash; telling him his mother died of a heart attack &mdash; out of what he sees as protection. He killed Wellington with a garden fork in a furious row with Mrs Shears, which Christopher cannot forgive. The scene where Ed confesses and asks Christopher to trust him is one of the novel's most painful: trust, like a number, cannot be partially true. By the end, Ed is trying to rebuild trust through small concrete actions, including the gift of a puppy."
              />
              <CharacterCard
                name="Judy Boone (Mother)"
                description="Christopher's mother, who in the timeline of the book has not died but left Ed for Mr Shears and moved to London. Her letters show a woman who loved her son but found herself unable to cope with his needs and unhappy in her marriage. Her honesty in the letters &mdash; admitting she shouted, lost her temper, and left &mdash; contrasts sharply with Ed's lie. She represents an imperfect but real maternal love, and her decision to leave Mr Shears and return to Swindon with Christopher costs her the relationship she escaped to. She is neither idealised nor villainised &mdash; one of Haddon's most adult portrayals."
              />
              <CharacterCard
                name="Siobhan"
                description="Christopher's teacher at his special school. Siobhan is Christopher's emotional translator: she suggests writing the book, advises him on what is and is not appropriate to include, and draws faces showing different feelings to help him recognise emotions. Christopher quotes her advice repeatedly in the narration (&ldquo;Siobhan said&hellip;&rdquo;), and she functions almost as a co-author and silent reader of the book within the book. She models how a neurotypical adult can support, rather than &ldquo;fix,&rdquo; a neurodivergent young person."
              />
              <CharacterCard
                name="Mrs Shears"
                description="The Boones' neighbour, owner of the murdered dog Wellington. Mrs Shears is separated from her husband, Roger Shears, who has run off with Judy. After Judy left, Mrs Shears spent time at the Boones' house cooking for Ed and Christopher, and Christopher believes Ed wanted her to be his new partner. Her refusal precipitates the row in which Ed kills Wellington. Her grief at finding her dog dead opens the novel."
              />
              <CharacterCard
                name="Mr Shears (Roger Shears)"
                description="Mrs Shears's estranged husband, who had an affair with Judy and ran away to London with her. We never see him until the London section, when Christopher arrives unannounced at his flat. Mr Shears is openly hostile to Christopher, complaining about the disruption his arrival causes. He is the only major character Christopher dislikes on a personal level. The breakdown of his relationship with Judy at the end of the novel is consequence rather than tragedy &mdash; Haddon presents him without sympathy."
              />
              <CharacterCard
                name="Mrs Alexander"
                description="An elderly neighbour Christopher interviews during his investigation. She is patient and friendly, twice trying to give him cake or a drink, and is the character through whose conversation Christopher first hears that his mother and Mr Shears had an affair. She represents the kindness of strangers and the way that &mdash; for Christopher &mdash; a single, careful adult can be a route into truths his family is hiding. She is not an antagonist; her revelation is accidental but pivotal."
              />
              <CharacterCard
                name="Toby"
                description="Christopher's pet rat, whom he carries with him on the journey to London in a box. Toby is one of the few living creatures Christopher trusts unreservedly, partly because animals do not lie and partly because he can predict Toby's behaviour. Toby almost dies on the Underground tracks when he escapes, and is rescued by Christopher in one of the book's tensest scenes. By the end of the novel, Toby has died of old age, marking the passage of time and the small private griefs that run alongside the bigger family story."
              />
              <CharacterCard
                name="Wellington"
                description="Mrs Shears's large black standard poodle, found dead with a garden fork through him on the lawn at the start of the novel. Wellington is the &ldquo;dog in the night-time&rdquo; of the title (echoing Sherlock Holmes's &ldquo;Silver Blaze&rdquo;). His murder is the mystery Christopher sets out to solve, but the solution is not a stranger or a thief: his killer is Christopher's own father, in a domestic argument. Wellington is the catalyst rather than the subject &mdash; he is what allows the much larger mystery of the family to come to light."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Truth and Lies"
                description="The novel turns on a single sustained lie: Ed has told Christopher for two years that his mother is dead. For Christopher, who relies on language being literal, a lie is a category violation &mdash; not just morally wrong but logically intolerable. He says he cannot tell lies because to lie you have to imagine a world that does not exist. The plot exposes how every adult around him has compromised with the truth: Mrs Alexander hides the affair; Mrs Shears does not say what she suspects; Ed actively manufactures a false reality. Haddon shows truth as fragile, partial, and adult, while Christopher's rigid honesty reveals what most of us politely conceal."
              />
              <ThemeCard
                title="Order vs Chaos / Logic vs Emotion"
                description="Christopher imposes order on a world that overwhelms him: prime numbers, lists, timetables, maths problems, the rule that a Good Day has four red cars in a row and a Black Day has four yellow cars. The novel's form &mdash; the prime-numbered chapters, the diagrams, the maths appendix &mdash; mirrors his mind. Against this is the emotional chaos of family breakdown, which logic cannot reduce to an algorithm. Haddon does not endorse one side over the other: Christopher's logic gets him to London but cannot mend his family, and his parents' emotional lives have produced disaster. The book holds order and chaos in tension."
              />
              <ThemeCard
                title="Family and Trust"
                description="The novel is, beneath the murder mystery, a study of a family in collapse. Trust, once broken, cannot be reasoned back into existence: Ed's confession does not restore Christopher's safety, and Judy's return does not undo her absence. Haddon shows trust as something built incrementally, in small concrete acts &mdash; Ed letting Christopher hold his hand by the fingertips, the gift of the puppy Sandy, walking the dog together. The novel rejects the idea that a family can be &ldquo;fixed&rdquo; in a single scene; it ends with provisional, fragile arrangements rather than a happy ending."
              />
              <ThemeCard
                title="Difference and Neurodiversity"
                description="The novel presents a narrator whose perception, reasoning and sensory experience differ from the neurotypical norm. Haddon is widely understood to depict an autism spectrum profile, but he has been clear in interviews that he did not research autism specifically and the novel never names a condition: it is &ldquo;a novel about difference, about being an outsider.&rdquo; Christopher's narration invites readers into a mind that experiences metaphor as lying, eye contact as overwhelming, and physical touch as painful, while also being more precise, honest, and observant than most neurotypical narrators. The book has been criticised and praised in equal measure within the autistic community: any classroom discussion should treat Christopher as Haddon's singular character rather than a diagnostic case study. <strong>[VERIFY tone with class]</strong>"
              />
              <ThemeCard
                title="Independence and Growing Up"
                description="The plot is a coming-of-age story disguised as a detective novel. Christopher begins the book under the protection of his father; he ends it having taken a train alone across England, found his mother, sat an A-level, and decided his future career. The novel respects the scale of these achievements without sentimentalising them: each one is hard-won, undertaken in defiance of overwhelming sensory and emotional difficulty. The closing line &mdash; on going to London on his own &mdash; is not a triumphant declaration but a carefully reasoned argument for self-belief, drawn from evidence."
              />
              <ThemeCard
                title="Communication"
                description="Communication is constantly imperfect: people lie, omit, hint, and gossip; metaphors and idioms confuse Christopher; faces conceal feelings; letters arrive too late. Haddon contrasts speech (unreliable, social, full of subtext) with writing (precise, delayed, retrievable). The book Christopher writes is itself an attempt to communicate without the failure modes of conversation: it tells the reader literally what happened, with diagrams and equations where words fall short. Siobhan's drawings of faces showing emotions are one of several explicit attempts to bridge between Christopher's mode of understanding and the social world."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The following quotations are widely cited from Haddon&apos;s 2003 novel. Always check
              page references against your own edition; pagination differs between Jonathan Cape
              (UK), Doubleday (US) and the Vintage paperback. Items below marked{' '}
              <strong>[VERIFY page]</strong> are well-known but should be cross-checked before being
              used as a precise textual citation in an exam.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="I find people confusing."
                speaker="Christopher (Chapter 73)"
                analysis="Christopher's definitive statement of his place in the social world. The simplicity of the sentence &mdash; subject, verb, object &mdash; mirrors the literal mind that finds neurotypical complexity bewildering. The line operates in two directions: it characterises Christopher, but it also invites the reader to feel how strange neurotypical behaviour is when you stop assuming it is normal. The chapter goes on to list specific reasons (faces, metaphors, jokes), turning a feeling into a logical proof."
              />
              <QuoteCard
                quote="This will not be a funny book. I cannot tell jokes because I do not understand them."
                speaker="Christopher [VERIFY page]"
                analysis="An early, pre-emptive declaration to the reader. The flatness of the syntax is part of the joke Haddon is telling at his narrator's expense and also part of his defence: Christopher refuses the social oil that makes most narration palatable. Critically, this means everything he tells us is meant straight, which is precisely why the lies of the adults around him land with such weight."
              />
              <QuoteCard
                quote="Prime numbers are what is left when you have taken all the patterns away. I think prime numbers are like life. They are very logical but you could never work out the rules, even if you spent all your time thinking about them."
                speaker="Christopher [VERIFY page]"
                analysis="The thesis statement of the novel's structure. Haddon, via Christopher, supplies his own critical metaphor: the chapters are prime-numbered because life, like primes, is logical but does not yield up its rule. This justifies the form (no decorative narrative ornament) and the content (no neat moral pattern). Note the careful epistemological caution &mdash; not &ldquo;you cannot,&rdquo; but &ldquo;you could never work out.&rdquo;"
              />
              <QuoteCard
                quote="The dog was lying on the grass in the middle of the lawn in front of Mrs Shears's house. Its eyes were closed&hellip; The dog was dead. There was a garden fork sticking out of the dog. The points of the fork must have gone all the way through the dog and into the ground because the fork had not fallen over."
                speaker="Christopher (Chapter 2, opening) [VERIFY page]"
                analysis="The opening scene's precise, detached observation establishes the narrator's mode immediately. There is no expression of horror, no metaphor, no euphemism; the sentences accumulate by physical evidence and logical deduction (&ldquo;must have gone all the way through&hellip; because the fork had not fallen over&rdquo;). Haddon teaches us to read Christopher in the first paragraph: the absence of conventional emotional language is not absence of feeling but a different system."
              />
              <QuoteCard
                quote="The Curious Incident of the Dog in the Night-Time"
                speaker="Title (echoing Sherlock Holmes, &ldquo;Silver Blaze&rdquo;)"
                analysis="The title is taken verbatim from Conan Doyle's short story &ldquo;Silver Blaze&rdquo; (1892), where Holmes points out to Inspector Gregory &ldquo;the curious incident of the dog in the night-time&rdquo; &mdash; the curious incident being that the dog did nothing in the night-time. Christopher names Sherlock Holmes as his model detective and aspires to his methods. Haddon's irony is that, unlike in Holmes, the absence at the centre of this novel is not a clue to a stranger but the absence of Christopher's mother, which the family has worked to disguise."
              />
              <QuoteCard
                quote="I think I would make a very good astronaut."
                speaker="Christopher [VERIFY page]"
                analysis="One of several moments where Christopher imagines his ideal future. The sealed, solitary, technical environment of a spacecraft is for him a paradise: predictable, quiet, ordered, and free of the unpredictable behaviour of human beings. The image works as character (his fantasies are revealing) and as theme (his aspiration is towards isolation, not connection &mdash; a tension the plot will then push against)."
              />
              <QuoteCard
                quote="A metaphor is when you describe something by using a word for something that it isn't. This means that the word metaphor is a metaphor. I think it should be called a lie because a pig is not like a day."
                speaker="Christopher [VERIFY page]"
                analysis="Christopher's rejection of metaphor is a poetics in miniature. He treats figurative language as a category error and therefore as a kind of lie. This is funny &mdash; the example, &lsquo;a pig is not like a day,&rsquo; is dryly absurd &mdash; but it also stages the novel's central problem. The plot will demand that Christopher accept information he cannot verify, given by people who use language ambiguously. Haddon is asking how truth survives in a world where most utterances are figurative."
              />
              <QuoteCard
                quote="I will not tell you any more lies."
                speaker="Ed (Father's confession) [VERIFY page]"
                analysis="In the central confession scene, Ed promises Christopher truthfulness from now on, framing it as a pact rather than a single statement. The line is structurally significant: it is the moment the murder mystery resolves into the family novel. Crucially, Christopher does not believe him on the basis of the words; trust now has to be rebuilt by evidence over time. Haddon is sceptical of the redemptive speech act &mdash; the words are necessary but not sufficient."
              />
              <QuoteCard
                quote="And I know I can do this because I went to London on my own, and because I solved the mystery of Who Killed Wellington? and I found my mother and I was brave and I wrote a book and that means I can do anything."
                speaker="Christopher (final line) [VERIFY page]"
                analysis="The closing sentence of the novel, structured as a deductive argument: I have done X, Y and Z; therefore I can do anything. The conjunctions pile evidence rather than emotion. Haddon refuses the standard coming-of-age cadence (&lsquo;I felt&hellip;&rsquo;) and replaces it with a logical proof. The implicit point: Christopher's self-belief is derived correctly from facts. The reader is left to register the unstated emotional cost, which Christopher does not name."
              />
              <QuoteCard
                quote="Mother had died two weeks ago."
                speaker="Christopher (Chapter early) [VERIFY page]"
                analysis="The sentence is reported as fact by Christopher in the early chapters &mdash; not Ed's claim about her death, but Christopher's own internalised knowledge. The flatness with which it appears, alongside other ordered information, is what makes the later discovery of the letters so devastating: it has been operating as a load-bearing &lsquo;fact&rsquo; in his mental model for two years. Haddon shows how a single false data-point can corrupt an entire logical edifice."
              />
              <QuoteCard
                quote="I cannot tell lies."
                speaker="Christopher [VERIFY page]"
                analysis="A core self-description. Christopher explains that he literally cannot construct counterfactual statements: to lie you would have to imagine alternate states of affairs and pick one. Haddon's irony is sharp &mdash; the whole adult world around Christopher constructs counterfactuals constantly, and the novel will turn on his discovery that his father has done so for two years."
              />
              <QuoteCard
                quote="I see everything."
                speaker="Christopher [VERIFY page]"
                analysis="In a chapter contrasting his perception with most people's, Christopher describes how he notices every detail in a field while neurotypical people get only an overall impression. The line is both a statement of cognitive style and a comment on the novel's narration: the prose accumulates detail rather than selecting it, because Christopher cannot effortlessly suppress what is not relevant. This is exhausting for Christopher and is part of why crowded environments &mdash; Swindon station, the Tube &mdash; are so distressing."
              />
              <QuoteCard
                quote="I do not always do what I am told."
                speaker="Christopher [VERIFY page]"
                analysis="A blunt, characteristically literal sentence whose function is to flag the novel's engine. Christopher's plot only happens because he disobeys his father's explicit instruction to stop investigating Wellington's death. His ethical hierarchy &mdash; truth above obedience &mdash; is the same hierarchy that gets him to London."
              />
              <QuoteCard
                quote="My memory is like a film."
                speaker="Christopher [VERIFY page]"
                analysis="Christopher's account of his autobiographical memory: he can rewind, fast-forward, and replay scenes with precise sensory detail. It is one of the few similes he uses without flagging it as suspicious, perhaps because film, unlike pigs and days, really does store and replay scenes. Critically, this means his testimony of past events &mdash; including his mother's &lsquo;death&rsquo; &mdash; comes from a person who experiences memory as evidence, which makes the discovery that his evidence was poisoned by his father's lie all the more violating."
              />
              <QuoteCard
                quote="I think people believe in heaven because they don't like the idea of dying, because they want to carry on living and they don't like the idea that other people will move into their house and put their things into the rubbish."
                speaker="Christopher [VERIFY page]"
                analysis="A passage in which Christopher reasons about religion. The argument's structure is psychological &mdash; he infers belief from emotional motive. The mundane image (other people putting your things in the rubbish) is bathetic and funny, but the underlying point is serious: Christopher treats religious metaphysics as a kind of metaphor, and metaphor for him is a polite lie. Useful for any question on logic vs emotion, or on how Haddon presents adult systems of meaning through a child's literal lens."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Symbols and Motifs" icon="🔢">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Prime numbers</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The chapters are numbered using only primes (2, 3, 5, 7, 11&hellip;233), not
                  consecutive integers. Christopher tells us he likes prime numbers because there is
                  no rule for generating them &mdash; you have to test each one. Primes function as
                  a structural metaphor: the novel insists on order, but that order is not the
                  smooth arithmetic of conventional plotting. Like life and like Christopher&apos;s
                  mind, the order is real but not predictable. The numbering also lets Haddon signal
                  Christopher&apos;s authorship of the form, not just the content.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Maps and diagrams</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The book reproduces Christopher&apos;s drawings: street plans of Swindon, the
                  layout of his father&apos;s wardrobe, the constellations Orion and Cassiopeia, the
                  pattern of cars on a Good Day, the map of his journey, a maze, geometric proofs.
                  Maps are how Christopher converts unfamiliar space into something he can navigate;
                  diagrams are how he converts feelings into logical relationships. They are not
                  decorative &mdash; they are part of the prose, and the reader has to learn to read
                  them as text. The Pythagoras proof in the appendix is the final extension of this
                  principle: a mathematical demonstration as a kind of self-portrait.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The London Underground</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Tube is the novel&apos;s chief setting of sensory hell. Christopher describes
                  the noise, the crowds, the strip-lit signs, and the trains coming and going as
                  overwhelming; he hides on a track ledge while a train passes. The Underground is
                  the inverse of the night sky and the empty fields he loves: it is meaningfully
                  arranged (he has a map) but emotionally and sensorily unbearable. It functions as
                  a test of his independence and as the novel&apos;s most vivid representation of
                  how a neurotypical environment can be dangerous to a neurodivergent body. The fact
                  that he survives it is the literal evidence underpinning his closing argument.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  Yellow and brown vs red &mdash; &ldquo;Black Day&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher refuses to eat or touch yellow or brown food and uses car colours as a
                  daily oracle: four red cars in a row make a Good Day, four yellow cars in a row
                  make a Black Day. He admits this is not logical, but defends it as no less
                  reasonable than other people&apos;s rules (e.g. weather forecasting, which is also
                  imprecise). The colour system is a coping device that imposes legibility on a day;
                  the &ldquo;Black Day&rdquo; designation captures how, for him, emotional outlook
                  can be triggered by something as small as the order of cars on a road. Haddon uses
                  it to make readers feel both the arbitrariness and the necessity of his rituals.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Wellington&apos;s body</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The dog is both literal corpse and symbolic object. The garden fork through
                  Wellington stands for an act of domestic violence whose origin is in adult
                  adultery, jealousy and rage &mdash; none of which Christopher initially
                  understands. The investigation he conducts is, in retrospect, an investigation of
                  the world that produced this object. Wellington also tethers the novel to the
                  Sherlock Holmes tradition of the title: a dead dog as a clue to a much larger
                  truth.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Christopher&apos;s Swiss Army knife</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher carries a Swiss Army knife and reaches for it when he is most
                  threatened &mdash; notably when he believes his father, the killer of Wellington,
                  may harm him. The knife is a symbol of his refusal to be a passive figure. It also
                  raises the stakes: Haddon&apos;s narrator, often condescended to in critical
                  reception, is willing to defend himself, and the prose reports this willingness
                  without comment.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Toby the rat</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Toby is the novel&apos;s small companion symbol. Animals are the only living
                  beings Christopher trusts unconditionally: they do not lie, do not use metaphors,
                  and behave according to predictable rules. Carrying Toby in a box to London is
                  both practical (he cannot leave him) and emblematic: he travels with the only
                  relationship that does not require him to interpret subtext. Toby&apos;s
                  near-death on the Underground tracks, and his eventual death of old age at the end
                  of the book, marks time and grief in a register Christopher can register clearly
                  &mdash; a clean loss, not a complicated one.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Mark Haddon (b. 1962)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Mark Haddon was born in Northampton in 1962 and educated at Uppingham School and
                  Merton College, Oxford. Before <em>Curious Incident</em>, he was best known as a
                  writer and illustrator of children&apos;s books, including the Agent Z series, and
                  for screenwriting work in television. In his twenties he had spent time working
                  with people with physical and learning disabilities, which shaped his sensitivity
                  to varied modes of perception and communication, though he has consistently said
                  he did not research autism specifically for the novel.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Publication and reception (2003)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel was published in 2003 by Jonathan Cape (UK) and Doubleday (US).
                  Unusually, it was published simultaneously in adult and children&apos;s editions
                  with different cover designs, marketing it as a young-adult/adult crossover
                  &mdash; one of the early high-profile uses of this dual-audience strategy. It won
                  the 2003 Whitbread Book of the Year (now the Costa Book Awards) and the 2004
                  Commonwealth Writers&apos; Prize Best First Book, and was longlisted for the Man
                  Booker Prize. It became a major international bestseller.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Unreliable / first-person narration</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher narrates in the first person and is in important senses unreliable
                  &mdash; not because he lies (he insists he cannot) but because his interpretive
                  framework is deliberately limited. Haddon&apos;s technical achievement is to give
                  us all the data the reader needs to understand scenes that Christopher does not,
                  especially around adults&apos; emotions. We work out the affair, Ed&apos;s love
                  for Christopher, and Judy&apos;s reasons for leaving, while Christopher records
                  the surface. This is dramatic irony of a particularly tender kind.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The prime-numbered chapter structure</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Chapters are numbered 2, 3, 5, 7, 11, 13&hellip; up to 233. The choice is internal
                  to the fiction: Christopher tells us he likes primes and is writing the book, so
                  the numbering is his. Critically, it changes the reader&apos;s experience of pace
                  &mdash; chapter numbers leap by larger gaps as the book goes on, mimicking the way
                  primes thin out. The final chapter (233) is itself a prime, and the appendix
                  appears outside the numbering as an additional, mathematical signature.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Sherlock Holmes and the title</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The title quotes Conan Doyle&apos;s &ldquo;Silver Blaze&rdquo; (1892), in which
                  Holmes solves a case by noticing what did not happen: the dog did not bark.
                  Christopher cites Holmes approvingly several times in the novel and tries to apply
                  Holmesian methods of observation and deduction. Haddon&apos;s use of the tradition
                  is partly affectionate and partly ironic: the methods of classical detective
                  fiction do solve the mystery of who killed the dog, but they cannot solve the
                  human consequences. The genre is honoured and exceeded.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Simon Stephens&apos;s stage adaptation (2012)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In 2012 the novel was adapted for the stage by playwright Simon Stephens,
                  premiering at the National Theatre&apos;s Cottesloe (now Dorfman) in London,
                  directed by Marianne Elliott. It won multiple Olivier and Tony Awards and toured
                  widely. Stephens&apos;s adaptation makes a key formal change: Siobhan reads aloud
                  from Christopher&apos;s book, framing the action as a play-within-a-play that the
                  school is staging from his writing. The adaptation invents and cuts material to
                  make the text performable. <strong>Important for exam answers:</strong> if you are
                  studying the novel, do not quote material that exists only in the play (and vice
                  versa). When in doubt about whether a line or scene is in your set text, check the
                  novel.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Note on autism and the novel</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel never uses the word &ldquo;autism&rdquo; or
                  &ldquo;Asperger&apos;s,&rdquo; despite early jacket copy and reviews that did.
                  Haddon has said publicly (notably on his own website and in interviews) that he
                  did not research the condition before writing and that the book is not intended as
                  a representation of it &mdash; he describes Christopher as &ldquo;a mathematician
                  with some behavioural difficulties&rdquo; and the novel as a book about
                  difference. The autistic community&apos;s reception has been mixed: some readers
                  value the inside view of sensory difference, others object to a non-autistic
                  author defining the popular image of autism. A strong essay handles this
                  complexity rather than asserting Christopher &ldquo;has autism.&rdquo;
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── NARRATIVE FORM */}
        <div id="narrative-form">
          <Section title="Narrative Form and Structure" icon="🔗">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">A book within the book</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher writes <em>Curious Incident</em> as a project for Siobhan; the text we
                  read is presented as that project. This frame justifies the prose style (literal,
                  precise), the diagrams, the digressions on prime numbers, and the appendix. It
                  also creates dramatic irony: Christopher writes for Siobhan and so omits or
                  downplays material he assumes she knows or does not need to read, while we receive
                  the omissions as evidence.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Mystery genre subverted</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Haddon uses the structure of detective fiction (a body, suspects, an investigator,
                  evidence, a confession) but reroutes the resolution. The dog&apos;s murderer is
                  identified midway through the book, not at the end. The remaining narrative is the
                  consequences. The genre&apos;s promise &mdash; that solving the case restores
                  order &mdash; is denied.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Digressive structure</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher pauses the plot for chapters on prime numbers, the solar system, the
                  Monty Hall problem, the Cottingley Fairies, his own school days, and dreams of
                  being an astronaut. These are not interruptions: they are part of how his mind
                  works, and Haddon insists that they are part of the story. They also slow the pace
                  and give the reader access to Christopher&apos;s mode of thinking, which becomes
                  essential for understanding the emotional climaxes.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Use of diagrams and equations</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Visual elements are integrated into the text: street maps, tube maps, geometric
                  figures, emoticon-faces drawn by Siobhan, the Pythagoras proof. Reading the novel
                  involves reading these. Their presence enacts Haddon&apos;s argument that words
                  are not always the most honest medium &mdash; sometimes a diagram says what a
                  sentence cannot.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The appendix</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel ends not on its emotional climax but on an appendix giving the full
                  proof of the question Christopher answered in his A-level Maths paper. This is a
                  deliberate choice: the &lsquo;happy ending&rsquo; is a piece of mathematics.
                  Haddon is asking the reader to recognise that, for Christopher, this proof is the
                  appropriate emotional register &mdash; beautiful, complete, and free of metaphor.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-4">
              Five GCSE / IGCSE-style questions and three A-Level-style questions, with thesis
              suggestions and paragraph routes. Treat the planning notes as starting points: a
              strong response will quote the novel directly, link methods to themes, and address
              Haddon as a deliberate author rather than treating Christopher as a real person.
            </p>

            <div className="space-y-6">
              {/* GCSE 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 1. How does Haddon present Christopher&apos;s relationship with truth and
                  lies?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon uses Christopher&apos;s literal-minded honesty as both a character
                      trait and a critical lens, exposing how the adults around him have constructed
                      a survivable fiction that he cannot tolerate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph routes
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Christopher&apos;s self-description: &ldquo;I cannot tell lies&rdquo; and
                        the metaphor-as-lie passage.
                      </li>
                      <li>
                        The structural lie about his mother&apos;s death and the discovery of the
                        letters.
                      </li>
                      <li>
                        Ed&apos;s confession scene and the line about not telling lies any more.
                      </li>
                      <li>
                        Mrs Alexander&apos;s polite half-truths in the park &mdash; adult truth as
                        social negotiation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GCSE 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 2. Explore how Haddon presents the breakdown and partial repair of the Boone
                  family.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon resists the redemptive arc of conventional family narratives: the
                      family is not restored but renegotiated, and the novel insists that trust is
                      rebuilt through evidence over time, not declarations.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph routes
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Mother&apos;s letters: her honest account of why she left.</li>
                      <li>
                        Father&apos;s lie and confession: violence, contrition, limits of
                        forgiveness.
                      </li>
                      <li>
                        The London journey: Christopher choosing his mother but escaping into her,
                        not towards her.
                      </li>
                      <li>
                        Closing chapters: the puppy, holding hands by the fingertips, separate
                        households.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GCSE 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 3. How does Haddon use the form and style of the novel to put us inside
                  Christopher&apos;s mind?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The prime-numbered chapters, embedded diagrams, and refusal of metaphor do not
                      just describe Christopher&apos;s mind &mdash; they enact it, forcing the
                      reader to think the way he does.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph routes
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Prime-numbered chapters: form as authorial signature.</li>
                      <li>
                        Maps, diagrams, and the appendix: visual literacy as part of the narrative.
                      </li>
                      <li>
                        Digressive chapters (primes, Monty Hall) that pause the plot deliberately.
                      </li>
                      <li>
                        Refusal of metaphor and the resulting flatness of affect &mdash; honesty
                        over ornament.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GCSE 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 4. Explore the significance of the journey to London in the novel.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The journey is at once plot device, sensory ordeal, and proof: it furnishes
                      the evidence for Christopher&apos;s closing claim that he can do anything.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph routes
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Trigger: the realisation that his father killed Wellington and may threaten
                        him.
                      </li>
                      <li>
                        Swindon station and the Tube as sensory hell &mdash; the prose reproduces
                        overload.
                      </li>
                      <li>
                        Toby on the tracks: small-stakes peril as scale model of Christopher&apos;s
                        own danger.
                      </li>
                      <li>
                        Arrival in Willesden &mdash; the limits of reunion; Mr Shears&apos;s
                        hostility.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GCSE 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 5. How does Haddon present the figure of Ed Boone as both a loving father and
                  a man capable of harm?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon refuses to make Ed either villain or hero; the novel asks the reader to
                      hold his loyalty and his violence in the same hand, which is precisely what
                      Christopher cannot do.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph routes
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Daily care: cooking, structure, taking Christopher to the police station.
                      </li>
                      <li>
                        The lie about the mother&apos;s death &mdash; a self-justified protective
                        fiction.
                      </li>
                      <li>
                        The killing of Wellington &mdash; rage at Mrs Shears redirected at the dog.
                      </li>
                      <li>
                        The confession scene and the small acts of repair: Sandy the puppy, the
                        fingertip handhold.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* A-Level 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level 1. &ldquo;Haddon uses the conventions of detective fiction to expose their
                  inadequacy in describing real human consequences.&rdquo; Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Approach
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue with the proposition by tracing the genre&apos;s machinery (clues,
                      suspects, deduction, confession) and showing how each is honoured and
                      exceeded. The Sherlock Holmes intertext is your spine: the title&apos;s
                      allusion to &ldquo;Silver Blaze&rdquo; sets up the model that the novel then
                      complicates.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Possible structure
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>The genre setup: corpse, suspect, methodical investigator.</li>
                      <li>
                        The mid-book solution: who killed Wellington is a domestic, not a stranger.
                      </li>
                      <li>The post-solution narrative: the convention of resolution is denied.</li>
                      <li>
                        Counter-argument: the Pythagoras appendix as a logical &lsquo;ending&rsquo;
                        in a different mode.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* A-Level 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level 2. Examine the relationship between voice and form in{' '}
                  <em>The Curious Incident of the Dog in the Night-Time</em>.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Approach
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue that Haddon&apos;s major technical achievement is the integration of
                      voice into form: the prose, the chapter numbering, the visual elements and the
                      digressive chapters all originate in Christopher&apos;s first-person logic, so
                      that &lsquo;form&rsquo; in the novel is not a frame but an extension of voice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Possible structure
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Voice: literal, list-based, anti-metaphor; cite the metaphor-as-lie passage.
                      </li>
                      <li>Form 1: prime-numbered chapters as voice extended into structure.</li>
                      <li>Form 2: diagrams, maps, and the appendix as non-verbal voice.</li>
                      <li>
                        Where voice and form diverge &mdash; dramatic irony around Ed&apos;s love.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* A-Level 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level 3. To what extent should{' '}
                  <em>The Curious Incident of the Dog in the Night-Time</em> be read as a novel
                  about neurodiversity, and to what extent as a novel about parents and children?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Approach
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A genuinely two-handed essay. Acknowledge that Haddon never names a condition
                      and has cautioned readers against treating the book as a representation of
                      autism, while also recognising the book&apos;s real influence on neurotypical
                      readers&apos; understanding of difference. Then argue that the family plot
                      &mdash; lie, discovery, journey, partial repair &mdash; is what gives the
                      neurocognitive material its emotional traction. The two readings depend on
                      each other.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Possible structure
                    </p>
                    <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Case for neurodiversity: sensory, cognitive, communicative detail; reception
                        in the autistic community (mixed).
                      </li>
                      <li>
                        Case for family novel: lie, letters, journey, parental imperfection, fragile
                        resolution.
                      </li>
                      <li>
                        Synthesis: the family plot tests Christopher&apos;s framework precisely
                        where it is most vulnerable, and his framework illuminates the family
                        precisely where it is most evasive.
                      </li>
                      <li>
                        Authorial position: Haddon&apos;s public statements that the book is about
                        &lsquo;difference&rsquo; rather than diagnosis.{' '}
                        <strong>
                          [VERIFY exact phrasing of Haddon&apos;s blog post on autism if quoting
                          directly]
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for The Curious Incident of the Dog in the Night-Time
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Always treat Haddon as a deliberate author.</strong> Write &ldquo;Haddon uses
              Christopher&apos;s literal narration to&hellip;&rdquo;, not &ldquo;Christopher decides
              to&hellip;&rdquo; on its own.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Discuss form, not just plot.</strong> The prime-numbered chapters, embedded
              diagrams, and Pythagoras appendix are part of the meaning &mdash; mention them.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Distinguish novel from play.</strong> If your spec is on Haddon&apos;s 2003
              novel, never quote a Simon Stephens stage line; if you are studying the play, do not
              lean on appendix material that is novel-only.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Handle neurodiversity carefully.</strong> Avoid asserting Christopher
              &ldquo;has autism&rdquo; in the text &mdash; the novel never names it, and Haddon has
              explicitly said he did not research it. Talk about &lsquo;difference,&rsquo;
              &lsquo;sensory experience,&rsquo; or &lsquo;a mind that takes language
              literally.&rsquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use precise terminology.</strong> &ldquo;First-person narration,&rdquo;
              &ldquo;dramatic irony,&rdquo; &ldquo;intertext&rdquo; (for Sherlock Holmes),
              &ldquo;motif&rdquo; (for primes, colours, maps).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Don&apos;t mistake calm prose for absence of feeling.</strong> The most
              painful scenes in the novel are written flatly &mdash; that flatness is the point.
              Quote it; analyse it.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>The Curious Incident of the Dog in the Night-Time</em> by Mark Haddon was first
          published in 2003 by Jonathan Cape (UK) and Doubleday (US) and is{' '}
          <strong>still in copyright</strong>. Quotations on this page are reproduced for
          educational commentary and revision purposes under fair-dealing for criticism and review.
          Always check exact wording and pagination against your own edition before citing in
          coursework.
        </p>
      </footer>
    </>
  )
}
