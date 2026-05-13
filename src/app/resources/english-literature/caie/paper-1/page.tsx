import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/paper-1' },
  title: 'Paper 1: Poetry & Prose - Cambridge IGCSE English Literature',
  description:
    'Study guide for Cambridge IGCSE English Literature Paper 1. Songs of Ourselves poetry anthology, set prose texts, and exam technique for passage-based and essay questions.',
}

/* ─── Data ───────────────────────────────────────────────────── */

const selectedPoems = [
  {
    title: 'Sonnet 18',
    poet: 'William Shakespeare',
    themes: 'Love, immortality through art, the power of poetry over time.',
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    themes: 'Transience of power, hubris, art outlasting empires.',
  },
  {
    title: 'The Night of the Scorpion',
    poet: 'Nissim Ezekiel',
    themes: 'Community, superstition versus reason, maternal love.',
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    themes: 'Nostalgia, childhood memory, the emotional power of music.',
  },
  {
    title: 'Hide and Seek',
    poet: 'Vernon Scannell',
    themes: 'Childhood, isolation, growing up, abandonment.',
  },
  {
    title: 'Hawk Roosting',
    poet: 'Ted Hughes',
    themes: 'Power, control, nature, arrogance.',
  },
  {
    title: 'Blessing',
    poet: 'Imtiaz Dharker',
    themes:
      'Poverty, water as life, community, spirituality. Set in a Mumbai (Bombay) slum, India. © Bloodaxe Books — fair-dealing extract.',
  },
  {
    title: 'Half-Past Two',
    poet: 'U.A. Fanthorpe',
    themes: 'Childhood perception, time, authority, imagination.',
  },
  {
    title: 'Where I Come From',
    poet: 'Elizabeth Brewster',
    themes: 'Identity, place and belonging, nature versus city.',
  },
  {
    title: 'Horses',
    poet: 'Edwin Muir',
    themes: "Childhood awe, nature's power, memory.",
  },
  {
    title: 'Continuum',
    poet: 'Allen Curnow',
    themes: "Writer's block, creativity, self and identity.",
  },
]

const proseTexts = [
  {
    title: 'Stories of Ourselves',
    detail:
      'The Cambridge anthology of short stories. Students study a selection of stories and must be prepared to answer on any of them. Key skills include character analysis, narrative voice, and understanding cultural context.',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    detail:
      'Set in 1930s Alabama, the novel explores racial injustice, moral growth, and the loss of innocence through the eyes of Scout Finch. Key themes: prejudice, justice, courage, empathy. Cambridge questions often focus on how Lee presents Atticus as a moral figure, or the significance of the trial.',
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    detail:
      "A novella about two displaced ranch workers during the Great Depression. Key themes: the American Dream, loneliness, companionship, power and powerlessness. Cambridge questions may ask about the significance of Curley's wife, or how Steinbeck presents the theme of dreams.",
  },
  {
    title: 'A Passage to India',
    author: 'E.M. Forster',
    detail:
      "Set during the British Raj, the novel examines the relationship between coloniser and colonised. Key themes: cultural misunderstanding, friendship across racial boundaries, the nature of India itself. Cambridge values analysis of Forster's ironic narrative voice.",
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    detail:
      "Nick Carraway narrates the story of Jay Gatsby's obsessive pursuit of Daisy Buchanan in 1920s New York. Key themes: the corruption of the American Dream, wealth and class, illusion versus reality. The unreliable narrator and symbolic imagery (the green light, the Valley of Ashes) are central to Cambridge responses.",
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default async function Paper1Page() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Poetry &amp; Prose
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            1 hour 30 minutes &middot; 50 marks &middot; Two sections: poetry (Songs of Ourselves)
            and prose (set text).
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Cambridge syllabus set-text notice ─────────────────────── */}
        <div className="mb-10 rounded-lg border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-foreground">
          <p className="font-semibold">{_tr(`Set-text notice`)}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            This cluster is based on the Cambridge IGCSE 0475 syllabus{' '}
            <em>{_tr(`Songs of Ourselves`)}</em> Vol&nbsp;1 Part&nbsp;4 plus the Ted Hughes cluster
            (<em>{_tr(`The Thought-Fox`)}</em>, <em>{_tr(`Hawk Roosting`)}</em>, <em>Wind</em>).
            Cambridge International rotates set texts every two years &mdash; always confirm via{' '}
            <a
              href="https://www.cambridgeinternational.org/syllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridgeinternational.org/syllabus
            </a>{' '}
            before relying on this list for the current exam window. Prose options:{' '}
            <em>{_tr(`Things Fall Apart`)}</em> (Achebe) / <em>{_tr(`To Kill a Mockingbird`)}</em>{' '}
            (Lee). The poem and prose lists below are legacy reference selections &mdash;
            cross-check against the syllabus PDF for your exam window.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">{_tr(`Cluster rights:`)}</strong> Four poems in the
            verified Vol&nbsp;1 Part&nbsp;4 + Hughes clusters are in copyright (Atwood, Auden,
            Hughes&nbsp;&times;3). Quotations are short fair-dealing extracts. Anthology publisher:
            Cambridge University Press (
            <a
              href="https://www.cambridge.org/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridge.org/permissions
            </a>
            ).
          </p>
        </div>

        {/* ── Paper structure ─────────────────────────────────────── */}
        <section aria-labelledby="structure-heading">
          <h2 id="structure-heading" className="text-2xl font-bold text-foreground">
            Paper Structure
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{_tr(`Section A &mdash; Poetry`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">25 marks</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; Answer <strong>one</strong> question on a poem from Songs of Ourselves
                </li>
                <li>
                  &bull; Choice between a passage-based question (poem printed) and an essay
                  question
                </li>
                <li>
                  &bull; The passage-based question usually asks &ldquo;How does the poet...&rdquo;
                </li>
                <li>
                  &bull; The essay question often asks you to explore a theme or compare the
                  poet&rsquo;s methods
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{_tr(`Section B &mdash; Prose`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">25 marks</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; Answer <strong>one</strong> question on your set prose text
                </li>
                <li>&bull; Choice between passage-based and essay question</li>
                <li>
                  &bull; Passage-based: an extract is printed; analyse it closely and connect to the
                  wider text
                </li>
                <li>
                  &bull; Essay: a broader question on themes, characters, or the writer&rsquo;s
                  methods
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Songs of Ourselves ──────────────────────────────────── */}
        <section aria-labelledby="poetry-heading">
          <h2 id="poetry-heading" className="text-2xl font-bold text-foreground">
            Songs of Ourselves &mdash; Selected Poems
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The Cambridge anthology contains a wide selection of poems. Below are poems commonly
            studied for the IGCSE examination, with their key themes. For full analysis of each
            poem, visit our{' '}
            <Link
              href="/resources/english-literature/caie/poetry"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              Poetry Analysis page
            </Link>
            .
          </p>

          <div className="mt-6 space-y-3">
            {selectedPoems.map((p) => (
              <div key={p.title} className="rounded-lg border border-border bg-card p-4 shadow-md">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    &ldquo;{p.title}&rdquo;
                    <span className="ml-1 font-normal text-muted-foreground">&mdash; {p.poet}</span>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Themes:</span> {p.themes}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h3 className="font-semibold text-foreground">
              {_tr(`Approaching a Poetry Question`)}
            </h3>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>1. Read the question carefully.</strong> Underline the key words. If it says
                &ldquo;How does the poet present...&rdquo;, you must focus on methods, not just
                content.
              </li>
              <li>
                <strong>2. Annotate the poem.</strong> For passage-based questions, spend 5 minutes
                annotating before writing. Identify imagery, sound devices, structural features, and
                shifts in tone.
              </li>
              <li>
                <strong>3. Structure your response.</strong> Use a clear analytical paragraph
                structure: point &rarr; evidence (quote) &rarr; analysis of language/form &rarr;
                link to question/wider meaning.
              </li>
              <li>
                <strong>4. Embed quotations.</strong> Short, embedded quotations (&ldquo;the
                &lsquo;lone and level sands&rsquo; suggest...&rdquo;) are more effective than long
                block quotes.
              </li>
              <li>
                <strong>5. Consider the whole poem.</strong> Even for passage-based questions,
                discuss how the extract relates to the poem&rsquo;s overall meaning, structure, and
                ending.
              </li>
            </ol>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Set prose texts ─────────────────────────────────────── */}
        <section aria-labelledby="prose-heading">
          <h2 id="prose-heading" className="text-2xl font-bold text-foreground">
            Set Prose Texts
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge offers a choice of prose texts. Your school will have chosen one. Below is an
            overview of commonly studied texts with guidance on what Cambridge looks for.
          </p>

          <div className="mt-6 space-y-4">
            {proseTexts.map((t) => (
              <div key={t.title} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="font-semibold text-foreground">
                  {t.title}
                  {'author' in t && (
                    <span className="ml-1 font-normal text-muted-foreground">
                      &mdash; {t.author}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam technique ──────────────────────────────────────── */}
        <section aria-labelledby="technique-heading">
          <h2 id="technique-heading" className="text-2xl font-bold text-foreground">
            Exam Technique: Passage-Based vs Essay Questions
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{_tr(`Passage-Based Questions`)}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Advantages:</strong> The text is in front of you. You can analyse specific
                  language closely. Good if you find it hard to memorise quotes.
                </li>
                <li>
                  <strong>{_tr(`What to do:`)}</strong> Work through the extract methodically.
                  Comment on language, imagery, structure, and tone. But <em>always</em> connect
                  outward to the rest of the text.
                </li>
                <li>
                  <strong>{_tr(`Common mistake:`)}</strong> Paraphrasing the passage instead of
                  analysing it. Markers want analysis of <em>how</em> the writer creates effects,
                  not a summary of <em>what</em> happens.
                </li>
                <li>
                  <strong>Top tip:</strong> Consider what comes before and after the extract. Why is
                  this moment significant in the context of the whole text?
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{_tr(`Essay Questions`)}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Advantages:</strong> You can choose which parts of the text to discuss.
                  Good if you know the text very well and have strong personal interpretations.
                </li>
                <li>
                  <strong>{_tr(`What to do:`)}</strong> Plan 3&ndash;4 key points before writing.
                  Each paragraph needs a clear argument supported by quotation and analysis. Track
                  the development of your argument across the essay.
                </li>
                <li>
                  <strong>{_tr(`Common mistake:`)}</strong> Telling the story rather than analysing
                  it. An essay answer should be thematic and analytical, not a narrative retelling.
                </li>
                <li>
                  <strong>Top tip:</strong> Address the question in every paragraph. The best
                  answers keep returning to the key words of the question, showing a sustained and
                  focused argument.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">
              {_tr(`Model Paragraph Structure (PEAL)`)}
            </h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-primary">P</strong>oint &mdash; Make a clear analytical
                point that directly addresses the question.
              </p>
              <p>
                <strong className="text-primary">E</strong>vidence &mdash; Support with a short,
                embedded quotation from the text.
              </p>
              <p>
                <strong className="text-primary">A</strong>nalysis &mdash; Analyse the language:
                what specific words suggest, what techniques the writer uses, what effects are
                created.
              </p>
              <p>
                <strong className="text-primary">L</strong>ink &mdash; Link back to the question
                and, where possible, to wider themes, context, or the writer&rsquo;s overall
                purpose.
              </p>
            </div>
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>
    </>
  )
}
