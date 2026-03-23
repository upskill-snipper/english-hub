import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Text Comparison: Prose & Drama | The English Hub",
  description:
    "Learn how to compare prose and drama texts for GCSE and IGCSE English. Cross-text comparison techniques with example comparisons including Macbeth vs Lady Macbeth and Inspector Goole vs Arthur Birling.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-[#2E86C1]/10 px-1 py-0.5 text-[#1A5276] border-b-2 border-dashed border-[#2E86C1]/40">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-[#1A5276] px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#1A5276]" />
      </span>
    </span>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-[#1A5276] border-b-2 border-[#2E86C1]/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── TOC data ───────────────────────────────────────────────── */

const TOC = [
  { id: "when-why", label: "When & Why You Compare" },
  { id: "technique", label: "Cross-Text Technique" },
  { id: "example-macbeth", label: "Example: Macbeth's Guilt" },
  { id: "example-inspector", label: "Example: Goole vs Birling" },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function TextComparisonPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2E86C1]/80">
            Comparison Skills
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Comparing Prose &amp; Drama Texts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Master cross-text comparison for literature exams. Learn when and why
            you compare characters, themes, and ideas within and across set texts.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#1A5276] transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-[#1A5276] transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/comparison" className="hover:text-[#1A5276] transition-colors">Comparison Skills</Link></li>
          <li>/</li>
          <li className="font-medium text-[#1A5276]">Text Comparison</li>
        </ol>
      </nav>

      {/* TOC + Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">

          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                On this page
              </p>
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#1A5276] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">

            {/* ── When & Why ──────────────────────────────────── */}
            <Section id="when-why" title="When and Why You Compare Texts">
              <p className="text-gray-700 leading-relaxed">
                In literature exams, comparison is not always a separate question -- it is often embedded into character and theme questions. Understanding when and why to compare will help you unlock the highest marks.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-[#1A5276]">Within a Single Text</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Many questions implicitly ask you to compare characters or themes within the same text. For example, comparing Macbeth and Lady Macbeth&rsquo;s guilt, or comparing how a character changes from the beginning to the end of the play. Even if the question does not use the word &ldquo;compare,&rdquo; drawing comparisons shows sophisticated understanding.
                  </p>
                  <div className="mt-3 rounded-lg bg-[#2E86C1]/5 p-3">
                    <p className="text-sm text-[#1A5276]">
                      <span className="font-semibold">Example questions:</span> &ldquo;How does Shakespeare present guilt in Macbeth?&rdquo; -- you should compare Macbeth and Lady Macbeth&rsquo;s different experiences of guilt.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-[#1A5276]">Across Two Texts</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Some exam boards (notably AQA Literature Paper 2) explicitly require you to compare two texts. For instance, comparing how power is presented in &lsquo;An Inspector Calls&rsquo; and &lsquo;A Christmas Carol&rsquo;. Here, you need to write about both texts in an integrated way, not as two separate essays.
                  </p>
                  <div className="mt-3 rounded-lg bg-[#2E86C1]/5 p-3">
                    <p className="text-sm text-[#1A5276]">
                      <span className="font-semibold">Example questions:</span> &ldquo;Compare how Priestley and Dickens present social responsibility.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-[#1A5276]">Why Examiners Value Comparison</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-[#2E86C1]">&#9679;</span>
                      It demonstrates deeper understanding -- you see patterns and connections, not just surface-level ideas.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-[#2E86C1]">&#9679;</span>
                      It shows analytical sophistication -- comparing methods (not just themes) proves you understand how writers create meaning.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-[#2E86C1]">&#9679;</span>
                      It enables evaluative judgement -- weighing up two perspectives is a higher-order skill that pushes you into the top mark bands.
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* ── Cross-Text Technique ────────────────────────── */}
            <Section id="technique" title="Cross-Text Comparison Technique">
              <p className="text-gray-700 leading-relaxed">
                Use this framework for every cross-text comparison paragraph. It ensures you analyse methods, make connections, and stay focused on the question.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "P",
                    label: "Point",
                    detail: "Make a comparative point that addresses the question. Start with a claim about how both texts/characters relate to the theme.",
                    example: "Both Macbeth and Lady Macbeth experience guilt, but Shakespeare presents their responses as fundamentally different.",
                    colour: "bg-[#1A5276]",
                  },
                  {
                    step: "E",
                    label: "Evidence (Text A)",
                    detail: "Provide a short, embedded quotation from the first text/character. Choose a quotation rich in techniques.",
                    example: "Macbeth's hallucination of the \"dagger\" before Duncan's murder shows his guilt manifesting as paranoid visions.",
                    colour: "bg-[#2E86C1]",
                  },
                  {
                    step: "A",
                    label: "Analyse (Text A)",
                    detail: "Analyse the language, structure, or dramatic technique. Name the device and explain its effect.",
                    example: "The hallucination externalises Macbeth's inner turmoil, and the interrogative \"Is this a dagger which I see before me?\" reveals his psychological fragmentation.",
                    colour: "bg-[#2E86C1]",
                  },
                  {
                    step: "C",
                    label: "Compare (Text B)",
                    detail: "Use a comparative connective and bring in the second text/character. Show how it is similar or different.",
                    example: "In contrast, Lady Macbeth's guilt does not emerge until Act 5, when she sleepwalks and tries to wash imaginary blood from her hands.",
                    colour: "bg-[#E67E22]",
                  },
                  {
                    step: "E",
                    label: "Evidence & Analyse (Text B)",
                    detail: "Provide a quotation from the second text and analyse it, linking back to the comparison point.",
                    example: "Her desperate cry \"Out, damned spot!\" uses the imperative to show she has lost control -- the very control she prided herself on in Act 1.",
                    colour: "bg-[#E67E22]",
                  },
                  {
                    step: "L",
                    label: "Link / Evaluate",
                    detail: "Link back to the question and offer an evaluative judgement. Which response is more significant? What does this comparison reveal?",
                    example: "Shakespeare thus suggests that guilt is inescapable: whether it strikes immediately (Macbeth) or is delayed (Lady Macbeth), it ultimately destroys both.",
                    colour: "bg-[#8E44AD]",
                  },
                ].map((item) => (
                  <div key={item.step + item.label} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.colour} text-sm font-bold text-white`}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.detail}</p>
                      <div className="mt-2 rounded-lg bg-gray-50 px-4 py-3">
                        <p className="text-sm italic text-gray-700">{item.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Example: Macbeth ────────────────────────────── */}
            <Section id="example-macbeth" title="Example: Comparing Macbeth and Lady Macbeth's Guilt">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 mb-6">
                <p className="text-sm font-semibold text-[#1A5276]">Question:</p>
                <p className="mt-1 text-sm italic text-gray-700">
                  How does Shakespeare present guilt in &lsquo;Macbeth&rsquo;?
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#2E86C1]/30 bg-white p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#2E86C1]">Model Comparative Response</p>

                <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                  <p>
                    <Annotation note="Comparative thesis immediately addressing the question.">Shakespeare presents guilt as an inescapable psychological force that manifests differently in Macbeth and Lady Macbeth, ultimately destroying both.</Annotation>{" "}
                    While Macbeth&rsquo;s guilt is immediate and visceral, consuming him from the moment of Duncan&rsquo;s murder, Lady Macbeth&rsquo;s guilt is suppressed and delayed, erupting catastrophically in the play&rsquo;s final act. Through this contrast, Shakespeare suggests that guilt cannot be controlled or escaped, regardless of one&rsquo;s temperament.
                  </p>

                  <p>
                    <Annotation note="First comparison point with evidence from both characters.">Macbeth&rsquo;s guilt manifests as hallucinations, revealing his psychological fragmentation.</Annotation>{" "}
                    Before Duncan&rsquo;s murder, he sees a &ldquo;dagger of the mind, a false creation&rdquo; -- the noun phrase &ldquo;false creation&rdquo; suggests his guilt is already manufacturing visions that blur reality and imagination. After the murder, he hears a voice cry &ldquo;Sleep no more! Macbeth does murder sleep&rdquo; -- the personification of sleep as something that can be &ldquo;murdered&rdquo; implies that Macbeth has destroyed his own peace of mind irreparably. <Annotation note="Transition to Lady Macbeth using 'In contrast'.">In contrast, Lady Macbeth shows no guilt at this stage.</Annotation>{" "}
                    She dismisses Macbeth&rsquo;s terror with the imperative &ldquo;consider it not so deeply,&rdquo; and the pragmatic &ldquo;a little water clears us of this deed.&rdquo; The dismissive adverb &ldquo;little&rdquo; reveals her belief that guilt is easily washed away -- an irony that Shakespeare will devastatingly reverse in Act 5.
                  </p>

                  <p>
                    <Annotation note="Second comparison point: the reversal of guilt.">However, Shakespeare engineers a powerful reversal in Act 5, where Lady Macbeth&rsquo;s suppressed guilt erupts uncontrollably.</Annotation>{" "}
                    Her sleepwalking scene mirrors Macbeth&rsquo;s earlier hallucinations: just as he saw imaginary daggers, she sees imaginary blood. Her anguished &ldquo;Out, damned spot! Out, I say!&rdquo; echoes her earlier assurance that &ldquo;a little water&rdquo; would suffice, creating tragic irony. The exclamatory sentences and repetition convey desperation, and the adjective &ldquo;damned&rdquo; -- with its connotations of hell and damnation -- suggests she now recognises the spiritual weight of her crime. <Annotation note="Links back to Macbeth to complete the comparison.">Whereas Macbeth&rsquo;s guilt was expressed through supernatural visions (the dagger, Banquo&rsquo;s ghost),</Annotation> Lady Macbeth&rsquo;s guilt is expressed through the obsessive physical action of handwashing, suggesting her guilt has become embodied -- it has invaded her body as well as her mind.
                  </p>

                  <p>
                    <Annotation note="Third point: the dramatic and contextual significance.">Shakespeare uses these contrasting presentations of guilt to reinforce a moral lesson for his Jacobean audience.</Annotation>{" "}
                    In a society that believed in divine right and the Great Chain of Being, the murder of a king was the ultimate sin. By showing that guilt destroys both the active perpetrator (Macbeth, who physically commits the murder) and the instigator (Lady Macbeth, who plans and persuades), Shakespeare suggests that no one can escape divine justice. Macbeth&rsquo;s immediate guilt and Lady Macbeth&rsquo;s delayed guilt are simply two paths to the same inevitable reckoning.
                  </p>

                  <p>
                    <Annotation note="Evaluative conclusion weighing both characters.">Ultimately, the comparison between Macbeth and Lady Macbeth&rsquo;s guilt reveals Shakespeare&rsquo;s profound understanding of human psychology.</Annotation>{" "}
                    Macbeth&rsquo;s immediate, uncontrollable guilt suggests a conscience that cannot be silenced; Lady Macbeth&rsquo;s delayed, catastrophic guilt suggests that suppression only intensifies suffering. Together, they demonstrate that guilt is not a choice but a consequence -- and that the further one tries to run from it, the more violently it returns. Lady Macbeth&rsquo;s fate is arguably the more tragic: she believed herself immune to guilt, and her destruction is therefore all the more complete.
                  </p>
                </div>
              </div>
            </Section>

            {/* ── Example: Inspector Goole vs Birling ─────────── */}
            <Section id="example-inspector" title="Example: Comparing Inspector Goole and Arthur Birling">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 mb-6">
                <p className="text-sm font-semibold text-[#1A5276]">Question:</p>
                <p className="mt-1 text-sm italic text-gray-700">
                  How does Priestley use the characters of Inspector Goole and Arthur Birling to present ideas about responsibility in &lsquo;An Inspector Calls&rsquo;?
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#2E86C1]/30 bg-white p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#2E86C1]">Model Comparative Response</p>

                <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                  <p>
                    <Annotation note="Comparative thesis linking both characters to the question focus.">Priestley presents Inspector Goole and Arthur Birling as ideological opposites, using their contrasting views on responsibility to dramatise the central conflict of the play.</Annotation>{" "}
                    Birling represents capitalist individualism and the refusal to accept social responsibility, while the Inspector embodies Priestley&rsquo;s own socialist conviction that &ldquo;we are members of one body.&rdquo; Through their confrontation, Priestley asks the audience to choose which vision of society they wish to endorse.
                  </p>

                  <p>
                    <Annotation note="First comparison: how each character is introduced.">Priestley carefully controls how each character is introduced to establish their contrasting worldviews from the outset.</Annotation>{" "}
                    Birling is introduced in a moment of complacent celebration, delivering a speech full of dramatic irony. His confident predictions that &ldquo;the Titanic -- she sails next week... unsinkable, absolutely unsinkable&rdquo; immediately undermine his authority with the 1945 audience, who know his certainties are catastrophically wrong. The repetition of &ldquo;unsinkable&rdquo; and the emphatic adverb &ldquo;absolutely&rdquo; reveal a man whose confidence is built on ignorance. <Annotation note="Smooth transition to the Inspector.">In stark contrast, the Inspector&rsquo;s entrance is described in the stage directions</Annotation> as creating &ldquo;an impression of massiveness, solidity and purposefulness.&rdquo; The tricolon of abstract nouns suggests an immovable moral authority. Where Birling is all bluster and performance, the Inspector is substance and conviction.
                  </p>

                  <p>
                    <Annotation note="Second comparison: their attitudes to responsibility.">The two characters&rsquo; attitudes to social responsibility are diametrically opposed, and Priestley uses their dialogue to dramatise this ideological divide.</Annotation>{" "}
                    Birling&rsquo;s philosophy is encapsulated in his assertion that &ldquo;a man has to mind his own business and look after himself and his own.&rdquo; The repetition of &ldquo;his own&rdquo; reveals a worldview built on self-interest, and the definitive tone of &ldquo;has to&rdquo; presents selfishness as a moral obligation. <Annotation note="Contrast with Inspector.">However, the Inspector directly challenges this worldview</Annotation> with his climactic speech: &ldquo;We don&rsquo;t live alone. We are members of one body. We are responsible for each other.&rdquo; The inclusive pronoun &ldquo;we&rdquo; -- repeated insistently -- enacts the very collectivism the Inspector advocates. The short, declarative sentences give his words the weight of moral absolutes, contrasting with Birling&rsquo;s rambling self-justifications.
                  </p>

                  <p>
                    <Annotation note="Third point: the characters' dramatic functions.">Furthermore, Priestley uses the two characters as structural devices to shape the audience&rsquo;s response.</Annotation>{" "}
                    Birling functions as a cautionary example: his dramatic irony makes the audience distrust him from the start, so when the Inspector dismantles his arguments, the audience is already primed to side with social responsibility. The Inspector, meanwhile, functions almost as an authorial mouthpiece. His omniscient knowledge of events -- knowing details he could not logically know -- gives him a supernatural authority that elevates his message beyond the merely political. <Annotation note="Links to historical context.">Writing in 1945 but setting the play in 1912,</Annotation> Priestley uses Birling to represent the pre-war complacency that led to two world wars, and the Inspector to represent the post-war desire for a fairer, more equal society.
                  </p>

                  <p>
                    <Annotation note="Evaluative conclusion.">Ultimately, Priestley&rsquo;s comparison between Birling and the Inspector is not merely a character study but a political argument.</Annotation>{" "}
                    Birling&rsquo;s refusal to accept responsibility -- even after the Inspector&rsquo;s revelations -- makes him a symbol of an outdated, selfish ideology that Priestley wants the audience to reject. The Inspector&rsquo;s warning that if people do not learn their lesson &ldquo;they will be taught it in fire and blood and anguish&rdquo; resonates with a 1945 audience who have lived through exactly that. Priestley&rsquo;s message is clear: the choice between Birling&rsquo;s individualism and the Inspector&rsquo;s collectivism is not just a dramatic device -- it is a moral imperative.
                  </p>
                </div>
              </div>
            </Section>

          </div>
        </div>
      </div>

    </>
  );
}
