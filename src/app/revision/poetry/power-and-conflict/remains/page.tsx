import { ArrowLeft, BookOpen, Swords, Brain, Skull, HeartCrack, Eye } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  InteractivePoemViewer,
  type PoemData,
} from '@/components/study/InteractivePoemViewer'

export const metadata = {
  title: 'Remains -- Simon Armitage -- The English Hub',
  description:
    'Interactive study of "Remains" by Simon Armitage. Annotations, key quotes, language analysis, form & structure, and comparison poems for GCSE English Literature.',
}

/* ── Poem data ─────────────────────────────────────────────────── */

const REMAINS: PoemData = {
  title: 'Remains',
  poet: 'Simon Armitage',

  lines: [
    // Stanza 1
    {
      text: 'On another occasion, we got sent out',
      annotations: [
        {
          type: 'Colloquialism',
          note: '"On another occasion" -- casual, anecdotal opening as if recounting just one of many similar incidents. The passive voice ("got sent out") distances the speaker from responsibility.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'to tackle looters raiding a bank.' },
    {
      text: 'And one of them legs it up the road,',
      annotations: [
        {
          type: 'Colloquialism',
          note: '"legs it" is informal slang, making the account feel like a real soldier talking rather than a polished literary voice.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'probably armed, possibly not.', annotations: [
      {
        type: 'Ambiguity',
        note: 'The uncertainty over whether the looter was armed introduces moral doubt. "Probably" shifts to the weaker "possibly" -- the soldier cannot justify the killing with certainty.',
        color: '#f59e0b',
      },
    ] },
    { text: '' },

    // Stanza 2
    { text: 'Another one dies in the doorway' },
    {
      text: 'of some bank, his arms outstretched inside.',
      annotations: [
        {
          type: 'Imagery',
          note: '"arms outstretched" evokes a crucifixion pose, hinting at innocence and sacrifice. The mundane "some bank" contrasts with the gravity of death.',
          color: '#a78bfa',
        },
      ],
    },
    { text: '' },

    // Stanza 3
    { text: 'I swear' },
    { text: '' },

    // Stanza 4
    {
      text: 'And all three of us open fire.',
      annotations: [
        {
          type: 'Shared responsibility',
          note: '"all three of us" distributes the blame. The speaker tries to share the guilt across the group rather than shoulder it alone.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'Three of a kind all letting fly, and I swear' },
    { text: '' },

    // Stanza 5
    { text: 'I see broad daylight on the other side.' },
    { text: 'So we all chip in' },
    {
      text: 'and all three of us are all of the same mind,',
      annotations: [
        {
          type: 'Repetition',
          note: 'The insistent repetition of "all three" and "all of the same mind" reveals the speaker desperately trying to dilute personal guilt through collective action.',
          color: '#34d399',
        },
      ],
    },
    {
      text: 'and tosses his guts back into his body.',
      annotations: [
        {
          type: 'Graphic imagery',
          note: 'Shockingly visceral description. The casual verb "tosses" contrasts with the horrific action, reflecting how war desensitises soldiers to violence.',
          color: '#f87171',
        },
      ],
    },
    { text: 'Then he is carted off in the back of a lorry.' },
    { text: '' },

    // Stanza 6
    {
      text: 'End of story, except not really.',
      annotations: [
        {
          type: 'Volta / Turning point',
          note: 'This caesura marks the poem\'s structural and emotional pivot. The speaker tries to dismiss the event but cannot -- the trauma persists.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'His blood-Loss shadow on the street, the',
      annotations: [
        {
          type: 'Metaphor',
          note: '"blood-shadow" -- the stain left behind becomes a permanent shadow, symbolising how the memory of the killing is imprinted on the speaker\'s conscience.',
          color: '#a78bfa',
        },
      ],
    },
    { text: 'blood-Loss shadow on the street, the' },
    { text: '' },

    // Stanza 7
    {
      text: 'drink and the drugs won\'t flush him out --',
      annotations: [
        {
          type: 'PTSD',
          note: 'Reference to substance abuse as a coping mechanism reveals the depth of the speaker\'s psychological trauma. "Flush him out" uses military language ironically -- the enemy is now inside his mind.',
          color: '#f87171',
        },
      ],
    },
    {
      text: 'he\'s here in my head when I close my eyes,',
      annotations: [
        {
          type: 'Shift to present tense',
          note: 'The move to present tense shows the memory is inescapable and ongoing. "Here in my head" makes the dead man a permanent, haunting presence.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'dug in behind enemy lines,',
      annotations: [
        {
          type: 'Military metaphor',
          note: '"dug in behind enemy lines" -- the dead man has invaded the speaker\'s mind like a soldier entrenched in hostile territory. The speaker\'s own mind has become a battlefield.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'not left for dead in some distant, sun-stunned, sand-Loss',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The sibilant sounds ("sun-stunned, sand-smothered") create a hissing, suffocating quality that mirrors the oppressive desert environment and the speaker\'s mental anguish.',
          color: '#34d399',
        },
      ],
    },
    { text: '' },

    // Stanza 8 (isolated couplet)
    {
      text: 'land of dust and sand.',
      annotations: [
        {
          type: 'Isolation',
          note: 'The final couplet is isolated from the rest of the poem, mirroring the speaker\'s emotional isolation and the way the memory cannot be contained within a neat structure.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'His bloody life in my bloody hands.',
      annotations: [
        {
          type: 'Pun',
          note: '"bloody" works as both a swear word (colloquial, angry) and a literal description (covered in blood). This dual meaning captures the soldier\'s guilt and frustration simultaneously.',
          color: '#f59e0b',
        },
        {
          type: 'Final line',
          note: 'The end-stopped final line is definitive -- the speaker accepts inescapable guilt. "His life in my hands" echoes the idiom about responsibility, made literal and devastating.',
          color: '#f87171',
        },
      ],
    },
  ],

  context: `<p><strong>Simon Armitage</strong> (born 1963) is a contemporary English poet who became the UK Poet Laureate in 2019. He is known for writing in an accessible, conversational style that draws on everyday Northern English speech.</p>

<p><strong>"Remains"</strong> is taken from Armitage's 2008 collection <em>The Not Dead</em>, which accompanied a Channel 4 documentary of the same name. The poem is based on the <strong>real testimony of a soldier</strong>, Guardsman Tromans, who served in Iraq (Basra) and later suffered severe PTSD.</p>

<p>The poem explores the <strong>psychological aftermath of killing</strong> in modern warfare. Unlike older war poetry that focused on trenches and patriotism, "Remains" confronts the reality that soldiers carry the trauma of combat long after they return home.</p>

<p><strong>Key contextual points:</strong></p>
<ul>
  <li>Based on a real soldier's account -- Armitage acts as a mouthpiece for veterans who struggle to articulate their experiences</li>
  <li>Set during the Iraq War (2003 onwards) -- a controversial conflict where the justification for war was questioned</li>
  <li>The ambiguity over whether the looter was armed reflects the moral complexity of modern urban warfare, where combatants and civilians are hard to distinguish</li>
  <li>The poem was written to raise awareness of PTSD among returning soldiers, many of whom received inadequate mental health support</li>
  <li>Part of the broader AQA Power and Conflict anthology, exploring how power (military authority) creates lasting psychological conflict within individuals</li>
</ul>`,

  summary: `The speaker recounts a seemingly routine military incident: he and two fellow soldiers are sent to deal with looters at a bank. One looter runs and the three soldiers open fire, killing him. The speaker is uncertain whether the man was armed.

After the shooting, the soldiers casually handle the body -- tossing his insides back in and carting him away. The speaker initially tries to dismiss it: "End of story, except not really."

The second half of the poem reveals the true cost. The memory of the dead man haunts the speaker relentlessly. Neither drink nor drugs can erase the image. The dead man is "dug in behind enemy lines" -- entrenched in the speaker's mind like an occupying force.

The poem ends with a devastating final couplet: "His bloody life in my bloody hands." The speaker is trapped in an endless cycle of guilt, unable to escape responsibility for a death that may or may not have been justified. The poem moves from casual narration to raw psychological torment, mirroring the way trauma can surface long after the event itself.`,

  formAndStructure: `FORM:
-- Free verse with no regular rhyme scheme, reflecting the chaotic and unstructured nature of both the combat incident and the speaker's fragmented mental state
-- Written as a dramatic monologue -- the speaker addresses the reader directly, creating an intimate, confessional tone
-- The poem is based on real testimony, giving it documentary authenticity

STRUCTURE:
-- 8 stanzas of irregular length, moving from longer narrative stanzas to a short, isolated final couplet
-- The poem has a clear turning point (volta) at "End of story, except not really" -- everything before is the event; everything after is the psychological aftermath
-- Enjambment runs throughout, particularly across stanza breaks ("the / blood-shadow"), creating a sense of thoughts spilling over uncontrollably
-- The final couplet is deliberately isolated, mirroring the speaker's emotional isolation and the way the memory refuses to fit neatly into the past

VOICE & TENSE:
-- Opens in past tense (narrating the event) but shifts to present tense ("he's here in my head") to show the memory is ongoing and inescapable
-- Colloquial, conversational language ("legs it", "all chip in", "End of story") contrasts with moments of intense, graphic imagery -- the everyday voice makes the horror more shocking
-- The anecdotal "On another occasion" opening suggests this is just one of many such incidents, normalising the violence

KEY STRUCTURAL EFFECTS:
-- Caesura at "End of story, except not really" forces a pause that mirrors the speaker's failed attempt to move on
-- Repetition of "all three" in the shooting stanzas shows the speaker trying to share the guilt
-- The shift from communal "we" to isolated "I" and "my" tracks the journey from shared action to solitary guilt`,

  keyQuotes: [
    {
      quote: 'On another occasion',
      analysis:
        'The casual, anecdotal opening suggests this killing is just one of many routine incidents. "Another" implies repetition and desensitisation -- the speaker has experienced so much violence it has become mundane.',
      themes: ['Conflict', 'Power of memory'],
    },
    {
      quote: 'probably armed, possibly not',
      analysis:
        'The descending certainty (from "probably" to "possibly") reveals the speaker\'s moral doubt. He cannot be sure the killing was justified, and this uncertainty is the seed of his later guilt and PTSD.',
      themes: ['Guilt', 'Moral ambiguity', 'Conflict'],
    },
    {
      quote: 'tosses his guts back into his body',
      analysis:
        'Shockingly graphic and casual. The verb "tosses" implies a throwaway gesture, as if the man\'s insides are rubbish. This reveals how war desensitises soldiers to extreme violence -- at the time, they felt nothing.',
      themes: ['Reality of conflict', 'Desensitisation'],
    },
    {
      quote: 'End of story, except not really',
      analysis:
        'The volta of the poem. The caesura creates a pause that mirrors the speaker\'s failed attempt to close the chapter. "Except not really" is devastatingly understated -- this one line signals the shift from narrative to psychological torment.',
      themes: ['Power of memory', 'PTSD', 'Guilt'],
    },
    {
      quote: 'dug in behind enemy lines',
      analysis:
        'Extended military metaphor. The dead man has invaded the speaker\'s mind like a soldier entrenched in hostile territory. Ironically, the speaker\'s own psyche has become the battlefield -- the war has followed him home.',
      themes: ['Power of memory', 'PTSD', 'Conflict'],
    },
    {
      quote: 'his blood-shadow on the street',
      analysis:
        'A compound metaphor fusing blood stain and shadow. The "shadow" suggests the man\'s death has left a permanent, dark imprint -- both on the street and on the speaker\'s conscience. It cannot be washed away.',
      themes: ['Guilt', 'Power of memory'],
    },
    {
      quote: 'he\'s here in my head when I close my eyes',
      analysis:
        'The shift to present tense makes the haunting immediate and ongoing. "Here in my head" shows the dead man has become an inescapable mental presence -- the speaker cannot find peace even in sleep.',
      themes: ['PTSD', 'Power of memory', 'Individual vs. authority'],
    },
    {
      quote: 'His bloody life in my bloody hands',
      analysis:
        'A devastating pun: "bloody" works as a colloquial intensifier (swearing) and literal description (blood-stained). The idiom "blood on your hands" (meaning guilt for a death) is made horrifyingly literal. The end-stopped final line is inescapable and definitive.',
      themes: ['Guilt', 'Reality of conflict', 'PTSD'],
    },
    {
      quote: 'near to the knuckle',
      analysis:
        'An idiom meaning uncomfortably close to the truth. The phrase also has a physical, visceral quality -- "knuckle" connects to the body, hands, and the violence the speaker has committed. It suggests the memory is raw and painful.',
      themes: ['PTSD', 'Guilt'],
    },
  ],

  languageDevices: [
    {
      device: 'Colloquialism',
      example: 'legs it up the road',
      effect:
        'The informal, everyday language creates a sense of authenticity -- this sounds like a real soldier speaking, not a polished literary voice. It also normalises the violence, making the later horror more shocking by contrast.',
      lineRef: 2,
    },
    {
      device: 'Euphemism',
      example: 'End of story',
      effect:
        'The speaker tries to dismiss the killing as a closed chapter using a casual, dismissive phrase. The euphemism reveals his coping mechanism -- trying to minimise the significance of taking a life. Its immediate contradiction ("except not really") exposes the failure of this strategy.',
      lineRef: 18,
    },
    {
      device: 'Repetition',
      example: 'all three of us',
      effect:
        'Repeated emphasis on the collective action ("all three", "all of the same mind") reveals the speaker\'s desperation to distribute guilt. By insisting others were equally responsible, he tries -- and fails -- to lessen his personal burden.',
      lineRef: 14,
    },
    {
      device: 'Graphic imagery',
      example: 'tosses his guts back into his body',
      effect:
        'The visceral, almost unbearable detail forces the reader to confront the physical reality of violence. The casual verb "tosses" paired with such horrific content creates a jarring dissonance that reflects the soldier\'s desensitisation.',
      lineRef: 15,
    },
    {
      device: 'Pun ("bloody")',
      example: 'His bloody life in my bloody hands',
      effect:
        'The word operates on two levels simultaneously: as a common British swear word expressing frustration, and as a literal description of blood-stained hands. This dual meaning captures both the speaker\'s emotional anguish and physical guilt in a single devastating line.',
      lineRef: 29,
    },
    {
      device: 'Enjambment',
      example: 'the / blood-shadow on the street',
      effect:
        'Lines spill over stanza breaks, mirroring how the speaker\'s thoughts and memories overflow beyond his control. The fractured line structure reflects a fractured mind -- he cannot contain the memory within neat boundaries.',
      lineRef: 19,
    },
    {
      device: 'Military metaphor',
      example: 'dug in behind enemy lines',
      effect:
        'The dead man is described using the language of military strategy -- he has "dug in" (entrenched) in the speaker\'s mind. This ironic inversion shows that the war has followed the soldier home; his own psyche is now occupied territory.',
      lineRef: 24,
    },
    {
      device: 'Sibilance',
      example: 'sun-stunned, sand-smothered',
      effect:
        'The repeated "s" sounds create a hissing, suffocating quality that mirrors the oppressive desert heat and the speaker\'s sense of being smothered by memory. The alliterative compound adjectives also slow the reader down, forcing them to dwell in the discomfort.',
      lineRef: 25,
    },
  ],
}

/* ── Theme tokens ──────────────────────────────────────────────── */

const THEMES = [
  { label: 'Guilt', icon: HeartCrack, color: 'text-red-400 bg-red-500/10' },
  { label: 'PTSD / Trauma', icon: Brain, color: 'text-purple-400 bg-purple-500/10' },
  { label: 'Reality of conflict', icon: Swords, color: 'text-orange-400 bg-orange-500/10' },
  { label: 'Power of memory', icon: Eye, color: 'text-blue-400 bg-blue-500/10' },
  { label: 'Moral ambiguity', icon: Skull, color: 'text-amber-400 bg-amber-500/10' },
]

/* ── Comparison poems ──────────────────────────────────────────── */

const COMPARISONS = [
  {
    title: 'Bayonet Charge',
    poet: 'Ted Hughes',
    link: '/revision/poetry/power-and-conflict/bayonet-charge',
    points: [
      'Both explore the psychological impact of combat on individual soldiers',
      'Both use graphic, visceral imagery to convey the horror of violence',
      'Hughes focuses on the moment of action; Armitage on the aftermath and lasting trauma',
      'Bayonet Charge uses third person, creating distance; Remains uses first person, creating intimacy',
    ],
  },
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/power-and-conflict/war-photographer',
    points: [
      'Both deal with memories of conflict that haunt the speaker after returning to safety',
      'Both explore the gap between those who experience war and those who observe it from afar',
      'War Photographer has a controlled, regular structure; Remains uses irregular free verse, reflecting different coping mechanisms',
      'Both speakers are unable to escape the images of death they have witnessed',
    ],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    link: '/revision/poetry/power-and-conflict/kamikaze',
    points: [
      'Both explore the conflict between duty (military orders) and personal conscience',
      'Both question whether following orders is morally justified',
      'Kamikaze\'s pilot chooses not to kill and is punished by society; Armitage\'s soldier follows orders and is punished by his own mind',
      'Both poems examine how war destroys individuals -- whether through action or inaction',
    ],
  },
]

/* ── Page component ────────────────────────────────────────────── */

export default function RemainsPage() {
  return (
    <div className="space-y-8">
      {/* ── Breadcrumb / back ── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power and Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Remains</h1>
            <p className="text-body-sm text-muted-foreground">
              Simon Armitage &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
          </div>
        </div>
      </div>

      {/* ── Theme tokens ── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <span
            key={t.label}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${t.color}`}
          >
            <t.icon className="size-3.5" />
            {t.label}
          </span>
        ))}
      </div>

      {/* ── Interactive poem viewer ── */}
      <InteractivePoemViewer poem={REMAINS} />

      {/* ── Comparison poems ── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          Comparison Poems
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl">
          For the AQA exam, you must compare two poems from the anthology. These are
          the strongest pairings with "Remains" and the key points of comparison.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border/60 bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">by {c.poet}</p>

              <ul className="space-y-2 mb-4 flex-1">
                {c.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-card-foreground leading-relaxed">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rose-400/60" />
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.title}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
