'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Remember',
  poet: 'Christina Rossetti',
  lines: [
    {
      text: 'Remember me when I am gone away,',
      annotations: [
        {
          type: 'Opening imperative',
          note: 'The poem opens with a direct command — "Remember me". The speaker is already addressing her beloved from beyond the experience of dying. The imperative verb gives the opening line its quiet authority.',
          color: '#3b82f6',
        },
        {
          type: 'Euphemism',
          note: '"Gone away" avoids the word "dead". Rossetti softens the harshness of death in the opening, treating it as a journey rather than an ending. This gentle tone sets up the whole poem\'s emotional register.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Gone far away into the silent land;',
      annotations: [
        {
          type: 'Key quote',
          note: '"The silent land" is a metaphor for death — a place without voices, without communication. The capitalised "L" in earlier versions sometimes gives it a biblical feel. "Silent" emphasises that the dead cannot speak.',
          color: '#f59e0b',
        },
        {
          type: 'Imagery',
          note: '"Silent land" draws on a long tradition of imagining the afterlife as a distant country. The quietness of the land is the poem\'s key feature: there will be no contact between speaker and beloved once she is there.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When you can no more hold me by the hand,',
      annotations: [
        {
          type: 'Physical detail',
          note: 'The hand-holding makes the love tangible. Rossetti grounds the abstract idea of death in a specific, everyday act of affection — the couple will no longer be able to touch.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Nor I half turn to go yet turning stay.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Half turn to go yet turning stay" is a beautiful image of reluctant parting — she leaves but turns back, cannot quite go. It captures the pattern of her relationship: always a little reluctant to leave.',
          color: '#f59e0b',
        },
        {
          type: 'Repetition (polyptoton)',
          note: '"Turn… turning" — the same verb repeated in different forms mimics the physical motion of turning back. The grammar enacts the gesture.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Remember me when no more day by day',
      annotations: [
        {
          type: 'Anaphora',
          note: '"Remember me" is repeated at the start of line 5, echoing line 1. This anaphora becomes the poem\'s emotional anchor. Memory is the act she asks for again and again.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'You tell me of our future that you planned:',
      annotations: [
        {
          type: 'Pathos',
          note: 'The beloved "plans" their future together — but we already know there is no future for them. The ordinary, hopeful act of future-planning becomes poignant because it is about to be cut short.',
          color: '#ef4444',
        },
        {
          type: 'Biography',
          note: 'Rossetti was twice engaged but never married — both engagements broken on religious grounds. Critics often read the poem as her reflection on her own cancelled futures.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Only remember me; you understand',
      annotations: [
        {
          type: 'Key quote',
          note: '"Only remember me" — the word "only" is crucial. She does not ask for grief, tears, or tribute. Just memory. The word "only" suggests both a modest request and the bare minimum of what she wants.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'It will be late to counsel then or pray.',
      annotations: [
        {
          type: 'Religious',
          note: 'Rossetti was deeply religious (High Anglican). "Counsel" (advice) and "pray" are her twin forms of care. Both become impossible once she is dead. The line acknowledges the limits of what the living can do for the dead.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Yet if you should forget me for a while',
      annotations: [
        {
          type: 'Volta',
          note: 'Classic sonnet volta — the turn at line 9. The word "Yet" signals a complete change in direction. Everything that follows reverses what came before. She moves from asking for memory to permitting forgetting.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: '"For a while" keeps the forgetting small and temporary. Rossetti is not asking her beloved to forget forever, only to be allowed to forget when grief becomes too much.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And afterwards remember, do not grieve:',
      annotations: [
        {
          type: 'Selflessness',
          note: 'This is where the poem\'s tenderness peaks. Do not grieve — even though he would be remembering that he forgot her. She releases him from the guilt of forgetting.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'For if the darkness and corruption leave',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Darkness and corruption" are literal images of the grave — bodies decaying in darkness. But they can also refer to grief\'s darkness and the corrupting effects of mourning. Rossetti lets both readings stand.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A vestige of the thoughts that once I had,',
      annotations: [
        {
          type: 'Key quote',
          note: '"A vestige" — a trace, a remnant. The idea is that even a fragment of her thoughts may survive her. It is a cautious, humble image of what might be left of her mind.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Better by far you should forget and smile',
      annotations: [
        {
          type: 'Key quote',
          note: 'One of the most-quoted lines in Victorian poetry. She prefers his happiness to her being remembered. This is radical selflessness — her legacy matters less than his wellbeing.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Than that you should remember and be sad.',
      annotations: [
        {
          type: 'Final couplet',
          note: 'The final line completes the volta\'s reversal. She began by asking to be remembered; she ends by telling him it is better to forget if remembering will hurt. The poem\'s emotional logic has moved from self-concern to pure love.',
          color: '#a855f7',
        },
      ],
    },
  ],

  context: `
    <h3>Christina Rossetti (1830–1894)</h3>
    <p>Christina Rossetti was one of the most important Victorian poets. She was the sister of the Pre-Raphaelite painter and poet Dante Gabriel Rossetti, and grew up in a literary and artistic London family of Italian descent. She published her first poems at age 17 and became famous for her 1862 collection <em>Goblin Market and Other Poems</em>.</p>

    <h3>Faith</h3>
    <p>Rossetti was a <strong>devoted High Anglican Christian</strong>, and her religious faith shapes almost all her poetry. She wrote hymns (including "In the Bleak Midwinter"), devotional works and poems about death, resurrection and the soul. "Remember" is not explicitly religious but is informed by her Christian acceptance of death as a passage rather than an ending.</p>

    <h3>Biography: the broken engagements</h3>
    <p>Rossetti was engaged twice but never married. Her first engagement, to the painter <strong>James Collinson</strong>, was broken in 1850 when he converted back to Roman Catholicism. Her second engagement, to the scholar <strong>Charles Cayley</strong>, ended for similar religious reasons. Many critics read "Remember" as one of her many poems about lost love and the futures that never happened.</p>

    <h3>Date and publication</h3>
    <p>"Remember" was written in <strong>1849</strong>, when Rossetti was just 19 years old, and published in 1862 in <em>Goblin Market and Other Poems</em>. Its remarkable maturity — a young woman imagining her own death and releasing her beloved from grief — astonished early readers.</p>

    <h3>Victorian death culture</h3>
    <p>The Victorians were famously preoccupied with death and mourning. Mourning had elaborate social rituals — black clothes, long periods of withdrawal, memorial portraits and hair jewellery. Rossetti\'s poem is striking because it resists these rituals. She does not want her beloved to be consumed by grief; she wants him to smile. This was a gentler, more modern view of mourning.</p>

    <h3>Place in the canon</h3>
    <p>"Remember" has become one of the most frequently read poems at funerals and memorial services. Its balance of grief and consolation, and its quiet permission to move on, make it one of the tenderest poems about dying in English.</p>
  `,

  summary: `Lines 1–4 (first quatrain): The speaker asks her beloved to remember her after she has died. She imagines her death as going "far away into the silent land". She describes the physical losses — he can no longer hold her hand, and she can no longer half-turn back the way lovers do when parting reluctantly.

Lines 5–8 (second quatrain): The speaker continues her request. She asks him to remember her when he can no longer tell her about "our future that you planned". She says "Only remember me" — a simple, modest request. Once she is dead, it will be too late for him to offer her counsel or prayer.

Lines 9–14 (sestet — the turn): The poem\'s volta comes at line 9 with "Yet". The speaker now changes her request. If her beloved should happen to forget her for a while — and then remember that he forgot — she does not want him to grieve about it. If forgetting her will bring him peace, that is better than remembering with sadness. She ends by saying it is "Better by far you should forget and smile / Than that you should remember and be sad."

Overall meaning: The poem is a love letter about dying. At first the speaker asks to be remembered, but halfway through she reverses herself: her beloved\'s happiness matters more than being remembered. The poem moves from the speaker\'s own concern for her legacy to a selfless concern for her beloved\'s peace of mind. It is a deeply tender meditation on how love can release the other from obligation — even the obligation of memory.`,

  formAndStructure: `Form: A Petrarchan (Italian) sonnet — 14 lines divided into an octave (eight lines) and a sestet (six lines). Rossetti\'s choice of Petrarchan form, rather than Shakespearean, is significant — it gives the volta greater dramatic weight.

Rhyme scheme: ABBA ABBA CDD ECE. The octave follows the strict Italian pattern with only two rhymes, creating a closed, meditative feel. The sestet\'s looser rhyme scheme reflects the softening and freeing-up of the speaker\'s position.

Metre: Iambic pentameter throughout — ten syllables per line, five unstressed-stressed feet. The regularity is gentle and speech-like, suited to the poem\'s tone of quiet address.

The octave (lines 1–8): The speaker asks to be remembered. The repeated imperative "Remember me" (lines 1, 5, 7) anchors this section. She imagines concrete losses — hand-holding, future-planning, counsel, prayer. The tone is pleading but calm.

The sestet (lines 9–14): The volta at line 9 reverses everything. "Yet if you should forget me for a while…" The speaker now permits forgetting. The tone becomes gentler still, and by the final couplet she has reversed her request entirely. The structural break between octave and sestet is the hinge of the poem.

Volta: The turn is marked by "Yet" at the start of line 9 — one of the cleanest, quietest voltas in English poetry. It does not shout; it simply reconsiders. This is a volta of emotional generosity, not of argument.

Repetition: "Remember me" repeats (lines 1, 5, 7) through the octave, establishing the request. "Forget" appears twice in the sestet. The word-count shift from "remember" to "forget" tracks the poem\'s emotional journey.

Enjambment and caesura: The lines flow gently into each other, with most of the pauses coming at line ends. The poem\'s steadiness — no sudden stops, no violent breaks — matches its tone of serene acceptance.

Tone: Tender, quiet, loving. Remarkably, there is no anger, no fear, no bitterness. The speaker accepts her own death as given and focuses entirely on the wellbeing of her beloved. This calmness is the poem\'s most distinctive feature.`,

  keyQuotes: [
    {
      quote: 'Remember me when I am gone away, / Gone far away into the silent land',
      analysis:
        'The opening imperative — "Remember me" — is the poem\'s central request. "Gone away" is a gentle euphemism for death, treating it as a journey rather than an ending. "The silent land" is the poem\'s most striking metaphor for death: a place without voices, where communication between the living and the dead is no longer possible. The soft alliteration in "silent" and "land" gives the line a hushed, reverent quality.',
      themes: ['Death', 'Memory', 'Farewell'],
    },
    {
      quote: 'Nor I half turn to go yet turning stay',
      analysis:
        'A beautifully observed image of parting. Anyone who has ever said goodbye to someone they love knows the gesture — half turning to leave, then turning back, lingering. The repetition "turn… turning" mimics the motion of the body itself. Rossetti captures not the idea of losing a beloved but the specific physical reluctance that real goodbyes involve.',
      themes: ['Parting', 'Intimacy', 'Reluctance'],
    },
    {
      quote: 'You tell me of our future that you planned',
      analysis:
        'The beloved\'s act of planning a future together becomes poignant because the reader knows there is no future for them. The verb "planned" is in the past — even as they talk about what is to come, their plans are already historical. The line has special resonance given Rossetti\'s own broken engagements. She knew what it felt like to imagine a future with someone that never arrived.',
      themes: ['Lost futures', 'Plans', 'Pathos'],
    },
    {
      quote: 'Only remember me',
      analysis:
        'The word "only" is the poem\'s quiet centre. She asks for nothing else — not grief, not tears, not monuments. Just memory, and the bare fact of being remembered. "Only" simultaneously lowers and raises the stakes: it is a modest request, but also a declaration that memory is the one thing she cannot live without. The simplicity of the phrase matches the simplicity of what she wants.',
      themes: ['Modesty', 'Memory', 'Request'],
    },
    {
      quote: 'Yet if you should forget me for a while / And afterwards remember, do not grieve',
      analysis:
        'The volta of the sonnet. The word "Yet" quietly reverses everything. The speaker now permits forgetting — but only "for a while", and only on condition that when he remembers, he does not grieve about it. This is extraordinarily gentle and generous. She has imagined his future grief at having forgotten her and tries to release him from it in advance.',
      themes: ['Forgetting', 'Forgiveness', 'Generosity'],
    },
    {
      quote: 'A vestige of the thoughts that once I had',
      analysis:
        '"Vestige" means a trace, a remnant. Rossetti is extraordinarily humble about what will survive of her — not her whole mind, not her love, just "a vestige". The line captures the uncertain Christian hope of her time: that something of the mind may persist after death, but nothing guaranteed. It is a cautious, honest image of afterlife.',
      themes: ['Afterlife', 'Humility', 'Legacy'],
    },
    {
      quote: 'Better by far you should forget and smile / Than that you should remember and be sad',
      analysis:
        'The final couplet is one of the most quoted lines in Victorian poetry. The speaker places her beloved\'s happiness above her own legacy. "Forget and smile" is set directly against "remember and be sad" — and forgetting wins. This is radical selflessness: she would rather be lost from his memory than be a source of pain. The poem ends not with a plea for remembrance but with a release from it.',
      themes: ['Selflessness', 'Love beyond self', 'Release'],
    },
    {
      quote: 'It will be late to counsel then or pray',
      analysis:
        'A quietly devastating line. Once she is dead, the beloved can no longer give her counsel or offer her prayers — or rather, prayers for her will be possible but their effect is uncertain. The line acknowledges the bitter truth that death puts an end to the small, daily gestures of care that make up a relationship. "Late" is doing enormous emotional work here.',
      themes: ['Limits of care', 'Finality', 'Religion'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'Remember me when I am gone away… / Remember me when no more day by day… / Only remember me',
      effect:
        'The repetition of "Remember me" at the start of lines 1, 5 and 7 anchors the octave in a single request. The anaphora gives the poem the feel of a whispered litany — almost a prayer. When the sestet replaces "remember" with "forget", the emotional shift is even more striking because of how insistently she had asked for memory.',
      lineRef: 0,
    },
    {
      device: 'Metaphor',
      example: 'Gone far away into the silent land',
      effect:
        'Death becomes "the silent land" — a quiet country you travel to. The metaphor domesticates death, making it a place rather than an absence. "Silent" is the key adjective: communication is what ends. The metaphor softens the harshness of dying without denying its finality.',
      lineRef: 1,
    },
    {
      device: 'Volta',
      example: 'Yet if you should forget me for a while',
      effect:
        'The structural turn of the sonnet. The word "Yet" is small but it reverses the poem\'s direction entirely. Before the volta, the speaker asks to be remembered; after it, she permits forgetting. This kind of volta — of emotional generosity rather than logical argument — is rare and gives the poem its tenderness.',
      lineRef: 8,
    },
    {
      device: 'Antithesis',
      example: 'forget and smile… remember and be sad',
      effect:
        'The final couplet places forgetting+happiness directly against remembering+sadness. The parallel construction makes the choice crystal clear. Rossetti argues, through this balance, that the beloved\'s emotional wellbeing outweighs her own place in his memory. The antithesis is the poem\'s ethical argument.',
      lineRef: 12,
    },
    {
      device: 'Euphemism',
      example: 'gone away… silent land… darkness and corruption',
      effect:
        'Rossetti rarely uses the word "death" directly. Instead she circles it with gentle alternatives: "gone away", "silent land", and even the more direct "darkness and corruption" are still metaphorical rather than literal. The accumulation of euphemisms softens death and lets the poem remain a love poem rather than a horror.',
      lineRef: 1,
    },
    {
      device: 'Iambic pentameter',
      example: 'Re-MEM-ber ME when I am GONE a-WAY',
      effect:
        'The gentle, steady five-beat rhythm gives the poem a speech-like calm. Unlike Shakespeare\'s Sonnet 116, which disrupts its metre for emotional effect, Rossetti keeps her rhythm almost perfectly regular — a sign of the speaker\'s self-control and acceptance. The steady beat matches the steady voice of a woman facing her own death without panic.',
      lineRef: 0,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    href: '/igcse/edexcel/poetry/sonnet-116',
    reason:
      'Both are sonnets about the nature of love and time. Shakespeare argues love is "ever-fixed" and does not change; Rossetti asks her beloved to remember her but is willing to release him from memory. Compare the absolute constancy of Shakespeare\'s love with Rossetti\'s more flexible, self-sacrificing version.',
    themes: ['Sonnet form', 'Love and time', 'Enduring love'],
  },
  {
    title: 'Do not go gentle into that good night',
    poet: 'Dylan Thomas',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems are about dying. Thomas urges fierce resistance — "rage, rage against the dying of the light". Rossetti offers calm acceptance and release. Compare two completely opposite attitudes to death: defiance and serenity.',
    themes: ['Death', 'Acceptance vs. defiance'],
  },
  {
    title: 'Poem at Thirty-Nine',
    poet: 'Alice Walker',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems explore how the living remember the dead. Walker looks back at her father\'s gentle presence; Rossetti imagines being looked back at. Compare how each writer imagines memory as a living act.',
    themes: ['Memory', 'Loss', 'Continuing love'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function RememberPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Remember
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Christina Rossetti &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another
          from the anthology. These are strong pairings for Remember.
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
