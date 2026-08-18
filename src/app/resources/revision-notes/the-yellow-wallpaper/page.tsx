'use client'

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
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">{speaker}</p>}
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

export default function YellowWallpaperPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Short Story
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel IGCSE
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Prose Anthology
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Yellow Wallpaper: Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Charlotte Perkins Gilman, 1892</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need to revise Gilman&apos;s pioneering story of a woman confined by a
          &ldquo;rest cure&rdquo;: a stage-by-stage plot summary, character profiles, themes with
          evidence, key quotations with analysis, 1890s context, the writer&apos;s techniques, and
          exam-style questions with planning notes.
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
            'Techniques',
            'Context',
            'Key Quotations',
            'Exam Questions',
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
          <Section title="Stage-by-Stage Plot Summary" icon="📖" defaultOpen>
            <p className="text-sm text-muted-foreground mb-4 italic">
              The story is told as a sequence of secret journal entries written over a summer. The
              stages below group those entries into five phases of the narrator&apos;s decline.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Arrival at the Colonial Mansion
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The unnamed narrator and her husband John, a physician, rent an isolated colonial
                  mansion for the summer while their own house is repaired. The narrator half-jokes
                  that the house feels like a &ldquo;haunted house.&rdquo; She has recently had a
                  baby and is suffering from what John diagnoses as a &ldquo;temporary nervous
                  depression, a slight hysterical tendency.&rdquo; His prescribed treatment is total
                  rest: she is forbidden to work, and above all forbidden to write. She disagrees
                  (she believes &ldquo;congenial work, with excitement and change&rdquo; would do
                  her good) but has no power to refuse, so she writes her journal in secret. John
                  installs her not in the pretty downstairs room she wanted but in a large upstairs
                  room, a former nursery with barred windows, a nailed-down bed, and torn,
                  garish-yellow wallpaper that she immediately hates.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The secret journal begins: writing itself is an act of defiance</li>
                    <li>
                      &bull; John &ldquo;laughs at&rdquo; her fancies: dismissal disguised as
                      affection
                    </li>
                    <li>
                      &bull; The nursery with barred windows: the prison imagery is planted early
                    </li>
                    <li>&bull; First description of the wallpaper as repellent and unclean</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Growing Fixation on the Wallpaper
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Weeks pass. The narrator is lonely and unstimulated: John is often away with
                  patients, and his sister Jennie, a &ldquo;perfect and enthusiastic
                  housekeeper,&rdquo; manages the house and watches over her. Writing in secret
                  exhausts her. With nothing else to occupy her mind, she begins to study the
                  wallpaper&apos;s impossible pattern, which seems to defy every rule of design. She
                  starts to perceive a &ldquo;sub-pattern&rdquo; beneath the surface: a dim shape
                  that skulks behind the front design. When she asks to leave, or at least to have
                  the paper changed, John refuses, warning that giving in to her fancies would make
                  them worse, and threatens to send her to Weir Mitchell, the real-life doctor
                  famous for the rest cure, if she does not improve faster.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The threat of Weir Mitchell: Gilman names her own real doctor</li>
                    <li>&bull; The sub-pattern first appears: a figure behind the design</li>
                    <li>
                      &bull; John addresses her as &ldquo;little girl&rdquo; and &ldquo;blessed
                      little goose&rdquo;: infantilising language
                    </li>
                    <li>
                      &bull; Her pleas to leave the house are overruled &ldquo;for her own
                      good&rdquo;
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  The Woman Behind the Pattern
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The fixation becomes obsession. By moonlight the outer pattern visibly
                  &ldquo;becomes bars,&rdquo; and the shape behind it resolves into a woman, or many
                  women, stooping and creeping behind them, shaking the pattern as if trying to get
                  out. The narrator now sleeps during the day and watches the paper at night. Her
                  relationship with the household inverts: she becomes secretive, suspicious that
                  John and Jennie are also studying the paper, and oddly possessive of it, deciding
                  that nobody else may discover its secret. The room develops a pervasive yellow
                  smell, and she notices a long low smear or &ldquo;smooch&rdquo; running round the
                  wall, as if something has rubbed against it again and again.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; &ldquo;It becomes bars!&rdquo;: the pattern is now openly a prison
                    </li>
                    <li>&bull; The trapped woman shakes the bars: the narrator&apos;s double</li>
                    <li>&bull; Day and night reversed: her secret life happens after dark</li>
                    <li>&bull; Paranoia spreads to John and Jennie</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Creeping Women Everywhere
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The narrator becomes convinced the woman escapes from the paper by daylight: she
                  sees her creeping in the garden, along the lane, under the trees. She identifies
                  with her completely, admitting that she too creeps, but only behind a locked door
                  (&ldquo;I always lock the door when I creep by daylight&rdquo;). As the
                  family&apos;s final days in the house approach, she resolves to free the trapped
                  woman before anyone can stop her. On the last night, as the moon rises, she begins
                  peeling the wallpaper from the walls, and the woman behind it seems to help her.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The boundary between narrator and wallpaper-woman dissolves</li>
                    <li>
                      &bull; The deadline of departure creates the story&apos;s only time pressure
                    </li>
                    <li>&bull; The shared peeling of the paper: hallucination as collaboration</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  The Final Day
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  On the last day the narrator locks herself in the room, throws the key down onto
                  the path by the front door, and strips off most of the remaining paper. By now the
                  narrating voice has fused with the woman from the wallpaper: she creeps around and
                  around the room, her shoulder fitting into the long smooch on the wall. When John
                  finally gets the door open, she announces that she has got out at last &ldquo;in
                  spite of you and Jane,&rdquo; and that she has pulled off most of the paper so she
                  cannot be put back. John faints, and she is left creeping in circles over her
                  unconscious husband&apos;s body. The triumph is real and horrifying at once: she
                  has escaped his control, but only by escaping her own sanity.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The mysterious &ldquo;Jane&rdquo;: possibly the narrator&apos;s own
                      name, naming the self she has escaped
                    </li>
                    <li>&bull; John&apos;s faint: the patriarch collapses in a feminine swoon</li>
                    <li>
                      &bull; The final image: creeping over John, both victory and total breakdown
                    </li>
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
                name="The Narrator"
                description="An unnamed young wife, mother and writer (the final line may name her as 'Jane', a famous ambiguity). She is intelligent, imaginative and observant, and her journal voice is initially witty and self-deprecating. Forbidden any work or stimulation, her imagination has nowhere to go but the wallpaper, and the story charts her slide from irritation, to fascination, to obsession, to psychosis. Crucially, she is also a reliable reporter of unreliable perceptions: readers can track the real situation (isolation, infantilisation, suppressed anger) through what she innocently records. Her descent can be read simultaneously as a breakdown and as a rebellion: the one identity left to her, the madwoman, is the only one that disobeys."
              />
              <CharacterCard
                name="John"
                description="The narrator's husband and physician, and the story's antagonist, though never a cartoon villain. John is rational, practical and 'careful and loving' by his own lights: he genuinely believes the rest cure is correct. Gilman's critique is aimed at the system he embodies: the marriage of medical authority to male authority, so that a husband's word is literally a doctor's order. He laughs at his wife's ideas, calls her 'little girl', overrules her requests, and treats her writing as a symptom. His fainting at the end is a pointed reversal: the embodiment of reason collapses when confronted with what his treatment has produced."
              />
              <CharacterCard
                name="Jennie"
                description="John's sister and the house's keeper. Jennie is kind but entirely conventional: the narrator notes she 'thinks it is the writing' that made her sick. She represents the ideal domestic woman of the period, content with housework, and so functions as a foil: the woman who fits the role the narrator cannot fit. She is also part of the surveillance apparatus, watching the narrator on John's behalf, which feeds the narrator's later paranoia."
              />
              <CharacterCard
                name="The Woman in the Wallpaper"
                description="The figure the narrator comes to see trapped behind the wallpaper's pattern: stooping, creeping, and shaking the bars by night. She is best read as the narrator's double, a projection of her own trapped self, and by extension of all women confined by the domestic 'pattern'. The multiplication of the figure (sometimes many women, creeping in the garden and the lane) widens the symbol from one marriage to a whole society. When the narrator finally tears the paper to free her, rescuer and prisoner merge into one creeping figure."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Patriarchal Control and Medicine"
                description="The story's central indictment is of a system in which a woman's husband and her doctor are the same voice. John controls where the narrator lives, what room she sleeps in, who she sees, and whether she may write; every act of control is presented as care. The 'rest cure' makes medicine the enforcement arm of domestic ideology: the prescription is, in effect, to be a perfect passive wife. Gilman shows that the narrator is not driven mad despite the treatment but by it."
              />
              <ThemeCard
                title="Madness as Descent and Escape"
                description="Gilman structures the story as a gradual, internally logical descent: every entry is slightly less sane than the last, and the narrator never notices the change. This makes the reader do the diagnosing, which is the story's masterstroke. Yet the ending complicates pity: in madness the narrator finally disobeys, locks the door, destroys the room's 'pattern' and crawls over her husband. Madness is both the cost of her confinement and the only escape route left open."
              />
              <ThemeCard
                title="Confinement and the Domestic Prison"
                description="The setting is a cascade of enclosures: an isolated estate, a locked house, an upstairs room, barred windows, a nailed-down bed, and finally the pattern of the wallpaper itself. The former nursery is pointed: the room built to contain children now contains a wife who is treated as one. The creeping woman behind bars literalises the metaphor. Even the 'beautiful' garden is only seen through the barred window, framing freedom as something visible but unreachable."
              />
              <ThemeCard
                title="Writing, Voice and Silencing"
                description="The narrator is a writer forbidden to write; the text we read is her crime. Her journal is the one space where she can 'say what I feel and think', and Gilman makes us feel how much effort the secrecy costs her. The story argues that self-expression is not a luxury but a necessity: denied a pen, the narrator's interpretive energy turns on the wallpaper and reads it instead. The final fusion with the wallpaper-woman happens only after the journal voice has been fully displaced by the obsession."
              />
              <ThemeCard
                title="The Double and the Gothic"
                description="Gilman recycles Gothic machinery (the ancestral mansion, the locked room, the madwoman) but relocates the horror from the supernatural to the marital. The wallpaper-woman is a classic doppelganger: the narrator's repressed self made visible. As in the best Gothic, the haunting is a return of the repressed: everything the narrator may not say or do creeps back as the figure behind the pattern."
              />
              <ThemeCard
                title="Motherhood and the 'Hysterical' Woman"
                description="The narrator has a new baby she barely mentions and cannot care for, and feels guilt about it. Modern readers usually recognise postnatal depression; the 1890s offered only the labels 'nervous depression' and 'hysteria', diagnoses applied almost exclusively to women. The story exposes the circularity of the diagnosis: any female distress proves the weakness the diagnosis assumes, and any protest against the cure proves the patient needs more of it."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── TECHNIQUES */}
        <div id="techniques">
          <Section title="Writer's Techniques" icon="✒️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">First-Person Journal Form</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The story is a sequence of secret diary entries written in the present tense,
                  giving the reader unmediated access to a mind in decline. There is no
                  retrospective narrator to reassure us: each entry knows only what the narrator
                  knows at that moment. The gaps between entries do structural work too, as the
                  narrator deteriorates in the white space between sections (AO2: form as meaning).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Unreliable Narrator</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Gilman engineers a precise gap between what the narrator reports and what the
                  reader understands. When the narrator describes the &ldquo;smooch&rdquo; on the
                  wall or the gnawed bedstead, readers gradually realise she is describing her own
                  past behaviour. Top answers track this gap and show where it widens: the moment we
                  understand more than the voice telling us the story is the moment the horror
                  lands.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Fragmented Syntax and Short Paragraphs</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Much of the story is written in one- or two-sentence paragraphs, mimicking
                  snatched, secret writing and an increasingly associative mind. Exclamations,
                  dashes of thought and abrupt topic changes increase as the story progresses, so
                  that the prose itself performs the breakdown. Compare an early, balanced sentence
                  with a late staccato one to evidence the decline (AO2: sentence-level analysis).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Symbolism of the Wallpaper</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The wallpaper is the most analysed symbol in American short fiction: a domestic
                  decoration that becomes a text, a prison, and a mirror. Its surface pattern
                  (convention, the rules of feminine behaviour) imprisons the figure beneath (the
                  woman&apos;s self). Its yellow is described in terms of sickness and uncleanness;
                  its smell invades the whole house. The narrator&apos;s progression from reading
                  the paper, to watching it, to tearing it down maps her relationship to the role it
                  represents.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Irony</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The story runs on sustained dramatic irony: the cure causes the disease; the
                  loving husband is the jailer; the nursery infantilises a grown woman; the
                  physician cannot see the illness developing in front of him. The final line
                  (&ldquo;Now why should that man have fainted?&rdquo;) is the irony&apos;s
                  end-point: the narrator can no longer interpret the most obvious human behaviour,
                  yet John&apos;s faint is also the story&apos;s one honest reaction.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Literary Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Gilman&apos;s Own Rest Cure</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  After the birth of her daughter in 1885, Charlotte Perkins Gilman suffered a
                  severe depression and was treated in 1887 by Dr Silas Weir Mitchell, the
                  celebrated inventor of the &ldquo;rest cure&rdquo;: enforced bed rest, isolation,
                  overfeeding, and a ban on intellectual work. Gilman later wrote that following the
                  regime brought her &ldquo;near the borderline of utter mental ruin,&rdquo; and
                  that she recovered only by abandoning it and returning to work. The story names
                  Weir Mitchell directly, and in her 1913 essay &ldquo;Why I Wrote The Yellow
                  Wallpaper&rdquo; Gilman said the story &ldquo;was not intended to drive people
                  crazy, but to save people from being driven crazy.&rdquo; She sent Mitchell a
                  copy.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Women, Marriage and Medicine in the 1890s
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In late nineteenth-century America a married woman&apos;s legal and economic
                  identity was largely absorbed into her husband&apos;s, and medicine reinforced the
                  arrangement: diagnoses such as &ldquo;hysteria&rdquo; and
                  &ldquo;neurasthenia&rdquo; treated female ambition, intellect and distress as
                  symptoms. Rest, domesticity and obedience were prescribed; stimulation, education
                  and work were warned against. The story dramatises this world view from inside:
                  every deprivation John imposes was orthodox medical advice.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Publication and Reception</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The story was published in the New England Magazine in January 1892, and was read
                  for decades mainly as a Poe-like horror tale. It was rediscovered by feminist
                  critics in the 1970s (the Feminist Press reissued it in 1973) and is now a
                  foundational text of feminist literary criticism. Sandra Gilbert and Susan
                  Gubar&apos;s study The Madwoman in the Attic (1979) takes its title from the same
                  figure the story explores: the confined woman whose rage surfaces as madness.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Gothic Tradition</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Gilman writes knowingly inside the Gothic: an old isolated mansion, a locked upper
                  room, a haunted atmosphere, a woman in peril. The innovation is that nothing
                  supernatural occurs; the &ldquo;ghost&rdquo; is produced entirely by a sane social
                  arrangement. Comparisons with Bertha Mason in Jane Eyre (the original madwoman in
                  the attic) and with Poe&apos;s unreliable narrators earn AO3 credit when linked to
                  specific moments in the text.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The story is in the public domain, so learn these word-for-word. Pair each quotation
              with a technique (AO2) and a theme.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="John laughs at me, of course, but one expects that in marriage."
                speaker="The narrator, opening entry"
                analysis="The throwaway 'of course' and 'one expects' present male mockery as a universal, accepted feature of marriage. The narrator's breezy tone is doing the patriarchy's work for it: she has internalised her own dismissal. A perfect opening quotation for essays on John or on marriage, because the critique arrives disguised as a joke."
              />
              <QuoteCard
                quote="temporary nervous depression, a slight hysterical tendency"
                speaker="John's diagnosis, reported by the narrator"
                analysis="The minimising modifiers 'temporary' and 'slight' shrink the narrator's suffering to something barely worth treating, while 'hysterical' genders it (hysteria was a diagnosis applied to women). Because John is both husband and 'physician of high standing', the label is unanswerable. Note the irony: the trivialising diagnosis licenses a treatment of total control."
              />
              <QuoteCard
                quote="I did write for a while in spite of them; but it does exhaust me, having to be so sly about it."
                speaker="The narrator, opening entry"
                analysis="'In spite of them' establishes writing as resistance from the very first page, and 'sly' shows how a sanctioned activity has been criminalised. The exhaustion is the point: the cost of the cure is the constant labour of concealment. Use this to argue the journal form is not a frame but the story's central conflict."
              />
              <QuoteCard
                quote="The color is repellent, almost revolting; a smouldering unclean yellow"
                speaker="The narrator, first describing the wallpaper"
                analysis="The wallpaper is introduced through disgust imagery: 'repellent', 'revolting', 'unclean'. 'Smouldering' is the key word, suggesting suppressed fire, anger that burns without flame, exactly the narrator's own condition. The colour yellow accumulates associations of sickness and decay as the story proceeds, until even the smell of it fills the house."
              />
              <QuoteCard
                quote="like a woman stooping down and creeping about behind that pattern"
                speaker="The narrator, mid-story"
                analysis="The double's first clear appearance. 'Stooping' and 'creeping' connote humiliation and secrecy: this is not a free woman but one bent under something. The preposition 'behind' matters: the woman is not in the pattern but trapped by it, just as the narrator lives behind the social pattern of the devoted wife."
              />
              <QuoteCard
                quote="At night in any kind of light, in twilight, candlelight, lamplight, and worst of all by moonlight, it becomes bars!"
                speaker="The narrator, watching the paper by night"
                analysis="The listing of light sources shows obsessive, systematic observation: she has tested the pattern in every condition like a researcher. The climax of the list, 'it becomes bars!', converts decoration into prison with one exclamation. From this point the symbol is explicit, and the narrator's project changes from reading the pattern to freeing its prisoner."
              />
              <QuoteCard
                quote="There are things in that paper that nobody knows but me, or ever will."
                speaker="The narrator, as obsession deepens"
                analysis="Possessiveness enters the obsession: the wallpaper has become her private text, the one domain where she has expert authority. The boast is poignant because it is true in a way she cannot see; the 'things in that paper' are her own projected self, which genuinely no one else can know. Useful for theme essays on voice: denied an audience, she becomes the sole reader of her own mind."
              />
              <QuoteCard
                quote="I always lock the door when I creep by daylight."
                speaker="The narrator, late in the story"
                analysis="The quiet horror of the verb: the narrator now creeps too, and has a routine for it. The matter-of-fact tone ('I always') shows how completely the abnormal has been normalised inside her secret life. The locked door reverses its meaning here: earlier others locked her in; now she locks others out, claiming the confinement as her own territory."
              />
              <QuoteCard
                quote="I've got out at last, in spite of you and Jane. And I've pulled off most of the paper, so you can't put me back!"
                speaker="The narrator to John, final scene"
                analysis="The climactic speech fuses narrator and wallpaper-woman: 'got out' refers at once to the paper, the room and the role. 'Jane' is the famous crux: most critics read it as the narrator's own name, so that she announces escape from her sane, obedient self. 'You can't put me back' is triumphant and devastating: the only victory available is one from which there is no return."
              />
              <QuoteCard
                quote="Now why should that man have fainted? But he did, and right across my path by the wall, so that I had to creep over him every time!"
                speaker="The narrator, final lines"
                analysis="John is reduced to 'that man': the husband and physician is no longer even recognised. His faint inverts the gendered script (fainting was the stereotyped female response), while the narrator's annoyance at the obstacle shows total dissociation. The image of her creeping in circles over his body is the story's final tableau: authority unconscious, the madwoman in motion, the cure complete in its failure."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Four practice questions in the style of short-story prose questions. Each plan uses a
              three-paragraph structure: track the whole text, anchor every point in a quotation,
              and name the technique (AO1 selection, AO2 language and structure, AO3 context where
              relevant).
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Gilman present the narrator&apos;s changing state of mind in The
                  Yellow Wallpaper?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue the change is gradual and structural: each journal entry is a step, and
                      the narrator never registers her own decline, so the reader measures it for
                      her.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The early voice: witty, balanced, self-aware (&ldquo;John laughs at me, of
                      course&rdquo;). Establish the baseline so change can be measured. Note the
                      secret writing as the first symptom of a divided life.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The middle: obsession organising itself as method (the list of lights ending
                      &ldquo;it becomes bars!&rdquo;). Show AO2 evidence of fragmenting syntax,
                      exclamations, and reversed sleep. The wallpaper changes from object to text to
                      mirror.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The ending: fusion with the double (&ldquo;I&apos;ve got out at last&rdquo;)
                      and the failure to recognise John. Conclude on the irony that the clearest
                      sign of her madness is her new certainty and calm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Gilman present John and his treatment of the narrator?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue John is presented as sincerely loving and completely destructive at
                      once: the target is the system that makes a husband&apos;s care
                      indistinguishable from control.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Authority: the double role of husband and physician; the minimising diagnosis
                      (&ldquo;slight hysterical tendency&rdquo;); decisions about room, visitors and
                      writing all made for her, framed as care.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Language: infantilising endearments (&ldquo;little girl&rdquo;, &ldquo;blessed
                      little goose&rdquo;) and laughter as dismissal. AO2: the narrator reports his
                      speech without protest, so readers feel the suppression she cannot articulate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The ending: John&apos;s faint as ironic reversal, the man of reason
                      collapsing. AO3: link to Weir Mitchell and the rest cure; Gilman&apos;s stated
                      purpose in &ldquo;Why I Wrote The Yellow Wallpaper&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Gilman use the wallpaper itself to create meaning in the story?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Treat the wallpaper as a developing symbol with three phases: object of
                      disgust, text to be deciphered, prison to be torn down. Match each phase to
                      the narrator&apos;s state.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Disgust: the first description (&ldquo;smouldering unclean yellow&rdquo;),
                      sickness imagery, the violated nursery setting. The paper absorbs the
                      revulsion she cannot direct at her situation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Decipherment: the sub-pattern and the woman (&ldquo;stooping down and creeping
                      about&rdquo;); bars by moonlight. The paper becomes a mirror: analyse the
                      doubling and what it lets Gilman show that direct narration could not.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Destruction: peeling the paper as rebellion and breakdown together; the final
                      creeping. Conclude: the symbol works because it is literal (ugly Victorian
                      decor) and figurative (the social pattern) at every stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Gilman create a sense of confinement in The Yellow Wallpaper?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Move from physical to social to psychological confinement, arguing each layer
                      reinforces the others.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Physical: the nested enclosures (estate, house, nursery, bars, nailed bed).
                      AO2: prison lexis and the view of the garden through barred windows.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Social: confinement by schedule, surveillance (Jennie), prohibition of work
                      and company; the threat of Weir Mitchell as a worse prison beyond this one.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Psychological: the pattern as internalised cage; the woman behind bars as
                      double; the ending&apos;s paradox of an escape that is also the deepest
                      confinement. AO3: 1890s marriage and medicine close the circle.
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
          Exam Tips for <em>The Yellow Wallpaper</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Track the decline through the form.</strong> The journal entries are the
              story&apos;s structure: quote an early entry and a late one side by side to prove the
              change in voice (AO2).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Name the narrative situation precisely.</strong> First-person, present-tense,
              unreliable, secret: each adjective earns analysis if you show its effect on the
              reader.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the Weir Mitchell detail for context.</strong> The story names a real
              doctor and dramatises a real treatment Gilman received; this is the most efficient AO3
              point available.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Avoid 'she goes mad' summaries.</strong> Examiners reward analysis of how the
              madness is constructed: the double, the symbol, the irony, the syntax.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Hold the ending&apos;s double meaning.</strong> The strongest essays argue the
              ending is simultaneously a defeat (psychosis) and a victory (the only available
              disobedience), rather than choosing one.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>The Yellow Wallpaper</em> by Charlotte Perkins Gilman (1860&ndash;1935) was first
          published in the New England Magazine in January 1892 and is in the{' '}
          <strong>public domain</strong>. Quotations follow the standard published text.
        </p>
      </footer>
    </>
  )
}
