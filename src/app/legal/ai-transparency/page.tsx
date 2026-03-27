import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Transparency",
  description:
    "How our AI works at The English Hub — what it does, its limitations, and your rights.",
};

export default function AITransparencyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">
        How Our AI Works
      </h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Last updated: 22 March 2026
      </p>

      <p className="mb-8">
        We use artificial intelligence (AI) to help you improve your English
        writing. This page explains exactly what it does, how it works, what it
        can and cannot do, and what your rights are. We have written it in plain
        English because you deserve to understand any technology that interacts
        with your work.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. What Does Our AI Actually Do?
        </h2>
        <p className="mb-3">
          When you submit an essay on The English Hub, our AI:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reads and analyses your essay</strong> from start to finish
          </li>
          <li>
            <strong>Gives you feedback</strong> on grammar, structure,
            argumentation, and vocabulary
          </li>
          <li>
            <strong>Suggests improvements</strong> — specific things you could
            change to make your writing stronger
          </li>
          <li>
            <strong>Gives you a practice score</strong> — an estimate to help you
            track progress. It is <strong>not</strong> an official grade and
            should never be treated as one.
          </li>
        </ul>
        <p className="mt-3">
          Think of it like a spell-checker that has been upgraded significantly.
          It can spot patterns and offer suggestions, but it is a tool to help
          you learn — not a replacement for your teacher.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. How Does It Work?
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Training:</strong> The AI was trained on large collections of
            high-quality English writing. It learned patterns — what strong
            grammar looks like, how good arguments are structured, what effective
            vocabulary choices look like.
          </li>
          <li>
            <strong>Natural Language Processing (NLP):</strong> When you submit
            your essay, the AI uses NLP to break down your writing into parts it
            can analyse.
          </li>
          <li>
            <strong>Comparison against criteria:</strong> The AI compares your
            essay against marking criteria (such as those used in GCSE or A-Level
            English).
          </li>
          <li>
            <strong>Generating feedback:</strong> Based on that comparison, it
            produces feedback and suggestions tailored to your specific essay.
          </li>
        </ol>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold">Important:</p>
          <p>
            We do <strong>not</strong> use your essays to train or improve the AI
            model. Your writing is processed to give you feedback, and that is
            all.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          3. What the AI Cannot Do
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>It cannot replace a teacher&apos;s judgement.</strong> A
            teacher understands you, your progress, and the nuances of your work
            in ways AI simply cannot.
          </li>
          <li>
            <strong>It cannot guarantee your exam results.</strong> Practice
            scores are estimates. Real exams involve human markers who may see
            things differently.
          </li>
          <li>
            <strong>It may not always be accurate.</strong> AI makes mistakes. It
            might misread your tone, miss a clever stylistic choice, or flag
            something correct as wrong.
          </li>
          <li>
            <strong>
              It cannot understand context the way a human can.
            </strong>{" "}
            Irony, personal references, or deliberate rule-breaking will likely
            not be picked up.
          </li>
        </ul>
        <p className="mt-3">
          If something in the AI&apos;s feedback does not feel right, trust your
          instincts and ask a teacher.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
        <p className="mb-3">
          Under UK data protection law (UK GDPR) and the Data Use and Access Act
          2025, you have clear rights when AI processes your work:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Right to Human Review</h3>
            <p className="text-sm">
              You can request that a real person reviews any feedback or score the
              AI has given you. No reason needed.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">
              Right to Contest the AI&apos;s Assessment
            </h3>
            <p className="text-sm">
              If you disagree with what the AI said, you have the right to
              challenge it. A qualified person will look at it.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Right to an Explanation</h3>
            <p className="text-sm">
              You can ask us to explain why the AI gave you specific feedback. We
              will provide a clear, understandable answer.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Right to Opt Out</h3>
            <p className="text-sm">
              You can stop your essays from being processed by AI entirely. Go to{" "}
              <strong>Settings &gt; Privacy &gt; AI Processing</strong> or
              contact us directly.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm">
          If you are under 18, a parent or guardian can also exercise these rights
          on your behalf.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. How to Request a Human Review
        </h2>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>From your essay:</strong> Click the{" "}
            <strong>&quot;Request Human Review&quot;</strong> button at the bottom
            of every AI feedback report
          </li>
          <li>
            <strong>By email:</strong> Send us an email with the subject line
            &quot;Human Review Request&quot; and include the essay title or
            reference number
          </li>
          <li>
            <strong>Through your account:</strong> Go to{" "}
            <strong>
              Settings &gt; My Essays &gt; [select essay] &gt; Request Review
            </strong>
          </li>
        </ol>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="font-semibold mb-2">What happens next:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              We will acknowledge your request within{" "}
              <strong>2 working days</strong>
            </li>
            <li>
              A qualified English teacher or assessor will review your essay and
              the AI&apos;s feedback
            </li>
            <li>
              You will receive the human review within{" "}
              <strong>10 working days</strong>
            </li>
            <li>
              The human review is final and overrides the AI&apos;s assessment
            </li>
          </ul>
          <p className="mt-2 font-semibold">
            This service is provided at no extra cost. It is your right, not a
            favour.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. How We Keep Improving
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Feedback button:</strong> Every report includes a &quot;Was
            this helpful?&quot; option. Even a quick thumbs up or down helps us.
          </li>
          <li>
            <strong>Report an issue:</strong> If the AI gives clearly wrong,
            biased, or unhelpful feedback, hit the &quot;Report Issue&quot;
            button. Our team reviews every report.
          </li>
          <li>
            <strong>Regular audits:</strong> We test the AI for accuracy,
            fairness, and bias, including whether it performs equally well for
            students of different backgrounds and writing styles.
          </li>
          <li>
            <strong>Updates:</strong> When we make significant changes, we update
            this page and notify you.
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          7. Data Protection — What Happens to Your Essays
        </h2>

        <h3 className="text-lg font-semibold mb-2">What We Collect</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>The text of your essay when you submit it for AI feedback</li>
          <li>The AI-generated feedback and practice score</li>
          <li>
            Any feedback you give us about the AI&apos;s performance (e.g.
            thumbs up/down)
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">What We Do NOT Do</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            We do <strong>not</strong> use your essays to train or improve the AI
            model
          </li>
          <li>
            We do <strong>not</strong> sell or share your essays with third
            parties
          </li>
          <li>
            We do <strong>not</strong> use your essays for any purpose other than
            giving you feedback
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">How Long We Keep It</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            Essays and feedback are kept for as long as you have an active
            account
          </li>
          <li>
            If you delete your account, everything is permanently deleted within{" "}
            <strong>30 days</strong>
          </li>
          <li>You can delete individual essays at any time</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          Children&apos;s Data (ICO Children&apos;s Code)
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            AI features are designed to support your learning, not exploit your
            data or attention
          </li>
          <li>We only collect what we need to give you feedback</li>
          <li>
            Your essays and feedback are private by default — nothing is shared
            publicly
          </li>
          <li>
            Parents and guardians can request access to their child&apos;s data
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Questions?</h2>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="mb-2">
            If anything on this page is unclear, or if you have questions about
            how the AI works, contact us:
          </p>
          <ul className="space-y-1">
            <li>In-app: Use the &quot;Help&quot; button</li>
          </ul>
          <p className="mt-2">
            We will respond within <strong>5 working days</strong>. For data
            protection questions, we will respond within{" "}
            <strong>30 days</strong> as required by law.
          </p>
        </div>
      </section>

      <p className="text-sm text-muted-foreground italic">
        This page is reviewed and updated at least every 6 months.
      </p>
    </>
  );
}
