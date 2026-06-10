import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  FileText,
  Star,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { isGcseBoard } from '@/lib/board/board-filter'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { t } from '@/lib/i18n/t'

/* ── Grade badge helper ─────────────────────────────────────────── */

function GradeBadge({ grade }: { grade: number }) {
  const colours: Record<number, string> = {
    5: 'border-amber-500/40 bg-amber-500/10 text-amber-700',
    7: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    9: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  }
  return (
    <Badge variant="outline" className={colours[grade] ?? ''}>
      Grade {grade}
    </Badge>
  )
}

/* ── Annotation component ───────────────────────────────────────── */

/** Card-level chrome labels resolved in the async page and threaded down. */
interface CardLabels {
  extract: string
  studentResponse: string
  examinerAnnotations: string
  whatMakesPrefix: string
  whatMakesSuffix: string
  annStrength: string
  annImprovement: string
  annUpgrade: string
}

function Annotation({
  type,
  label,
  children,
}: {
  type: 'strength' | 'improvement' | 'upgrade'
  label: string
  children: React.ReactNode
}) {
  const config = {
    strength: {
      icon: CheckCircle2,
      colour: 'text-emerald-400',
      border: 'border-emerald-500/30 bg-emerald-500/[0.06]',
    },
    improvement: {
      icon: AlertTriangle,
      colour: 'text-clay-600',
      border: 'border-amber-500/30 bg-amber-500/[0.06]',
    },
    upgrade: {
      icon: TrendingUp,
      colour: 'text-blue-400',
      border: 'border-blue-500/30 bg-blue-500/[0.06]',
    },
  }
  const c = config[type]
  const Icon = c.icon

  return (
    <div className={`flex items-start gap-2.5 rounded-xl border p-3 ${c.border}`}>
      <Icon className={`mt-0.5 size-4 shrink-0 ${c.colour}`} />
      <div className="text-body-sm text-muted-foreground leading-relaxed">
        <span className={`font-semibold ${c.colour}`}>{label}:</span> {children}
      </div>
    </div>
  )
}

/* ── Model answer data ──────────────────────────────────────────── */

interface ModelAnswer {
  id: number
  paper: 'Paper 1' | 'Paper 2'
  question: string
  questionType: string
  grade: 5 | 7 | 9
  extract: string
  response: string
  annotations: { type: 'strength' | 'improvement' | 'upgrade'; text: string }[]
  whatMakesThisGrade: string[]
}

const MODEL_ANSWERS: ModelAnswer[] = [
  /* ── Paper 1 answers ──────────────────────────────────────────── */
  {
    id: 1,
    paper: 'Paper 1',
    question:
      'How does the writer use language to describe the setting? Refer to the extract to support your answer.',
    questionType: 'Language analysis (Q2 style)',
    grade: 5,
    extract:
      'The street was dark and the rain fell heavily on the cracked pavement. A single lamp flickered at the corner, casting long shadows across the empty road.',
    response:
      'The writer uses the adjective "dark" to describe the street which makes it sound scary and gloomy. The word "cracked" suggests the pavement is old and damaged, which makes the reader feel like this is a neglected place. The lamp "flickered" which creates a sense of uncertainty because it is not giving a strong light. The "long shadows" add to the creepy atmosphere because shadows can be associated with fear. The rain falling "heavily" makes it feel depressing and miserable. Overall, the writer creates a negative and frightening atmosphere.',
    annotations: [
      {
        type: 'strength',
        text: 'Identifies relevant language features and attempts to explain their effect on the reader.',
      },
      {
        type: 'strength',
        text: 'Uses embedded quotations throughout -- each point is grounded in the text.',
      },
      {
        type: 'improvement',
        text: 'Analysis stays at word level. No exploration of how the techniques work together or contribute to deeper meaning.',
      },
      {
        type: 'improvement',
        text: 'Effects are general ("scary", "creepy") rather than precise or exploratory.',
      },
    ],
    whatMakesThisGrade: [
      'Clear identification of language features with quotations',
      'Some explanation of effects on the reader',
      'Largely descriptive rather than analytical -- the "what" is there, the "how" and "why" are surface-level',
      'Limited range of terminology (adjective, verb) but no engagement with imagery, connotations, or patterns',
    ],
  },
  {
    id: 2,
    paper: 'Paper 1',
    question:
      'How does the writer use language to describe the setting? Refer to the extract to support your answer.',
    questionType: 'Language analysis (Q2 style)',
    grade: 7,
    extract:
      'The street was dark and the rain fell heavily on the cracked pavement. A single lamp flickered at the corner, casting long shadows across the empty road.',
    response:
      'The writer constructs an unsettling urban landscape through carefully chosen language. The verb "flickered" suggests fragility and impermanence -- the single lamp is the only source of light, yet even this is unreliable, creating a tension between visibility and concealment. The personification implied by "casting long shadows" is significant: shadows are presented as active, almost predatory presences that dominate the "empty road", displacing the human life one would expect to find on a street. The adjective "cracked" carries connotations of decay and neglect, implying that this place has been abandoned not suddenly but gradually, through sustained disregard. When combined with the pathetic fallacy of rain falling "heavily", the cumulative effect is one of oppressive desolation -- the natural world seems to mirror and intensify the emotional bleakness of the setting. The writer does not merely describe a dark street; they create a location that feels psychologically threatening.',
    annotations: [
      {
        type: 'strength',
        text: 'Explores connotations and implications rather than simply stating effects. The analysis of "cracked" moves beyond "damaged" to "sustained disregard".',
      },
      {
        type: 'strength',
        text: 'Identifies the cumulative effect of techniques working together, not just in isolation.',
      },
      {
        type: 'strength',
        text: 'Uses subject-specific terminology precisely: pathetic fallacy, personification, connotations.',
      },
      {
        type: 'improvement',
        text: 'Could explore alternative interpretations (e.g. the lamp as hope vs. fragility) to push towards the top band.',
      },
    ],
    whatMakesThisGrade: [
      'Thoughtful, detailed analysis that explores connotations and deeper meanings',
      'Comments on how techniques interact to create cumulative effects',
      'Precise use of subject terminology, deployed functionally not decoratively',
      'Developing a personal interpretation ("psychologically threatening") rather than generic effects',
    ],
  },
  {
    id: 3,
    paper: 'Paper 1',
    question:
      'How does the writer use language to describe the setting? Refer to the extract to support your answer.',
    questionType: 'Language analysis (Q2 style)',
    grade: 9,
    extract:
      'The street was dark and the rain fell heavily on the cracked pavement. A single lamp flickered at the corner, casting long shadows across the empty road.',
    response:
      'What is most striking about this extract is its economy -- the writer achieves a profound sense of threat through remarkably restrained prose. The declarative opening, "The street was dark", is deceptively simple; its plainness mirrors the blankness of the scene itself, and the copular verb "was" presents darkness not as something that has fallen or been imposed, but as an inherent, almost essential quality of this place. Darkness is not an event here; it is a state of being.\n\nThe semantic field of fragmentation and failure -- "cracked", "flickered", "single" -- creates a world where nothing is whole or reliable. The lamp does not illuminate; it "flickered", a verb that connotes both struggle and mortality, as though the light itself is dying. The syntactic choice to modify "lamp" with "single" isolates it: one failing source of light against a scene defined by its absences. And when this fragile light does reach outward, it does not reveal -- it "cast[s] long shadows", producing more darkness than clarity. The paradox is precise and deeply unsettling: the only light source in the extract functions primarily as a generator of shadows.\n\nThe rain falling "heavily" operates as pathetic fallacy, but the writer avoids the melodrama of storms or thunder. Instead, the weight of the rain -- its heaviness -- becomes an almost physical presence, pressing down on a pavement that is already "cracked" under the strain. The emptiness of the road is the final, devastating detail: the writer has constructed an entire landscape from which human presence has been erased, leaving the reader as the sole, unwilling witness.',
    annotations: [
      {
        type: 'strength',
        text: 'Perceptive, original analysis: identifying that the light source generates shadows (a paradox) shows genuine critical thinking.',
      },
      {
        type: 'strength',
        text: 'Analyses at word, sentence, and whole-extract level, moving fluidly between micro and macro.',
      },
      {
        type: 'strength',
        text: 'Exploratory, essay-quality voice -- the analysis reads as a sustained argument, not a list of disconnected points.',
      },
      {
        type: 'strength',
        text: 'Comments on what the writer avoids (melodrama, storms) as well as what they do -- this is a hallmark of the highest-level responses.',
      },
    ],
    whatMakesThisGrade: [
      'Genuinely perceptive and original interpretations that go beyond the expected',
      'Analysis operates at word, sentence, and whole-text level simultaneously',
      'Sustained critical voice -- reads as a coherent argument, not point-by-point',
      'Comments on writer choices (what is included AND what is deliberately absent)',
      'Precise, sophisticated vocabulary deployed naturally',
    ],
  },
  {
    id: 4,
    paper: 'Paper 1',
    question: 'How has the writer structured the text to interest you as a reader?',
    questionType: 'Structural analysis (Q3 style)',
    grade: 5,
    extract:
      'The story begins with a wide description of the town before focusing on one particular house. Inside, a child is sitting alone. The narrative then shifts to a memory of a happier time before returning to the present.',
    response:
      'The writer starts with a wide shot of the town which gives the reader context and helps them understand the setting. Then they zoom in on one house which narrows the focus and makes the reader curious about who lives there. The shift to the child sitting alone creates sympathy because the reader wonders why they are by themselves. The flashback to a happier time contrasts with the present, which makes the current situation feel sadder. At the end, the writer returns to the present which creates a circular structure. This is effective because it shows nothing has changed and the child is still alone.',
    annotations: [
      {
        type: 'strength',
        text: 'Identifies the zoom-in structural pattern (wide to narrow) and the flashback/return.',
      },
      {
        type: 'strength',
        text: 'Attempts to explain the effect on the reader for each structural choice.',
      },
      {
        type: 'improvement',
        text: 'Uses the terms "wide shot" and "zoom in" without fully exploring why the writer makes these choices at this point.',
      },
      {
        type: 'improvement',
        text: 'Could connect structure to tone, theme, or narrative perspective more explicitly.',
      },
    ],
    whatMakesThisGrade: [
      'Identifies structural features (focus shift, flashback, circular structure)',
      'Comments on reader response but keeps effects general',
      'Follows the text chronologically -- a Grade 7+ answer would analyse the choices behind the structure',
      'Limited engagement with why the writer chose this particular sequence',
    ],
  },
  {
    id: 5,
    paper: 'Paper 1',
    question:
      'A student said: "The writer makes the reader feel sympathy for the main character throughout the extract." To what extent do you agree?',
    questionType: 'Evaluation (Q4 style)',
    grade: 7,
    extract:
      'The protagonist is described as quiet and overlooked. Other characters speak about them dismissively. A single moment of kindness from a stranger surprises both the character and the reader.',
    response:
      'I largely agree with this statement, though I would argue the writer\'s approach to sympathy is more complex than "throughout" suggests. In the opening, sympathy is generated primarily through exclusion: the protagonist is "quiet", a word whose connotations of modesty or timidity position them as a victim rather than an agent. When other characters speak "dismissively", the reader\'s sympathy intensifies because the protagonist is denied a voice in a conversation about them -- the writer uses dialogue to marginalise the character within their own narrative.\n\nHowever, the moment of kindness from the stranger complicates the emotional register. The writer notes it "surprises" both the character and the reader, which is structurally significant: by aligning our response with the protagonist\'s, the writer forces us to confront the fact that we, like the character, had accepted the world\'s dismissiveness as the norm. Sympathy here becomes uncomfortable -- it is tinged with guilt. So while I agree that sympathy is present throughout, I would argue it evolves from simple pity to something more challenging and self-aware.',
    annotations: [
      {
        type: 'strength',
        text: 'Engages critically with the statement rather than simply agreeing -- the "to what extent" is genuinely explored.',
      },
      {
        type: 'strength',
        text: "Tracks how the reader's emotional response shifts across the extract, showing understanding of structure.",
      },
      {
        type: 'strength',
        text: 'Makes a perceptive point about the alignment between reader and character.',
      },
      {
        type: 'improvement',
        text: 'Could embed more specific quotations from the extract to anchor the evaluative claims.',
      },
    ],
    whatMakesThisGrade: [
      'Engages critically with the proposition rather than just listing evidence for/against',
      'Tracks the evolution of a reader response across the text',
      'Offers a nuanced personal position ("more complex than throughout suggests")',
      'Uses analytical vocabulary precisely (marginalise, emotional register, structurally significant)',
    ],
  },
  /* ── Paper 2 answers ──────────────────────────────────────────── */
  {
    id: 6,
    paper: 'Paper 2',
    question:
      'How does the writer use language to influence the reader? Refer to Source A to support your answer.',
    questionType: 'Language analysis (non-fiction)',
    grade: 5,
    extract:
      'A newspaper article about single-use plastics. The writer calls plastic "the silent poison of our age" and includes statistics about ocean pollution.',
    response:
      'The writer uses the metaphor "the silent poison of our age" to make plastic sound dangerous and harmful. The word "poison" has negative connotations because it suggests something that kills, and "silent" means people do not realise the damage. The writer also uses statistics which make the argument more convincing because they provide factual evidence. This helps to influence the reader by making them feel guilty about using plastic. The phrase "our age" includes the reader by using the pronoun "our", which makes it seem like everyone is responsible.',
    annotations: [
      {
        type: 'strength',
        text: 'Identifies metaphor and explains the effect of individual word choices ("poison", "silent").',
      },
      { type: 'strength', text: 'Recognises the inclusive pronoun "our" and its function.' },
      {
        type: 'improvement',
        text: 'Effects remain general ("makes them feel guilty") -- a stronger answer would explore how guilt functions as a persuasive strategy.',
      },
      {
        type: 'improvement',
        text: 'Could engage with the combination of emotive language and statistics as a deliberate rhetorical pattern.',
      },
    ],
    whatMakesThisGrade: [
      'Identifies relevant techniques and attempts to explain effects',
      'Some awareness of how writers position readers',
      'Explanations are valid but lack depth or exploration',
      'Treats techniques individually rather than as part of a persuasive strategy',
    ],
  },
  {
    id: 7,
    paper: 'Paper 2',
    question:
      'Compare how the two writers convey their different perspectives on city life. In your answer you should compare the methods used, referring to both sources.',
    questionType: 'Comparison (Q4 style)',
    grade: 9,
    extract:
      'Source A is a 19th century letter praising London\'s energy and innovation. Source B is a 21st century article criticising urban isolation and the "myth of connection" in modern cities.',
    response:
      'Both writers engage with the paradox of the city -- a space defined simultaneously by proximity and distance -- yet they arrive at diametrically opposed conclusions, which are as much products of their historical moments as of their personal convictions.\n\nThe 19th century writer approaches London with the breathless enthusiasm of an age that equated urbanisation with progress. The lexical field of dynamism -- "energy", "innovation", "enterprise" -- constructs the city as a site of forward motion, and the cumulative listing of these abstractions creates a sense of inexhaustible possibility. Crucially, this writer never mentions individual people; the city itself is the protagonist, animated through personification into a living, breathing engine of civilisation. The rhetorical strategy is one of elevation: London is presented not as it is experienced but as it is imagined.\n\nThe 21st century writer inverts this precisely. Where Source A celebrates collective energy, Source B dissects what the writer calls "the myth of connection" -- a phrase that, through the noun "myth", reframes the very idea of urban community as a fiction. The deliberate use of second person ("you walk past a thousand people and know none of them") implicates the reader directly, denying us the comfortable distance that Source A\'s third-person panorama permits. The contrast in address is structurally telling: Source A speaks about the city; Source B speaks to the city-dweller.\n\nPerhaps most revealing is what each writer omits. Source A\'s silence about individual experience allows the city to remain an ideal; Source B\'s silence about the genuine pleasures of urban life allows it to remain a critique. Both writers, in their selectivity, reveal as much about the conventions and anxieties of their respective eras as they do about cities themselves.',
    annotations: [
      {
        type: 'strength',
        text: 'Sustained, integrated comparison throughout -- never treats the sources in isolation but constantly measures one against the other.',
      },
      {
        type: 'strength',
        text: 'Analyses what is absent ("what each writer omits") as well as what is present -- this is a hallmark of the highest-level critical thinking.',
      },
      {
        type: 'strength',
        text: 'Places both texts in their historical contexts without reducing the analysis to context alone.',
      },
      {
        type: 'strength',
        text: 'The argument builds across paragraphs -- each point develops the previous one rather than standing alone.',
      },
    ],
    whatMakesThisGrade: [
      'Fully integrated comparison -- sources are analysed in dialogue with each other, not sequentially',
      'Perceptive analysis of rhetorical strategies (elevation, implication, selectivity)',
      'Engages with historical context as a lens for understanding method, not as background information',
      'Comments on writer omissions and the significance of what is left unsaid',
      'Sophisticated, sustained argument that builds to a concluding insight',
    ],
  },
  {
    id: 8,
    paper: 'Paper 2',
    question:
      '"Social media has done more harm than good to young people." Write an article for a broadsheet newspaper in which you argue your point of view on this statement.',
    questionType: 'Transactional writing (article)',
    grade: 7,
    extract: 'N/A -- writing task',
    response:
      'Has Social Media Failed a Generation?\n\nIt is a truth universally acknowledged that a teenager in possession of a smartphone must be in want of a social media account. But behind the carefully curated profiles and the endless scroll lies an uncomfortable question: at what cost?\n\nAdvocates of social media will point, rightly, to its democratising power. Platforms like Instagram and TikTok have given young people a voice that previous generations could only dream of. A sixteen-year-old in Barnsley can share their art with thousands; a student in Lagos can learn calculus from a teacher in Seoul. These are not trivial achievements. They represent a genuine expansion of possibility.\n\nYet the evidence for harm is mounting, and it is becoming increasingly difficult to dismiss. The Royal Society for Public Health found that Instagram was rated the worst social media platform for young people\'s mental health, with significant associations with anxiety, depression, and body image issues. When an app designed to share photographs becomes a vehicle for self-comparison and inadequacy, something has gone fundamentally wrong.\n\nThe counter-argument -- that young people should simply "log off" -- reveals a profound misunderstanding of how these platforms operate. Social media companies employ teams of behavioural psychologists whose sole purpose is to make their products addictive. Asking a fourteen-year-old to resist algorithms designed by the brightest minds in Silicon Valley is not a solution; it is an abdication of adult responsibility.\n\nSocial media is not inherently evil, but it is inherently unregulated. Until we treat it with the same seriousness we treat other products that affect children\'s health, we are complicit in a vast, uncontrolled experiment -- and our children are the subjects.',
    annotations: [
      {
        type: 'strength',
        text: 'Strong opening with an adapted literary allusion (Austen) that establishes a confident, intelligent register.',
      },
      {
        type: 'strength',
        text: 'Balanced argument that acknowledges counter-arguments before rebutting them -- this shows sophistication.',
      },
      {
        type: 'strength',
        text: 'Uses specific evidence (Royal Society for Public Health) to support claims.',
      },
      {
        type: 'improvement',
        text: 'The final paragraph could be more powerful with a direct call to action or a return to the opening allusion for circularity.',
      },
      {
        type: 'improvement',
        text: 'Vocabulary is strong but could incorporate a wider range of rhetorical devices (e.g. tricolon, anaphora) for the top band.',
      },
    ],
    whatMakesThisGrade: [
      'Confident, distinctive voice appropriate to the form (broadsheet article)',
      'Balanced argument with counter-arguments genuinely engaged with, not straw-manned',
      'Specific evidence used to support claims, not just generalisation',
      'Varied sentence structures and mostly precise vocabulary',
      'Clear paragraphing with logical progression of ideas',
    ],
  },
  {
    id: 9,
    paper: 'Paper 2',
    question:
      '"Schools should ban mobile phones entirely." Write a speech to your headteacher arguing for or against this statement.',
    questionType: 'Transactional writing (speech)',
    grade: 9,
    extract: 'N/A -- writing task',
    response:
      'Good morning. I want to start by asking you a question -- and I would like you to answer it honestly, if only to yourselves. When was the last time you checked your phone? Not because it rang, not because you needed to, but simply because it was there?\n\nIf we are honest -- and this morning I am asking for nothing more than honesty -- most of us checked within the last hour. Some of you are fighting the urge to check right now. And that, I would suggest, is precisely the problem.\n\nI stand before you not as someone who hates technology. I am, like most of my generation, a digital native. I have never known a world without the internet, and I have no desire to return to one. But there is a difference between using technology and being used by it, and it is a distinction that matters profoundly within these walls.\n\nA classroom is, or should be, a space of sustained attention. It is a place where we learn not only facts but focus -- the ability to hold a single idea in our minds long enough to interrogate it, challenge it, understand it. The phone in your pocket is an engine of distraction. It does not want you to focus. It wants you to fragment. Every notification, every vibration, every silent, glowing screen is an invitation to be somewhere else, to be someone else, to abandon the difficult, unglamorous work of thinking.\n\nI can hear the objections already. "What about emergencies?" Yes -- what about them. A school office has a telephone. Your parents know the number. For the approximately seventeen years before the invention of the smartphone, children somehow survived the school day without instant parental access. "But we use them for research." Laptops exist. Libraries exist. The argument that we need phones for learning is, with respect, a post-hoc justification for a habit we are unwilling to break.\n\nI am not asking you to ban technology. I am asking you to protect attention. Because attention is the most valuable thing we have in this building, and every day it is being stolen from us -- not by villains, but by algorithms. And if we cannot defend it here, in a school, then where?\n\nThank you.',
    annotations: [
      {
        type: 'strength',
        text: 'Masterful use of rhetorical devices: direct address, rhetorical questions, pre-emption of counter-arguments, tricolon, and anaphora -- all deployed naturally, not mechanically.',
      },
      {
        type: 'strength',
        text: 'The voice is entirely appropriate to the form -- this reads as a speech that would command a room.',
      },
      {
        type: 'strength',
        text: 'The argument builds with precision: establishes common ground, defines the problem, anticipates and dismantles objections, then pivots to a powerful conclusion.',
      },
      {
        type: 'strength',
        text: 'Sentence variety is exceptional -- short declaratives ("Laptops exist. Libraries exist.") sit alongside complex, subordinated sentences.',
      },
    ],
    whatMakesThisGrade: [
      'Compelling, distinctive voice sustained throughout -- the register never wavers',
      'Rhetorical devices are woven into the argument, not bolted on',
      'Counter-arguments are anticipated and dismantled with wit and precision',
      'Structural mastery: the opening question and the closing appeal create a powerful arc',
      'Vocabulary is precise, varied, and deployed with flair ("engine of distraction", "unglamorous work of thinking")',
      'Technical accuracy is flawless across the piece',
    ],
  },
  {
    id: 10,
    paper: 'Paper 1',
    question:
      'Write a description suggested by this picture. [An image of an abandoned fairground at dusk.]',
    questionType: 'Creative writing (descriptive)',
    grade: 9,
    extract: 'N/A -- writing task',
    response:
      'The carousel horses have forgotten how to move.\n\nThey stand in their perpetual circle, mouths open in painted screams that nobody comes to hear, their glass eyes fixed on a horizon that no longer exists. Once, children fought to ride the white one -- the one with the golden mane and the chipped nostril -- and their laughter rose above the calliope music like birds startled from a tree. Now the white horse leans slightly to the left, as though exhausted by memory, and the only sound is the wind finding its way through the gaps in the canopy.\n\nDusk arrives without ceremony. The sky does not blaze or burn; it simply dims, the way a television screen fades when someone leaves the room. The colours of the fairground -- once violent, joyous, deliberately too much -- have been reduced by weather and neglect to the palette of a watercolour left in the rain. The reds have become rust. The blues have become distance.\n\nThere is a ticket booth near the entrance, its window still open, as though someone stepped away for a moment and never came back. A strip of tickets curls on the counter, each one stamped ADMIT ONE, each one an unanswered invitation. The price is listed in old money. I calculate the conversion and the answer feels like a sum that measures something other than currency.\n\nBeyond the carousel, the Ferris wheel stands against the sky like a question the town stopped asking. Its gondolas sway in the breeze with a patience that borders on devotion -- they are still waiting for passengers, still believing in a purpose that has long since moved on. There is something unbearable about faith in an empty fairground.\n\nI do not stay long. There is nothing here that wants company. But as I walk back towards the road, I hear it -- faint, uncertain, possibly imagined -- the first few notes of the calliope, playing to no one, playing to everyone who ever left.',
    annotations: [
      {
        type: 'strength',
        text: 'The opening is arrestingly original: "The carousel horses have forgotten how to move" personifies the inanimate and immediately establishes the theme of abandonment.',
      },
      {
        type: 'strength',
        text: 'Imagery is layered and precise: "the palette of a watercolour left in the rain" is a metaphor about colour that is itself colourful.',
      },
      {
        type: 'strength',
        text: 'Sentence variety is masterful -- the two-word sentences ("The reds have become rust. The blues have become distance.") are devastating in their simplicity.',
      },
      {
        type: 'strength',
        text: 'The piece has a clear narrative arc despite being a description: arrival, exploration, departure, with the calliope as a haunting coda.',
      },
      {
        type: 'strength',
        text: 'Abstract reflection ("There is something unbearable about faith in an empty fairground") elevates this beyond description into meaning-making.',
      },
    ],
    whatMakesThisGrade: [
      'Compelling, original imagery that goes beyond surface description to create meaning',
      'A distinctive, confident authorial voice sustained throughout',
      'Exceptional sentence control: variety of length and structure used for deliberate effect',
      'Structural choices (opening image, circular ending with the calliope) show sophisticated planning',
      'Abstract and philosophical reflection woven into concrete description',
      'Flawless technical accuracy across the entire piece',
    ],
  },
]

/* ── Main page component ────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'GCSE English Language Model Answers',
  description:
    'Read annotated model answers for GCSE English Language questions and see how top-band responses are built, paragraph by paragraph, for your exam board.',
  alternates: { canonical: 'https://theenglishhub.app/revision/language/model-answers' },
}

export default async function ModelAnswersPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  // Board guard: GCSE only
  if (board && !isGcseBoard(board)) {
    redirect('/revision/language')
  }

  const paper1Answers = MODEL_ANSWERS.filter((a) => a.paper === 'Paper 1')
  const paper2Answers = MODEL_ANSWERS.filter((a) => a.paper === 'Paper 2')

  // Card-level chrome labels resolved once and threaded into the sync cards.
  const cardLabels: CardLabels = {
    extract: await t('rev.lang.model.extract'),
    studentResponse: await t('rev.lang.model.student_response'),
    examinerAnnotations: await t('rev.lang.model.examiner_annotations'),
    whatMakesPrefix: await t('rev.lang.model.what_makes_prefix'),
    whatMakesSuffix: await t('rev.lang.model.what_makes_suffix'),
    annStrength: await t('rev.lang.model.ann_strength'),
    annImprovement: await t('rev.lang.model.ann_improvement'),
    annUpgrade: await t('rev.lang.model.ann_upgrade'),
  }

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumb
        items={[
          { label: await t('rev.lang.hub.breadcrumb_revision'), href: '/revision' },
          { label: await t('rev.lang.hub.breadcrumb_language'), href: '/revision/language' },
          { label: await t('rev.lang.model.breadcrumb') },
        ]}
      />

      {/* Header */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/language" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('rev.lang.model.back')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/10">
            <FileText className="size-5 text-purple-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                {await t('rev.lang.model.title')}
              </h1>
              {board && (
                <Badge variant="secondary" className="text-xs">
                  {boardName}
                </Badge>
              )}
            </div>
            <p className="text-body-sm text-muted-foreground">
              {await t('rev.lang.model.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Grade key */}
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <Star className="size-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">
            {await t('rev.lang.model.boundaries_title')}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-3">
            <GradeBadge grade={5} />
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{await t('rev.lang.model.grade5_label')}</strong>{' '}
              {await t('rev.lang.model.grade5_body')}
            </p>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-3">
            <GradeBadge grade={7} />
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{await t('rev.lang.model.grade7_label')}</strong>{' '}
              {await t('rev.lang.model.grade7_body')}
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-3">
            <GradeBadge grade={9} />
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{await t('rev.lang.model.grade9_label')}</strong>{' '}
              {await t('rev.lang.model.grade9_body')}
            </p>
          </div>
        </div>
      </div>

      {/* How to use this page */}
      <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
        <div className="text-body-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">{await t('rev.lang.model.how_label')}</strong>{' '}
          {await t('rev.lang.model.how_body')}
        </div>
      </div>

      {/* Paper 1 answers */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            {await t('rev.lang.model.paper1')}
          </Badge>
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.lang.model.paper1_heading')}
          </h2>
        </div>
        <div className="space-y-6">
          {paper1Answers.map((answer) => (
            <ModelAnswerCard key={answer.id} answer={answer} labels={cardLabels} />
          ))}
        </div>
      </div>

      {/* Paper 2 answers */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            {await t('rev.lang.model.paper2')}
          </Badge>
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.lang.model.paper2_heading')}
          </h2>
        </div>
        <div className="space-y-6">
          {paper2Answers.map((answer) => (
            <ModelAnswerCard key={answer.id} answer={answer} labels={cardLabels} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Model answer card ──────────────────────────────────────────── */

function ModelAnswerCard({ answer, labels }: { answer: ModelAnswer; labels: CardLabels }) {
  const annLabel: Record<ModelAnswer['annotations'][number]['type'], string> = {
    strength: labels.annStrength,
    improvement: labels.annImprovement,
    upgrade: labels.annUpgrade,
  }
  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/40 bg-accent/20 p-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <GradeBadge grade={answer.grade} />
          <Badge variant="outline" className="text-xs">
            {answer.questionType}
          </Badge>
        </div>
        <p className="text-sm font-semibold text-foreground leading-snug">{answer.question}</p>
        {answer.extract !== 'N/A -- writing task' && (
          <div className="mt-3 rounded-lg border border-border/40 bg-background/50 p-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              {labels.extract}
            </p>
            <p className="text-body-sm text-muted-foreground italic leading-relaxed">
              {answer.extract}
            </p>
          </div>
        )}
      </div>

      {/* Response */}
      <div className="p-5">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          {labels.studentResponse}
        </p>
        <div className="rounded-xl border border-border/40 bg-background/50 p-4">
          {answer.response.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className="text-body-sm text-foreground/90 leading-relaxed [&:not(:first-child)]:mt-3"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Annotations */}
        <div className="mt-4 space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {labels.examinerAnnotations}
          </p>
          {answer.annotations.map((ann, i) => (
            <Annotation key={i} type={ann.type} label={annLabel[ann.type]}>
              {ann.text}
            </Annotation>
          ))}
        </div>

        {/* What makes this grade */}
        <div className="mt-4 rounded-xl border border-border/40 bg-accent/10 p-4">
          <p className="text-xs font-semibold text-foreground mb-2">
            {labels.whatMakesPrefix} {answer.grade} {labels.whatMakesSuffix}
          </p>
          <ul className="space-y-1.5">
            {answer.whatMakesThisGrade.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
              >
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary/60" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
