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
  {
    question: 'What are the AO1, AO2 and AO3 assessment objectives in GCSE English Literature?',
    answer:
      'AO1 is your informed personal response with embedded textual references. AO2 is analysis of the writer’s methods — language, form and structure — and their effects. AO3 is the relationship between the text and the contexts in which it was written and received. Weightings differ by board, so check your specification, but AO1 and AO2 carry the most marks on most papers.',
  },
  {
    question: 'Is The English Hub endorsed by AQA, Edexcel or OCR?',
    answer:
      'No. The English Hub is an independent platform. Resources are aligned to public specifications and assessment objectives, but it is not endorsed, approved or affiliated with any exam board. Always confirm final requirements with your teacher and the board’s official specification.',
  },
  {
    question: 'How do I analyse an unseen poem in the exam?',
    answer:
      'Read it twice, then identify the subject, the speaker’s attitude and how it shifts. Work outward from form and structure (stanzas, line length, rhyme, volta) to language and imagery, always linking method to effect and to the poem’s overall meaning. Plan a clear argument before writing rather than annotating endlessly.',
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
  {
    question: 'What is the Cambridge IGCSE 0500 directed writing question?',
    answer:
      'In Paper 1 (Reading) and Paper 2 (Directed Writing and Composition) you respond to one or two texts in a specified form — a letter, speech, report or article — for a stated audience and purpose. Marks are split between reading (understanding and using the texts) and writing (style, structure and accuracy), so address both deliberately.',
  },
  {
    question: 'How is IGCSE English graded — A*–G or 9–1?',
    answer:
      'It depends on the syllabus your centre enters. Cambridge 0500 and Edexcel 4EA1/4ET1 are typically graded A*–G, while Cambridge 0990/0992 use the 9–1 scale. The teaching content and skills are equivalent across the paired syllabuses — check which code your school uses for grade boundaries.',
  },
  {
    question: 'Does The English Hub mark IGCSE essays to the specification?',
    answer:
      'Yes. Essay feedback is mapped to the relevant IGCSE assessment objectives and band descriptors for your syllabus, with targeted improvement steps. It is AI-assisted revision guidance, not an official Cambridge or Pearson result, and a human-review option is available.',
  },
  {
    question: 'How do I revise IGCSE English when there are no past papers for my route?',
    answer:
      'Use the published specimen and assessment materials from the board, practise the exact question types under timed conditions, and self-assess against the mark scheme. Skill drills — directed writing structures, summary technique and analytical paragraphs — transfer across papers even when past-paper supply is limited.',
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
  {
    question: 'How far in advance should I start GCSE English revision?',
    answer:
      'Begin light, regular review around six months out — quotation banks and technique recall benefit most from spacing. Step up timed essay practice in the final two to three months. Cramming works poorly for English because the marks come from practised analytical skill, not memorised facts.',
  },
  {
    question: 'What is the difference between AO1, AO2 and AO3 in practice?',
    answer:
      'AO1 is answering the question with a clear argument and embedded evidence. AO2 is analysing how the writer’s methods create meaning and effect. AO3 is linking ideas to context only where it deepens interpretation. A strong paragraph usually weaves AO1 and AO2 together, with AO3 added where it earns marks.',
  },
  {
    question: 'How do I revise quotations without rote learning?',
    answer:
      'Group short quotations by theme and character, test yourself with active recall rather than re-reading, and practise applying each quotation to different exam questions. Flexible quotations that serve multiple themes are worth far more than long passages memorised verbatim.',
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
  {
    question: 'Which English resources help most for AQA Paper 1 and Paper 2?',
    answer:
      'For AQA English Language Paper 1, focus on the language-analysis and structure technique guides plus narrative/descriptive model answers. For Paper 2, use the comparison and persuasive-writing walkthroughs. Map each resource to the specific question it serves rather than reading broadly.',
  },
  {
    question: 'Are there free model answers for GCSE English Literature?',
    answer:
      'Yes — the model-answers section includes grade-7-to-9 exemplar essays with marker commentary explaining the band judgement. Read them for structure and how analysis is built, not to memorise, then apply the same moves to your own practice essays.',
  },
  {
    question: 'How do I use the vocabulary and technique resources effectively?',
    answer:
      'Learn techniques in pairs of name plus effect, not definitions alone, and immediately apply each to a short passage. For vocabulary, prioritise precise analytical verbs and conceptual nouns you can deploy in essays rather than long word lists.',
  },
]
