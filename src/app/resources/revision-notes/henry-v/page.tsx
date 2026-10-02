'use client'

/**
 * Henry V, the A-Level revision notes.
 *
 * A line shown as Shakespeare's must be the words of the edition the site
 * holds, src/data/full-texts/henry-v.ts (Project Gutenberg #1521), which the
 * reader prints in full, because students memorise these quotations for their
 * exams. Until 2 October 2026 this page called its quotations "authentic Folio
 * quotations", "reproduced verbatim from the First Folio as preserved in
 * standard modern editions", and nothing compared it with the held edition.
 * When scripts/check-quotations.mjs first did, it found three spellings the
 * edition does not print ("ev'n", "to-day" and "a-bed" for its "even", "today"
 * and "abed"), and a card for the wooing scene (5.2) holding a line that is in
 * no edition, "I am a soldier; a name that I think will suit me better than
 * any I now name", a misremembering of the Harfleur speech (3.3) that the
 * essay plans quoted twice more. The wooing scene's own "I speak to thee plain
 * soldier" now stands in all three places.
 *
 * Reading the page by hand found what the checker cannot see, because the
 * speaker or the scene is named only in prose: Pistol's "His heart is fracted
 * and corroborate" (2.1) given to the Hostess as her account of Falstaff's
 * death; Henry's own "I am a Welshman", said in disguise to Pistol (4.1),
 * given to Fluellen in the leek scene; "fiery trigon", from 2 Henry IV, given
 * to Henry; "creep'st thou into the great-place", which the play does not
 * have, given to the ceremony soliloquy; the Chorus asking for "horse" and
 * "armies", where the Prologue has "horses" and no armies; and the
 * soliloquy's "idol" called a cap of maintenance (the play has none) whose
 * worshippers suffer for it, and on another card an idol the private man pays
 * for, where the idol is the god "that suffer'st more / Of mortal griefs than
 * do thy worshippers" and it is kings who forgo the heart's ease private men
 * enjoy. Each is now the play's own line for the same point, and the
 * Prologue's two questions are no longer called three.
 *
 * A second reading the same day found what that pass left. The breach-speech
 * card had Henry summon "noble English"; his line is "On, on, you noblest
 * English" (3.1). "O noble English" is Canterbury's, in 1.2, so the checker
 * found the words in the play and passed them. Four paraphrases of the
 * Epilogue gave the loss of France to Henry's son, or to "the realm", where
 * the Epilogue gives it to those who governed for the infant king: "Whose
 * state so many had the managing, / That they lost France". Five places said
 * as fact that the Hostess dies. In this edition Pistol's news is "my Doll is
 * dead" (5.1), and only editions that read Nell make it the Hostess, as the
 * study guide and the page at /revision/texts/henry-v already say. The
 * wooing card still said Henry presents himself as "not a king", which fitted
 * the invented line but not the real speech, where the plain soldier goes on
 * "take a soldier, take a king". "Ascribe we all" was called a royal plural;
 * it is the whole army. And four claims the text does not bear: Exeter's
 * report of York's death called prose (it is verse), the French King said to
 * recall Poitiers (he names only Crécy), Henry's threats at Harfleur put after
 * its surrender (they come first, 3.3), and Pistol said to plead with the
 * King for Bardolph (he begs Fluellen, who refuses).
 *
 * A review after that pass found five more. The plot summary had Henry order
 * Bardolph's execution and two cards said he executes him; Pistol reports
 * that Exeter "hath given the doom of death" (3.6) and Henry approves it, so
 * they now say he lets it stand, as the Bardolph card already did. The two
 * breach-speech cards, the exam tip and the Fluellen and Mountjoy cards kept
 * another printing's punctuation ("once more;", "Cry 'God for Harry,
 * England, and Saint George!'") under a footer saying every quotation is
 * taken from this edition; they now have its own. The reader's highlight for
 * the "be he ne'er so vile" card began mid-word, at "er so vile": the
 * annotation generator finds a card's quotations between straight single
 * quotes, and took the apostrophe in "ne'er" for the opening one. A quotation
 * in a CharacterCard or ThemeCard description takes a curly apostrophe (’)
 * for that reason, as "kill’d" and "suffer’st" do here. The "We few" card
 * called the two phrases "we few, we happy few" triadic; the third is "we
 * band of brothers". And layout.tsx still described the page as "Folio
 * quotations".
 *
 * Every quotation changed here was cut from the edition by script. One added
 * here should be cut from it too, not typed from memory or taken from another
 * printing, and a line credited to a speaker should be checked against the
 * speech heading. Check again with node scripts/check-quotations.mjs --text
 * henry-v.
 */

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
        className="flex w-full items-center justify-between px-5 py-4 text-start hover:bg-muted transition-colors"
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
    <div className="rounded-lg border-s-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
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

export default function HenryVPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Shakespeare History
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Henry V &mdash; A-Level Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">William Shakespeare, c. 1599</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Comprehensive A-Level revision notes for Shakespeare&apos;s <em>Henry V</em>, the final
          play of the second tetralogy. Act-by-act plot, character profiles, themes (kingship, war,
          theatre, brotherhood), key quotations with analysis, symbols, historical context, and
          A-Level essay plans for the most-examined questions.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Key Quotations',
            'Symbols',
            'Context',
            'Essay Planning',
            'Practice Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
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
          <Section title="Act-by-Act Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Act 1: The Salic Law and the Tennis Balls
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Chorus opens the play apologising for the inadequacy of the &ldquo;wooden
                  O&rdquo; to depict the &ldquo;vasty fields of France.&rdquo; In Act 1 Scene 1, the
                  Archbishop of Canterbury and the Bishop of Ely discuss a parliamentary bill that
                  would strip the Church of much of its wealth; Canterbury proposes to divert the
                  King by endorsing his claim to France. In Scene 2, Canterbury delivers a long,
                  intricate speech on the Salic Law, justifying Henry&apos;s claim to the French
                  throne. The Dauphin&apos;s ambassador arrives with a mocking gift of tennis balls,
                  suggesting Henry should return to his youthful sports. Henry receives the insult
                  with cold resolve and vows that the gift will be turned into
                  &ldquo;gun-stones,&rdquo; preparing for invasion.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The Chorus&apos;s prologue &mdash; metatheatrical apology for the stage
                    </li>
                    <li>&bull; Canterbury&apos;s self-interested justification of war</li>
                    <li>&bull; The Salic Law speech &mdash; legal pretext for invasion</li>
                    <li>
                      &bull; The tennis balls &mdash; the Dauphin&apos;s insult and Henry&apos;s vow
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Act 2: Treason, Falstaff&apos;s Death, and the Voyage
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Chorus describes the country preparing for war and warns of three traitors
                  bribed by France: Cambridge, Scroop, and Grey. In the Boar&apos;s Head tavern,
                  Pistol, Nym and Bardolph quarrel and prepare to follow the army. The Hostess
                  reports that Sir John Falstaff is dying, broken-hearted by the King&apos;s
                  rejection of him. At Southampton, Henry exposes the traitors with theatrical
                  irony, having them condemn themselves before revealing his knowledge of their
                  plot. The Hostess then describes Falstaff&apos;s death in one of the play&apos;s
                  most tender prose passages. Meanwhile, in France, the French King and Dauphin
                  debate Henry&apos;s seriousness; Exeter arrives with terms.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The Eastcheap tavern crew &mdash; Pistol, Nym, Bardolph, the Hostess
                    </li>
                    <li>
                      &bull; The traitors&apos; trap at Southampton &mdash; Henry&apos;s ruthless
                      statecraft
                    </li>
                    <li>&bull; The Hostess&apos;s account of Falstaff&apos;s death (offstage)</li>
                    <li>&bull; Exeter&apos;s embassy and French preparations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Act 3: Harfleur, Fluellen, and Princess Katherine
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Chorus describes the English fleet sailing to France. At Harfleur, Henry
                  delivers his famous siege oration, urging his men &ldquo;Once more unto the
                  breach.&rdquo; Pistol, Bardolph and Nym hang back and are driven forward by the
                  Welsh Captain Fluellen. At the gates of Harfleur, Henry threatens appalling
                  violence against the citizens if they resist further, and the city yields.
                  Princess Katherine takes a comic English lesson from her gentlewoman Alice. The
                  French nobility, increasingly nervous, debate the threat. Henry&apos;s army falls
                  ill with disease and short of supplies. Bardolph is condemned to hang for stealing
                  a pax from a French church, and Henry lets the sentence on his old tavern
                  companion stand. The French herald Mountjoy demands ransom; Henry refuses,
                  conceding his army is weakened but resolute.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The siege of Harfleur &mdash; &ldquo;Once more unto the breach&rdquo;
                    </li>
                    <li>
                      &bull; Henry&apos;s threats to the Harfleur citizens &mdash; brutal rhetoric
                    </li>
                    <li>&bull; Katherine&apos;s English lesson &mdash; comic relief in French</li>
                    <li>
                      &bull; The execution of Bardolph &mdash; royal justice over personal loyalty
                    </li>
                    <li>
                      &bull; Mountjoy&apos;s embassy &mdash; Henry&apos;s defiance despite weakness
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Act 4: The Night Before Agincourt and the Battle
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Chorus paints the night before battle, with the &ldquo;hum of either army
                  stilly sounds.&rdquo; Henry borrows a cloak and walks among his men in disguise.
                  He encounters Pistol, Fluellen, and the common soldiers Bates, Court and Williams.
                  Williams challenges the King&apos;s right to demand his subjects&apos; lives,
                  exchanging gloves with the disguised Henry as a token for later combat. Alone,
                  Henry delivers the &ldquo;Upon the King&rdquo; soliloquy, lamenting the burden of
                  ceremony and royal responsibility. Before battle he gives the &ldquo;St
                  Crispin&apos;s Day&rdquo; speech, transforming his disadvantage into glory. The
                  battle of Agincourt is a stunning English victory; Henry orders the killing of the
                  prisoners after the French rally. The boy and the luggage train are massacred.
                  Fluellen praises the King&apos;s Welsh heritage. The glove plot is resolved with
                  Williams confronting Fluellen rather than the King; Henry rewards Williams with a
                  glove full of crowns. Casualty lists are read: the French dead enormous, the
                  English losses tiny.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The night before Agincourt &mdash; &ldquo;a little touch of Harry in
                      the night&rdquo;
                    </li>
                    <li>&bull; The disguised King and Williams &mdash; common-soldier dialogue</li>
                    <li>
                      &bull; &ldquo;Upon the King&rdquo; soliloquy &mdash; the loneliness of office
                    </li>
                    <li>
                      &bull; The St Crispin&apos;s Day speech &mdash; &ldquo;we few, we happy
                      few&rdquo;
                    </li>
                    <li>&bull; The battle and the controversial killing of the prisoners</li>
                    <li>&bull; The glove plot resolved; the casualty lists read</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Act 5: Wooing Katherine and the Treaty of Troyes
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Chorus describes Henry&apos;s triumphant return to London and his second
                  voyage to France for treaty. Fluellen confronts Pistol and forces him to eat the
                  Welsh leek as punishment for mocking it. Pistol, with news that &ldquo;my Doll is
                  dead&rdquo;, resolves to return to England as a thief and beggar. At the French
                  court, Henry negotiates the Treaty of Troyes: he will marry Princess Katherine and
                  inherit the French throne. He woos her in plain blunt soldier&apos;s English mixed
                  with broken French, in a scene that veers between charm and political coercion.
                  The peace is sealed. The Chorus ends with an Epilogue acknowledging that
                  Henry&apos;s triumph was short-lived: his son became king as a baby, and those who
                  governed for him &ldquo;lost France and made his England bleed&rdquo;, gesturing
                  to the <em>Henry VI</em> plays the audience already knew.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Fluellen and the leek &mdash; comic punishment of Pistol</li>
                    <li>
                      &bull; The wooing of Katherine &mdash; political marriage, soldier&apos;s
                      plainness
                    </li>
                    <li>&bull; The Treaty of Troyes &mdash; English inheritance of France</li>
                    <li>&bull; The Epilogue &mdash; ironic awareness of the future loss</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Character Profiles" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Henry V (King Henry, Harry)"
                description="The play's central figure: a young king transformed from his prodigal youth (the Hal of the Henry IV plays) into a sovereign warrior. Shakespeare presents him as a virtuoso performer of kingship - devout, eloquent, ruthless, charismatic. He invokes God's favour at every step, exposes the traitors with theatrical timing, threatens the citizens of Harfleur with appalling violence, lets his old companion Bardolph hang, walks among the common soldiers in disguise, orders the killing of the French prisoners, and woos Katherine in plain soldier's English. Critics divide on whether he is the ideal Christian prince of mirror-for-magistrates tradition or a Machiavellian whose piety is performance. Either reading is invited by the text."
              />
              <CharacterCard
                name="The Chorus"
                description="A unique theatrical presence: a single speaker who opens each act with a verse prologue and closes the play with an Epilogue. The Chorus repeatedly apologises for the inadequacy of the playhouse - the 'wooden O', the 'unworthy scaffold' - and asks the audience to supply with their imaginations what the stage cannot show: 'Into a thousand parts divide one man', 'Think, when we talk of horses, that you see them'. This metatheatrical frame foregrounds the artifice of the history play and invites audiences to question how heroic narratives are made. The Chorus celebrates Henry but also describes events the staged action complicates: it promises 'a little touch of Harry in the night' before the king's disturbed soliloquy."
              />
              <CharacterCard
                name="Falstaff (offstage)"
                description="The play's most famous absent character. Sir John Falstaff, Henry's beloved companion in the Henry IV plays, has been rejected by the new king at the end of 2 Henry IV ('I know thee not, old man'). In Act 2 Scene 1 the Hostess says 'The King has kill’d his heart' and Pistol 'His heart is fracted and corroborate'; in Scene 3 she describes his death in heart-breaking prose. Shakespeare promised in 2 Henry IV that Falstaff would appear in the French wars but here keeps him offstage, dying of a broken heart. His absence colours Henry's kingship: the price of becoming king was the rejection of Falstaff, and his comic chaos is felt as a loss throughout."
              />
              <CharacterCard
                name="Bardolph"
                description="One of Henry's old Eastcheap companions. A red-faced, drunken soldier - Fluellen says his nose 'is like a coal of fire, sometimes plue and sometimes red'. In Act 3 Bardolph is condemned to hang for stealing a pax (a small religious icon) from a French church during the march to Calais. Henry endorses the execution: 'we would have all such offenders so cut off.' His death dramatises the cost of kingship: the personal loyalty of the Boar's Head Tavern is sacrificed to the impersonal justice of the army. Pistol begs Fluellen to speak to the Duke for his life, and Fluellen refuses, because 'discipline ought to be used'."
              />
              <CharacterCard
                name="Pistol"
                description="A swaggering, cowardly braggart from Eastcheap who serves in Henry's army. He speaks in absurd theatrical bombast, parodying older heroic plays. Pistol provides comic relief but also represents the unromantic underside of war: he ransoms a French soldier for crowns, hangs back from danger, and is humiliated by Fluellen who forces him to eat the Welsh leek. By the play's end he has news that 'my Doll is dead', his companions are hanged, and he resolves to slink back to England as a 'cutpurse'. He is the camp-follower's perspective on a war the king celebrates."
              />
              <CharacterCard
                name="Nym"
                description="Another Eastcheap soldier, marked by his repeated catchphrase 'that’s the humour of it.' He quarrels with Pistol over Mistress Quickly. Nym is hanged in France along with Bardolph for theft, his fate reported by the boy. He represents the small-time criminality that follows armies; his curt, repetitive idiom suggests a small mind exposed to events too large for it."
              />
              <CharacterCard
                name="Fluellen"
                description="The Welsh captain in Henry's army - pedantic, brave, irrepressibly proud of his nation, obsessed with the 'disciplines of the wars' and classical military precedent. Fluellen compares Henry to Alexander the Great via a tortuously specific analogy ('there is a river in Macedon; and there is also moreover a river at Monmouth'). His Welsh accent is heavily marked in the text. He forces Pistol to eat the leek in Act 5 as punishment for mocking Welsh ceremony. Through Fluellen Shakespeare celebrates British (rather than English) unity at a moment when Wales, Scotland and Ireland were all politically charged."
              />
              <CharacterCard
                name="The Dauphin (Lewis)"
                description="The son of the French King and Henry's chief antagonist on the French side. Brash, contemptuous, and overconfident, the Dauphin sends the gift of tennis balls in Act 1, mocking Henry's youth. Throughout the play he boasts of his horse, dismisses the English threat, and is never directly defeated by Henry on stage. His Folio appearance at Agincourt (in some texts replaced by Bourbon) makes him an emblem of French aristocratic complacency punished by English discipline."
              />
              <CharacterCard
                name="The French King (Charles VI)"
                description="A weary, dignified figure - historically known to suffer from periods of madness, though Shakespeare softens this. He recognises the danger Henry poses, recalling the disaster of Crécy. By Act 5 he has effectively surrendered, signing the Treaty of Troyes that disinherits his son and gives Henry both his daughter and his throne. His resignation contrasts with the Dauphin's bluster."
              />
              <CharacterCard
                name="Princess Katherine of France"
                description="Daughter of the French King and prize of the war. We meet her first in Act 3 Scene 4 in her endearing English lesson - a comic interlude almost entirely in French in which she learns the names of body parts. In Act 5 Henry woos her in blunt soldier's English mixed with broken French. The scene is generically a romantic comedy ending grafted onto a history play, but the political reality - she is the price of peace, accepting a husband she has barely met - qualifies any sentiment."
              />
              <CharacterCard
                name="Mountjoy"
                description="The French herald who acts as a diplomatic intermediary between Henry and the French court. He delivers the demands of the French King, demands Henry's ransom before Agincourt, and finally returns to admit defeat. Mountjoy's exchanges with Henry mark the play's diplomatic stages and let Henry deliver some of his most controlled speeches of defiance: 'I pray thee, bear my former answer back.'"
              />
              <CharacterCard
                name="Williams"
                description="An ordinary English soldier whom the disguised Henry meets the night before Agincourt. He challenges the king's right to demand his subjects' lives and his moral responsibility for their deaths, delivering some of the play's most powerful critique of war: 'if the cause be not good, the King himself hath a heavy reckoning to make.' Williams and Henry exchange gloves as a token for later combat. After Agincourt, Henry sets up a mock confrontation with Fluellen wearing the glove. When the trick is revealed, Henry rewards Williams with a glove full of crowns. He is the play's voice of common-soldier scrutiny."
              />
              <CharacterCard
                name="Exeter, Bedford, Gloucester, York"
                description="Henry's noble kinsmen who lead his forces. Exeter is the senior diplomat, delivering Henry's terms to the French court. The Duke of York leads the vaward at Agincourt and dies bravely; his death is reported in tearful verse by Exeter. These nobles populate the loyal English aristocratic world and help frame Henry's command."
              />
              <CharacterCard
                name="Cambridge, Scroop, Grey"
                description="The three traitors of Act 2 Scene 2, bribed by France to assassinate Henry. Henry exposes them with calculated theatricality, persuading them first to deny mercy to a drunken offender before revealing their own treason. They are condemned and executed. Their fall reveals Henry's ruthlessness and the dangerous instability beneath his outwardly secure kingdom."
              />
              <CharacterCard
                name="Mistress Quickly (the Hostess)"
                description="Hostess of the Boar's Head Tavern, now married to Pistol. Her Act 2 description of Falstaff's death, that he 'parted even just between twelve and one', is one of the most moving prose passages in Shakespeare. In Act 5 Scene 1 Pistol has news that 'my Doll is dead' of the 'malady of France'. The edition this site prints reads Doll; some editions read Nell, which would make the dead woman the Hostess herself. Either way, it is a final sign of the war's cost on the common world."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Kingship and Power"
                description="The play interrogates what it means to be a king. Henry is repeatedly tested: by traitors, by the burden of war, by his common subjects, by his own conscience. The 'Upon the King' soliloquy lays out the loneliness of office - every subject's misfortune is laid at his door, while ceremony, the 'idol', is no more than 'place, degree, and form, / Creating awe and fear in other men'. Shakespeare leaves open whether Henry is the ideal Christian prince or a calculating performer. His public face - devout, generous, eloquent - is contrasted with his private capacity for ruthless statecraft (the traitors, Bardolph, the prisoners, the Harfleur threats)."
              />
              <ThemeCard
                title="War and Patriotism"
                description="Henry V is the most celebrated patriotic play in English. The St Crispin's Day speech transforms a tactical disadvantage into the eternal glory of the 'band of brothers'. Yet the play also presents war's brutality: the Harfleur threats, the killing of the prisoners, the slaughtered boys at the luggage train, Bardolph and Nym hanged, Pistol's Doll dead of disease. Shakespeare counterpoints heroic rhetoric with material loss. Williams asks whether the cause is good. Pistol is reduced to a beggar. Modern critics read the play as ironic counter-propaganda; older readings as straightforward jingoism. The play licenses both."
              />
              <ThemeCard
                title="Theatre and Performance - the Chorus's Apologies"
                description="Uniquely among Shakespeare's plays, Henry V foregrounds its own theatricality. The Chorus apologises in every act for the inadequacy of the 'wooden O' to depict 'the vasty fields of France' and asks audiences to 'piece out our imperfections with your thoughts.' The play stages its own limitations. This is thematic as well as practical: kingship itself is a performance, the war itself is choreographed for spectacle, and the Chorus's heroic narration is sometimes contradicted by what the action shows. The metatheatrical frame invites the audience to question how heroic histories are made."
              />
              <ThemeCard
                title="Class and Brotherhood"
                description="The 'band of brothers' speech promises that fighting alongside the king ennobles the lowliest soldier: 'be he ne’er so vile, / This day shall gentle his condition.' The play tests this. Henry walks among the common soldiers in disguise, listens to Williams, lets Bardolph hang. Pistol, Nym and Bardolph see the war from the bottom; the boy and the luggage are massacred. The promise of brotherhood is genuine in the rhetoric but uncertain in practice - the social hierarchy of England is reinforced even while it is rhetorically suspended."
              />
              <ThemeCard
                title="Religion and Justification"
                description="Henry constantly invokes God. His war is justified through Canterbury's tortuous Salic Law speech (a justification motivated by the bishops' financial self-interest). The traitors are 'three corrupted men' undone by divine providence. Bardolph dies for stealing church property. Before Agincourt Henry asks the soldiers to confess and prepare for death. After the victory he attributes the win to God: 'O God, thy arm was here.' The reader can hear sincere piety, calculated propaganda, or both. Religion frames the war but does not silence the questions Williams raises."
              />
              <ThemeCard
                title="Honour and Valour"
                description="The St Crispin's Day speech offers a vision of honour available only to those who fight: those at home will 'think themselves accurs’d they were not here'. Honour is bought with blood. The play tests this rhetoric against the reality: the historical butchery of the killing of the prisoners, the cowardice of Pistol, the small-scale theft of Bardolph. York's death is honourable; the boys' death is not. Shakespeare lets the rhetoric stand but surrounds it with cases that complicate any simple equation of war with honour."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Quotations organised for A-Level analysis, each with its speaker and scene. All are in
              the words of Project Gutenberg&apos;s modern-spelling text (eBook #1521), the edition
              this site prints in full. Quote verbatim and unpack methods.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="O for a Muse of fire, that would ascend / The brightest heaven of invention!"
                speaker="Chorus, Prologue"
                analysis="The opening lines invoke classical poetics: a 'Muse of fire' would lift the play to epic. The conditional 'O for' immediately undercuts itself - the play does not have such a Muse. From its first line the play apologises for its scale. Shakespeare yokes high heroic ambition to humble theatrical reality, framing the audience as participants in supplying what the stage cannot."
              />
              <QuoteCard
                quote="Can this cockpit hold / The vasty fields of France? Or may we cram / Within this wooden O the very casques / That did affright the air at Agincourt?"
                speaker="Chorus, Prologue"
                analysis="The 'wooden O' is the Globe Theatre, opened in 1599 - the same year Henry V was first performed. The diminishing imagery ('cockpit', 'wooden O') against the vast subject matter ('vasty fields') makes a feature of its inadequacy. The two rhetorical questions enlist audiences as imaginative collaborators. The reference to 'casques' (helmets) at Agincourt frames history as a sensory event the theatre can only gesture at."
              />
              <QuoteCard
                quote="Piece out our imperfections with your thoughts."
                speaker="Chorus, Prologue"
                analysis="The Chorus's defining instruction. Theatre is collaborative: the audience must supply with imagination what the stage cannot. The verb 'piece out' suggests patchwork - the play is a torn cloth needing the viewer's mind to make it whole. This metatheatrical address is unique in Shakespeare's history plays and licenses the play's persistent self-awareness of its own artifice."
              />
              <QuoteCard
                quote="When we have match'd our rackets to these balls, / We will, in France, by God's grace, play a set / Shall strike his father's crown into the hazard."
                speaker="Henry V, Act 1 Scene 2"
                analysis="Henry's response to the Dauphin's gift of tennis balls. He turns the Dauphin's metaphor against him: tennis becomes war, the 'rackets' become weapons, the 'set' becomes the conquest of France, and the 'hazard' (a tennis term for a winning chamber) becomes the gambled crown. The conceit is elegant and threatening, showing Henry's verbal command and revealing his rhetoric as inseparable from violence. 'By God's grace' begins the play's pattern of pious justifications."
              />
              <QuoteCard
                quote="His nose was as sharp as a pen, and ’a babbled of green fields."
                speaker="Hostess, Act 2 Scene 3"
                analysis="The Hostess's account of Falstaff's death. The simile 'sharp as a pen' makes his face emaciated; 'babbled of green fields' suggests delirium and pastoral nostalgia (and editorial tradition emends the Folio's 'a Table of green fields' to this Theobald reading). The detail is heart-breaking in plain prose, contrasting the king's grand verse. Falstaff dies offstage, of a broken heart, because Henry rejected him - the cost of the new kingship written into Eastcheap's grief."
              />
              <QuoteCard
                quote="Once more unto the breach, dear friends, once more, / Or close the wall up with our English dead."
                speaker="Henry V, Act 3 Scene 1"
                analysis="The most famous siege exhortation in English. The repetition of 'once more' acts as a drumbeat. The grim alternative - closing the wall with corpses - exposes the speech's underside: the bodies of soldiers as building material. Henry invokes martial brotherhood ('dear friends') and then, later in the speech, summons 'the action of the tiger', 'noblest English' and ancestral blood. Critics note the speech rallies men into a breach where many will die - its rhetoric does what war propaganda does."
              />
              <QuoteCard
                quote="The game's afoot! / Follow your spirit, and upon this charge / Cry, &lsquo;God for Harry! England and Saint George!&rsquo;"
                speaker="Henry V, Act 3 Scene 1"
                analysis="The closing line of the breach speech. The triadic war-cry yokes king ('Harry'), nation ('England'), and patron saint ('Saint George') in a single shout. 'The game's afoot' echoes the tennis-ball conceit of Act 1 - war as the King's continued game. The cry became proverbial. As patriotic icon it is as forceful as anything in Shakespeare; its power is undeniable even if (as some critics argue) the play surrounds it with material that complicates simple celebration."
              />
              <QuoteCard
                quote="If the cause be not good, the King himself hath a heavy reckoning to make."
                speaker="Williams, Act 4 Scene 1"
                analysis="The common soldier Williams, speaking to the disguised King the night before Agincourt, voices the play's most penetrating moral challenge to royal warmaking. 'A heavy reckoning' is Last-Judgment language. Henry will be answerable not just for the deaths but for the souls. Williams refuses to accept the King's evasions. The whole episode lets a low-status character outface the king - a striking democratic moment."
              />
              <QuoteCard
                quote="Upon the King! let us our lives, our souls, / Our debts, our careful wives, / Our children, and our sins lay on the King!"
                speaker="Henry V, Act 4 Scene 1"
                analysis="Henry's soliloquy after Williams leaves. The accumulating list ('lives', 'souls', 'debts', 'wives', 'children', 'sins') shows the king bearing the burden of his subjects' total existence. The repeated 'our' and 'the King' rhetorically pile responsibility on a single body. Earlier triumphalism gives way to a vision of kingship as crushing isolation. The soliloquy is the play's most introspective moment and one of Shakespeare's great meditations on power."
              />
              <QuoteCard
                quote="What is thy soul of adoration?"
                speaker="Henry V, Act 4 Scene 1"
                analysis="In the same soliloquy Henry interrogates 'ceremony' - the panoply of office that surrounds a king. He asks what ceremony is, and answers: not ease, not health, not a peaceful sleep. It is an 'idol', a god 'that suffer’st more / Of mortal griefs than do thy worshippers', and what kings forgo for it is the 'infinite heart’s ease' that 'private men enjoy'. The speech anticipates the Romantic line that the crown is heavier than it looks; it humanises Henry at the play's pivotal moment, just before the battle."
              />
              <QuoteCard
                quote="We few, we happy few, we band of brothers. / For he today that sheds his blood with me / Shall be my brother."
                speaker="Henry V, Act 4 Scene 3"
                analysis="The St Crispin's Day speech, perhaps Shakespeare's single most famous oration. The repeated 'we few, we happy few' defines the soldier's identity by collective scarcity. 'Band of brothers' projects Henry's army as a family above class - even 'be he ne'er so vile' will be ennobled by sharing the king's blood-letting. The speech is rhetorical magic; it also exemplifies the play's exchange - heroic identity is bought by the willingness to bleed."
              />
              <QuoteCard
                quote="And gentlemen in England now abed / Shall think themselves accurs’d they were not here."
                speaker="Henry V, Act 4 Scene 3"
                analysis="The continuation of the St Crispin's Day speech. By inverting the natural order - those at home are 'accurs'd', those at risk are blessed - Henry persuades his men that absence from the battle is the loss, not presence. It is a brilliant rhetorical flip that converts disadvantage into status. The line has been quoted approvingly in every English-speaking war for four hundred years."
              />
              <QuoteCard
                quote="O God, thy arm was here; / And not to us, but to thy arm alone, / Ascribe we all."
                speaker="Henry V, Act 4 Scene 8"
                analysis="Henry's response to the casualty list at Agincourt: thousands of French dead, only a handful of English. He attributes victory to God. The pious deflection has been read as sincere thanksgiving (the providential reading of Tudor history) and as politically savvy disclaimer (avoiding the appearance of personal pride). 'Ascribe we all' is an inclusive plural, not a royal one: the whole army is to give God the credit. 'Thy arm' literalises divine intervention. The line frames the battle as God's, not Henry's, victory."
              />
              <QuoteCard
                quote="I speak to thee plain soldier. If thou canst love me for this, take me."
                speaker="Henry V, Act 5 Scene 2"
                analysis="In the wooing scene Henry presents himself to Katherine in the plainest of identities, a soldier rather than a courtier, and later in the same speech folds the king into it: 'take a soldier, take a king'. The self-fashioning is strategic: it disarms her, masks the political coercion, and lets him court her in blunt language. As character study it shows Henry's instinct for the persona that will work; as politics it strips off ceremony at the precise moment when he is securing the marriage that completes his conquest."
              />
              <QuoteCard
                quote="Small time, but in that small most greatly lived / This star of England."
                speaker="Chorus, Epilogue"
                analysis="The Epilogue's elegiac celebration of Henry. 'Small time' acknowledges his short reign (he died young). 'This star of England' is iconic. But the Epilogue immediately undermines the celebration: Henry's son became king as a baby, and those who governed for him 'lost France and made his England bleed'. The audience knew the Henry VI plays. The play closes by reminding viewers that Agincourt's glory was momentary. The triumph is bracketed by mortality."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Six Key Symbols" icon="🔣">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">1. The Tennis Balls</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Dauphin&apos;s gift to Henry in Act 1 Scene 2 is a calculated insult: a casket
                  of tennis balls, hinting that Henry should return to his prodigal youth. Henry
                  transforms the metaphor in his reply, vowing that the balls will become
                  &ldquo;gun-stones&rdquo; that strike the Dauphin&apos;s father&apos;s crown
                  &ldquo;into the hazard.&rdquo; The tennis balls become a symbol of how Henry
                  appropriates and weaponises rhetoric: the very gift designed to mock him becomes
                  the rhetorical key to justifying invasion. They also foreground the play&apos;s
                  question of whether war is, for kings, a kind of game.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">2. The Leek</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Act 5 Scene 1 Fluellen forces Pistol to eat the Welsh leek that Pistol mocked.
                  The leek &mdash; a Welsh national emblem worn for St David&apos;s Day &mdash;
                  becomes a comic symbol of national pride and the cost of mocking it. Henry
                  himself, in disguise the night before Agincourt, tells Pistol &ldquo;I am a
                  Welshman&rdquo; (he was born at Monmouth), and after the battle tells Fluellen
                  that he wears the leek &ldquo;for a memorable honour; / For I am Welsh, you
                  know&rdquo;. The scene celebrates British rather than narrowly English identity at
                  a moment when the multinational composition of Henry&apos;s army (Welsh Fluellen,
                  Scots Jamy, Irish Macmorris) was politically charged for an Elizabethan audience
                  watching Essex&apos;s campaign in Ireland.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">3. The Gloves</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Act 4 the disguised Henry exchanges gloves with the soldier Williams as a
                  pledge for later combat. After the battle, Henry sets up Fluellen to wear the
                  glove and meet Williams&apos; challenge. When the trick is revealed, Henry rewards
                  Williams with a glove full of crowns. The gloves symbolise the play&apos;s layered
                  concealment of identity: the king masquerading as commoner, the test of his
                  subjects, the eventual restoration of hierarchy. Some critics read the trick as
                  charming; others as condescending and politically self-protective.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">4. The Chorus&apos;s Prologues</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Chorus&apos;s five act-prologues and Epilogue are a structural symbol of the
                  play&apos;s self-awareness. Each prologue draws attention to the gap between the
                  vast historical subject and the limited stage. The prologues celebrate Henry but
                  often promise material that the staged action then complicates (the &ldquo;little
                  touch of Harry in the night&rdquo; before the &ldquo;Upon the King&rdquo;
                  soliloquy). The Chorus is the play&apos;s most visible symbol of how heroic
                  history is constructed by narration, not just enacted by deeds.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">5. The Crown and Ceremony</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Henry&apos;s &ldquo;Upon the King&rdquo; soliloquy interrogates the symbolism of
                  &ldquo;ceremony&rdquo; &mdash; the crown, the throne, the &ldquo;intertissued robe
                  of gold and pearl&rdquo; &mdash; arguing that these emblems do not buy ease,
                  health, or peaceful sleep. The crown becomes in this speech a symbol of crushing
                  responsibility rather than sovereignty. Henry envies the &ldquo;wretched
                  slave&rdquo; who sleeps soundly because no kingdom rests on him. Ceremony itself
                  is addressed as an &ldquo;idol&rdquo;, a god &ldquo;that suffer’st more / Of
                  mortal griefs than do thy worshippers&rdquo;: the king who embodies it suffers
                  more than the subjects who bow to it.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">6. Falstaff&apos;s Absent Body</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Falstaff dies offstage in Act 2, his end reported by the Hostess in unforgettable
                  prose. His absent body is a structural symbol of the cost of Henry&apos;s
                  kingship. Shakespeare had promised in the Epilogue to <em>2 Henry IV</em> that
                  Falstaff would appear in the French wars; instead he keeps him offstage, broken-
                  hearted by Henry&apos;s rejection. The absence is conspicuous: every reference to
                  Falstaff (the Hostess&apos;s prose, Pistol&apos;s rage, Fluellen&apos;s memory)
                  reminds the audience that the price of becoming Henry V was the loss of Hal&apos;s
                  comic, anarchic past.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Theatrical Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">1599 Composition and the Globe Theatre</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>Henry V</em> is generally dated to 1599, the year the Globe Theatre opened on
                  Bankside. The Chorus&apos;s reference to the &ldquo;wooden O&rdquo; is widely
                  taken as a self-reference to the Globe&apos;s circular polygonal architecture,
                  although the play may also have been performed at the older Curtain. The Globe was
                  built using timbers from the dismantled Theatre in Shoreditch &mdash; the timbers
                  were carried across the Thames in 1598 by Burbage and his company. The
                  metatheatrical opening &ldquo;O for a Muse of fire&rdquo; thus inaugurates not
                  only a new play but, plausibly, a new playhouse.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Henriad Cycle</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>Henry V</em> completes Shakespeare&apos;s second tetralogy &mdash; the Henriad
                  &mdash; following <em>Richard II</em>, <em>1 Henry IV</em>, and
                  <em>2 Henry IV</em>. The cycle traces the deposition of Richard II by Bolingbroke
                  (Henry IV), the troubled reign of the usurper, and the redemption of Hal into
                  Henry V. By the time the audience reaches <em>Henry V</em> they have watched the
                  protagonist&apos;s journey from prodigal prince to warrior king, including the
                  moment when Hal repudiates Falstaff (&ldquo;I know thee not, old man&rdquo;). The
                  earlier plays leave a moral and personal weight on Henry V&apos;s shoulders that
                  the Chorus&apos;s celebrations cannot wholly lift.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Holinshed and Hall as Sources</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare&apos;s primary source was Raphael Holinshed&apos;s{' '}
                  <em>Chronicles of England, Scotland and Ireland</em> (second edition 1587),
                  supplemented by Edward Hall&apos;s{' '}
                  <em>The Union of the Two Noble and Illustre Famelies of Lancastre and Yorke</em>{' '}
                  (1548). Holinshed provides the historical material: the Salic Law argument, the
                  tennis balls episode, the embassies, the disposition of Agincourt, and the Treaty
                  of Troyes. Shakespeare also drew on the anonymous play{' '}
                  <em>The Famous Victories of Henry the Fifth</em> (printed 1598) for some
                  structural ideas. Both Holinshed and Hall are providential historians: they read
                  English victories as evidence of God&apos;s favour, and Shakespeare absorbs but
                  complicates this perspective.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Elizabethan Jingoism and Essex&apos;s Irish Campaign
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s composition coincides with Robert Devereux, Earl of Essex&apos;s
                  expedition to Ireland (March&ndash;September 1599) to suppress the Tyrone
                  rebellion. Essex was Elizabeth I&apos;s favourite at the time, and his campaign
                  was politically charged. The Chorus&apos;s Act 5 prologue contains the most
                  topical reference in any Shakespeare play: it imagines the &ldquo;general of our
                  gracious empress&rdquo; returning from Ireland with rebellion broached on his
                  sword. This is almost certainly Essex (some scholars argue alternatively for Lord
                  Mountjoy, Essex&apos;s replacement, but Mountjoy did not arrive until 1600, after
                  the play). The reference dates the prologue tightly to mid-1599.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  The Chorus&apos;s &ldquo;General of our Gracious Empress&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In the Act 5 prologue, the Chorus likens the cheering crowds welcoming Henry home
                  from France to those who would welcome &ldquo;the general of our gracious
                  empress&rdquo; from Ireland with &ldquo;rebellion broached on his sword.&rdquo;
                  This near-explicit topical allusion identifies the play with contemporary English
                  imperial ambition. The intended parallel between Henry V&apos;s French campaign
                  and Essex&apos;s Irish one was bold: Essex returned in disgrace, having failed,
                  and was eventually executed in 1601. The lines preserve a moment when the play was
                  straightforwardly endorsing a contemporary military adventure &mdash; an
                  endorsement history rapidly disowned.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Battle of Agincourt (1415)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The historical Battle of Agincourt was fought on 25 October 1415, St
                  Crispin&apos;s and St Crispian&apos;s Day. Henry&apos;s English army of perhaps
                  6,000 (heavily weighted toward longbowmen) defeated a French force several times
                  its size. The French disaster was historically devastating; the English losses
                  were genuinely small. The killing of the French prisoners during the battle
                  &mdash; ordered by Henry when the French rear rallied &mdash; was historically
                  real, and Shakespeare preserves it. The Treaty of Troyes (1420) followed years
                  later and made Henry heir to the French throne, a position vacated by his early
                  death in 1422.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Folio and Quarto Texts</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>Henry V</em> exists in two early forms: a 1600 Quarto (Q1, reprinted 1602 and
                  1619) and the 1623 First Folio (F1). The Quarto is significantly shorter and lacks
                  the Chorus, the Salic Law speech, and several other passages. Most modern editions
                  follow the Folio as the more complete version, though scholars debate the
                  Quarto&apos;s origins (memorial reconstruction, performance script, abridged tour
                  text). All quotations on this page are taken from Project Gutenberg&apos;s
                  modern-spelling text (eBook #1521), the edition this site prints in full; like
                  most modern editions, it follows the Folio and includes the Chorus.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title="Essay Planning for A-Level Questions" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level essay questions with paragraph plans. Each plan offers a thesis, 3-4
              paragraph topics with quotation anchors, and a conclusion.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;Henry V is a celebration of ideal kingship.&rdquo; To what extent do you
                  agree?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare offers a portrait of kingship that contains both ideal qualities
                      and the ruthless statecraft that makes them effective. The play celebrates
                      Henry but builds in enough material &mdash; the threats at Harfleur, the
                      killing of the prisoners, the betrayal of Falstaff, Williams&apos; challenge
                      &mdash; that the celebration becomes interrogative as well as affirmative.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The ideal king
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Henry as Christian warrior. The St Crispin&apos;s Day speech: &ldquo;We few,
                      we happy few, we band of brothers.&rdquo; The pious framing of victory:
                      &ldquo;O God, thy arm was here.&rdquo; Identify the mirror-for-magistrates
                      tradition and the providential history play.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The ruthless realist
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The traitors trapped at Southampton. The execution of Bardolph. The threats to
                      the Harfleur citizens. The killing of the prisoners. Argue that these scenes
                      show the cost of effective kingship &mdash; the ideal must absorb the ruthless
                      to function.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The lonely man behind the office
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The &ldquo;Upon the King&rdquo; soliloquy. Ceremony as &ldquo;idol.&rdquo;
                      Henry envies the sleeping slave. The play&apos;s most introspective moment
                      grants the king a private grief that complicates the public pageant.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Williams as the play&apos;s moral counterweight
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;If the cause be not good, the King himself hath a heavy reckoning to
                      make.&rdquo; The play allows a common soldier to outface its hero. The glove
                      plot resolves materially but not morally &mdash; Williams is bought off with
                      crowns rather than answered.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare does not write straightforward propaganda. He writes a portrait of
                      kingship that licenses both heroic and sceptical readings, and that complexity
                      is what has kept the play vital from 1599 to the present.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Discuss the role of the Chorus in <em>Henry V</em>.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Chorus is the play&apos;s most distinctive structural device:
                      simultaneously celebratory narrator, metatheatrical apologist, and ironic
                      frame whose celebrations are sometimes contradicted by the staged action.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The metatheatrical apology
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;O for a Muse of fire,&rdquo; &ldquo;Can this cockpit hold / The vasty
                      fields of France?&rdquo; The Chorus repeatedly admits the inadequacy of the
                      &ldquo;wooden O&rdquo;, asks the audience to &ldquo;piece out our
                      imperfections with your thoughts.&rdquo; This makes the play&apos;s artifice
                      an explicit theme.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The patriotic narrator
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Chorus celebrates Henry: &ldquo;the warlike Harry,&rdquo; &ldquo;this star
                      of England.&rdquo; In Act 5 it likens him to Caesar returning to Rome and to
                      &ldquo;the general of our gracious empress&rdquo; from Ireland (Essex). The
                      Chorus is the play&apos;s most uncomplicated voice of patriotic celebration.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Promised tone vs staged reality
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Chorus promises &ldquo;a little touch of Harry in the night&rdquo; before
                      Act 4, but the staged Henry is troubled, melancholy, in disguise. The Chorus
                      celebrates triumphal return but the Epilogue immediately undercuts it: under
                      Henry&apos;s infant son, those who governed &ldquo;lost France and made his
                      England bleed.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Audience as collaborator
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      By openly admitting limits, the Chorus enlists the audience. Imagination is
                      the missing fourth wall. This collaborative aesthetic anticipates
                      Brecht&apos;s alienation effect: the audience is asked to think, not just
                      feel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Shakespeare present the relationship between language and power in{' '}
                  <em>Henry V</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Henry rules through language: he transforms insults into casus belli, marshals
                      armies through oratory, traps traitors with theatrical timing, and woos a
                      princess in calculated plain speech. The play presents kingship as inseparable
                      from rhetorical performance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Rhetoric as weapon
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The tennis balls reply: &ldquo;We will, in France, by God&apos;s grace, play a
                      set / Shall strike his father&apos;s crown into the hazard.&rdquo; Henry
                      hijacks the Dauphin&apos;s metaphor and turns it into a justification for
                      invasion. Language is itself a weapon.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Battle oratory
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Once more unto the breach, dear friends, once more.&rdquo; &ldquo;We
                      few, we happy few, we band of brothers.&rdquo; The St Crispin&apos;s Day
                      speech persuades disadvantaged men into eternal glory. Rhetoric here is the
                      engine of historical action.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Strategic plainness in the wooing
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In the wooing scene Henry deliberately strips off ceremony: &ldquo;I speak to
                      thee plain soldier.&rdquo; The plainness is itself a performance &mdash; a
                      king choosing the most disarming idiom for a political marriage.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Other voices, other languages
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fluellen&apos;s Welsh-inflected pedantry, Pistol&apos;s parodic bombast,
                      Williams&apos; common-soldier directness, Katherine&apos;s broken English. The
                      play is a polyphony of registers; Henry&apos;s power is partly his ability to
                      move between them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. Examine how Shakespeare presents the experience of war from the perspective of
                  the common soldier.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Alongside Henry&apos;s heroic vision the play insists on the unromantic
                      experience of war from below: theft, disease, fear, ransom, hanging, and moral
                      doubt. The common-soldier perspective complicates &mdash; without quite
                      contradicting &mdash; the king&apos;s rhetoric.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The Eastcheap crew
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pistol, Nym, Bardolph hang back at the breach until Fluellen drives them
                      forward. Pistol ransoms a French soldier for crowns. Bardolph is hanged for
                      stealing a pax. Nym is hanged. Pistol hears that his Doll has died of disease
                      at home. This is war as theft, swindle, and casualty.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Williams the moral challenger
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;If the cause be not good, the King himself hath a heavy reckoning to
                      make.&rdquo; Williams argues that the king&apos;s duty extends to the souls of
                      his soldiers. The disguised Henry cannot easily counter him; the play
                      preserves the challenge even after it resolves the glove plot.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Fluellen and military tradition
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fluellen&apos;s pedantic obsession with the &ldquo;disciplines of the
                      wars&rdquo; and his comparison of Henry to Alexander give common-soldier
                      dignity to military duty. He celebrates Henry&apos;s Welshness: the army is
                      multinational, and Fluellen is its conscience.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The killing of the prisoners and the boys
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Henry orders the killing of the prisoners after the French rally. The luggage
                      train and its boys are massacred. The play stages atrocities on both sides.
                      The St Crispin&apos;s Day speech&apos;s vision of brotherly war is qualified
                      by the actual conduct of battle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. &ldquo;The wooing of Katherine is the most politically revealing scene in{' '}
                  <em>Henry V</em>.&rdquo; Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The wooing scene grafts a romantic-comedy ending onto a history play. The
                      grafting is uneasy: the political coercion of the Treaty of Troyes is barely
                      concealed by Henry&apos;s soldier-plain rhetoric, and the scene&apos;s charm
                      is inseparable from its politics.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Katherine as political prize
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Her marriage is a clause of the Treaty of Troyes &mdash; she is not chosen but
                      inherited. Her earlier English lesson with Alice prepared her for the new
                      sovereignty; she has been studying her conqueror&apos;s language while he
                      marched.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Henry&apos;s strategic plainness
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I speak to thee plain soldier.&rdquo; Henry adopts the persona of the
                      blunt soldier &mdash; the persona furthest from courtly sophistication. The
                      choice of register is calculated: it disarms her and masks the political
                      reality.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Code-switching and conquest
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The scene moves between English and broken French. Henry&apos;s linguistic
                      incompetence in French is itself a kind of dominance: she must come to him in
                      his language. The bilingual humour conceals an asymmetry of power.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Romantic-comedy ending or political imposition?
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The play closes with a wedding and a treaty. Generic convention reads this as
                      comedic resolution. But the Epilogue&apos;s reminder that under their son,
                      king as a baby, those who governed for him &ldquo;made his England
                      bleed&rdquo; reframes the wedding as the seed of future disaster. Even the
                      play&apos;s closing romance is qualified by its sense of consequence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section title="A-Level Practice Questions" icon="📝">
            <p className="text-sm text-muted-foreground mb-4">
              A-Level style questions covering the most commonly examined areas. Use AO1 (informed
              personal response), AO2 (analysis of language, form, structure), AO3 (context), AO4
              (connections), and AO5 (alternative interpretations).
            </p>
            <div className="space-y-3">
              {[
                {
                  q: '“Henry V is a celebration of ideal kingship.” To what extent do you agree with this view?',
                },
                { q: 'Discuss the dramatic function of the Chorus in Henry V.' },
                {
                  q: 'How does Shakespeare present the relationship between language and power in Henry V?',
                },
                {
                  q: 'Examine how Shakespeare presents the experience of war from the perspective of the common soldier.',
                },
                {
                  q: '“The wooing of Katherine is the most politically revealing scene in Henry V.” Discuss.',
                },
                {
                  q: 'How does Shakespeare use the figures of Bardolph, Pistol and Nym to comment on the war?',
                },
                {
                  q: 'Discuss the role of national identity (English, Welsh, Scottish, Irish) in Henry V.',
                },
                {
                  q: 'How far do you agree that Henry’s piety is a political performance rather than a sincere belief?',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-semibold text-foreground">Question {i + 1}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.q}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">Exam Tips for Henry V</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Hold both readings open.</strong> The play licenses both heroic and ironic
              interpretations of Henry. Top answers acknowledge this duality rather than collapsing
              it into one position.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the Chorus.</strong> Shakespeare&apos;s most distinctive structural
              choice. The metatheatrical frame is rich for AO2 (form/structure) and AO5 (alternative
              readings).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Anchor context tightly.</strong> 1599, the Globe&apos;s opening, Essex&apos;s
              Irish campaign, the Henriad. Use specific dates rather than vague &ldquo;Elizabethan
              times.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use precise terminology.</strong> &ldquo;Tetralogy,&rdquo; &ldquo;providential
              history,&rdquo; &ldquo;Salic Law,&rdquo; &ldquo;metatheatrical,&rdquo; &ldquo;chorus
              prologue,&rdquo; &ldquo;Quarto/Folio.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Quote verbatim.</strong> Examiners reward accurate quotation. &ldquo;Once more
              unto the breach,&rdquo; &ldquo;we few, we happy few,&rdquo; &ldquo;Cry, &lsquo;God for
              Harry! England and Saint George!&rsquo;&rdquo; &mdash; learn the exact words.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Connect to other plays.</strong> The Henriad cycle (<em>Richard II</em>,{' '}
              <em>1H4</em>, <em>2H4</em>, <em>H5</em>) is worth invoking for AO4. Falstaff&apos;s
              offstage death only resonates if you remember the earlier plays.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Henry V</em> by William Shakespeare was first performed c. 1599 and first printed in
          quarto in 1600. The First Folio text appeared in 1623. The play is in the{' '}
          <strong>public domain</strong>, and all quotations on this page are taken from Project
          Gutenberg&apos;s modern-spelling text (eBook #1521), the edition this site prints in full.
        </p>
      </footer>
    </>
  )
}
