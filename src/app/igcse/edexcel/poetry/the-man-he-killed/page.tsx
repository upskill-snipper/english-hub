'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'The Man He Killed',
  poet: 'Thomas Hardy',
  lines: [
    {
      text: '"Had he and I but met',
      annotations: [
        {
          type: 'Conditional mood',
          note: '"Had he and I but met" — the poem opens with a hypothetical. The speaker imagines a different world in which he and the enemy soldier met in peaceful circumstances. The conditional "had...but" immediately establishes regret.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'By some old ancient inn,',
      annotations: [
        {
          type: 'Setting',
          note: 'An "old ancient inn" is a place of fellowship, warmth and community. It is the exact opposite of a battlefield. The redundancy of "old ancient" gives the inn a timeless, folksy quality — a place where ordinary men belong.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'We should have sat us down to wet',
      annotations: [
        {
          type: 'Colloquial language',
          note: '"Sat us down to wet" — colloquial for sitting down to have a drink. Hardy writes in the voice of a common soldier, using the plain, unpoetic language of a working man. This is not a general or politician speaking — it is an ordinary person.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Right many a nipperkin!',
      annotations: [
        {
          type: 'Dialect',
          note: '"Right many a nipperkin" — a nipperkin is a small cup of liquor. The dialect word grounds the speaker in rural, working-class England. The exclamation mark suggests friendliness and warmth — these are men who would have enjoyed each other\'s company.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: '"But ranged as infantry,',
      annotations: [
        {
          type: 'Key quote',
          note: '"But ranged as infantry" — the single word "But" is the poem\'s pivotal turn. Everything before was warm and hypothetical; now reality intrudes. "Ranged as infantry" is military language — impersonal, mechanical. The men are no longer individuals but soldiers arranged in lines.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And staring face to face,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Staring face to face" — the two men look directly at each other. This is crucial: the speaker sees the enemy as a human being with a face, not an abstract threat. The intimacy of the encounter makes the killing personal and deeply troubling.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I shot at him as he at me,',
      annotations: [
        {
          type: 'Key quote',
          note: '"I shot at him as he at me" — the chiasmus (I/him, he/me) shows perfect symmetry between the two men. They are mirror images of each other. The line\'s matter-of-fact simplicity is devastating — no heroism, no glory, just two men shooting at each other.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And killed him in his place.',
      annotations: [
        {
          type: 'Bluntness',
          note: '"And killed him in his place" — shockingly plain. No euphemism, no poetic dressing. "In his place" means both "where he stood" and suggests that the enemy died in a position that could equally have been the speaker\'s. The simplicity of the killing contrasts horribly with the warmth of stanza 1.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '' },
    {
      text: '"I shot him dead because —',
      annotations: [
        {
          type: 'Key quote',
          note: '"I shot him dead because —" the dash is the most important piece of punctuation in the poem. The speaker tries to explain why he killed the man and cannot. The dash represents a gap in understanding — a moment of moral confusion that the rest of the stanza tries to fill.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Because he was my foe,',
      annotations: [
        {
          type: 'Repetition',
          note: '"Because" is repeated — the speaker is trying to convince himself. "He was my foe" is the official answer, the one the army would give. But the hesitation before it, and the unconvincing elaboration that follows, shows the speaker does not really believe it.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Just so: my foe of course he was;',
      annotations: [
        {
          type: 'Key quote',
          note: '"Just so: my foe of course he was" — the speaker is trying too hard. "Just so", "of course" — these are phrases of self-persuasion, not conviction. The inverted syntax ("my foe of course he was") sounds awkward and forced, as if the words don\'t quite fit. The speaker is reciting a reason he doesn\'t fully believe.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "That's clear enough; although",
      annotations: [
        {
          type: 'Irony',
          note: '"That\'s clear enough" — but it is not clear at all. The semicolon and "although" immediately undermine the assertion. Nothing about this killing is clear to the speaker. Hardy uses dramatic irony: the reader can see what the speaker is trying to hide from himself.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: "\"He thought he'd 'list, perhaps,",
      annotations: [
        {
          type: 'Empathy',
          note: '"He thought he\'d \'list, perhaps" — the speaker imagines the dead man\'s motivations. "\'list" is dialect for "enlist". "Perhaps" shows uncertainty — the speaker is guessing, humanising the enemy by imagining him as a man who made choices, not a faceless threat.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Off-hand like — just as I —',
      annotations: [
        {
          type: 'Key quote',
          note: '"Off-hand like — just as I —" is the poem\'s most devastating moment. The dashes surround the terrible recognition: the dead man enlisted for the same casual, unconsidered reasons as the speaker. "Just as I" — they are the same person. The enemy is a mirror.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Was out of work — had sold his traps —',
      annotations: [
        {
          type: 'Social commentary',
          note: '"Out of work — had sold his traps" — "traps" means belongings. The dead man was unemployed and had sold everything he owned. He joined the army not from patriotism but from poverty. Hardy exposes the economic reality behind soldiering: these men kill each other because they are poor.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'No other reason why.',
      annotations: [
        {
          type: 'Anti-war statement',
          note: '"No other reason why" — no ideology, no hatred, no patriotism. The man died, and the speaker killed, for no meaningful reason at all. The flat, declarative sentence is Hardy\'s quiet indictment of war: men kill strangers because poverty left them no other choice.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '' },
    {
      text: '"Yes; quaint and curious war is!',
      annotations: [
        {
          type: 'Key quote',
          note: '"Quaint and curious" is a massive understatement. War is not "quaint" — it is horrific. The speaker uses these mild, almost absurd words because he has no language adequate to describe what he has done. The understatement is more powerful than any outrage could be.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'You shoot a fellow down',
      annotations: [
        {
          type: 'Language',
          note: '"Fellow" — not "enemy", not "foe", but "fellow". A fellow is an equal, a companion. The word choice reveals what the speaker really thinks: he killed a fellow human being, not an enemy. The colloquial language strips away all military justification.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "You'd treat if met where any bar is,",
      annotations: [
        {
          type: 'Circular structure',
          note: 'The poem circles back to the inn from stanza 1. The speaker would have bought this man a drink. They would have been friends. Instead, one is dead. The return to the bar completes the circle and makes the waste inescapable.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Or help to half-a-crown."',
      annotations: [
        {
          type: 'Final image',
          note: '"Half-a-crown" — a small sum of money. The speaker would have given the dead man a coin to help him out, one poor man helping another. Instead, he killed him. The modest, human generosity of "half-a-crown" contrasts devastatingly with the act of killing. The poem ends with this quiet, unbearable irony.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Thomas Hardy (1840-1928)</h3>
    <p>Hardy was an English novelist and poet, best known for novels like <em>Tess of the d'Urbervilles</em> and <em>Far from the Madding Crowd</em>. In later life he turned primarily to poetry. His work is characterised by <strong>pessimism</strong>, sympathy for ordinary people, and a sharp awareness of how <strong>fate</strong> and <strong>circumstance</strong> shape human lives. He was deeply sceptical of institutions, including the military and the church.</p>

    <h3>The Boer War (1899-1902)</h3>
    <p>"The Man He Killed" was written in <strong>1902</strong>, during the Second Boer War in South Africa. Britain fought against Dutch-descended settlers (Boers) for control of territory rich in gold and diamonds. The war was controversial — many in Britain questioned whether it was justified. Hardy was among the sceptics, and this poem reflects his view that ordinary soldiers on both sides were victims of forces they did not understand or control.</p>

    <h3>The dramatic monologue</h3>
    <p>The poem is a <strong>dramatic monologue</strong> — Hardy creates a character distinct from himself. The speaker is an ordinary working-class soldier, not an educated poet. Hardy uses dialect, colloquial language and simple vocabulary to create a convincing voice. The effect is that the anti-war message comes not from an intellectual but from a man who has actually experienced killing — and is struggling to make sense of it.</p>

    <h3>Class and poverty</h3>
    <p>Hardy emphasises that both the speaker and the dead man are <strong>poor</strong>. They enlisted because they were unemployed, not from patriotic fervour. This is Hardy's social critique: wars are fought by the working class, who kill each other while the powerful profit. The speaker and his "foe" have more in common with each other than with the people who sent them to fight.</p>

    <h3>Hardy and war poetry</h3>
    <p>This poem predates the First World War by over a decade, but it anticipates the disillusionment of later war poets like <strong>Wilfred Owen</strong> and <strong>Siegfried Sassoon</strong>. Like them, Hardy strips war of its glory and reveals the human cost. Unlike the later poets, Hardy never experienced combat himself — he writes from imaginative sympathy, not personal trauma.</p>
  `,

  summary: `Stanza 1 (lines 1-4): The speaker imagines a different world. If he and the dead man had met in an inn instead of on a battlefield, they would have sat down together and shared drinks like friends. The tone is warm, colloquial and folksy.

Stanza 2 (lines 5-8): But in reality they met as enemy soldiers. "Ranged as infantry" — lined up against each other — they stared face to face and shot at each other. The speaker killed his man. The language becomes blunt and matter-of-fact: "I shot at him as he at me, / And killed him in his place."

Stanza 3 (lines 9-12): The speaker tries to explain why he killed the man. "I shot him dead because — / Because he was my foe." The hesitation (the dash, the repeated "because") reveals that the speaker does not really understand his own action. He tries to convince himself with "Just so: my foe of course he was" but the forced phrasing betrays doubt.

Stanza 4 (lines 13-16): The speaker imagines the dead man's life. He probably enlisted "off-hand like — just as I" — casually, without thinking. He was out of work and had sold his belongings. He joined the army because he had no money, not because of patriotism. "No other reason why" — the killing was pointless.

Stanza 5 (lines 17-20): The speaker reflects on the absurdity of war. "Yes; quaint and curious war is!" — a devastating understatement. You kill a "fellow" you would have bought a drink, or lent money to. The poem returns to the inn of stanza 1, completing a painful circle.

Overall meaning: The poem is a quiet, devastating anti-war statement. Hardy shows that enemy soldiers are ordinary men, identical in their poverty and circumstances. The speaker cannot justify the killing because there is no justification — war forces men to kill their equals for no reason they can understand.`,

  formAndStructure: `Form: Dramatic monologue in five quatrains with a regular ABAB rhyme scheme. The poem is enclosed in quotation marks throughout — the speaker is literally being "quoted", as if giving testimony or telling his story to someone in a pub.

Rhyme scheme: ABAB in each stanza — simple, regular, predictable. The neatness of the rhyme contrasts with the moral confusion of the content. The form is orderly; the speaker's thoughts are not.

Metre: Roughly iambic, alternating tetrameter and trimeter (8 and 6 syllables per line). This is ballad metre — the same form used for folk songs and storytelling. Hardy deliberately uses the simplest possible verse form for the most complex possible moral question.

Colloquial voice: The poem is written in dialect and colloquial language — "nipperkin", "'list", "off-hand like", "traps", "half-a-crown". This creates the illusion of a real person speaking. The unpoetic language makes the anti-war message more powerful because it comes from experience, not theory.

Structure — five movements:
• Stanza 1: The hypothetical — what might have been (the inn).
• Stanza 2: The reality — what happened (the killing).
• Stanza 3: The attempted justification — "because he was my foe".
• Stanza 4: The identification — he was just like me.
• Stanza 5: The conclusion — war is "quaint and curious".

Dashes: The poem's most important punctuation marks are dashes, especially in stanza 3 ("I shot him dead because —") and stanza 4 ("Off-hand like — just as I —"). These represent the speaker's difficulty in articulating what he feels. The dashes are gaps in understanding — places where language fails.

Circular structure: The poem begins and ends with the image of meeting at an inn/bar. This circularity traps the speaker in his dilemma: he cannot escape the fact that he killed a man who should have been his friend.

Tone: Conversational, confused, regretful, understated. The speaker is not angry — he is bewildered. His quietness is more affecting than any outrage.`,

  keyQuotes: [
    {
      quote: 'Had he and I but met / By some old ancient inn',
      analysis:
        'The conditional mood ("Had...but") establishes a world that might have been. The "old ancient inn" is a place of community and fellowship — the opposite of a battlefield. Hardy uses the warmth of this imagined meeting to make the reality of the killing more devastating. The redundancy of "old ancient" gives the inn a timeless quality, as if friendship between such men is the natural state and war the aberration.',
      themes: ['Fellowship', 'War vs peace', 'Hypothetical'],
    },
    {
      quote: 'I shot at him as he at me, / And killed him in his place',
      analysis:
        'The chiasmus ("I...him" / "he...me") creates perfect symmetry — the two men are interchangeable. "Killed him in his place" is chillingly blunt. The matter-of-fact tone is more powerful than any emotional outburst would be. Hardy lets the act speak for itself.',
      themes: ['Symmetry', 'Bluntness', 'Killing'],
    },
    {
      quote: 'I shot him dead because — / Because he was my foe',
      analysis:
        'The dash after "because" is the poem\'s moral crisis. The speaker reaches for a reason and finds... a pause. When the reason comes — "Because he was my foe" — it sounds hollow. The repetition of "because" reveals a man trying to convince himself. The official justification ("foe") feels like borrowed language, not personal conviction.',
      themes: ['Justification', 'Doubt', 'Language'],
    },
    {
      quote: "Just so: my foe of course he was; / That's clear enough; although",
      analysis:
        'Every phrase here undermines itself. "Just so" and "of course" are phrases of over-insistence — the speaker protests too much. "That\'s clear enough" is immediately contradicted by "although". Hardy builds the stanza from a series of self-corrections, showing a mind that cannot settle on what it believes.',
      themes: ['Self-persuasion', 'Irony', 'Confusion'],
    },
    {
      quote: 'Off-hand like — just as I —',
      analysis:
        'The most devastating recognition in the poem. "Just as I" — the dead man joined the army for exactly the same reasons as the speaker. They are the same person. The dashes surrounding this recognition mark it as a moment of painful clarity. The casual "off-hand like" makes it worse: neither man thought carefully about enlisting, and now one is dead.',
      themes: ['Mirror image', 'Chance', 'Identification'],
    },
    {
      quote: 'Was out of work — had sold his traps — / No other reason why',
      analysis:
        'The dead man\'s motivation is revealed: poverty. "Sold his traps" (belongings) means he had nothing left. "No other reason why" is Hardy\'s social critique — men enlist not from patriotism but from economic desperation. The killing is therefore doubly meaningless: not even ideology drove it, just poverty.',
      themes: ['Poverty', 'Social critique', 'Meaninglessness'],
    },
    {
      quote: 'Yes; quaint and curious war is!',
      analysis:
        'A masterpiece of understatement. "Quaint and curious" are the mildest possible adjectives for the horror of war. The speaker has no adequate language for what he has experienced. The understatement contains enormous suppressed emotion — the gap between what he says and what he feels is the poem\'s tragedy.',
      themes: ['Understatement', 'Inadequacy of language', 'War'],
    },
    {
      quote: "You shoot a fellow down / You'd treat if met where any bar is",
      analysis:
        'The word "fellow" is crucial — not "enemy" or "foe" but "fellow", meaning an equal, a companion. The speaker reveals his true view: the man he killed was not a foe but a fellow. The return to the bar/inn of stanza 1 completes the poem\'s circle and makes the waste of the killing inescapable.',
      themes: ['Fellowship', 'Circular structure', 'Waste'],
    },
  ],

  languageDevices: [
    {
      device: 'Dramatic monologue',
      example: 'The entire poem in quotation marks — "Had he and I but met..."',
      effect:
        'Hardy creates a character distinct from himself — an ordinary, uneducated soldier. The quotation marks frame the poem as testimony, as if the speaker is telling his story aloud (perhaps in the very pub he mentions). This makes the anti-war message more credible: it comes from direct experience, not intellectual argument.',
      lineRef: 0,
    },
    {
      device: 'Colloquial diction',
      example: "nipperkin, 'list, off-hand like, traps, half-a-crown",
      effect:
        'The dialect and colloquial vocabulary establish the speaker as working-class. This is politically important: Hardy shows that the men who fight wars are poor. The unpoetic language also strips away the romantic diction of pro-war poetry, replacing glory with the plain speech of a confused, ordinary man.',
      lineRef: 3,
    },
    {
      device: 'Dashes (caesura)',
      example: 'I shot him dead because — / Off-hand like — just as I —',
      effect:
        'The dashes represent gaps in the speaker\'s understanding. They are moments where thought breaks down, where the speaker cannot complete his sentence or his reasoning. The dash after "because —" is the poem\'s central moral crisis: the speaker reaches for a reason and finds silence.',
      lineRef: 10,
    },
    {
      device: 'Chiasmus / Symmetry',
      example: 'I shot at him as he at me',
      effect:
        'The mirrored structure ("I...him" / "he...me") makes the two soldiers interchangeable. The chiasmus enacts the poem\'s argument: the two men are identical, and only chance placed them on opposite sides. The grammatical symmetry is a form of moral argument.',
      lineRef: 7,
    },
    {
      device: 'Understatement / Litotes',
      example: 'Yes; quaint and curious war is!',
      effect:
        'Calling war "quaint and curious" is a radical understatement. The gap between the mild words and the terrible reality creates an irony that is more devastating than outrage. The speaker\'s inability to find adequate words IS the point — the experience has exceeded his language.',
      lineRef: 19,
    },
    {
      device: 'Circular structure',
      example: 'inn (stanza 1) → bar (stanza 5)',
      effect:
        'The poem begins and ends with the image of sharing a drink. The circularity traps the speaker and the reader in the central paradox: war makes enemies of men who should be friends. The return to the bar is not comforting — it is a reminder of what has been destroyed.',
      lineRef: 21,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      'Both poems strip war of its glory and reveal the suffering of ordinary soldiers. Hardy focuses on the moral absurdity of killing; Owen focuses on the physical and psychological cost borne by an individual man. Compare how each poet uses plainness, contrast and irony to convey war’s futility.',
    themes: ['Futility of war', 'Suffering', 'Common soldiers'],
  },
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/igcse/edexcel/poetry/war-photographer',
    reason:
      'Both poems wrestle with the moral consequences of seeing or causing violence. Hardy’s soldier struggles to justify a killing he committed; Duffy’s photographer struggles with the weight of bearing witness. Compare how each poet shows the conscience confronting war.',
    themes: ['Witness', 'Conscience', 'War'],
  },
  {
    title: 'Half-Caste',
    poet: 'John Agard',
    href: '/igcse/edexcel/poetry/half-caste',
    reason:
      "Both poems use a first-person speaker whose colloquial language is politically significant. Hardy's soldier speaks in dialect to expose the reality of war; Agard speaks in Creole to dismantle racial prejudice. Compare how each poet uses voice to challenge institutional power.",
    themes: ['Voice', 'Power', 'Colloquial language'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function TheManHeKilledPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-slate-500/10">
            <BookOpen className="size-5 text-slate-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">The Man He Killed</h1>
            <p className="text-body-sm text-muted-foreground">
              Thomas Hardy &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      <section
        aria-label="Anthology scope notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div>
            <p>
              <strong className="text-foreground">
                This poem is not in the current Edexcel IGCSE 4ET1 anthology.
              </strong>{' '}
              It may have been included in earlier syllabus cycles or is provided as wider-reading
              content. Confirm via the official Pearson Edexcel anthology before relying on it for
              assessment.
            </p>
          </div>
        </div>
      </section>

      <InteractivePoemViewer poem={poem} />

      <StudyTools
        textName="The Man He Killed"
        textType="poem"
        examBoard="Edexcel"
        variant="compact"
      />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Man He Killed is not in the current 4ET1 anthology, so these are wider-reading
          pairings rather than exam-ready comparisons. Each poem listed here <em>is</em> in the 4ET1
          anthology, so you can practise the comparison skill while staying within the prescribed
          set.
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
    </div>
  )
}
