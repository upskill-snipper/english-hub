import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Door Symbolism Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Door Symbolism in Jekyll and Hyde — GCSE Analysis',
  description:
    'GCSE analysis of door symbolism in Jekyll and Hyde. The "blistered and distained" door, the Gothic threshold, secrecy, and exam paragraph.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/door-symbolism-analysis' },
  openGraph: {
    title: 'Door Symbolism in Jekyll and Hyde',
    description: 'Why Stevenson opens the novella with a chapter called "Story of the Door".',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="door-symbolism-analysis"
      h1={H1}
      headline={'Door Symbolism in Jekyll and Hyde'}
      schemaDescription={
        'GCSE analysis of door symbolism and the Gothic threshold in Jekyll and Hyde, with exam paragraph.'
      }
      intro={
        'The first chapter is called "Story of the Door" for a reason. Doors are one of Stevenson\'s central symbols — thresholds between respectability and secrecy, public and private, Jekyll and Hyde.'
      }
      related={[
        { title: 'Fog symbolism analysis', href: '/analysis/jekyll-hyde/fog-symbolism-analysis' },
        { title: 'Duality theme analysis', href: '/analysis/jekyll-hyde/duality-theme-analysis' },
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
      ]}
    >
      <h2>The opening description</h2>
      <Quote
        text="Two doors from one corner, on the left hand going east, the line was broken by the entry of a court; and just at that point, a certain sinister block of building thrust forward its gable on the street. It was two storeys high; showed no window, nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper; and bore in every feature the marks of prolonged and sordid negligence. The door, which was equipped with neither bell nor knocker, was blistered and distained. Tramps slouched into the recess and struck matches on the panels; children kept shop upon the steps; the schoolboy had tried his knife on the mouldings; and for close on a generation, no one had appeared to drive away these random visitors or to repair their ravages."
        chapter='Chapter 1, "Story of the Door"'
      />

      <h2>The Gothic threshold</h2>
      <p>
        Doors in Gothic fiction are always <strong>thresholds</strong> — the line between the
        safe and the dangerous, the known and the unknown. Stevenson places this specific door
        on a street of otherwise respectable Georgian houses, so that the whole block is, in
        effect, a visual metaphor for duality: one fine façade, one <em>"sordid"</em> door, both
        attached to the same body of buildings. Before we meet Jekyll, before we meet Hyde,
        Stevenson has already shown us the architecture of their problem.
      </p>

      <h2>Language analysis</h2>
      <ul>
        <li>
          <strong>"Blistered and distained"</strong>. Both adjectives come from the vocabulary of
          disease and stain. The door is diagnosed, not just described.
        </li>
        <li>
          <strong>"Blind forehead"</strong> for the upper wall. Stevenson personifies the
          building as a face without eyes — an architectural version of Hyde&rsquo;s own
          "unnameable deformity".
        </li>
        <li>
          <strong>"Neither bell nor knocker"</strong>. The door refuses the normal gestures of
          Victorian visiting etiquette. It is a door designed not to be approached — a door for
          a man who does not want to be called on.
        </li>
        <li>
          <strong>"Tramps ... children ... schoolboy"</strong>. The door attracts every form of
          marginal activity. Stevenson makes it a magnet for small transgressions, foreshadowing
          the larger one it conceals.
        </li>
      </ul>

      <h2>Structural significance</h2>
      <p>
        The door reappears in the most important scenes of the novella:
      </p>
      <ul>
        <li>
          Chapter 1: the trampling of the child happens steps from this door.
        </li>
        <li>
          Chapter 2: Utterson waits outside to ambush Hyde.
        </li>
        <li>
          Chapter 8: Poole and Utterson break down the cabinet door to discover Hyde&rsquo;s
          corpse.
        </li>
      </ul>
      <p>
        Stevenson uses doors to organise the whole plot. Each act of the novella involves a door
        being crossed, watched, or broken. The climactic violence is a <em>door</em> being
        forced — literally, the last of Jekyll&rsquo;s secrets being opened.
      </p>

      <h2>Context (AO3)</h2>
      <p>
        Late-Victorian London was obsessed with the threshold between public and private. The
        respectable drawing room opened off a hallway that opened off a front door, and a whole
        etiquette of calling cards, servants and formal introductions governed who was allowed
        across it. Stevenson&rsquo;s sordid back door is the dark inverse of that etiquette — it
        is a Victorian gentleman&rsquo;s <em>secret entrance</em>, and a Victorian reader would
        immediately have understood what kind of life required one.
      </p>

      <h2>Themes this unlocks</h2>
      <ul>
        <li>
          <strong>Duality</strong> — front door and back door, façade and interior, respectable
          square and secret laboratory.
        </li>
        <li>
          <strong>Repression</strong> — doors lock things away.
        </li>
        <li>
          <strong>Secrecy and reputation</strong> — a Victorian gentleman keeps what matters
          behind doors.
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson makes his first chapter <em>"Story of the Door"</em> because the door is the
        architectural equivalent of Jekyll&rsquo;s whole moral problem. The <em>"blistered and
        distained"</em> panel is personified as a sick body, while the <em>"blind forehead"</em>
        of wall above it becomes a face without eyes — a building that sees no evil precisely
        because it has been designed not to. The pointed absence of <em>"bell nor knocker"</em>
        refuses the rituals of Victorian visiting etiquette and marks the door as one intended
        not to be entered by respectable visitors. In a city obsessed with the boundary between
        public and private, Stevenson uses the back door to dramatise the hidden entrances of a
        double life; by the time the final cabinet door is broken down in Chapter 8, the reader
        understands that every crossing of a threshold in the novella is a small act of
        Victorian hypocrisy being exposed.
      </p>
    </AnalysisPage>
  )
}
