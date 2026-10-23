/**
 * What each specification sets, read from the awarding body's own document,
 * one entry per QUALIFICATION, and checked against the registry by a test.
 *
 * WHY THIS FILE EXISTS. On 20 October 2026 the set-text data was verified
 * against the boards' documents and the worst errors were not in SET_TEXTS.
 * They were in hand-written claims beside it: a board-less shelf that labelled
 * two texts "Cambridge IGCSE 0475" when no 0475 syllabus has ever listed them,
 * an IAL unit table describing a qualification Pearson does not run, a poetry
 * hub calling five Paper 2 Section A poems "Section B" and counting fifteen,
 * four A-level tags on a board whose specification names the texts nowhere.
 * No test read any of those claims, because the tests read SET_TEXTS and the
 * claims did not.
 *
 * So this file records, for every specification that has been read, what it
 * sets and where, with the document, its version, the page and the date. The
 * test beside it (spec-truth-agrees-with-registry.test.ts) fails when the
 * registry and this file disagree in either direction, when a hand-written
 * board list reappears on the pages it scans, and when an entry is more than
 * a year old. The pages are meant to read component, choice and series from
 * here and from the modules it cites, not to type them.
 *
 * WHAT GOES IN AN ENTRY. Only what the named document says, on the page
 * given. A text we hold a row for and the document sets. Nothing inferred
 * from another board, a publisher's website or memory. Where the document
 * dates an entry ("First assessment May 2026", a Cambridge series), the date
 * is recorded so a resit candidate is not told they could have answered on it.
 * Where a text is on a SUGGESTED list rather than a set list (OCR Component
 * 02), `suggestedOnly` says so. Where the document restricts the edition,
 * `editionNote` quotes it.
 *
 * WHAT IS NOT HERE. Texts a specification sets that the registry does not
 * hold. That is the content backlog, and the design of 21 October 2026 lists
 * it; a file that asserted them would make the test fail on every board at
 * once and teach nobody anything. And specifications nobody has read, which
 * are in UNVERIFIED_SPECS with the reason, so that "unverified" and "verified
 * empty" cannot be confused.
 *
 * Seeded 23 October 2026 with the specifications corrected that day. Every
 * page cited below is the printed page number unless it says "PDF page".
 */

import type { ExamBoard } from './board-config'

export interface SpecTruthText {
  /** The SET_TEXTS slug. */
  slug: string
  /** Where the document assesses it, in the document's own component names. */
  component: string
  /** How many of the list a candidate studies, in the document's terms. */
  choice?: string
  /** A closed option within the component (AQA 7712 Option 2A; OCR H472 topics). */
  option?: string
  /** The anthology, collection or prescribed selection it belongs to. */
  collection?: string
  /** First series it may be assessed in, where the document dates it. */
  firstAssessment?: string
  /** Last series it may be assessed in, where the document dates it. */
  lastAssessment?: string
  /** On a suggested list the candidate may choose from, not a set text list. */
  suggestedOnly?: boolean
  /** An edition the document requires or excludes, quoted. */
  editionNote?: string
  /** Page(s) of the document, printed numbering unless stated. */
  sourcePage: string
}

export interface SpecTruth {
  boardId: ExamBoard
  /** The specification code(s) as the document prints them. */
  qualification: string
  documentTitle: string
  /** As printed on the cover. */
  documentVersion: string
  documentUrl: string
  /** ISO date the document was read for this entry. */
  checkedOn: string
  /**
   * For a board whose lists rotate by series: the series the flat
   * SET_TEXTS.boards tags describe. A text whose first/last assessment window
   * excludes this series must NOT be tagged, and the test checks that too.
   */
  shelfSeries?: string
  texts: SpecTruthText[]
}

const CAMBRIDGE_0475_2027 = 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf'
const PEARSON = 'https://qualifications.pearson.com/content/dam/pdf/'

export const SPEC_TRUTH: SpecTruth[] = [
  // ── Cambridge IGCSE Literature in English 0475 ─────────────────────────
  //
  // Three syllabuses are held in src/lib/board/cambridge-0475.ts, one per
  // examination year (2026, 2027, 2028), each with its own URL and version.
  // This entry cites the 2027 document and gives each text's window across
  // all three, plus the 2029 list (same 2028-2030 document, page 16) for
  // the last-assessment dates. The flat tags describe the 2027 series.
  {
    boardId: 'cambridge-0475',
    qualification: '0475',
    documentTitle: 'Cambridge IGCSE Literature in English 0475 syllabus',
    documentVersion:
      '2027: Version 2, published October 2024; 2026: Version 2, published December 2025; 2028-2030: Version 2, published September 2026',
    documentUrl: CAMBRIDGE_0475_2027,
    checkedOn: '2026-10-23',
    shelfSeries: '2027',
    texts: [
      // Paper 1 Section B (Prose). 2027 page 12; 2028-2030 pages 13 and 16.
      {
        slug: 'things-fall-apart',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2027',
        sourcePage: '2027 p.12; absent from 2028-2030 p.13',
      },
      {
        slug: 'what-it-means-when-a-man-falls-from-the-sky',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        firstAssessment: '2027',
        sourcePage: '2027 p.12; 2028-2030 pp.13, 16; absent from 2026 p.12',
      },
      {
        slug: 'pride-and-prejudice',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2028',
        sourcePage: '2026 p.12; 2027 p.12; 2028-2030 p.13; absent from the 2029 list p.16',
      },
      {
        slug: 'fire-on-the-mountain',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2027',
        sourcePage: '2027 p.12; absent from 2028-2030 p.13',
      },
      {
        slug: 'hullaballoo-in-the-guava-orchard',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2028',
        sourcePage: '2027 p.12 ("Hullaballoo"); 2028-2030 p.13 ("Hullabaloo"); absent from p.16',
      },
      {
        slug: 'im-the-king-of-the-castle',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2028',
        sourcePage: '2027 p.12; 2028-2030 p.13; absent from the 2029 list p.16',
      },
      {
        slug: 'to-kill-a-mockingbird',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2027',
        sourcePage: '2027 p.12; absent from 2028-2030 p.13',
      },
      {
        slug: 'the-war-of-the-worlds',
        component: 'Paper 1 Section B (Prose)',
        choice: 'one set text',
        lastAssessment: '2026',
        sourcePage: '2026 p.12; absent from 2027 p.12',
      },
      // Papers 2 and 3 (Drama) to 2027: Paper 2 two different set texts,
      // Paper 3 one (2027 page 13). Paper 2 Section A (Drama) from 2028: one
      // set text (2028-2030 page 13).
      {
        slug: 'blues-for-an-alabama-sky',
        component: 'Papers 2 and 3 (Drama) to 2027; Paper 2 Section A (Drama, Open Text) from 2028',
        choice: 'Paper 2: two of five; Paper 3: one of five; from 2028 one of five',
        lastAssessment: '2028',
        sourcePage: '2026 p.13; 2027 p.13; 2028-2030 p.13; absent from the 2029 list p.16',
      },
      {
        slug: 'a-taste-of-honey',
        component: 'Papers 2 and 3 (Drama)',
        choice: 'Paper 2: two of five; Paper 3: one of five',
        lastAssessment: '2027',
        sourcePage: '2026 p.13; 2027 p.13; absent from 2028-2030 p.13',
      },
      {
        slug: 'princess-and-the-hustler',
        component: 'Papers 2 and 3 (Drama) to 2027; Paper 2 Section A (Drama, Open Text) from 2028',
        choice: 'Paper 2: two of five; Paper 3: one of five; from 2028 one of five',
        firstAssessment: '2027',
        sourcePage: '2027 p.13; 2028-2030 pp.13, 16; absent from 2026 p.13',
      },
      {
        slug: 'a-midsummer-nights-dream',
        component: 'Papers 2 and 3 (Drama)',
        choice: 'Paper 2: two of five; Paper 3: one of five',
        lastAssessment: '2027',
        sourcePage: '2026 p.13; 2027 p.13; absent from 2028-2030 p.13',
      },
      {
        slug: 'antony-and-cleopatra',
        component: 'Papers 2 and 3 (Drama)',
        choice: 'Paper 2: two of five; Paper 3: one of five',
        lastAssessment: '2027',
        sourcePage: '2026 p.13; 2027 p.13; absent from 2028-2030 p.13',
      },
      {
        slug: 'a-streetcar-named-desire',
        component: 'Papers 2 and 3 (Drama)',
        choice: 'Paper 2: two of five; Paper 3: one of five',
        lastAssessment: '2026',
        sourcePage: '2026 p.13; absent from 2027 p.13',
      },
      {
        slug: 'an-inspector-calls',
        component: 'Paper 2 Section A (Drama, Open Text)',
        choice: 'one of five',
        firstAssessment: '2028',
        sourcePage: '2028-2030 pp.13, 16; absent from 2027 p.13',
      },
      {
        slug: 'the-tempest',
        component: 'Paper 2 Section A (Drama, Open Text)',
        choice: 'one of five',
        firstAssessment: '2028',
        sourcePage: '2028-2030 pp.13, 16; absent from 2027 p.13',
      },
    ],
  },

  // ── Pearson Edexcel International GCSE English Literature 4ET1 ─────────
  {
    boardId: 'edexcel-igcse',
    qualification: '4ET1',
    documentTitle: 'Pearson Edexcel International GCSE in English Literature (4ET1) Specification',
    documentVersion: 'Issue 3, August 2025',
    documentUrl: `${PEARSON}International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf`,
    checkedOn: '2026-10-23',
    texts: [
      // Component 1 (Paper 1) Section C: Modern Prose, one of seven (page 9).
      ...[
        'to-kill-a-mockingbird',
        'of-mice-and-men',
        'the-whale-rider',
        'the-joy-luck-club',
        'things-fall-apart',
      ].map((slug) => ({
        slug,
        component: 'Component 1 (Paper 1) Section C: Modern Prose',
        choice: 'one of seven',
        sourcePage: '9',
      })),
      ...['klara-and-the-sun', 'western-lane'].map((slug) => ({
        slug,
        component: 'Component 1 (Paper 1) Section C: Modern Prose',
        choice: 'one of seven',
        // Page 10: "the new set texts for modern prose; Klara and the Sun, and
        // Western Lane are for first teaching 2024 and first assessment May 2026."
        firstAssessment: 'May 2026',
        sourcePage: '9-10',
      })),
      // Component 2 (Paper 2) Section A, or Component 3 Assignment A: Modern
      // Drama, one of five (page 10).
      ...[
        'a-view-from-the-bridge',
        'an-inspector-calls',
        'curious-incident',
        'kindertransport',
        'death-and-the-kings-horseman',
      ].map((slug) => ({
        slug,
        component: 'Component 2 (Paper 2) Section A or Component 3 Assignment A: Modern Drama',
        choice: 'one of five',
        sourcePage: '10',
      })),
      // Component 2 Section B, or Component 3 Assignment B: Literary Heritage
      // Texts, one of six (page 10). Three plays and three novels.
      ...[
        'romeo-and-juliet',
        'macbeth',
        'the-merchant-of-venice',
        'pride-and-prejudice',
        'great-expectations',
        'the-scarlet-letter',
      ].map((slug) => ({
        slug,
        component:
          'Component 2 (Paper 2) Section B or Component 3 Assignment B: Literary Heritage Texts',
        choice: 'one of six',
        sourcePage: '10',
      })),
      // Component 1 Section B: Anthology Poetry, all sixteen Part 3 poems
      // (page 9).
      ...[
        'if',
        'prayer-before-birth',
        'blessing',
        'search-for-my-tongue',
        'half-past-two',
        'piano',
        'hide-and-seek',
        'sonnet-116',
        'la-belle-dame-sans-merci',
        'poem-at-thirty-nine',
        'war-photographer',
        'the-tyger',
        'my-last-duchess',
        'half-caste',
        'do-not-go-gentle-into-that-good-night',
        'remember',
      ].map((slug) => ({
        slug,
        component: 'Component 1 (Paper 1) Section B: Anthology Poetry',
        choice: 'all sixteen',
        collection: 'Pearson Edexcel International GCSE English Anthology, Part 3',
        sourcePage: '9',
      })),
    ],
  },

  // ── Pearson Edexcel International GCSE English Language A 4EA1 ─────────
  {
    boardId: 'edexcel-igcse-lang',
    qualification: '4EA1',
    documentTitle:
      'Pearson Edexcel International GCSE in English Language (Specification A) (4EA1) Specification',
    documentVersion: 'Issue 7, August 2025',
    documentUrl: `${PEARSON}International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf`,
    checkedOn: '2026-10-23',
    texts: [
      // Component 1 (Paper 1) Section A: Reading. Anthology Part 1, ten
      // non-fiction texts (page 8).
      ...[
        'the-danger-of-a-single-story',
        'a-passage-to-africa',
        'the-explorers-daughter',
        'explorers-or-boys-messing-about',
        'between-a-rock-and-a-hard-place',
        'young-and-dyslexic',
        'a-game-of-polo-with-a-headless-goat',
        'beyond-the-sky-and-the-earth',
        'h-is-for-hawk',
        'chinese-cinderella',
      ].map((slug) => ({
        slug,
        component: 'Component 1 (Paper 1) Section A: Reading',
        collection:
          'Pearson Edexcel International GCSE English Anthology, Part 1: Non-fiction Texts',
        choice: 'all ten studied; the paper prints one',
        sourcePage: '8',
      })),
      // Component 2 (Paper 2) Section A: Reading, "The 30-mark essay question
      // on a poetry or prose text from Part 2" (page 6), or Component 3
      // Assignment A. Part 2: five poems and five prose texts (page 8).
      ...[
        'disabled',
        'out-out',
        'an-unknown-girl',
        'the-bright-lights-of-sarajevo',
        'still-i-rise',
        'the-story-of-an-hour',
        'the-necklace',
        'significant-cigarettes',
        'whistle-and-ill-come-to-you',
        'night',
      ].map((slug) => ({
        slug,
        component:
          'Component 2 (Paper 2) Section A: Poetry and Prose Texts, or Component 3 Assignment A',
        collection:
          'Pearson Edexcel International GCSE English Anthology, Part 2: Poetry and Prose Texts',
        choice: 'all ten studied; the paper sets one essay on one of them',
        sourcePage: '6, 8, 13',
      })),
    ],
  },

  // ── Pearson Edexcel GCSE English Literature 1ET0 ───────────────────────
  {
    boardId: 'edexcel',
    qualification: '1ET0',
    documentTitle: 'Pearson Edexcel Level 1/Level 2 GCSE (9-1) in English Literature Specification',
    documentVersion: 'Issue 2, June 2019',
    documentUrl: `${PEARSON}GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf`,
    checkedOn: '2026-10-23',
    texts: [
      // "Set texts at a glance", page 3.
      ...[
        'macbeth',
        'the-tempest',
        'romeo-and-juliet',
        'much-ado-about-nothing',
        'twelfth-night',
        'the-merchant-of-venice',
      ].map((slug) => ({
        slug,
        component: 'Component 1 Section A: Shakespeare',
        choice: 'one of six',
        sourcePage: '3',
      })),
      ...[
        'an-inspector-calls',
        'hobsons-choice',
        'blood-brothers',
        'journeys-end',
        'animal-farm',
        'lord-of-the-flies',
        'anita-and-me',
        'the-woman-in-black',
      ].map((slug) => ({
        slug,
        component: 'Component 1 Section B: Post-1914 British play or novel',
        choice: 'one of twelve',
        sourcePage: '3',
      })),
      ...['the-empress', 'refugee-boy', 'coram-boy', 'boys-dont-cry'].map((slug) => ({
        slug,
        component: 'Component 1 Section B: Post-1914 British play or novel',
        choice: 'one of twelve',
        // Page 3: "these texts are for first teaching from September 2019 and
        // first assessment is May 2021."
        firstAssessment: 'May 2021',
        sourcePage: '3',
      })),
      ...[
        'jane-eyre',
        'great-expectations',
        'jekyll-and-hyde',
        'a-christmas-carol',
        'pride-and-prejudice',
        'silas-marner',
        'frankenstein',
      ].map((slug) => ({
        slug,
        component: 'Component 2 Section A: 19th-century novel',
        choice: 'one of seven',
        sourcePage: '3',
      })),
      // Component 2 Section B: one collection of fifteen poems, all studied
      // (pages 3 and 10). Appendix 3, pages 29-31, lists each collection.
      {
        slug: 'la-belle-dame-sans-merci',
        component: 'Component 2 Section B: Poetry since 1789',
        collection: 'Relationships',
        choice: 'one collection of fifteen, all studied',
        sourcePage: '29',
      },
      {
        slug: 'my-last-duchess',
        component: 'Component 2 Section B: Poetry since 1789',
        collection: 'Relationships',
        choice: 'one collection of fifteen, all studied',
        sourcePage: '29',
      },
      {
        slug: 'half-caste',
        component: 'Component 2 Section B: Poetry since 1789',
        collection: 'Conflict',
        choice: 'one collection of fifteen, all studied',
        sourcePage: '30',
      },
    ],
  },

  // ── WJEC Eduqas GCSE English Literature C720QS ─────────────────────────
  {
    boardId: 'eduqas',
    qualification: 'C720QS',
    documentTitle: 'WJEC Eduqas GCSE in English Literature Specification',
    documentVersion: 'Version 4, August 2024',
    documentUrl:
      'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    checkedOn: '2026-10-23',
    texts: [
      // "WJEC Eduqas GCSE English literature prescribed texts list", page 12.
      ...[
        'romeo-and-juliet',
        'macbeth',
        'othello',
        'much-ado-about-nothing',
        'twelfth-night',
        'the-merchant-of-venice',
      ].map((slug) => ({
        slug,
        component: 'Component 1 Section A (Shakespeare)',
        choice: 'one of six',
        sourcePage: '12',
      })),
      ...[
        'lord-of-the-flies',
        'anita-and-me',
        'boys-dont-cry',
        'the-woman-in-black',
        'oranges-are-not-the-only-fruit',
        'leave-taking',
        'an-inspector-calls',
        'the-history-boys',
      ].map((slug) => ({
        slug,
        component: 'Component 2 Section A (Post 1914 Prose/Drama)',
        choice: 'one of ten',
        sourcePage: '12',
      })),
      {
        slug: 'curious-incident',
        component: 'Component 2 Section A (Post 1914 Prose/Drama)',
        choice: 'one of ten',
        editionNote:
          '"The Curious Incident of the Dog in the Night Time (play script) (Simon Stephens) (Bloomsbury edition ISBN: 978-1-4081-8521-6)"',
        sourcePage: '12',
      },
      {
        slug: 'blood-brothers',
        component: 'Component 2 Section A (Post 1914 Prose/Drama)',
        choice: 'one of ten',
        editionNote: '"Blood Brothers (Russell) (not Stanley Thorne edition)"',
        sourcePage: '12',
      },
      ...[
        'a-christmas-carol',
        'silas-marner',
        'the-war-of-the-worlds',
        'pride-and-prejudice',
        'jane-eyre',
        'jekyll-and-hyde',
      ].map((slug) => ({
        slug,
        component: 'Component 2 Section B (19th Century Prose)',
        choice: 'one of six',
        sourcePage: '12',
      })),
    ],
  },

  // ── AQA GCSE English Literature 8702 ───────────────────────────────────
  //
  // Whole texts only. The two anthology poems the registry tags to AQA (My
  // Last Duchess, War Photographer) are not in the specification, which names
  // the clusters and not the poems (section 3.2.2, page 13); their cluster
  // membership was read from the anthology on 20 September 2026
  // (prescribed-texts.ts) and not re-read here, so they are knownGaps.
  {
    boardId: 'aqa',
    qualification: '8702',
    documentTitle: 'AQA GCSE English Literature 8702 Specification',
    documentVersion: 'Version 1.3, 28 September 2022',
    documentUrl:
      'https://filestore.aqa.org.uk/resources/english/specifications/AQA-8702-SP-2015.PDF',
    checkedOn: '2026-10-23',
    texts: [
      ...[
        'macbeth',
        'romeo-and-juliet',
        'the-tempest',
        'the-merchant-of-venice',
        'much-ado-about-nothing',
        'julius-caesar',
      ].map((slug) => ({
        slug,
        component: 'Paper 1 Section A: Shakespeare (3.1.1)',
        choice: 'one of six',
        sourcePage: '11',
      })),
      ...[
        'jekyll-and-hyde',
        'a-christmas-carol',
        'great-expectations',
        'jane-eyre',
        'frankenstein',
        'pride-and-prejudice',
        'the-sign-of-four',
      ].map((slug) => ({
        slug,
        component: 'Paper 1 Section B: The 19th-century novel (3.1.2)',
        choice: 'one of seven',
        sourcePage: '11',
      })),
      ...[
        'an-inspector-calls',
        'dna',
        'a-taste-of-honey',
        'lord-of-the-flies',
        'telling-tales',
        'animal-farm',
        'anita-and-me',
        'pigeon-english',
      ].map((slug) => ({
        slug,
        component: 'Paper 2 Section A: Modern texts (3.2.1)',
        choice: 'one of twelve',
        sourcePage: '12',
      })),
      {
        slug: 'blood-brothers',
        component: 'Paper 2 Section A: Modern texts (3.2.1)',
        choice: 'one of twelve',
        editionNote: '"Blood Brothers (musical version)"',
        sourcePage: '12',
      },
      ...['princess-and-the-hustler', 'leave-taking', 'my-name-is-leon'].map((slug) => ({
        slug,
        component: 'Paper 2 Section A: Modern texts (3.2.1)',
        choice: 'one of twelve',
        // "(First teaching 2023, first exam 2025)".
        firstAssessment: '2025',
        sourcePage: '12',
      })),
    ],
  },

  // ── Pearson Edexcel International A Level English Literature ───────────
  {
    boardId: 'ial-edexcel',
    qualification: 'XET01 / YET01',
    documentTitle:
      'Pearson Edexcel International Advanced Subsidiary/Advanced Level in English Literature Specification',
    documentVersion: 'Issue 7, February 2026',
    documentUrl: `${PEARSON}International%20Advanced%20Level/english-literature/2015/specification-and-sample-assessments/9781446954058-ial-englit-iss6-9-spec-240521pm.pdf`,
    checkedOn: '2026-10-23',
    texts: [
      // "Prescribed texts at a glance", pages 11-12.
      ...['othello', 'twelfth-night'].map((slug) => ({
        slug,
        component: 'Unit 2 (WET02) Section A: Pre-1900 Drama',
        choice: 'one of five',
        sourcePage: '11',
      })),
      {
        slug: 'a-streetcar-named-desire',
        component: 'Unit 2 (WET02) Section B: Post-1900 Drama',
        choice: 'one of five',
        sourcePage: '11',
      },
      {
        slug: 'great-expectations',
        component: 'Unit 3 (WET03) Section B: Prose',
        option: 'Theme 1: Growing Up',
        choice: 'two of the three texts in one theme',
        sourcePage: '12',
      },
      ...['frankenstein', 'the-handmaids-tale', 'never-let-me-go'].map((slug) => ({
        slug,
        component: 'Unit 3 (WET03) Section B: Prose',
        option: 'Theme 3: Science and Society',
        choice: 'two of the three texts in one theme',
        sourcePage: '12',
      })),
      ...['hamlet', 'king-lear'].map((slug) => ({
        slug,
        component: 'Unit 4 (WET04) Section A: Shakespeare',
        choice: 'one of four',
        sourcePage: '12',
      })),
      {
        slug: 'the-tyger',
        component: 'Unit 4 (WET04) Section B: Pre-1900 Poetry',
        collection:
          'The Romantics: prescribed poems from English Romantic Verse (Penguin Classics, 1973)',
        choice: 'one prescribed collection of three',
        sourcePage: '12; Appendix 5, PDF page 50',
      },
      ...['my-last-duchess', 'remember'].map((slug) => ({
        slug,
        component: 'Unit 4 (WET04) Section B: Pre-1900 Poetry',
        collection:
          'The Victorians: prescribed poems from The Oxford Book of Victorian Verse (OUP, 2008)',
        choice: 'one prescribed collection of three',
        sourcePage: '12; Appendix 5, PDF page 51',
      })),
    ],
  },

  // ── AQA A-level English Literature A 7712 ──────────────────────────────
  //
  // The board id also names Language 7702, which sets no literary texts.
  // English Literature B (7717) has no board id: see the note above Hamlet in
  // set-texts.ts for the four tags removed on 23 October 2026.
  {
    boardId: 'aqa-a-level',
    qualification: '7712 (board id also covers 7702)',
    documentTitle: 'AQA AS and A-level English Literature A Specification',
    documentVersion: 'Version 1.7.1, 1 October 2025',
    documentUrl:
      'https://www.aqa.org.uk/files/bd4e84cd-fc3d-4ce9-bf9f-ca1e637d6004/24ff41cf3bd007017d65d90658b4a314af38cb9b.pdf',
    checkedOn: '2026-10-23',
    texts: [
      {
        slug: 'othello',
        component: 'Paper 1 Love through the ages, Section A: Shakespeare (4.1.1 core set texts)',
        choice: 'one of four',
        sourcePage: '17',
      },
      // The chosen comparative texts, poetry and prose alike, are examined in
      // Section C, "Comparing texts: one essay question linking two texts"
      // (page 9); Section B is "Unseen poetry: compulsory essay question on two
      // unseen poems". Page 18: "Section C of the paper for this component is
      // open book. Students may take a copy of their prose and poetry texts
      // into the exam." For a few hours on 23 October 2026 this file put the
      // anthology in "Section B: poetry", which is the AS 7711 Paper 1
      // structure (page 8), not the A-level's. Corrected the same day against
      // Version 1.7.1.
      {
        slug: 'la-belle-dame-sans-merci',
        component:
          'Paper 1 Love through the ages, Section C: comparing texts, the poetry text (4.1.1 chosen comparative set texts)',
        collection: 'AQA Anthology of Love Poetry through the Ages: Pre-1900',
        choice: 'one poetry and one prose text, one of them pre-1900',
        sourcePage: '9, 17 and 18; the poem is named on p.27 (NEA prohibited texts)',
      },
      ...['jane-eyre', 'the-great-gatsby'].map((slug) => ({
        slug,
        component:
          'Paper 1 Love through the ages, Section C: comparing texts, the prose text (4.1.1 chosen comparative set texts)',
        choice: 'one poetry and one prose text, one of them pre-1900',
        sourcePage: '9, 17 and 18',
      })),
      {
        slug: 'journeys-end',
        component: 'Paper 2 Texts in shared contexts, Section A: core set texts (4.2.1)',
        option: 'Option 2A: WW1 and its aftermath',
        choice: 'at least one of six core texts',
        sourcePage: '19',
      },
      {
        slug: 'the-handmaids-tale',
        component: 'Paper 2 Texts in shared contexts, Section A: core set texts (4.2.1)',
        option: 'Option 2B: Modern times: literature from 1945 to the present day',
        choice: 'at least one of six core texts',
        sourcePage: '20',
      },
      {
        slug: 'a-streetcar-named-desire',
        component: 'Paper 2 Texts in shared contexts, Section A: core set texts (4.2.1)',
        option: 'Option 2B: Modern times: literature from 1945 to the present day',
        choice: 'at least one of six core texts',
        sourcePage: '21',
      },
      {
        slug: 'oranges-are-not-the-only-fruit',
        component:
          'Paper 2 Texts in shared contexts, Section B: chosen comparative set texts (4.2.1)',
        option: 'Option 2B: Modern times: literature from 1945 to the present day',
        choice: 'two texts, from this list or the core list',
        sourcePage: '21',
      },
    ],
  },

  // ── OCR A Level English Literature H472 ────────────────────────────────
  {
    boardId: 'ocr-a-level',
    qualification: 'H472 (board id also covers H470)',
    documentTitle: 'OCR A Level English Literature H472 Specification',
    documentVersion: 'Version 2.1, July 2026',
    documentUrl:
      'https://www.ocr.org.uk/Images/171200-specification-accredited-a-level-gce-english-literature-h472.pdf',
    checkedOn: '2026-10-23',
    texts: [
      ...['hamlet', 'king-lear', 'othello', 'the-tempest'].map((slug) => ({
        slug,
        component: 'Component 01 Drama and poetry pre-1900, Section 1: Shakespeare',
        choice: 'one of six',
        sourcePage: '5',
      })),
      {
        slug: 'a-dolls-house',
        component: 'Component 01 Drama and poetry pre-1900, Section 2: pre-1900 drama',
        choice: 'one of five',
        sourcePage: '6 (both the list to 2028 and the list from 2029)',
      },
      {
        slug: 'the-great-gatsby',
        component: 'Component 02 Comparative and contextual study: core set text',
        option: 'American Literature 1880-1940',
        choice: 'at least two whole texts in the topic, at least one from the core list',
        sourcePage: '38',
      },
      {
        slug: 'the-handmaids-tale',
        component: 'Component 02 Comparative and contextual study: core set text',
        option: 'Dystopia',
        choice: 'at least two whole texts in the topic, at least one from the core list',
        sourcePage: '38',
      },
      {
        slug: 'frankenstein',
        component: 'Component 02 Comparative and contextual study: suggested set text',
        option: 'The Gothic',
        choice: 'may be the second text, if both are not from the core list',
        suggestedOnly: true,
        sourcePage: '39',
      },
      ...['jane-eyre', 'oranges-are-not-the-only-fruit'].map((slug) => ({
        slug,
        component: 'Component 02 Comparative and contextual study: suggested set text',
        option: 'Women in Literature',
        choice: 'may be the second text, if both are not from the core list',
        suggestedOnly: true,
        sourcePage: '40',
      })),
    ],
  },

  // ── Cambridge IGCSE First Language English 0500 ────────────────────────
  //
  // Prescribes no set texts: both syllabuses define Paper 1 by text type and
  // length (Texts A, B and C printed on the insert) and name no work or
  // writer. An empty list here is verified, not unfinished.
  {
    boardId: 'cambridge-0500',
    qualification: '0500',
    documentTitle: 'Cambridge IGCSE First Language English 0500 syllabus',
    documentVersion:
      '2027-2029: Version 1 (pages 13-17); 2024-2026: Version 1, published September 2021 (pages 13-15)',
    documentUrl: 'https://cambridgeinternational.org/Images/718783-2027-2029-syllabus.pdf',
    checkedOn: '2026-10-23',
    texts: [],
  },
]

/**
 * Rows tagged to a verified board that this file does not account for.
 *
 * A RATCHET. The test requires this list to equal the actual gap exactly, so
 * a new untracked tag fails it and so does a gap that has been closed but left
 * here. Every entry says why it is a gap rather than an error.
 */
export const KNOWN_GAPS: { boardId: ExamBoard; slug: string; why: string }[] = [
  {
    boardId: 'aqa',
    slug: 'my-last-duchess',
    why: 'Power and conflict poem. The 8702 specification names clusters, not poems; membership was read from the anthology on 2026-09-20 (prescribed-texts.ts) and not re-read on 2026-10-23.',
  },
  {
    boardId: 'aqa',
    slug: 'war-photographer',
    why: 'Power and conflict poem; as above.',
  },
]

/**
 * Specifications nobody has read for this file, so nothing is asserted about
 * them. Listed so "unverified" and "verified empty" cannot be confused, and
 * so the test can insist every board is in one list or the other.
 */
export const UNVERIFIED_SPECS: { boardId: ExamBoard; qualification: string; why: string }[] = [
  {
    boardId: 'ks3',
    qualification: 'Key Stage 3',
    why: 'No awarding body. The National Curriculum programme of study has not been read; it is understood to name categories, not titles.',
  },
  {
    boardId: 'cambridge-0990',
    qualification: '0990',
    why: 'The 9-1 twin of 0500. Verified as the same papers on 2026-09-19 (cambridge-0500-matches-the-syllabus.test.ts); its own 2027-2029 syllabus was not read on 2026-10-23.',
  },
  {
    boardId: 'ocr',
    qualification: 'J352',
    why: 'Whole-text list read 2026-09-19 (prescribed-texts.ts, v3.0, November 2025) and not re-read on 2026-10-23; no page-level entry seeded yet.',
  },
  {
    boardId: 'edexcel-a-level',
    qualification: '9ET0 (board id also covers 9EN0, which sets no literary texts)',
    why: 'Issue 11 (August 2025) not read on 2026-10-23. Its Section B options are closed lists and the registry has no option field for them.',
  },
  // The reason below names what one document says, so it names the document.
  // For a few hours on 23 October 2026 it cited "the undated set texts list"
  // with no URL, and a reader could confirm none of it.
  {
    boardId: 'eduqas-a-level',
    qualification: 'A720QS (board id also covers A710QS)',
    why: 'Only the WJEC Eduqas GCE English Literature Set Texts List has been read (https://www.eduqas.co.uk/media/bi1ncxwx/wjec-eduqas-gce-english-literature-set-texts-list.pdf, three pages, no date or version printed; read 2026-10-23). For A level it covers Components 1 and 2 only (PDF pages 2 and 3). Hamlet, King Lear, Antony and Cleopatra and The Tempest are on the Component 2 Section A Shakespeare list; A Streetcar Named Desire is paired with The Duchess of Malfi in Component 2 Section B; T S Eliot Selected Poems, with The Waste Land a prescribed section, is paired with Hardy in Component 1 Section B. Othello, The Great Gatsby and The Handmaid’s Tale do not appear in it. The Tyger and Remember are not named in it: Component 1 Section A prescribes Blake, Poems selected by Patti Smith (Vintage), and Rossetti, Selected Poems (Penguin Classics), by edition, and neither selection has been read. The A720QS specification itself has not been read, so nothing is asserted.',
  },
]
