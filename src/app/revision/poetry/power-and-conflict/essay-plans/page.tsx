import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  FileText,
  Sparkles,
  Target,
  Star,
  ChevronDown,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  openGraph: {
    title: 'Essay Plans – Power & Conflict Poetry | The English Hub',
    description:
      'Ten ready-made essay plans for AQA Power & Conflict poetry comparison questions. Grade 5 and Grade 9 approaches with full PEEL paragraphs.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/essay-plans',
  },
  title: 'Essay Plans – Power & Conflict Poetry | The English Hub',
  description:
    'Ten ready-made essay plans for AQA Power & Conflict poetry comparison questions. Grade 5 and Grade 9 approaches with full PEEL paragraphs.',
}

/* ── Types ────────────────────────────────────────────────────────── */

interface PeelParagraph {
  point: string
  evidence1: string
  evidence1poem: string
  analysis1: string
  evidence2: string
  evidence2poem: string
  analysis2: string
  link: string
}

interface EssayPlan {
  id: number
  question: string
  poemA: string
  poetA: string
  poemB: string
  poetB: string
  themeTag: string
  themeColour: string
  introduction: string
  paragraphs: [PeelParagraph, PeelParagraph, PeelParagraph]
  conclusion: string
  grade5approach: string
  grade9approach: string
}

/* ── Essay plan data ─────────────────────────────────────────────── */

const ESSAY_PLANS: EssayPlan[] = [
  // ────────────────────────────────────────── 1
  {
    id: 1,
    question: 'Compare how power is presented in Ozymandias and one other poem from the anthology.',
    poemA: 'Ozymandias',
    poetA: 'Shelley',
    poemB: 'My Last Duchess',
    poetB: 'Browning',
    themeTag: 'Power',
    themeColour: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    introduction:
      'Both Shelley and Browning present power as ultimately destructive and self-defeating. Ozymandias explores the transience of political power through a ruined statue, while My Last Duchess reveals the chilling, possessive power of a controlling husband. Both poets critique arrogance, but while Shelley shows power destroyed by time, Browning shows power that is still dangerously active.',
    paragraphs: [
      {
        point:
          'Both poets present powerful figures who believe they have absolute authority over others.',
        evidence1: '"My name is Ozymandias, King of Kings"',
        evidence1poem: 'Ozymandias',
        analysis1:
          'The superlative title "King of Kings" (echoing biblical language used for God) reveals Ozymandias\'s blasphemous arrogance. He claims dominion over all other rulers, yet the irony is that his empire no longer exists. Shelley uses the inscription to let the tyrant condemn himself with his own words.',
        evidence2: '"That\'s my last Duchess painted on the wall"',
        evidence2poem: 'My Last Duchess',
        analysis2:
          'The possessive pronoun "my" and the casual "that\'s" reveal the Duke\'s assumption of total ownership. The Duchess is reduced to a painting he controls -- he can draw the curtain to show or hide her at will. Unlike Ozymandias, the Duke\'s power is still intact, making him arguably more disturbing.',
        link: "Both figures use possessive language to assert dominance, but Shelley undercuts this through irony while Browning lets the Duke's chilling control speak for itself.",
      },
      {
        point: 'Both poets use form and structure to reflect the nature of power they describe.',
        evidence1: '"Nothing beside remains. Round the decay"',
        evidence1poem: 'Ozymandias',
        analysis1:
          'Shelley\'s irregular sonnet form -- breaking from both Petrarchan and Shakespearean conventions -- mirrors the theme of power structures collapsing. The devastating caesura after "Nothing beside remains" creates a structural break that enacts the destruction it describes. The iambic pentameter is frequently disrupted, reflecting instability.',
        evidence2: "The Duke's uninterrupted dramatic monologue in rhyming couplets",
        evidence2poem: 'My Last Duchess',
        analysis2:
          "Browning's strict rhyming couplets and continuous dramatic monologue reflect the Duke's rigid control. He dominates the conversation entirely -- we never hear the envoy respond. The enjambment within the couplets creates a conversational surface that hides the menace beneath, mirroring how the Duke disguises his cruelty with civility.",
        link: 'Where Shelley deliberately fractures poetic form to show power crumbling, Browning uses controlled, unbroken form to show power that is absolute and unchallenged.',
      },
      {
        point:
          'Both poets use their poems to critique the abuse of power, but from different historical perspectives.',
        evidence1: '"The lone and level sands stretch far away"',
        evidence1poem: 'Ozymandias',
        analysis1:
          'The final image of empty desert -- with the sibilant "s" sounds evoking wind erasing all traces -- delivers Shelley\'s Romantic message: nature and time triumph over tyranny. Written during political upheaval (post-French Revolution), the poem challenges contemporary monarchies by showing that all empires fall.',
        evidence2: '"I gave commands; / Then all smiles stopped together"',
        evidence2poem: 'My Last Duchess',
        analysis2:
          'This euphemism -- implying the Duke had his wife killed -- is delivered with terrifying calmness. Browning, writing in the Victorian era, critiques the aristocratic power that allows such violence to go unchallenged. The Duke feels no need to justify himself; his rank places him above accountability.',
        link: 'Shelley critiques power retrospectively, showing its inevitable failure, while Browning critiques power in the present tense, showing it still operating with lethal impunity. Together they demonstrate that power corrupts whether ancient or contemporary.',
      },
    ],
    conclusion:
      'Both poets present power as dangerous and self-serving. Shelley ultimately offers a reassuring message -- even the mightiest tyrant is forgotten -- while Browning is more unsettling because his tyrant is still in control. The reader is left to judge the Duke, just as history has judged Ozymandias.',
    grade5approach:
      'Identify that both poems are about powerful men. Quote "King of Kings" and "my last Duchess" and explain what each shows about power. Comment on the irony in Ozymandias. Make a basic comparison: "Similarly, the Duke also shows power."',
    grade9approach:
      "Analyse how each poet uses form to embody their ideas about power (irregular sonnet vs. controlled couplets). Explore the effect of specific techniques (caesura, enjambment, dramatic irony). Compare the poets' contexts and purposes: Shelley's Romantic radicalism vs. Browning's Victorian social critique. Evaluate which presentation is more effective and why.",
  },

  // ────────────────────────────────────────── 2
  {
    id: 2,
    question:
      'Compare how the reality of conflict is shown in Remains and one other poem from the anthology.',
    poemA: 'Remains',
    poetA: 'Armitage',
    poemB: 'Exposure',
    poetB: 'Owen',
    themeTag: 'Conflict',
    themeColour: 'bg-red-500/15 text-red-300 border-red-500/20',
    introduction:
      'Both Armitage and Owen present conflict as psychologically devastating, stripping soldiers of their humanity. Remains focuses on the lasting guilt of a single killing in modern warfare, while Exposure depicts the slow, numbing suffering of WWI soldiers exposed to extreme cold. Both challenge glorified notions of war.',
    paragraphs: [
      {
        point:
          'Both poets present conflict as an experience that haunts soldiers long after the immediate danger has passed.',
        evidence1: '"his bloody life in my bloody hands"',
        evidence1poem: 'Remains',
        analysis1:
          'The dual meaning of "bloody" -- both literal (covered in blood) and colloquial (an expletive) -- captures the soldier\'s raw guilt and anger. The repetition and the intimate "my...hands" make the killing inescapably personal. Armitage uses this ambiguity to show how the soldier oscillates between clinical detachment and overwhelming guilt.',
        evidence2: '"Slowly our ghosts drag home"',
        evidence2poem: 'Exposure',
        analysis2:
          'Owen presents the soldiers as already dead -- "ghosts" -- suggesting that even if they physically survive, they are spiritually destroyed. The verb "drag" conveys exhaustion and reluctance, implying the soldiers no longer belong in the living world. This spectral imagery suggests the psychological damage of conflict extends beyond the battlefield.',
        link: 'Both poets use powerful imagery to show that conflict creates wounds that are invisible but permanent. The soldiers in both poems are trapped between the battlefield and home, unable to fully inhabit either.',
      },
      {
        point:
          'Both poets use structure and rhythm to reflect the disorienting experience of conflict.',
        evidence1: '"I see broad daylight on the other side"',
        evidence1poem: 'Remains',
        analysis1:
          "The poem's shift from past tense narration to present tense in the final stanzas mirrors how the memory of killing has become an inescapable, ever-present reality. The colloquial, unstructured free verse reflects the rawness of a real soldier's testimony -- this is not polished literary language but an authentic, traumatic account.",
        evidence2: '"But nothing happens"',
        evidence2poem: 'Exposure',
        analysis2:
          "Owen's devastating refrain -- repeated at the end of multiple stanzas -- uses anti-climax to capture the agonising boredom and futility of trench warfare. The regular stanza structure and consistent half-rhyme create a monotonous rhythm that mimics the endless, repetitive suffering. The contrast between the structured form and the formless waiting is itself a kind of torment.",
        link: 'Where Armitage uses irregular, conversational form to show the chaos of modern warfare, Owen uses rigid, repetitive structure to convey the grinding tedium that is equally destructive. Both demonstrate that conflict damages through what it forces soldiers to endure repeatedly.',
      },
      {
        point: 'Both poets challenge romanticised views of war by foregrounding its human cost.',
        evidence1: '"his blood-shadow stays on the street"',
        evidence1poem: 'Remains',
        analysis1:
          "Armitage presents the looter's death as a stain the soldier can never wash away. The poem is based on a real testimony from a soldier suffering PTSD, grounding the poem in documented reality. By using a conversational register, Armitage makes the suffering feel immediate and contemporary -- this is not historical war poetry but a living wound.",
        evidence2: '"For love of God seems dying"',
        evidence2poem: 'Exposure',
        analysis2:
          'Owen suggests that even faith cannot survive the reality of conflict. The soldiers feel abandoned by God, country, and meaning itself. As a soldier-poet who experienced the trenches, Owen writes with authority that makes his critique devastating -- this is not abstract pacifism but lived testimony.',
        link: 'Both poets use authentic voices -- Armitage drawing on real testimony, Owen drawing on personal experience -- to dismantle the myth that conflict is heroic. Both insist that war is fundamentally a story of psychological destruction.',
      },
    ],
    conclusion:
      'Armitage and Owen, separated by nearly a century, reach the same conclusion: conflict destroys those who survive it. Remains shows the private, individual guilt of a modern soldier; Exposure shows the collective, numbing suffering of a generation. Together they demonstrate that the psychological reality of war has remained unchanged.',
    grade5approach:
      'Identify that both poems are about the suffering caused by war. Quote key lines and explain what they mean. Comment that Armitage uses informal language while Owen uses formal poetry. State: "Both poets show that war is horrible."',
    grade9approach:
      "Analyse how each poet uses tense shifts and structural devices to replicate psychological trauma. Compare the poets' relationships to conflict (Armitage as documentarian vs. Owen as participant). Explore how form embodies meaning: free verse reflecting chaos vs. structured stanzas reflecting entrapment. Evaluate how each poem challenges the reader's assumptions about soldiers.",
  },

  // ────────────────────────────────────────── 3
  {
    id: 3,
    question:
      "Compare how nature's power is presented in Storm on the Island and one other poem from the anthology.",
    poemA: 'Storm on the Island',
    poetA: 'Heaney',
    poemB: 'The Prelude (extract)',
    poetB: 'Wordsworth',
    themeTag: 'Nature',
    themeColour: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    introduction:
      "Both Heaney and Wordsworth present nature as an overwhelming force that exposes human vulnerability. Storm on the Island depicts a community bracing against a violent storm, while The Prelude recounts a young man's terrifying encounter with a mountain. Both poets use the sublime power of nature to undermine human confidence.",
    paragraphs: [
      {
        point:
          'Both poets establish initial human confidence that nature then systematically destroys.',
        evidence1: '"We are prepared: we build our houses squat"',
        evidence1poem: 'Storm on the Island',
        analysis1:
          'The opening declarative sentence conveys collective confidence. The practical, monosyllabic language ("squat", "rock", "slate") suggests solid pragmatism. However, this preparation proves inadequate against the storm -- the colon after "prepared" introduces a list of defences that will ultimately fail, making the confidence ironic.',
        evidence2: '"lustily I dipped my oars into the silent lake"',
        evidence2poem: 'The Prelude',
        analysis2:
          'Wordsworth\'s speaker is youthfully confident, rowing out with energy and pleasure. The adverb "lustily" conveys vigour and enjoyment. The "silent lake" seems peaceful, controlled -- nature appears compliant. But this tranquillity is shattered when the mountain appears, revealing that nature was never under human control.',
        link: 'Both poets use a dramatic structure of confidence followed by fear. The initial assurance in each poem makes the subsequent power of nature more shocking and humbling.',
      },
      {
        point:
          'Both poets use sensory language and personification to present nature as a conscious, threatening force.',
        evidence1: '"We just sit tight while wind dives / And strafes invisibly"',
        evidence1poem: 'Storm on the Island',
        analysis1:
          'Heaney uses military language -- "dives" and "strafes" are terms for aerial bombardment -- to present the wind as an invisible attacker. This transforms a natural event into warfare, connecting to Northern Ireland\'s political context (the first eight letters spell "Stormont"). The invisibility of the threat makes it more terrifying: the community cannot fight what they cannot see.',
        evidence2: '"a huge peak, black and huge... / Strode after me"',
        evidence2poem: 'The Prelude',
        analysis2:
          'Wordsworth personifies the mountain as a living creature that pursues the speaker. The repetition of "huge" -- unusual for Wordsworth -- conveys overwhelming scale that defies elegant description. The verb "strode" gives the mountain deliberate, purposeful movement, transforming landscape into predator. The young Wordsworth is reduced from confident rower to terrified prey.',
        link: 'Both poets personify natural forces as aggressors -- Heaney through military metaphor, Wordsworth through physical pursuit. In both cases, nature is presented not as passive scenery but as an active, almost malevolent power.',
      },
      {
        point:
          "Both poems end with a fundamental shift in the speaker's understanding of humanity's place in the natural world.",
        evidence1: '"It is a huge nothing that we fear"',
        evidence1poem: 'Storm on the Island',
        analysis1:
          'Heaney\'s concluding paradox -- fearing "nothing" -- captures the existential terror of nature\'s power. The storm is invisible, intangible, yet devastating. The pronoun shift from confident "we" to fearful "we" marks a transformation: the community\'s collective strength has become collective vulnerability. "Huge nothing" is an oxymoron that encapsulates the sublime.',
        evidence2: '"and after I had seen / That spectacle... / huge and mighty forms"',
        evidence2poem: 'The Prelude',
        analysis2:
          'Wordsworth describes how the encounter permanently changed his relationship with nature. The "huge and mighty forms" haunted his imagination for days, representing the Romantic concept of the sublime -- an experience of awe and terror that reveals nature\'s superiority. This is a formative, transformative moment that shapes the poet\'s entire worldview.',
        link: "Both poets present nature's power as transformative: it changes how people understand themselves. Heaney's community is left in fear; Wordsworth's speaker is left in awe. Both endings suggest that the encounter with nature's power is permanent and life-altering.",
      },
    ],
    conclusion:
      "Heaney and Wordsworth both present nature's power as humbling and transformative, but their responses differ. Heaney is pragmatic and communal -- the islanders endure together but are left fearful. Wordsworth is personal and spiritual -- the individual is permanently changed by the sublime experience. Both poets argue that nature is ultimately beyond human control.",
    grade5approach:
      'Identify that both poems are about nature being powerful. Quote "strafes" and "strode after me" and explain how nature is described as threatening. Make a basic link: "Both poets show nature is more powerful than humans."',
    grade9approach:
      "Analyse how each poet uses personification differently (military vs. physical pursuit) and connect this to context (Northern Irish politics vs. Romantic sublime). Explore how form mirrors content: blank verse in both poems reflecting nature's uncontainable energy. Evaluate the significance of the endings -- communal fear vs. individual transformation -- and what each reveals about the poet's philosophy.",
  },

  // ────────────────────────────────────────── 4
  {
    id: 4,
    question:
      'Compare how poets present the effects of conflict on individuals in War Photographer and one other poem.',
    poemA: 'War Photographer',
    poetA: 'Duffy',
    poemB: 'Poppies',
    poetB: 'Weir',
    themeTag: 'Loss',
    themeColour: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
    introduction:
      "Both Duffy and Weir present the lasting emotional effects of conflict on individuals who are not soldiers themselves. War Photographer explores the moral burden of witnessing and documenting suffering, while Poppies conveys a mother's grief at her son leaving for war. Both poems focus on the private, hidden costs of conflict.",
    paragraphs: [
      {
        point:
          'Both poets present individuals who are trapped between the world of conflict and everyday life.',
        evidence1: '"a stranger\'s features / faintly start to twist before his eyes"',
        evidence1poem: 'War Photographer',
        analysis1:
          'The image developing in the darkroom forces the photographer to re-encounter suffering he witnessed. The verb "twist" suggests pain being replayed, as though the victim is dying again in front of him. Duffy conveys the photographer\'s inability to separate professional detachment from human empathy -- the images will not let him forget.',
        // VERIFY: previous quote "the world had tilted" is FABRICATED — does not appear in Duffy's War Photographer. Replaced with verified line from the same poem.
        evidence2:
          '"He has a job to do. Solutions slop in trays / beneath his hands, which did not tremble then / though seem to now"',
        evidence2poem: 'Poppies',
        analysis2:
          "Weir's metaphor captures how conflict destabilises a mother's entire reality. The world has literally shifted on its axis since her son left. This is not dramatic battlefield imagery but a quiet, domestic expression of how conflict reaches into homes and families, tilting the ordinary world into something unrecognisable.",
        link: 'Both poets show that conflict does not only affect those who fight. The photographer and the mother are both permanently altered by their proximity to war, trapped in a distorted version of normal life.',
      },
      {
        point:
          'Both poets use sensory, domestic imagery to make the effects of conflict feel intimate and real.',
        evidence1: '"a half-formed ghost"',
        evidence1poem: 'War Photographer',
        analysis1:
          'The photograph developing is described as a ghost materialising -- the dead are literally coming back. The adjective "half-formed" suggests the image, like memory, is incomplete and haunting. Duffy places this spectral encounter in the mundane setting of a darkroom, juxtaposing the horror of war with the routine of work.',
        evidence2: '"Sellotape bandaged around my hand"',
        evidence2poem: 'Poppies',
        analysis2:
          'Weir uses the domestic detail of Sellotape to evoke a childhood memory, connecting the mother\'s present grief to the innocence her son has lost. The word "bandaged" foreshadows potential injury, transforming an innocent childhood scene into a premonition of war. Every domestic object becomes charged with loss.',
        link: 'Both poets anchor the effects of conflict in small, tangible details -- a developing photograph, a strip of tape. This technique makes the emotional impact more powerful because it shows how conflict infiltrates ordinary, everyday moments.',
      },
      {
        point: 'Both poems end with a sense of helplessness and unresolved grief.',
        evidence1: '"they do not care"',
        evidence1poem: 'War Photographer',
        analysis1:
          "Duffy's blunt final assessment indicts the British public for their indifference. The photographer's suffering is compounded by the knowledge that his work -- intended to provoke empathy -- is consumed and forgotten. The final image of the plane taking him back to a warzone suggests an endless, futile cycle. His pain is private and unacknowledged.",
        evidence2: '"leaned against it like a bird"',
        evidence2poem: 'Poppies',
        analysis2:
          'The poem ends with the mother at a war memorial, pressing herself against cold stone, hoping to hear her son\'s voice. The simile "like a bird" suggests fragility and freedom simultaneously -- she is both vulnerable and yearning to fly to her son. The poem offers no resolution; the grief is ongoing, the loss permanent.',
        link: "Neither poem offers comfort or closure. Duffy's photographer and Weir's mother are both left carrying their private burdens alone, suggesting that the effects of conflict are permanent and largely invisible to others.",
      },
    ],
    conclusion:
      "Both poets present the effects of conflict as deeply personal and perpetually unresolved. Duffy critiques society's failure to engage with suffering, while Weir focuses on a single mother's quiet, devastating grief. Together, they remind us that conflict creates countless hidden victims beyond the battlefield.",
    grade5approach:
      'Identify that both poems show the emotional effects of war. Quote key lines about suffering and explain their meaning. Comment: "Both poems are about people who are affected by war even though they are not soldiers."',
    grade9approach:
      "Analyse how each poet uses imagery (ghostly photographs vs. domestic objects) to externalise internal grief. Compare Duffy's social critique with Weir's personal elegy. Explore how form supports meaning: Duffy's controlled stanzas vs. Weir's flowing, memory-like structure. Evaluate the significance of the public vs. private nature of each speaker's grief.",
  },

  // ────────────────────────────────────────── 5
  {
    id: 5,
    question:
      'Compare how poets present ideas about identity in Checking Out Me History and one other poem.',
    poemA: 'Checking Out Me History',
    poetA: 'Agard',
    poemB: 'The Émigrée',
    poetB: 'Rumens',
    themeTag: 'Identity',
    themeColour: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
    introduction:
      'Both Agard and Rumens explore how identity is shaped by history and belonging. Checking Out Me History is an angry challenge to a colonial education system that erased Black history, while The Émigrée presents a speaker who clings to memories of a homeland she can never return to. Both poets present identity as something worth fighting for.',
    paragraphs: [
      {
        point: 'Both poets present identity as being threatened by powerful external forces.',
        evidence1: '"Dem tell me / Dem tell me / Wha dem want to tell me"',
        evidence1poem: 'Checking Out Me History',
        analysis1:
          'The pronoun "Dem" creates a clear division between the powerful (the colonial curriculum) and the oppressed speaker. The repetition of "tell me" emphasises the one-directional imposition of a selective version of history. The use of Creole dialect is itself an act of resistance -- Agard refuses to write in Standard English, asserting his Caribbean identity through language.',
        // VERIFY: previous evidence quote "They blocked the sunlight in my city of words" is FABRICATED — does not appear in Rumens's The Émigrée. Replaced with verified line.
        evidence2:
          '"It may be at war, it may be sick with tyrants, / but I am branded by an impression of sunlight"',
        evidence2poem: 'The Émigrée',
        analysis2:
          'Rumens balances the speaker\'s acknowledgment of political darkness ("at war", "sick with tyrants") against the unshakeable refrain of "sunlight". The metaphor "branded" presents memory as something painful but indelible — like a cattle brand burnt into her. External force can destroy the city, but it cannot remove the impression of light from her.',
        link: 'Both poets use pronouns ("Dem"/"They") to identify oppressive forces that threaten individual identity. Both speakers resist these forces -- Agard through angry reclamation, Rumens\'s speaker through stubborn, luminous memory.',
      },
      {
        point: 'Both poets use contrasting imagery to highlight what has been lost or suppressed.',
        evidence1: '"Bandage up me eye with me own history / and blind me to me own identity"',
        evidence1poem: 'Checking Out Me History',
        analysis1:
          'The metaphor of blindfolding is violent and visceral. The education system does not simply fail to teach -- it actively "bandages" and "blinds", suggesting deliberate suppression. The repetition of "me own" asserts ownership and challenges the theft of heritage. Agard presents the recovery of identity as removing a blindfold, an act of seeing clearly for the first time.',
        // VERIFY: previous evidence quote "my city takes me dancing through the city of walls" is FABRICATED — actual Rumens line is just "My city takes me dancing through the streets". The phrase "city of walls" does not appear in The Émigrée.
        evidence2: '"My city takes me dancing through the streets"',
        evidence2poem: 'The Émigrée',
        analysis2:
          'Rumens personifies the lost city as a dance partner. The remembered homeland actively embraces and accompanies the speaker — a private, joyful intimacy that political force cannot reach. The personification of memory "dancing" suggests defiance: the remembered homeland is so powerful it can overcome present-day oppression. Identity rooted in memory proves stronger than political reality.',
        link: "Both poets structure their poems around contrasts: colonial curriculum vs. suppressed heritage; remembered city vs. present reality. In both cases, the speaker's true identity exists in the suppressed or remembered version, not the imposed one.",
      },
      {
        point:
          "Both poems end with acts of defiance that assert the speaker's right to define their own identity.",
        evidence1: '"I carving out me identity"',
        evidence1poem: 'Checking Out Me History',
        analysis1:
          'The final metaphor of "carving" suggests identity is something the speaker must actively create -- it is hard, deliberate work, like sculpture. This echoes the earlier references to historical figures who carved their own paths. The present continuous tense ("I carving") indicates this is an ongoing process of self-determination, not a completed act.',
        evidence2: '"My city hides behind me. I am its ambassador"',
        evidence2poem: 'The Émigrée',
        analysis2:
          'The speaker takes on the role of ambassador -- a representative who carries the homeland\'s identity within herself. The city "hides behind" her, suggesting both protection and internalisation. Rumens presents identity as portable and resilient: even if the physical homeland is lost, its essence survives within the individual.',
        link: "Both poets end with empowering statements of self-definition. Agard's speaker is actively constructing identity; Rumens's speaker is carrying it forward. Both reject the idea that identity can be permanently suppressed or erased.",
      },
    ],
    conclusion:
      "Agard and Rumens both present identity as something precious that is threatened by external forces but ultimately resilient. Agard's approach is political and confrontational; Rumens's is personal and lyrical. Both conclude that identity, whether rooted in heritage or memory, can survive suppression.",
    grade5approach:
      'Identify that both poems are about identity being threatened. Quote "blind me to me own identity" (Agard) and "branded by an impression of sunlight" (Rumens) and explain the imagery. State: "Both speakers fight for their identity."',
    grade9approach:
      "Analyse how each poet uses language itself as an identity marker (Creole vs. lyrical English). Compare the tonal registers (anger vs. nostalgia) and what they reveal about different identity struggles. Explore how form embodies content: Agard's fractured, visual layout vs. Rumens's flowing, dream-like stanzas. Evaluate whether identity is shown as something recovered (Agard) or preserved (Rumens).",
  },

  // ────────────────────────────────────────── 6
  {
    id: 6,
    question:
      'Compare how poets present the horror of battle in Bayonet Charge and one other poem.',
    poemA: 'Bayonet Charge',
    poetA: 'Hughes',
    poemB: 'The Charge of the Light Brigade',
    poetB: 'Tennyson',
    themeTag: 'Conflict',
    themeColour: 'bg-red-500/15 text-red-300 border-red-500/20',
    introduction:
      "Both Hughes and Tennyson depict soldiers charging into battle, but they present radically different perspectives on the experience. Bayonet Charge focuses on a single soldier's terror and confusion in WWI, while The Charge of the Light Brigade commemorates a collective act of heroic duty in the Crimean War. Together, they reveal how attitudes to warfare have changed.",
    paragraphs: [
      {
        point:
          'Both poets use rhythm and pace to convey the intensity of a charge, but to different effects.',
        evidence1: '"Suddenly he awoke and was running -- raw"',
        evidence1poem: 'Bayonet Charge',
        analysis1:
          'Hughes plunges the reader into the middle of action with "Suddenly". The dash after "running" creates a breathless pause before "raw", which could describe raw flesh, raw emotion, or raw terror. The disrupted iambic pentameter mirrors the soldier\'s stumbling, panicked movement -- this is not a controlled advance but chaotic flight.',
        evidence2: '"Half a league, half a league, / Half a league onward"',
        evidence2poem: 'The Charge of the Light Brigade',
        analysis2:
          'Tennyson\'s driving rhythm — predominantly anapaestic dimeter (da-da-DUM da-da-DUM) with a dactylic refrain ("Rode the six hundred") — mimics the thundering hooves of cavalry. The repetition and end-stopped lines create momentum and a sense of unstoppable forward movement. Unlike Hughes\'s chaos, this rhythm is ordered and purposeful -- it glorifies the charge as collective heroism. The regularity of the metre reflects the disciplined obedience of the soldiers.',
        link: "Hughes uses broken rhythm to convey individual terror; Tennyson uses driving rhythm to convey collective heroism. The contrast reveals how poetic technique shapes the reader's emotional response to conflict.",
      },
      {
        point:
          "Both poets explore the soldier's relationship with duty and patriotism, but reach opposite conclusions.",
        evidence1: '"King, honour, human dignity, etcetera / Dropped like luxuries"',
        evidence1poem: 'Bayonet Charge',
        analysis1:
          'Hughes dismisses patriotic ideals with a devastating single "etcetera" -- Hughes writes "etcetera" once, so cite exactly as printed (do not abbreviate to "etc.", and don\'t double the word). Noble concepts are reduced to throwaway filler. The simile "dropped like luxuries" suggests that in the moment of real violence, abstract values are worthless burdens the soldier cannot afford to carry. Hughes argues that battlefield reality strips away all ideology.',
        evidence2: '"Theirs not to reason why, / Theirs but to do and die"',
        evidence2poem: 'The Charge of the Light Brigade',
        analysis2:
          'Tennyson presents unquestioning obedience as noble. The soldiers do not question the order to charge into "the valley of Death" -- and Tennyson admires this. The clipped, certain rhythm reflects the soldiers\' resolve. However, there is tension: Tennyson acknowledges "Some one had blunder\'d", recognising the futility even as he celebrates the duty.',
        link: 'Hughes explicitly rejects patriotic abstractions; Tennyson celebrates obedience while acknowledging its cost. Their different stances reflect the shift from Victorian glorification of military duty to the modern, post-WWI disillusionment with war.',
      },
      {
        point:
          'Both poets present the physical reality of battle, but with different levels of intimacy.',
        // VERIFY: previous quote "his foot hung like a survey of the field" is FABRICATED — actual Hughes line is "his foot hung like / Statuary in mid-stride".
        evidence1: '"his foot hung like / Statuary in mid-stride"',
        evidence1poem: 'Bayonet Charge',
        analysis1:
          "Hughes focuses on a single, almost hallucinatory moment -- the soldier's foot suspended mid-stride. The bizarre simile (a foot like \"a survey\") suggests dissociation, as though the soldier's body and mind have separated under extreme stress. Hughes brings the reader uncomfortably close to one individual's physical and psychological experience.",
        evidence2: '"Into the jaws of Death, / Into the mouth of hell"',
        evidence2poem: 'The Charge of the Light Brigade',
        analysis2:
          'Tennyson uses grand, biblical metaphor (personifying death as a devouring creature) to describe the battle. The imagery is impressive but distanced -- we see the charge from above, not from within. The scale is collective ("six hundred"), not individual. This elevated perspective allows Tennyson to present war as tragic but magnificent.',
        link: "Hughes uses close, visceral detail to make the reader experience a single soldier's terror. Tennyson uses elevated, panoramic imagery to create a monument to collective sacrifice. The contrast between intimate and panoramic perspectives defines how each poet wants the reader to feel about conflict.",
      },
    ],
    conclusion:
      'Hughes and Tennyson present the same action -- a charge into enemy fire -- but reach fundamentally different conclusions about its meaning. Tennyson sees heroic duty; Hughes sees meaningless terror. Their contrasting visions reflect the cultural shift in attitudes to war between the Victorian era and the twentieth century.',
    grade5approach:
      'Identify that both poems are about soldiers charging into battle. Quote "raw" and "valley of Death" and explain what each shows. State: "Hughes shows war as scary while Tennyson shows it as brave."',
    grade9approach:
      "Analyse how metre and rhythm create opposing effects (disrupted pentameter vs. driving dactyls). Compare the poets' perspectives on duty (dismissal vs. celebration) and connect to historical context. Explore the significance of individual vs. collective focus. Evaluate how poetic form shapes ideological response to conflict.",
  },

  // ────────────────────────────────────────── 7
  {
    id: 7,
    question: 'Compare how poets present memory and guilt in Remains and one other poem.',
    poemA: 'Remains',
    poetA: 'Armitage',
    poemB: 'War Photographer',
    poetB: 'Duffy',
    themeTag: 'Memory',
    themeColour: 'bg-amber-500/15 text-amber-700 border-amber-500/20',
    introduction:
      'Both Armitage and Duffy explore how memory and guilt haunt those who have witnessed conflict. Remains presents a soldier unable to escape the memory of a killing, while War Photographer follows a photojournalist morally burdened by the images he captures. Both poems expose the invisible psychological wounds inflicted by proximity to violence.',
    paragraphs: [
      {
        point: 'Both poets show how memory transforms from manageable to overwhelming.',
        evidence1: '"probably armed, possibly not"',
        evidence1poem: 'Remains',
        analysis1:
          'The shift from "probably" to the weaker "possibly" reveals growing moral uncertainty. What begins as a matter-of-fact anecdote becomes a source of agonising doubt. Armitage shows that memory does not fade -- it interrogates. The soldier cannot confirm the killing was justified, and this uncertainty becomes the foundation of his guilt.',
        evidence2: '"All flesh is grass"',
        evidence2poem: 'War Photographer',
        analysis2:
          'Duffy opens with a biblical allusion (Isaiah 40:6) that frames all human life as fragile and temporary. The photographer approaches his work with philosophical detachment -- but this composure crumbles as the images develop and specific faces emerge. Memory, initially ordered in "spools", becomes chaotic and personal.',
        link: 'Both poets trace a journey from apparent control to emotional collapse. Both speakers initially try to maintain professional distance from suffering but are ultimately overwhelmed by the specificity of individual human pain.',
      },
      {
        point:
          'Both poets use vivid, visual imagery to show how memory replays traumatic experiences.',
        evidence1: '"his bloody life in my bloody hands"',
        evidence1poem: 'Remains',
        analysis1:
          'The dual meaning of "bloody" (literal blood and expletive) captures the soldier\'s oscillation between clinical description and emotional breakdown. The possessive "my hands" makes the guilt inescapably personal -- the soldier cannot attribute the killing to the group. The image of holding a life in one\'s hands suggests both responsibility and irreversibility.',
        evidence2: '"a stranger\'s features / faintly start to twist before his eyes"',
        evidence2poem: 'War Photographer',
        analysis2:
          'The photograph developing becomes a metaphor for memory surfacing. The verb "twist" suggests pain, and "faintly" implies the image is ghostly, spectral. Duffy forces the photographer to watch death replay in slow motion. The phrase "before his eyes" echoes the cliche of witnessing horror firsthand, given literal meaning through the developing photograph.',
        link: 'Both poets use images of seeing -- bloody hands, twisting features -- to show that traumatic memory is primarily visual. Both speakers are forced to look at what they wish they could unsee.',
      },
      {
        point:
          'Both poems suggest that society fails to acknowledge the psychological cost of witnessing conflict.',
        evidence1: '"and the drink and the drugs won\'t flush him out"',
        evidence1poem: 'Remains',
        analysis1:
          'Armitage reveals that the soldier turns to substance abuse to escape the memory -- and fails. The colloquial language ("flush him out") normalises this coping mechanism, suggesting it is tragically common among veterans. The poem, based on a real testimony, highlights the inadequacy of support for soldiers with PTSD.',
        evidence2: '"they do not care"',
        evidence2poem: 'War Photographer',
        analysis2:
          "Duffy's blunt indictment of the newspaper-reading public suggests that the photographer's suffering is compounded by indifference. His moral burden is invisible to those who glance at the images over \"Sunday's supplement\". The short, emphatic sentence carries Duffy's anger at a society that consumes war as entertainment.",
        link: 'Both poets present their speakers as isolated by their experiences. Society either does not understand (Remains) or does not care (War Photographer). Both poems function as acts of witness, giving voice to suffering that would otherwise remain hidden.',
      },
    ],
    conclusion:
      "Armitage and Duffy both present memory and guilt as permanent, inescapable consequences of witnessing conflict. Armitage's soldier is consumed by one specific act; Duffy's photographer is overwhelmed by a lifetime of accumulated suffering. Both poets challenge the reader to acknowledge the hidden cost of war.",
    grade5approach:
      'Identify that both poems are about guilt from witnessing conflict. Quote "bloody hands" and "a stranger\'s features" and explain what they show. State: "Both speakers are haunted by what they have seen."',
    grade9approach:
      "Analyse how each poet uses imagery of developing or surfacing to replicate the involuntary nature of traumatic memory. Compare the speakers' relationships to conflict (participant vs. observer) and how this shapes the nature of their guilt. Explore how the final lines of each poem implicate the reader in the cycle of indifference. Evaluate whether guilt is presented as a moral failing or a sign of humanity.",
  },

  // ────────────────────────────────────────── 8
  {
    id: 8,
    question: 'Compare how poets present the abuse of power in London and one other poem.',
    poemA: 'London',
    poetA: 'Blake',
    poemB: 'Checking Out Me History',
    poetB: 'Agard',
    themeTag: 'Power',
    themeColour: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    introduction:
      'Both Blake and Agard present institutional power as a force that oppresses and silences ordinary people. London exposes the suffering caused by the Church, monarchy, and commerce in 18th-century England, while Checking Out Me History challenges the colonial education system that erased Black heritage. Both poets write with righteous anger against systemic injustice.',
    paragraphs: [
      {
        point:
          'Both poets present power as a system that controls people by limiting their freedom and knowledge.',
        evidence1: '"In every cry of every Man, / In every Infant\'s cry of fear"',
        evidence1poem: 'London',
        analysis1:
          'Blake\'s relentless repetition of "every" creates a sense of universal, inescapable suffering. The inclusion of infants emphasises that oppression begins at birth -- it is systemic, not individual. The "marks of weakness, marks of woe" Blake sees on every face suggest that institutional power has physically and psychologically scarred the population.',
        evidence2: '"Dem tell me bout 1066 and all dat"',
        evidence2poem: 'Checking Out Me History',
        analysis2:
          'Agard presents the colonial curriculum as a tool of control -- the pronoun "Dem" (unnamed authorities) decides what history is taught and what is suppressed. The dismissive "and all dat" mimics the irrelevance of the imposed curriculum to the speaker. By deliberately using Creole, Agard resists the linguistic norms of the system that oppresses him.',
        link: "Both poets identify institutional systems (Blake: Church, Crown; Agard: education) as mechanisms for maintaining power through control of people's minds and experiences. Both use repetitive structures to convey the relentless, systematic nature of this oppression.",
      },
      {
        point: 'Both poets use powerful imagery to show the damage caused by institutional power.',
        evidence1: '"the mind-forg\'d manacles"',
        evidence1poem: 'London',
        analysis1:
          'Blake\'s metaphor of "mind-forg\'d manacles" is one of the most important images in the poem. Manacles are physical restraints, but these are forged (created) in the mind -- suggesting that institutional power operates by making people internalise their own oppression. The people of London are enslaved not by literal chains but by ideology, deference, and fear.',
        evidence2: '"Bandage up me eye with me own history / and blind me to me own identity"',
        evidence2poem: 'Checking Out Me History',
        analysis2:
          'Agard\'s metaphor of blindfolding is equally powerful. The education system uses "me own history" as the bandage -- it is not simply absent information but actively weaponised ignorance. The emphasis on "me own" (repeated insistently) asserts that the heritage being suppressed belongs to the speaker. Blindness here represents a deliberate, enforced loss of identity.',
        link: 'Both poets use metaphors of physical restraint and sensory deprivation (chains on the mind, bandages on the eyes) to show that institutional power damages people psychologically, not just materially. Both suggest that the most insidious form of control is invisible.',
      },
      {
        point:
          'Both poets channel their anger into a call for change, though they differ in tone and directness.',
        evidence1: '"the youthful Harlot\'s curse / Blasts the new-born Infant\'s tear"',
        evidence1poem: 'London',
        analysis1:
          "Blake's final image is devastating: a young sex worker's disease destroys the next generation. The cycle of poverty and exploitation is presented as self-perpetuating. Blake does not offer a direct solution, but his unflinching portrayal of suffering is itself a political act -- the poem dares the reader to look at what society prefers to ignore.",
        evidence2: '"But now I checking out me own history / I carving out me identity"',
        evidence2poem: 'Checking Out Me History',
        analysis2:
          'Agard\'s ending is more overtly empowering. The present continuous tense ("I checking", "I carving") shows active, ongoing resistance. The verbs "checking out" (investigating) and "carving" (creating) present identity reclamation as both intellectual discovery and creative labour. Unlike Blake\'s bleak conclusion, Agard offers a model for liberation.',
        link: 'Blake presents oppression as a devastating cycle with no easy escape; Agard presents it as a force that can be actively resisted and overcome. Both, however, use poetry itself as a weapon against institutional power -- challenging readers to see injustice clearly.',
      },
    ],
    conclusion:
      "Blake and Agard, writing centuries apart, identify the same fundamental mechanism of power: controlling what people know and believe. Blake's tone is prophetic and despairing; Agard's is angry and defiant. Together, they show that the abuse of institutional power is persistent but not invulnerable -- poetry can expose and challenge it.",
    grade5approach:
      'Identify that both poems criticise powerful institutions. Quote "mind-forg\'d manacles" and "bandage up me eye" and explain their meaning. State: "Both poets are angry about how power is used to control people."',
    grade9approach:
      "Analyse how each poet uses extended metaphors (mental chains vs. blindfolding) to conceptualise different forms of oppression. Compare the poets' contexts and purposes: Blake's 18th-century radical Christianity vs. Agard's post-colonial identity politics. Explore how form and language are themselves political acts: Blake's hymn-like regularity as ironic commentary vs. Agard's Creole as linguistic resistance. Evaluate the effectiveness of despair (Blake) vs. defiance (Agard) as responses to power.",
  },

  // ────────────────────────────────────────── 9
  {
    id: 9,
    question:
      'Compare how poets present ideas about the fragility of human power in Ozymandias and one other poem.',
    poemA: 'Ozymandias',
    poetA: 'Shelley',
    poemB: 'Tissue',
    poetB: 'Dharker',
    themeTag: 'Power',
    themeColour: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    introduction:
      'Both Shelley and Dharker present human power as ultimately fragile and impermanent. Ozymandias uses a ruined statue to show that political empires crumble, while Tissue uses paper as an extended metaphor for the structures humans build. Both poets suggest that human attempts to create permanent monuments to power are destined to fail.',
    paragraphs: [
      {
        point: 'Both poets use central symbols to represent the impermanence of human achievement.',
        evidence1: '"Two vast and trunkless legs of stone / Stand in the desert"',
        evidence1poem: 'Ozymandias',
        analysis1:
          'The statue -- meant to immortalise Ozymandias -- has itself become a symbol of decay. "Trunkless" (without a body) suggests the ruler has been symbolically dismembered by time. Stone, chosen for its durability, has still crumbled. Shelley uses this single, powerful image to compress centuries of decline into a vivid snapshot.',
        evidence2: '"Paper that lets the light / shine through"',
        evidence2poem: 'Tissue',
        analysis2:
          'Dharker\'s paper is deliberately fragile -- it "lets the light shine through", suggesting transparency and impermanence are positive qualities. Unlike Ozymandias\'s stone, which tried to resist decay, paper embraces its fragility. Dharker suggests that human structures should be flexible and temporary, not rigid monuments to power.',
        link: 'Shelley uses stone to show that even the most durable materials fail; Dharker uses paper to suggest that fragility might be a strength. Both poets question the human desire for permanence, but reach different conclusions about what should replace it.',
      },
      {
        point: 'Both poets critique the human desire to build lasting monuments to power.',
        evidence1: '"Look on my Works, ye Mighty, and despair!"',
        evidence1poem: 'Ozymandias',
        analysis1:
          'Ozymandias\'s inscription is a command to future generations to admire his achievements. The dramatic irony -- "Nothing beside remains" -- devastates this ambition. Shelley presents the desire for permanent legacy as fundamentally deluded. The capitalized "Works" emphasizes the grandiosity of the claim.',
        // VERIFY: previous quote "drift through fingertips" is FABRICATED — does not appear in Dharker's Tissue. Replaced with verified text fragment.
        evidence2: '"Fine slips from grocery shops"',
        evidence2poem: 'Tissue',
        analysis2:
          'Dharker presents the records of daily commerce -- receipts, lists -- as ephemeral. They "might fly our lives like paper kites", refusing to be held permanently. This is presented not as loss but as natural, organic movement. Dharker implies that the human structures built on paper (borders, money, identity) are less substantial than we believe.',
        link: 'Both poets argue that human monuments are more fragile than their creators intended. Shelley shows this as tragic irony; Dharker presents it as a liberating truth. Both challenge the reader to reconsider what truly endures.',
      },
      {
        point:
          'Both poems ultimately suggest that nature or natural forces are more powerful than human structures.',
        evidence1: '"The lone and level sands stretch far away"',
        evidence1poem: 'Ozymandias',
        analysis1:
          'Shelley gives the last word to the desert -- nature has completely erased Ozymandias\'s empire. The alliterative "l" and sibilant "s" sounds create a soft, whispering quality that contrasts with the harsh "sneer of cold command". Nature is quiet but absolute in its victory over human ambition.',
        evidence2: '"turned into your skin."',
        evidence2poem: 'Tissue',
        analysis2:
          'Dharker\'s final isolated single-line stanza ("turned into your skin.") stands alone, breaking the regularity of the ten preceding quatrains to emphasise the volta from paper to flesh. The poem suggests that our true identity is not found in the structures we build but in our own bodies, our own humanity. This is both a celebration of human fragility and a rejection of the artificial power structures (borders, money) that paper represents.',
        link: "Both poets conclude that the organic world -- desert sands, human skin -- is more authentic and enduring than human constructions. Shelley emphasises nature's destructive power; Dharker emphasises its liberating simplicity.",
      },
    ],
    conclusion:
      "Shelley and Dharker both reveal that human power is fragile, but their perspectives differ. Shelley presents impermanence as a punishment for arrogance -- the tyrant's legacy is justly destroyed. Dharker presents impermanence as a positive quality -- fragility connects us to our shared humanity. Together, they offer complementary critiques of the human desire for permanent power.",
    grade5approach:
      'Identify that both poems are about human power not lasting. Quote about the ruined statue and paper, explaining what each symbolises. State: "Both poets show that human achievements do not last forever."',
    grade9approach:
      "Analyse how each poet uses a central extended metaphor (stone statue vs. paper) to explore impermanence. Compare the poets' attitudes: Shelley's ironic critique of tyranny vs. Dharker's philosophical acceptance of fragility. Explore how form reflects content: Shelley's fractured sonnet vs. Dharker's flowing, unrhymed stanzas. Evaluate whether impermanence is presented as tragic (Shelley) or liberating (Dharker).",
  },

  // ────────────────────────────────────────── 10
  {
    id: 10,
    question:
      'Compare how poets present conflicting attitudes to duty in The Charge of the Light Brigade and one other poem.',
    poemA: 'The Charge of the Light Brigade',
    poetA: 'Tennyson',
    poemB: 'Kamikaze',
    poetB: 'Garland',
    themeTag: 'Conflict',
    themeColour: 'bg-red-500/15 text-red-300 border-red-500/20',
    introduction:
      'Both Tennyson and Garland explore the relationship between duty and the individual, but from opposite directions. The Charge of the Light Brigade celebrates soldiers who obey orders without question, even to their deaths, while Kamikaze tells the story of a pilot who rejects his suicidal mission and faces a lifetime of shame. Together, they question whether duty is heroic or destructive.',
    paragraphs: [
      {
        point: 'Both poets present duty as a powerful force that overrides individual choice.',
        evidence1: '"Theirs not to reason why, / Theirs but to do and die"',
        evidence1poem: 'The Charge of the Light Brigade',
        analysis1:
          'Tennyson presents obedience as the highest military virtue. The soldiers\' duty is "not to reason" -- questioning orders is explicitly excluded. The rhythmic certainty of the couplet reinforces this absolute, unquestioning compliance. Tennyson admires this, presenting the soldiers\' deaths as noble sacrifice rather than meaningless waste.',
        evidence2: '"they treated him / as though he no longer existed"',
        evidence2poem: 'Kamikaze',
        analysis2:
          'Garland shows the devastating consequence of defying duty: the pilot\'s own family erases him. The phrase "no longer existed" is a social death sentence -- he is physically alive but culturally dead. This presents duty not as personal choice but as cultural obligation so powerful that rejecting it carries worse consequences than death itself.',
        link: "Both poets show that duty in wartime leaves no room for individual will. Tennyson's soldiers accept this and die; Garland's pilot rejects it and suffers a living death. Neither outcome offers freedom.",
      },
      {
        point:
          "Both poets use structure and perspective to shape the reader's attitude towards duty.",
        evidence1: '"Cannon to right of them, / Cannon to left of them, / Cannon behind them"',
        evidence1poem: 'The Charge of the Light Brigade',
        analysis1:
          "Tennyson's repetitive structure surrounds the soldiers with danger on all sides, creating a sense of entrapment that makes their continued advance seem more heroic. The third-person narration positions the reader as an admiring observer -- we watch the charge from a distance that enables admiration. The driving rhythm makes retreat feel impossible.",
        evidence2: '"her father / embarked at sunrise"',
        evidence2poem: 'Kamikaze',
        analysis2:
          'Garland tells the story through a daughter\'s retrospective narration, creating layers of distance and uncertainty. The third-person-to-first-person shift ("they treated him" to "I wondered") reveals the daughter\'s conflicted feelings -- she has participated in shunning her father but now questions whether it was right. This ambiguous perspective prevents the reader from reaching a simple judgement.',
        link: "Tennyson's clear, heroic perspective makes duty feel right; Garland's layered, uncertain narration makes duty feel like a trap. The structural choices reveal each poet's attitude: celebration vs. questioning.",
      },
      {
        point:
          'Both poems force the reader to consider whether duty is truly heroic or ultimately futile.',
        evidence1: '"Honour the Light Brigade, / Noble six hundred!"',
        evidence1poem: 'The Charge of the Light Brigade',
        analysis1:
          'Tennyson\'s final imperative commands the reader to honour the soldiers. The adjective "Noble" and the exclamation mark create an unambiguous call to admiration. Yet Tennyson also acknowledges "Some one had blunder\'d" -- the charge was a mistake. This tension between celebrating obedience and acknowledging futility runs through the poem and complicates the surface message of heroism.',
        // VERIFY: previous quote "which was the better way to die" — actual Garland phrasing is "which had been the better way to die". Corrected.
        evidence2: '"which had been the better way to die"',
        evidence2poem: 'Kamikaze',
        analysis2:
          'The poem\'s devastating final line presents two forms of death: the literal death of the kamikaze mission, or the social death of being shunned. Garland refuses to answer which is "better", leaving the reader to grapple with an impossible question. The quiet, reflective ending contrasts with Tennyson\'s rousing celebration, suggesting that there are no good answers when duty demands self-destruction.',
        link: 'Tennyson ends with certainty ("Honour them"); Garland ends with an unanswerable question ("which was the better way to die"). Together, they bracket the full range of responses to duty: from admiration to doubt.',
      },
    ],
    conclusion:
      "Tennyson and Garland present duty from opposing perspectives but both reveal its crushing power over individuals. Tennyson's Victorian celebration of military obedience contrasts with Garland's modern exploration of its human cost. Together, they ask a question that neither fully answers: is unquestioning duty heroic or tragic?",
    grade5approach:
      'Identify that both poems are about duty in war. Quote "do and die" and "no longer existed" and explain what each shows about duty. State: "Tennyson sees duty as heroic but Garland shows it can be destructive."',
    grade9approach:
      "Analyse how each poet uses narrative perspective to shape the reader's attitude to duty (external celebration vs. internal questioning). Compare the cultural contexts: Victorian military honour vs. Japanese bushido. Explore how the ending of each poem either closes down or opens up interpretation. Evaluate whether either poet offers a satisfactory answer to the question of duty's value.",
  },
]

/* ── Component ───────────────────────────────────────────────────── */

export default function EssayPlansPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Power &amp; Conflict
        </Button>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              AQA GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">AQA Only</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Ten ready-made essay plans for the most common AQA Power &amp; Conflict comparison
            questions. Each plan includes a full introduction, three PEEL comparison paragraphs, and
            a conclusion &mdash; with Grade&nbsp;5 and Grade&nbsp;9 approaches so you can see
            exactly what the examiner wants at each level.
          </p>
        </div>
      </section>

      {/* ── How to use this page ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10">
            <Target className="size-4 text-blue-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">How to use these plans</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="mb-1 text-sm font-semibold text-foreground">1. Read the question</p>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Each plan answers a real AQA-style comparison question. In the exam, the named poem is
              printed for you; the second poem is your choice.
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="mb-1 text-sm font-semibold text-foreground">
              2. Study the PEEL structure
            </p>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Each paragraph follows Point &rarr; Evidence &rarr; Explain &rarr; Link. Notice how
              Grade&nbsp;9 responses go beyond meaning to analyse methods and context.
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="mb-1 text-sm font-semibold text-foreground">
              3. Practise writing your own
            </p>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Use these plans as models, then practise with different poem pairings. The more plans
              you write, the faster you&apos;ll work in the exam.
            </p>
          </div>
        </div>
      </section>

      {/* ── Essay plans ──────────────────────────────────────────── */}
      {ESSAY_PLANS.map((plan) => (
        <section
          key={plan.id}
          id={`plan-${plan.id}`}
          className="rounded-2xl border border-border/60 bg-card overflow-hidden"
        >
          {/* Header */}
          <div className="border-b border-border/40 bg-muted/30 px-6 py-5 sm:px-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Plan {plan.id}
              </Badge>
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${plan.themeColour}`}
              >
                {plan.themeTag}
              </span>
            </div>
            <h2 className="text-heading-md font-heading text-foreground leading-snug">
              {plan.question}
            </h2>
            <p className="mt-2 text-body-sm text-muted-foreground">
              <span className="font-medium text-foreground">{plan.poemA}</span> ({plan.poetA}) &amp;{' '}
              <span className="font-medium text-foreground">{plan.poemB}</span> ({plan.poetB})
            </p>
          </div>

          <div className="space-y-6 px-6 py-6 sm:px-8">
            {/* Introduction */}
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="flex size-5 items-center justify-center rounded bg-emerald-500/15 text-[0.6rem] font-bold text-emerald-400">
                  I
                </span>
                Introduction
              </h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {plan.introduction}
              </p>
            </div>

            {/* PEEL paragraphs */}
            {plan.paragraphs.map((para, i) => (
              <div key={i} className="rounded-xl border border-border/40 bg-background/50 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="flex size-5 items-center justify-center rounded bg-violet-500/15 text-[0.6rem] font-bold text-violet-400">
                    {i + 1}
                  </span>
                  Paragraph {i + 1}: {para.point}
                </h3>

                {/* Evidence & analysis for poem A */}
                <div className="mb-4 rounded-lg border border-border/30 bg-card p-4">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {plan.poemA}
                  </p>
                  <blockquote className="mb-2 border-l-2 border-amber-500/40 pl-3 text-body-sm italic text-foreground">
                    {para.evidence1}
                  </blockquote>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {para.analysis1}
                  </p>
                </div>

                {/* Evidence & analysis for poem B */}
                <div className="mb-4 rounded-lg border border-border/30 bg-card p-4">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {plan.poemB}
                  </p>
                  <blockquote className="mb-2 border-l-2 border-blue-500/40 pl-3 text-body-sm italic text-foreground">
                    {para.evidence2}
                  </blockquote>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {para.analysis2}
                  </p>
                </div>

                {/* Link */}
                <div className="rounded-lg bg-muted/40 px-4 py-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Comparative link
                  </p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{para.link}</p>
                </div>
              </div>
            ))}

            {/* Conclusion */}
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="flex size-5 items-center justify-center rounded bg-rose-500/15 text-[0.6rem] font-bold text-rose-400">
                  C
                </span>
                Conclusion
              </h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {plan.conclusion}
              </p>
            </div>

            {/* Grade 5 vs Grade 9 */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4">
                <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                  <Star className="size-3.5" />
                  Grade 5 approach
                </h4>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {plan.grade5approach}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
                <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                  <Sparkles className="size-3.5" />
                  Grade 9 approach
                </h4>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {plan.grade9approach}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Quick jump ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="mb-4 text-heading-lg font-heading text-foreground">Quick jump</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {ESSAY_PLANS.map((plan) => (
            <a
              key={plan.id}
              href={`#plan-${plan.id}`}
              className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/50 px-4 py-3 transition-colors hover:border-border hover:bg-muted/40"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-muted text-[0.6rem] font-bold text-muted-foreground">
                {plan.id}
              </span>
              <span className="text-body-sm text-muted-foreground leading-snug">
                {plan.poemA} &amp; {plan.poemB}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-clay-600" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Ready to write your own comparisons?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Read our comparison guide for step-by-step techniques, or explore themes to find the best
          poem pairings.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="default"
            size="lg"
            disabled
            aria-disabled="true"
            title="Comparison guide — coming soon"
          >
            Comparison guide (coming soon)
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            disabled
            aria-disabled="true"
            title="Themes — coming soon"
          >
            Explore themes (coming soon)
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-4 border-t border-border/60 pt-4">
        Quotations from Shelley, Blake, Wordsworth, Browning, Tennyson, and Owen are in the public
        domain. Short quotations from copyrighted poems are used for the purpose of criticism and
        review.
      </p>
    </div>
  )
}
