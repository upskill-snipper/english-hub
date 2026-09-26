import { macbethText } from '@/data/full-texts/macbeth'
import { passage } from '@/lib/study-guides/passage'

import { MacbethExtractWalkthrough, type ExtractLine, type Segment } from './walkthrough'

// ── Extract data ──────────────────────────────────────────────────────────────

/**
 * The soliloquy, cut from the held edition (src/data/full-texts/macbeth.ts,
 * Project Gutenberg #1533) and numbered here. Nothing in it is typed.
 *
 * WHY (26 September 2026). These 28 lines were typed into this file from the
 * Folger Shakespeare Library's digital text, which Folger licenses under CC
 * BY-NC 3.0, not for commercial use, and this site sells subscriptions. The
 * edition held here prints the same 28 lines with its own punctuation and
 * spelling: "heaven’s cherubin", "With his surcease success;", and a last
 * line broken off with a dash, "And falls on th’ other—", as Lady Macbeth
 * enters. The notes below quote it.
 *
 * This file is a server component so that the edition, the whole play, is
 * read here and only these lines are sent to the page. passage() throws if
 * either phrase stops being found, rather than printing a different speech.
 */
const EXTRACT_LINES: ExtractLine[] = passage(
  macbethText,
  'acti-scenevii',
  'If it were done when ’tis done',
  'And falls on th’ other',
)
  .split('\n')
  // The speech opens with its speaker's name, which is not a line of verse.
  .filter((line, i) => !(i === 0 && line === 'MACBETH'))
  .map((text, i) => ({ n: i + 1, text }))

const SEGMENTS: Segment[] = [
  {
    range: 'Lines 1-7',
    lines: [1, 2, 3, 4, 5, 6, 7],
    notice:
      // Three "done"s in lines 1-2, the fourth idea picked up in "We’d jump the life to come" (line 7).
      'Macbeth opens with a tangle of monosyllabic conditionals - "If it were done when ’tis done." The repetition of "done" three times in two lines, the hesitant "if", and the choked-off rhythm reveal a mind trying to outrun itself. The image of "this bank and shoal of time" makes mortal life a precarious sandbar between two oceans of eternity.',
    say: 'Shakespeare uses anaphoric repetition and stacked conditional clauses to dramatise Macbeth’s avoidance: he cannot bring himself to name the murder, so he hides it inside the abstract verb "done". The metaphor of life as a "bank and shoal" dwarfs the political prize ("the be-all and the end-all") against the immensity of the afterlife, a classical and Christian image of judgement looming on either side.',
    zoomOut:
      'This is the first sustained soliloquy in which Macbeth interrogates the regicide intellectually rather than emotionally. It marks a hinge in the ambition arc: the witches gave him the prophecy, Lady Macbeth gave him the dagger, but here he gives himself the rationale - and finds it cannot hold. The stalled syntax foreshadows the broken sleep ("Macbeth does murder sleep") that will pursue him from Act 2 onwards.',
  },
  {
    range: 'Lines 7-12',
    lines: [7, 8, 9, 10, 11, 12],
    notice:
      'The vocabulary shifts to the legal and the pedagogical: "judgement", "teach", "instructions", "even-handed justice". Macbeth imagines a moral universe that returns its lessons to the giver. The "poison’d chalice" image then collapses law, religion and feast into a single object - a perversion of the Eucharist offered back to its mixer.',
    say: 'Shakespeare layers semantic fields of justice and sacrament so that ethics and theology speak in one voice: secular and divine law agree that murder will recoil. The "poison’d chalice" is a polysemous symbol - the cup of communion turned into the cup of vengeance, prefiguring Macbeth’s own banquet in Act 3 where Banquo’s ghost takes the seat meant for celebration.',
    zoomOut:
      'The cup that returns "to our own lips" is the play’s clearest articulation of cosmic order: divinely ordained kingship is protected by a moral physics. Audiences in 1606, fresh from the Gunpowder Plot trials, would hear this as orthodoxy. The image will be answered structurally by Lady Macbeth’s sleepwalking ("All the perfumes of Arabia") and by Macbeth’s own "tedious" wading in blood.',
  },
  {
    range: 'Lines 12-16',
    lines: [12, 13, 14, 15, 16],
    notice:
      'Macbeth catalogues his obligations: "kinsman", "subject", "host". The triple structure builds like a legal indictment against himself. The brutal image of carrying "the knife myself" pierces the abstraction of the previous lines - suddenly the soliloquy contains a weapon.',
    say: 'The tricolon enumerates the social contracts Duncan’s death will shatter: blood loyalty (kinsman), political loyalty (subject), and the sacred Jacobean code of hospitality (host). Shakespeare uses asyndeton ("First… then… Besides") to make the list feel both methodical and cumulative; each clause tightens the moral noose. The shift from prosecutorial syntax to the concrete "knife" is deliberate - abstraction can be argued with, an instrument cannot.',
    zoomOut:
      'Hospitality is a load-bearing theme: Duncan’s arrival in 1.6 calls Inverness a "pleasant seat" with "sweet" air, the audience already knowing it is a death-trap. By naming the breach himself, Macbeth confirms what the play’s dramatic irony has been showing. This makes his subsequent action knowing rather than misled - essential evidence for any argument about personal responsibility versus supernatural compulsion.',
  },
  {
    range: 'Lines 16-21',
    lines: [16, 17, 18, 19, 20, 21],
    notice:
      'Duncan is canonised in real time. "Meek", "clear", "virtues", "angels", "trumpet-tongued" - the diction is liturgical, almost hagiographic. The phrase "deep damnation" lands as the moral antithesis: Macbeth has already named his soul’s destination.',
    say: 'Shakespeare uses sustained celestial imagery to elevate Duncan into a Christ-like sacrificial figure. The "trumpet-tongued" angels echo Revelation, casting the regicide as eschatological rather than merely political. Plosive alliteration in "deep damnation" makes the consequence aurally heavier than anything the soliloquy has reasoned its way towards.',
    zoomOut:
      'The play locates kingship in divine right - a doctrine James I had codified in his own writings on monarchy. To kill Duncan is therefore not just a crime but an act of cosmic disorder, which is exactly what Lennox describes in 2.3 ("the night has been unruly… strange screams of death"). Macbeth’s own diction here predicts the universe’s recoil.',
  },
  {
    range: 'Lines 21-25',
    lines: [21, 22, 23, 24, 25],
    notice:
      'The astonishing extended simile: pity becomes "a naked new-born babe, / Striding the blast", and cherubim ride "the sightless couriers of the air". A vulnerable infant somehow strides a hurricane; tears literally drown the wind.',
    say: 'Shakespeare yokes opposites - fragility and vastness, helplessness and apocalypse - in a metaphysical conceit that makes pity itself a force of nature. The paradox of a "naked new-born babe" wielding cosmic power dramatises a central Shakespearean conviction: moral feeling is the most powerful agent in the universe, even when it appears the weakest. The hyperbole "tears shall drown the wind" inverts elemental hierarchies; weeping out-roars the storm.',
    zoomOut:
      'The babe image returns hauntingly across the play - in Lady Macbeth’s "I have given suck" (1.7), in the bloody child apparition (4.1), in Macduff’s "untimely ripp’d" birth (5.8). Babies in Macbeth carry moral weight Macbeth cannot defeat. The very imagery he conjures here as a deterrent will, in the form of Macduff, eventually kill him.',
  },
  {
    range: 'Lines 25-28',
    lines: [25, 26, 27, 28],
    notice:
      'The soliloquy collapses into the equestrian metaphor: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself / And falls on th’ other". The enjambment between "itself" and "And falls" enacts the fall.',
    say: 'Shakespeare gives Macbeth the play’s most self-diagnostic image: ambition as an over-eager rider who leaps too high and is thrown. The metaphor is brutally honest - he has just spent twenty-five lines listing reasons not to act, and admits he has none of his own to act. Crucially, the sentence breaks off before completing, on a dash: "And falls on th’ other", what? The line is famously incomplete, its silence filled by Lady Macbeth’s entrance. Shakespeare lets dramaturgy finish the thought.',
    zoomOut:
      'This is the thesis statement of the entire tragedy. Macbeth knows he has no motive but ambition, knows ambition will destroy him, and proceeds anyway - which is the precise definition of a tragic hero in Aristotelian terms. The interrupted line foreshadows every later moment Lady Macbeth supplies the will Macbeth lacks, until in Act 5 he is left alone to face the consequences ("Tomorrow, and tomorrow, and tomorrow") with the throne but nothing else.',
  },
]

export default function MacbethExtractWalkthroughPage() {
  return <MacbethExtractWalkthrough lines={EXTRACT_LINES} segments={SEGMENTS} />
}
