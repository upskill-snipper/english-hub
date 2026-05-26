'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Target,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// ─── Critical-perspective personas ─────────────────────────────────────────
// AO5 for IAL / UK A-Level rewards engagement with NAMED critical positions.
// Each persona below frames the same passage from a different critical lens,
// gives the student three typical pushback questions the critic would ask,
// and a model "strong-defence" response skeleton. These are pre-authored
// prompts (not live AI) - no API cost, no hallucination risk, and predictable
// quality for practice. The UI is deliberately "dialogue card" so students
// learn the rhythm of critic → defence → counter.

type PersonaKey = 'feminist' | 'marxist' | 'new-historicist' | 'psychoanalytic' | 'post-colonial'

interface Persona {
  key: PersonaKey
  name: string
  shortName: string
  namedFigure: string
  summary: string
  openingMove: string
  pushbacks: string[]
  defenceSkeleton: string
}

const PERSONAS: Persona[] = [
  {
    key: 'feminist',
    name: 'Feminist / Gender-studies critic',
    shortName: 'Feminist',
    namedFigure: 'e.g. Sandra Gilbert & Susan Gubar, or Hélène Cixous',
    summary:
      'Reads texts through the lens of gender: how patriarchal ideology shapes plot, voice, silencing and agency. Strong feminist readings go beyond "this is a bad man and a victim woman" into how LANGUAGE and FORM reproduce or resist gendered power.',
    openingMove:
      '"Your reading treats the female characters as autonomous agents - but the narrative voice itself is patriarchal. Which choices of form and voice reinforce that, and which challenge it?"',
    pushbacks: [
      "Isn't the narrator sympathetic rather than complicit? Can you point to a moment where the form itself undermines the apparent sympathy?",
      "You cite the heroine's rebellion - but she is PUNISHED by the plot at the end. Doesn't the closure restore the ideology you said the book was resisting?",
      'What silences are you missing? Whose voices are NOT given soliloquies or free indirect discourse, and what does that exclusion do to the reader?',
    ],
    defenceSkeleton:
      'Acknowledge the critic\'s frame. Concede what YOUR reading doesn\'t address (e.g. "the closure does restore the marriage plot"). Then argue that ANOTHER feature - free indirect discourse, a specific word choice, a dramatic irony - complicates the ideology. End with a sharper thesis than you started with.',
  },
  {
    key: 'marxist',
    name: 'Marxist / materialist critic',
    shortName: 'Marxist',
    namedFigure: 'e.g. Raymond Williams, Terry Eagleton, or Fredric Jameson',
    summary:
      'Reads texts as products of class struggle and economic conditions. Not just "was the author rich or poor" but how the FORM of the novel/play reflects the COMMODIFICATION of culture, the structure of capital, the labour that made the text possible.',
    openingMove:
      '"Character psychology is the bourgeois trick - it makes class struggle look personal. How does your reading account for the material and economic conditions the text is actually describing?"',
    pushbacks: [
      'You analyse individual motives. But why does the plot depend on property transfer - marriage-as-capital, inheritance, work - as its engine? What does that mechanism tell us?',
      'The working-class characters speak in dialect; the upper-class in standard English. How is LANGUAGE ITSELF doing ideological work here?',
      'Who paid for the publication of this book? Who could afford to read it? How might that have shaped what it says and how it says it?',
    ],
    defenceSkeleton:
      'Grant the material frame. Show where YOUR close-reading HAS been picking up on class - even if not named as such. Then argue that the text is AMBIVALENT (contains both bourgeois and resistant elements), and that your reading is sensitive to that ambivalence. Name one specific textual feature.',
  },
  {
    key: 'new-historicist',
    name: 'New Historicist critic',
    shortName: 'New Historicist',
    namedFigure: 'e.g. Stephen Greenblatt, or Louis Montrose',
    summary:
      'Puts the literary text alongside non-literary texts from the same period (legal, medical, religious, political) and reads them AS EACH OTHER. No hierarchy between "literature" and "history" - both are cultural artefacts engaged in the same ideological work.',
    openingMove:
      '"You read the play in isolation. What about the witchcraft pamphlet of 1597 / the medical treatise on melancholia / the sermon on obedience - read alongside the text, what do they make possible or impossible?"',
    pushbacks: [
      'Your context is background. A New Historicist would say context and text are on the same plane. How does the text ACTIVELY CONSTRUCT the ideology you see in the period, rather than just reflecting it?',
      'What about the PERFORMATIVE setting - who staged this, for whom, at what political moment? The politics of the theatre itself is part of the text.',
      "You cite the author's intention. The New Historicist is sceptical of authorial intention - texts are produced by their culture as much as by the individual. How do you handle that?",
    ],
    defenceSkeleton:
      "Bring in a specific non-literary source from the period (law, pamphlet, sermon). Show how it shares structures with the text (vocabulary, anxieties, metaphors). Then argue that the text is both PRODUCT and PRODUCER of those structures - it does ideological work, it isn't just shaped by ideology. Hold the tension.",
  },
  {
    key: 'psychoanalytic',
    name: 'Psychoanalytic / Freudian-Lacanian critic',
    shortName: 'Psychoanalytic',
    namedFigure: 'e.g. Jacques Lacan, Julia Kristeva, or Peter Brooks',
    summary:
      'Reads the text as a structure of desire, repression and the unconscious. Not just "character X has daddy issues" but how the text itself stages absence, loss, displacement - and how those structures engage the reader\'s own unconscious.',
    openingMove:
      '"You analyse what the character says. What does the character NOT say, and how does the text make that absence felt? What is being repressed by the text, and what returns?"',
    pushbacks: [
      "You read the mother as a minor character. In psychoanalytic terms she's the ABSENT CENTRE - her absence structures the whole text. How does your reading change if she's central by virtue of being absent?",
      'Doubling, substitution, repetition - these are unconscious mechanisms. Where does the text repeat itself, and what is it trying to resolve?',
      "You say the ending is ambiguous. Psychoanalytic criticism would say the ending is SYMPTOMATIC - it betrays the text's own anxiety. What is being defended against?",
    ],
    defenceSkeleton:
      "Engage with the unconscious logic of the text. Pick one repetition, one displacement, or one symbolic substitution. Argue that your reading has been TRACKING that structure even if you didn't name it - and now name it. End by reframing your thesis around the text's anxiety, not the character's.",
  },
  {
    key: 'post-colonial',
    name: 'Post-colonial critic',
    shortName: 'Post-colonial',
    namedFigure: 'e.g. Edward Said, Gayatri Spivak, or Homi Bhabha',
    summary:
      'Reads texts produced by, about, or in the wake of colonial encounter. Interested in who speaks, who is spoken for, who is silenced - and in how the literary form itself carries colonial assumptions (genre, language, narrative authority).',
    openingMove:
      '"You read the colonial setting as backdrop. But who is the narrator speaking TO, and who is rendered incapable of speaking IN the novel? What does the form itself make thinkable, and what does it foreclose?"',
    pushbacks: [
      'The novel gives the native characters dialogue - but always through the protagonist\'s perception. Isn\'t that the very structure Said calls "Orientalism"?',
      'What languages are spoken in this world that are NOT rendered in the text? What does the monolingual English narration erase?',
      'You say the text critiques empire. Does it critique empire from WITHIN imperial assumptions (liberal reformist) or does it refuse those assumptions entirely? That distinction matters.',
    ],
    defenceSkeleton:
      "Grant the critic's structural point. Then pick ONE moment where the text itself seems to falter or betray its own colonial assumptions - a disruption in narrative voice, a character who exceeds their narrative position, a formal break. Argue that the text is more unstable than a simple pro/anti-colonial reading suggests. That instability is your reading.",
  },
]

// ─── UI ────────────────────────────────────────────────────────────────────

export default function CriticSimulatorPage() {
  const [selected, setSelected] = useState<PersonaKey | null>(null)
  const [pushbackIndex, setPushbackIndex] = useState(0)

  const persona = PERSONAS.find((p) => p.key === selected) ?? null

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/toolkit" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Toolkit
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-cyan-500/[0.04] p-6 sm:p-8">
        <Badge variant="secondary" className="mb-3">
          <Brain className="mr-1 size-3" />
          AO5 Trainer - A-Level / IAL
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          AO5 Critic Simulator
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          Pick a critical persona below. They open with a provocation about your studied text,
          follow up with three pushback questions, and give you a skeleton for a strong AO5 defence.
          Use this to practise the rhythm of critic → concede → reframe → sharpen before you hit a
          real Unit 3 or Unit 4 essay.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="size-3.5 text-primary" />
          <span>
            Worth up to 15% of A2 marks on IAL Units 3 & 4, and ~15% on UK A-Level literature
            papers. Named critics beat unnamed generic engagement every time.
          </span>
        </div>
      </section>

      {/* ── Persona picker ────────────────────────────────────────── */}
      {!persona && (
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="size-4.5 text-primary" />
            </div>
            <h2 className="text-heading-md font-heading text-foreground">
              Choose a critical perspective
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PERSONAS.map((p) => (
              <button
                key={p.key}
                onClick={() => {
                  setSelected(p.key)
                  setPushbackIndex(0)
                }}
                className="group flex flex-col rounded-xl border border-border/60 bg-card p-5 text-left transition-all hover:border-cyan-500/40 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-cyan-400" />
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {p.name}
                  </h3>
                </div>
                <p className="mt-1 text-[11px] italic text-muted-foreground">{p.namedFigure}</p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-4">
                  {p.summary}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-70 group-hover:opacity-100">
                  Start <ArrowRight className="size-3" />
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Active session ────────────────────────────────────────── */}
      {persona && (
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
                <MessageSquare className="size-5 text-cyan-400" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-1 text-[0.65rem] uppercase">
                  {persona.shortName} lens
                </Badge>
                <h2 className="text-heading-md font-heading text-foreground">{persona.name}</h2>
                <p className="text-[11px] italic text-muted-foreground">{persona.namedFigure}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelected(null)
                setPushbackIndex(0)
              }}
            >
              Change critic
            </Button>
          </div>

          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-cyan-400">Opening move</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground italic">{persona.openingMove}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-heading-sm font-heading">
                Pushback {pushbackIndex + 1} of {persona.pushbacks.length}
              </CardTitle>
              <CardDescription>
                Draft a response in your head (or on paper). When ready, reveal the next pushback to
                keep the pressure building.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4">
                <p className="text-sm text-foreground">{persona.pushbacks[pushbackIndex]}</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPushbackIndex(Math.max(0, pushbackIndex - 1))}
                  disabled={pushbackIndex === 0}
                >
                  <ArrowLeft className="size-3.5" />
                  Previous
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() =>
                    setPushbackIndex(Math.min(persona.pushbacks.length - 1, pushbackIndex + 1))
                  }
                  disabled={pushbackIndex === persona.pushbacks.length - 1}
                >
                  Next pushback <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20 bg-emerald-500/[0.02]">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-emerald-400">
                Your defence skeleton
              </CardTitle>
              <CardDescription>
                A structural template for writing AO5-grade responses to this persona.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground leading-relaxed">{persona.defenceSkeleton}</p>
            </CardContent>
          </Card>

          <div className="rounded-xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">How to use this in real essays:</span>{' '}
              in a Unit 3 or Unit 4 answer, you should name the critical position (e.g. &ldquo;a
              feminist reading, following Gilbert and Gubar, would argue that&nbsp;…&rdquo;), engage
              with it seriously, and then defend your own position against it. The skeleton above
              maps onto that rhythm. Markers reward the rhythm, not just the name.
            </p>
          </div>
        </section>
      )}

      {/* ── Footnote ─────────────────────────────────────────────── */}
      <p className="text-center text-[11px] text-muted-foreground/60">
        Critic personas are authored practice prompts - they do not call a live AI. Use them to
        rehearse the rhythm; bring your own live feedback via{' '}
        <Link href="/dashboard/essay/new" className="text-primary underline">
          AI essay marking
        </Link>{' '}
        after writing.
      </p>
    </div>
  )
}
