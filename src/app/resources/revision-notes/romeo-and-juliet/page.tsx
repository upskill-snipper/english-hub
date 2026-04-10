"use client";

import { useState } from "react";
import { AITextArea } from "@/components/AITextArea";

/* ─── Expandable Section ─────────────────────────────────────── */

function Section({
  title,
  id,
  children,
  defaultOpen = false,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border bg-primary/[0.08] px-5 py-3.5 text-left text-lg font-bold text-foreground transition hover:bg-primary/[0.12]"
        aria-expanded={open}
      >
        <span id={`${id}-heading`}>{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="mt-4 space-y-4">{children}</div>}
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-md">
      {title && <h3 className="font-semibold text-foreground">{title}</h3>}
      <div className={title ? "mt-2" : ""}>{children}</div>
    </div>
  );
}

function QuoteCard({
  quote,
  speaker,
  act,
  analysis,
}: {
  quote: string;
  speaker: string;
  act: string;
  analysis: string;
}) {
  return (
    <div className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
      <blockquote className="text-base font-medium italic text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="mt-1 text-xs font-semibold text-primary">
        {speaker} &mdash; {act}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietRevisionPage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="rounded-full bg-rose-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">Shakespeare</span>
          {["AQA", "Edexcel", "CAIE", "OCR"].map((b) => (
            <span key={b} className="rounded-full bg-[#EBF5FB] px-3 py-1 text-xs font-semibold text-primary">{b}</span>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Romeo and Juliet &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Full act-by-act summary, character profiles, themes with evidence, 25+ key quotations with analysis, Elizabethan context, essay planning, and exam board advice.
        </p>
      </div>

      {/* ── PLOT SUMMARY ──────────────────────────────────────── */}
      <Section title="Act-by-Act Plot Summary" id="plot" defaultOpen>
        <Card title="Act 1 -- The Feud and the Meeting">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Prologue, a sonnet, tells the audience that &ldquo;star-cross&apos;d lovers&rdquo; from two feuding families will die, and only their deaths will end the feud. A street brawl between Montague and Capulet servants escalates until Prince Escalus threatens death for further disturbances. Romeo (a Montague) is lovesick over Rosaline, using artificial Petrarchan oxymorons (&ldquo;O brawling love, O loving hate&rdquo;). Benvolio and Mercutio persuade him to gate-crash the Capulet ball. At the ball, Romeo sees Juliet and falls instantly in love, forgetting Rosaline entirely. They share a sonnet (the &ldquo;pilgrim&rdquo; sonnet) and kiss, then discover they belong to enemy families. Tybalt, Juliet&apos;s cousin, recognises Romeo and swears revenge but is restrained by Lord Capulet.
          </p>
          <div className="mt-3 rounded bg-muted p-3 text-sm text-muted-foreground">
            <p className="font-semibold text-muted-foreground">Key Moments:</p>
            <ul className="mt-1 space-y-1">
              <li>&bull; The Prologue -- dramatic irony from the very start</li>
              <li>&bull; The street brawl and Prince&apos;s warning (1.1)</li>
              <li>&bull; Romeo and Juliet&apos;s shared sonnet at the ball (1.5)</li>
              <li>&bull; Tybalt&apos;s fury: &ldquo;I will withdraw, but this intrusion shall... convert to bitterest gall&rdquo; (1.5)</li>
            </ul>
          </div>
        </Card>

        <Card title="Act 2 -- The Balcony and the Wedding">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Romeo sneaks into the Capulet orchard and overhears Juliet on her balcony wishing he were not a Montague (&ldquo;What&apos;s in a name?&rdquo;). They declare their love and plan to marry the next day. Romeo asks Friar Lawrence to perform the ceremony. The Friar agrees, hoping the marriage will end the feud. Juliet&apos;s Nurse acts as a go-between. Romeo and Juliet are secretly married that afternoon. The speed of events is deliberate: Shakespeare compresses everything to heighten urgency and the sense of fate.
          </p>
          <div className="mt-3 rounded bg-muted p-3 text-sm text-muted-foreground">
            <p className="font-semibold text-muted-foreground">Key Moments:</p>
            <ul className="mt-1 space-y-1">
              <li>&bull; The balcony scene -- light/dark imagery (2.2)</li>
              <li>&bull; Juliet&apos;s &ldquo;What&apos;s in a name?&rdquo; speech (2.2)</li>
              <li>&bull; Friar Lawrence&apos;s warning: &ldquo;These violent delights have violent ends&rdquo; (2.6)</li>
              <li>&bull; The secret wedding (2.6)</li>
            </ul>
          </div>
        </Card>

        <Card title="Act 3 -- The Turning Point">
          <p className="text-sm leading-relaxed text-muted-foreground">
            This is the play&apos;s pivotal act. Tybalt challenges Romeo to a duel. Romeo refuses (because Tybalt is now his kinsman by marriage), but Mercutio fights Tybalt instead. Romeo intervenes and Mercutio is fatally wounded under Romeo&apos;s arm. Dying, Mercutio curses both houses: &ldquo;A plague o&apos; both your houses!&rdquo; Enraged, Romeo kills Tybalt in revenge and is banished from Verona by the Prince. Juliet learns of Tybalt&apos;s death and Romeo&apos;s banishment and is torn (&ldquo;Beautiful tyrant! fiend angelical!&rdquo;). Romeo spends one night with Juliet before fleeing to Mantua. Lord Capulet, unaware of the marriage, arranges Juliet&apos;s marriage to Count Paris. When Juliet refuses, Capulet threatens to disown her.
          </p>
          <div className="mt-3 rounded bg-muted p-3 text-sm text-muted-foreground">
            <p className="font-semibold text-muted-foreground">Key Moments:</p>
            <ul className="mt-1 space-y-1">
              <li>&bull; Mercutio&apos;s death and curse (3.1)</li>
              <li>&bull; Romeo kills Tybalt -- the turning point (3.1)</li>
              <li>&bull; Juliet&apos;s conflicted oxymorons: &ldquo;Beautiful tyrant! fiend angelical!&rdquo; (3.2)</li>
              <li>&bull; Capulet&apos;s rage: &ldquo;Hang thee, young baggage! Disobedient wretch!&rdquo; (3.5)</li>
              <li>&bull; The Nurse advises Juliet to marry Paris, betraying her trust (3.5)</li>
            </ul>
          </div>
        </Card>

        <Card title="Act 4 -- The Plan">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Juliet goes to Friar Lawrence in desperation. He gives her a potion that will make her appear dead for 42 hours. The plan: she will be laid in the Capulet tomb, Romeo will be informed by letter, and he will rescue her when she wakes. Juliet takes the potion alone the night before her wedding to Paris, delivering a powerful soliloquy about her fears. The Capulet household discovers her apparently dead body and the wedding becomes a funeral.
          </p>
        </Card>

        <Card title="Act 5 -- The Tragedy">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The plan fails because Friar Lawrence&apos;s letter never reaches Romeo in Mantua (Friar John is quarantined due to plague). Romeo&apos;s servant Balthasar brings news of Juliet&apos;s &ldquo;death&rdquo; instead. Romeo buys poison (&ldquo;Then I defy you, stars!&rdquo;) and rides to Verona. At the tomb, he encounters Paris, kills him, then drinks poison beside Juliet&apos;s body. Juliet wakes moments later, finds Romeo dead, and kills herself with his dagger. The Friar confesses everything. The grief-stricken Montagues and Capulets finally make peace. The Prince concludes: &ldquo;All are punish&apos;d.&rdquo;
          </p>
        </Card>
      </Section>

      {/* ── CHARACTERS ────────────────────────────────────────── */}
      <Section title="Character Profiles" id="characters">
        <Card title="Romeo">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Romeo Montague begins as a conventional Petrarchan lover, moping over the unattainable Rosaline in artificial language (&ldquo;O brawling love, O loving hate&rdquo;). When he meets Juliet, his language transforms into genuinely passionate poetry. He is impulsive, emotional, and quick to act: he falls in love instantly, marries within hours, kills Tybalt in hot-blooded revenge, and takes his own life rather than live without Juliet. His impulsiveness is both his greatest virtue (total devotion) and his fatal flaw (he acts without thinking). He matures through the play -- by Act 5, he is no longer the self-indulgent boy of Act 1 but a young man facing genuine tragedy.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <QuoteCard quote="Did my heart love till now? Forswear it, sight! / For I ne'er saw true beauty till this night" speaker="Romeo" act="Act 1, Scene 5"
              analysis="Romeo abandons Rosaline instantly, raising questions about the depth of his feelings. The rhyming couplet signals poetic sincerity but also conventional Petrarchan form. Is this genuine love or another infatuation?" />
            <QuoteCard quote="Then I defy you, stars!" speaker="Romeo" act="Act 5, Scene 1"
              analysis="On hearing of Juliet's 'death,' Romeo challenges fate itself. This is both heroic and tragic -- he refuses to accept destiny, but in defying the stars, he fulfils the Prologue's prophecy. His agency leads to the very fate he tries to escape." />
          </div>
        </Card>

        <Card title="Juliet">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Juliet is thirteen years old but undergoes the most dramatic character development in the play. She begins as an obedient, sheltered daughter (&ldquo;I&apos;ll look to like, if looking liking move&rdquo;). By Act 2, she challenges social conventions, questioning the importance of names. By Act 3, she defies her father. By Act 4, she takes a terrifying potion alone. She is braver, more rational, and more emotionally mature than Romeo. She initiates the conversation about marriage (2.2), takes the potion despite her fears, and chooses death decisively when she wakes to find Romeo dead. She is arguably the play&apos;s true tragic hero.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <QuoteCard quote="What's in a name? That which we call a rose / By any other name would smell as sweet" speaker="Juliet" act="Act 2, Scene 2"
              analysis="Juliet rationally argues that names are arbitrary labels, not essences. The rose metaphor suggests love transcends social categories. Radical thinking for a 13-year-old in patriarchal society -- she questions the very foundation of the feud." />
            <QuoteCard quote="My only love sprung from my only hate! / Too early seen unknown, and known too late!" speaker="Juliet" act="Act 1, Scene 5"
              analysis="The paradox 'love/hate' encapsulates her impossible position. 'Too early seen unknown' -- she fell in love before knowing his identity. 'Known too late' -- knowledge comes after it can change anything. Fate's cruelty in miniature." />
          </div>
        </Card>

        <Card title="Mercutio">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Romeo&apos;s witty, cynical friend who is neither Montague nor Capulet but related to the Prince. He is the play&apos;s most energetic character, full of bawdy humour and dazzling rhetoric (the Queen Mab speech). He mocks Romeo&apos;s romantic idealism. His death is the play&apos;s turning point: it transforms comedy into tragedy. His dying curse, &ldquo;A plague o&apos; both your houses!&rdquo; (repeated three times), blames the feud and foreshadows the lovers&apos; deaths.
          </p>
          <QuoteCard quote="A plague o' both your houses! / They have made worms' meat of me" speaker="Mercutio" act="Act 3, Scene 1"
            analysis="Repeated three times. He blames BOTH families. 'Worms' meat' is brutally physical, stripping away romantic notions of death. His curse seems to come true. He is an innocent victim of a feud that is not even his." />
        </Card>

        <Card title="Tybalt">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Juliet&apos;s cousin, nicknamed the &ldquo;Prince of Cats&rdquo; for his fencing skill. He embodies the destructive honour culture of the feud: aggressive, proud, and viewing any insult as requiring violent retaliation. He is not simply a villain -- he is a product of the feud, doing what his society expects of a young man defending family honour. His death sets the tragedy in motion.
          </p>
        </Card>

        <Card title="Friar Lawrence">
          <p className="text-sm leading-relaxed text-muted-foreground">
            A Franciscan friar and Romeo&apos;s confessor. He agrees to marry the lovers hoping to reconcile the families. He is wise in words (&ldquo;These violent delights have violent ends&rdquo;) but flawed in action -- his schemes are overly complicated and ultimately fail. He gives Juliet the sleeping potion, fails to ensure Romeo receives the letter, and flees the tomb when things go wrong. He represents the failure of good intentions when unmatched by practical wisdom.
          </p>
          <QuoteCard quote="These violent delights have violent ends / And in their triumph die, like fire and powder" speaker="Friar Lawrence" act="Act 2, Scene 6"
            analysis="The Friar warns that passionate extremes are self-destructive. 'Fire and powder' -- explosive and brief. He is right, but his warning goes unheeded. The irony: he enables the very outcome he predicts." />
        </Card>

        <Card title="The Nurse">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Juliet&apos;s closest companion and surrogate mother. Warm, bawdy, and garrulous, she provides comic relief and genuine affection. She facilitates the secret marriage but, after Romeo&apos;s banishment, pragmatically advises Juliet to marry Paris. This betrayal isolates Juliet and drives her to the Friar&apos;s dangerous plan. She represents practical, earthly love versus Juliet&apos;s idealistic, absolute love.
          </p>
        </Card>

        <Card title="Lord Capulet">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Initially reasonable (he tells Paris Juliet is too young and should have some choice). After Tybalt&apos;s death, he becomes tyrannical, threatening to disown Juliet if she refuses Paris. His rage reveals patriarchal power -- Juliet is his property. He genuinely grieves at her death, but his love is possessive and controlling.
          </p>
          <QuoteCard quote="Hang thee, young baggage! Disobedient wretch! [...] Or I will drag thee on a hurdle thither" speaker="Lord Capulet" act="Act 3, Scene 5"
            analysis="Violent language reveals patriarchal power. 'Baggage' reduces Juliet to an object. A 'hurdle' was used to drag traitors to execution -- he equates disobedience with treason. His love is conditional on obedience." />
        </Card>

        <Card title="The Prince (Escalus)">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The ruler of Verona, representing law and order. He appears three times and fails each time to end the feud. His final line, &ldquo;All are punish&apos;d,&rdquo; includes himself -- he has lost kinsmen (Mercutio, Paris) and failed in his duty as ruler.
          </p>
        </Card>
      </Section>

      {/* ── THEMES ────────────────────────────────────────────── */}
      <Section title="Major Themes" id="themes">
        <Card title="Love">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Shakespeare presents multiple types of love. Romeo&apos;s infatuation with Rosaline is Petrarchan and artificial. His love for Juliet is transformative and mutual. The Nurse&apos;s love is earthy and physical. Capulet&apos;s love is possessive. Shakespeare shows love as both the most beautiful and the most destructive force: it transcends the feud but leads to death. The shared sonnet when Romeo and Juliet first speak (1.5) makes their love literally collaborative.
          </p>
          <QuoteCard quote="My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite" speaker="Juliet" act="Act 2, Scene 2"
            analysis="Love as infinite and self-replenishing. The sea metaphor suggests vastness and depth. Juliet's language here is more mature than Romeo's, suggesting she understands love more truly." />
        </Card>

        <Card title="Fate and Destiny">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Prologue announces the lovers are &ldquo;star-cross&apos;d.&rdquo; Characters sense impending doom throughout: Romeo feels &ldquo;some consequence yet hanging in the stars&rdquo; before the ball; Juliet sees Romeo &ldquo;as one dead in the bottom of a tomb.&rdquo; Yet the tragedy also results from human choices. Shakespeare creates tension between cosmic fate and individual agency. The plague that prevents the letter is both random chance and the fulfilment of Mercutio&apos;s curse.
          </p>
          <QuoteCard quote="I am fortune's fool!" speaker="Romeo" act="Act 3, Scene 1"
            analysis="After killing Tybalt, Romeo blames fortune. But he chose to fight. 'Fool' is ambiguous: a victim of fortune, or a fool for letting fortune control him? This encapsulates the fate vs free will tension." />
        </Card>

        <Card title="Conflict and Violence">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The feud is the play&apos;s structural foundation. Shakespeare shows conflict as self-perpetuating: the original cause is forgotten (&ldquo;ancient grudge&rdquo;), but honour demands its continuation. Violence breeds violence: Tybalt kills Mercutio, Romeo kills Tybalt, the lovers kill themselves. The Prince&apos;s failure to end the feud through threats suggests that only love and sacrifice can break the cycle.
          </p>
        </Card>

        <Card title="Family and Duty">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Juliet is torn between filial duty and romantic love. The patriarchal family structure gives Lord Capulet absolute power. Her mother offers no protection. The Nurse fails her too. The play critiques a society where family honour takes precedence over individual happiness and children are treated as property.
          </p>
        </Card>

        <Card title="Youth vs Age">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The young characters are passionate and absolute. The older characters fail them: Capulet&apos;s authoritarianism, the Nurse&apos;s pragmatism, the Friar&apos;s overcomplicated schemes, the Prince&apos;s inability to enforce peace. The older generation&apos;s feuds destroy the younger generation&apos;s chance at happiness.
          </p>
        </Card>

        <Card title="Light and Dark">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Light and dark imagery runs throughout, often inverted. Romeo describes Juliet as light (&ldquo;Juliet is the sun&rdquo;) yet their love thrives in darkness. Daylight brings separation and danger. This inversion reinforces that conventional categories (Montague/Capulet, day/night, love/hate) are unreliable.
          </p>
          <QuoteCard quote="But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun" speaker="Romeo" act="Act 2, Scene 2"
            analysis="Juliet is the centre of Romeo's universe, the source of all light. 'East' suggests dawn and hope. Yet the sun also brings day, which will separate them. The beauty of the metaphor contains its own destruction." />
        </Card>

        <Card title="Honour and Masculinity">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Male characters are bound by a code of honour demanding violent response to insults. Tybalt, Mercutio, and Romeo all act on this code, and it destroys them all. Romeo&apos;s initial attempt to refuse the duel is a more mature response, but it is incompatible with his culture.
          </p>
        </Card>
      </Section>

      {/* ── KEY QUOTATIONS ────────────────────────────────────── */}
      <Section title="Key Quotations" id="quotations">
        <p className="text-sm text-muted-foreground mb-4">Essential quotations to learn. Each connects to multiple themes.</p>

        <Card title="The Prologue">
          <div className="grid gap-3 sm:grid-cols-2">
            <QuoteCard quote="Two households, both alike in dignity" speaker="Chorus" act="Prologue"
              analysis="The families are equal, making the feud pointless. 'Dignity' is ironic -- their behaviour is undignified." />
            <QuoteCard quote="A pair of star-cross'd lovers take their life" speaker="Chorus" act="Prologue"
              analysis="'Star-cross'd' means fated to be thwarted. 'Take their life' is a pun: they live AND end their lives. Dramatic irony from line one." />
            <QuoteCard quote="The fearful passage of their death-mark'd love" speaker="Chorus" act="Prologue"
              analysis="'Death-mark'd' -- branded with death from the beginning. The oxymoron 'death-mark'd love' captures the play's central paradox." />
          </div>
        </Card>

        <Card title="Romeo">
          <div className="grid gap-3 sm:grid-cols-2">
            <QuoteCard quote="O brawling love, O loving hate" speaker="Romeo" act="Act 1, Scene 1"
              analysis="Petrarchan oxymorons showing performed, artificial lovesickness. Contrasts with his later genuine passion for Juliet." />
            <QuoteCard quote="O, she doth teach the torches to burn bright!" speaker="Romeo" act="Act 1, Scene 5"
              analysis="Juliet outshines artificial light. His language shifts from cliche to vivid, original poetry -- Juliet inspires genuine art." />
            <QuoteCard quote="O, I am fortune's fool!" speaker="Romeo" act="Act 3, Scene 1"
              analysis="Romeo blames fate after killing Tybalt, but he chose to fight. 'Fool' is double-edged: victim or foolish agent?" />
            <QuoteCard quote="Then I defy you, stars!" speaker="Romeo" act="Act 5, Scene 1"
              analysis="His defiance of fate leads to the fated outcome. Free will fulfils the prophecy. The tragic irony is devastating." />
          </div>
        </Card>

        <Card title="Juliet">
          <div className="grid gap-3 sm:grid-cols-2">
            <QuoteCard quote="I'll look to like, if looking liking move" speaker="Juliet" act="Act 1, Scene 3"
              analysis="The obedient daughter, regulated by parental consent. Contrasts sharply with her later defiance." />
            <QuoteCard quote="What's in a name? That which we call a rose / By any other name would smell as sweet" speaker="Juliet" act="Act 2, Scene 2"
              analysis="Names are arbitrary, not essences. Love transcends social categories. Radical thinking that questions the feud's foundation." />
            <QuoteCard quote="Gallop apace, you fiery-footed steeds" speaker="Juliet" act="Act 3, Scene 2"
              analysis="Juliet commands the sun to set faster. Passionate and commanding -- far from the obedient girl of Act 1." />
            <QuoteCard quote="O happy dagger! / This is thy sheath; there rust, and let me die" speaker="Juliet" act="Act 5, Scene 3"
              analysis="'Happy' -- the dagger reunites her with Romeo. 'Sheath' links love and death. Her death is decisive, courageous, unhesitating." />
          </div>
        </Card>

        <Card title="Other Characters">
          <div className="grid gap-3 sm:grid-cols-2">
            <QuoteCard quote="These violent delights have violent ends" speaker="Friar Lawrence" act="Act 2, Scene 6"
              analysis="Passionate extremes are self-destructive. The Friar speaks truth but enables the marriage anyway." />
            <QuoteCard quote="A plague o' both your houses!" speaker="Mercutio" act="Act 3, Scene 1"
              analysis="Blames BOTH families. Repeated three times. His curse seems to come true through the lovers' deaths." />
            <QuoteCard quote="All are punish'd" speaker="Prince" act="Act 5, Scene 3"
              analysis="The play's moral summation. Everyone bears responsibility, including the Prince himself. The feud has collective consequences." />
            <QuoteCard quote="A glooming peace this morning with it brings" speaker="Prince" act="Act 5, Scene 3"
              analysis="The oxymoron 'glooming peace' -- peace through tragedy is not joyful. Resolution is bittersweet." />
          </div>
        </Card>
      </Section>

      {/* ── CONTEXT ──────────────────────────────────────────── */}
      <Section title="Historical and Social Context" id="context">
        <Card title="Elizabethan Marriage and Patriarchy">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Marriages among the upper classes were arranged for financial or political advantage. A daughter was her father&apos;s property until marriage, when she became her husband&apos;s. Juliet&apos;s refusal to marry Paris was a radical act of disobedience. Romeo and Juliet&apos;s secret marriage challenges this system, suggesting individual choice matters more than family interests.
          </p>
        </Card>
        <Card title="Women's Status">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Women had very limited rights. Lady Capulet&apos;s inability to protect Juliet reflects married women&apos;s limited power. Juliet&apos;s agency and intelligence make her a remarkably progressive character for the 1590s. Shakespeare gives her more complex soliloquies than Romeo.
          </p>
        </Card>
        <Card title="Italian Setting and Honour Culture">
          <p className="text-sm leading-relaxed text-muted-foreground">
            English audiences associated Italy with passion, violence, and vendetta culture. The code of honour driving Tybalt and Mercutio reflected real Italian feuding traditions. The Verona setting allowed Shakespeare to explore extreme passion while commenting on universal behaviour.
          </p>
        </Card>
        <Card title="The Sonnet Tradition">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Prologue is a sonnet; Romeo and Juliet share one when they first meet. The shared sonnet is structurally unique -- they collaborate on a form usually written by a single lovesick man, making their love mutual and equal.
          </p>
        </Card>
        <Card title="Plague in Elizabethan London">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The plague preventing the letter was not just a plot device -- plague was constant reality. Theatres were regularly closed. Mercutio&apos;s curse (&ldquo;A plague o&apos; both your houses&rdquo;) gains extra resonance in this context.
          </p>
        </Card>
      </Section>

      {/* ── WRITER'S METHODS ─────────────────────────────────── */}
      <Section title="Writer's Methods and Techniques" id="writers-methods">
        <Card title="Dramatic Irony">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Prologue tells the audience from the very first line that the lovers will die. This creates dramatic irony throughout: every moment of happiness is shadowed by the audience&apos;s foreknowledge of tragedy. When Romeo says &ldquo;My life were better ended by their hate, / Than death prorogued, wanting of thy love&rdquo; (2.2), the audience knows he will indeed die because of the hate between the families. This irony intensifies emotional engagement and makes the play feel fated.
          </p>
        </Card>
        <Card title="Sonnet Form">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Prologue is a sonnet, the traditional form for love poetry. More significantly, Romeo and Juliet&apos;s first conversation (1.5) takes the form of a shared sonnet &mdash; they each speak alternate quatrains and share the final couplet. This is structurally unique: sonnets are usually written by a solitary lover. By sharing the form, Shakespeare makes their love collaborative and equal, distinguishing it from Romeo&apos;s earlier one-sided Petrarchan infatuation with Rosaline. The religious imagery (pilgrim, saint, prayer) elevates their love beyond the physical.
          </p>
        </Card>
        <Card title="Oxymorons and Paradox">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Oxymorons pervade the play, reflecting its central contradictions: love/hate, life/death, light/dark. Romeo uses them artificially at first (&ldquo;O brawling love, O loving hate&rdquo;) when lovesick over Rosaline. But Juliet&apos;s oxymorons after Tybalt&apos;s death (&ldquo;Beautiful tyrant! fiend angelical!&rdquo;) express a genuine, agonising internal conflict. Shakespeare uses the same literary device to show both superficial and real emotion, inviting the audience to compare them.
          </p>
        </Card>
        <Card title="Light and Dark Imagery">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Romeo consistently associates Juliet with light: she &ldquo;doth teach the torches to burn bright,&rdquo; she is &ldquo;the sun,&rdquo; she &ldquo;hangs upon the cheek of night / Like a rich jewel in an Ethiope&apos;s ear.&rdquo; Yet their love thrives in darkness (the balcony at night, the bedroom before dawn) and daylight brings separation and danger. This inversion suggests that their love exists outside the normal social order and that conventional categories are unreliable.
          </p>
        </Card>
        <Card title="Foreshadowing">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Shakespeare layers the play with premonitions. Before the ball, Romeo senses &ldquo;some consequence yet hanging in the stars&rdquo; (1.4). Juliet sees Romeo &ldquo;as one dead in the bottom of a tomb&rdquo; (3.5). Friar Lawrence warns that &ldquo;these violent delights have violent ends&rdquo; (2.6). These moments create a mounting sense of inevitability. The characters glimpse their own fate but cannot prevent it, reinforcing the theme of destiny.
          </p>
        </Card>
        <Card title="Compressed Time Structure">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The entire play takes place over approximately four days (Sunday to Thursday). Romeo and Juliet meet, fall in love, marry, and die within this compressed timeframe. Shakespeare deliberately accelerates the action to heighten urgency and create a sense of fate racing ahead of the characters. The speed also reflects the intensity of adolescent passion, contrasting with the older generation&apos;s slower, calculating approach to love and marriage.
          </p>
        </Card>
        <Card title="Soliloquy and Aside">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Shakespeare uses soliloquies to reveal inner thoughts. Juliet&apos;s soliloquies are particularly significant: &ldquo;Gallop apace, you fiery-footed steeds&rdquo; (3.2) reveals her desire and courage; her potion soliloquy (4.3) shows her terrifying isolation. Romeo&apos;s soliloquy at the tomb (5.3) shows genuine despair. The soliloquies also chart the characters&apos; development: Juliet&apos;s grow in complexity as she matures, while Romeo&apos;s shift from self-indulgent to genuinely tragic.
          </p>
        </Card>
        <Card title="Comic-Tragic Structure">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Acts 1-2 follow the conventions of romantic comedy: disguise, witty banter, love at first sight, a secret marriage. Mercutio&apos;s death in Act 3 is the pivot that transforms the play from comedy to tragedy. This structural shift mirrors the play&apos;s thematic argument: the feud corrupts and destroys what could have been a happy love story. Shakespeare shows that violence and hatred can turn any comedy into a tragedy.
          </p>
        </Card>
        <Card title="Patriarchal Language and Power">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Shakespeare uses language to reveal power structures. Lord Capulet&apos;s rage at Juliet (&ldquo;Hang thee, young baggage! Disobedient wretch!&rdquo;) uses language of ownership and punishment. &ldquo;Baggage&rdquo; reduces her to an object; &ldquo;hurdle&rdquo; was used to drag traitors to execution. The Nurse and Lady Capulet fall silent during his tirade, showing how patriarchal power silences all women. Shakespeare exposes how control disguised as love becomes tyranny.
          </p>
        </Card>
      </Section>

      {/* ── GRADE 9 POINTS ────────────────────────────────────── */}
      <Section title="Grade 9 Exemplar Points and Interpretations" id="grade-9">
        <p className="text-sm text-muted-foreground mb-4">These higher-level interpretations demonstrate the sophisticated analysis needed for top grades. Each goes beyond surface reading to consider authorial intent, alternative readings, and structural significance.</p>

        <Card title="1. The Prologue as Anti-Tragedy">
          <p className="text-sm leading-relaxed text-muted-foreground">
            A Grade 9 response might argue that the Prologue undermines the conventions of tragedy. By revealing the ending at the start, Shakespeare removes suspense and replaces it with dramatic irony. The audience watches not to discover <em>what</em> happens but <em>how</em> and <em>why</em>. This shifts responsibility from fate to the feuding families &mdash; and, by extension, to the audience. Shakespeare is not asking us to be surprised by the deaths but to interrogate what causes them. The Prologue is less a plot summary than an accusation.
          </p>
        </Card>

        <Card title="2. Juliet as the True Tragic Hero">
          <p className="text-sm leading-relaxed text-muted-foreground">
            While the play is named for both lovers, Juliet undergoes the more significant character arc and makes the braver choices. She defies her father, takes the terrifying potion alone, and kills herself without hesitation. Romeo, by contrast, is impulsive rather than courageous &mdash; he acts on emotion, not principle. Juliet&apos;s language is more rational, her soliloquies more complex, and her agency more deliberate. A top-level answer might argue that Shakespeare deliberately centres the emotional and moral weight on a thirteen-year-old girl in a patriarchal society, making a radical statement about female capability.
          </p>
        </Card>

        <Card title="3. The Feud as Original Sin">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The &ldquo;ancient grudge&rdquo; has no known origin &mdash; its cause is forgotten, yet it persists. A sophisticated reading connects this to the concept of original sin: inherited guilt that individuals did not create but cannot escape. Romeo and Juliet are born into the feud; their love is their attempt to transcend it. Their deaths function as a sacrificial atonement: through their blood, the feud is finally ended. This reading positions the play as a parable about how inherited hatred can only be broken by love and sacrifice.
          </p>
        </Card>

        <Card title="4. Fate vs. Free Will: A False Binary">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Lower-grade answers treat fate and free will as opposites. A Grade 9 response recognises that Shakespeare deliberately blurs the boundary. Romeo&apos;s &ldquo;Then I defy you, stars!&rdquo; is an act of free will that fulfils the fated outcome. The plague that stops the letter is both random chance and the apparent fulfilment of Mercutio&apos;s curse. Shakespeare suggests that fate operates <em>through</em> human choices &mdash; the characters&apos; impulsiveness, the families&apos; hatred, the Friar&apos;s schemes &mdash; not despite them. Agency and destiny are intertwined, not opposed.
          </p>
        </Card>

        <Card title="5. The Shared Sonnet as Structural Revolution">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The shared sonnet at the Capulet ball (1.5) is not merely a clever literary device but a radical structural statement. The Petrarchan sonnet tradition is monologic &mdash; one male poet worships a distant, silent woman. By splitting the sonnet between two speakers and making Juliet an equal participant, Shakespeare transforms a form of male desire into a form of mutual love. This is revolutionary: in the 1590s, the beloved was traditionally objectified. Shakespeare makes Juliet a co-author, not just the object of Romeo&apos;s gaze.
          </p>
        </Card>

        <Card title="6. The Nurse's Betrayal and Juliet's Isolation">
          <p className="text-sm leading-relaxed text-muted-foreground">
            When the Nurse advises Juliet to marry Paris (3.5), it is not merely pragmatic advice but the severing of Juliet&apos;s last emotional connection. Her father threatens her, her mother refuses to help, and now her surrogate mother abandons her. Shakespeare systematically strips away every source of support to isolate Juliet completely, driving her toward the Friar&apos;s desperate plan. Structurally, this isolation is necessary for tragedy: Juliet must face death alone. Thematically, it exposes how patriarchal society fails its women.
          </p>
        </Card>

        <Card title="7. Shakespeare's Critique of Honour Culture">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Tybalt and Mercutio are both destroyed by the code of male honour. Romeo&apos;s attempt to reject this code (refusing Tybalt&apos;s challenge) is more mature, but it fails &mdash; the culture is too powerful. Shakespeare suggests that toxic masculinity, not personal villainy, drives the tragedy. There is no true villain in the play; there is a <em>system</em> of honour that demands violence and punishes peace. This is a remarkably modern critique: Shakespeare locates the problem in culture, not individuals.
          </p>
        </Card>

        <Card title="8. 'All Are Punish'd' -- Collective Guilt">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Prince&apos;s final line includes himself &mdash; &ldquo;All are punish&apos;d&rdquo; means everyone, including the authority that failed to end the feud. This collective guilt challenges the audience: if everyone in Verona is responsible, is the audience complicit too? Shakespeare uses the play&apos;s final moments to extend responsibility beyond the stage. The &ldquo;glooming peace&rdquo; is not triumphant but mournful &mdash; peace achieved through the death of children is not something to celebrate but a devastating indictment of the adults who failed them.
          </p>
        </Card>
      </Section>

      {/* ── ESSAY PLANNING ────────────────────────────────────── */}
      <Section title="Essay Planning Templates" id="essay-planning">
        <Card title="&ldquo;How does Shakespeare present love in Romeo and Juliet?&rdquo;">
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P1: Love as transformation</p>
              <p>Romeo&apos;s shift from Petrarchan clich&eacute;s to genuine poetry. The shared sonnet (1.5) as collaborative love. &ldquo;Did my heart love till now?&rdquo;</p>
            </div>
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P2: Love vs social order</p>
              <p>&ldquo;What&apos;s in a name?&rdquo; challenges the feud. Secret marriage as rebellion. Context: arranged marriages, patriarchal control.</p>
            </div>
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P3: Love and death intertwined</p>
              <p>&ldquo;Death-mark&apos;d love.&rdquo; Light/dark imagery. The tomb: love&apos;s fulfilment through death.</p>
            </div>
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P4: Love as sacrifice that heals</p>
              <p>The deaths end the feud. &ldquo;All are punish&apos;d.&rdquo; Love achieves what authority could not.</p>
            </div>
          </div>
        </Card>

        <Card title="&ldquo;How does Shakespeare present conflict in Romeo and Juliet?&rdquo;">
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P1: Public conflict</p>
              <p>Opening brawl. Prince&apos;s failed authority. &ldquo;Ancient grudge&rdquo; -- cause forgotten, hatred persists.</p>
            </div>
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P2: Honour-driven conflict</p>
              <p>Tybalt as honour personified. Mercutio&apos;s death. Romeo torn between love and revenge.</p>
            </div>
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P3: Internal conflict</p>
              <p>Juliet&apos;s oxymorons. Romeo&apos;s conflict between pacifism and revenge. The Friar&apos;s conflict between caution and action.</p>
            </div>
            <div className="rounded bg-muted p-3">
              <p className="font-semibold text-foreground">P4: Resolution through sacrifice</p>
              <p>&ldquo;A glooming peace&rdquo; -- peace at terrible cost. Only catastrophic loss breaks entrenched hatred.</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ── EXAM BOARD TIPS ──────────────────────────────────── */}
      <Section title="Exam Board Comparison" id="exam-boards">
        <Card title="AQA -- Paper 1, Section A (30+4 marks, ~50 mins)">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>&bull; <strong>Format:</strong> Extract + wider play. Roughly 50/50 split.</li>
            <li>&bull; <strong>AOs:</strong> AO1, AO2, AO3. SPaG marked separately (4 marks).</li>
            <li>&bull; <strong>Key tip:</strong> Zoom in on individual word choices. Weave context into analysis.</li>
            <li>&bull; <strong>Closed book.</strong></li>
          </ul>
        </Card>
        <Card title="Edexcel -- Paper 1, Section A (40 marks, ~55 mins)">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>&bull; <strong>Format:</strong> Extract-based, whole text reference. Heavier AO2 weighting.</li>
            <li>&bull; <strong>Key tip:</strong> Analyse HOW effects are achieved. Precise terminology.</li>
            <li>&bull; <strong>Closed book.</strong></li>
          </ul>
        </Card>
        <Card title="CAIE -- Paper 1, Drama (25 marks)">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>&bull; <strong>Format:</strong> Passage-based OR essay question (choose one).</li>
            <li>&bull; <strong>Key tip:</strong> Personal engagement and close reading rewarded.</li>
            <li>&bull; <strong>Open/closed book depends on component variant.</strong></li>
          </ul>
        </Card>
        <Card title="OCR -- Shakespeare component (40 marks)">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>&bull; <strong>Format:</strong> Extract-based. Depth over breadth.</li>
            <li>&bull; <strong>Key tip:</strong> Three well-analysed quotes beat ten surface-level ones.</li>
            <li>&bull; <strong>Closed book.</strong></li>
          </ul>
        </Card>
      </Section>

      {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
      <Section title="Practice Questions" id="practice-questions">
        <p className="text-sm text-muted-foreground mb-6">
          Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes.
          Aim for at least 150 words per response to get meaningful feedback.
        </p>
        <div className="space-y-8">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 1</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shakespeare present the theme of love in <em>Romeo and Juliet</em>? Refer to the whole play in your answer.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Romeo and Juliet - How Shakespeare presents the theme of love across the play"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 2</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shakespeare use the character of Juliet to challenge patriarchal expectations?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Romeo and Juliet - How Shakespeare uses Juliet to challenge patriarchal expectations"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 3</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shakespeare present conflict and violence in <em>Romeo and Juliet</em>? Refer to the whole play in your answer.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Romeo and Juliet - How Shakespeare presents conflict and violence across the play"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 4</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shakespeare present the theme of fate and destiny in <em>Romeo and Juliet</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Romeo and Juliet - How Shakespeare presents the theme of fate and destiny"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
