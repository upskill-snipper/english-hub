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
    <div className="rounded-lg border-l-4 border-accent bg-primary/10/40 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function OthelloRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wider">Shakespeare</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CAIE</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Othello &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE/IGCSE English Literature exam on Othello. Act-by-act plot, character profiles,
          themes with evidence, 20+ key quotations with analysis, historical context, Iago&apos;s manipulation techniques, and essay planning.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "Iago's Manipulation", "Essay Planning"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/['\s]+/g, "-")}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section id="plot" title="Act-by-Act Plot Summary" badge="5 Acts" colour="bg-red-600" defaultOpen>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">1</span>
                Act 1 &mdash; Elopement and Accusations
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play opens in Venice at night. Iago, a soldier passed over for promotion in favour of Michael Cassio, reveals his hatred for his general, Othello. He and Roderigo (a rejected suitor of Desdemona) wake Brabantio, a Venetian senator, to tell him his daughter Desdemona has secretly married Othello, a Moor. Brabantio is outraged and brings the matter before the Duke. However, the Duke and Senate are preoccupied with an urgent military threat: the Turkish fleet is heading for Cyprus. Othello defends himself with dignity, explaining that Desdemona fell in love with him through the stories of his life and adventures. Desdemona confirms she married freely for love. The Duke sends Othello to command the defence of Cyprus. Desdemona insists on accompanying him. Iago, left alone with Roderigo, reveals his plan to exploit Othello&apos;s trust and use Cassio as a tool for revenge: &ldquo;I hate the Moor.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Iago&apos;s declaration: &ldquo;I am not what I am&rdquo; (1.1)</li>
                  <li>&bull; Brabantio&apos;s racist reaction to the marriage (1.1)</li>
                  <li>&bull; Othello&apos;s eloquent defence before the Senate (1.3)</li>
                  <li>&bull; Iago&apos;s soliloquy revealing his plan to destroy Othello (1.3)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">2</span>
                Act 2 &mdash; Arrival in Cyprus and Cassio&apos;s Downfall
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A storm destroys the Turkish fleet, removing the military threat and leaving the characters stranded on Cyprus with nothing to do but interact. Othello and Desdemona are reunited joyfully. Iago begins his scheme by getting Cassio drunk on watch, knowing Cassio has a weakness for alcohol. Roderigo, manipulated by Iago, provokes a fight with the drunk Cassio, who wounds Montano (the outgoing governor). Othello is furious and strips Cassio of his lieutenancy. Cassio is devastated. Iago then advises the disgraced Cassio to seek Desdemona&apos;s help in regaining Othello&apos;s favour &mdash; seemingly kind advice that is actually the next step in Iago&apos;s plan to make it look as though Cassio and Desdemona are having an affair.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The storm and destruction of the Turkish fleet (2.1)</li>
                  <li>&bull; Othello&apos;s ecstatic reunion with Desdemona (2.1)</li>
                  <li>&bull; Iago manipulates Cassio into drinking (2.3)</li>
                  <li>&bull; Cassio&apos;s disgrace and dismissal (2.3)</li>
                  <li>&bull; Iago&apos;s advice to Cassio: seek Desdemona&apos;s intercession (2.3)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">3</span>
                Act 3 &mdash; The Temptation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                This is the play&apos;s pivotal act. Desdemona pleads with Othello on Cassio&apos;s behalf. Iago seizes his opportunity in the great &ldquo;temptation scene&rdquo; (3.3), planting seeds of jealousy through insinuation, hesitation, and false concern. He warns Othello to &ldquo;beware, my lord, of jealousy&rdquo; while simultaneously stoking it. He suggests Desdemona is unnatural for choosing Othello over men &ldquo;of her own clime, complexion, and degree.&rdquo; Othello begins to crack. By a stroke of fate, Desdemona drops her handkerchief &mdash; Othello&apos;s first gift to her. Emilia finds it and gives it to Iago, who plants it in Cassio&apos;s lodgings. Iago then tells Othello that Cassio has been seen wiping his beard with the handkerchief and fabricates a story about Cassio talking in his sleep about Desdemona. By the end of the act, Othello is consumed by jealousy and vows to kill Desdemona. He kneels with Iago in a dark parody of a marriage ceremony, swearing vengeance.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Desdemona pleads for Cassio (3.3)</li>
                  <li>&bull; The temptation scene: Iago poisons Othello&apos;s mind (3.3)</li>
                  <li>&bull; &ldquo;O, beware, my lord, of jealousy!&rdquo; (3.3)</li>
                  <li>&bull; The handkerchief: Emilia gives it to Iago (3.3)</li>
                  <li>&bull; Othello and Iago&apos;s kneeling vow of vengeance (3.3)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">4</span>
                Act 4 &mdash; Jealousy Takes Hold
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Othello&apos;s disintegration accelerates. Iago arranges for Othello to eavesdrop on a conversation with Cassio, who is actually talking about his mistress Bianca, but Othello believes the laughter and boasting are about Desdemona. Bianca then enters, furiously returning the handkerchief she found in Cassio&apos;s room &mdash; which Othello recognises as Desdemona&apos;s. He is now fully convinced. Othello strikes Desdemona publicly in front of visiting Venetian dignitaries (Lodovico), shocking everyone. He interrogates Emilia, who insists on Desdemona&apos;s innocence, but Othello dismisses her. In a harrowing scene, he calls Desdemona a &ldquo;strumpet&rdquo; to her face. Meanwhile, Roderigo confronts Iago about his empty promises. Iago convinces him to murder Cassio. Desdemona, bewildered and frightened, prepares for bed, singing the &ldquo;Willow Song&rdquo; &mdash; a song of abandoned love.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Othello&apos;s epileptic fit (4.1)</li>
                  <li>&bull; The eavesdropping scene with Cassio and Bianca (4.1)</li>
                  <li>&bull; Othello strikes Desdemona publicly (4.1)</li>
                  <li>&bull; The &ldquo;brothel scene&rdquo;: Othello accuses Desdemona (4.2)</li>
                  <li>&bull; Desdemona&apos;s &ldquo;Willow Song&rdquo; (4.3)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">5</span>
                Act 5 &mdash; Murder, Revelation, and Death
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Iago directs Roderigo to ambush Cassio in the dark. Roderigo is wounded and Cassio is injured in the leg. Iago stabs Roderigo to silence him and pretends to discover the scene as a concerned bystander. In the final scene, Othello enters Desdemona&apos;s bedchamber, resolved to kill her as an act of justice. He kisses her, weeps, but smothers her with a pillow despite her desperate pleas of innocence. Emilia arrives and discovers what has happened. When Othello names Iago as his source, Emilia is horrified and reveals the truth about the handkerchief. Iago stabs Emilia and flees but is captured. Othello, realising his catastrophic error, delivers his final speech and stabs himself, dying on a kiss beside Desdemona. Cassio is appointed governor of Cyprus, and Iago is led away to be tortured.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The attack on Cassio; Roderigo killed by Iago (5.1)</li>
                  <li>&bull; Othello smothers Desdemona (5.2)</li>
                  <li>&bull; Emilia exposes the truth about the handkerchief (5.2)</li>
                  <li>&bull; Iago kills Emilia (5.2)</li>
                  <li>&bull; Othello&apos;s final speech and suicide (5.2)</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="8 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              {/* Othello */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Othello</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Othello is a Moorish general in the service of Venice, respected for his military prowess but always an outsider due to his race. He is noble, eloquent, and dignified in Acts 1&ndash;2, commanding respect in the Senate and winning Desdemona through the power of his storytelling. His tragic flaw is not simply jealousy but a deep insecurity about his place in Venetian society &mdash; his age, his race, his unfamiliarity with Venetian women &mdash; which Iago expertly exploits. Once the poison of jealousy takes hold, Othello&apos;s language deteriorates from grand, controlled verse to fragmented, bestial imagery. He becomes obsessive, violent, and irrational. His final speech attempts to reclaim his former dignity, asking to be remembered as one who &ldquo;loved not wisely, but too well.&rdquo; Whether this represents genuine self-knowledge or continued self-deception is a key critical debate.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="She loved me for the dangers I had passed, / And I loved her that she did pity them"
                    speaker="Othello"
                    act="Act 1, Scene 3"
                    analysis="This reveals the basis of their love: mutual admiration rooted in storytelling and compassion. However, critics note this is love mediated through narrative rather than direct knowledge, making it potentially fragile."
                  />
                  <Quote
                    text="Of one that loved not wisely, but too well; / Of one not easily jealous, but being wrought, / Perplexed in the extreme"
                    speaker="Othello"
                    act="Act 5, Scene 2"
                    analysis="Othello's final self-assessment. 'Not wisely, but too well' is debatable -- is this honest reflection or self-justification? 'Wrought' acknowledges Iago's manipulation but also distances himself from responsibility. 'Perplexed' means tortured/bewildered, not merely confused."
                  />
                </div>
              </div>

              {/* Iago */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Iago</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Iago is Shakespeare&apos;s most sophisticated villain. Unlike Macbeth, who agonises over evil, Iago revels in it. He is Othello&apos;s ensign (standard-bearer) and supposed friend, but he hates Othello for promoting Cassio over him. He offers multiple motives &mdash; professional jealousy, suspicion that Othello slept with Emilia, racism, a possible attraction to Desdemona &mdash; but none fully explains the depth of his malice. Coleridge famously called this &ldquo;motiveless malignity.&rdquo; Iago is a master manipulator who adopts different personas for different people: loyal soldier to Othello, drinking buddy to Cassio, wise advisor to Roderigo, dutiful husband to Emilia. His soliloquies reveal his true contempt for everyone. He understands human psychology with terrifying precision. Crucially, he never directly lies about Desdemona &mdash; he uses insinuation, questions, and planted evidence to let Othello&apos;s imagination do the work. His final refusal to explain himself (&ldquo;Demand me nothing; what you know, you know&rdquo;) denies closure and deepens his menace.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I am not what I am"
                    speaker="Iago"
                    act="Act 1, Scene 1"
                    analysis="An inversion of God's declaration 'I am that I am' (Exodus 3:14), aligning Iago with the devil. It announces the play's central theme of appearance vs reality. Iago is performing a role at all times -- his 'honest' exterior conceals pure malice."
                  />
                  <Quote
                    text="The Moor is of a free and open nature, / That thinks men honest that but seem to be so, / And will as tenderly be led by the nose / As asses are"
                    speaker="Iago"
                    act="Act 1, Scene 3"
                    analysis="Iago identifies exactly how to exploit Othello: through his trusting nature. The animal imagery ('asses') dehumanises Othello. 'Free and open' -- Othello's virtue becomes his vulnerability. Iago weaponises the very qualities that make Othello noble."
                  />
                </div>
              </div>

              {/* Desdemona */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Desdemona</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Desdemona is a complex figure who defies simplistic readings. She is courageous and assertive in the early acts: she elopes against her father&apos;s wishes, speaks boldly before the Senate, and insists on accompanying Othello to a war zone. Her choice to marry a Moor shows independence from Venetian social norms. However, as Othello&apos;s jealousy intensifies, Desdemona becomes increasingly passive and bewildered. She cannot comprehend what she has done wrong because she has done nothing wrong. Her loyalty to Othello never wavers, even as he abuses her &mdash; she tells Emilia she would not commit adultery &ldquo;for all the world,&rdquo; and with her dying breath she tries to protect Othello by claiming she killed herself. Some critics see this as saintly devotion; others see it as a tragic illustration of how patriarchal society conditions women to accept abuse. Her innocence makes her murder all the more devastating.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="My noble father, / I do perceive here a divided duty"
                    speaker="Desdemona"
                    act="Act 1, Scene 3"
                    analysis="Desdemona shows courage and eloquence in the Senate. 'Divided duty' acknowledges her father while firmly choosing Othello. She echoes the expected transfer of allegiance from father to husband, but she does so on her own terms -- she chose Othello, not the other way around."
                  />
                  <Quote
                    text="Nobody; I myself. Farewell. / Commend me to my kind lord"
                    speaker="Desdemona"
                    act="Act 5, Scene 2"
                    analysis="Her dying words deny Othello's guilt -- 'nobody' killed her. 'Kind lord' is heartbreaking: even at death, she calls him 'kind.' This can be read as supreme devotion or as the ultimate tragic consequence of a woman taught never to accuse her husband."
                  />
                </div>
              </div>

              {/* Cassio */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Cassio</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Michael Cassio is Othello&apos;s lieutenant &mdash; the promotion that enrages Iago. He is a Florentine, well-educated, courteous, and handsome, described by Iago contemptuously as a &ldquo;great arithmetician&rdquo; who knows war only from books. His gentlemanly manners with women, especially his gallant greeting of Desdemona on Cyprus, are innocent but provide Iago with material to twist. His key weakness is alcohol: one night of drinking leads to a brawl that costs him his position. His desperate desire to regain Othello&apos;s favour makes him seek Desdemona&apos;s help, unwittingly feeding Iago&apos;s narrative. His relationship with Bianca provides Iago with further opportunities for deception. Cassio survives and is appointed governor of Cyprus, but he is not a hero &mdash; he is a well-meaning man used as a pawn.
                </p>
                <Quote
                  text="Reputation, reputation, reputation! O, I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial"
                  speaker="Cassio"
                  act="Act 2, Scene 3"
                  analysis="Cassio values honour and reputation above all else. 'Immortal part' elevates reputation to something spiritual. 'Bestial' anticipates the animal imagery that later consumes Othello. Ironically, Iago replies 'reputation is an idle and most false imposition' -- Iago despises the very values he manipulates."
                />
              </div>

              {/* Emilia */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Emilia</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Emilia, Iago&apos;s wife and Desdemona&apos;s attendant, is one of the play&apos;s most important characters. She is worldly, pragmatic, and outspoken where Desdemona is idealistic and gentle. Her speech in Act 4, Scene 3, arguing that women have the same desires and rights as men, is one of the most proto-feminist passages in Shakespeare. She gives Iago the handkerchief to please him, not knowing his purpose &mdash; a small act of wifely obedience with catastrophic consequences. In the final scene, she becomes the play&apos;s moral voice, defying Iago and Othello to tell the truth even though it costs her life. Her courage in exposing Iago contrasts with her earlier silence and complicity, making her arc deeply human. She dies defending Desdemona&apos;s honour, singing the Willow Song.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="But I do think it is their husbands' faults / If wives do fall"
                    speaker="Emilia"
                    act="Act 4, Scene 3"
                    analysis="Emilia directly challenges the double standard that allows men to cheat while punishing women. This proto-feminist speech argues that women share the same appetites and feelings as men. It is a radical position for the Jacobean stage and contrasts with Desdemona's more conventional view."
                  />
                  <Quote
                    text="I will not charm my tongue; I am bound to speak"
                    speaker="Emilia"
                    act="Act 5, Scene 2"
                    analysis="Emilia refuses to be silenced by either Iago or Othello. 'Bound' suggests moral duty overrides wifely obedience. Her defiance directly contrasts with Desdemona's silence and submission. It costs Emilia her life but exposes the truth."
                  />
                </div>
              </div>

              {/* Roderigo */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Roderigo</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Roderigo is a wealthy Venetian gentleman who is desperately in love with Desdemona. He is gullible, foolish, and easily manipulated by Iago, who takes his money and jewels while promising to help him win Desdemona. Roderigo functions as Iago&apos;s tool and his funding source. He occasionally shows flickers of awareness that he is being used, but Iago always talks him round. He participates in waking Brabantio and later attempts to kill Cassio on Iago&apos;s orders. Ultimately, Iago kills him to prevent exposure. Roderigo is a comic figure in some respects, but his fate reminds us that Iago destroys everyone around him without discrimination.
                </p>
              </div>

              {/* Brabantio */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Brabantio</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Brabantio is Desdemona&apos;s father, a respected Venetian senator. He is horrified by his daughter&apos;s marriage to Othello and cannot believe she chose him freely, insisting Othello must have used witchcraft or drugs. His language is steeped in racial prejudice: he sees the match as unnatural and against the &ldquo;rules of nature.&rdquo; His warning to Othello &mdash; &ldquo;She has deceived her father, and may thee&rdquo; &mdash; is later echoed by Iago and lodges in Othello&apos;s mind. Brabantio represents the racist attitudes of Venetian society that Othello can never fully escape. He reportedly dies of grief over the marriage (mentioned in Act 5).
                </p>
                <Quote
                  text="Look to her, Moor, if thou hast eyes to see: / She has deceived her father, and may thee"
                  speaker="Brabantio"
                  act="Act 1, Scene 3"
                  analysis="This warning plants a seed that Iago later cultivates. If Desdemona deceived Brabantio (by eloping), might she deceive Othello too? The rhyming couplet makes it memorable and prophetic-sounding. Othello later echoes this almost word for word, showing how deeply it affected him."
                />
              </div>

              {/* Bianca */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Bianca</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Bianca is a courtesan (sex worker) in Cyprus and Cassio&apos;s lover. Though she appears only briefly, she is significant. She genuinely loves Cassio, showing jealousy when she finds the handkerchief and suspecting another woman. Her role in the plot is crucial: when she returns the handkerchief angrily in front of Othello, it confirms his worst suspicions. Despite being at the bottom of the social hierarchy, she shows genuine emotion and loyalty. Her treatment by the male characters &mdash; dismissed as a &ldquo;strumpet&rdquo; and a &ldquo;housewife&rdquo; &mdash; mirrors the way Desdemona is treated once Othello suspects her, suggesting that in a misogynistic society, all women are vulnerable to the same accusations regardless of their actual behaviour.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Major Themes" badge="7 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Jealousy */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  Jealousy
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Jealousy is the play&apos;s dominant theme, famously described as the &ldquo;green-eyed monster which doth mock the meat it feeds on.&rdquo; Shakespeare explores jealousy as irrational, self-generating, and ultimately destructive. Once planted by Iago, Othello&apos;s jealousy grows independently, feeding on innocent events and interpreting everything as proof of guilt. Jealousy also motivates Iago (professional jealousy over the promotion, possibly sexual jealousy over Emilia), Roderigo (jealous of Othello), and Bianca (jealous over the handkerchief). The play demonstrates that jealousy destroys the jealous person first &mdash; it consumes Othello&apos;s reason, dignity, and humanity before it destroys Desdemona&apos;s life.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="O, beware, my lord, of jealousy! / It is the green-eyed monster which doth mock / The meat it feeds on"
                    speaker="Iago"
                    act="Act 3, Scene 3"
                    analysis="Iago warns against jealousy while simultaneously creating it -- supreme irony. The 'green-eyed monster' personifies jealousy as a predator that torments ('mocks') its victim even as it consumes them. 'Feeds on' suggests jealousy is parasitic and self-sustaining."
                  />
                  <Quote
                    text="Trifles light as air / Are to the jealous confirmations strong / As proofs of holy writ"
                    speaker="Iago"
                    act="Act 3, Scene 3"
                    analysis="Iago understands that a jealous mind needs almost no evidence. 'Light as air' versus 'strong as proofs of holy writ' -- the contrast shows how jealousy distorts perception. A handkerchief (a trifle) becomes proof of adultery. Iago weaponises this psychological truth."
                  />
                </div>
              </div>

              {/* Race and Prejudice */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Race and Prejudice
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Othello is one of the first major literary works to place a Black protagonist at the centre and explore racism directly. Othello is consistently defined by his race before his rank: Iago and Roderigo call him &ldquo;the Moor,&rdquo; &ldquo;thick-lips,&rdquo; &ldquo;an old black ram,&rdquo; and &ldquo;the devil&rdquo; (blackness was associated with the devil in Elizabethan culture). Brabantio cannot accept that Desdemona chose Othello freely &mdash; it must be witchcraft. Even the Duke&apos;s compliment (&ldquo;far more fair than black&rdquo;) reinforces the assumption that blackness is negative. Iago exploits Othello&apos;s racial insecurity, suggesting Desdemona&apos;s choice is &ldquo;unnatural.&rdquo; Critically, Othello internalises these racist attitudes: he begins to see himself through Venice&apos;s eyes, believing he is unworthy of Desdemona.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Haply, for I am black / And have not those soft parts of conversation / That chamberers have"
                    speaker="Othello"
                    act="Act 3, Scene 3"
                    analysis="A devastating moment where Othello internalises the racism around him. He begins to see his race as the reason Desdemona might be unfaithful. 'Soft parts of conversation' -- he believes he lacks the social graces of white Venetians. Iago has succeeded in making Othello see himself through racist eyes."
                  />
                  <Quote
                    text="An old black ram / Is tupping your white ewe"
                    speaker="Iago"
                    act="Act 1, Scene 1"
                    analysis="Iago deliberately uses bestial, racially charged imagery to alarm Brabantio. 'Black ram' and 'white ewe' reduce the marriage to animal coupling and frame it in racial terms. 'Tupping' is crude and degrading. This language reveals how Iago weaponises race to provoke hatred."
                  />
                </div>
              </div>

              {/* Appearance vs Reality */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Appearance vs Reality
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  This theme pervades every element of the play. Iago is universally known as &ldquo;honest Iago&rdquo; while being the most dishonest character. Othello appears to be a confident, powerful man but is deeply insecure. Desdemona appears guilty (to Othello) while being entirely innocent. Cassio appears to be having an affair with Desdemona but is not. The handkerchief appears to be proof of adultery but is planted evidence. Even settings contribute: Venice appears civilised but harbours racism; Cyprus appears safe (the Turks are defeated) but becomes the site of domestic destruction. Shakespeare suggests that human beings are dangerously poor at distinguishing appearance from reality, especially when emotion overrides reason.
                </p>
                <Quote
                  text="Men should be what they seem; / Or those that be not, would they might seem none!"
                  speaker="Iago"
                  act="Act 3, Scene 3"
                  analysis="Iago, the greatest pretender in the play, lectures on honesty. The dramatic irony is extreme -- he is exploiting the gap between appearance and reality at the very moment he claims to condemn it. This is Iago's method: he tells philosophical truths while practising their opposite."
                />
              </div>

              {/* Love */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Love
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play explores different kinds of love and their vulnerabilities. Othello and Desdemona&apos;s love is passionate and genuine but tested by social pressures, cultural difference, and Iago&apos;s interference. Their love is rooted in admiration rather than deep mutual knowledge &mdash; they are newly married and have spent little time together privately. Othello loves Desdemona intensely but struggles to trust her independence. His love becomes possessive: &ldquo;I had rather be a toad / And live upon the vapour of a dungeon / Than keep a corner in the thing I love / For others&apos; uses.&rdquo; Desdemona&apos;s love is constant and forgiving to the point of self-destruction. Other forms of love include Emilia&apos;s evolving love (initially seeking Iago&apos;s approval, finally choosing truth), Cassio&apos;s superficial relationship with Bianca, and Roderigo&apos;s obsessive, transactional desire.
                </p>
                <Quote
                  text="If it were now to die, / 'Twere now to be most happy; for, I fear, / My soul hath her content so absolute / That not another comfort like to this / Succeeds in unknown fate"
                  speaker="Othello"
                  act="Act 2, Scene 1"
                  analysis="Reunited with Desdemona on Cyprus, Othello declares his happiness so complete he could die now. This foreshadows his actual death beside her. 'Content so absolute' shows love at its peak, which dramatically can only decline. The mention of 'unknown fate' is ominously prophetic."
                />
              </div>

              {/* Manipulation */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  Manipulation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Iago is one of literature&apos;s greatest manipulators, and the play is a masterclass in how manipulation works. He tailors his approach to each victim: flattery and appeals to honour for Cassio, promises of Desdemona for Roderigo, insinuation and fake reluctance for Othello. He never commands &mdash; he suggests, implies, and lets others draw conclusions. He creates situations (getting Cassio drunk, planting the handkerchief) rather than making direct accusations. He exploits existing weaknesses: Cassio&apos;s drinking, Othello&apos;s insecurity, Roderigo&apos;s desperation. He turns virtues into weapons: Desdemona&apos;s kindness becomes &ldquo;evidence&rdquo; of guilt, Othello&apos;s trust becomes gullibility. The play shows how manipulation depends on the victim&apos;s pre-existing fears and desires.
                </p>
              </div>

              {/* Honour */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-orange-500" />
                  Honour and Reputation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Honour drives nearly every character. Othello&apos;s identity rests on his military reputation; when he believes his honour as a husband is compromised, he feels his entire identity is destroyed (&ldquo;Othello&apos;s occupation&apos;s gone&rdquo;). Cassio&apos;s loss of reputation after the brawl devastates him. Iago&apos;s sense of wounded honour at being passed over for promotion motivates his revenge. The play&apos;s concept of male honour is bound up with control of women&apos;s sexuality: Othello sees Desdemona&apos;s supposed infidelity as a stain on his honour, not just a personal betrayal. This reflects the patriarchal values of both Venetian and Elizabethan society, where a man&apos;s honour was partly defined by his wife&apos;s chastity. Shakespeare critiques this system by showing how it leads to murder.
                </p>
              </div>

              {/* Gender */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  Gender and Patriarchy
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Othello is deeply concerned with gender roles and the treatment of women. All three female characters &mdash; Desdemona, Emilia, and Bianca &mdash; are defined and judged by the men around them. Desdemona is called &ldquo;strumpet&rdquo; by her own husband; Bianca is dismissed as a prostitute; Emilia is silenced and ultimately killed by Iago. Desdemona&apos;s initial assertiveness (choosing her own husband, speaking before the Senate) is gradually crushed by Othello&apos;s growing tyranny. The &ldquo;Willow Song&rdquo; scene (4.3), where Desdemona and Emilia discuss marriage and infidelity, is the play&apos;s most sustained exploration of women&apos;s experience. Emilia&apos;s argument that women have the same desires and rights as men is radical for its time. The play ultimately shows patriarchy as a system that destroys women, whether they are obedient (Desdemona) or defiant (Emilia).
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotes" title="Key Quotations with Analysis" badge="24 Quotes" colour="bg-amber-600">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                These are the most important quotations for essay writing. Each includes context, speaker, and analytical points.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Quote
                  text="I follow him to serve my turn upon him"
                  speaker="Iago"
                  act="Act 1, Scene 1"
                  analysis="Iago reveals his true motive from the start: self-interest. 'Serve my turn' suggests he sees people as tools. He serves Othello only to destroy him -- the master-servant relationship is inverted."
                />
                <Quote
                  text="Even now, now, very now, an old black ram / Is tupping your white ewe"
                  speaker="Iago"
                  act="Act 1, Scene 1"
                  analysis="Iago uses bestial, racially charged imagery to alarm Brabantio. The repetition of 'now' creates urgency. The animal metaphor reduces Othello to a beast. The colour contrast (black/white) weaponises race."
                />
                <Quote
                  text="Keep up your bright swords, for the dew will rust them"
                  speaker="Othello"
                  act="Act 1, Scene 2"
                  analysis="Othello's calm authority in the face of Brabantio's armed men. The dismissive wit ('dew will rust them') shows supreme confidence. This controlled Othello contrasts dramatically with the man he becomes."
                />
                <Quote
                  text="Her father loved me; oft invited me; / Still questioned me the story of my life"
                  speaker="Othello"
                  act="Act 1, Scene 3"
                  analysis="Ironic: Brabantio welcomed Othello as an exotic guest but not as a son-in-law. This reveals the limits of Venetian tolerance -- Othello is acceptable as a servant of the state but not as a family member."
                />
                <Quote
                  text="I am hitherto your daughter: but here's my husband"
                  speaker="Desdemona"
                  act="Act 1, Scene 3"
                  analysis="Desdemona publicly chooses Othello over her father. The simple clarity of 'here's my husband' is powerful. She uses the same argument her mother might have used -- women transfer allegiance from father to husband -- but she has chosen the husband herself."
                />
                <Quote
                  text="Put money in thy purse"
                  speaker="Iago"
                  act="Act 1, Scene 3"
                  analysis="Repeated obsessively to Roderigo, this phrase reveals Iago's materialism and his exploitation of Roderigo's wealth. The imperative tone shows Iago's control. He is simultaneously advising and robbing Roderigo."
                />
                <Quote
                  text="O, I have lost my reputation! I have lost the immortal part of myself"
                  speaker="Cassio"
                  act="Act 2, Scene 3"
                  analysis="Cassio's devastation at losing his position reveals how honour and identity are inseparable for these characters. 'Immortal part' elevates reputation above the physical body. Iago cynically dismisses reputation as worthless."
                />
                <Quote
                  text="O, beware, my lord, of jealousy!"
                  speaker="Iago"
                  act="Act 3, Scene 3"
                  analysis="The supreme irony: Iago warns against the very emotion he is cultivating. By naming jealousy, he plants it. The warning itself is a manipulation technique -- it appears caring while actually being destructive."
                />
                <Quote
                  text="Her honour is an essence that's not seen; / They have it very oft that have it not"
                  speaker="Iago"
                  act="Act 4, Scene 1"
                  analysis="Iago argues that female honour (chastity) is invisible and therefore unknowable. This epistemological argument -- you can never truly know if a woman is faithful -- is designed to torment Othello. It makes proof impossible and suspicion permanent."
                />
                <Quote
                  text="O curse of marriage, / That we can call these delicate creatures ours / And not their appetites!"
                  speaker="Othello"
                  act="Act 3, Scene 3"
                  analysis="Othello reveals a possessive view of marriage: he wants to own Desdemona's desires, not just her person. 'Delicate creatures' reduces women to objects. This proprietary language shows how patriarchal honour codes lead to tragedy."
                />
                <Quote
                  text="Villain, be sure thou prove my love a whore"
                  speaker="Othello"
                  act="Act 3, Scene 3"
                  analysis="Othello demands proof but has already accepted the premise. 'My love' and 'whore' in the same line show his torn mind. He calls Iago 'villain' while treating him as a trusted advisor -- another appearance vs reality irony."
                />
                <Quote
                  text="I think my wife be honest, and think she is not; / I think that thou art just, and think thou art not"
                  speaker="Othello"
                  act="Act 3, Scene 3"
                  analysis="Othello is trapped between trust and suspicion of both Desdemona and Iago. The balanced antithesis shows his mind seesawing. He cannot commit to either position -- jealousy has paralysed his judgement."
                />
                <Quote
                  text="Farewell the tranquil mind! farewell content! / Farewell the plumed troops and the big wars / That makes ambition virtue! O, farewell! / Farewell! Othello's occupation's gone"
                  speaker="Othello"
                  act="Act 3, Scene 3"
                  analysis="The repeated 'farewell' is a litany of loss. Othello's identity is inseparable from his military role -- if his honour is compromised, his 'occupation' (purpose) is destroyed. The grand rhetoric here still belongs to the noble Othello; it is his last sustained eloquent speech before his language fragments."
                />
                <Quote
                  text="It is the cause, it is the cause, my soul"
                  speaker="Othello"
                  act="Act 5, Scene 2"
                  analysis="Othello enters to murder Desdemona, trying to frame it as justice rather than revenge. 'The cause' -- he cannot name adultery, showing residual love and perhaps doubt. The address to 'my soul' shows he knows this will damn him. The repetition suggests he is trying to convince himself."
                />
                <Quote
                  text="Put out the light, and then put out the light"
                  speaker="Othello"
                  act="Act 5, Scene 2"
                  analysis="A devastating double meaning: he will extinguish the candle, then extinguish Desdemona's life. 'Light' metaphorically represents Desdemona's goodness and life. The repetition creates a mournful rhythm. He recognises the irreversibility: a candle can be relit, but a life cannot."
                />
                <Quote
                  text="Then must you speak / Of one that loved not wisely, but too well"
                  speaker="Othello"
                  act="Act 5, Scene 2"
                  analysis="Othello's self-epitaph is carefully crafted rhetoric. 'Not wisely, but too well' -- is this honest self-assessment or self-serving excuse? Critics debate whether Othello achieves genuine insight or merely performs nobility one last time."
                />
                <Quote
                  text="Demand me nothing: what you know, you know: / From this time forth I never will speak word"
                  speaker="Iago"
                  act="Act 5, Scene 2"
                  analysis="Iago's final refusal to explain himself denies closure to every character and the audience. 'What you know, you know' is contemptuous -- he will not satisfy their need for understanding. His silence is his final act of control and cruelty."
                />
                <Quote
                  text="I kissed thee ere I killed thee: no way but this; / Killing myself, to die upon a kiss"
                  speaker="Othello"
                  act="Act 5, Scene 2"
                  analysis="Othello's last words unite love and death. The chiasmus (kissed/killed, killing/kiss) creates a tragic symmetry. 'No way but this' -- he sees suicide as the only resolution. 'Die upon a kiss' -- he dies beside Desdemona, literalising the connection between love and death."
                />
                <Quote
                  text="Who would not make her husband a cuckold to make him a monarch?"
                  speaker="Emilia"
                  act="Act 4, Scene 3"
                  analysis="Emilia's pragmatic, witty challenge to sexual double standards. She uses hypothetical extremes to expose the absurdity of absolute moral rules. This contrasts with Desdemona's idealistic response and highlights different female perspectives on fidelity."
                />
                <Quote
                  text="She, in spite of nature, / Of years, of country, credit, every thing, / To fall in love with what she feared to look on!"
                  speaker="Brabantio"
                  act="Act 1, Scene 3"
                  analysis="Brabantio lists reasons why Desdemona's love must be unnatural. 'In spite of nature' frames interracial love as against nature. 'Feared to look on' projects his own racist horror onto Desdemona. This speech reveals Venice's deep racial prejudice beneath its cosmopolitan surface."
                />
                <Quote
                  text="O thou weed, / Who art so lovely fair and smell'st so sweet / That the sense aches at thee, would thou hadst ne'er been born!"
                  speaker="Othello"
                  act="Act 4, Scene 2"
                  analysis="Othello tortures himself with Desdemona's beauty. A 'weed' that is 'lovely fair' -- he cannot reconcile her beauty with his belief in her guilt. 'The sense aches' -- her beauty causes him physical pain. His language is simultaneously tender and violent."
                />
                <Quote
                  text="Speak of me as I am; nothing extenuate, / Nor set down aught in malice"
                  speaker="Othello"
                  act="Act 5, Scene 2"
                  analysis="Othello tries to control his own narrative. 'As I am' -- but who is the real Othello? The noble warrior or the jealous murderer? 'Nothing extenuate' asks for honesty, but his own speech immediately begins to extenuate (excuse) his actions."
                />
                <Quote
                  text="Work on, / My medicine, work!"
                  speaker="Iago"
                  act="Act 4, Scene 1"
                  analysis="Iago watches Othello collapse in an epileptic fit and celebrates. 'Medicine' is bitterly ironic -- his poison is working. The short, punchy exclamation reveals his glee. He sees himself as a kind of doctor administering treatment, inverting the healer role into a destroyer."
                />
                <Quote
                  text="O, the more angel she, / And you the blacker devil!"
                  speaker="Emilia"
                  act="Act 5, Scene 2"
                  analysis="Emilia confronts Othello with blunt moral clarity. 'Angel' vs 'devil' creates a stark moral binary. 'Blacker' inevitably carries racial connotations in this play, but Emilia means moral darkness. She refuses to let Othello justify himself."
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Historical and Social Context" badge="4 Areas" colour="bg-teal-600">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Venice and Cyprus</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s two settings are symbolically significant. <strong>Venice</strong> was the centre of European trade, diplomacy, and culture in the 16th century &mdash; sophisticated, cosmopolitan, and wealthy. It prided itself on justice and tolerance, employing foreign mercenaries (like Othello) while maintaining strict social hierarchies. The Venetian Senate scenes show a functioning, rational society. <strong>Cyprus</strong>, by contrast, is a military outpost far from civilisation, recently threatened by the Ottoman Turks. Once the Turkish threat is removed, the characters are left without external enemies and turn on each other. Cyprus functions as a space outside the rules of Venetian society, where passions and violence can erupt. The move from Venice to Cyprus mirrors Othello&apos;s journey from order to chaos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Moors in Elizabethan England</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The term &ldquo;Moor&rdquo; in Elizabethan England was applied loosely to people of North African, Middle Eastern, or sub-Saharan African origin. Attitudes were complex and contradictory. On one hand, Moors were associated with military strength, wealth, and exotic appeal &mdash; the Moroccan ambassador visited Elizabeth I&apos;s court in 1600. On the other hand, blackness was symbolically linked to sin, the devil, and moral corruption in English culture. In 1601, Elizabeth I issued a proclamation expelling &ldquo;Negroes and Blackamoors&rdquo; from England. Shakespeare wrote Othello around 1603, when racial tensions were real. By making a Moor his tragic hero &mdash; noble, eloquent, and sympathetic &mdash; Shakespeare challenged audience prejudices, even as the play also shows how those prejudices destroy. The play asks whether Othello falls because of his race or because of the racism around him.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Military Honour and Service</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The play is set in a military world where honour, rank, and reputation are everything. Othello&apos;s identity is inseparable from his role as a general. His eloquent Senate speech is essentially a military report. His decision to promote Cassio over Iago is based on strategic considerations (Cassio is a tactician) rather than personal loyalty, which fuels Iago&apos;s resentment. The military hierarchy creates the power dynamics that Iago exploits: Cassio&apos;s devastation at losing his rank, Iago&apos;s festering anger at being passed over, Othello&apos;s vulnerability when his domestic life threatens his professional identity. On Cyprus, without a war to fight, the military virtues of decisiveness and action become destructive &mdash; Othello treats Desdemona&apos;s supposed infidelity like a military problem to be solved through execution.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Women&apos;s Roles in Elizabethan/Jacobean Society</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Women in Shakespeare&apos;s time had very limited legal and social autonomy. They were expected to be obedient to their fathers and then to their husbands. A woman&apos;s honour was defined almost entirely by her sexual chastity, and a man&apos;s honour was partly contingent on his wife&apos;s faithfulness (&ldquo;cuckoldry&rdquo; was a source of intense social shame). Desdemona&apos;s elopement &mdash; choosing her own husband &mdash; would have shocked some audience members as much as her choice of a Moor. The play presents three women at different social levels (Desdemona the noblewoman, Emilia the soldier&apos;s wife, Bianca the courtesan) and shows how all three are subject to male control, accusation, and violence. Emilia&apos;s proto-feminist speech in 4.3 directly questions these double standards, but the play&apos;s ending &mdash; two women dead, the third falsely accused &mdash; shows the deadly consequences of patriarchal power.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── IAGO'S MANIPULATION */}
        <div id="iago-s-manipulation">
          <Section id="manipulation" title="Iago's Manipulation: A Detailed Analysis" badge="Techniques" colour="bg-red-700">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Understanding <em>how</em> Iago manipulates is essential for exam success. His techniques are psychologically sophisticated and worth analysing in detail.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">1. Reputation as &ldquo;Honest Iago&rdquo;</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago is called &ldquo;honest&rdquo; by virtually every character. This reputation is his greatest weapon &mdash; no one suspects him because they all believe he is blunt, truthful, and loyal. He cultivates this image by appearing reluctant to speak ill of anyone, saying things like &ldquo;I like not that&rdquo; and then pretending he did not mean to say it.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">2. Insinuation, Not Accusation</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago never directly says &ldquo;Desdemona is unfaithful.&rdquo; Instead, he plants ideas through questions (&ldquo;Did Michael Cassio, when you wooed my lady, know of your love?&rdquo;), hesitation, and half-finished thoughts. He forces Othello to fill in the gaps himself, making Othello the author of his own torment.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">3. Exploiting Insecurities</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago understands that Othello&apos;s racial identity makes him feel like an outsider. He weaponises this by suggesting that Desdemona&apos;s choice of Othello was &ldquo;unnatural&rdquo; and that she will inevitably return to men &ldquo;of her own clime, complexion, and degree.&rdquo; He turns Othello&apos;s greatest fear &mdash; that he does not belong &mdash; into a reason for suspicion.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">4. Manufacturing Evidence</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago creates situations rather than just lying. He gets Cassio drunk (real event), arranges the eavesdropping scene (real conversation, misinterpreted), and plants the handkerchief (real object, false context). Because each piece of &ldquo;evidence&rdquo; has a basis in reality, Othello cannot easily dismiss it.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">5. Weaponising Virtue</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago turns Desdemona&apos;s goodness against her: &ldquo;So will I turn her virtue into pitch.&rdquo; Her kindness to Cassio becomes &ldquo;evidence&rdquo; of an affair. Othello&apos;s trusting nature becomes gullibility. Cassio&apos;s courtesy becomes proof of a seducer. Every character&apos;s best qualities are twisted into weapons.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">6. Different Masks for Different People</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago adapts his persona for each victim. With Othello: concerned, reluctant truth-teller. With Cassio: friendly advisor. With Roderigo: conspiratorial partner. With Emilia: commanding husband. He tells each person what they need to hear, performing friendship, loyalty, and wisdom while feeling contempt for all.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">7. Controlling the Narrative</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Iago is always the first to frame events. After the brawl, he &ldquo;reluctantly&rdquo; tells Othello what happened, shaping the narrative. After Cassio&apos;s disgrace, he immediately offers a solution (seek Desdemona&apos;s help) that serves his own plan. He is the play&apos;s stage-manager, positioning characters where he needs them.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-4">
                  <h4 className="font-bold text-foreground text-sm">8. Isolating Othello</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    By moving the action to Cyprus, Othello is separated from the Venetian structures that support him. On the island, Iago becomes his primary advisor and confidant. He ensures that Othello sees Desdemona&apos;s interactions with Cassio through a suspicious lens and dismisses Emilia&apos;s testimony of innocence. Othello is left with no one to trust but Iago.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-red-400 bg-red-500/10 p-4 mt-4">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300">Exam Tip</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  When writing about Iago, always consider Shakespeare&apos;s dramatic purpose. Iago&apos;s soliloquies create dramatic irony: the audience knows the truth while the characters do not. This generates tension and horror. Consider whether Shakespeare wants us to see Iago as a realistic psychopath, a symbolic figure of evil (like the Vice in medieval morality plays), or both.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section id="essays" title="Essay Planning" badge="Exam Skills" colour="bg-indigo-600">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Essay Structure: PEEL Paragraphs</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  For GCSE/IGCSE literature essays, use the PEEL structure for each paragraph:
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-primary/5 p-3 border border-primary/20">
                    <p className="font-bold text-primary text-sm">P &mdash; Point</p>
                    <p className="mt-1 text-xs text-muted-foreground">Make a clear argument that directly answers the question.</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-3 border border-primary/20">
                    <p className="font-bold text-primary text-sm">E &mdash; Evidence</p>
                    <p className="mt-1 text-xs text-muted-foreground">A short, embedded quotation from the text to support your point.</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-3 border border-primary/20">
                    <p className="font-bold text-primary text-sm">E &mdash; Explain</p>
                    <p className="mt-1 text-xs text-muted-foreground">Analyse language, structure, or form. What does the quotation suggest? How does it work?</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-3 border border-primary/20">
                    <p className="font-bold text-primary text-sm">L &mdash; Link</p>
                    <p className="mt-1 text-xs text-muted-foreground">Link to context, the wider text, another interpretation, or the writer&apos;s purpose.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Sample Essay Plans</h3>
                <div className="space-y-4 mt-3">
                  {/* Essay 1 */}
                  <div className="rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-bold text-foreground text-sm">&ldquo;How does Shakespeare present jealousy in Othello?&rdquo;</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">1</span>
                        <p className="text-sm text-muted-foreground"><strong>Iago as the origin:</strong> &ldquo;green-eyed monster&rdquo; &mdash; he names jealousy while creating it. Link to the Vice figure tradition. His own professional jealousy is the play&apos;s catalyst.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
                        <p className="text-sm text-muted-foreground"><strong>Othello&apos;s transformation:</strong> Track his language from controlled verse to fragmented, bestial imagery. &ldquo;Farewell the tranquil mind&rdquo; &mdash; jealousy destroys his identity. Link to his insecurity as an outsider.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">3</span>
                        <p className="text-sm text-muted-foreground"><strong>The handkerchief:</strong> &ldquo;Trifles light as air / Are to the jealous confirmations strong.&rdquo; The handkerchief is the material symbol of how jealousy distorts perception. Context: in a patriarchal society, men felt entitled to absolute proof of women&apos;s fidelity.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">4</span>
                        <p className="text-sm text-muted-foreground"><strong>Jealousy as self-destruction:</strong> &ldquo;It is the cause&rdquo; &mdash; Othello murders love itself. His suicide shows jealousy destroys the jealous person most of all. Shakespeare&apos;s wider purpose: warning against the dangers of passion overriding reason.</p>
                      </div>
                    </div>
                  </div>

                  {/* Essay 2 */}
                  <div className="rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-bold text-foreground text-sm">&ldquo;How does Shakespeare present the theme of race in Othello?&rdquo;</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">1</span>
                        <p className="text-sm text-muted-foreground"><strong>Racist language from others:</strong> &ldquo;old black ram,&rdquo; &ldquo;thick-lips,&rdquo; &ldquo;the devil&rdquo; &mdash; Iago and Brabantio reduce Othello to racial stereotypes. Shakespeare exposes how racism dehumanises through language. Context: Moors in Elizabethan England.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
                        <p className="text-sm text-muted-foreground"><strong>Othello&apos;s dignity vs prejudice:</strong> &ldquo;Keep up your bright swords&rdquo; and the Senate speech show Othello transcending racial prejudice through eloquence and authority. He is valued for his service but never fully accepted &mdash; Venice&apos;s tolerance has limits.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">3</span>
                        <p className="text-sm text-muted-foreground"><strong>Internalised racism:</strong> &ldquo;Haply, for I am black&rdquo; &mdash; Othello begins to see himself through racist eyes. Iago succeeds because he exploits an insecurity that Venetian society created. This is the play&apos;s most psychologically devastating insight.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">4</span>
                        <p className="text-sm text-muted-foreground"><strong>Shakespeare&apos;s purpose:</strong> By making his tragic hero a Moor, Shakespeare forces the audience to empathise across racial lines. The tragedy is not that Othello is different but that society cannot accept his difference. Link to James I&apos;s court and racial anxieties of the period.</p>
                      </div>
                    </div>
                  </div>

                  {/* Essay 3 */}
                  <div className="rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-bold text-foreground text-sm">&ldquo;How does Shakespeare present Iago as a villain?&rdquo;</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">1</span>
                        <p className="text-sm text-muted-foreground"><strong>Soliloquies and dramatic irony:</strong> &ldquo;I am not what I am&rdquo; &mdash; an inversion of God&apos;s words, aligning Iago with the devil. His soliloquies let the audience see behind the mask. Link to the Vice figure in medieval morality plays.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
                        <p className="text-sm text-muted-foreground"><strong>Manipulation techniques:</strong> He never directly lies but uses insinuation, questions, and planted evidence. &ldquo;Ha! I like not that&rdquo; &mdash; the exclamation plants suspicion while appearing innocent. He makes Othello the author of his own destruction.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">3</span>
                        <p className="text-sm text-muted-foreground"><strong>Motiveless malignity:</strong> Iago offers multiple motives (promotion, Emilia, racism) but none is sufficient. Coleridge&apos;s phrase &ldquo;motiveless malignity&rdquo; captures the sense that evil needs no reason. This makes Iago more terrifying &mdash; and more universal.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">4</span>
                        <p className="text-sm text-muted-foreground"><strong>Final silence:</strong> &ldquo;Demand me nothing; what you know, you know.&rdquo; His refusal to explain denies closure and asserts control even in defeat. Shakespeare leaves the audience, like Othello, unable to fully understand evil. Context: Jacobean anxieties about hidden enemies and religious hypocrisy.</p>
                      </div>
                    </div>
                  </div>

                  {/* Essay 4 */}
                  <div className="rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-bold text-foreground text-sm">&ldquo;How does Shakespeare present women in Othello?&rdquo;</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">1</span>
                        <p className="text-sm text-muted-foreground"><strong>Desdemona&apos;s agency and its limits:</strong> She defies her father and speaks in the Senate, yet is gradually silenced by Othello&apos;s jealousy. Her dying words (&ldquo;Nobody; I myself&rdquo;) can be read as devotion or as the tragic internalisation of a system that teaches women to protect men.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
                        <p className="text-sm text-muted-foreground"><strong>Emilia&apos;s defiance:</strong> Her Act 4 speech challenges the sexual double standard. &ldquo;I will not charm my tongue&rdquo; in Act 5 shows her choosing truth over obedience. She dies for speaking out &mdash; Shakespeare shows the lethal cost of female resistance in a patriarchal world.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">3</span>
                        <p className="text-sm text-muted-foreground"><strong>Bianca as mirror:</strong> Despite being a courtesan, Bianca shows genuine love and jealousy. She is dismissed as a &ldquo;strumpet&rdquo; &mdash; the same word used against Desdemona. Shakespeare suggests that in a misogynistic society, any woman can be reduced to this accusation.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">4</span>
                        <p className="text-sm text-muted-foreground"><strong>Male control and violence:</strong> All three women are controlled, accused, or killed by men. Context: Jacobean women were legally their husbands&apos; property. Shakespeare critiques this system by showing its fatal consequences &mdash; the play&apos;s tragedy is fundamentally about what happens when men treat women as possessions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Top Exam Tips</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-primary/10 border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-primary">Always use &ldquo;Shakespeare presents...&rdquo;</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Remember, characters are constructs. Don&apos;t write &ldquo;Othello is jealous&rdquo; &mdash; write &ldquo;Shakespeare presents Othello as consumed by jealousy to warn the audience about...&rdquo; This shows awareness of authorial intent.
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-primary">Embed short quotations</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Use two- or three-word quotations woven into your sentences rather than long block quotes. E.g., &ldquo;Iago&apos;s description of jealousy as a &lsquo;green-eyed monster&rsquo; personifies the emotion as predatory.&rdquo;
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-primary">Link language to meaning</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Identify specific techniques (metaphor, irony, repetition, animal imagery, antithesis) and explain their <em>effect</em>. Don&apos;t just name them &mdash; explain what they reveal about character, theme, or Shakespeare&apos;s purpose.
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-primary">Include context meaningfully</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Don&apos;t bolt context on at the end. Integrate it: &ldquo;A Jacobean audience, who associated blackness with sin, would find Othello&apos;s nobility a direct challenge to their prejudices, which is precisely Shakespeare&apos;s point.&rdquo;
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-primary">Track changes across the play</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Examiners reward discussion of how characters and themes develop. Show how Othello&apos;s language changes from eloquent verse to broken prose and back again. Show how Emilia moves from obedience to defiance.
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-primary">Consider alternative interpretations</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Use phrases like &ldquo;Alternatively, this could suggest...&rdquo; or &ldquo;A feminist reading might argue...&rdquo; to show critical thinking. For example: is Othello&apos;s final speech noble self-awareness or continued self-deception?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section id="practice" title="Practice Questions" badge="4 Questions" colour="bg-primary">
            <p className="text-sm text-muted-foreground mb-6">
              Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes.
              Aim for at least 150 words per response to get meaningful feedback.
            </p>
            <div className="space-y-8">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 1</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare present Othello as both a noble hero and a tragic victim? Refer to the play as a whole.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Othello - How Shakespeare presents Othello as both a noble hero and a tragic victim"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 2</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare present the theme of jealousy in <em>Othello</em>? Consider the role of Iago in your answer.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Othello - How Shakespeare presents jealousy and Iago's role in creating it"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 3</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare explore the theme of race and prejudice in <em>Othello</em>?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Othello - How Shakespeare explores race, prejudice, and otherness in the play"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 4</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare present Desdemona as more than a passive victim? Consider her role across the play.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Othello - How Shakespeare presents Desdemona as more than a passive victim"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>Othello</em> by William Shakespeare is in the public domain. All
          quotations are reproduced freely.
        </p>
      </footer>
    </>
  );
}
