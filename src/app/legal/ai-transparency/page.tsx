import { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'AI Transparency',
  description:
    'How our AI works at The English Hub — what it does, its limitations, and your rights.',
}

export default async function AITransparencyPage() {
  const v = await tMany([
    'legal_long.ai_transparency.h1',
    'legal_long.ai_transparency.brand_pre',
    'legal_long.ai_transparency.brand_mid',
    'legal_long.ai_transparency.updated',
    'legal_long.ai_transparency.intro',
    // S1
    'legal_long.ai_transparency.s1.h2',
    'legal_long.ai_transparency.s1.p1',
    'legal_long.ai_transparency.s1.l1_s',
    'legal_long.ai_transparency.s1.l1_t',
    'legal_long.ai_transparency.s1.l2_s',
    'legal_long.ai_transparency.s1.l2_t',
    'legal_long.ai_transparency.s1.l3_s',
    'legal_long.ai_transparency.s1.l3_t',
    'legal_long.ai_transparency.s1.l4_s',
    'legal_long.ai_transparency.s1.l4_t',
    'legal_long.ai_transparency.s1.p_outro',
    // S2
    'legal_long.ai_transparency.s2.h2',
    'legal_long.ai_transparency.s2.l1_s',
    'legal_long.ai_transparency.s2.l1_t',
    'legal_long.ai_transparency.s2.l2_s',
    'legal_long.ai_transparency.s2.l2_t',
    'legal_long.ai_transparency.s2.l3_s',
    'legal_long.ai_transparency.s2.l3_t',
    'legal_long.ai_transparency.s2.l4_s',
    'legal_long.ai_transparency.s2.l4_t',
    'legal_long.ai_transparency.s2.box_h',
    'legal_long.ai_transparency.s2.box_p',
    // S3
    'legal_long.ai_transparency.s3.h2',
    'legal_long.ai_transparency.s3.l1_s',
    'legal_long.ai_transparency.s3.l1_t',
    'legal_long.ai_transparency.s3.l2_s',
    'legal_long.ai_transparency.s3.l2_t',
    'legal_long.ai_transparency.s3.l3_s',
    'legal_long.ai_transparency.s3.l3_t',
    'legal_long.ai_transparency.s3.l4_s',
    'legal_long.ai_transparency.s3.l4_t',
    'legal_long.ai_transparency.s3.p_outro',
    // S4
    'legal_long.ai_transparency.s4.h2',
    'legal_long.ai_transparency.s4.p1',
    'legal_long.ai_transparency.s4.r1_h',
    'legal_long.ai_transparency.s4.r1_p',
    'legal_long.ai_transparency.s4.r2_h',
    'legal_long.ai_transparency.s4.r2_p',
    'legal_long.ai_transparency.s4.r3_h',
    'legal_long.ai_transparency.s4.r3_p',
    'legal_long.ai_transparency.s4.r4_h',
    'legal_long.ai_transparency.s4.r4_p_pre',
    'legal_long.ai_transparency.s4.r4_p_path',
    'legal_long.ai_transparency.s4.r4_p_post',
    'legal_long.ai_transparency.s4.p_outro',
    // S5
    'legal_long.ai_transparency.s5.h2',
    'legal_long.ai_transparency.s5.l1_s',
    'legal_long.ai_transparency.s5.l1_pre',
    'legal_long.ai_transparency.s5.l1_btn',
    'legal_long.ai_transparency.s5.l1_post',
    'legal_long.ai_transparency.s5.l2_s',
    'legal_long.ai_transparency.s5.l2_t',
    'legal_long.ai_transparency.s5.l3_s',
    'legal_long.ai_transparency.s5.l3_pre',
    'legal_long.ai_transparency.s5.l3_path',
    'legal_long.ai_transparency.s5.box_h',
    'legal_long.ai_transparency.s5.box_l1_pre',
    'legal_long.ai_transparency.s5.box_l1_s',
    'legal_long.ai_transparency.s5.box_l2',
    'legal_long.ai_transparency.s5.box_l3_pre',
    'legal_long.ai_transparency.s5.box_l3_s',
    'legal_long.ai_transparency.s5.box_l4',
    'legal_long.ai_transparency.s5.box_p_outro',
    // S6
    'legal_long.ai_transparency.s6.h2',
    'legal_long.ai_transparency.s6.l1_s',
    'legal_long.ai_transparency.s6.l1_t',
    'legal_long.ai_transparency.s6.l2_s',
    'legal_long.ai_transparency.s6.l2_t',
    'legal_long.ai_transparency.s6.l3_s',
    'legal_long.ai_transparency.s6.l3_t',
    'legal_long.ai_transparency.s6.l4_s',
    'legal_long.ai_transparency.s6.l4_t',
    // S7
    'legal_long.ai_transparency.s7.h2',
    'legal_long.ai_transparency.s7.h3_collect',
    'legal_long.ai_transparency.s7.c_li1',
    'legal_long.ai_transparency.s7.c_li2',
    'legal_long.ai_transparency.s7.c_li3',
    'legal_long.ai_transparency.s7.h3_no',
    'legal_long.ai_transparency.s7.n_li1_pre',
    'legal_long.ai_transparency.s7.n_li1_s',
    'legal_long.ai_transparency.s7.n_li1_post',
    'legal_long.ai_transparency.s7.n_li2_pre',
    'legal_long.ai_transparency.s7.n_li2_s',
    'legal_long.ai_transparency.s7.n_li2_post',
    'legal_long.ai_transparency.s7.n_li3_pre',
    'legal_long.ai_transparency.s7.n_li3_s',
    'legal_long.ai_transparency.s7.n_li3_post',
    'legal_long.ai_transparency.s7.h3_keep',
    'legal_long.ai_transparency.s7.k_li1',
    'legal_long.ai_transparency.s7.k_li2_pre',
    'legal_long.ai_transparency.s7.k_li2_s',
    'legal_long.ai_transparency.s7.k_li3',
    'legal_long.ai_transparency.s7.h3_kids',
    'legal_long.ai_transparency.s7.kid_li1',
    'legal_long.ai_transparency.s7.kid_li2',
    'legal_long.ai_transparency.s7.kid_li3',
    'legal_long.ai_transparency.s7.kid_li4',
    // Contact
    'legal_long.ai_transparency.contact.h2',
    'legal_long.ai_transparency.contact.p1',
    'legal_long.ai_transparency.contact.email_label',
    'legal_long.ai_transparency.contact.help_li',
    'legal_long.ai_transparency.contact.p2_pre',
    'legal_long.ai_transparency.contact.p2_s1',
    'legal_long.ai_transparency.contact.p2_mid',
    'legal_long.ai_transparency.contact.p2_s2',
    'legal_long.ai_transparency.contact.p2_post',
    'legal_long.ai_transparency.review_footer',
  ])
  let i = 0
  const n = () => v[i++]
  const h1 = n(),
    brandPre = n(),
    brandMid = n(),
    updated = n(),
    intro = n()
  const s1H = n(),
    s1P = n(),
    s1L1s = n(),
    s1L1t = n(),
    s1L2s = n(),
    s1L2t = n(),
    s1L3s = n(),
    s1L3t = n(),
    s1L4s = n(),
    s1L4t = n(),
    s1Out = n()
  const s2H = n(),
    s2L1s = n(),
    s2L1t = n(),
    s2L2s = n(),
    s2L2t = n(),
    s2L3s = n(),
    s2L3t = n(),
    s2L4s = n(),
    s2L4t = n(),
    s2Bh = n(),
    s2Bp = n()
  const s3H = n(),
    s3L1s = n(),
    s3L1t = n(),
    s3L2s = n(),
    s3L2t = n(),
    s3L3s = n(),
    s3L3t = n(),
    s3L4s = n(),
    s3L4t = n(),
    s3Out = n()
  const s4H = n(),
    s4P = n(),
    s4R1h = n(),
    s4R1p = n(),
    s4R2h = n(),
    s4R2p = n(),
    s4R3h = n(),
    s4R3p = n(),
    s4R4h = n(),
    s4R4Pre = n(),
    s4R4Path = n(),
    s4R4Post = n(),
    s4Out = n()
  const s5H = n(),
    s5L1s = n(),
    s5L1Pre = n(),
    s5L1Btn = n(),
    s5L1Post = n(),
    s5L2s = n(),
    s5L2t = n(),
    s5L3s = n(),
    s5L3Pre = n(),
    s5L3Path = n(),
    s5Bh = n(),
    s5B1Pre = n(),
    s5B1s = n(),
    s5B2 = n(),
    s5B3Pre = n(),
    s5B3s = n(),
    s5B4 = n(),
    s5BOut = n()
  const s6H = n(),
    s6L1s = n(),
    s6L1t = n(),
    s6L2s = n(),
    s6L2t = n(),
    s6L3s = n(),
    s6L3t = n(),
    s6L4s = n(),
    s6L4t = n()
  const s7H = n(),
    s7Hc = n(),
    s7C1 = n(),
    s7C2 = n(),
    s7C3 = n(),
    s7Hn = n(),
    s7N1Pre = n(),
    s7N1s = n(),
    s7N1Post = n(),
    s7N2Pre = n(),
    s7N2s = n(),
    s7N2Post = n(),
    s7N3Pre = n(),
    s7N3s = n(),
    s7N3Post = n(),
    s7Hk = n(),
    s7K1 = n(),
    s7K2Pre = n(),
    s7K2s = n(),
    s7K3 = n(),
    s7Hki = n(),
    s7Ki1 = n(),
    s7Ki2 = n(),
    s7Ki3 = n(),
    s7Ki4 = n()
  const cH = n(),
    cP1 = n(),
    cEmL = n(),
    cHelp = n(),
    cP2Pre = n(),
    cP2s1 = n(),
    cP2Mid = n(),
    cP2s2 = n(),
    cP2Post = n(),
    rf = n()

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{h1}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>{brandPre}</strong>
        {brandMid}
        <br />
        {updated}
      </p>

      <p className="mb-8">{intro}</p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s1H}</h2>
        <p className="mb-3">{s1P}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{s1L1s}</strong>
            {s1L1t}
          </li>
          <li>
            <strong>{s1L2s}</strong>
            {s1L2t}
          </li>
          <li>
            <strong>{s1L3s}</strong>
            {s1L3t}
          </li>
          <li>
            <strong>{s1L4s}</strong>
            {s1L4t}
          </li>
        </ul>
        <p className="mt-3">{s1Out}</p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s2H}</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>{s2L1s}</strong>
            {s2L1t}
          </li>
          <li>
            <strong>{s2L2s}</strong>
            {s2L2t}
          </li>
          <li>
            <strong>{s2L3s}</strong>
            {s2L3t}
          </li>
          <li>
            <strong>{s2L4s}</strong>
            {s2L4t}
          </li>
        </ol>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold">{s2Bh}</p>
          <p>{s2Bp}</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s3H}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{s3L1s}</strong>
            {s3L1t}
          </li>
          <li>
            <strong>{s3L2s}</strong>
            {s3L2t}
          </li>
          <li>
            <strong>{s3L3s}</strong>
            {s3L3t}
          </li>
          <li>
            <strong>{s3L4s}</strong>
            {s3L4t}
          </li>
        </ul>
        <p className="mt-3">{s3Out}</p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s4H}</h2>
        <p className="mb-3">{s4P}</p>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">{s4R1h}</h3>
            <p className="text-sm">{s4R1p}</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">{s4R2h}</h3>
            <p className="text-sm">{s4R2p}</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">{s4R3h}</h3>
            <p className="text-sm">{s4R3p}</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">{s4R4h}</h3>
            <p className="text-sm">
              {s4R4Pre}
              <strong>{s4R4Path}</strong>
              {s4R4Post}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm">{s4Out}</p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s5H}</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>{s5L1s}</strong>
            {s5L1Pre}
            <strong>{s5L1Btn}</strong>
            {s5L1Post}
          </li>
          <li>
            <strong>{s5L2s}</strong>
            {s5L2t}
          </li>
          <li>
            <strong>{s5L3s}</strong>
            {s5L3Pre}
            <strong>{s5L3Path}</strong>
          </li>
        </ol>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="font-semibold mb-2">{s5Bh}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              {s5B1Pre}
              <strong>{s5B1s}</strong>
            </li>
            <li>{s5B2}</li>
            <li>
              {s5B3Pre}
              <strong>{s5B3s}</strong>
            </li>
            <li>{s5B4}</li>
          </ul>
          <p className="mt-2 font-semibold">{s5BOut}</p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s6H}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{s6L1s}</strong>
            {s6L1t}
          </li>
          <li>
            <strong>{s6L2s}</strong>
            {s6L2t}
          </li>
          <li>
            <strong>{s6L3s}</strong>
            {s6L3t}
          </li>
          <li>
            <strong>{s6L4s}</strong>
            {s6L4t}
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{s7H}</h2>

        <h3 className="text-lg font-semibold mb-2">{s7Hc}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>{s7C1}</li>
          <li>{s7C2}</li>
          <li>{s7C3}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{s7Hn}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            {s7N1Pre}
            <strong>{s7N1s}</strong>
            {s7N1Post}
          </li>
          <li>
            {s7N2Pre}
            <strong>{s7N2s}</strong>
            {s7N2Post}
          </li>
          <li>
            {s7N3Pre}
            <strong>{s7N3s}</strong>
            {s7N3Post}
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{s7Hk}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>{s7K1}</li>
          <li>
            {s7K2Pre}
            <strong>{s7K2s}</strong>
          </li>
          <li>{s7K3}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{s7Hki}</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>{s7Ki1}</li>
          <li>{s7Ki2}</li>
          <li>{s7Ki3}</li>
          <li>{s7Ki4}</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">{cH}</h2>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="mb-2">{cP1}</p>
          <ul className="space-y-1">
            <li>
              {cEmL}
              <a href="mailto:info@Upskillenergy.com">info@Upskillenergy.com</a>
            </li>
            <li>{cHelp}</li>
          </ul>
          <p className="mt-2">
            {cP2Pre}
            <strong>{cP2s1}</strong>
            {cP2Mid}
            <strong>{cP2s2}</strong>
            {cP2Post}
          </p>
        </div>
      </section>

      <p className="text-sm text-muted-foreground italic">{rf}</p>
    </>
  )
}
