import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
;('use client')

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

export default function KingLearPage() {
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
            Shakespearean Tragedy
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel A-Level
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          King Lear &mdash; Complete A-Level Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          {tr(`William Shakespeare, c.1605&ndash;1606`)}
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Substantive A-Level notes for one of Shakespeare&apos;s greatest tragedies. Act-by-act
          plot summary including the Gloucester subplot, detailed character profiles, thematic
          analysis, Jacobean context, 15+ key quotations with critical interpretation, symbol and
          motif tracking, and exam-style essay questions with planning notes for AQA and OCR
          specifications.
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
            'Context',
            'Key Quotations',
            'Symbols & Motifs',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
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
          <Section
            title={tr(`Act-by-Act Plot Summary (with Gloucester Subplot)`)}
            icon="📖"
            defaultOpen
          >
            <p className="text-sm text-muted-foreground mb-4 italic">
              Shakespeare structures <em>King Lear</em> around two parallel plots: the main plot of
              Lear and his three daughters, and the subplot of the Earl of Gloucester and his two
              sons. Both centre on a father&apos;s fatal misjudgement of his children, and the two
              strands intertwine geographically and thematically until they collide on the heath and
              at Dover.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    I
                  </span>
                  Act I &mdash; The Division of the Kingdom
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The aged King Lear announces his intention to divide Britain among his three
                  daughters &mdash; Goneril, Regan and Cordelia &mdash; and to pass authority to
                  them while retaining the title of king. He stages a public &ldquo;love-test&rdquo;
                  in which each daughter must declare how much she loves him. Goneril and Regan
                  respond with extravagant flattery; Cordelia, refusing to prostitute her affection
                  in words, says she loves her father &ldquo;According to my bond, no more nor
                  less.&rdquo; Enraged, Lear disowns and disinherits her. The Earl of Kent attempts
                  to intervene and is banished. The King of France, recognising Cordelia&apos;s
                  virtue, marries her without a dowry. Meanwhile Edmund, the bastard son of the Earl
                  of Gloucester, hatches a plot against his legitimate brother Edgar, forging a
                  letter that supposedly proves Edgar plans patricide. Gloucester believes Edmund
                  instantly. Goneril and Regan, now sharing power, agree to curb their father&apos;s
                  authority and his retinue of one hundred knights.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    II
                  </span>
                  Act II &mdash; Rejection and Disguise
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Edmund persuades Edgar to flee, then wounds himself to feign an attack and frame
                  his brother; Gloucester proclaims Edgar an outlaw. Edgar disguises himself as
                  &ldquo;Poor Tom,&rdquo; a Bedlam beggar. Kent, also in disguise as
                  &ldquo;Caius,&rdquo; takes service with Lear and is placed in the stocks by
                  Cornwall and Regan as a calculated insult to the king. Goneril and Regan together
                  strip Lear of his knights, reducing his retinue from one hundred to fifty, to
                  twenty-five, to ten, to five, until Regan asks &ldquo;What need one?&rdquo;
                  Wounded to the soul and refusing to weep, Lear rushes out into a gathering storm,
                  accompanied only by his Fool. Cornwall, Regan and Goneril shut the castle doors
                  against him.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    III
                  </span>
                  Act III &mdash; The Storm and the Blinding
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  On the heath, Lear rages against the elements: &ldquo;Blow, winds, and crack your
                  cheeks!&rdquo; The storm externalises his inner turmoil and figures the collapse
                  of the natural and political order. He encounters Edgar as Poor Tom and, seeing in
                  him &ldquo;unaccommodated man,&rdquo; begins to descend into madness while
                  simultaneously gaining moral insight. Gloucester secretly helps the king and tells
                  Edmund of a French invasion intended to restore Lear. Edmund betrays his father to
                  Cornwall. In one of the most brutal scenes in Shakespeare, Cornwall and Regan put
                  out Gloucester&apos;s eyes on stage &mdash; &ldquo;Out, vile jelly!&rdquo; A loyal
                  servant draws his sword in protest and mortally wounds Cornwall before being
                  killed himself. The blinded Gloucester is thrust out of his own gates to
                  &ldquo;smell his way to Dover.&rdquo;
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    IV
                  </span>
                  Act IV &mdash; Suffering and Reunion
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The two plots converge. Edgar, still disguised, leads his blind father towards the
                  cliffs of Dover. Gloucester, despairing, attempts suicide; Edgar stages a fall
                  from an imaginary cliff to convince him the gods have miraculously preserved his
                  life. Lear, garlanded with weeds and entirely mad, meets the blinded Gloucester on
                  the beach in one of the play&apos;s most harrowing scenes: &ldquo;A man may see
                  how this world goes with no eyes.&rdquo; Cordelia has landed with French forces.
                  Goneril and Regan now both lust after Edmund, exposing the rottenness of their
                  alliance. Albany, Goneril&apos;s husband, recoils from his wife&apos;s cruelty.
                  Lear is recovered to Cordelia&apos;s camp; awakening from sleep, he kneels before
                  his daughter and, in tears, calls himself &ldquo;a very foolish, fond old
                  man.&rdquo;
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    V
                  </span>
                  Act V &mdash; Catastrophe
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The British forces under Edmund defeat the French; Lear and Cordelia are captured.
                  Lear imagines a contented prison life with Cordelia: &ldquo;We two alone will sing
                  like birds i&apos; the cage.&rdquo; Edmund, however, secretly orders
                  Cordelia&apos;s execution. Goneril poisons Regan out of jealousy and then kills
                  herself. Edgar, in armour, challenges and fatally wounds Edmund; the brothers
                  reconcile. Edmund repents and tries to revoke his order, but too late: Lear enters
                  carrying Cordelia&apos;s body, howling. Gloucester, off-stage, has died of joy and
                  grief on learning Edgar&apos;s identity. Lear dies broken over Cordelia&apos;s
                  corpse, gazing at her lips. Albany and Edgar are left to &ldquo;sustain the
                  gor&apos;d state&rdquo; in a kingdom emptied of authority.
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
                name="King Lear"
                description="The aged King of Britain whose tragic flaw is a confusion of love with flattery and authority with display. Lear demands public declarations of affection and divides his kingdom on the basis of words rather than deeds. Shakespeare presents his journey as a brutal stripping-away: of crown, knights, clothing, sanity, and finally his daughter. His madness on the heath is paradoxically the source of his moral education — only in unaccommodated suffering does he begin to recognise the &lsquo;poor naked wretches&rsquo; he has previously ignored. His final speech, repeating &lsquo;Never&rsquo; five times over Cordelia's body, is one of the most emotionally devastating moments in English drama. Critically he can be read as a Job-like figure tested by the gods, or as a study in narcissism, or as a representation of a king who falsely believes the body politic can be separated from the body natural."
              />
              <CharacterCard
                name="Goneril"
                description="Lear's eldest daughter and the Duchess of Albany. Goneril opens the play with hyperbolic flattery — &lsquo;Sir, I love you more than word can wield the matter&rsquo; — and is shown immediately afterwards plotting with Regan to undermine her father. She is politically shrewd, sexually predatory in her pursuit of Edmund, and contemptuous of her gentler husband Albany, whom she calls a &lsquo;milk-livered man.&rsquo; Shakespeare uses her to dramatise the perversion of natural family bonds; her downfall — poisoning her sister and then taking her own life — completes the play's pattern of evil consuming itself."
              />
              <CharacterCard
                name="Regan"
                description="Lear's middle daughter and the Duchess of Cornwall. If Goneril is the strategist, Regan is the visceral cruelty: she physically pulls Gloucester's beard, urges Cornwall on as he blinds him, and dispatches the wounded servant with a sword from behind. She mirrors Goneril's flattery in Act I — &lsquo;I am made of that self mettle as my sister&rsquo; — but quickly becomes a rival, and her lust for Edmund fractures their alliance. She dies poisoned by her sister, off-stage, dismissed in a single line."
              />
              <CharacterCard
                name="Cordelia"
                description="Lear's youngest daughter, banished in Act I for refusing to flatter and reappearing in Act IV at the head of a French army. Cordelia is often read as a Christ-like figure of redemptive love, kneeling to bless her father and offering forgiveness with the line &lsquo;No cause, no cause.&rsquo; Her death is one of the most controversial in Shakespeare; for centuries audiences could only bear an adapted version (Nahum Tate's 1681 happy-ending revision) which let her live. Critically she has been read as an icon of plain-speaking integrity, as the play's embodiment of nature in its benign form, and as a victim of a universe that refuses to reward virtue."
              />
              <CharacterCard
                name="The Fool"
                description="Lear's licensed jester, whose riddles, songs and bitter prophecies operate as the play's moral chorus. The Fool tells the king truths no other character dares speak: &lsquo;Thou shouldst not have been old before thou hadst been wise.&rsquo; He is paradoxically the wisest figure on stage and the only one who openly mourns Cordelia's banishment. He vanishes from the play in Act III, scene vi, with the line &lsquo;And I'll go to bed at noon&rsquo;; his disappearance is unexplained. Critics have long debated whether he dies, withdraws, or doubles as Cordelia (the same boy actor traditionally played both roles), and Lear's closing &lsquo;And my poor fool is hanged&rsquo; deliberately conflates them."
              />
              <CharacterCard
                name="Edgar"
                description="Gloucester's legitimate son, framed by his half-brother and forced to disguise himself as the Bedlam beggar &lsquo;Poor Tom.&rsquo; Edgar undergoes a journey parallel to Lear's, descending into voluntary madness and bare existence to survive. He guides his blinded father to a fictional Dover cliff and stages a miraculous &lsquo;fall&rsquo; that restores Gloucester's will to live. He kills Edmund in single combat in Act V, reveals himself, and is left to lead a devastated nation. Edgar's arc is one of patience and endurance: &lsquo;Ripeness is all.&rsquo;"
              />
              <CharacterCard
                name="Edmund"
                description="Gloucester's illegitimate son and the play's great Machiavellian villain. Edmund opens his soliloquy with a defiant address to &lsquo;Nature&rsquo; as his goddess, rejecting the legitimacy of laws based on accident of birth: &lsquo;Why bastard? Wherefore base?&rsquo; He frames Edgar, betrays Gloucester, courts both Goneril and Regan simultaneously, and orders Cordelia's execution. Yet Shakespeare gives him a remarkable death-bed reversal — &lsquo;Some good I mean to do, despite of mine own nature&rsquo; — which he attempts too late. He embodies a new, sceptical, post-feudal order in which loyalty and birthright are merely conventions to be exploited."
              />
              <CharacterCard
                name="The Earl of Gloucester"
                description="A nobleman who in many ways doubles for Lear: another father who misjudges his children, prefers the flatterer to the truth-teller, and pays in suffering. Gloucester is also more openly pious than Lear, attributing the political chaos to &lsquo;these late eclipses in the sun and moon.&rsquo; His blinding is the play's most graphic moment; thereafter he is led, often unknowingly, by the disguised Edgar. The line &lsquo;I stumbled when I saw&rsquo; encapsulates the sight/blindness paradox at the heart of his arc. He dies of mingled joy and grief when Edgar finally reveals himself."
              />
              <CharacterCard
                name="The Earl of Kent"
                description="The most loyal of Lear's nobles. Banished in the opening scene for daring to call the king mad — &lsquo;See better, Lear&rsquo; — he returns in disguise as &lsquo;Caius&rsquo; to serve his master through the storm and beyond. Kent is the moral counterweight to Edmund: a man who serves out of fidelity, not interest, and who will not survive the new order. His final lines suggest he intends to follow Lear into death: &lsquo;I have a journey, sir, shortly to go; / My master calls me; I must not say no.&rsquo;"
              />
              <CharacterCard
                name="The Duke of Albany"
                description="Goneril's husband, who begins as a mild, almost passive figure but develops a moral conscience as his wife's cruelty becomes plain. By Act IV he openly condemns her: &lsquo;Tigers, not daughters, what have you performed?&rsquo; He survives the catastrophe and, with Edgar, takes responsibility for the kingdom. Albany's development complicates a simple good-versus-evil reading; Shakespeare shows that virtue can grow as well as decay."
              />
              <CharacterCard
                name="The Duke of Cornwall"
                description="Regan's husband, a sadistic and authoritarian figure. Cornwall's blinding of Gloucester is one of the most disturbing acts of cruelty in Shakespeare, performed without legal pretence and in defiance of his own servants' protests. He is fatally wounded by one of those servants — a rare moment in Shakespearean drama where the lower orders openly challenge tyranny. His death does not redeem the act; Regan simply takes over."
              />
              <CharacterCard
                name="King of France &amp; Duke of Burgundy"
                description="The two suitors for Cordelia's hand in Act I. Burgundy, on hearing Cordelia is dowerless, immediately withdraws — &lsquo;Peace be with Burgundy: / Since that respects of fortune are his love, / I shall not be his wife.&rsquo; France marries her on principle, declaring &lsquo;She is herself a dowry.&rsquo; The two figures form a brief but pointed structural contrast between transactional and unconditional love, foreshadowing the play's broader interrogation of what binds people to one another. France remains off-stage thereafter; Cordelia returns as queen of France at the head of his army, but he himself is conspicuously absent from the final acts."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Power and Authority`)}
                description="The play opens with the most catastrophic political act imaginable in early modern thought: a king dividing his realm and abdicating power without dying. Shakespeare anatomises what authority is once stripped of its theatrical trappings. Lear retains the &lsquo;name and all th' addition&rsquo; of king while giving away the substance, and discovers — too late — that his daughters value the substance, not the name. Power changes hands violently and repeatedly: from Lear to his daughters, from Gloucester to Edmund, from Cornwall to Albany, and finally to a depleted, exhausted Edgar. The play's political vision is profoundly pessimistic; even a legitimate restoration carries the weight of catastrophe."
              />
              <ThemeCard
                title={tr(`Sight and Blindness`)}
                description="Few Shakespeare plays use a single image so insistently. Lear's opening fault is one of moral blindness — he cannot see Cordelia's love, nor read his elder daughters' flattery — and Kent's rebuke &lsquo;See better, Lear&rsquo; sets the motif in motion. Gloucester's literal blinding in Act III externalises the metaphor: only when his eyes are gone does he understand his sons. The paradox is sharpened in IV.vi when the blind Gloucester meets the mad Lear: &lsquo;A man may see how this world goes with no eyes. Look with thine ears.&rsquo; True sight in this play is moral, not physical; both fathers must be blinded, literally or figuratively, to perceive what they have done."
              />
              <ThemeCard
                title="Madness"
                description="Madness in <em>King Lear</em> is not merely affliction but a strange form of revelation. Lear's mind cracks under the weight of betrayal, but as it does so he speaks more truth — about justice, about the rich and poor, about the body — than he ever did in sanity. Edgar feigns madness as Poor Tom, and his fragmented, demonic speeches blur the line between performance and possession. The Fool's licensed folly, the king's genuine derangement, and Edgar's assumed lunacy together form a bleak Jacobean meditation on whether reason itself is the highest faculty. Shakespeare seems to suggest that institutional reason has failed, and that wisdom can only be glimpsed from outside it."
              />
              <ThemeCard
                title={tr(`Family and Filial Loyalty`)}
                description="The play stages a brutal inversion of the Fifth Commandment. Goneril and Regan flatter and then abandon their father; Edmund frames and betrays his. Yet Shakespeare also shows the opposite: Cordelia returns to rescue Lear, Edgar tends his blinded father in disguise, the Fool follows his master into the storm. The bond between parent and child is the play's deepest test of human nature, and the language of &lsquo;nature&rsquo; (a key word repeated more than forty times) is used both to denounce unnatural daughters and to celebrate the bonds that survive. Critically, the play has been read as a study of the patriarchal family in crisis: a father who weaponises his children's love is himself a corrupting force."
              />
              <ThemeCard
                title={tr(`Nature and Order`)}
                description="&lsquo;Nature&rsquo; is the play's most contested word. For Lear and Gloucester it means the divinely ordered hierarchy of family and state — the Great Chain of Being — and its violation is monstrous. For Edmund it means raw appetite: &lsquo;Thou, Nature, art my goddess; to thy law / My services are bound.&rsquo; The storm on the heath is the cosmos itself in revolt: a Jacobean audience would have read tempests as omens of disorder in the body politic. Yet Shakespeare resists giving the moral universe a stable centre. The gods are silent, the storm passes, and natural order is not restored — only exhaustion remains."
              />
              <ThemeCard
                title={tr(`Suffering and Redemption`)}
                description="<em>King Lear</em> stages suffering on a scale unmatched in Shakespeare. Lear is exposed to the storm; Gloucester is blinded; Edgar lives as a beggar; Cordelia is hanged. Critics from Samuel Johnson onwards have struggled with the play's refusal to redeem this suffering. Some readings (A.C. Bradley, G. Wilson Knight) see Lear as a Christian pilgrimage in which the king is purified through anguish and dies in a kind of grace. Others (Jan Kott, Stephen Greenblatt) see a far bleaker play in which suffering simply happens, the universe is empty, and Cordelia's death is a final cancellation of all redemption. Both readings are textually defensible, and the ambiguity is the play's greatest power."
              />
              <ThemeCard
                title={tr(`Justice and Injustice`)}
                description="The play repeatedly asks whether the gods are just, and repeatedly refuses to answer. Gloucester famously cries &lsquo;As flies to wanton boys are we to th' gods; / They kill us for their sport,&rsquo; while Edgar later insists &lsquo;The gods are just.&rsquo; The mock-trial Lear conducts on the heath, arraigning a stool as Goneril, parodies the very institutions that have failed him. Cordelia's death is the play's ultimate scandal: she is the most innocent character in the canon, and Shakespeare kills her without explanation. Whether this is a critique of human justice, divine injustice, or simply tragic contingency is left unresolved."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Literary Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Jacobean England under James I`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>King Lear</em> was written around 1605&ndash;1606 and first performed at the
                  court of James I on St Stephen&apos;s Day, 26 December 1606. James, who succeeded
                  the childless Elizabeth in 1603, had united the crowns of England and Scotland and
                  was preoccupied with the political unification of his realms. A play in which a
                  British king disastrously divides his kingdom was therefore politically charged:
                  it dramatises the catastrophe James was working to prevent. The Gunpowder Plot of
                  November 1605 had also intensified anxieties about treason, regicide and the
                  legitimacy of authority.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Divine Right of Kings`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  James I was the most articulate exponent of the Divine Right of Kings, the
                  doctrine that monarchs derived their authority directly from God and were
                  answerable to him alone. His treatise{' '}
                  <em>{tr(`The Trew Law of Free Monarchies`)}</em> (1598) argued that subjects could
                  never legitimately resist a king. Lear&apos;s abdication is therefore not just
                  imprudent but cosmically transgressive — kingship cannot be given away. The play
                  tests divine-right theory to destruction: if the king is the earthly image of God,
                  what becomes of order when he himself is mad, naked and weeping in a storm?
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Sources: Leir, Holinshed and Sidney`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare drew on at least three principal sources. The anonymous{' '}
                  <em>{tr(`True Chronicle History of King Leir`)}</em> (published 1605) provided the
                  love-test and the daughters&apos; ingratitude, but ended happily with Leir
                  restored to the throne; Shakespeare&apos;s decision to kill both Cordelia and Lear
                  is a deliberate, shocking departure. Raphael Holinshed&apos;s <em>Chronicles</em>
                  (1577/1587) supplied the chronicle-history framing and the legendary status of
                  Lear as an ancient British king. The Gloucester subplot is borrowed from the story
                  of the Paphlagonian king in Sir Philip Sidney&apos;s <em>Arcadia</em> (1590) —
                  Shakespeare&apos;s grafting of this parallel plot onto the Lear story is one of
                  his most important structural innovations.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Storm as Cosmic Disorder`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Jacobean cosmology, weather, politics and human passion were interlinked. The
                  macrocosm (the universe) and the microcosm (the body) reflected each other;
                  disturbances in one realm caused disturbances in the other. The storm on the heath
                  is therefore not mere atmospheric effect but a cosmological event: the heavens
                  themselves rage because the natural order of king and kingdom has been violated.
                  Gloucester&apos;s reference to &lsquo;these late eclipses in the sun and
                  moon&rsquo; (eclipses had occurred in autumn 1605) explicitly invokes this
                  worldview, even as Edmund mocks it as superstition.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Great Chain of Being`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Elizabethan and Jacobean worldview was structured around a hierarchy
                  descending from God through angels, monarchs, nobles, commoners, animals and
                  minerals — the Great Chain of Being. Each link had its proper place, and any
                  disruption threatened the whole. Lear&apos;s abdication, daughters who outrank
                  fathers, a bastard who supplants his legitimate brother, servants who strike their
                  masters — all are violations of the Chain. Shakespeare uses the vocabulary of the
                  Chain (&lsquo;nature,&rsquo; &lsquo;degree,&rsquo; &lsquo;bond&rsquo;) even as the
                  play seems to dismantle confidence in it.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Succession Anxiety after Elizabeth`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Elizabeth I died in 1603 without naming an heir until her final hours, and the
                  realm endured decades of fear about a contested succession or civil war.
                  James&apos;s peaceful accession was relief, but anxieties about disputed
                  inheritance, illegitimacy and the failure of dynastic authority were fresh.{' '}
                  <em>King Lear</em> dramatises every Jacobean nightmare about succession: an aged
                  ruler who cannot read his children, daughters who exploit a father&apos;s
                  vulnerability, a bastard who exploits the laws of inheritance, and a kingdom torn
                  between factions. The play is, among other things, a meditation on what England
                  has just narrowly escaped.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              17 quotations chosen to cover every major theme and turning point. Memorise the
              speaker and act.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Nothing will come of nothing. Speak again."
                speaker="Lear, I.i"
                analysis="The opening confrontation with Cordelia. The chiasmic phrase &lsquo;nothing... nothing&rsquo; sets up a key motif: the word &lsquo;nothing&rsquo; recurs more than thirty times in the play, becoming a kind of leitmotif for what Lear loses (kingdom, daughters, sanity, identity). Cordelia's answer — &lsquo;Nothing&rsquo; — is the seed of the entire tragedy. Lear's injunction &lsquo;Speak again&rsquo; reveals his confusion of love with verbal performance, the foundational error of the play."
              />
              <QuoteCard
                quote="I love your majesty according to my bond, no more nor less."
                speaker="Cordelia, I.i"
                analysis="Cordelia refuses to inflate her love into rhetoric. The legal vocabulary (&lsquo;bond&rsquo;) is deliberately understated, and contrasts with her sisters' hyperbole. Critics have read this line as everything from cold legalism to the play's only honest declaration of love; it is also the engine of catastrophe. The quotation is essential for any essay on language, integrity or filial duty."
              />
              <QuoteCard
                quote="Thou, Nature, art my goddess; to thy law / My services are bound."
                speaker="Edmund, I.ii"
                analysis="Edmund's opening soliloquy redefines &lsquo;nature&rsquo; as raw self-interest, in opposition to the customary, hierarchical &lsquo;nature&rsquo; invoked by his father. The blank-verse confidence and direct address to a personified Nature mark him as a proto-modern, almost Hobbesian figure. The line is a gift for AO3 (context) work on the Great Chain of Being and its erosion."
              />
              <QuoteCard
                quote="Thou shouldst not have been old before thou hadst been wise."
                speaker="The Fool, I.v"
                analysis="The Fool's rebuke to Lear, delivered as a pseudo-proverb. The chiasmus (&lsquo;old / wise&rsquo;) inverts the conventional pairing: in Jacobean wisdom literature, age implies wisdom. The Fool deflates this commonplace and pinpoints Lear's tragedy. As the play's licensed truth-teller, the Fool can speak to the king what no courtier dares; this line is one of the most useful for discussing the Fool's structural function."
              />
              <QuoteCard
                quote="O, reason not the need! Our basest beggars / Are in the poorest thing superfluous."
                speaker="Lear, II.iv"
                analysis="The crisis-point of the dispossession scene: Regan has just asked &lsquo;What need one?&rsquo; Lear's reply moves from particular grievance to philosophical statement: human dignity is precisely what cannot be reduced to need. The line foreshadows his later realisation on the heath that even &lsquo;the basest beggar&rsquo; has more than he. It is also a profound rebuke of the utilitarian thinking that his daughters represent."
              />
              <QuoteCard
                quote="Blow, winds, and crack your cheeks! Rage, blow!"
                speaker="Lear, III.ii"
                analysis="The opening of Lear's storm-speech, addressing the elements as if they were courtiers. The imperative verbs (&lsquo;Blow,&rsquo; &lsquo;crack,&rsquo; &lsquo;Rage&rsquo;) attempt to command nature, even as the storm dwarfs him. Personification (&lsquo;cheeks&rsquo;) makes the wind almost human and visualises the cosmos itself in distress. The speech demonstrates both the megalomania of a king who still expects obedience from creation, and the pathos of a man with nothing else to command."
              />
              <QuoteCard
                quote="I am a man / More sinn'd against than sinning."
                speaker="Lear, III.ii"
                analysis="Lear's self-defence in the storm. The comparative structure (&lsquo;more... than&rsquo;) shows him beginning to think about moral accountability, but he still cannot fully accept his own role. The line is critically contested: some readers take it as truth (his daughters' cruelty exceeds his fault), others as self-pity (Lear refuses to acknowledge that he set the catastrophe in motion). The ambiguity is part of why the line is so frequently cited."
              />
              <QuoteCard
                quote="Poor naked wretches, wheresoe'er you are, / That bide the pelting of this pitiless storm... / O, I have ta'en / Too little care of this!"
                speaker="Lear, III.iv"
                analysis="A pivotal moment: outside Poor Tom's hovel, Lear pauses to think for the first time about the suffering of the poor. The alliteration (&lsquo;pelting... pitiless&rsquo;) emphasises external violence; the self-rebuke (&lsquo;Too little care&rsquo;) is the play's great moment of moral awakening. This is essential for any essay on social justice in Lear or on the theme of redemption."
              />
              <QuoteCard
                quote="Is man no more than this? Consider him well... unaccommodated man is no more but such a poor, bare, forked animal as thou art."
                speaker="Lear, III.iv"
                analysis="On encountering Edgar as Poor Tom, Lear is moved to strip off his own clothes. &lsquo;Unaccommodated&rsquo; is a key Lear word: stripped of social trappings, what is humanity? &lsquo;Forked animal&rsquo; reduces the human form to its biological essentials. The speech is the philosophical centre of the play, asking the question that the rest of the action cannot fully answer."
              />
              <QuoteCard
                quote="Out, vile jelly! Where is thy lustre now?"
                speaker="Cornwall, III.vii"
                analysis="The line accompanying the on-stage blinding of Gloucester. The gross materiality (&lsquo;vile jelly&rsquo;) reduces the eye, the most spiritualised organ in Renaissance thought, to a piece of meat. The rhetorical question is sadistic. Productions almost always deliver this line with shocking force; its violence is one of the reasons the play was rarely performed in its full text for nearly two centuries."
              />
              <QuoteCard
                quote="As flies to wanton boys are we to th' gods; / They kill us for their sport."
                speaker="Gloucester, IV.i"
                analysis="Spoken just after his blinding, this is the play's most famous statement of cosmic injustice. The simile reduces humanity to insects and the gods to cruel children. &lsquo;Wanton&rsquo; suggests both casual and capricious. The line is essential for any discussion of the play's religious vision; it is balanced, but never refuted, by Edgar's &lsquo;The gods are just&rsquo; (V.iii)."
              />
              <QuoteCard
                quote="I stumbled when I saw."
                speaker="Gloucester, IV.i"
                analysis="The most concise statement of the sight/blindness paradox. The verb &lsquo;stumbled&rsquo; reverses the usual association of sight with security; only blindness has given Gloucester clear vision. Brilliant for AO2 (language) work because of its compression — five words contain the entire metaphorical structure of the subplot."
              />
              <QuoteCard
                quote="A man may see how this world goes with no eyes. Look with thine ears."
                speaker="Lear, IV.vi"
                analysis="The mad Lear, meeting the blind Gloucester, articulates the play's sight/blindness paradox at its bleakest. The synaesthetic command (&lsquo;Look with thine ears&rsquo;) collapses the sensory hierarchy. The scene is one of the strangest in Shakespeare: the mad king and the blind earl together perceive the world more truly than any sane and sighted character has done."
              />
              <QuoteCard
                quote="I am a very foolish, fond old man, / Fourscore and upward, not an hour more nor less; / And, to deal plainly, / I fear I am not in my perfect mind."
                speaker="Lear, IV.vii"
                analysis="The reunion with Cordelia. The triple self-description (&lsquo;foolish, fond old man&rsquo;) is the polar opposite of the imperious king of Act I. The legalistic precision (&lsquo;not an hour more nor less&rsquo;) and the painfully simple admission (&lsquo;I fear I am not in my perfect mind&rsquo;) make this one of the most affecting moments in the play. Use it to argue for moral education through suffering."
              />
              <QuoteCard
                quote="We two alone will sing like birds i' the cage... / And take upon's the mystery of things, / As if we were God's spies."
                speaker="Lear, V.iii"
                analysis="Captured with Cordelia, Lear imagines an idyllic prison-life. The bird-cage simile transforms imprisonment into pastoral; &lsquo;God's spies&rsquo; suggests a contemplative, almost monastic vocation. The fantasy is heart-breaking precisely because Edmund's execution-order is already in motion. Shakespeare gives Lear a moment of imagined grace and then immediately destroys it."
              />
              <QuoteCard
                quote="Howl, howl, howl, howl! O, you are men of stones."
                speaker="Lear, V.iii"
                analysis="Lear enters with Cordelia in his arms. The four-fold imperative is reducible to no rational meaning — it is grief-as-sound. The contrast with the urbane verse he speaks elsewhere is shattering. &lsquo;Men of stones&rsquo; transforms the on-stage witnesses into a chorus of unfeeling rock. Critics often note that the line is Shakespeare's most extreme attempt to push tragic verse to the limit of articulation."
              />
              <QuoteCard
                quote="Never, never, never, never, never."
                speaker="Lear, V.iii"
                analysis="Lear's last full line of verse, looking at the dead Cordelia. The repetition of a single trochee five times is a deliberate metrical shock: it falls outside the iambic norm and forces the actor to find five different inflections of the same word. Many critics regard this as the most devastating line in English drama. Use it to discuss the breakdown of language under grief, or as evidence against any reading of the play as ultimately redemptive."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS & MOTIFS */}
        <div id="symbols-and-motifs">
          <Section title={tr(`Symbols and Motifs`)} icon="🔁">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Storm</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The storm in Acts III is the play&apos;s defining symbol, operating on at least
                  three levels: the cosmological (the heavens registering disorder in the body
                  politic), the psychological (Lear&apos;s mind erupting), and the social (society
                  shaken to its base by the violation of natural bonds). Shakespeare directs the
                  storm through Lear&apos;s imperatives (&lsquo;Blow, winds&rsquo;) so that the king
                  and the elements seem to share a single voice, even as nature refuses to obey him.
                  The storm passes, but unlike the tempest at the end of{' '}
                  <em>{tr(`The Tempest`)}</em>, it is not redemptive — it merely exhausts.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Clothing and Nakedness`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Clothing is the visible sign of social position. Lear&apos;s descent is marked by
                  progressive unclothing: he gives away his crown, then his retinue, and finally
                  tears off his own garments on the heath when he sees Edgar as the &lsquo;poor,
                  bare, forked animal&rsquo; Poor Tom. Edgar&apos;s beggar disguise — naked but for
                  a blanket and mud — is the play&apos;s emblem of unaccommodated humanity. The
                  motif culminates in the recovery scene of IV.vii, where Lear is brought on stage
                  in fresh clothes provided by Cordelia&apos;s attendants — re-clothed by his
                  daughter&apos;s love. Clothing is identity in Lear; to lose it is to become
                  nothing, but also, paradoxically, to see truly.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  The Fool&apos;s Prophecies and Riddles
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Fool speaks almost entirely in riddles, songs and pseudo-prophecies, including
                  the notoriously enigmatic &lsquo;Merlin&apos;s prophecy&rsquo; in III.ii. These
                  verbal forms encode truths the court cannot bear to hear directly. The Fool&apos;s
                  riddles function structurally: they puncture pretensions, comment on the action
                  like a chorus, and challenge the audience to interpret. His sudden disappearance
                  in III.vi leaves the play without its truth-teller precisely as the world becomes
                  most unreadable.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Lear&apos;s Crown`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The crown is given away in I.i and never literally returned. In its place, Lear in
                  IV.vi wears a crown of weeds and wild flowers — &lsquo;crown&apos;d with rank
                  fumiter and furrow-weeds&rsquo; — a savage parody of regal display. The
                  substitution dramatises the play&apos;s collapse of the body politic into the body
                  natural. The crown of weeds also recalls Christ&apos;s crown of thorns; readings
                  that emphasise the play&apos;s religious imagery often pivot on this image.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Gloucester&apos;s Blinding`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The on-stage gouging of Gloucester&apos;s eyes in III.vii is the play&apos;s most
                  violent symbol: a literal enactment of the metaphor that has run through both
                  plots. Cornwall&apos;s &lsquo;Out, vile jelly!&rsquo; reduces the most
                  spiritualised organ to bare matter. The scene is also a turning point in the moral
                  arc of the lower characters: an unnamed servant draws his sword in protest and
                  kills his master, the only such moment of insubordination in Shakespeare. After
                  the blinding, every encounter Gloucester has is framed by the audience&apos;s
                  awareness that he cannot see — a sustained dramatic irony that intensifies pathos.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Heath</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The heath of Acts III is the most powerful liminal space in Shakespeare. It is
                  outside the castle, outside the court, outside the law: a place of wind, hovel and
                  madness. In the heath scenes, the king is reduced to the status of a beggar, the
                  beggar (Edgar) speaks with the voice of a fiend, and the Fool becomes a sage.
                  Hierarchy dissolves; identity becomes negotiable. The heath is the play&apos;s
                  great experimental laboratory in which Shakespeare tests what is left of the human
                  when the structures of society are stripped away.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Animal and Beast Imagery`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play teems with animal imagery, almost always denoting moral degradation. Lear
                  curses Goneril with the famous simile &lsquo;How sharper than a serpent&apos;s
                  tooth it is / To have a thankless child!&rsquo; and calls her a &lsquo;detested
                  kite.&rsquo; Albany denounces Goneril and Regan as &lsquo;Tigers, not
                  daughters.&rsquo; Edgar as Poor Tom describes himself as &lsquo;hog in sloth, fox
                  in stealth, wolf in greediness, dog in madness, lion in prey.&rsquo; The
                  cumulative effect is a vision of humanity collapsing into the bestial — a Jacobean
                  nightmare about the porous boundary between man and animal, reinforced by the
                  period&apos;s anxieties about disorder and social rebellion.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="A-Level Exam Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level style questions modelled on AQA and OCR specifications. Each comes with
              planning notes covering thesis, structural angles and AO3 (context) / AO5
              (interpretations) hooks.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;<em>King Lear</em> is a play in which suffering is its own
                  reward.&rdquo; In the light of this comment, explore Shakespeare&apos;s
                  presentation of suffering in the play. (AQA Spec A)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents suffering as the engine of moral insight in the play, but
                      stops short of presenting it as redemptive. The play&apos;s structure refuses
                      any comforting transfiguration of pain.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Suffering as education
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lear&apos;s &lsquo;Poor naked wretches&rsquo; speech in III.iv. Argue that the
                      storm forces him into a moral consciousness he never had as king. AO3: link to
                      Christian readings of redemptive suffering.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The Gloucester subplot
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Gloucester&apos;s &lsquo;I stumbled when I saw.&rsquo; The blinding is the
                      play&apos;s most graphic suffering, and it produces clear moral perception —
                      but it cannot save him.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The negation of reward
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cordelia&apos;s death and Lear&apos;s &lsquo;Never, never, never, never,
                      never.&rsquo; AO5: contrast Bradley&apos;s redemptive reading with Jan
                      Kott&apos;s absurdist <em>{tr(`Shakespeare Our Contemporary`)}</em>. The play
                      allows no consolation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Suffering produces wisdom but not salvation. Shakespeare&apos;s tragic vision
                      is that knowledge bought with anguish is its own kind of currency, but it does
                      not buy life back.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Discuss the dramatic significance of the Fool in <em>King Lear</em>.
                  (OCR-style)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Fool functions as the play&apos;s licensed truth-teller, structural
                      chorus, and emotional surrogate for the absent Cordelia. His disappearance
                      signals the end of corrective speech and the descent into pure tragedy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Truth-telling
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;Thou shouldst not have been old before thou hadst been wise.&rsquo; The
                      Fool&apos;s riddles puncture courtly hypocrisy. AO3: the medieval and
                      Renaissance tradition of the licensed jester.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Surrogate Cordelia
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Fool first appears only after Cordelia is banished. AO5: discuss the
                      theatrical tradition that the boy-actor doubled both roles, and the
                      implications for Lear&apos;s closing &lsquo;my poor fool is hanged.&rsquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Disappearance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;And I&apos;ll go to bed at noon.&rsquo; His vanishing in III.vi is one
                      of the great Shakespearean cruxes. Without the Fool, the play loses its safety
                      valve; the rest is silence and storm.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. &ldquo;The Gloucester subplot is essential to <em>King Lear</em>; the play
                  would not work without it.&rdquo; Discuss. (AQA / OCR)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The subplot is structurally indispensable: it generalises the personal tragedy
                      of Lear into a universal crisis of fatherhood and authority, and it provides
                      the play with its most emblematic image of moral blindness made literal.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Doubling
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Two fathers, both deceived by the wrong child. Doubling makes the tragedy a
                      structural feature of the world, not a personal misfortune.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Sight and blindness literalised
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Gloucester&apos;s blinding makes the metaphorical blindness of Act I horribly
                      physical. AO3: link to Sidney&apos;s <em>Arcadia</em> source, and to the
                      Jacobean cosmology in which inner and outer states mirror each other.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Edmund as new Machiavellianism
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Edmund is the play&apos;s only true ideologist of self-interest; without him,
                      the play would lack its sceptical voice on the natural order. Compare to Iago
                      in <em>Othello</em>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. Compare Shakespeare&apos;s presentation of ambition and downfall in{' '}
                  <em>King Lear</em> and
                  <em> Macbeth</em>. (Comparative essay, AQA Spec B / OCR comparative)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both plays anatomise ambition, but they place the corrupting force
                      differently: in <em>Macbeth</em> ambition is internal and demonic, hunting
                      from within the protagonist&apos;s soul; in <em>Lear</em> the destructive
                      ambition belongs to the next generation, while the protagonist&apos;s fall is
                      from a different vice — pride. Yet the trajectory of catastrophe and the
                      cosmological imagery are strikingly similar.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Locus of ambition
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Macbeth himself is consumed by &lsquo;vaulting ambition&rsquo;; Lear&apos;s
                      ambition is the demand for total filial love, and the wider ambition belongs
                      to Goneril, Regan and Edmund. Compare Macbeth&apos;s &lsquo;Stars, hide your
                      fires; / Let not light see my black and deep desires&rsquo; to Edmund&apos;s
                      &lsquo;Now, gods, stand up for bastards!&rsquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Disrupted nature
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both plays use cosmic disorder as a political symbol: the storms and prodigies
                      of <em>Macbeth</em>&apos;s Scotland, the heath and the &lsquo;late
                      eclipses&rsquo; of <em>Lear</em>&apos;s Britain. AO3: both plays were written
                      for James I, who was preoccupied with order and demonology.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Endings
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Macbeth ends with restoration: Malcolm crowned, the body politic healed. Lear
                      ends with exhaustion: Albany and Edgar inherit a depleted realm. AO5:{' '}
                      <em>Macbeth</em> follows the de casibus tragedy template; <em>Lear</em>{' '}
                      arguably destroys it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The two plays form a Jacobean diptych of order and disorder. Where{' '}
                      <em>Macbeth</em> closes the wound, <em>Lear</em> leaves it open.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. &ldquo;Cordelia is too good to be true.&rdquo; To what extent do you agree with
                  this view of Cordelia&apos;s presentation in <em>King Lear</em>? (AQA Spec A
                  interpretations question)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare risks idealising Cordelia, but anchors her in a recognisable,
                      almost legalistic plain-speaking that resists sentimentality. Her death,
                      however, is the play&apos;s most uncompromising refusal of the comfort her
                      character seems to promise.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Plain speech, not idealism
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;According to my bond, no more nor less.&rsquo; Cordelia is not a
                      sentimental heroine — her language is austere. AO5: feminist readings
                      (Kathleen McLuskie) that see her as defined by her function in a patriarchal
                      economy of love.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Christ-like associations
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;No cause, no cause.&rsquo; The forgiveness scene in IV.vii does invite
                      Christian readings; A.C. Bradley saw her as a redemptive figure. AO3: the
                      resonance with the Crucifixion in a Jacobean Protestant context.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The shock of her death
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare departs from the source play <em>Leir</em>, in which Cordelia
                      survives. AO3: Samuel Johnson famously could not bear to re-read the ending;
                      Nahum Tate&apos;s 1681 adaptation kept her alive for over a century. AO5: the
                      death is either the play&apos;s fall into nihilism or its highest moment of
                      tragic seriousness.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cordelia is not too good to be true; she is exactly true enough to make the
                      world&apos;s rejection of her unbearable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          {tr(`Exam Tips for King Lear at A-Level`)}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use the parallel plots.`)}</strong> Examiners reward students who track
              Lear and Gloucester together. Almost any answer can be enriched by comparing the two
              fathers&apos; arcs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Engage with critical readings (AO5).`)}</strong> A.C. Bradley&apos;s
              redemptive reading; Jan Kott&apos;s absurdist reading; feminist readings (McLuskie);
              New Historicist readings (Greenblatt). You don&apos;t need many — two well-chosen
              critics, deployed accurately, beat a list.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Anchor context (AO3) precisely.`)}</strong> Don&apos;t just say
              &ldquo;Jacobean audiences believed in the Divine Right of Kings.&rdquo; Show how that
              belief makes a specific moment — Lear&apos;s abdication, the storm, the blinding —
              register more powerfully.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Discuss Shakespeare&apos;s craft (AO2).`)}</strong> Verse vs prose; the
              breakdown of iambic pentameter in Lear&apos;s mad speeches; the Fool&apos;s shift
              between rhyme and prose; the absence of soliloquy from Lear after Act III.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Don&apos;t soften the ending.`)}</strong> Cordelia&apos;s death is meant
              to be shocking. Avoid the temptation to rescue the play with a moralising conclusion;
              engage with the open question of whether the ending is redemptive or nihilistic.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise terminology.`)}</strong> &ldquo;De casibus tragedy,&rdquo;
              &ldquo;peripeteia,&rdquo; &ldquo;anagnorisis,&rdquo; &ldquo;Machiavel,&rdquo;
              &ldquo;the Great Chain of Being,&rdquo; &ldquo;pathetic fallacy,&rdquo;
              &ldquo;chiasmus,&rdquo; &ldquo;dramatic irony.&rdquo;
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>King Lear</em> by William Shakespeare was written c.1605&ndash;1606 and first
          performed at the court of James I on 26 December 1606. The text exists in two early
          versions, the 1608 First Quarto and the 1623 First Folio, which differ substantially.
          Shakespeare died in 1616 and the text is in the <strong>public domain</strong>. All
          quotations on this page are reproduced from the Folio/Quarto tradition.
        </p>
      </footer>
    </>
  )
}
