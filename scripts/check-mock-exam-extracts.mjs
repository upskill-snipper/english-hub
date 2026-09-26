#!/usr/bin/env node
/**
 * Check every extract in the mock-exam banks against the text it says it is.
 *
 * WHY IT EXISTS (26 September 2026). src/data/mock-exams-aqa-lit-p1-set2.ts
 * printed three extracts labelled "Mary Shelley, Frankenstein (1818)" whose
 * sentences are mostly in no edition of the novel, and a question's model
 * answers quoted the invented lines back as Shelley's. Nothing had ever
 * compared a mock-exam extract with anything. The study guides are checked
 * against the held editions by study-guides.test.ts; the mock-exam banks,
 * about sixty files and six hundred passages, were read by no test at all.
 *
 * WHAT IT READS. Every src/data/mock-exams*.ts and src/data/mock-exams/*.ts,
 * three ways: as source, for each long string literal that is a passage (a
 * top-level const, or a property such as `extract`, `sourceText`,
 * `sourceAText`) with its name, line and any label beside it; as a module,
 * through jiti, for the papers it exports, which is what the site prints; and
 * as a module with every top-level name exported, for papers a file builds
 * but never exports (several files do, and their extracts still sit in a
 * public repository).
 *
 * WHAT IT CHECKS, for each passage:
 *   - its attribution, taken from the most specific evidence there is: a
 *     sibling constant (X_SOURCE, X_REF), a sibling property (sourceARef,
 *     sourceAttribution), the comment above it, the extractSource of a
 *     question printing it alone, the matching part of a combined
 *     "Source A: ... | Source B: ..." label, a byline inside it; and only when
 *     none names a work, the question text, paper title and constant name;
 *   - the work that names, from WORKS below, and whether its text is held
 *     (src/data/full-texts) or fetched from Project Gutenberg;
 *   - the share of its sentences found word for word in that text. Only
 *     quotation marks, dashes and whitespace are normalised. A sentence that
 *     is there apart from punctuation or case is counted apart from one whose
 *     words were changed (half or more of its three-word runs are in the
 *     text) and from one that is not there at all;
 *   - for a held play or novel, whether the act, scene, stave or chapter on
 *     the label is where the sentences are;
 *   - a date on the label later than the named author's death;
 *   - which questions print it, and whether their papers are live, meaning in
 *     allMockExamPapers in src/data/mock-exams.ts, which the mock-exam pages
 *     and the lazy loader serve;
 *   - whether a question presents a passage labelled as specially written as
 *     the real work ("Read the following extract from Macbeth");
 *   - every quotation of four words or more in those questions' model answers
 *     and mark schemes, against the extract, then the whole work, then every
 *     other passage in the file (which catches an answer copied from another
 *     paper); essay questions with no extract are checked against the work;
 *   - for a work in UK copyright, its length against the house limits in
 *     src/lib/study-guides/fair-dealing.ts. Reported only: a licence is the
 *     founder's decision.
 *
 * VERDICTS. A file needs fixing when an extract attributed to a real
 * public-domain work is under 95% verbatim or has any sentence whose words
 * differ from every edition checked, when a label puts a genuine passage in
 * the wrong act or chapter, when a label's date is after the author died,
 * when a question presents a specially written passage as the real work, or
 * when a model answer quotes four or more words that are in neither its
 * extract nor the work. Where the attributed piece cannot be read (not on
 * Gutenberg, or not fetched), the passage is reported as UNVERIFIED, never as
 * passing: a check that could not run is not a pass, and UNVERIFIED alone
 * does not make a file need fixing.
 *
 * WHAT IT CANNOT SEE. A passage attributed to a person this file does not
 * know ("Priya Sharma, The Observer, 2024") is listed as a named source it
 * cannot verify; were person and article real, the text would be in
 * copyright. A copyrighted work's text is not held, so an extract of one is
 * measured for length only, never for accuracy. A translated work (Engels) is
 * checked against the translation on Gutenberg only. Quotations are found by
 * the fair-dealing scanner's rule (paired double marks; single marks that are
 * not apostrophes), ported below rather than imported, because that helper
 * parses every i18n dictionary when it loads; a quotation introduced as a
 * coinage ("what might be termed ...") and a span of the answer's own prose
 * between two unrelated quotations are skipped.
 *
 * Output prints counts, percentages and at most the first eight words of any
 * passage: printing whole extracts from works in copyright is what this
 * script exists to prevent.
 *
 *   node scripts/check-mock-exam-extracts.mjs              report (cached sources only)
 *   node scripts/check-mock-exam-extracts.mjs --fetch      fetch missing Gutenberg texts first
 *   node scripts/check-mock-exam-extracts.mjs --json out.json
 *   node scripts/check-mock-exam-extracts.mjs --file aqa-lit-p1-set2
 *   node scripts/check-mock-exam-extracts.mjs --self-test  the reverse test
 *
 * Gutenberg texts are cached in node_modules/.cache/check-mock-exam-extracts,
 * fetched with curl, one at a time, with the site's fact-check user agent.
 * Exit code: 1 when any file needs fixing or the self-test fails, else 0.
 */

import ts from 'typescript'
import createJiti from 'jiti'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs'
import { join, resolve, relative, dirname } from 'node:path'

const ROOT = process.cwd()
const CACHE = join(ROOT, 'node_modules/.cache/check-mock-exam-extracts')
const args = process.argv.slice(2)
const FLAG = (f) => args.includes(f)
const OPT = (f) => {
  const i = args.indexOf(f)
  return i >= 0 ? args[i + 1] : undefined
}
const jiti = createJiti(import.meta.url, { alias: { '@': resolve('src') }, interopDefault: true })
const posix = (p) => relative(ROOT, p).split('\\').join('/')

// ── The works an attribution can name ──────────────────────────────────────
//
// `match` is tested against a label (case-insensitive, first match wins, so
// narrower patterns come first). `ctx` is tested, case-sensitively, against
// question text, paper titles and constant names, which only name a work when
// no label does; it defaults to the title. `held` is a src/data/full-texts
// slug; `gutenberg` lists ebook numbers whose texts are joined. `exact: false`
// means the attributed piece is not known to be in those texts (a speech, a
// periodical article): a sentence not found there is UNVERIFIED, unless the
// piece's quoted title is itself found in them. `died` is the author's death
// year, for UK life plus 70 and for labels dated after it. `setText` is the
// slug whose copyrightStatus in src/lib/board/set-texts.ts is authoritative.
const SH = { author: 'William Shakespeare', died: 1616 }
const WORKS = [
  // Held editions.
  { key: 'frankenstein', title: 'Frankenstein', author: 'Mary Shelley', died: 1851, setText: 'frankenstein', match: /frankenstein/i, editions: [{ label: '1831 text, held (Gutenberg #42324)', held: 'frankenstein' }, { label: '1818 text, Gutenberg #41445', gutenberg: [41445] }] },
  { key: 'a-christmas-carol', title: 'A Christmas Carol', author: 'Charles Dickens', died: 1870, setText: 'a-christmas-carol', match: /christmas carol/i, ctx: /Christmas Carol|Scrooge/, held: 'a-christmas-carol' },
  { key: 'jekyll-and-hyde', title: 'Jekyll and Hyde', author: 'R. L. Stevenson', died: 1894, setText: 'jekyll-and-hyde', match: /jekyll/i, ctx: /Jekyll/, held: 'jekyll-and-hyde' },
  { key: 'the-sign-of-four', title: 'The Sign of Four', author: 'Arthur Conan Doyle', died: 1930, setText: 'the-sign-of-four', match: /sign of (the )?four/i, ctx: /Sign of (the )?Four/, held: 'the-sign-of-four' },
  { key: 'silas-marner', title: 'Silas Marner', author: 'George Eliot', died: 1880, setText: 'silas-marner', match: /silas marner/i, held: 'silas-marner' },
  { key: 'the-war-of-the-worlds', title: 'The War of the Worlds', author: 'H. G. Wells', died: 1946, setText: 'the-war-of-the-worlds', match: /war of the worlds/i, held: 'the-war-of-the-worlds' },
  { key: 'the-scarlet-letter', title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', died: 1864, setText: 'the-scarlet-letter', match: /scarlet letter/i, held: 'the-scarlet-letter' },
  { key: 'animal-farm', title: 'Animal Farm', author: 'George Orwell', died: 1950, setText: 'animal-farm', match: /animal farm/i, held: 'animal-farm' },
  { key: 'macbeth', title: 'Macbeth', ...SH, setText: 'macbeth', match: /macbeth/i, ctx: /\bMacbeth\b|\bMACBETH\b/, held: 'macbeth' },
  { key: 'romeo-and-juliet', title: 'Romeo and Juliet', ...SH, setText: 'romeo-and-juliet', match: /romeo|juliet/i, ctx: /Romeo|Juliet|ROMEO|JULIET/, held: 'romeo-and-juliet' },
  { key: 'the-tempest', title: 'The Tempest', ...SH, setText: 'the-tempest', match: /the tempest/i, ctx: /The Tempest|TEMPEST_/, held: 'the-tempest' },
  { key: 'the-merchant-of-venice', title: 'The Merchant of Venice', ...SH, setText: 'the-merchant-of-venice', match: /merchant of venice|shylock/i, ctx: /Merchant of Venice|Shylock|MERCHANT_/, held: 'the-merchant-of-venice' },
  { key: 'much-ado-about-nothing', title: 'Much Ado About Nothing', ...SH, setText: 'much-ado-about-nothing', match: /much ado/i, ctx: /Much Ado|MUCH_ADO/, held: 'much-ado-about-nothing' },
  { key: 'a-midsummer-nights-dream', title: "A Midsummer Night's Dream", ...SH, match: /midsummer/i, ctx: /Midsummer/, held: 'a-midsummer-nights-dream', status: 'public-domain' },
  { key: 'julius-caesar', title: 'Julius Caesar', ...SH, setText: 'julius-caesar', match: /julius caesar/i, held: 'julius-caesar' },
  { key: 'othello', title: 'Othello', ...SH, setText: 'othello', match: /othello/i, ctx: /\bOthello\b|OTHELLO/, held: 'othello' },
  { key: 'hamlet', title: 'Hamlet', ...SH, setText: 'hamlet', match: /\bhamlet\b.*shakespeare|shakespeare.*\bhamlet\b|^hamlet\b/i, ctx: /\bHamlet\b/, held: 'hamlet' },
  { key: 'king-lear', title: 'King Lear', ...SH, setText: 'king-lear', match: /king lear/i, held: 'king-lear' },
  { key: 'henry-v', title: 'Henry V', ...SH, setText: 'henry-v', match: /henry v\b/i, ctx: /Henry V\b|HENRY_V/, held: 'henry-v' },
  { key: 'twelfth-night', title: 'Twelfth Night', ...SH, setText: 'twelfth-night', match: /twelfth night/i, held: 'twelfth-night' },
  { key: 'antony-and-cleopatra', title: 'Antony and Cleopatra', ...SH, setText: 'antony-and-cleopatra', match: /antony and cleopatra/i, held: 'antony-and-cleopatra' },

  // Public-domain literature fetched from Gutenberg.
  { key: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', died: 1817, setText: 'pride-and-prejudice', match: /pride and prejudice/i, ctx: /Pride and Prejudice|PRIDE_AND_PREJUDICE/, gutenberg: [1342] },
  { key: 'great-expectations', title: 'Great Expectations', author: 'Charles Dickens', died: 1870, setText: 'great-expectations', match: /great expectations/i, ctx: /Great Expectations|GREAT_EXPECTATIONS/, gutenberg: [1400] },
  { key: 'jane-eyre', title: 'Jane Eyre', author: 'Charlotte Brontë', died: 1855, setText: 'jane-eyre', match: /jane eyre/i, ctx: /Jane Eyre|JANE_EYRE/, gutenberg: [1260] },
  { key: 'middlemarch', title: 'Middlemarch', author: 'George Eliot', died: 1880, match: /middlemarch/i, gutenberg: [145] },
  { key: 'kidnapped', title: 'Kidnapped', author: 'R. L. Stevenson', died: 1894, match: /stevenson.*kidnapped|kidnapped.*stevenson/i, ctx: /Stevenson's Kidnapped/, gutenberg: [421] },
  { key: 'return-of-the-native', title: 'The Return of the Native', author: 'Thomas Hardy', died: 1928, match: /return of the native/i, gutenberg: [122] },
  { key: 'doctor-faustus', title: 'Doctor Faustus', author: 'Christopher Marlowe', died: 1593, match: /faustus/i, ctx: /Faustus|MARLOWE/, gutenberg: [779, 811] },
  { key: 'duchess-of-malfi', title: 'The Duchess of Malfi', author: 'John Webster', died: 1634, match: /duchess of malfi|john webster/i, ctx: /Malfi|WEBSTER/, gutenberg: [2232] },
  { key: 'cranford', title: 'Cranford', author: 'Elizabeth Gaskell', died: 1865, match: /cranford/i, gutenberg: [394] },
  { key: 'north-and-south', title: 'North and South', author: 'Elizabeth Gaskell', died: 1865, match: /gaskell.*north and south/i, gutenberg: [4276] },
  { key: 'tom-brown', title: "Tom Brown's School Days", author: 'Thomas Hughes', died: 1896, match: /tom brown/i, gutenberg: [1480] },
  { key: 'never-too-late', title: 'It Is Never Too Late to Mend', author: 'Charles Reade', died: 1884, match: /never too late to mend/i, gutenberg: [4606] },
  { key: 'adventures-of-sherlock-holmes', title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', died: 1930, match: /adventures of sherlock|scandal in bohemia/i, gutenberg: [1661] },
  { key: 'songs-of-innocence-and-experience', title: 'Songs of Innocence and of Experience', author: 'William Blake', died: 1827, match: /laughing song|songs of (innocence|experience)/i, gutenberg: [1934] },

  // Public-domain non-fiction named as a language paper's source.
  { key: 'engels-condition', title: 'The Condition of the Working Class in England (Kelley translation)', author: 'Friedrich Engels', died: 1895, match: /engels/i, gutenberg: [17306] },
  { key: 'rural-rides', title: 'Rural Rides', author: 'William Cobbett', died: 1835, match: /rural rides/i, gutenberg: [34238] },
  { key: 'cobbett-other', title: 'a journal', author: 'William Cobbett', died: 1835, match: /cobbett/i, gutenberg: [34238], exact: false },
  { key: 'wild-wales', title: 'Wild Wales', author: 'George Borrow', died: 1881, match: /wild wales|george borrow/i, gutenberg: [648] },
  { key: 'selborne', title: 'The Natural History of Selborne', author: 'Gilbert White', died: 1793, match: /selborne/i, gutenberg: [1408] },
  { key: 'montagu-letters', title: 'Turkish Embassy Letters', author: 'Lady Mary Wortley Montagu', died: 1762, match: /wortley montagu/i, gutenberg: [17520] },
  { key: 'beeton-household', title: 'The Book of Household Management', author: 'Isabella Beeton', died: 1865, match: /beeton'?s book of household/i, gutenberg: [10136] },
  { key: 'beeton-other', title: 'a periodical article', author: 'Isabella Beeton', died: 1865, match: /beeton/i, gutenberg: [10136], exact: false },
  { key: 'mayhew', title: 'London Labour and the London Poor', author: 'Henry Mayhew', died: 1887, match: /mayhew/i, gutenberg: [55998, 60440, 57060, 63415] },
  // Put into src/data/mock-exams/wjec-c2-a.ts on 27 September 2026 in place of
  // an invented 1872 letter to The Cardiff Times; above mill-other, which
  // would otherwise take it and could only report it unverified.
  { key: 'mill-subjection', title: 'The Subjection of Women', author: 'John Stuart Mill', died: 1873, match: /stuart mill.*subjection of women/i, gutenberg: [27083] },
  { key: 'on-liberty', title: 'On Liberty', author: 'John Stuart Mill', died: 1873, match: /stuart mill.*(liberty|press freedom|1859)/i, gutenberg: [34901] },
  { key: 'mill-other', title: 'an address', author: 'John Stuart Mill', died: 1873, match: /stuart mill/i, gutenberg: [34901], exact: false },
  // Printed in place of an invented W. T. Stead passage (aqa-p2-c, 27 September 2026).
  { key: 'soul-of-man', title: 'The Soul of Man under Socialism', author: 'Oscar Wilde', died: 1900, match: /soul of man under socialism/i, gutenberg: [1017] },
  { key: 'ruskin-lectures-on-art', title: 'Lectures on Art', author: 'John Ruskin', died: 1900, match: /ruskin.*lectures on art/i, gutenberg: [19164] },
  { key: 'ruskin-modern-painters', title: 'Modern Painters', author: 'John Ruskin', died: 1900, match: /ruskin.*modern painters/i, gutenberg: [29907, 29906, 38923, 31623, 44329] },
  // Sources put into src/data/mock-exams/ocr-p1-c.ts on 27 September 2026 in
  // place of invented ones, each cut by script from these texts. They stand
  // above ruskin-other, huxley and kingsley, which would otherwise take them
  // and check them loosely (exact: false) against other books.
  { key: 'ruskin-joy-for-ever', title: 'A Joy For Ever', author: 'John Ruskin', died: 1900, match: /ruskin.*joy for ever/i, gutenberg: [19980] },
  { key: 'huxley-lay-sermons', title: 'Lay Sermons, Addresses and Reviews', author: 'Thomas Huxley', died: 1895, match: /huxley.*lay sermons/i, gutenberg: [16729] },
  { key: 'kingsley-health-and-education', title: 'Health and Education', author: 'Charles Kingsley', died: 1875, match: /kingsley.*health and education/i, gutenberg: [17437] },
  { key: 'octavia-hill-homes', title: 'Homes of the London Poor', author: 'Octavia Hill', died: 1912, match: /octavia hill.*homes of the london poor/i, gutenberg: [59674] },
  { key: 'dickens-uncommercial-traveller', title: 'The Uncommercial Traveller', author: 'Charles Dickens', died: 1870, match: /dickens.*uncommercial traveller/i, gutenberg: [914] },
  // Sources put into src/data/mock-exams/ocr-p1-b.ts on 27 September 2026 in
  // place of invented ones, each cut with passage() from these texts. The
  // Fors Clavigera letter is in volume V, so its entry stands above
  // ruskin-fors-clavigera (volume I only), which would otherwise take it. The
  // Routledge handbook is anonymous; its publisher's death year stands in.
  { key: 'ruskin-fors-clavigera-letter-liv', title: 'Fors Clavigera, vol. 5 (Letters XLIX to LX, 1875)', author: 'John Ruskin', died: 1900, match: /ruskin.*fors clavigera.*letter liv\b/i, gutenberg: [68013] },
  { key: 'blincoe-memoir', title: 'A Memoir of Robert Blincoe', author: 'John Brown', died: 1829, match: /memoir of robert blincoe/i, gutenberg: [59127] },
  { key: 'edwards-thousand-miles', title: 'A Thousand Miles up the Nile', author: 'Amelia B. Edwards', died: 1892, match: /thousand miles up the nile/i, gutenberg: [70565] },
  { key: 'southey-letters-from-england', title: 'Letters from England, vol. 1', author: 'Robert Southey', died: 1843, match: /southey.*letters from england/i, gutenberg: [61122] },
  { key: 'routledge-etiquette', title: "Routledge's Manual of Etiquette", author: 'anonymous (George Routledge and Sons)', died: 1888, match: /routledge'?s manual of etiquette/i, gutenberg: [12426] },
  // Sources put into src/data/mock-exams-aqa.ts on 27 September 2026 in
  // place of invented ones, each cut by script from these texts. The two
  // Ruskin entries stand above ruskin-other, which would otherwise take them.
  { key: 'ruskin-sesame-and-lilies', title: 'Sesame and Lilies', author: 'John Ruskin', died: 1900, match: /ruskin.*sesame and lilies/i, gutenberg: [1293] },
  { key: 'ruskin-fors-clavigera', title: 'Fors Clavigera, vol. 1', author: 'John Ruskin', died: 1900, match: /ruskin.*fors clavigera/i, gutenberg: [59456] },
  { key: 'morris-signs-of-change', title: 'Signs of Change', author: 'William Morris', died: 1896, match: /william morris.*signs of change/i, gutenberg: [3053] },
  { key: 'kingsley-madam-how', title: 'Madam How and Lady Why', author: 'Charles Kingsley', died: 1875, match: /kingsley.*madam how/i, gutenberg: [1697] },
  { key: 'smiles-character', title: 'Character', author: 'Samuel Smiles', died: 1904, match: /samuel smiles.*character/i, gutenberg: [2541] },
  { key: 'dickens-sketches-by-boz', title: 'Sketches by Boz', author: 'Charles Dickens', died: 1870, match: /dickens.*sketches by boz/i, gutenberg: [882] },
  { key: 'dickens-american-notes', title: 'American Notes', author: 'Charles Dickens', died: 1870, match: /dickens.*american notes/i, gutenberg: [675] },
  // Added on review the same day. Paper 1 sets 9, 10 and 12 of that file
  // printed Ishiguro, du Maurier and Atwood under "Original composition"
  // labels, and now print these three. Notes on Nursing stands above
  // nightingale, which is inexact: a wrong passage labelled Notes on Nursing
  // was reported only as unverified, never as not Nightingale's words.
  { key: 'gilman-yellow-wallpaper', title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', died: 1935, setText: 'the-yellow-wallpaper', match: /gilman.*yellow wall-? ?paper/i, gutenberg: [1952] },
  { key: 'agnes-grey', title: 'Agnes Grey', author: 'Anne Brontë', died: 1849, match: /agnes grey/i, gutenberg: [767] },
  { key: 'david-copperfield', title: 'David Copperfield', author: 'Charles Dickens', died: 1870, match: /david copperfield/i, gutenberg: [766] },
  { key: 'nightingale-notes-on-nursing', title: 'Notes on Nursing', author: 'Florence Nightingale', died: 1910, match: /nightingale.*notes on nursing/i, gutenberg: [12439] },
  { key: 'ruskin-fors', title:'Fors Clavigera (Letters to the Workmen), vols 1-2', author: 'John Ruskin', died: 1900, match: /ruskin.*letters to the working men/i, gutenberg: [59456, 61591], exact: false },
  { key: 'ruskin-other', title: 'a lecture', author: 'John Ruskin', died: 1900, match: /ruskin/i, gutenberg: [26716], exact: false },
  // Sources put into src/data/mock-exams-ocr.ts on 27 September 2026 in
  // place of invented ones, each cut by script from these texts.
  { key: 'olmsted-walks-and-talks', title: 'Walks and Talks of an American Farmer in England', author: 'Frederick Law Olmsted', died: 1903, match: /olmsted.*walks and talks/i, gutenberg: [77164] },
  { key: 'clementina-black-sweated', title: 'Sweated Industry and the Minimum Wage', author: 'Clementina Black', died: 1922, match: /clementina black.*sweated industry/i, gutenberg: [75467] },
  { key: 'dickens-speeches', title: 'Speeches: Literary and Social', author: 'Charles Dickens', died: 1870, match: /dickens.*speech/i, gutenberg: [824] },
  // Put into the same file by its reviewer on 27 September 2026 in place of
  // words written for Morton, Denning and Trevelyan (Bevan's became a Dickens
  // speech, above). The Arnold entry stands above arnold, which would
  // otherwise take it and check it loosely.
  { key: 'jefferies-life-of-the-fields', title: 'The Life of the Fields', author: 'Richard Jefferies', died: 1887, match: /jefferies.*life of the fields/i, gutenberg: [6164] },
  { key: 'arnold-culture-and-anarchy', title: 'Culture and Anarchy (first edition, 1869)', author: 'Matthew Arnold', died: 1888, match: /matthew arnold.*culture and anarchy/i, gutenberg: [4212] },
  { key: 'newman-idea-of-a-university', title: 'The Idea of a University', author: 'John Henry Newman', died: 1890, match: /newman.*idea of a university/i, gutenberg: [24526] },
  // Put into src/data/mock-exams/edexcel-p2-a.ts on 27 September 2026 in place
  // of an invented Household Words article; the letter is in this text.
  { key: 'dickens-crime-and-education', title: 'Miscellaneous Papers ("Crime and Education", Daily News, 4 February 1846)', author: 'Charles Dickens', died: 1870, match: /dickens.*crime and education/i, gutenberg: [1435] },
  { key: 'bitter-cry', title: 'The Bitter Cry of Outcast London', author: 'Andrew Mearns', died: 1925, match: /bitter cry of outcast london/i, gutenberg: [55316] },
  { key: 'babbage-economy', title: 'On the Economy of Machinery and Manufactures', author: 'Charles Babbage', died: 1871, match: /babbage/i, gutenberg: [4238] },
  { key: 'spencer-education', title: 'Essays on Education', author: 'Herbert Spencer', died: 1903, match: /herbert spencer/i, gutenberg: [16510] },
  // Sources put into src/data/mock-exams/aqa-p2-a.ts on 27 September 2026 in
  // place of invented ones, each cut by script from these texts.
  { key: 'greenwood-seven-curses', title: 'The Seven Curses of London', author: 'James Greenwood', died: 1929, match: /greenwood.*seven curses of london/i, gutenberg: [45585] },
  { key: 'arnold-literature-and-science', title: 'Discourses in America ("Literature and Science")', author: 'Matthew Arnold', died: 1888, match: /matthew arnold.*literature and science/i, gutenberg: [44919] },
  { key: 'huxley-advance-of-science', title: 'The Advance of Science in the Last Half-Century', author: 'Thomas Huxley', died: 1895, match: /huxley.*advance of science/i, gutenberg: [15253] },
  { key: 'martineau-household-education', title: 'Household Education', author: 'Harriet Martineau', died: 1876, match: /martineau.*household education/i, gutenberg: [38179] },
  { key: 'dickens-inspector-field', title: 'Reprinted Pieces ("On Duty with Inspector Field", Household Words, 1851)', author: 'Charles Dickens', died: 1870, match: /dickens.*inspector field/i, gutenberg: [872] },
  // Sources put into src/data/mock-exams/edexcel-p2-c.ts on 27 September 2026
  // in place of invented ones, each cut by script from these texts (its
  // Dickens is dickens-sketches-by-boz, its Mill on-liberty). Its Huxley
  // label also names Lay Sermons, so huxley-lay-sermons above takes it first,
  // against the same text (#16729); huxley-westminster-review is for a label
  // that names only the review, and stands above huxley, which would
  // otherwise take that inexactly.
  { key: 'thackeray-roundabout-papers', title: 'Roundabout Papers', author: 'William Makepeace Thackeray', died: 1863, match: /thackeray.*(?:roundabout papers|de juventute)/i, gutenberg: [2608] },
  { key: 'thoreau-walden', title: 'Walden', author: 'Henry David Thoreau', died: 1862, match: /thoreau.*walden/i, gutenberg: [205] },
  { key: 'huxley-westminster-review', title: 'Lay Sermons, Addresses and Reviews ("The Origin of Species", Westminster Review, 1860)', author: 'Thomas Huxley', died: 1895, match: /huxley.*westminster review/i, gutenberg: [16729] },
  // Put into src/data/mock-exams/edexcel-p2-b.ts on 27 September 2026 in place
  // of an invented passage under the same title: Gutenberg holds the issue of
  // Household Words that printed it. It stands above dickens-hw, which would
  // otherwise take it inexactly. (That file's Engels and Bitter Cry passages
  // are engels-condition and bitter-cry.)
  { key: 'dickens-amusements-of-the-people', title: 'Household Words, No. 1, 30 March 1850 ("The Amusements of the People")', author: 'Charles Dickens', died: 1870, match: /dickens.*amusements of the people/i, gutenberg: [79523] },
  // Two labels name a real piece under a slightly wrong title; the piece is
  // in the text fetched, so these are checked exactly.
  { key: 'dickens-walk-in-a-workhouse', title: 'Reprinted Pieces ("A Walk in a Workhouse", Household Words, 1850)', author: 'Charles Dickens', died: 1870, match: /dickens.*walk (?:in|through) (?:a|the) workhouse/i, gutenberg: [872] },
  { key: 'morris-art-of-the-people', title: 'Hopes and Fears for Art ("The Art of the People", Birmingham, 1879)', author: 'William Morris', died: 1896, match: /william morris.*(?:art (?:and|of) the people|birmingham)/i, gutenberg: [3773] },
  { key: 'dickens-hw', title: 'Household Words pieces (Reprinted Pieces, Miscellaneous Papers, Sketches by Boz, The Uncommercial Traveller)', author: 'Charles Dickens', died: 1870, match: /dickens.*household words|household words.*dickens/i, gutenberg: [872, 1435, 882, 914], exact: false },
  { key: 'carlyle', title: 'Past and Present', author: 'Thomas Carlyle', died: 1881, match: /carlyle/i, gutenberg: [13534], exact: false },
  { key: 'morris-hopes-and-fears', title: 'Hopes and Fears for Art', author: 'William Morris', died: 1896, match: /william morris/i, gutenberg: [3773], exact: false },
  { key: 'whymper', title: 'Scrambles Amongst the Alps', author: 'Edward Whymper', died: 1911, match: /whymper/i, gutenberg: [41234] },
  { key: 'huxley', title: 'lectures and essays', author: 'Thomas Huxley', died: 1895, match: /huxley/i, gutenberg: [16729, 1315], exact: false },
  { key: 'charlotte-mason', title: 'Home Education', author: 'Charlotte Mason', died: 1923, match: /charlotte mason/i, gutenberg: [71087] },
  { key: 'nightingale', title: 'Notes on Hospitals / letters', author: 'Florence Nightingale', died: 1910, match: /florence nightingale/i, gutenberg: [12439], exact: false },
  { key: 'arnold', title: 'school reports / letters', author: 'Matthew Arnold', died: 1888, match: /matthew arnold/i, gutenberg: [4212], exact: false },
  { key: 'kingsley', title: 'letters', author: 'Charles Kingsley', died: 1875, match: /charles kingsley/i, gutenberg: [1637], exact: false },
  { key: 'gaskell-other', title: 'letters and periodical pieces', author: 'Elizabeth Gaskell', died: 1865, match: /gaskell/i, gutenberg: [4276], exact: false },
  // "The Fight" is in volume 12 of the Collected Works on Gutenberg, so a label
  // naming it is checked exactly; any other Hazlitt label stays a best effort.
  { key: 'hazlitt-the-fight', title: '"The Fight" (Collected Works, ed. Waller and Glover, vol. 12)', author: 'William Hazlitt', died: 1830, match: /hazlitt.*"the fight"|"the fight".*hazlitt/i, gutenberg: [72206] },
  { key: 'hazlitt', title: '"The Fight"', author: 'William Hazlitt', died: 1830, match: /hazlitt/i, gutenberg: [3020], exact: false },
  { key: 'greenwood', title: '"A Night in a Workhouse"', author: 'James Greenwood', died: 1929, match: /james greenwood/i, gutenberg: [45585], exact: false },
  { key: 'wh-russell', title: 'dispatches to The Times', author: 'William Howard Russell', died: 1907, match: /howard russell/i, gutenberg: [46242], exact: false },
  { key: 'olmsted', title: 'a letter to The Builder', author: 'Frederick Law Olmsted', died: 1903, match: /olmsted/i, gutenberg: [77164], exact: false },
  { key: 'clementina-black', title: '"Women\'s Work and Wages"', author: 'Clementina Black', died: 1922, match: /clementina black/i, gutenberg: [75467], exact: false },
  { key: 'webb', title: 'an address to the Fabian Society', author: 'Sidney Webb', died: 1947, match: /sidney webb/i, gutenberg: [69088], exact: false },
  { key: 'conan-doyle-other', title: 'a Strand Magazine piece', author: 'Arthur Conan Doyle', died: 1930, match: /conan doyle/i, gutenberg: [1661], exact: false },
  // Put into src/data/mock-exams/wjec-c2-c.ts on 27 September 2026 in place of
  // invented passages, each cut by script from these texts. Fry's answers to
  // the Commons committee of 1818 are read in Pitman's life of her, which
  // prints them; that entry stands above fry, which would otherwise take it
  // unchecked. (That file's Cobbett and Morris are rural-rides and
  // morris-art-of-the-people.)
  { key: 'veblen-leisure-class', title: 'The Theory of the Leisure Class', author: 'Thorstein Veblen', died: 1929, match: /veblen.*leisure class/i, gutenberg: [833] },
  { key: 'knight-old-printer', title: 'The Old Printer and the Modern Press', author: 'Charles Knight', died: 1873, match: /charles knight.*old printer/i, gutenberg: [59966] },
  { key: 'fry-evidence-pitman', title: 'Elizabeth Fry (E. R. Pitman), Chapter VII, her evidence to the Commons, 1818', author: 'Elizabeth Fry', died: 1845, match: /elizabeth fry.*pitman/i, gutenberg: [16606] },
  // Real authors whose attributed piece is on no Gutenberg edition checked.
  { key: 'booth', title: 'Life and Labour of the People in London', author: 'Charles Booth', died: 1916, match: /charles booth/i, exact: false },
  { key: 'ure', title: 'The Philosophy of Manufactures', author: 'Andrew Ure', died: 1857, match: /andrew ure/i, exact: false },
  { key: 'fry', title: 'Observations on Female Prisoners / evidence', author: 'Elizabeth Fry', died: 1845, match: /elizabeth fry/i, exact: false },
  { key: 'shaftesbury', title: 'speeches and reports', author: 'Lord Shaftesbury (Anthony Ashley-Cooper)', died: 1885, match: /shaftesbury/i, exact: false },
  { key: 'martineau', title: 'an Edinburgh Review article', author: 'Harriet Martineau', died: 1876, match: /harriet martineau/i, exact: false },
  { key: 'garrett-anderson', title: 'a lecture', author: 'Elizabeth Garrett Anderson', died: 1917, match: /garrett anderson/i, exact: false },
  { key: 'stead', title: 'a Contemporary Review article', author: 'W. T. Stead', died: 1912, match: /w\.\s?t\.\s?stead/i, exact: false },
  { key: 'chamberlain', title: 'an address', author: 'Joseph Chamberlain', died: 1914, match: /joseph chamberlain/i, exact: false },
  { key: 'lankester', title: 'evidence to a select committee', author: 'Edwin Lankester', died: 1874, match: /lankester/i, exact: false },
  { key: 'ellis', title: 'a Quarterly Review article', author: 'Sarah Stickney Ellis', died: 1872, match: /sarah ellis/i, exact: false },
  { key: 'boswell', title: 'private journal', author: 'James Boswell', died: 1795, match: /boswell/i, exact: false },
  { key: 'kinnaird', title: 'a speech', author: 'Lord Kinnaird', died: 1923, match: /kinnaird/i, exact: false },
  { key: 'mee', title: "The King's England", author: 'Arthur Mee', died: 1943, match: /arthur mee/i, exact: false },
  { key: 'under-milk-wood', title: 'Under Milk Wood', author: 'Dylan Thomas', died: 1953, match: /under milk wood/i, ctx: /Under Milk Wood|UNDER_MILK_WOOD/, exact: false },

  // In UK copyright: text not held, so length only (report-only).
  { key: 'an-inspector-calls', title: 'An Inspector Calls', author: 'J. B. Priestley', died: 1984, setText: 'an-inspector-calls', match: /inspector calls|priestley/i, ctx: /Inspector Calls|Priestley|INSPECTOR_CALLS/ },
  { key: 'a-view-from-the-bridge', title: 'A View from the Bridge', author: 'Arthur Miller', died: 2005, setText: 'a-view-from-the-bridge', match: /view from the bridge/i, ctx: /View from the Bridge|AVIEW/ },
  { key: 'the-crucible', title: 'The Crucible', author: 'Arthur Miller', died: 2005, match: /the crucible/i, ctx: /The Crucible|MILLER/, status: 'copyright' },
  { key: 'lord-of-the-flies', title: 'Lord of the Flies', author: 'William Golding', died: 1993, setText: 'lord-of-the-flies', match: /lord of the flies/i, ctx: /Lord of the Flies|Golding/ },
  { key: 'blood-brothers', title: 'Blood Brothers', author: 'Willy Russell', died: null, setText: 'blood-brothers', match: /blood brothers/i, ctx: /Blood Brothers|JOHNSTONE/ },
  { key: 'the-history-boys', title: 'The History Boys', author: 'Alan Bennett', died: null, setText: 'the-history-boys', match: /history boys/i, ctx: /History Boys|HISTBOYS/ },
  { key: 'anita-and-me', title: 'Anita and Me', author: 'Meera Syal', died: null, setText: 'anita-and-me', match: /anita and me/i, ctx: /Anita and Me|ANITAME/ },
  { key: 'never-let-me-go', title: 'Never Let Me Go', author: 'Kazuo Ishiguro', died: null, setText: 'never-let-me-go', match: /never let me go/i, ctx: /Never Let Me Go|NLMG/ },
  { key: 'pigeon-english', title: 'Pigeon English', author: 'Stephen Kelman', died: null, setText: 'pigeon-english', match: /pigeon english/i, ctx: /Pigeon English|PIGEON_/ },
  { key: 'winterson', title: 'a novel (Jeanette Winterson)', author: 'Jeanette Winterson', died: null, match: /winterson/i, ctx: /Winterson|STONES_EXTRACT/, status: 'copyright' },
  { key: 'hobsons-choice', title: "Hobson's Choice", author: 'Harold Brighouse', died: 1958, match: /hobson'?s choice/i, ctx: /Hobson|HOBBSONS/, status: 'copyright' },
  { key: 'paddy-clarke', title: 'Paddy Clarke Ha Ha Ha', author: 'Roddy Doyle', died: null, match: /paddy clarke/i, ctx: /Paddy Clarke|PADDY_CLARKE/, status: 'copyright' },
  { key: 'the-road-not-taken', title: 'The Road Not Taken', author: 'Robert Frost', died: 1963, match: /road not taken|robert frost/i, ctx: /Road Not Taken|Robert Frost/, poem: true, status: 'copyright' },
  { key: 'duffy', title: 'a poem (Carol Ann Duffy)', author: 'Carol Ann Duffy', died: null, match: /carol ann duffy/i, ctx: /_DUFFY\b/, poem: true, status: 'copyright' },
  { key: 'gillian-clarke', title: 'a poem (Gillian Clarke)', author: 'Gillian Clarke', died: null, match: /gillian clarke/i, ctx: /POETRY_EXTRACT_\d_CLARKE/, poem: true, status: 'copyright' },
  { key: 'andrew-motion', title: 'a poem (Andrew Motion)', author: 'Andrew Motion', died: null, match: /andrew motion/i, ctx: /_MOTION\b/, poem: true, status: 'copyright' },
  { key: 'naomi-klein', title: 'This Changes Everything', author: 'Naomi Klein', died: null, match: /naomi klein/i, status: 'copyright' },
  { key: 'raymond-williams', title: '"Culture and the Working Man"', author: 'Raymond Williams', died: 1988, match: /raymond williams/i, status: 'copyright' },
  { key: 'hoggart', title: 'The Uses of Literacy', author: 'Richard Hoggart', died: 2014, match: /hoggart/i, status: 'copyright' },
  { key: 'hv-morton', title: 'In Search of England', author: 'H. V. Morton', died: 1979, match: /h\.\s?v\.\s?morton/i, status: 'copyright' },
  { key: 'gm-trevelyan', title: 'English Social History', author: 'G. M. Trevelyan', died: 1962, match: /g\.\s?m\.\s?trevelyan/i, status: 'copyright' },
  { key: 'bevan', title: 'a House of Commons speech', author: 'Aneurin Bevan', died: 1960, match: /aneurin bevan/i, status: 'copyright' },
  { key: 'denning', title: 'Freedom Under the Law', author: 'Lord Denning', died: 1999, match: /denning/i, status: 'copyright' },
]
// A title names a work in running text only for a set text or a held edition:
// "letters" or "a lecture" would match any question (26 September 2026, when
// the default put a New Statesman column down to Charles Kingsley).
const NEVER = /(?!)/
for (const w of WORKS) w.ctx ??= w.held || w.setText || w.editions ? new RegExp(`\\b${w.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`) : NEVER

/** Labels that say the passage is not the named work's words. */
const LABEL_ORIGINAL =
  /\b(original|fabricated|specially written|not a real|no real author|not by any named|anonymous|not verbatim|in the style of|unseen contemporary|practice poem|after virginia woolf)\b|\(original\)/i
/** Labels that admit the words were changed, while still naming the work. */
const LABEL_ADAPTED = /\b(adapted|paraphrased|based on|combining lines|reimagined|verify wording)\b/i

// ── Normalisation ──────────────────────────────────────────────────────────

const QUOTES = /[\u2018\u2019\u201A\u201B\u02BC\u0060\u00B4\u201C\u201D\u201E\u00AB\u00BB"]/g
function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&[lr]squo;/g, "'")
    .replace(/&[lr]dquo;/g, '"')
    .replace(/&mdash;|&ndash;/g, ' - ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
}
/** Quotation marks, dashes and whitespace only. Case and all else kept. */
function strictNorm(s) {
  return s
    .normalize('NFC')
    .replace(QUOTES, "'")
    .replace(/\u2026/g, '...')
    .replace(/\s*(?:-{2,}|[\u2012\u2013\u2014\u2015\u2E3A\u2E3B])\s*/g, ' - ')
    .replace(/\s+-\s+/g, ' - ')
    .replace(/_/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
/**
 * Words only: for "there apart from punctuation or case". The elisions of the
 * play editions ("lov'd", "th' innocent") read as the words they elide, so a
 * quotation printing "loved" is not called a misquotation of "lov'd".
 */
function looseNorm(s) {
  return strictNorm(s)
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/\bth' ?(?=\p{L})/gu, 'the ')
    .replace(/(\p{L})'d\b/gu, '$1ed')
    // "To-morrow" and "Tomorrow" are one word spelt two ways; an editor's
    // stress mark ("oppressèd") is not a different word either.
    .replace(/(\p{L})-(?=\p{L})/gu, '$1')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/'/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
const words = (s) => (s.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length
const first8 = (s) => strictNorm(s).split(' ').slice(0, 8).join(' ')
function fnv(str) {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}
function gramHashes(looseText, n) {
  const w = looseText.split(' ').filter(Boolean)
  const out = new Uint32Array(Math.max(0, w.length - n + 1))
  for (let i = 0; i + n <= w.length; i++) out[i] = fnv(w.slice(i, i + n).join(' '))
  return out.sort()
}
function hasHash(sorted, h) {
  let lo = 0
  let hi = sorted.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (sorted[mid] === h) return true
    if (sorted[mid] < h) lo = mid + 1
    else hi = mid - 1
  }
  return false
}

// ── Source texts ───────────────────────────────────────────────────────────

/**
 * A text prepared for searching: strict and loose forms, with section offsets,
 * and its heading lines (a piece's title counts as present only as a heading:
 * "the fight" is in any book, "THE FIGHT" on a line of its own is not).
 */
function prepare(label, sections, headings = sections.map((s) => s.title)) {
  let strict = ''
  let loose = ' '
  const secs = []
  for (const s of sections) {
    // An editor's footnote marker ("topless[163] towers" in Dyce's Faustus,
    // #779) is not the author's text, and an extract rightly leaves it out;
    // left in, it made a verbatim extract read as altered (27 September 2026).
    const text = s.text.replace(/\[\d{1,4}\]/g, '')
    const st = strictNorm(text)
    const lo = looseNorm(text)
    secs.push({ title: s.title, s0: strict.length, s1: strict.length + st.length, l0: loose.length, l1: loose.length + lo.length })
    strict += st + ' \u00B6 '
    loose += lo + ' '
  }
  return { label, strict, loose, sections: secs, headings: new Set(headings.map(looseNorm)), _g6: null, _g3: null }
}
const g6 = (src) => (src._g6 ??= gramHashes(src.loose.trim(), 6))
const g3 = (src) => (src._g3 ??= new Set(gramHashes(src.loose.trim(), 3)))

function loadHeld(slug) {
  const file = join(ROOT, 'src/data/full-texts', `${slug}.ts`)
  const mod = jiti(file)
  const text = Object.values(mod).find((v) => v && Array.isArray(v.sections))
  if (!text) throw new Error(`no TextData exported by ${posix(file)}`)
  return text.sections.map((s) => ({
    title: s.title,
    text: decode(
      s.content
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<\/p>/g, ' \n ')
        .replace(/<[^>]+>/g, ' '),
    ),
  }))
}

const SECTION_HEAD = /^\s*((?:CHAPTER|Chapter|STAVE|Stave|LETTER|Letter|ACT|Act|SCENE|Scene|BOOK|Book)\s+[IVXLCDM\d]+\b.*|[IVXLC]+\.\s*$)/
const gutenbergPath = (id) => join(CACHE, `pg${id}.txt`)
function fetchGutenberg(id) {
  mkdirSync(CACHE, { recursive: true })
  const out = gutenbergPath(id)
  const url = `https://www.gutenberg.org/cache/epub/${id}/pg${id}.txt`
  execFileSync('curl', ['-s', '-f', '-L', '-m', '60', '-A', 'TheEnglishHub-factcheck/1.0', '-o', out, url], { stdio: 'ignore' })
  if (!existsSync(out) || statSync(out).size < 1000) throw new Error(`fetch of Gutenberg #${id} failed`)
}
/** A Gutenberg text without its licence, split where a chapter heading stands. */
function loadGutenberg(id) {
  const p = gutenbergPath(id)
  if (!existsSync(p)) {
    if (!FLAG('--fetch')) return null
    process.stderr.write(`fetching Gutenberg #${id}\n`)
    fetchGutenberg(id)
  }
  let raw = readFileSync(p, 'utf8').replace(/\r\n?/g, '\n')
  const a = raw.search(/^\*\*\* ?START OF (THE|THIS) PROJECT GUTENBERG.*$/m)
  const b = raw.search(/^\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG.*$/m)
  if (a >= 0) raw = raw.slice(raw.indexOf('\n', a) + 1, b > a ? b : undefined)
  raw = raw.replace(/\[Illustration[^\]]*\]/g, ' ')
  // A footnote reference ("Demeter, [12] into") is the edition's apparatus,
  // not the author's words, and an extract that left it out was counted as
  // altered (Ruskin, Fors Clavigera Letter V, wjec-c2-b, 27 September 2026).
  // Only a bare number in brackets is dropped, so a bracketed word still counts.
  raw = raw.replace(/ ?\[\d+\]/g, '')
  // A compound word the plain text breaks at its own hyphen at a line end
  // ("playing-" then "field") would read as "playing- field", and an extract
  // printing the word whole was counted as altered (Kingsley, ocr-p1-c, 27
  // September 2026). Gutenberg's proofreaders rejoin words a printer broke,
  // so a hyphen left at a line end is normally the word's own; and where one
  // is not, joining it still reads right, since the loose form drops a hyphen
  // between letters ("diffi-cult" matches "difficult"). Only the source is
  // joined: normalising
  // "x- y" in extracts too would make a dash written as "masks- who" read as
  // one word, and the poems in mock-exams-igcse-lit-extra.ts do that.
  raw = raw.replace(/(\p{L})-\n[ \t]*(?=\p{L})/gu, '$1-')
  const sections = []
  let cur = { title: `Gutenberg #${id}`, lines: [] }
  for (const line of raw.split('\n')) {
    if (SECTION_HEAD.test(line) && line.trim().length < 80) {
      sections.push(cur)
      cur = { title: `#${id} ${line.trim()}`, lines: [] }
    } else cur.lines.push(line)
  }
  sections.push(cur)
  const out = sections.map((s) => ({ title: s.title, text: s.lines.join('\n') }))
  // A heading: a short line standing alone between blank lines.
  const lines = raw.split('\n')
  out.headings = lines.filter((l, i) => l.trim() && words(l) <= 12 && !lines[i - 1]?.trim() && !lines[i + 1]?.trim()).map((l) => l.trim())
  return out
}

const SOURCE_CACHE = new Map()
/** Every edition of a work, prepared; `missing` says what could not be read. */
function sourcesFor(work) {
  if (SOURCE_CACHE.has(work.key)) return SOURCE_CACHE.get(work.key)
  const editions =
    work.editions ??
    (work.held || work.gutenberg
      ? [{ label: work.held ? `held edition (src/data/full-texts/${work.held}.ts)` : `Gutenberg #${work.gutenberg.join(', #')}`, held: work.held, gutenberg: work.gutenberg }]
      : [])
  const out = { editions: [], missing: [] }
  for (const e of editions) {
    if (e.held) {
      out.editions.push({ ...prepare(e.label, loadHeld(e.held)), held: true })
      continue
    }
    const secs = []
    const heads = []
    const miss = []
    for (const id of e.gutenberg) {
      const s = loadGutenberg(id)
      if (s) {
        secs.push(...s)
        heads.push(...s.headings)
      } else miss.push(id)
    }
    if (miss.length) out.missing.push(`${e.label} (not fetched: #${miss.join(', #')}; run with --fetch)`)
    else out.editions.push({ ...prepare(e.label, secs, heads), held: false })
  }
  if (!editions.length) out.missing.push('the attributed piece is on no Gutenberg edition this script knows')
  SOURCE_CACHE.set(work.key, out)
  return out
}

let SET_TEXTS = null
function copyrightOf(work) {
  if (!work) return { status: 'n/a', basis: 'no real work named' }
  SET_TEXTS ??= jiti(join(ROOT, 'src/lib/board/set-texts.ts')).SET_TEXTS
  if (work.setText) {
    const t = SET_TEXTS.find((x) => x.slug === work.setText)
    if (t) return { status: t.copyrightStatus, basis: `set-texts.ts (${work.setText})` }
  }
  if (work.status) return { status: work.status, basis: work.died ? `author died ${work.died}; UK life plus 70` : 'living author' }
  if (work.died == null) return { status: 'copyright', basis: 'living author' }
  return { status: work.died <= new Date().getFullYear() - 71 ? 'public-domain' : 'copyright', basis: `author died ${work.died}; UK life plus 70` }
}

// ── Splitting a passage into sentences ─────────────────────────────────────

const SPEAKER_LINE = /^\s*[A-Z][A-Z'’ .,&-]{1,40}[.:]?\s*$/
const SPEAKER_PREFIX = /^\s*((?:[A-Z][A-Z'’.&-]+)(?:\s+[A-Z][A-Z'’.&-]+){0,3})\s*[:.]\s+(?=\S)/
const HEADER_PREFIX = /^\s*(?:source|extract|passage|poem|text)\s+[A-Z0-9]\b[^:\n]{0,40}:\s*/i
const DIRECTION_LINE = /^\s*(?:enter|exit|exeunt|re-enter|aside)\b/i

/**
 * The sentences of a passage, as it would be checked against a book: speaker
 * names, bracketed stage directions, "Source A:" headers and a title or byline
 * first line are removed, and a cut marked "..." or "[...]" ends a sentence.
 *
 * In a play, a parenthesis is taken for a stage direction and removed, unless
 * `keepParens`. Some are dialogue: Macbeth's "(Howe'er you come to know it)
 * answer me" in Act 4, Scene 1 of the held edition. Removing it made the
 * genuine passage in edexcel-lit-a.ts read as altered (27 September 2026), so
 * analyse() reads a play both ways and keeps the better score.
 */
function sentencesOf(raw, titleHints = [], { keepParens = false } = {}) {
  let t = raw.replace(/\r\n?/g, '\n')
  const playLike = /^\s*[A-Z][A-Z'’ .&-]{1,40}(?::|\n)/m.test(t)
  t = t.replace(/\[\s*(?:\.\s*){3}\]|\[\s*…\s*\]/g, ' ‖ ')
  t = t.replace(/^[ \t]*\[[^\]\n]{0,200}\][ \t]*$/gm, '')
  t = t.replace(/\[[^\]\n]{0,200}\]/g, ' ')
  if (playLike && !keepParens) t = t.replace(/\((?:[^()\n]{0,120})\)/g, ' ')
  const paras = []
  let cur = []
  const flush = () => {
    if (cur.length) paras.push(cur.join(' '))
    cur = []
  }
  const header = []
  for (let line of t.split('\n')) {
    if (!line.trim()) {
      flush()
      continue
    }
    line = line.replace(HEADER_PREFIX, () => {
      flush()
      return ''
    })
    if (!line.trim()) continue
    if (paras.length === 0 && cur.length === 0) {
      const l = line.trim()
      const byline = /\bby [A-Z]|\(\d{4}\)|\s[-–—]\s+[A-Z][a-z]+ [A-Z]/.test(l) && words(l) <= 16
      const titled = titleHints.some((h) => h && looseNorm(l) === looseNorm(h))
      if (byline || titled) {
        header.push(l)
        continue
      }
    }
    if (SPEAKER_LINE.test(line) && /[A-Z]{2}/.test(line)) {
      flush()
      continue
    }
    if (DIRECTION_LINE.test(line) && words(line) <= 8) {
      flush()
      continue
    }
    const m = SPEAKER_PREFIX.exec(line)
    if (m && /[A-Z]{2}/.test(m[1])) {
      flush()
      line = line.slice(m[0].length)
    }
    cur.push(line.replace(/\s+\/\s+/g, ' '))
  }
  flush()
  const out = []
  for (const p of paras)
    for (const piece of p.split(/\s*(?:‖|\.\.\.|…)\s*/))
      for (const s of piece.split(/(?<=[.!?][’'”")\]]*)\s+(?=[‘'“"(\[]*[A-Z0-9])/)) {
        const clean = s.trim().replace(/^[\s'"‘’“”]+|[\s'"‘’“”]+$/g, '')
        if (clean) out.push(clean)
      }
  return { sentences: out, header }
}

/** Where each sentence of a passage is in one edition, and how exactly. */
function compare(sentences, src) {
  return sentences.map((s) => {
    const w = words(s)
    const st = strictNorm(s)
    const lo = looseNorm(s)
    let at
    if ((at = src.strict.indexOf(st)) >= 0)
      return { s, w, kind: 'verbatim', section: src.sections.find((x) => at >= x.s0 && at < x.s1)?.title ?? null }
    if ((at = src.loose.indexOf(` ${lo} `)) >= 0)
      return { s, w, kind: 'punctuation', section: src.sections.find((x) => at >= x.l0 && at < x.l1)?.title ?? null }
    const gw = lo.split(' ')
    const set = g3(src)
    let hit = 0
    let tot = 0
    for (let i = 0; i + 3 <= gw.length; i++) {
      tot++
      if (set.has(fnv(gw.slice(i, i + 3).join(' ')))) hit++
    }
    return { s, w, kind: tot && hit / tot >= 0.5 ? 'altered' : 'absent', section: null }
  })
}

function tally(res) {
  const counted = res.filter((r) => r.w >= 3)
  const n = counted.length
  const c = (k) => counted.filter((r) => r.kind === k).length
  return { sentences: n, verbatim: c('verbatim'), punctuation: c('punctuation'), altered: c('altered'), absent: c('absent'), share: n ? c('verbatim') / n : 0 }
}

// ── Where a label says a passage is ────────────────────────────────────────

const ROMAN = { i: 1, v: 5, x: 10, l: 50, c: 100 }
function roman(s) {
  if (/^\d+$/.test(s)) return +s
  let n = 0
  const r = s.toLowerCase()
  for (let i = 0; i < r.length; i++) {
    const v = ROMAN[r[i]]
    const nx = ROMAN[r[i + 1]]
    n += nx && nx > v ? -v : v
  }
  return n
}
/** "Act 4, Scene 1", "Stave 1", "Ch. 27", "Chapter 5" as a comparable key. */
function locationKey(s) {
  if (!s) return null
  const act = /\bact\s+([ivx\d]+)\W+(?:sc(?:ene|\.)?\s*)([ivx\d]+)/i.exec(s)
  if (act) return `act ${roman(act[1])} scene ${roman(act[2])}`
  const stave = /\bstave\s+([ivx\d]+)/i.exec(s)
  if (stave) return `stave ${roman(stave[1])}`
  const ch = /\b(?:chapter|ch\.)\s*([ivxlc\d]+)/i.exec(s)
  if (ch) return `chapter ${roman(ch[1])}`
  const letter = /\bletter\s+([ivx\d]+)\b/i.exec(s)
  if (letter) return `letter ${roman(letter[1])}`
  return null
}
/** Every location a label names ("Act 1 Sc 3 + Act 3 Sc 1" names two). */
function locationKeys(s) {
  if (!s) return []
  const out = []
  for (const m of s.matchAll(/\bact\s+[ivx\d]+\W+sc(?:ene|\.)?\s*[ivx\d]+|\bstave\s+[ivx\d]+|\b(?:chapter|ch\.)\s*[ivxlc\d]+|\bletter\s+[ivx\d]+\b/gi)) out.push(locationKey(m[0]))
  const staves = /\bstaves\s+([ivx\d]+)\s*(?:&|and|-|to)\s*([ivx\d]+)/i.exec(s)
  if (staves) for (let i = roman(staves[1]); i <= roman(staves[2]); i++) out.push(`stave ${i}`)
  return out.filter(Boolean)
}

// ── Quotations in model answers ─────────────────────────────────────────────
// Ported from src/__tests__/helpers/quotations.ts (doubleSpans, singleSpans),
// returning what precedes each span so a coinage can be told from a quotation.

const DQ = /["\u201C\u201D\u00AB\u00BB]/
const LETTER = /[\p{L}\p{N}]/u
const LEADING_ELISION = /^(em|cause|til|bout|tis|twas|n)\b/i
function quotationsIn(t) {
  const out = []
  let open = -1
  for (let i = 0; i < t.length; i++) {
    if (!DQ.test(t[i])) continue
    if (open < 0) open = i
    else {
      out.push({ q: t.slice(open + 1, i), before: t.slice(Math.max(0, open - 40), open) })
      open = -1
    }
  }
  let i = 0
  while (i < t.length) {
    const c = t[i]
    const opens = (c === "'" || c === '\u2018') && (i === 0 || !LETTER.test(t[i - 1])) && /[\p{L}.\u2026[]/u.test(t[i + 1] ?? '') && !(c === "'" && LEADING_ELISION.test(t.slice(i + 1)))
    if (!opens) {
      i++
      continue
    }
    let close = -1
    for (let j = i + 1; j < t.length; j++) {
      const d = t[j]
      if (d !== "'" && d !== '\u2019') continue
      if (/\s/.test(t[j - 1]) || LETTER.test(t[j + 1] ?? '')) continue
      close = j
      break
    }
    if (close < 0) {
      i++
      continue
    }
    out.push({ q: t.slice(i + 1, close), before: t.slice(Math.max(0, i - 40), i) })
    i = close + 1
  }
  return out.map((x) => ({ ...x, q: x.q.trim() })).filter((x) => words(x.q) >= 2)
}
/** A quotation may join parts with "..." or " / "; each part must be there. */
const fragmentsOf = (q) =>
  q
    .split(/\s*(?:\.\.\.|…|\s\/\s|\[\s*\.\.\.\s*\])\s*/)
    .map(looseNorm)
    .filter((f) => f && /[\p{L}\p{N}]/u.test(f))
const foundIn = (frags, looseHay) => frags.length > 0 && frags.every((f) => looseHay.includes(` ${f} `))
/** A span that is a coinage or the answer's own prose, not a quotation. */
const COINAGE_BEFORE = /(termed|called|so-called|known as|calls|the term|the phrase|the label|labelled|dubbed|a kind of|a sort of|as if to say|the idea of|the notion of)\W*$/i
const ANSWER_PROSE = /\b(the writer|the reader|the poet|the author|the narrator|suggests?|this shows|which shows|emphasi[sz]es|conveys|highlights|the use of|the extract|the source|demonstrates|this makes|the audience)\b/i

const WRITING_TYPES = new Set(['creative-writing', 'transactional-writing', 'extended-writing', 'persuasive-writing', 'directed-writing', 'composition', 'personal-narrative'])
const WRITING_PROMPT = /\b(write (?:a|an|the|your)\b|writing task|you are going to (?:enter|write)|compose (?:a|an)\b|describe (?:a|an) |imagine you)/i
const REFERS_TO_EXTRACT = /\b(the|this) (extract|passage|source|poem)\b|\bread (the|this)\b/i

// ── Reading the bank ───────────────────────────────────────────────────────

const EXTRACT_PROP = /(extract|passage|poem|sourcetext|source[ab]text|^text[ab]?$|stimulus|insert)/i
const NOT_EXTRACT_PROP = /(source$|ref$|attribution|title|question|answer|mark|note|description|prompt)/i
const ATTR_PROP = /(ref|attribution|source|credit|citation|author)$/i
const lit = (n) => n && (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n))

function listFiles() {
  const top = readdirSync(join(ROOT, 'src/data'))
    .filter((f) => /^mock-exams.*\.ts$/.test(f))
    .map((f) => join(ROOT, 'src/data', f))
  const dir = readdirSync(join(ROOT, 'src/data/mock-exams'))
    .filter((f) => /\.ts$/.test(f))
    .map((f) => join(ROOT, 'src/data/mock-exams', f))
  return [...top, ...dir]
}

/** The comment directly above a statement, as one line. */
function leadingComment(src, node) {
  const ranges = ts.getLeadingCommentRanges(src, node.pos) ?? []
  const last = ranges[ranges.length - 1]
  if (!last) return ''
  return src
    .slice(last.pos, last.end)
    .replace(/^\/\/+|^\/\*+|\*+\/$/g, '')
    .replace(/[─═━]+/g, ' ')
    .trim()
}

/** Long string literals that are passages, with names, lines and nearby labels. */
function blocksOf(file) {
  const src = readFileSync(file, 'utf8')
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true)
  const line = (n) => sf.getLineAndCharacterOfPosition(n.getStart()).line + 1
  const consts = new Map()
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st)) continue
    for (const d of st.declarationList.declarations)
      if (lit(d.initializer)) consts.set(d.name.getText(), { value: d.initializer.text, line: line(d.initializer), comment: leadingComment(src, st) })
  }
  const blocks = []
  const siblingAttrs = new Map()
  const visit = (n) => {
    if (ts.isObjectLiteralExpression(n)) {
      const props = n.properties.filter(ts.isPropertyAssignment)
      const short = props
        .map((p) => {
          const name = p.name.getText().replace(/['"]/g, '')
          const v = ts.isIdentifier(p.initializer) ? consts.get(p.initializer.text)?.value : lit(p.initializer) ? p.initializer.text : null
          return { name, v }
        })
        .filter((x) => ATTR_PROP.test(x.name) && x.v && x.v.length < 400)
      for (const p of props) {
        const name = p.name.getText().replace(/['"]/g, '')
        if (!EXTRACT_PROP.test(name) || NOT_EXTRACT_PROP.test(name)) continue
        const letter = /([AB])(?:Text)?$/.exec(name)?.[1]
        const attrs = short.filter((a) => (letter ? new RegExp(`${letter}(ref|attribution|source|credit)?$`, 'i').test(a.name) : true)).map((a) => a.v)
        if (ts.isIdentifier(p.initializer)) {
          const k = p.initializer.text
          if (!siblingAttrs.has(k)) siblingAttrs.set(k, new Set())
          attrs.forEach((a) => siblingAttrs.get(k).add(a))
        } else if (lit(p.initializer)) {
          blocks.push({ name: `${name} (line ${line(p.initializer)})`, line: line(p.initializer), value: p.initializer.text, attrs, hints: [], named: true })
        }
      }
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  for (const [name, c] of consts) {
    if (/(_REF|_SOURCE|_ATTRIBUTION|_ATTR|_CITATION|_TITLE|Source|Ref)$/.test(name) && c.value.length < 400) continue
    if (/ANSWER|MODEL|MARK|EXEMPLAR|PROMPT|QUESTION|TIP|GUIDANCE/i.test(name)) continue
    const attrs = []
    const stem = name.replace(/_?(EXTRACT|TEXT|PASSAGE|POEM)$/i, '')
    for (const base of new Set([name, stem]))
      for (const suf of ['_SOURCE', '_REF', '_ATTRIBUTION', '_ATTR', '_CITATION', 'Source', 'Ref']) {
        const a = consts.get(base + suf)
        if (a && a.value.length < 400) attrs.push(a.value)
      }
    for (const a of siblingAttrs.get(name) ?? []) attrs.push(a)
    // The comment above a constant labels it only when it names a work or
    // says the passage is specially written; a section divider does not.
    if (c.comment && c.comment.length < 240 && (LABEL_ORIGINAL.test(c.comment) || WORKS.some((w) => w.match.test(c.comment)))) attrs.push(c.comment)
    blocks.push({ name, line: c.line, value: c.value, attrs, hints: [name.replace(/_/g, ' ')], named: /EXTRACT|SOURCE|PASSAGE|POEM|TEXT/i.test(name) || siblingAttrs.has(name) })
  }
  return blocks.filter((b) => words(b.value) >= 25 && sentencesOf(b.value).sentences.length >= 2)
}

/** The value imports of a module, for loading dependencies first. */
function importsOf(file) {
  const sf = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const out = []
  for (const st of sf.statements) {
    if (!ts.isImportDeclaration(st) || st.importClause?.isTypeOnly) continue
    const spec = st.moduleSpecifier.text
    if (!spec.startsWith('.')) continue
    const p = resolve(dirname(file), spec)
    for (const c of [`${p}.ts`, join(p, 'index.ts')]) if (existsSync(c)) out.push(c)
  }
  return out
}

/** The same module, re-evaluated with every top-level name exported. */
function everyTopLevel(file) {
  const src = readFileSync(file, 'utf8')
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true)
  const names = []
  for (const st of sf.statements) {
    if (ts.isVariableStatement(st)) for (const d of st.declarationList.declarations) if (ts.isIdentifier(d.name)) names.push(d.name.text)
    if (ts.isFunctionDeclaration(st) && st.name) names.push(st.name.text)
  }
  if (!names.length) return {}
  const mod = jiti.evalModule(`${src}\nexport const __scanAll = { ${names.join(', ')} }\n`, { filename: file.replace(/\.ts$/, '.__scan__.ts'), ext: '.ts' })
  return mod.__scanAll ?? {}
}

const flatStrings = (v, label, out = []) => {
  if (typeof v === 'string') out.push({ label, text: v })
  else if (Array.isArray(v)) v.forEach((x, i) => flatStrings(x, `${label}[${i}]`, out))
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) flatStrings(x, `${label}.${k}`, out)
  return out
}

/** Every question each file defines, exported or not, with the passages it prints. */
function questionsByFile(files) {
  const order = []
  const seen = new Set()
  const visit = (f) => {
    if (seen.has(f)) return
    seen.add(f)
    importsOf(f).forEach(visit)
    order.push(f)
  }
  files.forEach(visit)
  const owner = new Map()
  const byFile = new Map(files.map((f) => [f, []]))
  const errors = []
  const collect = (f, roots, exported) => {
    const keys = new Set(byFile.get(f).map((q) => q.key))
    const walk = (v, ctx) => {
      if (!v || typeof v !== 'object') return
      if (owner.has(v) && owner.get(v) !== f) return
      if (owner.get(v) === f && ctx.revisit) return
      owner.set(v, f)
      if (Array.isArray(v)) return v.forEach((x) => walk(x, ctx))
      const c = { ...ctx, revisit: true }
      if (Array.isArray(v.sections) || Array.isArray(v.tasks)) c.paper = { id: v.id ?? '?', title: v.title ?? '', obj: v }
      if (Array.isArray(v.questions)) c.section = { title: v.title ?? '' }
      const ctxExtracts = [...(ctx.extracts ?? [])]
      for (const [k, x] of Object.entries(v)) if (typeof x === 'string' && EXTRACT_PROP.test(k) && !NOT_EXTRACT_PROP.test(k) && k !== 'extract' && words(x) >= 25) ctxExtracts.push(x)
      c.extracts = ctxExtracts
      const isTask = typeof v.instruction === 'string' && ('taskNumber' in v || 'marks' in v)
      if (typeof v.questionText === 'string' || typeof v.extract === 'string' || isTask) {
        const own = typeof v.extract === 'string' && words(v.extract) >= 1 ? v.extract : null
        const q = {
          paperId: c.paper?.id ?? '?',
          paperTitle: c.paper?.title ?? '',
          paperObj: c.paper?.obj,
          sectionTitle: c.section?.title ?? '',
          id: v.id ?? `q${v.questionNumber ?? v.taskNumber ?? '?'}`,
          type: v.questionType ?? '',
          questionText: String(v.questionText ?? v.instruction ?? ''),
          extract: own,
          context: own ? [own] : ctxExtracts,
          extractSource: typeof v.extractSource === 'string' ? v.extractSource : '',
          answers: Object.entries(v)
            .filter(([k]) => /^(modelAnswers?|exemplars?|sampleAnswers?|answer|fullMark|partialMarks)$/i.test(k))
            .flatMap(([k, x]) => flatStrings(x, k)),
          markScheme: Object.entries(v)
            .filter(([k]) => /markScheme|bulletPoints|indicative/i.test(k))
            .flatMap(([k, x]) => flatStrings(x, k)),
          exported,
        }
        q.key = `${q.paperId}|${q.id}|${q.questionText.slice(0, 80)}`
        if (!keys.has(q.key)) {
          keys.add(q.key)
          byFile.get(f).push(q)
        }
      }
      for (const x of Object.values(v)) walk(x, c)
    }
    for (const v of Object.values(roots)) walk(v, {})
  }
  for (const f of order) {
    if (!byFile.has(f)) continue
    try {
      collect(f, jiti(f), true)
    } catch (e) {
      errors.push(`${posix(f)}: ${String(e.message).slice(0, 160)}`)
    }
  }
  for (const f of order) {
    if (!byFile.has(f)) continue
    try {
      collect(f, everyTopLevel(f), false)
    } catch (e) {
      errors.push(`${posix(f)} (every top-level name): ${String(e.message).slice(0, 160)}`)
    }
  }
  return { byFile, errors }
}

/** Paper objects the site serves: the deduplicated aggregate the pages load. */
const livePapers = () => new Set(jiti(join(ROOT, 'src/data/mock-exams.ts')).allMockExamPapers ?? [])

// ── Attribution ────────────────────────────────────────────────────────────

function resolveLabel(texts) {
  for (const t of texts) {
    if (!t) continue
    const w = WORKS.find((x) => x.match.test(t))
    if (w) return w
  }
  return null
}
function resolveContext(texts) {
  for (const t of texts) {
    if (!t) continue
    const w = WORKS.find((x) => x.ctx.test(t))
    if (w) return w
  }
  return null
}

/**
 * What a label claims. `original` says the words are not the named work's;
 * `adapted` admits changes while naming a work; `claimed` presents the text as
 * the work's own; `named` is a person or publication this file does not know;
 * `unattributed` names nobody.
 */
function labelKind(attr, work) {
  if (attr && LABEL_ORIGINAL.test(attr)) return 'original'
  if (!attr) return work ? 'claimed' : 'unattributed'
  if (work && LABEL_ADAPTED.test(attr)) return 'adapted'
  if (work) return 'claimed'
  if (/\b(?:Dr|Professor|Prof\.|Rev\.?|Reverend|Lady|Lord|Mrs|Mr|Sir)\s+[A-Z]|\b(?:by|from)\s+(?:Dr\.?\s+)?[A-Z][a-z]+\s+[A-Z]|^(?:[A-Z][a-z]+\s+){1,3}[A-Z][a-z'-]+,/.test(attr)) return 'named'
  // A dated historical source ("Editorial, The Quarterly Review (1858)") is a
  // claim about a real publication, whoever wrote it.
  if ([...attr.matchAll(/\b(1[5-9]\d\d)\b/g)].some((m) => +m[1] <= 1955)) return 'named'
  return 'unattributed'
}

/** A question that presents its extract as a named work's or author's text. */
const PRESENTS_AS_WORK =
  /\b(?:extract|passage|scene|speech|soliloquy)\s+(?:below\s+)?from\s+(?:act|stave|chapter|the play|the novel|the novella|[A-Z"'])|\bhow (?:does\s+)?(?:shakespeare|dickens|priestley|bront[eë]|shelley|stevenson|golding|austen|doyle|eliot|marlowe|miller)\b[^.?]{0,160}\b(?:this|the)\s+(?:extract|passage)|\bwith reference to this extract and elsewhere in the (?:play|novel|novella)/i

/** The label for one passage, from the most specific evidence there is. */
function attributionOf(block, usedBy) {
  if (block.attrs.length) return { attribution: block.attrs[0], evidence: block.attrs }
  const alone = usedBy.filter((q) => q.extract && strictNorm(q.extract).replace(/^source [ab]:\s*/i, '') === strictNorm(block.value) && q.extractSource && !/\s\|\s/.test(q.extractSource))
  if (alone.length) return { attribution: alone[0].extractSource, evidence: [alone[0].extractSource] }
  for (const q of usedBy) {
    if (!q.extractSource || !q.extract) continue
    const parts = q.extractSource.split(/\s+\|\s+|\s+\/\s+(?=[A-Z])/)
    const at = q.extract.indexOf(block.value.slice(0, 60))
    if (at < 0) continue
    const markers = [...q.extract.matchAll(/(?:^|\n)\s*(?:source|passage|extract|text|poem)\s+[A-Z0-9]\b/gi)].map((m) => m.index)
    const idx = markers.length ? Math.max(0, markers.filter((m) => m <= at).length - 1) : 0
    const part = (parts[Math.min(idx, parts.length - 1)] ?? '').replace(/^(?:source|passage|extract|text|poem)\s+[A-Z0-9]:\s*/i, '')
    if (part) return { attribution: part, evidence: [part] }
  }
  return { attribution: '', evidence: [] }
}

// ── The audit ──────────────────────────────────────────────────────────────

function analyse(block, questions, liveSet, fairDealing) {
  const usedBy = questions.filter((q) => q.context.some((x) => strictNorm(x).includes(strictNorm(block.value))))
  const { attribution: attr0, evidence } = attributionOf(block, usedBy)
  const quotedTitles = [...evidence, ...block.hints].flatMap((a) => [...a.matchAll(/"([^"]+)"/g)].map((m) => m[1]))
  const { sentences, header } = sentencesOf(block.value, quotedTitles)
  const attribution = attr0 || header[0] || ''
  const labels = [...evidence, ...header]
  const qTexts = usedBy.map((q) => q.questionText)
  const pTitles = [...new Set(usedBy.map((q) => q.paperTitle))]
  const originalLabel = labels.find((a) => LABEL_ORIGINAL.test(a))
  let work = resolveLabel(labels)
  let via = work ? 'label' : null
  // Running text names the work only when no label names a source: a label
  // such as "Priya Sharma, The Observer" is a claim to be reported as made.
  if (!work && !originalLabel && labelKind(attribution, null) === 'unattributed') {
    work = resolveContext([...qTexts, ...pTitles, ...block.hints])
    if (work) via = 'question text, paper title or constant name'
  }
  // A label that names the Gutenberg eBook it was cut from is checked against
  // that eBook as well as the work's usual editions. Without this, Blake's
  // "London", cut verbatim from Meynell's modern-spelling edition (#79363) and
  // labelled so, was reported as altered against #1934 (27 September 2026).
  const namedIds = [...labels.join(' ').matchAll(/eBook #(\d+)/gi)].map((m) => Number(m[1]))
  if (work && namedIds.length) {
    const known = new Set((work.editions ?? [{ gutenberg: work.gutenberg ?? [] }]).flatMap((e) => e.gutenberg ?? []))
    const extra = namedIds.filter((id) => !known.has(id))
    if (extra.length) {
      const base = work.editions ?? [{ label: work.held ? `held edition (src/data/full-texts/${work.held}.ts)` : `Gutenberg #${(work.gutenberg ?? []).join(', #')}`, held: work.held, gutenberg: work.gutenberg ?? [] }]
      work = { ...work, key: `${work.key}+${extra.join('+')}`, editions: [...base.filter((e) => e.held || e.gutenberg?.length), ...extra.map((id) => ({ label: `Gutenberg #${id} (named in the label)`, gutenberg: [id] }))] }
    }
  }
  const kind = labelKind(originalLabel ?? attribution, work)
  const isClaim = kind === 'claimed' || kind === 'adapted'
  const cr = copyrightOf(isClaim ? work : null)
  const liveQs = usedBy.filter((q) => liveSet.has(q.paperObj))
  const rec = {
    constant: block.name,
    line: block.line,
    attribution: attribution || (via ? `(none; ${work.title} named by the ${via})` : '(none)'),
    kind,
    work: work ? `${work.title}, ${work.author}` : null,
    workKey: work?.key ?? null,
    held: false,
    source: null,
    words: words(block.value),
    sentences: 0,
    verbatimShare: null,
    counts: null,
    copyright: cr,
    usedBy: usedBy.map((q) => `${q.paperId}/${q.id}${liveSet.has(q.paperObj) ? '' : q.exported ? ' (not live)' : ' (not exported)'}`),
    modelAnswers: usedBy.reduce((n, q) => n + q.answers.length, 0),
    live: liveQs.length > 0,
    problems: [],
    notes: [],
    detail: [],
  }
  if (!usedBy.length) rec.notes.push('printed by no question (unused constant)')

  if (work && isClaim && cr.status !== 'copyright') {
    const { editions, missing } = sourcesFor(work)
    let best = null
    // Parentheses kept as well as removed (see sentencesOf): the better
    // reading counts. Keeping them only adds words to what is looked for, so
    // it lifts a passage whose parentheses are the book's own dialogue, and
    // for any other passage it can only find less.
    const kept = sentencesOf(block.value, quotedTitles, { keepParens: true }).sentences
    for (const ed of editions) {
      for (const ss of kept.join('\n') === sentences.join('\n') ? [sentences] : [sentences, kept]) {
        const res = compare(ss, ed)
        const t = tally(res)
        if (!best || t.share > best.t.share) best = { ed, res, t }
      }
    }
    rec.held = editions.some((e) => e.held)
    if (!best) {
      rec.source = missing.join('; ')
      rec.problems.push(`UNVERIFIED: attributed to ${work.author} (${work.title}); ${rec.source}`)
    } else {
      rec.source = best.ed.label
      rec.sentences = best.t.sentences
      rec.verbatimShare = Math.round(best.t.share * 1000) / 10
      rec.counts = best.t
      rec.detail = best.res.filter((r) => r.w >= 3 && r.kind !== 'verbatim').slice(0, 6).map((r) => `${r.kind}: "${first8(r.s)}..."`)
      const failing = best.t.share < 0.95 || best.t.altered + best.t.absent > 0
      // A piece the label names by title counts as held when that title is
      // in the texts fetched for its author.
      const titled = [...attribution.matchAll(/"([^"]+)"/g)].map((m) => looseNorm(m[1])).find((t) => t && words(t) >= 2 && best.ed.headings.has(t))
      const exact = work.exact !== false || !!titled
      const what = `${best.t.verbatim}/${best.t.sentences} sentences verbatim; ${best.t.punctuation} differ in punctuation or case only, ${best.t.altered} have words changed, ${best.t.absent} are not in the text`
      const lab = kind === 'adapted' ? ` (labelled "${attribution.slice(0, 80)}")` : ''
      if (!exact) {
        if (failing)
          rec.problems.push(
            `UNVERIFIED: attributed to ${work.author} (${attribution.slice(0, 90)}); the piece is not on Gutenberg, and ${best.t.verbatim} of ${best.t.sentences} sentences are in the ${work.author} texts fetched (${best.ed.label})`,
          )
      } else if (failing) {
        const onlyPunct = best.t.altered + best.t.absent === 0
        rec.problems.push(
          onlyPunct
            ? `NOT THE EDITION'S TEXT: ${work.title}${lab}, ${rec.verbatimShare}% verbatim (${what}); the words match ${best.ed.label} but its punctuation or capitals do not`
            : `NOT THE WORK'S WORDS: attributed to ${work.title}${titled ? ` ("${titled}")` : ''}${lab}, ${rec.verbatimShare}% verbatim (${what}; checked against ${best.ed.label})`,
        )
      }
      const want = [...new Set([...locationKeys(attribution), ...usedBy.flatMap((q) => locationKeys(q.questionText))])]
      const found = best.res.filter((r) => r.section && r.w >= 4).map((r) => locationKey(r.section.replace(/^#\d+\s*/, '')))
      if (exact && want.length && found.length) {
        const counts = {}
        for (const k of found) if (k) counts[k] = (counts[k] ?? 0) + 1
        const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
        if (top && !want.includes(top[0]) && best.t.share + best.t.punctuation / Math.max(1, best.t.sentences) >= 0.5)
          rec.problems.push(`WRONG LOCATION: labelled ${want.join(' / ')} but its sentences are in ${top[0]} (${best.ed.label})`)
      }
    }
  } else if (work && kind === 'original' && cr.status !== 'copyright') {
    const w2 = WORKS.find((w) => w.key === work.key)
    if (copyrightOf(w2).status === 'public-domain') {
      const { editions } = sourcesFor(w2)
      if (editions.length) {
        const t = tally(compare(sentences, editions[0]))
        if (t.verbatim) rec.notes.push(`labelled as not the work's words, yet ${t.verbatim} of ${t.sentences} sentences are ${w2.title} word for word`)
      }
    }
  }

  // A date on the label after the named author's death.
  if (work?.died && isClaim && !/posthum/i.test(attribution)) {
    const late = [...attribution.matchAll(/\b(1[5-9]\d\d)\b/g)].map((m) => +m[1]).filter((y) => y > work.died)
    if (late.length) rec.problems.push(`IMPOSSIBLE DATE: attributed to ${work.author}, dated ${late.join(', ')}; ${work.author} died in ${work.died}`)
  }

  // A passage labelled as written for the site, presented as the real work.
  if (kind === 'original' || kind === 'unattributed') {
    const claims = usedBy.filter((q) => PRESENTS_AS_WORK.test(q.questionText))
    const realWork = resolveContext([...qTexts, ...pTitles])
    if (claims.length && realWork && copyrightOf(realWork).status === 'public-domain')
      rec.problems.push(`PRESENTED AS ${realWork.title.toUpperCase()}: labelled "${(attribution || 'unattributed').slice(0, 70)}", but ${claims.length} question(s) present it as the ${/shakespeare/i.test(realWork.author) ? 'play' : 'book'}'s own text (e.g. ${claims[0].paperId}/${claims[0].id}: "${first8(claims[0].questionText)}...")`)
  }

  if (kind === 'named') rec.notes.push(`named source this script cannot verify: "${attribution.slice(0, 90)}"`)

  // A work in UK copyright: length against the house limits.
  if (cr.status === 'copyright' && work) {
    const lines = block.value.split('\n').filter((l) => l.trim()).length
    const over = work.poem ? lines > fairDealing.poemQuoteLines : rec.words > fairDealing.quoteWords
    const where = usedBy.length ? (rec.live ? 'printed on a live paper' : 'on a paper the site does not serve') : 'printed by no question, but published in the public repository'
    if (over)
      rec.copyrightOverLimit = `${rec.constant.includes('(line') ? rec.constant : `${rec.constant} (line ${rec.line})`}: ${work.title} by ${work.author}, ${rec.words} words${work.poem ? `, ${lines} lines` : ''} as one extract (${where}); house limit ${work.poem ? `${fairDealing.poemQuoteLines} lines of a poem at a time and ${Math.round(fairDealing.poemShare * 100)}% of it` : `${fairDealing.quoteWords} words per quotation`}; ${cr.basis}. Whether it is even ${work.author}'s text is not checked: the text is not held`
  }

  // Sentences that are some other known work's words.
  if (sentences.length && (rec.verbatimShare ?? 0) < 50) {
    const hits = crossMatch(sentences, work?.key)
    if (hits) rec.notes.push(hits)
  }
  return rec
}

/** Sentences of eight words or more found verbatim in some other known text. */
function crossMatch(sentences, exceptKey) {
  const longS = sentences.map((s) => looseNorm(s).split(' ')).filter((lw) => lw.length >= 8)
  if (!longS.length) return null
  const counts = new Map()
  for (const w of WORKS) {
    // Only works whose text is the work itself: an author's other writings
    // quote others (Ruskin quotes Macbeth), so a hit there proves nothing.
    if (w.key === exceptKey || w.exact === false || copyrightOf(w).status === 'copyright') continue
    for (const ed of sourcesFor(w).editions) {
      const hs = g6(ed)
      let n = 0
      for (const lw of longS) {
        if (!hasHash(hs, fnv(lw.slice(0, 6).join(' '))) || !hasHash(hs, fnv(lw.slice(-6).join(' ')))) continue
        if (ed.loose.includes(` ${lw.join(' ')} `)) n++
      }
      if (n) counts.set(w.title, Math.max(counts.get(w.title) ?? 0, n))
    }
  }
  if (!counts.size) return null
  return `contains sentences found word for word in: ${[...counts].map(([t, n]) => `${t} (${n})`).join(', ')}`
}

/** All of a quotation's words, in order, within a few words of each other. */
function silentCut(qw, hayWords) {
  for (let i = 0; i < hayWords.length; i++) {
    if (hayWords[i] !== qw[0]) continue
    let j = 1
    let k = i + 1
    while (j < qw.length && k < hayWords.length && k - i <= qw.length + 8) {
      if (hayWords[k] === qw[j]) j++
      k++
    }
    if (j === qw.length) return true
  }
  return false
}
/** "Kitchen at Five AM", "Do Not Go Gentle Into That Good Night": a title, not a quotation. */
const isTitle = (q) => {
  const ws = q.replace(/[,.:;!?]+$/, '').split(/\s+/)
  return ws.length <= 10 && !/[.!?]\s/.test(q) && ws.filter((w) => /^[A-Z0-9]/.test(w)).length / ws.length >= 0.7
}

/**
 * The quotations of four words or more in a question's model answers and mark
 * scheme that are in neither the paper's passages nor the works it is about.
 * A comparison question quotes the paper's other passage, so every passage the
 * paper prints counts as the question's. Each one missing is classed: a
 * `silent cut` has every word, in order, with words between left out and no
 * mark of the cut; `words changed` shares most of its three-word runs with the
 * text; `from another paper` is word for word a passage printed elsewhere in
 * the file; `not in the text` is none of these.
 *
 * `invented` lists the passages on this paper that are attributed to a real
 * work but are not its words. A quotation found in one of them and not in the
 * work is the invented line quoted back as the author's: the Frankenstein
 * model answers did exactly that, and "it is in the extract" hid it.
 *
 * The question text is audited too, since it is printed: a quotation in it
 * must be in the passages or the work, like any other.
 */
function auditQuotes(q, works, paperHay, paperValues, fileBlocks, invented = []) {
  const hay = ` ${looseNorm(paperHay)} `
  const hayWords = hay.trim().split(' ')
  const hay3 = new Set(gramHashes(hay.trim(), 3))
  const texts = []
  let unreadable = false
  for (const w of works) {
    if (copyrightOf(w).status !== 'public-domain' || w.exact === false) {
      unreadable = true
      continue
    }
    for (const e of sourcesFor(w).editions) texts.push(e)
  }
  const qText = ` ${looseNorm(q.questionText)} `
  // An answer may quote the question's own proposition back, re-inflected
  // ("sees the world differently" as "see the world differently").
  const q3 = new Set(gramHashes(qText.trim(), 3))
  const echoesQuestion = (qw) => {
    let hit = 0
    for (let i = 0; i + 3 <= qw.length; i++) if (q3.has(fnv(qw.slice(i, i + 3).join(' ')))) hit++
    return qw.length >= 3 && hit / Math.max(1, qw.length - 2) >= 0.5
  }
  const out = { checked: 0, missing: [], unverifiable: 0 }
  const inventedLoose = invented.map((v) => ` ${looseNorm(v)} `)
  const sources = [
    ...q.answers.map((x) => ({ ...x, where: 'model answer' })),
    ...q.markScheme.map((x) => ({ ...x, where: 'mark scheme' })),
    { text: q.questionText, where: 'question' },
  ]
  for (const a of sources) {
    for (const { q: quote, before } of quotationsIn(a.text)) {
      const w = words(quote)
      if (w < 4 || w > 60 || COINAGE_BEFORE.test(before) || ANSWER_PROSE.test(quote) || isTitle(quote)) continue
      const frags = fragmentsOf(quote)
      if (!frags.length) continue
      out.checked++
      const inWork = texts.some((e) => foundIn(frags, e.loose))
      if (!inWork && inventedLoose.some((h) => foundIn(frags, h))) {
        out.missing.push({ where: a.where, quote, w, how: 'invented or altered line quoted as the work' })
        continue
      }
      if (foundIn(frags, hay) || (a.where !== 'question' && foundIn(frags, qText)) || inWork) continue
      if (!paperHay && !texts.length) {
        out.unverifiable++
        continue
      }
      if (unreadable && !texts.length) {
        out.unverifiable++
        continue
      }
      const qw = looseNorm(quote).split(' ')
      if (a.where !== 'question' && echoesQuestion(qw)) continue
      const other = fileBlocks.find((b) => foundIn(frags, b.loose) && !paperValues.some((x) => strictNorm(x).includes(strictNorm(b.value))))
      let how
      if (other) how = `from another paper (${other.name})`
      else if (paperHay && silentCut(qw, hayWords)) how = 'silent cut'
      else {
        let hit = 0
        let tot = 0
        for (let i = 0; i + 3 <= qw.length; i++) {
          tot++
          const h = fnv(qw.slice(i, i + 3).join(' '))
          if (hay3.has(h) || texts.some((e) => g3(e).has(h))) hit++
        }
        how = tot && hit / tot >= 0.4 ? 'words changed' : 'not in the text'
      }
      // A question's quoted proposition ("'Source A is more effective.' To
      // what extent do you agree?") is a statement to argue with, not a
      // quotation of the text; it is wrong only when it misquotes the text.
      if (a.where === 'question' && how === 'not in the text') continue
      out.missing.push({ where: a.where, quote, w, how })
    }
  }
  return out
}

// ── Main ───────────────────────────────────────────────────────────────────

function run({ only, files = listFiles() } = {}) {
  const fairDealing = jiti(join(ROOT, 'src/lib/study-guides/fair-dealing.ts')).FAIR_DEALING
  const { byFile, errors } = questionsByFile(files)
  const liveSet = livePapers()
  const report = []
  for (const f of files) {
    const rel = posix(f)
    if (only && !rel.includes(only)) continue
    const qs = byFile.get(f) ?? []
    const blocks = blocksOf(f)
    const recs = blocks.map((b) => analyse(b, qs, liveSet, fairDealing)).filter((r, i) => r.usedBy.length || blocks[i].named)
    const fileBlocks = blocks.map((b) => ({ name: b.name, value: b.value, loose: ` ${looseNorm(b.value)} ` }))
    const problems = []
    const notes = []
    for (const r of recs) {
      const tag = r.live ? '' : r.usedBy.length ? ' [paper not live]' : ' [unused]'
      for (const p of r.problems) problems.push(`${r.constant.includes('(line') ? r.constant : `${r.constant} (line ${r.line})`}: ${p}${tag}`)
      for (const n of r.notes) notes.push(`${r.constant}: ${n}`)
    }
    // Model answers and mark schemes.
    let checked = 0
    let unverifiable = 0
    const noExtract = []
    const quoteIssues = []
    const byPaper = new Map()
    for (const q of qs) {
      const k = q.paperObj ?? q.paperId
      if (!byPaper.has(k)) byPaper.set(k, [])
      byPaper.get(k).push(...q.context)
    }
    const valueOf = new Map(blocks.map((b) => [b.name, b.value]))
    for (const q of qs) {
      if (WRITING_TYPES.has(q.type) || (!q.extract && WRITING_PROMPT.test(q.questionText))) continue
      if (/\bwriting\b/i.test(q.sectionTitle) && !/reading/i.test(q.sectionTitle)) continue
      if (!q.context.length && REFERS_TO_EXTRACT.test(q.questionText) && /\bread\b|\bextract\b/i.test(q.questionText)) noExtract.push(q)
      const paperValues = [...new Set(byPaper.get(q.paperObj ?? q.paperId) ?? [])]
      // The works a quotation may come from: the one its passage is labelled
      // as, and the one the question names. A paper title names a work only
      // for a question with a passage: a poetry question on a Macbeth paper
      // quotes poems, not Macbeth.
      const recsHere = recs.filter((r) => q.context.some((x) => strictNorm(x).includes(strictNorm(valueOf.get(r.constant) ?? '\u0000'))))
      const works = new Set()
      for (const r of recsHere) if (r.workKey) works.add(WORKS.find((w) => w.key === r.workKey))
      const named = resolveContext([q.extractSource, q.questionText, ...(q.context.length ? [q.paperTitle] : [])].filter(Boolean))
      if (named) works.add(named)
      if (!q.context.length && !works.size) continue
      const invented = recsHere.filter((r) => r.problems.some((p) => p.startsWith("NOT THE WORK'S WORDS"))).map((r) => valueOf.get(r.constant))
      const res = auditQuotes(q, [...works], paperValues.join(' \n '), paperValues, fileBlocks, invented)
      checked += res.checked
      unverifiable += res.unverifiable
      if (!res.missing.length) continue
      const qref = `${q.paperId}/${q.id}${liveSet.has(q.paperObj) ? '' : q.exported ? ' [paper not live]' : ' [not exported]'}`
      for (const m of res.missing) quoteIssues.push({ question: qref, where: m.where, how: m.how, words: m.w, opening: first8(m.quote) })
      const ex = (ms) => ms.slice(0, 3).map((m) => `"${first8(m.quote)}${words(m.quote) > 8 ? '...' : ''}" (${m.where}, ${m.how})`).join('; ')
      // An unmarked cut quotes words that are all in the passage, in order:
      // reported, as study-guides would correct it, but alone it does not make
      // a file need fixing, since no word the student reads is invented.
      const fake = res.missing.filter((m) => m.how.startsWith('invented'))
      const serious = res.missing.filter((m) => m.how !== 'silent cut' && !m.how.startsWith('invented'))
      const cuts = res.missing.filter((m) => m.how === 'silent cut')
      const by = (h) => serious.filter((m) => m.how.startsWith(h)).length
      if (fake.length)
        problems.push(`MODEL ANSWER QUOTES INVENTED LINES AS ${[...works][0]?.title.toUpperCase() ?? 'THE WORK'}: ${qref}, ${fake.length} quotation(s) of 4+ words are lines of the extract that are in no edition of the work (invented or altered), quoted as the author's, e.g. ${ex(fake)}`)
      if (serious.length) {
        const head = q.context.length ? 'MODEL ANSWER QUOTES LINES NOT IN ITS EXTRACT' : `MODEL ANSWER MISQUOTES ${[...works][0].title.toUpperCase()}`
        problems.push(`${head}: ${qref}, ${serious.length} quotation(s) of 4+ words (${by('not in the text')} not in the text, ${by('from another paper')} from another paper's passage, ${by('words changed')} with words changed), e.g. ${ex(serious)}`)
      }
      if (cuts.length) problems.push(`MINOR, UNMARKED CUT: ${qref}, ${cuts.length} quotation(s) join words of the text with words between left out and no ellipsis, e.g. ${ex(cuts)}`)
    }
    if (noExtract.length) notes.push(`${noExtract.length} question(s) ask the student to read an extract or source but the paper prints none (e.g. ${noExtract[0].paperId}/${noExtract[0].id})`)
    const hasData = recs.length > 0 || qs.length > 0
    report.push({
      file: rel,
      questions: qs.length,
      live: qs.some((q) => liveSet.has(q.paperObj)),
      extracts: recs,
      quotations: { checked, unverifiable, issues: quoteIssues },
      problems,
      notes: hasData ? notes : ['no papers or extracts in this file'],
      // UNVERIFIED is a check that could not run, and MINOR an unmarked cut
      // of words that are all in the text: neither alone needs a fix.
      needsFix: problems.some((p) => !/^[^:]+\(line \d+\): UNVERIFIED|^MINOR/.test(p)),
      copyrightOverLimit: recs.filter((r) => r.copyrightOverLimit).map((r) => r.copyrightOverLimit),
    })
  }
  return { report, errors }
}

function printReport({ report, errors }) {
  for (const e of errors) console.log(`LOAD ERROR ${e}`)
  for (const f of report) {
    console.log(`\n${f.needsFix ? 'NEEDS FIX' : 'ok       '}  ${f.file}  (${f.extracts.length} extracts, ${f.questions} questions${f.live ? ', live' : ', not served by the site'}, ${f.quotations.checked} quotations checked)`)
    for (const r of f.extracts) {
      const share = r.verbatimShare == null ? '   -  ' : `${String(r.verbatimShare).padStart(5)}%`
      console.log(
        `   ${share}  ${r.constant.padEnd(34).slice(0, 34)} ${String(r.words).padStart(4)}w  ${r.kind.padEnd(12)} ${r.copyright.status.padEnd(13)} ${r.held ? 'held   ' : r.source && /Gutenberg/.test(r.source) ? 'fetched' : '-      '} ${(r.work ?? '-').slice(0, 34).padEnd(34)} | ${r.attribution.slice(0, 60)} | ${r.usedBy.length} q, ${r.modelAnswers} answers${r.live ? '' : r.usedBy.length ? ' (not live)' : ''}`,
      )
      for (const d of r.detail.slice(0, 3)) console.log(`            ${d}`)
    }
    for (const p of f.problems) console.log(`   ! ${p}`)
    for (const n of f.notes) console.log(`   · ${n}`)
    for (const c of f.copyrightOverLimit) console.log(`   © ${c}`)
  }
  const n = report.filter((f) => f.needsFix).length
  console.log(`\n${report.length} files, ${report.reduce((a, f) => a + f.extracts.length, 0)} extracts; ${n} need fixing.`)
}

// ── The reverse test ───────────────────────────────────────────────────────
// A scanner that passes everything proves nothing. It must fail the three
// invented Frankenstein extracts that started this; pass passages cut from the
// held editions with passage() and playPassage(), and paragraphs cut from the
// fetched Gutenberg texts; and fail those same passages with one word changed.

function selfTest() {
  const { passage, playPassage } = jiti(join(ROOT, 'src/lib/study-guides/passage.ts'))
  const fairDealing = jiti(join(ROOT, 'src/lib/study-guides/fair-dealing.ts')).FAIR_DEALING
  const results = []
  const ok = (name, cond, info) => {
    results.push(cond)
    console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${info ? `  (${info})` : ''}`)
  }
  const none = new Set()
  const fake = (value, attr, qText = 'Read the extract below.') => [
    { name: 'SELF_TEST', line: 0, value, attrs: [attr], hints: [], named: true },
    [{ paperId: 'self', id: 'q', questionText: qText, context: [value], extract: value, extractSource: attr, answers: [], markScheme: [], paperTitle: '', exported: true }],
  ]
  const check = (value, attr, qText) => analyse(...fake(value, attr, qText), none, fairDealing)
  const failsWords = (r) => r.problems.some((p) => p.startsWith("NOT THE WORK'S WORDS"))

  // 1. The three extracts the finding named. mock-exams-aqa-lit-p1-set2.ts was
  // given Shelley's text on 27 September 2026, and reading it here then failed
  // four of these checks, so the invented extracts and their question are kept
  // as a fixture, labelled as invented, for this test alone.
  const file = join(ROOT, 'scripts/fixtures/check-mock-exam-extracts/invented-frankenstein.ts')
  const { byFile } = questionsByFile([file])
  const recs = blocksOf(file).map((b) => analyse(b, byFile.get(file), none, fairDealing))
  const frank = recs.filter((r) => r.workKey === 'frankenstein')
  ok('finds the three invented Frankenstein extracts in the fixture', frank.length === 3, `${frank.length} found`)
  for (const r of frank) ok(`flags ${r.constant}`, failsWords(r), `${r.verbatimShare}% verbatim, ${r.counts?.sentences} sentences`)
  // And the model answers that quote the invented lines back as Shelley's.
  const set2 = run({ files: [file] }).report[0]
  const quoted = set2.problems.find((p) => p.startsWith('MODEL ANSWER QUOTES INVENTED LINES AS FRANKENSTEIN'))
  ok('flags the model answers quoting the invented Frankenstein lines', !!quoted && quoted.includes('frankenstein-q1'), quoted ? /(\d+) quotation/.exec(quoted)[1] + ' quotations' : 'none found')

  // 2. Genuine passages must pass, and fail with one word changed.
  const fr = jiti(join(ROOT, 'src/data/full-texts/frankenstein.ts')).frankensteinText
  const mb = jiti(join(ROOT, 'src/data/full-texts/macbeth.ts')).macbethText
  const cases = [
    ['prose, Frankenstein Chapter V, cut with passage()', passage(fr, fr.sections.find((s) => s.title === 'Chapter V').id, 'It was on a dreary night of November', 'I beheld the wretch'), 'Mary Shelley, Frankenstein, Chapter 5'],
    ['a play, Macbeth Act 5 Scene 5, cut with playPassage()', playPassage(mb, mb.sections.find((s) => s.title === 'Act V, Scene V').id, 'She should have died hereafter', 'Signifying nothing'), 'William Shakespeare, Macbeth, Act 5, Scene 5'],
  ]
  for (const [key, attr] of [['pride-and-prejudice', 'Jane Austen, Pride and Prejudice (1813)'], ['engels-condition', 'Friedrich Engels, The Condition of the Working Class in England (1845)'], ['rural-rides', 'William Cobbett, Rural Rides (1830)']]) {
    const w = WORKS.find((x) => x.key === key)
    const paras = w.gutenberg.flatMap((id) => (loadGutenberg(id) ?? []).flatMap((s) => s.text.split(/\n\s*\n/)))
    const para = paras.filter((p) => words(p) >= 60 && words(p) <= 160 && !/^\s*[\[(*]/.test(p) && /[.!?]["'’”]?\s*$/.test(p.trim()))[40]
    if (para) cases.push([`a paragraph cut from ${w.title} (Gutenberg #${w.gutenberg[0]})`, para, attr])
    else ok(`finds a paragraph in Gutenberg #${w.gutenberg[0]} to cut (run with --fetch)`, false)
  }
  for (const [name, text, attr] of cases) {
    const r = check(text, attr)
    ok(`passes ${name}`, r.problems.length === 0 && r.verbatimShare >= 95, `${r.verbatimShare}% of ${r.sentences} sentences`)
    const m = /(?<=\s)([a-z]{5,})\b/.exec(text.slice(Math.floor(text.length / 2)))
    const changed = text.slice(0, Math.floor(text.length / 2)) + text.slice(Math.floor(text.length / 2)).replace(m[1], `${m[1]}ed`)
    const rc = check(changed, attr)
    ok(`fails it with one word changed ("${m[1]}")`, failsWords(rc), `${rc.counts?.altered ?? 0} altered`)
  }

  // 3. A genuine passage under the wrong scene must be caught.
  ok('flags a genuine passage labelled with the wrong scene', check(cases[1][1], 'William Shakespeare, Macbeth, Act 1, Scene 5').problems.some((p) => p.startsWith('WRONG LOCATION')))
  // 4. A passage labelled as specially written is listed, not failed...
  const orig = check('The house had been waiting for years. Nobody came to the door, and nobody left it.', 'Original literary fiction composition')
  ok('lists a specially written passage without failing it', orig.kind === 'original' && orig.problems.length === 0)
  // 5. ...unless the question presents it as the real work.
  const pres = check('The house had been waiting for years. Nobody came to the door, and nobody left it.', 'Original composition in the style of Macbeth', 'Read the following extract from Macbeth and then answer the question.')
  ok('flags a specially written passage a question presents as Macbeth', pres.problems.some((p) => p.startsWith('PRESENTED AS MACBETH')))
  // 6. A label dated after the author died.
  const late = check(cases[0][1], 'Mary Shelley, Frankenstein (1860)')
  ok('flags a label dated after the author died', late.problems.some((p) => p.startsWith('IMPOSSIBLE DATE')))
  const bad = results.filter((x) => !x).length
  console.log(`\n${results.length - bad}/${results.length} self-test checks passed.`)
  return bad === 0
}

if (FLAG('--self-test')) {
  process.exit(selfTest() ? 0 : 1)
} else {
  const out = run({ only: OPT('--file') })
  printReport(out)
  const json = OPT('--json')
  if (json) writeFileSync(json, JSON.stringify(out, null, 1))
  process.exit(out.report.some((f) => f.needsFix) ? 1 : 0)
}
