/**
 * Report-fix override - 2026-05-16 (batch B)
 *
 * The deep-research report flagged the LIVE /accessibility and
 * /affiliate + /affiliates pages rendering placeholder text ("Name",
 * "Desc", "H2", "Lead", "Heading", "Title Part1", "Footnote", etc.).
 *
 * Two root causes were fixed:
 *  1. dictionary.ts lookup() ordering bug - PLACEHOLDER_FIX_MAY15 and
 *     SCREENSHOT_FIX_DICTIONARY were resolved AFTER the auto-junk
 *     AUDIT_FIX_DICTIONARY, so ~80 real affiliate keys were shadowed.
 *     The chain was reordered so every curated override beats audit-fix.
 *  2. The remaining junk keys (39 accessibility keys with no real copy
 *     anywhere; the affiliate "chrome" keys + 8 missing
 *     aff_comp.public.faq.qN.a answers) are supplied here with
 *     hand-written, accurate British-English copy.
 *
 * Wired into lookup() immediately before AUDIT_FIX_DICTIONARY. AR
 * mirrors EN as a graceful fallback until the next translation sweep.
 *
 * Accessibility copy is deliberately HONEST: it states a TARGET of
 * WCAG 2.2 AA and genuine known gaps - it does not claim full or
 * externally-audited conformance.
 */

import type { Dictionary } from './dictionary'

export const REPORT_FIX_MAY16B: Dictionary = {
  // ─── /accessibility (39 keys) ────────────────────────────────────
  'accessibility.what.skip.name': { en: 'Skip links', ar: 'Skip links' },
  'accessibility.what.skip.desc': {
    en: 'A "skip to main content" link is provided so keyboard and screen-reader users can bypass repeated navigation.',
    ar: 'A "skip to main content" link is provided so keyboard and screen-reader users can bypass repeated navigation.',
  },
  'accessibility.what.semantic.name': { en: 'Semantic structure', ar: 'Semantic structure' },
  'accessibility.what.semantic.desc': {
    en: 'Pages are built with meaningful HTML landmarks and a logical heading order to aid navigation and comprehension.',
    ar: 'Pages are built with meaningful HTML landmarks and a logical heading order to aid navigation and comprehension.',
  },
  'accessibility.what.aria.name': { en: 'ARIA where needed', ar: 'ARIA where needed' },
  'accessibility.what.aria.desc': {
    en: 'WAI-ARIA roles and labels are applied to custom components where native HTML semantics are not sufficient.',
    ar: 'WAI-ARIA roles and labels are applied to custom components where native HTML semantics are not sufficient.',
  },
  'accessibility.what.contrast.name': { en: 'Colour contrast', ar: 'Colour contrast' },
  'accessibility.what.contrast.desc': {
    en: 'Text and interface colours are chosen to target the WCAG 2.2 AA contrast ratios in both light and dark themes.',
    ar: 'Text and interface colours are chosen to target the WCAG 2.2 AA contrast ratios in both light and dark themes.',
  },
  'accessibility.what.responsive.name': { en: 'Responsive layout', ar: 'Responsive layout' },
  'accessibility.what.responsive.desc': {
    en: 'The layout adapts to different screen sizes and supports zooming and text resizing without loss of content.',
    ar: 'The layout adapts to different screen sizes and supports zooming and text resizing without loss of content.',
  },
  'accessibility.what.screen.name': { en: 'Screen-reader support', ar: 'Screen-reader support' },
  'accessibility.what.screen.desc': {
    en: 'Core reading and revision journeys are designed and tested to work with common screen readers.',
    ar: 'Core reading and revision journeys are designed and tested to work with common screen readers.',
  },
  'accessibility.what.motion.name': { en: 'Reduced motion', ar: 'Reduced motion' },
  'accessibility.what.motion.desc': {
    en: 'Non-essential animation is reduced or removed for users who set the operating-system preference',
    ar: 'Non-essential animation is reduced or removed for users who set the operating-system preference',
  },
  'accessibility.limits.h2': { en: 'Known limitations', ar: 'Known limitations' },
  'accessibility.limits.lead': {
    en: 'We are honest about where the platform does not yet fully meet our target, and we are actively working to close these gaps.',
    ar: 'We are honest about where the platform does not yet fully meet our target, and we are actively working to close these gaps.',
  },
  'accessibility.limits.interactive.name': {
    en: 'Complex interactive tools',
    ar: 'Complex interactive tools',
  },
  'accessibility.limits.interactive.desc': {
    en: 'Some richer interactive exercises and editors may not yet be fully operable by keyboard or screen reader in every scenario.',
    ar: 'Some richer interactive exercises and editors may not yet be fully operable by keyboard or screen reader in every scenario.',
  },
  'accessibility.limits.third_party.name': { en: 'Third-party embeds', ar: 'Third-party embeds' },
  'accessibility.limits.third_party.desc': {
    en: 'Embedded content from third-party providers is outside our direct control and may not meet the same accessibility standard.',
    ar: 'Embedded content from third-party providers is outside our direct control and may not meet the same accessibility standard.',
  },
  'accessibility.limits.pdf.name': { en: 'Legacy PDFs', ar: 'Legacy PDFs' },
  'accessibility.limits.pdf.desc': {
    en: 'Some older downloadable PDF resources may not be fully tagged for assistive technology; we are reviewing and replacing these over time.',
    ar: 'Some older downloadable PDF resources may not be fully tagged for assistive technology; we are reviewing and replacing these over time.',
  },
  'accessibility.limits.ai_note': {
    en: 'AI-generated feedback is presented through interface components that we are progressively improving for accessibility, and we welcome reports of any barriers you encounter.',
    ar: 'AI-generated feedback is presented through interface components that we are progressively improving for accessibility, and we welcome reports of any barriers you encounter.',
  },
  'accessibility.tech.h2': {
    en: 'Technologies this statement relies on',
    ar: 'Technologies this statement relies on',
  },
  'accessibility.tech.intro': {
    en: 'Accessibility of The English Hub relies on the following technologies working with your browser and any assistive technology you use:',
    ar: 'Accessibility of The English Hub relies on the following technologies working with your browser and any assistive technology you use:',
  },
  'accessibility.tech.outro': {
    en: 'These technologies are relied upon for conformance with the accessibility standard we target.',
    ar: 'These technologies are relied upon for conformance with the accessibility standard we target.',
  },
  'accessibility.assessment.h2': {
    en: 'How we assess accessibility',
    ar: 'How we assess accessibility',
  },
  'accessibility.assessment.lead': {
    en: 'This statement reflects our own ongoing assessment rather than a formal external audit.',
    ar: 'This statement reflects our own ongoing assessment rather than a formal external audit.',
  },
  'accessibility.assessment.self.name': { en: 'Self-evaluation', ar: 'Self-evaluation' },
  'accessibility.assessment.self.desc': {
    en: 'We carry out internal reviews using automated checks, manual keyboard testing and screen-reader spot-checks against WCAG 2.2 AA.',
    ar: 'We carry out internal reviews using automated checks, manual keyboard testing and screen-reader spot-checks against WCAG 2.2 AA.',
  },
  'accessibility.assessment.feedback.name': { en: 'User feedback', ar: 'User feedback' },
  'accessibility.assessment.feedback.desc': {
    en: 'Issues reported by students, parents, teachers and schools are triaged and used to prioritise fixes.',
    ar: 'Issues reported by students, parents, teachers and schools are triaged and used to prioritise fixes.',
  },
  'accessibility.enforcement.h2': { en: 'Enforcement procedure', ar: 'Enforcement procedure' },
  'accessibility.enforcement.body1_lead': {
    en: 'In the United Kingdom, access to digital services for disabled people is supported by the',
    ar: 'In the United Kingdom, access to digital services for disabled people is supported by the',
  },
  'accessibility.enforcement.equality_act': { en: 'Equality Act 2010', ar: 'Equality Act 2010' },
  'accessibility.enforcement.body1_tail': {
    en: ', and we treat accessibility as an ongoing legal and ethical responsibility.',
    ar: ', and we treat accessibility as an ongoing legal and ethical responsibility.',
  },
  'accessibility.enforcement.body2_lead': {
    en: 'If you contact us about an accessibility problem and are not satisfied with our response, you can escalate the matter to the',
    ar: 'If you contact us about an accessibility problem and are not satisfied with our response, you can escalate the matter to the',
  },
  'accessibility.enforcement.eass_link': {
    en: 'Equality Advisory and Support Service (EASS)',
    ar: 'Equality Advisory and Support Service (EASS)',
  },
  'accessibility.enforcement.body2_tail': {
    en: ', which provides free advice and support on equality and human rights issues.',
    ar: ', which provides free advice and support on equality and human rights issues.',
  },

  // ─── /affiliate (aff.*) ──────────────────────────────────────────
  'aff.hero.eyebrow': { en: 'Affiliate Programme', ar: 'Affiliate Programme' },
  'aff.hero.title_lead': { en: 'Earn recurring income', ar: 'Earn recurring income' },
  'aff.hero.title_highlight': {
    en: 'championing better English',
    ar: 'championing better English',
  },
  'aff.hero.title_tail': {
    en: 'for every student you refer',
    ar: 'for every student you refer',
  },
  'aff.hero.subtitle': {
    en: 'Share The English Hub with your audience and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English support that families and schools genuinely return to.',
    ar: 'Share The English Hub with your audience and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English support that families and schools genuinely return to.',
  },
  'aff.hero.bullet_cookie': { en: '90-day tracking cookie', ar: '90-day tracking cookie' },
  'aff.hero.bullet_payouts': { en: 'Monthly payouts', ar: 'Monthly payouts' },
  'aff.hero.bullet_no_minimum': { en: 'No minimum traffic', ar: 'No minimum traffic' },
  'aff.cta.apply_now': { en: 'Apply now', ar: 'Apply now' },
  'aff.cta.partner_login': { en: 'Partner login', ar: 'Partner login' },
  'aff.cta.eyebrow': { en: 'Ready to start', ar: 'Ready to start' },
  'aff.cta.heading': {
    en: 'Turn your audience into recurring income',
    ar: 'Turn your audience into recurring income',
  },
  'aff.cta.body': {
    en: 'Join the partner programme in minutes. Get your link, share it with the parents, students and educators who trust you, and earn commission every time a referral subscribes to an annual plan.',
    ar: 'Join the partner programme in minutes. Get your link, share it with the parents, students and educators who trust you, and earn commission every time a referral subscribes to an annual plan.',
  },
  'aff.tiers.heading': { en: 'Commission tiers', ar: 'Commission tiers' },
  'aff.tiers.subheading': {
    en: 'The more students you refer, the more you earn on each one. Tiers reward consistent partners with higher recurring commission and added support.',
    ar: 'The more students you refer, the more you earn on each one. Tiers reward consistent partners with higher recurring commission and added support.',
  },
  'aff.tiers.top_tier_badge': { en: 'Top tier', ar: 'Top tier' },
  'aff.tiers.tier_n': { en: 'Tier {n}', ar: 'Tier {n}' },
  'aff.tiers.per_signup_suffix': { en: 'per signup', ar: 'per signup' },
  'aff.tiers.flat_commission_caption': {
    en: 'Recurring commission on each referred annual subscription',
    ar: 'Recurring commission on each referred annual subscription',
  },
  'aff.tiers.open_from_first_signup': {
    en: 'Open from your first signup',
    ar: 'Open from your first signup',
  },
  'aff.tiers.from_signup_n': { en: 'From signup {n}', ar: 'From signup {n}' },
  'aff.tiers.feature_marketing_assets': {
    en: 'Ready-to-use marketing assets',
    ar: 'Ready-to-use marketing assets',
  },
  'aff.tiers.feature_realtime_tracking': {
    en: 'Real-time referral tracking',
    ar: 'Real-time referral tracking',
  },
  'aff.tiers.feature_priority_support': {
    en: 'Priority partner support',
    ar: 'Priority partner support',
  },
  'aff.tiers.feature_partner_manager': {
    en: 'Dedicated partner manager',
    ar: 'Dedicated partner manager',
  },
  'aff.calc.heading': { en: 'Income that grows with you', ar: 'Income that grows with you' },
  'aff.calc.body': {
    en: 'Commission is recurring for as long as your referral keeps their subscription active, so a steady stream of signups builds dependable income over time rather than a one-off payment.',
    ar: 'Commission is recurring for as long as your referral keeps their subscription active, so a steady stream of signups builds dependable income over time rather than a one-off payment.',
  },
  'aff.calc.bullet_auto_upgrades': {
    en: 'Commission follows plan upgrades automatically',
    ar: 'Commission follows plan upgrades automatically',
  },
  'aff.calc.bullet_every_student': {
    en: 'Earn on every student referred through your link',
    ar: 'Earn on every student referred through your link',
  },
  'aff.calc.bullet_global': {
    en: 'Open to partners worldwide',
    ar: 'Open to partners worldwide',
  },
  'aff.how.heading': { en: 'How it works', ar: 'How it works' },
  'aff.how.subheading': {
    en: 'Three simple steps from sign-up to your first commission.',
    ar: 'Three simple steps from sign-up to your first commission.',
  },
  'aff.how.step_label': { en: 'Step', ar: 'Step' },
  'aff.how.step1_title': { en: 'Apply and get approved', ar: 'Apply and get approved' },
  'aff.how.step1_body': {
    en: 'Submit a short application telling us about your audience. Once approved, you get instant access to your partner dashboard, unique link and referral code.',
    ar: 'Submit a short application telling us about your audience. Once approved, you get instant access to your partner dashboard, unique link and referral code.',
  },
  'aff.how.step2_title': { en: 'Share your link', ar: 'Share your link' },
  'aff.how.step2_body': {
    en: 'Promote The English Hub through your website, newsletter, social channels or classroom. Use our ready-made assets or your own words, whichever fits your audience best.',
    ar: 'Promote The English Hub through your website, newsletter, social channels or classroom. Use our ready-made assets or your own words, whichever fits your audience best.',
  },
  'aff.how.step3_title': { en: 'Earn recurring commission', ar: 'Earn recurring commission' },
  'aff.how.step3_body': {
    en: 'When someone subscribes to an annual plan through your link, you earn recurring commission. Track every referral in real time and receive monthly payouts.',
    ar: 'When someone subscribes to an annual plan through your link, you earn recurring commission. Track every referral in real time and receive monthly payouts.',
  },
  'aff.faq.heading': { en: 'Frequently asked questions', ar: 'Frequently asked questions' },
  'aff.faq.subheading': {
    en: 'Everything you need to know about the partner programme.',
    ar: 'Everything you need to know about the partner programme.',
  },

  // ─── /affiliates public page (aff_comp.public.*) ─────────────────
  'aff_comp.public.partnership_badge': { en: 'Partner Programme', ar: 'Partner Programme' },
  'aff_comp.public.hero.title_part1': {
    en: 'Earn recurring commission with',
    ar: 'Earn recurring commission with',
  },
  'aff_comp.public.hero.title_brand': { en: 'The English Hub', ar: 'The English Hub' },
  'aff_comp.public.hero.subtitle': {
    en: 'Recommend an independent, exam-board aligned English platform to the families and educators who trust you, and earn recurring commission on every annual subscription you refer.',
    ar: 'Recommend an independent, exam-board aligned English platform to the families and educators who trust you, and earn recurring commission on every annual subscription you refer.',
  },
  'aff_comp.public.cta.get_code': {
    en: 'Get your referral code',
    ar: 'Get your referral code',
  },
  'aff_comp.public.cta.learn_more': { en: 'Learn more', ar: 'Learn more' },
  'aff_comp.public.why.heading': { en: 'Why partner with us', ar: 'Why partner with us' },
  'aff_comp.public.why.subheading': {
    en: 'A genuinely useful product for your audience, fair recurring rewards for you, and transparent tracking throughout.',
    ar: 'A genuinely useful product for your audience, fair recurring rewards for you, and transparent tracking throughout.',
  },
  'aff_comp.public.how.heading': { en: 'How it works', ar: 'How it works' },
  'aff_comp.public.how.subheading': {
    en: 'Apply, share your code, and earn commission on every annual subscription you refer.',
    ar: 'Apply, share your code, and earn commission on every annual subscription you refer.',
  },
  'aff_comp.public.how.annual_only_lead': { en: 'Annual plans only', ar: 'Annual plans only' },
  'aff_comp.public.how.annual_only_body': {
    en: 'Commission is earned on referred annual subscriptions. This keeps rewards meaningful and aligned with families who commit to a full year of learning.',
    ar: 'Commission is earned on referred annual subscriptions. This keeps rewards meaningful and aligned with families who commit to a full year of learning.',
  },
  'aff_comp.public.commission.heading': {
    en: 'Commission structure',
    ar: 'Commission structure',
  },
  'aff_comp.public.commission.subheading': {
    en: 'Transparent recurring commission on every referred annual plan, with higher rates as your referrals grow.',
    ar: 'Transparent recurring commission on every referred annual plan, with higher rates as your referrals grow.',
  },
  'aff_comp.public.commission.col_plan': { en: 'Plan', ar: 'Plan' },
  'aff_comp.public.commission.col_commission': { en: 'Commission', ar: 'Commission' },
  'aff_comp.public.commission.per_signup': { en: 'per signup', ar: 'per signup' },
  'aff_comp.public.commission.footnote': {
    en: 'Commission is recurring while the referred subscription stays active. Rates are tiered by referral volume and confirmed in your partner dashboard.',
    ar: 'Commission is recurring while the referred subscription stays active. Rates are tiered by referral volume and confirmed in your partner dashboard.',
  },
  'aff_comp.public.impact.heading': {
    en: 'The impact you help create',
    ar: 'The impact you help create',
  },
  'aff_comp.public.impact.subheading': {
    en: 'Every referral helps a student build real confidence in English, from KS3 through GCSE, IGCSE and EAL.',
    ar: 'Every referral helps a student build real confidence in English, from KS3 through GCSE, IGCSE and EAL.',
  },
  'aff_comp.public.impact.empty_testimonials': {
    en: 'Partner case studies and stories are coming as the programme grows. Be one of the early partners who helps shape it.',
    ar: 'Partner case studies and stories are coming as the programme grows. Be one of the early partners who helps shape it.',
  },
  'aff_comp.public.what_you_get.heading': { en: 'What you get', ar: 'What you get' },
  'aff_comp.public.what_you_get.subheading': {
    en: 'Everything you need to share The English Hub with confidence and track your results.',
    ar: 'Everything you need to share The English Hub with confidence and track your results.',
  },
  'aff_comp.public.faq.heading': {
    en: 'Frequently asked questions',
    ar: 'Frequently asked questions',
  },
  'aff_comp.public.apply.heading': { en: 'Become a partner', ar: 'Become a partner' },
  'aff_comp.public.apply.subheading_logged_in': {
    en: 'You are signed in and ready to go. Generate your referral code and start sharing The English Hub today.',
    ar: 'You are signed in and ready to go. Generate your referral code and start sharing The English Hub today.',
  },
  'aff_comp.public.apply.subheading_logged_out': {
    en: 'Create an account or sign in to generate your referral code and join the partner programme.',
    ar: 'Create an account or sign in to generate your referral code and join the partner programme.',
  },
  'aff_comp.public.apply.annual_only_note_lead': { en: 'Good to know', ar: 'Good to know' },
  'aff_comp.public.apply.annual_only_note_body': {
    en: 'Commission applies to referred annual subscriptions. Referrals are tracked for 90 days from the first click, so you are credited even if someone subscribes later.',
    ar: 'Commission applies to referred annual subscriptions. Referrals are tracked for 90 days from the first click, so you are credited even if someone subscribes later.',
  },
  'aff_comp.public.apply.signin_first': { en: 'Sign in first', ar: 'Sign in first' },
  'aff_comp.public.apply.signin_blurb': {
    en: 'You need an account to generate your referral code and access your partner dashboard. It only takes a moment.',
    ar: 'You need an account to generate your referral code and access your partner dashboard. It only takes a moment.',
  },
  'aff_comp.public.apply.create_account': { en: 'Create an account', ar: 'Create an account' },
  'aff_comp.public.apply.sign_in': { en: 'Sign in', ar: 'Sign in' },
  'aff_comp.public.basics.heading': { en: 'Programme basics', ar: 'Programme basics' },
  'aff_comp.public.basics.attribution.title': {
    en: '90-day attribution',
    ar: '90-day attribution',
  },
  'aff_comp.public.basics.attribution.desc': {
    en: 'A 90-day cookie tracks each referral from the first click, so you are credited even when someone subscribes later.',
    ar: 'A 90-day cookie tracks each referral from the first click, so you are credited even when someone subscribes later.',
  },
  'aff_comp.public.basics.min_payout.title': { en: 'Low minimum payout', ar: 'Low minimum payout' },
  'aff_comp.public.basics.min_payout.desc': {
    en: 'Reach a modest payout threshold and receive your earnings on a monthly schedule, with the current minimum shown in your dashboard.',
    ar: 'Reach a modest payout threshold and receive your earnings on a monthly schedule, with the current minimum shown in your dashboard.',
  },
  'aff_comp.public.basics.ltv.title': {
    en: 'Recurring lifetime value',
    ar: 'Recurring lifetime value',
  },
  'aff_comp.public.basics.ltv.desc': {
    en: 'Commission keeps paying for as long as your referral stays subscribed, so each referral can earn well beyond the first year.',
    ar: 'Commission keeps paying for as long as your referral stays subscribed, so each referral can earn well beyond the first year.',
  },
  'aff_comp.public.basics.commission.title': { en: 'Tiered commission', ar: 'Tiered commission' },
  'aff_comp.public.basics.commission.desc': {
    en: 'Earn recurring commission on every referred annual plan, with higher rates unlocked as your referral volume grows.',
    ar: 'Earn recurring commission on every referred annual plan, with higher rates unlocked as your referral volume grows.',
  },
  'aff_comp.public.bottom_cta.heading': {
    en: 'Ready to start earning',
    ar: 'Ready to start earning',
  },
  'aff_comp.public.bottom_cta.body': {
    en: 'Join the partner programme, share The English Hub with the people who trust your recommendations, and earn recurring commission on every annual subscription you refer.',
    ar: 'Join the partner programme, share The English Hub with the people who trust your recommendations, and earn recurring commission on every annual subscription you refer.',
  },
  'aff_comp.public.bottom_cta.button': {
    en: 'Get your referral code',
    ar: 'Get your referral code',
  },
  'aff_comp.public.faq.q1.a': {
    en: 'The programme is open to anyone with a relevant audience, including educators, tutors, parent communities, content creators and education websites. There are no follower or traffic minimums. We simply ask that promotion is honest and that The English Hub is presented as an independent platform that is exam-board aligned but not endorsed by any exam board.',
    ar: 'The programme is open to anyone with a relevant audience, including educators, tutors, parent communities, content creators and education websites. There are no follower or traffic minimums. We simply ask that promotion is honest and that The English Hub is presented as an independent platform that is exam-board aligned but not endorsed by any exam board.',
  },
  'aff_comp.public.faq.q2.a': {
    en: 'Create an account or sign in, then submit the short partner application describing your audience. Once approved, your partner dashboard unlocks instantly with a unique referral link, a code to share, marketing assets and real-time tracking. Most applications are reviewed quickly so you can start sharing without long delays.',
    ar: 'Create an account or sign in, then submit the short partner application describing your audience. Once approved, your partner dashboard unlocks instantly with a unique referral link, a code to share, marketing assets and real-time tracking. Most applications are reviewed quickly so you can start sharing without long delays.',
  },
  'aff_comp.public.faq.q3.a': {
    en: 'Payouts are made monthly once your balance reaches the minimum threshold shown in your dashboard. Commission is confirmed after the referred annual subscription completes its standard refund window, which protects both partners and the programme. Your dashboard always shows pending and confirmed earnings clearly.',
    ar: 'Payouts are made monthly once your balance reaches the minimum threshold shown in your dashboard. Commission is confirmed after the referred annual subscription completes its standard refund window, which protects both partners and the programme. Your dashboard always shows pending and confirmed earnings clearly.',
  },
  'aff_comp.public.faq.q4.a': {
    en: 'Referrals are tracked with a 90-day cookie that starts from the first click on your link. If someone clicks today and subscribes any time within those 90 days, the referral is still credited to you, giving people time to consider before committing to an annual plan.',
    ar: 'Referrals are tracked with a 90-day cookie that starts from the first click on your link. If someone clicks today and subscribes any time within those 90 days, the referral is still credited to you, giving people time to consider before committing to an annual plan.',
  },
  'aff_comp.public.faq.q5.a': {
    en: 'Commission is tiered by referral volume, so the more active subscriptions you refer, the higher your rate becomes on each one. Everyone starts earning from their very first signup, and your current tier and rate are always visible in your partner dashboard.',
    ar: 'Commission is tiered by referral volume, so the more active subscriptions you refer, the higher your rate becomes on each one. Everyone starts earning from their very first signup, and your current tier and rate are always visible in your partner dashboard.',
  },
  'aff_comp.public.faq.q6.a': {
    en: 'Your dashboard shows clicks on your link, sign-ups, completed annual subscriptions, pending and confirmed commission, and your current tier, all updated in real time. This gives you a clear, transparent view of how your referrals are performing at any moment.',
    ar: 'Your dashboard shows clicks on your link, sign-ups, completed annual subscriptions, pending and confirmed commission, and your current tier, all updated in real time. This gives you a clear, transparent view of how your referrals are performing at any moment.',
  },
  'aff_comp.public.faq.q7.a': {
    en: 'Once your confirmed balance reaches the minimum payout threshold, earnings are paid out monthly using the payment details you set in your dashboard. You can track exactly when commission moves from pending to confirmed, so there are no surprises about what you will be paid and when.',
    ar: 'Once your confirmed balance reaches the minimum payout threshold, earnings are paid out monthly using the payment details you set in your dashboard. You can track exactly when commission moves from pending to confirmed, so there are no surprises about what you will be paid and when.',
  },
  'aff_comp.public.faq.q8.a': {
    en: 'Every partner has access to support by email, plus marketing assets and guidance to help you promote effectively. As your referral volume grows you unlock priority support and, at the top tier, a dedicated partner manager to help you get the most from the programme.',
    ar: 'Every partner has access to support by email, plus marketing assets and guidance to help you promote effectively. As your referral volume grows you unlock priority support and, at the top tier, a dedicated partner manager to help you get the most from the programme.',
  },

  // ─── /affiliates metadata (affiliates.*) ─────────────────────────
  'affiliates.breadcrumb.home': { en: 'Home', ar: 'Home' },
  'affiliates.breadcrumb.self': { en: 'Affiliates', ar: 'Affiliates' },
  // NOTE: this value is fed through the root metadata title.template
  // ('%s - The English Hub'), so it must NOT contain the brand itself
  // or it double-brands. (Caught by site_health_monitor 2026-05-16.)
  'affiliates.public.meta.title': {
    en: 'Affiliate Programme - Earn Recurring Commission for Partners',
    ar: 'Affiliate Programme - Earn Recurring Commission for Partners',
  },
  'affiliates.public.meta.description': {
    en: 'Join The English Hub partner programme and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English learning. 90-day tracking, monthly payouts, no minimum traffic.',
    ar: 'Join The English Hub partner programme and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English learning. 90-day tracking, monthly payouts, no minimum traffic.',
  },
  'affiliates.public.meta.og_image_alt': {
    en: 'The English Hub affiliate programme',
    ar: 'The English Hub affiliate programme',
  },
}
