"use client";

import { useState } from "react";

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
            <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-600">
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
    <div className="rounded-lg border-l-4 border-accent bg-accent-50/40 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function MuchAdoRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 uppercase tracking-wider">Shakespeare</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">AQA</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Edexcel</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">CAIE</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Much Ado About Nothing &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need to know for your GCSE English Literature exam. Scene-by-scene plot, character profiles,
          themes with evidence, 20+ key quotations with analysis, historical context, and exam technique.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "Essay Planning", "Exam Board Tips"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent-50 hover:text-accent-600 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section id="plot" title="Scene-by-Scene Plot Summary" badge="5 Acts" colour="bg-primary" defaultOpen>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-foreground">1</span>
                Act 1 &mdash; Arrival and Sparring
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A messenger arrives in Messina to announce that Don Pedro, Prince of Aragon, is returning from a victorious military campaign. He is accompanied by the young soldier Claudio and the witty Benedick. Leonato, the Governor of Messina, welcomes them along with his daughter Hero and his niece Beatrice. Beatrice and Benedick immediately engage in a &ldquo;merry war&rdquo; of insults, each claiming to despise the other. Claudio confides in Benedick and then Don Pedro that he has fallen in love with Hero. Don Pedro offers to woo Hero on Claudio&apos;s behalf at the masked ball that evening. Meanwhile, Don John, Don Pedro&apos;s illegitimate brother and the play&apos;s villain, arrives resentfully. Antonio, Leonato&apos;s brother, reports a garbled version of Don Pedro&apos;s plan, mistakenly believing the Prince intends to woo Hero for himself.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Beatrice and Benedick&apos;s first &ldquo;skirmish of wit&rdquo; (1.1)</li>
                  <li>&bull; Claudio declares his love for Hero (1.1)</li>
                  <li>&bull; Don Pedro&apos;s plan to woo Hero in disguise at the masquerade (1.1)</li>
                  <li>&bull; Don John introduced as a malcontent: &ldquo;I am a plain-dealing villain&rdquo; (1.3)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-foreground">2</span>
                Act 2 &mdash; The Masked Ball and the Gulling Plots
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                At the masked ball, Don Pedro successfully woos Hero on Claudio&apos;s behalf. However, Don John, eager to cause mischief, tells Claudio that Don Pedro is wooing Hero for himself. Claudio is jealous but the misunderstanding is quickly resolved, and Claudio and Hero are betrothed. Beatrice remarks that she will never marry. Don Pedro hatches a second plan: he, Claudio, and Leonato will trick Benedick into believing Beatrice loves him, while Hero and her gentlewomen will do the same to Beatrice. The &ldquo;gulling&rdquo; of Benedick takes place in the orchard (2.3): Benedick overhears Don Pedro, Claudio, and Leonato discussing Beatrice&apos;s supposed desperate love for him. Benedick is completely taken in and resolves to return her love.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The masked ball and Don John&apos;s first attempted deception (2.1)</li>
                  <li>&bull; Beatrice: &ldquo;I would rather hear my dog bark at a crow than a man swear he loves me&rdquo; (2.1)</li>
                  <li>&bull; Claudio and Hero betrothed; the week-long wait for the wedding (2.1)</li>
                  <li>&bull; The gulling of Benedick in the orchard &mdash; a pivotal comic scene (2.3)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-foreground">3</span>
                Act 3 &mdash; The Gulling of Beatrice and Don John&apos;s Plot
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Hero and Ursula carry out the gulling of Beatrice (3.1): Beatrice overhears them discussing Benedick&apos;s love for her and how proud and scornful Beatrice is. Beatrice is moved and resolves to return Benedick&apos;s love, abandoning her pride. Meanwhile, Don John&apos;s darker plot takes shape. His follower Borachio arranges for Margaret (Hero&apos;s gentlewoman) to appear at Hero&apos;s window at night, pretending to be Hero in a romantic encounter. Don John tells Claudio and Don Pedro that Hero is unfaithful and invites them to witness the &ldquo;proof&rdquo; that night. In a parallel subplot, the comically incompetent constable Dogberry and his watchmen overhear Borachio boasting about the deception. They arrest Borachio and Conrade but Dogberry&apos;s bumbling means the information does not reach Leonato before the wedding.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The gulling of Beatrice: &ldquo;Contempt, farewell! and maiden pride, adieu!&rdquo; (3.1)</li>
                  <li>&bull; Benedick shaves his beard and acts lovesick &mdash; comic transformation (3.2)</li>
                  <li>&bull; Don John tells Claudio and Don Pedro that Hero is disloyal (3.2)</li>
                  <li>&bull; Dogberry and the Watch arrest Borachio (3.3)</li>
                  <li>&bull; Dogberry&apos;s malapropisms when trying to report to Leonato (3.5)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-foreground">4</span>
                Act 4 &mdash; The Shaming of Hero
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The wedding scene (4.1) is the play&apos;s dramatic climax. At the altar, Claudio publicly rejects Hero, calling her a &ldquo;rotten orange&rdquo; and accusing her of infidelity. Don Pedro supports the accusation, and even Leonato, Hero&apos;s own father, turns against her in shame, wishing her dead. Hero faints and is believed dead by most. The Friar, observing Hero&apos;s genuine distress, believes in her innocence and devises a plan: they will pretend Hero is dead to create remorse and buy time for the truth to emerge. Beatrice, furious at the injustice done to her cousin, confronts Benedick. In their most important scene, Benedick confesses his love and Beatrice confesses hers. She then demands: &ldquo;Kill Claudio.&rdquo; After agonising, Benedick agrees to challenge his friend. In 4.2, Dogberry examines Borachio and Conrade, and the truth of Don John&apos;s plot begins to come out, though Dogberry&apos;s incompetence makes the process painfully slow.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Claudio&apos;s public shaming of Hero at the altar (4.1)</li>
                  <li>&bull; Leonato&apos;s reaction: &ldquo;Death is the fairest cover for her shame&rdquo; (4.1)</li>
                  <li>&bull; The Friar&apos;s plan to fake Hero&apos;s death (4.1)</li>
                  <li>&bull; Beatrice and Benedick declare love; &ldquo;Kill Claudio&rdquo; (4.1)</li>
                  <li>&bull; Dogberry&apos;s examination of Borachio (4.2)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-foreground">5</span>
                Act 5 &mdash; Resolution and Reconciliation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Leonato and Antonio confront Claudio and Don Pedro angrily. Benedick then challenges Claudio to a duel. The atmosphere shifts when Dogberry brings forward Borachio, who confesses everything. Claudio is stricken with remorse on learning Hero was innocent and is now &ldquo;dead.&rdquo; Leonato orders Claudio to mourn at Hero&apos;s tomb overnight and then to marry his &ldquo;niece&rdquo; (actually Hero in disguise). Claudio mourns at the tomb with a solemn epitaph. The next morning, the masked &ldquo;niece&rdquo; is revealed to be Hero, alive. Claudio and Hero are reunited. Beatrice and Benedick, initially trying to deny their love again, are exposed by their own love poems and kiss publicly. Don John has been captured trying to flee. The play ends with a dance and celebration, Benedick declaring: &ldquo;man is a giddy thing.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Leonato&apos;s confrontation with Claudio and Don Pedro (5.1)</li>
                  <li>&bull; Benedick challenges Claudio (5.1)</li>
                  <li>&bull; Borachio&apos;s confession reveals the truth (5.1)</li>
                  <li>&bull; Claudio&apos;s vigil at Hero&apos;s tomb (5.3)</li>
                  <li>&bull; Hero unmasked; Beatrice and Benedick&apos;s love poems revealed (5.4)</li>
                  <li>&bull; Final dance: &ldquo;let&apos;s have a dance ere we are married&rdquo; (5.4)</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="9 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              {/* Beatrice */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Beatrice</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Beatrice is Shakespeare&apos;s most brilliant comic heroine &mdash; witty, independent, outspoken, and fiercely loyal. She engages in a &ldquo;merry war&rdquo; of words with Benedick, using humour to deflect emotional vulnerability. Her sharp tongue masks deeper feelings: the play hints that she and Benedick had a previous relationship that ended painfully (&ldquo;he lent it me awhile, and I gave him use for it, a double heart for his single one&rdquo;). She is an unconventional woman for her era, openly mocking marriage and male authority. However, she is not cold &mdash; her passionate defence of Hero in the church scene reveals her capacity for fierce love and moral courage. Her demand &ldquo;Kill Claudio&rdquo; is shocking but arises from genuine outrage at injustice. She recognises that as a woman she cannot challenge Claudio herself (&ldquo;O that I were a man!&rdquo;), making her frustration with patriarchal constraints painfully visible. Her eventual willingness to love Benedick represents not a surrender of independence but a mature acceptance of vulnerability.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I would rather hear my dog bark at a crow than a man swear he loves me"
                    speaker="Beatrice"
                    act="Act 1, Scene 1"
                    analysis="Beatrice uses deliberately unromantic imagery (a barking dog) to dismiss love. The hyperbole establishes her anti-romantic persona, but the vehemence suggests she protests too much -- she is shielding herself from past hurt."
                  />
                  <Quote
                    text="O that I were a man! ... I would eat his heart in the marketplace"
                    speaker="Beatrice"
                    act="Act 4, Scene 1"
                    analysis="Her frustration explodes at the limits patriarchy places on women. She cannot defend Hero's honour through combat. The visceral, violent imagery ('eat his heart') shows her rage. 'In the marketplace' -- she wants justice to be public, just as Hero's shaming was public."
                  />
                </div>
              </div>

              {/* Benedick */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Benedick</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Benedick is a witty, self-assured soldier who loudly declares himself a &ldquo;professed tyrant&rdquo; to women. Like Beatrice, he uses humour as a defence mechanism. He mocks Claudio&apos;s lovesickness and swears he will never marry. Yet his transformation after the gulling scene is both comic and genuine: he shaves his beard, dresses fashionably, and tries to write love poetry. His willingness to change shows emotional growth rather than weakness. Most significantly, when Beatrice asks him to &ldquo;Kill Claudio,&rdquo; Benedick faces a profound moral choice: loyalty to his male companions versus loyalty to Beatrice and justice. He chooses Beatrice, challenging Claudio to a duel &mdash; an act that requires courage and a willingness to break male bonds. By the end, Benedick has evolved from a posturing bachelor into a man capable of genuine love and moral action, while retaining his wit.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="When I said I would die a bachelor, I did not think I should live till I were married"
                    speaker="Benedick"
                    act="Act 2, Scene 3"
                    analysis="Comic self-justification after overhearing the gulling. Benedick uses wordplay to reconcile his previous anti-marriage stance with his new feelings. The humour lies in his transparent attempt to rationalise a complete reversal of position."
                  />
                  <Quote
                    text="Enough, I am engaged; I will challenge him"
                    speaker="Benedick"
                    act="Act 4, Scene 1"
                    analysis="A turning point: Benedick commits to challenging his friend Claudio. 'Engaged' carries a double meaning -- he is both pledged to the task and emotionally committed to Beatrice. This moment proves his love through action, not just words."
                  />
                </div>
              </div>

              {/* Hero */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Hero</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Hero is the conventional Elizabethan ideal: modest, obedient, gentle, and largely silent in public. She speaks very little in the early acts, especially around men, which reflects the expected behaviour of well-born women. She contrasts sharply with Beatrice&apos;s outspokenness. However, Hero is not merely passive &mdash; she takes an active, witty role in the gulling of Beatrice (3.1), showing intelligence and humour. Her public shaming at the wedding is the play&apos;s most devastating scene. She is given almost no opportunity to defend herself; the men speak over her. Her fainting can be read as her only form of protest in a society that silences women. The fact that she forgives Claudio and agrees to marry him has troubled modern readers, but in the play&apos;s comic conventions, her &ldquo;resurrection&rdquo; from death represents renewal and the triumph of truth. Hero embodies the vulnerability of women whose reputation and worth depended entirely on male perception.
                </p>
                <Quote
                  text="One Hero died defiled, but I do live, / And surely as I live, I am a maid"
                  speaker="Hero"
                  act="Act 5, Scene 4"
                  analysis="Hero speaks of herself in the third person, separating the 'defiled' Hero (a fiction created by men) from her true self. The word 'maid' reclaims her chastity. She must publicly assert her innocence -- the burden of proof lies with the woman, not her accusers."
                />
              </div>

              {/* Claudio */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Claudio</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Claudio is a young soldier whose love for Hero is genuine but shallow and conventional. He falls in love with Hero&apos;s appearance and social status (&ldquo;Can the world buy such a jewel?&rdquo;), treating her as a possession to be acquired. He does not woo her himself but asks Don Pedro to do so, suggesting a passivity and immaturity. He is easily deceived &mdash; twice: first by Don John at the masquerade, then by the window plot. His public shaming of Hero at the altar is the play&apos;s most disturbing scene. Rather than speaking to Hero privately, he turns the wedding into a spectacle of humiliation, returning her to her father like damaged goods. His language is violent and misogynistic (&ldquo;rotten orange,&rdquo; &ldquo;approved wanton&rdquo;). His remorse after learning the truth is genuine, but modern audiences may find it insufficient. Claudio represents the dangers of a patriarchal code that values female chastity as male property and allows men to destroy women&apos;s lives on hearsay.
                </p>
                <Quote
                  text="Give not this rotten orange to your friend"
                  speaker="Claudio"
                  act="Act 4, Scene 1"
                  analysis="Hero is reduced to a commodity -- a piece of fruit handed between men (Leonato to Claudio). 'Rotten' implies corruption beneath a beautiful exterior (appearance vs reality). The metaphor reveals Claudio's view of women as objects whose value depends on sexual purity."
                />
              </div>

              {/* Don Pedro */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Don Pedro</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Don Pedro, Prince of Aragon, is the play&apos;s highest-ranking character and its chief orchestrator. He arranges Claudio&apos;s match with Hero, devises the plot to unite Beatrice and Benedick, and generally acts as a benevolent puppet-master. He represents authority and social order. However, he is also complicit in the shaming of Hero, lending his princely authority to Claudio&apos;s accusations without proper investigation. His willingness to believe Don John&apos;s story reveals a troubling credulity and a society where male testimony automatically outweighs a woman&apos;s word. He is also something of a lonely figure &mdash; he facilitates love for others but remains unmatched himself. His proposal to Beatrice (even if joking) is met with gentle rejection. He functions as both a force for good (the gulling plots) and a force for harm (the shaming), embodying the play&apos;s ambiguity about male authority.
                </p>
              </div>

              {/* Don John */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Don John</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Don John is the play&apos;s antagonist &mdash; a self-confessed &ldquo;plain-dealing villain.&rdquo; As Don Pedro&apos;s illegitimate brother, he occupies a marginal social position: he has recently rebelled against Don Pedro, been defeated, and now lives under his brother&apos;s grudging mercy. His villainy stems partly from resentment at his bastard status and social exclusion. Unlike Shakespeare&apos;s more complex villains (Iago, Edmund), Don John is relatively one-dimensional. He has no elaborate motive; he simply wants to cause pain. He says he would rather be &ldquo;disdained&rdquo; than try to win others&apos; love. His plot against Hero is enabled by the patriarchal system: he knows that an accusation of unchastity will be believed because men control the narrative about women&apos;s honour. His flight after the plot is exposed and his off-stage capture are almost an afterthought &mdash; the play is not really interested in punishing him, which some critics see as problematic.
                </p>
                <Quote
                  text="I am a plain-dealing villain"
                  speaker="Don John"
                  act="Act 1, Scene 3"
                  analysis="Don John openly declares his nature, rejecting the social performance expected of him. Unlike the 'honest' deceptions of the gulling plots, Don John's villainy is transparent to the audience. The word 'plain-dealing' is ironic -- his plot depends on deception, not honesty."
                />
              </div>

              {/* Leonato */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Leonato</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Leonato is the Governor of Messina and Hero&apos;s father. He is initially a generous, hospitable figure who welcomes Don Pedro and his soldiers warmly. However, his response to Hero&apos;s shaming is devastating: rather than defending his daughter, he immediately wishes her dead (&ldquo;Death is the fairest cover for her shame&rdquo;). His honour and public reputation matter more to him than his child&apos;s life. This reaction reveals the brutal reality of patriarchal society: Hero&apos;s value to Leonato is tied to her chastity, and her perceived disgrace shames the entire family. Once the Friar convinces him of Hero&apos;s innocence, Leonato&apos;s grief transforms into righteous anger against Claudio and Don Pedro. His later confrontation with Claudio is genuinely powerful. He represents the patriarchal system &mdash; both its protective and its oppressive dimensions.
                </p>
                <Quote
                  text="Death is the fairest cover for her shame / That may be wished for"
                  speaker="Leonato"
                  act="Act 4, Scene 1"
                  analysis="Leonato would rather Hero die than live with a damaged reputation. 'Fairest cover' suggests death would hide the shame -- appearance matters more than truth. This reveals how patriarchal honour codes prioritise family reputation over a daughter's life."
                />
              </div>

              {/* Dogberry */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Dogberry</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Dogberry is the comically incompetent constable of Messina. He speaks in malapropisms &mdash; constantly using the wrong word (&ldquo;sensible&rdquo; for &ldquo;senseless,&rdquo; &ldquo;desartless&rdquo; for &ldquo;deserving&rdquo;). He is pompous, long-winded, and desperate for respect. However, Dogberry and his Watch are the ones who actually uncover Don John&apos;s plot &mdash; not the clever noblemen. This is deeply ironic: the lowest-status characters in the play see truth more clearly than the aristocrats. Dogberry&apos;s bumbling delays the revelation (he cannot communicate clearly with Leonato), creating dramatic irony and tension for the audience who knows the truth is tantalisingly close. He provides comic relief but also serves a thematic function: truth emerges from unexpected places, and social status does not equate to wisdom or moral clarity.
                </p>
                <Quote
                  text="Write down that they hope they serve God; and write God first, for God defend but God should go before such villains!"
                  speaker="Dogberry"
                  act="Act 4, Scene 2"
                  analysis="Dogberry's confused logic accidentally reverses meaning -- he means to condemn but inadvertently compliments the prisoners. His malapropisms create humour but also highlight the gap between intention and language, mirroring the play's broader concern with misunderstanding and miscommunication."
                />
              </div>

              {/* Margaret */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Margaret</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Margaret is Hero&apos;s gentlewoman and an unwitting participant in Don John&apos;s plot. Borachio arranges for Margaret to appear at Hero&apos;s chamber window, dressed in Hero&apos;s clothes, where Claudio and Don Pedro see her from a distance and believe it to be Hero with a lover. Margaret&apos;s exact level of knowledge is ambiguous &mdash; Shakespeare never fully explains whether she knew what she was doing. She is notably not punished, and Leonato says she was &ldquo;in some fault for this, although against her will.&rdquo; Her role raises questions about class and vulnerability: as a servant, she has little power to refuse Borachio&apos;s requests. She is also witty and bawdy in her conversations with Hero and Beatrice, showing a more assertive side in private female spaces. Margaret&apos;s complicity, whether knowing or not, shows how women of all classes can be used as instruments in male power games.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Major Themes" badge="5 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Love */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Love and Courtship
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play presents two contrasting models of love. Claudio and Hero represent conventional, Petrarchan love: idealistic, based on appearance, conducted through intermediaries (Don Pedro woos on Claudio&apos;s behalf), and fragile when tested. Beatrice and Benedick represent a more modern, egalitarian love built on intellectual equality, mutual respect, and honest (if combative) communication. Shakespeare suggests that love based on wit, self-knowledge, and genuine emotional connection is more durable than love based on idealised appearance. The play also explores love&apos;s relationship with vulnerability &mdash; both Beatrice and Benedick must abandon their defences and risk being hurt. The title itself is a pun: &ldquo;nothing&rdquo; was pronounced &ldquo;noting&rdquo; in Elizabethan English, and much of the &ldquo;ado&rdquo; is caused by people overhearing (noting) things, both true and false.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="She speaks poniards, and every word stabs"
                    speaker="Benedick"
                    act="Act 2, Scene 1"
                    analysis="Benedick describes Beatrice's words as daggers -- love and verbal warfare are intertwined. The military metaphor connects their 'merry war' to the play's martial backdrop. He is both wounded and fascinated by her wit, suggesting desire beneath hostility."
                  />
                  <Quote
                    text="Silence is the perfectest herald of joy: I were but little happy, if I could say how much"
                    speaker="Claudio"
                    act="Act 2, Scene 1"
                    analysis="Claudio claims silence better expresses joy than words. Ironic given his later verbosity in shaming Hero. Also contrasts with Beatrice and Benedick, whose love is expressed entirely through language. Claudio's inarticulate love may be shallow."
                  />
                </div>
              </div>

              {/* Honour and Reputation */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Honour and Reputation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Honour is the play&apos;s most destructive force. In Messina&apos;s patriarchal society, a woman&apos;s honour is equated with her sexual virtue, and it belongs not to her but to the men in her family. When Hero is accused, it is Leonato&apos;s honour that is damaged &mdash; hence his rage at <em>her</em>. Claudio&apos;s honour demands public revenge for a public slight. The entire shaming scene is driven by male honour codes rather than by any desire for truth. The play exposes how dangerous these codes are: Hero is nearly destroyed by an honour system that treats women as property and allows accusation without evidence. Benedick&apos;s willingness to challenge Claudio represents a rejection of the male honour code &mdash; he prioritises justice and his bond with Beatrice over masculine loyalty. The play does not entirely resolve this tension: Hero forgives her accusers, and the comic ending smooths over the violence.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="If I know more of any man alive / Than that which maiden modesty doth warrant, / Let all my sins lack mercy"
                    speaker="Hero"
                    act="Act 4, Scene 1"
                    analysis="Hero's defence is heartbreakingly formal -- she can only assert her innocence through the language of 'maiden modesty.' She must prove a negative (her chastity), which is essentially impossible. The oath reveals how completely women's worth depends on male-defined sexual purity."
                  />
                  <Quote
                    text="What offence hath this man done? ... Marry, sir, he hath offended the prince; and there is flat burglary as ever was committed"
                    speaker="Dogberry"
                    act="Act 4, Scene 2"
                    analysis="Dogberry's confused legal terminology ('flat burglary' for slander) ironically points to a truth: Hero has been robbed -- of her reputation, her wedding, and nearly her life. The malapropism accidentally captures the violence of what has been done to her."
                  />
                </div>
              </div>

              {/* Deception */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-indigo-500" />
                  Deception and Noting
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Deception is the play&apos;s dominant plot mechanism. Shakespeare distinguishes between benign deception (the gulling of Beatrice and Benedick, which leads to love and self-knowledge) and malicious deception (Don John&apos;s plot against Hero, which leads to suffering and near-death). The masked ball in Act 2, where everyone wears literal disguises, is an emblem of the play&apos;s world: nobody is quite what they seem. The title puns on &ldquo;nothing&rdquo; / &ldquo;noting&rdquo; (overhearing and observing): characters are constantly eavesdropping, misinterpreting, and jumping to conclusions based on partial information. The play asks whether deception can ever be justified. The gulling plots work because Beatrice and Benedick already love each other &mdash; the deception merely removes their pride. Don John&apos;s plot works because the men are predisposed to believe the worst of women. Deception succeeds when it aligns with what people already want or fear to believe.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Are our eyes our own?"
                    speaker="Claudio"
                    act="Act 4, Scene 1"
                    analysis="A devastating rhetorical question: Claudio claims he saw Hero's infidelity with his own eyes. But he saw Margaret, not Hero. The question ironically undermines his certainty -- his eyes were NOT reliable. Shakespeare questions whether perception can ever be trusted."
                  />
                  <Quote
                    text="Some Cupid kills with arrows, some with traps"
                    speaker="Hero"
                    act="Act 3, Scene 1"
                    analysis="Hero acknowledges that the gulling is a kind of trap. The metaphor presents love as a hunt -- the lovers are prey. But the 'trap' is benign: it reveals truth rather than creating falsehood. The rhyming couplet gives it a proverbial quality, suggesting love's methods are timeless."
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  Gender and Patriarchy
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play is a sustained exploration of gender dynamics in a patriarchal society. Women exist under male authority: Hero is passed from father (Leonato) to husband (Claudio), and her worth is measured by her sexual purity. Beatrice chafes against these constraints (&ldquo;O that I were a man!&rdquo;), recognising that women have no direct recourse to justice. She cannot challenge Claudio herself &mdash; she must rely on Benedick to act for her. Hero&apos;s silence throughout much of the play is significant: she speaks little in front of men, reflecting the expectation that women should be seen and not heard. The shaming scene dramatises the ultimate consequence of patriarchy: men have the power to destroy a woman&apos;s life based on their word alone, and even her own father accepts their testimony over hers. Beatrice and Benedick&apos;s relationship offers an alternative model &mdash; one based on mutual wit and equality &mdash; though even they cannot fully escape the patriarchal framework.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Would it not grieve a woman to be overmastered with a piece of valiant dust?"
                    speaker="Beatrice"
                    act="Act 2, Scene 1"
                    analysis="Beatrice reduces men to 'valiant dust' -- heroic but ultimately insignificant. 'Overmastered' directly critiques the patriarchal expectation that women must be subordinate. The rhetorical question expects the audience to agree with her. She uses wit to challenge the system she cannot directly overthrow."
                  />
                  <Quote
                    text="O that I were a man for his sake! or that I had any friend would be a man for my sake!"
                    speaker="Beatrice"
                    act="Act 4, Scene 1"
                    analysis="Beatrice's anguish is double: she cannot act because she is a woman, and she has no male ally willing to act for her -- until Benedick steps forward. The repetition of 'man' highlights how power and action are gendered. Her frustration is a direct critique of patriarchal limitations."
                  />
                </div>
              </div>

              {/* Appearance vs Reality */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal-500" />
                  Appearance vs Reality
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play is structured around the gap between appearance and reality. The masked ball is a literal embodiment of this theme: characters wear physical masks, and identities are confused. Claudio mistakes Don Pedro&apos;s wooing (on his behalf) for betrayal. Don John&apos;s entire plot depends on creating a false appearance &mdash; making Margaret look like Hero. Beatrice and Benedick appear to hate each other but actually love each other. Hero appears unfaithful but is innocent. She then appears dead but is alive. The play repeatedly asks: can we trust what we see and hear? The answer is consistently no. Social performance is another dimension: Beatrice and Benedick perform hatred to hide love; Claudio performs courtly romance that conceals a shallow, possessive attitude; Leonato performs fatherly devotion that crumbles at the first test. Only when masks are removed &mdash; literally in the final scene &mdash; can truth and love prevail.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="She is fallen / Into a pit of ink, that the wide sea / Hath drops too few to wash her clean again"
                    speaker="Claudio"
                    act="Act 4, Scene 1"
                    analysis="Claudio uses imagery of staining and washing -- Hero's 'blot' (the false appearance of infidelity) cannot be removed. Ironic because she IS clean; the 'ink' is Don John's lie. The sea imagery echoes Macbeth's 'Neptune's ocean' -- both speakers believe guilt is permanent when it does not exist."
                  />
                  <Quote
                    text="Let every eye negotiate for itself, / And trust no agent"
                    speaker="Claudio"
                    act="Act 2, Scene 1"
                    analysis="After being fooled at the masquerade, Claudio resolves to trust only his own eyes. The irony is devastating: he will later be deceived precisely through his eyes (the window scene). Shakespeare shows that even direct observation is unreliable -- perception is always filtered through expectation and prejudice."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotations" title="Key Quotations with Analysis" badge="24 Quotations" colour="bg-primary">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">Beatrice</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="There is a kind of merry war betwixt Signior Benedick and her; they never meet but there's a skirmish of wit" speaker="Leonato (about Beatrice)" act="Act 1, Scene 1"
                    analysis="'Merry war' is an oxymoron -- their conflict is also their courtship. Military language ('skirmish') links love to the soldiers' world. The fact that Leonato describes this to the messenger suggests it is well-known, a public performance rather than private feeling." />
                  <Quote text="Contempt, farewell! and maiden pride, adieu! / No glory lives behind the back of such" speaker="Beatrice" act="Act 3, Scene 1"
                    analysis="After overhearing Hero, Beatrice abandons her defences. 'Contempt' and 'maiden pride' -- the two things that defined her -- are personified and dismissed. The verse form (she usually speaks prose) signals the depth of this transformation. She chooses love over pride." />
                  <Quote text="I love you with so much of my heart that none is left to protest" speaker="Beatrice" act="Act 4, Scene 1"
                    analysis="Beatrice's declaration is characteristically witty even in sincerity -- she acknowledges that loving fully leaves no room for denial. 'Protest' connects to her earlier protestations against love. The paradox shows that love has conquered her resistance entirely." />
                  <Quote text="You dare easier be friends with me than fight with mine enemy" speaker="Beatrice" act="Act 4, Scene 1"
                    analysis="Beatrice challenges Benedick to prove his love through action. She tests whether his loyalty to her outweighs his bonds with Claudio and Don Pedro. It is also a shrewd observation about male reluctance to challenge other men on behalf of women." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Benedick</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="I do much wonder that one man, seeing how much another man is a fool when he dedicates his behaviours to love, will ... become the argument of his own scorn by falling in love" speaker="Benedick" act="Act 2, Scene 3"
                    analysis="Spoken just before Benedick himself falls in love -- the dramatic irony is perfect. He mocks Claudio's lovesickness and then immediately becomes lovesick himself. Shakespeare shows that no one is immune to love, however much they protest." />
                  <Quote text="I will be horribly in love with her!" speaker="Benedick" act="Act 2, Scene 3"
                    analysis="'Horribly' is a wonderfully comic adverb for love -- Benedick cannot help framing even his capitulation in excessive terms. The exclamation mark conveys enthusiasm despite himself. He transforms immediately from sceptic to lover, showing love's irresistible power." />
                  <Quote text="Serve God, love me, and mend" speaker="Benedick" act="Act 5, Scene 2"
                    analysis="Benedick playfully lists his requirements in descending order of importance. The simplicity and directness contrast with his earlier elaborate protestations against love. He has matured: he can express desire plainly, without elaborate verbal defences." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Claudio and Don Pedro</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="Can the world buy such a jewel?" speaker="Claudio" act="Act 1, Scene 1"
                    analysis="Hero is a 'jewel' -- beautiful, precious, but also an object to be bought. This mercantile language reveals Claudio's transactional view of love and marriage. He values Hero as a possession, foreshadowing his later treatment of her as damaged goods." />
                  <Quote text="You seem to me as Dian in her orb, / As chaste as is the bud ere it be blown; / But you are more intemperate in your blood / Than Venus" speaker="Claudio" act="Act 4, Scene 1"
                    analysis="Claudio contrasts two goddesses: Diana (chastity) and Venus (lust). Hero 'seemed' chaste but is actually lustful, he claims. The imagery of a flower bud ('ere it be blown') implies lost innocence. His elaborate classical references make the shaming a public performance of his own wounded pride." />
                  <Quote text="I think he thinks upon the savage bull. / Tush, fear not, man; we'll tip thy horns with gold" speaker="Don Pedro" act="Act 5, Scene 4"
                    analysis="Don Pedro jokes about cuckoldry ('horns'), turning male anxiety about female infidelity into humour. Even at the resolution, the fear of being cuckolded persists. 'Tip thy horns with gold' tries to make the best of it -- but the joke reveals an underlying patriarchal anxiety that never fully disappears." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Don John</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="I had rather be a canker in a hedge than a rose in his grace" speaker="Don John" act="Act 1, Scene 3"
                    analysis="Don John prefers to be a destructive wild plant ('canker') than a cultivated rose dependent on Don Pedro's favour. The garden imagery connects to the play's concern with natural vs unnatural behaviour. His illegitimacy makes him a 'canker' in the social order -- excluded from the garden of legitimate society." />
                  <Quote text="If I can cross him any way, I bless myself every way" speaker="Don John" act="Act 1, Scene 3"
                    analysis="'Cross' means to thwart or obstruct -- his happiness depends on others' misery. The religious language ('bless') is ironic: his 'blessing' comes from causing harm. Don John's motiveless malignity (he targets Claudio without strong personal reason) makes him a vehicle for the play's darker forces." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Leonato and the Friar</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="Hath no man's dagger here a point for me?" speaker="Leonato" act="Act 4, Scene 1"
                    analysis="Leonato asks to be killed rather than endure the shame of Hero's supposed disgrace. His honour is so wounded that he prefers death -- not Hero's death, but his own. Yet moments later he wishes Hero dead instead. His shifting responses show honour as irrational, self-destructive, and ultimately selfish." />
                  <Quote text="She dying, as it must be so maintained, / Upon the instant that she was accused, / Shall be lamented, pitied, and excused" speaker="The Friar" act="Act 4, Scene 1"
                    analysis="The Friar's plan uses death (appearance) to restore life (reality). He understands how public opinion works: the living Hero was condemned, but the 'dead' Hero will be pitied. He manipulates the same social mechanisms that destroyed her -- rumour, reputation, public sentiment -- to save her." />
                  <Quote text="For it so falls out / That what we have we prize not to the worth / Whiles we enjoy it, but being lacked and lost, / Why, then we rack the value" speaker="The Friar" act="Act 4, Scene 1"
                    analysis="The Friar explains human psychology: we only value things fully when we lose them. This aphorism drives his plan -- Claudio will only appreciate Hero when he believes she is dead. It applies broadly to the play: Beatrice and Benedick only admitted their love under pressure." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Other Key Quotations</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="Sigh no more, ladies, sigh no more, / Men were deceivers ever" speaker="Balthasar (song)" act="Act 2, Scene 3"
                    analysis="This song, performed just before Benedick's gulling, warns women that men are untrustworthy. Ironically, it is the women who are about to deceive Benedick. The song's melancholy note foreshadows the darker deceptions to come. It also functions as a thematic statement about the battle of the sexes." />
                  <Quote text="man is a giddy thing, and this is my conclusion" speaker="Benedick" act="Act 5, Scene 4"
                    analysis="Benedick's final verdict on human nature: 'giddy' means foolish, changeable, dizzy. He acknowledges that his transformation from bachelor to lover is absurd -- but embraces it. The line's lightness and self-awareness make it a fitting conclusion to a comedy about human folly and the irrationality of love." />
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
                <h3 className="font-bold text-foreground">Elizabethan Women and Marriage</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In Elizabethan England, women had very limited legal rights. They could not own property independently, vote, or hold public office. Marriage was the primary route to social and economic security, and it was typically arranged by families with financial and social considerations paramount. A woman&apos;s value was closely tied to her chastity &mdash; virginity before marriage and fidelity after were essential to family honour. The public shaming of Hero reflects a real phenomenon: women accused of sexual impropriety could be publicly humiliated, and the damage to their reputation was often irreparable. Beatrice&apos;s independence and wit make her an unusual figure for the period, though even she ultimately exists within the marriage framework.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Courtship Conventions</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Elizabethan courtship followed strict social conventions. Among the gentry and nobility, marriages were negotiated between families, with the father&apos;s consent essential. Claudio&apos;s approach &mdash; asking Don Pedro to woo Hero on his behalf and then seeking Leonato&apos;s permission &mdash; follows period conventions precisely. Direct courtship between the couple themselves was less common among the upper classes. The Petrarchan tradition of love poetry (idealising the beloved, suffering at her coldness) influenced how love was expressed. Beatrice and Benedick&apos;s relationship, based on witty verbal combat rather than idealised worship, deliberately subverts these conventions. Their love is presented as more authentic precisely because it rejects artifice.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Conventions of Comedy</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <em>Much Ado About Nothing</em> follows the conventions of Shakespearean comedy: it moves from disorder to order, from conflict to reconciliation, and ends in marriage and a dance. The structure typically involves a &ldquo;green world&rdquo; or period of confusion (here, the deceptions and the shaming) followed by a return to harmony. The comic conventions explain some features that modern audiences find troubling: Hero&apos;s forgiveness of Claudio, the relatively light treatment of Don John, and the general sense that all is forgiven. Comedy demands reconciliation, even at the expense of realism. Shakespeare pushes these conventions to their limits &mdash; the darkness of the shaming scene sits uncomfortably within the comic framework, creating a &ldquo;problem comedy&rdquo; that refuses easy resolution.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Honour Culture and the Masculine Code</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Elizabethan society operated within a strict honour code, particularly for men of rank. A man&apos;s honour depended on his reputation for bravery, honesty, and control over his household &mdash; including his wife&apos;s and daughters&apos; sexual behaviour. Being cuckolded (having an unfaithful wife) was considered the ultimate humiliation. Claudio&apos;s extreme reaction to Hero&apos;s supposed infidelity is driven by this code: he sees her alleged behaviour as a direct attack on his honour. Benedick&apos;s challenge to Claudio represents a counter-claim: that honour requires defending the innocent, not merely avenging perceived slights. The play examines how honour codes can be weaponised to harm the vulnerable.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Illegitimacy and Social Status</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Don John&apos;s status as an illegitimate (&ldquo;bastard&rdquo;) son is central to his character. In Elizabethan England, illegitimate children had no legal right to inherit and occupied a marginal social position. They were often viewed with suspicion and associated with moral corruption (the sin of their parents supposedly tainting them). Don John&apos;s villainy can be read through this lens: excluded from legitimate society, he has no stake in its values and every reason to resent those who benefit from the social order. Shakespeare also explores this theme in <em>King Lear</em> (Edmund) and <em>The Tempest</em> (Caliban). The association of illegitimacy with villainy reflects Elizabethan prejudice, which Shakespeare may be endorsing or critiquing &mdash; the ambiguity is deliberate.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Play&apos;s Italian Setting</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Setting the play in Messina, Sicily, follows a common Elizabethan convention: Italy was associated with passion, intrigue, romance, and danger. Audiences expected Italian settings to feature hot-blooded lovers, scheming villains, and elaborate deceptions. The Italian setting gives Shakespeare licence for behaviours that might seem extreme in an English context. The source material for the Hero/Claudio plot comes from Italian sources: Ariosto&apos;s <em>Orlando Furioso</em> and Bandello&apos;s <em>Novelle</em>. The Beatrice and Benedick plot, however, is largely Shakespeare&apos;s invention and is considered the play&apos;s greatest achievement.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section id="essay-planning" title="Essay Planning Templates" colour="bg-orange-600">
            <p className="text-sm text-muted-foreground mb-4">
              These templates show you how to structure responses to common exam questions. Adapt them to fit the specific question wording.
            </p>
            <div className="space-y-6">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">&ldquo;How does Shakespeare present love in Much Ado About Nothing?&rdquo;</h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Conventional love &mdash; Claudio and Hero</p>
                    <p>Claudio&apos;s love is based on appearance: &ldquo;Can the world buy such a jewel?&rdquo; (1.1). Hero is a commodity. He does not woo her himself. Their love is fragile, easily destroyed by deception. Context: Petrarchan conventions, arranged marriage.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Unconventional love &mdash; Beatrice and Benedick</p>
                    <p>Their &ldquo;merry war&rdquo; (1.1) masks genuine connection. Love is expressed through wit, not worship. The gulling scenes reveal that love already existed beneath their defences. They must overcome pride, not discover attraction.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Love tested &mdash; &ldquo;Kill Claudio&rdquo;</p>
                    <p>Beatrice&apos;s demand (4.1) tests whether Benedick&apos;s love extends to action. &ldquo;Enough, I am engaged&rdquo; proves love through moral commitment. Contrasts with Claudio, who abandons Hero on hearsay. Shakespeare values love that demands courage and sacrifice.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: Love and vulnerability</p>
                    <p>&ldquo;I love you with so much of my heart that none is left to protest&rdquo; (4.1). Both Beatrice and Benedick must abandon self-protection. &ldquo;Man is a giddy thing&rdquo; (5.4) &mdash; love is irrational but worth embracing. The comic ending celebrates imperfect, honest love.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">&ldquo;How does Shakespeare present attitudes to women in Much Ado About Nothing?&rdquo;</h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Hero as the patriarchal ideal</p>
                    <p>Hero is silent, obedient, and defined by her chastity. She is exchanged between men (Leonato to Claudio). &ldquo;Silence is the perfectest herald of joy&rdquo; (2.1) &mdash; Claudio values her silence. Context: Elizabethan expectations of women.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: The shaming scene &mdash; patriarchy&apos;s violence</p>
                    <p>Claudio&apos;s &ldquo;rotten orange&rdquo; (4.1) reduces Hero to damaged goods. Leonato wishes her dead. The men speak; Hero is silenced. She is judged on male testimony with no opportunity to defend herself. Context: honour culture, women as property.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Beatrice as resistance</p>
                    <p>&ldquo;O that I were a man!&rdquo; (4.1) &mdash; Beatrice recognises and resists patriarchal constraints. &ldquo;Would it not grieve a woman to be overmastered?&rdquo; (2.1). She cannot act directly but uses wit and Benedick as her &ldquo;instrument.&rdquo; Shakespeare gives voice to female frustration.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: Resolution &mdash; does the ending satisfy?</p>
                    <p>Hero forgives Claudio; Beatrice marries Benedick (&ldquo;Peace! I will stop your mouth&rdquo;). The comic convention demands marriage, but modern audiences may question whether justice has been served. Shakespeare exposes patriarchy&apos;s harm but cannot fully escape its framework.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">&ldquo;How does Shakespeare use deception as a dramatic device in Much Ado About Nothing?&rdquo;</h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Benign deception &mdash; the gulling plots</p>
                    <p>Don Pedro&apos;s plot to unite Beatrice and Benedick uses deception for good. &ldquo;Some Cupid kills with arrows, some with traps&rdquo; (3.1). The deception works because it reveals existing truth. Structure: parallel scenes (2.3 and 3.1) mirror each other.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Malicious deception &mdash; Don John&apos;s plot</p>
                    <p>Don John creates a false appearance of Hero&apos;s infidelity. &ldquo;Are our eyes our own?&rdquo; (4.1) &mdash; Claudio trusts visual evidence that is fabricated. The deception works because the men are predisposed to suspect women. Context: honour culture, male anxiety about cuckoldry.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Self-deception</p>
                    <p>Beatrice and Benedick deceive themselves about their own feelings. Benedick mocks love then falls &ldquo;horribly in love&rdquo; (2.3). Beatrice swears she will never marry then abandons &ldquo;maiden pride&rdquo; (3.1). The greatest deception in the play is the one we practise on ourselves.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: &ldquo;Nothing&rdquo; / &ldquo;noting&rdquo; &mdash; the title&apos;s significance</p>
                    <p>The title puns on &ldquo;noting&rdquo; (overhearing). The entire plot is driven by characters noting (and misinterpreting) things. The Friar&apos;s plan uses strategic deception (faking Hero&apos;s death) to undo malicious deception. Shakespeare suggests that truth is not simply the absence of deception &mdash; sometimes deception is needed to reveal truth.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">&ldquo;How does Shakespeare present honour and reputation in Much Ado About Nothing?&rdquo;</h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Female honour as male property</p>
                    <p>Hero&apos;s honour (chastity) belongs to Leonato and then Claudio. When it is questioned, both men feel <em>their</em> honour is damaged. &ldquo;Death is the fairest cover for her shame&rdquo; (4.1) &mdash; Leonato values his reputation over Hero&apos;s life. Context: patriarchal honour codes.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Claudio&apos;s honour code</p>
                    <p>&ldquo;Give not this rotten orange to your friend&rdquo; (4.1) &mdash; public shaming restores his honour at Hero&apos;s expense. He treats the wedding as a performance of wounded pride. His honour requires a spectacle, not private resolution. Link to appearance vs reality.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Benedick redefines honour</p>
                    <p>By challenging Claudio, Benedick prioritises justice over male loyalty. His honour code values defending the innocent over avenging personal slights. &ldquo;Enough, I am engaged&rdquo; (4.1) &mdash; he commits to a new kind of honour, rooted in love and moral courage rather than masculine pride.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: The restoration of honour</p>
                    <p>Hero&apos;s &ldquo;resurrection&rdquo; restores her honour but raises questions: should the burden of proof have been on her? Claudio mourns at the tomb but never truly reckons with the harm he caused. Shakespeare exposes the honour system&apos;s injustice while working within the comic convention of resolution.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── EXAM BOARD TIPS */}
        <div id="exam-board-tips">
          <Section id="exam-boards" title="Exam Board Comparison" colour="bg-primary">
            <div className="space-y-6">
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#40197F] px-2 py-0.5 text-xs font-bold text-white">AQA</span>
                  AQA GCSE English Literature (8702) &mdash; Paper 1, Section A
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> You receive an extract (roughly 20-30 lines) and must write about how Shakespeare presents a given theme/character, starting with the extract and then exploring the wider play.</li>
                  <li>&bull; <strong>Marks:</strong> 30 marks + 4 for SPaG = 34 total. Recommended time: ~50 minutes.</li>
                  <li>&bull; <strong>AOs tested:</strong> AO1 (response and quotation), AO2 (language/structure/form analysis), AO3 (context).</li>
                  <li>&bull; <strong>Key tip:</strong> Spend roughly 50% of your essay on the extract and 50% on the wider play. Always zoom in on individual words and their effects. Context should be woven in, not bolted on.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes. You will not have the text in the exam. You need memorised quotations from across the play.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#E5231B] px-2 py-0.5 text-xs font-bold text-white">Edexcel</span>
                  Edexcel GCSE English Literature (1ET0) &mdash; Paper 1, Section A
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> You receive an extract and a question asking how Shakespeare presents a theme/character. You must refer to the extract and the play as a whole.</li>
                  <li>&bull; <strong>Marks:</strong> 40 marks total. Recommended time: ~55 minutes.</li>
                  <li>&bull; <strong>AOs tested:</strong> AO1 (ideas and quotation), AO2 (writer&apos;s methods), AO3 (context), AO4 (SPaG, integrated).</li>
                  <li>&bull; <strong>Key tip:</strong> Edexcel places slightly more weight on writer&apos;s methods (AO2). Make sure you analyse HOW Shakespeare achieves effects, not just WHAT he says. Use terminology precisely.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#00A651] px-2 py-0.5 text-xs font-bold text-white">CAIE</span>
                  Cambridge IGCSE Literature (0475 / 0992) &mdash; Paper 1 (Drama)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Two question options: (a) a passage-based question with a printed extract, or (b) an essay question on the whole text. You choose ONE.</li>
                  <li>&bull; <strong>Marks:</strong> 25 marks per question. Total paper time: 1hr 30min for two texts.</li>
                  <li>&bull; <strong>Key tip:</strong> CAIE rewards personal response and close reading. For passage questions, work through the extract systematically. For essay questions, plan carefully and use precise references. CAIE is an open book exam for some routes &mdash; check your specific syllabus variant.</li>
                  <li>&bull; <strong>Open/Closed book:</strong> Depends on component. Some components are open book (clean copies only).</li>
                </ul>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#2A7DE1] px-2 py-0.5 text-xs font-bold text-white">OCR</span>
                  OCR GCSE English Literature (J352) &mdash; Shakespeare Component
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Extract-based question. You must explore the extract and connect it to the wider play. The question focuses on a theme, character, or dramatic moment.</li>
                  <li>&bull; <strong>Marks:</strong> 40 marks. Part of a larger paper.</li>
                  <li>&bull; <strong>AOs tested:</strong> AO1 (response), AO2 (analysis of methods), AO3 (context), AO4 (SPaG).</li>
                  <li>&bull; <strong>Key tip:</strong> OCR values analytical depth over breadth. It is better to analyse three quotations thoroughly than to mention ten superficially. Show how meaning is created through specific word choices and structural decisions.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes.</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
