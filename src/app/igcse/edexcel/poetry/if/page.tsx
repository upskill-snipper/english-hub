'use client'
// TODO [P2:auth] add layout-level board guard — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'If—',
  poet: 'Rudyard Kipling',
  lines: [
    {
      text: 'If you can keep your head when all about you',
      annotations: [
        {
          type: 'Opening conditional',
          note: 'The poem opens with the famous conditional "If" that gives the poem its title. Every virtue that follows is framed as a test — a series of challenges a young man must pass to become "a Man".',
          color: '#a855f7',
        },
        {
          type: 'Idiom',
          note: '"Keep your head" means stay calm, retain composure. Kipling uses everyday phrasing so that his moral code feels plain and achievable, not lofty.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '    Are losing theirs and blaming it on you,',
      annotations: [
        {
          type: 'Contrast',
          note: 'The son must remain steady while those around him panic. The image of others "losing" their heads sets up the ideal as standing firm against the crowd — stoic individualism.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'If you can trust yourself when all men doubt you,',
      annotations: [
        {
          type: 'Self-reliance',
          note: 'Kipling places self-trust above social validation. The word "all" is an extreme — even if everyone doubts you, you must keep faith in yourself. This is a core Victorian / Edwardian ideal of masculine resolve.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '    But make allowance for their doubting too;',
      annotations: [
        {
          type: 'Qualification',
          note: 'Kipling immediately qualifies his advice: self-trust must not become arrogance. The virtue is balance — confidence with humility. This balancing pattern ("do X, but not Y") runs through the whole poem.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'If you can wait and not be tired by waiting,',
      annotations: [
        {
          type: 'Patience',
          note: 'Patience is elevated as a virtue. The internal repetition ("wait / waiting") mimics the act itself, stretching the line with the same word.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '    Or being lied about, don\'t deal in lies,',
      annotations: [
        {
          type: 'Moral integrity',
          note: 'Even when treated unfairly, the speaker must refuse to respond in kind. Kipling\'s vision of manhood is not passive — it is an active refusal to lower oneself.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '    Or being hated, don\'t give way to hating,',
      annotations: [
        {
          type: 'Parallelism',
          note: 'The triple parallel structure ("Or being lied about… Or being hated… And yet don\'t look…") drills in the lesson through repetition. Each clause raises the stakes.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '    And yet don\'t look too good, nor talk too wise:',
      annotations: [
        {
          type: 'Warning against pride',
          note: 'Kipling warns against the danger of appearing morally superior. Virtue must be lived quietly — the moment you display it, you lose it.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'If you can dream—and not make dreams your master;',
      annotations: [
        {
          type: 'Key quote',
          note: 'One of the most quoted lines in English. Kipling argues the son should have ambitions but never be controlled by them. The em-dash creates a dramatic pause before the warning.',
          color: '#f59e0b',
        },
        {
          type: 'Antithesis',
          note: '"Dream / master" sets dreams against discipline. The ideal man dreams freely but remains in control of his own mind.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '    If you can think—and not make thoughts your aim;',
      annotations: [
        {
          type: 'Parallelism',
          note: 'The previous line\'s structure ("If you can X—and not make X your Y") is repeated exactly. This gives the stanza a balanced, almost proverbial feel. Thoughts must lead to action, not replace it.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'If you can meet with Triumph and Disaster',
      annotations: [
        {
          type: 'Personification',
          note: '"Triumph" and "Disaster" are capitalised and personified as two figures you must "meet". This gives them human weight, as if they were guests at your door.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The line sets up what is probably the poem\'s most famous single phrase in the next line. Triumph and Disaster are placed on the same line because they must be treated the same.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '    And treat those two impostors just the same;',
      annotations: [
        {
          type: 'Key quote',
          note: 'Calling triumph and disaster "impostors" is the moral heart of the poem. Both are fakes — neither should be trusted with how you feel about yourself. This is the Stoic backbone of the poem.',
          color: '#f59e0b',
        },
        {
          type: 'Metaphor',
          note: 'The word "impostors" is striking — it frames success and failure as disguises rather than truths. Real character lies underneath both.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'If you can bear to hear the truth you\'ve spoken',
      annotations: [
        {
          type: 'Test of resilience',
          note: 'The next example is oratorical: having your own honest words twisted against you. Kipling knew this world well — he was a famous public figure.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '    Twisted by knaves to make a trap for fools,',
      annotations: [
        {
          type: 'Archaic diction',
          note: '"Knaves" and "fools" are deliberately old-fashioned, giving the poem a proverbial, almost biblical tone — a father reaching for words that feel permanent.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Or watch the things you gave your life to, broken,',
      annotations: [
        {
          type: 'Pathos',
          note: 'The tone shifts from abstract to painful: losing everything you\'ve worked for. The comma before "broken" isolates the word, letting its weight fall.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '    And stoop and build \'em up with worn-out tools:',
      annotations: [
        {
          type: 'Image of resilience',
          note: '"Stoop" is physical and humble — the man bends to pick up the pieces. "Worn-out tools" suggests long labour. This is the most tender image in the poem: quiet endurance rather than heroism.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'If you can make one heap of all your winnings',
      annotations: [
        {
          type: 'Gambling metaphor',
          note: 'Kipling turns life into a game of chance. A "heap" of winnings becomes the stake for one enormous bet. The image is vivid and masculine — the card table as metaphor for courage.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '    And risk it on one turn of pitch-and-toss,',
      annotations: [
        {
          type: 'Allusion',
          note: '"Pitch-and-toss" is a simple coin-tossing game — the lowest form of gambling. The ideal man is willing to risk everything on a game the outcome of which he cannot control.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And lose, and start again at your beginnings,',
      annotations: [
        {
          type: 'Resilience',
          note: 'The poem\'s hardest test: lose everything and begin again. The repeated commas slow the line, matching the patient, heavy act of starting over.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '    And never breathe a word about your loss;',
      annotations: [
        {
          type: 'Stoic silence',
          note: 'The man must not even talk about it. Stoicism here borders on repression — a very Edwardian ideal of masculine self-control. Modern readers often find this line troubling.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'If you can force your heart and nerve and sinew',
      annotations: [
        {
          type: 'Triadic structure',
          note: '"Heart and nerve and sinew" — emotion, courage and physical strength in a three-part list. The word "force" shows that this is an act of will, not natural ability.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '    To serve your turn long after they are gone,',
      annotations: [
        {
          type: 'Endurance',
          note: 'Kipling asks for effort beyond normal limits. "Long after they are gone" means continuing to push even when your body and mind have nothing left.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And so hold on when there is nothing in you',
      annotations: [
        {
          type: 'Key quote',
          note: 'The climactic moment. The man must hold on when he has nothing left — when every natural resource is exhausted. This is the poem\'s hardest and most admired idea.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '    Except the Will which says to them: \'Hold on!\'',
      annotations: [
        {
          type: 'Personification',
          note: '"Will" is capitalised and personified as an inner voice. It becomes a second self — the voice that commands the exhausted body to keep going.',
          color: '#10b981',
        },
        {
          type: 'Direct speech',
          note: 'The only piece of direct speech in the poem is the command "Hold on!" — the whole poem\'s message condensed into two words.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'If you can talk with crowds and keep your virtue,',
      annotations: [
        {
          type: 'Social test',
          note: 'The final stanza moves from private struggle to public life. The man must be able to move in all social worlds — with the common crowd and with kings — without losing his moral centre.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '    Or walk with Kings—nor lose the common touch,',
      annotations: [
        {
          type: 'Key quote',
          note: 'One of the poem\'s most quoted lines. The ideal man is neither snob nor rabble-rouser — he keeps the "common touch" even when mixing with royalty. This is Kipling\'s version of egalitarian grace.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'If neither foes nor loving friends can hurt you,',
      annotations: [
        {
          type: 'Emotional resilience',
          note: 'Enemies cannot wound him; friends cannot flatter him off course. He is unshakable in either direction — a Stoic ideal of equanimity.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '    If all men count with you, but none too much;',
      annotations: [
        {
          type: 'Balance',
          note: 'Kipling repeats his qualifying pattern one last time. Value people — but not so much that you lose yourself. A man who lets anyone dictate him is no longer his own.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'If you can fill the unforgiving minute',
      annotations: [
        {
          type: 'Personification of time',
          note: '"Unforgiving minute" makes time itself a stern judge. The adjective suggests that time records every wasted second and does not grant second chances.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '    With sixty seconds\' worth of distance run,',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Life becomes a race: every minute must be filled with running. "Distance run" implies forward motion and achievement, not standing still. Every second must count.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Yours is the Earth and everything that\'s in it,',
      annotations: [
        {
          type: 'Climax',
          note: 'After 30 lines of conditions, the reward finally arrives: the entire Earth. The grand claim is almost biblical (cf. "the meek shall inherit the earth") — the dutiful son inherits the world.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'The reward is framed as total: not part of the Earth but all of it. The grammar ("Yours is…") places the inheritance before the subject for rhetorical emphasis.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '    And—which is more—you\'ll be a Man, my son!',
      annotations: [
        {
          type: 'Key quote',
          note: 'The final reward is not land or wealth but manhood itself. Kipling elevates becoming a "Man" (capitalised) above all material inheritance. The em-dashes and direct address to "my son" collapse the distance between speaker and listener.',
          color: '#f59e0b',
        },
        {
          type: 'Resolution',
          note: 'The poem is one enormous sentence finally resolving after 32 lines. All the "If" clauses have been leading here — to the moment of becoming. The punctuation has been holding its breath for the whole poem.',
          color: '#a855f7',
        },
      ],
    },
  ],

  context: `
    <h3>Rudyard Kipling (1865–1936)</h3>
    <p>Kipling was a British writer, poet and Nobel laureate, best known for <em>The Jungle Book</em>, <em>Kim</em> and his poems about India and the British Empire. Born in Bombay (Mumbai), he grew up between India and England and became one of the most popular — and most controversial — writers of the Edwardian era.</p>

    <h3>The poem and its dedication</h3>
    <p>"If—" was written in 1895 and published in 1910 in Kipling's collection <em>Rewards and Fairies</em>. Kipling said the poem was inspired by <strong>Leander Starr Jameson</strong>, the leader of the failed "Jameson Raid" in South Africa, whom Kipling admired as a man of quiet courage. But the poem is framed as fatherly advice to Kipling's own son, John.</p>

    <h3>Personal tragedy</h3>
    <p>The poem takes on a devastating second meaning when you know that <strong>John Kipling was killed in 1915</strong>, aged 18, at the Battle of Loos in the First World War. Kipling had used his influence to get his short-sighted son into the army. He was haunted by guilt for the rest of his life, writing the line "If any question why we died, / Tell them, because our fathers lied."</p>

    <h3>Victorian and Edwardian values</h3>
    <p>The poem expresses the ideal of the <strong>Stoic Englishman</strong>: calm, self-reliant, emotionally disciplined and dutiful. These values were central to the British public-school system and to the running of the Empire. Kipling is often seen as the great poet of this ideal — both its defender and, after 1915, its mourner.</p>

    <h3>Reception</h3>
    <p>"If—" was voted Britain's favourite poem in a 1995 BBC poll and its lines are inscribed above the players' entrance at Wimbledon's Centre Court ("meet with Triumph and Disaster / And treat those two impostors just the same"). Modern readers sometimes find its emotional repression troubling, but its influence is enormous.</p>
  `,

  summary: `Stanza 1 (lines 1–8): The father begins a long list of conditions. The son must stay calm when others panic, trust himself even when nobody else does, be patient under provocation, refuse to repay lies with lies or hate with hate — and all while avoiding the trap of looking or sounding morally superior.

Stanza 2 (lines 9–16): The son must dream and think without being ruled by either. He must face triumph and disaster with the same steady expression — Kipling calls them both "impostors". He must endure having his honest words twisted and having everything he built destroyed, then quietly rebuild it with "worn-out tools".

Stanza 3 (lines 17–24): The son must be willing to risk everything he owns on a single game, lose it, and start over without complaint. He must force his body and mind to keep going when they have nothing left — held upright only by the pure Will that commands "Hold on!"

Stanza 4 (lines 25–32): The son must move between social worlds — the common crowd and kings — without losing his moral centre. He must be wounded by neither enemies nor loving friends, and must fill every minute of every day with effort. Only then, Kipling promises, will he inherit the Earth — and, more importantly, become "a Man".

Overall meaning: The poem is a 32-line conditional sentence. It lists all the impossible virtues a son would need in order to become fully a man, then delivers its reward at the very end. It is both a hymn to Stoic self-control and, to modern ears, a picture of the impossible emotional demands placed on Edwardian masculinity.`,

  formAndStructure: `Form: "If—" is four stanzas of eight lines each (quatrains joined into octaves), totalling 32 lines. It is sometimes described as a "verse essay" or "sermon in verse".

One long sentence: Remarkably, the whole poem is a single sentence held together by a long list of conditional "If" clauses. Every clause sets up a test. The main verb — "Yours is the Earth" — is delayed until the penultimate line, so the reader, like the son, must wait patiently for the reward. The form enacts the poem's theme of endurance.

Rhyme scheme: The stanzas rhyme ABABCDCD, a steady, balanced pattern. The regularity mirrors the emotional control the poem is recommending — predictable, patient, never losing its rhythm.

Metre: Iambic pentameter, with an occasional feminine (unstressed) ending ("you" / "too" / "waiting"). The regular iambic beat gives the poem the feel of a ticking clock or a marching soldier — a sound of measured, disciplined time.

Anaphora: The repeated "If you can…" opens line after line. This pounding repetition is the poem's most distinctive structural device. It piles condition upon condition, making the son's task seem almost impossible, until the final reward feels all the greater.

Parallelism: Within stanzas, Kipling uses balanced pairs ("lied about / don\'t deal in lies", "hated / don\'t give way to hating"). This parallelism reinforces the idea of balance itself — the man must hold the middle between opposing pressures.

Volta: There is no traditional volta. Instead, the turn comes in the last two lines, where the conditions stop and the reward finally arrives. The whole poem has been leading to the word "Man" in the last line.

Direct address: The poem is spoken to "my son" — the only direct address in the whole poem appears in the last word. This reveal places the whole weight of the poem on a private, tender relationship: a father to his child.`,

  keyQuotes: [
    {
      quote: 'If you can keep your head when all about you / Are losing theirs',
      analysis:
        'The famous opening sets the poem\'s stoic tone. "Keep your head" is an everyday idiom — Kipling is deliberately avoiding grand language. The image of others "losing" their heads (with its faint echo of panic or even guillotine) makes calmness itself a kind of moral victory. Crucially, the son is to remain steady even when others blame him for their own failures.',
      themes: ['Stoicism', 'Self-control', 'Integrity'],
    },
    {
      quote: 'If you can dream—and not make dreams your master',
      analysis:
        'Kipling values ambition but distrusts obsession. The em-dash acts as a trap-door — it gives you the permission to dream and then immediately snatches the warning. Dreams are fine as servants but dangerous as masters. This is a classic Kipling balance: he gives with one hand and restrains with the other.',
      themes: ['Ambition', 'Self-control', 'Balance'],
    },
    {
      quote: 'If you can meet with Triumph and Disaster / And treat those two impostors just the same',
      analysis:
        'The moral heart of the poem. "Triumph" and "Disaster" are capitalised and personified as two figures that arrive at the door. Calling them "impostors" — fakes — is a brilliant stroke: both success and failure are disguises that should not be trusted to define you. The lines are inscribed above the players\' entrance at Wimbledon\'s Centre Court.',
      themes: ['Stoicism', 'Equanimity', 'Identity'],
    },
    {
      quote: 'And so hold on when there is nothing in you / Except the Will which says to them: \'Hold on!\'',
      analysis:
        'The climax of the third stanza. Kipling personifies "the Will" as an inner voice capable of commanding the body to continue when every natural resource is gone. The repetition of "Hold on" — once in description, once in direct speech — makes it feel like the phrase is being shouted at the reader as well as at the exhausted body.',
      themes: ['Endurance', 'Will-power', 'Resilience'],
    },
    {
      quote: 'If you can talk with crowds and keep your virtue, / Or walk with Kings—nor lose the common touch',
      analysis:
        'Kipling\'s vision of social grace: moving between worlds without losing yourself. "Crowds" and "Kings" are the two social extremes. The man who can be himself in both is, for Kipling, the ideal Englishman — neither snob nor demagogue. The phrase "common touch" has entered everyday English as a compliment to someone who wears status lightly.',
      themes: ['Integrity', 'Humility', 'Public life'],
    },
    {
      quote: 'If you can fill the unforgiving minute / With sixty seconds\' worth of distance run',
      analysis:
        'Time itself becomes a stern judge. "Unforgiving" is striking — time keeps score and does not grant mercy. The metaphor of "distance run" frames life as a race where every minute must be used productively. This is Kipling\'s Protestant work ethic in verse: there is no spare time, only minutes well or badly spent.',
      themes: ['Work ethic', 'Time', 'Effort'],
    },
    {
      quote: 'Yours is the Earth and everything that\'s in it',
      analysis:
        'The reward is deliberately enormous and slightly biblical. The inverted grammar ("Yours is…" rather than "You will have…") echoes the Beatitudes and gives the line the weight of scripture. The son inherits not part of the world but all of it — the full scale of the promise matching the full scale of what he has been asked to endure.',
      themes: ['Reward', 'Inheritance', 'Ambition'],
    },
    {
      quote: 'And—which is more—you\'ll be a Man, my son!',
      analysis:
        'The poem\'s single sentence finally finds its period. The em-dashes ("And—which is more—") slow the line down, making sure the reader does not miss what the real reward is. Owning the Earth is less important than becoming "a Man" (capitalised). The sudden switch to "my son" at the very end turns the whole poem from public oratory into private, tender instruction. Modern readers often note how much emotional pressure is folded into that single phrase.',
      themes: ['Masculinity', 'Growing up', 'Father–son relationships'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'If you can keep your head… / If you can trust yourself… / If you can wait…',
      effect:
        'The repetition of "If you can…" hammers the conditions home. Its relentlessness mirrors the difficulty of the task — the son must prove himself over and over again. It also builds enormous grammatical tension, because the sentence cannot finish until all the conditions are met.',
      lineRef: 2,
    },
    {
      device: 'Personification',
      example: 'treat those two impostors just the same',
      effect:
        'Triumph and Disaster are turned into characters — "impostors" in disguise. Personifying abstract ideas lets Kipling give them a moral charge: they are not just experiences but deceivers. The reader is taught to distrust both.',
      lineRef: 12,
    },
    {
      device: 'Antithesis / Balance',
      example: 'If you can dream—and not make dreams your master',
      effect:
        'Kipling constantly pairs an action with its restraint. Dream but control your dreaming; trust but allow doubt; value people but not too much. The poem\'s whole ethical system is built on these balanced pairs — the ideal man walks a narrow line.',
      lineRef: 9,
    },
    {
      device: 'Triadic lists',
      example: 'your heart and nerve and sinew',
      effect:
        'Kipling uses three-part lists to give his moral claims the force of proverb. "Heart and nerve and sinew" covers emotion, courage and body — a total picture of the self. The rhythm of three is memorable and chant-like.',
      lineRef: 21,
    },
    {
      device: 'Metaphor',
      example: 'fill the unforgiving minute / With sixty seconds\' worth of distance run',
      effect:
        'Kipling turns life into a race against the clock. Every minute is personified as a stern examiner that demands sixty seconds of real effort. The metaphor imports the language of sport and physical training into a moral sermon.',
      lineRef: 29,
    },
    {
      device: 'Direct address',
      example: 'you\'ll be a Man, my son!',
      effect:
        'The poem holds back its direct address until the very last word. "My son" collapses the whole poem into a private conversation between father and child. It turns public moral code into intimate love — and gives the poem its emotional punch.',
      lineRef: 32,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Do not go gentle into that good night',
    poet: 'Dylan Thomas',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems are fatherly / filial addresses about how to face the hardest parts of life. Kipling urges stoic calm; Thomas urges passionate rage. Compare the opposite models of manhood and the way each uses repetition (anaphora / villanelle) to drive home its message.',
    themes: ['Father-figures', 'Resilience', 'Defiance'],
  },
  {
    title: 'Poem at Thirty-Nine',
    poet: 'Alice Walker',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems look at what a parent hands down. Walker reflects on the gifts of a loving father from the adult child\'s perspective; Kipling speaks as the father in the moment of advice. Compare how each writer understands the inheritance of values.',
    themes: ['Parent–child relationships', 'Legacy', 'Identity'],
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    href: '/igcse/edexcel/poetry/piano',
    reason:
      'Piano is the emotional opposite of If—. Where Kipling insists on stoic control, Lawrence collapses into nostalgia, "weeping like a child". Compare how each poem treats masculine emotion — Kipling disciplines it, Lawrence surrenders to it.',
    themes: ['Masculinity', 'Emotion', 'Childhood'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function IfPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              If—
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Rudyard Kipling &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE 4ET1
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another
          from the anthology. These are strong pairings for If—.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
