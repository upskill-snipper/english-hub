import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'
import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import EmailCaptureCard from '@/components/marketing/EmailCaptureCard'

type TopQuote = {
  quote: string
  character: string
  ao2: string
}

const TOP_FIVE_QUOTES: TopQuote[] = [
  {
    quote: '"Vaulting ambition, which o\'erleaps itself / And falls on the other."',
    character: 'Macbeth — Act 1, Scene 7',
    ao2: 'The equestrian metaphor of "vaulting" suggests ambition is a horse Macbeth tries to mount; it leaps too far and throws him. Shakespeare names the play\'s tragic engine in Macbeth\'s own voice, making him conscious of the flaw that will destroy him. The enjambment between "itself" and "And falls" enacts the fall.',
  },
  {
    quote: '"Look like th\' innocent flower, / But be the serpent under\'t."',
    character: 'Lady Macbeth — Act 1, Scene 5',
    ao2: 'The biblical allusion to the Genesis serpent aligns the Macbeths\' regicide with original sin and casts Duncan as an Eden-like innocent. The antithesis of "flower" and "serpent" crystallises the appearance-vs-reality theme into a single image, and the imperative verbs frame Lady Macbeth as the play\'s strategist of deception.',
  },
  {
    quote: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand?"',
    character: 'Macbeth — Act 2, Scene 2',
    ao2: 'The classical allusion to Neptune and the hyperbole of "all great Neptune\'s ocean" convey the cosmic enormity of regicide; not even a god of the sea can cleanse him. The rhetorical question signals psychological collapse moments after the murder, and the blood image becomes a leitmotif that returns in Lady Macbeth\'s sleepwalking scene.',
  },
  {
    quote: '"Out, damned spot! out, I say!"',
    character: 'Lady Macbeth — Act 5, Scene 1',
    ao2: 'The fragmented exclamatives and shift from blank verse to broken prose dramatise Lady Macbeth\'s mental disintegration. "Damned" carries religious weight, suggesting she recognises her soul as condemned. The compulsive imperative inverts her earlier confidence that "a little water clears us of this deed," proving guilt cannot be washed away.',
  },
  {
    quote:
      '"Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more."',
    character: 'Macbeth — Act 5, Scene 5',
    ao2: 'The theatrical metaphor reduces existence to a brief, futile performance and is meta-theatrically self-aware: Macbeth is himself a player on Shakespeare\'s stage. The verbs "struts" and "frets" diminish human action to vanity and anxiety. The soliloquy marks the nihilistic endpoint of ambition, where Macbeth has murdered his way to a throne that signifies nothing.',
  },
]

type ComparisonCard = {
  href: string
  title: string
  reason: string
}

const COMPARISON_CARDS: ComparisonCard[] = [
  {
    href: '/revision/texts/romeo-and-juliet',
    title: 'Romeo and Juliet',
    reason:
      'Compare on: Shakespearean tragedy structure, fate vs free will, and the role of supernatural or prophetic forces in driving young protagonists to ruin.',
  },
  {
    href: '/revision/texts/jekyll-and-hyde',
    title: 'Jekyll and Hyde',
    reason:
      "Compare on: duality and the divided self — Macbeth's public honour vs private murderousness mirrors Jekyll's respectable doctor vs unleashed Hyde, and both texts treat ambition as self-destructive.",
  },
  {
    href: '/revision/texts/an-inspector-calls',
    title: 'An Inspector Calls',
    reason:
      "Compare on: power, guilt and collective responsibility — the Macbeths' private guilt mirrors the Birlings' communal denial, and both works dramatise how those who wield power refuse to face its consequences.",
  },
]

export const metadata: Metadata = {
  title: 'Macbeth revision guide — themes, characters, key quotes — The English Hub',
  description:
    'Macbeth GCSE revision — act-by-act analysis, characters, themes, key quotes, context and essay plans. Aligned to AQA, Edexcel, OCR and Eduqas mark schemes.',
  alternates: { canonical: 'https://theenglishhub.app/revision/texts/macbeth' },
}

const data: TextGuideData = {
  title: 'Macbeth',
  author: 'William Shakespeare',
  year: '1606',
  category: 'Play',
  badge: 'Most-studied GCSE text',
  intro:
    "Shakespeare's shortest and most intense tragedy charts the meteoric rise and catastrophic fall of a Scottish general who murders his king to seize the throne. Driven by prophecy, ambition, and the relentless goading of his wife, Macbeth descends from honoured warrior to paranoid tyrant, proving that unchecked ambition ultimately devours those who serve it.",
  quickInfo: {
    genre: 'Tragedy',
    setting: 'Scotland and England, 11th century',
    length: '5 acts, ~2,100 lines',
    published: 'Written c. 1606, First Folio 1623',
  },

  plotSummary: [
    "The play opens amid thunder and civil war. Three witches plan to meet Macbeth, a general returning from battle with his companion Banquo. The witches hail Macbeth as Thane of Glamis, Thane of Cawdor, and future king. When the first prophecy is immediately confirmed by King Duncan's messenger, Macbeth begins to entertain murderous thoughts. Lady Macbeth, reading her husband's letter about the prophecy, fears he is \"too full o' th' milk of human kindness\" and resolves to push him towards regicide. When Duncan arrives at their castle as an honoured guest, she persuades the wavering Macbeth to murder him that very night.",

    "Macbeth stabs Duncan in his sleep and is immediately tormented by guilt, imagining he hears a voice cry \"Sleep no more! Macbeth does murder sleep.\" Lady Macbeth takes charge, smearing the sleeping grooms with blood to frame them. Duncan's body is discovered at dawn by Macduff, and in the ensuing chaos Macbeth kills the grooms, claiming righteous fury. Duncan's sons Malcolm and Donalbain flee to England and Ireland respectively, and Macbeth is crowned king. However, he cannot rest: the witches also prophesied that Banquo's descendants would be kings, so Macbeth hires murderers to kill Banquo and his son Fleance. Banquo is killed, but Fleance escapes. At a royal banquet, Macbeth is horrified by the ghost of Banquo sitting in his chair, and his terrified outburst alarms the Scottish nobles.",

    'Macbeth visits the witches again and receives three new apparitions: to beware Macduff, that no man born of woman can harm him, and that he will not be defeated until Birnam Wood comes to Dunsinane Hill. Emboldened by the seemingly impossible conditions, Macbeth has Macduff\'s wife and children slaughtered when he learns Macduff has fled to England. In England, Macduff joins Malcolm, and they raise an army with English support. Meanwhile, Lady Macbeth has been driven mad by guilt. She sleepwalks through the castle obsessively washing imaginary blood from her hands, crying "Out, damned spot!" Her doctor and gentlewoman watch helplessly as she relives the crimes she helped orchestrate.',

    'Malcolm\'s army marches on Dunsinane, using branches from Birnam Wood as camouflage, fulfilling the witches\' prophecy. Lady Macbeth dies offscreen, and Macbeth delivers his famous nihilistic soliloquy: "Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage." In the final battle, Macbeth confronts Macduff, who reveals he was "from his mother\'s womb untimely ripped" by caesarean section and is therefore not technically "born of woman." Macduff kills Macbeth and presents his severed head to Malcolm, who is proclaimed the rightful King of Scotland, restoring the natural order that Macbeth\'s ambition had shattered.',
  ],

  characters: [
    {
      name: 'Macbeth',
      role: 'Protagonist; Thane of Glamis, later King of Scotland',
      body: 'Macbeth begins the play as a courageous and loyal warrior, praised as "brave Macbeth" and "Bellona\'s bridegroom." However, the witches\' prophecy awakens a latent ambition that, once ignited by Lady Macbeth\'s persuasion, consumes him entirely. His soliloquies reveal a man acutely aware of the moral horror of his actions yet unable to stop himself: "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er." He transitions from reluctant murderer to paranoid tyrant, ordering the deaths of Banquo, Lady Macduff, and her children without the agonised hesitation he showed before killing Duncan. His final soliloquy, "Tomorrow, and tomorrow, and tomorrow," reveals a man stripped of all meaning and feeling, who sees life itself as empty and futile. Shakespeare uses Macbeth as a tragic hero whose fatal flaw of "vaulting ambition" leads to his inevitable destruction.',
    },
    {
      name: 'Lady Macbeth',
      role: "Macbeth's wife and co-conspirator",
      body: 'Lady Macbeth is one of Shakespeare\'s most complex female characters. On hearing of the witches\' prophecy, she calls on dark spirits to "unsex me here" and fill her "from the crown to the toe top-full of direst cruelty," explicitly rejecting femininity in favour of ruthless ambition. She is the driving force behind Duncan\'s murder, questioning her husband\'s manhood and orchestrating the practical details while Macbeth falters. Her taunt "When you durst do it, then you were a man" reveals her manipulation of gender expectations. However, her iron resolve crumbles as guilt takes hold. By Act 5, she is sleepwalking and hallucinating, desperately trying to wash invisible blood from her hands: "Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand." Her offstage death, likely by suicide, completes her arc from fierce ambition to psychological destruction, showing that guilt cannot be suppressed indefinitely.',
    },
    {
      name: 'Banquo',
      role: "Macbeth's fellow general and friend; father of Fleance",
      body: "Banquo serves as a moral foil to Macbeth. He hears the same prophecy but responds with caution rather than ambition, warning that \"the instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.\" Where Macbeth acts on the witches' words, Banquo resists temptation, despite being promised that his descendants will be kings. After Duncan's murder, Banquo suspects Macbeth: \"Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't.\" His murder shows how far Macbeth has fallen, and his ghost's appearance at the banquet serves as a physical manifestation of Macbeth's guilt. Historically, Banquo was included as a virtuous ancestor of James I, who traced his lineage to Banquo's son Fleance.",
    },
    {
      name: 'King Duncan',
      role: 'King of Scotland; murdered by Macbeth',
      body: 'Duncan is presented as a gracious, trusting, and generous king who represents the divinely ordained order. He praises Macbeth lavishly, calling him "O worthiest cousin," and rewards loyalty with titles and honour. His fatal flaw is excessive trust: he admits "There\'s no art / To find the mind\'s construction in the face" after the previous Thane of Cawdor\'s betrayal, yet immediately places the same trust in the new Thane of Cawdor, Macbeth. His murder is presented as an act against nature itself: on the night he dies, "chimneys were blown down" and "the earth was feverous and did shake." Duncan\'s goodness makes Macbeth\'s crime all the more horrifying, and his death disrupts the natural order of Scotland, plunging the nation into tyranny and chaos.',
    },
    {
      name: 'Macduff',
      role: 'Thane of Fife; leads the opposition to Macbeth',
      body: 'Macduff is the play\'s chief antagonist to Macbeth and represents justice, honour, and righteous vengeance. He is the first to discover Duncan\'s body, crying "O horror, horror, horror! Tongue nor heart cannot conceive nor name thee!" and is notably absent from Macbeth\'s coronation, signalling his early suspicion. His decision to flee to England, leaving his family unprotected, leads to their slaughter and provides the play\'s most emotionally devastating scene. When Malcolm tells him to "Dispute it like a man," Macduff replies, "I shall do so; / But I must also feel it as a man," challenging rigid ideas of masculinity by insisting that grief and strength can coexist. His revelation that he was "from his mother\'s womb / Untimely ripp\'d" fulfils the witches\' prophecy and enables him to destroy Macbeth, restoring moral order to Scotland.',
    },
    {
      name: 'The Witches (Weird Sisters)',
      role: "Supernatural agents who prophesy Macbeth's rise",
      body: 'The three witches open the play with "Fair is foul, and foul is fair," establishing the theme of moral inversion that runs throughout the tragedy. They exist in a deliberate moral ambiguity: Shakespeare never clarifies whether they cause Macbeth\'s downfall or merely predict what he would have done anyway. Their prophecies are technically true but deeply misleading, exploiting equivocation to give Macbeth a false sense of invincibility. They speak in trochaic tetrameter, setting them apart from the iambic pentameter of the court and marking them as creatures outside the natural order. Their chant "Double, double toil and trouble; / Fire burn and cauldron bubble" has become one of the most recognisable passages in English literature. For a Jacobean audience, the witches would have been genuinely terrifying, reflecting widespread belief in witchcraft and King James I\'s personal obsession with demonology.',
    },
    {
      name: 'Malcolm',
      role: "Duncan's eldest son; heir to the Scottish throne",
      body: 'Malcolm initially appears as a passive figure who flees after his father\'s murder, but he matures into a shrewd and cautious leader. In the extended testing scene with Macduff in England (Act 4, Scene 3), Malcolm pretends to be riddled with vices to test Macduff\'s loyalty, demonstrating the political wisdom his father lacked. He lists the "king-becoming graces" such as "justice, verity, temperance, stableness," presenting himself as Duncan\'s opposite in terms of political awareness while sharing his father\'s virtue. His final speech, in which he rewards his supporters and invites them to see him crowned "at Scone," restores order and legitimate kingship, bringing the play full circle.',
    },
  ],

  themes: [
    {
      title: 'Ambition',
      body: "Ambition is the engine of the entire tragedy. Macbeth himself identifies it as his only motive for murder: \"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on the other.\" Shakespeare does not present ambition as inherently evil; Macbeth's military ambition is praised at the start of the play. It is unchecked, morally unmoored ambition that proves destructive. The witches provide the spark, Lady Macbeth fans the flame, but the ambition itself belongs to Macbeth. Banquo hears the same prophecy but does not act on it, proving that ambition requires a willing agent.\n\nThe play traces a clear arc: ambition leads to action, action to guilt, guilt to paranoia, and paranoia to further violence. Each murder is easier for Macbeth than the last, suggesting that ambition, once it overrides conscience, becomes self-perpetuating. Lady Macbeth's ambition is arguably even more striking because, as a woman in a patriarchal society, the throne is not hers to claim directly. She must channel her ambition through her husband, which makes her manipulation both more calculated and more psychologically costly.\n\nShakespeare's message resonated powerfully in Jacobean England, where ambitious nobles had recently attempted to blow up Parliament in the Gunpowder Plot. The play serves as a cautionary tale: ambition that defies the divinely ordained social order leads not to greatness but to destruction.",
    },
    {
      title: 'Guilt and Conscience',
      body: 'Guilt pervades the play from the moment Macbeth kills Duncan. His hallucination of a floating dagger before the murder and his inability to say "Amen" afterwards reveal a conscience that resists what his ambition demands. The voice that cries "Sleep no more! Macbeth does murder sleep" introduces the symbolic link between guilt and insomnia that haunts both Macbeths. Sleep represents innocence and peace of mind, and by murdering the sleeping Duncan, Macbeth has destroyed his own capacity for rest.\n\nLady Macbeth\'s guilt follows a different trajectory. She appears invulnerable at first, dismissing her husband\'s terror with "A little water clears us of this deed." But guilt works on her unconsciously, erupting in her sleepwalking scene where she compulsively washes her hands and relives the murders. The doctor\'s observation that "unnatural deeds / Do breed unnatural troubles" connects guilt to the play\'s wider theme of nature disrupted by crime. Her descent into madness and death demonstrates that suppressing guilt only makes its eventual emergence more devastating.\n\nShakespeare uses guilt as evidence of a moral order that exists regardless of whether characters acknowledge it. Even as Macbeth becomes a hardened killer, his nihilistic despair in Act 5 can be read as the final expression of a conscience that has burned through every other emotion, leaving nothing but emptiness.',
    },
    {
      title: 'The Supernatural',
      body: "The supernatural suffuses every level of the play, from the witches' prophecies to Banquo's ghost to Lady Macbeth's invocation of evil spirits. Shakespeare uses it to create atmosphere, drive the plot, and raise profound questions about fate and free will. The witches' opening line, \"Fair is foul, and foul is fair,\" establishes a world where moral boundaries are unstable, and Macbeth's first line, \"So foul and fair a day I have not seen,\" immediately connects him to their disordered realm.\n\nThe play deliberately refuses to resolve whether the supernatural forces control events or merely reflect the characters' inner desires. The witches prophesy what Macbeth already wants; the dagger he sees before Duncan's murder may be a supernatural omen or a projection of his own guilt; Banquo's ghost may be real or a hallucination. This ambiguity is central to the play's power.\n\nFor Shakespeare's original audience, the supernatural elements carried real weight. James I had written Daemonologie (1597), a treatise on witchcraft, and had personally overseen witch trials. The portrayal of the witches as malevolent, deceiving, and ultimately serving evil would have confirmed the king's beliefs while also flattering his intellectual interests. The play links the supernatural firmly to moral transgression: it is those who seek forbidden knowledge and power who become entangled with dark forces.",
    },
    {
      title: 'Kingship and Power',
      body: 'Macbeth explores what makes a good or bad ruler by contrasting Duncan, Macbeth, and Malcolm as three models of kingship. Duncan embodies the medieval ideal of the gracious, divinely appointed monarch. He rewards loyalty, dispenses justice, and is mourned as a saintly king. However, his excessive trust makes him vulnerable, suggesting that goodness alone is not sufficient for effective rule.\n\nMacbeth\'s reign is its inverse: he rules through fear, suspicion, and violence. He has no legitimate claim to the throne, and the natural world itself rebels against his authority. His subjects serve him out of obligation rather than love, and he becomes increasingly isolated, admitting that his life has fallen "into the sere, the yellow leaf" and that he has "honour, love, obedience, troops of friends, / I must not look to have." Shakespeare uses Macbeth\'s tyranny to dramatise the consequences of illegitimate power.\n\nMalcolm represents a synthesis: he has Duncan\'s virtue but adds political shrewdness, testing Macduff\'s loyalty before trusting him. His list of "king-becoming graces" including "justice, verity, temperance" provides a direct checklist against which Macbeth\'s rule fails on every count. The play\'s endorsement of rightful, divinely sanctioned monarchy would have pleased James I, who promoted the doctrine of the Divine Right of Kings and saw himself as Duncan\'s legitimate successor through the line of Banquo.',
    },
    {
      title: 'Appearance vs Reality',
      body: 'The gap between appearance and reality is announced in the play\'s first scene: "Fair is foul, and foul is fair." Nothing in Macbeth is what it seems. The witches\' prophecies appear to promise glory but deliver destruction. Macbeth appears to be a loyal subject while plotting regicide. Lady Macbeth instructs her husband to "look like the innocent flower, / But be the serpent under\'t," articulating the play\'s central deception. Duncan\'s castle, which he praises for its pleasant atmosphere, becomes the site of his murder.\n\nShakespeare explores this theme through the motif of equivocation, which had particular resonance for Jacobean audiences. The Gunpowder Plot trials of 1606 had exposed the Jesuit doctrine of equivocation, the idea that one could mislead without technically lying. The witches are the play\'s great equivocators: every prophecy is literally true but deliberately misleading. "None of woman born" excludes caesarean birth; Birnam Wood "moves" through soldiers carrying branches. The Porter\'s comic scene explicitly references equivocation, calling his gate "the other devil\'s name" for an equivocator.\n\nThe theme extends to self-deception. Macbeth convinces himself that each murder will be the last, that security can be achieved through further violence. Lady Macbeth believes she can commit murder and simply wash her hands of it. Both discover that the reality of guilt cannot be concealed by the appearance of composure.',
    },
    {
      title: 'Gender and Masculinity',
      body: 'Shakespeare interrogates ideas of masculinity throughout the play. Lady Macbeth equates manhood with violence and ambition, taunting Macbeth by questioning his courage: "When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man." She herself asks evil spirits to "unsex me here," suggesting that femininity and ruthlessness are incompatible in her worldview. She weaponises gender expectations to manipulate Macbeth into murder.\n\nHowever, the play ultimately challenges Lady Macbeth\'s reductive definition of manhood. Macduff provides an alternative model when, grieving for his murdered family, he insists, "I shall do so; / But I must also feel it as a man." Here, true masculinity encompasses emotional depth, compassion, and moral feeling rather than suppressing them. Malcolm\'s "king-becoming graces" similarly define male authority through virtue rather than violence.\n\nMacbeth himself is trapped by toxic masculinity. He murders Duncan partly to prove his manhood to his wife, and he sends murderers after Banquo by questioning their masculinity in exactly the way Lady Macbeth questioned his. The cycle of violence is perpetuated through a corrupted ideal of what it means to be a man. Lady Macbeth\'s eventual breakdown suggests that the attempt to reject feminine qualities such as compassion and nurturing comes at a devastating psychological cost.',
    },
  ],

  historicalContext: [
    'Macbeth was written around 1606, shortly after James VI of Scotland became James I of England in 1603, uniting the two crowns. Shakespeare crafted the play as a deliberate compliment to his new patron. James traced his ancestry to the historical Banquo, which explains why Shakespeare transformed Banquo from a co-conspirator in the source material (Holinshed\'s Chronicles) into a noble, innocent victim. The "show of eight kings" that the witches conjure for Macbeth in Act 4 depicts the Stuart line descending from Banquo, with the last king holding a mirror that would have symbolically reflected James himself in the audience.',

    'The play was written in the immediate aftermath of the Gunpowder Plot of November 1605, when Catholic conspirators attempted to blow up Parliament and assassinate James I. The themes of treason, regicide, equivocation, and the violation of the sacred bond between subject and sovereign would have carried intense topical resonance. The Porter\'s reference to "an equivocator, that could swear in both the scales against either scale" directly alludes to the trial of the Jesuit Henry Garnet, who defended the doctrine of equivocation during his prosecution for involvement in the plot. The play\'s unambiguous condemnation of regicide served both as political commentary and as reassurance to a king who had narrowly escaped assassination.',

    "James I had a well-documented fascination with witchcraft and demonology. In 1597, he published Daemonologie, a treatise arguing for the reality of witchcraft and advocating harsher persecution of witches. He had personally interrogated accused witches during the North Berwick witch trials in 1590, where suspects confessed to raising storms to sink the ship carrying James and his new bride from Denmark. Shakespeare's portrayal of the witches as genuinely malevolent supernatural beings who manipulate a vulnerable man into damnation reflected and validated the king's beliefs, making the play both topical entertainment and royal flattery.",

    "The doctrine of the Divine Right of Kings is central to the play's moral framework. Jacobean audiences widely believed that monarchs were God's appointed representatives on earth, and that to murder a king was not merely a political crime but a sin against the divine order. This belief explains the cosmic disturbances that follow Duncan's murder: an unnatural darkness covers the land, Duncan's horses eat each other, and an owl kills a falcon. The natural world itself rebels against the violation of God's order. Macbeth's Scotland is a land in which \"sighs and groans and shrieks that rend the air / Are made, not mark'd,\" a nation suffering under a ruler who has no divine mandate. The play's resolution, with Malcolm's restoration, affirms that legitimate succession and divinely sanctioned kingship will always triumph over usurped power.",
  ],

  quotations: [
    {
      quote: '"Fair is foul, and foul is fair."',
      who: 'The Witches — Act 1, Scene 1',
      analysis:
        "The play's opening paradox establishes the central theme of moral inversion. What appears good may be evil and vice versa. This chiasmus (a reversed grammatical structure) mirrors the topsy-turvy world the witches inhabit and foreshadows the deception and equivocation that will drive the plot. It also introduces the motif of doubles and reversals that pervades the play.",
    },
    {
      quote: '"Yet do I fear thy nature; / It is too full o\' th\' milk of human kindness."',
      who: 'Lady Macbeth — Act 1, Scene 5',
      analysis:
        'Lady Macbeth assesses her husband\'s weakness: he has ambition but lacks the ruthlessness to act on it. The metaphor of "milk" associates kindness with femininity and nurturing, qualities she intends to override. Ironically, her complaint that Macbeth is too kind reveals that she understands his fundamental decency, which she must actively corrupt.',
    },
    {
      quote: '"Look like th\' innocent flower, / But be the serpent under\'t."',
      who: 'Lady Macbeth — Act 1, Scene 5',
      analysis:
        'Lady Macbeth instructs Macbeth to conceal his murderous intentions behind a welcoming exterior. The biblical allusion to the serpent in the Garden of Eden aligns their planned regicide with the original sin, casting Duncan as an innocent Adam and the Macbeths as agents of the devil. This encapsulates the appearance versus reality theme.',
    },
    {
      quote: '"Is this a dagger which I see before me, / The handle toward my hand?"',
      who: 'Macbeth — Act 2, Scene 1',
      analysis:
        "Macbeth's hallucination of a floating dagger before Duncan's murder dramatises his psychological conflict. The dagger leads him towards the murder, but its unreality raises questions about agency: is Macbeth being supernaturally guided or is his own guilt-ridden mind projecting his intentions? The fact that the handle points towards him suggests temptation offering itself willingly.",
    },
    {
      quote: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand?"',
      who: 'Macbeth — Act 2, Scene 2',
      analysis:
        'Immediately after killing Duncan, Macbeth recognises the permanence of his guilt. The hyperbole of an entire ocean being insufficient to cleanse his hands conveys the enormity of regicide. This contrasts sharply with Lady Macbeth\'s dismissive response, "A little water clears us of this deed," a confidence that will be devastatingly reversed in her sleepwalking scene.',
    },
    {
      quote: '"Nought\'s had, all\'s spent, / Where our desire is got without content."',
      who: 'Lady Macbeth — Act 3, Scene 2',
      analysis:
        "This couplet captures the tragic irony of the Macbeths' situation: they have achieved everything they desired yet gained nothing of value. The rhyming couplet (spent/content) gives the observation a proverbial quality, making it sound like a universal truth about the emptiness of ill-gotten gains. It marks the beginning of Lady Macbeth's disillusionment.",
    },
    {
      quote:
        '"I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er."',
      who: 'Macbeth — Act 3, Scene 4',
      analysis:
        'This extended metaphor imagines guilt as a river of blood that Macbeth has waded halfway across. The word "tedious" is chillingly understated: returning to virtue has become merely inconvenient rather than morally desirable. The metaphor suggests that once a certain threshold of evil is crossed, the moral cost of repentance feels equal to the cost of continuing, trapping the sinner in a cycle of violence.',
    },
    {
      quote: '"Double, double toil and trouble; / Fire burn and cauldron bubble."',
      who: 'The Witches — Act 4, Scene 1',
      analysis:
        "The witches' famous incantation uses trochaic tetrameter (stressed-unstressed rhythm) in contrast to the play's standard iambic pentameter, marking the witches as beings outside the natural order. The chanting, repetitive quality mimics a ritual spell. The word \"double\" reinforces the play's motif of duplicity and equivocation, while the grotesque ingredients of their cauldron symbolise the moral corruption they represent.",
    },
    {
      quote: '"By the pricking of my thumbs, / Something wicked this way comes."',
      who: 'Second Witch — Act 4, Scene 1',
      analysis:
        'The witch senses Macbeth\'s approach through a physical sensation, suggesting a supernatural attunement to evil. Crucially, the witch calls Macbeth "something wicked" rather than "someone," stripping him of his humanity. By this point in the play, Macbeth has become so corrupted that even the witches, themselves agents of evil, recognise him as wicked.',
    },
    {
      quote: '"Out, damned spot! Out, I say!"',
      who: 'Lady Macbeth — Act 5, Scene 1',
      analysis:
        'Lady Macbeth\'s most famous line occurs during her sleepwalking scene, where she compulsively tries to wash imaginary blood from her hands. The blood that she once dismissed as easily washed away has become a permanent psychological stain. The word "damned" carries religious weight, suggesting she recognises that her soul is condemned. Her fragmented prose in this scene contrasts with her earlier commanding verse, reflecting her mental disintegration.',
    },
    {
      quote:
        '"Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand."',
      who: 'Lady Macbeth — Act 5, Scene 1',
      analysis:
        'This line directly inverts Macbeth\'s earlier "Neptune\'s ocean" image, showing that Lady Macbeth has arrived at the same recognition of ineradicable guilt. The sensory shift from sight to smell suggests the guilt has become even more pervasive and inescapable. The word "little" is poignant: she is suddenly diminished, no longer the towering figure who summoned evil spirits but a small, fragile woman destroyed by remorse.',
    },
    {
      quote:
        '"Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty."',
      who: 'Lady Macbeth — Act 1, Scene 5',
      analysis:
        'Lady Macbeth calls on dark spirits to strip away her femininity so she can participate in murder. The verb "unsex" is a violent demand to remove the compassion and nurturing associated with womanhood. The request to be filled "from the crown to the toe" with cruelty suggests she wants evil to saturate her completely. The invocation parallels a demonic possession, aligning her ambition with the supernatural forces that drive the play.',
    },
    {
      quote:
        '"When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man."',
      who: 'Lady Macbeth — Act 1, Scene 7',
      analysis:
        'Lady Macbeth manipulates her husband by equating manhood with the willingness to murder. She redefines masculinity as the capacity for violence, shaming Macbeth into acting against his conscience. This is a key quotation for the theme of gender, as it shows how toxic definitions of masculinity can be weaponised to drive destructive behaviour.',
    },
    {
      quote: '"I dare do all that may become a man; / Who dares do more is none."',
      who: 'Macbeth — Act 1, Scene 7',
      analysis:
        "Macbeth's initial response to Lady Macbeth offers a more nuanced definition of manhood: true manliness has moral limits, and exceeding them makes one less than human, not more. This line is tragically ironic, as Macbeth will soon abandon this principled position under his wife's pressure. It reveals that Macbeth understands the moral truth but lacks the strength to hold to it.",
    },
    {
      quote: '"I shall do so; / But I must also feel it as a man."',
      who: 'Macduff — Act 4, Scene 3',
      analysis:
        "When Malcolm tells him to \"dispute it like a man\" after learning of his family's murder, Macduff insists that genuine masculinity includes emotional depth and grief. This directly challenges Lady Macbeth's definition of manhood as violent action. Macduff proves that strength and sensitivity are compatible, offering the play's most positive model of masculinity.",
    },
    {
      quote: '"There\'s no art / To find the mind\'s construction in the face."',
      who: 'King Duncan — Act 1, Scene 4',
      analysis:
        "Duncan reflects on the treachery of the former Thane of Cawdor, observing that one cannot read someone's true thoughts from their appearance. The dramatic irony is devastating: he speaks this line just as he is about to place his trust in the new Thane of Cawdor, Macbeth, who is already contemplating his murder. The quotation encapsulates the appearance versus reality theme.",
    },
    {
      quote: '"Stars, hide your fires; / Let not light see my black and deep desires."',
      who: 'Macbeth — Act 1, Scene 4',
      analysis:
        "Macbeth's aside reveals his first conscious embrace of dark ambition. The opposition of light and darkness is a central motif: light represents goodness, truth, and divine order, while darkness conceals evil. By asking the stars to hide, Macbeth is symbolically asking heaven to look away while he pursues his murderous intentions, aligning himself with the forces of darkness.",
    },
    {
      quote:
        '"The instruments of darkness tell us truths, / Win us with honest trifles, to betray\'s / In deepest consequence."',
      who: 'Banquo — Act 1, Scene 3',
      analysis:
        "Banquo recognises the witches' strategy: they offer small, verifiable truths to build trust before delivering the truly destructive prophecy. This line demonstrates Banquo's moral clarity and serves as a warning that Macbeth ignores. It also articulates the play's view of the supernatural as fundamentally deceptive, using truth itself as a weapon.",
    },
    {
      quote:
        '"Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more."',
      who: 'Macbeth — Act 5, Scene 5',
      analysis:
        "Macbeth's nihilistic soliloquy, delivered upon hearing of Lady Macbeth's death, reduces all of human existence to a meaningless performance. The theatrical metaphor (a \"poor player\" on a stage) is deeply self-aware, as Macbeth is himself a character on Shakespeare's stage. The passage represents Macbeth's final psychological state: not remorse, but a terrifying emptiness where ambition has burned away all meaning, leaving only despair.",
    },
    {
      quote: '"It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing."',
      who: 'Macbeth — Act 5, Scene 5',
      analysis:
        'The conclusion of the "Tomorrow" soliloquy dismisses life as a meaningless story. "Sound and fury" suggests that all of Macbeth\'s violence and ambition have amounted to nothing. This is the ultimate consequence of his actions: not punishment from an external force, but the realisation that he has emptied his own life of all purpose, love, and connection. The phrase "signifying nothing" is devastating in its finality.',
    },
    {
      quote:
        '"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day / To the last syllable of recorded time."',
      who: 'Macbeth — Act 5, Scene 5',
      analysis:
        'The opening of Macbeth\'s most famous soliloquy uses repetition and monosyllabic diction to create a sense of unbearable monotony and weariness. The word "creeps" suggests time moving with painful slowness, and "petty pace" diminishes it further. Having murdered his way to the throne, Macbeth finds that the future holds nothing worth living for. The speech is the tragic culmination of his journey from ambitious warrior to hollowed-out nihilist.',
    },
    {
      quote: '"What, will these hands ne\'er be clean?"',
      who: 'Lady Macbeth — Act 5, Scene 1',
      analysis:
        "This question during the sleepwalking scene reveals Lady Macbeth's unconscious recognition that her guilt is permanent. The hands that once seemed easy to wash now represent indelible moral contamination. The line connects to the blood imagery that runs through the entire play, from Duncan's murder to Macbeth's \"river of blood\" metaphor, showing how guilt accumulates and ultimately overwhelms those who try to suppress it.",
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'mac-1',
    question: 'Who says "Fair is foul, and foul is fair"?',
    type: 'multiple-choice',
    options: ['Macbeth', 'Lady Macbeth', 'The Witches', 'Banquo'],
    correctIndex: 2,
    explanation:
      'The Witches speak this paradox in Act 1, Scene 1, establishing the theme of moral inversion that runs throughout the entire play.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'mac-2',
    question: 'What title does Macbeth hold at the start of the play?',
    type: 'multiple-choice',
    options: ['Thane of Cawdor', 'Thane of Glamis', 'King of Scotland', 'Duke of Albany'],
    correctIndex: 1,
    explanation:
      "Macbeth begins the play as Thane of Glamis. He is given the title Thane of Cawdor after the previous thane is executed for treason, fulfilling the first of the witches' prophecies.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'mac-3',
    question: 'Who kills Macbeth at the end of the play?',
    type: 'multiple-choice',
    options: ['Malcolm', 'Banquo', 'Macduff', 'Donalbain'],
    correctIndex: 2,
    explanation:
      'Macduff kills Macbeth in the final battle. He reveals he was "from his mother\'s womb untimely ripp\'d" (born by caesarean section), meaning he is not technically "of woman born" and can defeat Macbeth.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'mac-4',
    question: 'Lady Macbeth calls on evil spirits to "unsex me here." What does she mean?',
    type: 'multiple-choice',
    options: [
      'She wants to disguise herself as a man',
      'She wants to strip away her femininity and compassion',
      'She wants to become invisible',
      'She wants to gain supernatural powers of prophecy',
    ],
    correctIndex: 1,
    explanation:
      'Lady Macbeth asks dark spirits to remove the compassion and nurturing associated with womanhood so she can participate in murder without guilt. This links to the theme of gender and masculinity.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'mac-5',
    question: 'What does Macbeth see before he murders Duncan?',
    type: 'multiple-choice',
    options: ["Banquo's ghost", 'A floating dagger', 'The witches', 'A bloody crown'],
    correctIndex: 1,
    explanation:
      'Macbeth hallucinates a floating dagger leading him towards Duncan\'s chamber: "Is this a dagger which I see before me, / The handle toward my hand?" This dramatises his psychological conflict.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'mac-6',
    question:
      'Which character serves as a moral foil to Macbeth by hearing the same prophecy but resisting temptation?',
    type: 'multiple-choice',
    options: ['Malcolm', 'Macduff', 'Banquo', 'Ross'],
    correctIndex: 2,
    explanation:
      'Banquo hears the same witches\' prophecy but responds with caution, warning that "the instruments of darkness tell us truths, / Win us with honest trifles, to betray\'s / In deepest consequence." He resists where Macbeth succumbs.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'mac-7',
    question: 'What does Lady Macbeth obsessively do during her sleepwalking scene?',
    type: 'multiple-choice',
    options: [
      'Search for the murder weapon',
      'Wash her hands',
      'Write confession letters',
      'Call out for Macbeth',
    ],
    correctIndex: 1,
    explanation:
      'Lady Macbeth compulsively washes imaginary blood from her hands, crying "Out, damned spot!" This reverses her earlier dismissal that "a little water clears us of this deed" and shows guilt cannot be suppressed indefinitely.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'mac-8',
    question: 'When was Macbeth written, and who was the reigning monarch?',
    type: 'multiple-choice',
    options: ['1590, Elizabeth I', '1606, James I', '1616, James I', '1599, Elizabeth I'],
    correctIndex: 1,
    explanation:
      'Macbeth was written around 1606 during the reign of James I (James VI of Scotland). Shakespeare crafted the play to flatter his new patron, who traced his ancestry to Banquo and had a documented fascination with witchcraft.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'mac-9',
    question: 'What prophecy do the witches give that makes Macbeth feel invincible?',
    type: 'multiple-choice',
    options: [
      'He will live forever',
      'No man born of woman can harm him',
      'He will always win in battle',
      'No weapon can pierce his armour',
    ],
    correctIndex: 1,
    explanation:
      'The witches tell Macbeth that "none of woman born / Shall harm Macbeth." This is a deliberate equivocation: Macduff was born by caesarean section and therefore not technically "of woman born."',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'mac-10',
    question:
      'What technique do the witches use when they speak in a different rhythm from other characters?',
    type: 'multiple-choice',
    options: ['Iambic pentameter', 'Free verse', 'Trochaic tetrameter', 'Heroic couplets'],
    correctIndex: 2,
    explanation:
      "The witches speak in trochaic tetrameter (stressed-unstressed pattern), which contrasts with the court's standard iambic pentameter. This marks them as creatures outside the natural order.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'mac-11',
    question: "Why does Malcolm test Macduff's loyalty in Act 4, Scene 3?",
    type: 'multiple-choice',
    options: [
      'He suspects Macduff is a spy for Macbeth',
      'He wants to prove Macduff genuinely cares about Scotland, not personal gain',
      'He wants Macduff to prove his fighting ability',
      'He is trying to delay going to war',
    ],
    correctIndex: 1,
    explanation:
      "Malcolm pretends to be riddled with vices to test whether Macduff is motivated by genuine concern for Scotland. This shows Malcolm's political wisdom, a quality his father Duncan lacked, and establishes him as a shrewder ruler.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'mac-12',
    question:
      "What is the significance of Duncan's line \"There's no art / To find the mind's construction in the face\"?",
    type: 'multiple-choice',
    options: [
      'It shows Duncan is a poor judge of art',
      'It is dramatically ironic because he immediately trusts the new Thane of Cawdor, Macbeth',
      'It proves Duncan knows Macbeth is plotting against him',
      'It suggests Duncan cannot see properly',
    ],
    correctIndex: 1,
    explanation:
      "Duncan observes that you cannot read someone's thoughts from their face, having just been betrayed by the previous Thane of Cawdor. The dramatic irony is devastating: he says this while placing his trust in the new Thane of Cawdor, Macbeth, who is already contemplating murder.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'mac-13',
    question: "How does Macduff challenge Lady Macbeth's definition of masculinity?",
    type: 'multiple-choice',
    options: [
      'By refusing to fight',
      'By insisting he "must also feel it as a man" when grieving',
      'By crying in front of the army',
      'By forgiving Macbeth',
    ],
    correctIndex: 1,
    explanation:
      'When Malcolm tells Macduff to "Dispute it like a man," Macduff responds: "I shall do so; / But I must also feel it as a man." This directly challenges Lady Macbeth\'s reductive definition that equates manhood with violent action, offering an alternative model that includes emotional depth.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'mac-14',
    question:
      'What does the metaphor "I am in blood / Stepp\'d in so far" suggest about Macbeth\'s moral state?',
    type: 'multiple-choice',
    options: [
      'He has been wounded in battle',
      'He has crossed a moral threshold where repentance feels as difficult as continuing',
      'He is standing in a river',
      'He is suffering from a guilty conscience for the first time',
    ],
    correctIndex: 1,
    explanation:
      'This extended metaphor imagines guilt as a river of blood crossed halfway. The word "tedious" is chillingly understated: returning to virtue has become merely inconvenient. It suggests that once a certain threshold of evil is crossed, the moral cost of repentance feels equal to continuing.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'mac-15',
    question: 'How does the Gunpowder Plot of 1605 connect to the themes of Macbeth?',
    type: 'multiple-choice',
    options: [
      'It inspired the battle scenes',
      'Its themes of treason, regicide, and equivocation had intense topical resonance',
      'It caused Shakespeare to stop writing tragedies',
      'It led to the play being banned',
    ],
    correctIndex: 1,
    explanation:
      "The Gunpowder Plot, in which Catholic conspirators attempted to assassinate James I, occurred just months before Macbeth was written. The play's themes of treason, regicide, and equivocation (the Porter scene directly references it) would have carried powerful topical resonance for Jacobean audiences.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'mac-16',
    question:
      'What literary term describes Lady Macbeth\'s instruction to "look like the innocent flower, / But be the serpent under\'t"?',
    type: 'multiple-choice',
    options: [
      'Pathetic fallacy',
      'Dramatic irony',
      'Biblical allusion combined with the theme of appearance vs reality',
      'Soliloquy',
    ],
    correctIndex: 2,
    explanation:
      "This combines a biblical allusion to the serpent in the Garden of Eden with the theme of appearance versus reality. It aligns the Macbeths' planned regicide with original sin, casting Duncan as an innocent Adam and the Macbeths as agents of the devil.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'mac-17',
    question:
      'Why does Shakespeare transform Banquo from a co-conspirator (in the source material) to an innocent victim?',
    type: 'multiple-choice',
    options: [
      'To make the play shorter',
      'Because James I traced his ancestry to Banquo and Shakespeare wanted to flatter his patron',
      'Because the historical Banquo was innocent',
      'To add more characters to the play',
    ],
    correctIndex: 1,
    explanation:
      "In Holinshed's Chronicles (Shakespeare's source), Banquo helped Macbeth murder Duncan. Shakespeare made Banquo noble and innocent because James I traced his royal lineage through Banquo's son Fleance. Making Banquo a co-conspirator would have insulted the king.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'mac-18',
    question:
      'How does Macbeth\'s soliloquy "Tomorrow, and tomorrow, and tomorrow" function as a commentary on his entire tragic arc?',
    type: 'multiple-choice',
    options: [
      'It shows he is looking forward to the future',
      'It reveals a man stripped of all meaning by his own actions, seeing life as empty performance',
      'It demonstrates his renewed ambition',
      'It is a prayer for forgiveness',
    ],
    correctIndex: 1,
    explanation:
      'This nihilistic soliloquy reduces human existence to "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." It represents the ultimate consequence of Macbeth\'s ambition: not punishment from outside but the realisation that he has emptied his own life of all purpose, love, and meaning.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'mac-19',
    question: 'How does Shakespeare use the motif of sleep to reinforce the theme of guilt?',
    type: 'multiple-choice',
    options: [
      'Sleep represents power and control',
      'Sleep represents innocence and peace of mind, which Macbeth destroys by murdering the sleeping Duncan',
      'Sleep is used only as a plot device',
      'Sleep symbolises laziness and complacency',
    ],
    correctIndex: 1,
    explanation:
      'The voice that cries "Sleep no more! Macbeth does murder sleep" creates a symbolic link between guilt and insomnia. By murdering the sleeping Duncan, Macbeth has destroyed his own capacity for rest and innocence. Lady Macbeth\'s sleepwalking scene later inverts this: she cannot sleep peacefully because her guilt erupts unconsciously.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'mac-20',
    question:
      'What is the significance of the witches calling Macbeth "something wicked" rather than "someone wicked"?',
    type: 'multiple-choice',
    options: [
      'It is a grammatical error',
      'It strips Macbeth of his humanity, suggesting he has been so corrupted that even the witches recognise him as a thing, not a person',
      'It shows the witches admire him',
      'It indicates they cannot see him clearly',
    ],
    correctIndex: 1,
    explanation:
      'The Second Witch says "By the pricking of my thumbs, / Something wicked this way comes." The use of "something" rather than "someone" strips Macbeth of his humanity. By Act 4, he has become so corrupted by violence that even the agents of evil themselves recognise him as wicked, dehumanising him in the process.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Ambition',
    summary:
      'Ambition is the engine of the entire tragedy, but Shakespeare does not present it as inherently evil.',
    keyPoints: [
      'Macbeth\'s "vaulting ambition, which o\'erleaps itself"',
      'Lady Macbeth channels ambition through her husband by questioning his manhood',
      'Banquo hears the same prophecy but does not act on it, proving ambition requires a willing agent',
      'Each murder becomes easier, suggesting ambition overrides conscience once unleashed',
      'The Gunpowder Plot gave the theme of unchecked ambition intense topical resonance',
    ],
  },
  {
    topic: 'Guilt and Conscience',
    summary:
      "Guilt pervades the play from the moment of Duncan's murder, manifesting in hallucinations, insomnia, and madness.",
    keyPoints: [
      'Macbeth\'s floating dagger and inability to say "Amen"',
      '"Sleep no more! Macbeth does murder sleep" links guilt to insomnia',
      'Lady Macbeth\'s initial dismissal ("A little water") is reversed in her sleepwalking scene',
      "Banquo's ghost is a physical manifestation of guilt",
      'Shakespeare uses guilt as evidence of a moral order that persists regardless of denial',
    ],
  },
  {
    topic: 'The Supernatural',
    summary:
      'Supernatural elements drive the plot and raise questions about fate versus free will.',
    keyPoints: [
      "The witches' prophecies are technically true but deliberately misleading (equivocation)",
      'The play never resolves whether the supernatural controls events or reflects inner desires',
      "James I's Daemonologie (1597) gave witchcraft real cultural weight for Jacobean audiences",
      "Lady Macbeth's invocation of evil spirits parallels demonic possession",
      'The dagger, the ghost, and the apparitions blur the line between reality and hallucination',
    ],
  },
  {
    topic: 'Kingship and Power',
    summary:
      "The play contrasts three models of kingship: Duncan's virtue, Macbeth's tyranny, and Malcolm's wisdom.",
    keyPoints: [
      'Duncan is gracious but fatally trusting',
      'Macbeth rules through fear, losing "honour, love, obedience, troops of friends"',
      'Malcolm\'s "king-becoming graces" provide a checklist against which Macbeth fails',
      'The Divine Right of Kings means regicide violates cosmic order',
      "Nature itself rebels against Macbeth's illegitimate rule",
    ],
  },
  {
    topic: 'Gender and Masculinity',
    summary:
      'Shakespeare interrogates what it means to be a man, contrasting toxic and compassionate models of masculinity.',
    keyPoints: [
      'Lady Macbeth equates manhood with violence: "When you durst do it, then you were a man"',
      'She asks to be "unsexed," rejecting femininity as incompatible with ruthlessness',
      'Macduff offers an alternative: "I must also feel it as a man"',
      'Macbeth manipulates the murderers using the same gendered taunts his wife used on him',
      "Lady Macbeth's breakdown shows the cost of rejecting compassion and nurturing",
    ],
  },
  {
    topic: 'Appearance vs Reality',
    summary:
      "Nothing in Macbeth is what it seems, from the witches' equivocations to the characters' deceptions.",
    keyPoints: [
      '"Fair is foul, and foul is fair" establishes moral instability',
      '"Look like the innocent flower, / But be the serpent under\'t"',
      'The Gunpowder Plot trials exposed the Jesuit doctrine of equivocation',
      "The witches' prophecies are literally true but deliberately misleading",
      'Self-deception: both Macbeths believe they can commit murder without lasting consequence',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present the theme of ambition in Macbeth?',
  'Starting with this extract, how does Shakespeare present Lady Macbeth as a powerful character?',
  'How does Shakespeare use the supernatural to create tension and convey meaning in Macbeth?',
  'How does Shakespeare explore the theme of guilt and its consequences in Macbeth?',
  'How does Shakespeare present ideas about masculinity and gender in Macbeth?',
]

export default async function MacbethPage() {
  const board = await getServerBoard()
  if (board && !['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'].includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'
  return (
    <>
      <CourseJsonLd
        name="Macbeth — Complete GCSE Study Guide"
        description="In-depth study guide for Macbeth covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <LearningResourceJsonLd
        name="Macbeth revision guide"
        description="GCSE-aligned study guide for Macbeth covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/macbeth"
        about="Macbeth"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/revision/texts/macbeth' },
        ]}
      />
      <TextStudyHub
        textName="Macbeth"
        textType="play"
        examBoard={userBoardLabel}
        basePath="/revision/texts/macbeth"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/macbeth/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/macbeth/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/macbeth/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/macbeth/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/macbeth/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/macbeth/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/macbeth/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shakespeare present the theme of ambition in Macbeth?',
          'How does Shakespeare present Lady Macbeth as a powerful character?',
          'How does Shakespeare use the supernatural to create tension in Macbeth?',
          'How does Shakespeare explore the theme of guilt in Macbeth?',
          'How does Shakespeare present the relationship between Macbeth and Lady Macbeth?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Macbeth"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <section aria-labelledby="macbeth-introduction" className="mx-auto my-12 max-w-3xl px-4">
        <h2
          id="macbeth-introduction"
          className="mb-4 font-serif text-3xl font-semibold text-ink-950"
        >
          Macbeth at a glance
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-ink-950/85">
          <p>
            Macbeth is Shakespeare&rsquo;s shortest tragedy and one of the most frequently examined
            texts at GCSE in England and Wales. Written around 1606, the play follows a Scottish
            general who, spurred on by three witches&rsquo; prophecy and the relentless persuasion
            of his wife, murders King Duncan to seize the throne. What begins as a single act of
            regicide becomes a spiralling tyranny: each killing requires another, and
            Macbeth&rsquo;s reign collapses under paranoia, hallucination and the rebellion of his
            own nobles. By the final act both Macbeth and Lady Macbeth are destroyed by the very
            ambition that promised them everything.
          </p>
          <p>
            The play&rsquo;s central themes are tightly interwoven. Ambition is the engine, but it
            cannot operate alone: it requires the supernatural prompting of the witches, the goading
            of Lady Macbeth, and Macbeth&rsquo;s own willingness to act. Guilt then haunts both
            protagonists in markedly different ways &mdash; Macbeth externalises it as floating
            daggers and the ghost of Banquo; Lady Macbeth suppresses it until it erupts in her
            sleepwalking scene. Power and kingship are tested through the contrast of Duncan&rsquo;s
            divinely sanctioned rule, Macbeth&rsquo;s tyranny, and Malcolm&rsquo;s restoration.
            Running underneath all of this is a sustained interrogation of fate versus free will:
            the witches prophesy what Macbeth might become, but Banquo hears the same words and
            refuses to act on them.
          </p>
          <p>
            Macbeth is examined heavily because it sits on the Shakespeare paper of every major
            English Literature specification. AQA, Edexcel, OCR and Eduqas all list it as a set
            option for GCSE Literature, and it remains the single most-taught Shakespeare text in UK
            schools. Examiners reward responses that move beyond plot summary to engage with
            Shakespeare&rsquo;s methods (AO2): the trochaic tetrameter of the witches, the chiastic
            phrasing of &ldquo;fair is foul, and foul is fair&rdquo;, the blood and sleep motifs,
            and the recurring images of light and darkness. Strong essays also locate the play in
            its Jacobean context (AO3) &mdash; the Gunpowder Plot of 1605, James I&rsquo;s personal
            interest in witchcraft and his descent from Banquo, and the doctrine of the Divine Right
            of Kings.
          </p>
          <p>
            For revision, prioritise three things: memorise a small bank of quotations exactly,
            track each theme across the whole play, and practise pivoting from method to meaning to
            context within a single paragraph. That integrated movement is what distinguishes Grade
            7+ responses from competent retellings. The guide below covers plot, characters, themes,
            key quotations, context and essay plans &mdash; start with the Top 5 quotes widget, then
            move into the act-by-act analysis.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="macbeth-top-quotes"
        className="mx-auto my-8 max-w-3xl rounded-lg bg-cream-100 p-6 ring-1 ring-ink-950/5 sm:p-8"
      >
        <h2 id="macbeth-top-quotes" className="mb-2 font-serif text-2xl font-semibold text-ink-950">
          Top 5 quotes you must know for AO2
        </h2>
        <p className="mb-6 text-sm text-ink-950/75">
          Five exam-essential quotations with focused AO2 readings. Memorise the wording exactly
          &mdash; precise quotation is the foundation of Grade 7+ analysis.
        </p>
        <ol className="space-y-6">
          {TOP_FIVE_QUOTES.map((q, i) => (
            <li key={q.character} className="border-l-4 border-emerald-400 pl-4">
              <div className="mb-2 flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-mono text-xs font-semibold text-emerald-700"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-serif text-lg italic leading-snug text-ink-950">{q.quote}</p>
              </div>
              <p className="mb-2 text-sm font-medium text-ink-950/80">{q.character}</p>
              <p className="text-sm leading-relaxed text-ink-950/85">
                <span className="font-semibold text-ink-950">AO2 reading: </span>
                {q.ao2}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <TextGuide data={data} />

      <section aria-labelledby="macbeth-compare-with" className="mx-auto my-12 max-w-3xl px-4">
        <h2
          id="macbeth-compare-with"
          className="mb-2 font-serif text-2xl font-semibold text-ink-950"
        >
          Compare with
        </h2>
        <p className="mb-6 text-sm text-ink-950/75">
          Comparative thinking is rewarded by examiners across boards. Cross-reference Macbeth with
          these set texts to strengthen your thematic essays.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {COMPARISON_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10 transition hover:ring-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <h3 className="mb-2 font-serif text-lg font-semibold text-ink-950 group-hover:text-emerald-700">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-950/80">{card.reason}</p>
              <span
                aria-hidden="true"
                className="mt-3 inline-block text-xs font-semibold text-emerald-700"
              >
                Open guide &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <EmailCaptureCard
        magnetTitle="Free Macbeth revision pack"
        magnetDescription="A focused PDF with key quotes, themes, and essay-plan templates. Coming soon — get notified when it lands."
        magnetSlug="macbeth-revision-pack"
        className="mt-12"
      />
    </>
  )
}
