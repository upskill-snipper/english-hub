'use client'

import { useState, useEffect } from 'react'
import { AITextArea } from '@/components/AITextArea'
import type { Locale } from '@/lib/i18n/dictionary'
import {
  // Hero / nav
  HERO_TITLE,
  HERO_LEAD,
  JUMP_LABEL,
  NAV_LABELS,
  // Section titles
  SECTION_PLOT_TITLE,
  SECTION_PLOT_BADGE,
  SECTION_CHARS_TITLE,
  SECTION_CHARS_BADGE,
  SECTION_THEMES_TITLE,
  SECTION_THEMES_BADGE,
  SECTION_QUOTES_TITLE,
  SECTION_QUOTES_BADGE,
  SECTION_CONTEXT_TITLE,
  SECTION_ESSAY_TITLE,
  SECTION_ESSAY_BADGE,
  SECTION_METHODS_TITLE,
  SECTION_METHODS_BADGE,
  SECTION_GRADE9_TITLE,
  SECTION_GRADE9_BADGE,
  SECTION_PRACTICE_TITLE,
  SECTION_PRACTICE_BADGE,
  LABEL_KEY_SCENES,
  LABEL_ROLE,
  LABEL_KEY_TRAITS,
  LABEL_ARC,
  // Plot
  ACT1_TITLE,
  ACT1_P1,
  ACT1_P2,
  ACT1_P3,
  ACT1_KEYSCENES,
  ACT2_TITLE,
  ACT2_P1,
  ACT2_P2,
  ACT2_KEYSCENES,
  ACT3_TITLE,
  ACT3_P1,
  ACT3_P2,
  ACT3_KEYSCENES,
  ACT4_TITLE,
  ACT4_P1,
  ACT4_P2,
  ACT4_P3,
  ACT4_KEYSCENES,
  ACT5_TITLE,
  ACT5_P1,
  ACT5_P2,
  ACT5_P3,
  ACT5_KEYSCENES,
  // Characters
  CHAR_MACBETH,
  CHAR_LADYMACBETH,
  CHAR_BANQUO,
  CHAR_MACDUFF,
  CHAR_DUNCAN,
  CHAR_MALCOLM,
  CHAR_WITCHES,
  CHAR_LADYMACDUFF,
  CHAR_ROSS,
  CHAR_LENNOX,
  // Themes
  THEME_AMBITION,
  THEME_POWER,
  THEME_GUILT,
  THEME_SUPERNATURAL,
  THEME_GENDER,
  THEME_LOYALTY,
  THEME_FATE,
  THEME_APPEARANCE,
  // Context
  CTX_JAMES1,
  CTX_GUNPOWDER,
  CTX_DIVINE_RIGHT,
  CTX_CHAIN,
  CTX_WITCHCRAFT,
  CTX_GENDER_JACOBEAN,
  // Essay
  ESSAY_INTRO,
  ESSAY_AMBITION,
  ESSAY_GUILT,
  ESSAY_SUPERNATURAL,
  ESSAY_MASCULINITY,
  ESSAY_LADYMACBETH,
  // Methods
  METHOD_SOLILOQUY,
  METHOD_BLOOD,
  METHOD_IRONY,
  METHOD_PATHETIC,
  METHOD_EQUIVOCATION,
  METHOD_FIVE_ACT,
  METHOD_ANTITHESIS,
  METHOD_SUPERNATURAL_DEVICE,
  METHOD_IAMBIC,
  METHOD_STAGECRAFT,
  // Grade 9
  GRADE9_INTRO,
  G9_WITCHES,
  G9_LADYMACBETH_PERFORMANCE,
  G9_TRAGIC_HERO,
  G9_DUNCAN,
  G9_TOMORROW,
  G9_REGICIDE,
  G9_MACDUFF,
  G9_PROPAGANDA,
  // Quotes
  QUOTES_INTRO,
  QUOTES_BY_CHAR,
  QUOTES_CROSS,
  QUOTES_CROSS_INTRO,
  QUOTES_COL_THEME,
  QUOTES_COL_LIST,
  // Practice
  PRACTICE_INTRO,
  PRACTICE_Q,
  PRACTICE_MARKS,
  PRACTICE_PLACEHOLDER,
  PRACTICE_LABEL,
  // Footer
  FOOTER_COPYRIGHT,
  // Helper
  pick,
  type Bi,
  type CharacterBlock,
} from './content'

/* ─── Locale hook (cookie-driven, same pattern as use-t.ts) ── */

function readLocale(): Locale {
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  return match?.[1] === 'ar' ? 'ar' : 'en'
}

function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => {
    setLocale(readLocale())
    function onLangChange() {
      setLocale(readLocale())
    }
    window.addEventListener('eh-lang-change', onLangChange)
    return () => window.removeEventListener('eh-lang-change', onLangChange)
  }, [])
  return locale
}

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

function SubSection({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-lg border border-border bg-muted/50 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-muted/60"
        aria-expanded={open}
        aria-controls={`sub-${id}`}
      >
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <svg
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`sub-${id}`} className="border-t border-border px-4 py-4">
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
    <div className="rounded-lg border-l-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {speaker} &mdash; {act}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function QuoteCompact({
  text,
  speaker,
  act,
  themes,
  analysis,
}: {
  text: string
  speaker: string
  act: string
  themes: string[]
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {speaker} &mdash; {act}
      </p>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {themes.map((t) => (
          <span
            key={t}
            className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

/* ─── Character renderer ─────────────────────────────────── */

function CharacterCard({
  id,
  block,
  locale,
  defaultOpen = false,
  quotes,
}: {
  id: string
  block: CharacterBlock
  locale: Locale
  defaultOpen?: boolean
  quotes?: React.ReactNode
}) {
  return (
    <SubSection id={id} title={pick(block.title, locale)} defaultOpen={defaultOpen}>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 mb-2">
          {block.tags.map((t, i) => (
            <span
              key={i}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground"
            >
              {pick(t, locale)}
            </span>
          ))}
        </div>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
          <p>
            <strong>{pick(LABEL_ROLE, locale)}</strong> {pick(block.role, locale)}
          </p>
          <p>
            <strong>{pick(LABEL_KEY_TRAITS, locale)}</strong> {pick(block.traits, locale)}
          </p>
          <p>
            <strong>{pick(LABEL_ARC, locale)}</strong> {pick(block.arc, locale)}
          </p>
        </div>
        {quotes && <div className="grid gap-3 sm:grid-cols-2">{quotes}</div>}
      </div>
    </SubSection>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function MacbethRevisionPage() {
  const locale = useLocale()
  const p = (b: Bi) => pick(b, locale)
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <div dir={dir}>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wider">
            Shakespeare
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
          {p(HERO_TITLE)}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">{p(HERO_LEAD)}</p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">{p(JUMP_LABEL)}</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(NAV_LABELS).map(([href, label]) => (
            <a
              key={href}
              href={`#${href}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {p(label)}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section
          id="plot"
          title={p(SECTION_PLOT_TITLE)}
          badge={p(SECTION_PLOT_BADGE)}
          colour="bg-red-600"
          defaultOpen
        >
          <div className="space-y-6">
            {/* Act 1 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">
                  1
                </span>
                {p(ACT1_TITLE)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT1_P1)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT1_P2)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT1_P3)}</p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {p(LABEL_KEY_SCENES)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {ACT1_KEYSCENES.map((s, i) => (
                    <li key={i}>&bull; {p(s)}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Act 2 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">
                  2
                </span>
                {p(ACT2_TITLE)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT2_P1)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT2_P2)}</p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {p(LABEL_KEY_SCENES)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {ACT2_KEYSCENES.map((s, i) => (
                    <li key={i}>&bull; {p(s)}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Act 3 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">
                  3
                </span>
                {p(ACT3_TITLE)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT3_P1)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT3_P2)}</p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {p(LABEL_KEY_SCENES)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {ACT3_KEYSCENES.map((s, i) => (
                    <li key={i}>&bull; {p(s)}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Act 4 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">
                  4
                </span>
                {p(ACT4_TITLE)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT4_P1)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT4_P2)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT4_P3)}</p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {p(LABEL_KEY_SCENES)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {ACT4_KEYSCENES.map((s, i) => (
                    <li key={i}>&bull; {p(s)}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Act 5 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">
                  5
                </span>
                {p(ACT5_TITLE)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT5_P1)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT5_P2)}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p(ACT5_P3)}</p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {p(LABEL_KEY_SCENES)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {ACT5_KEYSCENES.map((s, i) => (
                    <li key={i}>&bull; {p(s)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section
            id="characters"
            title={p(SECTION_CHARS_TITLE)}
            badge={p(SECTION_CHARS_BADGE)}
            colour="bg-purple-600"
          >
            <div className="space-y-6">
              <CharacterCard
                id="char-macbeth"
                block={CHAR_MACBETH}
                locale={locale}
                defaultOpen
                quotes={
                  <>
                    <Quote
                      text="Stars, hide your fires; / Let not light see my black and deep desires"
                      speaker="Macbeth"
                      act="Act 1, Scene 4"
                      analysis="An aside revealing Macbeth harbours murderous thoughts even before Lady Macbeth's influence. The imperative 'hide' shows he knows his desires are wrong. The metaphor of stars/light vs black desires establishes the light/dark motif. Crucially, this shows ambition was already in him -- the witches did not create it."
                    />
                    <Quote
                      text="Is this a dagger which I see before me, / The handle toward my hand?"
                      speaker="Macbeth"
                      act="Act 2, Scene 1"
                      analysis="The hallucinated dagger embodies the play's supernatural/psychological ambiguity. Is it a supernatural sign or a projection of his guilty desire? The handle pointing toward him suggests invitation. His inability to determine if it is real mirrors his inability to distinguish right from wrong."
                    />
                    <Quote
                      text="Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red"
                      speaker="Macbeth"
                      act="Act 2, Scene 2"
                      analysis="Macbeth's guilt is so vast it would stain the entire ocean red. The Latinate 'multitudinous seas incarnadine' followed by the blunt monosyllables 'making the green one red' shows his mind swinging between educated rhetoric and raw horror. His guilt is presented as infinite and permanent."
                    />
                    <Quote
                      text="O, full of scorpions is my mind, dear wife!"
                      speaker="Macbeth"
                      act="Act 3, Scene 2"
                      analysis="The scorpion metaphor shows his mind is poisoned, tormenting him from within. 'Dear wife' is poignant -- even as he descends into tyranny, he reaches for intimacy. But he is now planning Banquo's murder without her, showing their growing estrangement."
                    />
                    <Quote
                      text="Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time"
                      speaker="Macbeth"
                      act="Act 5, Scene 5"
                      analysis="Spoken on learning of Lady Macbeth's death. Life has become meaningless repetition. The plodding monosyllables and sibilance create a tone of exhausted nihilism. 'Told by an idiot, full of sound and fury, signifying nothing' -- total existential despair. Ambition has brought him to the opposite of what he sought."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-ladymacbeth"
                block={CHAR_LADYMACBETH}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty"
                      speaker="Lady Macbeth"
                      act="Act 1, Scene 5"
                      analysis="She invokes supernatural evil to strip away her femininity. 'Unsex me' directly challenges Jacobean gender roles. 'Crown to the toe' -- ironic use of 'crown' foreshadowing her pursuit of the actual crown. The imperative verbs show her forceful will. She recognises that cruelty requires her to abandon her nature."
                    />
                    <Quote
                      text="Look like the innocent flower, / But be the serpent under't"
                      speaker="Lady Macbeth"
                      act="Act 1, Scene 5"
                      analysis="Biblical imagery -- the serpent is Satan in the Garden of Eden. She explicitly instructs Macbeth to practise deception. The contrast between 'flower' and 'serpent' encapsulates the play's appearance vs reality theme. It also reveals Lady Macbeth as the strategist behind the deception."
                    />
                    <Quote
                      text="Had he not resembled / My father as he slept, I had done't"
                      speaker="Lady Macbeth"
                      act="Act 2, Scene 2"
                      analysis="A rare moment of vulnerability revealing she is not entirely ruthless. She could not kill Duncan herself because he looked like her father. This cracks her facade of total coldness and foreshadows her eventual breakdown. Her humanity survives despite her attempts to suppress it."
                    />
                    <Quote
                      text="Nought's had, all's spent, / Where our desire is got without content"
                      speaker="Lady Macbeth"
                      act="Act 3, Scene 2"
                      analysis="They have everything they wanted but no satisfaction. 'Nought's had, all's spent' -- they have gained nothing and lost everything. The rhyming couplet gives it a proverbial, bitter wisdom. This soliloquy shows Lady Macbeth's growing despair, spoken when she is alone."
                    />
                    <Quote
                      text="Out, damned spot! out, I say! [...] who would have thought the old man to have had so much blood in him?"
                      speaker="Lady Macbeth"
                      act="Act 5, Scene 1"
                      analysis="The irony is devastating: she who said 'a little water clears us of this deed' now cannot wash the imaginary blood away. 'Damned' carries both its curse meaning and the religious sense -- she knows she is damned. Her fragmented prose (she previously spoke in controlled verse) shows her mental collapse."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-banquo"
                block={CHAR_BANQUO}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence"
                      speaker="Banquo"
                      act="Act 1, Scene 3"
                      analysis="Banquo warns that the witches use small truths (the Cawdor prophecy) to lure victims into larger traps. He is exactly right, but Macbeth ignores this wisdom. Shows Banquo's moral clarity and his role as a voice of reason."
                    />
                    <Quote
                      text="Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't"
                      speaker="Banquo"
                      act="Act 3, Scene 1"
                      analysis="Banquo suspects Macbeth but does not act -- possibly because the prophecy promises his own line will be kings. The tricolon 'King, Cawdor, Glamis' shows he has been keeping careful track. 'Most foully' is a direct (private) accusation of murder."
                    />
                    <Quote
                      text="Merciful powers, / Restrain in me the cursed thoughts that nature / Gives way to in repose"
                      speaker="Banquo"
                      act="Act 2, Scene 1"
                      analysis="Banquo prays to resist the temptation of the witches' prophecy, admitting he has 'cursed thoughts' about it. This shows he is tempted like Macbeth but chooses to resist, making him a moral contrast rather than a simply virtuous figure."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-macduff"
                block={CHAR_MACDUFF}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!"
                      speaker="Macduff"
                      act="Act 2, Scene 3"
                      analysis="Macduff's reaction to discovering Duncan's body. The triple repetition of 'horror' shows overwhelming shock. 'Tongue nor heart' -- the crime is beyond both speech and comprehension. His genuine emotion contrasts with Macbeth's performed grief."
                    />
                    <Quote
                      text="I shall do so; / But I must also feel it as a man"
                      speaker="Macduff"
                      act="Act 4, Scene 3"
                      analysis="In response to Malcolm telling him to 'dispute it like a man,' Macduff redefines masculinity. Unlike Macbeth, who equates manhood with violence, Macduff sees feeling grief as manly. This directly challenges the toxic masculinity that drives the play's tragedy."
                    />
                    <Quote
                      text="Bleed, bleed, poor country!"
                      speaker="Macduff"
                      act="Act 4, Scene 3"
                      analysis="Scotland personified as a wounded body bleeding under Macbeth's tyranny. Connects to the blood imagery throughout but reframes it: now it is the country bleeding, not just individuals. Shows Macduff's patriotism and distress."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-duncan"
                block={CHAR_DUNCAN}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="There's no art / To find the mind's construction in the face"
                      speaker="Duncan"
                      act="Act 1, Scene 4"
                      analysis="Deeply ironic: Duncan says you can't read treachery in someone's face -- said just as Macbeth enters, already plotting his murder. Reinforces appearance vs reality and Duncan's fatal naivety. He has learned nothing from the first Cawdor's betrayal."
                    />
                    <Quote
                      text="This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses"
                      speaker="Duncan"
                      act="Act 1, Scene 6"
                      analysis="Duncan praises the castle where he will be murdered. The irony is excruciating -- the 'pleasant' air and 'gentle senses' contrast with the violent murder being planned inside. The imagery of sweetness and nature contrasts with the 'fog and filthy air' of the witches."
                    />
                    <Quote
                      text="He was a gentleman on whom I built / An absolute trust"
                      speaker="Duncan"
                      act="Act 1, Scene 4"
                      analysis="Said about the traitorous first Thane of Cawdor, but Shakespeare ensures Macbeth (the new Cawdor) enters immediately after. Duncan's fatal flaw is repeated: he places 'absolute trust' in those who will betray him. The dramatic irony is devastating."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-malcolm"
                block={CHAR_MALCOLM}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="This tyrant, whose sole name blisters our tongues, / Was once thought honest"
                      speaker="Malcolm"
                      act="Act 4, Scene 3"
                      analysis="Malcolm reflects on how Macbeth was once trusted. 'Sole name blisters our tongues' -- even saying Macbeth's name is painful, suggesting his tyranny has corrupted language itself. Links to appearance vs reality: even evil can appear honest."
                    />
                    <Quote
                      text="Dispute it like a man"
                      speaker="Malcolm"
                      act="Act 4, Scene 3"
                      analysis="Malcolm tells Macduff to channel his grief into action. This represents the conventional view of masculinity -- suppress emotion, take revenge. Macduff's response ('I must also feel it as a man') corrects this, offering a richer definition."
                    />
                    <Quote
                      text="We shall not spend a large expense of time / Before we reckon with your several loves"
                      speaker="Malcolm"
                      act="Act 5, Scene 8"
                      analysis="Malcolm's measured, controlled final speech contrasts with Macbeth's passionate, chaotic language. He promises to reward loyalty -- the opposite of Macbeth's reign of fear. The transition from tyranny to legitimate rule is complete."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-witches"
                block={CHAR_WITCHES}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="Fair is foul, and foul is fair: / Hover through the fog and filthy air"
                      speaker="The Witches"
                      act="Act 1, Scene 1"
                      analysis="The play's opening line establishes the theme of appearance vs reality -- nothing is what it seems. The paradox 'fair is foul' collapses moral boundaries. The alliteration of 'fog,' 'foul,' and 'filthy' creates a sinister, suffocating atmosphere. Macbeth later echoes this with 'So foul and fair a day,' linking him to the witches before they even meet."
                    />
                    <Quote
                      text="All hail, Macbeth, that shalt be king hereafter!"
                      speaker="Third Witch"
                      act="Act 1, Scene 3"
                      analysis="The prophecy that ignites the entire plot. Note: they say he SHALL be king -- not that he must kill Duncan. The prophecy is a catalyst, not an instruction, which is key to the fate vs free will debate."
                    />
                    <Quote
                      text="Double, double toil and trouble; / Fire burn and cauldron bubble"
                      speaker="The Witches"
                      act="Act 4, Scene 1"
                      analysis="The incantation's trochaic rhythm (stressed-unstressed, opposite of normal speech) marks the witches as Other. 'Double' suggests duplication and deception. The scene's grotesque ingredients emphasise the unnatural."
                    />
                    <Quote
                      text="By the pricking of my thumbs, / Something wicked this way comes"
                      speaker="Second Witch"
                      act="Act 4, Scene 1"
                      analysis="Even the witches now call Macbeth 'wicked' -- he has descended below even their moral level. He comes to them voluntarily this time, seeking evil rather than being sought by it. This marks a crucial shift in his moral agency."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-ladymacduff"
                block={CHAR_LADYMACDUFF}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="He loves us not; / He wants the natural touch"
                      speaker="Lady Macduff"
                      act="Act 4, Scene 2"
                      analysis="She accuses Macduff of lacking 'natural' feeling by abandoning his family. 'Natural touch' connects to the play's wider theme of the natural vs unnatural. Ironically, Macduff's absence is motivated by patriotism -- he is fighting for Scotland's future."
                    />
                    <Quote
                      text="Whither should I fly? / I have done no harm"
                      speaker="Lady Macduff"
                      act="Act 4, Scene 2"
                      analysis="Her innocence makes her murder more horrifying. In Macbeth's Scotland, innocence is no protection. The rhetorical question emphasises her helplessness. She recognises that 'to do harm / Is often laudable' in this corrupted world."
                    />
                    <Quote
                      text="He has kill'd me, mother"
                      speaker="Young Macduff (her son)"
                      act="Act 4, Scene 2"
                      analysis="The son's dying words to his mother are devastatingly simple. The murder of a child onstage would have shocked Shakespeare's audience profoundly. This moment ensures the audience's complete condemnation of Macbeth."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-ross"
                block={CHAR_ROSS}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="Your castle is surprised; your wife and babes / Savagely slaughter'd"
                      speaker="Ross"
                      act="Act 4, Scene 3"
                      analysis="The bluntness of 'savagely slaughter'd' is devastating after Ross's earlier hesitation. He tried to soften the blow but ultimately must deliver the raw truth. This moment triggers Macduff's grief and the audience's final condemnation of Macbeth."
                    />
                    <Quote
                      text="Alas, poor country! / Almost afraid to know itself"
                      speaker="Ross"
                      act="Act 4, Scene 3"
                      analysis="Scotland personified as too frightened to examine its own state. 'Afraid to know itself' suggests collective trauma and denial under Macbeth's tyranny. The country has lost its identity under illegitimate rule."
                    />
                    <Quote
                      text="Things at the worst will cease, or else climb upward / To what they were before"
                      speaker="Ross"
                      act="Act 4, Scene 2"
                      analysis="Ross tries to comfort Lady Macduff with the idea that things cannot get worse -- they will either stop or improve. The dramatic irony is terrible: things are about to get much worse for her. Shows Ross's diplomatic instinct to soften harsh realities."
                    />
                  </>
                }
              />

              <CharacterCard
                id="char-lennox"
                block={CHAR_LENNOX}
                locale={locale}
                quotes={
                  <>
                    <Quote
                      text="The night has been unruly [...] Some say, the earth / Was feverous and did shake"
                      speaker="Lennox"
                      act="Act 2, Scene 3"
                      analysis="Lennox describes the night of Duncan's murder. Pathetic fallacy: the earth itself responds to the crime with storms and earthquakes. 'Feverous' personifies the earth as diseased by the regicide. Links to the Great Chain of Being -- killing the king disorders nature."
                    />
                    <Quote
                      text="Men must not walk too late"
                      speaker="Lennox"
                      act="Act 3, Scene 6"
                      analysis="Lennox's ironic commentary on Macbeth's Scotland: people who question Macbeth end up dead. The understatement ('walk too late') masks a damning accusation. He must speak in code because open criticism would be fatal -- this IS the tyranny."
                    />
                    <Quote
                      text="His message ere he come, that a swift blessing / May soon return to this our suffering country"
                      speaker="Lennox"
                      act="Act 3, Scene 6"
                      analysis="Lennox prays for Malcolm's return and Scotland's liberation. 'Suffering country' personifies Scotland as a patient in pain. He hopes for 'blessing' -- a word that connects legitimate kingship with divine approval, contrasting with Macbeth's cursed rule."
                    />
                  </>
                }
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section
            id="themes"
            title={p(SECTION_THEMES_TITLE)}
            badge={p(SECTION_THEMES_BADGE)}
            colour="bg-emerald-600"
          >
            <div className="space-y-8">
              {[
                { dot: 'bg-red-500', block: THEME_AMBITION },
                { dot: 'bg-amber-500', block: THEME_POWER },
                { dot: 'bg-indigo-500', block: THEME_GUILT },
                { dot: 'bg-violet-500', block: THEME_SUPERNATURAL },
                { dot: 'bg-blue-500', block: THEME_GENDER },
                { dot: 'bg-teal-500', block: THEME_LOYALTY },
                { dot: 'bg-pink-500', block: THEME_FATE },
                { dot: 'bg-muted', block: THEME_APPEARANCE },
              ].map((th, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span className={`h-3 w-3 rounded-full ${th.dot}`} />
                    {p(th.block.title)}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p(th.block.body)}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section
            id="quotations"
            title={p(SECTION_QUOTES_TITLE)}
            badge={p(SECTION_QUOTES_BADGE)}
            colour="bg-amber-600"
          >
            <p className="text-sm text-muted-foreground mb-4">{p(QUOTES_INTRO)}</p>

            <div className="space-y-6">
              <h3 className="font-bold text-foreground text-base border-b border-border pb-2">
                {p(QUOTES_BY_CHAR)}
              </h3>

              <SubSection
                id="quotes-macbeth"
                title={`${pick(CHAR_MACBETH.title, locale)} (10)`}
                defaultOpen
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="So foul and fair a day I have not seen"
                    speaker="Macbeth"
                    act="Act 1, Scene 3"
                    themes={['Appearance vs Reality', 'Supernatural']}
                    analysis="Echoes the witches' 'fair is foul' before he meets them -- suggests a supernatural connection or that the seeds of evil are already in him. Establishes the appearance vs reality theme from his very first words."
                  />
                  <QuoteCompact
                    text="Stars, hide your fires; / Let not light see my black and deep desires"
                    speaker="Macbeth"
                    act="Act 1, Scene 4"
                    themes={['Ambition', 'Appearance vs Reality']}
                    analysis="An aside revealing murderous thoughts before Lady Macbeth's influence. The imperative 'hide' shows he knows his desires are wrong. Light/dark motif: he wants darkness to conceal his ambition."
                  />
                  <QuoteCompact
                    text="If it were done when 'tis done, then 'twere well / It were done quickly"
                    speaker="Macbeth"
                    act="Act 1, Scene 7"
                    themes={['Guilt', 'Ambition']}
                    analysis="The tortured syntax mirrors his tortured mind. He wants the murder to have no consequences ('if it were done when 'tis done'). The conditional 'if' reveals he knows it won't end there."
                  />
                  <QuoteCompact
                    text="I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself"
                    speaker="Macbeth"
                    act="Act 1, Scene 7"
                    themes={['Ambition']}
                    analysis="He acknowledges he has no justification except ambition. The horse-riding metaphor ('spur,' 'vaulting') suggests ambition as uncontrollable. 'O'erleaps itself and falls' foreshadows his downfall."
                  />
                  <QuoteCompact
                    text="Is this a dagger which I see before me, / The handle toward my hand?"
                    speaker="Macbeth"
                    act="Act 2, Scene 1"
                    themes={['Supernatural', 'Guilt']}
                    analysis="The hallucinated dagger embodies the play's supernatural/psychological ambiguity. Is it a sign or a projection of guilt? The handle pointing toward him suggests invitation to murder."
                  />
                  <QuoteCompact
                    text="Will all great Neptune's ocean wash this blood / Clean from my hand?"
                    speaker="Macbeth"
                    act="Act 2, Scene 2"
                    themes={['Guilt']}
                    analysis="Guilt so vast it would stain the ocean red. The Latinate 'multitudinous seas incarnadine' contrasts with the blunt 'making the green one red' -- his mind swings between rhetoric and raw horror."
                  />
                  <QuoteCompact
                    text="Methought I heard a voice cry 'Sleep no more! / Macbeth does murder sleep'"
                    speaker="Macbeth"
                    act="Act 2, Scene 2"
                    themes={['Guilt', 'Supernatural']}
                    analysis="Sleep represents innocence and natural order. By murdering Duncan, Macbeth has murdered his own ability to rest. The personification suggests he has killed something fundamental in himself."
                  />
                  <QuoteCompact
                    text="O, full of scorpions is my mind, dear wife!"
                    speaker="Macbeth"
                    act="Act 3, Scene 2"
                    themes={['Guilt', 'Power']}
                    analysis="His mind is poisoned, tormenting him from within. 'Dear wife' is poignant -- he reaches for intimacy while planning murder without her. The scorpion metaphor shows internal torment."
                  />
                  <QuoteCompact
                    text="I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er"
                    speaker="Macbeth"
                    act="Act 3, Scene 4"
                    themes={['Guilt', 'Power', 'Fate vs Free Will']}
                    analysis="The river of blood metaphor shows he feels he cannot turn back. 'Tedious' is chillingly casual -- murder has become routine. He is now trapped in a cycle of violence, choosing continuation over repentance."
                  />
                  <QuoteCompact
                    text="Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day"
                    speaker="Macbeth"
                    act="Act 5, Scene 5"
                    themes={['Ambition', 'Power']}
                    analysis="Life has become meaningless repetition. The plodding monosyllables create exhausted nihilism. 'Told by an idiot, full of sound and fury, signifying nothing' -- total despair. Ambition has led to the opposite of what he sought."
                  />
                </div>
              </SubSection>

              <SubSection
                id="quotes-ladymacbeth"
                title={`${pick(CHAR_LADYMACBETH.title, locale)} (7)`}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="Come, you spirits / That tend on mortal thoughts, unsex me here"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 5"
                    themes={['Supernatural', 'Gender', 'Ambition']}
                    analysis="She invokes supernatural evil to strip away femininity. 'Unsex me' challenges Jacobean gender roles. 'Crown to the toe top-full of direst cruelty' -- ironic use of 'crown'. The imperative verbs show her forceful will."
                  />
                  <QuoteCompact
                    text="Look like the innocent flower, / But be the serpent under't"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 5"
                    themes={['Appearance vs Reality']}
                    analysis="Biblical imagery -- the serpent is Satan. She instructs deception explicitly. The flower/serpent contrast encapsulates the play's core theme. Reveals her as the strategist behind the false appearances."
                  />
                  <QuoteCompact
                    text="Come to my woman's breasts, / And take my milk for gall"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 5"
                    themes={['Gender', 'Supernatural']}
                    analysis="Asks spirits to replace nurturing breast milk with bitter poison. Rejects motherhood and femininity. Disturbing inversion of the natural maternal role. Links to the play's broader disruption of natural order."
                  />
                  <QuoteCompact
                    text="When you durst do it, then you were a man"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 7"
                    themes={['Gender', 'Ambition']}
                    analysis="She defines manhood as willingness to commit murder. This toxic definition drives Macbeth to kill Duncan. The circular logic traps him -- to prove masculinity, he must escalate violence."
                  />
                  <QuoteCompact
                    text="Had he not resembled / My father as he slept, I had done't"
                    speaker="Lady Macbeth"
                    act="Act 2, Scene 2"
                    themes={['Guilt', 'Gender']}
                    analysis="A rare moment of vulnerability: she could not kill Duncan because he looked like her father. This cracks her facade and foreshadows her breakdown. Her humanity survives despite her attempts to suppress it."
                  />
                  <QuoteCompact
                    text="A little water clears us of this deed"
                    speaker="Lady Macbeth"
                    act="Act 2, Scene 2"
                    themes={['Guilt', 'Appearance vs Reality']}
                    analysis="Dismisses guilt as easily washed away -- deeply ironic given her later obsessive handwashing. 'A little water' vs 'all great Neptune's ocean' shows how differently she and Macbeth process guilt at this stage."
                  />
                  <QuoteCompact
                    text="Out, damned spot! out, I say!"
                    speaker="Lady Macbeth"
                    act="Act 5, Scene 1"
                    themes={['Guilt', 'Supernatural']}
                    analysis="The devastating irony: she who dismissed guilt now cannot escape it. 'Damned' carries religious weight -- she knows she is spiritually condemned. Fragmented prose replaces controlled verse, showing mental collapse."
                  />
                </div>
              </SubSection>

              <SubSection id="quotes-witches" title={`${pick(CHAR_WITCHES.title, locale)} (5)`}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="Fair is foul, and foul is fair"
                    speaker="The Witches"
                    act="Act 1, Scene 1"
                    themes={['Appearance vs Reality', 'Supernatural']}
                    analysis="The play's opening line collapses moral boundaries. The paradox announces that nothing is what it seems. The alliteration of 'f' sounds creates sinister atmosphere. Macbeth later echoes this unconsciously."
                  />
                  <QuoteCompact
                    text="When the battle's lost and won"
                    speaker="Second Witch"
                    act="Act 1, Scene 1"
                    themes={['Fate vs Free Will', 'Appearance vs Reality']}
                    analysis="A paradox: every battle is simultaneously lost and won depending on perspective. Establishes moral ambiguity and the witches' role in blurring boundaries between opposites."
                  />
                  <QuoteCompact
                    text="All hail, Macbeth, that shalt be king hereafter!"
                    speaker="Third Witch"
                    act="Act 1, Scene 3"
                    themes={['Fate vs Free Will', 'Ambition']}
                    analysis="The prophecy that ignites the plot. They say he SHALL be king -- not that he must kill. The prophecy is a catalyst, not an instruction, which is key to the fate vs free will debate."
                  />
                  <QuoteCompact
                    text="Double, double toil and trouble; / Fire burn and cauldron bubble"
                    speaker="The Witches"
                    act="Act 4, Scene 1"
                    themes={['Supernatural']}
                    analysis="Trochaic rhythm (opposite of normal speech) marks the witches as Other. 'Double' suggests duplication and deception. The grotesque ingredients emphasise the unnatural."
                  />
                  <QuoteCompact
                    text="By the pricking of my thumbs, / Something wicked this way comes"
                    speaker="Second Witch"
                    act="Act 4, Scene 1"
                    themes={['Supernatural', 'Power']}
                    analysis="Even the witches call Macbeth 'wicked' -- he has descended below their moral level. He comes voluntarily now, seeking evil rather than being sought. A crucial shift in his agency and moral status."
                  />
                </div>
              </SubSection>

              <SubSection id="quotes-banquo" title={`${pick(CHAR_BANQUO.title, locale)} (3)`}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence"
                    speaker="Banquo"
                    act="Act 1, Scene 3"
                    themes={['Loyalty & Betrayal', 'Supernatural']}
                    analysis="Banquo warns the witches use small truths to lure victims into larger traps. He is exactly right, but Macbeth ignores this wisdom. Shows Banquo's moral clarity as a foil."
                  />
                  <QuoteCompact
                    text="Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't"
                    speaker="Banquo"
                    act="Act 3, Scene 1"
                    themes={['Loyalty & Betrayal', 'Ambition']}
                    analysis="Banquo suspects Macbeth but does not act -- possibly because the prophecy benefits his own line. The tricolon shows careful tracking. 'Most foully' is a direct private accusation."
                  />
                  <QuoteCompact
                    text="Merciful powers, / Restrain in me the cursed thoughts that nature / Gives way to in repose"
                    speaker="Banquo"
                    act="Act 2, Scene 1"
                    themes={['Fate vs Free Will', 'Supernatural']}
                    analysis="Banquo prays to resist the witches' temptation. He admits to 'cursed thoughts' but chooses to fight them -- making him a moral contrast to Macbeth, who yields to temptation."
                  />
                </div>
              </SubSection>

              <SubSection id="quotes-macduff" title={`${pick(CHAR_MACDUFF.title, locale)} (3)`}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!"
                    speaker="Macduff"
                    act="Act 2, Scene 3"
                    themes={['Loyalty & Betrayal']}
                    analysis="Triple repetition of 'horror' shows overwhelming shock at discovering Duncan's body. The crime is beyond speech and comprehension. His genuine emotion contrasts with Macbeth's performed grief."
                  />
                  <QuoteCompact
                    text="I shall do so; / But I must also feel it as a man"
                    speaker="Macduff"
                    act="Act 4, Scene 3"
                    themes={['Gender']}
                    analysis="Macduff redefines masculinity to include emotional depth. Unlike Macbeth, who equates manhood with violence, Macduff sees feeling grief as manly. The play's most important statement on gender."
                  />
                  <QuoteCompact
                    text="Bleed, bleed, poor country!"
                    speaker="Macduff"
                    act="Act 4, Scene 3"
                    themes={['Power', 'Loyalty & Betrayal']}
                    analysis="Scotland personified as a bleeding body under tyranny. Connects to blood imagery but reframes it: now the country bleeds, not just individuals. Shows patriotic distress."
                  />
                </div>
              </SubSection>

              <SubSection id="quotes-duncan" title={`${pick(CHAR_DUNCAN.title, locale)} (3)`}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="There's no art / To find the mind's construction in the face"
                    speaker="Duncan"
                    act="Act 1, Scene 4"
                    themes={['Appearance vs Reality']}
                    analysis="Deeply ironic: he says this about the first Cawdor's betrayal just as the second Cawdor (Macbeth) enters plotting his murder. Duncan's fatal naivety repeated."
                  />
                  <QuoteCompact
                    text="This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself"
                    speaker="Duncan"
                    act="Act 1, Scene 6"
                    themes={['Appearance vs Reality']}
                    analysis="Duncan praises the castle where he will be murdered. Excruciating irony: 'pleasant' air contrasts with the 'fog and filthy air' of the witches. The appearance of safety masks deadly reality."
                  />
                  <QuoteCompact
                    text="He was a gentleman on whom I built / An absolute trust"
                    speaker="Duncan"
                    act="Act 1, Scene 4"
                    themes={['Loyalty & Betrayal', 'Appearance vs Reality']}
                    analysis="Said about the traitorous first Cawdor, but Macbeth (the new Cawdor) enters immediately after. Duncan's 'absolute trust' is his fatal flaw. Dramatic irony at its most devastating."
                  />
                </div>
              </SubSection>

              <SubSection
                id="quotes-other"
                title={locale === 'ar' ? 'شخصيات أخرى (3)' : 'Other Characters (3 quotes)'}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact
                    text="A falcon, towering in her pride of place, / Was by a mousing owl hawk'd at and kill'd"
                    speaker="Old Man"
                    act="Act 2, Scene 4"
                    themes={['Power', 'Supernatural']}
                    analysis="An unnatural event reflecting the murder: a lowly owl killing a noble falcon mirrors the thane killing his king. Disruption of natural hierarchy reflects the Great Chain of Being -- regicide throws nature into chaos."
                  />
                  <QuoteCompact
                    text="Alas, poor country! / Almost afraid to know itself"
                    speaker="Ross"
                    act="Act 4, Scene 3"
                    themes={['Power']}
                    analysis="Scotland personified as too frightened to examine its own state under Macbeth's tyranny. 'Afraid to know itself' suggests collective trauma and national identity crisis."
                  />
                  <QuoteCompact
                    text="Men must not walk too late"
                    speaker="Lennox"
                    act="Act 3, Scene 6"
                    themes={['Power', 'Appearance vs Reality']}
                    analysis="Lennox's ironic commentary: people who question Macbeth end up dead. The understatement masks a damning accusation. He must speak in code because open criticism would be fatal."
                  />
                </div>
              </SubSection>

              {/* By Theme cross-reference */}
              <h3 className="font-bold text-foreground text-base border-b border-border pb-2 mt-8">
                {p(QUOTES_CROSS)}
              </h3>
              <div className="rounded-lg border border-border bg-muted p-4 overflow-x-auto">
                <p className="text-sm text-muted-foreground mb-3">{p(QUOTES_CROSS_INTRO)}</p>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 font-bold text-foreground">{p(QUOTES_COL_THEME)}</th>
                      <th className="py-2 font-bold text-foreground">{p(QUOTES_COL_LIST)}</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-red-700 dark:text-red-300 whitespace-nowrap">
                        {p(THEME_AMBITION.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;Vaulting ambition, which o&apos;erleaps itself&rdquo; &bull;
                        &ldquo;Stars, hide your fires&rdquo; &bull; &ldquo;Art not without ambition,
                        but without the illness&rdquo; &bull; &ldquo;All hail, Macbeth, that shalt
                        be king&rdquo; &bull; &ldquo;Tomorrow, and tomorrow&rdquo;
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-amber-700 whitespace-nowrap">
                        {p(THEME_POWER.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;To be thus is nothing, but to be safely thus&rdquo; &bull;
                        &ldquo;Full of scorpions is my mind&rdquo; &bull; &ldquo;I am in blood
                        stepp&apos;d in so far&rdquo; &bull; &ldquo;Bleed, bleed, poor
                        country&rdquo; &bull; &ldquo;Something wicked this way comes&rdquo;
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-indigo-700 whitespace-nowrap">
                        {p(THEME_GUILT.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;Will all great Neptune&apos;s ocean wash this blood?&rdquo; &bull;
                        &ldquo;Macbeth does murder sleep&rdquo; &bull; &ldquo;Out, damned
                        spot!&rdquo; &bull; &ldquo;All the perfumes of Arabia&rdquo; &bull; &ldquo;A
                        little water clears us&rdquo; &bull; &ldquo;Had he not resembled my
                        father&rdquo;
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-violet-700 dark:text-violet-300 whitespace-nowrap">
                        {p(THEME_SUPERNATURAL.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;Fair is foul, and foul is fair&rdquo; &bull; &ldquo;Is this a
                        dagger?&rdquo; &bull; &ldquo;Come, you spirits, unsex me here&rdquo; &bull;
                        &ldquo;Double, double toil and trouble&rdquo; &bull; &ldquo;So foul and fair
                        a day&rdquo;
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap">
                        {p(THEME_GENDER.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;When you durst do it, then you were a man&rdquo; &bull; &ldquo;Unsex
                        me here&rdquo; &bull; &ldquo;Take my milk for gall&rdquo; &bull; &ldquo;I
                        must also feel it as a man&rdquo; &bull; &ldquo;I dare do all that may
                        become a man&rdquo;
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-teal-700 whitespace-nowrap">
                        {p(THEME_LOYALTY.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;He&apos;s here in double trust&rdquo; &bull; &ldquo;Instruments of
                        darkness tell us truths&rdquo; &bull; &ldquo;Thou play&apos;dst most
                        foully&rdquo; &bull; &ldquo;An absolute trust&rdquo; &bull; &ldquo;O horror,
                        horror, horror!&rdquo;
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-pink-700 dark:text-pink-300 whitespace-nowrap">
                        {p(THEME_FATE.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;If chance will have me king&rdquo; &bull; &ldquo;Come what come
                        may&rdquo; &bull; &ldquo;All hail, Macbeth, that shalt be king&rdquo; &bull;
                        &ldquo;When the battle&apos;s lost and won&rdquo; &bull; &ldquo;Restrain in
                        me the cursed thoughts&rdquo;
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-muted-foreground whitespace-nowrap">
                        {p(THEME_APPEARANCE.title)}
                      </td>
                      <td className="py-2">
                        &ldquo;Fair is foul&rdquo; &bull; &ldquo;Look like the innocent
                        flower&rdquo; &bull; &ldquo;No art to find the mind&apos;s
                        construction&rdquo; &bull; &ldquo;So foul and fair a day&rdquo; &bull;
                        &ldquo;A little water clears us&rdquo; &bull; &ldquo;Stars, hide your
                        fires&rdquo;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title={p(SECTION_CONTEXT_TITLE)} colour="bg-cyan-600">
            <div className="space-y-6">
              {[
                CTX_JAMES1,
                CTX_GUNPOWDER,
                CTX_DIVINE_RIGHT,
                CTX_CHAIN,
                CTX_WITCHCRAFT,
                CTX_GENDER_JACOBEAN,
              ].map((ctx, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground">{p(ctx.title)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p(ctx.body)}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section
            id="essay-planning"
            title={p(SECTION_ESSAY_TITLE)}
            badge={p(SECTION_ESSAY_BADGE)}
            colour="bg-orange-600"
          >
            <p className="text-sm text-muted-foreground mb-4">{p(ESSAY_INTRO)}</p>
            <div className="space-y-6">
              {[
                { id: 'essay-ambition', q: ESSAY_AMBITION },
                { id: 'essay-guilt', q: ESSAY_GUILT },
                { id: 'essay-supernatural', q: ESSAY_SUPERNATURAL },
                { id: 'essay-masculinity', q: ESSAY_MASCULINITY },
                { id: 'essay-ladymacbeth', q: ESSAY_LADYMACBETH },
              ].map((e) => (
                <SubSection key={e.id} id={e.id} title={p(e.q.title)}>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    {e.q.paragraphs.map((par, i) => (
                      <div key={i} className="rounded bg-muted p-3">
                        <p className="font-semibold text-foreground">{p(par.heading)}</p>
                        <p>{p(par.body)}</p>
                      </div>
                    ))}
                  </div>
                </SubSection>
              ))}
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── WRITER'S METHODS */}
        <div id="writers-methods">
          <Section
            id="methods"
            title={p(SECTION_METHODS_TITLE)}
            badge={p(SECTION_METHODS_BADGE)}
            colour="bg-teal-600"
          >
            <div className="space-y-6">
              {[
                { id: 'method-soliloquy', m: METHOD_SOLILOQUY },
                { id: 'method-imagery', m: METHOD_BLOOD },
                { id: 'method-dramatic-irony', m: METHOD_IRONY },
                { id: 'method-pathetic-fallacy', m: METHOD_PATHETIC },
                { id: 'method-equivocation', m: METHOD_EQUIVOCATION },
                { id: 'method-five-act', m: METHOD_FIVE_ACT },
                { id: 'method-antithesis', m: METHOD_ANTITHESIS },
                { id: 'method-supernatural', m: METHOD_SUPERNATURAL_DEVICE },
                { id: 'method-iambic', m: METHOD_IAMBIC },
                { id: 'method-stagecraft', m: METHOD_STAGECRAFT },
              ].map((mm) => (
                <SubSection key={mm.id} id={mm.id} title={p(mm.m.title)}>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p(mm.m.body)}</p>
                </SubSection>
              ))}
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── GRADE 9 POINTS */}
        <div id="grade-9">
          <Section
            id="grade-9"
            title={p(SECTION_GRADE9_TITLE)}
            badge={p(SECTION_GRADE9_BADGE)}
            colour="bg-amber-600"
          >
            <p className="text-sm text-muted-foreground mb-4">{p(GRADE9_INTRO)}</p>
            <div className="space-y-6">
              {[
                { id: 'g9-witches-agency', g: G9_WITCHES, defaultOpen: true },
                { id: 'g9-lady-macbeth-feminism', g: G9_LADYMACBETH_PERFORMANCE },
                { id: 'g9-macbeth-tragic-hero', g: G9_TRAGIC_HERO },
                { id: 'g9-duncan-ideal', g: G9_DUNCAN },
                { id: 'g9-tomorrow', g: G9_TOMORROW },
                { id: 'g9-regicide', g: G9_REGICIDE },
                { id: 'g9-macduff-counterpart', g: G9_MACDUFF },
                { id: 'g9-play-james', g: G9_PROPAGANDA },
              ].map((gg) => (
                <SubSection
                  key={gg.id}
                  id={gg.id}
                  title={p(gg.g.title)}
                  defaultOpen={gg.defaultOpen}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{p(gg.g.body)}</p>
                </SubSection>
              ))}
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section
            id="practice"
            title={p(SECTION_PRACTICE_TITLE)}
            badge={p(SECTION_PRACTICE_BADGE)}
            colour="bg-primary"
          >
            <p className="text-sm text-muted-foreground mb-6">{p(PRACTICE_INTRO)}</p>
            <div className="space-y-8">
              {PRACTICE_Q.map((q, i) => {
                const topics = [
                  'Macbeth - How Shakespeare presents the theme of ambition across the play',
                  'Macbeth - How Shakespeare uses Lady Macbeth to explore the theme of guilt',
                  'Macbeth - How Shakespeare presents the supernatural including the witches and other elements',
                  'Macbeth - How Shakespeare presents the changing relationship between Macbeth and Lady Macbeth',
                ]
                return (
                  <div key={i} className="rounded-lg border border-border p-4">
                    <h3 className="font-bold text-foreground mb-1">{p(q.title)}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {p(q.body)}
                      <span className="ml-2 text-xs font-semibold text-muted-foreground">
                        {p(PRACTICE_MARKS)}
                      </span>
                    </p>
                    <AITextArea
                      placeholder={p(PRACTICE_PLACEHOLDER)}
                      label={p(PRACTICE_LABEL)}
                      subject="English Literature"
                      topic={topics[i] ?? topics[0]}
                      minWords={150}
                      maxWords={800}
                      rows={10}
                    />
                  </div>
                )
              })}
            </div>
          </Section>
        </div>

        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          {p(FOOTER_COPYRIGHT)}
        </p>
      </div>
    </div>
  )
}
