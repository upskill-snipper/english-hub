import { headers } from 'next/headers'
import { FAQPageJsonLd } from '@/components/seo/json-ld'

export type GeoFaqItem = { question: string; answer: string }

/**
 * GEO/SEO FAQ block. Renders BOTH:
 *  (a) visible question-shaped <h2>/<h3> headings + answers — feeds the
 *      "question-shaped headings" GEO signal, and
 *  (b) FAQPage JSON-LD — feeds the structured-data signal.
 *
 * Server component (async, reads the CSP nonce itself so callers stay
 * one-liners). Pass plain already-resolved strings.
 *
 * IMPORTANT: do NOT add this to a page/route that already emits
 * <FAQPageJsonLd> (e.g. /for-teachers, /for-schools, /pricing,
 * /faqs/*, /for-parents, /for-students, the gcc/qatar/international
 * IGCSE landing pages) — two FAQPage blocks on one URL is duplicate
 * structured data and the GEO scorer may discount it.
 */
export async function GeoFaq({
  faqs,
  heading = 'Frequently asked questions',
}: {
  faqs: GeoFaqItem[]
  heading?: string
}) {
  if (!faqs || faqs.length === 0) return null
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <section
      aria-labelledby="geo-faq-heading"
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10"
    >
      <h2 id="geo-faq-heading" className="text-heading-lg font-heading text-foreground">
        {heading}
      </h2>

      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border-b border-border/40 pb-6 last:border-0 last:pb-0"
          >
            {/* Question as a heading ending in "?" — the GEO scorer
                matches h2/h3 that are phrased as questions. */}
            <h3 className="text-heading-md font-heading text-foreground">{faq.question}</h3>
            <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>

      <FAQPageJsonLd faqs={faqs} nonce={nonce} />
    </section>
  )
}

export default GeoFaq

// ─── Reusable, board-accurate FAQ content (British English, no
//     fabricated endorsements). Imported by hub templates so the copy
//     stays single-source and consistent. ────────────────────────────

export const GCSE_BOARD_FAQS: GeoFaqItem[] = [
  {
    question: 'How do I structure an AQA Power and Conflict comparison answer?',
    answer:
      'Open with a thesis comparing how both poets present the theme, then alternate between the poems in linked paragraphs — point, method, effect, then the comparative link. Spend roughly equal time on each poem, embed short quotations, analyse language and structure for AO2, and weave in context (AO3) only where it sharpens meaning. Aim for three or four developed comparative paragraphs in 45 minutes.',
  },
  {
    question: 'What is the difference between AQA English Language Paper 1 and Paper 2?',
    answer:
      'Paper 1 is fiction: one unseen literary extract, four reading questions and one descriptive or narrative writing task. Paper 2 is non-fiction: two linked texts (one often pre-20th-century), comparison and analysis questions, and one persuasive writing task. Both are 1 hour 45 minutes and each is worth 50% of the Language GCSE.',
  },
  {
    question: 'Does The English Hub mark my essays to the real exam mark scheme?',
    answer:
      'Yes. Essay feedback is mapped to the assessment objectives and band descriptors examiners use, giving you a banded indication plus targeted next steps. It is AI-generated guidance for revision, not an official exam result, and a human-review option is available. The English Hub is independent and exam-board aligned, not endorsed.',
  },
  {
    question: 'How long should a GCSE English Literature essay be?',
    answer:
      'There is no word count — examiners reward quality of analysis, not length. In practice a strong response is roughly four to six well-developed paragraphs written in about 45 minutes, with embedded quotations and sustained focus on the question.',
  },
  {
    question: 'How do I move an English essay from a grade 5 to a grade 7?',
    answer:
      'Move from feature-spotting to analysing why the writer’s choices matter, sustain a single clear argument, embed shorter quotations, and add a conceptual or contextual overview. Targeted feedback on real essays accelerates this faster than re-reading notes.',
  },
]

export const IGCSE_FAQS: GeoFaqItem[] = [
  {
    question:
      'What is the difference between Pearson Edexcel IGCSE English (4ET1) and Cambridge IGCSE (0500)?',
    answer:
      'Edexcel 4ET1 is English Literature with set texts, an anthology and a Shakespeare/poetry component. Cambridge 0500 is First Language English — reading and directed writing on unseen non-fiction, with no set literary texts. They are different qualifications, so revise to the specification your school enters you for.',
  },
  {
    question: 'Is Cambridge IGCSE English 0500 the same as 0990?',
    answer:
      'They share the same syllabus content and assessment; 0990 is the 9–1 graded version and 0500 is A*–G. Skills, papers and mark schemes are equivalent — revise identically and check which grading scale your school uses.',
  },
  {
    question: 'How is IGCSE English assessed — coursework or exam?',
    answer:
      'It depends on the route. Cambridge 0500/0990 offers an exam-only route and a coursework route; Edexcel 4ET1 is assessed by written examination. Ask your teacher which option your centre has chosen, as it changes how you prepare.',
  },
  {
    question: 'Does The English Hub cover IGCSE as well as GCSE?',
    answer:
      'Yes. There are dedicated IGCSE hubs for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge International (0500, 0990), with set-text guides, exam-technique walkthroughs and AI essay marking aligned to each specification.',
  },
  {
    question: 'Which texts are on the Pearson Edexcel IGCSE 4ET1 specification?',
    answer:
      'Components cover the Pearson Poetry Anthology plus prose and drama set texts (commonly including Of Mice and Men, To Kill a Mockingbird, Things Fall Apart and a Shakespeare play). Your centre chooses the exact texts, so confirm yours with your teacher before revising.',
  },
]

export const REVISION_FAQS: GeoFaqItem[] = [
  {
    question: 'How do I write a top-band GCSE English Literature introduction?',
    answer:
      'State a clear, arguable thesis that directly answers the question and signals the writer’s overarching method or purpose. Avoid retelling the plot or listing devices — one or two focused sentences that set up a line of argument is enough.',
  },
  {
    question: 'How should I split my time in AQA English Language Paper 1?',
    answer:
      'Roughly 15 minutes reading and annotating, around 45 minutes on the four reading questions (weighted by marks), and about 45 minutes planning and writing Section B. Leave a few minutes to check. Adjust the proportions for other boards.',
  },
  {
    question: 'What is the best way to revise English when there is no content to memorise?',
    answer:
      'Treat skills as the content: practise unseen extracts, essay planning and timed writing; mark your work against the assessment objectives; and drill model paragraphs. Spaced, active practice beats passive re-reading.',
  },
  {
    question: 'How many quotations should I memorise for a set text?',
    answer:
      'Around 10–15 short, flexible quotations that each cover multiple themes or characters is more useful than dozens of long ones. Examiners reward precise, well-analysed references, not quantity.',
  },
  {
    question: 'Does The English Hub create a personalised revision plan?',
    answer:
      'Yes — the toolkit builds board-specific revision and study plans, and analytics highlight weaker areas so you can focus your time where it raises your grade most.',
  },
]

export const RESOURCES_FAQS: GeoFaqItem[] = [
  {
    question: 'Are the resources on The English Hub free?',
    answer:
      'The resources hub includes free revision notes, poetry guides, technique cheatsheets and study tools with no signup required for many of them. Premium tools (AI essay marking, unlimited practice) sit behind a plan, with a free trial.',
  },
  {
    question: 'Which exam boards do the English resources cover?',
    answer:
      'Resources are mapped to AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. Pick your board and the materials are filtered to your specification, assessment objectives and set texts.',
  },
  {
    question: 'How should I use revision notes without just copying them?',
    answer:
      'Read the note once for understanding, then close it and rewrite the key argument from memory. Turn each section into a practice question and answer it under timed conditions. Active recall beats highlighting.',
  },
  {
    question: 'What is the difference between model answers and revision notes?',
    answer:
      'Revision notes summarise plot, theme, context and method so you understand the text. Model answers show how to convert that understanding into an exam response that hits the assessment objectives — read them for structure and technique, not to memorise.',
  },
  {
    question: 'Does The English Hub check its content for accuracy?',
    answer:
      'Yes. Content follows a published verification methodology — quotations are checked against reliable sources, high-stakes material is human-reviewed, and reader-reported errors are corrected. The platform is independent and exam-board aligned, not endorsed.',
  },
]
