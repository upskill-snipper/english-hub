'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  FileText,
  GitCompareArrows,
  ChevronDown,
  Lightbulb,
  Quote,
  Info,
  PenLine,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/* ── Essay plan data ─────────────────────────────────────────────── */

interface EssayPlan {
  id: number
  title: string
  theme: string
  poemA: string
  poetA: string
  poemB: string
  poetB: string
  thesis: string
  paragraphs: {
    topic: string
    poemAPoint: string
    poemAEvidence: string
    poemBPoint: string
    poemBEvidence: string
    comparison: string
  }[]
  conclusion: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    id: 1,
    title: 'Contrasting Views of War',
    theme: 'War & Conflict',
    poemA: 'Dulce et Decorum Est',
    poetA: 'Wilfred Owen',
    poemB: 'The Soldier',
    poetB: 'Rupert Brooke',
    thesis:
      'Both Owen and Brooke write about dying in war, yet they present completely opposing views: Owen exposes the horror and futility of conflict, while Brooke romanticises sacrifice and patriotic duty.',
    paragraphs: [
      {
        topic: 'How each poet presents the reality of death in war',
        poemAPoint:
          'Owen uses graphic, visceral imagery to show death as horrifying and undignified.',
        poemAEvidence:
          '"the blood / Come gargling from the froth-corrupted lungs" -- the medical detail forces the reader to confront the physical reality of a gas attack.',
        poemBPoint:
          'Brooke presents death as a noble transformation, almost a spiritual cleansing.',
        poemBEvidence:
          '"a body of England\'s" -- the soldier\'s body becomes part of the English landscape, making death seem peaceful and purposeful.',
        comparison:
          'Where Owen uses repulsive imagery to shock, Brooke uses idealised imagery to comfort. Owen\'s dying soldier is anonymous and suffering; Brooke\'s is elevated and at peace.',
      },
      {
        topic: 'The tone and attitude towards patriotism',
        poemAPoint:
          'Owen directly attacks the idea that dying for one\'s country is honourable.',
        poemAEvidence:
          '"The old Lie: Dulce et decorum est / Pro patria mori" -- by calling patriotism a "Lie" (capitalised), Owen rejects the entire propaganda machine.',
        poemBPoint:
          'Brooke celebrates patriotism and frames England as a nurturing mother worth dying for.',
        poemBEvidence:
          '"A dust whom England bore, shaped, made aware" -- the personification of England as a parent creates warmth and gratitude.',
        comparison:
          'Owen and Brooke represent the two dominant responses to World War I: disillusionment (Owen fought in the trenches) and idealism (Brooke died early, before experiencing front-line horror).',
      },
      {
        topic: 'Form and structure as tools for persuasion',
        poemAPoint:
          'Owen uses a fractured sonnet form and a direct address to the reader.',
        poemAEvidence:
          '"If you could hear, at every jolt, the blood" -- the second-person address implicates the reader, making the poem feel like an accusation.',
        poemBPoint:
          'Brooke uses a traditional Petrarchan sonnet with a smooth, reassuring rhythm.',
        poemBEvidence:
          'The regular iambic pentameter and gentle rhyme scheme ("me" / "be") create a hymn-like quality, reinforcing the idea that death in war is sacred.',
        comparison:
          'Owen deliberately breaks the sonnet form to mirror the chaos of war, while Brooke\'s adherence to tradition reflects his belief that patriotic sacrifice is orderly and meaningful.',
      },
    ],
    conclusion:
      'Owen and Brooke offer two irreconcilable visions of war. Owen\'s graphic realism serves as an anti-war protest, while Brooke\'s idealism reflects the pre-war innocence that the trenches would destroy. Together, they demonstrate how poetry can be used both to challenge and to reinforce dominant ideologies.',
  },
  {
    id: 2,
    title: 'The Power of Nature',
    theme: 'Nature',
    poemA: 'The Prelude: stealing the boat',
    poetA: 'William Wordsworth',
    poemB: 'To Autumn',
    poetB: 'John Keats',
    thesis:
      'Both Wordsworth and Keats are Romantic poets who present nature as a powerful force, yet their approaches differ: Wordsworth shows nature as sublime and terrifying, while Keats celebrates its gentle abundance and quiet inevitability.',
    paragraphs: [
      {
        topic: 'How nature is personified and characterised',
        poemAPoint:
          'Wordsworth personifies nature as a menacing, almost parental figure that punishes transgression.',
        poemAEvidence:
          '"a huge peak, black and huge... / Strode after me" -- the mountain appears to pursue the boy, as though nature itself is a conscious, punishing force.',
        poemBPoint:
          'Keats personifies autumn as a benign, languid companion, resting amid its own abundance.',
        poemBEvidence:
          '"sitting careless on a granary floor" -- autumn is depicted as relaxed and generous, a figure of contentment rather than threat.',
        comparison:
          'Both poets give nature human qualities, but the emotional effect is opposite: Wordsworth inspires awe and fear; Keats inspires warmth and acceptance.',
      },
      {
        topic: 'The speaker\'s emotional journey',
        poemAPoint:
          'Wordsworth traces a shift from confidence to terror to lasting psychological change.',
        poemAEvidence:
          '"for many days, my brain / Worked with a dim and undetermined sense" -- the encounter with the mountain leaves the speaker permanently altered.',
        poemBPoint:
          'Keats moves from abundance through harvest to a quiet acceptance of endings.',
        poemBEvidence:
          '"Where are the songs of Spring? Ay, where are they?" -- this rhetorical question acknowledges loss but answers it with acceptance, not grief.',
        comparison:
          'Wordsworth\'s speaker is changed by a single dramatic moment; Keats\'s speaker gradually comes to terms with the natural cycle. Both show nature shaping human consciousness.',
      },
      {
        topic: 'Structure and how it mirrors natural processes',
        poemAPoint:
          'Wordsworth uses enjambment and building rhythm to create a sense of escalating fear.',
        poemAEvidence:
          'The lines lengthen as the mountain grows, and the enjambment across "Upreared its head" forces the reader onward without pause, mirroring the boy\'s rising panic.',
        poemBPoint:
          'Keats uses three regular stanzas to mirror the three stages of autumn: ripening, harvesting, and fading.',
        poemBEvidence:
          'The movement from "mellow fruitfulness" (stanza 1) to "soft-dying day" (stanza 3) mirrors the natural arc of the season.',
        comparison:
          'Both poets use structure to embody their subject: Wordsworth\'s escalating verse enacts the mountain\'s growing presence, while Keats\'s orderly stanzas reflect autumn\'s measured progression.',
      },
    ],
    conclusion:
      'Wordsworth and Keats both reveal the power of nature, but through different lenses. Wordsworth\'s sublime terror reminds the reader of human smallness, while Keats\'s sensuous acceptance celebrates nature\'s cyclical beauty. Both poems demonstrate the Romantic belief that nature is the supreme teacher.',
  },
  {
    id: 3,
    title: 'Loss and Suffering in Wartime',
    theme: 'War & Conflict',
    poemA: 'A Wife in London',
    poetA: 'Thomas Hardy',
    poemB: 'Dulce et Decorum Est',
    poetB: 'Wilfred Owen',
    thesis:
      'Both Hardy and Owen present the devastating human cost of war, but from different perspectives: Hardy reveals the anguish of those left behind at home, while Owen exposes the suffering of soldiers on the front line.',
    paragraphs: [
      {
        topic: 'The use of irony to expose war\'s cruelty',
        poemAPoint:
          'Hardy uses structural dramatic irony, delivering the death telegram before the hopeful letter.',
        poemAEvidence:
          '"his hand, whom the worm now knows" -- the wife reads her husband\'s cheerful letter after learning he is dead, a devastating sequence that amplifies her grief.',
        poemBPoint:
          'Owen uses verbal irony in the Latin title to expose the gap between propaganda and reality.',
        poemBEvidence:
          '"The old Lie: Dulce et decorum est / Pro patria mori" -- Owen labels the patriotic maxim a lie, using the rhetoric of the establishment against itself.',
        comparison:
          'Both poets deploy irony as a weapon against war, but Hardy\'s irony is situational (the cruel timing of letters), while Owen\'s is explicitly political (attacking the propaganda machine).',
      },
      {
        topic: 'How setting intensifies the emotional impact',
        poemAPoint:
          'Hardy uses the foggy, oppressive London setting to mirror the wife\'s isolation and despair.',
        poemAEvidence:
          '"She sits in the tawny vapour / That the Thames-side lanes have uprolled" -- the fog becomes a physical manifestation of her grief, suffocating and impenetrable.',
        poemBPoint:
          'Owen places the reader directly in the trenches, using the chaotic battlefield as a setting for horror.',
        poemBEvidence:
          '"Bent double, like old beggars under sacks" -- the opening line immediately establishes the degrading physical conditions of the front line.',
        comparison:
          'Hardy\'s still, enclosed setting mirrors grief that has nowhere to go; Owen\'s chaotic, open setting mirrors the uncontrollable violence of battle. Both settings become emotional landscapes.',
      },
      {
        topic: 'Form and structure to control the reader\'s experience',
        poemAPoint:
          'Hardy divides the poem into two acts, mirroring the two pieces of news the wife receives.',
        poemAEvidence:
          'The two-part structure (death telegram, then hopeful letter) forces the reader to experience the same cruel sequence as the wife.',
        poemBPoint:
          'Owen shifts from a marching rhythm to a panicked, irregular pace when the gas attack begins.',
        poemBEvidence:
          '"Gas! GAS! Quick, boys!" -- the sudden short exclamations break the weary rhythm, plunging the reader into chaos.',
        comparison:
          'Both poets manipulate structure to control timing: Hardy delays revelation for maximum impact, while Owen uses sudden acceleration to recreate the terror of combat.',
      },
    ],
    conclusion:
      'Hardy and Owen both indict war by showing its human cost, but from complementary angles. Hardy reveals the quiet, private devastation of bereavement at home; Owen forces the reader to witness front-line brutality. Together, they demonstrate that war destroys lives on every side of the conflict.',
  },
  {
    id: 4,
    title: 'Romantic vs Modern Love',
    theme: 'Love',
    poemA: 'Sonnet 43',
    poetA: 'Elizabeth Barrett Browning',
    poemB: 'Valentine',
    poetB: 'Carol Ann Duffy',
    thesis:
      'Both Barrett Browning and Duffy write passionately about love, yet their poems reflect the values of their eras: Barrett Browning embraces idealised, spiritual devotion, while Duffy insists on honesty and rejects romantic cliches.',
    paragraphs: [
      {
        topic: 'How each poet defines or measures love',
        poemAPoint:
          'Barrett Browning attempts to quantify love through abstract, spiritual measurements.',
        poemAEvidence:
          '"I love thee to the depth and breadth and height / My soul can reach" -- love is presented as infinite and boundless, measured in the language of faith.',
        poemBPoint:
          'Duffy defines love through a single concrete metaphor: an onion.',
        poemBEvidence:
          '"I give you an onion. / It is a moon wrapped in brown paper" -- the onion is honest, multi-layered, and unglamorous, reflecting Duffy\'s insistence on truth over sentimentality.',
        comparison:
          'Barrett Browning reaches for the transcendent; Duffy deliberately chooses the mundane. Both, however, are deeply sincere -- their definitions of love simply reflect different cultural expectations.',
      },
      {
        topic: 'Tone and the poet\'s attitude toward romantic conventions',
        poemAPoint:
          'Barrett Browning works within the sonnet tradition, embracing its associations with love poetry.',
        poemAEvidence:
          'The Petrarchan sonnet form, with its octave and sestet, places the poem in a tradition stretching back to Shakespeare and Petrarch -- Barrett Browning elevates her feelings by choosing this form.',
        poemBPoint:
          'Duffy deliberately rejects romantic conventions, opening with a refusal.',
        poemBEvidence:
          '"Not a red rose or a satin heart" -- the poem begins by dismissing the very symbols most love poems rely on, asserting that real love demands more honesty.',
        comparison:
          'Barrett Browning gains power by working within tradition; Duffy gains power by breaking from it. Both approaches, paradoxically, achieve emotional intensity.',
      },
      {
        topic: 'The darker side of love',
        poemAPoint:
          'Barrett Browning acknowledges death but frames it as a continuation of love, not a threat.',
        poemAEvidence:
          '"I shall but love thee better after death" -- love transcends mortality, suggesting a faith-based optimism.',
        poemBPoint:
          'Duffy warns that love is possessive and can cause pain.',
        poemBEvidence:
          '"Its fierce kiss will stay on your lips, / possessive and faithful" -- the onion\'s sting represents the inescapable intensity of real love, including its potential for hurt.',
        comparison:
          'Both poets acknowledge love\'s permanence, but Barrett Browning presents this as comforting, while Duffy presents it as unsettling. The Victorian poet finds reassurance in eternity; the modern poet finds a warning.',
      },
    ],
    conclusion:
      'Barrett Browning and Duffy both celebrate love with conviction, but their poems reveal how attitudes to romance have shifted. Barrett Browning\'s spiritual idealism reflects Victorian faith and decorum; Duffy\'s subversive honesty reflects a modern suspicion of sentimentality. Both, however, insist that love is profound and transformative.',
  },
  {
    id: 5,
    title: 'The Abuse of Power',
    theme: 'Power',
    poemA: 'Ozymandias',
    poetA: 'Percy Bysshe Shelley',
    poemB: 'London',
    poetB: 'William Blake',
    thesis:
      'Both Shelley and Blake critique the abuse of power, but through different strategies: Shelley uses the ruin of an ancient tyrant to show that all power is temporary, while Blake exposes the ongoing suffering caused by institutional power in his own society.',
    paragraphs: [
      {
        topic: 'How each poet presents those in power',
        poemAPoint:
          'Shelley presents the powerful as arrogant and ultimately irrelevant -- time erases even the mightiest ruler.',
        poemAEvidence:
          '"My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!" -- the boastful inscription survives, but all the "Works" have vanished, creating devastating dramatic irony.',
        poemBPoint:
          'Blake presents power as actively oppressive, controlled by institutions that profit from human suffering.',
        poemBEvidence:
          '"the mind-forg\'d manacles" -- Blake suggests that the powerful have imprisoned people not just physically, but psychologically, making them accept their own oppression.',
        comparison:
          'Shelley\'s critique is retrospective (power has already fallen); Blake\'s is urgent and present-tense (power is causing suffering now). Both, however, argue that tyrannical power is illegitimate.',
      },
      {
        topic: 'The role of setting and imagery',
        poemAPoint:
          'Shelley uses the vast, empty desert to symbolise the erasure of Ozymandias\'s empire.',
        poemAEvidence:
          '"The lone and level sands stretch far away" -- the final image is of nature reclaiming the land, indifferent to human ambition.',
        poemBPoint:
          'Blake uses the streets of London to show suffering at every turn.',
        poemBEvidence:
          '"I wander thro\' each charter\'d street, / Near where the charter\'d Thames does flow" -- the repetition of "charter\'d" suggests that even the river has been claimed and controlled by the powerful.',
        comparison:
          'Shelley\'s setting is distant and historical, creating a parable about all tyrants; Blake\'s setting is immediate and specific, creating an indictment of his own society. Both use place as a political statement.',
      },
      {
        topic: 'The poet\'s message about the future of power',
        poemAPoint:
          'Shelley implies that time and nature will always defeat human tyranny.',
        poemAEvidence:
          '"Nothing beside remains" -- three devastatingly simple words that demolish Ozymandias\'s legacy. The natural world outlasts all empires.',
        poemBPoint:
          'Blake implies that revolution or radical change is needed to end institutional oppression.',
        poemBEvidence:
          '"the hapless Soldier\'s sigh / Runs in blood down Palace walls" -- the image of blood on palace walls hints at revolution, suggesting that the suffering of the powerless will eventually threaten the powerful.',
        comparison:
          'Shelley trusts time to do the work of justice; Blake implies that human action is needed. Both poems serve as warnings to those who abuse power.',
      },
    ],
    conclusion:
      'Shelley and Blake both challenge the legitimacy of unchecked power, but from different temporal perspectives. Shelley offers a long-term philosophical view: all empires crumble. Blake offers an urgent political critique: people are suffering now. Together, they represent two essential modes of protest poetry.',
  },
  {
    id: 6,
    title: 'Nature and the Passage of Time',
    theme: 'Nature / Time',
    poemA: 'To Autumn',
    poetA: 'John Keats',
    poemB: 'As Imperceptibly as Grief',
    poetB: 'Emily Dickinson',
    thesis:
      'Both Keats and Dickinson explore the passing of summer into autumn as a metaphor for loss and change, but where Keats celebrates the beauty of the season\'s abundance, Dickinson traces its quiet, almost invisible departure.',
    paragraphs: [
      {
        topic: 'How each poet presents the transition of seasons',
        poemAPoint:
          'Keats shows autumn at its peak, overflowing with ripeness and warmth.',
        poemAEvidence:
          '"Season of mists and mellow fruitfulness" -- the opening line immediately establishes abundance. The sibilance and assonance create a sensuous, drowsy atmosphere.',
        poemBPoint:
          'Dickinson focuses on the moment summer slips away, so gradually it goes unnoticed.',
        poemBEvidence:
          '"As imperceptibly as Grief" -- the opening simile equates the departure of summer with the slow fading of grief, suggesting both are processes the mind barely registers.',
        comparison:
          'Keats captures fullness; Dickinson captures absence. Both recognise that seasons change, but Keats lingers in the present moment while Dickinson observes the moment of disappearance.',
      },
      {
        topic: 'Sensory imagery and emotional tone',
        poemAPoint:
          'Keats saturates the poem with rich sensory imagery -- sight, touch, taste, sound.',
        poemAEvidence:
          '"And full-grown lambs loud bleat from hilly bourn; / Hedge-crickets sing" -- the final stanza fills the air with autumn sounds, asserting that autumn has its own music.',
        poemBPoint:
          'Dickinson uses more abstract, elusive imagery that mirrors the theme of imperceptibility.',
        poemBEvidence:
          '"A quietness distilled" -- Dickinson\'s language is restrained and precise, matching the poem\'s subject: something so subtle it can barely be expressed.',
        comparison:
          'Keats\'s rich sensory detail makes the reader experience autumn physically; Dickinson\'s spare, abstract language makes the reader experience the feeling of something slipping away. Both achieve their emotional power through careful control of imagery.',
      },
      {
        topic: 'Attitude towards endings and mortality',
        poemAPoint:
          'Keats accepts endings with grace, arguing that autumn should not envy spring.',
        poemAEvidence:
          '"Where are the songs of Spring? Ay, where are they? / Think not of them, thou hast thy music too" -- Keats reassures autumn (and the reader) that every stage of life has its own value.',
        poemBPoint:
          'Dickinson presents departure as natural, peaceful, and even beautiful.',
        poemBEvidence:
          '"Our Summer made her light escape / Into the Beautiful" -- summer does not die but escapes gracefully into something greater, suggesting acceptance of the natural order.',
        comparison:
          'Both poets ultimately accept endings without bitterness. Keats finds consolation in the richness of the present; Dickinson finds consolation in the grace of departure. Both reflect a mature understanding of time.',
      },
    ],
    conclusion:
      'Keats and Dickinson both use the changing seasons to explore human responses to time and loss. Keats\'s sensuous celebration of autumn\'s abundance and Dickinson\'s quiet meditation on summer\'s departure complement each other perfectly, offering two ways of finding peace with impermanence.',
  },
  {
    id: 7,
    title: 'Patriotism and Sacrifice',
    theme: 'War & Conflict',
    poemA: 'The Soldier',
    poetA: 'Rupert Brooke',
    poemB: 'A Wife in London',
    poetB: 'Thomas Hardy',
    thesis:
      'Both Brooke and Hardy write about death during the Boer / First World War era, but they present completely different perspectives on sacrifice: Brooke idealises the soldier\'s death as noble patriotism, while Hardy reveals the devastating emotional reality for those left behind.',
    paragraphs: [
      {
        topic: 'How death is presented and framed',
        poemAPoint:
          'Brooke presents the soldier\'s death as a gift to England, transforming the body into sacred ground.',
        poemAEvidence:
          '"there\'s some corner of a foreign field / That is for ever England" -- death becomes a form of imperial expansion, with the soldier\'s body sanctifying the foreign soil.',
        poemBPoint:
          'Hardy presents death as a cruel blow delivered through impersonal bureaucracy.',
        poemBEvidence:
          '"He -- has fallen" -- the telegram\'s blunt, fragmented delivery mirrors the emotional shock. The dash creates a painful pause before the devastating word.',
        comparison:
          'Brooke\'s death is abstract and comforting; Hardy\'s is concrete and devastating. Brooke never shows the body or the grief; Hardy forces the reader to sit with the wife as she receives the news.',
      },
      {
        topic: 'The emotional perspective of each poem',
        poemAPoint:
          'Brooke writes from the soldier\'s own perspective, expressing calm acceptance and pride.',
        poemAEvidence:
          '"If I should die, think only this of me" -- the conditional "If" softens the reality, and the instruction to "think only this" controls the narrative, preventing grief or anger.',
        poemBPoint:
          'Hardy writes from the perspective of the wife, showing private, domestic grief.',
        poemBEvidence:
          '"She sits in the tawny vapour" -- the wife is passive, isolated, and overwhelmed. Hardy gives voice to those whom war propaganda typically ignores.',
        comparison:
          'Brooke\'s poem is a public statement of principle; Hardy\'s is an intimate portrait of private suffering. Brooke asks the reader to admire; Hardy asks the reader to mourn.',
      },
      {
        topic: 'Context and the poet\'s relationship with war',
        poemAPoint:
          'Brooke wrote before experiencing front-line combat and died of illness en route to Gallipoli.',
        poemAEvidence:
          'His idealised vision reflects pre-war enthusiasm. The poem was used as propaganda, read from the pulpit of St Paul\'s Cathedral at Easter 1915.',
        poemBPoint:
          'Hardy wrote during the Boer War and witnessed the gap between public patriotism and private grief.',
        poemBEvidence:
          'Hardy\'s two-part structure mirrors the cruel timing of wartime communication: death arrives before the last hopeful letter.',
        comparison:
          'Context is essential: Brooke\'s idealism was written before disillusionment set in; Hardy\'s realism reflects an older, more sceptical perspective. Both poems are products of their moment.',
      },
    ],
    conclusion:
      'Brooke and Hardy represent two poles of the wartime experience: the public ideal and the private reality. Brooke\'s sonnet offers the consolation of patriotic meaning; Hardy\'s poem strips that consolation away, revealing the raw human cost. An Eduqas comparison should examine how each poet\'s context shapes their message.',
  },
  {
    id: 8,
    title: 'Power and Human Arrogance',
    theme: 'Power / Nature',
    poemA: 'Ozymandias',
    poetA: 'Percy Bysshe Shelley',
    poemB: 'Hawk Roosting',
    poetB: 'Ted Hughes',
    thesis:
      'Both Shelley and Hughes explore the theme of absolute power and arrogance, but from contrasting angles: Shelley shows the inevitable collapse of human tyranny, while Hughes gives voice to a creature that embodies natural, unchallengeable dominance.',
    paragraphs: [
      {
        topic: 'How the powerful figure is presented',
        poemAPoint:
          'Ozymandias is presented indirectly, through ruins and a second-hand account, emphasising his irrelevance.',
        poemAEvidence:
          '"sneer of cold command" -- even the king\'s facial expression survives only because a sculptor carved it. The ruler is remembered through someone else\'s art, not through his own achievements.',
        poemBPoint:
          'Hughes gives the hawk a direct, first-person voice that asserts total control.',
        poemBEvidence:
          '"I kill where I please because it is all mine" -- the hawk speaks with chilling certainty, claiming ownership of everything. There is no irony in the hawk\'s voice.',
        comparison:
          'Shelley\'s powerful figure is silent and ruined; Hughes\'s is articulate and supreme. The effect is that Shelley\'s poem critiques power from outside, while Hughes forces the reader to inhabit the mindset of the powerful.',
      },
      {
        topic: 'The role of nature and time',
        poemAPoint:
          'Nature and time destroy Ozymandias\'s legacy completely.',
        poemAEvidence:
          '"Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare" -- the desert has erased every trace of the empire.',
        poemBPoint:
          'The hawk exists outside time, claiming that "Nothing has changed since I began."',
        poemBEvidence:
          '"Nothing has changed since I began. / My eye has permitted no change" -- the hawk denies the passage of time itself, suggesting a power so absolute it controls reality.',
        comparison:
          'Shelley shows that time defeats all tyrants; Hughes creates a figure that claims immunity from time. The reader, however, knows that even hawks die -- so Hughes\'s poem may carry its own quiet irony.',
      },
      {
        topic: 'The poet\'s attitude: critique or exploration?',
        poemAPoint:
          'Shelley clearly critiques Ozymandias, using irony to undermine the king\'s boasts.',
        poemAEvidence:
          '"Look on my Works, ye Mighty, and despair!" -- the dramatic irony is unmistakable. Shelley\'s political radicalism drives the poem\'s message.',
        poemBPoint:
          'Hughes is more ambiguous -- he neither endorses nor condemns the hawk.',
        poemBEvidence:
          'Hughes said the poem was about "a hawk sitting in a wood" and resisted allegorical readings. The poem can be read as a study of natural power, a metaphor for dictatorship, or both.',
        comparison:
          'Shelley writes political satire with a clear moral; Hughes writes a dramatic monologue that invites multiple interpretations. Both, however, force the reader to think about what unchecked power looks and sounds like.',
      },
    ],
    conclusion:
      'Shelley and Hughes both examine absolute power, but Shelley warns against it while Hughes presents it without judgement. An Eduqas essay should explore how each poet\'s approach -- satirical distance versus dramatic immersion -- shapes the reader\'s response to the theme of power.',
  },
  {
    id: 9,
    title: 'Suffering and Social Critique',
    theme: 'Power / War',
    poemA: 'London',
    poetA: 'William Blake',
    poemB: 'A Wife in London',
    poetB: 'Thomas Hardy',
    thesis:
      'Both Blake and Hardy use London as a setting to expose human suffering caused by those in power, but Blake targets institutional oppression across society, while Hardy focuses on the intimate grief of a single woman devastated by war.',
    paragraphs: [
      {
        topic: 'How suffering is presented',
        poemAPoint:
          'Blake presents suffering as universal and inescapable -- every person in London is marked by it.',
        poemAEvidence:
          '"In every cry of every Man, / In every Infant\'s cry of fear" -- the anaphoric repetition of "every" insists that no one is spared.',
        poemBPoint:
          'Hardy focuses on one woman\'s private grief, making the reader witness her personal devastation.',
        poemBEvidence:
          '"She sits in the tawny vapour" -- the stillness and isolation of the wife create an intimate, claustrophobic portrait of loss.',
        comparison:
          'Blake\'s suffering is public and collective; Hardy\'s is private and individual. Both approaches are effective: Blake shows the scale of injustice, while Hardy gives it a human face.',
      },
      {
        topic: 'The use of London as a setting',
        poemAPoint:
          'Blake presents London as a city controlled and corrupted by institutional power.',
        poemAEvidence:
          '"charter\'d street... charter\'d Thames" -- even the river is controlled. The city is a prison of the mind as much as the body.',
        poemBPoint:
          'Hardy uses London\'s fog and gloom as a physical manifestation of the wife\'s emotional state.',
        poemBEvidence:
          '"the tawny vapour / That the Thames-side lanes have uprolled" -- the fog isolates the wife, cutting her off from the world just as grief isolates her emotionally.',
        comparison:
          'For Blake, London is a political landscape; for Hardy, it is an emotional one. Both, however, present the city as a place of entrapment.',
      },
      {
        topic: 'The poet\'s purpose and intended effect on the reader',
        poemAPoint:
          'Blake writes to provoke outrage and inspire political change.',
        poemAEvidence:
          '"the hapless Soldier\'s sigh / Runs in blood down Palace walls" -- the violent imagery is designed to shock the reader into recognising that the state is responsible for its people\'s suffering.',
        poemBPoint:
          'Hardy writes to create empathy and to highlight the personal cost that patriotic narratives ignore.',
        poemBEvidence:
          'The two-part structure forces the reader to experience the wife\'s hope being destroyed, generating profound sympathy.',
        comparison:
          'Blake addresses the reader as a citizen who should act; Hardy addresses the reader as a fellow human being who should feel. Both poets use their craft to challenge the reader\'s complacency.',
      },
    ],
    conclusion:
      'Blake and Hardy both expose suffering that those in power would prefer to hide. Blake\'s sweeping political critique and Hardy\'s intimate personal tragedy complement each other: together, they show that injustice operates at every scale, from the streets of a nation to the living room of a single home.',
  },
  {
    id: 10,
    title: 'Memory and Identity',
    theme: 'Identity / Time',
    poemA: 'The Prelude: stealing the boat',
    poetA: 'William Wordsworth',
    poemB: 'Excerpt from The Emigree',
    poetB: 'Carol Rumens',
    thesis:
      'Both Wordsworth and Rumens explore how a powerful memory of place shapes identity, but Wordsworth\'s memory is of nature\'s terrifying power forcing self-knowledge, while Rumens\'s speaker clings to an idealised memory of a homeland that may no longer exist.',
    paragraphs: [
      {
        topic: 'The nature of the memory and its emotional charge',
        poemAPoint:
          'Wordsworth describes a formative childhood memory that shifted from excitement to terror.',
        poemAEvidence:
          '"a huge peak, black and huge, / As if with voluntary purpose" -- the mountain becomes an active, threatening presence. The memory is vivid precisely because it was frightening.',
        poemBPoint:
          'Rumens\'s speaker treasures a memory of their homeland that remains bright and beautiful despite the reality of exile.',
        poemBEvidence:
          '"my city takes me dancing" -- the speaker\'s memory is warm, personalised, and alive, even though it may be a place they can never return to.',
        comparison:
          'Both memories are transformative, but Wordsworth\'s shapes identity through fear and humility, while Rumens\'s shapes identity through love and longing. Both show that memory is selective.',
      },
      {
        topic: 'The relationship between place and selfhood',
        poemAPoint:
          'Wordsworth\'s encounter with the Lake District mountain teaches him about his own smallness.',
        poemAEvidence:
          '"for many days, my brain / Worked with a dim and undetermined sense / Of unknown modes of being" -- the landscape reveals truths about existence that the young Wordsworth cannot yet articulate.',
        poemBPoint:
          'Rumens\'s speaker defines herself through her connection to a lost city, which becomes part of who she is.',
        poemBEvidence:
          '"I have no passport, there\'s no way back at all / but my city comes to me" -- the city is internalised. Identity is not dependent on physical return.',
        comparison:
          'For Wordsworth, place shapes identity through direct encounter; for Rumens, place shapes identity through absence and memory. Both poets suggest that our deepest sense of self is tied to landscape.',
      },
      {
        topic: 'How each poem handles the passage of time',
        poemAPoint:
          'Wordsworth writes retrospectively, looking back from adulthood at a childhood experience.',
        poemAEvidence:
          'The extract is from The Prelude, an autobiographical poem tracing the growth of Wordsworth\'s mind. The adult poet understands what the child could not.',
        poemBPoint:
          'Rumens\'s speaker resists the passage of time, insisting that her memory remains unchanged.',
        poemBEvidence:
          '"my original view, the bright, filled paperweight" -- the memory is preserved like an object, unchanging and untouchable, even as the real city may have been destroyed.',
        comparison:
          'Wordsworth accepts that time brings understanding; Rumens\'s speaker uses memory to defy time. Both poems show how the past continues to shape the present.',
      },
    ],
    conclusion:
      'Wordsworth and Rumens both demonstrate that identity is forged through our relationship with place. Wordsworth\'s sublime encounter with nature humbles and educates; Rumens\'s idealised memory sustains and protects. Both poems are ultimately about what we carry with us -- and how the places we have known become part of who we are.',
  },
]

/* ── Page component ───────────────────────────────────────────────── */

export default function EduqasEssayPlansPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/poetry/eduqas" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Eduqas Poetry
          </Button>

          <Badge variant="secondary" className="mb-4">
            <PenLine className="mr-1 size-3" />
            Eduqas Essay Plans
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Comparison Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            10 fully planned comparison essays for Eduqas Component 1 Section B.
            Each plan includes a thesis, three comparative paragraphs with
            evidence, and a conclusion.
          </p>

          <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-500/5 border border-blue-500/10 p-3 max-w-2xl">
            <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
            <p className="text-caption text-muted-foreground">
              The Eduqas exam names one poem and asks you to compare it with
              another of your choice. These plans show you how to structure a
              high-mark comparison with evidence from both poems.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to use these plans ───────────────────────────────── */}
      <section>
        <Card className="mb-8">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                <Lightbulb className="size-5 text-clay-600" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-heading-sm font-heading text-foreground">
                    How to use these essay plans
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    These are model plans, not model answers. Use them to
                    practise structuring your own comparisons, not to memorise
                    and reproduce.
                  </p>
                </div>
                <ul className="grid gap-2 text-body-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    Read the thesis -- it states the argument the whole essay will prove
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    Each paragraph compares both poems on the same idea
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    Evidence is given as brief references, not full quotations from copyrighted poems
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    The conclusion draws the comparison together and links to the bigger picture
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Essay plans ──────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            All 10 Essay Plans
          </h2>
        </div>

        {ESSAY_PLANS.map((plan) => (
          <EssayPlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      {/* ── Copyright footer ─────────────────────────────────────── */}
      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        All quotations are brief references for the purpose of private study and
        educational criticism under UK fair-dealing provisions (Copyright,
        Designs and Patents Act 1988, s.30). Full poem texts are not reproduced.
        All quotations remain the intellectual property of the respective rights
        holders.
      </footer>
    </div>
  )
}

/* ── Essay plan card component ───────────────────────────────────── */

function EssayPlanCard({ plan }: { plan: EssayPlan }) {
  return (
    <details className="group rounded-2xl border border-border/60 bg-card transition-all duration-200 open:border-border open:shadow-card-hover">
      <summary className="flex cursor-pointer items-start gap-4 p-5 sm:p-6 list-none [&::-webkit-details-marker]:hidden">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <FileText className="size-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
              Eduqas
            </Badge>
            <Badge variant="outline" className="text-[0.65rem]">
              {plan.theme}
            </Badge>
          </div>
          <h3 className="text-heading-md font-heading text-foreground">
            {plan.id}. {plan.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{plan.poemA}</span>
            <GitCompareArrows className="size-3.5" />
            <span className="font-medium text-foreground">{plan.poemB}</span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {plan.poetA} vs {plan.poetB}
          </p>
        </div>
        <ChevronDown className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-border/60 px-5 pb-6 pt-5 sm:px-6 space-y-6">
        {/* Thesis */}
        <div className="rounded-lg bg-primary/5 border border-primary/10 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Thesis / Argument
          </h4>
          <p className="text-body-sm text-foreground leading-relaxed">
            {plan.thesis}
          </p>
        </div>

        {/* Paragraphs */}
        {plan.paragraphs.map((para, i) => (
          <div key={i} className="space-y-3">
            <h4 className="flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                {i + 1}
              </span>
              {para.topic}
            </h4>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Poem A */}
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3 space-y-2">
                <p className="text-xs font-semibold text-foreground">
                  {plan.poemA}
                </p>
                <p className="text-body-sm text-muted-foreground">
                  {para.poemAPoint}
                </p>
                <div className="flex items-start gap-2 rounded bg-card p-2">
                  <Quote className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {para.poemAEvidence}
                  </p>
                </div>
              </div>

              {/* Poem B */}
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3 space-y-2">
                <p className="text-xs font-semibold text-foreground">
                  {plan.poemB}
                </p>
                <p className="text-body-sm text-muted-foreground">
                  {para.poemBPoint}
                </p>
                <div className="flex items-start gap-2 rounded bg-card p-2">
                  <Quote className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {para.poemBEvidence}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison link */}
            <div className="flex items-start gap-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-3">
              <GitCompareArrows className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Comparison: </span>
                {para.comparison}
              </p>
            </div>
          </div>
        ))}

        {/* Conclusion */}
        <div className="rounded-lg bg-violet-500/5 border border-violet-500/10 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            Conclusion
          </h4>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {plan.conclusion}
          </p>
        </div>
      </div>
    </details>
  )
}
