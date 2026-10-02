'use client'

import { useState } from 'react'
import { AITextArea } from '@/components/AITextArea'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
/* ─── Expandable Section Component ──────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = 'bg-primary',
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  badge?: string
  colour?: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-start transition-colors hover:bg-muted"
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
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
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
  )
}

function Quote({
  text,
  speaker,
  act,
  analysis,
}: {
  text: string
  speaker: string
  act: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-s-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {speaker} &mdash; {act}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

/**
 * QUOTATIONS CORRECTED 2 October 2026. No test checked this page's quotations
 * against the novel, and scripts/check-quotations.mjs found 13 of them wrong,
 * with a fourteenth it passes over because it begins "I think", which the
 * checker takes for a sentence frame. Six were in no chapter of the novel.
 * Dolly's "a bit motherly to it" is "a bit moithered with it" (bothered), so
 * the note on mothering rested on a word Eliot never wrote. The gold that was
 * "with him as his child" is the guineas Silas thinks of "as if they had been
 * unborn children" (Chapter 2). Godfrey's "This is my punishment ... I shan't
 * pass for anything better than I am" is "She thinks me worse than I am ...
 * It's part of my punishment" (Chapter 20), and his "I hadn't the courage to
 * spoil your happiness" is replaced by the excuse he does make to Nancy in
 * Chapter 18. Two had no counterpart in the novel. Dolly's "There's things to
 * be done in this world" is replaced by her "keep the little un" (Chapter
 * 14), which makes the same point. "It drives me mad to hear the talk of the
 * virtuous people", given to Godfrey, has no equivalent at all, so it is
 * replaced by the nearest real judgement of him, the narrator on the "yoke"
 * of his secret (Chapter 3), with a note written for those words. "I think
 * those have the least feeling" is Nancy's retort to Godfrey in Chapter 11,
 * not the narrator's in Chapter 3, and it ends "that act wrong to begin
 * with": the hardship it went on to speak of is not in it. Godfrey's "It is
 * too late now. That's the truth" set his "it's too late now" before the money
 * debts he speaks of first, and "That's the truth" is not in the novel.
 * "Vittles" is Eliot's "victuals". Five more stood in the wrong chapter, and
 * the note on "there's dealings" called it the first sign of Silas's
 * recovered faith, which was true only of the chapter it was wrongly given;
 * he says it sixteen years on. Each corrected quotation was cut by script from
 * the held edition, Project Gutenberg #550 (src/data/full-texts/silas-marner.ts),
 * not retyped; its dashes are set as " -- " and its apostrophes straight, as
 * elsewhere on this page. The redemption theme also called Eppie a "gift", in
 * quotation marks, a word Eliot never uses of her: it comes three times, each
 * a gift for singing, in the Rainbow's talk in Chapter 6. It now gives the
 * word Silas uses of her coming, "sent". Each Quote card is also a reader
 * highlight note, beginning with its speaker and chapter, so re-run
 * scripts/generate-text-annotations.mjs after editing one:
 * the-highlights-highlight-something.test.ts compares only a note's last sixty
 * characters, and would pass a reader note still giving the old chapter.
 */
export default function SilasMarnerRevisionPage() {
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
          <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-700 uppercase tracking-wider">
            19th Century Novel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Edexcel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            CAIE
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            OCR
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Silas Marner &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE/IGCSE English Literature exam. Part-by-part plot
          summary, character analysis, key themes with evidence, important quotations with analysis,
          historical context, exam technique, and practice questions with AI feedback.
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
            'Key Quotations',
            'Context',
            'Exam Tips',
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

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section
          id="plot"
          title={tr(`Part-by-Part Plot Summary`)}
          badge="2 Parts"
          colour="bg-amber-600"
          defaultOpen
        >
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15 text-xs font-bold text-amber-700">
                  1
                </span>
                Part One &mdash; Betrayal, Isolation, and the Coming of Eppie
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Silas Marner is a weaver who once lived in a close religious community called
                Lantern Yard in a northern industrial city. His best friend, William Dane, falsely
                accuses him of stealing money from a dying deacon. The community draws lots to
                determine his guilt (a common Calvinist practice), and the lots go against Silas. He
                is expelled from the community, loses his fianc&eacute;e Sarah (who marries Dane),
                and loses his faith in God and humanity. He moves to the rural village of Raveloe,
                where he lives as a recluse for fifteen years, his only pleasure being the gold
                coins he earns from weaving, which he counts and caresses obsessively each night.
                Meanwhile, Squire Cass&apos;s two sons live very different lives: Godfrey, the
                eldest, has secretly married Molly Farren, a lower-class opium addict, and has a
                child by her. His younger brother Dunstan (Dunsey) blackmails Godfrey, threatening
                to reveal the secret marriage. One foggy night, Dunsey stumbles upon Silas&apos;s
                cottage while Silas is out and steals his entire hoard of gold, then disappears (he
                falls into the Stone-pits and drowns, though this is not discovered for years).
                Silas is devastated by the loss. The community begins to show him sympathy. On New
                Year&apos;s Eve, Molly Farren, carrying her child Eppie, walks toward Raveloe to
                expose Godfrey at the Cass New Year&apos;s party. She collapses in the snow and dies
                of an opium overdose. The toddler Eppie wanders into Silas&apos;s cottage through
                the open door and falls asleep by his hearth. When Silas finds her, her golden curls
                remind him of his stolen gold. He adopts her, and the community rallies around him.
                Godfrey sees Molly&apos;s body but says nothing, secretly relieved to be free to
                marry Nancy Lammeter.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Silas&apos;s false accusation and expulsion from Lantern Yard</li>
                  <li>&bull; Silas&apos;s obsessive hoarding of gold in Raveloe</li>
                  <li>&bull; Dunsey&apos;s theft of the gold</li>
                  <li>&bull; Molly&apos;s death in the snow and Eppie&apos;s arrival</li>
                  <li>&bull; Silas&apos;s decision to keep and raise Eppie</li>
                  <li>&bull; Godfrey&apos;s silence about being Eppie&apos;s father</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15 text-xs font-bold text-amber-700">
                  2
                </span>
                Part Two &mdash; Sixteen Years Later
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Sixteen years have passed. Silas is now a respected member of the Raveloe community,
                transformed by his love for Eppie, who has grown into a warm, lively young woman.
                She is courted by Aaron Winthrop, the son of the kindly Dolly Winthrop who helped
                Silas raise her. Godfrey has married Nancy Lammeter but they are childless (their
                one child died in infancy), which Godfrey sees as divine punishment for his secret.
                When the Stone-pits are drained, Dunsey&apos;s skeleton is discovered alongside
                Silas&apos;s gold. This shock prompts Godfrey to finally confess to Nancy that Eppie
                is his daughter. Nancy, though hurt, agrees they should claim Eppie. They visit
                Silas and offer Eppie a life of wealth and status. In the novel&apos;s climactic
                scene, Eppie firmly refuses, choosing to stay with Silas: &ldquo;I can&apos;t feel
                as I&apos;ve got any father but one.&rdquo; She marries Aaron Winthrop in a garden
                that Godfrey&apos;s money has paid for (his only remaining connection to her). Silas
                revisits Lantern Yard but finds it demolished and replaced by a factory &mdash; his
                past is irrecoverable, but he has found a new life in Raveloe.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    &bull; The discovery of Dunsey&apos;s skeleton and Silas&apos;s gold in the
                    Stone-pits
                  </li>
                  <li>&bull; Godfrey&apos;s confession to Nancy about Eppie</li>
                  <li>&bull; Godfrey and Nancy&apos;s offer to adopt Eppie</li>
                  <li>&bull; Eppie&apos;s refusal &mdash; she chooses Silas over wealth</li>
                  <li>&bull; Eppie&apos;s marriage to Aaron Winthrop</li>
                  <li>&bull; Silas&apos;s return to find Lantern Yard destroyed</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section
            id="characters"
            title={tr(`Character Profiles`)}
            badge="8 Characters"
            colour="bg-purple-600"
          >
            <div className="space-y-8">
              {/* Silas */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Silas Marner`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Silas is the novel&apos;s protagonist, and his transformation is its central arc.
                  He begins as a trusting, devout young man in Lantern Yard, is broken by betrayal
                  and false accusation, and retreats into miserly isolation in Raveloe. For fifteen
                  years, his gold replaces human connection &mdash; he counts and handles it
                  obsessively, and his weaving becomes purely mechanical. The theft of his gold
                  leaves him devastated but also, crucially, open. When Eppie arrives, she fills the
                  void the gold left. Through raising her, Silas reconnects with humanity, the
                  natural world, and the Raveloe community. Eliot presents his journey as one from
                  spiritual death to resurrection &mdash; from the worship of gold to the experience
                  of genuine love. His cataleptic fits (trances) symbolise his state: he is
                  physically present but spiritually absent until Eppie awakens him.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="In old days there were angels who came and took men by the hand and led them away from the city of destruction. We see no white-winged angels now. But yet men are led away from threatening destruction"
                    speaker="Narrator"
                    act="Part 1, Chapter 14"
                    analysis="Eliot uses biblical language to describe Eppie's redemptive effect on Silas. The shift from angels to ordinary human love reflects Eliot's secular humanism -- salvation comes through human connection, not divine intervention. Eppie is Silas's angel, though she is very much an earthly child."
                  />
                  <Quote
                    text="The gold had kept his thoughts in an ever-repeated circle, leading to nothing beyond itself"
                    speaker="Narrator"
                    act="Part 1, Chapter 14"
                    analysis="The gold represents sterile repetition and isolation. 'Leading to nothing beyond itself' captures the emptiness of materialism. The circular imagery contrasts with the linear growth Silas experiences through Eppie -- love leads outward, gold leads nowhere."
                  />
                </div>
              </div>

              {/* Eppie */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Eppie
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Eppie is the golden-haired child who transforms Silas&apos;s life. Her arrival is
                  almost miraculous &mdash; she wanders in through his open door on New Year&apos;s
                  Eve, replacing the gold that was stolen. As a child, she is playful, curious, and
                  demanding, forcing Silas to engage with the world (he must take her outdoors, seek
                  advice from neighbours, participate in village life). As a young woman, she is
                  warm, sensible, and loyal. Her refusal of Godfrey&apos;s offer is the novel&apos;s
                  moral climax: she chooses love, community, and the working-class life she knows
                  over wealth and status. Eliot uses Eppie to argue that true richness lies in human
                  bonds, not material wealth. Her golden hair explicitly links her to the gold she
                  replaces, but she is living gold &mdash; warm, growing, and reciprocal.
                </p>
                <Quote
                  text="I can't feel as I've got any father but one... I can't think o' no other home. I wasn't brought up to be a lady"
                  speaker="Eppie"
                  act="Part 2, Chapter 19"
                  analysis="Eppie's refusal of Godfrey is firm but not hostile. She defines family through experience ('brought up'), not biology. 'I can't think o' no other home' emphasises that belonging comes from nurture, not nature. Her dialect ('o' no other') reflects her working-class identity, which she embraces."
                />
              </div>

              {/* Godfrey */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Godfrey Cass`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Godfrey is the eldest son of Squire Cass and represents the moral weakness of the
                  gentry. He is essentially good-natured but repeatedly takes the easy path: he
                  keeps his secret marriage hidden, he fails to claim Eppie when Molly dies, and he
                  marries Nancy under false pretences. His cowardice contrasts with Silas&apos;s
                  eventual courage. Godfrey believes he can buy his way to redemption &mdash;
                  offering Eppie money and status sixteen years too late. When Eppie refuses, he is
                  forced to confront the consequences of his choices. Eliot shows that moral debt
                  cannot be settled with money. Godfrey&apos;s childless marriage to Nancy is
                  presented as a natural consequence of his failure to fulfil his duty as a father
                  &mdash; a kind of poetic justice.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I wanted to pass for childless once, Nancy -- I shall pass for childless now against my wish"
                    speaker="Godfrey"
                    act="Part 2, Chapter 20"
                    analysis="The devastating irony of Godfrey's situation: he chose to hide his child, and now he must live without one. 'Pass for childless' echoes his earlier deception -- his life has been defined by performing a false identity. The symmetry feels like moral justice."
                  />
                  <Quote
                    text="there's debts we can't pay like money debts, by paying extra for the years that have slipped by. While I've been putting off and putting off, the trees have been growing -- it's too late now"
                    speaker="Godfrey"
                    act="Part 2, Chapter 20"
                    analysis="Godfrey finally understands that moral obligations cannot be settled retroactively. The comparison to 'money debts' shows his habitual thinking -- as a wealthy man, he expected money to solve everything. This is the novel's clearest statement about the limits of material wealth."
                  />
                </div>
              </div>

              {/* Dunstan */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Dunstan (Dunsey) Cass`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Dunsey is Godfrey&apos;s younger brother &mdash; a vicious, selfish bully who
                  blackmails Godfrey and steals Silas&apos;s gold. He represents the worst of the
                  idle gentry: he gambles, drinks, and exploits others without conscience. His theft
                  of the gold is opportunistic and cruel. He drowns in the Stone-pits on the same
                  night, and his skeleton is not discovered for sixteen years. When it is found
                  alongside the gold, it serves as a physical symbol of the link between greed and
                  death. Dunsey functions as a catalyst: his theft removes Silas&apos;s gold,
                  creating the emotional void that Eppie fills.
                </p>
              </div>

              {/* Nancy */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Nancy Lammeter`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Nancy is Godfrey&apos;s second wife, a woman of strong principles and conventional
                  morality. She is neat, proper, and earnest. She refuses to adopt a child because
                  she believes it goes against Providence &mdash; if God has not given them
                  children, they should accept it. This rigid thinking, while sincere, contributes
                  to Godfrey&apos;s suffering. When Godfrey confesses, Nancy is hurt but responds
                  with dignity. She supports his attempt to claim Eppie, believing it is their duty.
                  Eliot presents Nancy sympathetically but also critiques her inflexibility &mdash;
                  her firm moral principles sometimes lack the warmth and adaptability of characters
                  like Dolly Winthrop.
                </p>
              </div>

              {/* Dolly Winthrop */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Dolly Winthrop`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Dolly is the wheelwright&apos;s wife and Silas&apos;s most important human
                  connection. She is kind, practical, and gently persistent. She visits Silas after
                  the theft, brings him food, and later helps him raise Eppie, offering practical
                  advice and moral support. Dolly represents the best of the Raveloe community:
                  unpretentious, generous, and grounded in simple faith. Her theology is not
                  sophisticated &mdash; she tells Silas that &ldquo;Them above&rdquo; will sort
                  things out &mdash; but it is sincere and comforting. She is the vehicle through
                  which Silas reconnects with community and, eventually, with a kind of faith. Her
                  son Aaron marries Eppie, completing the bond between the families.
                </p>
                <Quote
                  text="You'll happen be a bit moithered with it while it's so little; but I'll come, and welcome, and see to it for you"
                  speaker="Dolly Winthrop"
                  act="Part 1, Chapter 14"
                  analysis="Dolly's offer is characteristically simple and warm. 'Moithered' is a dialect word for bothered or flustered: she warns Silas that so small a child may fluster him, and at once offers her own help, 'and welcome'. Her neighbourliness is what draws Silas back into village life. Eliot suggests that a child is raised by a community's care as well as by one parent's love."
                />
              </div>

              {/* William Dane */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`William Dane`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  William Dane is Silas&apos;s supposed best friend at Lantern Yard who frames him
                  for theft. He manipulates the drawing of lots, steals the money himself, and then
                  marries Silas&apos;s fianc&eacute;e Sarah. He represents religious hypocrisy
                  &mdash; outwardly devout but inwardly corrupt. His betrayal destroys Silas&apos;s
                  faith in both God and human goodness. Dane functions as a narrative catalyst:
                  without his treachery, Silas would never have come to Raveloe. He is never seen
                  again, but his shadow hangs over the novel as a reminder of how institutional
                  religion can be abused.
                </p>
              </div>

              {/* Squire Cass */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Squire Cass`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The Squire is the largest landowner in Raveloe and the father of Godfrey and
                  Dunsey. He is loud, bullying, and neglectful &mdash; a poor father who has raised
                  dissolute sons. He represents the irresponsible rural gentry: he lives off his
                  land but does little to earn respect. His household is disorderly, reflecting a
                  moral chaos that contrasts with the simple but warm homes of the working class.
                  Eliot uses the Squire to critique the landed aristocracy and to show that wealth
                  without moral responsibility produces damaged individuals.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title={tr(`Key Themes`)} badge="7 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Community */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  Community and Belonging
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Silas&apos;s story is fundamentally about exclusion from and re-entry into
                  community. At Lantern Yard, he belongs to a rigid religious community that expels
                  him unjustly. In Raveloe, he lives outside the community for fifteen years.
                  Eppie&apos;s arrival forces him back into village life: he needs help raising her,
                  which means accepting the community&apos;s generosity (especially Dolly
                  Winthrop&apos;s). Eliot presents the Raveloe community warmly but not uncritically
                  &mdash; they are superstitious and initially suspicious of Silas. However, their
                  fundamental decency prevails. The novel argues that human beings need community to
                  flourish: isolation, whether chosen or imposed, is a kind of death.
                </p>
                <Quote
                  text="Unlike the gold which needed nothing, and must be worshipped in close-locked solitude... Eppie was a creature of endless claims and ever-growing desires"
                  speaker="Narrator"
                  act="Part 1, Chapter 14"
                  analysis="The direct contrast between gold and child: gold demands isolation ('close-locked solitude'), while Eppie demands engagement with the world. 'Endless claims' sounds burdensome but is presented positively -- Eppie's demands are what reconnect Silas to life. Human love is portrayed as inherently social."
                />
              </div>

              {/* Wealth and Class */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Wealth, Class, and Moral Worth
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eliot consistently shows that moral worth and social class are unrelated &mdash;
                  and often inversely correlated. The gentry (Squire Cass, Dunsey, even Godfrey) are
                  morally weak: idle, self-indulgent, and irresponsible. The working-class
                  characters (Silas, Dolly Winthrop, Aaron) possess genuine warmth, integrity, and
                  community spirit. Silas&apos;s gold becomes a powerful symbol: when it is his only
                  treasure, he is spiritually dead. When it is replaced by Eppie (living wealth), he
                  comes alive. Godfrey&apos;s attempt to buy Eppie with money and status fails
                  &mdash; true richness cannot be purchased. Eppie&apos;s choice of the
                  working-class life is the novel&apos;s strongest statement: love and belonging
                  matter more than wealth.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="He spread them out in heaps and bathed his hands in them... and thought fondly of the guineas that were only half-earned by the work in his loom, as if they had been unborn children"
                    speaker="Narrator"
                    act="Part 1, Chapter 2"
                    analysis="Silas bathes his hands in his coins and thinks of the guineas not yet fully earned 'as if they had been unborn children'. The comparison of gold to a child is deeply ironic in light of what follows: gold is a false substitute for human connection, and it cannot love back. When Eppie literally replaces the gold, the metaphor becomes reality: real love is infinitely more valuable than material wealth."
                  />
                  <Quote
                    text="I think those have the least feeling that act wrong to begin with"
                    speaker="Nancy"
                    act="Part 1, Chapter 11"
                    analysis="Nancy's retort at the New Year's Eve dance, when Godfrey calls her 'hard-hearted' and says she has 'no feeling'. She turns the charge back on him: the unfeeling are those who do wrong in the first place. Nancy has resolved that not even the most dazzling rank would make her marry a man careless of his character, and Eliot measures worth the same way, by conduct rather than class: the Squire's heir, with every advantage, wants sympathy for a misery of his own making."
                  />
                </div>
              </div>

              {/* Faith and Religion */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  Faith and Religion
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel contrasts two types of religion. Lantern Yard represents rigid,
                  institutional religion: its drawing of lots is mechanical and unjust, and it is
                  easily manipulated by the hypocritical William Dane. When Silas returns to find
                  Lantern Yard replaced by a factory, Eliot suggests this kind of religion is
                  destined to be swept away by industrialisation. Raveloe&apos;s religion is gentler
                  and more communal: the church is a social centre, and Dolly&apos;s simple faith
                  (&ldquo;Them above&rdquo;) is warm rather than doctrinal. Silas loses his faith at
                  Lantern Yard but recovers a kind of spiritual sense through Eppie and the Raveloe
                  community. Eliot, who had rejected organised Christianity herself, suggests that
                  genuine spirituality comes through human love and community, not through doctrine.
                </p>
                <Quote
                  text="There's good i' this world -- I've a feeling o' that now; and it makes a man feel as there's a good more nor he can see"
                  speaker="Silas"
                  act="Part 2, Chapter 16"
                  analysis="Silas's recovered faith is not doctrinal but experiential -- he 'feels' rather than 'believes.' 'More nor he can see' suggests a spiritual reality beyond the material, but it is arrived at through human experience (Eppie's love), not through religious instruction. This reflects Eliot's own secular humanism."
                />
              </div>

              {/* Moral Consequences */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Moral Consequences and Justice
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eliot structures the novel so that moral choices have natural consequences.
                  Godfrey&apos;s cowardice in hiding his daughter results in childlessness &mdash;
                  he cannot have what he refused to claim. Dunsey&apos;s greed leads to his death.
                  Silas&apos;s selfless adoption of Eppie leads to his redemption and happiness.
                  This is not divine punishment but what Eliot calls natural consequence &mdash;
                  actions produce results. The novel&apos;s moral framework is humanist: goodness is
                  rewarded not by God but by the natural outcomes of living well. Godfrey&apos;s
                  realisation that &ldquo;there&apos;s debts we can&apos;t pay like money
                  debts&rdquo; captures this perfectly.
                </p>
              </div>

              {/* Nature vs Nurture */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Nature versus Nurture
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eppie is biologically the daughter of Godfrey Cass (gentry) and Molly Farren
                  (lower class), but she is raised by Silas (working class). When Godfrey claims
                  her, she chooses Silas without hesitation. Eliot argues powerfully that nurture
                  trumps nature: it is the parent who raises you, not the one who conceived you, who
                  deserves your love and loyalty. Eppie&apos;s character &mdash; warm, grounded,
                  connected to nature &mdash; reflects her upbringing with Silas and the village,
                  not her biological inheritance from the Cass family. This was a progressive
                  argument in the Victorian period, when heredity and &ldquo;blood&rdquo; were
                  considered paramount.
                </p>
              </div>

              {/* Industrialisation */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted0" />
                  Industrialisation and Change
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel is set in the early 19th century but written in 1861, allowing Eliot to
                  look back at a vanishing rural world. Lantern Yard, a pre-industrial religious
                  community, has been replaced by a factory when Silas returns. Raveloe represents
                  an older, slower, more organic way of life. Eliot is partly nostalgic for this
                  world but does not idealise it &mdash; Raveloe has its superstitions, snobberies,
                  and injustices. The novel implicitly asks what is lost when industrialisation
                  replaces traditional communities: warmth, mutual support, and a connection to the
                  natural world.
                </p>
              </div>

              {/* Redemption */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Redemption and Transformation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Silas&apos;s journey from isolation to community is the novel&apos;s central
                  redemptive arc. His transformation is gradual and believable: Eppie forces him to
                  engage with others, and through that engagement he rediscovers trust, warmth, and
                  purpose. The novel draws on Christian imagery (Eppie arrives on New Year&apos;s
                  Eve, a time of renewal, and Silas believes she was &ldquo;sent&rdquo; to him), but
                  the redemption is fundamentally secular. It is human love, not divine grace, that
                  saves Silas. Godfrey, by contrast, seeks redemption but arrives too late &mdash;
                  his moral debts have accumulated beyond payment. Eliot suggests that redemption is
                  possible but must be earned through genuine connection, not purchased with money.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section
            id="quotations"
            title={tr(`Key Quotations`)}
            badge="20+ Quotes"
            colour="bg-amber-600"
          >
            <p className="text-sm text-muted-foreground mb-4">
              These are the most important quotations to learn. Each one can be applied to multiple
              themes and characters.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">{tr(`Silas Marner`)}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="He seemed to weave, like the spider, from pure impulse, without reflection"
                    speaker="Narrator"
                    act="Part 1, Chapter 2"
                    analysis="The simile comparing Silas to a spider emphasises his mechanical, joyless existence. 'Without reflection' means both 'without thinking' and 'without self-awareness.' He has become more machine than man -- a state that Eppie will reverse."
                  />
                  <Quote
                    text="The gold had asked that he should sit weaving longer and longer, deafened and blinded more and more to all things except the monotony of his loom and the repetition of his web"
                    speaker="Narrator"
                    act="Part 1, Chapter 14"
                    analysis="The gold is personified as a demanding master. 'Deafened and blinded' suggests Silas's senses have been deadened. The 'monotony' and 'repetition' contrast sharply with the variety and liveliness Eppie will bring. Gold creates a closed loop; love opens the world."
                  />
                  <Quote
                    text="The child was sent to me: there's dealings with us -- there's dealings"
                    speaker="Silas"
                    act="Part 2, Chapter 16"
                    analysis="Silas interprets Eppie's arrival as providential -- 'sent to me.' 'There's dealings' suggests he has come to believe in some form of moral order again, though it is vague rather than doctrinal. He says it to Dolly sixteen years after Eppie's coming: the drawing of lots that condemned him at Lantern Yard is still dark to him, but the child has given him back his faith in a good beyond himself."
                  />
                  <Quote
                    text="Since the time the child was sent to me and I've come to love her as myself, I've had light enough to trusten by"
                    speaker="Silas"
                    act="Part 2, Chapter 21"
                    analysis="'Light' replaces the darkness of his isolated years. 'Trusten by' means he has recovered enough faith to live by. Crucially, this faith comes through loving Eppie, not through religious doctrine. Love provides the moral compass that religion failed to give him."
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">{tr(`Godfrey Cass`)}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="She thinks me worse than I am. But she must think it: she can never know all. It's part of my punishment, Nancy, for my daughter to dislike me"
                    speaker="Godfrey"
                    act="Part 2, Chapter 20"
                    analysis="Godfrey finally accepts that his years of deception have consequences. Eppie, refusing him, believes he wronged her mother as well as her, and he cannot tell her the whole story ('she can never know all'). The word 'punishment' suggests he sees moral causation at work: his suffering is the natural result of his choices."
                  />
                  <Quote
                    text="But you wouldn't have married me then, Nancy, if I'd told you"
                    speaker="Godfrey"
                    act="Part 2, Chapter 18"
                    analysis="Godfrey excuses his silence: Nancy, he insists, would never have married him if he had told her the truth. Eliot's narrator makes clear that this is self-justification: Godfrey says it 'to prove to himself that his conduct had not been utter folly'. His inability to face difficult truths defines his character. The contrast with Proctor in The Crucible (who painfully tells the truth) is striking."
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">{tr(`Eppie and Others`)}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I like the working-folks, and their victuals, and their ways. And... I'm promised to marry a working-man"
                    speaker="Eppie"
                    act="Part 2, Chapter 19"
                    analysis="Eppie's declaration of class loyalty. She values the working-class life not out of ignorance of alternatives but by genuine preference. 'Their victuals, and their ways' is concrete and specific -- she loves the texture of this life, not an abstract idea of it."
                  />
                  <Quote
                    text="The yoke a man creates for himself by wrong-doing will breed hate in the kindliest nature; and the good-humoured, affectionate-hearted Godfrey Cass was fast becoming a bitter man, visited by cruel wishes"
                    speaker="Narrator"
                    act="Part 1, Chapter 3"
                    analysis="Eliot's narrator does not make Godfrey a villain: he is 'good-humoured' and 'affectionate-hearted'. But his secret marriage has given Dunsey a hold over him, a 'yoke' of his own making, and it is turning him into 'a bitter man'. This connects to Eliot's nuanced moral vision: she judges characters by what they do with their circumstances, not by abstract standards."
                  />
                  <Quote
                    text="I think you're in the right on it to keep the little un, Master Marner, seeing as it's been sent to you, though there's folks as thinks different"
                    speaker="Dolly Winthrop"
                    act="Part 1, Chapter 14"
                    analysis="Dolly's practical wisdom: the right response to finding a child is to keep it and bring it up. Her simple moral clarity contrasts with Godfrey's agonised avoidance. 'Seeing as it's been sent to you' reflects her simple faith that Eppie's coming was meant, and she backs Silas against the 'folks as thinks different'."
                  />
                  <Quote
                    text="The gods of the hearth exist for us still; and let all new faith be tolerant of that fetishism, lest it bruise its own roots"
                    speaker="Narrator"
                    act="Part 2, Chapter 16"
                    analysis="Silas will not have a grate and oven put in: he loves the old brick hearth, where he found Eppie, as he once loved his brown pot. From this, Eliot's narrator makes a philosophical statement: domestic love ('gods of the hearth') is the foundation of all higher values. Any new ideology ('new faith') that scorns this attachment to home and its familiar things undermines its own moral basis."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title={tr(`Historical Context`)} colour="bg-cyan-600">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground">{tr(`George Eliot (Mary Ann Evans)`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  George Eliot was the pen name of Mary Ann Evans (1819&ndash;1880). She used a male
                  pseudonym to ensure her work was taken seriously in a literary world dominated by
                  men, and to separate her professional life from her unconventional personal life
                  (she lived openly with the married George Henry Lewes). She was one of the leading
                  novelists of the Victorian era, known for her psychological depth and moral
                  seriousness. <em>{tr(`Silas Marner`)}</em> (1861) draws on her childhood memories
                  of rural Warwickshire. She had rejected organised Christianity in her twenties,
                  influenced by her translations of German theological works, but retained a deep
                  moral sensibility. Her novels explore morality through human relationships rather
                  than religious doctrine.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">{tr(`The Industrial Revolution`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel is set in the early 1800s, during the Industrial Revolution, but written
                  in 1861, when industrialisation was well advanced. Eliot looks back at a vanishing
                  rural England with a mixture of nostalgia and clear-eyed realism. Silas himself is
                  a figure of the transition: he is a weaver whose skill is becoming mechanised.
                  Lantern Yard&apos;s replacement by a factory symbolises the sweeping away of old
                  communities and belief systems. Raveloe represents a pre-industrial world of
                  organic social bonds &mdash; but Eliot does not idealise it entirely.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">{tr(`Class and Social Hierarchy`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Victorian society was rigidly stratified. The novel contrasts the gentry (the Cass
                  family) with the working class (Silas, Dolly Winthrop). Eliot consistently shows
                  the gentry as morally inferior: idle, irresponsible, and corrupt. The
                  working-class characters are warmer, more honest, and more community-minded.
                  Eppie&apos;s choice of the working-class life over the gentry is a powerful social
                  statement. This was a progressive position in 1861, when the social hierarchy was
                  considered natural and ordained.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">
                  {tr(`Religion in the Victorian Period`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Victorian period saw intense religious debate. The Church of England was the
                  established church, but Nonconformist groups (like the community at Lantern Yard)
                  were widespread, particularly among the working class. Eliot&apos;s own loss of
                  faith is reflected in Silas&apos;s journey. The novel does not attack religion but
                  distinguishes between cold, institutional faith (Lantern Yard) and warm, communal
                  spirituality (Raveloe). Eliot was influenced by Ludwig Feuerbach, who argued that
                  the qualities attributed to God (love, compassion) are actually human qualities
                  projected outward. This idea underpins the novel: salvation comes through human
                  love, not divine intervention.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">{tr(`The Role of Women`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Writing as a woman under a male name, Eliot was keenly aware of gender
                  constraints. In the novel, women like Dolly Winthrop and Nancy Lammeter are
                  confined to domestic roles but exercise real moral influence within those roles.
                  Eppie&apos;s choice is significant: she has agency and makes a decision that
                  shapes her own life. Eliot does not directly challenge the domestic sphere but
                  shows women acting with integrity, intelligence, and moral clarity within it.
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
                <h3 className="font-bold text-foreground">{tr(`General Tips for Silas Marner`)}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; <strong>{tr(`Always refer to Eliot as the novelist:`)}</strong> Use
                    phrases like &ldquo;Eliot presents...&rdquo; or &ldquo;Eliot uses Silas to
                    explore...&rdquo; This shows awareness of authorial intent.
                  </li>
                  <li>
                    &bull; <strong>{tr(`Discuss the omniscient narrator:`)}</strong> Eliot&apos;s
                    narrator is intrusive and philosophical. The narrator&apos;s commentary is part
                    of the text &mdash; quote and analyse it.
                  </li>
                  <li>
                    &bull; <strong>{tr(`Use the gold/Eppie contrast:`)}</strong> This central symbol
                    is relevant to almost any question. Gold = isolation, sterility, materialism.
                    Eppie = connection, growth, love.
                  </li>
                  <li>
                    &bull; <strong>{tr(`Integrate context naturally:`)}</strong> Weave in references
                    to industrialisation, class, religion, and Eliot&apos;s own beliefs. Don&apos;t
                    bolt on context as a separate paragraph.
                  </li>
                  <li>
                    &bull; <strong>{tr(`Compare the two parts:`)}</strong> The sixteen-year gap is
                    structurally significant. Part One shows the problem; Part Two shows the
                    consequences. Discuss how the structure reinforces the themes.
                  </li>
                  <li>
                    &bull; <strong>{tr(`Explore moral complexity:`)}</strong> Godfrey is weak, not
                    evil. Nancy is principled but rigid. The best essays acknowledge shades of grey.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-purple-800 px-2 py-0.5 text-xs font-bold text-white">
                    AQA
                  </span>
                  AQA GCSE English Literature &mdash; Paper 1, Section B (19th Century Novel)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; <strong>Format:</strong> Extract-based question. Discuss how a
                    theme/character is presented in the extract and the novel as a whole.
                  </li>
                  <li>
                    &bull; <strong>Marks:</strong> 30 marks. Recommended time: ~45 minutes.
                  </li>
                  <li>
                    &bull; <strong>{tr(`AOs tested:`)}</strong> AO1 (response and quotation), AO2
                    (language/structure/form), AO3 (context).
                  </li>
                  <li>
                    &bull; <strong>{tr(`Closed book:`)}</strong> Yes. You will have the extract but
                    need memorised quotations for the wider text.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white">
                    CAIE
                  </span>
                  Cambridge IGCSE Literature &mdash; Paper 2 (Prose)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; <strong>Format:</strong> Choice of passage-based question or essay
                    question on the novel.
                  </li>
                  <li>
                    &bull; <strong>Marks:</strong> 25 marks per question.
                  </li>
                  <li>
                    &bull; <strong>Key tip:</strong> CAIE rewards personal response and close
                    reading. Develop your own interpretations and support them with precise textual
                    references.
                  </li>
                  <li>
                    &bull; <strong>{tr(`Open/Closed book:`)}</strong> Depends on component. Check
                    your syllabus variant.
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section
            id="practice"
            title={tr(`Practice Questions`)}
            badge="3 Questions"
            colour="bg-orange-600"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">{tr(`Question 1`)}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Eliot present the theme of community in <em>{tr(`Silas Marner`)}</em>?
                  Refer to the whole novel in your answer.
                </p>
                <AITextArea
                  placeholder={tr(`Write your response here...`)}
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="Silas Marner - Community"
                  minWords={100}
                />
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">{tr(`Question 2`)}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Eliot use the character of Godfrey Cass to explore ideas about moral
                  responsibility? You should consider the whole novel in your response.
                </p>
                <AITextArea
                  placeholder={tr(`Write your response here...`)}
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="Silas Marner - Godfrey and moral responsibility"
                  minWords={100}
                />
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">{tr(`Question 3`)}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  &ldquo;In <em>{tr(`Silas Marner`)}</em>, Eliot suggests that love is more valuable
                  than wealth.&rdquo; To what extent do you agree with this statement? Refer to the
                  whole novel in your answer.
                </p>
                <AITextArea
                  placeholder={tr(`Write your response here...`)}
                  label="Your Answer"
                  examBoard="AQA"
                  subject="English Literature"
                  topic="Silas Marner - Love versus wealth"
                  minWords={100}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>{tr(`Silas Marner`)}</em> by George Eliot (first published 1861) is in the public
          domain. All quotations are reproduced freely.
        </p>
      </footer>
    </>
  )
}
