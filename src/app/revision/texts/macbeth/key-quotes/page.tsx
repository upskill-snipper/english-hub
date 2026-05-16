'use client'

import Link from 'next/link'
import { ArrowLeft, Quote, Lightbulb, BookOpen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
// ── Quote data ────────────────────────────────────────────────────────────────

type KeyQuote = {
  quote: string
  speaker: string
  actScene: string
  analysis: string
  themes: string[]
}

type ActQuotes = {
  act: string
  label: string
  colour: string
  quotes: KeyQuote[]
}

const QUOTES_BY_ACT: ActQuotes[] = [
  {
    act: 'Act 1',
    label: 'Exposition & Temptation',
    colour: 'bg-violet-400',
    quotes: [
      {
        quote: 'Fair is foul, and foul is fair.',
        speaker: 'The Witches',
        actScene: 'Act 1, Scene 1',
        analysis:
          "The play's opening paradox establishes moral inversion as the governing principle. The chiasmus (reversed grammatical structure) mirrors the topsy-turvy world the witches inhabit and foreshadows the deception and equivocation that drives the entire plot.",
        themes: ['Appearance vs Reality', 'Supernatural & Fate'],
      },
      {
        quote: 'So foul and fair a day I have not seen.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 3',
        analysis:
          "Macbeth's first words in the play unconsciously echo the witches' chant. Before he even meets them, his language is aligned with theirs, suggesting a pre-existing connection to darkness and moral ambiguity.",
        themes: ['Supernatural & Fate', 'Appearance vs Reality'],
      },
      {
        quote:
          "The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.",
        speaker: 'Banquo',
        actScene: 'Act 1, Scene 3',
        analysis:
          "Banquo recognises the witches' strategy: small verifiable truths build trust before the truly destructive prophecy. This demonstrates Banquo's moral clarity and serves as a warning Macbeth tragically ignores.",
        themes: ['Supernatural & Fate', 'Appearance vs Reality', 'Loyalty & Betrayal'],
      },
      {
        quote: 'Stars, hide your fires; / Let not light see my black and deep desires.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 4',
        analysis:
          'Macbeth asks heaven to look away while he pursues murder. The light/dark opposition externalises his inner conflict. The rhyming couplet gives the aside a spell-like decisiveness, as though speaking the words commits him.',
        themes: ['Ambition', 'Appearance vs Reality'],
      },
      {
        quote: "There's no art / To find the mind's construction in the face.",
        speaker: 'King Duncan',
        actScene: 'Act 1, Scene 4',
        analysis:
          "Duncan observes that appearances deceive at the exact moment he places trust in Macbeth. The dramatic irony is devastating: he has learned nothing from the previous Cawdor's betrayal.",
        themes: ['Appearance vs Reality', 'Loyalty & Betrayal', 'Kingship & Tyranny'],
      },
      {
        quote: "Yet do I fear thy nature; / It is too full o' th' milk of human kindness.",
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 5',
        analysis:
          'The "milk" metaphor associates kindness with femininity and nurturing. Lady Macbeth sees her husband\'s conscience as weakness. Ironically, her complaint reveals she understands his fundamental decency -- she must actively corrupt it.',
        themes: ['Masculinity & Power', 'Ambition'],
      },
      {
        quote:
          'Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 5',
        analysis:
          'Lady Macbeth demands the removal of femininity to participate in murder. The request to be filled with cruelty parallels demonic possession. Her need to invoke spirits proves that ruthlessness does not come naturally to her.',
        themes: ['Masculinity & Power', 'Supernatural & Fate', 'Nature & the Unnatural'],
      },
      {
        quote: "Look like th' innocent flower, / But be the serpent under't.",
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 5',
        analysis:
          "The biblical serpent allusion casts the Macbeths as agents of the devil. This compact instruction encapsulates the entire play's central theme of deception beneath a composed surface.",
        themes: ['Appearance vs Reality', 'Loyalty & Betrayal'],
      },
      {
        quote:
          "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on the other.",
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'The horse-riding metaphor imagines ambition as a rider who overreaches and falls. Macbeth identifies ambition as his sole motive and diagnoses his own destruction -- yet proceeds anyway.',
        themes: ['Ambition'],
      },
      {
        quote:
          'When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          "Lady Macbeth redefines masculinity as willingness to commit violence, shaming Macbeth into murder. This weaponisation of gender expectations is central to the play's exploration of toxic masculinity.",
        themes: ['Masculinity & Power', 'Ambition'],
      },
      {
        quote: 'I dare do all that may become a man; / Who dares do more is none.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'Macbeth offers a nobler definition: true manhood has moral limits, and exceeding them makes one less than human. Tragically, he abandons this principled position within minutes.',
        themes: ['Masculinity & Power'],
      },
      {
        quote: 'False face must hide what the false heart doth know.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'The repeated "false" emphasises total deception. The rhyming couplet gives the line dark resolution. Macbeth has accepted hypocrisy as a necessity.',
        themes: ['Appearance vs Reality'],
      },
    ],
  },
  {
    act: 'Act 2',
    label: 'The Murder',
    colour: 'bg-red-400',
    quotes: [
      {
        quote: 'Is this a dagger which I see before me, / The handle toward my hand?',
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 1',
        analysis:
          "The hallucinated dagger dramatises Macbeth's psychological conflict. Its handle points toward him, suggesting temptation offering itself willingly. The ambiguity -- supernatural omen or guilty projection? -- mirrors the play's central uncertainty.",
        themes: ['Supernatural & Fate', 'Guilt & Conscience'],
      },
      {
        quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?",
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 2',
        analysis:
          'The hyperbole of an entire ocean being insufficient to cleanse his hands conveys the enormity of regicide. This contrasts sharply with Lady Macbeth\'s dismissive "A little water" -- a confidence devastatingly reversed later.',
        themes: ['Guilt & Conscience', 'Violence & Blood'],
      },
      {
        quote: 'A little water clears us of this deed.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 2, Scene 2',
        analysis:
          "Her casual dismissal of guilt will be reversed in the sleepwalking scene. The contrast between this confidence and her later despair is one of the play's most powerful dramatic ironies.",
        themes: ['Guilt & Conscience', 'Appearance vs Reality'],
      },
      {
        quote:
          "Macbeth does murder sleep -- the innocent sleep, / Sleep that knits up the ravell'd sleave of care.",
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 2',
        analysis:
          'Sleep represents innocence and natural order. By murdering the sleeping Duncan, Macbeth has destroyed his own capacity for rest. The personification of sleep as a healer makes its loss devastating.',
        themes: ['Guilt & Conscience', 'Nature & the Unnatural'],
      },
      {
        quote: 'Had I but died an hour before this chance, / I had lived a blessed time.',
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 3',
        analysis:
          "Macbeth performs grief but speaks literal truth: his life after Duncan's murder is indeed cursed. The dramatic irony transforms a public performance into an unconscious confession.",
        themes: ['Appearance vs Reality', 'Guilt & Conscience'],
      },
    ],
  },
  {
    act: 'Act 3',
    label: 'Paranoia & Moral Decline',
    colour: 'bg-amber-400',
    quotes: [
      {
        quote:
          "Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't.",
        speaker: 'Banquo',
        actScene: 'Act 3, Scene 1',
        analysis:
          'Banquo suspects Macbeth but does not act. "Foully" echoes "fair is foul," connecting Macbeth\'s crime to the moral disorder established in the opening scene.',
        themes: ['Loyalty & Betrayal', 'Appearance vs Reality'],
      },
      {
        quote: "Nought's had, all's spent, / Where our desire is got without content.",
        speaker: 'Lady Macbeth',
        actScene: 'Act 3, Scene 2',
        analysis:
          'The rhyming couplet captures the tragic irony: they have achieved everything yet gained nothing of value. The proverbial quality makes it sound like a universal truth about ill-gotten gains.',
        themes: ['Ambition', 'Guilt & Conscience'],
      },
      {
        quote: 'O, full of scorpions is my mind, dear wife!',
        speaker: 'Macbeth',
        actScene: 'Act 3, Scene 2',
        analysis:
          'The metaphor of scorpions conveys poisonous, self-inflicted torment. The endearment "dear wife" makes the confession more intimate and reveals how completely paranoia has consumed his inner life.',
        themes: ['Guilt & Conscience', 'Violence & Blood'],
      },
      {
        quote:
          "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er.",
        speaker: 'Macbeth',
        actScene: 'Act 3, Scene 4',
        analysis:
          'The river-of-blood metaphor imagines guilt as a physical substance. The word "tedious" is chillingly understated: moral recovery has become merely inconvenient. There is a point of no return for evil.',
        themes: ['Guilt & Conscience', 'Violence & Blood'],
      },
      {
        quote: 'It will have blood, they say: blood will have blood.',
        speaker: 'Macbeth',
        actScene: 'Act 3, Scene 4',
        analysis:
          'The proverbial phrasing suggests an immutable law: violence creates an escalating cycle. Macbeth recognises the pattern but cannot escape it.',
        themes: ['Violence & Blood', 'Guilt & Conscience'],
      },
    ],
  },
  {
    act: 'Act 4',
    label: 'Tyranny & Vengeance',
    colour: 'bg-teal-400',
    quotes: [
      {
        quote: 'Double, double toil and trouble; / Fire burn and cauldron bubble.',
        speaker: 'The Witches',
        actScene: 'Act 4, Scene 1',
        analysis:
          'The trochaic tetrameter sets the witches apart from the play\'s standard iambic pentameter. "Double" reinforces the motif of duplicity and equivocation. The grotesque cauldron ingredients symbolise moral corruption.',
        themes: ['Supernatural & Fate', 'Nature & the Unnatural'],
      },
      {
        quote: 'By the pricking of my thumbs, / Something wicked this way comes.',
        speaker: 'Second Witch',
        actScene: 'Act 4, Scene 1',
        analysis:
          'The witch calls Macbeth "something wicked" rather than "someone," stripping him of humanity. Even agents of evil recognise his corruption, marking his total moral degradation.',
        themes: ['Supernatural & Fate', 'Violence & Blood'],
      },
      {
        quote: 'The king-becoming graces: / As justice, verity, temperance, stableness.',
        speaker: 'Malcolm',
        actScene: 'Act 4, Scene 3',
        analysis:
          "Malcolm provides a checklist of royal virtues against which Macbeth's rule fails on every count. This speech defines Shakespeare's ideal of legitimate, virtuous monarchy.",
        themes: ['Kingship & Tyranny'],
      },
      {
        quote: 'I shall do so; / But I must also feel it as a man.',
        speaker: 'Macduff',
        actScene: 'Act 4, Scene 3',
        analysis:
          "Macduff insists that genuine masculinity includes emotional depth and grief. This directly challenges Lady Macbeth's reductive definition and provides the play's most positive model of manhood.",
        themes: ['Masculinity & Power'],
      },
      {
        quote: 'All my pretty ones? / Did you say all? O hell-kite! All?',
        speaker: 'Macduff',
        actScene: 'Act 4, Scene 3',
        analysis:
          'The repetition of "all" and the animal imagery ("hell-kite") reveal raw, uncontrolled grief. The tenderness of "pretty ones" humanises Macduff and makes Macbeth\'s crime monstrous.',
        themes: ['Violence & Blood', 'Masculinity & Power'],
      },
    ],
  },
  {
    act: 'Act 5',
    label: 'Downfall & Restoration',
    colour: 'bg-rose-400',
    quotes: [
      {
        quote: 'Out, damned spot! Out, I say!',
        speaker: 'Lady Macbeth',
        actScene: 'Act 5, Scene 1',
        analysis:
          'Lady Macbeth\'s most famous line occurs during her sleepwalking scene. The blood she once dismissed is now a permanent psychological stain. "Damned" carries religious weight, suggesting she recognises her soul is condemned.',
        themes: ['Guilt & Conscience', 'Violence & Blood'],
      },
      {
        quote:
          "Here's the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand.",
        speaker: 'Lady Macbeth',
        actScene: 'Act 5, Scene 1',
        analysis:
          'This directly inverts Macbeth\'s "Neptune\'s ocean" image. The sensory shift from sight to smell suggests guilt has become even more pervasive. "Little" reveals her as diminished and fragile, no longer the commanding figure of Act 1.',
        themes: ['Guilt & Conscience', 'Violence & Blood', 'Masculinity & Power'],
      },
      {
        quote: "What, will these hands ne'er be clean?",
        speaker: 'Lady Macbeth',
        actScene: 'Act 5, Scene 1',
        analysis:
          'The question reveals her unconscious recognition that guilt is permanent. The hands that once seemed easy to wash now represent indelible moral contamination, connecting to the blood imagery throughout the play.',
        themes: ['Guilt & Conscience', 'Violence & Blood'],
      },
      {
        quote:
          'Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day / To the last syllable of recorded time.',
        speaker: 'Macbeth',
        actScene: 'Act 5, Scene 5',
        analysis:
          'Repetition and monosyllabic diction create a sense of unbearable monotony. "Creeps" and "petty pace" diminish time itself. Having murdered his way to the throne, Macbeth finds the future holds nothing worth living for.',
        themes: ['Ambition', 'Guilt & Conscience'],
      },
      {
        quote:
          "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more.",
        speaker: 'Macbeth',
        actScene: 'Act 5, Scene 5',
        analysis:
          'The theatrical metaphor reduces life to a meaningless performance. The word "poor" conveys both pity and inadequacy. Shakespeare creates a deeply self-aware moment: Macbeth is himself a player on a stage.',
        themes: ['Ambition', 'Guilt & Conscience'],
      },
      {
        quote: 'It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing.',
        speaker: 'Macbeth',
        actScene: 'Act 5, Scene 5',
        analysis:
          'The conclusion of the "Tomorrow" soliloquy dismisses life as meaningless. "Sound and fury" suggests all of Macbeth\'s violence amounted to nothing. "Signifying nothing" is devastating in its finality.',
        themes: ['Ambition'],
      },
      {
        quote: "Macduff was from his mother's womb / Untimely ripp'd.",
        speaker: 'Macduff',
        actScene: 'Act 5, Scene 8',
        analysis:
          'The caesarean birth fulfils the equivocating prophecy. Macduff is technically not "born" of woman. The violent language ("ripp\'d") connects his birth to the play\'s pervasive imagery of violence and blood.',
        themes: ['Supernatural & Fate', 'Violence & Blood'],
      },
    ],
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethKeyQuotesPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/revision/texts/macbeth' },
          {
            name: 'Key Quotations',
            url: 'https://theenglishhub.app/revision/texts/macbeth/key-quotes',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/macbeth" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Macbeth overview
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Quote className="mr-1 size-3 text-clay-700 dark:text-clay-300" />
                Key Quotes Bank
              </Badge>
              <Badge variant="outline">30 quotes</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Macbeth — Key Quotes
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Thirty essential Macbeth quotations organised by act with detailed language analysis,
              speaker context, and thematic links for GCSE and IGCSE English Literature.
            </p>
          </div>
        </section>

        {/* Exam tip */}
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
          <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-300">
            <Lightbulb className="size-4" /> How to Use These Quotes
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You do not need to memorise every quote -- aim for 10-15 that you can analyse in depth.
            Choose quotes that work for multiple themes and characters so each one earns maximum
            marks. For each quote, practise identifying the technique, explaining its effect, and
            linking it to context.
          </p>
        </div>

        {/* Quote cards by act */}
        {QUOTES_BY_ACT.map((act) => (
          <Card key={act.act}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`size-3 rounded-full ${act.colour}`} />
                {act.act} &mdash; {act.label}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{act.quotes.length} key quotes</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {act.quotes.map((q, i) => (
                <div key={i} className="rounded-lg border border-border/60 p-4 space-y-2">
                  <p className="text-lg font-medium leading-snug">&ldquo;{q.quote}&rdquo;</p>
                  <p className="text-xs text-muted-foreground/70">
                    {q.speaker} &mdash; {q.actScene}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Analysis: </span>
                    {q.analysis}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {q.themes.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-8">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-4 mr-1" /> Overview
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/context" />}>
            Context <BookOpen className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
