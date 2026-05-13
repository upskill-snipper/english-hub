import type { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Data Processing',
  description:
    'How The English Hub processes personal data for schools and institutions. UK GDPR compliant data processing agreements and transparent practices.',
  alternates: { canonical: 'https://theenglishhub.app/data-processing' },
  openGraph: {
    title: 'Data Processing — The English Hub',
    description:
      'How The English Hub processes personal data for schools and institutions. UK GDPR compliant data processing agreements and transparent practices.',
  },
}

export default async function DataProcessingPage() {
  const v = await tMany([
    'data_processing.h1',
    'data_processing.updated',
    // Section 1
    'legal_long.data_processing.s1.h2',
    'legal_long.data_processing.s1.p1',
    'legal_long.data_processing.s1.p2_pre',
    'legal_long.data_processing.s1.p2_controller',
    'legal_long.data_processing.s1.p2_mid1',
    'legal_long.data_processing.s1.p2_processor',
    'legal_long.data_processing.s1.p2_post',
    // Section 2
    'legal_long.data_processing.s2.h2',
    'legal_long.data_processing.s2.p1_pre',
    'legal_long.data_processing.s2.p1_strong',
    'legal_long.data_processing.s2.p1_post',
    'legal_long.data_processing.s2.p2_pre',
    'legal_long.data_processing.s2.p2_strong',
    'legal_long.data_processing.s2.p2_post',
    'legal_long.data_processing.s2.p3',
    // Section 3
    'legal_long.data_processing.s3.h2',
    'legal_long.data_processing.s3.p1',
    'legal_long.data_processing.s3.h3_student',
    'legal_long.data_processing.s3.st_li1',
    'legal_long.data_processing.s3.st_li2',
    'legal_long.data_processing.s3.st_li3',
    'legal_long.data_processing.s3.st_li4',
    'legal_long.data_processing.s3.st_li5',
    'legal_long.data_processing.s3.st_li6',
    'legal_long.data_processing.s3.st_li7',
    'legal_long.data_processing.s3.h3_teacher',
    'legal_long.data_processing.s3.tc_li1',
    'legal_long.data_processing.s3.tc_li2',
    'legal_long.data_processing.s3.tc_li3',
    'legal_long.data_processing.s3.p_outro',
    // Section 4
    'legal_long.data_processing.s4.h2',
    'legal_long.data_processing.s4.p1',
    'legal_long.data_processing.s4.li1',
    'legal_long.data_processing.s4.li2',
    'legal_long.data_processing.s4.li3',
    'legal_long.data_processing.s4.li4',
    'legal_long.data_processing.s4.li5',
    'legal_long.data_processing.s4.li6',
    'legal_long.data_processing.s4.li7',
    // Section 5
    'legal_long.data_processing.s5.h2',
    'legal_long.data_processing.s5.p1',
    'legal_long.data_processing.s5.h3_enc',
    'legal_long.data_processing.s5.enc_li1',
    'legal_long.data_processing.s5.enc_li2',
    'legal_long.data_processing.s5.enc_li3',
    'legal_long.data_processing.s5.h3_acc',
    'legal_long.data_processing.s5.acc_li1',
    'legal_long.data_processing.s5.acc_li2',
    'legal_long.data_processing.s5.acc_li3',
    'legal_long.data_processing.s5.acc_li4',
    'legal_long.data_processing.s5.h3_inf',
    'legal_long.data_processing.s5.inf_li1',
    'legal_long.data_processing.s5.inf_li2',
    'legal_long.data_processing.s5.inf_li3',
    'legal_long.data_processing.s5.inf_li4',
    'legal_long.data_processing.s5.h3_org',
    'legal_long.data_processing.s5.org_li1',
    'legal_long.data_processing.s5.org_li2',
    'legal_long.data_processing.s5.org_li3',
    // Section 6
    'legal_long.data_processing.s6.h2',
    'legal_long.data_processing.s6.p1',
    'legal_long.data_processing.s6.t.col1',
    'legal_long.data_processing.s6.t.col2',
    'legal_long.data_processing.s6.t.col3',
    'legal_long.data_processing.s6.r1.c1',
    'legal_long.data_processing.s6.r1.c2',
    'legal_long.data_processing.s6.r1.c3',
    'legal_long.data_processing.s6.r2.c1',
    'legal_long.data_processing.s6.r2.c2',
    'legal_long.data_processing.s6.r2.c3',
    'legal_long.data_processing.s6.r3.c1',
    'legal_long.data_processing.s6.r3.c2',
    'legal_long.data_processing.s6.r3.c3',
    'legal_long.data_processing.s6.r4.c1',
    'legal_long.data_processing.s6.r4.c2',
    'legal_long.data_processing.s6.r4.c3',
    'legal_long.data_processing.s6.r5.c1',
    'legal_long.data_processing.s6.r5.c2',
    'legal_long.data_processing.s6.r5.c3',
    'legal_long.data_processing.s6.r6.c1',
    'legal_long.data_processing.s6.r6.c2',
    'legal_long.data_processing.s6.r6.c3',
    'legal_long.data_processing.s6.r7.c1',
    'legal_long.data_processing.s6.r7.c2',
    'legal_long.data_processing.s6.r7.c3',
    'legal_long.data_processing.s6.p_outro',
    // Section 7
    'legal_long.data_processing.s7.h2',
    'legal_long.data_processing.s7.p1',
    'legal_long.data_processing.s7.li1_strong',
    'legal_long.data_processing.s7.li1_text',
    'legal_long.data_processing.s7.li2_strong',
    'legal_long.data_processing.s7.li2_text',
    'legal_long.data_processing.s7.li3_strong',
    'legal_long.data_processing.s7.li3_text',
    'legal_long.data_processing.s7.li4_strong',
    'legal_long.data_processing.s7.li4_text',
    'legal_long.data_processing.s7.p_outro',
    // Section 8
    'legal_long.data_processing.s8.h2',
    'legal_long.data_processing.s8.p1',
    'legal_long.data_processing.s8.li1_pre',
    'legal_long.data_processing.s8.li1_strong',
    'legal_long.data_processing.s8.li1_post',
    'legal_long.data_processing.s8.li2',
    'legal_long.data_processing.s8.li3',
    'legal_long.data_processing.s8.li4',
    // Section 9
    'legal_long.data_processing.s9.h2',
    'legal_long.data_processing.s9.p1',
    'legal_long.data_processing.s9.p2',
    'legal_long.data_processing.s9.li1_strong',
    'legal_long.data_processing.s9.li1_text',
    'legal_long.data_processing.s9.li2_strong',
    'legal_long.data_processing.s9.li2_text',
    'legal_long.data_processing.s9.li3_strong',
    'legal_long.data_processing.s9.li3_text',
    // Section 10
    'legal_long.data_processing.s10.h2',
    'legal_long.data_processing.s10.p1',
    'legal_long.data_processing.s10.p2',
    // Section 11
    'legal_long.data_processing.s11.h2',
    'legal_long.data_processing.s11.p1',
    'legal_long.data_processing.s11.li1',
    'legal_long.data_processing.s11.li2',
    'legal_long.data_processing.s11.li3',
    'legal_long.data_processing.s11.li4',
    'legal_long.data_processing.s11.li5',
    'legal_long.data_processing.s11.li6',
    'legal_long.data_processing.s11.p2_pre',
    'legal_long.data_processing.s11.p2_post',
    // Section 12
    'data_processing.contact_h2',
    'data_processing.contact_body',
    'legal_long.data_processing.s12.li1_strong',
    'legal_long.data_processing.s12.li2_strong',
  ])
  let i = 0
  const n = () => v[i++]
  const h1 = n(),
    updated = n()
  const s1H2 = n(),
    s1P1 = n(),
    s1P2Pre = n(),
    s1P2Ctrl = n(),
    s1P2Mid = n(),
    s1P2Proc = n(),
    s1P2Post = n()
  const s2H2 = n(),
    s2P1Pre = n(),
    s2P1Strong = n(),
    s2P1Post = n(),
    s2P2Pre = n(),
    s2P2Strong = n(),
    s2P2Post = n(),
    s2P3 = n()
  const s3H2 = n(),
    s3P1 = n(),
    s3HStu = n(),
    s3St1 = n(),
    s3St2 = n(),
    s3St3 = n(),
    s3St4 = n(),
    s3St5 = n(),
    s3St6 = n(),
    s3St7 = n(),
    s3HTc = n(),
    s3Tc1 = n(),
    s3Tc2 = n(),
    s3Tc3 = n(),
    s3POut = n()
  const s4H2 = n(),
    s4P1 = n(),
    s4Li1 = n(),
    s4Li2 = n(),
    s4Li3 = n(),
    s4Li4 = n(),
    s4Li5 = n(),
    s4Li6 = n(),
    s4Li7 = n()
  const s5H2 = n(),
    s5P1 = n(),
    s5HEnc = n(),
    s5Enc1 = n(),
    s5Enc2 = n(),
    s5Enc3 = n(),
    s5HAcc = n(),
    s5Acc1 = n(),
    s5Acc2 = n(),
    s5Acc3 = n(),
    s5Acc4 = n(),
    s5HInf = n(),
    s5Inf1 = n(),
    s5Inf2 = n(),
    s5Inf3 = n(),
    s5Inf4 = n(),
    s5HOrg = n(),
    s5Org1 = n(),
    s5Org2 = n(),
    s5Org3 = n()
  const s6H2 = n(),
    s6P1 = n(),
    s6Tc1 = n(),
    s6Tc2 = n(),
    s6Tc3 = n(),
    s6R1c1 = n(),
    s6R1c2 = n(),
    s6R1c3 = n(),
    s6R2c1 = n(),
    s6R2c2 = n(),
    s6R2c3 = n(),
    s6R3c1 = n(),
    s6R3c2 = n(),
    s6R3c3 = n(),
    s6R4c1 = n(),
    s6R4c2 = n(),
    s6R4c3 = n(),
    s6R5c1 = n(),
    s6R5c2 = n(),
    s6R5c3 = n(),
    s6R6c1 = n(),
    s6R6c2 = n(),
    s6R6c3 = n(),
    s6R7c1 = n(),
    s6R7c2 = n(),
    s6R7c3 = n(),
    s6POut = n()
  const s7H2 = n(),
    s7P1 = n(),
    s7Li1S = n(),
    s7Li1T = n(),
    s7Li2S = n(),
    s7Li2T = n(),
    s7Li3S = n(),
    s7Li3T = n(),
    s7Li4S = n(),
    s7Li4T = n(),
    s7POut = n()
  const s8H2 = n(),
    s8P1 = n(),
    s8L1Pre = n(),
    s8L1S = n(),
    s8L1Post = n(),
    s8L2 = n(),
    s8L3 = n(),
    s8L4 = n()
  const s9H2 = n(),
    s9P1 = n(),
    s9P2 = n(),
    s9L1S = n(),
    s9L1T = n(),
    s9L2S = n(),
    s9L2T = n(),
    s9L3S = n(),
    s9L3T = n()
  const s10H2 = n(),
    s10P1 = n(),
    s10P2 = n()
  const s11H2 = n(),
    s11P1 = n(),
    s11Li1 = n(),
    s11Li2 = n(),
    s11Li3 = n(),
    s11Li4 = n(),
    s11Li5 = n(),
    s11Li6 = n(),
    s11P2Pre = n(),
    s11P2Post = n()
  const s12H2 = n(),
    s12P1 = n(),
    s12Li1S = n(),
    s12Li2S = n()

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h1}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{updated}</p>

      <div className="mt-8 prose dark:prose-invert max-w-none space-y-8">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s1H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s1P1}</p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            {s1P2Pre}
            <strong className="text-foreground">{s1P2Ctrl}</strong>
            {s1P2Mid}
            <strong className="text-foreground">{s1P2Proc}</strong>
            {s1P2Post}
          </p>
        </section>

        {/* 2. Data Controller and Data Processor */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s2H2}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {s2P1Pre}
            <strong className="text-foreground">{s2P1Strong}</strong>
            {s2P1Post}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            {s2P2Pre}
            <strong className="text-foreground">{s2P2Strong}</strong>
            {s2P2Post}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">{s2P3}</p>
        </section>

        {/* 3. Categories of Personal Data Processed */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s3H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s3P1}</p>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">{s3HStu}</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s3St1}</li>
            <li>{s3St2}</li>
            <li>{s3St3}</li>
            <li>{s3St4}</li>
            <li>{s3St5}</li>
            <li>{s3St6}</li>
            <li>{s3St7}</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">{s3HTc}</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s3Tc1}</li>
            <li>{s3Tc2}</li>
            <li>{s3Tc3}</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mt-3">{s3POut}</p>
        </section>

        {/* 4. Purpose */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s4H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s4P1}</p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>{s4Li1}</li>
            <li>{s4Li2}</li>
            <li>{s4Li3}</li>
            <li>{s4Li4}</li>
            <li>{s4Li5}</li>
            <li>{s4Li6}</li>
            <li>{s4Li7}</li>
          </ul>
        </section>

        {/* 5. Security */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s5H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s5P1}</p>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">{s5HEnc}</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s5Enc1}</li>
            <li>{s5Enc2}</li>
            <li>{s5Enc3}</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">{s5HAcc}</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s5Acc1}</li>
            <li>{s5Acc2}</li>
            <li>{s5Acc3}</li>
            <li>{s5Acc4}</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">{s5HInf}</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s5Inf1}</li>
            <li>{s5Inf2}</li>
            <li>{s5Inf3}</li>
            <li>{s5Inf4}</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">{s5HOrg}</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s5Org1}</li>
            <li>{s5Org2}</li>
            <li>{s5Org3}</li>
          </ul>
        </section>

        {/* 6. Sub-Processors */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s6H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s6P1}</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">{s6Tc1}</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">{s6Tc2}</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">{s6Tc3}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{s6R1c1}</td>
                  <td className="px-4 py-3">{s6R1c2}</td>
                  <td className="px-4 py-3">{s6R1c3}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{s6R2c1}</td>
                  <td className="px-4 py-3">{s6R2c2}</td>
                  <td className="px-4 py-3">{s6R2c3}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{s6R3c1}</td>
                  <td className="px-4 py-3">{s6R3c2}</td>
                  <td className="px-4 py-3">{s6R3c3}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{s6R4c1}</td>
                  <td className="px-4 py-3">{s6R4c2}</td>
                  <td className="px-4 py-3">{s6R4c3}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{s6R5c1}</td>
                  <td className="px-4 py-3">{s6R5c2}</td>
                  <td className="px-4 py-3">{s6R5c3}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{s6R6c1}</td>
                  <td className="px-4 py-3">{s6R6c2}</td>
                  <td className="px-4 py-3">{s6R6c3}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">{s6R7c1}</td>
                  <td className="px-4 py-3">{s6R7c2}</td>
                  <td className="px-4 py-3">{s6R7c3}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-3">{s6POut}</p>
        </section>

        {/* 7. Retention */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s7H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s7P1}</p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">{s7Li1S}</strong>
              {s7Li1T}
            </li>
            <li>
              <strong className="text-foreground">{s7Li2S}</strong>
              {s7Li2T}
            </li>
            <li>
              <strong className="text-foreground">{s7Li3S}</strong>
              {s7Li3T}
            </li>
            <li>
              <strong className="text-foreground">{s7Li4S}</strong>
              {s7Li4T}
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">{s7POut}</p>
        </section>

        {/* 8. Breach */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s8H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s8P1}</p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              {s8L1Pre}
              <strong className="text-foreground">{s8L1S}</strong>
              {s8L1Post}
            </li>
            <li>{s8L2}</li>
            <li>{s8L3}</li>
            <li>{s8L4}</li>
          </ul>
        </section>

        {/* 9. International transfers */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s9H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s9P1}</p>
          <p className="text-muted-foreground leading-relaxed mt-3">{s9P2}</p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">{s9L1S}</strong>
              {s9L1T}
            </li>
            <li>
              <strong className="text-foreground">{s9L2S}</strong>
              {s9L2T}
            </li>
            <li>
              <strong className="text-foreground">{s9L3S}</strong>
              {s9L3T}
            </li>
          </ul>
        </section>

        {/* 10. Data Subject Rights */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s10H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s10P1}</p>
          <p className="text-muted-foreground leading-relaxed mt-3">{s10P2}</p>
        </section>

        {/* 11. Requesting a DPA */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s11H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s11P1}</p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>{s11Li1}</li>
            <li>{s11Li2}</li>
            <li>{s11Li3}</li>
            <li>{s11Li4}</li>
            <li>{s11Li5}</li>
            <li>{s11Li6}</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            {s11P2Pre}
            <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
              info@Upskillenergy.com
            </a>
            {s11P2Post}
          </p>
        </section>

        {/* 12. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{s12H2}</h2>
          <p className="text-muted-foreground leading-relaxed">{s12P1}</p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">{s12Li1S}</strong>
              <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">{s12Li2S}</strong>
              <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
                info@Upskillenergy.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
