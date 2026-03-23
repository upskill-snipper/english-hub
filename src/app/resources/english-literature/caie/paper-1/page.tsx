import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Paper 1: Poetry & Prose - Cambridge IGCSE English Literature",
  description:
    "Study guide for Cambridge IGCSE English Literature Paper 1. Songs of Ourselves poetry anthology, set prose texts, and exam technique for passage-based and essay questions.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const selectedPoems = [
  {
    title: "Sonnet 18",
    poet: "William Shakespeare",
    themes: "Love, immortality through art, the power of poetry over time.",
  },
  {
    title: "Ozymandias",
    poet: "Percy Bysshe Shelley",
    themes: "Transience of power, hubris, art outlasting empires.",
  },
  {
    title: "The Night of the Scorpion",
    poet: "Nissim Ezekiel",
    themes: "Community, superstition versus reason, maternal love.",
  },
  {
    title: "Piano",
    poet: "D.H. Lawrence",
    themes: "Nostalgia, childhood memory, the emotional power of music.",
  },
  {
    title: "Hide and Seek",
    poet: "Vernon Scannell",
    themes: "Childhood, isolation, growing up, abandonment.",
  },
  {
    title: "Hawk Roosting",
    poet: "Ted Hughes",
    themes: "Power, control, nature, arrogance.",
  },
  {
    title: "Blessing",
    poet: "Imtiaz Dharker",
    themes: "Poverty, water as life, community, spirituality.",
  },
  {
    title: "Half-Past Two",
    poet: "U.A. Fanthorpe",
    themes: "Childhood perception, time, authority, imagination.",
  },
  {
    title: "Where I Come From",
    poet: "Elizabeth Brewster",
    themes: "Identity, place and belonging, nature versus city.",
  },
  {
    title: "Horses",
    poet: "Edwin Muir",
    themes: "Childhood awe, nature's power, memory.",
  },
  {
    title: "Continuum",
    poet: "Allen Curnow",
    themes: "Writer's block, creativity, self and identity.",
  },
];

const proseTexts = [
  {
    title: "Stories of Ourselves",
    detail:
      "The Cambridge anthology of short stories. Students study a selection of stories and must be prepared to answer on any of them. Key skills include character analysis, narrative voice, and understanding cultural context.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    detail:
      "Set in 1930s Alabama, the novel explores racial injustice, moral growth, and the loss of innocence through the eyes of Scout Finch. Key themes: prejudice, justice, courage, empathy. Cambridge questions often focus on how Lee presents Atticus as a moral figure, or the significance of the trial.",
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    detail:
      "A novella about two displaced ranch workers during the Great Depression. Key themes: the American Dream, loneliness, companionship, power and powerlessness. Cambridge questions may ask about the significance of Curley's wife, or how Steinbeck presents the theme of dreams.",
  },
  {
    title: "A Passage to India",
    author: "E.M. Forster",
    detail:
      "Set during the British Raj, the novel examines the relationship between coloniser and colonised. Key themes: cultural misunderstanding, friendship across racial boundaries, the nature of India itself. Cambridge values analysis of Forster's ironic narrative voice.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    detail:
      "Nick Carraway narrates the story of Jay Gatsby's obsessive pursuit of Daisy Buchanan in 1920s New York. Key themes: the corruption of the American Dream, wealth and class, illusion versus reality. The unreliable narrator and symbolic imagery (the green light, the Valley of Ashes) are central to Cambridge responses.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function Paper1Page() {
  return (
    <>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Poetry &amp; Prose
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            1 hour 30 minutes &middot; 50 marks &middot; Two sections: poetry
            (Songs of Ourselves) and prose (set text).
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Paper structure ─────────────────────────────────────── */}
        <section aria-labelledby="structure-heading">
          <h2 id="structure-heading" className="text-2xl font-bold text-gray-900">
            Paper Structure
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#1A5276]">Section A &mdash; Poetry</h3>
              <p className="mt-1 text-sm text-gray-600">25 marks</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li>&bull; Answer <strong>one</strong> question on a poem from Songs of Ourselves</li>
                <li>&bull; Choice between a passage-based question (poem printed) and an essay question</li>
                <li>&bull; The passage-based question usually asks &ldquo;How does the poet...&rdquo;</li>
                <li>&bull; The essay question often asks you to explore a theme or compare the poet&rsquo;s methods</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#1A5276]">Section B &mdash; Prose</h3>
              <p className="mt-1 text-sm text-gray-600">25 marks</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li>&bull; Answer <strong>one</strong> question on your set prose text</li>
                <li>&bull; Choice between passage-based and essay question</li>
                <li>&bull; Passage-based: an extract is printed; analyse it closely and connect to the wider text</li>
                <li>&bull; Essay: a broader question on themes, characters, or the writer&rsquo;s methods</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* ── Songs of Ourselves ──────────────────────────────────── */}
        <section aria-labelledby="poetry-heading">
          <h2 id="poetry-heading" className="text-2xl font-bold text-gray-900">
            Songs of Ourselves &mdash; Selected Poems
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The Cambridge anthology contains a wide selection of poems. Below are poems
            commonly studied for the IGCSE examination, with their key themes. For full
            analysis of each poem, visit our{" "}
            <Link
              href="/resources/english-literature/caie/poetry"
              className="font-medium text-[#1A5276] underline underline-offset-2 hover:text-[#2E86C1]"
            >
              Poetry Analysis page
            </Link>
            .
          </p>

          <div className="mt-6 space-y-3">
            {selectedPoems.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-[#1A5276]">
                    &ldquo;{p.title}&rdquo;
                    <span className="ml-1 font-normal text-gray-500">&mdash; {p.poet}</span>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Themes:</span> {p.themes}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-[#2E86C1]/20 bg-[#2E86C1]/5 p-5">
            <h3 className="font-semibold text-[#1A5276]">Approaching a Poetry Question</h3>
            <ol className="mt-3 space-y-2 text-sm text-gray-700">
              <li>
                <strong>1. Read the question carefully.</strong> Underline the key words.
                If it says &ldquo;How does the poet present...&rdquo;, you must focus on methods,
                not just content.
              </li>
              <li>
                <strong>2. Annotate the poem.</strong> For passage-based questions, spend 5
                minutes annotating before writing. Identify imagery, sound devices, structural
                features, and shifts in tone.
              </li>
              <li>
                <strong>3. Structure your response.</strong> Use a clear analytical paragraph
                structure: point &rarr; evidence (quote) &rarr; analysis of language/form
                &rarr; link to question/wider meaning.
              </li>
              <li>
                <strong>4. Embed quotations.</strong> Short, embedded quotations (&ldquo;the
                &lsquo;lone and level sands&rsquo; suggest...&rdquo;) are more effective than
                long block quotes.
              </li>
              <li>
                <strong>5. Consider the whole poem.</strong> Even for passage-based questions,
                discuss how the extract relates to the poem&rsquo;s overall meaning, structure,
                and ending.
              </li>
            </ol>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* ── Set prose texts ─────────────────────────────────────── */}
        <section aria-labelledby="prose-heading">
          <h2 id="prose-heading" className="text-2xl font-bold text-gray-900">
            Set Prose Texts
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Cambridge offers a choice of prose texts. Your school will have chosen one.
            Below is an overview of commonly studied texts with guidance on what Cambridge
            looks for.
          </p>

          <div className="mt-6 space-y-4">
            {proseTexts.map((t) => (
              <div
                key={t.title}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-[#1A5276]">
                  {t.title}
                  {"author" in t && (
                    <span className="ml-1 font-normal text-gray-500">
                      &mdash; {t.author}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* ── Exam technique ──────────────────────────────────────── */}
        <section aria-labelledby="technique-heading">
          <h2 id="technique-heading" className="text-2xl font-bold text-gray-900">
            Exam Technique: Passage-Based vs Essay Questions
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#1A5276]">Passage-Based Questions</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Advantages:</strong> The text is in front of you. You can analyse
                  specific language closely. Good if you find it hard to memorise quotes.
                </li>
                <li>
                  <strong>What to do:</strong> Work through the extract methodically. Comment
                  on language, imagery, structure, and tone. But <em>always</em> connect
                  outward to the rest of the text.
                </li>
                <li>
                  <strong>Common mistake:</strong> Paraphrasing the passage instead of
                  analysing it. Examiners want analysis of <em>how</em> the writer creates
                  effects, not a summary of <em>what</em> happens.
                </li>
                <li>
                  <strong>Top tip:</strong> Consider what comes before and after the extract.
                  Why is this moment significant in the context of the whole text?
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#1A5276]">Essay Questions</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Advantages:</strong> You can choose which parts of the text to
                  discuss. Good if you know the text very well and have strong personal
                  interpretations.
                </li>
                <li>
                  <strong>What to do:</strong> Plan 3&ndash;4 key points before writing.
                  Each paragraph needs a clear argument supported by quotation and analysis.
                  Track the development of your argument across the essay.
                </li>
                <li>
                  <strong>Common mistake:</strong> Telling the story rather than analysing it.
                  An essay answer should be thematic and analytical, not a narrative retelling.
                </li>
                <li>
                  <strong>Top tip:</strong> Address the question in every paragraph. The best
                  answers keep returning to the key words of the question, showing a sustained
                  and focused argument.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#1A5276]">Model Paragraph Structure (PEAL)</h3>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <p>
                <strong className="text-[#2E86C1]">P</strong>oint &mdash; Make a clear
                analytical point that directly addresses the question.
              </p>
              <p>
                <strong className="text-[#2E86C1]">E</strong>vidence &mdash; Support with a
                short, embedded quotation from the text.
              </p>
              <p>
                <strong className="text-[#2E86C1]">A</strong>nalysis &mdash; Analyse the
                language: what specific words suggest, what techniques the writer uses, what
                effects are created.
              </p>
              <p>
                <strong className="text-[#2E86C1]">L</strong>ink &mdash; Link back to the
                question and, where possible, to wider themes, context, or the writer&rsquo;s
                overall purpose.
              </p>
            </div>
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-[#1A5276] underline underline-offset-2 hover:text-[#2E86C1]"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>

    </>
  );
}
