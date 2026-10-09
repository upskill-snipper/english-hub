import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel Paper 1: Shakespeare and Post-1914',
    description:
      'Edexcel GCSE English Literature Paper 1 (1ET0/01): Shakespeare set texts, post-1914 prose and drama, timing guidance and essay technique.',
    images: [
      {
        url: '/api/og?title=Edexcel+Paper+1%3A+Shakespeare+and+Post-1914',
        width: 1200,
        height: 630,
        alt: 'Edexcel Paper 1: Shakespeare and Post-1914',
      },
    ],
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/paper-1',
  },
  title: 'Edexcel Paper 1: Shakespeare and Post-1914',
  description:
    'Edexcel GCSE English Literature Paper 1 (1ET0/01): Shakespeare set texts, post-1914 prose and drama, timing guidance and essay technique.',
}

/* ─── Page component ─────────────────────────────────────────── */

export default async function Paper1Page() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Shakespeare and Post-1914 Literature
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            1 hour 45 minutes &middot; 80 marks &middot; 50% of GCSE
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Exam structure ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground">{_tr(`Exam Structure`)}</h2>
          {/* 9 October 2026: this said Section A was one essay with no extract and 4 marks for
              SPaG, and Section B had analysis of methods and no SPaG. Pearson's 1ET0/01
              (specification Issue 2, PDF page 23, and its June 2024 mark scheme) has it the other
              way round: Section A prints an extract and has no SPaG; Section B prints none, has
              no marks for analysis of methods, and carries the paper's 8 marks for accuracy. */}
          <p className="mt-2 text-muted-foreground">
            Paper 1 is divided into two sections, and the exam is closed book: you cannot take your
            texts in.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">Section A: Shakespeare</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                40 marks &middot; ~55 minutes recommended
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  One two-part question on your studied Shakespeare play, built on a printed extract
                  of about 30 lines.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Part (a), 20 marks: how Shakespeare presents something in the extract, marked for
                  analysis of language, form and structure (AO2) only.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Part (b), 20 marks: the importance of a theme from the extract elsewhere in the
                  play, marked for your response to the play (AO1, 15 marks) and context (AO3, 5
                  marks).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  There are no marks for spelling, punctuation and grammar in this section.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">Section B: Post-1914 Literature</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                40 marks &middot; ~50 minutes recommended
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  You answer one essay question on your studied post-1914 play or novel, from a
                  choice of two.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  No extract is printed: each question opens with a short quotation from the text,
                  and you select your own evidence from across it.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Questions ask about themes, characters, or the writer&apos;s message.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Marked for your response to the text (AO1, 16 marks), context (AO3, 16 marks), and
                  vocabulary, sentence structures, spelling and punctuation (AO4, 8 marks). There
                  are no marks for analysis of language, form and structure as such.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Shakespeare set texts ─────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Section A: Shakespeare Set Texts</h2>
          <p className="mt-2 text-muted-foreground">
            You will study one of the following plays. Click through for the full study guide where
            available.
          </p>

          <div className="mt-6 space-y-6">
            {/* Macbeth */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-foreground">Macbeth</h3>
                <Link
                  href="/resources/english-literature/edexcel/macbeth"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Full Study Guide &rarr;
                </Link>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Shakespeare&apos;s shortest and most intense tragedy. Macbeth, a Scottish nobleman,
                is tempted by witches&apos; prophecies and his wife&apos;s ambition to murder King
                Duncan and seize the throne. His reign descends into tyranny, paranoia, and
                bloodshed.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ambition, guilt, the supernatural, masculinity, kingship, appearance vs reality,
                    fate vs free will
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Macbeth, Lady Macbeth, Banquo, Macduff, Duncan, the Witches, Malcolm
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Context
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Written c.1606 for James I; Gunpowder Plot, Divine Right of Kings, Jacobean
                    views on witchcraft
                  </p>
                </div>
              </div>
            </div>

            {/* Romeo and Juliet */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">Romeo and Juliet</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A tragedy of two young lovers whose deaths ultimately reconcile their feuding
                families in Verona. The play explores the destructive power of hate and the
                intensity of youthful love.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Themes`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Love, conflict, fate, family loyalty, honour, youth vs age, light and dark
                    imagery
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Characters`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Romeo, Juliet, Tybalt, Mercutio, the Nurse, Friar Lawrence, Lord Capulet
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Context
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Written c.1595; patriarchal Elizabethan society, arranged marriages, Italian
                    feuding families
                  </p>
                </div>
              </div>
            </div>

            {/* The Merchant of Venice */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">The Merchant of Venice</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Bassanio borrows money from the Jewish moneylender Shylock (via Antonio) to woo
                Portia. When Antonio cannot repay, Shylock demands a pound of flesh. The play raises
                complex questions about justice, mercy, prejudice, and wealth.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Themes`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Justice vs mercy, prejudice and anti-Semitism, love and friendship, wealth,
                    appearance vs reality
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Characters`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Shylock, Portia, Antonio, Bassanio, Jessica, Gratiano
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Context
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Written c.1596; Elizabethan anti-Semitism, usury laws, Venice as a trading hub
                  </p>
                </div>
              </div>
            </div>

            {/* Twelfth Night */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">Twelfth Night</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A comedy of mistaken identity. Viola, shipwrecked in Illyria, disguises herself as
                &quot;Cesario&quot; and enters the service of Duke Orsino, whom she secretly loves.
                A tangled web of love and deception unfolds.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Themes`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Love and desire, disguise and identity, class and social order, foolishness,
                    gender roles
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Characters`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Viola, Orsino, Olivia, Malvolio, Sir Toby Belch, Feste
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Context
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Written c.1601; Twelfth Night festival, cross-dressing in Elizabethan theatre,
                    social hierarchy
                  </p>
                </div>
              </div>
            </div>

            {/* Much Ado About Nothing */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">Much Ado About Nothing</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A comedy set in Messina where Beatrice and Benedick spar verbally while their
                friends plot to bring them together. A darker subplot involves the slander of Hero
                by Don John. The play examines honour, deception, and the nature of love.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Themes`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Love and courtship, honour, deception and eavesdropping, gender and power,
                    appearance vs reality
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {_tr(`Key Characters`)}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Beatrice, Benedick, Hero, Claudio, Don Pedro, Don John, Dogberry
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Context
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Written c.1598; patriarchal society, female honour and chastity, Elizabethan wit
                    culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Post-1914 set texts ───────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Section B: Post-1914 Literature Set Texts
          </h2>
          <p className="mt-2 text-muted-foreground">
            You will study one of twelve modern texts: six plays (An Inspector Calls, Hobson&apos;s
            Choice, Blood Brothers, Journey&apos;s End, The Empress and Refugee Boy) and six novels
            (Animal Farm, Lord of the Flies, Anita and Me, The Woman in Black, Coram Boy and Boys
            Don&apos;t Cry). Five of them are below. Questions may ask about a character, theme, or
            the writer&apos;s ideas.
          </p>

          <div className="mt-6 space-y-6">
            {/* An Inspector Calls */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-foreground">
                  An Inspector Calls - J.B. Priestley (1945)
                </h3>
                <Link
                  href="/resources/english-literature/edexcel/inspector-calls"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Full Study Guide &rarr;
                </Link>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Inspector Goole visits the Birling family to investigate the suicide of a young
                woman, Eva Smith. Each family member is revealed to have played a part. Priestley
                uses the play to critique capitalist selfishness and promote social responsibility.
              </p>
              <div className="mt-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {_tr(`Key Themes`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Social responsibility, class, generational divide, gender inequality, guilt,
                  collective vs individual
                </p>
              </div>
            </div>

            {/* Lord of the Flies */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Lord of the Flies - William Golding (1954)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A group of boys are stranded on an uninhabited island after a plane crash. Initially
                attempting democracy, they descend into savagery. Golding explores innate human evil
                and the fragility of civilisation.
              </p>
              <div className="mt-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {_tr(`Key Themes`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Civilisation vs savagery, loss of innocence, power and leadership, fear, inherent
                  evil, democracy vs tyranny
                </p>
              </div>
            </div>

            {/* Animal Farm */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Animal Farm - George Orwell (1945)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                An allegorical novella where farm animals overthrow their human farmer, only for the
                pigs to establish a new tyranny. Orwell satirises the Russian Revolution and
                Stalinist corruption.
              </p>
              <div className="mt-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {_tr(`Key Themes`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Power and corruption, propaganda, class and inequality, revolution and betrayal,
                  education and ignorance
                </p>
              </div>
            </div>

            {/* The Woman in Black */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                The Woman in Black - Susan Hill (1983)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Arthur Kipps, a young solicitor, travels to the remote Eel Marsh House to settle a
                deceased client&apos;s estate. He encounters the ghostly Woman in Black, whose
                appearances are linked to the deaths of children. A modern Gothic novel drawing on
                Victorian ghost story traditions.
              </p>
              <div className="mt-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {_tr(`Key Themes`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Gothic horror, isolation, revenge, grief and loss, the supernatural, courage and
                  vulnerability
                </p>
              </div>
            </div>

            {/* 9 October 2026: a card here described Never Let Me Go, which is not one of
                Pearson's twelve post-1914 texts for 1ET0/01 (the contents page of its June 2024
                question paper lists them), so the page showed six texts under a sentence
                promising five. */}

            {/* Anita and Me */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Anita and Me - Meera Syal (1996)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Nine-year-old Meena Kumar grows up as the daughter of Punjabi parents in a 1960s
                Black Country village. She becomes fascinated by the bold, rebellious Anita Rutter.
                A coming-of-age story exploring cultural identity, belonging, and growing up between
                two worlds.
              </p>
              <div className="mt-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {_tr(`Key Themes`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Cultural identity, racism and prejudice, growing up, friendship, community, gender
                  roles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Paper 1 Exam Technique</h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Shakespeare (Section A) - Suggested Approach
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>Read both parts first.</strong> Part (a) is about the extract; part (b)
                    is about a theme from it elsewhere in the play. Underline the key word(s) in
                    each.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>{_tr(`Analyse language and dramatic techniques`)}</strong> - in part
                    (a), explore Shakespeare&apos;s use of imagery, soliloquy, dramatic irony, verse
                    vs prose, and stagecraft in the extract. That analysis is all part (a) is marked
                    for: context and the rest of the play earn nothing there.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>{_tr(`Plan 3-4 main points`)}</strong> for part (b) that cover different
                    parts of the play (beginning, middle, end), away from the extract, to show how
                    the theme develops.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    4
                  </span>
                  <span>
                    <strong>{_tr(`Embed quotations`)}</strong> - in part (a), short phrases from the
                    printed extract; in part (b), short quotations you have memorised, since the
                    rest of the play is not printed.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    5
                  </span>
                  <span>
                    <strong>Link to context meaningfully</strong> - in part (b), connect ideas to
                    Jacobean/Elizabethan society, audience reactions, and Shakespeare&apos;s
                    intentions. Context is worth 5 marks there and none in part (a). Don&apos;t bolt
                    it on as separate sentences.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    6
                  </span>
                  <span>
                    <strong>Divide your time equally.</strong> Pearson advises it: about 27 minutes
                    on each part.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Post-1914 Literature (Section B) - Suggested Approach
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>{_tr(`Choose your question wisely`)}</strong> - you usually have a
                    choice of two per text. Pick the one where you have the strongest evidence.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>{_tr(`Structure your response`)}</strong> using clear topic sentences.
                    Address the question directly in every paragraph.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>{_tr(`Use the writer's name`)}</strong> - phrases like &quot;Priestley
                    presents...&quot; or &quot;Golding suggests...&quot; show you understand the
                    text is a construct with a deliberate message, which is part of an informed,
                    critical response.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    4
                  </span>
                  <span>
                    <strong>{_tr(`Explore the writer's purpose`)}</strong> - why did they write this
                    text? What message are they conveying to the audience? This secures context
                    marks, which are worth 16 in this section, as much as your response to the text.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    5
                  </span>
                  <span>
                    <strong>{_tr(`Cover the whole text`)}</strong> - try to reference moments from
                    across the entire text to demonstrate thorough knowledge.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    6
                  </span>
                  <span>
                    <strong>{_tr(`Write accurately`)}</strong> - 8 marks in this section are for
                    your vocabulary, sentence structures, spelling and punctuation. Check the
                    spelling of names and key terms.
                  </span>
                </li>
              </ol>
            </div>

            {/* Sample paragraph */}
            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              {/* 9 October 2026: this was one Point, Evidence, Analysis, Context paragraph for
                  Section A, which fits neither part: part (a) gives context no marks, and part (b)
                  gives none for analysis of language as such. It is now a part (b) paragraph. */}
              <h3 className="text-lg font-bold text-foreground">
                Model Part (b) Paragraph (PEE+C)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Point &rarr; Evidence &rarr; Explanation &rarr; Context
              </p>
              <div className="mt-4 rounded-lg bg-card p-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Point:</strong> Shakespeare presents Macbeth
                  as consumed by guilt after murdering Duncan.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Evidence:</strong> Immediately after the
                  murder, Macbeth asks, &quot;Will all great Neptune&apos;s ocean wash this blood /
                  Clean from my hand?&quot;
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Explanation:</strong> His guilt arrives at the
                  moment of the crime, before anyone suspects him: he imagines the whole sea unable
                  to clean his hand, so the guilt is already permanent. The same idea returns when
                  Lady Macbeth, sleepwalking, cannot wash her hands clean either.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Context:</strong> Shakespeare&apos;s Jacobean
                  audience, who believed in the Divine Right of Kings, would view regicide as the
                  ultimate sin - a crime against God - making Macbeth&apos;s guilt not merely
                  psychological but spiritual.
                </p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                In part (a), the shape is Point, Evidence, Analysis: a quotation from the printed
                extract and close analysis of its language, form or structure, with no context.
              </p>
            </div>
          </div>
        </section>

        {/* ── Timing guide ──────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">{_tr(`Timing Guide`)}</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary text-start">
                  <th className="py-2 pe-4 font-semibold text-foreground">Section</th>
                  <th className="py-2 pe-4 font-semibold text-foreground">Time</th>
                  <th className="py-2 font-semibold text-foreground">Tip</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pe-4 font-medium">{_tr(`Section A: Shakespeare`)}</td>
                  <td className="py-3 pe-4">~55 mins</td>
                  <td className="py-3">
                    {_tr(`About 27 minutes on each part, with a few minutes' planning for each.`)}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pe-4 font-medium">{_tr(`Section B: Post-1914`)}</td>
                  <td className="py-3 pe-4">~50 mins</td>
                  <td className="py-3">{_tr(`Spend 5 mins planning. Write 4-5 paragraphs.`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  )
}
