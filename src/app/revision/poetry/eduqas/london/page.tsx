'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

const london: PoemData = {
  title: 'London',
  poet: 'William Blake',
  lines: [
    {
      text: 'I wander thro\' each charter\'d street,',
      annotations: [
        {
          type: 'Diction',
          note: '"Charter\'d" suggests ownership and control - even the streets are owned and regulated. Blake protests how every part of London has been claimed by the wealthy and powerful.',
          color: '#ef4444',
        },
        {
          type: 'Speaker',
          note: '"I wander" - the speaker drifts aimlessly, observing the city. This wandering mirrors the powerlessness of London\'s ordinary people.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Near where the charter\'d Thames does flow.',
      annotations: [
        {
          type: 'Repetition',
          note: 'The repetition of "charter\'d" emphasises the totality of control - even nature (the Thames) has been mapped, owned and regulated. Nothing in London is truly free.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And mark in every face I meet',
      annotations: [
        {
          type: 'Repetition',
          note: '"Mark" - the speaker observes, but the word also suggests a permanent stamp or scar on people\'s faces. Suffering has marked them.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Marks of weakness, marks of woe.',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The repetition of "marks" hammers home the inescapability of suffering. The alliteration "marks... weakness... woe" creates a relentless, mournful rhythm.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Every Londoner bears visible signs of misery. Blake universalises the suffering - this is not isolated but systemic.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'In every cry of every Man,',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The repetition of "every" throughout the second stanza creates an inescapable, totalising effect. Suffering is universal.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'In every Infants cry of fear,',
      annotations: [
        {
          type: 'Pathos',
          note: 'Even babies are crying in fear. Childhood innocence has been corrupted by the city. Blake suggests children are born into suffering, not happiness.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'In every voice: in every ban,',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Ban" can mean prohibition, curse, or marriage banns - suggesting laws, religious curses, and social customs all oppress equally.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The mind-forg\'d manacles I hear.',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Mind-forg\'d manacles" - one of poetry\'s most famous metaphors. The chains binding Londoners are mental, not physical. They have internalised their oppression and accepted their suffering as natural.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'A devastating image: people are not just oppressed by external forces but by their own minds. Their imagination has been imprisoned.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'How the Chimney-sweepers cry',
      annotations: [
        {
          type: 'Social criticism',
          note: 'Chimney sweeps were children, often as young as four, forced into dangerous work. Blake highlights child exploitation as a moral failure of the city.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Every blackning Church appalls,',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Blackning" describes both literal soot from chimneys and moral corruption. The Church should protect the innocent but instead is "appalled" - and complicit. "Appall" also means to make pale, suggesting hypocrisy.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Blake attacks institutional Christianity for failing the poor. The Church has been blackened by complicity with suffering.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And the hapless Soldiers sigh',
      annotations: [
        {
          type: 'Pathos',
          note: '"Hapless" - unfortunate, helpless. Soldiers are themselves victims of the same powers they fight for. Blake had Republican sympathies and opposed Britain\'s wars.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Runs in blood down Palace walls',
      annotations: [
        {
          type: 'Imagery',
          note: 'A shocking visual: the soldier\'s sigh becomes literal blood staining the palace. The monarchy is responsible for soldiers\' deaths in foreign wars. Blake makes the king\'s guilt visible.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The image suggests revolution - blood on palace walls echoes the French Revolution that Blake supported.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'But most thro\' midnight streets I hear',
      annotations: [
        {
          type: 'Time shift',
          note: '"Midnight" - the poem moves into darkness, the most desperate time. The speaker hears, not sees, the worst suffering.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'How the youthful Harlots curse',
      annotations: [
        {
          type: 'Social criticism',
          note: '"Youthful Harlots" - young prostitutes, often forced into the work by poverty. Blake refuses to look away from the most vulnerable victims of London\'s economy.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Blasts the new-born Infants tear',
      annotations: [
        {
          type: 'Imagery',
          note: 'The harlot\'s curse "blasts" (destroys) the newborn\'s tear - meaning the child is born infected with venereal disease. The prostitute\'s suffering passes directly to the next generation.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And blights with plagues the Marriage hearse.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Marriage hearse" - the most shocking image in the poem. Marriage, supposedly a celebration of love and life, is turned into a funeral carriage. Disease and death corrupt even love.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The poem ends with this devastating oxymoron. London\'s corruption infects everything, even the most sacred institutions.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757-1827)</h3>
    <p>Blake was a poet, painter and printmaker, largely unrecognised in his lifetime. He was a radical thinker who rejected institutional religion, supported the French and American Revolutions, and was deeply critical of industrialisation, slavery, and child labour. He claimed to see visions and spoke with angels.</p>

    <h3>Songs of Innocence and Experience (1794)</h3>
    <p>"London" appears in <em>Songs of Experience</em>, the darker companion to <em>Songs of Innocence</em>. The two collections together show "the two contrary states of the human soul". "London" presents experience as bleak, corrupt, and full of suffering caused by human institutions.</p>

    <h3>Late 18th-Century London</h3>
    <p>Blake\'s London was the world\'s largest city. The Industrial Revolution drove rural poor into urban slums. Working conditions were appalling, child labour was common, and disease (especially syphilis) was rampant. The wealthy lived alongside the desperately poor.</p>

    <h3>Political Context</h3>
    <p>The poem was written during a period of revolution and reaction. The French Revolution (1789) inspired hope in radicals like Blake but terrified the British establishment. Blake saw the Church and Monarchy as oppressors complicit in human suffering.</p>

    <h3>Religious Critique</h3>
    <p>Blake was a Christian but a fierce critic of organised religion. He believed the established Church had abandoned its duty to the poor and instead served the powerful. The "blackning Church" image is central to his anti-clerical message.</p>
  `,

  summary: `Stanza 1: The speaker walks through London\'s "charter\'d" (owned, regulated) streets near the equally controlled Thames. He observes that everyone he meets bears "marks of weakness, marks of woe" - visible signs of suffering.

Stanza 2: The speaker hears suffering everywhere - in adults\' cries, infants\' cries, voices, and laws ("bans"). He concludes that Londoners wear "mind-forg\'d manacles" - chains they have created in their own minds. They have accepted their oppression.

Stanza 3: Blake names three institutions and their victims: the Church (which fails chimney-sweep children), the Monarchy (whose wars kill soldiers, whose blood metaphorically runs down palace walls), and society at large.

Stanza 4: At midnight, the speaker hears young prostitutes cursing. Their curses "blast" newborn babies (with disease) and turn marriage into a "marriage hearse" - a funeral. The poem ends with corruption infecting birth, love, and death.

Overall meaning: London is a city of total oppression where institutions (Church, Monarchy, marriage) have failed everyone. Suffering is universal, inescapable, and self-perpetuating. Blake calls for radical change but the poem itself offers no hope - only documentation of the misery.`,

  formAndStructure: `Form: Four quatrains (four-line stanzas), tightly controlled. The rigid structure mirrors the constricted lives of Londoners - they cannot escape the form just as they cannot escape the city.

Rhyme scheme: ABAB throughout. The regular alternating rhymes create a relentless, hammering rhythm that mirrors the inescapable suffering described.

Metre: Mostly iambic tetrameter (four feet per line). The march-like rhythm makes the poem feel like a slow funeral procession through the city. Some lines are deliberately stressed differently for emphasis.

Repetition and anaphora: The repetition of "charter\'d" (stanza 1), "every" (stanza 2), and "marks" creates a totalising effect - suffering is everywhere, no one escapes.

First person: "I wander", "I hear", "I meet" - the speaker is a witness, but a passive one. He observes but cannot intervene. This mirrors the position of Blake\'s reader.

Volta: There is no traditional turn. The poem moves from observation (stanzas 1-2) to specific examples of institutional failure (stanzas 3-4), but the bleakness intensifies rather than reverses.

Sound: Heavy use of harsh consonants and mournful vowel sounds. The poem sounds bitter and tired. The closing oxymoron "Marriage hearse" is sonically jarring, leaving the reader unsettled.`,

  keyQuotes: [
    {
      quote: 'each charter\'d street ... charter\'d Thames',
      analysis:
        'The repetition of "charter\'d" suggests total control. Streets being owned is one thing, but the Thames - a natural river - being "charter\'d" shows the absurdity. Even nature has been claimed by the wealthy. Blake protests against the privatisation of common space.',
      themes: ['Oppression', 'Power', 'Capitalism'],
    },
    {
      quote: 'Marks of weakness, marks of woe',
      analysis:
        'The repetition and alliteration create a hammering, mournful effect. "Marks" suggests permanent signs - suffering has been etched onto Londoners\' faces. The pairing of "weakness" and "woe" links physical decline with emotional pain.',
      themes: ['Suffering', 'Universal misery', 'Oppression'],
    },
    {
      quote: 'The mind-forg\'d manacles I hear',
      analysis:
        'The most famous line in the poem. "Mind-forg\'d manacles" is a metaphor for psychological imprisonment - Londoners have internalised their oppression and accepted it as natural. They forge their own chains. This is more devastating than physical chains because it cannot be removed by revolution alone - it requires a change of consciousness.',
      themes: ['Mental imprisonment', 'Oppression', 'Powerlessness'],
    },
    {
      quote: 'every blackning Church appalls',
      analysis:
        '"Blackning" works literally (soot from chimneys) and metaphorically (moral corruption). "Appalls" means both "horrifies" and "makes pale" - the Church is shocked by suffering yet pale with hypocrisy. Blake attacks the institution that should protect the poor for being complicit in their suffering.',
      themes: ['Religion', 'Hypocrisy', 'Institutional failure'],
    },
    {
      quote: 'Runs in blood down Palace walls',
      analysis:
        'A shocking visual: the soldier\'s sigh becomes literal blood staining the palace. Blake makes the monarchy\'s guilt physical and visible. The image foreshadows revolution - blood on palace walls echoes the French Revolution Blake supported.',
      themes: ['War', 'Monarchy', 'Revolution'],
    },
    {
      quote: 'youthful Harlots curse',
      analysis:
        '"Youthful" emphasises that these prostitutes are young - children forced into sex work by poverty. Their "curse" is multi-layered: they swear, they have venereal disease, and they curse the society that failed them. Blake refuses to romanticise or look away.',
      themes: ['Poverty', 'Exploitation', 'Innocence corrupted'],
    },
    {
      quote: 'blights with plagues the Marriage hearse',
      analysis:
        'The poem\'s devastating final image. "Marriage hearse" is an oxymoron - marriage should be a celebration of life, but in Blake\'s London it is a funeral carriage. Venereal disease passed from prostitutes to husbands to wives to babies turns marriage into a death sentence. Corruption infects love itself.',
      themes: ['Disease', 'Love corrupted', 'Death'],
    },
    {
      quote: 'In every cry of every Man',
      analysis:
        'The anaphoric "every" in stanza 2 creates a totalising effect - no one is exempt from suffering. Blake universalises misery, making it impossible for the reader to imagine any Londoner escaping. The capitalised "Man" suggests humanity itself, not just individuals.',
      themes: ['Universal suffering', 'Powerlessness'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'In every cry of every Man, / In every Infants cry of fear, / In every voice',
      effect:
        'The repetition of "every" creates a relentless, totalising effect. Suffering is not occasional but universal. The reader feels overwhelmed by the catalogue of pain, just as the speaker is overwhelmed walking through the city.',
      lineRef: 4,
    },
    {
      device: 'Metaphor',
      example: 'The mind-forg\'d manacles I hear',
      effect:
        'Blake\'s most famous metaphor describes mental imprisonment. The chains are not external but internal - Londoners have created their own oppression by accepting the system. This makes the suffering harder to escape than literal chains, because revolution alone cannot break it.',
      lineRef: 7,
    },
    {
      device: 'Symbolism',
      example: 'every blackning Church appalls',
      effect:
        'The Church symbolises institutional religion\'s moral failure. "Blackning" works as both literal soot and metaphorical corruption. Blake suggests that the very institutions claiming to protect souls are blackened by their complicity with suffering.',
      lineRef: 9,
    },
    {
      device: 'Oxymoron',
      example: 'Marriage hearse',
      effect:
        'The poem\'s devastating closing image. Marriage (life, love, hope) is paired with hearse (death, ending). The oxymoron captures how London\'s corruption infects even the most sacred institutions. It leaves the reader with a permanent jolt of disgust.',
      lineRef: 15,
    },
    {
      device: 'Imagery (visual)',
      example: 'Runs in blood down Palace walls',
      effect:
        'A shocking visual that makes the abstract guilt of the monarchy literal. The soldier\'s "sigh" becomes blood. Blake forces the reader to see what political language hides: the human cost of war and royal power.',
      lineRef: 11,
    },
    {
      device: 'Repetition',
      example: 'charter\'d street ... charter\'d Thames / marks of weakness, marks of woe',
      effect:
        'Heavy repetition creates a hammering, oppressive rhythm. The reader cannot escape the words just as Londoners cannot escape suffering. "Charter\'d" repeated emphasises that even nature has been controlled.',
      lineRef: 1,
    },
    {
      device: 'Alliteration',
      example: 'marks ... weakness ... woe',
      effect:
        'The alliterative "w" sounds in "weakness" and "woe" create a soft, mournful tone. Combined with the harder "m" of "marks", the effect is exhausted, defeated - the sound of someone tired of seeing suffering.',
      lineRef: 3,
    },
  ],
}

const comparisons = [
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    href: '/revision/poetry/eduqas/ozymandias',
    reason:
      'Both Romantic poems criticise abusive power. Blake attacks the institutions of his own time; Shelley attacks ancient tyranny. Both warn that power structures cause suffering.',
    themes: ['Power', 'Oppression', 'Political critique'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      'Both poems use London as a setting for grief and oppression. Hardy shows personal tragedy; Blake shows systemic suffering. Both make the city itself feel hostile.',
    themes: ['London setting', 'Suffering', 'Loss'],
  },
  {
    title: 'Dulce et Decorum Est',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/eduqas/dulce-et-decorum-est',
    reason:
      'Both poets attack the institutions that send soldiers to die. Blake\'s "blood down Palace walls" anticipates Owen\'s exposure of the truth behind patriotic rhetoric.',
    themes: ['War', 'Institutional failure', 'Suffering'],
  },
]

export default function LondonEduqasPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Eduqas Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              London
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Eduqas</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="London"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InteractivePoemViewer poem={london} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for comparison questions involving London.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational
        criticism under UK fair-dealing provisions (Copyright, Designs and
        Patents Act 1988, s.30). No commercial use is intended. All quotations
        remain the intellectual property of the respective rights holders.
      </footer>
    </div>
  )
}
