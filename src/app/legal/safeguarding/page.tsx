import { Metadata } from 'next'

import { STRINGS } from './content'
import { headers } from 'next/headers'
export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description:
    'Safeguarding Policy for The English Hub, outlining our commitment to protecting children and young people.',
}

export default async function SafeguardingPolicyPage() {
  const _hdrs = await headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{tr(`Safeguarding Policy`)}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>{tr(`The English Hub`)}</strong> — operated by Upskill Energy Limited
        <br />
        Effective Date: 22 March 2026 | Review Date: 22 March 2027 | Version 1.0
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Statement of Commitment</h2>
        <p className="mb-3">
          The English Hub is fully committed to safeguarding and promoting the welfare of all
          children and young people who use our platform. We recognise that the welfare of the child
          is paramount and that all children, regardless of age, disability, gender reassignment,
          race, religion or belief, sex, or sexual orientation, have an equal right to protection
          from all types of harm or abuse.
        </p>
        <p>{tr(`We are committed to:`)}</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Creating a safe online learning environment for users aged 14 to 18</li>
          <li>Acting in the best interests of the child at all times</li>
          <li>
            Taking all reasonable steps to protect children from harm, discrimination, and degrading
            treatment
          </li>
          <li>Recruiting staff safely and ensuring all necessary checks are made</li>
          <li>Training all staff in safeguarding at a level appropriate to their role</li>
          <li>
            Responding to any allegations of abuse or misconduct promptly and in accordance with
            statutory guidance
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Scope</h2>
        <p>
          This policy covers all users of The English Hub (particularly those under 18), all staff,
          contractors, and third-party service providers, all interactions through the platform and
          support channels, and operations in both the United Kingdom and Qatar.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Legal Framework</h2>
        <p className="mb-3">
          This policy is informed by the following legislation and statutory guidance:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{tr(`Children Act 1989 and Children Act 2004`)}</li>
          <li>Keeping Children Safe in Education (KCSIE) — adopted as best practice</li>
          <li>{tr(`Working Together to Safeguard Children 2023`)}</li>
          <li>{tr(`UK GDPR and Data Protection Act 2018`)}</li>
          <li>{tr(`ICO Age Appropriate Design Code (Children&apos;s Code)`)}</li>
          <li>{tr(`Online Safety Act 2023`)}</li>
          <li>{tr(`Sexual Offences Act 2003`)}</li>
          <li>Counter-Terrorism and Security Act 2015 (Prevent duty)</li>
          <li>{tr(`Qatar Law No. 25 of 2001 on the Protection of Children`)}</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Designated Safeguarding Lead (DSL)</h2>
        <p className="mb-3">
          Upskill Energy Limited appoints a Designated Safeguarding Lead who is a member of the
          senior leadership team. The DSL is responsible for:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Lead responsibility for safeguarding across the platform and all operations</li>
          <li>Managing referrals to local authority, police, and Channel programme</li>
          <li>Acting as the central point of contact for all safeguarding concerns</li>
          <li>{tr(`Maintaining safeguarding records securely`)}</li>
          <li>{tr(`Ensuring all staff receive appropriate training`)}</li>
          <li>Reporting to the board on safeguarding matters at least annually</li>
        </ul>
        <p className="mt-3 text-sm">
          The DSL and Deputy DSL must complete Level 3 safeguarding training upon appointment and
          update it at least every two years.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Staff Recruitment and Vetting</h2>
        <p className="mb-3">
          All staff who may have access to user data or interact with users under 18 must undergo
          appropriate DBS checks:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">Role Category</th>
                <th className="text-left px-4 py-2 border-b font-semibold">DBS Check Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`DSL and Deputy DSL`)}</td>
                <td className="px-4 py-2 border-b">Enhanced + Barred List Check</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Customer support staff (user-facing)</td>
                <td className="px-4 py-2 border-b">Enhanced + Barred List Check</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Content developers and moderators</td>
                <td className="px-4 py-2 border-b">Enhanced</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Software engineers with user data access</td>
                <td className="px-4 py-2 border-b">Standard</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Administrative staff (no user contact)</td>
                <td className="px-4 py-2 border-b">Basic</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm">
          DBS checks are renewed every three years. Safer recruitment practices include two
          professional references, gap-in-employment checks, and trained interview panels.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. Recognising Signs of Abuse and Neglect</h2>
        <p className="mb-3">
          All staff must be able to recognise potential signs of abuse. In the online context,
          indicators may include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{tr(`Physical abuse:`)}</strong> Disclosures through support channels,
            references to injuries in submitted content
          </li>
          <li>
            <strong>{tr(`Emotional abuse:`)}</strong> Expressions of low self-worth, self-harm
            ideation, or withdrawal from engagement
          </li>
          <li>
            <strong>{tr(`Sexual abuse:`)}</strong> Disclosures of abuse, inappropriate content in
            submitted work, references to being asked to share images
          </li>
          <li>
            <strong>Neglect:</strong> Expressions of unmet basic needs, persistent inability to
            access learning
          </li>
          <li>
            <strong>{tr(`Online risks:`)}</strong> Cyberbullying, grooming, radicalisation,
            self-harm, harmful content exposure
          </li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Reporting Procedures</h2>
        <p className="mb-3 font-semibold">{tr(`Guiding Principles:`)}</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>The welfare of the child is paramount — report any concern to the DSL</li>
          <li>{tr(`Never investigate safeguarding concerns yourself`)}</li>
          <li>{tr(`Record accurately using the individual&apos;s own words`)}</li>
          <li>Maintain confidentiality on a need-to-know basis</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{tr(`External Reporting (UK)`)}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Local Authority Children&apos;s Social Care (contact relevant MASH)</li>
          <li>{tr(`Police (999) for immediate danger`)}</li>
          <li>{tr(`NSPCC Helpline: 0808 800 5000`)}</li>
          <li>
            CEOP (Child Exploitation and Online Protection):{' '}
            <a href="https://www.ceop.police.uk" target="_blank" rel="noopener noreferrer">
              ceop.police.uk
            </a>
          </li>
          <li>{tr(`Channel Programme / Prevent for radicalisation concerns`)}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">External Reporting (Qatar)</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>{tr(`Qatar Foundation for Social Work (Child Protection)`)}</li>
          <li>{tr(`Ministry of Interior: 999 (emergency)`)}</li>
        </ul>

        <div className="bg-warn/5 border border-warn/20 rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold">{tr(`Urgent and Immediate Risk:`)}</p>
          <p>
            If a child is in immediate danger and the DSL is not available, contact emergency
            services directly (999 in the UK, 999 in Qatar) without waiting for DSL authorisation.
          </p>
        </div>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Online Safety and Platform Design</h2>
        <p className="mb-3">The English Hub is designed with safety as a foundational principle:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Privacy by design and by default (UK GDPR and Children&apos;s Code)</li>
          <li>{tr(`Age-appropriate design for users aged 14 to 18`)}</li>
          <li>Minimal data collection</li>
          <li>No live one-to-one contact between staff and students through the platform</li>
          <li>{tr(`No direct messaging between users`)}</li>
          <li>{tr(`AI content safety filters on all generated outputs`)}</li>
          <li>AI monitoring for safeguarding keywords indicating distress or disclosures</li>
        </ul>
      </section>

      {/* Section 13 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. How Students Can Report Concerns</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>In-platform:</strong> &quot;Report a Concern&quot; button available on every
            page, reports go directly to the DSL
          </li>
          <li>
            <strong>Email:</strong> Dedicated safeguarding email monitored by DSL and Deputy DSL
          </li>
          <li>
            <strong>{tr(`Support channel:`)}</strong> Staff trained to recognise and escalate
            safeguarding disclosures
          </li>
        </ul>
        <p className="mt-3 text-sm">
          All safeguarding reports from students are triaged by the DSL within one working day.
          Reports indicating immediate risk are actioned the same day.
        </p>
      </section>

      {/* Signposting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">10. External Support Services</h2>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <ul className="space-y-2">
            <li>
              <strong>Childline:</strong> 0800 1111 |{' '}
              <a href="https://www.childline.org.uk" target="_blank" rel="noopener noreferrer">
                childline.org.uk
              </a>
            </li>
            <li>
              <strong>CEOP:</strong>{' '}
              <a href="https://www.ceop.police.uk" target="_blank" rel="noopener noreferrer">
                ceop.police.uk
              </a>
            </li>
            <li>
              <strong>NSPCC:</strong> 0808 800 5000 |{' '}
              <a href="https://www.nspcc.org.uk" target="_blank" rel="noopener noreferrer">
                nspcc.org.uk
              </a>
            </li>
            <li>
              <strong>{tr(`NSPCC Whistleblowing Helpline:`)}</strong> 0800 028 0285
            </li>
            <li>
              <strong>{tr(`Police (emergency):`)}</strong> 999
            </li>
            <li>
              <strong>{tr(`Police (non-emergency):`)}</strong> 101
            </li>
          </ul>
        </div>
      </section>

      {/* Whistleblowing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">11. Whistleblowing</h2>
        <p className="mb-3">
          All staff are encouraged to raise concerns about safeguarding practices or the behaviour
          of colleagues. No staff member will be subjected to detriment for raising a genuine
          concern in good faith (protected under the Public Interest Disclosure Act 1998).
        </p>
        <p>
          Concerns can be raised to the DSL, or if the concern involves the DSL, to the CEO.
          External reporting can be made to the LADO, the NSPCC Whistleblowing Helpline (0800 028
          0285), or the police.
        </p>
      </section>

      {/* Policy review */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">12. Policy Review</h2>
        <p>
          This policy will be reviewed at least annually, following any safeguarding incident, when
          there are changes to relevant legislation, or when there are significant changes to the
          platform or user base. The review will be conducted by the DSL in consultation with senior
          leadership.
        </p>
      </section>

      <p className="text-sm text-muted-foreground italic">
        This policy is a controlled document. The master copy is maintained by the Designated
        Safeguarding Lead.
      </p>
    </>
  )
}
