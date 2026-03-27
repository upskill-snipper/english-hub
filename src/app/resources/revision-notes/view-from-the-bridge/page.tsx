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

export default function ViewFromTheBridgeRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">Modern Drama</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CAIE</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A View from the Bridge &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE/IGCSE English Literature exam. Full plot summary, character analysis,
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
        <Section id="plot" title="Plot Summary" badge="2 Acts" colour="bg-blue-600" defaultOpen>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">1</span>
                Act 1
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play is set in the 1950s in Red Hook, Brooklyn &mdash; a poor, close-knit Italian-American community near the docks. Eddie Carbone, a longshoreman, lives with his wife Beatrice and her orphaned niece Catherine, whom he has raised since childhood. The lawyer Alfieri serves as narrator, framing the story as a Greek tragedy about to unfold. Eddie is fiercely protective of Catherine, becoming visibly upset when she gets a job offer as a stenographer. Beatrice encourages Catherine to take it and begin her adult life. Beatrice&apos;s cousins, Marco and Rodolpho, arrive illegally from Italy seeking work. Eddie initially welcomes them but grows increasingly hostile toward Rodolpho, who begins dating Catherine. Eddie accuses Rodolpho of being effeminate and only pursuing Catherine for citizenship papers. He visits Alfieri, hoping for a legal way to stop the relationship, but Alfieri tells him there is no law against it. Eddie&apos;s obsession deepens: he kisses Catherine and then kisses Rodolpho on the lips in an attempt to humiliate him and prove Rodolpho is not a &ldquo;real man.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Alfieri&apos;s opening narration establishing the tragic framework</li>
                  <li>&bull; Eddie&apos;s discomfort with Catherine&apos;s new job and her &ldquo;walkin&apos; wavy&rdquo;</li>
                  <li>&bull; The arrival of Marco and Rodolpho</li>
                  <li>&bull; Eddie teaching Rodolpho to box &mdash; thinly veiled aggression</li>
                  <li>&bull; Marco&apos;s chair-lifting warning to Eddie</li>
                  <li>&bull; Eddie&apos;s two kisses &mdash; Catherine and then Rodolpho</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">2</span>
                Act 2
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Catherine and Rodolpho have grown closer and plan to marry. Eddie, desperate and unable to accept this, makes the fateful decision to telephone the Immigration Bureau and report Marco and Rodolpho. When the officers arrive, they also discover two other immigrants living upstairs with Lipari and his wife &mdash; collateral damage from Eddie&apos;s betrayal. The community instantly recognises Eddie&apos;s treachery. Beatrice&apos;s cousin spits in his face. Marco, being taken away, publicly accuses Eddie: &ldquo;That one! He killed my children!&rdquo; Eddie&apos;s reputation &mdash; his &ldquo;name&rdquo; &mdash; is destroyed. Alfieri posts bail for Marco and Rodolpho. Catherine and Rodolpho marry quickly. Eddie demands Marco take back his accusation and restore his name. Marco refuses. In the final confrontation outside the Carbone apartment on Catherine&apos;s wedding day, Eddie pulls a knife on Marco, but Marco turns the blade and Eddie dies in Beatrice&apos;s arms. Alfieri delivers a closing speech reflecting on Eddie&apos;s story with pity and alarm.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Eddie&apos;s phone call to Immigration &mdash; the point of no return</li>
                  <li>&bull; The arrest of Marco and Rodolpho</li>
                  <li>&bull; Marco&apos;s public accusation: &ldquo;That one! He killed my children!&rdquo;</li>
                  <li>&bull; Beatrice&apos;s confrontation: &ldquo;You want somethin&apos; else, Eddie, and you can never have her!&rdquo;</li>
                  <li>&bull; Eddie&apos;s death &mdash; killed by his own knife</li>
                  <li>&bull; Alfieri&apos;s final speech on Eddie&apos;s tragic nature</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="6 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              {/* Eddie */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Eddie Carbone</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Eddie is the play&apos;s tragic protagonist. He is a hardworking longshoreman who takes pride in providing for his family and upholding the community&apos;s code of honour. However, he harbours an unacknowledged, possibly incestuous, obsession with his niece Catherine. His inability to recognise or admit his true feelings drives the tragedy. Eddie defines himself through traditional masculinity: physical strength, being a provider, and maintaining his &ldquo;name&rdquo; (reputation). When Rodolpho threatens his control over Catherine, Eddie&apos;s behaviour becomes increasingly irrational and destructive. He breaks the community&apos;s most sacred code by informing on the immigrants, destroying his reputation and ultimately himself. Miller presents Eddie as both sympathetic and deeply flawed &mdash; a man destroyed by desires he cannot understand or control.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I want my name! He didn't take my name!"
                    speaker="Eddie"
                    act="Act 2"
                    analysis="Eddie's obsession with his 'name' (reputation) reflects the Italian-American community's honour code. Tragically, he destroyed his own name by calling Immigration. The repetition and exclamation marks show his desperation. He cannot accept that his own actions caused his downfall."
                  />
                  <Quote
                    text="You're walkin' wavy"
                    speaker="Eddie"
                    act="Act 1"
                    analysis="Eddie's comment about Catherine's walk reveals his inappropriate awareness of her sexuality. He is policing her appearance, trying to keep her childlike and under his control. The colloquial language disguises the disturbing nature of his observation."
                  />
                </div>
              </div>

              {/* Catherine */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Catherine</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Catherine begins the play as a naive, adoring young woman who seeks Eddie&apos;s approval for everything. She is on the threshold of adulthood, excited about her job offer and eager to please. Her relationship with Rodolpho catalyses her journey toward independence. Through the play, Catherine gradually recognises Eddie&apos;s possessiveness for what it is and learns to stand up for herself, though she remains conflicted. Her loyalty to Eddie and her love for Rodolpho create an agonising tension. By the end, she has matured enough to defy Eddie directly, though she still weeps for him when he dies. Catherine&apos;s arc represents the painful process of a young woman breaking free from patriarchal control.
                </p>
                <Quote
                  text="I'm not gonna be a baby any more!"
                  speaker="Catherine"
                  act="Act 1"
                  analysis="A pivotal moment in Catherine's journey toward independence. The double negative reflects her working-class dialect but also reinforces her emotional urgency. She is asserting her adulthood against Eddie's attempts to infantilise her."
                />
              </div>

              {/* Beatrice */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Beatrice</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Beatrice is Eddie&apos;s wife and the play&apos;s most perceptive character. She understands Eddie&apos;s feelings for Catherine before anyone else and tries to address the situation with sensitivity and directness. She encourages Catherine to grow up and separate from Eddie. Beatrice is caught between loyalty to her husband and the need to protect her niece and her cousins. She is the only character who directly confronts Eddie with the truth about his desires. Miller uses Beatrice to articulate what Eddie cannot. She represents the cost of Eddie&apos;s obsession on those closest to him &mdash; their marriage has become sexless and strained.
                </p>
                <Quote
                  text="You want somethin' else, Eddie, and you can never have her!"
                  speaker="Beatrice"
                  act="Act 2"
                  analysis="The most explicit statement of the play's central truth. Beatrice names what everyone has been avoiding: Eddie's desire for Catherine. 'You can never have her' is both a statement of impossibility and a moral judgement. This is the climactic moment of truth that Eddie cannot face."
                />
              </div>

              {/* Rodolpho */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Rodolpho</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Rodolpho is Marco&apos;s younger brother, an illegal immigrant from Italy. He is blond, can sing, cook, and sew &mdash; qualities that Eddie uses to question his masculinity. However, Rodolpho is simply a different kind of man: charming, artistic, and adaptable. He genuinely loves Catherine and is excited by the possibilities America offers. Eddie accuses him of only wanting to marry Catherine for citizenship, but the play suggests Rodolpho&apos;s feelings are sincere. He challenges Eddie&apos;s narrow definition of masculinity. Miller uses Rodolpho to explore how cultural difference can be weaponised by those who feel threatened.
                </p>
                <Quote
                  text="If I take in my hands a little bird. And she grows and wishes to fly. But I will not let her out of my hands because I love her, then she can never fly"
                  speaker="Rodolpho"
                  act="Act 2"
                  analysis="Rodolpho uses this analogy to help Catherine understand Eddie's possessiveness. The 'little bird' metaphor presents Eddie's love as a cage. It shows Rodolpho's emotional intelligence and his understanding that real love requires freedom -- a direct contrast to Eddie's controlling obsession."
                />
              </div>

              {/* Marco */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Marco</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Marco is the older, stronger, and more traditionally masculine of the two brothers. He came to America to earn money for his starving family in Italy. He is quiet, hardworking, and respectful &mdash; but he operates by a strict code of justice. When Eddie teaches Rodolpho to box (thinly veiled aggression), Marco responds by lifting a chair above Eddie&apos;s head with one hand &mdash; a silent warning. After Eddie&apos;s betrayal, Marco publicly accuses Eddie and ultimately kills him. Marco represents old-world justice: an eye for an eye. His actions raise the question of whether his form of justice is any more legitimate than the legal system.
                </p>
                <Quote
                  text="That one! He killed my children! That one stole the food from my children!"
                  speaker="Marco"
                  act="Act 2"
                  analysis="Marco's public accusation destroys Eddie's reputation -- the very thing Eddie values most. 'He killed my children' is not literal but expresses the devastating consequences of Eddie's betrayal: Marco will be deported and his children will starve. The repetition of 'that one' is an act of public shaming."
                />
              </div>

              {/* Alfieri */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Alfieri</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Alfieri is the play&apos;s narrator and chorus figure, modelled on the chorus of Greek tragedy. As a lawyer, he bridges the Italian community&apos;s informal justice system and American law. He can see the tragedy coming but is powerless to prevent it &mdash; mirroring the audience&apos;s experience. His opening monologue establishes the inevitability of the events. He tries to warn Eddie, telling him the law cannot help with his situation. Alfieri&apos;s final speech is crucial: he says he mourns Eddie &ldquo;with a certain... alarm,&rdquo; acknowledging that Eddie&apos;s willingness to be &ldquo;wholly known&rdquo; has a kind of tragic grandeur, even though it led to destruction.
                </p>
                <Quote
                  text="I could see every step coming, step after step, like a dark figure walking down a hall toward a certain door"
                  speaker="Alfieri"
                  act="Act 1"
                  analysis="The metaphor of the 'dark figure' walking toward a 'certain door' creates a sense of tragic inevitability. 'Certain' means both 'specific' and 'inevitable.' Alfieri positions himself -- and the audience -- as powerless witnesses to a fate that cannot be altered, reinforcing the Greek tragic structure."
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Key Themes" badge="6 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Justice and the Law */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Justice and the Law
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play explores the tension between formal law and community justice. In Red Hook, the Italian-American community operates by an unwritten code: you never inform on someone to the authorities. Eddie breaks this code when he calls Immigration, and his punishment is swift &mdash; complete social ostracism and ultimately death. Alfieri represents the legal system but acknowledges its limitations. Marco&apos;s revenge represents a more primal form of justice. Miller asks the audience to consider which system is more just &mdash; or whether both are inadequate. The play suggests that when formal law cannot address human passions, people revert to older, more violent codes.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="The law is only a word for what has a right to happen"
                    speaker="Alfieri"
                    act="Act 1"
                    analysis="Alfieri suggests that true justice is not about legal codes but about natural rights. This philosophical statement frames the play's central tension: the community's moral law versus the state's legal system. It also foreshadows that events will follow a 'natural' tragic course."
                  />
                  <Quote
                    text="Most people ain't people to him... you're an animal, a dog"
                    speaker="Eddie"
                    act="Act 1"
                    analysis="Eddie tells the story of Vinny Bolzano, who informed on his uncle and was beaten and thrown from the community. The dehumanising language ('animal,' 'dog') shows the community's contempt for informers. This foreshadows Eddie's own fate with devastating irony."
                  />
                </div>
              </div>

              {/* Masculinity and Honour */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Masculinity and Honour
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eddie&apos;s concept of masculinity is rigid and ultimately destructive. He equates manhood with physical strength, being a provider, and controlling his family. He attacks Rodolpho&apos;s masculinity because Rodolpho sings, cooks, and sews &mdash; activities Eddie considers feminine. The boxing scene and the two kisses are Eddie&apos;s attempts to assert masculine dominance. His obsession with his &ldquo;name&rdquo; (reputation/honour) is linked to his masculine identity. Miller shows how toxic masculinity damages everyone: Eddie cannot acknowledge his feelings, Rodolpho is unfairly demeaned, and the women are caught between competing male egos.
                </p>
                <Quote
                  text="I know lemons are green, for Christ's sake... and I don't like him"
                  speaker="Eddie"
                  act="Act 1"
                  analysis="Eddie cannot articulate why he dislikes Rodolpho, resorting to vague accusations. His instinctive hostility reveals that the real 'problem' is not Rodolpho but Eddie's own unexamined feelings. The inability to express himself honestly is central to his tragedy."
                />
              </div>

              {/* Immigration */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Immigration and the American Dream
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play is set against the backdrop of Italian immigration to America. Marco and Rodolpho risk everything for economic opportunity. Marco comes to feed his starving children; Rodolpho dreams of a new life. The community in Red Hook is built on immigration &mdash; everyone understands the immigrants&apos; desperation because their own families made similar journeys. Eddie&apos;s betrayal is therefore doubly shocking: he violates both community loyalty and the shared immigrant experience. Miller, himself the son of immigrants, uses the play to examine the hope, exploitation, and tension between old-world values and new-world opportunities.
                </p>
              </div>

              {/* Betrayal */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-indigo-500" />
                  Betrayal and Loyalty
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The community&apos;s code of loyalty &mdash; never informing to the authorities &mdash; is the moral framework of the play. Eddie himself tells the story of Vinny Bolzano, who was violently punished for informing on his uncle. This makes Eddie&apos;s own act of betrayal even more devastating: he knows exactly what the consequences will be but does it anyway, driven by his obsession with Catherine. His betrayal is not just of Marco and Rodolpho but of Beatrice, Catherine, and the entire community. The play explores how personal desire can overwhelm even deeply held moral convictions.
                </p>
                <Quote
                  text="He's gonna take that back. He's gonna take that back or I'll kill him!"
                  speaker="Eddie"
                  act="Act 2"
                  analysis="After betraying Marco and Rodolpho, Eddie demands Marco retract his accusation. The irony is devastating: Eddie wants his reputation restored but will not acknowledge his betrayal. His resort to threats of violence shows his moral bankruptcy."
                />
              </div>

              {/* Obsession */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Obsession and Desire
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eddie&apos;s feelings for Catherine are the play&apos;s most uncomfortable element. Miller never has Eddie explicitly acknowledge sexual desire for his niece, but the subtext is clear. Eddie&apos;s jealousy of Rodolpho, his physical reactions to Catherine&apos;s appearance, and the disturbing kiss all point to desires he cannot admit even to himself. This repression is central to his tragedy &mdash; because he cannot name his feelings, he cannot deal with them rationally. Instead, they emerge as hostility toward Rodolpho and increasingly erratic behaviour. Miller draws on psychoanalytic ideas about repressed desire and self-destruction.
                </p>
              </div>

              {/* Tragedy */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted0" />
                  Tragedy and Fate
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Miller deliberately structures the play as a modern Greek tragedy. Alfieri functions as a chorus, framing the events and commenting on their inevitability. Eddie is a tragic hero in the Aristotelian sense: a man brought down by a fatal flaw (<em>hamartia</em>). Like classical tragedies, the outcome is known from the beginning &mdash; Alfieri tells us in the opening monologue that events ran &ldquo;a bloody course.&rdquo; Miller adapts the form: Eddie is not a king but a common man, asserting Miller&apos;s belief (expressed in &ldquo;Tragedy and the Common Man&rdquo;) that ordinary people can be tragic figures. Eddie&apos;s willingness to sacrifice everything for his &ldquo;name&rdquo; gives him tragic dignity, even as we condemn his actions.
                </p>
                <Quote
                  text="I mourn him -- I admit it -- with a certain... alarm"
                  speaker="Alfieri"
                  act="Act 2 (closing)"
                  analysis="Alfieri's final judgement is deliberately ambivalent. He mourns Eddie but is 'alarmed' by the intensity of Eddie's self-destruction. The pause before 'alarm' suggests careful word choice. He finds something admirable in Eddie's refusal to 'settle for half' even though it destroyed him."
                />
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
                <h3 className="font-bold text-foreground mb-3">Eddie Carbone</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="Katie, I promised your mother on her deathbed. I'm responsible for you" speaker="Eddie" act="Act 1"
                    analysis="Eddie uses his promise to Catherine's mother to justify his controlling behaviour. 'I'm responsible for you' conflates parental duty with ownership. This sense of obligation masks his deeper, unacknowledged desires." />
                  <Quote text="The guy ain't right" speaker="Eddie" act="Act 1"
                    analysis="Eddie's repeated claim about Rodolpho, implying he is homosexual. The vagueness ('ain't right') shows Eddie cannot articulate his real objection. Miller uses Eddie's homophobia to reveal the fragility of his masculine identity." />
                  <Quote text="A man works hard, he's got a right to come home to a house that ain't full of strangers" speaker="Eddie" act="Act 1"
                    analysis="Eddie frames his jealousy as a working man's right, connecting his masculinity to his role as provider. The irony is that he invited Marco and Rodolpho in. 'Strangers' shows how quickly he has othered them once Rodolpho becomes a rival." />
                  <Quote text="I want my respect!" speaker="Eddie" act="Act 2"
                    analysis="Eddie demands respect but has destroyed the basis for it by informing. The tragic irony is that he seeks externally what he has forfeited through his own actions. 'Respect' and 'name' are interchangeable in Eddie's code." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Alfieri</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="In some Caesar's year, in Calabria perhaps... another lawyer sat there as powerless as I, and watched it run its bloody course" speaker="Alfieri" act="Act 1 (opening)"
                    analysis="Alfieri links Eddie's story to ancient tragedy, suggesting history repeats itself. 'Bloody course' foreshadows the violent ending. 'Powerless' establishes Alfieri's role as witness, not agent -- like the audience, he can see what is coming but cannot stop it." />
                  <Quote text="His eyes were like tunnels" speaker="Alfieri" act="Act 1"
                    analysis="A chilling description of Eddie's obsessive state. 'Tunnels' suggests Eddie can only see one thing: his fixation on Catherine and hostility to Rodolpho. He has lost peripheral vision -- metaphorically, he cannot see consequences or alternative perspectives." />
                  <Quote text="It is better to settle for half... it must be!" speaker="Alfieri" act="Act 2 (closing)"
                    analysis="Alfieri's final lesson: compromise is necessary for survival. Eddie refused to settle for half -- he wanted total control, total respect, total possession. The exclamation suggests Alfieri is trying to convince himself, unsettled by Eddie's uncompromising nature." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Other Characters</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="You can quicker get back a million dollars that was stole than a word that you gave away" speaker="Marco" act="Act 2"
                    analysis="Marco articulates the community's code: a promise or accusation once spoken cannot be taken back. This explains why he cannot retract his accusation of Eddie -- in his value system, the truth, once spoken, is permanent." />
                  <Quote text="You got too big a heart, the quicker you'll get hurt" speaker="Beatrice" act="Act 1"
                    analysis="Beatrice warns Eddie that his 'protective' instinct will lead to pain. 'Too big a heart' is ironic -- Eddie's feelings are not generous love but possessive obsession. Beatrice's attempts to warn him are consistently ignored." />
                  <Quote text="Teach me... I don't know anything" speaker="Catherine" act="Act 2"
                    analysis="Catherine asks Rodolpho to 'teach' her, transferring her dependence from Eddie to Rodolpho. It shows her growing independence from Eddie but also her continued need for guidance -- her journey to full autonomy is incomplete." />
                  <Quote text="He didn't touch me... he was a rat" speaker="Catherine" act="Act 2"
                    analysis="Catherine finally denounces Eddie after his betrayal. 'Rat' echoes the community's contempt for informers. The shift from her earlier adoration to this condemnation marks her transformation -- she has chosen her own moral judgement over Eddie's authority." />
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
                <h3 className="font-bold text-foreground">Arthur Miller and McCarthyism</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Miller wrote <em>A View from the Bridge</em> in 1955, during the McCarthy era. Senator Joseph McCarthy led a campaign to root out suspected communists, encouraging citizens to inform on neighbours and colleagues. Miller saw this as a modern witch-hunt and was himself called before the House Un-American Activities Committee (HUAC) in 1956, where he refused to name names. Eddie&apos;s act of informing mirrors the McCarthyite culture of betrayal. Miller explores how fear and self-interest can drive people to betray their communities.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Italian Immigration to America</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Between 1880 and 1960, millions of Italians emigrated to America, many settling in New York. Red Hook, Brooklyn was a centre for Italian-American longshoremen. Illegal immigration was common &mdash; families would harbour &ldquo;submarines&rdquo; (illegal immigrants) who worked on the docks. The community operated by a code of <em>omert&agrave;</em> (silence) &mdash; you never informed on fellow Italians to the American authorities. Miller spent time on the waterfront researching the play and heard the real story that inspired it.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Greek Tragedy and &ldquo;Tragedy and the Common Man&rdquo;</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Miller deliberately structures the play as a modern Greek tragedy. Key conventions include: Alfieri as the chorus figure; the sense of inevitable fate; the protagonist&apos;s <em>hamartia</em> (fatal flaw); and the movement toward catastrophe. Miller&apos;s essay &ldquo;Tragedy and the Common Man&rdquo; (1949) argues that tragedy is not limited to kings and nobles: ordinary people who sacrifice everything for their sense of personal dignity are equally tragic. Eddie&apos;s willingness to die for his &ldquo;name&rdquo; exemplifies this.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">1950s Gender Roles</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play reflects 1950s attitudes toward gender. Eddie&apos;s narrow definition of masculinity &mdash; strength, providing, controlling the household &mdash; was typical of the era. Women were expected to be domestic and obedient. Catherine&apos;s desire for independence challenges these norms. Rodolpho&apos;s artistic sensibility challenges them further. Miller critiques the damage caused by rigid gender expectations while also showing how deeply embedded they are in community identity.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── EXAM TIPS */}
        <div id="exam-tips">
          <Section id="exam-tips" title="Exam Tips" colour="bg-primary">
            <div className="space-y-6">
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                <h3 className="font-bold text-foreground">General Tips for A View from the Bridge</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Always refer to Miller as the playwright:</strong> Use phrases like &ldquo;Miller presents...&rdquo; or &ldquo;Miller uses Eddie to explore...&rdquo; This shows awareness of authorial intent (AO2).</li>
                  <li>&bull; <strong>Link to the tragic form:</strong> Discuss how Miller uses the structure of Greek tragedy &mdash; Alfieri as chorus, Eddie&apos;s hamartia, the sense of inevitability.</li>
                  <li>&bull; <strong>Discuss what is <em>not</em> said:</strong> Much of the play&apos;s power lies in subtext. Eddie never admits his feelings for Catherine. Discussing repression and subtext shows deep understanding.</li>
                  <li>&bull; <strong>Context must be integrated:</strong> Don&apos;t bolt on context. Weave in McCarthyism, immigration, and 1950s gender roles naturally within your analysis.</li>
                  <li>&bull; <strong>The stage directions matter:</strong> Miller&apos;s detailed stage directions are part of the text. Quote and analyse them.</li>
                  <li>&bull; <strong>Explore ambiguity:</strong> Is Eddie sympathetic or reprehensible? Is Marco&apos;s violence justified? The best essays engage with multiple interpretations.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#40197F] px-2 py-0.5 text-xs font-bold text-white">AQA</span>
                  AQA GCSE English Literature &mdash; Paper 2, Section A
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Extract-based question. Discuss how a theme/character is presented in the extract and the play as a whole.</li>
                  <li>&bull; <strong>Marks:</strong> 30 marks + 4 for SPaG = 34 total. Recommended time: ~50 minutes.</li>
                  <li>&bull; <strong>Key tip:</strong> Spend roughly half your response on the extract and half on the wider play. Close language analysis is essential.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes. Memorise quotations from across the play.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#00A651] px-2 py-0.5 text-xs font-bold text-white">CAIE</span>
                  Cambridge IGCSE Literature &mdash; Paper 1 (Drama)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Choice of passage-based question or essay question on the whole play.</li>
                  <li>&bull; <strong>Marks:</strong> 25 marks per question.</li>
                  <li>&bull; <strong>Key tip:</strong> CAIE rewards personal response. Develop your own interpretations and support them with close textual reference.</li>
                  <li>&bull; <strong>Open/Closed book:</strong> Depends on component. Check your specific syllabus variant.</li>
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
                  How does Miller present the theme of justice in <em>A View from the Bridge</em>? Refer to the whole play in your answer.
                </p>
                <AITextArea
                  placeholder="Write your response here..."
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="A View from the Bridge - Justice"
                  minWords={100}
                />
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Question 2</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Miller use the character of Eddie Carbone to explore ideas about masculinity? You should consider the whole play in your response.
                </p>
                <AITextArea
                  placeholder="Write your response here..."
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="A View from the Bridge - Masculinity and Eddie"
                  minWords={100}
                />
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Question 3</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  &ldquo;Eddie Carbone is more deserving of sympathy than blame.&rdquo; To what extent do you agree with this statement? Refer to the whole play in your answer.
                </p>
                <AITextArea
                  placeholder="Write your response here..."
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="A View from the Bridge - Eddie as tragic figure"
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
