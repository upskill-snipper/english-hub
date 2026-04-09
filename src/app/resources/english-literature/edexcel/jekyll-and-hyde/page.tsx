import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/jekyll-and-hyde' },
  title:
    "Jekyll and Hyde Study Guide — Edexcel GCSE English Literature",
  description:
    "Complete Jekyll and Hyde revision guide for Edexcel GCSE English Literature Paper 2. Plot summary, character analysis, themes, 15+ key quotes, Victorian context, and exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PLOT_SUMMARY = [
  {
    chapter: "Chapters 1–2",
    title: "The Door and the Search for Hyde",
    summary:
      "Mr Utterson, a respectable London lawyer, hears from his cousin Enfield about a disturbing incident: a man named Hyde trampled a young girl and paid compensation with a cheque signed by Dr Jekyll. Utterson discovers that Jekyll's will leaves everything to Hyde. Troubled, Utterson visits Dr Lanyon, who has fallen out with Jekyll over his 'unscientific' experiments. Utterson stakes out the door and finally meets Hyde — finding him inexplicably repulsive.",
  },
  {
    chapter: "Chapters 3–4",
    title: "Jekyll's Dinner Party and the Carew Murder",
    summary:
      "Jekyll reassures Utterson that Hyde is under control and can be dismissed at any time. A year later, Hyde brutally murders Sir Danvers Carew — a respected MP — beating him to death with a cane. Utterson identifies Hyde and visits Jekyll, who claims Hyde has fled and shows a forged letter. Utterson's clerk Guest notices the handwriting matches Jekyll's own.",
  },
  {
    chapter: "Chapters 5–6",
    title: "The Incident of the Letter and Lanyon's Death",
    summary:
      "Hyde disappears and Jekyll seems reformed — sociable and charitable for two months. Then Jekyll suddenly withdraws from society. Dr Lanyon, visibly shaken, falls ill and dies, leaving a letter for Utterson to be opened only after Jekyll's death or disappearance. Utterson tries to visit Jekyll but is refused.",
  },
  {
    chapter: "Chapters 7–8",
    title: "The Window and the Last Night",
    summary:
      "Utterson and Enfield see Jekyll at a window, looking desperately ill, before he withdraws with an expression of 'abject terror.' Jekyll's servant Poole seeks Utterson's help — Jekyll has been locked in his cabinet for days, his voice has changed, and he sends desperate notes for a particular chemical. They break down the door and find Hyde's body in Jekyll's clothes, dead by suicide, with a confession beside him.",
  },
  {
    chapter: "Chapters 9–10",
    title: "Lanyon's Narrative and Jekyll's Full Statement",
    summary:
      "Lanyon's letter reveals that he witnessed Hyde transform into Jekyll before his eyes — the shock destroyed his will to live. Jekyll's own statement explains everything: he created a potion to separate good from evil in human nature. As Hyde, he felt liberated and guiltless. But Hyde grew stronger, the transformations became involuntary, and the chemical ran out. Trapped as Hyde with no escape, Jekyll writes his confession and takes his life.",
  },
];

const CHARACTERS = [
  {
    name: "Dr Henry Jekyll",
    description:
      "A wealthy, respectable London doctor who creates a potion to separate the good and evil sides of his nature. Jekyll is outwardly virtuous but secretly desires to indulge his darker impulses without consequence. His experiment represents the Victorian obsession with maintaining a respectable facade. His tragedy is that he underestimates the power of his evil side — Hyde grows stronger until Jekyll can no longer control the transformations.",
    key_quotes: [
      '"Man is not truly one, but truly two"',
      '"I learned to recognise the thorough and primitive duality of man"',
      '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse"',
      '"I bring the life of that unhappy Henry Jekyll to an end"',
    ],
  },
  {
    name: "Mr Edward Hyde",
    description:
      "Jekyll's alter ego — the physical embodiment of his repressed evil. Hyde is smaller than Jekyll (because evil has been suppressed and underdeveloped), younger, and universally repulsive. Everyone who meets him feels an instinctive disgust they cannot explain. He is associated with animalistic imagery and darkness. Hyde commits escalating acts of violence — from trampling a child to murdering Carew — and feels no remorse.",
    key_quotes: [
      '"Mr Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation"',
      '"Satan\'s signature upon a face"',
      '"ape-like fury"',
      '"the man seems hardly human"',
    ],
  },
  {
    name: "Mr Gabriel John Utterson",
    description:
      "Jekyll's lawyer and the novel's main narrator-figure. Utterson is the epitome of Victorian respectability — reserved, rational, loyal, and discreet. He investigates Hyde out of concern for his friend but is limited by his commitment to reputation and propriety. He represents the reader: trying to make rational sense of irrational events. His reluctance to pry reflects the Victorian code of silence around scandal.",
    key_quotes: [
      '"If he be Mr Hyde, I shall be Mr Seek"',
      '"I incline to Cain\'s heresy... I let my brother go to the devil in his own way"',
    ],
  },
  {
    name: "Dr Hastie Lanyon",
    description:
      "A conventional, respected doctor and former friend of Jekyll. Lanyon dismissed Jekyll's experiments as 'unscientific balderdash.' When he witnesses Hyde's transformation into Jekyll, the shock is so profound that he dies within weeks. Lanyon represents orthodox Victorian science — he cannot accommodate what falls outside rational understanding. His death shows the danger of confronting truths that society refuses to acknowledge.",
    key_quotes: [
      '"I have had a shock... and I shall never recover"',
      '"This person... had something seizing, surprising and revolting"',
    ],
  },
  {
    name: "Poole",
    description:
      "Jekyll's loyal butler who ultimately breaks the code of servant discretion when his master's safety is at stake. His fear and loyalty drive the climactic scene where he and Utterson break down the cabinet door. Poole's observations — the changed voice, the desperate notes — build suspense and confirm that something is deeply wrong.",
    key_quotes: [
      '"I have been afraid for about a week... and I can bear it no more"',
    ],
  },
  {
    name: "Sir Danvers Carew",
    description:
      "An elderly MP and client of Utterson, murdered by Hyde in a fit of unprovoked rage. Carew represents innocent respectability — his murder demonstrates that Hyde's violence is random, senseless, and escalating. The brutality of the attack (beating him to death with a cane) shocks Victorian society and triggers the manhunt for Hyde.",
    key_quotes: [],
  },
];

const THEMES = [
  {
    theme: "Duality of Human Nature",
    description:
      "The novel's central theme. Stevenson argues that every person contains both good and evil. Jekyll's experiment does not create evil — it releases what was already there. The tragedy is not that Hyde exists, but that Jekyll believed he could separate the two without consequence. Stevenson challenges the Victorian belief that people are simply 'good' or 'bad.'",
    quotes: [
      '"Man is not truly one, but truly two"',
      '"all human beings... are commingled out of good and evil"',
      '"I learned to recognise the thorough and primitive duality of man"',
    ],
  },
  {
    theme: "Reputation and Hypocrisy",
    description:
      "Victorian society demanded an impeccable public image. Jekyll creates Hyde not because he is uniquely evil, but because he cannot reconcile his desires with his reputation. The novel suggests that the pressure to appear respectable actually breeds hypocrisy and drives evil underground. Every male character in the novella is concerned with appearances and discretion.",
    quotes: [
      '"I was in no sense a hypocrite; both sides of me were in dead earnest"',
      '"I concealed my pleasures"',
      '"like a district of some city in a nightmare"',
    ],
  },
  {
    theme: "Science and the Limits of Knowledge",
    description:
      "Jekyll's experiment represents science without moral limits — a Victorian anxiety as Darwin, industrialisation, and new technologies disrupted old certainties. Lanyon represents conventional science; Jekyll pushes beyond accepted boundaries. Stevenson warns that knowledge without ethics leads to destruction. The novel anticipates modern debates about the dangers of unchecked scientific ambition.",
    quotes: [
      '"I hesitated long before I put this theory to the test of practice"',
      '"the temptation of a discovery so singular and profound"',
      '"O my poor old Harry Jekyll, if ever I read Satan\'s signature upon a face, it is on that of your new friend"',
    ],
  },
  {
    theme: "Secrecy and Silence",
    description:
      "The novella is structured around secrecy. Characters refuse to discuss what troubles them, letters are sealed and deferred, and doors remain locked. Utterson, Enfield, and Lanyon all choose not to investigate too deeply — reflecting the Victorian code that a gentleman does not pry. This culture of silence enables Jekyll's double life and allows evil to flourish unchecked.",
    quotes: [
      '"I make it a rule of mine: the more it looks like Queer Street, the less I ask"',
      '"I let my brother go to the devil in his own way"',
      '"I cannot say that I care what becomes of Hyde; I am quite done with him"',
    ],
  },
  {
    theme: "Violence and Repression",
    description:
      "Hyde's violence is the eruption of desires that Jekyll has repressed. The trampling of the girl and the murder of Carew are gratuitous and disproportionate — they suggest that repression does not eliminate desire but amplifies it. Stevenson implies that the stricter the moral code, the more violent the inevitable release. Hyde grows stronger as Jekyll tries harder to suppress him.",
    quotes: [
      '"with ape-like fury, he was trampling his victim under foot"',
      '"the bones were audibly shattered"',
      '"the body jumped upon the roadway"',
    ],
  },
  {
    theme: "The Gothic and the Urban",
    description:
      "Stevenson uses London as a Gothic landscape — fog, labyrinthine streets, gaslight, and locked doors create an atmosphere of claustrophobia and menace. The city mirrors Jekyll's psychology: respectable facades conceal dark interiors. Hyde's door (plain, blistered, without a knocker) is the back entrance to Jekyll's grand house — two faces of the same building, just as Hyde is the hidden face of Jekyll.",
    quotes: [
      '"the fog still slept on the wing above the drowned city"',
      '"like a district of some city in a nightmare"',
      '"the door, which was equipped with neither bell nor knocker, was blistered and distained"',
    ],
  },
];

const KEY_QUOTES = [
  {
    quote: '"Man is not truly one, but truly two"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "The thesis of the entire novella. Jekyll recognises the fundamental duality of human nature. Stevenson challenges the Victorian assumption that respectable people are morally simple.",
  },
  {
    quote:
      '"I learned to recognise the thorough and primitive duality of man"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "'Primitive' suggests this duality is ancient and unavoidable — not a flaw but a fundamental part of being human. It cannot be educated or moralised away.",
  },
  {
    quote:
      '"I concealed my pleasures"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "Reveals Victorian hypocrisy. Jekyll's 'pleasures' are never specified — Stevenson leaves them ambiguous, forcing readers to confront their own hidden desires.",
  },
  {
    quote: '"Satan\'s signature upon a face"',
    speaker: "Utterson (Ch. 2)",
    significance:
      "Religious imagery linking Hyde to the devil. Victorian physiognomy believed that moral corruption was physically visible — Hyde's appearance reflects his evil nature.",
  },
  {
    quote:
      '"Mr Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation"',
    speaker: "Narrator (Ch. 2)",
    significance:
      "Hyde's repulsiveness is felt but cannot be rationally explained — it operates on instinct. 'Dwarfish' suggests evil has been stunted by years of repression. The inability to name the deformity reflects Victorian reluctance to articulate uncomfortable truths.",
  },
  {
    quote: '"the man seems hardly human"',
    speaker: "Utterson (Ch. 2)",
    significance:
      "Dehumanisation of Hyde. Connects to Darwin's theory of evolution — Hyde represents a regression to a pre-civilised, animalistic state. Links to Victorian fears about degeneration.",
  },
  {
    quote: '"ape-like fury"',
    speaker: "Narrator (Ch. 4)",
    significance:
      "Simile comparing Hyde to a primate during Carew's murder. Evokes Darwinian anxiety — the idea that beneath civilisation, humans are still animals. 'Fury' suggests uncontrolled, instinctive rage.",
  },
  {
    quote:
      '"the bones were audibly shattered and the body jumped upon the roadway"',
    speaker: "Narrator (Ch. 4)",
    significance:
      "The graphic violence of Carew's murder shocks Victorian sensibilities. The passive construction ('were shattered') distances the reader while emphasising the brutality. The body 'jumped' — even in death, Hyde's violence has physical force.",
  },
  {
    quote:
      '"If he be Mr Hyde, I shall be Mr Seek"',
    speaker: "Utterson (Ch. 2)",
    significance:
      "A pun on 'hide and seek' that encapsulates the novella's structure — a quest to uncover hidden truth. Utterson represents rational investigation, though he ultimately fails to prevent tragedy.",
  },
  {
    quote:
      '"I make it a rule of mine: the more it looks like Queer Street, the less I ask"',
    speaker: "Enfield (Ch. 1)",
    significance:
      "Captures the Victorian gentleman's code: do not pry, do not expose scandal. 'Queer Street' (meaning trouble) is itself a euphemism. This culture of silence enables Hyde's crimes to continue.",
  },
  {
    quote:
      '"I let my brother go to the devil in his own way"',
    speaker: "Utterson (Ch. 1)",
    significance:
      "Utterson's philosophy of non-interference. Ironic given that Jekyll is literally going 'to the devil.' The allusion to Cain ('Am I my brother's keeper?') suggests moral negligence disguised as tolerance.",
  },
  {
    quote:
      '"like a district of some city in a nightmare"',
    speaker: "Narrator (Ch. 4)",
    significance:
      "London is presented as a Gothic, nightmarish space. The fog, gaslight, and labyrinthine streets externalise the psychological confusion and moral darkness of the story.",
  },
  {
    quote:
      '"all human beings... are commingled out of good and evil"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "'Commingled' means mixed inseparably — Stevenson argues that good and evil cannot be cleanly separated. Jekyll's fatal error was believing they could be.",
  },
  {
    quote:
      '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "The repetition of 'slowly' emphasises the gradual, irreversible nature of Jekyll's decline. 'Incorporated' (literally 'made into a body') — Hyde is taking over physically as well as morally.",
  },
  {
    quote:
      '"the fog still slept on the wing above the drowned city"',
    speaker: "Narrator (Ch. 4)",
    significance:
      "Personification of fog as something alive and oppressive. 'Drowned' suggests suffocation. The weather mirrors the moral atmosphere — nothing is clear, everything is obscured.",
  },
  {
    quote:
      '"I bring the life of that unhappy Henry Jekyll to an end"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "The final line of Jekyll's confession. 'Unhappy' is an understatement that carries immense pathos. The formal, measured tone contrasts with the desperation of his situation.",
  },
  {
    quote:
      '"I have had a shock... and I shall never recover"',
    speaker: "Lanyon (Ch. 6)",
    significance:
      "Witnessing the transformation destroys Lanyon's worldview. He represents the limits of orthodox Victorian science — confronted with evidence that challenges everything he believes, he simply cannot survive.",
  },
  {
    quote:
      '"the door, which was equipped with neither bell nor knocker, was blistered and distained"',
    speaker: "Narrator (Ch. 1)",
    significance:
      "The door to Jekyll's laboratory — Hyde's entrance. Its neglected, sinister appearance contrasts with Jekyll's grand front entrance. The building itself embodies duality: respectable facade, hidden darkness.",
  },
  {
    quote:
      '"I felt younger, lighter, happier in body"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "Jekyll describes his first transformation into Hyde with language of liberation and pleasure. The attraction of evil is presented as seductive — freedom from moral constraint feels good, which makes it dangerous.",
  },
  {
    quote:
      '"the temptation of a discovery so singular and profound"',
    speaker: "Jekyll (Ch. 10)",
    significance:
      "Echoes the biblical temptation narrative. Jekyll, like Adam or Faust, cannot resist forbidden knowledge. Stevenson warns that scientific curiosity without moral restraint leads to damnation.",
  },
];

const CONTEXT_POINTS = [
  {
    topic: "Victorian Respectability and Hypocrisy",
    detail:
      "Victorian society placed enormous value on public reputation, moral propriety, and self-control — especially for middle- and upper-class men. However, this strict moral code often masked private vice. Stevenson exposes this hypocrisy: Jekyll is not unusual in having dark desires, only in finding a chemical means to indulge them. The novella asks whether enforced respectability actually creates the very evils it claims to suppress.",
  },
  {
    topic: "Charles Darwin and Evolution (1859)",
    detail:
      "Darwin's 'On the Origin of Species' (1859) challenged the idea that humans were created in God's image. Hyde's ape-like behaviour reflects Victorian 'degeneration anxiety' — the fear that humans could regress to a primitive, animalistic state. Hyde is frequently described in animal terms ('ape-like fury,' 'hissing'), suggesting that beneath civilisation lies a beast.",
  },
  {
    topic: "Robert Louis Stevenson's Context",
    detail:
      "Stevenson wrote the novella in 1886 during a period of personal illness. He grew up in Edinburgh — a city literally divided between the respectable New Town and the dangerous Old Town — which inspired the novella's theme of duality. Stevenson was also influenced by the real case of Deacon Brodie, an Edinburgh cabinet-maker who was a burglar by night.",
  },
  {
    topic: "Jack the Ripper and Urban Crime",
    detail:
      "Although Jack the Ripper's murders occurred in 1888 (two years after publication), the novella tapped into existing Victorian anxieties about crime in London's dark streets. Hyde's violence — random, nocturnal, and occurring in foggy backstreets — captures the fear that civilisation was a thin veneer over chaos and brutality.",
  },
  {
    topic: "Religion and Morality",
    detail:
      "Victorian Britain was deeply religious. Sin, temptation, and damnation were taken seriously. Hyde is repeatedly linked to Satan and hell. Jekyll's experiment can be read as a modern version of the Fall — he overreaches, plays God, and is punished. The novella suggests that evil is not an external force but something within every person.",
  },
  {
    topic: "Sigmund Freud and the Unconscious",
    detail:
      "Although Freud's theories came after the novella (1890s–1900s), Stevenson anticipates his ideas. Freud's model of the id (primitive desires), ego (rational self), and superego (moral conscience) maps onto Hyde (id), Jekyll (ego/superego), and the potion (the mechanism that releases the id). The novella suggests that repression does not destroy desire — it strengthens it.",
  },
  {
    topic: "The Gothic Genre",
    detail:
      "The novella belongs to the Gothic tradition — using darkness, mystery, doubles, and the supernatural to explore psychological and social anxieties. Stevenson updates the Gothic from remote castles to the modern city, making London itself a site of horror. The 'double' or 'doppelganger' motif (Jekyll/Hyde) reflects the fragmented modern self.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function JekyllAndHydePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-white/70 hover:text-white"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Jekyll and Hyde — Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Edexcel GCSE English Literature &middot; Paper 2, Section A
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ─────────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["#plot", "Plot Summary"],
              ["#characters", "Character Analysis"],
              ["#themes", "Key Themes"],
              ["#quotes", "Key Quotes (20)"],
              ["#context", "Victorian Context"],
              ["#exam", "Edexcel Exam Technique"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-primary hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
          <div className="mt-6 space-y-6">
            {PLOT_SUMMARY.map((ch) => (
              <div
                key={ch.chapter}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {ch.chapter}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {ch.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {ch.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Characters ────────────────────────────────────────── */}
        <section id="characters" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {CHARACTERS.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {char.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                {char.key_quotes.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Key Quotes
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {char.key_quotes.map((q) => (
                        <li
                          key={q}
                          className="text-sm italic text-muted-foreground"
                        >
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Themes ────────────────────────────────────────────── */}
        <section id="themes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Key Themes</h2>
          <div className="mt-6 space-y-6">
            {THEMES.map((t) => (
              <div
                key={t.theme}
                className="rounded-xl border-l-4 border-primary bg-muted p-6"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {t.theme}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
                <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Supporting Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {t.quotes.map((q) => (
                      <li key={q} className="text-sm italic text-muted-foreground">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key quotes ────────────────────────────────────────── */}
        <section id="quotes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotes (20)
          </h2>
          <p className="mt-2 text-muted-foreground">
            Memorise these quotes — the Edexcel exam is closed-book. Short
            quotes that you can embed naturally into sentences are best.
          </p>
          <div className="mt-6 space-y-4">
            {KEY_QUOTES.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4 shadow-md"
              >
                <p className="text-sm font-semibold italic text-foreground">
                  {q.quote}
                </p>
                <p className="mt-1 text-xs font-medium text-primary">
                  — {q.speaker}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {q.significance}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Victorian Context
          </h2>
          <p className="mt-2 text-muted-foreground">
            Context is assessed through AO3. The best responses weave context
            into analysis rather than treating it as a bolt-on paragraph.
          </p>
          <div className="mt-6 space-y-4">
            {CONTEXT_POINTS.map((c) => (
              <div
                key={c.topic}
                className="rounded-xl border border-border p-5 shadow-md"
              >
                <h3 className="font-bold text-foreground">{c.topic}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section id="exam" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Edexcel Exam Technique for Jekyll and Hyde
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                What Does an Edexcel Jekyll and Hyde Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Jekyll and Hyde appears in <strong>Paper 2, Section A</strong> (19th-century novel). You will be given an <strong>extract</strong> from the novella and a question that asks you to analyse a character, theme, or idea. You must write about <strong>both the extract and the wider novella</strong>. The question is worth <strong>40 marks</strong> (no SPaG marks on Paper 2).
              </p>
              <div className="mt-4 rounded-lg border-2 border-dashed border-primary bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Example Question
                </p>
                <p className="mt-2 text-sm text-foreground font-medium">
                  How does Stevenson present the theme of duality in this
                  extract and in the novella as a whole?
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Refer closely to the extract and to the novella as a whole
                  in your answer. (40 marks)
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                How to Structure Your Answer
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                  <span>
                    <strong>Brief introduction</strong> — outline Stevenson&apos;s overall presentation of the theme/character in 2-3 sentences. Mention the novella&apos;s Victorian context.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                  <span>
                    <strong>2-3 paragraphs on the extract</strong> — analyse specific language, imagery, and techniques from the given passage. Use short embedded quotations from the extract. Link to context where relevant.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                  <span>
                    <strong>2-3 paragraphs on the wider novella</strong> — discuss how the theme/character is presented elsewhere. Use memorised quotes from other parts of the text. Track development across the narrative.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Conclude briefly</strong> — summarise Stevenson&apos;s message and its relevance to a Victorian audience. Consider what Stevenson wanted readers to understand about human nature.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Edexcel Paper 2 Section A — Key Facts
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <strong>Extract-based:</strong> You are given a passage from the novella to analyse — this is different from Macbeth (Paper 1), which has no extract.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <strong>40 marks total:</strong> No separate SPaG marks on Paper 2, but clear, accurate writing still matters for the overall quality of your response.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <strong>Closed-book:</strong> You cannot take the text into the exam. Memorise short, versatile quotes that work across multiple themes.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <strong>Timing:</strong> Spend approximately 50-55 minutes on this question. Allow 5 minutes for reading the extract and planning.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Top Tips for Top Marks
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use Stevenson&apos;s name — &quot;Stevenson presents...&quot; or &quot;Stevenson uses...&quot; shows awareness of authorial intent (AO2).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Analyse individual words within quotes — don&apos;t just identify techniques, explain their effect on the reader.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Embed context into analysis: &quot;A Victorian reader, influenced by Darwin&apos;s theory of evolution, would have found Hyde&apos;s &apos;ape-like fury&apos; particularly disturbing as it implies humanity&apos;s civilised veneer is dangerously thin.&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use literary terminology: novella, Gothic, doppelganger, pathetic fallacy, symbolism, foreshadowing, unreliable narrator, epistolary structure.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Consider alternative interpretations: &quot;While a Victorian audience might read Hyde as purely monstrous, a modern Freudian reading suggests he represents the repressed id that exists within everyone.&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Balance extract and whole text — examiners want to see both. Don&apos;t spend all your time on the extract and neglect the wider novella, or vice versa.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Call it a &quot;novella&quot; not a &quot;novel&quot; — this shows you understand the form and will impress examiners.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
