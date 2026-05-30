// ─── IELTS-11 Academic-transition modules - self-authored content ────────────
// Short, self-guided modules to prepare a Gulf applicant for life as a UK
// university student, directly addressing the UCAS finding that international
// students often arrive feeling underprepared. ALL content here is original /
// self-authored — no copyrighted material.
//
// Each module is a short read plus ONE self-rating. The four self-ratings map
// EXACTLY onto the AcademicTransitionReadinessInput shape the readiness engine
// consumes, so completing the modules upgrades the report's Academic-transition
// domain (weight 15) from self-report to module-driven. The mapping is declared
// per-module via `field` + `optionValue`, so the client can write the slice
// without any bespoke glue.
// ────────────────────────────────────────────────────────────────────────────

import type { AcademicTransitionReadinessInput } from './readiness'

/** Which readiness field a module's self-rating feeds. */
export type TransitionField = keyof AcademicTransitionReadinessInput

export interface TransitionRatingOption {
  /** The literal value written into the readiness slice for this field. */
  value: string
  /** Learner-facing label. */
  label: string
}

export interface TransitionModule {
  id: 'writing' | 'lectures' | 'budgeting' | 'accommodation'
  icon: 'PenLine' | 'NotebookPen' | 'Wallet' | 'Home'
  title: string
  /** One-line summary shown on the card before expanding. */
  summary: string
  /** Short self-authored read, as paragraphs. */
  body: string[]
  /** Quick "key points" chips. */
  keyPoints: string[]
  /** The single self-rating question for this module. */
  question: string
  /** Which readiness field this rating sets. */
  field: TransitionField
  /** Ordered best→worst; each maps to a literal field value. */
  options: TransitionRatingOption[]
}

export const TRANSITION_MODULES: TransitionModule[] = [
  {
    id: 'writing',
    icon: 'PenLine',
    title: 'Academic writing for university',
    summary: 'Referencing, academic integrity, and how essays differ from IELTS Task 2.',
    body: [
      'University writing is judged very differently from IELTS Task 2. In IELTS you write a short, self-contained opinion essay from memory in 40 minutes. At university you write longer, researched assignments over days or weeks, and your argument must be supported by evidence from sources you read, not just your own opinion.',
      'Referencing is the backbone of that evidence. Every idea, figure or quotation you take from a source must be credited using your department’s referencing style (commonly Harvard, APA or a numbered style). Get into the habit early of noting the author, year and page for everything you read — chasing references later wastes hours.',
      'Academic integrity matters more than many new students expect. Copying text without crediting it, reusing your own previous work, or paying someone to write for you are all forms of plagiarism, and UK universities use detection software and apply real penalties — from losing marks to failing a module. Paraphrasing properly (re-expressing an idea in your own words AND citing it) is a skill worth practising before you arrive.',
      'Finally, structure: a university essay builds one clear argument across paragraphs that each make a point, support it with evidence, and link back to the question. That is closer to a long, evidenced version of Task 2 than to anything else — so the writing habits you build for IELTS are a genuine head start.',
    ],
    keyPoints: [
      'Cite every source — track author, year, page as you read',
      'Paraphrase + cite; never copy or self-plagiarise',
      'One argument, evidenced across linked paragraphs',
    ],
    question: 'How confident are you writing referenced, plagiarism-safe academic work?',
    field: 'academicWriting',
    options: [
      { value: 'confident', label: 'Confident — I can reference and paraphrase well' },
      { value: 'some', label: 'Some — I know the basics but need practice' },
      { value: 'low', label: 'Low — this is new to me' },
    ],
  },
  {
    id: 'lectures',
    icon: 'NotebookPen',
    title: 'Note-taking, lectures & independent study',
    summary: 'Contact hours vs independent study, and getting value from lectures.',
    body: [
      'A common shock for new international students is how few timetabled hours a UK degree has. You might have only 12–18 “contact hours” a week (lectures, seminars and labs). The rest is independent study — reading, preparing, writing and revising on your own. The expectation is that a full-time degree is genuinely full-time: many universities suggest around 35–40 hours of total study per week.',
      'That means the timetable is not the workload. If you treat the gaps between lectures as free time rather than study time, you will fall behind quickly, because assessment deadlines assume you have done the reading independently.',
      'Lectures introduce ideas; they rarely contain everything you need. Take selective notes — capture the structure, key terms and anything the lecturer stresses, rather than transcribing every word. Many courses post slides or recordings, so during the lecture focus on understanding, then consolidate your notes afterwards while it is fresh.',
      'Seminars and tutorials are where you are expected to contribute. Coming prepared with the set reading and a question or two is normal and expected — it is not showing off. Building these habits in your first weeks is the single biggest predictor of a smooth transition.',
    ],
    keyPoints: [
      'Contact hours are a fraction of the real workload',
      'Plan ~35–40 hrs/week including independent study',
      'Consolidate lecture notes the same day; prep for seminars',
    ],
    question: 'Do you understand contact hours vs independent-study expectations?',
    field: 'contactHours',
    options: [
      { value: 'understand', label: 'Yes — I understand and can plan for it' },
      { value: 'unsure', label: 'Unsure — I need to read my course handbook' },
    ],
  },
  {
    id: 'budgeting',
    icon: 'Wallet',
    title: 'Budgeting & opening a UK bank account',
    summary: 'Rough monthly costs and getting set up financially when you arrive.',
    body: [
      'Beyond tuition, you need a realistic monthly budget so your maintenance funds last the year. Outside London a common range is roughly £900–£1,300 a month once you include rent, food, transport, phone and some social spending; in London it is higher. These are planning estimates only — your real costs depend on your city, your accommodation and your lifestyle.',
      'Build your budget around the fixed costs first: rent (often your biggest single cost), bills if not included, a phone/SIM plan, and travel. Then set sensible amounts for food and personal spending, and keep a small buffer for one-off costs like course materials or a deposit.',
      'Opening a UK bank account makes day-to-day life much easier and is usually needed to receive any stipend or pay rent. Most banks ask for your passport, your visa/BRP or eVisa share code, and proof of your UK address and university enrolment (your university can issue a bank letter). Some banks and app-based accounts let you start the process before you arrive — check what your university recommends.',
      'Set up your account and a budgeting habit in your first couple of weeks. Knowing exactly what comes in and goes out removes a huge amount of stress and protects the funds you worked hard to evidence for your visa.',
    ],
    keyPoints: [
      'Plan ~£900–£1,300/month outside London (more in London)',
      'Fix rent, bills, phone, transport first; keep a buffer',
      'Bank account needs passport, visa/share code & uni letter',
    ],
    question: 'How confident are you budgeting and setting up money in the UK?',
    field: 'budgeting',
    options: [
      { value: 'confident', label: 'Confident — I have a budget and a bank plan' },
      { value: 'some', label: 'Some — I have a rough idea' },
      { value: 'low', label: 'Low — I haven’t thought about it yet' },
    ],
  },
  {
    id: 'accommodation',
    icon: 'Home',
    title: 'Accommodation: halls vs private',
    summary: 'Choosing where to live, deposits, and the timelines that catch people out.',
    body: [
      'Most first-year international students choose university-managed halls of residence. Halls are convenient (often all-inclusive of bills, furnished, with contracts that match the academic year) and they are the easiest way to meet people in your first weeks. Demand is high, so apply as early as your offer allows — popular halls fill up months before term.',
      'Private renting (a room in a shared house or a studio) can be cheaper or give more independence, but it comes with more responsibility: you usually pay bills separately, sign a longer fixed-term contract, and arrange your own contents insurance. Never pay a deposit or “holding fee” for a property you have not been able to verify, and be alert to rental scams targeting overseas students.',
      'Understand deposits before you commit. For private tenancies in England, your deposit must by law be protected in a government-approved tenancy deposit scheme, and there are caps on how much can be charged. University halls have their own deposit and payment rules — read them carefully.',
      'The timelines are what catch people out: hall applications often open right after you accept an offer, while private viewings usually happen close to arrival. Plan early, keep copies of every contract, and don’t feel pressured to sign anything before you understand the costs and the cancellation terms.',
    ],
    keyPoints: [
      'Apply for halls as early as your offer allows',
      'Private lets: protected deposits, watch for scams',
      'Timelines vary — plan early, read every contract',
    ],
    question: 'Where are you with sorting your UK accommodation?',
    field: 'accommodation',
    options: [
      { value: 'sorted', label: 'Sorted — I have somewhere confirmed' },
      { value: 'searching', label: 'Searching — actively looking' },
      { value: 'not_started', label: 'Not started yet' },
    ],
  },
]
