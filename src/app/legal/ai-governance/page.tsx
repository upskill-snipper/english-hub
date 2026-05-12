/**
 * /legal/ai-governance — public AI governance + ethics audit.
 *
 * This page is an honest assessment of where The English Hub sits
 * against Qatar's PDPPL / Cybercrime Law / QCB / NCSA / MCIT
 * framework. It is NOT marketing copy. Audience: school DPOs,
 * parents in the Gulf market, and diligence reviewers.
 *
 * Content was drafted via a compliance-mapping research agent using
 * the user's "COMPLIANCE REFERENCE · v1.0 — Qatar's AI & Data
 * Governance Framework" as the source.
 *
 * If you're updating this page, the editorial bar is: be specific
 * about what we DO comply with and equally specific about what we
 * DON'T. No buzzwords. Every gap gets a remediation entry in the
 * roadmap table.
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Governance & Ethics',
  description:
    'How The English Hub maps to Qatar’s PDPPL, Cybercrime Law, NCSA AI Guidelines, MCIT Ethical AI Principles, and adjacent frameworks. Includes an honest gap list and remediation roadmap.',
}

export default function AIGovernancePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">AI Governance &amp; Ethics</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Last reviewed: 12 May 2026 · Next review: November 2026
      </p>

      <p className="mb-8">
        This page is an honest assessment of where The English Hub sits against the regulatory and
        voluntary frameworks that govern AI systems and personal data when they touch users in
        Qatar. We have written it for school Data Protection Officers, parents, and diligence
        reviewers. It is not marketing copy. Where we fall short, we say so, and we list the work we
        still owe you.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. What applies to us, and what doesn’t</h2>
        <p className="mb-3">
          The English Hub is operated by a UK-based company. We are <strong>not</strong> a
          QCB-licensed financial entity, <strong>not</strong> registered in the Qatar Financial
          Centre (QFC), <strong>not</strong> designated Critical National Infrastructure, and{' '}
          <strong>not</strong> a supplier to any Qatari government agency. That immediately narrows
          the binding surface area.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-2 pe-3">Instrument</th>
                <th className="text-start py-2 pe-3">Binding on us?</th>
                <th className="text-start py-2">Why</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:pe-3 [&_td]:align-top">
              <tr className="border-b border-border/40">
                <td>PDPPL (Law 13/2016)</td>
                <td>
                  <strong>Yes</strong>, for data of individuals in Qatar
                </td>
                <td>Extra-territorial reach via service offered to Qatar residents</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>Cybercrime Law (Law 14/2014)</td>
                <td>
                  <strong>Yes</strong>, for any content delivered into Qatar
                </td>
                <td>Content offences are jurisdictional, not licence-gated</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>QCB AI Guideline (Sept 2024)</td>
                <td>No — we hold no QCB licence</td>
                <td>Used voluntarily as a reference standard</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>NCSA AI Guidelines v1.0 (Feb 2024)</td>
                <td>No — voluntary</td>
                <td>Treated as expected practice; alignment in progress</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>MCIT Ethical AI Principles (2025)</td>
                <td>No — voluntary</td>
                <td>Adopted as our internal ethical baseline</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>NIA / NIMF / NDCP</td>
                <td>No — not CNI, not government</td>
                <td>Tracked but not implemented</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>Cloud Policy Framework</td>
                <td>No — not a licensed Qatari cloud provider</td>
                <td>Referenced when selecting subprocessors</td>
              </tr>
              <tr>
                <td>QFC Data Protection Regulations 2021</td>
                <td>No — not QFC-registered</td>
                <td>Separate jurisdiction</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The honest summary: PDPPL and the Cybercrime Law are the two instruments that genuinely
          bite. Everything else is voluntary best-practice that we either align to or are openly
          working toward.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. PDPPL — where we comply, where there are gaps
        </h2>
        <p className="mb-3">
          PDPPL is narrower than GDPR. It requires a lawful basis, transparency, purpose limitation,
          security, and explicit consent for sensitive data. It does <strong>not</strong> grant a
          GDPR-style Article 22 right against solely-automated decisions, but it does class
          children’s data as sensitive.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Where we currently comply</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            Personal data is stored in Supabase (EU region), encrypted at rest and in transit.
          </li>
          <li>
            We publish a privacy notice describing categories of data, purposes, and retention.
          </li>
          <li>We support data access and deletion requests via email (see section 10).</li>
          <li>We do not sell personal data and do not use it to train third-party AI models.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Where there are gaps we acknowledge</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            We have <strong>not yet appointed a named Data Controller representative</strong> for
            Qatar-resident users, and PDPPL’s consent and notification requirements for sensitive
            data (including children’s) are not yet supported by a structured workflow on our signup
            path.
          </li>
          <li>
            Subprocessors operate across multiple jurisdictions: Stripe (USA), PostHog (EU/US), GA4
            (USA), Vercel hosting (USA), Sentry (USA). PDPPL permits cross-border transfer with
            safeguards but does not have an adequacy list, so we currently rely on contractual
            safeguards rather than a formal transfer impact assessment per Qatar resident.
          </li>
          <li>
            We do not yet maintain a register of processing activities specific to Qatar users.
          </li>
        </ul>
        <p>
          <strong>Remediation (1):</strong> Build a Qatar-specific privacy notice supplement listing
          each subprocessor, its jurisdiction, and the contractual safeguard.
        </p>
        <p>
          <strong>Remediation (2):</strong> Implement a Record of Processing Activities (RoPA) and
          review quarterly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          3. Cybercrime Law — relevance for AI-generated content
        </h2>
        <p className="mb-3">
          Law 14/2014 criminalises, among other things, content that infringes social values, public
          order, or the reputation of others, and content that is false or misleading. Because our
          platform generates explanatory content, model answers, and feedback using LLMs, an
          autonomous agent producing such material is not a defence — the operator carries the risk.
        </p>
        <h3 className="text-lg font-semibold mb-2">What we do</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            All AI-generated student-facing study material is produced from a curated curriculum
            prompt set, not free-form user prompts to a raw model.
          </li>
          <li>We do not publish AI-generated content about identifiable individuals.</li>
          <li>We rate-limit and log all generation events for after-the-fact review.</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Gaps</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            We do <strong>not</strong> yet run a pre-publication content classifier specifically
            tuned to Qatari content offences.
          </li>
          <li>
            Student-submitted essays processed by AI may contain content that, if echoed back
            unfiltered, could constitute an offence on republication.
          </li>
        </ul>
        <p>
          <strong>Remediation (3):</strong> Add a Qatar-aware content safety layer (classifier +
          denylist) in front of any AI output rendered to a Qatar-resident user, and log decisions
          for audit.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. NCSA AI Guidelines — voluntary alignment status
        </h2>
        <p className="mb-3">
          NCSA v1.0 covers the AI lifecycle: design, data, development, deployment, monitoring,
          decommissioning. We treat it as a self-assessment checklist.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-2 pe-3">Lifecycle stage</th>
                <th className="text-start py-2">Status</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:pe-3 [&_td]:align-top">
              <tr className="border-b border-border/40">
                <td>Design (intended use, risk tier)</td>
                <td>Partial — informal, not documented</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>Data governance (sourcing, quality, bias)</td>
                <td>
                  Partial — curriculum content is sourced and reviewed; third-party training data is
                  out of our control
                </td>
              </tr>
              <tr className="border-b border-border/40">
                <td>Development (testing, validation)</td>
                <td>Partial — manual QA, no formal eval set</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>Deployment (human oversight, fallbacks)</td>
                <td>Yes — humans review flagged outputs</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>Monitoring (drift, incident response)</td>
                <td>Partial — Sentry catches errors but not model-quality drift</td>
              </tr>
              <tr>
                <td>Decommissioning</td>
                <td>Not documented</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Remediation (4):</strong> Publish an AI System Card for each AI feature (essay
          feedback, model-answer generation, vocabulary explainer), including intended use, known
          limits, and an evaluation summary.
        </p>
        <p>
          <strong>Remediation (5):</strong> Stand up a quarterly drift and quality review with
          documented criteria and a rollback plan.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. MCIT Ethical AI Principles — alignment status
        </h2>
        <p className="mb-3">Six principles. Honest scoring below.</p>
        <ol className="list-decimal ps-6 space-y-3 mb-4">
          <li>
            <strong>Do no harm.</strong> Output is for revision support, not high-stakes decisions.{' '}
            <em>Aligned.</em>
          </li>
          <li>
            <strong>Safety and reliability.</strong> We do not yet publish accuracy or failure-mode
            statistics. <em>Partial — see Remediation 4.</em>
          </li>
          <li>
            <strong>Fairness.</strong> We have not yet tested AI-generated feedback for systematic
            bias against students writing in non-British English, second-language learners
            (including Gulf Arabic L1 speakers), or specific socioeconomic vocabulary. <em>Gap.</em>
          </li>
          <li>
            <strong>Environment.</strong> We use third-party model APIs; energy footprint is not
            measured or disclosed. <em>Gap.</em>
          </li>
          <li>
            <strong>Privacy.</strong> Covered in section 2. <em>Partial.</em>
          </li>
          <li>
            <strong>Transparency.</strong> We do not consistently label AI-generated content
            in-product. <em>Gap — see Remediation 6.</em>
          </li>
        </ol>
        <p>
          <strong>Remediation (6):</strong> Add a visible &ldquo;Generated with AI — review before
          relying on&rdquo; label on every AI-produced essay-feedback panel, model answer, and
          auto-generated blog post.
        </p>
        <p>
          <strong>Remediation (7):</strong> Commission an annual fairness audit across
          English-language proficiency tiers and publish the summary.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. QCB / NIA / NDCP / Cloud Policy — when these apply to us
        </h2>
        <ul className="list-disc ps-6 space-y-3 mb-4">
          <li>
            <strong>QCB AI Guideline</strong> binds licensed financial entities. We are not one. We
            do, however, treat its model-risk-management framing as a useful reference, particularly
            its emphasis on documented model governance and explainability.
          </li>
          <li>
            <strong>NIA / NIMF / NDCP</strong> are mandatory for Critical National Infrastructure
            and government supply chains. The English Hub is neither. If a Qatari ministry or state
            school procures our service under a government contract, NIA controls become
            contractually relevant and we would need a gap assessment.
          </li>
          <li>
            <strong>Cloud Policy Framework</strong> binds licensed Qatari cloud providers. None of
            our hosting or storage is operated under a Qatari cloud licence. Our subprocessors are:
            Vercel (USA, edge), Cloudflare (global edge), Supabase (EU primary), Stripe (USA),
            PostHog (EU/US), GA4 (USA), Sentry (USA).
          </li>
        </ul>
        <p>
          <strong>Remediation (8):</strong> Maintain a published subprocessor list with
          jurisdiction, purpose, and the contractual transfer mechanism, updated on change.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Honest gaps + remediation roadmap</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-2 pe-2">#</th>
                <th className="text-start py-2 pe-3">Action</th>
                <th className="text-start py-2 pe-3">Owner</th>
                <th className="text-start py-2">Target</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-1.5 [&_td]:pe-3">
              <tr className="border-b border-border/30">
                <td>1</td>
                <td>Qatar-specific privacy notice supplement</td>
                <td>DPO</td>
                <td>Q3 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>2</td>
                <td>Record of Processing Activities (RoPA)</td>
                <td>DPO</td>
                <td>Q3 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>3</td>
                <td>Qatar-aware content safety layer for AI output</td>
                <td>Engineering</td>
                <td>Q4 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>4</td>
                <td>Publish AI System Cards per feature</td>
                <td>Product</td>
                <td>Q4 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>5</td>
                <td>Quarterly drift &amp; quality review with rollback plan</td>
                <td>Engineering</td>
                <td>Q3 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>6</td>
                <td>&ldquo;Generated with AI&rdquo; labels across the product</td>
                <td>Product</td>
                <td>Q3 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>7</td>
                <td>Annual fairness audit, summary published</td>
                <td>DPO + external</td>
                <td>Q1 2027</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>8</td>
                <td>Published subprocessor list with jurisdictions</td>
                <td>DPO</td>
                <td>Q3 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>9</td>
                <td>Parental-consent flow for under-18 signups</td>
                <td>Product</td>
                <td>Q3 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>10</td>
                <td>Cookie consent banner with granular categories</td>
                <td>Engineering</td>
                <td>Q2 2026</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>11</td>
                <td>DPIA for the AI content pipeline</td>
                <td>DPO</td>
                <td>Q4 2026</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Incident response runbook including notification timelines</td>
                <td>Engineering</td>
                <td>Q3 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Children’s data — special call-out</h2>
        <p className="mb-3">
          Our core audience is GCSE and IGCSE students, the vast majority of whom are aged 14–17 and
          therefore minors under both Qatari and most international frameworks. PDPPL classes
          children’s data as <strong>sensitive personal data</strong>, which requires explicit,
          informed consent — and for minors, that consent must come from a parent or legal guardian.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Where we currently fall short</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            Our signup flow asks for an email and password. It does <strong>not</strong> currently
            verify age or capture verifiable parental consent for users under 18.
          </li>
          <li>
            Marketing communications, in-app analytics, and AI-generated feedback all process the
            personal data of these minors.
          </li>
          <li>
            We do not currently offer a parent-facing dashboard for reviewing and revoking consent.
          </li>
        </ul>
        <p className="mb-3">
          This is the most material gap on the page. We are treating it as a priority.
        </p>
        <p>
          <strong>Remediation (9):</strong> Build a parental-consent flow gated on age at signup:
          under-18 users enter a guardian email; signup completes only after the guardian confirms
          consent via a separate verified link. Maintain a consent log.
        </p>
        <p>
          <strong>Remediation (10):</strong> Add a parent dashboard for consent review, data export,
          and account deletion, scoped to the child’s account.
        </p>
        <p>
          <strong>Remediation (11):</strong> Minimise behavioural analytics on confirmed under-18
          accounts; disable third-party analytics SDKs (GA4, PostHog session replay) by default for
          these users.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. AI use disclosure</h2>
        <p className="mb-3">
          We use third-party large language models (currently OpenAI and Anthropic APIs, subject to
          change) to generate:
        </p>
        <ul className="list-disc ps-6 space-y-1 mb-4">
          <li>Essay feedback and model annotations</li>
          <li>Practice questions and model answers</li>
          <li>Vocabulary explanations and grammar walkthroughs</li>
          <li>Auto-generated blog content (clearly labelled as such)</li>
        </ul>
        <p className="mb-3">
          We do <strong>not</strong>:
        </p>
        <ul className="list-disc ps-6 space-y-1 mb-4">
          <li>
            Use AI to make decisions about a student’s progression, eligibility, or grading that
            have legal or similarly significant effects
          </li>
          <li>Send personal data beyond the student’s submitted text to model providers</li>
          <li>
            Permit model providers to retain prompts for training (we use no-retention endpoints
            where contractually available)
          </li>
        </ul>
        <p>
          Where AI is involved, we are working to label it in-product (Remediation 6). The
          underlying model name and the prompt template version for any generated artefact can be
          requested via the contact below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">11. Internal audit findings (May 2026)</h2>
        <p className="mb-3">
          This page is paired with an internal compliance audit completed 12 May 2026. The findings
          below are reproduced verbatim — these are real gaps we have identified in our own code,
          not theoretical risks. We are publishing them rather than hiding them because the
          framework rewards transparency and a candid roadmap.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">A. Signup-flow consent gaps</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            The registration page uses an implicit &ldquo;By creating an account, you agree
            to&hellip;&rdquo; link rather than an explicit consent checkbox. PDPPL Art. 4 requires
            affirmative action, and Art. 17 requires a <strong>separate</strong> explicit consent
            for cross-border transfer that the current form does not collect.
          </li>
          <li>The contact form has no consent checkbox and no in-line privacy-policy link.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          B. Children&rsquo;s data — material legal risk
        </h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            16- and 17-year-olds bypass guardian consent entirely and self-onboard. PDPPL treats{' '}
            <strong>all under-18s</strong> as minors requiring guardian consent. This is the single
            biggest legal exposure for a GCSE/IGCSE platform marketed in Qatar.
          </li>
          <li>
            For 13&ndash;15 the flow collects a guardian email and fires a <em>non-blocking</em>
            parent-notify. Signup completes regardless of whether the guardian ever responds. This
            is &ldquo;notice&rdquo; rather than &ldquo;verifiable parental consent&rdquo;.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">C. Architecture vs. notice mismatch</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>
            The Qatar Privacy Notice (<code>/legal/privacy-qatar</code>) states that data is
            transferred to the UK under an IDTA. The actual data path is
            Supabase&nbsp;EU&nbsp;&rarr;&nbsp;Anthropic&nbsp;US&nbsp;&rarr;&nbsp;Sentry&nbsp;EU&nbsp;&rarr;&nbsp;GA4&nbsp;US&nbsp;&rarr;&nbsp;Rewardful&nbsp;US.
            Anthropic, GA4, and Rewardful currently have{' '}
            <strong>no documented Qatar-specific transfer mechanism</strong>.
          </li>
          <li>
            Our Supabase region is documented inconsistently across internal registers (EU Frankfurt
            vs UK). The single source of truth needs reconciliation.
          </li>
          <li>
            Rewardful&rsquo;s third-party script is unconditionally CSP-allow-listed but is not
            gated by the cookie-consent flag that protects GA4 and PostHog.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          D. Right of human review — policy without UI
        </h3>
        <p className="mb-4">
          Our policy text promises a right to request human review of AI feedback. That button does
          not yet exist on the student-facing feedback component. A teacher-override surface exists
          for school accounts; an equivalent self-serve route for direct-to-consumer students does
          not.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">E. DPIA status</h3>
        <p className="mb-4">
          Our internal DPIA for AI features is at <strong>draft v0.9</strong> with author and DPO
          placeholders unfilled. Finalising it sits in Remediation 11.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">F. AI labelling coverage</h3>
        <p className="mb-4">
          The essay-feedback panel and <code>/legal/ai-transparency</code> page do disclose AI use.
          Blog content&mdash;which is currently part-generated by our agent pipeline&mdash;is
          <strong> not</strong> flagged as AI-assisted on the public page. Remediation 6 covers
          this.
        </p>

        <p className="text-muted-foreground text-sm mt-6">
          We commit to refreshing this section on every material code change to the signup, consent,
          or AI surfaces. If you are reading this on a date more than three months from the
          &ldquo;Last reviewed&rdquo; stamp at the top of the page, please email us to ask whether
          the audit has been refreshed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">10. Contact for data subject requests</h2>
        <p className="mb-3">
          If you are a student, parent, or school in Qatar and want to exercise any of the rights
          available under PDPPL (access, correction, deletion, withdrawal of consent), or you want
          to raise a concern about an AI-generated output, contact us at:
        </p>
        <p className="mb-3">
          <strong>privacy@theenglishhub.app</strong>
        </p>
        <p className="mb-3">
          We will acknowledge within 5 working days and respond substantively within 30 days. If you
          are not satisfied with our response, you may escalate to the National Cyber Security
          Agency of Qatar (NCSA) as the relevant supervisory authority for PDPPL.
        </p>
        <p className="text-muted-foreground text-sm mt-6">
          This page is reviewed at least every six months and after any material change to our AI
          features, subprocessors, or governance posture. The next scheduled review is November
          2026.
        </p>
      </section>
    </>
  )
}
