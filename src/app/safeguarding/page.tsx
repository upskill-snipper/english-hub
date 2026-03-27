import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safeguarding Policy",
  description:
    "Our safeguarding policy sets out how The English Hub protects children and young people aged 14-18 using our online education platform. UK-compliant and reviewed annually.",
  alternates: { canonical: "https://theenglishhub.app/safeguarding" },
  openGraph: {
    title: "Safeguarding Policy — The English Hub",
    description:
      "How The English Hub protects children and young people aged 14-18 using our online education platform. UK-compliant and reviewed annually.",
  },
};

// ─── Section wrapper ────────────────────────────────────────────────────

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold text-primary">
        <span className="text-accent">{number}.</span> {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

// ─── Table of contents ──────────────────────────────────────────────────

const SECTIONS = [
  { id: "commitment", number: "1", title: "Commitment Statement" },
  { id: "scope", number: "2", title: "Scope" },
  { id: "dsl", number: "3", title: "Designated Safeguarding Lead" },
  { id: "principles", number: "4", title: "Key Principles" },
  { id: "online-safety", number: "5", title: "Online Safety Measures" },
  { id: "reporting", number: "6", title: "Reporting Procedures" },
  { id: "data-protection", number: "7", title: "Data Protection in Safeguarding" },
  { id: "training", number: "8", title: "Staff and Contractor Training" },
  { id: "review", number: "9", title: "Review Schedule" },
  { id: "external-contacts", number: "10", title: "External Contacts" },
];

// ─── Page component ─────────────────────────────────────────────────────

export default function SafeguardingPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Back link */}
      <div className="mb-2">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Header */}
      <h1 className="text-2xl font-semibold text-primary sm:text-3xl">
        Safeguarding Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Upskill Energy Limited, trading as{" "}
        <strong className="text-primary">The English Hub</strong>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        Last updated: March 2026 &middot; Next review: March 2027
      </p>

      {/* Quick-action banner */}
      <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-5">
        <p className="text-sm font-semibold text-primary">
          Need to report a concern right now?
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          If you are worried about a child or young person, do not wait.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/safeguarding/report"
            className="btn-primary text-sm"
          >
            Report a Concern
          </Link>
          <a
            href="mailto:safeguarding@theenglishhub.app"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            Email Safeguarding Lead
          </a>
        </div>
      </div>

      {/* Table of contents */}
      <nav
        aria-label="Policy sections"
        className="mt-8 rounded-lg border border-border bg-card p-5"
      >
        <h2 className="text-sm font-semibold text-primary">Contents</h2>
        <ol className="mt-3 columns-1 gap-x-6 space-y-1.5 text-sm sm:columns-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-accent hover:text-accent/80 hover:underline transition-colors"
              >
                {s.number}. {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Policy sections */}
      <div className="mt-10 space-y-10">
        {/* 1. Commitment Statement */}
        <PolicySection id="commitment" number="1" title="Commitment Statement">
          <p>
            The English Hub is committed to safeguarding and promoting the
            welfare of all children and young people who use our platform. We
            recognise that everyone has a responsibility to safeguard children,
            and we take this responsibility seriously.
          </p>
          <p>
            We are committed to creating a safe online learning environment where
            young people aged 14&ndash;18 can develop their English language
            skills without risk of harm, abuse, or exploitation. We will always
            act in the best interests of the child and take all reasonable steps
            to ensure their safety and wellbeing.
          </p>
          <p>
            This policy is underpinned by the principles set out in the{" "}
            <em>Children Act 1989</em>, the <em>Children Act 2004</em>,{" "}
            <em>Working Together to Safeguard Children (2023)</em>, and the{" "}
            <em>Keeping Children Safe in Education (2024)</em> statutory
            guidance.
          </p>
        </PolicySection>

        {/* 2. Scope */}
        <PolicySection id="scope" number="2" title="Scope">
          <p>This policy applies to:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              All users under the age of 18 who access The English Hub platform
            </li>
            <li>
              All staff, contractors, freelancers, and volunteers engaged by
              Upskill Energy Limited in connection with the platform
            </li>
            <li>
              All AI-generated content, learning materials, and interactive
              features provided through the platform
            </li>
            <li>
              Parents, guardians, and carers of young people using the platform
            </li>
          </ul>
          <p>
            The English Hub is an online education platform designed for learners
            aged 14&ndash;18. As such, safeguarding considerations are embedded
            into every aspect of our product design, content creation, and
            operational processes.
          </p>
        </PolicySection>

        {/* 3. Designated Safeguarding Lead */}
        <PolicySection
          id="dsl"
          number="3"
          title="Designated Safeguarding Lead"
        >
          <p>
            Upskill Energy Limited has appointed a Designated Safeguarding Lead
            (DSL) who holds overall responsibility for safeguarding and child
            protection across the platform. The DSL is trained to the
            appropriate level and undertakes refresher training at least every
            two years.
          </p>
          <div className="rounded-lg border border-border bg-muted p-4">
            <p className="text-sm font-semibold text-primary">
              Designated Safeguarding Lead
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:safeguarding@theenglishhub.app"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding@theenglishhub.app
              </a>
            </p>
            <p className="mt-1 text-xs">
              The DSL will acknowledge all safeguarding concerns within 24 hours
              and ensure appropriate action is taken without delay.
            </p>
          </div>
          <p>
            The DSL is responsible for referring cases of suspected abuse or
            allegations to the relevant local authority children&apos;s social
            care team, liaising with the police and other agencies where
            appropriate, and maintaining accurate and secure safeguarding
            records.
          </p>
        </PolicySection>

        {/* 4. Key Principles */}
        <PolicySection id="principles" number="4" title="Key Principles">
          <p>
            Our approach to safeguarding is guided by the following core
            principles:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong className="text-primary">
                Best interests of the child:
              </strong>{" "}
              The welfare of the child is paramount. All decisions and actions
              will prioritise the safety and wellbeing of the young person above
              all other considerations.
            </li>
            <li>
              <strong className="text-primary">Proportionate responses:</strong>{" "}
              We will respond to safeguarding concerns proportionately, taking
              into account the nature and severity of the concern, the age and
              vulnerability of the child, and relevant context.
            </li>
            <li>
              <strong className="text-primary">
                Working with parents and guardians:
              </strong>{" "}
              We will work in partnership with parents, guardians, and carers to
              support the safety and wellbeing of young people, unless doing so
              would place the child at further risk of harm.
            </li>
            <li>
              <strong className="text-primary">
                Listening to children and young people:
              </strong>{" "}
              We will take the views, wishes, and feelings of young people
              seriously, and ensure they are listened to and involved in
              decisions that affect them.
            </li>
            <li>
              <strong className="text-primary">
                Zero tolerance of abuse:
              </strong>{" "}
              We operate a zero-tolerance approach to any form of abuse,
              exploitation, or harmful behaviour directed at children and young
              people.
            </li>
            <li>
              <strong className="text-primary">
                Transparency and accountability:
              </strong>{" "}
              We are open about our safeguarding practices and will hold
              ourselves accountable for maintaining the highest standards of
              child protection.
            </li>
          </ul>
        </PolicySection>

        {/* 5. Online Safety Measures */}
        <PolicySection
          id="online-safety"
          number="5"
          title="Online Safety Measures"
        >
          <p>
            As a digital education platform serving young people, we implement
            robust online safety measures across every layer of the product:
          </p>

          <h3 className="mt-4 text-sm font-semibold text-primary">
            5.1 AI Content Filtering
          </h3>
          <p>
            All AI-generated content on the platform is subject to automated
            filtering designed to detect and prevent the presentation of harmful,
            inappropriate, or age-inappropriate material. Our filtering systems
            are regularly reviewed and updated to address emerging risks.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-primary">
            5.2 No Direct Messaging
          </h3>
          <p>
            The English Hub does not provide any direct messaging, chat, or
            private communication features between users. This design decision
            eliminates the risk of grooming, bullying, or other harmful
            interactions between users on the platform.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-primary">
            5.3 No Sharing of Personal Information
          </h3>
          <p>
            The platform does not permit users to share personal information
            (such as full names, addresses, phone numbers, photographs, or
            social media handles) with other users. User profiles are not
            publicly visible.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-primary">
            5.4 Parental Consent for Under-16s
          </h3>
          <p>
            In compliance with the UK General Data Protection Regulation (UK
            GDPR) and the Age Appropriate Design Code, we require verifiable
            parental or guardian consent before processing the personal data of
            any user under the age of 16. Consent mechanisms are built into our
            registration process.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-primary">
            5.5 Age-Appropriate Design (ICO Code Compliance)
          </h3>
          <p>
            The English Hub is designed in accordance with the ICO&apos;s Age
            Appropriate Design Code (Children&apos;s Code). This includes:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              Privacy settings configured to the highest level by default
            </li>
            <li>
              Data collection minimised to only what is necessary for the
              educational service
            </li>
            <li>
              No profiling of children for marketing or commercial purposes
            </li>
            <li>
              No nudge techniques or design patterns that encourage users to
              weaken their privacy protections
            </li>
            <li>
              Clear, age-appropriate privacy information provided to young users
            </li>
            <li>
              Data Protection Impact Assessments (DPIAs) conducted for all
              features and services likely to be accessed by children
            </li>
          </ul>
        </PolicySection>

        {/* 6. Reporting Procedures */}
        <PolicySection id="reporting" number="6" title="Reporting Procedures">
          <p>
            If you have a safeguarding concern about a child or young person
            using The English Hub, you should report it immediately using one of
            the following methods:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Online reporting form:</strong>{" "}
              <Link
                href="/safeguarding/report"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                Submit a report
              </Link>{" "}
              &mdash; available 24/7, anonymous reporting accepted
            </li>
            <li>
              <strong>Email the DSL:</strong>{" "}
              <a
                href="mailto:safeguarding@theenglishhub.app"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding@theenglishhub.app
              </a>
            </li>
          </ul>

          <p className="mt-3">When reporting a concern, please provide:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              A description of the concern, including what you have seen, heard,
              or been told
            </li>
            <li>The date and time of the incident (if applicable)</li>
            <li>
              Any relevant usernames or identifying information (if known)
            </li>
            <li>Your contact details (optional but helpful for follow-up)</li>
          </ul>

          <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-semibold text-primary">
              What happens when you report?
            </p>
            <ol className="mt-2 ml-4 list-decimal space-y-1">
              <li>
                Your report is received securely and assigned a reference number
              </li>
              <li>
                The DSL reviews the report within 24 hours
              </li>
              <li>
                The DSL determines the appropriate course of action, which may
                include contacting the young person, their parent/guardian, or
                external agencies
              </li>
              <li>
                Where there is an immediate risk of significant harm, the DSL
                will contact the police and/or local authority children&apos;s
                services without delay
              </li>
              <li>
                A record of the concern and actions taken is securely stored
              </li>
            </ol>
          </div>

          <p className="mt-3">
            <strong>If a child is in immediate danger,</strong> call{" "}
            <strong>999</strong> without delay. Do not wait to submit a report
            through the platform.
          </p>
        </PolicySection>

        {/* 7. Data Protection in Safeguarding */}
        <PolicySection
          id="data-protection"
          number="7"
          title="Data Protection in Safeguarding"
        >
          <p>
            Safeguarding data is handled with the highest level of care and in
            compliance with the UK GDPR and Data Protection Act 2018:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong className="text-primary">Lawful basis:</strong>{" "}
              Safeguarding data is processed under Article 6(1)(d) (vital
              interests) and Article 6(1)(e) (public task) of the UK GDPR, and
              Article 9(2)(c) (vital interests) for special category data.
            </li>
            <li>
              <strong className="text-primary">Access controls:</strong> Only
              the DSL and authorised personnel with a legitimate need have
              access to safeguarding records. Access is strictly limited on a
              need-to-know basis.
            </li>
            <li>
              <strong className="text-primary">Secure storage:</strong>{" "}
              Safeguarding records are stored securely with encryption at rest
              and in transit. Records are kept separately from general user data.
            </li>
            <li>
              <strong className="text-primary">Retention:</strong> Safeguarding
              records are retained in accordance with statutory guidance and
              relevant retention schedules. Records relating to child protection
              concerns are retained until the individual&apos;s 25th birthday,
              or for 6 years from the date of the last entry (whichever is
              longer).
            </li>
            <li>
              <strong className="text-primary">Information sharing:</strong>{" "}
              Safeguarding information will be shared with external agencies
              (such as local authority children&apos;s services, the police, or
              the NSPCC) where necessary to protect a child. Data protection
              legislation is not a barrier to sharing information where failure
              to do so would place a child at risk.
            </li>
          </ul>
        </PolicySection>

        {/* 8. Staff and Contractor Training */}
        <PolicySection
          id="training"
          number="8"
          title="Staff and Contractor Training"
        >
          <p>
            All individuals working on behalf of Upskill Energy Limited who may
            come into contact with safeguarding matters are required to:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              Complete safeguarding awareness training upon commencement of their
              role
            </li>
            <li>
              Undertake refresher training at least annually, or more frequently
              where required
            </li>
            <li>
              Read and confirm understanding of this safeguarding policy
            </li>
            <li>
              Understand how to recognise signs of abuse, neglect, and
              exploitation
            </li>
            <li>
              Know how to report safeguarding concerns through the correct
              channels
            </li>
          </ul>
          <p>
            The DSL receives enhanced safeguarding training, including
            inter-agency working, in line with{" "}
            <em>Working Together to Safeguard Children</em> and{" "}
            <em>Keeping Children Safe in Education</em> requirements.
          </p>
          <p>
            Records of all safeguarding training are maintained centrally and
            reviewed regularly to ensure compliance.
          </p>
        </PolicySection>

        {/* 9. Review Schedule */}
        <PolicySection id="review" number="9" title="Review Schedule">
          <p>
            This safeguarding policy is reviewed and updated at least annually
            by the Designated Safeguarding Lead, or sooner if:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>There are changes to relevant legislation or statutory guidance</li>
            <li>A safeguarding incident identifies areas for improvement</li>
            <li>
              New features or services are introduced that affect the safety of
              young users
            </li>
            <li>
              Feedback from users, parents, or external agencies indicates a
              need for change
            </li>
          </ul>
          <p>
            Each review is documented, and the updated policy is published on
            the platform and communicated to all staff and contractors.
          </p>
          <div className="rounded-lg border border-border bg-muted p-4">
            <div className="flex items-center justify-between text-sm">
              <span>
                <strong className="text-primary">Current version:</strong> March
                2026
              </span>
              <span>
                <strong className="text-primary">Next review due:</strong> March
                2027
              </span>
            </div>
          </div>
        </PolicySection>

        {/* 10. External Contacts */}
        <PolicySection
          id="external-contacts"
          number="10"
          title="External Contacts"
        >
          <p>
            If you need immediate help or wish to report a concern to an
            external organisation, the following services are available:
          </p>
          <div className="mt-2 space-y-3">
            {/* Childline */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">Childline</p>
              <p className="mt-1 text-xs">
                Free, confidential helpline for children and young people under
                19.
              </p>
              <p className="mt-2">
                <a
                  href="tel:08001111"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  0800 1111
                </a>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                <a
                  href="https://www.childline.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  www.childline.org.uk
                </a>
              </p>
            </div>

            {/* NSPCC */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                NSPCC Helpline
              </p>
              <p className="mt-1 text-xs">
                For adults concerned about the welfare of a child.
              </p>
              <p className="mt-2">
                <a
                  href="tel:08088005000"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  0808 800 5000
                </a>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                <a
                  href="https://www.nspcc.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  www.nspcc.org.uk
                </a>
              </p>
            </div>

            {/* CEOP */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                CEOP (Child Exploitation and Online Protection)
              </p>
              <p className="mt-1 text-xs">
                Report online sexual abuse or exploitation of children.
              </p>
              <p className="mt-2">
                <a
                  href="https://www.ceop.police.uk/ceop-reporting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  Report to CEOP online
                </a>
              </p>
            </div>

            {/* Local Authority */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                Local Authority Children&apos;s Services
              </p>
              <p className="mt-1 text-xs">
                Contact your local council&apos;s children&apos;s services team
                to report concerns about a child in your area. You can find your
                local authority via{" "}
                <a
                  href="https://www.gov.uk/report-child-abuse-to-local-council"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  GOV.UK
                </a>
                .
              </p>
            </div>

            {/* Emergency */}
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <p className="text-sm font-semibold text-primary">
                Emergency Services
              </p>
              <p className="mt-1 text-xs">
                If a child is in immediate danger, call{" "}
                <a
                  href="tel:999"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  999
                </a>{" "}
                without delay.
              </p>
            </div>
          </div>
        </PolicySection>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-xs text-muted-foreground">
          This policy is owned and maintained by Upskill Energy Limited, trading
          as The English Hub. Registered in England and Wales.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/safeguarding/report"
            className="btn-primary text-sm"
          >
            Report a Concern
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
