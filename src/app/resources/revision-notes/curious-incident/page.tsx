'use client'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
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
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Modern Prose
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
        <p className="mt-1 text-lg text-muted-foreground">{tr(`Mark Haddon, 2003 (novel)`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your GCSE and IGCSE English Literature exam. Plot summary,
          character profiles, themes with evidence, 12+ verbatim quotations with analysis,
          symbolism, context, narrative structure, and essay planning guidance. This guide focuses
          on Mark Haddon&apos;s 2003 novel rather than Simon Stephens&apos;s 2012 stage adaptation;
          differences are flagged where relevant.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">{tr(`Jump to section:`)}</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Key Quotations',
            'Symbols',
            'Context',
            'Structure',
            'Essay Planning',
            'Grade 9 Points',
            'Practice Questions',
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
          <Section title={tr(`Plot Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  A note on chapter numbering
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher numbers his chapters using only prime numbers (2, 3, 5, 7, 11,
                  13&hellip;) because &ldquo;I like prime numbers.&rdquo; The novel begins with
                  chapter 2 and ends at chapter 233. This is a structural decision by Christopher
                  (the in-novel narrator), reflecting his love of order, mathematics, and
                  predictable patterns. It is one of the novel&apos;s most distinctive formal
                  features.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  The Discovery (Chapter 2)
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At seven minutes after midnight, Christopher Boone, a fifteen-year-old boy from
                  Swindon, discovers Wellington, the neighbour&apos;s black poodle, dead on the
                  front lawn of Mrs Shears&apos;s house. The dog has been killed with a garden fork.
                  Christopher hugs the dog, and when the police arrive, an officer touches him and
                  Christopher hits him because he doesn&apos;t like being touched. He is arrested.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Wellington discovered with a garden fork through him &mdash; the
                      central mystery
                    </li>
                    <li>
                      &bull; Christopher hits the policeman &mdash; sensory overload, not malice
                    </li>
                    <li>
                      &bull; Title alludes to Conan Doyle&apos;s Sherlock Holmes story &ldquo;Silver
                      Blaze&rdquo;
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  The Investigation Begins
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher is held overnight in a police cell, given a caution, then released to
                  his father, Ed. He decides to investigate Wellington&apos;s killing and write a
                  murder mystery novel about it, modelled on Sherlock Holmes. His father forbids him
                  from getting involved in &ldquo;other people&apos;s business,&rdquo; but
                  Christopher&apos;s teacher Siobhan encourages the writing as a school project. He
                  has been told by his father that his mother, Judy, died of a heart attack two
                  years previously.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Christopher decides to write a detective novel &mdash; the book we are
                      reading
                    </li>
                    <li>&bull; Father forbids the investigation &mdash; foreshadows his lies</li>
                    <li>&bull; Siobhan&apos;s mentorship guides the narrative voice</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Door-to-Door Inquiries
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher goes door-to-door interviewing the neighbours despite his
                  father&apos;s prohibition. He meets Mrs Alexander, an elderly widow, who
                  eventually reveals that Christopher&apos;s mother Judy had an affair with Mr
                  Shears (Wellington&apos;s owner) before Mr Shears left his wife. Christopher does
                  not understand the implication and is more focused on the case. He decides Mr
                  Shears is his prime suspect because he &ldquo;hates&rdquo; him.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Mrs Alexander&apos;s revelation about the affair</li>
                    <li>
                      &bull; Christopher&apos;s deductive reasoning &mdash; logical but limited
                    </li>
                    <li>&bull; Christopher accidentally uncovers a family secret</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  The Confrontation and the Letters
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Ed discovers the book Christopher has been writing about Wellington. Furious, he
                  hits Christopher (the only time in the book), then later confiscates the
                  manuscript. While searching for it in his father&apos;s bedroom, Christopher finds
                  a shirt box containing letters addressed to him from his mother &mdash; dated long
                  after her supposed death. Reading them, he realises his mother is alive in London.
                  The shock makes him physically ill; he vomits and sits in his own vomit for over
                  an hour, unable to move.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The hidden letters &mdash; the central betrayal exposed</li>
                    <li>&bull; Mother is alive &mdash; with Mr Shears in London</li>
                    <li>
                      &bull; Christopher&apos;s catatonic response to overwhelming new information
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Father&apos;s Confession
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Ed finds Christopher in distress, washes him, and confesses everything. Judy did
                  not die; she left them and moved to London with Mr Shears. Ed had told Christopher
                  she was dead because he thought it would be easier. He also confesses, weeping,
                  that he killed Wellington in a moment of fury after an argument with Mrs Shears.
                  He pleads for forgiveness and tells Christopher he will never lie to him again.
                  Christopher becomes terrified that the man who killed Wellington could kill him.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The double confession &mdash; the lie about mother and the murder of
                      the dog
                    </li>
                    <li>&bull; Trust between father and son is shattered</li>
                    <li>
                      &bull; Christopher&apos;s logical conclusion: father is a murderer, therefore
                      dangerous
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  The Journey to London
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher resolves to go to his mother&apos;s address in London. He takes Toby
                  (his pet rat) and his Swiss Army knife and walks alone to Swindon railway station.
                  Crowds, noise, signs, and announcements overwhelm him; he &ldquo;groans&rdquo; and
                  tries to block out the sensations. He buys a ticket using his father&apos;s
                  cashpoint card, almost loses Toby, hides under a railway seat, and is pursued by a
                  police officer who eventually helps him onto a train.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Christopher leaves home alone &mdash; his most independent act</li>
                    <li>&bull; The chaos of the railway station versus his ordered mind</li>
                    <li>&bull; Toby and the Swiss Army knife as comfort objects</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    7
                  </span>
                  Paddington and the Underground
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At Paddington station, Christopher experiences sensory overload from the lights,
                  signs and crowds. He is helped by a kind police officer who shows him the
                  Underground. In an Underground station Toby escapes onto the tracks; Christopher
                  climbs down to rescue him just before a train arrives, and a stranger pulls him up
                  to safety. He finally takes the Tube to Willesden Junction and finds his
                  mother&apos;s flat.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The Tube map &mdash; pattern that finally makes London comprehensible
                    </li>
                    <li>&bull; Toby&apos;s rescue from the rails &mdash; courage born of love</li>
                    <li>
                      &bull; Strangers help repeatedly &mdash; the world is not entirely hostile
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    8
                  </span>
                  Reunion with Mother
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher arrives at his mother&apos;s flat. Judy and Mr Shears return; Judy is
                  overwhelmed with emotion and relief, while Mr Shears is hostile to
                  Christopher&apos;s arrival. Ed comes to London to find his son but is turned away.
                  Judy and Mr Shears argue about Christopher&apos;s presence. Eventually Judy walks
                  out on Mr Shears, takes Christopher and returns to Swindon so that he can sit his
                  A-Level Maths exam, which he has been preparing for.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Mother&apos;s emotional reunion contrasts with Christopher&apos;s
                      practical concerns
                    </li>
                    <li>&bull; Mr Shears as the new domestic antagonist</li>
                    <li>
                      &bull; Christopher&apos;s priority is the Maths exam &mdash; his ordered
                      future
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    9
                  </span>
                  The A-Level Maths Exam and Resolution
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christopher sits his A-Level Mathematics paper in Swindon &mdash; a remarkable
                  achievement at fifteen. He is anxious but completes it. Ed slowly begins to repair
                  the relationship by giving Christopher a puppy, Sandy, as a sign of trust. The
                  novel ends with Christopher passing his A-Level with an A grade and looking ahead
                  to taking Further Maths and going to university to become a scientist. He repeats
                  the affirmation that he can do anything because he solved the mystery and went to
                  London on his own and was brave.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The puppy Sandy &mdash; symbolic replacement of the dead Wellington
                    </li>
                    <li>
                      &bull; The A-Level Maths success &mdash; an external reward in an ordered
                      system
                    </li>
                    <li>&bull; The hopeful but qualified ending &mdash; trust is rebuilt slowly</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  An appendix-style ending
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Importantly, the novel ends with an appendix containing one of the actual A-Level
                  Maths questions Christopher answered, complete with his fully worked solution.
                  This is not the play&apos;s curtain-call mathematics demonstration; in the novel
                  it is literally printed at the back as if Christopher had stapled it into the
                  manuscript. It is a final assertion that the world makes sense to Christopher
                  through numbers.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title={tr(`Character Profiles`)} icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Christopher John Francis Boone"
                description="The fifteen-year-old narrator and protagonist. Christopher is a maths prodigy with an extraordinary memory and an aptitude for logic, but he struggles with social interaction, lying, idiomatic language, sensory overload, and being touched. He attends a special school in Swindon. Haddon describes him only as a boy with 'behavioural problems' — the words 'autism' and 'Asperger's' do not appear in the novel itself, although the back-cover blurbs of early editions referred to Asperger's. Christopher narrates the entire novel. His voice is literal, precise, and unfiltered, which gives the book its distinctive tone. He loves prime numbers, space, dogs, the colour red, and his pet rat Toby; he hates the colours yellow and brown, being touched, and metaphors. He intends to be a scientist or astronaut."
              />
              <CharacterCard
                name="Ed Boone (Father)"
                description="Christopher's father. A heating engineer who has raised Christopher alone for two years following the breakdown of his marriage. Ed is patient, working-class, and devoted to Christopher in his own often gruff way: he shops, cooks, sets routines, and tolerates outbursts. However, he has lied catastrophically — telling Christopher his mother was dead when she had run off with Mr Shears — and in a moment of rage he killed Wellington with a garden fork. Ed is one of Haddon's most morally complex creations: capable of love and violence, honesty and lies, often within the same scene. His struggle to win back Christopher's trust frames the novel's emotional resolution."
              />
              <CharacterCard
                name="Judy Boone (Mother)"
                description="Christopher's mother. Judy left Ed and Christopher to live in London with Roger Shears. Her letters, hidden by Ed, reveal that she found Christopher's behaviour overwhelming and felt that she was a bad mother. She is more emotionally expressive than Ed, but also less practiced at managing Christopher's needs. When he arrives unannounced in London, she is overwhelmed, and the practicalities of caring for a son with sensory difficulties soon strain her relationship with Mr Shears. She ultimately leaves Mr Shears and returns to Swindon for Christopher's exam, suggesting genuine maternal commitment despite her earlier flight."
              />
              <CharacterCard
                name="Siobhan"
                description="Christopher's teacher and mentor at the special school. She is the addressee of much of Christopher's writing — he composes the book partly because she has encouraged him to. Siobhan is patient, calm, and explains the world to Christopher in clear rules: she draws faces on pieces of paper to teach him about emotions, advises him on what he can and cannot say, and gently guides his growth. She functions as a stable, trusted adult whose voice acts as Christopher's filter on social reality. She is one of the few characters Christopher unambiguously trusts."
              />
              <CharacterCard
                name="Mrs Eileen Shears"
                description="Christopher's neighbour and Wellington's owner. Following Mr Shears's departure with Judy, Mrs Shears spent time helping Ed with Christopher and there was a brief domestic intimacy between them. Their relationship cooled after an argument, which was the trigger for Ed's killing of Wellington. Mrs Shears is presented largely from Christopher's literal perspective: a woman who shouts when her dog is dead, who later refuses to speak to him. She is the immediate occasion of the mystery rather than a fully developed psychological portrait."
              />
              <CharacterCard
                name="Mr Roger Shears"
                description="Mrs Shears's estranged husband and the man with whom Judy had an affair and now lives in London. Christopher dislikes him intensely — he refers to him simply as 'Mr Shears' and decides early in the novel that Mr Shears is his prime suspect for Wellington's killing. When Christopher arrives in London, Mr Shears is hostile, makes it clear he does not want Christopher there, and attempts to push Judy back into prioritising their relationship. He is ultimately rejected by Judy, who chooses her son over him."
              />
              <CharacterCard
                name="Mrs Alexander"
                description="An elderly widow living in Christopher's road, recognisable by her wire-haired dachshund. She is one of the few neighbours willing to talk to Christopher, and she takes a kindly interest in him. During his door-to-door investigation, she gently and reluctantly tells him about his mother's affair with Mr Shears, having assumed that Christopher already knew. She is a model of considerate adult behaviour: respectful of Christopher's rules about being touched, careful with information, and unfailingly polite even when he abruptly walks away."
              />
              <CharacterCard
                name="Toby"
                description="Christopher's pet rat. Toby is a constant companion and represents Christopher's preference for animals over humans — he believes animals are more honest and easier to understand. Toby travels with Christopher to London inside his pocket; the rescue of Toby from the Underground tracks is one of the novel's most dramatic scenes and demonstrates Christopher's capacity for risk and devotion. Toby dies of old age towards the end of the novel — a small loss but one of the few times Christopher writes about grief in his own life."
              />
              <CharacterCard
                name="Wellington"
                description="The neighbour's black poodle, killed by a garden fork on Mrs Shears's lawn at the start of the novel. Although Wellington is dead from page one, he is the catalyst for the entire plot. As an investigative target he echoes the racehorse 'Silver Blaze' in Conan Doyle's Sherlock Holmes story — the title 'the curious incident of the dog in the night-time' is a direct quotation from that story. Wellington's killing is ultimately revealed to be the work of Ed, and so the dog's death simultaneously represents the rupture between Mrs Shears and Ed and the rupture between Ed and Christopher."
              />
              <CharacterCard
                name="Sandy"
                description="The golden retriever puppy that Ed gives Christopher towards the end of the novel as a peace-offering and a sign that he can be trusted with a living thing. Sandy is a quiet symbolic counterweight to Wellington — a dog given out of love rather than killed in anger — and represents the slow rebuilding of trust between father and son. Christopher accepts the puppy on his own terms and on his own timetable."
              />
              <CharacterCard
                name="Sergeant / The Policeman at the Station"
                description="A composite of the various police officers Christopher encounters. The first arrests him at the scene of Wellington's death; the duty sergeant interviews him at the station and gives him a caution. Later, a London officer at Paddington helps him navigate the city. Haddon uses these officers to demonstrate Christopher's literalism — he answers exactly what is asked, does not embellish, and sometimes seems unhelpful when in fact he is being maximally truthful."
              />
              <CharacterCard
                name="Reverend Peters"
                description="An invigilator at Christopher's A-Level Maths exam and a clergyman who has discussed God with Christopher in earlier chapters. Christopher is sceptical of religious explanation; Reverend Peters represents a worldview that Christopher politely but firmly rejects in favour of empirical reasoning. His presence at the exam is a small but pointed image: religion supervising mathematics."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Truth and Lies`)}
                description="Christopher's most cherished principle is that he cannot tell lies — he says he is unable to do so. The plot turns on the lies of others: Ed's lie that Judy is dead, the hidden letters, Ed's lie about not knowing how Wellington died. When Christopher discovers the truth, his entire framework of safety collapses. The novel suggests that for Christopher, lies are not just morally wrong but cognitively unbearable: they break his model of the world. Yet Haddon also shows that lying parents can still love their children — the moral landscape is not as simple as Christopher's literal mind initially treats it."
              />
              <ThemeCard
                title={tr(`Order vs Chaos / Logic vs Emotion`)}
                description="Christopher imposes order on a world he experiences as overwhelming: prime-numbered chapters, lists, diagrams, mathematical proofs, and rigid daily routines. He prefers the logical certainty of mathematics to the unpredictability of human emotion. The novel constantly contrasts the ordered with the chaotic: a calm bedroom versus a crowded railway station, a maths problem versus a parental row. Haddon does not present Christopher's preference as defective; rather, he shows that Christopher's strategies are coherent responses to a sensorily overwhelming world. The book asks readers to recognise that 'logic' and 'emotion' are not opposites but two ways of navigating reality."
              />
              <ThemeCard
                title={tr(`Family and Trust`)}
                description="The novel anatomises a family that has fractured under the strain of caring for a child with high needs. Both parents love Christopher but have failed him in different ways: Judy by leaving, Ed by lying. The journey to London literalises the family's geographical and emotional rupture. The ending offers a guarded reconciliation: Ed's puppy and Judy's return show that families can be rebuilt slowly, on the terms of the most vulnerable member, but not restored to their original state. Trust, once broken, must be re-earned."
              />
              <ThemeCard
                title={tr(`Difference and Neurodiversity`)}
                description="Christopher is presented as someone who experiences the world differently — overwhelmed by noise, colour, touch and metaphor, but extraordinary in mathematical reasoning, memory, and pattern recognition. Importantly, the novel itself never uses the words 'autism' or 'Asperger's' (though early dust-jacket marketing did). Haddon has subsequently said publicly that he did not research autism specifically and that Christopher should not be read as a documentary representation. The novel's strength lies in giving the reader Christopher's first-person perspective — sympathetic without sentimentality — and allowing the reader to experience the world as he does. Examiners increasingly expect students to handle this representation thoughtfully."
              />
              <ThemeCard
                title={tr(`Independence and Growing Up`)}
                description="The novel is, among other things, a coming-of-age story. Christopher begins by needing his father's reassurance to leave the house and ends by having travelled alone to London, sat an A-Level, and acquired a puppy he cares for himself. Each act of independence is hard-won and not romanticised: he is terrified, vomits, hides under seats, and groans in public. Yet the cumulative effect is a young person who has discovered his own competence. The closing affirmation — 'I can do anything' — is earned, not granted. Independence for Christopher is not the loud rebellion of typical teenage fiction but the quiet acquisition of tools for self-reliance."
              />
              <ThemeCard
                title="Communication"
                description="The novel dramatises every kind of communication failure: Ed cannot tell Christopher the truth about Judy; Judy's letters are intercepted; police officers misread Christopher's literal answers; Christopher cannot read facial expressions; idioms confuse him; touch overwhelms him. Yet communication still happens, often through unexpected channels — diagrams, lists, written letters, and the very book Christopher is writing. Haddon suggests that conventional speech is only one of many ways minds reach each other. The novel itself is a model of this: a mind that struggles to talk is rendered fully visible to the reader through prose."
              />
              <ThemeCard
                title={tr(`Animals and Honesty`)}
                description="Christopher prefers animals to people because they 'do not lie.' Toby the rat, Wellington the dog, the fantasy of being alone in the universe with only animals: animals form a moral counterweight to the deceitful world of adults. Wellington's death is therefore not just a crime but a violation of Christopher's most trusted moral category. The puppy Sandy at the end is a small repair of this category. Haddon uses animals as the only reliable point of fidelity in a world full of broken human promises."
              />
              <ThemeCard
                title={tr(`Bravery and Fear`)}
                description="Although Christopher rarely uses emotional vocabulary, the novel is fundamentally about courage. He is frightened of crowds, strangers, and noise, and yet he undertakes a journey that would daunt most adults. The novel redefines bravery as 'doing the difficult thing while afraid' rather than 'not being afraid.' Christopher's repeated mantra at the end — that he was 'brave' — is one of the few overt emotional statements he makes about himself, and it is presented as fully justified."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              All quotations are verbatim from Mark Haddon&apos;s 2003 novel. Variations from the
              Simon Stephens stage adaptation (2012) are noted where they exist.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears&rsquo;s house. Its eyes were closed."
                speaker="Christopher (opening of chapter 2)"
                analysis="The novel's famous opening uses precise time, specific location and bare physical description. The numerical opening signals Christopher's ordered worldview; the present-tense vividness pulls the reader directly into a crime scene. Note the appearance-rather-than-meaning approach: 'Its eyes were closed' is descriptive, not interpretive. Haddon withholds emotional framing throughout, forcing the reader to supply it."
              />
              <QuoteCard
                quote="The dog was dead. There was a garden fork sticking out of the dog. The points of the fork must have gone all the way through the dog and into the ground because the fork had not fallen over."
                speaker="Christopher"
                analysis="Christopher's narration is forensic rather than emotional. The reasoning ('must have gone all the way through... because the fork had not fallen over') foregrounds his deductive style. The bluntness of the repeated noun 'dog' (rather than 'it' or 'Wellington') is characteristic of his refusal to soften reality. The reader experiences both the horror of the image and the strangeness of the voice that records it."
              />
              <QuoteCard
                quote="This is a murder mystery novel."
                speaker="Christopher"
                analysis="One of Christopher's clearest declarations of authorial intent. By naming the genre, he frames everything that follows as detective fiction; yet the mystery he solves is not just 'who killed Wellington' but 'what happened in my family'. Haddon uses genre self-consciously: a domestic novel disguised as a whodunnit, a structure echoed in Christopher's nested investigations."
              />
              <QuoteCard
                quote="I find people confusing."
                speaker="Christopher"
                analysis="A simple, unembellished thesis statement that recurs across the novel. The brevity is itself characteristic of Christopher's voice. The remark applies equally to social interaction, idiom, emotion, and family secrets. Haddon places it early so that subsequent miscommunications are read against this baseline declaration."
              />
              <QuoteCard
                quote="I do not tell lies. Mother used to say that this was because I was a good person. But it is not because I am a good person. It is because I can&rsquo;t tell lies."
                speaker="Christopher"
                analysis="Christopher dismantles a moral compliment by replacing virtue with capacity. He does not claim moral superiority; he claims cognitive incapacity. This precision matters: the novel's critique of lying is structural, not pious. By the time the reader meets Ed's catastrophic lie, this principle has been carefully established as a fixed truth-stake against which the family drama will be measured."
              />
              <QuoteCard
                quote="Prime numbers are what is left when you have taken all the patterns away. I think prime numbers are like life. They are very logical but you could never work out the rules, even if you spent all your time thinking about them."
                speaker="Christopher"
                analysis="A rare moment of metaphor from Christopher, who claims elsewhere to dislike them. Note that this 'simile' is a logical rather than emotional comparison. The image positions life as patterned but not fully predictable, which is Christopher's working philosophy throughout the novel: structure exists, but exhaustive understanding does not. This is Haddon's clearest statement of the novel's epistemology."
              />
              <QuoteCard
                quote="I think people believe in heaven because they don&rsquo;t like the idea of dying, because they want to carry on living and they don&rsquo;t like the idea that other people will move into their house and put their things into the rubbish."
                speaker="Christopher"
                analysis="A sharply rationalist account of religious belief, presented with Christopher's characteristic literalism. The mundane image ('put their things into the rubbish') deflates the metaphysical question. The novel does not endorse Christopher's atheism wholesale, but his rational stance is treated as coherent rather than naive. Contrast with Reverend Peters."
              />
              <QuoteCard
                quote="I see everything."
                speaker="Christopher"
                analysis="Christopher's claim that he notices and remembers far more sensory detail than other people. He gives examples (seeing every detail of a field through a train window) to argue that the typical mind ignores most of what is in front of it. The line connects his cognitive style to his investigative ability and is offered as strength, not deficit. Haddon foregrounds this as a positive cognitive feature rather than a clinical symptom."
              />
              <QuoteCard
                quote="I think I would make a very good astronaut."
                speaker="Christopher"
                analysis="Christopher imagines space as a place free of crowds, idioms, and unpredictable people — only machines, mathematics, and silence. The astronaut fantasy is both literal ambition and metaphor for an environment in which his strengths are valued. Haddon uses it to suggest that what Christopher needs is not a cure but a context."
              />
              <QuoteCard
                quote="Mr Jeavons said that I liked maths because it was safe. He said I liked maths because it meant solving problems, and these problems were difficult and interesting but there was always a straightforward answer at the end. And what he meant was that maths wasn&rsquo;t like life because in life there are no straightforward answers at the end."
                speaker="Christopher reporting Mr Jeavons"
                analysis="A teacher's interpretation that Christopher records faithfully without endorsement. The passage encapsulates the novel's thematic dialectic: maths-as-order versus life-as-chaos. By relaying Mr Jeavons's words rather than agreeing with them, Christopher implicitly resists the framing — the rest of the book argues that life, while complicated, is not unintelligible."
              />
              <QuoteCard
                quote="I like dogs. You always know what a dog is thinking. It has four moods. Happy, sad, cross and concentrating. Also, dogs are faithful and they do not tell lies because they cannot talk."
                speaker="Christopher"
                analysis="Establishes the moral architecture of the novel: dogs as honest, humans as deceitful. The taxonomic listing of moods ('Happy, sad, cross and concentrating') is characteristic of Christopher's pattern-imposing mind. The final clause is a deceptively simple ethical claim that resurfaces tragically when Ed kills a dog and lies."
              />
              <QuoteCard
                quote="The world is full of obvious things which nobody by any chance ever observes."
                speaker="Sherlock Holmes (quoted by Christopher)"
                analysis="Christopher quotes Conan Doyle directly. The line legitimises his style of attention as detective methodology and aligns the reader with his cognitive perspective rather than treating him as anomalous. By embedding Holmes's voice in the novel, Haddon places Christopher in the genealogy of literary detectives — a profession that values exactly the traits Christopher possesses."
              />
              <QuoteCard
                quote="I screamed."
                speaker="Christopher"
                analysis="Often used as a one-line paragraph at moments of overload (the railway station, encounters with strangers). The minimalism is the point: where another narrator would describe panic at length, Christopher records the fact. The reader feels the magnitude through the cleared white space around the line. Haddon's prose treats sensory crisis with extreme economy."
              />
              <QuoteCard
                quote="And I know I can do this because I went to London on my own, and because I solved the mystery of Who Killed Wellington? and I found my mother and I was brave and I wrote a book and that means I can do anything."
                speaker="Christopher (closing words of the novel)"
                analysis="The novel's closing affirmation. The list of achievements is given in plain coordinated clauses ('and... and... and') rather than in a literary cadence — the syntax itself is Christopher's voice. Note the carefully chosen evidence: travel, deduction, family reunion, courage, and authorship. The sentence is hopeful but earned; it is also qualified by the realities of the novel (he is back in Swindon, his parents are still apart). Haddon avoids tying everything into a neat resolution while still permitting Christopher his triumph."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🔣">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">1. Prime Numbers</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher numbers his chapters with primes (2, 3, 5, 7, 11&hellip;) because, as
                  he says, &ldquo;I like prime numbers.&rdquo; Primes represent for him a perfect
                  category: rule-bound but irreducible. They are also &ldquo;what is left when you
                  have taken all the patterns away,&rdquo; making them an emblem of the novel&apos;s
                  philosophy &mdash; pattern exists, but is not exhaustive. The prime numbering is a
                  structural rebellion against the conventional novel and a daily declaration of
                  Christopher&apos;s intellectual identity.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">2. Maps and Diagrams</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is illustrated with maps, charts, geometric figures, train timetables,
                  and Christopher&apos;s own diagrams. They embody his preferred mode of
                  communication: the visual and the precise. Maps make hostile territory navigable;
                  they are the difference between chaos and order. The first time Christopher feels
                  in control of London is when he understands the Tube map &mdash; cartography as
                  cognitive rescue.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">3. The London Underground</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Underground is the most overwhelming environment in the novel: noise, crowds,
                  lights, rushing trains, the rescue of Toby from the rails. Yet it is also where
                  Christopher achieves his most self-reliant action. The Tube symbolises the modern
                  city as both trauma and possibility, and Christopher&apos;s navigation of it is
                  the novel&apos;s most visible image of his independence. The map of the Tube also
                  represents abstract pattern overlaid on overwhelming reality.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  4. Yellow and Brown (&ldquo;Black Day&rdquo;)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher classifies days by the colours of the cars he sees on the way to
                  school. Four red cars in a row make a &ldquo;Good Day,&rdquo; five make a
                  &ldquo;Super Good Day,&rdquo; and four yellow cars make a &ldquo;Black Day,&rdquo;
                  on which he must speak to nobody and avoid risks. He hates yellow and brown
                  specifically and refuses to eat foods that are these colours. The colour system is
                  both a coping mechanism and a form of personal augury &mdash; a private cosmology
                  that imposes order on the unpredictable. Yellow becomes a recurrent motif of
                  dread.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">5. Wellington (and Sandy)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Wellington, the murdered dog, is the novel&apos;s structuring symbol. As the
                  title&apos;s &ldquo;dog in the night-time,&rdquo; he is at once corpse, mystery,
                  and emblem of broken trust. Because dogs &ldquo;do not tell lies,&rdquo; killing
                  one is, in Christopher&apos;s moral universe, the most serious betrayal possible.
                  The puppy Sandy at the end is a carefully placed counter-symbol: a dog given
                  rather than taken, a small reconstruction of moral order between father and son.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">6. The Swiss Army Knife</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher takes his Swiss Army knife with him on the journey to London &mdash;
                  not primarily as a weapon but as a portable system of tools. The knife embodies
                  the same principle as his routines and lists: a discrete, ordered set of solutions
                  to a possible range of problems. It is a portable miniature of his ordered mind.
                  He uses it to defend himself when threatened, but its symbolic weight is in its
                  self-containment: everything he might need, in one calm object, that he controls.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">7. Toby (the Pet Rat)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Toby travels with Christopher from Swindon to London inside his pocket. As a
                  small, living, dependent creature, Toby symbolises Christopher&apos;s capacity for
                  tender attachment &mdash; a side of him that conventional emotional vocabulary
                  tends not to capture. The rescue from the Underground tracks is one of the
                  novel&apos;s most heroic scenes precisely because it is risked for a creature most
                  strangers would dismiss as vermin. Toby&apos;s eventual death by old age is the
                  novel&apos;s only natural, uncomplicated bereavement.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical, Biographical and Literary Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Mark Haddon (born 1962)`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Mark Haddon was born in Northampton in 1962 and educated at Uppingham and Merton
                  College, Oxford. Before <em>{tr(`Curious Incident`)}</em> he was best known as a
                  writer and illustrator of children&apos;s books and as a screenwriter. He had also
                  worked with young people with various disabilities, but he has consistently said
                  in interviews and in his blog that he did <strong>not</strong> conduct specific
                  research on autism or Asperger&apos;s when writing the novel and that he is not a
                  specialist on the subject. This is important context:{' '}
                  <em>{tr(`Curious Incident`)}</em> is a literary work, not a clinical document, and
                  Haddon has resisted readings that treat Christopher as a representative case
                  study.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">2003 Publication and Reception</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel was published simultaneously in adult and children&apos;s editions in
                  2003 by Jonathan Cape and David Fickling Books respectively &mdash; a then-unusual
                  decision that helped it cross age boundaries. It became an international
                  bestseller. It won the Whitbread Book of the Year (2003) and the Commonwealth
                  Writers&apos; Prize for Best First Book (2004), and was translated into more than
                  forty languages. It has remained a regular GCSE and IGCSE set text since.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Distinguishing Novel and Play`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Simon Stephens&apos;s stage adaptation premiered at the National Theatre in 2012
                  and later transferred to the West End and Broadway, winning multiple awards
                  including the Olivier Award for Best New Play. The play is a separate text by a
                  different author and contains structural changes (notably, Siobhan reads aloud
                  from Christopher&apos;s book, reframing the narrative voice) and certain scenes (a
                  curtain-call mathematics demonstration, theatrical staging of Christopher&apos;s
                  thought processes) that do not exist in the novel. Examiners typically expect
                  students to discuss the novel as Haddon wrote it; if a student does refer to the
                  play, they should label it explicitly as the Stephens adaptation.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Prime-Numbered Chapter Structure`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher numbers chapters using only the primes from 2 onwards. The novel
                  begins with chapter 2 and ends at 233 (a prime). There are 47 chapters in total.
                  This is not a layout flourish but an in-novel decision by the narrator, integrated
                  with the plot: Christopher tells the reader he has chosen primes because he likes
                  them. The structure is a formal extension of his cognition. It also,
                  interestingly, makes the text both longer and more disjointed in feel than a
                  conventional 1-2-3 numbering would, supporting the impression of a mind that
                  organises material idiosyncratically.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Sherlock Holmes &mdash; &ldquo;Silver Blaze&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The title is taken directly from Arthur Conan Doyle&apos;s 1892 short story
                  &ldquo;The Adventure of Silver Blaze,&rdquo; in which Holmes solves a mystery by
                  noting that the household dog did not bark in the night &mdash; the &ldquo;curious
                  incident&rdquo; being the dog&apos;s silence. Christopher names Holmes as a hero,
                  models his investigative method on Holmes&apos;s, and explicitly quotes the
                  &ldquo;Silver Blaze&rdquo; story. Haddon&apos;s use of the allusion places
                  Christopher in the lineage of literary detectives whose strengths are observation,
                  deduction, and the willingness to follow logic where it leads, regardless of
                  social convention.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Representation and the &ldquo;Autism&rdquo; Question
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel itself never uses the word &ldquo;autism&rdquo; or
                  &ldquo;Asperger&apos;s syndrome&rdquo;; the back-cover blurb on the original UK
                  adult edition referred to Asperger&apos;s, but Haddon has subsequently distanced
                  himself from this framing. He has written publicly that he did no specific
                  research and prefers to think of Christopher as a singular fictional character.
                  Examiners increasingly want students to handle this with care: it is appropriate
                  to say that Christopher&apos;s perceptual and social experiences resemble what is
                  sometimes described as autistic experience, but inappropriate to treat the novel
                  as a documentary or to flatten Christopher into a diagnostic label. Recent
                  autistic writers and critics have engaged with the novel variously &mdash; some
                  celebrating, some critiquing it &mdash; and a sophisticated response will
                  acknowledge this ongoing conversation. When citing specific Haddon comments, refer
                  to his blog post &ldquo;Asperger&apos;s &amp; Autism&rdquo; and always check the
                  exact wording against the original source before quoting.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Swindon and Setting`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher lives in Swindon, a railway and industrial town in Wiltshire. The
                  choice of Swindon &mdash; ordinary, functional, unromantic &mdash; grounds the
                  novel in the everyday rather than in Gothic or fantastical territory. The contrast
                  with London is geographical (small town vs metropolis) and sensorial (manageable
                  vs overwhelming). The Swindon-to-London journey via Paddington is a real route
                  familiar to many readers, which intensifies the realism of Christopher&apos;s
                  panic.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Special Education and Educational Context
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher attends a special school in Swindon. The novel is set in a
                  recognisable early-2000s UK educational landscape: A-Levels still examined
                  externally, special schools serving children with a range of needs, a teacher
                  (Siobhan) who has the time and training to support him personally.
                  Christopher&apos;s aspiration to take A-Level Maths early and go to university is
                  presented as exceptional but possible, reflecting ongoing real-world conversations
                  about supporting neurodivergent students into higher education.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── STRUCTURE */}
        <div id="structure">
          <Section title={tr(`Narrative Structure and Form`)} icon="🔗">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`First-Person Limited Narration`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The entire novel is narrated by Christopher in the first person. The reader has
                  access to no perspective except his. This produces some of the novel&apos;s most
                  powerful effects: dramatic irony when Christopher fails to grasp the implications
                  of what he reports (Mrs Alexander&apos;s revelation, his mother&apos;s letters),
                  and a sustained sympathetic intimacy that bypasses the conventional authorial
                  commentary that might otherwise pathologise him.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Detective Fiction Structure`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel uses the conventions of the murder mystery: a corpse, suspects, an
                  amateur investigator, door-to-door inquiries, a trail of clues, a confession. Yet
                  the genre is partly a vehicle: the &ldquo;real&rdquo; mystery that emerges is not
                  Wellington but the family. Haddon uses Christopher&apos;s genre awareness
                  self-consciously &mdash; Christopher knows he is writing a detective novel and
                  tells the reader so.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Embedded Documents and Diagrams`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The narrative contains embedded letters (Judy&apos;s letters to Christopher),
                  maths problems with worked solutions, illustrations, maps, and Christopher&apos;s
                  own charts. The novel is therefore typographically heterogeneous in a way that
                  mirrors Christopher&apos;s mind. The appendix containing the A-Level Maths
                  solution is the ultimate example: a non-narrative document attached to a narrative
                  as evidence.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Digressions Numbered with Primes`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Christopher&apos;s narration is regularly interrupted by digressive chapters about
                  prime numbers, the Monty Hall problem, the Cottingley Fairies, the universe, and
                  so on. These digressions slow the plot but build the texture of his mind. Each is
                  housed in its own prime-numbered chapter; the digression is therefore a unit of
                  cognition. Haddon uses these to deepen characterisation without dialogue.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Chronology and the Two Crimes`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel&apos;s plot is essentially linear, but it contains two crimes that
                  overlap: the foreground crime (Wellington&apos;s killing) and the background crime
                  (Ed&apos;s long-running deception about Judy). Christopher&apos;s progress through
                  the foreground case unwittingly cracks the background case open. The structural
                  cleverness is that the resolution of the dog mystery is also the destruction of
                  the family lie, even though Christopher set out to investigate only the former.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Appendix`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel ends with an appendix in which Christopher works through one of his
                  A-Level Maths exam questions in full. This is a striking formal choice: the novel
                  ends not with a paragraph of resolution but with mathematics. It is
                  Christopher&apos;s proof of competence and also Haddon&apos;s reminder that the
                  world Christopher inhabits most happily is one of formal demonstration. The play
                  does not include this appendix in the same form.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Tone</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The tone is flat, literal, and unsentimental. There are no exclamation marks of
                  authorial drama; Christopher reports both the discovery of a dead dog and the
                  rescue of his pet rat in the same calm register. Comedy and pathos arise from the
                  reader&apos;s awareness of the gap between Christopher&apos;s reporting and the
                  emotional weight of the events. Haddon&apos;s great craft achievement is producing
                  a moving novel out of a determinedly affectless voice.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning for Common Questions`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five GCSE/IGCSE-style plans plus three A-Level plans. Each contains a thesis,
              paragraph structure, and suggested verbatim quotations.
            </p>

            <div className="space-y-6">
              {/* GCSE Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 1: How does Haddon present Christopher&apos;s relationship with truth and
                  lies?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon presents Christopher&apos;s relationship with truth as cognitive rather
                      than moral &mdash; a structural condition that makes the family&apos;s
                      deceptions devastating but also makes his eventual reconciliation with his
                      father a hard-won ethical achievement.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Christopher&apos;s rule
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I do not tell lies&hellip; It is because I can&rsquo;t tell
                      lies.&rdquo; Analyse the redefinition of honesty as cognitive incapacity. Note
                      Haddon&apos;s precision: Christopher is not boasting but explaining.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The lie about mother
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The hidden letters and the lie that Judy died of a heart attack. Discuss how
                      Ed&apos;s lie violates not just trust but Christopher&apos;s entire epistemic
                      framework.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Animals and the moral category
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Dogs are faithful and they do not tell lies because they cannot
                      talk.&rdquo; Show how the killing of Wellington combines lying and violence
                      into a single act, and why that breaks Christopher&apos;s moral universe twice
                      over.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Restoring trust
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The puppy Sandy and Ed&apos;s slow rebuilding of relationship. Note that trust
                      is not restored by speech alone but by demonstrated, repeated honesty over
                      time.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon perhaps suggests that truth-telling is not a moral luxury but a
                      cognitive necessity for those who, like Christopher, build their world on it
                      &mdash; and that the rest of us underestimate its weight.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 2: How does Haddon present Christopher&apos;s journey to London?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon uses the journey to London as a literalisation of Christopher&apos;s
                      growing independence, dramatising his fear and resilience in equal measure to
                      redefine bravery for the reader.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Departure
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Discuss the planning and the choice of objects: the Swiss Army knife, Toby,
                      the cashpoint card. Christopher&apos;s preparation reflects his ordered mind
                      responding to extraordinary circumstances.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Sensory overload at Swindon and Paddington
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I screamed.&rdquo; Discuss Haddon&apos;s minimalist treatment of
                      crisis. The crowds, signs, noise, and lights are listed rather than
                      dramatised, putting the reader inside Christopher&apos;s perceptual
                      experience.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Toby on the rails
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Christopher climbs onto the Tube tracks to rescue Toby. Discuss this as an act
                      of love disguised as a calculation. The chapter is one of the novel&apos;s
                      most physically dangerous and morally vivid moments.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Arrival and aftermath
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The reunion with Judy is presented through Christopher&apos;s practical
                      concerns rather than sentimental relief. Conclude on Haddon&apos;s
                      redefinition of bravery: it is not the absence of fear but the willingness to
                      keep moving through it.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 3: How does Haddon present the relationship between Christopher and his
                  father?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon presents Ed Boone as a flawed but genuinely loving father whose lies
                      almost destroy his relationship with Christopher, and uses their
                      reconciliation to argue that family love is rebuilt slowly through patience
                      and honesty rather than through grand gestures.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Daily love
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The opening establishes Ed as the parent who manages routine, food, and
                      bedtime. Show how Haddon foregrounds practical care as an expression of love.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The lie
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ed&apos;s confession that Judy is alive. Note the language of love mixed with
                      self-justification (&lsquo;I thought it would be easier&rsquo;). Haddon
                      resists making Ed simply a villain.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The killing of Wellington
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ed&apos;s admission that he killed Wellington in fury. Discuss this as the
                      moment Christopher logically concludes his father is dangerous. The novel does
                      not soften this implication.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Sandy and slow trust
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The puppy at the end. Discuss how Haddon refuses an easy reconciliation: trust
                      is rebuilt only on Christopher&apos;s terms and over time. The closing
                      chapters are hopeful but qualified.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 4: How does Haddon use first-person narration to shape the reader&apos;s
                  response to Christopher?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      By giving the entire narrative to Christopher&apos;s voice, Haddon ensures
                      that the reader experiences the world from inside his perception, producing
                      sympathy without sentimentality and dramatic irony without condescension.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Voice and register
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;It was 7 minutes after midnight.&rdquo; Discuss the precise, literal
                      opening and what it tells the reader about Christopher before any explicit
                      characterisation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Dramatic irony
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mrs Alexander&apos;s revelation. Christopher misses the implication; the
                      reader does not. Discuss how Haddon engineers a gap between narrator and
                      reader without ever patronising the narrator.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Cognitive transparency
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Digressions about primes, the Monty Hall problem, the universe. The reader is
                      shown how Christopher thinks, not told about it. Discuss this as Haddon&apos;s
                      answer to the problem of representing a mind unlike the reader&apos;s.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Affect through restraint
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I screamed.&rdquo; Argue that the flatness of the narration intensifies
                      emotional impact rather than reducing it. The reader supplies what Christopher
                      does not write.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE 5: How does Haddon present ideas about order and chaos in the novel?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon presents order &mdash; in the form of mathematics, lists, prime
                      numbers, and routines &mdash; not as a defect of Christopher&apos;s mind but
                      as a coherent strategy for living in a sensorily overwhelming world, while
                      showing that the world&apos;s disorder cannot be wholly tamed.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Prime numbers and chapter structure
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Prime numbers are what is left when you have taken all the patterns
                      away.&rdquo; Discuss the chapter numbering as an extension of
                      Christopher&apos;s philosophy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Yellow vs red, &lsquo;Black Days&rsquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Discuss the colour-coding system as a private method of imposing
                      predictability. Haddon presents this as a genuine, working coping strategy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The London Underground
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Tube map as an abstract pattern superimposed on chaos. Christopher only
                      manages London once he has the map; pattern is what makes the world bearable.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The limits of order
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The hidden letters and Ed&apos;s confession reveal what Christopher&apos;s
                      rules cannot predict. Haddon shows that order is necessary but not sufficient;
                      love and trust are partly irrational.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 1 */}
              <div className="rounded-xl border-2 border-violet-500/40 bg-violet-500/10/40 p-5">
                <p className="text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level / Higher Tier
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level 1: &ldquo;The novel&apos;s strength lies in its formal innovation rather
                  than in its plot.&rdquo; Discuss with reference to Haddon&apos;s narrative
                  methods.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The plot is conventional &mdash; a domestic mystery with a coming-of-age arc
                      &mdash; but the formal architecture (prime-numbered chapters, embedded
                      diagrams, first-person literalism, the appendix) is genuinely innovative and
                      inseparable from the novel&apos;s meaning.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Form as character
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The prime-numbered chapters and digressions on mathematics. Discuss how the
                      structure is not decorative but mimetic of Christopher&apos;s mind.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Detective genre repurposed
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Compare with Conan Doyle. Haddon adopts the genre of the murder mystery but
                      redirects its energy towards a domestic revelation, refiguring the form as a
                      vehicle for psychological realism.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The non-narrative appendix
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Concluding the novel with a worked maths solution is a striking generic
                      violation. Discuss its semantic weight: a novel that ends in a proof is making
                      a claim about how Christopher inhabits the world.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Counter-argument and resolution
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Acknowledge the strength of the plotting (the double-mystery structure is
                      elegant). Conclude that form and content are inseparable in Haddon&apos;s
                      achievement: the &lsquo;innovation&rsquo; is precisely the marriage of
                      narrative and typography.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 2 */}
              <div className="rounded-xl border-2 border-violet-500/40 bg-violet-500/10/40 p-5">
                <p className="text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level / Higher Tier
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level 2: To what extent should{' '}
                  <em>{tr(`The Curious Incident of the Dog in the Night-Time`)}</em> be read as a
                  representation of autistic experience?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel can be read sympathetically as resembling an autistic perspective,
                      but Haddon&apos;s public statements and the text&apos;s deliberate refusal to
                      use diagnostic vocabulary suggest the more responsible reading frames
                      Christopher as a singular literary character whose strengths and challenges
                      resonate with, but are not identical to, real autistic experience.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Textual evidence of autistic-coded experience
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sensory overload, literalism, dislike of touch, special interests, routines.
                      Show how Haddon renders these convincingly through first-person narration.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The novel&apos;s linguistic restraint
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The words &lsquo;autism&rsquo; and &lsquo;Asperger&apos;s&rsquo; never appear
                      in the novel. Discuss this as a deliberate choice and contrast with the early
                      dust-jacket marketing.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Haddon&apos;s public position
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon has stated he did no specific research on autism and prefers not to
                      treat the novel as documentary. Discuss the implications for reading practice.{' '}
                      Always check the exact wording against a verified copy of the source when
                      quoting Haddon&apos;s blog.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The autistic critical response
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Acknowledge that autistic writers have responded to the novel variously
                      &mdash; some valuing it as a sympathetic portrait, others critiquing it as a
                      non-autistic author&apos;s imagining. A sophisticated answer takes this
                      conversation seriously.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel&apos;s power is literary: it gives readers access to a different way
                      of perceiving without claiming clinical authority. That is both its strength
                      and the source of its ongoing critical debate.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 3 */}
              <div className="rounded-xl border-2 border-violet-500/40 bg-violet-500/10/40 p-5">
                <p className="text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level / Higher Tier
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level 3: Compare Haddon&apos;s use of detective fiction conventions in{' '}
                  <em>{tr(`Curious Incident`)}</em> with their use in Conan Doyle&apos;s Sherlock
                  Holmes stories.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haddon adopts the surface architecture of the Holmes story &mdash;
                      observation, deduction, the &lsquo;curious incident&rsquo; itself &mdash; and
                      reorients it from public spectacle to private psychology, transforming the
                      detective genre into a vehicle for domestic and personal revelation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The borrowed title
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Silver Blaze&rdquo; (1892) and Holmes&apos;s &lsquo;curious incident of
                      the dog in the night-time.&rsquo; Discuss the act of titular borrowing as a
                      paratextual genre signal.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Christopher as Holmesian observer
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The world is full of obvious things which nobody by any chance ever
                      observes.&rdquo; Christopher embodies Holmes&apos;s observational virtues but
                      applies them to the pedestrian rather than to the sensational.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The Watson-figure reimagined
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Holmes has Watson; Christopher has Siobhan and the reader. Discuss how Haddon
                      collapses the detective-and-narrator structure into a single first-person
                      voice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Genre transformation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In Holmes the mystery is exterior and the detective remains psychologically
                      intact. In Haddon the mystery becomes interior &mdash; the detective&apos;s
                      own family &mdash; and the resolution alters the detective&apos;s life.
                      Conclude on Haddon&apos;s use of generic conventions to make the detective
                      novel a domestic and developmental form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* ────────────────────────────────── GRADE 9 POINTS */}
      <div id="grade-9">
        <Section title={tr(`Grade 9 Exemplar Points and Interpretations`)} icon="⭐">
          <p className="text-sm text-muted-foreground mb-4 italic">
            These higher-level interpretations demonstrate the sophisticated analysis needed for top
            grades. Each goes beyond surface reading to consider authorial intent, alternative
            readings, and structural significance.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                1. The Form Is the Character
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A surface reading describes Christopher&apos;s personality and lists his routines. A
                Grade 9 reading recognises that Haddon&apos;s formal choices &mdash; the
                prime-numbered chapters, embedded diagrams, mathematical digressions, the appendix
                &mdash; are not ornaments to characterisation but its primary mode. Christopher is
                not described; he is instantiated. The novel&apos;s structure is itself an extended
                characterisation. This argument allows a candidate to write seriously about
                typography, pagination, and pacing as elements of meaning rather than as background.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                2. The Double-Mystery Architecture
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novel runs two crimes in parallel: Wellington&apos;s killing (foreground) and
                Ed&apos;s long-running deception (background). Christopher believes he is
                investigating one and in fact uncovers both. Top-band candidates write about this as
                a structural pun: the form of the detective novel allows Haddon to smuggle in a
                domestic psychological novel. Discuss how the double-mystery imposes dramatic irony
                on the reader: we suspect the deeper mystery is the family before Christopher does,
                which lets Haddon control the emotional pacing across two simultaneous arcs.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                3. Haddon&apos;s Restraint as Ethical Choice
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The flat tone is not just stylistic; it is ethical. By refusing to provide
                explanatory authorial commentary about Christopher&apos;s mind, Haddon refuses to
                pathologise him. Other authors might have framed Christopher as a problem to be
                explained; Haddon presents him as a person to be heard. This is a craft choice with
                moral weight, and a sophisticated response can connect it to wider conversations
                about how literature represents minority experience.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                4. The Refusal of Clinical Vocabulary
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The words &lsquo;autism&rsquo; and &lsquo;Asperger&apos;s&rsquo; appear nowhere in
                the novel itself. This is not an oversight: it is a deliberate decision to keep
                Christopher singular rather than representative. A Grade 9 candidate distinguishes
                the novel&apos;s position from the marketing&apos;s position (early dust-jackets did
                refer to Asperger&apos;s) and from later readers&apos; positions, and uses
                Haddon&apos;s public clarifications to argue that the novel sits within a literary
                rather than a clinical tradition.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                5. Comedy as a Sympathy Mechanism
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novel is often funny &mdash; the literalism, the misunderstood idioms, the
                professional astronaut digressions. A surface reading either misses the comedy or
                treats it as light relief. A sophisticated reading argues that Haddon uses humour to
                bring the reader into Christopher&apos;s point of view: laughing with him rather
                than at him, producing alignment without sentimentality. The comic register is
                therefore part of the novel&apos;s ethical achievement.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                6. The Mother&apos;s Letters as Counter-Narrative
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Judy&apos;s letters represent the only sustained voice in the novel that is not
                Christopher&apos;s. They give the reader a different perspective on the family
                &mdash; a mother who felt unable to cope, who loved her son, who knew she was
                failing him. A top-band candidate notes the formal significance: the only break from
                Christopher&apos;s first-person voice comes in the form of letters, which
                Christopher transcribes. The novel is therefore epistolary at one of its most
                important moments, and the contrast in voice (Judy&apos;s emotional adult prose vs
                Christopher&apos;s literal narration) is itself a piece of meaning.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                7. The Open, Earned Ending
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                &ldquo;That means I can do anything.&rdquo; The novel closes on optimism, but a
                careful reader notices it is qualified: Christopher is back in Swindon; his parents
                are still separated; the family is held together by negotiation rather than
                resolved. Haddon refuses both a fairy-tale reunion and a tragic conclusion. The
                ending&apos;s power is that it lets Christopher claim victory on his own terms while
                leaving the wider family situation realistically unresolved. A Grade 9 candidate
                identifies this as a deliberate refusal of generic closure.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                8. The Appendix as Statement of Worldview
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Most novels conclude with a sentence; Haddon concludes with a maths proof. The
                appendix is not an extra; it is the novel&apos;s final chapter. By ending with a
                worked solution to an A-Level Maths question, Haddon makes a claim about
                Christopher&apos;s relationship to the world: it is a place where mathematical
                reasoning offers refuge, demonstrable competence, and joy. The appendix is also
                self-evidence: Christopher, the narrator, demonstrates on the page the mathematical
                competence he describes. His abilities are exceptional in some areas, though the
                novel resists reducing him to a single label. Note too that this appendix is a
                feature of the novel and is not present in the same form in the Stephens stage
                adaptation.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* ────────────────────────────────── PRACTICE QUESTIONS */}
      <div id="practice-questions">
        <Section title={tr(`Practice Questions`)} icon="📝">
          <p className="text-sm text-muted-foreground mb-4">
            Exam-style questions covering the most commonly tested areas. Consider how you would
            structure a response using PEEL paragraphs, embedded verbatim quotations, and contextual
            links to Haddon&apos;s methods and the novel&apos;s 2003 publication.
          </p>
          <div className="space-y-3">
            {[
              {
                q: 'How does Haddon present the theme of truth and lies in The Curious Incident of the Dog in the Night-Time? Refer closely to the novel.',
                marks: 30,
                level: 'GCSE / IGCSE',
              },
              {
                q: "Explore how Haddon presents Christopher's relationship with his father throughout the novel.",
                marks: 30,
                level: 'GCSE / IGCSE',
              },
              {
                q: "How does Haddon use the journey to London to present Christopher's growing independence?",
                marks: 30,
                level: 'GCSE / IGCSE',
              },
              {
                q: "Discuss the importance of Wellington's death to the structure and themes of the novel.",
                marks: 30,
                level: 'GCSE / IGCSE',
              },
              {
                q: "How does Haddon use first-person narration to shape the reader's response to Christopher?",
                marks: 30,
                level: 'GCSE / IGCSE',
              },
              {
                q: "'The novel is fundamentally about communication failure.' How far do you agree with this view of Haddon's novel?",
                marks: 40,
                level: 'A-Level',
              },
              {
                q: 'Explore how Haddon uses the conventions of detective fiction in The Curious Incident of the Dog in the Night-Time, with reference to one or more works of Arthur Conan Doyle.',
                marks: 40,
                level: 'A-Level',
              },
              {
                q: "To what extent should The Curious Incident of the Dog in the Night-Time be read as a representation of neurodivergent experience? Refer in your answer to Haddon's narrative methods and to the novel's reception.",
                marks: 40,
                level: 'A-Level',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">Question {i + 1}</p>
                  <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                    {item.level}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.q} <span className="font-semibold">[{item.marks} marks]</span>
                </p>
              </div>
            ))}
          </div>
        </Section>
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
              <strong>{tr(`Distinguish novel from play.`)}</strong> Refer to &ldquo;Haddon&apos;s
              2003 novel&rdquo; or &ldquo;the novel&rdquo; throughout. If you must mention the 2012
              stage adaptation, say &ldquo;the Stephens adaptation&rdquo; explicitly.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Handle representation carefully.`)}</strong> The novel does not use the
              words &lsquo;autism&rsquo; or &lsquo;Asperger&apos;s&rsquo;. Discuss Christopher as a
              singular literary character whose experience may resemble neurodivergent perspectives
              without flattening him into a diagnosis.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Embed exact quotations.`)}</strong> Use Christopher&apos;s actual words:
              &ldquo;I do not tell lies&rdquo;, &ldquo;I find people confusing&rdquo;, &ldquo;Prime
              numbers are what is left when you have taken all the patterns away.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Haddon&apos;s methods.`)}</strong> Discuss first-person narration,
              prime-numbered chapters, embedded diagrams, the appendix, the borrowed Holmes title,
              and the flat tone as deliberate craft choices.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Refer to the writer&apos;s intentions.`)}</strong> &ldquo;Haddon perhaps
              suggests&hellip;&rdquo; or &ldquo;Haddon uses Christopher&apos;s voice
              to&hellip;&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Link the title to Sherlock Holmes.`)}</strong> The phrase &lsquo;the
              curious incident of the dog in the night-time&rsquo; is a verbatim quotation from
              Conan Doyle&apos;s &ldquo;Silver Blaze&rdquo; (1892); reference this for top marks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise terminology.`)}</strong> &ldquo;First-person narrator,&rdquo;
              &ldquo;dramatic irony,&rdquo; &ldquo;epistolary insertion&rdquo; (for the letters),
              &ldquo;genre repurposing,&rdquo; and &ldquo;mimetic form&rdquo; will all earn
              analytical marks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole novel.`)}</strong> Reference the opening (Wellington),
              the middle (the letters and confession), the journey, and the appendix to show full
              coverage.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`The Curious Incident of the Dog in the Night-Time`)}</em> by Mark Haddon was
          first published in 2003 and remains in copyright. Quotations on this page are reproduced
          briefly for the purposes of educational study and literary criticism. The 2012 stage
          adaptation by Simon Stephens is a separate copyrighted work; differences are flagged where
          they appear.
        </p>
      </footer>
    </>
  )
}
