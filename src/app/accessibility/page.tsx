import type { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Our commitment to making The English Hub accessible to all learners. WCAG 2.1 AA compliance, assistive technology support, and inclusive design.',
  alternates: { canonical: 'https://theenglishhub.app/accessibility' },
  openGraph: {
    title: 'Accessibility Statement — The English Hub',
    description:
      'Our commitment to making The English Hub accessible to all learners. WCAG 2.1 AA compliance, assistive technology support, and inclusive design.',
  },
}

export default async function AccessibilityPage() {
  const [
    h1,
    operatedBy,
    lastUpdated,
    commitmentH2,
    commitmentBody1Lead,
    commitmentTargetLevel,
    commitmentBody2,
    whatH2,
    whatLead,
    whatKeyboardName,
    whatKeyboardDesc,
    whatSkipName,
    whatSkipDesc,
    whatSemanticName,
    whatSemanticDesc,
    whatAriaName,
    whatAriaDesc,
    whatContrastName,
    whatContrastDesc,
    whatResponsiveName,
    whatResponsiveDesc,
    whatScreenName,
    whatScreenDesc,
    whatMotionName,
    whatMotionDesc,
    limitsH2,
    limitsLead,
    limitsInteractiveName,
    limitsInteractiveDesc,
    limitsThirdPartyName,
    limitsThirdPartyDesc,
    limitsPdfName,
    limitsPdfDesc,
    limitsAiNote,
    techH2,
    techIntro,
    techOutro,
    assessmentH2,
    assessmentLead,
    assessmentSelfName,
    assessmentSelfDesc,
    assessmentFeedbackName,
    assessmentFeedbackDesc,
    feedbackH2,
    feedbackLead,
    feedbackEmailLabel,
    feedbackResponseNote,
    enforcementH2,
    enforcementBody1Lead,
    enforcementEqualityAct,
    enforcementBody1Tail,
    enforcementBody2Lead,
    enforcementEassLink,
    enforcementBody2Tail,
    dateH2,
    dateBody,
  ] = await tMany([
    'accessibility.title',
    'accessibility.operated_by',
    'accessibility.last_updated',
    'accessibility.commitment.h2',
    'accessibility.commitment.body1_lead',
    'accessibility.commitment.target_level',
    'accessibility.commitment.body2',
    'accessibility.what.h2',
    'accessibility.what.lead',
    'accessibility.what.keyboard.name',
    'accessibility.what.keyboard.desc',
    'accessibility.what.skip.name',
    'accessibility.what.skip.desc',
    'accessibility.what.semantic.name',
    'accessibility.what.semantic.desc',
    'accessibility.what.aria.name',
    'accessibility.what.aria.desc',
    'accessibility.what.contrast.name',
    'accessibility.what.contrast.desc',
    'accessibility.what.responsive.name',
    'accessibility.what.responsive.desc',
    'accessibility.what.screen.name',
    'accessibility.what.screen.desc',
    'accessibility.what.motion.name',
    'accessibility.what.motion.desc',
    'accessibility.limits.h2',
    'accessibility.limits.lead',
    'accessibility.limits.interactive.name',
    'accessibility.limits.interactive.desc',
    'accessibility.limits.third_party.name',
    'accessibility.limits.third_party.desc',
    'accessibility.limits.pdf.name',
    'accessibility.limits.pdf.desc',
    'accessibility.limits.ai_note',
    'accessibility.tech.h2',
    'accessibility.tech.intro',
    'accessibility.tech.outro',
    'accessibility.assessment.h2',
    'accessibility.assessment.lead',
    'accessibility.assessment.self.name',
    'accessibility.assessment.self.desc',
    'accessibility.assessment.feedback.name',
    'accessibility.assessment.feedback.desc',
    'accessibility.feedback.h2',
    'accessibility.feedback.lead',
    'accessibility.feedback.email_label',
    'accessibility.feedback.response_note',
    'accessibility.enforcement.h2',
    'accessibility.enforcement.body1_lead',
    'accessibility.enforcement.equality_act',
    'accessibility.enforcement.body1_tail',
    'accessibility.enforcement.body2_lead',
    'accessibility.enforcement.eass_link',
    'accessibility.enforcement.body2_tail',
    'accessibility.date.h2',
    'accessibility.date.body',
  ])

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h1}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {operatedBy}
        <br />
        {lastUpdated}
      </p>

      <div className="mt-8 space-y-8">
        {/* Commitment */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{commitmentH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {commitmentBody1Lead} <strong>{commitmentTargetLevel}</strong>.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{commitmentBody2}</p>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{whatH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{whatLead}</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>{whatKeyboardName}</strong> — {whatKeyboardDesc}
            </li>
            <li>
              <strong>{whatSkipName}</strong> — {whatSkipDesc}
            </li>
            <li>
              <strong>{whatSemanticName}</strong> — {whatSemanticDesc}
            </li>
            <li>
              <strong>{whatAriaName}</strong> — {whatAriaDesc}
            </li>
            <li>
              <strong>{whatContrastName}</strong> — {whatContrastDesc}
            </li>
            <li>
              <strong>{whatResponsiveName}</strong> — {whatResponsiveDesc}
            </li>
            <li>
              <strong>{whatScreenName}</strong> — {whatScreenDesc}
            </li>
            <li>
              <strong>{whatMotionName}</strong> — {whatMotionDesc}{' '}
              <code>prefers-reduced-motion</code>.
            </li>
          </ul>
        </section>

        {/* Known Limitations */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{limitsH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{limitsLead}</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>{limitsInteractiveName}</strong> — {limitsInteractiveDesc}
            </li>
            <li>
              <strong>{limitsThirdPartyName}</strong> — {limitsThirdPartyDesc}
            </li>
            <li>
              <strong>{limitsPdfName}</strong> — {limitsPdfDesc}
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">{limitsAiNote}</p>
        </section>

        {/* Technologies Relied Upon */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{techH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{techIntro}</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>WAI-ARIA</li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">{techOutro}</p>
        </section>

        {/* Assessment Methods */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{assessmentH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{assessmentLead}</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>{assessmentSelfName}</strong> — {assessmentSelfDesc}
            </li>
            <li>
              <strong>{assessmentFeedbackName}</strong> — {assessmentFeedbackDesc}
            </li>
          </ul>
        </section>

        {/* Feedback and Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{feedbackH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{feedbackLead}</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>{feedbackEmailLabel}</strong>{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline hover:text-foreground transition-colors"
              >
                info@Upskillenergy.com
              </a>
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">{feedbackResponseNote}</p>
        </section>

        {/* Enforcement Procedure */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{enforcementH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {enforcementBody1Lead} <strong>{enforcementEqualityAct}</strong>
            {enforcementBody1Tail}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {enforcementBody2Lead}{' '}
            <a
              href="https://www.equalityadvisoryservice.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              {enforcementEassLink}
            </a>
            {enforcementBody2Tail}
          </p>
        </section>

        {/* Date */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{dateH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{dateBody}</p>
        </section>
      </div>
    </main>
  )
}
