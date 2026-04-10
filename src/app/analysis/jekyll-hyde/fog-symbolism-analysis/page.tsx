import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Fog Symbolism Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Fog Symbolism in Jekyll and Hyde — GCSE Analysis',
  description:
    'How Stevenson uses fog symbolism in Jekyll and Hyde. The "chocolate-coloured pall", moral ambiguity, and exam paragraph by GCSE examiners.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/fog-symbolism-analysis' },
  openGraph: {
    title: 'Fog Symbolism in Jekyll and Hyde',
    description: 'The "chocolate-coloured pall" of London fog as a symbol of moral obscurity.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="fog-symbolism-analysis"
      h1={H1}
      headline={'Fog Symbolism in Jekyll and Hyde'}
      schemaDescription={
        'GCSE analysis of fog symbolism in Jekyll and Hyde, including the "chocolate-coloured pall" and exam paragraph.'
      }
      intro={
        'London fog is one of the most consistent symbols in the novella. Stevenson uses it to literalise the moral murk of Victorian society — and to keep Hyde invisible until Stevenson wants him seen.'
      }
      related={[
        { title: 'Door symbolism analysis', href: '/analysis/jekyll-hyde/door-symbolism-analysis' },
        { title: 'Victorian society context', href: '/analysis/jekyll-hyde/victorian-society-context' },
        { title: 'Duality theme analysis', href: '/analysis/jekyll-hyde/duality-theme-analysis' },
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
      ]}
    >
      <h2>The key fog quotation</h2>
      <Quote
        text="The dismal quarter of Soho seen under these changing glimpses, with its muddy ways, and slatternly passengers, and its lamps, which had never been extinguished or had been kindled afresh to combat this mournful reinvasion of darkness, seemed, in the lawyer\'s eyes, like a district of some city in a nightmare. […] The fog still slept on the wing above the drowned city, where the lamps glimmered like carbuncles; and through the muffle and smother of these fallen clouds, the procession of the town\'s life was still rolling in through the great arteries with a sound as of a mighty wind."
        chapter='Chapter 4, "The Carew Murder Case"'
      />

      <h2>Why Stevenson uses fog</h2>
      <p>
        Victorian London was genuinely smoggy — the <strong>"pea-soupers"</strong> of the 1880s
        were thick, yellow, sulphurous and deadly. But Stevenson uses real fog to do symbolic
        work. Fog:
      </p>
      <ul>
        <li>
          Obscures vision, mirroring the novella&rsquo;s theme that truth is always hidden in
          plain sight.
        </li>
        <li>
          Connects the respectable and criminal halves of the city, drifting between Jekyll&rsquo;s
          <em> "comfortable"</em> square and the <em>"dismal quarter of Soho"</em> as if they
          were a single moral zone.
        </li>
        <li>
          Literalises the idea of a society that cannot, or will not, see clearly.
        </li>
      </ul>

      <h2>Language analysis</h2>
      <ul>
        <li>
          <strong>"Chocolate-coloured pall"</strong> (Chapter 4). A <em>pall</em> is the cloth
          thrown over a coffin. Stevenson turns the sky into a funeral cover. The domestic
          adjective <em>"chocolate"</em> uncomfortably sweetens the image of death.
        </li>
        <li>
          <strong>"Muffle and smother"</strong>. Both words are verbs of suffocation. Stevenson
          makes the fog active, almost murderous, as if the city itself is killing its
          inhabitants.
        </li>
        <li>
          <strong>"Drowned city"</strong>. The submerged metaphor aligns fog with water and with
          <em> Genesis</em>&rsquo;s Flood, gesturing at a city being morally overwhelmed.
        </li>
        <li>
          <strong>"Swirling wreaths"</strong>. Later, when Utterson goes to Hyde&rsquo;s Soho
          lodgings, the fog "swirls" like something alive, creating a Gothic atmosphere without
          ghosts.
        </li>
      </ul>

      <h2>Structural significance</h2>
      <p>
        Fog appears most densely around moments of moral violation: before and after the Carew
        murder, around Utterson&rsquo;s visits to Hyde&rsquo;s address, and in the approach to
        Jekyll&rsquo;s cabinet in Chapter 8. Stevenson uses fog as a <strong>structural flag
        </strong> — whenever the reader is near the novella&rsquo;s moral core, the weather
        thickens. Clear air, by contrast, belongs only to brief moments of illusion, such as the
        Sunday walk that opens Chapter 1.
      </p>

      <h2>Context (AO3)</h2>
      <p>
        The late 1880s were also the years of the Jack the Ripper murders (1888), which happened
        in foggy East London streets and fixed the fog-and-gaslight aesthetic in the public
        imagination. Stevenson wrote <em>Jekyll and Hyde</em> in 1886, just before the Ripper
        panic, but his fog already draws on the same associations: the idea that London was a
        place where evil could hide because the city&rsquo;s own atmosphere refused visibility.
        The novella shares its weather with Dickens&rsquo;s <em>Bleak House</em> and Conan
        Doyle&rsquo;s Sherlock Holmes stories.
      </p>

      <h2>Themes this unlocks</h2>
      <ul>
        <li><strong>Duality</strong> — fog blurs moral categories.</li>
        <li>
          <strong>Repression</strong> — what cannot be seen does not have to be acknowledged.
        </li>
        <li>
          <strong>Reputation and hypocrisy</strong> — fog lets men move between respectable and
          disreputable quarters without being identified.
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson&rsquo;s fog is never merely weather. In the <em>"chocolate-coloured pall"</em>
        that hangs over Soho in Chapter 4, Stevenson fuses the domestic with the funereal: the
        sweet, familiar adjective <em>"chocolate"</em> barely disguises the <em>"pall"</em> of a
        coffin cloth, so that the city itself is figured as already dead. The verbs <em>"muffle
        and smother"</em> give the fog agency, turning it into an active participant in the
        novella&rsquo;s moral obscurity. Stevenson thickens the air precisely when his plot is
        most ethically fraught, so that fog operates as a structural signal: wherever we cannot
        see, respectable men are doing things they cannot afford to be seen doing. In a
        late-Victorian imagination haunted by the sulphurous "pea-soupers" of Dickensian London
        and soon to be haunted by the Whitechapel murders, Stevenson turns the city&rsquo;s
        actual climate into a metaphor for the hypocrisies its citizens live inside.
      </p>
    </AnalysisPage>
  )
}
