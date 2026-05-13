import { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

// Contact placeholders — using cj@upskillenergy.com pending dedicated mailbox
// provisioning. Once dpo@theenglishhub.app and safeguarding@theenglishhub.app
// are live, replace the cj@upskillenergy.com references below and update the
// migration note in section 1. (Tracked: contact-mailbox-provisioning.)
//
// Registered office: pending Companies House confirmation — leave the
// "[Address — pending Companies House confirmation]" string in place until the
// user supplies it.
//
// ICO registration number ZC016690 was carried over from the legacy
// /privacy-policy page. Verify the entry on the ICO public register before
// the next material policy update.

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How The English Hub collects, uses, and protects your personal data under UK GDPR. Includes Data Controller, DPO and Designated Safeguarding Lead contacts, Children’s Code commitments, third-party processors, international transfers, and how to exercise your data rights.',
  alternates: { canonical: 'https://theenglishhub.app/legal/privacy' },
  openGraph: {
    title: 'Privacy Policy — The English Hub',
    description:
      'How The English Hub collects, uses, and protects your personal data under UK GDPR. Transparent data practices for students, parents, and schools.',
  },
}

export default async function PrivacyPolicyPage() {
  const v = await tMany([
    'legal_long.privacy.h1',
    'legal_long.privacy.brand_pre',
    'legal_long.privacy.brand_mid',
    'legal_long.privacy.updated',
    'legal_long.privacy.summary_box',
    // Section 1
    'legal_long.privacy.s1.h2',
    'legal_long.privacy.s1.h3_controller',
    'legal_long.privacy.s1.p_controller_pre',
    'legal_long.privacy.s1.p_controller_mid',
    'legal_long.privacy.s1.p_controller_brand',
    'legal_long.privacy.s1.p_controller_post',
    'legal_long.privacy.s1.p_office_strong',
    'legal_long.privacy.s1.p_office_text',
    'legal_long.privacy.s1.h3_dpo',
    'legal_long.privacy.s1.dpo_name',
    'legal_long.privacy.s1.h3_dsl',
    'legal_long.privacy.s1.dsl_intro',
    'legal_long.privacy.s1.h3_complaint',
    'legal_long.privacy.s1.complaint_pre',
    'legal_long.privacy.s1.complaint_link',
    'legal_long.privacy.s1.complaint_post',
    // Section 2
    'legal_long.privacy.s2.h2',
    'legal_long.privacy.s2.p_intro',
    'legal_long.privacy.s2.h3_account',
    'legal_long.privacy.s2.acc_li1',
    'legal_long.privacy.s2.acc_li2',
    'legal_long.privacy.s2.acc_li3',
    'legal_long.privacy.s2.acc_li4',
    'legal_long.privacy.s2.h3_learning',
    'legal_long.privacy.s2.learn_li1',
    'legal_long.privacy.s2.learn_li2',
    'legal_long.privacy.s2.learn_li3',
    'legal_long.privacy.s2.learn_li4',
    'legal_long.privacy.s2.h3_billing',
    'legal_long.privacy.s2.bill_li1',
    'legal_long.privacy.s2.bill_li2',
    'legal_long.privacy.s2.h3_tech',
    'legal_long.privacy.s2.tech_li1',
    'legal_long.privacy.s2.tech_li2',
    'legal_long.privacy.s2.tech_li3',
    // Section 3
    'legal_long.privacy.s3.h2',
    'legal_long.privacy.s3.li1_strong',
    'legal_long.privacy.s3.li1_text',
    'legal_long.privacy.s3.li2_strong',
    'legal_long.privacy.s3.li2_text',
    'legal_long.privacy.s3.li3_strong',
    'legal_long.privacy.s3.li3_text',
    'legal_long.privacy.s3.li4_strong',
    'legal_long.privacy.s3.li4_text',
    // Section 4
    'legal_long.privacy.s4.h2',
    'legal_long.privacy.s4.p_intro',
    'legal_long.privacy.s4.stripe_h',
    'legal_long.privacy.s4.stripe_p',
    'legal_long.privacy.s4.supabase_h',
    'legal_long.privacy.s4.supabase_p',
    'legal_long.privacy.s4.anthropic_h',
    'legal_long.privacy.s4.anthropic_p',
    'legal_long.privacy.s4.vercel_h',
    'legal_long.privacy.s4.vercel_p',
    'legal_long.privacy.s4.sentry_h',
    'legal_long.privacy.s4.sentry_p',
    'legal_long.privacy.s4.resend_h',
    'legal_long.privacy.s4.resend_p',
    'legal_long.privacy.s4.azure_h',
    'legal_long.privacy.s4.azure_p',
    'legal_long.privacy.s4.vercel_an_h',
    'legal_long.privacy.s4.vercel_an_p',
    'legal_long.privacy.s4.ga_h',
    'legal_long.privacy.s4.ga_p',
    'legal_long.privacy.s4.rew_h',
    'legal_long.privacy.s4.rew_p',
    // Section 5
    'legal_long.privacy.s5.h2',
    'legal_long.privacy.s5.p1',
    'legal_long.privacy.s5.li1_strong',
    'legal_long.privacy.s5.li1_text',
    'legal_long.privacy.s5.li2_strong',
    'legal_long.privacy.s5.li2_text',
    'legal_long.privacy.s5.li3_strong',
    'legal_long.privacy.s5.li3_text',
    'legal_long.privacy.s5.li4_strong',
    'legal_long.privacy.s5.li4_text',
    'legal_long.privacy.s5.li5_strong',
    'legal_long.privacy.s5.li5_text',
    'legal_long.privacy.s5.li6_strong',
    'legal_long.privacy.s5.li6_text',
    'legal_long.privacy.s5.h3_matrix',
    'legal_long.privacy.s5.matrix.col1',
    'legal_long.privacy.s5.matrix.col2',
    'legal_long.privacy.s5.m.r1.c1',
    'legal_long.privacy.s5.m.r1.c2',
    'legal_long.privacy.s5.m.r2.c1',
    'legal_long.privacy.s5.m.r2.c2',
    'legal_long.privacy.s5.m.r3.c1',
    'legal_long.privacy.s5.m.r3.c2',
    'legal_long.privacy.s5.m.r4.c1',
    'legal_long.privacy.s5.m.r4.c2',
    'legal_long.privacy.s5.m.r5.c1',
    'legal_long.privacy.s5.m.r5.c2',
    'legal_long.privacy.s5.m.r6.c1',
    'legal_long.privacy.s5.m.r6.c2',
    'legal_long.privacy.s5.m.r7.c1',
    'legal_long.privacy.s5.m.r7.c2',
    'legal_long.privacy.s5.m.r8.c1',
    'legal_long.privacy.s5.m.r8.c2',
    'legal_long.privacy.s5.m.r9.c1',
    'legal_long.privacy.s5.m.r9.c2',
    'legal_long.privacy.s5.m.r10.c1',
    'legal_long.privacy.s5.m.r10.c2',
    'legal_long.privacy.s5.m.r11.c1',
    'legal_long.privacy.s5.m.r11.c2',
    'legal_long.privacy.s5.m.r12.c1',
    'legal_long.privacy.s5.m.r12.c2',
    'legal_long.privacy.s5.m.r13.c1',
    'legal_long.privacy.s5.m.r13.c2',
    'legal_long.privacy.s5.m.r14.c1',
    'legal_long.privacy.s5.m.r14.c2',
    'legal_long.privacy.s5.m.r15.c1',
    'legal_long.privacy.s5.m.r15.c2',
    'legal_long.privacy.s5.matrix_outro_pre',
    'legal_long.privacy.s5.matrix_outro_link',
    'legal_long.privacy.s5.matrix_outro_post',
    // Section 6
    'legal_long.privacy.s6.h2',
    'legal_long.privacy.s6.li1_strong',
    'legal_long.privacy.s6.li1_text',
    'legal_long.privacy.s6.li2_strong',
    'legal_long.privacy.s6.li2_text',
    'legal_long.privacy.s6.li3_strong',
    'legal_long.privacy.s6.li3_text',
    'legal_long.privacy.s6.li4_strong',
    'legal_long.privacy.s6.li4_text',
    'legal_long.privacy.s6.li5_strong',
    'legal_long.privacy.s6.li5_text',
    'legal_long.privacy.s6.li6_strong',
    'legal_long.privacy.s6.li6_text',
    // Section 7
    'legal_long.privacy.s7.h2',
    'legal_long.privacy.s7.p_intro',
    'legal_long.privacy.s7.li1_strong',
    'legal_long.privacy.s7.li1_path',
    'legal_long.privacy.s7.li1_post',
    'legal_long.privacy.s7.li2_strong',
    'legal_long.privacy.s7.li2_path',
    'legal_long.privacy.s7.li2_post',
    'legal_long.privacy.s7.li3_strong',
    'legal_long.privacy.s7.li3_text',
    'legal_long.privacy.s7.li4_strong',
    'legal_long.privacy.s7.li4_pre',
    'legal_long.privacy.s7.li4_post',
    'legal_long.privacy.s7.li5_strong',
    'legal_long.privacy.s7.li5_text',
    'legal_long.privacy.s7.p_outro',
    // Section 8
    'legal_long.privacy.s8.h2',
    'legal_long.privacy.s8.p_intro',
    'legal_long.privacy.s8.li1_strong',
    'legal_long.privacy.s8.li1_text',
    'legal_long.privacy.s8.li2_strong',
    'legal_long.privacy.s8.li2_text',
    'legal_long.privacy.s8.li3_strong',
    'legal_long.privacy.s8.li3_text',
    'legal_long.privacy.s8.li4_strong',
    'legal_long.privacy.s8.li4_text',
    'legal_long.privacy.s8.p_outro',
    // Section 9
    'legal_long.privacy.s9.h2',
    'legal_long.privacy.s9.p_intro',
    'legal_long.privacy.s9.li1_strong',
    'legal_long.privacy.s9.li1_text',
    'legal_long.privacy.s9.li2_strong',
    'legal_long.privacy.s9.li2_text',
    'legal_long.privacy.s9.li3_strong',
    'legal_long.privacy.s9.li3_text',
    'legal_long.privacy.s9.p_outro',
    // Section 10
    'legal_long.privacy.s10.h2',
    'legal_long.privacy.s10.p_intro',
    'legal_long.privacy.s10.li1',
    'legal_long.privacy.s10.li2',
    'legal_long.privacy.s10.li3',
    'legal_long.privacy.s10.li4',
    'legal_long.privacy.s10.li5',
    'legal_long.privacy.s10.p_outro_pre',
    // Section 11
    'legal_long.privacy.s11.h2',
    'legal_long.privacy.s11.p',
    'legal_long.privacy.copyright',
  ])
  let i = 0
  const n = () => v[i++]

  const h1 = n(),
    brandPre = n(),
    brandMid = n(),
    updated = n(),
    summary = n()
  // S1
  const s1H2 = n(),
    s1HCtrl = n(),
    s1CtrlPre = n(),
    s1CtrlMid = n(),
    s1CtrlBrand = n(),
    s1CtrlPost = n(),
    s1OfficeS = n(),
    s1OfficeT = n(),
    s1HDpo = n(),
    s1DpoName = n(),
    s1HDsl = n(),
    s1DslIntro = n(),
    s1HCmp = n(),
    s1CmpPre = n(),
    s1CmpLink = n(),
    s1CmpPost = n()
  // S2
  const s2H2 = n(),
    s2P = n(),
    s2HAcc = n(),
    s2A1 = n(),
    s2A2 = n(),
    s2A3 = n(),
    s2A4 = n(),
    s2HL = n(),
    s2L1 = n(),
    s2L2 = n(),
    s2L3 = n(),
    s2L4 = n(),
    s2HB = n(),
    s2B1 = n(),
    s2B2 = n(),
    s2HT = n(),
    s2T1 = n(),
    s2T2 = n(),
    s2T3 = n()
  // S3
  const s3H2 = n(),
    s3L1S = n(),
    s3L1T = n(),
    s3L2S = n(),
    s3L2T = n(),
    s3L3S = n(),
    s3L3T = n(),
    s3L4S = n(),
    s3L4T = n()
  // S4
  const s4H2 = n(),
    s4P = n(),
    s4StrH = n(),
    s4StrP = n(),
    s4SbH = n(),
    s4SbP = n(),
    s4AnH = n(),
    s4AnP = n(),
    s4VcH = n(),
    s4VcP = n(),
    s4SnH = n(),
    s4SnP = n(),
    s4RsH = n(),
    s4RsP = n(),
    s4AzH = n(),
    s4AzP = n(),
    s4VaH = n(),
    s4VaP = n(),
    s4GaH = n(),
    s4GaP = n(),
    s4RwH = n(),
    s4RwP = n()
  // S5
  const s5H2 = n(),
    s5P1 = n(),
    s5L1S = n(),
    s5L1T = n(),
    s5L2S = n(),
    s5L2T = n(),
    s5L3S = n(),
    s5L3T = n(),
    s5L4S = n(),
    s5L4T = n(),
    s5L5S = n(),
    s5L5T = n(),
    s5L6S = n(),
    s5L6T = n(),
    s5HMx = n(),
    s5MxC1 = n(),
    s5MxC2 = n(),
    s5R1c1 = n(),
    s5R1c2 = n(),
    s5R2c1 = n(),
    s5R2c2 = n(),
    s5R3c1 = n(),
    s5R3c2 = n(),
    s5R4c1 = n(),
    s5R4c2 = n(),
    s5R5c1 = n(),
    s5R5c2 = n(),
    s5R6c1 = n(),
    s5R6c2 = n(),
    s5R7c1 = n(),
    s5R7c2 = n(),
    s5R8c1 = n(),
    s5R8c2 = n(),
    s5R9c1 = n(),
    s5R9c2 = n(),
    s5R10c1 = n(),
    s5R10c2 = n(),
    s5R11c1 = n(),
    s5R11c2 = n(),
    s5R12c1 = n(),
    s5R12c2 = n(),
    s5R13c1 = n(),
    s5R13c2 = n(),
    s5R14c1 = n(),
    s5R14c2 = n(),
    s5R15c1 = n(),
    s5R15c2 = n(),
    s5MOutPre = n(),
    s5MOutLink = n(),
    s5MOutPost = n()
  // S6
  const s6H2 = n(),
    s6L1S = n(),
    s6L1T = n(),
    s6L2S = n(),
    s6L2T = n(),
    s6L3S = n(),
    s6L3T = n(),
    s6L4S = n(),
    s6L4T = n(),
    s6L5S = n(),
    s6L5T = n(),
    s6L6S = n(),
    s6L6T = n()
  // S7
  const s7H2 = n(),
    s7P = n(),
    s7L1S = n(),
    s7L1Path = n(),
    s7L1Post = n(),
    s7L2S = n(),
    s7L2Path = n(),
    s7L2Post = n(),
    s7L3S = n(),
    s7L3T = n(),
    s7L4S = n(),
    s7L4Pre = n(),
    s7L4Post = n(),
    s7L5S = n(),
    s7L5T = n(),
    s7POut = n()
  // S8
  const s8H2 = n(),
    s8P = n(),
    s8L1S = n(),
    s8L1T = n(),
    s8L2S = n(),
    s8L2T = n(),
    s8L3S = n(),
    s8L3T = n(),
    s8L4S = n(),
    s8L4T = n(),
    s8POut = n()
  // S9
  const s9H2 = n(),
    s9P = n(),
    s9L1S = n(),
    s9L1T = n(),
    s9L2S = n(),
    s9L2T = n(),
    s9L3S = n(),
    s9L3T = n(),
    s9POut = n()
  // S10
  const s10H2 = n(),
    s10P = n(),
    s10L1 = n(),
    s10L2 = n(),
    s10L3 = n(),
    s10L4 = n(),
    s10L5 = n(),
    s10OPre = n()
  // S11
  const s11H2 = n(),
    s11P = n(),
    cpy = n()

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{h1}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>{brandPre}</strong>
        {brandMid}
        <br />
        {updated}
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 text-sm">
        <p>{summary}</p>
      </div>

      {/* Section 1: Contacts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s1H2}</h2>

        <h3 className="text-lg font-semibold mb-2">{s1HCtrl}</h3>
        <p className="mb-3">
          <strong>{s1CtrlPre}</strong>
          {s1CtrlMid}
          <strong>{s1CtrlBrand}</strong>
          {s1CtrlPost}
        </p>
        <p className="mb-3">
          <strong>{s1OfficeS}</strong>
          {s1OfficeT}
        </p>

        <h3 className="text-lg font-semibold mb-2">{s1HDpo}</h3>
        <p className="mb-3">
          <strong>{s1DpoName}</strong> &mdash;{' '}
          <a href="mailto:cj@upskillenergy.com" className="underline">
            cj@upskillenergy.com
          </a>
        </p>

        <h3 className="text-lg font-semibold mb-2">{s1HDsl}</h3>
        <p className="mb-3">
          {s1DslIntro}
          <br />
          <strong>{s1DpoName}</strong> &mdash;{' '}
          <a href="mailto:cj@upskillenergy.com" className="underline">
            cj@upskillenergy.com
          </a>
        </p>

        <h3 className="text-lg font-semibold mb-2">{s1HCmp}</h3>
        <p>
          {s1CmpPre}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {s1CmpLink}
          </a>
          {s1CmpPost}
        </p>
      </section>

      {/* Section 2: What we collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s2H2}</h2>
        <p className="mb-3">{s2P}</p>

        <h3 className="text-lg font-semibold mb-2">{s2HAcc}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{s2A1}</li>
          <li>{s2A2}</li>
          <li>{s2A3}</li>
          <li>{s2A4}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{s2HL}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{s2L1}</li>
          <li>{s2L2}</li>
          <li>{s2L3}</li>
          <li>{s2L4}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{s2HB}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{s2B1}</li>
          <li>{s2B2}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{s2HT}</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>{s2T1}</li>
          <li>{s2T2}</li>
          <li>{s2T3}</li>
        </ul>
      </section>

      {/* Section 3: Legal bases */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s3H2}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{s3L1S}</strong>
            {s3L1T}
          </li>
          <li>
            <strong>{s3L2S}</strong>
            {s3L2T}
          </li>
          <li>
            <strong>{s3L3S}</strong>
            {s3L3T}
          </li>
          <li>
            <strong>{s3L4S}</strong>
            {s3L4T}
          </li>
        </ul>
      </section>

      {/* Section 4: Third-party processors */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s4H2}</h2>
        <p className="mb-3">{s4P}</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4StrH}</h3>
            <p>
              {s4StrP}
              <a
                href="https://stripe.com/gb/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                stripe.com/gb/privacy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4SbH}</h3>
            <p>
              {s4SbP}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                supabase.com/privacy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4AnH}</h3>
            <p>
              {s4AnP}
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                anthropic.com/privacy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4VcH}</h3>
            <p>
              {s4VcP}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4SnH}</h3>
            <p>
              {s4SnP}
              <a
                href="https://sentry.io/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                sentry.io/privacy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4RsH}</h3>
            <p>
              {s4RsP}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                resend.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4AzH}</h3>
            <p>
              {s4AzP}
              <a
                href="https://privacy.microsoft.com/en-gb/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                privacy.microsoft.com
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4VaH}</h3>
            <p>
              {s4VaP}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4GaH}</h3>
            <p>
              {s4GaP}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{s4RwH}</h3>
            <p>
              {s4RwP}
              <a
                href="https://www.rewardful.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                rewardful.com/privacy-policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Children's Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s5H2}</h2>
        <p className="mb-3">{s5P1}</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>{s5L1S}</strong>
            {s5L1T}
          </li>
          <li>
            <strong>{s5L2S}</strong>
            {s5L2T}
          </li>
          <li>
            <strong>{s5L3S}</strong>
            {s5L3T}
          </li>
          <li>
            <strong>{s5L4S}</strong>
            {s5L4T}
          </li>
          <li>
            <strong>{s5L5S}</strong>
            {s5L5T}
          </li>
          <li>
            <strong>{s5L6S}</strong>
            {s5L6T}
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-3 mt-6">{s5HMx}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left font-semibold p-3 border-b border-border">{s5MxC1}</th>
                <th className="text-left font-semibold p-3 border-b border-border">{s5MxC2}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R1c1}</td>
                <td className="p-3 align-top">{s5R1c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R2c1}</td>
                <td className="p-3 align-top">{s5R2c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R3c1}</td>
                <td className="p-3 align-top">{s5R3c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R4c1}</td>
                <td className="p-3 align-top">{s5R4c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R5c1}</td>
                <td className="p-3 align-top">{s5R5c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R6c1}</td>
                <td className="p-3 align-top">{s5R6c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R7c1}</td>
                <td className="p-3 align-top">{s5R7c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R8c1}</td>
                <td className="p-3 align-top">{s5R8c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R9c1}</td>
                <td className="p-3 align-top">{s5R9c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R10c1}</td>
                <td className="p-3 align-top">{s5R10c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R11c1}</td>
                <td className="p-3 align-top">{s5R11c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R12c1}</td>
                <td className="p-3 align-top">{s5R12c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R13c1}</td>
                <td className="p-3 align-top">{s5R13c2}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">{s5R14c1}</td>
                <td className="p-3 align-top">{s5R14c2}</td>
              </tr>
              <tr>
                <td className="p-3 align-top">{s5R15c1}</td>
                <td className="p-3 align-top">{s5R15c2}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          {s5MOutPre}
          <a href="/legal/safeguarding" className="underline">
            {s5MOutLink}
          </a>
          {s5MOutPost}
        </p>
      </section>

      {/* Section 6: Retention */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s6H2}</h2>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>{s6L1S}</strong>
            {s6L1T}
          </li>
          <li>
            <strong>{s6L2S}</strong>
            {s6L2T}
          </li>
          <li>
            <strong>{s6L3S}</strong>
            {s6L3T}
          </li>
          <li>
            <strong>{s6L4S}</strong>
            {s6L4T}
          </li>
          <li>
            <strong>{s6L5S}</strong>
            {s6L5T}
          </li>
          <li>
            <strong>{s6L6S}</strong>
            {s6L6T}
          </li>
        </ul>
      </section>

      {/* Section 7: SARs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s7H2}</h2>
        <p className="mb-3">{s7P}</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>{s7L1S}</strong>
            <a href="/account/data-export" className="underline">
              {s7L1Path}
            </a>
            {s7L1Post}
          </li>
          <li>
            <strong>{s7L2S}</strong>
            <a href="/account/delete" className="underline">
              {s7L2Path}
            </a>
            {s7L2Post}
          </li>
          <li>
            <strong>{s7L3S}</strong>
            {s7L3T}
          </li>
          <li>
            <strong>{s7L4S}</strong>
            {s7L4Pre}
            <a href="mailto:cj@upskillenergy.com" className="underline">
              cj@upskillenergy.com
            </a>
            {s7L4Post}
          </li>
          <li>
            <strong>{s7L5S}</strong>
            {s7L5T}
          </li>
        </ul>
        <p>{s7POut}</p>
      </section>

      {/* Section 8: Cookies */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s8H2}</h2>
        <p className="mb-3">{s8P}</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>{s8L1S}</strong>
            {s8L1T}
          </li>
          <li>
            <strong>{s8L2S}</strong>
            {s8L2T}
          </li>
          <li>
            <strong>{s8L3S}</strong>
            {s8L3T}
          </li>
          <li>
            <strong>{s8L4S}</strong>
            {s8L4T}
          </li>
        </ul>
        <p>{s8POut}</p>
      </section>

      {/* Section 9: International transfers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s9H2}</h2>
        <p className="mb-3">{s9P}</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>{s9L1S}</strong>
            {s9L1T}
          </li>
          <li>
            <strong>{s9L2S}</strong>
            {s9L2T}
          </li>
          <li>
            <strong>{s9L3S}</strong>
            {s9L3T}
          </li>
        </ul>
        <p>{s9POut}</p>
      </section>

      {/* Section 10: Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s10H2}</h2>
        <p className="mb-3">{s10P}</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{s10L1}</li>
          <li>{s10L2}</li>
          <li>{s10L3}</li>
          <li>{s10L4}</li>
          <li>{s10L5}</li>
        </ul>
        <p>
          {s10OPre}
          <a href="mailto:security@theenglishhub.app" className="underline">
            security@theenglishhub.app
          </a>
          .
        </p>
      </section>

      {/* Section 11: Changes */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">{s11H2}</h2>
        <p>{s11P}</p>
      </section>

      <p className="text-sm text-muted-foreground italic mt-8">{cpy}</p>
    </>
  )
}
