/**
 * /legal/ai-governance - public AI governance + ethics audit.
 *
 * This page is an honest assessment of where The English Hub sits
 * against Qatar's PDPPL / Cybercrime Law / QCB / NCSA / MCIT
 * framework. It is NOT marketing copy. Audience: school DPOs,
 * parents in the Gulf market, and diligence reviewers.
 *
 * Content was drafted via a compliance-mapping research agent using
 * the user's "COMPLIANCE REFERENCE · v1.0 - Qatar's AI & Data
 * Governance Framework" as the source.
 *
 * If you're updating this page, the editorial bar is: be specific
 * about what we DO comply with and equally specific about what we
 * DON'T. No buzzwords. Every gap gets a remediation entry in the
 * roadmap table.
 */

import type { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'AI Governance & Ethics',
    description:
      'How The English Hub maps to Qatar’s PDPPL, Cybercrime Law, NCSA AI Guidelines, MCIT Ethical AI Principles, and adjacent frameworks. Includes an honest gap list and remediation roadmap.',
  },
  alternates: { canonical: 'https://theenglishhub.app/legal/ai-governance' },
  title: 'AI Governance & Ethics',
  description:
    'How The English Hub maps to Qatar’s PDPPL, Cybercrime Law, NCSA AI Guidelines, MCIT Ethical AI Principles, and adjacent frameworks. Includes an honest gap list and remediation roadmap.',
}

export default async function AIGovernancePage() {
  const v = await tMany([
    'legal_long.ai_gov.h1',
    'legal_long.ai_gov.operator_pre',
    'legal_long.ai_gov.operator_mid',
    'legal_long.ai_gov.review_stamp',
    'legal_long.ai_gov.intro',
    // S1
    'legal_long.ai_gov.s1.h2',
    'legal_long.ai_gov.s1.p1',
    'legal_long.ai_gov.s1.t.col1',
    'legal_long.ai_gov.s1.t.col2',
    'legal_long.ai_gov.s1.t.col3',
    'legal_long.ai_gov.s1.t.r1.c1',
    'legal_long.ai_gov.s1.t.r1.c2',
    'legal_long.ai_gov.s1.t.r1.c3',
    'legal_long.ai_gov.s1.t.r2.c1',
    'legal_long.ai_gov.s1.t.r2.c2',
    'legal_long.ai_gov.s1.t.r2.c3',
    'legal_long.ai_gov.s1.t.r3.c1',
    'legal_long.ai_gov.s1.t.r3.c2',
    'legal_long.ai_gov.s1.t.r3.c3',
    'legal_long.ai_gov.s1.t.r4.c1',
    'legal_long.ai_gov.s1.t.r4.c2',
    'legal_long.ai_gov.s1.t.r4.c3',
    'legal_long.ai_gov.s1.t.r5.c1',
    'legal_long.ai_gov.s1.t.r5.c2',
    'legal_long.ai_gov.s1.t.r5.c3',
    'legal_long.ai_gov.s1.t.r6.c1',
    'legal_long.ai_gov.s1.t.r6.c2',
    'legal_long.ai_gov.s1.t.r6.c3',
    'legal_long.ai_gov.s1.t.r7.c1',
    'legal_long.ai_gov.s1.t.r7.c2',
    'legal_long.ai_gov.s1.t.r7.c3',
    'legal_long.ai_gov.s1.t.r8.c1',
    'legal_long.ai_gov.s1.t.r8.c2',
    'legal_long.ai_gov.s1.t.r8.c3',
    'legal_long.ai_gov.s1.outro',
    // S2
    'legal_long.ai_gov.s2.h2',
    'legal_long.ai_gov.s2.p1',
    'legal_long.ai_gov.s2.h3_compliant',
    'legal_long.ai_gov.s2.li_c1',
    'legal_long.ai_gov.s2.li_c2',
    'legal_long.ai_gov.s2.li_c3',
    'legal_long.ai_gov.s2.li_c4',
    'legal_long.ai_gov.s2.h3_gaps',
    'legal_long.ai_gov.s2.li_g1',
    'legal_long.ai_gov.s2.li_g2',
    'legal_long.ai_gov.s2.li_g3',
    'legal_long.ai_gov.s2.rem1_strong',
    'legal_long.ai_gov.s2.rem1_text',
    'legal_long.ai_gov.s2.rem2_strong',
    'legal_long.ai_gov.s2.rem2_text',
    // S3
    'legal_long.ai_gov.s3.h2',
    'legal_long.ai_gov.s3.p1',
    'legal_long.ai_gov.s3.h3_do',
    'legal_long.ai_gov.s3.li_do1',
    'legal_long.ai_gov.s3.li_do2',
    'legal_long.ai_gov.s3.li_do3',
    'legal_long.ai_gov.s3.h3_gaps',
    'legal_long.ai_gov.s3.li_g1',
    'legal_long.ai_gov.s3.li_g2',
    'legal_long.ai_gov.s3.rem3_strong',
    'legal_long.ai_gov.s3.rem3_text',
    // S4
    'legal_long.ai_gov.s4.h2',
    'legal_long.ai_gov.s4.p1',
    'legal_long.ai_gov.s4.t.col1',
    'legal_long.ai_gov.s4.t.col2',
    'legal_long.ai_gov.s4.t.r1.c1',
    'legal_long.ai_gov.s4.t.r1.c2',
    'legal_long.ai_gov.s4.t.r2.c1',
    'legal_long.ai_gov.s4.t.r2.c2',
    'legal_long.ai_gov.s4.t.r3.c1',
    'legal_long.ai_gov.s4.t.r3.c2',
    'legal_long.ai_gov.s4.t.r4.c1',
    'legal_long.ai_gov.s4.t.r4.c2',
    'legal_long.ai_gov.s4.t.r5.c1',
    'legal_long.ai_gov.s4.t.r5.c2',
    'legal_long.ai_gov.s4.t.r6.c1',
    'legal_long.ai_gov.s4.t.r6.c2',
    'legal_long.ai_gov.s4.rem4_strong',
    'legal_long.ai_gov.s4.rem4_text',
    'legal_long.ai_gov.s4.rem5_strong',
    'legal_long.ai_gov.s4.rem5_text',
    // S5
    'legal_long.ai_gov.s5.h2',
    'legal_long.ai_gov.s5.p1',
    'legal_long.ai_gov.s5.li1_strong',
    'legal_long.ai_gov.s5.li1_text',
    'legal_long.ai_gov.s5.li2_strong',
    'legal_long.ai_gov.s5.li2_text',
    'legal_long.ai_gov.s5.li3_strong',
    'legal_long.ai_gov.s5.li3_text',
    'legal_long.ai_gov.s5.li4_strong',
    'legal_long.ai_gov.s5.li4_text',
    'legal_long.ai_gov.s5.li5_strong',
    'legal_long.ai_gov.s5.li5_text',
    'legal_long.ai_gov.s5.li6_strong',
    'legal_long.ai_gov.s5.li6_text',
    'legal_long.ai_gov.s5.rem6_strong',
    'legal_long.ai_gov.s5.rem6_text',
    'legal_long.ai_gov.s5.rem7_strong',
    'legal_long.ai_gov.s5.rem7_text',
    // S6
    'legal_long.ai_gov.s6.h2',
    'legal_long.ai_gov.s6.li1_strong',
    'legal_long.ai_gov.s6.li1_text',
    'legal_long.ai_gov.s6.li2_strong',
    'legal_long.ai_gov.s6.li2_text',
    'legal_long.ai_gov.s6.li3_strong',
    'legal_long.ai_gov.s6.li3_text',
    'legal_long.ai_gov.s6.rem8_strong',
    'legal_long.ai_gov.s6.rem8_text',
    // S7 - table
    'legal_long.ai_gov.s7.h2',
    'legal_long.ai_gov.s7.t.col1',
    'legal_long.ai_gov.s7.t.col2',
    'legal_long.ai_gov.s7.t.col3',
    'legal_long.ai_gov.s7.t.col4',
    'legal_long.ai_gov.s7.r1.action',
    'legal_long.ai_gov.s7.r1.owner',
    'legal_long.ai_gov.s7.r1.target',
    'legal_long.ai_gov.s7.r2.action',
    'legal_long.ai_gov.s7.r2.owner',
    'legal_long.ai_gov.s7.r2.target',
    'legal_long.ai_gov.s7.r3.action',
    'legal_long.ai_gov.s7.r3.owner',
    'legal_long.ai_gov.s7.r3.target',
    'legal_long.ai_gov.s7.r4.action',
    'legal_long.ai_gov.s7.r4.owner',
    'legal_long.ai_gov.s7.r4.target',
    'legal_long.ai_gov.s7.r5.action',
    'legal_long.ai_gov.s7.r5.owner',
    'legal_long.ai_gov.s7.r5.target',
    'legal_long.ai_gov.s7.r6.action',
    'legal_long.ai_gov.s7.r6.owner',
    'legal_long.ai_gov.s7.r6.target',
    'legal_long.ai_gov.s7.r7.action',
    'legal_long.ai_gov.s7.r7.owner',
    'legal_long.ai_gov.s7.r7.target',
    'legal_long.ai_gov.s7.r8.action',
    'legal_long.ai_gov.s7.r8.owner',
    'legal_long.ai_gov.s7.r8.target',
    'legal_long.ai_gov.s7.r9.action',
    'legal_long.ai_gov.s7.r9.owner',
    'legal_long.ai_gov.s7.r9.target',
    'legal_long.ai_gov.s7.r10.action',
    'legal_long.ai_gov.s7.r10.owner',
    'legal_long.ai_gov.s7.r10.target',
    'legal_long.ai_gov.s7.r11.action',
    'legal_long.ai_gov.s7.r11.owner',
    'legal_long.ai_gov.s7.r11.target',
    'legal_long.ai_gov.s7.r12.action',
    'legal_long.ai_gov.s7.r12.owner',
    'legal_long.ai_gov.s7.r12.target',
    // S8
    'legal_long.ai_gov.s8.h2',
    'legal_long.ai_gov.s8.p1',
    'legal_long.ai_gov.s8.h3_short',
    'legal_long.ai_gov.s8.li_s1',
    'legal_long.ai_gov.s8.li_s2',
    'legal_long.ai_gov.s8.li_s3',
    'legal_long.ai_gov.s8.p_priority',
    'legal_long.ai_gov.s8.rem9_strong',
    'legal_long.ai_gov.s8.rem9_text',
    'legal_long.ai_gov.s8.rem10_strong',
    'legal_long.ai_gov.s8.rem10_text',
    'legal_long.ai_gov.s8.rem11_strong',
    'legal_long.ai_gov.s8.rem11_text',
    // S9
    'legal_long.ai_gov.s9.h2',
    'legal_long.ai_gov.s9.p1',
    'legal_long.ai_gov.s9.li_g1',
    'legal_long.ai_gov.s9.li_g2',
    'legal_long.ai_gov.s9.li_g3',
    'legal_long.ai_gov.s9.li_g4',
    'legal_long.ai_gov.s9.p2',
    'legal_long.ai_gov.s9.li_n1',
    'legal_long.ai_gov.s9.li_n2',
    'legal_long.ai_gov.s9.li_n3',
    'legal_long.ai_gov.s9.p3',
    // S11 (Audit findings - displayed before s10 in source)
    'legal_long.ai_gov.s11.h2',
    'legal_long.ai_gov.s11.p1',
    'legal_long.ai_gov.s11.a_h3',
    'legal_long.ai_gov.s11.a_li1',
    'legal_long.ai_gov.s11.a_li2',
    'legal_long.ai_gov.s11.b_h3',
    'legal_long.ai_gov.s11.b_li1',
    'legal_long.ai_gov.s11.b_li2',
    'legal_long.ai_gov.s11.c_h3',
    'legal_long.ai_gov.s11.c_li1',
    'legal_long.ai_gov.s11.c_li2',
    'legal_long.ai_gov.s11.c_li3',
    'legal_long.ai_gov.s11.d_h3',
    'legal_long.ai_gov.s11.d_p',
    'legal_long.ai_gov.s11.e_h3',
    'legal_long.ai_gov.s11.e_p',
    'legal_long.ai_gov.s11.f_h3',
    'legal_long.ai_gov.s11.f_p',
    'legal_long.ai_gov.s11.outro',
    // S10 (contact)
    'legal_long.ai_gov.s10.h2',
    'legal_long.ai_gov.s10.p1',
    'legal_long.ai_gov.s10.email',
    'legal_long.ai_gov.s10.p2',
    'legal_long.ai_gov.s10.outro',
  ])
  let i = 0
  const n = () => v[i++]

  const h1 = n(),
    opPre = n(),
    opMid = n(),
    reviewStamp = n(),
    intro = n()
  // S1
  const s1H2 = n(),
    s1P1 = n(),
    s1Tc1 = n(),
    s1Tc2 = n(),
    s1Tc3 = n(),
    s1R1c1 = n(),
    s1R1c2 = n(),
    s1R1c3 = n(),
    s1R2c1 = n(),
    s1R2c2 = n(),
    s1R2c3 = n(),
    s1R3c1 = n(),
    s1R3c2 = n(),
    s1R3c3 = n(),
    s1R4c1 = n(),
    s1R4c2 = n(),
    s1R4c3 = n(),
    s1R5c1 = n(),
    s1R5c2 = n(),
    s1R5c3 = n(),
    s1R6c1 = n(),
    s1R6c2 = n(),
    s1R6c3 = n(),
    s1R7c1 = n(),
    s1R7c2 = n(),
    s1R7c3 = n(),
    s1R8c1 = n(),
    s1R8c2 = n(),
    s1R8c3 = n(),
    s1Out = n()
  // S2
  const s2H2 = n(),
    s2P1 = n(),
    s2HC = n(),
    s2C1 = n(),
    s2C2 = n(),
    s2C3 = n(),
    s2C4 = n(),
    s2HG = n(),
    s2G1 = n(),
    s2G2 = n(),
    s2G3 = n(),
    s2R1S = n(),
    s2R1T = n(),
    s2R2S = n(),
    s2R2T = n()
  // S3
  const s3H2 = n(),
    s3P1 = n(),
    s3HDo = n(),
    s3Do1 = n(),
    s3Do2 = n(),
    s3Do3 = n(),
    s3HG = n(),
    s3G1 = n(),
    s3G2 = n(),
    s3R3S = n(),
    s3R3T = n()
  // S4
  const s4H2 = n(),
    s4P1 = n(),
    s4Tc1 = n(),
    s4Tc2 = n(),
    s4R1c1 = n(),
    s4R1c2 = n(),
    s4R2c1 = n(),
    s4R2c2 = n(),
    s4R3c1 = n(),
    s4R3c2 = n(),
    s4R4c1 = n(),
    s4R4c2 = n(),
    s4R5c1 = n(),
    s4R5c2 = n(),
    s4R6c1 = n(),
    s4R6c2 = n(),
    s4R4S = n(),
    s4R4T = n(),
    s4R5S = n(),
    s4R5T = n()
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
    s5R6S = n(),
    s5R6T = n(),
    s5R7S = n(),
    s5R7T = n()
  // S6
  const s6H2 = n(),
    s6L1S = n(),
    s6L1T = n(),
    s6L2S = n(),
    s6L2T = n(),
    s6L3S = n(),
    s6L3T = n(),
    s6R8S = n(),
    s6R8T = n()
  // S7 table
  const s7H2 = n(),
    s7Tc1 = n(),
    s7Tc2 = n(),
    s7Tc3 = n(),
    s7Tc4 = n(),
    s7R1a = n(),
    s7R1o = n(),
    s7R1t = n(),
    s7R2a = n(),
    s7R2o = n(),
    s7R2t = n(),
    s7R3a = n(),
    s7R3o = n(),
    s7R3t = n(),
    s7R4a = n(),
    s7R4o = n(),
    s7R4t = n(),
    s7R5a = n(),
    s7R5o = n(),
    s7R5t = n(),
    s7R6a = n(),
    s7R6o = n(),
    s7R6t = n(),
    s7R7a = n(),
    s7R7o = n(),
    s7R7t = n(),
    s7R8a = n(),
    s7R8o = n(),
    s7R8t = n(),
    s7R9a = n(),
    s7R9o = n(),
    s7R9t = n(),
    s7R10a = n(),
    s7R10o = n(),
    s7R10t = n(),
    s7R11a = n(),
    s7R11o = n(),
    s7R11t = n(),
    s7R12a = n(),
    s7R12o = n(),
    s7R12t = n()
  // S8
  const s8H2 = n(),
    s8P1 = n(),
    s8HShort = n(),
    s8S1 = n(),
    s8S2 = n(),
    s8S3 = n(),
    s8Pri = n(),
    s8R9S = n(),
    s8R9T = n(),
    s8R10S = n(),
    s8R10T = n(),
    s8R11S = n(),
    s8R11T = n()
  // S9
  const s9H2 = n(),
    s9P1 = n(),
    s9G1 = n(),
    s9G2 = n(),
    s9G3 = n(),
    s9G4 = n(),
    s9P2 = n(),
    s9N1 = n(),
    s9N2 = n(),
    s9N3 = n(),
    s9P3 = n()
  // S11
  const s11H2 = n(),
    s11P1 = n(),
    s11Ah3 = n(),
    s11Al1 = n(),
    s11Al2 = n(),
    s11Bh3 = n(),
    s11Bl1 = n(),
    s11Bl2 = n(),
    s11Ch3 = n(),
    s11Cl1 = n(),
    s11Cl2 = n(),
    s11Cl3 = n(),
    s11Dh3 = n(),
    s11Dp = n(),
    s11Eh3 = n(),
    s11Ep = n(),
    s11Fh3 = n(),
    s11Fp = n(),
    s11Out = n()
  // S10
  const s10H2 = n(),
    s10P1 = n(),
    s10Email = n(),
    s10P2 = n(),
    s10Out = n()

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{h1}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>{opPre}</strong>
        {opMid}
        <br />
        {reviewStamp}
      </p>

      <p className="mb-8">{intro}</p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s1H2}</h2>
        <p className="mb-3">{s1P1}</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-2 pe-3">{s1Tc1}</th>
                <th className="text-start py-2 pe-3">{s1Tc2}</th>
                <th className="text-start py-2">{s1Tc3}</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:pe-3 [&_td]:align-top">
              <tr className="border-b border-border/40">
                <td>{s1R1c1}</td>
                <td>{s1R1c2}</td>
                <td>{s1R1c3}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s1R2c1}</td>
                <td>{s1R2c2}</td>
                <td>{s1R2c3}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s1R3c1}</td>
                <td>{s1R3c2}</td>
                <td>{s1R3c3}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s1R4c1}</td>
                <td>{s1R4c2}</td>
                <td>{s1R4c3}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s1R5c1}</td>
                <td>{s1R5c2}</td>
                <td>{s1R5c3}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s1R6c1}</td>
                <td>{s1R6c2}</td>
                <td>{s1R6c3}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s1R7c1}</td>
                <td>{s1R7c2}</td>
                <td>{s1R7c3}</td>
              </tr>
              <tr>
                <td>{s1R8c1}</td>
                <td>{s1R8c2}</td>
                <td>{s1R8c3}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{s1Out}</p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s2H2}</h2>
        <p className="mb-3">{s2P1}</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s2HC}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s2C1}</li>
          <li>{s2C2}</li>
          <li>{s2C3}</li>
          <li>{s2C4}</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s2HG}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s2G1}</li>
          <li>{s2G2}</li>
          <li>{s2G3}</li>
        </ul>
        <p>
          <strong>{s2R1S}</strong>
          {s2R1T}
        </p>
        <p>
          <strong>{s2R2S}</strong>
          {s2R2T}
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s3H2}</h2>
        <p className="mb-3">{s3P1}</p>
        <h3 className="text-lg font-semibold mb-2">{s3HDo}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s3Do1}</li>
          <li>{s3Do2}</li>
          <li>{s3Do3}</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">{s3HG}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s3G1}</li>
          <li>{s3G2}</li>
        </ul>
        <p>
          <strong>{s3R3S}</strong>
          {s3R3T}
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s4H2}</h2>
        <p className="mb-3">{s4P1}</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-2 pe-3">{s4Tc1}</th>
                <th className="text-start py-2">{s4Tc2}</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:pe-3 [&_td]:align-top">
              <tr className="border-b border-border/40">
                <td>{s4R1c1}</td>
                <td>{s4R1c2}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s4R2c1}</td>
                <td>{s4R2c2}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s4R3c1}</td>
                <td>{s4R3c2}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s4R4c1}</td>
                <td>{s4R4c2}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td>{s4R5c1}</td>
                <td>{s4R5c2}</td>
              </tr>
              <tr>
                <td>{s4R6c1}</td>
                <td>{s4R6c2}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>{s4R4S}</strong>
          {s4R4T}
        </p>
        <p>
          <strong>{s4R5S}</strong>
          {s4R5T}
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s5H2}</h2>
        <p className="mb-3">{s5P1}</p>
        <ol className="list-decimal ps-6 space-y-3 mb-4">
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
        </ol>
        <p>
          <strong>{s5R6S}</strong>
          {s5R6T}
        </p>
        <p>
          <strong>{s5R7S}</strong>
          {s5R7T}
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s6H2}</h2>
        <ul className="list-disc ps-6 space-y-3 mb-4">
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
        </ul>
        <p>
          <strong>{s6R8S}</strong>
          {s6R8T}
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s7H2}</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-start py-2 pe-2">{s7Tc1}</th>
                <th className="text-start py-2 pe-3">{s7Tc2}</th>
                <th className="text-start py-2 pe-3">{s7Tc3}</th>
                <th className="text-start py-2">{s7Tc4}</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-1.5 [&_td]:pe-3">
              <tr className="border-b border-border/30">
                <td>1</td>
                <td>{s7R1a}</td>
                <td>{s7R1o}</td>
                <td>{s7R1t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>2</td>
                <td>{s7R2a}</td>
                <td>{s7R2o}</td>
                <td>{s7R2t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>3</td>
                <td>{s7R3a}</td>
                <td>{s7R3o}</td>
                <td>{s7R3t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>4</td>
                <td>{s7R4a}</td>
                <td>{s7R4o}</td>
                <td>{s7R4t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>5</td>
                <td>{s7R5a}</td>
                <td>{s7R5o}</td>
                <td>{s7R5t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>6</td>
                <td>{s7R6a}</td>
                <td>{s7R6o}</td>
                <td>{s7R6t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>7</td>
                <td>{s7R7a}</td>
                <td>{s7R7o}</td>
                <td>{s7R7t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>8</td>
                <td>{s7R8a}</td>
                <td>{s7R8o}</td>
                <td>{s7R8t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>9</td>
                <td>{s7R9a}</td>
                <td>{s7R9o}</td>
                <td>{s7R9t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>10</td>
                <td>{s7R10a}</td>
                <td>{s7R10o}</td>
                <td>{s7R10t}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td>11</td>
                <td>{s7R11a}</td>
                <td>{s7R11o}</td>
                <td>{s7R11t}</td>
              </tr>
              <tr>
                <td>12</td>
                <td>{s7R12a}</td>
                <td>{s7R12o}</td>
                <td>{s7R12t}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s8H2}</h2>
        <p className="mb-3">{s8P1}</p>
        <h3 className="text-lg font-semibold mt-6 mb-2">{s8HShort}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s8S1}</li>
          <li>{s8S2}</li>
          <li>{s8S3}</li>
        </ul>
        <p className="mb-3">{s8Pri}</p>
        <p>
          <strong>{s8R9S}</strong>
          {s8R9T}
        </p>
        <p>
          <strong>{s8R10S}</strong>
          {s8R10T}
        </p>
        <p>
          <strong>{s8R11S}</strong>
          {s8R11T}
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s9H2}</h2>
        <p className="mb-3">{s9P1}</p>
        <ul className="list-disc ps-6 space-y-1 mb-4">
          <li>{s9G1}</li>
          <li>{s9G2}</li>
          <li>{s9G3}</li>
          <li>{s9G4}</li>
        </ul>
        <p className="mb-3">{s9P2}</p>
        <ul className="list-disc ps-6 space-y-1 mb-4">
          <li>{s9N1}</li>
          <li>{s9N2}</li>
          <li>{s9N3}</li>
        </ul>
        <p>{s9P3}</p>
      </section>

      {/* Section 11 - Audit findings */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s11H2}</h2>
        <p className="mb-3">{s11P1}</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s11Ah3}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s11Al1}</li>
          <li>{s11Al2}</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s11Bh3}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s11Bl1}</li>
          <li>{s11Bl2}</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s11Ch3}</h3>
        <ul className="list-disc ps-6 space-y-2 mb-4">
          <li>{s11Cl1}</li>
          <li>{s11Cl2}</li>
          <li>{s11Cl3}</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s11Dh3}</h3>
        <p className="mb-4">{s11Dp}</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s11Eh3}</h3>
        <p className="mb-4">{s11Ep}</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">{s11Fh3}</h3>
        <p className="mb-4">{s11Fp}</p>

        <p className="text-muted-foreground text-sm mt-6">{s11Out}</p>
      </section>

      {/* Section 10 - Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s10H2}</h2>
        <p className="mb-3">{s10P1}</p>
        <p className="mb-3">
          <strong>{s10Email}</strong>
        </p>
        <p className="mb-3">{s10P2}</p>
        <p className="text-muted-foreground text-sm mt-6">{s10Out}</p>
      </section>
    </>
  )
}
