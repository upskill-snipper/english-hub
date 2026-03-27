import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/ocr/paper-1' },
  title:
    "OCR Paper 1: Exploring Modern and Literary Heritage Texts | The English Hub",
  description:
    "Complete guide to OCR GCSE English Literature Component 01. Modern prose/drama and 19th-century literary heritage text revision.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRLitPaper1Page() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/ocr"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; OCR English Literature
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Exploring Modern and Literary Heritage Texts
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Component 01 &middot; 2 hours &middot; 80 marks &middot; 50% of
            GCSE
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Paper structure */}
        <section aria-labelledby="structure-heading">
          <h2
            id="structure-heading"
            className="text-2xl font-bold text-foreground"
          >
            Paper Structure
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Paper 1 is a closed-book exam lasting 2 hours. You answer
              questions on two texts: one modern and one from the literary
              heritage. The paper has two sections:
            </p>
            <div className="overflow-x-auto">
              <table className="mt-2 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20 text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground">Section</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Focus</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Marks</th>
                    <th className="py-3 font-semibold text-foreground">Time Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 pr-4 font-medium">A</td>
                    <td className="py-3 pr-4">Modern prose or drama text (post-1914)</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">1 hour</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">B</td>
                    <td className="py-3 pr-4">19th-century prose (literary heritage)</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">1 hour</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded border border-accent/20 bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">Important</p>
              <p className="mt-1 text-sm text-primary">
                This is a <strong>closed-book</strong> exam. You will not have
                the texts in front of you. You must learn key quotations and
                know the texts thoroughly.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section A: Modern text ─────────────────────────── */}
        <section aria-labelledby="modern-heading">
          <h2
            id="modern-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section A: Modern Prose or Drama Text
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Set Texts
              </h3>
              <p className="mt-2">
                OCR offers a range of modern texts. Your school will have
                chosen one of the following (or a similar approved text):
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li><em>An Inspector Calls</em> by J.B. Priestley</li>
                <li><em>Blood Brothers</em> by Willy Russell</li>
                <li><em>The History Boys</em> by Alan Bennett</li>
                <li><em>A Taste of Honey</em> by Shelagh Delaney</li>
                <li><em>Lord of the Flies</em> by William Golding</li>
                <li><em>Animal Farm</em> by George Orwell</li>
                <li><em>Never Let Me Go</em> by Kazuo Ishiguro</li>
                <li><em>Anita and Me</em> by Meera Syal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Question Format
              </h3>
              <p className="mt-2">
                You will answer <strong>one</strong> question on your studied
                modern text. The question will typically be an essay question
                that asks you to explore a theme, character, or idea. You may
                be given a statement or a prompt and asked to what extent you
                agree with it.
              </p>
              <p className="mt-3">
                Example question format: &ldquo;Explore how [author] presents
                [theme/character] in [text]. You should consider the
                writer&rsquo;s methods and the effects on the reader.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                How to Write a Strong Response
              </h3>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">1. Plan Before You Write</h4>
                  <p className="mt-2 text-sm">
                    Spend 5 minutes planning. Identify 3&ndash;4 key points
                    you want to make. For each point, note a quotation and the
                    technique or method you will analyse. Consider how the
                    points connect and build an argument.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">2. Use the Introduction to Set Up Your Argument</h4>
                  <p className="mt-2 text-sm">
                    Your introduction should address the question directly and
                    outline your interpretation. Mention the writer by name and
                    refer to their purpose. Example: &ldquo;Priestley presents
                    the Inspector as a moral force who challenges the
                    Birlings&rsquo; complacency and forces them to confront
                    their social responsibility.&rdquo;
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">3. Analyse Language Closely (AO2)</h4>
                  <p className="mt-2 text-sm">
                    Every paragraph should include a quotation and close
                    analysis of specific words. Don&rsquo;t just name
                    techniques &mdash; explore the connotations of individual
                    words and explain their effect on the reader.
                  </p>
                  <div className="mt-3 rounded border border-accent/20 bg-primary/10 p-3">
                    <p className="text-sm font-medium text-primary">Model analysis</p>
                    <p className="mt-1 text-sm italic text-primary">
                      &ldquo;Priestley uses the stage direction
                      &lsquo;massively&rsquo; to describe the Inspector&rsquo;s
                      entrance, suggesting an overwhelming, immovable presence.
                      The adverb connotes weight and power, establishing the
                      Inspector as a force that cannot be ignored or dismissed.
                      This is significant because it contrasts with
                      Birling&rsquo;s pompous confidence moments earlier,
                      immediately shifting the power dynamic.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">4. Embed Context Naturally (AO3)</h4>
                  <p className="mt-2 text-sm">
                    Context should be woven into your analysis, not bolted on
                    as a separate paragraph. Link context to the writer&rsquo;s
                    purpose and the effect on the audience.
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded border border-warn/30 bg-warn-50 p-3">
                      <p className="text-xs font-semibold text-warn-700">Weak context</p>
                      <p className="mt-1 text-sm italic">
                        &ldquo;In 1912, there was a class system in
                        Britain.&rdquo; (This is a disconnected fact.)
                      </p>
                    </div>
                    <div className="rounded border border-success/30 bg-success-50 p-3">
                      <p className="text-xs font-semibold text-success-700">Strong context</p>
                      <p className="mt-1 text-sm italic">
                        &ldquo;Priestley, writing in 1945, deliberately sets
                        the play in 1912 to expose how the Edwardian ruling
                        class&rsquo;s wilful ignorance of social inequality
                        contributed to the devastation of two world wars.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">5. Track Development Across the Text</h4>
                  <p className="mt-2 text-sm">
                    Show how the theme or character develops from the beginning
                    to the end of the text. Use phrases like &ldquo;At the
                    start of the play&hellip;&rdquo;, &ldquo;As the play
                    progresses&hellip;&rdquo;, &ldquo;By the end&hellip;&rdquo;
                    to structure your argument chronologically.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">6. Write a Strong Conclusion</h4>
                  <p className="mt-2 text-sm">
                    Your conclusion should offer a final, evaluative judgement
                    that answers the question directly. Consider the
                    writer&rsquo;s overall message and its relevance to the
                    original audience and/or modern readers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section B: Literary heritage ───────────────────── */}
        <section aria-labelledby="heritage-heading">
          <h2
            id="heritage-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section B: 19th-Century Prose (Literary Heritage)
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Set Texts
              </h3>
              <p className="mt-2">
                OCR offers a range of 19th-century prose texts. Your school
                will have chosen one of the following (or a similar approved
                text):
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li><em>A Christmas Carol</em> by Charles Dickens</li>
                <li><em>Great Expectations</em> by Charles Dickens</li>
                <li><em>Jane Eyre</em> by Charlotte Bront&euml;</li>
                <li><em>Frankenstein</em> by Mary Shelley</li>
                <li><em>The Strange Case of Dr Jekyll and Mr Hyde</em> by Robert Louis Stevenson</li>
                <li><em>Pride and Prejudice</em> by Jane Austen</li>
                <li><em>The War of the Worlds</em> by H.G. Wells</li>
                <li><em>The Sign of Four</em> by Arthur Conan Doyle</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Approaching 19th-Century Texts
              </h3>
              <p className="mt-2">
                Many students find 19th-century texts challenging because of
                the language and context. Here are strategies for success:
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    Understanding Victorian Context
                  </h4>
                  <p className="mt-2 text-sm">
                    The 19th century was a period of enormous social change in
                    Britain. Key contextual areas to understand include:
                  </p>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>
                      <strong>Class and social hierarchy</strong> &mdash;
                      Victorian society was sharply divided by class, wealth,
                      and birth. Many 19th-century writers critiqued or
                      explored these divisions.
                    </li>
                    <li>
                      <strong>Industrialisation and urbanisation</strong>{" "}
                      &mdash; The Industrial Revolution transformed Britain,
                      creating immense wealth but also terrible poverty,
                      pollution, and exploitation.
                    </li>
                    <li>
                      <strong>Religion and morality</strong> &mdash;
                      Christianity played a central role in Victorian life.
                      Many texts engage with questions of sin, redemption,
                      and moral responsibility.
                    </li>
                    <li>
                      <strong>Gender roles</strong> &mdash; Women had limited
                      rights and were expected to be submissive and domestic.
                      Many novels challenge or explore these constraints.
                    </li>
                    <li>
                      <strong>Science and progress</strong> &mdash;
                      Darwin&rsquo;s theory of evolution (1859) challenged
                      religious certainties. Texts like <em>Frankenstein</em>{" "}
                      and <em>Jekyll and Hyde</em> explore anxieties about
                      scientific progress.
                    </li>
                    <li>
                      <strong>Empire and colonialism</strong> &mdash; Britain
                      ruled a vast empire. Attitudes to race, civilisation,
                      and &ldquo;otherness&rdquo; permeate much
                      19th-century literature.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    Dealing with Archaic Language
                  </h4>
                  <p className="mt-2 text-sm">
                    Don&rsquo;t be intimidated by older vocabulary and sentence
                    structures. Focus on understanding the overall meaning
                    first, then zoom into specific words for analysis. Some
                    tips:
                  </p>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Read the text multiple times &mdash; familiarity reduces difficulty</li>
                    <li>Look up archaic words and make a glossary</li>
                    <li>Pay attention to sentence structure: many Victorian writers use long, complex sentences with multiple clauses</li>
                    <li>Focus on the emotional and thematic content, not just the vocabulary</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    19th-Century Narrative Techniques
                  </h4>
                  <p className="mt-2 text-sm">
                    Be aware of common narrative techniques in 19th-century
                    prose:
                  </p>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>
                      <strong>Omniscient narrator</strong> &mdash; An
                      all-knowing narrator who can access the thoughts and
                      feelings of all characters.
                    </li>
                    <li>
                      <strong>First-person retrospective</strong> &mdash; A
                      character looking back on their past
                      (e.g., <em>Great Expectations</em>,{" "}
                      <em>Jane Eyre</em>).
                    </li>
                    <li>
                      <strong>Frame narrative</strong> &mdash; A story within a
                      story (e.g., <em>Frankenstein</em>).
                    </li>
                    <li>
                      <strong>Serialisation</strong> &mdash; Many novels were
                      published in instalments, which affected their structure
                      (cliffhangers, episodic plots).
                    </li>
                    <li>
                      <strong>Gothic elements</strong> &mdash; Atmosphere,
                      suspense, the supernatural, decay, and isolation feature
                      in many texts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Essay structure */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Essay Structure for Section B
              </h3>
              <p className="mt-2">
                Follow this structure for a well-organised essay:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Introduction</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Address the question directly. State your interpretation
                    and mention the writer&rsquo;s purpose. Briefly reference
                    the context.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Paragraph 1: Beginning of the text</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Analyse how the theme/character is established early in
                    the text. Close language analysis of a key quotation.
                    Embed context naturally.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Paragraph 2: Development / middle</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Analyse how the theme/character develops or changes.
                    Consider a turning point or key event. Explore the
                    writer&rsquo;s methods.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Paragraph 3: Climax / resolution</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Analyse how the theme/character is presented at a crucial
                    or culminating moment. Consider the writer&rsquo;s message
                    or resolution.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Paragraph 4 (optional): Alternative interpretation</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Offer a different reading of the text. Consider how a
                    Victorian audience might have responded differently from a
                    modern reader.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Conclusion</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Provide a final evaluative judgement. Consider the
                    writer&rsquo;s overall message and its continuing
                    relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Common mistakes ────────────────────────────────── */}
        <section aria-labelledby="mistakes-heading">
          <h2
            id="mistakes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Common Mistakes to Avoid
          </h2>
          <div className="mt-4">
            <ul className="ml-6 list-disc space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong>Retelling the story</strong> &mdash; The examiner
                knows the plot. Focus on analysis, not narration. Every
                sentence should analyse, not describe.
              </li>
              <li>
                <strong>Context dumping</strong> &mdash; Writing a paragraph
                of context that is not connected to the question or your
                analysis. Context should always be embedded within your
                analytical points.
              </li>
              <li>
                <strong>Feature-spotting</strong> &mdash; Listing techniques
                without explaining their effect. Always explain <em>why</em>{" "}
                a technique is used and its impact on the reader.
              </li>
              <li>
                <strong>Not using quotations</strong> &mdash; Since this is a
                closed-book exam, you must memorise key quotations. Even short
                quotations (2&ndash;3 words) are effective when analysed
                closely.
              </li>
              <li>
                <strong>Ignoring the writer</strong> &mdash; Always refer to
                the writer by name and discuss their choices deliberately.
                Use phrases like &ldquo;Dickens presents&hellip;&rdquo;,
                &ldquo;Shelley suggests&hellip;&rdquo;, &ldquo;Stevenson
                implies&hellip;&rdquo;
              </li>
              <li>
                <strong>Not tracking development</strong> &mdash; Show how the
                theme or character changes or develops across the whole text,
                not just at one moment.
              </li>
            </ul>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
