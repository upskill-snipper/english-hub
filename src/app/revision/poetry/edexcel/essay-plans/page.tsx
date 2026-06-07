'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  FileText,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Swords,
  MapPin,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

/* ── Types ──────────────────────────────────────────────────────── */

interface EssayPlan {
  id: number
  title: string
  cluster: 'Conflict' | 'Time and Place'
  poemA: string
  poetA: string
  poemB: string
  poetB: string
  question: string
  thesis: string
  paragraphs: {
    topic: string
    poemAPoint: string
    poemAEvidence: string
    poemAAnalysis: string
    poemBPoint: string
    poemBEvidence: string
    poemBAnalysis: string
    comparison: string
  }[]
  conclusion: string
  examTip: string
}

/* ── Essay plan data ────────────────────────────────────────────── */

const ESSAY_PLANS: EssayPlan[] = [
  /* ─── Conflict cluster plans ──────────────────────────────────── */
  {
    id: 1,
    title: 'The futility of war',
    cluster: 'Conflict',
    poemA: 'The Charge of the Light Brigade',
    poetA: 'Alfred Lord Tennyson',
    poemB: 'Exposure',
    poetB: 'Wilfred Owen',
    question: 'Compare how the poets present the experience of soldiers in war.',
    thesis:
      'Tennyson glorifies the soldiers\u2019 courage through galloping rhythm and heroic imagery, whereas Owen strips war of any glory and presents suffering through relentless, exhausting repetition.',
    paragraphs: [
      {
        topic: 'How the poets establish the reality of the battlefield',
        poemAPoint:
          'Tennyson uses the driving anapaestic metre to convey the momentum of the charge.',
        poemAEvidence:
          '"Half a league, half a league, / Half a league onward" \u2014 the repetition creates a drumbeat rhythm.',
        poemAAnalysis:
          'The galloping rhythm sweeps the reader forward, mirroring the cavalry\u2019s unstoppable advance and making us feel the excitement of the charge.',
        poemBPoint:
          'Owen uses half-rhyme and ellipsis to show the paralysing tedium of trench life.',
        poemBEvidence: '"But nothing happens" \u2014 the refrain that closes multiple stanzas.',
        poemBAnalysis:
          'The anti-climactic refrain deflates any expectation of action, forcing the reader to share the soldiers\u2019 frustration and hopelessness.',
        comparison:
          'Both poets use repetition, but to opposite effect: Tennyson builds momentum and excitement, while Owen drains energy and meaning from the experience.',
      },
      {
        topic: 'How conflict is depicted through imagery and language',
        poemAPoint:
          'Tennyson uses vivid, dramatic imagery of the battle to honour the soldiers\u2019 bravery.',
        poemAEvidence:
          '"Into the jaws of Death, / Into the mouth of hell" \u2014 personification of death as a consuming beast.',
        poemAAnalysis:
          'The capitalised personification elevates the danger into something mythic, making the soldiers\u2019 willingness to ride forward seem all the more heroic.',
        poemBPoint: 'Owen personifies nature itself as the true enemy.',
        poemBEvidence: '"the merciless iced east winds that knive us" \u2014 nature is weaponised.',
        poemBAnalysis:
          'The sibilance and harsh consonants make the wind feel actively cruel; Owen implies that the enemy is irrelevant because the conditions alone are deadly.',
        comparison:
          'Tennyson\u2019s personification glorifies the enemy to elevate the soldiers; Owen\u2019s personification transfers hostility to nature, suggesting war itself is the enemy.',
      },
      {
        topic: 'The poets\u2019 attitudes to duty and sacrifice',
        poemAPoint: 'Tennyson argues the soldiers\u2019 obedience deserves eternal honour.',
        poemAEvidence:
          '"Honour the charge they made! / Honour the Light Brigade" \u2014 the imperative commands the reader to respect them.',
        poemAAnalysis:
          'The imperative tone turns the poem into a public monument; Tennyson positions the reader as an audience with a moral obligation to remember.',
        poemBPoint: 'Owen questions whether sacrifice achieves anything.',
        poemBEvidence:
          '"For love of God seems dying" \u2014 even faith cannot sustain the soldiers.',
        poemBAnalysis:
          'The progressive present tense ("seems dying") suggests a slow erosion of everything that once gave meaning, including patriotic duty.',
        comparison:
          'Where Tennyson demands we honour duty even when orders are wrong, Owen implies that duty has led men to pointless suffering, challenging the reader\u2019s assumptions about sacrifice.',
      },
    ],
    conclusion:
      'Both poets are deeply concerned with the experience of soldiers, but their conclusions are opposed. Tennyson, writing from a distance, celebrates the glory of obedience; Owen, writing from the trenches, exposes its devastating consequences. The contrast reflects a wider shift in how British culture understood war after 1914.',
    examTip:
      'Notice the structural contrast: Tennyson builds to a climax in stanza 5 then reflects; Owen cycles through the same suffering without resolution. Discussing structure earns top marks.',
  },
  {
    id: 2,
    title: 'Suppressed anger and its consequences',
    cluster: 'Conflict',
    poemA: 'A Poison Tree',
    poetA: 'William Blake',
    poemB: 'Cousin Kate',
    poetB: 'Christina Rossetti',
    question: 'Compare how the poets present the effects of suppressed feelings.',
    thesis:
      'Blake uses an extended metaphor of a growing tree to show how concealed anger becomes murderous, while Rossetti uses a dramatic monologue to show how a woman\u2019s concealed bitterness leads to a desire for revenge.',
    paragraphs: [
      {
        topic: 'How suppressed feelings are established',
        poemAPoint: 'Blake sets up a binary: honesty resolves anger, secrecy nourishes it.',
        poemAEvidence:
          '"I was angry with my friend; / I told my wrath, my wrath did end" then "I was angry with my foe: / I told it not, my wrath did grow."',
        poemAAnalysis:
          'The neat parallelism of the opening stanza gives the poem the tone of a moral lesson, almost a nursery rhyme. The simplicity of the language makes the lesson feel obvious, which makes the speaker\u2019s later choice to suppress seem all the more disturbing.',
        poemBPoint: 'Rossetti\u2019s speaker suppresses her pain beneath a narrative of blame.',
        poemBEvidence:
          '"O Lady Kate, my cousin Kate, / You grew more fair than I" \u2014 the repeated address to Kate is accusatory.',
        poemBAnalysis:
          'The ballad form and direct address give the impression of a story being retold, but the speaker\u2019s restrained tone masks deep resentment that erupts by the final stanza.',
        comparison:
          'Both poets use deceptively simple, traditional forms (parable and ballad) to explore feelings that are anything but simple. The formal restraint mirrors the emotional suppression.',
      },
      {
        topic: 'How the consequences of suppression are shown',
        poemAPoint: 'Blake\u2019s suppressed anger produces a literal poisoned fruit.',
        poemAEvidence:
          '"And it grew both day and night, / Till it bore an apple bright" \u2014 the anger becomes an alluring weapon.',
        poemAAnalysis:
          'The Biblical allusion to the tree of knowledge links the speaker\u2019s deception to original sin, suggesting that concealed anger is a fundamental human failing.',
        poemBPoint: 'Rossetti\u2019s speaker turns her pain into a weapon: her illegitimate son.',
        poemBEvidence:
          '"Yet I\u2019ve a gift you have not got, / And seem not like to get" \u2014 the child becomes a trump card.',
        poemBAnalysis:
          'The triumphant tone of the final stanza is disturbing because the speaker weaponises her own child, showing how long-suppressed pain distorts even maternal love.',
        comparison:
          'In both poems, the thing produced by suppression \u2014 the apple and the child \u2014 becomes a weapon. Blake\u2019s is used to kill; Rossetti\u2019s is used to wound. Both suggest that buried feelings do not disappear but mutate into something dangerous.',
      },
      {
        topic: 'The poets\u2019 moral and social commentary',
        poemAPoint: 'Blake implies that society encourages dishonesty.',
        poemAEvidence:
          '"And I sunned it with smiles, / And with soft deceitful wiles" \u2014 the sibilance suggests seduction.',
        poemAAnalysis:
          'The alliterative sibilance links the speaker to the serpent of Eden; Blake is criticising a polite society that teaches people to hide their true feelings.',
        poemBPoint:
          'Rossetti critiques a patriarchal society that punishes women for men\u2019s actions.',
        poemBEvidence:
          '"He lured me to his palace home" \u2014 the verb "lured" places blame on the lord.',
        poemBAnalysis:
          'Rossetti exposes the double standard: the lord is free to discard one woman for another, while the speaker bears all the social shame. Her suppressed anger is justified.',
        comparison:
          'Both poets direct their critique outward. Blake blames a culture of politeness; Rossetti blames a culture of patriarchy. In both cases, the individual\u2019s suppressed feelings are symptoms of a broader social sickness.',
      },
    ],
    conclusion:
      'Blake and Rossetti both show that suppressed feelings are not resolved but transformed into something destructive. Blake\u2019s parable warns universally; Rossetti\u2019s ballad grounds the same warning in the specific injustice of Victorian gender politics.',
    examTip:
      'Linking the form of each poem (parable vs. ballad) to its theme of suppression is a strong structural point. The simple surfaces hide complex emotions \u2014 just as the speakers do.',
  },
  {
    id: 3,
    title: 'Identity and prejudice',
    cluster: 'Conflict',
    poemA: 'Half-caste',
    poetA: 'John Agard',
    poemB: 'The Class Game',
    poetB: 'Mary Casey',
    question: 'Compare how the poets challenge prejudice and assert their identity.',
    thesis:
      'Both poets use a confrontational, second-person address to challenge a listener who has judged them, but Agard dismantles racial prejudice through absurdist logic while Casey uses defiant class pride and raw energy.',
    paragraphs: [
      {
        topic: 'How the poets establish a confrontational voice',
        poemAPoint: 'Agard directly addresses the person who used the term "half-caste".',
        poemAEvidence:
          '"Excuse me / standing on one leg / I\u2019m half-caste" \u2014 the opening is ironic and physical.',
        poemAAnalysis:
          'The absurd image of standing on one leg literalises the insult, exposing its stupidity. The informal, spoken register makes the poem feel like a face-to-face confrontation.',
        poemBPoint: 'Casey directly challenges the middle-class listener\u2019s judgement.',
        poemBEvidence:
          '"How can you tell what class I\u2019m from?" \u2014 the opening question is a dare.',
        poemBAnalysis:
          'The rhetorical question immediately puts the listener on the defensive, establishing the speaker as someone who refuses to be ashamed.',
        comparison:
          'Both poets open with a challenge, but Agard uses irony and humour while Casey uses directness and aggression. Both turn the tables on the person doing the judging.',
      },
      {
        topic: 'How language itself becomes a theme',
        poemAPoint: 'Agard writes in Caribbean Creole to refuse Standard English norms.',
        poemAEvidence:
          '"wid de whole of yu eye / an de whole of yu ear" \u2014 the phonetic spelling insists on the speaker\u2019s own voice.',
        poemAAnalysis:
          'By refusing to write in Standard English, Agard performs his argument: he will not use "half" of his language any more than he is "half" a person.',
        poemBPoint: 'Casey deliberately uses working-class dialect and slang.',
        poemBEvidence:
          "\"Say 'toilet' instead of 'bog'\" \u2014 the list of class markers is unapologetic.",
        poemBAnalysis:
          'Casey turns the supposed markers of inferiority into badges of pride. The list format dares the reader to judge each word.',
        comparison:
          'For both poets, language is not just the medium but the battlefield. Refusing Standard English is itself an act of resistance.',
      },
      {
        topic: 'How the poems end with a demand or assertion',
        poemAPoint: 'Agard demands the listener return with their whole self.',
        poemAEvidence:
          '"come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind" \u2014 the imperative is a challenge.',
        poemAAnalysis:
          'The closing imperative reverses the power dynamic: the speaker tells the listener they are the one who is incomplete. The open ending leaves the confrontation unresolved.',
        poemBPoint: 'Casey closes with a defiant rhetorical question.',
        poemBEvidence:
          '"So why do you care what class I\u2019m from?" \u2014 the poem ends where it began.',
        poemBAnalysis:
          'The circular structure implies that class prejudice, like the question, never goes away. But the tone is triumphant rather than defeated.',
        comparison:
          'Both endings refuse closure. Agard demands the listener change; Casey implies the listener\u2019s prejudice is their own problem. Neither poet seeks approval \u2014 both assert their right to exist exactly as they are.',
      },
    ],
    conclusion:
      'Agard and Casey both weaponise language to fight prejudice, but their targets are different. Agard dismantles racial categories through logic and absurdity; Casey attacks class snobbery through raw pride. Both make the listener confront their own narrow-mindedness.',
    examTip:
      'The Class Game is copyrighted, so you cannot quote it in full. Focus on the effect of the confrontational second-person address and the use of dialect \u2014 these points can be made without extended quotation.',
  },
  {
    id: 4,
    title: 'The power of nature over humanity',
    cluster: 'Conflict',
    poemA: 'Extract from The Prelude',
    poetA: 'William Wordsworth',
    poemB: 'Exposure',
    poetB: 'Wilfred Owen',
    question: 'Compare how the poets present the power of nature.',
    thesis:
      'Wordsworth presents nature as an overwhelming spiritual force that educates through fear, while Owen presents nature as an indifferent killer that renders human conflict meaningless.',
    paragraphs: [
      {
        topic: 'How nature is personified',
        poemAPoint: 'Wordsworth personifies the mountain as a living, judging presence.',
        poemAEvidence:
          '"a huge peak, black and huge... / With purpose of its own / And measured motion like a living thing, / Strode after me" \u2014 the mountain pursues the boy.',
        poemAAnalysis:
          'The enjambment and caesura create a sense of the mountain slowly rising, as if waking up. The verb "strode" gives it intentional, deliberate movement.',
        poemBPoint: 'Owen personifies the wind as a deliberate aggressor.',
        poemBEvidence: '"the merciless iced east winds that knive us" \u2014 nature is weaponised.',
        poemBAnalysis:
          'The neologism "knive" (used as a verb) makes the wind an active assailant, blurring the line between nature and enemy combatant.',
        comparison:
          'Both poets give nature human qualities, but Wordsworth\u2019s nature teaches; Owen\u2019s nature kills. The Romantic sublime has been replaced by industrial-age horror.',
      },
      {
        topic: 'The human response to nature\u2019s power',
        poemAPoint: 'The boy is transformed by his encounter with nature.',
        poemAEvidence:
          '"and after I had seen / That spectacle, for many days, my brain / Worked with a dim and undetermined sense / Of unknown modes of being" \u2014 nature reshapes his understanding of the world.',
        poemAAnalysis:
          'The abstract language ("unknown modes of being") suggests the experience is beyond words, a spiritual awakening that cannot be fully articulated.',
        poemBPoint: 'The soldiers are numbed into passive acceptance.',
        poemBEvidence:
          '"We only know war lasts, rain soaks, and clouds sag stormy" \u2014 knowledge is reduced to mere sensation.',
        poemBAnalysis:
          'The flat, monosyllabic listing strips away any higher meaning. The soldiers have no spiritual awakening \u2014 only endurance.',
        comparison:
          'Wordsworth\u2019s speaker grows from his encounter; Owen\u2019s soldiers are diminished. Both responses are authentic, but they reflect very different ideas about what nature reveals about the human condition.',
      },
      {
        topic: 'Structure and form reflecting nature\u2019s power',
        poemAPoint: 'The blank verse mirrors the flowing, continuous quality of memory.',
        poemAEvidence:
          'The extract is written in unrhymed iambic pentameter with frequent enjambment.',
        poemAAnalysis:
          'The lack of end-stopping creates a sense of thoughts tumbling forward, just as the boy\u2019s boat is carried along by the current. The single-block structure mimics the overwhelming, unbroken power of the mountain.',
        poemBPoint: 'Owen uses pararhyme (half-rhyme) to create unease.',
        poemBEvidence:
          '"knive us / nervous", "silent / salient" \u2014 the rhymes almost match but never quite land.',
        poemBAnalysis:
          'The near-misses in rhyme mirror the soldiers\u2019 frustrated expectations: they wait for something to happen, and it never does. The form enacts the content.',
        comparison:
          'Wordsworth\u2019s flowing blank verse suggests nature\u2019s grandeur is beyond containment; Owen\u2019s broken pararhyme suggests nature has shattered even the order of language.',
      },
    ],
    conclusion:
      'Both poets show nature as more powerful than humanity, but they draw opposite conclusions. For Wordsworth, nature\u2019s power is ultimately beneficial \u2014 it humbles and educates. For Owen, nature\u2019s power is merely another source of suffering in an already cruel world.',
    examTip:
      'The Prelude extract is autobiographical, while Exposure speaks for a collective "we". Noting the shift from personal to communal experience is a strong contextual point.',
  },
  {
    id: 5,
    title: 'Remembering and mourning the dead',
    cluster: 'Conflict',
    poemA: 'The Man He Killed',
    poetA: 'Thomas Hardy',
    poemB: 'What Were They Like?',
    poetB: 'Denise Levertov',
    question: 'Compare how the poets present the effects of war on ordinary people.',
    thesis:
      'Hardy uses a single soldier\u2019s colloquial reflection to expose the absurdity of killing a stranger, while Levertov uses a clinical question-and-answer format to mourn an entire culture destroyed by war.',
    paragraphs: [
      {
        topic: 'How the poets give voice to ordinary people',
        poemAPoint: 'Hardy uses a working-class speaker who struggles to justify what he has done.',
        poemAEvidence:
          '"Yes; quaint and curious war is! / You shoot a fellow down / You\u2019d treat if met where any bar is" \u2014 the casual tone jars with the subject.',
        poemAAnalysis:
          'The colloquial language ("fellow", "bar") makes the speaker relatable, while the exclamation mark on "curious" is unconvincing \u2014 the speaker is trying and failing to make sense of his experience.',
        poemBPoint: 'Levertov\u2019s second voice describes a people who have been silenced.',
        poemBEvidence:
          '"It is not remembered" \u2014 the passive voice erases the culture\u2019s agency.',
        poemBAnalysis:
          'By removing the subject from the sentence, Levertov enacts the erasure she describes. The culture has not just been destroyed; it has been forgotten.',
        comparison:
          'Hardy focuses on one individual\u2019s guilt; Levertov widens the lens to an entire civilisation. Both approaches make war\u2019s costs personal and immediate.',
      },
      {
        topic: 'How structure reflects the poets\u2019 messages',
        poemAPoint: 'Hardy uses a ballad form with a conversational, faltering rhythm.',
        poemAEvidence:
          'The dashes and hesitations ("I shot him dead \u2014 because \u2014 / Because he was my foe") suggest the speaker is thinking aloud.',
        poemAAnalysis:
          'The dashes break the ballad\u2019s regularity, mirroring the speaker\u2019s inability to construct a coherent justification for killing.',
        poemBPoint: 'Levertov splits the poem into numbered questions and answers.',
        poemBEvidence:
          'Six questions about Vietnamese culture are followed by six devastated answers.',
        poemBAnalysis:
          'The Q&A format mimics a government hearing or fact-finding mission, but the answers subvert bureaucratic detachment by being deeply emotional.',
        comparison:
          'Hardy\u2019s broken ballad and Levertov\u2019s fractured Q&A both use structural disruption to show that war damages not just people but the forms we use to make sense of the world.',
      },
      {
        topic: 'The poets\u2019 attitudes to war',
        poemAPoint: 'Hardy suggests that soldiers on both sides are identical.',
        poemAEvidence:
          '"He thought he\u2019d \u2019list, perhaps, / Off-hand like \u2014 just as I" \u2014 the speaker imagines his victim\u2019s motives were the same as his own.',
        poemAAnalysis:
          'The symmetry of motive makes the killing feel arbitrary and senseless. Hardy implies that war forces ordinary people to kill mirror images of themselves.',
        poemBPoint: 'Levertov implies that the destruction of a culture is a crime beyond war.',
        poemBEvidence:
          '"their light hearts turned to stone" \u2014 the metaphor suggests permanent, irreversible damage.',
        poemBAnalysis:
          'The shift from "light" to "stone" suggests a total transformation: not just death, but the destruction of joy, art and identity.',
        comparison:
          'Hardy focuses on the individual moral cost of killing; Levertov focuses on the collective cultural cost. Together, they show war as an assault on both the personal and the civilisational.',
      },
    ],
    conclusion:
      'Both Hardy and Levertov strip away any justification for war, but from different angles. Hardy\u2019s quiet, bewildered speaker finds no logic in killing a fellow human; Levertov\u2019s structured lament finds no justification for destroying a civilisation. Both leave the reader with unanswered questions.',
    examTip:
      'What Were They Like? is copyrighted, so keep quotations brief. Focus on the Q&A structure and its effects rather than long extracts.',
  },
  /* ─── Time and Place cluster plans ────────────────────────────── */
  {
    id: 6,
    title: 'Two views of the same city',
    cluster: 'Time and Place',
    poemA: 'Composed Upon Westminster Bridge',
    poetA: 'William Wordsworth',
    poemB: 'London',
    poetB: 'William Blake',
    question: 'Compare how the poets present the city of London.',
    thesis:
      'Wordsworth presents an idealised London at dawn, silent and beautiful, while Blake presents a London of suffering, oppression and moral corruption. Both are Romantics, but they see utterly different cities.',
    paragraphs: [
      {
        topic: 'First impressions of the city',
        poemAPoint: 'Wordsworth is overwhelmed by London\u2019s beauty at dawn.',
        poemAEvidence:
          '"Earth has not anything to show more fair" \u2014 the hyperbole places London above all natural scenery.',
        poemAAnalysis:
          'The Petrarchan sonnet form gives the poem a sense of control and classical beauty. The superlative "not anything... more fair" is a deliberate shock from a Romantic poet who usually celebrates nature.',
        poemBPoint: 'Blake is overwhelmed by London\u2019s suffering.',
        poemBEvidence:
          '"I wander thro\u2019 each charter\u2019d street, / Near the charter\u2019d Thames" \u2014 the repetition of "charter\u2019d" exposes institutional control.',
        poemBAnalysis:
          'The word "charter\u2019d" is politically loaded: it means mapped, owned and controlled. Even the river \u2014 a natural feature \u2014 has been claimed by authority.',
        comparison:
          'Wordsworth sees a city freed from its inhabitants at dawn; Blake sees a city defined by the suffering of its inhabitants. Wordsworth\u2019s London is beautiful because it is empty; Blake\u2019s is terrible because it is full.',
      },
      {
        topic: 'The role of the speaker',
        poemAPoint: 'Wordsworth is a passive observer, standing still on the bridge.',
        poemAEvidence:
          '"Ne\u2019er saw I, never felt, a calm so deep!" \u2014 the speaker is emotionally moved but physically stationary.',
        poemAAnalysis:
          'The sonnet\u2019s volta at line 9 shifts from description to personal feeling, but Wordsworth remains a spectator. His London is a painting, not a lived experience.',
        poemBPoint: 'Blake is an active walker, moving through the streets.',
        poemBEvidence:
          '"I wander thro\u2019 each charter\u2019d street" \u2014 the verb "wander" implies both movement and aimlessness.',
        poemBAnalysis:
          'Blake\u2019s walking forces direct contact with suffering. The repeated "I hear... I hear" makes the speaker a witness, not a tourist.',
        comparison:
          'Wordsworth looks down from a bridge (literally above the city); Blake walks through its streets (literally among the people). Their physical positions reflect their social perspectives.',
      },
      {
        topic: 'The natural world within the city',
        poemAPoint: 'Wordsworth sees nature and city as harmonious.',
        poemAEvidence:
          '"The river glideth at his own sweet will" \u2014 the Thames is free and natural.',
        poemAAnalysis:
          'Personifying the river as free suggests a London at peace with nature. The verb "glideth" is gentle and effortless.',
        poemBPoint: 'Blake sees the natural world as corrupted.',
        poemBEvidence: '"the charter\u2019d Thames" \u2014 even the river is owned and controlled.',
        poemBAnalysis:
          'Where Wordsworth\u2019s Thames glides freely, Blake\u2019s Thames is "charter\u2019d" \u2014 mapped, taxed and enclosed. Nature in Blake\u2019s London has been claimed by power.',
        comparison:
          'The Thames is the perfect comparison point: Wordsworth and Blake describe the same river at roughly the same period but see completely opposite things. The difference is not what they see but how they see it.',
      },
    ],
    conclusion:
      'Wordsworth and Blake offer complementary halves of Romantic London. Wordsworth captures a moment of transcendent beauty in a sleeping city; Blake exposes the suffering that the sleeping city conceals. Read together, they reveal that beauty and injustice can coexist in the same place.',
    examTip:
      'These poems were written within about 5 years of each other. Noting the similar time period but opposite perspectives is a strong contextual point that avoids "bolted-on" context.',
  },
  {
    id: 7,
    title: 'How place shapes identity',
    cluster: 'Time and Place',
    poemA: 'Presents from my Aunts in Pakistan',
    poetA: 'Moniza Alvi',
    poemB: 'Hurricane Hits England',
    poetB: 'Grace Nichols',
    question: 'Compare how the poets explore the relationship between place and identity.',
    thesis:
      'Alvi presents cultural identity as fractured and unresolved, caught between two homelands, while Nichols presents a moment where a violent natural event reconnects the speaker to her Caribbean roots in England.',
    paragraphs: [
      {
        topic: 'The speaker\u2019s relationship to a distant homeland',
        poemAPoint:
          'Alvi\u2019s speaker is drawn to Pakistani culture but feels she cannot fully belong to it.',
        poemAEvidence:
          '"I could never be as lovely / as those clothes" \u2014 the clothes represent a culture she admires but feels excluded from.',
        poemAAnalysis:
          'The comparative "as lovely as" creates a gap between the speaker and the cultural objects. She can wear the clothes but not inhabit the identity they represent.',
        poemBPoint:
          'Nichols\u2019s speaker has buried her Caribbean identity until the storm arrives.',
        poemBEvidence:
          '"Tell me why you visit / An English coast?" \u2014 the speaker questions the hurricane directly.',
        poemBAnalysis:
          'The direct address to the hurricane personifies it as a messenger from the Caribbean. The question reveals the speaker\u2019s surprise that her past has followed her.',
        comparison:
          'Both speakers are migrants navigating between cultures, but Alvi\u2019s speaker cannot reconcile the two, while Nichols\u2019s speaker finds an unexpected bridge between them.',
      },
      {
        topic: 'How objects and nature carry cultural meaning',
        poemAPoint: 'Alvi uses the clothes as symbols of cultural identity.',
        poemAEvidence:
          '"My salwar kameez / didn\u2019t impress the schoolfriend" \u2014 the clothes attract attention and mark difference.',
        poemAAnalysis:
          'The contrast between Pakistani garments and English school life makes cultural difference visible and tangible. The "schoolfriend" represents the gaze of English society.',
        poemBPoint:
          'Nichols uses the hurricane as a living, spiritual connection to the Caribbean.',
        poemBEvidence:
          '"Talk to me Huracan / Talk to me Oya / Talk to me Shango" \u2014 the hurricane is addressed by Caribbean deity names.',
        poemBAnalysis:
          'The invocation of Caribbean storm gods transforms the weather event into a spiritual reunion. The imperative "Talk to me" expresses a longing for reconnection.',
        comparison:
          'Alvi\u2019s objects (clothes, jewellery) are static and create difference; Nichols\u2019s natural force (the hurricane) is dynamic and creates connection. Both poets use concrete, sensory details to explore abstract questions of belonging.',
      },
      {
        topic: 'Resolution and the question of belonging',
        poemAPoint: 'Alvi\u2019s poem ends without resolution.',
        poemAEvidence:
          '"I was there of no fixed nationality" \u2014 the speaker remains between two worlds.',
        poemAAnalysis:
          'The phrase "no fixed nationality" echoes "no fixed abode" \u2014 language associated with homelessness. Alvi suggests that cultural hybridity is not always enriching; it can be alienating.',
        poemBPoint: 'Nichols\u2019s poem ends with a moment of reconciliation.',
        poemBEvidence:
          '"the earth is the earth is the earth" \u2014 the final repetition insists on unity.',
        poemBAnalysis:
          'The tautology is not redundant but revelatory: the earth is the same everywhere, and the speaker can belong to both places because they share the same ground.',
        comparison:
          'Alvi\u2019s open ending is honest about the difficulty of dual identity; Nichols\u2019s closing affirmation is hopeful. Together they represent two possible outcomes of the migrant experience.',
      },
    ],
    conclusion:
      'Both Alvi and Nichols write about the migrant experience of being caught between cultures, but they reach different conclusions. Alvi\u2019s fragmented, image-rich free verse mirrors a fragmented identity; Nichols\u2019s rhythmic, incantatory style enacts the spiritual reconnection she describes.',
    examTip:
      'Both poems are copyrighted. Keep quotations short and focus on analysing the effect of individual words and images rather than quoting long passages.',
  },
  {
    id: 8,
    title: 'Memory, loss and returning to a place',
    cluster: 'Time and Place',
    poemA: 'Where the Picnic was',
    poetA: 'Thomas Hardy',
    poemB: 'Absence',
    poetB: 'Elizabeth Jennings',
    question:
      'Compare how the poets present the experience of returning to a place associated with loss.',
    thesis:
      'Hardy presents a bleak return to a picnic site where everything has decayed, emphasising time\u2019s destruction of happiness, while Jennings presents a return to a familiar place made unbearable by the absence of a loved one.',
    paragraphs: [
      {
        topic: 'How the poets establish the setting of return',
        poemAPoint:
          'Hardy returns to the exact spot of a past picnic and finds it transformed by time.',
        poemAEvidence:
          '"Where we made the fire / In the summer time / Of branch and briar" \u2014 the simple past tense marks a lost time.',
        poemAAnalysis:
          'The short, clipped lines and simple diction give the description a stark, factual quality, as if the speaker is cataloguing what remains. The monosyllables slow the reading and create a heavy mood.',
        poemBPoint: 'Jennings returns to a place that looks the same but feels utterly different.',
        poemBEvidence:
          '"I visited the place where we last met" \u2014 the plain opening establishes the situation simply.',
        poemBAnalysis:
          'The past tense of "last met" already signals loss. The ordinariness of the language contrasts with the intensity of the emotion beneath it.',
        comparison:
          'Both poets use plain, restrained language to describe the return, letting the weight of feeling emerge through understatement rather than dramatic declaration.',
      },
      {
        topic: 'How the poets convey the gap between past and present',
        poemAPoint: 'Hardy emphasises physical decay to represent emotional loss.',
        poemAEvidence:
          '"the ashes are / A ghost of that day\u2019s fire" \u2014 the metaphor links the dead fire to dead happiness.',
        poemAAnalysis:
          'The word "ghost" is carefully chosen: it suggests something that was once alive now haunts the place. The fire is both literal (picnic remains) and metaphorical (warmth of the relationship).',
        poemBPoint: 'Jennings finds the place unchanged, which makes the absence worse.',
        poemBEvidence: '"Nothing was changed" \u2014 but everything feels different.',
        poemBAnalysis:
          'The paradox that nothing has changed yet everything is different captures the experience of grief: the world carries on indifferently while the bereaved person is transformed.',
        comparison:
          'Hardy shows time changing the landscape to match the speaker\u2019s grief; Jennings shows the landscape refusing to change, which intensifies it. Both approaches make the landscape a mirror of emotional experience.',
      },
      {
        topic: 'How the poems end',
        poemAPoint: 'Hardy\u2019s poem ends with a sense of complete desolation.',
        poemAEvidence:
          'The final image is of the bare, windswept site with no trace of the gathering.',
        poemAAnalysis:
          'The poem\u2019s circular structure \u2014 returning to the picnic site only to find emptiness \u2014 suggests that revisiting the past offers no comfort, only confirmation of loss.',
        poemBPoint: 'Jennings\u2019s poem ends with the pain of presence without the person.',
        poemBEvidence:
          '"The loss of what I had felt most" \u2014 the emphasis falls on feeling rather than the person.',
        poemBAnalysis:
          'Jennings focuses on the subjective experience of loss rather than its cause. The abstraction makes the poem universal: it could apply to any kind of absence.',
        comparison:
          'Both endings refuse consolation. Hardy finds decay; Jennings finds unbearable familiarity. Neither poet offers the comfort of nostalgia \u2014 the return to a loved place only sharpens the sense of what has been lost.',
      },
    ],
    conclusion:
      'Hardy and Jennings both explore the pain of returning to a place associated with happier times, but Hardy emphasises physical change while Jennings emphasises psychological change. Together, they show that loss transforms not just how we feel but how we see the world around us.',
    examTip:
      'Absence is copyrighted \u2014 keep quotations very short. Emphasise the contrast between physical permanence and emotional change, which works well without extended quotation.',
  },
  {
    id: 9,
    title: 'The beauty and threat of the natural world',
    cluster: 'Time and Place',
    poemA: 'To Autumn',
    poetA: 'John Keats',
    poemB: 'I started Early \u2013 Took my Dog',
    poetB: 'Emily Dickinson',
    question: 'Compare how the poets present the natural world.',
    thesis:
      'Keats presents autumn as a season of rich, sensuous fulfilment, accepting its closeness to death, while Dickinson presents the sea as an alluring but dangerous force that threatens to overwhelm the speaker.',
    paragraphs: [
      {
        topic: 'How the poets use personification',
        poemAPoint: 'Keats personifies Autumn as a benign, drowsy figure.',
        poemAEvidence:
          '"sitting careless on a granary floor, / Thy hair soft-lifted by the winnowing wind" \u2014 Autumn is a relaxed harvest worker.',
        poemAAnalysis:
          'The languid, unhurried image of Autumn sitting "careless" suggests abundance without effort. The soft sibilance creates a feeling of warmth and contentment.',
        poemBPoint: 'Dickinson personifies the sea as a pursuer with almost romantic intentions.',
        poemBEvidence:
          '"But no Man moved Me \u2013 till the Tide / Went past my simple Shoe" \u2014 the sea encroaches on the speaker\u2019s body.',
        poemBAnalysis:
          'Dickinson\u2019s dashes create a breathless pace, and the sea\u2019s advance past the "simple Shoe" is both playful and threatening. The word "simple" emphasises the speaker\u2019s vulnerability.',
        comparison:
          'Keats\u2019s personified Autumn is passive and generous; Dickinson\u2019s personified sea is active and aggressive. Both use personification to explore the boundary between beauty and danger in nature.',
      },
      {
        topic: 'The speaker\u2019s position in relation to nature',
        poemAPoint: 'Keats\u2019s speaker is an observer who accepts nature\u2019s cycle.',
        poemAEvidence:
          '"Where are the songs of Spring? Ay, where are they? / Think not of them, thou hast thy music too" \u2014 the speaker counsels acceptance.',
        poemAAnalysis:
          'The rhetorical question about spring is immediately answered: autumn has its own beauty. Keats argues that every stage of the natural cycle deserves appreciation, even the one closest to death.',
        poemBPoint: 'Dickinson\u2019s speaker is drawn into nature against her will.',
        poemBEvidence:
          '"He followed \u2013 close behind \u2013 / I felt His Silver Heel / Upon my Ankle" \u2014 the sea pursues the speaker up the beach.',
        poemBAnalysis:
          'The enjambment and dashes create a sense of breathless retreat. The "Silver Heel" is beautiful but threatening \u2014 Dickinson refuses to separate attraction from danger.',
        comparison:
          'Keats contemplates nature from a position of calm acceptance; Dickinson is physically chased by it. The difference reflects Romantic serenity versus a more modern, ambivalent relationship with the natural world.',
      },
      {
        topic: 'How form and structure support meaning',
        poemAPoint:
          'Keats uses three stanzas to trace autumn\u2019s progression from abundance to decline.',
        poemAEvidence:
          'Stanza 1: ripeness and harvest. Stanza 2: the figure of Autumn resting. Stanza 3: the sounds of evening.',
        poemAAnalysis:
          'The three-stanza arc mirrors a single day (morning to evening) and a single season (early to late autumn). The gradual movement towards silence and darkness is accepted, not resisted.',
        poemBPoint: 'Dickinson uses a narrative arc from curiosity to threat to escape.',
        poemBEvidence:
          'The poem begins with a walk, escalates to a chase, and ends with the sea\u2019s retreat at the "Solid Town".',
        poemBAnalysis:
          'The narrative structure gives the poem the feel of a fable or dream. The "Solid Town" at the end represents safety, but the speaker has been changed by the encounter.',
        comparison:
          'Keats\u2019s structure is cyclical and meditative; Dickinson\u2019s is linear and dramatic. Both use form to mirror their theme: Keats accepts nature\u2019s rhythm, Dickinson dramatises nature\u2019s threat.',
      },
    ],
    conclusion:
      'Keats and Dickinson both find beauty in the natural world, but their responses differ fundamentally. Keats\u2019s acceptance of autumn\u2019s passing reflects the Romantic ideal of living in harmony with nature; Dickinson\u2019s fearful fascination reflects a more complex, modern awareness that nature is not always benign.',
    examTip:
      'Compare the use of dashes (Dickinson) and enjambment (Keats) as structural choices that reflect different relationships with nature. This is a strong technical point for the top bands.',
  },
  {
    id: 10,
    title: 'Nostalgia and longing for home',
    cluster: 'Time and Place',
    poemA: 'Home Thoughts from Abroad',
    poetA: 'Robert Browning',
    poemB: 'Adlestrop',
    poetB: 'Edward Thomas',
    question: 'Compare how the poets present feelings of longing for a particular place.',
    thesis:
      'Browning expresses an explicit, joyful longing for an idealised English spring, while Thomas captures a fleeting, unplanned moment of stillness that expands into a quiet love for the English countryside.',
    paragraphs: [
      {
        topic: 'How the poets establish the moment of longing',
        poemAPoint: 'Browning\u2019s longing is stated directly and enthusiastically.',
        poemAEvidence:
          '"Oh, to be in England / Now that April\u2019s there" \u2014 the exclamation opens the poem with unashamed yearning.',
        poemAAnalysis:
          'The exclamatory "Oh" and the present tense "April\u2019s there" make the longing feel immediate and urgent. The speaker imagines England in the present tense while he is physically absent.',
        poemBPoint: 'Thomas\u2019s longing emerges from an accidental stop.',
        poemBEvidence:
          '"Yes. I remember Adlestrop \u2014 / The name, because one afternoon / Of heat the express-train drew up there / Unwontedly" \u2014 the memory is triggered by the name.',
        poemBAnalysis:
          'The word "unwontedly" (unusually) signals that this moment was unplanned. Thomas\u2019s longing is not for a grand landscape but for an ordinary station glimpsed in passing \u2014 which makes it more poignant.',
        comparison:
          'Browning chooses to long for England; Thomas stumbles into longing through an accidental memory. Both approaches are sincere, but Browning is passionate while Thomas is contemplative.',
      },
      {
        topic: 'How the poets idealise the English landscape',
        poemAPoint: 'Browning lists specific English sights with intense detail.',
        poemAEvidence:
          '"the whitethroat / Hark, where my blossomed pear-tree in the hedge / Leans to the field" \u2014 the details are precise and personal.',
        poemAAnalysis:
          'The specificity of "whitethroat" and "pear-tree" makes the longing concrete. Browning is not homesick for England in general but for particular, remembered details.',
        poemBPoint: 'Thomas expands from a small station to all of England.',
        poemBEvidence:
          '"And for that minute a blackbird sang / Close by, and round him, mistier, / Farther and farther, all the birds / Of Oxfordshire and Gloucestershire" \u2014 the sound radiates outward.',
        poemBAnalysis:
          'The expanding concentric circles of birdsong turn a single blackbird into a symbol of the entire English countryside. The enjambment enacts the widening scope.',
        comparison:
          'Browning works from the particular to the emotional; Thomas works from the particular to the universal. Both suggest that love of place begins with small, specific details.',
      },
      {
        topic: 'The tone and mood at the poems\u2019 close',
        poemAPoint: 'Browning ends with breathless excitement.',
        poemAEvidence:
          '"That\u2019s the wise thrush; he sings each song twice over" \u2014 the speaker delights in the thought of birdsong.',
        poemAAnalysis:
          'The confident, declarative "That\u2019s the wise thrush" is the tone of someone savouring a mental picture. The semicolon creates a satisfying pause before the bird sings again.',
        poemBPoint: 'Thomas ends with a quiet, almost melancholy hush.',
        poemBEvidence:
          'The final line ("all the birds / Of Oxfordshire and Gloucestershire") trails off into silence.',
        poemBAnalysis:
          'There is no exclamation or closure. The poem simply fades, like the memory itself. The beauty Thomas captures is inseparable from its transience.',
        comparison:
          'Browning\u2019s ending is celebratory; Thomas\u2019s is elegiac. Written before and during the First World War respectively, they represent two different Englands: one confident and one already beginning to disappear.',
      },
    ],
    conclusion:
      'Both Browning and Thomas love the English landscape, but Browning\u2019s love is exuberant and confident while Thomas\u2019s is wistful and fragile. Thomas, writing on the eve of war, captures an England he senses may not survive \u2014 which gives Adlestrop its distinctive, haunting quality.',
    examTip:
      'Thomas wrote Adlestrop in 1917, shortly before he was killed in action. Mentioning this context enriches the poem\u2019s atmosphere of fragile beauty without being "bolted on".',
  },
]

/* ── Collapsible essay-plan card ────────────────────────────────── */

function EssayPlanCard({ plan }: { plan: EssayPlan }) {
  const [open, setOpen] = useState(false)

  const clusterColour =
    plan.cluster === 'Conflict'
      ? 'bg-red-500/15 text-red-300 border-red-500/20'
      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20'

  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
      {/* Header (always visible) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-accent/30"
      >
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${clusterColour}`}
            >
              {plan.cluster === 'Conflict' ? (
                <Swords className="mr-1 size-3" />
              ) : (
                <MapPin className="mr-1 size-3" />
              )}
              {plan.cluster}
            </span>
            <Badge variant="outline" className="text-[0.6rem]">
              Plan {plan.id}
            </Badge>
          </div>
          <h3 className="text-heading-md font-heading text-foreground">{plan.title}</h3>
          <p className="mt-1 text-body-sm text-muted-foreground">
            {plan.poemA} ({plan.poetA}) &amp; {plan.poemB} ({plan.poetB})
          </p>
        </div>
        {open ? (
          <ChevronUp className="size-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="size-5 shrink-0 text-muted-foreground" />
        )}
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-border/40 p-5 sm:p-6 space-y-6">
          {/* Question */}
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-4">
            <p className="text-body-sm font-medium text-foreground mb-1">Exam-style question</p>
            <p className="text-body-sm text-muted-foreground italic">
              &ldquo;{plan.question}&rdquo;
            </p>
          </div>

          {/* Thesis */}
          <div>
            <p className="text-caption font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Thesis / argument
            </p>
            <p className="text-body-sm text-muted-foreground leading-relaxed">{plan.thesis}</p>
          </div>

          {/* Paragraphs */}
          <div className="space-y-5">
            {plan.paragraphs.map((para, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/40 bg-muted/20 p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground">{para.topic}</h4>
                </div>

                {/* Poem A */}
                <div className="space-y-1 pl-8">
                  <p className="text-caption font-semibold text-foreground">{plan.poemA}</p>
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-foreground">Point:</strong> {para.poemAPoint}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-foreground">Evidence:</strong> {para.poemAEvidence}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-foreground">Analysis:</strong> {para.poemAAnalysis}
                  </p>
                </div>

                {/* Poem B */}
                <div className="space-y-1 pl-8">
                  <p className="text-caption font-semibold text-foreground">{plan.poemB}</p>
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-foreground">Point:</strong> {para.poemBPoint}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-foreground">Evidence:</strong> {para.poemBEvidence}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-foreground">Analysis:</strong> {para.poemBAnalysis}
                  </p>
                </div>

                {/* Comparison */}
                <div className="pl-8 rounded-lg border border-primary/20 bg-primary/[0.04] p-3">
                  <p className="text-body-sm text-muted-foreground">
                    <strong className="text-primary">Compare:</strong> {para.comparison}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div>
            <p className="text-caption font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Conclusion
            </p>
            <p className="text-body-sm text-muted-foreground leading-relaxed">{plan.conclusion}</p>
          </div>

          {/* Exam tip */}
          <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-600" />
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Exam tip:</strong> {plan.examTip}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Page component ─────────────────────────────────────────────── */

export default function EdexcelEssayPlansPage() {
  const [filter, setFilter] = useState<'all' | 'Conflict' | 'Time and Place'>('all')

  const t = useT()

  const filtered = filter === 'all' ? ESSAY_PLANS : ESSAY_PLANS.filter((p) => p.cluster === filter)

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('poetry_hub.edexcel.back_to_anthology')}
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {t('poetry_hub.edexcel.badge_spec_short')}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">Edexcel</Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
              <FileText className="size-6 text-primary" />
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              {t('rev.poetry2.edexcel.ep.title')}
            </h1>
          </div>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('rev.poetry2.edexcel.ep.lead')}
          </p>
        </div>
      </section>

      {/* ── Exam context ────────────────────────────────────────── */}
      <section className="flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
        <BookOpen className="mt-0.5 size-4 shrink-0 text-blue-400" />
        <p className="text-body-sm text-muted-foreground">
          In <strong className="text-foreground">Paper 2, Section A</strong> you will be given a
          named poem and asked to compare it with one of your own choice from the same cluster.
          These plans practise exactly that skill. Adapt each plan to whatever poem the exam names
          &mdash; the comparative frameworks transfer.
        </p>
      </section>

      {/* ── Cluster filter ──────────────────────────────────────── */}
      <section className="flex flex-wrap gap-2">
        {(['all', 'Conflict', 'Time and Place'] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? (
              t('rev.poetry2.edexcel.ep.filter_all')
            ) : f === 'Conflict' ? (
              <>
                <Swords className="mr-1 size-3" /> {t('poetry_hub.edexcel.cluster.conflict.title')}
              </>
            ) : (
              <>
                <MapPin className="mr-1 size-3" /> {t('poetry_hub.edexcel.cluster.tp.title')}
              </>
            )}
          </Button>
        ))}
      </section>

      {/* ── Essay plans ─────────────────────────────────────────── */}
      <section className="space-y-4">
        {filtered.map((plan) => (
          <EssayPlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      {/* ── How to use these plans ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Lightbulb className="size-5 text-clay-600" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            {t('poetry_hub.edexcel.ep.how_title')}
          </h2>
        </div>
        <ul className="space-y-2 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <span>
              <strong className="text-foreground">Read the thesis first</strong> &mdash; it tells
              you the argument the whole essay will make. Every paragraph should link back to it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <span>
              <strong className="text-foreground">Practise the comparison sentences</strong> &mdash;
              the green &ldquo;Compare&rdquo; boxes show you how to link the two poems within a
              single paragraph.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <span>
              <strong className="text-foreground">Swap in your own poem</strong> &mdash; if the exam
              names a different poem, keep the same comparative framework and replace one side of
              the comparison.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <span>
              <strong className="text-foreground">Time yourself</strong> &mdash; aim for 35&ndash;40
              minutes on the comparison question. These plans are designed to be writable in that
              time.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
