import Link from 'next/link'
import { KS3 } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

export default async function KS3LandingPage() {
  const tr = await Promise.all([
    t('ks3.landing.eyebrow'), // 0
    t('ks3.landing.title'), // 1
    t('ks3.landing.lead'), // 2
    t('ks3.landing.arc_heading'), // 3
    t('ks3.landing.reading_progression_intro'), // 4
    t('ks3.landing.year_7_arc'), // 5
    t('ks3.landing.year_8_arc'), // 6
    t('ks3.landing.year_9_arc'), // 7
    t('ks3.landing.writing_progression'), // 8
    t('ks3.landing.three_years_heading'), // 9
    t('ks3.landing.view_year'), // 10  (label, e.g. "View Year")
    t('ks3.landing.weekly_framework_heading'), // 11
    t('ks3.landing.weekly_framework_intro'), // 12
    t('ks3.landing.lesson1_label'), // 13
    t('ks3.landing.lesson1_desc'), // 14
    t('ks3.landing.lesson2_label'), // 15
    t('ks3.landing.lesson2_desc'), // 16
    t('ks3.landing.lesson3_label'), // 17
    t('ks3.landing.lesson3_desc'), // 18
    t('ks3.landing.lesson4_label'), // 19
    t('ks3.landing.lesson4_desc'), // 20
    t('ks3.landing.lesson5_label'), // 21
    t('ks3.landing.lesson5_desc'), // 22
    t('ks3.landing.non_negotiables_heading'), // 23
    t('ks3.landing.non_negotiables_intro'), // 24
    t('ks3.landing.non_negotiables_1'), // 25
    t('ks3.landing.non_negotiables_2'), // 26
    t('ks3.landing.non_negotiables_3'), // 27
    t('ks3.landing.non_negotiables_4'), // 28
    t('ks3.landing.non_negotiables_5'), // 29
    t('ks3.landing.non_negotiables_6'), // 30
    t('ks3.landing.how_to_use_heading'), // 31
    t('ks3.landing.how_to_use_yearly'), // 32
    t('ks3.landing.how_to_use_termly'), // 33
    t('ks3.landing.how_to_use_weekly'), // 34
    t('ks3.landing.how_to_use_rubrics'), // 35
    t('ks3.landing.how_to_use_skills'), // 36
    t('ks3.landing.how_to_use_end_of_ks3'), // 37
    t('ks3.landing.bilingual_heading'), // 38
    t('ks3.landing.bilingual_body'), // 39
    t('ks3.landing.hooked_heading'), // 40
    t('ks3.landing.hooked_ai_marking'), // 41
    t('ks3.landing.hooked_reading'), // 42
    t('ks3.landing.hooked_vocab'), // 43
    t('ks3.landing.hooked_mocks'), // 44
    t('ks3.year_7_name'), // 45
    t('ks3.year_8_name'), // 46
    t('ks3.year_9_name'), // 47
    t('ks3.year_7'), // 48
    t('ks3.year_8'), // 49
    t('ks3.year_9'), // 50
  ])

  const yearNameTr: Record<number, string> = { 7: tr[45], 8: tr[46], 9: tr[47] }
  const yearLabelTr: Record<number, string> = { 7: tr[48], 8: tr[49], 9: tr[50] }

  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        {tr[0]}
      </p>
      <h1>{tr[1]}</h1>
      <p className="lead">{tr[2]}</p>

      <div className="not-prose my-6">
        <Link
          href="/ks3/ilowersecondary"
          className="group block rounded-2xl border border-primary/30 bg-primary/[0.04] p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.07]"
        >
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
            Exam preparation
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
            iLowerSecondary English exam hub →
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Sitting the Pearson Edexcel International Award in Lower Secondary English (LEH11)? The
            complete student hub: the specification and mark scheme, skill masterclasses for every
            reading and writing objective, question-type guides, six full original practice papers,
            a quiz, grammar lab and study plan.
          </p>
        </Link>
      </div>

      <h2>{tr[3]}</h2>
      <p>{tr[4]}</p>
      <ul>
        <li>
          <strong>{yearLabelTr[7]}</strong> — {tr[5]}
        </li>
        <li>
          <strong>{yearLabelTr[8]}</strong> — {tr[6]}
        </li>
        <li>
          <strong>{yearLabelTr[9]}</strong> — {tr[7]}
        </li>
      </ul>
      <p>{tr[8]}</p>

      <h2>{tr[9]}</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-3 my-6">
        {KS3.years.map((y) => (
          <Link
            key={y.number}
            href={`/ks3/year-${y.number}`}
            className="group rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              {yearLabelTr[y.number]}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {yearNameTr[y.number] ?? y.name.en.replace(`Year ${y.number} — `, '')}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{y.overview.en}</p>
            <p className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              {tr[10]} {y.number} →
            </p>
          </Link>
        ))}
      </div>

      <h2>{tr[11]}</h2>
      <p>{tr[12]}</p>
      <ol>
        <li>
          <strong>{tr[13]}</strong> {tr[14]}
        </li>
        <li>
          <strong>{tr[15]}</strong> {tr[16]}
        </li>
        <li>
          <strong>{tr[17]}</strong> {tr[18]}
        </li>
        <li>
          <strong>{tr[19]}</strong> {tr[20]}
        </li>
        <li>
          <strong>{tr[21]}</strong> {tr[22]}
        </li>
      </ol>

      <h2>{tr[23]}</h2>
      <p>{tr[24]}</p>
      <ul>
        <li>{tr[25]}</li>
        <li>{tr[26]}</li>
        <li>{tr[27]}</li>
        <li>{tr[28]}</li>
        <li>{tr[29]}</li>
        <li>{tr[30]}</li>
      </ul>

      <h2>{tr[31]}</h2>
      <ul>
        <li>
          {tr[32]} <Link href="/ks3/year-7">/ks3/year-7</Link>
        </li>
        <li>
          {tr[33]} <Link href="/ks3/year-7/term-1">/ks3/year-7/term-1</Link>
        </li>
        <li>
          {tr[34]} <Link href="/ks3/year-7/term-1/week-2">/ks3/year-7/term-1/week-2</Link>
        </li>
        <li>
          {tr[35]} <Link href="/ks3/rubrics">/ks3/rubrics</Link>
        </li>
        <li>
          {tr[36]} <Link href="/ks3/skills">/ks3/skills</Link>
        </li>
        <li>
          {tr[37]} <Link href="/ks3/end-of-ks3">/ks3/end-of-ks3</Link>
        </li>
      </ul>

      <h2>{tr[38]}</h2>
      <p>{tr[39]}</p>

      <h2>{tr[40]}</h2>
      <ul>
        <li>{tr[41]}</li>
        <li>{tr[42]}</li>
        <li>{tr[43]}</li>
        <li>{tr[44]}</li>
      </ul>
    </>
  )
}
