import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowLeft,
  BookOpen,
  Drama,
  Feather,
  Quote,
  Sparkles,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  title: 'Macbeth — Act-by-Act Study Guide | The English Hub',
  description:
    'Scene-by-scene breakdown of all five acts of Macbeth with full Shakespeare quotations and language technique analysis for GCSE revision.',
}

/* ────────────────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────────────────── */

type Technique = {
  name: string
  quote: string
  analysis: string
}

type Scene = {
  title: string
  summary: string
  techniques: Technique[]
}

type Act = {
  act: number
  title: string
  overview: string
  scenes: Scene[]
}

const ACTS: Act[] = [
  /* ── ACT 1 ─────────────────────────────────────────────────────────── */
  {
    act: 1,
    title: 'Prophecy and Temptation',
    overview:
      'Act 1 establishes the play\'s supernatural atmosphere, introduces Macbeth as a war hero, and charts his rapid corruption as ambition takes root. Shakespeare moves from the witches\' desolate heath to Duncan\'s court to the Macbeths\' castle, tightening the dramatic tension with every scene until the decision to commit regicide is made.',
    scenes: [
      {
        title: 'Act 1, Scene 1 — The Witches on the Heath',
        summary:
          'Three witches meet on a desolate heath amid thunder and lightning. They agree to reconvene after the battle to meet Macbeth. They chant their paradoxical motto and vanish into the fog.',
        techniques: [
          {
            name: 'Paradox / chiasmus',
            quote: '"Fair is foul, and foul is fair."',
            analysis:
              'The reversed grammatical structure (chiasmus) immediately destabilises moral certainty. What seems good is evil; what seems evil is good. This single line announces the play\'s central preoccupation with deception, equivocation, and the collapse of moral boundaries.',
          },
          {
            name: 'Pathetic fallacy',
            quote: '"In thunder, lightning, or in rain"',
            analysis:
              'The storm reflects the disorder the witches embody and foreshadows the chaos that will engulf Scotland. Shakespeare uses weather as an objective correlative for moral disruption throughout the play.',
          },
          {
            name: 'Trochaic tetrameter',
            quote: '"When the hurly-burly\'s done, / When the battle\'s lost and won."',
            analysis:
              'The witches speak in a stressed-unstressed rhythm (trochaic) that inverts the natural iambic pentameter of the court. This metrical inversion signals that they exist outside the natural and social order, reinforcing their otherness.',
          },
          {
            name: 'Paradox',
            quote: '"When the battle\'s lost and won."',
            analysis:
              'A battle cannot simultaneously be lost and won unless one adopts a perspective outside normal human understanding. The paradox hints that the witches perceive events on a plane where conventional meanings are reversed.',
          },
          {
            name: 'Incantatory language',
            quote: '"Hover through the fog and filthy air."',
            analysis:
              'The alliterative "f" sounds create a hissing, sinister quality. "Hover" implies the witches occupy a liminal space between ground and sky, physical and supernatural. The "filthy air" anticipates the moral pollution that will spread through Scotland.',
          },
        ],
      },
      {
        title: 'Act 1, Scene 2 — The Bleeding Captain',
        summary:
          'A wounded captain reports to King Duncan that Macbeth has fought heroically against the rebel Macdonwald and the invading Norwegians. Duncan praises Macbeth\'s valour and orders that the traitorous Thane of Cawdor be executed, with his title given to Macbeth.',
        techniques: [
          {
            name: 'Violent imagery / simile',
            quote: '"Till he unseam\'d him from the nave to the chops, / And fix\'d his head upon our battlements."',
            analysis:
              'The graphic image of Macbeth slicing an enemy open from navel to jaw establishes him as ferociously violent. The verb "unseam\'d" treats the body like fabric being ripped apart. Crucially, this violence is celebrated here but will later become horrifying when turned against innocents.',
          },
          {
            name: 'Classical allusion',
            quote: '"Bellona\'s bridegroom"',
            analysis:
              'Macbeth is called the husband of the Roman goddess of war, elevating him to mythic status. This hyperbolic praise creates the height from which his tragic fall will be measured.',
          },
          {
            name: 'Dramatic irony',
            quote: '"What he hath lost noble Macbeth hath won."',
            analysis:
              'Duncan gives the traitor Cawdor\'s title to Macbeth, unwittingly creating the next traitor. The audience recognises the irony before the characters do, building dramatic tension around the theme of appearance versus reality.',
          },
          {
            name: 'Simile',
            quote: '"As sparrows eagles, or the hare the lion."',
            analysis:
              'The captain compares the enemies to prey animals and Macbeth and Banquo to predators. The natural-world imagery reinforces the idea that Macbeth\'s martial violence is natural and fitting, a view that the play will progressively undermine.',
          },
          {
            name: 'Epithet',
            quote: '"O valiant cousin! Worthy gentleman!"',
            analysis:
              'Duncan\'s exclamatory praise emphasises his generosity and trusting nature, but also his naivety. He applies the same unquestioning trust to Macbeth that he gave to the previous Thane of Cawdor, making him vulnerable to the same betrayal.',
          },
        ],
      },
      {
        title: 'Act 1, Scene 3 — The Prophecy',
        summary:
          'Macbeth and Banquo encounter the witches on the heath. The witches hail Macbeth as Thane of Glamis, Thane of Cawdor, and future king, and tell Banquo he will father kings though he will not be one himself. Ross arrives to confirm that Macbeth has been named Thane of Cawdor. Macbeth is shaken and begins to contemplate murder.',
        techniques: [
          {
            name: 'Dramatic irony / echo',
            quote: '"So foul and fair a day I have not seen."',
            analysis:
              'Macbeth\'s very first line in the play unconsciously echoes the witches\' "Fair is foul, and foul is fair," linking him to their moral disorder before he has even met them. Shakespeare suggests that the seeds of corruption already exist within Macbeth.',
          },
          {
            name: 'Tricolon / anaphora',
            quote: '"All hail, Macbeth! Hail to thee, Thane of Glamis! / All hail, Macbeth! Hail to thee, Thane of Cawdor! / All hail, Macbeth, that shalt be king hereafter!"',
            analysis:
              'The three-part greeting builds in intensity from current title to new title to kingship. The ritualistic repetition of "All hail" mimics an incantation and gives the prophecy an irresistible momentum that sweeps Macbeth towards his fate.',
          },
          {
            name: 'Foreshadowing / metaphor',
            quote: '"The instruments of darkness tell us truths, / Win us with honest trifles, to betray\'s / In deepest consequence."',
            analysis:
              'Banquo recognises the witches\' strategy: small truths build trust before the devastating lie. The metaphor of "instruments of darkness" personifies evil as a musician playing a tune the listener cannot resist. This is Banquo\'s moral clarity, which Macbeth fatally lacks.',
          },
          {
            name: 'Aside / soliloquy',
            quote: '"If good, why do I yield to that suggestion / Whose horrid image doth unfix my hair / And make my seated heart knock at my ribs?"',
            analysis:
              'Macbeth\'s aside reveals that murder has already entered his mind unbidden. The physical symptoms (hair standing on end, heart pounding) show his body rebelling against his thoughts. The word "suggestion" implies the idea comes from outside himself, yet it is his own imagination that creates the "horrid image."',
          },
          {
            name: 'Personification / metaphor',
            quote: '"Come what come may, / Time and the hour runs through the roughest day."',
            analysis:
              'Macbeth personifies time as an unstoppable force, attempting to convince himself that fate will take its course without his intervention. The apparently passive acceptance masks an active internal struggle that Shakespeare leaves unresolved, building suspense.',
          },
        ],
      },
      {
        title: 'Act 1, Scene 4 — Duncan Names Malcolm Heir',
        summary:
          'Duncan formally thanks Macbeth and Banquo for their service. He then names his son Malcolm as heir to the throne, the Prince of Cumberland. Macbeth recognises this as a barrier to his ambition and, in an aside, reveals his darkening thoughts.',
        techniques: [
          {
            name: 'Dramatic irony',
            quote: '"There\'s no art / To find the mind\'s construction in the face."',
            analysis:
              'Duncan reflects on the treachery of the previous Thane of Cawdor, admitting he cannot read people\'s true intentions from their appearance. The devastating irony is that he speaks these words in Macbeth\'s presence, about to place the same misguided trust in him.',
          },
          {
            name: 'Light and dark imagery / apostrophe',
            quote: '"Stars, hide your fires; / Let not light see my black and deep desires."',
            analysis:
              'Macbeth invokes cosmic darkness to conceal his ambition. The opposition between "fires" (light/goodness/divine order) and "black and deep desires" (darkness/evil/the abyss) introduces the play\'s sustained light-versus-dark motif. The apostrophe to the stars aligns his ambition with a disruption of the celestial order.',
          },
          {
            name: 'Metaphor',
            quote: '"The eye wink at the hand; yet let that be / Which the eye fears, when it is done, to see."',
            analysis:
              'Macbeth imagines a dissociation between seeing and doing, between conscience and action. The hand acts while the eye looks away, suggesting he wants to commit murder without confronting its moral reality. This split anticipates his psychological disintegration.',
          },
          {
            name: 'Semantic field of planting / growth',
            quote: '"I have begun to plant thee, and will labour / To make thee full of growing."',
            analysis:
              'Duncan uses organic, nurturing language to describe his relationship with his thanes. This natural imagery of growth and cultivation contrasts with the unnatural violence Macbeth is already contemplating, heightening the sense of betrayal.',
          },
          {
            name: 'Superlative / hyperbole',
            quote: '"More is thy due than more than all can pay."',
            analysis:
              'Duncan\'s effusive gratitude underlines his generosity and creates a powerful debt of loyalty that Macbeth\'s murder will violate. The hyperbole of owing more than everything emphasises how profoundly ungrateful the coming regicide will be.',
          },
        ],
      },
      {
        title: 'Act 1, Scene 5 — Lady Macbeth\'s Soliloquy',
        summary:
          'Lady Macbeth reads Macbeth\'s letter describing the witches\' prophecy. She fears her husband is too kind to seize the throne by force. She calls on dark spirits to strip her of femininity and fill her with cruelty. When Macbeth arrives, she tells him to leave the planning to her.',
        techniques: [
          {
            name: 'Invocation / apostrophe',
            quote: '"Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty!"',
            analysis:
              'Lady Macbeth directly addresses supernatural forces, asking them to remove her femininity, equating womanhood with compassion and gentleness. The verb "unsex" is a violent neologism implying a fundamental transformation of identity. "Crown to the toe" suggests total possession, anticipating the demonic imagery of the play.',
          },
          {
            name: 'Metaphor',
            quote: '"Yet do I fear thy nature; / It is too full o\' th\' milk of human kindness."',
            analysis:
              'The metaphor of "milk" associates kindness with nourishment and femininity (breastfeeding). Lady Macbeth treats compassion as a weakness to be purged. Ironically, her judgement proves accurate: Macbeth does have a conscience, which is precisely what makes his crimes so psychologically devastating.',
          },
          {
            name: 'Imperative / imagery of darkness',
            quote: '"Come, thick night, / And pall thee in the dunnest smoke of hell, / That my keen knife see not the wound it makes."',
            analysis:
              'Lady Macbeth echoes Macbeth\'s "Stars, hide your fires," calling for darkness to conceal the murder. The word "pall" (a cloth draped over a coffin) associates night with death. "Dunnest smoke of hell" directly links their plan to damnation, and the knife that cannot see its own wound mirrors Macbeth\'s desire for moral blindness.',
          },
          {
            name: 'Simile / imperative',
            quote: '"Look like th\' innocent flower, / But be the serpent under\'t."',
            analysis:
              'The biblical allusion to the serpent in Eden casts the Macbeths as agents of original sin and Duncan as the innocent to be corrupted. The imperative mood shows Lady Macbeth taking command, instructing Macbeth in the art of deception. The flower-serpent duality crystallises the appearance-versus-reality theme.',
          },
          {
            name: 'Imagery of bodily violation',
            quote: '"Make thick my blood; / Stop up the access and passage to remorse."',
            analysis:
              'Lady Macbeth requests a physical blockage of remorse, imagining guilt as something that flows through the blood and can be dammed. The visceral, bodily language shows her attempting to transform herself at a physiological level, suggesting she understands that cruelty does not come naturally to her.',
          },
        ],
      },
      {
        title: 'Act 1, Scene 6 — Duncan Arrives at Inverness',
        summary:
          'Duncan and his entourage arrive at the Macbeths\' castle. He praises the pleasant air and is warmly welcomed by Lady Macbeth, who plays the perfect hostess.',
        techniques: [
          {
            name: 'Dramatic irony',
            quote: '"This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses."',
            analysis:
              'Duncan praises the very location where he will be murdered. The words "pleasant," "sweetly," and "gentle" create an atmosphere of ease and trust that the audience knows is about to be shattered. The air that seems sweet is the "filthy air" the witches inhabit.',
          },
          {
            name: 'Symbolism (martlet)',
            quote: '"The temple-haunting martlet, does approve, / By his loved mansionry, that the heaven\'s breath / Smells wooingly here."',
            analysis:
              'Banquo notes that house martins (birds associated with churches and sacred buildings) nest here, suggesting divine blessing. The word "temple-haunting" is deeply ironic: the castle is about to become a place of sacrilegious murder, not worship. Nature itself is deceived.',
          },
          {
            name: 'Dramatic irony / hyperbole',
            quote: '"All our service / In every point twice done and then done double."',
            analysis:
              'Lady Macbeth\'s extravagant protestations of loyalty and service are pure performance. Her language of doubling ("twice done... done double") unconsciously echoes the witches\' "Double, double toil and trouble," linking her hospitality to their deception.',
          },
          {
            name: 'Role performance',
            quote: '"Your servant ever."',
            analysis:
              'Lady Macbeth adopts the language of feudal submission while planning regicide. The gap between her words and her intentions is absolute, dramatising the theme of appearance versus reality in its starkest form.',
          },
          {
            name: 'Religious language',
            quote: '"God\'s benison go with you."',
            analysis:
              'Duncan invokes God\'s blessing as he enters the castle where he will be murdered. The religious language amplifies the horror of the coming crime: this is not merely a political murder but a violation of divine law and sacred hospitality.',
          },
        ],
      },
      {
        title: 'Act 1, Scene 7 — "If It Were Done When \'Tis Done"',
        summary:
          'Macbeth wavers, listing reasons not to kill Duncan. Lady Macbeth enters and attacks his manhood, describing her own willingness to dash out the brains of a nursing infant. She outlines her plan to drug the guards. Macbeth agrees to proceed.',
        techniques: [
          {
            name: 'Soliloquy / extended metaphor',
            quote: '"If it were done when \'tis done, then \'twere well / It were done quickly."',
            analysis:
              'The knotted, stammering syntax ("done... \'tis done... done") reflects Macbeth\'s tangled psychology. He cannot bring himself to name the act ("it"), and the conditional "if" reveals his fear that murder, once committed, can never truly be finished. The line anticipates the unending guilt that will consume him.',
          },
          {
            name: 'Metaphor / personification',
            quote: '"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on the other."',
            analysis:
              'Macbeth uses a horse-riding metaphor: his ambition is a rider that leaps too high and falls on the other side of the horse. He acknowledges that ambition is his only motive and recognises that it is self-defeating. This is the play\'s most explicit diagnosis of his tragic flaw.',
          },
          {
            name: 'Challenge to masculinity',
            quote: '"When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man."',
            analysis:
              'Lady Macbeth equates manhood with the capacity for murder. Her manipulation exploits the patriarchal association between masculinity and action/courage, weaponising gender expectations to override Macbeth\'s moral objections.',
          },
          {
            name: 'Shocking imagery / hyperbole',
            quote: '"I have given suck, and know / How tender \'tis to love the babe that milks me: / I would, while it was smiling in my face, / Have pluck\'d my nipple from his boneless gums, / And dash\'d the brains out, had I so sworn as you / Have done to this."',
            analysis:
              'The most disturbing image in the play: Lady Macbeth claims she would murder her own nursing child to keep a promise. The tenderness of "smiling in my face" makes the violence of "dash\'d the brains out" all the more shocking. This demonstrates the extremity of her will and her willingness to transgress every natural bond.',
          },
          {
            name: 'Antithesis / proverbial statement',
            quote: '"False face must hide what the false heart doth know."',
            analysis:
              'Macbeth\'s couplet closing the act accepts the necessity of deception. The repetition of "false" emphasises the doubling of deceit: both the outward face and the inner heart are corrupt. The rhyming couplet gives the line an air of resolved certainty, as if Macbeth has finally committed.',
          },
        ],
      },
    ],
  },

  /* ── ACT 2 ─────────────────────────────────────────────────────────── */
  {
    act: 2,
    title: 'The Murder and Its Aftermath',
    overview:
      'Act 2 is the play\'s darkest act in both the literal and metaphorical sense. It covers the murder of Duncan, the immediate psychological consequences for both Macbeths, and the discovery of the crime. Shakespeare keeps the actual killing offstage, focusing instead on the agonising mental state of the murderer, making Act 2 a sustained exploration of guilt, horror, and moral collapse.',
    scenes: [
      {
        title: 'Act 2, Scene 1 — The Dagger Soliloquy',
        summary:
          'After midnight, Banquo and his son Fleance walk through the castle. Banquo confesses to Macbeth that he has been dreaming about the witches. Left alone, Macbeth hallucinates a dagger floating before him, leading him towards Duncan\'s chamber. A bell rings and he goes to commit the murder.',
        techniques: [
          {
            name: 'Hallucination / soliloquy',
            quote: '"Is this a dagger which I see before me, / The handle toward my hand?"',
            analysis:
              'The floating dagger externalises Macbeth\'s internal conflict. That the handle points towards him suggests temptation actively offering itself. The rhetorical question reveals his uncertainty about whether the vision is supernatural or psychological, mirroring the play\'s refusal to resolve this ambiguity.',
          },
          {
            name: 'Personification / metaphor',
            quote: '"Wither\'d murder, / Alarum\'d by his sentinel, the wolf, / Whose howl\'s his watch."',
            analysis:
              'Murder is personified as a withered figure stalking the night, with the wolf as its guard. This gothic imagery transforms the castle into a landscape of nightmare. The wolf, traditionally associated with predation, connects Macbeth\'s act to the bestial.',
          },
          {
            name: 'Apostrophe / personification',
            quote: '"Thou sure and firm-set earth, / Hear not my steps, which way they walk, for fear / Thy very stones prate of my whereabout."',
            analysis:
              'Macbeth addresses the ground itself, fearing that even inanimate stone will betray him. This pathetic fallacy suggests that the natural world is morally aware and will testify against his crime. The anxiety about exposure anticipates the guilt that will dominate his reign.',
          },
          {
            name: 'Imagery of darkness',
            quote: '"Now o\'er the one half-world / Nature seems dead, and wicked dreams abuse / The curtain\'d sleep."',
            analysis:
              'Macbeth describes half the world in darkness while the other half sleeps. "Nature seems dead" foreshadows the unnatural disruption about to occur. Sleep is "curtain\'d" like a stage, linking the private act of sleeping to theatrical vulnerability.',
          },
          {
            name: 'Sound as symbol',
            quote: '"I go, and it is done; the bell invites me. / Hear it not, Duncan; for it is a knell / That summons thee to heaven or to hell."',
            analysis:
              'The bell is simultaneously a practical signal from Lady Macbeth and a funeral knell. The rhyming couplet (knell/hell) gives the moment a ritualistic finality. "Heaven or to hell" acknowledges the spiritual stakes while leaving Duncan\'s fate (and Macbeth\'s damnation) ambiguously balanced.',
          },
        ],
      },
      {
        title: 'Act 2, Scene 2 — The Murder',
        summary:
          'Macbeth returns from Duncan\'s chamber, blood-soaked and terrified. He has brought the daggers with him by mistake and reports hearing a voice cry "Sleep no more!" Lady Macbeth takes charge, returning the daggers and smearing the sleeping grooms with blood. A knocking begins at the gate.',
        techniques: [
          {
            name: 'Auditory hallucination',
            quote: '"Methought I heard a voice cry \'Sleep no more! / Macbeth does murder sleep.\'"',
            analysis:
              'Macbeth believes he hears a supernatural judgement: by killing the sleeping Duncan, he has murdered sleep itself. Sleep symbolises innocence, peace of mind, and the natural order. Macbeth\'s insomnia for the rest of the play becomes a physical manifestation of his irrecoverable guilt.',
          },
          {
            name: 'Hyperbole / colour imagery',
            quote: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red."',
            analysis:
              'Macbeth imagines his guilt staining the entire ocean red. "Incarnadine" (to make flesh-coloured / blood-red) is a polysyllabic Latinate word that contrasts with the stark monosyllables "making the green one red," shifting from elevated rhetoric to blunt horror. The hyperbole conveys guilt as infinite and irreversible.',
          },
          {
            name: 'Contrast / dramatic irony',
            quote: '"A little water clears us of this deed."',
            analysis:
              'Lady Macbeth\'s dismissive confidence directly contrasts with Macbeth\'s ocean-of-blood hyperbole. Her belief that the crime can be simply washed away is devastatingly ironic, given that she will later sleepwalk obsessively trying to wash invisible blood from her hands in Act 5.',
          },
          {
            name: 'Religious imagery / inability to pray',
            quote: '"But wherefore could not I pronounce \'Amen\'? / I had most need of blessing, and \'Amen\' / Stuck in my throat."',
            analysis:
              'Macbeth\'s inability to say "Amen" after hearing the guards pray signals his spiritual severance from God. The physical sensation of the word being stuck suggests that his sin has literally cut off his access to divine grace. For a Jacobean audience, this would signal damnation.',
          },
          {
            name: 'Stage direction / knocking',
            quote: '"Whence is that knocking? / How is\'t with me, when every noise appals me?"',
            analysis:
              'The persistent knocking at the gate intrudes reality into Macbeth\'s psychological horror. Thomas De Quincey famously argued that the knocking marks the return of the ordinary world, making the horror feel more acute. Macbeth\'s hypersensitivity to sound reveals his shattered nerves.',
          },
        ],
      },
      {
        title: 'Act 2, Scene 3 — The Porter and the Discovery',
        summary:
          'A drunken porter imagines himself as the gatekeeper of hell, admitting various sinners. He opens the gate for Macduff and Lennox, who have come to wake the king. Macduff discovers Duncan\'s body and raises the alarm. Macbeth kills the grooms, claiming fury. Malcolm and Donalbain decide to flee.',
        techniques: [
          {
            name: 'Comic relief / dramatic irony',
            quote: '"Here\'s a knocking indeed! If a man were porter of hell-gate, he should have old turning the key."',
            analysis:
              'The Porter\'s drunken comedy provides relief from the tension of the murder scene, but his joke is more truth than he knows: the castle has become hell, and he is literally guarding the gate of a house where a king has just been murdered. The metatheatrical humour adds dark irony.',
          },
          {
            name: 'Topical allusion / equivocation',
            quote: '"Faith, here\'s an equivocator, that could swear in both the scales against either scale."',
            analysis:
              'The Porter\'s reference to equivocation directly alludes to the trial of Jesuit Henry Garnet after the Gunpowder Plot. Equivocation, the art of misleading without technically lying, is also the witches\' method throughout the play. This speech links political treason to the Macbeths\' domestic treason.',
          },
          {
            name: 'Exclamatory language / hyperbole',
            quote: '"O horror, horror, horror! Tongue nor heart / Cannot conceive nor name thee!"',
            analysis:
              'Macduff\'s triple exclamation conveys shock beyond the capacity of language. The claim that neither "tongue" (speech) nor "heart" (feeling) can process the sight emphasises the enormity of regicide. The failure of language mirrors the breakdown of natural order.',
          },
          {
            name: 'Pathetic fallacy / cosmic disruption',
            quote: '"The night has been unruly: where we lay, / Our chimneys were blown down."',
            analysis:
              'Lennox reports that nature itself erupted during the night of the murder: storms, earthquakes, screaming. These unnatural events demonstrate the Jacobean belief that regicide disrupts the cosmic order. The macrocosm reflects the microcosm of human sin.',
          },
          {
            name: 'Aside / antithesis',
            quote: '"Where we are, / There\'s daggers in men\'s smiles."',
            analysis:
              'Donalbain\'s observation that friendly appearances conceal lethal intent encapsulates the play\'s appearance-versus-reality theme in a single, memorable image. The antithesis of "daggers" and "smiles" is a compact expression of the deceptive world Macbeth has created.',
          },
        ],
      },
      {
        title: 'Act 2, Scene 4 — The Old Man',
        summary:
          'Ross and an old man discuss the unnatural events following Duncan\'s murder: darkness at noon, a falcon killed by an owl, and Duncan\'s horses eating each other. Macduff reports that Macbeth has been named king and will be crowned at Scone.',
        techniques: [
          {
            name: 'Pathetic fallacy / cosmic imagery',
            quote: '"By the clock \'tis day, / And yet dark night strangles the travelling lamp."',
            analysis:
              'The sun (the "travelling lamp") is personified as being strangled by darkness. The metaphor of strangulation implies violence against the natural order itself. Light, which represents divine authority and legitimate kingship, is being suppressed by the darkness of Macbeth\'s crime.',
          },
          {
            name: 'Inversion of the natural order',
            quote: '"A falcon, towering in her pride of place, / Was by a mousing owl hawk\'d at and kill\'d."',
            analysis:
              'The image of an owl (a lowly night predator) killing a falcon (the bird of kings) is an emblem of the play\'s central event: a subject killing his king. The natural hierarchy has been inverted, just as the social hierarchy has been violated by regicide.',
          },
          {
            name: 'Grotesque imagery',
            quote: '"Duncan\'s horses... turn\'d wild in nature, broke their stalls, flung out, / Contending \'gainst obedience, as they would / Make war upon mankind... \'Tis said they eat each other."',
            analysis:
              'The horses\' unnatural behaviour symbolises the rebellion against natural order. Animals that served humans now turn against them and against each other. The cannibalistic detail ("eat each other") suggests that Macbeth\'s crime has unleashed a chain of destruction that consumes even nature.',
          },
          {
            name: 'Sententious language',
            quote: '"God\'s benison go with you; and with those / That would make good of bad, and friends of foes!"',
            analysis:
              'The Old Man\'s blessing carries a double meaning: it is both a prayer for the good and a veiled warning about those who are turning evil into apparent good. His wisdom-figure role lends his words moral authority, making his departure a symbolic withdrawal of natural order from Scotland.',
          },
          {
            name: 'Prolepsis / foreshadowing',
            quote: '"He is already named, and gone to Scone / To be invested."',
            analysis:
              'Macbeth\'s coronation is reported rather than shown, keeping it offstage. This deliberate choice denies Macbeth any triumphal moment, suggesting that his reign lacks the legitimacy that would merit theatrical spectacle.',
          },
        ],
      },
    ],
  },

  /* ── ACT 3 ─────────────────────────────────────────────────────────── */
  {
    act: 3,
    title: 'Paranoia and Banquo\'s Ghost',
    overview:
      'Act 3 charts Macbeth\'s transformation from reluctant murderer to calculating tyrant. Having secured the throne, he cannot enjoy it because the witches\' prophecy about Banquo\'s descendants torments him. He orders Banquo\'s murder, but Fleance escapes. The act climaxes with the banquet scene, where Banquo\'s ghost exposes Macbeth\'s guilt before the Scottish nobility.',
    scenes: [
      {
        title: 'Act 3, Scene 1 — Macbeth Plans Banquo\'s Murder',
        summary:
          'Banquo reflects on the witches\' prophecy and suspects Macbeth played "most foully" for the crown. Macbeth, now king, questions Banquo about his travel plans and then meets with two murderers, persuading them to kill Banquo and his son Fleance.',
        techniques: [
          {
            name: 'Suspicion / dramatic irony',
            quote: '"Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play\'dst most foully for\'t."',
            analysis:
              'Banquo\'s aside reveals he suspects Macbeth but does not act on it. The word "foully" echoes "fair is foul," connecting Macbeth\'s achieved ambition to the witches\' moral inversion. Banquo\'s silence about his suspicions makes him complicit, complicating his role as a simple moral foil.',
          },
          {
            name: 'Metaphor / frustration',
            quote: '"Upon my head they placed a fruitless crown, / And put a barren sceptre in my gripe."',
            analysis:
              'Macbeth uses images of sterility (fruitless, barren) to describe his kingship. His crown is "fruitless" because the witches prophesied that Banquo, not Macbeth, would father kings. The organic imagery contrasts with Duncan\'s "planting" language: Macbeth\'s reign produces nothing.',
          },
          {
            name: 'Manipulation / echoing Lady Macbeth',
            quote: '"Do you find / Your patience so predominant in your nature / That you can let this go?"',
            analysis:
              'Macbeth manipulates the murderers by questioning their manhood, exactly as Lady Macbeth manipulated him. This mirroring shows how toxic patterns of coercion replicate themselves. Macbeth has internalised his wife\'s strategy and now weaponises it against others.',
          },
          {
            name: 'Metaphor of the enemy within',
            quote: '"There is none but he / Whose being I do fear: and, under him, / My Genius is rebuked."',
            analysis:
              'Macbeth admits that Banquo\'s moral integrity ("Genius" meaning guardian spirit) diminishes his own. The verb "rebuked" suggests a supernatural correction: Banquo\'s virtue is a standing reproach to Macbeth\'s corruption. This is a rare moment of self-awareness.',
          },
          {
            name: 'Soliloquy / resolution',
            quote: '"Rather than so, come fate into the list, / And champion me to the utterance!"',
            analysis:
              'Macbeth challenges fate to single combat, using chivalric jousting imagery ("list" is the tournament arena). "Utterance" means "to the death" (from French outrance). He has moved from passively waiting for fate in Act 1 to actively fighting against it, showing his increasingly desperate attempts to control destiny.',
          },
        ],
      },
      {
        title: 'Act 3, Scene 2 — "Nought\'s Had, All\'s Spent"',
        summary:
          'Lady Macbeth expresses her dissatisfaction privately. When Macbeth enters, he reveals his anxiety about Banquo but does not tell her about the murder he has planned. Their conversation reveals a marriage deteriorating under the weight of shared guilt.',
        techniques: [
          {
            name: 'Antithesis / couplet',
            quote: '"Nought\'s had, all\'s spent, / Where our desire is got without content."',
            analysis:
              'Lady Macbeth recognises the cruel paradox: they have achieved everything but gained nothing. The rhyming couplet gives this a proverbial quality, as though it is a universal truth. The antithesis of "had" and "spent" suggests their gains are already losses.',
          },
          {
            name: 'Envy of the dead',
            quote: '"\'Tis safer to be that which we destroy / Than by destruction dwell in doubtful joy."',
            analysis:
              'Lady Macbeth argues that Duncan, in death, is better off than they are in their anxious power. The dead man has certainty; the living murderers have only "doubtful joy." This inversion, where the victim is envied and the victors are pitied, deepens the play\'s tragic irony.',
          },
          {
            name: 'Imagery of torture',
            quote: '"O, full of scorpions is my mind, dear wife!"',
            analysis:
              'Macbeth\'s metaphor reduces his consciousness to a pit of venomous creatures. The intimacy of "dear wife" beside the horror of "scorpions" shows the grotesque mixture of domesticity and violence that now defines their marriage. The image is viscerally effective: the mind itself has become a site of torment.',
          },
          {
            name: 'Euphemism / secretiveness',
            quote: '"Be innocent of the knowledge, dearest chuck, / Till thou applaud the deed."',
            analysis:
              'Macbeth hides the Banquo plot from his wife, reversing their dynamic: she was the planner in Act 1, but now he acts independently. "Dearest chuck" (a term of endearment) is jarringly casual for someone ordering murder. The shift signals his growing isolation and autonomy in evil.',
          },
          {
            name: 'Apostrophe / personification',
            quote: '"Come, seeling night, / Scarf up the tender eye of pitiful day."',
            analysis:
              'Macbeth invokes night in language that echoes Lady Macbeth\'s "Come, thick night" from Act 1. "Seeling" refers to sewing shut a hawk\'s eyelids during training, a violently specific image that turns nature into a blinded predator. Day is "pitiful" and "tender," vulnerable to the darkness Macbeth summons.',
          },
        ],
      },
      {
        title: 'Act 3, Scene 3 — Banquo\'s Murder',
        summary:
          'Three murderers ambush Banquo and Fleance as they approach the castle. They kill Banquo, but Fleance escapes into the darkness, preserving the witches\' prophecy that Banquo\'s line will inherit the throne.',
        techniques: [
          {
            name: 'Dying words / imperative',
            quote: '"O, treachery! Fly, good Fleance, fly, fly, fly! / Thou mayst revenge."',
            analysis:
              'Banquo\'s final words prioritise his son\'s survival over his own life. The urgent repetition of "fly" creates a rhythm of desperation. His instruction to "revenge" ensures that the consequences of Macbeth\'s crime will extend beyond this moment, keeping the threat of retribution alive.',
          },
          {
            name: 'Symbolism (light extinguished)',
            quote: '"Who did strike out the light?"',
            analysis:
              'The torch is struck out during the attack, plunging the scene into darkness. On the symbolic level, light (truth, order, divine authority) is being extinguished by Macbeth\'s violence. Fleance\'s escape in darkness suggests that hope survives even when goodness is under attack.',
          },
          {
            name: 'Dramatic irony / partial failure',
            quote: '"There\'s but one down; the son is fled."',
            analysis:
              'The murderers\' report that Fleance has escaped is the turning point of the play. Macbeth has committed an act of irreversible evil but failed to achieve its purpose. This partial success mirrors the witches\' equivocal prophecies: what appears to be a victory contains the seed of defeat.',
          },
          {
            name: 'Brevity and pace',
            quote: '"Let it come down."',
            analysis:
              'The First Murderer\'s terse command to strike creates a sudden, brutal shift from dialogue to violence. The simplicity of the language contrasts with Macbeth\'s elaborate soliloquies about murder, showing how those who do the actual killing treat it as mere work.',
          },
          {
            name: 'Third murderer (ambiguity)',
            quote: '"But who did bid thee join with us?"',
            analysis:
              'The mysterious appearance of an uninvited third murderer has generated centuries of debate: is he Macbeth himself in disguise, or a spy sent to watch the other two? Shakespeare never resolves this, adding an atmosphere of paranoid surveillance that mirrors Macbeth\'s tyrannical rule.',
          },
        ],
      },
      {
        title: 'Act 3, Scene 4 — The Banquet Scene',
        summary:
          'Macbeth hosts a royal banquet. The first murderer reports Banquo\'s death and Fleance\'s escape. As Macbeth takes his seat, he sees Banquo\'s ghost occupying his chair. He reacts with visible terror, alarming the guests. Lady Macbeth tries to cover for him but the feast dissolves in chaos.',
        techniques: [
          {
            name: 'Stage direction / supernatural',
            quote: '"The GHOST OF BANQUO enters, and sits in MACBETH\'s place."',
            analysis:
              'The ghost physically occupying Macbeth\'s seat is theatrically powerful: the man Macbeth murdered to secure his position literally takes it. The ghost can be played as visible to the audience but invisible to other characters, or as purely Macbeth\'s hallucination. Either reading emphasises Macbeth\'s psychological disintegration.',
          },
          {
            name: 'Extended metaphor / point of no return',
            quote: '"I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er."',
            analysis:
              'Macbeth imagines guilt as a river of blood he has waded halfway across. The chilling word "tedious" reduces moral choice to a question of convenience. Going back to virtue seems as tiresome as continuing in evil. This metaphor marks the moment Macbeth consciously chooses to keep killing.',
          },
          {
            name: 'Exclamatory / terror',
            quote: '"Thou canst not say I did it: never shake / Thy gory locks at me."',
            analysis:
              'Macbeth addresses the ghost directly, protesting his innocence because he did not personally kill Banquo. The "gory locks" detail makes the ghost physically horrifying. His denial reveals a legalistic attempt to evade guilt: he hired the murderers, so technically he is not responsible.',
          },
          {
            name: 'Lady Macbeth\'s control / gender challenge',
            quote: '"Are you a man?"',
            analysis:
              'Lady Macbeth again questions Macbeth\'s masculinity, this time to snap him out of his terror. However, where her gender attacks worked in Act 1, they are now ineffective: Macbeth is beyond the reach of her manipulation. Her loss of control over him foreshadows her psychological collapse.',
          },
          {
            name: 'Proverbial language / fatalism',
            quote: '"It will have blood; they say, blood will have blood."',
            analysis:
              'Macbeth acknowledges the inevitability of retribution: violence begets violence. The sentence has a proverbial, almost biblical quality, suggesting an inescapable natural law. The passive construction ("it will have") implies that bloodshed operates as an autonomous force beyond his control.',
          },
        ],
      },
      {
        title: 'Act 3, Scene 5 — Hecate and the Witches',
        summary:
          'Hecate, goddess of witchcraft, berates the three witches for dealing with Macbeth without her permission. She instructs them to prepare more powerful spells to give Macbeth a false sense of security.',
        techniques: [
          {
            name: 'Iambic tetrameter / song',
            quote: '"And that distill\'d by magic sleights / Shall raise such artificial sprites / As by the strength of their illusion / Shall draw him on to his confusion."',
            analysis:
              'Hecate reveals the witches\' strategy: they will use false confidence to destroy Macbeth. The word "confusion" meant both mental disorder and destruction. The rhyming couplets and regular metre give her speech a song-like quality, reflecting the seductive nature of the deception.',
          },
          {
            name: 'Theme statement',
            quote: '"And you all know, security / Is mortals\' chiefest enemy."',
            analysis:
              'Hecate articulates one of the play\'s central warnings: overconfidence is the greatest threat to human safety. This directly foreshadows Macbeth\'s reliance on the misleading prophecies in Act 4, which give him exactly the false security Hecate describes. (Note: many scholars believe this scene was added by Thomas Middleton.)',
          },
          {
            name: 'Hierarchical supernatural',
            quote: '"How did you dare / To trade and traffic with Macbeth / In riddles and affairs of death?"',
            analysis:
              'Hecate\'s anger establishes a hierarchy within the supernatural world. Her authority over the three witches mirrors the feudal hierarchy of the mortal world, suggesting that the forces of evil are organised and purposeful, not random.',
          },
          {
            name: 'Manipulation through comfort',
            quote: '"He shall spurn fate, scorn death, and bear / His hopes \'bove wisdom, grace and fear."',
            analysis:
              'The plan is to make Macbeth feel invincible. The list of what he will "spurn" (fate, death, wisdom, grace, fear) encompasses everything that might restrain him. Removing these safeguards will lead to reckless self-destruction.',
          },
          {
            name: 'Contested authorship',
            quote: '"Come away, come away."',
            analysis:
              'This song, likely by Middleton, shifts the tone towards spectacle. Whether Shakespeare wrote this scene or not, its theatrical function is clear: it provides a bridge between the chaos of the banquet and the deepening evil of Act 4, while reinforcing that supernatural forces are actively orchestrating Macbeth\'s downfall.',
          },
        ],
      },
      {
        title: 'Act 3, Scene 6 — Lennox and the Lord',
        summary:
          'Lennox speaks with heavy irony about the convenient deaths surrounding Macbeth. A lord reports that Macduff has fled to England to join Malcolm and raise an army against Macbeth, with the support of the English king Edward.',
        techniques: [
          {
            name: 'Sustained irony / sarcasm',
            quote: '"How it did grieve Macbeth! Did he not straight / In pious rage, the two delinquents tear, / That were the slaves of drink and thralls of sleep?"',
            analysis:
              'Lennox\'s seemingly admiring language drips with sarcasm. "Pious rage" is oxymoronic: there is nothing holy about Macbeth\'s murder of the grooms. The irony signals that the nobility are beginning to see through Macbeth\'s facade, building the political opposition that will culminate in Act 5.',
          },
          {
            name: 'Euphemism / political caution',
            quote: '"The son of Duncan... lives in the English court."',
            analysis:
              'The characters speak carefully, using euphemism and indirection to avoid openly criticising the tyrant king. This atmosphere of fear and surveillance reflects the reality of living under a despotic regime and adds to the political tension.',
          },
          {
            name: 'Contrast between courts',
            quote: '"The most pious Edward."',
            analysis:
              'The English King Edward is described as "pious" and virtuous, creating a stark contrast with Macbeth\'s tyrannical Scotland. This contrast elevates England as a symbol of legitimate, divinely sanctioned kingship, flattering Shakespeare\'s own monarch.',
          },
          {
            name: 'Collective resistance forming',
            quote: '"Some holy angel / Fly to the court of England and unfold / His message ere he come."',
            analysis:
              'The invocation of a "holy angel" positions the resistance against Macbeth as divinely supported. This aligns the overthrow of Macbeth with God\'s will, reinforcing the play\'s framework of the Divine Right of Kings.',
          },
          {
            name: 'Reportage / off-stage action',
            quote: '"Macduff is gone to pray the holy king, upon his aid / To wake Northumberland and warlike Siward."',
            analysis:
              'Shakespeare uses reported action to advance the political plot efficiently while keeping the focus on Macbeth\'s psychological deterioration. The gathering army remains a distant threat that will materialise in Act 5.',
          },
        ],
      },
    ],
  },

  /* ── ACT 4 ─────────────────────────────────────────────────────────── */
  {
    act: 4,
    title: 'False Security and Devastation',
    overview:
      'Act 4 deepens Macbeth\'s tyranny while building the forces that will destroy him. He visits the witches for reassurance and receives three apparitions that seem to promise invincibility. Emboldened, he orders the massacre of Macduff\'s family. In England, Macduff learns of his family\'s murder and joins Malcolm\'s army. The act contains some of the play\'s most emotionally devastating scenes.',
    scenes: [
      {
        title: 'Act 4, Scene 1 — The Apparitions',
        summary:
          'Macbeth seeks out the witches, who conjure three apparitions. An armed head warns him to beware Macduff. A bloody child tells him no man born of woman can harm him. A crowned child holding a tree says he will not be defeated until Birnam Wood moves to Dunsinane. Macbeth demands to know if Banquo\'s descendants will reign and is shown a line of eight kings. He resolves to kill Macduff\'s family.',
        techniques: [
          {
            name: 'Incantation / trochaic tetrameter',
            quote: '"Double, double toil and trouble; / Fire burn and cauldron bubble."',
            analysis:
              'The witches\' most famous chant uses the inverted rhythm (trochaic) that marks them as unnatural. "Double" reinforces the play\'s motifs of duplicity and equivocation. The grotesque ingredients of their cauldron (eye of newt, tongue of dog, finger of birth-strangled babe) catalogue abominations that invert natural creation.',
          },
          {
            name: 'Equivocation / dramatic irony',
            quote: '"None of woman born / Shall harm Macbeth."',
            analysis:
              'The second apparition\'s prophecy seems to guarantee invincibility, but it equivocates: Macduff was delivered by caesarean section and is therefore not technically "born" of woman. The audience senses the trap before Macbeth does. This is the play\'s clearest example of the witches\' deceptive literalism.',
          },
          {
            name: 'Visual symbolism (apparitions)',
            quote: '"Be lion-mettled, proud; and take no care / Who chafes, who frets, or where conspirers are: / Macbeth shall never vanquish\'d be until / Great Birnam Wood to high Dunsinane Hill / Shall come against him."',
            analysis:
              'The third apparition, a crowned child holding a tree, visually foreshadows its own fulfilment: Malcolm\'s soldiers will carry branches. Macbeth dismisses the prophecy as impossible, interpreting it literally rather than recognising the potential for metaphorical fulfilment. His overconfidence is precisely the "security" Hecate prescribed.',
          },
          {
            name: 'Dehumanisation / epithet',
            quote: '"By the pricking of my thumbs, / Something wicked this way comes."',
            analysis:
              'The witch calls Macbeth "something" rather than "someone," stripping him of humanity. That even the witches recognise him as wicked marks a threshold: Macbeth has become more corrupted than the agents of evil themselves. The word "pricking" suggests a supernatural, physical awareness of evil.',
          },
          {
            name: 'Decisive tyranny / imperative',
            quote: '"The castle of Macduff I will surprise; / Seize upon Fife; give to the edge o\' the sword / His wife, his babes, and all unfortunate souls / That trace him in his line."',
            analysis:
              'Macbeth\'s decision to murder Macduff\'s entire family represents his most despicable act. Unlike Duncan\'s murder, there is no hesitation, no soliloquy of conscience. The staccato imperatives ("Surprise... Seize... give") show a man who has stripped away all moral deliberation. The murder of children is the ultimate marker of tyranny.',
          },
        ],
      },
      {
        title: 'Act 4, Scene 2 — The Murder of Lady Macduff',
        summary:
          'Lady Macduff, abandoned by her husband, talks with her young son. Ross visits briefly. A messenger warns them to flee, but it is too late. Murderers arrive and kill the son, and Lady Macduff flees offstage to her death.',
        techniques: [
          {
            name: 'Domestic intimacy / pathos',
            quote: '"Sirrah, your father\'s dead; / And what will you do now? How will you live?" / "As birds do, mother." / "What, with worms and flies?" / "With what I get, I mean; and so do they."',
            analysis:
              'The tender, witty exchange between mother and child makes the coming violence unbearable. The son\'s innocent resilience and quick intelligence make his murder all the more devastating. Shakespeare deliberately builds emotional attachment before destroying it.',
          },
          {
            name: 'Dramatic irony / bird imagery',
            quote: '"The most diminutive of birds, will fight, / Her young ones in her nest, against the owl."',
            analysis:
              'Lady Macduff compares herself to a small bird defending her nest against an owl (a predator associated with Macbeth throughout the play). The image of maternal instinct versus predatory violence crystallises the moral horror of the scene.',
          },
          {
            name: 'Child\'s innocence as moral commentary',
            quote: '"He has kill\'d me, mother: / Run away, I pray you!"',
            analysis:
              'The son\'s dying words prioritise his mother\'s survival over his own pain. His courage and selflessness provide a devastating contrast with Macbeth\'s selfish violence. The child\'s moral clarity exposes the depravity of the adult world that kills him.',
          },
          {
            name: 'Abandoned femininity',
            quote: '"I am in this earthly world; where to do harm / Is often laudable, to do good sometime / Accounted dangerous folly."',
            analysis:
              'Lady Macduff identifies the moral inversion of Macbeth\'s Scotland: doing harm is rewarded while doing good is dangerous. This directly echoes the witches\' "fair is foul, and foul is fair." The corruption has spread from individual to national level.',
          },
          {
            name: 'Urgency / failed warning',
            quote: '"I pray you, school yourself: but for your husband, / He is noble, wise, judicious."',
            analysis:
              'Ross\'s awkward, evasive reassurances reveal his inability to protect the family. His departure before the murderers arrive suggests either cowardice or strategic retreat. The messenger who warns them to flee arrives too late, making the scene a study in helplessness under tyranny.',
          },
        ],
      },
      {
        title: 'Act 4, Scene 3 — Malcolm Tests Macduff',
        summary:
          'In England, Malcolm tests Macduff\'s loyalty by pretending to be riddled with vices, including lust, greed, and a love of chaos. When Macduff despairs for Scotland, Malcolm reveals the test and confirms he is virtuous. Ross arrives with news of the Macduff family\'s slaughter. The scene ends with Macduff vowing revenge.',
        techniques: [
          {
            name: 'The testing scene / dramatic tension',
            quote: '"I am yet / Unknown to woman, never was forsworn, / Scarcely have coveted what was mine own."',
            analysis:
              'Malcolm\'s revelation that his earlier confessions of vice were a lie tests the audience as well as Macduff. The false confession serves a political purpose: Malcolm will not make his father\'s mistake of trusting too easily. His shrewdness qualifies him to be a better king than Duncan.',
          },
          {
            name: 'Catalogue of virtues / antithesis',
            quote: '"The king-becoming graces, / As justice, verity, temperance, stableness, / Bounty, perseverance, mercy, lowliness, / Devotion, patience, courage, fortitude."',
            analysis:
              'Malcolm lists twelve virtues required of a good king, creating a direct checklist against which Macbeth\'s rule fails on every count. The list functions as a political manifesto for legitimate kingship, flattering James I\'s self-image.',
          },
          {
            name: 'Redefining masculinity',
            quote: '"I shall do so; / But I must also feel it as a man."',
            analysis:
              'When Malcolm tells Macduff to "dispute it like a man," Macduff insists that genuine masculinity includes emotional depth and grief. This directly challenges Lady Macbeth\'s equation of manhood with violent action. Macduff\'s ability to grieve and fight simultaneously presents the play\'s healthiest model of masculinity.',
          },
          {
            name: 'Grief as moral force',
            quote: '"He has no children."',
            analysis:
              'Macduff\'s devastating three-word response to the news of his family\'s murder is one of Shakespeare\'s most powerful lines. It can be read three ways: Macbeth has no children so cannot understand a parent\'s grief; Macbeth has no children so Macduff cannot take equivalent revenge; Malcolm has no children so cannot truly understand. The ambiguity deepens its emotional impact.',
          },
          {
            name: 'Channelling grief into action',
            quote: '"Front to front / Bring thou this fiend of Scotland and myself; / Within my sword\'s length set him."',
            analysis:
              'Macduff transforms grief into righteous vengeance. The phrase "fiend of Scotland" dehumanises Macbeth just as the witches did ("something wicked"), showing how completely he has lost his place in the human community. The physical specificity of "sword\'s length" grounds the abstract desire for justice in concrete martial action.',
          },
        ],
      },
    ],
  },

  /* ── ACT 5 ─────────────────────────────────────────────────────────── */
  {
    act: 5,
    title: 'Collapse and Retribution',
    overview:
      'Act 5 brings the play to its devastating conclusion. Lady Macbeth\'s psychological collapse is dramatised in her sleepwalking scene. Macbeth, increasingly isolated, clings to the witches\' prophecies as his remaining support crumbles. The prophecies are fulfilled through unexpected means, and Macbeth meets his end at Macduff\'s hands. Malcolm is crowned, restoring legitimate order to Scotland.',
    scenes: [
      {
        title: 'Act 5, Scene 1 — The Sleepwalking Scene',
        summary:
          'A doctor and gentlewoman observe Lady Macbeth sleepwalking. She compulsively rubs her hands as if washing them, reliving the murders in fragmented speech. She refers to Duncan\'s blood, Banquo\'s death, and Lady Macduff\'s murder. The doctor recognises that her illness is beyond medicine.',
        techniques: [
          {
            name: 'Prose (not verse) / fragmentation',
            quote: '"Out, damned spot! Out, I say!--One: two: why, then, \'tis time to do\'t.--Hell is murky!--Fie, my lord, fie! a soldier, and afeard? What need we fear who knows it, when none can call our power to account?"',
            analysis:
              'Lady Macbeth speaks in prose rather than her earlier commanding verse, reflecting her mental disintegration. The fragmented sentences, dashes, and disjointed references to multiple murders create a collage of guilt. Her subconscious reveals everything she repressed while awake.',
          },
          {
            name: 'Ironic reversal / blood imagery',
            quote: '"Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand."',
            analysis:
              'This directly inverts her Act 2 claim that "a little water clears us of this deed." The blood has shifted from sight to smell, becoming even more pervasive and inescapable. The word "little" is poignant: she is diminished from the towering figure who summoned spirits to a fragile woman broken by guilt.',
          },
          {
            name: 'Religious despair',
            quote: '"Hell is murky!"',
            analysis:
              'This exclamation, buried within her disordered speech, suggests Lady Macbeth recognises her damnation. The adjective "murky" echoes the "thick night" and "fog and filthy air" she once summoned. The darkness she called for has become the darkness that imprisons her.',
          },
          {
            name: 'Medical diagnosis / limits of science',
            quote: '"This disease is beyond my practice... / More needs she the divine than the physician."',
            analysis:
              'The doctor admits that medicine cannot cure a sick conscience. His recommendation that she needs "the divine" (a priest) rather than a doctor locates her illness in the spiritual rather than the physical realm. For the Jacobean audience, this confirms that sin produces suffering that only God can address.',
          },
          {
            name: 'Compulsive washing / physical manifestation',
            quote: '"What, will these hands ne\'er be clean?"',
            analysis:
              'The obsessive hand-washing physically enacts the psychological torment of ineradicable guilt. The hands that once seemed easy to clean now represent permanent moral contamination. This image has become so culturally embedded that "Lady Macbeth syndrome" is a recognised psychological concept.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 2 — The Scottish Nobles March',
        summary:
          'Scottish nobles including Menteith, Angus, Caithness, and Lennox march to join Malcolm\'s English forces near Birnam Wood. They discuss Macbeth\'s deteriorating mental state and the hollowness of his rule.',
        techniques: [
          {
            name: 'Clothing imagery / metaphor',
            quote: '"Now does he feel his title / Hang loose about him, like a giant\'s robe / Upon a dwarfish thief."',
            analysis:
              'Angus compares Macbeth\'s stolen kingship to an oversized robe that does not fit. The image is both comic and damning: Macbeth is diminished ("dwarfish") and criminal ("thief"), wearing a role that was never meant for him. The clothing imagery recurs throughout the play, always emphasising the gap between the man and his title.',
          },
          {
            name: 'Medical metaphor',
            quote: '"Meet we the medicine of the sickly weal; / And with him pour we in our country\'s purge / Each drop of us."',
            analysis:
              'Caithness describes Malcolm\'s army as medicine for the sick state of Scotland. The extended medical metaphor (medicine, sickly, purge) treats Macbeth\'s tyranny as a disease that requires violent treatment. Each soldier is a "drop" of the cure, suggesting collective sacrifice.',
          },
          {
            name: 'Dehumanisation from within',
            quote: '"Who then shall blame / His pester\'d senses to recoil and start, / When all that is within him does condemn / Itself for being there?"',
            analysis:
              'Even Macbeth\'s own body rebels against him. The image of his senses recoiling from his own corruption suggests a man at war with himself. This internal self-condemnation is arguably the harshest punishment the play inflicts on Macbeth.',
          },
          {
            name: 'Unification of purpose',
            quote: '"Make we our march towards Birnam."',
            analysis:
              'The mention of Birnam is charged with dramatic irony: the audience knows the witches\' prophecy. The simple military command begins the process that will fulfil the seemingly impossible condition for Macbeth\'s defeat.',
          },
          {
            name: 'Plant imagery / natural order',
            quote: '"To dew the sovereign flower and drown the weeds."',
            analysis:
              'Malcolm is the "sovereign flower" (legitimate king) and Macbeth the "weed" (usurper). The organic metaphor returns the play to Duncan\'s planting imagery from Act 1, suggesting that the natural order reasserts itself. Legitimate kingship grows; illegitimate power is uprooted.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 3 — Macbeth\'s Defiance',
        summary:
          'In Dunsinane castle, Macbeth clings to the witches\' prophecies while receiving reports of deserting thanes. He asks the doctor about Lady Macbeth\'s condition and reflects on the emptiness of his life.',
        techniques: [
          {
            name: 'Bravado masking despair',
            quote: '"Till Birnam Wood remove to Dunsinane / I cannot taint with fear."',
            analysis:
              'Macbeth repeats the prophecy like a mantra, using it to suppress his rising fear. The dramatic irony is acute: the audience knows the wood is already on the move. His reliance on the witches\' words has replaced genuine courage with superstitious confidence.',
          },
          {
            name: 'Autumnal imagery / self-knowledge',
            quote: '"I have lived long enough: my way of life / Is fall\'n into the sere, the yellow leaf."',
            analysis:
              'Macbeth compares his life to an autumn leaf, dried and withered. The seasonal metaphor acknowledges that his vitality is spent. This rare moment of honest self-assessment shows a man who recognises what he has lost but sees no way to recover it.',
          },
          {
            name: 'Catalogue of losses',
            quote: '"And that which should accompany old age, / As honour, love, obedience, troops of friends, / I must not look to have."',
            analysis:
              'Macbeth lists the rewards of a life well-lived, all of which he has forfeited. The word "troops" echoes military language, ironically: the troops of friends he lacks are being replaced by troops of enemies. His isolation is complete.',
          },
          {
            name: 'Medical metaphor (for Scotland)',
            quote: '"If thou couldst, doctor, cast / The water of my land, find her disease, / And purge it to a sound and pristine health, / I would applaud thee to the very echo."',
            analysis:
              'Macbeth asks the doctor to diagnose Scotland itself, unconsciously acknowledging that he is the disease. "Cast the water" means to analyse urine, a diagnostic practice of the era. The irony is devastating: the cure for Scotland\'s disease is the removal of Macbeth.',
          },
          {
            name: 'Frustrated imperative',
            quote: '"Throw physic to the dogs; I\'ll none of it."',
            analysis:
              'Macbeth rejects medicine with contempt, dismissing both physical and spiritual healing. The explosive energy of "throw" contrasts with his earlier weariness, showing a man who oscillates between exhaustion and rage, unable to find any stable emotional ground.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 4 — Birnam Wood Moves',
        summary:
          'Malcolm orders his soldiers to cut branches from Birnam Wood to use as camouflage, concealing their numbers as they march on Dunsinane. The prophecy begins to be fulfilled.',
        techniques: [
          {
            name: 'Fulfilment of prophecy / dramatic irony',
            quote: '"Let every soldier hew him down a bough / And bear\'t before him: thereby shall we shadow / The numbers of our host."',
            analysis:
              'Malcolm\'s tactical decision unknowingly fulfils the witches\' prophecy. The practical military reasoning (concealment) achieves the supposedly impossible (the wood moving). Shakespeare demonstrates that the witches\' prophecies are equivocal: what seemed supernatural turns out to have a natural explanation.',
          },
          {
            name: 'Confidence of the righteous',
            quote: '"We learn no other but the confident tyrant / Keeps still in Dunsinane."',
            analysis:
              'The contrast between Macbeth\'s false confidence (based on prophecy) and Malcolm\'s true confidence (based on justice and numbers) highlights the difference between superstitious self-deception and legitimate self-assurance.',
          },
          {
            name: 'Theme of desertion',
            quote: '"Both more and less have given him the revolt."',
            analysis:
              'Both nobles ("more") and common soldiers ("less") have deserted Macbeth. The universal abandonment shows that his tyranny has alienated every level of society, reinforcing that power maintained through fear alone cannot endure.',
          },
          {
            name: 'Understatement / battlefield focus',
            quote: '"Certain the issue / Of the battle we will determine."',
            analysis:
              'Malcolm\'s matter-of-fact tone about determining the battle\'s outcome contrasts with Macbeth\'s increasingly desperate bravado. His pragmatic leadership offers a model of kingship that is both competent and morally grounded.',
          },
          {
            name: 'Ironic inversion of concealment',
            quote: '"Thereby shall we shadow / The numbers of our host."',
            analysis:
              'Throughout the play, Macbeth and Lady Macbeth have hidden their crimes behind false appearances. Now their enemies use the same technique (concealment) but for a just cause. The motif of hiding is turned against the hider.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 5 — "Tomorrow, and Tomorrow, and Tomorrow"',
        summary:
          'Macbeth declares the castle can withstand a siege, then receives news that Lady Macbeth is dead. He delivers his famous nihilistic soliloquy. A messenger then reports that Birnam Wood appears to be moving towards Dunsinane.',
        techniques: [
          {
            name: 'Repetition / monosyllabic diction',
            quote: '"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day / To the last syllable of recorded time."',
            analysis:
              'The triple repetition of "tomorrow" creates a sense of unbearable, meaningless duration. The monosyllabic words (each stressed equally) mimic the monotonous passage of time. "Creeps" and "petty" diminish time to something contemptible. Life has become an endurance test without purpose.',
          },
          {
            name: 'Extended metaphor / metatheatre',
            quote: '"Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more."',
            analysis:
              'The theatrical metaphor is deeply self-aware: Macbeth, himself a character on Shakespeare\'s stage, reduces all human existence to a meaningless performance. The "poor player" who "struts and frets" is both pathetic and pretentious. Being "heard no more" suggests total annihilation, not even a memory left behind.',
          },
          {
            name: 'Nihilism / climactic despair',
            quote: '"It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing."',
            analysis:
              'Life is dismissed as a meaningless narrative told by a fool. "Sound and fury" reduces all of Macbeth\'s violence and ambition to noise without substance. "Signifying nothing" is the play\'s most devastating verdict: Macbeth has emptied his own life of all meaning. This is not punishment from God but self-inflicted spiritual annihilation.',
          },
          {
            name: 'Emotional numbness',
            quote: '"She should have died hereafter; / There would have been a time for such a word."',
            analysis:
              'Macbeth\'s response to his wife\'s death is stunningly flat. "She should have died hereafter" can mean either "she would have died eventually anyway" or "she should have died at a more convenient time." Either reading reveals a man so drained of feeling that even his wife\'s death provokes only weariness, not grief.',
          },
          {
            name: 'Prophecy collapses',
            quote: '"I pull in resolution, and begin / To doubt the equivocation of the fiend / That lies like truth."',
            analysis:
              'When told Birnam Wood is moving, Macbeth finally recognises the witches\' equivocation: they told truths that functioned as lies. The phrase "lies like truth" captures the entire mechanism of their deception. His "resolution" (courage) deflates as his supernatural supports collapse.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 6 — The Battle Begins',
        summary:
          'Malcolm orders the soldiers to throw down their leafy camouflage and prepare for battle. Macduff focuses on finding Macbeth.',
        techniques: [
          {
            name: 'Military command / shedding of disguise',
            quote: '"Now near enough: your leavy screens throw down, / And show like those you are."',
            analysis:
              'The order to reveal themselves inverts the play\'s theme of concealment. Where Macbeth hid his true nature behind false appearances, Malcolm\'s army reveals its true strength. The shedding of disguise symbolises the triumph of truth over deception.',
          },
          {
            name: 'Focus and purpose',
            quote: '"Make all our trumpets speak; give them all breath, / Those clamorous harbingers of blood and death."',
            analysis:
              'The trumpets announce the restoration of legitimate order through martial force. "Harbingers" (heralds) connects this battle to justice rather than mere violence. The alliterative "blood and death" acknowledges the cost but frames it as necessary.',
          },
          {
            name: 'Macduff\'s singular focus',
            quote: '"Let me find him, fortune! / And more I beg not."',
            analysis:
              'Macduff asks only for the chance to face Macbeth personally. His single-minded purpose contrasts with Macbeth\'s scattered despair. The brevity of his prayer suggests a man who has channelled all grief into one action.',
          },
          {
            name: 'Contrast with Act 1 battle',
            quote: '"Alarums."',
            analysis:
              'The stage direction "Alarums" (trumpet calls) mirrors the opening battle of the play, but the moral positions are reversed: Macbeth, who was the hero of Act 1\'s battle, is now the enemy. The structural parallel emphasises how completely his character has inverted.',
          },
          {
            name: 'Economy of language',
            quote: '"Make all our trumpets speak."',
            analysis:
              'The scene\'s brevity is itself a technique: Shakespeare does not linger on battle preparation because the real climax is Macbeth\'s personal confrontation, not the military engagement. The short scene builds momentum towards the final encounter.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 7 — Young Siward Falls',
        summary:
          'Macbeth fights and kills young Siward, reassuring himself that no man born of woman can harm him. Macduff searches the battlefield for Macbeth. Malcolm and old Siward enter Dunsinane castle.',
        techniques: [
          {
            name: 'False confidence / tragic irony',
            quote: '"Thou wast born of woman. / But swords I smile at, weapons laugh to scorn, / Brandish\'d by man that\'s of a woman born."',
            analysis:
              'Macbeth\'s taunt to young Siward reveals his continued dependence on the witches\' equivocal prophecy. His bravado ("smile at," "laugh to scorn") is hollow because the audience knows Macduff is approaching. The dramatic irony makes his confidence tragic rather than heroic.',
          },
          {
            name: 'Bear-baiting imagery',
            quote: '"They have tied me to a stake; I cannot fly, / But bear-like, I must fight the course."',
            analysis:
              'Macbeth compares himself to a bear tied to a post in a bear-baiting arena, forced to fight dogs. The image is simultaneously pathetic and fierce: he is trapped but will fight with animal desperation. The bear-baiting metaphor also dehumanises him, aligning his final stand with bestial instinct rather than human courage.',
          },
          {
            name: 'Death of youth / pathos',
            quote: '"Why should I play the Roman fool, and die / On mine own sword?"',
            analysis:
              'Macbeth rejects the Roman (Stoic) tradition of suicide, choosing to fight rather than take the honourable way out. This refusal to follow classical precedent marks him as neither noble villain nor tragic hero in the traditional sense, but something more primal and desperate.',
          },
          {
            name: 'Macduff\'s determination',
            quote: '"That way the noise is. Tyrant, show thy face!"',
            analysis:
              'Macduff follows the sound of combat, actively hunting Macbeth. The epithet "Tyrant" reduces Macbeth from his name to his political crime. The imperative "show thy face" demands that Macbeth confront the consequences of his actions without hiding.',
          },
          {
            name: 'Castle falls / symbol',
            quote: '"The castle\'s gently rendered."',
            analysis:
              'The easy surrender of Dunsinane castle symbolises the collapse of Macbeth\'s power. "Gently rendered" means surrendered without resistance, showing that even his fortress has abandoned him. The castle that once seemed impregnable reflects the hollowness of his rule.',
          },
        ],
      },
      {
        title: 'Act 5, Scene 8 — Macbeth\'s Death and Malcolm\'s Coronation',
        summary:
          'Macbeth and Macduff face each other. Macbeth boasts that no man born of woman can harm him. Macduff reveals he was delivered by caesarean section. Macbeth briefly despairs but refuses to yield. They fight; Macduff kills Macbeth. Malcolm is hailed as King of Scotland.',
        techniques: [
          {
            name: 'Revelation / equivocation exposed',
            quote: '"Macduff was from his mother\'s womb / Untimely ripp\'d."',
            analysis:
              'Macduff\'s revelation that he was born by caesarean section exposes the witches\' equivocation. The word "untimely" suggests premature birth, and "ripp\'d" conveys violence that removes any sense of natural delivery. This literalistic loophole in the prophecy demonstrates how the witches told truth in order to deceive.',
          },
          {
            name: 'Despair then defiance',
            quote: '"I\'ll not yield, / To kiss the ground before young Malcolm\'s feet... / Yet I will try the last."',
            analysis:
              'Even knowing the prophecy has been broken, Macbeth refuses to surrender. "I\'ll try the last" is a final assertion of will that retains a shadow of his original martial courage. Some audiences find this defiant last stand admirable, others merely stubborn. The ambiguity preserves Macbeth\'s complexity as a tragic figure.',
          },
          {
            name: 'Cursing the witches',
            quote: '"And be these juggling fiends no more believed, / That palter with us in a double sense."',
            analysis:
              'Macbeth denounces the witches as "juggling fiends" who "palter" (equivocate) with double meanings. The word "juggling" suggests trickery and sleight of hand. This belated recognition of their deception comes too late to save him but provides the audience with a moral lesson about placing trust in supernatural reassurance.',
          },
          {
            name: 'Restoration of order',
            quote: '"Hail, King of Scotland!"',
            analysis:
              'The collective acclamation of Malcolm echoes the witches\' "All hail, Macbeth!" from Act 1, but this time the hailing is legitimate and communal rather than deceptive and supernatural. The structural parallel marks the completion of the play\'s moral arc from disorder to restored order.',
          },
          {
            name: 'Forward-looking language',
            quote: '"We will perform in measure, time and place... / What needful else / That calls upon us, by the grace of God."',
            analysis:
              'Malcolm\'s final speech invokes divine grace and promises orderly governance. "Measure, time and place" suggests measured, rational rule in contrast to Macbeth\'s impulsive violence. The invocation of God signals the restoration of the divinely sanctioned order that Macbeth disrupted.',
          },
        ],
      },
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────────── */

export default async function MacbethActsPage() {
  const board = await getServerBoard()
  if (board && !['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'].includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Macbeth", url: "https://theenglishhub.app/revision/texts/macbeth" },
          { name: "Act-by-Act Analysis", url: "https://theenglishhub.app/revision/texts/macbeth/acts" },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/macbeth" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Macbeth
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              Shakespeare — Play
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              All 5 Acts Scene-by-Scene
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Macbeth — Act-by-Act Study Guide
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Every scene with full public-domain quotations and language technique analysis
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            This guide breaks down all five acts of Macbeth scene by scene. Each scene
            includes a plot summary, at least five key quotations from Shakespeare&apos;s
            original text (public domain), and detailed analysis of the language techniques
            Shakespeare employs. Use it for close reading, essay planning, and exam
            preparation.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Jump to Act</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {ACTS.map((a) => (
            <Badge
              key={a.act}
              variant="outline"
              render={<a href={`#act-${a.act}`} />}
              className="cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Act {a.act}: {a.title}
            </Badge>
          ))}
        </div>
      </section>

      {/* Acts */}
      {ACTS.map((act) => (
        <section key={act.act} id={`act-${act.act}`} className="scroll-mt-24 space-y-6">
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="size-5 text-emerald-400" />
            <h2 className="text-heading-lg font-heading text-foreground">
              Act {act.act} — {act.title}
            </h2>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8 text-body-sm text-muted-foreground">
              <p>{act.overview}</p>
            </CardContent>
          </Card>

          {act.scenes.map((scene, si) => (
            <Card key={si}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading flex items-center gap-2">
                  <Feather className="size-4 text-violet-400 shrink-0" />
                  {scene.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-5 pb-6">
                {/* Scene summary */}
                <p className="text-body-sm text-muted-foreground">{scene.summary}</p>

                {/* Techniques */}
                <div className="space-y-4">
                  <p className="text-caption uppercase tracking-wide text-primary font-semibold">
                    Language Techniques
                  </p>
                  {scene.techniques.map((t, ti) => (
                    <div
                      key={ti}
                      className="rounded-xl border border-border/50 bg-muted/20 p-4 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <Badge variant="secondary" className="shrink-0 mt-0.5">
                          {t.name}
                        </Badge>
                      </div>
                      <p className="text-body-md font-medium italic text-foreground flex items-start gap-2">
                        <Quote className="size-4 text-violet-400 shrink-0 mt-1" />
                        {t.quote}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{t.analysis}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      ))}

      {/* Public domain note */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        All quotations are from Shakespeare&apos;s <em>Macbeth</em> (c. 1606), which is in the
        public domain. Analysis and study notes are original to The English Hub.
      </p>
    </div>
  )
}
