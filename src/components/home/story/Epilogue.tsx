import Link from 'next/link'
import { PRICING } from '@/constants/pricing'
import { getLocale } from '@/lib/i18n/t'
import { PrimaryCta } from './PrimaryCta'
import { TextLink } from './TextLink'
import { fill, resolveCopy } from './copy'

/** "£3.99", "£99", "£4,000": the constants, printed the way the brief prints them. */
function money(n: number): string {
  return `£${n.toLocaleString('en-GB', {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`
}

/**
 * The epilogue: the primary call to action returns, with what the trial
 * covers, the free list and the Student plan price beside its planned
 * standard price, labelled as planned. Every price is read from
 * src/constants/pricing.ts; the words around them come from the dictionary.
 *
 * Then "Also on the site": one short card row for the audiences the story
 * does not address directly. The schools card carries the permitted Founding
 * School line and nothing else: no pilot, no other price. The Arabic card is
 * left out on the Arabic surface itself.
 */
export async function Epilogue() {
  const locale = await getLocale()
  const c = await resolveCopy({
    eyebrow: 'home.story.end.eyebrow',
    h2: 'home.story.end.h2',
    sub: 'home.story.end.sub',
    guide: 'home.story.end.guide',
    quest: 'home.story.end.quest',
    freeLabel: 'home.story.end.free_label',
    freeList: 'home.story.end.free_list',
    planLabel: 'home.story.end.plan_label',
    planPrice: 'home.story.end.plan_price',
    pricingLink: 'home.story.end.pricing_link',
    alsoHeading: 'home.story.also.heading',
    levels: 'home.story.also.levels',
    parentsTitle: 'home.story.also.parents.title',
    parentsBody: 'home.story.also.parents.body',
    parentsLink: 'home.story.also.parents.link',
    teachersTitle: 'home.story.also.teachers.title',
    teachersBody: 'home.story.also.teachers.body',
    teachersLink: 'home.story.also.teachers.link',
    schoolsTitle: 'home.story.also.schools.title',
    schoolsBody: 'home.story.also.schools.body',
    schoolsLink: 'home.story.also.schools.link',
    ieltsTitle: 'home.story.also.ielts.title',
    ieltsBody: 'home.story.also.ielts.body',
    ieltsLink: 'home.story.also.ielts.link',
    ealTitle: 'home.story.also.eal.title',
    ealBody: 'home.story.also.eal.body',
    ealLink: 'home.story.also.eal.link',
    arabicTitle: 'home.story.also.arabic.title',
    arabicBody: 'home.story.also.arabic.body',
    arabicLink: 'home.story.also.arabic.link',
  })

  const planPrice = fill(c.planPrice, {
    monthly: money(PRICING.STUDENT_MONTHLY),
    annual: money(PRICING.STUDENT_ANNUAL),
    std_monthly: money(PRICING.STUDENT_MONTHLY_STANDARD),
    std_annual: money(PRICING.STUDENT_ANNUAL_STANDARD),
  })

  const cards = [
    {
      id: 'parents',
      title: c.parentsTitle,
      body: c.parentsBody,
      link: c.parentsLink,
      href: '/for-parents',
    },
    {
      id: 'teachers',
      title: c.teachersTitle,
      body: fill(c.teachersBody, {
        monthly: money(PRICING.TEACHER_MONTHLY),
        annual: money(PRICING.TEACHER_ANNUAL),
      }),
      link: c.teachersLink,
      href: '/teachers',
    },
    {
      id: 'schools',
      title: c.schoolsTitle,
      body: fill(c.schoolsBody, {
        price: money(PRICING.FOUNDER_SCHOOL_MIN),
        std: money(PRICING.SCHOOL_STANDARD),
      }),
      link: c.schoolsLink,
      href: '/schools',
    },
    {
      id: 'ielts',
      title: c.ieltsTitle,
      body: c.ieltsBody,
      link: c.ieltsLink,
      href: '/ielts/diagnostic',
    },
    { id: 'eal', title: c.ealTitle, body: c.ealBody, link: c.ealLink, href: '/eal' },
    { id: 'arabic', title: c.arabicTitle, body: c.arabicBody, link: c.arabicLink, href: '/ar' },
  ].filter((card) => !(card.id === 'arabic' && locale === 'ar'))

  return (
    <>
      <section aria-labelledby="end-h" className="pb-4 pt-[72px] lg:pt-24">
        <div className="mx-auto w-full max-w-[760px] px-4">
          <div className="grid justify-items-center gap-5 text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-clay-700 dark:text-clay-300">
              {c.eyebrow}
            </p>
            <h2
              id="end-h"
              className="font-serif text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-[56px] lg:text-7xl"
            >
              {c.h2}
            </h2>
            <p className="max-w-[46ch] text-lg leading-snug text-muted-foreground sm:text-xl">
              {c.sub}
            </p>
            <PrimaryCta center />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              <TextLink href="/revision/texts" muted>
                {c.guide}
              </TextLink>
              <TextLink href="/games/texts" muted>
                {c.quest}
              </TextLink>
            </div>
          </div>
          <div className="mt-10 grid gap-3.5 rounded-[28px] bg-muted p-6 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="font-semibold text-foreground">{c.freeLabel}</strong> {c.freeList}
            </p>
            <p>
              <strong className="font-semibold text-foreground">{c.planLabel}</strong> {planPrice}{' '}
              <Link
                href="/pricing"
                className="font-medium text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                {c.pricingLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="also-h" className="pb-20 pt-14 lg:pb-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-5 px-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2
              id="also-h"
              className="font-serif text-[26px] font-medium tracking-tight text-foreground"
            >
              {c.alsoHeading}
            </h2>
            <p className="font-mono text-xs tracking-[0.04em] text-muted-foreground">{c.levels}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li
                key={card.id}
                className="grid content-start gap-2.5 rounded-[28px] border border-border/60 bg-card p-[22px] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none dark:border-border"
              >
                <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{card.body}</p>
                <TextLink href={card.href} className="min-h-10">
                  {card.link}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
