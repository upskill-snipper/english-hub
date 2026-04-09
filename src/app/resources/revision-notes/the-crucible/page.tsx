"use client";

import { useState } from "react";
import { AITextArea } from "@/components/AITextArea";

/* ─── Expandable Section Component ──────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = "bg-primary",
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  badge?: string;
  colour?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5">
          {children}
        </div>
      )}
    </div>
  );
}

function Quote({ text, speaker, act, analysis }: { text: string; speaker: string; act: string; analysis: string }) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function CrucibleRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wider">Modern Drama</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CAIE</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Crucible &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE/IGCSE English Literature exam. Act-by-act plot summary, character analysis,
          key themes with evidence, important quotations with analysis, historical context, exam technique, and practice questions with AI feedback.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "Exam Tips", "Practice Questions"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section id="plot" title="Act-by-Act Plot Summary" badge="4 Acts" colour="bg-red-600" defaultOpen>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">1</span>
                Act 1 &mdash; The Discovery
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play opens in Salem, Massachusetts, 1692. Reverend Parris has discovered his daughter Betty, his niece Abigail Williams, and other girls dancing in the forest with Tituba, his slave from Barbados. Betty has fallen into a mysterious coma-like state. Parris fears witchcraft rumours will destroy his reputation. The community gathers, and old grudges surface: the Putnams blame witchcraft for their dead children; Thomas Putnam eyes land he might acquire if neighbours are convicted. John Proctor arrives and privately confronts Abigail &mdash; they had an affair while she worked as his servant, and he has ended it. Abigail is still obsessed with Proctor and reveals the girls were only dancing, not conjuring spirits. Reverend Hale, an expert on witchcraft, arrives to investigate. Under pressure, Tituba &ldquo;confesses&rdquo; to dealing with the Devil and names others. Abigail, seeing confession as power, joins in, and Betty wakes to add more names. A frenzy of accusation begins.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Betty&apos;s mysterious illness and the community&apos;s suspicion of witchcraft</li>
                  <li>&bull; Abigail&apos;s private conversation with Proctor revealing the affair</li>
                  <li>&bull; Tituba&apos;s forced &ldquo;confession&rdquo; under threat of violence</li>
                  <li>&bull; Abigail and Betty begin naming &ldquo;witches&rdquo; &mdash; mass hysteria begins</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">2</span>
                Act 2 &mdash; The Accusations Spread
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Eight days later, John and Elizabeth Proctor discuss the trials at home. Their marriage is strained by John&apos;s affair with Abigail. Elizabeth urges John to go to Salem and expose Abigail as a fraud. Mary Warren, their servant and one of the accusers, returns from court and reveals that thirty-nine people have been arrested and that Elizabeth has been &ldquo;somewhat mentioned.&rdquo; She gives Elizabeth a poppet (doll) she made in court. Reverend Hale visits the Proctors to assess their Christian character, and John struggles to remember the Ten Commandments &mdash; significantly forgetting the one about adultery. Ezekiel Cheever and Marshal Herrick arrive with an arrest warrant for Elizabeth: Abigail has accused her. The evidence is a poppet with a needle in it, supposedly used to harm Abigail by witchcraft. John realises Abigail is targeting Elizabeth to replace her. He tears up the warrant and sends Elizabeth to jail declaring he will &ldquo;fall like an ocean on that court.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The tension between John and Elizabeth over the affair</li>
                  <li>&bull; Mary Warren&apos;s revelation about the scale of the trials</li>
                  <li>&bull; The poppet as false evidence of witchcraft</li>
                  <li>&bull; Elizabeth&apos;s arrest &mdash; Proctor resolves to fight the court</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">3</span>
                Act 3 &mdash; The Trial
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The act takes place in the Salem courthouse. Proctor brings Mary Warren to testify that the girls are faking. Giles Corey presents evidence that Thomas Putnam is using the trials to grab land. Judge Danforth, proud and rigid, refuses to postpone proceedings or consider that the girls might be lying. Proctor presents a petition signed by ninety-one people attesting to the good character of the accused &mdash; Danforth orders all signers arrested for examination. When Mary Warren testifies that the girls are pretending, Abigail and the girls turn on her, pretending she is sending out her spirit against them. In desperation, Proctor confesses his adultery with Abigail to discredit her. Danforth brings Elizabeth in to confirm &mdash; but Elizabeth, not knowing John has confessed, lies to protect his reputation, denying the affair. Abigail resumes her performance. Mary Warren, terrified, turns on Proctor and accuses him of being &ldquo;the Devil&apos;s man.&rdquo; Proctor is arrested. Hale, appalled, quits the court.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Mary Warren&apos;s testimony and the girls&apos; counter-performance</li>
                  <li>&bull; Proctor&apos;s public confession of adultery</li>
                  <li>&bull; Elizabeth&apos;s lie &mdash; the one time she is dishonest, it condemns her husband</li>
                  <li>&bull; Hale denounces the proceedings and quits the court</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">4</span>
                Act 4 &mdash; The Choice
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Three months later. The jail is overcrowded; crops rot in the fields because the farmers are in prison; Abigail has stolen Parris&apos;s money and fled. Neighbouring towns have rejected the witch trials, and Parris fears rebellion. Danforth refuses to postpone the hangings, fearing it would cast doubt on the twelve already executed. Hale, consumed by guilt, returns to urge prisoners to confess falsely and save their lives. Elizabeth is brought to persuade Proctor. In their painful reunion, Elizabeth admits her own coldness contributed to the affair. Proctor considers confessing falsely. He signs a confession but refuses to let it be displayed publicly &mdash; he will not give up his name. When Danforth demands the signed paper, Proctor tears it up, choosing to die rather than live a lie. He goes to the gallows with Rebecca Nurse and Martha Corey. Elizabeth, asked to change his mind, refuses: &ldquo;He have his goodness now. God forbid I take it from him.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Abigail&apos;s flight &mdash; exposing her fraud</li>
                  <li>&bull; Hale begging prisoners to confess to save their lives</li>
                  <li>&bull; John and Elizabeth&apos;s final conversation and reconciliation</li>
                  <li>&bull; Proctor signs then tears up his confession</li>
                  <li>&bull; Proctor&apos;s execution &mdash; choosing death over dishonour</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="8 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              {/* John Proctor */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">John Proctor</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Proctor is the play&apos;s tragic hero. He is a farmer, independent-minded, and respected in the community, but he carries deep guilt for his affair with Abigail Williams. His internal conflict &mdash; between his sense of himself as a sinner and his desire to do what is right &mdash; drives the play. Proctor is sceptical of the hysteria from the start but is reluctant to act because exposing Abigail means exposing his own sin. His journey is toward moral redemption: by choosing to die rather than sign a false confession, he reclaims his integrity and his &ldquo;name.&rdquo; Miller modelled Proctor as a common man who achieves tragic stature through his willingness to sacrifice everything for his principles.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Because it is my name! Because I cannot have another in my life!"
                    speaker="Proctor"
                    act="Act 4"
                    analysis="Proctor's most famous line. His 'name' represents his identity, integrity, and legacy. The exclamation marks and repetition of 'because' show his desperate conviction. He would rather die honest than live a lie. This mirrors Eddie Carbone's obsession with his 'name' -- both Miller protagonists define themselves through reputation."
                  />
                  <Quote
                    text="I have three children -- how may I teach them to walk like men in the world, and I sold my friends?"
                    speaker="Proctor"
                    act="Act 4"
                    analysis="Proctor refuses to name others in his confession. This connects personal morality to parenting and community responsibility. 'Walk like men' links honesty to masculinity in a healthy way -- unlike Eddie Carbone, Proctor defines manhood through moral courage."
                  />
                </div>
              </div>

              {/* Abigail Williams */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Abigail Williams</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Abigail is the play&apos;s primary antagonist. An orphan who witnessed her parents&apos; murder by Native Americans, she is cunning, manipulative, and ruthless. Her affair with Proctor has given her a taste of adult power, and when he rejects her, she weaponises the witch trials to destroy Elizabeth Proctor and reclaim him. Abigail understands the power dynamics of Salem: in a society where girls have no voice, the trials give her extraordinary authority. Adults, judges, and ministers defer to her. However, Miller also invites some sympathy &mdash; Abigail is a product of a repressive society that offers young women no legitimate path to power. When the trials collapse, she steals Parris&apos;s money and flees, revealing her self-interest.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I have a sense for heat, John, and yours has drawn me to my window, and I have seen you looking up, burning in your loneliness"
                    speaker="Abigail"
                    act="Act 1"
                    analysis="Abigail uses sensual language to try to reignite the affair. 'Heat' and 'burning' are metaphors for desire -- but also foreshadow the fires of the trials she will ignite. She is perceptive about Proctor's loneliness but uses that knowledge manipulatively."
                  />
                  <Quote
                    text="I want the light of God, I want the sweet love of Jesus! I danced for the Devil; I saw him; I wrote in his book"
                    speaker="Abigail"
                    act="Act 1"
                    analysis="Abigail's false 'confession' is a masterclass in manipulation. She adopts religious language to present herself as a penitent sinner, gaining the adults' trust while deflecting blame onto others. The irony is that this is her most dishonest moment, performed in the language of spiritual truth."
                  />
                </div>
              </div>

              {/* Elizabeth Proctor */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Elizabeth Proctor</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Elizabeth is John Proctor&apos;s wife, a woman of deep moral principle. She struggles to forgive John&apos;s affair, and their marriage is cold and strained at the play&apos;s opening. Abigail describes her as &ldquo;a cold, snivelling woman,&rdquo; but Elizabeth&apos;s reserve comes from pain, not cruelty. Her one lie &mdash; denying John&apos;s adultery to protect him &mdash; is tragically the one moment her honesty fails, and it condemns him. In Act 4, she achieves remarkable growth, acknowledging her own share of responsibility: &ldquo;I have sins of my own to count.&rdquo; Her final line, &ldquo;He have his goodness now,&rdquo; shows her understanding that Proctor&apos;s death is an act of moral reclamation she must respect.
                </p>
                <Quote
                  text="He have his goodness now. God forbid I take it from him"
                  speaker="Elizabeth"
                  act="Act 4"
                  analysis="The play's final line. Elizabeth recognises that Proctor's refusal to confess falsely has restored his integrity -- his 'goodness.' To persuade him to live would be to take that away. It is a devastating act of love and respect, choosing his moral wholeness over her desire to keep him alive."
                />
              </div>

              {/* Reverend Hale */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Reverend Hale</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Hale undergoes the most dramatic transformation in the play. He arrives in Act 1 as a confident, eager intellectual, proud of his expertise in witchcraft and certain of his mission. As the trials progress, he grows increasingly uneasy. By Act 3, he denounces the proceedings and quits the court. In Act 4, he returns, consumed by guilt, begging the condemned to confess falsely and save their lives. His arc represents the journey from certainty to doubt &mdash; from intellectual arrogance to moral humility. Miller uses Hale to show how intelligent, well-meaning people can become complicit in injustice when they trust systems more than their own conscience.
                </p>
                <Quote
                  text="I denounce these proceedings, I quit this court!"
                  speaker="Hale"
                  act="Act 3"
                  analysis="Hale's climactic break with the court. 'Denounce' is a powerful, formal word -- he is not just leaving but publicly condemning the process. This is an act of conscience that costs him his professional identity. He sees the truth too late to save the condemned but not too late to redeem himself."
                />
              </div>

              {/* Danforth */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Deputy Governor Danforth</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Danforth is the senior judge of the witch trials. He is intelligent, authoritative, and utterly convinced of his own rightness. He refuses to entertain the possibility that the girls are lying because to do so would mean the court has condemned innocent people &mdash; and that would undermine the authority of the law and the church. Danforth prioritises the institution over justice: he cannot afford to be wrong, so he will not allow evidence that contradicts the girls. He represents the danger of institutional authority that values its own legitimacy above truth. Even when the evidence collapses, he proceeds with the executions.
                </p>
                <Quote
                  text="A person is either with this court or he must be counted against it, there be no road between"
                  speaker="Danforth"
                  act="Act 3"
                  analysis="Danforth's binary logic eliminates nuance and dissent. Anyone who questions the court is treated as an enemy. This mirrors McCarthyist rhetoric -- 'you're either with us or against us.' Miller shows how authority figures use false dichotomies to silence opposition and maintain power."
                />
              </div>

              {/* Reverend Parris */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Reverend Parris</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Parris is Salem&apos;s minister, a vain, insecure man more concerned with his reputation and salary than with spiritual matters. He initially tries to suppress the witchcraft rumours to protect himself, then supports the trials when they enhance his authority. He is a poor leader: self-pitying, paranoid, and materialistic. By Act 4, when Abigail has stolen his money and the community is turning against the trials, he becomes a weak advocate for postponement &mdash; not out of justice but out of fear. Miller uses Parris to show how self-serving leaders enable injustice.
                </p>
              </div>

              {/* Rebecca Nurse */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Rebecca Nurse</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Rebecca is the moral heart of the community &mdash; elderly, respected, and deeply pious. Her arrest shocks everyone because she is universally known to be good. She refuses to confess falsely, choosing execution over a lie. Rebecca represents genuine Christian virtue against the corrupted Christianity of the trials. Her calm acceptance of death provides a moral counterpoint to Proctor&apos;s more agonised journey. Her execution marks the trials&apos; complete moral bankruptcy.
                </p>
              </div>

              {/* Giles Corey */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Giles Corey</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Giles is an elderly but spirited farmer who inadvertently contributed to his wife&apos;s arrest by mentioning she reads books. He tries to fight the trials through legal means, presenting evidence that Putnam is manipulating the accusations. When pressed to reveal his informant, Giles refuses to name names &mdash; a direct parallel to Miller&apos;s own refusal before HUAC. Historically, Giles Corey was pressed to death with stones, refusing to enter a plea. His last words, &ldquo;More weight,&rdquo; are an act of extraordinary defiance.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Key Themes" badge="7 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Hysteria */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Mass Hysteria
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The witch trials are driven by collective hysteria &mdash; a contagious fear that overrides reason, evidence, and compassion. Miller shows how hysteria operates: it begins with a small event (the girls dancing), is amplified by existing tensions (land disputes, grudges, religious anxiety), and is sustained by the authority of the court. Once the process begins, accusation becomes proof: to deny witchcraft is seen as further evidence of guilt. Individuals who might privately doubt the accusations dare not speak up for fear of being accused themselves. Miller draws a direct parallel to McCarthyist America, where the accusation of communism functioned in the same self-reinforcing way.
                </p>
                <Quote
                  text="I saw Goody Osburn with the Devil! I saw Bridget Bishop with the Devil!"
                  speaker="Abigail"
                  act="Act 1"
                  analysis="The rhythmic repetition of 'I saw... with the Devil!' creates a chilling chant. Each accusation emboldens the next. The girls' frenzy is simultaneously performance and genuine hysteria -- the line between the two blurs, which is part of Miller's point about how mass delusion works."
                />
              </div>

              {/* Reputation */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Reputation and Integrity
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In the theocratic society of Salem, reputation is everything &mdash; it determines social standing, economic opportunity, and even survival. Parris fears the witchcraft accusations will damage his position. Proctor&apos;s reluctance to expose Abigail stems from his fear of public shame. His final choice &mdash; tearing up the confession rather than having his &ldquo;name&rdquo; displayed on the church door &mdash; is the climactic moment. Miller distinguishes between reputation (what others think of you) and integrity (what you know about yourself). Proctor ultimately chooses integrity: he would rather die with his goodness than live with a lie attached to his name.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="How may I live without my name? I have given you my soul; leave me my name!"
                    speaker="Proctor"
                    act="Act 4"
                    analysis="Proctor separates his external confession (giving his soul) from his public identity (his name). He is willing to lie privately but not to have that lie made public -- because a public lie would define him forever. This is the moment he reclaims his integrity by refusing to let his name be used to legitimise the trials."
                  />
                  <Quote
                    text="I have fought here three long years to bend these stiff-necked people to me"
                    speaker="Parris"
                    act="Act 1"
                    analysis="Parris reveals his ministry is about power, not faith. 'Bend... to me' shows he wants submission, not genuine respect. His concern is entirely about his own authority, contrasting sharply with Proctor's concern for genuine moral standing."
                  />
                </div>
              </div>

              {/* Power and Authority */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-indigo-500" />
                  Power and Authority
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play explores how power operates in a theocracy. In Salem, church and state are one: religious authority is political authority. The trials give power to those who previously had none &mdash; young girls, slaves, and marginalized people can accuse the most respected members of society. Abigail, who has no social standing, becomes the most powerful person in Salem. Danforth and the judges wield enormous power but are trapped by it: they cannot reverse course without admitting they have killed innocent people. Miller shows that unchecked power, whether wielded by a teenage girl or a deputy governor, is equally dangerous when there are no mechanisms for accountability.
                </p>
              </div>

              {/* Morality and Conscience */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  Morality and Conscience
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play asks: what is the moral choice when the law itself is unjust? Proctor, Rebecca Nurse, and Giles Corey choose death over false confession &mdash; they prioritise their conscience over survival. Hale, by contrast, begs them to lie and save themselves, arguing that life itself is the highest good. Miller leaves this tension unresolved, but the play&apos;s emotional weight falls with the martyrs. The title itself is significant: a crucible is a vessel in which metals are refined by extreme heat. The trials are a crucible that burns away pretence and reveals each character&apos;s true moral nature.
                </p>
                <Quote
                  text="It is no part of salvation that you should use me!"
                  speaker="Proctor"
                  act="Act 4"
                  analysis="Proctor refuses to let the court use his confession to validate the trials. 'Salvation' takes on a double meaning: spiritual salvation and physical survival. He recognises that a false confession would serve the court's interests, not his soul's."
                />
              </div>

              {/* Religion and Theocracy */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  Religion and Theocracy
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Salem is a theocracy: a society governed by religious law. There is no separation between sin and crime. This means that private moral failings (like adultery) become public legal matters, and dissent from religious authority is treated as criminal. The trials pervert religion: confession becomes a tool of power, prayer is used as evidence, and the court claims to speak for God. Miller contrasts genuine faith (Rebecca Nurse&apos;s quiet piety) with corrupted religion (Parris&apos;s self-serving ministry, Danforth&apos;s rigid legalism). The play warns against societies where religious authority operates without checks.
                </p>
              </div>

              {/* Guilt and Redemption */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Guilt and Redemption
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Proctor&apos;s guilt over his affair drives much of the plot. He sees himself as a fraud &mdash; &ldquo;I am no good man&rdquo; &mdash; and this self-doubt paralyses him when he should be opposing the trials. His final act of tearing up the confession is simultaneously an act of defiance and of self-forgiveness: by choosing to die honestly, he reclaims his sense of himself as a good man. Hale&apos;s arc is also one of guilt: he helped set the trials in motion and spends Act 4 trying desperately to undo the damage. Elizabeth&apos;s admission that she too bears responsibility for the affair (&ldquo;I have sins of my own to count&rdquo;) completes the play&apos;s pattern of moral reckoning.
                </p>
              </div>

              {/* Fear and Conformity */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted0" />
                  Fear and Conformity
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Fear drives the trials at every level. The community fears the Devil, Parris fears for his position, the girls fear punishment, the accused fear execution. This pervasive fear produces conformity: people confess to crimes they did not commit because confession is the only way to survive. Those who resist &mdash; Proctor, Rebecca, Giles &mdash; are destroyed. Miller shows how fear creates a society where truth is impossible because honesty is punished and lies are rewarded. This is the direct parallel to McCarthyism: in both Salem and 1950s America, people were coerced into conformity through fear.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotations" title="Key Quotations" badge="20+ Quotes" colour="bg-amber-600">
            <p className="text-sm text-muted-foreground mb-4">
              These are the most important quotations to learn. Each one can be applied to multiple themes and characters.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">John Proctor</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="I have known her, sir. I have known her" speaker="Proctor" act="Act 3"
                    analysis="Proctor's public confession of adultery. 'Known' is the biblical term for sexual relations. The repetition shows his difficulty in speaking the truth. He sacrifices his reputation to expose Abigail -- but Elizabeth's lie undoes this sacrifice." />
                  <Quote text="God is dead!" speaker="Proctor" act="Act 3"
                    analysis="Proctor's cry of despair when the court rejects the truth. In a theocracy, this is the ultimate blasphemy. He means that if the court -- which claims to act in God's name -- is unjust, then God's presence in Salem is dead. It is an accusation against the system, not a statement of atheism." />
                  <Quote text="You are pulling Heaven down and raising up a whore!" speaker="Proctor" act="Act 3"
                    analysis="Proctor accuses the court of inverting the moral order: destroying the righteous (Heaven) and empowering the corrupt (Abigail). The violent imagery ('pulling down,' 'raising up') shows his fury. This is the play's most direct condemnation of the trials." />
                  <Quote text="I am no good man. Nothing's spoiled by giving them this lie that were not rotten long before" speaker="Proctor" act="Act 4"
                    analysis="Proctor considers false confession, arguing he is already morally compromised. This self-loathing shows his guilt over the affair. His eventual rejection of this logic -- choosing integrity over self-condemnation -- is his redemptive arc." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Abigail Williams</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="She is blackening my name in the village! She is telling lies about me!" speaker="Abigail" act="Act 1"
                    analysis="Abigail accuses Elizabeth of damaging her reputation -- ironic since Abigail will use the trials to destroy Elizabeth. The focus on 'name' connects to the play's broader theme of reputation. Abigail projects her own behaviour onto Elizabeth." />
                  <Quote text="Let either of you breathe a word, or the edge of a word, about the other things, and I will come to you in the black of some terrible night and I will bring a pointy reckoning" speaker="Abigail" act="Act 1"
                    analysis="Abigail threatens the other girls into silence. 'Pointy reckoning' is a threat of physical violence. This speech reveals her true nature before the adult world sees her performance of innocence. She is not a victim but a calculating manipulator." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Other Characters</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="We are what we always were in Salem, but now the little crazy children are jangling the keys of the kingdom" speaker="Proctor" act="Act 2"
                    analysis="Proctor points out that Salem hasn't changed -- the same grudges and sins existed before. The difference is that the girls now have power ('keys of the kingdom'). 'Jangling' is dismissive -- they are playing with power they do not understand." />
                  <Quote text="Theology, sir, is a fortress; no crack in a fortress may be accounted small" speaker="Hale" act="Act 2"
                    analysis="Hale's early certainty that religious orthodoxy must be absolute -- any deviation is dangerous. This rigid thinking enables the trials. Ironically, Hale himself later 'cracks' the fortress by denouncing the court, showing that moral growth requires abandoning certainty." />
                  <Quote text="More weight" speaker="Giles Corey" act="Act 4 (reported)"
                    analysis="Giles's final words as he is pressed to death with stones. By refusing to enter a plea, he prevented the court from confiscating his land (protecting his sons' inheritance). 'More weight' is an act of extraordinary defiance -- he turns his own death into a protest. It also parallels Miller's refusal to name names." />
                  <Quote text="I have sins of my own to count... I counted myself so plain, so poorly made, no honest love could come to me!" speaker="Elizabeth" act="Act 4"
                    analysis="Elizabeth's moment of self-reckoning. She admits that her coldness contributed to John's affair. This is not self-blame but genuine moral accounting. By acknowledging her own imperfection, she creates the space for genuine reconciliation with John." />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Historical Context" colour="bg-cyan-600">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground">McCarthyism and the Red Scare (1950s)</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Miller wrote <em>The Crucible</em> in 1953, at the height of McCarthyism. Senator Joseph McCarthy led the House Un-American Activities Committee (HUAC), which investigated suspected communists in government, the military, and the entertainment industry. Like the Salem trials, McCarthyism relied on accusation as proof: being named was enough to destroy your career. People were pressured to &ldquo;name names&rdquo; &mdash; to inform on colleagues and friends. Miller himself was called before HUAC in 1956 and, like Proctor, refused to name others. He was found guilty of contempt of Congress (later overturned). The parallel is deliberate and central to understanding the play.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Salem Witch Trials (1692)</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The historical Salem witch trials lasted from February 1692 to May 1693. Twenty people were executed (nineteen by hanging, one by pressing) and over two hundred were accused. The trials were eventually discredited and the colony issued a formal apology. Miller took some liberties: he aged Abigail Williams (historically eleven years old), merged some characters, and invented the Proctor-Abigail affair. However, the core events are historically grounded. The trials have become a byword for unjust persecution driven by fear and superstition.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Puritanism and Theocracy</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Salem was a Puritan theocracy: religion and government were inseparable. Puritans believed in original sin, predestination, and the constant presence of the Devil. Their society was strict, suspicious of pleasure, and intolerant of dissent. Individual expression was distrusted; conformity was enforced. The forest represented the wilderness beyond civilisation &mdash; the Devil&apos;s domain. Miller shows how this repressive environment created the conditions for the trials: suppressed desires, unexpressed resentments, and fear of the unknown all erupted as accusations of witchcraft.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Title: &ldquo;The Crucible&rdquo;</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A crucible is a container used to heat metals to extreme temperatures in order to purify them, separating valuable metal from impurities. The title is a metaphor for the trials themselves: under extreme pressure, each character&apos;s true nature is revealed. Proctor is &ldquo;purified&rdquo; through his ordeal, emerging with his integrity intact. Others (Parris, the Putnams) are exposed as base. The title also suggests a severe test or trial &mdash; which is what every character faces.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── EXAM TIPS */}
        <div id="exam-tips">
          <Section id="exam-tips" title="Exam Tips" colour="bg-primary">
            <div className="space-y-6">
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                <h3 className="font-bold text-foreground">General Tips for The Crucible</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Always link to McCarthyism:</strong> The play is an allegory. Every essay should connect Salem to 1950s America &mdash; this is essential context.</li>
                  <li>&bull; <strong>Refer to Miller as the dramatist:</strong> Use phrases like &ldquo;Miller uses Proctor to suggest...&rdquo; This shows awareness of authorial intent and the play as a constructed text.</li>
                  <li>&bull; <strong>Discuss the title:</strong> The crucible metaphor is always relevant &mdash; use it to discuss how characters are tested and revealed under pressure.</li>
                  <li>&bull; <strong>Explore the stage directions:</strong> Miller&apos;s extensive prose introductions to each act are part of the text. Reference them in your analysis.</li>
                  <li>&bull; <strong>Multiple interpretations:</strong> Is Abigail a villain or a victim of a repressive society? Is Proctor&apos;s death heroic or needless? The best essays explore both sides.</li>
                  <li>&bull; <strong>Use dramatic terminology:</strong> Discuss dramatic irony, tragic hero, hamartia, climax, and denouement where relevant.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#40197F] px-2 py-0.5 text-xs font-bold text-white">AQA</span>
                  AQA GCSE English Literature &mdash; Paper 2, Section A
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Extract-based question. Discuss how a theme/character is presented in the extract and the play as a whole.</li>
                  <li>&bull; <strong>Marks:</strong> 30 marks + 4 for SPaG = 34 total. Recommended time: ~50 minutes.</li>
                  <li>&bull; <strong>Key tip:</strong> Balance analysis of the extract with discussion of the wider play. Integrate context throughout.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes. Memorise quotations from every act.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#00A651] px-2 py-0.5 text-xs font-bold text-white">CAIE</span>
                  Cambridge IGCSE Literature &mdash; Paper 1 (Drama)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Choice of passage-based question or essay question.</li>
                  <li>&bull; <strong>Marks:</strong> 25 marks per question.</li>
                  <li>&bull; <strong>Key tip:</strong> CAIE rewards personal response and close reading. Show your own engagement with the text and support every point with evidence.</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section id="practice" title="Practice Questions" badge="3 Questions" colour="bg-orange-600">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">Question 1</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Miller present the theme of reputation in <em>The Crucible</em>? Refer to the whole play in your answer.
                </p>
                <AITextArea
                  placeholder="Write your response here..."
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="The Crucible - Reputation"
                  minWords={100}
                />
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Question 2</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Miller use the character of John Proctor to explore ideas about integrity and morality? You should consider the whole play in your response.
                </p>
                <AITextArea
                  placeholder="Write your response here..."
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="The Crucible - Proctor and integrity"
                  minWords={100}
                />
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Question 3</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  &ldquo;The Crucible shows that fear is the most powerful force in any society.&rdquo; To what extent do you agree? Refer to the whole play in your answer.
                </p>
                <AITextArea
                  placeholder="Write your response here..."
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="The Crucible - Fear and power in society"
                  minWords={100}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
