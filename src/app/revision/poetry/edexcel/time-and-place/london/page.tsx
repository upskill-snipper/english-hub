'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

const london: PoemData = {
  title: 'London',
  poet: 'William Blake',
  lines: [
    {
      text: 'I wander thro\u2019 each charter\u2019d street,',
      annotations: [
        {
          type: 'Verb',
          note: '"Wander" implies aimlessness and detachment. The speaker observes the city without belonging to it \u2014 a typically Romantic outsider position.',
          color: '#3b82f6',
        },
        {
          type: 'Vocabulary',
          note: '"Charter\u2019d" means mapped, owned, controlled. Streets that should be public spaces have been taken over by commerce and law.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Near where the charter\u2019d Thames does flow.',
      annotations: [
        {
          type: 'Repetition',
          note: 'Even the river \u2014 nature\u2019s most uncontainable element \u2014 has been "charter\u2019d". Blake suggests no part of London escapes ownership.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And mark in every face I meet',
      annotations: [
        {
          type: 'Pun',
          note: '"Mark" carries two meanings: to notice, and to brand or scar. The speaker both records and recognises damage on every passer-by.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Marks of weakness, marks of woe.',
      annotations: [
        {
          type: 'Triple repetition',
          note: 'The triple "marks" turns the line into a hammer-blow. Suffering is universal \u2014 it shows on every face.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'Blake establishes the central observation of the poem: London is a city of visible misery.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'In every cry of every Man,',
      annotations: [
        {
          type: 'Anaphora',
          note: '"In every" begins four consecutive lines, creating a relentless drum-beat. The repetition forces the reader to feel how comprehensive the suffering is.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In every Infants cry of fear,',
      annotations: [
        {
          type: 'Imagery',
          note: 'Even babies are crying in fear \u2014 not hunger or tiredness, but fear. Innocence is corrupted from birth in this city.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'In every voice: in every ban,',
      annotations: [
        {
          type: 'Vocabulary',
          note: '"Ban" can mean a curse, an official prohibition, or a marriage announcement. All three connect speech and authority \u2014 every voice carries the marks of control.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'The mind-forg\u2019d manacles I hear.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Manacles (chains) are made not by the state but by the mind itself. Londoners have internalised their oppression \u2014 they accept being controlled.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The most famous line of the poem. Blake names the central evil: it is psychological as much as political.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'How the Chimney-sweepers cry',
      annotations: [
        {
          type: 'Social context',
          note: 'Chimney sweeps were children, often as young as four, sold by poor parents and forced into dangerous work. Their "cry" links labour with grief.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Every blackning Church appalls,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Blackning" works on two levels: the church is literally darkened by industrial soot, and morally darkened by complicity in child labour.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Blake attacks the Church for failing the children it should protect. The institution that preaches mercy is "appalled" but does nothing.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And the hapless Soldiers sigh',
      annotations: [
        {
          type: 'Adjective',
          note: '"Hapless" means unlucky and helpless. The soldier is not heroic \u2014 he is a victim of the system that sends him to die.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Runs in blood down Palace walls.',
      annotations: [
        {
          type: 'Imagery',
          note: 'The soldier\u2019s sigh becomes blood running down palace walls \u2014 a synaesthetic, almost surreal image. Blake makes the monarchy literally responsible for the soldier\u2019s death.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Blake stains the palace with the blood of the men sent to fight for it. A direct political accusation.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'But most thro\u2019 midnight streets I hear',
      annotations: [
        {
          type: 'Volta',
          note: '"But most" signals a final turn. The previous stanza named institutions; now Blake reveals the worst suffering of all \u2014 in the streets at midnight.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'How the youthful Harlots curse',
      annotations: [
        {
          type: 'Social context',
          note: '"Youthful Harlots" \u2014 child prostitutes \u2014 represent the most extreme victims of London\u2019s economic system. Their curse passes pain to the next generation.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Blasts the new-born Infants tear,',
      annotations: [
        {
          type: 'Sexually transmitted disease',
          note: 'The "blast" is venereal disease passed from prostitute to baby. The child is born with infected, weeping eyes \u2014 ruined before life begins.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And blights with plagues the Marriage hearse.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Marriage hearse" yokes wedding and funeral together. Blake suggests marriage in London is itself a kind of death \u2014 disease and unhappiness pass from prostitution into the marriage bed.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The closing image fuses life and death. Even what should be the happiest social institution is poisoned.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757&ndash;1827)</h3>
    <p>Blake was a Romantic poet, painter and engraver who lived almost his entire life in London. Unlike most Romantics, he stayed in the city instead of writing about the countryside \u2014 and what he saw there filled him with anger.</p>

    <h3>Songs of Experience (1794)</h3>
    <p>"London" appears in <em>Songs of Experience</em>, the dark companion to <em>Songs of Innocence</em>. The poems in <em>Experience</em> show a world where poverty, prostitution, child labour and institutional cruelty have corrupted everything that is innocent.</p>

    <h3>Industrial London</h3>
    <p>By the 1790s, London was the largest city in Europe. Mass migration into the city created huge slums, child labour was widespread, and wealth was concentrated in a small elite. Blake\u2019s poem captures the suffering of ordinary Londoners in the early years of the Industrial Revolution.</p>

    <h3>Politics and protest</h3>
    <p>Blake was a political radical sympathetic to the French and American Revolutions. He hated the institutions he believed were responsible for suffering: the monarchy, the established Church, and the legal system that defended both. "London" reads almost like a list of charges in a courtroom indictment.</p>

    <h3>Time and Place in this poem</h3>
    <p>For the Edexcel Time and Place cluster, "London" is essential because it shows how a place \u2014 a single named city \u2014 can become a moral character in its own right. The whole poem is a portrait of one location at one historical moment, and that location shapes everything we feel.</p>
  `,

  summary: `Stanza 1: The speaker walks through London\u2019s streets and along the Thames, both of which have been "charter\u2019d" (mapped, owned, controlled). On every face he sees, he notices "marks of weakness" and "marks of woe" \u2014 visible signs of suffering.

Stanza 2: Everywhere he hears cries \u2014 the cries of men, the fearful cries of babies, every voice and every ban. He hears "mind-forg\u2019d manacles": the chains that Londoners have built in their own minds, accepting their oppression.

Stanza 3: He attacks two institutions. The Church is "blackning" \u2014 darkened by soot and complicit in child labour, since chimney sweeps die in its chimneys. The Palace is responsible for the deaths of "hapless Soldiers" whose blood runs down its walls.

Stanza 4: The worst suffering comes at midnight. "Youthful Harlots" (child prostitutes) curse and infect newborn babies with disease, then carry that disease into marriages. The poem ends with the oxymoron "Marriage hearse" \u2014 a wedding that is also a funeral.

Overall meaning: London is a portrait of an entire city corrupted by oppression, poverty and disease. Blake shows how political institutions (Palace and Church) and economic forces ("charter\u2019d" streets) damage every Londoner, especially the youngest and most vulnerable. The "mind-forg\u2019d manacles" suggest that the deepest oppression is the one Londoners have accepted in their own heads.`,

  formAndStructure: `Form: Four quatrains with an ABAB rhyme scheme. The neat, regular form is deliberately at odds with the chaos and suffering it describes \u2014 Blake imposes order on horror to make the reader notice it more clearly.

Metre: Iambic tetrameter (four feet per line). The steady rhythm gives the poem a marching, drum-like quality that matches the relentless cataloguing of misery.

Stanza shape: Each stanza widens the lens. Stanza 1 sees faces; stanza 2 hears voices; stanza 3 names institutions; stanza 4 zooms in on the most vulnerable victim. The structure works as a moral argument that builds to a climax.

Repetition: The triple "marks" in stanza 1 and the quadruple "every" in stanza 2 create a rhetorical hammer-blow. Suffering is not isolated \u2014 it is universal.

Volta: The word "But most" in line 13 marks a final turn. Blake has named two institutional evils (Church, Palace) and now reveals an even worse one in the streets at midnight.

Closing oxymoron: The poem ends with "Marriage hearse" \u2014 two contradictory words yoked together. The final image refuses any easy resolution; happiness and death are inseparable in Blake\u2019s London.

End-stopped lines: Most lines end with punctuation, giving the poem a clipped, list-like feel. Each line lands like another item in a charge sheet.`,

  keyQuotes: [
    {
      quote: 'I wander thro\u2019 each charter\u2019d street',
      analysis:
        '"Charter\u2019d" is the political bombshell of the line. It suggests legal ownership, control by trade, and the erosion of common land. Even walking through the city involves trespassing on someone\u2019s property. The verb "wander" makes the speaker an outsider in his own city.',
      themes: ['Oppression', 'Control', 'Place'],
    },
    {
      quote: 'Marks of weakness, marks of woe',
      analysis:
        'The triple repetition of "marks" hammers the universality of suffering. "Mark" works as both noun (scar) and verb (notice), so the speaker is recording wounds even as he observes them. The alliteration of "weakness" and "woe" adds an almost lamenting sound.',
      themes: ['Suffering', 'Observation', 'Place'],
    },
    {
      quote: 'The mind-forg\u2019d manacles I hear',
      analysis:
        'The most famous line in the poem. Manacles are chains; "mind-forg\u2019d" means the prisoners made them themselves. Blake names the deepest form of oppression: not the laws of the state but the beliefs and habits of mind that make people accept being controlled.',
      themes: ['Oppression', 'Mental enslavement', 'Power'],
    },
    {
      quote: 'Every blackning Church appalls',
      analysis:
        '"Blackning" works on two levels: the church is literally blackened by industrial soot and morally blackened by its complicity in child labour. The verb "appalls" sounds like "pall" \u2014 the cloth that covers a coffin. The church is dressed for a funeral.',
      themes: ['Religion', 'Hypocrisy', 'Industry'],
    },
    {
      quote: 'Runs in blood down Palace walls',
      analysis:
        'A surreal, synaesthetic image: a soldier\u2019s sigh becomes blood on the walls of the building responsible for sending him to die. Blake stains the monarchy with the violence it commands. The verb "Runs" makes the blood feel fresh and ongoing.',
      themes: ['Monarchy', 'War', 'Responsibility'],
    },
    {
      quote: 'How the youthful Harlots curse',
      analysis:
        'The juxtaposition of "youthful" with "Harlots" is shocking. These are children who have been forced into prostitution by poverty. Their "curse" can mean foul language, a moral malediction, or venereal disease \u2014 all three are at work in the poem\u2019s closing stanza.',
      themes: ['Poverty', 'Innocence corrupted', 'Disease'],
    },
    {
      quote: 'And blights with plagues the Marriage hearse',
      analysis:
        'The closing oxymoron yokes wedding and funeral. Sexually transmitted disease passes from prostitution into the marriage bed; happiness is poisoned at its source. "Blights" is an agricultural verb \u2014 marriage in London is a crop ruined before harvest.',
      themes: ['Disease', 'Marriage', 'Death-in-life'],
    },
    {
      quote: 'In every cry of every Man',
      analysis:
        'The first of four "in every" lines, the anaphora overwhelms the reader with the totality of suffering. Crucially, the "cry" is not just of men but of "every Man" \u2014 the universal human voice crying in pain.',
      themes: ['Universal suffering', 'Place', 'Oppression'],
    },
  ],

  languageDevices: [
    {
      device: 'Repetition',
      example: 'charter\u2019d street / charter\u2019d Thames',
      effect:
        'The repetition of "charter\u2019d" forces the reader to register that ownership has spread from streets to rivers \u2014 from the human-made to the natural. Even nature is for sale in London.',
      lineRef: 0,
    },
    {
      device: 'Anaphora',
      example: 'In every cry... In every Infants... In every voice... in every ban',
      effect:
        'The repeated "in every" turns stanza 2 into a relentless catalogue. The structure leaves no space for relief or exception \u2014 suffering is total. Blake writes prosecution, not description.',
      lineRef: 4,
    },
    {
      device: 'Metaphor',
      example: 'The mind-forg\u2019d manacles I hear',
      effect:
        'Blake invents a single image that names psychological oppression. Manacles are physical chains; "mind-forg\u2019d" relocates them inside the head. The poem\u2019s critique cuts deeper than law \u2014 it targets accepted belief.',
      lineRef: 7,
    },
    {
      device: 'Symbolism',
      example: 'blackning Church / Palace walls',
      effect:
        'Two institutions become symbols of the corrupt system. The Church symbolises hypocrisy (preaching mercy while ignoring children dying in chimneys); the Palace symbolises the warmaking power of monarchy. Blake makes architecture moral.',
      lineRef: 10,
    },
    {
      device: 'Synaesthesia',
      example: 'the hapless Soldiers sigh / Runs in blood down Palace walls',
      effect:
        'A sound (a sigh) becomes a substance (blood) on a surface (palace walls). The mixing of senses creates a surreal, indelible image. The blood is the consequence of the sigh \u2014 cause and effect collapsed into one image.',
      lineRef: 11,
    },
    {
      device: 'Oxymoron',
      example: 'Marriage hearse',
      effect:
        'Two opposites \u2014 wedding and funeral \u2014 are forced into a single phrase. The figure is shocking and refuses resolution. In Blake\u2019s London, the institution most associated with new life is also a vehicle for death.',
      lineRef: 16,
    },
  ],
}

const comparisons = [
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    href: '/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
    reason:
      'Wordsworth and Blake describe the same city only a few years apart \u2014 yet they see opposite Londons. Wordsworth finds beauty in the silent dawn; Blake finds suffering in every street. The contrast is the perfect Time and Place comparison.',
    themes: ['City', 'Place', 'Perspective'],
  },
  {
    title: "Nothing's Changed",
    poet: 'Tatamkhulu Afrika',
    href: '/revision/poetry/edexcel/time-and-place',
    reason:
      'Both poems use a walk through a place to expose social injustice. Blake walks London under the Industrial Revolution; Afrika walks District Six under apartheid. Compare the politics of place and observation.',
    themes: ['Place', 'Oppression', 'Walking'],
  },
  {
    title: 'I started Early \u2013 Took my Dog',
    poet: 'Emily Dickinson',
    href: '/revision/poetry/edexcel/time-and-place/i-started-early-took-my-dog',
    reason:
      'Both poems give voice to a speaker on the move through a landscape. Blake walks the city under control; Dickinson walks the shore where nature is uncontrollable. Compare how each speaker relates to their environment.',
    themes: ['Place', 'Walking', 'Identity'],
  },
]

export default function LondonEdexcelPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/time-and-place" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Time and Place cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">London</h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Edexcel Time and Place anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Edexcel</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="London"
        textType="poem"
        examBoard="Edexcel"
        cluster="Time and Place"
        variant="compact"
      />
      <InteractivePoemViewer poem={london} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with London from the Edexcel Time and Place cluster.
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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>
          &ldquo;London&rdquo; by William Blake (1794) is in the public domain.
          All quotations on this page are used for the purpose of criticism,
          review and educational study under fair dealing (s.30 Copyright,
          Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
