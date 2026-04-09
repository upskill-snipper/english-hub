import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/paper-2' },
  title: "Paper 2: Drama - Cambridge IGCSE English Literature",
  description:
    "Study guide for Cambridge IGCSE English Literature Paper 2. Shakespeare set plays, modern drama texts, and how to write about dramatic technique and stagecraft.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const shakespearePlays = [
  {
    title: "Macbeth",
    link: "/resources/english-literature/caie/macbeth",
    summary:
      "A Scottish general's ambition, fuelled by witches' prophecies and his wife's persuasion, leads to regicide, tyranny, and self-destruction. Key dramatic techniques include soliloquy, dramatic irony, and the supernatural.",
    examFocus: [
      "How Shakespeare presents the theme of ambition or guilt",
      "The significance of the witches / the supernatural",
      "The relationship between Macbeth and Lady Macbeth",
      "How Shakespeare creates tension in a specific scene",
    ],
  },
  {
    title: "The Merchant of Venice",
    summary:
      "A comedy-drama centred on Shylock's bond with Antonio. The trial scene, Portia's casket test, and the themes of justice versus mercy, prejudice, and appearance versus reality are central to Cambridge questions.",
    examFocus: [
      "How Shakespeare presents the character of Shylock",
      "The theme of justice and mercy",
      "The significance of the casket scenes",
      "How Shakespeare uses disguise and deception",
    ],
  },
  {
    title: "Much Ado About Nothing",
    summary:
      "A romantic comedy exploring the relationships of Beatrice/Benedick and Hero/Claudio. Themes include deception, honour, gender roles, and the power of language. The gulling scenes and Hero's public shaming are commonly examined.",
    examFocus: [
      "How Shakespeare presents the relationship between Beatrice and Benedick",
      "The role of deception in the play",
      "The treatment of Hero and what it reveals about Messina's society",
      "How Shakespeare creates comedy",
    ],
  },
  {
    title: "Othello",
    summary:
      "A tragedy of jealousy, manipulation, and racial prejudice. Iago's Machiavellian plotting drives Othello to murder Desdemona. Key techniques: soliloquy, dramatic irony, animal imagery, and the handkerchief as dramatic device.",
    examFocus: [
      "How Shakespeare presents Iago as a villain",
      "The theme of jealousy",
      "The significance of race and otherness",
      "How Shakespeare creates dramatic tension in Act 3, Scene 3",
    ],
  },
  {
    title: "Romeo and Juliet",
    summary:
      "Two young lovers from feuding families meet a tragic end. The play explores love, fate, family conflict, and the destructiveness of hatred. The balcony scene, the fight sequences, and the final scene are frequently examined.",
    examFocus: [
      "How Shakespeare presents the theme of love",
      "The role of fate and destiny",
      "The significance of the feud between the families",
      "How Shakespeare uses light and dark imagery",
    ],
  },
];

const otherDrama = [
  {
    title: "A View from the Bridge",
    author: "Arthur Miller",
    summary:
      "Eddie Carbone, a longshoreman in 1950s Brooklyn, harbours an obsessive attachment to his niece Catherine. When illegal immigrants arrive, Eddie's jealousy leads to betrayal and tragedy. Miller draws on Greek tragedy: fate, the chorus figure (Alfieri), and the inevitability of the protagonist's downfall.",
    techniques: [
      "Alfieri as chorus figure: provides commentary, creates dramatic irony",
      "Stage directions reveal Eddie's unspoken emotions (clenched fists, physical proximity to Catherine)",
      "The boxing scene and chair-lifting scene: physical actions replace verbal communication",
      "Tragic structure: rising tension, climax (Eddie's phone call to immigration), catastrophe",
    ],
  },
  {
    title: "An Inspector Calls",
    author: "J.B. Priestley",
    summary:
      "Inspector Goole interrogates the Birling family about their involvement in a young woman's suicide. The play exposes the consequences of social irresponsibility and class prejudice. Priestley uses the inspector as a mouthpiece for socialist values.",
    techniques: [
      "The unities of time and place: set in one room, one evening, creating claustrophobic tension",
      "Dramatic irony: Mr Birling's confident predictions about the Titanic and no war are wrong",
      "The Inspector's final speech as a direct address to the audience",
      "The cyclical ending: the phone call that re-starts the investigation",
    ],
  },
  {
    title: "The Crucible",
    author: "Arthur Miller",
    summary:
      "Set during the 1692 Salem witch trials but written as an allegory for McCarthyism. John Proctor must choose between confessing to witchcraft (a lie that saves his life) and maintaining his integrity (which means death). Key themes: hysteria, integrity, power, and reputation.",
    techniques: [
      "Allegory: the witch trials parallel the anti-Communist hearings of the 1950s",
      "Proctor's climactic line 'Because it is my name!' — his identity and integrity are inseparable",
      "Miller's detailed stage directions establish social context and character psychology",
      "The court scenes: formal, ritualistic language versus Proctor's plain, honest speech",
    ],
  },
  {
    title: "A Raisin in the Sun",
    author: "Lorraine Hansberry",
    summary:
      "The Younger family, African American and living in 1950s Chicago, receives a life insurance payout and must decide how to use it. The play explores racial discrimination, dreams, family loyalty, and what it means to have dignity in an unjust society.",
    techniques: [
      "The cramped apartment setting physically represents the family's limited opportunities",
      "Mama's plant: a symbol of nurturing dreams in hostile conditions",
      "Walter Lee's arc from frustrated dreamer to family leader",
      "Lindner's visit: quiet menace representing institutional racism",
    ],
  },
];

const dramaticTechniques = [
  {
    technique: "Soliloquy",
    definition: "A speech delivered by a character alone on stage, revealing inner thoughts to the audience.",
    example: "Macbeth's 'Is this a dagger which I see before me' reveals his psychological torment.",
    howToWrite:
      "Identify what the soliloquy reveals about the character's inner conflict. Analyse specific language choices. Consider what the audience knows that other characters do not (dramatic irony).",
  },
  {
    technique: "Dramatic Irony",
    definition: "When the audience knows something that characters on stage do not.",
    example: "In Macbeth, Duncan praises the castle as pleasant while the audience knows he will be murdered there.",
    howToWrite:
      "Explain what the audience knows, what the character does not, and the effect this gap creates (tension, sympathy, horror, dark humour).",
  },
  {
    technique: "Stage Directions",
    definition: "Instructions about movement, gesture, lighting, sound, and setting.",
    example: "Miller's detailed stage directions in A View from the Bridge reveal Eddie's body language when words fail him.",
    howToWrite:
      "Quote the stage direction. Explain what it reveals about character, mood, or relationships that the dialogue alone does not convey.",
  },
  {
    technique: "Foreshadowing",
    definition: "Hints or clues about events that will occur later in the play.",
    example: "The witches' opening in Macbeth ('Fair is foul, and foul is fair') foreshadows the moral chaos to come.",
    howToWrite:
      "Identify the hint. Explain what it foreshadows. Discuss the effect: does it create tension, a sense of inevitability, or dramatic irony?",
  },
  {
    technique: "Symbolism",
    definition: "An object, action, or image that represents something beyond its literal meaning.",
    example: "Blood in Macbeth symbolises guilt. Lady Macbeth's obsessive hand-washing shows she cannot escape her conscience.",
    howToWrite:
      "Name the symbol. Explain what it represents. Track how its meaning develops or changes across the play.",
  },
  {
    technique: "Contrast and Juxtaposition",
    definition: "Placing two characters, scenes, or ideas side by side to highlight differences.",
    example: "In An Inspector Calls, Sheila's growing remorse is juxtaposed with her parents' refusal to accept responsibility.",
    howToWrite:
      "Identify what is being contrasted. Explain why the playwright creates this contrast and what it reveals about the themes.",
  },
  {
    technique: "The Aside",
    definition: "A brief remark by a character that other characters on stage cannot hear.",
    example: "Iago's asides in Othello allow the audience to see his true manipulative nature while other characters remain deceived.",
    howToWrite:
      "Explain the gap between the character's public speech and their private aside. Discuss how this creates dramatic irony or reveals hypocrisy.",
  },
  {
    technique: "Pathetic Fallacy and Setting",
    definition: "Using weather, lighting, or setting to reflect mood or themes.",
    example: "The storm in Macbeth on the night of Duncan's murder reflects the disruption of the natural order.",
    howToWrite:
      "Describe the setting or weather. Explain how it mirrors the characters' emotions or the play's themes. Use the term 'pathetic fallacy' accurately.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function Paper2Page() {
  return (
    <>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: Drama
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            1 hour 30 minutes &middot; 50 marks &middot; Two sections: Shakespeare
            and other drama. Focus on dramatic technique, stagecraft, and performance.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Paper structure ─────────────────────────────────────── */}
        <section aria-labelledby="structure-heading">
          <h2 id="structure-heading" className="text-2xl font-bold text-foreground">
            Paper Structure
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Section A &mdash; Shakespeare</h3>
              <p className="mt-1 text-sm text-muted-foreground">25 marks</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Answer <strong>one</strong> question on your set Shakespeare play</li>
                <li>&bull; Choice of passage-based or essay question</li>
                <li>&bull; Passage-based: an extract is printed for close analysis</li>
                <li>&bull; Essay: broader question on themes, characters, or techniques</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Section B &mdash; Other Drama</h3>
              <p className="mt-1 text-sm text-muted-foreground">25 marks</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Answer <strong>one</strong> question on your other set drama text</li>
                <li>&bull; Same choice: passage-based or essay</li>
                <li>&bull; Must demonstrate awareness of the text as a piece of drama, not just a story</li>
                <li>&bull; Consider staging, audience response, and dramatic tension</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Shakespeare plays ───────────────────────────────────── */}
        <section aria-labelledby="shakespeare-heading">
          <h2 id="shakespeare-heading" className="text-2xl font-bold text-foreground">
            Set Shakespeare Plays
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your school will study one Shakespeare play. Below are the commonly set texts
            with a summary of key themes and typical Cambridge exam focuses.
          </p>

          <div className="mt-6 space-y-5">
            {shakespearePlays.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {p.title}
                  {"link" in p && (
                    <Link
                      href={p.link!}
                      className="ml-2 text-sm font-medium text-primary underline underline-offset-2 hover:text-foreground"
                    >
                      Full study guide &rarr;
                    </Link>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Typical exam focuses:
                  </p>
                  <ul className="mt-1 space-y-1">
                    {p.examFocus.map((f, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        &bull; {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Other drama ─────────────────────────────────────────── */}
        <section aria-labelledby="other-drama-heading">
          <h2 id="other-drama-heading" className="text-2xl font-bold text-foreground">
            Other Drama Texts
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Section B of Paper 2 covers a non-Shakespeare drama text. Below are commonly
            set texts with key dramatic techniques to discuss.
          </p>

          <div className="mt-6 space-y-5">
            {otherDrama.map((d) => (
              <div
                key={d.title}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {d.title}
                  <span className="ml-1 font-normal text-muted-foreground">&mdash; {d.author}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Key dramatic techniques:
                  </p>
                  <ul className="mt-1 space-y-1">
                    {d.techniques.map((t, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        &bull; {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── How to write about dramatic technique ───────────────── */}
        <section aria-labelledby="techniques-heading">
          <h2 id="techniques-heading" className="text-2xl font-bold text-foreground">
            How to Write About Dramatic Technique
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge examiners reward responses that treat the text as drama, not just
            as a story. Below are key dramatic techniques with definitions, examples, and
            advice on how to write about them effectively.
          </p>

          <div className="mt-6 space-y-4">
            {dramaticTechniques.map((dt) => (
              <div
                key={dt.technique}
                className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{dt.technique}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <strong>Definition:</strong> {dt.definition}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <strong>Example:</strong> {dt.example}
                </p>
                <div className="mt-2 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">How to write about it:</p>
                  <p className="mt-1 text-sm text-muted-foreground">{dt.howToWrite}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h3 className="font-semibold text-foreground">
              Key Phrases for Writing About Drama
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use these phrases in your responses to show you are thinking about the text
              as a piece of theatre, not just a novel:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Shakespeare uses the soliloquy to reveal...",
                "The audience is positioned to feel...",
                "This creates dramatic tension because...",
                "On stage, this moment would...",
                "The playwright structures this scene so that...",
                "The dramatic irony here means that...",
                "The stage directions suggest...",
                "A director might choose to...",
                "The audience's response would be...",
                "This is a turning point because...",
              ].map((phrase) => (
                <span
                  key={phrase}
                  className="rounded-full bg-card px-3 py-1 text-xs font-medium text-foreground shadow-md"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>

    </>
  );
}
