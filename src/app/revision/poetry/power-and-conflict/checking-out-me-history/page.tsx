import { ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'

export const metadata = {
  title: 'Checking Out Me History -- John Agard -- The English Hub',
  description:
    'Interactive study guide for "Checking Out Me History" by John Agard. GCSE English Literature Power and Conflict anthology poem with annotations, key quotes, language analysis and comparison poems.',
}

/* ── Poem data ────────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'Checking Out Me History',
  poet: 'John Agard',
  lines: [
    // Stanza 1 — British education / nursery rhyme
    { text: 'Dem tell me', annotations: [{ type: 'Phonetic dialect', note: '"Dem" instead of "They" — Agard writes in Caribbean Creole throughout, asserting his cultural identity through language itself. The pronoun "Dem" distances the speaker from the British establishment.', color: '#f59e0b' }] },
    { text: 'Dem tell me' },
    { text: 'Wha dem want to tell me', annotations: [{ type: 'Anaphora', note: 'The repetition of "Dem tell me" creates a chant-like rhythm, emphasising how the British education system controlled the narrative and dictated what was worth knowing.', color: '#8b5cf6' }] },
    { text: '' },
    { text: 'Bandage up me eye with me own history', annotations: [{ type: 'Metaphor', note: '"Bandage up me eye" — a powerful metaphor for being blinded by a one-sided education. The bandage is made from "me own history", suggesting his Caribbean heritage has been used against him, wrapped around him to prevent him from seeing the truth.', color: '#ef4444' }] },
    { text: 'Blind me to me own identity', annotations: [{ type: 'Identity', note: 'The direct connection between historical knowledge and personal identity — without knowing your own history, you cannot know yourself. This is the central argument of the poem.', color: '#3b82f6' }] },
    { text: '' },
    { text: 'Dem tell me bout 1066 and all dat', annotations: [{ type: 'Allusion', note: '1066 — the Norman Conquest and the Battle of Hastings. Agard reduces this iconic date in British history to dismissive slang ("all dat") to show how irrelevant it feels to someone whose own history has been erased.', color: '#10b981' }] },
    { text: 'Dem tell me bout Dick Whittington and he cat', annotations: [{ type: 'Nursery rhyme', note: 'Dick Whittington — a folklore/pantomime figure. By placing British history alongside nursery rhymes, Agard suggests the education he received was trivial and childish, not serious or empowering.', color: '#ec4899' }] },
    { text: 'Dem tell me bout Ole King Cole was a merry ole soul', annotations: [{ type: 'Nursery rhyme', note: 'Old King Cole — a nursery rhyme character placed alongside genuine historical events, blurring the line between history and fantasy in the British curriculum as Agard experienced it.', color: '#ec4899' }] },
    { text: 'and de dish ran away with de spoon', annotations: [{ type: 'Nursery rhyme', note: 'From "Hey Diddle Diddle" — the descent into pure nonsense underscores Agard\'s argument that the British education he received was meaningless compared to the history he was denied.', color: '#ec4899' }] },
    { text: '' },

    // Stanza 2 — Toussaint L'Ouverture
    { text: 'But now I checking out me own history', annotations: [{ type: 'Volta / Turning point', note: '"But now" marks the shift from passive recipient to active agent. The present continuous "checking out" suggests an ongoing, deliberate process of self-education. This is the poem\'s refrain and thesis statement.', color: '#f59e0b' }] },
    { text: 'I carving out me identity', annotations: [{ type: 'Metaphor', note: '"Carving" suggests something permanent and deliberate, like a sculptor creating art from raw material. Identity is not given — it must be actively made. The verb also implies effort and resistance against hard material.', color: '#ef4444' }] },
    { text: '' },
    { text: 'Dem tell me bout de man who discover de balloon', annotations: [{ type: 'Contrast', note: 'The balloon — a relatively trivial invention — is what the British curriculum chose to teach, while the heroic achievements of Caribbean figures were ignored.', color: '#6366f1' }] },
    { text: 'and de cow who jump over de moon', annotations: [{ type: 'Nursery rhyme', note: 'Another nursery rhyme mixed with historical fact, reinforcing the idea that British education blurred the line between trivial fantasy and genuine knowledge.', color: '#ec4899' }] },
    { text: '' },
    { text: 'Dem tell me bout de dish heaving away with de spoon', annotations: [{ type: 'Repetition', note: 'A return to the nursery rhyme imagery, creating a cyclical pattern that mirrors the repetitive, narrow nature of the education system Agard criticises.', color: '#8b5cf6' }] },
    { text: 'but dem never tell me bout Toussaint L\'Ouverture', annotations: [{ type: 'Allusion — Caribbean hero', note: 'Toussaint L\'Ouverture (1743-1803) — the leader of the Haitian Revolution, the only successful slave revolt in history. He is the first of three Caribbean/African heroes Agard celebrates as missing from his education.', color: '#10b981' }] },
    { text: '' },
    { text: 'Toussaint', annotations: [{ type: 'Italicised stanza', note: 'In the original poem, the Caribbean hero stanzas are italicised, visually separating them from the British education stanzas. This typographical choice mirrors the separation between the two histories.', color: '#8b5cf6' }] },
    { text: 'a slave', annotations: [{ type: 'Short lines', note: 'The short, clipped lines in the hero stanzas create a reverent, almost sacred tone — like a prayer or hymn. Each fact is given weight and space on the page.', color: '#8b5cf6' }] },
    { text: 'with vision' },
    { text: 'lick back' },
    { text: 'Napoleon', annotations: [{ type: 'Heroic language', note: '"Lick back Napoleon" — Caribbean dialect for "defeated". L\'Ouverture\'s forces defeated Napoleon\'s army, one of the most powerful in the world. The colloquial language makes the achievement feel personal and immediate.', color: '#f59e0b' }] },
    { text: 'battalion' },
    { text: 'and first Black' },
    { text: 'Republic born', annotations: [{ type: 'Achievement', note: 'Haiti became the first Black republic in 1804 — a monumental event in world history that Agard argues was entirely absent from his British education.', color: '#3b82f6' }] },
    { text: 'Toussaint de thorn', annotations: [{ type: 'Metaphor', note: '"De thorn" — Toussaint is imagined as a thorn in the side of colonial power. The metaphor suggests something small but sharp and impossible to ignore, a source of constant discomfort to oppressors.', color: '#ef4444' }] },
    { text: 'to de French' },
    { text: 'Toussaint de beacon', annotations: [{ type: 'Metaphor', note: '"De beacon" — a guiding light. Toussaint represents hope and direction for oppressed people. The contrast between "thorn" (pain to oppressors) and "beacon" (hope to the oppressed) shows his dual significance.', color: '#ef4444' }] },
    { text: 'of de Haitian Revolution' },
    { text: '' },

    // Stanza 3 — British education again
    { text: 'Dem tell me bout de man who discover de balloon', annotations: [{ type: 'Repetition', note: 'The repetition of British curriculum content creates a monotonous, cyclical feel — the same narrow history taught over and over while Caribbean history remains invisible.', color: '#8b5cf6' }] },
    { text: 'and de cow who jump over de moon' },
    { text: '' },
    { text: 'Dem tell me bout de dish heaving away with de spoon' },
    { text: 'but dem never tell me bout Nanny de maroon', annotations: [{ type: 'Allusion — Caribbean hero', note: 'Nanny of the Maroons (c.1686-c.1755) — a Jamaican national hero who led guerrilla warfare against British colonisers. She is one of only two women named as a National Hero of Jamaica.', color: '#10b981' }] },
    { text: '' },

    // Stanza 4 — Nanny de maroon
    { text: 'Nanny', annotations: [{ type: 'Italicised stanza', note: 'Again, the Caribbean hero stanza would be italicised in the original layout, marking it as separate from and more significant than the nursery rhyme stanzas.', color: '#8b5cf6' }] },
    { text: 'see-Loss-far woman' },
    { text: 'of mountain dream', annotations: [{ type: 'Metaphor', note: '"Mountain dream" — the Blue Mountains of Jamaica where the Maroons lived. The word "dream" elevates their resistance into something visionary and aspirational.', color: '#ef4444' }] },
    { text: 'fire-Loss-woman' },
    { text: 'struggle stream', annotations: [{ type: 'Metaphor', note: '"Struggle stream" — the ongoing flow of resistance. "Stream" suggests something natural, unstoppable, and life-giving. The struggle is not a single event but a continuous force.', color: '#ef4444' }] },
    { text: 'to freedom river', annotations: [{ type: 'Metaphor', note: '"Freedom river" — the stream of struggle flows into a river of freedom. The natural imagery suggests liberation is inevitable, a force of nature that cannot be contained.', color: '#ef4444' }] },
    { text: '' },

    // Stanza 5 — British education again
    { text: 'Dem tell me bout Lord Nelson and Waterloo', annotations: [{ type: 'Allusion', note: 'Lord Nelson — a British naval hero. Agard juxtaposes celebrated British military figures with forgotten Caribbean resistance fighters, questioning who gets to be called a "hero".', color: '#10b981' }] },
    { text: 'but dem never tell me bout Shaka de great Zulu', annotations: [{ type: 'Allusion — African hero', note: 'Shaka Zulu (c.1787-1828) — the founder of the Zulu Kingdom and one of the most influential monarchs in Southern African history. His military innovations transformed the region.', color: '#10b981' }] },
    { text: '' },
    { text: 'Dem tell me bout Columbus and 1492', annotations: [{ type: 'Allusion', note: 'Columbus\'s arrival in the Americas in 1492 — presented as "discovery" in British education, but from a Caribbean perspective it marks the beginning of colonisation, slavery, and genocide.', color: '#10b981' }] },
    { text: 'but not a word bout de Caribs and de Arawaks too', annotations: [{ type: 'Contrast', note: 'The Caribs and Arawaks — the indigenous peoples of the Caribbean who were decimated by European colonisation. Their absence from the curriculum erases the victims while celebrating the colonisers.', color: '#6366f1' }] },
    { text: '' },

    // Stanza 6 — British education again
    { text: 'Dem tell me bout Florence Nightingale and she lamp', annotations: [{ type: 'Allusion', note: 'Florence Nightingale — the famous British nurse. Her story is contrasted with Mary Seacole\'s, a Jamaican-born nurse who served in the Crimean War but was largely written out of British history.', color: '#10b981' }] },
    { text: 'and target me with dem statistics' },
    { text: '' },

    // Stanza 7 — Mary Seacole
    { text: 'but dem never tell me bout Mary Seacole', annotations: [{ type: 'Allusion — Caribbean hero', note: 'Mary Seacole (1805-1881) — a Jamaican-born nurse who set up the "British Hotel" near the Crimean War front to care for wounded soldiers, despite being rejected by the British War Office. She was largely forgotten until recent decades.', color: '#10b981' }] },
    { text: '' },
    { text: 'From Jamaica', annotations: [{ type: 'Italicised stanza', note: 'The final hero stanza, again visually distinct. Seacole\'s story is given the same reverent, hymn-like treatment as Toussaint\'s and Nanny\'s.', color: '#8b5cf6' }] },
    { text: 'she travel far' },
    { text: 'to de Crimean War', annotations: [{ type: 'Historical detail', note: 'The Crimean War (1853-56) — Seacole travelled at her own expense to nurse wounded soldiers after being rejected by the official nursing establishment.', color: '#3b82f6' }] },
    { text: 'she volunteer to go' },
    { text: 'and target me with dem statistics' },
    { text: '' },
    { text: 'and target me with dem dates', annotations: [{ type: 'Metaphor', note: '"Target me" — the language of warfare applied to education. The British curriculum is portrayed as a weapon used against the speaker, not a tool for empowerment.', color: '#ef4444' }] },
    { text: '' },
    { text: 'But now I checking out me own history', annotations: [{ type: 'Refrain', note: 'The return of the refrain, now carrying accumulated power from all the heroes who have been celebrated. The speaker\'s resolve has grown stronger through the poem.', color: '#f59e0b' }] },
    { text: 'I carving out me identity', annotations: [{ type: 'Final declaration', note: 'The poem ends with the same defiant statement of self-determination. Identity is not something given by an education system — it must be carved out, actively and deliberately, by the individual.', color: '#f59e0b' }] },
  ],

  context: `<p><strong>John Agard</strong> (born 1949) is a Guyanese-British poet who moved from Guyana to England in 1977. He is one of the most prominent voices in Caribbean-British poetry, known for his performance poetry, use of Creole dialect, and explorations of cultural identity.</p>

<p><strong>"Checking Out Me History"</strong> was published in 2005 in his collection <em>Half-Caste and Other Poems</em>. The poem is a direct challenge to the British education system, which Agard argues taught him only European history while erasing the achievements of Black and Caribbean historical figures.</p>

<p><strong>Postcolonial context:</strong> The poem sits within the postcolonial literary tradition, which examines the lasting cultural and psychological effects of European colonialism. Agard grew up in British Guiana (now Guyana), a former British colony, where the school curriculum was designed by the colonial power and centred entirely on British history and culture.</p>

<p><strong>Caribbean history:</strong> The poem celebrates three key figures: <strong>Toussaint L'Ouverture</strong>, who led the Haitian Revolution (the only successful slave revolt); <strong>Nanny of the Maroons</strong>, a Jamaican resistance leader; and <strong>Mary Seacole</strong>, a Jamaican nurse in the Crimean War. All three were largely absent from British school curricula when Agard was educated.</p>

<p><strong>British education system:</strong> The poem critiques how the National Curriculum prioritised a narrow, Eurocentric view of history. When Agard was at school, figures like Toussaint and Seacole were not taught, while nursery rhymes and British military heroes dominated. The poem argues this was a deliberate act of cultural erasure.</p>

<p><strong>Language as resistance:</strong> Agard writes in Caribbean Creole rather than Standard English, which is itself an act of defiance — he refuses to use the coloniser's language to discuss the coloniser's failings.</p>`,

  summary: `The speaker describes how the British education system ("Dem") taught him only European history and nursery rhymes while hiding the achievements of Black and Caribbean heroes. He was told about 1066, Dick Whittington, and Florence Nightingale, but never about Toussaint L'Ouverture (who led the Haitian Revolution), Nanny of the Maroons (who fought British colonisers in Jamaica), or Mary Seacole (who nursed soldiers in the Crimean War).

The poem alternates between dismissive stanzas about British education — mixing real history with nursery rhymes to show how trivial it felt — and reverent, hymn-like stanzas celebrating Caribbean heroes. The British stanzas are written in a sing-song, mocking rhythm, while the Caribbean stanzas use short, powerful lines that feel almost sacred.

The poem builds towards a repeated refrain: "But now I checking out me own history / I carving out me identity." The speaker rejects the passive role of being "told" what to know and instead takes active control of his own education and selfhood. The "carving" metaphor suggests this is difficult, deliberate work — identity must be fought for, not passively received.

Ultimately, the poem argues that controlling a people's history is a form of oppression ("Bandage up me eye"), and that reclaiming that history is essential to building a free and authentic identity.`,

  formAndStructure: `STRUCTURE:
The poem alternates between two types of stanza:
1. "British education" stanzas — written in a mocking, sing-song rhythm that mixes real historical events (1066, Lord Nelson) with nursery rhymes (Dick Whittington, Old King Cole), suggesting the education was trivial and patronising.
2. "Caribbean hero" stanzas — originally italicised in print, written in short, reverent lines that feel like hymns or prayers, celebrating Toussaint L'Ouverture, Nanny of the Maroons, and Mary Seacole.

This alternating structure creates a powerful visual and rhythmic contrast on the page.

FORM:
- Free verse with no regular rhyme scheme — Agard rejects the formal structures of English poetry just as he rejects the English curriculum.
- The irregular form mirrors the speaker's refusal to conform to British expectations.
- Occasional half-rhymes and internal rhymes ("balloon/moon/spoon") appear in the British stanzas, mimicking nursery rhyme patterns to mock them.

REFRAIN:
"Dem tell me" opens most British stanzas, creating an insistent, accusatory rhythm.
"But now I checking out me own history / I carving out me identity" is the poem's refrain, growing in power with each repetition.

VISUAL LAYOUT:
- The Caribbean hero stanzas use shorter lines, creating white space on the page that forces the reader to slow down and give each fact weight.
- The British stanzas are longer and more cluttered, suggesting an overwhelming flood of irrelevant information.

PHONETIC SPELLING:
- "Dem", "me", "bout", "dat", "de" — Agard spells words phonetically to represent Caribbean Creole pronunciation, making the poem a performance piece that sounds like spoken dialect rather than written Standard English.

ENDING:
The poem ends with the refrain, giving the speaker the final word. The shift from "Dem tell me" (passive, past tense) to "I checking out" and "I carving" (active, present continuous) shows the speaker's transformation from passive recipient to active agent of his own identity.`,

  keyQuotes: [
    {
      quote: 'Dem tell me',
      analysis:
        'The poem\'s opening and most repeated phrase. "Dem" (they) refers to the British education system and establishment. The phonetic Creole spelling is itself an act of resistance — Agard refuses to write in Standard English. The repetition creates an insistent, almost accusatory tone, as if building a case against the system.',
      themes: ['Power of education', 'Cultural oppression', 'Identity'],
    },
    {
      quote: 'Bandage up me eye with me own history',
      analysis:
        'The central metaphor of the poem. The speaker has been deliberately blinded — not with a foreign material, but with his "own history" twisted into a tool of oppression. The bandage prevents sight (understanding), and the fact that it is made from "me own history" suggests that colonial education weaponised Caribbean identity against Caribbean people.',
      themes: ['Oppression', 'Identity', 'Power of education', 'Colonialism'],
    },
    {
      quote: 'Toussaint a slave with vision lick back Napoleon battalion',
      analysis:
        'Celebrates Toussaint L\'Ouverture as a visionary who defeated one of the most powerful armies in the world. "Lick back" is Caribbean Creole for "defeated" — the use of dialect makes the victory feel personal and triumphant. The contrast between "slave" and "vision" emphasises that greatness is not determined by social status.',
      themes: ['Resistance', 'Heroism', 'Pride', 'Power'],
    },
    {
      quote: 'Toussaint de thorn to de French / Toussaint de beacon of de Haitian Revolution',
      analysis:
        'A dual metaphor: Toussaint is both a "thorn" (a source of pain and irritation to oppressors) and a "beacon" (a guiding light for the oppressed). This contrast shows how the same figure can represent threat and hope depending on perspective.',
      themes: ['Resistance', 'Heroism', 'Dual perspective'],
    },
    {
      quote: 'Nanny see-far woman of mountain dream',
      analysis:
        'Nanny of the Maroons is described with reverent, almost mythical language. "See-far woman" suggests prophetic vision and wisdom. "Mountain dream" elevates the Jamaican Blue Mountains — where the Maroons made their stand — into a place of aspiration and spiritual significance.',
      themes: ['Heroism', 'Pride', 'Resistance', 'Nature'],
    },
    {
      quote: 'Mary Seacole / From Jamaica she travel far',
      analysis:
        'Mary Seacole is presented as someone who crossed vast distances — both physical and cultural — to help others. The simplicity of "she travel far" underscores the quiet determination and sacrifice that went unrecognised by the British establishment, which celebrated Florence Nightingale instead.',
      themes: ['Heroism', 'Injustice', 'Cultural erasure'],
    },
    {
      quote: 'But now I checking out me own history',
      analysis:
        'The poem\'s refrain and turning point. "But now" marks the shift from passive acceptance to active resistance. "Checking out" is deliberately casual and modern — this is not an academic exercise but a personal journey of discovery. The present continuous tense suggests the process is ongoing and unstoppable.',
      themes: ['Identity', 'Resistance', 'Empowerment', 'Self-discovery'],
    },
    {
      quote: 'I carving out me identity',
      analysis:
        'The final line of the poem. "Carving" is a powerful verb — it suggests something permanent (like sculpture or inscription), deliberate, and requiring great effort against resistant material. Identity is not given or inherited; it must be actively created. The speaker has moved from object (being told) to subject (carving).',
      themes: ['Identity', 'Empowerment', 'Resistance', 'Self-determination'],
    },
  ],

  languageDevices: [
    {
      device: 'Phonetic Dialect (Caribbean Creole)',
      example: 'Dem tell me / Wha dem want to tell me',
      effect:
        'Agard writes in Caribbean Creole throughout the poem, using "Dem" for "They", "me" for "my", "bout" for "about", and "de" for "the". This is a deliberate act of linguistic resistance — by refusing to write in Standard English, Agard asserts his Caribbean identity in the very fabric of the poem. The language is inseparable from the message.',
      lineRef: 0,
    },
    {
      device: 'Anaphora',
      example: 'Dem tell me / Dem tell me / Dem tell me bout...',
      effect:
        'The relentless repetition of "Dem tell me" at the start of lines creates an insistent, accusatory rhythm — like a witness giving testimony or a prosecutor building a case. Each repetition adds another charge against the education system, building cumulative anger and frustration.',
      lineRef: 2,
    },
    {
      device: 'Metaphor of Blindness',
      example: 'Bandage up me eye with me own history / Blind me to me own identity',
      effect:
        'Education is presented as an act of deliberate blinding. The metaphor suggests that the curriculum was not simply incomplete but actively harmful — designed to prevent the speaker from seeing the truth about his own heritage. The bandage both conceals and constrains.',
      lineRef: 4,
    },
    {
      device: 'Contrast / Juxtaposition',
      example: 'Dem tell me bout Florence Nightingale... but dem never tell me bout Mary Seacole',
      effect:
        'The poem repeatedly juxtaposes celebrated British figures with forgotten Caribbean ones. Nightingale vs. Seacole is particularly pointed because both were nurses in the same war, yet only the white British woman was remembered. The contrast exposes the racial bias embedded in the curriculum.',
      lineRef: 49,
    },
    {
      device: 'Repetition (Refrain)',
      example: 'But now I checking out me own history / I carving out me identity',
      effect:
        'The refrain grows in power each time it appears. It marks the poem\'s structural turning points, shifting from complaint to celebration, from passivity to agency. The repetition also gives the poem a song-like or chant-like quality, connecting it to oral Caribbean storytelling traditions.',
      lineRef: 12,
    },
    {
      device: 'Allusion',
      example: 'Toussaint L\'Ouverture... Nanny de maroon... Mary Seacole... Shaka de great Zulu',
      effect:
        'Agard fills the poem with allusions to real historical figures who were excluded from his British education. Each allusion serves a dual purpose: it educates the reader about these figures while simultaneously proving that the British curriculum\'s omission of them was a choice, not an oversight.',
      lineRef: 19,
    },
    {
      device: 'Nursery Rhyme Parody',
      example: 'de dish ran away with de spoon / de cow who jump over de moon',
      effect:
        'By weaving nursery rhymes into stanzas about British education, Agard suggests that the history he was taught was as trivial and childish as fairy tales. The blurring of real history with fantasy undermines the authority of the British curriculum.',
      lineRef: 10,
    },
    {
      device: 'Semantic Field of Vision',
      example: 'Bandage up me eye / Blind me / see-far woman / beacon',
      effect:
        'The poem builds a sustained semantic field around sight and blindness. The British system "bandages" and "blinds", while the Caribbean heroes are associated with vision ("see-far woman") and light ("beacon"). Reclaiming history is presented as an act of recovering sight.',
      lineRef: 4,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'London',
    poet: 'William Blake',
    link: '/revision/poetry/power-and-conflict/london',
    points: [
      'Both poets criticise powerful institutions — Agard attacks the education system, Blake attacks the Church, monarchy, and government.',
      'Both use repetition to build a sense of injustice — "Dem tell me" echoes Blake\'s "In every" anaphora.',
      'Both poems give voice to the powerless and marginalised in society.',
      'Blake writes in strict quatrains (working within English tradition) while Agard rejects English poetic form entirely.',
    ],
  },
  {
    poem: 'The Emigree',
    poet: 'Carol Rumens',
    link: '/revision/poetry/power-and-conflict/the-emigree',
    points: [
      'Both explore cultural identity and the relationship between place and selfhood.',
      'Both speakers feel displaced from their heritage — Agard by the education system, the Emigree by political exile.',
      'Both poems contrast a hostile present reality with a treasured cultural past.',
      'The Emigree\'s speaker idealises her homeland; Agard\'s speaker actively researches his, making his reclamation more deliberate.',
    ],
  },
  {
    poem: 'Tissue',
    poet: 'Imtiaz Dharker',
    link: '/revision/poetry/power-and-conflict/tissue',
    points: [
      'Both explore how human identity is shaped by external systems and records.',
      'Both use extended metaphors — Agard uses blindness/sight, Dharker uses paper/tissue.',
      'Both question the power structures that control narratives — education (Agard) vs. bureaucracy (Dharker).',
      'Both suggest that true identity transcends the systems that try to define it.',
    ],
  },
]

/* ── Theme tokens ─────────────────────────────────────────────────── */

const THEMES = [
  'Identity',
  'Power of education',
  'Cultural oppression',
  'Colonialism',
  'Resistance',
  'Heroism',
  'Pride',
  'Anger',
  'Empowerment',
]

/* ── Page component ───────────────────────────────────────────────── */

export default function CheckingOutMeHistoryPage() {
  return (
    <div className="space-y-8">
      {/* ── Breadcrumb / back ─────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power &amp; Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Checking Out Me History
            </h1>
            <p className="text-body-sm text-muted-foreground">
              John Agard &middot; Power &amp; Conflict Anthology
            </p>
          </div>
        </div>
      </div>

      {/* ── Theme badges ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ───────────────────────────────── */}
      <InteractivePoemViewer poem={POEM} />

      {/* ── Comparison poems ──────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          Compare with&hellip;
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.poem}
              className="rounded-xl border border-border bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground mb-0.5">
                {c.poem}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{c.poet}</p>

              <ul className="space-y-2 mb-4 flex-1">
                {c.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-card-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-muted-foreground/30"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
