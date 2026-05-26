import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PressHero, PressSection, StatPlaceholder } from '@/components/press/PressLayout'
import { Mail, Download, ExternalLink, Building2, FileText } from 'lucide-react'
import { tMany } from '@/lib/i18n/t'

// NOTE: British English throughout. No fabricated stats, press quotes, or awards.
//       2026-05-04: Founder references removed - the platform is presented
//       as a product, not a personal brand. Press enquiries route to the
//       press@ inbox, not a named founder.
//       2026-05-13: Wired through i18n (`press.*` namespace). All user-facing
//       strings now route through the dictionary so the AR / EN toggle
//       flips this page in step with the rest of the site.

export default async function PressPage() {
  const [
    heroEyebrow,
    heroTitle,
    heroLede,
    overviewEyebrow,
    overviewTitle,
    overviewP1,
    overviewP2,
    factsEyebrow,
    factsTitle,
    factsEntityLabel,
    factsEntityName,
    factsEntityCompanyNo,
    factsEntityJurisdiction,
    factsOfficeLabel,
    factsOfficeShort,
    factsOfficeBodyPre,
    factsOfficeBodyPost,
    factsIcoLabel,
    factsIcoRegistration,
    factsIcoController,
    factsFoundedLabel,
    factsFoundedYear,
    factsFoundedBootstrapped,
    statsEyebrow,
    statsTitle,
    statsLede,
    statsActivePupils,
    statsEssaysMarked,
    statsTeachersOnboarded,
    statsSchoolsInProgramme,
    productEyebrow,
    productTitle,
    productAudienceH3,
    productAudiencePupils,
    productAudienceParents,
    productAudienceTeachers,
    productAudienceHeads,
    productPricingH3,
    productPricingPupilStrong,
    productPricingPupilBody,
    productPricingTeacherStrong,
    productPricingTeacherBody,
    productPricingFoundingStrong,
    productPricingFoundingBody,
    productPricingGbpNote,
    productDistinctH3,
    productDistinctBoards,
    productDistinctPlainEnglish,
    productDistinctBoardSelection,
    productDistinctChildrensCode,
    contactEyebrow,
    contactTitle,
    contactBodyPre,
    contactBodyPost,
    contactCtaEmail,
    contactCtaGeneral,
    kitEyebrow,
    kitTitle,
    kitBody,
    kitArchiveTitle,
    kitArchiveBodyPre,
    kitArchiveBodyMid,
    kitArchiveBodyPost,
    kitDownloadDisabled,
    kitDownloadTitle,
    coverageEyebrow,
    coverageTitle,
    coverageNone,
    awardsEyebrow,
    awardsTitle,
    awardsNone,
    awardsTrustpilot,
    footerEntity,
    footerBrandLine,
  ] = await tMany([
    'press.hero.eyebrow',
    'press.hero.title',
    'press.hero.lede',
    'press.overview.eyebrow',
    'press.overview.title',
    'press.overview.p1',
    'press.overview.p2',
    'press.facts.eyebrow',
    'press.facts.title',
    'press.facts.entity.label',
    'press.facts.entity.name',
    'press.facts.entity.company_no',
    'press.facts.entity.jurisdiction',
    'press.facts.office.label',
    'press.facts.office.short',
    'press.facts.office.body_pre',
    'press.facts.office.body_post',
    'press.facts.ico.label',
    'press.facts.ico.registration',
    'press.facts.ico.controller',
    'press.facts.founded.label',
    'press.facts.founded.year',
    'press.facts.founded.bootstrapped',
    'press.stats.eyebrow',
    'press.stats.title',
    'press.stats.lede',
    'press.stats.active_pupils',
    'press.stats.essays_marked',
    'press.stats.teachers_onboarded',
    'press.stats.schools_in_programme',
    'press.product.eyebrow',
    'press.product.title',
    'press.product.audience.h3',
    'press.product.audience.pupils',
    'press.product.audience.parents',
    'press.product.audience.teachers',
    'press.product.audience.heads',
    'press.product.pricing.h3',
    'press.product.pricing.pupil_strong',
    'press.product.pricing.pupil_body',
    'press.product.pricing.teacher_strong',
    'press.product.pricing.teacher_body',
    'press.product.pricing.founding_strong',
    'press.product.pricing.founding_body',
    'press.product.pricing.gbp_note',
    'press.product.distinct.h3',
    'press.product.distinct.boards',
    'press.product.distinct.plain_english',
    'press.product.distinct.board_selection',
    'press.product.distinct.childrens_code',
    'press.contact.eyebrow',
    'press.contact.title',
    'press.contact.body_pre',
    'press.contact.body_post',
    'press.contact.cta.email',
    'press.contact.cta.general',
    'press.kit.eyebrow',
    'press.kit.title',
    'press.kit.body',
    'press.kit.archive_title',
    'press.kit.archive_body_pre',
    'press.kit.archive_body_mid',
    'press.kit.archive_body_post',
    'press.kit.download_disabled',
    'press.kit.download_title',
    'press.coverage.eyebrow',
    'press.coverage.title',
    'press.coverage.none',
    'press.awards.eyebrow',
    'press.awards.title',
    'press.awards.none',
    'press.awards.trustpilot',
    'press.footer.entity',
    'press.footer.brand_line',
  ])

  return (
    <main className="min-h-screen bg-background">
      <PressHero eyebrow={heroEyebrow} title={heroTitle} lede={heroLede} />

      {/* 60-second overview */}
      <PressSection eyebrow={overviewEyebrow} title={overviewTitle}>
        <p>{overviewP1}</p>
        <p>{overviewP2}</p>
      </PressSection>

      {/* Company facts */}
      <PressSection eyebrow={factsEyebrow} title={factsTitle}>
        <div className="not-prose grid sm:grid-cols-2 gap-4">
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              {factsEntityLabel}
            </p>
            <p className="font-semibold text-foreground">{factsEntityName}</p>
            <p className="text-sm text-muted-foreground mt-1">{factsEntityCompanyNo}</p>
            <p className="text-sm text-muted-foreground">{factsEntityJurisdiction}</p>
          </Card>
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              {factsOfficeLabel}
            </p>
            <p className="text-sm text-foreground">{factsOfficeShort}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {factsOfficeBodyPre}{' '}
              <a
                href="mailto:press@theenglishhub.app"
                className="text-primary underline underline-offset-4"
              >
                press@theenglishhub.app
              </a>
              {factsOfficeBodyPost}
            </p>
          </Card>
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              {factsIcoLabel}
            </p>
            <p className="text-sm text-foreground">{factsIcoRegistration}</p>
            <p className="text-sm text-muted-foreground mt-1">{factsIcoController}</p>
          </Card>
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              {factsFoundedLabel}
            </p>
            <p className="text-sm text-foreground">{factsFoundedYear}</p>
            <p className="text-sm text-muted-foreground mt-1">{factsFoundedBootstrapped}</p>
          </Card>
        </div>
      </PressSection>

      {/* Key stats (placeholders, honest) */}
      <PressSection eyebrow={statsEyebrow} title={statsTitle}>
        <p className="text-muted-foreground">{statsLede}</p>
        <div className="not-prose mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatPlaceholder label={statsActivePupils} />
          <StatPlaceholder label={statsEssaysMarked} />
          <StatPlaceholder label={statsTeachersOnboarded} />
          <StatPlaceholder label={statsSchoolsInProgramme} />
        </div>
      </PressSection>

      {/* Product details */}
      <PressSection eyebrow={productEyebrow} title={productTitle}>
        <h3 className="font-serif text-xl text-foreground">{productAudienceH3}</h3>
        <ul>
          <li>{productAudiencePupils}</li>
          <li>{productAudienceParents}</li>
          <li>{productAudienceTeachers}</li>
          <li>{productAudienceHeads}</li>
        </ul>

        <h3 className="font-serif text-xl text-foreground mt-8">{productPricingH3}</h3>
        <ul>
          <li>
            <strong>{productPricingPupilStrong}</strong> {productPricingPupilBody}
          </li>
          <li>
            <strong>{productPricingTeacherStrong}</strong> {productPricingTeacherBody}
          </li>
          <li>
            <strong>{productPricingFoundingStrong}</strong> {productPricingFoundingBody}
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">{productPricingGbpNote}</p>

        <h3 className="font-serif text-xl text-foreground mt-8">{productDistinctH3}</h3>
        <ul>
          <li>{productDistinctBoards}</li>
          <li>{productDistinctPlainEnglish}</li>
          <li>{productDistinctBoardSelection}</li>
          <li>{productDistinctChildrensCode}</li>
        </ul>
      </PressSection>

      {/* Press contact */}
      <PressSection eyebrow={contactEyebrow} title={contactTitle}>
        <p>
          {contactBodyPre}{' '}
          <a
            href="mailto:press@theenglishhub.app"
            className="text-primary underline underline-offset-4"
          >
            press@theenglishhub.app
          </a>
          {contactBodyPost}
        </p>
        <div className="not-prose mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            size="lg"
            className="h-12"
            render={<a href="mailto:press@theenglishhub.app" />}
          >
            <Mail className="w-4 h-4 mr-2" />
            {contactCtaEmail}
          </Button>
          <Button variant="outline" size="lg" className="h-12" render={<Link href="/contact" />}>
            {contactCtaGeneral}
          </Button>
        </div>
      </PressSection>

      {/* Founder bio intentionally not surfaced - the platform is
          presented as a product, not a personal brand. Press enquiries
          route to press@theenglishhub.app via the press desk above. */}

      {/* Press kit */}
      <PressSection eyebrow={kitEyebrow} title={kitTitle}>
        <p>{kitBody}</p>
        <div className="not-prose mt-6">
          <Card className="p-6 border-dashed border-border/60 bg-card/40">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{kitArchiveTitle}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {kitArchiveBodyPre}{' '}
                  <a
                    href="mailto:press@theenglishhub.app"
                    className="text-primary underline underline-offset-4"
                  >
                    press@theenglishhub.app
                  </a>{' '}
                  {kitArchiveBodyMid}
                  {kitArchiveBodyPost}
                </p>
                <div className="mt-4">
                  {/* Press kit ZIP coming soon. Replace with real download once /public/brand/press-kit.zip exists. */}
                  <Button
                    variant="secondary"
                    size="sm"
                    disabled
                    aria-disabled="true"
                    title={kitDownloadTitle}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {kitDownloadDisabled}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </PressSection>

      {/* Recent coverage */}
      <PressSection eyebrow={coverageEyebrow} title={coverageTitle}>
        <div className="not-prose">
          <Card className="p-6 border-border/40 bg-card/40">
            <p className="text-sm text-muted-foreground">{coverageNone}</p>
          </Card>
        </div>
      </PressSection>

      {/* Awards */}
      <PressSection eyebrow={awardsEyebrow} title={awardsTitle}>
        <div className="not-prose">
          <Card className="p-6 border-border/40 bg-card/40">
            <p className="text-sm text-muted-foreground">{awardsNone}</p>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                render={
                  <a
                    href="https://uk.trustpilot.com/review/theenglishhub.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {awardsTrustpilot}
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                }
              />
            </div>
          </Card>
        </div>
      </PressSection>

      {/* Footer-ish signpost */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <Building2 className="w-3.5 h-3.5" />
            {footerEntity}
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">{footerBrandLine}</p>
        </div>
      </section>
    </main>
  )
}
