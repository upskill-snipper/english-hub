import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompareArrows } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  InteractivePoemViewer,
  PoemData,
} from '@/components/study'
import StudyTools from '@/components/study/StudyTools'

/* ── Metadata ──────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'War Photographer -- Carol Ann Duffy | The English Hub',
  description:
    'Interactive GCSE study guide for War Photographer by Carol Ann Duffy. Annotations, key quotes, language analysis, form & structure, and comparison poems.',
}

/* ── Poem data ─────────────────────────────────────────────────── */

const WAR_PHOTOGRAPHER: PoemData = {
  title: 'War Photographer',
  poet: 'Carol Ann Duffy',

  lines: [
    // Stanza 1
    {
      text: 'In his darkroom he is finally alone',
      annotations: [
        { type: 'Imagery', note: '"Darkroom" has a dual meaning: the literal photographic developing room and the darkness/horror of what he has witnessed.', color: '#3b82f6' },
        { type: 'Tone', note: '"Finally alone" suggests relief — he is away from the war zones at last, yet isolation also implies emotional distance.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'with spools of suffering set out in ordered rows.',
      annotations: [
        { type: 'Sibilance', note: 'The repeated "s" sounds in "spools of suffering set" create a soft, solemn tone, almost like a whispered prayer.', color: '#10b981' },
        { type: 'Metaphor', note: '"Spools of suffering" — the film rolls contain images of real human pain; the suffering is literally wound up inside them.', color: '#f59e0b' },
        { type: 'Contrast', note: '"Ordered rows" contrasts with the chaos of war — the photographer imposes order on something inherently disordered.', color: '#ef4444' },
      ],
    },
    {
      text: 'The only light is red and softly glows,',
      annotations: [
        { type: 'Symbolism', note: 'Red light suggests danger, blood, and war — the developing room mirrors the battlefield.', color: '#ef4444' },
      ],
    },
    {
      text: 'as though this were a church and he',
      annotations: [
        { type: 'Simile / Religious imagery', note: 'Comparing the darkroom to a church elevates the act of developing photographs to something sacred and reverential.', color: '#3b82f6' },
      ],
    },
    {
      text: 'a priest preparing to intone a Mass',
      annotations: [
        { type: 'Religious imagery', note: 'The photographer becomes a priest-figure, performing a ritual. "Intone" means to chant — suggesting solemnity and repetition.', color: '#3b82f6' },
        { type: 'Semantic field', note: 'Part of a sustained semantic field of religion: church, priest, Mass — implying the work has a moral, almost holy duty.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'to Rural England. Home again',
      annotations: [
        { type: 'Contrast', note: '"Rural England" is capitalised like a proper noun, emphasising the vast gap between the peaceful English countryside and the war zones he photographs.', color: '#ef4444' },
        { type: 'Enjambment', note: 'The line break between "he" and "a priest" mirrors the photographer\'s split identity — caught between two worlds.', color: '#8b5cf6' },
      ],
    },

    // Blank line (stanza break)
    { text: '' },

    // Stanza 2
    {
      text: 'to ordinary pain which simple weather can dispel,',
    },
    {
      text: 'to fields which don\'t explode beneath the feet',
      annotations: [
        { type: 'Contrast', note: 'English fields vs. minefields — the mundane safety of home is juxtaposed against the lethal reality of conflict zones.', color: '#ef4444' },
      ],
    },
    {
      text: 'of running children in a nightmare heat.',
      annotations: [
        { type: 'Emotive language', note: '"Running children" and "nightmare heat" evoke the iconic images of children fleeing napalm attacks, referencing real war photography.', color: '#f59e0b' },
      ],
    },
    {
      text: 'Something is happening. A stranger\'s features',
      annotations: [
        { type: 'Short sentence', note: '"Something is happening" is deliberately vague and understated, building suspense as the photograph develops.', color: '#10b981' },
      ],
    },
    {
      text: 'faintly start to twist before his eyes,',
      annotations: [
        { type: 'Verb choice', note: '"Twist" suggests pain and distortion — the image forming on the paper echoes the suffering of the subject.', color: '#f59e0b' },
      ],
    },
    {
      text: 'a half-formed ghost. He remembers the cries',
      annotations: [
        { type: 'Metaphor', note: '"Half-formed ghost" — the developing image is spectral, suggesting the subject may already be dead. The photograph is a haunting.', color: '#f59e0b' },
        { type: 'Caesura', note: 'The full stop mid-line creates a pause that mirrors the photographer\'s sudden, involuntary memory of the cries he heard.', color: '#8b5cf6' },
      ],
    },

    // Blank line (stanza break)
    { text: '' },

    // Stanza 3
    {
      text: 'of this man\'s wife, and how he sought approval',
    },
    {
      text: 'without words to do what someone must',
      annotations: [
        { type: 'Tone', note: '"Without words" highlights the language barrier, but also the inadequacy of language in the face of such suffering.', color: '#8b5cf6' },
        { type: 'Moral duty', note: '"Someone must" — a sense of obligation and moral responsibility; if not him, then who will document this suffering?', color: '#3b82f6' },
      ],
    },
    {
      text: 'and how the blood stained into foreign dust.',
      annotations: [
        { type: 'Imagery', note: '"Blood stained into foreign dust" — a visceral, permanent image. The blood becomes part of the landscape, absorbed and forgotten by the wider world.', color: '#ef4444' },
      ],
    },
    {
      text: 'A hundred agonies in black-and-white',
      annotations: [
        { type: 'Hyperbole / Metonymy', note: '"A hundred agonies" reduces immense human suffering to a number. "Black-and-white" refers to newspaper photographs — stripping colour strips away humanity.', color: '#f59e0b' },
      ],
    },
    {
      text: 'from which his editor will pick out five or six',
      annotations: [
        { type: 'Contrast / Criticism', note: 'Of a hundred images of suffering, only five or six will be published — Duffy criticises how the media reduces and filters human pain.', color: '#ef4444' },
      ],
    },
    {
      text: 'for Sunday\'s supplement. The reader\'s eyeballs prick',
      annotations: [
        { type: 'Contrast', note: '"Sunday\'s supplement" is casual, leisurely reading — trivialising the suffering depicted. The alliterative "reader\'s" and "prick" is dismissive.', color: '#ef4444' },
        { type: 'Verb choice', note: '"Prick" suggests only a momentary, superficial emotional response — tears that barely form before they are forgotten.', color: '#f59e0b' },
      ],
    },

    // Blank line (stanza break)
    { text: '' },

    // Stanza 4
    {
      text: 'with tears between the bath and pre-lunch beers.',
      annotations: [
        { type: 'Bathos / Contrast', note: 'The juxtaposition of tears with "bath and pre-lunch beers" highlights the comfortable, indifferent lifestyle of the reader. Their sadness is fleeting and shallow.', color: '#ef4444' },
      ],
    },
    {
      text: 'From the aeroplane he stares impassively at where',
    },
    {
      text: 'he earns his living and they do not care.',
      annotations: [
        { type: 'Final couplet', note: 'The closing rhyme ("where" / "care") delivers a blunt, bitter conclusion. "They" is ambiguous — it could mean the public, the editors, or both.', color: '#f59e0b' },
        { type: 'Tone', note: '"Do not care" is stark and accusatory — Duffy indicts society for its apathy towards the suffering the photographer documents.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Solutions slop in trays beneath his hands,',
      annotations: [
        { type: 'Double meaning', note: '"Solutions" means both the chemical developing fluid and, ironically, answers to the suffering — answers that do not exist.', color: '#3b82f6' },
        { type: 'Verb choice', note: '"Slop" is messy, uncontrolled — contrasting with the "ordered rows" of stanza one, suggesting his composure is slipping.', color: '#10b981' },
      ],
    },
    {
      text: 'which did not tremble then though seem to now.',
      annotations: [
        { type: 'Contrast', note: 'His hands did not shake in the war zone but tremble now in safety — the emotional impact is delayed, suggesting PTSD or suppressed trauma.', color: '#ef4444' },
      ],
    },
    {
      text: 'Rural England. Home again to his survey,',
      annotations: [
        { type: 'Cyclical structure', note: '"Rural England" echoes stanza one, creating a cyclical structure — the photographer is trapped in an endless loop of witnessing, recording, and being ignored.', color: '#8b5cf6' },
      ],
    },
  ],

  context: `<p><strong>Carol Ann Duffy</strong> (born 1955) served as the UK Poet Laureate from 2009 to 2019. She is known for giving voice to those on the margins and for exploring how language shapes power and identity.</p>
<p><strong>War Photographer</strong> was inspired by Duffy's friendship with war photographers, particularly <strong>Don McCullin</strong>, who documented conflicts in Vietnam, Biafra, and Northern Ireland. McCullin spoke about the moral dilemma of photographing suffering without being able to help.</p>
<p>The poem explores the <strong>tension between documenting suffering and the public's indifference</strong> to it. The photographer feels a moral duty to bear witness, yet knows his images will be consumed casually alongside Sunday supplements and quickly forgotten.</p>
<p>Duffy raises questions about <strong>voyeurism and guilt</strong>: are we complicit in suffering when we look at images of war without taking action? The poem criticises the comfortable distance between <strong>Rural England</strong> and the war zones from which the photographs come.</p>
<p>Written in the context of late twentieth-century media culture, the poem remains powerfully relevant in the age of social media, where images of conflict are even more ubiquitous — and even more quickly scrolled past.</p>`,

  summary: `The poem follows a war photographer as he develops his film in his darkroom after returning to England from a conflict zone. The opening stanza establishes a reverential, church-like atmosphere as he processes the "spools of suffering."

In stanza two, the contrast between safe English fields and deadly minefields abroad is drawn sharply. As a photograph develops, a face emerges — a "half-formed ghost" — triggering memories of the man's wife and the sounds of grief.

Stanza three reveals the editorial process: a hundred photographs of agony will be reduced to five or six for a newspaper supplement. Readers will feel a brief prick of emotion before returning to their comfortable lives.

The final stanza completes the cycle. The photographer boards a plane, heading back to another war zone, staring down "impassively" at the country whose people "do not care." The poem ends with bitter resignation — his work is a loop of witnessing, recording, and being ignored.`,

  formAndStructure: `FORM: Four regular sestets (six-line stanzas). The regularity of the form mirrors the photographer's attempt to impose order on the chaos of war — just as he arranges his "spools of suffering" in "ordered rows."

RHYME SCHEME: Roughly ABBCDD with some half-rhymes (e.g. "rows"/"glows", "cries"/"eyes"). The near-rhymes suggest things are not quite right — an undercurrent of unease beneath the surface control.

METRE: The poem uses a loose iambic pentameter, giving it a measured, controlled rhythm that reflects the photographer's professional composure — even as the content is deeply emotional.

TENSE: The poem moves between present tense (the darkroom) and past tense (memories of the war zone), blurring the boundary between the two worlds the photographer inhabits.

ENJAMBMENT: Used throughout to create a flowing, continuous movement — mirroring the developing process and the photographer's stream of consciousness.

CYCLICAL STRUCTURE: "Rural England" appears in stanza one and is echoed in the final stanza, creating a sense of entrapment. The photographer is caught in a never-ending cycle of travel, witness, develop, and be ignored.`,

  keyQuotes: [
    {
      quote: 'In his darkroom he is finally alone',
      analysis:
        'The opening line establishes isolation and relief. "Finally" implies he has been surrounded by chaos and suffering — the darkroom offers solitude but also forces him to confront what he has seen.',
      themes: ['Isolation', 'Guilt and responsibility', 'Reality of conflict'],
    },
    {
      quote: 'spools of suffering set out in ordered rows',
      analysis:
        'Sibilance creates a solemn, hushed tone. The metaphor of "spools of suffering" compresses immense human pain into a small, manageable object. "Ordered rows" contrasts with the disorder of war — the photographer imposes structure on chaos.',
      themes: ['Reality of conflict', 'Power of art', 'Control vs chaos'],
    },
    {
      quote: 'a half-formed ghost',
      analysis:
        'The developing photograph is compared to a ghost — spectral, haunting, and suggesting death. "Half-formed" implies the subject is between life and death, between visibility and invisibility, just as the public half-sees and half-ignores these images.',
      themes: ['Memory and reflection', 'Reality of conflict', 'Death'],
    },
    {
      quote: 'running children in a nightmare heat',
      analysis:
        'An allusion to iconic war photographs such as Nick Ut\'s "Napalm Girl." The image of running children is universally emotive, and "nightmare heat" blends the literal heat of conflict with the surreal horror of a bad dream.',
      themes: ['Reality of conflict', 'Suffering and oppression', 'Innocence'],
    },
    {
      quote: 'A hundred agonies in black-and-white',
      analysis:
        'Each photograph represents an individual\'s suffering, yet they are reduced to a mass — "a hundred agonies." "Black-and-white" refers to newspaper print but also to the binary simplification of complex human experiences. The media strips away nuance.',
      themes: ['Media and indifference', 'Suffering and oppression', 'Guilt and responsibility'],
    },
    {
      quote: 'from which his editor will pick out five or six',
      analysis:
        'Of a hundred images of agony, only a handful will be published. Duffy critiques the editorial process that filters and reduces human suffering to what will sell newspapers. The casual tone of "pick out" is deliberately dismissive.',
      themes: ['Media and indifference', 'Power of art', 'Guilt and responsibility'],
    },
    {
      quote: 'The reader\'s eyeballs prick / with tears between the bath and pre-lunch beers',
      analysis:
        'The enjambment across the stanza break emphasises the fleeting nature of the reader\'s emotional response. "Prick" suggests tears that barely form. The bathos of "bath and pre-lunch beers" highlights the comfortable indifference of the British public.',
      themes: ['Media and indifference', 'Guilt and responsibility', 'Contrast'],
    },
    {
      quote: 'he earns his living and they do not care',
      analysis:
        'The blunt, monosyllabic final clause is devastating in its simplicity. "They" is deliberately ambiguous — it could refer to the public, the editors, or society at large. The photographer is trapped: he profits from suffering, yet his audience is apathetic.',
      themes: ['Guilt and responsibility', 'Media and indifference', 'Isolation'],
    },
  ],

  languageDevices: [
    {
      device: 'Religious imagery (semantic field)',
      example: 'as though this were a church and he / a priest preparing to intone a Mass',
      effect:
        'The sustained religious imagery elevates the photographer\'s work to something sacred. Developing photographs becomes a solemn ritual — a "Mass" for the dead. This sanctifies his role as a witness while highlighting the moral weight of his task.',
      lineRef: 3,
    },
    {
      device: 'Sibilance',
      example: 'spools of suffering set out',
      effect:
        'The soft, repeated "s" sounds create a hushed, reverent tone — as though the photographer is whispering in his darkroom-church. It contrasts with the violence of the content, creating an uneasy tension between form and meaning.',
      lineRef: 1,
    },
    {
      device: 'Contrast / Juxtaposition',
      example: 'fields which don\'t explode beneath the feet / of running children in a nightmare heat',
      effect:
        'Duffy sharply contrasts the safety of English fields with the minefields of war zones. The juxtaposition forces the reader to confront the vast gap between their comfortable existence and the reality of conflict.',
      lineRef: 8,
    },
    {
      device: 'Metaphor',
      example: 'a half-formed ghost',
      effect:
        'The developing photograph becomes a ghostly apparition — blurring the line between image and person, life and death. It suggests the subjects of war photography are spectral presences who haunt the photographer.',
      lineRef: 12,
    },
    {
      device: 'Emotive language',
      example: 'blood stained into foreign dust',
      effect:
        'The visceral image of blood seeping into soil makes the violence tangible and permanent. "Foreign" reminds us of the distance — both geographical and emotional — between the reader and the suffering.',
      lineRef: 16,
    },
    {
      device: 'Double meaning / Ambiguity',
      example: 'Solutions slop in trays beneath his hands',
      effect:
        '"Solutions" refers literally to the photographic chemicals but also ironically to answers or remedies for the suffering he documents — remedies that do not exist. The word carries a bitter dual weight.',
      lineRef: 22,
    },
    {
      device: 'Bathos',
      example: 'tears between the bath and pre-lunch beers',
      effect:
        'The deflation from genuine tears to "bath and pre-lunch beers" is deliberately jarring. It mocks the superficial emotional engagement of the public, who consume images of suffering alongside everyday leisure.',
      lineRef: 20,
    },
    {
      device: 'Cyclical structure / Repetition',
      example: 'Rural England (stanza 1 and stanza 4)',
      effect:
        'The repetition of "Rural England" bookends the poem, creating a circular structure. The photographer is trapped in an endless cycle of witnessing horror, returning to indifference, and leaving again. There is no resolution.',
      lineRef: 24,
    },
  ],
}

/* ── Theme tokens ──────────────────────────────────────────────── */

const THEMES = [
  { label: 'Reality of conflict', color: 'bg-red-500/15 text-red-400' },
  { label: 'Guilt and responsibility', color: 'bg-amber-500/15 text-amber-400' },
  { label: 'Media and indifference', color: 'bg-blue-500/15 text-blue-400' },
  { label: 'Suffering and oppression', color: 'bg-rose-500/15 text-rose-400' },
  { label: 'Memory and reflection', color: 'bg-purple-500/15 text-purple-400' },
  { label: 'Isolation', color: 'bg-slate-500/15 text-slate-400' },
  { label: 'Power of art', color: 'bg-emerald-500/15 text-emerald-400' },
]

/* ── Comparison poems ──────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    link: '/revision/poetry/power-and-conflict/remains',
    shared: 'Both explore the psychological aftermath of witnessing death and violence. The soldier in Remains is haunted by guilt over a killing; the photographer is haunted by the suffering he has documented. Both use a first/third-person perspective to show how traumatic memories persist long after the event.',
    themes: ['Guilt and responsibility', 'Reality of conflict', 'Memory and reflection'],
  },
  {
    poem: 'Poppies',
    poet: 'Jane Weir',
    link: '/revision/poetry/power-and-conflict/poppies',
    shared: 'Both poems present civilian perspectives on conflict rather than the battlefield itself. The mother in Poppies experiences war through loss and memory; the photographer experiences it through his lens. Both explore the emotional distance between those at home in England and those affected by war.',
    themes: ['Loss and grief', 'Memory and reflection', 'Media and indifference'],
  },
  {
    poem: 'Tissue',
    poet: 'Imtiaz Dharker',
    link: '/revision/poetry/power-and-conflict/tissue',
    shared: 'Both poems consider how recording and documentation shape our understanding of human experience. In Tissue, paper records control lives; in War Photographer, photographs attempt to capture and communicate suffering. Both question whether such records can truly convey the reality they represent.',
    themes: ['Power of art', 'Reality of conflict', 'Identity and belonging'],
  },
]

/* ── Page ───────────────────────────────────────────────────────── */

export default function WarPhotographerPage() {
  return (
    <div className="space-y-8">
      {/* ── Navigation ────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              War Photographer
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Carol Ann Duffy &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
          </div>
        </div>
      </div>

      {/* ── Interactive poem viewer ───────────────────────────── */}
      <StudyTools
        textName="War Photographer"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />
      <InteractivePoemViewer poem={WAR_PHOTOGRAPHER} />

      {/* ── Theme tokens ──────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground mb-3">
          Key Themes
        </h2>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((t) => (
            <span
              key={t.label}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Comparison poems ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompareArrows className="size-5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare With
          </h2>
        </div>

        <div className="space-y-4">
          {COMPARISONS.map((c) => (
            <div
              key={c.poem}
              className="rounded-lg border border-border/60 bg-muted/30 p-4"
            >
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    {c.poem}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1.5">
                    by {c.poet}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary text-xs"
                  render={<Link href={c.link} />}
                >
                  Study poem
                </Button>
              </div>

              <p className="text-sm text-card-foreground leading-relaxed mb-3">
                {c.shared}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations from War Photographer by Carol Ann Duffy reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available in your AQA anthology.
      </p>
    </div>
  )
}
