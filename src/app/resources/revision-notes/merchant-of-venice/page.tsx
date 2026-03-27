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

export default function MerchantOfVeniceRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 uppercase tracking-wider">Shakespeare</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CAIE</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Merchant of Venice &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE English Literature exam. Act-by-act plot, character profiles,
          themes with evidence, 20+ key quotations with analysis, historical context, the trial scene, and exam technique.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "The Trial Scene", "Essay Planning"].map((s) => (
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
        <Section id="plot" title="Act-by-Act Plot Summary" badge="5 Acts" colour="bg-amber-600" defaultOpen>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">1</span>
                Act 1 &mdash; The Bond
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Antonio, a wealthy Venetian merchant, is melancholy for reasons he cannot explain. His friend Bassanio needs money to travel to Belmont and woo the wealthy heiress Portia. Antonio&apos;s wealth is tied up in merchant ships at sea, so they approach Shylock, a Jewish moneylender whom Antonio has previously insulted and spat upon. Shylock agrees to lend 3,000 ducats for three months but proposes a chilling condition: if Antonio defaults, Shylock may take a pound of Antonio&apos;s flesh. Antonio agrees, confident his ships will return in time. Meanwhile, in Belmont, Portia is bound by her dead father&apos;s will: suitors must choose between three caskets (gold, silver, lead) to win her hand. She and Nerissa discuss her unwanted suitors. The Prince of Morocco arrives to try his luck.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Antonio&apos;s unexplained sadness: &ldquo;In sooth, I know not why I am so sad&rdquo; (1.1)</li>
                  <li>&bull; Shylock&apos;s &ldquo;merry bond&rdquo; &mdash; the pound of flesh condition (1.3)</li>
                  <li>&bull; Shylock&apos;s &ldquo;sufferance is the badge of all our tribe&rdquo; speech (1.3)</li>
                  <li>&bull; Portia&apos;s casket test introduced (1.2)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">2</span>
                Act 2 &mdash; Caskets and Elopement
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Prince of Morocco chooses the gold casket, inscribed &ldquo;Who chooseth me shall gain what many men desire,&rdquo; and finds a skull inside &mdash; he has failed. The Prince of Arragon chooses the silver casket (&ldquo;Who chooseth me shall get as much as he deserves&rdquo;) and finds a fool&apos;s head. Meanwhile in Venice, Shylock&apos;s daughter Jessica elopes with Lorenzo, a Christian, taking a significant amount of Shylock&apos;s money and jewels &mdash; including a turquoise ring given to him by his late wife Leah. Shylock is devastated by this double betrayal. Lancelot Gobbo, Shylock&apos;s comic servant, leaves his service for Bassanio&apos;s household. News arrives that Antonio&apos;s ships are in danger at sea.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Morocco&apos;s failure with the gold casket (2.7)</li>
                  <li>&bull; Arragon&apos;s failure with the silver casket (2.9)</li>
                  <li>&bull; Jessica&apos;s elopement with Lorenzo (2.6)</li>
                  <li>&bull; Shylock&apos;s anguish: &ldquo;My daughter! O my ducats!&rdquo; (reported, 2.8)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">3</span>
                Act 3 &mdash; The Casket Choice and the Bond Due
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Shylock delivers his famous &ldquo;Hath not a Jew eyes?&rdquo; speech, passionately arguing for the shared humanity of Jews and Christians, while also vowing revenge. News confirms that Antonio&apos;s ships have been lost. Bassanio arrives in Belmont and, guided by Portia&apos;s subtle hints and a song about &ldquo;fancy,&rdquo; correctly chooses the lead casket (&ldquo;Who chooseth me must give and hazard all he hath&rdquo;), winning Portia&apos;s hand. Portia gives Bassanio a ring, making him swear never to part with it. Nerissa and Gratiano announce they will also marry. Joy turns to horror when Bassanio receives a letter revealing Antonio&apos;s forfeiture. Portia insists Bassanio rush to Venice with money to save Antonio, while she secretly plans to follow disguised as a lawyer.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Shylock&apos;s &ldquo;Hath not a Jew eyes?&rdquo; speech (3.1)</li>
                  <li>&bull; Bassanio chooses the lead casket correctly (3.2)</li>
                  <li>&bull; The ring exchange between Portia and Bassanio (3.2)</li>
                  <li>&bull; Antonio&apos;s letter: &ldquo;all debts are cleared between you and I&rdquo; (3.2)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">4</span>
                Act 4 &mdash; The Trial
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Duke of Venice presides over the trial. Shylock demands his pound of flesh, refusing all offers of money &mdash; even twice and three times the sum owed. Portia arrives disguised as &ldquo;Balthazar,&rdquo; a young doctor of law. She first appeals to Shylock&apos;s mercy with the famous &ldquo;quality of mercy&rdquo; speech, but he refuses. She then appears to rule in Shylock&apos;s favour, telling him he may take the flesh &mdash; but turns the law against him: he may take exactly one pound, no more and no less, and must not shed a single drop of blood (since the bond specifies flesh only). Shylock is defeated. Further, as an alien who has sought the life of a citizen, his wealth is forfeit. Antonio shows &ldquo;mercy&rdquo; by allowing Shylock to keep half his wealth on condition he converts to Christianity and leaves his estate to Jessica and Lorenzo. Shylock exits broken. Portia (still disguised) tricks Bassanio into giving up the ring she gave him, creating the comedic conflict of Act 5.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Portia&apos;s &ldquo;quality of mercy&rdquo; speech (4.1)</li>
                  <li>&bull; The legal technicality: no blood, exact pound (4.1)</li>
                  <li>&bull; Shylock&apos;s forced conversion to Christianity (4.1)</li>
                  <li>&bull; The ring trick &mdash; Bassanio gives up the ring (4.1&ndash;4.2)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">5</span>
                Act 5 &mdash; Reunion at Belmont
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                In the moonlit gardens of Belmont, Jessica and Lorenzo exchange poetic vows about famous lovers from mythology. Portia and Nerissa return and pretend to be angry about the missing rings, teasing their husbands. Eventually they reveal the truth &mdash; that they were the lawyer and clerk at the trial. Antonio receives news that some of his ships have in fact returned safely. Lorenzo and Jessica learn they will inherit Shylock&apos;s estate. The play ends on a comedic note, though the forced conversion of Shylock and his absence from this final scene leave a shadow over the apparent harmony. Shylock is never mentioned again after Act 4.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Lorenzo and Jessica&apos;s moonlight duet: &ldquo;In such a night&rdquo; (5.1)</li>
                  <li>&bull; The ring trick revealed (5.1)</li>
                  <li>&bull; Antonio&apos;s ships return safely (5.1)</li>
                  <li>&bull; The comedic resolution &mdash; but Shylock&apos;s absence haunts the ending</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="9 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              {/* Portia */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Portia</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Portia is the wealthy heiress of Belmont, bound by her dead father&apos;s will to marry whoever correctly chooses among three caskets. She is one of Shakespeare&apos;s most intelligent and resourceful heroines. In Belmont, she appears witty, sharp-tongued, and obedient to her father&apos;s wishes despite her frustration. However, it is in the courtroom that she truly shines: disguised as the male lawyer Balthazar, she delivers the famous &ldquo;quality of mercy&rdquo; speech and then masterfully manipulates Venetian law to defeat Shylock. Her intelligence surpasses every male character in the play. Yet Portia is morally complex &mdash; her mercy speech is eloquent, but her treatment of Shylock is arguably merciless. She also makes casually racist remarks about the Prince of Morocco. She represents the tension between appearance and reality, and between the ideals of mercy and their actual application.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath"
                    speaker="Portia"
                    act="Act 4, Scene 1"
                    analysis="The simile of rain (natural, free, gentle) establishes mercy as divine. 'Not strained' means not forced -- true mercy must be freely given. Ironically, Portia herself does not show mercy to Shylock moments later, undermining her own argument."
                  />
                  <Quote
                    text="I stand for sacrifice"
                    speaker="Portia"
                    act="Act 3, Scene 2"
                    analysis="Portia compares herself to Hesione, a figure offered as a sacrifice. This reveals her willingness to submit to the casket test and her father's will, but also suggests the sacrifices women must make in a patriarchal society."
                  />
                </div>
              </div>

              {/* Shylock */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Shylock</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Shylock is the play&apos;s most debated character. A Jewish moneylender in Venice, he has endured years of abuse from the Christian majority, particularly Antonio. He is presented as both villain and victim. His insistence on the pound of flesh is cruel, yet his &ldquo;Hath not a Jew eyes?&rdquo; speech is one of the most powerful pleas for human equality in literature. He is a loving father devastated by Jessica&apos;s elopement and conversion. His forced conversion to Christianity in the trial is deeply troubling to modern audiences &mdash; presented as &ldquo;mercy&rdquo; by Antonio, it is arguably the cruellest punishment of all, stripping him of his identity, faith, and community. Shakespeare gives him dignity and humanity that complicates the play&apos;s apparent anti-Semitism. Whether Shylock is a tragic figure or a comic villain depends entirely on interpretation and production.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?"
                    speaker="Shylock"
                    act="Act 3, Scene 1"
                    analysis="A sequence of rhetorical questions asserting shared humanity. The list moves from physical ('eyes', 'hands') to emotional ('affections', 'passions'), building a powerful argument for equality. However, the speech ends with Shylock vowing revenge, complicating the message."
                  />
                  <Quote
                    text="I am a Jew. Hath not a Jew eyes? [...] If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?"
                    speaker="Shylock"
                    act="Act 3, Scene 1"
                    analysis="The parallel structure ('If you... do we not...') is devastatingly effective. Each question is unanswerable. But the final shift to 'revenge' shows how suffering has corrupted Shylock -- he uses the argument for shared humanity to justify revenge rather than forgiveness."
                  />
                </div>
              </div>

              {/* Antonio */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Antonio</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The titular &ldquo;merchant of Venice,&rdquo; Antonio is a wealthy Christian merchant who opens the play in a state of unexplained melancholy. His devotion to Bassanio is the play&apos;s deepest bond &mdash; he risks his life by agreeing to Shylock&apos;s terms. He is generous and self-sacrificing with his friends, yet viciously prejudiced against Shylock, admitting he has spat on him and called him a &ldquo;misbeliever, cut-throat dog.&rdquo; His &ldquo;mercy&rdquo; in the trial &mdash; allowing Shylock to live on condition of Christian conversion &mdash; is deeply ambiguous. He represents how Christian society in the play operates: outwardly virtuous and merciful, yet cruel towards outsiders. His passivity in the trial scene, where he seems almost to welcome death, suggests a complex, melancholic psychology.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="In sooth, I know not why I am so sad"
                    speaker="Antonio"
                    act="Act 1, Scene 1"
                    analysis="The play's opening line establishes Antonio's melancholy, which is never fully explained. Some critics link it to his love for Bassanio, others to a sense of existential emptiness. 'In sooth' (in truth) emphasises his genuine confusion about his own feelings."
                  />
                  <Quote
                    text="I am a tainted wether of the flock, / Meetest for death"
                    speaker="Antonio"
                    act="Act 4, Scene 1"
                    analysis="Antonio compares himself to a sick castrated ram ('wether') -- the weakest in the flock. This biblical imagery shows his acceptance of sacrifice and martyrdom. His willingness to die for Bassanio echoes Christian ideals of selfless love, but also suggests passive resignation."
                  />
                </div>
              </div>

              {/* Bassanio */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Bassanio</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Bassanio is a young Venetian gentleman who has spent beyond his means. He describes Portia as &ldquo;a lady richly left&rdquo; &mdash; mentioning her wealth before her beauty or virtue, raising questions about his motives. He borrows money from Antonio (at great risk) to court Portia. He is charming and socially adept but arguably selfish, as he allows Antonio to enter a dangerous bond for his benefit. He correctly chooses the lead casket, showing he understands that true value is not found in outward appearances. In the trial, he offers to pay any sum to save Antonio, showing genuine loyalty. His relationship with Antonio suggests the play&apos;s exploration of love, loyalty, and sacrifice.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="So may the outward shows be least themselves; / The world is still deceived with ornament"
                    speaker="Bassanio"
                    act="Act 3, Scene 2"
                    analysis="Bassanio's casket speech shows his understanding of the appearance vs reality theme. 'Ornament' is deceptive -- gold and silver are attractive but hollow. This insight wins him Portia. Ironically, Bassanio himself could be accused of pursuing the 'ornament' of Portia's wealth."
                  />
                </div>
              </div>

              {/* Jessica */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Jessica</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Shylock&apos;s daughter who elopes with Lorenzo, converting to Christianity and stealing her father&apos;s money and jewels. She is ashamed of her father (&ldquo;to be ashamed to be my father&apos;s child!&rdquo;) and desperate to escape what she sees as a &ldquo;hell.&rdquo; Her elopement is presented sympathetically within the play&apos;s Christian framework, but modern audiences often see her betrayal of Shylock as deeply troubling. She exchanges her mother&apos;s turquoise ring for a monkey &mdash; a detail that reveals either callousness or desperation. She occupies a liminal space between the Jewish and Christian worlds, never fully accepted by either.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I shall be saved by my husband; he hath made me a Christian"
                    speaker="Jessica"
                    act="Act 3, Scene 5"
                    analysis="A deeply ironic line. Jessica claims salvation through conversion, but the forced nature of religious identity change is troubling. 'Made me' suggests passivity -- she has traded one form of control (her father's) for another (her husband's)."
                  />
                </div>
              </div>

              {/* Lorenzo */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Lorenzo</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A Christian friend of Bassanio who elopes with Jessica. He is romantic and poetic, particularly in the moonlight scene in Act 5. However, his romance with Jessica can be seen as troubling: he facilitates the theft of Shylock&apos;s wealth and the destruction of his family. He benefits materially from the relationship and from the trial&apos;s outcome (inheriting Shylock&apos;s estate). His beautiful speeches about music and harmony in Act 5 contrast with the disharmony he has helped cause in Shylock&apos;s life.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="The man that hath no music in himself, / Nor is not moved with concord of sweet sounds, / Is fit for treasons, stratagems, and spoils"
                    speaker="Lorenzo"
                    act="Act 5, Scene 1"
                    analysis="Lorenzo links music appreciation with moral goodness. The triple 'treasons, stratagems, and spoils' condemns those without harmony. Ironically, Lorenzo himself could be accused of 'stratagems' in his elopement with Jessica."
                  />
                </div>
              </div>

              {/* Nerissa */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Nerissa</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Portia&apos;s lady-in-waiting and confidante. She mirrors Portia&apos;s actions throughout the play: she marries Gratiano as Portia marries Bassanio, disguises herself as a lawyer&apos;s clerk during the trial, and plays the ring trick on Gratiano. She provides a social contrast to Portia (lower status but equally witty) and her mirroring of Portia&apos;s actions reinforces the play&apos;s themes of doubling, appearance and reality, and the bond between women.
                </p>
              </div>

              {/* Gratiano */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Gratiano</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A loud, outspoken friend of Bassanio who marries Nerissa. He is the most overtly anti-Semitic character in the play, taunting Shylock viciously during the trial with lines such as &ldquo;A second Daniel!&rdquo; and wishing Shylock dead. He serves as a foil to the more measured characters, revealing the ugliest face of the Christian majority&apos;s prejudice. His coarseness contrasts with Portia&apos;s eloquence and Bassanio&apos;s charm.
                </p>
              </div>

              {/* Lancelot Gobbo */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Lancelot Gobbo</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Shylock&apos;s comic servant who leaves his service for Bassanio&apos;s household. He provides comic relief but also reinforces the play&apos;s themes: his comic debate between his conscience and the &ldquo;fiend&rdquo; mirrors the moral dilemmas faced by other characters. His departure from Shylock mirrors Jessica&apos;s, showing how Shylock is progressively isolated. He engages in bawdy wordplay and malapropisms, and his interactions with his blind father, Old Gobbo, provide physical comedy.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Themes" badge="6 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Justice vs Mercy */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Justice vs Mercy</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The central theme of the play. Shylock demands strict justice (&ldquo;I crave the law&rdquo;), insisting on the letter of his bond. Portia argues for mercy, describing it as a divine quality that &ldquo;is twice blest: / It blesseth him that gives and him that takes.&rdquo; However, the play&apos;s resolution is deeply ironic: the Christians who advocate mercy show none to Shylock, stripping him of his wealth, his religion, and his dignity. The forced conversion is presented as Antonio&apos;s &ldquo;mercy,&rdquo; but it is arguably crueller than the pound of flesh. Shakespeare forces the audience to question whether true justice or true mercy exists in the play at all.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="The quality of mercy is not strained; / It droppeth as the gentle rain from heaven"
                    speaker="Portia"
                    act="Act 4, Scene 1"
                    analysis="Portia's speech frames mercy as natural and divine. The simile of rain -- unforced, universal -- contrasts with the rigid legalism of the courtroom. Yet the speech is undermined by the Christians' subsequent treatment of Shylock."
                  />
                  <Quote
                    text="I crave the law, / The penalty and forfeit of my bond"
                    speaker="Shylock"
                    act="Act 4, Scene 1"
                    analysis="Shylock insists on strict legal justice. 'Crave' suggests desperate need -- the law is all he has in a society that denies him equality. His legalism is villainous but also a rational response to a system that offers him no mercy."
                  />
                </div>
              </div>

              {/* Prejudice and Anti-Semitism */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Prejudice and Anti-Semitism</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Shylock is called &ldquo;the Jew&rdquo; more often than by his name &mdash; he is defined by his religion rather than his individuality. Antonio has spat on him, kicked him, and called him a &ldquo;misbeliever, cut-throat dog.&rdquo; The Christian characters assume moral superiority throughout. The play reflects Elizabethan anti-Semitism but also challenges it: Shylock&apos;s &ldquo;Hath not a Jew eyes?&rdquo; speech is a devastating critique of prejudice. The forced conversion at the trial can be read as Shakespeare exposing the hypocrisy of Christian &ldquo;mercy.&rdquo; Modern productions often foreground this theme, presenting Shylock sympathetically and the Christians as bigoted. The play is both a product of its time and a text that transcends it.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="You call me misbeliever, cut-throat dog, / And spit upon my Jewish gaberdine"
                    speaker="Shylock"
                    act="Act 1, Scene 3"
                    analysis="Shylock lists Antonio's abuses. 'Misbeliever' -- religious prejudice. 'Cut-throat dog' -- dehumanisation. 'Jewish gaberdine' -- his clothing marks him as Other. The calm listing makes Antonio's behaviour seem systematic, not impulsive."
                  />
                  <Quote
                    text="Sufferance is the badge of all our tribe"
                    speaker="Shylock"
                    act="Act 1, Scene 3"
                    analysis="'Sufferance' (patient endurance of suffering) is described as a 'badge' -- something worn, visible, imposed. 'Our tribe' invokes collective Jewish identity and history. The line acknowledges centuries of persecution with bitter resignation."
                  />
                </div>
              </div>

              {/* Love and Friendship */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Love and Friendship</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The play explores multiple forms of love: the romantic love of Portia and Bassanio, Jessica and Lorenzo, Nerissa and Gratiano; the deep, possibly homoerotic bond between Antonio and Bassanio; and the paternal love of Shylock for Jessica. Love is tested throughout: by the casket test (which demands wisdom), by Antonio&apos;s willingness to die for Bassanio, and by the ring trick (which tests marital fidelity). The play asks whether love can be quantified &mdash; Bassanio describes Portia&apos;s wealth before her character, and love seems entangled with money throughout. Antonio&apos;s love for Bassanio creates a triangle of loyalty: Bassanio must choose between his friend and his wife, a tension the ring plot dramatises.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="My purse, my person, my extremest means / Lie all unlocked to your occasions"
                    speaker="Antonio"
                    act="Act 1, Scene 1"
                    analysis="Antonio offers Bassanio everything -- money ('purse'), body ('person'), and his very life ('extremest means'). 'Unlocked' suggests total openness and vulnerability. The listing climaxes in intensity, showing the depth of Antonio's devotion."
                  />
                  <Quote
                    text="In Belmont is a lady richly left"
                    speaker="Bassanio"
                    act="Act 1, Scene 1"
                    analysis="Bassanio introduces Portia with 'richly left' -- her inheritance. Wealth is mentioned before beauty, charm, or virtue. This raises questions about whether Bassanio's love is genuine or financially motivated."
                  />
                </div>
              </div>

              {/* Appearance vs Reality */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Appearance vs Reality</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The casket test embodies this theme: gold and silver are attractive but empty; lead is plain but contains Portia&apos;s portrait. Portia and Nerissa disguise themselves as men, proving more capable than the actual male lawyers. The Christians appear virtuous but behave cruelly; Shylock appears villainous but articulates the most powerful arguments for humanity. Bassanio&apos;s speech on &ldquo;ornament&rdquo; argues that the world is &ldquo;still deceived&rdquo; by appearances, yet he himself may be deceived by Portia&apos;s wealth. The rings &mdash; symbols of fidelity &mdash; are easily given away. Throughout the play, what appears good may be hollow, and what appears base may be valuable.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="All that glisters is not gold"
                    speaker="Scroll in the gold casket"
                    act="Act 2, Scene 7"
                    analysis="A proverb warning against superficial judgement. Morocco chose gold because it seemed most worthy, but found a death's head inside. The casket test is designed to expose those who judge by outward show."
                  />
                  <Quote
                    text="So may the outward shows be least themselves; / The world is still deceived with ornament"
                    speaker="Bassanio"
                    act="Act 3, Scene 2"
                    analysis="Bassanio recognises that appearances are deceptive. 'Still' means always -- the world is permanently fooled. His wisdom in choosing lead shows understanding of true value, which lies beneath the surface."
                  />
                </div>
              </div>

              {/* Wealth */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Wealth and Commerce</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Venice was the commercial capital of Europe, and money permeates every relationship in the play. The bond plot is a financial contract. The casket plot involves an heiress. Jessica steals Shylock&apos;s wealth. The trial punishment involves confiscating Shylock&apos;s property. Even love is expressed in monetary terms: Antonio &ldquo;unlocks&rdquo; his purse, Bassanio treats courtship as an investment. The play interrogates how money shapes human relationships, morality, and identity. Shylock&apos;s moneylending (usury) was considered sinful by Christians, yet their entire world depends on commerce and credit. The hypocrisy of condemning usury while profiting from trade is a key tension.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="My daughter! O my ducats! O my daughter! / Fled with a Christian! O my Christian ducats!"
                    speaker="Shylock (reported by Solanio)"
                    act="Act 2, Scene 8"
                    analysis="The interweaving of 'daughter' and 'ducats' is often read as Shylock valuing money equally with his child. However, this is reported mockingly by Solanio, who may be exaggerating. The repetition suggests overwhelming grief where all losses blur together."
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Gender and Disguise</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Portia is the most intelligent character in the play, yet she can only exercise power by disguising herself as a man. As a woman, she is subject to her father&apos;s will (the casket test) and must submit to her husband. As &ldquo;Balthazar,&rdquo; she commands the courtroom and outwits every man present. This exposes the limitations placed on women in Elizabethan society &mdash; Portia&apos;s abilities exist regardless of her gender, but she can only deploy them when dressed as a man. The ring plot also tests gender dynamics: Portia uses the rings to assert power over Bassanio, reminding him that her cleverness saved Antonio and that she controls the terms of their marriage. Nerissa mirrors this dynamic with Gratiano.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I'll prove the prettier fellow of the two, / And wear my dagger with the braver grace"
                    speaker="Portia"
                    act="Act 3, Scene 4"
                    analysis="Portia playfully claims she will be a more convincing man than actual men. The confidence and wit here is characteristic. 'Braver grace' puns on courage and elegance, suggesting she can outperform men in traditionally masculine roles."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotes" title="Key Quotations with Analysis" badge="22 Quotes" colour="bg-amber-600">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground italic mb-4">
                These quotations cover all major characters and themes. Learn a selection from each category for maximum exam flexibility.
              </p>

              <h3 className="font-bold text-foreground mt-6 mb-3">Shylock</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Quote
                  text="Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?"
                  speaker="Shylock"
                  act="Act 3, Scene 1"
                  analysis="Rhetorical questions asserting shared humanity. The list builds from physical to emotional. One of literature's most powerful arguments against prejudice, yet it culminates in a justification for revenge."
                />
                <Quote
                  text="If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?"
                  speaker="Shylock"
                  act="Act 3, Scene 1"
                  analysis="Parallel conditionals move from universal human responses to the controversial 'revenge'. Shylock argues revenge is equally human -- learned from Christian example. The logic is irrefutable but leads to a morally troubling conclusion."
                />
                <Quote
                  text="You call me misbeliever, cut-throat dog, / And spit upon my Jewish gaberdine"
                  speaker="Shylock"
                  act="Act 1, Scene 3"
                  analysis="A catalogue of Antonio's abuse. Three insults escalating from religious ('misbeliever') to dehumanising ('dog') to physical ('spit'). The 'Jewish gaberdine' -- his distinctive clothing -- marks him as a visible target."
                />
                <Quote
                  text="I would my daughter were dead at my foot, and the jewels in her ear!"
                  speaker="Shylock"
                  act="Act 3, Scene 1"
                  analysis="Often cited as evidence of Shylock's cruelty, but spoken in extreme grief and anger. The hyperbole reveals a man pushed beyond endurance by betrayal. It can also be read as an expression of how much Jessica's loss has devastated him."
                />
                <Quote
                  text="I am not well"
                  speaker="Shylock"
                  act="Act 4, Scene 1"
                  analysis="Shylock's last line before leaving the trial. A masterpiece of understatement after being stripped of wealth, religion, and dignity. The brevity is devastating -- there are no more words for this level of suffering."
                />
              </div>

              <h3 className="font-bold text-foreground mt-6 mb-3">Portia</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Quote
                  text="The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath. It is twice blest: / It blesseth him that gives and him that takes"
                  speaker="Portia"
                  act="Act 4, Scene 1"
                  analysis="Mercy is compared to rain -- natural, divine, universal. 'Twice blest' means it benefits both giver and receiver. This is the play's most famous speech, yet its idealism is undermined by Portia's subsequent mercilessness towards Shylock."
                />
                <Quote
                  text="Tarry a little; there is something else. / This bond doth give thee here no jot of blood"
                  speaker="Portia"
                  act="Act 4, Scene 1"
                  analysis="The dramatic turning point. 'Tarry a little' -- a devastatingly casual introduction to the technicality that destroys Shylock. Portia has been building to this moment, allowing Shylock to commit fully before springing the trap."
                />
                <Quote
                  text="Let me give light, but let me not be light"
                  speaker="Portia"
                  act="Act 5, Scene 1"
                  analysis="A pun on 'light' (illumination vs wanton). Portia controls language as she controls situations. The wordplay reasserts her wit and intelligence in the play's resolution."
                />
              </div>

              <h3 className="font-bold text-foreground mt-6 mb-3">Antonio</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Quote
                  text="In sooth, I know not why I am so sad"
                  speaker="Antonio"
                  act="Act 1, Scene 1"
                  analysis="The play's opening line. Antonio's melancholy is never explained -- it may relate to his love for Bassanio, existential emptiness, or premonition. 'In sooth' emphasises genuine bewilderment."
                />
                <Quote
                  text="The devil can cite Scripture for his purpose"
                  speaker="Antonio"
                  act="Act 1, Scene 3"
                  analysis="Antonio dismisses Shylock's biblical defence of usury by calling him a devil. This dehumanisation is casual and reflexive -- Antonio sees Shylock's use of Scripture as inherently illegitimate because of his Jewishness."
                />
                <Quote
                  text="I am a tainted wether of the flock, / Meetest for death"
                  speaker="Antonio"
                  act="Act 4, Scene 1"
                  analysis="Antonio embraces martyrdom, comparing himself to a castrated ram ('wether'). 'Tainted' suggests corruption or infection. His passive acceptance of death -- almost eagerness -- reveals deep self-sacrifice or possibly depression."
                />
              </div>

              <h3 className="font-bold text-foreground mt-6 mb-3">Bassanio and Others</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Quote
                  text="In Belmont is a lady richly left; / And she is fair"
                  speaker="Bassanio"
                  act="Act 1, Scene 1"
                  analysis="Wealth ('richly left') precedes beauty ('fair') in Bassanio's description. The order reveals priorities -- or at least raises the question of whether his love is genuine or mercenary."
                />
                <Quote
                  text="Who chooseth me must give and hazard all he hath"
                  speaker="Inscription on the lead casket"
                  act="Act 2, Scene 7"
                  analysis="The lead casket demands sacrifice and risk -- the opposite of greed. 'Hazard' means to gamble everything. Only Bassanio is willing to accept this, suggesting true love requires vulnerability."
                />
                <Quote
                  text="All that glisters is not gold"
                  speaker="Scroll in the gold casket"
                  act="Act 2, Scene 7"
                  analysis="A proverb that encapsulates the appearance vs reality theme. Morocco's failure proves that the most attractive option is often empty. 'Glisters' (glitters) suggests superficial, temporary shine."
                />
                <Quote
                  text="The moon shines bright. In such a night as this"
                  speaker="Lorenzo"
                  act="Act 5, Scene 1"
                  analysis="Opens the lyrical final scene. Lorenzo and Jessica compare themselves to famous mythological lovers -- all of whose stories ended tragically (Troilus and Cressida, Pyramus and Thisbe, Dido and Aeneas). The beauty of the language masks dark undertones."
                />
                <Quote
                  text="I am never merry when I hear sweet music"
                  speaker="Jessica"
                  act="Act 5, Scene 1"
                  analysis="A melancholy line amid the celebrations. Jessica's sadness may reflect guilt about her father, alienation from both Jewish and Christian worlds, or awareness that her happiness has come at a terrible cost."
                />
                <Quote
                  text="It is a wise father that knows his own child"
                  speaker="Lancelot"
                  act="Act 2, Scene 2"
                  analysis="Spoken as comedy (Old Gobbo doesn't recognise Lancelot), but it resonates with the Shylock-Jessica plot. Shylock 'knows' Jessica is his daughter but doesn't truly understand her. The proverb inverts: can a child truly know their parent?"
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Historical and Social Context" badge="Essential" colour="bg-teal-600">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Elizabethan Attitudes to Jews</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jews had been expelled from England in 1290 and were not officially readmitted until 1656. Most Elizabethans had never met a Jewish person. Anti-Semitic stereotypes were widespread: Jews were associated with greed, devilry, and child murder (the &ldquo;blood libel&rdquo;). In 1594, shortly before Shakespeare wrote the play, the Queen&apos;s physician Roderigo Lopez (a converted Jew) was executed for allegedly plotting to poison Elizabeth I. Christopher Marlowe&apos;s &ldquo;The Jew of Malta&rdquo; (1589) featured a grotesque Jewish villain. Shakespeare&apos;s Shylock is more complex than Marlowe&apos;s Barabas &mdash; he is given humanity, dignity, and compelling arguments &mdash; but the play still operates within an anti-Semitic framework that modern readers must acknowledge.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Usury and Moneylending</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charging interest on loans (&ldquo;usury&rdquo;) was considered sinful by the medieval Christian Church, based on biblical prohibitions. Jews, excluded from most professions and guilds, were one of the few groups permitted to lend money at interest. This created a paradox: Christian society depended on Jewish moneylenders while condemning the practice. Antonio lends money without interest as a point of Christian principle, which directly undermines Shylock&apos;s business. The play reflects the tension between an emerging capitalist economy (Venice was a hub of international trade) and traditional Christian teaching about money. By 1571, English law had legalised moderate interest, but moral objections remained.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Venice as a Setting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Venice was the most cosmopolitan city in Europe &mdash; a centre of trade where East met West. It was famous for its laws and contracts, making it the perfect setting for a play about bonds and legal disputes. Venice also had a Jewish ghetto (established 1516) &mdash; Jews were confined to a specific area and required to wear identifying clothing. This real-world segregation mirrors the social exclusion Shylock experiences. The play contrasts Venice (commerce, law, conflict) with Belmont (&ldquo;beautiful mountain&rdquo;), a fairy-tale world of music, love, and harmony. However, Belmont&apos;s harmony depends on wealth extracted from Venice&apos;s commercial world.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Marriage and the Law</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In Elizabethan England, women were legally subordinate to their fathers and then their husbands. Portia&apos;s subjection to her dead father&apos;s will reflects this &mdash; she cannot choose her own husband. Marriage was often an economic arrangement as much as a romantic one. Portia&apos;s giving of herself and all her property to Bassanio (&ldquo;Myself and what is mine to you and yours / Is now converted&rdquo;) reflects the legal reality that a wife&apos;s property became her husband&apos;s. The ring plot, where Portia reasserts control over Bassanio, can be seen as Shakespeare subtly questioning these patriarchal arrangements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Religious Conversion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Forced conversion of Jews to Christianity was practised across medieval and early modern Europe. Many Elizabethan audience members would have seen Shylock&apos;s forced conversion as genuinely merciful &mdash; saving his soul. Modern audiences recognise it as a destruction of identity and cultural erasure. The play sits at this uncomfortable intersection: Shakespeare may have intended the conversion as a happy ending (Shylock &ldquo;saved&rdquo;), or he may have been exposing the cruelty of forced assimilation. The ambiguity is one of the play&apos;s most discussed features.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THE TRIAL SCENE */}
        <div id="the-trial-scene">
          <Section id="trial" title="The Trial Scene &mdash; Detailed Analysis" badge="Act 4, Scene 1" colour="bg-red-600">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Act 4, Scene 1 is the play&apos;s dramatic and thematic climax. It brings together every major theme &mdash; justice vs mercy, prejudice, appearance vs reality, and gender &mdash; in a single, extended courtroom sequence. This is the scene examiners are most likely to ask about.
              </p>

              <div>
                <h3 className="font-bold text-foreground mb-2">Structure of the Scene</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border border-border rounded-lg overflow-hidden">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 font-semibold text-muted-foreground border-b">Stage</th>
                        <th className="px-4 py-2 font-semibold text-muted-foreground border-b">What Happens</th>
                        <th className="px-4 py-2 font-semibold text-muted-foreground border-b">Key Techniques</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-2 font-medium text-foreground">Opening</td>
                        <td className="px-4 py-2 text-muted-foreground">The Duke appeals to Shylock for mercy. Shylock refuses, citing the law and his &ldquo;humour.&rdquo;</td>
                        <td className="px-4 py-2 text-muted-foreground">Shylock&apos;s animal imagery (rats, pigs) dehumanises his own position. The Duke&apos;s bias is clear.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium text-foreground">Bassanio&apos;s offer</td>
                        <td className="px-4 py-2 text-muted-foreground">Bassanio offers twice and then three times the sum. Shylock refuses all money.</td>
                        <td className="px-4 py-2 text-muted-foreground">The escalating offers show desperation. Shylock&apos;s refusal proves this is about principle (revenge), not profit.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium text-foreground">Portia&apos;s mercy speech</td>
                        <td className="px-4 py-2 text-muted-foreground">Disguised as Balthazar, Portia delivers the &ldquo;quality of mercy&rdquo; speech.</td>
                        <td className="px-4 py-2 text-muted-foreground">Religious imagery, natural imagery (rain). Rhetorical persuasion. Dramatic irony: the audience knows this is Portia.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium text-foreground">The trap</td>
                        <td className="px-4 py-2 text-muted-foreground">Portia seems to rule for Shylock, then reveals the technicality: flesh but no blood, exactly one pound.</td>
                        <td className="px-4 py-2 text-muted-foreground">Peripeteia (reversal of fortune). Legal wordplay. Portia mirrors Shylock&apos;s own insistence on the letter of the law.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium text-foreground">Shylock&apos;s defeat</td>
                        <td className="px-4 py-2 text-muted-foreground">Shylock tries to take the money instead. Portia refuses &mdash; he has already chosen justice. His wealth is forfeit under Venetian law.</td>
                        <td className="px-4 py-2 text-muted-foreground">Ironic reversal: the law Shylock championed now destroys him. Pathos as he loses everything.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium text-foreground">The &ldquo;mercy&rdquo;</td>
                        <td className="px-4 py-2 text-muted-foreground">Antonio &ldquo;mercifully&rdquo; allows Shylock to keep half his wealth if he converts to Christianity and leaves his estate to Jessica.</td>
                        <td className="px-4 py-2 text-muted-foreground">Deeply ironic &ldquo;mercy.&rdquo; The forced conversion strips Shylock of his identity. His final line: &ldquo;I am not well.&rdquo;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Key Arguments About the Trial</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-sm font-bold text-emerald-800 mb-2">Portia is the hero</p>
                    <ul className="space-y-1 text-sm text-emerald-700">
                      <li>&bull; She saves Antonio&apos;s life through intelligence</li>
                      <li>&bull; She offers Shylock multiple chances to show mercy</li>
                      <li>&bull; She demonstrates that women can excel in male-dominated spaces</li>
                      <li>&bull; She upholds the law while seeking mercy</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-rose-50 border border-rose-200 p-4">
                    <p className="text-sm font-bold text-rose-800 mb-2">Portia is complicit in cruelty</p>
                    <ul className="space-y-1 text-sm text-rose-700">
                      <li>&bull; She allows Shylock to commit fully before springing the trap</li>
                      <li>&bull; She preaches mercy but shows none</li>
                      <li>&bull; She uses the law as a weapon, just as Shylock did</li>
                      <li>&bull; The forced conversion violates the mercy she advocated</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-sm font-bold text-emerald-800 mb-2">Shylock is a villain</p>
                    <ul className="space-y-1 text-sm text-emerald-700">
                      <li>&bull; He seeks to kill a man for a debt</li>
                      <li>&bull; He refuses all offers of money (proving malice)</li>
                      <li>&bull; He sharpens his knife on his shoe in court</li>
                      <li>&bull; He represents the danger of unchecked revenge</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-rose-50 border border-rose-200 p-4">
                    <p className="text-sm font-bold text-rose-800 mb-2">Shylock is a victim</p>
                    <ul className="space-y-1 text-sm text-rose-700">
                      <li>&bull; He has suffered years of systematic abuse</li>
                      <li>&bull; His daughter has betrayed and robbed him</li>
                      <li>&bull; The court is biased against him from the start</li>
                      <li>&bull; His punishment (forced conversion) is disproportionate and cruel</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Exam-Ready Analysis Points</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">1.</span> The trial scene dramatises the conflict between the <strong>Old Testament</strong> (law, justice, &ldquo;an eye for an eye&rdquo;) and the <strong>New Testament</strong> (mercy, forgiveness, grace). However, the Christians fail to practise the mercy they preach.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">2.</span> <strong>Dramatic irony</strong> is sustained throughout: the audience knows Portia is disguised, creating tension and anticipation. Her legal trap is a form of dramatic peripeteia.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">3.</span> Shylock&apos;s isolation is physical and symbolic: he stands alone against the entire Christian court. Even the Duke calls him an &ldquo;inhuman wretch&rdquo; before the trial begins.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">4.</span> The scene raises questions about whether law can ever deliver true <strong>justice</strong>. Both Shylock and Portia use the law as a weapon. The &ldquo;winner&rdquo; is whoever can manipulate the system more effectively.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">5.</span> Shylock&apos;s exit &mdash; &ldquo;I am not well&rdquo; &mdash; is one of the most debated moments in Shakespeare. Does it invite <strong>sympathy</strong> or confirm his <strong>defeat</strong>? The answer depends on production and interpretation.</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section id="essay" title="Essay Planning and Exam Technique" badge="Grade 7-9" colour="bg-primary">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">How to Structure a Literature Essay (PEEL)</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-primary/10 border border-[primary]/20 p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">P</p>
                    <p className="text-sm font-semibold text-foreground mt-1">Point</p>
                    <p className="text-xs text-muted-foreground mt-1">A clear argument that answers the question directly</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">E</p>
                    <p className="text-sm font-semibold text-foreground mt-1">Evidence</p>
                    <p className="text-xs text-muted-foreground mt-1">A short, embedded quotation from the text</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-[primary]/20 p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">E</p>
                    <p className="text-sm font-semibold text-foreground mt-1">Explain</p>
                    <p className="text-xs text-muted-foreground mt-1">Analyse language, structure, form. Use subject terminology</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">L</p>
                    <p className="text-sm font-semibold text-foreground mt-1">Link</p>
                    <p className="text-xs text-muted-foreground mt-1">Connect to context, audience, wider themes, or the question</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Sample Essay Plans</h3>
                <div className="space-y-4">
                  {/* Essay 1 */}
                  <div className="rounded-lg border border-border p-4">
                    <p className="text-sm font-bold text-foreground mb-2">&ldquo;How does Shakespeare present Shylock as both villain and victim?&rdquo;</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong>Introduction:</strong> Thesis &mdash; Shakespeare deliberately creates ambiguity around Shylock, reflecting and challenging Elizabethan anti-Semitism.</p>
                      <p><strong>Paragraph 1 (Villain):</strong> The pound of flesh bond. &ldquo;A pound of man&apos;s flesh&rdquo; &mdash; the dehumanising language reduces Antonio to meat. Shylock&apos;s refusal of money proves malice, not business.</p>
                      <p><strong>Paragraph 2 (Victim):</strong> &ldquo;Hath not a Jew eyes?&rdquo; &mdash; Shylock articulates his suffering with devastating eloquence. Context: Elizabethan anti-Semitism and the Lopez case.</p>
                      <p><strong>Paragraph 3 (Both):</strong> The trial scene &mdash; Shylock demands justice but is destroyed by it. &ldquo;I am not well&rdquo; &mdash; pathos. The forced conversion is &ldquo;mercy&rdquo; that reads as cruelty.</p>
                      <p><strong>Paragraph 4 (Context/Writer&apos;s intent):</strong> Compare with Marlowe&apos;s Barabas. Shakespeare gives Shylock complexity and humanity. Whether Shakespeare intended sympathy or not, the play now provokes it.</p>
                      <p><strong>Conclusion:</strong> The ambiguity is the point &mdash; Shakespeare creates a character who resists simple categorisation, forcing audiences to examine their own prejudices.</p>
                    </div>
                  </div>

                  {/* Essay 2 */}
                  <div className="rounded-lg border border-border p-4">
                    <p className="text-sm font-bold text-foreground mb-2">&ldquo;How does Shakespeare explore the theme of mercy in The Merchant of Venice?&rdquo;</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong>Introduction:</strong> Mercy is the play&apos;s central ideal, but Shakespeare shows the gap between the rhetoric of mercy and its practice.</p>
                      <p><strong>Paragraph 1:</strong> Portia&apos;s &ldquo;quality of mercy&rdquo; speech &mdash; mercy as divine, natural, and freely given. Analyse the imagery and rhetorical structure.</p>
                      <p><strong>Paragraph 2:</strong> Shylock&apos;s refusal of mercy &mdash; he &ldquo;craves the law.&rdquo; Why? Context of his suffering. Mercy has never been shown to him.</p>
                      <p><strong>Paragraph 3:</strong> Antonio&apos;s &ldquo;mercy&rdquo; &mdash; the forced conversion. Ironic inversion of Portia&apos;s speech. What does this &ldquo;mercy&rdquo; actually mean?</p>
                      <p><strong>Paragraph 4:</strong> The play&apos;s conclusion &mdash; Belmont&apos;s harmony vs Shylock&apos;s absence. Can there be mercy without equality? Elizabethan vs modern audience responses.</p>
                      <p><strong>Conclusion:</strong> Shakespeare presents mercy as the highest virtue but shows a society that cannot practise what it preaches.</p>
                    </div>
                  </div>

                  {/* Essay 3 */}
                  <div className="rounded-lg border border-border p-4">
                    <p className="text-sm font-bold text-foreground mb-2">&ldquo;How does Shakespeare present Portia as a powerful female character?&rdquo;</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong>Introduction:</strong> Portia is the most intelligent character in the play, but her power is constrained by gender &mdash; she can only act freely when disguised as a man.</p>
                      <p><strong>Paragraph 1:</strong> Portia in Belmont &mdash; subject to the casket test. &ldquo;I may neither choose whom I would nor refuse whom I dislike&rdquo; &mdash; lack of female agency.</p>
                      <p><strong>Paragraph 2:</strong> Portia as Balthazar &mdash; commands the courtroom, outwits Shylock, saves Antonio. Cross-dressing liberates her intelligence. Context: women could not be lawyers.</p>
                      <p><strong>Paragraph 3:</strong> The ring trick &mdash; Portia reasserts control in her marriage. She proves she saved Antonio and tests Bassanio&apos;s loyalty. Power through wit.</p>
                      <p><strong>Paragraph 4:</strong> Portia&apos;s limitations &mdash; casual racism, mercilessness to Shylock. She is powerful but not morally perfect. Shakespeare creates a complex, realistic heroine.</p>
                      <p><strong>Conclusion:</strong> Portia challenges Elizabethan gender norms but operates within a patriarchal system she cannot fully escape.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Top Tips for Grade 7-9</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Use subject terminology precisely</p>
                    <p className="text-xs text-muted-foreground">Metaphor, simile, rhetorical question, dramatic irony, soliloquy, aside, prose vs verse, peripeteia, pathos, motif, juxtaposition, parallel structure.</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Embed short quotations</p>
                    <p className="text-xs text-muted-foreground">Use 2-5 word quotations woven into your sentences rather than long block quotes. E.g., &ldquo;Shylock&apos;s plea that Jews have &lsquo;hands, organs, dimensions&rsquo; asserts shared humanity.&rdquo;</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Consider alternative interpretations</p>
                    <p className="text-xs text-muted-foreground">Use phrases like &ldquo;Some critics argue...&rdquo; or &ldquo;An Elizabethan audience might have...&rdquo; or &ldquo;However, this could alternatively suggest...&rdquo;</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Integrate context naturally</p>
                    <p className="text-xs text-muted-foreground">Don&apos;t bolt on context as a separate paragraph. Weave it into your analysis: &ldquo;In Elizabethan England, usury was considered sinful, which makes Antonio&apos;s hatred of Shylock not merely personal but ideological.&rdquo;</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Analyse Shakespeare&apos;s methods</p>
                    <p className="text-xs text-muted-foreground">Focus on what Shakespeare <em>does</em> as a writer: &ldquo;Shakespeare uses the casket test as an allegory for...&rdquo; or &ldquo;Shakespeare juxtaposes Venice and Belmont to...&rdquo;</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Track character across the play</p>
                    <p className="text-xs text-muted-foreground">Show how characters change. Shylock moves from resigned patience to vengeful fury. Portia moves from obedient daughter to courtroom authority. Track the arc, don&apos;t just describe a snapshot.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
