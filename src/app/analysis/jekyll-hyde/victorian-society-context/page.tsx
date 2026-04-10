import type { Metadata } from 'next'
import { AnalysisPage } from '../_components/AnalysisPage'

const H1 = 'Victorian Society Context — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Victorian Society Context — Jekyll and Hyde (GCSE AO3)',
  description:
    'Victorian context for Jekyll and Hyde. Fin-de-siècle London, class, the Labouchere Amendment, Darwinism, and exam-ready AO3 paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/victorian-society-context',
  },
  openGraph: {
    title: 'Victorian Society Context — Jekyll and Hyde',
    description: 'The fin-de-siècle London world Stevenson is writing about, and within.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="victorian-society-context"
      h1={H1}
      headline={'Victorian Society Context — Jekyll and Hyde'}
      schemaDescription={
        'AO3 context for Jekyll and Hyde: fin-de-siècle London, class, the Labouchere Amendment, Darwinism and exam paragraph.'
      }
      intro={
        'This is the AO3 context page you can mine for every Jekyll and Hyde essay. It covers the five most exam-relevant strands: class, respectability, the law, Darwinism and the city itself.'
      }
      related={[
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
        { title: 'Science theme analysis', href: '/analysis/jekyll-hyde/science-theme-analysis' },
        {
          title: '"The polite fiction of the law"',
          href: '/analysis/jekyll-hyde/the-polite-fiction-of-the-law',
        },
        { title: 'Fog symbolism analysis', href: '/analysis/jekyll-hyde/fog-symbolism-analysis' },
      ]}
    >
      <h2>When Stevenson wrote the novella</h2>
      <p>
        Robert Louis Stevenson published <em>Strange Case of Dr Jekyll and Mr Hyde</em> in
        January 1886. He was Scottish, raised in Edinburgh by strict Calvinist parents, and
        had spent years travelling between Europe and America because of his poor lungs. He
        wrote the novella in a few fevered weeks at his home in Bournemouth, and the first
        draft famously went into the fire at his wife&rsquo;s insistence before he rewrote it.
      </p>

      <h2>Class and respectability</h2>
      <p>
        Late-Victorian London was divided — visually, geographically and morally — by class.
        The West End housed respectable professional men in squares of elegant Georgian
        terraces. The East End, Whitechapel, and grimy pockets like Soho housed the working
        poor, the destitute, and the unrespectable. Stevenson sets Jekyll&rsquo;s handsome house
        in a respectable square but gives it a back door that opens into a <em>"dismal"</em>
        side street. Geography is morality.
      </p>
      <p>
        The professional class — lawyers, doctors, MPs, clergymen — were expected to live
        spotless public lives. Reputation was currency. To lose yours was to lose your career.
        This is why Utterson locks Jekyll&rsquo;s will in his safe rather than act on it, and
        why the whole novella operates through silences.
      </p>

      <h2>The Labouchere Amendment and the fear of secret lives</h2>
      <p>
        In 1885, Parliament passed the Criminal Law Amendment Act, whose famous Section 11
        (the <strong>Labouchere Amendment</strong>) criminalised "gross indecency" between men,
        punishable by up to two years&rsquo; imprisonment with hard labour. It became infamous
        a decade later when it was used to prosecute Oscar Wilde. Stevenson was writing in the
        immediate aftermath of this law, in a culture newly obsessed with the idea that
        respectable men might be leading secret sexual lives. Many critics argue that
        Jekyll&rsquo;s <em>"undignified"</em> pleasures, his <em>"profound duplicity"</em>,
        and the vagueness of his hidden appetites gesture at this specifically. Stevenson never
        names the secret, because in his culture the whole point was that it could not be
        named.
      </p>

      <h2>Darwinism and degeneration theory</h2>
      <p>
        Darwin&rsquo;s <em>On the Origin of Species</em> (1859) and <em>The Descent of Man</em>
        (1871) had recently taught Victorians that humans shared common ancestors with apes.
        By the 1880s, that idea had mutated into <strong>degeneration theory</strong>: the
        worry that civilised society could evolve <em>backwards</em>, producing physically and
        morally regressed individuals. Criminologists like Cesare Lombroso claimed you could
        identify "born criminals" by ape-like facial features. This pseudoscience shaped Hyde
        directly: <em>"ape-like fury"</em>, <em>"something troglodytic"</em>,
        <em> "dwarfish"</em>. Hyde is not invented — he is assembled from contemporary fears.
      </p>

      <h2>Religion and the Calvinist inheritance</h2>
      <p>
        Stevenson was raised in Scottish Presbyterian Calvinism, which taught that human beings
        are innately sinful and that the saved and the damned might sometimes be distinguished
        by visible signs. His novella is shot through with this theological reflex — Satan,
        Hell, Eden, Cain — even as it refuses to settle into a Christian allegory. Scottish
        Gothic was its own tradition: James Hogg&rsquo;s <em>Private Memoirs and Confessions of
        a Justified Sinner</em> (1824) gave Stevenson a model for the self divided against
        itself.
      </p>

      <h2>London, fog and the city as character</h2>
      <p>
        The London of the novella is foggy, gas-lit, full of secret doors and shabby side
        streets. This is partly reportage — the "pea-soupers" of 1880s London were a real
        public health disaster — and partly Gothic atmosphere. Two years after the novella,
        the Jack the Ripper murders of 1888 would fix this foggy, gas-lit London in the public
        imagination as a landscape of secret violence. Stevenson&rsquo;s city is always alive,
        always hiding things, and always letting respectable men move between moral zones
        without being identified.
      </p>

      <h2>Five context quotes you can use</h2>
      <ul>
        <li>
          <em>"The very pink of the proprieties"</em> — class and reputation.
        </li>
        <li>
          <em>"Hence it came about that I concealed my pleasures"</em> — the Labouchere era
          and private life.
        </li>
        <li>
          <em>"Ape-like fury"</em> / <em>"something troglodytic"</em> — Darwinism and
          degeneration.
        </li>
        <li>
          <em>"Satan&rsquo;s signature upon a face"</em> — Calvinism and physiognomy.
        </li>
        <li>
          <em>"Chocolate-coloured pall"</em> — fin-de-siècle London, fog and moral obscurity.
        </li>
      </ul>

      <h2>Exam-ready AO3 paragraph</h2>
      <p>
        Stevenson is writing at the precise moment when late-Victorian London was beginning to
        doubt itself. The 1885 Labouchere Amendment had just criminalised <em>"gross
        indecency"</em>, making private life a legal battleground; Darwinism and Lombroso&rsquo;s
        criminology were suggesting that respectable civilisation might be only a thin layer
        over an ape-like ancestry; and the city&rsquo;s "pea-souper" fogs made both metaphors
        and actual crimes easier to hide. Jekyll&rsquo;s <em>"profound duplicity of life"</em>,
        his <em>"concealed pleasures"</em> and his back door onto a <em>"dismal"</em> side
        street condense these anxieties into one professional gentleman. In making Jekyll a
        doctor of <em>"transcendental medicine"</em> whose experiment goes disastrously wrong,
        Stevenson turns the typical Victorian success story — the self-made professional man —
        into the literal architect of the novella&rsquo;s horror. Jekyll and Hyde is therefore
        less a story about one man and more a diagnosis of the class, the law and the city
        that produced him.
      </p>
    </AnalysisPage>
  )
}
