import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/lord-of-the-flies' },
  title: "Lord of the Flies Study Guide — Edexcel GCSE English Literature",
  description:
    "Complete Lord of the Flies revision guide for Edexcel GCSE English Literature. Plot, characters, themes, 15+ key quotes, symbolism, context, and Edexcel exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PLOT_SUMMARY = [
  {
    chapter: "Chapters 1–3",
    title: "Arrival and Early Order",
    summary:
      "A group of British schoolboys survive a plane crash on a deserted tropical island during an unnamed nuclear war. Ralph is elected chief over Jack, who is given control of his choir as hunters. Piggy's glasses are used to light a signal fire. Ralph insists on building shelters and keeping the fire burning for rescue. Jack becomes increasingly obsessed with hunting pigs. Simon retreats alone into the jungle. Early tensions emerge between Ralph's focus on rescue and civilisation, and Jack's desire to hunt.",
  },
  {
    chapter: "Chapters 4–6",
    title: "The Descent Begins",
    summary:
      "Jack paints his face — a mask that 'liberates him from shame and self-consciousness.' The hunters kill their first pig while the signal fire goes out, and a ship passes without seeing them. Ralph is furious; Jack is unapologetic. The littluns begin to fear a 'beast' on the island. A dead paratrooper lands on the mountain, and Sam and Eric mistake the body for the beast. Fear begins to dominate the group, and Jack exploits it to challenge Ralph's leadership.",
  },
  {
    chapter: "Chapters 7–9",
    title: "Savagery and Simon's Death",
    summary:
      "Ralph joins a hunt and feels the thrill of violence. Jack calls an assembly to overthrow Ralph and, when he fails, leaves to start his own tribe. Most boys follow Jack, lured by meat and excitement. Jack's tribe kills a sow and mounts its head on a stick as an offering to the beast — this becomes the 'Lord of the Flies.' Simon has a hallucinatory conversation with the pig's head, which tells him the beast is 'part of you.' Simon discovers the dead paratrooper and rushes to tell the others, but the boys, in a frenzied ritual dance, mistake him for the beast and beat him to death.",
  },
  {
    chapter: "Chapters 10–12",
    title: "Total Collapse and Rescue",
    summary:
      "Jack's tribe raids Ralph's camp and steals Piggy's glasses to make fire. Ralph, Piggy, and the twins go to Castle Rock to confront Jack. Roger pushes a boulder that kills Piggy and destroys the conch. Sam and Eric are captured and tortured into joining Jack's tribe. Ralph is hunted across the island; Jack sets the jungle on fire to smoke him out. Ralph stumbles onto the beach and collapses at the feet of a naval officer. The officer is shocked. Ralph weeps 'for the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy.'",
  },
];

const CHARACTERS = [
  {
    name: "Ralph",
    description:
      "The elected leader who represents democracy, civilisation, and order. He insists on maintaining the signal fire and building shelters. Ralph is attractive, athletic, and initially confident, but his authority gradually crumbles as the boys are seduced by Jack's savagery. He tries to hold onto reason and morality but is complicit in Simon's murder. By the end, he is hunted like an animal. Ralph's journey represents the fragility of civilised values under pressure.",
    key_quotes: [
      '"We\'ve got to have rules and obey them. After all, we\'re not savages"',
      '"The rules are the only thing we\'ve got!"',
      '"Ralph wept for the end of innocence, the darkness of man\'s heart"',
      '"I\'m chief. I was chosen"',
    ],
  },
  {
    name: "Jack Merridew",
    description:
      "The antagonist who represents savagery, dictatorship, and the will to power. Initially the head of the choir, Jack becomes increasingly obsessed with hunting and violence. He paints his face, creating a mask that frees him from civilised restraint. He exploits the boys' fear of the beast to seize power, establishing a brutal tribal regime at Castle Rock. Jack represents the human instinct towards cruelty and authoritarian control when the structures of civilisation are removed.",
    key_quotes: [
      '"We\'ve got to have rules and obey them. After all, we\'re not savages" (ironic — Jack later becomes the most savage)',
      '"The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness"',
      '"Bollocks to the rules! We\'re strong — we hunt!"',
      '"He began to dance and his laughter became a bloodthirsty snarling"',
    ],
  },
  {
    name: "Piggy",
    description:
      "Represents intellect, reason, and scientific thinking. Piggy is overweight, asthmatic, and wears glasses — he is physically weak but intellectually the strongest. He is the most loyal supporter of Ralph and the rules. The other boys mock and marginalise him, reflecting society's tendency to ignore rational voices. His glasses symbolise knowledge and are used to create fire. His death — crushed by a boulder alongside the conch — marks the final destruction of reason and civilisation on the island.",
    key_quotes: [
      '"Which is better — to be a pack of painted savages like you are, or to be sensible like Ralph is?"',
      '"What are we? Humans? Or animals? Or savages?"',
      '"I got the conch! Just you listen!"',
      '"Life is scientific, that\'s what it is"',
    ],
  },
  {
    name: "Simon",
    description:
      "A quiet, spiritual boy who represents innate human goodness and moral insight. Simon is the only character who understands that the beast is not an external creature but a force within human nature — 'maybe it\'s only us.' His encounter with the Lord of the Flies is a symbolic confrontation with evil. He is killed by the other boys in a frenzy, and his death parallels the crucifixion of Christ — he is the innocent truth-teller destroyed by the mob. His body is carried out to sea in a passage of extraordinary beauty.",
    key_quotes: [
      '"Maybe there is a beast... maybe it\'s only us"',
      '"What I mean is... maybe it\'s only us"',
      '"You knew, didn\'t you? I\'m part of you?" (Lord of the Flies to Simon)',
      '"Simon\'s dead body moved out toward the open sea"',
    ],
  },
  {
    name: "Roger",
    description:
      "Represents pure sadism and cruelty. Roger begins by throwing stones near (but not at) a littlun — civilisation's conditioning still holds. As the novel progresses, he is freed from all restraint and becomes Jack's torturer and enforcer. He kills Piggy by pushing a boulder onto him. Roger represents the darkest impulse within human nature — the desire to hurt others — which is normally suppressed by society but unleashed when authority collapses.",
    key_quotes: [
      '"Roger gathered a handful of stones and began to throw them. Yet there was a space round Henry... into which he dare not throw"',
      '"Roger, with a sense of delirious abandonment, leaned all his weight on the lever"',
      '"The hangman\'s horror clung round him" (about Roger)',
    ],
  },
  {
    name: "Sam and Eric (Samneric)",
    description:
      "The twins represent the ordinary, decent person who ultimately conforms under pressure. They are loyal to Ralph for most of the novel but are eventually captured by Jack's tribe and forced to join. Their capitulation shows how even well-meaning people can be coerced into complicity with evil. They function almost as a single character, highlighting the loss of individual identity within the group.",
    key_quotes: [
      '"They were savages it was true; but they were human"',
    ],
  },
];

const THEMES = [
  {
    theme: "Civilisation vs Savagery",
    description:
      "The central conflict of the novel. Golding explores what happens when the structures of civilisation — rules, democracy, morality — are removed. Ralph and Piggy represent civilisation; Jack and Roger represent savagery. The boys' descent from orderly democracy to tribal violence suggests that savagery is not learned but innate — civilisation is merely a thin veneer. The conch, the signal fire, and Piggy's glasses all symbolise civilisation, and each is destroyed as savagery takes over.",
    quotes: [
      '"We\'ve got to have rules and obey them. After all, we\'re not savages"',
      '"Which is better — to be a pack of painted savages like you are, or to be sensible like Ralph is?"',
      '"The world, that understandable and lawful world, was slipping away"',
    ],
  },
  {
    theme: "Power and Leadership",
    description:
      "Ralph is elected democratically; Jack seizes power through fear, violence, and charisma. The novel contrasts democratic leadership (Ralph's reasoned approach) with authoritarian dictatorship (Jack's rule through intimidation). Jack offers meat and excitement; Ralph offers responsibility and rescue. The boys choose Jack, suggesting that in the absence of enforced order, people gravitate towards strongmen who exploit fear. Golding, writing after WWII, draws a clear parallel with the rise of fascist dictators.",
    quotes: [
      '"I ought to be chief... because I\'m chapter chorister and head boy"',
      '"I\'m chief. I was chosen"',
      '"Bollocks to the rules! We\'re strong — we hunt!"',
    ],
  },
  {
    theme: "Loss of Innocence",
    description:
      "The boys arrive as schoolchildren and leave as murderers. The novel systematically strips away their innocence, revealing the darkness within. Ralph's final weeping — 'for the end of innocence, the darkness of man's heart' — is the novel's emotional climax. The littluns' nightmares about the beast foreshadow the real horror that the older boys will commit. Golding subverts the traditional 'boys' adventure' genre (like Coral Island) to show that children are not inherently innocent.",
    quotes: [
      '"Ralph wept for the end of innocence, the darkness of man\'s heart"',
      '"The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness"',
      '"Kill the beast! Cut his throat! Spill his blood!"',
    ],
  },
  {
    theme: "The Nature of Evil (The Beast Within)",
    description:
      "The boys fear an external beast, but Simon alone realises the truth: 'maybe it\'s only us.' The beast is not a creature — it is the capacity for evil within every human being. The Lord of the Flies (the pig's head) confirms this: 'I\'m part of you.' Golding argues that evil is not an external force but an intrinsic part of human nature. The title itself — 'Lord of the Flies' is a translation of 'Beelzebub,' a biblical name for the devil — reinforces this idea.",
    quotes: [
      '"Maybe there is a beast... maybe it\'s only us"',
      '"You knew, didn\'t you? I\'m part of you?"',
      '"What I mean is... maybe it\'s only us"',
      '"Fancy thinking the Beast was something you could hunt and kill!"',
    ],
  },
  {
    theme: "Fear and Its Manipulation",
    description:
      "Fear is the catalyst for the boys' descent into savagery. The littluns fear the beast; Jack exploits this fear to undermine Ralph and seize power. He offers protection (the hunt) and a scapegoat (the beast), exactly as totalitarian leaders do. The signal fire goes out because fear distracts the boys from rescue. Golding shows that fear is the most powerful political tool — it overrides reason, enables violence, and allows tyrants to rise.",
    quotes: [
      '"The thing is — fear can\'t hurt you any more than a dream"',
      '"If there\'s a beast, we\'ll hunt it down! We\'ll close in and beat and beat and beat!"',
      '"He says the beastie came in the dark"',
    ],
  },
  {
    theme: "Order vs Chaos",
    description:
      "The conch shell establishes democratic order — whoever holds it may speak. As the conch loses its power, chaos increases. The signal fire represents hope and connection to the adult world; when it goes out, hope dies. Rules, shelters, and assemblies are all attempts to impose order, but they crumble under the weight of fear and desire. The destruction of the conch alongside Piggy's death symbolises the total collapse of ordered society.",
    quotes: [
      '"The rules are the only thing we\'ve got!"',
      '"The conch exploded into a thousand white fragments and ceased to exist"',
      '"The world, that understandable and lawful world, was slipping away"',
    ],
  },
];

const SYMBOLISM = [
  {
    symbol: "The Conch Shell",
    meaning:
      "Represents democracy, order, and civilised discourse. Whoever holds the conch has the right to speak. It is used to call assemblies. As Jack's power grows, the conch loses its authority. When Roger's boulder destroys the conch and kills Piggy simultaneously, it marks the final death of democratic civilisation on the island.",
  },
  {
    symbol: "The Signal Fire",
    meaning:
      "Represents the boys' connection to civilisation and their hope of rescue. When the fire burns, the boys maintain their desire to return to society. When it goes out, they have lost sight of civilisation. Ironically, the fire that finally attracts the naval officer is not a signal fire but the destructive blaze Jack sets to hunt Ralph — rescue comes through savagery, not order.",
  },
  {
    symbol: "Piggy's Glasses",
    meaning:
      "Represent intellect, reason, and scientific knowledge. They are the only means of making fire — knowledge is power. When Jack's tribe steals the glasses, it shows how intellect can be co-opted by tyranny. The progressive damage to the glasses (one lens broken, then stolen) mirrors the progressive decline of rational thinking on the island.",
  },
  {
    symbol: "The Lord of the Flies (Pig's Head)",
    meaning:
      "The severed pig's head on a stick, surrounded by flies. It is an offering to the beast and becomes the physical manifestation of the evil within the boys. The name 'Lord of the Flies' translates to 'Beelzebub' (the devil). In Simon's hallucination, it speaks, telling him: 'I\'m part of you.' It represents the darkness of human nature that cannot be escaped.",
  },
  {
    symbol: "The Beast",
    meaning:
      "The boys believe a physical beast exists on the island. In reality, the beast is the primal savagery within each boy. The dead paratrooper is mistaken for the beast — a literal symbol of the adult world's violence (war) being projected onto the island. Simon alone understands the truth: the beast is 'only us.'",
  },
  {
    symbol: "Face Paint",
    meaning:
      "Jack's painted face acts as a mask that 'liberates him from shame and self-consciousness.' It allows the boys to shed their civilised identities and commit acts of violence without personal responsibility. The paint represents the anonymity that enables mob behaviour and dehumanisation — a loss of individual moral accountability.",
  },
];

const KEY_QUOTES = [
  { quote: '"We\'ve got to have rules and obey them. After all, we\'re not savages"', speaker: "Ralph (Ch. 2)", significance: "Dramatic irony — this is exactly what the boys become. Establishes the central tension between civilisation and savagery." },
  { quote: '"The rules are the only thing we\'ve got!"', speaker: "Ralph (Ch. 5)", significance: "Ralph's desperate appeal to order. Rules are the last barrier against savagery. Shows his understanding that without rules, society collapses." },
  { quote: '"Maybe there is a beast... maybe it\'s only us"', speaker: "Simon (Ch. 5)", significance: "The novel's key insight. Simon alone understands that evil is not external but internal — a truth the other boys cannot accept." },
  { quote: '"What are we? Humans? Or animals? Or savages?"', speaker: "Piggy (Ch. 5)", significance: "Piggy articulates the novel's central question. The progressive list — humans, animals, savages — mirrors the boys' decline." },
  { quote: '"Kill the beast! Cut his throat! Spill his blood!"', speaker: "The boys (Ch. 7 onwards)", significance: "The hunting chant that becomes increasingly frenzied. Its rhythm and repetition show how collective ritual overrides individual morality." },
  { quote: '"The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness"', speaker: "Narrator (Ch. 4)", significance: "Face paint removes civilised identity and moral restraint. 'Liberated' suggests civilisation is experienced as a constraint on natural impulses." },
  { quote: '"Which is better — to be a pack of painted savages like you are, or to be sensible like Ralph is?"', speaker: "Piggy (Ch. 11)", significance: "Piggy's last stand — a direct appeal to reason over savagery. Moments later, he is killed, and the question is answered: savagery wins." },
  { quote: '"Ralph wept for the end of innocence, the darkness of man\'s heart"', speaker: "Narrator (Ch. 12)", significance: "The novel's emotional and thematic climax. Ralph now understands what Simon knew: evil is within all people. Innocence cannot be recovered." },
  { quote: '"You knew, didn\'t you? I\'m part of you?"', speaker: "The Lord of the Flies (Ch. 8)", significance: "The pig's head tells Simon that the beast is internal. 'Part of you' — evil is not something that can be hunted and killed. It exists in everyone." },
  { quote: '"Fancy thinking the Beast was something you could hunt and kill!"', speaker: "The Lord of the Flies (Ch. 8)", significance: "Mocks the boys' attempts to externalise evil. You cannot destroy the beast because it is human nature itself." },
  { quote: '"The world, that understandable and lawful world, was slipping away"', speaker: "Narrator (Ch. 5)", significance: "Golding shows civilisation as fragile and impermanent. 'Slipping away' suggests a gradual, irreversible decline." },
  { quote: '"Roger gathered a handful of stones and began to throw them. Yet there was a space round Henry... into which he dare not throw"', speaker: "Narrator (Ch. 4)", significance: "The 'space' represents the residual conditioning of civilisation — the invisible barrier of social rules. Later, this barrier disappears entirely when Roger kills Piggy." },
  { quote: '"Roger, with a sense of delirious abandonment, leaned all his weight on the lever"', speaker: "Narrator (Ch. 11)", significance: "'Delirious abandonment' — Roger has shed all civilised restraint. He kills Piggy with pleasure, not reluctance. This is Golding's darkest image of human nature." },
  { quote: '"The conch exploded into a thousand white fragments and ceased to exist"', speaker: "Narrator (Ch. 11)", significance: "The destruction of the conch is the destruction of democracy and order. 'Ceased to exist' — civilisation is not just damaged but annihilated." },
  { quote: '"He began to dance and his laughter became a bloodthirsty snarling"', speaker: "Narrator (about Jack, Ch. 4)", significance: "Jack's transformation from schoolboy to predator. 'Bloodthirsty snarling' reduces him to an animal, showing how thin the veneer of civilisation is." },
  { quote: '"I ought to be chief... because I\'m chapter chorister and head boy"', speaker: "Jack (Ch. 1)", significance: "Jack's claim to authority is based on the old world's hierarchy. Ironic — the structures he invokes will become meaningless as civilisation collapses." },
  { quote: '"Simon\'s dead body moved out toward the open sea"', speaker: "Narrator (Ch. 9)", significance: "Simon's body is described with reverent, almost sacred imagery. The sea 'dressed Simon\'s coarse hair with brightness' — Golding presents his death as a martyrdom." },
  { quote: '"Bollocks to the rules! We\'re strong — we hunt!"', speaker: "Jack (Ch. 5)", significance: "Jack explicitly rejects civilised order in favour of physical power and violence. 'Strong' replaces 'right' — might becomes the only authority." },
];

const CONTEXT_POINTS = [
  {
    topic: "Published in 1954 — Post-WWII",
    detail:
      "Golding published Lord of the Flies in 1954, less than a decade after the end of World War II. The atrocities of the war — the Holocaust, the atomic bombs on Hiroshima and Nagasaki, the widespread destruction — shattered the belief that civilisation guaranteed moral progress. Golding had served in the Royal Navy during the war and witnessed human cruelty first-hand. The novel is his response: a rejection of the idea that humanity is inherently good.",
  },
  {
    topic: "Golding's View of Human Nature",
    detail:
      "Golding stated: 'The theme is an attempt to trace the defects of society back to the defects of human nature.' He believed that evil is innate, not a product of environment or upbringing. This is a deliberately pessimistic counter to the Enlightenment belief in human reason and progress. Every boy on the island — not just Jack and Roger — is capable of violence.",
  },
  {
    topic: "Cold War and Nuclear Anxiety",
    detail:
      "The novel is set during an unspecified nuclear war. The boys are being evacuated when their plane is shot down. The dead paratrooper — a casualty of the adult world's war — literally falls onto the island. Golding draws a parallel between the boys' savagery and the adults' nuclear conflict: the violence on the island mirrors the violence of the 'civilised' world that created it.",
  },
  {
    topic: "Subversion of the Adventure Story",
    detail:
      "Lord of the Flies deliberately inverts the tradition of boys' adventure novels like R.M. Ballantyne's The Coral Island (1857), where British boys are stranded on an island and thrive through teamwork, Christian values, and resourcefulness. Golding even uses the same character names (Ralph, Jack) to make the comparison explicit. His version shows the opposite: without adult authority, the boys descend into chaos and murder.",
  },
  {
    topic: "Original Sin and Christian Allegory",
    detail:
      "The novel draws on the Christian doctrine of original sin — the idea that all humans are born with a capacity for evil. The island initially resembles the Garden of Eden (a paradise) but becomes a hell. Simon is a Christ-like figure: he understands the truth about evil, tries to share it, and is killed by the group. 'Lord of the Flies' translates to 'Beelzebub,' a name for the devil.",
  },
  {
    topic: "Freudian Psychology",
    detail:
      "The characters can be read through a Freudian lens: Ralph represents the ego (reason, balance), Jack represents the id (primal desire, aggression), and Piggy represents the superego (intellect, moral rules). Simon represents a spiritual or moral consciousness beyond Freud's model. The novel dramatises the triumph of the id when the structures that support the ego and superego are removed.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function LordOfTheFliesPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Lord of the Flies — Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Edexcel GCSE English Literature &middot; Paper 1, Section B (Post-1914 British Novel &middot; 40 marks)
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
              ["#symbolism", "Symbolism"],
              ["#quotes", "Key Quotes (15+)"],
              ["#context", "Historical Context"],
              ["#exam", "Edexcel Exam Technique"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-primary hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
          <p className="mt-2 text-muted-foreground">
            The novel follows a group of British schoolboys stranded on an
            uninhabited island after a plane crash during a nuclear war. Their
            attempt to govern themselves descends into savagery and murder.
          </p>
          <div className="mt-6 space-y-6">
            {PLOT_SUMMARY.map((section) => (
              <div
                key={section.chapter}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {section.chapter}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {section.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {section.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Characters ────────────────────────────────────────── */}
        <section id="characters" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Character Analysis</h2>
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
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {char.key_quotes.map((q) => (
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

        {/* ── Symbolism ───────────────────────────────────────── */}
        <section id="symbolism" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Symbolism</h2>
          <p className="mt-2 text-muted-foreground">
            Golding uses symbolism extensively. Understanding these symbols is
            essential for achieving top marks on the Edexcel exam.
          </p>
          <div className="mt-6 space-y-4">
            {SYMBOLISM.map((s) => (
              <div
                key={s.symbol}
                className="rounded-xl border border-border p-5 shadow-md"
              >
                <h3 className="font-bold text-foreground">{s.symbol}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key quotes ────────────────────────────────────────── */}
        <section id="quotes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Key Quotes (15+)</h2>
          <p className="mt-2 text-muted-foreground">
            The Edexcel exam provides an extract, but you will also need to
            reference the wider novel. Learn these quotes and practise embedding
            them into analytical paragraphs.
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
                <p className="mt-2 text-sm text-muted-foreground">{q.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Historical Context</h2>
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
            Edexcel Exam Technique for Lord of the Flies
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                What Does the Edexcel Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Paper 1, Section B is worth <strong>40 marks</strong>. You are
                given an <strong>extract</strong> from the novel and asked a
                question about a theme or character. You must analyse the extract
                and then write about the theme/character in the{" "}
                <strong>wider novel</strong>. This is an extract + essay format.
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border-2 border-dashed border-primary bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example Question 1
                  </p>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    Explore how Golding presents the conflict between civilisation
                    and savagery in this extract and in the novel as a whole.
                  </p>
                </div>
                <div className="rounded-lg border-2 border-dashed border-primary bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example Question 2
                  </p>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    How does Golding present the importance of power in this
                    extract and in the novel as a whole?
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                How to Structure Your Answer (40 marks)
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                  <span>
                    <strong>Introduction</strong> — briefly address Golding&apos;s purpose and how the theme/character connects to his wider message about human nature. Mention context (post-WWII, original sin, subversion of adventure genre).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                  <span>
                    <strong>Analyse the extract</strong> — close-read the given passage. Analyse language, structure, and form. Embed short quotations from the extract and explore individual words and their connotations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                  <span>
                    <strong>Write about the wider novel</strong> — use 3-4 paragraphs that track the theme/character across the whole text. Show how Golding develops the idea from beginning to end.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Embed quotations and analyse language</strong> — short quotes woven into sentences are most effective. Zoom in on individual words: &quot;Golding&apos;s use of the verb &apos;snarling&apos; reduces Jack to an animal, suggesting...&quot;
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">5</span>
                  <span>
                    <strong>Link to context throughout</strong> — integrate context naturally into your analysis. Connect to Golding&apos;s war experience, post-WWII disillusionment, original sin, or the Cold War. Do not bolt context on as a separate paragraph.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">6</span>
                  <span>
                    <strong>Discuss Golding&apos;s methods</strong> — symbolism (conch, glasses, the beast, face paint), allegory, foreshadowing, biblical allusion, the ironic ending, and narrative perspective. This is key for analysis of methods.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Top Tips for Top Marks
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Always use &quot;Golding&quot; as the subject — &quot;Golding presents/suggests/uses...&quot; This demonstrates awareness of the writer&apos;s craft (analysis of methods).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Discuss symbolism in depth — the conch, the beast, the fire, the glasses, and the Lord of the Flies are central to Golding&apos;s method and can be applied to almost any question.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Track change across the novel — show how characters or themes develop. For example: Roger&apos;s progression from throwing stones near Henry to killing Piggy with &quot;delirious abandonment.&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use the extract as a springboard — analyse it closely first, then widen your argument to the whole novel. Do not ignore the extract.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Connect to the allegorical reading — the island as a microcosm of society, the boys as representatives of different aspects of human nature, the ending as a comment on civilisation&apos;s failure.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Remember the marking guide: Reading and response (response to text, use of quotes), Analysis of methods (analysis of writer&apos;s methods — language, form, structure), Context (context), Accuracy (SPaG — 4 marks are available for spelling, punctuation, and grammar in Section B).
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
