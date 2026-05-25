/**
 * Real copy for /press and /about/verified-content
 *
 * Both pages pull their text through `tMany([...])` from the dictionary
 * chain. Earlier dictionary fills auto-derived these keys from path
 * segments - so `press.hero.title` ended up as `"Title"`, `press.hero.eyebrow`
 * as `"Eyebrow"`, `about.verified.h1` as `"H1"`, etc. The two pages
 * therefore rendered visibly broken on prod.
 *
 * This file overrides those keys with human-written copy. It is wired
 * into the lookup chain BEFORE `AUDIT_FIX_DICTIONARY` so it wins on
 * collision.
 *
 * AR values mirror EN as a graceful fallback - far better than rendering
 * lazy Arabic translations of "Eyebrow" or "Body Pre" to an Arabic
 * visitor. ar_translator can replace with proper Khaleeji on the next
 * translation sweep.
 *
 * Written 2026-05-15.
 */

import type { Dictionary } from './dictionary'

export const PRESS_AND_VERIFIED_FIX: Dictionary = {
  // ───────────────────────────────────────────────────────────────────
  // /press
  // ───────────────────────────────────────────────────────────────────

  // Hero
  'press.hero.eyebrow': { en: 'Press & Media', ar: 'Press & Media' },
  'press.hero.title': {
    en: 'The English Hub is building a smarter way to support English learning.',
    ar: 'The English Hub is building a smarter way to support English learning.',
  },
  'press.hero.lede': {
    en: 'The English Hub is an independent English learning platform supporting GCSE, IGCSE, KS3 and EAL learners through structured resources, AI-assisted feedback, exam-style practice, teacher tools and school-level analytics.',
    ar: 'The English Hub is an independent English learning platform supporting GCSE, IGCSE, KS3 and EAL learners through structured resources, AI-assisted feedback, exam-style practice, teacher tools and school-level analytics.',
  },

  // 60-second overview
  'press.overview.eyebrow': { en: 'About', ar: 'About' },
  'press.overview.title': { en: 'A 60-second overview', ar: 'A 60-second overview' },
  'press.overview.p1': {
    en: 'The English Hub is an independent English learning platform designed for students, teachers and schools. The platform supports GCSE, IGCSE, KS3 and EAL English through structured learning resources, AI-assisted feedback, mock exams, reading and writing practice, teacher tools and school-level reporting.',
    ar: 'The English Hub is an independent English learning platform designed for students, teachers and schools. The platform supports GCSE, IGCSE, KS3 and EAL English through structured learning resources, AI-assisted feedback, mock exams, reading and writing practice, teacher tools and school-level reporting.',
  },
  'press.overview.p2': {
    en: 'The platform is exam-board aligned, not exam-board endorsed, and supports AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. AI is used to assist drafting, formative feedback and resource generation; humans review what reaches students.',
    ar: 'The platform is exam-board aligned, not exam-board endorsed, and supports AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. AI is used to assist drafting, formative feedback and resource generation; humans review what reaches students.',
  },

  // Company facts
  'press.facts.eyebrow': { en: 'Company facts', ar: 'Company facts' },
  'press.facts.title': {
    en: 'Quick reference for journalists',
    ar: 'Quick reference for journalists',
  },

  'press.facts.entity.label': { en: 'Legal entity', ar: 'Legal entity' },
  'press.facts.entity.name': { en: 'Upskill Energy Limited', ar: 'Upskill Energy Limited' },
  'press.facts.entity.company_no': { en: 'Company No. 16511479', ar: 'Company No. 16511479' },
  'press.facts.entity.jurisdiction': {
    en: 'Registered in England & Wales',
    ar: 'Registered in England & Wales',
  },

  'press.facts.office.label': { en: 'Registered office', ar: 'Registered office' },
  'press.facts.office.short': {
    en: 'Available via Companies House',
    ar: 'Available via Companies House',
  },
  'press.facts.office.body_pre': {
    en: 'Journalists requiring an attributable address for filings should email',
    ar: 'Journalists requiring an attributable address for filings should email',
  },
  'press.facts.office.body_post': {
    en: ' and we will respond within one working day.',
    ar: ' and we will respond within one working day.',
  },

  'press.facts.ico.label': { en: 'ICO data protection', ar: 'ICO data protection' },
  'press.facts.ico.registration': { en: 'Registration ZC016690', ar: 'Registration ZC016690' },
  'press.facts.ico.controller': {
    en: 'Upskill Energy Limited acts as data controller for The English Hub.',
    ar: 'Upskill Energy Limited acts as data controller for The English Hub.',
  },

  'press.facts.founded.label': { en: 'Founded', ar: 'Founded' },
  'press.facts.founded.year': {
    en: '2024 - operating from 2026',
    ar: '2024 - operating from 2026',
  },
  'press.facts.founded.bootstrapped': {
    en: 'Bootstrapped. No outside investment to date.',
    ar: 'Bootstrapped. No outside investment to date.',
  },

  // Key stats - the StatPlaceholder component renders "coming in 2026"
  // copy regardless of these labels, but the labels still need to be real.
  'press.stats.eyebrow': { en: 'Key facts', ar: 'Key facts' },
  'press.stats.title': { en: 'At a glance', ar: 'At a glance' },
  'press.stats.lede': {
    en: 'Usage figures will be published once they are verifiable. We do not display fabricated numbers.',
    ar: 'Usage figures will be published once they are verifiable. We do not display fabricated numbers.',
  },
  'press.stats.active_pupils': { en: 'Active students', ar: 'Active students' },
  'press.stats.essays_marked': {
    en: 'Essays given AI-assisted feedback',
    ar: 'Essays given AI-assisted feedback',
  },
  'press.stats.teachers_onboarded': { en: 'Teachers onboarded', ar: 'Teachers onboarded' },
  'press.stats.schools_in_programme': {
    en: 'Schools in the Founding programme',
    ar: 'Schools in the Founding programme',
  },

  // Product
  'press.product.eyebrow': { en: 'Product', ar: 'Product' },
  'press.product.title': {
    en: 'Who it is for and what it does',
    ar: 'Who it is for and what it does',
  },
  'press.product.audience.h3': { en: 'Audience', ar: 'Audience' },
  'press.product.audience.pupils': {
    en: 'Students aged 11 to 18 studying KS3, GCSE, IGCSE or EAL English',
    ar: 'Students aged 11 to 18 studying KS3, GCSE, IGCSE or EAL English',
  },
  'press.product.audience.parents': {
    en: 'Parents supporting their children at home',
    ar: 'Parents supporting their children at home',
  },
  'press.product.audience.teachers': {
    en: 'English teachers and tutors',
    ar: 'English teachers and tutors',
  },
  'press.product.audience.heads': {
    en: 'Heads of English, SLT and school leaders in UK and international British curriculum schools',
    ar: 'Heads of English, SLT and school leaders in UK and international British curriculum schools',
  },

  'press.product.pricing.h3': { en: 'Pricing', ar: 'Pricing' },
  'press.product.pricing.pupil_strong': { en: 'Students', ar: 'Students' },
  'press.product.pricing.pupil_body': {
    en: 'Early Access £3.99/month or £29.99/year (Standard £7.99/month or £69.99/year from August 2026). A 7-day free trial applies to all paid plans.',
    ar: 'Early Access £3.99/month or £29.99/year (Standard £7.99/month or £69.99/year from August 2026). A 7-day free trial applies to all paid plans.',
  },
  'press.product.pricing.teacher_strong': { en: 'Teachers', ar: 'Teachers' },
  'press.product.pricing.teacher_body': {
    en: 'Early Access £6.99/month or £67.99/year (Standard £11.99/month or £99/year from August 2026). 3 free uses per premium tool with no card required.',
    ar: 'Early Access £6.99/month or £67.99/year (Standard £11.99/month or £99/year from August 2026). 3 free uses per premium tool with no card required.',
  },
  'press.product.pricing.founding_strong': { en: 'Schools', ar: 'Schools' },
  'press.product.pricing.founding_body': {
    en: 'Founding School Pilot from £4,000/year for the first 10 schools (recurring annual licence, locked for 2-3 years). Standard School Licence from £8,000/year thereafter. MAT and international group pricing on a custom annual licence.',
    ar: 'Founding School Pilot from £4,000/year for the first 10 schools (recurring annual licence, locked for 2-3 years). Standard School Licence from £8,000/year thereafter. MAT and international group pricing on a custom annual licence.',
  },
  'press.product.pricing.gbp_note': {
    en: 'All prices are in GBP and exclude VAT where applicable.',
    ar: 'All prices are in GBP and exclude VAT where applicable.',
  },

  'press.product.distinct.h3': { en: 'What is distinctive', ar: 'What is distinctive' },
  'press.product.distinct.boards': {
    en: 'Specification-aligned content for AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE - students see the materials matched to their actual board, not generic English content.',
    ar: 'Specification-aligned content for AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE - students see the materials matched to their actual board, not generic English content.',
  },
  'press.product.distinct.plain_english': {
    en: 'Plain English explanations of assessment objectives, mark-scheme language and exam structure for students who find existing revision sites dense or jargon-heavy.',
    ar: 'Plain English explanations of assessment objectives, mark-scheme language and exam structure for students who find existing revision sites dense or jargon-heavy.',
  },
  'press.product.distinct.board_selection': {
    en: "A persistent board picker - once a student or school selects their exam board, every page on the platform re-skins to that board's specification.",
    ar: "A persistent board picker - once a student or school selects their exam board, every page on the platform re-skins to that board's specification.",
  },
  'press.product.distinct.childrens_code': {
    en: 'Designed with the UK Age-Appropriate Design Code in mind - no third-party advertising, no tracking pixels, role-based access for school accounts and a published data-processing policy.',
    ar: 'Designed with the UK Age-Appropriate Design Code in mind - no third-party advertising, no tracking pixels, role-based access for school accounts and a published data-processing policy.',
  },

  // Press contact
  'press.contact.eyebrow': { en: 'Press contact', ar: 'Press contact' },
  'press.contact.title': { en: 'Media enquiries', ar: 'Media enquiries' },
  'press.contact.body_pre': {
    en: 'For interviews, comment, fact-checks or written briefings, please email',
    ar: 'For interviews, comment, fact-checks or written briefings, please email',
  },
  'press.contact.body_post': {
    en: '. We aim to respond within one working day.',
    ar: '. We aim to respond within one working day.',
  },
  'press.contact.cta.email': { en: 'Email the press desk', ar: 'Email the press desk' },
  'press.contact.cta.general': { en: 'Other enquiries', ar: 'Other enquiries' },

  // Press kit
  'press.kit.eyebrow': { en: 'Press kit', ar: 'Press kit' },
  'press.kit.title': { en: 'Brand assets and downloads', ar: 'Brand assets and downloads' },
  'press.kit.body': {
    en: 'Logo files, screenshots and a longer boilerplate paragraph are available on request. We are also happy to provide bespoke captioned screenshots and properly-labelled example dashboard views for a specific story angle.',
    ar: 'Logo files, screenshots and a longer boilerplate paragraph are available on request. We are also happy to provide bespoke captioned screenshots and properly-labelled example dashboard views for a specific story angle.',
  },
  'press.kit.archive_title': { en: 'Brand and screenshot pack', ar: 'Brand and screenshot pack' },
  'press.kit.archive_body_pre': {
    en: 'Email',
    ar: 'Email',
  },
  'press.kit.archive_body_mid': {
    en: 'and we will send the latest brand assets, logomark variants and labelled platform screenshots',
    ar: 'and we will send the latest brand assets, logomark variants and labelled platform screenshots',
  },
  'press.kit.archive_body_post': {
    en: ' within one working day.',
    ar: ' within one working day.',
  },
  'press.kit.download_disabled': { en: 'Available on request', ar: 'Available on request' },
  'press.kit.download_title': {
    en: 'Brand assets pack - coming soon. Email the press desk for the current files.',
    ar: 'Brand assets pack - coming soon. Email the press desk for the current files.',
  },

  // Recent coverage
  'press.coverage.eyebrow': { en: 'Recent coverage', ar: 'Recent coverage' },
  'press.coverage.title': {
    en: 'Where we have been mentioned',
    ar: 'Where we have been mentioned',
  },
  'press.coverage.none': {
    en: 'No coverage logged yet. We are at launch and will publish accredited mentions here as and when they appear. If you have written about The English Hub and would like to be added, please email the press desk.',
    ar: 'No coverage logged yet. We are at launch and will publish accredited mentions here as and when they appear. If you have written about The English Hub and would like to be added, please email the press desk.',
  },

  // Awards
  'press.awards.eyebrow': { en: 'Awards & reviews', ar: 'Awards & reviews' },
  'press.awards.title': { en: 'Recognition', ar: 'Recognition' },
  'press.awards.none': {
    en: 'No awards to claim. We are a new platform and will not invent or imply recognition we have not earned. Our Trustpilot page is the closest thing to public review feedback today.',
    ar: 'No awards to claim. We are a new platform and will not invent or imply recognition we have not earned. Our Trustpilot page is the closest thing to public review feedback today.',
  },
  'press.awards.trustpilot': { en: 'See us on Trustpilot', ar: 'See us on Trustpilot' },

  // Footer
  'press.footer.entity': {
    en: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
    ar: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
  },
  'press.footer.brand_line': {
    en: 'The English Hub is a trading brand of Upskill Energy Limited, registered in England & Wales.',
    ar: 'The English Hub is a trading brand of Upskill Energy Limited, registered in England & Wales.',
  },

  // ───────────────────────────────────────────────────────────────────
  // /about/verified-content
  // ───────────────────────────────────────────────────────────────────

  'about.verified.badge': { en: 'Verified content', ar: 'Verified content' },
  'about.verified.h1': {
    en: 'Verified English content. AI-assisted learning. Human-controlled quality.',
    ar: 'Verified English content. AI-assisted learning. Human-controlled quality.',
  },
  'about.verified.intro': {
    en: 'The English Hub uses AI to support practice, feedback and revision, but English content must still be accurate, traceable and trustworthy. Our content verification process is designed to reduce hallucinated analysis, incorrect quotations, unsupported claims and unclear exam guidance.',
    ar: 'The English Hub uses AI to support practice, feedback and revision, but English content must still be accurate, traceable and trustworthy. Our content verification process is designed to reduce hallucinated analysis, incorrect quotations, unsupported claims and unclear exam guidance.',
  },

  // Numbers section - the page renders six stat tiles. We keep the
  // existing stats (108 texts, 36 quotes, etc.) - those reflect actual
  // counts of content reviewed - but with proper labels.
  'about.verified.numbers.h2': {
    en: 'Where verification has been applied',
    ar: 'Where verification has been applied',
  },
  'about.verified.numbers.texts_label': {
    en: 'Set texts with verified analysis',
    ar: 'Set texts with verified analysis',
  },
  'about.verified.numbers.quotes_label': {
    en: 'Curated quotation packs',
    ar: 'Curated quotation packs',
  },
  'about.verified.numbers.errors_label': {
    en: 'Reader-reported errors corrected',
    ar: 'Reader-reported errors corrected',
  },
  'about.verified.numbers.public_domain_label': {
    en: 'Public-domain text sources',
    ar: 'Public-domain text sources',
  },
  'about.verified.numbers.restricted_label': {
    en: 'Copyright-handled extracts',
    ar: 'Copyright-handled extracts',
  },
  'about.verified.numbers.publishers_label': {
    en: 'Publishers / sources referenced',
    ar: 'Publishers / sources referenced',
  },

  // Sources
  'about.verified.sources.h2': {
    en: 'Sources we cross-check against',
    ar: 'Sources we cross-check against',
  },
  'about.verified.sources.lede': {
    en: 'Where a reliable source exists, we use it. Where it does not, we say so. We never invent a citation to make analysis look better-supported than it is.',
    ar: 'Where a reliable source exists, we use it. Where it does not, we say so. We never invent a citation to make analysis look better-supported than it is.',
  },
  'about.verified.sources.gutenberg_strong': { en: 'Project Gutenberg', ar: 'Project Gutenberg' },
  'about.verified.sources.gutenberg_body': {
    en: 'Public-domain editions of pre-1928 texts including Shakespeare, the major Victorian novelists, Romantic and Victorian poetry, and the prescribed nineteenth-century novels on most exam-board specifications. Quotations are verified against the Gutenberg text rather than memory.',
    ar: 'Public-domain editions of pre-1928 texts including Shakespeare, the major Victorian novelists, Romantic and Victorian poetry, and the prescribed nineteenth-century novels on most exam-board specifications. Quotations are verified against the Gutenberg text rather than memory.',
  },
  'about.verified.sources.folger_strong': {
    en: 'Folger Shakespeare Library',
    ar: 'Folger Shakespeare Library',
  },
  'about.verified.sources.folger_body': {
    en: 'For Shakespeare texts we cross-reference the Folger digital editions because of their careful editorial apparatus. Where act/scene/line references differ between editions, we explain the discrepancy rather than pretend it does not exist.',
    ar: 'For Shakespeare texts we cross-reference the Folger digital editions because of their careful editorial apparatus. Where act/scene/line references differ between editions, we explain the discrepancy rather than pretend it does not exist.',
  },
  'about.verified.sources.bbc_strong': {
    en: 'BBC and broadsheet archives',
    ar: 'BBC and broadsheet archives',
  },
  'about.verified.sources.bbc_body': {
    en: 'For context - biographical, historical, social - we cross-check against named published sources. We prefer the BBC, the major broadsheets and academic publishers over open-web summaries.',
    ar: 'For context - biographical, historical, social - we cross-check against named published sources. We prefer the BBC, the major broadsheets and academic publishers over open-web summaries.',
  },
  'about.verified.sources.board_strong': {
    en: 'Public exam-board specifications',
    ar: 'Public exam-board specifications',
  },
  'about.verified.sources.board_body': {
    en: 'Assessment objective wording, paper structure and prescribed-text lists are checked against the public specification PDFs published by AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge International. Where a specification updates, we update.',
    ar: 'Assessment objective wording, paper structure and prescribed-text lists are checked against the public specification PDFs published by AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge International. Where a specification updates, we update.',
  },

  // Confidence levels
  'about.verified.confidence.h2': { en: 'Confidence levels', ar: 'Confidence levels' },
  'about.verified.confidence.lede': {
    en: 'Not all content carries the same weight of evidence. We use four internal confidence labels so a reader can tell what stands behind a specific page.',
    ar: 'Not all content carries the same weight of evidence. We use four internal confidence labels so a reader can tell what stands behind a specific page.',
  },
  'about.verified.confidence.highest_label': {
    en: 'Highest - quote checked + human reviewed',
    ar: 'Highest - quote checked + human reviewed',
  },
  'about.verified.confidence.highest_body': {
    en: 'Quotations cross-referenced against a public-domain source. Analysis read end-to-end by a human editor. Used for set-text pages and exemplar essays.',
    ar: 'Quotations cross-referenced against a public-domain source. Analysis read end-to-end by a human editor. Used for set-text pages and exemplar essays.',
  },
  'about.verified.confidence.high_label': {
    en: 'High - human reviewed',
    ar: 'High - human reviewed',
  },
  'about.verified.confidence.high_body': {
    en: 'AI-drafted then read end-to-end by a human editor. Used for theme-level analysis, contextual notes and revision summaries.',
    ar: 'AI-drafted then read end-to-end by a human editor. Used for theme-level analysis, contextual notes and revision summaries.',
  },
  'about.verified.confidence.medium_label': {
    en: 'Medium - AI-drafted, awaiting review',
    ar: 'Medium - AI-drafted, awaiting review',
  },
  'about.verified.confidence.medium_body': {
    en: 'AI-generated content surfaced as a learning aid but not yet signed off by a human editor. We mark this clearly so students know what they are looking at.',
    ar: 'AI-generated content surfaced as a learning aid but not yet signed off by a human editor. We mark this clearly so students know what they are looking at.',
  },
  'about.verified.confidence.low_label': {
    en: 'Formative - practice feedback only',
    ar: 'Formative - practice feedback only',
  },
  'about.verified.confidence.low_body': {
    en: 'AI-generated essay feedback and grade indications. Useful for practice and pattern-spotting, but not official marking. Always to be discussed with a teacher before being acted on.',
    ar: 'AI-generated essay feedback and grade indications. Useful for practice and pattern-spotting, but not official marking. Always to be discussed with a teacher before being acted on.',
  },

  // Common errors
  'about.verified.errors.h2': {
    en: 'What we have caught and fixed',
    ar: 'What we have caught and fixed',
  },
  'about.verified.errors.body': {
    en: 'AI-assisted content gets two specific things wrong more than anything else: invented quotations that sound right but do not appear in the text, and confident statements about historical context that no source actually supports. We keep an internal log of corrections and bump the "Last updated" date on the affected page when a substantive change lands.',
    ar: 'AI-assisted content gets two specific things wrong more than anything else: invented quotations that sound right but do not appear in the text, and confident statements about historical context that no source actually supports. We keep an internal log of corrections and bump the "Last updated" date on the affected page when a substantive change lands.',
  },

  // Report a content issue
  'about.verified.report.h2': {
    en: 'Spotted something that does not look right?',
    ar: 'Spotted something that does not look right?',
  },
  'about.verified.report.body': {
    en: 'Report it and our team will review the page. Reports go to our editorial inbox, are logged within the working day, and the reporter is told the outcome once the review is complete.',
    ar: 'Report it and our team will review the page. Reports go to our editorial inbox, are logged within the working day, and the reporter is told the outcome once the review is complete.',
  },
  'about.verified.report.cta': { en: 'Report a content issue', ar: 'Report a content issue' },

  // ───────────────────────────────────────────────────────────────────
  // Footer link labels for the two new pages
  // ───────────────────────────────────────────────────────────────────

  'footer.link.school_pilot_pack': { en: 'School Pilot Pack', ar: 'School Pilot Pack' },
  'footer.link.content_verification': {
    en: 'Content Verification Methodology',
    ar: 'Content Verification Methodology',
  },
}
