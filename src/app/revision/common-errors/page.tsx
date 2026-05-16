import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Quote,
  ScrollText,
  ShieldAlert,
  Sparkles,
  XCircle,
  MapPin,
  Library,
  PenLine,
  Lock,
  ListTree,
  HelpCircle,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: '30 Mistakes That Cost Marks — Common Errors',
  description:
    'Verified against board specifications and primary sources. The 30 most common factual, quotation, and anthology errors students make in GCSE and IGCSE English Literature — and what to write instead.',
  alternates: { canonical: 'https://theenglishhub.app/revision/common-errors' },
  openGraph: {
    title: '30 Mistakes That Cost Marks — The English Hub',
    description:
      'Verified against board specs and primary sources. 30 critical errors students make in GCSE/IGCSE English Literature, and the correct answer for each.',
    url: 'https://theenglishhub.app/revision/common-errors',
    siteName: 'The English Hub',
    type: 'article',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30 Mistakes That Cost Marks — The English Hub',
    description:
      'The 30 most common factual, quotation, and anthology errors in GCSE/IGCSE English Literature — verified against board specs and primary sources.',
  },
}

/* ── Types ─────────────────────────────────────────────────────────── */

interface CriticalError {
  number: number
  text: string
  wrong: string
  right: string
  why: string
}

interface ErrorGroup {
  id: string
  title: string
  description: string
  icon: React.ElementType
  colour: string
  bgColour: string
  borderColour: string
  errors: CriticalError[]
}

/* ── Data — 30 verified critical flags ─────────────────────────────── */

const ERROR_GROUPS: ErrorGroup[] = [
  {
    id: 'misquoted-lines',
    title: 'Misquoted lines',
    description:
      'These are the misquotations examiners see most often. Get the wording exactly right — wrong quotes lose AO2 marks even when the analysis is good.',
    icon: Quote,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    borderColour: 'border-rose-500/20',
    errors: [
      {
        number: 1,
        text: 'Ozymandias (AQA Power & Conflict) — "Look ON my Works"',
        wrong: '"Look UPON my works, ye Mighty, and despair!"',
        right: '"Look ON my Works, ye Mighty, and despair!"',
        why: 'Applies to: AQA Power & Conflict cluster. Shelley wrote "on" — not "upon". This is one of the single most-misquoted lines in GCSE Literature. Cite it exactly: "Look on my Works, ye Mighty, and despair!"',
      },
      {
        number: 2,
        text: 'The Charge of the Light Brigade (AQA Power & Conflict) — "Theirs not to REASON why"',
        wrong: '"Theirs not to question why,"',
        right: '"Theirs not to reason why, / Theirs but to do and die"',
        why: 'Applies to: AQA Power & Conflict cluster. Tennyson\'s line is "reason", not "question". The misquote is so widespread that even some teaching materials get it wrong — always check against the original.',
      },
      {
        number: 3,
        text: 'Bayonet Charge (AQA Power & Conflict) — "etcetera"',
        wrong: '"etc." or doubled to "etcetera etcetera"',
        right: '"King, honour, human dignity, etcetera"',
        why: 'Applies to: AQA Power & Conflict cluster. Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don\'t double the word. The single, dragged-out word mimics the soldier\'s exhaustion and the cliché of patriotic rhetoric reduced to throwaway filler.',
      },
      {
        number: 4,
        text: 'Tissue (Dharker, AQA Power & Conflict) — final line stands ALONE',
        wrong: 'Treating "turned into your skin." as the closing line of the previous stanza.',
        right:
          'The final line — "turned into your skin." — is a single isolated line, set apart as its own one-line stanza.',
        why: 'Applies to: AQA Power & Conflict cluster. The structural isolation of the closing line is a deliberate choice by Dharker. Quoting it inside another stanza misrepresents the form. Always note that the final line is structurally separate.',
      },
      {
        number: 5,
        text: 'Exposure (Owen, AQA Power & Conflict) — "knive" is NOT a typo',
        wrong: 'Correcting "knive" to "knife" or describing it as a typo.',
        right:
          '"Merciless iced east winds that knive us…" — "knive" is the verb form Owen chose. It is correct.',
        why: 'Applies to: AQA Power & Conflict cluster. Owen uses "knive" as a verb to make the wind itself a violent agent. Editing or "correcting" it removes the writer\'s craft. Quote it exactly as published.',
      },
    ],
  },
  {
    id: 'misattributed-context',
    title: 'Misattributed historical context',
    description:
      'Context only earns marks when it is accurate. These are the contextual claims students make most often that are simply wrong.',
    icon: ScrollText,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    borderColour: 'border-amber-500/20',
    errors: [
      {
        number: 6,
        text: 'Drummer Hodge (Eduqas / Cambridge poetry) — Second Boer War, NOT WWI',
        wrong: 'Linking Drummer Hodge to World War One trench poetry.',
        right:
          'Hardy wrote Drummer Hodge in 1899, set during the Second Boer War in South Africa. WWI began in 1914 — fifteen years later.',
        why: 'Applies to: Eduqas / Cambridge selections that anthologise Hardy. Hardy died in 1928 but the poem predates WWI. Treating it as a WWI poem fundamentally misreads the imperial context (British soldiers fighting in South Africa, the unfamiliar Southern Hemisphere stars, the colonial setting).',
      },
      {
        number: 7,
        text: 'Bayonet Charge (AQA Power & Conflict) — Hughes did NOT fight in WWI',
        wrong: '"Hughes is writing from his own experience as a WWI soldier."',
        right:
          "Ted Hughes was born in 1930. He never fought in WWI. The poem is imagined, drawing on his father William Hughes's accounts of Gallipoli.",
        why: "Applies to: AQA Power & Conflict cluster. Hughes was a child during WWII, not a soldier in WWI. The imagined nature of the experience is part of the poem's power — it shows war trauma transmitted across generations.",
      },
      {
        number: 8,
        text: 'Remains (Armitage, AQA Power & Conflict) — Armitage never served',
        wrong: '"Armitage writes from his own experience as a soldier."',
        right:
          'Simon Armitage has never served in any war. Remains is based on the testimony of British soldier Guardsman Tromans, gathered for the documentary "The Not Dead" (2007).',
        why: 'Applies to: AQA Power & Conflict cluster. The poem is researched and imagined, not autobiographical. Linking PTSD in the poem to the writer\'s "own experience" is factually wrong and undermines your AO3 mark.',
      },
    ],
  },
  {
    id: 'wrong-place',
    title: 'Wrong setting / wrong place',
    description:
      'Where a poem is set — or whether it is set anywhere real at all — is the foundation of its meaning. Get this wrong and the analysis collapses.',
    icon: MapPin,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderColour: 'border-cyan-500/20',
    errors: [
      {
        number: 9,
        text: 'Blessing (Imtiaz Dharker, Eduqas / legacy AQA) — set in INDIA',
        wrong: '"Blessing is set in Africa, where there is no water."',
        right:
          'Blessing is set in India. Dharker draws on the water shortages in Mumbai. The poem is not about Africa.',
        why: 'Applies to: Eduqas anthology and legacy AQA selections. The setting is essential context. Misplacing the poem to a different continent makes any contextual point about colonialism, geography, or culture inaccurate.',
      },
      {
        number: 10,
        text: 'Eden Rock (Causley, AQA Love & Relationships) — the place is INVENTED',
        wrong: 'Trying to identify Eden Rock as a real Cornish location.',
        right:
          'Causley confirmed: "I have no idea, I mean I made it up!" Eden Rock is a fictional place evoking memory and the afterlife.',
        why: "Applies to: AQA Love & Relationships cluster. The invented setting matters — it allows Eden Rock to function as a symbolic threshold between life and death rather than a literal Cornish landscape. Don't pin it to a real map.",
      },
      {
        number: 11,
        text: 'The Émigrée (AQA Power & Conflict) — the city is UNNAMED on purpose',
        wrong: '"The Émigrée is about Sarajevo / Beirut / a specific city."',
        right:
          'Carol Rumens deliberately leaves the city unnamed. Identifying it as any specific place misreads the poem.',
        why: "Applies to: AQA Power & Conflict cluster. The anonymity is the point: the poem is about every exile, every lost home. Specifying a city collapses Rumens's deliberately universal frame into one particular conflict.",
      },
    ],
  },
  {
    id: 'anthology-versions',
    title: 'Anthology version errors',
    description:
      'Different boards use different versions of the same text. Quoting from the wrong edition can lose marks — always cite the version your board printed.',
    icon: Library,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    borderColour: 'border-blue-500/20',
    errors: [
      {
        number: 12,
        text: 'La Belle Dame Sans Merci — TWO versions exist',
        wrong:
          'Quoting the 1820 Indicator version when sitting Edexcel… or the 1848 Milnes version when sitting AQA.',
        right:
          'Edexcel uses the 1820 Indicator version. Other boards typically use the 1819/1848 Milnes version. Check your specification.',
        why: 'The two versions differ in wording and stanza order. Quoting the wrong one will produce "misquotations" in the examiner\'s eyes. Always use the version printed in your anthology.',
      },
      {
        number: 13,
        text: 'Edexcel IGCSE Anthology Issue 2 — Half-Caste uses "yu" not "you"',
        wrong: 'Writing "you" when quoting Half-Caste in Edexcel IGCSE.',
        right:
          'The Edexcel IGCSE Anthology Issue 2 prints "yu" — Agard\'s phonetic spelling reflecting Caribbean Creole.',
        why: 'The spelling is part of the poem\'s linguistic protest. "Correcting" it to standard English erases Agard\'s point about which Englishes are deemed legitimate.',
      },
      {
        number: 14,
        text: 'Bright Lights of Sarajevo — extra stanza breaks in Edexcel IGCSE Issue 2',
        wrong: 'Describing the structure based on a non-Edexcel printing.',
        right:
          'The Edexcel IGCSE Anthology Issue 2 prints extra stanza breaks not present in some other editions. Use the anthology version when discussing form.',
        why: "Stanza breaks are a structural feature you can analyse. Using a different printing's layout in the exam will produce a structural reading the examiner can't verify against the anthology.",
      },
      {
        number: 15,
        text: 'Non-fiction adapted texts (Edexcel IGCSE)',
        wrong:
          'Quoting "Explorers or boys messing about?" or "Young and dyslexic?" from the original online articles.',
        right:
          'The anthology versions are ADAPTED — they differ from the online originals. Always use the anthology version in the exam.',
        why: 'The originals are easy to find online but they are not what your exam paper is based on. Quoting them risks citing words that are not in the version examiners are reading.',
      },
      {
        number: 16,
        text: 'Funeral Blues (Auden, applies to: any board anthologising the poem) — use 1940 REVISED version',
        wrong: 'Quoting the 1936 "Twelve Songs IX" version of Funeral Blues.',
        right:
          'Use the 1940 revised version of Funeral Blues — this is the canonical version anthologised today.',
        why: 'Applies to: any board anthology featuring Funeral Blues. The 1936 version differs in wording and tone. The 1940 revision is the version most anthologies (and most readers) know — quote that one.',
      },
      {
        number: 17,
        text: 'The Prelude — AQA uses 1850, OCR uses 1799',
        wrong: 'Treating "The Prelude" as one fixed text.',
        right:
          'AQA prints the 1850 Prelude. OCR uses the 1799 two-part Prelude. These are DIFFERENT TEXTS with different wording and structure.',
        why: 'Wordsworth revised the poem heavily. If you study the wrong version, every quotation is technically a misquotation. Always confirm which version your board specifies.',
      },
      {
        number: 18,
        text: 'Boat Stealing (OCR) — 1799 two-part Prelude',
        wrong: 'Quoting the standard 1850 edition for OCR.',
        right:
          'OCR uses the 1799 two-part Prelude — not the standard 1850 edition. Cite the 1799 wording.',
        why: "This applies specifically to OCR. The 1799 version is shorter and uses different phrasing in places. Match your quotations to your board's version.",
      },
    ],
  },
  {
    id: 'spelling-author',
    title: 'Author names and spelling',
    description:
      "Spelling matters — especially in writers' names and titles. These are the most common slips that look careless to an examiner.",
    icon: PenLine,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    borderColour: 'border-violet-500/20',
    errors: [
      {
        number: 19,
        text: 'C. Day-Lewis (AQA Love & Relationships) — surname is HYPHENATED',
        wrong: '"C. Day Lewis" or "Cecil Day Lewis"',
        right: '"C. Day-Lewis" — the surname is hyphenated.',
        why: 'Applies to: AQA Love & Relationships cluster (and any board anthologising Walking Away). It\'s "Day-Lewis", not "Day Lewis". Misspelling the writer\'s name in an essay signals you don\'t know the text well.',
      },
      {
        number: 20,
        text: "The Émigrée (AQA Power & Conflict) — accents on BOTH final e's",
        wrong: '"The Emigree"',
        right: '"The Émigrée" — accents required on both é\'s.',
        why: "Applies to: AQA Power & Conflict cluster. The French spelling is part of the title. Dropping the accents changes the word's meaning and origin (it specifically signals a female exile, in French). Use É and é.",
      },
      {
        number: 21,
        text: 'Walking Away (AQA Love & Relationships) — dedicated to SEAN, not Daniel',
        wrong: '"Walking Away is dedicated to Daniel Day-Lewis (the actor)."',
        right:
          "Walking Away is dedicated to Sean Day-Lewis, the poet's eldest son. Daniel Day-Lewis (the actor) is C. Day-Lewis's younger son.",
        why: "Applies to: AQA Love & Relationships cluster. The poem describes watching Sean walk away to school for the first time. Naming the wrong son not only is factually wrong but undermines the personal context that's central to the poem.",
      },
    ],
  },
  {
    id: 'rights-copyright',
    title: 'Rights / copyright traps',
    description:
      "Some texts have unusual rights status that affects what you can rely on online. These flags don't affect your exam answers — but they do affect what we can host.",
    icon: Lock,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    borderColour: 'border-emerald-500/20',
    errors: [
      {
        number: 22,
        text: 'Frankenstein (cross-board novel) — "It\'s alive!" is FILM ONLY',
        wrong: 'Quoting "It\'s alive!" as a line from Mary Shelley\'s novel.',
        right:
          'Frankenstein\'s famous "It\'s alive!" comes from the 1931 film. It does NOT appear in the novel.',
        why: 'Applies to: any board with Frankenstein on its set-text list (e.g. AQA, OCR, Edexcel, Eduqas). Citing a film line as a novel quotation in an essay is an instant credibility loss — the examiner knows the text and will deduct accordingly.',
      },
      {
        number: 23,
        text: 'Animal Farm (cross-board, platform rights flag) — restricted (Orwell estate)',
        wrong: 'Assuming Animal Farm is freely usable because it is UK public domain.',
        right:
          'The Orwell estate actively enforces rights despite the UK PD status. Treat as restricted on this platform.',
        why: "Cross-board platform rights flag — not exam-specific. This affects what we can publish, not what you write. Quote freely in your own exam answer — this flag is for the platform's rights handling.",
      },
      {
        number: 24,
        text: 'Robert Frost (cross-board, platform rights flag) — UK copyright until 2033/34',
        wrong: "Treating Frost's poems as out of copyright in the UK.",
        right:
          "Frost's UK copyright expires 2033/34. Treat as RESTRICTED for our UK platform until then.",
        why: 'Cross-board platform rights flag — not exam-specific. Affects platform hosting, not exam answers. You can still quote and analyse Frost in any exam essay.',
      },
      {
        number: 25,
        text: 'Theme for English B (Hughes, cross-board, platform rights flag) — UK copyright until 2038',
        wrong: 'Assuming Langston Hughes is public domain.',
        right:
          'Theme for English B remains in UK copyright until 2038 — RESTRICTED. Do not assume public domain.',
        why: 'Cross-board platform rights flag — not exam-specific. In exam essays, quote and analyse Hughes as you would any anthologised poet.',
      },
      {
        number: 26,
        text: 'Zephaniah and Alagiah (cross-board, platform rights flag) — estates now hold rights',
        wrong:
          'Treating the writers as still living when discussing rights or recent publications.',
        right:
          'Benjamin Zephaniah died January 2023. George Alagiah died July 2023. Rights are now held by their estates.',
        why: 'Cross-board platform rights flag — not exam-specific. Affects rights handling and biographical context (when discussing the writer in present tense versus past tense). Both writers are anthologised across multiple boards (e.g. AQA, Edexcel IGCSE) and remain examinable.',
      },
    ],
  },
  {
    id: 'cluster-classification',
    title: 'Spec / cluster classification',
    description:
      'Putting a poem in the wrong anthology cluster — or studying the wrong version of a poem — wastes hours of revision. Confirm exactly where each text sits.',
    icon: ListTree,
    colour: 'text-clay-600',
    bgColour: 'bg-orange-500/10',
    borderColour: 'border-orange-500/20',
    errors: [
      {
        number: 27,
        text: 'Checking Out Me History — POWER & CONFLICT, not Love & Relationships',
        wrong: 'Studying Checking Out Me History under Love & Relationships.',
        right:
          'Checking Out Me History sits in the Power & Conflict cluster (AQA). Common misclassification.',
        why: "You will be asked to compare it with other Power & Conflict poems (Ozymandias, London, etc.) — not L&R poems. Studying it in the wrong cluster means you'll have prepared the wrong comparison points.",
      },
      {
        number: 28,
        text: 'Holy Thursday (Blake / OCR) — TWO different poems',
        wrong: 'Treating Holy Thursday as one poem.',
        right:
          'Blake wrote TWO poems with this title: "Holy Thursday" in Songs of Innocence (joyful tone) and "Holy Thursday" in Songs of Experience (satirical tone). Verify which one your board prints.',
        why: "The two poems contradict each other. Studying the wrong one means your reading of tone, attitude, and Blake's argument will be the opposite of what the exam expects.",
      },
    ],
  },
  {
    id: 'pending-content',
    title: 'Pending / unverified content',
    description:
      'A few texts and specifications are still being verified. Treat these as provisional and double-check against your most recent anthology or specification before exam day.',
    icon: HelpCircle,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderColour: 'border-cyan-500/20',
    errors: [
      {
        number: 29,
        text: 'Cambridge IGCSE 0475 (2026-27 cycle) — set texts not yet confirmed',
        wrong: 'Assuming current Cambridge IGCSE set texts will continue unchanged.',
        right:
          'Cambridge IGCSE 0475 (2026-27) set texts are not yet confirmed. Flag as pending and check the latest Cambridge specification.',
        why: 'Applies to: Cambridge IGCSE 0475 only. Set texts can rotate. Always confirm with the current Cambridge specification document before locking in your revision plan.',
      },
      {
        number: 30,
        text: 'Decomposition (Ghose, Eduqas) — low public documentation',
        wrong: 'Relying on online summaries that may not match the Eduqas anthology version.',
        right:
          'Verify all content for Decomposition against the Eduqas anthology edition itself, not third-party summaries.',
        why: 'Applies to: Eduqas anthology. Less-anthologised poems often have unreliable online write-ups. Always work from the printed anthology text where possible.',
      },
    ],
  },
]

const TOTAL_ERRORS = ERROR_GROUPS.reduce((sum, g) => sum + g.errors.length, 0)

/* ── Page ──────────────────────────────────────────────────────────── */

export default function CommonErrorsPage() {
  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb items={[{ label: 'Revision', href: '/revision' }, { label: 'Common Errors' }]} />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="errors-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.05] p-6 sm:p-8 lg:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl"
        />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <ShieldAlert className="mr-1 size-3" aria-hidden="true" />
            Verified library
          </Badge>
          <h1
            id="errors-hero-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
          >
            {TOTAL_ERRORS} Mistakes That Cost Marks
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Verified against board specifications and primary sources. These are the misquotations,
            wrong contexts, and version mix-ups examiners see most often in GCSE and IGCSE English
            Literature.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="default" size="lg" render={<Link href="#misquoted-lines" />}>
              Start with the worst offenders
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/revision/exam-technique/common-mistakes" />}
            >
              Essay-writing mistakes (different page)
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2">
              <CheckCircle2 className="size-4 text-emerald-400" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">
                Verified against primary sources
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2">
              <BookOpen className="size-4 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Cross-checked with board specs</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2">
              <Quote className="size-4 text-rose-400" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Wrong vs right examples</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2">
              <Sparkles className="size-4 text-violet-400" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Updated for current anthologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why this matters ────────────────────────────────────── */}
      <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] via-card to-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
            <AlertTriangle className="size-6 text-amber-400" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-heading-md font-heading text-foreground">
              Why these errors are different
            </h2>
            <p className="mt-2 max-w-3xl text-body-sm text-muted-foreground leading-relaxed">
              Most &ldquo;common mistakes&rdquo; lists are about essay-writing technique (retelling,
              no quotation, no terminology). This list is different. Every entry below is a factual
              error &mdash; a misquotation, a wrong setting, a wrong date, an anthology version
              mix-up &mdash; that examiners can verify against the text in front of them. Get one of
              these wrong and the marker can&apos;t give you the AO2 or AO3 mark, no matter how
              strong the rest of the analysis is.
            </p>
            <p className="mt-3 max-w-3xl text-body-sm text-muted-foreground leading-relaxed">
              Want the technique-and-craft mistakes (retelling, no terminology, vague effects)?{' '}
              <Link
                href="/revision/exam-technique/common-mistakes"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                See the 20 essay-writing mistakes guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Category navigation ─────────────────────────────────── */}
      <section aria-labelledby="categories-heading">
        <div className="mb-4 flex items-center gap-3">
          <ListTree className="size-5 text-primary" aria-hidden="true" />
          <h2 id="categories-heading" className="text-heading-md font-heading text-foreground">
            Jump to a category
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ERROR_GROUPS.map((group) => {
            const Icon = group.icon
            return (
              <Link
                key={group.id}
                href={`#${group.id}`}
                className={`group flex items-start gap-3 rounded-xl border ${group.borderColour} bg-card p-4 transition-all hover:shadow-card-hover`}
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${group.bgColour}`}
                >
                  <Icon className={`size-4 ${group.colour}`} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {group.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {group.errors.length} {group.errors.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Error groups ────────────────────────────────────────── */}
      {ERROR_GROUPS.map((group) => {
        const Icon = group.icon
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="scroll-mt-24"
          >
            <div className="mb-4 flex items-start gap-3">
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${group.bgColour}`}
              >
                <Icon className={`size-5 ${group.colour}`} aria-hidden="true" />
              </div>
              <div>
                <h2
                  id={`${group.id}-heading`}
                  className="text-heading-lg font-heading text-foreground"
                >
                  {group.title}
                </h2>
                <p className="mt-1 max-w-3xl text-body-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {group.errors.map((err) => (
                <details
                  key={err.number}
                  className={`group/item rounded-2xl border ${group.borderColour} bg-card overflow-hidden`}
                >
                  <summary
                    className={`flex cursor-pointer list-none items-start gap-3 p-5 sm:p-6 transition-colors hover:bg-muted/30`}
                  >
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${group.bgColour} text-sm font-bold ${group.colour}`}
                    >
                      {err.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-heading-sm font-heading text-foreground">{err.text}</h3>
                    </div>
                    <ChevronDown
                      className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-open/item:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40 border-t border-border/40">
                    {/* Wrong */}
                    <div className="space-y-2 p-5 sm:p-6">
                      <div className="flex items-center gap-2">
                        <XCircle className="size-4 text-rose-400" aria-hidden="true" />
                        <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                          Common error
                        </p>
                      </div>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {err.wrong}
                      </p>
                    </div>
                    {/* Right */}
                    <div className="space-y-2 p-5 sm:p-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-emerald-400" aria-hidden="true" />
                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          Correct answer
                        </p>
                      </div>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {err.right}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border/40 bg-muted/10 p-5 sm:p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <BookOpen className="size-4 text-primary" aria-hidden="true" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Why it matters / source
                      </p>
                    </div>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">{err.why}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )
      })}

      {/* ── Verification footer ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ShieldAlert className="size-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" aria-hidden="true" />
                Verification standard
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">
                Every flag is verified against a primary source
              </h2>
              <p className="mt-2 max-w-2xl text-body-sm text-muted-foreground">
                Where a board specifies a particular edition or version, we cite that edition. Where
                a writer&apos;s biography is in dispute, we use the writer&apos;s own statements.
                Spot something we got wrong?{' '}
                <Link
                  href="/help/report"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Tell us
                </Link>{' '}
                and we&apos;ll fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-links ─────────────────────────────────────────── */}
      <section aria-labelledby="related-heading">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" aria-hidden="true" />
          <h2 id="related-heading" className="text-heading-md font-heading text-foreground">
            Keep going
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/revision/exam-technique/common-mistakes"
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
              <PenLine className="size-5 text-violet-400" aria-hidden="true" />
            </div>
            <h3 className="text-heading-sm font-heading text-foreground group-hover:text-primary transition-colors">
              20 essay-writing mistakes
            </h3>
            <p className="mt-1 flex-1 text-body-sm text-muted-foreground">
              Different list — the technique mistakes that cap your grade (retelling,
              feature-spotting, no terminology, etc.).
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
              Open guide
              <ArrowRight className="size-3" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/revision/poetry"
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
              <Quote className="size-5 text-rose-400" aria-hidden="true" />
            </div>
            <h3 className="text-heading-sm font-heading text-foreground group-hover:text-primary transition-colors">
              Poetry hub
            </h3>
            <p className="mt-1 flex-1 text-body-sm text-muted-foreground">
              Verified analysis of every anthology poem — including the misquoted lines and version
              flags listed above.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
              Open hub
              <ArrowRight className="size-3" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/revision/flashcards"
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <CheckCircle2 className="size-5 text-emerald-400" aria-hidden="true" />
            </div>
            <h3 className="text-heading-sm font-heading text-foreground group-hover:text-primary transition-colors">
              Flashcards
            </h3>
            <p className="mt-1 flex-1 text-body-sm text-muted-foreground">
              Drill the exact wording of key quotations until they stick — with spaced-repetition
              review.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
              Start a session
              <ArrowRight className="size-3" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      {/* ── Back link ───────────────────────────────────────────── */}
      <div className="pt-2">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back to your hub
        </Button>
      </div>
    </div>
  )
}
