'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

const wifeInLondon: PoemData = {
  title: 'A Wife in London',
  poet: 'Thomas Hardy',
  lines: [
    {
      text: 'I — The Tragedy',
      annotations: [
        {
          type: 'Structure',
          note: 'The poem is divided into two sections - "The Tragedy" and "The Irony". This formal labelling is unusual and signals Hardy\'s argumentative purpose.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'She sits in the tawny vapour',
      annotations: [
        {
          type: 'Setting',
          note: '"Tawny vapour" - the polluted yellow-brown fog of Victorian London. Hardy immediately creates an oppressive, dirty atmosphere.',
          color: '#10b981',
        },
        {
          type: 'Pathetic fallacy',
          note: 'The fog reflects the wife\'s emotional state - obscured, suffocating, hopeless. The weather embodies her grief.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'That the City lanes have uprolled,',
      annotations: [
        {
          type: 'Personification',
          note: '"The City" lanes "uprolled" the fog - the city itself is alive, breathing out smog. London is hostile.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Behind whose webby fold on fold',
      annotations: [
        {
          type: 'Imagery',
          note: '"Webby fold on fold" - the fog is like a spider\'s web, trapping her. The image suggests entanglement and inescapability.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Like a waning taper',
      annotations: [
        {
          type: 'Simile',
          note: '"Waning taper" - the wife is compared to a dying candle. She is fading, her light going out. The image foreshadows the death she does not yet know about.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The simile makes the wife\'s vulnerability physical - she is a flickering flame about to be extinguished by the news she is about to receive.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'The street-lamp glimmers cold.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Glimmers cold" - the lamp gives light without warmth. The visual of cold light reinforces the emotional bleakness.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'A messenger\'s knock cracks smartly,',
      annotations: [
        {
          type: 'Onomatopoeia',
          note: '"Cracks smartly" - the sharp, sudden sound of the knock cuts through the fog. The verb is violent - the news will crack her life apart.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Flashed news is in her hand',
      annotations: [
        {
          type: 'Diction',
          note: '"Flashed news" - a telegram, transmitted quickly. The speed of communication contrasts with the slow death she is now learning about.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Of meaning it dazes to understand',
      annotations: [
        {
          type: 'Imagery',
          note: '"Dazes to understand" - the meaning hits her like a blow. She is stunned, unable to process. Hardy captures the moment of shock.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Though shaped so shortly:',
      annotations: [
        {
          type: 'Brevity',
          note: 'The telegram is "shaped so shortly" - so brief. A few words destroy her entire life. Hardy contrasts the brevity of the message with the depth of the loss.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'He — has fallen — in the far South Land...',
      annotations: [
        {
          type: 'Punctuation',
          note: 'The dashes mimic her breathless, fragmented reading. She struggles to take in the words. "Has fallen" is a euphemism for "died in battle".',
          color: '#a855f7',
        },
        {
          type: 'Setting',
          note: '"Far South Land" - probably South Africa, where the Second Boer War (1899-1902) was being fought. The husband died in a colonial war thousands of miles away.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The line stops mid-thought. The wife cannot continue reading aloud. The ellipsis is the moment of grief.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'II — The Irony',
      annotations: [
        {
          type: 'Structure',
          note: '"The Irony" - Hardy names the central technique. The reader is now prepared for the cruel twist that follows.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '\'Tis the morrow; the fog hangs thicker,',
      annotations: [
        {
          type: 'Time shift',
          note: '"\'Tis the morrow" - the next day. The fog "hangs thicker" - the weather worsens, mirroring her deepening grief.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The postman nears and goes:',
      annotations: [
        {
          type: 'Foreshadowing',
          note: 'The postman approaches and passes by - except this time he stops. The reader senses something is coming.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'A letter is brought whose lines disclose',
      annotations: [
        {
          type: 'Diction',
          note: '"Lines disclose" - the letter reveals something. The slow, formal language builds anticipation.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'By the firelight flicker',
      annotations: [
        {
          type: 'Imagery',
          note: '"Firelight flicker" - the wife reads by an unsteady light. The flickering symbolises her unsteady world. There is also a quiet domesticity here, before the second blow.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'His hand, whom the worm now knows:',
      annotations: [
        {
          type: 'Imagery',
          note: '"His hand, whom the worm now knows" - she recognises his handwriting, but he is dead and being eaten by worms. The horror is visceral.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'A devastating image. The hand that wrote the letter no longer exists. The intimate familiarity of his handwriting is now obscene.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Fresh — firm — penned in highest feather —',
      annotations: [
        {
          type: 'Diction',
          note: '"Fresh - firm - penned in highest feather" - the letter is written confidently, in good spirits. The dashes mimic the wife\'s short, halting reading. The contrast with her grief is unbearable.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Page-full of his hoped return,',
      annotations: [
        {
          type: 'Tragic irony',
          note: '"Hoped return" - the letter is full of plans for coming home. He died with hope. The wife reads his hopes knowing he is dead. This is the central irony.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And of home-planned jaunts of brake and burn',
      annotations: [
        {
          type: 'Imagery',
          note: '"Jaunts of brake and burn" - he plans country walks ("brake" = thicket; "burn" = stream). The pastoral imagery of innocent English pleasures contrasts with the harsh reality of his death in the colonies.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In the summer weather,',
      annotations: [
        {
          type: 'Foreshadowing',
          note: '"Summer weather" - he plans for a future season he will not see. The summer he describes will arrive without him.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And of new love that they would learn.',
      annotations: [
        {
          type: 'Closing image',
          note: '"New love that they would learn" - the most heartbreaking line. He imagined deepening their relationship, growing love together. None of it will happen. The poem ends on his dead voice still hoping.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The closing line is the dead husband\'s voice, full of love and plans. The cruelty is that the wife reads it after she knows he is gone.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Thomas Hardy (1840-1928)</h3>
    <p>Hardy was an English novelist and poet, famous for novels like <em>Tess of the d\'Urbervilles</em> and <em>Jude the Obscure</em>. After his novels were criticised for their bleakness, he turned to poetry. He wrote pessimistic, ironic poems about love, fate, and modern life.</p>

    <h3>The Boer War (1899-1902)</h3>
    <p>"A Wife in London" was published in 1899 during the Second Boer War, fought between Britain and the Boer republics in South Africa. It was Britain\'s first modern colonial war broadcast through telegrams and photographs. The "far South Land" in the poem is South Africa.</p>

    <h3>Communication and Distance</h3>
    <p>The poem dramatises a Victorian innovation: instant communication over long distances. The telegram brings news of death almost as fast as it happens. But the regular post is slower - so the wife receives her husband\'s last letter (written before his death) AFTER the telegram announcing his death. This time-gap creates the central irony.</p>

    <h3>Hardy\'s Pessimism</h3>
    <p>Hardy is known for his bleak worldview. He saw the universe as indifferent or actively cruel to humans. "A Wife in London" exemplifies this: the timing of the letters is not malicious but accidental, yet it creates exquisite suffering. Hardy\'s "irony" is a metaphysical condition - the way reality always seems to mock human hope.</p>

    <h3>Anti-War Subtext</h3>
    <p>Hardy was critical of British imperialism and the Boer War. The poem is not explicitly anti-war but its focus on the human cost - especially on women left behind - implicitly criticises a war that was killing soldiers in distant lands for distant goals.</p>

    <h3>Domestic Tragedy</h3>
    <p>The poem belongs to Hardy\'s tradition of <strong>domestic tragedy</strong> - finding profound suffering in ordinary life. The wife is unnamed, her husband is unnamed, but their grief is universal. Hardy turns a typical Victorian home into a site of devastating sorrow.</p>
  `,

  summary: `Section I - The Tragedy: A wife sits alone in foggy Victorian London. The fog and cold street-lamp create an oppressive atmosphere. A messenger knocks sharply at her door and hands her a telegram. The message is brief but devastating: her husband has been killed in the "far South Land" (South Africa, in the Boer War). She struggles to comprehend.

Section II - The Irony: The next day, the fog is even thicker. The postman approaches and delivers a letter. By firelight, she sees her husband\'s familiar handwriting - but the hand is now eaten by worms. The letter, written before his death, is "fresh, firm, penned in highest feather". It is full of his plans for coming home, for country walks "in the summer weather", and for "new love that they would learn". She reads his hopes for a future that will never come.

Overall meaning: Hardy uses the gap between the telegram and the letter to create an unbearable irony. The dead husband\'s hopeful voice arrives after his death is known. The poem captures both a personal tragedy and a critique of imperial war: ordinary people pay the price of distant conflicts. Hardy\'s pessimistic worldview - that the universe mocks human hope - is fully on display.`,

  formAndStructure: `Form: Two sections of two stanzas each, totalling four stanzas of five lines. The titled sections - "The Tragedy" and "The Irony" - announce the poem\'s argumentative purpose.

Rhyme scheme: ABBAB throughout (variants). The unusual rhyme creates a sense of being slightly off-balance - nothing fits comfortably, mirroring the disrupted world.

Metre: Irregular but with a rough four-beat pulse. The metre is unsettled, with frequent variations that mirror the wife\'s shock and grief.

Two-part structure: The two titled sections create a dramatic before/after. "The Tragedy" is the telegram; "The Irony" is the letter. The structure forces the reader to experience the cruel timing.

Pathetic fallacy: The fog grows thicker between sections - "the fog hangs thicker". The London weather mirrors and amplifies the wife\'s grief. The setting becomes part of her emotional state.

Punctuation: Heavy use of dashes throughout, especially when the wife reads the messages. The dashes mimic her halting, breathless reading. They also mark gaps where she cannot continue - moments of pure shock.

Time and gap: The poem dramatises the temporal gap between two pieces of information that should not coincide. The dead husband\'s letter, written when he was alive and hopeful, arrives after the news of his death. Hardy turns time itself into a source of pain.

Closure: The poem ends not with the wife\'s reaction but with the dead husband\'s words - "new love that they would learn". Hardy gives the dead voice the last word, leaving the reader (and the wife) with hope that has been killed.`,

  keyQuotes: [
    {
      quote: 'tawny vapour ... webby fold on fold',
      analysis:
        'The opening images create a London of suffocating, entangling fog. "Tawny" is yellow-brown - the colour of polluted Victorian air. "Webby" suggests a spider\'s trap. The wife is enmeshed in an oppressive city before the news even arrives.',
      themes: ['Setting', 'Pathetic fallacy', 'Oppression'],
    },
    {
      quote: 'Like a waning taper / The street-lamp glimmers cold',
      analysis:
        'The simile compares the streetlamp (and implicitly the wife) to a dying candle. "Glimmers cold" - light without warmth. The image is of fading life and emotional bleakness, foreshadowing the death that will be announced moments later.',
      themes: ['Simile', 'Foreshadowing', 'Cold'],
    },
    {
      quote: 'A messenger\'s knock cracks smartly',
      analysis:
        'The verb "cracks" is violent - the knock physically breaks the silence and the wife\'s peace. "Smartly" makes the messenger sound efficient, businesslike - the bureaucracy of war contrasts with the human catastrophe being delivered.',
      themes: ['Sudden violence', 'Onomatopoeia', 'Bureaucracy'],
    },
    {
      quote: 'He — has fallen — in the far South Land',
      analysis:
        'The dashes mimic the wife\'s halting reading - she cannot speak the words fluently. "Has fallen" is the bureaucratic euphemism for died in battle. "Far South Land" emphasises the remoteness - he died thousands of miles from home for a war she cannot understand.',
      themes: ['Death', 'Distance', 'Fragmented speech'],
    },
    {
      quote: 'His hand, whom the worm now knows',
      analysis:
        'The most devastating image in the poem. The wife recognises her husband\'s handwriting on the envelope - but his actual hand has now been eaten by worms in the African earth. The familiar (his writing) and the horrifying (his decay) are placed side by side.',
      themes: ['Death', 'Decay', 'Body and absence'],
    },
    {
      quote: 'Fresh — firm — penned in highest feather',
      analysis:
        'The letter is written with energy and high spirits. The triple description and dashes mimic the wife\'s halting reading. Each word is more painful than the last - "fresh", "firm", "highest feather" all describe a man who is now dead.',
      themes: ['Tragic irony', 'Hope', 'Cruel contrast'],
    },
    {
      quote: 'Page-full of his hoped return',
      analysis:
        'The letter is "page-full" - long, detailed - and filled with his hopes for coming home. Each plan is now a wound. The very hopefulness that should bring joy now brings unbearable grief because it is impossible.',
      themes: ['Hope', 'Irony', 'Future'],
    },
    {
      quote: 'new love that they would learn',
      analysis:
        'The closing line is the husband\'s voice, full of love and plans for deepening their relationship. He imagined growing closer, "learning" new love together. The poem ends with his living voice, even though he is dead. The cruelty is exquisite: the dead man\'s last hopes echo on after he is gone.',
      themes: ['Love', 'Lost future', 'Closing voice'],
    },
  ],

  languageDevices: [
    {
      device: 'Pathetic fallacy',
      example: 'tawny vapour ... fog hangs thicker ... glimmers cold',
      effect:
        'The London fog mirrors the wife\'s emotional state. As her grief deepens between sections, the fog "hangs thicker". Hardy uses weather as a physical embodiment of psychological suffering.',
      lineRef: 2,
    },
    {
      device: 'Dramatic irony',
      example: 'His hand, whom the worm now knows ... Page-full of his hoped return',
      effect:
        'The reader knows what the wife knows: the husband is dead. So when we read his hopeful letter, we feel the irony - his plans are impossible. The structure of two sections creates the irony by separating the moment of knowledge from the moment of his hope.',
      lineRef: 17,
    },
    {
      device: 'Punctuation (dashes)',
      example: 'He — has fallen — in the far South Land ... Fresh — firm — penned',
      effect:
        'The dashes mimic the wife\'s halting, breathless speech and reading. They mark moments of shock where she cannot continue. The visual fragmentation on the page enacts the emotional fragmentation of grief.',
      lineRef: 11,
    },
    {
      device: 'Simile',
      example: 'Like a waning taper',
      effect:
        'The wife is compared to a dying candle - flickering, vulnerable, about to go out. The simile foreshadows her emotional collapse and gives the abstract idea of grief a physical, visual form.',
      lineRef: 4,
    },
    {
      device: 'Personification',
      example: 'the City lanes have uprolled ... His hand, whom the worm now knows',
      effect:
        'The city is personified as actively producing the fog (it "uprolled" the vapour). Even more chillingly, the worm "knows" the husband\'s hand - decay is given consciousness. London and death become hostile presences.',
      lineRef: 3,
    },
    {
      device: 'Two-part structure',
      example: 'I - The Tragedy / II - The Irony',
      effect:
        'Hardy formally announces the poem\'s structure with section titles. The two parts create a dramatic before/after. The labels also signal Hardy\'s argument: the universe arranges events to maximise suffering.',
      lineRef: 1,
    },
    {
      device: 'Diction (cold imagery)',
      example: 'glimmers cold ... worm now knows ... fog hangs thicker',
      effect:
        'Hardy chooses cold, dead, dark words throughout. The vocabulary creates a consistent atmosphere of gloom and lifelessness. The wife\'s warm hopes (and her dead husband\'s) cannot survive in this environment.',
      lineRef: 5,
    },
  ],
}

const comparisons = [
  {
    title: 'Dulce et Decorum Est',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/eduqas/dulce-et-decorum-est',
    reason:
      'Both poems expose the human cost of war using bitter irony. Hardy shows the suffering at home, Owen shows it at the front. Both undermine patriotic narratives about glorious sacrifice.',
    themes: ['War', 'Suffering', 'Irony'],
  },
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/eduqas/london',
    reason:
      'Both poems use London as a setting for grief and oppression. Hardy\'s personal tragedy and Blake\'s political critique both make the city itself feel hostile and suffocating.',
    themes: ['London setting', 'Grief', 'Oppression'],
  },
  {
    title: 'The Soldier',
    poet: 'Rupert Brooke',
    href: '/revision/poetry/eduqas/the-soldier',
    reason:
      'Brooke imagines a noble death; Hardy shows the bureaucratic, painful reality of bereavement. The contrast between Brooke\'s romanticism and Hardy\'s realism is striking.',
    themes: ['Death in war', 'Romanticism vs realism', 'Soldier and family'],
  },
]

export default function WifeInLondonEduqasPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              A Wife in London
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Thomas Hardy &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Eduqas</Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={wifeInLondon} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for comparison questions involving A Wife in London.
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
    </div>
  )
}
